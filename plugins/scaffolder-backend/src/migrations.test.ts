/*
 * Copyright 2023 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Knex } from 'knex';
import { TestDatabases } from '@backstage/backend-test-utils';
import crypto from 'crypto';
import fs from 'fs';

const migrationsDir = `${__dirname}/../migrations`;
const migrationsFiles = fs.readdirSync(migrationsDir).sort();

async function migrateUpOnce(knex: Knex): Promise<void> {
  await knex.migrate.up({ directory: migrationsDir });
}

async function migrateDownOnce(knex: Knex): Promise<void> {
  await knex.migrate.down({ directory: migrationsDir });
}

async function migrateUntilBefore(knex: Knex, target: string): Promise<void> {
  const index = migrationsFiles.indexOf(target);
  if (index === -1) {
    throw new Error(`Migration ${target} not found`);
  }
  for (let i = 0; i < index; i++) {
    await migrateUpOnce(knex);
  }
}

jest.setTimeout(60_000);

describe('migrations', () => {
  const databases = TestDatabases.create({
    ids: ['POSTGRES_13', 'POSTGRES_9', 'MYSQL_8', 'SQLITE_3'],
  });

  it.each(databases.eachSupportedId())(
    '20210120143715_init, %p',
    async databaseId => {
      const knex = await databases.init(databaseId);

      await migrateUntilBefore(knex, '20210120143715_init.js');
      await migrateUpOnce(knex);

      const uuid = crypto.randomUUID();
      const now = knex.fn.now();

      await knex('tasks').insert({
        id: uuid,
        spec: 'spec',
        status: 'status',
        last_heartbeat_at: now,
      });

      await expect(knex('tasks')).resolves.toEqual([
        {
          id: uuid,
          spec: 'spec',
          status: 'status',
          created_at: expect.anything(),
          last_heartbeat_at: expect.anything(),
        },
      ]);

      const one = databaseId.match(/POSTGRES/) ? '1' : 1;

      await knex('task_events').insert({
        task_id: uuid,
        body: 'body',
        event_type: 'event_type',
      });

      await expect(knex('task_events')).resolves.toEqual([
        {
          id: one,
          task_id: uuid,
          body: 'body',
          event_type: 'event_type',
          created_at: expect.anything(),
        },
      ]);

      await migrateDownOnce(knex);

      // Assert table is deleted
      await expect(knex('tasks')).rejects.toEqual(expect.anything());

      // Assert table is deleted
      await expect(knex('task_events')).rejects.toEqual(expect.anything());

      await knex.destroy();
    },
  );
});
