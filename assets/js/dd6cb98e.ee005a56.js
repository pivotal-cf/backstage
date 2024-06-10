/*! For license information please see dd6cb98e.ee005a56.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[440980],{543024:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>u,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=t(824246),o=t(511151);const a={id:"plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions.usertransformer",title:"LdapOrgEntityProviderLegacyOptions.userTransformer",description:"API reference for LdapOrgEntityProviderLegacyOptions.userTransformer"},u=void 0,c={id:"reference/plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions.usertransformer",title:"LdapOrgEntityProviderLegacyOptions.userTransformer",description:"API reference for LdapOrgEntityProviderLegacyOptions.userTransformer",source:"@site/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions.usertransformer.md",sourceDirName:"reference",slug:"/reference/plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions.usertransformer",permalink:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions.usertransformer",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions.usertransformer.md",tags:[],version:"current",frontMatter:{id:"plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions.usertransformer",title:"LdapOrgEntityProviderLegacyOptions.userTransformer",description:"API reference for LdapOrgEntityProviderLegacyOptions.userTransformer"}},i={},s=[];function l(e){const r={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/docs/reference/",children:"Home"})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap",children:(0,n.jsx)(r.code,{children:"@backstage/plugin-catalog-backend-module-ldap"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions",children:(0,n.jsx)(r.code,{children:"LdapOrgEntityProviderLegacyOptions"})})," > ",(0,n.jsx)(r.a,{href:"/docs/reference/plugin-catalog-backend-module-ldap.ldaporgentityproviderlegacyoptions.usertransformer",children:(0,n.jsx)(r.code,{children:"userTransformer"})})]}),"\n",(0,n.jsx)(r.p,{children:"The function that transforms a user entry in LDAP to an entity."}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Signature:"})}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"userTransformer?: UserTransformer;\n"})})]})}function f(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},371426:(e,r,t)=>{var n=t(827378),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function s(e,r,t){var n,a={},s=null,l=null;for(n in void 0!==t&&(s=""+t),void 0!==r.key&&(s=""+r.key),void 0!==r.ref&&(l=r.ref),r)u.call(r,n)&&!i.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:s,ref:l,props:a,_owner:c.current}}r.Fragment=a,r.jsx=s,r.jsxs=s},541535:(e,r)=>{var t=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),i=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),d=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function h(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}function v(){}function _(e,r,t){this.props=e,this.context=r,this.refs=g,this.updater=t||y}h.prototype.isReactComponent={},h.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,r,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var b=_.prototype=new v;b.constructor=_,m(b,h.prototype),b.isPureReactComponent=!0;var k=Array.isArray,S=Object.prototype.hasOwnProperty,E={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function O(e,r,n){var o,a={},u=null,c=null;if(null!=r)for(o in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(u=""+r.key),r)S.call(r,o)&&!j.hasOwnProperty(o)&&(a[o]=r[o]);var i=arguments.length-2;if(1===i)a.children=n;else if(1<i){for(var s=Array(i),l=0;l<i;l++)s[l]=arguments[l+2];a.children=s}if(e&&e.defaultProps)for(o in i=e.defaultProps)void 0===a[o]&&(a[o]=i[o]);return{$$typeof:t,type:e,key:u,ref:c,props:a,_owner:E.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var w=/\/+/g;function P(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return r[e]}))}(""+e.key):r.toString(36)}function R(e,r,o,a,u){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case t:case n:i=!0}}if(i)return u=u(i=e),e=""===a?"."+P(i,0):a,k(u)?(o="",null!=e&&(o=e.replace(w,"$&/")+"/"),R(u,r,o,"",(function(e){return e}))):null!=u&&(x(u)&&(u=function(e,r){return{$$typeof:t,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(u,o+(!u.key||i&&i.key===u.key?"":(""+u.key).replace(w,"$&/")+"/")+e)),r.push(u)),1;if(i=0,a=""===a?".":a+":",k(e))for(var s=0;s<e.length;s++){var l=a+P(c=e[s],s);i+=R(c,r,o,l,u)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),s=0;!(c=e.next()).done;)i+=R(c=c.value,r,o,l=a+P(c,s++),u);else if("object"===c)throw r=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r)+"). If you meant to render a collection of children, use an array instead.");return i}function C(e,r,t){if(null==e)return e;var n=[],o=0;return R(e,n,"","",(function(e){return r.call(t,e,o++)})),n}function $(e){if(-1===e._status){var r=e._result;(r=r()).then((function(r){0!==e._status&&-1!==e._status||(e._status=1,e._result=r)}),(function(r){0!==e._status&&-1!==e._status||(e._status=2,e._result=r)})),-1===e._status&&(e._status=0,e._result=r)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},T={transition:null},I={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:T,ReactCurrentOwner:E};r.Children={map:C,forEach:function(e,r,t){C(e,(function(){r.apply(this,arguments)}),t)},count:function(e){var r=0;return C(e,(function(){r++})),r},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!x(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},r.Component=h,r.Fragment=o,r.Profiler=u,r.PureComponent=_,r.StrictMode=a,r.Suspense=l,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,r.cloneElement=function(e,r,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),a=e.key,u=e.ref,c=e._owner;if(null!=r){if(void 0!==r.ref&&(u=r.ref,c=E.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(s in r)S.call(r,s)&&!j.hasOwnProperty(s)&&(o[s]=void 0===r[s]&&void 0!==i?i[s]:r[s])}var s=arguments.length-2;if(1===s)o.children=n;else if(1<s){i=Array(s);for(var l=0;l<s;l++)i[l]=arguments[l+2];o.children=i}return{$$typeof:t,type:e.type,key:a,ref:u,props:o,_owner:c}},r.createContext=function(e){return(e={$$typeof:i,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},r.createElement=O,r.createFactory=function(e){var r=O.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:s,render:e}},r.isValidElement=x,r.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:$}},r.memo=function(e,r){return{$$typeof:f,type:e,compare:void 0===r?null:r}},r.startTransition=function(e){var r=T.transition;T.transition={};try{e()}finally{T.transition=r}},r.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},r.useCallback=function(e,r){return L.current.useCallback(e,r)},r.useContext=function(e){return L.current.useContext(e)},r.useDebugValue=function(){},r.useDeferredValue=function(e){return L.current.useDeferredValue(e)},r.useEffect=function(e,r){return L.current.useEffect(e,r)},r.useId=function(){return L.current.useId()},r.useImperativeHandle=function(e,r,t){return L.current.useImperativeHandle(e,r,t)},r.useInsertionEffect=function(e,r){return L.current.useInsertionEffect(e,r)},r.useLayoutEffect=function(e,r){return L.current.useLayoutEffect(e,r)},r.useMemo=function(e,r){return L.current.useMemo(e,r)},r.useReducer=function(e,r,t){return L.current.useReducer(e,r,t)},r.useRef=function(e){return L.current.useRef(e)},r.useState=function(e){return L.current.useState(e)},r.useSyncExternalStore=function(e,r,t){return L.current.useSyncExternalStore(e,r,t)},r.useTransition=function(){return L.current.useTransition()},r.version="18.2.0"},827378:(e,r,t)=>{e.exports=t(541535)},824246:(e,r,t)=>{e.exports=t(371426)},511151:(e,r,t)=>{t.d(r,{Z:()=>c,a:()=>u});var n=t(667294);const o={},a=n.createContext(o);function u(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:u(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);