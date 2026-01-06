(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function fT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wy={exports:{}},Xl={},Gy={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Po=Symbol.for("react.element"),pT=Symbol.for("react.portal"),mT=Symbol.for("react.fragment"),gT=Symbol.for("react.strict_mode"),yT=Symbol.for("react.profiler"),vT=Symbol.for("react.provider"),_T=Symbol.for("react.context"),wT=Symbol.for("react.forward_ref"),ET=Symbol.for("react.suspense"),TT=Symbol.for("react.memo"),IT=Symbol.for("react.lazy"),tm=Symbol.iterator;function xT(t){return t===null||typeof t!="object"?null:(t=tm&&t[tm]||t["@@iterator"],typeof t=="function"?t:null)}var Ky={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qy=Object.assign,Yy={};function ti(t,e,n){this.props=t,this.context=e,this.refs=Yy,this.updater=n||Ky}ti.prototype.isReactComponent={};ti.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ti.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Xy(){}Xy.prototype=ti.prototype;function ch(t,e,n){this.props=t,this.context=e,this.refs=Yy,this.updater=n||Ky}var dh=ch.prototype=new Xy;dh.constructor=ch;Qy(dh,ti.prototype);dh.isPureReactComponent=!0;var nm=Array.isArray,Jy=Object.prototype.hasOwnProperty,hh={current:null},Zy={key:!0,ref:!0,__self:!0,__source:!0};function ev(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)Jy.call(e,r)&&!Zy.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Po,type:t,key:i,ref:o,props:s,_owner:hh.current}}function ST(t,e){return{$$typeof:Po,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Po}function AT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var rm=/\/+/g;function oc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AT(""+t.key):e.toString(36)}function za(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Po:case pT:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+oc(o,0):r,nm(s)?(n="",t!=null&&(n=t.replace(rm,"$&/")+"/"),za(s,e,n,"",function(d){return d})):s!=null&&(fh(s)&&(s=ST(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(rm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",nm(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+oc(i,l);o+=za(i,e,n,u,s)}else if(u=xT(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+oc(i,l++),o+=za(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ya(t,e,n){if(t==null)return t;var r=[],s=0;return za(t,r,"","",function(i){return e.call(n,i,s++)}),r}function kT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gt={current:null},$a={transition:null},CT={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:$a,ReactCurrentOwner:hh};function tv(){throw Error("act(...) is not supported in production builds of React.")}te.Children={map:ya,forEach:function(t,e,n){ya(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ya(t,function(){e++}),e},toArray:function(t){return ya(t,function(e){return e})||[]},only:function(t){if(!fh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};te.Component=ti;te.Fragment=mT;te.Profiler=yT;te.PureComponent=ch;te.StrictMode=gT;te.Suspense=ET;te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=CT;te.act=tv;te.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Qy({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=hh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Jy.call(e,u)&&!Zy.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Po,type:t.type,key:s,ref:i,props:r,_owner:o}};te.createContext=function(t){return t={$$typeof:_T,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:vT,_context:t},t.Consumer=t};te.createElement=ev;te.createFactory=function(t){var e=ev.bind(null,t);return e.type=t,e};te.createRef=function(){return{current:null}};te.forwardRef=function(t){return{$$typeof:wT,render:t}};te.isValidElement=fh;te.lazy=function(t){return{$$typeof:IT,_payload:{_status:-1,_result:t},_init:kT}};te.memo=function(t,e){return{$$typeof:TT,type:t,compare:e===void 0?null:e}};te.startTransition=function(t){var e=$a.transition;$a.transition={};try{t()}finally{$a.transition=e}};te.unstable_act=tv;te.useCallback=function(t,e){return gt.current.useCallback(t,e)};te.useContext=function(t){return gt.current.useContext(t)};te.useDebugValue=function(){};te.useDeferredValue=function(t){return gt.current.useDeferredValue(t)};te.useEffect=function(t,e){return gt.current.useEffect(t,e)};te.useId=function(){return gt.current.useId()};te.useImperativeHandle=function(t,e,n){return gt.current.useImperativeHandle(t,e,n)};te.useInsertionEffect=function(t,e){return gt.current.useInsertionEffect(t,e)};te.useLayoutEffect=function(t,e){return gt.current.useLayoutEffect(t,e)};te.useMemo=function(t,e){return gt.current.useMemo(t,e)};te.useReducer=function(t,e,n){return gt.current.useReducer(t,e,n)};te.useRef=function(t){return gt.current.useRef(t)};te.useState=function(t){return gt.current.useState(t)};te.useSyncExternalStore=function(t,e,n){return gt.current.useSyncExternalStore(t,e,n)};te.useTransition=function(){return gt.current.useTransition()};te.version="18.3.1";Gy.exports=te;var q=Gy.exports;const RT=fT(q);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var NT=q,PT=Symbol.for("react.element"),bT=Symbol.for("react.fragment"),DT=Object.prototype.hasOwnProperty,OT=NT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,VT={key:!0,ref:!0,__self:!0,__source:!0};function nv(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DT.call(e,r)&&!VT.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:PT,type:t,key:i,ref:o,props:s,_owner:OT.current}}Xl.Fragment=bT;Xl.jsx=nv;Xl.jsxs=nv;Wy.exports=Xl;var p=Wy.exports,Bc={},rv={exports:{}},Dt={},sv={exports:{}},iv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Q){var G=$.length;$.push(Q);e:for(;0<G;){var ae=G-1>>>1,ce=$[ae];if(0<s(ce,Q))$[ae]=Q,$[G]=ce,G=ae;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Q=$[0],G=$.pop();if(G!==Q){$[0]=G;e:for(var ae=0,ce=$.length,ge=ce>>>1;ae<ge;){var vt=2*(ae+1)-1,ee=$[vt],se=vt+1,Vt=$[se];if(0>s(ee,G))se<ce&&0>s(Vt,ee)?($[ae]=Vt,$[se]=G,ae=se):($[ae]=ee,$[vt]=G,ae=vt);else if(se<ce&&0>s(Vt,G))$[ae]=Vt,$[se]=G,ae=se;else break e}}return Q}function s($,Q){var G=$.sortIndex-Q.sortIndex;return G!==0?G:$.id-Q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],f=1,m=null,g=3,_=!1,x=!1,P=!1,O=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var Q=n(d);Q!==null;){if(Q.callback===null)r(d);else if(Q.startTime<=$)r(d),Q.sortIndex=Q.expirationTime,e(u,Q);else break;Q=n(d)}}function D($){if(P=!1,k($),!x)if(n(u)!==null)x=!0,pe(U);else{var Q=n(d);Q!==null&&Ne(D,Q.startTime-$)}}function U($,Q){x=!1,P&&(P=!1,T(v),v=-1),_=!0;var G=g;try{for(k(Q),m=n(u);m!==null&&(!(m.expirationTime>Q)||$&&!C());){var ae=m.callback;if(typeof ae=="function"){m.callback=null,g=m.priorityLevel;var ce=ae(m.expirationTime<=Q);Q=t.unstable_now(),typeof ce=="function"?m.callback=ce:m===n(u)&&r(u),k(Q)}else r(u);m=n(u)}if(m!==null)var ge=!0;else{var vt=n(d);vt!==null&&Ne(D,vt.startTime-Q),ge=!1}return ge}finally{m=null,g=G,_=!1}}var j=!1,I=null,v=-1,w=5,S=-1;function C(){return!(t.unstable_now()-S<w)}function R(){if(I!==null){var $=t.unstable_now();S=$;var Q=!0;try{Q=I(!0,$)}finally{Q?A():(j=!1,I=null)}}else j=!1}var A;if(typeof E=="function")A=function(){E(R)};else if(typeof MessageChannel<"u"){var Ue=new MessageChannel,F=Ue.port2;Ue.port1.onmessage=R,A=function(){F.postMessage(null)}}else A=function(){O(R,0)};function pe($){I=$,j||(j=!0,A())}function Ne($,Q){v=O(function(){$(t.unstable_now())},Q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){x||_||(x=!0,pe(U))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(g){case 1:case 2:case 3:var Q=3;break;default:Q=g}var G=g;g=Q;try{return $()}finally{g=G}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var G=g;g=$;try{return Q()}finally{g=G}},t.unstable_scheduleCallback=function($,Q,G){var ae=t.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?ae+G:ae):G=ae,$){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=G+ce,$={id:f++,callback:Q,priorityLevel:$,startTime:G,expirationTime:ce,sortIndex:-1},G>ae?($.sortIndex=G,e(d,$),n(u)===null&&$===n(d)&&(P?(T(v),v=-1):P=!0,Ne(D,G-ae))):($.sortIndex=ce,e(u,$),x||_||(x=!0,pe(U))),$},t.unstable_shouldYield=C,t.unstable_wrapCallback=function($){var Q=g;return function(){var G=g;g=Q;try{return $.apply(this,arguments)}finally{g=G}}}})(iv);sv.exports=iv;var MT=sv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LT=q,bt=MT;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ov=new Set,to={};function ts(t,e){Us(t,e),Us(t+"Capture",e)}function Us(t,e){for(to[t]=e,t=0;t<e.length;t++)ov.add(e[t])}var In=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=Object.prototype.hasOwnProperty,jT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,sm={},im={};function FT(t){return Hc.call(im,t)?!0:Hc.call(sm,t)?!1:jT.test(t)?im[t]=!0:(sm[t]=!0,!1)}function UT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zT(t,e,n,r){if(e===null||typeof e>"u"||UT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function yt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var Je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Je[t]=new yt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Je[e]=new yt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Je[t]=new yt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Je[t]=new yt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Je[t]=new yt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Je[t]=new yt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Je[t]=new yt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Je[t]=new yt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Je[t]=new yt(t,5,!1,t.toLowerCase(),null,!1,!1)});var ph=/[\-:]([a-z])/g;function mh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ph,mh);Je[e]=new yt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ph,mh);Je[e]=new yt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ph,mh);Je[e]=new yt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Je[t]=new yt(t,1,!1,t.toLowerCase(),null,!1,!1)});Je.xlinkHref=new yt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Je[t]=new yt(t,1,!1,t.toLowerCase(),null,!0,!0)});function gh(t,e,n,r){var s=Je.hasOwnProperty(e)?Je[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zT(e,n,s,r)&&(n=null),r||s===null?FT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Dn=LT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),gs=Symbol.for("react.portal"),ys=Symbol.for("react.fragment"),yh=Symbol.for("react.strict_mode"),qc=Symbol.for("react.profiler"),av=Symbol.for("react.provider"),lv=Symbol.for("react.context"),vh=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Gc=Symbol.for("react.suspense_list"),_h=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),uv=Symbol.for("react.offscreen"),om=Symbol.iterator;function Ii(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var Ae=Object.assign,ac;function bi(t){if(ac===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ac=e&&e[1]||""}return`
`+ac+t}var lc=!1;function uc(t,e){if(!t||lc)return"";lc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{lc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?bi(t):""}function $T(t){switch(t.tag){case 5:return bi(t.type);case 16:return bi("Lazy");case 13:return bi("Suspense");case 19:return bi("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function Kc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ys:return"Fragment";case gs:return"Portal";case qc:return"Profiler";case yh:return"StrictMode";case Wc:return"Suspense";case Gc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case lv:return(t.displayName||"Context")+".Consumer";case av:return(t._context.displayName||"Context")+".Provider";case vh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _h:return e=t.displayName||null,e!==null?e:Kc(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return Kc(t(e))}catch{}}return null}function BT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kc(e);case 8:return e===yh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function fr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function HT(t){var e=cv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function _a(t){t._valueTracker||(t._valueTracker=HT(t))}function dv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=cv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Qc(t,e){var n=e.checked;return Ae({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function am(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=fr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function hv(t,e){e=e.checked,e!=null&&gh(t,"checked",e,!1)}function Yc(t,e){hv(t,e);var n=fr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xc(t,e.type,fr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function lm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xc(t,e,n){(e!=="number"||dl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Di=Array.isArray;function Ns(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+fr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Jc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return Ae({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function um(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(Di(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:fr(n)}}function fv(t,e){var n=fr(e.value),r=fr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function cm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function pv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Zc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?pv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wa,mv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(wa=wa||document.createElement("div"),wa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function no(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qT=["Webkit","ms","Moz","O"];Object.keys(Fi).forEach(function(t){qT.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fi[e]=Fi[t]})});function gv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fi.hasOwnProperty(t)&&Fi[t]?(""+e).trim():e+"px"}function yv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=gv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var WT=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ed(t,e){if(e){if(WT[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function td(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var nd=null;function wh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rd=null,Ps=null,bs=null;function dm(t){if(t=Oo(t)){if(typeof rd!="function")throw Error(L(280));var e=t.stateNode;e&&(e=nu(e),rd(t.stateNode,t.type,e))}}function vv(t){Ps?bs?bs.push(t):bs=[t]:Ps=t}function _v(){if(Ps){var t=Ps,e=bs;if(bs=Ps=null,dm(t),e)for(t=0;t<e.length;t++)dm(e[t])}}function wv(t,e){return t(e)}function Ev(){}var cc=!1;function Tv(t,e,n){if(cc)return t(e,n);cc=!0;try{return wv(t,e,n)}finally{cc=!1,(Ps!==null||bs!==null)&&(Ev(),_v())}}function ro(t,e){var n=t.stateNode;if(n===null)return null;var r=nu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var sd=!1;if(In)try{var xi={};Object.defineProperty(xi,"passive",{get:function(){sd=!0}}),window.addEventListener("test",xi,xi),window.removeEventListener("test",xi,xi)}catch{sd=!1}function GT(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var Ui=!1,hl=null,fl=!1,id=null,KT={onError:function(t){Ui=!0,hl=t}};function QT(t,e,n,r,s,i,o,l,u){Ui=!1,hl=null,GT.apply(KT,arguments)}function YT(t,e,n,r,s,i,o,l,u){if(QT.apply(this,arguments),Ui){if(Ui){var d=hl;Ui=!1,hl=null}else throw Error(L(198));fl||(fl=!0,id=d)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Iv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hm(t){if(ns(t)!==t)throw Error(L(188))}function XT(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return hm(s),t;if(i===r)return hm(s),e;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function xv(t){return t=XT(t),t!==null?Sv(t):null}function Sv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sv(t);if(e!==null)return e;t=t.sibling}return null}var Av=bt.unstable_scheduleCallback,fm=bt.unstable_cancelCallback,JT=bt.unstable_shouldYield,ZT=bt.unstable_requestPaint,be=bt.unstable_now,eI=bt.unstable_getCurrentPriorityLevel,Eh=bt.unstable_ImmediatePriority,kv=bt.unstable_UserBlockingPriority,pl=bt.unstable_NormalPriority,tI=bt.unstable_LowPriority,Cv=bt.unstable_IdlePriority,Jl=null,rn=null;function nI(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Jl,t,void 0,(t.current.flags&128)===128)}catch{}}var Kt=Math.clz32?Math.clz32:iI,rI=Math.log,sI=Math.LN2;function iI(t){return t>>>=0,t===0?32:31-(rI(t)/sI|0)|0}var Ea=64,Ta=4194304;function Oi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Oi(l):(i&=o,i!==0&&(r=Oi(i)))}else o=n&~s,o!==0?r=Oi(o):i!==0&&(r=Oi(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Kt(e),s=1<<n,r|=t[n],e&=~s;return r}function oI(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aI(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Kt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=oI(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function od(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Rv(){var t=Ea;return Ea<<=1,!(Ea&4194240)&&(Ea=64),t}function dc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function bo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Kt(e),t[e]=n}function lI(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Kt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Th(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Kt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var de=0;function Nv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Pv,Ih,bv,Dv,Ov,ad=!1,Ia=[],tr=null,nr=null,rr=null,so=new Map,io=new Map,Hn=[],uI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pm(t,e){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":so.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":io.delete(e.pointerId)}}function Si(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=Oo(e),e!==null&&Ih(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function cI(t,e,n,r,s){switch(e){case"focusin":return tr=Si(tr,t,e,n,r,s),!0;case"dragenter":return nr=Si(nr,t,e,n,r,s),!0;case"mouseover":return rr=Si(rr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return so.set(i,Si(so.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,io.set(i,Si(io.get(i)||null,t,e,n,r,s)),!0}return!1}function Vv(t){var e=Dr(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=Iv(n),e!==null){t.blockedOn=e,Ov(t.priority,function(){bv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ld(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);nd=r,n.target.dispatchEvent(r),nd=null}else return e=Oo(n),e!==null&&Ih(e),t.blockedOn=n,!1;e.shift()}return!0}function mm(t,e,n){Ba(t)&&n.delete(e)}function dI(){ad=!1,tr!==null&&Ba(tr)&&(tr=null),nr!==null&&Ba(nr)&&(nr=null),rr!==null&&Ba(rr)&&(rr=null),so.forEach(mm),io.forEach(mm)}function Ai(t,e){t.blockedOn===e&&(t.blockedOn=null,ad||(ad=!0,bt.unstable_scheduleCallback(bt.unstable_NormalPriority,dI)))}function oo(t){function e(s){return Ai(s,t)}if(0<Ia.length){Ai(Ia[0],t);for(var n=1;n<Ia.length;n++){var r=Ia[n];r.blockedOn===t&&(r.blockedOn=null)}}for(tr!==null&&Ai(tr,t),nr!==null&&Ai(nr,t),rr!==null&&Ai(rr,t),so.forEach(e),io.forEach(e),n=0;n<Hn.length;n++)r=Hn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Hn.length&&(n=Hn[0],n.blockedOn===null);)Vv(n),n.blockedOn===null&&Hn.shift()}var Ds=Dn.ReactCurrentBatchConfig,gl=!0;function hI(t,e,n,r){var s=de,i=Ds.transition;Ds.transition=null;try{de=1,xh(t,e,n,r)}finally{de=s,Ds.transition=i}}function fI(t,e,n,r){var s=de,i=Ds.transition;Ds.transition=null;try{de=4,xh(t,e,n,r)}finally{de=s,Ds.transition=i}}function xh(t,e,n,r){if(gl){var s=ld(t,e,n,r);if(s===null)Ec(t,e,r,yl,n),pm(t,r);else if(cI(s,t,e,n,r))r.stopPropagation();else if(pm(t,r),e&4&&-1<uI.indexOf(t)){for(;s!==null;){var i=Oo(s);if(i!==null&&Pv(i),i=ld(t,e,n,r),i===null&&Ec(t,e,r,yl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Ec(t,e,r,null,n)}}var yl=null;function ld(t,e,n,r){if(yl=null,t=wh(r),t=Dr(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Iv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return yl=t,null}function Mv(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eI()){case Eh:return 1;case kv:return 4;case pl:case tI:return 16;case Cv:return 536870912;default:return 16}default:return 16}}var Xn=null,Sh=null,Ha=null;function Lv(){if(Ha)return Ha;var t,e=Sh,n=e.length,r,s="value"in Xn?Xn.value:Xn.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ha=s.slice(t,1<r?1-r:void 0)}function qa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function gm(){return!1}function Ot(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?xa:gm,this.isPropagationStopped=gm,this}return Ae(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var ni={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ah=Ot(ni),Do=Ae({},ni,{view:0,detail:0}),pI=Ot(Do),hc,fc,ki,Zl=Ae({},Do,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ki&&(ki&&t.type==="mousemove"?(hc=t.screenX-ki.screenX,fc=t.screenY-ki.screenY):fc=hc=0,ki=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:fc}}),ym=Ot(Zl),mI=Ae({},Zl,{dataTransfer:0}),gI=Ot(mI),yI=Ae({},Do,{relatedTarget:0}),pc=Ot(yI),vI=Ae({},ni,{animationName:0,elapsedTime:0,pseudoElement:0}),_I=Ot(vI),wI=Ae({},ni,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),EI=Ot(wI),TI=Ae({},ni,{data:0}),vm=Ot(TI),II={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xI={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SI={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AI(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SI[t])?!!e[t]:!1}function kh(){return AI}var kI=Ae({},Do,{key:function(t){if(t.key){var e=II[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=qa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xI[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kh,charCode:function(t){return t.type==="keypress"?qa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),CI=Ot(kI),RI=Ae({},Zl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_m=Ot(RI),NI=Ae({},Do,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kh}),PI=Ot(NI),bI=Ae({},ni,{propertyName:0,elapsedTime:0,pseudoElement:0}),DI=Ot(bI),OI=Ae({},Zl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),VI=Ot(OI),MI=[9,13,27,32],Ch=In&&"CompositionEvent"in window,zi=null;In&&"documentMode"in document&&(zi=document.documentMode);var LI=In&&"TextEvent"in window&&!zi,jv=In&&(!Ch||zi&&8<zi&&11>=zi),wm=" ",Em=!1;function Fv(t,e){switch(t){case"keyup":return MI.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Uv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var vs=!1;function jI(t,e){switch(t){case"compositionend":return Uv(e);case"keypress":return e.which!==32?null:(Em=!0,wm);case"textInput":return t=e.data,t===wm&&Em?null:t;default:return null}}function FI(t,e){if(vs)return t==="compositionend"||!Ch&&Fv(t,e)?(t=Lv(),Ha=Sh=Xn=null,vs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return jv&&e.locale!=="ko"?null:e.data;default:return null}}var UI={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UI[t.type]:e==="textarea"}function zv(t,e,n,r){vv(r),e=vl(e,"onChange"),0<e.length&&(n=new Ah("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var $i=null,ao=null;function zI(t){Jv(t,0)}function eu(t){var e=Es(t);if(dv(e))return t}function $I(t,e){if(t==="change")return e}var $v=!1;if(In){var mc;if(In){var gc="oninput"in document;if(!gc){var Im=document.createElement("div");Im.setAttribute("oninput","return;"),gc=typeof Im.oninput=="function"}mc=gc}else mc=!1;$v=mc&&(!document.documentMode||9<document.documentMode)}function xm(){$i&&($i.detachEvent("onpropertychange",Bv),ao=$i=null)}function Bv(t){if(t.propertyName==="value"&&eu(ao)){var e=[];zv(e,ao,t,wh(t)),Tv(zI,e)}}function BI(t,e,n){t==="focusin"?(xm(),$i=e,ao=n,$i.attachEvent("onpropertychange",Bv)):t==="focusout"&&xm()}function HI(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return eu(ao)}function qI(t,e){if(t==="click")return eu(e)}function WI(t,e){if(t==="input"||t==="change")return eu(e)}function GI(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Xt=typeof Object.is=="function"?Object.is:GI;function lo(t,e){if(Xt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Hc.call(e,s)||!Xt(t[s],e[s]))return!1}return!0}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Am(t,e){var n=Sm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Sm(n)}}function Hv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Hv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qv(){for(var t=window,e=dl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dl(t.document)}return e}function Rh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function KI(t){var e=qv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Hv(n.ownerDocument.documentElement,n)){if(r!==null&&Rh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Am(n,i);var o=Am(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QI=In&&"documentMode"in document&&11>=document.documentMode,_s=null,ud=null,Bi=null,cd=!1;function km(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cd||_s==null||_s!==dl(r)||(r=_s,"selectionStart"in r&&Rh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bi&&lo(Bi,r)||(Bi=r,r=vl(ud,"onSelect"),0<r.length&&(e=new Ah("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_s)))}function Sa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ws={animationend:Sa("Animation","AnimationEnd"),animationiteration:Sa("Animation","AnimationIteration"),animationstart:Sa("Animation","AnimationStart"),transitionend:Sa("Transition","TransitionEnd")},yc={},Wv={};In&&(Wv=document.createElement("div").style,"AnimationEvent"in window||(delete ws.animationend.animation,delete ws.animationiteration.animation,delete ws.animationstart.animation),"TransitionEvent"in window||delete ws.transitionend.transition);function tu(t){if(yc[t])return yc[t];if(!ws[t])return t;var e=ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Wv)return yc[t]=e[n];return t}var Gv=tu("animationend"),Kv=tu("animationiteration"),Qv=tu("animationstart"),Yv=tu("transitionend"),Xv=new Map,Cm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){Xv.set(t,e),ts(e,[t])}for(var vc=0;vc<Cm.length;vc++){var _c=Cm[vc],YI=_c.toLowerCase(),XI=_c[0].toUpperCase()+_c.slice(1);_r(YI,"on"+XI)}_r(Gv,"onAnimationEnd");_r(Kv,"onAnimationIteration");_r(Qv,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(Yv,"onTransitionEnd");Us("onMouseEnter",["mouseout","mouseover"]);Us("onMouseLeave",["mouseout","mouseover"]);Us("onPointerEnter",["pointerout","pointerover"]);Us("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),JI=new Set("cancel close invalid load scroll toggle".split(" ").concat(Vi));function Rm(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YT(r,e,void 0,t),t.currentTarget=null}function Jv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Rm(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Rm(s,l,d),i=u}}}if(fl)throw t=id,fl=!1,id=null,t}function _e(t,e){var n=e[md];n===void 0&&(n=e[md]=new Set);var r=t+"__bubble";n.has(r)||(Zv(e,t,2,!1),n.add(r))}function wc(t,e,n){var r=0;e&&(r|=4),Zv(n,t,r,e)}var Aa="_reactListening"+Math.random().toString(36).slice(2);function uo(t){if(!t[Aa]){t[Aa]=!0,ov.forEach(function(n){n!=="selectionchange"&&(JI.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Aa]||(e[Aa]=!0,wc("selectionchange",!1,e))}}function Zv(t,e,n,r){switch(Mv(e)){case 1:var s=hI;break;case 4:s=fI;break;default:s=xh}n=s.bind(null,e,n,t),s=void 0,!sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Ec(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Dr(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Tv(function(){var d=i,f=wh(n),m=[];e:{var g=Xv.get(t);if(g!==void 0){var _=Ah,x=t;switch(t){case"keypress":if(qa(n)===0)break e;case"keydown":case"keyup":_=CI;break;case"focusin":x="focus",_=pc;break;case"focusout":x="blur",_=pc;break;case"beforeblur":case"afterblur":_=pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=ym;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=gI;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=PI;break;case Gv:case Kv:case Qv:_=_I;break;case Yv:_=DI;break;case"scroll":_=pI;break;case"wheel":_=VI;break;case"copy":case"cut":case"paste":_=EI;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=_m}var P=(e&4)!==0,O=!P&&t==="scroll",T=P?g!==null?g+"Capture":null:g;P=[];for(var E=d,k;E!==null;){k=E;var D=k.stateNode;if(k.tag===5&&D!==null&&(k=D,T!==null&&(D=ro(E,T),D!=null&&P.push(co(E,D,k)))),O)break;E=E.return}0<P.length&&(g=new _(g,x,null,n,f),m.push({event:g,listeners:P}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==nd&&(x=n.relatedTarget||n.fromElement)&&(Dr(x)||x[xn]))break e;if((_||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,_?(x=n.relatedTarget||n.toElement,_=d,x=x?Dr(x):null,x!==null&&(O=ns(x),x!==O||x.tag!==5&&x.tag!==6)&&(x=null)):(_=null,x=d),_!==x)){if(P=ym,D="onMouseLeave",T="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(P=_m,D="onPointerLeave",T="onPointerEnter",E="pointer"),O=_==null?g:Es(_),k=x==null?g:Es(x),g=new P(D,E+"leave",_,n,f),g.target=O,g.relatedTarget=k,D=null,Dr(f)===d&&(P=new P(T,E+"enter",x,n,f),P.target=k,P.relatedTarget=O,D=P),O=D,_&&x)t:{for(P=_,T=x,E=0,k=P;k;k=us(k))E++;for(k=0,D=T;D;D=us(D))k++;for(;0<E-k;)P=us(P),E--;for(;0<k-E;)T=us(T),k--;for(;E--;){if(P===T||T!==null&&P===T.alternate)break t;P=us(P),T=us(T)}P=null}else P=null;_!==null&&Nm(m,g,_,P,!1),x!==null&&O!==null&&Nm(m,O,x,P,!0)}}e:{if(g=d?Es(d):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var U=$I;else if(Tm(g))if($v)U=WI;else{U=HI;var j=BI}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(U=qI);if(U&&(U=U(t,d))){zv(m,U,n,f);break e}j&&j(t,g,d),t==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Xc(g,"number",g.value)}switch(j=d?Es(d):window,t){case"focusin":(Tm(j)||j.contentEditable==="true")&&(_s=j,ud=d,Bi=null);break;case"focusout":Bi=ud=_s=null;break;case"mousedown":cd=!0;break;case"contextmenu":case"mouseup":case"dragend":cd=!1,km(m,n,f);break;case"selectionchange":if(QI)break;case"keydown":case"keyup":km(m,n,f)}var I;if(Ch)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else vs?Fv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(jv&&n.locale!=="ko"&&(vs||v!=="onCompositionStart"?v==="onCompositionEnd"&&vs&&(I=Lv()):(Xn=f,Sh="value"in Xn?Xn.value:Xn.textContent,vs=!0)),j=vl(d,v),0<j.length&&(v=new vm(v,t,null,n,f),m.push({event:v,listeners:j}),I?v.data=I:(I=Uv(n),I!==null&&(v.data=I)))),(I=LI?jI(t,n):FI(t,n))&&(d=vl(d,"onBeforeInput"),0<d.length&&(f=new vm("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:d}),f.data=I))}Jv(m,e)})}function co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=ro(t,n),i!=null&&r.unshift(co(t,i,s)),i=ro(t,e),i!=null&&r.push(co(t,i,s))),t=t.return}return r}function us(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=ro(n,i),u!=null&&o.unshift(co(n,u,l))):s||(u=ro(n,i),u!=null&&o.push(co(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ZI=/\r\n?/g,ex=/\u0000|\uFFFD/g;function Pm(t){return(typeof t=="string"?t:""+t).replace(ZI,`
`).replace(ex,"")}function ka(t,e,n){if(e=Pm(e),Pm(t)!==e&&n)throw Error(L(425))}function _l(){}var dd=null,hd=null;function fd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pd=typeof setTimeout=="function"?setTimeout:void 0,tx=typeof clearTimeout=="function"?clearTimeout:void 0,bm=typeof Promise=="function"?Promise:void 0,nx=typeof queueMicrotask=="function"?queueMicrotask:typeof bm<"u"?function(t){return bm.resolve(null).then(t).catch(rx)}:pd;function rx(t){setTimeout(function(){throw t})}function Tc(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),oo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);oo(e)}function sr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ri=Math.random().toString(36).slice(2),tn="__reactFiber$"+ri,ho="__reactProps$"+ri,xn="__reactContainer$"+ri,md="__reactEvents$"+ri,sx="__reactListeners$"+ri,ix="__reactHandles$"+ri;function Dr(t){var e=t[tn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[tn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dm(t);t!==null;){if(n=t[tn])return n;t=Dm(t)}return e}t=n,n=t.parentNode}return null}function Oo(t){return t=t[tn]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Es(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function nu(t){return t[ho]||null}var gd=[],Ts=-1;function wr(t){return{current:t}}function Ee(t){0>Ts||(t.current=gd[Ts],gd[Ts]=null,Ts--)}function ye(t,e){Ts++,gd[Ts]=t.current,t.current=e}var pr={},ct=wr(pr),It=wr(!1),$r=pr;function zs(t,e){var n=t.type.contextTypes;if(!n)return pr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function xt(t){return t=t.childContextTypes,t!=null}function wl(){Ee(It),Ee(ct)}function Om(t,e,n){if(ct.current!==pr)throw Error(L(168));ye(ct,e),ye(It,n)}function e_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(L(108,BT(t)||"Unknown",s));return Ae({},n,r)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||pr,$r=ct.current,ye(ct,t),ye(It,It.current),!0}function Vm(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=e_(t,e,$r),r.__reactInternalMemoizedMergedChildContext=t,Ee(It),Ee(ct),ye(ct,t)):Ee(It),ye(It,n)}var mn=null,ru=!1,Ic=!1;function t_(t){mn===null?mn=[t]:mn.push(t)}function ox(t){ru=!0,t_(t)}function Er(){if(!Ic&&mn!==null){Ic=!0;var t=0,e=de;try{var n=mn;for(de=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}mn=null,ru=!1}catch(s){throw mn!==null&&(mn=mn.slice(t+1)),Av(Eh,Er),s}finally{de=e,Ic=!1}}return null}var Is=[],xs=0,Tl=null,Il=0,Mt=[],Lt=0,Br=null,gn=1,yn="";function Rr(t,e){Is[xs++]=Il,Is[xs++]=Tl,Tl=t,Il=e}function n_(t,e,n){Mt[Lt++]=gn,Mt[Lt++]=yn,Mt[Lt++]=Br,Br=t;var r=gn;t=yn;var s=32-Kt(r)-1;r&=~(1<<s),n+=1;var i=32-Kt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,gn=1<<32-Kt(e)+s|n<<s|r,yn=i+t}else gn=1<<i|n<<s|r,yn=t}function Nh(t){t.return!==null&&(Rr(t,1),n_(t,1,0))}function Ph(t){for(;t===Tl;)Tl=Is[--xs],Is[xs]=null,Il=Is[--xs],Is[xs]=null;for(;t===Br;)Br=Mt[--Lt],Mt[Lt]=null,yn=Mt[--Lt],Mt[Lt]=null,gn=Mt[--Lt],Mt[Lt]=null}var Pt=null,Rt=null,Ie=!1,Gt=null;function r_(t,e){var n=jt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Mm(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=sr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pt=t,Rt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Br!==null?{id:gn,overflow:yn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=jt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pt=t,Rt=null,!0):!1;default:return!1}}function yd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function vd(t){if(Ie){var e=Rt;if(e){var n=e;if(!Mm(t,e)){if(yd(t))throw Error(L(418));e=sr(n.nextSibling);var r=Pt;e&&Mm(t,e)?r_(r,n):(t.flags=t.flags&-4097|2,Ie=!1,Pt=t)}}else{if(yd(t))throw Error(L(418));t.flags=t.flags&-4097|2,Ie=!1,Pt=t}}}function Lm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pt=t}function Ca(t){if(t!==Pt)return!1;if(!Ie)return Lm(t),Ie=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!fd(t.type,t.memoizedProps)),e&&(e=Rt)){if(yd(t))throw s_(),Error(L(418));for(;e;)r_(t,e),e=sr(e.nextSibling)}if(Lm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Rt=sr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Rt=null}}else Rt=Pt?sr(t.stateNode.nextSibling):null;return!0}function s_(){for(var t=Rt;t;)t=sr(t.nextSibling)}function $s(){Rt=Pt=null,Ie=!1}function bh(t){Gt===null?Gt=[t]:Gt.push(t)}var ax=Dn.ReactCurrentBatchConfig;function Ci(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Ra(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jm(t){var e=t._init;return e(t._payload)}function i_(t){function e(T,E){if(t){var k=T.deletions;k===null?(T.deletions=[E],T.flags|=16):k.push(E)}}function n(T,E){if(!t)return null;for(;E!==null;)e(T,E),E=E.sibling;return null}function r(T,E){for(T=new Map;E!==null;)E.key!==null?T.set(E.key,E):T.set(E.index,E),E=E.sibling;return T}function s(T,E){return T=lr(T,E),T.index=0,T.sibling=null,T}function i(T,E,k){return T.index=k,t?(k=T.alternate,k!==null?(k=k.index,k<E?(T.flags|=2,E):k):(T.flags|=2,E)):(T.flags|=1048576,E)}function o(T){return t&&T.alternate===null&&(T.flags|=2),T}function l(T,E,k,D){return E===null||E.tag!==6?(E=Nc(k,T.mode,D),E.return=T,E):(E=s(E,k),E.return=T,E)}function u(T,E,k,D){var U=k.type;return U===ys?f(T,E,k.props.children,D,k.key):E!==null&&(E.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===zn&&jm(U)===E.type)?(D=s(E,k.props),D.ref=Ci(T,E,k),D.return=T,D):(D=Ja(k.type,k.key,k.props,null,T.mode,D),D.ref=Ci(T,E,k),D.return=T,D)}function d(T,E,k,D){return E===null||E.tag!==4||E.stateNode.containerInfo!==k.containerInfo||E.stateNode.implementation!==k.implementation?(E=Pc(k,T.mode,D),E.return=T,E):(E=s(E,k.children||[]),E.return=T,E)}function f(T,E,k,D,U){return E===null||E.tag!==7?(E=jr(k,T.mode,D,U),E.return=T,E):(E=s(E,k),E.return=T,E)}function m(T,E,k){if(typeof E=="string"&&E!==""||typeof E=="number")return E=Nc(""+E,T.mode,k),E.return=T,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case va:return k=Ja(E.type,E.key,E.props,null,T.mode,k),k.ref=Ci(T,null,E),k.return=T,k;case gs:return E=Pc(E,T.mode,k),E.return=T,E;case zn:var D=E._init;return m(T,D(E._payload),k)}if(Di(E)||Ii(E))return E=jr(E,T.mode,k,null),E.return=T,E;Ra(T,E)}return null}function g(T,E,k,D){var U=E!==null?E.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return U!==null?null:l(T,E,""+k,D);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case va:return k.key===U?u(T,E,k,D):null;case gs:return k.key===U?d(T,E,k,D):null;case zn:return U=k._init,g(T,E,U(k._payload),D)}if(Di(k)||Ii(k))return U!==null?null:f(T,E,k,D,null);Ra(T,k)}return null}function _(T,E,k,D,U){if(typeof D=="string"&&D!==""||typeof D=="number")return T=T.get(k)||null,l(E,T,""+D,U);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case va:return T=T.get(D.key===null?k:D.key)||null,u(E,T,D,U);case gs:return T=T.get(D.key===null?k:D.key)||null,d(E,T,D,U);case zn:var j=D._init;return _(T,E,k,j(D._payload),U)}if(Di(D)||Ii(D))return T=T.get(k)||null,f(E,T,D,U,null);Ra(E,D)}return null}function x(T,E,k,D){for(var U=null,j=null,I=E,v=E=0,w=null;I!==null&&v<k.length;v++){I.index>v?(w=I,I=null):w=I.sibling;var S=g(T,I,k[v],D);if(S===null){I===null&&(I=w);break}t&&I&&S.alternate===null&&e(T,I),E=i(S,E,v),j===null?U=S:j.sibling=S,j=S,I=w}if(v===k.length)return n(T,I),Ie&&Rr(T,v),U;if(I===null){for(;v<k.length;v++)I=m(T,k[v],D),I!==null&&(E=i(I,E,v),j===null?U=I:j.sibling=I,j=I);return Ie&&Rr(T,v),U}for(I=r(T,I);v<k.length;v++)w=_(I,T,v,k[v],D),w!==null&&(t&&w.alternate!==null&&I.delete(w.key===null?v:w.key),E=i(w,E,v),j===null?U=w:j.sibling=w,j=w);return t&&I.forEach(function(C){return e(T,C)}),Ie&&Rr(T,v),U}function P(T,E,k,D){var U=Ii(k);if(typeof U!="function")throw Error(L(150));if(k=U.call(k),k==null)throw Error(L(151));for(var j=U=null,I=E,v=E=0,w=null,S=k.next();I!==null&&!S.done;v++,S=k.next()){I.index>v?(w=I,I=null):w=I.sibling;var C=g(T,I,S.value,D);if(C===null){I===null&&(I=w);break}t&&I&&C.alternate===null&&e(T,I),E=i(C,E,v),j===null?U=C:j.sibling=C,j=C,I=w}if(S.done)return n(T,I),Ie&&Rr(T,v),U;if(I===null){for(;!S.done;v++,S=k.next())S=m(T,S.value,D),S!==null&&(E=i(S,E,v),j===null?U=S:j.sibling=S,j=S);return Ie&&Rr(T,v),U}for(I=r(T,I);!S.done;v++,S=k.next())S=_(I,T,v,S.value,D),S!==null&&(t&&S.alternate!==null&&I.delete(S.key===null?v:S.key),E=i(S,E,v),j===null?U=S:j.sibling=S,j=S);return t&&I.forEach(function(R){return e(T,R)}),Ie&&Rr(T,v),U}function O(T,E,k,D){if(typeof k=="object"&&k!==null&&k.type===ys&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case va:e:{for(var U=k.key,j=E;j!==null;){if(j.key===U){if(U=k.type,U===ys){if(j.tag===7){n(T,j.sibling),E=s(j,k.props.children),E.return=T,T=E;break e}}else if(j.elementType===U||typeof U=="object"&&U!==null&&U.$$typeof===zn&&jm(U)===j.type){n(T,j.sibling),E=s(j,k.props),E.ref=Ci(T,j,k),E.return=T,T=E;break e}n(T,j);break}else e(T,j);j=j.sibling}k.type===ys?(E=jr(k.props.children,T.mode,D,k.key),E.return=T,T=E):(D=Ja(k.type,k.key,k.props,null,T.mode,D),D.ref=Ci(T,E,k),D.return=T,T=D)}return o(T);case gs:e:{for(j=k.key;E!==null;){if(E.key===j)if(E.tag===4&&E.stateNode.containerInfo===k.containerInfo&&E.stateNode.implementation===k.implementation){n(T,E.sibling),E=s(E,k.children||[]),E.return=T,T=E;break e}else{n(T,E);break}else e(T,E);E=E.sibling}E=Pc(k,T.mode,D),E.return=T,T=E}return o(T);case zn:return j=k._init,O(T,E,j(k._payload),D)}if(Di(k))return x(T,E,k,D);if(Ii(k))return P(T,E,k,D);Ra(T,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,E!==null&&E.tag===6?(n(T,E.sibling),E=s(E,k),E.return=T,T=E):(n(T,E),E=Nc(k,T.mode,D),E.return=T,T=E),o(T)):n(T,E)}return O}var Bs=i_(!0),o_=i_(!1),xl=wr(null),Sl=null,Ss=null,Dh=null;function Oh(){Dh=Ss=Sl=null}function Vh(t){var e=xl.current;Ee(xl),t._currentValue=e}function _d(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Sl=t,Dh=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function zt(t){var e=t._currentValue;if(Dh!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(Sl===null)throw Error(L(308));Ss=t,Sl.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Or=null;function Mh(t){Or===null?Or=[t]:Or.push(t)}function a_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Mh(e)):(n.next=s.next,s.next=n),e.interleaved=n,Sn(t,r)}function Sn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var $n=!1;function Lh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function l_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function En(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,oe&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Sn(t,n)}return s=r.interleaved,s===null?(e.next=e,Mh(r)):(e.next=s.next,s.next=e),r.interleaved=e,Sn(t,n)}function Wa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Th(t,n)}}function Fm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Al(t,e,n,r){var s=t.updateQueue;$n=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,f=d=u=null,l=i;do{var g=l.lane,_=l.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var x=t,P=l;switch(g=e,_=n,P.tag){case 1:if(x=P.payload,typeof x=="function"){m=x.call(_,m,g);break e}m=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=P.payload,g=typeof x=="function"?x.call(_,m,g):x,g==null)break e;m=Ae({},m,g);break e;case 2:$n=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=_,u=m):f=f.next=_,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(f===null&&(u=m),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=f,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);qr|=o,t.lanes=o,t.memoizedState=m}}function Um(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(L(191,s));s.call(r)}}}var Vo={},sn=wr(Vo),fo=wr(Vo),po=wr(Vo);function Vr(t){if(t===Vo)throw Error(L(174));return t}function jh(t,e){switch(ye(po,e),ye(fo,t),ye(sn,Vo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Zc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Zc(e,t)}Ee(sn),ye(sn,e)}function Hs(){Ee(sn),Ee(fo),Ee(po)}function u_(t){Vr(po.current);var e=Vr(sn.current),n=Zc(e,t.type);e!==n&&(ye(fo,t),ye(sn,n))}function Fh(t){fo.current===t&&(Ee(sn),Ee(fo))}var xe=wr(0);function kl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function Uh(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var Ga=Dn.ReactCurrentDispatcher,Sc=Dn.ReactCurrentBatchConfig,Hr=0,Se=null,Le=null,$e=null,Cl=!1,Hi=!1,mo=0,lx=0;function nt(){throw Error(L(321))}function zh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Xt(t[n],e[n]))return!1;return!0}function $h(t,e,n,r,s,i){if(Hr=i,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ga.current=t===null||t.memoizedState===null?hx:fx,t=n(r,s),Hi){i=0;do{if(Hi=!1,mo=0,25<=i)throw Error(L(301));i+=1,$e=Le=null,e.updateQueue=null,Ga.current=px,t=n(r,s)}while(Hi)}if(Ga.current=Rl,e=Le!==null&&Le.next!==null,Hr=0,$e=Le=Se=null,Cl=!1,e)throw Error(L(300));return t}function Bh(){var t=mo!==0;return mo=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Se.memoizedState=$e=t:$e=$e.next=t,$e}function $t(){if(Le===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Le.next;var e=$e===null?Se.memoizedState:$e.next;if(e!==null)$e=e,Le=t;else{if(t===null)throw Error(L(310));Le=t,t={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},$e===null?Se.memoizedState=$e=t:$e=$e.next=t}return $e}function go(t,e){return typeof e=="function"?e(t):e}function Ac(t){var e=$t(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=Le,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var f=d.lane;if((Hr&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,Se.lanes|=f,qr|=f}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,Xt(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Se.lanes|=i,qr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function kc(t){var e=$t(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);Xt(i,e.memoizedState)||(Tt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function c_(){}function d_(t,e){var n=Se,r=$t(),s=e(),i=!Xt(r.memoizedState,s);if(i&&(r.memoizedState=s,Tt=!0),r=r.queue,Hh(p_.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,yo(9,f_.bind(null,n,r,s,e),void 0,null),He===null)throw Error(L(349));Hr&30||h_(n,e,s)}return s}function h_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function f_(t,e,n,r){e.value=n,e.getSnapshot=r,m_(e)&&g_(t)}function p_(t,e,n){return n(function(){m_(e)&&g_(t)})}function m_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Xt(t,n)}catch{return!0}}function g_(t){var e=Sn(t,1);e!==null&&Qt(e,t,1,-1)}function zm(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:go,lastRenderedState:t},e.queue=t,t=t.dispatch=dx.bind(null,Se,t),[e.memoizedState,t]}function yo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function y_(){return $t().memoizedState}function Ka(t,e,n,r){var s=en();Se.flags|=t,s.memoizedState=yo(1|e,n,void 0,r===void 0?null:r)}function su(t,e,n,r){var s=$t();r=r===void 0?null:r;var i=void 0;if(Le!==null){var o=Le.memoizedState;if(i=o.destroy,r!==null&&zh(r,o.deps)){s.memoizedState=yo(e,n,i,r);return}}Se.flags|=t,s.memoizedState=yo(1|e,n,i,r)}function $m(t,e){return Ka(8390656,8,t,e)}function Hh(t,e){return su(2048,8,t,e)}function v_(t,e){return su(4,2,t,e)}function __(t,e){return su(4,4,t,e)}function w_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function E_(t,e,n){return n=n!=null?n.concat([t]):null,su(4,4,w_.bind(null,e,t),n)}function qh(){}function T_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function I_(t,e){var n=$t();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&zh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function x_(t,e,n){return Hr&21?(Xt(n,e)||(n=Rv(),Se.lanes|=n,qr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tt=!0),t.memoizedState=n)}function ux(t,e){var n=de;de=n!==0&&4>n?n:4,t(!0);var r=Sc.transition;Sc.transition={};try{t(!1),e()}finally{de=n,Sc.transition=r}}function S_(){return $t().memoizedState}function cx(t,e,n){var r=ar(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},A_(t))k_(e,n);else if(n=a_(t,e,n,r),n!==null){var s=mt();Qt(n,t,r,s),C_(n,e,r)}}function dx(t,e,n){var r=ar(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(A_(t))k_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Xt(l,o)){var u=e.interleaved;u===null?(s.next=s,Mh(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=a_(t,e,s,r),n!==null&&(s=mt(),Qt(n,t,r,s),C_(n,e,r))}}function A_(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function k_(t,e){Hi=Cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function C_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Th(t,n)}}var Rl={readContext:zt,useCallback:nt,useContext:nt,useEffect:nt,useImperativeHandle:nt,useInsertionEffect:nt,useLayoutEffect:nt,useMemo:nt,useReducer:nt,useRef:nt,useState:nt,useDebugValue:nt,useDeferredValue:nt,useTransition:nt,useMutableSource:nt,useSyncExternalStore:nt,useId:nt,unstable_isNewReconciler:!1},hx={readContext:zt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:zt,useEffect:$m,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ka(4194308,4,w_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ka(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ka(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=cx.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:zm,useDebugValue:qh,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=zm(!1),e=t[0];return t=ux.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,s=en();if(Ie){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),He===null)throw Error(L(349));Hr&30||h_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,$m(p_.bind(null,r,i,t),[t]),r.flags|=2048,yo(9,f_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=en(),e=He.identifierPrefix;if(Ie){var n=yn,r=gn;n=(r&~(1<<32-Kt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=mo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},fx={readContext:zt,useCallback:T_,useContext:zt,useEffect:Hh,useImperativeHandle:E_,useInsertionEffect:v_,useLayoutEffect:__,useMemo:I_,useReducer:Ac,useRef:y_,useState:function(){return Ac(go)},useDebugValue:qh,useDeferredValue:function(t){var e=$t();return x_(e,Le.memoizedState,t)},useTransition:function(){var t=Ac(go)[0],e=$t().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:d_,useId:S_,unstable_isNewReconciler:!1},px={readContext:zt,useCallback:T_,useContext:zt,useEffect:Hh,useImperativeHandle:E_,useInsertionEffect:v_,useLayoutEffect:__,useMemo:I_,useReducer:kc,useRef:y_,useState:function(){return kc(go)},useDebugValue:qh,useDeferredValue:function(t){var e=$t();return Le===null?e.memoizedState=t:x_(e,Le.memoizedState,t)},useTransition:function(){var t=kc(go)[0],e=$t().memoizedState;return[t,e]},useMutableSource:c_,useSyncExternalStore:d_,useId:S_,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Ae({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function wd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ae({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var iu={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=mt(),s=ar(t),i=En(r,s);i.payload=e,n!=null&&(i.callback=n),e=ir(t,i,s),e!==null&&(Qt(e,t,s,r),Wa(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=mt(),s=ar(t),i=En(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=ir(t,i,s),e!==null&&(Qt(e,t,s,r),Wa(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=mt(),r=ar(t),s=En(n,r);s.tag=2,e!=null&&(s.callback=e),e=ir(t,s,r),e!==null&&(Qt(e,t,r,n),Wa(e,t,r))}};function Bm(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!lo(n,r)||!lo(s,i):!0}function R_(t,e,n){var r=!1,s=pr,i=e.contextType;return typeof i=="object"&&i!==null?i=zt(i):(s=xt(e)?$r:ct.current,r=e.contextTypes,i=(r=r!=null)?zs(t,s):pr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=iu,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Hm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&iu.enqueueReplaceState(e,e.state,null)}function Ed(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Lh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=zt(i):(i=xt(e)?$r:ct.current,s.context=zs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(wd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&iu.enqueueReplaceState(s,s.state,null),Al(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e){try{var n="",r=e;do n+=$T(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mx=typeof WeakMap=="function"?WeakMap:Map;function N_(t,e,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Pl||(Pl=!0,bd=r),Td(t,e)},n}function P_(t,e,n){n=En(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Td(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Td(t,e),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new mx;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=Rx.bind(null,t,e,n),e.then(t,t))}function Wm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=En(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var gx=Dn.ReactCurrentOwner,Tt=!1;function pt(t,e,n,r){e.child=t===null?o_(e,null,n,r):Bs(e,t.child,n,r)}function Km(t,e,n,r,s){n=n.render;var i=e.ref;return Os(e,s),r=$h(t,e,n,r,i,s),n=Bh(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,An(t,e,s)):(Ie&&n&&Nh(e),e.flags|=1,pt(t,e,r,s),e.child)}function Qm(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!Zh(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,b_(t,e,i,r,s)):(t=Ja(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:lo,n(o,r)&&t.ref===e.ref)return An(t,e,s)}return e.flags|=1,t=lr(i,r),t.ref=e.ref,t.return=e,e.child=t}function b_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(lo(i,r)&&t.ref===e.ref)if(Tt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Tt=!0);else return e.lanes=t.lanes,An(t,e,s)}return Id(t,e,n,r,s)}function D_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ye(ks,Ct),Ct|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ye(ks,Ct),Ct|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ye(ks,Ct),Ct|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,ye(ks,Ct),Ct|=r;return pt(t,e,s,n),e.child}function O_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Id(t,e,n,r,s){var i=xt(n)?$r:ct.current;return i=zs(e,i),Os(e,s),n=$h(t,e,n,r,i,s),r=Bh(),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,An(t,e,s)):(Ie&&r&&Nh(e),e.flags|=1,pt(t,e,n,s),e.child)}function Ym(t,e,n,r,s){if(xt(n)){var i=!0;El(e)}else i=!1;if(Os(e,s),e.stateNode===null)Qa(t,e),R_(e,n,r),Ed(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=zt(d):(d=xt(n)?$r:ct.current,d=zs(e,d));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Hm(e,o,r,d),$n=!1;var g=e.memoizedState;o.state=g,Al(e,r,o,s),u=e.memoizedState,l!==r||g!==u||It.current||$n?(typeof f=="function"&&(wd(e,n,f,r),u=e.memoizedState),(l=$n||Bm(e,n,l,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,l_(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:qt(e.type,l),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=zt(u):(u=xt(n)?$r:ct.current,u=zs(e,u));var _=n.getDerivedStateFromProps;(f=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Hm(e,o,r,u),$n=!1,g=e.memoizedState,o.state=g,Al(e,r,o,s);var x=e.memoizedState;l!==m||g!==x||It.current||$n?(typeof _=="function"&&(wd(e,n,_,r),x=e.memoizedState),(d=$n||Bm(e,n,d,r,g,x,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,x,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,x,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=x),o.props=r,o.state=x,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return xd(t,e,n,r,i,s)}function xd(t,e,n,r,s,i){O_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Vm(e,n,!1),An(t,e,i);r=e.stateNode,gx.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bs(e,t.child,null,i),e.child=Bs(e,null,l,i)):pt(t,e,l,i),e.memoizedState=r.state,s&&Vm(e,n,!0),e.child}function V_(t){var e=t.stateNode;e.pendingContext?Om(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Om(t,e.context,!1),jh(t,e.containerInfo)}function Xm(t,e,n,r,s){return $s(),bh(s),e.flags|=256,pt(t,e,n,r),e.child}var Sd={dehydrated:null,treeContext:null,retryLane:0};function Ad(t){return{baseLanes:t,cachePool:null,transitions:null}}function M_(t,e,n){var r=e.pendingProps,s=xe.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),ye(xe,s&1),t===null)return vd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=lu(o,r,0,null),t=jr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Ad(n),e.memoizedState=Sd,t):Wh(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return yx(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=lr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=lr(l,i):(i=jr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Ad(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Sd,r}return i=t.child,t=i.sibling,r=lr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Wh(t,e){return e=lu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Na(t,e,n,r){return r!==null&&bh(r),Bs(e,t.child,null,n),t=Wh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function yx(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Cc(Error(L(422))),Na(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=lu({mode:"visible",children:r.children},s,0,null),i=jr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Bs(e,t.child,null,o),e.child.memoizedState=Ad(o),e.memoizedState=Sd,i);if(!(e.mode&1))return Na(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(L(419)),r=Cc(i,r,void 0),Na(t,e,o,r)}if(l=(o&t.childLanes)!==0,Tt||l){if(r=He,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Sn(t,s),Qt(r,t,s,-1))}return Jh(),r=Cc(Error(L(421))),Na(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=Nx.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Rt=sr(s.nextSibling),Pt=e,Ie=!0,Gt=null,t!==null&&(Mt[Lt++]=gn,Mt[Lt++]=yn,Mt[Lt++]=Br,gn=t.id,yn=t.overflow,Br=e),e=Wh(e,r.children),e.flags|=4096,e)}function Jm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),_d(t.return,e,n)}function Rc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function L_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(pt(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jm(t,n,e);else if(t.tag===19)Jm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ye(xe,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&kl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Rc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&kl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Rc(e,!0,n,null,i);break;case"together":Rc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),qr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function vx(t,e,n){switch(e.tag){case 3:V_(e),$s();break;case 5:u_(e);break;case 1:xt(e.type)&&El(e);break;case 4:jh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;ye(xl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(ye(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?M_(t,e,n):(ye(xe,xe.current&1),t=An(t,e,n),t!==null?t.sibling:null);ye(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return L_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),ye(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,D_(t,e,n)}return An(t,e,n)}var j_,kd,F_,U_;j_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kd=function(){};F_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,Vr(sn.current);var i=null;switch(n){case"input":s=Qc(t,s),r=Qc(t,r),i=[];break;case"select":s=Ae({},s,{value:void 0}),r=Ae({},r,{value:void 0}),i=[];break;case"textarea":s=Jc(t,s),r=Jc(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_l)}ed(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(to.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(to.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&_e("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};U_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ri(t,e){if(!Ie)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function rt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function _x(t,e,n){var r=e.pendingProps;switch(Ph(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(e),null;case 1:return xt(e.type)&&wl(),rt(e),null;case 3:return r=e.stateNode,Hs(),Ee(It),Ee(ct),Uh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ca(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(Vd(Gt),Gt=null))),kd(t,e),rt(e),null;case 5:Fh(e);var s=Vr(po.current);if(n=e.type,t!==null&&e.stateNode!=null)F_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return rt(e),null}if(t=Vr(sn.current),Ca(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[tn]=e,r[ho]=i,t=(e.mode&1)!==0,n){case"dialog":_e("cancel",r),_e("close",r);break;case"iframe":case"object":case"embed":_e("load",r);break;case"video":case"audio":for(s=0;s<Vi.length;s++)_e(Vi[s],r);break;case"source":_e("error",r);break;case"img":case"image":case"link":_e("error",r),_e("load",r);break;case"details":_e("toggle",r);break;case"input":am(r,i),_e("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},_e("invalid",r);break;case"textarea":um(r,i),_e("invalid",r)}ed(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&ka(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&ka(r.textContent,l,t),s=["children",""+l]):to.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&_e("scroll",r)}switch(n){case"input":_a(r),lm(r,i,!0);break;case"textarea":_a(r),cm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=_l)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=pv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tn]=e,t[ho]=r,j_(t,e,!1,!1),e.stateNode=t;e:{switch(o=td(n,r),n){case"dialog":_e("cancel",t),_e("close",t),s=r;break;case"iframe":case"object":case"embed":_e("load",t),s=r;break;case"video":case"audio":for(s=0;s<Vi.length;s++)_e(Vi[s],t);s=r;break;case"source":_e("error",t),s=r;break;case"img":case"image":case"link":_e("error",t),_e("load",t),s=r;break;case"details":_e("toggle",t),s=r;break;case"input":am(t,r),s=Qc(t,r),_e("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Ae({},r,{value:void 0}),_e("invalid",t);break;case"textarea":um(t,r),s=Jc(t,r),_e("invalid",t);break;default:s=r}ed(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?yv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&mv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&no(t,u):typeof u=="number"&&no(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(to.hasOwnProperty(i)?u!=null&&i==="onScroll"&&_e("scroll",t):u!=null&&gh(t,i,u,o))}switch(n){case"input":_a(t),lm(t,r,!1);break;case"textarea":_a(t),cm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+fr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ns(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=_l)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return rt(e),null;case 6:if(t&&e.stateNode!=null)U_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Vr(po.current),Vr(sn.current),Ca(e)){if(r=e.stateNode,n=e.memoizedProps,r[tn]=e,(i=r.nodeValue!==n)&&(t=Pt,t!==null))switch(t.tag){case 3:ka(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ka(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tn]=e,e.stateNode=r}return rt(e),null;case 13:if(Ee(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ie&&Rt!==null&&e.mode&1&&!(e.flags&128))s_(),$s(),e.flags|=98560,i=!1;else if(i=Ca(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(L(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[tn]=e}else $s(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;rt(e),i=!1}else Gt!==null&&(Vd(Gt),Gt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Fe===0&&(Fe=3):Jh())),e.updateQueue!==null&&(e.flags|=4),rt(e),null);case 4:return Hs(),kd(t,e),t===null&&uo(e.stateNode.containerInfo),rt(e),null;case 10:return Vh(e.type._context),rt(e),null;case 17:return xt(e.type)&&wl(),rt(e),null;case 19:if(Ee(xe),i=e.memoizedState,i===null)return rt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ri(i,!1);else{if(Fe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=kl(t),o!==null){for(e.flags|=128,Ri(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ye(xe,xe.current&1|2),e.child}t=t.sibling}i.tail!==null&&be()>Ws&&(e.flags|=128,r=!0,Ri(i,!1),e.lanes=4194304)}else{if(!r)if(t=kl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ri(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ie)return rt(e),null}else 2*be()-i.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,r=!0,Ri(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=be(),e.sibling=null,n=xe.current,ye(xe,r?n&1|2:n&1),e):(rt(e),null);case 22:case 23:return Xh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ct&1073741824&&(rt(e),e.subtreeFlags&6&&(e.flags|=8192)):rt(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function wx(t,e){switch(Ph(e),e.tag){case 1:return xt(e.type)&&wl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Hs(),Ee(It),Ee(ct),Uh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fh(e),null;case 13:if(Ee(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));$s()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Ee(xe),null;case 4:return Hs(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return Xh(),null;case 24:return null;default:return null}}var Pa=!1,ot=!1,Ex=typeof WeakSet=="function"?WeakSet:Set,B=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Re(t,e,r)}else n.current=null}function Cd(t,e,n){try{n()}catch(r){Re(t,e,r)}}var Zm=!1;function Tx(t,e){if(dd=gl,t=qv(),Rh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,f=0,m=t,g=null;t:for(;;){for(var _;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===t)break t;if(g===n&&++d===s&&(l=o),g===i&&++f===r&&(u=o),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:t,selectionRange:n},gl=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var P=x.memoizedProps,O=x.memoizedState,T=e.stateNode,E=T.getSnapshotBeforeUpdate(e.elementType===e.type?P:qt(e.type,P),O);T.__reactInternalSnapshotBeforeUpdate=E}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(D){Re(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return x=Zm,Zm=!1,x}function qi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Cd(e,n,i)}s=s.next}while(s!==r)}}function ou(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function z_(t){var e=t.alternate;e!==null&&(t.alternate=null,z_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tn],delete e[ho],delete e[md],delete e[sx],delete e[ix])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function $_(t){return t.tag===5||t.tag===3||t.tag===4}function eg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||$_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Nd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_l));else if(r!==4&&(t=t.child,t!==null))for(Nd(t,e,n),t=t.sibling;t!==null;)Nd(t,e,n),t=t.sibling}function Pd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Pd(t,e,n),t=t.sibling;t!==null;)Pd(t,e,n),t=t.sibling}var Ke=null,Wt=!1;function jn(t,e,n){for(n=n.child;n!==null;)B_(t,e,n),n=n.sibling}function B_(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Jl,n)}catch{}switch(n.tag){case 5:ot||As(n,e);case 6:var r=Ke,s=Wt;Ke=null,jn(t,e,n),Ke=r,Wt=s,Ke!==null&&(Wt?(t=Ke,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ke.removeChild(n.stateNode));break;case 18:Ke!==null&&(Wt?(t=Ke,n=n.stateNode,t.nodeType===8?Tc(t.parentNode,n):t.nodeType===1&&Tc(t,n),oo(t)):Tc(Ke,n.stateNode));break;case 4:r=Ke,s=Wt,Ke=n.stateNode.containerInfo,Wt=!0,jn(t,e,n),Ke=r,Wt=s;break;case 0:case 11:case 14:case 15:if(!ot&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Cd(n,e,o),s=s.next}while(s!==r)}jn(t,e,n);break;case 1:if(!ot&&(As(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Re(n,e,l)}jn(t,e,n);break;case 21:jn(t,e,n);break;case 22:n.mode&1?(ot=(r=ot)||n.memoizedState!==null,jn(t,e,n),ot=r):jn(t,e,n);break;default:jn(t,e,n)}}function tg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ex),e.forEach(function(r){var s=Px.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Ht(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Ke=l.stateNode,Wt=!1;break e;case 3:Ke=l.stateNode.containerInfo,Wt=!0;break e;case 4:Ke=l.stateNode.containerInfo,Wt=!0;break e}l=l.return}if(Ke===null)throw Error(L(160));B_(i,o,s),Ke=null,Wt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){Re(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)H_(e,t),e=e.sibling}function H_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ht(e,t),Zt(t),r&4){try{qi(3,t,t.return),ou(3,t)}catch(P){Re(t,t.return,P)}try{qi(5,t,t.return)}catch(P){Re(t,t.return,P)}}break;case 1:Ht(e,t),Zt(t),r&512&&n!==null&&As(n,n.return);break;case 5:if(Ht(e,t),Zt(t),r&512&&n!==null&&As(n,n.return),t.flags&32){var s=t.stateNode;try{no(s,"")}catch(P){Re(t,t.return,P)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&hv(s,i),td(l,o);var d=td(l,i);for(o=0;o<u.length;o+=2){var f=u[o],m=u[o+1];f==="style"?yv(s,m):f==="dangerouslySetInnerHTML"?mv(s,m):f==="children"?no(s,m):gh(s,f,m,d)}switch(l){case"input":Yc(s,i);break;case"textarea":fv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Ns(s,!!i.multiple,_,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ns(s,!!i.multiple,i.defaultValue,!0):Ns(s,!!i.multiple,i.multiple?[]:"",!1))}s[ho]=i}catch(P){Re(t,t.return,P)}}break;case 6:if(Ht(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(L(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(P){Re(t,t.return,P)}}break;case 3:if(Ht(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{oo(e.containerInfo)}catch(P){Re(t,t.return,P)}break;case 4:Ht(e,t),Zt(t);break;case 13:Ht(e,t),Zt(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Qh=be())),r&4&&tg(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(ot=(d=ot)||f,Ht(e,t),ot=d):Ht(e,t),Zt(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(B=t,f=t.child;f!==null;){for(m=B=f;B!==null;){switch(g=B,_=g.child,g.tag){case 0:case 11:case 14:case 15:qi(4,g,g.return);break;case 1:As(g,g.return);var x=g.stateNode;if(typeof x.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(P){Re(r,n,P)}}break;case 5:As(g,g.return);break;case 22:if(g.memoizedState!==null){rg(m);continue}}_!==null?(_.return=g,B=_):rg(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=gv("display",o))}catch(P){Re(t,t.return,P)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(P){Re(t,t.return,P)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Ht(e,t),Zt(t),r&4&&tg(t);break;case 21:break;default:Ht(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if($_(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(no(s,""),r.flags&=-33);var i=eg(t);Pd(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=eg(t);Nd(t,l,o);break;default:throw Error(L(161))}}catch(u){Re(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ix(t,e,n){B=t,q_(t)}function q_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var s=B,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Pa;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ot;l=Pa;var d=ot;if(Pa=o,(ot=u)&&!d)for(B=s;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?sg(s):u!==null?(u.return=o,B=u):sg(s);for(;i!==null;)B=i,q_(i),i=i.sibling;B=s,Pa=l,ot=d}ng(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,B=i):ng(t)}}function ng(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ot||ou(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ot)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&Um(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Um(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&oo(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}ot||e.flags&512&&Rd(e)}catch(g){Re(e,e.return,g)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function rg(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function sg(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ou(4,e)}catch(u){Re(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){Re(e,s,u)}}var i=e.return;try{Rd(e)}catch(u){Re(e,i,u)}break;case 5:var o=e.return;try{Rd(e)}catch(u){Re(e,o,u)}}}catch(u){Re(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var xx=Math.ceil,Nl=Dn.ReactCurrentDispatcher,Gh=Dn.ReactCurrentOwner,Ft=Dn.ReactCurrentBatchConfig,oe=0,He=null,Oe=null,Ye=0,Ct=0,ks=wr(0),Fe=0,vo=null,qr=0,au=0,Kh=0,Wi=null,wt=null,Qh=0,Ws=1/0,pn=null,Pl=!1,bd=null,or=null,ba=!1,Jn=null,bl=0,Gi=0,Dd=null,Ya=-1,Xa=0;function mt(){return oe&6?be():Ya!==-1?Ya:Ya=be()}function ar(t){return t.mode&1?oe&2&&Ye!==0?Ye&-Ye:ax.transition!==null?(Xa===0&&(Xa=Rv()),Xa):(t=de,t!==0||(t=window.event,t=t===void 0?16:Mv(t.type)),t):1}function Qt(t,e,n,r){if(50<Gi)throw Gi=0,Dd=null,Error(L(185));bo(t,n,r),(!(oe&2)||t!==He)&&(t===He&&(!(oe&2)&&(au|=n),Fe===4&&qn(t,Ye)),St(t,r),n===1&&oe===0&&!(e.mode&1)&&(Ws=be()+500,ru&&Er()))}function St(t,e){var n=t.callbackNode;aI(t,e);var r=ml(t,t===He?Ye:0);if(r===0)n!==null&&fm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&fm(n),e===1)t.tag===0?ox(ig.bind(null,t)):t_(ig.bind(null,t)),nx(function(){!(oe&6)&&Er()}),n=null;else{switch(Nv(r)){case 1:n=Eh;break;case 4:n=kv;break;case 16:n=pl;break;case 536870912:n=Cv;break;default:n=pl}n=Z_(n,W_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function W_(t,e){if(Ya=-1,Xa=0,oe&6)throw Error(L(327));var n=t.callbackNode;if(Vs()&&t.callbackNode!==n)return null;var r=ml(t,t===He?Ye:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Dl(t,r);else{e=r;var s=oe;oe|=2;var i=K_();(He!==t||Ye!==e)&&(pn=null,Ws=be()+500,Lr(t,e));do try{kx();break}catch(l){G_(t,l)}while(!0);Oh(),Nl.current=i,oe=s,Oe!==null?e=0:(He=null,Ye=0,e=Fe)}if(e!==0){if(e===2&&(s=od(t),s!==0&&(r=s,e=Od(t,s))),e===1)throw n=vo,Lr(t,0),qn(t,r),St(t,be()),n;if(e===6)qn(t,r);else{if(s=t.current.alternate,!(r&30)&&!Sx(s)&&(e=Dl(t,r),e===2&&(i=od(t),i!==0&&(r=i,e=Od(t,i))),e===1))throw n=vo,Lr(t,0),qn(t,r),St(t,be()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:Nr(t,wt,pn);break;case 3:if(qn(t,r),(r&130023424)===r&&(e=Qh+500-be(),10<e)){if(ml(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){mt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=pd(Nr.bind(null,t,wt,pn),e);break}Nr(t,wt,pn);break;case 4:if(qn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Kt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*xx(r/1960))-r,10<r){t.timeoutHandle=pd(Nr.bind(null,t,wt,pn),r);break}Nr(t,wt,pn);break;case 5:Nr(t,wt,pn);break;default:throw Error(L(329))}}}return St(t,be()),t.callbackNode===n?W_.bind(null,t):null}function Od(t,e){var n=Wi;return t.current.memoizedState.isDehydrated&&(Lr(t,e).flags|=256),t=Dl(t,e),t!==2&&(e=wt,wt=n,e!==null&&Vd(e)),t}function Vd(t){wt===null?wt=t:wt.push.apply(wt,t)}function Sx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Xt(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function qn(t,e){for(e&=~Kh,e&=~au,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Kt(e),r=1<<n;t[n]=-1,e&=~r}}function ig(t){if(oe&6)throw Error(L(327));Vs();var e=ml(t,0);if(!(e&1))return St(t,be()),null;var n=Dl(t,e);if(t.tag!==0&&n===2){var r=od(t);r!==0&&(e=r,n=Od(t,r))}if(n===1)throw n=vo,Lr(t,0),qn(t,e),St(t,be()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,wt,pn),St(t,be()),null}function Yh(t,e){var n=oe;oe|=1;try{return t(e)}finally{oe=n,oe===0&&(Ws=be()+500,ru&&Er())}}function Wr(t){Jn!==null&&Jn.tag===0&&!(oe&6)&&Vs();var e=oe;oe|=1;var n=Ft.transition,r=de;try{if(Ft.transition=null,de=1,t)return t()}finally{de=r,Ft.transition=n,oe=e,!(oe&6)&&Er()}}function Xh(){Ct=ks.current,Ee(ks)}function Lr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tx(n)),Oe!==null)for(n=Oe.return;n!==null;){var r=n;switch(Ph(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wl();break;case 3:Hs(),Ee(It),Ee(ct),Uh();break;case 5:Fh(r);break;case 4:Hs();break;case 13:Ee(xe);break;case 19:Ee(xe);break;case 10:Vh(r.type._context);break;case 22:case 23:Xh()}n=n.return}if(He=t,Oe=t=lr(t.current,null),Ye=Ct=e,Fe=0,vo=null,Kh=au=qr=0,wt=Wi=null,Or!==null){for(e=0;e<Or.length;e++)if(n=Or[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Or=null}return t}function G_(t,e){do{var n=Oe;try{if(Oh(),Ga.current=Rl,Cl){for(var r=Se.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Cl=!1}if(Hr=0,$e=Le=Se=null,Hi=!1,mo=0,Gh.current=null,n===null||n.return===null){Fe=1,vo=e,Oe=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=Ye,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var _=Wm(o);if(_!==null){_.flags&=-257,Gm(_,o,l,i,e),_.mode&1&&qm(i,d,e),e=_,u=d;var x=e.updateQueue;if(x===null){var P=new Set;P.add(u),e.updateQueue=P}else x.add(u);break e}else{if(!(e&1)){qm(i,d,e),Jh();break e}u=Error(L(426))}}else if(Ie&&l.mode&1){var O=Wm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Gm(O,o,l,i,e),bh(qs(u,l));break e}}i=u=qs(u,l),Fe!==4&&(Fe=2),Wi===null?Wi=[i]:Wi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var T=N_(i,u,e);Fm(i,T);break e;case 1:l=u;var E=i.type,k=i.stateNode;if(!(i.flags&128)&&(typeof E.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(or===null||!or.has(k)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=P_(i,l,e);Fm(i,D);break e}}i=i.return}while(i!==null)}Y_(n)}catch(U){e=U,Oe===n&&n!==null&&(Oe=n=n.return);continue}break}while(!0)}function K_(){var t=Nl.current;return Nl.current=Rl,t===null?Rl:t}function Jh(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),He===null||!(qr&268435455)&&!(au&268435455)||qn(He,Ye)}function Dl(t,e){var n=oe;oe|=2;var r=K_();(He!==t||Ye!==e)&&(pn=null,Lr(t,e));do try{Ax();break}catch(s){G_(t,s)}while(!0);if(Oh(),oe=n,Nl.current=r,Oe!==null)throw Error(L(261));return He=null,Ye=0,Fe}function Ax(){for(;Oe!==null;)Q_(Oe)}function kx(){for(;Oe!==null&&!JT();)Q_(Oe)}function Q_(t){var e=J_(t.alternate,t,Ct);t.memoizedProps=t.pendingProps,e===null?Y_(t):Oe=e,Gh.current=null}function Y_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=wx(n,e),n!==null){n.flags&=32767,Oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Fe=6,Oe=null;return}}else if(n=_x(n,e,Ct),n!==null){Oe=n;return}if(e=e.sibling,e!==null){Oe=e;return}Oe=e=t}while(e!==null);Fe===0&&(Fe=5)}function Nr(t,e,n){var r=de,s=Ft.transition;try{Ft.transition=null,de=1,Cx(t,e,n,r)}finally{Ft.transition=s,de=r}return null}function Cx(t,e,n,r){do Vs();while(Jn!==null);if(oe&6)throw Error(L(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(lI(t,i),t===He&&(Oe=He=null,Ye=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ba||(ba=!0,Z_(pl,function(){return Vs(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Ft.transition,Ft.transition=null;var o=de;de=1;var l=oe;oe|=4,Gh.current=null,Tx(t,n),H_(n,t),KI(hd),gl=!!dd,hd=dd=null,t.current=n,Ix(n),ZT(),oe=l,de=o,Ft.transition=i}else t.current=n;if(ba&&(ba=!1,Jn=t,bl=s),i=t.pendingLanes,i===0&&(or=null),nI(n.stateNode),St(t,be()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Pl)throw Pl=!1,t=bd,bd=null,t;return bl&1&&t.tag!==0&&Vs(),i=t.pendingLanes,i&1?t===Dd?Gi++:(Gi=0,Dd=t):Gi=0,Er(),null}function Vs(){if(Jn!==null){var t=Nv(bl),e=Ft.transition,n=de;try{if(Ft.transition=null,de=16>t?16:t,Jn===null)var r=!1;else{if(t=Jn,Jn=null,bl=0,oe&6)throw Error(L(331));var s=oe;for(oe|=4,B=t.current;B!==null;){var i=B,o=i.child;if(B.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(B=d;B!==null;){var f=B;switch(f.tag){case 0:case 11:case 15:qi(8,f,i)}var m=f.child;if(m!==null)m.return=f,B=m;else for(;B!==null;){f=B;var g=f.sibling,_=f.return;if(z_(f),f===d){B=null;break}if(g!==null){g.return=_,B=g;break}B=_}}}var x=i.alternate;if(x!==null){var P=x.child;if(P!==null){x.child=null;do{var O=P.sibling;P.sibling=null,P=O}while(P!==null)}}B=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,B=o;else e:for(;B!==null;){if(i=B,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qi(9,i,i.return)}var T=i.sibling;if(T!==null){T.return=i.return,B=T;break e}B=i.return}}var E=t.current;for(B=E;B!==null;){o=B;var k=o.child;if(o.subtreeFlags&2064&&k!==null)k.return=o,B=k;else e:for(o=E;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ou(9,l)}}catch(U){Re(l,l.return,U)}if(l===o){B=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,B=D;break e}B=l.return}}if(oe=s,Er(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Jl,t)}catch{}r=!0}return r}finally{de=n,Ft.transition=e}}return!1}function og(t,e,n){e=qs(n,e),e=N_(t,e,1),t=ir(t,e,1),e=mt(),t!==null&&(bo(t,1,e),St(t,e))}function Re(t,e,n){if(t.tag===3)og(t,t,n);else for(;e!==null;){if(e.tag===3){og(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){t=qs(n,t),t=P_(e,t,1),e=ir(e,t,1),t=mt(),e!==null&&(bo(e,1,t),St(e,t));break}}e=e.return}}function Rx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=mt(),t.pingedLanes|=t.suspendedLanes&n,He===t&&(Ye&n)===n&&(Fe===4||Fe===3&&(Ye&130023424)===Ye&&500>be()-Qh?Lr(t,0):Kh|=n),St(t,e)}function X_(t,e){e===0&&(t.mode&1?(e=Ta,Ta<<=1,!(Ta&130023424)&&(Ta=4194304)):e=1);var n=mt();t=Sn(t,e),t!==null&&(bo(t,e,n),St(t,n))}function Nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),X_(t,n)}function Px(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),X_(t,n)}var J_;J_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||It.current)Tt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tt=!1,vx(t,e,n);Tt=!!(t.flags&131072)}else Tt=!1,Ie&&e.flags&1048576&&n_(e,Il,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Qa(t,e),t=e.pendingProps;var s=zs(e,ct.current);Os(e,n),s=$h(null,e,r,t,s,n);var i=Bh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xt(r)?(i=!0,El(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Lh(e),s.updater=iu,e.stateNode=s,s._reactInternals=e,Ed(e,r,t,n),e=xd(null,e,r,!0,i,n)):(e.tag=0,Ie&&i&&Nh(e),pt(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Qa(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=Dx(r),t=qt(r,t),s){case 0:e=Id(null,e,r,t,n);break e;case 1:e=Ym(null,e,r,t,n);break e;case 11:e=Km(null,e,r,t,n);break e;case 14:e=Qm(null,e,r,qt(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Id(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Ym(t,e,r,s,n);case 3:e:{if(V_(e),t===null)throw Error(L(387));r=e.pendingProps,i=e.memoizedState,s=i.element,l_(t,e),Al(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=qs(Error(L(423)),e),e=Xm(t,e,r,n,s);break e}else if(r!==s){s=qs(Error(L(424)),e),e=Xm(t,e,r,n,s);break e}else for(Rt=sr(e.stateNode.containerInfo.firstChild),Pt=e,Ie=!0,Gt=null,n=o_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if($s(),r===s){e=An(t,e,n);break e}pt(t,e,r,n)}e=e.child}return e;case 5:return u_(e),t===null&&vd(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,fd(r,s)?o=null:i!==null&&fd(r,i)&&(e.flags|=32),O_(t,e),pt(t,e,o,n),e.child;case 6:return t===null&&vd(e),null;case 13:return M_(t,e,n);case 4:return jh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bs(e,null,r,n):pt(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Km(t,e,r,s,n);case 7:return pt(t,e,e.pendingProps,n),e.child;case 8:return pt(t,e,e.pendingProps.children,n),e.child;case 12:return pt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,ye(xl,r._currentValue),r._currentValue=o,i!==null)if(Xt(i.value,o)){if(i.children===s.children&&!It.current){e=An(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=En(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),_d(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(L(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),_d(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}pt(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Os(e,n),s=zt(s),r=r(s),e.flags|=1,pt(t,e,r,n),e.child;case 14:return r=e.type,s=qt(r,e.pendingProps),s=qt(r.type,s),Qm(t,e,r,s,n);case 15:return b_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:qt(r,s),Qa(t,e),e.tag=1,xt(r)?(t=!0,El(e)):t=!1,Os(e,n),R_(e,r,s),Ed(e,r,s,n),xd(null,e,r,!0,t,n);case 19:return L_(t,e,n);case 22:return D_(t,e,n)}throw Error(L(156,e.tag))};function Z_(t,e){return Av(t,e)}function bx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(t,e,n,r){return new bx(t,e,n,r)}function Zh(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Dx(t){if(typeof t=="function")return Zh(t)?1:0;if(t!=null){if(t=t.$$typeof,t===vh)return 11;if(t===_h)return 14}return 2}function lr(t,e){var n=t.alternate;return n===null?(n=jt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ja(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")Zh(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ys:return jr(n.children,s,i,e);case yh:o=8,s|=8;break;case qc:return t=jt(12,n,e,s|2),t.elementType=qc,t.lanes=i,t;case Wc:return t=jt(13,n,e,s),t.elementType=Wc,t.lanes=i,t;case Gc:return t=jt(19,n,e,s),t.elementType=Gc,t.lanes=i,t;case uv:return lu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case av:o=10;break e;case lv:o=9;break e;case vh:o=11;break e;case _h:o=14;break e;case zn:o=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=jt(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function jr(t,e,n,r){return t=jt(7,t,r,e),t.lanes=n,t}function lu(t,e,n,r){return t=jt(22,t,r,e),t.elementType=uv,t.lanes=n,t.stateNode={isHidden:!1},t}function Nc(t,e,n){return t=jt(6,t,null,e),t.lanes=n,t}function Pc(t,e,n){return e=jt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Ox(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=dc(0),this.expirationTimes=dc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=dc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function ef(t,e,n,r,s,i,o,l,u){return t=new Ox(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=jt(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Lh(i),t}function Vx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:gs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function e0(t){if(!t)return pr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(xt(n))return e_(t,n,e)}return e}function t0(t,e,n,r,s,i,o,l,u){return t=ef(n,r,!0,t,s,i,o,l,u),t.context=e0(null),n=t.current,r=mt(),s=ar(n),i=En(r,s),i.callback=e??null,ir(n,i,s),t.current.lanes=s,bo(t,s,r),St(t,r),t}function uu(t,e,n,r){var s=e.current,i=mt(),o=ar(s);return n=e0(n),e.context===null?e.context=n:e.pendingContext=n,e=En(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=ir(s,e,o),t!==null&&(Qt(t,s,o,i),Wa(t,s,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ag(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function tf(t,e){ag(t,e),(t=t.alternate)&&ag(t,e)}function Mx(){return null}var n0=typeof reportError=="function"?reportError:function(t){console.error(t)};function nf(t){this._internalRoot=t}cu.prototype.render=nf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));uu(t,e,null,null)};cu.prototype.unmount=nf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Wr(function(){uu(null,t,null,null)}),e[xn]=null}};function cu(t){this._internalRoot=t}cu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Dv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hn.length&&e!==0&&e<Hn[n].priority;n++);Hn.splice(n,0,t),n===0&&Vv(t)}};function rf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function du(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function lg(){}function Lx(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Ol(o);i.call(d)}}var o=t0(e,r,t,0,null,!1,!1,"",lg);return t._reactRootContainer=o,t[xn]=o.current,uo(t.nodeType===8?t.parentNode:t),Wr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=Ol(u);l.call(d)}}var u=ef(t,0,!1,null,null,!1,!1,"",lg);return t._reactRootContainer=u,t[xn]=u.current,uo(t.nodeType===8?t.parentNode:t),Wr(function(){uu(e,u,n,r)}),u}function hu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Ol(o);l.call(u)}}uu(e,o,t,s)}else o=Lx(n,e,t,s,r);return Ol(o)}Pv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Oi(e.pendingLanes);n!==0&&(Th(e,n|1),St(e,be()),!(oe&6)&&(Ws=be()+500,Er()))}break;case 13:Wr(function(){var r=Sn(t,1);if(r!==null){var s=mt();Qt(r,t,1,s)}}),tf(t,1)}};Ih=function(t){if(t.tag===13){var e=Sn(t,134217728);if(e!==null){var n=mt();Qt(e,t,134217728,n)}tf(t,134217728)}};bv=function(t){if(t.tag===13){var e=ar(t),n=Sn(t,e);if(n!==null){var r=mt();Qt(n,t,e,r)}tf(t,e)}};Dv=function(){return de};Ov=function(t,e){var n=de;try{return de=t,e()}finally{de=n}};rd=function(t,e,n){switch(e){case"input":if(Yc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=nu(r);if(!s)throw Error(L(90));dv(r),Yc(r,s)}}}break;case"textarea":fv(t,n);break;case"select":e=n.value,e!=null&&Ns(t,!!n.multiple,e,!1)}};wv=Yh;Ev=Wr;var jx={usingClientEntryPoint:!1,Events:[Oo,Es,nu,vv,_v,Yh]},Ni={findFiberByHostInstance:Dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Fx={bundleType:Ni.bundleType,version:Ni.version,rendererPackageName:Ni.rendererPackageName,rendererConfig:Ni.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ni.findFiberByHostInstance||Mx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Da=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Da.isDisabled&&Da.supportsFiber)try{Jl=Da.inject(Fx),rn=Da}catch{}}Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=jx;Dt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!rf(e))throw Error(L(200));return Vx(t,e,null,n)};Dt.createRoot=function(t,e){if(!rf(t))throw Error(L(299));var n=!1,r="",s=n0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=ef(t,1,!1,null,null,n,!1,r,s),t[xn]=e.current,uo(t.nodeType===8?t.parentNode:t),new nf(e)};Dt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=xv(e),t=t===null?null:t.stateNode,t};Dt.flushSync=function(t){return Wr(t)};Dt.hydrate=function(t,e,n){if(!du(e))throw Error(L(200));return hu(null,t,e,!0,n)};Dt.hydrateRoot=function(t,e,n){if(!rf(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=n0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=t0(e,null,t,1,n??null,s,!1,i,o),t[xn]=e.current,uo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new cu(e)};Dt.render=function(t,e,n){if(!du(e))throw Error(L(200));return hu(null,t,e,!1,n)};Dt.unmountComponentAtNode=function(t){if(!du(t))throw Error(L(40));return t._reactRootContainer?(Wr(function(){hu(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};Dt.unstable_batchedUpdates=Yh;Dt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!du(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return hu(t,e,n,!1,r)};Dt.version="18.3.1-next-f1338f8080-20240426";function r0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r0)}catch(t){console.error(t)}}r0(),rv.exports=Dt;var Ux=rv.exports,ug=Ux;Bc.createRoot=ug.createRoot,Bc.hydrateRoot=ug.hydrateRoot;var cg={};/**
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
 */const s0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},i0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,f=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,_=d&63;u||(_=64,o||(g=64)),r.push(n[f],n[m],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(s0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new $x;const g=i<<2|l>>4;if(r.push(g),d!==64){const _=l<<4&240|d>>2;if(r.push(_),m!==64){const x=d<<6&192|m;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $x extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bx=function(t){const e=s0(t);return i0.encodeByteArray(e,!0)},Vl=function(t){return Bx(t).replace(/\./g,"")},o0=function(t){try{return i0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Hx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qx=()=>Hx().__FIREBASE_DEFAULTS__,Wx=()=>{if(typeof process>"u"||typeof cg>"u")return;const t=cg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Gx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&o0(t[1]);return e&&JSON.parse(e)},fu=()=>{try{return qx()||Wx()||Gx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},a0=t=>{var e,n;return(n=(e=fu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kx=t=>{const e=a0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},l0=()=>{var t;return(t=fu())===null||t===void 0?void 0:t.config},u0=t=>{var e;return(e=fu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Yx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Vl(JSON.stringify(n)),Vl(JSON.stringify(o)),""].join(".")}/**
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
 */function dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Xx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(dt())}function Jx(){var t;const e=(t=fu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Zx(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function e1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function t1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function n1(){const t=dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function r1(){return!Jx()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function s1(){try{return typeof indexedDB=="object"}catch{return!1}}function i1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const o1="FirebaseError";class On extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=o1,Object.setPrototypeOf(this,On.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Mo.prototype.create)}}class Mo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?a1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new On(s,l,r)}}function a1(t,e){return t.replace(l1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const l1=/\{\$([^}]+)}/g;function u1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ml(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(dg(i)&&dg(o)){if(!Ml(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function dg(t){return t!==null&&typeof t=="object"}/**
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
 */function Lo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function c1(t,e){const n=new d1(t,e);return n.subscribe.bind(n)}class d1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");h1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=bc),s.error===void 0&&(s.error=bc),s.complete===void 0&&(s.complete=bc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function h1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bc(){}/**
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
 */function qe(t){return t&&t._delegate?t._delegate:t}class Gr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Pr="[DEFAULT]";/**
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
 */class f1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(m1(e))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Pr){return this.instances.has(e)}getOptions(e=Pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:p1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Pr){return this.component?this.component.multipleInstances?e:Pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function p1(t){return t===Pr?void 0:t}function m1(t){return t.instantiationMode==="EAGER"}/**
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
 */class g1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new f1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var re;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(re||(re={}));const y1={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},v1=re.INFO,_1={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},w1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=_1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sf{constructor(e){this.name=e,this._logLevel=v1,this._logHandler=w1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?y1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}const E1=(t,e)=>e.some(n=>t instanceof n);let hg,fg;function T1(){return hg||(hg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function I1(){return fg||(fg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c0=new WeakMap,Md=new WeakMap,d0=new WeakMap,Dc=new WeakMap,of=new WeakMap;function x1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(ur(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&c0.set(n,t)}).catch(()=>{}),of.set(e,t),e}function S1(t){if(Md.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Md.set(t,e)}let Ld={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Md.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ur(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function A1(t){Ld=t(Ld)}function k1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Oc(this),e,...n);return d0.set(r,e.sort?e.sort():[e]),ur(r)}:I1().includes(t)?function(...e){return t.apply(Oc(this),e),ur(c0.get(this))}:function(...e){return ur(t.apply(Oc(this),e))}}function C1(t){return typeof t=="function"?k1(t):(t instanceof IDBTransaction&&S1(t),E1(t,T1())?new Proxy(t,Ld):t)}function ur(t){if(t instanceof IDBRequest)return x1(t);if(Dc.has(t))return Dc.get(t);const e=C1(t);return e!==t&&(Dc.set(t,e),of.set(e,t)),e}const Oc=t=>of.get(t);function R1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=ur(o);return r&&o.addEventListener("upgradeneeded",u=>{r(ur(o.result),u.oldVersion,u.newVersion,ur(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const N1=["get","getKey","getAll","getAllKeys","count"],P1=["put","add","delete","clear"],Vc=new Map;function pg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Vc.get(e))return Vc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=P1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||N1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return Vc.set(e,i),i}A1(t=>({...t,get:(e,n,r)=>pg(e,n)||t.get(e,n,r),has:(e,n)=>!!pg(e,n)||t.has(e,n)}));/**
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
 */class b1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(D1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function D1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const jd="@firebase/app",mg="0.10.13";/**
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
 */const kn=new sf("@firebase/app"),O1="@firebase/app-compat",V1="@firebase/analytics-compat",M1="@firebase/analytics",L1="@firebase/app-check-compat",j1="@firebase/app-check",F1="@firebase/auth",U1="@firebase/auth-compat",z1="@firebase/database",$1="@firebase/data-connect",B1="@firebase/database-compat",H1="@firebase/functions",q1="@firebase/functions-compat",W1="@firebase/installations",G1="@firebase/installations-compat",K1="@firebase/messaging",Q1="@firebase/messaging-compat",Y1="@firebase/performance",X1="@firebase/performance-compat",J1="@firebase/remote-config",Z1="@firebase/remote-config-compat",eS="@firebase/storage",tS="@firebase/storage-compat",nS="@firebase/firestore",rS="@firebase/vertexai-preview",sS="@firebase/firestore-compat",iS="firebase",oS="10.14.1";/**
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
 */const Fd="[DEFAULT]",aS={[jd]:"fire-core",[O1]:"fire-core-compat",[M1]:"fire-analytics",[V1]:"fire-analytics-compat",[j1]:"fire-app-check",[L1]:"fire-app-check-compat",[F1]:"fire-auth",[U1]:"fire-auth-compat",[z1]:"fire-rtdb",[$1]:"fire-data-connect",[B1]:"fire-rtdb-compat",[H1]:"fire-fn",[q1]:"fire-fn-compat",[W1]:"fire-iid",[G1]:"fire-iid-compat",[K1]:"fire-fcm",[Q1]:"fire-fcm-compat",[Y1]:"fire-perf",[X1]:"fire-perf-compat",[J1]:"fire-rc",[Z1]:"fire-rc-compat",[eS]:"fire-gcs",[tS]:"fire-gcs-compat",[nS]:"fire-fst",[sS]:"fire-fst-compat",[rS]:"fire-vertex","fire-js":"fire-js",[iS]:"fire-js-all"};/**
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
 */const Ll=new Map,lS=new Map,Ud=new Map;function gg(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gs(t){const e=t.name;if(Ud.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Ud.set(e,t);for(const n of Ll.values())gg(n,t);for(const n of lS.values())gg(n,t);return!0}function af(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Zn(t){return t.settings!==void 0}/**
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
 */const uS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new Mo("app","Firebase",uS);/**
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
 */class cS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Gr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const si=oS;function h0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Fd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw cr.create("bad-app-name",{appName:String(s)});if(n||(n=l0()),!n)throw cr.create("no-options");const i=Ll.get(s);if(i){if(Ml(n,i.options)&&Ml(r,i.config))return i;throw cr.create("duplicate-app",{appName:s})}const o=new g1(s);for(const u of Ud.values())o.addComponent(u);const l=new cS(n,r,o);return Ll.set(s,l),l}function f0(t=Fd){const e=Ll.get(t);if(!e&&t===Fd&&l0())return h0();if(!e)throw cr.create("no-app",{appName:t});return e}function dr(t,e,n){var r;let s=(r=aS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(l.join(" "));return}Gs(new Gr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const dS="firebase-heartbeat-database",hS=1,_o="firebase-heartbeat-store";let Mc=null;function p0(){return Mc||(Mc=R1(dS,hS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_o)}catch(n){console.warn(n)}}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),Mc}async function fS(t){try{const n=(await p0()).transaction(_o),r=await n.objectStore(_o).get(m0(t));return await n.done,r}catch(e){if(e instanceof On)kn.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function yg(t,e){try{const r=(await p0()).transaction(_o,"readwrite");await r.objectStore(_o).put(e,m0(t)),await r.done}catch(n){if(n instanceof On)kn.warn(n.message);else{const r=cr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function m0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const pS=1024,mS=30*24*60*60*1e3;class gS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=vg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=mS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){kn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=vg(),{heartbeatsToSend:r,unsentEntries:s}=yS(this._heartbeatsCache.heartbeats),i=Vl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return kn.warn(n),""}}}function vg(){return new Date().toISOString().substring(0,10)}function yS(t,e=pS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_g(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_g(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return s1()?i1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await fS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return yg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _g(t){return Vl(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _S(t){Gs(new Gr("platform-logger",e=>new b1(e),"PRIVATE")),Gs(new Gr("heartbeat",e=>new gS(e),"PRIVATE")),dr(jd,mg,t),dr(jd,mg,"esm2017"),dr("fire-js","")}_S("");function lf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function g0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const wS=g0,y0=new Mo("auth","Firebase",g0());/**
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
 */const jl=new sf("@firebase/auth");function ES(t,...e){jl.logLevel<=re.WARN&&jl.warn(`Auth (${si}): ${t}`,...e)}function Za(t,...e){jl.logLevel<=re.ERROR&&jl.error(`Auth (${si}): ${t}`,...e)}/**
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
 */function Cn(t,...e){throw uf(t,...e)}function on(t,...e){return uf(t,...e)}function v0(t,e,n){const r=Object.assign(Object.assign({},wS()),{[e]:n});return new Mo("auth","Firebase",r).create(e,{appName:t.name})}function Fr(t){return v0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function uf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return y0.create(t,...e)}function Y(t,e,...n){if(!t)throw uf(e,...n)}function vn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Za(e),new Error(e)}function Rn(t,e){t||vn(e)}/**
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
 */function zd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function TS(){return wg()==="http:"||wg()==="https:"}function wg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function IS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(TS()||e1()||"connection"in navigator)?navigator.onLine:!0}function xS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class jo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=Xx()||t1()}get(){return IS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cf(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class _0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;vn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;vn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;vn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const SS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const AS=new jo(3e4,6e4);function df(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ii(t,e,n,r,s={}){return w0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=Lo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return Zx()||(d.referrerPolicy="no-referrer"),_0.fetch()(E0(t,t.config.apiHost,n,l),d)})}async function w0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},SS),e);try{const s=new CS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Oa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Oa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Oa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Oa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw v0(t,f,d);Cn(t,f)}}catch(s){if(s instanceof On)throw s;Cn(t,"network-request-failed",{message:String(s)})}}async function kS(t,e,n,r,s={}){const i=await ii(t,e,n,r,s);return"mfaPendingCredential"in i&&Cn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function E0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?cf(t.config,s):`${t.config.apiScheme}://${s}`}class CS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),AS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function RS(t,e){return ii(t,"POST","/v1/accounts:delete",e)}async function T0(t,e){return ii(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ki(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function NS(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=hf(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ki(Lc(s.auth_time)),issuedAtTime:Ki(Lc(s.iat)),expirationTime:Ki(Lc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Lc(t){return Number(t)*1e3}function hf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Za("JWT malformed, contained fewer than 3 sections"),null;try{const s=o0(n);return s?JSON.parse(s):(Za("Failed to decode base64 JWT payload"),null)}catch(s){return Za("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Eg(t){const e=hf(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function wo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof On&&PS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class bS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class $d{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ki(this.lastLoginAt),this.creationTime=Ki(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Fl(t){var e;const n=t.auth,r=await t.getIdToken(),s=await wo(t,T0(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?I0(i.providerUserInfo):[],l=OS(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),f=u?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new $d(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function DS(t){const e=qe(t);await Fl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function OS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function I0(t){return t.map(e=>{var{providerId:n}=e,r=lf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VS(t,e){const n=await w0(t,{},async()=>{const r=Lo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=E0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",_0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function MS(t,e){return ii(t,"POST","/v2/accounts:revokeToken",df(t,e))}/**
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
 */class Ms{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Eg(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Eg(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await VS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ms;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ms,this.toJSON())}_performRefresh(){return vn("not implemented")}}/**
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
 */function Fn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class _n{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=lf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $d(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await wo(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return NS(this,e)}reload(){return DS(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new _n(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Fl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(Fr(this.auth));const e=await this.getIdToken();return await wo(this,RS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,d,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,x=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,T=(d=n.createdAt)!==null&&d!==void 0?d:void 0,E=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:D,isAnonymous:U,providerData:j,stsTokenManager:I}=n;Y(k&&I,e,"internal-error");const v=Ms.fromJSON(this.name,I);Y(typeof k=="string",e,"internal-error"),Fn(m,e.name),Fn(g,e.name),Y(typeof D=="boolean",e,"internal-error"),Y(typeof U=="boolean",e,"internal-error"),Fn(_,e.name),Fn(x,e.name),Fn(P,e.name),Fn(O,e.name),Fn(T,e.name),Fn(E,e.name);const w=new _n({uid:k,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:U,photoURL:x,phoneNumber:_,tenantId:P,stsTokenManager:v,createdAt:T,lastLoginAt:E});return j&&Array.isArray(j)&&(w.providerData=j.map(S=>Object.assign({},S))),O&&(w._redirectEventId=O),w}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ms;s.updateFromServerResponse(n);const i=new _n({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Fl(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?I0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Ms;l.updateFromIdToken(r);const u=new _n({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new $d(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Tg=new Map;function wn(t){Rn(t instanceof Function,"Expected a class definition");let e=Tg.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tg.set(t,e),e)}/**
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
 */class x0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}x0.type="NONE";const Ig=x0;/**
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
 */function el(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=el(this.userKey,s.apiKey,i),this.fullPersistenceKey=el("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?_n._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(wn(Ig),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||wn(Ig);const o=el(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const f=await d._get(o);if(f){const m=_n._fromJSON(e,f);d!==i&&(l=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Ls(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Ls(i,e,r))}}/**
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
 */function xg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(C0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(S0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(N0(e))return"Blackberry";if(P0(e))return"Webos";if(A0(e))return"Safari";if((e.includes("chrome/")||k0(e))&&!e.includes("edge/"))return"Chrome";if(R0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function S0(t=dt()){return/firefox\//i.test(t)}function A0(t=dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function k0(t=dt()){return/crios\//i.test(t)}function C0(t=dt()){return/iemobile/i.test(t)}function R0(t=dt()){return/android/i.test(t)}function N0(t=dt()){return/blackberry/i.test(t)}function P0(t=dt()){return/webos/i.test(t)}function ff(t=dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function LS(t=dt()){var e;return ff(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jS(){return n1()&&document.documentMode===10}function b0(t=dt()){return ff(t)||R0(t)||P0(t)||N0(t)||/windows phone/i.test(t)||C0(t)}/**
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
 */function D0(t,e=[]){let n;switch(t){case"Browser":n=xg(dt());break;case"Worker":n=`${xg(dt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${si}/${r}`}/**
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
 */class FS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function US(t,e={}){return ii(t,"GET","/v2/passwordPolicy",df(t,e))}/**
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
 */const zS=6;class $S{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:zS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class BS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Sg(this),this.idTokenSubscription=new Sg(this),this.beforeStateQueue=new FS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=wn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await T0(this,{idToken:e}),r=await _n._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Zn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Fl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Zn(this.app))return Promise.reject(Fr(this));const n=e?qe(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(Fr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Zn(this.app)?Promise.reject(Fr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(wn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await US(this),n=new $S(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Mo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await MS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&wn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[wn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ES(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function pf(t){return qe(t)}class Sg{constructor(e){this.auth=e,this.observer=null,this.addObserver=c1(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let mf={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function HS(t){mf=t}function qS(t){return mf.loadJS(t)}function WS(){return mf.gapiScript}function GS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function KS(t,e){const n=af(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ml(i,e??{}))return s;Cn(s,"already-initialized")}return n.initialize({options:e})}function QS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(wn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function YS(t,e,n){const r=pf(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=O0(e),{host:o,port:l}=XS(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),JS()}function O0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function XS(t){const e=O0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Ag(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Ag(o)}}}function Ag(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class V0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vn("not implemented")}_getIdTokenResponse(e){return vn("not implemented")}_linkToIdToken(e,n){return vn("not implemented")}_getReauthenticationResolver(e){return vn("not implemented")}}/**
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
 */async function js(t,e){return kS(t,"POST","/v1/accounts:signInWithIdp",df(t,e))}/**
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
 */const ZS="http://localhost";class Kr extends V0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Cn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=lf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return js(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,js(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,js(e,n)}buildRequest(){const e={requestUri:ZS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Lo(n)}return e}}/**
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
 */class M0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Fo extends M0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Wn extends Fo{constructor(){super("facebook.com")}static credential(e){return Kr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends Fo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Kr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Gn.credential(n,r)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Kn extends Fo{constructor(){super("github.com")}static credential(e){return Kr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kn.credential(e.oauthAccessToken)}catch{return null}}}Kn.GITHUB_SIGN_IN_METHOD="github.com";Kn.PROVIDER_ID="github.com";/**
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
 */class Qn extends Fo{constructor(){super("twitter.com")}static credential(e,n){return Kr._fromParams({providerId:Qn.PROVIDER_ID,signInMethod:Qn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Qn.credentialFromTaggedObject(e)}static credentialFromError(e){return Qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Qn.credential(n,r)}catch{return null}}}Qn.TWITTER_SIGN_IN_METHOD="twitter.com";Qn.PROVIDER_ID="twitter.com";/**
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
 */class Ks{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await _n._fromIdTokenResponse(e,r,s),o=kg(r);return new Ks({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=kg(r);return new Ks({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function kg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Ul extends On{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Ul.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Ul(e,n,r,s)}}function L0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Ul._fromErrorAndOperation(t,i,e,r):i})}async function eA(t,e,n=!1){const r=await wo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ks._forOperation(t,"link",r)}/**
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
 */async function tA(t,e,n=!1){const{auth:r}=t;if(Zn(r.app))return Promise.reject(Fr(r));const s="reauthenticate";try{const i=await wo(t,L0(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=hf(i.idToken);Y(o,r,"internal-error");const{sub:l}=o;return Y(t.uid===l,r,"user-mismatch"),Ks._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Cn(r,"user-mismatch"),i}}/**
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
 */async function nA(t,e,n=!1){if(Zn(t.app))return Promise.reject(Fr(t));const r="signIn",s=await L0(t,r,e),i=await Ks._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function rA(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function sA(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function iA(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function oA(t){return qe(t).signOut()}const zl="__sak";/**
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
 */class j0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(zl,"1"),this.storage.removeItem(zl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const aA=1e3,lA=10;class F0 extends j0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=b0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);jS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,lA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}F0.type="LOCAL";const uA=F0;/**
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
 */class U0 extends j0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}U0.type="SESSION";const z0=U0;/**
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
 */function cA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class pu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new pu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await cA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}pu.receivers=[];/**
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
 */function gf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class dA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=gf("",20);s.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(f),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function hA(t){an().location.href=t}/**
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
 */function $0(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function fA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mA(){return $0()?self:null}/**
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
 */const B0="firebaseLocalStorageDb",gA=1,$l="firebaseLocalStorage",H0="fbase_key";class Uo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function mu(t,e){return t.transaction([$l],e?"readwrite":"readonly").objectStore($l)}function yA(){const t=indexedDB.deleteDatabase(B0);return new Uo(t).toPromise()}function Bd(){const t=indexedDB.open(B0,gA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore($l,{keyPath:H0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains($l)?e(r):(r.close(),await yA(),e(await Bd()))})})}async function Cg(t,e,n){const r=mu(t,!0).put({[H0]:e,value:n});return new Uo(r).toPromise()}async function vA(t,e){const n=mu(t,!1).get(e),r=await new Uo(n).toPromise();return r===void 0?null:r.value}function Rg(t,e){const n=mu(t,!0).delete(e);return new Uo(n).toPromise()}const _A=800,wA=3;class q0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>wA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=pu._getInstance(mA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fA(),!this.activeServiceWorker)return;this.sender=new dA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bd();return await Cg(e,zl,"1"),await Rg(e,zl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Rg(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=mu(s,!1).getAll();return new Uo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_A)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}q0.type="LOCAL";const EA=q0;new jo(3e4,6e4);/**
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
 */function TA(t,e){return e?wn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class yf extends V0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return js(e,this._buildIdpRequest())}_linkToIdToken(e,n){return js(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return js(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IA(t){return nA(t.auth,new yf(t),t.bypassAuthState)}function xA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),tA(n,new yf(t),t.bypassAuthState)}async function SA(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),eA(n,new yf(t),t.bypassAuthState)}/**
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
 */class W0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IA;case"linkViaPopup":case"linkViaRedirect":return SA;case"reauthViaPopup":case"reauthViaRedirect":return xA;default:Cn(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const AA=new jo(2e3,1e4);class Cs extends W0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Cs.currentPopupAction&&Cs.currentPopupAction.cancel(),Cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=gf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,AA.get())};e()}}Cs.currentPopupAction=null;/**
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
 */const kA="pendingRedirect",tl=new Map;class CA extends W0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=tl.get(this.auth._key());if(!e){try{const r=await RA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}tl.set(this.auth._key(),e)}return this.bypassAuthState||tl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RA(t,e){const n=bA(e),r=PA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function NA(t,e){tl.set(t._key(),e)}function PA(t){return wn(t._redirectPersistence)}function bA(t){return el(kA,t.config.apiKey,t.name)}async function DA(t,e,n=!1){if(Zn(t.app))return Promise.reject(Fr(t));const r=pf(t),s=TA(r,e),o=await new CA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const OA=10*60*1e3;class VA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!MA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!G0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=OA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ng(e))}saveEventToCache(e){this.cachedEventUids.add(Ng(e)),this.lastProcessedEventTime=Date.now()}}function Ng(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function G0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function MA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return G0(t);default:return!1}}/**
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
 */async function LA(t,e={}){return ii(t,"GET","/v1/projects",e)}/**
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
 */const jA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FA=/^https?/;async function UA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LA(t);for(const n of e)try{if(zA(n))return}catch{}Cn(t,"unauthorized-domain")}function zA(t){const e=zd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FA.test(n))return!1;if(jA.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const $A=new jo(3e4,6e4);function Pg(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BA(t){return new Promise((e,n)=>{var r,s,i;function o(){Pg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Pg(),n(on(t,"network-request-failed"))},timeout:$A.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const l=GS("iframefcb");return an()[l]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},qS(`${WS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw nl=null,e})}let nl=null;function HA(t){return nl=nl||BA(t),nl}/**
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
 */const qA=new jo(5e3,15e3),WA="__/auth/iframe",GA="emulator/auth/iframe",KA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YA(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cf(e,GA):`https://${t.config.authDomain}/${WA}`,r={apiKey:e.apiKey,appName:t.name,v:si},s=QA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Lo(r).slice(1)}`}async function XA(t){const e=await HA(t),n=an().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:YA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:KA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{i(o)},qA.get());function u(){an().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const JA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZA=500,ek=600,tk="_blank",nk="http://localhost";class bg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rk(t,e,n,r=ZA,s=ek){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},JA),{width:r.toString(),height:s.toString(),top:i,left:o}),d=dt().toLowerCase();n&&(l=k0(d)?tk:n),S0(d)&&(e=e||nk,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[_,x])=>`${g}${_}=${x},`,"");if(LS(d)&&l!=="_self")return sk(e||"",l),new bg(null);const m=window.open(e||"",l,f);Y(m,t,"popup-blocked");try{m.focus()}catch{}return new bg(m)}function sk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ik="__/auth/handler",ok="emulator/auth/handler",ak=encodeURIComponent("fac");async function Dg(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:si,eventId:s};if(e instanceof M0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",u1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))o[f]=m}if(e instanceof Fo){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),d=u?`#${ak}=${encodeURIComponent(u)}`:"";return`${lk(t)}?${Lo(l).slice(1)}${d}`}function lk({config:t}){return t.emulator?cf(t,ok):`https://${t.authDomain}/${ik}`}/**
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
 */const jc="webStorageSupport";class uk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=z0,this._completeRedirectFn=DA,this._overrideRedirectResult=NA}async _openPopup(e,n,r,s){var i;Rn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Dg(e,n,r,zd(),s);return rk(e,o,gf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Dg(e,n,r,zd(),s);return hA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Rn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XA(e),r=new VA(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(jc,{type:jc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[jc];o!==void 0&&n(!!o),Cn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=UA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return b0()||A0()||ff()}}const ck=uk;var Og="@firebase/auth",Vg="1.7.9";/**
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
 */class dk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function hk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fk(t){Gs(new Gr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D0(t)},d=new BS(r,s,i,u);return QS(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gs(new Gr("auth-internal",e=>{const n=pf(e.getProvider("auth").getImmediate());return(r=>new dk(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),dr(Og,Vg,hk(t)),dr(Og,Vg,"esm2017")}/**
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
 */const pk=5*60,mk=u0("authIdTokenMaxAge")||pk;let Mg=null;const gk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mk)return;const s=n==null?void 0:n.token;Mg!==s&&(Mg=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function yk(t=f0()){const e=af(t,"auth");if(e.isInitialized())return e.getImmediate();const n=KS(t,{popupRedirectResolver:ck,persistence:[EA,uA,z0]}),r=u0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=gk(i.toString());sA(n,o,()=>o(n.currentUser)),rA(n,l=>o(l))}}const s=a0("auth");return s&&YS(n,`http://${s}`),n}function vk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}HS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",vk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fk("Browser");var _k="firebase",wk="10.14.1";/**
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
 */dr(_k,wk,"app");var Lg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ur,K0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function w(){}w.prototype=v.prototype,I.D=v.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(S,C,R){for(var A=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)A[Ue-2]=arguments[Ue];return v.prototype[C].apply(S,A)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,w){w||(w=0);var S=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)S[C]=v.charCodeAt(w++)|v.charCodeAt(w++)<<8|v.charCodeAt(w++)<<16|v.charCodeAt(w++)<<24;else for(C=0;16>C;++C)S[C]=v[w++]|v[w++]<<8|v[w++]<<16|v[w++]<<24;v=I.g[0],w=I.g[1],C=I.g[2];var R=I.g[3],A=v+(R^w&(C^R))+S[0]+3614090360&4294967295;v=w+(A<<7&4294967295|A>>>25),A=R+(C^v&(w^C))+S[1]+3905402710&4294967295,R=v+(A<<12&4294967295|A>>>20),A=C+(w^R&(v^w))+S[2]+606105819&4294967295,C=R+(A<<17&4294967295|A>>>15),A=w+(v^C&(R^v))+S[3]+3250441966&4294967295,w=C+(A<<22&4294967295|A>>>10),A=v+(R^w&(C^R))+S[4]+4118548399&4294967295,v=w+(A<<7&4294967295|A>>>25),A=R+(C^v&(w^C))+S[5]+1200080426&4294967295,R=v+(A<<12&4294967295|A>>>20),A=C+(w^R&(v^w))+S[6]+2821735955&4294967295,C=R+(A<<17&4294967295|A>>>15),A=w+(v^C&(R^v))+S[7]+4249261313&4294967295,w=C+(A<<22&4294967295|A>>>10),A=v+(R^w&(C^R))+S[8]+1770035416&4294967295,v=w+(A<<7&4294967295|A>>>25),A=R+(C^v&(w^C))+S[9]+2336552879&4294967295,R=v+(A<<12&4294967295|A>>>20),A=C+(w^R&(v^w))+S[10]+4294925233&4294967295,C=R+(A<<17&4294967295|A>>>15),A=w+(v^C&(R^v))+S[11]+2304563134&4294967295,w=C+(A<<22&4294967295|A>>>10),A=v+(R^w&(C^R))+S[12]+1804603682&4294967295,v=w+(A<<7&4294967295|A>>>25),A=R+(C^v&(w^C))+S[13]+4254626195&4294967295,R=v+(A<<12&4294967295|A>>>20),A=C+(w^R&(v^w))+S[14]+2792965006&4294967295,C=R+(A<<17&4294967295|A>>>15),A=w+(v^C&(R^v))+S[15]+1236535329&4294967295,w=C+(A<<22&4294967295|A>>>10),A=v+(C^R&(w^C))+S[1]+4129170786&4294967295,v=w+(A<<5&4294967295|A>>>27),A=R+(w^C&(v^w))+S[6]+3225465664&4294967295,R=v+(A<<9&4294967295|A>>>23),A=C+(v^w&(R^v))+S[11]+643717713&4294967295,C=R+(A<<14&4294967295|A>>>18),A=w+(R^v&(C^R))+S[0]+3921069994&4294967295,w=C+(A<<20&4294967295|A>>>12),A=v+(C^R&(w^C))+S[5]+3593408605&4294967295,v=w+(A<<5&4294967295|A>>>27),A=R+(w^C&(v^w))+S[10]+38016083&4294967295,R=v+(A<<9&4294967295|A>>>23),A=C+(v^w&(R^v))+S[15]+3634488961&4294967295,C=R+(A<<14&4294967295|A>>>18),A=w+(R^v&(C^R))+S[4]+3889429448&4294967295,w=C+(A<<20&4294967295|A>>>12),A=v+(C^R&(w^C))+S[9]+568446438&4294967295,v=w+(A<<5&4294967295|A>>>27),A=R+(w^C&(v^w))+S[14]+3275163606&4294967295,R=v+(A<<9&4294967295|A>>>23),A=C+(v^w&(R^v))+S[3]+4107603335&4294967295,C=R+(A<<14&4294967295|A>>>18),A=w+(R^v&(C^R))+S[8]+1163531501&4294967295,w=C+(A<<20&4294967295|A>>>12),A=v+(C^R&(w^C))+S[13]+2850285829&4294967295,v=w+(A<<5&4294967295|A>>>27),A=R+(w^C&(v^w))+S[2]+4243563512&4294967295,R=v+(A<<9&4294967295|A>>>23),A=C+(v^w&(R^v))+S[7]+1735328473&4294967295,C=R+(A<<14&4294967295|A>>>18),A=w+(R^v&(C^R))+S[12]+2368359562&4294967295,w=C+(A<<20&4294967295|A>>>12),A=v+(w^C^R)+S[5]+4294588738&4294967295,v=w+(A<<4&4294967295|A>>>28),A=R+(v^w^C)+S[8]+2272392833&4294967295,R=v+(A<<11&4294967295|A>>>21),A=C+(R^v^w)+S[11]+1839030562&4294967295,C=R+(A<<16&4294967295|A>>>16),A=w+(C^R^v)+S[14]+4259657740&4294967295,w=C+(A<<23&4294967295|A>>>9),A=v+(w^C^R)+S[1]+2763975236&4294967295,v=w+(A<<4&4294967295|A>>>28),A=R+(v^w^C)+S[4]+1272893353&4294967295,R=v+(A<<11&4294967295|A>>>21),A=C+(R^v^w)+S[7]+4139469664&4294967295,C=R+(A<<16&4294967295|A>>>16),A=w+(C^R^v)+S[10]+3200236656&4294967295,w=C+(A<<23&4294967295|A>>>9),A=v+(w^C^R)+S[13]+681279174&4294967295,v=w+(A<<4&4294967295|A>>>28),A=R+(v^w^C)+S[0]+3936430074&4294967295,R=v+(A<<11&4294967295|A>>>21),A=C+(R^v^w)+S[3]+3572445317&4294967295,C=R+(A<<16&4294967295|A>>>16),A=w+(C^R^v)+S[6]+76029189&4294967295,w=C+(A<<23&4294967295|A>>>9),A=v+(w^C^R)+S[9]+3654602809&4294967295,v=w+(A<<4&4294967295|A>>>28),A=R+(v^w^C)+S[12]+3873151461&4294967295,R=v+(A<<11&4294967295|A>>>21),A=C+(R^v^w)+S[15]+530742520&4294967295,C=R+(A<<16&4294967295|A>>>16),A=w+(C^R^v)+S[2]+3299628645&4294967295,w=C+(A<<23&4294967295|A>>>9),A=v+(C^(w|~R))+S[0]+4096336452&4294967295,v=w+(A<<6&4294967295|A>>>26),A=R+(w^(v|~C))+S[7]+1126891415&4294967295,R=v+(A<<10&4294967295|A>>>22),A=C+(v^(R|~w))+S[14]+2878612391&4294967295,C=R+(A<<15&4294967295|A>>>17),A=w+(R^(C|~v))+S[5]+4237533241&4294967295,w=C+(A<<21&4294967295|A>>>11),A=v+(C^(w|~R))+S[12]+1700485571&4294967295,v=w+(A<<6&4294967295|A>>>26),A=R+(w^(v|~C))+S[3]+2399980690&4294967295,R=v+(A<<10&4294967295|A>>>22),A=C+(v^(R|~w))+S[10]+4293915773&4294967295,C=R+(A<<15&4294967295|A>>>17),A=w+(R^(C|~v))+S[1]+2240044497&4294967295,w=C+(A<<21&4294967295|A>>>11),A=v+(C^(w|~R))+S[8]+1873313359&4294967295,v=w+(A<<6&4294967295|A>>>26),A=R+(w^(v|~C))+S[15]+4264355552&4294967295,R=v+(A<<10&4294967295|A>>>22),A=C+(v^(R|~w))+S[6]+2734768916&4294967295,C=R+(A<<15&4294967295|A>>>17),A=w+(R^(C|~v))+S[13]+1309151649&4294967295,w=C+(A<<21&4294967295|A>>>11),A=v+(C^(w|~R))+S[4]+4149444226&4294967295,v=w+(A<<6&4294967295|A>>>26),A=R+(w^(v|~C))+S[11]+3174756917&4294967295,R=v+(A<<10&4294967295|A>>>22),A=C+(v^(R|~w))+S[2]+718787259&4294967295,C=R+(A<<15&4294967295|A>>>17),A=w+(R^(C|~v))+S[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(C+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+C&4294967295,I.g[3]=I.g[3]+R&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var w=v-this.blockSize,S=this.B,C=this.h,R=0;R<v;){if(C==0)for(;R<=w;)s(this,I,R),R+=this.blockSize;if(typeof I=="string"){for(;R<v;)if(S[C++]=I.charCodeAt(R++),C==this.blockSize){s(this,S),C=0;break}}else for(;R<v;)if(S[C++]=I[R++],C==this.blockSize){s(this,S),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var w=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=w&255,w/=256;for(this.u(I),I=Array(16),v=w=0;4>v;++v)for(var S=0;32>S;S+=8)I[w++]=this.g[v]>>>S&255;return I};function i(I,v){var w=l;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=v(I)}function o(I,v){this.h=v;for(var w=[],S=!0,C=I.length-1;0<=C;C--){var R=I[C]|0;S&&R==v||(w[C]=R,S=!1)}this.g=w}var l={};function u(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function d(I){if(isNaN(I)||!isFinite(I))return m;if(0>I)return O(d(-I));for(var v=[],w=1,S=0;I>=w;S++)v[S]=I/w|0,w*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return O(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=d(Math.pow(v,8)),S=m,C=0;C<I.length;C+=8){var R=Math.min(8,I.length-C),A=parseInt(I.substring(C,C+R),v);8>R?(R=d(Math.pow(v,R)),S=S.j(R).add(d(A))):(S=S.j(w),S=S.add(d(A)))}return S}var m=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(P(this))return-O(this).m();for(var I=0,v=1,w=0;w<this.g.length;w++){var S=this.i(w);I+=(0<=S?S:4294967296+S)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(x(this))return"0";if(P(this))return"-"+O(this).toString(I);for(var v=d(Math.pow(I,6)),w=this,S="";;){var C=D(w,v).g;w=T(w,C.j(v));var R=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=C,x(w))return R+S;for(;6>R.length;)R="0"+R;S=R+S}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function x(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function P(I){return I.h==-1}t.l=function(I){return I=T(this,I),P(I)?-1:x(I)?0:1};function O(I){for(var v=I.g.length,w=[],S=0;S<v;S++)w[S]=~I.g[S];return new o(w,~I.h).add(g)}t.abs=function(){return P(this)?O(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],S=0,C=0;C<=v;C++){var R=S+(this.i(C)&65535)+(I.i(C)&65535),A=(R>>>16)+(this.i(C)>>>16)+(I.i(C)>>>16);S=A>>>16,R&=65535,A&=65535,w[C]=A<<16|R}return new o(w,w[w.length-1]&-2147483648?-1:0)};function T(I,v){return I.add(O(v))}t.j=function(I){if(x(this)||x(I))return m;if(P(this))return P(I)?O(this).j(O(I)):O(O(this).j(I));if(P(I))return O(this.j(O(I)));if(0>this.l(_)&&0>I.l(_))return d(this.m()*I.m());for(var v=this.g.length+I.g.length,w=[],S=0;S<2*v;S++)w[S]=0;for(S=0;S<this.g.length;S++)for(var C=0;C<I.g.length;C++){var R=this.i(S)>>>16,A=this.i(S)&65535,Ue=I.i(C)>>>16,F=I.i(C)&65535;w[2*S+2*C]+=A*F,E(w,2*S+2*C),w[2*S+2*C+1]+=R*F,E(w,2*S+2*C+1),w[2*S+2*C+1]+=A*Ue,E(w,2*S+2*C+1),w[2*S+2*C+2]+=R*Ue,E(w,2*S+2*C+2)}for(S=0;S<v;S++)w[S]=w[2*S+1]<<16|w[2*S];for(S=v;S<2*v;S++)w[S]=0;return new o(w,0)};function E(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function k(I,v){this.g=I,this.h=v}function D(I,v){if(x(v))throw Error("division by zero");if(x(I))return new k(m,m);if(P(I))return v=D(O(I),v),new k(O(v.g),O(v.h));if(P(v))return v=D(I,O(v)),new k(O(v.g),v.h);if(30<I.g.length){if(P(I)||P(v))throw Error("slowDivide_ only works with positive integers.");for(var w=g,S=v;0>=S.l(I);)w=U(w),S=U(S);var C=j(w,1),R=j(S,1);for(S=j(S,2),w=j(w,2);!x(S);){var A=R.add(S);0>=A.l(I)&&(C=C.add(w),R=A),S=j(S,1),w=j(w,1)}return v=T(I,C.j(v)),new k(C,v)}for(C=m;0<=I.l(v);){for(w=Math.max(1,Math.floor(I.m()/v.m())),S=Math.ceil(Math.log(w)/Math.LN2),S=48>=S?1:Math.pow(2,S-48),R=d(w),A=R.j(v);P(A)||0<A.l(I);)w-=S,R=d(w),A=R.j(v);x(R)&&(R=g),C=C.add(R),I=T(I,A)}return new k(C,I)}t.A=function(I){return D(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)&I.i(S);return new o(w,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)|I.i(S);return new o(w,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),w=[],S=0;S<v;S++)w[S]=this.i(S)^I.i(S);return new o(w,this.h^I.h)};function U(I){for(var v=I.g.length+1,w=[],S=0;S<v;S++)w[S]=I.i(S)<<1|I.i(S-1)>>>31;return new o(w,I.h)}function j(I,v){var w=v>>5;v%=32;for(var S=I.g.length-w,C=[],R=0;R<S;R++)C[R]=0<v?I.i(R+w)>>>v|I.i(R+w+1)<<32-v:I.i(R+w);return new o(C,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,K0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,Ur=o}).apply(typeof Lg<"u"?Lg:typeof self<"u"?self:typeof window<"u"?window:{});var Va=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Q0,Mi,Y0,rl,Hd,X0,J0,Z0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,h){return a==Array.prototype||a==Object.prototype||(a[c]=h.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Va=="object"&&Va];for(var c=0;c<a.length;++c){var h=a[c];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var h=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var N=a[y];if(!(N in h))break e;h=h[N]}a=a[a.length-1],y=h[a],c=c(y),c!=y&&c!=null&&e(h,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var h=0,y=!1,N={next:function(){if(!y&&h<a.length){var b=h++;return{value:c(b,a[b]),done:!1}}return y=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,h){return a.call.apply(a.bind,arguments)}function m(a,c,h){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,y),a.apply(c,N)}}return function(){return a.apply(c,arguments)}}function g(a,c,h){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,g.apply(null,arguments)}function _(a,c){var h=Array.prototype.slice.call(arguments,1);return function(){var y=h.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function x(a,c){function h(){}h.prototype=c.prototype,a.aa=c.prototype,a.prototype=new h,a.prototype.constructor=a,a.Qb=function(y,N,b){for(var z=Array(arguments.length-2),me=2;me<arguments.length;me++)z[me-2]=arguments[me];return c.prototype[N].apply(y,z)}}function P(a){const c=a.length;if(0<c){const h=Array(c);for(let y=0;y<c;y++)h[y]=a[y];return h}return[]}function O(a,c){for(let h=1;h<arguments.length;h++){const y=arguments[h];if(u(y)){const N=a.length||0,b=y.length||0;a.length=N+b;for(let z=0;z<b;z++)a[N+z]=y[z]}else a.push(y)}}class T{constructor(c,h){this.i=c,this.j=h,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function E(a){return/^[\s\xa0]*$/.test(a)}function k(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var U=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function j(a,c,h){for(const y in a)c.call(h,a[y],y,a)}function I(a,c){for(const h in a)c.call(void 0,a[h],h,a)}function v(a){const c={};for(const h in a)c[h]=a[h];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function S(a,c){let h,y;for(let N=1;N<arguments.length;N++){y=arguments[N];for(h in y)a[h]=y[h];for(let b=0;b<w.length;b++)h=w[b],Object.prototype.hasOwnProperty.call(y,h)&&(a[h]=y[h])}}function C(a){var c=1;a=a.split(":");const h=[];for(;0<c&&a.length;)h.push(a.shift()),c--;return a.length&&h.push(a.join(":")),h}function R(a){l.setTimeout(()=>{throw a},0)}function A(){var a=Q;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ue{constructor(){this.h=this.g=null}add(c,h){const y=F.get();y.set(c,h),this.h?this.h.next=y:this.g=y,this.h=y}}var F=new T(()=>new pe,a=>a.reset());class pe{constructor(){this.next=this.g=this.h=null}set(c,h){this.h=c,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Ne,$=!1,Q=new Ue,G=()=>{const a=l.Promise.resolve(void 0);Ne=()=>{a.then(ae)}};var ae=()=>{for(var a;a=A();){try{a.h.call(a.g)}catch(h){R(h)}var c=F;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}$=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ge(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var vt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const h=()=>{};l.addEventListener("test",h,c),l.removeEventListener("test",h,c)}catch{}return a}();function ee(a,c){if(ge.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var h=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(U){e:{try{D(c.nodeName);var N=!0;break e}catch{}N=!1}N||(c=null)}}else h=="mouseover"?c=a.fromElement:h=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:se[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&ee.aa.h.call(this)}}x(ee,ge);var se={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Vt="closure_listenable_"+(1e6*Math.random()|0),ME=0;function LE(a,c,h,y,N){this.listener=a,this.proxy=null,this.src=c,this.type=h,this.capture=!!y,this.ha=N,this.key=++ME,this.da=this.fa=!1}function Zo(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function ea(a){this.src=a,this.g={},this.h=0}ea.prototype.add=function(a,c,h,y,N){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var z=ju(a,c,y,N);return-1<z?(c=a[z],h||(c.fa=!1)):(c=new LE(c,this.src,b,!!y,N),c.fa=h,a.push(c)),c};function Lu(a,c){var h=c.type;if(h in a.g){var y=a.g[h],N=Array.prototype.indexOf.call(y,c,void 0),b;(b=0<=N)&&Array.prototype.splice.call(y,N,1),b&&(Zo(c),a.g[h].length==0&&(delete a.g[h],a.h--))}}function ju(a,c,h,y){for(var N=0;N<a.length;++N){var b=a[N];if(!b.da&&b.listener==c&&b.capture==!!h&&b.ha==y)return N}return-1}var Fu="closure_lm_"+(1e6*Math.random()|0),Uu={};function np(a,c,h,y,N){if(Array.isArray(c)){for(var b=0;b<c.length;b++)np(a,c[b],h,y,N);return null}return h=ip(h),a&&a[Vt]?a.K(c,h,d(y)?!!y.capture:!1,N):jE(a,c,h,!1,y,N)}function jE(a,c,h,y,N,b){if(!c)throw Error("Invalid event type");var z=d(N)?!!N.capture:!!N,me=$u(a);if(me||(a[Fu]=me=new ea(a)),h=me.add(c,h,y,z,b),h.proxy)return h;if(y=FE(),h.proxy=y,y.src=a,y.listener=h,a.addEventListener)vt||(N=z),N===void 0&&(N=!1),a.addEventListener(c.toString(),y,N);else if(a.attachEvent)a.attachEvent(sp(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return h}function FE(){function a(h){return c.call(a.src,a.listener,h)}const c=UE;return a}function rp(a,c,h,y,N){if(Array.isArray(c))for(var b=0;b<c.length;b++)rp(a,c[b],h,y,N);else y=d(y)?!!y.capture:!!y,h=ip(h),a&&a[Vt]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],h=ju(b,h,y,N),-1<h&&(Zo(b[h]),Array.prototype.splice.call(b,h,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=$u(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ju(c,h,y,N)),(h=-1<a?c[a]:null)&&zu(h))}function zu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[Vt])Lu(c.i,a);else{var h=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(h,y,a.capture):c.detachEvent?c.detachEvent(sp(h),y):c.addListener&&c.removeListener&&c.removeListener(y),(h=$u(c))?(Lu(h,a),h.h==0&&(h.src=null,c[Fu]=null)):Zo(a)}}}function sp(a){return a in Uu?Uu[a]:Uu[a]="on"+a}function UE(a,c){if(a.da)a=!0;else{c=new ee(c,this);var h=a.listener,y=a.ha||a.src;a.fa&&zu(a),a=h.call(y,c)}return a}function $u(a){return a=a[Fu],a instanceof ea?a:null}var Bu="__closure_events_fn_"+(1e9*Math.random()>>>0);function ip(a){return typeof a=="function"?a:(a[Bu]||(a[Bu]=function(c){return a.handleEvent(c)}),a[Bu])}function Ze(){ce.call(this),this.i=new ea(this),this.M=this,this.F=null}x(Ze,ce),Ze.prototype[Vt]=!0,Ze.prototype.removeEventListener=function(a,c,h,y){rp(this,a,c,h,y)};function ht(a,c){var h,y=a.F;if(y)for(h=[];y;y=y.F)h.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new ge(c,a);else if(c instanceof ge)c.target=c.target||a;else{var N=c;c=new ge(y,a),S(c,N)}if(N=!0,h)for(var b=h.length-1;0<=b;b--){var z=c.g=h[b];N=ta(z,y,!0,c)&&N}if(z=c.g=a,N=ta(z,y,!0,c)&&N,N=ta(z,y,!1,c)&&N,h)for(b=0;b<h.length;b++)z=c.g=h[b],N=ta(z,y,!1,c)&&N}Ze.prototype.N=function(){if(Ze.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var h=a.g[c],y=0;y<h.length;y++)Zo(h[y]);delete a.g[c],a.h--}}this.F=null},Ze.prototype.K=function(a,c,h,y){return this.i.add(String(a),c,!1,h,y)},Ze.prototype.L=function(a,c,h,y){return this.i.add(String(a),c,!0,h,y)};function ta(a,c,h,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var N=!0,b=0;b<c.length;++b){var z=c[b];if(z&&!z.da&&z.capture==h){var me=z.listener,Ge=z.ha||z.src;z.fa&&Lu(a.i,z),N=me.call(Ge,y)!==!1&&N}}return N&&!y.defaultPrevented}function op(a,c,h){if(typeof a=="function")h&&(a=g(a,h));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function ap(a){a.g=op(()=>{a.g=null,a.i&&(a.i=!1,ap(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class zE extends ce{constructor(c,h){super(),this.m=c,this.l=h,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:ap(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ci(a){ce.call(this),this.h=a,this.g={}}x(ci,ce);var lp=[];function up(a){j(a.g,function(c,h){this.g.hasOwnProperty(h)&&zu(c)},a),a.g={}}ci.prototype.N=function(){ci.aa.N.call(this),up(this)},ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Hu=l.JSON.stringify,$E=l.JSON.parse,BE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function qu(){}qu.prototype.h=null;function cp(a){return a.h||(a.h=a.i())}function dp(){}var di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Wu(){ge.call(this,"d")}x(Wu,ge);function Gu(){ge.call(this,"c")}x(Gu,ge);var Sr={},hp=null;function na(){return hp=hp||new Ze}Sr.La="serverreachability";function fp(a){ge.call(this,Sr.La,a)}x(fp,ge);function hi(a){const c=na();ht(c,new fp(c))}Sr.STAT_EVENT="statevent";function pp(a,c){ge.call(this,Sr.STAT_EVENT,a),this.stat=c}x(pp,ge);function ft(a){const c=na();ht(c,new pp(c,a))}Sr.Ma="timingevent";function mp(a,c){ge.call(this,Sr.Ma,a),this.size=c}x(mp,ge);function fi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function pi(){this.g=!0}pi.prototype.xa=function(){this.g=!1};function HE(a,c,h,y,N,b){a.info(function(){if(a.g)if(b)for(var z="",me=b.split("&"),Ge=0;Ge<me.length;Ge++){var le=me[Ge].split("=");if(1<le.length){var et=le[0];le=le[1];var tt=et.split("_");z=2<=tt.length&&tt[1]=="type"?z+(et+"="+le+"&"):z+(et+"=redacted&")}}else z=null;else z=b;return"XMLHTTP REQ ("+y+") [attempt "+N+"]: "+c+`
`+h+`
`+z})}function qE(a,c,h,y,N,b,z){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+N+"]: "+c+`
`+h+`
`+b+" "+z})}function is(a,c,h,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+GE(a,h)+(y?" "+y:"")})}function WE(a,c){a.info(function(){return"TIMEOUT: "+c})}pi.prototype.info=function(){};function GE(a,c){if(!a.g)return c;if(!c)return null;try{var h=JSON.parse(c);if(h){for(a=0;a<h.length;a++)if(Array.isArray(h[a])){var y=h[a];if(!(2>y.length)){var N=y[1];if(Array.isArray(N)&&!(1>N.length)){var b=N[0];if(b!="noop"&&b!="stop"&&b!="close")for(var z=1;z<N.length;z++)N[z]=""}}}}return Hu(h)}catch{return c}}var ra={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},gp={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ku;function sa(){}x(sa,qu),sa.prototype.g=function(){return new XMLHttpRequest},sa.prototype.i=function(){return{}},Ku=new sa;function Vn(a,c,h,y){this.j=a,this.i=c,this.l=h,this.R=y||1,this.U=new ci(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yp}function yp(){this.i=null,this.g="",this.h=!1}var vp={},Qu={};function Yu(a,c,h){a.L=1,a.v=la(dn(c)),a.m=h,a.P=!0,_p(a,null)}function _p(a,c){a.F=Date.now(),ia(a),a.A=dn(a.v);var h=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),Dp(h.i,"t",y),a.C=0,h=a.j.J,a.h=new yp,a.g=Xp(a.j,h?c:null,!a.m),0<a.O&&(a.M=new zE(g(a.Y,a,a.g),a.O)),c=a.U,h=a.g,y=a.ca;var N="readystatechange";Array.isArray(N)||(N&&(lp[0]=N.toString()),N=lp);for(var b=0;b<N.length;b++){var z=np(h,N[b],y||c.handleEvent,!1,c.h||c);if(!z)break;c.g[z.key]=z}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),hi(),HE(a.i,a.u,a.A,a.l,a.R,a.m)}Vn.prototype.ca=function(a){a=a.target;const c=this.M;c&&hn(a)==3?c.j():this.Y(a)},Vn.prototype.Y=function(a){try{if(a==this.g)e:{const tt=hn(this.g);var c=this.g.Ba();const ls=this.g.Z();if(!(3>tt)&&(tt!=3||this.g&&(this.h.h||this.g.oa()||Up(this.g)))){this.J||tt!=4||c==7||(c==8||0>=ls?hi(3):hi(2)),Xu(this);var h=this.g.Z();this.X=h;t:if(wp(this)){var y=Up(this.g);a="";var N=y.length,b=hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ar(this),mi(this);var z="";break t}this.h.i=new l.TextDecoder}for(c=0;c<N;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(b&&c==N-1)});y.length=0,this.h.g+=a,this.C=0,z=this.h.g}else z=this.g.oa();if(this.o=h==200,qE(this.i,this.u,this.A,this.l,this.R,tt,h),this.o){if(this.T&&!this.K){t:{if(this.g){var me,Ge=this.g;if((me=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(me)){var le=me;break t}}le=null}if(h=le)is(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ju(this,h);else{this.o=!1,this.s=3,ft(12),Ar(this),mi(this);break e}}if(this.P){h=!0;let Bt;for(;!this.J&&this.C<z.length;)if(Bt=KE(this,z),Bt==Qu){tt==4&&(this.s=4,ft(14),h=!1),is(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==vp){this.s=4,ft(15),is(this.i,this.l,z,"[Invalid Chunk]"),h=!1;break}else is(this.i,this.l,Bt,null),Ju(this,Bt);if(wp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),tt!=4||z.length!=0||this.h.h||(this.s=1,ft(16),h=!1),this.o=this.o&&h,!h)is(this.i,this.l,z,"[Invalid Chunked Response]"),Ar(this),mi(this);else if(0<z.length&&!this.W){this.W=!0;var et=this.j;et.g==this&&et.ba&&!et.M&&(et.j.info("Great, no buffering proxy detected. Bytes received: "+z.length),sc(et),et.M=!0,ft(11))}}else is(this.i,this.l,z,null),Ju(this,z);tt==4&&Ar(this),this.o&&!this.J&&(tt==4?Gp(this.j,this):(this.o=!1,ia(this)))}else dT(this.g),h==400&&0<z.indexOf("Unknown SID")?(this.s=3,ft(12)):(this.s=0,ft(13)),Ar(this),mi(this)}}}catch{}finally{}};function wp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function KE(a,c){var h=a.C,y=c.indexOf(`
`,h);return y==-1?Qu:(h=Number(c.substring(h,y)),isNaN(h)?vp:(y+=1,y+h>c.length?Qu:(c=c.slice(y,y+h),a.C=y+h,c)))}Vn.prototype.cancel=function(){this.J=!0,Ar(this)};function ia(a){a.S=Date.now()+a.I,Ep(a,a.I)}function Ep(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=fi(g(a.ba,a),c)}function Xu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}Vn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(WE(this.i,this.A),this.L!=2&&(hi(),ft(17)),Ar(this),this.s=2,mi(this)):Ep(this,this.S-a)};function mi(a){a.j.G==0||a.J||Gp(a.j,a)}function Ar(a){Xu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,up(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function Ju(a,c){try{var h=a.j;if(h.G!=0&&(h.g==a||Zu(h.h,a))){if(!a.K&&Zu(h.h,a)&&h.G==3){try{var y=h.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var N=y;if(N[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<a.F)pa(h),ha(h);else break e;rc(h),ft(18)}}else h.za=N[1],0<h.za-h.T&&37500>N[2]&&h.F&&h.v==0&&!h.C&&(h.C=fi(g(h.Za,h),6e3));if(1>=xp(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else Cr(h,11)}else if((a.K||h.g==a)&&pa(h),!E(c))for(N=h.Da.g.parse(c),c=0;c<N.length;c++){let le=N[c];if(h.T=le[0],le=le[1],h.G==2)if(le[0]=="c"){h.K=le[1],h.ia=le[2];const et=le[3];et!=null&&(h.la=et,h.j.info("VER="+h.la));const tt=le[4];tt!=null&&(h.Aa=tt,h.j.info("SVER="+h.Aa));const ls=le[5];ls!=null&&typeof ls=="number"&&0<ls&&(y=1.5*ls,h.L=y,h.j.info("backChannelRequestTimeoutMs_="+y)),y=h;const Bt=a.g;if(Bt){const ga=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ga){var b=y.h;b.g||ga.indexOf("spdy")==-1&&ga.indexOf("quic")==-1&&ga.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(ec(b,b.h),b.h=null))}if(y.D){const ic=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;ic&&(y.ya=ic,ve(y.I,y.D,ic))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-a.F,h.j.info("Handshake RTT: "+h.R+"ms")),y=h;var z=a;if(y.qa=Yp(y,y.J?y.ia:null,y.W),z.K){Sp(y.h,z);var me=z,Ge=y.L;Ge&&(me.I=Ge),me.B&&(Xu(me),ia(me)),y.g=z}else qp(y);0<h.i.length&&fa(h)}else le[0]!="stop"&&le[0]!="close"||Cr(h,7);else h.G==3&&(le[0]=="stop"||le[0]=="close"?le[0]=="stop"?Cr(h,7):nc(h):le[0]!="noop"&&h.l&&h.l.ta(le),h.v=0)}}hi(4)}catch{}}var QE=class{constructor(a,c){this.g=a,this.map=c}};function Tp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ip(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function xp(a){return a.h?1:a.g?a.g.size:0}function Zu(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function ec(a,c){a.g?a.g.add(c):a.h=c}function Sp(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Tp.prototype.cancel=function(){if(this.i=Ap(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Ap(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const h of a.g.values())c=c.concat(h.D);return c}return P(a.i)}function YE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],h=a.length,y=0;y<h;y++)c.push(a[y]);return c}c=[],h=0;for(y in a)c[h++]=a[y];return c}function XE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var h=0;h<a;h++)c.push(h);return c}c=[],h=0;for(const y in a)c[h++]=y;return c}}}function kp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var h=XE(a),y=YE(a),N=y.length,b=0;b<N;b++)c.call(void 0,y[b],h&&h[b],a)}var Cp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function JE(a,c){if(a){a=a.split("&");for(var h=0;h<a.length;h++){var y=a[h].indexOf("="),N=null;if(0<=y){var b=a[h].substring(0,y);N=a[h].substring(y+1)}else b=a[h];c(b,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function kr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof kr){this.h=a.h,oa(this,a.j),this.o=a.o,this.g=a.g,aa(this,a.s),this.l=a.l;var c=a.i,h=new vi;h.i=c.i,c.g&&(h.g=new Map(c.g),h.h=c.h),Rp(this,h),this.m=a.m}else a&&(c=String(a).match(Cp))?(this.h=!1,oa(this,c[1]||"",!0),this.o=gi(c[2]||""),this.g=gi(c[3]||"",!0),aa(this,c[4]),this.l=gi(c[5]||"",!0),Rp(this,c[6]||"",!0),this.m=gi(c[7]||"")):(this.h=!1,this.i=new vi(null,this.h))}kr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(yi(c,Np,!0),":");var h=this.g;return(h||c=="file")&&(a.push("//"),(c=this.o)&&a.push(yi(c,Np,!0),"@"),a.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&a.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&a.push("/"),a.push(yi(h,h.charAt(0)=="/"?tT:eT,!0))),(h=this.i.toString())&&a.push("?",h),(h=this.m)&&a.push("#",yi(h,rT)),a.join("")};function dn(a){return new kr(a)}function oa(a,c,h){a.j=h?gi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function aa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Rp(a,c,h){c instanceof vi?(a.i=c,sT(a.i,a.h)):(h||(c=yi(c,nT)),a.i=new vi(c,a.h))}function ve(a,c,h){a.i.set(c,h)}function la(a){return ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function gi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function yi(a,c,h){return typeof a=="string"?(a=encodeURI(a).replace(c,ZE),h&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function ZE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Np=/[#\/\?@]/g,eT=/[#\?:]/g,tT=/[#\?]/g,nT=/[#\?@]/g,rT=/#/g;function vi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Mn(a){a.g||(a.g=new Map,a.h=0,a.i&&JE(a.i,function(c,h){a.add(decodeURIComponent(c.replace(/\+/g," ")),h)}))}t=vi.prototype,t.add=function(a,c){Mn(this),this.i=null,a=os(this,a);var h=this.g.get(a);return h||this.g.set(a,h=[]),h.push(c),this.h+=1,this};function Pp(a,c){Mn(a),c=os(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function bp(a,c){return Mn(a),c=os(a,c),a.g.has(c)}t.forEach=function(a,c){Mn(this),this.g.forEach(function(h,y){h.forEach(function(N){a.call(c,N,y,this)},this)},this)},t.na=function(){Mn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),h=[];for(let y=0;y<c.length;y++){const N=a[y];for(let b=0;b<N.length;b++)h.push(c[y])}return h},t.V=function(a){Mn(this);let c=[];if(typeof a=="string")bp(this,a)&&(c=c.concat(this.g.get(os(this,a))));else{a=Array.from(this.g.values());for(let h=0;h<a.length;h++)c=c.concat(a[h])}return c},t.set=function(a,c){return Mn(this),this.i=null,a=os(this,a),bp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function Dp(a,c,h){Pp(a,c),0<h.length&&(a.i=null,a.g.set(os(a,c),P(h)),a.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var h=0;h<c.length;h++){var y=c[h];const b=encodeURIComponent(String(y)),z=this.V(y);for(y=0;y<z.length;y++){var N=b;z[y]!==""&&(N+="="+encodeURIComponent(String(z[y]))),a.push(N)}}return this.i=a.join("&")};function os(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function sT(a,c){c&&!a.j&&(Mn(a),a.i=null,a.g.forEach(function(h,y){var N=y.toLowerCase();y!=N&&(Pp(this,y),Dp(this,N,h))},a)),a.j=c}function iT(a,c){const h=new pi;if(l.Image){const y=new Image;y.onload=_(Ln,h,"TestLoadImage: loaded",!0,c,y),y.onerror=_(Ln,h,"TestLoadImage: error",!1,c,y),y.onabort=_(Ln,h,"TestLoadImage: abort",!1,c,y),y.ontimeout=_(Ln,h,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function oT(a,c){const h=new pi,y=new AbortController,N=setTimeout(()=>{y.abort(),Ln(h,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(b=>{clearTimeout(N),b.ok?Ln(h,"TestPingServer: ok",!0,c):Ln(h,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(N),Ln(h,"TestPingServer: error",!1,c)})}function Ln(a,c,h,y,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),y(h)}catch{}}function aT(){this.g=new BE}function lT(a,c,h){const y=h||"";try{kp(a,function(N,b){let z=N;d(N)&&(z=Hu(N)),c.push(y+b+"="+encodeURIComponent(z))})}catch(N){throw c.push(y+"type="+encodeURIComponent("_badmap")),N}}function ua(a){this.l=a.Ub||null,this.j=a.eb||!1}x(ua,qu),ua.prototype.g=function(){return new ca(this.l,this.j)},ua.prototype.i=function(a){return function(){return a}}({});function ca(a,c){Ze.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(ca,Ze),t=ca.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,wi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,_i(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,wi(this)),this.g&&(this.readyState=3,wi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Op(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Op(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?_i(this):wi(this),this.readyState==3&&Op(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,_i(this))},t.Qa=function(a){this.g&&(this.response=a,_i(this))},t.ga=function(){this.g&&_i(this)};function _i(a){a.readyState=4,a.l=null,a.j=null,a.v=null,wi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var h=c.next();!h.done;)h=h.value,a.push(h[0]+": "+h[1]),h=c.next();return a.join(`\r
`)};function wi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ca.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Vp(a){let c="";return j(a,function(h,y){c+=y,c+=":",c+=h,c+=`\r
`}),c}function tc(a,c,h){e:{for(y in h){var y=!1;break e}y=!0}y||(h=Vp(h),typeof a=="string"?h!=null&&encodeURIComponent(String(h)):ve(a,c,h))}function Ce(a){Ze.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x(Ce,Ze);var uT=/^https?$/i,cT=["POST","PUT"];t=Ce.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,h,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ku.g(),this.v=this.o?cp(this.o):cp(Ku),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){Mp(this,b);return}if(a=h||"",h=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var N in y)h.set(N,y[N]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())h.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(h.keys()).find(b=>b.toLowerCase()=="content-type"),N=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(cT,c,void 0))||y||N||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,z]of h)this.g.setRequestHeader(b,z);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Fp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){Mp(this,b)}};function Mp(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,Lp(a),da(a)}function Lp(a){a.A||(a.A=!0,ht(a,"complete"),ht(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ht(this,"complete"),ht(this,"abort"),da(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),da(this,!0)),Ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?jp(this):this.bb())},t.bb=function(){jp(this)};function jp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||hn(a)!=4||a.Z()!=2)){if(a.u&&hn(a)==4)op(a.Ea,0,a);else if(ht(a,"readystatechange"),hn(a)==4){a.h=!1;try{const z=a.Z();e:switch(z){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var h;if(!(h=c)){var y;if(y=z===0){var N=String(a.D).match(Cp)[1]||null;!N&&l.self&&l.self.location&&(N=l.self.location.protocol.slice(0,-1)),y=!uT.test(N?N.toLowerCase():"")}h=y}if(h)ht(a,"complete"),ht(a,"success");else{a.m=6;try{var b=2<hn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",Lp(a)}}finally{da(a)}}}}function da(a,c){if(a.g){Fp(a);const h=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||ht(a,"ready");try{h.onreadystatechange=y}catch{}}}function Fp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function hn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),$E(c)}};function Up(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dT(a){const c={};a=(a.g&&2<=hn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(E(a[y]))continue;var h=C(a[y]);const N=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const b=c[N]||[];c[N]=b,b.push(h)}I(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(a,c,h){return h&&h.internalChannelParams&&h.internalChannelParams[a]||c}function zp(a){this.Aa=0,this.i=[],this.j=new pi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ei("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ei("baseRetryDelayMs",5e3,a),this.cb=Ei("retryDelaySeedMs",1e4,a),this.Wa=Ei("forwardChannelMaxRetries",2,a),this.wa=Ei("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Tp(a&&a.concurrentRequestLimit),this.Da=new aT,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=zp.prototype,t.la=8,t.G=1,t.connect=function(a,c,h,y){ft(0),this.W=a,this.H=c||{},h&&y!==void 0&&(this.H.OSID=h,this.H.OAID=y),this.F=this.X,this.I=Yp(this,null,this.W),fa(this)};function nc(a){if($p(a),a.G==3){var c=a.U++,h=dn(a.I);if(ve(h,"SID",a.K),ve(h,"RID",c),ve(h,"TYPE","terminate"),Ti(a,h),c=new Vn(a,a.j,c),c.L=2,c.v=la(dn(h)),h=!1,l.navigator&&l.navigator.sendBeacon)try{h=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!h&&l.Image&&(new Image().src=c.v,h=!0),h||(c.g=Xp(c.j,null),c.g.ea(c.v)),c.F=Date.now(),ia(c)}Qp(a)}function ha(a){a.g&&(sc(a),a.g.cancel(),a.g=null)}function $p(a){ha(a),a.u&&(l.clearTimeout(a.u),a.u=null),pa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function fa(a){if(!Ip(a.h)&&!a.s){a.s=!0;var c=a.Ga;Ne||G(),$||(Ne(),$=!0),Q.add(c,a),a.B=0}}function hT(a,c){return xp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=fi(g(a.Ga,a,c),Kp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const N=new Vn(this,this.j,a);let b=this.o;if(this.S&&(b?(b=v(b),S(b,this.S)):b=this.S),this.m!==null||this.O||(N.H=b,b=null),this.P)e:{for(var c=0,h=0;h<this.i.length;h++){t:{var y=this.i[h];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=h;break e}if(c===4096||h===this.i.length-1){c=h+1;break e}}c=1e3}else c=1e3;c=Hp(this,N,c),h=dn(this.I),ve(h,"RID",a),ve(h,"CVER",22),this.D&&ve(h,"X-HTTP-Session-Id",this.D),Ti(this,h),b&&(this.O?c="headers="+encodeURIComponent(String(Vp(b)))+"&"+c:this.m&&tc(h,this.m,b)),ec(this.h,N),this.Ua&&ve(h,"TYPE","init"),this.P?(ve(h,"$req",c),ve(h,"SID","null"),N.T=!0,Yu(N,h,null)):Yu(N,h,c),this.G=2}}else this.G==3&&(a?Bp(this,a):this.i.length==0||Ip(this.h)||Bp(this))};function Bp(a,c){var h;c?h=c.l:h=a.U++;const y=dn(a.I);ve(y,"SID",a.K),ve(y,"RID",h),ve(y,"AID",a.T),Ti(a,y),a.m&&a.o&&tc(y,a.m,a.o),h=new Vn(a,a.j,h,a.B+1),a.m===null&&(h.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Hp(a,h,1e3),h.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),ec(a.h,h),Yu(h,y,c)}function Ti(a,c){a.H&&j(a.H,function(h,y){ve(c,y,h)}),a.l&&kp({},function(h,y){ve(c,y,h)})}function Hp(a,c,h){h=Math.min(a.i.length,h);var y=a.l?g(a.l.Na,a.l,a):null;e:{var N=a.i;let b=-1;for(;;){const z=["count="+h];b==-1?0<h?(b=N[0].g,z.push("ofs="+b)):b=0:z.push("ofs="+b);let me=!0;for(let Ge=0;Ge<h;Ge++){let le=N[Ge].g;const et=N[Ge].map;if(le-=b,0>le)b=Math.max(0,N[Ge].g-100),me=!1;else try{lT(et,z,"req"+le+"_")}catch{y&&y(et)}}if(me){y=z.join("&");break e}}}return a=a.i.splice(0,h),c.D=a,y}function qp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;Ne||G(),$||(Ne(),$=!0),Q.add(c,a),a.v=0}}function rc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=fi(g(a.Fa,a),Kp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Wp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=fi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ft(10),ha(this),Wp(this))};function sc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Wp(a){a.g=new Vn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=dn(a.qa);ve(c,"RID","rpc"),ve(c,"SID",a.K),ve(c,"AID",a.T),ve(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&ve(c,"TO",a.ja),ve(c,"TYPE","xmlhttp"),Ti(a,c),a.m&&a.o&&tc(c,a.m,a.o),a.L&&(a.g.I=a.L);var h=a.g;a=a.ia,h.L=1,h.v=la(dn(c)),h.m=null,h.P=!0,_p(h,a)}t.Za=function(){this.C!=null&&(this.C=null,ha(this),rc(this),ft(19))};function pa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Gp(a,c){var h=null;if(a.g==c){pa(a),sc(a),a.g=null;var y=2}else if(Zu(a.h,c))h=c.D,Sp(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){h=c.m?c.m.length:0,c=Date.now()-c.F;var N=a.B;y=na(),ht(y,new mp(y,h)),fa(a)}else qp(a);else if(N=c.s,N==3||N==0&&0<c.X||!(y==1&&hT(a,c)||y==2&&rc(a)))switch(h&&0<h.length&&(c=a.h,c.i=c.i.concat(h)),N){case 1:Cr(a,5);break;case 4:Cr(a,10);break;case 3:Cr(a,6);break;default:Cr(a,2)}}}function Kp(a,c){let h=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(h*=2),h*c}function Cr(a,c){if(a.j.info("Error code "+c),c==2){var h=g(a.fb,a),y=a.Xa;const N=!y;y=new kr(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||oa(y,"https"),la(y),N?iT(y.toString(),h):oT(y.toString(),h)}else ft(2);a.G=0,a.l&&a.l.sa(c),Qp(a),$p(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),ft(2)):(this.j.info("Failed to ping google.com"),ft(1))};function Qp(a){if(a.G=0,a.ka=[],a.l){const c=Ap(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function Yp(a,c,h){var y=h instanceof kr?dn(h):new kr(h);if(y.g!="")c&&(y.g=c+"."+y.g),aa(y,y.s);else{var N=l.location;y=N.protocol,c=c?c+"."+N.hostname:N.hostname,N=+N.port;var b=new kr(null);y&&oa(b,y),c&&(b.g=c),N&&aa(b,N),h&&(b.l=h),y=b}return h=a.D,c=a.ya,h&&c&&ve(y,h,c),ve(y,"VER",a.la),Ti(a,y),y}function Xp(a,c,h){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new Ce(new ua({eb:h})):new Ce(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Jp(){}t=Jp.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ma(){}ma.prototype.g=function(a,c){return new At(a,c)};function At(a,c){Ze.call(this),this.g=new zp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!E(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!E(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new as(this)}x(At,Ze),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){nc(this.g)},At.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var h={};h.__data__=a,a=h}else this.u&&(h={},h.__data__=Hu(a),a=h);c.i.push(new QE(c.Ya++,a)),c.G==3&&fa(c)},At.prototype.N=function(){this.g.l=null,delete this.j,nc(this.g),delete this.g,At.aa.N.call(this)};function Zp(a){Wu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const h in c){a=h;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}x(Zp,Wu);function em(){Gu.call(this),this.status=1}x(em,Gu);function as(a){this.g=a}x(as,Jp),as.prototype.ua=function(){ht(this.g,"a")},as.prototype.ta=function(a){ht(this.g,new Zp(a))},as.prototype.sa=function(a){ht(this.g,new em)},as.prototype.ra=function(){ht(this.g,"b")},ma.prototype.createWebChannel=ma.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,Z0=function(){return new ma},J0=function(){return na()},X0=Sr,Hd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ra.NO_ERROR=0,ra.TIMEOUT=8,ra.HTTP_ERROR=6,rl=ra,gp.COMPLETE="complete",Y0=gp,dp.EventType=di,di.OPEN="a",di.CLOSE="b",di.ERROR="c",di.MESSAGE="d",Ze.prototype.listen=Ze.prototype.K,Mi=dp,Ce.prototype.listenOnce=Ce.prototype.L,Ce.prototype.getLastError=Ce.prototype.Ka,Ce.prototype.getLastErrorCode=Ce.prototype.Ba,Ce.prototype.getStatus=Ce.prototype.Z,Ce.prototype.getResponseJson=Ce.prototype.Oa,Ce.prototype.getResponseText=Ce.prototype.oa,Ce.prototype.send=Ce.prototype.ea,Ce.prototype.setWithCredentials=Ce.prototype.Ha,Q0=Ce}).apply(typeof Va<"u"?Va:typeof self<"u"?self:typeof window<"u"?window:{});const jg="@firebase/firestore";/**
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
 */let oi="10.14.0";/**
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
 */const Qr=new sf("@firebase/firestore");function Pi(){return Qr.logLevel}function W(t,...e){if(Qr.logLevel<=re.DEBUG){const n=e.map(vf);Qr.debug(`Firestore (${oi}): ${t}`,...n)}}function Nn(t,...e){if(Qr.logLevel<=re.ERROR){const n=e.map(vf);Qr.error(`Firestore (${oi}): ${t}`,...n)}}function Yr(t,...e){if(Qr.logLevel<=re.WARN){const n=e.map(vf);Qr.warn(`Firestore (${oi}): ${t}`,...n)}}function vf(t){if(typeof t=="string")return t;try{/**
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
 */function X(t="Unexpected state"){const e=`FIRESTORE (${oi}) INTERNAL ASSERTION FAILED: `+t;throw Nn(e),new Error(e)}function he(t,e){t||X()}function Z(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends On{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class zr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class ew{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class tw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Ek{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tk{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){he(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new zr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new zr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new zr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(he(typeof r.accessToken=="string"),new ew(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return he(e===null||typeof e=="string"),new it(e)}}class Ik{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class xk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Ik(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Sk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ak{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){he(this.o===void 0);const r=i=>{i.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(he(typeof n.token=="string"),this.R=n.token,new Sk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class _f{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=kk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ue(t,e){return t<e?-1:t>e?1:0}function Qs(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ue(this.nanoseconds,e.nanoseconds):ue(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class J{constructor(e){this.timestamp=e}static fromTimestamp(e){return new J(e)}static min(){return new J(new Me(0,0))}static max(){return new J(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Eo{constructor(e,n,r){n===void 0?n=0:n>e.length&&X(),r===void 0?r=e.length-n:r>e.length-n&&X(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Eo.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Eo?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Eo{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new we(n)}static emptyPath(){return new we([])}}const Ck=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Be extends Eo{construct(e,n,r){return new Be(e,n,r)}static isValidIdentifier(e){return Ck.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Be.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Be(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new H(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new H(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Be(n)}static emptyPath(){return new Be([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(we.fromString(e))}static fromName(e){return new K(we.fromString(e).popFirst(5))}static empty(){return new K(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new we(e.slice()))}}function Rk(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=J.fromTimestamp(r===1e9?new Me(n+1,0):new Me(n,r));return new mr(s,K.empty(),e)}function Nk(t){return new mr(t.readTime,t.key,-1)}class mr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new mr(J.min(),K.empty(),-1)}static max(){return new mr(J.max(),K.empty(),-1)}}function Pk(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ue(t.largestBatchId,e.largestBatchId))}/**
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
 */const bk="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dk{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function zo(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==bk)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class M{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&X(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new M((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof M?n:M.resolve(n)}catch(n){return M.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):M.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):M.reject(n)}static resolve(e){return new M((n,r)=>{n(e)})}static reject(e){return new M((n,r)=>{r(e)})}static waitFor(e){return new M((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=M.resolve(!1);for(const r of e)n=n.next(s=>s?M.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new M((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++l,l===i&&r(o)},f=>s(f))}})}static doWhile(e,n){return new M((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ok(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function $o(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class wf{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}wf.oe=-1;function gu(t){return t==null}function Bl(t){return t===0&&1/t==-1/0}function Vk(t){return typeof t=="number"&&Number.isInteger(t)&&!Bl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Fg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function nw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Qe.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ma(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ma(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ma(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ma(this.root,e,this.comparator,!0)}}class Ma{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Qe(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw X();const e=this.left.check();if(e!==this.right.check())throw X();return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw X()}get value(){throw X()}get color(){throw X()}get left(){throw X()}get right(){throw X()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Xe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ug(this.data.getIterator())}getIteratorFrom(e){return new Ug(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Ug{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Nt{constructor(e){this.fields=e,e.sort(Be.comparator)}static empty(){return new Nt([])}unionWith(e){let n=new Xe(Be.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Nt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class rw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class We{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new rw("Invalid base64 string: "+i):i}}(e);return new We(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new We(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ue(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}We.EMPTY_BYTE_STRING=new We("");const Mk=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function gr(t){if(he(!!t),typeof t=="string"){let e=0;const n=Mk.exec(t);if(he(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Pe(t.seconds),nanos:Pe(t.nanos)}}function Pe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Xr(t){return typeof t=="string"?We.fromBase64String(t):We.fromUint8Array(t)}/**
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
 */function Ef(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Tf(t){const e=t.mapValue.fields.__previous_value__;return Ef(e)?Tf(e):e}function To(t){const e=gr(t.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
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
 */class Lk{constructor(e,n,r,s,i,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class Ys{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ys("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ys&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const La={mapValue:{}};function Jr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ef(t)?4:Fk(t)?9007199254740991:jk(t)?10:11:X()}function cn(t,e){if(t===e)return!0;const n=Jr(t);if(n!==Jr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return To(t).isEqual(To(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=gr(s.timestampValue),l=gr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Xr(s.bytesValue).isEqual(Xr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Pe(s.geoPointValue.latitude)===Pe(i.geoPointValue.latitude)&&Pe(s.geoPointValue.longitude)===Pe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Pe(s.integerValue)===Pe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Pe(s.doubleValue),l=Pe(i.doubleValue);return o===l?Bl(o)===Bl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Qs(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Fg(o)!==Fg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!cn(o[u],l[u])))return!1;return!0}(t,e);default:return X()}}function Io(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function Xs(t,e){if(t===e)return 0;const n=Jr(t),r=Jr(e);if(n!==r)return ue(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ue(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Pe(i.integerValue||i.doubleValue),u=Pe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return zg(t.timestampValue,e.timestampValue);case 4:return zg(To(t),To(e));case 5:return ue(t.stringValue,e.stringValue);case 6:return function(i,o){const l=Xr(i),u=Xr(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const f=ue(l[d],u[d]);if(f!==0)return f}return ue(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=ue(Pe(i.latitude),Pe(o.latitude));return l!==0?l:ue(Pe(i.longitude),Pe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return $g(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,f;const m=i.fields||{},g=o.fields||{},_=(l=m.value)===null||l===void 0?void 0:l.arrayValue,x=(u=g.value)===null||u===void 0?void 0:u.arrayValue,P=ue(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((f=x==null?void 0:x.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:$g(_,x)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===La.mapValue&&o===La.mapValue)return 0;if(i===La.mapValue)return 1;if(o===La.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const g=ue(u[m],f[m]);if(g!==0)return g;const _=Xs(l[u[m]],d[f[m]]);if(_!==0)return _}return ue(u.length,f.length)}(t.mapValue,e.mapValue);default:throw X()}}function zg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ue(t,e);const n=gr(t),r=gr(e),s=ue(n.seconds,r.seconds);return s!==0?s:ue(n.nanos,r.nanos)}function $g(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Xs(n[s],r[s]);if(i)return i}return ue(n.length,r.length)}function Js(t){return qd(t)}function qd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=gr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Xr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=qd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${qd(n.fields[o])}`;return s+"}"}(t.mapValue):X()}function Bg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Wd(t){return!!t&&"integerValue"in t}function If(t){return!!t&&"arrayValue"in t}function Hg(t){return!!t&&"nullValue"in t}function qg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sl(t){return!!t&&"mapValue"in t}function jk(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function Qi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Qi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Qi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Fk(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Qi(n)}setAll(e){let n=Be.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=Qi(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());sl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];sl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(Qi(this.value))}}function sw(t){const e=[];return rs(t.fields,(n,r)=>{const s=new Be([n]);if(sl(r)){const i=sw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Nt(e)}/**
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
 */class at{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new at(e,0,J.min(),J.min(),J.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,J.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,J.min(),J.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,J.min(),J.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hl{constructor(e,n){this.position=e,this.inclusive=n}}function Wg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=Xs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class xo{constructor(e,n="asc"){this.field=e,this.dir=n}}function Uk(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class iw{}class Ve extends iw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $k(e,n,r):n==="array-contains"?new qk(e,r):n==="in"?new Wk(e,r):n==="not-in"?new Gk(e,r):n==="array-contains-any"?new Kk(e,r):new Ve(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Bk(e,r):new Hk(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Xs(n,this.value)):n!==null&&Jr(this.value)===Jr(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return X()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jt extends iw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Jt(e,n)}matches(e){return ow(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function ow(t){return t.op==="and"}function aw(t){return zk(t)&&ow(t)}function zk(t){for(const e of t.filters)if(e instanceof Jt)return!1;return!0}function Gd(t){if(t instanceof Ve)return t.field.canonicalString()+t.op.toString()+Js(t.value);if(aw(t))return t.filters.map(e=>Gd(e)).join(",");{const e=t.filters.map(n=>Gd(n)).join(",");return`${t.op}(${e})`}}function lw(t,e){return t instanceof Ve?function(r,s){return s instanceof Ve&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof Jt?function(r,s){return s instanceof Jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&lw(o,s.filters[l]),!0):!1}(t,e):void X()}function uw(t){return t instanceof Ve?function(n){return`${n.field.canonicalString()} ${n.op} ${Js(n.value)}`}(t):t instanceof Jt?function(n){return n.op.toString()+" {"+n.getFilters().map(uw).join(" ,")+"}"}(t):"Filter"}class $k extends Ve{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Bk extends Ve{constructor(e,n){super(e,"in",n),this.keys=cw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Hk extends Ve{constructor(e,n){super(e,"not-in",n),this.keys=cw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function cw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class qk extends Ve{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return If(n)&&Io(n.arrayValue,this.value)}}class Wk extends Ve{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Io(this.value.arrayValue,n)}}class Gk extends Ve{constructor(e,n){super(e,"not-in",n)}matches(e){if(Io(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Io(this.value.arrayValue,n)}}class Kk extends Ve{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!If(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Io(this.value.arrayValue,r))}}/**
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
 */class Qk{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Kg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Qk(t,e,n,r,s,i,o)}function xf(t){const e=Z(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Gd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),gu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Js(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Js(r)).join(",")),e.ue=n}return e.ue}function Sf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Uk(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!lw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gg(t.startAt,e.startAt)&&Gg(t.endAt,e.endAt)}function Kd(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ai{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function Yk(t,e,n,r,s,i,o,l){return new ai(t,e,n,r,s,i,o,l)}function Af(t){return new ai(t)}function Qg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function dw(t){return t.collectionGroup!==null}function Yi(t){const e=Z(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Xe(Be.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new xo(i,r))}),n.has(Be.keyField().canonicalString())||e.ce.push(new xo(Be.keyField(),r))}return e.ce}function ln(t){const e=Z(t);return e.le||(e.le=Xk(e,Yi(t))),e.le}function Xk(t,e){if(t.limitType==="F")return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new xo(s.field,i)});const n=t.endAt?new Hl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hl(t.startAt.position,t.startAt.inclusive):null;return Kg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qd(t,e){const n=t.filters.concat([e]);return new ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Yd(t,e,n){return new ai(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yu(t,e){return Sf(ln(t),ln(e))&&t.limitType===e.limitType}function hw(t){return`${xf(ln(t))}|lt:${t.limitType}`}function ds(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>uw(s)).join(", ")}]`),gu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Js(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Js(s)).join(",")),`Target(${r})`}(ln(t))}; limitType=${t.limitType})`}function vu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Yi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=Wg(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,Yi(r),s)||r.endAt&&!function(o,l,u){const d=Wg(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,Yi(r),s))}(t,e)}function Jk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function fw(t){return(e,n)=>{let r=!1;for(const s of Yi(t)){const i=Zk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Zk(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?Xs(u,d):X()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return X()}}/**
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
 */class li{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return nw(this.inner)}size(){return this.innerSize}}/**
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
 */const eC=new ke(K.comparator);function Pn(){return eC}const pw=new ke(K.comparator);function Li(...t){let e=pw;for(const n of t)e=e.insert(n.key,n);return e}function mw(t){let e=pw;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Mr(){return Xi()}function gw(){return Xi()}function Xi(){return new li(t=>t.toString(),(t,e)=>t.isEqual(e))}const tC=new ke(K.comparator),nC=new Xe(K.comparator);function ne(...t){let e=nC;for(const n of t)e=e.add(n);return e}const rC=new Xe(ue);function sC(){return rC}/**
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
 */function kf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bl(e)?"-0":e}}function yw(t){return{integerValue:""+t}}function iC(t,e){return Vk(e)?yw(e):kf(t,e)}/**
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
 */class _u{constructor(){this._=void 0}}function oC(t,e,n){return t instanceof So?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Ef(i)&&(i=Tf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ao?_w(t,e):t instanceof ko?ww(t,e):function(s,i){const o=vw(s,i),l=Yg(o)+Yg(s.Pe);return Wd(o)&&Wd(s.Pe)?yw(l):kf(s.serializer,l)}(t,e)}function aC(t,e,n){return t instanceof Ao?_w(t,e):t instanceof ko?ww(t,e):n}function vw(t,e){return t instanceof ql?function(r){return Wd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class So extends _u{}class Ao extends _u{constructor(e){super(),this.elements=e}}function _w(t,e){const n=Ew(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class ko extends _u{constructor(e){super(),this.elements=e}}function ww(t,e){let n=Ew(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class ql extends _u{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Yg(t){return Pe(t.integerValue||t.doubleValue)}function Ew(t){return If(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class lC{constructor(e,n){this.field=e,this.transform=n}}function uC(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ao&&s instanceof Ao||r instanceof ko&&s instanceof ko?Qs(r.elements,s.elements,cn):r instanceof ql&&s instanceof ql?cn(r.Pe,s.Pe):r instanceof So&&s instanceof So}(t.transform,e.transform)}class cC{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function il(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wu{}function Tw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Cf(t.key,Ut.none()):new Bo(t.key,t.data,Ut.none());{const n=t.data,r=Et.empty();let s=new Xe(Be.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Tr(t.key,r,new Nt(s.toArray()),Ut.none())}}function dC(t,e,n){t instanceof Bo?function(s,i,o){const l=s.value.clone(),u=Jg(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Tr?function(s,i,o){if(!il(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=Jg(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(Iw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Ji(t,e,n,r){return t instanceof Bo?function(i,o,l,u){if(!il(i.precondition,o))return l;const d=i.value.clone(),f=Zg(i.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Tr?function(i,o,l,u){if(!il(i.precondition,o))return l;const d=Zg(i.fieldTransforms,u,o),f=o.data;return f.setAll(Iw(i)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return il(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function hC(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=vw(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Xg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qs(r,s,(i,o)=>uC(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Bo extends wu{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Tr extends wu{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Iw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Jg(t,e,n){const r=new Map;he(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,aC(o,l,n[s]))}return r}function Zg(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,oC(i,o,e))}return r}class Cf extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class fC extends wu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class pC{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&dC(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ji(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ji(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=gw();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Tw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ne())}isEqual(e){return this.batchId===e.batchId&&Qs(this.mutations,e.mutations,(n,r)=>Xg(n,r))&&Qs(this.baseMutations,e.baseMutations,(n,r)=>Xg(n,r))}}class Rf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){he(e.mutations.length===r.length);let s=function(){return tC}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Rf(e,n,r,s)}}/**
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
 */class mC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class gC{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var De,ie;function yC(t){switch(t){default:return X();case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0}}function xw(t){if(t===void 0)return Nn("GRPC error has no .code"),V.UNKNOWN;switch(t){case De.OK:return V.OK;case De.CANCELLED:return V.CANCELLED;case De.UNKNOWN:return V.UNKNOWN;case De.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case De.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case De.INTERNAL:return V.INTERNAL;case De.UNAVAILABLE:return V.UNAVAILABLE;case De.UNAUTHENTICATED:return V.UNAUTHENTICATED;case De.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case De.NOT_FOUND:return V.NOT_FOUND;case De.ALREADY_EXISTS:return V.ALREADY_EXISTS;case De.PERMISSION_DENIED:return V.PERMISSION_DENIED;case De.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case De.ABORTED:return V.ABORTED;case De.OUT_OF_RANGE:return V.OUT_OF_RANGE;case De.UNIMPLEMENTED:return V.UNIMPLEMENTED;case De.DATA_LOSS:return V.DATA_LOSS;default:return X()}}(ie=De||(De={}))[ie.OK=0]="OK",ie[ie.CANCELLED=1]="CANCELLED",ie[ie.UNKNOWN=2]="UNKNOWN",ie[ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ie[ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ie[ie.NOT_FOUND=5]="NOT_FOUND",ie[ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",ie[ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",ie[ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",ie[ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ie[ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ie[ie.ABORTED=10]="ABORTED",ie[ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",ie[ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",ie[ie.INTERNAL=13]="INTERNAL",ie[ie.UNAVAILABLE=14]="UNAVAILABLE",ie[ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function vC(){return new TextEncoder}/**
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
 */const _C=new Ur([4294967295,4294967295],0);function ey(t){const e=vC().encode(t),n=new K0;return n.update(e),new Uint8Array(n.digest())}function ty(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ur([n,r],0),new Ur([s,i],0)]}class Nf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ji(`Invalid padding: ${n}`);if(r<0)throw new ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ji(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ur.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ur.fromNumber(r)));return s.compare(_C)===1&&(s=new Ur([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=ey(e),[r,s]=ty(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Nf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=ey(e),[r,s]=ty(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Eu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ho.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Eu(J.min(),s,new ke(ue),Pn(),ne())}}class Ho{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ho(r,n,ne(),ne(),ne())}}/**
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
 */class ol{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Sw{constructor(e,n){this.targetId=e,this.me=n}}class Aw{constructor(e,n,r=We.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ny{constructor(){this.fe=0,this.ge=sy(),this.pe=We.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ne(),n=ne(),r=ne();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:X()}}),new Ho(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=sy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,he(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class wC{constructor(e){this.Le=e,this.Be=new Map,this.ke=Pn(),this.qe=ry(),this.Qe=new ke(ue)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:X()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Kd(i))if(r===0){const o=new K(i.path);this.Ue(n,o,at.newNoDocument(o,J.min()))}else he(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=Xr(r).toUint8Array()}catch(u){if(u instanceof rw)return Yr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Nf(o,s,i)}catch(u){return Yr(u instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Kd(l.target)){const u=new K(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,at.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ne();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Eu(e,n,this.Qe,this.ke,r);return this.ke=Pn(),this.qe=ry(),this.Qe=new ke(ue),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ny,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new Xe(ue),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||W("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ny),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ry(){return new ke(K.comparator)}function sy(){return new ke(K.comparator)}const EC={asc:"ASCENDING",desc:"DESCENDING"},TC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IC={and:"AND",or:"OR"};class xC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Xd(t,e){return t.useProto3Json||gu(e)?e:{value:e}}function Wl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function kw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function SC(t,e){return Wl(t,e.toTimestamp())}function un(t){return he(!!t),J.fromTimestamp(function(n){const r=gr(n);return new Me(r.seconds,r.nanos)}(t))}function Pf(t,e){return Jd(t,e).canonicalString()}function Jd(t,e){const n=function(s){return new we(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Cw(t){const e=we.fromString(t);return he(Dw(e)),e}function Zd(t,e){return Pf(t.databaseId,e.path)}function Fc(t,e){const n=Cw(e);if(n.get(1)!==t.databaseId.projectId)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new H(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(Nw(n))}function Rw(t,e){return Pf(t.databaseId,e)}function AC(t){const e=Cw(t);return e.length===4?we.emptyPath():Nw(e)}function eh(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Nw(t){return he(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function iy(t,e,n){return{name:Zd(t,e),fields:n.value.mapValue.fields}}function kC(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:X()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,f){return d.useProto3Json?(he(f===void 0||typeof f=="string"),We.fromBase64String(f||"")):(he(f===void 0||f instanceof Buffer||f instanceof Uint8Array),We.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const f=d.code===void 0?V.UNKNOWN:xw(d.code);return new H(f,d.message||"")}(o);n=new Aw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fc(t,r.document.name),i=un(r.document.updateTime),o=r.document.createTime?un(r.document.createTime):J.min(),l=new Et({mapValue:{fields:r.document.fields}}),u=at.newFoundDocument(s,i,o,l),d=r.targetIds||[],f=r.removedTargetIds||[];n=new ol(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fc(t,r.document),i=r.readTime?un(r.readTime):J.min(),o=at.newNoDocument(s,i),l=r.removedTargetIds||[];n=new ol([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fc(t,r.document),i=r.removedTargetIds||[];n=new ol([],i,s,null)}else{if(!("filter"in e))return X();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gC(s,i),l=r.targetId;n=new Sw(l,o)}}return n}function CC(t,e){let n;if(e instanceof Bo)n={update:iy(t,e.key,e.value)};else if(e instanceof Cf)n={delete:Zd(t,e.key)};else if(e instanceof Tr)n={update:iy(t,e.key,e.data),updateMask:LC(e.fieldMask)};else{if(!(e instanceof fC))return X();n={verify:Zd(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof So)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ao)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ko)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ql)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw X()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:SC(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:X()}(t,e.precondition)),n}function RC(t,e){return t&&t.length>0?(he(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?un(s.updateTime):un(i);return o.isEqual(J.min())&&(o=un(i)),new cC(o,s.transformResults||[])}(n,e))):[]}function NC(t,e){return{documents:[Rw(t,e.path)]}}function PC(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Rw(t,s);const i=function(d){if(d.length!==0)return bw(Jt.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(f=>function(g){return{field:hs(g.field),direction:OC(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=Xd(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function bC(t){let e=AC(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){he(r===1);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=function(m){const g=Pw(m);return g instanceof Jt&&aw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(x){return new xo(fs(x.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,gu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,_=m.values||[];return new Hl(_,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,_=m.values||[];return new Hl(_,g)}(n.endAt)),Yk(e,s,o,i,l,"F",u,d)}function DC(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return X()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Pw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=fs(n.unaryFilter.field);return Ve.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=fs(n.unaryFilter.field);return Ve.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=fs(n.unaryFilter.field);return Ve.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=fs(n.unaryFilter.field);return Ve.create(o,"!=",{nullValue:"NULL_VALUE"});default:return X()}}(t):t.fieldFilter!==void 0?function(n){return Ve.create(fs(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return X()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jt.create(n.compositeFilter.filters.map(r=>Pw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return X()}}(n.compositeFilter.op))}(t):X()}function OC(t){return EC[t]}function VC(t){return TC[t]}function MC(t){return IC[t]}function hs(t){return{fieldPath:t.canonicalString()}}function fs(t){return Be.fromServerFormat(t.fieldPath)}function bw(t){return t instanceof Ve?function(n){if(n.op==="=="){if(qg(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NAN"}};if(Hg(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(qg(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NAN"}};if(Hg(n.value))return{unaryFilter:{field:hs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:hs(n.field),op:VC(n.op),value:n.value}}}(t):t instanceof Jt?function(n){const r=n.getFilters().map(s=>bw(s));return r.length===1?r[0]:{compositeFilter:{op:MC(n.op),filters:r}}}(t):X()}function LC(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class er{constructor(e,n,r,s,i=J.min(),o=J.min(),l=We.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new er(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new er(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jC{constructor(e){this.ct=e}}function FC(t){const e=bC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Yd(e,e.limit,"L"):e}/**
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
 */class UC{constructor(){this.un=new zC}addToCollectionParentIndex(e,n){return this.un.add(n),M.resolve()}getCollectionParents(e,n){return M.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return M.resolve()}deleteFieldIndex(e,n){return M.resolve()}deleteAllFieldIndexes(e){return M.resolve()}createTargetIndexes(e,n){return M.resolve()}getDocumentsMatchingTarget(e,n){return M.resolve(null)}getIndexType(e,n){return M.resolve(0)}getFieldIndexes(e,n){return M.resolve([])}getNextCollectionGroupToUpdate(e){return M.resolve(null)}getMinOffset(e,n){return M.resolve(mr.min())}getMinOffsetFromCollectionGroup(e,n){return M.resolve(mr.min())}updateCollectionGroup(e,n,r){return M.resolve()}updateIndexEntries(e,n){return M.resolve()}}class zC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(we.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(we.comparator)).toArray()}}/**
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
 */class Zs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Zs(0)}static kn(){return new Zs(-1)}}/**
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
 */class $C{constructor(){this.changes=new li(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?M.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class BC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class HC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&Ji(r.mutation,s,Nt.empty(),Me.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ne()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ne()){const s=Mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Li();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ne()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Pn();const o=Xi(),l=function(){return Xi()}();return n.forEach((u,d)=>{const f=r.get(d.key);s.has(d.key)&&(f===void 0||f.mutation instanceof Tr)?i=i.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Ji(f.mutation,d,f.mutation.getFieldMask(),Me.now())):o.set(d.key,Nt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>{var m;return l.set(d,new BC(f,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Xi();let s=new ke((o,l)=>o-l),i=ne();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||Nt.empty();f=l.applyToLocalView(d,f),r.set(u,f);const m=(s.get(l.batchId)||ne()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,f=u.value,m=gw();f.forEach(g=>{if(!i.has(g)){const _=Tw(n.get(g),r.get(g));_!==null&&m.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return M.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):dw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):M.resolve(Mr());let l=-1,u=i;return o.next(d=>M.forEach(d,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(f)?M.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,ne())).next(f=>({batchId:l,changes:mw(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Li();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Li();return this.indexManager.getCollectionParents(e,i).next(l=>M.forEach(l,u=>{const d=function(m,g){return new ai(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(f=>{f.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,at.newInvalidDocument(f)))});let l=Li();return o.forEach((u,d)=>{const f=i.get(u);f!==void 0&&Ji(f.mutation,d,Nt.empty(),Me.now()),vu(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class qC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return M.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:un(s.createTime)}}(n)),M.resolve()}getNamedQuery(e,n){return M.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:FC(s.bundledQuery),readTime:un(s.readTime)}}(n)),M.resolve()}}/**
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
 */class WC{constructor(){this.overlays=new ke(K.comparator),this.Ir=new Map}getOverlay(e,n){return M.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Mr();return M.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),M.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),M.resolve()}getOverlaysForCollection(e,n,r){const s=Mr(),i=n.length+1,o=new K(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return M.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=i.get(d.largestBatchId);f===null&&(f=Mr(),i=i.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const l=Mr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>l.set(d,f)),!(l.size()>=s)););return M.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mC(n,r));let i=this.Ir.get(n);i===void 0&&(i=ne(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class GC{constructor(){this.sessionToken=We.EMPTY_BYTE_STRING}getSessionToken(e){return M.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,M.resolve()}}/**
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
 */class bf{constructor(){this.Tr=new Xe(ze.Er),this.dr=new Xe(ze.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new ze(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new ze(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new K(new we([])),r=new ze(n,e),s=new ze(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new K(new we([])),r=new ze(n,e),s=new ze(n,e+1);let i=ne();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ze(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ze{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return K.comparator(e.key,n.key)||ue(e.wr,n.wr)}static Ar(e,n){return ue(e.wr,n.wr)||K.comparator(e.key,n.key)}}/**
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
 */class KC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Xe(ze.Er)}checkEmpty(e){return M.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pC(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new ze(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return M.resolve(o)}lookupMutationBatch(e,n){return M.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return M.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return M.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return M.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ze(n,0),s=new ze(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),M.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(ue);return n.forEach(s=>{const i=new ze(s,0),o=new ze(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),M.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new ze(new K(i),0);let l=new Xe(ue);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},o),M.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){he(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return M.forEach(n.mutations,s=>{const i=new ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new ze(n,0),s=this.br.firstAfterOrEqual(r);return M.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,M.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class QC{constructor(e){this.Mr=e,this.docs=function(){return new ke(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return M.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Pn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),M.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Pn();const o=n.path,l=new K(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||Pk(Nk(f),r)<=0||(s.has(f.key)||vu(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return M.resolve(i)}getAllFromCollectionGroup(e,n,r,s){X()}Or(e,n){return M.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new YC(this)}getSize(e){return M.resolve(this.size)}}class YC extends $C{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),M.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class XC{constructor(e){this.persistence=e,this.Nr=new li(n=>xf(n),Sf),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Lr=0,this.Br=new bf,this.targetCount=0,this.kr=Zs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),M.resolve()}getLastRemoteSnapshotVersion(e){return M.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return M.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),M.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),M.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Zs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,M.resolve()}updateTargetData(e,n){return this.Kn(n),M.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,M.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),M.waitFor(i).next(()=>s)}getTargetCount(e){return M.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return M.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),M.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),M.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),M.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return M.resolve(r)}containsKey(e,n){return M.resolve(this.Br.containsKey(n))}}/**
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
 */class JC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new wf(0),this.Kr=!1,this.Kr=!0,this.$r=new GC,this.referenceDelegate=e(this),this.Ur=new XC(this),this.indexManager=new UC,this.remoteDocumentCache=function(s){return new QC(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new jC(n),this.Gr=new qC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new KC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const s=new ZC(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return M.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class ZC extends Dk{constructor(e){super(),this.currentSequenceNumber=e}}class Df{constructor(e){this.persistence=e,this.Jr=new bf,this.Yr=null}static Zr(e){return new Df(e)}get Xr(){if(this.Yr)return this.Yr;throw X()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),M.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),M.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),M.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return M.forEach(this.Xr,r=>{const s=K.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,J.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return M.or([()=>M.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Of{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ne(),s=ne();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Of(e,n.fromCache,r,s)}}/**
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
 */class eR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class tR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return r1()?8:Ok(dt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new eR;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(Pi()<=re.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",ds(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),M.resolve()):(Pi()<=re.DEBUG&&W("QueryEngine","Query:",ds(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(Pi()<=re.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",ds(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,ln(n))):M.resolve())}Yi(e,n){if(Qg(n))return M.resolve(null);let r=ln(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Yd(n,null,"F"),r=ln(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ne(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,Yd(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return Qg(n)||s.isEqual(J.min())?M.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?M.resolve(null):(Pi()<=re.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ds(n)),this.rs(e,o,n,Rk(s,-1)).next(l=>l))})}ts(e,n){let r=new Xe(fw(e));return n.forEach((s,i)=>{vu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return Pi()<=re.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",ds(n)),this.Ji.getDocumentsMatchingQuery(e,n,mr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class nR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new ke(ue),this._s=new li(i=>xf(i),Sf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new HC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function rR(t,e,n,r){return new nR(t,e,n,r)}async function Ow(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ne();for(const d of s){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of i){l.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function sR(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,f){const m=d.batch,g=m.keys();let _=M.resolve();return g.forEach(x=>{_=_.next(()=>f.getEntry(u,x)).next(P=>{const O=d.docVersions.get(x);he(O!==null),P.version.compareTo(O)<0&&(m.applyToRemoteDocument(P,d),P.isValidDocument()&&(P.setReadTime(d.commitVersion),f.addEntry(P)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ne();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Vw(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function iR(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((f,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,f.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,f.addedDocuments,m)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(We.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(m,_),function(P,O,T){return P.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(g,_,f)&&l.push(n.Ur.updateTargetData(i,_))});let u=Pn(),d=ne();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))}),l.push(oR(i,o,e.documentUpdates).next(f=>{u=f.Ps,d=f.Is})),!r.isEqual(J.min())){const f=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(f)}return M.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function oR(t,e,n){let r=ne(),s=ne();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Pn();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):W("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function aR(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function lR(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,M.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new er(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function th(t,e,n){const r=Z(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!$o(o))throw o;W("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function oy(t,e,n){const r=Z(t);let s=J.min(),i=ne();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const m=Z(u),g=m._s.get(f);return g!==void 0?M.resolve(m.os.get(g)):m.Ur.getTargetData(d,f)}(r,o,ln(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:J.min(),n?i:ne())).next(l=>(uR(r,Jk(e),l),{documents:l,Ts:i})))}function uR(t,e,n){let r=t.us.get(e)||J.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class ay{constructor(){this.activeTargetIds=sC()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class cR{constructor(){this.so=new ay,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new ay,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class dR{_o(e){}shutdown(){}}/**
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
 */class ly{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){W("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){W("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ja=null;function Uc(){return ja===null?ja=function(){return 268435456+Math.round(2147483648*Math.random())}():ja++,"0x"+ja.toString(16)}/**
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
 */const hR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class fR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const st="WebChannelConnection";class pR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Uc(),u=this.xo(n,r.toUriEncodedString());W("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(f=>(W("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Yr("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",s),f})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+oi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=hR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Uc();return new Promise((o,l)=>{const u=new Q0;u.setWithCredentials(!0),u.listenOnce(Y0.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case rl.NO_ERROR:const f=u.getResponseJson();W(st,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(f)),o(f);break;case rl.TIMEOUT:W(st,`RPC '${e}' ${i} timed out`),l(new H(V.DEADLINE_EXCEEDED,"Request time out"));break;case rl.HTTP_ERROR:const m=u.getStatus();if(W(st,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const x=function(O){const T=O.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(T)>=0?T:V.UNKNOWN}(_.status);l(new H(x,_.message))}else l(new H(V.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new H(V.UNAVAILABLE,"Connection failed."));break;default:X()}}finally{W(st,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);W(st,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=Uc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Z0(),l=J0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=i.join("");W(st,`Creating RPC '${e}' stream ${s}: ${f}`,u);const m=o.createWebChannel(f,u);let g=!1,_=!1;const x=new fR({Io:O=>{_?W(st,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(W(st,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),W(st,`RPC '${e}' stream ${s} sending:`,O),m.send(O))},To:()=>m.close()}),P=(O,T,E)=>{O.listen(T,k=>{try{E(k)}catch(D){setTimeout(()=>{throw D},0)}})};return P(m,Mi.EventType.OPEN,()=>{_||(W(st,`RPC '${e}' stream ${s} transport opened.`),x.yo())}),P(m,Mi.EventType.CLOSE,()=>{_||(_=!0,W(st,`RPC '${e}' stream ${s} transport closed`),x.So())}),P(m,Mi.EventType.ERROR,O=>{_||(_=!0,Yr(st,`RPC '${e}' stream ${s} transport errored:`,O),x.So(new H(V.UNAVAILABLE,"The operation could not be completed")))}),P(m,Mi.EventType.MESSAGE,O=>{var T;if(!_){const E=O.data[0];he(!!E);const k=E,D=k.error||((T=k[0])===null||T===void 0?void 0:T.error);if(D){W(st,`RPC '${e}' stream ${s} received error:`,D);const U=D.status;let j=function(w){const S=De[w];if(S!==void 0)return xw(S)}(U),I=D.message;j===void 0&&(j=V.INTERNAL,I="Unknown error status: "+U+" with message "+D.message),_=!0,x.So(new H(j,I)),m.close()}else W(st,`RPC '${e}' stream ${s} received:`,E),x.bo(E)}}),P(l,X0.STAT_EVENT,O=>{O.stat===Hd.PROXY?W(st,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Hd.NOPROXY&&W(st,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.wo()},0),x}}function zc(){return typeof document<"u"?document:null}/**
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
 */function Tu(t){return new xC(t,!0)}/**
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
 */class Mw{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&W("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Lw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new Mw(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Nn(n.toString()),Nn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new H(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return W("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(W("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class mR extends Lw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=kC(this.serializer,e),r=function(i){if(!("targetChange"in i))return J.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?un(o.readTime):J.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=eh(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Kd(u)?{documents:NC(i,u)}:{query:PC(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=kw(i,o.resumeToken);const d=Xd(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(J.min())>0){l.readTime=Wl(i,o.snapshotVersion.toTimestamp());const d=Xd(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=DC(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=eh(this.serializer),n.removeTarget=e,this.a_(n)}}class gR extends Lw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return he(!!e.streamToken),this.lastStreamToken=e.streamToken,he(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){he(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=RC(e.writeResults,e.commitTime),r=un(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=eh(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>CC(this.serializer,r))};this.a_(n)}}/**
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
 */class yR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Jd(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new H(V.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,Jd(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(V.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class vR{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nn(n),this.D_=!1):W("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class _R{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ss(this)&&(W("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=Z(u);d.L_.add(4),await qo(d),d.q_.set("Unknown"),d.L_.delete(4),await Iu(d)}(this))})}),this.q_=new vR(r,s)}}async function Iu(t){if(ss(t))for(const e of t.B_)await e(!0)}async function qo(t){for(const e of t.B_)await e(!1)}function jw(t,e){const n=Z(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),jf(n)?Lf(n):ui(n).r_()&&Mf(n,e))}function Vf(t,e){const n=Z(t),r=ui(n);n.N_.delete(e),r.r_()&&Fw(n,e),n.N_.size===0&&(r.r_()?r.o_():ss(n)&&n.q_.set("Unknown"))}function Mf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ui(t).A_(e)}function Fw(t,e){t.Q_.xe(e),ui(t).R_(e)}function Lf(t){t.Q_=new wC({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),ui(t).start(),t.q_.v_()}function jf(t){return ss(t)&&!ui(t).n_()&&t.N_.size>0}function ss(t){return Z(t).L_.size===0}function Uw(t){t.Q_=void 0}async function wR(t){t.q_.set("Online")}async function ER(t){t.N_.forEach((e,n)=>{Mf(t,e)})}async function TR(t,e){Uw(t),jf(t)?(t.q_.M_(e),Lf(t)):t.q_.set("Unknown")}async function IR(t,e,n){if(t.q_.set("Online"),e instanceof Aw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){W("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gl(t,r)}else if(e instanceof ol?t.Q_.Ke(e):e instanceof Sw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(J.min()))try{const r=await Vw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const f=i.N_.get(d);f&&i.N_.set(d,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const f=i.N_.get(u);if(!f)return;i.N_.set(u,f.withResumeToken(We.EMPTY_BYTE_STRING,f.snapshotVersion)),Fw(i,u);const m=new er(f.target,u,d,f.sequenceNumber);Mf(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){W("RemoteStore","Failed to raise snapshot:",r),await Gl(t,r)}}async function Gl(t,e,n){if(!$o(e))throw e;t.L_.add(1),await qo(t),t.q_.set("Offline"),n||(n=()=>Vw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Iu(t)})}function zw(t,e){return e().catch(n=>Gl(t,n,e))}async function xu(t){const e=Z(t),n=yr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;xR(e);)try{const s=await aR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,SR(e,s)}catch(s){await Gl(e,s)}$w(e)&&Bw(e)}function xR(t){return ss(t)&&t.O_.length<10}function SR(t,e){t.O_.push(e);const n=yr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function $w(t){return ss(t)&&!yr(t).n_()&&t.O_.length>0}function Bw(t){yr(t).start()}async function AR(t){yr(t).p_()}async function kR(t){const e=yr(t);for(const n of t.O_)e.m_(n.mutations)}async function CR(t,e,n){const r=t.O_.shift(),s=Rf.from(r,e,n);await zw(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await xu(t)}async function RR(t,e){e&&yr(t).V_&&await async function(r,s){if(function(o){return yC(o)&&o!==V.ABORTED}(s.code)){const i=r.O_.shift();yr(r).s_(),await zw(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await xu(r)}}(t,e),$w(t)&&Bw(t)}async function uy(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),W("RemoteStore","RemoteStore received new credentials");const r=ss(n);n.L_.add(3),await qo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Iu(n)}async function NR(t,e){const n=Z(t);e?(n.L_.delete(2),await Iu(n)):e||(n.L_.add(2),await qo(n),n.q_.set("Unknown"))}function ui(t){return t.K_||(t.K_=function(n,r,s){const i=Z(n);return i.w_(),new mR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:wR.bind(null,t),Ro:ER.bind(null,t),mo:TR.bind(null,t),d_:IR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),jf(t)?Lf(t):t.q_.set("Unknown")):(await t.K_.stop(),Uw(t))})),t.K_}function yr(t){return t.U_||(t.U_=function(n,r,s){const i=Z(n);return i.w_(),new gR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:AR.bind(null,t),mo:RR.bind(null,t),f_:kR.bind(null,t),g_:CR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await xu(t)):(await t.U_.stop(),t.O_.length>0&&(W("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Ff{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new zr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new Ff(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Uf(t,e){if(Nn("AsyncQueue",`${e}: ${t}`),$o(t))return new H(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Li(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new Fs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class cy{constructor(){this.W_=new ke(K.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):X():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ei{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new ei(e,n,Fs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class PR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class bR{constructor(){this.queries=dy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=Z(n),i=s.queries;s.queries=dy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new H(V.ABORTED,"Firestore shutting down"))}}function dy(){return new li(t=>hw(t),yu)}async function DR(t,e){const n=Z(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new PR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Uf(o,`Initialization of query '${ds(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&zf(n)}async function OR(t,e){const n=Z(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function VR(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&zf(n)}function MR(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function zf(t){t.Y_.forEach(e=>{e.next()})}var nh,hy;(hy=nh||(nh={})).ea="default",hy.Cache="cache";class LR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ei(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=ei.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==nh.Cache}}/**
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
 */class Hw{constructor(e){this.key=e}}class qw{constructor(e){this.key=e}}class jR{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ne(),this.mutatedKeys=ne(),this.Aa=fw(e),this.Ra=new Fs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new cy,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((f,m)=>{const g=s.get(f),_=vu(this.query,m)?m:null,x=!!g&&this.mutatedKeys.has(g.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;g&&_?g.data.isEqual(_.data)?x!==P&&(r.track({type:3,doc:_}),O=!0):this.ga(g,_)||(r.track({type:2,doc:_}),O=!0,(u&&this.Aa(_,u)>0||d&&this.Aa(_,d)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),O=!0):g&&!_&&(r.track({type:1,doc:g}),O=!0,(u||d)&&(l=!0)),O&&(_?(o=o.add(_),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((f,m)=>function(_,x){const P=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return X()}};return P(_)-P(x)}(f.type,m.type)||this.Aa(f.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new ei(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new cy,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ne(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new qw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Hw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ne();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return ei.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class FR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class UR{constructor(e){this.key=e,this.va=!1}}class zR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new li(l=>hw(l),yu),this.Ma=new Map,this.xa=new Set,this.Oa=new ke(K.comparator),this.Na=new Map,this.La=new bf,this.Ba={},this.ka=new Map,this.qa=Zs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function $R(t,e,n=!0){const r=Xw(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Ww(r,e,n,!0),s}async function BR(t,e){const n=Xw(t);await Ww(n,e,!0,!1)}async function Ww(t,e,n,r){const s=await lR(t.localStore,ln(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await HR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&jw(t.remoteStore,s),l}async function HR(t,e,n,r,s){t.Ka=(m,g,_)=>async function(P,O,T,E){let k=O.view.ma(T);k.ns&&(k=await oy(P.localStore,O.query,!1).then(({documents:I})=>O.view.ma(I,k)));const D=E&&E.targetChanges.get(O.targetId),U=E&&E.targetMismatches.get(O.targetId)!=null,j=O.view.applyChanges(k,P.isPrimaryClient,D,U);return py(P,O.targetId,j.wa),j.snapshot}(t,m,g,_);const i=await oy(t.localStore,e,!0),o=new jR(e,i.Ts),l=o.ma(i.documents),u=Ho.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);py(t,n,d.wa);const f=new FR(e,n,o);return t.Fa.set(e,f),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function qR(t,e,n){const r=Z(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!yu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await th(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Vf(r.remoteStore,s.targetId),rh(r,s.targetId)}).catch(zo)):(rh(r,s.targetId),await th(r.localStore,s.targetId,!0))}async function WR(t,e){const n=Z(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Vf(n.remoteStore,r.targetId))}async function GR(t,e,n){const r=eN(t);try{const s=await function(o,l){const u=Z(o),d=Me.now(),f=l.reduce((_,x)=>_.add(x.key),ne());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let x=Pn(),P=ne();return u.cs.getEntries(_,f).next(O=>{x=O,x.forEach((T,E)=>{E.isValidDocument()||(P=P.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,x)).next(O=>{m=O;const T=[];for(const E of l){const k=hC(E,m.get(E.key).overlayedDocument);k!=null&&T.push(new Tr(E.key,k,sw(k.value.mapValue),Ut.exists(!0)))}return u.mutationQueue.addMutationBatch(_,d,T,l)}).next(O=>{g=O;const T=O.applyToLocalDocumentSet(m,P);return u.documentOverlayCache.saveOverlays(_,O.batchId,T)})}).then(()=>({batchId:g.batchId,changes:mw(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new ke(ue)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await Wo(r,s.changes),await xu(r.remoteStore)}catch(s){const i=Uf(s,"Failed to persist write");n.reject(i)}}async function Gw(t,e){const n=Z(t);try{const r=await iR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(he(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?he(o.va):s.removedDocuments.size>0&&(he(o.va),o.va=!1))}),await Wo(n,r,e)}catch(r){await zo(r)}}function fy(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=Z(o);u.onlineState=l;let d=!1;u.queries.forEach((f,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&zf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function KR(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new ke(K.comparator);o=o.insert(i,at.newNoDocument(i,J.min()));const l=ne().add(i),u=new Eu(J.min(),new Map,new ke(ue),o,l);await Gw(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),$f(r)}else await th(r.localStore,e,!1).then(()=>rh(r,e,n)).catch(zo)}async function QR(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await sR(n.localStore,e);Qw(n,r,null),Kw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Wo(n,s)}catch(s){await zo(s)}}async function YR(t,e,n){const r=Z(t);try{const s=await function(o,l){const u=Z(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(he(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);Qw(r,e,n),Kw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Wo(r,s)}catch(s){await zo(s)}}function Kw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function Qw(t,e,n){const r=Z(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function rh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Yw(t,r)})}function Yw(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(Vf(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),$f(t))}function py(t,e,n){for(const r of n)r instanceof Hw?(t.La.addReference(r.key,e),XR(t,r)):r instanceof qw?(W("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Yw(t,r.key)):X()}function XR(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(W("SyncEngine","New document in limbo: "+n),t.xa.add(r),$f(t))}function $f(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new K(we.fromString(e)),r=t.qa.next();t.Na.set(r,new UR(n)),t.Oa=t.Oa.insert(n,r),jw(t.remoteStore,new er(ln(Af(n.path)),r,"TargetPurposeLimboResolution",wf.oe))}}async function Wo(t,e,n){const r=Z(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Of.Wi(u.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const f=Z(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>M.forEach(d,g=>M.forEach(g.$i,_=>f.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>M.forEach(g.Ui,_=>f.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!$o(m))throw m;W("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const _=f.os.get(g),x=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(x);f.os=f.os.insert(g,P)}}}(r.localStore,i))}async function JR(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){W("SyncEngine","User change. New user:",e.toKey());const r=await Ow(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new H(V.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Wo(n,r.hs)}}function ZR(t,e){const n=Z(t),r=n.Na.get(e);if(r&&r.va)return ne().add(r.key);{let s=ne();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function Xw(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Gw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ZR.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=KR.bind(null,e),e.Ca.d_=VR.bind(null,e.eventManager),e.Ca.$a=MR.bind(null,e.eventManager),e}function eN(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=QR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=YR.bind(null,e),e}class Kl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Tu(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return rR(this.persistence,new tR,e.initialUser,this.serializer)}Ga(e){return new JC(Df.Zr,this.serializer)}Wa(e){return new cR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Kl.provider={build:()=>new Kl};class sh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>fy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=JR.bind(null,this.syncEngine),await NR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new bR}()}createDatastore(e){const n=Tu(e.databaseInfo.databaseId),r=function(i){return new pR(i)}(e.databaseInfo);return function(i,o,l,u){return new yR(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new _R(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>fy(this.syncEngine,n,0),function(){return ly.D()?new ly:new dR}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,f){const m=new zR(s,i,o,l,u,d);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=Z(s);W("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await qo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}sh.provider={build:()=>new sh};/**
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
 */class tN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Nn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class nN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=_f.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{W("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new zr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Uf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function $c(t,e){t.asyncQueue.verifyOperationInProgress(),W("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Ow(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function my(t,e){t.asyncQueue.verifyOperationInProgress();const n=await rN(t);W("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>uy(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>uy(e.remoteStore,s)),t._onlineComponents=e}async function rN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W("FirestoreClient","Using user provided OfflineComponentProvider");try{await $c(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===V.FAILED_PRECONDITION||s.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Yr("Error using user provided cache. Falling back to memory cache: "+n),await $c(t,new Kl)}}else W("FirestoreClient","Using default OfflineComponentProvider"),await $c(t,new Kl);return t._offlineComponents}async function Jw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W("FirestoreClient","Using user provided OnlineComponentProvider"),await my(t,t._uninitializedComponentsProvider._online)):(W("FirestoreClient","Using default OnlineComponentProvider"),await my(t,new sh))),t._onlineComponents}function sN(t){return Jw(t).then(e=>e.syncEngine)}async function gy(t){const e=await Jw(t),n=e.eventManager;return n.onListen=$R.bind(null,e.syncEngine),n.onUnlisten=qR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=BR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WR.bind(null,e.syncEngine),n}/**
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
 */function Zw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const yy=new Map;/**
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
 */function eE(t,e,n){if(!n)throw new H(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function tE(t,e,n,r){if(e===!0&&r===!0)throw new H(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function vy(t){if(!K.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function _y(t){if(K.isDocumentKey(t))throw new H(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Su(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":X()}function Yt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Su(t);throw new H(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class wy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new H(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new H(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}tE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Zw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new H(V.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Au{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new tw;switch(r.type){case"firstParty":return new xk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=yy.get(n);r&&(W("ComponentProvider","Removing Datastore"),yy.delete(n),r.terminate())}(this),Promise.resolve()}}function nE(t,e,n,r={}){var s;const i=(t=Yt(t,Au))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Yr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=it.MOCK_USER;else{l=Yx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new H(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(d)}t._authCredentials=new Ek(new ew(l,u))}}/**
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
 */class Ir{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ir(this.firestore,e,this._query)}}class ut{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class Tn extends Ir{constructor(e,n,r){super(e,n,Af(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new K(e))}withConverter(e){return new Tn(this.firestore,e,this._path)}}function kt(t,e,...n){if(t=qe(t),eE("collection","path",e),t instanceof Au){const r=we.fromString(e,...n);return _y(r),new Tn(t,null,r)}{if(!(t instanceof ut||t instanceof Tn))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return _y(r),new Tn(t.firestore,null,r)}}function _t(t,e,...n){if(t=qe(t),arguments.length===1&&(e=_f.newId()),eE("doc","path",e),t instanceof Au){const r=we.fromString(e,...n);return vy(r),new ut(t,null,new K(r))}{if(!(t instanceof ut||t instanceof Tn))throw new H(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return vy(r),new ut(t.firestore,t instanceof Tn?t.converter:null,new K(r))}}/**
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
 */class Ey{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new Mw(this,"async_queue_retry"),this.Vu=()=>{const r=zc();r&&W("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=zc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=zc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new zr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!$o(e))throw e;W("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Nn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Ff.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&X()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Ty(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class vr extends Au{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ey,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ey(e),this._firestoreClient=void 0,await e}}}function rE(t,e){const n=typeof t=="object"?t:f0(),r=typeof t=="string"?t:"(default)",s=af(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kx("firestore");i&&nE(s,...i)}return s}function Bf(t){if(t._terminated)throw new H(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||iN(t),t._firestoreClient}function iN(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,d,f){return new Lk(l,u,d,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Zw(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new nN(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class Zr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Zr(We.fromBase64String(e))}catch(n){throw new H(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Zr(We.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Go{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Be(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ko{constructor(e){this._methodName=e}}/**
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
 */class ku{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ue(this._lat,e._lat)||ue(this._long,e._long)}}/**
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
 */class Cu{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const oN=/^__.*__$/;class aN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Bo(e,this.data,n,this.fieldTransforms)}}class sE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Tr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function iE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw X()}}class Hf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Hf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Ql(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(iE(this.Cu)&&oN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class lN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Tu(e)}Qu(e,n,r,s=!1){return new Hf({Cu:e,methodName:n,qu:r,path:Be.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ru(t){const e=t._freezeSettings(),n=Tu(t._databaseId);return new lN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function oE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Wf("Data must be an object, but it was:",o,r);const l=aE(r,o);let u,d;if(i.merge)u=new Nt(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const m of i.mergeFields){const g=ih(e,m,n);if(!o.contains(g))throw new H(V.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);uE(f,g)||f.push(g)}u=new Nt(f),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new aN(new Et(l),u,d)}class Nu extends Ko{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Nu}}class qf extends Ko{_toFieldTransform(e){return new lC(e.path,new So)}isEqual(e){return e instanceof qf}}function uN(t,e,n,r){const s=t.Qu(1,e,n);Wf("Data must be an object, but it was:",s,r);const i=[],o=Et.empty();rs(r,(u,d)=>{const f=Gf(e,u,n);d=qe(d);const m=s.Nu(f);if(d instanceof Nu)i.push(f);else{const g=Qo(d,m);g!=null&&(i.push(f),o.set(f,g))}});const l=new Nt(i);return new sE(o,l,s.fieldTransforms)}function cN(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[ih(e,r,n)],u=[s];if(i.length%2!=0)throw new H(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(ih(e,i[g])),u.push(i[g+1]);const d=[],f=Et.empty();for(let g=l.length-1;g>=0;--g)if(!uE(d,l[g])){const _=l[g];let x=u[g];x=qe(x);const P=o.Nu(_);if(x instanceof Nu)d.push(_);else{const O=Qo(x,P);O!=null&&(d.push(_),f.set(_,O))}}const m=new Nt(d);return new sE(f,m,o.fieldTransforms)}function dN(t,e,n,r=!1){return Qo(n,t.Qu(r?4:3,e))}function Qo(t,e){if(lE(t=qe(t)))return Wf("Unsupported field value:",e,t),aE(t,e);if(t instanceof Ko)return function(r,s){if(!iE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=Qo(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return iC(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Me.fromDate(r);return{timestampValue:Wl(s.serializer,i)}}if(r instanceof Me){const i=new Me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Wl(s.serializer,i)}}if(r instanceof ku)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Zr)return{bytesValue:kw(s.serializer,r._byteString)};if(r instanceof ut){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Pf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Cu)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return kf(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Su(r)}`)}(t,e)}function aE(t,e){const n={};return nw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,s)=>{const i=Qo(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function lE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Me||t instanceof ku||t instanceof Zr||t instanceof ut||t instanceof Ko||t instanceof Cu)}function Wf(t,e,n){if(!lE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Su(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ih(t,e,n){if((e=qe(e))instanceof Go)return e._internalPath;if(typeof e=="string")return Gf(t,e);throw Ql("Field path arguments must be of type string or ",t,!1,void 0,n)}const hN=new RegExp("[~\\*/\\[\\]]");function Gf(t,e,n){if(e.search(hN)>=0)throw Ql(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Go(...e.split("."))._internalPath}catch{throw Ql(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ql(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new H(V.INVALID_ARGUMENT,l+t+u)}function uE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class cE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Kf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fN extends cE{data(){return super.data()}}function Kf(t,e){return typeof e=="string"?Gf(t,e):e instanceof Go?e._internalPath:e._delegate._internalPath}/**
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
 */function pN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new H(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qf{}class Yf extends Qf{}function al(t,e,...n){let r=[];e instanceof Qf&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof bu).length,l=i.filter(u=>u instanceof Pu).length;if(o>1||o>0&&l>0)throw new H(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Pu extends Yf{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Pu(e,n,r)}_apply(e){const n=this._parse(e);return dE(e._query,n),new Ir(e.firestore,e.converter,Qd(e._query,n))}_parse(e){const n=Ru(e.firestore);return function(i,o,l,u,d,f,m){let g;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new H(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){xy(m,f);const _=[];for(const x of m)_.push(Iy(u,i,x));g={arrayValue:{values:_}}}else g=Iy(u,i,m)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||xy(m,f),g=dN(l,o,m,f==="in"||f==="not-in");return Ve.create(d,f,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class bu extends Qf{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new bu(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)dE(o,u),o=Qd(o,u)}(e._query,n),new Ir(e.firestore,e.converter,Qd(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Du extends Yf{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Du(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new H(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xo(i,o)}(e._query,this._field,this._direction);return new Ir(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new ai(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function oh(t,e="asc"){const n=e,r=Kf("orderBy",t);return Du._create(r,n)}function Iy(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new H(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!dw(e)&&n.indexOf("/")!==-1)throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(we.fromString(n));if(!K.isDocumentKey(r))throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Bg(t,new K(r))}if(n instanceof ut)return Bg(t,n._key);throw new H(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Su(n)}.`)}function xy(t,e){if(!Array.isArray(t)||t.length===0)throw new H(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function dE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new H(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class hE{convertValue(e,n="none"){switch(Jr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Pe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Xr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw X()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Pe(o.doubleValue));return new Cu(i)}convertGeoPoint(e){return new ku(Pe(e.latitude),Pe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Tf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(To(e));default:return null}}convertTimestamp(e){const n=gr(e);return new Me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=we.fromString(e);he(Dw(r));const s=new Ys(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||Nn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function fE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Rs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xf extends cE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Kf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Zi extends Xf{data(e={}){return super.data(e)}}class pE{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Rs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Zi(this._firestore,this._userDataWriter,r.key,r,new Rs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new Zi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new Zi(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Rs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,f=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:mN(l.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function mN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return X()}}class mE extends hE{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,n)}}function gN(t,e,n){t=Yt(t,ut);const r=Yt(t.firestore,vr),s=fE(t.converter,e,n);return Yo(r,[oE(Ru(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Ut.none())])}function br(t,e,n,...r){t=Yt(t,ut);const s=Yt(t.firestore,vr),i=Ru(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof Go?cN(i,"updateDoc",t._key,e,n,r):uN(i,"updateDoc",t._key,e),Yo(s,[o.toMutation(t._key,Ut.exists(!0))])}function ps(t){return Yo(Yt(t.firestore,vr),[new Cf(t._key,Ut.none())])}function ms(t,e){const n=Yt(t.firestore,vr),r=_t(t),s=fE(t.converter,e);return Yo(n,[oE(Ru(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Ut.exists(!1))]).then(()=>r)}function Un(t,...e){var n,r,s;t=qe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Ty(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Ty(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,d,f;if(t instanceof ut)d=Yt(t.firestore,vr),f=Af(t._key.path),u={next:m=>{e[o]&&e[o](yN(d,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Yt(t,Ir);d=Yt(m.firestore,vr),f=m._query;const g=new mE(d);u={next:_=>{e[o]&&e[o](new pE(d,g,m,_))},error:e[o+1],complete:e[o+2]},pN(t._query)}return function(g,_,x,P){const O=new tN(P),T=new LR(_,O,x);return g.asyncQueue.enqueueAndForget(async()=>DR(await gy(g),T)),()=>{O.Za(),g.asyncQueue.enqueueAndForget(async()=>OR(await gy(g),T))}}(Bf(d),f,l,u)}function Yo(t,e){return function(r,s){const i=new zr;return r.asyncQueue.enqueueAndForget(async()=>GR(await sN(r),s,i)),i.promise}(Bf(t),e)}function yN(t,e,n){const r=n.docs.get(e._key),s=new mE(t);return new Xf(t,s,e._key,r,new Rs(n.hasPendingWrites,n.fromCache),e.converter)}function gE(){return new qf("serverTimestamp")}(function(e,n=!0){(function(s){oi=s})(si),Gs(new Gr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new vr(new Tk(r.getProvider("auth-internal")),new Ak(r.getProvider("app-check-internal")),function(d,f){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new H(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ys(d.options.projectId,f)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),dr(jg,"4.7.3",e),dr(jg,"4.7.3","esm2017")})();const vN=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:hE,Bytes:Zr,CollectionReference:Tn,DocumentReference:ut,DocumentSnapshot:Xf,FieldPath:Go,FieldValue:Ko,Firestore:vr,FirestoreError:H,GeoPoint:ku,Query:Ir,QueryCompositeFilterConstraint:bu,QueryConstraint:Yf,QueryDocumentSnapshot:Zi,QueryFieldFilterConstraint:Pu,QueryOrderByConstraint:Du,QuerySnapshot:pE,SnapshotMetadata:Rs,Timestamp:Me,VectorValue:Cu,_AutoId:_f,_ByteString:We,_DatabaseId:Ys,_DocumentKey:K,_EmptyAuthCredentialsProvider:tw,_FieldPath:Be,_cast:Yt,_logWarn:Yr,_validateIsNotUsedTogether:tE,addDoc:ms,collection:kt,connectFirestoreEmulator:nE,deleteDoc:ps,doc:_t,ensureFirestoreConfigured:Bf,executeWrite:Yo,getFirestore:rE,onSnapshot:Un,orderBy:oh,query:al,serverTimestamp:gE,setDoc:gN,updateDoc:br},Symbol.toStringTag,{value:"Module"})),_N={apiKey:"AIzaSyDFGlm4ixlJ34vg9XT_otqIeKgZT5bmBu8",authDomain:"tsops-webapp-v1.firebaseapp.com",projectId:"tsops-webapp-v1",storageBucket:"tsops-webapp-v1.firebasestorage.app",messagingSenderId:"558840136278",appId:"1:558840136278:web:00e5918a1e98aa70f2f1f7"},yE=h0(_N),Sy=yk(yE),Te=rE(yE),wN="modulepreload",EN=function(t){return"/"+t},Ay={},TN=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=EN(u),u in Ay)return;Ay[u]=!0;const d=u.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":wN,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((g,_)=>{m.addEventListener("load",g),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function IN(t){const[e,n]=q.useState([]),[r,s]=q.useState([]),[i,o]=q.useState([]),[l,u]=q.useState([]),[d,f]=q.useState([]),[m,g]=q.useState([]),[_,x]=q.useState({});return q.useEffect(()=>{if(!t)return;const F=Un(kt(Te,"members"),ee=>{ee.empty?n([]):n(ee.docs.map(se=>({id:se.id,...se.data()})))}),pe=al(kt(Te,"tasks")),Ne=Un(pe,ee=>{ee.empty?s([]):s(ee.docs.map(se=>({id:se.id,...se.data()})))}),$=al(kt(Te,"logs"),oh("date","desc")),Q=Un($,ee=>{ee.empty?o([]):o(ee.docs.map(se=>({id:se.id,...se.data()})))}),G=al(kt(Te,"actionLogs"),oh("timestamp","desc")),ae=Un(G,ee=>{ee.empty?u([]):u(ee.docs.map(se=>({id:se.id,...se.data()})))}),ce=Un(kt(Te,"rules"),ee=>{f(ee.docs.map(se=>({id:se.id,...se.data()})))}),ge=Un(kt(Te,"manualScores"),ee=>{g(ee.docs.map(se=>({id:se.id,...se.data()})))}),vt=Un(kt(Te,"roles"),ee=>{const se={};ee.docs.forEach(Vt=>{se[Vt.id]=Vt.data().role}),x(se)});return()=>{F(),Ne(),Q(),ae(),ce(),ge(),vt()}},[t]),{members:e,tasks:r,logs:i,actionLogs:l,rules:d,manualScores:m,roles:_,handleTaskToggle:async(F,pe)=>{await br(_t(Te,"tasks",F),{completed:!pe})},handleUpdateTaskStatus:async(F,pe)=>{await br(_t(Te,"tasks",F),{status:pe})},handleAddTask:async F=>{await ms(kt(Te,"tasks"),F)},handleEditTask:async(F,pe)=>{await br(_t(Te,"tasks",F),pe)},handleDeleteTask:async F=>{await ps(_t(Te,"tasks",F))},handleAddMember:async F=>{await ms(kt(Te,"members"),F)},handleEditMember:async(F,pe)=>{await br(_t(Te,"members",F),pe)},handleDeleteMember:async F=>{await ps(_t(Te,"members",F))},handleAddLog:async F=>{await ms(kt(Te,"logs"),F)},handleResolveLog:async(F,pe,Ne)=>{await br(_t(Te,"logs",F),{status:"solved",resolution:pe,solvedBy:Ne==null?void 0:Ne.email})},handleDeleteLog:async F=>{await ps(_t(Te,"logs",F))},handleSaveRule:async F=>{if(F.id){const{id:pe,...Ne}=F;await br(_t(Te,"rules",pe),Ne)}else await ms(kt(Te,"rules"),F)},handleDeleteRule:async F=>{await ps(_t(Te,"rules",F))},handleSaveManualScore:async F=>{await ms(kt(Te,"manualScores"),{...F,timestamp:gE()})},handleDeleteManualScore:async F=>{await ps(_t(Te,"manualScores",F))},handleSaveRole:async(F,pe)=>{const Ne=_t(Te,"roles",F);await TN(async()=>{const{setDoc:$}=await Promise.resolve().then(()=>vN);return{setDoc:$}},void 0).then(({setDoc:$})=>$(Ne,{role:pe},{merge:!0}))}}}/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var xN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),fe=(t,e)=>{const n=q.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...d},f)=>q.createElement("svg",{ref:f,...xN,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${SN(t)}`,l].join(" "),...d},[...e.map(([m,g])=>q.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AN=fe("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=fe("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=fe("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CN=fe("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=fe("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=fe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=fe("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=fe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=fe("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=fe("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=fe("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=fe("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=fe("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=fe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=fe("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=fe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=fe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=fe("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=fe("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=fe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=fe("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=fe("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=fe("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=fe("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=fe("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]),ll=[{id:"dashboard",label:"หน้าหลัก",icon:ah},{id:"inbound",label:"งานรถโอนย้าย",icon:kN},{id:"outbound",label:"งานส่งสินค้า",icon:RN},{id:"internal",label:"งานรถส่วนกลาง",icon:NN},{id:"problems",label:"Problem Log",icon:Co},{id:"scorelog",label:"ประวัติคะแนน",icon:_E},{id:"actionlog",label:"ประวัติการทำงาน",icon:EE},{id:"rules",label:"ระเบียบการให้คะแนน",icon:wE},{id:"team",label:"จัดการทีม",icon:Ou},{id:"assign_menu",label:"กำหนดสิทธิ์ (Assign Menu)",icon:IE}];function HN({id:t,label:e,icon:n,activeTab:r,setActiveTab:s,isSidebarOpen:i,colorClass:o="text-gray-500"}){return p.jsxs("button",{onClick:()=>s(t),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 mb-1 ${r===t?"bg-blue-50 text-blue-700 shadow-sm border border-blue-100 font-medium":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"} ${i?"":"justify-center"}`,title:i?"":e,children:[p.jsx(n,{size:22,className:`flex-shrink-0 ${r===t?"text-blue-600":o}`}),i&&p.jsx("span",{className:"truncate text-sm",children:e})]})}function qN({isSidebarOpen:t,setSidebarOpen:e,activeTab:n,setActiveTab:r,appUser:s,currentUserRole:i,roles:o,handleLogout:l,hasAccess:u,setIsProfileModalOpen:d}){var m;const f=ll.filter(g=>u(g.id));return p.jsxs("aside",{className:`bg-white border-r border-gray-200 hidden md:flex flex-col transition-all duration-300 ease-in-out z-20 shadow-[2px_0_15px_rgba(0,0,0,0.03)] ${t?"w-64":"w-20"}`,children:[p.jsxs("div",{className:`p-4 border-b border-gray-100 flex items-center ${t?"justify-between":"justify-center"}`,children:[t&&p.jsxs("h1",{className:"text-xl font-extrabold text-blue-800 flex items-center gap-2 truncate",children:[p.jsx("div",{className:"w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md",children:p.jsx(ah,{size:18})}),p.jsxs("span",{className:"truncate",children:["Transport",p.jsx("span",{className:"text-blue-500 font-light",children:"Ops"})]})]}),!t&&p.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md",children:p.jsx(ah,{size:24})})]}),p.jsx("div",{className:"flex justify-end px-2 pt-2",children:p.jsx("button",{onClick:()=>e(!t),className:"p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition",children:t?p.jsx(PN,{size:20}):p.jsx(bN,{size:20,className:"mx-auto"})})}),p.jsx("nav",{className:"flex-1 p-3 space-y-0.5 overflow-y-auto overflow-x-hidden custom-scrollbar",children:f.map(g=>p.jsx(HN,{id:g.id,label:g.label,icon:g.icon,activeTab:n,setActiveTab:r,isSidebarOpen:t,colorClass:["inbound","outbound","internal","problems"].includes(g.id)?g.id==="inbound"?"text-green-500":g.id==="outbound"?"text-orange-500":g.id==="internal"?"text-purple-500":"text-red-500":"text-gray-500"},g.id))}),p.jsxs("div",{className:"p-4 border-t border-gray-100 mt-auto",children:[p.jsxs("div",{className:`flex items-center gap-3 ${t?"":"justify-center"} cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition`,onClick:()=>d(!0),children:[p.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs",children:s.email?s.email.charAt(0).toUpperCase():"U"}),t&&p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsx("p",{className:"text-sm font-medium text-gray-800 truncate",children:s.email||"User"}),p.jsx("div",{className:"flex items-center gap-2",children:p.jsx("span",{className:"text-[10px] bg-blue-50 text-blue-600 px-1.5 rounded border border-blue-100 truncate max-w-[80px]",children:((m=o.find(g=>g.id===i))==null?void 0:m.name)||i})})]})]}),t&&p.jsxs("button",{onClick:l,className:"text-xs text-red-500 hover:text-red-600 flex items-center gap-1 mt-2 w-full justify-center py-1",children:[p.jsx(MN,{size:10})," ออกจากระบบ"]})]})]})}const Fa=({icon:t,label:e,value:n,color:r,subtext:s})=>p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between hover:shadow-md transition-shadow",children:[p.jsxs("div",{children:[p.jsx("p",{className:"text-gray-500 text-sm font-medium mb-1",children:e}),p.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:n}),s&&p.jsx("p",{className:`text-xs mt-2 ${r}`,children:s})]}),p.jsx("div",{className:`p-3 rounded-lg ${r} bg-opacity-10`,children:p.jsx(t,{className:r,size:24})})]});function WN({members:t,tasks:e,logs:n}){const r=t||[],s=e||[],i=n||[],o=r.length,l=s.length,u=s.filter(_=>_==null?void 0:_.completed).length,d=l>0?Math.round(u/l*100):0,f=i.filter(_=>(_==null?void 0:_.status)==="pending").length,m=i.filter(_=>(_==null?void 0:_.status)==="solved").length,g=s.slice(0,5);return p.jsxs("div",{className:"space-y-6 animate-fade-in",children:[p.jsx("div",{className:"flex justify-between items-center",children:p.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Dashboard"})}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[p.jsx(Fa,{icon:Ou,label:"พนักงาน",value:o,color:"text-blue-600",subtext:"Active"}),p.jsx(Fa,{icon:vE,label:"งานสำเร็จ",value:`${u}/${l}`,color:"text-green-600",subtext:`${d}%`}),p.jsx(Fa,{icon:Co,label:"ปัญหาคงค้าง",value:f,color:"text-red-600",subtext:`แก้แล้ว ${m}`}),p.jsx(Fa,{icon:AN,label:"ประสิทธิภาพ",value:`${d}%`,color:"text-indigo-600",subtext:"ภาพรวม"})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100",children:[p.jsxs("h3",{className:"font-bold text-gray-800 mb-4 flex items-center gap-2",children:[p.jsx(DN,{size:20,className:"text-orange-500"})," งานล่าสุด"]}),p.jsx("div",{className:"space-y-3",children:g.length>0?g.map((_,x)=>p.jsxs("div",{className:"flex justify-between p-3 bg-gray-50 rounded-lg",children:[p.jsxs("div",{children:[p.jsx("p",{className:"font-medium text-sm",children:_==null?void 0:_.name}),p.jsx("p",{className:"text-xs text-gray-500",children:_==null?void 0:_.area})]}),p.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${_!=null&&_.completed?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`,children:_!=null&&_.completed?"เสร็จ":"กำลังทำ"})]},(_==null?void 0:_.id)||x)):p.jsx("p",{className:"text-center text-gray-400",children:"ไม่มีข้อมูล"})})]}),p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100",children:[p.jsxs("h3",{className:"font-bold text-gray-800 mb-4 flex items-center gap-2",children:[p.jsx(Co,{size:20,className:"text-red-500"})," ปัญหาล่าสุด"]}),p.jsxs("div",{className:"space-y-3",children:[i.slice(0,5).map((_,x)=>p.jsxs("div",{className:"p-3 border-l-4 border-red-400 bg-red-50 rounded-r-lg",children:[p.jsx("p",{className:"text-sm font-bold",children:_==null?void 0:_.topic}),p.jsx("p",{className:"text-xs text-gray-600 truncate",children:_==null?void 0:_.detail})]},(_==null?void 0:_.id)||x)),i.length===0&&p.jsx("p",{className:"text-center text-gray-400",children:"ไม่มีข้อมูล"})]})]})]})]})}function GN({members:t,onAddMember:e,onEditMember:n,onDeleteMember:r,roles:s}){const[i,o]=q.useState({name:"",role:"",dept:"Inbound",avatar:"",email:"",password:""}),[l,u]=q.useState(!1),[d,f]=q.useState(null),m=x=>{x.preventDefault(),e({...i,avatar:i.avatar||`https://i.pravatar.cc/150?u=${Date.now()}`}),o({name:"",role:"",dept:"Inbound",avatar:"",email:"",password:""})},g=x=>{f(x),u(!0)},_=x=>{x.preventDefault(),n(d),u(!1)};return p.jsxs("div",{className:"space-y-6 animate-fade-in",children:[p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[p.jsx(Ou,{className:"text-blue-600"})," จัดการทีมงาน"]}),l&&p.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm",children:p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in",children:[p.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[p.jsx(Jf,{className:"text-blue-600"})," แก้ไขข้อมูลพนักงาน"]}),p.jsxs("form",{onSubmit:_,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"ชื่อ-สกุล"}),p.jsx("input",{required:!0,className:"w-full border rounded px-3 py-2",value:d.name,onChange:x=>f({...d,name:x.target.value})})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"อีเมล (สำหรับเข้าสู่ระบบ)"}),p.jsx("input",{required:!0,type:"email",className:"w-full border rounded px-3 py-2",value:d.email,onChange:x=>f({...d,email:x.target.value})})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"ตำแหน่ง"}),p.jsx("select",{required:!0,className:"w-full border rounded px-3 py-2 bg-white",value:d.role,onChange:x=>f({...d,role:x.target.value}),children:s.map(x=>p.jsx("option",{value:x.name,children:x.name},x.id))})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"แผนก"}),p.jsxs("select",{className:"w-full border rounded px-3 py-2 bg-white",value:d.dept,onChange:x=>f({...d,dept:x.target.value}),children:[p.jsx("option",{value:"Inbound",children:"Inbound"}),p.jsx("option",{value:"Outbound",children:"Outbound"}),p.jsx("option",{value:"Internal",children:"Internal"}),p.jsx("option",{value:"Manager",children:"Manager"})]})]}),p.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[p.jsx("button",{type:"button",onClick:()=>u(!1),className:"px-4 py-2 text-gray-500 hover:bg-gray-100 rounded",children:"ยกเลิก"}),p.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"บันทึก"})]})]})]})}),p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm mb-6",children:[p.jsx("h3",{className:"font-bold mb-4 text-gray-700",children:"เพิ่มสมาชิกใหม่"}),p.jsxs("form",{onSubmit:m,className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end",children:[p.jsxs("div",{className:"w-full",children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"ชื่อ-สกุล"}),p.jsx("input",{required:!0,value:i.name,onChange:x=>o({...i,name:x.target.value}),className:"w-full border rounded-lg px-3 py-2 text-sm",placeholder:"ระบุชื่อ..."})]}),p.jsxs("div",{className:"w-full",children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"อีเมล (Login)"}),p.jsx("input",{required:!0,type:"email",value:i.email,onChange:x=>o({...i,email:x.target.value}),className:"w-full border rounded-lg px-3 py-2 text-sm",placeholder:"name@company.com"})]}),p.jsxs("div",{className:"w-full",children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"รหัสผ่าน"}),p.jsx("input",{required:!0,type:"password",value:i.password,onChange:x=>o({...i,password:x.target.value}),className:"w-full border rounded-lg px-3 py-2 text-sm",placeholder:"********"})]}),p.jsxs("div",{className:"w-full",children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"ตำแหน่ง"}),p.jsxs("select",{required:!0,className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:i.role,onChange:x=>o({...i,role:x.target.value}),children:[p.jsx("option",{value:"",children:"เลือกตำแหน่ง..."}),s.map(x=>p.jsx("option",{value:x.name,children:x.name},x.id))]})]}),p.jsxs("div",{className:"w-full",children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"แผนก"}),p.jsxs("select",{className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:i.dept,onChange:x=>o({...i,dept:x.target.value}),children:[p.jsx("option",{value:"Inbound",children:"Inbound"}),p.jsx("option",{value:"Outbound",children:"Outbound"}),p.jsx("option",{value:"Internal",children:"Internal"}),p.jsx("option",{value:"Manager",children:"Manager"})]})]}),p.jsx("div",{className:"w-full md:col-span-1 lg:col-span-1",children:p.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full font-medium text-sm shadow-sm transition h-[38px] mt-6",children:"เพิ่มสมาชิก"})})]})]}),p.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100",children:p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[p.jsx("thead",{className:"bg-gray-50",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"สมาชิก"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"อีเมล"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"ตำแหน่ง"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"แผนก"}),p.jsx("th",{className:"px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider",children:"จัดการ"})]})}),p.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((x,P)=>p.jsxs("tr",{className:"hover:bg-gray-50 transition cursor-pointer",onClick:()=>g(x),children:[p.jsxs("td",{className:"px-6 py-4 whitespace-nowrap flex items-center gap-3",children:[p.jsx("img",{className:"h-9 w-9 rounded-full object-cover border",src:x.avatar||`https://i.pravatar.cc/150?u=${x.id}`,alt:""}),p.jsx("div",{className:"text-sm font-medium text-gray-900",children:x.name})]}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:x.email}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:x.role}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:p.jsx("span",{className:`px-2.5 py-0.5 inline-flex text-xs leading-4 font-semibold rounded-full ${x.dept==="Inbound"?"bg-green-100 text-green-800":x.dept==="Outbound"?"bg-orange-100 text-orange-800":"bg-purple-100 text-purple-800"}`,children:x.dept})}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:p.jsx("button",{onClick:O=>{O.stopPropagation(),r(x.id)},className:"text-gray-400 hover:text-red-600 transition p-1 rounded-full hover:bg-red-50",children:p.jsx(Zf,{size:18})})})]},x.docId||x.id||P))})]})})})]})}function KN({members:t,tasks:e,onTaskToggle:n}){const r=t||[],s=e||[],i=r.filter(g=>(g==null?void 0:g.dept)==="Inbound"),o=s.filter(g=>(g==null?void 0:g.area)==="Inbound"),l=r.filter(g=>(g==null?void 0:g.dept)==="Outbound"),u=s.filter(g=>(g==null?void 0:g.area)==="Outbound"),d=r.filter(g=>(g==null?void 0:g.dept)==="Internal"),f=s.filter(g=>(g==null?void 0:g.area)==="Internal"),m=(g,_,x,P,O)=>p.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full",children:[p.jsxs("div",{className:`p-4 border-b border-gray-100 ${P} bg-opacity-10 flex justify-between items-center`,children:[p.jsxs("div",{className:"flex items-center gap-2",children:[O,p.jsx("h3",{className:"font-bold text-lg text-gray-800",children:g})]}),p.jsxs("span",{className:"text-xs font-bold text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm",children:[_.length," คน | ",x.length," งาน"]})]}),p.jsxs("div",{className:"p-4 flex-1 space-y-4",children:[p.jsxs("div",{children:[p.jsx("h4",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2",children:"ทีมงาน"}),p.jsx("div",{className:"flex flex-wrap gap-2",children:_.length>0?_.map((T,E)=>p.jsx("span",{className:"text-xs px-2.5 py-1 bg-gray-50 text-gray-700 rounded border",children:T==null?void 0:T.name},(T==null?void 0:T.id)||E)):p.jsx("p",{className:"text-xs text-gray-300",children:"- ว่าง -"})})]}),p.jsxs("div",{children:[p.jsx("h4",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2",children:"งาน"}),p.jsx("div",{className:"space-y-2",children:x.length>0?x.map((T,E)=>p.jsxs("div",{className:"flex items-start gap-3 p-2.5 bg-gray-50 rounded-lg border",children:[p.jsx("input",{type:"checkbox",checked:(T==null?void 0:T.completed)||!1,onChange:()=>n&&n(T.id,T==null?void 0:T.completed),className:"mt-0.5 rounded text-blue-600 cursor-pointer"}),p.jsx("p",{className:`text-sm ${T!=null&&T.completed?"line-through text-gray-400":"text-gray-700"}`,children:T==null?void 0:T.name})]},(T==null?void 0:T.id)||E)):p.jsx("p",{className:"text-xs text-center text-gray-300",children:"- ไม่มีงาน -"})})]})]})]});return p.jsxs("div",{className:"space-y-6 animate-fade-in",children:[p.jsx("div",{className:"flex justify-between items-center",children:p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[p.jsx(Ou,{className:"text-blue-600"})," ภาพรวมแผนก"]})}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-start",children:[m("Inbound",i,o,"bg-blue-500",p.jsx(FN,{size:20,className:"text-blue-600"})),m("Outbound",l,u,"bg-green-500",p.jsx(CN,{size:20,className:"text-green-600"})),m("Internal",d,f,"bg-purple-500",p.jsx(BN,{size:20,className:"text-purple-600"}))]})]})}function QN({scoreLogs:t}){return p.jsxs("div",{className:"space-y-6 animate-fade-in",children:[p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[p.jsx(_E,{className:"text-blue-600"})," ประวัติการหัก/เพิ่ม คะแนน (Score Log)"]}),p.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[p.jsx("thead",{className:"bg-gray-50",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"วัน-เวลา"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"ชื่อพนักงาน"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"รายการ"}),p.jsx("th",{className:"px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase",children:"คะแนน"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"ประเภท"})]})}),p.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:"5",className:"px-6 py-8 text-center text-gray-400",children:"ยังไม่มีประวัติคะแนนในเดือนนี้"})}):t.sort((e,n)=>new Date(n.date)-new Date(e.date)).map((e,n)=>p.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.date}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700",children:e.memberName}),p.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:e.topic}),p.jsx("td",{className:"px-6 py-4 text-center",children:p.jsxs("span",{className:`font-bold ${e.score<0?"text-red-500":"text-green-500"}`,children:[e.score>0?"+":"",e.score]})}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-xs",children:p.jsx("span",{className:`px-2 py-1 rounded border ${e.type==="Auto"?"bg-gray-100 text-gray-500 border-gray-200":"bg-blue-50 text-blue-600 border-blue-100"}`,children:e.type})})]},n))})]})})})]})}function YN({logs:t,onAddLog:e,onResolveLog:n,onDeleteLog:r,currentDate:s,askAiSolution:i,showToast:o,userEmail:l,currentUserRole:u,aiLoading:d}){const[f,m]=q.useState(""),[g,_]=q.useState(""),[x,P]=q.useState("Inbound"),[O,T]=q.useState("pending"),[E,k]=q.useState(!1),[D,U]=q.useState(""),[j,I]=q.useState(null),[v,w]=q.useState(!1),S=F=>{F.preventDefault(),e({topic:f,detail:g,dept:x,date:s,status:"pending",createdBy:l||"Unknown"}),m(""),_(""),o("บันทึกปัญหาเรียบร้อยแล้ว")},C=F=>{I(F),k(!0)},R=async()=>{if(j)try{w(!0),await n(j,D),k(!1),U(""),I(null),o("ปิดงานเรียบร้อยแล้ว")}catch(F){console.error(F),o("เกิดข้อผิดพลาดในการปิดงาน")}finally{w(!1)}},A=async F=>{if(window.confirm(`⚠️ คุณต้องการลบรายการปัญหานี้ใช่หรือไม่?
(การกระทำนี้ไม่สามารถย้อนกลับได้)`))try{await r(F),o("ลบรายการเรียบร้อยแล้ว")}catch(pe){console.error(pe),o("เกิดข้อผิดพลาดในการลบ")}},Ue=t.filter(F=>F.status===O);return p.jsxs("div",{className:"space-y-6 animate-fade-in",children:[p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[p.jsx(Co,{className:"text-red-500"})," Problem Log"]}),E&&p.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm",children:p.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in",children:[p.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[p.jsx(vE,{className:"text-green-600"})," บันทึกการปิดงาน"]}),p.jsxs("div",{className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"หมายเหตุ / สรุปการแก้ไข"}),p.jsx("textarea",{className:"w-full border rounded px-3 py-2 h-24",value:D,onChange:F=>U(F.target.value),placeholder:"ระบุรายละเอียดการแก้ไข..."})]}),p.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[p.jsx("button",{onClick:()=>k(!1),disabled:v,className:"px-4 py-2 text-gray-500 hover:bg-gray-100 rounded",children:"ยกเลิก"}),p.jsxs("button",{onClick:R,disabled:v,className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2",children:[v&&p.jsx(TE,{size:16,className:"animate-spin"}),"ยืนยันปิดงาน"]})]})]})]})}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm h-fit",children:[p.jsx("h3",{className:"font-bold mb-4 text-gray-800",children:"แจ้งปัญหาใหม่"}),p.jsxs("form",{onSubmit:S,className:"space-y-4",children:[p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"หัวข้อ"}),p.jsx("input",{required:!0,type:"text",className:"w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition",value:f,onChange:F=>m(F.target.value)})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"รายละเอียด"}),p.jsx("textarea",{required:!0,className:"w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition",rows:"3",value:g,onChange:F=>_(F.target.value)})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"แผนก"}),p.jsxs("select",{className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:x,onChange:F=>P(F.target.value),children:[p.jsx("option",{value:"Inbound",children:"Inbound"}),p.jsx("option",{value:"Outbound",children:"Outbound"}),p.jsx("option",{value:"Internal",children:"Internal"})]})]}),p.jsx("button",{type:"submit",className:"w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition font-medium text-sm shadow-md shadow-red-200",children:"บันทึกปัญหา"})]})]}),p.jsxs("div",{className:"lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col max-h-[600px]",children:[p.jsxs("div",{className:"flex border-b",children:[p.jsxs("button",{onClick:()=>T("pending"),className:`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${O==="pending"?"border-red-500 text-red-600 bg-red-50":"border-transparent text-gray-500 hover:bg-gray-50"}`,children:["รอดำเนินการ (",t.filter(F=>F.status==="pending").length,")"]}),p.jsxs("button",{onClick:()=>T("solved"),className:`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${O==="solved"?"border-green-500 text-green-600 bg-green-50":"border-transparent text-gray-500 hover:bg-gray-50"}`,children:["ปิดงานแล้ว (",t.filter(F=>F.status==="solved").length,")"]})]}),p.jsxs("div",{className:"divide-y overflow-y-auto flex-1",children:[Ue.length===0?p.jsx("div",{className:"p-10 text-center text-gray-400",children:"ไม่มีรายการในสถานะนี้"}):null,[...Ue].reverse().map((F,pe)=>p.jsx("div",{className:"p-4 hover:bg-gray-50 transition relative group",children:p.jsxs("div",{className:"flex justify-between items-start gap-4",children:[p.jsxs("div",{className:"flex-1 min-w-0",children:[p.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[p.jsx("h4",{className:"font-bold text-gray-800 text-sm",children:F.topic}),p.jsxs("span",{className:"text-[10px] text-gray-400",children:["โดย: ",F.createdBy]}),F.status==="pending"&&p.jsxs("button",{onClick:()=>i(F),disabled:d,className:"flex items-center gap-1 px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded border border-indigo-100 hover:bg-indigo-100 transition whitespace-nowrap",children:[p.jsx(zN,{size:10})," ",d?"Thinking...":"Ask AI"]})]}),p.jsx("p",{className:"text-sm text-gray-600 break-words",children:F.detail}),F.status==="solved"&&p.jsxs("div",{className:"mt-2 text-xs bg-green-50 p-2 rounded border border-green-100 text-green-800",children:[p.jsx("strong",{children:"แก้ไขแล้วโดย:"})," ",F.solvedBy," ",p.jsx("br",{}),p.jsx("strong",{children:"หมายเหตุ:"})," ",F.resolution]}),p.jsxs("div",{className:"flex gap-2 mt-2",children:[p.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider bg-gray-100 px-2 py-0.5 rounded text-gray-600",children:F.dept}),p.jsx("span",{className:"text-[10px] text-gray-400 px-2 py-0.5",children:F.date})]})]}),p.jsxs("div",{className:"flex flex-col items-end gap-2",children:[F.status==="pending"?["dgm","dm"].includes(u)&&p.jsx("button",{onClick:()=>C(F.docId||F.id),className:"px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded hover:bg-yellow-200 transition font-bold",children:"ปิดงาน"}):p.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap bg-green-100 text-green-700",children:"SOLVED"}),p.jsx("button",{onClick:()=>A(F.docId||F.id),className:"p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition",title:"ลบรายการ",children:p.jsx(Zf,{size:14})})]})]})},F.docId||F.id||pe))]})]})]})]})}function XN({roles:t,onSaveRole:e,currentRole:n}){const r=[...t].sort((o,l)=>o.name.localeCompare(l.name,"th")),s=(o,l)=>{let u=[];o.access.includes("all")?u=ll.map(f=>f.id).filter(f=>f!==l):o.access.includes(l)?u=o.access.filter(d=>d!==l):u=[...o.access,l],e({...o,access:u})},i=(o,l)=>{const u=o.readOnly||[],d=u.includes(l)?u.filter(f=>f!==l):[...u,l];e({...o,readOnly:d})};return p.jsxs("div",{className:"space-y-6 animate-fade-in",children:[p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[p.jsx(IE,{className:"text-blue-600"})," กำหนดสิทธิ์การเข้าถึง (Assign Menu)"]}),p.jsxs("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100",children:[p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"min-w-full divide-y divide-gray-200 text-sm",children:[p.jsx("thead",{className:"bg-gray-50",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-4 py-3 text-left font-bold text-gray-500 uppercase min-w-[200px]",children:"ตำแหน่ง"}),ll.map(o=>p.jsx("th",{className:"px-2 py-3 text-center font-bold text-gray-500 text-xs w-24",children:p.jsxs("div",{className:"flex flex-col items-center gap-1",children:[p.jsx(o.icon,{size:16}),p.jsx("span",{children:o.label})]})},o.id))]})}),p.jsx("tbody",{className:"divide-y divide-gray-200",children:r.map((o,l)=>p.jsxs("tr",{className:"hover:bg-gray-50",children:[p.jsx("td",{className:"px-4 py-3 font-medium text-gray-900",children:o.name}),ll.map(u=>{var m,g,_;const d=((m=o.access)==null?void 0:m.includes("all"))||((g=o.access)==null?void 0:g.includes(u.id)),f=(_=o.readOnly)==null?void 0:_.includes(u.id);return p.jsx("td",{className:"px-2 py-3 text-center",children:p.jsxs("div",{className:"flex flex-col items-center gap-2",children:[p.jsx("label",{className:"flex items-center space-x-2 cursor-pointer",children:p.jsx("input",{type:"checkbox",className:"form-checkbox h-4 w-4 text-blue-600 rounded",checked:!!d,onChange:()=>s(o,u.id),disabled:o.id==="dgm"&&u.id==="assign_menu"})}),d&&p.jsxs("button",{onClick:()=>i(o,u.id),className:`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 transition-colors ${f?"bg-yellow-100 text-yellow-700 border-yellow-200":"bg-white text-gray-500 border-gray-200 hover:bg-gray-50"}`,title:f?"View Only":"Full Access",children:[f?p.jsx(ON,{size:10}):p.jsx(Jf,{size:10}),f?"View":"Edit"]})]})},u.id)})]},o.docId||o.id||l))})]})}),p.jsxs("div",{className:"p-4 bg-gray-50 text-xs text-gray-500 border-t",children:["* ",p.jsx("strong",{children:"View Only:"})," สามารถดูข้อมูลได้แต่ไม่สามารถแก้ไข/ลบ/เพิ่มข้อมูลได้ ",p.jsx("br",{}),"* ",p.jsx("strong",{children:"Edit:"})," สามารถจัดการข้อมูลได้เต็มรูปแบบ"]})]})]})}function JN({actionLogs:t}){return p.jsxs("div",{className:"space-y-6 animate-fade-in",children:[p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[p.jsx(EE,{className:"text-blue-600"})," ประวัติการทำงาน (Action Log)"]}),p.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:p.jsx("div",{className:"overflow-x-auto",children:p.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[p.jsx("thead",{className:"bg-gray-50",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"วัน-เวลา"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"ผู้ดำเนินการ"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"รายละเอียด"})]})}),p.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.length===0?p.jsx("tr",{children:p.jsx("td",{colSpan:"3",className:"px-6 py-8 text-center text-gray-400",children:"ยังไม่มีประวัติการทำงาน"})}):[...t].sort((e,n)=>e.createdAt&&n.createdAt?n.createdAt.seconds-e.createdAt.seconds:n.timestamp>e.timestamp?1:-1).map(e=>p.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.timestamp}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700",children:e.user}),p.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-600",children:e.action})]},e.docId||e.id))})]})})})]})}function ZN({rules:t,onSaveRule:e,onDeleteRule:n,isReadOnly:r}){const[s,i]=q.useState(!1),[o,l]=q.useState({topic:"",score:0,type:"deduct",detail:""}),u=m=>{l(m),i(!0)},d=()=>{l({topic:"",score:0,type:"deduct",detail:""}),i(!0)},f=m=>{m.preventDefault(),e({...o,id:o.id||Date.now().toString()}),i(!1),l({topic:"",score:0,type:"deduct",detail:""})};return p.jsxs("div",{className:"space-y-6 animate-fade-in",children:[p.jsxs("div",{className:"flex justify-between items-center",children:[p.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[p.jsx(wE,{className:"text-blue-600"})," ระเบียบการหัก/เพิ่ม คะแนน"]}),!r&&p.jsxs("button",{onClick:d,className:"flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:[p.jsx(UN,{size:18})," เพิ่มกฎใหม่"]})]}),s&&!r&&p.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6",children:[p.jsx("h3",{className:"font-bold mb-4",children:o.id?"แก้ไขกฎระเบียบ":"เพิ่มกฎระเบียบใหม่"}),p.jsxs("form",{onSubmit:f,className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[p.jsxs("div",{className:"md:col-span-2",children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"หัวข้อ"}),p.jsx("input",{required:!0,className:"w-full border rounded px-3 py-2",value:o.topic||"",onChange:m=>l({...o,topic:m.target.value})})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"ประเภท"}),p.jsxs("select",{className:"w-full border rounded px-3 py-2",value:o.type,onChange:m=>l({...o,type:m.target.value}),children:[p.jsx("option",{value:"deduct",children:"หักคะแนน (-)"}),p.jsx("option",{value:"add",children:"เพิ่มคะแนน (+)"})]})]}),p.jsxs("div",{children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"คะแนน"}),p.jsx("input",{type:"number",required:!0,className:"w-full border rounded px-3 py-2",value:Math.abs(o.score)||0,onChange:m=>l({...o,score:o.type==="deduct"?-Math.abs(m.target.value):Math.abs(m.target.value)})})]}),p.jsxs("div",{className:"md:col-span-2",children:[p.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"รายละเอียด"}),p.jsx("input",{className:"w-full border rounded px-3 py-2",value:o.detail||"",onChange:m=>l({...o,detail:m.target.value})})]}),p.jsxs("div",{className:"md:col-span-2 flex justify-end gap-2",children:[p.jsx("button",{type:"button",onClick:()=>i(!1),className:"px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",children:"ยกเลิก"}),p.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"บันทึก"})]})]})]}),p.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:p.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[p.jsx("thead",{className:"bg-gray-50",children:p.jsxs("tr",{children:[p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"หัวข้อ"}),p.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"รายละเอียด"}),p.jsx("th",{className:"px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase",children:"คะแนน"}),!r&&p.jsx("th",{className:"px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase",children:"จัดการ"})]})}),p.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(m=>p.jsxs("tr",{className:"hover:bg-gray-50",children:[p.jsx("td",{className:"px-6 py-4 font-medium text-gray-800",children:m.topic}),p.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:m.detail}),p.jsx("td",{className:"px-6 py-4 text-center",children:p.jsxs("span",{className:`px-2 py-1 rounded text-xs font-bold ${m.score>0?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:[m.score>0?"+":"",m.score]})}),!r&&p.jsxs("td",{className:"px-6 py-4 text-right flex justify-end gap-2",children:[p.jsx("button",{onClick:()=>u(m),className:"text-blue-500 hover:bg-blue-50 p-1 rounded",children:p.jsx(Jf,{size:16})}),p.jsx("button",{onClick:()=>n(m.id),className:"text-red-500 hover:bg-red-50 p-1 rounded",children:p.jsx(Zf,{size:16})})]})]},m.docId||m.id))})]})})]})}function eP({onLogin:t,error:e,loading:n}){const[r,s]=q.useState(""),[i,o]=q.useState(""),l=u=>{u.preventDefault(),t(r,i)};return p.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center p-4",children:p.jsxs("div",{className:"bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md",children:[p.jsxs("div",{className:"flex flex-col items-center mb-8",children:[p.jsx("div",{className:"w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4",children:p.jsx($N,{size:32,className:"text-white"})}),p.jsxs("h1",{className:"text-3xl font-bold text-white tracking-tight",children:["Transport",p.jsx("span",{className:"text-blue-400",children:"Ops"})]}),p.jsx("p",{className:"text-blue-200 text-sm mt-1",children:"ระบบบริหารจัดการงานขนส่ง"})]}),p.jsxs("form",{onSubmit:l,className:"space-y-6",children:[p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-sm font-medium text-blue-100 ml-1",children:"อีเมล"}),p.jsxs("div",{className:"relative group",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors",children:p.jsx(LN,{size:18})}),p.jsx("input",{type:"email",required:!0,className:"w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all",placeholder:"name@company.com",value:r,onChange:u=>s(u.target.value)})]})]}),p.jsxs("div",{className:"space-y-2",children:[p.jsx("label",{className:"text-sm font-medium text-blue-100 ml-1",children:"รหัสผ่าน"}),p.jsxs("div",{className:"relative group",children:[p.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors",children:p.jsx(VN,{size:18})}),p.jsx("input",{type:"password",required:!0,className:"w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all",placeholder:"••••••••",value:i,onChange:u=>o(u.target.value)})]})]}),e&&p.jsxs("div",{className:"bg-red-500/10 border border-red-500/50 text-red-200 text-sm rounded-lg p-3 flex items-center gap-2 animate-pulse",children:[p.jsx(Co,{size:16}),e]}),p.jsx("button",{type:"submit",disabled:n,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:n?p.jsx(TE,{size:20,className:"animate-spin"}):"เข้าสู่ระบบ"})]}),p.jsx("div",{className:"mt-8 text-center text-xs text-blue-300/60",children:"© 2026 Transport Operations System v3.4"})]})})}let tP={data:""},nP=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||tP},rP=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,sP=/\/\*[^]*?\*\/|  +/g,ky=/\n+/g,Yn=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Yn(o,i):i+"{"+Yn(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Yn(o,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Yn.p?Yn.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},fn={},xE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+xE(t[n]);return e}return t},iP=(t,e,n,r,s)=>{let i=xE(t),o=fn[i]||(fn[i]=(u=>{let d=0,f=11;for(;d<u.length;)f=101*f+u.charCodeAt(d++)>>>0;return"go"+f})(i));if(!fn[o]){let u=i!==t?t:(d=>{let f,m,g=[{}];for(;f=rP.exec(d.replace(sP,""));)f[4]?g.shift():f[3]?(m=f[3].replace(ky," ").trim(),g.unshift(g[0][m]=g[0][m]||{})):g[0][f[1]]=f[2].replace(ky," ").trim();return g[0]})(t);fn[o]=Yn(s?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&fn.g?fn.g:null;return n&&(fn.g=fn[o]),((u,d,f,m)=>{m?d.data=d.data.replace(m,u):d.data.indexOf(u)===-1&&(d.data=f?u+d.data:d.data+u)})(fn[o],e,r,l),o},oP=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":Yn(l,""):l===!1?"":l}return r+s+(o??"")},"");function Vu(t){let e=this||{},n=t.call?t(e.p):t;return iP(n.unshift?n.raw?oP(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,nP(e.target),e.g,e.o,e.k)}let SE,lh,uh;Vu.bind({g:1});let bn=Vu.bind({k:1});function aP(t,e,n,r){Yn.p=e,SE=t,lh=n,uh=r}function xr(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let l=Object.assign({},i),u=l.className||s.className;n.p=Object.assign({theme:lh&&lh()},l),n.o=/ *go\d+/.test(u),l.className=Vu.apply(n,r)+(u?" "+u:"");let d=t;return t[0]&&(d=l.as||t,delete l.as),uh&&d[0]&&uh(l),SE(d,l)}return s}}var lP=t=>typeof t=="function",Yl=(t,e)=>lP(t)?t(e):t,uP=(()=>{let t=0;return()=>(++t).toString()})(),AE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),cP=20,ep="default",kE=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return kE(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},ul=[],CE={toasts:[],pausedAt:void 0,settings:{toastLimit:cP}},nn={},RE=(t,e=ep)=>{nn[e]=kE(nn[e]||CE,t),ul.forEach(([n,r])=>{n===e&&r(nn[e])})},NE=t=>Object.keys(nn).forEach(e=>RE(t,e)),dP=t=>Object.keys(nn).find(e=>nn[e].toasts.some(n=>n.id===t)),Mu=(t=ep)=>e=>{RE(e,t)},hP={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},fP=(t={},e=ep)=>{let[n,r]=q.useState(nn[e]||CE),s=q.useRef(nn[e]);q.useEffect(()=>(s.current!==nn[e]&&r(nn[e]),ul.push([e,r]),()=>{let o=ul.findIndex(([l])=>l===e);o>-1&&ul.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var l,u,d;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||hP[o.type],style:{...t.style,...(d=t[o.type])==null?void 0:d.style,...o.style}}});return{...n,toasts:i}},pP=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||uP()}),Xo=t=>(e,n)=>{let r=pP(e,t,n);return Mu(r.toasterId||dP(r.id))({type:2,toast:r}),r.id},je=(t,e)=>Xo("blank")(t,e);je.error=Xo("error");je.success=Xo("success");je.loading=Xo("loading");je.custom=Xo("custom");je.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Mu(e)(n):NE(n)};je.dismissAll=t=>je.dismiss(void 0,t);je.remove=(t,e)=>{let n={type:4,toastId:t};e?Mu(e)(n):NE(n)};je.removeAll=t=>je.remove(void 0,t);je.promise=(t,e,n)=>{let r=je.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?Yl(e.success,s):void 0;return i?je.success(i,{id:r,...n,...n==null?void 0:n.success}):je.dismiss(r),s}).catch(s=>{let i=e.error?Yl(e.error,s):void 0;i?je.error(i,{id:r,...n,...n==null?void 0:n.error}):je.dismiss(r)}),t};var mP=1e3,gP=(t,e="default")=>{let{toasts:n,pausedAt:r}=fP(t,e),s=q.useRef(new Map).current,i=q.useCallback((m,g=mP)=>{if(s.has(m))return;let _=setTimeout(()=>{s.delete(m),o({type:4,toastId:m})},g);s.set(m,_)},[]);q.useEffect(()=>{if(r)return;let m=Date.now(),g=n.map(_=>{if(_.duration===1/0)return;let x=(_.duration||0)+_.pauseDuration-(m-_.createdAt);if(x<0){_.visible&&je.dismiss(_.id);return}return setTimeout(()=>je.dismiss(_.id,e),x)});return()=>{g.forEach(_=>_&&clearTimeout(_))}},[n,r,e]);let o=q.useCallback(Mu(e),[e]),l=q.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=q.useCallback((m,g)=>{o({type:1,toast:{id:m,height:g}})},[o]),d=q.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),f=q.useCallback((m,g)=>{let{reverseOrder:_=!1,gutter:x=8,defaultPosition:P}=g||{},O=n.filter(k=>(k.position||P)===(m.position||P)&&k.height),T=O.findIndex(k=>k.id===m.id),E=O.filter((k,D)=>D<T&&k.visible).length;return O.filter(k=>k.visible).slice(..._?[E+1]:[0,E]).reduce((k,D)=>k+(D.height||0)+x,0)},[n]);return q.useEffect(()=>{n.forEach(m=>{if(m.dismissed)i(m.id,m.removeDelay);else{let g=s.get(m.id);g&&(clearTimeout(g),s.delete(m.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:d,calculateOffset:f}}},yP=bn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,vP=bn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,_P=bn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,wP=xr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${yP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${vP} 0.15s ease-out forwards;
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
    animation: ${_P} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,EP=bn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,TP=xr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${EP} 1s linear infinite;
`,IP=bn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,xP=bn`
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
}`,SP=xr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${IP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${xP} 0.2s ease-out forwards;
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
`,AP=xr("div")`
  position: absolute;
`,kP=xr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,CP=bn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,RP=xr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${CP} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,NP=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?q.createElement(RP,null,e):e:n==="blank"?null:q.createElement(kP,null,q.createElement(TP,{...r}),n!=="loading"&&q.createElement(AP,null,n==="error"?q.createElement(wP,{...r}):q.createElement(SP,{...r})))},PP=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,bP=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,DP="0%{opacity:0;} 100%{opacity:1;}",OP="0%{opacity:1;} 100%{opacity:0;}",VP=xr("div")`
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
`,MP=xr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,LP=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=AE()?[DP,OP]:[PP(n),bP(n)];return{animation:e?`${bn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${bn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},jP=q.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?LP(t.position||e||"top-center",t.visible):{opacity:0},i=q.createElement(NP,{toast:t}),o=q.createElement(MP,{...t.ariaProps},Yl(t.message,t));return q.createElement(VP,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):q.createElement(q.Fragment,null,i,o))});aP(q.createElement);var FP=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=q.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return q.createElement("div",{ref:i,className:e,style:n},s)},UP=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:AE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},zP=Vu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Ua=16,$P=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:d}=gP(n,i);return q.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Ua,left:Ua,right:Ua,bottom:Ua,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},u.map(f=>{let m=f.position||e,g=d.calculateOffset(f,{reverseOrder:t,gutter:r,defaultPosition:e}),_=UP(m,g);return q.createElement(FP,{id:f.id,key:f.id,onHeightUpdate:d.updateHeight,className:f.visible?zP:"",style:_},f.type==="custom"?Yl(f.message,f):s?s(f):q.createElement(jP,{toast:f,position:m}))}))},Cy;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(Cy||(Cy={}));/**
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
 */var Ry;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(Ry||(Ry={}));var Ny;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Ny||(Ny={}));/**
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
 */const Py=["user","model","function","system"];var by;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(by||(by={}));var Dy;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(Dy||(Dy={}));var Oy;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(Oy||(Oy={}));var Vy;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(Vy||(Vy={}));var eo;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(eo||(eo={}));var My;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(My||(My={}));var Ly;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(Ly||(Ly={}));var jy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(jy||(jy={}));/**
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
 */class lt extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class cs extends lt{constructor(e,n){super(e),this.response=n}}class PE extends lt{constructor(e,n,r,s){super(e),this.status=n,this.statusText=r,this.errorDetails=s}}class hr extends lt{}class bE extends lt{}/**
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
 */const BP="https://generativelanguage.googleapis.com",HP="v1beta",qP="0.24.1",WP="genai-js";var es;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(es||(es={}));class GP{constructor(e,n,r,s,i){this.model=e,this.task=n,this.apiKey=r,this.stream=s,this.requestOptions=i}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||HP;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||BP}/${r}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function KP(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${WP}/${qP}`),e.join(" ")}async function QP(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",KP(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(s){throw new hr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${s.message}`)}for(const[s,i]of r.entries()){if(s==="x-goog-api-key")throw new hr(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new hr(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function YP(t,e,n,r,s,i){const o=new GP(t,e,n,r,i);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},e2(i)),{method:"POST",headers:await QP(o),body:s})}}async function Jo(t,e,n,r,s,i={},o=fetch){const{url:l,fetchOptions:u}=await YP(t,e,n,r,s,i);return XP(l,u,o)}async function XP(t,e,n=fetch){let r;try{r=await n(t,e)}catch(s){JP(s,t)}return r.ok||await ZP(r,t),r}function JP(t,e){let n=t;throw n.name==="AbortError"?(n=new bE(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof PE||t instanceof hr||(n=new lt(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function ZP(t,e){let n="",r;try{const s=await t.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,r=s.error.details)}catch{}throw new PE(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function e2(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
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
 */function tp(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),cl(t.candidates[0]))throw new cs(`${Bn(t)}`,t);return t2(t)}else if(t.promptFeedback)throw new cs(`Text not available. ${Bn(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),cl(t.candidates[0]))throw new cs(`${Bn(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Fy(t)[0]}else if(t.promptFeedback)throw new cs(`Function call not available. ${Bn(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),cl(t.candidates[0]))throw new cs(`${Bn(t)}`,t);return Fy(t)}else if(t.promptFeedback)throw new cs(`Function call not available. ${Bn(t)}`,t)},t}function t2(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.text&&i.push(o.text),o.executableCode&&i.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&i.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function Fy(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.functionCall&&i.push(o.functionCall);if(i.length>0)return i}const n2=[eo.RECITATION,eo.SAFETY,eo.LANGUAGE];function cl(t){return!!t.finishReason&&n2.includes(t.finishReason)}function Bn(t){var e,n,r;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const i=t.candidates[0];cl(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function Ro(t){return this instanceof Ro?(this.v=t,this):new Ro(t)}function r2(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),s,i=[];return s={},o("next"),o("throw"),o("return"),s[Symbol.asyncIterator]=function(){return this},s;function o(g){r[g]&&(s[g]=function(_){return new Promise(function(x,P){i.push([g,_,x,P])>1||l(g,_)})})}function l(g,_){try{u(r[g](_))}catch(x){m(i[0][3],x)}}function u(g){g.value instanceof Ro?Promise.resolve(g.value.v).then(d,f):m(i[0][2],g)}function d(g){l("next",g)}function f(g){l("throw",g)}function m(g,_){g(_),i.shift(),i.length&&l(i[0][0],i[0][1])}}/**
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
 */const Uy=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function s2(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=a2(e),[r,s]=n.tee();return{stream:o2(r),response:i2(s)}}async function i2(t){const e=[],n=t.getReader();for(;;){const{done:r,value:s}=await n.read();if(r)return tp(l2(e));e.push(s)}}function o2(t){return r2(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:s}=yield Ro(n.read());if(s)break;yield yield Ro(tp(r))}})}function a2(t){const e=t.getReader();return new ReadableStream({start(r){let s="";return i();function i(){return e.read().then(({value:o,done:l})=>{if(l){if(s.trim()){r.error(new lt("Failed to parse stream"));return}r.close();return}s+=o;let u=s.match(Uy),d;for(;u;){try{d=JSON.parse(u[1])}catch{r.error(new lt(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(d),s=s.substring(u[0].length),u=s.match(Uy)}return i()}).catch(o=>{let l=o;throw l.stack=o.stack,l.name==="AbortError"?l=new bE("Request aborted when reading from the stream"):l=new lt("Error reading from the stream"),l})}}})}function l2(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates){let s=0;for(const i of r.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const l of i.content.parts)l.text&&(o.text=l.text),l.functionCall&&(o.functionCall=l.functionCall),l.executableCode&&(o.executableCode=l.executableCode),l.codeExecutionResult&&(o.codeExecutionResult=l.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}s++}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
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
 */async function DE(t,e,n,r){const s=await Jo(e,es.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return s2(s)}async function OE(t,e,n,r){const i=await(await Jo(e,es.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:tp(i)}}/**
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
 */function VE(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function No(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return u2(e)}function u2(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),r=!0);if(r&&s)throw new lt("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!s)throw new lt("No content is provided for sending chat message.");return r?e:n}function c2(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new hr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(s)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const i=No(t);r.contents=[i]}return{generateContentRequest:r}}function zy(t){let e;return t.contents?e=t:e={contents:[No(t)]},t.systemInstruction&&(e.systemInstruction=VE(t.systemInstruction)),e}function d2(t){return typeof t=="string"||Array.isArray(t)?{content:No(t)}:t}/**
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
 */const $y=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],h2={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function f2(t){let e=!1;for(const n of t){const{role:r,parts:s}=n;if(!e&&r!=="user")throw new lt(`First content should be with role 'user', got ${r}`);if(!Py.includes(r))throw new lt(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(Py)}`);if(!Array.isArray(s))throw new lt("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new lt("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of s)for(const u of $y)u in l&&(i[u]+=1);const o=h2[r];for(const l of $y)if(!o.includes(l)&&i[l]>0)throw new lt(`Content with role '${r}' can't contain '${l}' part`);e=!0}}function By(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const r of n.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}/**
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
 */const Hy="SILENT_ERROR";class p2{constructor(e,n,r,s={}){this.model=n,this.params=r,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(f2(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,s,i,o,l,u;await this._sendPromise;const d=No(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,d]},m=Object.assign(Object.assign({},this._requestOptions),n);let g;return this._sendPromise=this._sendPromise.then(()=>OE(this._apiKey,this.model,f,m)).then(_=>{var x;if(By(_.response)){this._history.push(d);const P=Object.assign({parts:[],role:"model"},(x=_.response.candidates)===null||x===void 0?void 0:x[0].content);this._history.push(P)}else{const P=Bn(_.response);P&&console.warn(`sendMessage() was unsuccessful. ${P}. Inspect response object for details.`)}g=_}).catch(_=>{throw this._sendPromise=Promise.resolve(),_}),await this._sendPromise,g}async sendMessageStream(e,n={}){var r,s,i,o,l,u;await this._sendPromise;const d=No(e),f={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,d]},m=Object.assign(Object.assign({},this._requestOptions),n),g=DE(this._apiKey,this.model,f,m);return this._sendPromise=this._sendPromise.then(()=>g).catch(_=>{throw new Error(Hy)}).then(_=>_.response).then(_=>{if(By(_)){this._history.push(d);const x=Object.assign({},_.candidates[0].content);x.role||(x.role="model"),this._history.push(x)}else{const x=Bn(_);x&&console.warn(`sendMessageStream() was unsuccessful. ${x}. Inspect response object for details.`)}}).catch(_=>{_.message!==Hy&&console.error(_)}),g}}/**
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
 */async function m2(t,e,n,r){return(await Jo(e,es.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
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
 */async function g2(t,e,n,r){return(await Jo(e,es.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function y2(t,e,n,r){const s=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await Jo(e,es.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),r)).json()}/**
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
 */class qy{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=VE(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const s=zy(e),i=Object.assign(Object.assign({},this._requestOptions),n);return OE(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}async generateContentStream(e,n={}){var r;const s=zy(e),i=Object.assign(Object.assign({},this._requestOptions),n);return DE(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}startChat(e){var n;return new p2(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=c2(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return m2(this.apiKey,this.model,r,s)}async embedContent(e,n={}){const r=d2(e),s=Object.assign(Object.assign({},this._requestOptions),n);return g2(this.apiKey,this.model,r,s)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return y2(this.apiKey,this.model,e,r)}}/**
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
 */class v2{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new lt("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new qy(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new hr("Cached content must contain a `name` field.");if(!e.model)throw new hr("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const o of s)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===u)continue}throw new hr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new qy(this.apiKey,i,r)}}let _2=null;try{_2=new v2("AIzaSyDFGlm4ixlJ34vg9XT_otqIeKgZT5bmBu8")}catch{}function w2(){var ge,vt;const[t,e]=q.useState(null),[n,r]=q.useState(null),[s,i]=q.useState("dashboard"),[o,l]=q.useState(!0),[u,d]=q.useState(!1),f=IN(t||n)||{},{members:m,tasks:g,logs:_,actionLogs:x,rules:P,manualScores:O,roles:T,handleTaskToggle:E,handleUpdateTaskStatus:k,handleAddTask:D,handleEditTask:U,handleDeleteTask:j,handleAddMember:I,handleEditMember:v,handleDeleteMember:w,handleAddLog:S,handleResolveLog:C,handleDeleteLog:R,handleSaveRule:A,handleDeleteRule:Ue,handleSaveManualScore:F,handleDeleteManualScore:pe,handleSaveRole:Ne}=f;q.useEffect(()=>{const ee=iA(Sy,se=>e(se));return()=>ee()},[]);const $=async()=>{await oA(Sy),r(null)},Q=ee=>je.success(ee),G=ee=>(...se)=>{if(ee)return ee(...se,t||n)},ae=(T==null?void 0:T[(ge=t||n)==null?void 0:ge.email])||"staff",ce=async ee=>{};return!t&&!n?p.jsx(eP,{onLogin:ee=>r(ee)}):p.jsxs("div",{className:"flex h-screen bg-gray-100 font-sans text-gray-900 overflow-hidden",children:[p.jsx($P,{position:"top-right"}),p.jsx("div",{className:`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 lg:static lg:translate-x-0 ${o?"translate-x-0":"-translate-x-full"}`,children:p.jsx(qN,{activeTab:s,setActiveTab:ee=>{i(ee),l(!1)},user:t||n,role:ae,onLogout:$})}),p.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",children:[p.jsxs("div",{className:"lg:hidden bg-white p-4 shadow-sm flex items-center justify-between",children:[p.jsx("span",{className:"font-bold text-lg text-slate-800",children:"TransportOps"}),p.jsx("button",{onClick:()=>l(!o),className:"p-2 text-gray-600",children:p.jsx(jN,{})})]}),p.jsx("div",{className:"flex-1 overflow-auto p-4 lg:p-8",children:p.jsxs("div",{className:"max-w-7xl mx-auto",children:[s==="dashboard"&&p.jsx(WN,{members:m||[],tasks:g||[],logs:_||[]}),s==="team"&&p.jsx(GN,{members:m||[],onAdd:G(I),onEdit:G(v),onDelete:G(w),currentUserRole:ae}),s==="dept"&&p.jsx(KN,{members:m||[],tasks:g||[],onTaskToggle:G(E)}),s==="scores"&&p.jsx(QN,{members:m||[],manualScores:O||[],rules:P||[],tasks:g||[],onAddScore:G(F),onDeleteScore:G(pe),currentUserRole:ae}),s==="problems"&&p.jsx(YN,{logs:_||[],onAddLog:G(S),onResolveLog:G(C),onDeleteLog:G(R),currentDate:new Date().toLocaleDateString("th-TH"),askAiSolution:ce,showToast:Q,userEmail:(vt=t||n)==null?void 0:vt.email,currentUserRole:ae,aiLoading:u}),s==="assign"&&p.jsx(XN,{members:m||[],tasks:g||[],onAddTask:G(D),onEditTask:G(U),onDeleteTask:G(j),onUpdateStatus:G(k),currentUserRole:ae}),s==="action_logs"&&p.jsx(JN,{logs:x||[]}),s==="rules"&&p.jsx(ZN,{rules:P||[],onSave:G(A),onDelete:G(Ue),currentUserRole:ae,roles:T||{},onSaveRole:G(Ne)})]})})]}),o&&p.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",onClick:()=>l(!1)})]})}Bc.createRoot(document.getElementById("root")).render(p.jsx(RT.StrictMode,{children:p.jsx(w2,{})}));
