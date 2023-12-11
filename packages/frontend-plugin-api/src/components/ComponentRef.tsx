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

import {
  CoreErrorBoundaryFallbackProps,
  CoreNotFoundErrorPageProps,
  CoreProgressProps,
} from '../types';

/** @public */
export type ComponentRef<T extends {} = {}> = {
  id: string;
  T: T;
};

/** @public */
export function createComponentRef<T extends {} = {}>(options: {
  id: string;
}): ComponentRef<T> {
  const { id } = options;
  return {
    id,
  } as ComponentRef<T>;
}

const coreProgressComponentRef = createComponentRef<CoreProgressProps>({
  id: 'core.components.progress',
});

const coreNotFoundErrorPageComponentRef =
  createComponentRef<CoreNotFoundErrorPageProps>({
    id: 'core.components.notFoundErrorPage',
  });

const coreErrorBoundaryFallbackComponentRef =
  createComponentRef<CoreErrorBoundaryFallbackProps>({
    id: 'core.components.errorBoundaryFallback',
  });

/** @public */
export const coreComponentRefs = {
  progress: coreProgressComponentRef,
  notFoundErrorPage: coreNotFoundErrorPageComponentRef,
  errorBoundaryFallback: coreErrorBoundaryFallbackComponentRef,
};
