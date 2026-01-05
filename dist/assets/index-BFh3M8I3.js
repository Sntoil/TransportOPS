(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function gx(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Xy={exports:{}},ru={},Jy={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),yx=Symbol.for("react.portal"),vx=Symbol.for("react.fragment"),_x=Symbol.for("react.strict_mode"),wx=Symbol.for("react.profiler"),Ex=Symbol.for("react.provider"),xx=Symbol.for("react.context"),Tx=Symbol.for("react.forward_ref"),Ix=Symbol.for("react.suspense"),Sx=Symbol.for("react.memo"),Ax=Symbol.for("react.lazy"),om=Symbol.iterator;function Cx(t){return t===null||typeof t!="object"?null:(t=om&&t[om]||t["@@iterator"],typeof t=="function"?t:null)}var Zy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ev=Object.assign,tv={};function ai(t,e,n){this.props=t,this.context=e,this.refs=tv,this.updater=n||Zy}ai.prototype.isReactComponent={};ai.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ai.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function nv(){}nv.prototype=ai.prototype;function gh(t,e,n){this.props=t,this.context=e,this.refs=tv,this.updater=n||Zy}var yh=gh.prototype=new nv;yh.constructor=gh;ev(yh,ai.prototype);yh.isPureReactComponent=!0;var am=Array.isArray,rv=Object.prototype.hasOwnProperty,vh={current:null},sv={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var r,s={},i=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(i=""+e.key),e)rv.call(e,r)&&!sv.hasOwnProperty(r)&&(s[r]=e[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var u=Array(l),d=0;d<l;d++)u[d]=arguments[d+2];s.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Fo,type:t,key:i,ref:o,props:s,_owner:vh.current}}function kx(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _h(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function Rx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lm=/\/+/g;function cc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Rx(""+t.key):e.toString(36)}function Ga(t,e,n,r,s){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case yx:o=!0}}if(o)return o=t,s=s(o),t=r===""?"."+cc(o,0):r,am(s)?(n="",t!=null&&(n=t.replace(lm,"$&/")+"/"),Ga(s,e,n,"",function(d){return d})):s!=null&&(_h(s)&&(s=kx(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(lm,"$&/")+"/")+t)),e.push(s)),1;if(o=0,r=r===""?".":r+":",am(t))for(var l=0;l<t.length;l++){i=t[l];var u=r+cc(i,l);o+=Ga(i,e,n,u,s)}else if(u=Cx(t),typeof u=="function")for(t=u.call(t),l=0;!(i=t.next()).done;)i=i.value,u=r+cc(i,l++),o+=Ga(i,e,n,u,s);else if(i==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ta(t,e,n){if(t==null)return t;var r=[],s=0;return Ga(t,r,"","",function(i){return e.call(n,i,s++)}),r}function Nx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Et={current:null},Ka={transition:null},Px={ReactCurrentDispatcher:Et,ReactCurrentBatchConfig:Ka,ReactCurrentOwner:vh};function ov(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:Ta,forEach:function(t,e,n){Ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ta(t,function(){e++}),e},toArray:function(t){return Ta(t,function(e){return e})||[]},only:function(t){if(!_h(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};re.Component=ai;re.Fragment=vx;re.Profiler=wx;re.PureComponent=gh;re.StrictMode=_x;re.Suspense=Ix;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Px;re.act=ov;re.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=ev({},t.props),s=t.key,i=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(i=e.ref,o=vh.current),e.key!==void 0&&(s=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)rv.call(e,u)&&!sv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var d=0;d<u;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Fo,type:t.type,key:s,ref:i,props:r,_owner:o}};re.createContext=function(t){return t={$$typeof:xx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ex,_context:t},t.Consumer=t};re.createElement=iv;re.createFactory=function(t){var e=iv.bind(null,t);return e.type=t,e};re.createRef=function(){return{current:null}};re.forwardRef=function(t){return{$$typeof:Tx,render:t}};re.isValidElement=_h;re.lazy=function(t){return{$$typeof:Ax,_payload:{_status:-1,_result:t},_init:Nx}};re.memo=function(t,e){return{$$typeof:Sx,type:t,compare:e===void 0?null:e}};re.startTransition=function(t){var e=Ka.transition;Ka.transition={};try{t()}finally{Ka.transition=e}};re.unstable_act=ov;re.useCallback=function(t,e){return Et.current.useCallback(t,e)};re.useContext=function(t){return Et.current.useContext(t)};re.useDebugValue=function(){};re.useDeferredValue=function(t){return Et.current.useDeferredValue(t)};re.useEffect=function(t,e){return Et.current.useEffect(t,e)};re.useId=function(){return Et.current.useId()};re.useImperativeHandle=function(t,e,n){return Et.current.useImperativeHandle(t,e,n)};re.useInsertionEffect=function(t,e){return Et.current.useInsertionEffect(t,e)};re.useLayoutEffect=function(t,e){return Et.current.useLayoutEffect(t,e)};re.useMemo=function(t,e){return Et.current.useMemo(t,e)};re.useReducer=function(t,e,n){return Et.current.useReducer(t,e,n)};re.useRef=function(t){return Et.current.useRef(t)};re.useState=function(t){return Et.current.useState(t)};re.useSyncExternalStore=function(t,e,n){return Et.current.useSyncExternalStore(t,e,n)};re.useTransition=function(){return Et.current.useTransition()};re.version="18.3.1";Jy.exports=re;var W=Jy.exports;const bx=gx(W);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dx=W,Ox=Symbol.for("react.element"),Vx=Symbol.for("react.fragment"),Mx=Object.prototype.hasOwnProperty,Lx=Dx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jx={key:!0,ref:!0,__self:!0,__source:!0};function av(t,e,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Mx.call(e,r)&&!jx.hasOwnProperty(r)&&(s[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:Ox,type:t,key:i,ref:o,props:s,_owner:Lx.current}}ru.Fragment=Vx;ru.jsx=av;ru.jsxs=av;Xy.exports=ru;var h=Xy.exports,Kc={},lv={exports:{}},Lt={},uv={exports:{}},cv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,z){var Q=V.length;V.push(z);e:for(;0<Q;){var ue=Q-1>>>1,se=V[ue];if(0<s(se,z))V[ue]=z,V[Q]=se,Q=ue;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var z=V[0],Q=V.pop();if(Q!==z){V[0]=Q;e:for(var ue=0,se=V.length,me=se>>>1;ue<me;){var ye=2*(ue+1)-1,Pe=V[ye],ve=ye+1,ce=V[ve];if(0>s(Pe,Q))ve<se&&0>s(ce,Pe)?(V[ue]=ce,V[ve]=Q,ue=ve):(V[ue]=Pe,V[ye]=Q,ue=ye);else if(ve<se&&0>s(ce,Q))V[ue]=ce,V[ve]=Q,ue=ve;else break e}}return z}function s(V,z){var Q=V.sortIndex-z.sortIndex;return Q!==0?Q:V.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;t.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],d=[],p=1,m=null,g=3,_=!1,T=!1,N=!1,O=typeof setTimeout=="function"?setTimeout:null,C=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(V){for(var z=n(d);z!==null;){if(z.callback===null)r(d);else if(z.startTime<=V)r(d),z.sortIndex=z.expirationTime,e(u,z);else break;z=n(d)}}function D(V){if(N=!1,A(V),!T)if(n(u)!==null)T=!0,B($);else{var z=n(d);z!==null&&q(D,z.startTime-V)}}function $(V,z){T=!1,N&&(N=!1,C(v),v=-1),_=!0;var Q=g;try{for(A(z),m=n(u);m!==null&&(!(m.expirationTime>z)||V&&!k());){var ue=m.callback;if(typeof ue=="function"){m.callback=null,g=m.priorityLevel;var se=ue(m.expirationTime<=z);z=t.unstable_now(),typeof se=="function"?m.callback=se:m===n(u)&&r(u),A(z)}else r(u);m=n(u)}if(m!==null)var me=!0;else{var ye=n(d);ye!==null&&q(D,ye.startTime-z),me=!1}return me}finally{m=null,g=Q,_=!1}}var U=!1,x=null,v=-1,E=5,I=-1;function k(){return!(t.unstable_now()-I<E)}function R(){if(x!==null){var V=t.unstable_now();I=V;var z=!0;try{z=x(!0,V)}finally{z?S():(U=!1,x=null)}}else U=!1}var S;if(typeof w=="function")S=function(){w(R)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,J=Me.port2;Me.port1.onmessage=R,S=function(){J.postMessage(null)}}else S=function(){O(R,0)};function B(V){x=V,U||(U=!0,S())}function q(V,z){v=O(function(){V(t.unstable_now())},z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){T||_||(T=!0,B($))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):E=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return g},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(V){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var Q=g;g=z;try{return V()}finally{g=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,z){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var Q=g;g=V;try{return z()}finally{g=Q}},t.unstable_scheduleCallback=function(V,z,Q){var ue=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ue+Q:ue):Q=ue,V){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Q+se,V={id:p++,callback:z,priorityLevel:V,startTime:Q,expirationTime:se,sortIndex:-1},Q>ue?(V.sortIndex=Q,e(d,V),n(u)===null&&V===n(d)&&(N?(C(v),v=-1):N=!0,q(D,Q-ue))):(V.sortIndex=se,e(u,V),T||_||(T=!0,B($))),V},t.unstable_shouldYield=k,t.unstable_wrapCallback=function(V){var z=g;return function(){var Q=g;g=z;try{return V.apply(this,arguments)}finally{g=Q}}}})(cv);uv.exports=cv;var Fx=uv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=W,Mt=Fx;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var dv=new Set,lo={};function ls(t,e){Ws(t,e),Ws(t+"Capture",e)}function Ws(t,e){for(lo[t]=e,t=0;t<e.length;t++)dv.add(e[t])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,$x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,um={},cm={};function zx(t){return Qc.call(cm,t)?!0:Qc.call(um,t)?!1:$x.test(t)?cm[t]=!0:(um[t]=!0,!1)}function Bx(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hx(t,e,n,r){if(e===null||typeof e>"u"||Bx(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function xt(t,e,n,r,s,i,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=i,this.removeEmptyString=o}var nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){nt[t]=new xt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];nt[e]=new xt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){nt[t]=new xt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){nt[t]=new xt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){nt[t]=new xt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){nt[t]=new xt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){nt[t]=new xt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){nt[t]=new xt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){nt[t]=new xt(t,5,!1,t.toLowerCase(),null,!1,!1)});var wh=/[\-:]([a-z])/g;function Eh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wh,Eh);nt[e]=new xt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wh,Eh);nt[e]=new xt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wh,Eh);nt[e]=new xt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){nt[t]=new xt(t,1,!1,t.toLowerCase(),null,!1,!1)});nt.xlinkHref=new xt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){nt[t]=new xt(t,1,!1,t.toLowerCase(),null,!0,!0)});function xh(t,e,n,r){var s=nt.hasOwnProperty(e)?nt[e]:null;(s!==null?s.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hx(e,n,s,r)&&(n=null),r||s===null?zx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):s.mustUseProperty?t[s.propertyName]=n===null?s.type===3?!1:"":n:(e=s.attributeName,r=s.attributeNamespace,n===null?t.removeAttribute(e):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var jn=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ia=Symbol.for("react.element"),xs=Symbol.for("react.portal"),Ts=Symbol.for("react.fragment"),Th=Symbol.for("react.strict_mode"),Yc=Symbol.for("react.profiler"),hv=Symbol.for("react.provider"),fv=Symbol.for("react.context"),Ih=Symbol.for("react.forward_ref"),Xc=Symbol.for("react.suspense"),Jc=Symbol.for("react.suspense_list"),Sh=Symbol.for("react.memo"),Kn=Symbol.for("react.lazy"),pv=Symbol.for("react.offscreen"),dm=Symbol.iterator;function Ni(t){return t===null||typeof t!="object"?null:(t=dm&&t[dm]||t["@@iterator"],typeof t=="function"?t:null)}var Re=Object.assign,dc;function Fi(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var hc=!1;function fc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var u=`
`+s[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fi(t):""}function qx(t){switch(t.tag){case 5:return Fi(t.type);case 16:return Fi("Lazy");case 13:return Fi("Suspense");case 19:return Fi("SuspenseList");case 0:case 2:case 15:return t=fc(t.type,!1),t;case 11:return t=fc(t.type.render,!1),t;case 1:return t=fc(t.type,!0),t;default:return""}}function Zc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Ts:return"Fragment";case xs:return"Portal";case Yc:return"Profiler";case Th:return"StrictMode";case Xc:return"Suspense";case Jc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case fv:return(t.displayName||"Context")+".Consumer";case hv:return(t._context.displayName||"Context")+".Provider";case Ih:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Sh:return e=t.displayName||null,e!==null?e:Zc(t.type)||"Memo";case Kn:e=t._payload,t=t._init;try{return Zc(t(e))}catch{}}return null}function Wx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zc(e);case 8:return e===Th?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function wr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function mv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Gx(t){var e=mv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Sa(t){t._valueTracker||(t._valueTracker=Gx(t))}function gv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function ed(t,e){var n=e.checked;return Re({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=wr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function yv(t,e){e=e.checked,e!=null&&xh(t,"checked",e,!1)}function td(t,e){yv(t,e);var n=wr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?nd(t,e.type,n):e.hasOwnProperty("defaultValue")&&nd(t,e.type,wr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function fm(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function nd(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ui=Array.isArray;function Ms(t,e,n,r){if(t=t.options,e){e={};for(var s=0;s<n.length;s++)e["$"+n[s]]=!0;for(n=0;n<t.length;n++)s=e.hasOwnProperty("$"+t[n].value),t[n].selected!==s&&(t[n].selected=s),s&&r&&(t[n].defaultSelected=!0)}else{for(n=""+wr(n),e=null,s=0;s<t.length;s++){if(t[s].value===n){t[s].selected=!0,r&&(t[s].defaultSelected=!0);return}e!==null||t[s].disabled||(e=t[s])}e!==null&&(e.selected=!0)}}function rd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Re({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(Ui(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:wr(n)}}function vv(t,e){var n=wr(e.value),r=wr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function mm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function _v(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function sd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?_v(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Aa,wv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,s){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,s)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Aa=Aa||document.createElement("div"),Aa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Aa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Wi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kx=["Webkit","ms","Moz","O"];Object.keys(Wi).forEach(function(t){Kx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Wi[e]=Wi[t]})});function Ev(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Wi.hasOwnProperty(t)&&Wi[t]?(""+e).trim():e+"px"}function xv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=Ev(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,s):t[n]=s}}var Qx=Re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function id(t,e){if(e){if(Qx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function od(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ad=null;function Ah(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ld=null,Ls=null,js=null;function gm(t){if(t=zo(t)){if(typeof ld!="function")throw Error(F(280));var e=t.stateNode;e&&(e=lu(e),ld(t.stateNode,t.type,e))}}function Tv(t){Ls?js?js.push(t):js=[t]:Ls=t}function Iv(){if(Ls){var t=Ls,e=js;if(js=Ls=null,gm(t),e)for(t=0;t<e.length;t++)gm(e[t])}}function Sv(t,e){return t(e)}function Av(){}var pc=!1;function Cv(t,e,n){if(pc)return t(e,n);pc=!0;try{return Sv(t,e,n)}finally{pc=!1,(Ls!==null||js!==null)&&(Av(),Iv())}}function co(t,e){var n=t.stateNode;if(n===null)return null;var r=lu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var ud=!1;if(kn)try{var Pi={};Object.defineProperty(Pi,"passive",{get:function(){ud=!0}}),window.addEventListener("test",Pi,Pi),window.removeEventListener("test",Pi,Pi)}catch{ud=!1}function Yx(t,e,n,r,s,i,o,l,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(p){this.onError(p)}}var Gi=!1,vl=null,_l=!1,cd=null,Xx={onError:function(t){Gi=!0,vl=t}};function Jx(t,e,n,r,s,i,o,l,u){Gi=!1,vl=null,Yx.apply(Xx,arguments)}function Zx(t,e,n,r,s,i,o,l,u){if(Jx.apply(this,arguments),Gi){if(Gi){var d=vl;Gi=!1,vl=null}else throw Error(F(198));_l||(_l=!0,cd=d)}}function us(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function kv(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function ym(t){if(us(t)!==t)throw Error(F(188))}function eT(t){var e=t.alternate;if(!e){if(e=us(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return ym(s),t;if(i===r)return ym(s),e;i=i.sibling}throw Error(F(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function Rv(t){return t=eT(t),t!==null?Nv(t):null}function Nv(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Nv(t);if(e!==null)return e;t=t.sibling}return null}var Pv=Mt.unstable_scheduleCallback,vm=Mt.unstable_cancelCallback,tT=Mt.unstable_shouldYield,nT=Mt.unstable_requestPaint,Ve=Mt.unstable_now,rT=Mt.unstable_getCurrentPriorityLevel,Ch=Mt.unstable_ImmediatePriority,bv=Mt.unstable_UserBlockingPriority,wl=Mt.unstable_NormalPriority,sT=Mt.unstable_LowPriority,Dv=Mt.unstable_IdlePriority,su=null,ln=null;function iT(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(su,t,void 0,(t.current.flags&128)===128)}catch{}}var Xt=Math.clz32?Math.clz32:lT,oT=Math.log,aT=Math.LN2;function lT(t){return t>>>=0,t===0?32:31-(oT(t)/aT|0)|0}var Ca=64,ka=4194304;function $i(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,s=t.suspendedLanes,i=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=$i(l):(i&=o,i!==0&&(r=$i(i)))}else o=n&~s,o!==0?r=$i(o):i!==0&&(r=$i(i));if(r===0)return 0;if(e!==0&&e!==r&&!(e&s)&&(s=r&-r,i=e&-e,s>=i||s===16&&(i&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Xt(e),s=1<<n,r|=t[n],e&=~s;return r}function uT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,s=t.expirationTimes,i=t.pendingLanes;0<i;){var o=31-Xt(i),l=1<<o,u=s[o];u===-1?(!(l&n)||l&r)&&(s[o]=uT(l,e)):u<=e&&(t.expiredLanes|=l),i&=~l}}function dd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ov(){var t=Ca;return Ca<<=1,!(Ca&4194240)&&(Ca=64),t}function mc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Uo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Xt(e),t[e]=n}function dT(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var s=31-Xt(n),i=1<<s;e[s]=0,r[s]=-1,t[s]=-1,n&=~i}}function kh(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Xt(n),s=1<<r;s&e|t[r]&e&&(t[r]|=e),n&=~s}}var fe=0;function Vv(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Mv,Rh,Lv,jv,Fv,hd=!1,Ra=[],lr=null,ur=null,cr=null,ho=new Map,fo=new Map,Xn=[],hT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function _m(t,e){switch(t){case"focusin":case"focusout":lr=null;break;case"dragenter":case"dragleave":ur=null;break;case"mouseover":case"mouseout":cr=null;break;case"pointerover":case"pointerout":ho.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fo.delete(e.pointerId)}}function bi(t,e,n,r,s,i){return t===null||t.nativeEvent!==i?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},e!==null&&(e=zo(e),e!==null&&Rh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,s!==null&&e.indexOf(s)===-1&&e.push(s),t)}function fT(t,e,n,r,s){switch(e){case"focusin":return lr=bi(lr,t,e,n,r,s),!0;case"dragenter":return ur=bi(ur,t,e,n,r,s),!0;case"mouseover":return cr=bi(cr,t,e,n,r,s),!0;case"pointerover":var i=s.pointerId;return ho.set(i,bi(ho.get(i)||null,t,e,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,fo.set(i,bi(fo.get(i)||null,t,e,n,r,s)),!0}return!1}function Uv(t){var e=Ur(t.target);if(e!==null){var n=us(e);if(n!==null){if(e=n.tag,e===13){if(e=kv(n),e!==null){t.blockedOn=e,Fv(t.priority,function(){Lv(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Qa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=fd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);ad=r,n.target.dispatchEvent(r),ad=null}else return e=zo(n),e!==null&&Rh(e),t.blockedOn=n,!1;e.shift()}return!0}function wm(t,e,n){Qa(t)&&n.delete(e)}function pT(){hd=!1,lr!==null&&Qa(lr)&&(lr=null),ur!==null&&Qa(ur)&&(ur=null),cr!==null&&Qa(cr)&&(cr=null),ho.forEach(wm),fo.forEach(wm)}function Di(t,e){t.blockedOn===e&&(t.blockedOn=null,hd||(hd=!0,Mt.unstable_scheduleCallback(Mt.unstable_NormalPriority,pT)))}function po(t){function e(s){return Di(s,t)}if(0<Ra.length){Di(Ra[0],t);for(var n=1;n<Ra.length;n++){var r=Ra[n];r.blockedOn===t&&(r.blockedOn=null)}}for(lr!==null&&Di(lr,t),ur!==null&&Di(ur,t),cr!==null&&Di(cr,t),ho.forEach(e),fo.forEach(e),n=0;n<Xn.length;n++)r=Xn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Xn.length&&(n=Xn[0],n.blockedOn===null);)Uv(n),n.blockedOn===null&&Xn.shift()}var Fs=jn.ReactCurrentBatchConfig,xl=!0;function mT(t,e,n,r){var s=fe,i=Fs.transition;Fs.transition=null;try{fe=1,Nh(t,e,n,r)}finally{fe=s,Fs.transition=i}}function gT(t,e,n,r){var s=fe,i=Fs.transition;Fs.transition=null;try{fe=4,Nh(t,e,n,r)}finally{fe=s,Fs.transition=i}}function Nh(t,e,n,r){if(xl){var s=fd(t,e,n,r);if(s===null)Sc(t,e,r,Tl,n),_m(t,r);else if(fT(s,t,e,n,r))r.stopPropagation();else if(_m(t,r),e&4&&-1<hT.indexOf(t)){for(;s!==null;){var i=zo(s);if(i!==null&&Mv(i),i=fd(t,e,n,r),i===null&&Sc(t,e,r,Tl,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Sc(t,e,r,null,n)}}var Tl=null;function fd(t,e,n,r){if(Tl=null,t=Ah(r),t=Ur(t),t!==null)if(e=us(t),e===null)t=null;else if(n=e.tag,n===13){if(t=kv(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function $v(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rT()){case Ch:return 1;case bv:return 4;case wl:case sT:return 16;case Dv:return 536870912;default:return 16}default:return 16}}var sr=null,Ph=null,Ya=null;function zv(){if(Ya)return Ya;var t,e=Ph,n=e.length,r,s="value"in sr?sr.value:sr.textContent,i=s.length;for(t=0;t<n&&e[t]===s[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===s[i-r];r++);return Ya=s.slice(t,1<r?1-r:void 0)}function Xa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Na(){return!0}function Em(){return!1}function jt(t){function e(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Na:Em,this.isPropagationStopped=Em,this}return Re(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Na)},persist:function(){},isPersistent:Na}),e}var li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bh=jt(li),$o=Re({},li,{view:0,detail:0}),yT=jt($o),gc,yc,Oi,iu=Re({},$o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Oi&&(Oi&&t.type==="mousemove"?(gc=t.screenX-Oi.screenX,yc=t.screenY-Oi.screenY):yc=gc=0,Oi=t),gc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),xm=jt(iu),vT=Re({},iu,{dataTransfer:0}),_T=jt(vT),wT=Re({},$o,{relatedTarget:0}),vc=jt(wT),ET=Re({},li,{animationName:0,elapsedTime:0,pseudoElement:0}),xT=jt(ET),TT=Re({},li,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),IT=jt(TT),ST=Re({},li,{data:0}),Tm=jt(ST),AT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},CT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},kT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function RT(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=kT[t])?!!e[t]:!1}function Dh(){return RT}var NT=Re({},$o,{key:function(t){if(t.key){var e=AT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?CT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dh,charCode:function(t){return t.type==="keypress"?Xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),PT=jt(NT),bT=Re({},iu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Im=jt(bT),DT=Re({},$o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dh}),OT=jt(DT),VT=Re({},li,{propertyName:0,elapsedTime:0,pseudoElement:0}),MT=jt(VT),LT=Re({},iu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jT=jt(LT),FT=[9,13,27,32],Oh=kn&&"CompositionEvent"in window,Ki=null;kn&&"documentMode"in document&&(Ki=document.documentMode);var UT=kn&&"TextEvent"in window&&!Ki,Bv=kn&&(!Oh||Ki&&8<Ki&&11>=Ki),Sm=" ",Am=!1;function Hv(t,e){switch(t){case"keyup":return FT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Is=!1;function $T(t,e){switch(t){case"compositionend":return qv(e);case"keypress":return e.which!==32?null:(Am=!0,Sm);case"textInput":return t=e.data,t===Sm&&Am?null:t;default:return null}}function zT(t,e){if(Is)return t==="compositionend"||!Oh&&Hv(t,e)?(t=zv(),Ya=Ph=sr=null,Is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bv&&e.locale!=="ko"?null:e.data;default:return null}}var BT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cm(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!BT[t.type]:e==="textarea"}function Wv(t,e,n,r){Tv(r),e=Il(e,"onChange"),0<e.length&&(n=new bh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Qi=null,mo=null;function HT(t){r_(t,0)}function ou(t){var e=Cs(t);if(gv(e))return t}function qT(t,e){if(t==="change")return e}var Gv=!1;if(kn){var _c;if(kn){var wc="oninput"in document;if(!wc){var km=document.createElement("div");km.setAttribute("oninput","return;"),wc=typeof km.oninput=="function"}_c=wc}else _c=!1;Gv=_c&&(!document.documentMode||9<document.documentMode)}function Rm(){Qi&&(Qi.detachEvent("onpropertychange",Kv),mo=Qi=null)}function Kv(t){if(t.propertyName==="value"&&ou(mo)){var e=[];Wv(e,mo,t,Ah(t)),Cv(HT,e)}}function WT(t,e,n){t==="focusin"?(Rm(),Qi=e,mo=n,Qi.attachEvent("onpropertychange",Kv)):t==="focusout"&&Rm()}function GT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ou(mo)}function KT(t,e){if(t==="click")return ou(e)}function QT(t,e){if(t==="input"||t==="change")return ou(e)}function YT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var en=typeof Object.is=="function"?Object.is:YT;function go(t,e){if(en(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!Qc.call(e,s)||!en(t[s],e[s]))return!1}return!0}function Nm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Pm(t,e){var n=Nm(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nm(n)}}function Qv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Qv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Yv(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Vh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XT(t){var e=Yv(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Qv(n.ownerDocument.documentElement,n)){if(r!==null&&Vh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!t.extend&&i>r&&(s=r,r=i,i=s),s=Pm(n,i);var o=Pm(n,r);s&&o&&(t.rangeCount!==1||t.anchorNode!==s.node||t.anchorOffset!==s.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(s.node,s.offset),t.removeAllRanges(),i>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JT=kn&&"documentMode"in document&&11>=document.documentMode,Ss=null,pd=null,Yi=null,md=!1;function bm(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;md||Ss==null||Ss!==yl(r)||(r=Ss,"selectionStart"in r&&Vh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yi&&go(Yi,r)||(Yi=r,r=Il(pd,"onSelect"),0<r.length&&(e=new bh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ss)))}function Pa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var As={animationend:Pa("Animation","AnimationEnd"),animationiteration:Pa("Animation","AnimationIteration"),animationstart:Pa("Animation","AnimationStart"),transitionend:Pa("Transition","TransitionEnd")},Ec={},Xv={};kn&&(Xv=document.createElement("div").style,"AnimationEvent"in window||(delete As.animationend.animation,delete As.animationiteration.animation,delete As.animationstart.animation),"TransitionEvent"in window||delete As.transitionend.transition);function au(t){if(Ec[t])return Ec[t];if(!As[t])return t;var e=As[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Xv)return Ec[t]=e[n];return t}var Jv=au("animationend"),Zv=au("animationiteration"),e_=au("animationstart"),t_=au("transitionend"),n_=new Map,Dm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(t,e){n_.set(t,e),ls(e,[t])}for(var xc=0;xc<Dm.length;xc++){var Tc=Dm[xc],ZT=Tc.toLowerCase(),eI=Tc[0].toUpperCase()+Tc.slice(1);Ar(ZT,"on"+eI)}Ar(Jv,"onAnimationEnd");Ar(Zv,"onAnimationIteration");Ar(e_,"onAnimationStart");Ar("dblclick","onDoubleClick");Ar("focusin","onFocus");Ar("focusout","onBlur");Ar(t_,"onTransitionEnd");Ws("onMouseEnter",["mouseout","mouseover"]);Ws("onMouseLeave",["mouseout","mouseover"]);Ws("onPointerEnter",["pointerout","pointerover"]);Ws("onPointerLeave",["pointerout","pointerover"]);ls("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ls("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ls("onBeforeInput",["compositionend","keypress","textInput","paste"]);ls("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ls("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tI=new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));function Om(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Zx(r,e,void 0,t),t.currentTarget=null}function r_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],s=r.event;r=r.listeners;e:{var i=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,d=l.currentTarget;if(l=l.listener,u!==i&&s.isPropagationStopped())break e;Om(s,l,d),i=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,d=l.currentTarget,l=l.listener,u!==i&&s.isPropagationStopped())break e;Om(s,l,d),i=u}}}if(_l)throw t=cd,_l=!1,cd=null,t}function Te(t,e){var n=e[wd];n===void 0&&(n=e[wd]=new Set);var r=t+"__bubble";n.has(r)||(s_(e,t,2,!1),n.add(r))}function Ic(t,e,n){var r=0;e&&(r|=4),s_(n,t,r,e)}var ba="_reactListening"+Math.random().toString(36).slice(2);function yo(t){if(!t[ba]){t[ba]=!0,dv.forEach(function(n){n!=="selectionchange"&&(tI.has(n)||Ic(n,!1,t),Ic(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ba]||(e[ba]=!0,Ic("selectionchange",!1,e))}}function s_(t,e,n,r){switch($v(e)){case 1:var s=mT;break;case 4:s=gT;break;default:s=Nh}n=s.bind(null,e,n,t),s=void 0,!ud||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(s=!0),r?s!==void 0?t.addEventListener(e,n,{capture:!0,passive:s}):t.addEventListener(e,n,!0):s!==void 0?t.addEventListener(e,n,{passive:s}):t.addEventListener(e,n,!1)}function Sc(t,e,n,r,s){var i=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===s||u.nodeType===8&&u.parentNode===s))return;o=o.return}for(;l!==null;){if(o=Ur(l),o===null)return;if(u=o.tag,u===5||u===6){r=i=o;continue e}l=l.parentNode}}r=r.return}Cv(function(){var d=i,p=Ah(n),m=[];e:{var g=n_.get(t);if(g!==void 0){var _=bh,T=t;switch(t){case"keypress":if(Xa(n)===0)break e;case"keydown":case"keyup":_=PT;break;case"focusin":T="focus",_=vc;break;case"focusout":T="blur",_=vc;break;case"beforeblur":case"afterblur":_=vc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":_=xm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":_=_T;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":_=OT;break;case Jv:case Zv:case e_:_=xT;break;case t_:_=MT;break;case"scroll":_=yT;break;case"wheel":_=jT;break;case"copy":case"cut":case"paste":_=IT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":_=Im}var N=(e&4)!==0,O=!N&&t==="scroll",C=N?g!==null?g+"Capture":null:g;N=[];for(var w=d,A;w!==null;){A=w;var D=A.stateNode;if(A.tag===5&&D!==null&&(A=D,C!==null&&(D=co(w,C),D!=null&&N.push(vo(w,D,A)))),O)break;w=w.return}0<N.length&&(g=new _(g,T,null,n,p),m.push({event:g,listeners:N}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",_=t==="mouseout"||t==="pointerout",g&&n!==ad&&(T=n.relatedTarget||n.fromElement)&&(Ur(T)||T[Rn]))break e;if((_||g)&&(g=p.window===p?p:(g=p.ownerDocument)?g.defaultView||g.parentWindow:window,_?(T=n.relatedTarget||n.toElement,_=d,T=T?Ur(T):null,T!==null&&(O=us(T),T!==O||T.tag!==5&&T.tag!==6)&&(T=null)):(_=null,T=d),_!==T)){if(N=xm,D="onMouseLeave",C="onMouseEnter",w="mouse",(t==="pointerout"||t==="pointerover")&&(N=Im,D="onPointerLeave",C="onPointerEnter",w="pointer"),O=_==null?g:Cs(_),A=T==null?g:Cs(T),g=new N(D,w+"leave",_,n,p),g.target=O,g.relatedTarget=A,D=null,Ur(p)===d&&(N=new N(C,w+"enter",T,n,p),N.target=A,N.relatedTarget=O,D=N),O=D,_&&T)t:{for(N=_,C=T,w=0,A=N;A;A=gs(A))w++;for(A=0,D=C;D;D=gs(D))A++;for(;0<w-A;)N=gs(N),w--;for(;0<A-w;)C=gs(C),A--;for(;w--;){if(N===C||C!==null&&N===C.alternate)break t;N=gs(N),C=gs(C)}N=null}else N=null;_!==null&&Vm(m,g,_,N,!1),T!==null&&O!==null&&Vm(m,O,T,N,!0)}}e:{if(g=d?Cs(d):window,_=g.nodeName&&g.nodeName.toLowerCase(),_==="select"||_==="input"&&g.type==="file")var $=qT;else if(Cm(g))if(Gv)$=QT;else{$=GT;var U=WT}else(_=g.nodeName)&&_.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&($=KT);if($&&($=$(t,d))){Wv(m,$,n,p);break e}U&&U(t,g,d),t==="focusout"&&(U=g._wrapperState)&&U.controlled&&g.type==="number"&&nd(g,"number",g.value)}switch(U=d?Cs(d):window,t){case"focusin":(Cm(U)||U.contentEditable==="true")&&(Ss=U,pd=d,Yi=null);break;case"focusout":Yi=pd=Ss=null;break;case"mousedown":md=!0;break;case"contextmenu":case"mouseup":case"dragend":md=!1,bm(m,n,p);break;case"selectionchange":if(JT)break;case"keydown":case"keyup":bm(m,n,p)}var x;if(Oh)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else Is?Hv(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(Bv&&n.locale!=="ko"&&(Is||v!=="onCompositionStart"?v==="onCompositionEnd"&&Is&&(x=zv()):(sr=p,Ph="value"in sr?sr.value:sr.textContent,Is=!0)),U=Il(d,v),0<U.length&&(v=new Tm(v,t,null,n,p),m.push({event:v,listeners:U}),x?v.data=x:(x=qv(n),x!==null&&(v.data=x)))),(x=UT?$T(t,n):zT(t,n))&&(d=Il(d,"onBeforeInput"),0<d.length&&(p=new Tm("onBeforeInput","beforeinput",null,n,p),m.push({event:p,listeners:d}),p.data=x))}r_(m,e)})}function vo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var s=t,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=co(t,n),i!=null&&r.unshift(vo(t,i,s)),i=co(t,e),i!=null&&r.push(vo(t,i,s))),t=t.return}return r}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Vm(t,e,n,r,s){for(var i=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,d=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&d!==null&&(l=d,s?(u=co(n,i),u!=null&&o.unshift(vo(n,u,l))):s||(u=co(n,i),u!=null&&o.push(vo(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nI=/\r\n?/g,rI=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(nI,`
`).replace(rI,"")}function Da(t,e,n){if(e=Mm(e),Mm(t)!==e&&n)throw Error(F(425))}function Sl(){}var gd=null,yd=null;function vd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var _d=typeof setTimeout=="function"?setTimeout:void 0,sI=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,iI=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(t){return Lm.resolve(null).then(t).catch(oI)}:_d;function oI(t){setTimeout(function(){throw t})}function Ac(t,e){var n=e,r=0;do{var s=n.nextSibling;if(t.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){t.removeChild(s),po(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);po(e)}function dr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function jm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ui=Math.random().toString(36).slice(2),on="__reactFiber$"+ui,_o="__reactProps$"+ui,Rn="__reactContainer$"+ui,wd="__reactEvents$"+ui,aI="__reactListeners$"+ui,lI="__reactHandles$"+ui;function Ur(t){var e=t[on];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Rn]||n[on]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=jm(t);t!==null;){if(n=t[on])return n;t=jm(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[on]||t[Rn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function lu(t){return t[_o]||null}var Ed=[],ks=-1;function Cr(t){return{current:t}}function Se(t){0>ks||(t.current=Ed[ks],Ed[ks]=null,ks--)}function we(t,e){ks++,Ed[ks]=t.current,t.current=e}var Er={},pt=Cr(Er),kt=Cr(!1),Qr=Er;function Gs(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=e[i];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=s),s}function Rt(t){return t=t.childContextTypes,t!=null}function Al(){Se(kt),Se(pt)}function Fm(t,e,n){if(pt.current!==Er)throw Error(F(168));we(pt,e),we(kt,n)}function i_(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in e))throw Error(F(108,Wx(t)||"Unknown",s));return Re({},n,r)}function Cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,Qr=pt.current,we(pt,t),we(kt,kt.current),!0}function Um(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=i_(t,e,Qr),r.__reactInternalMemoizedMergedChildContext=t,Se(kt),Se(pt),we(pt,t)):Se(kt),we(kt,n)}var wn=null,uu=!1,Cc=!1;function o_(t){wn===null?wn=[t]:wn.push(t)}function uI(t){uu=!0,o_(t)}function kr(){if(!Cc&&wn!==null){Cc=!0;var t=0,e=fe;try{var n=wn;for(fe=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}wn=null,uu=!1}catch(s){throw wn!==null&&(wn=wn.slice(t+1)),Pv(Ch,kr),s}finally{fe=e,Cc=!1}}return null}var Rs=[],Ns=0,kl=null,Rl=0,Ft=[],Ut=0,Yr=null,En=1,xn="";function Mr(t,e){Rs[Ns++]=Rl,Rs[Ns++]=kl,kl=t,Rl=e}function a_(t,e,n){Ft[Ut++]=En,Ft[Ut++]=xn,Ft[Ut++]=Yr,Yr=t;var r=En;t=xn;var s=32-Xt(r)-1;r&=~(1<<s),n+=1;var i=32-Xt(e)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,En=1<<32-Xt(e)+s|n<<s|r,xn=i+t}else En=1<<i|n<<s|r,xn=t}function Mh(t){t.return!==null&&(Mr(t,1),a_(t,1,0))}function Lh(t){for(;t===kl;)kl=Rs[--Ns],Rs[Ns]=null,Rl=Rs[--Ns],Rs[Ns]=null;for(;t===Yr;)Yr=Ft[--Ut],Ft[Ut]=null,xn=Ft[--Ut],Ft[Ut]=null,En=Ft[--Ut],Ft[Ut]=null}var Vt=null,Dt=null,Ae=!1,Yt=null;function l_(t,e){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function $m(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Vt=t,Dt=dr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Vt=t,Dt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yr!==null?{id:En,overflow:xn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Vt=t,Dt=null,!0):!1;default:return!1}}function xd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Td(t){if(Ae){var e=Dt;if(e){var n=e;if(!$m(t,e)){if(xd(t))throw Error(F(418));e=dr(n.nextSibling);var r=Vt;e&&$m(t,e)?l_(r,n):(t.flags=t.flags&-4097|2,Ae=!1,Vt=t)}}else{if(xd(t))throw Error(F(418));t.flags=t.flags&-4097|2,Ae=!1,Vt=t}}}function zm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vt=t}function Oa(t){if(t!==Vt)return!1;if(!Ae)return zm(t),Ae=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!vd(t.type,t.memoizedProps)),e&&(e=Dt)){if(xd(t))throw u_(),Error(F(418));for(;e;)l_(t,e),e=dr(e.nextSibling)}if(zm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Dt=dr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Dt=null}}else Dt=Vt?dr(t.stateNode.nextSibling):null;return!0}function u_(){for(var t=Dt;t;)t=dr(t.nextSibling)}function Ks(){Dt=Vt=null,Ae=!1}function jh(t){Yt===null?Yt=[t]:Yt.push(t)}var cI=jn.ReactCurrentBatchConfig;function Vi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var s=r,i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},e._stringRef=i,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Va(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bm(t){var e=t._init;return e(t._payload)}function c_(t){function e(C,w){if(t){var A=C.deletions;A===null?(C.deletions=[w],C.flags|=16):A.push(w)}}function n(C,w){if(!t)return null;for(;w!==null;)e(C,w),w=w.sibling;return null}function r(C,w){for(C=new Map;w!==null;)w.key!==null?C.set(w.key,w):C.set(w.index,w),w=w.sibling;return C}function s(C,w){return C=mr(C,w),C.index=0,C.sibling=null,C}function i(C,w,A){return C.index=A,t?(A=C.alternate,A!==null?(A=A.index,A<w?(C.flags|=2,w):A):(C.flags|=2,w)):(C.flags|=1048576,w)}function o(C){return t&&C.alternate===null&&(C.flags|=2),C}function l(C,w,A,D){return w===null||w.tag!==6?(w=Oc(A,C.mode,D),w.return=C,w):(w=s(w,A),w.return=C,w)}function u(C,w,A,D){var $=A.type;return $===Ts?p(C,w,A.props.children,D,A.key):w!==null&&(w.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Kn&&Bm($)===w.type)?(D=s(w,A.props),D.ref=Vi(C,w,A),D.return=C,D):(D=sl(A.type,A.key,A.props,null,C.mode,D),D.ref=Vi(C,w,A),D.return=C,D)}function d(C,w,A,D){return w===null||w.tag!==4||w.stateNode.containerInfo!==A.containerInfo||w.stateNode.implementation!==A.implementation?(w=Vc(A,C.mode,D),w.return=C,w):(w=s(w,A.children||[]),w.return=C,w)}function p(C,w,A,D,$){return w===null||w.tag!==7?(w=qr(A,C.mode,D,$),w.return=C,w):(w=s(w,A),w.return=C,w)}function m(C,w,A){if(typeof w=="string"&&w!==""||typeof w=="number")return w=Oc(""+w,C.mode,A),w.return=C,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case Ia:return A=sl(w.type,w.key,w.props,null,C.mode,A),A.ref=Vi(C,null,w),A.return=C,A;case xs:return w=Vc(w,C.mode,A),w.return=C,w;case Kn:var D=w._init;return m(C,D(w._payload),A)}if(Ui(w)||Ni(w))return w=qr(w,C.mode,A,null),w.return=C,w;Va(C,w)}return null}function g(C,w,A,D){var $=w!==null?w.key:null;if(typeof A=="string"&&A!==""||typeof A=="number")return $!==null?null:l(C,w,""+A,D);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ia:return A.key===$?u(C,w,A,D):null;case xs:return A.key===$?d(C,w,A,D):null;case Kn:return $=A._init,g(C,w,$(A._payload),D)}if(Ui(A)||Ni(A))return $!==null?null:p(C,w,A,D,null);Va(C,A)}return null}function _(C,w,A,D,$){if(typeof D=="string"&&D!==""||typeof D=="number")return C=C.get(A)||null,l(w,C,""+D,$);if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Ia:return C=C.get(D.key===null?A:D.key)||null,u(w,C,D,$);case xs:return C=C.get(D.key===null?A:D.key)||null,d(w,C,D,$);case Kn:var U=D._init;return _(C,w,A,U(D._payload),$)}if(Ui(D)||Ni(D))return C=C.get(A)||null,p(w,C,D,$,null);Va(w,D)}return null}function T(C,w,A,D){for(var $=null,U=null,x=w,v=w=0,E=null;x!==null&&v<A.length;v++){x.index>v?(E=x,x=null):E=x.sibling;var I=g(C,x,A[v],D);if(I===null){x===null&&(x=E);break}t&&x&&I.alternate===null&&e(C,x),w=i(I,w,v),U===null?$=I:U.sibling=I,U=I,x=E}if(v===A.length)return n(C,x),Ae&&Mr(C,v),$;if(x===null){for(;v<A.length;v++)x=m(C,A[v],D),x!==null&&(w=i(x,w,v),U===null?$=x:U.sibling=x,U=x);return Ae&&Mr(C,v),$}for(x=r(C,x);v<A.length;v++)E=_(x,C,v,A[v],D),E!==null&&(t&&E.alternate!==null&&x.delete(E.key===null?v:E.key),w=i(E,w,v),U===null?$=E:U.sibling=E,U=E);return t&&x.forEach(function(k){return e(C,k)}),Ae&&Mr(C,v),$}function N(C,w,A,D){var $=Ni(A);if(typeof $!="function")throw Error(F(150));if(A=$.call(A),A==null)throw Error(F(151));for(var U=$=null,x=w,v=w=0,E=null,I=A.next();x!==null&&!I.done;v++,I=A.next()){x.index>v?(E=x,x=null):E=x.sibling;var k=g(C,x,I.value,D);if(k===null){x===null&&(x=E);break}t&&x&&k.alternate===null&&e(C,x),w=i(k,w,v),U===null?$=k:U.sibling=k,U=k,x=E}if(I.done)return n(C,x),Ae&&Mr(C,v),$;if(x===null){for(;!I.done;v++,I=A.next())I=m(C,I.value,D),I!==null&&(w=i(I,w,v),U===null?$=I:U.sibling=I,U=I);return Ae&&Mr(C,v),$}for(x=r(C,x);!I.done;v++,I=A.next())I=_(x,C,v,I.value,D),I!==null&&(t&&I.alternate!==null&&x.delete(I.key===null?v:I.key),w=i(I,w,v),U===null?$=I:U.sibling=I,U=I);return t&&x.forEach(function(R){return e(C,R)}),Ae&&Mr(C,v),$}function O(C,w,A,D){if(typeof A=="object"&&A!==null&&A.type===Ts&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Ia:e:{for(var $=A.key,U=w;U!==null;){if(U.key===$){if($=A.type,$===Ts){if(U.tag===7){n(C,U.sibling),w=s(U,A.props.children),w.return=C,C=w;break e}}else if(U.elementType===$||typeof $=="object"&&$!==null&&$.$$typeof===Kn&&Bm($)===U.type){n(C,U.sibling),w=s(U,A.props),w.ref=Vi(C,U,A),w.return=C,C=w;break e}n(C,U);break}else e(C,U);U=U.sibling}A.type===Ts?(w=qr(A.props.children,C.mode,D,A.key),w.return=C,C=w):(D=sl(A.type,A.key,A.props,null,C.mode,D),D.ref=Vi(C,w,A),D.return=C,C=D)}return o(C);case xs:e:{for(U=A.key;w!==null;){if(w.key===U)if(w.tag===4&&w.stateNode.containerInfo===A.containerInfo&&w.stateNode.implementation===A.implementation){n(C,w.sibling),w=s(w,A.children||[]),w.return=C,C=w;break e}else{n(C,w);break}else e(C,w);w=w.sibling}w=Vc(A,C.mode,D),w.return=C,C=w}return o(C);case Kn:return U=A._init,O(C,w,U(A._payload),D)}if(Ui(A))return T(C,w,A,D);if(Ni(A))return N(C,w,A,D);Va(C,A)}return typeof A=="string"&&A!==""||typeof A=="number"?(A=""+A,w!==null&&w.tag===6?(n(C,w.sibling),w=s(w,A),w.return=C,C=w):(n(C,w),w=Oc(A,C.mode,D),w.return=C,C=w),o(C)):n(C,w)}return O}var Qs=c_(!0),d_=c_(!1),Nl=Cr(null),Pl=null,Ps=null,Fh=null;function Uh(){Fh=Ps=Pl=null}function $h(t){var e=Nl.current;Se(Nl),t._currentValue=e}function Id(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Us(t,e){Pl=t,Fh=Ps=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Ct=!0),t.firstContext=null)}function Ht(t){var e=t._currentValue;if(Fh!==t)if(t={context:t,memoizedValue:e,next:null},Ps===null){if(Pl===null)throw Error(F(308));Ps=t,Pl.dependencies={lanes:0,firstContext:t}}else Ps=Ps.next=t;return e}var $r=null;function zh(t){$r===null?$r=[t]:$r.push(t)}function h_(t,e,n,r){var s=e.interleaved;return s===null?(n.next=n,zh(e)):(n.next=s.next,s.next=n),e.interleaved=n,Nn(t,r)}function Nn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Qn=!1;function Bh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function f_(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function An(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,le&2){var s=r.pending;return s===null?e.next=e:(e.next=s.next,s.next=e),r.pending=e,Nn(t,n)}return s=r.interleaved,s===null?(e.next=e,zh(r)):(e.next=s.next,s.next=e),r.interleaved=e,Nn(t,n)}function Ja(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kh(t,n)}}function Hm(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=e:i=i.next=e}else s=i=e;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function bl(t,e,n,r){var s=t.updateQueue;Qn=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var u=l,d=u.next;u.next=null,o===null?i=d:o.next=d,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=d:l.next=d,p.lastBaseUpdate=u))}if(i!==null){var m=s.baseState;o=0,p=d=u=null,l=i;do{var g=l.lane,_=l.eventTime;if((r&g)===g){p!==null&&(p=p.next={eventTime:_,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var T=t,N=l;switch(g=e,_=n,N.tag){case 1:if(T=N.payload,typeof T=="function"){m=T.call(_,m,g);break e}m=T;break e;case 3:T.flags=T.flags&-65537|128;case 0:if(T=N.payload,g=typeof T=="function"?T.call(_,m,g):T,g==null)break e;m=Re({},m,g);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,g=s.effects,g===null?s.effects=[l]:g.push(l))}else _={eventTime:_,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(d=p=_,u=m):p=p.next=_,o|=g;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;g=l,l=g.next,g.next=null,s.lastBaseUpdate=g,s.shared.pending=null}}while(!0);if(p===null&&(u=m),s.baseState=u,s.firstBaseUpdate=d,s.lastBaseUpdate=p,e=s.shared.interleaved,e!==null){s=e;do o|=s.lane,s=s.next;while(s!==e)}else i===null&&(s.shared.lanes=0);Jr|=o,t.lanes=o,t.memoizedState=m}}function qm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(F(191,s));s.call(r)}}}var Bo={},un=Cr(Bo),wo=Cr(Bo),Eo=Cr(Bo);function zr(t){if(t===Bo)throw Error(F(174));return t}function Hh(t,e){switch(we(Eo,e),we(wo,t),we(un,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:sd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=sd(e,t)}Se(un),we(un,e)}function Ys(){Se(un),Se(wo),Se(Eo)}function p_(t){zr(Eo.current);var e=zr(un.current),n=sd(e,t.type);e!==n&&(we(wo,t),we(un,n))}function qh(t){wo.current===t&&(Se(un),Se(wo))}var Ce=Cr(0);function Dl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var kc=[];function Wh(){for(var t=0;t<kc.length;t++)kc[t]._workInProgressVersionPrimary=null;kc.length=0}var Za=jn.ReactCurrentDispatcher,Rc=jn.ReactCurrentBatchConfig,Xr=0,ke=null,$e=null,qe=null,Ol=!1,Xi=!1,xo=0,dI=0;function ot(){throw Error(F(321))}function Gh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!en(t[n],e[n]))return!1;return!0}function Kh(t,e,n,r,s,i){if(Xr=i,ke=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Za.current=t===null||t.memoizedState===null?mI:gI,t=n(r,s),Xi){i=0;do{if(Xi=!1,xo=0,25<=i)throw Error(F(301));i+=1,qe=$e=null,e.updateQueue=null,Za.current=yI,t=n(r,s)}while(Xi)}if(Za.current=Vl,e=$e!==null&&$e.next!==null,Xr=0,qe=$e=ke=null,Ol=!1,e)throw Error(F(300));return t}function Qh(){var t=xo!==0;return xo=0,t}function sn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return qe===null?ke.memoizedState=qe=t:qe=qe.next=t,qe}function qt(){if($e===null){var t=ke.alternate;t=t!==null?t.memoizedState:null}else t=$e.next;var e=qe===null?ke.memoizedState:qe.next;if(e!==null)qe=e,$e=t;else{if(t===null)throw Error(F(310));$e=t,t={memoizedState:$e.memoizedState,baseState:$e.baseState,baseQueue:$e.baseQueue,queue:$e.queue,next:null},qe===null?ke.memoizedState=qe=t:qe=qe.next=t}return qe}function To(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=qt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=$e,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,u=null,d=i;do{var p=d.lane;if((Xr&p)===p)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var m={lane:p,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(l=u=m,o=r):u=u.next=m,ke.lanes|=p,Jr|=p}d=d.next}while(d!==null&&d!==i);u===null?o=r:u.next=l,en(r,e.memoizedState)||(Ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){s=t;do i=s.lane,ke.lanes|=i,Jr|=i,s=s.next;while(s!==t)}else s===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Pc(t){var e=qt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,s=n.pending,i=e.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=t(i,o.action),o=o.next;while(o!==s);en(i,e.memoizedState)||(Ct=!0),e.memoizedState=i,e.baseQueue===null&&(e.baseState=i),n.lastRenderedState=i}return[i,r]}function m_(){}function g_(t,e){var n=ke,r=qt(),s=e(),i=!en(r.memoizedState,s);if(i&&(r.memoizedState=s,Ct=!0),r=r.queue,Yh(__.bind(null,n,r,t),[t]),r.getSnapshot!==e||i||qe!==null&&qe.memoizedState.tag&1){if(n.flags|=2048,Io(9,v_.bind(null,n,r,s,e),void 0,null),Ge===null)throw Error(F(349));Xr&30||y_(n,e,s)}return s}function y_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function v_(t,e,n,r){e.value=n,e.getSnapshot=r,w_(e)&&E_(t)}function __(t,e,n){return n(function(){w_(e)&&E_(t)})}function w_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!en(t,n)}catch{return!0}}function E_(t){var e=Nn(t,1);e!==null&&Jt(e,t,1,-1)}function Wm(t){var e=sn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:To,lastRenderedState:t},e.queue=t,t=t.dispatch=pI.bind(null,ke,t),[e.memoizedState,t]}function Io(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ke.updateQueue,e===null?(e={lastEffect:null,stores:null},ke.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function x_(){return qt().memoizedState}function el(t,e,n,r){var s=sn();ke.flags|=t,s.memoizedState=Io(1|e,n,void 0,r===void 0?null:r)}function cu(t,e,n,r){var s=qt();r=r===void 0?null:r;var i=void 0;if($e!==null){var o=$e.memoizedState;if(i=o.destroy,r!==null&&Gh(r,o.deps)){s.memoizedState=Io(e,n,i,r);return}}ke.flags|=t,s.memoizedState=Io(1|e,n,i,r)}function Gm(t,e){return el(8390656,8,t,e)}function Yh(t,e){return cu(2048,8,t,e)}function T_(t,e){return cu(4,2,t,e)}function I_(t,e){return cu(4,4,t,e)}function S_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function A_(t,e,n){return n=n!=null?n.concat([t]):null,cu(4,4,S_.bind(null,e,t),n)}function Xh(){}function C_(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function k_(t,e){var n=qt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function R_(t,e,n){return Xr&21?(en(n,e)||(n=Ov(),ke.lanes|=n,Jr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Ct=!0),t.memoizedState=n)}function hI(t,e){var n=fe;fe=n!==0&&4>n?n:4,t(!0);var r=Rc.transition;Rc.transition={};try{t(!1),e()}finally{fe=n,Rc.transition=r}}function N_(){return qt().memoizedState}function fI(t,e,n){var r=pr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},P_(t))b_(e,n);else if(n=h_(t,e,n,r),n!==null){var s=wt();Jt(n,t,r,s),D_(n,e,r)}}function pI(t,e,n){var r=pr(t),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(P_(t))b_(e,s);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=e.lastRenderedReducer,i!==null))try{var o=e.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,en(l,o)){var u=e.interleaved;u===null?(s.next=s,zh(e)):(s.next=u.next,u.next=s),e.interleaved=s;return}}catch{}finally{}n=h_(t,e,s,r),n!==null&&(s=wt(),Jt(n,t,r,s),D_(n,e,r))}}function P_(t){var e=t.alternate;return t===ke||e!==null&&e===ke}function b_(t,e){Xi=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function D_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,kh(t,n)}}var Vl={readContext:Ht,useCallback:ot,useContext:ot,useEffect:ot,useImperativeHandle:ot,useInsertionEffect:ot,useLayoutEffect:ot,useMemo:ot,useReducer:ot,useRef:ot,useState:ot,useDebugValue:ot,useDeferredValue:ot,useTransition:ot,useMutableSource:ot,useSyncExternalStore:ot,useId:ot,unstable_isNewReconciler:!1},mI={readContext:Ht,useCallback:function(t,e){return sn().memoizedState=[t,e===void 0?null:e],t},useContext:Ht,useEffect:Gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,el(4194308,4,S_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return el(4194308,4,t,e)},useInsertionEffect:function(t,e){return el(4,2,t,e)},useMemo:function(t,e){var n=sn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=sn();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=fI.bind(null,ke,t),[r.memoizedState,t]},useRef:function(t){var e=sn();return t={current:t},e.memoizedState=t},useState:Wm,useDebugValue:Xh,useDeferredValue:function(t){return sn().memoizedState=t},useTransition:function(){var t=Wm(!1),e=t[0];return t=hI.bind(null,t[1]),sn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ke,s=sn();if(Ae){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ge===null)throw Error(F(349));Xr&30||y_(r,e,n)}s.memoizedState=n;var i={value:n,getSnapshot:e};return s.queue=i,Gm(__.bind(null,r,i,t),[t]),r.flags|=2048,Io(9,v_.bind(null,r,i,n,e),void 0,null),n},useId:function(){var t=sn(),e=Ge.identifierPrefix;if(Ae){var n=xn,r=En;n=(r&~(1<<32-Xt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=xo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gI={readContext:Ht,useCallback:C_,useContext:Ht,useEffect:Yh,useImperativeHandle:A_,useInsertionEffect:T_,useLayoutEffect:I_,useMemo:k_,useReducer:Nc,useRef:x_,useState:function(){return Nc(To)},useDebugValue:Xh,useDeferredValue:function(t){var e=qt();return R_(e,$e.memoizedState,t)},useTransition:function(){var t=Nc(To)[0],e=qt().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:N_,unstable_isNewReconciler:!1},yI={readContext:Ht,useCallback:C_,useContext:Ht,useEffect:Yh,useImperativeHandle:A_,useInsertionEffect:T_,useLayoutEffect:I_,useMemo:k_,useReducer:Pc,useRef:x_,useState:function(){return Pc(To)},useDebugValue:Xh,useDeferredValue:function(t){var e=qt();return $e===null?e.memoizedState=t:R_(e,$e.memoizedState,t)},useTransition:function(){var t=Pc(To)[0],e=qt().memoizedState;return[t,e]},useMutableSource:m_,useSyncExternalStore:g_,useId:N_,unstable_isNewReconciler:!1};function Kt(t,e){if(t&&t.defaultProps){e=Re({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Sd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Re({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var du={isMounted:function(t){return(t=t._reactInternals)?us(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=wt(),s=pr(t),i=An(r,s);i.payload=e,n!=null&&(i.callback=n),e=hr(t,i,s),e!==null&&(Jt(e,t,s,r),Ja(e,t,s))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=wt(),s=pr(t),i=An(r,s);i.tag=1,i.payload=e,n!=null&&(i.callback=n),e=hr(t,i,s),e!==null&&(Jt(e,t,s,r),Ja(e,t,s))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=wt(),r=pr(t),s=An(n,r);s.tag=2,e!=null&&(s.callback=e),e=hr(t,s,r),e!==null&&(Jt(e,t,r,n),Ja(e,t,r))}};function Km(t,e,n,r,s,i,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,i,o):e.prototype&&e.prototype.isPureReactComponent?!go(n,r)||!go(s,i):!0}function O_(t,e,n){var r=!1,s=Er,i=e.contextType;return typeof i=="object"&&i!==null?i=Ht(i):(s=Rt(e)?Qr:pt.current,r=e.contextTypes,i=(r=r!=null)?Gs(t,s):Er),e=new e(n,i),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=du,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=s,t.__reactInternalMemoizedMaskedChildContext=i),e}function Qm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&du.enqueueReplaceState(e,e.state,null)}function Ad(t,e,n,r){var s=t.stateNode;s.props=n,s.state=t.memoizedState,s.refs={},Bh(t);var i=e.contextType;typeof i=="object"&&i!==null?s.context=Ht(i):(i=Rt(e)?Qr:pt.current,s.context=Gs(t,i)),s.state=t.memoizedState,i=e.getDerivedStateFromProps,typeof i=="function"&&(Sd(t,e,i,n),s.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(e=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),e!==s.state&&du.enqueueReplaceState(s,s.state,null),bl(t,n,s,r),s.state=t.memoizedState),typeof s.componentDidMount=="function"&&(t.flags|=4194308)}function Xs(t,e){try{var n="",r=e;do n+=qx(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:t,source:e,stack:s,digest:null}}function bc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Cd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vI=typeof WeakMap=="function"?WeakMap:Map;function V_(t,e,n){n=An(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ll||(Ll=!0,Ld=r),Cd(t,e)},n}function M_(t,e,n){n=An(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var s=e.value;n.payload=function(){return r(s)},n.callback=function(){Cd(t,e)}}var i=t.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Cd(t,e),typeof r!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ym(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vI;var s=new Set;r.set(e,s)}else s=r.get(e),s===void 0&&(s=new Set,r.set(e,s));s.has(n)||(s.add(n),t=bI.bind(null,t,e,n),e.then(t,t))}function Xm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jm(t,e,n,r,s){return t.mode&1?(t.flags|=65536,t.lanes=s,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=An(-1,1),e.tag=2,hr(n,e,1))),n.lanes|=1),t)}var _I=jn.ReactCurrentOwner,Ct=!1;function _t(t,e,n,r){e.child=t===null?d_(e,null,n,r):Qs(e,t.child,n,r)}function Zm(t,e,n,r,s){n=n.render;var i=e.ref;return Us(e,s),r=Kh(t,e,n,r,i,s),n=Qh(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pn(t,e,s)):(Ae&&n&&Mh(e),e.flags|=1,_t(t,e,r,s),e.child)}function eg(t,e,n,r,s){if(t===null){var i=n.type;return typeof i=="function"&&!of(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=i,L_(t,e,i,r,s)):(t=sl(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}if(i=t.child,!(t.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:go,n(o,r)&&t.ref===e.ref)return Pn(t,e,s)}return e.flags|=1,t=mr(i,r),t.ref=e.ref,t.return=e,e.child=t}function L_(t,e,n,r,s){if(t!==null){var i=t.memoizedProps;if(go(i,r)&&t.ref===e.ref)if(Ct=!1,e.pendingProps=r=i,(t.lanes&s)!==0)t.flags&131072&&(Ct=!0);else return e.lanes=t.lanes,Pn(t,e,s)}return kd(t,e,n,r,s)}function j_(t,e,n){var r=e.pendingProps,s=r.children,i=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},we(Ds,bt),bt|=n;else{if(!(n&1073741824))return t=i!==null?i.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,we(Ds,bt),bt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,we(Ds,bt),bt|=r}else i!==null?(r=i.baseLanes|n,e.memoizedState=null):r=n,we(Ds,bt),bt|=r;return _t(t,e,s,n),e.child}function F_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function kd(t,e,n,r,s){var i=Rt(n)?Qr:pt.current;return i=Gs(e,i),Us(e,s),n=Kh(t,e,n,r,i,s),r=Qh(),t!==null&&!Ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~s,Pn(t,e,s)):(Ae&&r&&Mh(e),e.flags|=1,_t(t,e,n,s),e.child)}function tg(t,e,n,r,s){if(Rt(n)){var i=!0;Cl(e)}else i=!1;if(Us(e,s),e.stateNode===null)tl(t,e),O_(e,n,r),Ad(e,n,r,s),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ht(d):(d=Rt(n)?Qr:pt.current,d=Gs(e,d));var p=n.getDerivedStateFromProps,m=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";m||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==d)&&Qm(e,o,r,d),Qn=!1;var g=e.memoizedState;o.state=g,bl(e,r,o,s),u=e.memoizedState,l!==r||g!==u||kt.current||Qn?(typeof p=="function"&&(Sd(e,n,p,r),u=e.memoizedState),(l=Qn||Km(e,n,l,r,g,u,d))?(m||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,f_(t,e),l=e.memoizedProps,d=e.type===e.elementType?l:Kt(e.type,l),o.props=d,m=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ht(u):(u=Rt(n)?Qr:pt.current,u=Gs(e,u));var _=n.getDerivedStateFromProps;(p=typeof _=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==m||g!==u)&&Qm(e,o,r,u),Qn=!1,g=e.memoizedState,o.state=g,bl(e,r,o,s);var T=e.memoizedState;l!==m||g!==T||kt.current||Qn?(typeof _=="function"&&(Sd(e,n,_,r),T=e.memoizedState),(d=Qn||Km(e,n,d,r,g,T,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,T,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,T,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=T),o.props=r,o.state=T,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=1024),r=!1)}return Rd(t,e,n,r,i,s)}function Rd(t,e,n,r,s,i){F_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return s&&Um(e,n,!1),Pn(t,e,i);r=e.stateNode,_I.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Qs(e,t.child,null,i),e.child=Qs(e,null,l,i)):_t(t,e,l,i),e.memoizedState=r.state,s&&Um(e,n,!0),e.child}function U_(t){var e=t.stateNode;e.pendingContext?Fm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Fm(t,e.context,!1),Hh(t,e.containerInfo)}function ng(t,e,n,r,s){return Ks(),jh(s),e.flags|=256,_t(t,e,n,r),e.child}var Nd={dehydrated:null,treeContext:null,retryLane:0};function Pd(t){return{baseLanes:t,cachePool:null,transitions:null}}function $_(t,e,n){var r=e.pendingProps,s=Ce.current,i=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(s&2)!==0),l?(i=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(s|=1),we(Ce,s&1),t===null)return Td(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,i?(r=e.mode,i=e.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=pu(o,r,0,null),t=qr(t,r,n,null),i.return=e,t.return=e,i.sibling=t,e.child=i,e.child.memoizedState=Pd(n),e.memoizedState=Nd,t):Jh(e,o));if(s=t.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return wI(t,e,o,r,l,s,n);if(i){i=r.fallback,o=e.mode,s=t.child,l=s.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==s?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=mr(s,u),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=mr(l,i):(i=qr(i,o,n,null),i.flags|=2),i.return=e,r.return=e,r.sibling=i,e.child=r,r=i,i=e.child,o=t.child.memoizedState,o=o===null?Pd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=t.childLanes&~n,e.memoizedState=Nd,r}return i=t.child,t=i.sibling,r=mr(i,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Jh(t,e){return e=pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,r){return r!==null&&jh(r),Qs(e,t.child,null,n),t=Jh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wI(t,e,n,r,s,i,o){if(n)return e.flags&256?(e.flags&=-257,r=bc(Error(F(422))),Ma(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(i=r.fallback,s=e.mode,r=pu({mode:"visible",children:r.children},s,0,null),i=qr(i,s,o,null),i.flags|=2,r.return=e,i.return=e,r.sibling=i,e.child=r,e.mode&1&&Qs(e,t.child,null,o),e.child.memoizedState=Pd(o),e.memoizedState=Nd,i);if(!(e.mode&1))return Ma(t,e,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(F(419)),r=bc(i,r,void 0),Ma(t,e,o,r)}if(l=(o&t.childLanes)!==0,Ct||l){if(r=Ge,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Nn(t,s),Jt(r,t,s,-1))}return sf(),r=bc(Error(F(421))),Ma(t,e,o,r)}return s.data==="$?"?(e.flags|=128,e.child=t.child,e=DI.bind(null,t),s._reactRetry=e,null):(t=i.treeContext,Dt=dr(s.nextSibling),Vt=e,Ae=!0,Yt=null,t!==null&&(Ft[Ut++]=En,Ft[Ut++]=xn,Ft[Ut++]=Yr,En=t.id,xn=t.overflow,Yr=e),e=Jh(e,r.children),e.flags|=4096,e)}function rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Id(t.return,e,n)}function Dc(t,e,n,r,s){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=e,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function z_(t,e,n){var r=e.pendingProps,s=r.revealOrder,i=r.tail;if(_t(t,e,r.children,n),r=Ce.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rg(t,n,e);else if(t.tag===19)rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(we(Ce,r),!(e.mode&1))e.memoizedState=null;else switch(s){case"forwards":for(n=e.child,s=null;n!==null;)t=n.alternate,t!==null&&Dl(t)===null&&(s=n),n=n.sibling;n=s,n===null?(s=e.child,e.child=null):(s=n.sibling,n.sibling=null),Dc(e,!1,s,n,i);break;case"backwards":for(n=null,s=e.child,e.child=null;s!==null;){if(t=s.alternate,t!==null&&Dl(t)===null){e.child=s;break}t=s.sibling,s.sibling=n,n=s,s=t}Dc(e,!0,n,null,i);break;case"together":Dc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function tl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=mr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function EI(t,e,n){switch(e.tag){case 3:U_(e),Ks();break;case 5:p_(e);break;case 1:Rt(e.type)&&Cl(e);break;case 4:Hh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,s=e.memoizedProps.value;we(Nl,r._currentValue),r._currentValue=s;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(we(Ce,Ce.current&1),e.flags|=128,null):n&e.child.childLanes?$_(t,e,n):(we(Ce,Ce.current&1),t=Pn(t,e,n),t!==null?t.sibling:null);we(Ce,Ce.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return z_(t,e,n);e.flags|=128}if(s=e.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),we(Ce,Ce.current),r)break;return null;case 22:case 23:return e.lanes=0,j_(t,e,n)}return Pn(t,e,n)}var B_,bd,H_,q_;B_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bd=function(){};H_=function(t,e,n,r){var s=t.memoizedProps;if(s!==r){t=e.stateNode,zr(un.current);var i=null;switch(n){case"input":s=ed(t,s),r=ed(t,r),i=[];break;case"select":s=Re({},s,{value:void 0}),r=Re({},r,{value:void 0}),i=[];break;case"textarea":s=rd(t,s),r=rd(t,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sl)}id(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(lo.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var u=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&u!==l&&(u!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(i=i||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(lo.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&Te("scroll",t),i||l===u||(i=[])):(i=i||[]).push(d,u))}n&&(i=i||[]).push("style",n);var d=i;(e.updateQueue=d)&&(e.flags|=4)}};q_=function(t,e,n,r){n!==r&&(e.flags|=4)};function Mi(t,e){if(!Ae)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function at(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=t,s=s.sibling;else for(s=t.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=t,s=s.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function xI(t,e,n){var r=e.pendingProps;switch(Lh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return at(e),null;case 1:return Rt(e.type)&&Al(),at(e),null;case 3:return r=e.stateNode,Ys(),Se(kt),Se(pt),Wh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yt!==null&&(Ud(Yt),Yt=null))),bd(t,e),at(e),null;case 5:qh(e);var s=zr(Eo.current);if(n=e.type,t!==null&&e.stateNode!=null)H_(t,e,n,r,s),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return at(e),null}if(t=zr(un.current),Oa(e)){r=e.stateNode,n=e.type;var i=e.memoizedProps;switch(r[on]=e,r[_o]=i,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(s=0;s<zi.length;s++)Te(zi[s],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":hm(r,i),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Te("invalid",r);break;case"textarea":pm(r,i),Te("invalid",r)}id(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Da(r.textContent,l,t),s=["children",""+l]):lo.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Sa(r),fm(r,i,!0);break;case"textarea":Sa(r),mm(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Sl)}r=s,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=_v(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[on]=e,t[_o]=r,B_(t,e,!1,!1),e.stateNode=t;e:{switch(o=od(n,r),n){case"dialog":Te("cancel",t),Te("close",t),s=r;break;case"iframe":case"object":case"embed":Te("load",t),s=r;break;case"video":case"audio":for(s=0;s<zi.length;s++)Te(zi[s],t);s=r;break;case"source":Te("error",t),s=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),s=r;break;case"details":Te("toggle",t),s=r;break;case"input":hm(t,r),s=ed(t,r),Te("invalid",t);break;case"option":s=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},s=Re({},r,{value:void 0}),Te("invalid",t);break;case"textarea":pm(t,r),s=rd(t,r),Te("invalid",t);break;default:s=r}id(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var u=l[i];i==="style"?xv(t,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&wv(t,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&uo(t,u):typeof u=="number"&&uo(t,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(lo.hasOwnProperty(i)?u!=null&&i==="onScroll"&&Te("scroll",t):u!=null&&xh(t,i,u,o))}switch(n){case"input":Sa(t),fm(t,r,!1);break;case"textarea":Sa(t),mm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+wr(r.value));break;case"select":t.multiple=!!r.multiple,i=r.value,i!=null?Ms(t,!!r.multiple,i,!1):r.defaultValue!=null&&Ms(t,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return at(e),null;case 6:if(t&&e.stateNode!=null)q_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=zr(Eo.current),zr(un.current),Oa(e)){if(r=e.stateNode,n=e.memoizedProps,r[on]=e,(i=r.nodeValue!==n)&&(t=Vt,t!==null))switch(t.tag){case 3:Da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Da(r.nodeValue,n,(t.mode&1)!==0)}i&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[on]=e,e.stateNode=r}return at(e),null;case 13:if(Se(Ce),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ae&&Dt!==null&&e.mode&1&&!(e.flags&128))u_(),Ks(),e.flags|=98560,i=!1;else if(i=Oa(e),r!==null&&r.dehydrated!==null){if(t===null){if(!i)throw Error(F(318));if(i=e.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(F(317));i[on]=e}else Ks(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;at(e),i=!1}else Yt!==null&&(Ud(Yt),Yt=null),i=!0;if(!i)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||Ce.current&1?Be===0&&(Be=3):sf())),e.updateQueue!==null&&(e.flags|=4),at(e),null);case 4:return Ys(),bd(t,e),t===null&&yo(e.stateNode.containerInfo),at(e),null;case 10:return $h(e.type._context),at(e),null;case 17:return Rt(e.type)&&Al(),at(e),null;case 19:if(Se(Ce),i=e.memoizedState,i===null)return at(e),null;if(r=(e.flags&128)!==0,o=i.rendering,o===null)if(r)Mi(i,!1);else{if(Be!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Dl(t),o!==null){for(e.flags|=128,Mi(i,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)i=n,t=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=t,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,t=o.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return we(Ce,Ce.current&1|2),e.child}t=t.sibling}i.tail!==null&&Ve()>Js&&(e.flags|=128,r=!0,Mi(i,!1),e.lanes=4194304)}else{if(!r)if(t=Dl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Mi(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ae)return at(e),null}else 2*Ve()-i.renderingStartTime>Js&&n!==1073741824&&(e.flags|=128,r=!0,Mi(i,!1),e.lanes=4194304);i.isBackwards?(o.sibling=e.child,e.child=o):(n=i.last,n!==null?n.sibling=o:e.child=o,i.last=o)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ve(),e.sibling=null,n=Ce.current,we(Ce,r?n&1|2:n&1),e):(at(e),null);case 22:case 23:return rf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?bt&1073741824&&(at(e),e.subtreeFlags&6&&(e.flags|=8192)):at(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function TI(t,e){switch(Lh(e),e.tag){case 1:return Rt(e.type)&&Al(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ys(),Se(kt),Se(pt),Wh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qh(e),null;case 13:if(Se(Ce),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));Ks()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Se(Ce),null;case 4:return Ys(),null;case 10:return $h(e.type._context),null;case 22:case 23:return rf(),null;case 24:return null;default:return null}}var La=!1,ct=!1,II=typeof WeakSet=="function"?WeakSet:Set,G=null;function bs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){De(t,e,r)}else n.current=null}function Dd(t,e,n){try{n()}catch(r){De(t,e,r)}}var sg=!1;function SI(t,e){if(gd=xl,t=Yv(),Vh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,d=0,p=0,m=t,g=null;t:for(;;){for(var _;m!==n||s!==0&&m.nodeType!==3||(l=o+s),m!==i||r!==0&&m.nodeType!==3||(u=o+r),m.nodeType===3&&(o+=m.nodeValue.length),(_=m.firstChild)!==null;)g=m,m=_;for(;;){if(m===t)break t;if(g===n&&++d===s&&(l=o),g===i&&++p===r&&(u=o),(_=m.nextSibling)!==null)break;m=g,g=m.parentNode}m=_}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(yd={focusedElem:t,selectionRange:n},xl=!1,G=e;G!==null;)if(e=G,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,G=t;else for(;G!==null;){e=G;try{var T=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(T!==null){var N=T.memoizedProps,O=T.memoizedState,C=e.stateNode,w=C.getSnapshotBeforeUpdate(e.elementType===e.type?N:Kt(e.type,N),O);C.__reactInternalSnapshotBeforeUpdate=w}break;case 3:var A=e.stateNode.containerInfo;A.nodeType===1?A.textContent="":A.nodeType===9&&A.documentElement&&A.removeChild(A.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(D){De(e,e.return,D)}if(t=e.sibling,t!==null){t.return=e.return,G=t;break}G=e.return}return T=sg,sg=!1,T}function Ji(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&t)===t){var i=s.destroy;s.destroy=void 0,i!==void 0&&Dd(e,n,i)}s=s.next}while(s!==r)}}function hu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Od(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function W_(t){var e=t.alternate;e!==null&&(t.alternate=null,W_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[on],delete e[_o],delete e[wd],delete e[aI],delete e[lI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function G_(t){return t.tag===5||t.tag===3||t.tag===4}function ig(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||G_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Vd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(r!==4&&(t=t.child,t!==null))for(Vd(t,e,n),t=t.sibling;t!==null;)Vd(t,e,n),t=t.sibling}function Md(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Md(t,e,n),t=t.sibling;t!==null;)Md(t,e,n),t=t.sibling}var Je=null,Qt=!1;function Hn(t,e,n){for(n=n.child;n!==null;)K_(t,e,n),n=n.sibling}function K_(t,e,n){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(su,n)}catch{}switch(n.tag){case 5:ct||bs(n,e);case 6:var r=Je,s=Qt;Je=null,Hn(t,e,n),Je=r,Qt=s,Je!==null&&(Qt?(t=Je,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Je.removeChild(n.stateNode));break;case 18:Je!==null&&(Qt?(t=Je,n=n.stateNode,t.nodeType===8?Ac(t.parentNode,n):t.nodeType===1&&Ac(t,n),po(t)):Ac(Je,n.stateNode));break;case 4:r=Je,s=Qt,Je=n.stateNode.containerInfo,Qt=!0,Hn(t,e,n),Je=r,Qt=s;break;case 0:case 11:case 14:case 15:if(!ct&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Dd(n,e,o),s=s.next}while(s!==r)}Hn(t,e,n);break;case 1:if(!ct&&(bs(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){De(n,e,l)}Hn(t,e,n);break;case 21:Hn(t,e,n);break;case 22:n.mode&1?(ct=(r=ct)||n.memoizedState!==null,Hn(t,e,n),ct=r):Hn(t,e,n);break;default:Hn(t,e,n)}}function og(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new II),e.forEach(function(r){var s=OI.bind(null,t,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Gt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Je=l.stateNode,Qt=!1;break e;case 3:Je=l.stateNode.containerInfo,Qt=!0;break e;case 4:Je=l.stateNode.containerInfo,Qt=!0;break e}l=l.return}if(Je===null)throw Error(F(160));K_(i,o,s),Je=null,Qt=!1;var u=s.alternate;u!==null&&(u.return=null),s.return=null}catch(d){De(s,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Q_(e,t),e=e.sibling}function Q_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gt(e,t),rn(t),r&4){try{Ji(3,t,t.return),hu(3,t)}catch(N){De(t,t.return,N)}try{Ji(5,t,t.return)}catch(N){De(t,t.return,N)}}break;case 1:Gt(e,t),rn(t),r&512&&n!==null&&bs(n,n.return);break;case 5:if(Gt(e,t),rn(t),r&512&&n!==null&&bs(n,n.return),t.flags&32){var s=t.stateNode;try{uo(s,"")}catch(N){De(t,t.return,N)}}if(r&4&&(s=t.stateNode,s!=null)){var i=t.memoizedProps,o=n!==null?n.memoizedProps:i,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&yv(s,i),od(l,o);var d=od(l,i);for(o=0;o<u.length;o+=2){var p=u[o],m=u[o+1];p==="style"?xv(s,m):p==="dangerouslySetInnerHTML"?wv(s,m):p==="children"?uo(s,m):xh(s,p,m,d)}switch(l){case"input":td(s,i);break;case"textarea":vv(s,i);break;case"select":var g=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var _=i.value;_!=null?Ms(s,!!i.multiple,_,!1):g!==!!i.multiple&&(i.defaultValue!=null?Ms(s,!!i.multiple,i.defaultValue,!0):Ms(s,!!i.multiple,i.multiple?[]:"",!1))}s[_o]=i}catch(N){De(t,t.return,N)}}break;case 6:if(Gt(e,t),rn(t),r&4){if(t.stateNode===null)throw Error(F(162));s=t.stateNode,i=t.memoizedProps;try{s.nodeValue=i}catch(N){De(t,t.return,N)}}break;case 3:if(Gt(e,t),rn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{po(e.containerInfo)}catch(N){De(t,t.return,N)}break;case 4:Gt(e,t),rn(t);break;case 13:Gt(e,t),rn(t),s=t.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(tf=Ve())),r&4&&og(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(ct=(d=ct)||p,Gt(e,t),ct=d):Gt(e,t),rn(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!p&&t.mode&1)for(G=t,p=t.child;p!==null;){for(m=G=p;G!==null;){switch(g=G,_=g.child,g.tag){case 0:case 11:case 14:case 15:Ji(4,g,g.return);break;case 1:bs(g,g.return);var T=g.stateNode;if(typeof T.componentWillUnmount=="function"){r=g,n=g.return;try{e=r,T.props=e.memoizedProps,T.state=e.memoizedState,T.componentWillUnmount()}catch(N){De(r,n,N)}}break;case 5:bs(g,g.return);break;case 22:if(g.memoizedState!==null){lg(m);continue}}_!==null?(_.return=g,G=_):lg(m)}p=p.sibling}e:for(p=null,m=t;;){if(m.tag===5){if(p===null){p=m;try{s=m.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=m.stateNode,u=m.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ev("display",o))}catch(N){De(t,t.return,N)}}}else if(m.tag===6){if(p===null)try{m.stateNode.nodeValue=d?"":m.memoizedProps}catch(N){De(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;p===m&&(p=null),m=m.return}p===m&&(p=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:Gt(e,t),rn(t),r&4&&og(t);break;case 21:break;default:Gt(e,t),rn(t)}}function rn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(G_(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(uo(s,""),r.flags&=-33);var i=ig(t);Md(t,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=ig(t);Vd(t,l,o);break;default:throw Error(F(161))}}catch(u){De(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function AI(t,e,n){G=t,Y_(t)}function Y_(t,e,n){for(var r=(t.mode&1)!==0;G!==null;){var s=G,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||La;if(!o){var l=s.alternate,u=l!==null&&l.memoizedState!==null||ct;l=La;var d=ct;if(La=o,(ct=u)&&!d)for(G=s;G!==null;)o=G,u=o.child,o.tag===22&&o.memoizedState!==null?ug(s):u!==null?(u.return=o,G=u):ug(s);for(;i!==null;)G=i,Y_(i),i=i.sibling;G=s,La=l,ct=d}ag(t)}else s.subtreeFlags&8772&&i!==null?(i.return=s,G=i):ag(t)}}function ag(t){for(;G!==null;){var e=G;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:ct||hu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!ct)if(n===null)r.componentDidMount();else{var s=e.elementType===e.type?n.memoizedProps:Kt(e.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=e.updateQueue;i!==null&&qm(e,i,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}qm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var p=d.memoizedState;if(p!==null){var m=p.dehydrated;m!==null&&po(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}ct||e.flags&512&&Od(e)}catch(g){De(e,e.return,g)}}if(e===t){G=null;break}if(n=e.sibling,n!==null){n.return=e.return,G=n;break}G=e.return}}function lg(t){for(;G!==null;){var e=G;if(e===t){G=null;break}var n=e.sibling;if(n!==null){n.return=e.return,G=n;break}G=e.return}}function ug(t){for(;G!==null;){var e=G;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{hu(4,e)}catch(u){De(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var s=e.return;try{r.componentDidMount()}catch(u){De(e,s,u)}}var i=e.return;try{Od(e)}catch(u){De(e,i,u)}break;case 5:var o=e.return;try{Od(e)}catch(u){De(e,o,u)}}}catch(u){De(e,e.return,u)}if(e===t){G=null;break}var l=e.sibling;if(l!==null){l.return=e.return,G=l;break}G=e.return}}var CI=Math.ceil,Ml=jn.ReactCurrentDispatcher,Zh=jn.ReactCurrentOwner,zt=jn.ReactCurrentBatchConfig,le=0,Ge=null,je=null,et=0,bt=0,Ds=Cr(0),Be=0,So=null,Jr=0,fu=0,ef=0,Zi=null,St=null,tf=0,Js=1/0,_n=null,Ll=!1,Ld=null,fr=null,ja=!1,ir=null,jl=0,eo=0,jd=null,nl=-1,rl=0;function wt(){return le&6?Ve():nl!==-1?nl:nl=Ve()}function pr(t){return t.mode&1?le&2&&et!==0?et&-et:cI.transition!==null?(rl===0&&(rl=Ov()),rl):(t=fe,t!==0||(t=window.event,t=t===void 0?16:$v(t.type)),t):1}function Jt(t,e,n,r){if(50<eo)throw eo=0,jd=null,Error(F(185));Uo(t,n,r),(!(le&2)||t!==Ge)&&(t===Ge&&(!(le&2)&&(fu|=n),Be===4&&Jn(t,et)),Nt(t,r),n===1&&le===0&&!(e.mode&1)&&(Js=Ve()+500,uu&&kr()))}function Nt(t,e){var n=t.callbackNode;cT(t,e);var r=El(t,t===Ge?et:0);if(r===0)n!==null&&vm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vm(n),e===1)t.tag===0?uI(cg.bind(null,t)):o_(cg.bind(null,t)),iI(function(){!(le&6)&&kr()}),n=null;else{switch(Vv(r)){case 1:n=Ch;break;case 4:n=bv;break;case 16:n=wl;break;case 536870912:n=Dv;break;default:n=wl}n=s0(n,X_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function X_(t,e){if(nl=-1,rl=0,le&6)throw Error(F(327));var n=t.callbackNode;if($s()&&t.callbackNode!==n)return null;var r=El(t,t===Ge?et:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Fl(t,r);else{e=r;var s=le;le|=2;var i=Z_();(Ge!==t||et!==e)&&(_n=null,Js=Ve()+500,Hr(t,e));do try{NI();break}catch(l){J_(t,l)}while(!0);Uh(),Ml.current=i,le=s,je!==null?e=0:(Ge=null,et=0,e=Be)}if(e!==0){if(e===2&&(s=dd(t),s!==0&&(r=s,e=Fd(t,s))),e===1)throw n=So,Hr(t,0),Jn(t,r),Nt(t,Ve()),n;if(e===6)Jn(t,r);else{if(s=t.current.alternate,!(r&30)&&!kI(s)&&(e=Fl(t,r),e===2&&(i=dd(t),i!==0&&(r=i,e=Fd(t,i))),e===1))throw n=So,Hr(t,0),Jn(t,r),Nt(t,Ve()),n;switch(t.finishedWork=s,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Lr(t,St,_n);break;case 3:if(Jn(t,r),(r&130023424)===r&&(e=tf+500-Ve(),10<e)){if(El(t,0)!==0)break;if(s=t.suspendedLanes,(s&r)!==r){wt(),t.pingedLanes|=t.suspendedLanes&s;break}t.timeoutHandle=_d(Lr.bind(null,t,St,_n),e);break}Lr(t,St,_n);break;case 4:if(Jn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,s=-1;0<r;){var o=31-Xt(r);i=1<<o,o=e[o],o>s&&(s=o),r&=~i}if(r=s,r=Ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*CI(r/1960))-r,10<r){t.timeoutHandle=_d(Lr.bind(null,t,St,_n),r);break}Lr(t,St,_n);break;case 5:Lr(t,St,_n);break;default:throw Error(F(329))}}}return Nt(t,Ve()),t.callbackNode===n?X_.bind(null,t):null}function Fd(t,e){var n=Zi;return t.current.memoizedState.isDehydrated&&(Hr(t,e).flags|=256),t=Fl(t,e),t!==2&&(e=St,St=n,e!==null&&Ud(e)),t}function Ud(t){St===null?St=t:St.push.apply(St,t)}function kI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!en(i(),s))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Jn(t,e){for(e&=~ef,e&=~fu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Xt(e),r=1<<n;t[n]=-1,e&=~r}}function cg(t){if(le&6)throw Error(F(327));$s();var e=El(t,0);if(!(e&1))return Nt(t,Ve()),null;var n=Fl(t,e);if(t.tag!==0&&n===2){var r=dd(t);r!==0&&(e=r,n=Fd(t,r))}if(n===1)throw n=So,Hr(t,0),Jn(t,e),Nt(t,Ve()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Lr(t,St,_n),Nt(t,Ve()),null}function nf(t,e){var n=le;le|=1;try{return t(e)}finally{le=n,le===0&&(Js=Ve()+500,uu&&kr())}}function Zr(t){ir!==null&&ir.tag===0&&!(le&6)&&$s();var e=le;le|=1;var n=zt.transition,r=fe;try{if(zt.transition=null,fe=1,t)return t()}finally{fe=r,zt.transition=n,le=e,!(le&6)&&kr()}}function rf(){bt=Ds.current,Se(Ds)}function Hr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sI(n)),je!==null)for(n=je.return;n!==null;){var r=n;switch(Lh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Al();break;case 3:Ys(),Se(kt),Se(pt),Wh();break;case 5:qh(r);break;case 4:Ys();break;case 13:Se(Ce);break;case 19:Se(Ce);break;case 10:$h(r.type._context);break;case 22:case 23:rf()}n=n.return}if(Ge=t,je=t=mr(t.current,null),et=bt=e,Be=0,So=null,ef=fu=Jr=0,St=Zi=null,$r!==null){for(e=0;e<$r.length;e++)if(n=$r[e],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}$r=null}return t}function J_(t,e){do{var n=je;try{if(Uh(),Za.current=Vl,Ol){for(var r=ke.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Ol=!1}if(Xr=0,qe=$e=ke=null,Xi=!1,xo=0,Zh.current=null,n===null||n.return===null){Be=1,So=e,je=null;break}e:{var i=t,o=n.return,l=n,u=e;if(e=et,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,p=l,m=p.tag;if(!(p.mode&1)&&(m===0||m===11||m===15)){var g=p.alternate;g?(p.updateQueue=g.updateQueue,p.memoizedState=g.memoizedState,p.lanes=g.lanes):(p.updateQueue=null,p.memoizedState=null)}var _=Xm(o);if(_!==null){_.flags&=-257,Jm(_,o,l,i,e),_.mode&1&&Ym(i,d,e),e=_,u=d;var T=e.updateQueue;if(T===null){var N=new Set;N.add(u),e.updateQueue=N}else T.add(u);break e}else{if(!(e&1)){Ym(i,d,e),sf();break e}u=Error(F(426))}}else if(Ae&&l.mode&1){var O=Xm(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Jm(O,o,l,i,e),jh(Xs(u,l));break e}}i=u=Xs(u,l),Be!==4&&(Be=2),Zi===null?Zi=[i]:Zi.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,e&=-e,i.lanes|=e;var C=V_(i,u,e);Hm(i,C);break e;case 1:l=u;var w=i.type,A=i.stateNode;if(!(i.flags&128)&&(typeof w.getDerivedStateFromError=="function"||A!==null&&typeof A.componentDidCatch=="function"&&(fr===null||!fr.has(A)))){i.flags|=65536,e&=-e,i.lanes|=e;var D=M_(i,l,e);Hm(i,D);break e}}i=i.return}while(i!==null)}t0(n)}catch($){e=$,je===n&&n!==null&&(je=n=n.return);continue}break}while(!0)}function Z_(){var t=Ml.current;return Ml.current=Vl,t===null?Vl:t}function sf(){(Be===0||Be===3||Be===2)&&(Be=4),Ge===null||!(Jr&268435455)&&!(fu&268435455)||Jn(Ge,et)}function Fl(t,e){var n=le;le|=2;var r=Z_();(Ge!==t||et!==e)&&(_n=null,Hr(t,e));do try{RI();break}catch(s){J_(t,s)}while(!0);if(Uh(),le=n,Ml.current=r,je!==null)throw Error(F(261));return Ge=null,et=0,Be}function RI(){for(;je!==null;)e0(je)}function NI(){for(;je!==null&&!tT();)e0(je)}function e0(t){var e=r0(t.alternate,t,bt);t.memoizedProps=t.pendingProps,e===null?t0(t):je=e,Zh.current=null}function t0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=TI(n,e),n!==null){n.flags&=32767,je=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Be=6,je=null;return}}else if(n=xI(n,e,bt),n!==null){je=n;return}if(e=e.sibling,e!==null){je=e;return}je=e=t}while(e!==null);Be===0&&(Be=5)}function Lr(t,e,n){var r=fe,s=zt.transition;try{zt.transition=null,fe=1,PI(t,e,n,r)}finally{zt.transition=s,fe=r}return null}function PI(t,e,n,r){do $s();while(ir!==null);if(le&6)throw Error(F(327));n=t.finishedWork;var s=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var i=n.lanes|n.childLanes;if(dT(t,i),t===Ge&&(je=Ge=null,et=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ja||(ja=!0,s0(wl,function(){return $s(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=zt.transition,zt.transition=null;var o=fe;fe=1;var l=le;le|=4,Zh.current=null,SI(t,n),Q_(n,t),XT(yd),xl=!!gd,yd=gd=null,t.current=n,AI(n),nT(),le=l,fe=o,zt.transition=i}else t.current=n;if(ja&&(ja=!1,ir=t,jl=s),i=t.pendingLanes,i===0&&(fr=null),iT(n.stateNode),Nt(t,Ve()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)s=e[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Ll)throw Ll=!1,t=Ld,Ld=null,t;return jl&1&&t.tag!==0&&$s(),i=t.pendingLanes,i&1?t===jd?eo++:(eo=0,jd=t):eo=0,kr(),null}function $s(){if(ir!==null){var t=Vv(jl),e=zt.transition,n=fe;try{if(zt.transition=null,fe=16>t?16:t,ir===null)var r=!1;else{if(t=ir,ir=null,jl=0,le&6)throw Error(F(331));var s=le;for(le|=4,G=t.current;G!==null;){var i=G,o=i.child;if(G.flags&16){var l=i.deletions;if(l!==null){for(var u=0;u<l.length;u++){var d=l[u];for(G=d;G!==null;){var p=G;switch(p.tag){case 0:case 11:case 15:Ji(8,p,i)}var m=p.child;if(m!==null)m.return=p,G=m;else for(;G!==null;){p=G;var g=p.sibling,_=p.return;if(W_(p),p===d){G=null;break}if(g!==null){g.return=_,G=g;break}G=_}}}var T=i.alternate;if(T!==null){var N=T.child;if(N!==null){T.child=null;do{var O=N.sibling;N.sibling=null,N=O}while(N!==null)}}G=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,G=o;else e:for(;G!==null;){if(i=G,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ji(9,i,i.return)}var C=i.sibling;if(C!==null){C.return=i.return,G=C;break e}G=i.return}}var w=t.current;for(G=w;G!==null;){o=G;var A=o.child;if(o.subtreeFlags&2064&&A!==null)A.return=o,G=A;else e:for(o=w;G!==null;){if(l=G,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:hu(9,l)}}catch($){De(l,l.return,$)}if(l===o){G=null;break e}var D=l.sibling;if(D!==null){D.return=l.return,G=D;break e}G=l.return}}if(le=s,kr(),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(su,t)}catch{}r=!0}return r}finally{fe=n,zt.transition=e}}return!1}function dg(t,e,n){e=Xs(n,e),e=V_(t,e,1),t=hr(t,e,1),e=wt(),t!==null&&(Uo(t,1,e),Nt(t,e))}function De(t,e,n){if(t.tag===3)dg(t,t,n);else for(;e!==null;){if(e.tag===3){dg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fr===null||!fr.has(r))){t=Xs(n,t),t=M_(e,t,1),e=hr(e,t,1),t=wt(),e!==null&&(Uo(e,1,t),Nt(e,t));break}}e=e.return}}function bI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=wt(),t.pingedLanes|=t.suspendedLanes&n,Ge===t&&(et&n)===n&&(Be===4||Be===3&&(et&130023424)===et&&500>Ve()-tf?Hr(t,0):ef|=n),Nt(t,e)}function n0(t,e){e===0&&(t.mode&1?(e=ka,ka<<=1,!(ka&130023424)&&(ka=4194304)):e=1);var n=wt();t=Nn(t,e),t!==null&&(Uo(t,e,n),Nt(t,n))}function DI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),n0(t,n)}function OI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,s=t.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),n0(t,n)}var r0;r0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||kt.current)Ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Ct=!1,EI(t,e,n);Ct=!!(t.flags&131072)}else Ct=!1,Ae&&e.flags&1048576&&a_(e,Rl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;tl(t,e),t=e.pendingProps;var s=Gs(e,pt.current);Us(e,n),s=Kh(null,e,r,t,s,n);var i=Qh();return e.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Rt(r)?(i=!0,Cl(e)):i=!1,e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,Bh(e),s.updater=du,e.stateNode=s,s._reactInternals=e,Ad(e,r,t,n),e=Rd(null,e,r,!0,i,n)):(e.tag=0,Ae&&i&&Mh(e),_t(null,e,s,n),e=e.child),e;case 16:r=e.elementType;e:{switch(tl(t,e),t=e.pendingProps,s=r._init,r=s(r._payload),e.type=r,s=e.tag=MI(r),t=Kt(r,t),s){case 0:e=kd(null,e,r,t,n);break e;case 1:e=tg(null,e,r,t,n);break e;case 11:e=Zm(null,e,r,t,n);break e;case 14:e=eg(null,e,r,Kt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Kt(r,s),kd(t,e,r,s,n);case 1:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Kt(r,s),tg(t,e,r,s,n);case 3:e:{if(U_(e),t===null)throw Error(F(387));r=e.pendingProps,i=e.memoizedState,s=i.element,f_(t,e),bl(e,r,null,n);var o=e.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=i,e.memoizedState=i,e.flags&256){s=Xs(Error(F(423)),e),e=ng(t,e,r,n,s);break e}else if(r!==s){s=Xs(Error(F(424)),e),e=ng(t,e,r,n,s);break e}else for(Dt=dr(e.stateNode.containerInfo.firstChild),Vt=e,Ae=!0,Yt=null,n=d_(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ks(),r===s){e=Pn(t,e,n);break e}_t(t,e,r,n)}e=e.child}return e;case 5:return p_(e),t===null&&Td(e),r=e.type,s=e.pendingProps,i=t!==null?t.memoizedProps:null,o=s.children,vd(r,s)?o=null:i!==null&&vd(r,i)&&(e.flags|=32),F_(t,e),_t(t,e,o,n),e.child;case 6:return t===null&&Td(e),null;case 13:return $_(t,e,n);case 4:return Hh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Qs(e,null,r,n):_t(t,e,r,n),e.child;case 11:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Kt(r,s),Zm(t,e,r,s,n);case 7:return _t(t,e,e.pendingProps,n),e.child;case 8:return _t(t,e,e.pendingProps.children,n),e.child;case 12:return _t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,s=e.pendingProps,i=e.memoizedProps,o=s.value,we(Nl,r._currentValue),r._currentValue=o,i!==null)if(en(i.value,o)){if(i.children===s.children&&!kt.current){e=Pn(t,e,n);break e}}else for(i=e.child,i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=An(-1,n&-n),u.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var p=d.pending;p===null?u.next=u:(u.next=p.next,p.next=u),d.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Id(i.return,n,e),l.lanes|=n;break}u=u.next}}else if(i.tag===10)o=i.type===e.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(F(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Id(o,n,e),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}_t(t,e,s.children,n),e=e.child}return e;case 9:return s=e.type,r=e.pendingProps.children,Us(e,n),s=Ht(s),r=r(s),e.flags|=1,_t(t,e,r,n),e.child;case 14:return r=e.type,s=Kt(r,e.pendingProps),s=Kt(r.type,s),eg(t,e,r,s,n);case 15:return L_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,s=e.pendingProps,s=e.elementType===r?s:Kt(r,s),tl(t,e),e.tag=1,Rt(r)?(t=!0,Cl(e)):t=!1,Us(e,n),O_(e,r,s),Ad(e,r,s,n),Rd(null,e,r,!0,t,n);case 19:return z_(t,e,n);case 22:return j_(t,e,n)}throw Error(F(156,e.tag))};function s0(t,e){return Pv(t,e)}function VI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(t,e,n,r){return new VI(t,e,n,r)}function of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function MI(t){if(typeof t=="function")return of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Ih)return 11;if(t===Sh)return 14}return 2}function mr(t,e){var n=t.alternate;return n===null?(n=$t(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function sl(t,e,n,r,s,i){var o=2;if(r=t,typeof t=="function")of(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Ts:return qr(n.children,s,i,e);case Th:o=8,s|=8;break;case Yc:return t=$t(12,n,e,s|2),t.elementType=Yc,t.lanes=i,t;case Xc:return t=$t(13,n,e,s),t.elementType=Xc,t.lanes=i,t;case Jc:return t=$t(19,n,e,s),t.elementType=Jc,t.lanes=i,t;case pv:return pu(n,s,i,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case hv:o=10;break e;case fv:o=9;break e;case Ih:o=11;break e;case Sh:o=14;break e;case Kn:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=$t(o,n,e,s),e.elementType=t,e.type=r,e.lanes=i,e}function qr(t,e,n,r){return t=$t(7,t,r,e),t.lanes=n,t}function pu(t,e,n,r){return t=$t(22,t,r,e),t.elementType=pv,t.lanes=n,t.stateNode={isHidden:!1},t}function Oc(t,e,n){return t=$t(6,t,null,e),t.lanes=n,t}function Vc(t,e,n){return e=$t(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function LI(t,e,n,r,s){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mc(0),this.expirationTimes=mc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mc(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function af(t,e,n,r,s,i,o,l,u){return t=new LI(t,e,n,l,u),e===1?(e=1,i===!0&&(e|=8)):e=0,i=$t(3,null,null,e),t.current=i,i.stateNode=t,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bh(i),t}function jI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function i0(t){if(!t)return Er;t=t._reactInternals;e:{if(us(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Rt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(Rt(n))return i_(t,n,e)}return e}function o0(t,e,n,r,s,i,o,l,u){return t=af(n,r,!0,t,s,i,o,l,u),t.context=i0(null),n=t.current,r=wt(),s=pr(n),i=An(r,s),i.callback=e??null,hr(n,i,s),t.current.lanes=s,Uo(t,s,r),Nt(t,r),t}function mu(t,e,n,r){var s=e.current,i=wt(),o=pr(s);return n=i0(n),e.context===null?e.context=n:e.pendingContext=n,e=An(i,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hr(s,e,o),t!==null&&(Jt(t,s,o,i),Ja(t,s,o)),o}function Ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function hg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lf(t,e){hg(t,e),(t=t.alternate)&&hg(t,e)}function FI(){return null}var a0=typeof reportError=="function"?reportError:function(t){console.error(t)};function uf(t){this._internalRoot=t}gu.prototype.render=uf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));mu(t,e,null,null)};gu.prototype.unmount=uf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){mu(null,t,null,null)}),e[Rn]=null}};function gu(t){this._internalRoot=t}gu.prototype.unstable_scheduleHydration=function(t){if(t){var e=jv();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Xn.length&&e!==0&&e<Xn[n].priority;n++);Xn.splice(n,0,t),n===0&&Uv(t)}};function cf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function yu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function fg(){}function UI(t,e,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Ul(o);i.call(d)}}var o=o0(e,r,t,0,null,!1,!1,"",fg);return t._reactRootContainer=o,t[Rn]=o.current,yo(t.nodeType===8?t.parentNode:t),Zr(),o}for(;s=t.lastChild;)t.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=Ul(u);l.call(d)}}var u=af(t,0,!1,null,null,!1,!1,"",fg);return t._reactRootContainer=u,t[Rn]=u.current,yo(t.nodeType===8?t.parentNode:t),Zr(function(){mu(e,u,n,r)}),u}function vu(t,e,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var u=Ul(o);l.call(u)}}mu(e,o,t,s)}else o=UI(n,e,t,s,r);return Ul(o)}Mv=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=$i(e.pendingLanes);n!==0&&(kh(e,n|1),Nt(e,Ve()),!(le&6)&&(Js=Ve()+500,kr()))}break;case 13:Zr(function(){var r=Nn(t,1);if(r!==null){var s=wt();Jt(r,t,1,s)}}),lf(t,1)}};Rh=function(t){if(t.tag===13){var e=Nn(t,134217728);if(e!==null){var n=wt();Jt(e,t,134217728,n)}lf(t,134217728)}};Lv=function(t){if(t.tag===13){var e=pr(t),n=Nn(t,e);if(n!==null){var r=wt();Jt(n,t,e,r)}lf(t,e)}};jv=function(){return fe};Fv=function(t,e){var n=fe;try{return fe=t,e()}finally{fe=n}};ld=function(t,e,n){switch(e){case"input":if(td(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var s=lu(r);if(!s)throw Error(F(90));gv(r),td(r,s)}}}break;case"textarea":vv(t,n);break;case"select":e=n.value,e!=null&&Ms(t,!!n.multiple,e,!1)}};Sv=nf;Av=Zr;var $I={usingClientEntryPoint:!1,Events:[zo,Cs,lu,Tv,Iv,nf]},Li={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zI={bundleType:Li.bundleType,version:Li.version,rendererPackageName:Li.rendererPackageName,rendererConfig:Li.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:jn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rv(t),t===null?null:t.stateNode},findFiberByHostInstance:Li.findFiberByHostInstance||FI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fa.isDisabled&&Fa.supportsFiber)try{su=Fa.inject(zI),ln=Fa}catch{}}Lt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$I;Lt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cf(e))throw Error(F(200));return jI(t,e,null,n)};Lt.createRoot=function(t,e){if(!cf(t))throw Error(F(299));var n=!1,r="",s=a0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(s=e.onRecoverableError)),e=af(t,1,!1,null,null,n,!1,r,s),t[Rn]=e.current,yo(t.nodeType===8?t.parentNode:t),new uf(e)};Lt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=Rv(e),t=t===null?null:t.stateNode,t};Lt.flushSync=function(t){return Zr(t)};Lt.hydrate=function(t,e,n){if(!yu(e))throw Error(F(200));return vu(null,t,e,!0,n)};Lt.hydrateRoot=function(t,e,n){if(!cf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=a0;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=o0(e,null,t,1,n??null,s,!1,i,o),t[Rn]=e.current,yo(t),r)for(t=0;t<r.length;t++)n=r[t],s=n._getVersion,s=s(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,s]:e.mutableSourceEagerHydrationData.push(n,s);return new gu(e)};Lt.render=function(t,e,n){if(!yu(e))throw Error(F(200));return vu(null,t,e,!1,n)};Lt.unmountComponentAtNode=function(t){if(!yu(t))throw Error(F(40));return t._reactRootContainer?(Zr(function(){vu(null,null,t,!1,function(){t._reactRootContainer=null,t[Rn]=null})}),!0):!1};Lt.unstable_batchedUpdates=nf;Lt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!yu(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return vu(t,e,n,!1,r)};Lt.version="18.3.1-next-f1338f8080-20240426";function l0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(l0)}catch(t){console.error(t)}}l0(),lv.exports=Lt;var BI=lv.exports,pg=BI;Kc.createRoot=pg.createRoot,Kc.hydrateRoot=pg.hydrateRoot;var mg={};/**
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
 */const u0=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},HI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],l=t[n++],u=((s&7)<<18|(i&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},c0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,l=o?t[s+1]:0,u=s+2<t.length,d=u?t[s+2]:0,p=i>>2,m=(i&3)<<4|l>>4;let g=(l&15)<<2|d>>6,_=d&63;u||(_=64,o||(g=64)),r.push(n[p],n[m],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(u0(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):HI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],l=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const m=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||l==null||d==null||m==null)throw new qI;const g=i<<2|l>>4;if(r.push(g),d!==64){const _=l<<4&240|d>>2;if(r.push(_),m!==64){const T=d<<6&192|m;r.push(T)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const WI=function(t){const e=u0(t);return c0.encodeByteArray(e,!0)},$l=function(t){return WI(t).replace(/\./g,"")},d0=function(t){try{return c0.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function GI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const KI=()=>GI().__FIREBASE_DEFAULTS__,QI=()=>{if(typeof process>"u"||typeof mg>"u")return;const t=mg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},YI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&d0(t[1]);return e&&JSON.parse(e)},_u=()=>{try{return KI()||QI()||YI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},h0=t=>{var e,n;return(n=(e=_u())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},XI=t=>{const e=h0(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},f0=()=>{var t;return(t=_u())===null||t===void 0?void 0:t.config},p0=t=>{var e;return(e=_u())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class JI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function ZI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$l(JSON.stringify(n)),$l(JSON.stringify(o)),""].join(".")}/**
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
 */function mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function e1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(mt())}function t1(){var t;const e=(t=_u())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function n1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function r1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function s1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function i1(){const t=mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function o1(){return!t1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function a1(){try{return typeof indexedDB=="object"}catch{return!1}}function l1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const u1="FirebaseError";class Fn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=u1,Object.setPrototypeOf(this,Fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ho.prototype.create)}}class Ho{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?c1(i,r):"Error",l=`${this.serviceName}: ${o} (${s}).`;return new Fn(s,l,r)}}function c1(t,e){return t.replace(d1,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const d1=/\{\$([^}]+)}/g;function h1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function zl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(gg(i)&&gg(o)){if(!zl(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function gg(t){return t!==null&&typeof t=="object"}/**
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
 */function qo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function f1(t,e){const n=new p1(t,e);return n.subscribe.bind(n)}class p1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");m1(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Mc),s.error===void 0&&(s.error=Mc),s.complete===void 0&&(s.complete=Mc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function m1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Mc(){}/**
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
 */function Ke(t){return t&&t._delegate?t._delegate:t}class es{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const jr="[DEFAULT]";/**
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
 */class g1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new JI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(v1(e))try{this.getOrInitializeService({instanceIdentifier:jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=jr){return this.instances.has(e)}getOptions(e=jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:y1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=jr){return this.component?this.component.multipleInstances?e:jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function y1(t){return t===jr?void 0:t}function v1(t){return t.instantiationMode==="EAGER"}/**
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
 */class _1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new g1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var oe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(oe||(oe={}));const w1={debug:oe.DEBUG,verbose:oe.VERBOSE,info:oe.INFO,warn:oe.WARN,error:oe.ERROR,silent:oe.SILENT},E1=oe.INFO,x1={[oe.DEBUG]:"log",[oe.VERBOSE]:"log",[oe.INFO]:"info",[oe.WARN]:"warn",[oe.ERROR]:"error"},T1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=x1[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class df{constructor(e){this.name=e,this._logLevel=E1,this._logHandler=T1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in oe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?w1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,oe.DEBUG,...e),this._logHandler(this,oe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,oe.VERBOSE,...e),this._logHandler(this,oe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,oe.INFO,...e),this._logHandler(this,oe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,oe.WARN,...e),this._logHandler(this,oe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,oe.ERROR,...e),this._logHandler(this,oe.ERROR,...e)}}const I1=(t,e)=>e.some(n=>t instanceof n);let yg,vg;function S1(){return yg||(yg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function A1(){return vg||(vg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const m0=new WeakMap,$d=new WeakMap,g0=new WeakMap,Lc=new WeakMap,hf=new WeakMap;function C1(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(gr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&m0.set(n,t)}).catch(()=>{}),hf.set(e,t),e}function k1(t){if($d.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});$d.set(t,e)}let zd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||g0.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return gr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function R1(t){zd=t(zd)}function N1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(jc(this),e,...n);return g0.set(r,e.sort?e.sort():[e]),gr(r)}:A1().includes(t)?function(...e){return t.apply(jc(this),e),gr(m0.get(this))}:function(...e){return gr(t.apply(jc(this),e))}}function P1(t){return typeof t=="function"?N1(t):(t instanceof IDBTransaction&&k1(t),I1(t,S1())?new Proxy(t,zd):t)}function gr(t){if(t instanceof IDBRequest)return C1(t);if(Lc.has(t))return Lc.get(t);const e=P1(t);return e!==t&&(Lc.set(t,e),hf.set(e,t)),e}const jc=t=>hf.get(t);function b1(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),l=gr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(gr(o.result),u.oldVersion,u.newVersion,gr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),l}const D1=["get","getKey","getAll","getAllKeys","count"],O1=["put","add","delete","clear"],Fc=new Map;function _g(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fc.get(e))return Fc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=O1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||D1.includes(n)))return;const i=async function(o,...l){const u=this.transaction(o,s?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(l.shift())),(await Promise.all([d[n](...l),s&&u.done]))[0]};return Fc.set(e,i),i}R1(t=>({...t,get:(e,n,r)=>_g(e,n)||t.get(e,n,r),has:(e,n)=>!!_g(e,n)||t.has(e,n)}));/**
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
 */class V1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(M1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function M1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bd="@firebase/app",wg="0.10.13";/**
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
 */const bn=new df("@firebase/app"),L1="@firebase/app-compat",j1="@firebase/analytics-compat",F1="@firebase/analytics",U1="@firebase/app-check-compat",$1="@firebase/app-check",z1="@firebase/auth",B1="@firebase/auth-compat",H1="@firebase/database",q1="@firebase/data-connect",W1="@firebase/database-compat",G1="@firebase/functions",K1="@firebase/functions-compat",Q1="@firebase/installations",Y1="@firebase/installations-compat",X1="@firebase/messaging",J1="@firebase/messaging-compat",Z1="@firebase/performance",eS="@firebase/performance-compat",tS="@firebase/remote-config",nS="@firebase/remote-config-compat",rS="@firebase/storage",sS="@firebase/storage-compat",iS="@firebase/firestore",oS="@firebase/vertexai-preview",aS="@firebase/firestore-compat",lS="firebase",uS="10.14.1";/**
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
 */const Hd="[DEFAULT]",cS={[Bd]:"fire-core",[L1]:"fire-core-compat",[F1]:"fire-analytics",[j1]:"fire-analytics-compat",[$1]:"fire-app-check",[U1]:"fire-app-check-compat",[z1]:"fire-auth",[B1]:"fire-auth-compat",[H1]:"fire-rtdb",[q1]:"fire-data-connect",[W1]:"fire-rtdb-compat",[G1]:"fire-fn",[K1]:"fire-fn-compat",[Q1]:"fire-iid",[Y1]:"fire-iid-compat",[X1]:"fire-fcm",[J1]:"fire-fcm-compat",[Z1]:"fire-perf",[eS]:"fire-perf-compat",[tS]:"fire-rc",[nS]:"fire-rc-compat",[rS]:"fire-gcs",[sS]:"fire-gcs-compat",[iS]:"fire-fst",[aS]:"fire-fst-compat",[oS]:"fire-vertex","fire-js":"fire-js",[lS]:"fire-js-all"};/**
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
 */const Bl=new Map,dS=new Map,qd=new Map;function Eg(t,e){try{t.container.addComponent(e)}catch(n){bn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zs(t){const e=t.name;if(qd.has(e))return bn.debug(`There were multiple attempts to register component ${e}.`),!1;qd.set(e,t);for(const n of Bl.values())Eg(n,t);for(const n of dS.values())Eg(n,t);return!0}function ff(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function or(t){return t.settings!==void 0}/**
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
 */const hS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yr=new Ho("app","Firebase",hS);/**
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
 */class fS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new es("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yr.create("app-deleted",{appName:this._name})}}/**
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
 */const ci=uS;function y0(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Hd,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw yr.create("bad-app-name",{appName:String(s)});if(n||(n=f0()),!n)throw yr.create("no-options");const i=Bl.get(s);if(i){if(zl(n,i.options)&&zl(r,i.config))return i;throw yr.create("duplicate-app",{appName:s})}const o=new _1(s);for(const u of qd.values())o.addComponent(u);const l=new fS(n,r,o);return Bl.set(s,l),l}function v0(t=Hd){const e=Bl.get(t);if(!e&&t===Hd&&f0())return y0();if(!e)throw yr.create("no-app",{appName:t});return e}function vr(t,e,n){var r;let s=(r=cS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),bn.warn(l.join(" "));return}Zs(new es(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const pS="firebase-heartbeat-database",mS=1,Ao="firebase-heartbeat-store";let Uc=null;function _0(){return Uc||(Uc=b1(pS,mS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw yr.create("idb-open",{originalErrorMessage:t.message})})),Uc}async function gS(t){try{const n=(await _0()).transaction(Ao),r=await n.objectStore(Ao).get(w0(t));return await n.done,r}catch(e){if(e instanceof Fn)bn.warn(e.message);else{const n=yr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});bn.warn(n.message)}}}async function xg(t,e){try{const r=(await _0()).transaction(Ao,"readwrite");await r.objectStore(Ao).put(e,w0(t)),await r.done}catch(n){if(n instanceof Fn)bn.warn(n.message);else{const r=yr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});bn.warn(r.message)}}}function w0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const yS=1024,vS=30*24*60*60*1e3;class _S{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ES(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Tg();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)?void 0:(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=vS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){bn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Tg(),{heartbeatsToSend:r,unsentEntries:s}=wS(this._heartbeatsCache.heartbeats),i=$l(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return bn.warn(n),""}}}function Tg(){return new Date().toISOString().substring(0,10)}function wS(t,e=yS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Ig(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ig(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ES{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return a1()?l1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return xg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ig(t){return $l(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function xS(t){Zs(new es("platform-logger",e=>new V1(e),"PRIVATE")),Zs(new es("heartbeat",e=>new _S(e),"PRIVATE")),vr(Bd,wg,t),vr(Bd,wg,"esm2017"),vr("fire-js","")}xS("");function pf(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function E0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const TS=E0,x0=new Ho("auth","Firebase",E0());/**
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
 */const Hl=new df("@firebase/auth");function IS(t,...e){Hl.logLevel<=oe.WARN&&Hl.warn(`Auth (${ci}): ${t}`,...e)}function il(t,...e){Hl.logLevel<=oe.ERROR&&Hl.error(`Auth (${ci}): ${t}`,...e)}/**
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
 */function Dn(t,...e){throw mf(t,...e)}function cn(t,...e){return mf(t,...e)}function T0(t,e,n){const r=Object.assign(Object.assign({},TS()),{[e]:n});return new Ho("auth","Firebase",r).create(e,{appName:t.name})}function Wr(t){return T0(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mf(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return x0.create(t,...e)}function Z(t,e,...n){if(!t)throw mf(e,...n)}function Tn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw il(e),new Error(e)}function On(t,e){t||Tn(e)}/**
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
 */function Wd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function SS(){return Sg()==="http:"||Sg()==="https:"}function Sg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function AS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(SS()||r1()||"connection"in navigator)?navigator.onLine:!0}function CS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,On(n>e,"Short delay should be less than long delay!"),this.isMobile=e1()||s1()}get(){return AS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function gf(t,e){On(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class I0{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const kS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const RS=new Wo(3e4,6e4);function yf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function di(t,e,n,r,s={}){return S0(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const l=qo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d=Object.assign({method:e,headers:u},i);return n1()||(d.referrerPolicy="no-referrer"),I0.fetch()(A0(t,t.config.apiHost,n,l),d)})}async function S0(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},kS),e);try{const s=new PS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ua(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const l=i.ok?o.errorMessage:o.error.message,[u,d]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ua(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ua(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Ua(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw T0(t,p,d);Dn(t,p)}}catch(s){if(s instanceof Fn)throw s;Dn(t,"network-request-failed",{message:String(s)})}}async function NS(t,e,n,r,s={}){const i=await di(t,e,n,r,s);return"mfaPendingCredential"in i&&Dn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function A0(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?gf(t.config,s):`${t.config.apiScheme}://${s}`}class PS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(cn(this.auth,"network-request-failed")),RS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ua(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=cn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function bS(t,e){return di(t,"POST","/v1/accounts:delete",e)}async function C0(t,e){return di(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function to(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function DS(t,e=!1){const n=Ke(t),r=await n.getIdToken(e),s=vf(r);Z(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:to($c(s.auth_time)),issuedAtTime:to($c(s.iat)),expirationTime:to($c(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function $c(t){return Number(t)*1e3}function vf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return il("JWT malformed, contained fewer than 3 sections"),null;try{const s=d0(n);return s?JSON.parse(s):(il("Failed to decode base64 JWT payload"),null)}catch(s){return il("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Ag(t){const e=vf(t);return Z(e,"internal-error"),Z(typeof e.exp<"u","internal-error"),Z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Co(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Fn&&OS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function OS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class VS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Gd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=to(this.lastLoginAt),this.creationTime=to(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ql(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Co(t,C0(n,{idToken:r}));Z(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?k0(i.providerUserInfo):[],l=LS(t.providerData,o),u=t.isAnonymous,d=!(t.email&&i.passwordHash)&&!(l!=null&&l.length),p=u?d:!1,m={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new Gd(i.createdAt,i.lastLoginAt),isAnonymous:p};Object.assign(t,m)}async function MS(t){const e=Ke(t);await ql(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function LS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function k0(t){return t.map(e=>{var{providerId:n}=e,r=pf(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function jS(t,e){const n=await S0(t,{},async()=>{const r=qo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=A0(t,s,"/v1/token",`key=${i}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",I0.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FS(t,e){return di(t,"POST","/v2/accounts:revokeToken",yf(t,e))}/**
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
 */class zs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Z(e.idToken,"internal-error"),Z(typeof e.idToken<"u","internal-error"),Z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ag(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Z(e.length!==0,"internal-error");const n=Ag(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await jS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new zs;return r&&(Z(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Z(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Z(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new zs,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function qn(t,e){Z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class In{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=pf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new VS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Gd(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Co(this,this.stsTokenManager.getToken(this.auth,e));return Z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return DS(this,e)}reload(){return MS(this)}_assign(e){this!==e&&(Z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new In(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ql(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(or(this.auth.app))return Promise.reject(Wr(this.auth));const e=await this.getIdToken();return await Co(this,bS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,l,u,d,p;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,T=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,O=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,C=(d=n.createdAt)!==null&&d!==void 0?d:void 0,w=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:A,emailVerified:D,isAnonymous:$,providerData:U,stsTokenManager:x}=n;Z(A&&x,e,"internal-error");const v=zs.fromJSON(this.name,x);Z(typeof A=="string",e,"internal-error"),qn(m,e.name),qn(g,e.name),Z(typeof D=="boolean",e,"internal-error"),Z(typeof $=="boolean",e,"internal-error"),qn(_,e.name),qn(T,e.name),qn(N,e.name),qn(O,e.name),qn(C,e.name),qn(w,e.name);const E=new In({uid:A,auth:e,email:g,emailVerified:D,displayName:m,isAnonymous:$,photoURL:T,phoneNumber:_,tenantId:N,stsTokenManager:v,createdAt:C,lastLoginAt:w});return U&&Array.isArray(U)&&(E.providerData=U.map(I=>Object.assign({},I))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new zs;s.updateFromServerResponse(n);const i=new In({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ql(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Z(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?k0(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new zs;l.updateFromIdToken(r);const u=new In({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:o}),d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Gd(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,d),u}}/**
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
 */const Cg=new Map;function Sn(t){On(t instanceof Function,"Expected a class definition");let e=Cg.get(t);return e?(On(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cg.set(t,e),e)}/**
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
 */class R0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}R0.type="NONE";const kg=R0;/**
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
 */function ol(t,e,n){return`firebase:${t}:${e}:${n}`}class Bs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ol(this.userKey,s.apiKey,i),this.fullPersistenceKey=ol("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?In._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Bs(Sn(kg),e,r);const s=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let i=s[0]||Sn(kg);const o=ol(r,e.config.apiKey,e.name);let l=null;for(const d of n)try{const p=await d._get(o);if(p){const m=In._fromJSON(e,p);d!==i&&(l=m),i=d;break}}catch{}const u=s.filter(d=>d._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Bs(i,e,r):(i=u[0],l&&await i._set(o,l.toJSON()),await Promise.all(n.map(async d=>{if(d!==i)try{await d._remove(o)}catch{}})),new Bs(i,e,r))}}/**
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
 */function Rg(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(D0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(N0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(V0(e))return"Blackberry";if(M0(e))return"Webos";if(P0(e))return"Safari";if((e.includes("chrome/")||b0(e))&&!e.includes("edge/"))return"Chrome";if(O0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function N0(t=mt()){return/firefox\//i.test(t)}function P0(t=mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function b0(t=mt()){return/crios\//i.test(t)}function D0(t=mt()){return/iemobile/i.test(t)}function O0(t=mt()){return/android/i.test(t)}function V0(t=mt()){return/blackberry/i.test(t)}function M0(t=mt()){return/webos/i.test(t)}function _f(t=mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function US(t=mt()){var e;return _f(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function $S(){return i1()&&document.documentMode===10}function L0(t=mt()){return _f(t)||O0(t)||M0(t)||V0(t)||/windows phone/i.test(t)||D0(t)}/**
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
 */function j0(t,e=[]){let n;switch(t){case"Browser":n=Rg(mt());break;case"Worker":n=`${Rg(mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ci}/${r}`}/**
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
 */class zS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,l)=>{try{const u=e(i);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function BS(t,e={}){return di(t,"GET","/v2/passwordPolicy",yf(t,e))}/**
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
 */const HS=6;class qS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:HS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsLowercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(i=u.containsUppercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class WS{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ng(this),this.idTokenSubscription=new Ng(this),this.beforeStateQueue=new zS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=x0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Sn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Bs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await C0(this,{idToken:e}),r=await In._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(or(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=s==null?void 0:s._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(s=u.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ql(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=CS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(or(this.app))return Promise.reject(Wr(this));const n=e?Ke(e):null;return n&&Z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return or(this.app)?Promise.reject(Wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return or(this.app)?Promise.reject(Wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Sn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await BS(this),n=new qS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ho("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await FS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Sn(e)||this._popupRedirectResolver;Z(n,this,"argument-error"),this.redirectPersistenceManager=await Bs.create(this,[Sn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(Z(l,this,"internal-error"),l.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,s);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=j0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&IS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wf(t){return Ke(t)}class Ng{constructor(e){this.auth=e,this.observer=null,this.addObserver=f1(n=>this.observer=n)}get next(){return Z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Ef={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GS(t){Ef=t}function KS(t){return Ef.loadJS(t)}function QS(){return Ef.gapiScript}function YS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function XS(t,e){const n=ff(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(zl(i,e??{}))return s;Dn(s,"already-initialized")}return n.initialize({options:e})}function JS(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Sn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ZS(t,e,n){const r=wf(t);Z(r._canInitEmulator,r,"emulator-config-failed"),Z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=F0(e),{host:o,port:l}=eA(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${i}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),tA()}function F0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function eA(t){const e=F0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Pg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Pg(o)}}}function Pg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function tA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class U0{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,n){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
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
 */async function Hs(t,e){return NS(t,"POST","/v1/accounts:signInWithIdp",yf(t,e))}/**
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
 */const nA="http://localhost";class ts extends U0{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=pf(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hs(e,n)}buildRequest(){const e={requestUri:nA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=qo(n)}return e}}/**
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
 */class $0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Go extends $0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Zn extends Go{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
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
 */class er extends Go{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
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
 */class tr extends Go{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends Go{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */class ei{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await In._fromIdTokenResponse(e,r,s),o=bg(r);return new ei({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=bg(r);return new ei({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function bg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Wl extends Fn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Wl.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Wl(e,n,r,s)}}function z0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Wl._fromErrorAndOperation(t,i,e,r):i})}async function rA(t,e,n=!1){const r=await Co(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ei._forOperation(t,"link",r)}/**
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
 */async function sA(t,e,n=!1){const{auth:r}=t;if(or(r.app))return Promise.reject(Wr(r));const s="reauthenticate";try{const i=await Co(t,z0(r,s,e,t),n);Z(i.idToken,r,"internal-error");const o=vf(i.idToken);Z(o,r,"internal-error");const{sub:l}=o;return Z(t.uid===l,r,"user-mismatch"),ei._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dn(r,"user-mismatch"),i}}/**
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
 */async function iA(t,e,n=!1){if(or(t.app))return Promise.reject(Wr(t));const r="signIn",s=await z0(t,r,e),i=await ei._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function oA(t,e,n,r){return Ke(t).onIdTokenChanged(e,n,r)}function aA(t,e,n){return Ke(t).beforeAuthStateChanged(e,n)}function lA(t,e,n,r){return Ke(t).onAuthStateChanged(e,n,r)}function uA(t){return Ke(t).signOut()}const Gl="__sak";/**
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
 */class B0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Gl,"1"),this.storage.removeItem(Gl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const cA=1e3,dA=10;class H0 extends B0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=L0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);$S()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,dA):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},cA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}H0.type="LOCAL";const hA=H0;/**
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
 */class q0 extends B0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}q0.type="SESSION";const W0=q0;/**
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
 */function fA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class wu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new wu(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(o).map(async d=>d(n.origin,i)),u=await fA(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}wu.receivers=[];/**
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
 */function xf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class pA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((l,u)=>{const d=xf("",20);s.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(m){const g=m;if(g.data.eventId===d)switch(g.data.status){case"ack":clearTimeout(p),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(g.data.response);break;default:clearTimeout(p),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function dn(){return window}function mA(t){dn().location.href=t}/**
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
 */function G0(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function gA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function vA(){return G0()?self:null}/**
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
 */const K0="firebaseLocalStorageDb",_A=1,Kl="firebaseLocalStorage",Q0="fbase_key";class Ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Eu(t,e){return t.transaction([Kl],e?"readwrite":"readonly").objectStore(Kl)}function wA(){const t=indexedDB.deleteDatabase(K0);return new Ko(t).toPromise()}function Kd(){const t=indexedDB.open(K0,_A);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Kl,{keyPath:Q0})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Kl)?e(r):(r.close(),await wA(),e(await Kd()))})})}async function Dg(t,e,n){const r=Eu(t,!0).put({[Q0]:e,value:n});return new Ko(r).toPromise()}async function EA(t,e){const n=Eu(t,!1).get(e),r=await new Ko(n).toPromise();return r===void 0?null:r.value}function Og(t,e){const n=Eu(t,!0).delete(e);return new Ko(n).toPromise()}const xA=800,TA=3;class Y0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>TA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wu._getInstance(vA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await gA(),!this.activeServiceWorker)return;this.sender=new pA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kd();return await Dg(e,Gl,"1"),await Og(e,Gl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Dg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>EA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Eu(s,!1).getAll();return new Ko(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),xA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Y0.type="LOCAL";const IA=Y0;new Wo(3e4,6e4);/**
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
 */function SA(t,e){return e?Sn(e):(Z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Tf extends U0{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function AA(t){return iA(t.auth,new Tf(t),t.bypassAuthState)}function CA(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),sA(n,new Tf(t),t.bypassAuthState)}async function kA(t){const{auth:e,user:n}=t;return Z(n,e,"internal-error"),rA(n,new Tf(t),t.bypassAuthState)}/**
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
 */class X0{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return AA;case"linkViaPopup":case"linkViaRedirect":return kA;case"reauthViaPopup":case"reauthViaRedirect":return CA;default:Dn(this.auth,"internal-error")}}resolve(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){On(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const RA=new Wo(2e3,1e4);class Os extends X0{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Os.currentPopupAction&&Os.currentPopupAction.cancel(),Os.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Z(e,this.auth,"internal-error"),e}async onExecution(){On(this.filter.length===1,"Popup operations only handle one event");const e=xf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(cn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(cn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Os.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(cn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,RA.get())};e()}}Os.currentPopupAction=null;/**
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
 */const NA="pendingRedirect",al=new Map;class PA extends X0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=al.get(this.auth._key());if(!e){try{const r=await bA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}al.set(this.auth._key(),e)}return this.bypassAuthState||al.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bA(t,e){const n=VA(e),r=OA(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function DA(t,e){al.set(t._key(),e)}function OA(t){return Sn(t._redirectPersistence)}function VA(t){return ol(NA,t.config.apiKey,t.name)}async function MA(t,e,n=!1){if(or(t.app))return Promise.reject(Wr(t));const r=wf(t),s=SA(r,e),o=await new PA(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const LA=10*60*1e3;class jA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!FA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!J0(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(cn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=LA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vg(e))}saveEventToCache(e){this.cachedEventUids.add(Vg(e)),this.lastProcessedEventTime=Date.now()}}function Vg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function FA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J0(t);default:return!1}}/**
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
 */async function UA(t,e={}){return di(t,"GET","/v1/projects",e)}/**
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
 */const $A=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zA=/^https?/;async function BA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await UA(t);for(const n of e)try{if(HA(n))return}catch{}Dn(t,"unauthorized-domain")}function HA(t){const e=Wd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!zA.test(n))return!1;if($A.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const qA=new Wo(3e4,6e4);function Mg(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function WA(t){return new Promise((e,n)=>{var r,s,i;function o(){Mg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Mg(),n(cn(t,"network-request-failed"))},timeout:qA.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const l=YS("iframefcb");return dn()[l]=()=>{gapi.load?o():n(cn(t,"network-request-failed"))},KS(`${QS()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ll=null,e})}let ll=null;function GA(t){return ll=ll||WA(t),ll}/**
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
 */const KA=new Wo(5e3,15e3),QA="__/auth/iframe",YA="emulator/auth/iframe",XA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},JA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ZA(t){const e=t.config;Z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gf(e,YA):`https://${t.config.authDomain}/${QA}`,r={apiKey:e.apiKey,appName:t.name,v:ci},s=JA.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${qo(r).slice(1)}`}async function eC(t){const e=await GA(t),n=dn().gapi;return Z(n,t,"internal-error"),e.open({where:document.body,url:ZA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:XA,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=cn(t,"network-request-failed"),l=dn().setTimeout(()=>{i(o)},KA.get());function u(){dn().clearTimeout(l),s(r)}r.ping(u).then(u,()=>{i(o)})}))}/**
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
 */const tC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},nC=500,rC=600,sC="_blank",iC="http://localhost";class Lg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oC(t,e,n,r=nC,s=rC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},tC),{width:r.toString(),height:s.toString(),top:i,left:o}),d=mt().toLowerCase();n&&(l=b0(d)?sC:n),N0(d)&&(e=e||iC,u.scrollbars="yes");const p=Object.entries(u).reduce((g,[_,T])=>`${g}${_}=${T},`,"");if(US(d)&&l!=="_self")return aC(e||"",l),new Lg(null);const m=window.open(e||"",l,p);Z(m,t,"popup-blocked");try{m.focus()}catch{}return new Lg(m)}function aC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const lC="__/auth/handler",uC="emulator/auth/handler",cC=encodeURIComponent("fac");async function jg(t,e,n,r,s,i){Z(t.config.authDomain,t,"auth-domain-config-required"),Z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ci,eventId:s};if(e instanceof $0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",h1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,m]of Object.entries({}))o[p]=m}if(e instanceof Go){const p=e.getScopes().filter(m=>m!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),d=u?`#${cC}=${encodeURIComponent(u)}`:"";return`${dC(t)}?${qo(l).slice(1)}${d}`}function dC({config:t}){return t.emulator?gf(t,uC):`https://${t.authDomain}/${lC}`}/**
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
 */const zc="webStorageSupport";class hC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=W0,this._completeRedirectFn=MA,this._overrideRedirectResult=DA}async _openPopup(e,n,r,s){var i;On((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await jg(e,n,r,Wd(),s);return oC(e,o,xf())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await jg(e,n,r,Wd(),s);return mA(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(On(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await eC(e),r=new jA(e);return n.register("authEvent",s=>(Z(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zc,{type:zc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[zc];o!==void 0&&n(!!o),Dn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return L0()||P0()||_f()}}const fC=hC;var Fg="@firebase/auth",Ug="1.7.9";/**
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
 */class pC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function mC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function gC(t){Zs(new es("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;Z(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:j0(t)},d=new WS(r,s,i,u);return JS(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zs(new es("auth-internal",e=>{const n=wf(e.getProvider("auth").getImmediate());return(r=>new pC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vr(Fg,Ug,mC(t)),vr(Fg,Ug,"esm2017")}/**
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
 */const yC=5*60,vC=p0("authIdTokenMaxAge")||yC;let $g=null;const _C=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>vC)return;const s=n==null?void 0:n.token;$g!==s&&($g=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function wC(t=v0()){const e=ff(t,"auth");if(e.isInitialized())return e.getImmediate();const n=XS(t,{popupRedirectResolver:fC,persistence:[IA,hA,W0]}),r=p0("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=_C(i.toString());aA(n,o,()=>o(n.currentUser)),oA(n,l=>o(l))}}const s=h0("auth");return s&&ZS(n,`http://${s}`),n}function EC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GS({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=cn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",EC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});gC("Browser");var xC="firebase",TC="10.14.1";/**
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
 */vr(xC,TC,"app");var zg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gr,Z0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(x,v){function E(){}E.prototype=v.prototype,x.D=v.prototype,x.prototype=new E,x.prototype.constructor=x,x.C=function(I,k,R){for(var S=Array(arguments.length-2),Me=2;Me<arguments.length;Me++)S[Me-2]=arguments[Me];return v.prototype[k].apply(I,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(x,v,E){E||(E=0);var I=Array(16);if(typeof v=="string")for(var k=0;16>k;++k)I[k]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(k=0;16>k;++k)I[k]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=x.g[0],E=x.g[1],k=x.g[2];var R=x.g[3],S=v+(R^E&(k^R))+I[0]+3614090360&4294967295;v=E+(S<<7&4294967295|S>>>25),S=R+(k^v&(E^k))+I[1]+3905402710&4294967295,R=v+(S<<12&4294967295|S>>>20),S=k+(E^R&(v^E))+I[2]+606105819&4294967295,k=R+(S<<17&4294967295|S>>>15),S=E+(v^k&(R^v))+I[3]+3250441966&4294967295,E=k+(S<<22&4294967295|S>>>10),S=v+(R^E&(k^R))+I[4]+4118548399&4294967295,v=E+(S<<7&4294967295|S>>>25),S=R+(k^v&(E^k))+I[5]+1200080426&4294967295,R=v+(S<<12&4294967295|S>>>20),S=k+(E^R&(v^E))+I[6]+2821735955&4294967295,k=R+(S<<17&4294967295|S>>>15),S=E+(v^k&(R^v))+I[7]+4249261313&4294967295,E=k+(S<<22&4294967295|S>>>10),S=v+(R^E&(k^R))+I[8]+1770035416&4294967295,v=E+(S<<7&4294967295|S>>>25),S=R+(k^v&(E^k))+I[9]+2336552879&4294967295,R=v+(S<<12&4294967295|S>>>20),S=k+(E^R&(v^E))+I[10]+4294925233&4294967295,k=R+(S<<17&4294967295|S>>>15),S=E+(v^k&(R^v))+I[11]+2304563134&4294967295,E=k+(S<<22&4294967295|S>>>10),S=v+(R^E&(k^R))+I[12]+1804603682&4294967295,v=E+(S<<7&4294967295|S>>>25),S=R+(k^v&(E^k))+I[13]+4254626195&4294967295,R=v+(S<<12&4294967295|S>>>20),S=k+(E^R&(v^E))+I[14]+2792965006&4294967295,k=R+(S<<17&4294967295|S>>>15),S=E+(v^k&(R^v))+I[15]+1236535329&4294967295,E=k+(S<<22&4294967295|S>>>10),S=v+(k^R&(E^k))+I[1]+4129170786&4294967295,v=E+(S<<5&4294967295|S>>>27),S=R+(E^k&(v^E))+I[6]+3225465664&4294967295,R=v+(S<<9&4294967295|S>>>23),S=k+(v^E&(R^v))+I[11]+643717713&4294967295,k=R+(S<<14&4294967295|S>>>18),S=E+(R^v&(k^R))+I[0]+3921069994&4294967295,E=k+(S<<20&4294967295|S>>>12),S=v+(k^R&(E^k))+I[5]+3593408605&4294967295,v=E+(S<<5&4294967295|S>>>27),S=R+(E^k&(v^E))+I[10]+38016083&4294967295,R=v+(S<<9&4294967295|S>>>23),S=k+(v^E&(R^v))+I[15]+3634488961&4294967295,k=R+(S<<14&4294967295|S>>>18),S=E+(R^v&(k^R))+I[4]+3889429448&4294967295,E=k+(S<<20&4294967295|S>>>12),S=v+(k^R&(E^k))+I[9]+568446438&4294967295,v=E+(S<<5&4294967295|S>>>27),S=R+(E^k&(v^E))+I[14]+3275163606&4294967295,R=v+(S<<9&4294967295|S>>>23),S=k+(v^E&(R^v))+I[3]+4107603335&4294967295,k=R+(S<<14&4294967295|S>>>18),S=E+(R^v&(k^R))+I[8]+1163531501&4294967295,E=k+(S<<20&4294967295|S>>>12),S=v+(k^R&(E^k))+I[13]+2850285829&4294967295,v=E+(S<<5&4294967295|S>>>27),S=R+(E^k&(v^E))+I[2]+4243563512&4294967295,R=v+(S<<9&4294967295|S>>>23),S=k+(v^E&(R^v))+I[7]+1735328473&4294967295,k=R+(S<<14&4294967295|S>>>18),S=E+(R^v&(k^R))+I[12]+2368359562&4294967295,E=k+(S<<20&4294967295|S>>>12),S=v+(E^k^R)+I[5]+4294588738&4294967295,v=E+(S<<4&4294967295|S>>>28),S=R+(v^E^k)+I[8]+2272392833&4294967295,R=v+(S<<11&4294967295|S>>>21),S=k+(R^v^E)+I[11]+1839030562&4294967295,k=R+(S<<16&4294967295|S>>>16),S=E+(k^R^v)+I[14]+4259657740&4294967295,E=k+(S<<23&4294967295|S>>>9),S=v+(E^k^R)+I[1]+2763975236&4294967295,v=E+(S<<4&4294967295|S>>>28),S=R+(v^E^k)+I[4]+1272893353&4294967295,R=v+(S<<11&4294967295|S>>>21),S=k+(R^v^E)+I[7]+4139469664&4294967295,k=R+(S<<16&4294967295|S>>>16),S=E+(k^R^v)+I[10]+3200236656&4294967295,E=k+(S<<23&4294967295|S>>>9),S=v+(E^k^R)+I[13]+681279174&4294967295,v=E+(S<<4&4294967295|S>>>28),S=R+(v^E^k)+I[0]+3936430074&4294967295,R=v+(S<<11&4294967295|S>>>21),S=k+(R^v^E)+I[3]+3572445317&4294967295,k=R+(S<<16&4294967295|S>>>16),S=E+(k^R^v)+I[6]+76029189&4294967295,E=k+(S<<23&4294967295|S>>>9),S=v+(E^k^R)+I[9]+3654602809&4294967295,v=E+(S<<4&4294967295|S>>>28),S=R+(v^E^k)+I[12]+3873151461&4294967295,R=v+(S<<11&4294967295|S>>>21),S=k+(R^v^E)+I[15]+530742520&4294967295,k=R+(S<<16&4294967295|S>>>16),S=E+(k^R^v)+I[2]+3299628645&4294967295,E=k+(S<<23&4294967295|S>>>9),S=v+(k^(E|~R))+I[0]+4096336452&4294967295,v=E+(S<<6&4294967295|S>>>26),S=R+(E^(v|~k))+I[7]+1126891415&4294967295,R=v+(S<<10&4294967295|S>>>22),S=k+(v^(R|~E))+I[14]+2878612391&4294967295,k=R+(S<<15&4294967295|S>>>17),S=E+(R^(k|~v))+I[5]+4237533241&4294967295,E=k+(S<<21&4294967295|S>>>11),S=v+(k^(E|~R))+I[12]+1700485571&4294967295,v=E+(S<<6&4294967295|S>>>26),S=R+(E^(v|~k))+I[3]+2399980690&4294967295,R=v+(S<<10&4294967295|S>>>22),S=k+(v^(R|~E))+I[10]+4293915773&4294967295,k=R+(S<<15&4294967295|S>>>17),S=E+(R^(k|~v))+I[1]+2240044497&4294967295,E=k+(S<<21&4294967295|S>>>11),S=v+(k^(E|~R))+I[8]+1873313359&4294967295,v=E+(S<<6&4294967295|S>>>26),S=R+(E^(v|~k))+I[15]+4264355552&4294967295,R=v+(S<<10&4294967295|S>>>22),S=k+(v^(R|~E))+I[6]+2734768916&4294967295,k=R+(S<<15&4294967295|S>>>17),S=E+(R^(k|~v))+I[13]+1309151649&4294967295,E=k+(S<<21&4294967295|S>>>11),S=v+(k^(E|~R))+I[4]+4149444226&4294967295,v=E+(S<<6&4294967295|S>>>26),S=R+(E^(v|~k))+I[11]+3174756917&4294967295,R=v+(S<<10&4294967295|S>>>22),S=k+(v^(R|~E))+I[2]+718787259&4294967295,k=R+(S<<15&4294967295|S>>>17),S=E+(R^(k|~v))+I[9]+3951481745&4294967295,x.g[0]=x.g[0]+v&4294967295,x.g[1]=x.g[1]+(k+(S<<21&4294967295|S>>>11))&4294967295,x.g[2]=x.g[2]+k&4294967295,x.g[3]=x.g[3]+R&4294967295}r.prototype.u=function(x,v){v===void 0&&(v=x.length);for(var E=v-this.blockSize,I=this.B,k=this.h,R=0;R<v;){if(k==0)for(;R<=E;)s(this,x,R),R+=this.blockSize;if(typeof x=="string"){for(;R<v;)if(I[k++]=x.charCodeAt(R++),k==this.blockSize){s(this,I),k=0;break}}else for(;R<v;)if(I[k++]=x[R++],k==this.blockSize){s(this,I),k=0;break}}this.h=k,this.o+=v},r.prototype.v=function(){var x=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);x[0]=128;for(var v=1;v<x.length-8;++v)x[v]=0;var E=8*this.o;for(v=x.length-8;v<x.length;++v)x[v]=E&255,E/=256;for(this.u(x),x=Array(16),v=E=0;4>v;++v)for(var I=0;32>I;I+=8)x[E++]=this.g[v]>>>I&255;return x};function i(x,v){var E=l;return Object.prototype.hasOwnProperty.call(E,x)?E[x]:E[x]=v(x)}function o(x,v){this.h=v;for(var E=[],I=!0,k=x.length-1;0<=k;k--){var R=x[k]|0;I&&R==v||(E[k]=R,I=!1)}this.g=E}var l={};function u(x){return-128<=x&&128>x?i(x,function(v){return new o([v|0],0>v?-1:0)}):new o([x|0],0>x?-1:0)}function d(x){if(isNaN(x)||!isFinite(x))return m;if(0>x)return O(d(-x));for(var v=[],E=1,I=0;x>=E;I++)v[I]=x/E|0,E*=4294967296;return new o(v,0)}function p(x,v){if(x.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(x.charAt(0)=="-")return O(p(x.substring(1),v));if(0<=x.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=d(Math.pow(v,8)),I=m,k=0;k<x.length;k+=8){var R=Math.min(8,x.length-k),S=parseInt(x.substring(k,k+R),v);8>R?(R=d(Math.pow(v,R)),I=I.j(R).add(d(S))):(I=I.j(E),I=I.add(d(S)))}return I}var m=u(0),g=u(1),_=u(16777216);t=o.prototype,t.m=function(){if(N(this))return-O(this).m();for(var x=0,v=1,E=0;E<this.g.length;E++){var I=this.i(E);x+=(0<=I?I:4294967296+I)*v,v*=4294967296}return x},t.toString=function(x){if(x=x||10,2>x||36<x)throw Error("radix out of range: "+x);if(T(this))return"0";if(N(this))return"-"+O(this).toString(x);for(var v=d(Math.pow(x,6)),E=this,I="";;){var k=D(E,v).g;E=C(E,k.j(v));var R=((0<E.g.length?E.g[0]:E.h)>>>0).toString(x);if(E=k,T(E))return R+I;for(;6>R.length;)R="0"+R;I=R+I}},t.i=function(x){return 0>x?0:x<this.g.length?this.g[x]:this.h};function T(x){if(x.h!=0)return!1;for(var v=0;v<x.g.length;v++)if(x.g[v]!=0)return!1;return!0}function N(x){return x.h==-1}t.l=function(x){return x=C(this,x),N(x)?-1:T(x)?0:1};function O(x){for(var v=x.g.length,E=[],I=0;I<v;I++)E[I]=~x.g[I];return new o(E,~x.h).add(g)}t.abs=function(){return N(this)?O(this):this},t.add=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0,k=0;k<=v;k++){var R=I+(this.i(k)&65535)+(x.i(k)&65535),S=(R>>>16)+(this.i(k)>>>16)+(x.i(k)>>>16);I=S>>>16,R&=65535,S&=65535,E[k]=S<<16|R}return new o(E,E[E.length-1]&-2147483648?-1:0)};function C(x,v){return x.add(O(v))}t.j=function(x){if(T(this)||T(x))return m;if(N(this))return N(x)?O(this).j(O(x)):O(O(this).j(x));if(N(x))return O(this.j(O(x)));if(0>this.l(_)&&0>x.l(_))return d(this.m()*x.m());for(var v=this.g.length+x.g.length,E=[],I=0;I<2*v;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var k=0;k<x.g.length;k++){var R=this.i(I)>>>16,S=this.i(I)&65535,Me=x.i(k)>>>16,J=x.i(k)&65535;E[2*I+2*k]+=S*J,w(E,2*I+2*k),E[2*I+2*k+1]+=R*J,w(E,2*I+2*k+1),E[2*I+2*k+1]+=S*Me,w(E,2*I+2*k+1),E[2*I+2*k+2]+=R*Me,w(E,2*I+2*k+2)}for(I=0;I<v;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=v;I<2*v;I++)E[I]=0;return new o(E,0)};function w(x,v){for(;(x[v]&65535)!=x[v];)x[v+1]+=x[v]>>>16,x[v]&=65535,v++}function A(x,v){this.g=x,this.h=v}function D(x,v){if(T(v))throw Error("division by zero");if(T(x))return new A(m,m);if(N(x))return v=D(O(x),v),new A(O(v.g),O(v.h));if(N(v))return v=D(x,O(v)),new A(O(v.g),v.h);if(30<x.g.length){if(N(x)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var E=g,I=v;0>=I.l(x);)E=$(E),I=$(I);var k=U(E,1),R=U(I,1);for(I=U(I,2),E=U(E,2);!T(I);){var S=R.add(I);0>=S.l(x)&&(k=k.add(E),R=S),I=U(I,1),E=U(E,1)}return v=C(x,k.j(v)),new A(k,v)}for(k=m;0<=x.l(v);){for(E=Math.max(1,Math.floor(x.m()/v.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),R=d(E),S=R.j(v);N(S)||0<S.l(x);)E-=I,R=d(E),S=R.j(v);T(R)&&(R=g),k=k.add(R),x=C(x,S)}return new A(k,x)}t.A=function(x){return D(this,x).h},t.and=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)&x.i(I);return new o(E,this.h&x.h)},t.or=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)|x.i(I);return new o(E,this.h|x.h)},t.xor=function(x){for(var v=Math.max(this.g.length,x.g.length),E=[],I=0;I<v;I++)E[I]=this.i(I)^x.i(I);return new o(E,this.h^x.h)};function $(x){for(var v=x.g.length+1,E=[],I=0;I<v;I++)E[I]=x.i(I)<<1|x.i(I-1)>>>31;return new o(E,x.h)}function U(x,v){var E=v>>5;v%=32;for(var I=x.g.length-E,k=[],R=0;R<I;R++)k[R]=0<v?x.i(R+E)>>>v|x.i(R+E+1)<<32-v:x.i(R+E);return new o(k,x.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Z0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=p,Gr=o}).apply(typeof zg<"u"?zg:typeof self<"u"?self:typeof window<"u"?window:{});var $a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ew,Bi,tw,ul,Qd,nw,rw,sw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,f){return a==Array.prototype||a==Object.prototype||(a[c]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof $a=="object"&&$a];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,c){if(c)e:{var f=r;a=a.split(".");for(var y=0;y<a.length-1;y++){var P=a[y];if(!(P in f))break e;f=f[P]}a=a[a.length-1],y=f[a],c=c(y),c!=y&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}function i(a,c){a instanceof String&&(a+="");var f=0,y=!1,P={next:function(){if(!y&&f<a.length){var b=f++;return{value:c(b,a[b]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(c,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function d(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function p(a,c,f){return a.call.apply(a.bind,arguments)}function m(a,c,f){if(!a)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),a.apply(c,P)}}return function(){return a.apply(c,arguments)}}function g(a,c,f){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?p:m,g.apply(null,arguments)}function _(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var y=f.slice();return y.push.apply(y,arguments),a.apply(this,y)}}function T(a,c){function f(){}f.prototype=c.prototype,a.aa=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(y,P,b){for(var H=Array(arguments.length-2),_e=2;_e<arguments.length;_e++)H[_e-2]=arguments[_e];return c.prototype[P].apply(y,H)}}function N(a){const c=a.length;if(0<c){const f=Array(c);for(let y=0;y<c;y++)f[y]=a[y];return f}return[]}function O(a,c){for(let f=1;f<arguments.length;f++){const y=arguments[f];if(u(y)){const P=a.length||0,b=y.length||0;a.length=P+b;for(let H=0;H<b;H++)a[P+H]=y[H]}else a.push(y)}}class C{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function w(a){return/^[\s\xa0]*$/.test(a)}function A(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function D(a){return D[" "](a),a}D[" "]=function(){};var $=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function U(a,c,f){for(const y in a)c.call(f,a[y],y,a)}function x(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function v(a){const c={};for(const f in a)c[f]=a[f];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(a,c){let f,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(f in y)a[f]=y[f];for(let b=0;b<E.length;b++)f=E[b],Object.prototype.hasOwnProperty.call(y,f)&&(a[f]=y[f])}}function k(a){var c=1;a=a.split(":");const f=[];for(;0<c&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function R(a){l.setTimeout(()=>{throw a},0)}function S(){var a=z;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Me{constructor(){this.h=this.g=null}add(c,f){const y=J.get();y.set(c,f),this.h?this.h.next=y:this.g=y,this.h=y}}var J=new C(()=>new B,a=>a.reset());class B{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let q,V=!1,z=new Me,Q=()=>{const a=l.Promise.resolve(void 0);q=()=>{a.then(ue)}};var ue=()=>{for(var a;a=S();){try{a.h.call(a.g)}catch(f){R(f)}var c=J;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}V=!1};function se(){this.s=this.s,this.C=this.C}se.prototype.s=!1,se.prototype.ma=function(){this.s||(this.s=!0,this.N())},se.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function me(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}me.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};l.addEventListener("test",f,c),l.removeEventListener("test",f,c)}catch{}return a}();function Pe(a,c){if(me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,y=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if($){e:{try{D(c.nodeName);var P=!0;break e}catch{}P=!1}P||(c=null)}}else f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement);this.relatedTarget=c,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:ve[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pe.aa.h.call(this)}}T(Pe,me);var ve={2:"touch",3:"pen",4:"mouse"};Pe.prototype.h=function(){Pe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ce="closure_listenable_"+(1e6*Math.random()|0),nn=0;function gi(a,c,f,y,P){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!y,this.ha=P,this.key=++nn,this.da=this.fa=!1}function j(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function Ye(a){this.src=a,this.g={},this.h=0}Ye.prototype.add=function(a,c,f,y,P){var b=a.toString();a=this.g[b],a||(a=this.g[b]=[],this.h++);var H=Un(a,c,y,P);return-1<H?(c=a[H],f||(c.fa=!1)):(c=new gi(c,this.src,b,!!y,P),c.fa=f,a.push(c)),c};function gt(a,c){var f=c.type;if(f in a.g){var y=a.g[f],P=Array.prototype.indexOf.call(y,c,void 0),b;(b=0<=P)&&Array.prototype.splice.call(y,P,1),b&&(j(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Un(a,c,f,y){for(var P=0;P<a.length;++P){var b=a[P];if(!b.da&&b.listener==c&&b.capture==!!f&&b.ha==y)return P}return-1}var mn="closure_lm_"+(1e6*Math.random()|0),Hu={};function ap(a,c,f,y,P){if(Array.isArray(c)){for(var b=0;b<c.length;b++)ap(a,c[b],f,y,P);return null}return f=cp(f),a&&a[ce]?a.K(c,f,d(y)?!!y.capture:!1,P):$E(a,c,f,!1,y,P)}function $E(a,c,f,y,P,b){if(!c)throw Error("Invalid event type");var H=d(P)?!!P.capture:!!P,_e=Wu(a);if(_e||(a[mn]=_e=new Ye(a)),f=_e.add(c,f,y,H,b),f.proxy)return f;if(y=zE(),f.proxy=y,y.src=a,y.listener=f,a.addEventListener)ye||(P=H),P===void 0&&(P=!1),a.addEventListener(c.toString(),y,P);else if(a.attachEvent)a.attachEvent(up(c.toString()),y);else if(a.addListener&&a.removeListener)a.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return f}function zE(){function a(f){return c.call(a.src,a.listener,f)}const c=BE;return a}function lp(a,c,f,y,P){if(Array.isArray(c))for(var b=0;b<c.length;b++)lp(a,c[b],f,y,P);else y=d(y)?!!y.capture:!!y,f=cp(f),a&&a[ce]?(a=a.i,c=String(c).toString(),c in a.g&&(b=a.g[c],f=Un(b,f,y,P),-1<f&&(j(b[f]),Array.prototype.splice.call(b,f,1),b.length==0&&(delete a.g[c],a.h--)))):a&&(a=Wu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Un(c,f,y,P)),(f=-1<a?c[a]:null)&&qu(f))}function qu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[ce])gt(c.i,a);else{var f=a.type,y=a.proxy;c.removeEventListener?c.removeEventListener(f,y,a.capture):c.detachEvent?c.detachEvent(up(f),y):c.addListener&&c.removeListener&&c.removeListener(y),(f=Wu(c))?(gt(f,a),f.h==0&&(f.src=null,c[mn]=null)):j(a)}}}function up(a){return a in Hu?Hu[a]:Hu[a]="on"+a}function BE(a,c){if(a.da)a=!0;else{c=new Pe(c,this);var f=a.listener,y=a.ha||a.src;a.fa&&qu(a),a=f.call(y,c)}return a}function Wu(a){return a=a[mn],a instanceof Ye?a:null}var Gu="__closure_events_fn_"+(1e9*Math.random()>>>0);function cp(a){return typeof a=="function"?a:(a[Gu]||(a[Gu]=function(c){return a.handleEvent(c)}),a[Gu])}function rt(){se.call(this),this.i=new Ye(this),this.M=this,this.F=null}T(rt,se),rt.prototype[ce]=!0,rt.prototype.removeEventListener=function(a,c,f,y){lp(this,a,c,f,y)};function yt(a,c){var f,y=a.F;if(y)for(f=[];y;y=y.F)f.push(y);if(a=a.M,y=c.type||c,typeof c=="string")c=new me(c,a);else if(c instanceof me)c.target=c.target||a;else{var P=c;c=new me(y,a),I(c,P)}if(P=!0,f)for(var b=f.length-1;0<=b;b--){var H=c.g=f[b];P=aa(H,y,!0,c)&&P}if(H=c.g=a,P=aa(H,y,!0,c)&&P,P=aa(H,y,!1,c)&&P,f)for(b=0;b<f.length;b++)H=c.g=f[b],P=aa(H,y,!1,c)&&P}rt.prototype.N=function(){if(rt.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var f=a.g[c],y=0;y<f.length;y++)j(f[y]);delete a.g[c],a.h--}}this.F=null},rt.prototype.K=function(a,c,f,y){return this.i.add(String(a),c,!1,f,y)},rt.prototype.L=function(a,c,f,y){return this.i.add(String(a),c,!0,f,y)};function aa(a,c,f,y){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var P=!0,b=0;b<c.length;++b){var H=c[b];if(H&&!H.da&&H.capture==f){var _e=H.listener,Xe=H.ha||H.src;H.fa&&gt(a.i,H),P=_e.call(Xe,y)!==!1&&P}}return P&&!y.defaultPrevented}function dp(a,c,f){if(typeof a=="function")f&&(a=g(a,f));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function hp(a){a.g=dp(()=>{a.g=null,a.i&&(a.i=!1,hp(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class HE extends se{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:hp(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function yi(a){se.call(this),this.h=a,this.g={}}T(yi,se);var fp=[];function pp(a){U(a.g,function(c,f){this.g.hasOwnProperty(f)&&qu(c)},a),a.g={}}yi.prototype.N=function(){yi.aa.N.call(this),pp(this)},yi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ku=l.JSON.stringify,qE=l.JSON.parse,WE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function Qu(){}Qu.prototype.h=null;function mp(a){return a.h||(a.h=a.i())}function gp(){}var vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Yu(){me.call(this,"d")}T(Yu,me);function Xu(){me.call(this,"c")}T(Xu,me);var br={},yp=null;function la(){return yp=yp||new rt}br.La="serverreachability";function vp(a){me.call(this,br.La,a)}T(vp,me);function _i(a){const c=la();yt(c,new vp(c))}br.STAT_EVENT="statevent";function _p(a,c){me.call(this,br.STAT_EVENT,a),this.stat=c}T(_p,me);function vt(a){const c=la();yt(c,new _p(c,a))}br.Ma="timingevent";function wp(a,c){me.call(this,br.Ma,a),this.size=c}T(wp,me);function wi(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Ei(){this.g=!0}Ei.prototype.xa=function(){this.g=!1};function GE(a,c,f,y,P,b){a.info(function(){if(a.g)if(b)for(var H="",_e=b.split("&"),Xe=0;Xe<_e.length;Xe++){var de=_e[Xe].split("=");if(1<de.length){var st=de[0];de=de[1];var it=st.split("_");H=2<=it.length&&it[1]=="type"?H+(st+"="+de+"&"):H+(st+"=redacted&")}}else H=null;else H=b;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+c+`
`+f+`
`+H})}function KE(a,c,f,y,P,b,H){a.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+c+`
`+f+`
`+b+" "+H})}function hs(a,c,f,y){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+YE(a,f)+(y?" "+y:"")})}function QE(a,c){a.info(function(){return"TIMEOUT: "+c})}Ei.prototype.info=function(){};function YE(a,c){if(!a.g)return c;if(!c)return null;try{var f=JSON.parse(c);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var y=f[a];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var b=P[0];if(b!="noop"&&b!="stop"&&b!="close")for(var H=1;H<P.length;H++)P[H]=""}}}}return Ku(f)}catch{return c}}var ua={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ep={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ju;function ca(){}T(ca,Qu),ca.prototype.g=function(){return new XMLHttpRequest},ca.prototype.i=function(){return{}},Ju=new ca;function $n(a,c,f,y){this.j=a,this.i=c,this.l=f,this.R=y||1,this.U=new yi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new xp}function xp(){this.i=null,this.g="",this.h=!1}var Tp={},Zu={};function ec(a,c,f){a.L=1,a.v=pa(gn(c)),a.m=f,a.P=!0,Ip(a,null)}function Ip(a,c){a.F=Date.now(),da(a),a.A=gn(a.v);var f=a.A,y=a.R;Array.isArray(y)||(y=[String(y)]),jp(f.i,"t",y),a.C=0,f=a.j.J,a.h=new xp,a.g=nm(a.j,f?c:null,!a.m),0<a.O&&(a.M=new HE(g(a.Y,a,a.g),a.O)),c=a.U,f=a.g,y=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(fp[0]=P.toString()),P=fp);for(var b=0;b<P.length;b++){var H=ap(f,P[b],y||c.handleEvent,!1,c.h||c);if(!H)break;c.g[H.key]=H}c=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),_i(),GE(a.i,a.u,a.A,a.l,a.R,a.m)}$n.prototype.ca=function(a){a=a.target;const c=this.M;c&&yn(a)==3?c.j():this.Y(a)},$n.prototype.Y=function(a){try{if(a==this.g)e:{const it=yn(this.g);var c=this.g.Ba();const ms=this.g.Z();if(!(3>it)&&(it!=3||this.g&&(this.h.h||this.g.oa()||qp(this.g)))){this.J||it!=4||c==7||(c==8||0>=ms?_i(3):_i(2)),tc(this);var f=this.g.Z();this.X=f;t:if(Sp(this)){var y=qp(this.g);a="";var P=y.length,b=yn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Dr(this),xi(this);var H="";break t}this.h.i=new l.TextDecoder}for(c=0;c<P;c++)this.h.h=!0,a+=this.h.i.decode(y[c],{stream:!(b&&c==P-1)});y.length=0,this.h.g+=a,this.C=0,H=this.h.g}else H=this.g.oa();if(this.o=f==200,KE(this.i,this.u,this.A,this.l,this.R,it,f),this.o){if(this.T&&!this.K){t:{if(this.g){var _e,Xe=this.g;if((_e=Xe.g?Xe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(_e)){var de=_e;break t}}de=null}if(f=de)hs(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nc(this,f);else{this.o=!1,this.s=3,vt(12),Dr(this),xi(this);break e}}if(this.P){f=!0;let Wt;for(;!this.J&&this.C<H.length;)if(Wt=XE(this,H),Wt==Zu){it==4&&(this.s=4,vt(14),f=!1),hs(this.i,this.l,null,"[Incomplete Response]");break}else if(Wt==Tp){this.s=4,vt(15),hs(this.i,this.l,H,"[Invalid Chunk]"),f=!1;break}else hs(this.i,this.l,Wt,null),nc(this,Wt);if(Sp(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),it!=4||H.length!=0||this.h.h||(this.s=1,vt(16),f=!1),this.o=this.o&&f,!f)hs(this.i,this.l,H,"[Invalid Chunked Response]"),Dr(this),xi(this);else if(0<H.length&&!this.W){this.W=!0;var st=this.j;st.g==this&&st.ba&&!st.M&&(st.j.info("Great, no buffering proxy detected. Bytes received: "+H.length),lc(st),st.M=!0,vt(11))}}else hs(this.i,this.l,H,null),nc(this,H);it==4&&Dr(this),this.o&&!this.J&&(it==4?Jp(this.j,this):(this.o=!1,da(this)))}else px(this.g),f==400&&0<H.indexOf("Unknown SID")?(this.s=3,vt(12)):(this.s=0,vt(13)),Dr(this),xi(this)}}}catch{}finally{}};function Sp(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function XE(a,c){var f=a.C,y=c.indexOf(`
`,f);return y==-1?Zu:(f=Number(c.substring(f,y)),isNaN(f)?Tp:(y+=1,y+f>c.length?Zu:(c=c.slice(y,y+f),a.C=y+f,c)))}$n.prototype.cancel=function(){this.J=!0,Dr(this)};function da(a){a.S=Date.now()+a.I,Ap(a,a.I)}function Ap(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=wi(g(a.ba,a),c)}function tc(a){a.B&&(l.clearTimeout(a.B),a.B=null)}$n.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(QE(this.i,this.A),this.L!=2&&(_i(),vt(17)),Dr(this),this.s=2,xi(this)):Ap(this,this.S-a)};function xi(a){a.j.G==0||a.J||Jp(a.j,a)}function Dr(a){tc(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,pp(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function nc(a,c){try{var f=a.j;if(f.G!=0&&(f.g==a||rc(f.h,a))){if(!a.K&&rc(f.h,a)&&f.G==3){try{var y=f.Da.g.parse(c)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)wa(f),va(f);else break e;ac(f),vt(18)}}else f.za=P[1],0<f.za-f.T&&37500>P[2]&&f.F&&f.v==0&&!f.C&&(f.C=wi(g(f.Za,f),6e3));if(1>=Rp(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Vr(f,11)}else if((a.K||f.g==a)&&wa(f),!w(c))for(P=f.Da.g.parse(c),c=0;c<P.length;c++){let de=P[c];if(f.T=de[0],de=de[1],f.G==2)if(de[0]=="c"){f.K=de[1],f.ia=de[2];const st=de[3];st!=null&&(f.la=st,f.j.info("VER="+f.la));const it=de[4];it!=null&&(f.Aa=it,f.j.info("SVER="+f.Aa));const ms=de[5];ms!=null&&typeof ms=="number"&&0<ms&&(y=1.5*ms,f.L=y,f.j.info("backChannelRequestTimeoutMs_="+y)),y=f;const Wt=a.g;if(Wt){const xa=Wt.g?Wt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xa){var b=y.h;b.g||xa.indexOf("spdy")==-1&&xa.indexOf("quic")==-1&&xa.indexOf("h2")==-1||(b.j=b.l,b.g=new Set,b.h&&(sc(b,b.h),b.h=null))}if(y.D){const uc=Wt.g?Wt.g.getResponseHeader("X-HTTP-Session-Id"):null;uc&&(y.ya=uc,Ee(y.I,y.D,uc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),y=f;var H=a;if(y.qa=tm(y,y.J?y.ia:null,y.W),H.K){Np(y.h,H);var _e=H,Xe=y.L;Xe&&(_e.I=Xe),_e.B&&(tc(_e),da(_e)),y.g=H}else Yp(y);0<f.i.length&&_a(f)}else de[0]!="stop"&&de[0]!="close"||Vr(f,7);else f.G==3&&(de[0]=="stop"||de[0]=="close"?de[0]=="stop"?Vr(f,7):oc(f):de[0]!="noop"&&f.l&&f.l.ta(de),f.v=0)}}_i(4)}catch{}}var JE=class{constructor(a,c){this.g=a,this.map=c}};function Cp(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function kp(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Rp(a){return a.h?1:a.g?a.g.size:0}function rc(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function sc(a,c){a.g?a.g.add(c):a.h=c}function Np(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Cp.prototype.cancel=function(){if(this.i=Pp(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Pp(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.D);return c}return N(a.i)}function ZE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],f=a.length,y=0;y<f;y++)c.push(a[y]);return c}c=[],f=0;for(y in a)c[f++]=a[y];return c}function ex(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var f=0;f<a;f++)c.push(f);return c}c=[],f=0;for(const y in a)c[f++]=y;return c}}}function bp(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var f=ex(a),y=ZE(a),P=y.length,b=0;b<P;b++)c.call(void 0,y[b],f&&f[b],a)}var Dp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tx(a,c){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var y=a[f].indexOf("="),P=null;if(0<=y){var b=a[f].substring(0,y);P=a[f].substring(y+1)}else b=a[f];c(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Or(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Or){this.h=a.h,ha(this,a.j),this.o=a.o,this.g=a.g,fa(this,a.s),this.l=a.l;var c=a.i,f=new Si;f.i=c.i,c.g&&(f.g=new Map(c.g),f.h=c.h),Op(this,f),this.m=a.m}else a&&(c=String(a).match(Dp))?(this.h=!1,ha(this,c[1]||"",!0),this.o=Ti(c[2]||""),this.g=Ti(c[3]||"",!0),fa(this,c[4]),this.l=Ti(c[5]||"",!0),Op(this,c[6]||"",!0),this.m=Ti(c[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}Or.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ii(c,Vp,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ii(c,Vp,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(Ii(f,f.charAt(0)=="/"?sx:rx,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",Ii(f,ox)),a.join("")};function gn(a){return new Or(a)}function ha(a,c,f){a.j=f?Ti(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function fa(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function Op(a,c,f){c instanceof Si?(a.i=c,ax(a.i,a.h)):(f||(c=Ii(c,ix)),a.i=new Si(c,a.h))}function Ee(a,c,f){a.i.set(c,f)}function pa(a){return Ee(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ti(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ii(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,nx),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function nx(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Vp=/[#\/\?@]/g,rx=/[#\?:]/g,sx=/[#\?]/g,ix=/[#\?@]/g,ox=/#/g;function Si(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function zn(a){a.g||(a.g=new Map,a.h=0,a.i&&tx(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=Si.prototype,t.add=function(a,c){zn(this),this.i=null,a=fs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function Mp(a,c){zn(a),c=fs(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Lp(a,c){return zn(a),c=fs(a,c),a.g.has(c)}t.forEach=function(a,c){zn(this),this.g.forEach(function(f,y){f.forEach(function(P){a.call(c,P,y,this)},this)},this)},t.na=function(){zn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),f=[];for(let y=0;y<c.length;y++){const P=a[y];for(let b=0;b<P.length;b++)f.push(c[y])}return f},t.V=function(a){zn(this);let c=[];if(typeof a=="string")Lp(this,a)&&(c=c.concat(this.g.get(fs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)c=c.concat(a[f])}return c},t.set=function(a,c){return zn(this),this.i=null,a=fs(this,a),Lp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function jp(a,c,f){Mp(a,c),0<f.length&&(a.i=null,a.g.set(fs(a,c),N(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var f=0;f<c.length;f++){var y=c[f];const b=encodeURIComponent(String(y)),H=this.V(y);for(y=0;y<H.length;y++){var P=b;H[y]!==""&&(P+="="+encodeURIComponent(String(H[y]))),a.push(P)}}return this.i=a.join("&")};function fs(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function ax(a,c){c&&!a.j&&(zn(a),a.i=null,a.g.forEach(function(f,y){var P=y.toLowerCase();y!=P&&(Mp(this,y),jp(this,P,f))},a)),a.j=c}function lx(a,c){const f=new Ei;if(l.Image){const y=new Image;y.onload=_(Bn,f,"TestLoadImage: loaded",!0,c,y),y.onerror=_(Bn,f,"TestLoadImage: error",!1,c,y),y.onabort=_(Bn,f,"TestLoadImage: abort",!1,c,y),y.ontimeout=_(Bn,f,"TestLoadImage: timeout",!1,c,y),l.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=a}else c(!1)}function ux(a,c){const f=new Ei,y=new AbortController,P=setTimeout(()=>{y.abort(),Bn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:y.signal}).then(b=>{clearTimeout(P),b.ok?Bn(f,"TestPingServer: ok",!0,c):Bn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(P),Bn(f,"TestPingServer: error",!1,c)})}function Bn(a,c,f,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(f)}catch{}}function cx(){this.g=new WE}function dx(a,c,f){const y=f||"";try{bp(a,function(P,b){let H=P;d(P)&&(H=Ku(P)),c.push(y+b+"="+encodeURIComponent(H))})}catch(P){throw c.push(y+"type="+encodeURIComponent("_badmap")),P}}function ma(a){this.l=a.Ub||null,this.j=a.eb||!1}T(ma,Qu),ma.prototype.g=function(){return new ga(this.l,this.j)},ma.prototype.i=function(a){return function(){return a}}({});function ga(a,c){rt.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}T(ga,rt),t=ga.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Ci(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Ci(this)),this.g&&(this.readyState=3,Ci(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fp(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fp(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Ai(this):Ci(this),this.readyState==3&&Fp(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ai(this))},t.Qa=function(a){this.g&&(this.response=a,Ai(this))},t.ga=function(){this.g&&Ai(this)};function Ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Ci(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function Ci(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Up(a){let c="";return U(a,function(f,y){c+=y,c+=":",c+=f,c+=`\r
`}),c}function ic(a,c,f){e:{for(y in f){var y=!1;break e}y=!0}y||(f=Up(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Ee(a,c,f))}function be(a){rt.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}T(be,rt);var hx=/^https?$/i,fx=["POST","PUT"];t=be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,f,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ju.g(),this.v=this.o?mp(this.o):mp(Ju),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(b){$p(this,b);return}if(a=f||"",f=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)f.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const b of y.keys())f.set(b,y.get(b));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(f.keys()).find(b=>b.toLowerCase()=="content-type"),P=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fx,c,void 0))||y||P||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[b,H]of f)this.g.setRequestHeader(b,H);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Hp(this),this.u=!0,this.g.send(a),this.u=!1}catch(b){$p(this,b)}};function $p(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,zp(a),ya(a)}function zp(a){a.A||(a.A=!0,yt(a,"complete"),yt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,yt(this,"complete"),yt(this,"abort"),ya(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ya(this,!0)),be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Bp(this):this.bb())},t.bb=function(){Bp(this)};function Bp(a){if(a.h&&typeof o<"u"&&(!a.v[1]||yn(a)!=4||a.Z()!=2)){if(a.u&&yn(a)==4)dp(a.Ea,0,a);else if(yt(a,"readystatechange"),yn(a)==4){a.h=!1;try{const H=a.Z();e:switch(H){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var y;if(y=H===0){var P=String(a.D).match(Dp)[1]||null;!P&&l.self&&l.self.location&&(P=l.self.location.protocol.slice(0,-1)),y=!hx.test(P?P.toLowerCase():"")}f=y}if(f)yt(a,"complete"),yt(a,"success");else{a.m=6;try{var b=2<yn(a)?a.g.statusText:""}catch{b=""}a.l=b+" ["+a.Z()+"]",zp(a)}}finally{ya(a)}}}}function ya(a,c){if(a.g){Hp(a);const f=a.g,y=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||yt(a,"ready");try{f.onreadystatechange=y}catch{}}}function Hp(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function yn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<yn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),qE(c)}};function qp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function px(a){const c={};a=(a.g&&2<=yn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<a.length;y++){if(w(a[y]))continue;var f=k(a[y]);const P=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const b=c[P]||[];c[P]=b,b.push(f)}x(c,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ki(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function Wp(a){this.Aa=0,this.i=[],this.j=new Ei,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ki("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ki("baseRetryDelayMs",5e3,a),this.cb=ki("retryDelaySeedMs",1e4,a),this.Wa=ki("forwardChannelMaxRetries",2,a),this.wa=ki("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Cp(a&&a.concurrentRequestLimit),this.Da=new cx,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Wp.prototype,t.la=8,t.G=1,t.connect=function(a,c,f,y){vt(0),this.W=a,this.H=c||{},f&&y!==void 0&&(this.H.OSID=f,this.H.OAID=y),this.F=this.X,this.I=tm(this,null,this.W),_a(this)};function oc(a){if(Gp(a),a.G==3){var c=a.U++,f=gn(a.I);if(Ee(f,"SID",a.K),Ee(f,"RID",c),Ee(f,"TYPE","terminate"),Ri(a,f),c=new $n(a,a.j,c),c.L=2,c.v=pa(gn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=c.v,f=!0),f||(c.g=nm(c.j,null),c.g.ea(c.v)),c.F=Date.now(),da(c)}em(a)}function va(a){a.g&&(lc(a),a.g.cancel(),a.g=null)}function Gp(a){va(a),a.u&&(l.clearTimeout(a.u),a.u=null),wa(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function _a(a){if(!kp(a.h)&&!a.s){a.s=!0;var c=a.Ga;q||Q(),V||(q(),V=!0),z.add(c,a),a.B=0}}function mx(a,c){return Rp(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=wi(g(a.Ga,a,c),Zp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new $n(this,this.j,a);let b=this.o;if(this.S&&(b?(b=v(b),I(b,this.S)):b=this.S),this.m!==null||this.O||(P.H=b,b=null),this.P)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var y=this.i[f];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(c+=y,4096<c){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=Qp(this,P,c),f=gn(this.I),Ee(f,"RID",a),Ee(f,"CVER",22),this.D&&Ee(f,"X-HTTP-Session-Id",this.D),Ri(this,f),b&&(this.O?c="headers="+encodeURIComponent(String(Up(b)))+"&"+c:this.m&&ic(f,this.m,b)),sc(this.h,P),this.Ua&&Ee(f,"TYPE","init"),this.P?(Ee(f,"$req",c),Ee(f,"SID","null"),P.T=!0,ec(P,f,null)):ec(P,f,c),this.G=2}}else this.G==3&&(a?Kp(this,a):this.i.length==0||kp(this.h)||Kp(this))};function Kp(a,c){var f;c?f=c.l:f=a.U++;const y=gn(a.I);Ee(y,"SID",a.K),Ee(y,"RID",f),Ee(y,"AID",a.T),Ri(a,y),a.m&&a.o&&ic(y,a.m,a.o),f=new $n(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Qp(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),sc(a.h,f),ec(f,y,c)}function Ri(a,c){a.H&&U(a.H,function(f,y){Ee(c,y,f)}),a.l&&bp({},function(f,y){Ee(c,y,f)})}function Qp(a,c,f){f=Math.min(a.i.length,f);var y=a.l?g(a.l.Na,a.l,a):null;e:{var P=a.i;let b=-1;for(;;){const H=["count="+f];b==-1?0<f?(b=P[0].g,H.push("ofs="+b)):b=0:H.push("ofs="+b);let _e=!0;for(let Xe=0;Xe<f;Xe++){let de=P[Xe].g;const st=P[Xe].map;if(de-=b,0>de)b=Math.max(0,P[Xe].g-100),_e=!1;else try{dx(st,H,"req"+de+"_")}catch{y&&y(st)}}if(_e){y=H.join("&");break e}}}return a=a.i.splice(0,f),c.D=a,y}function Yp(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;q||Q(),V||(q(),V=!0),z.add(c,a),a.v=0}}function ac(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=wi(g(a.Fa,a),Zp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Xp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=wi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,vt(10),va(this),Xp(this))};function lc(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function Xp(a){a.g=new $n(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=gn(a.qa);Ee(c,"RID","rpc"),Ee(c,"SID",a.K),Ee(c,"AID",a.T),Ee(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ee(c,"TO",a.ja),Ee(c,"TYPE","xmlhttp"),Ri(a,c),a.m&&a.o&&ic(c,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=pa(gn(c)),f.m=null,f.P=!0,Ip(f,a)}t.Za=function(){this.C!=null&&(this.C=null,va(this),ac(this),vt(19))};function wa(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function Jp(a,c){var f=null;if(a.g==c){wa(a),lc(a),a.g=null;var y=2}else if(rc(a.h,c))f=c.D,Np(a.h,c),y=1;else return;if(a.G!=0){if(c.o)if(y==1){f=c.m?c.m.length:0,c=Date.now()-c.F;var P=a.B;y=la(),yt(y,new wp(y,f)),_a(a)}else Yp(a);else if(P=c.s,P==3||P==0&&0<c.X||!(y==1&&mx(a,c)||y==2&&ac(a)))switch(f&&0<f.length&&(c=a.h,c.i=c.i.concat(f)),P){case 1:Vr(a,5);break;case 4:Vr(a,10);break;case 3:Vr(a,6);break;default:Vr(a,2)}}}function Zp(a,c){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*c}function Vr(a,c){if(a.j.info("Error code "+c),c==2){var f=g(a.fb,a),y=a.Xa;const P=!y;y=new Or(y||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ha(y,"https"),pa(y),P?lx(y.toString(),f):ux(y.toString(),f)}else vt(2);a.G=0,a.l&&a.l.sa(c),em(a),Gp(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function em(a){if(a.G=0,a.ka=[],a.l){const c=Pp(a.h);(c.length!=0||a.i.length!=0)&&(O(a.ka,c),O(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function tm(a,c,f){var y=f instanceof Or?gn(f):new Or(f);if(y.g!="")c&&(y.g=c+"."+y.g),fa(y,y.s);else{var P=l.location;y=P.protocol,c=c?c+"."+P.hostname:P.hostname,P=+P.port;var b=new Or(null);y&&ha(b,y),c&&(b.g=c),P&&fa(b,P),f&&(b.l=f),y=b}return f=a.D,c=a.ya,f&&c&&Ee(y,f,c),Ee(y,"VER",a.la),Ri(a,y),y}function nm(a,c,f){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new be(new ma({eb:f})):new be(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function rm(){}t=rm.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ea(){}Ea.prototype.g=function(a,c){return new Pt(a,c)};function Pt(a,c){rt.call(this),this.g=new Wp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!w(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!w(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ps(this)}T(Pt,rt),Pt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Pt.prototype.close=function(){oc(this.g)},Pt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=Ku(a),a=f);c.i.push(new JE(c.Ya++,a)),c.G==3&&_a(c)},Pt.prototype.N=function(){this.g.l=null,delete this.j,oc(this.g),delete this.g,Pt.aa.N.call(this)};function sm(a){Yu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}T(sm,Yu);function im(){Xu.call(this),this.status=1}T(im,Xu);function ps(a){this.g=a}T(ps,rm),ps.prototype.ua=function(){yt(this.g,"a")},ps.prototype.ta=function(a){yt(this.g,new sm(a))},ps.prototype.sa=function(a){yt(this.g,new im)},ps.prototype.ra=function(){yt(this.g,"b")},Ea.prototype.createWebChannel=Ea.prototype.g,Pt.prototype.send=Pt.prototype.o,Pt.prototype.open=Pt.prototype.m,Pt.prototype.close=Pt.prototype.close,sw=function(){return new Ea},rw=function(){return la()},nw=br,Qd={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ua.NO_ERROR=0,ua.TIMEOUT=8,ua.HTTP_ERROR=6,ul=ua,Ep.COMPLETE="complete",tw=Ep,gp.EventType=vi,vi.OPEN="a",vi.CLOSE="b",vi.ERROR="c",vi.MESSAGE="d",rt.prototype.listen=rt.prototype.K,Bi=gp,be.prototype.listenOnce=be.prototype.L,be.prototype.getLastError=be.prototype.Ka,be.prototype.getLastErrorCode=be.prototype.Ba,be.prototype.getStatus=be.prototype.Z,be.prototype.getResponseJson=be.prototype.Oa,be.prototype.getResponseText=be.prototype.oa,be.prototype.send=be.prototype.ea,be.prototype.setWithCredentials=be.prototype.Ha,ew=be}).apply(typeof $a<"u"?$a:typeof self<"u"?self:typeof window<"u"?window:{});const Bg="@firebase/firestore";/**
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
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
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
 */let hi="10.14.0";/**
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
 */const ns=new df("@firebase/firestore");function ji(){return ns.logLevel}function Y(t,...e){if(ns.logLevel<=oe.DEBUG){const n=e.map(If);ns.debug(`Firestore (${hi}): ${t}`,...n)}}function Vn(t,...e){if(ns.logLevel<=oe.ERROR){const n=e.map(If);ns.error(`Firestore (${hi}): ${t}`,...n)}}function rs(t,...e){if(ns.logLevel<=oe.WARN){const n=e.map(If);ns.warn(`Firestore (${hi}): ${t}`,...n)}}function If(t){if(typeof t=="string")return t;try{/**
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
 */function ee(t="Unexpected state"){const e=`FIRESTORE (${hi}) INTERNAL ASSERTION FAILED: `+t;throw Vn(e),new Error(e)}function pe(t,e){t||ee()}function ne(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Fn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Kr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class iw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ow{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class IC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class SC{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0);let r=this.i;const s=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let i=new Kr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Kr,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},l=u=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Kr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string"),new iw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string"),new ut(e)}}class AC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class CC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new AC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class kC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){pe(this.o===void 0);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string"),this.R=n.token,new kC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function NC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Sf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=NC(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ti(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Ue{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ue.fromMillis(Date.now())}static fromDate(e){return Ue.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ue(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ue(0,0))}static max(){return new te(new Ue(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class ko{constructor(e,n,r){n===void 0?n=0:n>e.length&&ee(),r===void 0?r=e.length-n:r>e.length-n&&ee(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ko.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ko?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ie extends ko{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(M.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const PC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class We extends ko{construct(e,n,r){return new We(e,n,r)}static isValidIdentifier(e){return PC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),We.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new We(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new K(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else l==="`"?(o=!o,s++):l!=="."||o?(r+=l,s++):(i(),s++)}if(i(),o)throw new K(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new We(n)}static emptyPath(){return new We([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Ie.fromString(e))}static fromName(e){return new X(Ie.fromString(e).popFirst(5))}static empty(){return new X(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Ie(e.slice()))}}function bC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=te.fromTimestamp(r===1e9?new Ue(n+1,0):new Ue(n,r));return new xr(s,X.empty(),e)}function DC(t){return new xr(t.readTime,t.key,-1)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(te.min(),X.empty(),-1)}static max(){return new xr(te.max(),X.empty(),-1)}}function OC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=X.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const VC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class MC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qo(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==VC)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ee(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let s=0,i=0,o=!1;e.forEach(l=>{++s,l.next(()=>{++i,o&&i===s&&n()},u=>r(u))}),o=!0,i===s&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(s=>s?L.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new L((r,s)=>{const i=e.length,o=new Array(i);let l=0;for(let u=0;u<i;u++){const d=u;n(e[d]).next(p=>{o[d]=p,++l,l===i&&r(o)},p=>s(p))}})}static doWhile(e,n){return new L((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function LC(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Yo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Af{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Af.oe=-1;function xu(t){return t==null}function Ql(t){return t===0&&1/t==-1/0}function jC(t){return typeof t=="number"&&Number.isInteger(t)&&!Ql(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Hg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function cs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function aw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Ne{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new Ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new Ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new za(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new za(this.root,e,this.comparator,!1)}getReverseIterator(){return new za(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new za(this.root,e,this.comparator,!0)}}class za{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ee();const e=this.left.check();if(e!==this.right.check())throw ee();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw ee()}get value(){throw ee()}get color(){throw ee()}get left(){throw ee()}get right(){throw ee()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new qg(this.data.getIterator())}getIteratorFrom(e){return new qg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class qg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(We.comparator)}static empty(){return new Ot([])}unionWith(e){let n=new tt(We.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ot(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ti(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class lw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new lw("Invalid base64 string: "+i):i}}(e);return new Qe(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new Qe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const FC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Tr(t){if(pe(!!t),typeof t=="string"){let e=0;const n=FC.exec(t);if(pe(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ss(t){return typeof t=="string"?Qe.fromBase64String(t):Qe.fromUint8Array(t)}/**
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
 */function Cf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function kf(t){const e=t.mapValue.fields.__previous_value__;return Cf(e)?kf(e):e}function Ro(t){const e=Tr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ue(e.seconds,e.nanos)}/**
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
 */class UC{constructor(e,n,r,s,i,o,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=d}}class ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ba={mapValue:{}};function is(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Cf(t)?4:zC(t)?9007199254740991:$C(t)?10:11:ee()}function pn(t,e){if(t===e)return!0;const n=is(t);if(n!==is(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ro(t).isEqual(Ro(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Tr(s.timestampValue),l=Tr(i.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return ss(s.bytesValue).isEqual(ss(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Oe(s.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(s.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Oe(s.integerValue)===Oe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Oe(s.doubleValue),l=Oe(i.doubleValue);return o===l?Ql(o)===Ql(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return ti(t.arrayValue.values||[],e.arrayValue.values||[],pn);case 10:case 11:return function(s,i){const o=s.mapValue.fields||{},l=i.mapValue.fields||{};if(Hg(o)!==Hg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!pn(o[u],l[u])))return!1;return!0}(t,e);default:return ee()}}function No(t,e){return(t.values||[]).find(n=>pn(n,e))!==void 0}function ri(t,e){if(t===e)return 0;const n=is(t),r=is(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const l=Oe(i.integerValue||i.doubleValue),u=Oe(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Wg(t.timestampValue,e.timestampValue);case 4:return Wg(Ro(t),Ro(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const l=ss(i),u=ss(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const l=i.split("/"),u=o.split("/");for(let d=0;d<l.length&&d<u.length;d++){const p=he(l[d],u[d]);if(p!==0)return p}return he(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const l=he(Oe(i.latitude),Oe(o.latitude));return l!==0?l:he(Oe(i.longitude),Oe(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Gg(t.arrayValue,e.arrayValue);case 10:return function(i,o){var l,u,d,p;const m=i.fields||{},g=o.fields||{},_=(l=m.value)===null||l===void 0?void 0:l.arrayValue,T=(u=g.value)===null||u===void 0?void 0:u.arrayValue,N=he(((d=_==null?void 0:_.values)===null||d===void 0?void 0:d.length)||0,((p=T==null?void 0:T.values)===null||p===void 0?void 0:p.length)||0);return N!==0?N:Gg(_,T)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===Ba.mapValue&&o===Ba.mapValue)return 0;if(i===Ba.mapValue)return 1;if(o===Ba.mapValue)return-1;const l=i.fields||{},u=Object.keys(l),d=o.fields||{},p=Object.keys(d);u.sort(),p.sort();for(let m=0;m<u.length&&m<p.length;++m){const g=he(u[m],p[m]);if(g!==0)return g;const _=ri(l[u[m]],d[p[m]]);if(_!==0)return _}return he(u.length,p.length)}(t.mapValue,e.mapValue);default:throw ee()}}function Wg(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Tr(t),r=Tr(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function Gg(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=ri(n[s],r[s]);if(i)return i}return he(n.length,r.length)}function si(t){return Yd(t)}function Yd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Tr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return ss(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return X.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Yd(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Yd(n.fields[o])}`;return s+"}"}(t.mapValue):ee()}function Kg(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Xd(t){return!!t&&"integerValue"in t}function Rf(t){return!!t&&"arrayValue"in t}function Qg(t){return!!t&&"nullValue"in t}function Yg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function cl(t){return!!t&&"mapValue"in t}function $C(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function no(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return cs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=no(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=no(t.arrayValue.values[n]);return e}return Object.assign({},t)}function zC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!cl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=no(n)}setAll(e){let n=We.emptyPath(),r={},s=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,s),r={},s=[],n=l.popLast()}o?r[l.lastSegment()]=no(o):s.push(l.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());cl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return pn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];cl(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){cs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new At(no(this.value))}}function uw(t){const e=[];return cs(t.fields,(n,r)=>{const s=new We([n]);if(cl(r)){const i=uw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
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
 */class dt{constructor(e,n,r,s,i,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=l}static newInvalidDocument(e){return new dt(e,0,te.min(),te.min(),te.min(),At.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,te.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,te.min(),te.min(),At.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,te.min(),te.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Yl{constructor(e,n){this.position=e,this.inclusive=n}}function Xg(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(o.referenceValue),n.key):r=ri(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!pn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Po{constructor(e,n="asc"){this.field=e,this.dir=n}}function BC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class cw{}class Fe extends cw{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new qC(e,n,r):n==="array-contains"?new KC(e,r):n==="in"?new QC(e,r):n==="not-in"?new YC(e,r):n==="array-contains-any"?new XC(e,r):new Fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new WC(e,r):new GC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ri(n,this.value)):n!==null&&is(this.value)===is(n)&&this.matchesComparison(ri(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends cw{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new tn(e,n)}matches(e){return dw(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function dw(t){return t.op==="and"}function hw(t){return HC(t)&&dw(t)}function HC(t){for(const e of t.filters)if(e instanceof tn)return!1;return!0}function Jd(t){if(t instanceof Fe)return t.field.canonicalString()+t.op.toString()+si(t.value);if(hw(t))return t.filters.map(e=>Jd(e)).join(",");{const e=t.filters.map(n=>Jd(n)).join(",");return`${t.op}(${e})`}}function fw(t,e){return t instanceof Fe?function(r,s){return s instanceof Fe&&r.op===s.op&&r.field.isEqual(s.field)&&pn(r.value,s.value)}(t,e):t instanceof tn?function(r,s){return s instanceof tn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,l)=>i&&fw(o,s.filters[l]),!0):!1}(t,e):void ee()}function pw(t){return t instanceof Fe?function(n){return`${n.field.canonicalString()} ${n.op} ${si(n.value)}`}(t):t instanceof tn?function(n){return n.op.toString()+" {"+n.getFilters().map(pw).join(" ,")+"}"}(t):"Filter"}class qC extends Fe{constructor(e,n,r){super(e,n,r),this.key=X.fromName(r.referenceValue)}matches(e){const n=X.comparator(e.key,this.key);return this.matchesComparison(n)}}class WC extends Fe{constructor(e,n){super(e,"in",n),this.keys=mw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class GC extends Fe{constructor(e,n){super(e,"not-in",n),this.keys=mw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function mw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>X.fromName(r.referenceValue))}class KC extends Fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Rf(n)&&No(n.arrayValue,this.value)}}class QC extends Fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&No(this.value.arrayValue,n)}}class YC extends Fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(No(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!No(this.value.arrayValue,n)}}class XC extends Fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Rf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>No(this.value.arrayValue,r))}}/**
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
 */class JC{constructor(e,n=null,r=[],s=[],i=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=l,this.ue=null}}function Zg(t,e=null,n=[],r=[],s=null,i=null,o=null){return new JC(t,e,n,r,s,i,o)}function Nf(t){const e=ne(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Jd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),xu(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>si(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>si(r)).join(",")),e.ue=n}return e.ue}function Pf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!BC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!fw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Jg(t.startAt,e.startAt)&&Jg(t.endAt,e.endAt)}function Zd(t){return X.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class fi{constructor(e,n=null,r=[],s=[],i=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function ZC(t,e,n,r,s,i,o,l){return new fi(t,e,n,r,s,i,o,l)}function bf(t){return new fi(t)}function ey(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function gw(t){return t.collectionGroup!==null}function ro(t){const e=ne(t);if(e.ce===null){e.ce=[];const n=new Set;for(const i of e.explicitOrderBy)e.ce.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new tt(We.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(l=l.add(d.field))})}),l})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.ce.push(new Po(i,r))}),n.has(We.keyField().canonicalString())||e.ce.push(new Po(We.keyField(),r))}return e.ce}function hn(t){const e=ne(t);return e.le||(e.le=ek(e,ro(t))),e.le}function ek(t,e){if(t.limitType==="F")return Zg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Po(s.field,i)});const n=t.endAt?new Yl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Yl(t.startAt.position,t.startAt.inclusive):null;return Zg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function eh(t,e){const n=t.filters.concat([e]);return new fi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function th(t,e,n){return new fi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Tu(t,e){return Pf(hn(t),hn(e))&&t.limitType===e.limitType}function yw(t){return`${Nf(hn(t))}|lt:${t.limitType}`}function vs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>pw(s)).join(", ")}]`),xu(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>si(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>si(s)).join(",")),`Target(${r})`}(hn(t))}; limitType=${t.limitType})`}function Iu(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ro(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,l,u){const d=Xg(o,l,u);return o.inclusive?d<=0:d<0}(r.startAt,ro(r),s)||r.endAt&&!function(o,l,u){const d=Xg(o,l,u);return o.inclusive?d>=0:d>0}(r.endAt,ro(r),s))}(t,e)}function tk(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function vw(t){return(e,n)=>{let r=!1;for(const s of ro(t)){const i=nk(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function nk(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(i,o,l){const u=o.data.field(i),d=l.data.field(i);return u!==null&&d!==null?ri(u,d):ee()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ee()}}/**
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
 */class pi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){cs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return aw(this.inner)}size(){return this.innerSize}}/**
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
 */const rk=new Ne(X.comparator);function Mn(){return rk}const _w=new Ne(X.comparator);function Hi(...t){let e=_w;for(const n of t)e=e.insert(n.key,n);return e}function ww(t){let e=_w;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Br(){return so()}function Ew(){return so()}function so(){return new pi(t=>t.toString(),(t,e)=>t.isEqual(e))}const sk=new Ne(X.comparator),ik=new tt(X.comparator);function ie(...t){let e=ik;for(const n of t)e=e.add(n);return e}const ok=new tt(he);function ak(){return ok}/**
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
 */function Df(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ql(e)?"-0":e}}function xw(t){return{integerValue:""+t}}function lk(t,e){return jC(e)?xw(e):Df(t,e)}/**
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
 */class Su{constructor(){this._=void 0}}function uk(t,e,n){return t instanceof bo?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Cf(i)&&(i=kf(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Do?Iw(t,e):t instanceof Oo?Sw(t,e):function(s,i){const o=Tw(s,i),l=ty(o)+ty(s.Pe);return Xd(o)&&Xd(s.Pe)?xw(l):Df(s.serializer,l)}(t,e)}function ck(t,e,n){return t instanceof Do?Iw(t,e):t instanceof Oo?Sw(t,e):n}function Tw(t,e){return t instanceof Xl?function(r){return Xd(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class bo extends Su{}class Do extends Su{constructor(e){super(),this.elements=e}}function Iw(t,e){const n=Aw(e);for(const r of t.elements)n.some(s=>pn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Oo extends Su{constructor(e){super(),this.elements=e}}function Sw(t,e){let n=Aw(e);for(const r of t.elements)n=n.filter(s=>!pn(s,r));return{arrayValue:{values:n}}}class Xl extends Su{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function ty(t){return Oe(t.integerValue||t.doubleValue)}function Aw(t){return Rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class dk{constructor(e,n){this.field=e,this.transform=n}}function hk(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Do&&s instanceof Do||r instanceof Oo&&s instanceof Oo?ti(r.elements,s.elements,pn):r instanceof Xl&&s instanceof Xl?pn(r.Pe,s.Pe):r instanceof bo&&s instanceof bo}(t.transform,e.transform)}class fk{constructor(e,n){this.version=e,this.transformResults=n}}class Bt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Bt}static exists(e){return new Bt(void 0,e)}static updateTime(e){return new Bt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function dl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Au{}function Cw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Of(t.key,Bt.none()):new Xo(t.key,t.data,Bt.none());{const n=t.data,r=At.empty();let s=new tt(We.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Rr(t.key,r,new Ot(s.toArray()),Bt.none())}}function pk(t,e,n){t instanceof Xo?function(s,i,o){const l=s.value.clone(),u=ry(s.fieldTransforms,i,o.transformResults);l.setAll(u),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Rr?function(s,i,o){if(!dl(s.precondition,i))return void i.convertToUnknownDocument(o.version);const l=ry(s.fieldTransforms,i,o.transformResults),u=i.data;u.setAll(kw(s)),u.setAll(l),i.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function io(t,e,n,r){return t instanceof Xo?function(i,o,l,u){if(!dl(i.precondition,o))return l;const d=i.value.clone(),p=sy(i.fieldTransforms,u,o);return d.setAll(p),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof Rr?function(i,o,l,u){if(!dl(i.precondition,o))return l;const d=sy(i.fieldTransforms,u,o),p=o.data;return p.setAll(kw(i)),p.setAll(d),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(i,o,l){return dl(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function mk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Tw(r.transform,s||null);i!=null&&(n===null&&(n=At.empty()),n.set(r.field,i))}return n||null}function ny(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ti(r,s,(i,o)=>hk(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Xo extends Au{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Rr extends Au{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function kw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ry(t,e,n){const r=new Map;pe(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,l=e.data.field(i.field);r.set(i.field,ck(o,l,n[s]))}return r}function sy(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,uk(i,o,e))}return r}class Of extends Au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class gk extends Au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class yk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&pk(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Ew();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let l=this.applyToLocalView(o,i.mutatedFields);l=n.has(s.key)?null:l;const u=Cw(o,l);u!==null&&r.set(s.key,u),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&ti(this.mutations,e.mutations,(n,r)=>ny(n,r))&&ti(this.baseMutations,e.baseMutations,(n,r)=>ny(n,r))}}class Vf{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){pe(e.mutations.length===r.length);let s=function(){return sk}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Vf(e,n,r,s)}}/**
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
 */class vk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _k{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Le,ae;function wk(t){switch(t){default:return ee();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function Rw(t){if(t===void 0)return Vn("GRPC error has no .code"),M.UNKNOWN;switch(t){case Le.OK:return M.OK;case Le.CANCELLED:return M.CANCELLED;case Le.UNKNOWN:return M.UNKNOWN;case Le.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case Le.INTERNAL:return M.INTERNAL;case Le.UNAVAILABLE:return M.UNAVAILABLE;case Le.UNAUTHENTICATED:return M.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case Le.NOT_FOUND:return M.NOT_FOUND;case Le.ALREADY_EXISTS:return M.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return M.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case Le.ABORTED:return M.ABORTED;case Le.OUT_OF_RANGE:return M.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return M.UNIMPLEMENTED;case Le.DATA_LOSS:return M.DATA_LOSS;default:return ee()}}(ae=Le||(Le={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Ek(){return new TextEncoder}/**
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
 */const xk=new Gr([4294967295,4294967295],0);function iy(t){const e=Ek().encode(t),n=new Z0;return n.update(e),new Uint8Array(n.digest())}function oy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gr([n,r],0),new Gr([s,i],0)]}class Mf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qi(`Invalid padding: ${n}`);if(r<0)throw new qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qi(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Gr.fromNumber(this.Ie)}Ee(e,n,r){let s=e.add(n.multiply(Gr.fromNumber(r)));return s.compare(xk)===1&&(s=new Gr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=iy(e),[r,s]=oy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);if(!this.de(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Mf(i,s,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.Ie===0)return;const n=iy(e),[r,s]=oy(n);for(let i=0;i<this.hashCount;i++){const o=this.Ee(r,s,i);this.Ae(o)}}Ae(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Cu{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Jo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Cu(te.min(),s,new Ne(he),Mn(),ie())}}class Jo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Jo(r,n,ie(),ie(),ie())}}/**
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
 */class hl{constructor(e,n,r,s){this.Re=e,this.removedTargetIds=n,this.key=r,this.Ve=s}}class Nw{constructor(e,n){this.targetId=e,this.me=n}}class Pw{constructor(e,n,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class ay{constructor(){this.fe=0,this.ge=uy(),this.pe=Qe.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}ve(){let e=ie(),n=ie(),r=ie();return this.ge.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ee()}}),new Jo(this.pe,this.ye,e,n,r)}Ce(){this.we=!1,this.ge=uy()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,pe(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class Tk{constructor(e){this.Le=e,this.Be=new Map,this.ke=Mn(),this.qe=ly(),this.Qe=new Ne(he)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const r=this.Ge(n);switch(e.state){case 0:this.ze(n)&&r.De(e.resumeToken);break;case 1:r.Oe(),r.Se||r.Ce(),r.De(e.resumeToken);break;case 2:r.Oe(),r.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(r.Ne(),r.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),r.De(e.resumeToken));break;default:ee()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((r,s)=>{this.ze(s)&&n(s)})}He(e){const n=e.targetId,r=e.me.count,s=this.Je(n);if(s){const i=s.target;if(Zd(i))if(r===0){const o=new X(i.path);this.Ue(n,o,dt.newNoDocument(o,te.min()))}else pe(r===1);else{const o=this.Ye(n);if(o!==r){const l=this.Ze(e),u=l?this.Xe(l,e,o):1;if(u!==0){this.je(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,d)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,l;try{o=ss(r).toUint8Array()}catch(u){if(u instanceof lw)return rs("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Mf(o,s,i)}catch(u){return rs(u instanceof qi?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.Ie===0?null:l}Xe(e,n,r){return n.me.count===r-this.nt(e,n.targetId)?0:2}nt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.tt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Ue(n,i,null),s++)}),s}rt(e){const n=new Map;this.Be.forEach((i,o)=>{const l=this.Je(o);if(l){if(i.current&&Zd(l.target)){const u=new X(l.target.path);this.ke.get(u)!==null||this.it(o,u)||this.Ue(o,u,dt.newNoDocument(u,e))}i.be&&(n.set(o,i.ve()),i.Ce())}});let r=ie();this.qe.forEach((i,o)=>{let l=!0;o.forEachWhile(u=>{const d=this.Je(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(i))}),this.ke.forEach((i,o)=>o.setReadTime(e));const s=new Cu(e,n,this.Qe,this.ke,r);return this.ke=Mn(),this.qe=ly(),this.Qe=new Ne(he),s}$e(e,n){if(!this.ze(e))return;const r=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,r),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,r){if(!this.ze(e))return;const s=this.Ge(e);this.it(e,n)?s.Fe(n,1):s.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),r&&(this.ke=this.ke.insert(n,r))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new ay,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new tt(he),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new ay),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ly(){return new Ne(X.comparator)}function uy(){return new Ne(X.comparator)}const Ik={asc:"ASCENDING",desc:"DESCENDING"},Sk={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ak={and:"AND",or:"OR"};class Ck{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function nh(t,e){return t.useProto3Json||xu(e)?e:{value:e}}function Jl(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function bw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function kk(t,e){return Jl(t,e.toTimestamp())}function fn(t){return pe(!!t),te.fromTimestamp(function(n){const r=Tr(n);return new Ue(r.seconds,r.nanos)}(t))}function Lf(t,e){return rh(t,e).canonicalString()}function rh(t,e){const n=function(s){return new Ie(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Dw(t){const e=Ie.fromString(t);return pe(jw(e)),e}function sh(t,e){return Lf(t.databaseId,e.path)}function Bc(t,e){const n=Dw(e);if(n.get(1)!==t.databaseId.projectId)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(Vw(n))}function Ow(t,e){return Lf(t.databaseId,e)}function Rk(t){const e=Dw(t);return e.length===4?Ie.emptyPath():Vw(e)}function ih(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Vw(t){return pe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function cy(t,e,n){return{name:sh(t,e),fields:n.value.mapValue.fields}}function Nk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:ee()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(d,p){return d.useProto3Json?(pe(p===void 0||typeof p=="string"),Qe.fromBase64String(p||"")):(pe(p===void 0||p instanceof Buffer||p instanceof Uint8Array),Qe.fromUint8Array(p||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(d){const p=d.code===void 0?M.UNKNOWN:Rw(d.code);return new K(p,d.message||"")}(o);n=new Pw(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bc(t,r.document.name),i=fn(r.document.updateTime),o=r.document.createTime?fn(r.document.createTime):te.min(),l=new At({mapValue:{fields:r.document.fields}}),u=dt.newFoundDocument(s,i,o,l),d=r.targetIds||[],p=r.removedTargetIds||[];n=new hl(d,p,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bc(t,r.document),i=r.readTime?fn(r.readTime):te.min(),o=dt.newNoDocument(s,i),l=r.removedTargetIds||[];n=new hl([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bc(t,r.document),i=r.removedTargetIds||[];n=new hl([],i,s,null)}else{if(!("filter"in e))return ee();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new _k(s,i),l=r.targetId;n=new Nw(l,o)}}return n}function Pk(t,e){let n;if(e instanceof Xo)n={update:cy(t,e.key,e.value)};else if(e instanceof Of)n={delete:sh(t,e.key)};else if(e instanceof Rr)n={update:cy(t,e.key,e.data),updateMask:Uk(e.fieldMask)};else{if(!(e instanceof gk))return ee();n={verify:sh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const l=o.transform;if(l instanceof bo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Do)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Xl)return{fieldPath:o.field.canonicalString(),increment:l.Pe};throw ee()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:kk(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee()}(t,e.precondition)),n}function bk(t,e){return t&&t.length>0?(pe(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?fn(s.updateTime):fn(i);return o.isEqual(te.min())&&(o=fn(i)),new fk(o,s.transformResults||[])}(n,e))):[]}function Dk(t,e){return{documents:[Ow(t,e.path)]}}function Ok(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Ow(t,s);const i=function(d){if(d.length!==0)return Lw(tn.create(d,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(d){if(d.length!==0)return d.map(p=>function(g){return{field:_s(g.field),direction:Lk(g.dir)}}(p))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=nh(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{_t:n,parent:s}}function Vk(t){let e=Rk(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){pe(r===1);const p=n.from[0];p.allDescendants?s=p.collectionId:e=e.child(p.collectionId)}let i=[];n.where&&(i=function(m){const g=Mw(m);return g instanceof tn&&hw(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(m){return m.map(g=>function(T){return new Po(ws(T.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(T.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(m){let g;return g=typeof m=="object"?m.value:m,xu(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(m){const g=!!m.before,_=m.values||[];return new Yl(_,g)}(n.startAt));let d=null;return n.endAt&&(d=function(m){const g=!m.before,_=m.values||[];return new Yl(_,g)}(n.endAt)),ZC(e,s,o,i,l,"F",u,d)}function Mk(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Mw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ws(n.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ws(n.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ws(n.unaryFilter.field);return Fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ws(n.unaryFilter.field);return Fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ee()}}(t):t.fieldFilter!==void 0?function(n){return Fe.create(ws(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ee()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return tn.create(n.compositeFilter.filters.map(r=>Mw(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee()}}(n.compositeFilter.op))}(t):ee()}function Lk(t){return Ik[t]}function jk(t){return Sk[t]}function Fk(t){return Ak[t]}function _s(t){return{fieldPath:t.canonicalString()}}function ws(t){return We.fromServerFormat(t.fieldPath)}function Lw(t){return t instanceof Fe?function(n){if(n.op==="=="){if(Yg(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NAN"}};if(Qg(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Yg(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NAN"}};if(Qg(n.value))return{unaryFilter:{field:_s(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:_s(n.field),op:jk(n.op),value:n.value}}}(t):t instanceof tn?function(n){const r=n.getFilters().map(s=>Lw(s));return r.length===1?r[0]:{compositeFilter:{op:Fk(n.op),filters:r}}}(t):ee()}function Uk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function jw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class ar{constructor(e,n,r,s,i=te.min(),o=te.min(),l=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new ar(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ar(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class $k{constructor(e){this.ct=e}}function zk(t){const e=Vk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?th(e,e.limit,"L"):e}/**
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
 */class Bk{constructor(){this.un=new Hk}addToCollectionParentIndex(e,n){return this.un.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(xr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Hk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(Ie.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(Ie.comparator)).toArray()}}/**
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
 */class ii{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new ii(0)}static kn(){return new ii(-1)}}/**
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
 */class qk{constructor(){this.changes=new pi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Wk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Gk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&io(r.mutation,s,Ot.empty(),Ue.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ie()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ie()){const s=Br();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Hi();return i.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Br();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ie()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,s){let i=Mn();const o=so(),l=function(){return so()}();return n.forEach((u,d)=>{const p=r.get(d.key);s.has(d.key)&&(p===void 0||p.mutation instanceof Rr)?i=i.insert(d.key,d):p!==void 0?(o.set(d.key,p.mutation.getFieldMask()),io(p.mutation,d,p.mutation.getFieldMask(),Ue.now())):o.set(d.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((d,p)=>o.set(d,p)),n.forEach((d,p)=>{var m;return l.set(d,new Wk(p,(m=o.get(d))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=so();let s=new Ne((o,l)=>o-l),i=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let p=r.get(u)||Ot.empty();p=l.applyToLocalView(d,p),r.set(u,p);const m=(s.get(l.batchId)||ie()).add(u);s=s.insert(l.batchId,m)})}).next(()=>{const o=[],l=s.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),d=u.key,p=u.value,m=Ew();p.forEach(g=>{if(!i.has(g)){const _=Cw(n.get(g),r.get(g));_!==null&&m.set(g,_),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,m))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return X.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):gw(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(Br());let l=-1,u=i;return o.next(d=>L.forEach(d,(p,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),i.get(p)?L.resolve():this.remoteDocumentCache.getEntry(e,p).next(g=>{u=u.insert(p,g)}))).next(()=>this.populateOverlays(e,d,i)).next(()=>this.computeViews(e,u,d,ie())).next(p=>({batchId:l,changes:ww(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new X(n)).next(r=>{let s=Hi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Hi();return this.indexManager.getCollectionParents(e,i).next(l=>L.forEach(l,u=>{const d=function(m,g){return new fi(g,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,d,r,s).next(p=>{p.forEach((m,g)=>{o=o.insert(m,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((u,d)=>{const p=d.getKey();o.get(p)===null&&(o=o.insert(p,dt.newInvalidDocument(p)))});let l=Hi();return o.forEach((u,d)=>{const p=i.get(u);p!==void 0&&io(p.mutation,d,Ot.empty(),Ue.now()),Iu(n,d)&&(l=l.insert(u,d))}),l})}}/**
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
 */class Kk{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return L.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:fn(s.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(s){return{name:s.name,query:zk(s.bundledQuery),readTime:fn(s.readTime)}}(n)),L.resolve()}}/**
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
 */class Qk{constructor(){this.overlays=new Ne(X.comparator),this.Ir=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Br();return L.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.Ir.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.Ir.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=Br(),i=n.length+1,o=new X(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Ne((d,p)=>d-p);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let p=i.get(d.largestBatchId);p===null&&(p=Br(),i=i.insert(d.largestBatchId,p)),p.set(d.getKey(),d)}}const l=Br(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,p)=>l.set(d,p)),!(l.size()>=s)););return L.resolve(l)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.Ir.get(s.largestBatchId).delete(r.key);this.Ir.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new vk(n,r));let i=this.Ir.get(n);i===void 0&&(i=ie(),this.Ir.set(n,i)),this.Ir.set(n,i.add(r.key))}}/**
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
 */class Yk{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
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
 */class jf{constructor(){this.Tr=new tt(He.Er),this.dr=new tt(He.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new He(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new He(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new X(new Ie([])),r=new He(n,e),s=new He(n,e+1),i=[];return this.dr.forEachInRange([r,s],o=>{this.Vr(o),i.push(o.key)}),i}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new X(new Ie([])),r=new He(n,e),s=new He(n,e+1);let i=ie();return this.dr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new He(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return X.comparator(e.key,n.key)||he(e.wr,n.wr)}static Ar(e,n){return he(e.wr,n.wr)||X.comparator(e.key,n.key)}}/**
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
 */class Xk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new tt(He.Er)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new yk(i,n,r,s);this.mutationQueue.push(o);for(const l of s)this.br=this.br.add(new He(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.vr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new He(n,0),s=new He(n,Number.POSITIVE_INFINITY),i=[];return this.br.forEachInRange([r,s],o=>{const l=this.Dr(o.wr);i.push(l)}),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(he);return n.forEach(s=>{const i=new He(s,0),o=new He(s,Number.POSITIVE_INFINITY);this.br.forEachInRange([i,o],l=>{r=r.add(l.wr)})}),L.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const o=new He(new X(i),0);let l=new tt(he);return this.br.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===s&&(l=l.add(u.wr)),!0)},o),L.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const s=this.Dr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){pe(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return L.forEach(n.mutations,s=>{const i=new He(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new He(n,0),s=this.br.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Jk{constructor(e){this.Mr=e,this.docs=function(){return new Ne(X.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Mn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Mn();const o=n.path,l=new X(o.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:d,value:{document:p}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||OC(DC(p),r)<=0||(s.has(p.key)||Iu(n,p))&&(i=i.insert(p.key,p.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ee()}Or(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Zk(this)}getSize(e){return L.resolve(this.size)}}class Zk extends qk{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.cr.addEntry(e,s)):this.cr.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
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
 */class eR{constructor(e){this.persistence=e,this.Nr=new pi(n=>Nf(n),Pf),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.Lr=0,this.Br=new jf,this.targetCount=0,this.kr=ii.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,s)=>n(s)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),L.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new ii(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Kn(n),L.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Nr.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)}),L.waitFor(i).next(()=>s)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.Br.containsKey(n))}}/**
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
 */class tR{constructor(e,n){this.qr={},this.overlays={},this.Qr=new Af(0),this.Kr=!1,this.Kr=!0,this.$r=new Yk,this.referenceDelegate=e(this),this.Ur=new eR(this),this.indexManager=new Bk,this.remoteDocumentCache=function(s){return new Jk(s)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new $k(n),this.Gr=new Kk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Qk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new Xk(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new nR(this.Qr.next());return this.referenceDelegate.zr(),r(s).next(i=>this.referenceDelegate.jr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Hr(e,n){return L.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class nR extends MC{constructor(e){super(),this.currentSequenceNumber=e}}class Ff{constructor(e){this.persistence=e,this.Jr=new jf,this.Yr=null}static Zr(e){return new Ff(e)}get Xr(){if(this.Yr)return this.Yr;throw ee()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),L.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(s=>this.Xr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Xr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.Xr,r=>{const s=X.fromPath(r);return this.ei(e,s).next(i=>{i||n.removeEntry(s,te.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return L.or([()=>L.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
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
 */class Uf{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=s}static Wi(e,n){let r=ie(),s=ie();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Uf(e,n.fromCache,r,s)}}/**
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
 */class rR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class sR{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return o1()?8:LC(mt())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.Yi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Zi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new rR;return this.Xi(e,n,o).next(l=>{if(i.result=l,this.zi)return this.es(e,n,o,l.size)})}).next(()=>i.result)}es(e,n,r,s){return r.documentReadCount<this.ji?(ji()<=oe.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),L.resolve()):(ji()<=oe.DEBUG&&Y("QueryEngine","Query:",vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Hi*s?(ji()<=oe.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,hn(n))):L.resolve())}Yi(e,n){if(ey(n))return L.resolve(null);let r=hn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=th(n,null,"F"),r=hn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ie(...i);return this.Ji.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.ts(n,l);return this.ns(n,d,o,u.readTime)?this.Yi(e,th(n,null,"F")):this.rs(e,d,n,u)}))})))}Zi(e,n,r,s){return ey(n)||s.isEqual(te.min())?L.resolve(null):this.Ji.getDocuments(e,r).next(i=>{const o=this.ts(n,i);return this.ns(n,o,r,s)?L.resolve(null):(ji()<=oe.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),vs(n)),this.rs(e,o,n,bC(s,-1)).next(l=>l))})}ts(e,n){let r=new tt(vw(e));return n.forEach((s,i)=>{Iu(e,i)&&(r=r.add(i))}),r}ns(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Xi(e,n,r){return ji()<=oe.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",vs(n)),this.Ji.getDocumentsMatchingQuery(e,n,xr.min(),r)}rs(e,n,r,s){return this.Ji.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class iR{constructor(e,n,r,s){this.persistence=e,this.ss=n,this.serializer=s,this.os=new Ne(he),this._s=new pi(i=>Nf(i),Pf),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Gk(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function oR(t,e,n,r){return new iR(t,e,n,r)}async function Fw(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],l=[];let u=ie();for(const d of s){o.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}for(const d of i){l.push(d.batchId);for(const p of d.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(d=>({hs:d,removedBatchIds:o,addedBatchIds:l}))})})}function aR(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,d,p){const m=d.batch,g=m.keys();let _=L.resolve();return g.forEach(T=>{_=_.next(()=>p.getEntry(u,T)).next(N=>{const O=d.docVersions.get(T);pe(O!==null),N.version.compareTo(O)<0&&(m.applyToRemoteDocument(N,d),N.isValidDocument()&&(N.setReadTime(d.commitVersion),p.addEntry(N)))})}),_.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=ie();for(let d=0;d<l.mutationResults.length;++d)l.mutationResults[d].transformResults.length>0&&(u=u.add(l.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Uw(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function lR(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.os;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.cs.newChangeBuffer({trackRemovals:!0});s=n.os;const l=[];e.targetChanges.forEach((p,m)=>{const g=s.get(m);if(!g)return;l.push(n.Ur.removeMatchingKeys(i,p.removedDocuments,m).next(()=>n.Ur.addMatchingKeys(i,p.addedDocuments,m)));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(m)!==null?_=_.withResumeToken(Qe.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):p.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(p.resumeToken,r)),s=s.insert(m,_),function(N,O,C){return N.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(g,_,p)&&l.push(n.Ur.updateTargetData(i,_))});let u=Mn(),d=ie();if(e.documentUpdates.forEach(p=>{e.resolvedLimboDocuments.has(p)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(i,p))}),l.push(uR(i,o,e.documentUpdates).next(p=>{u=p.Ps,d=p.Is})),!r.isEqual(te.min())){const p=n.Ur.getLastRemoteSnapshotVersion(i).next(m=>n.Ur.setTargetsMetadata(i,i.currentSequenceNumber,r));l.push(p)}return L.waitFor(l).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,u,d)).next(()=>u)}).then(i=>(n.os=s,i))}function uR(t,e,n){let r=ie(),s=ie();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Mn();return n.forEach((l,u)=>{const d=i.get(l);u.isFoundDocument()!==d.isFoundDocument()&&(s=s.add(l)),u.isNoDocument()&&u.version.isEqual(te.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):Y("LocalStore","Ignoring outdated watch update for ",l,". Current version:",d.version," Watch version:",u.version)}),{Ps:o,Is:s}})}function cR(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function dR(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Ur.getTargetData(r,e).next(i=>i?(s=i,L.resolve(s)):n.Ur.allocateTargetId(r).next(o=>(s=new ar(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ur.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.os.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.os=n.os.insert(r.targetId,r),n._s.set(e,r.targetId)),r})}async function oh(t,e,n){const r=ne(t),s=r.os.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Yo(o))throw o;Y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.os=r.os.remove(e),r._s.delete(s.target)}function dy(t,e,n){const r=ne(t);let s=te.min(),i=ie();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,p){const m=ne(u),g=m._s.get(p);return g!==void 0?L.resolve(m.os.get(g)):m.Ur.getTargetData(d,p)}(r,o,hn(e)).next(l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.Ur.getMatchingKeysForTargetId(o,l.targetId).next(u=>{i=u})}).next(()=>r.ss.getDocumentsMatchingQuery(o,e,n?s:te.min(),n?i:ie())).next(l=>(hR(r,tk(e),l),{documents:l,Ts:i})))}function hR(t,e,n){let r=t.us.get(e)||te.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.us.set(e,r)}class hy{constructor(){this.activeTargetIds=ak()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class fR{constructor(){this.so=new hy,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new hy,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pR{_o(e){}shutdown(){}}/**
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
 */class fy{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){Y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){Y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ha=null;function Hc(){return Ha===null?Ha=function(){return 268435456+Math.round(2147483648*Math.random())}():Ha++,"0x"+Ha.toString(16)}/**
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
 */const mR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class gR{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
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
 */const lt="WebChannelConnection";class yR extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${s}/databases/${i}`,this.Co=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get Fo(){return!1}Mo(n,r,s,i,o){const l=Hc(),u=this.xo(n,r.toUriEncodedString());Y("RestConnection",`Sending RPC '${n}' ${l}:`,u,s);const d={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(d,i,o),this.No(n,u,d,s).then(p=>(Y("RestConnection",`Received RPC '${n}' ${l}: `,p),p),p=>{throw rs("RestConnection",`RPC '${n}' ${l} failed with error: `,p,"url: ",u,"request:",s),p})}Lo(n,r,s,i,o,l){return this.Mo(n,r,s,i,o)}Oo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+hi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}xo(n,r){const s=mR[n];return`${this.Do}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,s){const i=Hc();return new Promise((o,l)=>{const u=new ew;u.setWithCredentials(!0),u.listenOnce(tw.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ul.NO_ERROR:const p=u.getResponseJson();Y(lt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(p)),o(p);break;case ul.TIMEOUT:Y(lt,`RPC '${e}' ${i} timed out`),l(new K(M.DEADLINE_EXCEEDED,"Request time out"));break;case ul.HTTP_ERROR:const m=u.getStatus();if(Y(lt,`RPC '${e}' ${i} failed with status:`,m,"response text:",u.getResponseText()),m>0){let g=u.getResponseJson();Array.isArray(g)&&(g=g[0]);const _=g==null?void 0:g.error;if(_&&_.status&&_.message){const T=function(O){const C=O.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(C)>=0?C:M.UNKNOWN}(_.status);l(new K(T,_.message))}else l(new K(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new K(M.UNAVAILABLE,"Connection failed."));break;default:ee()}}finally{Y(lt,`RPC '${e}' ${i} completed.`)}});const d=JSON.stringify(s);Y(lt,`RPC '${e}' ${i} sending request:`,s),u.send(n,"POST",d,r,15)})}Bo(e,n,r){const s=Hc(),i=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=sw(),l=rw(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(u.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const p=i.join("");Y(lt,`Creating RPC '${e}' stream ${s}: ${p}`,u);const m=o.createWebChannel(p,u);let g=!1,_=!1;const T=new gR({Io:O=>{_?Y(lt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(g||(Y(lt,`Opening RPC '${e}' stream ${s} transport.`),m.open(),g=!0),Y(lt,`RPC '${e}' stream ${s} sending:`,O),m.send(O))},To:()=>m.close()}),N=(O,C,w)=>{O.listen(C,A=>{try{w(A)}catch(D){setTimeout(()=>{throw D},0)}})};return N(m,Bi.EventType.OPEN,()=>{_||(Y(lt,`RPC '${e}' stream ${s} transport opened.`),T.yo())}),N(m,Bi.EventType.CLOSE,()=>{_||(_=!0,Y(lt,`RPC '${e}' stream ${s} transport closed`),T.So())}),N(m,Bi.EventType.ERROR,O=>{_||(_=!0,rs(lt,`RPC '${e}' stream ${s} transport errored:`,O),T.So(new K(M.UNAVAILABLE,"The operation could not be completed")))}),N(m,Bi.EventType.MESSAGE,O=>{var C;if(!_){const w=O.data[0];pe(!!w);const A=w,D=A.error||((C=A[0])===null||C===void 0?void 0:C.error);if(D){Y(lt,`RPC '${e}' stream ${s} received error:`,D);const $=D.status;let U=function(E){const I=Le[E];if(I!==void 0)return Rw(I)}($),x=D.message;U===void 0&&(U=M.INTERNAL,x="Unknown error status: "+$+" with message "+D.message),_=!0,T.So(new K(U,x)),m.close()}else Y(lt,`RPC '${e}' stream ${s} received:`,w),T.bo(w)}}),N(l,nw.STAT_EVENT,O=>{O.stat===Qd.PROXY?Y(lt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===Qd.NOPROXY&&Y(lt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{T.wo()},0),T}}function qc(){return typeof document<"u"?document:null}/**
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
 */function ku(t){return new Ck(t,!0)}/**
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
 */class $w{constructor(e,n,r=1e3,s=1.5,i=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=s,this.Qo=i,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,s,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
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
 */class zw{constructor(e,n,r,s,i,o,l,u){this.ui=e,this.Ho=r,this.Jo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new $w(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(Vn(n.toString()),Vn("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Yo===n&&this.P_(r,s)},r=>{e(()=>{const s=new K(M.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(s)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(s=>{r(()=>this.I_(s))}),this.stream.onMessage(s=>{r(()=>++this.e_==1?this.E_(s):this.onNext(s))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return Y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(Y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class vR extends zw{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}T_(e,n){return this.connection.Bo("Listen",e,n)}E_(e){return this.onNext(e)}onNext(e){this.t_.reset();const n=Nk(this.serializer,e),r=function(i){if(!("targetChange"in i))return te.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?te.min():o.readTime?fn(o.readTime):te.min()}(e);return this.listener.d_(n,r)}A_(e){const n={};n.database=ih(this.serializer),n.addTarget=function(i,o){let l;const u=o.target;if(l=Zd(u)?{documents:Dk(i,u)}:{query:Ok(i,u)._t},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=bw(i,o.resumeToken);const d=nh(i,o.expectedCount);d!==null&&(l.expectedCount=d)}else if(o.snapshotVersion.compareTo(te.min())>0){l.readTime=Jl(i,o.snapshotVersion.toTimestamp());const d=nh(i,o.expectedCount);d!==null&&(l.expectedCount=d)}return l}(this.serializer,e);const r=Mk(this.serializer,e);r&&(n.labels=r),this.a_(n)}R_(e){const n={};n.database=ih(this.serializer),n.removeTarget=e,this.a_(n)}}class _R extends zw{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return pe(!!e.streamToken),this.lastStreamToken=e.streamToken,pe(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){pe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=bk(e.writeResults,e.commitTime),r=fn(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=ih(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Pk(this.serializer,r))};this.a_(n)}}/**
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
 */class wR extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.y_=!1}w_(){if(this.y_)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Mo(e,rh(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(M.UNKNOWN,i.toString())})}Lo(e,n,r,s,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Lo(e,rh(n,r),s,o,l,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(M.UNKNOWN,o.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class ER{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Vn(n),this.D_=!1):Y("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
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
 */class xR{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=i,this.k_._o(o=>{r.enqueueAndForget(async()=>{ds(this)&&(Y("RemoteStore","Restarting streams for network reachability change."),await async function(u){const d=ne(u);d.L_.add(4),await Zo(d),d.q_.set("Unknown"),d.L_.delete(4),await Ru(d)}(this))})}),this.q_=new ER(r,s)}}async function Ru(t){if(ds(t))for(const e of t.B_)await e(!0)}async function Zo(t){for(const e of t.B_)await e(!1)}function Bw(t,e){const n=ne(t);n.N_.has(e.targetId)||(n.N_.set(e.targetId,e),Hf(n)?Bf(n):mi(n).r_()&&zf(n,e))}function $f(t,e){const n=ne(t),r=mi(n);n.N_.delete(e),r.r_()&&Hw(n,e),n.N_.size===0&&(r.r_()?r.o_():ds(n)&&n.q_.set("Unknown"))}function zf(t,e){if(t.Q_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(te.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}mi(t).A_(e)}function Hw(t,e){t.Q_.xe(e),mi(t).R_(e)}function Bf(t){t.Q_=new Tk({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.N_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),mi(t).start(),t.q_.v_()}function Hf(t){return ds(t)&&!mi(t).n_()&&t.N_.size>0}function ds(t){return ne(t).L_.size===0}function qw(t){t.Q_=void 0}async function TR(t){t.q_.set("Online")}async function IR(t){t.N_.forEach((e,n)=>{zf(t,e)})}async function SR(t,e){qw(t),Hf(t)?(t.q_.M_(e),Bf(t)):t.q_.set("Unknown")}async function AR(t,e,n){if(t.q_.set("Online"),e instanceof Pw&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const l of i.targetIds)s.N_.has(l)&&(await s.remoteSyncer.rejectListen(l,o),s.N_.delete(l),s.Q_.removeTarget(l))}(t,e)}catch(r){Y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Zl(t,r)}else if(e instanceof hl?t.Q_.Ke(e):e instanceof Nw?t.Q_.He(e):t.Q_.We(e),!n.isEqual(te.min()))try{const r=await Uw(t.localStore);n.compareTo(r)>=0&&await function(i,o){const l=i.Q_.rt(o);return l.targetChanges.forEach((u,d)=>{if(u.resumeToken.approximateByteSize()>0){const p=i.N_.get(d);p&&i.N_.set(d,p.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,d)=>{const p=i.N_.get(u);if(!p)return;i.N_.set(u,p.withResumeToken(Qe.EMPTY_BYTE_STRING,p.snapshotVersion)),Hw(i,u);const m=new ar(p.target,u,d,p.sequenceNumber);zf(i,m)}),i.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){Y("RemoteStore","Failed to raise snapshot:",r),await Zl(t,r)}}async function Zl(t,e,n){if(!Yo(e))throw e;t.L_.add(1),await Zo(t),t.q_.set("Offline"),n||(n=()=>Uw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Y("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ru(t)})}function Ww(t,e){return e().catch(n=>Zl(t,n,e))}async function Nu(t){const e=ne(t),n=Ir(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;CR(e);)try{const s=await cR(e.localStore,r);if(s===null){e.O_.length===0&&n.o_();break}r=s.batchId,kR(e,s)}catch(s){await Zl(e,s)}Gw(e)&&Kw(e)}function CR(t){return ds(t)&&t.O_.length<10}function kR(t,e){t.O_.push(e);const n=Ir(t);n.r_()&&n.V_&&n.m_(e.mutations)}function Gw(t){return ds(t)&&!Ir(t).n_()&&t.O_.length>0}function Kw(t){Ir(t).start()}async function RR(t){Ir(t).p_()}async function NR(t){const e=Ir(t);for(const n of t.O_)e.m_(n.mutations)}async function PR(t,e,n){const r=t.O_.shift(),s=Vf.from(r,e,n);await Ww(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Nu(t)}async function bR(t,e){e&&Ir(t).V_&&await async function(r,s){if(function(o){return wk(o)&&o!==M.ABORTED}(s.code)){const i=r.O_.shift();Ir(r).s_(),await Ww(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Nu(r)}}(t,e),Gw(t)&&Kw(t)}async function py(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),Y("RemoteStore","RemoteStore received new credentials");const r=ds(n);n.L_.add(3),await Zo(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ru(n)}async function DR(t,e){const n=ne(t);e?(n.L_.delete(2),await Ru(n)):e||(n.L_.add(2),await Zo(n),n.q_.set("Unknown"))}function mi(t){return t.K_||(t.K_=function(n,r,s){const i=ne(n);return i.w_(),new vR(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:TR.bind(null,t),Ro:IR.bind(null,t),mo:SR.bind(null,t),d_:AR.bind(null,t)}),t.B_.push(async e=>{e?(t.K_.s_(),Hf(t)?Bf(t):t.q_.set("Unknown")):(await t.K_.stop(),qw(t))})),t.K_}function Ir(t){return t.U_||(t.U_=function(n,r,s){const i=ne(n);return i.w_(),new _R(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:RR.bind(null,t),mo:bR.bind(null,t),f_:NR.bind(null,t),g_:PR.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Nu(t)):(await t.U_.stop(),t.O_.length>0&&(Y("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
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
 */class qf{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Kr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,l=new qf(e,n,o,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wf(t,e){if(Vn("AsyncQueue",`${e}: ${t}`),Yo(t))return new K(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class qs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||X.comparator(n.key,r.key):(n,r)=>X.comparator(n.key,r.key),this.keyedMap=Hi(),this.sortedSet=new Ne(this.comparator)}static emptySet(e){return new qs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof qs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new qs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class my{constructor(){this.W_=new Ne(X.comparator)}track(e){const n=e.doc.key,r=this.W_.get(n);r?e.type!==0&&r.type===3?this.W_=this.W_.insert(n,e):e.type===3&&r.type!==1?this.W_=this.W_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.W_=this.W_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.W_=this.W_.remove(n):e.type===1&&r.type===2?this.W_=this.W_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.W_=this.W_.insert(n,{type:2,doc:e.doc}):ee():this.W_=this.W_.insert(n,e)}G_(){const e=[];return this.W_.inorderTraversal((n,r)=>{e.push(r)}),e}}class oi{constructor(e,n,r,s,i,o,l,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new oi(e,n,qs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Tu(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class OR{constructor(){this.z_=void 0,this.j_=[]}H_(){return this.j_.some(e=>e.J_())}}class VR{constructor(){this.queries=gy(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const s=ne(n),i=s.queries;s.queries=gy(),i.forEach((o,l)=>{for(const u of l.j_)u.onError(r)})})(this,new K(M.ABORTED,"Firestore shutting down"))}}function gy(){return new pi(t=>yw(t),Tu)}async function MR(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.H_()&&e.J_()&&(r=2):(i=new OR,r=e.J_()?0:1);try{switch(r){case 0:i.z_=await n.onListen(s,!0);break;case 1:i.z_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const l=Wf(o,`Initialization of query '${vs(e.query)}' failed`);return void e.onError(l)}n.queries.set(s,i),i.j_.push(e),e.Z_(n.onlineState),i.z_&&e.X_(i.z_)&&Gf(n)}async function LR(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.j_.indexOf(e);o>=0&&(i.j_.splice(o,1),i.j_.length===0?s=e.J_()?0:1:!i.H_()&&e.J_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function jR(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const l of o.j_)l.X_(s)&&(r=!0);o.z_=s}}r&&Gf(n)}function FR(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.j_)i.onError(n);r.queries.delete(e)}function Gf(t){t.Y_.forEach(e=>{e.next()})}var ah,yy;(yy=ah||(ah={})).ea="default",yy.Cache="cache";class UR{constructor(e,n,r){this.query=e,this.ta=n,this.na=!1,this.ra=null,this.onlineState="Unknown",this.options=r||{}}X_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new oi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.na?this.ia(e)&&(this.ta.next(e),n=!0):this.sa(e,this.onlineState)&&(this.oa(e),n=!0),this.ra=e,n}onError(e){this.ta.error(e)}Z_(e){this.onlineState=e;let n=!1;return this.ra&&!this.na&&this.sa(this.ra,e)&&(this.oa(this.ra),n=!0),n}sa(e,n){if(!e.fromCache||!this.J_())return!0;const r=n!=="Offline";return(!this.options._a||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ia(e){if(e.docChanges.length>0)return!0;const n=this.ra&&this.ra.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}oa(e){e=oi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.na=!0,this.ta.next(e)}J_(){return this.options.source!==ah.Cache}}/**
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
 */class Qw{constructor(e){this.key=e}}class Yw{constructor(e){this.key=e}}class $R{constructor(e,n){this.query=e,this.Ta=n,this.Ea=null,this.hasCachedResults=!1,this.current=!1,this.da=ie(),this.mutatedKeys=ie(),this.Aa=vw(e),this.Ra=new qs(this.Aa)}get Va(){return this.Ta}ma(e,n){const r=n?n.fa:new my,s=n?n.Ra:this.Ra;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,l=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,d=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((p,m)=>{const g=s.get(p),_=Iu(this.query,m)?m:null,T=!!g&&this.mutatedKeys.has(g.key),N=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let O=!1;g&&_?g.data.isEqual(_.data)?T!==N&&(r.track({type:3,doc:_}),O=!0):this.ga(g,_)||(r.track({type:2,doc:_}),O=!0,(u&&this.Aa(_,u)>0||d&&this.Aa(_,d)<0)&&(l=!0)):!g&&_?(r.track({type:0,doc:_}),O=!0):g&&!_&&(r.track({type:1,doc:g}),O=!0,(u||d)&&(l=!0)),O&&(_?(o=o.add(_),i=N?i.add(p):i.delete(p)):(o=o.delete(p),i=i.delete(p)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const p=this.query.limitType==="F"?o.last():o.first();o=o.delete(p.key),i=i.delete(p.key),r.track({type:1,doc:p})}return{Ra:o,fa:r,ns:l,mutatedKeys:i}}ga(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Ra;this.Ra=e.Ra,this.mutatedKeys=e.mutatedKeys;const o=e.fa.G_();o.sort((p,m)=>function(_,T){const N=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee()}};return N(_)-N(T)}(p.type,m.type)||this.Aa(p.doc,m.doc)),this.pa(r),s=s!=null&&s;const l=n&&!s?this.ya():[],u=this.da.size===0&&this.current&&!s?1:0,d=u!==this.Ea;return this.Ea=u,o.length!==0||d?{snapshot:new oi(this.query,e.Ra,i,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),wa:l}:{wa:l}}Z_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ra:this.Ra,fa:new my,mutatedKeys:this.mutatedKeys,ns:!1},!1)):{wa:[]}}Sa(e){return!this.Ta.has(e)&&!!this.Ra.has(e)&&!this.Ra.get(e).hasLocalMutations}pa(e){e&&(e.addedDocuments.forEach(n=>this.Ta=this.Ta.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ta=this.Ta.delete(n)),this.current=e.current)}ya(){if(!this.current)return[];const e=this.da;this.da=ie(),this.Ra.forEach(r=>{this.Sa(r.key)&&(this.da=this.da.add(r.key))});const n=[];return e.forEach(r=>{this.da.has(r)||n.push(new Yw(r))}),this.da.forEach(r=>{e.has(r)||n.push(new Qw(r))}),n}ba(e){this.Ta=e.Ts,this.da=ie();const n=this.ma(e.documents);return this.applyChanges(n,!0)}Da(){return oi.fromInitialDocuments(this.query,this.Ra,this.mutatedKeys,this.Ea===0,this.hasCachedResults)}}class zR{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class BR{constructor(e){this.key=e,this.va=!1}}class HR{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ca={},this.Fa=new pi(l=>yw(l),Tu),this.Ma=new Map,this.xa=new Set,this.Oa=new Ne(X.comparator),this.Na=new Map,this.La=new jf,this.Ba={},this.ka=new Map,this.qa=ii.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function qR(t,e,n=!0){const r=nE(t);let s;const i=r.Fa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.Da()):s=await Xw(r,e,n,!0),s}async function WR(t,e){const n=nE(t);await Xw(n,e,!0,!1)}async function Xw(t,e,n,r){const s=await dR(t.localStore,hn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let l;return r&&(l=await GR(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Bw(t.remoteStore,s),l}async function GR(t,e,n,r,s){t.Ka=(m,g,_)=>async function(N,O,C,w){let A=O.view.ma(C);A.ns&&(A=await dy(N.localStore,O.query,!1).then(({documents:x})=>O.view.ma(x,A)));const D=w&&w.targetChanges.get(O.targetId),$=w&&w.targetMismatches.get(O.targetId)!=null,U=O.view.applyChanges(A,N.isPrimaryClient,D,$);return _y(N,O.targetId,U.wa),U.snapshot}(t,m,g,_);const i=await dy(t.localStore,e,!0),o=new $R(e,i.Ts),l=o.ma(i.documents),u=Jo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),d=o.applyChanges(l,t.isPrimaryClient,u);_y(t,n,d.wa);const p=new zR(e,n,o);return t.Fa.set(e,p),t.Ma.has(n)?t.Ma.get(n).push(e):t.Ma.set(n,[e]),d.snapshot}async function KR(t,e,n){const r=ne(t),s=r.Fa.get(e),i=r.Ma.get(s.targetId);if(i.length>1)return r.Ma.set(s.targetId,i.filter(o=>!Tu(o,e))),void r.Fa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await oh(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&$f(r.remoteStore,s.targetId),lh(r,s.targetId)}).catch(Qo)):(lh(r,s.targetId),await oh(r.localStore,s.targetId,!0))}async function QR(t,e){const n=ne(t),r=n.Fa.get(e),s=n.Ma.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),$f(n.remoteStore,r.targetId))}async function YR(t,e,n){const r=rN(t);try{const s=await function(o,l){const u=ne(o),d=Ue.now(),p=l.reduce((_,T)=>_.add(T.key),ie());let m,g;return u.persistence.runTransaction("Locally write mutations","readwrite",_=>{let T=Mn(),N=ie();return u.cs.getEntries(_,p).next(O=>{T=O,T.forEach((C,w)=>{w.isValidDocument()||(N=N.add(C))})}).next(()=>u.localDocuments.getOverlayedDocuments(_,T)).next(O=>{m=O;const C=[];for(const w of l){const A=mk(w,m.get(w.key).overlayedDocument);A!=null&&C.push(new Rr(w.key,A,uw(A.value.mapValue),Bt.exists(!0)))}return u.mutationQueue.addMutationBatch(_,d,C,l)}).next(O=>{g=O;const C=O.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(_,O.batchId,C)})}).then(()=>({batchId:g.batchId,changes:ww(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,l,u){let d=o.Ba[o.currentUser.toKey()];d||(d=new Ne(he)),d=d.insert(l,u),o.Ba[o.currentUser.toKey()]=d}(r,s.batchId,n),await ea(r,s.changes),await Nu(r.remoteStore)}catch(s){const i=Wf(s,"Failed to persist write");n.reject(i)}}async function Jw(t,e){const n=ne(t);try{const r=await lR(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Na.get(i);o&&(pe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.va=!0:s.modifiedDocuments.size>0?pe(o.va):s.removedDocuments.size>0&&(pe(o.va),o.va=!1))}),await ea(n,r,e)}catch(r){await Qo(r)}}function vy(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Fa.forEach((i,o)=>{const l=o.view.Z_(e);l.snapshot&&s.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let d=!1;u.queries.forEach((p,m)=>{for(const g of m.j_)g.Z_(l)&&(d=!0)}),d&&Gf(u)}(r.eventManager,e),s.length&&r.Ca.d_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XR(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Na.get(e),i=s&&s.key;if(i){let o=new Ne(X.comparator);o=o.insert(i,dt.newNoDocument(i,te.min()));const l=ie().add(i),u=new Cu(te.min(),new Map,new Ne(he),o,l);await Jw(r,u),r.Oa=r.Oa.remove(i),r.Na.delete(e),Kf(r)}else await oh(r.localStore,e,!1).then(()=>lh(r,e,n)).catch(Qo)}async function JR(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await aR(n.localStore,e);eE(n,r,null),Zw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ea(n,s)}catch(s){await Qo(s)}}async function ZR(t,e,n){const r=ne(t);try{const s=await function(o,l){const u=ne(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let p;return u.mutationQueue.lookupMutationBatch(d,l).next(m=>(pe(m!==null),p=m.keys(),u.mutationQueue.removeMutationBatch(d,m))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,p)).next(()=>u.localDocuments.getDocuments(d,p))})}(r.localStore,e);eE(r,e,n),Zw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ea(r,s)}catch(s){await Qo(s)}}function Zw(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function eE(t,e,n){const r=ne(t);let s=r.Ba[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ba[r.currentUser.toKey()]=s}}function lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Ma.get(e))t.Fa.delete(r),n&&t.Ca.$a(r,n);t.Ma.delete(e),t.isPrimaryClient&&t.La.gr(e).forEach(r=>{t.La.containsKey(r)||tE(t,r)})}function tE(t,e){t.xa.delete(e.path.canonicalString());const n=t.Oa.get(e);n!==null&&($f(t.remoteStore,n),t.Oa=t.Oa.remove(e),t.Na.delete(n),Kf(t))}function _y(t,e,n){for(const r of n)r instanceof Qw?(t.La.addReference(r.key,e),eN(t,r)):r instanceof Yw?(Y("SyncEngine","Document no longer in limbo: "+r.key),t.La.removeReference(r.key,e),t.La.containsKey(r.key)||tE(t,r.key)):ee()}function eN(t,e){const n=e.key,r=n.path.canonicalString();t.Oa.get(n)||t.xa.has(r)||(Y("SyncEngine","New document in limbo: "+n),t.xa.add(r),Kf(t))}function Kf(t){for(;t.xa.size>0&&t.Oa.size<t.maxConcurrentLimboResolutions;){const e=t.xa.values().next().value;t.xa.delete(e);const n=new X(Ie.fromString(e)),r=t.qa.next();t.Na.set(r,new BR(n)),t.Oa=t.Oa.insert(n,r),Bw(t.remoteStore,new ar(hn(bf(n.path)),r,"TargetPurposeLimboResolution",Af.oe))}}async function ea(t,e,n){const r=ne(t),s=[],i=[],o=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{o.push(r.Ka(u,e,n).then(d=>{var p;if((d||n)&&r.isPrimaryClient){const m=d?!d.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))===null||p===void 0?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(d){s.push(d);const m=Uf.Wi(u.targetId,d);i.push(m)}}))}),await Promise.all(o),r.Ca.d_(s),await async function(u,d){const p=ne(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>L.forEach(d,g=>L.forEach(g.$i,_=>p.persistence.referenceDelegate.addReference(m,g.targetId,_)).next(()=>L.forEach(g.Ui,_=>p.persistence.referenceDelegate.removeReference(m,g.targetId,_)))))}catch(m){if(!Yo(m))throw m;Y("LocalStore","Failed to update sequence numbers: "+m)}for(const m of d){const g=m.targetId;if(!m.fromCache){const _=p.os.get(g),T=_.snapshotVersion,N=_.withLastLimboFreeSnapshotVersion(T);p.os=p.os.insert(g,N)}}}(r.localStore,i))}async function tN(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){Y("SyncEngine","User change. New user:",e.toKey());const r=await Fw(n.localStore,e);n.currentUser=e,function(i,o){i.ka.forEach(l=>{l.forEach(u=>{u.reject(new K(M.CANCELLED,o))})}),i.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ea(n,r.hs)}}function nN(t,e){const n=ne(t),r=n.Na.get(e);if(r&&r.va)return ie().add(r.key);{let s=ie();const i=n.Ma.get(e);if(!i)return s;for(const o of i){const l=n.Fa.get(o);s=s.unionWith(l.view.Va)}return s}}function nE(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Jw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XR.bind(null,e),e.Ca.d_=jR.bind(null,e.eventManager),e.Ca.$a=FR.bind(null,e.eventManager),e}function rN(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=JR.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZR.bind(null,e),e}class eu{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ku(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return oR(this.persistence,new sR,e.initialUser,this.serializer)}Ga(e){return new tR(Ff.Zr,this.serializer)}Wa(e){return new fR}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}eu.provider={build:()=>new eu};class uh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>vy(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tN.bind(null,this.syncEngine),await DR(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new VR}()}createDatastore(e){const n=ku(e.databaseInfo.databaseId),r=function(i){return new yR(i)}(e.databaseInfo);return function(i,o,l,u){return new wR(i,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,l){return new xR(r,s,i,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>vy(this.syncEngine,n,0),function(){return fy.D()?new fy:new pR}())}createSyncEngine(e,n){return function(s,i,o,l,u,d,p){const m=new HR(s,i,o,l,u,d);return p&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(s){const i=ne(s);Y("RemoteStore","RemoteStore shutting down."),i.L_.add(5),await Zo(i),i.k_.shutdown(),i.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}uh.provider={build:()=>new uh};/**
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
 */class sN{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ya(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ya(this.observer.error,e):Vn("Uncaught Error in snapshot listener:",e.toString()))}Za(){this.muted=!0}Ya(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class iN{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ut.UNAUTHENTICATED,this.clientId=Sf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async o=>{Y("FirestoreClient","Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(Y("FirestoreClient","Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Kr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Wf(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Wc(t,e){t.asyncQueue.verifyOperationInProgress(),Y("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Fw(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function wy(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oN(t);Y("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>py(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>py(e.remoteStore,s)),t._onlineComponents=e}async function oN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Wc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(s){return s.name==="FirebaseError"?s.code===M.FAILED_PRECONDITION||s.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(n))throw n;rs("Error using user provided cache. Falling back to memory cache: "+n),await Wc(t,new eu)}}else Y("FirestoreClient","Using default OfflineComponentProvider"),await Wc(t,new eu);return t._offlineComponents}async function rE(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y("FirestoreClient","Using user provided OnlineComponentProvider"),await wy(t,t._uninitializedComponentsProvider._online)):(Y("FirestoreClient","Using default OnlineComponentProvider"),await wy(t,new uh))),t._onlineComponents}function aN(t){return rE(t).then(e=>e.syncEngine)}async function Ey(t){const e=await rE(t),n=e.eventManager;return n.onListen=qR.bind(null,e.syncEngine),n.onUnlisten=KR.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=WR.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QR.bind(null,e.syncEngine),n}/**
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
 */function sE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const xy=new Map;/**
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
 */function iE(t,e,n){if(!n)throw new K(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oE(t,e,n,r){if(e===!0&&r===!0)throw new K(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ty(t){if(!X.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Iy(t){if(X.isDocumentKey(t))throw new K(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Pu(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ee()}function Zt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Pu(t);throw new K(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Sy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new K(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oE("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=sE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class bu{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Sy({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Sy(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ow;switch(r.type){case"firstParty":return new CC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=xy.get(n);r&&(Y("ComponentProvider","Removing Datastore"),xy.delete(n),r.terminate())}(this),Promise.resolve()}}function aE(t,e,n,r={}){var s;const i=(t=Zt(t,bu))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&rs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=ut.MOCK_USER;else{l=ZI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const d=r.mockUserToken.sub||r.mockUserToken.user_id;if(!d)throw new K(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new ut(d)}t._authCredentials=new IC(new iw(l,u))}}/**
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
 */class Nr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Nr(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class Cn extends Nr{constructor(e,n,r){super(e,n,bf(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new X(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function Tt(t,e,...n){if(t=Ke(t),iE("collection","path",e),t instanceof bu){const r=Ie.fromString(e,...n);return Iy(r),new Cn(t,null,r)}{if(!(t instanceof ft||t instanceof Cn))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Iy(r),new Cn(t.firestore,null,r)}}function It(t,e,...n){if(t=Ke(t),arguments.length===1&&(e=Sf.newId()),iE("doc","path",e),t instanceof bu){const r=Ie.fromString(e,...n);return Ty(r),new ft(t,null,new X(r))}{if(!(t instanceof ft||t instanceof Cn))throw new K(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return Ty(r),new ft(t.firestore,t instanceof Cn?t.converter:null,new X(r))}}/**
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
 */class Ay{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new $w(this,"async_queue_retry"),this.Vu=()=>{const r=qc();r&&Y("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=qc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Kr;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!Yo(e))throw e;Y("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const s=function(o){let l=o.message||"";return o.stack&&(l=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),l}(r);throw Vn("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const s=qf.createAndSchedule(this,e,n,r,i=>this.yu(i));return this.Tu.push(s),s}fu(){this.Eu&&ee()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}function Cy(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Sr extends bu{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ay,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ay(e),this._firestoreClient=void 0,await e}}}function lE(t,e){const n=typeof t=="object"?t:v0(),r=typeof t=="string"?t:"(default)",s=ff(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=XI("firestore");i&&aE(s,...i)}return s}function Qf(t){if(t._terminated)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||lN(t),t._firestoreClient}function lN(t){var e,n,r;const s=t._freezeSettings(),i=function(l,u,d,p){return new UC(l,u,d,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,sE(p.experimentalLongPollingOptions),p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new iN(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
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
 */class os{constructor(e){this._byteString=e}static fromBase64String(e){try{return new os(Qe.fromBase64String(e))}catch(n){throw new K(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new os(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class ta{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new We(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class na{constructor(e){this._methodName=e}}/**
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
 */class Du{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */class Ou{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const uN=/^__.*__$/;class cN{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new Xo(e,this.data,n,this.fieldTransforms)}}class uE{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cE(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee()}}class Yf{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.vu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Yf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.Ou(e),s}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Fu({path:r,xu:!1});return s.vu(),s}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return tu(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(cE(this.Cu)&&uN.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class dN{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ku(e)}Qu(e,n,r,s=!1){return new Yf({Cu:e,methodName:n,qu:r,path:We.emptyPath(),xu:!1,ku:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vu(t){const e=t._freezeSettings(),n=ku(t._databaseId);return new dN(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dE(t,e,n,r,s,i={}){const o=t.Qu(i.merge||i.mergeFields?2:0,e,n,s);Jf("Data must be an object, but it was:",o,r);const l=hE(r,o);let u,d;if(i.merge)u=new Ot(o.fieldMask),d=o.fieldTransforms;else if(i.mergeFields){const p=[];for(const m of i.mergeFields){const g=ch(e,m,n);if(!o.contains(g))throw new K(M.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);pE(p,g)||p.push(g)}u=new Ot(p),d=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,d=o.fieldTransforms;return new cN(new At(l),u,d)}class Mu extends na{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mu}}class Xf extends na{_toFieldTransform(e){return new dk(e.path,new bo)}isEqual(e){return e instanceof Xf}}function hN(t,e,n,r){const s=t.Qu(1,e,n);Jf("Data must be an object, but it was:",s,r);const i=[],o=At.empty();cs(r,(u,d)=>{const p=Zf(e,u,n);d=Ke(d);const m=s.Nu(p);if(d instanceof Mu)i.push(p);else{const g=ra(d,m);g!=null&&(i.push(p),o.set(p,g))}});const l=new Ot(i);return new uE(o,l,s.fieldTransforms)}function fN(t,e,n,r,s,i){const o=t.Qu(1,e,n),l=[ch(e,r,n)],u=[s];if(i.length%2!=0)throw new K(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)l.push(ch(e,i[g])),u.push(i[g+1]);const d=[],p=At.empty();for(let g=l.length-1;g>=0;--g)if(!pE(d,l[g])){const _=l[g];let T=u[g];T=Ke(T);const N=o.Nu(_);if(T instanceof Mu)d.push(_);else{const O=ra(T,N);O!=null&&(d.push(_),p.set(_,O))}}const m=new Ot(d);return new uE(p,m,o.fieldTransforms)}function pN(t,e,n,r=!1){return ra(n,t.Qu(r?4:3,e))}function ra(t,e){if(fE(t=Ke(t)))return Jf("Unsupported field value:",e,t),hE(t,e);if(t instanceof na)return function(r,s){if(!cE(s.Cu))throw s.Bu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Bu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const l of r){let u=ra(l,s.Lu(o));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return lk(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ue.fromDate(r);return{timestampValue:Jl(s.serializer,i)}}if(r instanceof Ue){const i=new Ue(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Jl(s.serializer,i)}}if(r instanceof Du)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof os)return{bytesValue:bw(s.serializer,r._byteString)};if(r instanceof ft){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Bu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Lf(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Ou)return function(o,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Df(l.serializer,u)})}}}}}}(r,s);throw s.Bu(`Unsupported field value: ${Pu(r)}`)}(t,e)}function hE(t,e){const n={};return aw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):cs(t,(r,s)=>{const i=ra(s,e.Mu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function fE(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ue||t instanceof Du||t instanceof os||t instanceof ft||t instanceof na||t instanceof Ou)}function Jf(t,e,n){if(!fE(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=Pu(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ch(t,e,n){if((e=Ke(e))instanceof ta)return e._internalPath;if(typeof e=="string")return Zf(t,e);throw tu("Field path arguments must be of type string or ",t,!1,void 0,n)}const mN=new RegExp("[~\\*/\\[\\]]");function Zf(t,e,n){if(e.search(mN)>=0)throw tu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ta(...e.split("."))._internalPath}catch{throw tu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function tu(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new K(M.INVALID_ARGUMENT,l+t+u)}function pE(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class mE{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ep("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gN extends mE{data(){return super.data()}}function ep(t,e){return typeof e=="string"?Zf(t,e):e instanceof ta?e._internalPath:e._delegate._internalPath}/**
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
 */function yN(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class tp{}class np extends tp{}function fl(t,e,...n){let r=[];e instanceof tp&&r.push(e),r=r.concat(n),function(i){const o=i.filter(u=>u instanceof ju).length,l=i.filter(u=>u instanceof Lu).length;if(o>1||o>0&&l>0)throw new K(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Lu extends np{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Lu(e,n,r)}_apply(e){const n=this._parse(e);return gE(e._query,n),new Nr(e.firestore,e.converter,eh(e._query,n))}_parse(e){const n=Vu(e.firestore);return function(i,o,l,u,d,p,m){let g;if(d.isKeyField()){if(p==="array-contains"||p==="array-contains-any")throw new K(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${p}' queries on documentId().`);if(p==="in"||p==="not-in"){Ry(m,p);const _=[];for(const T of m)_.push(ky(u,i,T));g={arrayValue:{values:_}}}else g=ky(u,i,m)}else p!=="in"&&p!=="not-in"&&p!=="array-contains-any"||Ry(m,p),g=pN(l,o,m,p==="in"||p==="not-in");return Fe.create(d,p,g)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class ju extends tp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ju(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:tn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const l=i.getFlattenedFilters();for(const u of l)gE(o,u),o=eh(o,u)}(e._query,n),new Nr(e.firestore,e.converter,eh(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Fu extends np{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Fu(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new K(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new K(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Po(i,o)}(e._query,this._field,this._direction);return new Nr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new fi(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function dh(t,e="asc"){const n=e,r=ep("orderBy",t);return Fu._create(r,n)}function ky(t,e,n){if(typeof(n=Ke(n))=="string"){if(n==="")throw new K(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!gw(e)&&n.indexOf("/")!==-1)throw new K(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ie.fromString(n));if(!X.isDocumentKey(r))throw new K(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kg(t,new X(r))}if(n instanceof ft)return Kg(t,n._key);throw new K(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Pu(n)}.`)}function Ry(t,e){if(!Array.isArray(t)||t.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function gE(t,e){const n=function(s,i){for(const o of s)for(const l of o.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new K(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new K(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class yE{convertValue(e,n="none"){switch(is(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ee()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return cs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n.value.arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map(o=>Oe(o.doubleValue));return new Ou(i)}convertGeoPoint(e){return new Du(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=kf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ro(e));default:return null}}convertTimestamp(e){const n=Tr(e);return new Ue(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ie.fromString(e);pe(jw(r));const s=new ni(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(n)||Vn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function vE(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Vs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rp extends mE{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new oo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ep("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class oo extends rp{data(e={}){return super.data(e)}}class _E{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Vs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new oo(this._firestore,this._userDataWriter,r.key,r,new Vs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(l=>{const u=new oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Vs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(l=>i||l.type!==3).map(l=>{const u=new oo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Vs(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let d=-1,p=-1;return l.type!==0&&(d=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:vN(l.type),doc:u,oldIndex:d,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function vN(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee()}}class wE extends yE{constructor(e){super(),this.firestore=e}convertBytes(e){return new os(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function _N(t,e,n){t=Zt(t,ft);const r=Zt(t.firestore,Sr),s=vE(t.converter,e,n);return sa(r,[dE(Vu(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,Bt.none())])}function Wn(t,e,n,...r){t=Zt(t,ft);const s=Zt(t.firestore,Sr),i=Vu(s);let o;return o=typeof(e=Ke(e))=="string"||e instanceof ta?fN(i,"updateDoc",t._key,e,n,r):hN(i,"updateDoc",t._key,e),sa(s,[o.toMutation(t._key,Bt.exists(!0))])}function Es(t){return sa(Zt(t.firestore,Sr),[new Of(t._key,Bt.none())])}function Fr(t,e){const n=Zt(t.firestore,Sr),r=It(t),s=vE(t.converter,e);return sa(n,[dE(Vu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Bt.exists(!1))]).then(()=>r)}function Gn(t,...e){var n,r,s;t=Ke(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Cy(e[o])||(i=e[o],o++);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Cy(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(r=m.error)===null||r===void 0?void 0:r.bind(m),e[o+2]=(s=m.complete)===null||s===void 0?void 0:s.bind(m)}let u,d,p;if(t instanceof ft)d=Zt(t.firestore,Sr),p=bf(t._key.path),u={next:m=>{e[o]&&e[o](wN(d,t,m))},error:e[o+1],complete:e[o+2]};else{const m=Zt(t,Nr);d=Zt(m.firestore,Sr),p=m._query;const g=new wE(d);u={next:_=>{e[o]&&e[o](new _E(d,g,m,_))},error:e[o+1],complete:e[o+2]},yN(t._query)}return function(g,_,T,N){const O=new sN(N),C=new UR(_,O,T);return g.asyncQueue.enqueueAndForget(async()=>MR(await Ey(g),C)),()=>{O.Za(),g.asyncQueue.enqueueAndForget(async()=>LR(await Ey(g),C))}}(Qf(d),p,l,u)}function sa(t,e){return function(r,s){const i=new Kr;return r.asyncQueue.enqueueAndForget(async()=>YR(await aN(r),s,i)),i.promise}(Qf(t),e)}function wN(t,e,n){const r=n.docs.get(e._key),s=new wE(t);return new rp(t,s,e._key,r,new Vs(n.hasPendingWrites,n.fromCache),e.converter)}function hh(){return new Xf("serverTimestamp")}(function(e,n=!0){(function(s){hi=s})(ci),Zs(new es("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),l=new Sr(new SC(r.getProvider("auth-internal")),new RC(r.getProvider("app-check-internal")),function(d,p){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new K(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(d.options.projectId,p)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),l._setSettings(i),l},"PUBLIC").setMultipleInstances(!0)),vr(Bg,"4.7.3",e),vr(Bg,"4.7.3","esm2017")})();const EN=Object.freeze(Object.defineProperty({__proto__:null,AbstractUserDataWriter:yE,Bytes:os,CollectionReference:Cn,DocumentReference:ft,DocumentSnapshot:rp,FieldPath:ta,FieldValue:na,Firestore:Sr,FirestoreError:K,GeoPoint:Du,Query:Nr,QueryCompositeFilterConstraint:ju,QueryConstraint:np,QueryDocumentSnapshot:oo,QueryFieldFilterConstraint:Lu,QueryOrderByConstraint:Fu,QuerySnapshot:_E,SnapshotMetadata:Vs,Timestamp:Ue,VectorValue:Ou,_AutoId:Sf,_ByteString:Qe,_DatabaseId:ni,_DocumentKey:X,_EmptyAuthCredentialsProvider:ow,_FieldPath:We,_cast:Zt,_logWarn:rs,_validateIsNotUsedTogether:oE,addDoc:Fr,collection:Tt,connectFirestoreEmulator:aE,deleteDoc:Es,doc:It,ensureFirestoreConfigured:Qf,executeWrite:sa,getFirestore:lE,onSnapshot:Gn,orderBy:dh,query:fl,serverTimestamp:hh,setDoc:_N,updateDoc:Wn},Symbol.toStringTag,{value:"Module"})),xN={apiKey:"AIzaSyDFGlm4ixlJ34vg9XT_otqIeKgZT5bmBu8",authDomain:"tsops-webapp-v1.firebaseapp.com",projectId:"tsops-webapp-v1",storageBucket:"tsops-webapp-v1.firebasestorage.app",messagingSenderId:"558840136278",appId:"1:558840136278:web:00e5918a1e98aa70f2f1f7"},EE=y0(xN),Ny=wC(EE),xe=lE(EE),TN="modulepreload",IN=function(t){return"/"+t},Py={},SN=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.allSettled(n.map(u=>{if(u=IN(u),u in Py)return;Py[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":TN,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((g,_)=>{m.addEventListener("load",g),m.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return e().catch(i)})};function AN(t){const[e,n]=W.useState([]),[r,s]=W.useState([]),[i,o]=W.useState([]),[l,u]=W.useState([]),[d,p]=W.useState([]),[m,g]=W.useState([]),[_,T]=W.useState({});W.useEffect(()=>{const B=Gn(Tt(xe,"members"),ve=>{n(ve.docs.map(ce=>({id:ce.id,...ce.data()})))}),q=fl(Tt(xe,"tasks")),V=Gn(q,ve=>{const ce=ve.docs.map(nn=>({id:nn.id,...nn.data()}));s(ce)}),z=fl(Tt(xe,"logs"),dh("date","desc")),Q=Gn(z,ve=>{o(ve.docs.map(ce=>({id:ce.id,...ce.data()})))}),ue=fl(Tt(xe,"actionLogs"),dh("timestamp","desc")),se=Gn(ue,ve=>{u(ve.docs.map(ce=>({id:ce.id,...ce.data()})))}),me=Gn(Tt(xe,"rules"),ve=>{p(ve.docs.map(ce=>({id:ce.id,...ce.data()})))}),ye=Gn(Tt(xe,"manualScores"),ve=>{g(ve.docs.map(ce=>({id:ce.id,...ce.data()})))}),Pe=Gn(Tt(xe,"roles"),ve=>{const ce={};ve.docs.forEach(nn=>{ce[nn.id]=nn.data().role}),T(ce)});return()=>{B(),V(),Q(),se(),me(),ye(),Pe()}},[]);const N=async(B,q,V)=>{await Fr(Tt(xe,"actionLogs"),{timestamp:hh(),user:B,action:q,detail:V})};return{members:e,tasks:r,logs:i,actionLogs:l,rules:d,manualScores:m,roles:_,handleTaskToggle:async(B,q,V)=>{const z=!q,Q=It(xe,"tasks",B);await Wn(Q,{completed:z}),await N((V==null?void 0:V.email)||"Unknown","Toggle Task",`Task ${B} -> ${z?"Done":"Undo"}`)},handleUpdateTaskStatus:async(B,q,V)=>{const z=It(xe,"tasks",B);await Wn(z,{status:q}),await N((V==null?void 0:V.email)||"Unknown","Update Status",`Task ${B} -> ${q}`)},handleAddTask:async(B,q)=>{await Fr(Tt(xe,"tasks"),B),await N((q==null?void 0:q.email)||"Unknown","Add Task",`Added task: ${B.name}`)},handleEditTask:async(B,q,V)=>{const z=It(xe,"tasks",B);await Wn(z,q),await N((V==null?void 0:V.email)||"Unknown","Edit Task",`Edited task: ${B}`)},handleDeleteTask:async(B,q)=>{await Es(It(xe,"tasks",B)),await N((q==null?void 0:q.email)||"Unknown","Delete Task",`Deleted task: ${B}`)},handleAddMember:async(B,q)=>{await Fr(Tt(xe,"members"),B),await N((q==null?void 0:q.email)||"Unknown","Add Member",`Added member: ${B.name}`)},handleEditMember:async(B,q,V)=>{const z=It(xe,"members",B);await Wn(z,q),await N((V==null?void 0:V.email)||"Unknown","Edit Member",`Edited member: ${B}`)},handleDeleteMember:async(B,q)=>{await Es(It(xe,"members",B)),await N((q==null?void 0:q.email)||"Unknown","Delete Member",`Deleted member: ${B}`)},handleAddLog:async(B,q)=>{await Fr(Tt(xe,"logs"),B),await N((q==null?void 0:q.email)||"Unknown","Add Log",`Added problem log: ${B.topic}`)},handleResolveLog:async(B,q,V)=>{const z=It(xe,"logs",B);await Wn(z,{status:"solved",resolution:q,solvedBy:(V==null?void 0:V.email)||"Unknown"}),await N((V==null?void 0:V.email)||"Unknown","Resolve Log",`Resolved log: ${B}`)},handleDeleteLog:async(B,q)=>{await Es(It(xe,"logs",B)),await N((q==null?void 0:q.email)||"Unknown","Delete Log",`Deleted log: ${B}`)},handleSaveRule:async(B,q)=>{if(B.id){const V=It(xe,"rules",B.id),{id:z,...Q}=B;await Wn(V,Q)}else await Fr(Tt(xe,"rules"),B);await N((q==null?void 0:q.email)||"Unknown","Save Rule",`Saved rule: ${B.condition}`)},handleDeleteRule:async(B,q)=>{await Es(It(xe,"rules",B)),await N((q==null?void 0:q.email)||"Unknown","Delete Rule",`Deleted rule: ${B}`)},handleSaveManualScore:async(B,q)=>{await Fr(Tt(xe,"manualScores"),{...B,timestamp:hh()}),await N((q==null?void 0:q.email)||"Unknown","Add Manual Score",`Score ${B.points} to ${B.memberId}`)},handleDeleteManualScore:async(B,q)=>{await Es(It(xe,"manualScores",B)),await N((q==null?void 0:q.email)||"Unknown","Delete Manual Score",`Deleted score: ${B}`)},handleSaveRole:async(B,q,V)=>{const z=It(xe,"roles",B);await Wn(z,{role:q}).catch(async()=>{await SN(async()=>{const{setDoc:Q}=await Promise.resolve().then(()=>EN);return{setDoc:Q}},void 0).then(({setDoc:Q})=>Q(z,{role:q}))}),await N((V==null?void 0:V.email)||"Unknown","Update Role",`Set ${B} to ${q}`)}}}/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),ge=(t,e)=>{const n=W.forwardRef(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:l="",children:u,...d},p)=>W.createElement("svg",{ref:p,...CN,width:s,height:s,stroke:r,strokeWidth:o?Number(i)*24/Number(s):i,className:["lucide",`lucide-${kN(t)}`,l].join(" "),...d},[...e.map(([m,g])=>W.createElement(m,g)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RN=ge("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=ge("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=ge("ArrowDownToLine",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PN=ge("ArrowUpFromLine",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bN=ge("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=ge("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=ge("Circle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=ge("ClipboardList",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=ge("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MN=ge("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=ge("Gavel",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=ge("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=ge("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=ge("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LN=ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=ge("Save",[["path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z",key:"1owoqh"}],["polyline",{points:"17 21 17 13 7 13 7 21",key:"1md35c"}],["polyline",{points:"7 3 7 8 15 8",key:"8nz8an"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=ge("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=ge("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=ge("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=ge("Truck",[["path",{d:"M5 18H3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1h10c.6 0 1 .4 1 1v11",key:"hs4xqm"}],["path",{d:"M14 9h4l4 4v4c0 .6-.4 1-1 1h-2",key:"11fp61"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}]]);/**
 * @license lucide-react v0.309.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=ge("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]),pl=[{id:"dashboard",label:"หน้าหลัก",icon:fh},{id:"inbound",label:"งานรถโอนย้าย",icon:NN},{id:"outbound",label:"งานส่งสินค้า",icon:PN},{id:"internal",label:"งานรถส่วนกลาง",icon:bN},{id:"problems",label:"Problem Log",icon:Vo},{id:"scorelog",label:"ประวัติคะแนน",icon:xE},{id:"actionlog",label:"ประวัติการทำงาน",icon:SE},{id:"rules",label:"ระเบียบการให้คะแนน",icon:IE},{id:"team",label:"จัดการทีม",icon:$u},{id:"assign_menu",label:"กำหนดสิทธิ์ (Assign Menu)",icon:kE}];function HN({id:t,label:e,icon:n,activeTab:r,setActiveTab:s,isSidebarOpen:i,colorClass:o="text-gray-500"}){return h.jsxs("button",{onClick:()=>s(t),className:`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 mb-1 ${r===t?"bg-blue-50 text-blue-700 shadow-sm border border-blue-100 font-medium":"text-gray-600 hover:bg-gray-50 hover:text-gray-900"} ${i?"":"justify-center"}`,title:i?"":e,children:[h.jsx(n,{size:22,className:`flex-shrink-0 ${r===t?"text-blue-600":o}`}),i&&h.jsx("span",{className:"truncate text-sm",children:e})]})}function qN({isSidebarOpen:t,setSidebarOpen:e,activeTab:n,setActiveTab:r,appUser:s,currentUserRole:i,roles:o,handleLogout:l,hasAccess:u,setIsProfileModalOpen:d}){var m;const p=pl.filter(g=>u(g.id));return h.jsxs("aside",{className:`bg-white border-r border-gray-200 hidden md:flex flex-col transition-all duration-300 ease-in-out z-20 shadow-[2px_0_15px_rgba(0,0,0,0.03)] ${t?"w-64":"w-20"}`,children:[h.jsxs("div",{className:`p-4 border-b border-gray-100 flex items-center ${t?"justify-between":"justify-center"}`,children:[t&&h.jsxs("h1",{className:"text-xl font-extrabold text-blue-800 flex items-center gap-2 truncate",children:[h.jsx("div",{className:"w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white flex-shrink-0 shadow-md",children:h.jsx(fh,{size:18})}),h.jsxs("span",{className:"truncate",children:["Transport",h.jsx("span",{className:"text-blue-500 font-light",children:"Ops"})]})]}),!t&&h.jsx("div",{className:"w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white shadow-md",children:h.jsx(fh,{size:24})})]}),h.jsx("div",{className:"flex justify-end px-2 pt-2",children:h.jsx("button",{onClick:()=>e(!t),className:"p-1.5 rounded-md hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition",children:t?h.jsx(DN,{size:20}):h.jsx(ON,{size:20,className:"mx-auto"})})}),h.jsx("nav",{className:"flex-1 p-3 space-y-0.5 overflow-y-auto overflow-x-hidden custom-scrollbar",children:p.map(g=>h.jsx(HN,{id:g.id,label:g.label,icon:g.icon,activeTab:n,setActiveTab:r,isSidebarOpen:t,colorClass:["inbound","outbound","internal","problems"].includes(g.id)?g.id==="inbound"?"text-green-500":g.id==="outbound"?"text-orange-500":g.id==="internal"?"text-purple-500":"text-red-500":"text-gray-500"},g.id))}),h.jsxs("div",{className:"p-4 border-t border-gray-100 mt-auto",children:[h.jsxs("div",{className:`flex items-center gap-3 ${t?"":"justify-center"} cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition`,onClick:()=>d(!0),children:[h.jsx("div",{className:"w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold text-xs",children:s.email?s.email.charAt(0).toUpperCase():"U"}),t&&h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsx("p",{className:"text-sm font-medium text-gray-800 truncate",children:s.email||"User"}),h.jsx("div",{className:"flex items-center gap-2",children:h.jsx("span",{className:"text-[10px] bg-blue-50 text-blue-600 px-1.5 rounded border border-blue-100 truncate max-w-[80px]",children:((m=o.find(g=>g.id===i))==null?void 0:m.name)||i})})]})]}),t&&h.jsxs("button",{onClick:l,className:"text-xs text-red-500 hover:text-red-600 flex items-center gap-1 mt-2 w-full justify-center py-1",children:[h.jsx(jN,{size:10})," ออกจากระบบ"]})]})]})}const qa=({icon:t,label:e,value:n,color:r,subtext:s})=>h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between hover:shadow-md transition-shadow",children:[h.jsxs("div",{children:[h.jsx("p",{className:"text-gray-500 text-sm font-medium mb-1",children:e}),h.jsx("h3",{className:"text-2xl font-bold text-gray-800",children:n}),s&&h.jsx("p",{className:`text-xs mt-2 ${r}`,children:s})]}),h.jsx("div",{className:`p-3 rounded-lg ${r} bg-opacity-10`,children:h.jsx(t,{className:r,size:24})})]});function WN({members:t,tasks:e,logs:n}){const r=t||[],s=e||[],i=n||[],o=r.length,l=s.length,u=s.filter(_=>_==null?void 0:_.completed).length,d=l>0?Math.round(u/l*100):0,p=i.filter(_=>(_==null?void 0:_.status)==="pending").length,m=i.filter(_=>(_==null?void 0:_.status)==="solved").length,g=s.slice(0,5);return h.jsxs("div",{className:"space-y-6 animate-fade-in",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsx("h2",{className:"text-2xl font-bold text-gray-800",children:"Dashboard ภาพรวม"}),h.jsxs("span",{className:"text-sm text-gray-500",children:["อัปเดตล่าสุด: ",new Date().toLocaleTimeString("th-TH")]})]}),h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[h.jsx(qa,{icon:$u,label:"พนักงานทั้งหมด",value:o,color:"text-blue-600",subtext:"Active Members"}),h.jsx(qa,{icon:sp,label:"งานที่สำเร็จวันนี้",value:`${u}/${l}`,color:"text-green-600",subtext:`คิดเป็น ${d}%`}),h.jsx(qa,{icon:Vo,label:"ปัญหาที่รอดำเนินการ",value:p,color:"text-red-600",subtext:`แก้ไขแล้ว ${m} รายการ`}),h.jsx(qa,{icon:RN,label:"ประสิทธิภาพรวม",value:`${d}%`,color:"text-indigo-600",subtext:"เทียบกับเป้าหมาย"})]}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100",children:[h.jsxs("h3",{className:"font-bold text-gray-800 mb-4 flex items-center gap-2",children:[h.jsx(TE,{size:20,className:"text-orange-500"}),"งานล่าสุดที่กำลังดำเนินการ"]}),h.jsx("div",{className:"space-y-3",children:g.length>0?g.map((_,T)=>h.jsxs("div",{className:"flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition",children:[h.jsxs("div",{className:"flex items-center gap-3",children:[h.jsx("div",{className:`w-2 h-2 rounded-full ${_!=null&&_.completed?"bg-green-500":"bg-orange-500"}`}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-sm text-gray-800",children:(_==null?void 0:_.name)||"No Name"}),h.jsx("p",{className:"text-xs text-gray-500",children:(_==null?void 0:_.area)||"No Area"})]})]}),h.jsx("span",{className:`text-xs px-2 py-1 rounded-full ${_!=null&&_.completed?"bg-green-100 text-green-700":"bg-orange-100 text-orange-700"}`,children:_!=null&&_.completed?"เสร็จแล้ว":"กำลังทำ"})]},_.id||T)):h.jsx("p",{className:"text-center text-gray-400 py-4",children:"ไม่มีรายการงาน"})})]}),h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100",children:[h.jsxs("h3",{className:"font-bold text-gray-800 mb-4 flex items-center gap-2",children:[h.jsx(Vo,{size:20,className:"text-red-500"}),"ปัญหาล่าสุด"]}),h.jsxs("div",{className:"space-y-3",children:[i.slice(0,5).map((_,T)=>h.jsxs("div",{className:"p-3 border-l-4 border-red-400 bg-red-50 rounded-r-lg",children:[h.jsx("p",{className:"text-sm font-bold text-gray-800",children:_==null?void 0:_.topic}),h.jsx("p",{className:"text-xs text-gray-600 mt-1 truncate",children:_==null?void 0:_.detail}),h.jsxs("div",{className:"flex justify-between mt-2 text-[10px] text-gray-500",children:[h.jsx("span",{children:_==null?void 0:_.dept}),h.jsx("span",{children:_==null?void 0:_.date})]})]},_.docId||_.id||T)),i.length===0&&h.jsx("p",{className:"text-center text-gray-400 py-4",children:"ยังไม่มีการแจ้งปัญหา"})]})]})]})]})}function GN({members:t,onAddMember:e,onEditMember:n,onDeleteMember:r,roles:s}){const[i,o]=W.useState({name:"",role:"",dept:"Inbound",avatar:"",email:"",password:""}),[l,u]=W.useState(!1),[d,p]=W.useState(null),m=T=>{T.preventDefault(),e({...i,avatar:i.avatar||`https://i.pravatar.cc/150?u=${Date.now()}`}),o({name:"",role:"",dept:"Inbound",avatar:"",email:"",password:""})},g=T=>{p(T),u(!0)},_=T=>{T.preventDefault(),n(d),u(!1)};return h.jsxs("div",{className:"space-y-6 animate-fade-in",children:[h.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[h.jsx($u,{className:"text-blue-600"})," จัดการทีมงาน"]}),l&&h.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm",children:h.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in",children:[h.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[h.jsx(Mo,{className:"text-blue-600"})," แก้ไขข้อมูลพนักงาน"]}),h.jsxs("form",{onSubmit:_,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"ชื่อ-สกุล"}),h.jsx("input",{required:!0,className:"w-full border rounded px-3 py-2",value:d.name,onChange:T=>p({...d,name:T.target.value})})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"อีเมล (สำหรับเข้าสู่ระบบ)"}),h.jsx("input",{required:!0,type:"email",className:"w-full border rounded px-3 py-2",value:d.email,onChange:T=>p({...d,email:T.target.value})})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"ตำแหน่ง"}),h.jsx("select",{required:!0,className:"w-full border rounded px-3 py-2 bg-white",value:d.role,onChange:T=>p({...d,role:T.target.value}),children:s.map(T=>h.jsx("option",{value:T.name,children:T.name},T.id))})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"แผนก"}),h.jsxs("select",{className:"w-full border rounded px-3 py-2 bg-white",value:d.dept,onChange:T=>p({...d,dept:T.target.value}),children:[h.jsx("option",{value:"Inbound",children:"Inbound"}),h.jsx("option",{value:"Outbound",children:"Outbound"}),h.jsx("option",{value:"Internal",children:"Internal"}),h.jsx("option",{value:"Manager",children:"Manager"})]})]}),h.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[h.jsx("button",{type:"button",onClick:()=>u(!1),className:"px-4 py-2 text-gray-500 hover:bg-gray-100 rounded",children:"ยกเลิก"}),h.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"บันทึก"})]})]})]})}),h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm mb-6",children:[h.jsx("h3",{className:"font-bold mb-4 text-gray-700",children:"เพิ่มสมาชิกใหม่"}),h.jsxs("form",{onSubmit:m,className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-end",children:[h.jsxs("div",{className:"w-full",children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"ชื่อ-สกุล"}),h.jsx("input",{required:!0,value:i.name,onChange:T=>o({...i,name:T.target.value}),className:"w-full border rounded-lg px-3 py-2 text-sm",placeholder:"ระบุชื่อ..."})]}),h.jsxs("div",{className:"w-full",children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"อีเมล (Login)"}),h.jsx("input",{required:!0,type:"email",value:i.email,onChange:T=>o({...i,email:T.target.value}),className:"w-full border rounded-lg px-3 py-2 text-sm",placeholder:"name@company.com"})]}),h.jsxs("div",{className:"w-full",children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"รหัสผ่าน"}),h.jsx("input",{required:!0,type:"password",value:i.password,onChange:T=>o({...i,password:T.target.value}),className:"w-full border rounded-lg px-3 py-2 text-sm",placeholder:"********"})]}),h.jsxs("div",{className:"w-full",children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"ตำแหน่ง"}),h.jsxs("select",{required:!0,className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:i.role,onChange:T=>o({...i,role:T.target.value}),children:[h.jsx("option",{value:"",children:"เลือกตำแหน่ง..."}),s.map(T=>h.jsx("option",{value:T.name,children:T.name},T.id))]})]}),h.jsxs("div",{className:"w-full",children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"แผนก"}),h.jsxs("select",{className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:i.dept,onChange:T=>o({...i,dept:T.target.value}),children:[h.jsx("option",{value:"Inbound",children:"Inbound"}),h.jsx("option",{value:"Outbound",children:"Outbound"}),h.jsx("option",{value:"Internal",children:"Internal"}),h.jsx("option",{value:"Manager",children:"Manager"})]})]}),h.jsx("div",{className:"w-full md:col-span-1 lg:col-span-1",children:h.jsx("button",{type:"submit",className:"bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 w-full font-medium text-sm shadow-sm transition h-[38px] mt-6",children:"เพิ่มสมาชิก"})})]})]}),h.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100",children:h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[h.jsx("thead",{className:"bg-gray-50",children:h.jsxs("tr",{children:[h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"สมาชิก"}),h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"อีเมล"}),h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"ตำแหน่ง"}),h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase tracking-wider",children:"แผนก"}),h.jsx("th",{className:"px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase tracking-wider",children:"จัดการ"})]})}),h.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((T,N)=>h.jsxs("tr",{className:"hover:bg-gray-50 transition cursor-pointer",onClick:()=>g(T),children:[h.jsxs("td",{className:"px-6 py-4 whitespace-nowrap flex items-center gap-3",children:[h.jsx("img",{className:"h-9 w-9 rounded-full object-cover border",src:T.avatar||`https://i.pravatar.cc/150?u=${T.id}`,alt:""}),h.jsx("div",{className:"text-sm font-medium text-gray-900",children:T.name})]}),h.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:T.email}),h.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:T.role}),h.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:h.jsx("span",{className:`px-2.5 py-0.5 inline-flex text-xs leading-4 font-semibold rounded-full ${T.dept==="Inbound"?"bg-green-100 text-green-800":T.dept==="Outbound"?"bg-orange-100 text-orange-800":"bg-purple-100 text-purple-800"}`,children:T.dept})}),h.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:h.jsx("button",{onClick:O=>{O.stopPropagation(),r(T.id)},className:"text-gray-400 hover:text-red-600 transition p-1 rounded-full hover:bg-red-50",children:h.jsx(Uu,{size:18})})})]},T.docId||T.id||N))})]})})})]})}function Gc({percentage:t,color:e,title:n,subtitle:r}){return h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center",children:[h.jsx("h4",{className:"text-sm font-bold text-gray-700 mb-4",children:n}),h.jsxs("div",{className:"relative w-32 h-32",children:[h.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 100 100",children:[h.jsx("circle",{className:"text-gray-100 stroke-current",strokeWidth:"8",cx:"50",cy:"50",r:"40",fill:"transparent"}),h.jsx("circle",{className:"stroke-current transition-all duration-1000 ease-out",strokeWidth:"8",strokeLinecap:"round",cx:"50",cy:"50",r:"40",fill:"transparent",strokeDasharray:"251.2",strokeDashoffset:251.2-251.2*t/100,style:{color:e},transform:"rotate(-90 50 50)"})]}),h.jsx("div",{className:"absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-gray-700",children:h.jsxs("span",{className:"text-2xl font-bold",children:[Math.round(t),"%"]})})]}),h.jsx("div",{className:"mt-4 text-center text-xs text-gray-500",children:r})]})}function KN({member:t,size:e="md"}){const n=e==="sm"?"w-8 h-8":e==="lg"?"w-16 h-16":"w-10 h-10";return h.jsxs("div",{className:"relative group cursor-pointer inline-block",children:[h.jsx("img",{src:t.avatar||`https://i.pravatar.cc/150?u=${t.id}`,alt:t.name,className:`${n} rounded-full object-cover border-2 border-white shadow-sm bg-gray-200`}),h.jsx("div",{className:"absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"})]})}function QN({dept:t,title:e,color:n,icon:r,tasks:s,members:i,currentDate:o,setCurrentDate:l,selectedMonth:u,setSelectedMonth:d,viewMode:p,setViewMode:m,onToggleTask:g,onUpdateTaskStatus:_,onAddTask:T,showToast:N,onDeleteTask:O,onEditTask:C}){const[w,A]=W.useState("summary"),[D,$]=W.useState(""),[U,x]=W.useState(""),[v,E]=W.useState(""),[I,k]=W.useState(o),[R,S]=W.useState(o),[Me,J]=W.useState(!1),[B,q]=W.useState(null);W.useEffect(()=>{k(o),S(o)},[o]);const V=s.filter(j=>{const Ye=j.dept===t,gt=p==="daily"?j.date===o:j.date.startsWith(u);return Ye&&gt}),z=V.filter(j=>j.type==="routine"),Q=V.filter(j=>j.type==="assign"),ue=i.filter(j=>j.dept===t),se=j=>j.length===0?0:j.filter(gt=>gt.status==="completed").length/j.length*100,me=se(V),ye=se(z),Pe=se(Q),ve=(j,Ye)=>{var gt;j.preventDefault(),D&&(T({title:D,details:U,type:Ye,status:"pending",latestStatus:"รอดำเนินการ",date:I||o,dueDate:Ye==="assign"?R:null,dept:t,assignee:v||null,assigneeName:v?(gt=i.find(Un=>Un.id===v))==null?void 0:gt.name:"ไม่ระบุ"},t),$(""),x(""),E(""),N("บันทึกงานใหม่เรียบร้อยแล้ว"))},ce=j=>{N("บันทึกสถานะงานเรียบร้อยแล้ว")},nn=j=>{q({...j,assignee:j.assignee?j.assignee:""}),J(!0)},gi=j=>{var Ye;j.preventDefault(),C({...B,assignee:B.assignee?B.assignee:null,assigneeName:B.assignee?(Ye=i.find(gt=>gt.id===B.assignee))==null?void 0:Ye.name:"ไม่ระบุ"}),J(!1),N("แก้ไขงานเรียบร้อยแล้ว")};return h.jsxs("div",{className:"space-y-6 animate-fade-in",children:[Me&&h.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm",children:h.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in",children:[h.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[h.jsx(Mo,{className:"text-blue-600"})," แก้ไขงาน"]}),h.jsxs("form",{onSubmit:gi,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"หัวข้อ"}),h.jsx("input",{className:"w-full border rounded px-3 py-2",value:B.title||"",onChange:j=>q({...B,title:j.target.value})})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"รายละเอียด"}),h.jsx("input",{className:"w-full border rounded px-3 py-2",value:B.details||"",onChange:j=>q({...B,details:j.target.value})})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"ผู้รับผิดชอบ"}),h.jsxs("select",{className:"w-full border rounded px-3 py-2 bg-white",value:B.assignee||"",onChange:j=>q({...B,assignee:j.target.value}),children:[h.jsx("option",{value:"",children:"เลือก..."}),ue.map(j=>h.jsx("option",{value:j.id,children:j.name},j.id))]})]}),B.type==="assign"&&h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"วันกำหนดเสร็จ"}),h.jsx("input",{type:"date",className:"w-full border rounded px-3 py-2",value:B.dueDate||"",onChange:j=>q({...B,dueDate:j.target.value})})]}),h.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[h.jsx("button",{type:"button",onClick:()=>J(!1),className:"px-4 py-2 text-gray-500 hover:bg-gray-100 rounded",children:"ยกเลิก"}),h.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"บันทึก"})]})]})]})}),h.jsxs("header",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-white p-5 rounded-xl shadow-sm border-l-4",style:{borderColor:n},children:[h.jsxs("div",{className:"flex items-center gap-4",children:[h.jsx("div",{className:"p-3 rounded-full bg-opacity-10 flex-shrink-0",style:{backgroundColor:n},children:h.jsx(r,{size:28,style:{color:n}})}),h.jsxs("div",{children:[h.jsx("h2",{className:"text-xl md:text-2xl font-bold text-gray-800",children:e}),h.jsxs("p",{className:"text-gray-500 text-sm",children:["จัดการงาน (",p==="daily"?`ประจำวันที่ ${o}`:`ประจำเดือน ${u}`,")"]})]})]}),h.jsxs("div",{className:"flex flex-col sm:flex-row gap-2 w-full lg:w-auto items-stretch sm:items-center",children:[h.jsxs("div",{className:"flex bg-gray-100 rounded-lg p-1",children:[h.jsx("button",{onClick:()=>m("daily"),className:`flex-1 sm:flex-none px-3 py-1.5 text-xs font-medium rounded-md transition ${p==="daily"?"bg-white shadow text-gray-900":"text-gray-500 hover:text-gray-700"}`,children:"รายวัน"}),h.jsx("button",{onClick:()=>m("monthly"),className:`flex-1 sm:flex-none px-3 py-1.5 text-xs font-medium rounded-md transition ${p==="monthly"?"bg-white shadow text-gray-900":"text-gray-500 hover:text-gray-700"}`,children:"รายเดือน"})]}),h.jsx("div",{className:"min-w-[130px]",children:p==="daily"?h.jsx("input",{type:"date",value:o,onChange:j=>l(j.target.value),className:"w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"}):h.jsx("input",{type:"month",value:u,onChange:j=>d(j.target.value),className:"w-full border rounded-md px-3 py-1.5 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"})})]}),h.jsxs("div",{className:"flex flex-wrap gap-2 w-full lg:w-auto mt-2 lg:mt-0",children:[h.jsx("button",{onClick:()=>A("summary"),className:`flex-1 lg:flex-none px-4 py-2 rounded-md text-sm font-medium transition ${w==="summary"?"bg-gray-100 text-gray-900 font-bold shadow-sm":"text-gray-500 hover:bg-gray-50"}`,children:"สรุปงาน"}),h.jsx("button",{onClick:()=>A("routine"),className:`flex-1 lg:flex-none px-4 py-2 rounded-md text-sm font-medium transition ${w==="routine"?"bg-gray-100 text-gray-900 font-bold shadow-sm":"text-gray-500 hover:bg-gray-50"}`,children:"Routine"}),h.jsx("button",{onClick:()=>A("assign"),className:`flex-1 lg:flex-none px-4 py-2 rounded-md text-sm font-medium transition ${w==="assign"?"bg-gray-100 text-gray-900 font-bold shadow-sm":"text-gray-500 hover:bg-gray-50"}`,children:"Assigned"})]})]}),w==="summary"&&h.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[h.jsx(Gc,{percentage:me,color:n,title:"รวมทั้งหมด",subtitle:`${V.filter(j=>j.status==="completed").length} / ${V.length} งาน`}),h.jsx(Gc,{percentage:ye,color:"#3b82f6",title:"Routine",subtitle:`${z.filter(j=>j.status==="completed").length} / ${z.length} งาน`}),h.jsx(Gc,{percentage:Pe,color:"#8b5cf6",title:"Assigned",subtitle:`${Q.filter(j=>j.status==="completed").length} / ${Q.length} งาน`}),h.jsxs("div",{className:"md:col-span-3 bg-white p-6 rounded-xl shadow-sm",children:[h.jsxs("h3",{className:"font-bold mb-4 flex items-center gap-2 text-gray-700",children:[h.jsx($u,{size:18})," สมาชิกทีม ",e]}),h.jsx("div",{className:"flex flex-wrap gap-4",children:ue.length>0?ue.map((j,Ye)=>h.jsxs("div",{className:"flex items-center gap-3 p-2.5 hover:bg-gray-50 rounded-lg transition border border-transparent hover:border-gray-100",children:[h.jsx(KN,{member:j,size:"sm"}),h.jsxs("div",{children:[h.jsx("p",{className:"font-medium text-sm text-gray-800",children:j.name}),h.jsx("p",{className:"text-xs text-gray-500",children:j.role})]})]},j.docId||j.id||Ye)):h.jsx("p",{className:"text-gray-400 text-sm",children:"ไม่มีสมาชิกในแผนกนี้"})})]})]}),(w==="routine"||w==="assign")&&h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{className:"bg-white rounded-xl shadow-sm p-4 border border-gray-100",children:[h.jsxs("h3",{className:"font-bold text-gray-700 mb-3 text-sm flex items-center gap-2",children:[h.jsx(CE,{size:16})," เพิ่มงานใหม่ (",w==="routine"?"Routine":"Assign",")"]}),h.jsxs("form",{onSubmit:j=>ve(j,w),className:"grid grid-cols-1 md:grid-cols-12 gap-3",children:[h.jsx("div",{className:"md:col-span-3",children:h.jsx("input",{type:"text",placeholder:"ระบุหัวข้องาน...",required:!0,className:"w-full border rounded-lg px-3 py-2 text-sm",value:D,onChange:j=>$(j.target.value)})}),h.jsx("div",{className:"md:col-span-3",children:h.jsx("input",{type:"text",placeholder:"รายละเอียด...",className:"w-full border rounded-lg px-3 py-2 text-sm",value:U,onChange:j=>x(j.target.value)})}),h.jsx("div",{className:"md:col-span-2",children:h.jsxs("select",{className:"w-full border rounded-lg px-2 py-2 text-sm bg-white",value:v,onChange:j=>E(j.target.value),children:[h.jsx("option",{value:"",children:"เลือก..."}),ue.map(j=>h.jsx("option",{value:j.id,children:j.name},j.id))]})}),h.jsx("div",{className:"md:col-span-2",children:h.jsx("input",{type:"date",className:"w-full border rounded-lg px-2 py-2 text-sm",value:I,onChange:j=>k(j.target.value)})}),w==="assign"&&h.jsx("div",{className:"md:col-span-2",children:h.jsx("input",{type:"date",className:"w-full border rounded-lg px-2 py-2 text-sm border-red-100 bg-red-50",value:R,onChange:j=>S(j.target.value)})}),h.jsx("div",{className:`${w==="assign"?"md:col-span-12 flex justify-end":"md:col-span-2 flex items-end"}`,children:h.jsx("button",{type:"submit",className:`bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm whitespace-nowrap shadow-sm h-[38px] ${w==="assign"?"w-auto":"w-full"}`,children:"เพิ่ม"})})]})]}),h.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:h.jsx("div",{className:"divide-y",children:(w==="routine"?z:Q).length===0?h.jsx("div",{className:"p-10 text-center text-gray-400 text-sm",children:"ไม่มีงานในรายการสำหรับช่วงเวลานี้"}):(w==="routine"?z:Q).map((j,Ye)=>{var gt,Un;return h.jsx("div",{className:"p-4 hover:bg-gray-50 group transition",children:h.jsxs("div",{className:"flex items-start gap-4 mb-2",children:[h.jsx("button",{onClick:()=>g(j.id,j.title,t),className:`transition-colors flex-shrink-0 mt-0.5 ${j.status==="completed"?"text-green-500":"text-gray-300 hover:text-gray-400"}`,children:j.status==="completed"?h.jsx(sp,{size:24}):h.jsx(VN,{size:24})}),h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex justify-between items-start",children:[h.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2",children:[h.jsx("p",{className:`font-bold text-sm ${j.status==="completed"?"text-gray-400 line-through":"text-gray-800"}`,children:j.title}),p==="monthly"&&h.jsx("span",{className:"text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded border",children:j.date}),j.dueDate&&h.jsxs("span",{className:`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 ${new Date(o)>new Date(j.dueDate)&&j.status!=="completed"?"bg-red-100 text-red-600 border-red-200":"bg-blue-50 text-blue-600 border-blue-100"}`,children:[h.jsx(TE,{size:10})," Due: ",j.dueDate]})]}),h.jsxs("div",{className:"flex items-center gap-2",children:[j.assignee&&h.jsxs("div",{className:"flex items-center gap-1.5 flex-shrink-0 bg-gray-100 px-2 py-1 rounded-full",children:[h.jsx("img",{src:(gt=i.find(mn=>mn.id===j.assignee))==null?void 0:gt.avatar,className:"w-4 h-4 rounded-full"}),h.jsx("span",{className:"text-[10px] text-gray-600 truncate max-w-[80px]",children:(Un=i.find(mn=>mn.id===j.assignee))==null?void 0:Un.name})]}),h.jsx("button",{onClick:()=>nn(j),className:"text-gray-400 hover:text-blue-500 p-1",children:h.jsx(Mo,{size:14})}),h.jsx("button",{onClick:()=>O(j.id),className:"text-gray-400 hover:text-red-500 p-1",children:h.jsx(Uu,{size:14})})]})]}),j.details&&h.jsx("p",{className:"text-xs text-gray-500 mt-1 mb-2",children:j.details}),h.jsxs("div",{className:"flex items-center gap-2 mt-2",children:[h.jsx("span",{className:"text-[10px] font-bold text-gray-400 uppercase whitespace-nowrap",children:"สถานะล่าสุด:"}),h.jsxs("div",{className:"flex-1 flex items-center gap-2 relative group/input",children:[h.jsx("input",{type:"text",className:"flex-1 border-b border-gray-200 bg-transparent text-xs py-1 px-1 focus:border-blue-400 focus:outline-none text-blue-800 font-medium transition-colors",placeholder:"พนักงานอัพเดทสถานะ...",value:j.latestStatus||"",onChange:mn=>_(j.id,mn.target.value)}),h.jsx("button",{onClick:()=>ce(j.id),className:"text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-full hover:bg-blue-50",children:h.jsx($N,{size:14})})]})]})]})]})},j.docId||j.id||Ye)})})})]})]})}function YN({scoreLogs:t}){return h.jsxs("div",{className:"space-y-6 animate-fade-in",children:[h.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[h.jsx(xE,{className:"text-blue-600"})," ประวัติการหัก/เพิ่ม คะแนน (Score Log)"]}),h.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[h.jsx("thead",{className:"bg-gray-50",children:h.jsxs("tr",{children:[h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"วัน-เวลา"}),h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"ชื่อพนักงาน"}),h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"รายการ"}),h.jsx("th",{className:"px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase",children:"คะแนน"}),h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"ประเภท"})]})}),h.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:"5",className:"px-6 py-8 text-center text-gray-400",children:"ยังไม่มีประวัติคะแนนในเดือนนี้"})}):t.sort((e,n)=>new Date(n.date)-new Date(e.date)).map((e,n)=>h.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[h.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.date}),h.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700",children:e.memberName}),h.jsx("td",{className:"px-6 py-4 text-sm text-gray-600",children:e.topic}),h.jsx("td",{className:"px-6 py-4 text-center",children:h.jsxs("span",{className:`font-bold ${e.score<0?"text-red-500":"text-green-500"}`,children:[e.score>0?"+":"",e.score]})}),h.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-xs",children:h.jsx("span",{className:`px-2 py-1 rounded border ${e.type==="Auto"?"bg-gray-100 text-gray-500 border-gray-200":"bg-blue-50 text-blue-600 border-blue-100"}`,children:e.type})})]},n))})]})})})]})}function XN({logs:t,onAddLog:e,onResolveLog:n,onDeleteLog:r,currentDate:s,askAiSolution:i,showToast:o,userEmail:l,currentUserRole:u,aiLoading:d}){const[p,m]=W.useState(""),[g,_]=W.useState(""),[T,N]=W.useState("Inbound"),[O,C]=W.useState("pending"),[w,A]=W.useState(!1),[D,$]=W.useState(""),[U,x]=W.useState(null),[v,E]=W.useState(!1),I=J=>{J.preventDefault(),e({topic:p,detail:g,dept:T,date:s,status:"pending",createdBy:l||"Unknown"}),m(""),_(""),o("บันทึกปัญหาเรียบร้อยแล้ว")},k=J=>{x(J),A(!0)},R=async()=>{if(U)try{E(!0),await n(U,D),A(!1),$(""),x(null),o("ปิดงานเรียบร้อยแล้ว")}catch(J){console.error(J),o("เกิดข้อผิดพลาดในการปิดงาน")}finally{E(!1)}},S=async J=>{if(window.confirm(`⚠️ คุณต้องการลบรายการปัญหานี้ใช่หรือไม่?
(การกระทำนี้ไม่สามารถย้อนกลับได้)`))try{await r(J),o("ลบรายการเรียบร้อยแล้ว")}catch(B){console.error(B),o("เกิดข้อผิดพลาดในการลบ")}},Me=t.filter(J=>J.status===O);return h.jsxs("div",{className:"space-y-6 animate-fade-in",children:[h.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[h.jsx(Vo,{className:"text-red-500"})," Problem Log"]}),w&&h.jsx("div",{className:"fixed inset-0 z-[70] flex items-center justify-center bg-black bg-opacity-50 p-4 backdrop-blur-sm",children:h.jsxs("div",{className:"bg-white rounded-xl shadow-2xl w-full max-w-md p-6 animate-fade-in",children:[h.jsxs("h3",{className:"text-lg font-bold mb-4 flex items-center gap-2",children:[h.jsx(sp,{className:"text-green-600"})," บันทึกการปิดงาน"]}),h.jsxs("div",{className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-bold text-gray-500 mb-1",children:"หมายเหตุ / สรุปการแก้ไข"}),h.jsx("textarea",{className:"w-full border rounded px-3 py-2 h-24",value:D,onChange:J=>$(J.target.value),placeholder:"ระบุรายละเอียดการแก้ไข..."})]}),h.jsxs("div",{className:"flex gap-2 justify-end pt-4",children:[h.jsx("button",{onClick:()=>A(!1),disabled:v,className:"px-4 py-2 text-gray-500 hover:bg-gray-100 rounded",children:"ยกเลิก"}),h.jsxs("button",{onClick:R,disabled:v,className:"px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2",children:[v&&h.jsx(AE,{size:16,className:"animate-spin"}),"ยืนยันปิดงาน"]})]})]})]})}),h.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm h-fit",children:[h.jsx("h3",{className:"font-bold mb-4 text-gray-800",children:"แจ้งปัญหาใหม่"}),h.jsxs("form",{onSubmit:I,className:"space-y-4",children:[h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"หัวข้อ"}),h.jsx("input",{required:!0,type:"text",className:"w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition",value:p,onChange:J=>m(J.target.value)})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"รายละเอียด"}),h.jsx("textarea",{required:!0,className:"w-full border rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-red-200 focus:border-red-400 outline-none transition",rows:"3",value:g,onChange:J=>_(J.target.value)})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wide",children:"แผนก"}),h.jsxs("select",{className:"w-full border rounded-lg px-3 py-2 text-sm bg-white",value:T,onChange:J=>N(J.target.value),children:[h.jsx("option",{value:"Inbound",children:"Inbound"}),h.jsx("option",{value:"Outbound",children:"Outbound"}),h.jsx("option",{value:"Internal",children:"Internal"})]})]}),h.jsx("button",{type:"submit",className:"w-full bg-red-600 text-white py-2.5 rounded-lg hover:bg-red-700 transition font-medium text-sm shadow-md shadow-red-200",children:"บันทึกปัญหา"})]})]}),h.jsxs("div",{className:"lg:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col max-h-[600px]",children:[h.jsxs("div",{className:"flex border-b",children:[h.jsxs("button",{onClick:()=>C("pending"),className:`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${O==="pending"?"border-red-500 text-red-600 bg-red-50":"border-transparent text-gray-500 hover:bg-gray-50"}`,children:["รอดำเนินการ (",t.filter(J=>J.status==="pending").length,")"]}),h.jsxs("button",{onClick:()=>C("solved"),className:`flex-1 py-3 text-sm font-bold text-center border-b-2 transition ${O==="solved"?"border-green-500 text-green-600 bg-green-50":"border-transparent text-gray-500 hover:bg-gray-50"}`,children:["ปิดงานแล้ว (",t.filter(J=>J.status==="solved").length,")"]})]}),h.jsxs("div",{className:"divide-y overflow-y-auto flex-1",children:[Me.length===0?h.jsx("div",{className:"p-10 text-center text-gray-400",children:"ไม่มีรายการในสถานะนี้"}):null,[...Me].reverse().map((J,B)=>h.jsx("div",{className:"p-4 hover:bg-gray-50 transition relative group",children:h.jsxs("div",{className:"flex justify-between items-start gap-4",children:[h.jsxs("div",{className:"flex-1 min-w-0",children:[h.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[h.jsx("h4",{className:"font-bold text-gray-800 text-sm",children:J.topic}),h.jsxs("span",{className:"text-[10px] text-gray-400",children:["โดย: ",J.createdBy]}),J.status==="pending"&&h.jsxs("button",{onClick:()=>i(J),disabled:d,className:"flex items-center gap-1 px-1.5 py-0.5 bg-indigo-50 text-indigo-600 text-[10px] rounded border border-indigo-100 hover:bg-indigo-100 transition whitespace-nowrap",children:[h.jsx(zN,{size:10})," ",d?"Thinking...":"Ask AI"]})]}),h.jsx("p",{className:"text-sm text-gray-600 break-words",children:J.detail}),J.status==="solved"&&h.jsxs("div",{className:"mt-2 text-xs bg-green-50 p-2 rounded border border-green-100 text-green-800",children:[h.jsx("strong",{children:"แก้ไขแล้วโดย:"})," ",J.solvedBy," ",h.jsx("br",{}),h.jsx("strong",{children:"หมายเหตุ:"})," ",J.resolution]}),h.jsxs("div",{className:"flex gap-2 mt-2",children:[h.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider bg-gray-100 px-2 py-0.5 rounded text-gray-600",children:J.dept}),h.jsx("span",{className:"text-[10px] text-gray-400 px-2 py-0.5",children:J.date})]})]}),h.jsxs("div",{className:"flex flex-col items-end gap-2",children:[J.status==="pending"?["dgm","dm"].includes(u)&&h.jsx("button",{onClick:()=>k(J.docId||J.id),className:"px-3 py-1 bg-yellow-100 text-yellow-700 text-xs rounded hover:bg-yellow-200 transition font-bold",children:"ปิดงาน"}):h.jsx("span",{className:"px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide whitespace-nowrap bg-green-100 text-green-700",children:"SOLVED"}),h.jsx("button",{onClick:()=>S(J.docId||J.id),className:"p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-full transition",title:"ลบรายการ",children:h.jsx(Uu,{size:14})})]})]})},J.docId||J.id||B))]})]})]})]})}function JN({roles:t,onSaveRole:e,currentRole:n}){const r=[...t].sort((o,l)=>o.name.localeCompare(l.name,"th")),s=(o,l)=>{let u=[];o.access.includes("all")?u=pl.map(p=>p.id).filter(p=>p!==l):o.access.includes(l)?u=o.access.filter(d=>d!==l):u=[...o.access,l],e({...o,access:u})},i=(o,l)=>{const u=o.readOnly||[],d=u.includes(l)?u.filter(p=>p!==l):[...u,l];e({...o,readOnly:d})};return h.jsxs("div",{className:"space-y-6 animate-fade-in",children:[h.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[h.jsx(kE,{className:"text-blue-600"})," กำหนดสิทธิ์การเข้าถึง (Assign Menu)"]}),h.jsxs("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100",children:[h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"min-w-full divide-y divide-gray-200 text-sm",children:[h.jsx("thead",{className:"bg-gray-50",children:h.jsxs("tr",{children:[h.jsx("th",{className:"px-4 py-3 text-left font-bold text-gray-500 uppercase min-w-[200px]",children:"ตำแหน่ง"}),pl.map(o=>h.jsx("th",{className:"px-2 py-3 text-center font-bold text-gray-500 text-xs w-24",children:h.jsxs("div",{className:"flex flex-col items-center gap-1",children:[h.jsx(o.icon,{size:16}),h.jsx("span",{children:o.label})]})},o.id))]})}),h.jsx("tbody",{className:"divide-y divide-gray-200",children:r.map((o,l)=>h.jsxs("tr",{className:"hover:bg-gray-50",children:[h.jsx("td",{className:"px-4 py-3 font-medium text-gray-900",children:o.name}),pl.map(u=>{var m,g,_;const d=((m=o.access)==null?void 0:m.includes("all"))||((g=o.access)==null?void 0:g.includes(u.id)),p=(_=o.readOnly)==null?void 0:_.includes(u.id);return h.jsx("td",{className:"px-2 py-3 text-center",children:h.jsxs("div",{className:"flex flex-col items-center gap-2",children:[h.jsx("label",{className:"flex items-center space-x-2 cursor-pointer",children:h.jsx("input",{type:"checkbox",className:"form-checkbox h-4 w-4 text-blue-600 rounded",checked:!!d,onChange:()=>s(o,u.id),disabled:o.id==="dgm"&&u.id==="assign_menu"})}),d&&h.jsxs("button",{onClick:()=>i(o,u.id),className:`text-[10px] px-1.5 py-0.5 rounded border flex items-center gap-1 transition-colors ${p?"bg-yellow-100 text-yellow-700 border-yellow-200":"bg-white text-gray-500 border-gray-200 hover:bg-gray-50"}`,title:p?"View Only":"Full Access",children:[p?h.jsx(MN,{size:10}):h.jsx(Mo,{size:10}),p?"View":"Edit"]})]})},u.id)})]},o.docId||o.id||l))})]})}),h.jsxs("div",{className:"p-4 bg-gray-50 text-xs text-gray-500 border-t",children:["* ",h.jsx("strong",{children:"View Only:"})," สามารถดูข้อมูลได้แต่ไม่สามารถแก้ไข/ลบ/เพิ่มข้อมูลได้ ",h.jsx("br",{}),"* ",h.jsx("strong",{children:"Edit:"})," สามารถจัดการข้อมูลได้เต็มรูปแบบ"]})]})]})}function ZN({actionLogs:t}){return h.jsxs("div",{className:"space-y-6 animate-fade-in",children:[h.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[h.jsx(SE,{className:"text-blue-600"})," ประวัติการทำงาน (Action Log)"]}),h.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:h.jsx("div",{className:"overflow-x-auto",children:h.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[h.jsx("thead",{className:"bg-gray-50",children:h.jsxs("tr",{children:[h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"วัน-เวลา"}),h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"ผู้ดำเนินการ"}),h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"รายละเอียด"})]})}),h.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.length===0?h.jsx("tr",{children:h.jsx("td",{colSpan:"3",className:"px-6 py-8 text-center text-gray-400",children:"ยังไม่มีประวัติการทำงาน"})}):[...t].sort((e,n)=>e.createdAt&&n.createdAt?n.createdAt.seconds-e.createdAt.seconds:n.timestamp>e.timestamp?1:-1).map(e=>h.jsxs("tr",{className:"hover:bg-gray-50 transition",children:[h.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.timestamp}),h.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-700",children:e.user}),h.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-600",children:e.action})]},e.docId||e.id))})]})})})]})}function eP({rules:t,onSaveRule:e,onDeleteRule:n,isReadOnly:r}){const[s,i]=W.useState(!1),[o,l]=W.useState({topic:"",score:0,type:"deduct",detail:""}),u=m=>{l(m),i(!0)},d=()=>{l({topic:"",score:0,type:"deduct",detail:""}),i(!0)},p=m=>{m.preventDefault(),e({...o,id:o.id||Date.now().toString()}),i(!1),l({topic:"",score:0,type:"deduct",detail:""})};return h.jsxs("div",{className:"space-y-6 animate-fade-in",children:[h.jsxs("div",{className:"flex justify-between items-center",children:[h.jsxs("h2",{className:"text-2xl font-bold text-gray-800 flex items-center gap-2",children:[h.jsx(IE,{className:"text-blue-600"})," ระเบียบการหัก/เพิ่ม คะแนน"]}),!r&&h.jsxs("button",{onClick:d,className:"flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition",children:[h.jsx(CE,{size:18})," เพิ่มกฎใหม่"]})]}),s&&!r&&h.jsxs("div",{className:"bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-6",children:[h.jsx("h3",{className:"font-bold mb-4",children:o.id?"แก้ไขกฎระเบียบ":"เพิ่มกฎระเบียบใหม่"}),h.jsxs("form",{onSubmit:p,className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[h.jsxs("div",{className:"md:col-span-2",children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"หัวข้อ"}),h.jsx("input",{required:!0,className:"w-full border rounded px-3 py-2",value:o.topic||"",onChange:m=>l({...o,topic:m.target.value})})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"ประเภท"}),h.jsxs("select",{className:"w-full border rounded px-3 py-2",value:o.type,onChange:m=>l({...o,type:m.target.value}),children:[h.jsx("option",{value:"deduct",children:"หักคะแนน (-)"}),h.jsx("option",{value:"add",children:"เพิ่มคะแนน (+)"})]})]}),h.jsxs("div",{children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"คะแนน"}),h.jsx("input",{type:"number",required:!0,className:"w-full border rounded px-3 py-2",value:Math.abs(o.score)||0,onChange:m=>l({...o,score:o.type==="deduct"?-Math.abs(m.target.value):Math.abs(m.target.value)})})]}),h.jsxs("div",{className:"md:col-span-2",children:[h.jsx("label",{className:"block text-xs font-semibold text-gray-500 mb-1",children:"รายละเอียด"}),h.jsx("input",{className:"w-full border rounded px-3 py-2",value:o.detail||"",onChange:m=>l({...o,detail:m.target.value})})]}),h.jsxs("div",{className:"md:col-span-2 flex justify-end gap-2",children:[h.jsx("button",{type:"button",onClick:()=>i(!1),className:"px-4 py-2 text-gray-600 hover:bg-gray-100 rounded",children:"ยกเลิก"}),h.jsx("button",{type:"submit",className:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700",children:"บันทึก"})]})]})]}),h.jsx("div",{className:"bg-white rounded-xl shadow-sm overflow-hidden",children:h.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[h.jsx("thead",{className:"bg-gray-50",children:h.jsxs("tr",{children:[h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"หัวข้อ"}),h.jsx("th",{className:"px-6 py-3 text-left text-xs font-bold text-gray-500 uppercase",children:"รายละเอียด"}),h.jsx("th",{className:"px-6 py-3 text-center text-xs font-bold text-gray-500 uppercase",children:"คะแนน"}),!r&&h.jsx("th",{className:"px-6 py-3 text-right text-xs font-bold text-gray-500 uppercase",children:"จัดการ"})]})}),h.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map(m=>h.jsxs("tr",{className:"hover:bg-gray-50",children:[h.jsx("td",{className:"px-6 py-4 font-medium text-gray-800",children:m.topic}),h.jsx("td",{className:"px-6 py-4 text-sm text-gray-500",children:m.detail}),h.jsx("td",{className:"px-6 py-4 text-center",children:h.jsxs("span",{className:`px-2 py-1 rounded text-xs font-bold ${m.score>0?"bg-green-100 text-green-700":"bg-red-100 text-red-700"}`,children:[m.score>0?"+":"",m.score]})}),!r&&h.jsxs("td",{className:"px-6 py-4 text-right flex justify-end gap-2",children:[h.jsx("button",{onClick:()=>u(m),className:"text-blue-500 hover:bg-blue-50 p-1 rounded",children:h.jsx(Mo,{size:16})}),h.jsx("button",{onClick:()=>n(m.id),className:"text-red-500 hover:bg-red-50 p-1 rounded",children:h.jsx(Uu,{size:16})})]})]},m.docId||m.id))})]})})]})}function tP({onLogin:t,error:e,loading:n}){const[r,s]=W.useState(""),[i,o]=W.useState(""),l=u=>{u.preventDefault(),t(r,i)};return h.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center p-4",children:h.jsxs("div",{className:"bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-2xl shadow-2xl w-full max-w-md",children:[h.jsxs("div",{className:"flex flex-col items-center mb-8",children:[h.jsx("div",{className:"w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg mb-4",children:h.jsx(BN,{size:32,className:"text-white"})}),h.jsxs("h1",{className:"text-3xl font-bold text-white tracking-tight",children:["Transport",h.jsx("span",{className:"text-blue-400",children:"Ops"})]}),h.jsx("p",{className:"text-blue-200 text-sm mt-1",children:"ระบบบริหารจัดการงานขนส่ง"})]}),h.jsxs("form",{onSubmit:l,className:"space-y-6",children:[h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-sm font-medium text-blue-100 ml-1",children:"อีเมล"}),h.jsxs("div",{className:"relative group",children:[h.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors",children:h.jsx(FN,{size:18})}),h.jsx("input",{type:"email",required:!0,className:"w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all",placeholder:"name@company.com",value:r,onChange:u=>s(u.target.value)})]})]}),h.jsxs("div",{className:"space-y-2",children:[h.jsx("label",{className:"text-sm font-medium text-blue-100 ml-1",children:"รหัสผ่าน"}),h.jsxs("div",{className:"relative group",children:[h.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-blue-300 group-focus-within:text-blue-400 transition-colors",children:h.jsx(LN,{size:18})}),h.jsx("input",{type:"password",required:!0,className:"w-full bg-slate-800/50 border border-slate-700 text-white rounded-lg pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-slate-500 transition-all",placeholder:"••••••••",value:i,onChange:u=>o(u.target.value)})]})]}),e&&h.jsxs("div",{className:"bg-red-500/10 border border-red-500/50 text-red-200 text-sm rounded-lg p-3 flex items-center gap-2 animate-pulse",children:[h.jsx(Vo,{size:16}),e]}),h.jsx("button",{type:"submit",disabled:n,className:"w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2",children:n?h.jsx(AE,{size:20,className:"animate-spin"}):"เข้าสู่ระบบ"})]}),h.jsx("div",{className:"mt-8 text-center text-xs text-blue-300/60",children:"© 2026 Transport Operations System v3.4"})]})})}let nP={data:""},rP=t=>{if(typeof window=="object"){let e=(t?t.querySelector("#_goober"):window._goober)||Object.assign(document.createElement("style"),{innerHTML:" ",id:"_goober"});return e.nonce=window.__nonce__,e.parentNode||(t||document.head).appendChild(e),e.firstChild}return t||nP},sP=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,iP=/\/\*[^]*?\*\/|  +/g,by=/\n+/g,rr=(t,e)=>{let n="",r="",s="";for(let i in t){let o=t[i];i[0]=="@"?i[1]=="i"?n=i+" "+o+";":r+=i[1]=="f"?rr(o,i):i+"{"+rr(o,i[1]=="k"?"":e)+"}":typeof o=="object"?r+=rr(o,e?e.replace(/([^,])+/g,l=>i.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,u=>/&/.test(u)?u.replace(/&/g,l):l?l+" "+u:u)):i):o!=null&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),s+=rr.p?rr.p(i,o):i+":"+o+";")}return n+(e&&s?e+"{"+s+"}":s)+r},vn={},RE=t=>{if(typeof t=="object"){let e="";for(let n in t)e+=n+RE(t[n]);return e}return t},oP=(t,e,n,r,s)=>{let i=RE(t),o=vn[i]||(vn[i]=(u=>{let d=0,p=11;for(;d<u.length;)p=101*p+u.charCodeAt(d++)>>>0;return"go"+p})(i));if(!vn[o]){let u=i!==t?t:(d=>{let p,m,g=[{}];for(;p=sP.exec(d.replace(iP,""));)p[4]?g.shift():p[3]?(m=p[3].replace(by," ").trim(),g.unshift(g[0][m]=g[0][m]||{})):g[0][p[1]]=p[2].replace(by," ").trim();return g[0]})(t);vn[o]=rr(s?{["@keyframes "+o]:u}:u,n?"":"."+o)}let l=n&&vn.g?vn.g:null;return n&&(vn.g=vn[o]),((u,d,p,m)=>{m?d.data=d.data.replace(m,u):d.data.indexOf(u)===-1&&(d.data=p?u+d.data:d.data+u)})(vn[o],e,r,l),o},aP=(t,e,n)=>t.reduce((r,s,i)=>{let o=e[i];if(o&&o.call){let l=o(n),u=l&&l.props&&l.props.className||/^go/.test(l)&&l;o=u?"."+u:l&&typeof l=="object"?l.props?"":rr(l,""):l===!1?"":l}return r+s+(o??"")},"");function zu(t){let e=this||{},n=t.call?t(e.p):t;return oP(n.unshift?n.raw?aP(n,[].slice.call(arguments,1),e.p):n.reduce((r,s)=>Object.assign(r,s&&s.call?s(e.p):s),{}):n,rP(e.target),e.g,e.o,e.k)}let NE,ph,mh;zu.bind({g:1});let Ln=zu.bind({k:1});function lP(t,e,n,r){rr.p=e,NE=t,ph=n,mh=r}function Pr(t,e){let n=this||{};return function(){let r=arguments;function s(i,o){let l=Object.assign({},i),u=l.className||s.className;n.p=Object.assign({theme:ph&&ph()},l),n.o=/ *go\d+/.test(u),l.className=zu.apply(n,r)+(u?" "+u:"");let d=t;return t[0]&&(d=l.as||t,delete l.as),mh&&d[0]&&mh(l),NE(d,l)}return s}}var uP=t=>typeof t=="function",nu=(t,e)=>uP(t)?t(e):t,cP=(()=>{let t=0;return()=>(++t).toString()})(),PE=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),dP=20,ip="default",bE=(t,e)=>{let{toastLimit:n}=t.settings;switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,n)};case 1:return{...t,toasts:t.toasts.map(o=>o.id===e.toast.id?{...o,...e.toast}:o)};case 2:let{toast:r}=e;return bE(t,{type:t.toasts.find(o=>o.id===r.id)?1:0,toast:r});case 3:let{toastId:s}=e;return{...t,toasts:t.toasts.map(o=>o.id===s||s===void 0?{...o,dismissed:!0,visible:!1}:o)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(o=>o.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let i=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(o=>({...o,pauseDuration:o.pauseDuration+i}))}}},ml=[],DE={toasts:[],pausedAt:void 0,settings:{toastLimit:dP}},an={},OE=(t,e=ip)=>{an[e]=bE(an[e]||DE,t),ml.forEach(([n,r])=>{n===e&&r(an[e])})},VE=t=>Object.keys(an).forEach(e=>OE(t,e)),hP=t=>Object.keys(an).find(e=>an[e].toasts.some(n=>n.id===t)),Bu=(t=ip)=>e=>{OE(e,t)},fP={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},pP=(t={},e=ip)=>{let[n,r]=W.useState(an[e]||DE),s=W.useRef(an[e]);W.useEffect(()=>(s.current!==an[e]&&r(an[e]),ml.push([e,r]),()=>{let o=ml.findIndex(([l])=>l===e);o>-1&&ml.splice(o,1)}),[e]);let i=n.toasts.map(o=>{var l,u,d;return{...t,...t[o.type],...o,removeDelay:o.removeDelay||((l=t[o.type])==null?void 0:l.removeDelay)||(t==null?void 0:t.removeDelay),duration:o.duration||((u=t[o.type])==null?void 0:u.duration)||(t==null?void 0:t.duration)||fP[o.type],style:{...t.style,...(d=t[o.type])==null?void 0:d.style,...o.style}}});return{...n,toasts:i}},mP=(t,e="blank",n)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...n,id:(n==null?void 0:n.id)||cP()}),ia=t=>(e,n)=>{let r=mP(e,t,n);return Bu(r.toasterId||hP(r.id))({type:2,toast:r}),r.id},ze=(t,e)=>ia("blank")(t,e);ze.error=ia("error");ze.success=ia("success");ze.loading=ia("loading");ze.custom=ia("custom");ze.dismiss=(t,e)=>{let n={type:3,toastId:t};e?Bu(e)(n):VE(n)};ze.dismissAll=t=>ze.dismiss(void 0,t);ze.remove=(t,e)=>{let n={type:4,toastId:t};e?Bu(e)(n):VE(n)};ze.removeAll=t=>ze.remove(void 0,t);ze.promise=(t,e,n)=>{let r=ze.loading(e.loading,{...n,...n==null?void 0:n.loading});return typeof t=="function"&&(t=t()),t.then(s=>{let i=e.success?nu(e.success,s):void 0;return i?ze.success(i,{id:r,...n,...n==null?void 0:n.success}):ze.dismiss(r),s}).catch(s=>{let i=e.error?nu(e.error,s):void 0;i?ze.error(i,{id:r,...n,...n==null?void 0:n.error}):ze.dismiss(r)}),t};var gP=1e3,yP=(t,e="default")=>{let{toasts:n,pausedAt:r}=pP(t,e),s=W.useRef(new Map).current,i=W.useCallback((m,g=gP)=>{if(s.has(m))return;let _=setTimeout(()=>{s.delete(m),o({type:4,toastId:m})},g);s.set(m,_)},[]);W.useEffect(()=>{if(r)return;let m=Date.now(),g=n.map(_=>{if(_.duration===1/0)return;let T=(_.duration||0)+_.pauseDuration-(m-_.createdAt);if(T<0){_.visible&&ze.dismiss(_.id);return}return setTimeout(()=>ze.dismiss(_.id,e),T)});return()=>{g.forEach(_=>_&&clearTimeout(_))}},[n,r,e]);let o=W.useCallback(Bu(e),[e]),l=W.useCallback(()=>{o({type:5,time:Date.now()})},[o]),u=W.useCallback((m,g)=>{o({type:1,toast:{id:m,height:g}})},[o]),d=W.useCallback(()=>{r&&o({type:6,time:Date.now()})},[r,o]),p=W.useCallback((m,g)=>{let{reverseOrder:_=!1,gutter:T=8,defaultPosition:N}=g||{},O=n.filter(A=>(A.position||N)===(m.position||N)&&A.height),C=O.findIndex(A=>A.id===m.id),w=O.filter((A,D)=>D<C&&A.visible).length;return O.filter(A=>A.visible).slice(..._?[w+1]:[0,w]).reduce((A,D)=>A+(D.height||0)+T,0)},[n]);return W.useEffect(()=>{n.forEach(m=>{if(m.dismissed)i(m.id,m.removeDelay);else{let g=s.get(m.id);g&&(clearTimeout(g),s.delete(m.id))}})},[n,i]),{toasts:n,handlers:{updateHeight:u,startPause:l,endPause:d,calculateOffset:p}}},vP=Ln`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,_P=Ln`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,wP=Ln`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,EP=Pr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vP} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${_P} 0.15s ease-out forwards;
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
    animation: ${wP} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,xP=Ln`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,TP=Pr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${xP} 1s linear infinite;
`,IP=Ln`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,SP=Ln`
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
}`,AP=Pr("div")`
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
    animation: ${SP} 0.2s ease-out forwards;
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
`,CP=Pr("div")`
  position: absolute;
`,kP=Pr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,RP=Ln`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,NP=Pr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${RP} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,PP=({toast:t})=>{let{icon:e,type:n,iconTheme:r}=t;return e!==void 0?typeof e=="string"?W.createElement(NP,null,e):e:n==="blank"?null:W.createElement(kP,null,W.createElement(TP,{...r}),n!=="loading"&&W.createElement(CP,null,n==="error"?W.createElement(EP,{...r}):W.createElement(AP,{...r})))},bP=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,DP=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,OP="0%{opacity:0;} 100%{opacity:1;}",VP="0%{opacity:1;} 100%{opacity:0;}",MP=Pr("div")`
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
`,LP=Pr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,jP=(t,e)=>{let n=t.includes("top")?1:-1,[r,s]=PE()?[OP,VP]:[bP(n),DP(n)];return{animation:e?`${Ln(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ln(s)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},FP=W.memo(({toast:t,position:e,style:n,children:r})=>{let s=t.height?jP(t.position||e||"top-center",t.visible):{opacity:0},i=W.createElement(PP,{toast:t}),o=W.createElement(LP,{...t.ariaProps},nu(t.message,t));return W.createElement(MP,{className:t.className,style:{...s,...n,...t.style}},typeof r=="function"?r({icon:i,message:o}):W.createElement(W.Fragment,null,i,o))});lP(W.createElement);var UP=({id:t,className:e,style:n,onHeightUpdate:r,children:s})=>{let i=W.useCallback(o=>{if(o){let l=()=>{let u=o.getBoundingClientRect().height;r(t,u)};l(),new MutationObserver(l).observe(o,{subtree:!0,childList:!0,characterData:!0})}},[t,r]);return W.createElement("div",{ref:i,className:e,style:n},s)},$P=(t,e)=>{let n=t.includes("top"),r=n?{top:0}:{bottom:0},s=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:PE()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(n?1:-1)}px)`,...r,...s}},zP=zu`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Wa=16,BP=({reverseOrder:t,position:e="top-center",toastOptions:n,gutter:r,children:s,toasterId:i,containerStyle:o,containerClassName:l})=>{let{toasts:u,handlers:d}=yP(n,i);return W.createElement("div",{"data-rht-toaster":i||"",style:{position:"fixed",zIndex:9999,top:Wa,left:Wa,right:Wa,bottom:Wa,pointerEvents:"none",...o},className:l,onMouseEnter:d.startPause,onMouseLeave:d.endPause},u.map(p=>{let m=p.position||e,g=d.calculateOffset(p,{reverseOrder:t,gutter:r,defaultPosition:e}),_=$P(m,g);return W.createElement(UP,{id:p.id,key:p.id,onHeightUpdate:d.updateHeight,className:p.visible?zP:"",style:_},p.type==="custom"?nu(p.message,p):s?s(p):W.createElement(FP,{toast:p,position:m}))}))},Dy;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(Dy||(Dy={}));/**
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
 */var Oy;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(Oy||(Oy={}));var Vy;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(Vy||(Vy={}));/**
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
 */const My=["user","model","function","system"];var Ly;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(Ly||(Ly={}));var jy;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(jy||(jy={}));var Fy;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(Fy||(Fy={}));var Uy;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(Uy||(Uy={}));var ao;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(ao||(ao={}));var $y;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})($y||($y={}));var zy;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(zy||(zy={}));var By;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(By||(By={}));/**
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
 */class ht extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class ys extends ht{constructor(e,n){super(e),this.response=n}}class ME extends ht{constructor(e,n,r,s){super(e),this.status=n,this.statusText=r,this.errorDetails=s}}class _r extends ht{}class LE extends ht{}/**
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
 */const HP="https://generativelanguage.googleapis.com",qP="v1beta",WP="0.24.1",GP="genai-js";var as;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(as||(as={}));class KP{constructor(e,n,r,s,i){this.model=e,this.task=n,this.apiKey=r,this.stream=s,this.requestOptions=i}toString(){var e,n;const r=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||qP;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||HP}/${r}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function QP(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${GP}/${WP}`),e.join(" ")}async function YP(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",QP(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let r=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(r){if(!(r instanceof Headers))try{r=new Headers(r)}catch(s){throw new _r(`unable to convert customHeaders value ${JSON.stringify(r)} to Headers: ${s.message}`)}for(const[s,i]of r.entries()){if(s==="x-goog-api-key")throw new _r(`Cannot set reserved header name ${s}`);if(s==="x-goog-api-client")throw new _r(`Header name ${s} can only be set using the apiClient field`);n.append(s,i)}}return n}async function XP(t,e,n,r,s,i){const o=new KP(t,e,n,r,i);return{url:o.toString(),fetchOptions:Object.assign(Object.assign({},t2(i)),{method:"POST",headers:await YP(o),body:s})}}async function oa(t,e,n,r,s,i={},o=fetch){const{url:l,fetchOptions:u}=await XP(t,e,n,r,s,i);return JP(l,u,o)}async function JP(t,e,n=fetch){let r;try{r=await n(t,e)}catch(s){ZP(s,t)}return r.ok||await e2(r,t),r}function ZP(t,e){let n=t;throw n.name==="AbortError"?(n=new LE(`Request aborted when fetching ${e.toString()}: ${t.message}`),n.stack=t.stack):t instanceof ME||t instanceof _r||(n=new ht(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function e2(t,e){let n="",r;try{const s=await t.json();n=s.error.message,s.error.details&&(n+=` ${JSON.stringify(s.error.details)}`,r=s.error.details)}catch{}throw new ME(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,r)}function t2(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
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
 */function op(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),gl(t.candidates[0]))throw new ys(`${Yn(t)}`,t);return n2(t)}else if(t.promptFeedback)throw new ys(`Text not available. ${Yn(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),gl(t.candidates[0]))throw new ys(`${Yn(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),Hy(t)[0]}else if(t.promptFeedback)throw new ys(`Function call not available. ${Yn(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),gl(t.candidates[0]))throw new ys(`${Yn(t)}`,t);return Hy(t)}else if(t.promptFeedback)throw new ys(`Function call not available. ${Yn(t)}`,t)},t}function n2(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.text&&i.push(o.text),o.executableCode&&i.push("\n```"+o.executableCode.language+`
`+o.executableCode.code+"\n```\n"),o.codeExecutionResult&&i.push("\n```\n"+o.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function Hy(t){var e,n,r,s;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const o of(s=(r=t.candidates)===null||r===void 0?void 0:r[0].content)===null||s===void 0?void 0:s.parts)o.functionCall&&i.push(o.functionCall);if(i.length>0)return i}const r2=[ao.RECITATION,ao.SAFETY,ao.LANGUAGE];function gl(t){return!!t.finishReason&&r2.includes(t.finishReason)}function Yn(t){var e,n,r;let s="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)s+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(s+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((r=t.candidates)===null||r===void 0)&&r[0]){const i=t.candidates[0];gl(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function Lo(t){return this instanceof Lo?(this.v=t,this):new Lo(t)}function s2(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n.apply(t,e||[]),s,i=[];return s={},o("next"),o("throw"),o("return"),s[Symbol.asyncIterator]=function(){return this},s;function o(g){r[g]&&(s[g]=function(_){return new Promise(function(T,N){i.push([g,_,T,N])>1||l(g,_)})})}function l(g,_){try{u(r[g](_))}catch(T){m(i[0][3],T)}}function u(g){g.value instanceof Lo?Promise.resolve(g.value.v).then(d,p):m(i[0][2],g)}function d(g){l("next",g)}function p(g){l("throw",g)}function m(g,_){g(_),i.shift(),i.length&&l(i[0][0],i[0][1])}}/**
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
 */const qy=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function i2(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=l2(e),[r,s]=n.tee();return{stream:a2(r),response:o2(s)}}async function o2(t){const e=[],n=t.getReader();for(;;){const{done:r,value:s}=await n.read();if(r)return op(u2(e));e.push(s)}}function a2(t){return s2(this,arguments,function*(){const n=t.getReader();for(;;){const{value:r,done:s}=yield Lo(n.read());if(s)break;yield yield Lo(op(r))}})}function l2(t){const e=t.getReader();return new ReadableStream({start(r){let s="";return i();function i(){return e.read().then(({value:o,done:l})=>{if(l){if(s.trim()){r.error(new ht("Failed to parse stream"));return}r.close();return}s+=o;let u=s.match(qy),d;for(;u;){try{d=JSON.parse(u[1])}catch{r.error(new ht(`Error parsing JSON response: "${u[1]}"`));return}r.enqueue(d),s=s.substring(u[0].length),u=s.match(qy)}return i()}).catch(o=>{let l=o;throw l.stack=o.stack,l.name==="AbortError"?l=new LE("Request aborted when reading from the stream"):l=new ht("Error reading from the stream"),l})}}})}function u2(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const r of t){if(r.candidates){let s=0;for(const i of r.candidates)if(n.candidates||(n.candidates=[]),n.candidates[s]||(n.candidates[s]={index:s}),n.candidates[s].citationMetadata=i.citationMetadata,n.candidates[s].groundingMetadata=i.groundingMetadata,n.candidates[s].finishReason=i.finishReason,n.candidates[s].finishMessage=i.finishMessage,n.candidates[s].safetyRatings=i.safetyRatings,i.content&&i.content.parts){n.candidates[s].content||(n.candidates[s].content={role:i.content.role||"user",parts:[]});const o={};for(const l of i.content.parts)l.text&&(o.text=l.text),l.functionCall&&(o.functionCall=l.functionCall),l.executableCode&&(o.executableCode=l.executableCode),l.codeExecutionResult&&(o.codeExecutionResult=l.codeExecutionResult),Object.keys(o).length===0&&(o.text=""),n.candidates[s].content.parts.push(o)}s++}r.usageMetadata&&(n.usageMetadata=r.usageMetadata)}return n}/**
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
 */async function jE(t,e,n,r){const s=await oa(e,as.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),r);return i2(s)}async function FE(t,e,n,r){const i=await(await oa(e,as.GENERATE_CONTENT,t,!1,JSON.stringify(n),r)).json();return{response:op(i)}}/**
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
 */function UE(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function jo(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return c2(e)}function c2(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let r=!1,s=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),s=!0):(e.parts.push(i),r=!0);if(r&&s)throw new ht("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!r&&!s)throw new ht("No content is provided for sending chat message.");return r?e:n}function d2(t,e){var n;let r={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const s=t.generateContentRequest!=null;if(t.contents){if(s)throw new _r("CountTokensRequest must have one of contents or generateContentRequest, not both.");r.contents=t.contents}else if(s)r=Object.assign(Object.assign({},r),t.generateContentRequest);else{const i=jo(t);r.contents=[i]}return{generateContentRequest:r}}function Wy(t){let e;return t.contents?e=t:e={contents:[jo(t)]},t.systemInstruction&&(e.systemInstruction=UE(t.systemInstruction)),e}function h2(t){return typeof t=="string"||Array.isArray(t)?{content:jo(t)}:t}/**
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
 */const Gy=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],f2={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function p2(t){let e=!1;for(const n of t){const{role:r,parts:s}=n;if(!e&&r!=="user")throw new ht(`First content should be with role 'user', got ${r}`);if(!My.includes(r))throw new ht(`Each item should include role field. Got ${r} but valid roles are: ${JSON.stringify(My)}`);if(!Array.isArray(s))throw new ht("Content should have 'parts' property with an array of Parts");if(s.length===0)throw new ht("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const l of s)for(const u of Gy)u in l&&(i[u]+=1);const o=f2[r];for(const l of Gy)if(!o.includes(l)&&i[l]>0)throw new ht(`Content with role '${r}' can't contain '${l}' part`);e=!0}}function Ky(t){var e;if(t.candidates===void 0||t.candidates.length===0)return!1;const n=(e=t.candidates[0])===null||e===void 0?void 0:e.content;if(n===void 0||n.parts===void 0||n.parts.length===0)return!1;for(const r of n.parts)if(r===void 0||Object.keys(r).length===0||r.text!==void 0&&r.text==="")return!1;return!0}/**
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
 */const Qy="SILENT_ERROR";class m2{constructor(e,n,r,s={}){this.model=n,this.params=r,this._requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,r!=null&&r.history&&(p2(r.history),this._history=r.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var r,s,i,o,l,u;await this._sendPromise;const d=jo(e),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,d]},m=Object.assign(Object.assign({},this._requestOptions),n);let g;return this._sendPromise=this._sendPromise.then(()=>FE(this._apiKey,this.model,p,m)).then(_=>{var T;if(Ky(_.response)){this._history.push(d);const N=Object.assign({parts:[],role:"model"},(T=_.response.candidates)===null||T===void 0?void 0:T[0].content);this._history.push(N)}else{const N=Yn(_.response);N&&console.warn(`sendMessage() was unsuccessful. ${N}. Inspect response object for details.`)}g=_}).catch(_=>{throw this._sendPromise=Promise.resolve(),_}),await this._sendPromise,g}async sendMessageStream(e,n={}){var r,s,i,o,l,u;await this._sendPromise;const d=jo(e),p={safetySettings:(r=this.params)===null||r===void 0?void 0:r.safetySettings,generationConfig:(s=this.params)===null||s===void 0?void 0:s.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(o=this.params)===null||o===void 0?void 0:o.toolConfig,systemInstruction:(l=this.params)===null||l===void 0?void 0:l.systemInstruction,cachedContent:(u=this.params)===null||u===void 0?void 0:u.cachedContent,contents:[...this._history,d]},m=Object.assign(Object.assign({},this._requestOptions),n),g=jE(this._apiKey,this.model,p,m);return this._sendPromise=this._sendPromise.then(()=>g).catch(_=>{throw new Error(Qy)}).then(_=>_.response).then(_=>{if(Ky(_)){this._history.push(d);const T=Object.assign({},_.candidates[0].content);T.role||(T.role="model"),this._history.push(T)}else{const T=Yn(_);T&&console.warn(`sendMessageStream() was unsuccessful. ${T}. Inspect response object for details.`)}}).catch(_=>{_.message!==Qy&&console.error(_)}),g}}/**
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
 */async function g2(t,e,n,r){return(await oa(e,as.COUNT_TOKENS,t,!1,JSON.stringify(n),r)).json()}/**
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
 */async function y2(t,e,n,r){return(await oa(e,as.EMBED_CONTENT,t,!1,JSON.stringify(n),r)).json()}async function v2(t,e,n,r){const s=n.requests.map(o=>Object.assign(Object.assign({},o),{model:e}));return(await oa(e,as.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:s}),r)).json()}/**
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
 */class Yy{constructor(e,n,r={}){this.apiKey=e,this._requestOptions=r,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=UE(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var r;const s=Wy(e),i=Object.assign(Object.assign({},this._requestOptions),n);return FE(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}async generateContentStream(e,n={}){var r;const s=Wy(e),i=Object.assign(Object.assign({},this._requestOptions),n);return jE(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(r=this.cachedContent)===null||r===void 0?void 0:r.name},s),i)}startChat(e){var n;return new m2(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const r=d2(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),s=Object.assign(Object.assign({},this._requestOptions),n);return g2(this.apiKey,this.model,r,s)}async embedContent(e,n={}){const r=h2(e),s=Object.assign(Object.assign({},this._requestOptions),n);return y2(this.apiKey,this.model,r,s)}async batchEmbedContents(e,n={}){const r=Object.assign(Object.assign({},this._requestOptions),n);return v2(this.apiKey,this.model,e,r)}}/**
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
 */class _2{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new ht("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new Yy(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,r){if(!e.name)throw new _r("Cached content must contain a `name` field.");if(!e.model)throw new _r("Cached content must contain a `model` field.");const s=["model","systemInstruction"];for(const o of s)if(n!=null&&n[o]&&e[o]&&(n==null?void 0:n[o])!==e[o]){if(o==="model"){const l=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,u=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(l===u)continue}throw new _r(`Different value for "${o}" specified in modelParams (${n[o]}) and cachedContent (${e[o]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new Yy(this.apiKey,i,r)}}const w2=new _2("AIzaSyDFGlm4ixlJ34vg9XT_otqIeKgZT5bmBu8");function E2(){var se,me;const[t,e]=W.useState(null),[n,r]=W.useState(null),[s,i]=W.useState("dashboard"),[o,l]=W.useState(!0),[u,d]=W.useState(!1),{members:p,tasks:m,logs:g,actionLogs:_,rules:T,manualScores:N,roles:O,handleTaskToggle:C,handleUpdateTaskStatus:w,handleAddTask:A,handleEditTask:D,handleDeleteTask:$,handleAddMember:U,handleEditMember:x,handleDeleteMember:v,handleAddLog:E,handleResolveLog:I,handleDeleteLog:k,handleSaveRule:R,handleDeleteRule:S,handleSaveManualScore:Me,handleDeleteManualScore:J,handleSaveRole:B}=AN();W.useEffect(()=>{const ye=lA(Ny,Pe=>{e(Pe)});return()=>ye()},[]);const q=async()=>{await uA(Ny),r(null)},V=ye=>ze.success(ye),z=ye=>(...Pe)=>{if(ye)return ye(...Pe,t||n)},Q=(O==null?void 0:O[(se=t||n)==null?void 0:se.email])||"staff",ue=async ye=>{d(!0);try{const Pe=w2.getGenerativeModel({model:"gemini-pro"}),ve=`ช่วยแนะนำวิธีแก้ปัญหาขนส่งนี้หน่อย: หัวข้อ "${ye.topic}" รายละเอียด "${ye.detail}"`,gi=(await(await Pe.generateContent(ve)).response).text();alert(`🤖 AI Suggestion:
${gi}`)}catch(Pe){console.error(Pe),alert("AI Error: "+Pe.message)}finally{d(!1)}};return!t&&!n?h.jsx(tP,{onLogin:ye=>r(ye)}):h.jsxs("div",{className:"flex h-screen bg-gray-100 font-sans text-gray-900 overflow-hidden",children:[h.jsx(BP,{position:"top-right"}),h.jsx("div",{className:`fixed inset-y-0 left-0 z-50 w-64 bg-slate-900 text-white transform transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${o?"translate-x-0":"-translate-x-full"}`,children:h.jsx(qN,{activeTab:s,setActiveTab:ye=>{i(ye),l(!1)},user:t||n,role:Q,onLogout:q})}),h.jsxs("div",{className:"flex-1 flex flex-col min-w-0 overflow-hidden",children:[h.jsxs("div",{className:"lg:hidden bg-white p-4 shadow-sm flex items-center justify-between",children:[h.jsx("span",{className:"font-bold text-lg text-slate-800",children:"TransportOps"}),h.jsx("button",{onClick:()=>l(!o),className:"p-2 text-gray-600",children:h.jsx(UN,{})})]}),h.jsx("div",{className:"flex-1 overflow-auto p-4 lg:p-8",children:h.jsxs("div",{className:"max-w-7xl mx-auto",children:[s==="dashboard"&&h.jsx(WN,{members:p||[],tasks:m||[],logs:g||[]}),s==="team"&&h.jsx(GN,{members:p||[],onAdd:z(U),onEdit:z(x),onDelete:z(v),currentUserRole:Q}),s==="dept"&&h.jsx(QN,{members:p||[],tasks:m||[],onTaskToggle:z(C)}),s==="scores"&&h.jsx(YN,{members:p||[],manualScores:N||[],rules:T||[],tasks:m||[],onAddScore:z(Me),onDeleteScore:z(J),currentUserRole:Q}),s==="problems"&&h.jsx(XN,{logs:g||[],onAddLog:z(E),onResolveLog:z(I),onDeleteLog:z(k),currentDate:new Date().toLocaleDateString("th-TH"),askAiSolution:ue,showToast:V,userEmail:(me=t||n)==null?void 0:me.email,currentUserRole:Q,aiLoading:u}),s==="assign"&&h.jsx(JN,{members:p||[],tasks:m||[],onAddTask:z(A),onEditTask:z(D),onDeleteTask:z($),onUpdateStatus:z(w),currentUserRole:Q}),s==="action_logs"&&h.jsx(ZN,{logs:_||[]}),s==="rules"&&h.jsx(eP,{rules:T||[],onSave:z(R),onDelete:z(S),currentUserRole:Q,roles:O||{},onSaveRole:z(B)})]})})]}),o&&h.jsx("div",{className:"fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden",onClick:()=>l(!1)})]})}Kc.createRoot(document.getElementById("root")).render(h.jsx(bx.StrictMode,{children:h.jsx(E2,{})}));
