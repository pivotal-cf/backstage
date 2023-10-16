/*! For license information please see 68a76301.9aaccf67.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[275615],{507867:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>s,frontMatter:()=>i,metadata:()=>u,toc:()=>l});var t=n(824246),o=n(511151);const i={id:"backend-plugin-api.backendmoduleconfig.pluginid",title:"BackendModuleConfig.pluginId",description:"API reference for BackendModuleConfig.pluginId"},c=void 0,u={unversionedId:"reference/backend-plugin-api.backendmoduleconfig.pluginid",id:"reference/backend-plugin-api.backendmoduleconfig.pluginid",title:"BackendModuleConfig.pluginId",description:"API reference for BackendModuleConfig.pluginId",source:"@site/../docs/reference/backend-plugin-api.backendmoduleconfig.pluginid.md",sourceDirName:"reference",slug:"/reference/backend-plugin-api.backendmoduleconfig.pluginid",permalink:"/docs/reference/backend-plugin-api.backendmoduleconfig.pluginid",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/backend-plugin-api.backendmoduleconfig.pluginid.md",tags:[],version:"current",frontMatter:{id:"backend-plugin-api.backendmoduleconfig.pluginid",title:"BackendModuleConfig.pluginId",description:"API reference for BackendModuleConfig.pluginId"}},a={},l=[];function f(e){const r=Object.assign({p:"p",a:"a",code:"code",strong:"strong",pre:"pre"},(0,o.ah)(),e.components);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api",children:(0,t.jsx)(r.code,{children:"@backstage/backend-plugin-api"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendmoduleconfig",children:(0,t.jsx)(r.code,{children:"BackendModuleConfig"})})," > ",(0,t.jsx)(r.a,{href:"/docs/reference/backend-plugin-api.backendmoduleconfig.pluginid",children:(0,t.jsx)(r.code,{children:"pluginId"})})]}),"\n",(0,t.jsxs)(r.p,{children:["Should exactly match the ",(0,t.jsx)(r.code,{children:"id"})," of the plugin that the module extends."]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"pluginId: string;\n"})})]})}const s=function(e={}){const{wrapper:r}=Object.assign({},(0,o.ah)(),e.components);return r?(0,t.jsx)(r,Object.assign({},e,{children:(0,t.jsx)(f,e)})):f(e)}},862525:e=>{var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,t=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},n=0;n<10;n++)r["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var t={};return"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},t)).join("")}catch(o){return!1}}()?Object.assign:function(e,o){for(var i,c,u=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var l in i=Object(arguments[a]))n.call(i,l)&&(u[l]=i[l]);if(r){c=r(i);for(var f=0;f<c.length;f++)t.call(i,c[f])&&(u[c[f]]=i[c[f]])}}return u}},371426:(e,r,n)=>{n(862525);var t=n(827378),o=60103;if(r.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),r.Fragment=i("react.fragment")}var c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,i={},l=null,f=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(f=r.ref),r)u.call(r,t)&&!a.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:f,props:i,_owner:c.current}}r.jsx=l,r.jsxs=l},541535:(e,r,n)=>{var t=n(862525),o=60103,i=60106;r.Fragment=60107,r.StrictMode=60108,r.Profiler=60114;var c=60109,u=60110,a=60112;r.Suspense=60113;var l=60115,f=60116;if("function"==typeof Symbol&&Symbol.for){var s=Symbol.for;o=s("react.element"),i=s("react.portal"),r.Fragment=s("react.fragment"),r.StrictMode=s("react.strict_mode"),r.Profiler=s("react.profiler"),c=s("react.provider"),u=s("react.context"),a=s("react.forward_ref"),r.Suspense=s("react.suspense"),l=s("react.memo"),f=s("react.lazy")}var p="function"==typeof Symbol&&Symbol.iterator;function d(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)r+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function h(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||y}function m(){}function b(e,r,n){this.props=e,this.context=r,this.refs=g,this.updater=n||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(d(85));this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},m.prototype=h.prototype;var v=b.prototype=new m;v.constructor=b,t(v,h.prototype),v.isPureReactComponent=!0;var k={current:null},_=Object.prototype.hasOwnProperty,j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,n){var t,i={},c=null,u=null;if(null!=r)for(t in void 0!==r.ref&&(u=r.ref),void 0!==r.key&&(c=""+r.key),r)_.call(r,t)&&!j.hasOwnProperty(t)&&(i[t]=r[t]);var a=arguments.length-2;if(1===a)i.children=n;else if(1<a){for(var l=Array(a),f=0;f<a;f++)l[f]=arguments[f+2];i.children=l}if(e&&e.defaultProps)for(t in a=e.defaultProps)void 0===i[t]&&(i[t]=a[t]);return{$$typeof:o,type:e,key:c,ref:u,props:i,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var C=/\/+/g;function x(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function S(e,r,n,t,c){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var a=!1;if(null===e)a=!0;else switch(u){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case o:case i:a=!0}}if(a)return c=c(a=e),e=""===t?"."+x(a,0):t,Array.isArray(c)?(n="",null!=e&&(n=e.replace(C,"$&/")+"/"),S(c,r,n,"",(function(e){return e}))):null!=c&&(w(c)&&(c=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(c,n+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(C,"$&/")+"/")+e)),r.push(c)),1;if(a=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var f=t+x(u=e[l],l);a+=S(u,r,n,f,c)}else if(f=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof f)for(e=f.call(e),l=0;!(u=e.next()).done;)a+=S(u=u.value,r,n,f=t+x(u,l++),c);else if("object"===u)throw r=""+e,Error(d(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r));return a}function E(e,r,n){if(null==e)return e;var t=[],o=0;return S(e,t,"","",(function(e){return r.call(n,e,o++)})),t}function P(e){if(-1===e._status){var r=e._result;r=r(),e._status=0,e._result=r,r.then((function(r){0===e._status&&(r=r.default,e._status=1,e._result=r)}),(function(r){0===e._status&&(e._status=2,e._result=r)}))}if(1===e._status)return e._result;throw e._result}var $={current:null};function R(){var e=$.current;if(null===e)throw Error(d(321));return e}var I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:k,IsSomeRendererActing:{current:!1},assign:t};r.Children={map:E,forEach:function(e,r,n){E(e,(function(){r.apply(this,arguments)}),n)},count:function(e){var r=0;return E(e,(function(){r++})),r},toArray:function(e){return E(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error(d(143));return e}},r.Component=h,r.PureComponent=b,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error(d(267,e));var i=t({},e.props),c=e.key,u=e.ref,a=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,a=k.current),void 0!==r.key&&(c=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(f in r)_.call(r,f)&&!j.hasOwnProperty(f)&&(i[f]=void 0===r[f]&&void 0!==l?l[f]:r[f])}var f=arguments.length-2;if(1===f)i.children=n;else if(1<f){l=Array(f);for(var s=0;s<f;s++)l[s]=arguments[s+2];i.children=l}return{$$typeof:o,type:e.type,key:c,ref:u,props:i,_owner:a}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:u,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:a,render:e}},r.isValidElement=w,r.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:P}},r.memo=function(e,r){return{$$typeof:l,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return R().useCallback(e,r)},r.useContext=function(e,r){return R().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return R().useEffect(e,r)},r.useImperativeHandle=function(e,r,n){return R().useImperativeHandle(e,r,n)},r.useLayoutEffect=function(e,r){return R().useLayoutEffect(e,r)},r.useMemo=function(e,r){return R().useMemo(e,r)},r.useReducer=function(e,r,n){return R().useReducer(e,r,n)},r.useRef=function(e){return R().useRef(e)},r.useState=function(e){return R().useState(e)},r.version="17.0.2"},827378:(e,r,n)=>{e.exports=n(541535)},824246:(e,r,n)=>{e.exports=n(371426)},511151:(e,r,n)=>{n.d(r,{Zo:()=>u,ah:()=>i});var t=n(667294);const o=t.createContext({});function i(e){const r=t.useContext(o);return t.useMemo((()=>"function"==typeof e?e(r):{...r,...e}),[r,e])}const c={};function u({components:e,children:r,disableParentContext:n}){let u;return u=n?"function"==typeof e?e({}):e||c:i(e),t.createElement(o.Provider,{value:u},r)}}}]);