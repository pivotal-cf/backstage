/*! For license information please see b06880c5.4793bf99.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[350966],{72746:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(824246),o=r(511151);const i={id:"provider",title:"Cloudflare Access Provider",sidebar_label:"Cloudflare Access",description:"Adding Cloudflare Access as an authentication provider in Backstage"},a=void 0,s={id:"auth/cloudflare/provider",title:"Cloudflare Access Provider",description:"Adding Cloudflare Access as an authentication provider in Backstage",source:"@site/../docs/auth/cloudflare/provider.md",sourceDirName:"auth/cloudflare",slug:"/auth/cloudflare/provider",permalink:"/docs/auth/cloudflare/provider",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/auth/cloudflare/provider.md",tags:[],version:"current",frontMatter:{id:"provider",title:"Cloudflare Access Provider",sidebar_label:"Cloudflare Access",description:"Adding Cloudflare Access as an authentication provider in Backstage"},sidebar:"docs",previous:{title:"Bitbucket Server",permalink:"/docs/auth/bitbucketServer/provider"},next:{title:"GitHub",permalink:"/docs/auth/github/provider"}},c={},l=[{value:"Configuration",id:"configuration",level:2},{value:"Resolvers",id:"resolvers",level:3},{value:"Backend Installation",id:"backend-installation",level:2},{value:"Adding the provider to the Backstage frontend",id:"adding-the-provider-to-the-backstage-frontend",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Similar to GCP IAP Proxy Provider or AWS ALB provider, developers can offload authentication\nsupport to Cloudflare Access."}),"\n",(0,n.jsx)(t.p,{children:"This tutorial shows how to use authentication on Cloudflare Access sitting in\nfront of Backstage."}),"\n",(0,n.jsx)(t.p,{children:"It is assumed a Cloudflare tunnel is already serving traffic in front of a\nBackstage instance configured to serve the frontend app from the backend and is\nalready gated using Cloudflare Access."}),"\n",(0,n.jsx)(t.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(t.p,{children:["Let's start by adding the following ",(0,n.jsx)(t.code,{children:"auth"})," configuration in your\n",(0,n.jsx)(t.code,{children:"app-config.yaml"})," or ",(0,n.jsx)(t.code,{children:"app-config.production.yaml"})," or similar:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"auth:\n  providers:\n    cfaccess:\n      # You can find the team name in the Cloudflare Zero Trust dashboard.\n      teamName: <Team Name>\n      # This service tokens section is optional -- you only need it if you have\n      # some Cloudflare Service Tokens that you want to be able to log in to your\n      # Backstage instance.\n      serviceTokens:\n        - token: '1uh2fh19efvfh129f1f919u21f2f19jf2.access'\n          subject: 'bot-user@your-company.com'\n      # This picks what sign in resolver(s) you want to use.\n      signIn:\n        resolvers:\n          - resolver: emailMatchingUserEntityProfileEmail\n          - resolver: emailLocalPartMatchingUserEntityName\n"})}),"\n",(0,n.jsx)(t.p,{children:"This config section must be in place for the provider to load at all."}),"\n",(0,n.jsx)(t.h3,{id:"resolvers",children:"Resolvers"}),"\n",(0,n.jsx)(t.p,{children:"This provider includes several resolvers out of the box that you can use:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"emailMatchingUserEntityProfileEmail"}),": Matches the email address from the auth provider with the User entity that has a matching ",(0,n.jsx)(t.code,{children:"spec.profile.email"}),". If no match is found it will throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"emailLocalPartMatchingUserEntityName"}),": Matches the ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Email_address#Local-part",children:"local part"})," of the email address from the auth provider with the User entity that has a matching ",(0,n.jsx)(t.code,{children:"name"}),". If no match is found it will throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"Note",type:"note",children:(0,n.jsxs)(t.p,{children:["The resolvers will be tried in order, but will only be skipped if they throw a ",(0,n.jsx)(t.code,{children:"NotFoundError"}),"."]})}),"\n",(0,n.jsxs)(t.p,{children:["If these resolvers do not fit your needs you can build a custom resolver, this is covered in the ",(0,n.jsx)(t.a,{href:"/docs/auth/identity-resolver#building-custom-resolvers",children:"Building Custom Resolvers"})," section of the Sign-in Identities and Resolvers documentation."]}),"\n",(0,n.jsx)(t.h2,{id:"backend-installation",children:"Backend Installation"}),"\n",(0,n.jsx)(t.p,{children:"To add the provider to the backend we will first need to install the package by running this command:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",metastring:'title="from your Backstage root directory"',children:"yarn --cwd packages/backend add @backstage/plugin-auth-backend-module-cloudflare-access-provider\n"})}),"\n",(0,n.jsx)(t.p,{children:"Then we will need to add this line:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",metastring:'title="in packages/backend/src/index.ts"',children:"backend.add(import('@backstage/plugin-auth-backend'));\n/* highlight-add-start */\nbackend.add(\n  import('@backstage/plugin-auth-backend-module-cloudflare-access-provider'),\n);\n/* highlight-add-end */\n"})}),"\n",(0,n.jsx)(t.h2,{id:"adding-the-provider-to-the-backstage-frontend",children:"Adding the provider to the Backstage frontend"}),"\n",(0,n.jsxs)(t.p,{children:["See ",(0,n.jsx)(t.a,{href:"/docs/auth/#sign-in-with-proxy-providers",children:"Sign-In with Proxy Providers"})," for pointers on how to set up the sign-in page, and to also make it work smoothly for local development. You'll use ",(0,n.jsx)(t.code,{children:"cfaccess"})," as the provider name."]}),"\n",(0,n.jsxs)(t.p,{children:["If you ",(0,n.jsx)(t.a,{href:"https://backstage.io/docs/auth/identity-resolver#building-custom-resolvers",children:"provide a custom sign in resolver"}),", you can skip the ",(0,n.jsx)(t.code,{children:"signIn"})," block entirely."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},371426:(e,t,r)=>{var n=r(827378),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,u=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)a.call(t,n)&&!c.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:u,props:i,_owner:s.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},541535:(e,t)=>{var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function v(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}function g(){}function b(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var k=b.prototype=new g;k.constructor=b,y(k,v.prototype),k.isPureReactComponent=!0;var _=Array.isArray,x=Object.prototype.hasOwnProperty,j={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,n){var o,i={},a=null,s=null;if(null!=t)for(o in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)x.call(t,o)&&!w.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:r,type:e,key:a,ref:s,props:i,_owner:j.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var E=/\/+/g;function P(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var c=!1;if(null===e)c=!0;else switch(s){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case r:case n:c=!0}}if(c)return a=a(c=e),e=""===i?"."+P(c,0):i,_(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),R(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(a=function(e,t){return{$$typeof:r,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",_(e))for(var l=0;l<e.length;l++){var u=i+P(s=e[l],l);c+=R(s,t,o,u,a)}else if(u=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof u)for(e=u.call(e),l=0;!(s=e.next()).done;)c+=R(s=s.value,t,o,u=i+P(s,l++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function A(e,t,r){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return t.call(r,e,o++)})),n}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},T={transition:null},O={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:T,ReactCurrentOwner:j};t.Children={map:A,forEach:function(e,t,r){A(e,(function(){t.apply(this,arguments)}),r)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=j.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in t)x.call(t,l)&&!w.hasOwnProperty(l)&&(o[l]=void 0===t[l]&&void 0!==c?c[l]:t[l])}var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];o.children=c}return{$$typeof:r,type:e.type,key:i,ref:a,props:o,_owner:s}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=T.transition;T.transition={};try{e()}finally{T.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,r){return $.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,r){return $.current.useReducer(e,t,r)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return $.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,r)=>{e.exports=r(541535)},824246:(e,t,r)=>{e.exports=r(371426)},511151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>a});var n=r(667294);const o={},i=n.createContext(o);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);