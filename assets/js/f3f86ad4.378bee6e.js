/*! For license information please see f3f86ad4.378bee6e.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[979694],{148419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=n(824246),r=n(511151);const a={id:"configuration",title:"Catalog Configuration",description:"Documentation on Software Catalog Configuration"},s=void 0,i={id:"features/software-catalog/configuration",title:"Catalog Configuration",description:"Documentation on Software Catalog Configuration",source:"@site/../docs/features/software-catalog/configuration.md",sourceDirName:"features/software-catalog",slug:"/features/software-catalog/configuration",permalink:"/docs/features/software-catalog/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/software-catalog/configuration.md",tags:[],version:"current",frontMatter:{id:"configuration",title:"Catalog Configuration",description:"Documentation on Software Catalog Configuration"},sidebar:"docs",previous:{title:"The Life of an Entity",permalink:"/docs/features/software-catalog/life-of-an-entity"},next:{title:"System Model",permalink:"/docs/features/software-catalog/system-model"}},c={},l=[{value:"Processors",id:"processors",level:2},{value:"Static Location Configuration",id:"static-location-configuration",level:3},{value:"Local File (<code>type: file</code>) Configurations",id:"local-file-type-file-configurations",level:3},{value:"Integration Processors",id:"integration-processors",level:3},{value:"Custom Processors",id:"custom-processors",level:3},{value:"Catalog Rules",id:"catalog-rules",level:2},{value:"Readonly mode",id:"readonly-mode",level:2},{value:"Clean up orphaned entities",id:"clean-up-orphaned-entities",level:2},{value:"Processing Interval",id:"processing-interval",level:2},{value:"Subscribing to Catalog Errors",id:"subscribing-to-catalog-errors",level:2},{value:"Logging Errors",id:"logging-errors",level:3},{value:"Custom Error Handling",id:"custom-error-handling",level:3}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h2,{id:"processors",children:"Processors"}),"\n",(0,o.jsxs)(t.p,{children:["The catalog has a concept of ",(0,o.jsx)(t.em,{children:"processors"})," to perform catalog ingestion tasks,\nsuch as reading raw entity data from a remote source, parsing it, transforming\nit, and validating it. These processors are configured under the\n",(0,o.jsx)(t.code,{children:"catalog.processors"})," configuration key."]}),"\n",(0,o.jsx)(t.h3,{id:"static-location-configuration",children:"Static Location Configuration"}),"\n",(0,o.jsxs)(t.p,{children:["The simplest configuration for the catalog, as shown in the default\n",(0,o.jsx)(t.code,{children:"@backstage/create-app"})," template, is to declaratively add locations pointing to\nYAML files with ",(0,o.jsx)(t.a,{href:"/docs/conf/",children:"static configuration"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Locations are added to the catalog under the ",(0,o.jsx)(t.code,{children:"catalog.locations"})," key:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: url\n      target: https://github.com/backstage/backstage/blob/master/packages/catalog-model/examples/components/artist-lookup-component.yaml\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"url"})," type locations are handled by a standard processor included with the\ncatalog (",(0,o.jsx)(t.code,{children:"UrlReaderProcessor"}),"), so no processor configuration is needed. This\nprocessor ",(0,o.jsx)(t.em,{children:"does however"})," need an ",(0,o.jsx)(t.a,{href:"/docs/integrations/",children:"integration"})," to\nunderstand how to retrieve a given URL. For the example above, you would need to\nconfigure the ",(0,o.jsx)(t.a,{href:"/docs/integrations/github/locations",children:"GitHub integration"})," to\nread files from github.com."]}),"\n",(0,o.jsx)(t.p,{children:"The locations added through static configuration cannot be removed through the\ncatalog locations API. To remove these locations, you must remove them from the\nconfiguration."}),"\n",(0,o.jsxs)(t.p,{children:["Syntax errors or other types of errors present in ",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," files will\nbe logged for investigation. Errors do not cause processing to abort."]}),"\n",(0,o.jsxs)(t.p,{children:["When multiple ",(0,o.jsx)(t.code,{children:"catalog-info.yaml"})," files with the same ",(0,o.jsx)(t.code,{children:"metadata.name"})," property\nare discovered, one will be processed and all others will be skipped. This\naction is logged for further investigation."]}),"\n",(0,o.jsxs)(t.h3,{id:"local-file-type-file-configurations",children:["Local File (",(0,o.jsx)(t.code,{children:"type: file"}),") Configurations"]}),"\n",(0,o.jsxs)(t.p,{children:["In addition to url locations, you can use the ",(0,o.jsx)(t.code,{children:"file"})," location type to bring in content from the local file system. You should only use this for local development, test setups, and example data, not for production data.\nYou are also not able to use placeholders in them like ",(0,o.jsx)(t.code,{children:"$text"}),", ",(0,o.jsx)(t.code,{children:"$json"})," or ",(0,o.jsx)(t.code,{children:"$yaml"}),". You can however reference other files relative to the current file. See the full ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/packages/catalog-model/examples",children:"catalog example data set here"})," for an extensive example."]}),"\n",(0,o.jsxs)(t.p,{children:["Here is an example pulling in the ",(0,o.jsx)(t.code,{children:"all.yaml"})," file from the examples folder. Note the use of ",(0,o.jsx)(t.code,{children:"../../"})," to go up two levels from the current execution path of the backend. This is typically ",(0,o.jsx)(t.code,{children:"packages/backend/"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  locations:\n    - type: file\n      target: ../../examples/all.yaml\n"})}),"\n",(0,o.jsx)(t.h3,{id:"integration-processors",children:"Integration Processors"}),"\n",(0,o.jsxs)(t.p,{children:["Integrations may simply provide a mechanism to handle ",(0,o.jsx)(t.code,{children:"url"})," location type for an\nexternal provider or they may also include additional processors out of the\nbox, such as the GitHub ",(0,o.jsx)(t.a,{href:"/docs/integrations/github/discovery",children:"discovery"}),"\nprocessor that scans a GitHub organization for\n",(0,o.jsx)(t.a,{href:"/docs/features/software-catalog/descriptor-format",children:"entity descriptor files"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["Check the ",(0,o.jsx)(t.a,{href:"/docs/integrations/",children:"integrations"})," documentation to see what\nis offered by each integration."]}),"\n",(0,o.jsx)(t.h3,{id:"custom-processors",children:"Custom Processors"}),"\n",(0,o.jsxs)(t.p,{children:["To ingest entities from an existing system already tracking software, you can\nalso write a ",(0,o.jsx)(t.em,{children:"custom processor"})," to convert between the existing system and\nBackstage's descriptor format. This is documented in\n",(0,o.jsx)(t.a,{href:"/docs/features/software-catalog/external-integrations",children:"External Integrations"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"catalog-rules",children:"Catalog Rules"}),"\n",(0,o.jsxs)(t.p,{children:["By default, the catalog will only allow the ingestion of entities with the kind\n",(0,o.jsx)(t.code,{children:"Component"}),", ",(0,o.jsx)(t.code,{children:"API"}),", and ",(0,o.jsx)(t.code,{children:"Location"}),". In order to allow entities of other kinds to\nbe added, you need to add rules to the catalog. Rules are added either in a\nseparate ",(0,o.jsx)(t.code,{children:"catalog.rules"})," key or added to statically configured locations."]}),"\n",(0,o.jsx)(t.p,{children:"For example, given the following configuration:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  rules:\n    - allow: [Component, API, Location, Template]\n\n  locations:\n    - type: url\n      target: https://github.com/org/example/blob/master/org-data.yaml\n      rules:\n        - allow: [Group]\n"})}),"\n",(0,o.jsxs)(t.p,{children:["We are able to add entities of kind ",(0,o.jsx)(t.code,{children:"Component"}),", ",(0,o.jsx)(t.code,{children:"API"}),", ",(0,o.jsx)(t.code,{children:"Location"}),", or\n",(0,o.jsx)(t.code,{children:"Template"})," from any location, and ",(0,o.jsx)(t.code,{children:"Group"})," entities from the ",(0,o.jsx)(t.code,{children:"org-data.yaml"}),",\nwhich will also be read as a statically configured location."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that if the ",(0,o.jsx)(t.code,{children:"catalog.rules"})," key is present it will replace the default\nvalue, meaning that you need to add rules for the default kinds if you want\nthose to still be allowed."]}),"\n",(0,o.jsx)(t.p,{children:"The following configuration will reject any kind of entities from being added to\nthe catalog:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  rules: []\n"})}),"\n",(0,o.jsx)(t.h2,{id:"readonly-mode",children:"Readonly mode"}),"\n",(0,o.jsxs)(t.p,{children:["Processors provide a good way to automate the ingestion of entities when combined\nwith ",(0,o.jsx)(t.a,{href:"#static-location-configuration",children:"Static Location Configuration"})," or a\ndiscovery processor like\n",(0,o.jsx)(t.a,{href:"/docs/integrations/github/discovery",children:"GitHub Discovery"}),". To enforce the usage of\nprocessors to locate entities we can configure the catalog into ",(0,o.jsx)(t.code,{children:"readonly"})," mode.\nThis configuration disables registering and deleting locations with the catalog APIs."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  readonly: true\n"})}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"Note that any plugin relying on the catalog API for creating, updating, and\ndeleting entities will not work in this mode."})}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["Deleting an entity by UUID, ",(0,o.jsx)(t.code,{children:"DELETE /entities/by-uid/:uid"}),", is allowed when using this mode. It may be rediscovered as noted in ",(0,o.jsx)(t.a,{href:"/docs/features/software-catalog/life-of-an-entity#explicit-deletion",children:"explicit deletion"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["A common use case for this configuration is when organizations have a remote\nsource that should be mirrored into Backstage. To make Backstage a mirror of\nthis remote source, users cannot also register new entities with e.g. the\n",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/catalog-import",children:"catalog-import"}),"\nplugin."]}),"\n",(0,o.jsx)(t.h2,{id:"clean-up-orphaned-entities",children:"Clean up orphaned entities"}),"\n",(0,o.jsxs)(t.p,{children:["In short, entities can become orphaned through multiple means, such as when a catalog-info YAML file is moved from one place to another in the version control system without updating the registration in the catalog. For safety reasons, the default behavior is to just tag the orphaned entities, and keep them around. You can read more about orphaned entities ",(0,o.jsx)(t.a,{href:"/docs/features/software-catalog/life-of-an-entity#orphaning",children:"here"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"However, if you do wish to automatically remove the orphaned entities, you can use the following configuration, and everything with an orphaned entity tag will be eventually deleted."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  orphanStrategy: delete\n"})}),"\n",(0,o.jsx)(t.h2,{id:"processing-interval",children:"Processing Interval"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.a,{href:"https://backstage.io/docs/features/software-catalog/life-of-an-entity",children:"processing loop"})," is\nresponsible for running your registered processors on all entities, on a certain\ninterval. That interval can be configured with the ",(0,o.jsx)(t.code,{children:"processingInterval"}),"\napp-config parameter."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-yaml",children:"catalog:\n  processingInterval: { minutes: 45 }\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The value is a duration object, that has one or more of the fields ",(0,o.jsx)(t.code,{children:"years"}),",\n",(0,o.jsx)(t.code,{children:"months"}),", ",(0,o.jsx)(t.code,{children:"weeks"}),", ",(0,o.jsx)(t.code,{children:"days"}),", ",(0,o.jsx)(t.code,{children:"hours"}),", ",(0,o.jsx)(t.code,{children:"minutes"}),", ",(0,o.jsx)(t.code,{children:"seconds"}),", and ",(0,o.jsx)(t.code,{children:"milliseconds"}),".\nYou can combine them, for example as ",(0,o.jsx)(t.code,{children:"{ hours: 1, minutes: 15 }"})," which\nessentially means that you want the processing loop to visit entities roughly\nonce every 75 minutes."]}),"\n",(0,o.jsx)(t.p,{children:"Note that this is only a suggested minimum, and the actual interval may be\nlonger. Internally, the catalog will scale up this number by a small factor and\nchoose random numbers in that range to spread out the load. If the catalog is\noverloaded and cannot process all entities during the interval, the time taken\nbetween processing runs of any given entity may also be longer than specified\nhere."}),"\n",(0,o.jsx)(t.p,{children:"Setting this value too low risks exhausting rate limits on external systems that\nare queried by processors, such as version control systems housing catalog-info\nfiles."}),"\n",(0,o.jsx)(t.h2,{id:"subscribing-to-catalog-errors",children:"Subscribing to Catalog Errors"}),"\n",(0,o.jsxs)(t.p,{children:["Catalog errors are published to the ",(0,o.jsx)(t.a,{href:"https://github.com/backstage/backstage/tree/master/plugins/events-node",children:"events plugin"}),": ",(0,o.jsx)(t.code,{children:"@backstage/plugin-events-node"}),". You can subscribe to events and respond to errors, for example you may wish to log them."]}),"\n",(0,o.jsx)(t.p,{children:"The first step is to add the events backend plugin to your Backstage application. Navigate to your Backstage application directory and add the plugin package."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-events-backend\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now you can install the events backend plugin in your backend."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-events-backend/alpha'));\n"})}),"\n",(0,o.jsx)(t.h3,{id:"logging-errors",children:"Logging Errors"}),"\n",(0,o.jsxs)(t.p,{children:["If you want to log catalog errors you can install the ",(0,o.jsx)(t.code,{children:"@backstage/plugin-catalog-backend-module-logs"})," module."]}),"\n",(0,o.jsx)(t.p,{children:"Install the catalog logs module."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="From your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-catalog-backend-module-logs\n"})}),"\n",(0,o.jsx)(t.p,{children:"Add the module to your backend."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-catalog-backend-module-logs'));\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This will log errors with a level of ",(0,o.jsx)(t.code,{children:"warn"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"You should now see logs as the catalog emits events. Example:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"[1] 2024-06-07T00:00:28.787Z events warn Policy check failed for user:default/guest; caused by Error: Malformed envelope, /metadata/tags must be array entity=user:default/guest location=file:/Users/foobar/code/backstage-demo-instance/examples/org.yaml\n"})}),"\n",(0,o.jsx)(t.h3,{id:"custom-error-handling",children:"Custom Error Handling"}),"\n",(0,o.jsx)(t.p,{children:"If you wish to handle catalog errors with specific logic different from logging the errors the following should help you get started. For example, you may wish to send a notification or create a ticket for someone to investigate."}),"\n",(0,o.jsxs)(t.p,{children:["Create a backend module that subscribes to the catalog error events. The topic is ",(0,o.jsx)(t.code,{children:"experimental.catalog.errors"}),"."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"import { CATALOG_ERRORS_TOPIC } from '@backstage/plugin-catalog-backend';\nimport {\n  coreServices,\n  createBackendModule,\n} from '@backstage/backend-plugin-api';\nimport { eventsServiceRef, EventParams } from '@backstage/plugin-events-node';\n\ninterface EventsPayload {\n  entity: string;\n  location?: string;\n  errors: Error[];\n}\n\ninterface EventsParamsWithPayload extends EventParams {\n  eventPayload: EventsPayload;\n}\n\nconst eventsModuleCatalogErrors = createBackendModule({\n  pluginId: 'events',\n  moduleId: 'catalog-errors',\n  register(env) {\n    env.registerInit({\n      deps: {\n        events: eventsServiceRef,\n        logger: coreServices.logger,\n      },\n      async init({ events, logger }) {\n        events.subscribe({\n          id: 'catalog',\n          topics: [CATALOG_ERRORS_TOPIC],\n          async onEvent(params: EventParams): Promise<void> {\n            const event = params as EventsParamsWithPayload;\n            const { entity, location, errors } = event.eventPayload;\n            // Add custom logic here for responding to errors\n            for (const error of errors) {\n              logger.warn(error.message, {\n                entity,\n                location,\n              });\n            }\n          },\n        });\n      },\n    });\n  },\n});\n"})}),"\n",(0,o.jsx)(t.p,{children:"Now install your module."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ts",metastring:'title="packages/backend/src/index.ts"',children:"backend.add(eventsModuleCatalogErrors);\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},371426:(e,t,n)=>{var o=n(827378),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,a={},l=null,d=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,o)&&!c.hasOwnProperty(o)&&(a[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===a[o]&&(a[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:d,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},p=Object.assign,m={};function y(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}function x(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||g}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},x.prototype=y.prototype;var b=v.prototype=new x;b.constructor=v,p(b,y.prototype),b.isPureReactComponent=!0;var j=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},_={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,o){var r,a={},s=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(s=""+t.key),t)k.call(t,r)&&!_.hasOwnProperty(r)&&(a[r]=t[r]);var c=arguments.length-2;if(1===c)a.children=o;else if(1<c){for(var l=Array(c),d=0;d<c;d++)l[d]=arguments[d+2];a.children=l}if(e&&e.defaultProps)for(r in c=e.defaultProps)void 0===a[r]&&(a[r]=c[r]);return{$$typeof:n,type:e,key:s,ref:i,props:a,_owner:w.current}}function E(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var S=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function I(e,t,r,a,s){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case o:c=!0}}if(c)return s=s(c=e),e=""===a?"."+P(c,0):a,j(s)?(r="",null!=e&&(r=e.replace(S,"$&/")+"/"),I(s,t,r,"",(function(e){return e}))):null!=s&&(E(s)&&(s=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(s,r+(!s.key||c&&c.key===s.key?"":(""+s.key).replace(S,"$&/")+"/")+e)),t.push(s)),1;if(c=0,a=""===a?".":a+":",j(e))for(var l=0;l<e.length;l++){var d=a+P(i=e[l],l);c+=I(i,t,r,d,s)}else if(d=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof d)for(e=d.call(e),l=0;!(i=e.next()).done;)c+=I(i=i.value,t,r,d=a+P(i,l++),s);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function R(e,t,n){if(null==e)return e;var o=[],r=0;return I(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var N={current:null},$={transition:null},O={ReactCurrentDispatcher:N,ReactCurrentBatchConfig:$,ReactCurrentOwner:w};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=r,t.Profiler=s,t.PureComponent=v,t.StrictMode=a,t.Suspense=d,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=p({},e.props),a=e.key,s=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(s=t.ref,i=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)k.call(t,l)&&!_.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){c=Array(l);for(var d=0;d<l;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:n,type:e.type,key:a,ref:s,props:r,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:u,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return N.current.useCallback(e,t)},t.useContext=function(e){return N.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return N.current.useDeferredValue(e)},t.useEffect=function(e,t){return N.current.useEffect(e,t)},t.useId=function(){return N.current.useId()},t.useImperativeHandle=function(e,t,n){return N.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return N.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return N.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return N.current.useMemo(e,t)},t.useReducer=function(e,t,n){return N.current.useReducer(e,t,n)},t.useRef=function(e){return N.current.useRef(e)},t.useState=function(e){return N.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return N.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return N.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var o=n(667294);const r={},a=o.createContext(r);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);