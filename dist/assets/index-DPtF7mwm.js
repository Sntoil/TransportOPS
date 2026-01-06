(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function fA(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var j0={exports:{}},Bc={},U0={exports:{}},oe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nl=Symbol.for("react.element"),pA=Symbol.for("react.portal"),mA=Symbol.for("react.fragment"),gA=Symbol.for("react.strict_mode"),yA=Symbol.for("react.profiler"),_A=Symbol.for("react.provider"),vA=Symbol.for("react.context"),wA=Symbol.for("react.forward_ref"),EA=Symbol.for("react.suspense"),IA=Symbol.for("react.memo"),TA=Symbol.for("react.lazy"),Ty=Symbol.iterator;function xA(t){return t===null||typeof t!="object"?null:(t=Ty&&t[Ty]||t["@@iterator"],typeof t=="function"?t:null)}var z0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B0=Object.assign,$0={};function uo(t,e,n){this.props=t,this.context=e,this.refs=$0,this.updater=n||z0}uo.prototype.isReactComponent={};uo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};uo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function q0(){}q0.prototype=uo.prototype;function pp(t,e,n){this.props=t,this.context=e,this.refs=$0,this.updater=n||z0}var mp=pp.prototype=new q0;mp.constructor=pp;B0(mp,uo.prototype);mp.isPureReactComponent=!0;var xy=Array.isArray,G0=Object.prototype.hasOwnProperty,gp={current:null},K0={key:!0,ref:!0,__self:!0,__source:!0};function H0(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)G0.call(e,r)&&!K0.hasOwnProperty(r)&&(s[r]=e[r]);var a=arguments.length-2;if(a===1)s.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];s.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)s[r]===void 0&&(s[r]=a[r]);return{$$typeof:nl,type:t,key:i,ref:o,props:s,_owner:gp.current}}function SA(t,e){return{$$typeof:nl,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function yp(t){return typeof t=="object"&&t!==null&&t.$$typeof===nl}function AA(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Sy=/\/+/g;function th(t,e){return typeof t=="object"&&t!==null&&t.key!=null?AA(""+t.key):e.toString(36)}function Iu(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case nl:case pA:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+th(o,0):r,xy(s)?(n="",t!=null&&(n=t.replace(Sy,"$&/")+"/"),Iu(s,e,n,"",function(c){return c})):s!=null&&(yp(s)&&(s=SA(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(Sy,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",xy(t))for(var a=0;a<t.length;a++){i=t[a];var u=r+th(i,a);o+=Iu(i,e,n,u,s)}else if(u=xA(t),typeof u=="function")for(t=u.call(t),a=0;!(i=t.next()).done;)i=i.value,u=r+th(i,a++),o+=Iu(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ql(t,e,n){if(t==null)return t;var r=[],s=0;return Iu(t,r,"","",function(i){return e.call(n,i,s++)}),r}function RA(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var kt={current:null},Tu={transition:null},bA={ReactCurrentDispatcher:kt,ReactCurrentBatchConfig:Tu,ReactCurrentOwner:gp};function W0(){throw Error("act(...) is not supported in production builds of React.")}oe.Children={map:Ql,forEach:function(t,e,n){Ql(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ql(t,function(){e++}),e},toArray:function(t){return Ql(t,function(e){return e})||[]},only:function(t){if(!yp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};oe.Component=uo;oe.Fragment=mA;oe.Profiler=yA;oe.PureComponent=pp;oe.StrictMode=gA;oe.Suspense=EA;oe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bA;oe.act=W0;oe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=B0({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=gp.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)G0.call(e,u)&&!K0.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:nl,type:t.type,key:s,ref:i,props:r,_owner:o}};oe.createContext=function(t){return t={$$typeof:vA,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:_A,_context:t},t.Consumer=t};oe.createElement=H0;oe.createFactory=function(t){var e=H0.bind(null,t);return e.type=t,e};oe.createRef=function(){return{current:null}};oe.forwardRef=function(t){return{$$typeof:wA,render:t}};oe.isValidElement=yp;oe.lazy=function(t){return{$$typeof:TA,_payload:{_status:-1,_result:t},_init:RA}};oe.memo=function(t,e){return{$$typeof:IA,type:t,compare:e===void 0?null:e}};oe.startTransition=function(t){var e=Tu.transition;Tu.transition={};try{t()}finally{Tu.transition=e}};oe.unstable_act=W0;oe.useCallback=function(t,e){return kt.current.useCallback(t,e)};oe.useContext=function(t){return kt.current.useContext(t)};oe.useDebugValue=function(){};oe.useDeferredValue=function(t){return kt.current.useDeferredValue(t)};oe.useEffect=function(t,e){return kt.current.useEffect(t,e)};oe.useId=function(){return kt.current.useId()};oe.useImperativeHandle=function(t,e,n){return kt.current.useImperativeHandle(t,e,n)};oe.useInsertionEffect=function(t,e){return kt.current.useInsertionEffect(t,e)};oe.useLayoutEffect=function(t,e){return kt.current.useLayoutEffect(t,e)};oe.useMemo=function(t,e){return kt.current.useMemo(t,e)};oe.useReducer=function(t,e,n){return kt.current.useReducer(t,e,n)};oe.useRef=function(t){return kt.current.useRef(t)};oe.useState=function(t){return kt.current.useState(t)};oe.useSyncExternalStore=function(t,e,n){return kt.current.useSyncExternalStore(t,e,n)};oe.useTransition=function(){return kt.current.useTransition()};oe.version="18.3.1";U0.exports=oe;var Y=U0.exports;const CA=fA(Y);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var PA=Y,kA=Symbol.for("react.element"),NA=Symbol.for("react.fragment"),DA=Object.prototype.hasOwnProperty,VA=PA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,OA={key:!0,ref:!0,__self:!0,__source:!0};function Q0(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)DA.call(e,r)&&!OA.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:kA,type:t,key:i,ref:o,props:s,_owner:VA.current}}Bc.Fragment=NA;Bc.jsx=Q0;Bc.jsxs=Q0;j0.exports=Bc;var g=j0.exports,Uh={},Y0={exports:{}},Jt={},J0={exports:{}},X0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(j,W){var X=j.length;j.push(W);e:for(;0<X;){var de=X-1>>>1,me=j[de];if(0<s(me,W))j[de]=W,j[X]=me,X=de;else break e}}function n(j){return j.length===0?null:j[0]}function r(j){if(j.length===0)return null;var W=j[0],X=j.pop();if(X!==W){j[0]=X;e:for(var de=0,me=j.length,Te=me>>>1;de<Te;){var Dt=2*(de+1)-1,Re=j[Dt],ge=Dt+1,fe=j[ge];if(0>s(Re,X))ge<me&&0>s(fe,Re)?(j[de]=fe,j[ge]=X,de=ge):(j[de]=Re,j[Dt]=X,de=Dt);else if(ge<me&&0>s(fe,X))j[de]=fe,j[ge]=X,de=ge;else break e}}return W}function s(j,W){var X=j.sortIndex-W.sortIndex;return X!==0?X:j.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var u=[],c=[],h=1,f=null,m=3,y=!1,E=!1,b=!1,D=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(j){for(var W=n(c);W!==null;){if(W.callback===null)r(c);else if(W.startTime<=j)r(c),W.sortIndex=W.expirationTime,e(u,W);else break;W=n(c)}}function V(j){if(b=!1,x(j),!E)if(n(u)!==null)E=!0,J(z);else{var W=n(c);W!==null&&K(V,W.startTime-j)}}function z(j,W){E=!1,b&&(b=!1,I(v),v=-1),y=!0;var X=m;try{for(x(W),f=n(u);f!==null&&(!(f.expirationTime>W)||j&&!C());){var de=f.callback;if(typeof de=="function"){f.callback=null,m=f.priorityLevel;var me=de(f.expirationTime<=W);W=t.unstable_now(),typeof me=="function"?f.callback=me:f===n(u)&&r(u),x(W)}else r(u);f=n(u)}if(f!==null)var Te=!0;else{var Dt=n(c);Dt!==null&&K(V,Dt.startTime-W),Te=!1}return Te}finally{f=null,m=X,y=!1}}var L=!1,T=null,v=-1,S=5,A=-1;function C(){return!(t.unstable_now()-A<S)}function k(){if(T!==null){var j=t.unstable_now();A=j;var W=!0;try{W=T(!0,j)}finally{W?R():(L=!1,T=null)}}else L=!1}var R;if(typeof w=="function")R=function(){w(k)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,te=nt.port2;nt.port1.onmessage=k,R=function(){te.postMessage(null)}}else R=function(){D(k,0)};function J(j){T=j,L||(L=!0,R())}function K(j,W){v=D(function(){j(t.unstable_now())},W)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(j){j.callback=null},t.unstable_continueExecution=function(){E||y||(E=!0,J(z))},t.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<j?Math.floor(1e3/j):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(j){switch(m){case 1:case 2:case 3:var W=3;break;default:W=m}var X=m;m=W;try{return j()}finally{m=X}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(j,W){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var X=m;m=j;try{return W()}finally{m=X}},t.unstable_scheduleCallback=function(j,W,X){var de=t.unstable_now();switch(typeof X=="object"&&X!==null?(X=X.delay,X=typeof X=="number"&&0<X?de+X:de):X=de,j){case 1:var me=-1;break;case 2:me=250;break;case 5:me=1073741823;break;case 4:me=1e4;break;default:me=5e3}return me=X+me,j={id:h++,callback:W,priorityLevel:j,startTime:X,expirationTime:me,sortIndex:-1},X>de?(j.sortIndex=X,e(c,j),n(u)===null&&j===n(c)&&(b?(I(v),v=-1):b=!0,K(V,X-de))):(j.sortIndex=me,e(u,j),E||y||(E=!0,J(z))),j},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(j){var W=m;return function(){var X=m;m=W;try{return j.apply(this,arguments)}finally{m=X}}}})(X0);J0.exports=X0;var MA=J0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var LA=Y,Wt=MA;function B(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Z0=new Set,xa={};function Qs(t,e){ji(t,e),ji(t+"Capture",e)}function ji(t,e){for(xa[t]=e,t=0;t<e.length;t++)Z0.add(e[t])}var Un=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zh=Object.prototype.hasOwnProperty,FA=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ay={},Ry={};function jA(t){return zh.call(Ry,t)?!0:zh.call(Ay,t)?!1:FA.test(t)?Ry[t]=!0:(Ay[t]=!0,!1)}function UA(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function zA(t,e,n,r){if(e===null||typeof e>"u"||UA(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Nt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var pt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){pt[t]=new Nt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];pt[e]=new Nt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){pt[t]=new Nt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){pt[t]=new Nt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){pt[t]=new Nt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){pt[t]=new Nt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){pt[t]=new Nt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){pt[t]=new Nt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){pt[t]=new Nt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _p=/[\-:]([a-z])/g;function vp(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_p,vp);pt[e]=new Nt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_p,vp);pt[e]=new Nt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_p,vp);pt[e]=new Nt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){pt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!1,!1)});pt.xlinkHref=new Nt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){pt[t]=new Nt(t,1,!1,t.toLowerCase(),null,!0,!0)});function wp(t,e,n,r){var s=pt.hasOwnProperty(e)?pt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(zA(e,n,s,r)&&(n=null),r||s===null?jA(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Yn=LA.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Yl=Symbol.for("react.element"),mi=Symbol.for("react.portal"),gi=Symbol.for("react.fragment"),Ep=Symbol.for("react.strict_mode"),Bh=Symbol.for("react.profiler"),ew=Symbol.for("react.provider"),tw=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),$h=Symbol.for("react.suspense"),qh=Symbol.for("react.suspense_list"),Tp=Symbol.for("react.memo"),cr=Symbol.for("react.lazy"),nw=Symbol.for("react.offscreen"),by=Symbol.iterator;function Uo(t){return t===null||typeof t!="object"?null:(t=by&&t[by]||t["@@iterator"],typeof t=="function"?t:null)}var ze=Object.assign,nh;function Zo(t){if(nh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nh=e&&e[1]||""}return`
`+nh+t}var rh=!1;function sh(t,e){if(!t||rh)return"";rh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var r=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){r=c}t.call(e.prototype)}else{try{throw Error()}catch(c){r=c}t()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var s=c.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,a=i.length-1;1<=o&&0<=a&&s[o]!==i[a];)a--;for(;1<=o&&0<=a;o--,a--)if(s[o]!==i[a]){if(o!==1||a!==1)do if(o--,a--,0>a||s[o]!==i[a]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=a);break}}}finally{rh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Zo(t):""}function BA(t){switch(t.tag){case 5:return Zo(t.type);case 16:return Zo("Lazy");case 13:return Zo("Suspense");case 19:return Zo("SuspenseList");case 0:case 2:case 15:return t=sh(t.type,!1),t;case 11:return t=sh(t.type.render,!1),t;case 1:return t=sh(t.type,!0),t;default:return""}}function Gh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case gi:return"Fragment";case mi:return"Portal";case Bh:return"Profiler";case Ep:return"StrictMode";case $h:return"Suspense";case qh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case tw:return(t.displayName||"Context")+".Consumer";case ew:return(t._context.displayName||"Context")+".Provider";case Ip:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Tp:return e=t.displayName||null,e!==null?e:Gh(t.type)||"Memo";case cr:e=t._payload,t=t._init;try{return Gh(t(e))}catch{}}return null}function $A(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Gh(e);case 8:return e===Ep?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ur(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function rw(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qA(t){var e=rw(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Jl(t){t._valueTracker||(t._valueTracker=qA(t))}function sw(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=rw(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Yu(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Kh(t,e){var n=e.checked;return ze({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Cy(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ur(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function iw(t,e){e=e.checked,e!=null&&wp(t,"checked",e,!1)}function Hh(t,e){iw(t,e);var n=Ur(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Wh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Wh(t,e.type,Ur(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Py(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Wh(t,e,n){(e!=="number"||Yu(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ea=Array.isArray;function bi(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ur(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function Qh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(B(91));return ze({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ky(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(B(92));if(ea(n)){if(1<n.length)throw Error(B(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ur(n)}}function ow(t,e){var n=Ur(e.value),r=Ur(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Ny(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function aw(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Yh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?aw(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xl,lw=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Xl=Xl||document.createElement("div"),Xl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var aa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GA=["Webkit","ms","Moz","O"];Object.keys(aa).forEach(function(t){GA.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),aa[e]=aa[t]})});function uw(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||aa.hasOwnProperty(t)&&aa[t]?(""+e).trim():e+"px"}function cw(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=uw(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var KA=ze({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Jh(t,e){if(e){if(KA[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(B(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(B(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(B(61))}if(e.style!=null&&typeof e.style!="object")throw Error(B(62))}}function Xh(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zh=null;function xp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ef=null,Ci=null,Pi=null;function Dy(t){if(t=il(t)){if(typeof ef!="function")throw Error(B(280));var e=t.stateNode;e&&(e=Hc(e),ef(t.stateNode,t.type,e))}}function dw(t){Ci?Pi?Pi.push(t):Pi=[t]:Ci=t}function hw(){if(Ci){var t=Ci,e=Pi;if(Pi=Ci=null,Dy(t),e)for(t=0;t<e.length;t++)Dy(e[t])}}function fw(t,e){return t(e)}function pw(){}var ih=!1;function mw(t,e,n){if(ih)return t(e,n);ih=!0;try{return fw(t,e,n)}finally{ih=!1,(Ci!==null||Pi!==null)&&(pw(),hw())}}function Aa(t,e){var n=t.stateNode;if(n===null)return null;var r=Hc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(B(231,e,typeof n));return n}var tf=!1;if(Un)try{var zo={};Object.defineProperty(zo,"passive",{get:function(){tf=!0}}),window.addEventListener("test",zo,zo),window.removeEventListener("test",zo,zo)}catch{tf=!1}function HA(t,e,n,r,s,i,o,a,u){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(h){this.onError(h)}}var la=!1,Ju=null,Xu=!1,nf=null,WA={onError:function(t){la=!0,Ju=t}};function QA(t,e,n,r,s,i,o,a,u){la=!1,Ju=null,HA.apply(WA,arguments)}function YA(t,e,n,r,s,i,o,a,u){if(QA.apply(this,arguments),la){if(la){var c=Ju;la=!1,Ju=null}else throw Error(B(198));Xu||(Xu=!0,nf=c)}}function Ys(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function gw(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Vy(t){if(Ys(t)!==t)throw Error(B(188))}function JA(t){var e=t.alternate;if(!e){if(e=Ys(t),e===null)throw Error(B(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return Vy(s),t;if(i===r)return Vy(s),e;i=i.sibling}throw Error(B(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o){for(a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o)throw Error(B(189))}}if(n.alternate!==r)throw Error(B(190))}if(n.tag!==3)throw Error(B(188));return n.stateNode.current===n?t:e}function yw(t){return t=JA(t),t!==null?_w(t):null}function _w(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=_w(t);if(e!==null)return e;t=t.sibling}return null}var vw=Wt.unstable_scheduleCallback,Oy=Wt.unstable_cancelCallback,XA=Wt.unstable_shouldYield,ZA=Wt.unstable_requestPaint,Ke=Wt.unstable_now,eR=Wt.unstable_getCurrentPriorityLevel,Sp=Wt.unstable_ImmediatePriority,ww=Wt.unstable_UserBlockingPriority,Zu=Wt.unstable_NormalPriority,tR=Wt.unstable_LowPriority,Ew=Wt.unstable_IdlePriority,$c=null,En=null;function nR(t){if(En&&typeof En.onCommitFiberRoot=="function")try{En.onCommitFiberRoot($c,t,void 0,(t.current.flags&128)===128)}catch{}}var dn=Math.clz32?Math.clz32:iR,rR=Math.log,sR=Math.LN2;function iR(t){return t>>>=0,t===0?32:31-(rR(t)/sR|0)|0}var Zl=64,eu=4194304;function ta(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ec(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~s;a!==0?r=ta(a):(i&=o,i!==0&&(r=ta(i)))}else o=n&~s,o!==0?r=ta(o):i!==0&&(r=ta(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-dn(e),s=1<<n,r|=t[n],e&=~s;return r}function oR(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function aR(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-dn(i),a=1<<o,u=s[o];u===-1?(!(a&n)||a&r)&&(s[o]=oR(a,e)):u<=e&&(t.expiredLanes|=a),i&=~a}}function rf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Iw(){var t=Zl;return Zl<<=1,!(Zl&4194240)&&(Zl=64),t}function oh(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function rl(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-dn(e),t[e]=n}function lR(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-dn(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function Ap(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-dn(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var _e=0;function Tw(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var xw,Rp,Sw,Aw,Rw,sf=!1,tu=[],br=null,Cr=null,Pr=null,Ra=new Map,ba=new Map,fr=[],uR="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function My(t,e){switch(t){case"focusin":case"focusout":br=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":Pr=null;break;case"pointerover":case"pointerout":Ra.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ba.delete(e.pointerId)}}function Bo(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=il(e),e!==null&&Rp(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function cR(t,e,n,r,s){switch(e){case"focusin":return br=Bo(br,t,e,n,r,s),!0;case"dragenter":return Cr=Bo(Cr,t,e,n,r,s),!0;case"mouseover":return Pr=Bo(Pr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return Ra.set(i,Bo(Ra.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,ba.set(i,Bo(ba.get(i)||null,t,e,n,r,s)),!0}return!1}function bw(t){var e=xs(t.target);if(e!==null){var n=Ys(e);if(n!==null){if(e=n.tag,e===13){if(e=gw(n),e!==null){t.blockedOn=e,Rw(t.priority,function(){Sw(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function xu(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=of(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Zh=r,n.target.dispatchEvent(r),Zh=null}else return e=il(n),e!==null&&Rp(e),t.blockedOn=n,!1;e.shift()}return!0}function Ly(t,e,n){xu(t)&&n.delete(e)}function dR(){sf=!1,br!==null&&xu(br)&&(br=null),Cr!==null&&xu(Cr)&&(Cr=null),Pr!==null&&xu(Pr)&&(Pr=null),Ra.forEach(Ly),ba.forEach(Ly)}function $o(t,e){t.blockedOn===e&&(t.blockedOn=null,sf||(sf=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,dR)))}function Ca(t){function e(s){return $o(s,t)}if(0<tu.length){$o(tu[0],t);for(var n=1;n<tu.length;n++){var r=tu[n];r.blockedOn===t&&(r.blockedOn=null)}}for(br!==null&&$o(br,t),Cr!==null&&$o(Cr,t),Pr!==null&&$o(Pr,t),Ra.forEach(e),ba.forEach(e),n=0;n<fr.length;n++)r=fr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<fr.length&&(n=fr[0],n.blockedOn===null);)bw(n),n.blockedOn===null&&fr.shift()}var ki=Yn.ReactCurrentBatchConfig,tc=!0;function hR(t,e,n,r){var s=_e,i=ki.transition;ki.transition=null;try{_e=1,bp(t,e,n,r)}finally{_e=s,ki.transition=i}}function fR(t,e,n,r){var s=_e,i=ki.transition;ki.transition=null;try{_e=4,bp(t,e,n,r)}finally{_e=s,ki.transition=i}}function bp(t,e,n,r){if(tc){var s=of(t,e,n,r);if(s===null)gh(t,e,r,nc,n),My(t,r);else if(cR(s,t,e,n,r))r.stopPropagation();else if(My(t,r),e&4&&-1<uR.indexOf(t)){for(;s!==null;){var i=il(s);if(i!==null&&xw(i),i=of(t,e,n,r),i===null&&gh(t,e,r,nc,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else gh(t,e,r,null,n)}}var nc=null;function of(t,e,n,r){if(nc=null,t=xp(r),t=xs(t),t!==null)if(e=Ys(t),e===null)t=null;else if(n=e.tag,n===13){if(t=gw(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return nc=t,null}function Cw(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eR()){case Sp:return 1;case ww:return 4;case Zu:case tR:return 16;case Ew:return 536870912;default:return 16}default:return 16}}var Tr=null,Cp=null,Su=null;function Pw(){if(Su)return Su;var t,e=Cp,n=e.length,r,s="value"in Tr?Tr.value:Tr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Su=s.slice(t,1<r?1-r:void 0)}function Au(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function nu(){return!0}function Fy(){return!1}function Xt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?nu:Fy,this.isPropagationStopped=Fy,this}return ze(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),e}var co={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Pp=Xt(co),sl=ze({},co,{view:0,detail:0}),pR=Xt(sl),ah,lh,qo,qc=ze({},sl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==qo&&(qo&&t.type==="mousemove"?(ah=t.screenX-qo.screenX,lh=t.screenY-qo.screenY):lh=ah=0,qo=t),ah)},movementY:function(t){return"movementY"in t?t.movementY:lh}}),jy=Xt(qc),mR=ze({},qc,{dataTransfer:0}),gR=Xt(mR),yR=ze({},sl,{relatedTarget:0}),uh=Xt(yR),_R=ze({},co,{animationName:0,elapsedTime:0,pseudoElement:0}),vR=Xt(_R),wR=ze({},co,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ER=Xt(wR),IR=ze({},co,{data:0}),Uy=Xt(IR),TR={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xR={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},SR={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function AR(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=SR[t])?!!e[t]:!1}function kp(){return AR}var RR=ze({},sl,{key:function(t){if(t.key){var e=TR[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Au(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?xR[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kp,charCode:function(t){return t.type==="keypress"?Au(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Au(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),bR=Xt(RR),CR=ze({},qc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zy=Xt(CR),PR=ze({},sl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kp}),kR=Xt(PR),NR=ze({},co,{propertyName:0,elapsedTime:0,pseudoElement:0}),DR=Xt(NR),VR=ze({},qc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),OR=Xt(VR),MR=[9,13,27,32],Np=Un&&"CompositionEvent"in window,ua=null;Un&&"documentMode"in document&&(ua=document.documentMode);var LR=Un&&"TextEvent"in window&&!ua,kw=Un&&(!Np||ua&&8<ua&&11>=ua),By=" ",$y=!1;function Nw(t,e){switch(t){case"keyup":return MR.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var yi=!1;function FR(t,e){switch(t){case"compositionend":return Dw(e);case"keypress":return e.which!==32?null:($y=!0,By);case"textInput":return t=e.data,t===By&&$y?null:t;default:return null}}function jR(t,e){if(yi)return t==="compositionend"||!Np&&Nw(t,e)?(t=Pw(),Su=Cp=Tr=null,yi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return kw&&e.locale!=="ko"?null:e.data;default:return null}}var UR={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qy(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!UR[t.type]:e==="textarea"}function Vw(t,e,n,r){dw(r),e=rc(e,"onChange"),0<e.length&&(n=new Pp("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ca=null,Pa=null;function zR(t){Gw(t,0)}function Gc(t){var e=wi(t);if(sw(e))return t}function BR(t,e){if(t==="change")return e}var Ow=!1;if(Un){var ch;if(Un){var dh="oninput"in document;if(!dh){var Gy=document.createElement("div");Gy.setAttribute("oninput","return;"),dh=typeof Gy.oninput=="function"}ch=dh}else ch=!1;Ow=ch&&(!document.documentMode||9<document.documentMode)}function Ky(){ca&&(ca.detachEvent("onpropertychange",Mw),Pa=ca=null)}function Mw(t){if(t.propertyName==="value"&&Gc(Pa)){var e=[];Vw(e,Pa,t,xp(t)),mw(zR,e)}}function $R(t,e,n){t==="focusin"?(Ky(),ca=e,Pa=n,ca.attachEvent("onpropertychange",Mw)):t==="focusout"&&Ky()}function qR(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Gc(Pa)}function GR(t,e){if(t==="click")return Gc(e)}function KR(t,e){if(t==="input"||t==="change")return Gc(e)}function HR(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var pn=typeof Object.is=="function"?Object.is:HR;function ka(t,e){if(pn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!zh.call(e,s)||!pn(t[s],e[s]))return!1}return!0}function Hy(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wy(t,e){var n=Hy(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hy(n)}}function Lw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Lw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Fw(){for(var t=window,e=Yu();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Yu(t.document)}return e}function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function WR(t){var e=Fw(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Lw(n.ownerDocument.documentElement,n)){if(r!==null&&Dp(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Wy(n,i);var o=Wy(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var QR=Un&&"documentMode"in document&&11>=document.documentMode,_i=null,af=null,da=null,lf=!1;function Qy(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lf||_i==null||_i!==Yu(r)||(r=_i,"selectionStart"in r&&Dp(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),da&&ka(da,r)||(da=r,r=rc(af,"onSelect"),0<r.length&&(e=new Pp("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=_i)))}function ru(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var vi={animationend:ru("Animation","AnimationEnd"),animationiteration:ru("Animation","AnimationIteration"),animationstart:ru("Animation","AnimationStart"),transitionend:ru("Transition","TransitionEnd")},hh={},jw={};Un&&(jw=document.createElement("div").style,"AnimationEvent"in window||(delete vi.animationend.animation,delete vi.animationiteration.animation,delete vi.animationstart.animation),"TransitionEvent"in window||delete vi.transitionend.transition);function Kc(t){if(hh[t])return hh[t];if(!vi[t])return t;var e=vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in jw)return hh[t]=e[n];return t}var Uw=Kc("animationend"),zw=Kc("animationiteration"),Bw=Kc("animationstart"),$w=Kc("transitionend"),qw=new Map,Yy="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(t,e){qw.set(t,e),Qs(e,[t])}for(var fh=0;fh<Yy.length;fh++){var ph=Yy[fh],YR=ph.toLowerCase(),JR=ph[0].toUpperCase()+ph.slice(1);Xr(YR,"on"+JR)}Xr(Uw,"onAnimationEnd");Xr(zw,"onAnimationIteration");Xr(Bw,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr($w,"onTransitionEnd");ji("onMouseEnter",["mouseout","mouseover"]);ji("onMouseLeave",["mouseout","mouseover"]);ji("onPointerEnter",["pointerout","pointerover"]);ji("onPointerLeave",["pointerout","pointerover"]);Qs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),XR=new Set("cancel close invalid load scroll toggle".split(" ").concat(na));function Jy(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,YA(r,e,void 0,t),t.currentTarget=null}function Gw(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==i&&s.isPropagationStopped())break e;Jy(s,a,c),i=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,c=a.currentTarget,a=a.listener,u!==i&&s.isPropagationStopped())break e;Jy(s,a,c),i=u}}}if(Xu)throw t=nf,Xu=!1,nf=null,t}function Pe(t,e){var n=e[ff];n===void 0&&(n=e[ff]=new Set);var r=t+"__bubble";n.has(r)||(Kw(e,t,2,!1),n.add(r))}function mh(t,e,n){var r=0;e&&(r|=4),Kw(n,t,r,e)}var su="_reactListening"+Math.random().toString(36).slice(2);function Na(t){if(!t[su]){t[su]=!0,Z0.forEach(function(n){n!=="selectionchange"&&(XR.has(n)||mh(n,!1,t),mh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[su]||(e[su]=!0,mh("selectionchange",!1,e))}}function Kw(t,e,n,r){switch(Cw(e)){case 1:var s=hR;break;case 4:s=fR;break;default:s=bp}n=s.bind(null,e,n,t),s=void 0,!tf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function gh(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===s||a.nodeType===8&&a.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;a!==null;){if(o=xs(a),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}a=a.parentNode}}r=r.return}mw(function(){var c=i,h=xp(n),f=[];e:{var m=qw.get(t);if(m!==void 0){var y=Pp,E=t;switch(t){case"keypress":if(Au(n)===0)break e;case"keydown":case"keyup":y=bR;break;case"focusin":E="focus",y=uh;break;case"focusout":E="blur",y=uh;break;case"beforeblur":case"afterblur":y=uh;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":y=jy;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":y=gR;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":y=kR;break;case Uw:case zw:case Bw:y=vR;break;case $w:y=DR;break;case"scroll":y=pR;break;case"wheel":y=OR;break;case"copy":case"cut":case"paste":y=ER;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":y=zy}var b=(e&4)!==0,D=!b&&t==="scroll",I=b?m!==null?m+"Capture":null:m;b=[];for(var w=c,x;w!==null;){x=w;var V=x.stateNode;if(x.tag===5&&V!==null&&(x=V,I!==null&&(V=Aa(w,I),V!=null&&b.push(Da(w,V,x)))),D)break;w=w.return}0<b.length&&(m=new y(m,E,null,n,h),f.push({event:m,listeners:b}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",y=t==="mouseout"||t==="pointerout",m&&n!==Zh&&(E=n.relatedTarget||n.fromElement)&&(xs(E)||E[zn]))break e;if((y||m)&&(m=h.window===h?h:(m=h.ownerDocument)?m.defaultView||m.parentWindow:window,y?(E=n.relatedTarget||n.toElement,y=c,E=E?xs(E):null,E!==null&&(D=Ys(E),E!==D||E.tag!==5&&E.tag!==6)&&(E=null)):(y=null,E=c),y!==E)){if(b=jy,V="onMouseLeave",I="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(b=zy,V="onPointerLeave",I="onPointerEnter",w="pointer"),D=y==null?m:wi(y),x=E==null?m:wi(E),m=new b(V,w+"leave",y,n,h),m.target=D,m.relatedTarget=x,V=null,xs(h)===c&&(b=new b(I,w+"enter",E,n,h),b.target=x,b.relatedTarget=D,V=b),D=V,y&&E)t:{for(b=y,I=E,w=0,x=b;x;x=si(x))w++;for(x=0,V=I;V;V=si(V))x++;for(;0<w-x;)b=si(b),w--;for(;0<x-w;)I=si(I),x--;for(;w--;){if(b===I||I!==null&&b===I.alternate)break t;b=si(b),I=si(I)}b=null}else b=null;y!==null&&Xy(f,m,y,b,!1),E!==null&&D!==null&&Xy(f,D,E,b,!0)}}e:{if(m=c?wi(c):window,y=m.nodeName&&m.nodeName.toLowerCase(),y==="select"||y==="input"&&m.type==="file")var z=BR;else if(qy(m))if(Ow)z=KR;else{z=qR;var L=$R}else(y=m.nodeName)&&y.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(z=GR);if(z&&(z=z(t,c))){Vw(f,z,n,h);break e}L&&L(t,m,c),t==="focusout"&&(L=m._wrapperState)&&L.controlled&&m.type==="number"&&Wh(m,"number",m.value)}switch(L=c?wi(c):window,t){case"focusin":(qy(L)||L.contentEditable==="true")&&(_i=L,af=c,da=null);break;case"focusout":da=af=_i=null;break;case"mousedown":lf=!0;break;case"contextmenu":case"mouseup":case"dragend":lf=!1,Qy(f,n,h);break;case"selectionchange":if(QR)break;case"keydown":case"keyup":Qy(f,n,h)}var T;if(Np)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else yi?Nw(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(kw&&n.locale!=="ko"&&(yi||v!=="onCompositionStart"?v==="onCompositionEnd"&&yi&&(T=Pw()):(Tr=h,Cp="value"in Tr?Tr.value:Tr.textContent,yi=!0)),L=rc(c,v),0<L.length&&(v=new Uy(v,t,null,n,h),f.push({event:v,listeners:L}),T?v.data=T:(T=Dw(n),T!==null&&(v.data=T)))),(T=LR?FR(t,n):jR(t,n))&&(c=rc(c,"onBeforeInput"),0<c.length&&(h=new Uy("onBeforeInput","beforeinput",null,n,h),f.push({event:h,listeners:c}),h.data=T))}Gw(f,e)})}function Da(t,e,n){return{instance:t,listener:e,currentTarget:n}}function rc(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=Aa(t,n),i!=null&&r.unshift(Da(t,i,s)),i=Aa(t,e),i!=null&&r.push(Da(t,i,s))),t=t.return}return r}function si(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Xy(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,s?(u=Aa(n,i),u!=null&&o.unshift(Da(n,u,a))):s||(u=Aa(n,i),u!=null&&o.push(Da(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ZR=/\r\n?/g,e1=/\u0000|\uFFFD/g;function Zy(t){return(typeof t=="string"?t:""+t).replace(ZR,`
`).replace(e1,"")}function iu(t,e,n){if(e=Zy(e),Zy(t)!==e&&n)throw Error(B(425))}function sc(){}var uf=null,cf=null;function df(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var hf=typeof setTimeout=="function"?setTimeout:void 0,t1=typeof clearTimeout=="function"?clearTimeout:void 0,e_=typeof Promise=="function"?Promise:void 0,n1=typeof queueMicrotask=="function"?queueMicrotask:typeof e_<"u"?function(t){return e_.resolve(null).then(t).catch(r1)}:hf;function r1(t){setTimeout(function(){throw t})}function yh(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),Ca(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);Ca(e)}function kr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function t_(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ho=Math.random().toString(36).slice(2),yn="__reactFiber$"+ho,Va="__reactProps$"+ho,zn="__reactContainer$"+ho,ff="__reactEvents$"+ho,s1="__reactListeners$"+ho,i1="__reactHandles$"+ho;function xs(t){var e=t[yn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zn]||n[yn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=t_(t);t!==null;){if(n=t[yn])return n;t=t_(t)}return e}t=n,n=t.parentNode}return null}function il(t){return t=t[yn]||t[zn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function wi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(B(33))}function Hc(t){return t[Va]||null}var pf=[],Ei=-1;function Zr(t){return{current:t}}function De(t){0>Ei||(t.current=pf[Ei],pf[Ei]=null,Ei--)}function xe(t,e){Ei++,pf[Ei]=t.current,t.current=e}var zr={},At=Zr(zr),zt=Zr(!1),Ns=zr;function Ui(t,e){var n=t.type.contextTypes;if(!n)return zr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Bt(t){return t=t.childContextTypes,t!=null}function ic(){De(zt),De(At)}function n_(t,e,n){if(At.current!==zr)throw Error(B(168));xe(At,e),xe(zt,n)}function Hw(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(B(108,$A(t)||"Unknown",s));return ze({},n,r)}function oc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||zr,Ns=At.current,xe(At,t),xe(zt,zt.current),!0}function r_(t,e,n){var r=t.stateNode;if(!r)throw Error(B(169));n?(t=Hw(t,e,Ns),r.__reactInternalMemoizedMergedChildContext=t,De(zt),De(At),xe(At,t)):De(zt),xe(zt,n)}var Nn=null,Wc=!1,_h=!1;function Ww(t){Nn===null?Nn=[t]:Nn.push(t)}function o1(t){Wc=!0,Ww(t)}function es(){if(!_h&&Nn!==null){_h=!0;var t=0,e=_e;try{var n=Nn;for(_e=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nn=null,Wc=!1}catch(s){throw Nn!==null&&(Nn=Nn.slice(t+1)),vw(Sp,es),s}finally{_e=e,_h=!1}}return null}var Ii=[],Ti=0,ac=null,lc=0,Zt=[],en=0,Ds=null,Dn=1,Vn="";function ps(t,e){Ii[Ti++]=lc,Ii[Ti++]=ac,ac=t,lc=e}function Qw(t,e,n){Zt[en++]=Dn,Zt[en++]=Vn,Zt[en++]=Ds,Ds=t;var r=Dn;t=Vn;var s=32-dn(r)-1;r&=~(1<<s),n+=1;var i=32-dn(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Dn=1<<32-dn(e)+s|n<<s|r,Vn=i+t}else Dn=1<<i|n<<s|r,Vn=t}function Vp(t){t.return!==null&&(ps(t,1),Qw(t,1,0))}function Op(t){for(;t===ac;)ac=Ii[--Ti],Ii[Ti]=null,lc=Ii[--Ti],Ii[Ti]=null;for(;t===Ds;)Ds=Zt[--en],Zt[en]=null,Vn=Zt[--en],Zt[en]=null,Dn=Zt[--en],Zt[en]=null}var Ht=null,Kt=null,Oe=!1,cn=null;function Yw(t,e){var n=tn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function s_(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ht=t,Kt=kr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ht=t,Kt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ds!==null?{id:Dn,overflow:Vn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=tn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ht=t,Kt=null,!0):!1;default:return!1}}function mf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function gf(t){if(Oe){var e=Kt;if(e){var n=e;if(!s_(t,e)){if(mf(t))throw Error(B(418));e=kr(n.nextSibling);var r=Ht;e&&s_(t,e)?Yw(r,n):(t.flags=t.flags&-4097|2,Oe=!1,Ht=t)}}else{if(mf(t))throw Error(B(418));t.flags=t.flags&-4097|2,Oe=!1,Ht=t}}}function i_(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ht=t}function ou(t){if(t!==Ht)return!1;if(!Oe)return i_(t),Oe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!df(t.type,t.memoizedProps)),e&&(e=Kt)){if(mf(t))throw Jw(),Error(B(418));for(;e;)Yw(t,e),e=kr(e.nextSibling)}if(i_(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(B(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Kt=kr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Kt=null}}else Kt=Ht?kr(t.stateNode.nextSibling):null;return!0}function Jw(){for(var t=Kt;t;)t=kr(t.nextSibling)}function zi(){Kt=Ht=null,Oe=!1}function Mp(t){cn===null?cn=[t]:cn.push(t)}var a1=Yn.ReactCurrentBatchConfig;function Go(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(B(309));var r=n.stateNode}if(!r)throw Error(B(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var a=s.refs;o===null?delete a[i]:a[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(B(284));if(!n._owner)throw Error(B(290,t))}return t}function au(t,e){throw t=Object.prototype.toString.call(e),Error(B(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function o_(t){var e=t._init;return e(t._payload)}function Xw(t){function e(I,w){if(t){var x=I.deletions;x===null?(I.deletions=[w],I.flags|=16):x.push(w)}}function n(I,w){if(!t)return null;for(;w!==null;)e(I,w),w=w.sibling;return null}function r(I,w){for(I=new Map;w!==null;)w.key!==null?I.set(w.key,w):I.set(w.index,w),w=w.sibling;return I}function s(I,w){return I=Or(I,w),I.index=0,I.sibling=null,I}function i(I,w,x){return I.index=x,t?(x=I.alternate,x!==null?(x=x.index,x<w?(I.flags|=2,w):x):(I.flags|=2,w)):(I.flags|=1048576,w)}function o(I){return t&&I.alternate===null&&(I.flags|=2),I}function a(I,w,x,V){return w===null||w.tag!==6?(w=Sh(x,I.mode,V),w.return=I,w):(w=s(w,x),w.return=I,w)}function u(I,w,x,V){var z=x.type;return z===gi?h(I,w,x.props.children,V,x.key):w!==null&&(w.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===cr&&o_(z)===w.type)?(V=s(w,x.props),V.ref=Go(I,w,x),V.return=I,V):(V=Du(x.type,x.key,x.props,null,I.mode,V),V.ref=Go(I,w,x),V.return=I,V)}function c(I,w,x,V){return w===null||w.tag!==4||w.stateNode.containerInfo!==x.containerInfo||w.stateNode.implementation!==x.implementation?(w=Ah(x,I.mode,V),w.return=I,w):(w=s(w,x.children||[]),w.return=I,w)}function h(I,w,x,V,z){return w===null||w.tag!==7?(w=bs(x,I.mode,V,z),w.return=I,w):(w=s(w,x),w.return=I,w)}function f(I,w,x){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Sh(""+w,I.mode,x),w.return=I,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Yl:return x=Du(w.type,w.key,w.props,null,I.mode,x),x.ref=Go(I,null,w),x.return=I,x;case mi:return w=Ah(w,I.mode,x),w.return=I,w;case cr:var V=w._init;return f(I,V(w._payload),x)}if(ea(w)||Uo(w))return w=bs(w,I.mode,x,null),w.return=I,w;au(I,w)}return null}function m(I,w,x,V){var z=w!==null?w.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return z!==null?null:a(I,w,""+x,V);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Yl:return x.key===z?u(I,w,x,V):null;case mi:return x.key===z?c(I,w,x,V):null;case cr:return z=x._init,m(I,w,z(x._payload),V)}if(ea(x)||Uo(x))return z!==null?null:h(I,w,x,V,null);au(I,x)}return null}function y(I,w,x,V,z){if(typeof V=="string"&&V!==""||typeof V=="number")return I=I.get(x)||null,a(w,I,""+V,z);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case Yl:return I=I.get(V.key===null?x:V.key)||null,u(w,I,V,z);case mi:return I=I.get(V.key===null?x:V.key)||null,c(w,I,V,z);case cr:var L=V._init;return y(I,w,x,L(V._payload),z)}if(ea(V)||Uo(V))return I=I.get(x)||null,h(w,I,V,z,null);au(w,V)}return null}function E(I,w,x,V){for(var z=null,L=null,T=w,v=w=0,S=null;T!==null&&v<x.length;v++){T.index>v?(S=T,T=null):S=T.sibling;var A=m(I,T,x[v],V);if(A===null){T===null&&(T=S);break}t&&T&&A.alternate===null&&e(I,T),w=i(A,w,v),L===null?z=A:L.sibling=A,L=A,T=S}if(v===x.length)return n(I,T),Oe&&ps(I,v),z;if(T===null){for(;v<x.length;v++)T=f(I,x[v],V),T!==null&&(w=i(T,w,v),L===null?z=T:L.sibling=T,L=T);return Oe&&ps(I,v),z}for(T=r(I,T);v<x.length;v++)S=y(T,I,v,x[v],V),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?v:S.key),w=i(S,w,v),L===null?z=S:L.sibling=S,L=S);return t&&T.forEach(function(C){return e(I,C)}),Oe&&ps(I,v),z}function b(I,w,x,V){var z=Uo(x);if(typeof z!="function")throw Error(B(150));if(x=z.call(x),x==null)throw Error(B(151));for(var L=z=null,T=w,v=w=0,S=null,A=x.next();T!==null&&!A.done;v++,A=x.next()){T.index>v?(S=T,T=null):S=T.sibling;var C=m(I,T,A.value,V);if(C===null){T===null&&(T=S);break}t&&T&&C.alternate===null&&e(I,T),w=i(C,w,v),L===null?z=C:L.sibling=C,L=C,T=S}if(A.done)return n(I,T),Oe&&ps(I,v),z;if(T===null){for(;!A.done;v++,A=x.next())A=f(I,A.value,V),A!==null&&(w=i(A,w,v),L===null?z=A:L.sibling=A,L=A);return Oe&&ps(I,v),z}for(T=r(I,T);!A.done;v++,A=x.next())A=y(T,I,v,A.value,V),A!==null&&(t&&A.alternate!==null&&T.delete(A.key===null?v:A.key),w=i(A,w,v),L===null?z=A:L.sibling=A,L=A);return t&&T.forEach(function(k){return e(I,k)}),Oe&&ps(I,v),z}function D(I,w,x,V){if(typeof x=="object"&&x!==null&&x.type===gi&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Yl:e:{for(var z=x.key,L=w;L!==null;){if(L.key===z){if(z=x.type,z===gi){if(L.tag===7){n(I,L.sibling),w=s(L,x.props.children),w.return=I,I=w;break e}}else if(L.elementType===z||typeof z=="object"&&z!==null&&z.$$typeof===cr&&o_(z)===L.type){n(I,L.sibling),w=s(L,x.props),w.ref=Go(I,L,x),w.return=I,I=w;break e}n(I,L);break}else e(I,L);L=L.sibling}x.type===gi?(w=bs(x.props.children,I.mode,V,x.key),w.return=I,I=w):(V=Du(x.type,x.key,x.props,null,I.mode,V),V.ref=Go(I,w,x),V.return=I,I=V)}return o(I);case mi:e:{for(L=x.key;w!==null;){if(w.key===L)if(w.tag===4&&w.stateNode.containerInfo===x.containerInfo&&w.stateNode.implementation===x.implementation){n(I,w.sibling),w=s(w,x.children||[]),w.return=I,I=w;break e}else{n(I,w);break}else e(I,w);w=w.sibling}w=Ah(x,I.mode,V),w.return=I,I=w}return o(I);case cr:return L=x._init,D(I,w,L(x._payload),V)}if(ea(x))return E(I,w,x,V);if(Uo(x))return b(I,w,x,V);au(I,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,w!==null&&w.tag===6?(n(I,w.sibling),w=s(w,x),w.return=I,I=w):(n(I,w),w=Sh(x,I.mode,V),w.return=I,I=w),o(I)):n(I,w)}return D}var Bi=Xw(!0),Zw=Xw(!1),uc=Zr(null),cc=null,xi=null,Lp=null;function Fp(){Lp=xi=cc=null}function jp(t){var e=uc.current;De(uc),t._currentValue=e}function yf(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ni(t,e){cc=t,Lp=xi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function rn(t){var e=t._currentValue;if(Lp!==t)if(t={context:t,memoizedValue:e,next:null},xi===null){if(cc===null)throw Error(B(308));xi=t,cc.dependencies={lanes:0,firstContext:t}}else xi=xi.next=t;return e}var Ss=null;function Up(t){Ss===null?Ss=[t]:Ss.push(t)}function eE(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,Up(e)):(n.next=s.next,s.next=n),e.interleaved=n,Bn(t,r)}function Bn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var dr=!1;function zp(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function tE(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function jn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Nr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,he&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Bn(t,n)}return s=r.interleaved,s===null?(e.next=e,Up(r)):(e.next=s.next,s.next=e),r.interleaved=e,Bn(t,n)}function Ru(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ap(t,n)}}function a_(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dc(t,e,n,r){var s=t.updateQueue;dr=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,a=s.shared.pending;if(a!==null){s.shared.pending=null;var u=a,c=u.next;u.next=null,o===null?i=c:o.next=c,o=u;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=c:a.next=c,h.lastBaseUpdate=u))}if(i!==null){var f=s.baseState;o=0,h=c=u=null,a=i;do{var m=a.lane,y=a.eventTime;if((r&m)===m){h!==null&&(h=h.next={eventTime:y,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var E=t,b=a;switch(m=e,y=n,b.tag){case 1:if(E=b.payload,typeof E=="function"){f=E.call(y,f,m);break e}f=E;break e;case 3:E.flags=E.flags&-65537|128;case 0:if(E=b.payload,m=typeof E=="function"?E.call(y,f,m):E,m==null)break e;f=ze({},f,m);break e;case 2:dr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=s.effects,m===null?s.effects=[a]:m.push(a))}else y={eventTime:y,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(c=h=y,u=f):h=h.next=y,o|=m;if(a=a.next,a===null){if(a=s.shared.pending,a===null)break;m=a,a=m.next,m.next=null,s.lastBaseUpdate=m,s.shared.pending=null}}while(!0);if(h===null&&(u=f),s.baseState=u,s.firstBaseUpdate=c,s.lastBaseUpdate=h,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Os|=o,t.lanes=o,t.memoizedState=f}}function l_(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(B(191,s));s.call(r)}}}var ol={},In=Zr(ol),Oa=Zr(ol),Ma=Zr(ol);function As(t){if(t===ol)throw Error(B(174));return t}function Bp(t,e){switch(xe(Ma,e),xe(Oa,t),xe(In,ol),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Yh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Yh(e,t)}De(In),xe(In,e)}function $i(){De(In),De(Oa),De(Ma)}function nE(t){As(Ma.current);var e=As(In.current),n=Yh(e,t.type);e!==n&&(xe(Oa,t),xe(In,n))}function $p(t){Oa.current===t&&(De(In),De(Oa))}var je=Zr(0);function hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var vh=[];function qp(){for(var t=0;t<vh.length;t++)vh[t]._workInProgressVersionPrimary=null;vh.length=0}var bu=Yn.ReactCurrentDispatcher,wh=Yn.ReactCurrentBatchConfig,Vs=0,Ue=null,Je=null,st=null,fc=!1,ha=!1,La=0,l1=0;function _t(){throw Error(B(321))}function Gp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!pn(t[n],e[n]))return!1;return!0}function Kp(t,e,n,r,s,i){if(Vs=i,Ue=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,bu.current=t===null||t.memoizedState===null?h1:f1,t=n(r,s),ha){i=0;do{if(ha=!1,La=0,25<=i)throw Error(B(301));i+=1,st=Je=null,e.updateQueue=null,bu.current=p1,t=n(r,s)}while(ha)}if(bu.current=pc,e=Je!==null&&Je.next!==null,Vs=0,st=Je=Ue=null,fc=!1,e)throw Error(B(300));return t}function Hp(){var t=La!==0;return La=0,t}function gn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Ue.memoizedState=st=t:st=st.next=t,st}function sn(){if(Je===null){var t=Ue.alternate;t=t!==null?t.memoizedState:null}else t=Je.next;var e=st===null?Ue.memoizedState:st.next;if(e!==null)st=e,Je=t;else{if(t===null)throw Error(B(310));Je=t,t={memoizedState:Je.memoizedState,baseState:Je.baseState,baseQueue:Je.baseQueue,queue:Je.queue,next:null},st===null?Ue.memoizedState=st=t:st=st.next=t}return st}function Fa(t,e){return typeof e=="function"?e(t):e}function Eh(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=Je,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var a=o=null,u=null,c=i;do{var h=c.lane;if((Vs&h)===h)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:t(r,c.action);else{var f={lane:h,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=f,o=r):u=u.next=f,Ue.lanes|=h,Os|=h}c=c.next}while(c!==null&&c!==i);u===null?o=r:u.next=a,pn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,Ue.lanes|=i,Os|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ih(t){var e=sn(),n=e.queue;if(n===null)throw Error(B(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);pn(i,e.memoizedState)||(Lt=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function rE(){}function sE(t,e){var n=Ue,r=sn(),s=e(),i=!pn(r.memoizedState,s);if(i&&(r.memoizedState=s,Lt=!0),r=r.queue,Wp(aE.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||st!==null&&st.memoizedState.tag&1){if(n.flags|=2048,ja(9,oE.bind(null,n,r,s,e),void 0,null),ot===null)throw Error(B(349));Vs&30||iE(n,e,s)}return s}function iE(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function oE(t,e,n,r){e.value=n,e.getSnapshot=r,lE(e)&&uE(t)}function aE(t,e,n){return n(function(){lE(e)&&uE(t)})}function lE(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!pn(t,n)}catch{return!0}}function uE(t){var e=Bn(t,1);e!==null&&hn(e,t,1,-1)}function u_(t){var e=gn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:t},e.queue=t,t=t.dispatch=d1.bind(null,Ue,t),[e.memoizedState,t]}function ja(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ue.updateQueue,e===null?(e={lastEffect:null,stores:null},Ue.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function cE(){return sn().memoizedState}function Cu(t,e,n,r){var s=gn();Ue.flags|=t,s.memoizedState=ja(1|e,n,void 0,r===void 0?null:r)}function Qc(t,e,n,r){var s=sn();r=r===void 0?null:r;var i=void 0;if(Je!==null){var o=Je.memoizedState;if(i=o.destroy,r!==null&&Gp(r,o.deps)){s.memoizedState=ja(e,n,i,r);return}}Ue.flags|=t,s.memoizedState=ja(1|e,n,i,r)}function c_(t,e){return Cu(8390656,8,t,e)}function Wp(t,e){return Qc(2048,8,t,e)}function dE(t,e){return Qc(4,2,t,e)}function hE(t,e){return Qc(4,4,t,e)}function fE(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function pE(t,e,n){return n=n!=null?n.concat([t]):null,Qc(4,4,fE.bind(null,e,t),n)}function Qp(){}function mE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function gE(t,e){var n=sn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gp(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function yE(t,e,n){return Vs&21?(pn(n,e)||(n=Iw(),Ue.lanes|=n,Os|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function u1(t,e){var n=_e;_e=n!==0&&4>n?n:4,t(!0);var r=wh.transition;wh.transition={};try{t(!1),e()}finally{_e=n,wh.transition=r}}function _E(){return sn().memoizedState}function c1(t,e,n){var r=Vr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},vE(t))wE(e,n);else if(n=eE(t,e,n,r),n!==null){var s=Pt();hn(n,t,r,s),EE(n,e,r)}}function d1(t,e,n){var r=Vr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(vE(t))wE(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,a=i(o,n);if(s.hasEagerState=!0,s.eagerState=a,pn(a,o)){var u=e.interleaved;u===null?(s.next=s,Up(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=eE(t,e,s,r),n!==null&&(s=Pt(),hn(n,t,r,s),EE(n,e,r))}}function vE(t){var e=t.alternate;return t===Ue||e!==null&&e===Ue}function wE(t,e){ha=fc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function EE(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ap(t,n)}}var pc={readContext:rn,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useInsertionEffect:_t,useLayoutEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useMutableSource:_t,useSyncExternalStore:_t,useId:_t,unstable_isNewReconciler:!1},h1={readContext:rn,useCallback:function(t,e){return gn().memoizedState=[t,e===void 0?null:e],t},useContext:rn,useEffect:c_,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Cu(4194308,4,fE.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Cu(4194308,4,t,e)},useInsertionEffect:function(t,e){return Cu(4,2,t,e)},useMemo:function(t,e){var n=gn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=gn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=c1.bind(null,Ue,t),[r.memoizedState,t]},useRef:function(t){var e=gn();return t={current:t},e.memoizedState=t},useState:u_,useDebugValue:Qp,useDeferredValue:function(t){return gn().memoizedState=t},useTransition:function(){var t=u_(!1),e=t[0];return t=u1.bind(null,t[1]),gn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Ue,s=gn();if(Oe){if(n===void 0)throw Error(B(407));n=n()}else{if(n=e(),ot===null)throw Error(B(349));Vs&30||iE(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,c_(aE.bind(null,r,i,t),[t]),r.flags|=2048,ja(9,oE.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=gn(),e=ot.identifierPrefix;if(Oe){var n=Vn,r=Dn;n=(r&~(1<<32-dn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=l1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},f1={readContext:rn,useCallback:mE,useContext:rn,useEffect:Wp,useImperativeHandle:pE,useInsertionEffect:dE,useLayoutEffect:hE,useMemo:gE,useReducer:Eh,useRef:cE,useState:function(){return Eh(Fa)},useDebugValue:Qp,useDeferredValue:function(t){var e=sn();return yE(e,Je.memoizedState,t)},useTransition:function(){var t=Eh(Fa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:rE,useSyncExternalStore:sE,useId:_E,unstable_isNewReconciler:!1},p1={readContext:rn,useCallback:mE,useContext:rn,useEffect:Wp,useImperativeHandle:pE,useInsertionEffect:dE,useLayoutEffect:hE,useMemo:gE,useReducer:Ih,useRef:cE,useState:function(){return Ih(Fa)},useDebugValue:Qp,useDeferredValue:function(t){var e=sn();return Je===null?e.memoizedState=t:yE(e,Je.memoizedState,t)},useTransition:function(){var t=Ih(Fa)[0],e=sn().memoizedState;return[t,e]},useMutableSource:rE,useSyncExternalStore:sE,useId:_E,unstable_isNewReconciler:!1};function ln(t,e){if(t&&t.defaultProps){e=ze({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function _f(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ze({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Yc={isMounted:function(t){return(t=t._reactInternals)?Ys(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pt(),s=Vr(t),i=jn(r,s);i.payload=e,n!=null&&(i.callback=n),e=Nr(t,i,s),e!==null&&(hn(e,t,s,r),Ru(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pt(),s=Vr(t),i=jn(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=Nr(t,i,s),e!==null&&(hn(e,t,s,r),Ru(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pt(),r=Vr(t),s=jn(n,r);s.tag=2,e!=null&&(s.callback=e),e=Nr(t,s,r),e!==null&&(hn(e,t,r,n),Ru(e,t,r))}};function d_(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!ka(n,r)||!ka(s,i):!0}function IE(t,e,n){var r=!1,s=zr,i=e.contextType;return typeof i=="object"&&i!==null?i=rn(i):(s=Bt(e)?Ns:At.current,r=e.contextTypes,i=(r=r!=null)?Ui(t,s):zr),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Yc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function h_(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Yc.enqueueReplaceState(e,e.state,null)}function vf(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},zp(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=rn(i):(i=Bt(e)?Ns:At.current,s.context=Ui(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(_f(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&Yc.enqueueReplaceState(s,s.state,null),dc(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function qi(t,e){try{var n="",r=e;do n+=BA(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function Th(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function wf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var m1=typeof WeakMap=="function"?WeakMap:Map;function TE(t,e,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){gc||(gc=!0,Pf=r),wf(t,e)},n}function xE(t,e,n){n=jn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){wf(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){wf(t,e),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function f_(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new m1;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=C1.bind(null,t,e,n),e.then(t,t))}function p_(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function m_(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=jn(-1,1),e.tag=2,Nr(n,e,1))),n.lanes|=1),t)}var g1=Yn.ReactCurrentOwner,Lt=!1;function Ct(t,e,n,r){e.child=t===null?Zw(e,null,n,r):Bi(e,t.child,n,r)}function g_(t,e,n,r,s){n=n.render;var i=e.ref;return Ni(e,s),r=Kp(t,e,n,r,i,s),n=Hp(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,$n(t,e,s)):(Oe&&n&&Vp(e),e.flags|=1,Ct(t,e,r,s),e.child)}function y_(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!rm(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,SE(t,e,i,r,s)):(t=Du(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ka,n(o,r)&&t.ref===e.ref)return $n(t,e,s)}return e.flags|=1,t=Or(i,r),t.ref=e.ref,t.return=e,e.child=t}function SE(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(ka(i,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,$n(t,e,s)}return Ef(t,e,n,r,s)}function AE(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xe(Ai,Gt),Gt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xe(Ai,Gt),Gt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,xe(Ai,Gt),Gt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,xe(Ai,Gt),Gt|=r;return Ct(t,e,s,n),e.child}function RE(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ef(t,e,n,r,s){var i=Bt(n)?Ns:At.current;return i=Ui(e,i),Ni(e,s),n=Kp(t,e,n,r,i,s),r=Hp(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,$n(t,e,s)):(Oe&&r&&Vp(e),e.flags|=1,Ct(t,e,n,s),e.child)}function __(t,e,n,r,s){if(Bt(n)){var i=!0;oc(e)}else i=!1;if(Ni(e,s),e.stateNode===null)Pu(t,e),IE(e,n,r),vf(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=rn(c):(c=Bt(n)?Ns:At.current,c=Ui(e,c));var h=n.getDerivedStateFromProps,f=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==c)&&h_(e,o,r,c),dr=!1;var m=e.memoizedState;o.state=m,dc(e,r,o,s),u=e.memoizedState,a!==r||m!==u||zt.current||dr?(typeof h=="function"&&(_f(e,n,h,r),u=e.memoizedState),(a=dr||d_(e,n,a,r,m,u,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=c,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,tE(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ln(e.type,a),o.props=c,f=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=rn(u):(u=Bt(n)?Ns:At.current,u=Ui(e,u));var y=n.getDerivedStateFromProps;(h=typeof y=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||m!==u)&&h_(e,o,r,u),dr=!1,m=e.memoizedState,o.state=m,dc(e,r,o,s);var E=e.memoizedState;a!==f||m!==E||zt.current||dr?(typeof y=="function"&&(_f(e,n,y,r),E=e.memoizedState),(c=dr||d_(e,n,c,r,m,E,u)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,E,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,E,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=E),o.props=r,o.state=E,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return If(t,e,n,r,i,s)}function If(t,e,n,r,s,i){RE(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&r_(e,n,!1),$n(t,e,i);r=e.stateNode,g1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Bi(e,t.child,null,i),e.child=Bi(e,null,a,i)):Ct(t,e,a,i),e.memoizedState=r.state,s&&r_(e,n,!0),e.child}function bE(t){var e=t.stateNode;e.pendingContext?n_(t,e.pendingContext,e.pendingContext!==e.context):e.context&&n_(t,e.context,!1),Bp(t,e.containerInfo)}function v_(t,e,n,r,s){return zi(),Mp(s),e.flags|=256,Ct(t,e,n,r),e.child}var Tf={dehydrated:null,treeContext:null,retryLane:0};function xf(t){return{baseLanes:t,cachePool:null,transitions:null}}function CE(t,e,n){var r=e.pendingProps,s=je.current,i=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(s&2)!==0),a?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),xe(je,s&1),t===null)return gf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=Zc(o,r,0,null),t=bs(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=xf(n),e.memoizedState=Tf,t):Yp(e,o));if(s=t.memoizedState,s!==null&&(a=s.dehydrated,a!==null))return y1(t,e,o,r,a,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,a=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Or(s,u),r.subtreeFlags=s.subtreeFlags&14680064),a!==null?i=Or(a,i):(i=bs(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?xf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Tf,r}return i=t.child,t=i.sibling,r=Or(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Yp(t,e){return e=Zc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lu(t,e,n,r){return r!==null&&Mp(r),Bi(e,t.child,null,n),t=Yp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function y1(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=Th(Error(B(422))),lu(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=Zc({mode:"visible",children:r.children},s,0,null),i=bs(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Bi(e,t.child,null,o),e.child.memoizedState=xf(o),e.memoizedState=Tf,i);if(!(e.mode&1))return lu(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(B(419)),r=Th(i,r,void 0),lu(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=ot,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Bn(t,s),hn(r,t,s,-1))}return nm(),r=Th(Error(B(421))),lu(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=P1.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Kt=kr(s.nextSibling),Ht=e,Oe=!0,cn=null,t!==null&&(Zt[en++]=Dn,Zt[en++]=Vn,Zt[en++]=Ds,Dn=t.id,Vn=t.overflow,Ds=e),e=Yp(e,r.children),e.flags|=4096,e)}function w_(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),yf(t.return,e,n)}function xh(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function PE(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(Ct(t,e,r.children,n),r=je.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&w_(t,n,e);else if(t.tag===19)w_(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(xe(je,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&hc(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),xh(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&hc(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}xh(e,!0,n,null,i);break;case"together":xh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pu(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function $n(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Os|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(B(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _1(t,e,n){switch(e.tag){case 3:bE(e),zi();break;case 5:nE(e);break;case 1:Bt(e.type)&&oc(e);break;case 4:Bp(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;xe(uc,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(xe(je,je.current&1),e.flags|=128,null):n&e.child.childLanes?CE(t,e,n):(xe(je,je.current&1),t=$n(t,e,n),t!==null?t.sibling:null);xe(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return PE(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),xe(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,AE(t,e,n)}return $n(t,e,n)}var kE,Sf,NE,DE;kE=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Sf=function(){};NE=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,As(In.current);var i=null;switch(n){case"input":s=Kh(t,s),r=Kh(t,r),i=[];break;case"select":s=ze({},s,{value:void 0}),r=ze({},r,{value:void 0}),i=[];break;case"textarea":s=Qh(t,s),r=Qh(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=sc)}Jh(n,r);var o;n=null;for(c in s)if(!r.hasOwnProperty(c)&&s.hasOwnProperty(c)&&s[c]!=null)if(c==="style"){var a=s[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(a=s!=null?s[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&Pe("scroll",t),i||a===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(e.updateQueue=c)&&(e.flags|=4)}};DE=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ko(t,e){if(!Oe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function vt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function v1(t,e,n){var r=e.pendingProps;switch(Op(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(e),null;case 1:return Bt(e.type)&&ic(),vt(e),null;case 3:return r=e.stateNode,$i(),De(zt),De(At),qp(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ou(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,cn!==null&&(Df(cn),cn=null))),Sf(t,e),vt(e),null;case 5:$p(e);var s=As(Ma.current);if(n=e.type,t!==null&&e.stateNode!=null)NE(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(B(166));return vt(e),null}if(t=As(In.current),ou(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[yn]=e,r[Va]=i,t=(e.mode&1)!==0,n){case"dialog":Pe("cancel",r),Pe("close",r);break;case"iframe":case"object":case"embed":Pe("load",r);break;case"video":case"audio":for(s=0;s<na.length;s++)Pe(na[s],r);break;case"source":Pe("error",r);break;case"img":case"image":case"link":Pe("error",r),Pe("load",r);break;case"details":Pe("toggle",r);break;case"input":Cy(r,i),Pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Pe("invalid",r);break;case"textarea":ky(r,i),Pe("invalid",r)}Jh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var a=i[o];o==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&iu(r.textContent,a,t),s=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&iu(r.textContent,a,t),s=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Pe("scroll",r)}switch(n){case"input":Jl(r),Py(r,i,!0);break;case"textarea":Jl(r),Ny(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=sc)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=aw(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[yn]=e,t[Va]=r,kE(t,e,!1,!1),e.stateNode=t;e:{switch(o=Xh(n,r),n){case"dialog":Pe("cancel",t),Pe("close",t),s=r;break;case"iframe":case"object":case"embed":Pe("load",t),s=r;break;case"video":case"audio":for(s=0;s<na.length;s++)Pe(na[s],t);s=r;break;case"source":Pe("error",t),s=r;break;case"img":case"image":case"link":Pe("error",t),Pe("load",t),s=r;break;case"details":Pe("toggle",t),s=r;break;case"input":Cy(t,r),s=Kh(t,r),Pe("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=ze({},r,{value:void 0}),Pe("invalid",t);break;case"textarea":ky(t,r),s=Qh(t,r),Pe("invalid",t);break;default:s=r}Jh(n,s),a=s;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?cw(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&lw(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Sa(t,u):typeof u=="number"&&Sa(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(xa.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Pe("scroll",t):u!=null&&wp(t,i,u,o))}switch(n){case"input":Jl(t),Py(t,r,!1);break;case"textarea":Jl(t),Ny(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ur(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?bi(t,!!r.multiple,i,!1):r.defaultValue!=null&&bi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=sc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return vt(e),null;case 6:if(t&&e.stateNode!=null)DE(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(B(166));if(n=As(Ma.current),As(In.current),ou(e)){if(r=e.stateNode,n=e.memoizedProps,r[yn]=e,(i=r.nodeValue!==n)&&(t=Ht,t!==null))switch(t.tag){case 3:iu(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&iu(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[yn]=e,e.stateNode=r}return vt(e),null;case 13:if(De(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Oe&&Kt!==null&&e.mode&1&&!(e.flags&128))Jw(),zi(),e.flags|=98560,i=!1;else if(i=ou(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(B(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(B(317));i[yn]=e}else zi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;vt(e),i=!1}else cn!==null&&(Df(cn),cn=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||je.current&1?Ze===0&&(Ze=3):nm())),e.updateQueue!==null&&(e.flags|=4),vt(e),null);case 4:return $i(),Sf(t,e),t===null&&Na(e.stateNode.containerInfo),vt(e),null;case 10:return jp(e.type._context),vt(e),null;case 17:return Bt(e.type)&&ic(),vt(e),null;case 19:if(De(je),i=e.memoizedState,i===null)return vt(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Ko(i,!1);else{if(Ze!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=hc(t),o!==null){for(e.flags|=128,Ko(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xe(je,je.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ke()>Gi&&(e.flags|=128,r=!0,Ko(i,!1),e.lanes=4194304)}else{if(!r)if(t=hc(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ko(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Oe)return vt(e),null}else 2*Ke()-i.renderingStartTime>Gi&&n!==1073741824&&(e.flags|=128,r=!0,Ko(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ke(),e.sibling=null,n=je.current,xe(je,r?n&1|2:n&1),e):(vt(e),null);case 22:case 23:return tm(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Gt&1073741824&&(vt(e),e.subtreeFlags&6&&(e.flags|=8192)):vt(e),null;case 24:return null;case 25:return null}throw Error(B(156,e.tag))}function w1(t,e){switch(Op(e),e.tag){case 1:return Bt(e.type)&&ic(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return $i(),De(zt),De(At),qp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return $p(e),null;case 13:if(De(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(B(340));zi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(je),null;case 4:return $i(),null;case 10:return jp(e.type._context),null;case 22:case 23:return tm(),null;case 24:return null;default:return null}}var uu=!1,It=!1,E1=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Si(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){qe(t,e,r)}else n.current=null}function Af(t,e,n){try{n()}catch(r){qe(t,e,r)}}var E_=!1;function I1(t,e){if(uf=tc,t=Fw(),Dp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,a=-1,u=-1,c=0,h=0,f=t,m=null;t:for(;;){for(var y;f!==n||s!==0&&f.nodeType!==3||(a=o+s),f!==i||r!==0&&f.nodeType!==3||(u=o+r),f.nodeType===3&&(o+=f.nodeValue.length),(y=f.firstChild)!==null;)m=f,f=y;for(;;){if(f===t)break t;if(m===n&&++c===s&&(a=o),m===i&&++h===r&&(u=o),(y=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=y}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(cf={focusedElem:t,selectionRange:n},tc=!1,Q=e;Q!==null;)if(e=Q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Q=t;else for(;Q!==null;){e=Q;try{var E=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(E!==null){var b=E.memoizedProps,D=E.memoizedState,I=e.stateNode,w=I.getSnapshotBeforeUpdate(e.elementType===e.type?b:ln(e.type,b),D);I.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(B(163))}}catch(V){qe(e,e.return,V)}if(t=e.sibling,t!==null){t.return=e.return,Q=t;break}Q=e.return}return E=E_,E_=!1,E}function fa(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Af(e,n,i)}s=s.next}while(s!==r)}}function Jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Rf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function VE(t){var e=t.alternate;e!==null&&(t.alternate=null,VE(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[yn],delete e[Va],delete e[ff],delete e[s1],delete e[i1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function OE(t){return t.tag===5||t.tag===3||t.tag===4}function I_(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||OE(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=sc));else if(r!==4&&(t=t.child,t!==null))for(bf(t,e,n),t=t.sibling;t!==null;)bf(t,e,n),t=t.sibling}function Cf(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Cf(t,e,n),t=t.sibling;t!==null;)Cf(t,e,n),t=t.sibling}var ct=null,un=!1;function ir(t,e,n){for(n=n.child;n!==null;)ME(t,e,n),n=n.sibling}function ME(t,e,n){if(En&&typeof En.onCommitFiberUnmount=="function")try{En.onCommitFiberUnmount($c,n)}catch{}switch(n.tag){case 5:It||Si(n,e);case 6:var r=ct,s=un;ct=null,ir(t,e,n),ct=r,un=s,ct!==null&&(un?(t=ct,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):ct.removeChild(n.stateNode));break;case 18:ct!==null&&(un?(t=ct,n=n.stateNode,t.nodeType===8?yh(t.parentNode,n):t.nodeType===1&&yh(t,n),Ca(t)):yh(ct,n.stateNode));break;case 4:r=ct,s=un,ct=n.stateNode.containerInfo,un=!0,ir(t,e,n),ct=r,un=s;break;case 0:case 11:case 14:case 15:if(!It&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Af(n,e,o),s=s.next}while(s!==r)}ir(t,e,n);break;case 1:if(!It&&(Si(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){qe(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(It=(r=It)||n.memoizedState!==null,ir(t,e,n),It=r):ir(t,e,n);break;default:ir(t,e,n)}}function T_(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new E1),e.forEach(function(r){var s=k1.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function an(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:ct=a.stateNode,un=!1;break e;case 3:ct=a.stateNode.containerInfo,un=!0;break e;case 4:ct=a.stateNode.containerInfo,un=!0;break e}a=a.return}if(ct===null)throw Error(B(160));ME(i,o,s),ct=null,un=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(c){qe(s,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)LE(e,t),e=e.sibling}function LE(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(an(e,t),mn(t),r&4){try{fa(3,t,t.return),Jc(3,t)}catch(b){qe(t,t.return,b)}try{fa(5,t,t.return)}catch(b){qe(t,t.return,b)}}break;case 1:an(e,t),mn(t),r&512&&n!==null&&Si(n,n.return);break;case 5:if(an(e,t),mn(t),r&512&&n!==null&&Si(n,n.return),t.flags&32){var s=t.stateNode;try{Sa(s,"")}catch(b){qe(t,t.return,b)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,a=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&iw(s,i),Xh(a,o);var c=Xh(a,i);for(o=0;o<u.length;o+=2){var h=u[o],f=u[o+1];h==="style"?cw(s,f):h==="dangerouslySetInnerHTML"?lw(s,f):h==="children"?Sa(s,f):wp(s,h,f,c)}switch(a){case"input":Hh(s,i);break;case"textarea":ow(s,i);break;case"select":var m=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var y=i.value;y!=null?bi(s,!!i.multiple,y,!1):m!==!!i.multiple&&(i.defaultValue!=null?bi(s,!!i.multiple,i.defaultValue,!0):bi(s,!!i.multiple,i.multiple?[]:"",!1))}s[Va]=i}catch(b){qe(t,t.return,b)}}break;case 6:if(an(e,t),mn(t),r&4){if(t.stateNode===null)throw Error(B(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(b){qe(t,t.return,b)}}break;case 3:if(an(e,t),mn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ca(e.containerInfo)}catch(b){qe(t,t.return,b)}break;case 4:an(e,t),mn(t);break;case 13:an(e,t),mn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Zp=Ke())),r&4&&T_(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(It=(c=It)||h,an(e,t),It=c):an(e,t),mn(t),r&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!h&&t.mode&1)for(Q=t,h=t.child;h!==null;){for(f=Q=h;Q!==null;){switch(m=Q,y=m.child,m.tag){case 0:case 11:case 14:case 15:fa(4,m,m.return);break;case 1:Si(m,m.return);var E=m.stateNode;if(typeof E.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,E.props=e.memoizedProps,E.state=e.memoizedState,E.componentWillUnmount()}catch(b){qe(r,n,b)}}break;case 5:Si(m,m.return);break;case 22:if(m.memoizedState!==null){S_(f);continue}}y!==null?(y.return=m,Q=y):S_(f)}h=h.sibling}e:for(h=null,f=t;;){if(f.tag===5){if(h===null){h=f;try{s=f.stateNode,c?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,u=f.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=uw("display",o))}catch(b){qe(t,t.return,b)}}}else if(f.tag===6){if(h===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(b){qe(t,t.return,b)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;h===f&&(h=null),f=f.return}h===f&&(h=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:an(e,t),mn(t),r&4&&T_(t);break;case 21:break;default:an(e,t),mn(t)}}function mn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(OE(n)){var r=n;break e}n=n.return}throw Error(B(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(Sa(s,""),r.flags&=-33);var i=I_(t);Cf(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,a=I_(t);bf(t,a,o);break;default:throw Error(B(161))}}catch(u){qe(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function T1(t,e,n){Q=t,FE(t)}function FE(t,e,n){for(var r=(t.mode&1)!==0;Q!==null;){var s=Q,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||uu;if(!o){var a=s.alternate,u=a!==null&&a.memoizedState!==null||It;a=uu;var c=It;if(uu=o,(It=u)&&!c)for(Q=s;Q!==null;)o=Q,u=o.child,o.tag===22&&o.memoizedState!==null?A_(s):u!==null?(u.return=o,Q=u):A_(s);for(;i!==null;)Q=i,FE(i),i=i.sibling;Q=s,uu=a,It=c}x_(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,Q=i):x_(t)}}function x_(t){for(;Q!==null;){var e=Q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:It||Jc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!It)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:ln(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&l_(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}l_(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var h=c.memoizedState;if(h!==null){var f=h.dehydrated;f!==null&&Ca(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(B(163))}It||e.flags&512&&Rf(e)}catch(m){qe(e,e.return,m)}}if(e===t){Q=null;break}if(n=e.sibling,n!==null){n.return=e.return,Q=n;break}Q=e.return}}function S_(t){for(;Q!==null;){var e=Q;if(e===t){Q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Q=n;break}Q=e.return}}function A_(t){for(;Q!==null;){var e=Q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Jc(4,e)}catch(u){qe(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){qe(e,s,u)}}var i=e.return;try{Rf(e)}catch(u){qe(e,i,u)}break;case 5:var o=e.return;try{Rf(e)}catch(u){qe(e,o,u)}}}catch(u){qe(e,e.return,u)}if(e===t){Q=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Q=a;break}Q=e.return}}var x1=Math.ceil,mc=Yn.ReactCurrentDispatcher,Jp=Yn.ReactCurrentOwner,nn=Yn.ReactCurrentBatchConfig,he=0,ot=null,Ye=null,ft=0,Gt=0,Ai=Zr(0),Ze=0,Ua=null,Os=0,Xc=0,Xp=0,pa=null,Mt=null,Zp=0,Gi=1/0,kn=null,gc=!1,Pf=null,Dr=null,cu=!1,xr=null,yc=0,ma=0,kf=null,ku=-1,Nu=0;function Pt(){return he&6?Ke():ku!==-1?ku:ku=Ke()}function Vr(t){return t.mode&1?he&2&&ft!==0?ft&-ft:a1.transition!==null?(Nu===0&&(Nu=Iw()),Nu):(t=_e,t!==0||(t=window.event,t=t===void 0?16:Cw(t.type)),t):1}function hn(t,e,n,r){if(50<ma)throw ma=0,kf=null,Error(B(185));rl(t,n,r),(!(he&2)||t!==ot)&&(t===ot&&(!(he&2)&&(Xc|=n),Ze===4&&pr(t,ft)),$t(t,r),n===1&&he===0&&!(e.mode&1)&&(Gi=Ke()+500,Wc&&es()))}function $t(t,e){var n=t.callbackNode;aR(t,e);var r=ec(t,t===ot?ft:0);if(r===0)n!==null&&Oy(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Oy(n),e===1)t.tag===0?o1(R_.bind(null,t)):Ww(R_.bind(null,t)),n1(function(){!(he&6)&&es()}),n=null;else{switch(Tw(r)){case 1:n=Sp;break;case 4:n=ww;break;case 16:n=Zu;break;case 536870912:n=Ew;break;default:n=Zu}n=KE(n,jE.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function jE(t,e){if(ku=-1,Nu=0,he&6)throw Error(B(327));var n=t.callbackNode;if(Di()&&t.callbackNode!==n)return null;var r=ec(t,t===ot?ft:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=_c(t,r);else{e=r;var s=he;he|=2;var i=zE();(ot!==t||ft!==e)&&(kn=null,Gi=Ke()+500,Rs(t,e));do try{R1();break}catch(a){UE(t,a)}while(!0);Fp(),mc.current=i,he=s,Ye!==null?e=0:(ot=null,ft=0,e=Ze)}if(e!==0){if(e===2&&(s=rf(t),s!==0&&(r=s,e=Nf(t,s))),e===1)throw n=Ua,Rs(t,0),pr(t,r),$t(t,Ke()),n;if(e===6)pr(t,r);else{if(s=t.current.alternate,!(r&30)&&!S1(s)&&(e=_c(t,r),e===2&&(i=rf(t),i!==0&&(r=i,e=Nf(t,i))),e===1))throw n=Ua,Rs(t,0),pr(t,r),$t(t,Ke()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(B(345));case 2:ms(t,Mt,kn);break;case 3:if(pr(t,r),(r&130023424)===r&&(e=Zp+500-Ke(),10<e)){if(ec(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){Pt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=hf(ms.bind(null,t,Mt,kn),e);break}ms(t,Mt,kn);break;case 4:if(pr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-dn(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ke()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*x1(r/1960))-r,10<r){t.timeoutHandle=hf(ms.bind(null,t,Mt,kn),r);break}ms(t,Mt,kn);break;case 5:ms(t,Mt,kn);break;default:throw Error(B(329))}}}return $t(t,Ke()),t.callbackNode===n?jE.bind(null,t):null}function Nf(t,e){var n=pa;return t.current.memoizedState.isDehydrated&&(Rs(t,e).flags|=256),t=_c(t,e),t!==2&&(e=Mt,Mt=n,e!==null&&Df(e)),t}function Df(t){Mt===null?Mt=t:Mt.push.apply(Mt,t)}function S1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!pn(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function pr(t,e){for(e&=~Xp,e&=~Xc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-dn(e),r=1<<n;t[n]=-1,e&=~r}}function R_(t){if(he&6)throw Error(B(327));Di();var e=ec(t,0);if(!(e&1))return $t(t,Ke()),null;var n=_c(t,e);if(t.tag!==0&&n===2){var r=rf(t);r!==0&&(e=r,n=Nf(t,r))}if(n===1)throw n=Ua,Rs(t,0),pr(t,e),$t(t,Ke()),n;if(n===6)throw Error(B(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,ms(t,Mt,kn),$t(t,Ke()),null}function em(t,e){var n=he;he|=1;try{return t(e)}finally{he=n,he===0&&(Gi=Ke()+500,Wc&&es())}}function Ms(t){xr!==null&&xr.tag===0&&!(he&6)&&Di();var e=he;he|=1;var n=nn.transition,r=_e;try{if(nn.transition=null,_e=1,t)return t()}finally{_e=r,nn.transition=n,he=e,!(he&6)&&es()}}function tm(){Gt=Ai.current,De(Ai)}function Rs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,t1(n)),Ye!==null)for(n=Ye.return;n!==null;){var r=n;switch(Op(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ic();break;case 3:$i(),De(zt),De(At),qp();break;case 5:$p(r);break;case 4:$i();break;case 13:De(je);break;case 19:De(je);break;case 10:jp(r.type._context);break;case 22:case 23:tm()}n=n.return}if(ot=t,Ye=t=Or(t.current,null),ft=Gt=e,Ze=0,Ua=null,Xp=Xc=Os=0,Mt=pa=null,Ss!==null){for(e=0;e<Ss.length;e++)if(n=Ss[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}Ss=null}return t}function UE(t,e){do{var n=Ye;try{if(Fp(),bu.current=pc,fc){for(var r=Ue.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}fc=!1}if(Vs=0,st=Je=Ue=null,ha=!1,La=0,Jp.current=null,n===null||n.return===null){Ze=1,Ua=e,Ye=null;break}e:{var i=t,o=n.return,a=n,u=e;if(e=ft,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,h=a,f=h.tag;if(!(h.mode&1)&&(f===0||f===11||f===15)){var m=h.alternate;m?(h.updateQueue=m.updateQueue,h.memoizedState=m.memoizedState,h.lanes=m.lanes):(h.updateQueue=null,h.memoizedState=null)}var y=p_(o);if(y!==null){y.flags&=-257,m_(y,o,a,i,e),y.mode&1&&f_(i,c,e),e=y,u=c;var E=e.updateQueue;if(E===null){var b=new Set;b.add(u),e.updateQueue=b}else E.add(u);break e}else{if(!(e&1)){f_(i,c,e),nm();break e}u=Error(B(426))}}else if(Oe&&a.mode&1){var D=p_(o);if(D!==null){!(D.flags&65536)&&(D.flags|=256),m_(D,o,a,i,e),Mp(qi(u,a));break e}}i=u=qi(u,a),Ze!==4&&(Ze=2),pa===null?pa=[i]:pa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var I=TE(i,u,e);a_(i,I);break e;case 1:a=u;var w=i.type,x=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Dr===null||!Dr.has(x)))){i.flags|=65536,e&=-e,i.lanes|=e;var V=xE(i,a,e);a_(i,V);break e}}i=i.return}while(i!==null)}$E(n)}catch(z){e=z,Ye===n&&n!==null&&(Ye=n=n.return);continue}break}while(!0)}function zE(){var t=mc.current;return mc.current=pc,t===null?pc:t}function nm(){(Ze===0||Ze===3||Ze===2)&&(Ze=4),ot===null||!(Os&268435455)&&!(Xc&268435455)||pr(ot,ft)}function _c(t,e){var n=he;he|=2;var r=zE();(ot!==t||ft!==e)&&(kn=null,Rs(t,e));do try{A1();break}catch(s){UE(t,s)}while(!0);if(Fp(),he=n,mc.current=r,Ye!==null)throw Error(B(261));return ot=null,ft=0,Ze}function A1(){for(;Ye!==null;)BE(Ye)}function R1(){for(;Ye!==null&&!XA();)BE(Ye)}function BE(t){var e=GE(t.alternate,t,Gt);t.memoizedProps=t.pendingProps,e===null?$E(t):Ye=e,Jp.current=null}function $E(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=w1(n,e),n!==null){n.flags&=32767,Ye=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ze=6,Ye=null;return}}else if(n=v1(n,e,Gt),n!==null){Ye=n;return}if(e=e.sibling,e!==null){Ye=e;return}Ye=e=t}while(e!==null);Ze===0&&(Ze=5)}function ms(t,e,n){var r=_e,s=nn.transition;try{nn.transition=null,_e=1,b1(t,e,n,r)}finally{nn.transition=s,_e=r}return null}function b1(t,e,n,r){do Di();while(xr!==null);if(he&6)throw Error(B(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(B(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(lR(t,i),t===ot&&(Ye=ot=null,ft=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||cu||(cu=!0,KE(Zu,function(){return Di(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=nn.transition,nn.transition=null;var o=_e;_e=1;var a=he;he|=4,Jp.current=null,I1(t,n),LE(n,t),WR(cf),tc=!!uf,cf=uf=null,t.current=n,T1(n),ZA(),he=a,_e=o,nn.transition=i}else t.current=n;if(cu&&(cu=!1,xr=t,yc=s),i=t.pendingLanes,i===0&&(Dr=null),nR(n.stateNode),$t(t,Ke()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(gc)throw gc=!1,t=Pf,Pf=null,t;return yc&1&&t.tag!==0&&Di(),i=t.pendingLanes,i&1?t===kf?ma++:(ma=0,kf=t):ma=0,es(),null}function Di(){if(xr!==null){var t=Tw(yc),e=nn.transition,n=_e;try{if(nn.transition=null,_e=16>t?16:t,xr===null)var r=!1;else{if(t=xr,xr=null,yc=0,he&6)throw Error(B(331));var s=he;for(he|=4,Q=t.current;Q!==null;){var i=Q,o=i.child;if(Q.flags&16){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(Q=c;Q!==null;){var h=Q;switch(h.tag){case 0:case 11:case 15:fa(8,h,i)}var f=h.child;if(f!==null)f.return=h,Q=f;else for(;Q!==null;){h=Q;var m=h.sibling,y=h.return;if(VE(h),h===c){Q=null;break}if(m!==null){m.return=y,Q=m;break}Q=y}}}var E=i.alternate;if(E!==null){var b=E.child;if(b!==null){E.child=null;do{var D=b.sibling;b.sibling=null,b=D}while(b!==null)}}Q=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,Q=o;else e:for(;Q!==null;){if(i=Q,i.flags&2048)switch(i.tag){case 0:case 11:case 15:fa(9,i,i.return)}var I=i.sibling;if(I!==null){I.return=i.return,Q=I;break e}Q=i.return}}var w=t.current;for(Q=w;Q!==null;){o=Q;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Q=x;else e:for(o=w;Q!==null;){if(a=Q,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Jc(9,a)}}catch(z){qe(a,a.return,z)}if(a===o){Q=null;break e}var V=a.sibling;if(V!==null){V.return=a.return,Q=V;break e}Q=a.return}}if(he=s,es(),En&&typeof En.onPostCommitFiberRoot=="function")try{En.onPostCommitFiberRoot($c,t)}catch{}r=!0}return r}finally{_e=n,nn.transition=e}}return!1}function b_(t,e,n){e=qi(n,e),e=TE(t,e,1),t=Nr(t,e,1),e=Pt(),t!==null&&(rl(t,1,e),$t(t,e))}function qe(t,e,n){if(t.tag===3)b_(t,t,n);else for(;e!==null;){if(e.tag===3){b_(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){t=qi(n,t),t=xE(e,t,1),e=Nr(e,t,1),t=Pt(),e!==null&&(rl(e,1,t),$t(e,t));break}}e=e.return}}function C1(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pt(),t.pingedLanes|=t.suspendedLanes&n,ot===t&&(ft&n)===n&&(Ze===4||Ze===3&&(ft&130023424)===ft&&500>Ke()-Zp?Rs(t,0):Xp|=n),$t(t,e)}function qE(t,e){e===0&&(t.mode&1?(e=eu,eu<<=1,!(eu&130023424)&&(eu=4194304)):e=1);var n=Pt();t=Bn(t,e),t!==null&&(rl(t,e,n),$t(t,n))}function P1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),qE(t,n)}function k1(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(B(314))}r!==null&&r.delete(e),qE(t,n)}var GE;GE=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||zt.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,_1(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Oe&&e.flags&1048576&&Qw(e,lc,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Pu(t,e),t=e.pendingProps;var s=Ui(e,At.current);Ni(e,n),s=Kp(null,e,r,t,s,n);var i=Hp();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Bt(r)?(i=!0,oc(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,zp(e),s.updater=Yc,e.stateNode=s,s._reactInternals=e,vf(e,r,t,n),e=If(null,e,r,!0,i,n)):(e.tag=0,Oe&&i&&Vp(e),Ct(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Pu(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=D1(r),t=ln(r,t),s){case 0:e=Ef(null,e,r,t,n);break e;case 1:e=__(null,e,r,t,n);break e;case 11:e=g_(null,e,r,t,n);break e;case 14:e=y_(null,e,r,ln(r.type,t),n);break e}throw Error(B(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Ef(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),__(t,e,r,s,n);case 3:e:{if(bE(e),t===null)throw Error(B(387));r=e.pendingProps,i=e.memoizedState,s=i.element,tE(t,e),dc(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=qi(Error(B(423)),e),e=v_(t,e,r,n,s);break e}else if(r!==s){s=qi(Error(B(424)),e),e=v_(t,e,r,n,s);break e}else for(Kt=kr(e.stateNode.containerInfo.firstChild),Ht=e,Oe=!0,cn=null,n=Zw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(zi(),r===s){e=$n(t,e,n);break e}Ct(t,e,r,n)}e=e.child}return e;case 5:return nE(e),t===null&&gf(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,df(r,s)?o=null:i!==null&&df(r,i)&&(e.flags|=32),RE(t,e),Ct(t,e,o,n),e.child;case 6:return t===null&&gf(e),null;case 13:return CE(t,e,n);case 4:return Bp(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Bi(e,null,r,n):Ct(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),g_(t,e,r,s,n);case 7:return Ct(t,e,e.pendingProps,n),e.child;case 8:return Ct(t,e,e.pendingProps.children,n),e.child;case 12:return Ct(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,xe(uc,r._currentValue),r._currentValue=o,i!==null)if(pn(i.value,o)){if(i.children===s.children&&!zt.current){e=$n(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var a=i.dependencies;if(a!==null){o=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=jn(-1,n&-n),u.tag=2;var c=i.updateQueue;if(c!==null){c=c.shared;var h=c.pending;h===null?u.next=u:(u.next=h.next,h.next=u),c.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),yf(i.return,n,e),a.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(B(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),yf(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}Ct(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Ni(e,n),s=rn(s),r=r(s),e.flags|=1,Ct(t,e,r,n),e.child;case 14:return r=e.type,s=ln(r,e.pendingProps),s=ln(r.type,s),y_(t,e,r,s,n);case 15:return SE(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:ln(r,s),Pu(t,e),e.tag=1,Bt(r)?(t=!0,oc(e)):t=!1,Ni(e,n),IE(e,r,s),vf(e,r,s,n),If(null,e,r,!0,t,n);case 19:return PE(t,e,n);case 22:return AE(t,e,n)}throw Error(B(156,e.tag))};function KE(t,e){return vw(t,e)}function N1(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function tn(t,e,n,r){return new N1(t,e,n,r)}function rm(t){return t=t.prototype,!(!t||!t.isReactComponent)}function D1(t){if(typeof t=="function")return rm(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ip)return 11;if(t===Tp)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=tn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Du(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")rm(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case gi:return bs(n.children,s,i,e);case Ep:o=8,s|=8;break;case Bh:return t=tn(12,n,e,s|2),t.elementType=Bh,t.lanes=i,t;case $h:return t=tn(13,n,e,s),t.elementType=$h,t.lanes=i,t;case qh:return t=tn(19,n,e,s),t.elementType=qh,t.lanes=i,t;case nw:return Zc(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ew:o=10;break e;case tw:o=9;break e;case Ip:o=11;break e;case Tp:o=14;break e;case cr:o=16,r=null;break e}throw Error(B(130,t==null?t:typeof t,""))}return e=tn(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function bs(t,e,n,r){return t=tn(7,t,r,e),t.lanes=n,t}function Zc(t,e,n,r){return t=tn(22,t,r,e),t.elementType=nw,t.lanes=n,t.stateNode={isHidden:!1},t}function Sh(t,e,n){return t=tn(6,t,null,e),t.lanes=n,t}function Ah(t,e,n){return e=tn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function V1(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oh(0),this.expirationTimes=oh(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oh(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function sm(t,e,n,r,s,i,o,a,u){return t=new V1(t,e,n,a,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=tn(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},zp(i),t}function O1(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:mi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function HE(t){if(!t)return zr;t=t._reactInternals;e:{if(Ys(t)!==t||t.tag!==1)throw Error(B(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Bt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(B(171))}if(t.tag===1){var n=t.type;if(Bt(n))return Hw(t,n,e)}return e}function WE(t,e,n,r,s,i,o,a,u){return t=sm(n,r,!0,t,s,i,o,a,u),t.context=HE(null),n=t.current,r=Pt(),s=Vr(n),i=jn(r,s),i.callback=e??null,Nr(n,i,s),t.current.lanes=s,rl(t,s,r),$t(t,r),t}function ed(t,e,n,r){var s=e.current,i=Pt(),o=Vr(s);return n=HE(n),e.context===null?e.context=n:e.pendingContext=n,e=jn(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Nr(s,e,o),t!==null&&(hn(t,s,o,i),Ru(t,s,o)),o}function vc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function C_(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function im(t,e){C_(t,e),(t=t.alternate)&&C_(t,e)}function M1(){return null}var QE=typeof reportError=="function"?reportError:function(t){console.error(t)};function om(t){this._internalRoot=t}td.prototype.render=om.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(B(409));ed(t,e,null,null)};td.prototype.unmount=om.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ms(function(){ed(null,t,null,null)}),e[zn]=null}};function td(t){this._internalRoot=t}td.prototype.unstable_scheduleHydration=function(t){if(t){var e=Aw();t={blockedOn:null,target:t,priority:e};for(var n=0;n<fr.length&&e!==0&&e<fr[n].priority;n++);fr.splice(n,0,t),n===0&&bw(t)}};function am(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function P_(){}function L1(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var c=vc(o);i.call(c)}}var o=WE(e,r,t,0,null,!1,!1,"",P_);return t._reactRootContainer=o,t[zn]=o.current,Na(t.nodeType===8?t.parentNode:t),Ms(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var a=r;r=function(){var c=vc(u);a.call(c)}}var u=sm(t,0,!1,null,null,!1,!1,"",P_);return t._reactRootContainer=u,t[zn]=u.current,Na(t.nodeType===8?t.parentNode:t),Ms(function(){ed(e,u,n,r)}),u}function rd(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var a=s;s=function(){var u=vc(o);a.call(u)}}ed(e,o,t,s)}else o=L1(n,e,t,s,r);return vc(o)}xw=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ta(e.pendingLanes);n!==0&&(Ap(e,n|1),$t(e,Ke()),!(he&6)&&(Gi=Ke()+500,es()))}break;case 13:Ms(function(){var r=Bn(t,1);if(r!==null){var s=Pt();hn(r,t,1,s)}}),im(t,1)}};Rp=function(t){if(t.tag===13){var e=Bn(t,134217728);if(e!==null){var n=Pt();hn(e,t,134217728,n)}im(t,134217728)}};Sw=function(t){if(t.tag===13){var e=Vr(t),n=Bn(t,e);if(n!==null){var r=Pt();hn(n,t,e,r)}im(t,e)}};Aw=function(){return _e};Rw=function(t,e){var n=_e;try{return _e=t,e()}finally{_e=n}};ef=function(t,e,n){switch(e){case"input":if(Hh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=Hc(r);if(!s)throw Error(B(90));sw(r),Hh(r,s)}}}break;case"textarea":ow(t,n);break;case"select":e=n.value,e!=null&&bi(t,!!n.multiple,e,!1)}};fw=em;pw=Ms;var F1={usingClientEntryPoint:!1,Events:[il,wi,Hc,dw,hw,em]},Ho={findFiberByHostInstance:xs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j1={bundleType:Ho.bundleType,version:Ho.version,rendererPackageName:Ho.rendererPackageName,rendererConfig:Ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Yn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yw(t),t===null?null:t.stateNode},findFiberByHostInstance:Ho.findFiberByHostInstance||M1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var du=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!du.isDisabled&&du.supportsFiber)try{$c=du.inject(j1),En=du}catch{}}Jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F1;Jt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!am(e))throw Error(B(200));return O1(t,e,null,n)};Jt.createRoot=function(t,e){if(!am(t))throw Error(B(299));var n=!1,r="",s=QE;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=sm(t,1,!1,null,null,n,!1,r,s),t[zn]=e.current,Na(t.nodeType===8?t.parentNode:t),new om(e)};Jt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(B(188)):(t=Object.keys(t).join(","),Error(B(268,t)));return t=yw(e),t=t===null?null:t.stateNode,t};Jt.flushSync=function(t){return Ms(t)};Jt.hydrate=function(t,e,n){if(!nd(e))throw Error(B(200));return rd(null,t,e,!0,n)};Jt.hydrateRoot=function(t,e,n){if(!am(t))throw Error(B(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=QE;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=WE(e,null,t,1,n??null,s,!1,i,o),t[zn]=e.current,Na(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new td(e)};Jt.render=function(t,e,n){if(!nd(e))throw Error(B(200));return rd(null,t,e,!1,n)};Jt.unmountComponentAtNode=function(t){if(!nd(t))throw Error(B(40));return t._reactRootContainer?(Ms(function(){rd(null,null,t,!1,function(){t._reactRootContainer=null,t[zn]=null})}),!0):!1};Jt.unstable_batchedUpdates=em;Jt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!nd(n))throw Error(B(200));if(t==null||t._reactInternals===void 0)throw Error(B(38));return rd(t,e,n,!1,r)};Jt.version="18.3.1-next-f1338f8080-20240426";function YE(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(YE)}catch(t){console.error(t)}}YE(),Y0.exports=Jt;var U1=Y0.exports,k_=U1;Uh.createRoot=k_.createRoot,Uh.hydrateRoot=k_.hydrateRoot;var N_={};/**
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
 */const JE=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},z1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},XE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,u=s+2<t.length,c=u?t[s+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let m=(a&15)<<2|c>>6,y=c&63;u||(y=64,o||(m=64)),r.push(n[h],n[f],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(JE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):z1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||f==null)throw new B1;const m=i<<2|a>>4;if(r.push(m),c!==64){const y=a<<4&240|c>>2;if(r.push(y),f!==64){const E=c<<6&192|f;r.push(E)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class B1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $1=function(t){const e=JE(t);return XE.encodeByteArray(e,!0)},wc=function(t){return $1(t).replace(/\./g,"")},ZE=function(t){try{return XE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function q1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const G1=()=>q1().__FIREBASE_DEFAULTS__,K1=()=>{if(typeof process>"u"||typeof N_>"u")return;const t=N_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},H1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ZE(t[1]);return e&&JSON.parse(e)},sd=()=>{try{return G1()||K1()||H1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},eI=t=>{var e,n;return(n=(e=sd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},W1=t=>{const e=eI(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},tI=()=>{var t;return(t=sd())===null||t===void 0?void 0:t.config},nI=t=>{var e;return(e=sd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Q1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Y1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[wc(JSON.stringify(n)),wc(JSON.stringify(o)),""].join(".")}/**
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
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function J1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function X1(){var t;const e=(t=sd())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Z1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function eb(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function tb(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nb(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function rI(){return!X1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function sI(){try{return typeof indexedDB=="object"}catch{return!1}}function rb(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const sb="FirebaseError";class Jn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=sb,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,al.prototype.create)}}class al{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ib(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Jn(s,a,r)}}function ib(t,e){return t.replace(ob,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ob=/\{\$([^}]+)}/g;function ab(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Br(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(D_(i)&&D_(o)){if(!Br(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function D_(t){return t!==null&&typeof t=="object"}/**
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
 */function ll(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function lb(t,e){const n=new ub(t,e);return n.subscribe.bind(n)}class ub{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cb(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rh),s.error===void 0&&(s.error=Rh),s.complete===void 0&&(s.complete=Rh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cb(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rh(){}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class Ls{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const gs="[DEFAULT]";/**
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
 */class db{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Q1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(fb(e))try{this.getOrInitializeService({instanceIdentifier:gs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=gs){return this.instances.has(e)}getOptions(e=gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hb(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=gs){return this.component?this.component.multipleInstances?e:gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hb(t){return t===gs?void 0:t}function fb(t){return t.instantiationMode==="EAGER"}/**
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
 */class pb{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new db(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const mb={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},gb=ae.INFO,yb={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},_b=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=yb[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lm{constructor(e){this.name=e,this._logLevel=gb,this._logHandler=_b,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?mb[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const vb=(t,e)=>e.some(n=>t instanceof n);let V_,O_;function wb(){return V_||(V_=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Eb(){return O_||(O_=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const iI=new WeakMap,Vf=new WeakMap,oI=new WeakMap,bh=new WeakMap,um=new WeakMap;function Ib(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Mr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&iI.set(n,t)}).catch(()=>{}),um.set(e,t),e}function Tb(t){if(Vf.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Vf.set(t,e)}let Of={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Vf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||oI.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Mr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xb(t){Of=t(Of)}function Sb(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ch(this),e,...n);return oI.set(r,e.sort?e.sort():[e]),Mr(r)}:Eb().includes(t)?function(...e){return t.apply(Ch(this),e),Mr(iI.get(this))}:function(...e){return Mr(t.apply(Ch(this),e))}}function Ab(t){return typeof t=="function"?Sb(t):(t instanceof IDBTransaction&&Tb(t),vb(t,wb())?new Proxy(t,Of):t)}function Mr(t){if(t instanceof IDBRequest)return Ib(t);if(bh.has(t))return bh.get(t);const e=Ab(t);return e!==t&&(bh.set(t,e),um.set(e,t)),e}const Ch=t=>um.get(t);function Rb(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Mr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Mr(o.result),u.oldVersion,u.newVersion,Mr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const bb=["get","getKey","getAll","getAllKeys","count"],Cb=["put","add","delete","clear"],Ph=new Map;function M_(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ph.get(e))return Ph.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Cb.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bb.includes(n)))return;const i=async function(o,...a){const u=this.transaction(o,s?"readwrite":"readonly");let c=u.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&u.done]))[0]};return Ph.set(e,i),i}xb(t=>({...t,get:(e,n,r)=>M_(e,n)||t.get(e,n,r),has:(e,n)=>!!M_(e,n)||t.has(e,n)}));/**
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
 */class Pb{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(kb(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function kb(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Mf="@firebase/app",L_="0.10.13";/**
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
 */const qn=new lm("@firebase/app"),Nb="@firebase/app-compat",Db="@firebase/analytics-compat",Vb="@firebase/analytics",Ob="@firebase/app-check-compat",Mb="@firebase/app-check",Lb="@firebase/auth",Fb="@firebase/auth-compat",jb="@firebase/database",Ub="@firebase/data-connect",zb="@firebase/database-compat",Bb="@firebase/functions",$b="@firebase/functions-compat",qb="@firebase/installations",Gb="@firebase/installations-compat",Kb="@firebase/messaging",Hb="@firebase/messaging-compat",Wb="@firebase/performance",Qb="@firebase/performance-compat",Yb="@firebase/remote-config",Jb="@firebase/remote-config-compat",Xb="@firebase/storage",Zb="@firebase/storage-compat",eC="@firebase/firestore",tC="@firebase/vertexai-preview",nC="@firebase/firestore-compat",rC="firebase",sC="10.14.1";/**
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
 */const Ec="[DEFAULT]",iC={[Mf]:"fire-core",[Nb]:"fire-core-compat",[Vb]:"fire-analytics",[Db]:"fire-analytics-compat",[Mb]:"fire-app-check",[Ob]:"fire-app-check-compat",[Lb]:"fire-auth",[Fb]:"fire-auth-compat",[jb]:"fire-rtdb",[Ub]:"fire-data-connect",[zb]:"fire-rtdb-compat",[Bb]:"fire-fn",[$b]:"fire-fn-compat",[qb]:"fire-iid",[Gb]:"fire-iid-compat",[Kb]:"fire-fcm",[Hb]:"fire-fcm-compat",[Wb]:"fire-perf",[Qb]:"fire-perf-compat",[Yb]:"fire-rc",[Jb]:"fire-rc-compat",[Xb]:"fire-gcs",[Zb]:"fire-gcs-compat",[eC]:"fire-fst",[nC]:"fire-fst-compat",[tC]:"fire-vertex","fire-js":"fire-js",[rC]:"fire-js-all"};/**
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
 */const Ic=new Map,oC=new Map,Lf=new Map;function F_(t,e){try{t.container.addComponent(e)}catch(n){qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ki(t){const e=t.name;if(Lf.has(e))return qn.debug(`There were multiple attempts to register component ${e}.`),!1;Lf.set(e,t);for(const n of Ic.values())F_(n,t);for(const n of oC.values())F_(n,t);return!0}function ul(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function aC(t,e,n=Ec){ul(t,e).clearInstance(n)}function Sr(t){return t.settings!==void 0}/**
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
 */const lC={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Lr=new al("app","Firebase",lC);/**
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
 */class uC{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Lr.create("app-deleted",{appName:this._name})}}/**
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
 */const fo=sC;function aI(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ec,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Lr.create("bad-app-name",{appName:String(s)});if(n||(n=tI()),!n)throw Lr.create("no-options");const i=Ic.get(s);if(i){if(Br(n,i.options)&&Br(r,i.config))return i;throw Lr.create("duplicate-app",{appName:s})}const o=new pb(s);for(const u of Lf.values())o.addComponent(u);const a=new uC(n,r,o);return Ic.set(s,a),a}function lI(t=Ec){const e=Ic.get(t);if(!e&&t===Ec&&tI())return aI();if(!e)throw Lr.create("no-app",{appName:t});return e}function Fr(t,e,n){var r;let s=(r=iC[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),qn.warn(a.join(" "));return}Ki(new Ls(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const cC="firebase-heartbeat-database",dC=1,za="firebase-heartbeat-store";let kh=null;function uI(){return kh||(kh=Rb(cC,dC,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(za)}catch(n){console.warn(n)}}}}).catch(t=>{throw Lr.create("idb-open",{originalErrorMessage:t.message})})),kh}async function hC(t){try{const n=(await uI()).transaction(za),r=await n.objectStore(za).get(cI(t));return await n.done,r}catch(e){if(e instanceof Jn)qn.warn(e.message);else{const n=Lr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});qn.warn(n.message)}}}async function j_(t,e){try{const r=(await uI()).transaction(za,"readwrite");await r.objectStore(za).put(e,cI(t)),await r.done}catch(n){if(n instanceof Jn)qn.warn(n.message);else{const r=Lr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});qn.warn(r.message)}}}function cI(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fC=1024,pC=30*24*60*60*1e3;class mC{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new yC(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=U_();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=pC}),this._storage.overwrite(this._heartbeatsCache))}catch(r){qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=U_(),{heartbeatsToSend:r,unsentEntries:s}=gC(this._heartbeatsCache.heartbeats),i=wc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return qn.warn(n),""}}}function U_(){return new Date().toISOString().substring(0,10)}function gC(t,e=fC){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),z_(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),z_(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class yC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sI()?rb().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await hC(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return j_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return j_(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function z_(t){return wc(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function _C(t){Ki(new Ls("platform-logger",e=>new Pb(e),"PRIVATE")),Ki(new Ls("heartbeat",e=>new mC(e),"PRIVATE")),Fr(Mf,L_,t),Fr(Mf,L_,"esm2017"),Fr("fire-js","")}_C("");function cm(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function dI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const vC=dI,hI=new al("auth","Firebase",dI());/**
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
 */const Tc=new lm("@firebase/auth");function wC(t,...e){Tc.logLevel<=ae.WARN&&Tc.warn(`Auth (${fo}): ${t}`,...e)}function Vu(t,...e){Tc.logLevel<=ae.ERROR&&Tc.error(`Auth (${fo}): ${t}`,...e)}/**
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
 */function Gn(t,...e){throw dm(t,...e)}function Tn(t,...e){return dm(t,...e)}function fI(t,e,n){const r=Object.assign(Object.assign({},vC()),{[e]:n});return new al("auth","Firebase",r).create(e,{appName:t.name})}function Cs(t){return fI(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function dm(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return hI.create(t,...e)}function re(t,e,...n){if(!t)throw dm(e,...n)}function On(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Vu(e),new Error(e)}function Kn(t,e){t||On(e)}/**
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
 */function Ff(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function EC(){return B_()==="http:"||B_()==="https:"}function B_(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function IC(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(EC()||eb()||"connection"in navigator)?navigator.onLine:!0}function TC(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class cl{constructor(e,n){this.shortDelay=e,this.longDelay=n,Kn(n>e,"Short delay should be less than long delay!"),this.isMobile=J1()||tb()}get(){return IC()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hm(t,e){Kn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pI{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;On("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;On("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;On("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xC={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const SC=new cl(3e4,6e4);function fm(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function po(t,e,n,r,s={}){return mI(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ll(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:u},i);return Z1()||(c.referrerPolicy="no-referrer"),pI.fetch()(gI(t,t.config.apiHost,n,a),c)})}async function mI(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xC),e);try{const s=new RC(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw hu(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[u,c]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw hu(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw hu(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw hu(t,"user-disabled",o);const h=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fI(t,h,c);Gn(t,h)}}catch(s){if(s instanceof Jn)throw s;Gn(t,"network-request-failed",{message:String(s)})}}async function AC(t,e,n,r,s={}){const i=await po(t,e,n,r,s);return"mfaPendingCredential"in i&&Gn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function gI(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?hm(t.config,s):`${t.config.apiScheme}://${s}`}class RC{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),SC.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function bC(t,e){return po(t,"POST","/v1/accounts:delete",e)}async function yI(t,e){return po(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ga(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CC(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=pm(r);re(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ga(Nh(s.auth_time)),issuedAtTime:ga(Nh(s.iat)),expirationTime:ga(Nh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Nh(t){return Number(t)*1e3}function pm(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Vu("JWT malformed, contained fewer than 3 sections"),null;try{const s=ZE(n);return s?JSON.parse(s):(Vu("Failed to decode base64 JWT payload"),null)}catch(s){return Vu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $_(t){const e=pm(t);return re(e,"internal-error"),re(typeof e.exp<"u","internal-error"),re(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ba(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Jn&&PC(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function PC({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class kC{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class jf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ga(this.lastLoginAt),this.creationTime=ga(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function xc(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ba(t,yI(n,{idToken:r}));re(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_I(i.providerUserInfo):[],a=DC(t.providerData,o),u=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=u?c:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new jf(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function NC(t){const e=Se(t);await xc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function DC(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _I(t){return t.map(e=>{var{providerId:n}=e,r=cm(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function VC(t,e){const n=await mI(t,{},async()=>{const r=ll({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=gI(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pI.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OC(t,e){return po(t,"POST","/v2/accounts:revokeToken",fm(t,e))}/**
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
 */class Vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){re(e.idToken,"internal-error"),re(typeof e.idToken<"u","internal-error"),re(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){re(e.length!==0,"internal-error");const n=$_(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(re(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await VC(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Vi;return r&&(re(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(re(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(re(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Vi,this.toJSON())}_performRefresh(){return On("not implemented")}}/**
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
 */function or(t,e){re(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=cm(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new kC(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new jf(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ba(this,this.stsTokenManager.getToken(this.auth,e));return re(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CC(this,e)}reload(){return NC(this)}_assign(e){this!==e&&(re(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){re(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await xc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Sr(this.auth.app))return Promise.reject(Cs(this.auth));const e=await this.getIdToken();return await Ba(this,bC(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,u,c,h;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,w=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:x,emailVerified:V,isAnonymous:z,providerData:L,stsTokenManager:T}=n;re(x&&T,e,"internal-error");const v=Vi.fromJSON(this.name,T);re(typeof x=="string",e,"internal-error"),or(f,e.name),or(m,e.name),re(typeof V=="boolean",e,"internal-error"),re(typeof z=="boolean",e,"internal-error"),or(y,e.name),or(E,e.name),or(b,e.name),or(D,e.name),or(I,e.name),or(w,e.name);const S=new Mn({uid:x,auth:e,email:m,emailVerified:V,displayName:f,isAnonymous:z,photoURL:E,phoneNumber:y,tenantId:b,stsTokenManager:v,createdAt:I,lastLoginAt:w});return L&&Array.isArray(L)&&(S.providerData=L.map(A=>Object.assign({},A))),D&&(S._redirectEventId=D),S}static async _fromIdTokenResponse(e,n,r=!1){const s=new Vi;s.updateFromServerResponse(n);const i=new Mn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await xc(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];re(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?_I(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new Vi;a.updateFromIdToken(r);const u=new Mn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new jf(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,c),u}}/**
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
 */const q_=new Map;function Ln(t){Kn(t instanceof Function,"Expected a class definition");let e=q_.get(t);return e?(Kn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,q_.set(t,e),e)}/**
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
 */class vI{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}vI.type="NONE";const G_=vI;/**
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
 */function Ou(t,e,n){return`firebase:${t}:${e}:${n}`}class Oi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ou(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ou("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Oi(Ln(G_),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||Ln(G_);const o=Ou(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const h=await c._get(o);if(h){const f=Mn._fromJSON(e,h);c!==i&&(a=f),i=c;break}}catch{}const u=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Oi(i,e,r):(i=u[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new Oi(i,e,r))}}/**
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
 */function K_(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(TI(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(wI(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(SI(e))return"Blackberry";if(AI(e))return"Webos";if(EI(e))return"Safari";if((e.includes("chrome/")||II(e))&&!e.includes("edge/"))return"Chrome";if(xI(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function wI(t=et()){return/firefox\//i.test(t)}function EI(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function II(t=et()){return/crios\//i.test(t)}function TI(t=et()){return/iemobile/i.test(t)}function xI(t=et()){return/android/i.test(t)}function SI(t=et()){return/blackberry/i.test(t)}function AI(t=et()){return/webos/i.test(t)}function mm(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function MC(t=et()){var e;return mm(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function LC(){return nb()&&document.documentMode===10}function RI(t=et()){return mm(t)||xI(t)||AI(t)||SI(t)||/windows phone/i.test(t)||TI(t)}/**
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
 */function bI(t,e=[]){let n;switch(t){case"Browser":n=K_(et());break;case"Worker":n=`${K_(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${fo}/${r}`}/**
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
 */class FC{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const u=e(i);o(u)}catch(u){a(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function jC(t,e={}){return po(t,"GET","/v2/passwordPolicy",fm(t,e))}/**
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
 */const UC=6;class zC{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:UC,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class BC{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new H_(this),this.idTokenSubscription=new H_(this),this.beforeStateQueue=new FC(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=hI,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ln(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Oi.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await yI(this,{idToken:e}),r=await Mn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Sr(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===a)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return re(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await xc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=TC()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Sr(this.app))return Promise.reject(Cs(this));const n=e?Se(e):null;return n&&re(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&re(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Sr(this.app)?Promise.reject(Cs(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Sr(this.app)?Promise.reject(Cs(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Ln(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await jC(this),n=new zC(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new al("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OC(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ln(e)||this._popupRedirectResolver;re(n,this,"argument-error"),this.redirectPersistenceManager=await Oi.create(this,[Ln(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(re(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return re(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=bI(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&wC(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function gm(t){return Se(t)}class H_{constructor(e){this.auth=e,this.observer=null,this.addObserver=lb(n=>this.observer=n)}get next(){return re(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let ym={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function $C(t){ym=t}function qC(t){return ym.loadJS(t)}function GC(){return ym.gapiScript}function KC(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function HC(t,e){const n=ul(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Br(i,e??{}))return s;Gn(s,"already-initialized")}return n.initialize({options:e})}function WC(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ln);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QC(t,e,n){const r=gm(t);re(r._canInitEmulator,r,"emulator-config-failed"),re(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=CI(e),{host:o,port:a}=YC(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),JC()}function CI(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YC(t){const e=CI(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:W_(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:W_(o)}}}function W_(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JC(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class PI{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return On("not implemented")}_getIdTokenResponse(e){return On("not implemented")}_linkToIdToken(e,n){return On("not implemented")}_getReauthenticationResolver(e){return On("not implemented")}}/**
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
 */async function Mi(t,e){return AC(t,"POST","/v1/accounts:signInWithIdp",fm(t,e))}/**
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
 */const XC="http://localhost";class Fs extends PI{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=cm(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Fs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Mi(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Mi(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Mi(e,n)}buildRequest(){const e={requestUri:XC,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ll(n)}return e}}/**
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
 */class kI{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class dl extends kI{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class mr extends dl{constructor(){super("facebook.com")}static credential(e){return Fs._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.FACEBOOK_SIGN_IN_METHOD="facebook.com";mr.PROVIDER_ID="facebook.com";/**
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
 */class gr extends dl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Fs._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.GOOGLE_SIGN_IN_METHOD="google.com";gr.PROVIDER_ID="google.com";/**
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
 */class yr extends dl{constructor(){super("github.com")}static credential(e){return Fs._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.GITHUB_SIGN_IN_METHOD="github.com";yr.PROVIDER_ID="github.com";/**
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
 */class _r extends dl{constructor(){super("twitter.com")}static credential(e,n){return Fs._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
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
 */class Hi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Mn._fromIdTokenResponse(e,r,s),o=Q_(r);return new Hi({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Q_(r);return new Hi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Q_(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Sc extends Jn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Sc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Sc(e,n,r,s)}}function NI(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Sc._fromErrorAndOperation(t,i,e,r):i})}async function ZC(t,e,n=!1){const r=await Ba(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hi._forOperation(t,"link",r)}/**
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
 */async function eP(t,e,n=!1){const{auth:r}=t;if(Sr(r.app))return Promise.reject(Cs(r));const s="reauthenticate";try{const i=await Ba(t,NI(r,s,e,t),n);re(i.idToken,r,"internal-error");const o=pm(i.idToken);re(o,r,"internal-error");const{sub:a}=o;return re(t.uid===a,r,"user-mismatch"),Hi._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Gn(r,"user-mismatch"),i}}/**
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
 */async function tP(t,e,n=!1){if(Sr(t.app))return Promise.reject(Cs(t));const r="signIn",s=await NI(t,r,e),i=await Hi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function nP(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function rP(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function sP(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function iP(t){return Se(t).signOut()}const Ac="__sak";/**
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
 */class DI{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const oP=1e3,aP=10;class VI extends DI{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=RI(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);LC()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,aP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},oP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}VI.type="LOCAL";const lP=VI;/**
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
 */class OI extends DI{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}OI.type="SESSION";const MI=OI;/**
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
 */function uP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class id{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new id(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),u=await uP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}id.receivers=[];/**
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
 */function _m(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class cP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,u)=>{const c=_m("",20);s.port1.start();const h=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(f){const m=f;if(m.data.eventId===c)switch(m.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(m.data.response);break;default:clearTimeout(h),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function xn(){return window}function dP(t){xn().location.href=t}/**
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
 */function LI(){return typeof xn().WorkerGlobalScope<"u"&&typeof xn().importScripts=="function"}async function hP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function fP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function pP(){return LI()?self:null}/**
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
 */const FI="firebaseLocalStorageDb",mP=1,Rc="firebaseLocalStorage",jI="fbase_key";class hl{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function od(t,e){return t.transaction([Rc],e?"readwrite":"readonly").objectStore(Rc)}function gP(){const t=indexedDB.deleteDatabase(FI);return new hl(t).toPromise()}function Uf(){const t=indexedDB.open(FI,mP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Rc,{keyPath:jI})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Rc)?e(r):(r.close(),await gP(),e(await Uf()))})})}async function Y_(t,e,n){const r=od(t,!0).put({[jI]:e,value:n});return new hl(r).toPromise()}async function yP(t,e){const n=od(t,!1).get(e),r=await new hl(n).toPromise();return r===void 0?null:r.value}function J_(t,e){const n=od(t,!0).delete(e);return new hl(n).toPromise()}const _P=800,vP=3;class UI{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>vP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return LI()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=id._getInstance(pP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await hP(),!this.activeServiceWorker)return;this.sender=new cP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||fP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uf();return await Y_(e,Ac,"1"),await J_(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Y_(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>yP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>J_(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=od(s,!1).getAll();return new hl(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_P)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}UI.type="LOCAL";const wP=UI;new cl(3e4,6e4);/**
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
 */function EP(t,e){return e?Ln(e):(re(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class vm extends PI{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Mi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Mi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Mi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IP(t){return tP(t.auth,new vm(t),t.bypassAuthState)}function TP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),eP(n,new vm(t),t.bypassAuthState)}async function xP(t){const{auth:e,user:n}=t;return re(n,e,"internal-error"),ZC(n,new vm(t),t.bypassAuthState)}/**
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
 */class zI{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IP;case"linkViaPopup":case"linkViaRedirect":return xP;case"reauthViaPopup":case"reauthViaRedirect":return TP;default:Gn(this.auth,"internal-error")}}resolve(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Kn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const SP=new cl(2e3,1e4);class Ri extends zI{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ri.currentPopupAction&&Ri.currentPopupAction.cancel(),Ri.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return re(e,this.auth,"internal-error"),e}async onExecution(){Kn(this.filter.length===1,"Popup operations only handle one event");const e=_m();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ri.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,SP.get())};e()}}Ri.currentPopupAction=null;/**
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
 */const AP="pendingRedirect",Mu=new Map;class RP extends zI{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mu.get(this.auth._key());if(!e){try{const r=await bP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mu.set(this.auth._key(),e)}return this.bypassAuthState||Mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bP(t,e){const n=kP(e),r=PP(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function CP(t,e){Mu.set(t._key(),e)}function PP(t){return Ln(t._redirectPersistence)}function kP(t){return Ou(AP,t.config.apiKey,t.name)}async function NP(t,e,n=!1){if(Sr(t.app))return Promise.reject(Cs(t));const r=gm(t),s=EP(r,e),o=await new RP(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const DP=10*60*1e3;class VP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!OP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!BI(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DP&&this.cachedEventUids.clear(),this.cachedEventUids.has(X_(e))}saveEventToCache(e){this.cachedEventUids.add(X_(e)),this.lastProcessedEventTime=Date.now()}}function X_(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function BI({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function OP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BI(t);default:return!1}}/**
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
 */async function MP(t,e={}){return po(t,"GET","/v1/projects",e)}/**
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
 */const LP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,FP=/^https?/;async function jP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MP(t);for(const n of e)try{if(UP(n))return}catch{}Gn(t,"unauthorized-domain")}function UP(t){const e=Ff(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!FP.test(n))return!1;if(LP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const zP=new cl(3e4,6e4);function Z_(){const t=xn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function BP(t){return new Promise((e,n)=>{var r,s,i;function o(){Z_(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Z_(),n(Tn(t,"network-request-failed"))},timeout:zP.get()})}if(!((s=(r=xn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=xn().gapi)===null||i===void 0)&&i.load)o();else{const a=KC("iframefcb");return xn()[a]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},qC(`${GC()}?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Lu=null,e})}let Lu=null;function $P(t){return Lu=Lu||BP(t),Lu}/**
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
 */const qP=new cl(5e3,15e3),GP="__/auth/iframe",KP="emulator/auth/iframe",HP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function QP(t){const e=t.config;re(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?hm(e,KP):`https://${t.config.authDomain}/${GP}`,r={apiKey:e.apiKey,appName:t.name,v:fo},s=WP.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ll(r).slice(1)}`}async function YP(t){const e=await $P(t),n=xn().gapi;return re(n,t,"internal-error"),e.open({where:document.body,url:QP(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:HP,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),a=xn().setTimeout(()=>{i(o)},qP.get());function u(){xn().clearTimeout(a),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const JP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},XP=500,ZP=600,ek="_blank",tk="http://localhost";class ev{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function nk(t,e,n,r=XP,s=ZP){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},JP),{width:r.toString(),height:s.toString(),top:i,left:o}),c=et().toLowerCase();n&&(a=II(c)?ek:n),wI(c)&&(e=e||tk,u.scrollbars="yes");const h=Object.entries(u).reduce((m,[y,E])=>`${m}${y}=${E},`,"");if(MC(c)&&a!=="_self")return rk(e||"",a),new ev(null);const f=window.open(e||"",a,h);re(f,t,"popup-blocked");try{f.focus()}catch{}return new ev(f)}function rk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const sk="__/auth/handler",ik="emulator/auth/handler",ok=encodeURIComponent("fac");async function tv(t,e,n,r,s,i){re(t.config.authDomain,t,"auth-domain-config-required"),re(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:fo,eventId:s};if(e instanceof kI){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ab(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof dl){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const u=await t._getAppCheckToken(),c=u?`#${ok}=${encodeURIComponent(u)}`:"";return`${ak(t)}?${ll(a).slice(1)}${c}`}function ak({config:t}){return t.emulator?hm(t,ik):`https://${t.authDomain}/${sk}`}/**
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
 */const Dh="webStorageSupport";class lk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=MI,this._completeRedirectFn=NP,this._overrideRedirectResult=CP}async _openPopup(e,n,r,s){var i;Kn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await tv(e,n,r,Ff(),s);return nk(e,o,_m())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await tv(e,n,r,Ff(),s);return dP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Kn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await YP(e),r=new VP(e);return n.register("authEvent",s=>(re(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Dh,{type:Dh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Dh];o!==void 0&&n(!!o),Gn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return RI()||EI()||mm()}}const uk=lk;var nv="@firebase/auth",rv="1.7.9";/**
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
 */class ck{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){re(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function dk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function hk(t){Ki(new Ls("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;re(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:bI(t)},c=new BC(r,s,i,u);return WC(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ki(new Ls("auth-internal",e=>{const n=gm(e.getProvider("auth").getImmediate());return(r=>new ck(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fr(nv,rv,dk(t)),Fr(nv,rv,"esm2017")}/**
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
 */const fk=5*60,pk=nI("authIdTokenMaxAge")||fk;let sv=null;const mk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pk)return;const s=n==null?void 0:n.token;sv!==s&&(sv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function gk(t=lI()){const e=ul(t,"auth");if(e.isInitialized())return e.getImmediate();const n=HC(t,{popupRedirectResolver:uk,persistence:[wP,lP,MI]}),r=nI("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=mk(i.toString());rP(n,o,()=>o(n.currentUser)),nP(n,a=>o(a))}}const s=eI("auth");return s&&QC(n,`http://${s}`),n}function yk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}$C({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",yk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});hk("Browser");var _k="firebase",vk="10.14.1";/**
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
 */Fr(_k,vk,"app");var iv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ps,$I;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,v){function S(){}S.prototype=v.prototype,T.D=v.prototype,T.prototype=new S,T.prototype.constructor=T,T.C=function(A,C,k){for(var R=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)R[nt-2]=arguments[nt];return v.prototype[C].apply(A,R)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(T,v,S){S||(S=0);var A=Array(16);if(typeof v=="string")for(var C=0;16>C;++C)A[C]=v.charCodeAt(S++)|v.charCodeAt(S++)<<8|v.charCodeAt(S++)<<16|v.charCodeAt(S++)<<24;else for(C=0;16>C;++C)A[C]=v[S++]|v[S++]<<8|v[S++]<<16|v[S++]<<24;v=T.g[0],S=T.g[1],C=T.g[2];var k=T.g[3],R=v+(k^S&(C^k))+A[0]+3614090360&4294967295;v=S+(R<<7&4294967295|R>>>25),R=k+(C^v&(S^C))+A[1]+3905402710&4294967295,k=v+(R<<12&4294967295|R>>>20),R=C+(S^k&(v^S))+A[2]+606105819&4294967295,C=k+(R<<17&4294967295|R>>>15),R=S+(v^C&(k^v))+A[3]+3250441966&4294967295,S=C+(R<<22&4294967295|R>>>10),R=v+(k^S&(C^k))+A[4]+4118548399&4294967295,v=S+(R<<7&4294967295|R>>>25),R=k+(C^v&(S^C))+A[5]+1200080426&4294967295,k=v+(R<<12&4294967295|R>>>20),R=C+(S^k&(v^S))+A[6]+2821735955&4294967295,C=k+(R<<17&4294967295|R>>>15),R=S+(v^C&(k^v))+A[7]+4249261313&4294967295,S=C+(R<<22&4294967295|R>>>10),R=v+(k^S&(C^k))+A[8]+1770035416&4294967295,v=S+(R<<7&4294967295|R>>>25),R=k+(C^v&(S^C))+A[9]+2336552879&4294967295,k=v+(R<<12&4294967295|R>>>20),R=C+(S^k&(v^S))+A[10]+4294925233&4294967295,C=k+(R<<17&4294967295|R>>>15),R=S+(v^C&(k^v))+A[11]+2304563134&4294967295,S=C+(R<<22&4294967295|R>>>10),R=v+(k^S&(C^k))+A[12]+1804603682&4294967295,v=S+(R<<7&4294967295|R>>>25),R=k+(C^v&(S^C))+A[13]+4254626195&4294967295,k=v+(R<<12&4294967295|R>>>20),R=C+(S^k&(v^S))+A[14]+2792965006&4294967295,C=k+(R<<17&4294967295|R>>>15),R=S+(v^C&(k^v))+A[15]+1236535329&4294967295,S=C+(R<<22&4294967295|R>>>10),R=v+(C^k&(S^C))+A[1]+4129170786&4294967295,v=S+(R<<5&4294967295|R>>>27),R=k+(S^C&(v^S))+A[6]+3225465664&4294967295,k=v+(R<<9&4294967295|R>>>23),R=C+(v^S&(k^v))+A[11]+643717713&4294967295,C=k+(R<<14&4294967295|R>>>18),R=S+(k^v&(C^k))+A[0]+3921069994&4294967295,S=C+(R<<20&4294967295|R>>>12),R=v+(C^k&(S^C))+A[5]+3593408605&4294967295,v=S+(R<<5&4294967295|R>>>27),R=k+(S^C&(v^S))+A[10]+38016083&4294967295,k=v+(R<<9&4294967295|R>>>23),R=C+(v^S&(k^v))+A[15]+3634488961&4294967295,C=k+(R<<14&4294967295|R>>>18),R=S+(k^v&(C^k))+A[4]+3889429448&4294967295,S=C+(R<<20&4294967295|R>>>12),R=v+(C^k&(S^C))+A[9]+568446438&4294967295,v=S+(R<<5&4294967295|R>>>27),R=k+(S^C&(v^S))+A[14]+3275163606&4294967295,k=v+(R<<9&4294967295|R>>>23),R=C+(v^S&(k^v))+A[3]+4107603335&4294967295,C=k+(R<<14&4294967295|R>>>18),R=S+(k^v&(C^k))+A[8]+1163531501&4294967295,S=C+(R<<20&4294967295|R>>>12),R=v+(C^k&(S^C))+A[13]+2850285829&4294967295,v=S+(R<<5&4294967295|R>>>27),R=k+(S^C&(v^S))+A[2]+4243563512&4294967295,k=v+(R<<9&4294967295|R>>>23),R=C+(v^S&(k^v))+A[7]+1735328473&4294967295,C=k+(R<<14&4294967295|R>>>18),R=S+(k^v&(C^k))+A[12]+2368359562&4294967295,S=C+(R<<20&4294967295|R>>>12),R=v+(S^C^k)+A[5]+4294588738&4294967295,v=S+(R<<4&4294967295|R>>>28),R=k+(v^S^C)+A[8]+2272392833&4294967295,k=v+(R<<11&4294967295|R>>>21),R=C+(k^v^S)+A[11]+1839030562&4294967295,C=k+(R<<16&4294967295|R>>>16),R=S+(C^k^v)+A[14]+4259657740&4294967295,S=C+(R<<23&4294967295|R>>>9),R=v+(S^C^k)+A[1]+2763975236&4294967295,v=S+(R<<4&4294967295|R>>>28),R=k+(v^S^C)+A[4]+1272893353&4294967295,k=v+(R<<11&4294967295|R>>>21),R=C+(k^v^S)+A[7]+4139469664&4294967295,C=k+(R<<16&4294967295|R>>>16),R=S+(C^k^v)+A[10]+3200236656&4294967295,S=C+(R<<23&4294967295|R>>>9),R=v+(S^C^k)+A[13]+681279174&4294967295,v=S+(R<<4&4294967295|R>>>28),R=k+(v^S^C)+A[0]+3936430074&4294967295,k=v+(R<<11&4294967295|R>>>21),R=C+(k^v^S)+A[3]+3572445317&4294967295,C=k+(R<<16&4294967295|R>>>16),R=S+(C^k^v)+A[6]+76029189&4294967295,S=C+(R<<23&4294967295|R>>>9),R=v+(S^C^k)+A[9]+3654602809&4294967295,v=S+(R<<4&4294967295|R>>>28),R=k+(v^S^C)+A[12]+3873151461&4294967295,k=v+(R<<11&4294967295|R>>>21),R=C+(k^v^S)+A[15]+530742520&4294967295,C=k+(R<<16&4294967295|R>>>16),R=S+(C^k^v)+A[2]+3299628645&4294967295,S=C+(R<<23&4294967295|R>>>9),R=v+(C^(S|~k))+A[0]+4096336452&4294967295,v=S+(R<<6&4294967295|R>>>26),R=k+(S^(v|~C))+A[7]+1126891415&4294967295,k=v+(R<<10&4294967295|R>>>22),R=C+(v^(k|~S))+A[14]+2878612391&4294967295,C=k+(R<<15&4294967295|R>>>17),R=S+(k^(C|~v))+A[5]+4237533241&4294967295,S=C+(R<<21&4294967295|R>>>11),R=v+(C^(S|~k))+A[12]+1700485571&4294967295,v=S+(R<<6&4294967295|R>>>26),R=k+(S^(v|~C))+A[3]+2399980690&4294967295,k=v+(R<<10&4294967295|R>>>22),R=C+(v^(k|~S))+A[10]+4293915773&4294967295,C=k+(R<<15&4294967295|R>>>17),R=S+(k^(C|~v))+A[1]+2240044497&4294967295,S=C+(R<<21&4294967295|R>>>11),R=v+(C^(S|~k))+A[8]+1873313359&4294967295,v=S+(R<<6&4294967295|R>>>26),R=k+(S^(v|~C))+A[15]+4264355552&4294967295,k=v+(R<<10&4294967295|R>>>22),R=C+(v^(k|~S))+A[6]+2734768916&4294967295,C=k+(R<<15&4294967295|R>>>17),R=S+(k^(C|~v))+A[13]+1309151649&4294967295,S=C+(R<<21&4294967295|R>>>11),R=v+(C^(S|~k))+A[4]+4149444226&4294967295,v=S+(R<<6&4294967295|R>>>26),R=k+(S^(v|~C))+A[11]+3174756917&4294967295,k=v+(R<<10&4294967295|R>>>22),R=C+(v^(k|~S))+A[2]+718787259&4294967295,C=k+(R<<15&4294967295|R>>>17),R=S+(k^(C|~v))+A[9]+3951481745&4294967295,T.g[0]=T.g[0]+v&4294967295,T.g[1]=T.g[1]+(C+(R<<21&4294967295|R>>>11))&4294967295,T.g[2]=T.g[2]+C&4294967295,T.g[3]=T.g[3]+k&4294967295}r.prototype.u=function(T,v){v===void 0&&(v=T.length);for(var S=v-this.blockSize,A=this.B,C=this.h,k=0;k<v;){if(C==0)for(;k<=S;)s(this,T,k),k+=this.blockSize;if(typeof T=="string"){for(;k<v;)if(A[C++]=T.charCodeAt(k++),C==this.blockSize){s(this,A),C=0;break}}else for(;k<v;)if(A[C++]=T[k++],C==this.blockSize){s(this,A),C=0;break}}this.h=C,this.o+=v},r.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var v=1;v<T.length-8;++v)T[v]=0;var S=8*this.o;for(v=T.length-8;v<T.length;++v)T[v]=S&255,S/=256;for(this.u(T),T=Array(16),v=S=0;4>v;++v)for(var A=0;32>A;A+=8)T[S++]=this.g[v]>>>A&255;return T};function i(T,v){var S=a;return Object.prototype.hasOwnProperty.call(S,T)?S[T]:S[T]=v(T)}function o(T,v){this.h=v;for(var S=[],A=!0,C=T.length-1;0<=C;C--){var k=T[C]|0;A&&k==v||(S[C]=k,A=!1)}this.g=S}var a={};function u(T){return-128<=T&&128>T?i(T,function(v){return new o([v|0],0>v?-1:0)}):new o([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return D(c(-T));for(var v=[],S=1,A=0;T>=S;A++)v[A]=T/S|0,S*=4294967296;return new o(v,0)}function h(T,v){if(T.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(T.charAt(0)=="-")return D(h(T.substring(1),v));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=c(Math.pow(v,8)),A=f,C=0;C<T.length;C+=8){var k=Math.min(8,T.length-C),R=parseInt(T.substring(C,C+k),v);8>k?(k=c(Math.pow(v,k)),A=A.j(k).add(c(R))):(A=A.j(S),A=A.add(c(R)))}return A}var f=u(0),m=u(1),y=u(16777216);t=o.prototype,t.m=function(){if(b(this))return-D(this).m();for(var T=0,v=1,S=0;S<this.g.length;S++){var A=this.i(S);T+=(0<=A?A:4294967296+A)*v,v*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(E(this))return"0";if(b(this))return"-"+D(this).toString(T);for(var v=c(Math.pow(T,6)),S=this,A="";;){var C=V(S,v).g;S=I(S,C.j(v));var k=((0<S.g.length?S.g[0]:S.h)>>>0).toString(T);if(S=C,E(S))return k+A;for(;6>k.length;)k="0"+k;A=k+A}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function E(T){if(T.h!=0)return!1;for(var v=0;v<T.g.length;v++)if(T.g[v]!=0)return!1;return!0}function b(T){return T.h==-1}t.l=function(T){return T=I(this,T),b(T)?-1:E(T)?0:1};function D(T){for(var v=T.g.length,S=[],A=0;A<v;A++)S[A]=~T.g[A];return new o(S,~T.h).add(m)}t.abs=function(){return b(this)?D(this):this},t.add=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0,C=0;C<=v;C++){var k=A+(this.i(C)&65535)+(T.i(C)&65535),R=(k>>>16)+(this.i(C)>>>16)+(T.i(C)>>>16);A=R>>>16,k&=65535,R&=65535,S[C]=R<<16|k}return new o(S,S[S.length-1]&-2147483648?-1:0)};function I(T,v){return T.add(D(v))}t.j=function(T){if(E(this)||E(T))return f;if(b(this))return b(T)?D(this).j(D(T)):D(D(this).j(T));if(b(T))return D(this.j(D(T)));if(0>this.l(y)&&0>T.l(y))return c(this.m()*T.m());for(var v=this.g.length+T.g.length,S=[],A=0;A<2*v;A++)S[A]=0;for(A=0;A<this.g.length;A++)for(var C=0;C<T.g.length;C++){var k=this.i(A)>>>16,R=this.i(A)&65535,nt=T.i(C)>>>16,te=T.i(C)&65535;S[2*A+2*C]+=R*te,w(S,2*A+2*C),S[2*A+2*C+1]+=k*te,w(S,2*A+2*C+1),S[2*A+2*C+1]+=R*nt,w(S,2*A+2*C+1),S[2*A+2*C+2]+=k*nt,w(S,2*A+2*C+2)}for(A=0;A<v;A++)S[A]=S[2*A+1]<<16|S[2*A];for(A=v;A<2*v;A++)S[A]=0;return new o(S,0)};function w(T,v){for(;(T[v]&65535)!=T[v];)T[v+1]+=T[v]>>>16,T[v]&=65535,v++}function x(T,v){this.g=T,this.h=v}function V(T,v){if(E(v))throw Error("division by zero");if(E(T))return new x(f,f);if(b(T))return v=V(D(T),v),new x(D(v.g),D(v.h));if(b(v))return v=V(T,D(v)),new x(D(v.g),v.h);if(30<T.g.length){if(b(T)||b(v))throw Error("slowDivide_ only works with positive integers.");for(var S=m,A=v;0>=A.l(T);)S=z(S),A=z(A);var C=L(S,1),k=L(A,1);for(A=L(A,2),S=L(S,2);!E(A);){var R=k.add(A);0>=R.l(T)&&(C=C.add(S),k=R),A=L(A,1),S=L(S,1)}return v=I(T,C.j(v)),new x(C,v)}for(C=f;0<=T.l(v);){for(S=Math.max(1,Math.floor(T.m()/v.m())),A=Math.ceil(Math.log(S)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),k=c(S),R=k.j(v);b(R)||0<R.l(T);)S-=A,k=c(S),R=k.j(v);E(k)&&(k=m),C=C.add(k),T=I(T,R)}return new x(C,T)}t.A=function(T){return V(this,T).h},t.and=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)&T.i(A);return new o(S,this.h&T.h)},t.or=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)|T.i(A);return new o(S,this.h|T.h)},t.xor=function(T){for(var v=Math.max(this.g.length,T.g.length),S=[],A=0;A<v;A++)S[A]=this.i(A)^T.i(A);return new o(S,this.h^T.h)};function z(T){for(var v=T.g.length+1,S=[],A=0;A<v;A++)S[A]=T.i(A)<<1|T.i(A-1)>>>31;return new o(S,T.h)}function L(T,v){var S=v>>5;v%=32;for(var A=T.g.length-S,C=[],k=0;k<A;k++)C[k]=0<v?T.i(k+S)>>>v|T.i(k+S+1)<<32-v:T.i(k+S);return new o(C,T.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,$I=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=c,o.fromString=h,Ps=o}).apply(typeof iv<"u"?iv:typeof self<"u"?self:typeof window<"u"?window:{});var fu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var qI,ra,GI,Fu,zf,KI,HI,WI;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,p){return l==Array.prototype||l==Object.prototype||(l[d]=p.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof fu=="object"&&fu];for(var d=0;d<l.length;++d){var p=l[d];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(l,d){if(d)e:{var p=r;l=l.split(".");for(var _=0;_<l.length-1;_++){var N=l[_];if(!(N in p))break e;p=p[N]}l=l[l.length-1],_=p[l],d=d(_),d!=_&&d!=null&&e(p,l,{configurable:!0,writable:!0,value:d})}}function i(l,d){l instanceof String&&(l+="");var p=0,_=!1,N={next:function(){if(!_&&p<l.length){var M=p++;return{value:d(M,l[M]),done:!1}}return _=!0,{done:!0,value:void 0}}};return N[Symbol.iterator]=function(){return N},N}s("Array.prototype.values",function(l){return l||function(){return i(this,function(d,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function u(l){var d=typeof l;return d=d!="object"?d:l?Array.isArray(l)?"array":d:"null",d=="array"||d=="object"&&typeof l.length=="number"}function c(l){var d=typeof l;return d=="object"&&l!=null||d=="function"}function h(l,d,p){return l.call.apply(l.bind,arguments)}function f(l,d,p){if(!l)throw Error();if(2<arguments.length){var _=Array.prototype.slice.call(arguments,2);return function(){var N=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(N,_),l.apply(d,N)}}return function(){return l.apply(d,arguments)}}function m(l,d,p){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,m.apply(null,arguments)}function y(l,d){var p=Array.prototype.slice.call(arguments,1);return function(){var _=p.slice();return _.push.apply(_,arguments),l.apply(this,_)}}function E(l,d){function p(){}p.prototype=d.prototype,l.aa=d.prototype,l.prototype=new p,l.prototype.constructor=l,l.Qb=function(_,N,M){for(var q=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)q[Ie-2]=arguments[Ie];return d.prototype[N].apply(_,q)}}function b(l){const d=l.length;if(0<d){const p=Array(d);for(let _=0;_<d;_++)p[_]=l[_];return p}return[]}function D(l,d){for(let p=1;p<arguments.length;p++){const _=arguments[p];if(u(_)){const N=l.length||0,M=_.length||0;l.length=N+M;for(let q=0;q<M;q++)l[N+q]=_[q]}else l.push(_)}}class I{constructor(d,p){this.i=d,this.j=p,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function w(l){return/^[\s\xa0]*$/.test(l)}function x(){var l=a.navigator;return l&&(l=l.userAgent)?l:""}function V(l){return V[" "](l),l}V[" "]=function(){};var z=x().indexOf("Gecko")!=-1&&!(x().toLowerCase().indexOf("webkit")!=-1&&x().indexOf("Edge")==-1)&&!(x().indexOf("Trident")!=-1||x().indexOf("MSIE")!=-1)&&x().indexOf("Edge")==-1;function L(l,d,p){for(const _ in l)d.call(p,l[_],_,l)}function T(l,d){for(const p in l)d.call(void 0,l[p],p,l)}function v(l){const d={};for(const p in l)d[p]=l[p];return d}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(l,d){let p,_;for(let N=1;N<arguments.length;N++){_=arguments[N];for(p in _)l[p]=_[p];for(let M=0;M<S.length;M++)p=S[M],Object.prototype.hasOwnProperty.call(_,p)&&(l[p]=_[p])}}function C(l){var d=1;l=l.split(":");const p=[];for(;0<d&&l.length;)p.push(l.shift()),d--;return l.length&&p.push(l.join(":")),p}function k(l){a.setTimeout(()=>{throw l},0)}function R(){var l=W;let d=null;return l.g&&(d=l.g,l.g=l.g.next,l.g||(l.h=null),d.next=null),d}class nt{constructor(){this.h=this.g=null}add(d,p){const _=te.get();_.set(d,p),this.h?this.h.next=_:this.g=_,this.h=_}}var te=new I(()=>new J,l=>l.reset());class J{constructor(){this.next=this.g=this.h=null}set(d,p){this.h=d,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let K,j=!1,W=new nt,X=()=>{const l=a.Promise.resolve(void 0);K=()=>{l.then(de)}};var de=()=>{for(var l;l=R();){try{l.h.call(l.g)}catch(p){k(p)}var d=te;d.j(l),100>d.h&&(d.h++,l.next=d.g,d.g=l)}j=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Te(l,d){this.type=l,this.g=this.target=d,this.defaultPrevented=!1}Te.prototype.h=function(){this.defaultPrevented=!0};var Dt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var l=!1,d=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};a.addEventListener("test",p,d),a.removeEventListener("test",p,d)}catch{}return l}();function Re(l,d){if(Te.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var p=this.type=l.type,_=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=d,d=l.relatedTarget){if(z){e:{try{V(d.nodeName);var N=!0;break e}catch{}N=!1}N||(d=null)}}else p=="mouseover"?d=l.fromElement:p=="mouseout"&&(d=l.toElement);this.relatedTarget=d,_?(this.clientX=_.clientX!==void 0?_.clientX:_.pageX,this.clientY=_.clientY!==void 0?_.clientY:_.pageY,this.screenX=_.screenX||0,this.screenY=_.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ge[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&Re.aa.h.call(this)}}E(Re,Te);var ge={2:"touch",3:"pen",4:"mouse"};Re.prototype.h=function(){Re.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var fe="closure_listenable_"+(1e6*Math.random()|0),Pl=0;function LS(l,d,p,_,N){this.listener=l,this.proxy=null,this.src=d,this.type=p,this.capture=!!_,this.ha=N,this.key=++Pl,this.da=this.fa=!1}function kl(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Nl(l){this.src=l,this.g={},this.h=0}Nl.prototype.add=function(l,d,p,_,N){var M=l.toString();l=this.g[M],l||(l=this.g[M]=[],this.h++);var q=Dd(l,d,_,N);return-1<q?(d=l[q],p||(d.fa=!1)):(d=new LS(d,this.src,M,!!_,N),d.fa=p,l.push(d)),d};function Nd(l,d){var p=d.type;if(p in l.g){var _=l.g[p],N=Array.prototype.indexOf.call(_,d,void 0),M;(M=0<=N)&&Array.prototype.splice.call(_,N,1),M&&(kl(d),l.g[p].length==0&&(delete l.g[p],l.h--))}}function Dd(l,d,p,_){for(var N=0;N<l.length;++N){var M=l[N];if(!M.da&&M.listener==d&&M.capture==!!p&&M.ha==_)return N}return-1}var Vd="closure_lm_"+(1e6*Math.random()|0),Od={};function xg(l,d,p,_,N){if(Array.isArray(d)){for(var M=0;M<d.length;M++)xg(l,d[M],p,_,N);return null}return p=Rg(p),l&&l[fe]?l.K(d,p,c(_)?!!_.capture:!1,N):FS(l,d,p,!1,_,N)}function FS(l,d,p,_,N,M){if(!d)throw Error("Invalid event type");var q=c(N)?!!N.capture:!!N,Ie=Ld(l);if(Ie||(l[Vd]=Ie=new Nl(l)),p=Ie.add(d,p,_,q,M),p.proxy)return p;if(_=jS(),p.proxy=_,_.src=l,_.listener=p,l.addEventListener)Dt||(N=q),N===void 0&&(N=!1),l.addEventListener(d.toString(),_,N);else if(l.attachEvent)l.attachEvent(Ag(d.toString()),_);else if(l.addListener&&l.removeListener)l.addListener(_);else throw Error("addEventListener and attachEvent are unavailable.");return p}function jS(){function l(p){return d.call(l.src,l.listener,p)}const d=US;return l}function Sg(l,d,p,_,N){if(Array.isArray(d))for(var M=0;M<d.length;M++)Sg(l,d[M],p,_,N);else _=c(_)?!!_.capture:!!_,p=Rg(p),l&&l[fe]?(l=l.i,d=String(d).toString(),d in l.g&&(M=l.g[d],p=Dd(M,p,_,N),-1<p&&(kl(M[p]),Array.prototype.splice.call(M,p,1),M.length==0&&(delete l.g[d],l.h--)))):l&&(l=Ld(l))&&(d=l.g[d.toString()],l=-1,d&&(l=Dd(d,p,_,N)),(p=-1<l?d[l]:null)&&Md(p))}function Md(l){if(typeof l!="number"&&l&&!l.da){var d=l.src;if(d&&d[fe])Nd(d.i,l);else{var p=l.type,_=l.proxy;d.removeEventListener?d.removeEventListener(p,_,l.capture):d.detachEvent?d.detachEvent(Ag(p),_):d.addListener&&d.removeListener&&d.removeListener(_),(p=Ld(d))?(Nd(p,l),p.h==0&&(p.src=null,d[Vd]=null)):kl(l)}}}function Ag(l){return l in Od?Od[l]:Od[l]="on"+l}function US(l,d){if(l.da)l=!0;else{d=new Re(d,this);var p=l.listener,_=l.ha||l.src;l.fa&&Md(l),l=p.call(_,d)}return l}function Ld(l){return l=l[Vd],l instanceof Nl?l:null}var Fd="__closure_events_fn_"+(1e9*Math.random()>>>0);function Rg(l){return typeof l=="function"?l:(l[Fd]||(l[Fd]=function(d){return l.handleEvent(d)}),l[Fd])}function mt(){me.call(this),this.i=new Nl(this),this.M=this,this.F=null}E(mt,me),mt.prototype[fe]=!0,mt.prototype.removeEventListener=function(l,d,p,_){Sg(this,l,d,p,_)};function Rt(l,d){var p,_=l.F;if(_)for(p=[];_;_=_.F)p.push(_);if(l=l.M,_=d.type||d,typeof d=="string")d=new Te(d,l);else if(d instanceof Te)d.target=d.target||l;else{var N=d;d=new Te(_,l),A(d,N)}if(N=!0,p)for(var M=p.length-1;0<=M;M--){var q=d.g=p[M];N=Dl(q,_,!0,d)&&N}if(q=d.g=l,N=Dl(q,_,!0,d)&&N,N=Dl(q,_,!1,d)&&N,p)for(M=0;M<p.length;M++)q=d.g=p[M],N=Dl(q,_,!1,d)&&N}mt.prototype.N=function(){if(mt.aa.N.call(this),this.i){var l=this.i,d;for(d in l.g){for(var p=l.g[d],_=0;_<p.length;_++)kl(p[_]);delete l.g[d],l.h--}}this.F=null},mt.prototype.K=function(l,d,p,_){return this.i.add(String(l),d,!1,p,_)},mt.prototype.L=function(l,d,p,_){return this.i.add(String(l),d,!0,p,_)};function Dl(l,d,p,_){if(d=l.i.g[String(d)],!d)return!0;d=d.concat();for(var N=!0,M=0;M<d.length;++M){var q=d[M];if(q&&!q.da&&q.capture==p){var Ie=q.listener,ut=q.ha||q.src;q.fa&&Nd(l.i,q),N=Ie.call(ut,_)!==!1&&N}}return N&&!_.defaultPrevented}function bg(l,d,p){if(typeof l=="function")p&&(l=m(l,p));else if(l&&typeof l.handleEvent=="function")l=m(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(l,d||0)}function Cg(l){l.g=bg(()=>{l.g=null,l.i&&(l.i=!1,Cg(l))},l.l);const d=l.h;l.h=null,l.m.apply(null,d)}class zS extends me{constructor(d,p){super(),this.m=d,this.l=p,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Cg(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ro(l){me.call(this),this.h=l,this.g={}}E(Ro,me);var Pg=[];function kg(l){L(l.g,function(d,p){this.g.hasOwnProperty(p)&&Md(d)},l),l.g={}}Ro.prototype.N=function(){Ro.aa.N.call(this),kg(this)},Ro.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jd=a.JSON.stringify,BS=a.JSON.parse,$S=class{stringify(l){return a.JSON.stringify(l,void 0)}parse(l){return a.JSON.parse(l,void 0)}};function Ud(){}Ud.prototype.h=null;function Ng(l){return l.h||(l.h=l.i())}function Dg(){}var bo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function zd(){Te.call(this,"d")}E(zd,Te);function Bd(){Te.call(this,"c")}E(Bd,Te);var us={},Vg=null;function Vl(){return Vg=Vg||new mt}us.La="serverreachability";function Og(l){Te.call(this,us.La,l)}E(Og,Te);function Co(l){const d=Vl();Rt(d,new Og(d))}us.STAT_EVENT="statevent";function Mg(l,d){Te.call(this,us.STAT_EVENT,l),this.stat=d}E(Mg,Te);function bt(l){const d=Vl();Rt(d,new Mg(d,l))}us.Ma="timingevent";function Lg(l,d){Te.call(this,us.Ma,l),this.size=d}E(Lg,Te);function Po(l,d){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){l()},d)}function ko(){this.g=!0}ko.prototype.xa=function(){this.g=!1};function qS(l,d,p,_,N,M){l.info(function(){if(l.g)if(M)for(var q="",Ie=M.split("&"),ut=0;ut<Ie.length;ut++){var pe=Ie[ut].split("=");if(1<pe.length){var gt=pe[0];pe=pe[1];var yt=gt.split("_");q=2<=yt.length&&yt[1]=="type"?q+(gt+"="+pe+"&"):q+(gt+"=redacted&")}}else q=null;else q=M;return"XMLHTTP REQ ("+_+") [attempt "+N+"]: "+d+`
`+p+`
`+q})}function GS(l,d,p,_,N,M,q){l.info(function(){return"XMLHTTP RESP ("+_+") [ attempt "+N+"]: "+d+`
`+p+`
`+M+" "+q})}function ei(l,d,p,_){l.info(function(){return"XMLHTTP TEXT ("+d+"): "+HS(l,p)+(_?" "+_:"")})}function KS(l,d){l.info(function(){return"TIMEOUT: "+d})}ko.prototype.info=function(){};function HS(l,d){if(!l.g)return d;if(!d)return null;try{var p=JSON.parse(d);if(p){for(l=0;l<p.length;l++)if(Array.isArray(p[l])){var _=p[l];if(!(2>_.length)){var N=_[1];if(Array.isArray(N)&&!(1>N.length)){var M=N[0];if(M!="noop"&&M!="stop"&&M!="close")for(var q=1;q<N.length;q++)N[q]=""}}}}return jd(p)}catch{return d}}var Ol={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Fg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},$d;function Ml(){}E(Ml,Ud),Ml.prototype.g=function(){return new XMLHttpRequest},Ml.prototype.i=function(){return{}},$d=new Ml;function nr(l,d,p,_){this.j=l,this.i=d,this.l=p,this.R=_||1,this.U=new Ro(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jg}function jg(){this.i=null,this.g="",this.h=!1}var Ug={},qd={};function Gd(l,d,p){l.L=1,l.v=Ul(bn(d)),l.m=p,l.P=!0,zg(l,null)}function zg(l,d){l.F=Date.now(),Ll(l),l.A=bn(l.v);var p=l.A,_=l.R;Array.isArray(_)||(_=[String(_)]),ty(p.i,"t",_),l.C=0,p=l.j.J,l.h=new jg,l.g=vy(l.j,p?d:null,!l.m),0<l.O&&(l.M=new zS(m(l.Y,l,l.g),l.O)),d=l.U,p=l.g,_=l.ca;var N="readystatechange";Array.isArray(N)||(N&&(Pg[0]=N.toString()),N=Pg);for(var M=0;M<N.length;M++){var q=xg(p,N[M],_||d.handleEvent,!1,d.h||d);if(!q)break;d.g[q.key]=q}d=l.H?v(l.H):{},l.m?(l.u||(l.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,d)):(l.u="GET",l.g.ea(l.A,l.u,null,d)),Co(),qS(l.i,l.u,l.A,l.l,l.R,l.m)}nr.prototype.ca=function(l){l=l.target;const d=this.M;d&&Cn(l)==3?d.j():this.Y(l)},nr.prototype.Y=function(l){try{if(l==this.g)e:{const yt=Cn(this.g);var d=this.g.Ba();const ri=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||ly(this.g)))){this.J||yt!=4||d==7||(d==8||0>=ri?Co(3):Co(2)),Kd(this);var p=this.g.Z();this.X=p;t:if(Bg(this)){var _=ly(this.g);l="";var N=_.length,M=Cn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){cs(this),No(this);var q="";break t}this.h.i=new a.TextDecoder}for(d=0;d<N;d++)this.h.h=!0,l+=this.h.i.decode(_[d],{stream:!(M&&d==N-1)});_.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=p==200,GS(this.i,this.u,this.A,this.l,this.R,yt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,ut=this.g;if((Ie=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(Ie)){var pe=Ie;break t}}pe=null}if(p=pe)ei(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Hd(this,p);else{this.o=!1,this.s=3,bt(12),cs(this),No(this);break e}}if(this.P){p=!0;let on;for(;!this.J&&this.C<q.length;)if(on=WS(this,q),on==qd){yt==4&&(this.s=4,bt(14),p=!1),ei(this.i,this.l,null,"[Incomplete Response]");break}else if(on==Ug){this.s=4,bt(15),ei(this.i,this.l,q,"[Invalid Chunk]"),p=!1;break}else ei(this.i,this.l,on,null),Hd(this,on);if(Bg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||q.length!=0||this.h.h||(this.s=1,bt(16),p=!1),this.o=this.o&&p,!p)ei(this.i,this.l,q,"[Invalid Chunked Response]"),cs(this),No(this);else if(0<q.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Zd(gt),gt.M=!0,bt(11))}}else ei(this.i,this.l,q,null),Hd(this,q);yt==4&&cs(this),this.o&&!this.J&&(yt==4?my(this.j,this):(this.o=!1,Ll(this)))}else dA(this.g),p==400&&0<q.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),cs(this),No(this)}}}catch{}finally{}};function Bg(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function WS(l,d){var p=l.C,_=d.indexOf(`
`,p);return _==-1?qd:(p=Number(d.substring(p,_)),isNaN(p)?Ug:(_+=1,_+p>d.length?qd:(d=d.slice(_,_+p),l.C=_+p,d)))}nr.prototype.cancel=function(){this.J=!0,cs(this)};function Ll(l){l.S=Date.now()+l.I,$g(l,l.I)}function $g(l,d){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Po(m(l.ba,l),d)}function Kd(l){l.B&&(a.clearTimeout(l.B),l.B=null)}nr.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(KS(this.i,this.A),this.L!=2&&(Co(),bt(17)),cs(this),this.s=2,No(this)):$g(this,this.S-l)};function No(l){l.j.G==0||l.J||my(l.j,l)}function cs(l){Kd(l);var d=l.M;d&&typeof d.ma=="function"&&d.ma(),l.M=null,kg(l.U),l.g&&(d=l.g,l.g=null,d.abort(),d.ma())}function Hd(l,d){try{var p=l.j;if(p.G!=0&&(p.g==l||Wd(p.h,l))){if(!l.K&&Wd(p.h,l)&&p.G==3){try{var _=p.Da.g.parse(d)}catch{_=null}if(Array.isArray(_)&&_.length==3){var N=_;if(N[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<l.F)Kl(p),ql(p);else break e;Xd(p),bt(18)}}else p.za=N[1],0<p.za-p.T&&37500>N[2]&&p.F&&p.v==0&&!p.C&&(p.C=Po(m(p.Za,p),6e3));if(1>=Kg(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else hs(p,11)}else if((l.K||p.g==l)&&Kl(p),!w(d))for(N=p.Da.g.parse(d),d=0;d<N.length;d++){let pe=N[d];if(p.T=pe[0],pe=pe[1],p.G==2)if(pe[0]=="c"){p.K=pe[1],p.ia=pe[2];const gt=pe[3];gt!=null&&(p.la=gt,p.j.info("VER="+p.la));const yt=pe[4];yt!=null&&(p.Aa=yt,p.j.info("SVER="+p.Aa));const ri=pe[5];ri!=null&&typeof ri=="number"&&0<ri&&(_=1.5*ri,p.L=_,p.j.info("backChannelRequestTimeoutMs_="+_)),_=p;const on=l.g;if(on){const Wl=on.g?on.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Wl){var M=_.h;M.g||Wl.indexOf("spdy")==-1&&Wl.indexOf("quic")==-1&&Wl.indexOf("h2")==-1||(M.j=M.l,M.g=new Set,M.h&&(Qd(M,M.h),M.h=null))}if(_.D){const eh=on.g?on.g.getResponseHeader("X-HTTP-Session-Id"):null;eh&&(_.ya=eh,be(_.I,_.D,eh))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-l.F,p.j.info("Handshake RTT: "+p.R+"ms")),_=p;var q=l;if(_.qa=_y(_,_.J?_.ia:null,_.W),q.K){Hg(_.h,q);var Ie=q,ut=_.L;ut&&(Ie.I=ut),Ie.B&&(Kd(Ie),Ll(Ie)),_.g=q}else fy(_);0<p.i.length&&Gl(p)}else pe[0]!="stop"&&pe[0]!="close"||hs(p,7);else p.G==3&&(pe[0]=="stop"||pe[0]=="close"?pe[0]=="stop"?hs(p,7):Jd(p):pe[0]!="noop"&&p.l&&p.l.ta(pe),p.v=0)}}Co(4)}catch{}}var QS=class{constructor(l,d){this.g=l,this.map=d}};function qg(l){this.l=l||10,a.PerformanceNavigationTiming?(l=a.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gg(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Kg(l){return l.h?1:l.g?l.g.size:0}function Wd(l,d){return l.h?l.h==d:l.g?l.g.has(d):!1}function Qd(l,d){l.g?l.g.add(d):l.h=d}function Hg(l,d){l.h&&l.h==d?l.h=null:l.g&&l.g.has(d)&&l.g.delete(d)}qg.prototype.cancel=function(){if(this.i=Wg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Wg(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let d=l.i;for(const p of l.g.values())d=d.concat(p.D);return d}return b(l.i)}function YS(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var d=[],p=l.length,_=0;_<p;_++)d.push(l[_]);return d}d=[],p=0;for(_ in l)d[p++]=l[_];return d}function JS(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var d=[];l=l.length;for(var p=0;p<l;p++)d.push(p);return d}d=[],p=0;for(const _ in l)d[p++]=_;return d}}}function Qg(l,d){if(l.forEach&&typeof l.forEach=="function")l.forEach(d,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,d,void 0);else for(var p=JS(l),_=YS(l),N=_.length,M=0;M<N;M++)d.call(void 0,_[M],p&&p[M],l)}var Yg=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function XS(l,d){if(l){l=l.split("&");for(var p=0;p<l.length;p++){var _=l[p].indexOf("="),N=null;if(0<=_){var M=l[p].substring(0,_);N=l[p].substring(_+1)}else M=l[p];d(M,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function ds(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof ds){this.h=l.h,Fl(this,l.j),this.o=l.o,this.g=l.g,jl(this,l.s),this.l=l.l;var d=l.i,p=new Oo;p.i=d.i,d.g&&(p.g=new Map(d.g),p.h=d.h),Jg(this,p),this.m=l.m}else l&&(d=String(l).match(Yg))?(this.h=!1,Fl(this,d[1]||"",!0),this.o=Do(d[2]||""),this.g=Do(d[3]||"",!0),jl(this,d[4]),this.l=Do(d[5]||"",!0),Jg(this,d[6]||"",!0),this.m=Do(d[7]||"")):(this.h=!1,this.i=new Oo(null,this.h))}ds.prototype.toString=function(){var l=[],d=this.j;d&&l.push(Vo(d,Xg,!0),":");var p=this.g;return(p||d=="file")&&(l.push("//"),(d=this.o)&&l.push(Vo(d,Xg,!0),"@"),l.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&l.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Vo(p,p.charAt(0)=="/"?tA:eA,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Vo(p,rA)),l.join("")};function bn(l){return new ds(l)}function Fl(l,d,p){l.j=p?Do(d,!0):d,l.j&&(l.j=l.j.replace(/:$/,""))}function jl(l,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);l.s=d}else l.s=null}function Jg(l,d,p){d instanceof Oo?(l.i=d,sA(l.i,l.h)):(p||(d=Vo(d,nA)),l.i=new Oo(d,l.h))}function be(l,d,p){l.i.set(d,p)}function Ul(l){return be(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Do(l,d){return l?d?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Vo(l,d,p){return typeof l=="string"?(l=encodeURI(l).replace(d,ZS),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function ZS(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Xg=/[#\/\?@]/g,eA=/[#\?:]/g,tA=/[#\?]/g,nA=/[#\?@]/g,rA=/#/g;function Oo(l,d){this.h=this.g=null,this.i=l||null,this.j=!!d}function rr(l){l.g||(l.g=new Map,l.h=0,l.i&&XS(l.i,function(d,p){l.add(decodeURIComponent(d.replace(/\+/g," ")),p)}))}t=Oo.prototype,t.add=function(l,d){rr(this),this.i=null,l=ti(this,l);var p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(d),this.h+=1,this};function Zg(l,d){rr(l),d=ti(l,d),l.g.has(d)&&(l.i=null,l.h-=l.g.get(d).length,l.g.delete(d))}function ey(l,d){return rr(l),d=ti(l,d),l.g.has(d)}t.forEach=function(l,d){rr(this),this.g.forEach(function(p,_){p.forEach(function(N){l.call(d,N,_,this)},this)},this)},t.na=function(){rr(this);const l=Array.from(this.g.values()),d=Array.from(this.g.keys()),p=[];for(let _=0;_<d.length;_++){const N=l[_];for(let M=0;M<N.length;M++)p.push(d[_])}return p},t.V=function(l){rr(this);let d=[];if(typeof l=="string")ey(this,l)&&(d=d.concat(this.g.get(ti(this,l))));else{l=Array.from(this.g.values());for(let p=0;p<l.length;p++)d=d.concat(l[p])}return d},t.set=function(l,d){return rr(this),this.i=null,l=ti(this,l),ey(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[d]),this.h+=1,this},t.get=function(l,d){return l?(l=this.V(l),0<l.length?String(l[0]):d):d};function ty(l,d,p){Zg(l,d),0<p.length&&(l.i=null,l.g.set(ti(l,d),b(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],d=Array.from(this.g.keys());for(var p=0;p<d.length;p++){var _=d[p];const M=encodeURIComponent(String(_)),q=this.V(_);for(_=0;_<q.length;_++){var N=M;q[_]!==""&&(N+="="+encodeURIComponent(String(q[_]))),l.push(N)}}return this.i=l.join("&")};function ti(l,d){return d=String(d),l.j&&(d=d.toLowerCase()),d}function sA(l,d){d&&!l.j&&(rr(l),l.i=null,l.g.forEach(function(p,_){var N=_.toLowerCase();_!=N&&(Zg(this,_),ty(this,N,p))},l)),l.j=d}function iA(l,d){const p=new ko;if(a.Image){const _=new Image;_.onload=y(sr,p,"TestLoadImage: loaded",!0,d,_),_.onerror=y(sr,p,"TestLoadImage: error",!1,d,_),_.onabort=y(sr,p,"TestLoadImage: abort",!1,d,_),_.ontimeout=y(sr,p,"TestLoadImage: timeout",!1,d,_),a.setTimeout(function(){_.ontimeout&&_.ontimeout()},1e4),_.src=l}else d(!1)}function oA(l,d){const p=new ko,_=new AbortController,N=setTimeout(()=>{_.abort(),sr(p,"TestPingServer: timeout",!1,d)},1e4);fetch(l,{signal:_.signal}).then(M=>{clearTimeout(N),M.ok?sr(p,"TestPingServer: ok",!0,d):sr(p,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(N),sr(p,"TestPingServer: error",!1,d)})}function sr(l,d,p,_,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),_(p)}catch{}}function aA(){this.g=new $S}function lA(l,d,p){const _=p||"";try{Qg(l,function(N,M){let q=N;c(N)&&(q=jd(N)),d.push(_+M+"="+encodeURIComponent(q))})}catch(N){throw d.push(_+"type="+encodeURIComponent("_badmap")),N}}function zl(l){this.l=l.Ub||null,this.j=l.eb||!1}E(zl,Ud),zl.prototype.g=function(){return new Bl(this.l,this.j)},zl.prototype.i=function(l){return function(){return l}}({});function Bl(l,d){mt.call(this),this.D=l,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}E(Bl,mt),t=Bl.prototype,t.open=function(l,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=d,this.readyState=1,Lo(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(d.body=l),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Lo(this)),this.g&&(this.readyState=3,Lo(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;ny(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function ny(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var d=l.value?l.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!l.done}))&&(this.response=this.responseText+=d)}l.done?Mo(this):Lo(this),this.readyState==3&&ny(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Mo(this))},t.Qa=function(l){this.g&&(this.response=l,Mo(this))},t.ga=function(){this.g&&Mo(this)};function Mo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,Lo(l)}t.setRequestHeader=function(l,d){this.u.append(l,d)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],d=this.h.entries();for(var p=d.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=d.next();return l.join(`\r
`)};function Lo(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Bl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function ry(l){let d="";return L(l,function(p,_){d+=_,d+=":",d+=p,d+=`\r
`}),d}function Yd(l,d,p){e:{for(_ in p){var _=!1;break e}_=!0}_||(p=ry(p),typeof l=="string"?p!=null&&encodeURIComponent(String(p)):be(l,d,p))}function $e(l){mt.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}E($e,mt);var uA=/^https?$/i,cA=["POST","PUT"];t=$e.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,d,p,_){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);d=d?d.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():$d.g(),this.v=this.o?Ng(this.o):Ng($d),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(d,String(l),!0),this.B=!1}catch(M){sy(this,M);return}if(l=p||"",p=new Map(this.headers),_)if(Object.getPrototypeOf(_)===Object.prototype)for(var N in _)p.set(N,_[N]);else if(typeof _.keys=="function"&&typeof _.get=="function")for(const M of _.keys())p.set(M,_.get(M));else throw Error("Unknown input type for opt_headers: "+String(_));_=Array.from(p.keys()).find(M=>M.toLowerCase()=="content-type"),N=a.FormData&&l instanceof a.FormData,!(0<=Array.prototype.indexOf.call(cA,d,void 0))||_||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[M,q]of p)this.g.setRequestHeader(M,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ay(this),this.u=!0,this.g.send(l),this.u=!1}catch(M){sy(this,M)}};function sy(l,d){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=d,l.m=5,iy(l),$l(l)}function iy(l){l.A||(l.A=!0,Rt(l,"complete"),Rt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Rt(this,"complete"),Rt(this,"abort"),$l(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),$l(this,!0)),$e.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?oy(this):this.bb())},t.bb=function(){oy(this)};function oy(l){if(l.h&&typeof o<"u"&&(!l.v[1]||Cn(l)!=4||l.Z()!=2)){if(l.u&&Cn(l)==4)bg(l.Ea,0,l);else if(Rt(l,"readystatechange"),Cn(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var p;if(!(p=d)){var _;if(_=q===0){var N=String(l.D).match(Yg)[1]||null;!N&&a.self&&a.self.location&&(N=a.self.location.protocol.slice(0,-1)),_=!uA.test(N?N.toLowerCase():"")}p=_}if(p)Rt(l,"complete"),Rt(l,"success");else{l.m=6;try{var M=2<Cn(l)?l.g.statusText:""}catch{M=""}l.l=M+" ["+l.Z()+"]",iy(l)}}finally{$l(l)}}}}function $l(l,d){if(l.g){ay(l);const p=l.g,_=l.v[0]?()=>{}:null;l.g=null,l.v=null,d||Rt(l,"ready");try{p.onreadystatechange=_}catch{}}}function ay(l){l.I&&(a.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function Cn(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<Cn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var d=this.g.responseText;return l&&d.indexOf(l)==0&&(d=d.substring(l.length)),BS(d)}};function ly(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function dA(l){const d={};l=(l.g&&2<=Cn(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let _=0;_<l.length;_++){if(w(l[_]))continue;var p=C(l[_]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const M=d[N]||[];d[N]=M,M.push(p)}T(d,function(_){return _.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Fo(l,d,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||d}function uy(l){this.Aa=0,this.i=[],this.j=new ko,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Fo("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Fo("baseRetryDelayMs",5e3,l),this.cb=Fo("retryDelaySeedMs",1e4,l),this.Wa=Fo("forwardChannelMaxRetries",2,l),this.wa=Fo("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new qg(l&&l.concurrentRequestLimit),this.Da=new aA,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=uy.prototype,t.la=8,t.G=1,t.connect=function(l,d,p,_){bt(0),this.W=l,this.H=d||{},p&&_!==void 0&&(this.H.OSID=p,this.H.OAID=_),this.F=this.X,this.I=_y(this,null,this.W),Gl(this)};function Jd(l){if(cy(l),l.G==3){var d=l.U++,p=bn(l.I);if(be(p,"SID",l.K),be(p,"RID",d),be(p,"TYPE","terminate"),jo(l,p),d=new nr(l,l.j,d),d.L=2,d.v=Ul(bn(p)),p=!1,a.navigator&&a.navigator.sendBeacon)try{p=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!p&&a.Image&&(new Image().src=d.v,p=!0),p||(d.g=vy(d.j,null),d.g.ea(d.v)),d.F=Date.now(),Ll(d)}yy(l)}function ql(l){l.g&&(Zd(l),l.g.cancel(),l.g=null)}function cy(l){ql(l),l.u&&(a.clearTimeout(l.u),l.u=null),Kl(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&a.clearTimeout(l.s),l.s=null)}function Gl(l){if(!Gg(l.h)&&!l.s){l.s=!0;var d=l.Ga;K||X(),j||(K(),j=!0),W.add(d,l),l.B=0}}function hA(l,d){return Kg(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=d.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Po(m(l.Ga,l,d),gy(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const N=new nr(this,this.j,l);let M=this.o;if(this.S&&(M?(M=v(M),A(M,this.S)):M=this.S),this.m!==null||this.O||(N.H=M,M=null),this.P)e:{for(var d=0,p=0;p<this.i.length;p++){t:{var _=this.i[p];if("__data__"in _.map&&(_=_.map.__data__,typeof _=="string")){_=_.length;break t}_=void 0}if(_===void 0)break;if(d+=_,4096<d){d=p;break e}if(d===4096||p===this.i.length-1){d=p+1;break e}}d=1e3}else d=1e3;d=hy(this,N,d),p=bn(this.I),be(p,"RID",l),be(p,"CVER",22),this.D&&be(p,"X-HTTP-Session-Id",this.D),jo(this,p),M&&(this.O?d="headers="+encodeURIComponent(String(ry(M)))+"&"+d:this.m&&Yd(p,this.m,M)),Qd(this.h,N),this.Ua&&be(p,"TYPE","init"),this.P?(be(p,"$req",d),be(p,"SID","null"),N.T=!0,Gd(N,p,null)):Gd(N,p,d),this.G=2}}else this.G==3&&(l?dy(this,l):this.i.length==0||Gg(this.h)||dy(this))};function dy(l,d){var p;d?p=d.l:p=l.U++;const _=bn(l.I);be(_,"SID",l.K),be(_,"RID",p),be(_,"AID",l.T),jo(l,_),l.m&&l.o&&Yd(_,l.m,l.o),p=new nr(l,l.j,p,l.B+1),l.m===null&&(p.H=l.o),d&&(l.i=d.D.concat(l.i)),d=hy(l,p,1e3),p.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),Qd(l.h,p),Gd(p,_,d)}function jo(l,d){l.H&&L(l.H,function(p,_){be(d,_,p)}),l.l&&Qg({},function(p,_){be(d,_,p)})}function hy(l,d,p){p=Math.min(l.i.length,p);var _=l.l?m(l.l.Na,l.l,l):null;e:{var N=l.i;let M=-1;for(;;){const q=["count="+p];M==-1?0<p?(M=N[0].g,q.push("ofs="+M)):M=0:q.push("ofs="+M);let Ie=!0;for(let ut=0;ut<p;ut++){let pe=N[ut].g;const gt=N[ut].map;if(pe-=M,0>pe)M=Math.max(0,N[ut].g-100),Ie=!1;else try{lA(gt,q,"req"+pe+"_")}catch{_&&_(gt)}}if(Ie){_=q.join("&");break e}}}return l=l.i.splice(0,p),d.D=l,_}function fy(l){if(!l.g&&!l.u){l.Y=1;var d=l.Fa;K||X(),j||(K(),j=!0),W.add(d,l),l.v=0}}function Xd(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Po(m(l.Fa,l),gy(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,py(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Po(m(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),ql(this),py(this))};function Zd(l){l.A!=null&&(a.clearTimeout(l.A),l.A=null)}function py(l){l.g=new nr(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var d=bn(l.qa);be(d,"RID","rpc"),be(d,"SID",l.K),be(d,"AID",l.T),be(d,"CI",l.F?"0":"1"),!l.F&&l.ja&&be(d,"TO",l.ja),be(d,"TYPE","xmlhttp"),jo(l,d),l.m&&l.o&&Yd(d,l.m,l.o),l.L&&(l.g.I=l.L);var p=l.g;l=l.ia,p.L=1,p.v=Ul(bn(d)),p.m=null,p.P=!0,zg(p,l)}t.Za=function(){this.C!=null&&(this.C=null,ql(this),Xd(this),bt(19))};function Kl(l){l.C!=null&&(a.clearTimeout(l.C),l.C=null)}function my(l,d){var p=null;if(l.g==d){Kl(l),Zd(l),l.g=null;var _=2}else if(Wd(l.h,d))p=d.D,Hg(l.h,d),_=1;else return;if(l.G!=0){if(d.o)if(_==1){p=d.m?d.m.length:0,d=Date.now()-d.F;var N=l.B;_=Vl(),Rt(_,new Lg(_,p)),Gl(l)}else fy(l);else if(N=d.s,N==3||N==0&&0<d.X||!(_==1&&hA(l,d)||_==2&&Xd(l)))switch(p&&0<p.length&&(d=l.h,d.i=d.i.concat(p)),N){case 1:hs(l,5);break;case 4:hs(l,10);break;case 3:hs(l,6);break;default:hs(l,2)}}}function gy(l,d){let p=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(p*=2),p*d}function hs(l,d){if(l.j.info("Error code "+d),d==2){var p=m(l.fb,l),_=l.Xa;const N=!_;_=new ds(_||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Fl(_,"https"),Ul(_),N?iA(_.toString(),p):oA(_.toString(),p)}else bt(2);l.G=0,l.l&&l.l.sa(d),yy(l),cy(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function yy(l){if(l.G=0,l.ka=[],l.l){const d=Wg(l.h);(d.length!=0||l.i.length!=0)&&(D(l.ka,d),D(l.ka,l.i),l.h.i.length=0,b(l.i),l.i.length=0),l.l.ra()}}function _y(l,d,p){var _=p instanceof ds?bn(p):new ds(p);if(_.g!="")d&&(_.g=d+"."+_.g),jl(_,_.s);else{var N=a.location;_=N.protocol,d=d?d+"."+N.hostname:N.hostname,N=+N.port;var M=new ds(null);_&&Fl(M,_),d&&(M.g=d),N&&jl(M,N),p&&(M.l=p),_=M}return p=l.D,d=l.ya,p&&d&&be(_,p,d),be(_,"VER",l.la),jo(l,_),_}function vy(l,d,p){if(d&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=l.Ca&&!l.pa?new $e(new zl({eb:p})):new $e(l.pa),d.Ha(l.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wy(){}t=wy.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Hl(){}Hl.prototype.g=function(l,d){return new qt(l,d)};function qt(l,d){mt.call(this),this.g=new uy(d),this.l=l,this.h=d&&d.messageUrlParams||null,l=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(l?l["X-WebChannel-Content-Type"]=d.messageContentType:l={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(l?l["X-WebChannel-Client-Profile"]=d.va:l={"X-WebChannel-Client-Profile":d.va}),this.g.S=l,(l=d&&d.Sb)&&!w(l)&&(this.g.m=l),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!w(d)&&(this.g.D=d,l=this.h,l!==null&&d in l&&(l=this.h,d in l&&delete l[d])),this.j=new ni(this)}E(qt,mt),qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},qt.prototype.close=function(){Jd(this.g)},qt.prototype.o=function(l){var d=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.u&&(p={},p.__data__=jd(l),l=p);d.i.push(new QS(d.Ya++,l)),d.G==3&&Gl(d)},qt.prototype.N=function(){this.g.l=null,delete this.j,Jd(this.g),delete this.g,qt.aa.N.call(this)};function Ey(l){zd.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var d=l.__sm__;if(d){e:{for(const p in d){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,d=d!==null&&l in d?d[l]:void 0),this.data=d}else this.data=l}E(Ey,zd);function Iy(){Bd.call(this),this.status=1}E(Iy,Bd);function ni(l){this.g=l}E(ni,wy),ni.prototype.ua=function(){Rt(this.g,"a")},ni.prototype.ta=function(l){Rt(this.g,new Ey(l))},ni.prototype.sa=function(l){Rt(this.g,new Iy)},ni.prototype.ra=function(){Rt(this.g,"b")},Hl.prototype.createWebChannel=Hl.prototype.g,qt.prototype.send=qt.prototype.o,qt.prototype.open=qt.prototype.m,qt.prototype.close=qt.prototype.close,WI=function(){return new Hl},HI=function(){return Vl()},KI=us,zf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ol.NO_ERROR=0,Ol.TIMEOUT=8,Ol.HTTP_ERROR=6,Fu=Ol,Fg.COMPLETE="complete",GI=Fg,Dg.EventType=bo,bo.OPEN="a",bo.CLOSE="b",bo.ERROR="c",bo.MESSAGE="d",mt.prototype.listen=mt.prototype.K,ra=Dg,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,qI=$e}).apply(typeof fu<"u"?fu:typeof self<"u"?self:typeof window<"u"?window:{});const ov="@firebase/firestore";/**
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
 */let mo="10.14.0";/**
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
 */const $r=new lm("@firebase/firestore");function ci(){return $r.logLevel}function wk(t){$r.setLogLevel(t)}function U(t,...e){if($r.logLevel<=ae.DEBUG){const n=e.map(wm);$r.debug(`Firestore (${mo}): ${t}`,...n)}}function He(t,...e){if($r.logLevel<=ae.ERROR){const n=e.map(wm);$r.error(`Firestore (${mo}): ${t}`,...n)}}function Qt(t,...e){if($r.logLevel<=ae.WARN){const n=e.map(wm);$r.warn(`Firestore (${mo}): ${t}`,...n)}}function wm(t){if(typeof t=="string")return t;try{/**
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
 */function H(t="Unexpected state"){const e=`FIRESTORE (${mo}) INTERNAL ASSERTION FAILED: `+t;throw He(e),new Error(e)}function Z(t,e){t||H()}function Ek(t,e){t||H()}function $(t,e){return t}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class F extends Jn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class at{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class QI{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(it.UNAUTHENTICATED))}shutdown(){}}class Ik{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Tk{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Z(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new at;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new at,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},a=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new at)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Z(typeof r.accessToken=="string"),new QI(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Z(e===null||typeof e=="string"),new it(e)}}class xk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class Sk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new xk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(it.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class JI{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ak{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Z(this.o===void 0);const r=i=>{i.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Z(typeof n.token=="string"),this.R=n.token,new JI(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class Rk{getToken(){return Promise.resolve(new JI(""))}invalidateToken(){}start(e,n){}shutdown(){}}/**
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
 */function bk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Em{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=bk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function Wi(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}function XI(t){return t+"\0"}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new F(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new Le(0,0))}static max(){return new ee(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class $a{constructor(e,n,r){n===void 0?n=0:n>e.length&&H(),r===void 0?r=e.length-n:r>e.length-n&&H(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return $a.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof $a?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends $a{construct(e,n,r){return new le(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new le(n)}static emptyPath(){return new le([])}}const Ck=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ne extends $a{construct(e,n,r){return new Ne(e,n,r)}static isValidIdentifier(e){return Ck.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ne.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ne(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new F(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new F(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new F(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ne(n)}static emptyPath(){return new Ne([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(le.fromString(e))}static fromName(e){return new G(le.fromString(e).popFirst(5))}static empty(){return new G(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new le(e.slice()))}}/**
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
 */class Qi{constructor(e,n,r,s){this.indexId=e,this.collectionGroup=n,this.fields=r,this.indexState=s}}function Bf(t){return t.fields.find(e=>e.kind===2)}function ys(t){return t.fields.filter(e=>e.kind!==2)}function Pk(t,e){let n=ne(t.collectionGroup,e.collectionGroup);if(n!==0)return n;for(let r=0;r<Math.min(t.fields.length,e.fields.length);++r)if(n=kk(t.fields[r],e.fields[r]),n!==0)return n;return ne(t.fields.length,e.fields.length)}Qi.UNKNOWN_ID=-1;class ks{constructor(e,n){this.fieldPath=e,this.kind=n}}function kk(t,e){const n=Ne.comparator(t.fieldPath,e.fieldPath);return n!==0?n:ne(t.kind,e.kind)}class Yi{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Yi(0,Yt.min())}}function ZI(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Yt(s,G.empty(),e)}function eT(t){return new Yt(t.readTime,t.key,-1)}class Yt{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yt(ee.min(),G.empty(),-1)}static max(){return new Yt(ee.max(),G.empty(),-1)}}function Im(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const tT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class nT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function ts(t){if(t.code!==O.FAILED_PRECONDITION||t.message!==tT)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&H(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new P((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof P?n:P.resolve(n)}catch(n){return P.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):P.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):P.reject(n)}static resolve(e){return new P((n,r)=>{n(e)})}static reject(e){return new P((n,r)=>{r(e)})}static waitFor(e){return new P((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=P.resolve(!1);for(const r of e)n=n.next(s=>s?P.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new P((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;n(e[c]).next(h=>{o[c]=h,++a,a===i&&r(o)},h=>s(h))}})}static doWhile(e,n){return new P((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class ad{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new at,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ya(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Tm(r.target.error);this.V.reject(new ya(e,s))}}static open(e,n,r,s){try{return new ad(n,e.transaction(s,r))}catch(i){throw new ya(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(U("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new Dk(n)}}class Sn{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Sn.S(et())===12.2&&He("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return U("SimpleDb","Removing database:",e),ws(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!sI())return!1;if(Sn.v())return!0;const e=et(),n=Sn.S(e),r=0<n&&n<10,s=rT(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static v(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.C)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}async M(e){return this.db||(U("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ya(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new F(O.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new F(O.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ya(e,o))},s.onupgradeneeded=i=>{U("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.O(o,s.transaction,i.oldVersion,this.version).next(()=>{U("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.M(e);const a=ad.open(this.db,e,i?"readonly":"readwrite",r),u=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),P.reject(c))).toPromise();return u.catch(()=>{}),await a.m,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(U("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function rT(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class Nk{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return ws(this.B.delete())}}class ya extends F{constructor(e,n){super(O.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function ns(t){return t.name==="IndexedDbTransactionError"}class Dk{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(U("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(U("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ws(r)}add(e){return U("SimpleDb","ADD",this.store.name,e,e),ws(this.store.add(e))}get(e){return ws(this.store.get(e)).next(n=>(n===void 0&&(n=null),U("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return U("SimpleDb","DELETE",this.store.name,e),ws(this.store.delete(e))}count(){return U("SimpleDb","COUNT",this.store.name),ws(this.store.count())}U(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new P((o,a)=>{i.onerror=u=>{a(u.target.error)},i.onsuccess=u=>{o(u.target.result)}})}{const i=this.cursor(r),o=[];return this.W(i,(a,u)=>{o.push(u)}).next(()=>o)}}G(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new P((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}j(e,n){U("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.H=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}J(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.W(s,n)}Y(e){const n=this.cursor({});return new P((r,s)=>{n.onerror=i=>{const o=Tm(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,n){const r=[];return new P((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const u=new Nk(a),c=n(a.primaryKey,a.value,u);if(c instanceof P){const h=c.catch(f=>(u.done(),P.reject(f)));r.push(h)}u.isDone?s():u.K===null?a.continue():a.continue(u.K)}}).next(()=>P.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.H?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ws(t){return new P((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Tm(r.target.error);n(s)}})}let av=!1;function Tm(t){const e=Sn.S(et());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new F("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return av||(av=!0,setTimeout(()=>{throw r},0)),r}}return t}class Vk{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){U("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{U("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){ns(n)?U("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await ts(n)}await this.X(6e4)})}}class Ok{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const r=new Set;let s=n,i=!0;return P.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return U("IndexBackfiller",`Processing collection: ${o}`),this.ne(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>n-s)}ne(e,n,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(s=>this.localStore.localDocuments.getNextDocuments(e,n,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.re(s,i)).next(a=>(U("IndexBackfiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,n,a))).next(()=>o.size)}))}re(e,n){let r=e;return n.changes.forEach((s,i)=>{const o=eT(i);Im(o,r)>0&&(r=o)}),new Yt(r.readTime,r.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Ft{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Ft.oe=-1;function fl(t){return t==null}function qa(t){return t===0&&1/t==-1/0}function sT(t){return typeof t=="number"&&Number.isInteger(t)&&!qa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function xt(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=lv(e)),e=Mk(t.get(n),e);return lv(e)}function Mk(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case"":n+="";break;default:n+=i}}return n}function lv(t){return t+""}function _n(t){const e=t.length;if(Z(e>=2),e===2)return Z(t.charAt(0)===""&&t.charAt(1)===""),le.emptyPath();const n=e-2,r=[];let s="";for(let i=0;i<e;){const o=t.indexOf("",i);switch((o<0||o>n)&&H(),t.charAt(o+1)){case"":const a=t.substring(i,o);let u;s.length===0?u=a:(s+=a,u=s,s=""),r.push(u);break;case"":s+=t.substring(i,o),s+="\0";break;case"":s+=t.substring(i,o+1);break;default:H()}i=o+2}return new le(r)}/**
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
 */const uv=["userId","batchId"];/**
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
 */function ju(t,e){return[t,xt(e)]}function iT(t,e,n){return[t,xt(e),n]}const Lk={},Fk=["prefixPath","collectionGroup","readTime","documentId"],jk=["prefixPath","collectionGroup","documentId"],Uk=["collectionGroup","readTime","prefixPath","documentId"],zk=["canonicalId","targetId"],Bk=["targetId","path"],$k=["path","targetId"],qk=["collectionId","parent"],Gk=["indexId","uid"],Kk=["uid","sequenceNumber"],Hk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Wk=["indexId","uid","orderedDocumentKey"],Qk=["userId","collectionPath","documentId"],Yk=["userId","collectionPath","largestBatchId"],Jk=["userId","collectionGroup","largestBatchId"],oT=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],Xk=[...oT,"documentOverlays"],aT=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],lT=aT,xm=[...lT,"indexConfiguration","indexState","indexEntries"],Zk=xm,eN=[...xm,"globals"];/**
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
 */class $f extends nT{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function tt(t,e){const n=$(t);return Sn.F(n._e,e)}/**
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
 */function cv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function rs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function uT(t,e){const n=[];for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&n.push(e(t[r],r,t));return n}function cT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ae{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new Ae(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new Ae(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new pu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new pu(this.root,e,this.comparator,!1)}getReverseIterator(){return new pu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new pu(this.root,e,this.comparator,!0)}}class pu{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw H();const e=this.left.check();if(e!==this.right.check())throw H();return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw H()}get value(){throw H()}get color(){throw H()}get left(){throw H()}get right(){throw H()}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new Ae(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new dv(this.data.getIterator())}getIteratorFrom(e){return new dv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class dv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function ii(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class jt{constructor(e){this.fields=e,e.sort(Ne.comparator)}static empty(){return new jt([])}unionWith(e){let n=new we(Ne.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class dT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function tN(){return typeof atob<"u"}/**
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
 */class Be{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dT("Invalid base64 string: "+i):i}}(e);return new Be(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Be(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Be.EMPTY_BYTE_STRING=new Be("");const nN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(t){if(Z(!!t),typeof t=="string"){let e=0;const n=nN.exec(t);if(Z(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Wn(t){return typeof t=="string"?Be.fromBase64String(t):Be.fromUint8Array(t)}/**
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
 */function ld(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ud(t){const e=t.mapValue.fields.__previous_value__;return ld(e)?ud(e):e}function Ga(t){const e=Hn(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class rN{constructor(e,n,r,s,i,o,a,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=c}}class qr{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new qr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof qr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ar={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Uu={nullValue:"NULL_VALUE"};function Gr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?ld(t)?4:hT(t)?9007199254740991:cd(t)?10:11:H()}function Rn(t,e){if(t===e)return!0;const n=Gr(t);if(n!==Gr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ga(t).isEqual(Ga(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Hn(s.timestampValue),a=Hn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Wn(s.bytesValue).isEqual(Wn(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?qa(o)===qa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Wi(t.arrayValue.values||[],e.arrayValue.values||[],Rn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(cv(o)!==cv(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!Rn(o[u],a[u])))return!1;return!0}(t,e);default:return H()}}function Ka(t,e){return(t.values||[]).find(n=>Rn(n,e))!==void 0}function Kr(t,e){if(t===e)return 0;const n=Gr(t),r=Gr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),u=Ve(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(t,e);case 3:return hv(t.timestampValue,e.timestampValue);case 4:return hv(Ga(t),Ga(e));case 5:return ne(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Wn(i),u=Wn(o);return a.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),u=o.split("/");for(let c=0;c<a.length&&c<u.length;c++){const h=ne(a[c],u[c]);if(h!==0)return h}return ne(a.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ne(Ve(i.latitude),Ve(o.latitude));return a!==0?a:ne(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return fv(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,u,c,h;const f=i.fields||{},m=o.fields||{},y=(a=f.value)===null||a===void 0?void 0:a.arrayValue,E=(u=m.value)===null||u===void 0?void 0:u.arrayValue,b=ne(((c=y==null?void 0:y.values)===null||c===void 0?void 0:c.length)||0,((h=E==null?void 0:E.values)===null||h===void 0?void 0:h.length)||0);return b!==0?b:fv(y,E)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ar.mapValue&&o===Ar.mapValue)return 0;if(i===Ar.mapValue)return 1;if(o===Ar.mapValue)return-1;const a=i.fields||{},u=Object.keys(a),c=o.fields||{},h=Object.keys(c);u.sort(),h.sort();for(let f=0;f<u.length&&f<h.length;++f){const m=ne(u[f],h[f]);if(m!==0)return m;const y=Kr(a[u[f]],c[h[f]]);if(y!==0)return y}return ne(u.length,h.length)}(t.mapValue,e.mapValue);default:throw H()}}function hv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Hn(t),r=Hn(e),s=ne(n.seconds,r.seconds);return s!==0?s:ne(n.nanos,r.nanos)}function fv(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Kr(n[s],r[s]);if(i)return i}return ne(n.length,r.length)}function Ji(t){return qf(t)}function qf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Hn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Wn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=qf(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${qf(n.fields[o])}`;return s+"}"}(t.mapValue):H()}function zu(t){switch(Gr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ud(t);return e?16+zu(e):16;case 5:return 2*t.stringValue.length;case 6:return Wn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+zu(i),0)}(t.arrayValue);case 10:case 11:return function(r){let s=0;return rs(r.fields,(i,o)=>{s+=i.length+zu(o)}),s}(t.mapValue);default:throw H()}}function js(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Gf(t){return!!t&&"integerValue"in t}function Ha(t){return!!t&&"arrayValue"in t}function pv(t){return!!t&&"nullValue"in t}function mv(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Bu(t){return!!t&&"mapValue"in t}function cd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function _a(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return rs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_a(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_a(t.arrayValue.values[n]);return e}return Object.assign({},t)}function hT(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}const fT={mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{}}}}};function sN(t){return"nullValue"in t?Uu:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?js(qr.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?cd(t)?fT:{mapValue:{}}:H()}function iN(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?js(qr.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?fT:"mapValue"in t?cd(t)?{mapValue:{}}:Ar:H()}function gv(t,e){const n=Kr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function yv(t,e){const n=Kr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class ht{constructor(e){this.value=e}static empty(){return new ht({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Bu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_a(n)}setAll(e){let n=Ne.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=_a(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Bu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Rn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Bu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){rs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ht(_a(this.value))}}function pT(t){const e=[];return rs(t.fields,(n,r)=>{const s=new Ne([n]);if(Bu(r)){const i=pT(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new jt(e)}/**
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
 */class ke{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ke(e,0,ee.min(),ee.min(),ee.min(),ht.empty(),0)}static newFoundDocument(e,n,r,s){return new ke(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new ke(e,2,n,ee.min(),ee.min(),ht.empty(),0)}static newUnknownDocument(e,n){return new ke(e,3,n,ee.min(),ee.min(),ht.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ht.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ht.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Hr{constructor(e,n){this.position=e,this.inclusive=n}}function _v(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=G.comparator(G.fromName(o.referenceValue),n.key):r=Kr(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function vv(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Rn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Wa{constructor(e,n="asc"){this.field=e,this.dir=n}}function oN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class mT{}class ue extends mT{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new aN(e,n,r):n==="array-contains"?new cN(e,r):n==="in"?new ET(e,r):n==="not-in"?new dN(e,r):n==="array-contains-any"?new hN(e,r):new ue(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new lN(e,r):new uN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Kr(n,this.value)):n!==null&&Gr(this.value)===Gr(n)&&this.matchesComparison(Kr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return H()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ye extends mT{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ye(e,n)}matches(e){return Xi(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Xi(t){return t.op==="and"}function Kf(t){return t.op==="or"}function Sm(t){return gT(t)&&Xi(t)}function gT(t){for(const e of t.filters)if(e instanceof ye)return!1;return!0}function Hf(t){if(t instanceof ue)return t.field.canonicalString()+t.op.toString()+Ji(t.value);if(Sm(t))return t.filters.map(e=>Hf(e)).join(",");{const e=t.filters.map(n=>Hf(n)).join(",");return`${t.op}(${e})`}}function yT(t,e){return t instanceof ue?function(r,s){return s instanceof ue&&r.op===s.op&&r.field.isEqual(s.field)&&Rn(r.value,s.value)}(t,e):t instanceof ye?function(r,s){return s instanceof ye&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&yT(o,s.filters[a]),!0):!1}(t,e):void H()}function _T(t,e){const n=t.filters.concat(e);return ye.create(n,t.op)}function vT(t){return t instanceof ue?function(n){return`${n.field.canonicalString()} ${n.op} ${Ji(n.value)}`}(t):t instanceof ye?function(n){return n.op.toString()+" {"+n.getFilters().map(vT).join(" ,")+"}"}(t):"Filter"}class aN extends ue{constructor(e,n,r){super(e,n,r),this.key=G.fromName(r.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class lN extends ue{constructor(e,n){super(e,"in",n),this.keys=wT("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class uN extends ue{constructor(e,n){super(e,"not-in",n),this.keys=wT("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wT(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>G.fromName(r.referenceValue))}class cN extends ue{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ha(n)&&Ka(n.arrayValue,this.value)}}class ET extends ue{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ka(this.value.arrayValue,n)}}class dN extends ue{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ka(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ka(this.value.arrayValue,n)}}class hN extends ue{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ha(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ka(this.value.arrayValue,r))}}/**
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
 */class fN{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ue=null}}function Wf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new fN(t,e,n,r,s,i,o)}function Us(t){const e=$(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Hf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),fl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ji(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ji(r)).join(",")),e.ue=n}return e.ue}function pl(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!oN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yT(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!vv(t.startAt,e.startAt)&&vv(t.endAt,e.endAt)}function bc(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Cc(t,e){return t.filters.filter(n=>n instanceof ue&&n.field.isEqual(e))}function wv(t,e,n){let r=Uu,s=!0;for(const i of Cc(t,e)){let o=Uu,a=!0;switch(i.op){case"<":case"<=":o=sN(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Uu}gv({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];gv({value:r,inclusive:s},{value:o,inclusive:n.inclusive})<0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}function Ev(t,e,n){let r=Ar,s=!0;for(const i of Cc(t,e)){let o=Ar,a=!0;switch(i.op){case">=":case">":o=iN(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Ar}yv({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(n!==null){for(let i=0;i<t.orderBy.length;++i)if(t.orderBy[i].field.isEqual(e)){const o=n.position[i];yv({value:r,inclusive:s},{value:o,inclusive:n.inclusive})>0&&(r=o,s=n.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Xn{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function IT(t,e,n,r,s,i,o,a){return new Xn(t,e,n,r,s,i,o,a)}function go(t){return new Xn(t)}function Iv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Am(t){return t.collectionGroup!==null}function Li(t){const e=$(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new we(Ne.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Wa(i,r))}),n.has(Ne.keyField().canonicalString())||e.ce.push(new Wa(Ne.keyField(),r))}return e.ce}function St(t){const e=$(t);return e.le||(e.le=xT(e,Li(t))),e.le}function TT(t){const e=$(t);return e.he||(e.he=xT(e,t.explicitOrderBy)),e.he}function xT(t,e){if(t.limitType==="F")return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Wa(s.field,i)});const n=t.endAt?new Hr(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Hr(t.startAt.position,t.startAt.inclusive):null;return Wf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Qf(t,e){const n=t.filters.concat([e]);return new Xn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Pc(t,e,n){return new Xn(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ml(t,e){return pl(St(t),St(e))&&t.limitType===e.limitType}function ST(t){return`${Us(St(t))}|lt:${t.limitType}`}function di(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>vT(s)).join(", ")}]`),fl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Ji(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Ji(s)).join(",")),`Target(${r})`}(St(t))}; limitType=${t.limitType})`}function gl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):G.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of Li(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,u){const c=_v(o,a,u);return o.inclusive?c<=0:c<0}(r.startAt,Li(r),s)||r.endAt&&!function(o,a,u){const c=_v(o,a,u);return o.inclusive?c>=0:c>0}(r.endAt,Li(r),s))}(t,e)}function AT(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function RT(t){return(e,n)=>{let r=!1;for(const s of Li(t)){const i=pN(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function pN(t,e,n){const r=t.field.isKeyField()?G.comparator(e.key,n.key):function(i,o,a){const u=o.data.field(i),c=a.data.field(i);return u!==null&&c!==null?Kr(u,c):H()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return H()}}/**
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
 */class Zn{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){rs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return cT(this.inner)}size(){return this.innerSize}}/**
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
 */const mN=new Ae(G.comparator);function Ut(){return mN}const bT=new Ae(G.comparator);function sa(...t){let e=bT;for(const n of t)e=e.insert(n.key,n);return e}function CT(t){let e=bT;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function vn(){return va()}function PT(){return va()}function va(){return new Zn(t=>t.toString(),(t,e)=>t.isEqual(e))}const gN=new Ae(G.comparator),yN=new we(G.comparator);function se(...t){let e=yN;for(const n of t)e=e.add(n);return e}const _N=new we(ne);function Rm(){return _N}/**
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
 */function bm(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qa(e)?"-0":e}}function kT(t){return{integerValue:""+t}}function NT(t,e){return sT(e)?kT(e):bm(t,e)}/**
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
 */class dd{constructor(){this._=void 0}}function vN(t,e,n){return t instanceof Zi?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&ld(i)&&(i=ud(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof zs?VT(t,e):t instanceof Bs?OT(t,e):function(s,i){const o=DT(s,i),a=Tv(o)+Tv(s.Pe);return Gf(o)&&Gf(s.Pe)?kT(a):bm(s.serializer,a)}(t,e)}function wN(t,e,n){return t instanceof zs?VT(t,e):t instanceof Bs?OT(t,e):n}function DT(t,e){return t instanceof eo?function(r){return Gf(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Zi extends dd{}class zs extends dd{constructor(e){super(),this.elements=e}}function VT(t,e){const n=MT(e);for(const r of t.elements)n.some(s=>Rn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Bs extends dd{constructor(e){super(),this.elements=e}}function OT(t,e){let n=MT(e);for(const r of t.elements)n=n.filter(s=>!Rn(s,r));return{arrayValue:{values:n}}}class eo extends dd{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Tv(t){return Ve(t.integerValue||t.doubleValue)}function MT(t){return Ha(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class yl{constructor(e,n){this.field=e,this.transform=n}}function EN(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof zs&&s instanceof zs||r instanceof Bs&&s instanceof Bs?Wi(r.elements,s.elements,Rn):r instanceof eo&&s instanceof eo?Rn(r.Pe,s.Pe):r instanceof Zi&&s instanceof Zi}(t.transform,e.transform)}class IN{constructor(e,n){this.version=e,this.transformResults=n}}class Me{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Me}static exists(e){return new Me(void 0,e)}static updateTime(e){return new Me(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $u(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class hd{}function LT(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new _o(t.key,Me.none()):new yo(t.key,t.data,Me.none());{const n=t.data,r=ht.empty();let s=new we(Ne.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new er(t.key,r,new jt(s.toArray()),Me.none())}}function TN(t,e,n){t instanceof yo?function(s,i,o){const a=s.value.clone(),u=Sv(s.fieldTransforms,i,o.transformResults);a.setAll(u),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof er?function(s,i,o){if(!$u(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Sv(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(FT(s)),u.setAll(a),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function wa(t,e,n,r){return t instanceof yo?function(i,o,a,u){if(!$u(i.precondition,o))return a;const c=i.value.clone(),h=Av(i.fieldTransforms,u,o);return c.setAll(h),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof er?function(i,o,a,u){if(!$u(i.precondition,o))return a;const c=Av(i.fieldTransforms,u,o),h=o.data;return h.setAll(FT(i)),h.setAll(c),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,r):function(i,o,a){return $u(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function xN(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=DT(r.transform,s||null);i!=null&&(n===null&&(n=ht.empty()),n.set(r.field,i))}return n||null}function xv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Wi(r,s,(i,o)=>EN(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yo extends hd{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class er extends hd{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function FT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Sv(t,e,n){const r=new Map;Z(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,wN(o,a,n[s]))}return r}function Av(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,vN(i,o,e))}return r}class _o extends hd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Cm extends hd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Pm{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&TN(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=wa(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=wa(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=PT();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const u=LT(o,a);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Wi(this.mutations,e.mutations,(n,r)=>xv(n,r))&&Wi(this.baseMutations,e.baseMutations,(n,r)=>xv(n,r))}}class km{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Z(e.mutations.length===r.length);let s=function(){return gN}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new km(e,n,r,s)}}/**
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
 */class Nm{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */class jT{constructor(e,n,r){this.alias=e,this.aggregateType=n,this.fieldPath=r}}/**
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
 */class SN{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,ce;function UT(t){switch(t){default:return H();case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0}}function zT(t){if(t===void 0)return He("GRPC error has no .code"),O.UNKNOWN;switch(t){case Qe.OK:return O.OK;case Qe.CANCELLED:return O.CANCELLED;case Qe.UNKNOWN:return O.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return O.INTERNAL;case Qe.UNAVAILABLE:return O.UNAVAILABLE;case Qe.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Qe.NOT_FOUND:return O.NOT_FOUND;case Qe.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Qe.ABORTED:return O.ABORTED;case Qe.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Qe.DATA_LOSS:return O.DATA_LOSS;default:return H()}}(ce=Qe||(Qe={}))[ce.OK=0]="OK",ce[ce.CANCELLED=1]="CANCELLED",ce[ce.UNKNOWN=2]="UNKNOWN",ce[ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ce[ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ce[ce.NOT_FOUND=5]="NOT_FOUND",ce[ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",ce[ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",ce[ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",ce[ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ce[ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ce[ce.ABORTED=10]="ABORTED",ce[ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",ce[ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",ce[ce.INTERNAL=13]="INTERNAL",ce[ce.UNAVAILABLE=14]="UNAVAILABLE",ce[ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */let kc=null;/**
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
 */function BT(){return new TextEncoder}/**
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
 */const AN=new Ps([4294967295,4294967295],0);function Rv(t){const e=BT().encode(t),n=new $I;return n.update(e),new Uint8Array(n.digest())}function bv(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Ps([n,r],0),new Ps([s,i],0)]}class Dm{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ia(`Invalid padding: ${n}`);if(r<0)throw new ia(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ia(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ia(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ps.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Ps.fromNumber(r)));return s.compare(AN)===1&&(s=new Ps([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Rv(e),[r,s]=bv(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Dm(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ie===0)return;const n=Rv(e),[r,s]=bv(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ia extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _l{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,vl.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _l(ee.min(),s,new Ae(ne),Ut(),se())}}class vl{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new vl(r,n,se(),se(),se())}}/**
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
 */class qu{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class $T{constructor(e,n){this.targetId=e,this.me=n}}class qT{constructor(e,n,r=Be.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Cv{constructor(){this.fe=0,this.ge=kv(),this.pe=Be.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=se(),n=se(),r=se();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:H()}}),new vl(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=kv()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,Z(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class RN{constructor(e){this.Le=e,this.Be=new Map,this.ke=Ut(),this.qe=Pv(),this.Qe=new Ae(ne)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:H()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(bc(i))if(r===0){const o=new G(i.path);this.Ue(n,o,ke.newNoDocument(o,ee.min()))}else Z(r===1);else{const o=this.Ye(n);if(o!==r){const a=this.Ze(e),u=a?this.Xe(a,e,o):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}kc==null||kc.et(function(h,f,m,y,E){var b,D,I,w,x,V;const z={localCacheCount:h,existenceFilterCount:f.count,databaseId:m.database,projectId:m.projectId},L=f.unchangedNames;return L&&(z.bloomFilter={applied:E===0,hashCount:(b=L==null?void 0:L.hashCount)!==null&&b!==void 0?b:0,bitmapLength:(w=(I=(D=L==null?void 0:L.bits)===null||D===void 0?void 0:D.bitmap)===null||I===void 0?void 0:I.length)!==null&&w!==void 0?w:0,padding:(V=(x=L==null?void 0:L.bits)===null||x===void 0?void 0:x.padding)!==null&&V!==void 0?V:0,mightContain:T=>{var v;return(v=y==null?void 0:y.mightContain(T))!==null&&v!==void 0&&v}}),z}(o,e.me,this.Le.tt(),a,u))}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Wn(r).toUint8Array()}catch(u){if(u instanceof dT)return Qt("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new Dm(o,s,i)}catch(u){return Qt(u instanceof ia?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Ie===0?null:a}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const a=this.Je(o);if(a){if(i.current&&bc(a.target)){const u=new G(a.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,ke.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=se();this.qe.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new _l(e,n,this.Qe,this.ke,r);return this.ke=Ut(),this.qe=Pv(),this.Qe=new Ae(ne),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new Cv,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new we(ne),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new Cv),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Pv(){return new Ae(G.comparator)}function kv(){return new Ae(G.comparator)}const bN={asc:"ASCENDING",desc:"DESCENDING"},CN={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PN={and:"AND",or:"OR"};class kN{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Yf(t,e){return t.useProto3Json||fl(e)?e:{value:e}}function to(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function GT(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NN(t,e){return to(t,e.toTimestamp())}function We(t){return Z(!!t),ee.fromTimestamp(function(n){const r=Hn(n);return new Le(r.seconds,r.nanos)}(t))}function Vm(t,e){return Jf(t,e).canonicalString()}function Jf(t,e){const n=function(s){return new le(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function KT(t){const e=le.fromString(t);return Z(nx(e)),e}function Qa(t,e){return Vm(t.databaseId,e.path)}function An(t,e){const n=KT(e);if(n.get(1)!==t.databaseId.projectId)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new F(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(QT(n))}function HT(t,e){return Vm(t.databaseId,e)}function WT(t){const e=KT(t);return e.length===4?le.emptyPath():QT(e)}function Xf(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function QT(t){return Z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Nv(t,e,n){return{name:Qa(t,e),fields:n.value.mapValue.fields}}function YT(t,e,n){const r=An(t,e.name),s=We(e.updateTime),i=e.createTime?We(e.createTime):ee.min(),o=new ht({mapValue:{fields:e.fields}}),a=ke.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function DN(t,e){return"found"in e?function(r,s){Z(!!s.found),s.found.name,s.found.updateTime;const i=An(r,s.found.name),o=We(s.found.updateTime),a=s.found.createTime?We(s.found.createTime):ee.min(),u=new ht({mapValue:{fields:s.found.fields}});return ke.newFoundDocument(i,o,a,u)}(t,e):"missing"in e?function(r,s){Z(!!s.missing),Z(!!s.readTime);const i=An(r,s.missing),o=We(s.readTime);return ke.newNoDocument(i,o)}(t,e):H()}function VN(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:H()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,h){return c.useProto3Json?(Z(h===void 0||typeof h=="string"),Be.fromBase64String(h||"")):(Z(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Be.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const h=c.code===void 0?O.UNKNOWN:zT(c.code);return new F(h,c.message||"")}(o);n=new qT(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=An(t,r.document.name),i=We(r.document.updateTime),o=r.document.createTime?We(r.document.createTime):ee.min(),a=new ht({mapValue:{fields:r.document.fields}}),u=ke.newFoundDocument(s,i,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new qu(c,h,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=An(t,r.document),i=r.readTime?We(r.readTime):ee.min(),o=ke.newNoDocument(s,i),a=r.removedTargetIds||[];n=new qu([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=An(t,r.document),i=r.removedTargetIds||[];n=new qu([],i,s,null)}else{if(!("filter"in e))return H();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new SN(s,i),a=r.targetId;n=new $T(a,o)}}return n}function Ya(t,e){let n;if(e instanceof yo)n={update:Nv(t,e.key,e.value)};else if(e instanceof _o)n={delete:Qa(t,e.key)};else if(e instanceof er)n={update:Nv(t,e.key,e.data),updateMask:UN(e.fieldMask)};else{if(!(e instanceof Cm))return H();n={verify:Qa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Zi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof zs)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Bs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof eo)return{fieldPath:o.field.canonicalString(),increment:a.Pe};throw H()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:NN(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:H()}(t,e.precondition)),n}function Zf(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?Me.updateTime(We(i.updateTime)):i.exists!==void 0?Me.exists(i.exists):Me.none()}(e.currentDocument):Me.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(o,a){let u=null;if("setToServerValue"in a)Z(a.setToServerValue==="REQUEST_TIME"),u=new Zi;else if("appendMissingElements"in a){const h=a.appendMissingElements.values||[];u=new zs(h)}else if("removeAllFromArray"in a){const h=a.removeAllFromArray.values||[];u=new Bs(h)}else"increment"in a?u=new eo(o,a.increment):H();const c=Ne.fromServerFormat(a.fieldPath);return new yl(c,u)}(t,s)):[];if(e.update){e.update.name;const s=An(t,e.update.name),i=new ht({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(u){const c=u.fieldPaths||[];return new jt(c.map(h=>Ne.fromServerFormat(h)))}(e.updateMask);return new er(s,i,o,n,r)}return new yo(s,i,n,r)}if(e.delete){const s=An(t,e.delete);return new _o(s,n)}if(e.verify){const s=An(t,e.verify);return new Cm(s,n)}return H()}function ON(t,e){return t&&t.length>0?(Z(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?We(s.updateTime):We(i);return o.isEqual(ee.min())&&(o=We(i)),new IN(o,s.transformResults||[])}(n,e))):[]}function JT(t,e){return{documents:[HT(t,e.path)]}}function fd(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=HT(t,s);const i=function(c){if(c.length!==0)return tx(ye.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(h=>function(m){return{field:vr(m.field),direction:LN(m.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=Yf(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:s}}function XT(t,e,n,r){const{_t:s,parent:i}=fd(t,e),o={},a=[];let u=0;return n.forEach(c=>{const h=r?c.alias:"aggregate_"+u++;o[h]=c.alias,c.aggregateType==="count"?a.push({alias:h,count:{}}):c.aggregateType==="avg"?a.push({alias:h,avg:{field:vr(c.fieldPath)}}):c.aggregateType==="sum"&&a.push({alias:h,sum:{field:vr(c.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},ut:o,parent:i}}function ZT(t){let e=WT(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Z(r===1);const h=n.from[0];h.allDescendants?s=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const m=ex(f);return m instanceof ye&&Sm(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(m=>function(E){return new Wa(hi(E.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(m))}(n.orderBy));let a=null;n.limit&&(a=function(f){let m;return m=typeof f=="object"?f.value:f,fl(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,y=f.values||[];return new Hr(y,m)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const m=!f.before,y=f.values||[];return new Hr(y,m)}(n.endAt)),IT(e,s,o,i,a,"F",u,c)}function MN(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return H()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ex(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=hi(n.unaryFilter.field);return ue.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=hi(n.unaryFilter.field);return ue.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=hi(n.unaryFilter.field);return ue.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=hi(n.unaryFilter.field);return ue.create(o,"!=",{nullValue:"NULL_VALUE"});default:return H()}}(t):t.fieldFilter!==void 0?function(n){return ue.create(hi(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return H()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ye.create(n.compositeFilter.filters.map(r=>ex(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return H()}}(n.compositeFilter.op))}(t):H()}function LN(t){return bN[t]}function FN(t){return CN[t]}function jN(t){return PN[t]}function vr(t){return{fieldPath:t.canonicalString()}}function hi(t){return Ne.fromServerFormat(t.fieldPath)}function tx(t){return t instanceof ue?function(n){if(n.op==="=="){if(mv(n.value))return{unaryFilter:{field:vr(n.field),op:"IS_NAN"}};if(pv(n.value))return{unaryFilter:{field:vr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mv(n.value))return{unaryFilter:{field:vr(n.field),op:"IS_NOT_NAN"}};if(pv(n.value))return{unaryFilter:{field:vr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vr(n.field),op:FN(n.op),value:n.value}}}(t):t instanceof ye?function(n){const r=n.getFilters().map(s=>tx(s));return r.length===1?r[0]:{compositeFilter:{op:jN(n.op),filters:r}}}(t):H()}function UN(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function nx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Fn{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=Be.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class rx{constructor(e){this.ct=e}}function zN(t,e){let n;if(e.document)n=YT(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=G.fromSegments(e.noDocument.path),s=qs(e.noDocument.readTime);n=ke.newNoDocument(r,s),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return H();{const r=G.fromSegments(e.unknownDocument.path),s=qs(e.unknownDocument.version);n=ke.newUnknownDocument(r,s)}}return e.readTime&&n.setReadTime(function(s){const i=new Le(s[0],s[1]);return ee.fromTimestamp(i)}(e.readTime)),n}function Dv(t,e){const n=e.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Nc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(i,o){return{name:Qa(i,o.key),fields:o.data.value.mapValue.fields,updateTime:to(i,o.version.toTimestamp()),createTime:to(i,o.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:$s(e.version)};else{if(!e.isUnknownDocument())return H();r.unknownDocument={path:n.path.toArray(),version:$s(e.version)}}return r}function Nc(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function $s(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function qs(t){const e=new Le(t.seconds,t.nanoseconds);return ee.fromTimestamp(e)}function Es(t,e){const n=(e.baseMutations||[]).map(i=>Zf(t.ct,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Zf(t.ct,i)),s=Le.fromMillis(e.localWriteTimeMs);return new Pm(e.batchId,s,n,r)}function oa(t){const e=qs(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?qs(t.lastLimboFreeSnapshotVersion):ee.min();let r;return r=function(i){return i.documents!==void 0}(t.query)?function(i){return Z(i.documents.length===1),St(go(WT(i.documents[0])))}(t.query):function(i){return St(ZT(i))}(t.query),new Fn(r,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,Be.fromBase64String(t.resumeToken))}function sx(t,e){const n=$s(e.snapshotVersion),r=$s(e.lastLimboFreeSnapshotVersion);let s;s=bc(e.target)?JT(t.ct,e.target):fd(t.ct,e.target)._t;const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Us(e.target),readTime:n,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Om(t){const e=ZT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Pc(e,e.limit,"L"):e}function Vh(t,e){return new Nm(e.largestBatchId,Zf(t.ct,e.overlayMutation))}function Vv(t,e){const n=e.path.lastSegment();return[t,xt(e.path.popLast()),n]}function Ov(t,e,n,r){return{indexId:t,uid:e,sequenceNumber:n,readTime:$s(r.readTime),documentKey:xt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class BN{getBundleMetadata(e,n){return Mv(e).get(n).next(r=>{if(r)return function(i){return{id:i.bundleId,createTime:qs(i.createTime),version:i.version}}(r)})}saveBundleMetadata(e,n){return Mv(e).put(function(s){return{bundleId:s.id,createTime:$s(We(s.createTime)),version:s.version}}(n))}getNamedQuery(e,n){return Lv(e).get(n).next(r=>{if(r)return function(i){return{name:i.name,query:Om(i.bundledQuery),readTime:qs(i.readTime)}}(r)})}saveNamedQuery(e,n){return Lv(e).put(function(s){return{name:s.name,readTime:$s(We(s.readTime)),bundledQuery:s.bundledQuery}}(n))}}function Mv(t){return tt(t,"bundles")}function Lv(t){return tt(t,"namedQueries")}/**
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
 */class pd{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const r=n.uid||"";return new pd(e,r)}getOverlay(e,n){return Wo(e).get(Vv(this.userId,n)).next(r=>r?Vh(this.serializer,r):null)}getOverlays(e,n){const r=vn();return P.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){const s=[];return r.forEach((i,o)=>{const a=new Nm(n,o);s.push(this.ht(e,a))}),P.waitFor(s)}removeOverlaysForBatchId(e,n,r){const s=new Set;n.forEach(o=>s.add(xt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Wo(e).j("collectionPathOverlayIndex",a))}),P.waitFor(i)}getOverlaysForCollection(e,n,r){const s=vn(),i=xt(n),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Wo(e).U("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Vh(this.serializer,u);s.set(c.getKey(),c)}return s})}getOverlaysForCollectionGroup(e,n,r,s){const i=vn();let o;const a=IDBKeyRange.bound([this.userId,n,r],[this.userId,n,Number.POSITIVE_INFINITY],!0);return Wo(e).J({index:"collectionGroupOverlayIndex",range:a},(u,c,h)=>{const f=Vh(this.serializer,c);i.size()<s||f.largestBatchId===o?(i.set(f.getKey(),f),o=f.largestBatchId):h.done()}).next(()=>i)}ht(e,n){return Wo(e).put(function(s,i,o){const[a,u,c]=Vv(i,o.mutation.key);return{userId:i,collectionPath:u,documentId:c,collectionGroup:o.mutation.key.getCollectionGroup(),largestBatchId:o.largestBatchId,overlayMutation:Ya(s.ct,o.mutation)}}(this.serializer,this.userId,n))}}function Wo(t){return tt(t,"documentOverlays")}/**
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
 */class $N{Pt(e){return tt(e,"globals")}getSessionToken(e){return this.Pt(e).get("sessionToken").next(n=>{const r=n==null?void 0:n.value;return r?Be.fromUint8Array(r):Be.EMPTY_BYTE_STRING})}setSessionToken(e,n){return this.Pt(e).put({name:"sessionToken",value:n.toUint8Array()})}}/**
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
 */class Is{constructor(){}It(e,n){this.Tt(e,n),n.Et()}Tt(e,n){if("nullValue"in e)this.dt(n,5);else if("booleanValue"in e)this.dt(n,10),n.At(e.booleanValue?1:0);else if("integerValue"in e)this.dt(n,15),n.At(Ve(e.integerValue));else if("doubleValue"in e){const r=Ve(e.doubleValue);isNaN(r)?this.dt(n,13):(this.dt(n,15),qa(r)?n.At(0):n.At(r))}else if("timestampValue"in e){let r=e.timestampValue;this.dt(n,20),typeof r=="string"&&(r=Hn(r)),n.Rt(`${r.seconds||""}`),n.At(r.nanos||0)}else if("stringValue"in e)this.Vt(e.stringValue,n),this.ft(n);else if("bytesValue"in e)this.dt(n,30),n.gt(Wn(e.bytesValue)),this.ft(n);else if("referenceValue"in e)this.yt(e.referenceValue,n);else if("geoPointValue"in e){const r=e.geoPointValue;this.dt(n,45),n.At(r.latitude||0),n.At(r.longitude||0)}else"mapValue"in e?hT(e)?this.dt(n,Number.MAX_SAFE_INTEGER):cd(e)?this.wt(e.mapValue,n):(this.St(e.mapValue,n),this.ft(n)):"arrayValue"in e?(this.bt(e.arrayValue,n),this.ft(n)):H()}Vt(e,n){this.dt(n,25),this.Dt(e,n)}Dt(e,n){n.Rt(e)}St(e,n){const r=e.fields||{};this.dt(n,55);for(const s of Object.keys(r))this.Vt(s,n),this.Tt(r[s],n)}wt(e,n){var r,s;const i=e.fields||{};this.dt(n,53);const o="value",a=((s=(r=i[o].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.length)||0;this.dt(n,15),n.At(Ve(a)),this.Vt(o,n),this.Tt(i[o],n)}bt(e,n){const r=e.values||[];this.dt(n,50);for(const s of r)this.Tt(s,n)}yt(e,n){this.dt(n,37),G.fromName(e).path.forEach(r=>{this.dt(n,60),this.Dt(r,n)})}dt(e,n){e.At(n)}ft(e){e.At(2)}}Is.vt=new Is;function qN(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function Fv(t){const e=64-function(r){let s=0;for(let i=0;i<8;++i){const o=qN(255&r[i]);if(s+=o,o!==8)break}return s}(t);return Math.ceil(e/8)}class GN{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ct(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ft(r.value),r=n.next();this.Mt()}xt(e){const n=e[Symbol.iterator]();let r=n.next();for(;!r.done;)this.Ot(r.value),r=n.next();this.Nt()}Lt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ft(r);else if(r<2048)this.Ft(960|r>>>6),this.Ft(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ft(480|r>>>12),this.Ft(128|63&r>>>6),this.Ft(128|63&r);else{const s=n.codePointAt(0);this.Ft(240|s>>>18),this.Ft(128|63&s>>>12),this.Ft(128|63&s>>>6),this.Ft(128|63&s)}}this.Mt()}Bt(e){for(const n of e){const r=n.charCodeAt(0);if(r<128)this.Ot(r);else if(r<2048)this.Ot(960|r>>>6),this.Ot(128|63&r);else if(n<"\uD800"||"\uDBFF"<n)this.Ot(480|r>>>12),this.Ot(128|63&r>>>6),this.Ot(128|63&r);else{const s=n.codePointAt(0);this.Ot(240|s>>>18),this.Ot(128|63&s>>>12),this.Ot(128|63&s>>>6),this.Ot(128|63&s)}}this.Nt()}kt(e){const n=this.qt(e),r=Fv(n);this.Qt(1+r),this.buffer[this.position++]=255&r;for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=255&n[s]}Kt(e){const n=this.qt(e),r=Fv(n);this.Qt(1+r),this.buffer[this.position++]=~(255&r);for(let s=n.length-r;s<n.length;++s)this.buffer[this.position++]=~(255&n[s])}$t(){this.Ut(255),this.Ut(255)}Wt(){this.Gt(255),this.Gt(255)}reset(){this.position=0}seed(e){this.Qt(e.length),this.buffer.set(e,this.position),this.position+=e.length}zt(){return this.buffer.slice(0,this.position)}qt(e){const n=function(i){const o=new DataView(new ArrayBuffer(8));return o.setFloat64(0,i,!1),new Uint8Array(o.buffer)}(e),r=(128&n[0])!=0;n[0]^=r?255:128;for(let s=1;s<n.length;++s)n[s]^=r?255:0;return n}Ft(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(n)}Ot(e){const n=255&e;n===0?(this.Gt(0),this.Gt(255)):n===255?(this.Gt(255),this.Gt(0)):this.Gt(e)}Mt(){this.Ut(0),this.Ut(1)}Nt(){this.Gt(0),this.Gt(1)}Ut(e){this.Qt(1),this.buffer[this.position++]=e}Gt(e){this.Qt(1),this.buffer[this.position++]=~e}Qt(e){const n=e+this.position;if(n<=this.buffer.length)return;let r=2*this.buffer.length;r<n&&(r=n);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class KN{constructor(e){this.jt=e}gt(e){this.jt.Ct(e)}Rt(e){this.jt.Lt(e)}At(e){this.jt.kt(e)}Et(){this.jt.$t()}}class HN{constructor(e){this.jt=e}gt(e){this.jt.xt(e)}Rt(e){this.jt.Bt(e)}At(e){this.jt.Kt(e)}Et(){this.jt.Wt()}}class Qo{constructor(){this.jt=new GN,this.Ht=new KN(this.jt),this.Jt=new HN(this.jt)}seed(e){this.jt.seed(e)}Yt(e){return e===0?this.Ht:this.Jt}zt(){return this.jt.zt()}reset(){this.jt.reset()}}/**
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
 */class Ts{constructor(e,n,r,s){this.indexId=e,this.documentKey=n,this.arrayValue=r,this.directionalValue=s}Zt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(n);return r.set(this.directionalValue,0),n!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Ts(this.indexId,this.documentKey,this.arrayValue,r)}}function ar(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=jv(t.arrayValue,e.arrayValue),n!==0?n:(n=jv(t.directionalValue,e.directionalValue),n!==0?n:G.comparator(t.documentKey,e.documentKey)))}function jv(t,e){for(let n=0;n<t.length&&n<e.length;++n){const r=t[n]-e[n];if(r!==0)return r}return t.length-e.length}/**
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
 */class Uv{constructor(e){this.Xt=new we((n,r)=>Ne.comparator(n.field,r.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.en=e.orderBy,this.tn=[];for(const n of e.filters){const r=n;r.isInequality()?this.Xt=this.Xt.add(r):this.tn.push(r)}}get nn(){return this.Xt.size>1}rn(e){if(Z(e.collectionGroup===this.collectionId),this.nn)return!1;const n=Bf(e);if(n!==void 0&&!this.sn(n))return!1;const r=ys(e);let s=new Set,i=0,o=0;for(;i<r.length&&this.sn(r[i]);++i)s=s.add(r[i].fieldPath.canonicalString());if(i===r.length)return!0;if(this.Xt.size>0){const a=this.Xt.getIterator().getNext();if(!s.has(a.field.canonicalString())){const u=r[i];if(!this.on(a,u)||!this._n(this.en[o++],u))return!1}++i}for(;i<r.length;++i){const a=r[i];if(o>=this.en.length||!this._n(this.en[o++],a))return!1}return!0}an(){if(this.nn)return null;let e=new we(Ne.comparator);const n=[];for(const r of this.tn)if(!r.field.isKeyField())if(r.op==="array-contains"||r.op==="array-contains-any")n.push(new ks(r.field,2));else{if(e.has(r.field))continue;e=e.add(r.field),n.push(new ks(r.field,0))}for(const r of this.en)r.field.isKeyField()||e.has(r.field)||(e=e.add(r.field),n.push(new ks(r.field,r.dir==="asc"?0:1)));return new Qi(Qi.UNKNOWN_ID,this.collectionId,n,Yi.empty())}sn(e){for(const n of this.tn)if(this.on(n,e))return!0;return!1}on(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===r}_n(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function ix(t){var e,n;if(Z(t instanceof ue||t instanceof ye),t instanceof ue){if(t instanceof ET){const s=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(i=>ue.create(t.field,"==",i)))||[];return ye.create(s,"or")}return t}const r=t.filters.map(s=>ix(s));return ye.create(r,t.op)}function WN(t){if(t.getFilters().length===0)return[];const e=np(ix(t));return Z(ox(e)),ep(e)||tp(e)?[e]:e.getFilters()}function ep(t){return t instanceof ue}function tp(t){return t instanceof ye&&Sm(t)}function ox(t){return ep(t)||tp(t)||function(n){if(n instanceof ye&&Kf(n)){for(const r of n.getFilters())if(!ep(r)&&!tp(r))return!1;return!0}return!1}(t)}function np(t){if(Z(t instanceof ue||t instanceof ye),t instanceof ue)return t;if(t.filters.length===1)return np(t.filters[0]);const e=t.filters.map(r=>np(r));let n=ye.create(e,t.op);return n=Dc(n),ox(n)?n:(Z(n instanceof ye),Z(Xi(n)),Z(n.filters.length>1),n.filters.reduce((r,s)=>Mm(r,s)))}function Mm(t,e){let n;return Z(t instanceof ue||t instanceof ye),Z(e instanceof ue||e instanceof ye),n=t instanceof ue?e instanceof ue?function(s,i){return ye.create([s,i],"and")}(t,e):zv(t,e):e instanceof ue?zv(e,t):function(s,i){if(Z(s.filters.length>0&&i.filters.length>0),Xi(s)&&Xi(i))return _T(s,i.getFilters());const o=Kf(s)?s:i,a=Kf(s)?i:s,u=o.filters.map(c=>Mm(c,a));return ye.create(u,"or")}(t,e),Dc(n)}function zv(t,e){if(Xi(e))return _T(e,t.getFilters());{const n=e.filters.map(r=>Mm(t,r));return ye.create(n,"or")}}function Dc(t){if(Z(t instanceof ue||t instanceof ye),t instanceof ue)return t;const e=t.getFilters();if(e.length===1)return Dc(e[0]);if(gT(t))return t;const n=e.map(s=>Dc(s)),r=[];return n.forEach(s=>{s instanceof ue?r.push(s):s instanceof ye&&(s.op===t.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ye.create(r,t.op)}/**
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
 */class QN{constructor(){this.un=new Lm}addToCollectionParentIndex(e,n){return this.un.add(n),P.resolve()}getCollectionParents(e,n){return P.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return P.resolve()}deleteFieldIndex(e,n){return P.resolve()}deleteAllFieldIndexes(e){return P.resolve()}createTargetIndexes(e,n){return P.resolve()}getDocumentsMatchingTarget(e,n){return P.resolve(null)}getIndexType(e,n){return P.resolve(0)}getFieldIndexes(e,n){return P.resolve([])}getNextCollectionGroupToUpdate(e){return P.resolve(null)}getMinOffset(e,n){return P.resolve(Yt.min())}getMinOffsetFromCollectionGroup(e,n){return P.resolve(Yt.min())}updateCollectionGroup(e,n,r){return P.resolve()}updateIndexEntries(e,n){return P.resolve()}}class Lm{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new we(le.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new we(le.comparator)).toArray()}}/**
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
 */const mu=new Uint8Array(0);class YN{constructor(e,n){this.databaseId=n,this.cn=new Lm,this.ln=new Zn(r=>Us(r),(r,s)=>pl(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.cn.has(n)){const r=n.lastSegment(),s=n.popLast();e.addOnCommittedListener(()=>{this.cn.add(n)});const i={collectionId:r,parent:xt(s)};return Bv(e).put(i)}return P.resolve()}getCollectionParents(e,n){const r=[],s=IDBKeyRange.bound([n,""],[XI(n),""],!1,!0);return Bv(e).U(s).next(i=>{for(const o of i){if(o.collectionId!==n)break;r.push(_n(o.parent))}return r})}addFieldIndex(e,n){const r=Yo(e),s=function(a){return{indexId:a.indexId,collectionGroup:a.collectionGroup,fields:a.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete s.indexId;const i=r.add(s);if(n.indexState){const o=ai(e);return i.next(a=>{o.put(Ov(a,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return i.next()}deleteFieldIndex(e,n){const r=Yo(e),s=ai(e),i=oi(e);return r.delete(n.indexId).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=Yo(e),r=oi(e),s=ai(e);return n.j().next(()=>r.j()).next(()=>s.j())}createTargetIndexes(e,n){return P.forEach(this.hn(n),r=>this.getIndexType(e,r).next(s=>{if(s===0||s===1){const i=new Uv(r).an();if(i!=null)return this.addFieldIndex(e,i)}}))}getDocumentsMatchingTarget(e,n){const r=oi(e);let s=!0;const i=new Map;return P.forEach(this.hn(n),o=>this.Pn(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=se();const a=[];return P.forEach(i,(u,c)=>{U("IndexedDbIndexManager",`Using index ${function(x){return`id=${x.indexId}|cg=${x.collectionGroup}|f=${x.fields.map(V=>`${V.fieldPath}:${V.kind}`).join(",")}`}(u)} to execute ${Us(n)}`);const h=function(x,V){const z=Bf(V);if(z===void 0)return null;for(const L of Cc(x,z.fieldPath))switch(L.op){case"array-contains-any":return L.value.arrayValue.values||[];case"array-contains":return[L.value]}return null}(c,u),f=function(x,V){const z=new Map;for(const L of ys(V))for(const T of Cc(x,L.fieldPath))switch(T.op){case"==":case"in":z.set(L.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return z.set(L.fieldPath.canonicalString(),T.value),Array.from(z.values())}return null}(c,u),m=function(x,V){const z=[];let L=!0;for(const T of ys(V)){const v=T.kind===0?wv(x,T.fieldPath,x.startAt):Ev(x,T.fieldPath,x.startAt);z.push(v.value),L&&(L=v.inclusive)}return new Hr(z,L)}(c,u),y=function(x,V){const z=[];let L=!0;for(const T of ys(V)){const v=T.kind===0?Ev(x,T.fieldPath,x.endAt):wv(x,T.fieldPath,x.endAt);z.push(v.value),L&&(L=v.inclusive)}return new Hr(z,L)}(c,u),E=this.In(u,c,m),b=this.In(u,c,y),D=this.Tn(u,c,f),I=this.En(u.indexId,h,E,m.inclusive,b,y.inclusive,D);return P.forEach(I,w=>r.G(w,n.limit).next(x=>{x.forEach(V=>{const z=G.fromSegments(V.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return P.resolve(null)})}hn(e){let n=this.ln.get(e);return n||(e.filters.length===0?n=[e]:n=WN(ye.create(e.filters,"and")).map(r=>Wf(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.ln.set(e,n),n)}En(e,n,r,s,i,o,a){const u=(n!=null?n.length:1)*Math.max(r.length,i.length),c=u/(n!=null?n.length:1),h=[];for(let f=0;f<u;++f){const m=n?this.dn(n[f/c]):mu,y=this.An(e,m,r[f%c],s),E=this.Rn(e,m,i[f%c],o),b=a.map(D=>this.An(e,m,D,!0));h.push(...this.createRange(y,E,b))}return h}An(e,n,r,s){const i=new Ts(e,G.empty(),n,r);return s?i:i.Zt()}Rn(e,n,r,s){const i=new Ts(e,G.empty(),n,r);return s?i.Zt():i}Pn(e,n){const r=new Uv(n),s=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.rn(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,n){let r=2;const s=this.hn(n);return P.forEach(s,i=>this.Pn(e,i).next(o=>{o?r!==0&&o.fields.length<function(u){let c=new we(Ne.comparator),h=!1;for(const f of u.filters)for(const m of f.getFlattenedFilters())m.field.isKeyField()||(m.op==="array-contains"||m.op==="array-contains-any"?h=!0:c=c.add(m.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(h?1:0)}(i)&&(r=1):r=0})).next(()=>function(o){return o.limit!==null}(n)&&s.length>1&&r===2?1:r)}Vn(e,n){const r=new Qo;for(const s of ys(e)){const i=n.data.field(s.fieldPath);if(i==null)return null;const o=r.Yt(s.kind);Is.vt.It(i,o)}return r.zt()}dn(e){const n=new Qo;return Is.vt.It(e,n.Yt(0)),n.zt()}mn(e,n){const r=new Qo;return Is.vt.It(js(this.databaseId,n),r.Yt(function(i){const o=ys(i);return o.length===0?0:o[o.length-1].kind}(e))),r.zt()}Tn(e,n,r){if(r===null)return[];let s=[];s.push(new Qo);let i=0;for(const o of ys(e)){const a=r[i++];for(const u of s)if(this.fn(n,o.fieldPath)&&Ha(a))s=this.gn(s,o,a);else{const c=u.Yt(o.kind);Is.vt.It(a,c)}}return this.pn(s)}In(e,n,r){return this.Tn(e,n,r.position)}pn(e){const n=[];for(let r=0;r<e.length;++r)n[r]=e[r].zt();return n}gn(e,n,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const u=new Qo;u.seed(a.zt()),Is.vt.It(o,u.Yt(n.kind)),i.push(u)}return i}fn(e,n){return!!e.filters.find(r=>r instanceof ue&&r.field.isEqual(n)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,n){const r=Yo(e),s=ai(e);return(n?r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):r.U()).next(i=>{const o=[];return P.forEach(i,a=>s.get([a.indexId,this.uid]).next(u=>{o.push(function(h,f){const m=f?new Yi(f.sequenceNumber,new Yt(qs(f.readTime),new G(_n(f.documentKey)),f.largestBatchId)):Yi.empty(),y=h.fields.map(([E,b])=>new ks(Ne.fromServerFormat(E),b));return new Qi(h.indexId,h.collectionGroup,y,m)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:ne(r.collectionGroup,s.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,r){const s=Yo(e),i=ai(e);return this.yn(e).next(o=>s.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(a=>P.forEach(a,u=>i.put(Ov(u.indexId,this.uid,o,r)))))}updateIndexEntries(e,n){const r=new Map;return P.forEach(n,(s,i)=>{const o=r.get(s.collectionGroup);return(o?P.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),P.forEach(a,u=>this.wn(e,s,u).next(c=>{const h=this.Sn(i,u);return c.isEqual(h)?P.resolve():this.bn(e,i,u,c,h)}))))})}Dn(e,n,r,s){return oi(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.mn(r,n.key),documentKey:n.key.path.toArray()})}vn(e,n,r,s){return oi(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.mn(r,n.key),n.key.path.toArray()])}wn(e,n,r){const s=oi(e);let i=new we(ar);return s.J({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.mn(r,n)])},(o,a)=>{i=i.add(new Ts(r.indexId,n,a.arrayValue,a.directionalValue))}).next(()=>i)}Sn(e,n){let r=new we(ar);const s=this.Vn(n,e);if(s==null)return r;const i=Bf(n);if(i!=null){const o=e.data.field(i.fieldPath);if(Ha(o))for(const a of o.arrayValue.values||[])r=r.add(new Ts(n.indexId,e.key,this.dn(a),s))}else r=r.add(new Ts(n.indexId,e.key,mu,s));return r}bn(e,n,r,s,i){U("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const o=[];return function(u,c,h,f,m){const y=u.getIterator(),E=c.getIterator();let b=ii(y),D=ii(E);for(;b||D;){let I=!1,w=!1;if(b&&D){const x=h(b,D);x<0?w=!0:x>0&&(I=!0)}else b!=null?w=!0:I=!0;I?(f(D),D=ii(E)):w?(m(b),b=ii(y)):(b=ii(y),D=ii(E))}}(s,i,ar,a=>{o.push(this.Dn(e,n,r,a))},a=>{o.push(this.vn(e,n,r,a))}),P.waitFor(o)}yn(e){let n=1;return ai(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),n=s.sequenceNumber+1}).next(()=>n)}createRange(e,n,r){r=r.sort((o,a)=>ar(o,a)).filter((o,a,u)=>!a||ar(o,u[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=ar(o,e),u=ar(o,n);if(a===0)s[0]=e.Zt();else if(a>0&&u<0)s.push(o),s.push(o.Zt());else if(u>0)break}s.push(n);const i=[];for(let o=0;o<s.length;o+=2){if(this.Cn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,mu,[]],u=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,mu,[]];i.push(IDBKeyRange.bound(a,u))}return i}Cn(e,n){return ar(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next($v)}getMinOffset(e,n){return P.mapArray(this.hn(n),r=>this.Pn(e,r).next(s=>s||H())).next($v)}}function Bv(t){return tt(t,"collectionParents")}function oi(t){return tt(t,"indexEntries")}function Yo(t){return tt(t,"indexConfiguration")}function ai(t){return tt(t,"indexState")}function $v(t){Z(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let r=1;r<t.length;r++){const s=t[r].indexState.offset;Im(s,e)<0&&(e=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new Yt(e.readTime,e.documentKey,n)}/**
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
 */const qv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Et{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Et(e,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function ax(t,e,n){const r=t.store("mutations"),s=t.store("documentMutations"),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.J({range:o},(h,f,m)=>(a++,m.delete()));i.push(u.next(()=>{Z(a===1)}));const c=[];for(const h of n.mutations){const f=iT(e,h.key.path,n.batchId);i.push(s.delete(f)),c.push(h.key)}return P.waitFor(i).next(()=>c)}function Vc(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw H();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Et.DEFAULT_COLLECTION_PERCENTILE=10,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Et.DEFAULT=new Et(41943040,Et.DEFAULT_COLLECTION_PERCENTILE,Et.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Et.DISABLED=new Et(-1,0,0);class md{constructor(e,n,r,s){this.userId=e,this.serializer=n,this.indexManager=r,this.referenceDelegate=s,this.Fn={}}static lt(e,n,r,s){Z(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new md(i,n,r,s)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).J({index:"userMutationsIndex",range:r},(s,i,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,s){const i=fi(e),o=lr(e);return o.add({}).next(a=>{Z(typeof a=="number");const u=new Pm(a,n,r,s),c=function(y,E,b){const D=b.baseMutations.map(w=>Ya(y.ct,w)),I=b.mutations.map(w=>Ya(y.ct,w));return{userId:E,batchId:b.batchId,localWriteTimeMs:b.localWriteTime.toMillis(),baseMutations:D,mutations:I}}(this.serializer,this.userId,u),h=[];let f=new we((m,y)=>ne(m.canonicalString(),y.canonicalString()));for(const m of s){const y=iT(this.userId,m.key.path,a);f=f.add(m.key.path.popLast()),h.push(o.put(c)),h.push(i.put(y,Lk))}return f.forEach(m=>{h.push(this.indexManager.addToCollectionParentIndex(e,m))}),e.addOnCommittedListener(()=>{this.Fn[a]=u.keys()}),P.waitFor(h).next(()=>u)})}lookupMutationBatch(e,n){return lr(e).get(n).next(r=>r?(Z(r.userId===this.userId),Es(this.serializer,r)):null)}Mn(e,n){return this.Fn[n]?P.resolve(this.Fn[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const s=r.keys();return this.Fn[n]=s,s}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return lr(e).J({index:"userMutationsIndex",range:s},(o,a,u)=>{a.userId===this.userId&&(Z(a.batchId>=r),i=Es(this.serializer,a)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return lr(e).J({index:"userMutationsIndex",range:n,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return lr(e).U("userMutationsIndex",n).next(r=>r.map(s=>Es(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=ju(this.userId,n.path),s=IDBKeyRange.lowerBound(r),i=[];return fi(e).J({range:s},(o,a,u)=>{const[c,h,f]=o,m=_n(h);if(c===this.userId&&n.path.isEqual(m))return lr(e).get(f).next(y=>{if(!y)throw H();Z(y.userId===this.userId),i.push(Es(this.serializer,y))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(ne);const s=[];return n.forEach(i=>{const o=ju(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=fi(e).J({range:a},(c,h,f)=>{const[m,y,E]=c,b=_n(y);m===this.userId&&i.path.isEqual(b)?r=r.add(E):f.done()});s.push(u)}),P.waitFor(s).next(()=>this.xn(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1,i=ju(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new we(ne);return fi(e).J({range:o},(u,c,h)=>{const[f,m,y]=u,E=_n(m);f===this.userId&&r.isPrefixOf(E)?E.length===s&&(a=a.add(y)):h.done()}).next(()=>this.xn(e,a))}xn(e,n){const r=[],s=[];return n.forEach(i=>{s.push(lr(e).get(i).next(o=>{if(o===null)throw H();Z(o.userId===this.userId),r.push(Es(this.serializer,o))}))}),P.waitFor(s).next(()=>r)}removeMutationBatch(e,n){return ax(e._e,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.On(n.batchId)}),P.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}On(e){delete this.Fn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return P.resolve();const r=IDBKeyRange.lowerBound(function(o){return[o]}(this.userId)),s=[];return fi(e).J({range:r},(i,o,a)=>{if(i[0]===this.userId){const u=_n(i[1]);s.push(u)}else a.done()}).next(()=>{Z(s.length===0)})})}containsKey(e,n){return lx(e,this.userId,n)}Nn(e){return ux(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function lx(t,e,n){const r=ju(e,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return fi(t).J({range:i,H:!0},(a,u,c)=>{const[h,f,m]=a;h===e&&f===s&&(o=!0),c.done()}).next(()=>o)}function lr(t){return tt(t,"mutations")}function fi(t){return tt(t,"documentMutations")}function ux(t){return tt(t,"mutationQueues")}/**
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
 */class Gs{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Gs(0)}static kn(){return new Gs(-1)}}/**
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
 */class JN{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.qn(e).next(n=>{const r=new Gs(n.highestTargetId);return n.highestTargetId=r.next(),this.Qn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.qn(e).next(n=>ee.fromTimestamp(new Le(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.qn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.qn(e).next(s=>(s.highestListenSequenceNumber=n,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),n>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=n),this.Qn(e,s)))}addTargetData(e,n){return this.Kn(e,n).next(()=>this.qn(e).next(r=>(r.targetCount+=1,this.$n(n,r),this.Qn(e,r))))}updateTargetData(e,n){return this.Kn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>li(e).delete(n.targetId)).next(()=>this.qn(e)).next(r=>(Z(r.targetCount>0),r.targetCount-=1,this.Qn(e,r)))}removeTargets(e,n,r){let s=0;const i=[];return li(e).J((o,a)=>{const u=oa(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(s++,i.push(this.removeTargetData(e,u)))}).next(()=>P.waitFor(i)).next(()=>s)}forEachTarget(e,n){return li(e).J((r,s)=>{const i=oa(s);n(i)})}qn(e){return Gv(e).get("targetGlobalKey").next(n=>(Z(n!==null),n))}Qn(e,n){return Gv(e).put("targetGlobalKey",n)}Kn(e,n){return li(e).put(sx(this.serializer,n))}$n(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.qn(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Us(n),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return li(e).J({range:s,index:"queryTargetsIndex"},(o,a,u)=>{const c=oa(a);pl(n,c.target)&&(i=c,u.done())}).next(()=>i)}addMatchingKeys(e,n,r){const s=[],i=wr(e);return n.forEach(o=>{const a=xt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),P.waitFor(s)}removeMatchingKeys(e,n,r){const s=wr(e);return P.forEach(n,i=>{const o=xt(i.path);return P.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,n){const r=wr(e),s=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),s=wr(e);let i=se();return s.J({range:r,H:!0},(o,a,u)=>{const c=_n(o[1]),h=new G(c);i=i.add(h)}).next(()=>i)}containsKey(e,n){const r=xt(n.path),s=IDBKeyRange.bound([r],[XI(r)],!1,!0);let i=0;return wr(e).J({index:"documentTargetsIndex",H:!0,range:s},([o,a],u,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}ot(e,n){return li(e).get(n).next(r=>r?oa(r):null)}}function li(t){return tt(t,"targets")}function Gv(t){return tt(t,"targetGlobal")}function wr(t){return tt(t,"targetDocuments")}/**
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
 */function Kv([t,e],[n,r]){const s=ne(t,n);return s===0?ne(e,r):s}class XN{constructor(e){this.Un=e,this.buffer=new we(Kv),this.Wn=0}Gn(){return++this.Wn}zn(e){const n=[e,this.Gn()];if(this.buffer.size<this.Un)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Kv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class cx{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.jn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Hn(6e4)}stop(){this.jn&&(this.jn.cancel(),this.jn=null)}get started(){return this.jn!==null}Hn(e){U("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.jn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.jn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ns(n)?U("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await ts(n)}await this.Hn(3e5)})}}class ZN{constructor(e,n){this.Jn=e,this.params=n}calculateTargetCount(e,n){return this.Jn.Yn(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return P.resolve(Ft.oe);const r=new XN(n);return this.Jn.forEachTarget(e,s=>r.zn(s.sequenceNumber)).next(()=>this.Jn.Zn(e,s=>r.zn(s))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Jn.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(qv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qv):this.Xn(e,n))}getCacheSize(e){return this.Jn.getCacheSize(e)}Xn(e,n){let r,s,i,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),s=this.params.maximumSequenceNumbersToCollect):s=f,o=Date.now(),this.nthSequenceNumber(e,s))).next(f=>(r=f,a=Date.now(),this.removeTargets(e,r,n))).next(f=>(i=f,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(f=>(c=Date.now(),ci()<=ae.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-h}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:f})))}}function dx(t,e){return new ZN(t,e)}/**
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
 */class eD{constructor(e,n){this.db=e,this.garbageCollector=dx(this,n)}Yn(e){const n=this.er(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Zn(e,n){return this.tr(e,(r,s)=>n(s))}addReference(e,n,r){return gu(e,r)}removeReference(e,n,r){return gu(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return gu(e,n)}nr(e,n){return function(s,i){let o=!1;return ux(s).Y(a=>lx(s,a,i).next(u=>(u&&(o=!0),P.resolve(!u)))).next(()=>o)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.tr(e,(o,a)=>{if(a<=n){const u=this.nr(e,o).next(c=>{if(!c)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,ee.min()),wr(e).delete(function(f){return[0,xt(f.path)]}(o))))});s.push(u)}}).next(()=>P.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return gu(e,n)}tr(e,n){const r=wr(e);let s,i=Ft.oe;return r.J({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(i!==Ft.oe&&n(new G(_n(s)),i),i=c,s=u):i=Ft.oe}).next(()=>{i!==Ft.oe&&n(new G(_n(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function gu(t,e){return wr(t).put(function(r,s){return{targetId:0,path:xt(r.path),sequenceNumber:s}}(e,t.currentSequenceNumber))}/**
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
 */class hx{constructor(){this.changes=new Zn(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?P.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class tD{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,r){return fs(e).put(r)}removeEntry(e,n,r){return fs(e).delete(function(i,o){const a=i.path.toArray();return[a.slice(0,a.length-2),a[a.length-2],Nc(o),a[a.length-1]]}(n,r))}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.rr(e,r)))}getEntry(e,n){let r=ke.newInvalidDocument(n);return fs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Jo(n))},(s,i)=>{r=this.ir(n,i)}).next(()=>r)}sr(e,n){let r={size:0,document:ke.newInvalidDocument(n)};return fs(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(Jo(n))},(s,i)=>{r={document:this.ir(n,i),size:Vc(i)}}).next(()=>r)}getEntries(e,n){let r=Ut();return this._r(e,n,(s,i)=>{const o=this.ir(s,i);r=r.insert(s,o)}).next(()=>r)}ar(e,n){let r=Ut(),s=new Ae(G.comparator);return this._r(e,n,(i,o)=>{const a=this.ir(i,o);r=r.insert(i,a),s=s.insert(i,Vc(o))}).next(()=>({documents:r,ur:s}))}_r(e,n,r){if(n.isEmpty())return P.resolve();let s=new we(Qv);n.forEach(u=>s=s.add(u));const i=IDBKeyRange.bound(Jo(s.first()),Jo(s.last())),o=s.getIterator();let a=o.getNext();return fs(e).J({index:"documentKeyIndex",range:i},(u,c,h)=>{const f=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Qv(a,f)<0;)r(a,null),a=o.getNext();a&&a.isEqual(f)&&(r(a,c),a=o.hasNext()?o.getNext():null),a?h.$(Jo(a)):h.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,n,r,s,i){const o=n.path,a=[o.popLast().toArray(),o.lastSegment(),Nc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],u=[o.popLast().toArray(),o.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return fs(e).U(IDBKeyRange.bound(a,u,!0)).next(c=>{i==null||i.incrementDocumentReadCount(c.length);let h=Ut();for(const f of c){const m=this.ir(G.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);m.isFoundDocument()&&(gl(n,m)||s.has(m.key))&&(h=h.insert(m.key,m))}return h})}getAllFromCollectionGroup(e,n,r,s){let i=Ut();const o=Wv(n,r),a=Wv(n,Yt.max());return fs(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,h)=>{const f=this.ir(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(f.key,f),i.size===s&&h.done()}).next(()=>i)}newChangeBuffer(e){return new nD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Hv(e).get("remoteDocumentGlobalKey").next(n=>(Z(!!n),n))}rr(e,n){return Hv(e).put("remoteDocumentGlobalKey",n)}ir(e,n){if(n){const r=zN(this.serializer,n);if(!(r.isNoDocument()&&r.version.isEqual(ee.min())))return r}return ke.newInvalidDocument(e)}}function fx(t){return new tD(t)}class nD extends hx{constructor(e,n){super(),this.cr=e,this.trackRemovals=n,this.lr=new Zn(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const n=[];let r=0,s=new we((i,o)=>ne(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.lr.get(i);if(n.push(this.cr.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=Dv(this.cr.serializer,o);s=s.add(i.path.popLast());const c=Vc(u);r+=c-a.size,n.push(this.cr.addEntry(e,i,u))}else if(r-=a.size,this.trackRemovals){const u=Dv(this.cr.serializer,o.convertToNoDocument(ee.min()));n.push(this.cr.addEntry(e,i,u))}}),s.forEach(i=>{n.push(this.cr.indexManager.addToCollectionParentIndex(e,i))}),n.push(this.cr.updateMetadata(e,r)),P.waitFor(n)}getFromCache(e,n){return this.cr.sr(e,n).next(r=>(this.lr.set(n,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,n){return this.cr.ar(e,n).next(({documents:r,ur:s})=>(s.forEach((i,o)=>{this.lr.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Hv(t){return tt(t,"remoteDocumentGlobal")}function fs(t){return tt(t,"remoteDocumentsV14")}function Jo(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Wv(t,e){const n=e.documentKey.path.toArray();return[t,Nc(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function Qv(t,e){const n=t.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=ne(n[i],r[i]),s)return s;return s=ne(n.length,r.length),s||(s=ne(n[n.length-2],r[r.length-2]),s||ne(n[n.length-1],r[r.length-1]))}/**
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
 */class rD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class px{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&wa(r.mutation,s,jt.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=vn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=sa();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=vn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Ut();const o=va(),a=function(){return va()}();return n.forEach((u,c)=>{const h=r.get(c.key);s.has(c.key)&&(h===void 0||h.mutation instanceof er)?i=i.insert(c.key,c):h!==void 0?(o.set(c.key,h.mutation.getFieldMask()),wa(h.mutation,c,h.mutation.getFieldMask(),Le.now())):o.set(c.key,jt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,h)=>o.set(c,h)),n.forEach((c,h)=>{var f;return a.set(c,new rD(h,(f=o.get(c))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const r=va();let s=new Ae((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let h=r.get(u)||jt.empty();h=a.applyToLocalView(c,h),r.set(u,h);const f=(s.get(a.batchId)||se()).add(u);s=s.insert(a.batchId,f)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,h=u.value,f=PT();h.forEach(m=>{if(!i.has(m)){const y=LT(n.get(m),r.get(m));y!==null&&f.set(m,y),i=i.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,f))}return P.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return G.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Am(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):P.resolve(vn());let a=-1,u=i;return o.next(c=>P.forEach(c,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?P.resolve():this.remoteDocumentCache.getEntry(e,h).next(m=>{u=u.insert(h,m)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,se())).next(h=>({batchId:a,changes:CT(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(r=>{let s=sa();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=sa();return this.indexManager.getCollectionParents(e,i).next(a=>P.forEach(a,u=>{const c=function(f,m){return new Xn(m,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(h=>{h.forEach((f,m)=>{o=o.insert(f,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,c)=>{const h=c.getKey();o.get(h)===null&&(o=o.insert(h,ke.newInvalidDocument(h)))});let a=sa();return o.forEach((u,c)=>{const h=i.get(u);h!==void 0&&wa(h.mutation,c,jt.empty(),Le.now()),gl(n,c)&&(a=a.insert(u,c))}),a})}}/**
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
 */class sD{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return P.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:We(s.createTime)}}(n)),P.resolve()}getNamedQuery(e,n){return P.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:Om(s.bundledQuery),readTime:We(s.readTime)}}(n)),P.resolve()}}/**
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
 */class iD{constructor(){this.overlays=new Ae(G.comparator),this.Ir=new Map}getOverlay(e,n){return P.resolve(this.overlays.get(n))}getOverlays(e,n){const r=vn();return P.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),P.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),P.resolve()}getOverlaysForCollection(e,n,r){const s=vn(),i=n.length+1,o=new G(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return P.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ae((c,h)=>c-h);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let h=i.get(c.largestBatchId);h===null&&(h=vn(),i=i.insert(c.largestBatchId,h)),h.set(c.getKey(),c)}}const a=vn(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,h)=>a.set(c,h)),!(a.size()>=s)););return P.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Nm(n,r));let i=this.Ir.get(n);i===void 0&&(i=se(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class oD{constructor(){this.sessionToken=Be.EMPTY_BYTE_STRING}getSessionToken(e){return P.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,P.resolve()}}/**
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
 */class Fm{constructor(){this.Tr=new we(rt.Er),this.dr=new we(rt.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new rt(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new G(new le([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new G(new le([])),r=new rt(n,e),s=new rt(n,e+1);let i=se();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new rt(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return G.comparator(e.key,n.key)||ne(e.wr,n.wr)}static Ar(e,n){return ne(e.wr,n.wr)||G.comparator(e.key,n.key)}}/**
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
 */class aD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new we(rt.Er)}checkEmpty(e){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Pm(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.br=this.br.add(new rt(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return P.resolve(o)}lookupMutationBatch(e,n){return P.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return P.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const a=this.Dr(o.wr);i.push(a)}),P.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new we(ne);return n.forEach(s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],a=>{r=r.add(a.wr)})}),P.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;G.isDocumentKey(i)||(i=i.child(""));const o=new rt(new G(i),0);let a=new we(ne);return this.br.forEachWhile(u=>{const c=u.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(u.wr)),!0)},o),P.resolve(this.Cr(a))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Z(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return P.forEach(n.mutations,s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new rt(n,0),s=this.br.firstAfterOrEqual(r);return P.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,P.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class lD{constructor(e){this.Mr=e,this.docs=function(){return new Ae(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return P.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(n))}getEntries(e,n){let r=Ut();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ke.newInvalidDocument(s))}),P.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Ut();const o=n.path,a=new G(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:h}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||Im(eT(h),r)<=0||(s.has(h.key)||gl(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return P.resolve(i)}getAllFromCollectionGroup(e,n,r,s){H()}Or(e,n){return P.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new uD(this)}getSize(e){return P.resolve(this.size)}}class uD extends hx{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),P.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class cD{constructor(e){this.persistence=e,this.Nr=new Zn(n=>Us(n),pl),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Fm,this.targetCount=0,this.kr=Gs.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),P.resolve()}getLastRemoteSnapshotVersion(e){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return P.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),P.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Gs(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,P.resolve()}updateTargetData(e,n){return this.Kn(n),P.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,P.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),P.waitFor(i).next(()=>s)}getTargetCount(e){return P.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return P.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),P.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),P.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),P.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return P.resolve(r)}containsKey(e,n){return P.resolve(this.Br.containsKey(n))}}/**
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
 */class jm{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Ft(0),this.Kr=!1,this.Kr=!0,this.$r=new oD,this.referenceDelegate=e(this),this.Ur=new cD(this),this.indexManager=new QN,this.remoteDocumentCache=function(s){return new lD(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new rx(n),this.Gr=new sD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new iD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new aD(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const s=new dD(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return P.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class dD extends nT{constructor(e){super(),this.currentSequenceNumber=e}}class gd{constructor(e){this.persistence=e,this.Jr=new Fm,this.Yr=null}static Zr(e){return new gd(e)}get Xr(){if(this.Yr)return this.Yr;throw H()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),P.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),P.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),P.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.Xr,r=>{const s=G.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return P.or([()=>P.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}class Oc{constructor(e,n){this.persistence=e,this.ti=new Zn(r=>xt(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=dx(this,n)}static Zr(e,n){return new Oc(e,n)}zr(){}jr(e){return P.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}Yn(e){const n=this.er(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(s=>r+s))}er(e){let n=0;return this.Zn(e,r=>{n++}).next(()=>n)}Zn(e,n){return P.forEach(this.ti,(r,s)=>this.nr(e,r,s).next(i=>i?P.resolve():n(s)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.Or(e,o=>this.nr(e,o,n).next(a=>{a||(r++,i.removeEntry(o,ee.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.ti.set(n,e.currentSequenceNumber),P.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),P.resolve()}removeReference(e,n,r){return this.ti.set(r,e.currentSequenceNumber),P.resolve()}updateLimboDocument(e,n){return this.ti.set(n,e.currentSequenceNumber),P.resolve()}Wr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=zu(e.data.value)),n}nr(e,n,r){return P.or([()=>this.persistence.Hr(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.ti.get(n);return P.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class hD{constructor(e){this.serializer=e}O(e,n,r,s){const i=new ad("createOrUpgrade",n);r<1&&s>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",uv,{unique:!0}),u.createObjectStore("documentMutations")}(e),Yv(e),function(u){u.createObjectStore("remoteDocuments")}(e));let o=P.resolve();return r<3&&s>=3&&(r!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),Yv(e)),o=o.next(()=>function(u){const c=u.store("targetGlobal"),h={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ee.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",h)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(u,c){return c.store("mutations").U().next(h=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",uv,{unique:!0});const f=c.store("mutations"),m=h.map(y=>f.put(y));return P.waitFor(m)})}(e,i))),o=o.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.ni(i))),r<6&&s>=6&&(o=o.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ri(i)))),r<7&&s>=7&&(o=o.next(()=>this.ii(i))),r<8&&s>=8&&(o=o.next(()=>this.si(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.oi(i))),r<11&&s>=11&&(o=o.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:Qk});c.createIndex("collectionPathOverlayIndex",Yk,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",Jk,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:Fk});c.createIndex("documentKeyIndex",jk),c.createIndex("collectionGroupIndex",Uk)}(e)).next(()=>this._i(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.ai(e,i))),r<15&&s>=15&&(o=o.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:Gk}).createIndex("sequenceNumberIndex",Kk,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:Hk}).createIndex("documentKeyIndex",Wk,{unique:!1})}(e))),r<16&&s>=16&&(o=o.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),r<17&&s>=17&&(o=o.next(()=>{(function(u){u.createObjectStore("globals",{keyPath:"name"})})(e)})),o}ri(e){let n=0;return e.store("remoteDocuments").J((r,s)=>{n+=Vc(s)}).next(()=>{const r={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}ni(e){const n=e.store("mutationQueues"),r=e.store("mutations");return n.U().next(s=>P.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.U("userMutationsIndex",o).next(a=>P.forEach(a,u=>{Z(u.userId===i.userId);const c=Es(this.serializer,u);return ax(e,i.userId,c).next(()=>{})}))}))}ii(e){const n=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.J((o,a)=>{const u=new le(o),c=function(f){return[0,xt(f)]}(u);i.push(n.get(c).next(h=>h?P.resolve():(f=>n.put({targetId:0,path:xt(f),sequenceNumber:s.highestListenSequenceNumber}))(u)))}).next(()=>P.waitFor(i))})}si(e,n){e.createObjectStore("collectionParents",{keyPath:qk});const r=n.store("collectionParents"),s=new Lm,i=o=>{if(s.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:xt(u)})}};return n.store("remoteDocuments").J({H:!0},(o,a)=>{const u=new le(o);return i(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([o,a,u],c)=>{const h=_n(a);return i(h.popLast())}))}oi(e){const n=e.store("targets");return n.J((r,s)=>{const i=oa(s),o=sx(this.serializer,i);return n.put(o)})}_i(e,n){const r=n.store("remoteDocuments"),s=[];return r.J((i,o)=>{const a=n.store("remoteDocumentsV14"),u=function(f){return f.document?new G(le.fromString(f.document.name).popFirst(5)):f.noDocument?G.fromSegments(f.noDocument.path):f.unknownDocument?G.fromSegments(f.unknownDocument.path):H()}(o).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(c))}).next(()=>P.waitFor(s))}ai(e,n){const r=n.store("mutations"),s=fx(this.serializer),i=new jm(gd.Zr,this.serializer.ct);return r.U().next(o=>{const a=new Map;return o.forEach(u=>{var c;let h=(c=a.get(u.userId))!==null&&c!==void 0?c:se();Es(this.serializer,u).keys().forEach(f=>h=h.add(f)),a.set(u.userId,h)}),P.forEach(a,(u,c)=>{const h=new it(c),f=pd.lt(this.serializer,h),m=i.getIndexManager(h),y=md.lt(h,this.serializer,m,i.referenceDelegate);return new px(s,y,f,m).recalculateAndSaveOverlaysForDocumentKeys(new $f(n,Ft.oe),u).next()})})}}function Yv(t){t.createObjectStore("targetDocuments",{keyPath:Bk}).createIndex("documentTargetsIndex",$k,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",zk,{unique:!0}),t.createObjectStore("targetGlobal")}const Oh="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Um{constructor(e,n,r,s,i,o,a,u,c,h,f=17){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.ui=i,this.window=o,this.document=a,this.ci=c,this.li=h,this.hi=f,this.Qr=null,this.Kr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Pi=null,this.inForeground=!1,this.Ii=null,this.Ti=null,this.Ei=Number.NEGATIVE_INFINITY,this.di=m=>Promise.resolve(),!Um.D())throw new F(O.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new eD(this,s),this.Ai=n+"main",this.serializer=new rx(u),this.Ri=new Sn(this.Ai,this.hi,new hD(this.serializer)),this.$r=new $N,this.Ur=new JN(this.referenceDelegate,this.serializer),this.remoteDocumentCache=fx(this.serializer),this.Gr=new BN,this.window&&this.window.localStorage?this.Vi=this.window.localStorage:(this.Vi=null,h===!1&&He("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.mi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new F(O.FAILED_PRECONDITION,Oh);return this.fi(),this.gi(),this.pi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ur.getHighestSequenceNumber(e))}).then(e=>{this.Qr=new Ft(e,this.ci)}).then(()=>{this.Kr=!0}).catch(e=>(this.Ri&&this.Ri.close(),Promise.reject(e)))}yi(e){return this.di=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ri.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.ui.enqueueAndForget(async()=>{this.started&&await this.mi()}))}mi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>yu(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.wi(e).next(n=>{n||(this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)))})}).next(()=>this.Si(e)).next(n=>this.isPrimary&&!n?this.bi(e).next(()=>!1):!!n&&this.Di(e).next(()=>!0))).catch(e=>{if(ns(e))return U("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return U("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.ui.enqueueRetryable(()=>this.di(e)),this.isPrimary=e})}wi(e){return Xo(e).get("owner").next(n=>P.resolve(this.vi(n)))}Ci(e){return yu(e).delete(this.clientId)}async Fi(){if(this.isPrimary&&!this.Mi(this.Ei,18e5)){this.Ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=tt(n,"clientMetadata");return r.U().next(s=>{const i=this.xi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return P.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Vi)for(const n of e)this.Vi.removeItem(this.Oi(n.clientId))}}pi(){this.Ti=this.ui.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.mi().then(()=>this.Fi()).then(()=>this.pi()))}vi(e){return!!e&&e.ownerId===this.clientId}Si(e){return this.li?P.resolve(!0):Xo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)){if(this.vi(n)&&this.networkEnabled)return!0;if(!this.vi(n)){if(!n.allowTabSynchronization)throw new F(O.FAILED_PRECONDITION,Oh);return!1}}return!(!this.networkEnabled||!this.inForeground)||yu(e).U().next(r=>this.xi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&U("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Kr=!1,this.Li(),this.Ti&&(this.Ti.cancel(),this.Ti=null),this.Bi(),this.ki(),await this.Ri.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new $f(e,Ft.oe);return this.bi(n).next(()=>this.Ci(n))}),this.Ri.close(),this.qi()}xi(e,n){return e.filter(r=>this.Mi(r.updateTimeMs,n)&&!this.Ni(r.clientId))}Qi(){return this.runTransaction("getActiveClients","readonly",e=>yu(e).U().next(n=>this.xi(n,18e5).map(r=>r.clientId)))}get started(){return this.Kr}getGlobalsCache(){return this.$r}getMutationQueue(e,n){return md.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new YN(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return pd.lt(this.serializer,e)}getBundleCache(){return this.Gr}runTransaction(e,n,r){U("IndexedDbPersistence","Starting transaction:",e);const s=n==="readonly"?"readonly":"readwrite",i=function(u){return u===17?eN:u===16?Zk:u===15?xm:u===14?lT:u===13?aT:u===12?Xk:u===11?oT:void H()}(this.hi);let o;return this.Ri.runTransaction(e,s,i,a=>(o=new $f(a,this.Qr?this.Qr.next():Ft.oe),n==="readwrite-primary"?this.wi(o).next(u=>!!u||this.Si(o)).next(u=>{if(!u)throw He(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.ui.enqueueRetryable(()=>this.di(!1)),new F(O.FAILED_PRECONDITION,tT);return r(o)}).next(u=>this.Di(o).next(()=>u)):this.Ki(o).next(()=>r(o)))).then(a=>(o.raiseOnCommittedEvent(),a))}Ki(e){return Xo(e).get("owner").next(n=>{if(n!==null&&this.Mi(n.leaseTimestampMs,5e3)&&!this.Ni(n.ownerId)&&!this.vi(n)&&!(this.li||this.allowTabSynchronization&&n.allowTabSynchronization))throw new F(O.FAILED_PRECONDITION,Oh)})}Di(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Xo(e).put("owner",n)}static D(){return Sn.D()}bi(e){const n=Xo(e);return n.get("owner").next(r=>this.vi(r)?(U("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):P.resolve())}Mi(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(He(`Detected an update time that is in the future: ${e} > ${r}`),!1))}fi(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ii=()=>{this.ui.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.mi()))},this.document.addEventListener("visibilitychange",this.Ii),this.inForeground=this.document.visibilityState==="visible")}Bi(){this.Ii&&(this.document.removeEventListener("visibilitychange",this.Ii),this.Ii=null)}gi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Pi=()=>{this.Li();const n=/(?:Version|Mobile)\/1[456]/;rI()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.ui.enterRestrictedMode(!0),this.ui.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Pi))}ki(){this.Pi&&(this.window.removeEventListener("pagehide",this.Pi),this.Pi=null)}Ni(e){var n;try{const r=((n=this.Vi)===null||n===void 0?void 0:n.getItem(this.Oi(e)))!==null;return U("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return He("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Li(){if(this.Vi)try{this.Vi.setItem(this.Oi(this.clientId),String(Date.now()))}catch(e){He("Failed to set zombie client id.",e)}}qi(){if(this.Vi)try{this.Vi.removeItem(this.Oi(this.clientId))}catch{}}Oi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Xo(t){return tt(t,"owner")}function yu(t){return tt(t,"clientMetadata")}function zm(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Bm{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Bm(e,n.fromCache,r,s)}}/**
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
 */class fD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class mx{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return rI()?8:rT(et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new fD;return this.Xi(e,n,o).next(a=>{if(i.result=a,this.zi)return this.es(e,n,o,a.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ci()<=ae.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",di(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),P.resolve()):(ci()<=ae.DEBUG&&U("QueryEngine","Query:",di(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ci()<=ae.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",di(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,St(n))):P.resolve())}Yi(e,n){if(Iv(n))return P.resolve(null);let r=St(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Pc(n,null,"F"),r=St(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Ji.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(u=>{const c=this.ts(n,a);return this.ns(n,c,o,u.readTime)?this.Yi(e,Pc(n,null,"F")):this.rs(e,c,n,u)}))})))}Zi(e,n,r,s){return Iv(n)||s.isEqual(ee.min())?P.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?P.resolve(null):(ci()<=ae.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),di(n)),this.rs(e,o,n,ZI(s,-1)).next(a=>a))})}ts(e,n){let r=new we(RT(e));return n.forEach((s,i)=>{gl(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ci()<=ae.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",di(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yt.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class pD{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ae(ne),this._s=new Zn(i=>Us(i),pl),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new px(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function gx(t,e,n,r){return new pD(t,e,n,r)}async function yx(t,e){const n=$(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let u=se();for(const c of s){o.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}for(const c of i){a.push(c.batchId);for(const h of c.mutations)u=u.add(h.key)}return n.localDocuments.getDocuments(r,u).next(c=>({hs:c,removedBatchIds:o,addedBatchIds:a}))})})}function mD(t,e){const n=$(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(a,u,c,h){const f=c.batch,m=f.keys();let y=P.resolve();return m.forEach(E=>{y=y.next(()=>h.getEntry(u,E)).next(b=>{const D=c.docVersions.get(E);Z(D!==null),b.version.compareTo(D)<0&&(f.applyToRemoteDocument(b,c),b.isValidDocument()&&(b.setReadTime(c.commitVersion),h.addEntry(b)))})}),y.next(()=>a.mutationQueue.removeMutationBatch(u,f))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=se();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(u=u.add(a.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function _x(t){const e=$(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function gD(t,e){const n=$(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const a=[];e.targetChanges.forEach((h,f)=>{const m=s.get(f);if(!m)return;a.push(n.Ur.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Ur.addMatchingKeys(i,h.addedDocuments,f)));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?y=y.withResumeToken(Be.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):h.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(h.resumeToken,r)),s=s.insert(f,y),function(b,D,I){return b.resumeToken.approximateByteSize()===0||D.snapshotVersion.toMicroseconds()-b.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(m,y,h)&&a.push(n.Ur.updateTargetData(i,y))});let u=Ut(),c=se();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(vx(i,o,e.documentUpdates).next(h=>{u=h.Ps,c=h.Is})),!r.isEqual(ee.min())){const h=n.Ur.getLastRemoteSnapshotVersion(i).next(f=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(h)}return P.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(n.os=s,i))}function vx(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Ut();return n.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),u.isNoDocument()&&u.version.isEqual(ee.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):U("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function yD(t,e){const n=$(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function no(t,e){const n=$(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,P.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new Fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function ro(t,e,n){const r=$(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!ns(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function Mc(t,e,n){const r=$(t);let s=ee.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,c,h){const f=$(u),m=f._s.get(h);return m!==void 0?P.resolve(f.os.get(m)):f.Ur.getTargetData(c,h)}(r,o,St(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:se())).next(a=>(Ix(r,AT(e),a),{documents:a,Ts:i})))}function wx(t,e){const n=$(t),r=$(n.Ur),s=n.os.get(e);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",i=>r.ot(i,e).next(o=>o?o.target:null))}function Ex(t,e){const n=$(t),r=n.us.get(e)||ee.min();return n.persistence.runTransaction("Get new document changes","readonly",s=>n.cs.getAllFromCollectionGroup(s,e,ZI(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Ix(n,e,s),s))}function Ix(t,e,n){let r=t.us.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}async function _D(t,e,n,r){const s=$(t);let i=se(),o=Ut();for(const c of n){const h=e.Es(c.metadata.name);c.document&&(i=i.add(h));const f=e.ds(c);f.setReadTime(e.As(c.metadata.readTime)),o=o.insert(h,f)}const a=s.cs.newChangeBuffer({trackRemovals:!0}),u=await no(s,function(h){return St(go(le.fromString(`__bundle__/docs/${h}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",c=>vx(c,a,o).next(h=>(a.apply(c),h)).next(h=>s.Ur.removeMatchingKeysForTargetId(c,u.targetId).next(()=>s.Ur.addMatchingKeys(c,i,u.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(c,h.Ps,h.Is)).next(()=>h.Ps)))}async function vD(t,e,n=se()){const r=await no(t,St(Om(e.bundledQuery))),s=$(t);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=We(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.Gr.saveNamedQuery(i,e);const a=r.withResumeToken(Be.EMPTY_BYTE_STRING,o);return s.os=s.os.insert(a.targetId,a),s.Ur.updateTargetData(i,a).next(()=>s.Ur.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Ur.addMatchingKeys(i,n,r.targetId)).next(()=>s.Gr.saveNamedQuery(i,e))})}function Jv(t,e){return`firestore_clients_${t}_${e}`}function Xv(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Mh(t,e){return`firestore_targets_${t}_${e}`}class Lc{constructor(e,n,r,s){this.user=e,this.batchId=n,this.state=r,this.error=s}static Rs(e,n,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new F(s.error.code,s.error.message))),o?new Lc(e,n,s.state,i):(He("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ea{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Rs(e,n){const r=JSON.parse(n);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new F(r.error.code,r.error.message))),i?new Ea(e,r.state,s):(He("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Vs(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Fc{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Rs(e,n){const r=JSON.parse(n);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Rm();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=sT(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Fc(e,i):(He("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class $m{constructor(e,n){this.clientId=e,this.onlineState=n}static Rs(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new $m(n.clientId,n.onlineState):(He("SharedClientState",`Failed to parse online state: ${e}`),null)}}class rp{constructor(){this.activeTargetIds=Rm()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Lh{constructor(e,n,r,s,i){this.window=e,this.ui=n,this.persistenceKey=r,this.ps=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.ys=this.ws.bind(this),this.Ss=new Ae(ne),this.started=!1,this.bs=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Ds=Jv(this.persistenceKey,this.ps),this.vs=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.Ss=this.Ss.insert(this.ps,new rp),this.Cs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.Fs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Ms=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.xs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Os=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.ys)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Qi();for(const r of e){if(r===this.ps)continue;const s=this.getItem(Jv(this.persistenceKey,r));if(s){const i=Fc.Rs(r,s);i&&(this.Ss=this.Ss.insert(i.clientId,i))}}this.Ns();const n=this.storage.getItem(this.xs);if(n){const r=this.Ls(n);r&&this.Bs(r)}for(const r of this.bs)this.ws(r);this.bs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.vs,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ks(this.Ss)}isActiveQueryTarget(e){let n=!1;return this.Ss.forEach((r,s)=>{s.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.qs(e,"pending")}updateMutationState(e,n,r){this.qs(e,n,r),this.Qs(e)}addLocalQueryTarget(e,n=!0){let r="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Mh(this.persistenceKey,e));if(s){const i=Ea.Rs(e,s);i&&(r=i.state)}}return n&&this.Ks.fs(e),this.Ns(),r}removeLocalQueryTarget(e){this.Ks.gs(e),this.Ns()}isLocalQueryTarget(e){return this.Ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Mh(this.persistenceKey,e))}updateQueryState(e,n,r){this.$s(e,n,r)}handleUserChange(e,n,r){n.forEach(s=>{this.Qs(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Us(e)}notifyBundleLoaded(e){this.Ws(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.ys),this.removeItem(this.Ds),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return U("SharedClientState","READ",e,n),n}setItem(e,n){U("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){U("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ws(e){const n=e;if(n.storageArea===this.storage){if(U("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ds)return void He("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.ui.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Cs.test(n.key)){if(n.newValue==null){const r=this.Gs(n.key);return this.zs(r,null)}{const r=this.js(n.key,n.newValue);if(r)return this.zs(r.clientId,r)}}else if(this.Fs.test(n.key)){if(n.newValue!==null){const r=this.Hs(n.key,n.newValue);if(r)return this.Js(r)}}else if(this.Ms.test(n.key)){if(n.newValue!==null){const r=this.Ys(n.key,n.newValue);if(r)return this.Zs(r)}}else if(n.key===this.xs){if(n.newValue!==null){const r=this.Ls(n.newValue);if(r)return this.Bs(r)}}else if(n.key===this.vs){const r=function(i){let o=Ft.oe;if(i!=null)try{const a=JSON.parse(i);Z(typeof a=="number"),o=a}catch(a){He("SharedClientState","Failed to read sequence number from WebStorage",a)}return o}(n.newValue);r!==Ft.oe&&this.sequenceNumberHandler(r)}else if(n.key===this.Os){const r=this.Xs(n.newValue);await Promise.all(r.map(s=>this.syncEngine.eo(s)))}}}else this.bs.push(n)})}}get Ks(){return this.Ss.get(this.ps)}Ns(){this.setItem(this.Ds,this.Ks.Vs())}qs(e,n,r){const s=new Lc(this.currentUser,e,n,r),i=Xv(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Vs())}Qs(e){const n=Xv(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Us(e){const n={clientId:this.ps,onlineState:e};this.storage.setItem(this.xs,JSON.stringify(n))}$s(e,n,r){const s=Mh(this.persistenceKey,e),i=new Ea(e,n,r);this.setItem(s,i.Vs())}Ws(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Os,n)}Gs(e){const n=this.Cs.exec(e);return n?n[1]:null}js(e,n){const r=this.Gs(e);return Fc.Rs(r,n)}Hs(e,n){const r=this.Fs.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Lc.Rs(new it(i),s,n)}Ys(e,n){const r=this.Ms.exec(e),s=Number(r[1]);return Ea.Rs(s,n)}Ls(e){return $m.Rs(e)}Xs(e){return JSON.parse(e)}async Js(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.no(e.batchId,e.state,e.error);U("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Zs(e){return this.syncEngine.ro(e.targetId,e.state,e.error)}zs(e,n){const r=n?this.Ss.insert(e,n):this.Ss.remove(e),s=this.ks(this.Ss),i=this.ks(r),o=[],a=[];return i.forEach(u=>{s.has(u)||o.push(u)}),s.forEach(u=>{i.has(u)||a.push(u)}),this.syncEngine.io(o,a).then(()=>{this.Ss=r})}Bs(e){this.Ss.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ks(e){let n=Rm();return e.forEach((r,s)=>{n=n.unionWith(s.activeTargetIds)}),n}}class Tx{constructor(){this.so=new rp,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new rp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wD{_o(e){}shutdown(){}}/**
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
 */class Zv{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let _u=null;function Fh(){return _u===null?_u=function(){return 268435456+Math.round(2147483648*Math.random())}():_u++,"0x"+_u.toString(16)}/**
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
 */const ED={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ID{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const wt="WebChannelConnection";class TD extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const a=Fh(),u=this.xo(n,r.toUriEncodedString());U("RestConnection",`Sending RPC '${n}' ${a}:`,u,s);const c={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(c,i,o),this.No(n,u,c,s).then(h=>(U("RestConnection",`Received RPC '${n}' ${a}: `,h),h),h=>{throw Qt("RestConnection",`RPC '${n}' ${a} failed with error: `,h,"url: ",u,"request:",s),h})}Lo(n,r,s,i,o,a){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+mo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=ED[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Fh();return new Promise((o,a)=>{const u=new qI;u.setWithCredentials(!0),u.listenOnce(GI.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Fu.NO_ERROR:const h=u.getResponseJson();U(wt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Fu.TIMEOUT:U(wt,`RPC '${e}' ${i} timed out`),a(new F(O.DEADLINE_EXCEEDED,"Request time out"));break;case Fu.HTTP_ERROR:const f=u.getStatus();if(U(wt,`RPC '${e}' ${i} failed with status:`,f,"response text:",u.getResponseText()),f>0){let m=u.getResponseJson();Array.isArray(m)&&(m=m[0]);const y=m==null?void 0:m.error;if(y&&y.status&&y.message){const E=function(D){const I=D.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(I)>=0?I:O.UNKNOWN}(y.status);a(new F(E,y.message))}else a(new F(O.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new F(O.UNAVAILABLE,"Connection failed."));break;default:H()}}finally{U(wt,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);U(wt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",c,r,15)})}Bo(e,n,r){const s=Fh(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=WI(),a=HI(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const h=i.join("");U(wt,`Creating RPC '${e}' stream ${s}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,y=!1;const E=new ID({Io:D=>{y?U(wt,`Not sending because RPC '${e}' stream ${s} is closed:`,D):(m||(U(wt,`Opening RPC '${e}' stream ${s} transport.`),f.open(),m=!0),U(wt,`RPC '${e}' stream ${s} sending:`,D),f.send(D))},To:()=>f.close()}),b=(D,I,w)=>{D.listen(I,x=>{try{w(x)}catch(V){setTimeout(()=>{throw V},0)}})};return b(f,ra.EventType.OPEN,()=>{y||(U(wt,`RPC '${e}' stream ${s} transport opened.`),E.yo())}),b(f,ra.EventType.CLOSE,()=>{y||(y=!0,U(wt,`RPC '${e}' stream ${s} transport closed`),E.So())}),b(f,ra.EventType.ERROR,D=>{y||(y=!0,Qt(wt,`RPC '${e}' stream ${s} transport errored:`,D),E.So(new F(O.UNAVAILABLE,"The operation could not be completed")))}),b(f,ra.EventType.MESSAGE,D=>{var I;if(!y){const w=D.data[0];Z(!!w);const x=w,V=x.error||((I=x[0])===null||I===void 0?void 0:I.error);if(V){U(wt,`RPC '${e}' stream ${s} received error:`,V);const z=V.status;let L=function(S){const A=Qe[S];if(A!==void 0)return zT(A)}(z),T=V.message;L===void 0&&(L=O.INTERNAL,T="Unknown error status: "+z+" with message "+V.message),y=!0,E.So(new F(L,T)),f.close()}else U(wt,`RPC '${e}' stream ${s} received:`,w),E.bo(w)}}),b(a,KI.STAT_EVENT,D=>{D.stat===zf.PROXY?U(wt,`RPC '${e}' stream ${s} detected buffering proxy`):D.stat===zf.NOPROXY&&U(wt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{E.wo()},0),E}}/**
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
 */function xx(){return typeof window<"u"?window:null}function Gu(){return typeof document<"u"?document:null}/**
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
 */function wl(t){return new kN(t,!0)}/**
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
 */class qm{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&U("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class Sx{constructor(e,n,r,s,i,o,a,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new qm(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===O.RESOURCE_EXHAUSTED?(He(n.toString()),He("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new F(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xD extends Sx{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=VN(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?We(o.readTime):ee.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=Xf(this.serializer),n.addTarget=function(i,o){let a;const u=o.target;if(a=bc(u)?{documents:JT(i,u)}:{query:fd(i,u)._t},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=GT(i,o.resumeToken);const c=Yf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=to(i,o.snapshotVersion.toTimestamp());const c=Yf(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=MN(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=Xf(this.serializer),n.removeTarget=e,this.a_(n)}}class SD extends Sx{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Z(!!e.streamToken),this.lastStreamToken=e.streamToken,Z(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=ON(e.writeResults,e.commitTime),r=We(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=Xf(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Ya(this.serializer,r))};this.a_(n)}}/**
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
 */class AD extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,Jf(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new F(O.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Lo(e,Jf(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new F(O.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class RD{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(He(n),this.D_=!1):U("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class bD{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ss(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=$(u);c.L_.add(4),await vo(c),c.q_.set("Unknown"),c.L_.delete(4),await El(c)}(this))})}),this.q_=new RD(r,s)}}async function El(t){if(ss(t))for(const e of t.B_)await e(!0)}async function vo(t){for(const e of t.B_)await e(!1)}function yd(t,e){const n=$(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Hm(n)?Km(n):Eo(n).r_()&&Gm(n,e))}function so(t,e){const n=$(t),r=Eo(n);n.N_.delete(e),r.r_()&&Ax(n,e),n.N_.size===0&&(r.r_()?r.o_():ss(n)&&n.q_.set("Unknown"))}function Gm(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Eo(t).A_(e)}function Ax(t,e){t.Q_.xe(e),Eo(t).R_(e)}function Km(t){t.Q_=new RN({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Eo(t).start(),t.q_.v_()}function Hm(t){return ss(t)&&!Eo(t).n_()&&t.N_.size>0}function ss(t){return $(t).L_.size===0}function Rx(t){t.Q_=void 0}async function CD(t){t.q_.set("Online")}async function PD(t){t.N_.forEach((e,n)=>{Gm(t,e)})}async function kD(t,e){Rx(t),Hm(t)?(t.q_.M_(e),Km(t)):t.q_.set("Unknown")}async function ND(t,e,n){if(t.q_.set("Online"),e instanceof qT&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.N_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.N_.delete(a),s.Q_.removeTarget(a))}(t,e)}catch(r){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await jc(t,r)}else if(e instanceof qu?t.Q_.Ke(e):e instanceof $T?t.Q_.He(e):t.Q_.We(e),!n.isEqual(ee.min()))try{const r=await _x(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.Q_.rt(o);return a.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const h=i.N_.get(c);h&&i.N_.set(c,h.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,c)=>{const h=i.N_.get(u);if(!h)return;i.N_.set(u,h.withResumeToken(Be.EMPTY_BYTE_STRING,h.snapshotVersion)),Ax(i,u);const f=new Fn(h.target,u,c,h.sequenceNumber);Gm(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){U("RemoteStore","Failed to raise snapshot:",r),await jc(t,r)}}async function jc(t,e,n){if(!ns(e))throw e;t.L_.add(1),await vo(t),t.q_.set("Offline"),n||(n=()=>_x(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await El(t)})}function bx(t,e){return e().catch(n=>jc(t,n,e))}async function wo(t){const e=$(t),n=Wr(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;DD(e);)try{const s=await yD(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,VD(e,s)}catch(s){await jc(e,s)}Cx(e)&&Px(e)}function DD(t){return ss(t)&&t.O_.length<10}function VD(t,e){t.O_.push(e);const n=Wr(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Cx(t){return ss(t)&&!Wr(t).n_()&&t.O_.length>0}function Px(t){Wr(t).start()}async function OD(t){Wr(t).p_()}async function MD(t){const e=Wr(t);for(const n of t.O_)e.m_(n.mutations)}async function LD(t,e,n){const r=t.O_.shift(),s=km.from(r,e,n);await bx(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await wo(t)}async function FD(t,e){e&&Wr(t).V_&&await async function(r,s){if(function(o){return UT(o)&&o!==O.ABORTED}(s.code)){const i=r.O_.shift();Wr(r).s_(),await bx(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await wo(r)}}(t,e),Cx(t)&&Px(t)}async function e0(t,e){const n=$(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const r=ss(n);n.L_.add(3),await vo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await El(n)}async function sp(t,e){const n=$(t);e?(n.L_.delete(2),await El(n)):e||(n.L_.add(2),await vo(n),n.q_.set("Unknown"))}function Eo(t){return t.K_||(t.K_=function(n,r,s){const i=$(n);return i.w_(),new xD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:CD.bind(null,t),Ro:PD.bind(null,t),mo:kD.bind(null,t),d_:ND.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Hm(t)?Km(t):t.q_.set("Unknown")):(await t.K_.stop(),Rx(t))})),t.K_}function Wr(t){return t.U_||(t.U_=function(n,r,s){const i=$(n);return i.w_(),new SD(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:OD.bind(null,t),mo:FD.bind(null,t),f_:MD.bind(null,t),g_:LD.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await wo(t)):(await t.U_.stop(),t.O_.length>0&&(U("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class Wm{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new at,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new Wm(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Io(t,e){if(He("AsyncQueue",`${e}: ${t}`),ns(t))return new F(O.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Fi{constructor(e){this.comparator=e?(n,r)=>e(n,r)||G.comparator(n.key,r.key):(n,r)=>G.comparator(n.key,r.key),this.keyedMap=sa(),this.sortedSet=new Ae(this.comparator)}static emptySet(e){return new Fi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Fi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Fi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class t0{constructor(){this.W_=new Ae(G.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):H():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class io{constructor(e,n,r,s,i,o,a,u,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new io(e,n,Fi.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ml(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class jD{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class UD{constructor(){this.queries=n0(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=$(n),i=s.queries;s.queries=n0(),i.forEach((o,a)=>{for(const u of a.j_)u.onError(r)})})(this,new F(O.ABORTED,"Firestore shutting down"))}}function n0(){return new Zn(t=>ST(t),ml)}async function Qm(t,e){const n=$(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new jD,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=Io(o,`Initialization of query '${di(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Jm(n)}async function Ym(t,e){const n=$(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function zD(t,e){const n=$(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.j_)a.X_(s)&&(r=!0);o.z_=s}}r&&Jm(n)}function BD(t,e,n){const r=$(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Jm(t){t.Y_.forEach(e=>{e.next()})}var ip,r0;(r0=ip||(ip={})).ea="default",r0.Cache="cache";class Xm{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new io(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=io.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ip.Cache}}/**
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
 */class $D{constructor(e,n){this.aa=e,this.byteLength=n}ua(){return"metadata"in this.aa}}/**
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
 */class s0{constructor(e){this.serializer=e}Es(e){return An(this.serializer,e)}ds(e){return e.metadata.exists?YT(this.serializer,e.document,!1):ke.newNoDocument(this.Es(e.metadata.name),this.As(e.metadata.readTime))}As(e){return We(e)}}class qD{constructor(e,n,r){this.ca=e,this.localStore=n,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=kx(e)}la(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.aa.namedQuery)this.queries.push(e.aa.namedQuery);else if(e.aa.documentMetadata){this.documents.push({metadata:e.aa.documentMetadata}),e.aa.documentMetadata.exists||++n;const r=le.fromString(e.aa.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.aa.document&&(this.documents[this.documents.length-1].document=e.aa.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}ha(e){const n=new Map,r=new s0(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.Es(s.metadata.name);for(const o of s.metadata.queries){const a=(n.get(o)||se()).add(i);n.set(o,a)}}return n}async complete(){const e=await _D(this.localStore,new s0(this.serializer),this.documents,this.ca.id),n=this.ha(this.documents);for(const r of this.queries)await vD(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Pa:this.collectionGroups,Ia:e}}}function kx(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class Nx{constructor(e){this.key=e}}class Dx{constructor(e){this.key=e}}class Vx{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=se(),this.mutatedKeys=se(),this.Aa=RT(e),this.Ra=new Fi(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new t0,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((h,f)=>{const m=s.get(h),y=gl(this.query,f)?f:null,E=!!m&&this.mutatedKeys.has(m.key),b=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let D=!1;m&&y?m.data.isEqual(y.data)?E!==b&&(r.track({type:3,doc:y}),D=!0):this.ga(m,y)||(r.track({type:2,doc:y}),D=!0,(u&&this.Aa(y,u)>0||c&&this.Aa(y,c)<0)&&(a=!0)):!m&&y?(r.track({type:0,doc:y}),D=!0):m&&!y&&(r.track({type:1,doc:m}),D=!0,(u||c)&&(a=!0)),D&&(y?(o=o.add(y),i=b?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),r.track({type:1,doc:h})}return{Ra:o,fa:r,ns:a,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((h,f)=>function(y,E){const b=D=>{switch(D){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return H()}};return b(y)-b(E)}(h.type,f.type)||this.Aa(h.doc,f.doc)),this.pa(r),s=s!=null&&s;const a=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,c=u!==this.Ea;return this.Ea=u,o.length!==0||c?{snapshot:new io(this.query,e.Ra,i,o,e.mutatedKeys,u===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:a}:{wa:a}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new t0,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=se(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Dx(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Nx(r))}),n}ba(e){this.Ta=e.Ts,this.da=se();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return io.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class GD{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class KD{constructor(e){this.key=e,this.va=!1}}class HD{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new Zn(a=>ST(a),ml),this.Ma=new Map,this.xa=new Set,this.Oa=new Ae(G.comparator),this.Na=new Map,this.La=new Fm,this.Ba={},this.ka=new Map,this.qa=Gs.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function WD(t,e,n=!0){const r=_d(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Ox(r,e,n,!0),s}async function QD(t,e){const n=_d(t);await Ox(n,e,!0,!1)}async function Ox(t,e,n,r){const s=await no(t.localStore,St(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await Zm(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&yd(t.remoteStore,s),a}async function Zm(t,e,n,r,s){t.Ka=(f,m,y)=>async function(b,D,I,w){let x=D.view.ma(I);x.ns&&(x=await Mc(b.localStore,D.query,!1).then(({documents:T})=>D.view.ma(T,x)));const V=w&&w.targetChanges.get(D.targetId),z=w&&w.targetMismatches.get(D.targetId)!=null,L=D.view.applyChanges(x,b.isPrimaryClient,V,z);return op(b,D.targetId,L.wa),L.snapshot}(t,f,m,y);const i=await Mc(t.localStore,e,!0),o=new Vx(e,i.Ts),a=o.ma(i.documents),u=vl.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,u);op(t,n,c.wa);const h=new GD(e,n,o);return t.Fa.set(e,h),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),c.snapshot}async function YD(t,e,n){const r=$(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!ml(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await ro(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&so(r.remoteStore,s.targetId),oo(r,s.targetId)}).catch(ts)):(oo(r,s.targetId),await ro(r.localStore,s.targetId,!0))}async function JD(t,e){const n=$(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),so(n.remoteStore,r.targetId))}async function XD(t,e,n){const r=rg(t);try{const s=await function(o,a){const u=$(o),c=Le.now(),h=a.reduce((y,E)=>y.add(E.key),se());let f,m;return u.persistence.runTransaction("Locally write mutations","readwrite",y=>{let E=Ut(),b=se();return u.cs.getEntries(y,h).next(D=>{E=D,E.forEach((I,w)=>{w.isValidDocument()||(b=b.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(y,E)).next(D=>{f=D;const I=[];for(const w of a){const x=xN(w,f.get(w.key).overlayedDocument);x!=null&&I.push(new er(w.key,x,pT(x.value.mapValue),Me.exists(!0)))}return u.mutationQueue.addMutationBatch(y,c,I,a)}).next(D=>{m=D;const I=D.applyToLocalDocumentSet(f,b);return u.documentOverlayCache.saveOverlays(y,D.batchId,I)})}).then(()=>({batchId:m.batchId,changes:CT(f)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,u){let c=o.Ba[o.currentUser.toKey()];c||(c=new Ae(ne)),c=c.insert(a,u),o.Ba[o.currentUser.toKey()]=c}(r,s.batchId,n),await tr(r,s.changes),await wo(r.remoteStore)}catch(s){const i=Io(s,"Failed to persist write");n.reject(i)}}async function Mx(t,e){const n=$(t);try{const r=await gD(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(Z(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?Z(o.va):s.removedDocuments.size>0&&(Z(o.va),o.va=!1))}),await tr(n,r,e)}catch(r){await ts(r)}}function i0(t,e,n){const r=$(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const a=o.view.Z_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const u=$(o);u.onlineState=a;let c=!1;u.queries.forEach((h,f)=>{for(const m of f.j_)m.Z_(a)&&(c=!0)}),c&&Jm(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZD(t,e,n){const r=$(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ae(G.comparator);o=o.insert(i,ke.newNoDocument(i,ee.min()));const a=se().add(i),u=new _l(ee.min(),new Map,new Ae(ne),o,a);await Mx(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),ng(r)}else await ro(r.localStore,e,!1).then(()=>oo(r,e,n)).catch(ts)}async function e2(t,e){const n=$(t),r=e.batch.batchId;try{const s=await mD(n.localStore,e);tg(n,r,null),eg(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await tr(n,s)}catch(s){await ts(s)}}async function t2(t,e,n){const r=$(t);try{const s=await function(o,a){const u=$(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let h;return u.mutationQueue.lookupMutationBatch(c,a).next(f=>(Z(f!==null),h=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,h,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,h)).next(()=>u.localDocuments.getDocuments(c,h))})}(r.localStore,e);tg(r,e,n),eg(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await tr(r,s)}catch(s){await ts(s)}}async function n2(t,e){const n=$(t);ss(n.remoteStore)||U("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(o){const a=$(o);return a.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>a.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(r===-1)return void e.resolve();const s=n.ka.get(r)||[];s.push(e),n.ka.set(r,s)}catch(r){const s=Io(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function eg(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function tg(t,e,n){const r=$(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function oo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||Lx(t,r)})}function Lx(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&(so(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),ng(t))}function op(t,e,n){for(const r of n)r instanceof Nx?(t.La.addReference(r.key,e),r2(t,r)):r instanceof Dx?(U("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||Lx(t,r.key)):H()}function r2(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(U("SyncEngine","New document in limbo: "+n),t.xa.add(r),ng(t))}function ng(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new G(le.fromString(e)),r=t.qa.next();t.Na.set(r,new KD(n)),t.Oa=t.Oa.insert(n,r),yd(t.remoteStore,new Fn(St(go(n.path)),r,"TargetPurposeLimboResolution",Ft.oe))}}async function tr(t,e,n){const r=$(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((a,u)=>{o.push(r.Ka(u,e,n).then(c=>{var h;if((c||n)&&r.isPrimaryClient){const f=c?!c.fromCache:(h=n==null?void 0:n.targetChanges.get(u.targetId))===null||h===void 0?void 0:h.current;r.sharedClientState.updateQueryState(u.targetId,f?"current":"not-current")}if(c){s.push(c);const f=Bm.Wi(u.targetId,c);i.push(f)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,c){const h=$(u);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>P.forEach(c,m=>P.forEach(m.$i,y=>h.persistence.referenceDelegate.addReference(f,m.targetId,y)).next(()=>P.forEach(m.Ui,y=>h.persistence.referenceDelegate.removeReference(f,m.targetId,y)))))}catch(f){if(!ns(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const m=f.targetId;if(!f.fromCache){const y=h.os.get(m),E=y.snapshotVersion,b=y.withLastLimboFreeSnapshotVersion(E);h.os=h.os.insert(m,b)}}}(r.localStore,i))}async function s2(t,e){const n=$(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const r=await yx(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(a=>{a.forEach(u=>{u.reject(new F(O.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await tr(n,r.hs)}}function i2(t,e){const n=$(t),r=n.Na.get(e);if(r&&r.va)return se().add(r.key);{let s=se();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const a=n.Fa.get(o);s=s.unionWith(a.view.Va)}return s}}async function o2(t,e){const n=$(t),r=await Mc(n.localStore,e.query,!0),s=e.view.ba(r);return n.isPrimaryClient&&op(n,e.targetId,s.wa),s}async function a2(t,e){const n=$(t);return Ex(n.localStore,e).then(r=>tr(n,r))}async function l2(t,e,n,r){const s=$(t),i=await function(a,u){const c=$(a),h=$(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>h.Mn(f,u).next(m=>m?c.localDocuments.getDocuments(f,m):P.resolve(null)))}(s.localStore,e);i!==null?(n==="pending"?await wo(s.remoteStore):n==="acknowledged"||n==="rejected"?(tg(s,e,r||null),eg(s,e),function(a,u){$($(a).mutationQueue).On(u)}(s.localStore,e)):H(),await tr(s,i)):U("SyncEngine","Cannot apply mutation batch with id: "+e)}async function u2(t,e){const n=$(t);if(_d(n),rg(n),e===!0&&n.Qa!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),s=await o0(n,r.toArray());n.Qa=!0,await sp(n.remoteStore,!0);for(const i of s)yd(n.remoteStore,i)}else if(e===!1&&n.Qa!==!1){const r=[];let s=Promise.resolve();n.Ma.forEach((i,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(oo(n,o),ro(n.localStore,o,!0))),so(n.remoteStore,o)}),await s,await o0(n,r),function(o){const a=$(o);a.Na.forEach((u,c)=>{so(a.remoteStore,c)}),a.La.pr(),a.Na=new Map,a.Oa=new Ae(G.comparator)}(n),n.Qa=!1,await sp(n.remoteStore,!1)}}async function o0(t,e,n){const r=$(t),s=[],i=[];for(const o of e){let a;const u=r.Ma.get(o);if(u&&u.length!==0){a=await no(r.localStore,St(u[0]));for(const c of u){const h=r.Fa.get(c),f=await o2(r,h);f.snapshot&&i.push(f.snapshot)}}else{const c=await wx(r.localStore,o);a=await no(r.localStore,c),await Zm(r,Fx(c),o,!1,a.resumeToken)}s.push(a)}return r.Ca.d_(i),s}function Fx(t){return IT(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function c2(t){return function(n){return $($(n).persistence).Qi()}($(t).localStore)}async function d2(t,e,n,r){const s=$(t);if(s.Qa)return void U("SyncEngine","Ignoring unexpected query state notification.");const i=s.Ma.get(e);if(i&&i.length>0)switch(n){case"current":case"not-current":{const o=await Ex(s.localStore,AT(i[0])),a=_l.createSynthesizedRemoteEventForCurrentChange(e,n==="current",Be.EMPTY_BYTE_STRING);await tr(s,o,a);break}case"rejected":await ro(s.localStore,e,!0),oo(s,e,r);break;default:H()}}async function h2(t,e,n){const r=_d(t);if(r.Qa){for(const s of e){if(r.Ma.has(s)&&r.sharedClientState.isActiveQueryTarget(s)){U("SyncEngine","Adding an already active target "+s);continue}const i=await wx(r.localStore,s),o=await no(r.localStore,i);await Zm(r,Fx(i),o.targetId,!1,o.resumeToken),yd(r.remoteStore,o)}for(const s of n)r.Ma.has(s)&&await ro(r.localStore,s,!1).then(()=>{so(r.remoteStore,s),oo(r,s)}).catch(ts)}}function _d(t){const e=$(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Mx.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=i2.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZD.bind(null,e),e.Ca.d_=zD.bind(null,e.eventManager),e.Ca.$a=BD.bind(null,e.eventManager),e}function rg(t){const e=$(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=e2.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=t2.bind(null,e),e}function f2(t,e,n){const r=$(t);(async function(i,o,a){try{const u=await o.getMetadata();if(await function(y,E){const b=$(y),D=We(E.createTime);return b.persistence.runTransaction("hasNewerBundle","readonly",I=>b.Gr.getBundleMetadata(I,E.id)).then(I=>!!I&&I.createTime.compareTo(D)>=0)}(i.localStore,u))return await o.close(),a._completeWith(function(y){return{taskState:"Success",documentsLoaded:y.totalDocuments,bytesLoaded:y.totalBytes,totalDocuments:y.totalDocuments,totalBytes:y.totalBytes}}(u)),Promise.resolve(new Set);a._updateProgress(kx(u));const c=new qD(u,i.localStore,o.serializer);let h=await o.Ua();for(;h;){const m=await c.la(h);m&&a._updateProgress(m),h=await o.Ua()}const f=await c.complete();return await tr(i,f.Ia,void 0),await function(y,E){const b=$(y);return b.persistence.runTransaction("Save bundle","readwrite",D=>b.Gr.saveBundleMetadata(D,E))}(i.localStore,u),a._completeWith(f.progress),Promise.resolve(f.Pa)}catch(u){return Qt("SyncEngine",`Loading bundle failed with ${u}`),a._failWith(u),Promise.resolve(new Set)}})(r,e,n).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class Qr{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=wl(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return gx(this.persistence,new mx,e.initialUser,this.serializer)}Ga(e){return new jm(gd.Zr,this.serializer)}Wa(e){return new Tx}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Qr.provider={build:()=>new Qr};class p2 extends Qr{constructor(e){super(),this.cacheSizeBytes=e}ja(e,n){Z(this.persistence.referenceDelegate instanceof Oc);const r=this.persistence.referenceDelegate.garbageCollector;return new cx(r,e.asyncQueue,n)}Ga(e){const n=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new jm(r=>Oc.Zr(r,n),this.serializer)}}class sg extends Qr{constructor(e,n,r){super(),this.Ja=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Ja.initialize(this,e),await rg(this.Ja.syncEngine),await wo(this.Ja.remoteStore),await this.persistence.yi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}za(e){return gx(this.persistence,new mx,e.initialUser,this.serializer)}ja(e,n){const r=this.persistence.referenceDelegate.garbageCollector;return new cx(r,e.asyncQueue,n)}Ha(e,n){const r=new Ok(n,this.persistence);return new Vk(e.asyncQueue,r)}Ga(e){const n=zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Et.withCacheSize(this.cacheSizeBytes):Et.DEFAULT;return new Um(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,xx(),Gu(),this.serializer,this.sharedClientState,!!this.forceOwnership)}Wa(e){return new Tx}}class jx extends sg{constructor(e,n){super(e,n,!1),this.Ja=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Ja.syncEngine;this.sharedClientState instanceof Lh&&(this.sharedClientState.syncEngine={no:l2.bind(null,n),ro:d2.bind(null,n),io:h2.bind(null,n),Qi:c2.bind(null,n),eo:a2.bind(null,n)},await this.sharedClientState.start()),await this.persistence.yi(async r=>{await u2(this.Ja.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}Wa(e){const n=xx();if(!Lh.D(n))throw new F(O.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=zm(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Lh(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class Yr{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>i0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=s2.bind(null,this.syncEngine),await sp(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UD}()}createDatastore(e){const n=wl(e.databaseInfo.databaseId),r=function(i){return new TD(i)}(e.databaseInfo);return function(i,o,a,u){return new AD(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new bD(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>i0(this.syncEngine,n,0),function(){return Zv.D()?new Zv:new wD}())}createSyncEngine(e,n){return function(s,i,o,a,u,c,h){const f=new HD(s,i,o,a,u,c);return h&&(f.Qa=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=$(s);U("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await vo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Yr.provider={build:()=>new Yr};function a0(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class vd{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):He("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class m2{constructor(e,n){this.Xa=e,this.serializer=n,this.metadata=new at,this.buffer=new Uint8Array,this.eu=function(){return new TextDecoder("utf-8")}(),this.tu().then(r=>{r&&r.ua()?this.metadata.resolve(r.aa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.aa)}`))},r=>this.metadata.reject(r))}close(){return this.Xa.cancel()}async getMetadata(){return this.metadata.promise}async Ua(){return await this.getMetadata(),this.tu()}async tu(){const e=await this.nu();if(e===null)return null;const n=this.eu.decode(e),r=Number(n);isNaN(r)&&this.ru(`length string (${n}) is not valid number`);const s=await this.iu(r);return new $D(JSON.parse(s),e.length+r)}su(){return this.buffer.findIndex(e=>e===123)}async nu(){for(;this.su()<0&&!await this.ou(););if(this.buffer.length===0)return null;const e=this.su();e<0&&this.ru("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async iu(e){for(;this.buffer.length<e;)await this.ou()&&this.ru("Reached the end of bundle when more is expected.");const n=this.eu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ru(e){throw this.Xa.cancel(),new Error(`Invalid bundle format: ${e}`)}async ou(){const e=await this.Xa.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class g2{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new F(O.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(s,i){const o=$(s),a={documents:i.map(f=>Qa(o.serializer,f))},u=await o.Lo("BatchGetDocuments",o.serializer.databaseId,le.emptyPath(),a,i.length),c=new Map;u.forEach(f=>{const m=DN(o.serializer,f);c.set(m.key.toString(),m)});const h=[];return i.forEach(f=>{const m=c.get(f.toString());Z(!!m),h.push(m)}),h}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new _o(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const s=G.fromPath(r);this.mutations.push(new Cm(s,this.precondition(s)))}),await async function(r,s){const i=$(r),o={writes:s.map(a=>Ya(i.serializer,a))};await i.Mo("Commit",i.serializer.databaseId,le.emptyPath(),o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw H();n=ee.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new F(O.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ee.min())?Me.exists(!1):Me.updateTime(n):Me.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ee.min()))throw new F(O.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Me.updateTime(n)}return Me.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class y2{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this._u=r.maxAttempts,this.t_=new qm(this.asyncQueue,"transaction_retry")}au(){this._u-=1,this.uu()}uu(){this.t_.Go(async()=>{const e=new g2(this.datastore),n=this.cu(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.lu(s)}))}).catch(r=>{this.lu(r)})})}cu(e){try{const n=this.updateFunction(e);return!fl(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}lu(e){this._u>0&&this.hu(e)?(this._u-=1,this.asyncQueue.enqueueAndForget(()=>(this.uu(),Promise.resolve()))):this.deferred.reject(e)}hu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!UT(n)}return!1}}/**
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
 */class _2{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=Em.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{U("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new at;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Io(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jh(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await yx(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function l0(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ig(t);U("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>e0(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>e0(e.remoteStore,s)),t._onlineComponents=e}async function ig(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await jh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;Qt("Error using user provided cache. Falling back to memory cache: "+n),await jh(t,new Qr)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await jh(t,new Qr);return t._offlineComponents}async function wd(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await l0(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await l0(t,new Yr))),t._onlineComponents}function Ux(t){return ig(t).then(e=>e.persistence)}function To(t){return ig(t).then(e=>e.localStore)}function zx(t){return wd(t).then(e=>e.remoteStore)}function og(t){return wd(t).then(e=>e.syncEngine)}function Bx(t){return wd(t).then(e=>e.datastore)}async function ao(t){const e=await wd(t),n=e.eventManager;return n.onListen=WD.bind(null,e.syncEngine),n.onUnlisten=YD.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=QD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=JD.bind(null,e.syncEngine),n}function v2(t){return t.asyncQueue.enqueue(async()=>{const e=await Ux(t),n=await zx(t);return e.setNetworkEnabled(!0),function(s){const i=$(s);return i.L_.delete(0),El(i)}(n)})}function w2(t){return t.asyncQueue.enqueue(async()=>{const e=await Ux(t),n=await zx(t);return e.setNetworkEnabled(!1),async function(s){const i=$(s);i.L_.add(0),await vo(i),i.q_.set("Offline")}(n)})}function E2(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await function(c,h){const f=$(c);return f.persistence.runTransaction("read document","readonly",m=>f.localDocuments.getDocument(m,h))}(s,i);a.isFoundDocument()?o.resolve(a):a.isNoDocument()?o.resolve(null):o.reject(new F(O.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(a){const u=Io(a,`Failed to get document '${i} from cache`);o.reject(u)}}(await To(t),e,n)),n.promise}function $x(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const h=new vd({next:m=>{h.Za(),o.enqueueAndForget(()=>Ym(i,f));const y=m.docs.has(a);!y&&m.fromCache?c.reject(new F(O.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&u&&u.source==="server"?c.reject(new F(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Xm(go(a.path),h,{includeMetadataChanges:!0,_a:!0});return Qm(i,f)}(await ao(t),t.asyncQueue,e,n,r)),r.promise}function I2(t,e){const n=new at;return t.asyncQueue.enqueueAndForget(async()=>async function(s,i,o){try{const a=await Mc(s,i,!0),u=new Vx(i,a.Ts),c=u.ma(a.documents),h=u.applyChanges(c,!1);o.resolve(h.snapshot)}catch(a){const u=Io(a,`Failed to execute query '${i} against cache`);o.reject(u)}}(await To(t),e,n)),n.promise}function qx(t,e,n={}){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,u,c){const h=new vd({next:m=>{h.Za(),o.enqueueAndForget(()=>Ym(i,f)),m.fromCache&&u.source==="server"?c.reject(new F(O.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(m)},error:m=>c.reject(m)}),f=new Xm(a,h,{includeMetadataChanges:!0,_a:!0});return Qm(i,f)}(await ao(t),t.asyncQueue,e,n,r)),r.promise}function T2(t,e,n){const r=new at;return t.asyncQueue.enqueueAndForget(async()=>{try{const s=await Bx(t);r.resolve(async function(o,a,u){var c;const h=$(o),{request:f,ut:m,parent:y}=XT(h.serializer,TT(a),u);h.connection.Fo||delete f.parent;const E=(await h.Lo("RunAggregationQuery",h.serializer.databaseId,y,f,1)).filter(D=>!!D.result);Z(E.length===1);const b=(c=E[0].result)===null||c===void 0?void 0:c.aggregateFields;return Object.keys(b).reduce((D,I)=>(D[m[I]]=b[I],D),{})}(s,e,n))}catch(s){r.reject(s)}}),r.promise}function x2(t,e){const n=new vd(e);return t.asyncQueue.enqueueAndForget(async()=>function(s,i){$(s).Y_.add(i),i.next()}(await ao(t),n)),()=>{n.Za(),t.asyncQueue.enqueueAndForget(async()=>function(s,i){$(s).Y_.delete(i)}(await ao(t),n))}}function S2(t,e,n,r){const s=function(o,a){let u;return u=typeof o=="string"?BT().encode(o):o,function(h,f){return new m2(h,f)}(function(h,f){if(h instanceof Uint8Array)return a0(h,f);if(h instanceof ArrayBuffer)return a0(new Uint8Array(h),f);if(h instanceof ReadableStream)return h.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),a)}(n,wl(e));t.asyncQueue.enqueueAndForget(async()=>{f2(await og(t),s,r)})}function A2(t,e){return t.asyncQueue.enqueue(async()=>function(r,s){const i=$(r);return i.persistence.runTransaction("Get named query","readonly",o=>i.Gr.getNamedQuery(o,s))}(await To(t),e))}function R2(t,e){return t.asyncQueue.enqueue(async()=>async function(r,s){const i=$(r),o=i.indexManager,a=[];return i.persistence.runTransaction("Configure indexes","readwrite",u=>o.getFieldIndexes(u).next(c=>function(f,m,y,E,b){f=[...f],m=[...m],f.sort(y),m.sort(y);const D=f.length,I=m.length;let w=0,x=0;for(;w<I&&x<D;){const V=y(f[x],m[w]);V<0?b(f[x++]):V>0?E(m[w++]):(w++,x++)}for(;w<I;)E(m[w++]);for(;x<D;)b(f[x++])}(c,s,Pk,h=>{a.push(o.addFieldIndex(u,h))},h=>{a.push(o.deleteFieldIndex(u,h))})).next(()=>P.waitFor(a)))}(await To(t),e))}function b2(t,e){return t.asyncQueue.enqueue(async()=>function(r,s){$(r).ss.zi=s}(await To(t),e))}function C2(t){return t.asyncQueue.enqueue(async()=>function(n){const r=$(n),s=r.indexManager;return r.persistence.runTransaction("Delete All Indexes","readwrite",i=>s.deleteAllFieldIndexes(i))}(await To(t)))}/**
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
 */function Gx(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const u0=new Map;/**
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
 */function ag(t,e,n){if(!n)throw new F(O.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Kx(t,e,n,r){if(e===!0&&r===!0)throw new F(O.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function c0(t){if(!G.isDocumentKey(t))throw new F(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function d0(t){if(G.isDocumentKey(t))throw new F(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ed(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":H()}function ie(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new F(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ed(t);throw new F(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Hx(t,e){if(e<=0)throw new F(O.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class h0{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new F(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Kx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Gx((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new F(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Il{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new h0({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new h0(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YI;switch(r.type){case"firstParty":return new Sk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new F(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=u0.get(n);r&&(U("ComponentProvider","Removing Datastore"),u0.delete(n),r.terminate())}(this),Promise.resolve()}}function Wx(t,e,n,r={}){var s;const i=(t=ie(t,Il))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Qt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=it.MOCK_USER;else{a=Y1(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new F(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new it(c)}t._authCredentials=new Ik(new QI(a,u))}}/**
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
 */class lt{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new lt(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new fn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}}class fn extends lt{constructor(e,n,r){super(e,n,go(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new G(e))}withConverter(e){return new fn(this.firestore,e,this._path)}}function Vt(t,e,...n){if(t=Se(t),ag("collection","path",e),t instanceof Il){const r=le.fromString(e,...n);return d0(r),new fn(t,null,r)}{if(!(t instanceof Ge||t instanceof fn))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return d0(r),new fn(t.firestore,null,r)}}function P2(t,e){if(t=ie(t,Il),ag("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new F(O.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new lt(t,null,function(r){return new Xn(le.emptyPath(),r)}(e))}function Ot(t,e,...n){if(t=Se(t),arguments.length===1&&(e=Em.newId()),ag("doc","path",e),t instanceof Il){const r=le.fromString(e,...n);return c0(r),new Ge(t,null,new G(r))}{if(!(t instanceof Ge||t instanceof fn))throw new F(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(le.fromString(e,...n));return c0(r),new Ge(t.firestore,t instanceof fn?t.converter:null,new G(r))}}function k2(t,e){return t=Se(t),e=Se(e),(t instanceof Ge||t instanceof fn)&&(e instanceof Ge||e instanceof fn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function lg(t,e){return t=Se(t),e=Se(e),t instanceof lt&&e instanceof lt&&t.firestore===e.firestore&&ml(t._query,e._query)&&t.converter===e.converter}/**
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
 */class f0{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new qm(this,"async_queue_retry"),this.Vu=()=>{const r=Gu();r&&U("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Gu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Gu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new at;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!ns(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw He("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=Wm.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&H()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function ap(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Qx{constructor(){this._progressObserver={},this._taskCompletionResolver=new at,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const N2=-1;class Ee extends Il{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new f0,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new f0(e),this._firestoreClient=void 0,await e}}}function D2(t,e,n){n||(n="(default)");const r=ul(t,"firestore");if(r.isInitialized(n)){const s=r.getImmediate({identifier:n}),i=r.getOptions(n);if(Br(i,e))return s;throw new F(O.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new F(O.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new F(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return r.initialize({options:e,instanceIdentifier:n})}function Yx(t,e){const n=typeof t=="object"?t:lI(),r=typeof t=="string"?t:e||"(default)",s=ul(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=W1("firestore");i&&Wx(s,...i)}return s}function Fe(t){if(t._terminated)throw new F(O.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Jx(t),t._firestoreClient}function Jx(t){var e,n,r;const s=t._freezeSettings(),i=function(a,u,c,h){return new rN(a,u,c,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,Gx(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new _2(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const u=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(u),_online:u}}(t._componentsProvider))}function V2(t,e){Qt("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings();return Xx(t,Yr.provider,{build:r=>new sg(r,n.cacheSizeBytes,e==null?void 0:e.forceOwnership)}),Promise.resolve()}async function O2(t){Qt("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const e=t._freezeSettings();Xx(t,Yr.provider,{build:n=>new jx(n,e.cacheSizeBytes)})}function Xx(t,e,n){if((t=ie(t,Ee))._firestoreClient||t._terminated)throw new F(O.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(t._componentsProvider||t._getSettings().localCache)throw new F(O.FAILED_PRECONDITION,"SDK cache is already specified.");t._componentsProvider={_online:e,_offline:n},Jx(t)}function M2(t){if(t._initialized&&!t._terminated)throw new F(O.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new at;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(r){if(!Sn.D())return Promise.resolve();const s=r+"main";await Sn.delete(s)}(zm(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function L2(t){return function(n){const r=new at;return n.asyncQueue.enqueueAndForget(async()=>n2(await og(n),r)),r.promise}(Fe(t=ie(t,Ee)))}function F2(t){return v2(Fe(t=ie(t,Ee)))}function j2(t){return w2(Fe(t=ie(t,Ee)))}function U2(t){return aC(t.app,"firestore",t._databaseId.database),t._delete()}function z2(t,e){const n=Fe(t=ie(t,Ee)),r=new Qx;return S2(n,t._databaseId,e,r),r}function B2(t,e){return A2(Fe(t=ie(t,Ee)),e).then(n=>n?new lt(t,null,n.query):null)}/**
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
 */class lo{constructor(e="count",n){this._internalFieldPath=n,this.type="AggregateField",this.aggregateType=e}}class Zx{constructor(e,n,r){this._userDataWriter=n,this._data=r,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}/**
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
 */class Jr{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Jr(Be.fromBase64String(e))}catch(n){throw new F(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Jr(Be.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class is{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new F(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ne(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function $2(){return new is("__name__")}/**
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
 */class os{constructor(e){this._methodName=e}}/**
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
 */class Id{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new F(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new F(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}}/**
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
 */class Tl{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const q2=/^__.*__$/;class G2{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new er(e,this.data,this.fieldMask,n,this.fieldTransforms):new yo(e,this.data,n,this.fieldTransforms)}}class eS{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function tS(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw H()}}class Td{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Td(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return Uc(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(tS(this.Cu)&&q2.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class K2{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||wl(e)}Qu(e,n,r,s=!1){return new Td({Cu:e,methodName:n,qu:r,path:Ne.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Js(t){const e=t._freezeSettings(),n=wl(t._databaseId);return new K2(t._databaseId,!!e.ignoreUndefinedProperties,n)}function xd(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);mg("Data must be an object, but it was:",o,r);const a=sS(r,o);let u,c;if(i.merge)u=new jt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const m=Ja(e,f,n);if(!o.contains(m))throw new F(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);oS(h,m)||h.push(m)}u=new jt(h),c=o.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=o.fieldTransforms;return new G2(new ht(a),u,c)}class xl extends os{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof xl}}function nS(t,e,n){return new Td({Cu:3,qu:e.settings.qu,methodName:t._methodName,xu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class ug extends os{_toFieldTransform(e){return new yl(e.path,new Zi)}isEqual(e){return e instanceof ug}}class cg extends os{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=nS(this,e,!0),r=this.Ku.map(i=>Xs(i,n)),s=new zs(r);return new yl(e.path,s)}isEqual(e){return e instanceof cg&&Br(this.Ku,e.Ku)}}class dg extends os{constructor(e,n){super(e),this.Ku=n}_toFieldTransform(e){const n=nS(this,e,!0),r=this.Ku.map(i=>Xs(i,n)),s=new Bs(r);return new yl(e.path,s)}isEqual(e){return e instanceof dg&&Br(this.Ku,e.Ku)}}class hg extends os{constructor(e,n){super(e),this.$u=n}_toFieldTransform(e){const n=new eo(e.serializer,NT(e.serializer,this.$u));return new yl(e.path,n)}isEqual(e){return e instanceof hg&&this.$u===e.$u}}function fg(t,e,n,r){const s=t.Qu(1,e,n);mg("Data must be an object, but it was:",s,r);const i=[],o=ht.empty();rs(r,(u,c)=>{const h=Sd(e,u,n);c=Se(c);const f=s.Nu(h);if(c instanceof xl)i.push(h);else{const m=Xs(c,f);m!=null&&(i.push(h),o.set(h,m))}});const a=new jt(i);return new eS(o,a,s.fieldTransforms)}function pg(t,e,n,r,s,i){const o=t.Qu(1,e,n),a=[Ja(e,r,n)],u=[s];if(i.length%2!=0)throw new F(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)a.push(Ja(e,i[m])),u.push(i[m+1]);const c=[],h=ht.empty();for(let m=a.length-1;m>=0;--m)if(!oS(c,a[m])){const y=a[m];let E=u[m];E=Se(E);const b=o.Nu(y);if(E instanceof xl)c.push(y);else{const D=Xs(E,b);D!=null&&(c.push(y),h.set(y,D))}}const f=new jt(c);return new eS(h,f,o.fieldTransforms)}function rS(t,e,n,r=!1){return Xs(n,t.Qu(r?4:3,e))}function Xs(t,e){if(iS(t=Se(t)))return mg("Unsupported field value:",e,t),sS(t,e);if(t instanceof os)return function(r,s){if(!tS(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let u=Xs(a,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return NT(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:to(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:to(s.serializer,i)}}if(r instanceof Id)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Jr)return{bytesValue:GT(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Vm(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Tl)return function(o,a){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Bu("VectorValues must only contain numeric values.");return bm(a.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Ed(r)}`)}(t,e)}function sS(t,e){const n={};return cT(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):rs(t,(r,s)=>{const i=Xs(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function iS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Id||t instanceof Jr||t instanceof Ge||t instanceof os||t instanceof Tl)}function mg(t,e,n){if(!iS(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Ed(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function Ja(t,e,n){if((e=Se(e))instanceof is)return e._internalPath;if(typeof e=="string")return Sd(t,e);throw Uc("Field path arguments must be of type string or ",t,!1,void 0,n)}const H2=new RegExp("[~\\*/\\[\\]]");function Sd(t,e,n){if(e.search(H2)>=0)throw Uc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new is(...e.split("."))._internalPath}catch{throw Uc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Uc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new F(O.INVALID_ARGUMENT,a+t+u)}function oS(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Xa{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new W2(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ad("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class W2 extends Xa{data(){return super.data()}}function Ad(t,e){return typeof e=="string"?Sd(t,e):e instanceof is?e._internalPath:e._delegate._internalPath}/**
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
 */function aS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new F(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class gg{}class xo extends gg{}function Ku(t,e,...n){let r=[];e instanceof gg&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof Zs).length,a=i.filter(u=>u instanceof So).length;if(o>1||o>0&&a>0)throw new F(O.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class So extends xo{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new So(e,n,r)}_apply(e){const n=this._parse(e);return uS(e._query,n),new lt(e.firestore,e.converter,Qf(e._query,n))}_parse(e){const n=Js(e.firestore);return function(i,o,a,u,c,h,f){let m;if(c.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new F(O.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){m0(f,h);const y=[];for(const E of f)y.push(p0(u,i,E));m={arrayValue:{values:y}}}else m=p0(u,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||m0(f,h),m=rS(a,o,f,h==="in"||h==="not-in");return ue.create(c,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Q2(t,e,n){const r=e,s=Ad("where",t);return So._create(s,r,n)}class Zs extends gg{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Zs(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:ye.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const u of a)uS(o,u),o=Qf(o,u)}(e._query,n),new lt(e.firestore,e.converter,Qf(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Y2(...t){return t.forEach(e=>cS("or",e)),Zs._create("or",t)}function J2(...t){return t.forEach(e=>cS("and",e)),Zs._create("and",t)}class Rd extends xo{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Rd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new F(O.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Wa(i,o)}(e._query,this._field,this._direction);return new lt(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Xn(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function lp(t,e="asc"){const n=e,r=Ad("orderBy",t);return Rd._create(r,n)}class Sl extends xo{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Sl(e,n,r)}_apply(e){return new lt(e.firestore,e.converter,Pc(e._query,this._limit,this._limitType))}}function X2(t){return Hx("limit",t),Sl._create("limit",t,"F")}function Z2(t){return Hx("limitToLast",t),Sl._create("limitToLast",t,"L")}class Al extends xo{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Al(e,n,r)}_apply(e){const n=lS(e,this.type,this._docOrFields,this._inclusive);return new lt(e.firestore,e.converter,function(s,i){return new Xn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,i,s.endAt)}(e._query,n))}}function eV(...t){return Al._create("startAt",t,!0)}function tV(...t){return Al._create("startAfter",t,!1)}class Rl extends xo{constructor(e,n,r){super(),this.type=e,this._docOrFields=n,this._inclusive=r}static _create(e,n,r){return new Rl(e,n,r)}_apply(e){const n=lS(e,this.type,this._docOrFields,this._inclusive);return new lt(e.firestore,e.converter,function(s,i){return new Xn(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,i)}(e._query,n))}}function nV(...t){return Rl._create("endBefore",t,!1)}function rV(...t){return Rl._create("endAt",t,!0)}function lS(t,e,n,r){if(n[0]=Se(n[0]),n[0]instanceof Xa)return function(i,o,a,u,c){if(!u)throw new F(O.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${a}().`);const h=[];for(const f of Li(i))if(f.field.isKeyField())h.push(js(o,u.key));else{const m=u.data.field(f.field);if(ld(m))throw new F(O.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(m===null){const y=f.field.canonicalString();throw new F(O.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${y}' (used as the orderBy) does not exist.`)}h.push(m)}return new Hr(h,c)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const s=Js(t.firestore);return function(o,a,u,c,h,f){const m=o.explicitOrderBy;if(h.length>m.length)throw new F(O.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const y=[];for(let E=0;E<h.length;E++){const b=h[E];if(m[E].field.isKeyField()){if(typeof b!="string")throw new F(O.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof b}`);if(!Am(o)&&b.indexOf("/")!==-1)throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${b}' contains a slash.`);const D=o.path.child(le.fromString(b));if(!G.isDocumentKey(D))throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${D}' is not because it contains an odd number of segments.`);const I=new G(D);y.push(js(a,I))}else{const D=rS(u,c,b);y.push(D)}}return new Hr(y,f)}(t._query,t.firestore._databaseId,s,e,n,r)}}function p0(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new F(O.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Am(e)&&n.indexOf("/")!==-1)throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(le.fromString(n));if(!G.isDocumentKey(r))throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return js(t,new G(r))}if(n instanceof Ge)return js(t,n._key);throw new F(O.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ed(n)}.`)}function m0(t,e){if(!Array.isArray(t)||t.length===0)throw new F(O.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uS(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new F(O.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function cS(t,e){if(!(e instanceof So||e instanceof Zs))throw new F(O.INVALID_ARGUMENT,`Function ${t}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class yg{convertValue(e,n="none"){switch(Gr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Wn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw H()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return rs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Ve(o.doubleValue));return new Tl(i)}convertGeoPoint(e){return new Id(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ud(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ga(e));default:return null}}convertTimestamp(e){const n=Hn(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=le.fromString(e);Z(nx(r));const s=new qr(r.get(1),r.get(3)),i=new G(r.popFirst(5));return s.isEqual(n)||He(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function bd(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class sV extends yg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}/**
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
 */function iV(t){return new lo("sum",Ja("sum",t))}function oV(t){return new lo("avg",Ja("average",t))}function dS(){return new lo("count")}function aV(t,e){var n,r;return t instanceof lo&&e instanceof lo&&t.aggregateType===e.aggregateType&&((n=t._internalFieldPath)===null||n===void 0?void 0:n.canonicalString())===((r=e._internalFieldPath)===null||r===void 0?void 0:r.canonicalString())}function lV(t,e){return lg(t.query,e.query)&&Br(t.data(),e.data())}/**
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
 */class Rr{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ks extends Xa{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ia(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ad("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Ia extends Ks{data(e={}){return super.data(e)}}class Hs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Rr(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Ia(this._firestore,this._userDataWriter,r.key,r,new Rr(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new F(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const u=new Ia(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Rr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const u=new Ia(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Rr(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,h=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:uV(a.type),doc:u,oldIndex:c,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function uV(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return H()}}function cV(t,e){return t instanceof Ks&&e instanceof Ks?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Hs&&e instanceof Hs&&t._firestore===e._firestore&&lg(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function dV(t){t=ie(t,Ge);const e=ie(t.firestore,Ee);return $x(Fe(e),t._key).then(n=>_g(e,t,n))}class as extends yg{constructor(e){super(),this.firestore=e}convertBytes(e){return new Jr(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function hV(t){t=ie(t,Ge);const e=ie(t.firestore,Ee),n=Fe(e),r=new as(e);return E2(n,t._key).then(s=>new Ks(e,r,t._key,s,new Rr(s!==null&&s.hasLocalMutations,!0),t.converter))}function fV(t){t=ie(t,Ge);const e=ie(t.firestore,Ee);return $x(Fe(e),t._key,{source:"server"}).then(n=>_g(e,t,n))}function pV(t){t=ie(t,lt);const e=ie(t.firestore,Ee),n=Fe(e),r=new as(e);return aS(t._query),qx(n,t._query).then(s=>new Hs(e,r,t,s))}function mV(t){t=ie(t,lt);const e=ie(t.firestore,Ee),n=Fe(e),r=new as(e);return I2(n,t._query).then(s=>new Hs(e,r,t,s))}function gV(t){t=ie(t,lt);const e=ie(t.firestore,Ee),n=Fe(e),r=new as(e);return qx(n,t._query,{source:"server"}).then(s=>new Hs(e,r,t,s))}function yV(t,e,n){t=ie(t,Ge);const r=ie(t.firestore,Ee),s=bd(t.converter,e,n);return Ao(r,[xd(Js(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Me.none())])}function _s(t,e,n,...r){t=ie(t,Ge);const s=ie(t.firestore,Ee),i=Js(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof is?pg(i,"updateDoc",t._key,e,n,r):fg(i,"updateDoc",t._key,e),Ao(s,[o.toMutation(t._key,Me.exists(!0))])}function pi(t){return Ao(ie(t.firestore,Ee),[new _o(t._key,Me.none())])}function vs(t,e){const n=ie(t.firestore,Ee),r=Ot(t),s=bd(t.converter,e);return Ao(n,[xd(Js(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Me.exists(!1))]).then(()=>r)}function ur(t,...e){var n,r,s;t=Se(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||ap(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(ap(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(r=f.error)===null||r===void 0?void 0:r.bind(f),e[o+2]=(s=f.complete)===null||s===void 0?void 0:s.bind(f)}let u,c,h;if(t instanceof Ge)c=ie(t.firestore,Ee),h=go(t._key.path),u={next:f=>{e[o]&&e[o](_g(c,t,f))},error:e[o+1],complete:e[o+2]};else{const f=ie(t,lt);c=ie(f.firestore,Ee),h=f._query;const m=new as(c);u={next:y=>{e[o]&&e[o](new Hs(c,m,f,y))},error:e[o+1],complete:e[o+2]},aS(t._query)}return function(m,y,E,b){const D=new vd(b),I=new Xm(y,D,E);return m.asyncQueue.enqueueAndForget(async()=>Qm(await ao(m),I)),()=>{D.Za(),m.asyncQueue.enqueueAndForget(async()=>Ym(await ao(m),I))}}(Fe(c),h,a,u)}function _V(t,e){return x2(Fe(t=ie(t,Ee)),ap(e)?e:{next:e})}function Ao(t,e){return function(r,s){const i=new at;return r.asyncQueue.enqueueAndForget(async()=>XD(await og(r),s,i)),i.promise}(Fe(t),e)}function _g(t,e,n){const r=n.docs.get(e._key),s=new as(t);return new Ks(t,s,e._key,r,new Rr(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */function vV(t){return hS(t,{count:dS()})}function hS(t,e){const n=ie(t.firestore,Ee),r=Fe(n),s=uT(e,(i,o)=>new jT(o,i.aggregateType,i._internalFieldPath));return T2(r,t._query,s).then(i=>function(a,u,c){const h=new as(a);return new Zx(u,h,c)}(n,t,i))}class wV{constructor(e){this.kind="memory",this._onlineComponentProvider=Yr.provider,e!=null&&e.garbageCollector?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider=Qr.provider}toJSON(){return{kind:this.kind}}}class EV{constructor(e){let n;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),n=e.tabManager):(n=fS(void 0),n._initialize(e)),this._onlineComponentProvider=n._onlineComponentProvider,this._offlineComponentProvider=n._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class IV{constructor(){this.kind="memoryEager",this._offlineComponentProvider=Qr.provider}toJSON(){return{kind:this.kind}}}class TV{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new p2(e)}}toJSON(){return{kind:this.kind}}}function xV(){return new IV}function SV(t){return new TV(t==null?void 0:t.cacheSizeBytes)}function AV(t){return new wV(t)}function RV(t){return new EV(t)}class bV{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Yr.provider,this._offlineComponentProvider={build:n=>new sg(n,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class CV{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=Yr.provider,this._offlineComponentProvider={build:n=>new jx(n,e==null?void 0:e.cacheSizeBytes)}}}function fS(t){return new bV(t==null?void 0:t.forceOwnership)}function PV(){return new CV}/**
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
 */const kV={maxAttempts:5};/**
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
 */class pS{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Js(e)}set(e,n,r){this._verifyNotCommitted();const s=Er(e,this._firestore),i=bd(s.converter,n,r),o=xd(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Me.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Er(e,this._firestore);let o;return o=typeof(n=Se(n))=="string"||n instanceof is?pg(this._dataReader,"WriteBatch.update",i._key,n,r,s):fg(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,Me.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Er(e,this._firestore);return this._mutations=this._mutations.concat(new _o(n._key,Me.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new F(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Er(t,e){if((t=Se(t)).firestore!==e)throw new F(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class mS extends class{constructor(n,r){this._firestore=n,this._transaction=r,this._dataReader=Js(n)}get(n){const r=Er(n,this._firestore),s=new sV(this._firestore);return this._transaction.lookup([r._key]).then(i=>{if(!i||i.length!==1)return H();const o=i[0];if(o.isFoundDocument())return new Xa(this._firestore,s,o.key,o,r.converter);if(o.isNoDocument())return new Xa(this._firestore,s,r._key,null,r.converter);throw H()})}set(n,r,s){const i=Er(n,this._firestore),o=bd(i.converter,r,s),a=xd(this._dataReader,"Transaction.set",i._key,o,i.converter!==null,s);return this._transaction.set(i._key,a),this}update(n,r,s,...i){const o=Er(n,this._firestore);let a;return a=typeof(r=Se(r))=="string"||r instanceof is?pg(this._dataReader,"Transaction.update",o._key,r,s,i):fg(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(n){const r=Er(n,this._firestore);return this._transaction.delete(r._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Er(e,this._firestore),r=new as(this._firestore);return super.get(e).then(s=>new Ks(this._firestore,r,n._key,s._document,new Rr(!1,!1),n.converter))}}function NV(t,e,n){t=ie(t,Ee);const r=Object.assign(Object.assign({},kV),n);return function(i){if(i.maxAttempts<1)throw new F(O.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(i,o,a){const u=new at;return i.asyncQueue.enqueueAndForget(async()=>{const c=await Bx(i);new y2(i.asyncQueue,c,a,o,u).au()}),u.promise}(Fe(t),s=>e(new mS(t,s)),r)}/**
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
 */function DV(){return new xl("deleteField")}function up(){return new ug("serverTimestamp")}function VV(...t){return new cg("arrayUnion",t)}function OV(...t){return new dg("arrayRemove",t)}function MV(t){return new hg("increment",t)}function LV(t){return new Tl(t)}/**
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
 */function FV(t){return Fe(t=ie(t,Ee)),new pS(t,e=>Ao(t,e))}/**
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
 */function jV(t,e){const n=Fe(t=ie(t,Ee));if(!n._uninitializedComponentsProvider||n._uninitializedComponentsProvider._offline.kind==="memory")return Qt("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(i){const o=typeof i=="string"?function(c){try{return JSON.parse(c)}catch(h){throw new F(O.INVALID_ARGUMENT,"Failed to parse JSON: "+(h==null?void 0:h.message))}}(i):i,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=g0(u,"collectionGroup"),h=[];if(Array.isArray(u.fields))for(const f of u.fields){const m=Sd("setIndexConfiguration",g0(f,"fieldPath"));f.arrayConfig==="CONTAINS"?h.push(new ks(m,2)):f.order==="ASCENDING"?h.push(new ks(m,0)):f.order==="DESCENDING"&&h.push(new ks(m,1))}a.push(new Qi(Qi.UNKNOWN_ID,c,h,Yi.empty()))}return a}(e);return R2(n,r)}function g0(t,e){if(typeof t[e]!="string")throw new F(O.INVALID_ARGUMENT,"Missing string value for: "+e);return t[e]}/**
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
 */class gS{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function UV(t){var e;t=ie(t,Ee);const n=y0.get(t);if(n)return n;if(((e=Fe(t)._uninitializedComponentsProvider)===null||e===void 0?void 0:e._offline.kind)!=="persistent")return null;const r=new gS(t);return y0.set(t,r),r}function zV(t){yS(t,!0)}function BV(t){yS(t,!1)}function $V(t){C2(Fe(t._firestore)).then(e=>U("deleting all persistent cache indexes succeeded")).catch(e=>Qt("deleting all persistent cache indexes failed",e))}function yS(t,e){b2(Fe(t._firestore),e).then(n=>U(`setting persistent cache index auto creation isEnabled=${e} succeeded`)).catch(n=>Qt(`setting persistent cache index auto creation isEnabled=${e} failed`,n))}const y0=new WeakMap;/**
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
 */function qV(t){var e;const n=(e=Fe(ie(t.firestore,Ee))._onlineComponents)===null||e===void 0?void 0:e.datastore.serializer;return n===void 0?null:fd(n,St(t._query))._t}function GV(t,e){var n;const r=uT(e,(i,o)=>new jT(o,i.aggregateType,i._internalFieldPath)),s=(n=Fe(ie(t.firestore,Ee))._onlineComponents)===null||n===void 0?void 0:n.datastore.serializer;return s===void 0?null:XT(s,TT(t._query),r,!0).request}/**
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
 */class KV{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return vg.instance.onExistenceFilterMismatch(e)}}class vg{constructor(){this.Uu=new Map}static get instance(){return vu||(vu=new vg,function(n){if(kc)throw new Error("a TestingHooksSpi instance is already set");kc=n}(vu)),vu}et(e){this.Uu.forEach(n=>n(e))}onExistenceFilterMismatch(e){const n=Symbol(),r=this.Uu;return r.set(n,e),()=>r.delete(n)}}let vu=null;(function(e,n=!0){(function(s){mo=s})(fo),Ki(new Ls("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Ee(new Tk(r.getProvider("auth-internal")),new Ak(r.getProvider("app-check-internal")),function(c,h){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new F(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new qr(c.options.projectId,h)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Fr(ov,"4.7.3",e),Fr(ov,"4.7.3","esm2017")})();const HV=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:yg,AggregateField:lo,AggregateQuerySnapshot:Zx,Bytes:Jr,CACHE_SIZE_UNLIMITED:N2,CollectionReference:fn,DocumentReference:Ge,DocumentSnapshot:Ks,FieldPath:is,FieldValue:os,Firestore:Ee,FirestoreError:F,GeoPoint:Id,LoadBundleTask:Qx,PersistentCacheIndexManager:gS,Query:lt,QueryCompositeFilterConstraint:Zs,QueryConstraint:xo,QueryDocumentSnapshot:Ia,QueryEndAtConstraint:Rl,QueryFieldFilterConstraint:So,QueryLimitConstraint:Sl,QueryOrderByConstraint:Rd,QuerySnapshot:Hs,QueryStartAtConstraint:Al,SnapshotMetadata:Rr,Timestamp:Le,Transaction:mS,VectorValue:Tl,WriteBatch:pS,_AutoId:Em,_ByteString:Be,_DatabaseId:qr,_DocumentKey:G,_EmptyAppCheckTokenProvider:Rk,_EmptyAuthCredentialsProvider:YI,_FieldPath:Ne,_TestingHooks:KV,_cast:ie,_debugAssert:Ek,_internalAggregationQueryToProtoRunAggregationQueryRequest:GV,_internalQueryToProtoQueryTarget:qV,_isBase64Available:tN,_logWarn:Qt,_validateIsNotUsedTogether:Kx,addDoc:vs,aggregateFieldEqual:aV,aggregateQuerySnapshotEqual:lV,and:J2,arrayRemove:OV,arrayUnion:VV,average:oV,clearIndexedDbPersistence:M2,collection:Vt,collectionGroup:P2,connectFirestoreEmulator:Wx,count:dS,deleteAllPersistentCacheIndexes:$V,deleteDoc:pi,deleteField:DV,disableNetwork:j2,disablePersistentCacheIndexAutoCreation:BV,doc:Ot,documentId:$2,enableIndexedDbPersistence:V2,enableMultiTabIndexedDbPersistence:O2,enableNetwork:F2,enablePersistentCacheIndexAutoCreation:zV,endAt:rV,endBefore:nV,ensureFirestoreConfigured:Fe,executeWrite:Ao,getAggregateFromServer:hS,getCountFromServer:vV,getDoc:dV,getDocFromCache:hV,getDocFromServer:fV,getDocs:pV,getDocsFromCache:mV,getDocsFromServer:gV,getFirestore:Yx,getPersistentCacheIndexManager:UV,increment:MV,initializeFirestore:D2,limit:X2,limitToLast:Z2,loadBundle:z2,memoryEagerGarbageCollector:xV,memoryLocalCache:AV,memoryLruGarbageCollector:SV,namedQuery:B2,onSnapshot:ur,onSnapshotsInSync:_V,or:Y2,orderBy:lp,persistentLocalCache:RV,persistentMultipleTabManager:PV,persistentSingleTabManager:fS,query:Ku,queryEqual:lg,refEqual:k2,runTransaction:NV,serverTimestamp:up,setDoc:yV,setIndexConfiguration:jV,setLogLevel:wk,snapshotEqual:cV,startAfter:tV,startAt:eV,sum:iV,terminate:U2,updateDoc:_s,vector:LV,waitForPendingWrites:L2,where:Q2,writeBatch:FV},Symbol.toStringTag,{value:"Module"})),WV={apiKey:"AIzaSyDFGlm4ixlJ34vg9XT_otqIeKgZT5bmBu8",authDomain:"tsops-webapp-v1.firebaseapp.com",projectId:"tsops-webapp-v1",storageBucket:"tsops-webapp-v1.firebasestorage.app",messagingSenderId:"558840136278",appId:"1:558840136278:web:00e5918a1e98aa70f2f1f7"},_S=aI(WV),_0=gk(_S),Ce=Yx(_S),QV="modulepreload",YV=function(t){return"/"+t},v0={},JV=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=YV(u),u in v0)return;v0[u]=!0;const c=u.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${h}`))return;const f=document.createElement("link");if(f.rel=c?"stylesheet":QV,c||(f.as="script"),f.crossOrigin="",f.href=u,a&&f.setAttribute("nonce",a),document.head.appendChild(f),c)return new Promise((m,y)=>{f.addEventListener("load",m),f.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};function XV(t){const[e,n]=Y.useState([]),[r,s]=Y.useState([]),[i,o]=Y.useState([]),[a,u]=Y.useState([]),[c,h]=Y.useState([]),[f,m]=Y.useState([]),[y,E]=Y.useState({});Y.useEffect(()=>{if(!t&&!(t!=null&&t.email))return;const J=ur(Vt(Ce,"members"),ge=>{n(ge.docs.map(fe=>({id:fe.id,...fe.data()})))}),K=Ku(Vt(Ce,"tasks")),j=ur(K,ge=>{s(ge.docs.map(fe=>({id:fe.id,...fe.data()})))}),W=Ku(Vt(Ce,"logs"),lp("date","desc")),X=ur(W,ge=>{o(ge.docs.map(fe=>({id:fe.id,...fe.data()})))}),de=Ku(Vt(Ce,"actionLogs"),lp("timestamp","desc")),me=ur(de,ge=>{u(ge.docs.map(fe=>({id:fe.id,...fe.data()})))}),Te=ur(Vt(Ce,"rules"),ge=>{h(ge.docs.map(fe=>({id:fe.id,...fe.data()})))}),Dt=ur(Vt(Ce,"manualScores"),ge=>{m(ge.docs.map(fe=>({id:fe.id,...fe.data()})))}),Re=ur(Vt(Ce,"roles"),ge=>{const fe={};ge.docs.forEach(Pl=>{fe[Pl.id]=Pl.data().role}),E(fe)});return()=>{J(),j(),X(),me(),Te(),Dt(),Re()}},[t]);const b=async(J,K,j)=>{try{await vs(Vt(Ce,"actionLogs"),{timestamp:up(),user:J,action:K,detail:j})}catch(W){console.error("Log Error",W)}};return{members:e,tasks:r,logs:i,actionLogs:a,rules:c,manualScores:f,roles:y,handleTaskToggle:async(J,K,j)=>{const W=!K,X=Ot(Ce,"tasks",J);await _s(X,{completed:W}),await b((j==null?void 0:j.email)||"Unknown","Toggle Task",`Task ${J} -> ${W?"Done":"Undo"}`)},handleUpdateTaskStatus:async(J,K,j)=>{const W=Ot(Ce,"tasks",J);await _s(W,{status:K}),await b((j==null?void 0:j.email)||"Unknown","Update Status",`Task ${J} -> ${K}`)},handleAddTask:async(J,K)=>{await vs(Vt(Ce,"tasks"),J),await b((K==null?void 0:K.email)||"Unknown","Add Task",`Added task: ${J.name}`)},handleEditTask:async(J,K,j)=>{const W=Ot(Ce,"tasks",J);await _s(W,K),await b((j==null?void 0:j.email)||"Unknown","Edit Task",`Edited task: ${J}`)},handleDeleteTask:async(J,K)=>{await pi(Ot(Ce,"tasks",J)),await b((K==null?void 0:K.email)||"Unknown","Delete Task",`Deleted task: ${J}`)},handleAddMember:async(J,K)=>{await vs(Vt(Ce,"members"),J),await b((K==null?void 0:K.email)||"Unknown","Add Member",`Added member: ${J.name}`)},handleEditMember:async(J,K,j)=>{const W=Ot(Ce,"members",J);await _s(W,K),await b((j==null?void 0:j.email)||"Unknown","Edit Member",`Edited member: ${J}`)},handleDeleteMember:async(J,K)=>{await pi(Ot(Ce,"members",J)),await b((K==null?void 0:K.email)||"Unknown","Delete Member",`Deleted member: ${J}`)},handleAddLog:async(J,K)=>{await vs(Vt(Ce,"logs"),J),await b((K==null?void 0:K.email)||"Unknown","Add Log",`Added problem: ${J.topic}`)},handleResolveLog:async(J,K,j)=>{const W=Ot(Ce,"logs",J);await _s(W,{status:"solved",resolution:K,solvedBy:(j==null?void 0:j.email)||"Unknown"}),await b((j==null?void 0:j.email)||"Unknown","Resolve Log",`Resolved log: ${J}`)},handleDeleteLog:async(J,K)=>{await pi(Ot(Ce,"logs",J)),await b((K==null?void 0:K.email)||"Unknown","Delete Log",`Deleted log: ${J}`)},handleSaveRule:async(J,K)=>{if(J.id){const{id:j,...W}=J;await _s(Ot(Ce,"rules",j),W)}else await vs(Vt(Ce,"rules"),J);await b((K==null?void 0:K.email)||"Unknown","Save Rule","Saved rule")},handleDeleteRule:async(J,K)=>{await pi(Ot(Ce,"rules",J)),await b((K==null?void 0:K.email)||"Unknown","Delete Rule",`Deleted rule: ${J}`)},handleSaveManualScore:async(J,K)=>{await vs(Vt(Ce,"manualScores"),{...J,timestamp:up()}),await b((K==null?void 0:K.email)||"Unknown","Add Score",`Score ${J.points}`)},handleDeleteManualScore:async(J,K)=>{await pi(Ot(Ce,"manualScores",J)),await b((K==null?void 0:K.email)||"Unknown","Delete Score",`Deleted score: ${J}`)},handleSaveRole:async(J,K,j)=>{const W=Ot(Ce,"roles",J);await JV(()=>Promise.resolve().then(()=>HV),void 0).then(async({setDoc:X,getDoc:de})=>{await X(W,{role:K},{merge:!0})}),await b((j==null?void 0:j.email)||"Unknown","Update Role",`Set ${J} to ${K}`)}}}/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ZV={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eO=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ve=(t,e)=>{const n=Y.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:a="",children:u,...c},h)=>Y.createElement("svg",{ref:h,...ZV,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${eO(t)}`,a].join(" "),...c},[...e.map(([f,m])=>Y.createElement(f,m)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tO=ve("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=ve("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nO=ve("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rO=ve("ArrowRightLeft",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sO=ve("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iO=ve("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vS=ve("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oO=ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aO=ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=ve("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lO=ve("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uO=ve("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ES=ve("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IS=ve("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=ve("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TS=ve("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cO=ve("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dO=ve("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hO=ve("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fO=ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pO=ve("Package",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mO=ve("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xS=ve("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gO=ve("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wg=ve("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eg=ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yO=ve("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=ve("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _O=ve("Warehouse",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]),Hu=[{id:"dashboard",label:"หน้าหลัก",icon:cp},{id:"inbound",label:"งานรถโอนย้าย",icon:nO},{id:"outbound",label:"งานส่งสินค้า",icon:sO},{id:"internal",label:"งานรถส่วนกลาง",icon:iO},{id:"problems",label:"Problem Log",icon:Za},{id:"scorelog",label:"ประวัติคะแนน",icon:wS},{id:"actionlog",label:"ประวัติการทำงาน",icon:IS},{id:"rules",label:"ระเบียบการให้คะแนน",icon:ES},{id:"team",label:"จัดการทีม",icon:Cd},{id:"assign_menu",label:"กำหนดสิทธิ์ (Assign Menu)",icon:xS}];function vO({id:t,label:e,icon:n,activeTab:r,setActiveTab:s,isSidebarOpen:i,colorClass:o="text-gray-500"}){return g.jsxs("button",{onClick:()=>s(t),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 mb-1 ${r===t?"bg-blue-50 text-blue-700 shadow-sm border border-blue-100 font-medium":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"} ${i?"":"justify-center"}`,title:i?"":e,children:[g.jsx(n,{size:22,className:`flex-shrink-0 ${r===t?"text-blue-600":o}`}),i&&g.jsx("span",{className:"truncate text-sm",children:e})]})}function wO({isSidebarOpen:t,setSidebarOpen:e,activeTab:n,setActiveTab:r,appUser:s,currentUserRole:i,roles:o,handleLogout:a,hasAccess:u,setIsProfileModalOpen:c}){var f;const h=Hu.filter(m=>u(m.id));return g.jsxs("aside",{className:`bg-white border-r border-gray-200 hidden md:flex flex-col transition-all duration-300 ease-in-out z-20 shadow-[2px_0_15px_rgba(0,0,0,0.03)] ${t?"w-64":"w-20"}`,children:[g.jsxs("div",{className:`p-4 border-b border-gray-100 flex items-center ${t?"justify-between":"justify-center"}`,children:[t&&g.jsxs("h1",{className:"text-xl font-extrabold text-blue-800 flex items-center gap-2 truncate",children:[g.jsx("div",{className:"w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md",children:g.jsx(cp,{size:18})}),g.jsxs("span",{className:"truncate",children:["Transport",g.jsx("span",{className:"text-blue-500 font-light",children:"Ops"})]})]}),!t&&g.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md",children:g.jsx(cp,{size:24})})]}),g.jsx("div",{className:"flex justify-end px-2 pt-2",children:g.jsx("button",{onClick:()=>e(!t),className:"p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition",children:t?g.jsx(oO,{size:20}):g.jsx(aO,{size:20,className:"mx-auto"})})}),g.jsx("nav",{className:"flex-1 p-3 space-y-0.5 overflow-y-auto overflow-x-hidden custom-scrollbar",children:h.map(m=>g.jsx(vO,{id:m.id,label:m.label,icon:m.icon,activeTab:n,setActiveTab:r,isSidebarOpen:t,colorClass:["inbound","outbound","internal","problems"].includes(m.id)?m.id==="inbound"?"text-green-500":m.id==="outbound"?"text-orange-500":m.id==="internal"?"text-purple-500":"text-red-500":"text-gray-500"},m.id))}),g.jsxs("div",{className:"p-4 border-t border-gray-100 mt-auto",children:[g.jsxs("div",{className:`flex items-center gap-3 ${t?"":"justify-center"} cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition`,onClick:()=>c(!0),children:[g.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs",children:s.email?s.email.charAt(0).toUpperCase():"U"}),t&&g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsx("p",{className:"text-sm font-medium text-gray-800 truncate",children:s.email||"User"}),g.jsx("div",{className:"flex items-center gap-2",children:g.jsx("span",{className:"text-[10px] bg-blue-50 text-blue-600 px-1.5 rounded border border-blue-100 truncate max-w-[80px]",children:((f=o.find(m=>m.id===i))==null?void 0:f.name)||i})})]})]}),t&&g.jsxs("button",{onClick:a,className:"text-xs text-red-500 hover:text-red-600 flex items-center gap-1 mt-2 w-full justify-center py-1",children:[g.jsx(dO,{size:10})," ออกจากระบบ"]})]})]})}const wu=({icon:t,label:e,value:n,color:r,subtext:s})=>g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between hover:shadow-md transition-shadow",children:[g.jsxs("div",{children:[g.jsx("p",{className:"text-gray-500 text-sm font-medium mb-1",children:e}),g.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:n}),s&&g.jsx("p",{className:`text-xs mt-2 ${r}`,children:s})]}),g.jsx("div",{className:`p-3 rounded-lg ${r} bg-opacity-10`,children:g.jsx(t,{className:r,size:24})})]});function EO({members:t,tasks:e,logs:n}){const r=t||[],s=e||[],i=n||[],o=r.length,a=s.length,u=s.filter(y=>y==null?void 0:y.completed).length,c=a>0?Math.round(u/a*100):0,h=i.filter(y=>(y==null?void 0:y.status)==="pending").length,f=i.filter(y=>(y==null?void 0:y.status)==="solved").length,m=s.slice(0,5);return g.jsxs("div",{className:"space-y-6 animate-fade-in",children:[g.jsx("div",{className:"flex justify-between items-center",children:g.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Dashboard"})}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[g.jsx(wu,{icon:Cd,label:"พนักงาน",value:o,color:"text-blue-600",subtext:"Active"}),g.jsx(wu,{icon:vS,label:"งานสำเร็จ",value:`${u}/${a}`,color:"text-green-600",subtext:`${c}%`}),g.jsx(wu,{icon:Za,label:"ปัญหาคงค้าง",value:h,color:"text-red-600",subtext:`แก้แล้ว ${f}`}),g.jsx(wu,{icon:tO,label:"ประสิทธิภาพ",value:`${c}%`,color:"text-indigo-600",subtext:"ภาพรวม"})]}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100",children:[g.jsxs("h3",{className:"font-bold text-gray-800 mb-4 flex items-center gap-2",children:[g.jsx(lO,{size:20,className:"text-orange-500"})," งานล่าสุด"]}),g.jsx("div",{className:"space-y-3",children:m.length>0?m.map((y,E)=>g.jsxs("div",{className:"flex justify-between p-3 bg-gray-50 rounded-lg",children:[g.jsxs("div",{children:[g.jsx("p",{className:"font-medium text-sm",children:y==null?void 0:y.name}),g.jsx("p",{className:"text-xs text-gray-500",children:y==null?void 0:y.area})]}),g.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${y!=null&&y.completed?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`,children:y!=null&&y.completed?"เสร็จ":"กำลังทำ"})]},(y==null?void 0:y.id)||E)):g.jsx("p",{className:"text-center text-gray-400",children:"ไม่มีข้อมูล"})})]}),g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100",children:[g.jsxs("h3",{className:"font-bold text-gray-800 mb-4 flex items-center gap-2",children:[g.jsx(Za,{size:20,className:"text-red-500"})," ปัญหาล่าสุด"]}),g.jsxs("div",{className:"space-y-3",children:[i.slice(0,5).map((y,E)=>g.jsxs("div",{className:"p-3 border-l-4 border-red-400 bg-red-50 rounded-r-lg",children:[g.jsx("p",{className:"text-sm font-bold",children:y==null?void 0:y.topic}),g.jsx("p",{className:"text-xs text-gray-600 truncate",children:y==null?void 0:y.detail})]},(y==null?void 0:y.id)||E)),i.length===0&&g.jsx("p",{className:"text-center text-gray-400",children:"ไม่มีข้อมูล"})]})]})]})]})}function IO({members:t,onAddMember:e,onEditMember:n,onDeleteMember:r,roles:s}){const[i,o]=Y.useState({name:"",role:"",dept:"Inbound",avatar:"",email:"",password:""}),[a,u]=Y.useState(!1),[c,h]=Y.useState(null),f=E=>{E.preventDefault(),e({...i,avatar:i.avatar||`https://i.pravatar.cc/150?u=${Date.now()}`}),o({name:"",role:"",dept:"Inbound",avatar:"",email:"",password:""})},m=E=>{h(E),u(!0)},y=E=>{E.preventDefault(),n(c),u(!1)};return g.jsxs("div",{className:"space-y-6 animate-fade-in",children:[g.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[g.jsx(Cd,{className:"text-blue-600"})," จัดการทีมงาน"]}),a&&g.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm",children:g.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in",children:[g.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[g.jsx(wg,{className:"text-blue-600"})," แก้ไขข้อมูลพนักงาน"]}),g.jsxs("form",{onSubmit:y,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"ชื่อ-สกุล"}),g.jsx("input",{required:!0,className:"w-full border rounded px-3 py-2",value:c.name,onChange:E=>h({...c,name:E.target.value})})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"อีเมล (สำหรับเข้าสู่ระบบ)"}),g.jsx("input",{required:!0,type:"email",className:"w-full border rounded px-3 py-2",value:c.email,onChange:E=>h({...c,email:E.target.value})})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"ตำแหน่ง"}),g.jsx("select",{required:!0,className:"w-full border rounded px-3 py-2 bg-white",value:c.role,onChange:E=>h({...c,role:E.target.value}),children:s.map(E=>g.jsx("option",{value:E.name,children:E.name},E.id))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"แผนก"}),g.jsxs("select",{className:"w-full border rounded px-3 py-2 bg-white",value:c.dept,onChange:E=>h({...c,dept:E.target.value}),children:[g.jsx("option",{value:"Inbound",children:"Inbound"}),g.jsx("option",{value:"Outbound",children:"Outbound"}),g.jsx("option",{value:"Internal",children:"Internal"}),g.jsx("option",{value:"Manager",children:"Manager"})]})]}),g.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[g.jsx("button",{type:"button",onClick:()=>u(!1),className:"px-4 py-2 text-gray-500 hover:bg-gray-100 rounded",children:"ยกเลิก"}),g.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"บันทึก"})]})]})]})}),g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm mb-6",children:[g.jsx("h3",{className:"font-bold mb-4 text-gray-700",children:"เพิ่มสมาชิกใหม่"}),g.jsxs("form",{onSubmit:f,className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end",children:[g.jsxs("div",{className:"w-full",children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"ชื่อ-สกุล"}),g.jsx("input",{required:!0,value:i.name,onChange:E=>o({...i,name:E.target.value}),className:"w-full border rounded-lg px-3 py-2 text-sm",placeholder:"ระบุชื่อ..."})]}),g.jsxs("div",{className:"w-full",children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"อีเมล (Login)"}),g.jsx("input",{required:!0,type:"email",value:i.email,onChange:E=>o({...i,email:E.target.value}),className:"w-full border rounded-lg px-3 py-2 text-sm",placeholder:"name@company.com"})]}),g.jsxs("div",{className:"w-full",children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"รหัสผ่าน"}),g.jsx("input",{required:!0,type:"password",value:i.password,onChange:E=>o({...i,password:E.target.value}),className:"w-full border rounded-lg px-3 py-2 text-sm",placeholder:"********"})]}),g.jsxs("div",{className:"w-full",children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"ตำแหน่ง"}),g.jsxs("select",{required:!0,className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:i.role,onChange:E=>o({...i,role:E.target.value}),children:[g.jsx("option",{value:"",children:"เลือกตำแหน่ง..."}),s.map(E=>g.jsx("option",{value:E.name,children:E.name},E.id))]})]}),g.jsxs("div",{className:"w-full",children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"แผนก"}),g.jsxs("select",{className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:i.dept,onChange:E=>o({...i,dept:E.target.value}),children:[g.jsx("option",{value:"Inbound",children:"Inbound"}),g.jsx("option",{value:"Outbound",children:"Outbound"}),g.jsx("option",{value:"Internal",children:"Internal"}),g.jsx("option",{value:"Manager",children:"Manager"})]})]}),g.jsx("div",{className:"w-full md:col-span-1 lg:col-span-1",children:g.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full font-medium text-sm shadow-sm transition h-[38px] mt-6",children:"เพิ่มสมาชิก"})})]})]}),g.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[g.jsx("thead",{className:"bg-gray-50",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"สมาชิก"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"อีเมล"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"ตำแหน่ง"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"แผนก"}),g.jsx("th",{className:"px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider",children:"จัดการ"})]})}),g.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((E,b)=>g.jsxs("tr",{className:"hover:bg-gray-50 transition cursor-pointer",onClick:()=>m(E),children:[g.jsxs("td",{className:"px-6 py-4 whitespace-nowrap flex items-center gap-3",children:[g.jsx("img",{className:"h-9 w-9 rounded-full object-cover border",src:E.avatar||`https://i.pravatar.cc/150?u=${E.id}`,alt:""}),g.jsx("div",{className:"text-sm font-medium text-gray-900",children:E.name})]}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:E.email}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:E.role}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:g.jsx("span",{className:`px-2.5 py-0.5 inline-flex text-xs leading-4 font-semibold rounded-full ${E.dept==="Inbound"?"bg-green-100 text-green-800":E.dept==="Outbound"?"bg-orange-100 text-orange-800":"bg-purple-100 text-purple-800"}`,children:E.dept})}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:g.jsx("button",{onClick:D=>{D.stopPropagation(),r(E.id)},className:"text-gray-400 hover:text-red-600 transition p-1 rounded-full hover:bg-red-50",children:g.jsx(Eg,{size:18})})})]},E.docId||E.id||b))})]})})})]})}function TO({members:t,tasks:e,onTaskToggle:n}){const r=t||[],s=e||[],i=r.filter(m=>(m==null?void 0:m.dept)==="Inbound"),o=s.filter(m=>(m==null?void 0:m.area)==="Inbound"),a=r.filter(m=>(m==null?void 0:m.dept)==="Outbound"),u=s.filter(m=>(m==null?void 0:m.area)==="Outbound"),c=r.filter(m=>(m==null?void 0:m.dept)==="Internal"),h=s.filter(m=>(m==null?void 0:m.area)==="Internal"),f=(m,y,E,b,D)=>g.jsxs("div",{className:"bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full",children:[g.jsxs("div",{className:`p-4 border-b border-gray-100 ${b} bg-opacity-10 flex justify-between items-center`,children:[g.jsxs("div",{className:"flex items-center gap-2",children:[D,g.jsx("h3",{className:"font-bold text-lg text-gray-800",children:m})]}),g.jsxs("span",{className:"text-xs font-bold text-gray-500 bg-white px-2 py-1 rounded-full shadow-sm",children:[y.length," คน | ",E.length," งาน"]})]}),g.jsxs("div",{className:"p-4 flex-1 space-y-4",children:[g.jsxs("div",{children:[g.jsx("h4",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2",children:"ทีมงาน"}),g.jsx("div",{className:"flex flex-wrap gap-2",children:y.length>0?y.map((I,w)=>g.jsx("span",{className:"text-xs px-2.5 py-1 bg-gray-50 text-gray-700 rounded border",children:I==null?void 0:I.name},(I==null?void 0:I.id)||w)):g.jsx("p",{className:"text-xs text-gray-300",children:"- ว่าง -"})})]}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2",children:"งาน"}),g.jsx("div",{className:"space-y-2",children:E.length>0?E.map((I,w)=>g.jsxs("div",{className:"flex items-start gap-3 p-2.5 bg-gray-50 rounded-lg border",children:[g.jsx("input",{type:"checkbox",checked:(I==null?void 0:I.completed)||!1,onChange:()=>n&&n(I.id,I==null?void 0:I.completed),className:"mt-0.5 rounded text-blue-600 cursor-pointer"}),g.jsx("p",{className:`text-sm ${I!=null&&I.completed?"line-through text-gray-400":"text-gray-700"}`,children:I==null?void 0:I.name})]},(I==null?void 0:I.id)||w)):g.jsx("p",{className:"text-xs text-center text-gray-300",children:"- ไม่มีงาน -"})})]})]})]});return g.jsxs("div",{className:"space-y-6 animate-fade-in",children:[g.jsx("div",{className:"flex justify-between items-center",children:g.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[g.jsx(Cd,{className:"text-blue-600"})," ภาพรวมแผนก"]})}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-start",children:[f("Inbound",i,o,"bg-blue-500",g.jsx(pO,{size:20,className:"text-blue-600"})),f("Outbound",a,u,"bg-green-500",g.jsx(rO,{size:20,className:"text-green-600"})),f("Internal",c,h,"bg-purple-500",g.jsx(_O,{size:20,className:"text-purple-600"}))]})]})}function xO({scoreLogs:t}){return g.jsxs("div",{className:"space-y-6 animate-fade-in",children:[g.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[g.jsx(wS,{className:"text-blue-600"})," ประวัติการหัก/เพิ่ม คะแนน (Score Log)"]}),g.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[g.jsx("thead",{className:"bg-gray-50",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"วัน-เวลา"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"ชื่อพนักงาน"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"รายการ"}),g.jsx("th",{className:"px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase",children:"คะแนน"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"ประเภท"})]})}),g.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.length===0?g.jsx("tr",{children:g.jsx("td",{colSpan:"5",className:"px-6 py-8 text-center text-gray-400",children:"ยังไม่มีประวัติคะแนนในเดือนนี้"})}):t.sort((e,n)=>new Date(n.date)-new Date(e.date)).map((e,n)=>g.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[g.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.date}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700",children:e.memberName}),g.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:e.topic}),g.jsx("td",{className:"px-6 py-4 text-center",children:g.jsxs("span",{className:`font-bold ${e.score<0?"text-red-500":"text-green-500"}`,children:[e.score>0?"+":"",e.score]})}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-xs",children:g.jsx("span",{className:`px-2 py-1 rounded border ${e.type==="Auto"?"bg-gray-100 text-gray-500 border-gray-200":"bg-blue-50 text-blue-600 border-blue-100"}`,children:e.type})})]},n))})]})})})]})}function SO({logs:t,onAddLog:e,onResolveLog:n,onDeleteLog:r,currentDate:s,askAiSolution:i,showToast:o,userEmail:a,currentUserRole:u,aiLoading:c}){const[h,f]=Y.useState(""),[m,y]=Y.useState(""),[E,b]=Y.useState("Inbound"),[D,I]=Y.useState("pending"),[w,x]=Y.useState(!1),[V,z]=Y.useState(""),[L,T]=Y.useState(null),[v,S]=Y.useState(!1),A=te=>{te.preventDefault(),e({topic:h,detail:m,dept:E,date:s,status:"pending",createdBy:a||"Unknown"}),f(""),y(""),o("บันทึกปัญหาเรียบร้อยแล้ว")},C=te=>{T(te),x(!0)},k=async()=>{if(L)try{S(!0),await n(L,V),x(!1),z(""),T(null),o("ปิดงานเรียบร้อยแล้ว")}catch(te){console.error(te),o("เกิดข้อผิดพลาดในการปิดงาน")}finally{S(!1)}},R=async te=>{if(window.confirm(`⚠️ คุณต้องการลบรายการปัญหานี้ใช่หรือไม่?
(การกระทำนี้ไม่สามารถย้อนกลับได้)`))try{await r(te),o("ลบรายการเรียบร้อยแล้ว")}catch(J){console.error(J),o("เกิดข้อผิดพลาดในการลบ")}},nt=t.filter(te=>te.status===D);return g.jsxs("div",{className:"space-y-6 animate-fade-in",children:[g.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[g.jsx(Za,{className:"text-red-500"})," Problem Log"]}),w&&g.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm",children:g.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in",children:[g.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[g.jsx(vS,{className:"text-green-600"})," บันทึกการปิดงาน"]}),g.jsxs("div",{className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"หมายเหตุ / สรุปการแก้ไข"}),g.jsx("textarea",{className:"w-full border rounded px-3 py-2 h-24",value:V,onChange:te=>z(te.target.value),placeholder:"ระบุรายละเอียดการแก้ไข..."})]}),g.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[g.jsx("button",{onClick:()=>x(!1),disabled:v,className:"px-4 py-2 text-gray-500 hover:bg-gray-100 rounded",children:"ยกเลิก"}),g.jsxs("button",{onClick:k,disabled:v,className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2",children:[v&&g.jsx(TS,{size:16,className:"animate-spin"}),"ยืนยันปิดงาน"]})]})]})]})}),g.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm h-fit",children:[g.jsx("h3",{className:"font-bold mb-4 text-gray-800",children:"แจ้งปัญหาใหม่"}),g.jsxs("form",{onSubmit:A,className:"space-y-4",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"หัวข้อ"}),g.jsx("input",{required:!0,type:"text",className:"w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition",value:h,onChange:te=>f(te.target.value)})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"รายละเอียด"}),g.jsx("textarea",{required:!0,className:"w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition",rows:"3",value:m,onChange:te=>y(te.target.value)})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"แผนก"}),g.jsxs("select",{className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:E,onChange:te=>b(te.target.value),children:[g.jsx("option",{value:"Inbound",children:"Inbound"}),g.jsx("option",{value:"Outbound",children:"Outbound"}),g.jsx("option",{value:"Internal",children:"Internal"})]})]}),g.jsx("button",{type:"submit",className:"w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition font-medium text-sm shadow-md shadow-red-200",children:"บันทึกปัญหา"})]})]}),g.jsxs("div",{className:"lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col max-h-[600px]",children:[g.jsxs("div",{className:"flex border-b",children:[g.jsxs("button",{onClick:()=>I("pending"),className:`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${D==="pending"?"border-red-500 text-red-600 bg-red-50":"border-transparent text-gray-500 hover:bg-gray-50"}`,children:["รอดำเนินการ (",t.filter(te=>te.status==="pending").length,")"]}),g.jsxs("button",{onClick:()=>I("solved"),className:`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${D==="solved"?"border-green-500 text-green-600 bg-green-50":"border-transparent text-gray-500 hover:bg-gray-50"}`,children:["ปิดงานแล้ว (",t.filter(te=>te.status==="solved").length,")"]})]}),g.jsxs("div",{className:"divide-y overflow-y-auto flex-1",children:[nt.length===0?g.jsx("div",{className:"p-10 text-center text-gray-400",children:"ไม่มีรายการในสถานะนี้"}):null,[...nt].reverse().map((te,J)=>g.jsx("div",{className:"p-4 hover:bg-gray-50 transition relative group",children:g.jsxs("div",{className:"flex justify-between items-start gap-4",children:[g.jsxs("div",{className:"flex-1 min-w-0",children:[g.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[g.jsx("h4",{className:"font-bold text-gray-800 text-sm",children:te.topic}),g.jsxs("span",{className:"text-[10px] text-gray-400",children:["โดย: ",te.createdBy]}),te.status==="pending"&&g.jsxs("button",{onClick:()=>i(te),disabled:c,className:"flex items-center gap-1 px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded border border-indigo-100 hover:bg-indigo-100 transition whitespace-nowrap",children:[g.jsx(gO,{size:10})," ",c?"Thinking...":"Ask AI"]})]}),g.jsx("p",{className:"text-sm text-gray-600 break-words",children:te.detail}),te.status==="solved"&&g.jsxs("div",{className:"mt-2 text-xs bg-green-50 p-2 rounded border border-green-100 text-green-800",children:[g.jsx("strong",{children:"แก้ไขแล้วโดย:"})," ",te.solvedBy," ",g.jsx("br",{}),g.jsx("strong",{children:"หมายเหตุ:"})," ",te.resolution]}),g.jsxs("div",{className:"flex gap-2 mt-2",children:[g.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider bg-gray-100 px-2 py-0.5 rounded text-gray-600",children:te.dept}),g.jsx("span",{className:"text-[10px] text-gray-400 px-2 py-0.5",children:te.date})]})]}),g.jsxs("div",{className:"flex flex-col items-end gap-2",children:[te.status==="pending"?["dgm","dm"].includes(u)&&g.jsx("button",{onClick:()=>C(te.docId||te.id),className:"px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded hover:bg-yellow-200 transition font-bold",children:"ปิดงาน"}):g.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap bg-green-100 text-green-700",children:"SOLVED"}),g.jsx("button",{onClick:()=>R(te.docId||te.id),className:"p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition",title:"ลบรายการ",children:g.jsx(Eg,{size:14})})]})]})},te.docId||te.id||J))]})]})]})]})}function AO({roles:t,onSaveRole:e,currentRole:n}){const r=[...t].sort((o,a)=>o.name.localeCompare(a.name,"th")),s=(o,a)=>{let u=[];o.access.includes("all")?u=Hu.map(h=>h.id).filter(h=>h!==a):o.access.includes(a)?u=o.access.filter(c=>c!==a):u=[...o.access,a],e({...o,access:u})},i=(o,a)=>{const u=o.readOnly||[],c=u.includes(a)?u.filter(h=>h!==a):[...u,a];e({...o,readOnly:c})};return g.jsxs("div",{className:"space-y-6 animate-fade-in",children:[g.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[g.jsx(xS,{className:"text-blue-600"})," กำหนดสิทธิ์การเข้าถึง (Assign Menu)"]}),g.jsxs("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100",children:[g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"min-w-full divide-y divide-gray-200 text-sm",children:[g.jsx("thead",{className:"bg-gray-50",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-4 py-3 text-left font-bold text-gray-500 uppercase min-w-[200px]",children:"ตำแหน่ง"}),Hu.map(o=>g.jsx("th",{className:"px-2 py-3 text-center font-bold text-gray-500 text-xs w-24",children:g.jsxs("div",{className:"flex flex-col items-center gap-1",children:[g.jsx(o.icon,{size:16}),g.jsx("span",{children:o.label})]})},o.id))]})}),g.jsx("tbody",{className:"divide-y divide-gray-200",children:r.map((o,a)=>g.jsxs("tr",{className:"hover:bg-gray-50",children:[g.jsx("td",{className:"px-4 py-3 font-medium text-gray-900",children:o.name}),Hu.map(u=>{var f,m,y;const c=((f=o.access)==null?void 0:f.includes("all"))||((m=o.access)==null?void 0:m.includes(u.id)),h=(y=o.readOnly)==null?void 0:y.includes(u.id);return g.jsx("td",{className:"px-2 py-3 text-center",children:g.jsxs("div",{className:"flex flex-col items-center gap-2",children:[g.jsx("label",{className:"flex items-center space-x-2 cursor-pointer",children:g.jsx("input",{type:"checkbox",className:"form-checkbox h-4 w-4 text-blue-600 rounded",checked:!!c,onChange:()=>s(o,u.id),disabled:o.id==="dgm"&&u.id==="assign_menu"})}),c&&g.jsxs("button",{onClick:()=>i(o,u.id),className:`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 transition-colors ${h?"bg-yellow-100 text-yellow-700 border-yellow-200":"bg-white text-gray-500 border-gray-200 hover:bg-gray-50"}`,title:h?"View Only":"Full Access",children:[h?g.jsx(uO,{size:10}):g.jsx(wg,{size:10}),h?"View":"Edit"]})]})},u.id)})]},o.docId||o.id||a))})]})}),g.jsxs("div",{className:"p-4 bg-gray-50 text-xs text-gray-500 border-t",children:["* ",g.jsx("strong",{children:"View Only:"})," สามารถดูข้อมูลได้แต่ไม่สามารถแก้ไข/ลบ/เพิ่มข้อมูลได้ ",g.jsx("br",{}),"* ",g.jsx("strong",{children:"Edit:"})," สามารถจัดการข้อมูลได้เต็มรูปแบบ"]})]})]})}function RO({actionLogs:t}){return g.jsxs("div",{className:"space-y-6 animate-fade-in",children:[g.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[g.jsx(IS,{className:"text-blue-600"})," ประวัติการทำงาน (Action Log)"]}),g.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:g.jsx("div",{className:"overflow-x-auto",children:g.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[g.jsx("thead",{className:"bg-gray-50",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"วัน-เวลา"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"ผู้ดำเนินการ"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"รายละเอียด"})]})}),g.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.length===0?g.jsx("tr",{children:g.jsx("td",{colSpan:"3",className:"px-6 py-8 text-center text-gray-400",children:"ยังไม่มีประวัติการทำงาน"})}):[...t].sort((e,n)=>e.createdAt&&n.createdAt?n.createdAt.seconds-e.createdAt.seconds:n.timestamp>e.timestamp?1:-1).map(e=>g.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[g.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.timestamp}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700",children:e.user}),g.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-600",children:e.action})]},e.docId||e.id))})]})})})]})}function bO({rules:t,onSaveRule:e,onDeleteRule:n,isReadOnly:r}){const[s,i]=Y.useState(!1),[o,a]=Y.useState({topic:"",score:0,type:"deduct",detail:""}),u=f=>{a(f),i(!0)},c=()=>{a({topic:"",score:0,type:"deduct",detail:""}),i(!0)},h=f=>{f.preventDefault(),e({...o,id:o.id||Date.now().toString()}),i(!1),a({topic:"",score:0,type:"deduct",detail:""})};return g.jsxs("div",{className:"space-y-6 animate-fade-in",children:[g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[g.jsx(ES,{className:"text-blue-600"})," ระเบียบการหัก/เพิ่ม คะแนน"]}),!r&&g.jsxs("button",{onClick:c,className:"flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:[g.jsx(mO,{size:18})," เพิ่มกฎใหม่"]})]}),s&&!r&&g.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6",children:[g.jsx("h3",{className:"font-bold mb-4",children:o.id?"แก้ไขกฎระเบียบ":"เพิ่มกฎระเบียบใหม่"}),g.jsxs("form",{onSubmit:h,className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[g.jsxs("div",{className:"md:col-span-2",children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"หัวข้อ"}),g.jsx("input",{required:!0,className:"w-full border rounded px-3 py-2",value:o.topic||"",onChange:f=>a({...o,topic:f.target.value})})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"ประเภท"}),g.jsxs("select",{className:"w-full border rounded px-3 py-2",value:o.type,onChange:f=>a({...o,type:f.target.value}),children:[g.jsx("option",{value:"deduct",children:"หักคะแนน (-)"}),g.jsx("option",{value:"add",children:"เพิ่มคะแนน (+)"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"คะแนน"}),g.jsx("input",{type:"number",required:!0,className:"w-full border rounded px-3 py-2",value:Math.abs(o.score)||0,onChange:f=>a({...o,score:o.type==="deduct"?-Math.abs(f.target.value):Math.abs(f.target.value)})})]}),g.jsxs("div",{className:"md:col-span-2",children:[g.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"รายละเอียด"}),g.jsx("input",{className:"w-full border rounded px-3 py-2",value:o.detail||"",onChange:f=>a({...o,detail:f.target.value})})]}),g.jsxs("div",{className:"md:col-span-2 flex justify-end gap-2",children:[g.jsx("button",{type:"button",onClick:()=>i(!1),className:"px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",children:"ยกเลิก"}),g.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"บันทึก"})]})]})]}),g.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:g.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[g.jsx("thead",{className:"bg-gray-50",children:g.jsxs("tr",{children:[g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"หัวข้อ"}),g.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"รายละเอียด"}),g.jsx("th",{className:"px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase",children:"คะแนน"}),!r&&g.jsx("th",{className:"px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase",children:"จัดการ"})]})}),g.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(f=>g.jsxs("tr",{className:"hover:bg-gray-50",children:[g.jsx("td",{className:"px-6 py-4 font-medium text-gray-800",children:f.topic}),g.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:f.detail}),g.jsx("td",{className:"px-6 py-4 text-center",children:g.jsxs("span",{className:`px-2 py-1 rounded text-xs font-bold ${f.score>0?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:[f.score>0?"+":"",f.score]})}),!r&&g.jsxs("td",{className:"px-6 py-4 text-right flex justify-end gap-2",children:[g.jsx("button",{onClick:()=>u(f),className:"text-blue-500 hover:bg-blue-50 p-1 rounded",children:g.jsx(wg,{size:16})}),g.jsx("button",{onClick:()=>n(f.id),className:"text-red-500 hover:bg-red-50 p-1 rounded",children:g.jsx(Eg,{size:16})})]})]},f.docId||f.id))})]})})]})}function CO({onLogin:t,error:e,loading:n}){const[r,s]=Y.useState(""),[i,o]=Y.useState(""),a=u=>{u.preventDefault(),t(r,i)};return g.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center p-4",children:g.jsxs("div",{className:"bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md",children:[g.jsxs("div",{className:"flex flex-col items-center mb-8",children:[g.jsx("div",{className:"w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4",children:g.jsx(yO,{size:32,className:"text-white"})}),g.jsxs("h1",{className:"text-3xl font-bold text-white tracking-tight",children:["Transport",g.jsx("span",{className:"text-blue-400",children:"Ops"})]}),g.jsx("p",{className:"text-blue-200 text-sm mt-1",children:"ระบบบริหารจัดการงานขนส่ง"})]}),g.jsxs("form",{onSubmit:a,className:"space-y-6",children:[g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"text-sm font-medium text-blue-100 ml-1",children:"อีเมล"}),g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors",children:g.jsx(hO,{size:18})}),g.jsx("input",{type:"email",required:!0,className:"w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all",placeholder:"name@company.com",value:r,onChange:u=>s(u.target.value)})]})]}),g.jsxs("div",{className:"space-y-2",children:[g.jsx("label",{className:"text-sm font-medium text-blue-100 ml-1",children:"รหัสผ่าน"}),g.jsxs("div",{className:"relative group",children:[g.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors",children:g.jsx(cO,{size:18})}),g.jsx("input",{type:"password",required:!0,className:"w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all",placeholder:"••••••••",value:i,onChange:u=>o(u.target.value)})]})]}),e&&g.jsxs("div",{className:"bg-red-500/10 border border-red-500/50 text-red-200 text-sm rounded-lg p-3 flex items-center gap-2 animate-pulse",children:[g.jsx(Za,{size:16}),e]}),g.jsx("button",{type:"submit",disabled:n,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:n?g.jsx(TS,{size:20,className:"animate-spin"}):"เข้าสู่ระบบ"})]}),g.jsx("div",{className:"mt-8 text-center text-xs text-blue-300/60",children:"© 2026 Transport Operations System v3.4"})]})})}let PO={data:""},kO=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||PO},NO=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,DO=/\/\*[^]*?\*\/|  +/g,w0=/\n+/g,Ir=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?Ir(o,i):i+"{"+Ir(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=Ir(o,e?e.replace(/([^,])+/g,a=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,a):a?a+" "+u:u)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=Ir.p?Ir.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},Pn={},SS=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+SS(t[n]);return e}return t},VO=(t,e,n,r,s)=>{let i=SS(t),o=Pn[i]||(Pn[i]=(u=>{let c=0,h=11;for(;c<u.length;)h=101*h+u.charCodeAt(c++)>>>0;return"go"+h})(i));if(!Pn[o]){let u=i!==t?t:(c=>{let h,f,m=[{}];for(;h=NO.exec(c.replace(DO,""));)h[4]?m.shift():h[3]?(f=h[3].replace(w0," ").trim(),m.unshift(m[0][f]=m[0][f]||{})):m[0][h[1]]=h[2].replace(w0," ").trim();return m[0]})(t);Pn[o]=Ir(s?{["@keyframes "+o]:u}:u,n?"":"."+o)}let a=n&&Pn.g?Pn.g:null;return n&&(Pn.g=Pn[o]),((u,c,h,f)=>{f?c.data=c.data.replace(f,u):c.data.indexOf(u)===-1&&(c.data=h?u+c.data:c.data+u)})(Pn[o],e,r,a),o},OO=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let a=o(n),u=a&&a.props&&a.props.className||/^go/.test(a)&&a;o=u?"."+u:a&&typeof a=="object"?a.props?"":Ir(a,""):a===!1?"":a}return r+s+(o??"")},"");function Pd(t){let e=this||{},n=t.call?t(e.p):t;return VO(n.unshift?n.raw?OO(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,kO(e.target),e.g,e.o,e.k)}let AS,dp,hp;Pd.bind({g:1});let Qn=Pd.bind({k:1});function MO(t,e,n,r){Ir.p=e,AS=t,dp=n,hp=r}function ls(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let a=Object.assign({},i),u=a.className||s.className;n.p=Object.assign({theme:dp&&dp()},a),n.o=/ *go\d+/.test(u),a.className=Pd.apply(n,r)+(u?" "+u:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),hp&&c[0]&&hp(a),AS(c,a)}return s}}var LO=t=>typeof t=="function",zc=(t,e)=>LO(t)?t(e):t,FO=(()=>{let t=0;return()=>(++t).toString()})(),RS=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),jO=20,Ig="default",bS=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return bS(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},Wu=[],CS={toasts:[],pausedAt:void 0,settings:{toastLimit:jO}},wn={},PS=(t,e=Ig)=>{wn[e]=bS(wn[e]||CS,t),Wu.forEach(([n,r])=>{n===e&&r(wn[e])})},kS=t=>Object.keys(wn).forEach(e=>PS(t,e)),UO=t=>Object.keys(wn).find(e=>wn[e].toasts.some(n=>n.id===t)),kd=(t=Ig)=>e=>{PS(e,t)},zO={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},BO=(t={},e=Ig)=>{let[n,r]=Y.useState(wn[e]||CS),s=Y.useRef(wn[e]);Y.useEffect(()=>(s.current!==wn[e]&&r(wn[e]),Wu.push([e,r]),()=>{let o=Wu.findIndex(([a])=>a===e);o>-1&&Wu.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var a,u,c;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((a=t[o.type])==null?void 0:a.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||zO[o.type],style:{...t.style,...(c=t[o.type])==null?void 0:c.style,...o.style}}});return{...n,toasts:i}},$O=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||FO()}),bl=t=>(e,n)=>{let r=$O(e,t,n);return kd(r.toasterId||UO(r.id))({type:2,toast:r}),r.id},Xe=(t,e)=>bl("blank")(t,e);Xe.error=bl("error");Xe.success=bl("success");Xe.loading=bl("loading");Xe.custom=bl("custom");Xe.dismiss=(t,e)=>{let n={type:3,toastId:t};e?kd(e)(n):kS(n)};Xe.dismissAll=t=>Xe.dismiss(void 0,t);Xe.remove=(t,e)=>{let n={type:4,toastId:t};e?kd(e)(n):kS(n)};Xe.removeAll=t=>Xe.remove(void 0,t);Xe.promise=(t,e,n)=>{let r=Xe.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?zc(e.success,s):void 0;return i?Xe.success(i,{id:r,...n,...n==null?void 0:n.success}):Xe.dismiss(r),s}).catch(s=>{let i=e.error?zc(e.error,s):void 0;i?Xe.error(i,{id:r,...n,...n==null?void 0:n.error}):Xe.dismiss(r)}),t};var qO=1e3,GO=(t,e="default")=>{let{toasts:n,pausedAt:r}=BO(t,e),s=Y.useRef(new Map).current,i=Y.useCallback((f,m=qO)=>{if(s.has(f))return;let y=setTimeout(()=>{s.delete(f),o({type:4,toastId:f})},m);s.set(f,y)},[]);Y.useEffect(()=>{if(r)return;let f=Date.now(),m=n.map(y=>{if(y.duration===1/0)return;let E=(y.duration||0)+y.pauseDuration-(f-y.createdAt);if(E<0){y.visible&&Xe.dismiss(y.id);return}return setTimeout(()=>Xe.dismiss(y.id,e),E)});return()=>{m.forEach(y=>y&&clearTimeout(y))}},[n,r,e]);let o=Y.useCallback(kd(e),[e]),a=Y.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=Y.useCallback((f,m)=>{o({type:1,toast:{id:f,height:m}})},[o]),c=Y.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),h=Y.useCallback((f,m)=>{let{reverseOrder:y=!1,gutter:E=8,defaultPosition:b}=m||{},D=n.filter(x=>(x.position||b)===(f.position||b)&&x.height),I=D.findIndex(x=>x.id===f.id),w=D.filter((x,V)=>V<I&&x.visible).length;return D.filter(x=>x.visible).slice(...y?[w+1]:[0,w]).reduce((x,V)=>x+(V.height||0)+E,0)},[n]);return Y.useEffect(()=>{n.forEach(f=>{if(f.dismissed)i(f.id,f.removeDelay);else{let m=s.get(f.id);m&&(clearTimeout(m),s.delete(f.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:u,startPause:a,endPause:c,calculateOffset:h}}},KO=Qn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,HO=Qn`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,WO=Qn`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,QO=ls("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${KO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${HO} 0.15s ease-out forwards;
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
    animation: ${WO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,YO=Qn`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,JO=ls("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${YO} 1s linear infinite;
`,XO=Qn`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,ZO=Qn`
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
}`,eM=ls("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${XO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${ZO} 0.2s ease-out forwards;
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
`,tM=ls("div")`
  position: absolute;
`,nM=ls("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,rM=Qn`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,sM=ls("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${rM} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,iM=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?Y.createElement(sM,null,e):e:n==="blank"?null:Y.createElement(nM,null,Y.createElement(JO,{...r}),n!=="loading"&&Y.createElement(tM,null,n==="error"?Y.createElement(QO,{...r}):Y.createElement(eM,{...r})))},oM=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,aM=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,lM="0%{opacity:0;} 100%{opacity:1;}",uM="0%{opacity:1;} 100%{opacity:0;}",cM=ls("div")`
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
`,dM=ls("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,hM=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=RS()?[lM,uM]:[oM(n),aM(n)];return{animation:e?`${Qn(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Qn(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},fM=Y.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?hM(t.position||e||"top-center",t.visible):{opacity:0},i=Y.createElement(iM,{toast:t}),o=Y.createElement(dM,{...t.ariaProps},zc(t.message,t));return Y.createElement(cM,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):Y.createElement(Y.Fragment,null,i,o))});MO(Y.createElement);var pM=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=Y.useCallback(o=>{if(o){let a=()=>{let u=o.getBoundingClientRect().height;r(t,u)};a(),new MutationObserver(a).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return Y.createElement("div",{ref:i,className:e,style:n},s)},mM=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:RS()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},gM=Pd`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Eu=16,yM=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:a})=>{let{toasts:u,handlers:c}=GO(n,i);return Y.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Eu,left:Eu,right:Eu,bottom:Eu,pointerEvents:"none",...o},className:a,onMouseEnter:c.startPause,onMouseLeave:c.endPause},u.map(h=>{let f=h.position||e,m=c.calculateOffset(h,{reverseOrder:t,gutter:r,defaultPosition:e}),y=mM(f,m);return Y.createElement(pM,{id:h.id,key:h.id,onHeightUpdate:c.updateHeight,className:h.visible?gM:"",style:y},h.type==="custom"?zc(h.message,h):s?s(h):Y.createElement(fM,{toast:h,position:f}))}))},E0;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(E0||(E0={}));/**
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
 */var I0;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(I0||(I0={}));var T0;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(T0||(T0={}));/**
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
 */const x0=["user","model","function","system"];var S0;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(S0||(S0={}));var A0;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(A0||(A0={}));var R0;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(R0||(R0={}));var b0;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(b0||(b0={}));var Ta;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(Ta||(Ta={}));var C0;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(C0||(C0={}));var P0;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(P0||(P0={}));var k0;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(k0||(k0={}));/**
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
 */class Tt extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class ui extends Tt{constructor(e,n){super(e),this.response=n}}class NS extends Tt{constructor(e,n,r,s){super(e),this.status=n,this.statusText=r,this.errorDetails=s}}class jr extends Tt{}class DS extends Tt{}/**
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
 */const _M="https://generativelanguage.googleapis.com",vM="v1beta",wM="0.24.1",EM="genai-js";var Ws;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(Ws||(Ws={}));class IM{constructor(e,n,r,s,i){this.model=e,this.task=n,this.apiKey=r,this.stream=s,this.requestOptions=i}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||vM;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||_M}/${r}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function TM(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${EM}/${wM}`),e.join(" ")}async function xM(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",TM(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(s){throw new jr(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${s.message}`)}for(const[s,i]of r.entries()){if(s==="x-goog-api-key")throw new jr(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new jr(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function SM(t,e,n,r,s,i){const o=new IM(t,e,n,r,i);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},CM(i)),{method:"POST",headers:await xM(o),body:s})}}async function Cl(t,e,n,r,s,i={},o=fetch){const{url:a,fetchOptions:u}=await SM(t,e,n,r,s,i);return AM(a,u,o)}async function AM(t,e,n=fetch){let r;try{r=await n(t,e)}catch(s){RM(s,t)}return r.ok||await bM(r,t),r}function RM(t,e){let n=t;throw n.name==="AbortError"?(n=new DS(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof NS||t instanceof jr||(n=new Tt(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function bM(t,e){let n="",r;try{const s=await t.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,r=s.error.details)}catch{}throw new NS(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function CM(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
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
 */function Tg(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),Qu(t.candidates[0]))throw new ui(`${hr(t)}`,t);return PM(t)}else if(t.promptFeedback)throw new ui(`Text not available. ${hr(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Qu(t.candidates[0]))throw new ui(`${hr(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),N0(t)[0]}else if(t.promptFeedback)throw new ui(`Function call not available. ${hr(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),Qu(t.candidates[0]))throw new ui(`${hr(t)}`,t);return N0(t)}else if(t.promptFeedback)throw new ui(`Function call not available. ${hr(t)}`,t)},t}function PM(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.text&&i.push(o.text),o.executableCode&&i.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&i.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function N0(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.functionCall&&i.push(o.functionCall);if(i.length>0)return i}const kM=[Ta.RECITATION,Ta.SAFETY,Ta.LANGUAGE];function Qu(t){return!!t.finishReason&&kM.includes(t.finishReason)}function hr(t){var e,n,r;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const i=t.candidates[0];Qu(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function el(t){return this instanceof el?(this.v=t,this):new el(t)}function NM(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),s,i=[];return s={},o("next"),o("throw"),o("return"),s[Symbol.asyncIterator]=function(){return this},s;function o(m){r[m]&&(s[m]=function(y){return new Promise(function(E,b){i.push([m,y,E,b])>1||a(m,y)})})}function a(m,y){try{u(r[m](y))}catch(E){f(i[0][3],E)}}function u(m){m.value instanceof el?Promise.resolve(m.value.v).then(c,h):f(i[0][2],m)}function c(m){a("next",m)}function h(m){a("throw",m)}function f(m,y){m(y),i.shift(),i.length&&a(i[0][0],i[0][1])}}/**
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
 */const D0=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function DM(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=MM(e),[r,s]=n.tee();return{stream:OM(r),response:VM(s)}}async function VM(t){const e=[],n=t.getReader();for(;;){const{done:r,value:s}=await n.read();if(r)return Tg(LM(e));e.push(s)}}function OM(t){return NM(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:s}=yield el(n.read());if(s)break;yield yield el(Tg(r))}})}function MM(t){const e=t.getReader();return new ReadableStream({start(r){let s="";return i();function i(){return e.read().then(({value:o,done:a})=>{if(a){if(s.trim()){r.error(new Tt("Failed to parse stream"));return}r.close();return}s+=o;let u=s.match(D0),c;for(;u;){try{c=JSON.parse(u[1])}catch{r.error(new Tt(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(c),s=s.substring(u[0].length),u=s.match(D0)}return i()}).catch(o=>{let a=o;throw a.stack=o.stack,a.name==="AbortError"?a=new DS("Request aborted when reading from the stream"):a=new Tt("Error reading from the stream"),a})}}})}function LM(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates){let s=0;for(const i of r.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const a of i.content.parts)a.text&&(o.text=a.text),a.functionCall&&(o.functionCall=a.functionCall),a.executableCode&&(o.executableCode=a.executableCode),a.codeExecutionResult&&(o.codeExecutionResult=a.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}s++}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
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
 */async function VS(t,e,n,r){const s=await Cl(e,Ws.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return DM(s)}async function OS(t,e,n,r){const i=await(await Cl(e,Ws.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:Tg(i)}}/**
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
 */function MS(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function tl(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return FM(e)}function FM(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),r=!0);if(r&&s)throw new Tt("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!s)throw new Tt("No content is provided for sending chat message.");return r?e:n}function jM(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new jr("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(s)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const i=tl(t);r.contents=[i]}return{generateContentRequest:r}}function V0(t){let e;return t.contents?e=t:e={contents:[tl(t)]},t.systemInstruction&&(e.systemInstruction=MS(t.systemInstruction)),e}function UM(t){return typeof t=="string"||Array.isArray(t)?{content:tl(t)}:t}/**
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
 */const O0=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],zM={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function BM(t){let e=!1;for(const n of t){const{role:r,parts:s}=n;if(!e&&r!=="user")throw new Tt(`First content should be with role 'user', got ${r}`);if(!x0.includes(r))throw new Tt(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(x0)}`);if(!Array.isArray(s))throw new Tt("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new Tt("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const a of s)for(const u of O0)u in a&&(i[u]+=1);const o=zM[r];for(const a of O0)if(!o.includes(a)&&i[a]>0)throw new Tt(`Content with role '${r}' can't contain '${a}' part`);e=!0}}function M0(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const r of n.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}/**
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
 */const L0="SILENT_ERROR";class $M{constructor(e,n,r,s={}){this.model=n,this.params=r,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(BM(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,s,i,o,a,u;await this._sendPromise;const c=tl(e),h={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},f=Object.assign(Object.assign({},this._requestOptions),n);let m;return this._sendPromise=this._sendPromise.then(()=>OS(this._apiKey,this.model,h,f)).then(y=>{var E;if(M0(y.response)){this._history.push(c);const b=Object.assign({parts:[],role:"model"},(E=y.response.candidates)===null||E===void 0?void 0:E[0].content);this._history.push(b)}else{const b=hr(y.response);b&&console.warn(`sendMessage() was unsuccessful. ${b}. Inspect response object for details.`)}m=y}).catch(y=>{throw this._sendPromise=Promise.resolve(),y}),await this._sendPromise,m}async sendMessageStream(e,n={}){var r,s,i,o,a,u;await this._sendPromise;const c=tl(e),h={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(a=this.params)===null||a===void 0?void 0:a.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,c]},f=Object.assign(Object.assign({},this._requestOptions),n),m=VS(this._apiKey,this.model,h,f);return this._sendPromise=this._sendPromise.then(()=>m).catch(y=>{throw new Error(L0)}).then(y=>y.response).then(y=>{if(M0(y)){this._history.push(c);const E=Object.assign({},y.candidates[0].content);E.role||(E.role="model"),this._history.push(E)}else{const E=hr(y);E&&console.warn(`sendMessageStream() was unsuccessful. ${E}. Inspect response object for details.`)}}).catch(y=>{y.message!==L0&&console.error(y)}),m}}/**
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
 */async function qM(t,e,n,r){return(await Cl(e,Ws.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
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
 */async function GM(t,e,n,r){return(await Cl(e,Ws.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function KM(t,e,n,r){const s=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await Cl(e,Ws.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),r)).json()}/**
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
 */class F0{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=MS(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const s=V0(e),i=Object.assign(Object.assign({},this._requestOptions),n);return OS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}async generateContentStream(e,n={}){var r;const s=V0(e),i=Object.assign(Object.assign({},this._requestOptions),n);return VS(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}startChat(e){var n;return new $M(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=jM(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return qM(this.apiKey,this.model,r,s)}async embedContent(e,n={}){const r=UM(e),s=Object.assign(Object.assign({},this._requestOptions),n);return GM(this.apiKey,this.model,r,s)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return KM(this.apiKey,this.model,e,r)}}/**
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
 */class HM{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new Tt("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new F0(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new jr("Cached content must contain a `name` field.");if(!e.model)throw new jr("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const o of s)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const a=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(a===u)continue}throw new jr(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new F0(this.apiKey,i,r)}}let fp=null;try{fp=new HM("AIzaSyDFGlm4ixlJ34vg9XT_otqIeKgZT5bmBu8")}catch(t){console.warn("AI init failed",t)}function WM(){var Te,Dt;const[t,e]=Y.useState(null),[n,r]=Y.useState(null),[s,i]=Y.useState("dashboard"),[o,a]=Y.useState(!0),[u,c]=Y.useState(!1),h=XV(t||n),{members:f=[],tasks:m=[],logs:y=[],actionLogs:E=[],rules:b=[],manualScores:D=[],roles:I={},handleTaskToggle:w,handleUpdateTaskStatus:x,handleAddTask:V,handleEditTask:z,handleDeleteTask:L,handleAddMember:T,handleEditMember:v,handleDeleteMember:S,handleAddLog:A,handleResolveLog:C,handleDeleteLog:k,handleSaveRule:R,handleDeleteRule:nt,handleSaveManualScore:te,handleDeleteManualScore:J,handleSaveRole:K}=h||{};Y.useEffect(()=>{const Re=sP(_0,ge=>e(ge));return()=>Re()},[]);const j=async()=>{await iP(_0),r(null)},W=Re=>Xe.success(Re),X=Re=>(...ge)=>{if(Re)return Re(...ge,t||n)},de=(I==null?void 0:I[(Te=t||n)==null?void 0:Te.email])||"staff",me=async Re=>{if(!fp)return alert("AI Key missing");c(!0);try{const fe=await fp.getGenerativeModel({model:"gemini-pro"}).generateContent(`แก้ปัญหานี้ให้หน่อย: ${Re.topic} - ${Re.detail}`);alert(`🤖 AI Suggestion:
${fe.response.text()}`)}catch{alert("AI Error")}finally{c(!1)}};return!t&&!n?g.jsx(CO,{onLogin:Re=>r(Re)}):g.jsxs("div",{className:"flex h-screen bg-gray-100 font-sans text-gray-900 overflow-hidden",children:[g.jsx(yM,{position:"top-right"}),g.jsx("div",{className:`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 lg:static lg:translate-x-0 ${o?"translate-x-0":"-translate-x-full"}`,children:g.jsx(wO,{activeTab:s,setActiveTab:Re=>{i(Re),a(!1)},user:t||n,role:de,onLogout:j})}),g.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",children:[g.jsxs("div",{className:"lg:hidden bg-white p-4 shadow-sm flex items-center justify-between",children:[g.jsx("span",{className:"font-bold text-lg text-slate-800",children:"TransportOps"}),g.jsx("button",{onClick:()=>a(!o),className:"p-2 text-gray-600",children:g.jsx(fO,{})})]}),g.jsx("div",{className:"flex-1 overflow-auto p-4 lg:p-8",children:g.jsxs("div",{className:"max-w-7xl mx-auto",children:[s==="dashboard"&&g.jsx(EO,{members:f||[],tasks:m||[],logs:y||[]}),s==="team"&&g.jsx(IO,{members:f||[],onAdd:X(T),onEdit:X(v),onDelete:X(S),currentUserRole:de}),s==="dept"&&g.jsx(TO,{members:f||[],tasks:m||[],onTaskToggle:X(w)}),s==="scores"&&g.jsx(xO,{members:f||[],manualScores:D||[],rules:b||[],tasks:m||[],onAddScore:X(te),onDeleteScore:X(J),currentUserRole:de}),s==="problems"&&g.jsx(SO,{logs:y||[],onAddLog:X(A),onResolveLog:X(C),onDeleteLog:X(k),currentDate:new Date().toLocaleDateString("th-TH"),askAiSolution:me,showToast:W,userEmail:(Dt=t||n)==null?void 0:Dt.email,currentUserRole:de,aiLoading:u}),s==="assign"&&g.jsx(AO,{members:f||[],tasks:m||[],onAddTask:X(V),onEditTask:X(z),onDeleteTask:X(L),onUpdateStatus:X(x),currentUserRole:de}),s==="action_logs"&&g.jsx(RO,{logs:E||[]}),s==="rules"&&g.jsx(bO,{rules:b||[],onSave:X(R),onDelete:X(nt),currentUserRole:de,roles:I||{},onSaveRole:X(K)})]})})]}),o&&g.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",onClick:()=>a(!1)})]})}Uh.createRoot(document.getElementById("root")).render(g.jsx(CA.StrictMode,{children:g.jsx(WM,{})}));
