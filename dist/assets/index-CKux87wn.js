(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function CT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var iv={exports:{}},ru={},ov={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),RT=Symbol.for("react.portal"),kT=Symbol.for("react.fragment"),NT=Symbol.for("react.strict_mode"),PT=Symbol.for("react.profiler"),bT=Symbol.for("react.provider"),DT=Symbol.for("react.context"),OT=Symbol.for("react.forward_ref"),MT=Symbol.for("react.suspense"),LT=Symbol.for("react.memo"),VT=Symbol.for("react.lazy"),hm=Symbol.iterator;function jT(t){return t===null||typeof t!="object"?null:(t=hm&&t[hm]||t["@@iterator"],typeof t=="function"?t:null)}var av={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},lv=Object.assign,uv={};function ii(t,e,n){this.props=t,this.context=e,this.refs=uv,this.updater=n||av}ii.prototype.isReactComponent={};ii.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ii.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function cv(){}cv.prototype=ii.prototype;function Eh(t,e,n){this.props=t,this.context=e,this.refs=uv,this.updater=n||av}var Th=Eh.prototype=new cv;Th.constructor=Eh;lv(Th,ii.prototype);Th.isPureReactComponent=!0;var fm=Array.isArray,dv=Object.prototype.hasOwnProperty,Ih={current:null},hv={key:!0,ref:!0,__self:!0,__source:!0};function fv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)dv.call(e,r)&&!hv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:jo,type:t,key:i,ref:o,props:s,_owner:Ih.current}}function FT(t,e){return{$$typeof:jo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xh(t){return typeof t=="object"&&t!==null&&t.$$typeof===jo}function UT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var pm=/\/+/g;function pc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?UT(""+t.key):e.toString(36)}function Wa(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case jo:case RT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+pc(o,0):r,fm(s)?(n="",t!=null&&(n=t.replace(pm,"$&/")+"/"),Wa(s,e,n,"",function(d){return d})):s!=null&&(xh(s)&&(s=FT(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(pm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",fm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+pc(i,l);o+=Wa(i,e,n,u,s)}else if(u=jT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+pc(i,l++),o+=Wa(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var r=[],s=0;return Wa(t,r,"","",function(i){return e.call(n,i,s++)}),r}function zT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var yt={current:null},Ga={transition:null},$T={ReactCurrentDispatcher:yt,ReactCurrentBatchConfig:Ga,ReactCurrentOwner:Ih};function pv(){throw Error("act(...) is not supported in production builds of React.")}ne.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!xh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Component=ii;ne.Fragment=kT;ne.Profiler=PT;ne.PureComponent=Eh;ne.StrictMode=NT;ne.Suspense=MT;ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$T;ne.act=pv;ne.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=lv({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=Ih.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)dv.call(e,u)&&!hv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:jo,type:t.type,key:s,ref:i,props:r,_owner:o}};ne.createContext=function(t){return t={$$typeof:DT,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:bT,_context:t},t.Consumer=t};ne.createElement=fv;ne.createFactory=function(t){var e=fv.bind(null,t);return e.type=t,e};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:OT,render:t}};ne.isValidElement=xh;ne.lazy=function(t){return{$$typeof:VT,_payload:{_status:-1,_result:t},_init:zT}};ne.memo=function(t,e){return{$$typeof:LT,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Ga.transition;Ga.transition={};try{t()}finally{Ga.transition=e}};ne.unstable_act=pv;ne.useCallback=function(t,e){return yt.current.useCallback(t,e)};ne.useContext=function(t){return yt.current.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t){return yt.current.useDeferredValue(t)};ne.useEffect=function(t,e){return yt.current.useEffect(t,e)};ne.useId=function(){return yt.current.useId()};ne.useImperativeHandle=function(t,e,n){return yt.current.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return yt.current.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return yt.current.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return yt.current.useMemo(t,e)};ne.useReducer=function(t,e,n){return yt.current.useReducer(t,e,n)};ne.useRef=function(t){return yt.current.useRef(t)};ne.useState=function(t){return yt.current.useState(t)};ne.useSyncExternalStore=function(t,e,n){return yt.current.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return yt.current.useTransition()};ne.version="18.3.1";ov.exports=ne;var B=ov.exports;const BT=CT(B);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HT=B,qT=Symbol.for("react.element"),WT=Symbol.for("react.fragment"),GT=Object.prototype.hasOwnProperty,KT=HT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,QT={key:!0,ref:!0,__self:!0,__source:!0};function mv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)GT.call(e,r)&&!QT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:qT,type:t,key:i,ref:o,props:s,_owner:KT.current}}ru.Fragment=WT;ru.jsx=mv;ru.jsxs=mv;iv.exports=ru;var f=iv.exports,Xc={},gv={exports:{}},Dt={},yv={exports:{}},vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,z){var G=D.length;D.push(z);e:for(;0<G;){var re=G-1>>>1,ce=D[re];if(0<s(ce,z))D[re]=z,D[G]=ce,G=re;else break e}}function n(D){return D.length===0?null:D[0]}function r(D){if(D.length===0)return null;var z=D[0],G=D.pop();if(G!==z){D[0]=G;e:for(var re=0,ce=D.length,me=ce>>>1;re<me;){var _t=2*(re+1)-1,fe=D[_t],Ce=_t+1,Je=D[Ce];if(0>s(fe,G))Ce<ce&&0>s(Je,fe)?(D[re]=Je,D[Ce]=G,re=Ce):(D[re]=fe,D[_t]=G,re=_t);else if(Ce<ce&&0>s(Je,G))D[re]=Je,D[Ce]=G,re=Ce;else break e}}return z}function s(D,z){var G=D.sortIndex-z.sortIndex;return G!==0?G:D.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,m=null,g=3,T=!1,I=!1,N=!1,M=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function R(D){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=D)r(d),z.sortIndex=z.expirationTime,e(u,z);else break;z=n(d)}}function O(D){if(N=!1,R(D),!I)if(n(u)!==null)I=!0,ht(U);else{var z=n(d);z!==null&&H(O,z.startTime-D)}}function U(D,z){I=!1,N&&(N=!1,_(v),v=-1),T=!0;var G=g;try{for(R(z),m=n(u);m!==null&&(!(m.expirationTime>z)||D&&!S());){var re=m.callback;if(typeof re=="function"){m.callback=null,g=m.priorityLevel;var ce=re(m.expirationTime<=z);z=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(u)&&r(u),R(z)}else r(u);m=n(u)}if(m!==null)var me=!0;else{var _t=n(d);_t!==null&&H(O,_t.startTime-z),me=!1}return me}finally{m=null,g=G,T=!1}}var F=!1,w=null,v=-1,E=5,A=-1;function S(){return!(t.unstable_now()-A<E)}function k(){if(w!==null){var D=t.unstable_now();A=D;var z=!0;try{z=w(!0,D)}finally{z?C():(F=!1,w=null)}}else F=!1}var C;if(typeof x=="function")C=function(){x(k)};else if(typeof MessageChannel<"u"){var Ne=new MessageChannel,Y=Ne.port2;Ne.port1.onmessage=k,C=function(){Y.postMessage(null)}}else C=function(){M(k,0)};function ht(D){w=D,F||(F=!0,C())}function H(D,z){v=M(function(){D(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){I||T||(I=!0,ht(U))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(D){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var G=g;g=z;try{return D()}finally{g=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,z){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=g;g=D;try{return z()}finally{g=G}},t.unstable_scheduleCallback=function(D,z,G){var re=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?re+G:re):G=re,D){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=G+ce,D={id:p++,callback:z,priorityLevel:D,startTime:G,expirationTime:ce,sortIndex:-1},G>re?(D.sortIndex=G,e(d,D),n(u)===null&&D===n(d)&&(N?(_(v),v=-1):N=!0,H(O,G-re))):(D.sortIndex=ce,e(u,D),I||T||(I=!0,ht(U))),D},t.unstable_shouldYield=S,t.unstable_wrapCallback=function(D){var z=g;return function(){var G=g;g=z;try{return D.apply(this,arguments)}finally{g=G}}}})(vv);yv.exports=vv;var YT=yv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var XT=B,bt=YT;function j(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _v=new Set,lo={};function rs(t,e){Hs(t,e),Hs(t+"Capture",e)}function Hs(t,e){for(lo[t]=e,t=0;t<e.length;t++)_v.add(e[t])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Jc=Object.prototype.hasOwnProperty,JT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,mm={},gm={};function ZT(t){return Jc.call(gm,t)?!0:Jc.call(mm,t)?!1:JT.test(t)?gm[t]=!0:(mm[t]=!0,!1)}function eI(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function tI(t,e,n,r){if(e===null||typeof e>"u"||eI(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xe[t]=new vt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xe[e]=new vt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xe[t]=new vt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xe[t]=new vt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xe[t]=new vt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xe[t]=new vt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xe[t]=new vt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xe[t]=new vt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xe[t]=new vt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sh=/[\-:]([a-z])/g;function Ah(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sh,Ah);Xe[e]=new vt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sh,Ah);Xe[e]=new vt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sh,Ah);Xe[e]=new vt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xe[t]=new vt(t,1,!1,t.toLowerCase(),null,!1,!1)});Xe.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xe[t]=new vt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ch(t,e,n,r){var s=Xe.hasOwnProperty(e)?Xe[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tI(e,n,s,r)&&(n=null),r||s===null?ZT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Mn=XT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),ws=Symbol.for("react.portal"),Es=Symbol.for("react.fragment"),Rh=Symbol.for("react.strict_mode"),Zc=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Ev=Symbol.for("react.context"),kh=Symbol.for("react.forward_ref"),ed=Symbol.for("react.suspense"),td=Symbol.for("react.suspense_list"),Nh=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),Tv=Symbol.for("react.offscreen"),ym=Symbol.iterator;function Ri(t){return t===null||typeof t!="object"?null:(t=ym&&t[ym]||t["@@iterator"],typeof t=="function"?t:null)}var Se=Object.assign,mc;function Vi(t){if(mc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);mc=e&&e[1]||""}return`
`+mc+t}var gc=!1;function yc(t,e){if(!t||gc)return"";gc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{gc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Vi(t):""}function nI(t){switch(t.tag){case 5:return Vi(t.type);case 16:return Vi("Lazy");case 13:return Vi("Suspense");case 19:return Vi("SuspenseList");case 0:case 2:case 15:return t=yc(t.type,!1),t;case 11:return t=yc(t.type.render,!1),t;case 1:return t=yc(t.type,!0),t;default:return""}}function nd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Es:return"Fragment";case ws:return"Portal";case Zc:return"Profiler";case Rh:return"StrictMode";case ed:return"Suspense";case td:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ev:return(t.displayName||"Context")+".Consumer";case wv:return(t._context.displayName||"Context")+".Provider";case kh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nh:return e=t.displayName||null,e!==null?e:nd(t.type)||"Memo";case $n:e=t._payload,t=t._init;try{return nd(t(e))}catch{}}return null}function rI(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return nd(e);case 8:return e===Rh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Iv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function sI(t){var e=Iv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function xa(t){t._valueTracker||(t._valueTracker=sI(t))}function xv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Iv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function ml(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rd(t,e){var n=e.checked;return Se({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sv(t,e){e=e.checked,e!=null&&Ch(t,"checked",e,!1)}function sd(t,e){Sv(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?id(t,e.type,n):e.hasOwnProperty("defaultValue")&&id(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function id(t,e,n){(e!=="number"||ml(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ji=Array.isArray;function Os(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function od(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(j(91));return Se({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function wm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(j(92));if(ji(n)){if(1<n.length)throw Error(j(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Av(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Em(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Cv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Cv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Sa,Rv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Sa=Sa||document.createElement("div"),Sa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Sa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},iI=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){iI.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function Nv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var oI=Se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ld(t,e){if(e){if(oI[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(j(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(j(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(j(61))}if(e.style!=null&&typeof e.style!="object")throw Error(j(62))}}function ud(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cd=null;function Ph(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var dd=null,Ms=null,Ls=null;function Tm(t){if(t=zo(t)){if(typeof dd!="function")throw Error(j(280));var e=t.stateNode;e&&(e=lu(e),dd(t.stateNode,t.type,e))}}function Pv(t){Ms?Ls?Ls.push(t):Ls=[t]:Ms=t}function bv(){if(Ms){var t=Ms,e=Ls;if(Ls=Ms=null,Tm(t),e)for(t=0;t<e.length;t++)Tm(e[t])}}function Dv(t,e){return t(e)}function Ov(){}var vc=!1;function Mv(t,e,n){if(vc)return t(e,n);vc=!0;try{return Dv(t,e,n)}finally{vc=!1,(Ms!==null||Ls!==null)&&(Ov(),bv())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(j(231,e,typeof n));return n}var hd=!1;if(An)try{var ki={};Object.defineProperty(ki,"passive",{get:function(){hd=!0}}),window.addEventListener("test",ki,ki),window.removeEventListener("test",ki,ki)}catch{hd=!1}function aI(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Gi=!1,gl=null,yl=!1,fd=null,lI={onError:function(t){Gi=!0,gl=t}};function uI(t,e,n,r,s,i,o,l,u){Gi=!1,gl=null,aI.apply(lI,arguments)}function cI(t,e,n,r,s,i,o,l,u){if(uI.apply(this,arguments),Gi){if(Gi){var d=gl;Gi=!1,gl=null}else throw Error(j(198));yl||(yl=!0,fd=d)}}function ss(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Lv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Im(t){if(ss(t)!==t)throw Error(j(188))}function dI(t){var e=t.alternate;if(!e){if(e=ss(t),e===null)throw Error(j(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Im(s),t;if(i===r)return Im(s),e;i=i.sibling}throw Error(j(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(j(189))}}if(n.alternate!==r)throw Error(j(190))}if(n.tag!==3)throw Error(j(188));return n.stateNode.current===n?t:e}function Vv(t){return t=dI(t),t!==null?jv(t):null}function jv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=jv(t);if(e!==null)return e;t=t.sibling}return null}var Fv=bt.unstable_scheduleCallback,xm=bt.unstable_cancelCallback,hI=bt.unstable_shouldYield,fI=bt.unstable_requestPaint,be=bt.unstable_now,pI=bt.unstable_getCurrentPriorityLevel,bh=bt.unstable_ImmediatePriority,Uv=bt.unstable_UserBlockingPriority,vl=bt.unstable_NormalPriority,mI=bt.unstable_LowPriority,zv=bt.unstable_IdlePriority,su=null,sn=null;function gI(t){if(sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:_I,yI=Math.log,vI=Math.LN2;function _I(t){return t>>>=0,t===0?32:31-(yI(t)/vI|0)|0}var Aa=64,Ca=4194304;function Fi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Fi(l):(i&=o,i!==0&&(r=Fi(i)))}else o=n&~s,o!==0?r=Fi(o):i!==0&&(r=Fi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),s=1<<n,r|=t[n],e&=~s;return r}function wI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function EI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Kt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=wI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function pd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $v(){var t=Aa;return Aa<<=1,!(Aa&4194240)&&(Aa=64),t}function _c(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Fo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function TI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Kt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Dh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function Bv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Hv,Oh,qv,Wv,Gv,md=!1,Ra=[],tr=null,nr=null,rr=null,ho=new Map,fo=new Map,qn=[],II="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function Ni(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=zo(e),e!==null&&Oh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function xI(t,e,n,r,s){switch(e){case"focusin":return tr=Ni(tr,t,e,n,r,s),!0;case"dragenter":return nr=Ni(nr,t,e,n,r,s),!0;case"mouseover":return rr=Ni(rr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ho.set(i,Ni(ho.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,fo.set(i,Ni(fo.get(i)||null,t,e,n,r,s)),!0}return!1}function Kv(t){var e=Lr(t.target);if(e!==null){var n=ss(e);if(n!==null){if(e=n.tag,e===13){if(e=Lv(n),e!==null){t.blockedOn=e,Gv(t.priority,function(){qv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=gd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);cd=r,n.target.dispatchEvent(r),cd=null}else return e=zo(n),e!==null&&Oh(e),t.blockedOn=n,!1;e.shift()}return!0}function Am(t,e,n){Ka(t)&&n.delete(e)}function SI(){md=!1,tr!==null&&Ka(tr)&&(tr=null),nr!==null&&Ka(nr)&&(nr=null),rr!==null&&Ka(rr)&&(rr=null),ho.forEach(Am),fo.forEach(Am)}function Pi(t,e){t.blockedOn===e&&(t.blockedOn=null,md||(md=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,SI)))}function po(t){function e(s){return Pi(s,t)}if(0<Ra.length){Pi(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&Pi(tr,t),nr!==null&&Pi(nr,t),rr!==null&&Pi(rr,t),ho.forEach(e),fo.forEach(e),n=0;n<qn.length;n++)r=qn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Kv(n),n.blockedOn===null&&qn.shift()}var Vs=Mn.ReactCurrentBatchConfig,wl=!0;function AI(t,e,n,r){var s=de,i=Vs.transition;Vs.transition=null;try{de=1,Mh(t,e,n,r)}finally{de=s,Vs.transition=i}}function CI(t,e,n,r){var s=de,i=Vs.transition;Vs.transition=null;try{de=4,Mh(t,e,n,r)}finally{de=s,Vs.transition=i}}function Mh(t,e,n,r){if(wl){var s=gd(t,e,n,r);if(s===null)kc(t,e,r,El,n),Sm(t,r);else if(xI(s,t,e,n,r))r.stopPropagation();else if(Sm(t,r),e&4&&-1<II.indexOf(t)){for(;s!==null;){var i=zo(s);if(i!==null&&Hv(i),i=gd(t,e,n,r),i===null&&kc(t,e,r,El,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else kc(t,e,r,null,n)}}var El=null;function gd(t,e,n,r){if(El=null,t=Ph(r),t=Lr(t),t!==null)if(e=ss(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Lv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return El=t,null}function Qv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pI()){case bh:return 1;case Uv:return 4;case vl:case mI:return 16;case zv:return 536870912;default:return 16}default:return 16}}var Jn=null,Lh=null,Qa=null;function Yv(){if(Qa)return Qa;var t,e=Lh,n=e.length,r,s="value"in Jn?Jn.value:Jn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Qa=s.slice(t,1<r?1-r:void 0)}function Ya(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ka(){return!0}function Cm(){return!1}function Ot(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ka:Cm,this.isPropagationStopped=Cm,this}return Se(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ka)},persist:function(){},isPersistent:ka}),e}var oi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Vh=Ot(oi),Uo=Se({},oi,{view:0,detail:0}),RI=Ot(Uo),wc,Ec,bi,iu=Se({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:jh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==bi&&(bi&&t.type==="mousemove"?(wc=t.screenX-bi.screenX,Ec=t.screenY-bi.screenY):Ec=wc=0,bi=t),wc)},movementY:function(t){return"movementY"in t?t.movementY:Ec}}),Rm=Ot(iu),kI=Se({},iu,{dataTransfer:0}),NI=Ot(kI),PI=Se({},Uo,{relatedTarget:0}),Tc=Ot(PI),bI=Se({},oi,{animationName:0,elapsedTime:0,pseudoElement:0}),DI=Ot(bI),OI=Se({},oi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),MI=Ot(OI),LI=Se({},oi,{data:0}),km=Ot(LI),VI={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},FI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function UI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=FI[t])?!!e[t]:!1}function jh(){return UI}var zI=Se({},Uo,{key:function(t){if(t.key){var e=VI[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ya(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:jh,charCode:function(t){return t.type==="keypress"?Ya(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ya(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$I=Ot(zI),BI=Se({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nm=Ot(BI),HI=Se({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:jh}),qI=Ot(HI),WI=Se({},oi,{propertyName:0,elapsedTime:0,pseudoElement:0}),GI=Ot(WI),KI=Se({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),QI=Ot(KI),YI=[9,13,27,32],Fh=An&&"CompositionEvent"in window,Ki=null;An&&"documentMode"in document&&(Ki=document.documentMode);var XI=An&&"TextEvent"in window&&!Ki,Xv=An&&(!Fh||Ki&&8<Ki&&11>=Ki),Pm=" ",bm=!1;function Jv(t,e){switch(t){case"keyup":return YI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ts=!1;function JI(t,e){switch(t){case"compositionend":return Zv(e);case"keypress":return e.which!==32?null:(bm=!0,Pm);case"textInput":return t=e.data,t===Pm&&bm?null:t;default:return null}}function ZI(t,e){if(Ts)return t==="compositionend"||!Fh&&Jv(t,e)?(t=Yv(),Qa=Lh=Jn=null,Ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Xv&&e.locale!=="ko"?null:e.data;default:return null}}var e1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!e1[t.type]:e==="textarea"}function e_(t,e,n,r){Pv(r),e=Tl(e,"onChange"),0<e.length&&(n=new Vh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qi=null,mo=null;function t1(t){d_(t,0)}function ou(t){var e=Ss(t);if(xv(e))return t}function n1(t,e){if(t==="change")return e}var t_=!1;if(An){var Ic;if(An){var xc="oninput"in document;if(!xc){var Om=document.createElement("div");Om.setAttribute("oninput","return;"),xc=typeof Om.oninput=="function"}Ic=xc}else Ic=!1;t_=Ic&&(!document.documentMode||9<document.documentMode)}function Mm(){Qi&&(Qi.detachEvent("onpropertychange",n_),mo=Qi=null)}function n_(t){if(t.propertyName==="value"&&ou(mo)){var e=[];e_(e,mo,t,Ph(t)),Mv(t1,e)}}function r1(t,e,n){t==="focusin"?(Mm(),Qi=e,mo=n,Qi.attachEvent("onpropertychange",n_)):t==="focusout"&&Mm()}function s1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(mo)}function i1(t,e){if(t==="click")return ou(e)}function o1(t,e){if(t==="input"||t==="change")return ou(e)}function a1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:a1;function go(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Jc.call(e,s)||!Xt(t[s],e[s]))return!1}return!0}function Lm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vm(t,e){var n=Lm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lm(n)}}function r_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?r_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function s_(){for(var t=window,e=ml();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=ml(t.document)}return e}function Uh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function l1(t){var e=s_(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&r_(n.ownerDocument.documentElement,n)){if(r!==null&&Uh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Vm(n,i);var o=Vm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var u1=An&&"documentMode"in document&&11>=document.documentMode,Is=null,yd=null,Yi=null,vd=!1;function jm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;vd||Is==null||Is!==ml(r)||(r=Is,"selectionStart"in r&&Uh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yi&&go(Yi,r)||(Yi=r,r=Tl(yd,"onSelect"),0<r.length&&(e=new Vh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Is)))}function Na(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var xs={animationend:Na("Animation","AnimationEnd"),animationiteration:Na("Animation","AnimationIteration"),animationstart:Na("Animation","AnimationStart"),transitionend:Na("Transition","TransitionEnd")},Sc={},i_={};An&&(i_=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function au(t){if(Sc[t])return Sc[t];if(!xs[t])return t;var e=xs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in i_)return Sc[t]=e[n];return t}var o_=au("animationend"),a_=au("animationiteration"),l_=au("animationstart"),u_=au("transitionend"),c_=new Map,Fm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function wr(t,e){c_.set(t,e),rs(e,[t])}for(var Ac=0;Ac<Fm.length;Ac++){var Cc=Fm[Ac],c1=Cc.toLowerCase(),d1=Cc[0].toUpperCase()+Cc.slice(1);wr(c1,"on"+d1)}wr(o_,"onAnimationEnd");wr(a_,"onAnimationIteration");wr(l_,"onAnimationStart");wr("dblclick","onDoubleClick");wr("focusin","onFocus");wr("focusout","onBlur");wr(u_,"onTransitionEnd");Hs("onMouseEnter",["mouseout","mouseover"]);Hs("onMouseLeave",["mouseout","mouseover"]);Hs("onPointerEnter",["pointerout","pointerover"]);Hs("onPointerLeave",["pointerout","pointerover"]);rs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));rs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));rs("onBeforeInput",["compositionend","keypress","textInput","paste"]);rs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));rs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ui));function Um(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,cI(r,e,void 0,t),t.currentTarget=null}function d_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Um(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Um(s,l,d),i=u}}}if(yl)throw t=fd,yl=!1,fd=null,t}function ve(t,e){var n=e[Id];n===void 0&&(n=e[Id]=new Set);var r=t+"__bubble";n.has(r)||(h_(e,t,2,!1),n.add(r))}function Rc(t,e,n){var r=0;e&&(r|=4),h_(n,t,r,e)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[Pa]){t[Pa]=!0,_v.forEach(function(n){n!=="selectionchange"&&(h1.has(n)||Rc(n,!1,t),Rc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Pa]||(e[Pa]=!0,Rc("selectionchange",!1,e))}}function h_(t,e,n,r){switch(Qv(e)){case 1:var s=AI;break;case 4:s=CI;break;default:s=Mh}n=s.bind(null,e,n,t),s=void 0,!hd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function kc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Lr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Mv(function(){var d=i,p=Ph(n),m=[];e:{var g=c_.get(t);if(g!==void 0){var T=Vh,I=t;switch(t){case"keypress":if(Ya(n)===0)break e;case"keydown":case"keyup":T=$I;break;case"focusin":I="focus",T=Tc;break;case"focusout":I="blur",T=Tc;break;case"beforeblur":case"afterblur":T=Tc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=NI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=qI;break;case o_:case a_:case l_:T=DI;break;case u_:T=GI;break;case"scroll":T=RI;break;case"wheel":T=QI;break;case"copy":case"cut":case"paste":T=MI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=Nm}var N=(e&4)!==0,M=!N&&t==="scroll",_=N?g!==null?g+"Capture":null:g;N=[];for(var x=d,R;x!==null;){R=x;var O=R.stateNode;if(R.tag===5&&O!==null&&(R=O,_!==null&&(O=co(x,_),O!=null&&N.push(vo(x,O,R)))),M)break;x=x.return}0<N.length&&(g=new T(g,I,null,n,p),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",T=t==="mouseout"||t==="pointerout",g&&n!==cd&&(I=n.relatedTarget||n.fromElement)&&(Lr(I)||I[Cn]))break e;if((T||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,T?(I=n.relatedTarget||n.toElement,T=d,I=I?Lr(I):null,I!==null&&(M=ss(I),I!==M||I.tag!==5&&I.tag!==6)&&(I=null)):(T=null,I=d),T!==I)){if(N=Rm,O="onMouseLeave",_="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(N=Nm,O="onPointerLeave",_="onPointerEnter",x="pointer"),M=T==null?g:Ss(T),R=I==null?g:Ss(I),g=new N(O,x+"leave",T,n,p),g.target=M,g.relatedTarget=R,O=null,Lr(p)===d&&(N=new N(_,x+"enter",I,n,p),N.target=R,N.relatedTarget=M,O=N),M=O,T&&I)t:{for(N=T,_=I,x=0,R=N;R;R=ps(R))x++;for(R=0,O=_;O;O=ps(O))R++;for(;0<x-R;)N=ps(N),x--;for(;0<R-x;)_=ps(_),R--;for(;x--;){if(N===_||_!==null&&N===_.alternate)break t;N=ps(N),_=ps(_)}N=null}else N=null;T!==null&&zm(m,g,T,N,!1),I!==null&&M!==null&&zm(m,M,I,N,!0)}}e:{if(g=d?Ss(d):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var U=n1;else if(Dm(g))if(t_)U=o1;else{U=s1;var F=r1}else(T=g.nodeName)&&T.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=i1);if(U&&(U=U(t,d))){e_(m,U,n,p);break e}F&&F(t,g,d),t==="focusout"&&(F=g._wrapperState)&&F.controlled&&g.type==="number"&&id(g,"number",g.value)}switch(F=d?Ss(d):window,t){case"focusin":(Dm(F)||F.contentEditable==="true")&&(Is=F,yd=d,Yi=null);break;case"focusout":Yi=yd=Is=null;break;case"mousedown":vd=!0;break;case"contextmenu":case"mouseup":case"dragend":vd=!1,jm(m,n,p);break;case"selectionchange":if(u1)break;case"keydown":case"keyup":jm(m,n,p)}var w;if(Fh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Ts?Jv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Xv&&n.locale!=="ko"&&(Ts||v!=="onCompositionStart"?v==="onCompositionEnd"&&Ts&&(w=Yv()):(Jn=p,Lh="value"in Jn?Jn.value:Jn.textContent,Ts=!0)),F=Tl(d,v),0<F.length&&(v=new km(v,t,null,n,p),m.push({event:v,listeners:F}),w?v.data=w:(w=Zv(n),w!==null&&(v.data=w)))),(w=XI?JI(t,n):ZI(t,n))&&(d=Tl(d,"onBeforeInput"),0<d.length&&(p=new km("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=w))}d_(m,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Tl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=co(t,n),i!=null&&r.unshift(vo(t,i,s)),i=co(t,e),i!=null&&r.push(vo(t,i,s))),t=t.return}return r}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function zm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=co(n,i),u!=null&&o.unshift(vo(n,u,l))):s||(u=co(n,i),u!=null&&o.push(vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var f1=/\r\n?/g,p1=/\u0000|\uFFFD/g;function $m(t){return(typeof t=="string"?t:""+t).replace(f1,`
`).replace(p1,"")}function ba(t,e,n){if(e=$m(e),$m(t)!==e&&n)throw Error(j(425))}function Il(){}var _d=null,wd=null;function Ed(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Td=typeof setTimeout=="function"?setTimeout:void 0,m1=typeof clearTimeout=="function"?clearTimeout:void 0,Bm=typeof Promise=="function"?Promise:void 0,g1=typeof queueMicrotask=="function"?queueMicrotask:typeof Bm<"u"?function(t){return Bm.resolve(null).then(t).catch(y1)}:Td;function y1(t){setTimeout(function(){throw t})}function Nc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);po(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Hm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ai=Math.random().toString(36).slice(2),nn="__reactFiber$"+ai,_o="__reactProps$"+ai,Cn="__reactContainer$"+ai,Id="__reactEvents$"+ai,v1="__reactListeners$"+ai,_1="__reactHandles$"+ai;function Lr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Cn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Hm(t);t!==null;){if(n=t[nn])return n;t=Hm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[nn]||t[Cn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ss(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(j(33))}function lu(t){return t[_o]||null}var xd=[],As=-1;function Er(t){return{current:t}}function we(t){0>As||(t.current=xd[As],xd[As]=null,As--)}function ge(t,e){As++,xd[As]=t.current,t.current=e}var mr={},ct=Er(mr),xt=Er(!1),Hr=mr;function qs(t,e){var n=t.type.contextTypes;if(!n)return mr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function St(t){return t=t.childContextTypes,t!=null}function xl(){we(xt),we(ct)}function qm(t,e,n){if(ct.current!==mr)throw Error(j(168));ge(ct,e),ge(xt,n)}function f_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(j(108,rI(t)||"Unknown",s));return Se({},n,r)}function Sl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Hr=ct.current,ge(ct,t),ge(xt,xt.current),!0}function Wm(t,e,n){var r=t.stateNode;if(!r)throw Error(j(169));n?(t=f_(t,e,Hr),r.__reactInternalMemoizedMergedChildContext=t,we(xt),we(ct),ge(ct,t)):we(xt),ge(xt,n)}var yn=null,uu=!1,Pc=!1;function p_(t){yn===null?yn=[t]:yn.push(t)}function w1(t){uu=!0,p_(t)}function Tr(){if(!Pc&&yn!==null){Pc=!0;var t=0,e=de;try{var n=yn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}yn=null,uu=!1}catch(s){throw yn!==null&&(yn=yn.slice(t+1)),Fv(bh,Tr),s}finally{de=e,Pc=!1}}return null}var Cs=[],Rs=0,Al=null,Cl=0,Lt=[],Vt=0,qr=null,vn=1,_n="";function Pr(t,e){Cs[Rs++]=Cl,Cs[Rs++]=Al,Al=t,Cl=e}function m_(t,e,n){Lt[Vt++]=vn,Lt[Vt++]=_n,Lt[Vt++]=qr,qr=t;var r=vn;t=_n;var s=32-Kt(r)-1;r&=~(1<<s),n+=1;var i=32-Kt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,vn=1<<32-Kt(e)+s|n<<s|r,_n=i+t}else vn=1<<i|n<<s|r,_n=t}function zh(t){t.return!==null&&(Pr(t,1),m_(t,1,0))}function $h(t){for(;t===Al;)Al=Cs[--Rs],Cs[Rs]=null,Cl=Cs[--Rs],Cs[Rs]=null;for(;t===qr;)qr=Lt[--Vt],Lt[Vt]=null,_n=Lt[--Vt],Lt[Vt]=null,vn=Lt[--Vt],Lt[Vt]=null}var Pt=null,kt=null,Ee=!1,Gt=null;function g_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,kt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:vn,overflow:_n}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,kt=null,!0):!1;default:return!1}}function Sd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ad(t){if(Ee){var e=kt;if(e){var n=e;if(!Gm(t,e)){if(Sd(t))throw Error(j(418));e=sr(n.nextSibling);var r=Pt;e&&Gm(t,e)?g_(r,n):(t.flags=t.flags&-4097|2,Ee=!1,Pt=t)}}else{if(Sd(t))throw Error(j(418));t.flags=t.flags&-4097|2,Ee=!1,Pt=t}}}function Km(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Da(t){if(t!==Pt)return!1;if(!Ee)return Km(t),Ee=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ed(t.type,t.memoizedProps)),e&&(e=kt)){if(Sd(t))throw y_(),Error(j(418));for(;e;)g_(t,e),e=sr(e.nextSibling)}if(Km(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(j(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){kt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}kt=null}}else kt=Pt?sr(t.stateNode.nextSibling):null;return!0}function y_(){for(var t=kt;t;)t=sr(t.nextSibling)}function Ws(){kt=Pt=null,Ee=!1}function Bh(t){Gt===null?Gt=[t]:Gt.push(t)}var E1=Mn.ReactCurrentBatchConfig;function Di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(j(309));var r=n.stateNode}if(!r)throw Error(j(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(j(284));if(!n._owner)throw Error(j(290,t))}return t}function Oa(t,e){throw t=Object.prototype.toString.call(e),Error(j(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Qm(t){var e=t._init;return e(t._payload)}function v_(t){function e(_,x){if(t){var R=_.deletions;R===null?(_.deletions=[x],_.flags|=16):R.push(x)}}function n(_,x){if(!t)return null;for(;x!==null;)e(_,x),x=x.sibling;return null}function r(_,x){for(_=new Map;x!==null;)x.key!==null?_.set(x.key,x):_.set(x.index,x),x=x.sibling;return _}function s(_,x){return _=lr(_,x),_.index=0,_.sibling=null,_}function i(_,x,R){return _.index=R,t?(R=_.alternate,R!==null?(R=R.index,R<x?(_.flags|=2,x):R):(_.flags|=2,x)):(_.flags|=1048576,x)}function o(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,x,R,O){return x===null||x.tag!==6?(x=jc(R,_.mode,O),x.return=_,x):(x=s(x,R),x.return=_,x)}function u(_,x,R,O){var U=R.type;return U===Es?p(_,x,R.props.children,O,R.key):x!==null&&(x.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$n&&Qm(U)===x.type)?(O=s(x,R.props),O.ref=Di(_,x,R),O.return=_,O):(O=rl(R.type,R.key,R.props,null,_.mode,O),O.ref=Di(_,x,R),O.return=_,O)}function d(_,x,R,O){return x===null||x.tag!==4||x.stateNode.containerInfo!==R.containerInfo||x.stateNode.implementation!==R.implementation?(x=Fc(R,_.mode,O),x.return=_,x):(x=s(x,R.children||[]),x.return=_,x)}function p(_,x,R,O,U){return x===null||x.tag!==7?(x=zr(R,_.mode,O,U),x.return=_,x):(x=s(x,R),x.return=_,x)}function m(_,x,R){if(typeof x=="string"&&x!==""||typeof x=="number")return x=jc(""+x,_.mode,R),x.return=_,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ia:return R=rl(x.type,x.key,x.props,null,_.mode,R),R.ref=Di(_,null,x),R.return=_,R;case ws:return x=Fc(x,_.mode,R),x.return=_,x;case $n:var O=x._init;return m(_,O(x._payload),R)}if(ji(x)||Ri(x))return x=zr(x,_.mode,R,null),x.return=_,x;Oa(_,x)}return null}function g(_,x,R,O){var U=x!==null?x.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return U!==null?null:l(_,x,""+R,O);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case Ia:return R.key===U?u(_,x,R,O):null;case ws:return R.key===U?d(_,x,R,O):null;case $n:return U=R._init,g(_,x,U(R._payload),O)}if(ji(R)||Ri(R))return U!==null?null:p(_,x,R,O,null);Oa(_,R)}return null}function T(_,x,R,O,U){if(typeof O=="string"&&O!==""||typeof O=="number")return _=_.get(R)||null,l(x,_,""+O,U);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Ia:return _=_.get(O.key===null?R:O.key)||null,u(x,_,O,U);case ws:return _=_.get(O.key===null?R:O.key)||null,d(x,_,O,U);case $n:var F=O._init;return T(_,x,R,F(O._payload),U)}if(ji(O)||Ri(O))return _=_.get(R)||null,p(x,_,O,U,null);Oa(x,O)}return null}function I(_,x,R,O){for(var U=null,F=null,w=x,v=x=0,E=null;w!==null&&v<R.length;v++){w.index>v?(E=w,w=null):E=w.sibling;var A=g(_,w,R[v],O);if(A===null){w===null&&(w=E);break}t&&w&&A.alternate===null&&e(_,w),x=i(A,x,v),F===null?U=A:F.sibling=A,F=A,w=E}if(v===R.length)return n(_,w),Ee&&Pr(_,v),U;if(w===null){for(;v<R.length;v++)w=m(_,R[v],O),w!==null&&(x=i(w,x,v),F===null?U=w:F.sibling=w,F=w);return Ee&&Pr(_,v),U}for(w=r(_,w);v<R.length;v++)E=T(w,_,v,R[v],O),E!==null&&(t&&E.alternate!==null&&w.delete(E.key===null?v:E.key),x=i(E,x,v),F===null?U=E:F.sibling=E,F=E);return t&&w.forEach(function(S){return e(_,S)}),Ee&&Pr(_,v),U}function N(_,x,R,O){var U=Ri(R);if(typeof U!="function")throw Error(j(150));if(R=U.call(R),R==null)throw Error(j(151));for(var F=U=null,w=x,v=x=0,E=null,A=R.next();w!==null&&!A.done;v++,A=R.next()){w.index>v?(E=w,w=null):E=w.sibling;var S=g(_,w,A.value,O);if(S===null){w===null&&(w=E);break}t&&w&&S.alternate===null&&e(_,w),x=i(S,x,v),F===null?U=S:F.sibling=S,F=S,w=E}if(A.done)return n(_,w),Ee&&Pr(_,v),U;if(w===null){for(;!A.done;v++,A=R.next())A=m(_,A.value,O),A!==null&&(x=i(A,x,v),F===null?U=A:F.sibling=A,F=A);return Ee&&Pr(_,v),U}for(w=r(_,w);!A.done;v++,A=R.next())A=T(w,_,v,A.value,O),A!==null&&(t&&A.alternate!==null&&w.delete(A.key===null?v:A.key),x=i(A,x,v),F===null?U=A:F.sibling=A,F=A);return t&&w.forEach(function(k){return e(_,k)}),Ee&&Pr(_,v),U}function M(_,x,R,O){if(typeof R=="object"&&R!==null&&R.type===Es&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case Ia:e:{for(var U=R.key,F=x;F!==null;){if(F.key===U){if(U=R.type,U===Es){if(F.tag===7){n(_,F.sibling),x=s(F,R.props.children),x.return=_,_=x;break e}}else if(F.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===$n&&Qm(U)===F.type){n(_,F.sibling),x=s(F,R.props),x.ref=Di(_,F,R),x.return=_,_=x;break e}n(_,F);break}else e(_,F);F=F.sibling}R.type===Es?(x=zr(R.props.children,_.mode,O,R.key),x.return=_,_=x):(O=rl(R.type,R.key,R.props,null,_.mode,O),O.ref=Di(_,x,R),O.return=_,_=O)}return o(_);case ws:e:{for(F=R.key;x!==null;){if(x.key===F)if(x.tag===4&&x.stateNode.containerInfo===R.containerInfo&&x.stateNode.implementation===R.implementation){n(_,x.sibling),x=s(x,R.children||[]),x.return=_,_=x;break e}else{n(_,x);break}else e(_,x);x=x.sibling}x=Fc(R,_.mode,O),x.return=_,_=x}return o(_);case $n:return F=R._init,M(_,x,F(R._payload),O)}if(ji(R))return I(_,x,R,O);if(Ri(R))return N(_,x,R,O);Oa(_,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,x!==null&&x.tag===6?(n(_,x.sibling),x=s(x,R),x.return=_,_=x):(n(_,x),x=jc(R,_.mode,O),x.return=_,_=x),o(_)):n(_,x)}return M}var Gs=v_(!0),__=v_(!1),Rl=Er(null),kl=null,ks=null,Hh=null;function qh(){Hh=ks=kl=null}function Wh(t){var e=Rl.current;we(Rl),t._currentValue=e}function Cd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function js(t,e){kl=t,Hh=ks=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(It=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(Hh!==t)if(t={context:t,memoizedValue:e,next:null},ks===null){if(kl===null)throw Error(j(308));ks=t,kl.dependencies={lanes:0,firstContext:t}}else ks=ks.next=t;return e}var Vr=null;function Gh(t){Vr===null?Vr=[t]:Vr.push(t)}function w_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Gh(e)):(n.next=s.next,s.next=n),e.interleaved=n,Rn(t,r)}function Rn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function Kh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function E_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function xn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Rn(t,n)}return s=r.interleaved,s===null?(e.next=e,Gh(r)):(e.next=s.next,s.next=e),r.interleaved=e,Rn(t,n)}function Xa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dh(t,n)}}function Ym(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Nl(t,e,n,r){var s=t.updateQueue;Bn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=d=u=null,l=i;do{var g=l.lane,T=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:T,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var I=t,N=l;switch(g=e,T=n,N.tag){case 1:if(I=N.payload,typeof I=="function"){m=I.call(T,m,g);break e}m=I;break e;case 3:I.flags=I.flags&-65537|128;case 0:if(I=N.payload,g=typeof I=="function"?I.call(T,m,g):I,g==null)break e;m=Se({},m,g);break e;case 2:Bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else T={eventTime:T,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=T,u=m):p=p.next=T,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Gr|=o,t.lanes=o,t.memoizedState=m}}function Xm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(j(191,s));s.call(r)}}}var $o={},on=Er($o),wo=Er($o),Eo=Er($o);function jr(t){if(t===$o)throw Error(j(174));return t}function Qh(t,e){switch(ge(Eo,e),ge(wo,t),ge(on,$o),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=ad(e,t)}we(on),ge(on,e)}function Ks(){we(on),we(wo),we(Eo)}function T_(t){jr(Eo.current);var e=jr(on.current),n=ad(e,t.type);e!==n&&(ge(wo,t),ge(on,n))}function Yh(t){wo.current===t&&(we(on),we(wo))}var Ie=Er(0);function Pl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function Xh(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Ja=Mn.ReactCurrentDispatcher,Dc=Mn.ReactCurrentBatchConfig,Wr=0,xe=null,Ve=null,$e=null,bl=!1,Xi=!1,To=0,T1=0;function nt(){throw Error(j(321))}function Jh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function Zh(t,e,n,r,s,i){if(Wr=i,xe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ja.current=t===null||t.memoizedState===null?A1:C1,t=n(r,s),Xi){i=0;do{if(Xi=!1,To=0,25<=i)throw Error(j(301));i+=1,$e=Ve=null,e.updateQueue=null,Ja.current=R1,t=n(r,s)}while(Xi)}if(Ja.current=Dl,e=Ve!==null&&Ve.next!==null,Wr=0,$e=Ve=xe=null,bl=!1,e)throw Error(j(300));return t}function ef(){var t=To!==0;return To=0,t}function tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?xe.memoizedState=$e=t:$e=$e.next=t,$e}function $t(){if(Ve===null){var t=xe.alternate;t=t!==null?t.memoizedState:null}else t=Ve.next;var e=$e===null?xe.memoizedState:$e.next;if(e!==null)$e=e,Ve=t;else{if(t===null)throw Error(j(310));Ve=t,t={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},$e===null?xe.memoizedState=$e=t:$e=$e.next=t}return $e}function Io(t,e){return typeof e=="function"?e(t):e}function Oc(t){var e=$t(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=Ve,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var p=d.lane;if((Wr&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,xe.lanes|=p,Gr|=p}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,Xt(r,e.memoizedState)||(It=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,xe.lanes|=i,Gr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=$t(),n=e.queue;if(n===null)throw Error(j(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Xt(i,e.memoizedState)||(It=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function I_(){}function x_(t,e){var n=xe,r=$t(),s=e(),i=!Xt(r.memoizedState,s);if(i&&(r.memoizedState=s,It=!0),r=r.queue,tf(C_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,xo(9,A_.bind(null,n,r,s,e),void 0,null),He===null)throw Error(j(349));Wr&30||S_(n,e,s)}return s}function S_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function A_(t,e,n,r){e.value=n,e.getSnapshot=r,R_(e)&&k_(t)}function C_(t,e,n){return n(function(){R_(e)&&k_(t)})}function R_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function k_(t){var e=Rn(t,1);e!==null&&Qt(e,t,1,-1)}function Jm(t){var e=tn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Io,lastRenderedState:t},e.queue=t,t=t.dispatch=S1.bind(null,xe,t),[e.memoizedState,t]}function xo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=xe.updateQueue,e===null?(e={lastEffect:null,stores:null},xe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function N_(){return $t().memoizedState}function Za(t,e,n,r){var s=tn();xe.flags|=t,s.memoizedState=xo(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var s=$t();r=r===void 0?null:r;var i=void 0;if(Ve!==null){var o=Ve.memoizedState;if(i=o.destroy,r!==null&&Jh(r,o.deps)){s.memoizedState=xo(e,n,i,r);return}}xe.flags|=t,s.memoizedState=xo(1|e,n,i,r)}function Zm(t,e){return Za(8390656,8,t,e)}function tf(t,e){return cu(2048,8,t,e)}function P_(t,e){return cu(4,2,t,e)}function b_(t,e){return cu(4,4,t,e)}function D_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function O_(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,D_.bind(null,e,t),n)}function nf(){}function M_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function L_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Jh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function V_(t,e,n){return Wr&21?(Xt(n,e)||(n=$v(),xe.lanes|=n,Gr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,It=!0),t.memoizedState=n)}function I1(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Dc.transition;Dc.transition={};try{t(!1),e()}finally{de=n,Dc.transition=r}}function j_(){return $t().memoizedState}function x1(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},F_(t))U_(e,n);else if(n=w_(t,e,n,r),n!==null){var s=gt();Qt(n,t,r,s),z_(n,e,r)}}function S1(t,e,n){var r=ar(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(F_(t))U_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Xt(l,o)){var u=e.interleaved;u===null?(s.next=s,Gh(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=w_(t,e,s,r),n!==null&&(s=gt(),Qt(n,t,r,s),z_(n,e,r))}}function F_(t){var e=t.alternate;return t===xe||e!==null&&e===xe}function U_(t,e){Xi=bl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function z_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Dh(t,n)}}var Dl={readContext:zt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},A1={readContext:zt,useCallback:function(t,e){return tn().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:Zm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Za(4194308,4,D_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Za(4194308,4,t,e)},useInsertionEffect:function(t,e){return Za(4,2,t,e)},useMemo:function(t,e){var n=tn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=tn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=x1.bind(null,xe,t),[r.memoizedState,t]},useRef:function(t){var e=tn();return t={current:t},e.memoizedState=t},useState:Jm,useDebugValue:nf,useDeferredValue:function(t){return tn().memoizedState=t},useTransition:function(){var t=Jm(!1),e=t[0];return t=I1.bind(null,t[1]),tn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=xe,s=tn();if(Ee){if(n===void 0)throw Error(j(407));n=n()}else{if(n=e(),He===null)throw Error(j(349));Wr&30||S_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Zm(C_.bind(null,r,i,t),[t]),r.flags|=2048,xo(9,A_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=tn(),e=He.identifierPrefix;if(Ee){var n=_n,r=vn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=To++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=T1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},C1={readContext:zt,useCallback:M_,useContext:zt,useEffect:tf,useImperativeHandle:O_,useInsertionEffect:P_,useLayoutEffect:b_,useMemo:L_,useReducer:Oc,useRef:N_,useState:function(){return Oc(Io)},useDebugValue:nf,useDeferredValue:function(t){var e=$t();return V_(e,Ve.memoizedState,t)},useTransition:function(){var t=Oc(Io)[0],e=$t().memoizedState;return[t,e]},useMutableSource:I_,useSyncExternalStore:x_,useId:j_,unstable_isNewReconciler:!1},R1={readContext:zt,useCallback:M_,useContext:zt,useEffect:tf,useImperativeHandle:O_,useInsertionEffect:P_,useLayoutEffect:b_,useMemo:L_,useReducer:Mc,useRef:N_,useState:function(){return Mc(Io)},useDebugValue:nf,useDeferredValue:function(t){var e=$t();return Ve===null?e.memoizedState=t:V_(e,Ve.memoizedState,t)},useTransition:function(){var t=Mc(Io)[0],e=$t().memoizedState;return[t,e]},useMutableSource:I_,useSyncExternalStore:x_,useId:j_,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Se({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Rd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Se({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?ss(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=gt(),s=ar(t),i=xn(r,s);i.payload=e,n!=null&&(i.callback=n),e=ir(t,i,s),e!==null&&(Qt(e,t,s,r),Xa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=gt(),s=ar(t),i=xn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ir(t,i,s),e!==null&&(Qt(e,t,s,r),Xa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=gt(),r=ar(t),s=xn(n,r);s.tag=2,e!=null&&(s.callback=e),e=ir(t,s,r),e!==null&&(Qt(e,t,r,n),Xa(e,t,r))}};function eg(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(s,i):!0}function $_(t,e,n){var r=!1,s=mr,i=e.contextType;return typeof i=="object"&&i!==null?i=zt(i):(s=St(e)?Hr:ct.current,r=e.contextTypes,i=(r=r!=null)?qs(t,s):mr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function tg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Kh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=zt(i):(i=St(e)?Hr:ct.current,s.context=qs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Rd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&du.enqueueReplaceState(s,s.state,null),Nl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Qs(t,e){try{var n="",r=e;do n+=nI(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Lc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Nd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var k1=typeof WeakMap=="function"?WeakMap:Map;function B_(t,e,n){n=xn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ml||(Ml=!0,Ud=r),Nd(t,e)},n}function H_(t,e,n){n=xn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Nd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Nd(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new k1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=B1.bind(null,t,e,n),e.then(t,t))}function rg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function sg(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=xn(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var N1=Mn.ReactCurrentOwner,It=!1;function mt(t,e,n,r){e.child=t===null?__(e,null,n,r):Gs(e,t.child,n,r)}function ig(t,e,n,r,s){n=n.render;var i=e.ref;return js(e,s),r=Zh(t,e,n,r,i,s),n=ef(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,kn(t,e,s)):(Ee&&n&&zh(e),e.flags|=1,mt(t,e,r,s),e.child)}function og(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!df(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,q_(t,e,i,r,s)):(t=rl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return kn(t,e,s)}return e.flags|=1,t=lr(i,r),t.ref=e.ref,t.return=e,e.child=t}function q_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(go(i,r)&&t.ref===e.ref)if(It=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(It=!0);else return e.lanes=t.lanes,kn(t,e,s)}return Pd(t,e,n,r,s)}function W_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(Ps,Rt),Rt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ge(Ps,Rt),Rt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ge(Ps,Rt),Rt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ge(Ps,Rt),Rt|=r;return mt(t,e,s,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Pd(t,e,n,r,s){var i=St(n)?Hr:ct.current;return i=qs(e,i),js(e,s),n=Zh(t,e,n,r,i,s),r=ef(),t!==null&&!It?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,kn(t,e,s)):(Ee&&r&&zh(e),e.flags|=1,mt(t,e,n,s),e.child)}function ag(t,e,n,r,s){if(St(n)){var i=!0;Sl(e)}else i=!1;if(js(e,s),e.stateNode===null)el(t,e),$_(e,n,r),kd(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=zt(d):(d=St(n)?Hr:ct.current,d=qs(e,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&tg(e,o,r,d),Bn=!1;var g=e.memoizedState;o.state=g,Nl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||xt.current||Bn?(typeof p=="function"&&(Rd(e,n,p,r),u=e.memoizedState),(l=Bn||eg(e,n,l,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,E_(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:qt(e.type,l),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=St(n)?Hr:ct.current,u=qs(e,u));var T=n.getDerivedStateFromProps;(p=typeof T=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&tg(e,o,r,u),Bn=!1,g=e.memoizedState,o.state=g,Nl(e,r,o,s);var I=e.memoizedState;l!==m||g!==I||xt.current||Bn?(typeof T=="function"&&(Rd(e,n,T,r),I=e.memoizedState),(d=Bn||eg(e,n,d,r,g,I,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,I,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,I,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=I),o.props=r,o.state=I,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return bd(t,e,n,r,i,s)}function bd(t,e,n,r,s,i){G_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Wm(e,n,!1),kn(t,e,i);r=e.stateNode,N1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Gs(e,t.child,null,i),e.child=Gs(e,null,l,i)):mt(t,e,l,i),e.memoizedState=r.state,s&&Wm(e,n,!0),e.child}function K_(t){var e=t.stateNode;e.pendingContext?qm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&qm(t,e.context,!1),Qh(t,e.containerInfo)}function lg(t,e,n,r,s){return Ws(),Bh(s),e.flags|=256,mt(t,e,n,r),e.child}var Dd={dehydrated:null,treeContext:null,retryLane:0};function Od(t){return{baseLanes:t,cachePool:null,transitions:null}}function Q_(t,e,n){var r=e.pendingProps,s=Ie.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ge(Ie,s&1),t===null)return Ad(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=pu(o,r,0,null),t=zr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Od(n),e.memoizedState=Dd,t):rf(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return P1(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=lr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=lr(l,i):(i=zr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Od(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Dd,r}return i=t.child,t=i.sibling,r=lr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function rf(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,r){return r!==null&&Bh(r),Gs(e,t.child,null,n),t=rf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function P1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Lc(Error(j(422))),Ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=pu({mode:"visible",children:r.children},s,0,null),i=zr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Gs(e,t.child,null,o),e.child.memoizedState=Od(o),e.memoizedState=Dd,i);if(!(e.mode&1))return Ma(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(j(419)),r=Lc(i,r,void 0),Ma(t,e,o,r)}if(l=(o&t.childLanes)!==0,It||l){if(r=He,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Rn(t,s),Qt(r,t,s,-1))}return cf(),r=Lc(Error(j(421))),Ma(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=H1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,kt=sr(s.nextSibling),Pt=e,Ee=!0,Gt=null,t!==null&&(Lt[Vt++]=vn,Lt[Vt++]=_n,Lt[Vt++]=qr,vn=t.id,_n=t.overflow,qr=e),e=rf(e,r.children),e.flags|=4096,e)}function ug(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Cd(t.return,e,n)}function Vc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function Y_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(mt(t,e,r.children,n),r=Ie.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ug(t,n,e);else if(t.tag===19)ug(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ge(Ie,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Pl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Vc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Pl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Vc(e,!0,n,null,i);break;case"together":Vc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function el(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function kn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Gr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(j(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function b1(t,e,n){switch(e.tag){case 3:K_(e),Ws();break;case 5:T_(e);break;case 1:St(e.type)&&Sl(e);break;case 4:Qh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ge(Rl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ge(Ie,Ie.current&1),e.flags|=128,null):n&e.child.childLanes?Q_(t,e,n):(ge(Ie,Ie.current&1),t=kn(t,e,n),t!==null?t.sibling:null);ge(Ie,Ie.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Y_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ge(Ie,Ie.current),r)break;return null;case 22:case 23:return e.lanes=0,W_(t,e,n)}return kn(t,e,n)}var X_,Md,J_,Z_;X_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Md=function(){};J_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,jr(on.current);var i=null;switch(n){case"input":s=rd(t,s),r=rd(t,r),i=[];break;case"select":s=Se({},s,{value:void 0}),r=Se({},r,{value:void 0}),i=[];break;case"textarea":s=od(t,s),r=od(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Il)}ld(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(lo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(lo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&ve("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};Z_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Oi(t,e){if(!Ee)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function D1(t,e,n){var r=e.pendingProps;switch($h(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return St(e.type)&&xl(),rt(e),null;case 3:return r=e.stateNode,Ks(),we(xt),we(ct),Xh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(Bd(Gt),Gt=null))),Md(t,e),rt(e),null;case 5:Yh(e);var s=jr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)J_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(j(166));return rt(e),null}if(t=jr(on.current),Da(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[nn]=e,r[_o]=i,t=(e.mode&1)!==0,n){case"dialog":ve("cancel",r),ve("close",r);break;case"iframe":case"object":case"embed":ve("load",r);break;case"video":case"audio":for(s=0;s<Ui.length;s++)ve(Ui[s],r);break;case"source":ve("error",r);break;case"img":case"image":case"link":ve("error",r),ve("load",r);break;case"details":ve("toggle",r);break;case"input":vm(r,i),ve("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ve("invalid",r);break;case"textarea":wm(r,i),ve("invalid",r)}ld(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ba(r.textContent,l,t),s=["children",""+l]):lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&ve("scroll",r)}switch(n){case"input":xa(r),_m(r,i,!0);break;case"textarea":xa(r),Em(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Il)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Cv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[_o]=r,X_(t,e,!1,!1),e.stateNode=t;e:{switch(o=ud(n,r),n){case"dialog":ve("cancel",t),ve("close",t),s=r;break;case"iframe":case"object":case"embed":ve("load",t),s=r;break;case"video":case"audio":for(s=0;s<Ui.length;s++)ve(Ui[s],t);s=r;break;case"source":ve("error",t),s=r;break;case"img":case"image":case"link":ve("error",t),ve("load",t),s=r;break;case"details":ve("toggle",t),s=r;break;case"input":vm(t,r),s=rd(t,r),ve("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Se({},r,{value:void 0}),ve("invalid",t);break;case"textarea":wm(t,r),s=od(t,r),ve("invalid",t);break;default:s=r}ld(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?Nv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Rv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&uo(t,u):typeof u=="number"&&uo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ve("scroll",t):u!=null&&Ch(t,i,u,o))}switch(n){case"input":xa(t),_m(t,r,!1);break;case"textarea":xa(t),Em(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Os(t,!!r.multiple,i,!1):r.defaultValue!=null&&Os(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Il)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)Z_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(j(166));if(n=jr(Eo.current),jr(on.current),Da(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(i=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:ba(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ba(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return rt(e),null;case 13:if(we(Ie),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ee&&kt!==null&&e.mode&1&&!(e.flags&128))y_(),Ws(),e.flags|=98560,i=!1;else if(i=Da(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(j(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(j(317));i[nn]=e}else Ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),i=!1}else Gt!==null&&(Bd(Gt),Gt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ie.current&1?Fe===0&&(Fe=3):cf())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Ks(),Md(t,e),t===null&&yo(e.stateNode.containerInfo),rt(e),null;case 10:return Wh(e.type._context),rt(e),null;case 17:return St(e.type)&&xl(),rt(e),null;case 19:if(we(Ie),i=e.memoizedState,i===null)return rt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Oi(i,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Pl(t),o!==null){for(e.flags|=128,Oi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ge(Ie,Ie.current&1|2),e.child}t=t.sibling}i.tail!==null&&be()>Ys&&(e.flags|=128,r=!0,Oi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Pl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Oi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ee)return rt(e),null}else 2*be()-i.renderingStartTime>Ys&&n!==1073741824&&(e.flags|=128,r=!0,Oi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=be(),e.sibling=null,n=Ie.current,ge(Ie,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return uf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Rt&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(j(156,e.tag))}function O1(t,e){switch($h(e),e.tag){case 1:return St(e.type)&&xl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ks(),we(xt),we(ct),Xh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Yh(e),null;case 13:if(we(Ie),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(j(340));Ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return we(Ie),null;case 4:return Ks(),null;case 10:return Wh(e.type._context),null;case 22:case 23:return uf(),null;case 24:return null;default:return null}}var La=!1,ot=!1,M1=typeof WeakSet=="function"?WeakSet:Set,q=null;function Ns(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ke(t,e,r)}else n.current=null}function Ld(t,e,n){try{n()}catch(r){ke(t,e,r)}}var cg=!1;function L1(t,e){if(_d=wl,t=s_(),Uh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,m=t,g=null;t:for(;;){for(var T;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(T=m.firstChild)!==null;)g=m,m=T;for(;;){if(m===t)break t;if(g===n&&++d===s&&(l=o),g===i&&++p===r&&(u=o),(T=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=T}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(wd={focusedElem:t,selectionRange:n},wl=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var I=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(I!==null){var N=I.memoizedProps,M=I.memoizedState,_=e.stateNode,x=_.getSnapshotBeforeUpdate(e.elementType===e.type?N:qt(e.type,N),M);_.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var R=e.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(j(163))}}catch(O){ke(e,e.return,O)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return I=cg,cg=!1,I}function Ji(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ld(e,n,i)}s=s.next}while(s!==r)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function e0(t){var e=t.alternate;e!==null&&(t.alternate=null,e0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[_o],delete e[Id],delete e[v1],delete e[_1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function t0(t){return t.tag===5||t.tag===3||t.tag===4}function dg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||t0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function jd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Il));else if(r!==4&&(t=t.child,t!==null))for(jd(t,e,n),t=t.sibling;t!==null;)jd(t,e,n),t=t.sibling}function Fd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Fd(t,e,n),t=t.sibling;t!==null;)Fd(t,e,n),t=t.sibling}var Ge=null,Wt=!1;function Un(t,e,n){for(n=n.child;n!==null;)n0(t,e,n),n=n.sibling}function n0(t,e,n){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:ot||Ns(n,e);case 6:var r=Ge,s=Wt;Ge=null,Un(t,e,n),Ge=r,Wt=s,Ge!==null&&(Wt?(t=Ge,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ge.removeChild(n.stateNode));break;case 18:Ge!==null&&(Wt?(t=Ge,n=n.stateNode,t.nodeType===8?Nc(t.parentNode,n):t.nodeType===1&&Nc(t,n),po(t)):Nc(Ge,n.stateNode));break;case 4:r=Ge,s=Wt,Ge=n.stateNode.containerInfo,Wt=!0,Un(t,e,n),Ge=r,Wt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ld(n,e,o),s=s.next}while(s!==r)}Un(t,e,n);break;case 1:if(!ot&&(Ns(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ke(n,e,l)}Un(t,e,n);break;case 21:Un(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,Un(t,e,n),ot=r):Un(t,e,n);break;default:Un(t,e,n)}}function hg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new M1),e.forEach(function(r){var s=q1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ge=l.stateNode,Wt=!1;break e;case 3:Ge=l.stateNode.containerInfo,Wt=!0;break e;case 4:Ge=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(Ge===null)throw Error(j(160));n0(i,o,s),Ge=null,Wt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){ke(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)r0(e,t),e=e.sibling}function r0(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),en(t),r&4){try{Ji(3,t,t.return),hu(3,t)}catch(N){ke(t,t.return,N)}try{Ji(5,t,t.return)}catch(N){ke(t,t.return,N)}}break;case 1:Ht(e,t),en(t),r&512&&n!==null&&Ns(n,n.return);break;case 5:if(Ht(e,t),en(t),r&512&&n!==null&&Ns(n,n.return),t.flags&32){var s=t.stateNode;try{uo(s,"")}catch(N){ke(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Sv(s,i),ud(l,o);var d=ud(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?Nv(s,m):p==="dangerouslySetInnerHTML"?Rv(s,m):p==="children"?uo(s,m):Ch(s,p,m,d)}switch(l){case"input":sd(s,i);break;case"textarea":Av(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var T=i.value;T!=null?Os(s,!!i.multiple,T,!1):g!==!!i.multiple&&(i.defaultValue!=null?Os(s,!!i.multiple,i.defaultValue,!0):Os(s,!!i.multiple,i.multiple?[]:"",!1))}s[_o]=i}catch(N){ke(t,t.return,N)}}break;case 6:if(Ht(e,t),en(t),r&4){if(t.stateNode===null)throw Error(j(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){ke(t,t.return,N)}}break;case 3:if(Ht(e,t),en(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(N){ke(t,t.return,N)}break;case 4:Ht(e,t),en(t);break;case 13:Ht(e,t),en(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(af=be())),r&4&&hg(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(d=ot)||p,Ht(e,t),ot=d):Ht(e,t),en(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(q=t,p=t.child;p!==null;){for(m=q=p;q!==null;){switch(g=q,T=g.child,g.tag){case 0:case 11:case 14:case 15:Ji(4,g,g.return);break;case 1:Ns(g,g.return);var I=g.stateNode;if(typeof I.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,I.props=e.memoizedProps,I.state=e.memoizedState,I.componentWillUnmount()}catch(N){ke(r,n,N)}}break;case 5:Ns(g,g.return);break;case 22:if(g.memoizedState!==null){pg(m);continue}}T!==null?(T.return=g,q=T):pg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=kv("display",o))}catch(N){ke(t,t.return,N)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(N){ke(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ht(e,t),en(t),r&4&&hg(t);break;case 21:break;default:Ht(e,t),en(t)}}function en(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(t0(n)){var r=n;break e}n=n.return}throw Error(j(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(uo(s,""),r.flags&=-33);var i=dg(t);Fd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=dg(t);jd(t,l,o);break;default:throw Error(j(161))}}catch(u){ke(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function V1(t,e,n){q=t,s0(t)}function s0(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var s=q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||La;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ot;l=La;var d=ot;if(La=o,(ot=u)&&!d)for(q=s;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?mg(s):u!==null?(u.return=o,q=u):mg(s);for(;i!==null;)q=i,s0(i),i=i.sibling;q=s,La=l,ot=d}fg(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,q=i):fg(t)}}function fg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Xm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&po(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(j(163))}ot||e.flags&512&&Vd(e)}catch(g){ke(e,e.return,g)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function pg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function mg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(u){ke(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){ke(e,s,u)}}var i=e.return;try{Vd(e)}catch(u){ke(e,i,u)}break;case 5:var o=e.return;try{Vd(e)}catch(u){ke(e,o,u)}}}catch(u){ke(e,e.return,u)}if(e===t){q=null;break}var l=e.sibling;if(l!==null){l.return=e.return,q=l;break}q=e.return}}var j1=Math.ceil,Ol=Mn.ReactCurrentDispatcher,sf=Mn.ReactCurrentOwner,Ft=Mn.ReactCurrentBatchConfig,ae=0,He=null,Oe=null,Qe=0,Rt=0,Ps=Er(0),Fe=0,So=null,Gr=0,fu=0,of=0,Zi=null,Et=null,af=0,Ys=1/0,gn=null,Ml=!1,Ud=null,or=null,Va=!1,Zn=null,Ll=0,eo=0,zd=null,tl=-1,nl=0;function gt(){return ae&6?be():tl!==-1?tl:tl=be()}function ar(t){return t.mode&1?ae&2&&Qe!==0?Qe&-Qe:E1.transition!==null?(nl===0&&(nl=$v()),nl):(t=de,t!==0||(t=window.event,t=t===void 0?16:Qv(t.type)),t):1}function Qt(t,e,n,r){if(50<eo)throw eo=0,zd=null,Error(j(185));Fo(t,n,r),(!(ae&2)||t!==He)&&(t===He&&(!(ae&2)&&(fu|=n),Fe===4&&Wn(t,Qe)),At(t,r),n===1&&ae===0&&!(e.mode&1)&&(Ys=be()+500,uu&&Tr()))}function At(t,e){var n=t.callbackNode;EI(t,e);var r=_l(t,t===He?Qe:0);if(r===0)n!==null&&xm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&xm(n),e===1)t.tag===0?w1(gg.bind(null,t)):p_(gg.bind(null,t)),g1(function(){!(ae&6)&&Tr()}),n=null;else{switch(Bv(r)){case 1:n=bh;break;case 4:n=Uv;break;case 16:n=vl;break;case 536870912:n=zv;break;default:n=vl}n=h0(n,i0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function i0(t,e){if(tl=-1,nl=0,ae&6)throw Error(j(327));var n=t.callbackNode;if(Fs()&&t.callbackNode!==n)return null;var r=_l(t,t===He?Qe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Vl(t,r);else{e=r;var s=ae;ae|=2;var i=a0();(He!==t||Qe!==e)&&(gn=null,Ys=be()+500,Ur(t,e));do try{z1();break}catch(l){o0(t,l)}while(!0);qh(),Ol.current=i,ae=s,Oe!==null?e=0:(He=null,Qe=0,e=Fe)}if(e!==0){if(e===2&&(s=pd(t),s!==0&&(r=s,e=$d(t,s))),e===1)throw n=So,Ur(t,0),Wn(t,r),At(t,be()),n;if(e===6)Wn(t,r);else{if(s=t.current.alternate,!(r&30)&&!F1(s)&&(e=Vl(t,r),e===2&&(i=pd(t),i!==0&&(r=i,e=$d(t,i))),e===1))throw n=So,Ur(t,0),Wn(t,r),At(t,be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(j(345));case 2:br(t,Et,gn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=af+500-be(),10<e)){if(_l(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){gt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=Td(br.bind(null,t,Et,gn),e);break}br(t,Et,gn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Kt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*j1(r/1960))-r,10<r){t.timeoutHandle=Td(br.bind(null,t,Et,gn),r);break}br(t,Et,gn);break;case 5:br(t,Et,gn);break;default:throw Error(j(329))}}}return At(t,be()),t.callbackNode===n?i0.bind(null,t):null}function $d(t,e){var n=Zi;return t.current.memoizedState.isDehydrated&&(Ur(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=Et,Et=n,e!==null&&Bd(e)),t}function Bd(t){Et===null?Et=t:Et.push.apply(Et,t)}function F1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Xt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~of,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function gg(t){if(ae&6)throw Error(j(327));Fs();var e=_l(t,0);if(!(e&1))return At(t,be()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var r=pd(t);r!==0&&(e=r,n=$d(t,r))}if(n===1)throw n=So,Ur(t,0),Wn(t,e),At(t,be()),n;if(n===6)throw Error(j(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,br(t,Et,gn),At(t,be()),null}function lf(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(Ys=be()+500,uu&&Tr())}}function Kr(t){Zn!==null&&Zn.tag===0&&!(ae&6)&&Fs();var e=ae;ae|=1;var n=Ft.transition,r=de;try{if(Ft.transition=null,de=1,t)return t()}finally{de=r,Ft.transition=n,ae=e,!(ae&6)&&Tr()}}function uf(){Rt=Ps.current,we(Ps)}function Ur(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,m1(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch($h(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&xl();break;case 3:Ks(),we(xt),we(ct),Xh();break;case 5:Yh(r);break;case 4:Ks();break;case 13:we(Ie);break;case 19:we(Ie);break;case 10:Wh(r.type._context);break;case 22:case 23:uf()}n=n.return}if(He=t,Oe=t=lr(t.current,null),Qe=Rt=e,Fe=0,So=null,of=fu=Gr=0,Et=Zi=null,Vr!==null){for(e=0;e<Vr.length;e++)if(n=Vr[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Vr=null}return t}function o0(t,e){do{var n=Oe;try{if(qh(),Ja.current=Dl,bl){for(var r=xe.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}bl=!1}if(Wr=0,$e=Ve=xe=null,Xi=!1,To=0,sf.current=null,n===null||n.return===null){Fe=1,So=e,Oe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Qe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var T=rg(o);if(T!==null){T.flags&=-257,sg(T,o,l,i,e),T.mode&1&&ng(i,d,e),e=T,u=d;var I=e.updateQueue;if(I===null){var N=new Set;N.add(u),e.updateQueue=N}else I.add(u);break e}else{if(!(e&1)){ng(i,d,e),cf();break e}u=Error(j(426))}}else if(Ee&&l.mode&1){var M=rg(o);if(M!==null){!(M.flags&65536)&&(M.flags|=256),sg(M,o,l,i,e),Bh(Qs(u,l));break e}}i=u=Qs(u,l),Fe!==4&&(Fe=2),Zi===null?Zi=[i]:Zi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var _=B_(i,u,e);Ym(i,_);break e;case 1:l=u;var x=i.type,R=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(or===null||!or.has(R)))){i.flags|=65536,e&=-e,i.lanes|=e;var O=H_(i,l,e);Ym(i,O);break e}}i=i.return}while(i!==null)}u0(n)}catch(U){e=U,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function a0(){var t=Ol.current;return Ol.current=Dl,t===null?Dl:t}function cf(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),He===null||!(Gr&268435455)&&!(fu&268435455)||Wn(He,Qe)}function Vl(t,e){var n=ae;ae|=2;var r=a0();(He!==t||Qe!==e)&&(gn=null,Ur(t,e));do try{U1();break}catch(s){o0(t,s)}while(!0);if(qh(),ae=n,Ol.current=r,Oe!==null)throw Error(j(261));return He=null,Qe=0,Fe}function U1(){for(;Oe!==null;)l0(Oe)}function z1(){for(;Oe!==null&&!hI();)l0(Oe)}function l0(t){var e=d0(t.alternate,t,Rt);t.memoizedProps=t.pendingProps,e===null?u0(t):Oe=e,sf.current=null}function u0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=O1(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Oe=null;return}}else if(n=D1(n,e,Rt),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Fe===0&&(Fe=5)}function br(t,e,n){var r=de,s=Ft.transition;try{Ft.transition=null,de=1,$1(t,e,n,r)}finally{Ft.transition=s,de=r}return null}function $1(t,e,n,r){do Fs();while(Zn!==null);if(ae&6)throw Error(j(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(j(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(TI(t,i),t===He&&(Oe=He=null,Qe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Va||(Va=!0,h0(vl,function(){return Fs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ft.transition,Ft.transition=null;var o=de;de=1;var l=ae;ae|=4,sf.current=null,L1(t,n),r0(n,t),l1(wd),wl=!!_d,wd=_d=null,t.current=n,V1(n),fI(),ae=l,de=o,Ft.transition=i}else t.current=n;if(Va&&(Va=!1,Zn=t,Ll=s),i=t.pendingLanes,i===0&&(or=null),gI(n.stateNode),At(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ml)throw Ml=!1,t=Ud,Ud=null,t;return Ll&1&&t.tag!==0&&Fs(),i=t.pendingLanes,i&1?t===zd?eo++:(eo=0,zd=t):eo=0,Tr(),null}function Fs(){if(Zn!==null){var t=Bv(Ll),e=Ft.transition,n=de;try{if(Ft.transition=null,de=16>t?16:t,Zn===null)var r=!1;else{if(t=Zn,Zn=null,Ll=0,ae&6)throw Error(j(331));var s=ae;for(ae|=4,q=t.current;q!==null;){var i=q,o=i.child;if(q.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(q=d;q!==null;){var p=q;switch(p.tag){case 0:case 11:case 15:Ji(8,p,i)}var m=p.child;if(m!==null)m.return=p,q=m;else for(;q!==null;){p=q;var g=p.sibling,T=p.return;if(e0(p),p===d){q=null;break}if(g!==null){g.return=T,q=g;break}q=T}}}var I=i.alternate;if(I!==null){var N=I.child;if(N!==null){I.child=null;do{var M=N.sibling;N.sibling=null,N=M}while(N!==null)}}q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,q=o;else e:for(;q!==null;){if(i=q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ji(9,i,i.return)}var _=i.sibling;if(_!==null){_.return=i.return,q=_;break e}q=i.return}}var x=t.current;for(q=x;q!==null;){o=q;var R=o.child;if(o.subtreeFlags&2064&&R!==null)R.return=o,q=R;else e:for(o=x;q!==null;){if(l=q,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hu(9,l)}}catch(U){ke(l,l.return,U)}if(l===o){q=null;break e}var O=l.sibling;if(O!==null){O.return=l.return,q=O;break e}q=l.return}}if(ae=s,Tr(),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{de=n,Ft.transition=e}}return!1}function yg(t,e,n){e=Qs(n,e),e=B_(t,e,1),t=ir(t,e,1),e=gt(),t!==null&&(Fo(t,1,e),At(t,e))}function ke(t,e,n){if(t.tag===3)yg(t,t,n);else for(;e!==null;){if(e.tag===3){yg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=Qs(n,t),t=H_(e,t,1),e=ir(e,t,1),t=gt(),e!==null&&(Fo(e,1,t),At(e,t));break}}e=e.return}}function B1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=gt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Qe&n)===n&&(Fe===4||Fe===3&&(Qe&130023424)===Qe&&500>be()-af?Ur(t,0):of|=n),At(t,e)}function c0(t,e){e===0&&(t.mode&1?(e=Ca,Ca<<=1,!(Ca&130023424)&&(Ca=4194304)):e=1);var n=gt();t=Rn(t,e),t!==null&&(Fo(t,e,n),At(t,n))}function H1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),c0(t,n)}function q1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(j(314))}r!==null&&r.delete(e),c0(t,n)}var d0;d0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||xt.current)It=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return It=!1,b1(t,e,n);It=!!(t.flags&131072)}else It=!1,Ee&&e.flags&1048576&&m_(e,Cl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;el(t,e),t=e.pendingProps;var s=qs(e,ct.current);js(e,n),s=Zh(null,e,r,t,s,n);var i=ef();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,St(r)?(i=!0,Sl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Kh(e),s.updater=du,e.stateNode=s,s._reactInternals=e,kd(e,r,t,n),e=bd(null,e,r,!0,i,n)):(e.tag=0,Ee&&i&&zh(e),mt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(el(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=G1(r),t=qt(r,t),s){case 0:e=Pd(null,e,r,t,n);break e;case 1:e=ag(null,e,r,t,n);break e;case 11:e=ig(null,e,r,t,n);break e;case 14:e=og(null,e,r,qt(r.type,t),n);break e}throw Error(j(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Pd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),ag(t,e,r,s,n);case 3:e:{if(K_(e),t===null)throw Error(j(387));r=e.pendingProps,i=e.memoizedState,s=i.element,E_(t,e),Nl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Qs(Error(j(423)),e),e=lg(t,e,r,n,s);break e}else if(r!==s){s=Qs(Error(j(424)),e),e=lg(t,e,r,n,s);break e}else for(kt=sr(e.stateNode.containerInfo.firstChild),Pt=e,Ee=!0,Gt=null,n=__(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ws(),r===s){e=kn(t,e,n);break e}mt(t,e,r,n)}e=e.child}return e;case 5:return T_(e),t===null&&Ad(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,Ed(r,s)?o=null:i!==null&&Ed(r,i)&&(e.flags|=32),G_(t,e),mt(t,e,o,n),e.child;case 6:return t===null&&Ad(e),null;case 13:return Q_(t,e,n);case 4:return Qh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Gs(e,null,r,n):mt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),ig(t,e,r,s,n);case 7:return mt(t,e,e.pendingProps,n),e.child;case 8:return mt(t,e,e.pendingProps.children,n),e.child;case 12:return mt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ge(Rl,r._currentValue),r._currentValue=o,i!==null)if(Xt(i.value,o)){if(i.children===s.children&&!xt.current){e=kn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=xn(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Cd(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(j(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Cd(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}mt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,js(e,n),s=zt(s),r=r(s),e.flags|=1,mt(t,e,r,n),e.child;case 14:return r=e.type,s=qt(r,e.pendingProps),s=qt(r.type,s),og(t,e,r,s,n);case 15:return q_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),el(t,e),e.tag=1,St(r)?(t=!0,Sl(e)):t=!1,js(e,n),$_(e,r,s),kd(e,r,s,n),bd(null,e,r,!0,t,n);case 19:return Y_(t,e,n);case 22:return W_(t,e,n)}throw Error(j(156,e.tag))};function h0(t,e){return Fv(t,e)}function W1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new W1(t,e,n,r)}function df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function G1(t){if(typeof t=="function")return df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===kh)return 11;if(t===Nh)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function rl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Es:return zr(n.children,s,i,e);case Rh:o=8,s|=8;break;case Zc:return t=jt(12,n,e,s|2),t.elementType=Zc,t.lanes=i,t;case ed:return t=jt(13,n,e,s),t.elementType=ed,t.lanes=i,t;case td:return t=jt(19,n,e,s),t.elementType=td,t.lanes=i,t;case Tv:return pu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case wv:o=10;break e;case Ev:o=9;break e;case kh:o=11;break e;case Nh:o=14;break e;case $n:o=16,r=null;break e}throw Error(j(130,t==null?t:typeof t,""))}return e=jt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function zr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=Tv,t.lanes=n,t.stateNode={isHidden:!1},t}function jc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function K1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=_c(0),this.expirationTimes=_c(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_c(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function hf(t,e,n,r,s,i,o,l,u){return t=new K1(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=jt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Kh(i),t}function Q1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ws,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function f0(t){if(!t)return mr;t=t._reactInternals;e:{if(ss(t)!==t||t.tag!==1)throw Error(j(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(St(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(j(171))}if(t.tag===1){var n=t.type;if(St(n))return f_(t,n,e)}return e}function p0(t,e,n,r,s,i,o,l,u){return t=hf(n,r,!0,t,s,i,o,l,u),t.context=f0(null),n=t.current,r=gt(),s=ar(n),i=xn(r,s),i.callback=e??null,ir(n,i,s),t.current.lanes=s,Fo(t,s,r),At(t,r),t}function mu(t,e,n,r){var s=e.current,i=gt(),o=ar(s);return n=f0(n),e.context===null?e.context=n:e.pendingContext=n,e=xn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(s,e,o),t!==null&&(Qt(t,s,o,i),Xa(t,s,o)),o}function jl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function vg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function ff(t,e){vg(t,e),(t=t.alternate)&&vg(t,e)}function Y1(){return null}var m0=typeof reportError=="function"?reportError:function(t){console.error(t)};function pf(t){this._internalRoot=t}gu.prototype.render=pf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(j(409));mu(t,e,null,null)};gu.prototype.unmount=pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Kr(function(){mu(null,t,null,null)}),e[Cn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Wv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<qn.length&&e!==0&&e<qn[n].priority;n++);qn.splice(n,0,t),n===0&&Kv(t)}};function mf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function _g(){}function X1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=jl(o);i.call(d)}}var o=p0(e,r,t,0,null,!1,!1,"",_g);return t._reactRootContainer=o,t[Cn]=o.current,yo(t.nodeType===8?t.parentNode:t),Kr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=jl(u);l.call(d)}}var u=hf(t,0,!1,null,null,!1,!1,"",_g);return t._reactRootContainer=u,t[Cn]=u.current,yo(t.nodeType===8?t.parentNode:t),Kr(function(){mu(e,u,n,r)}),u}function vu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=jl(o);l.call(u)}}mu(e,o,t,s)}else o=X1(n,e,t,s,r);return jl(o)}Hv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Fi(e.pendingLanes);n!==0&&(Dh(e,n|1),At(e,be()),!(ae&6)&&(Ys=be()+500,Tr()))}break;case 13:Kr(function(){var r=Rn(t,1);if(r!==null){var s=gt();Qt(r,t,1,s)}}),ff(t,1)}};Oh=function(t){if(t.tag===13){var e=Rn(t,134217728);if(e!==null){var n=gt();Qt(e,t,134217728,n)}ff(t,134217728)}};qv=function(t){if(t.tag===13){var e=ar(t),n=Rn(t,e);if(n!==null){var r=gt();Qt(n,t,e,r)}ff(t,e)}};Wv=function(){return de};Gv=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};dd=function(t,e,n){switch(e){case"input":if(sd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=lu(r);if(!s)throw Error(j(90));xv(r),sd(r,s)}}}break;case"textarea":Av(t,n);break;case"select":e=n.value,e!=null&&Os(t,!!n.multiple,e,!1)}};Dv=lf;Ov=Kr;var J1={usingClientEntryPoint:!1,Events:[zo,Ss,lu,Pv,bv,lf]},Mi={findFiberByHostInstance:Lr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Z1={bundleType:Mi.bundleType,version:Mi.version,rendererPackageName:Mi.rendererPackageName,rendererConfig:Mi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vv(t),t===null?null:t.stateNode},findFiberByHostInstance:Mi.findFiberByHostInstance||Y1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{su=ja.inject(Z1),sn=ja}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=J1;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mf(e))throw Error(j(200));return Q1(t,e,null,n)};Dt.createRoot=function(t,e){if(!mf(t))throw Error(j(299));var n=!1,r="",s=m0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=hf(t,1,!1,null,null,n,!1,r,s),t[Cn]=e.current,yo(t.nodeType===8?t.parentNode:t),new pf(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(j(188)):(t=Object.keys(t).join(","),Error(j(268,t)));return t=Vv(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return Kr(t)};Dt.hydrate=function(t,e,n){if(!yu(e))throw Error(j(200));return vu(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!mf(t))throw Error(j(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=m0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=p0(e,null,t,1,n??null,s,!1,i,o),t[Cn]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new gu(e)};Dt.render=function(t,e,n){if(!yu(e))throw Error(j(200));return vu(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!yu(t))throw Error(j(40));return t._reactRootContainer?(Kr(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Cn]=null})}),!0):!1};Dt.unstable_batchedUpdates=lf;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(j(200));if(t==null||t._reactInternals===void 0)throw Error(j(38));return vu(t,e,n,!1,r)};Dt.version="18.3.1-next-f1338f8080-20240426";function g0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(g0)}catch(t){console.error(t)}}g0(),gv.exports=Dt;var ex=gv.exports,wg=ex;Xc.createRoot=wg.createRoot,Xc.hydrateRoot=wg.hydrateRoot;var Eg={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},tx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},v0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,T=d&63;u||(T=64,o||(g=64)),r.push(n[p],n[m],n[g],n[T])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):tx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new nx;const g=i<<2|l>>4;if(r.push(g),d!==64){const T=l<<4&240|d>>2;if(r.push(T),m!==64){const I=d<<6&192|m;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class nx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rx=function(t){const e=y0(t);return v0.encodeByteArray(e,!0)},Fl=function(t){return rx(t).replace(/\./g,"")},_0=function(t){try{return v0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ix=()=>sx().__FIREBASE_DEFAULTS__,ox=()=>{if(typeof process>"u"||typeof Eg>"u")return;const t=Eg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ax=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_0(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return ix()||ox()||ax()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w0=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},lx=t=>{const e=w0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},E0=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},T0=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ux{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Fl(JSON.stringify(n)),Fl(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function dx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function hx(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function fx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function px(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gx(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yx(){return!hx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vx(){try{return typeof indexedDB=="object"}catch{return!1}}function _x(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx="FirebaseError";class Ln extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=wx,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Bo.prototype.create)}}class Bo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Ex(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Ln(s,l,r)}}function Ex(t,e){return t.replace(Tx,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Tx=/\{\$([^}]+)}/g;function Ix(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Tg(i)&&Tg(o)){if(!Ul(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Tg(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ho(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function zi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function $i(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xx(t,e){const n=new Sx(t,e);return n.subscribe.bind(n)}class Sx{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Ax(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Uc),s.error===void 0&&(s.error=Uc),s.complete===void 0&&(s.complete=Uc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ax(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Uc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(t){return t&&t._delegate?t._delegate:t}class Qr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ux;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(kx(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Rx(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Rx(t){return t===Dr?void 0:t}function kx(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nx{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cx(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const Px={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},bx=ie.INFO,Dx={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},Ox=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Dx[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class gf{constructor(e){this.name=e,this._logLevel=bx,this._logHandler=Ox,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Px[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const Mx=(t,e)=>e.some(n=>t instanceof n);let Ig,xg;function Lx(){return Ig||(Ig=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vx(){return xg||(xg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const I0=new WeakMap,Hd=new WeakMap,x0=new WeakMap,zc=new WeakMap,yf=new WeakMap;function jx(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&I0.set(n,t)}).catch(()=>{}),yf.set(e,t),e}function Fx(t){if(Hd.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Hd.set(t,e)}let qd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Hd.get(t);if(e==="objectStoreNames")return t.objectStoreNames||x0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ux(t){qd=t(qd)}function zx(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call($c(this),e,...n);return x0.set(r,e.sort?e.sort():[e]),ur(r)}:Vx().includes(t)?function(...e){return t.apply($c(this),e),ur(I0.get(this))}:function(...e){return ur(t.apply($c(this),e))}}function $x(t){return typeof t=="function"?zx(t):(t instanceof IDBTransaction&&Fx(t),Mx(t,Lx())?new Proxy(t,qd):t)}function ur(t){if(t instanceof IDBRequest)return jx(t);if(zc.has(t))return zc.get(t);const e=$x(t);return e!==t&&(zc.set(t,e),yf.set(e,t)),e}const $c=t=>yf.get(t);function Bx(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ur(o.result),u.oldVersion,u.newVersion,ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const Hx=["get","getKey","getAll","getAllKeys","count"],qx=["put","add","delete","clear"],Bc=new Map;function Sg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Bc.get(e))return Bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Hx.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return Bc.set(e,i),i}Ux(t=>({...t,get:(e,n,r)=>Sg(e,n)||t.get(e,n,r),has:(e,n)=>!!Sg(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wx{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gx(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Wd="@firebase/app",Ag="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nn=new gf("@firebase/app"),Kx="@firebase/app-compat",Qx="@firebase/analytics-compat",Yx="@firebase/analytics",Xx="@firebase/app-check-compat",Jx="@firebase/app-check",Zx="@firebase/auth",eS="@firebase/auth-compat",tS="@firebase/database",nS="@firebase/data-connect",rS="@firebase/database-compat",sS="@firebase/functions",iS="@firebase/functions-compat",oS="@firebase/installations",aS="@firebase/installations-compat",lS="@firebase/messaging",uS="@firebase/messaging-compat",cS="@firebase/performance",dS="@firebase/performance-compat",hS="@firebase/remote-config",fS="@firebase/remote-config-compat",pS="@firebase/storage",mS="@firebase/storage-compat",gS="@firebase/firestore",yS="@firebase/vertexai-preview",vS="@firebase/firestore-compat",_S="firebase",wS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd="[DEFAULT]",ES={[Wd]:"fire-core",[Kx]:"fire-core-compat",[Yx]:"fire-analytics",[Qx]:"fire-analytics-compat",[Jx]:"fire-app-check",[Xx]:"fire-app-check-compat",[Zx]:"fire-auth",[eS]:"fire-auth-compat",[tS]:"fire-rtdb",[nS]:"fire-data-connect",[rS]:"fire-rtdb-compat",[sS]:"fire-fn",[iS]:"fire-fn-compat",[oS]:"fire-iid",[aS]:"fire-iid-compat",[lS]:"fire-fcm",[uS]:"fire-fcm-compat",[cS]:"fire-perf",[dS]:"fire-perf-compat",[hS]:"fire-rc",[fS]:"fire-rc-compat",[pS]:"fire-gcs",[mS]:"fire-gcs-compat",[gS]:"fire-fst",[vS]:"fire-fst-compat",[yS]:"fire-vertex","fire-js":"fire-js",[_S]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl=new Map,TS=new Map,Kd=new Map;function Cg(t,e){try{t.container.addComponent(e)}catch(n){Nn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Xs(t){const e=t.name;if(Kd.has(e))return Nn.debug(`There were multiple attempts to register component ${e}.`),!1;Kd.set(e,t);for(const n of zl.values())Cg(n,t);for(const n of TS.values())Cg(n,t);return!0}function vf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function wn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new Bo("app","Firebase",IS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Qr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const li=wS;function S0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw cr.create("bad-app-name",{appName:String(s)});if(n||(n=E0()),!n)throw cr.create("no-options");const i=zl.get(s);if(i){if(Ul(n,i.options)&&Ul(r,i.config))return i;throw cr.create("duplicate-app",{appName:s})}const o=new Nx(s);for(const u of Kd.values())o.addComponent(u);const l=new xS(n,r,o);return zl.set(s,l),l}function A0(t=Gd){const e=zl.get(t);if(!e&&t===Gd&&E0())return S0();if(!e)throw cr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let s=(r=ES[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Nn.warn(l.join(" "));return}Xs(new Qr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SS="firebase-heartbeat-database",AS=1,Ao="firebase-heartbeat-store";let Hc=null;function C0(){return Hc||(Hc=Bx(SS,AS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),Hc}async function CS(t){try{const n=(await C0()).transaction(Ao),r=await n.objectStore(Ao).get(R0(t));return await n.done,r}catch(e){if(e instanceof Ln)Nn.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Nn.warn(n.message)}}}async function Rg(t,e){try{const r=(await C0()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,R0(t)),await r.done}catch(n){if(n instanceof Ln)Nn.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Nn.warn(r.message)}}}function R0(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RS=1024,kS=30*24*60*60*1e3;class NS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=kS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){Nn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kg(),{heartbeatsToSend:r,unsentEntries:s}=PS(this._heartbeatsCache.heartbeats),i=Fl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Nn.warn(n),""}}}function kg(){return new Date().toISOString().substring(0,10)}function PS(t,e=RS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ng(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ng(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vx()?_x().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await CS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Rg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ng(t){return Fl(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t){Xs(new Qr("platform-logger",e=>new Wx(e),"PRIVATE")),Xs(new Qr("heartbeat",e=>new NS(e),"PRIVATE")),dr(Wd,Ag,t),dr(Wd,Ag,"esm2017"),dr("fire-js","")}DS("");function _f(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function k0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const OS=k0,N0=new Bo("auth","Firebase",k0());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l=new gf("@firebase/auth");function MS(t,...e){$l.logLevel<=ie.WARN&&$l.warn(`Auth (${li}): ${t}`,...e)}function sl(t,...e){$l.logLevel<=ie.ERROR&&$l.error(`Auth (${li}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t,...e){throw wf(t,...e)}function an(t,...e){return wf(t,...e)}function P0(t,e,n){const r=Object.assign(Object.assign({},OS()),{[e]:n});return new Bo("auth","Firebase",r).create(e,{appName:t.name})}function hr(t){return P0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function wf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return N0.create(t,...e)}function X(t,e,...n){if(!t)throw wf(e,...n)}function En(t){const e="INTERNAL ASSERTION FAILED: "+t;throw sl(e),new Error(e)}function Pn(t,e){t||En(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function LS(){return Pg()==="http:"||Pg()==="https:"}function Pg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(LS()||px()||"connection"in navigator)?navigator.onLine:!0}function jS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Pn(n>e,"Short delay should be less than long delay!"),this.isMobile=dx()||mx()}get(){return VS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(t,e){Pn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;En("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;En("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;En("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const US=new qo(3e4,6e4);function is(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ir(t,e,n,r,s={}){return D0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Ho(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return fx()||(d.referrerPolicy="no-referrer"),b0.fetch()(O0(t,t.config.apiHost,n,l),d)})}async function D0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},FS),e);try{const s=new $S(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Fa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Fa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Fa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Fa(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw P0(t,p,d);Jt(t,p)}}catch(s){if(s instanceof Ln)throw s;Jt(t,"network-request-failed",{message:String(s)})}}async function wu(t,e,n,r,s={}){const i=await Ir(t,e,n,r,s);return"mfaPendingCredential"in i&&Jt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function O0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ef(t.config,s):`${t.config.apiScheme}://${s}`}function zS(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class $S{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(an(this.auth,"network-request-failed")),US.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Fa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=an(t,e,r);return s.customData._tokenResponse=n,s}function bg(t){return t!==void 0&&t.enterprise!==void 0}class BS{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zS(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function HS(t,e){return Ir(t,"GET","/v2/recaptchaConfig",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qS(t,e){return Ir(t,"POST","/v1/accounts:delete",e)}async function M0(t,e){return Ir(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WS(t,e=!1){const n=Ue(t),r=await n.getIdToken(e),s=Tf(r);X(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:to(qc(s.auth_time)),issuedAtTime:to(qc(s.iat)),expirationTime:to(qc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function qc(t){return Number(t)*1e3}function Tf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return sl("JWT malformed, contained fewer than 3 sections"),null;try{const s=_0(n);return s?JSON.parse(s):(sl("Failed to decode base64 JWT payload"),null)}catch(s){return sl("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Dg(t){const e=Tf(t);return X(e,"internal-error"),X(typeof e.exp<"u","internal-error"),X(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ln&&GS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Co(t,M0(n,{idToken:r}));X(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?L0(i.providerUserInfo):[],l=YS(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Yd(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function QS(t){const e=Ue(t);await Bl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function YS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function L0(t){return t.map(e=>{var{providerId:n}=e,r=_f(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e){const n=await D0(t,{},async()=>{const r=Ho({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=O0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",b0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function JS(t,e){return Ir(t,"POST","/v2/accounts:revokeToken",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){X(e.idToken,"internal-error"),X(typeof e.idToken<"u","internal-error"),X(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Dg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){X(e.length!==0,"internal-error");const n=Dg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(X(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await XS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Us;return r&&(X(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(X(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(X(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Us,this.toJSON())}_performRefresh(){return En("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zn(t,e){X(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Tn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_f(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new KS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Yd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return X(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WS(this,e)}reload(){return QS(this)}_assign(e){this!==e&&(X(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Tn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){X(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Bl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(wn(this.auth.app))return Promise.reject(hr(this.auth));const e=await this.getIdToken();return await Co(this,qS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,T=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,M=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(d=n.createdAt)!==null&&d!==void 0?d:void 0,x=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:R,emailVerified:O,isAnonymous:U,providerData:F,stsTokenManager:w}=n;X(R&&w,e,"internal-error");const v=Us.fromJSON(this.name,w);X(typeof R=="string",e,"internal-error"),zn(m,e.name),zn(g,e.name),X(typeof O=="boolean",e,"internal-error"),X(typeof U=="boolean",e,"internal-error"),zn(T,e.name),zn(I,e.name),zn(N,e.name),zn(M,e.name),zn(_,e.name),zn(x,e.name);const E=new Tn({uid:R,auth:e,email:g,emailVerified:O,displayName:m,isAnonymous:U,photoURL:I,phoneNumber:T,tenantId:N,stsTokenManager:v,createdAt:_,lastLoginAt:x});return F&&Array.isArray(F)&&(E.providerData=F.map(A=>Object.assign({},A))),M&&(E._redirectEventId=M),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Us;s.updateFromServerResponse(n);const i=new Tn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Bl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];X(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?L0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Us;l.updateFromIdToken(r);const u=new Tn({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Yd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og=new Map;function In(t){Pn(t instanceof Function,"Expected a class definition");let e=Og.get(t);return e?(Pn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Og.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}V0.type="NONE";const Mg=V0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(t,e,n){return`firebase:${t}:${e}:${n}`}class zs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=il(this.userKey,s.apiKey,i),this.fullPersistenceKey=il("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Tn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new zs(In(Mg),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||In(Mg);const o=il(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const m=Tn._fromJSON(e,p);d!==i&&(l=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new zs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new zs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(z0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(j0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(B0(e))return"Blackberry";if(H0(e))return"Webos";if(F0(e))return"Safari";if((e.includes("chrome/")||U0(e))&&!e.includes("edge/"))return"Chrome";if($0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function j0(t=dt()){return/firefox\//i.test(t)}function F0(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function U0(t=dt()){return/crios\//i.test(t)}function z0(t=dt()){return/iemobile/i.test(t)}function $0(t=dt()){return/android/i.test(t)}function B0(t=dt()){return/blackberry/i.test(t)}function H0(t=dt()){return/webos/i.test(t)}function If(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ZS(t=dt()){var e;return If(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function eA(){return gx()&&document.documentMode===10}function q0(t=dt()){return If(t)||$0(t)||H0(t)||B0(t)||/windows phone/i.test(t)||z0(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W0(t,e=[]){let n;switch(t){case"Browser":n=Lg(dt());break;case"Worker":n=`${Lg(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${li}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nA(t,e={}){return Ir(t,"GET","/v2/passwordPolicy",is(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA=6;class sA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:rA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Vg(this),this.idTokenSubscription=new Vg(this),this.beforeStateQueue=new tA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=N0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await zs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await M0(this,{idToken:e}),r=await Tn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(wn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return X(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Bl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=jS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(wn(this.app))return Promise.reject(hr(this));const n=e?Ue(e):null;return n&&X(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&X(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return wn(this.app)?Promise.reject(hr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return wn(this.app)?Promise.reject(hr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await nA(this),n=new sA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Bo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await JS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;X(n,this,"argument-error"),this.redirectPersistenceManager=await zs.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(X(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return X(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&MS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ui(t){return Ue(t)}class Vg{constructor(e){this.auth=e,this.observer=null,this.addObserver=xx(n=>this.observer=n)}get next(){return X(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function oA(t){Eu=t}function G0(t){return Eu.loadJS(t)}function aA(){return Eu.recaptchaEnterpriseScript}function lA(){return Eu.gapiScript}function uA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cA="recaptcha-enterprise",dA="NO_RECAPTCHA";class hA{constructor(e){this.type=cA,this.auth=ui(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,l)=>{HS(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const d=new BS(u);return i.tenantId==null?i._agentRecaptchaConfig=d:i._tenantRecaptchaConfigs[i.tenantId]=d,o(d.siteKey)}}).catch(u=>{l(u)})})}function s(i,o,l){const u=window.grecaptcha;bg(u)?u.enterprise.ready(()=>{u.enterprise.execute(i,{action:e}).then(d=>{o(d)}).catch(()=>{o(dA)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(l=>{if(!n&&bg(window.grecaptcha))s(l,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=aA();u.length!==0&&(u+=l),G0(u).then(()=>{s(l,i,o)}).catch(d=>{o(d)})}}).catch(l=>{o(l)})})}}async function jg(t,e,n,r=!1){const s=new hA(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Fg(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await jg(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await jg(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t,e){const n=vf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ul(i,e??{}))return s;Jt(s,"already-initialized")}return n.initialize({options:e})}function pA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(In);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function mA(t,e,n){const r=ui(t);X(r._canInitEmulator,r,"emulator-config-failed"),X(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=K0(e),{host:o,port:l}=gA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),yA()}function K0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function gA(t){const e=K0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ug(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ug(o)}}}function Ug(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return En("not implemented")}_getIdTokenResponse(e){return En("not implemented")}_linkToIdToken(e,n){return En("not implemented")}_getReauthenticationResolver(e){return En("not implemented")}}async function vA(t,e){return Ir(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _A(t,e){return wu(t,"POST","/v1/accounts:signInWithPassword",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wA(t,e){return wu(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}async function EA(t,e){return wu(t,"POST","/v1/accounts:signInWithEmailLink",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends xf{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ro(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ro(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fg(e,n,"signInWithPassword",_A);case"emailLink":return wA(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fg(e,r,"signUpPassword",vA);case"emailLink":return EA(e,{idToken:n,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e){return wu(t,"POST","/v1/accounts:signInWithIdp",is(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="http://localhost";class Yr extends xf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Jt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_f(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Yr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return $s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,$s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,$s(e,n)}buildRequest(){const e={requestUri:TA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ho(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function xA(t){const e=zi($i(t)).link,n=e?zi($i(e)).deep_link_id:null,r=zi($i(t)).deep_link_id;return(r?zi($i(r)).link:null)||r||n||e||t}class Sf{constructor(e){var n,r,s,i,o,l;const u=zi($i(e)),d=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,m=IA((s=u.mode)!==null&&s!==void 0?s:null);X(d&&p&&m,"argument-error"),this.apiKey=d,this.operation=m,this.code=p,this.continueUrl=(i=u.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=xA(e);try{return new Sf(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.providerId=ci.PROVIDER_ID}static credential(e,n){return Ro._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Sf.parseLink(n);return X(r,"argument-error"),Ro._fromEmailAndCode(e,r.code,r.tenantId)}}ci.PROVIDER_ID="password";ci.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ci.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo extends Q0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends Wo{constructor(){super("facebook.com")}static credential(e){return Yr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends Wo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Yr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.GOOGLE_SIGN_IN_METHOD="google.com";Kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Wo{constructor(){super("github.com")}static credential(e){return Yr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qn.credential(e.oauthAccessToken)}catch{return null}}}Qn.GITHUB_SIGN_IN_METHOD="github.com";Qn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Wo{constructor(){super("twitter.com")}static credential(e,n){return Yr._fromParams({providerId:Yn.PROVIDER_ID,signInMethod:Yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Yn.credentialFromTaggedObject(e)}static credentialFromError(e){return Yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Yn.credential(n,r)}catch{return null}}}Yn.TWITTER_SIGN_IN_METHOD="twitter.com";Yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Tn._fromIdTokenResponse(e,r,s),o=zg(r);return new Js({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=zg(r);return new Js({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function zg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends Ln{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hl(e,n,r,s)}}function Y0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hl._fromErrorAndOperation(t,i,e,r):i})}async function SA(t,e,n=!1){const r=await Co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Js._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AA(t,e,n=!1){const{auth:r}=t;if(wn(r.app))return Promise.reject(hr(r));const s="reauthenticate";try{const i=await Co(t,Y0(r,s,e,t),n);X(i.idToken,r,"internal-error");const o=Tf(i.idToken);X(o,r,"internal-error");const{sub:l}=o;return X(t.uid===l,r,"user-mismatch"),Js._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Jt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function X0(t,e,n=!1){if(wn(t.app))return Promise.reject(hr(t));const r="signIn",s=await Y0(t,r,e),i=await Js._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function CA(t,e){return X0(ui(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RA(t){const e=ui(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function kA(t,e,n){return wn(t.app)?Promise.reject(hr(t)):CA(Ue(t),ci.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&RA(t),r})}function NA(t,e,n,r){return Ue(t).onIdTokenChanged(e,n,r)}function PA(t,e,n){return Ue(t).beforeAuthStateChanged(e,n)}function bA(t,e,n,r){return Ue(t).onAuthStateChanged(e,n,r)}function DA(t){return Ue(t).signOut()}const ql="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ql,"1"),this.storage.removeItem(ql),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=1e3,MA=10;class Z0 extends J0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=q0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);eA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,MA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},OA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Z0.type="LOCAL";const LA=Z0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew extends J0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ew.type="SESSION";const tw=ew;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Tu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await VA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Tu.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Af(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=Af("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(){return window}function FA(t){ln().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nw(){return typeof ln().WorkerGlobalScope<"u"&&typeof ln().importScripts=="function"}async function UA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function zA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function $A(){return nw()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="firebaseLocalStorageDb",BA=1,Wl="firebaseLocalStorage",sw="fbase_key";class Go{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Iu(t,e){return t.transaction([Wl],e?"readwrite":"readonly").objectStore(Wl)}function HA(){const t=indexedDB.deleteDatabase(rw);return new Go(t).toPromise()}function Xd(){const t=indexedDB.open(rw,BA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Wl,{keyPath:sw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Wl)?e(r):(r.close(),await HA(),e(await Xd()))})})}async function $g(t,e,n){const r=Iu(t,!0).put({[sw]:e,value:n});return new Go(r).toPromise()}async function qA(t,e){const n=Iu(t,!1).get(e),r=await new Go(n).toPromise();return r===void 0?null:r.value}function Bg(t,e){const n=Iu(t,!0).delete(e);return new Go(n).toPromise()}const WA=800,GA=3;class iw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>GA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Tu._getInstance($A()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await UA(),!this.activeServiceWorker)return;this.sender=new jA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||zA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xd();return await $g(e,ql,"1"),await Bg(e,ql),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$g(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>qA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Bg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Iu(s,!1).getAll();return new Go(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}iw.type="LOCAL";const KA=iw;new qo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(t,e){return e?In(e):(X(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cf extends xf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return $s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return $s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function YA(t){return X0(t.auth,new Cf(t),t.bypassAuthState)}function XA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),AA(n,new Cf(t),t.bypassAuthState)}async function JA(t){const{auth:e,user:n}=t;return X(n,e,"internal-error"),SA(n,new Cf(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ow{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return YA;case"linkViaPopup":case"linkViaRedirect":return JA;case"reauthViaPopup":case"reauthViaRedirect":return XA;default:Jt(this.auth,"internal-error")}}resolve(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Pn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZA=new qo(2e3,1e4);class bs extends ow{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,bs.currentPopupAction&&bs.currentPopupAction.cancel(),bs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return X(e,this.auth,"internal-error"),e}async onExecution(){Pn(this.filter.length===1,"Popup operations only handle one event");const e=Af();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(an(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(an(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,bs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(an(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ZA.get())};e()}}bs.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="pendingRedirect",ol=new Map;class tC extends ow{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ol.get(this.auth._key());if(!e){try{const r=await nC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ol.set(this.auth._key(),e)}return this.bypassAuthState||ol.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function nC(t,e){const n=iC(e),r=sC(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function rC(t,e){ol.set(t._key(),e)}function sC(t){return In(t._redirectPersistence)}function iC(t){return il(eC,t.config.apiKey,t.name)}async function oC(t,e,n=!1){if(wn(t.app))return Promise.reject(hr(t));const r=ui(t),s=QA(r,e),o=await new tC(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=10*60*1e3;class lC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!uC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!aw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(an(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aC&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function aw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function uC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return aw(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cC(t,e={}){return Ir(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hC=/^https?/;async function fC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await cC(t);for(const n of e)try{if(pC(n))return}catch{}Jt(t,"unauthorized-domain")}function pC(t){const e=Qd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hC.test(n))return!1;if(dC.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC=new qo(3e4,6e4);function qg(){const t=ln().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function gC(t){return new Promise((e,n)=>{var r,s,i;function o(){qg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{qg(),n(an(t,"network-request-failed"))},timeout:mC.get()})}if(!((s=(r=ln().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=ln().gapi)===null||i===void 0)&&i.load)o();else{const l=uA("iframefcb");return ln()[l]=()=>{gapi.load?o():n(an(t,"network-request-failed"))},G0(`${lA()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw al=null,e})}let al=null;function yC(t){return al=al||gC(t),al}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=new qo(5e3,15e3),_C="__/auth/iframe",wC="emulator/auth/iframe",EC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(t){const e=t.config;X(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ef(e,wC):`https://${t.config.authDomain}/${_C}`,r={apiKey:e.apiKey,appName:t.name,v:li},s=TC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ho(r).slice(1)}`}async function xC(t){const e=await yC(t),n=ln().gapi;return X(n,t,"internal-error"),e.open({where:document.body,url:IC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=an(t,"network-request-failed"),l=ln().setTimeout(()=>{i(o)},vC.get());function u(){ln().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AC=500,CC=600,RC="_blank",kC="http://localhost";class Wg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(t,e,n,r=AC,s=CC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},SC),{width:r.toString(),height:s.toString(),top:i,left:o}),d=dt().toLowerCase();n&&(l=U0(d)?RC:n),j0(d)&&(e=e||kC,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[T,I])=>`${g}${T}=${I},`,"");if(ZS(d)&&l!=="_self")return PC(e||"",l),new Wg(null);const m=window.open(e||"",l,p);X(m,t,"popup-blocked");try{m.focus()}catch{}return new Wg(m)}function PC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="__/auth/handler",DC="emulator/auth/handler",OC=encodeURIComponent("fac");async function Gg(t,e,n,r,s,i){X(t.config.authDomain,t,"auth-domain-config-required"),X(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:li,eventId:s};if(e instanceof Q0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ix(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Wo){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${OC}=${encodeURIComponent(u)}`:"";return`${MC(t)}?${Ho(l).slice(1)}${d}`}function MC({config:t}){return t.emulator?Ef(t,DC):`https://${t.authDomain}/${bC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc="webStorageSupport";class LC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tw,this._completeRedirectFn=oC,this._overrideRedirectResult=rC}async _openPopup(e,n,r,s){var i;Pn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Gg(e,n,r,Qd(),s);return NC(e,o,Af())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Gg(e,n,r,Qd(),s);return FA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Pn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await xC(e),r=new lC(e);return n.register("authEvent",s=>(X(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Wc,{type:Wc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Wc];o!==void 0&&n(!!o),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return q0()||F0()||If()}}const VC=LC;var Kg="@firebase/auth",Qg="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){X(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UC(t){Xs(new Qr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;X(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W0(t)},d=new iA(r,s,i,u);return pA(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Xs(new Qr("auth-internal",e=>{const n=ui(e.getProvider("auth").getImmediate());return(r=>new jC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Kg,Qg,FC(t)),dr(Kg,Qg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=5*60,$C=T0("authIdTokenMaxAge")||zC;let Yg=null;const BC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>$C)return;const s=n==null?void 0:n.token;Yg!==s&&(Yg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function HC(t=A0()){const e=vf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fA(t,{popupRedirectResolver:VC,persistence:[KA,LA,tw]}),r=T0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=BC(i.toString());PA(n,o,()=>o(n.currentUser)),NA(n,l=>o(l))}}const s=w0("auth");return s&&mA(n,`http://${s}`),n}function qC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}oA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=an("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",qC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UC("Browser");var WC="firebase",GC="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr(WC,GC,"app");var Xg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $r,lw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function E(){}E.prototype=v.prototype,w.D=v.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(A,S,k){for(var C=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)C[Ne-2]=arguments[Ne];return v.prototype[S].apply(A,C)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,E){E||(E=0);var A=Array(16);if(typeof v=="string")for(var S=0;16>S;++S)A[S]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(S=0;16>S;++S)A[S]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=w.g[0],E=w.g[1],S=w.g[2];var k=w.g[3],C=v+(k^E&(S^k))+A[0]+3614090360&4294967295;v=E+(C<<7&4294967295|C>>>25),C=k+(S^v&(E^S))+A[1]+3905402710&4294967295,k=v+(C<<12&4294967295|C>>>20),C=S+(E^k&(v^E))+A[2]+606105819&4294967295,S=k+(C<<17&4294967295|C>>>15),C=E+(v^S&(k^v))+A[3]+3250441966&4294967295,E=S+(C<<22&4294967295|C>>>10),C=v+(k^E&(S^k))+A[4]+4118548399&4294967295,v=E+(C<<7&4294967295|C>>>25),C=k+(S^v&(E^S))+A[5]+1200080426&4294967295,k=v+(C<<12&4294967295|C>>>20),C=S+(E^k&(v^E))+A[6]+2821735955&4294967295,S=k+(C<<17&4294967295|C>>>15),C=E+(v^S&(k^v))+A[7]+4249261313&4294967295,E=S+(C<<22&4294967295|C>>>10),C=v+(k^E&(S^k))+A[8]+1770035416&4294967295,v=E+(C<<7&4294967295|C>>>25),C=k+(S^v&(E^S))+A[9]+2336552879&4294967295,k=v+(C<<12&4294967295|C>>>20),C=S+(E^k&(v^E))+A[10]+4294925233&4294967295,S=k+(C<<17&4294967295|C>>>15),C=E+(v^S&(k^v))+A[11]+2304563134&4294967295,E=S+(C<<22&4294967295|C>>>10),C=v+(k^E&(S^k))+A[12]+1804603682&4294967295,v=E+(C<<7&4294967295|C>>>25),C=k+(S^v&(E^S))+A[13]+4254626195&4294967295,k=v+(C<<12&4294967295|C>>>20),C=S+(E^k&(v^E))+A[14]+2792965006&4294967295,S=k+(C<<17&4294967295|C>>>15),C=E+(v^S&(k^v))+A[15]+1236535329&4294967295,E=S+(C<<22&4294967295|C>>>10),C=v+(S^k&(E^S))+A[1]+4129170786&4294967295,v=E+(C<<5&4294967295|C>>>27),C=k+(E^S&(v^E))+A[6]+3225465664&4294967295,k=v+(C<<9&4294967295|C>>>23),C=S+(v^E&(k^v))+A[11]+643717713&4294967295,S=k+(C<<14&4294967295|C>>>18),C=E+(k^v&(S^k))+A[0]+3921069994&4294967295,E=S+(C<<20&4294967295|C>>>12),C=v+(S^k&(E^S))+A[5]+3593408605&4294967295,v=E+(C<<5&4294967295|C>>>27),C=k+(E^S&(v^E))+A[10]+38016083&4294967295,k=v+(C<<9&4294967295|C>>>23),C=S+(v^E&(k^v))+A[15]+3634488961&4294967295,S=k+(C<<14&4294967295|C>>>18),C=E+(k^v&(S^k))+A[4]+3889429448&4294967295,E=S+(C<<20&4294967295|C>>>12),C=v+(S^k&(E^S))+A[9]+568446438&4294967295,v=E+(C<<5&4294967295|C>>>27),C=k+(E^S&(v^E))+A[14]+3275163606&4294967295,k=v+(C<<9&4294967295|C>>>23),C=S+(v^E&(k^v))+A[3]+4107603335&4294967295,S=k+(C<<14&4294967295|C>>>18),C=E+(k^v&(S^k))+A[8]+1163531501&4294967295,E=S+(C<<20&4294967295|C>>>12),C=v+(S^k&(E^S))+A[13]+2850285829&4294967295,v=E+(C<<5&4294967295|C>>>27),C=k+(E^S&(v^E))+A[2]+4243563512&4294967295,k=v+(C<<9&4294967295|C>>>23),C=S+(v^E&(k^v))+A[7]+1735328473&4294967295,S=k+(C<<14&4294967295|C>>>18),C=E+(k^v&(S^k))+A[12]+2368359562&4294967295,E=S+(C<<20&4294967295|C>>>12),C=v+(E^S^k)+A[5]+4294588738&4294967295,v=E+(C<<4&4294967295|C>>>28),C=k+(v^E^S)+A[8]+2272392833&4294967295,k=v+(C<<11&4294967295|C>>>21),C=S+(k^v^E)+A[11]+1839030562&4294967295,S=k+(C<<16&4294967295|C>>>16),C=E+(S^k^v)+A[14]+4259657740&4294967295,E=S+(C<<23&4294967295|C>>>9),C=v+(E^S^k)+A[1]+2763975236&4294967295,v=E+(C<<4&4294967295|C>>>28),C=k+(v^E^S)+A[4]+1272893353&4294967295,k=v+(C<<11&4294967295|C>>>21),C=S+(k^v^E)+A[7]+4139469664&4294967295,S=k+(C<<16&4294967295|C>>>16),C=E+(S^k^v)+A[10]+3200236656&4294967295,E=S+(C<<23&4294967295|C>>>9),C=v+(E^S^k)+A[13]+681279174&4294967295,v=E+(C<<4&4294967295|C>>>28),C=k+(v^E^S)+A[0]+3936430074&4294967295,k=v+(C<<11&4294967295|C>>>21),C=S+(k^v^E)+A[3]+3572445317&4294967295,S=k+(C<<16&4294967295|C>>>16),C=E+(S^k^v)+A[6]+76029189&4294967295,E=S+(C<<23&4294967295|C>>>9),C=v+(E^S^k)+A[9]+3654602809&4294967295,v=E+(C<<4&4294967295|C>>>28),C=k+(v^E^S)+A[12]+3873151461&4294967295,k=v+(C<<11&4294967295|C>>>21),C=S+(k^v^E)+A[15]+530742520&4294967295,S=k+(C<<16&4294967295|C>>>16),C=E+(S^k^v)+A[2]+3299628645&4294967295,E=S+(C<<23&4294967295|C>>>9),C=v+(S^(E|~k))+A[0]+4096336452&4294967295,v=E+(C<<6&4294967295|C>>>26),C=k+(E^(v|~S))+A[7]+1126891415&4294967295,k=v+(C<<10&4294967295|C>>>22),C=S+(v^(k|~E))+A[14]+2878612391&4294967295,S=k+(C<<15&4294967295|C>>>17),C=E+(k^(S|~v))+A[5]+4237533241&4294967295,E=S+(C<<21&4294967295|C>>>11),C=v+(S^(E|~k))+A[12]+1700485571&4294967295,v=E+(C<<6&4294967295|C>>>26),C=k+(E^(v|~S))+A[3]+2399980690&4294967295,k=v+(C<<10&4294967295|C>>>22),C=S+(v^(k|~E))+A[10]+4293915773&4294967295,S=k+(C<<15&4294967295|C>>>17),C=E+(k^(S|~v))+A[1]+2240044497&4294967295,E=S+(C<<21&4294967295|C>>>11),C=v+(S^(E|~k))+A[8]+1873313359&4294967295,v=E+(C<<6&4294967295|C>>>26),C=k+(E^(v|~S))+A[15]+4264355552&4294967295,k=v+(C<<10&4294967295|C>>>22),C=S+(v^(k|~E))+A[6]+2734768916&4294967295,S=k+(C<<15&4294967295|C>>>17),C=E+(k^(S|~v))+A[13]+1309151649&4294967295,E=S+(C<<21&4294967295|C>>>11),C=v+(S^(E|~k))+A[4]+4149444226&4294967295,v=E+(C<<6&4294967295|C>>>26),C=k+(E^(v|~S))+A[11]+3174756917&4294967295,k=v+(C<<10&4294967295|C>>>22),C=S+(v^(k|~E))+A[2]+718787259&4294967295,S=k+(C<<15&4294967295|C>>>17),C=E+(k^(S|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(S+(C<<21&4294967295|C>>>11))&4294967295,w.g[2]=w.g[2]+S&4294967295,w.g[3]=w.g[3]+k&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var E=v-this.blockSize,A=this.B,S=this.h,k=0;k<v;){if(S==0)for(;k<=E;)s(this,w,k),k+=this.blockSize;if(typeof w=="string"){for(;k<v;)if(A[S++]=w.charCodeAt(k++),S==this.blockSize){s(this,A),S=0;break}}else for(;k<v;)if(A[S++]=w[k++],S==this.blockSize){s(this,A),S=0;break}}this.h=S,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var E=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=E&255,E/=256;for(this.u(w),w=Array(16),v=E=0;4>v;++v)for(var A=0;32>A;A+=8)w[E++]=this.g[v]>>>A&255;return w};function i(w,v){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=v(w)}function o(w,v){this.h=v;for(var E=[],A=!0,S=w.length-1;0<=S;S--){var k=w[S]|0;A&&k==v||(E[S]=k,A=!1)}this.g=E}var l={};function u(w){return-128<=w&&128>w?i(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return m;if(0>w)return M(d(-w));for(var v=[],E=1,A=0;w>=E;A++)v[A]=w/E|0,E*=4294967296;return new o(v,0)}function p(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return M(p(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(v,8)),A=m,S=0;S<w.length;S+=8){var k=Math.min(8,w.length-S),C=parseInt(w.substring(S,S+k),v);8>k?(k=d(Math.pow(v,k)),A=A.j(k).add(d(C))):(A=A.j(E),A=A.add(d(C)))}return A}var m=u(0),g=u(1),T=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-M(this).m();for(var w=0,v=1,E=0;E<this.g.length;E++){var A=this.i(E);w+=(0<=A?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(I(this))return"0";if(N(this))return"-"+M(this).toString(w);for(var v=d(Math.pow(w,6)),E=this,A="";;){var S=O(E,v).g;E=_(E,S.j(v));var k=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=S,I(E))return k+A;for(;6>k.length;)k="0"+k;A=k+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function I(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=_(this,w),N(w)?-1:I(w)?0:1};function M(w){for(var v=w.g.length,E=[],A=0;A<v;A++)E[A]=~w.g[A];return new o(E,~w.h).add(g)}t.abs=function(){return N(this)?M(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],A=0,S=0;S<=v;S++){var k=A+(this.i(S)&65535)+(w.i(S)&65535),C=(k>>>16)+(this.i(S)>>>16)+(w.i(S)>>>16);A=C>>>16,k&=65535,C&=65535,E[S]=C<<16|k}return new o(E,E[E.length-1]&-2147483648?-1:0)};function _(w,v){return w.add(M(v))}t.j=function(w){if(I(this)||I(w))return m;if(N(this))return N(w)?M(this).j(M(w)):M(M(this).j(w));if(N(w))return M(this.j(M(w)));if(0>this.l(T)&&0>w.l(T))return d(this.m()*w.m());for(var v=this.g.length+w.g.length,E=[],A=0;A<2*v;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var S=0;S<w.g.length;S++){var k=this.i(A)>>>16,C=this.i(A)&65535,Ne=w.i(S)>>>16,Y=w.i(S)&65535;E[2*A+2*S]+=C*Y,x(E,2*A+2*S),E[2*A+2*S+1]+=k*Y,x(E,2*A+2*S+1),E[2*A+2*S+1]+=C*Ne,x(E,2*A+2*S+1),E[2*A+2*S+2]+=k*Ne,x(E,2*A+2*S+2)}for(A=0;A<v;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=v;A<2*v;A++)E[A]=0;return new o(E,0)};function x(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function R(w,v){this.g=w,this.h=v}function O(w,v){if(I(v))throw Error("division by zero");if(I(w))return new R(m,m);if(N(w))return v=O(M(w),v),new R(M(v.g),M(v.h));if(N(v))return v=O(w,M(v)),new R(M(v.g),v.h);if(30<w.g.length){if(N(w)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,A=v;0>=A.l(w);)E=U(E),A=U(A);var S=F(E,1),k=F(A,1);for(A=F(A,2),E=F(E,2);!I(A);){var C=k.add(A);0>=C.l(w)&&(S=S.add(E),k=C),A=F(A,1),E=F(E,1)}return v=_(w,S.j(v)),new R(S,v)}for(S=m;0<=w.l(v);){for(E=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),k=d(E),C=k.j(v);N(C)||0<C.l(w);)E-=A,k=d(E),C=k.j(v);I(k)&&(k=g),S=S.add(k),w=_(w,C)}return new R(S,w)}t.A=function(w){return O(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)&w.i(A);return new o(E,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)|w.i(A);return new o(E,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)^w.i(A);return new o(E,this.h^w.h)};function U(w){for(var v=w.g.length+1,E=[],A=0;A<v;A++)E[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(E,w.h)}function F(w,v){var E=v>>5;v%=32;for(var A=w.g.length-E,S=[],k=0;k<A;k++)S[k]=0<v?w.i(k+E)>>>v|w.i(k+E+1)<<32-v:w.i(k+E);return new o(S,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,lw=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,$r=o}).apply(typeof Xg<"u"?Xg:typeof self<"u"?self:typeof window<"u"?window:{});var Ua=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var uw,Bi,cw,ll,Jd,dw,hw,fw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ua=="object"&&Ua];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var h=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in h))break e;h=h[P]}a=a[a.length-1],y=h[a],c=c(y),c!=y&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var h=0,y=!1,P={next:function(){if(!y&&h<a.length){var b=h++;return{value:c(b,a[b]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,h){return a.call.apply(a.bind,arguments)}function m(a,c,h){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function g(a,c,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function T(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var y=h.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function I(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(y,P,b){for(var $=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)$[pe-2]=arguments[pe];return c.prototype[P].apply(y,$)}}function N(a){const c=a.length;if(0<c){const h=Array(c);for(let y=0;y<c;y++)h[y]=a[y];return h}return[]}function M(a,c){for(let h=1;h<arguments.length;h++){const y=arguments[h];if(u(y)){const P=a.length||0,b=y.length||0;a.length=P+b;for(let $=0;$<b;$++)a[P+$]=y[$]}else a.push(y)}}class _{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function x(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function O(a){return O[" "](a),a}O[" "]=function(){};var U=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function F(a,c,h){for(const y in a)c.call(h,a[y],y,a)}function w(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function v(a){const c={};for(const h in a)c[h]=a[h];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,c){let h,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(h in y)a[h]=y[h];for(let b=0;b<E.length;b++)h=E[b],Object.prototype.hasOwnProperty.call(y,h)&&(a[h]=y[h])}}function S(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function k(a){l.setTimeout(()=>{throw a},0)}function C(){var a=z;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ne{constructor(){this.h=this.g=null}add(c,h){const y=Y.get();y.set(c,h),this.h?this.h.next=y:this.g=y,this.h=y}}var Y=new _(()=>new ht,a=>a.reset());class ht{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let H,D=!1,z=new Ne,G=()=>{const a=l.Promise.resolve(void 0);H=()=>{a.then(re)}};var re=()=>{for(var a;a=C();){try{a.h.call(a.g)}catch(h){k(h)}var c=Y;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}D=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var _t=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function fe(a,c){if(me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{O(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ce[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fe.aa.h.call(this)}}I(fe,me);var Ce={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Je="closure_listenable_"+(1e6*Math.random()|0),qu=0;function hp(a,c,h,y,P){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!y,this.ha=P,this.key=++qu,this.da=this.fa=!1}function hn(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ls(a){this.src=a,this.g={},this.h=0}ls.prototype.add=function(a,c,h,y,P){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var $=Wu(a,c,y,P);return-1<$?(c=a[$],h||(c.fa=!1)):(c=new hp(c,this.src,b,!!y,P),c.fa=h,a.push(c)),c};function us(a,c){var h=c.type;if(h in a.g){var y=a.g[h],P=Array.prototype.indexOf.call(y,c,void 0),b;(b=0<=P)&&Array.prototype.splice.call(y,P,1),b&&(hn(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function Wu(a,c,h,y){for(var P=0;P<a.length;++P){var b=a[P];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==y)return P}return-1}var Gu="closure_lm_"+(1e6*Math.random()|0),Ku={};function fp(a,c,h,y,P){if(Array.isArray(c)){for(var b=0;b<c.length;b++)fp(a,c[b],h,y,P);return null}return h=gp(h),a&&a[Je]?a.K(c,h,d(y)?!!y.capture:!1,P):JE(a,c,h,!1,y,P)}function JE(a,c,h,y,P,b){if(!c)throw Error("Invalid event type");var $=d(P)?!!P.capture:!!P,pe=Yu(a);if(pe||(a[Gu]=pe=new ls(a)),h=pe.add(c,h,y,$,b),h.proxy)return h;if(y=ZE(),h.proxy=y,y.src=a,y.listener=h,a.addEventListener)_t||(P=$),P===void 0&&(P=!1),a.addEventListener(c.toString(),y,P);else if(a.attachEvent)a.attachEvent(mp(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return h}function ZE(){function a(h){return c.call(a.src,a.listener,h)}const c=eT;return a}function pp(a,c,h,y,P){if(Array.isArray(c))for(var b=0;b<c.length;b++)pp(a,c[b],h,y,P);else y=d(y)?!!y.capture:!!y,h=gp(h),a&&a[Je]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],h=Wu(b,h,y,P),-1<h&&(hn(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=Yu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Wu(c,h,y,P)),(h=-1<a?c[a]:null)&&Qu(h))}function Qu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Je])us(c.i,a);else{var h=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(h,y,a.capture):c.detachEvent?c.detachEvent(mp(h),y):c.addListener&&c.removeListener&&c.removeListener(y),(h=Yu(c))?(us(h,a),h.h==0&&(h.src=null,c[Gu]=null)):hn(a)}}}function mp(a){return a in Ku?Ku[a]:Ku[a]="on"+a}function eT(a,c){if(a.da)a=!0;else{c=new fe(c,this);var h=a.listener,y=a.ha||a.src;a.fa&&Qu(a),a=h.call(y,c)}return a}function Yu(a){return a=a[Gu],a instanceof ls?a:null}var Xu="__closure_events_fn_"+(1e9*Math.random()>>>0);function gp(a){return typeof a=="function"?a:(a[Xu]||(a[Xu]=function(c){return a.handleEvent(c)}),a[Xu])}function Ze(){ce.call(this),this.i=new ls(this),this.M=this,this.F=null}I(Ze,ce),Ze.prototype[Je]=!0,Ze.prototype.removeEventListener=function(a,c,h,y){pp(this,a,c,h,y)};function ft(a,c){var h,y=a.F;if(y)for(h=[];y;y=y.F)h.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new me(c,a);else if(c instanceof me)c.target=c.target||a;else{var P=c;c=new me(y,a),A(c,P)}if(P=!0,h)for(var b=h.length-1;0<=b;b--){var $=c.g=h[b];P=oa($,y,!0,c)&&P}if($=c.g=a,P=oa($,y,!0,c)&&P,P=oa($,y,!1,c)&&P,h)for(b=0;b<h.length;b++)$=c.g=h[b],P=oa($,y,!1,c)&&P}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],y=0;y<h.length;y++)hn(h[y]);delete a.g[c],a.h--}}this.F=null},Ze.prototype.K=function(a,c,h,y){return this.i.add(String(a),c,!1,h,y)},Ze.prototype.L=function(a,c,h,y){return this.i.add(String(a),c,!0,h,y)};function oa(a,c,h,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,b=0;b<c.length;++b){var $=c[b];if($&&!$.da&&$.capture==h){var pe=$.listener,We=$.ha||$.src;$.fa&&us(a.i,$),P=pe.call(We,y)!==!1&&P}}return P&&!y.defaultPrevented}function yp(a,c,h){if(typeof a=="function")h&&(a=g(a,h));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function vp(a){a.g=yp(()=>{a.g=null,a.i&&(a.i=!1,vp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class tT extends ce{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:vp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mi(a){ce.call(this),this.h=a,this.g={}}I(mi,ce);var _p=[];function wp(a){F(a.g,function(c,h){this.g.hasOwnProperty(h)&&Qu(c)},a),a.g={}}mi.prototype.N=function(){mi.aa.N.call(this),wp(this)},mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ju=l.JSON.stringify,nT=l.JSON.parse,rT=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Zu(){}Zu.prototype.h=null;function Ep(a){return a.h||(a.h=a.i())}function Tp(){}var gi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ec(){me.call(this,"d")}I(ec,me);function tc(){me.call(this,"c")}I(tc,me);var Cr={},Ip=null;function aa(){return Ip=Ip||new Ze}Cr.La="serverreachability";function xp(a){me.call(this,Cr.La,a)}I(xp,me);function yi(a){const c=aa();ft(c,new xp(c))}Cr.STAT_EVENT="statevent";function Sp(a,c){me.call(this,Cr.STAT_EVENT,a),this.stat=c}I(Sp,me);function pt(a){const c=aa();ft(c,new Sp(c,a))}Cr.Ma="timingevent";function Ap(a,c){me.call(this,Cr.Ma,a),this.size=c}I(Ap,me);function vi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function _i(){this.g=!0}_i.prototype.xa=function(){this.g=!1};function sT(a,c,h,y,P,b){a.info(function(){if(a.g)if(b)for(var $="",pe=b.split("&"),We=0;We<pe.length;We++){var le=pe[We].split("=");if(1<le.length){var et=le[0];le=le[1];var tt=et.split("_");$=2<=tt.length&&tt[1]=="type"?$+(et+"="+le+"&"):$+(et+"=redacted&")}}else $=null;else $=b;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+c+`
`+h+`
`+$})}function iT(a,c,h,y,P,b,$){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+c+`
`+h+`
`+b+" "+$})}function cs(a,c,h,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+aT(a,h)+(y?" "+y:"")})}function oT(a,c){a.info(function(){return"TIMEOUT: "+c})}_i.prototype.info=function(){};function aT(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var y=h[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var b=P[0];if(b!="noop"&&b!="stop"&&b!="close")for(var $=1;$<P.length;$++)P[$]=""}}}}return Ju(h)}catch{return c}}var la={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Cp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},nc;function ua(){}I(ua,Zu),ua.prototype.g=function(){return new XMLHttpRequest},ua.prototype.i=function(){return{}},nc=new ua;function Vn(a,c,h,y){this.j=a,this.i=c,this.l=h,this.R=y||1,this.U=new mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Rp}function Rp(){this.i=null,this.g="",this.h=!1}var kp={},rc={};function sc(a,c,h){a.L=1,a.v=fa(fn(c)),a.m=h,a.P=!0,Np(a,null)}function Np(a,c){a.F=Date.now(),ca(a),a.A=fn(a.v);var h=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Hp(h.i,"t",y),a.C=0,h=a.j.J,a.h=new Rp,a.g=lm(a.j,h?c:null,!a.m),0<a.O&&(a.M=new tT(g(a.Y,a,a.g),a.O)),c=a.U,h=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(_p[0]=P.toString()),P=_p);for(var b=0;b<P.length;b++){var $=fp(h,P[b],y||c.handleEvent,!1,c.h||c);if(!$)break;c.g[$.key]=$}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),yi(),sT(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const c=this.M;c&&pn(a)==3?c.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const tt=pn(this.g);var c=this.g.Ba();const fs=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||Xp(this.g)))){this.J||tt!=4||c==7||(c==8||0>=fs?yi(3):yi(2)),ic(this);var h=this.g.Z();this.X=h;t:if(Pp(this)){var y=Xp(this.g);a="";var P=y.length,b=pn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Rr(this),wi(this);var $="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(b&&c==P-1)});y.length=0,this.h.g+=a,this.C=0,$=this.h.g}else $=this.g.oa();if(this.o=h==200,iT(this.i,this.u,this.A,this.l,this.R,tt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var pe,We=this.g;if((pe=We.g?We.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(pe)){var le=pe;break t}}le=null}if(h=le)cs(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,oc(this,h);else{this.o=!1,this.s=3,pt(12),Rr(this),wi(this);break e}}if(this.P){h=!0;let Bt;for(;!this.J&&this.C<$.length;)if(Bt=lT(this,$),Bt==rc){tt==4&&(this.s=4,pt(14),h=!1),cs(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==kp){this.s=4,pt(15),cs(this.i,this.l,$,"[Invalid Chunk]"),h=!1;break}else cs(this.i,this.l,Bt,null),oc(this,Bt);if(Pp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||$.length!=0||this.h.h||(this.s=1,pt(16),h=!1),this.o=this.o&&h,!h)cs(this.i,this.l,$,"[Invalid Chunked Response]"),Rr(this),wi(this);else if(0<$.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+$.length),hc(et),et.M=!0,pt(11))}}else cs(this.i,this.l,$,null),oc(this,$);tt==4&&Rr(this),this.o&&!this.J&&(tt==4?sm(this.j,this):(this.o=!1,ca(this)))}else ST(this.g),h==400&&0<$.indexOf("Unknown SID")?(this.s=3,pt(12)):(this.s=0,pt(13)),Rr(this),wi(this)}}}catch{}finally{}};function Pp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function lT(a,c){var h=a.C,y=c.indexOf(`
`,h);return y==-1?rc:(h=Number(c.substring(h,y)),isNaN(h)?kp:(y+=1,y+h>c.length?rc:(c=c.slice(y,y+h),a.C=y+h,c)))}Vn.prototype.cancel=function(){this.J=!0,Rr(this)};function ca(a){a.S=Date.now()+a.I,bp(a,a.I)}function bp(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=vi(g(a.ba,a),c)}function ic(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(oT(this.i,this.A),this.L!=2&&(yi(),pt(17)),Rr(this),this.s=2,wi(this)):bp(this,this.S-a)};function wi(a){a.j.G==0||a.J||sm(a.j,a)}function Rr(a){ic(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,wp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function oc(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||ac(h.h,a))){if(!a.K&&ac(h.h,a)&&h.G==3){try{var y=h.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)_a(h),ya(h);else break e;dc(h),pt(18)}}else h.za=P[1],0<h.za-h.T&&37500>P[2]&&h.F&&h.v==0&&!h.C&&(h.C=vi(g(h.Za,h),6e3));if(1>=Mp(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Nr(h,11)}else if((a.K||h.g==a)&&_a(h),!x(c))for(P=h.Da.g.parse(c),c=0;c<P.length;c++){let le=P[c];if(h.T=le[0],le=le[1],h.G==2)if(le[0]=="c"){h.K=le[1],h.ia=le[2];const et=le[3];et!=null&&(h.la=et,h.j.info("VER="+h.la));const tt=le[4];tt!=null&&(h.Aa=tt,h.j.info("SVER="+h.Aa));const fs=le[5];fs!=null&&typeof fs=="number"&&0<fs&&(y=1.5*fs,h.L=y,h.j.info("backChannelRequestTimeoutMs_="+y)),y=h;const Bt=a.g;if(Bt){const Ea=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ea){var b=y.h;b.g||Ea.indexOf("spdy")==-1&&Ea.indexOf("quic")==-1&&Ea.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(lc(b,b.h),b.h=null))}if(y.D){const fc=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;fc&&(y.ya=fc,ye(y.I,y.D,fc))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),y=h;var $=a;if(y.qa=am(y,y.J?y.ia:null,y.W),$.K){Lp(y.h,$);var pe=$,We=y.L;We&&(pe.I=We),pe.B&&(ic(pe),ca(pe)),y.g=$}else nm(y);0<h.i.length&&va(h)}else le[0]!="stop"&&le[0]!="close"||Nr(h,7);else h.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Nr(h,7):cc(h):le[0]!="noop"&&h.l&&h.l.ta(le),h.v=0)}}yi(4)}catch{}}var uT=class{constructor(a,c){this.g=a,this.map=c}};function Dp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Op(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Mp(a){return a.h?1:a.g?a.g.size:0}function ac(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function lc(a,c){a.g?a.g.add(c):a.h=c}function Lp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Dp.prototype.cancel=function(){if(this.i=Vp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Vp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return N(a.i)}function cT(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,y=0;y<h;y++)c.push(a[y]);return c}c=[],h=0;for(y in a)c[h++]=a[y];return c}function dT(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const y in a)c[h++]=y;return c}}}function jp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=dT(a),y=cT(a),P=y.length,b=0;b<P;b++)c.call(void 0,y[b],h&&h[b],a)}var Fp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function hT(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var y=a[h].indexOf("="),P=null;if(0<=y){var b=a[h].substring(0,y);P=a[h].substring(y+1)}else b=a[h];c(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,da(this,a.j),this.o=a.o,this.g=a.g,ha(this,a.s),this.l=a.l;var c=a.i,h=new Ii;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Up(this,h),this.m=a.m}else a&&(c=String(a).match(Fp))?(this.h=!1,da(this,c[1]||"",!0),this.o=Ei(c[2]||""),this.g=Ei(c[3]||"",!0),ha(this,c[4]),this.l=Ei(c[5]||"",!0),Up(this,c[6]||"",!0),this.m=Ei(c[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}kr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ti(c,zp,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ti(c,zp,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(Ti(h,h.charAt(0)=="/"?mT:pT,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",Ti(h,yT)),a.join("")};function fn(a){return new kr(a)}function da(a,c,h){a.j=h?Ei(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ha(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Up(a,c,h){c instanceof Ii?(a.i=c,vT(a.i,a.h)):(h||(c=Ti(c,gT)),a.i=new Ii(c,a.h))}function ye(a,c,h){a.i.set(c,h)}function fa(a){return ye(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ei(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ti(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,fT),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fT(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var zp=/[#\/\?@]/g,pT=/[#\?:]/g,mT=/[#\?]/g,gT=/[#\?@]/g,yT=/#/g;function Ii(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function jn(a){a.g||(a.g=new Map,a.h=0,a.i&&hT(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=Ii.prototype,t.add=function(a,c){jn(this),this.i=null,a=ds(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function $p(a,c){jn(a),c=ds(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Bp(a,c){return jn(a),c=ds(a,c),a.g.has(c)}t.forEach=function(a,c){jn(this),this.g.forEach(function(h,y){h.forEach(function(P){a.call(c,P,y,this)},this)},this)},t.na=function(){jn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let y=0;y<c.length;y++){const P=a[y];for(let b=0;b<P.length;b++)h.push(c[y])}return h},t.V=function(a){jn(this);let c=[];if(typeof a=="string")Bp(this,a)&&(c=c.concat(this.g.get(ds(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return jn(this),this.i=null,a=ds(this,a),Bp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Hp(a,c,h){$p(a,c),0<h.length&&(a.i=null,a.g.set(ds(a,c),N(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var y=c[h];const b=encodeURIComponent(String(y)),$=this.V(y);for(y=0;y<$.length;y++){var P=b;$[y]!==""&&(P+="="+encodeURIComponent(String($[y]))),a.push(P)}}return this.i=a.join("&")};function ds(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function vT(a,c){c&&!a.j&&(jn(a),a.i=null,a.g.forEach(function(h,y){var P=y.toLowerCase();y!=P&&($p(this,y),Hp(this,P,h))},a)),a.j=c}function _T(a,c){const h=new _i;if(l.Image){const y=new Image;y.onload=T(Fn,h,"TestLoadImage: loaded",!0,c,y),y.onerror=T(Fn,h,"TestLoadImage: error",!1,c,y),y.onabort=T(Fn,h,"TestLoadImage: abort",!1,c,y),y.ontimeout=T(Fn,h,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function wT(a,c){const h=new _i,y=new AbortController,P=setTimeout(()=>{y.abort(),Fn(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(b=>{clearTimeout(P),b.ok?Fn(h,"TestPingServer: ok",!0,c):Fn(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Fn(h,"TestPingServer: error",!1,c)})}function Fn(a,c,h,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(h)}catch{}}function ET(){this.g=new rT}function TT(a,c,h){const y=h||"";try{jp(a,function(P,b){let $=P;d(P)&&($=Ju(P)),c.push(y+b+"="+encodeURIComponent($))})}catch(P){throw c.push(y+"type="+encodeURIComponent("_badmap")),P}}function pa(a){this.l=a.Ub||null,this.j=a.eb||!1}I(pa,Zu),pa.prototype.g=function(){return new ma(this.l,this.j)},pa.prototype.i=function(a){return function(){return a}}({});function ma(a,c){Ze.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}I(ma,Ze),t=ma.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Si(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;qp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function qp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?xi(this):Si(this),this.readyState==3&&qp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,xi(this))},t.Qa=function(a){this.g&&(this.response=a,xi(this))},t.ga=function(){this.g&&xi(this)};function xi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Si(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function Si(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ma.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Wp(a){let c="";return F(a,function(h,y){c+=y,c+=":",c+=h,c+=`\r
`}),c}function uc(a,c,h){e:{for(y in h){var y=!1;break e}y=!0}y||(h=Wp(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):ye(a,c,h))}function Re(a){Ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}I(Re,Ze);var IT=/^https?$/i,xT=["POST","PUT"];t=Re.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():nc.g(),this.v=this.o?Ep(this.o):Ep(nc),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Gp(this,b);return}if(a=h||"",h=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)h.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())h.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(xT,c,void 0))||y||P||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,$]of h)this.g.setRequestHeader(b,$);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Yp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Gp(this,b)}};function Gp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Kp(a),ga(a)}function Kp(a){a.A||(a.A=!0,ft(a,"complete"),ft(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ft(this,"complete"),ft(this,"abort"),ga(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ga(this,!0)),Re.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Qp(this):this.bb())},t.bb=function(){Qp(this)};function Qp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||pn(a)!=4||a.Z()!=2)){if(a.u&&pn(a)==4)yp(a.Ea,0,a);else if(ft(a,"readystatechange"),pn(a)==4){a.h=!1;try{const $=a.Z();e:switch($){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var y;if(y=$===0){var P=String(a.D).match(Fp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!IT.test(P?P.toLowerCase():"")}h=y}if(h)ft(a,"complete"),ft(a,"success");else{a.m=6;try{var b=2<pn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",Kp(a)}}finally{ga(a)}}}}function ga(a,c){if(a.g){Yp(a);const h=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ft(a,"ready");try{h.onreadystatechange=y}catch{}}}function Yp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function pn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<pn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),nT(c)}};function Xp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function ST(a){const c={};a=(a.g&&2<=pn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(x(a[y]))continue;var h=S(a[y]);const P=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[P]||[];c[P]=b,b.push(h)}w(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ai(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function Jp(a){this.Aa=0,this.i=[],this.j=new _i,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ai("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ai("baseRetryDelayMs",5e3,a),this.cb=Ai("retryDelaySeedMs",1e4,a),this.Wa=Ai("forwardChannelMaxRetries",2,a),this.wa=Ai("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Dp(a&&a.concurrentRequestLimit),this.Da=new ET,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Jp.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,y){pt(0),this.W=a,this.H=c||{},h&&y!==void 0&&(this.H.OSID=h,this.H.OAID=y),this.F=this.X,this.I=am(this,null,this.W),va(this)};function cc(a){if(Zp(a),a.G==3){var c=a.U++,h=fn(a.I);if(ye(h,"SID",a.K),ye(h,"RID",c),ye(h,"TYPE","terminate"),Ci(a,h),c=new Vn(a,a.j,c),c.L=2,c.v=fa(fn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=lm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ca(c)}om(a)}function ya(a){a.g&&(hc(a),a.g.cancel(),a.g=null)}function Zp(a){ya(a),a.u&&(l.clearTimeout(a.u),a.u=null),_a(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function va(a){if(!Op(a.h)&&!a.s){a.s=!0;var c=a.Ga;H||G(),D||(H(),D=!0),z.add(c,a),a.B=0}}function AT(a,c){return Mp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=vi(g(a.Ga,a,c),im(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Vn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=v(b),A(b,this.S)):b=this.S),this.m!==null||this.O||(P.H=b,b=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var y=this.i[h];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=tm(this,P,c),h=fn(this.I),ye(h,"RID",a),ye(h,"CVER",22),this.D&&ye(h,"X-HTTP-Session-Id",this.D),Ci(this,h),b&&(this.O?c="headers="+encodeURIComponent(String(Wp(b)))+"&"+c:this.m&&uc(h,this.m,b)),lc(this.h,P),this.Ua&&ye(h,"TYPE","init"),this.P?(ye(h,"$req",c),ye(h,"SID","null"),P.T=!0,sc(P,h,null)):sc(P,h,c),this.G=2}}else this.G==3&&(a?em(this,a):this.i.length==0||Op(this.h)||em(this))};function em(a,c){var h;c?h=c.l:h=a.U++;const y=fn(a.I);ye(y,"SID",a.K),ye(y,"RID",h),ye(y,"AID",a.T),Ci(a,y),a.m&&a.o&&uc(y,a.m,a.o),h=new Vn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=tm(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),lc(a.h,h),sc(h,y,c)}function Ci(a,c){a.H&&F(a.H,function(h,y){ye(c,y,h)}),a.l&&jp({},function(h,y){ye(c,y,h)})}function tm(a,c,h){h=Math.min(a.i.length,h);var y=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let b=-1;for(;;){const $=["count="+h];b==-1?0<h?(b=P[0].g,$.push("ofs="+b)):b=0:$.push("ofs="+b);let pe=!0;for(let We=0;We<h;We++){let le=P[We].g;const et=P[We].map;if(le-=b,0>le)b=Math.max(0,P[We].g-100),pe=!1;else try{TT(et,$,"req"+le+"_")}catch{y&&y(et)}}if(pe){y=$.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,y}function nm(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;H||G(),D||(H(),D=!0),z.add(c,a),a.v=0}}function dc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=vi(g(a.Fa,a),im(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,rm(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=vi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,pt(10),ya(this),rm(this))};function hc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function rm(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=fn(a.qa);ye(c,"RID","rpc"),ye(c,"SID",a.K),ye(c,"AID",a.T),ye(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ye(c,"TO",a.ja),ye(c,"TYPE","xmlhttp"),Ci(a,c),a.m&&a.o&&uc(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=fa(fn(c)),h.m=null,h.P=!0,Np(h,a)}t.Za=function(){this.C!=null&&(this.C=null,ya(this),dc(this),pt(19))};function _a(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function sm(a,c){var h=null;if(a.g==c){_a(a),hc(a),a.g=null;var y=2}else if(ac(a.h,c))h=c.D,Lp(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;y=aa(),ft(y,new Ap(y,h)),va(a)}else nm(a);else if(P=c.s,P==3||P==0&&0<c.X||!(y==1&&AT(a,c)||y==2&&dc(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),P){case 1:Nr(a,5);break;case 4:Nr(a,10);break;case 3:Nr(a,6);break;default:Nr(a,2)}}}function im(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function Nr(a,c){if(a.j.info("Error code "+c),c==2){var h=g(a.fb,a),y=a.Xa;const P=!y;y=new kr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||da(y,"https"),fa(y),P?_T(y.toString(),h):wT(y.toString(),h)}else pt(2);a.G=0,a.l&&a.l.sa(c),om(a),Zp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),pt(2)):(this.j.info("Failed to ping google.com"),pt(1))};function om(a){if(a.G=0,a.ka=[],a.l){const c=Vp(a.h);(c.length!=0||a.i.length!=0)&&(M(a.ka,c),M(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function am(a,c,h){var y=h instanceof kr?fn(h):new kr(h);if(y.g!="")c&&(y.g=c+"."+y.g),ha(y,y.s);else{var P=l.location;y=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var b=new kr(null);y&&da(b,y),c&&(b.g=c),P&&ha(b,P),h&&(b.l=h),y=b}return h=a.D,c=a.ya,h&&c&&ye(y,h,c),ye(y,"VER",a.la),Ci(a,y),y}function lm(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Re(new pa({eb:h})):new Re(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function um(){}t=um.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function wa(){}wa.prototype.g=function(a,c){return new Ct(a,c)};function Ct(a,c){Ze.call(this),this.g=new Jp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!x(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!x(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new hs(this)}I(Ct,Ze),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){cc(this.g)},Ct.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Ju(a),a=h);c.i.push(new uT(c.Ya++,a)),c.G==3&&va(c)},Ct.prototype.N=function(){this.g.l=null,delete this.j,cc(this.g),delete this.g,Ct.aa.N.call(this)};function cm(a){ec.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}I(cm,ec);function dm(){tc.call(this),this.status=1}I(dm,tc);function hs(a){this.g=a}I(hs,um),hs.prototype.ua=function(){ft(this.g,"a")},hs.prototype.ta=function(a){ft(this.g,new cm(a))},hs.prototype.sa=function(a){ft(this.g,new dm)},hs.prototype.ra=function(){ft(this.g,"b")},wa.prototype.createWebChannel=wa.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,fw=function(){return new wa},hw=function(){return aa()},dw=Cr,Jd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},la.NO_ERROR=0,la.TIMEOUT=8,la.HTTP_ERROR=6,ll=la,Cp.COMPLETE="complete",cw=Cp,Tp.EventType=gi,gi.OPEN="a",gi.CLOSE="b",gi.ERROR="c",gi.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,Bi=Tp,Re.prototype.listenOnce=Re.prototype.L,Re.prototype.getLastError=Re.prototype.Ka,Re.prototype.getLastErrorCode=Re.prototype.Ba,Re.prototype.getStatus=Re.prototype.Z,Re.prototype.getResponseJson=Re.prototype.Oa,Re.prototype.getResponseText=Re.prototype.oa,Re.prototype.send=Re.prototype.ea,Re.prototype.setWithCredentials=Re.prototype.Ha,uw=Re}).apply(typeof Ua<"u"?Ua:typeof self<"u"?self:typeof window<"u"?window:{});const Jg="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let di="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new gf("@firebase/firestore");function Li(){return Xr.logLevel}function K(t,...e){if(Xr.logLevel<=ie.DEBUG){const n=e.map(Rf);Xr.debug(`Firestore (${di}): ${t}`,...n)}}function bn(t,...e){if(Xr.logLevel<=ie.ERROR){const n=e.map(Rf);Xr.error(`Firestore (${di}): ${t}`,...n)}}function Jr(t,...e){if(Xr.logLevel<=ie.WARN){const n=e.map(Rf);Xr.warn(`Firestore (${di}): ${t}`,...n)}}function Rf(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${di}) INTERNAL ASSERTION FAILED: `+t;throw bn(e),new Error(e)}function he(t,e){t||J()}function ee(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends Ln{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class mw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class KC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class QC{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Br,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new pw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new it(e)}}class YC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class XC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new YC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ZC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){he(this.o===void 0);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,K("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new JC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=eR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Zs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Z(e)}static min(){return new Z(new Le(0,0))}static max(){return new Z(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ko.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ko?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class _e extends ko{construct(e,n,r){return new _e(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new _e(n)}static emptyPath(){return new _e([])}}const tR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends ko{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return tR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new W(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(_e.fromString(e))}static fromName(e){return new Q(_e.fromString(e).popFirst(5))}static empty(){return new Q(_e.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_e.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return _e.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new _e(e.slice()))}}function nR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Z.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new gr(s,Q.empty(),e)}function rR(t){return new gr(t.readTime,t.key,-1)}class gr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new gr(Z.min(),Q.empty(),-1)}static max(){return new gr(Z.max(),Q.empty(),-1)}}function sR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class oR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==iR)throw t;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(s=>s?V.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new V((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new V((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function aR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qo(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Nf.oe=-1;function xu(t){return t==null}function Gl(t){return t===0&&1/t==-1/0}function lR(t){return typeof t=="number"&&Number.isInteger(t)&&!Gl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function os(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function gw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||Ke.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ke.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}}class za{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ke{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ke.RED,this.left=s??Ke.EMPTY,this.right=i??Ke.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ke(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ke.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ke.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ke.EMPTY=null,Ke.RED=!0,Ke.BLACK=!1;Ke.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ke(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ey(this.data.getIterator())}getIteratorFrom(e){return new ey(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class ey{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Ye(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Zs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new yw("Invalid base64 string: "+i):i}}(e);return new qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qe.EMPTY_BYTE_STRING=new qe("");const uR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function yr(t){if(he(!!t),typeof t=="string"){let e=0;const n=uR.exec(t);if(he(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Zr(t){return typeof t=="string"?qe.fromBase64String(t):qe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function bf(t){const e=t.mapValue.fields.__previous_value__;return Pf(e)?bf(e):e}function No(t){const e=yr(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n,r,s,i,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class ei{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ei("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ei&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $a={mapValue:{}};function es(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Pf(t)?4:hR(t)?9007199254740991:dR(t)?10:11:J()}function dn(t,e){if(t===e)return!0;const n=es(t);if(n!==es(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return No(t).isEqual(No(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=yr(s.timestampValue),l=yr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Zr(s.bytesValue).isEqual(Zr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Pe(s.doubleValue),l=Pe(i.doubleValue);return o===l?Gl(o)===Gl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Zs(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Zg(o)!==Zg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!dn(o[u],l[u])))return!1;return!0}(t,e);default:return J()}}function Po(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function ti(t,e){if(t===e)return 0;const n=es(t),r=es(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Pe(i.integerValue||i.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return ty(t.timestampValue,e.timestampValue);case 4:return ty(No(t),No(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Zr(i),u=Zr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=ue(l[d],u[d]);if(p!==0)return p}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(Pe(i.latitude),Pe(o.latitude));return l!==0?l:ue(Pe(i.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return ny(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,p;const m=i.fields||{},g=o.fields||{},T=(l=m.value)===null||l===void 0?void 0:l.arrayValue,I=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=ue(((d=T==null?void 0:T.values)===null||d===void 0?void 0:d.length)||0,((p=I==null?void 0:I.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:ny(T,I)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===$a.mapValue&&o===$a.mapValue)return 0;if(i===$a.mapValue)return 1;if(o===$a.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=ue(u[m],p[m]);if(g!==0)return g;const T=ti(l[u[m]],d[p[m]]);if(T!==0)return T}return ue(u.length,p.length)}(t.mapValue,e.mapValue);default:throw J()}}function ty(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=yr(t),r=yr(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function ny(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ti(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function ni(t){return Zd(t)}function Zd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=yr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Zr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Zd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Zd(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function ry(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function eh(t){return!!t&&"integerValue"in t}function Df(t){return!!t&&"arrayValue"in t}function sy(t){return!!t&&"nullValue"in t}function iy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ul(t){return!!t&&"mapValue"in t}function dR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function no(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return os(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=Be.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=no(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ul(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){os(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(no(this.value))}}function vw(t){const e=[];return os(t.fields,(n,r)=>{const s=new Be([n]);if(ul(r)){const i=vw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,Z.min(),Z.min(),Z.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,Z.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,Z.min(),Z.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,Z.min(),Z.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e,n){this.position=e,this.inclusive=n}}function oy(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=ti(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function ay(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bo{constructor(e,n="asc"){this.field=e,this.dir=n}}function fR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _w=class{};class Me extends _w{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mR(e,n,r):n==="array-contains"?new vR(e,r):n==="in"?new _R(e,r):n==="not-in"?new wR(e,r):n==="array-contains-any"?new ER(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new gR(e,r):new yR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ti(n,this.value)):n!==null&&es(this.value)===es(n)&&this.matchesComparison(ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Zt extends _w{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Zt(e,n)}matches(e){return ww(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ww(t){return t.op==="and"}function Ew(t){return pR(t)&&ww(t)}function pR(t){for(const e of t.filters)if(e instanceof Zt)return!1;return!0}function th(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+ni(t.value);if(Ew(t))return t.filters.map(e=>th(e)).join(",");{const e=t.filters.map(n=>th(n)).join(",");return`${t.op}(${e})`}}function Tw(t,e){return t instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&dn(r.value,s.value)}(t,e):t instanceof Zt?function(r,s){return s instanceof Zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&Tw(o,s.filters[l]),!0):!1}(t,e):void J()}function Iw(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${ni(n.value)}`}(t):t instanceof Zt?function(n){return n.op.toString()+" {"+n.getFilters().map(Iw).join(" ,")+"}"}(t):"Filter"}class mR extends Me{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class gR extends Me{constructor(e,n){super(e,"in",n),this.keys=xw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yR extends Me{constructor(e,n){super(e,"not-in",n),this.keys=xw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function xw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class vR extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Df(n)&&Po(n.arrayValue,this.value)}}class _R extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Po(this.value.arrayValue,n)}}class wR extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Po(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Po(this.value.arrayValue,n)}}class ER extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Df(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Po(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function ly(t,e=null,n=[],r=[],s=null,i=null,o=null){return new TR(t,e,n,r,s,i,o)}function Of(t){const e=ee(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>th(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ni(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ni(r)).join(",")),e.ue=n}return e.ue}function Mf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!fR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ay(t.startAt,e.startAt)&&ay(t.endAt,e.endAt)}function nh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function IR(t,e,n,r,s,i,o,l){return new hi(t,e,n,r,s,i,o,l)}function Lf(t){return new hi(t)}function uy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Sw(t){return t.collectionGroup!==null}function ro(t){const e=ee(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ye(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new bo(i,r))}),n.has(Be.keyField().canonicalString())||e.ce.push(new bo(Be.keyField(),r))}return e.ce}function un(t){const e=ee(t);return e.le||(e.le=xR(e,ro(t))),e.le}function xR(t,e){if(t.limitType==="F")return ly(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new bo(s.field,i)});const n=t.endAt?new Kl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Kl(t.startAt.position,t.startAt.inclusive):null;return ly(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function rh(t,e){const n=t.filters.concat([e]);return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function sh(t,e,n){return new hi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Su(t,e){return Mf(un(t),un(e))&&t.limitType===e.limitType}function Aw(t){return`${Of(un(t))}|lt:${t.limitType}`}function gs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Iw(s)).join(", ")}]`),xu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>ni(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>ni(s)).join(",")),`Target(${r})`}(un(t))}; limitType=${t.limitType})`}function Au(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Q.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=oy(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,ro(r),s)||r.endAt&&!function(o,l,u){const d=oy(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,ro(r),s))}(t,e)}function SR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Cw(t){return(e,n)=>{let r=!1;for(const s of ro(t)){const i=AR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function AR(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?ti(u,d):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){os(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return gw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR=new Ae(Q.comparator);function Dn(){return CR}const Rw=new Ae(Q.comparator);function Hi(...t){let e=Rw;for(const n of t)e=e.insert(n.key,n);return e}function kw(t){let e=Rw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Fr(){return so()}function Nw(){return so()}function so(){return new fi(t=>t.toString(),(t,e)=>t.isEqual(e))}const RR=new Ae(Q.comparator),kR=new Ye(Q.comparator);function se(...t){let e=kR;for(const n of t)e=e.add(n);return e}const NR=new Ye(ue);function PR(){return NR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Gl(e)?"-0":e}}function Pw(t){return{integerValue:""+t}}function bR(t,e){return lR(e)?Pw(e):Vf(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(){this._=void 0}}function DR(t,e,n){return t instanceof Do?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Pf(i)&&(i=bf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Oo?Dw(t,e):t instanceof Mo?Ow(t,e):function(s,i){const o=bw(s,i),l=cy(o)+cy(s.Pe);return eh(o)&&eh(s.Pe)?Pw(l):Vf(s.serializer,l)}(t,e)}function OR(t,e,n){return t instanceof Oo?Dw(t,e):t instanceof Mo?Ow(t,e):n}function bw(t,e){return t instanceof Ql?function(r){return eh(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Do extends Cu{}class Oo extends Cu{constructor(e){super(),this.elements=e}}function Dw(t,e){const n=Mw(e);for(const r of t.elements)n.some(s=>dn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Mo extends Cu{constructor(e){super(),this.elements=e}}function Ow(t,e){let n=Mw(e);for(const r of t.elements)n=n.filter(s=>!dn(s,r));return{arrayValue:{values:n}}}class Ql extends Cu{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function cy(t){return Pe(t.integerValue||t.doubleValue)}function Mw(t){return Df(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MR{constructor(e,n){this.field=e,this.transform=n}}function LR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Oo&&s instanceof Oo||r instanceof Mo&&s instanceof Mo?Zs(r.elements,s.elements,dn):r instanceof Ql&&s instanceof Ql?dn(r.Pe,s.Pe):r instanceof Do&&s instanceof Do}(t.transform,e.transform)}class VR{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ru{}function Lw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new jf(t.key,Ut.none()):new Yo(t.key,t.data,Ut.none());{const n=t.data,r=Tt.empty();let s=new Ye(Be.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new xr(t.key,r,new Nt(s.toArray()),Ut.none())}}function jR(t,e,n){t instanceof Yo?function(s,i,o){const l=s.value.clone(),u=hy(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof xr?function(s,i,o){if(!cl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=hy(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Vw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof Yo?function(i,o,l,u){if(!cl(i.precondition,o))return l;const d=i.value.clone(),p=fy(i.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof xr?function(i,o,l,u){if(!cl(i.precondition,o))return l;const d=fy(i.fieldTransforms,u,o),p=o.data;return p.setAll(Vw(i)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return cl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function FR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=bw(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function dy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Zs(r,s,(i,o)=>LR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Yo extends Ru{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class xr extends Ru{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Vw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hy(t,e,n){const r=new Map;he(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,OR(o,l,n[s]))}return r}function fy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,DR(i,o,e))}return r}class jf extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class UR extends Ru{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Nw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Lw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(Z.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Zs(this.mutations,e.mutations,(n,r)=>dy(n,r))&&Zs(this.baseMutations,e.baseMutations,(n,r)=>dy(n,r))}}class Ff{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){he(e.mutations.length===r.length);let s=function(){return RR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ff(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var De,oe;function HR(t){switch(t){default:return J();case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0}}function jw(t){if(t===void 0)return bn("GRPC error has no .code"),L.UNKNOWN;switch(t){case De.OK:return L.OK;case De.CANCELLED:return L.CANCELLED;case De.UNKNOWN:return L.UNKNOWN;case De.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case De.INTERNAL:return L.INTERNAL;case De.UNAVAILABLE:return L.UNAVAILABLE;case De.UNAUTHENTICATED:return L.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case De.NOT_FOUND:return L.NOT_FOUND;case De.ALREADY_EXISTS:return L.ALREADY_EXISTS;case De.PERMISSION_DENIED:return L.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case De.ABORTED:return L.ABORTED;case De.OUT_OF_RANGE:return L.OUT_OF_RANGE;case De.UNIMPLEMENTED:return L.UNIMPLEMENTED;case De.DATA_LOSS:return L.DATA_LOSS;default:return J()}}(oe=De||(De={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qR(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WR=new $r([4294967295,4294967295],0);function py(t){const e=qR().encode(t),n=new lw;return n.update(e),new Uint8Array(n.digest())}function my(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $r([n,r],0),new $r([s,i],0)]}class Uf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qi(`Invalid padding: ${n}`);if(r<0)throw new qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=$r.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply($r.fromNumber(r)));return s.compare(WR)===1&&(s=new $r([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=py(e),[r,s]=my(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Uf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=py(e),[r,s]=my(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Xo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ku(Z.min(),s,new Ae(ue),Dn(),se())}}class Xo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Xo(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Fw{constructor(e,n){this.targetId=e,this.me=n}}class Uw{constructor(e,n,r=qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class gy{constructor(){this.fe=0,this.ge=vy(),this.pe=qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new Xo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=vy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class GR{constructor(e){this.Le=e,this.Be=new Map,this.ke=Dn(),this.qe=yy(),this.Qe=new Ae(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(nh(i))if(r===0){const o=new Q(i.path);this.Ue(n,o,at.newNoDocument(o,Z.min()))}else he(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Zr(r).toUint8Array()}catch(u){if(u instanceof yw)return Jr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Uf(o,s,i)}catch(u){return Jr(u instanceof qi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&nh(l.target)){const u=new Q(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,at.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=se();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new ku(e,n,this.Qe,this.ke,r);return this.ke=Dn(),this.qe=yy(),this.Qe=new Ae(ue),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new gy,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Ye(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||K("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new gy),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function yy(){return new Ae(Q.comparator)}function vy(){return new Ae(Q.comparator)}const KR={asc:"ASCENDING",desc:"DESCENDING"},QR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YR={and:"AND",or:"OR"};class XR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ih(t,e){return t.useProto3Json||xu(e)?e:{value:e}}function Yl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JR(t,e){return Yl(t,e.toTimestamp())}function cn(t){return he(!!t),Z.fromTimestamp(function(n){const r=yr(n);return new Le(r.seconds,r.nanos)}(t))}function zf(t,e){return oh(t,e).canonicalString()}function oh(t,e){const n=function(s){return new _e(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $w(t){const e=_e.fromString(t);return he(Gw(e)),e}function ah(t,e){return zf(t.databaseId,e.path)}function Gc(t,e){const n=$w(e);if(n.get(1)!==t.databaseId.projectId)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(L.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(Hw(n))}function Bw(t,e){return zf(t.databaseId,e)}function ZR(t){const e=$w(t);return e.length===4?_e.emptyPath():Hw(e)}function lh(t){return new _e(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Hw(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function _y(t,e,n){return{name:ah(t,e),fields:n.value.mapValue.fields}}function ek(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(he(p===void 0||typeof p=="string"),qe.fromBase64String(p||"")):(he(p===void 0||p instanceof Buffer||p instanceof Uint8Array),qe.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?L.UNKNOWN:jw(d.code);return new W(p,d.message||"")}(o);n=new Uw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Gc(t,r.document.name),i=cn(r.document.updateTime),o=r.document.createTime?cn(r.document.createTime):Z.min(),l=new Tt({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(s,i,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new dl(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Gc(t,r.document),i=r.readTime?cn(r.readTime):Z.min(),o=at.newNoDocument(s,i),l=r.removedTargetIds||[];n=new dl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Gc(t,r.document),i=r.removedTargetIds||[];n=new dl([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new BR(s,i),l=r.targetId;n=new Fw(l,o)}}return n}function tk(t,e){let n;if(e instanceof Yo)n={update:_y(t,e.key,e.value)};else if(e instanceof jf)n={delete:ah(t,e.key)};else if(e instanceof xr)n={update:_y(t,e.key,e.data),updateMask:ck(e.fieldMask)};else{if(!(e instanceof UR))return J();n={verify:ah(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof Do)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Mo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Ql)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:JR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function nk(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?cn(s.updateTime):cn(i);return o.isEqual(Z.min())&&(o=cn(i)),new VR(o,s.transformResults||[])}(n,e))):[]}function rk(t,e){return{documents:[Bw(t,e.path)]}}function sk(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Bw(t,s);const i=function(d){if(d.length!==0)return Ww(Zt.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(p=>function(g){return{field:ys(g.field),direction:ak(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=ih(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function ik(t){let e=ZR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){he(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=qw(m);return g instanceof Zt&&Ew(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(I){return new bo(vs(I.field),function(M){switch(M){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,xu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,T=m.values||[];return new Kl(T,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,T=m.values||[];return new Kl(T,g)}(n.endAt)),IR(e,s,o,i,l,"F",u,d)}function ok(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function qw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=vs(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=vs(n.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=vs(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vs(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(vs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Zt.create(n.compositeFilter.filters.map(r=>qw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function ak(t){return KR[t]}function lk(t){return QR[t]}function uk(t){return YR[t]}function ys(t){return{fieldPath:t.canonicalString()}}function vs(t){return Be.fromServerFormat(t.fieldPath)}function Ww(t){return t instanceof Me?function(n){if(n.op==="=="){if(iy(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NAN"}};if(sy(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(iy(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NAN"}};if(sy(n.value))return{unaryFilter:{field:ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ys(n.field),op:lk(n.op),value:n.value}}}(t):t instanceof Zt?function(n){const r=n.getFilters().map(s=>Ww(s));return r.length===1?r[0]:{compositeFilter:{op:uk(n.op),filters:r}}}(t):J()}function ck(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e,n,r,s,i=Z.min(),o=Z.min(),l=qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e){this.ct=e}}function hk(t){const e=ik({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(){this.un=new pk}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(gr.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(gr.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class pk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(_e.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(_e.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ri(0)}static kn(){return new ri(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(){this.changes=new fi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&io(r.mutation,s,Nt.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=Fr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Fr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Dn();const o=so(),l=function(){return so()}();return n.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof xr)?i=i.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),io(p.mutation,d,p.mutation.getFieldMask(),Le.now())):o.set(d.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var m;return l.set(d,new gk(p,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=so();let s=new Ae((o,l)=>o-l),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||Nt.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(s.get(l.batchId)||se()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=Nw();p.forEach(g=>{if(!i.has(g)){const T=Lw(n.get(g),r.get(g));T!==null&&m.set(g,T),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return V.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Sw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):V.resolve(Fr());let l=-1,u=i;return o.next(d=>V.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?V.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,se())).next(p=>({batchId:l,changes:kw(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let s=Hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Hi();return this.indexManager.getCollectionParents(e,i).next(l=>V.forEach(l,u=>{const d=function(m,g){return new hi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,at.newInvalidDocument(p)))});let l=Hi();return o.forEach((u,d)=>{const p=i.get(u);p!==void 0&&io(p.mutation,d,Nt.empty(),Le.now()),Au(n,d)&&(l=l.insert(u,d))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:cn(s.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:hk(s.bundledQuery),readTime:cn(s.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(){this.overlays=new Ae(Q.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Fr();return V.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const s=Fr(),i=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ae((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Fr(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Fr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return V.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new $R(n,r));let i=this.Ir.get(n);i===void 0&&(i=se(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(){this.sessionToken=qe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(){this.Tr=new Ye(ze.Er),this.dr=new Ye(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new _e([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new _e([])),r=new ze(n,e),s=new ze(n,e+1);let i=se();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Ye(ze.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zR(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(o)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(ue);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;Q.isDocumentKey(i)||(i=i.child(""));const o=new ze(new Q(i),0);let l=new Ye(ue);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},o),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){he(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tk{constructor(e){this.Mr=e,this.docs=function(){return new Ae(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Dn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Dn();const o=n.path,l=new Q(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||sR(rR(p),r)<=0||(s.has(p.key)||Au(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Ik(this)}getSize(e){return V.resolve(this.size)}}class Ik extends mk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this.persistence=e,this.Nr=new fi(n=>Of(n),Mf),this.lastRemoteSnapshotVersion=Z.min(),this.highestTargetId=0,this.Lr=0,this.Br=new $f,this.targetCount=0,this.kr=ri.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ri(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Nf(0),this.Kr=!1,this.Kr=!0,this.$r=new wk,this.referenceDelegate=e(this),this.Ur=new xk(this),this.indexManager=new fk,this.remoteDocumentCache=function(s){return new Tk(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new dk(n),this.Gr=new vk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new _k,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Ek(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){K("MemoryPersistence","Starting transaction:",e);const s=new Ak(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class Ak extends oR{constructor(e){super(),this.currentSequenceNumber=e}}class Bf{constructor(e){this.persistence=e,this.Jr=new $f,this.Yr=null}static Zr(e){return new Bf(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const s=Q.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,Z.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Hf(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ck{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rk{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return yx()?8:aR(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new Ck;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Li()<=ie.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",gs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(Li()<=ie.DEBUG&&K("QueryEngine","Query:",gs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Li()<=ie.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",gs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,un(n))):V.resolve())}Yi(e,n){if(uy(n))return V.resolve(null);let r=un(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=sh(n,null,"F"),r=un(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,sh(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return uy(n)||s.isEqual(Z.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?V.resolve(null):(Li()<=ie.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),gs(n)),this.rs(e,o,n,nR(s,-1)).next(l=>l))})}ts(e,n){let r=new Ye(Cw(e));return n.forEach((s,i)=>{Au(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Li()<=ie.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",gs(n)),this.Ji.getDocumentsMatchingQuery(e,n,gr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ae(ue),this._s=new fi(i=>Of(i),Mf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new yk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function Nk(t,e,n,r){return new kk(t,e,n,r)}async function Kw(t,e){const n=ee(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=se();for(const d of s){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function Pk(t,e){const n=ee(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,g=m.keys();let T=V.resolve();return g.forEach(I=>{T=T.next(()=>p.getEntry(u,I)).next(N=>{const M=d.docVersions.get(I);he(M!==null),N.version.compareTo(M)<0&&(m.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),T.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=se();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Qw(t){const e=ee(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function bk(t,e){const n=ee(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let T=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?T=T.withResumeToken(qe.EMPTY_BYTE_STRING,Z.min()).withLastLimboFreeSnapshotVersion(Z.min()):p.resumeToken.approximateByteSize()>0&&(T=T.withResumeToken(p.resumeToken,r)),s=s.insert(m,T),function(N,M,_){return N.resumeToken.approximateByteSize()===0||M.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:_.addedDocuments.size+_.modifiedDocuments.size+_.removedDocuments.size>0}(g,T,p)&&l.push(n.Ur.updateTargetData(i,T))});let u=Dn(),d=se();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(Dk(i,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(Z.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return V.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function Dk(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Dn();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(Z.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):K("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function Ok(t,e){const n=ee(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function Mk(t,e){const n=ee(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function uh(t,e,n){const r=ee(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Qo(o))throw o;K("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function wy(t,e,n){const r=ee(t);let s=Z.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const m=ee(u),g=m._s.get(p);return g!==void 0?V.resolve(m.os.get(g)):m.Ur.getTargetData(d,p)}(r,o,un(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:Z.min(),n?i:se())).next(l=>(Lk(r,SR(e),l),{documents:l,Ts:i})))}function Lk(t,e,n){let r=t.us.get(e)||Z.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class Ey{constructor(){this.activeTargetIds=PR()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vk{constructor(){this.so=new Ey,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Ey,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ty{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){K("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){K("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ba=null;function Kc(){return Ba===null?Ba=function(){return 268435456+Math.round(2147483648*Math.random())}():Ba++,"0x"+Ba.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fk={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uk{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const st="WebChannelConnection";class zk extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Kc(),u=this.xo(n,r.toUriEncodedString());K("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(p=>(K("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw Jr("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+di}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=Fk[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Kc();return new Promise((o,l)=>{const u=new uw;u.setWithCredentials(!0),u.listenOnce(cw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ll.NO_ERROR:const p=u.getResponseJson();K(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case ll.TIMEOUT:K(st,`RPC '${e}' ${i} timed out`),l(new W(L.DEADLINE_EXCEEDED,"Request time out"));break;case ll.HTTP_ERROR:const m=u.getStatus();if(K(st,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const T=g==null?void 0:g.error;if(T&&T.status&&T.message){const I=function(M){const _=M.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(_)>=0?_:L.UNKNOWN}(T.status);l(new W(I,T.message))}else l(new W(L.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(L.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{K(st,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);K(st,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=Kc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fw(),l=hw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");K(st,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,T=!1;const I=new Uk({Io:M=>{T?K(st,`Not sending because RPC '${e}' stream ${s} is closed:`,M):(g||(K(st,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),K(st,`RPC '${e}' stream ${s} sending:`,M),m.send(M))},To:()=>m.close()}),N=(M,_,x)=>{M.listen(_,R=>{try{x(R)}catch(O){setTimeout(()=>{throw O},0)}})};return N(m,Bi.EventType.OPEN,()=>{T||(K(st,`RPC '${e}' stream ${s} transport opened.`),I.yo())}),N(m,Bi.EventType.CLOSE,()=>{T||(T=!0,K(st,`RPC '${e}' stream ${s} transport closed`),I.So())}),N(m,Bi.EventType.ERROR,M=>{T||(T=!0,Jr(st,`RPC '${e}' stream ${s} transport errored:`,M),I.So(new W(L.UNAVAILABLE,"The operation could not be completed")))}),N(m,Bi.EventType.MESSAGE,M=>{var _;if(!T){const x=M.data[0];he(!!x);const R=x,O=R.error||((_=R[0])===null||_===void 0?void 0:_.error);if(O){K(st,`RPC '${e}' stream ${s} received error:`,O);const U=O.status;let F=function(E){const A=De[E];if(A!==void 0)return jw(A)}(U),w=O.message;F===void 0&&(F=L.INTERNAL,w="Unknown error status: "+U+" with message "+O.message),T=!0,I.So(new W(F,w)),m.close()}else K(st,`RPC '${e}' stream ${s} received:`,x),I.bo(x)}}),N(l,dw.STAT_EVENT,M=>{M.stat===Jd.PROXY?K(st,`RPC '${e}' stream ${s} detected buffering proxy`):M.stat===Jd.NOPROXY&&K(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{I.wo()},0),I}}function Qc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nu(t){return new XR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Yw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(bn(n.toString()),bn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new W(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return K("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(K("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class $k extends Xw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=ek(this.serializer,e),r=function(i){if(!("targetChange"in i))return Z.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?Z.min():o.readTime?cn(o.readTime):Z.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=lh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=nh(u)?{documents:rk(i,u)}:{query:sk(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=zw(i,o.resumeToken);const d=ih(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(Z.min())>0){l.readTime=Yl(i,o.snapshotVersion.toTimestamp());const d=ih(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=ok(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=lh(this.serializer),n.removeTarget=e,this.a_(n)}}class Bk extends Xw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=nk(e.writeResults,e.commitTime),r=cn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=lh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>tk(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,oh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(L.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,oh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(L.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class qk{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(bn(n),this.D_=!1):K("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{as(this)&&(K("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ee(u);d.L_.add(4),await Jo(d),d.q_.set("Unknown"),d.L_.delete(4),await Pu(d)}(this))})}),this.q_=new qk(r,s)}}async function Pu(t){if(as(t))for(const e of t.B_)await e(!0)}async function Jo(t){for(const e of t.B_)await e(!1)}function Jw(t,e){const n=ee(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Kf(n)?Gf(n):pi(n).r_()&&Wf(n,e))}function qf(t,e){const n=ee(t),r=pi(n);n.N_.delete(e),r.r_()&&Zw(n,e),n.N_.size===0&&(r.r_()?r.o_():as(n)&&n.q_.set("Unknown"))}function Wf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Z.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}pi(t).A_(e)}function Zw(t,e){t.Q_.xe(e),pi(t).R_(e)}function Gf(t){t.Q_=new GR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),pi(t).start(),t.q_.v_()}function Kf(t){return as(t)&&!pi(t).n_()&&t.N_.size>0}function as(t){return ee(t).L_.size===0}function eE(t){t.Q_=void 0}async function Gk(t){t.q_.set("Online")}async function Kk(t){t.N_.forEach((e,n)=>{Wf(t,e)})}async function Qk(t,e){eE(t),Kf(t)?(t.q_.M_(e),Gf(t)):t.q_.set("Unknown")}async function Yk(t,e,n){if(t.q_.set("Online"),e instanceof Uw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){K("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Xl(t,r)}else if(e instanceof dl?t.Q_.Ke(e):e instanceof Fw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(Z.min()))try{const r=await Qw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(qe.EMPTY_BYTE_STRING,p.snapshotVersion)),Zw(i,u);const m=new er(p.target,u,d,p.sequenceNumber);Wf(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){K("RemoteStore","Failed to raise snapshot:",r),await Xl(t,r)}}async function Xl(t,e,n){if(!Qo(e))throw e;t.L_.add(1),await Jo(t),t.q_.set("Offline"),n||(n=()=>Qw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{K("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Pu(t)})}function tE(t,e){return e().catch(n=>Xl(t,n,e))}async function bu(t){const e=ee(t),n=vr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;Xk(e);)try{const s=await Ok(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,Jk(e,s)}catch(s){await Xl(e,s)}nE(e)&&rE(e)}function Xk(t){return as(t)&&t.O_.length<10}function Jk(t,e){t.O_.push(e);const n=vr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function nE(t){return as(t)&&!vr(t).n_()&&t.O_.length>0}function rE(t){vr(t).start()}async function Zk(t){vr(t).p_()}async function e2(t){const e=vr(t);for(const n of t.O_)e.m_(n.mutations)}async function t2(t,e,n){const r=t.O_.shift(),s=Ff.from(r,e,n);await tE(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await bu(t)}async function n2(t,e){e&&vr(t).V_&&await async function(r,s){if(function(o){return HR(o)&&o!==L.ABORTED}(s.code)){const i=r.O_.shift();vr(r).s_(),await tE(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await bu(r)}}(t,e),nE(t)&&rE(t)}async function Iy(t,e){const n=ee(t);n.asyncQueue.verifyOperationInProgress(),K("RemoteStore","RemoteStore received new credentials");const r=as(n);n.L_.add(3),await Jo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Pu(n)}async function r2(t,e){const n=ee(t);e?(n.L_.delete(2),await Pu(n)):e||(n.L_.add(2),await Jo(n),n.q_.set("Unknown"))}function pi(t){return t.K_||(t.K_=function(n,r,s){const i=ee(n);return i.w_(),new $k(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:Gk.bind(null,t),Ro:Kk.bind(null,t),mo:Qk.bind(null,t),d_:Yk.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Kf(t)?Gf(t):t.q_.set("Unknown")):(await t.K_.stop(),eE(t))})),t.K_}function vr(t){return t.U_||(t.U_=function(n,r,s){const i=ee(n);return i.w_(),new Bk(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:Zk.bind(null,t),mo:n2.bind(null,t),f_:e2.bind(null,t),g_:t2.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await bu(t)):(await t.U_.stop(),t.O_.length>0&&(K("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Qf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Yf(t,e){if(bn("AsyncQueue",`${e}: ${t}`),Qo(t))return new W(L.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Hi(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Bs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Bs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Bs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(){this.W_=new Ae(Q.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):J():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class si{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new si(e,n,Bs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class i2{constructor(){this.queries=Sy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ee(n),i=s.queries;s.queries=Sy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(L.ABORTED,"Firestore shutting down"))}}function Sy(){return new fi(t=>Aw(t),Su)}async function o2(t,e){const n=ee(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new s2,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Yf(o,`Initialization of query '${gs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Xf(n)}async function a2(t,e){const n=ee(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function l2(t,e){const n=ee(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Xf(n)}function u2(t,e,n){const r=ee(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Xf(t){t.Y_.forEach(e=>{e.next()})}var ch,Ay;(Ay=ch||(ch={})).ea="default",Ay.Cache="cache";class c2{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new si(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=si.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ch.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e){this.key=e}}class iE{constructor(e){this.key=e}}class d2{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=Cw(e),this.Ra=new Bs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new xy,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),T=Au(this.query,m)?m:null,I=!!g&&this.mutatedKeys.has(g.key),N=!!T&&(T.hasLocalMutations||this.mutatedKeys.has(T.key)&&T.hasCommittedMutations);let M=!1;g&&T?g.data.isEqual(T.data)?I!==N&&(r.track({type:3,doc:T}),M=!0):this.ga(g,T)||(r.track({type:2,doc:T}),M=!0,(u&&this.Aa(T,u)>0||d&&this.Aa(T,d)<0)&&(l=!0)):!g&&T?(r.track({type:0,doc:T}),M=!0):g&&!T&&(r.track({type:1,doc:g}),M=!0,(u||d)&&(l=!0)),M&&(T?(o=o.add(T),i=N?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(T,I){const N=M=>{switch(M){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return N(T)-N(I)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new si(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new xy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new iE(r))}),this.da.forEach(r=>{e.has(r)||n.push(new sE(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return si.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class h2{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class f2{constructor(e){this.key=e,this.va=!1}}class p2{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new fi(l=>Aw(l),Su),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(Q.comparator),this.Na=new Map,this.La=new $f,this.Ba={},this.ka=new Map,this.qa=ri.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function m2(t,e,n=!0){const r=dE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await oE(r,e,n,!0),s}async function g2(t,e){const n=dE(t);await oE(n,e,!0,!1)}async function oE(t,e,n,r){const s=await Mk(t.localStore,un(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await y2(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Jw(t.remoteStore,s),l}async function y2(t,e,n,r,s){t.Ka=(m,g,T)=>async function(N,M,_,x){let R=M.view.ma(_);R.ns&&(R=await wy(N.localStore,M.query,!1).then(({documents:w})=>M.view.ma(w,R)));const O=x&&x.targetChanges.get(M.targetId),U=x&&x.targetMismatches.get(M.targetId)!=null,F=M.view.applyChanges(R,N.isPrimaryClient,O,U);return Ry(N,M.targetId,F.wa),F.snapshot}(t,m,g,T);const i=await wy(t.localStore,e,!0),o=new d2(e,i.Ts),l=o.ma(i.documents),u=Xo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);Ry(t,n,d.wa);const p=new h2(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function v2(t,e,n){const r=ee(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Su(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await uh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qf(r.remoteStore,s.targetId),dh(r,s.targetId)}).catch(Ko)):(dh(r,s.targetId),await uh(r.localStore,s.targetId,!0))}async function _2(t,e){const n=ee(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qf(n.remoteStore,r.targetId))}async function w2(t,e,n){const r=C2(t);try{const s=await function(o,l){const u=ee(o),d=Le.now(),p=l.reduce((T,I)=>T.add(I.key),se());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",T=>{let I=Dn(),N=se();return u.cs.getEntries(T,p).next(M=>{I=M,I.forEach((_,x)=>{x.isValidDocument()||(N=N.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(T,I)).next(M=>{m=M;const _=[];for(const x of l){const R=FR(x,m.get(x.key).overlayedDocument);R!=null&&_.push(new xr(x.key,R,vw(R.value.mapValue),Ut.exists(!0)))}return u.mutationQueue.addMutationBatch(T,d,_,l)}).next(M=>{g=M;const _=M.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(T,M.batchId,_)})}).then(()=>({batchId:g.batchId,changes:kw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Ae(ue)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await Zo(r,s.changes),await bu(r.remoteStore)}catch(s){const i=Yf(s,"Failed to persist write");n.reject(i)}}async function aE(t,e){const n=ee(t);try{const r=await bk(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?he(o.va):s.removedDocuments.size>0&&(he(o.va),o.va=!1))}),await Zo(n,r,e)}catch(r){await Ko(r)}}function Cy(t,e,n){const r=ee(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ee(o);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&Xf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function E2(t,e,n){const r=ee(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ae(Q.comparator);o=o.insert(i,at.newNoDocument(i,Z.min()));const l=se().add(i),u=new ku(Z.min(),new Map,new Ae(ue),o,l);await aE(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Jf(r)}else await uh(r.localStore,e,!1).then(()=>dh(r,e,n)).catch(Ko)}async function T2(t,e){const n=ee(t),r=e.batch.batchId;try{const s=await Pk(n.localStore,e);uE(n,r,null),lE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zo(n,s)}catch(s){await Ko(s)}}async function I2(t,e,n){const r=ee(t);try{const s=await function(o,l){const u=ee(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(he(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);uE(r,e,n),lE(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Zo(r,s)}catch(s){await Ko(s)}}function lE(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function uE(t,e,n){const r=ee(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function dh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||cE(t,r)})}function cE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(qf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Jf(t))}function Ry(t,e,n){for(const r of n)r instanceof sE?(t.La.addReference(r.key,e),x2(t,r)):r instanceof iE?(K("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||cE(t,r.key)):J()}function x2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(K("SyncEngine","New document in limbo: "+n),t.xa.add(r),Jf(t))}function Jf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new Q(_e.fromString(e)),r=t.qa.next();t.Na.set(r,new f2(n)),t.Oa=t.Oa.insert(n,r),Jw(t.remoteStore,new er(un(Lf(n.path)),r,"TargetPurposeLimboResolution",Nf.oe))}}async function Zo(t,e,n){const r=ee(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Hf.Wi(u.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const p=ee(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(d,g=>V.forEach(g.$i,T=>p.persistence.referenceDelegate.addReference(m,g.targetId,T)).next(()=>V.forEach(g.Ui,T=>p.persistence.referenceDelegate.removeReference(m,g.targetId,T)))))}catch(m){if(!Qo(m))throw m;K("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const T=p.os.get(g),I=T.snapshotVersion,N=T.withLastLimboFreeSnapshotVersion(I);p.os=p.os.insert(g,N)}}}(r.localStore,i))}async function S2(t,e){const n=ee(t);if(!n.currentUser.isEqual(e)){K("SyncEngine","User change. New user:",e.toKey());const r=await Kw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(L.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Zo(n,r.hs)}}function A2(t,e){const n=ee(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let s=se();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function dE(t){const e=ee(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=aE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=A2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=E2.bind(null,e),e.Ca.d_=l2.bind(null,e.eventManager),e.Ca.$a=u2.bind(null,e.eventManager),e}function C2(t){const e=ee(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=T2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=I2.bind(null,e),e}class Jl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Nu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return Nk(this.persistence,new Rk,e.initialUser,this.serializer)}Ga(e){return new Sk(Bf.Zr,this.serializer)}Wa(e){return new Vk}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Jl.provider={build:()=>new Jl};class hh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=S2.bind(null,this.syncEngine),await r2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new i2}()}createDatastore(e){const n=Nu(e.databaseInfo.databaseId),r=function(i){return new zk(i)}(e.databaseInfo);return function(i,o,l,u){return new Hk(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new Wk(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Cy(this.syncEngine,n,0),function(){return Ty.D()?new Ty:new jk}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,p){const m=new p2(s,i,o,l,u,d);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ee(s);K("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Jo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}hh.provider={build:()=>new hh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R2{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):bn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=kf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{K("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(K("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Yf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Yc(t,e){t.asyncQueue.verifyOperationInProgress(),K("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Kw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ky(t,e){t.asyncQueue.verifyOperationInProgress();const n=await N2(t);K("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Iy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Iy(e.remoteStore,s)),t._onlineComponents=e}async function N2(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){K("FirestoreClient","Using user provided OfflineComponentProvider");try{await Yc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===L.FAILED_PRECONDITION||s.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Jr("Error using user provided cache. Falling back to memory cache: "+n),await Yc(t,new Jl)}}else K("FirestoreClient","Using default OfflineComponentProvider"),await Yc(t,new Jl);return t._offlineComponents}async function hE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(K("FirestoreClient","Using user provided OnlineComponentProvider"),await ky(t,t._uninitializedComponentsProvider._online)):(K("FirestoreClient","Using default OnlineComponentProvider"),await ky(t,new hh))),t._onlineComponents}function P2(t){return hE(t).then(e=>e.syncEngine)}async function Ny(t){const e=await hE(t),n=e.eventManager;return n.onListen=m2.bind(null,e.syncEngine),n.onUnlisten=v2.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=g2.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_2.bind(null,e.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Py=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t,e,n){if(!n)throw new W(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function mE(t,e,n,r){if(e===!0&&r===!0)throw new W(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function by(t){if(!Q.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dy(t){if(Q.isDocumentKey(t))throw new W(L.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Du(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function Yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Du(t);throw new W(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=fE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(L.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ou{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Oy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Oy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new mw;switch(r.type){case"firstParty":return new XC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Py.get(n);r&&(K("ComponentProvider","Removing Datastore"),Py.delete(n),r.terminate())}(this),Promise.resolve()}}function gE(t,e,n,r={}){var s;const i=(t=Yt(t,Ou))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Jr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=it.MOCK_USER;else{l=cx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new W(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(d)}t._authCredentials=new KC(new pw(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Sr(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class Sn extends Sr{constructor(e,n,r){super(e,n,Lf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new Q(e))}withConverter(e){return new Sn(this.firestore,e,this._path)}}function Mt(t,e,...n){if(t=Ue(t),pE("collection","path",e),t instanceof Ou){const r=_e.fromString(e,...n);return Dy(r),new Sn(t,null,r)}{if(!(t instanceof ut||t instanceof Sn))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return Dy(r),new Sn(t.firestore,null,r)}}function wt(t,e,...n){if(t=Ue(t),arguments.length===1&&(e=kf.newId()),pE("doc","path",e),t instanceof Ou){const r=_e.fromString(e,...n);return by(r),new ut(t,null,new Q(r))}{if(!(t instanceof ut||t instanceof Sn))throw new W(L.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(_e.fromString(e,...n));return by(r),new ut(t.firestore,t instanceof Sn?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class My{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Yw(this,"async_queue_retry"),this.Vu=()=>{const r=Qc();r&&K("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Br;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Qo(e))throw e;K("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw bn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Qf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ly(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class _r extends Ou{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new My,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new My(e),this._firestoreClient=void 0,await e}}}function yE(t,e){const n=typeof t=="object"?t:A0(),r=typeof t=="string"?t:"(default)",s=vf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=lx("firestore");i&&gE(s,...i)}return s}function Zf(t){if(t._terminated)throw new W(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||b2(t),t._firestoreClient}function b2(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,d,p){return new cR(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,fE(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new k2(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ts(qe.fromBase64String(e))}catch(n){throw new W(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ts(qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D2=/^__.*__$/;class O2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new xr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Yo(e,this.data,n,this.fieldTransforms)}}class vE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new xr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function _E(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class ep{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new ep(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Zl(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(_E(this.Cu)&&D2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class M2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Nu(e)}Qu(e,n,r,s=!1){return new ep({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vu(t){const e=t._freezeSettings(),n=Nu(t._databaseId);return new M2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function wE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);np("Data must be an object, but it was:",o,r);const l=EE(r,o);let u,d;if(i.merge)u=new Nt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=fh(e,m,n);if(!o.contains(g))throw new W(L.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);IE(p,g)||p.push(g)}u=new Nt(p),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new O2(new Tt(l),u,d)}class ju extends ta{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ju}}class tp extends ta{_toFieldTransform(e){return new MR(e.path,new Do)}isEqual(e){return e instanceof tp}}function L2(t,e,n,r){const s=t.Qu(1,e,n);np("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();os(r,(u,d)=>{const p=rp(e,u,n);d=Ue(d);const m=s.Nu(p);if(d instanceof ju)i.push(p);else{const g=na(d,m);g!=null&&(i.push(p),o.set(p,g))}});const l=new Nt(i);return new vE(o,l,s.fieldTransforms)}function V2(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[fh(e,r,n)],u=[s];if(i.length%2!=0)throw new W(L.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(fh(e,i[g])),u.push(i[g+1]);const d=[],p=Tt.empty();for(let g=l.length-1;g>=0;--g)if(!IE(d,l[g])){const T=l[g];let I=u[g];I=Ue(I);const N=o.Nu(T);if(I instanceof ju)d.push(T);else{const M=na(I,N);M!=null&&(d.push(T),p.set(T,M))}}const m=new Nt(d);return new vE(p,m,o.fieldTransforms)}function j2(t,e,n,r=!1){return na(n,t.Qu(r?4:3,e))}function na(t,e){if(TE(t=Ue(t)))return np("Unsupported field value:",e,t),EE(t,e);if(t instanceof ta)return function(r,s){if(!_E(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=na(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ue(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return bR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:Yl(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Yl(s.serializer,i)}}if(r instanceof Mu)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ts)return{bytesValue:zw(s.serializer,r._byteString)};if(r instanceof ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:zf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Lu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Vf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Du(r)}`)}(t,e)}function EE(t,e){const n={};return gw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):os(t,(r,s)=>{const i=na(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function TE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Mu||t instanceof ts||t instanceof ut||t instanceof ta||t instanceof Lu)}function np(t,e,n){if(!TE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Du(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function fh(t,e,n){if((e=Ue(e))instanceof ea)return e._internalPath;if(typeof e=="string")return rp(t,e);throw Zl("Field path arguments must be of type string or ",t,!1,void 0,n)}const F2=new RegExp("[~\\*/\\[\\]]");function rp(t,e,n){if(e.search(F2)>=0)throw Zl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ea(...e.split("."))._internalPath}catch{throw Zl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Zl(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new W(L.INVALID_ARGUMENT,l+t+u)}function IE(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new U2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(sp("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class U2 extends xE{data(){return super.data()}}function sp(t,e){return typeof e=="string"?rp(t,e):e instanceof ea?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z2(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(L.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ip{}class op extends ip{}function hl(t,e,...n){let r=[];e instanceof ip&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Uu).length,l=i.filter(u=>u instanceof Fu).length;if(o>1||o>0&&l>0)throw new W(L.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Fu extends op{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Fu(e,n,r)}_apply(e){const n=this._parse(e);return SE(e._query,n),new Sr(e.firestore,e.converter,rh(e._query,n))}_parse(e){const n=Vu(e.firestore);return function(i,o,l,u,d,p,m){let g;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new W(L.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){jy(m,p);const T=[];for(const I of m)T.push(Vy(u,i,I));g={arrayValue:{values:T}}}else g=Vy(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||jy(m,p),g=j2(l,o,m,p==="in"||p==="not-in");return Me.create(d,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Uu extends ip{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Uu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)SE(o,u),o=rh(o,u)}(e._query,n),new Sr(e.firestore,e.converter,rh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class zu extends op{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new zu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(L.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new bo(i,o)}(e._query,this._field,this._direction);return new Sr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new hi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ph(t,e="asc"){const n=e,r=sp("orderBy",t);return zu._create(r,n)}function Vy(t,e,n){if(typeof(n=Ue(n))=="string"){if(n==="")throw new W(L.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Sw(e)&&n.indexOf("/")!==-1)throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(_e.fromString(n));if(!Q.isDocumentKey(r))throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ry(t,new Q(r))}if(n instanceof ut)return ry(t,n._key);throw new W(L.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Du(n)}.`)}function jy(t,e){if(!Array.isArray(t)||t.length===0)throw new W(L.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function SE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(L.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class AE{convertValue(e,n="none"){switch(es(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Zr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return os(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Pe(o.doubleValue));return new Lu(i)}convertGeoPoint(e){return new Mu(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=bf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(No(e));default:return null}}convertTimestamp(e){const n=yr(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=_e.fromString(e);he(Gw(r));const s=new ei(r.get(1),r.get(3)),i=new Q(r.popFirst(5));return s.isEqual(n)||bn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ap extends xE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(sp("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class oo extends ap{data(e={}){return super.data(e)}}class RE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ds(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new oo(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:$2(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function $2(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}class kE extends AE{constructor(e){super(),this.firestore=e}convertBytes(e){return new ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function B2(t,e,n){t=Yt(t,ut);const r=Yt(t.firestore,_r),s=CE(t.converter,e,n);return ra(r,[wE(Vu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ut.none())])}function Or(t,e,n,...r){t=Yt(t,ut);const s=Yt(t.firestore,_r),i=Vu(s);let o;return o=typeof(e=Ue(e))=="string"||e instanceof ea?V2(i,"updateDoc",t._key,e,n,r):L2(i,"updateDoc",t._key,e),ra(s,[o.toMutation(t._key,Ut.exists(!0))])}function _s(t){return ra(Yt(t.firestore,_r),[new jf(t._key,Ut.none())])}function Mr(t,e){const n=Yt(t.firestore,_r),r=wt(t),s=CE(t.converter,e);return ra(n,[wE(Vu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function mh(t,...e){var n,r,s;t=Ue(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ly(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ly(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,d,p;if(t instanceof ut)d=Yt(t.firestore,_r),p=Lf(t._key.path),u={next:m=>{e[o]&&e[o](H2(d,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Yt(t,Sr);d=Yt(m.firestore,_r),p=m._query;const g=new kE(d);u={next:T=>{e[o]&&e[o](new RE(d,g,m,T))},error:e[o+1],complete:e[o+2]},z2(t._query)}return function(g,T,I,N){const M=new R2(N),_=new c2(T,M,I);return g.asyncQueue.enqueueAndForget(async()=>o2(await Ny(g),_)),()=>{M.Za(),g.asyncQueue.enqueueAndForget(async()=>a2(await Ny(g),_))}}(Zf(d),p,l,u)}function ra(t,e){return function(r,s){const i=new Br;return r.asyncQueue.enqueueAndForget(async()=>w2(await P2(r),s,i)),i.promise}(Zf(t),e)}function H2(t,e,n){const r=n.docs.get(e._key),s=new kE(t);return new ap(t,s,e._key,r,new Ds(n.hasPendingWrites,n.fromCache),e.converter)}function gh(){return new tp("serverTimestamp")}(function(e,n=!0){(function(s){di=s})(li),Xs(new Qr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new _r(new QC(r.getProvider("auth-internal")),new ZC(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new W(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ei(d.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),dr(Jg,"4.7.3",e),dr(Jg,"4.7.3","esm2017")})();const q2=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:AE,Bytes:ts,CollectionReference:Sn,DocumentReference:ut,DocumentSnapshot:ap,FieldPath:ea,FieldValue:ta,Firestore:_r,FirestoreError:W,GeoPoint:Mu,Query:Sr,QueryCompositeFilterConstraint:Uu,QueryConstraint:op,QueryDocumentSnapshot:oo,QueryFieldFilterConstraint:Fu,QueryOrderByConstraint:zu,QuerySnapshot:RE,SnapshotMetadata:Ds,Timestamp:Le,VectorValue:Lu,_AutoId:kf,_ByteString:qe,_DatabaseId:ei,_DocumentKey:Q,_EmptyAuthCredentialsProvider:mw,_FieldPath:Be,_cast:Yt,_logWarn:Jr,_validateIsNotUsedTogether:mE,addDoc:Mr,collection:Mt,connectFirestoreEmulator:gE,deleteDoc:_s,doc:wt,ensureFirestoreConfigured:Zf,executeWrite:ra,getFirestore:yE,onSnapshot:mh,orderBy:ph,query:hl,serverTimestamp:gh,setDoc:B2,updateDoc:Or},Symbol.toStringTag,{value:"Module"})),W2={apiKey:"AIzaSyDFGlm4ixlJ34vg9XT_otqIeKgZT5bmBu8",authDomain:"tsops-webapp-v1.firebaseapp.com",projectId:"tsops-webapp-v1",storageBucket:"tsops-webapp-v1.firebasestorage.app",messagingSenderId:"558840136278",appId:"1:558840136278:web:00e5918a1e98aa70f2f1f7"},NE=S0(W2),yh=HC(NE),Te=yE(NE),G2="modulepreload",K2=function(t){return"/"+t},Fy={},Q2=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=K2(u),u in Fy)return;Fy[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":G2,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((g,T)=>{m.addEventListener("load",g),m.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function Y2(t){const[e,n]=B.useState([]),[r,s]=B.useState([]),[i,o]=B.useState([]),[l,u]=B.useState([]),[d,p]=B.useState([]),[m,g]=B.useState([]),[T,I]=B.useState({});B.useEffect(()=>{if(!t)return;const H=(fe,Ce,Je=null)=>{const qu=Mt(Te,fe);return mh(Je||qu,hn=>{if(hn.empty)Ce([]);else{const ls=hn.docs.map(us=>({id:us.id,...us.data()}));Ce(ls)}},hn=>{console.error(`Error fetching ${fe}:`,hn),Ce([])})},D=H("members",n),z=H("tasks",s,hl(Mt(Te,"tasks"))),G=H("logs",o,hl(Mt(Te,"logs"),ph("date","desc"))),re=H("actionLogs",u,hl(Mt(Te,"actionLogs"),ph("timestamp","desc"))),ce=H("rules",p),me=H("manualScores",g),_t=mh(Mt(Te,"roles"),fe=>{const Ce={};fe.docs.forEach(Je=>Ce[Je.id]=Je.data().role),I(Ce)});return()=>{D(),z(),G(),re(),ce(),me(),_t()}},[t]);const N=async(H,D,z)=>{try{await Mr(Mt(Te,"actionLogs"),{timestamp:gh(),user:H,action:D,detail:z})}catch{}},M=async(H,D)=>{try{await H()}catch(z){console.error("Action Failed",z)}};return{members:e,tasks:r,logs:i,actionLogs:l,rules:d,manualScores:m,roles:T,handleTaskToggle:async(H,D,z)=>{await M(()=>Or(wt(Te,"tasks",H),{completed:!D})),N(z==null?void 0:z.email,"Toggle Task",`Task ${H}`)},handleUpdateTaskStatus:async(H,D,z)=>{await Or(wt(Te,"tasks",H),{status:D}),N(z==null?void 0:z.email,"Update Status",`Task ${H} -> ${D}`)},handleAddTask:async(H,D)=>{await Mr(Mt(Te,"tasks"),H),N(D==null?void 0:D.email,"Add Task",`Task: ${H.name}`)},handleEditTask:async(H,D,z)=>{await Or(wt(Te,"tasks",H),D),N(z==null?void 0:z.email,"Edit Task",`Task: ${H}`)},handleDeleteTask:async(H,D)=>{await _s(wt(Te,"tasks",H)),N(D==null?void 0:D.email,"Delete Task",`Task: ${H}`)},handleAddMember:async(H,D)=>{await Mr(Mt(Te,"members"),H),N(D==null?void 0:D.email,"Add Member",H.name)},handleEditMember:async(H,D,z)=>{await Or(wt(Te,"members",H),D),N(z==null?void 0:z.email,"Edit Member",D.name)},handleDeleteMember:async(H,D)=>{await _s(wt(Te,"members",H)),N(D==null?void 0:D.email,"Delete Member",H)},handleAddLog:async(H,D)=>{await Mr(Mt(Te,"logs"),H),N(D==null?void 0:D.email,"Add Log",H.topic)},handleResolveLog:async(H,D,z)=>{await Or(wt(Te,"logs",H),{status:"solved",resolution:D,solvedBy:z==null?void 0:z.email}),N(z==null?void 0:z.email,"Resolve Log",H)},handleDeleteLog:async(H,D)=>{await _s(wt(Te,"logs",H)),N(D==null?void 0:D.email,"Delete Log",H)},handleSaveRule:async(H,D)=>{if(H.id){const{id:z,...G}=H;await Or(wt(Te,"rules",z),G)}else await Mr(Mt(Te,"rules"),H);N(D==null?void 0:D.email,"Save Rule","")},handleDeleteRule:async(H,D)=>{await _s(wt(Te,"rules",H)),N(D==null?void 0:D.email,"Delete Rule",H)},handleSaveManualScore:async(H,D)=>{await Mr(Mt(Te,"manualScores"),{...H,timestamp:gh()}),N(D==null?void 0:D.email,"Add Score",H.points)},handleDeleteManualScore:async(H,D)=>{await _s(wt(Te,"manualScores",H)),N(D==null?void 0:D.email,"Delete Score",H)},handleSaveRole:async(H,D,z)=>{const G=wt(Te,"roles",H);await Q2(async()=>{const{setDoc:re}=await Promise.resolve().then(()=>q2);return{setDoc:re}},void 0).then(({setDoc:re})=>re(G,{role:D},{merge:!0})),N(z==null?void 0:z.email,"Update Role",`${H}->${D}`)}}}/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),te=(t,e)=>{const n=B.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...d},p)=>B.createElement("svg",{ref:p,...X2,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${J2(t)}`,l].join(" "),...d},[...e.map(([m,g])=>B.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=te("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z2=te("AlertCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=te("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eN=te("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=te("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tN=te("Briefcase",[["rect",{width:"20",height:"14",x:"2",y:"7",rx:"2",ry:"2",key:"eto64e"}],["path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"zwj3tp"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nN=te("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rN=te("CalendarDays",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",ry:"2",key:"eu3xkr"}],["line",{x1:"16",x2:"16",y1:"2",y2:"6",key:"m3sa8f"}],["line",{x1:"8",x2:"8",y1:"2",y2:"6",key:"18kwsl"}],["line",{x1:"3",x2:"21",y1:"10",y2:"10",key:"xt86sb"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=te("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sN=te("CircleUser",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iN=te("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=te("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oN=te("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aN=te("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=te("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lN=te("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=te("ListTodo",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=te("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uN=te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cN=te("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=te("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dN=te("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hN=te("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fN=te("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=te("Pen",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pN=te("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jE=te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mN=te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gN=te("ShieldAlert",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yN=te("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vN=te("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=te("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _N=te("TrendingDown",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=te("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wN=te("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EN=te("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TN=te("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=te("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xN=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);function SN({activeTab:t,setActiveTab:e,user:n,role:r,onLogout:s,members:i}){var T;const o=n||{},l=o.displayName||((T=o.email)==null?void 0:T.split("@")[0])||"Guest",u=o.email||"",d=i==null?void 0:i.find(I=>I.email===u),p=(d==null?void 0:d.position)||(d==null?void 0:d.role)||r||"Staff",m=r?r.toLowerCase():"staff",g=[{id:"dashboard",label:"Dashboard",icon:lN},{id:"team",label:"จัดการทีมงาน",icon:tu},{id:"dept",label:"ภาพรวมแผนก",icon:nN},{id:"assign",label:"มอบหมายงาน",icon:OE},{id:"scores",label:"บันทึกคะแนน",icon:iN},{id:"problems",label:"แจ้งปัญหา",icon:eu},{id:"rules",label:"กฎระเบียบ",icon:bE},{id:"action_logs",label:"ประวัติการแก้ไข",icon:up,role:["dgm","dm","admin"]}];return f.jsxs("div",{className:"flex flex-col h-full bg-slate-900 text-white shadow-xl",children:[f.jsxs("div",{className:"p-6 border-b border-slate-800",children:[f.jsx("h1",{className:"text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400",children:"TransportOps"}),f.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Version 2.0 (Unlocked)"})]}),f.jsx("div",{className:"p-6 bg-slate-800/50",children:f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"p-2 bg-slate-700 rounded-full",children:f.jsx(sN,{size:24,className:"text-slate-300"})}),f.jsxs("div",{className:"overflow-hidden",children:[f.jsx("p",{className:"text-sm font-medium text-white truncate",children:l}),f.jsx("span",{className:"inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-bold bg-blue-900 text-blue-200 uppercase tracking-wide border border-blue-800",children:p})]})]})}),f.jsx("div",{className:"flex-1 overflow-y-auto py-4",children:f.jsx("nav",{className:"space-y-1 px-3",children:g.map(I=>I.role&&!I.role.includes(m)?null:f.jsxs("button",{onClick:()=>e(I.id),className:`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${t===I.id?"bg-blue-600 text-white shadow-lg":"text-slate-400 hover:bg-slate-800 hover:text-white"}`,children:[f.jsx(I.icon,{size:18,className:`transition-colors ${t===I.id?"text-white":"text-slate-500 group-hover:text-white"}`}),I.label]},I.id))})}),f.jsx("div",{className:"p-4 border-t border-slate-800",children:f.jsxs("button",{onClick:s,className:"w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition border border-transparent hover:border-red-500/20",children:[f.jsx(cN,{size:18})," ออกจากระบบ"]})})]})}const Ha=({title:t,value:e,subtext:n,icon:r,colorClass:s,bgClass:i})=>f.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300",children:[f.jsxs("div",{className:"flex justify-between items-start",children:[f.jsxs("div",{children:[f.jsx("p",{className:"text-gray-500 text-sm font-medium mb-1",children:t}),f.jsx("h3",{className:"text-3xl font-bold text-gray-800",children:e})]}),f.jsx("div",{className:`p-3 rounded-xl ${i} ${s}`,children:f.jsx(r,{size:24})})]}),n&&f.jsxs("div",{className:"mt-4 flex items-center gap-1 text-xs font-medium text-gray-400",children:[f.jsx(FE,{size:14,className:"text-green-500"}),f.jsx("span",{children:n})]})]});function AN({members:t,tasks:e,logs:n}){const r=t||[],s=e||[],i=n||[],o=r.length,l=s.length,u=s.filter(I=>I==null?void 0:I.completed).length,d=l>0?Math.round(u/l*100):0,p=i.filter(I=>(I==null?void 0:I.status)==="pending").length,m=i.filter(I=>(I==null?void 0:I.status)==="solved").length,g=s.slice(0,5),T=i.slice(0,5);return f.jsxs("div",{className:"space-y-8 animate-fade-in",children:[f.jsxs("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-end gap-4",children:[f.jsxs("div",{children:[f.jsx("h2",{className:"text-3xl font-bold text-slate-800",children:"Overview Dashboard"}),f.jsx("p",{className:"text-slate-500 mt-1",children:"สรุปภาพรวมการดำเนินงานประจำวัน"})]}),f.jsxs("div",{className:"flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200 text-sm text-gray-600",children:[f.jsx(rN,{size:16}),new Date().toLocaleDateString("th-TH",{weekday:"long",year:"numeric",month:"long",day:"numeric"})]})]}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[f.jsx(Ha,{title:"พนักงานทั้งหมด",value:o,icon:tu,colorClass:"text-blue-600",bgClass:"bg-blue-50",subtext:"Active Members"}),f.jsx(Ha,{title:"งานเสร็จสิ้น",value:`${u}/${l}`,icon:lp,colorClass:"text-green-600",bgClass:"bg-green-50",subtext:`Success Rate ${d}%`}),f.jsx(Ha,{title:"ปัญหาที่รอแก้ไข",value:p,icon:eu,colorClass:"text-red-600",bgClass:"bg-red-50",subtext:`Solved: ${m}`}),f.jsx(Ha,{title:"ประสิทธิภาพรวม",value:`${d}%`,icon:PE,colorClass:"text-purple-600",bgClass:"bg-purple-50",subtext:"Overall Performance"})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[f.jsxs("div",{className:"lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",children:[f.jsxs("div",{className:"p-6 border-b border-gray-50 flex justify-between items-center",children:[f.jsxs("h3",{className:"font-bold text-lg text-slate-800 flex items-center gap-2",children:[f.jsx(DE,{className:"text-blue-500",size:20})," งานล่าสุด"]}),f.jsxs("span",{className:"text-xs font-bold px-2 py-1 bg-blue-50 text-blue-600 rounded-lg",children:[g.length," รายการ"]})]}),f.jsx("div",{className:"p-0",children:g.length>0?f.jsxs("table",{className:"w-full text-left border-collapse",children:[f.jsx("thead",{className:"bg-slate-50 text-slate-500 text-xs uppercase tracking-wider",children:f.jsxs("tr",{children:[f.jsx("th",{className:"p-4 font-semibold",children:"ชื่องาน"}),f.jsx("th",{className:"p-4 font-semibold",children:"พื้นที่/แผนก"}),f.jsx("th",{className:"p-4 font-semibold text-center",children:"สถานะ"})]})}),f.jsx("tbody",{className:"divide-y divide-gray-50",children:g.map((I,N)=>f.jsxs("tr",{className:"hover:bg-slate-50/50 transition-colors",children:[f.jsx("td",{className:"p-4 text-sm font-medium text-slate-700",children:(I==null?void 0:I.name)||"Unknown"}),f.jsxs("td",{className:"p-4 text-sm text-slate-500 flex items-center gap-1",children:[f.jsx(dN,{size:14,className:"text-gray-300"})," ",(I==null?void 0:I.area)||"-"]}),f.jsx("td",{className:"p-4 text-center",children:f.jsx("span",{className:`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${I!=null&&I.completed?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`,children:I!=null&&I.completed?"Completed":"Pending"})})]},(I==null?void 0:I.id)||N))})]}):f.jsx("div",{className:"p-10 text-center text-gray-400",children:"ไม่มีข้อมูลงานล่าสุด"})})]}),f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",children:[f.jsx("div",{className:"p-6 border-b border-gray-50",children:f.jsxs("h3",{className:"font-bold text-lg text-slate-800 flex items-center gap-2",children:[f.jsx(eu,{className:"text-red-500",size:20})," ปัญหาล่าสุด"]})}),f.jsx("div",{className:"p-4 space-y-3",children:T.length>0?T.map((I,N)=>f.jsxs("div",{className:"p-4 rounded-xl bg-red-50/50 border border-red-100 hover:border-red-200 transition-colors cursor-pointer group",children:[f.jsxs("div",{className:"flex justify-between items-start mb-2",children:[f.jsx("span",{className:"text-[10px] font-bold uppercase tracking-wider text-red-600 bg-red-100 px-2 py-0.5 rounded",children:(I==null?void 0:I.dept)||"General"}),f.jsx("span",{className:"text-[10px] text-gray-400",children:I==null?void 0:I.date})]}),f.jsx("h4",{className:"text-sm font-bold text-gray-800 mb-1 group-hover:text-red-700 transition-colors",children:I==null?void 0:I.topic}),f.jsx("p",{className:"text-xs text-gray-500 line-clamp-2",children:I==null?void 0:I.detail})]},(I==null?void 0:I.id)||N)):f.jsx("div",{className:"p-10 text-center text-gray-400",children:"ไม่มีรายการแจ้งปัญหา"})})]})]})]})}function CN({members:t,onAdd:e,onEdit:n,onDelete:r,currentUserRole:s}){const i=t||[],[o,l]=B.useState(!1),[u,d]=B.useState(null),[p,m]=B.useState({name:"",position:"",dept:"Inbound",tel:"",email:""}),g=()=>{m({name:"",position:"",dept:"Inbound",tel:"",email:""}),d(null),l(!1)},T=_=>{_.preventDefault(),u?n(u,p):e(p),g()},I=_=>{m(_),d(_.id),l(!0)},N=_=>{confirm("ยืนยันการลบ?")&&r(_)},M=["dgm","dm","admin"].includes(s);return f.jsxs("div",{className:"space-y-6 animate-fade-in",children:[f.jsxs("div",{className:"flex justify-between items-center",children:[f.jsxs("div",{children:[f.jsxs("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:[f.jsx(tu,{className:"text-blue-600"})," จัดการทีมงาน"]}),f.jsxs("p",{className:"text-sm text-gray-500",children:["พนักงานทั้งหมด: ",i.length," คน"]})]}),M&&f.jsxs("button",{onClick:()=>l(!0),className:"bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition shadow-sm",children:[f.jsx(EN,{size:18})," เพิ่มพนักงาน"]})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:i.length>0?i.map((_,x)=>f.jsxs("div",{className:"bg-white p-5 rounded-xl shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition group",children:[f.jsxs("div",{className:"flex justify-between items-start mb-4",children:[f.jsxs("div",{className:"flex items-center gap-3",children:[f.jsx("div",{className:"w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100",children:_!=null&&_.name?_.name.charAt(0).toUpperCase():"?"}),f.jsxs("div",{children:[f.jsx("h3",{className:"font-bold text-slate-800",children:(_==null?void 0:_.name)||"ไม่ระบุชื่อ"}),f.jsxs("div",{className:"flex items-center gap-1 text-xs text-slate-500",children:[f.jsx(tN,{size:12})," ",(_==null?void 0:_.position)||(_==null?void 0:_.role)||"Staff"]})]})]}),f.jsx("span",{className:`text-[10px] font-bold px-2 py-1 rounded uppercase ${(_==null?void 0:_.dept)==="Inbound"?"bg-blue-100 text-blue-600":(_==null?void 0:_.dept)==="Outbound"?"bg-orange-100 text-orange-600":"bg-purple-100 text-purple-600"}`,children:(_==null?void 0:_.dept)||"General"})]}),f.jsxs("div",{className:"space-y-2 text-sm text-gray-600 flex-1 border-t border-gray-50 pt-3 mt-1",children:[_!=null&&_.tel?f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(pN,{size:14,className:"text-gray-400"})," ",_.tel]}):f.jsx("div",{className:"text-xs text-gray-300 italic",children:"ไม่มีเบอร์โทร"}),_!=null&&_.email?f.jsxs("div",{className:"flex items-center gap-2",children:[f.jsx(LE,{size:14,className:"text-gray-400"})," ",_.email]}):f.jsx("div",{className:"text-xs text-gray-300 italic",children:"ไม่มีอีเมล"})]}),M&&f.jsxs("div",{className:"flex justify-end gap-2 mt-4 pt-3 border-t border-gray-50 opacity-100 transition",children:[f.jsxs("button",{onClick:()=>I(_),className:"flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition",children:[f.jsx(VE,{size:14})," แก้ไข"]}),f.jsxs("button",{onClick:()=>N(_.id),className:"flex items-center gap-1 px-3 py-1.5 text-xs font-bold text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition",children:[f.jsx($u,{size:14})," ลบ"]})]})]},(_==null?void 0:_.id)||x)):f.jsxs("div",{className:"col-span-full py-16 flex flex-col items-center justify-center text-center bg-white rounded-2xl border-2 border-dashed border-gray-200",children:[f.jsx(tu,{size:48,className:"text-gray-200 mb-4"}),f.jsx("h3",{className:"text-lg font-bold text-gray-400",children:"ยังไม่มีข้อมูลพนักงาน"}),f.jsx("p",{className:"text-gray-400 text-sm mt-1",children:'กดปุ่ม "เพิ่มพนักงาน" เพื่อเริ่มต้น'})]})}),o&&f.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm",children:f.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-fade-in",children:[f.jsxs("div",{className:"flex justify-between items-center mb-6",children:[f.jsx("h3",{className:"text-lg font-bold text-slate-800",children:u?"แก้ไขข้อมูล":"เพิ่มพนักงานใหม่"}),f.jsx("button",{onClick:g,children:f.jsx(xN,{className:"text-gray-400 hover:text-gray-600"})})]}),f.jsxs("form",{onSubmit:T,className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-bold text-gray-500",children:"ชื่อ-นามสกุล"}),f.jsx("input",{required:!0,className:"w-full border rounded-lg px-3 py-2 mt-1",value:p.name,onChange:_=>m({...p,name:_.target.value})})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-bold text-gray-500",children:"ตำแหน่ง (Position)"}),f.jsx("input",{required:!0,className:"w-full border rounded-lg px-3 py-2 mt-1",value:p.position,onChange:_=>m({...p,position:_.target.value}),placeholder:"เช่น Driver, Admin..."})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-bold text-gray-500",children:"แผนก"}),f.jsxs("select",{className:"w-full border rounded-lg px-3 py-2 mt-1",value:p.dept,onChange:_=>m({...p,dept:_.target.value}),children:[f.jsx("option",{value:"Inbound",children:"Inbound"}),f.jsx("option",{value:"Outbound",children:"Outbound"}),f.jsx("option",{value:"Internal",children:"Internal"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-bold text-gray-500",children:"เบอร์โทร"}),f.jsx("input",{className:"w-full border rounded-lg px-3 py-2 mt-1",value:p.tel,onChange:_=>m({...p,tel:_.target.value})})]}),f.jsxs("div",{children:[f.jsx("label",{className:"text-xs font-bold text-gray-500",children:"อีเมล (ถ้ามี)"}),f.jsx("input",{className:"w-full border rounded-lg px-3 py-2 mt-1",value:p.email,onChange:_=>m({...p,email:_.target.value})})]}),f.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-bold shadow-lg shadow-blue-200 mt-2",children:"บันทึกข้อมูล"})]})]})})]})}function RN({members:t,tasks:e,onTaskToggle:n}){const r=t||[],s=e||[],i=l=>({team:r.filter(u=>(u==null?void 0:u.dept)===l),work:s.filter(u=>(u==null?void 0:u.area)===l)}),o=({title:l,icon:u,color:d,data:p})=>f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden",children:[f.jsxs("div",{className:`p-4 border-b border-gray-100 bg-opacity-10 ${d} flex justify-between items-center`,children:[f.jsxs("div",{className:"flex items-center gap-2 text-slate-800 font-bold text-lg",children:[u," ",l]}),f.jsxs("div",{className:"text-xs font-bold bg-white px-2 py-1 rounded-full text-slate-500 shadow-sm",children:[p.team.length," คน | ",p.work.length," งาน"]})]}),f.jsxs("div",{className:"p-5 flex-1 space-y-6",children:[f.jsxs("div",{children:[f.jsx("h4",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3",children:"Members"}),f.jsx("div",{className:"flex flex-wrap gap-2",children:p.team.length>0?p.team.map((m,g)=>f.jsx("span",{className:"px-2.5 py-1 text-xs font-medium bg-slate-50 text-slate-600 rounded-md border border-slate-100",children:m.name},m.id||g)):f.jsx("span",{className:"text-xs text-gray-300 italic",children:"- ไม่มีสมาชิก -"})})]}),f.jsxs("div",{children:[f.jsx("h4",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3",children:"Tasks"}),f.jsx("div",{className:"space-y-2",children:p.work.length>0?p.work.map((m,g)=>f.jsxs("div",{className:"flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100 hover:border-blue-200 transition-colors",children:[f.jsx("input",{type:"checkbox",checked:m.completed,onChange:()=>n(m.id,m.completed),className:"mt-0.5 rounded text-blue-600 cursor-pointer"}),f.jsx("span",{className:`text-sm ${m.completed?"line-through text-gray-400":"text-slate-700"}`,children:m.name})]},m.id||g)):f.jsx("div",{className:"text-center text-xs text-gray-300 py-4 italic",children:"- ไม่มีงานค้าง -"})})]})]})]});return f.jsxs("div",{className:"space-y-6 animate-fade-in",children:[f.jsx("div",{className:"flex items-center gap-2",children:f.jsx("h2",{className:"text-2xl font-bold text-slate-800",children:"Department Overview"})}),f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-start",children:[f.jsx(o,{title:"Inbound",icon:f.jsx(fN,{className:"text-blue-600"}),color:"bg-blue-500",data:i("Inbound")}),f.jsx(o,{title:"Outbound",icon:f.jsx(eN,{className:"text-green-600"}),color:"bg-green-500",data:i("Outbound")}),f.jsx(o,{title:"Internal",icon:f.jsx(TN,{className:"text-purple-600"}),color:"bg-purple-500",data:i("Internal")})]})]})}function kN({members:t,manualScores:e,rules:n,onAddScore:r,onDeleteScore:s,currentUserRole:i}){var R,O,U,F;const o=t||[],l=e||[],u=n||[],[d,p]=B.useState(""),[m,g]=B.useState(""),[T,I]=B.useState(""),[N,M]=B.useState(""),_=o.map(w=>{const v=l.filter(E=>E.memberId===w.id).reduce((E,A)=>E+(parseInt(A.points)||0),0);return{...w,totalScore:v}}).sort((w,v)=>v.totalScore-w.totalScore),x=w=>{w.preventDefault();const v=u.find(S=>S.id===m),E=parseInt(v?v.points:T),A=v?v.condition:N||"Custom Score";if(!d||isNaN(E))return alert("กรุณาระบุข้อมูลให้ครบถ้วน");r({memberId:d,points:E,reason:A,date:new Date().toISOString().split("T")[0]}),I(""),M("")};return f.jsxs("div",{className:"space-y-6 animate-fade-in",children:[f.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[f.jsxs("div",{className:"bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex items-center gap-3",children:[f.jsx("div",{className:"p-3 bg-yellow-100 rounded-full text-yellow-600",children:f.jsx(wN,{size:24})}),f.jsxs("div",{children:[f.jsx("p",{className:"text-xs text-yellow-700 font-bold uppercase",children:"Top Performer"}),f.jsx("p",{className:"font-bold text-slate-800",children:((R=_[0])==null?void 0:R.name)||"-"}),f.jsxs("p",{className:"text-xs text-slate-500",children:[((O=_[0])==null?void 0:O.totalScore)||0," คะแนน"]})]})]}),f.jsxs("div",{className:"bg-blue-50 p-4 rounded-xl border border-blue-100 flex items-center gap-3",children:[f.jsx("div",{className:"p-3 bg-blue-100 rounded-full text-blue-600",children:f.jsx(FE,{size:24})}),f.jsxs("div",{children:[f.jsx("p",{className:"text-xs text-blue-700 font-bold uppercase",children:"Average Score"}),f.jsxs("p",{className:"font-bold text-slate-800",children:[_.length>0?Math.round(_.reduce((w,v)=>w+v.totalScore,0)/_.length):0," คะแนน"]})]})]}),f.jsxs("div",{className:"bg-red-50 p-4 rounded-xl border border-red-100 flex items-center gap-3",children:[f.jsx("div",{className:"p-3 bg-red-100 rounded-full text-red-600",children:f.jsx(_N,{size:24})}),f.jsxs("div",{children:[f.jsx("p",{className:"text-xs text-red-700 font-bold uppercase",children:"Needs Improvement"}),f.jsx("p",{className:"font-bold text-slate-800",children:((U=_[_.length-1])==null?void 0:U.name)||"-"}),f.jsxs("p",{className:"text-xs text-slate-500",children:[((F=_[_.length-1])==null?void 0:F.totalScore)||0," คะแนน"]})]})]})]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[f.jsxs("div",{className:"bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-fit",children:[f.jsxs("h3",{className:"font-bold text-slate-700 mb-4 flex items-center gap-2",children:[f.jsx(vN,{size:18,className:"text-yellow-500"})," ให้คะแนน"]}),f.jsxs("form",{onSubmit:x,className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"พนักงาน"}),f.jsxs("select",{required:!0,className:"w-full border rounded-lg px-3 py-2 bg-slate-50",value:d,onChange:w=>p(w.target.value),children:[f.jsx("option",{value:"",children:"-- เลือกพนักงาน --"}),o.map(w=>f.jsx("option",{value:w.id,children:w.name},w.id))]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"เลือกตามกฎ"}),f.jsxs("select",{className:"w-full border rounded-lg px-3 py-2",value:m,onChange:w=>g(w.target.value),children:[f.jsx("option",{value:"",children:"-- กำหนดเอง --"}),u.map(w=>f.jsxs("option",{value:w.id,children:[w.condition," (",w.points,")"]},w.id))]})]}),!m&&f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsx("input",{type:"number",placeholder:"คะแนน (+/-)",className:"w-full border rounded-lg px-3 py-2",value:T,onChange:w=>I(w.target.value)}),f.jsx("input",{type:"text",placeholder:"เหตุผล",className:"w-full border rounded-lg px-3 py-2",value:N,onChange:w=>M(w.target.value)})]}),f.jsx("button",{type:"submit",className:"w-full bg-slate-800 text-white py-2.5 rounded-lg hover:bg-slate-900 font-bold shadow-lg",children:"บันทึก"})]})]}),f.jsxs("div",{className:"lg:col-span-2 space-y-6",children:[f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",children:[f.jsx("div",{className:"p-4 border-b bg-slate-50/50",children:f.jsx("h3",{className:"font-bold text-slate-700",children:"อันดับคะแนนรวม"})}),f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full text-left text-sm",children:[f.jsx("thead",{className:"bg-white text-gray-500 border-b",children:f.jsxs("tr",{children:[f.jsx("th",{className:"p-3",children:"อันดับ"}),f.jsx("th",{className:"p-3",children:"ชื่อ"}),f.jsx("th",{className:"p-3",children:"แผนก"}),f.jsx("th",{className:"p-3 text-right",children:"คะแนนรวม"})]})}),f.jsx("tbody",{className:"divide-y",children:_.slice(0,5).map((w,v)=>f.jsxs("tr",{className:"hover:bg-slate-50",children:[f.jsxs("td",{className:"p-3 pl-5 font-bold text-blue-600",children:["#",v+1]}),f.jsx("td",{className:"p-3 font-medium",children:w.name}),f.jsx("td",{className:"p-3 text-gray-500 text-xs",children:w.dept}),f.jsx("td",{className:`p-3 text-right font-bold ${w.totalScore>=0?"text-green-600":"text-red-600"}`,children:w.totalScore})]},w.id))})]})})]}),f.jsxs("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",children:[f.jsx("div",{className:"p-4 border-b bg-slate-50/50 flex justify-between",children:f.jsxs("h3",{className:"font-bold text-slate-700 flex items-center gap-2",children:[f.jsx(up,{size:16})," รายการล่าสุด"]})}),f.jsx("div",{className:"max-h-[300px] overflow-y-auto",children:l.length>0?l.slice(0,10).map(w=>{var v;return f.jsxs("div",{className:"p-3 border-b border-gray-50 flex justify-between items-center hover:bg-slate-50",children:[f.jsxs("div",{children:[f.jsx("p",{className:"font-bold text-sm text-slate-800",children:((v=o.find(E=>E.id===w.memberId))==null?void 0:v.name)||"Unknown"}),f.jsx("p",{className:"text-xs text-gray-500",children:w.reason})]}),f.jsxs("div",{className:"text-right",children:[f.jsxs("span",{className:`font-bold ${w.points>0?"text-green-600":"text-red-600"}`,children:[w.points>0?"+":"",w.points]}),f.jsx("p",{className:"text-[10px] text-gray-400",children:w.timestamp?new Date(w.timestamp.seconds*1e3).toLocaleDateString("th-TH"):"-"}),["dgm","dm","admin"].includes(i)&&f.jsx("button",{onClick:()=>s(w.id),className:"text-[10px] text-red-400 underline ml-2",children:"ลบ"})]})]},w.id)}):f.jsx("p",{className:"text-center p-4 text-gray-400 text-sm",children:"ยังไม่มีข้อมูล"})})]})]})]})]})}function NN({logs:t,onAddLog:e,onResolveLog:n,onDeleteLog:r,currentDate:s,askAiSolution:i,showToast:o,userEmail:l,currentUserRole:u,aiLoading:d}){const[p,m]=B.useState(""),[g,T]=B.useState(""),[I,N]=B.useState("Inbound"),[M,_]=B.useState("pending"),[x,R]=B.useState(!1),[O,U]=B.useState(""),[F,w]=B.useState(null),[v,E]=B.useState(!1),A=Y=>{Y.preventDefault(),e({topic:p,detail:g,dept:I,date:s,status:"pending",createdBy:l||"Unknown"}),m(""),T(""),o("บันทึกปัญหาเรียบร้อยแล้ว")},S=Y=>{w(Y),R(!0)},k=async()=>{if(F)try{E(!0),await n(F,O),R(!1),U(""),w(null),o("ปิดงานเรียบร้อยแล้ว")}catch(Y){console.error(Y),o("เกิดข้อผิดพลาดในการปิดงาน")}finally{E(!1)}},C=async Y=>{if(window.confirm(`⚠️ คุณต้องการลบรายการปัญหานี้ใช่หรือไม่?
(การกระทำนี้ไม่สามารถย้อนกลับได้)`))try{await r(Y),o("ลบรายการเรียบร้อยแล้ว")}catch(ht){console.error(ht),o("เกิดข้อผิดพลาดในการลบ")}},Ne=t.filter(Y=>Y.status===M);return f.jsxs("div",{className:"space-y-6 animate-fade-in",children:[f.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[f.jsx(eu,{className:"text-red-500"})," Problem Log"]}),x&&f.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm",children:f.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in",children:[f.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[f.jsx(lp,{className:"text-green-600"})," บันทึกการปิดงาน"]}),f.jsxs("div",{className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"หมายเหตุ / สรุปการแก้ไข"}),f.jsx("textarea",{className:"w-full border rounded px-3 py-2 h-24",value:O,onChange:Y=>U(Y.target.value),placeholder:"ระบุรายละเอียดการแก้ไข..."})]}),f.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[f.jsx("button",{onClick:()=>R(!1),disabled:v,className:"px-4 py-2 text-gray-500 hover:bg-gray-100 rounded",children:"ยกเลิก"}),f.jsxs("button",{onClick:k,disabled:v,className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2",children:[v&&f.jsx(ME,{size:16,className:"animate-spin"}),"ยืนยันปิดงาน"]})]})]})]})}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[f.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm h-fit",children:[f.jsx("h3",{className:"font-bold mb-4 text-gray-800",children:"แจ้งปัญหาใหม่"}),f.jsxs("form",{onSubmit:A,className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"หัวข้อ"}),f.jsx("input",{required:!0,type:"text",className:"w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition",value:p,onChange:Y=>m(Y.target.value)})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"รายละเอียด"}),f.jsx("textarea",{required:!0,className:"w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition",rows:"3",value:g,onChange:Y=>T(Y.target.value)})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"แผนก"}),f.jsxs("select",{className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:I,onChange:Y=>N(Y.target.value),children:[f.jsx("option",{value:"Inbound",children:"Inbound"}),f.jsx("option",{value:"Outbound",children:"Outbound"}),f.jsx("option",{value:"Internal",children:"Internal"})]})]}),f.jsx("button",{type:"submit",className:"w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition font-medium text-sm shadow-md shadow-red-200",children:"บันทึกปัญหา"})]})]}),f.jsxs("div",{className:"lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col max-h-[600px]",children:[f.jsxs("div",{className:"flex border-b",children:[f.jsxs("button",{onClick:()=>_("pending"),className:`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${M==="pending"?"border-red-500 text-red-600 bg-red-50":"border-transparent text-gray-500 hover:bg-gray-50"}`,children:["รอดำเนินการ (",t.filter(Y=>Y.status==="pending").length,")"]}),f.jsxs("button",{onClick:()=>_("solved"),className:`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${M==="solved"?"border-green-500 text-green-600 bg-green-50":"border-transparent text-gray-500 hover:bg-gray-50"}`,children:["ปิดงานแล้ว (",t.filter(Y=>Y.status==="solved").length,")"]})]}),f.jsxs("div",{className:"divide-y overflow-y-auto flex-1",children:[Ne.length===0?f.jsx("div",{className:"p-10 text-center text-gray-400",children:"ไม่มีรายการในสถานะนี้"}):null,[...Ne].reverse().map((Y,ht)=>f.jsx("div",{className:"p-4 hover:bg-gray-50 transition relative group",children:f.jsxs("div",{className:"flex justify-between items-start gap-4",children:[f.jsxs("div",{className:"flex-1 min-w-0",children:[f.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[f.jsx("h4",{className:"font-bold text-gray-800 text-sm",children:Y.topic}),f.jsxs("span",{className:"text-[10px] text-gray-400",children:["โดย: ",Y.createdBy]}),Y.status==="pending"&&f.jsxs("button",{onClick:()=>i(Y),disabled:d,className:"flex items-center gap-1 px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded border border-indigo-100 hover:bg-indigo-100 transition whitespace-nowrap",children:[f.jsx(yN,{size:10})," ",d?"Thinking...":"Ask AI"]})]}),f.jsx("p",{className:"text-sm text-gray-600 break-words",children:Y.detail}),Y.status==="solved"&&f.jsxs("div",{className:"mt-2 text-xs bg-green-50 p-2 rounded border border-green-100 text-green-800",children:[f.jsx("strong",{children:"แก้ไขแล้วโดย:"})," ",Y.solvedBy," ",f.jsx("br",{}),f.jsx("strong",{children:"หมายเหตุ:"})," ",Y.resolution]}),f.jsxs("div",{className:"flex gap-2 mt-2",children:[f.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider bg-gray-100 px-2 py-0.5 rounded text-gray-600",children:Y.dept}),f.jsx("span",{className:"text-[10px] text-gray-400 px-2 py-0.5",children:Y.date})]})]}),f.jsxs("div",{className:"flex flex-col items-end gap-2",children:[Y.status==="pending"?["dgm","dm"].includes(u)&&f.jsx("button",{onClick:()=>S(Y.docId||Y.id),className:"px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded hover:bg-yellow-200 transition font-bold",children:"ปิดงาน"}):f.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap bg-green-100 text-green-700",children:"SOLVED"}),f.jsx("button",{onClick:()=>C(Y.docId||Y.id),className:"p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition",title:"ลบรายการ",children:f.jsx($u,{size:14})})]})]})},Y.docId||Y.id||ht))]})]})]})]})}function PN({members:t,tasks:e,onAddTask:n,onEditTask:r,onDeleteTask:s,onUpdateStatus:i,currentUserRole:o}){const l=t||[],u=e||[],[d,p]=B.useState(!1),[m,g]=B.useState(null),[T,I]=B.useState({name:"",area:"Inbound",assigneeId:"",status:"pending",deadline:""}),[N,M]=B.useState(""),[_,x]=B.useState("All"),[R,O]=B.useState("All"),U=()=>{I({name:"",area:"Inbound",assigneeId:"",status:"pending",deadline:""}),g(null),p(!1)},F=S=>{S.preventDefault(),m?r(m.id,T):n({...T,completed:!1,createdAt:new Date().toISOString()}),U()},w=S=>{g(S),I({name:S.name||"",area:S.area||"Inbound",assigneeId:S.assigneeId||"",status:S.status||"pending",deadline:S.deadline||""}),p(!0)},v=S=>{var k;return((k=l.find(C=>C.id===S))==null?void 0:k.name)||"ไม่ระบุ"},E=u.filter(S=>{var ht;const k=(ht=S.name)==null?void 0:ht.toLowerCase().includes(N.toLowerCase()),C=_==="All"||S.area===_,Ne=S.status==="done"||S.completed;return k&&C&&(R==="All"?!0:R==="Done"?Ne:!Ne)}),A=["dgm","dm","admin"].includes(o);return f.jsxs("div",{className:"space-y-6 animate-fade-in",children:[f.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4",children:[f.jsxs("div",{children:[f.jsxs("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:[f.jsx(OE,{className:"text-blue-600"})," มอบหมายงาน"]}),f.jsxs("p",{className:"text-sm text-gray-500",children:[E.length," รายการที่แสดง"]})]}),A&&f.jsxs("button",{onClick:()=>p(!0),className:"bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 shadow-sm transition",children:[f.jsx(jE,{size:18})," สร้างงานใหม่"]})]}),f.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 items-center",children:[f.jsxs("div",{className:"relative flex-1 w-full",children:[f.jsx(mN,{className:"absolute left-3 top-2.5 text-gray-400",size:18}),f.jsx("input",{type:"text",placeholder:"ค้นหาชื่องาน...",className:"w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-100 outline-none text-sm",value:N,onChange:S=>M(S.target.value)})]}),f.jsxs("div",{className:"flex gap-2 w-full md:w-auto",children:[f.jsxs("select",{className:"border rounded-lg px-3 py-2 text-sm bg-slate-50 outline-none",value:_,onChange:S=>x(S.target.value),children:[f.jsx("option",{value:"All",children:"ทุกพื้นที่"}),f.jsx("option",{value:"Inbound",children:"Inbound"}),f.jsx("option",{value:"Outbound",children:"Outbound"}),f.jsx("option",{value:"Internal",children:"Internal"})]}),f.jsxs("select",{className:"border rounded-lg px-3 py-2 text-sm bg-slate-50 outline-none",value:R,onChange:S=>O(S.target.value),children:[f.jsx("option",{value:"All",children:"ทุกสถานะ"}),f.jsx("option",{value:"Pending",children:"กำลังทำ"}),f.jsx("option",{value:"Done",children:"เสร็จแล้ว"})]})]})]}),f.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:E.map(S=>{const k=S.status==="done"||S.completed;return f.jsxs("div",{className:`bg-white p-4 rounded-xl shadow-sm border transition hover:shadow-md ${k?"border-green-100 bg-green-50/30":"border-gray-100"}`,children:[f.jsxs("div",{className:"flex justify-between items-start mb-3",children:[f.jsx("span",{className:`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${S.area==="Inbound"?"bg-blue-100 text-blue-700":S.area==="Outbound"?"bg-orange-100 text-orange-700":"bg-purple-100 text-purple-700"}`,children:S.area}),A&&f.jsxs("div",{className:"flex gap-1",children:[f.jsx("button",{onClick:()=>w(S),className:"p-1.5 text-gray-400 hover:text-blue-600 rounded-full",children:f.jsx(VE,{size:14})}),f.jsx("button",{onClick:()=>confirm("ลบงานนี้?")&&s(S.id),className:"p-1.5 text-gray-400 hover:text-red-600 rounded-full",children:f.jsx($u,{size:14})})]})]}),f.jsx("h3",{className:`font-bold text-slate-800 mb-1 ${k?"line-through text-slate-400":""}`,children:S.name}),f.jsx("div",{className:"flex items-center gap-2 mb-4 text-xs text-gray-500",children:f.jsxs("div",{className:"flex items-center gap-1",children:[f.jsx("div",{className:"w-5 h-5 rounded-full bg-slate-200 flex items-center justify-center text-[10px] font-bold text-slate-600",children:v(S.assigneeId).charAt(0)}),v(S.assigneeId)]})}),f.jsx("div",{className:"pt-3 border-t border-gray-100 flex justify-between items-center",children:f.jsxs("button",{onClick:()=>A&&i(S.id,k?"pending":"done"),disabled:!A,className:`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition w-full justify-center ${k?"bg-green-500 text-white hover:bg-green-600":"bg-slate-100 text-slate-600 hover:bg-slate-200"}`,children:[k?f.jsx(lp,{size:14}):f.jsx(DE,{size:14}),k?"เสร็จสิ้น":"รอการทำงาน"]})})]},S.id)})}),E.length===0&&f.jsxs("div",{className:"text-center py-12 text-gray-400 bg-white rounded-xl border border-dashed",children:[f.jsx(oN,{size:40,className:"mx-auto mb-2 opacity-20"}),f.jsx("p",{children:"ไม่พบรายการงานตามเงื่อนไข"})]}),d&&f.jsx("div",{className:"fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm",children:f.jsxs("div",{className:"bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl animate-fade-in",children:[f.jsxs("div",{className:"flex justify-between items-center mb-6",children:[f.jsx("h3",{className:"text-lg font-bold text-slate-800",children:m?"แก้ไขงาน":"มอบหมายงานใหม่"}),f.jsx("button",{onClick:U,children:f.jsx(IN,{className:"text-gray-400 hover:text-gray-600"})})]}),f.jsxs("form",{onSubmit:F,className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"ชื่องาน"}),f.jsx("input",{required:!0,className:"w-full border rounded-lg px-3 py-2",value:T.name,onChange:S=>I({...T,name:S.target.value}),placeholder:"เช่น จัดเรียงสินค้า..."})]}),f.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"พื้นที่"}),f.jsxs("select",{className:"w-full border rounded-lg px-3 py-2",value:T.area,onChange:S=>I({...T,area:S.target.value}),children:[f.jsx("option",{value:"Inbound",children:"Inbound"}),f.jsx("option",{value:"Outbound",children:"Outbound"}),f.jsx("option",{value:"Internal",children:"Internal"})]})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"ผู้รับผิดชอบ"}),f.jsxs("select",{className:"w-full border rounded-lg px-3 py-2",value:T.assigneeId,onChange:S=>I({...T,assigneeId:S.target.value}),children:[f.jsx("option",{value:"",children:"-- ไม่ระบุ --"}),l.map(S=>f.jsx("option",{value:S.id,children:S.name},S.id))]})]})]}),f.jsx("button",{type:"submit",className:"w-full bg-blue-600 text-white py-2.5 rounded-lg hover:bg-blue-700 font-bold shadow-lg shadow-blue-200 transition",children:"บันทึกข้อมูล"})]})]})})]})}function bN({logs:t}){const e=t||[];return f.jsxs("div",{className:"space-y-6 animate-fade-in",children:[f.jsxs("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:[f.jsx(up,{className:"text-blue-600"})," Activity Logs"]}),f.jsx("div",{className:"bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden",children:e.length>0?f.jsx("div",{className:"overflow-x-auto",children:f.jsxs("table",{className:"w-full text-left border-collapse",children:[f.jsx("thead",{className:"bg-slate-50 border-b border-gray-100 text-xs uppercase text-gray-500 font-bold",children:f.jsxs("tr",{children:[f.jsx("th",{className:"p-4",children:"เวลา"}),f.jsx("th",{className:"p-4",children:"ผู้ใช้งาน"}),f.jsx("th",{className:"p-4",children:"การกระทำ"}),f.jsx("th",{className:"p-4",children:"รายละเอียด"})]})}),f.jsx("tbody",{className:"divide-y divide-gray-50 text-sm",children:e.map((n,r)=>f.jsxs("tr",{className:"hover:bg-slate-50/50 transition",children:[f.jsx("td",{className:"p-4 text-gray-500 text-xs whitespace-nowrap",children:n.timestamp?new Date(n.timestamp.seconds*1e3).toLocaleString("th-TH"):"-"}),f.jsx("td",{className:"p-4 font-bold text-slate-700",children:n.user}),f.jsx("td",{className:"p-4",children:f.jsx("span",{className:"px-2 py-1 rounded bg-blue-50 text-blue-700 text-xs font-bold border border-blue-100",children:n.action})}),f.jsx("td",{className:"p-4 text-gray-600 max-w-xs truncate",title:n.detail,children:n.detail})]},n.id||r))})]})}):f.jsxs("div",{className:"p-12 text-center text-gray-400 flex flex-col items-center gap-3",children:[f.jsx(PE,{size:40,className:"text-gray-200"}),f.jsx("p",{children:"ยังไม่มีประวัติการใช้งาน"})]})})]})}function DN({rules:t,onSave:e,onDelete:n,currentUserRole:r}){const s=t||[],[i,o]=B.useState({condition:"",points:-5}),l=d=>{d.preventDefault(),e(i),o({condition:"",points:-5})},u=["dgm","dm","admin"].includes(r);return f.jsxs("div",{className:"space-y-6 animate-fade-in",children:[f.jsxs("h2",{className:"text-2xl font-bold text-slate-800 flex items-center gap-2",children:[f.jsx(bE,{className:"text-blue-600"})," กฎระเบียบและบทลงโทษ"]}),f.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[f.jsx("div",{className:"lg:col-span-2 space-y-4",children:s.length>0?s.map((d,p)=>f.jsxs("div",{className:"bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center hover:shadow-md transition group",children:[f.jsxs("div",{className:"flex items-start gap-3",children:[f.jsx("div",{className:`p-2 rounded-lg ${d.points>0?"bg-green-100 text-green-600":"bg-red-100 text-red-600"}`,children:d.points>0?f.jsx(aN,{size:20}):f.jsx(gN,{size:20})}),f.jsxs("div",{children:[f.jsx("p",{className:"font-bold text-slate-800",children:d.condition}),f.jsxs("p",{className:"text-xs text-slate-500",children:["ผลกระทบ: ",f.jsxs("span",{className:d.points>0?"text-green-600 font-bold":"text-red-600 font-bold",children:[d.points>0?"+":"",d.points," คะแนน"]})]})]})]}),u&&f.jsx("button",{onClick:()=>n(d.id),className:"p-2 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition",children:f.jsx($u,{size:18})})]},d.id||p)):f.jsx("div",{className:"text-center p-10 text-gray-400 bg-white rounded-xl border border-dashed",children:"ยังไม่มีกฎระเบียบ"})}),u&&f.jsxs("div",{className:"bg-slate-800 text-white p-6 rounded-2xl h-fit shadow-xl",children:[f.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2",children:[f.jsx(jE,{size:18})," เพิ่มกฎระเบียบใหม่"]}),f.jsxs("form",{onSubmit:l,className:"space-y-4",children:[f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-slate-400 mb-1",children:"เงื่อนไข/การกระทำ"}),f.jsx("textarea",{required:!0,rows:"3",className:"w-full bg-slate-700 border-none rounded-lg px-3 py-2 text-white placeholder-slate-500",placeholder:"เช่น มาสายเกิน 15 นาที...",value:i.condition,onChange:d=>o({...i,condition:d.target.value})})]}),f.jsxs("div",{children:[f.jsx("label",{className:"block text-xs font-bold text-slate-400 mb-1",children:"คะแนน (ใส่ลบเพื่อตัดแต้ม)"}),f.jsx("input",{required:!0,type:"number",className:"w-full bg-slate-700 border-none rounded-lg px-3 py-2 text-white placeholder-slate-500",placeholder:"-10",value:i.points,onChange:d=>o({...i,points:parseInt(d.target.value)})})]}),f.jsx("button",{type:"submit",className:"w-full bg-blue-600 hover:bg-blue-500 py-2.5 rounded-lg font-bold transition shadow-lg shadow-blue-900/50",children:"บันทึกกฎระเบียบ"})]})]})]})]})}function ON(){const[t,e]=B.useState(""),[n,r]=B.useState(""),[s,i]=B.useState(!1),[o,l]=B.useState(""),u=async d=>{d.preventDefault(),i(!0),l("");try{await kA(yh,t,n)}catch(p){console.error("Login Failed:",p),p.code==="auth/invalid-credential"||p.code==="auth/user-not-found"||p.code==="auth/wrong-password"?l("อีเมลหรือรหัสผ่านไม่ถูกต้อง"):p.code==="auth/too-many-requests"?l("ล็อกอินผิดหลายครั้ง กรุณารอสักครู่"):l("เกิดข้อผิดพลาดในการเชื่อมต่อ")}finally{i(!1)}};return f.jsx("div",{className:"min-h-screen bg-slate-900 flex items-center justify-center p-4",children:f.jsx("div",{className:"bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col md:flex-row",children:f.jsxs("div",{className:"w-full p-8 md:p-10",children:[f.jsxs("div",{className:"text-center mb-8",children:[f.jsx("h1",{className:"text-2xl font-bold text-slate-800 tracking-tight",children:"TransportOPS"}),f.jsx("p",{className:"text-sm text-slate-500 mt-2",children:"เข้าสู่ระบบเพื่อจัดการงานขนส่ง"})]}),f.jsxs("form",{onSubmit:u,className:"space-y-5",children:[o&&f.jsxs("div",{className:"bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-lg flex items-center gap-2",children:[f.jsx(Z2,{size:16})," ",o]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsx("label",{className:"text-xs font-bold text-slate-700 uppercase tracking-wider",children:"อีเมล"}),f.jsxs("div",{className:"relative",children:[f.jsx(LE,{className:"absolute left-3 top-2.5 text-slate-400",size:18}),f.jsx("input",{type:"email",required:!0,className:"w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm",placeholder:"name@company.com",value:t,onChange:d=>e(d.target.value)})]})]}),f.jsxs("div",{className:"space-y-1.5",children:[f.jsx("label",{className:"text-xs font-bold text-slate-700 uppercase tracking-wider",children:"รหัสผ่าน"}),f.jsxs("div",{className:"relative",children:[f.jsx(uN,{className:"absolute left-3 top-2.5 text-slate-400",size:18}),f.jsx("input",{type:"password",required:!0,className:"w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-sm",placeholder:"••••••••",value:n,onChange:d=>r(d.target.value)})]})]}),f.jsx("button",{type:"submit",disabled:s,className:"w-full bg-slate-800 hover:bg-slate-900 text-white font-bold py-2.5 rounded-lg transition shadow-lg hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:s?f.jsx(ME,{className:"animate-spin",size:20}):"เข้าสู่ระบบ"})]}),f.jsx("p",{className:"mt-8 text-center text-xs text-slate-400",children:"© 2024 Transport Operations System"})]})})})}let MN={data:""},LN=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||MN},VN=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,jN=/\/\*[^]*?\*\/|  +/g,Uy=/\n+/g,Xn=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Xn(o,i):i+"{"+Xn(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Xn(o,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Xn.p?Xn.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},mn={},UE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+UE(t[n]);return e}return t},FN=(t,e,n,r,s)=>{let i=UE(t),o=mn[i]||(mn[i]=(u=>{let d=0,p=11;for(;d<u.length;)p=101*p+u.charCodeAt(d++)>>>0;return"go"+p})(i));if(!mn[o]){let u=i!==t?t:(d=>{let p,m,g=[{}];for(;p=VN.exec(d.replace(jN,""));)p[4]?g.shift():p[3]?(m=p[3].replace(Uy," ").trim(),g.unshift(g[0][m]=g[0][m]||{})):g[0][p[1]]=p[2].replace(Uy," ").trim();return g[0]})(t);mn[o]=Xn(s?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&mn.g?mn.g:null;return n&&(mn.g=mn[o]),((u,d,p,m)=>{m?d.data=d.data.replace(m,u):d.data.indexOf(u)===-1&&(d.data=p?u+d.data:d.data+u)})(mn[o],e,r,l),o},UN=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Xn(l,""):l===!1?"":l}return r+s+(o??"")},"");function Bu(t){let e=this||{},n=t.call?t(e.p):t;return FN(n.unshift?n.raw?UN(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,LN(e.target),e.g,e.o,e.k)}let zE,vh,_h;Bu.bind({g:1});let On=Bu.bind({k:1});function zN(t,e,n,r){Xn.p=e,zE=t,vh=n,_h=r}function Ar(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let l=Object.assign({},i),u=l.className||s.className;n.p=Object.assign({theme:vh&&vh()},l),n.o=/ *go\d+/.test(u),l.className=Bu.apply(n,r)+(u?" "+u:"");let d=t;return t[0]&&(d=l.as||t,delete l.as),_h&&d[0]&&_h(l),zE(d,l)}return s}}var $N=t=>typeof t=="function",nu=(t,e)=>$N(t)?t(e):t,BN=(()=>{let t=0;return()=>(++t).toString()})(),$E=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),HN=20,cp="default",BE=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return BE(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},fl=[],HE={toasts:[],pausedAt:void 0,settings:{toastLimit:HN}},rn={},qE=(t,e=cp)=>{rn[e]=BE(rn[e]||HE,t),fl.forEach(([n,r])=>{n===e&&r(rn[e])})},WE=t=>Object.keys(rn).forEach(e=>qE(t,e)),qN=t=>Object.keys(rn).find(e=>rn[e].toasts.some(n=>n.id===t)),Hu=(t=cp)=>e=>{qE(e,t)},WN={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},GN=(t={},e=cp)=>{let[n,r]=B.useState(rn[e]||HE),s=B.useRef(rn[e]);B.useEffect(()=>(s.current!==rn[e]&&r(rn[e]),fl.push([e,r]),()=>{let o=fl.findIndex(([l])=>l===e);o>-1&&fl.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var l,u,d;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||WN[o.type],style:{...t.style,...(d=t[o.type])==null?void 0:d.style,...o.style}}});return{...n,toasts:i}},KN=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||BN()}),sa=t=>(e,n)=>{let r=KN(e,t,n);return Hu(r.toasterId||qN(r.id))({type:2,toast:r}),r.id},je=(t,e)=>sa("blank")(t,e);je.error=sa("error");je.success=sa("success");je.loading=sa("loading");je.custom=sa("custom");je.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Hu(e)(n):WE(n)};je.dismissAll=t=>je.dismiss(void 0,t);je.remove=(t,e)=>{let n={type:4,toastId:t};e?Hu(e)(n):WE(n)};je.removeAll=t=>je.remove(void 0,t);je.promise=(t,e,n)=>{let r=je.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?nu(e.success,s):void 0;return i?je.success(i,{id:r,...n,...n==null?void 0:n.success}):je.dismiss(r),s}).catch(s=>{let i=e.error?nu(e.error,s):void 0;i?je.error(i,{id:r,...n,...n==null?void 0:n.error}):je.dismiss(r)}),t};var QN=1e3,YN=(t,e="default")=>{let{toasts:n,pausedAt:r}=GN(t,e),s=B.useRef(new Map).current,i=B.useCallback((m,g=QN)=>{if(s.has(m))return;let T=setTimeout(()=>{s.delete(m),o({type:4,toastId:m})},g);s.set(m,T)},[]);B.useEffect(()=>{if(r)return;let m=Date.now(),g=n.map(T=>{if(T.duration===1/0)return;let I=(T.duration||0)+T.pauseDuration-(m-T.createdAt);if(I<0){T.visible&&je.dismiss(T.id);return}return setTimeout(()=>je.dismiss(T.id,e),I)});return()=>{g.forEach(T=>T&&clearTimeout(T))}},[n,r,e]);let o=B.useCallback(Hu(e),[e]),l=B.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=B.useCallback((m,g)=>{o({type:1,toast:{id:m,height:g}})},[o]),d=B.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),p=B.useCallback((m,g)=>{let{reverseOrder:T=!1,gutter:I=8,defaultPosition:N}=g||{},M=n.filter(R=>(R.position||N)===(m.position||N)&&R.height),_=M.findIndex(R=>R.id===m.id),x=M.filter((R,O)=>O<_&&R.visible).length;return M.filter(R=>R.visible).slice(...T?[x+1]:[0,x]).reduce((R,O)=>R+(O.height||0)+I,0)},[n]);return B.useEffect(()=>{n.forEach(m=>{if(m.dismissed)i(m.id,m.removeDelay);else{let g=s.get(m.id);g&&(clearTimeout(g),s.delete(m.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:d,calculateOffset:p}}},XN=On`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,JN=On`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,ZN=On`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,eP=Ar("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${XN} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${JN} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${ZN} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,tP=On`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,nP=Ar("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${tP} 1s linear infinite;
`,rP=On`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,sP=On`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,iP=Ar("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${rP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${sP} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,oP=Ar("div")`
  position: absolute;
`,aP=Ar("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,lP=On`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,uP=Ar("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${lP} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,cP=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?B.createElement(uP,null,e):e:n==="blank"?null:B.createElement(aP,null,B.createElement(nP,{...r}),n!=="loading"&&B.createElement(oP,null,n==="error"?B.createElement(eP,{...r}):B.createElement(iP,{...r})))},dP=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,hP=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,fP="0%{opacity:0;} 100%{opacity:1;}",pP="0%{opacity:1;} 100%{opacity:0;}",mP=Ar("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,gP=Ar("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,yP=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=$E()?[fP,pP]:[dP(n),hP(n)];return{animation:e?`${On(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${On(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},vP=B.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?yP(t.position||e||"top-center",t.visible):{opacity:0},i=B.createElement(cP,{toast:t}),o=B.createElement(gP,{...t.ariaProps},nu(t.message,t));return B.createElement(mP,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):B.createElement(B.Fragment,null,i,o))});zN(B.createElement);var _P=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=B.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return B.createElement("div",{ref:i,className:e,style:n},s)},wP=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:$E()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},EP=Bu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,qa=16,TP=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:d}=YN(n,i);return B.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:qa,left:qa,right:qa,bottom:qa,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},u.map(p=>{let m=p.position||e,g=d.calculateOffset(p,{reverseOrder:t,gutter:r,defaultPosition:e}),T=wP(m,g);return B.createElement(_P,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?EP:"",style:T},p.type==="custom"?nu(p.message,p):s?s(p):B.createElement(vP,{toast:p,position:m}))}))},zy;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(zy||(zy={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $y;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})($y||($y={}));var By;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(By||(By={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy=["user","model","function","system"];var qy;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(qy||(qy={}));var Wy;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(Wy||(Wy={}));var Gy;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(Gy||(Gy={}));var Ky;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(Ky||(Ky={}));var ao;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(ao||(ao={}));var Qy;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(Qy||(Qy={}));var Yy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(Yy||(Yy={}));var Xy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(Xy||(Xy={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class ms extends lt{constructor(e,n){super(e),this.response=n}}class GE extends lt{constructor(e,n,r,s){super(e),this.status=n,this.statusText=r,this.errorDetails=s}}class fr extends lt{}class KE extends lt{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IP="https://generativelanguage.googleapis.com",xP="v1beta",SP="0.24.1",AP="genai-js";var ns;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(ns||(ns={}));class CP{constructor(e,n,r,s,i){this.model=e,this.task=n,this.apiKey=r,this.stream=s,this.requestOptions=i}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||xP;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||IP}/${r}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function RP(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${AP}/${SP}`),e.join(" ")}async function kP(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",RP(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(s){throw new fr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${s.message}`)}for(const[s,i]of r.entries()){if(s==="x-goog-api-key")throw new fr(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new fr(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function NP(t,e,n,r,s,i){const o=new CP(t,e,n,r,i);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},OP(i)),{method:"POST",headers:await kP(o),body:s})}}async function ia(t,e,n,r,s,i={},o=fetch){const{url:l,fetchOptions:u}=await NP(t,e,n,r,s,i);return PP(l,u,o)}async function PP(t,e,n=fetch){let r;try{r=await n(t,e)}catch(s){bP(s,t)}return r.ok||await DP(r,t),r}function bP(t,e){let n=t;throw n.name==="AbortError"?(n=new KE(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof GE||t instanceof fr||(n=new lt(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function DP(t,e){let n="",r;try{const s=await t.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,r=s.error.details)}catch{}throw new GE(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function OP(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),pl(t.candidates[0]))throw new ms(`${Hn(t)}`,t);return MP(t)}else if(t.promptFeedback)throw new ms(`Text not available. ${Hn(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),pl(t.candidates[0]))throw new ms(`${Hn(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Jy(t)[0]}else if(t.promptFeedback)throw new ms(`Function call not available. ${Hn(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),pl(t.candidates[0]))throw new ms(`${Hn(t)}`,t);return Jy(t)}else if(t.promptFeedback)throw new ms(`Function call not available. ${Hn(t)}`,t)},t}function MP(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.text&&i.push(o.text),o.executableCode&&i.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&i.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function Jy(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.functionCall&&i.push(o.functionCall);if(i.length>0)return i}const LP=[ao.RECITATION,ao.SAFETY,ao.LANGUAGE];function pl(t){return!!t.finishReason&&LP.includes(t.finishReason)}function Hn(t){var e,n,r;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const i=t.candidates[0];pl(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function Lo(t){return this instanceof Lo?(this.v=t,this):new Lo(t)}function VP(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),s,i=[];return s={},o("next"),o("throw"),o("return"),s[Symbol.asyncIterator]=function(){return this},s;function o(g){r[g]&&(s[g]=function(T){return new Promise(function(I,N){i.push([g,T,I,N])>1||l(g,T)})})}function l(g,T){try{u(r[g](T))}catch(I){m(i[0][3],I)}}function u(g){g.value instanceof Lo?Promise.resolve(g.value.v).then(d,p):m(i[0][2],g)}function d(g){l("next",g)}function p(g){l("throw",g)}function m(g,T){g(T),i.shift(),i.length&&l(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zy=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function jP(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=zP(e),[r,s]=n.tee();return{stream:UP(r),response:FP(s)}}async function FP(t){const e=[],n=t.getReader();for(;;){const{done:r,value:s}=await n.read();if(r)return dp($P(e));e.push(s)}}function UP(t){return VP(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:s}=yield Lo(n.read());if(s)break;yield yield Lo(dp(r))}})}function zP(t){const e=t.getReader();return new ReadableStream({start(r){let s="";return i();function i(){return e.read().then(({value:o,done:l})=>{if(l){if(s.trim()){r.error(new lt("Failed to parse stream"));return}r.close();return}s+=o;let u=s.match(Zy),d;for(;u;){try{d=JSON.parse(u[1])}catch{r.error(new lt(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(d),s=s.substring(u[0].length),u=s.match(Zy)}return i()}).catch(o=>{let l=o;throw l.stack=o.stack,l.name==="AbortError"?l=new KE("Request aborted when reading from the stream"):l=new lt("Error reading from the stream"),l})}}})}function $P(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates){let s=0;for(const i of r.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const l of i.content.parts)l.text&&(o.text=l.text),l.functionCall&&(o.functionCall=l.functionCall),l.executableCode&&(o.executableCode=l.executableCode),l.codeExecutionResult&&(o.codeExecutionResult=l.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}s++}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QE(t,e,n,r){const s=await ia(e,ns.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return jP(s)}async function YE(t,e,n,r){const i=await(await ia(e,ns.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:dp(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XE(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function Vo(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return BP(e)}function BP(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),r=!0);if(r&&s)throw new lt("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!s)throw new lt("No content is provided for sending chat message.");return r?e:n}function HP(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new fr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(s)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const i=Vo(t);r.contents=[i]}return{generateContentRequest:r}}function ev(t){let e;return t.contents?e=t:e={contents:[Vo(t)]},t.systemInstruction&&(e.systemInstruction=XE(t.systemInstruction)),e}function qP(t){return typeof t=="string"||Array.isArray(t)?{content:Vo(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tv=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],WP={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function GP(t){let e=!1;for(const n of t){const{role:r,parts:s}=n;if(!e&&r!=="user")throw new lt(`First content should be with role 'user', got ${r}`);if(!Hy.includes(r))throw new lt(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Hy)}`);if(!Array.isArray(s))throw new lt("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new lt("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of s)for(const u of tv)u in l&&(i[u]+=1);const o=WP[r];for(const l of tv)if(!o.includes(l)&&i[l]>0)throw new lt(`Content with role '${r}' can't contain '${l}' part`);e=!0}}function nv(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const r of n.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rv="SILENT_ERROR";class KP{constructor(e,n,r,s={}){this.model=n,this.params=r,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(GP(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,s,i,o,l,u;await this._sendPromise;const d=Vo(e),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,d]},m=Object.assign(Object.assign({},this._requestOptions),n);let g;return this._sendPromise=this._sendPromise.then(()=>YE(this._apiKey,this.model,p,m)).then(T=>{var I;if(nv(T.response)){this._history.push(d);const N=Object.assign({parts:[],role:"model"},(I=T.response.candidates)===null||I===void 0?void 0:I[0].content);this._history.push(N)}else{const N=Hn(T.response);N&&console.warn(`sendMessage() was unsuccessful. ${N}. Inspect response object for details.`)}g=T}).catch(T=>{throw this._sendPromise=Promise.resolve(),T}),await this._sendPromise,g}async sendMessageStream(e,n={}){var r,s,i,o,l,u;await this._sendPromise;const d=Vo(e),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,d]},m=Object.assign(Object.assign({},this._requestOptions),n),g=QE(this._apiKey,this.model,p,m);return this._sendPromise=this._sendPromise.then(()=>g).catch(T=>{throw new Error(rv)}).then(T=>T.response).then(T=>{if(nv(T)){this._history.push(d);const I=Object.assign({},T.candidates[0].content);I.role||(I.role="model"),this._history.push(I)}else{const I=Hn(T);I&&console.warn(`sendMessageStream() was unsuccessful. ${I}. Inspect response object for details.`)}}).catch(T=>{T.message!==rv&&console.error(T)}),g}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QP(t,e,n,r){return(await ia(e,ns.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YP(t,e,n,r){return(await ia(e,ns.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function XP(t,e,n,r){const s=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await ia(e,ns.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),r)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=XE(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const s=ev(e),i=Object.assign(Object.assign({},this._requestOptions),n);return YE(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}async generateContentStream(e,n={}){var r;const s=ev(e),i=Object.assign(Object.assign({},this._requestOptions),n);return QE(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}startChat(e){var n;return new KP(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=HP(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return QP(this.apiKey,this.model,r,s)}async embedContent(e,n={}){const r=qP(e),s=Object.assign(Object.assign({},this._requestOptions),n);return YP(this.apiKey,this.model,r,s)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return XP(this.apiKey,this.model,e,r)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new lt("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new sv(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new fr("Cached content must contain a `name` field.");if(!e.model)throw new fr("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const o of s)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===u)continue}throw new fr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new sv(this.apiKey,i,r)}}let wh=null;try{wh=new JP("AIzaSyDFGlm4ixlJ34vg9XT_otqIeKgZT5bmBu8")}catch{}function ZP(){var me,_t;const[t,e]=B.useState(null),[n,r]=B.useState(null),[s,i]=B.useState("dashboard"),[o,l]=B.useState(!0),[u,d]=B.useState(!1),p=Y2(t||n)||{},{members:m=[],tasks:g=[],logs:T=[],actionLogs:I=[],rules:N=[],manualScores:M=[],roles:_={},handleTaskToggle:x,handleUpdateTaskStatus:R,handleAddTask:O,handleEditTask:U,handleDeleteTask:F,handleAddMember:w,handleEditMember:v,handleDeleteMember:E,handleAddLog:A,handleResolveLog:S,handleDeleteLog:k,handleSaveRule:C,handleDeleteRule:Ne,handleSaveManualScore:Y,handleDeleteManualScore:ht,handleSaveRole:H}=p;B.useEffect(()=>{const fe=bA(yh,Ce=>e(Ce));return()=>fe()},[]);const D=async()=>{await DA(yh),r(null)},z=fe=>je.success(fe),G=fe=>(...Ce)=>{if(fe)return fe(...Ce,t||n)},re=(_==null?void 0:_[(me=t||n)==null?void 0:me.email])||"dgm",ce=async fe=>{if(!wh)return alert("API Key Missing");d(!0);try{const Je=await wh.getGenerativeModel({model:"gemini-pro"}).generateContent(`แนะนำวิธีแก้ปัญหา: ${fe.topic} ${fe.detail}`);alert(`AI Suggestion:
${Je.response.text()}`)}catch{alert("AI Error")}finally{d(!1)}};return!t&&!n?f.jsx(ON,{onLogin:fe=>r(fe)}):f.jsxs("div",{className:"flex h-screen bg-gray-50 font-sans text-gray-900 overflow-hidden",children:[f.jsx(TP,{position:"top-right"}),f.jsx("div",{className:`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 lg:static lg:translate-x-0 ${o?"translate-x-0":"-translate-x-full"}`,children:f.jsx(SN,{activeTab:s,setActiveTab:fe=>{i(fe),l(!1)},user:t||n,role:re,onLogout:D,members:m})}),f.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",children:[f.jsxs("div",{className:"lg:hidden bg-white p-4 shadow-sm flex items-center justify-between",children:[f.jsx("span",{className:"font-bold text-lg text-slate-800",children:"TransportOps"}),f.jsx("button",{onClick:()=>l(!o),className:"p-2 text-gray-600",children:f.jsx(hN,{})})]}),f.jsx("div",{className:"flex-1 overflow-auto p-4 lg:p-8",children:f.jsxs("div",{className:"max-w-7xl mx-auto space-y-6",children:[s==="dashboard"&&f.jsx(AN,{members:m||[],tasks:g||[],logs:T||[]}),s==="team"&&f.jsx(CN,{members:m||[],onAdd:G(w),onEdit:G(v),onDelete:G(E),currentUserRole:re}),s==="dept"&&f.jsx(RN,{members:m||[],tasks:g||[],onTaskToggle:G(x)}),s==="scores"&&f.jsx(kN,{members:m||[],manualScores:M||[],rules:N||[],tasks:g||[],onAddScore:G(Y),onDeleteScore:G(ht),currentUserRole:re}),s==="problems"&&f.jsx(NN,{logs:T||[],onAddLog:G(A),onResolveLog:G(S),onDeleteLog:G(k),currentDate:new Date().toLocaleDateString("th-TH"),askAiSolution:ce,showToast:z,userEmail:(_t=t||n)==null?void 0:_t.email,currentUserRole:re,aiLoading:u}),s==="assign"&&f.jsx(PN,{members:m||[],tasks:g||[],onAddTask:G(O),onEditTask:G(U),onDeleteTask:G(F),onUpdateStatus:G(R),currentUserRole:re}),s==="action_logs"&&f.jsx(bN,{logs:I||[]}),s==="rules"&&f.jsx(DN,{rules:N||[],onSave:G(C),onDelete:G(Ne),currentUserRole:re,roles:_||{},onSaveRole:G(H)})]})})]}),o&&f.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",onClick:()=>l(!1)})]})}Xc.createRoot(document.getElementById("root")).render(f.jsx(BT.StrictMode,{children:f.jsx(ZP,{})}));
