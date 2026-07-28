(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const c of u.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function J0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Sc={exports:{}},Ua={},yc={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function e_(){if(Pp)return ht;Pp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),_=Symbol.iterator;function g(N){return N===null||typeof N!="object"?null:(N=_&&N[_]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,C={};function S(N,K,Ie){this.props=N,this.context=K,this.refs=C,this.updater=Ie||M}S.prototype.isReactComponent={},S.prototype.setState=function(N,K){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,K,"setState")},S.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function x(){}x.prototype=S.prototype;function I(N,K,Ie){this.props=N,this.context=K,this.refs=C,this.updater=Ie||M}var F=I.prototype=new x;F.constructor=I,w(F,S.prototype),F.isPureReactComponent=!0;var R=Array.isArray,U=Object.prototype.hasOwnProperty,P={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function T(N,K,Ie){var Ge,ke={},ne=null,ve=null;if(K!=null)for(Ge in K.ref!==void 0&&(ve=K.ref),K.key!==void 0&&(ne=""+K.key),K)U.call(K,Ge)&&!O.hasOwnProperty(Ge)&&(ke[Ge]=K[Ge]);var me=arguments.length-2;if(me===1)ke.children=Ie;else if(1<me){for(var Ue=Array(me),Qe=0;Qe<me;Qe++)Ue[Qe]=arguments[Qe+2];ke.children=Ue}if(N&&N.defaultProps)for(Ge in me=N.defaultProps,me)ke[Ge]===void 0&&(ke[Ge]=me[Ge]);return{$$typeof:s,type:N,key:ne,ref:ve,props:ke,_owner:P.current}}function L(N,K){return{$$typeof:s,type:N.type,key:K,ref:N.ref,props:N.props,_owner:N._owner}}function X(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function z(N){var K={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Ie){return K[Ie]})}var Z=/\/+/g;function re(N,K){return typeof N=="object"&&N!==null&&N.key!=null?z(""+N.key):K.toString(36)}function he(N,K,Ie,Ge,ke){var ne=typeof N;(ne==="undefined"||ne==="boolean")&&(N=null);var ve=!1;if(N===null)ve=!0;else switch(ne){case"string":case"number":ve=!0;break;case"object":switch(N.$$typeof){case s:case e:ve=!0}}if(ve)return ve=N,ke=ke(ve),N=Ge===""?"."+re(ve,0):Ge,R(ke)?(Ie="",N!=null&&(Ie=N.replace(Z,"$&/")+"/"),he(ke,K,Ie,"",function(Qe){return Qe})):ke!=null&&(X(ke)&&(ke=L(ke,Ie+(!ke.key||ve&&ve.key===ke.key?"":(""+ke.key).replace(Z,"$&/")+"/")+N)),K.push(ke)),1;if(ve=0,Ge=Ge===""?".":Ge+":",R(N))for(var me=0;me<N.length;me++){ne=N[me];var Ue=Ge+re(ne,me);ve+=he(ne,K,Ie,Ue,ke)}else if(Ue=g(N),typeof Ue=="function")for(N=Ue.call(N),me=0;!(ne=N.next()).done;)ne=ne.value,Ue=Ge+re(ne,me++),ve+=he(ne,K,Ie,Ue,ke);else if(ne==="object")throw K=String(N),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ve}function q(N,K,Ie){if(N==null)return N;var Ge=[],ke=0;return he(N,Ge,"","",function(ne){return K.call(Ie,ne,ke++)}),Ge}function oe(N){if(N._status===-1){var K=N._result;K=K(),K.then(function(Ie){(N._status===0||N._status===-1)&&(N._status=1,N._result=Ie)},function(Ie){(N._status===0||N._status===-1)&&(N._status=2,N._result=Ie)}),N._status===-1&&(N._status=0,N._result=K)}if(N._status===1)return N._result.default;throw N._result}var Y={current:null},H={transition:null},ue={ReactCurrentDispatcher:Y,ReactCurrentBatchConfig:H,ReactCurrentOwner:P};function le(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:q,forEach:function(N,K,Ie){q(N,function(){K.apply(this,arguments)},Ie)},count:function(N){var K=0;return q(N,function(){K++}),K},toArray:function(N){return q(N,function(K){return K})||[]},only:function(N){if(!X(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},ht.Component=S,ht.Fragment=n,ht.Profiler=o,ht.PureComponent=I,ht.StrictMode=r,ht.Suspense=p,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue,ht.act=le,ht.cloneElement=function(N,K,Ie){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Ge=w({},N.props),ke=N.key,ne=N.ref,ve=N._owner;if(K!=null){if(K.ref!==void 0&&(ne=K.ref,ve=P.current),K.key!==void 0&&(ke=""+K.key),N.type&&N.type.defaultProps)var me=N.type.defaultProps;for(Ue in K)U.call(K,Ue)&&!O.hasOwnProperty(Ue)&&(Ge[Ue]=K[Ue]===void 0&&me!==void 0?me[Ue]:K[Ue])}var Ue=arguments.length-2;if(Ue===1)Ge.children=Ie;else if(1<Ue){me=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)me[Qe]=arguments[Qe+2];Ge.children=me}return{$$typeof:s,type:N.type,key:ke,ref:ne,props:Ge,_owner:ve}},ht.createContext=function(N){return N={$$typeof:c,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:u,_context:N},N.Consumer=N},ht.createElement=T,ht.createFactory=function(N){var K=T.bind(null,N);return K.type=N,K},ht.createRef=function(){return{current:null}},ht.forwardRef=function(N){return{$$typeof:d,render:N}},ht.isValidElement=X,ht.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:oe}},ht.memo=function(N,K){return{$$typeof:m,type:N,compare:K===void 0?null:K}},ht.startTransition=function(N){var K=H.transition;H.transition={};try{N()}finally{H.transition=K}},ht.unstable_act=le,ht.useCallback=function(N,K){return Y.current.useCallback(N,K)},ht.useContext=function(N){return Y.current.useContext(N)},ht.useDebugValue=function(){},ht.useDeferredValue=function(N){return Y.current.useDeferredValue(N)},ht.useEffect=function(N,K){return Y.current.useEffect(N,K)},ht.useId=function(){return Y.current.useId()},ht.useImperativeHandle=function(N,K,Ie){return Y.current.useImperativeHandle(N,K,Ie)},ht.useInsertionEffect=function(N,K){return Y.current.useInsertionEffect(N,K)},ht.useLayoutEffect=function(N,K){return Y.current.useLayoutEffect(N,K)},ht.useMemo=function(N,K){return Y.current.useMemo(N,K)},ht.useReducer=function(N,K,Ie){return Y.current.useReducer(N,K,Ie)},ht.useRef=function(N){return Y.current.useRef(N)},ht.useState=function(N){return Y.current.useState(N)},ht.useSyncExternalStore=function(N,K,Ie){return Y.current.useSyncExternalStore(N,K,Ie)},ht.useTransition=function(){return Y.current.useTransition()},ht.version="18.3.1",ht}var Lp;function Kf(){return Lp||(Lp=1,yc.exports=e_()),yc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function t_(){if(Dp)return Ua;Dp=1;var s=Kf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function c(d,p,m){var v,_={},g=null,M=null;m!==void 0&&(g=""+m),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(v in p)r.call(p,v)&&!u.hasOwnProperty(v)&&(_[v]=p[v]);if(d&&d.defaultProps)for(v in p=d.defaultProps,p)_[v]===void 0&&(_[v]=p[v]);return{$$typeof:e,type:d,key:g,ref:M,props:_,_owner:o.current}}return Ua.Fragment=n,Ua.jsx=c,Ua.jsxs=c,Ua}var Np;function n_(){return Np||(Np=1,Sc.exports=t_()),Sc.exports}var ce=n_(),mt=Kf();const i_=J0(mt);var tl={},Mc={exports:{}},On={},Ec={exports:{}},Tc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ip;function r_(){return Ip||(Ip=1,(function(s){function e(H,ue){var le=H.length;H.push(ue);e:for(;0<le;){var N=le-1>>>1,K=H[N];if(0<o(K,ue))H[N]=ue,H[le]=K,le=N;else break e}}function n(H){return H.length===0?null:H[0]}function r(H){if(H.length===0)return null;var ue=H[0],le=H.pop();if(le!==ue){H[0]=le;e:for(var N=0,K=H.length,Ie=K>>>1;N<Ie;){var Ge=2*(N+1)-1,ke=H[Ge],ne=Ge+1,ve=H[ne];if(0>o(ke,le))ne<K&&0>o(ve,ke)?(H[N]=ve,H[ne]=le,N=ne):(H[N]=ke,H[Ge]=le,N=Ge);else if(ne<K&&0>o(ve,le))H[N]=ve,H[ne]=le,N=ne;else break e}}return ue}function o(H,ue){var le=H.sortIndex-ue.sortIndex;return le!==0?le:H.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var c=Date,d=c.now();s.unstable_now=function(){return c.now()-d}}var p=[],m=[],v=1,_=null,g=3,M=!1,w=!1,C=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function F(H){for(var ue=n(m);ue!==null;){if(ue.callback===null)r(m);else if(ue.startTime<=H)r(m),ue.sortIndex=ue.expirationTime,e(p,ue);else break;ue=n(m)}}function R(H){if(C=!1,F(H),!w)if(n(p)!==null)w=!0,oe(U);else{var ue=n(m);ue!==null&&Y(R,ue.startTime-H)}}function U(H,ue){w=!1,C&&(C=!1,x(T),T=-1),M=!0;var le=g;try{for(F(ue),_=n(p);_!==null&&(!(_.expirationTime>ue)||H&&!z());){var N=_.callback;if(typeof N=="function"){_.callback=null,g=_.priorityLevel;var K=N(_.expirationTime<=ue);ue=s.unstable_now(),typeof K=="function"?_.callback=K:_===n(p)&&r(p),F(ue)}else r(p);_=n(p)}if(_!==null)var Ie=!0;else{var Ge=n(m);Ge!==null&&Y(R,Ge.startTime-ue),Ie=!1}return Ie}finally{_=null,g=le,M=!1}}var P=!1,O=null,T=-1,L=5,X=-1;function z(){return!(s.unstable_now()-X<L)}function Z(){if(O!==null){var H=s.unstable_now();X=H;var ue=!0;try{ue=O(!0,H)}finally{ue?re():(P=!1,O=null)}}else P=!1}var re;if(typeof I=="function")re=function(){I(Z)};else if(typeof MessageChannel<"u"){var he=new MessageChannel,q=he.port2;he.port1.onmessage=Z,re=function(){q.postMessage(null)}}else re=function(){S(Z,0)};function oe(H){O=H,P||(P=!0,re())}function Y(H,ue){T=S(function(){H(s.unstable_now())},ue)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_continueExecution=function(){w||M||(w=!0,oe(U))},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(H){switch(g){case 1:case 2:case 3:var ue=3;break;default:ue=g}var le=g;g=ue;try{return H()}finally{g=le}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(H,ue){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var le=g;g=H;try{return ue()}finally{g=le}},s.unstable_scheduleCallback=function(H,ue,le){var N=s.unstable_now();switch(typeof le=="object"&&le!==null?(le=le.delay,le=typeof le=="number"&&0<le?N+le:N):le=N,H){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=le+K,H={id:v++,callback:ue,priorityLevel:H,startTime:le,expirationTime:K,sortIndex:-1},le>N?(H.sortIndex=le,e(m,H),n(p)===null&&H===n(m)&&(C?(x(T),T=-1):C=!0,Y(R,le-N))):(H.sortIndex=K,e(p,H),w||M||(w=!0,oe(U))),H},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(H){var ue=g;return function(){var le=g;g=ue;try{return H.apply(this,arguments)}finally{g=le}}}})(Tc)),Tc}var Up;function s_(){return Up||(Up=1,Ec.exports=r_()),Ec.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function a_(){if(Fp)return On;Fp=1;var s=Kf(),e=s_();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function u(t,i){c(t,i),c(t+"Capture",i)}function c(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},_={};function g(t){return p.call(_,t)?!0:p.call(v,t)?!1:m.test(t)?_[t]=!0:(v[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,l,f,h,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=h,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){S[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];S[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){S[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){S[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){S[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){S[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){S[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){S[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){S[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(x,I);S[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(x,I);S[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(x,I);S[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),S.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){S[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function F(t,i,a,l){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,l)&&(a=null),l||f===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,U=Symbol.for("react.element"),P=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),X=Symbol.for("react.provider"),z=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),he=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),H=Symbol.iterator;function ue(t){return t===null||typeof t!="object"?null:(t=H&&t[H]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,N;function K(t){if(N===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);N=i&&i[1]||""}return`
`+N+t}var Ie=!1;function Ge(t,i){if(!t||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ae){var l=ae}Reflect.construct(t,[],i)}else{try{i.call()}catch(ae){l=ae}t.call(i.prototype)}else{try{throw Error()}catch(ae){l=ae}t()}}catch(ae){if(ae&&l&&typeof ae.stack=="string"){for(var f=ae.stack.split(`
`),h=l.stack.split(`
`),E=f.length-1,D=h.length-1;1<=E&&0<=D&&f[E]!==h[D];)D--;for(;1<=E&&0<=D;E--,D--)if(f[E]!==h[D]){if(E!==1||D!==1)do if(E--,D--,0>D||f[E]!==h[D]){var B=`
`+f[E].replace(" at new "," at ");return t.displayName&&B.includes("<anonymous>")&&(B=B.replace("<anonymous>",t.displayName)),B}while(1<=E&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?K(t):""}function ke(t){switch(t.tag){case 5:return K(t.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return t=Ge(t.type,!1),t;case 11:return t=Ge(t.type.render,!1),t;case 1:return t=Ge(t.type,!0),t;default:return""}}function ne(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case P:return"Portal";case L:return"Profiler";case T:return"StrictMode";case re:return"Suspense";case he:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case X:return(t._context.displayName||"Context")+".Provider";case Z:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case q:return i=t.displayName||null,i!==null?i:ne(t.type)||"Memo";case oe:i=t._payload,t=t._init;try{return ne(t(i))}catch{}}return null}function ve(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ne(i);case 8:return i===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function me(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ue(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ue(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,h=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,h.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Je(t){t._valueTracker||(t._valueTracker=Qe(t))}function kt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ue(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function ut(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wt(t,i){var a=i.checked;return le({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function vt(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=me(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function pt(t,i){i=i.checked,i!=null&&F(t,"checked",i,!1)}function zt(t,i){pt(t,i);var a=me(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Kt(t,i.type,a):i.hasOwnProperty("defaultValue")&&Kt(t,i.type,me(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $t(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Kt(t,i,a){(i!=="number"||ut(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Wt=Array.isArray;function bt(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+me(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function Vt(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return le({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function G(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Wt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:me(a)}}function dn(t,i){var a=me(i.value),l=me(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function Et(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function b(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function y(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?b(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var $,te=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for($=$||document.createElement("div"),$.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=$.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function fe(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Ce.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function de(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function ge(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=de(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var Pe=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(t,i){if(i){if(Pe[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Le(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function je(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var et=null,it=null,k=null;function Ae(t){if(t=Sa(t)){if(typeof et!="function")throw Error(n(280));var i=t.stateNode;i&&(i=go(i),et(t.stateNode,t.type,i))}}function pe(t){it?k?k.push(t):k=[t]:it=t}function be(){if(it){var t=it,i=k;if(k=it=null,Ae(t),i)for(t=0;t<i.length;t++)Ae(i[t])}}function De(t,i){return t(i)}function _e(){}var We=!1;function Ve(t,i,a){if(We)return t(i,a);We=!0;try{return De(t,i,a)}finally{We=!1,(it!==null||k!==null)&&(_e(),be())}}function Nt(t,i){var a=t.stateNode;if(a===null)return null;var l=go(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var At=!1;if(d)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){At=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{At=!1}function qn(t,i,a,l,f,h,E,D,B){var ae=Array.prototype.slice.call(arguments,3);try{i.apply(a,ae)}catch(Se){this.onError(Se)}}var br=!1,as=null,Pr=!1,Lr=null,Gl={onError:function(t){br=!0,as=t}};function ja(t,i,a,l,f,h,E,D,B){br=!1,as=null,qn.apply(Gl,arguments)}function Qa(t,i,a,l,f,h,E,D,B){if(ja.apply(this,arguments),br){if(br){var ae=as;br=!1,as=null}else throw Error(n(198));Pr||(Pr=!0,Lr=ae)}}function wn(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function os(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ea(t){if(wn(t)!==t)throw Error(n(188))}function Ja(t){var i=t.alternate;if(!i){if(i=wn(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var h=f.alternate;if(h===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===h.child){for(h=f.child;h;){if(h===a)return ea(f),t;if(h===l)return ea(f),i;h=h.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=h;else{for(var E=!1,D=f.child;D;){if(D===a){E=!0,a=f,l=h;break}if(D===l){E=!0,l=f,a=h;break}D=D.sibling}if(!E){for(D=h.child;D;){if(D===a){E=!0,a=h,l=f;break}if(D===l){E=!0,l=h,a=f;break}D=D.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Dr(t){return t=Ja(t),t!==null?ta(t):null}function ta(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=ta(t);if(i!==null)return i;t=t.sibling}return null}var Nr=e.unstable_scheduleCallback,na=e.unstable_cancelCallback,eo=e.unstable_shouldYield,Wl=e.unstable_requestPaint,Xt=e.unstable_now,Xl=e.unstable_getCurrentPriorityLevel,ia=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,W=e.unstable_NormalPriority,se=e.unstable_LowPriority,J=e.unstable_IdlePriority,Q=null,we=null;function Be(t){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(Q,t,void 0,(t.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:at,Xe=Math.log,Ze=Math.LN2;function at(t){return t>>>=0,t===0?32:31-(Xe(t)/Ze|0)|0}var ot=64,$e=4194304;function xt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function It(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,h=t.pingedLanes,E=a&268435455;if(E!==0){var D=E&~f;D!==0?l=xt(D):(h&=E,h!==0&&(l=xt(h)))}else E=a&~f,E!==0?l=xt(E):h!==0&&(l=xt(h));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,h=i&-i,f>=h||f===16&&(h&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-Te(i),f=1<<a,l|=t[a],i&=~f;return l}function Ht(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pt(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,h=t.pendingLanes;0<h;){var E=31-Te(h),D=1<<E,B=f[E];B===-1?((D&a)===0||(D&l)!==0)&&(f[E]=Ht(D,i)):B<=i&&(t.expiredLanes|=D),h&=~D}}function Jt(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Fe(){var t=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),t}function hn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function ft(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-Te(i),t[i]=a}function Pn(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-Te(a),h=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~h}}function Ln(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-Te(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var dt=0;function Ni(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Rt,Ft,ii,Lt,ri,vi=!1,Ir=[],tr=null,nr=null,ir=null,ra=new Map,sa=new Map,rr=[],yg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hd(t,i){switch(t){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":ra.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":sa.delete(i.pointerId)}}function aa(t,i,a,l,f,h){return t===null||t.nativeEvent!==h?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:h,targetContainers:[f]},i!==null&&(i=Sa(i),i!==null&&Ft(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Mg(t,i,a,l,f){switch(i){case"focusin":return tr=aa(tr,t,i,a,l,f),!0;case"dragenter":return nr=aa(nr,t,i,a,l,f),!0;case"mouseover":return ir=aa(ir,t,i,a,l,f),!0;case"pointerover":var h=f.pointerId;return ra.set(h,aa(ra.get(h)||null,t,i,a,l,f)),!0;case"gotpointercapture":return h=f.pointerId,sa.set(h,aa(sa.get(h)||null,t,i,a,l,f)),!0}return!1}function pd(t){var i=Ur(t.target);if(i!==null){var a=wn(i);if(a!==null){if(i=a.tag,i===13){if(i=os(a),i!==null){t.blockedOn=i,ri(t.priority,function(){ii(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function to(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=ql(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Re=l,a.target.dispatchEvent(l),Re=null}else return i=Sa(a),i!==null&&Ft(i),t.blockedOn=a,!1;i.shift()}return!0}function md(t,i,a){to(t)&&a.delete(i)}function Eg(){vi=!1,tr!==null&&to(tr)&&(tr=null),nr!==null&&to(nr)&&(nr=null),ir!==null&&to(ir)&&(ir=null),ra.forEach(md),sa.forEach(md)}function oa(t,i){t.blockedOn===i&&(t.blockedOn=null,vi||(vi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Eg)))}function la(t){function i(f){return oa(f,t)}if(0<Ir.length){oa(Ir[0],t);for(var a=1;a<Ir.length;a++){var l=Ir[a];l.blockedOn===t&&(l.blockedOn=null)}}for(tr!==null&&oa(tr,t),nr!==null&&oa(nr,t),ir!==null&&oa(ir,t),ra.forEach(i),sa.forEach(i),a=0;a<rr.length;a++)l=rr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)pd(a),a.blockedOn===null&&rr.shift()}var ls=R.ReactCurrentBatchConfig,no=!0;function Tg(t,i,a,l){var f=dt,h=ls.transition;ls.transition=null;try{dt=1,Yl(t,i,a,l)}finally{dt=f,ls.transition=h}}function wg(t,i,a,l){var f=dt,h=ls.transition;ls.transition=null;try{dt=4,Yl(t,i,a,l)}finally{dt=f,ls.transition=h}}function Yl(t,i,a,l){if(no){var f=ql(t,i,a,l);if(f===null)cu(t,i,l,io,a),hd(t,l);else if(Mg(f,t,i,a,l))l.stopPropagation();else if(hd(t,l),i&4&&-1<yg.indexOf(t)){for(;f!==null;){var h=Sa(f);if(h!==null&&Rt(h),h=ql(t,i,a,l),h===null&&cu(t,i,l,io,a),h===f)break;f=h}f!==null&&l.stopPropagation()}else cu(t,i,l,null,a)}}var io=null;function ql(t,i,a,l){if(io=null,t=je(l),t=Ur(t),t!==null)if(i=wn(t),i===null)t=null;else if(a=i.tag,a===13){if(t=os(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return io=t,null}function gd(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xl()){case ia:return 1;case A:return 4;case W:case se:return 16;case J:return 536870912;default:return 16}default:return 16}}var sr=null,$l=null,ro=null;function _d(){if(ro)return ro;var t,i=$l,a=i.length,l,f="value"in sr?sr.value:sr.textContent,h=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===f[h-l];l++);return ro=f.slice(t,1<l?1-l:void 0)}function so(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ao(){return!0}function vd(){return!1}function zn(t){function i(a,l,f,h,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=h,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ao:vd,this.isPropagationStopped=vd,this}return le(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ao)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ao)},persist:function(){},isPersistent:ao}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=zn(us),ua=le({},us,{view:0,detail:0}),Ag=zn(ua),Zl,jl,ca,oo=le({},ua,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ca&&(ca&&t.type==="mousemove"?(Zl=t.screenX-ca.screenX,jl=t.screenY-ca.screenY):jl=Zl=0,ca=t),Zl)},movementY:function(t){return"movementY"in t?t.movementY:jl}}),xd=zn(oo),Rg=le({},oo,{dataTransfer:0}),Cg=zn(Rg),bg=le({},ua,{relatedTarget:0}),Ql=zn(bg),Pg=le({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Lg=zn(Pg),Dg=le({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ng=zn(Dg),Ig=le({},us,{data:0}),Sd=zn(Ig),Ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Fg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=Og[t])?!!i[t]:!1}function Jl(){return Bg}var kg=le({},ua,{key:function(t){if(t.key){var i=Ug[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=so(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Fg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jl,charCode:function(t){return t.type==="keypress"?so(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?so(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),zg=zn(kg),Vg=le({},oo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yd=zn(Vg),Hg=le({},ua,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jl}),Gg=zn(Hg),Wg=le({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=zn(Wg),Yg=le({},oo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),qg=zn(Yg),$g=[9,13,27,32],eu=d&&"CompositionEvent"in window,fa=null;d&&"documentMode"in document&&(fa=document.documentMode);var Kg=d&&"TextEvent"in window&&!fa,Md=d&&(!eu||fa&&8<fa&&11>=fa),Ed=" ",Td=!1;function wd(t,i){switch(t){case"keyup":return $g.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function Zg(t,i){switch(t){case"compositionend":return Ad(i);case"keypress":return i.which!==32?null:(Td=!0,Ed);case"textInput":return t=i.data,t===Ed&&Td?null:t;default:return null}}function jg(t,i){if(cs)return t==="compositionend"||!eu&&wd(t,i)?(t=_d(),ro=$l=sr=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Md&&i.locale!=="ko"?null:i.data;default:return null}}var Qg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rd(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Qg[t.type]:i==="textarea"}function Cd(t,i,a,l){pe(l),i=ho(i,"onChange"),0<i.length&&(a=new Kl("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var da=null,ha=null;function Jg(t){Yd(t,0)}function lo(t){var i=ms(t);if(kt(i))return t}function e0(t,i){if(t==="change")return i}var bd=!1;if(d){var tu;if(d){var nu="oninput"in document;if(!nu){var Pd=document.createElement("div");Pd.setAttribute("oninput","return;"),nu=typeof Pd.oninput=="function"}tu=nu}else tu=!1;bd=tu&&(!document.documentMode||9<document.documentMode)}function Ld(){da&&(da.detachEvent("onpropertychange",Dd),ha=da=null)}function Dd(t){if(t.propertyName==="value"&&lo(ha)){var i=[];Cd(i,ha,t,je(t)),Ve(Jg,i)}}function t0(t,i,a){t==="focusin"?(Ld(),da=i,ha=a,da.attachEvent("onpropertychange",Dd)):t==="focusout"&&Ld()}function n0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return lo(ha)}function i0(t,i){if(t==="click")return lo(i)}function r0(t,i){if(t==="input"||t==="change")return lo(i)}function s0(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var si=typeof Object.is=="function"?Object.is:s0;function pa(t,i){if(si(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!p.call(i,f)||!si(t[f],i[f]))return!1}return!0}function Nd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Id(t,i){var a=Nd(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Nd(a)}}function Ud(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Ud(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Fd(){for(var t=window,i=ut();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=ut(t.document)}return i}function iu(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function a0(t){var i=Fd(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Ud(a.ownerDocument.documentElement,a)){if(l!==null&&iu(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,h=Math.min(l.start,f);l=l.end===void 0?h:Math.min(l.end,f),!t.extend&&h>l&&(f=l,l=h,h=f),f=Id(a,h);var E=Id(a,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),h>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var o0=d&&"documentMode"in document&&11>=document.documentMode,fs=null,ru=null,ma=null,su=!1;function Od(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;su||fs==null||fs!==ut(l)||(l=fs,"selectionStart"in l&&iu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ma&&pa(ma,l)||(ma=l,l=ho(ru,"onSelect"),0<l.length&&(i=new Kl("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=fs)))}function uo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var ds={animationend:uo("Animation","AnimationEnd"),animationiteration:uo("Animation","AnimationIteration"),animationstart:uo("Animation","AnimationStart"),transitionend:uo("Transition","TransitionEnd")},au={},Bd={};d&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function co(t){if(au[t])return au[t];if(!ds[t])return t;var i=ds[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Bd)return au[t]=i[a];return t}var kd=co("animationend"),zd=co("animationiteration"),Vd=co("animationstart"),Hd=co("transitionend"),Gd=new Map,Wd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(t,i){Gd.set(t,i),u(i,[t])}for(var ou=0;ou<Wd.length;ou++){var lu=Wd[ou],l0=lu.toLowerCase(),u0=lu[0].toUpperCase()+lu.slice(1);ar(l0,"on"+u0)}ar(kd,"onAnimationEnd"),ar(zd,"onAnimationIteration"),ar(Vd,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(Hd,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),c0=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Xd(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,Qa(l,i,void 0,t),t.currentTarget=null}function Yd(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var h=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],B=D.instance,ae=D.currentTarget;if(D=D.listener,B!==h&&f.isPropagationStopped())break e;Xd(f,D,ae),h=B}else for(E=0;E<l.length;E++){if(D=l[E],B=D.instance,ae=D.currentTarget,D=D.listener,B!==h&&f.isPropagationStopped())break e;Xd(f,D,ae),h=B}}}if(Pr)throw t=Lr,Pr=!1,Lr=null,t}function Ot(t,i){var a=i[gu];a===void 0&&(a=i[gu]=new Set);var l=t+"__bubble";a.has(l)||(qd(i,t,2,!1),a.add(l))}function uu(t,i,a){var l=0;i&&(l|=4),qd(a,t,l,i)}var fo="_reactListening"+Math.random().toString(36).slice(2);function _a(t){if(!t[fo]){t[fo]=!0,r.forEach(function(a){a!=="selectionchange"&&(c0.has(a)||uu(a,!1,t),uu(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[fo]||(i[fo]=!0,uu("selectionchange",!1,i))}}function qd(t,i,a,l){switch(gd(i)){case 1:var f=Tg;break;case 4:f=wg;break;default:f=Yl}a=f.bind(null,i,a,t),f=void 0,!At||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function cu(t,i,a,l,f){var h=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var B=E.tag;if((B===3||B===4)&&(B=E.stateNode.containerInfo,B===f||B.nodeType===8&&B.parentNode===f))return;E=E.return}for(;D!==null;){if(E=Ur(D),E===null)return;if(B=E.tag,B===5||B===6){l=h=E;continue e}D=D.parentNode}}l=l.return}Ve(function(){var ae=h,Se=je(a),ye=[];e:{var xe=Gd.get(t);if(xe!==void 0){var Oe=Kl,He=t;switch(t){case"keypress":if(so(a)===0)break e;case"keydown":case"keyup":Oe=zg;break;case"focusin":He="focus",Oe=Ql;break;case"focusout":He="blur",Oe=Ql;break;case"beforeblur":case"afterblur":Oe=Ql;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Oe=xd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Oe=Cg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Oe=Gg;break;case kd:case zd:case Vd:Oe=Lg;break;case Hd:Oe=Xg;break;case"scroll":Oe=Ag;break;case"wheel":Oe=qg;break;case"copy":case"cut":case"paste":Oe=Ng;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Oe=yd}var Ye=(i&4)!==0,Qt=!Ye&&t==="scroll",j=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var V=ae,ee;V!==null;){ee=V;var Ee=ee.stateNode;if(ee.tag===5&&Ee!==null&&(ee=Ee,j!==null&&(Ee=Nt(V,j),Ee!=null&&Ye.push(va(V,Ee,ee)))),Qt)break;V=V.return}0<Ye.length&&(xe=new Oe(xe,He,null,a,Se),ye.push({event:xe,listeners:Ye}))}}if((i&7)===0){e:{if(xe=t==="mouseover"||t==="pointerover",Oe=t==="mouseout"||t==="pointerout",xe&&a!==Re&&(He=a.relatedTarget||a.fromElement)&&(Ur(He)||He[Ii]))break e;if((Oe||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Oe?(He=a.relatedTarget||a.toElement,Oe=ae,He=He?Ur(He):null,He!==null&&(Qt=wn(He),He!==Qt||He.tag!==5&&He.tag!==6)&&(He=null)):(Oe=null,He=ae),Oe!==He)){if(Ye=xd,Ee="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(Ye=yd,Ee="onPointerLeave",j="onPointerEnter",V="pointer"),Qt=Oe==null?xe:ms(Oe),ee=He==null?xe:ms(He),xe=new Ye(Ee,V+"leave",Oe,a,Se),xe.target=Qt,xe.relatedTarget=ee,Ee=null,Ur(Se)===ae&&(Ye=new Ye(j,V+"enter",He,a,Se),Ye.target=ee,Ye.relatedTarget=Qt,Ee=Ye),Qt=Ee,Oe&&He)t:{for(Ye=Oe,j=He,V=0,ee=Ye;ee;ee=hs(ee))V++;for(ee=0,Ee=j;Ee;Ee=hs(Ee))ee++;for(;0<V-ee;)Ye=hs(Ye),V--;for(;0<ee-V;)j=hs(j),ee--;for(;V--;){if(Ye===j||j!==null&&Ye===j.alternate)break t;Ye=hs(Ye),j=hs(j)}Ye=null}else Ye=null;Oe!==null&&$d(ye,xe,Oe,Ye,!1),He!==null&&Qt!==null&&$d(ye,Qt,He,Ye,!0)}}e:{if(xe=ae?ms(ae):window,Oe=xe.nodeName&&xe.nodeName.toLowerCase(),Oe==="select"||Oe==="input"&&xe.type==="file")var Ke=e0;else if(Rd(xe))if(bd)Ke=r0;else{Ke=n0;var tt=t0}else(Oe=xe.nodeName)&&Oe.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=i0);if(Ke&&(Ke=Ke(t,ae))){Cd(ye,Ke,a,Se);break e}tt&&tt(t,xe,ae),t==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&Kt(xe,"number",xe.value)}switch(tt=ae?ms(ae):window,t){case"focusin":(Rd(tt)||tt.contentEditable==="true")&&(fs=tt,ru=ae,ma=null);break;case"focusout":ma=ru=fs=null;break;case"mousedown":su=!0;break;case"contextmenu":case"mouseup":case"dragend":su=!1,Od(ye,a,Se);break;case"selectionchange":if(o0)break;case"keydown":case"keyup":Od(ye,a,Se)}var nt;if(eu)e:{switch(t){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else cs?wd(t,a)&&(rt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(Md&&a.locale!=="ko"&&(cs||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&cs&&(nt=_d()):(sr=Se,$l="value"in sr?sr.value:sr.textContent,cs=!0)),tt=ho(ae,rt),0<tt.length&&(rt=new Sd(rt,t,null,a,Se),ye.push({event:rt,listeners:tt}),nt?rt.data=nt:(nt=Ad(a),nt!==null&&(rt.data=nt)))),(nt=Kg?Zg(t,a):jg(t,a))&&(ae=ho(ae,"onBeforeInput"),0<ae.length&&(Se=new Sd("onBeforeInput","beforeinput",null,a,Se),ye.push({event:Se,listeners:ae}),Se.data=nt))}Yd(ye,i)})}function va(t,i,a){return{instance:t,listener:i,currentTarget:a}}function ho(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,h=f.stateNode;f.tag===5&&h!==null&&(f=h,h=Nt(t,a),h!=null&&l.unshift(va(t,h,f)),h=Nt(t,i),h!=null&&l.push(va(t,h,f))),t=t.return}return l}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function $d(t,i,a,l,f){for(var h=i._reactName,E=[];a!==null&&a!==l;){var D=a,B=D.alternate,ae=D.stateNode;if(B!==null&&B===l)break;D.tag===5&&ae!==null&&(D=ae,f?(B=Nt(a,h),B!=null&&E.unshift(va(a,B,D))):f||(B=Nt(a,h),B!=null&&E.push(va(a,B,D)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var f0=/\r\n?/g,d0=/\u0000|\uFFFD/g;function Kd(t){return(typeof t=="string"?t:""+t).replace(f0,`
`).replace(d0,"")}function po(t,i,a){if(i=Kd(i),Kd(t)!==i&&a)throw Error(n(425))}function mo(){}var fu=null,du=null;function hu(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0,Zd=typeof Promise=="function"?Promise:void 0,p0=typeof queueMicrotask=="function"?queueMicrotask:typeof Zd<"u"?function(t){return Zd.resolve(null).then(t).catch(m0)}:pu;function m0(t){setTimeout(function(){throw t})}function mu(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),la(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);la(i)}function or(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function jd(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ps=Math.random().toString(36).slice(2),xi="__reactFiber$"+ps,xa="__reactProps$"+ps,Ii="__reactContainer$"+ps,gu="__reactEvents$"+ps,g0="__reactListeners$"+ps,_0="__reactHandles$"+ps;function Ur(t){var i=t[xi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ii]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=jd(t);t!==null;){if(a=t[xi])return a;t=jd(t)}return i}t=a,a=t.parentNode}return null}function Sa(t){return t=t[xi]||t[Ii],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function go(t){return t[xa]||null}var _u=[],gs=-1;function lr(t){return{current:t}}function Bt(t){0>gs||(t.current=_u[gs],_u[gs]=null,gs--)}function Ut(t,i){gs++,_u[gs]=t.current,t.current=i}var ur={},vn=lr(ur),Dn=lr(!1),Fr=ur;function _s(t,i){var a=t.type.contextTypes;if(!a)return ur;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},h;for(h in a)f[h]=i[h];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function Nn(t){return t=t.childContextTypes,t!=null}function _o(){Bt(Dn),Bt(vn)}function Qd(t,i,a){if(vn.current!==ur)throw Error(n(168));Ut(vn,i),Ut(Dn,a)}function Jd(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,ve(t)||"Unknown",f));return le({},a,l)}function vo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ur,Fr=vn.current,Ut(vn,t),Ut(Dn,Dn.current),!0}function eh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=Jd(t,i,Fr),l.__reactInternalMemoizedMergedChildContext=t,Bt(Dn),Bt(vn),Ut(vn,t)):Bt(Dn),Ut(Dn,a)}var Ui=null,xo=!1,vu=!1;function th(t){Ui===null?Ui=[t]:Ui.push(t)}function v0(t){xo=!0,th(t)}function cr(){if(!vu&&Ui!==null){vu=!0;var t=0,i=dt;try{var a=Ui;for(dt=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ui=null,xo=!1}catch(f){throw Ui!==null&&(Ui=Ui.slice(t+1)),Nr(ia,cr),f}finally{dt=i,vu=!1}}return null}var vs=[],xs=0,So=null,yo=0,$n=[],Kn=0,Or=null,Fi=1,Oi="";function Br(t,i){vs[xs++]=yo,vs[xs++]=So,So=t,yo=i}function nh(t,i,a){$n[Kn++]=Fi,$n[Kn++]=Oi,$n[Kn++]=Or,Or=t;var l=Fi;t=Oi;var f=32-Te(l)-1;l&=~(1<<f),a+=1;var h=32-Te(i)+f;if(30<h){var E=f-f%5;h=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Fi=1<<32-Te(i)+f|a<<f|l,Oi=h+t}else Fi=1<<h|a<<f|l,Oi=t}function xu(t){t.return!==null&&(Br(t,1),nh(t,1,0))}function Su(t){for(;t===So;)So=vs[--xs],vs[xs]=null,yo=vs[--xs],vs[xs]=null;for(;t===Or;)Or=$n[--Kn],$n[Kn]=null,Oi=$n[--Kn],$n[Kn]=null,Fi=$n[--Kn],$n[Kn]=null}var Vn=null,Hn=null,Gt=!1,ai=null;function ih(t,i){var a=Jn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function rh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=or(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Vn=t,Hn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Or!==null?{id:Fi,overflow:Oi}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Jn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Vn=t,Hn=null,!0):!1;default:return!1}}function yu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Mu(t){if(Gt){var i=Hn;if(i){var a=i;if(!rh(t,i)){if(yu(t))throw Error(n(418));i=or(a.nextSibling);var l=Vn;i&&rh(t,i)?ih(l,a):(t.flags=t.flags&-4097|2,Gt=!1,Vn=t)}}else{if(yu(t))throw Error(n(418));t.flags=t.flags&-4097|2,Gt=!1,Vn=t}}}function sh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Vn=t}function Mo(t){if(t!==Vn)return!1;if(!Gt)return sh(t),Gt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!hu(t.type,t.memoizedProps)),i&&(i=Hn)){if(yu(t))throw ah(),Error(n(418));for(;i;)ih(t,i),i=or(i.nextSibling)}if(sh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){Hn=or(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}Hn=null}}else Hn=Vn?or(t.stateNode.nextSibling):null;return!0}function ah(){for(var t=Hn;t;)t=or(t.nextSibling)}function Ss(){Hn=Vn=null,Gt=!1}function Eu(t){ai===null?ai=[t]:ai.push(t)}var x0=R.ReactCurrentBatchConfig;function ya(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,h=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===h?i.ref:(i=function(E){var D=f.refs;E===null?delete D[h]:D[h]=E},i._stringRef=h,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Eo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function oh(t){var i=t._init;return i(t._payload)}function lh(t){function i(j,V){if(t){var ee=j.deletions;ee===null?(j.deletions=[V],j.flags|=16):ee.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)i(j,V),V=V.sibling;return null}function l(j,V){for(j=new Map;V!==null;)V.key!==null?j.set(V.key,V):j.set(V.index,V),V=V.sibling;return j}function f(j,V){return j=vr(j,V),j.index=0,j.sibling=null,j}function h(j,V,ee){return j.index=ee,t?(ee=j.alternate,ee!==null?(ee=ee.index,ee<V?(j.flags|=2,V):ee):(j.flags|=2,V)):(j.flags|=1048576,V)}function E(j){return t&&j.alternate===null&&(j.flags|=2),j}function D(j,V,ee,Ee){return V===null||V.tag!==6?(V=pc(ee,j.mode,Ee),V.return=j,V):(V=f(V,ee),V.return=j,V)}function B(j,V,ee,Ee){var Ke=ee.type;return Ke===O?Se(j,V,ee.props.children,Ee,ee.key):V!==null&&(V.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&oh(Ke)===V.type)?(Ee=f(V,ee.props),Ee.ref=ya(j,V,ee),Ee.return=j,Ee):(Ee=qo(ee.type,ee.key,ee.props,null,j.mode,Ee),Ee.ref=ya(j,V,ee),Ee.return=j,Ee)}function ae(j,V,ee,Ee){return V===null||V.tag!==4||V.stateNode.containerInfo!==ee.containerInfo||V.stateNode.implementation!==ee.implementation?(V=mc(ee,j.mode,Ee),V.return=j,V):(V=f(V,ee.children||[]),V.return=j,V)}function Se(j,V,ee,Ee,Ke){return V===null||V.tag!==7?(V=Yr(ee,j.mode,Ee,Ke),V.return=j,V):(V=f(V,ee),V.return=j,V)}function ye(j,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number")return V=pc(""+V,j.mode,ee),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case U:return ee=qo(V.type,V.key,V.props,null,j.mode,ee),ee.ref=ya(j,null,V),ee.return=j,ee;case P:return V=mc(V,j.mode,ee),V.return=j,V;case oe:var Ee=V._init;return ye(j,Ee(V._payload),ee)}if(Wt(V)||ue(V))return V=Yr(V,j.mode,ee,null),V.return=j,V;Eo(j,V)}return null}function xe(j,V,ee,Ee){var Ke=V!==null?V.key:null;if(typeof ee=="string"&&ee!==""||typeof ee=="number")return Ke!==null?null:D(j,V,""+ee,Ee);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:return ee.key===Ke?B(j,V,ee,Ee):null;case P:return ee.key===Ke?ae(j,V,ee,Ee):null;case oe:return Ke=ee._init,xe(j,V,Ke(ee._payload),Ee)}if(Wt(ee)||ue(ee))return Ke!==null?null:Se(j,V,ee,Ee,null);Eo(j,ee)}return null}function Oe(j,V,ee,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return j=j.get(ee)||null,D(V,j,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case U:return j=j.get(Ee.key===null?ee:Ee.key)||null,B(V,j,Ee,Ke);case P:return j=j.get(Ee.key===null?ee:Ee.key)||null,ae(V,j,Ee,Ke);case oe:var tt=Ee._init;return Oe(j,V,ee,tt(Ee._payload),Ke)}if(Wt(Ee)||ue(Ee))return j=j.get(ee)||null,Se(V,j,Ee,Ke,null);Eo(V,Ee)}return null}function He(j,V,ee,Ee){for(var Ke=null,tt=null,nt=V,rt=V=0,cn=null;nt!==null&&rt<ee.length;rt++){nt.index>rt?(cn=nt,nt=null):cn=nt.sibling;var Tt=xe(j,nt,ee[rt],Ee);if(Tt===null){nt===null&&(nt=cn);break}t&&nt&&Tt.alternate===null&&i(j,nt),V=h(Tt,V,rt),tt===null?Ke=Tt:tt.sibling=Tt,tt=Tt,nt=cn}if(rt===ee.length)return a(j,nt),Gt&&Br(j,rt),Ke;if(nt===null){for(;rt<ee.length;rt++)nt=ye(j,ee[rt],Ee),nt!==null&&(V=h(nt,V,rt),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Gt&&Br(j,rt),Ke}for(nt=l(j,nt);rt<ee.length;rt++)cn=Oe(nt,j,rt,ee[rt],Ee),cn!==null&&(t&&cn.alternate!==null&&nt.delete(cn.key===null?rt:cn.key),V=h(cn,V,rt),tt===null?Ke=cn:tt.sibling=cn,tt=cn);return t&&nt.forEach(function(xr){return i(j,xr)}),Gt&&Br(j,rt),Ke}function Ye(j,V,ee,Ee){var Ke=ue(ee);if(typeof Ke!="function")throw Error(n(150));if(ee=Ke.call(ee),ee==null)throw Error(n(151));for(var tt=Ke=null,nt=V,rt=V=0,cn=null,Tt=ee.next();nt!==null&&!Tt.done;rt++,Tt=ee.next()){nt.index>rt?(cn=nt,nt=null):cn=nt.sibling;var xr=xe(j,nt,Tt.value,Ee);if(xr===null){nt===null&&(nt=cn);break}t&&nt&&xr.alternate===null&&i(j,nt),V=h(xr,V,rt),tt===null?Ke=xr:tt.sibling=xr,tt=xr,nt=cn}if(Tt.done)return a(j,nt),Gt&&Br(j,rt),Ke;if(nt===null){for(;!Tt.done;rt++,Tt=ee.next())Tt=ye(j,Tt.value,Ee),Tt!==null&&(V=h(Tt,V,rt),tt===null?Ke=Tt:tt.sibling=Tt,tt=Tt);return Gt&&Br(j,rt),Ke}for(nt=l(j,nt);!Tt.done;rt++,Tt=ee.next())Tt=Oe(nt,j,rt,Tt.value,Ee),Tt!==null&&(t&&Tt.alternate!==null&&nt.delete(Tt.key===null?rt:Tt.key),V=h(Tt,V,rt),tt===null?Ke=Tt:tt.sibling=Tt,tt=Tt);return t&&nt.forEach(function(Q0){return i(j,Q0)}),Gt&&Br(j,rt),Ke}function Qt(j,V,ee,Ee){if(typeof ee=="object"&&ee!==null&&ee.type===O&&ee.key===null&&(ee=ee.props.children),typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case U:e:{for(var Ke=ee.key,tt=V;tt!==null;){if(tt.key===Ke){if(Ke=ee.type,Ke===O){if(tt.tag===7){a(j,tt.sibling),V=f(tt,ee.props.children),V.return=j,j=V;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===oe&&oh(Ke)===tt.type){a(j,tt.sibling),V=f(tt,ee.props),V.ref=ya(j,tt,ee),V.return=j,j=V;break e}a(j,tt);break}else i(j,tt);tt=tt.sibling}ee.type===O?(V=Yr(ee.props.children,j.mode,Ee,ee.key),V.return=j,j=V):(Ee=qo(ee.type,ee.key,ee.props,null,j.mode,Ee),Ee.ref=ya(j,V,ee),Ee.return=j,j=Ee)}return E(j);case P:e:{for(tt=ee.key;V!==null;){if(V.key===tt)if(V.tag===4&&V.stateNode.containerInfo===ee.containerInfo&&V.stateNode.implementation===ee.implementation){a(j,V.sibling),V=f(V,ee.children||[]),V.return=j,j=V;break e}else{a(j,V);break}else i(j,V);V=V.sibling}V=mc(ee,j.mode,Ee),V.return=j,j=V}return E(j);case oe:return tt=ee._init,Qt(j,V,tt(ee._payload),Ee)}if(Wt(ee))return He(j,V,ee,Ee);if(ue(ee))return Ye(j,V,ee,Ee);Eo(j,ee)}return typeof ee=="string"&&ee!==""||typeof ee=="number"?(ee=""+ee,V!==null&&V.tag===6?(a(j,V.sibling),V=f(V,ee),V.return=j,j=V):(a(j,V),V=pc(ee,j.mode,Ee),V.return=j,j=V),E(j)):a(j,V)}return Qt}var ys=lh(!0),uh=lh(!1),To=lr(null),wo=null,Ms=null,Tu=null;function wu(){Tu=Ms=wo=null}function Au(t){var i=To.current;Bt(To),t._currentValue=i}function Ru(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Es(t,i){wo=t,Tu=Ms=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(In=!0),t.firstContext=null)}function Zn(t){var i=t._currentValue;if(Tu!==t)if(t={context:t,memoizedValue:i,next:null},Ms===null){if(wo===null)throw Error(n(308));Ms=t,wo.dependencies={lanes:0,firstContext:t}}else Ms=Ms.next=t;return i}var kr=null;function Cu(t){kr===null?kr=[t]:kr.push(t)}function ch(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Cu(i)):(a.next=f.next,f.next=a),i.interleaved=a,Bi(t,l)}function Bi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var fr=!1;function bu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function fh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function ki(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function dr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(yt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Bi(t,a)}return f=l.interleaved,f===null?(i.next=i,Cu(l)):(i.next=f.next,f.next=i),l.interleaved=i,Bi(t,a)}function Ao(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ln(t,a)}}function dh(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};h===null?f=h=E:h=h.next=E,a=a.next}while(a!==null);h===null?f=h=i:h=h.next=i}else f=h=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:h,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Ro(t,i,a,l){var f=t.updateQueue;fr=!1;var h=f.firstBaseUpdate,E=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var B=D,ae=B.next;B.next=null,E===null?h=ae:E.next=ae,E=B;var Se=t.alternate;Se!==null&&(Se=Se.updateQueue,D=Se.lastBaseUpdate,D!==E&&(D===null?Se.firstBaseUpdate=ae:D.next=ae,Se.lastBaseUpdate=B))}if(h!==null){var ye=f.baseState;E=0,Se=ae=B=null,D=h;do{var xe=D.lane,Oe=D.eventTime;if((l&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Oe,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var He=t,Ye=D;switch(xe=i,Oe=a,Ye.tag){case 1:if(He=Ye.payload,typeof He=="function"){ye=He.call(Oe,ye,xe);break e}ye=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=Ye.payload,xe=typeof He=="function"?He.call(Oe,ye,xe):He,xe==null)break e;ye=le({},ye,xe);break e;case 2:fr=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,xe=f.effects,xe===null?f.effects=[D]:xe.push(D))}else Oe={eventTime:Oe,lane:xe,tag:D.tag,payload:D.payload,callback:D.callback,next:null},Se===null?(ae=Se=Oe,B=ye):Se=Se.next=Oe,E|=xe;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;xe=D,D=xe.next,xe.next=null,f.lastBaseUpdate=xe,f.shared.pending=null}}while(!0);if(Se===null&&(B=ye),f.baseState=B,f.firstBaseUpdate=ae,f.lastBaseUpdate=Se,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else h===null&&(f.shared.lanes=0);Hr|=E,t.lanes=E,t.memoizedState=ye}}function hh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Ma={},Si=lr(Ma),Ea=lr(Ma),Ta=lr(Ma);function zr(t){if(t===Ma)throw Error(n(174));return t}function Pu(t,i){switch(Ut(Ta,i),Ut(Ea,t),Ut(Si,Ma),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:y(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=y(i,t)}Bt(Si),Ut(Si,i)}function Ts(){Bt(Si),Bt(Ea),Bt(Ta)}function ph(t){zr(Ta.current);var i=zr(Si.current),a=y(i,t.type);i!==a&&(Ut(Ea,t),Ut(Si,a))}function Lu(t){Ea.current===t&&(Bt(Si),Bt(Ea))}var Yt=lr(0);function Co(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Du=[];function Nu(){for(var t=0;t<Du.length;t++)Du[t]._workInProgressVersionPrimary=null;Du.length=0}var bo=R.ReactCurrentDispatcher,Iu=R.ReactCurrentBatchConfig,Vr=0,qt=null,rn=null,ln=null,Po=!1,wa=!1,Aa=0,S0=0;function xn(){throw Error(n(321))}function Uu(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!si(t[a],i[a]))return!1;return!0}function Fu(t,i,a,l,f,h){if(Vr=h,qt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,bo.current=t===null||t.memoizedState===null?T0:w0,t=a(l,f),wa){h=0;do{if(wa=!1,Aa=0,25<=h)throw Error(n(301));h+=1,ln=rn=null,i.updateQueue=null,bo.current=A0,t=a(l,f)}while(wa)}if(bo.current=No,i=rn!==null&&rn.next!==null,Vr=0,ln=rn=qt=null,Po=!1,i)throw Error(n(300));return t}function Ou(){var t=Aa!==0;return Aa=0,t}function yi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?qt.memoizedState=ln=t:ln=ln.next=t,ln}function jn(){if(rn===null){var t=qt.alternate;t=t!==null?t.memoizedState:null}else t=rn.next;var i=ln===null?qt.memoizedState:ln.next;if(i!==null)ln=i,rn=t;else{if(t===null)throw Error(n(310));rn=t,t={memoizedState:rn.memoizedState,baseState:rn.baseState,baseQueue:rn.baseQueue,queue:rn.queue,next:null},ln===null?qt.memoizedState=ln=t:ln=ln.next=t}return ln}function Ra(t,i){return typeof i=="function"?i(t):i}function Bu(t){var i=jn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=rn,f=l.baseQueue,h=a.pending;if(h!==null){if(f!==null){var E=f.next;f.next=h.next,h.next=E}l.baseQueue=f=h,a.pending=null}if(f!==null){h=f.next,l=l.baseState;var D=E=null,B=null,ae=h;do{var Se=ae.lane;if((Vr&Se)===Se)B!==null&&(B=B.next={lane:0,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null}),l=ae.hasEagerState?ae.eagerState:t(l,ae.action);else{var ye={lane:Se,action:ae.action,hasEagerState:ae.hasEagerState,eagerState:ae.eagerState,next:null};B===null?(D=B=ye,E=l):B=B.next=ye,qt.lanes|=Se,Hr|=Se}ae=ae.next}while(ae!==null&&ae!==h);B===null?E=l:B.next=D,si(l,i.memoizedState)||(In=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=B,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do h=f.lane,qt.lanes|=h,Hr|=h,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ku(t){var i=jn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,h=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do h=t(h,E.action),E=E.next;while(E!==f);si(h,i.memoizedState)||(In=!0),i.memoizedState=h,i.baseQueue===null&&(i.baseState=h),a.lastRenderedState=h}return[h,l]}function mh(){}function gh(t,i){var a=qt,l=jn(),f=i(),h=!si(l.memoizedState,f);if(h&&(l.memoizedState=f,In=!0),l=l.queue,zu(xh.bind(null,a,l,t),[t]),l.getSnapshot!==i||h||ln!==null&&ln.memoizedState.tag&1){if(a.flags|=2048,Ca(9,vh.bind(null,a,l,f,i),void 0,null),un===null)throw Error(n(349));(Vr&30)!==0||_h(a,i,f)}return f}function _h(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function vh(t,i,a,l){i.value=a,i.getSnapshot=l,Sh(i)&&yh(t)}function xh(t,i,a){return a(function(){Sh(i)&&yh(t)})}function Sh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!si(t,a)}catch{return!0}}function yh(t){var i=Bi(t,1);i!==null&&ci(i,t,1,-1)}function Mh(t){var i=yi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:t},i.queue=t,t=t.dispatch=E0.bind(null,qt,t),[i.memoizedState,t]}function Ca(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=qt.updateQueue,i===null?(i={lastEffect:null,stores:null},qt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Eh(){return jn().memoizedState}function Lo(t,i,a,l){var f=yi();qt.flags|=t,f.memoizedState=Ca(1|i,a,void 0,l===void 0?null:l)}function Do(t,i,a,l){var f=jn();l=l===void 0?null:l;var h=void 0;if(rn!==null){var E=rn.memoizedState;if(h=E.destroy,l!==null&&Uu(l,E.deps)){f.memoizedState=Ca(i,a,h,l);return}}qt.flags|=t,f.memoizedState=Ca(1|i,a,h,l)}function Th(t,i){return Lo(8390656,8,t,i)}function zu(t,i){return Do(2048,8,t,i)}function wh(t,i){return Do(4,2,t,i)}function Ah(t,i){return Do(4,4,t,i)}function Rh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ch(t,i,a){return a=a!=null?a.concat([t]):null,Do(4,4,Rh.bind(null,i,t),a)}function Vu(){}function bh(t,i){var a=jn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Ph(t,i){var a=jn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&Uu(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function Lh(t,i,a){return(Vr&21)===0?(t.baseState&&(t.baseState=!1,In=!0),t.memoizedState=a):(si(a,i)||(a=Fe(),qt.lanes|=a,Hr|=a,t.baseState=!0),i)}function y0(t,i){var a=dt;dt=a!==0&&4>a?a:4,t(!0);var l=Iu.transition;Iu.transition={};try{t(!1),i()}finally{dt=a,Iu.transition=l}}function Dh(){return jn().memoizedState}function M0(t,i,a){var l=gr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Nh(t))Ih(i,a);else if(a=ch(t,i,a,l),a!==null){var f=Rn();ci(a,t,l,f),Uh(a,i,l)}}function E0(t,i,a){var l=gr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nh(t))Ih(i,f);else{var h=t.alternate;if(t.lanes===0&&(h===null||h.lanes===0)&&(h=i.lastRenderedReducer,h!==null))try{var E=i.lastRenderedState,D=h(E,a);if(f.hasEagerState=!0,f.eagerState=D,si(D,E)){var B=i.interleaved;B===null?(f.next=f,Cu(i)):(f.next=B.next,B.next=f),i.interleaved=f;return}}catch{}finally{}a=ch(t,i,f,l),a!==null&&(f=Rn(),ci(a,t,l,f),Uh(a,i,l))}}function Nh(t){var i=t.alternate;return t===qt||i!==null&&i===qt}function Ih(t,i){wa=Po=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Uh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ln(t,a)}}var No={readContext:Zn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},T0={readContext:Zn,useCallback:function(t,i){return yi().memoizedState=[t,i===void 0?null:i],t},useContext:Zn,useEffect:Th,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Lo(4194308,4,Rh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Lo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Lo(4,2,t,i)},useMemo:function(t,i){var a=yi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=yi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=M0.bind(null,qt,t),[l.memoizedState,t]},useRef:function(t){var i=yi();return t={current:t},i.memoizedState=t},useState:Mh,useDebugValue:Vu,useDeferredValue:function(t){return yi().memoizedState=t},useTransition:function(){var t=Mh(!1),i=t[0];return t=y0.bind(null,t[1]),yi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=qt,f=yi();if(Gt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),un===null)throw Error(n(349));(Vr&30)!==0||_h(l,i,a)}f.memoizedState=a;var h={value:a,getSnapshot:i};return f.queue=h,Th(xh.bind(null,l,h,t),[t]),l.flags|=2048,Ca(9,vh.bind(null,l,h,a,i),void 0,null),a},useId:function(){var t=yi(),i=un.identifierPrefix;if(Gt){var a=Oi,l=Fi;a=(l&~(1<<32-Te(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=Aa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=S0++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},w0={readContext:Zn,useCallback:bh,useContext:Zn,useEffect:zu,useImperativeHandle:Ch,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:Bu,useRef:Eh,useState:function(){return Bu(Ra)},useDebugValue:Vu,useDeferredValue:function(t){var i=jn();return Lh(i,rn.memoizedState,t)},useTransition:function(){var t=Bu(Ra)[0],i=jn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Dh,unstable_isNewReconciler:!1},A0={readContext:Zn,useCallback:bh,useContext:Zn,useEffect:zu,useImperativeHandle:Ch,useInsertionEffect:wh,useLayoutEffect:Ah,useMemo:Ph,useReducer:ku,useRef:Eh,useState:function(){return ku(Ra)},useDebugValue:Vu,useDeferredValue:function(t){var i=jn();return rn===null?i.memoizedState=t:Lh(i,rn.memoizedState,t)},useTransition:function(){var t=ku(Ra)[0],i=jn().memoizedState;return[t,i]},useMutableSource:mh,useSyncExternalStore:gh,useId:Dh,unstable_isNewReconciler:!1};function oi(t,i){if(t&&t.defaultProps){i=le({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Hu(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:le({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Io={isMounted:function(t){return(t=t._reactInternals)?wn(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=Rn(),f=gr(t),h=ki(l,f);h.payload=i,a!=null&&(h.callback=a),i=dr(t,h,f),i!==null&&(ci(i,t,f,l),Ao(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=Rn(),f=gr(t),h=ki(l,f);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=dr(t,h,f),i!==null&&(ci(i,t,f,l),Ao(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Rn(),l=gr(t),f=ki(a,l);f.tag=2,i!=null&&(f.callback=i),i=dr(t,f,l),i!==null&&(ci(i,t,l,a),Ao(i,t,l))}};function Fh(t,i,a,l,f,h,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,h,E):i.prototype&&i.prototype.isPureReactComponent?!pa(a,l)||!pa(f,h):!0}function Oh(t,i,a){var l=!1,f=ur,h=i.contextType;return typeof h=="object"&&h!==null?h=Zn(h):(f=Nn(i)?Fr:vn.current,l=i.contextTypes,h=(l=l!=null)?_s(t,f):ur),i=new i(a,h),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Io,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=h),i}function Bh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Io.enqueueReplaceState(i,i.state,null)}function Gu(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},bu(t);var h=i.contextType;typeof h=="object"&&h!==null?f.context=Zn(h):(h=Nn(i)?Fr:vn.current,f.context=_s(t,h)),f.state=t.memoizedState,h=i.getDerivedStateFromProps,typeof h=="function"&&(Hu(t,i,h,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Io.enqueueReplaceState(f,f.state,null),Ro(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function ws(t,i){try{var a="",l=i;do a+=ke(l),l=l.return;while(l);var f=a}catch(h){f=`
Error generating stack: `+h.message+`
`+h.stack}return{value:t,source:i,stack:f,digest:null}}function Wu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function Xu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var R0=typeof WeakMap=="function"?WeakMap:Map;function kh(t,i,a){a=ki(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Vo||(Vo=!0,ac=l),Xu(t,i)},a}function zh(t,i,a){a=ki(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){Xu(t,i)}}var h=t.stateNode;return h!==null&&typeof h.componentDidCatch=="function"&&(a.callback=function(){Xu(t,i),typeof l!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Vh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new R0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=V0.bind(null,t,i,a),i.then(t,t))}function Hh(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Gh(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=ki(-1,1),i.tag=2,dr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var C0=R.ReactCurrentOwner,In=!1;function An(t,i,a,l){i.child=t===null?uh(i,null,a,l):ys(i,t.child,a,l)}function Wh(t,i,a,l,f){a=a.render;var h=i.ref;return Es(i,f),l=Fu(t,i,a,l,h,f),a=Ou(),t!==null&&!In?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,zi(t,i,f)):(Gt&&a&&xu(i),i.flags|=1,An(t,i,l,f),i.child)}function Xh(t,i,a,l,f){if(t===null){var h=a.type;return typeof h=="function"&&!hc(h)&&h.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=h,Yh(t,i,h,l,f)):(t=qo(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(h=t.child,(t.lanes&f)===0){var E=h.memoizedProps;if(a=a.compare,a=a!==null?a:pa,a(E,l)&&t.ref===i.ref)return zi(t,i,f)}return i.flags|=1,t=vr(h,l),t.ref=i.ref,t.return=i,i.child=t}function Yh(t,i,a,l,f){if(t!==null){var h=t.memoizedProps;if(pa(h,l)&&t.ref===i.ref)if(In=!1,i.pendingProps=l=h,(t.lanes&f)!==0)(t.flags&131072)!==0&&(In=!0);else return i.lanes=t.lanes,zi(t,i,f)}return Yu(t,i,a,l,f)}function qh(t,i,a){var l=i.pendingProps,f=l.children,h=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(Rs,Gn),Gn|=a;else{if((a&1073741824)===0)return t=h!==null?h.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Ut(Rs,Gn),Gn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=h!==null?h.baseLanes:a,Ut(Rs,Gn),Gn|=l}else h!==null?(l=h.baseLanes|a,i.memoizedState=null):l=a,Ut(Rs,Gn),Gn|=l;return An(t,i,f,a),i.child}function $h(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function Yu(t,i,a,l,f){var h=Nn(a)?Fr:vn.current;return h=_s(i,h),Es(i,f),a=Fu(t,i,a,l,h,f),l=Ou(),t!==null&&!In?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,zi(t,i,f)):(Gt&&l&&xu(i),i.flags|=1,An(t,i,a,f),i.child)}function Kh(t,i,a,l,f){if(Nn(a)){var h=!0;vo(i)}else h=!1;if(Es(i,f),i.stateNode===null)Fo(t,i),Oh(i,a,l),Gu(i,a,l,f),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var B=E.context,ae=a.contextType;typeof ae=="object"&&ae!==null?ae=Zn(ae):(ae=Nn(a)?Fr:vn.current,ae=_s(i,ae));var Se=a.getDerivedStateFromProps,ye=typeof Se=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||B!==ae)&&Bh(i,E,l,ae),fr=!1;var xe=i.memoizedState;E.state=xe,Ro(i,l,E,f),B=i.memoizedState,D!==l||xe!==B||Dn.current||fr?(typeof Se=="function"&&(Hu(i,a,Se,l),B=i.memoizedState),(D=fr||Fh(i,a,D,l,xe,B,ae))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),E.props=l,E.state=B,E.context=ae,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,fh(t,i),D=i.memoizedProps,ae=i.type===i.elementType?D:oi(i.type,D),E.props=ae,ye=i.pendingProps,xe=E.context,B=a.contextType,typeof B=="object"&&B!==null?B=Zn(B):(B=Nn(a)?Fr:vn.current,B=_s(i,B));var Oe=a.getDerivedStateFromProps;(Se=typeof Oe=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==ye||xe!==B)&&Bh(i,E,l,B),fr=!1,xe=i.memoizedState,E.state=xe,Ro(i,l,E,f);var He=i.memoizedState;D!==ye||xe!==He||Dn.current||fr?(typeof Oe=="function"&&(Hu(i,a,Oe,l),He=i.memoizedState),(ae=fr||Fh(i,a,ae,l,xe,He,B)||!1)?(Se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,He,B),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,He,B)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=He),E.props=l,E.state=He,E.context=B,l=ae):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&xe===t.memoizedState||(i.flags|=1024),l=!1)}return qu(t,i,a,l,h,f)}function qu(t,i,a,l,f,h){$h(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&eh(i,a,!1),zi(t,i,h);l=i.stateNode,C0.current=i;var D=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=ys(i,t.child,null,h),i.child=ys(i,null,D,h)):An(t,i,D,h),i.memoizedState=l.state,f&&eh(i,a,!0),i.child}function Zh(t){var i=t.stateNode;i.pendingContext?Qd(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Qd(t,i.context,!1),Pu(t,i.containerInfo)}function jh(t,i,a,l,f){return Ss(),Eu(f),i.flags|=256,An(t,i,a,l),i.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function Qh(t,i,a){var l=i.pendingProps,f=Yt.current,h=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(h=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Ut(Yt,f&1),t===null)return Mu(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,h?(l=i.mode,h=i.child,E={mode:"hidden",children:E},(l&1)===0&&h!==null?(h.childLanes=0,h.pendingProps=E):h=$o(E,l,0,null),t=Yr(t,l,a,null),h.return=i,t.return=i,h.sibling=t,i.child=h,i.child.memoizedState=Ku(a),i.memoizedState=$u,t):Zu(i,E));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return b0(t,i,E,l,D,f,a);if(h){h=l.fallback,E=i.mode,f=t.child,D=f.sibling;var B={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=B,i.deletions=null):(l=vr(f,B),l.subtreeFlags=f.subtreeFlags&14680064),D!==null?h=vr(D,h):(h=Yr(h,E,a,null),h.flags|=2),h.return=i,l.return=i,l.sibling=h,i.child=l,l=h,h=i.child,E=t.child.memoizedState,E=E===null?Ku(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},h.memoizedState=E,h.childLanes=t.childLanes&~a,i.memoizedState=$u,l}return h=t.child,t=h.sibling,l=vr(h,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function Zu(t,i){return i=$o({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Uo(t,i,a,l){return l!==null&&Eu(l),ys(i,t.child,null,a),t=Zu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function b0(t,i,a,l,f,h,E){if(a)return i.flags&256?(i.flags&=-257,l=Wu(Error(n(422))),Uo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(h=l.fallback,f=i.mode,l=$o({mode:"visible",children:l.children},f,0,null),h=Yr(h,f,E,null),h.flags|=2,l.return=i,h.return=i,l.sibling=h,i.child=l,(i.mode&1)!==0&&ys(i,t.child,null,E),i.child.memoizedState=Ku(E),i.memoizedState=$u,h);if((i.mode&1)===0)return Uo(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var D=l.dgst;return l=D,h=Error(n(419)),l=Wu(h,l,void 0),Uo(t,i,E,l)}if(D=(E&t.childLanes)!==0,In||D){if(l=un,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==h.retryLane&&(h.retryLane=f,Bi(t,f),ci(l,t,f,-1))}return dc(),l=Wu(Error(n(421))),Uo(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=H0.bind(null,t),f._reactRetry=i,null):(t=h.treeContext,Hn=or(f.nextSibling),Vn=i,Gt=!0,ai=null,t!==null&&($n[Kn++]=Fi,$n[Kn++]=Oi,$n[Kn++]=Or,Fi=t.id,Oi=t.overflow,Or=i),i=Zu(i,l.children),i.flags|=4096,i)}function Jh(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Ru(t.return,i,a)}function ju(t,i,a,l,f){var h=t.memoizedState;h===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(h.isBackwards=i,h.rendering=null,h.renderingStartTime=0,h.last=l,h.tail=a,h.tailMode=f)}function ep(t,i,a){var l=i.pendingProps,f=l.revealOrder,h=l.tail;if(An(t,i,l.children,a),l=Yt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Jh(t,a,i);else if(t.tag===19)Jh(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Ut(Yt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Co(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),ju(i,!1,f,a,h);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Co(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}ju(i,!0,a,null,h);break;case"together":ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Fo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function zi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Hr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=vr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=vr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function P0(t,i,a){switch(i.tag){case 3:Zh(i),Ss();break;case 5:ph(i);break;case 1:Nn(i.type)&&vo(i);break;case 4:Pu(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Ut(To,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Ut(Yt,Yt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Qh(t,i,a):(Ut(Yt,Yt.current&1),t=zi(t,i,a),t!==null?t.sibling:null);Ut(Yt,Yt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return ep(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ut(Yt,Yt.current),l)break;return null;case 22:case 23:return i.lanes=0,qh(t,i,a)}return zi(t,i,a)}var tp,Qu,np,ip;tp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Qu=function(){},np=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,zr(Si.current);var h=null;switch(a){case"input":f=wt(t,f),l=wt(t,l),h=[];break;case"select":f=le({},f,{value:void 0}),l=le({},l,{value:void 0}),h=[];break;case"textarea":f=Vt(t,f),l=Vt(t,l),h=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=mo)}qe(a,l);var E;a=null;for(ae in f)if(!l.hasOwnProperty(ae)&&f.hasOwnProperty(ae)&&f[ae]!=null)if(ae==="style"){var D=f[ae];for(E in D)D.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else ae!=="dangerouslySetInnerHTML"&&ae!=="children"&&ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&ae!=="autoFocus"&&(o.hasOwnProperty(ae)?h||(h=[]):(h=h||[]).push(ae,null));for(ae in l){var B=l[ae];if(D=f!=null?f[ae]:void 0,l.hasOwnProperty(ae)&&B!==D&&(B!=null||D!=null))if(ae==="style")if(D){for(E in D)!D.hasOwnProperty(E)||B&&B.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in B)B.hasOwnProperty(E)&&D[E]!==B[E]&&(a||(a={}),a[E]=B[E])}else a||(h||(h=[]),h.push(ae,a)),a=B;else ae==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,D=D?D.__html:void 0,B!=null&&D!==B&&(h=h||[]).push(ae,B)):ae==="children"?typeof B!="string"&&typeof B!="number"||(h=h||[]).push(ae,""+B):ae!=="suppressContentEditableWarning"&&ae!=="suppressHydrationWarning"&&(o.hasOwnProperty(ae)?(B!=null&&ae==="onScroll"&&Ot("scroll",t),h||D===B||(h=[])):(h=h||[]).push(ae,B))}a&&(h=h||[]).push("style",a);var ae=h;(i.updateQueue=ae)&&(i.flags|=4)}},ip=function(t,i,a,l){a!==l&&(i.flags|=4)};function ba(t,i){if(!Gt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function Sn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function L0(t,i,a){var l=i.pendingProps;switch(Su(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Sn(i),null;case 1:return Nn(i.type)&&_o(),Sn(i),null;case 3:return l=i.stateNode,Ts(),Bt(Dn),Bt(vn),Nu(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Mo(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ai!==null&&(uc(ai),ai=null))),Qu(t,i),Sn(i),null;case 5:Lu(i);var f=zr(Ta.current);if(a=i.type,t!==null&&i.stateNode!=null)np(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return Sn(i),null}if(t=zr(Si.current),Mo(i)){l=i.stateNode,a=i.type;var h=i.memoizedProps;switch(l[xi]=i,l[xa]=h,t=(i.mode&1)!==0,a){case"dialog":Ot("cancel",l),Ot("close",l);break;case"iframe":case"object":case"embed":Ot("load",l);break;case"video":case"audio":for(f=0;f<ga.length;f++)Ot(ga[f],l);break;case"source":Ot("error",l);break;case"img":case"image":case"link":Ot("error",l),Ot("load",l);break;case"details":Ot("toggle",l);break;case"input":vt(l,h),Ot("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!h.multiple},Ot("invalid",l);break;case"textarea":G(l,h),Ot("invalid",l)}qe(a,h),f=null;for(var E in h)if(h.hasOwnProperty(E)){var D=h[E];E==="children"?typeof D=="string"?l.textContent!==D&&(h.suppressHydrationWarning!==!0&&po(l.textContent,D,t),f=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(h.suppressHydrationWarning!==!0&&po(l.textContent,D,t),f=["children",""+D]):o.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ot("scroll",l)}switch(a){case"input":Je(l),$t(l,h,!0);break;case"textarea":Je(l),Et(l);break;case"select":case"option":break;default:typeof h.onClick=="function"&&(l.onclick=mo)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=b(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[xi]=i,t[xa]=l,tp(t,i,!1,!1),i.stateNode=t;e:{switch(E=Le(a,l),a){case"dialog":Ot("cancel",t),Ot("close",t),f=l;break;case"iframe":case"object":case"embed":Ot("load",t),f=l;break;case"video":case"audio":for(f=0;f<ga.length;f++)Ot(ga[f],t);f=l;break;case"source":Ot("error",t),f=l;break;case"img":case"image":case"link":Ot("error",t),Ot("load",t),f=l;break;case"details":Ot("toggle",t),f=l;break;case"input":vt(t,l),f=wt(t,l),Ot("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=le({},l,{value:void 0}),Ot("invalid",t);break;case"textarea":G(t,l),f=Vt(t,l),Ot("invalid",t);break;default:f=l}qe(a,f),D=f;for(h in D)if(D.hasOwnProperty(h)){var B=D[h];h==="style"?ge(t,B):h==="dangerouslySetInnerHTML"?(B=B?B.__html:void 0,B!=null&&te(t,B)):h==="children"?typeof B=="string"?(a!=="textarea"||B!=="")&&fe(t,B):typeof B=="number"&&fe(t,""+B):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(o.hasOwnProperty(h)?B!=null&&h==="onScroll"&&Ot("scroll",t):B!=null&&F(t,h,B,E))}switch(a){case"input":Je(t),$t(t,l,!1);break;case"textarea":Je(t),Et(t);break;case"option":l.value!=null&&t.setAttribute("value",""+me(l.value));break;case"select":t.multiple=!!l.multiple,h=l.value,h!=null?bt(t,!!l.multiple,h,!1):l.defaultValue!=null&&bt(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=mo)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Sn(i),null;case 6:if(t&&i.stateNode!=null)ip(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=zr(Ta.current),zr(Si.current),Mo(i)){if(l=i.stateNode,a=i.memoizedProps,l[xi]=i,(h=l.nodeValue!==a)&&(t=Vn,t!==null))switch(t.tag){case 3:po(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&po(l.nodeValue,a,(t.mode&1)!==0)}h&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[xi]=i,i.stateNode=l}return Sn(i),null;case 13:if(Bt(Yt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Gt&&Hn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ah(),Ss(),i.flags|=98560,h=!1;else if(h=Mo(i),l!==null&&l.dehydrated!==null){if(t===null){if(!h)throw Error(n(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(n(317));h[xi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Sn(i),h=!1}else ai!==null&&(uc(ai),ai=null),h=!0;if(!h)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Yt.current&1)!==0?sn===0&&(sn=3):dc())),i.updateQueue!==null&&(i.flags|=4),Sn(i),null);case 4:return Ts(),Qu(t,i),t===null&&_a(i.stateNode.containerInfo),Sn(i),null;case 10:return Au(i.type._context),Sn(i),null;case 17:return Nn(i.type)&&_o(),Sn(i),null;case 19:if(Bt(Yt),h=i.memoizedState,h===null)return Sn(i),null;if(l=(i.flags&128)!==0,E=h.rendering,E===null)if(l)ba(h,!1);else{if(sn!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Co(t),E!==null){for(i.flags|=128,ba(h,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)h=a,t=l,h.flags&=14680066,E=h.alternate,E===null?(h.childLanes=0,h.lanes=t,h.child=null,h.subtreeFlags=0,h.memoizedProps=null,h.memoizedState=null,h.updateQueue=null,h.dependencies=null,h.stateNode=null):(h.childLanes=E.childLanes,h.lanes=E.lanes,h.child=E.child,h.subtreeFlags=0,h.deletions=null,h.memoizedProps=E.memoizedProps,h.memoizedState=E.memoizedState,h.updateQueue=E.updateQueue,h.type=E.type,t=E.dependencies,h.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Ut(Yt,Yt.current&1|2),i.child}t=t.sibling}h.tail!==null&&Xt()>Cs&&(i.flags|=128,l=!0,ba(h,!1),i.lanes=4194304)}else{if(!l)if(t=Co(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ba(h,!0),h.tail===null&&h.tailMode==="hidden"&&!E.alternate&&!Gt)return Sn(i),null}else 2*Xt()-h.renderingStartTime>Cs&&a!==1073741824&&(i.flags|=128,l=!0,ba(h,!1),i.lanes=4194304);h.isBackwards?(E.sibling=i.child,i.child=E):(a=h.last,a!==null?a.sibling=E:i.child=E,h.last=E)}return h.tail!==null?(i=h.tail,h.rendering=i,h.tail=i.sibling,h.renderingStartTime=Xt(),i.sibling=null,a=Yt.current,Ut(Yt,l?a&1|2:a&1),i):(Sn(i),null);case 22:case 23:return fc(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(Gn&1073741824)!==0&&(Sn(i),i.subtreeFlags&6&&(i.flags|=8192)):Sn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function D0(t,i){switch(Su(i),i.tag){case 1:return Nn(i.type)&&_o(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ts(),Bt(Dn),Bt(vn),Nu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Lu(i),null;case 13:if(Bt(Yt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Bt(Yt),null;case 4:return Ts(),null;case 10:return Au(i.type._context),null;case 22:case 23:return fc(),null;case 24:return null;default:return null}}var Oo=!1,yn=!1,N0=typeof WeakSet=="function"?WeakSet:Set,ze=null;function As(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Zt(t,i,l)}else a.current=null}function Ju(t,i,a){try{a()}catch(l){Zt(t,i,l)}}var rp=!1;function I0(t,i){if(fu=no,t=Fd(),iu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,h=l.focusNode;l=l.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break e}var E=0,D=-1,B=-1,ae=0,Se=0,ye=t,xe=null;t:for(;;){for(var Oe;ye!==a||f!==0&&ye.nodeType!==3||(D=E+f),ye!==h||l!==0&&ye.nodeType!==3||(B=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(Oe=ye.firstChild)!==null;)xe=ye,ye=Oe;for(;;){if(ye===t)break t;if(xe===a&&++ae===f&&(D=E),xe===h&&++Se===l&&(B=E),(Oe=ye.nextSibling)!==null)break;ye=xe,xe=ye.parentNode}ye=Oe}a=D===-1||B===-1?null:{start:D,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(du={focusedElem:t,selectionRange:a},no=!1,ze=i;ze!==null;)if(i=ze,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,ze=t;else for(;ze!==null;){i=ze;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var Ye=He.memoizedProps,Qt=He.memoizedState,j=i.stateNode,V=j.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:oi(i.type,Ye),Qt);j.__reactInternalSnapshotBeforeUpdate=V}break;case 3:var ee=i.stateNode.containerInfo;ee.nodeType===1?ee.textContent="":ee.nodeType===9&&ee.documentElement&&ee.removeChild(ee.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){Zt(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,ze=t;break}ze=i.return}return He=rp,rp=!1,He}function Pa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var h=f.destroy;f.destroy=void 0,h!==void 0&&Ju(i,a,h)}f=f.next}while(f!==l)}}function Bo(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function ec(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function sp(t){var i=t.alternate;i!==null&&(t.alternate=null,sp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[xi],delete i[xa],delete i[gu],delete i[g0],delete i[_0])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ap(t){return t.tag===5||t.tag===3||t.tag===4}function op(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ap(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function tc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=mo));else if(l!==4&&(t=t.child,t!==null))for(tc(t,i,a),t=t.sibling;t!==null;)tc(t,i,a),t=t.sibling}function nc(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(nc(t,i,a),t=t.sibling;t!==null;)nc(t,i,a),t=t.sibling}var pn=null,li=!1;function hr(t,i,a){for(a=a.child;a!==null;)lp(t,i,a),a=a.sibling}function lp(t,i,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(Q,a)}catch{}switch(a.tag){case 5:yn||As(a,i);case 6:var l=pn,f=li;pn=null,hr(t,i,a),pn=l,li=f,pn!==null&&(li?(t=pn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):pn.removeChild(a.stateNode));break;case 18:pn!==null&&(li?(t=pn,a=a.stateNode,t.nodeType===8?mu(t.parentNode,a):t.nodeType===1&&mu(t,a),la(t)):mu(pn,a.stateNode));break;case 4:l=pn,f=li,pn=a.stateNode.containerInfo,li=!0,hr(t,i,a),pn=l,li=f;break;case 0:case 11:case 14:case 15:if(!yn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var h=f,E=h.destroy;h=h.tag,E!==void 0&&((h&2)!==0||(h&4)!==0)&&Ju(a,i,E),f=f.next}while(f!==l)}hr(t,i,a);break;case 1:if(!yn&&(As(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){Zt(a,i,D)}hr(t,i,a);break;case 21:hr(t,i,a);break;case 22:a.mode&1?(yn=(l=yn)||a.memoizedState!==null,hr(t,i,a),yn=l):hr(t,i,a);break;default:hr(t,i,a)}}function up(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new N0),i.forEach(function(l){var f=G0.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function ui(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var h=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:pn=D.stateNode,li=!1;break e;case 3:pn=D.stateNode.containerInfo,li=!0;break e;case 4:pn=D.stateNode.containerInfo,li=!0;break e}D=D.return}if(pn===null)throw Error(n(160));lp(h,E,f),pn=null,li=!1;var B=f.alternate;B!==null&&(B.return=null),f.return=null}catch(ae){Zt(f,i,ae)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cp(i,t),i=i.sibling}function cp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ui(i,t),Mi(t),l&4){try{Pa(3,t,t.return),Bo(3,t)}catch(Ye){Zt(t,t.return,Ye)}try{Pa(5,t,t.return)}catch(Ye){Zt(t,t.return,Ye)}}break;case 1:ui(i,t),Mi(t),l&512&&a!==null&&As(a,a.return);break;case 5:if(ui(i,t),Mi(t),l&512&&a!==null&&As(a,a.return),t.flags&32){var f=t.stateNode;try{fe(f,"")}catch(Ye){Zt(t,t.return,Ye)}}if(l&4&&(f=t.stateNode,f!=null)){var h=t.memoizedProps,E=a!==null?a.memoizedProps:h,D=t.type,B=t.updateQueue;if(t.updateQueue=null,B!==null)try{D==="input"&&h.type==="radio"&&h.name!=null&&pt(f,h),Le(D,E);var ae=Le(D,h);for(E=0;E<B.length;E+=2){var Se=B[E],ye=B[E+1];Se==="style"?ge(f,ye):Se==="dangerouslySetInnerHTML"?te(f,ye):Se==="children"?fe(f,ye):F(f,Se,ye,ae)}switch(D){case"input":zt(f,h);break;case"textarea":dn(f,h);break;case"select":var xe=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!h.multiple;var Oe=h.value;Oe!=null?bt(f,!!h.multiple,Oe,!1):xe!==!!h.multiple&&(h.defaultValue!=null?bt(f,!!h.multiple,h.defaultValue,!0):bt(f,!!h.multiple,h.multiple?[]:"",!1))}f[xa]=h}catch(Ye){Zt(t,t.return,Ye)}}break;case 6:if(ui(i,t),Mi(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,h=t.memoizedProps;try{f.nodeValue=h}catch(Ye){Zt(t,t.return,Ye)}}break;case 3:if(ui(i,t),Mi(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{la(i.containerInfo)}catch(Ye){Zt(t,t.return,Ye)}break;case 4:ui(i,t),Mi(t);break;case 13:ui(i,t),Mi(t),f=t.child,f.flags&8192&&(h=f.memoizedState!==null,f.stateNode.isHidden=h,!h||f.alternate!==null&&f.alternate.memoizedState!==null||(sc=Xt())),l&4&&up(t);break;case 22:if(Se=a!==null&&a.memoizedState!==null,t.mode&1?(yn=(ae=yn)||Se,ui(i,t),yn=ae):ui(i,t),Mi(t),l&8192){if(ae=t.memoizedState!==null,(t.stateNode.isHidden=ae)&&!Se&&(t.mode&1)!==0)for(ze=t,Se=t.child;Se!==null;){for(ye=ze=Se;ze!==null;){switch(xe=ze,Oe=xe.child,xe.tag){case 0:case 11:case 14:case 15:Pa(4,xe,xe.return);break;case 1:As(xe,xe.return);var He=xe.stateNode;if(typeof He.componentWillUnmount=="function"){l=xe,a=xe.return;try{i=l,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(Ye){Zt(l,a,Ye)}}break;case 5:As(xe,xe.return);break;case 22:if(xe.memoizedState!==null){hp(ye);continue}}Oe!==null?(Oe.return=xe,ze=Oe):hp(ye)}Se=Se.sibling}e:for(Se=null,ye=t;;){if(ye.tag===5){if(Se===null){Se=ye;try{f=ye.stateNode,ae?(h=f.style,typeof h.setProperty=="function"?h.setProperty("display","none","important"):h.display="none"):(D=ye.stateNode,B=ye.memoizedProps.style,E=B!=null&&B.hasOwnProperty("display")?B.display:null,D.style.display=de("display",E))}catch(Ye){Zt(t,t.return,Ye)}}}else if(ye.tag===6){if(Se===null)try{ye.stateNode.nodeValue=ae?"":ye.memoizedProps}catch(Ye){Zt(t,t.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;Se===ye&&(Se=null),ye=ye.return}Se===ye&&(Se=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ui(i,t),Mi(t),l&4&&up(t);break;case 21:break;default:ui(i,t),Mi(t)}}function Mi(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(ap(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(fe(f,""),l.flags&=-33);var h=op(t);nc(t,h,f);break;case 3:case 4:var E=l.stateNode.containerInfo,D=op(t);tc(t,D,E);break;default:throw Error(n(161))}}catch(B){Zt(t,t.return,B)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function U0(t,i,a){ze=t,fp(t)}function fp(t,i,a){for(var l=(t.mode&1)!==0;ze!==null;){var f=ze,h=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Oo;if(!E){var D=f.alternate,B=D!==null&&D.memoizedState!==null||yn;D=Oo;var ae=yn;if(Oo=E,(yn=B)&&!ae)for(ze=f;ze!==null;)E=ze,B=E.child,E.tag===22&&E.memoizedState!==null?pp(f):B!==null?(B.return=E,ze=B):pp(f);for(;h!==null;)ze=h,fp(h),h=h.sibling;ze=f,Oo=D,yn=ae}dp(t)}else(f.subtreeFlags&8772)!==0&&h!==null?(h.return=f,ze=h):dp(t)}}function dp(t){for(;ze!==null;){var i=ze;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Bo(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!yn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:oi(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var h=i.updateQueue;h!==null&&hh(i,h,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}hh(i,E,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var B=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":B.autoFocus&&a.focus();break;case"img":B.src&&(a.src=B.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ae=i.alternate;if(ae!==null){var Se=ae.memoizedState;if(Se!==null){var ye=Se.dehydrated;ye!==null&&la(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}yn||i.flags&512&&ec(i)}catch(xe){Zt(i,i.return,xe)}}if(i===t){ze=null;break}if(a=i.sibling,a!==null){a.return=i.return,ze=a;break}ze=i.return}}function hp(t){for(;ze!==null;){var i=ze;if(i===t){ze=null;break}var a=i.sibling;if(a!==null){a.return=i.return,ze=a;break}ze=i.return}}function pp(t){for(;ze!==null;){var i=ze;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Bo(4,i)}catch(B){Zt(i,a,B)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(B){Zt(i,f,B)}}var h=i.return;try{ec(i)}catch(B){Zt(i,h,B)}break;case 5:var E=i.return;try{ec(i)}catch(B){Zt(i,E,B)}}}catch(B){Zt(i,i.return,B)}if(i===t){ze=null;break}var D=i.sibling;if(D!==null){D.return=i.return,ze=D;break}ze=i.return}}var F0=Math.ceil,ko=R.ReactCurrentDispatcher,ic=R.ReactCurrentOwner,Qn=R.ReactCurrentBatchConfig,yt=0,un=null,en=null,mn=0,Gn=0,Rs=lr(0),sn=0,La=null,Hr=0,zo=0,rc=0,Da=null,Un=null,sc=0,Cs=1/0,Vi=null,Vo=!1,ac=null,pr=null,Ho=!1,mr=null,Go=0,Na=0,oc=null,Wo=-1,Xo=0;function Rn(){return(yt&6)!==0?Xt():Wo!==-1?Wo:Wo=Xt()}function gr(t){return(t.mode&1)===0?1:(yt&2)!==0&&mn!==0?mn&-mn:x0.transition!==null?(Xo===0&&(Xo=Fe()),Xo):(t=dt,t!==0||(t=window.event,t=t===void 0?16:gd(t.type)),t)}function ci(t,i,a,l){if(50<Na)throw Na=0,oc=null,Error(n(185));ft(t,a,l),((yt&2)===0||t!==un)&&(t===un&&((yt&2)===0&&(zo|=a),sn===4&&_r(t,mn)),Fn(t,l),a===1&&yt===0&&(i.mode&1)===0&&(Cs=Xt()+500,xo&&cr()))}function Fn(t,i){var a=t.callbackNode;Pt(t,i);var l=It(t,t===un?mn:0);if(l===0)a!==null&&na(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&na(a),i===1)t.tag===0?v0(gp.bind(null,t)):th(gp.bind(null,t)),p0(function(){(yt&6)===0&&cr()}),a=null;else{switch(Ni(l)){case 1:a=ia;break;case 4:a=A;break;case 16:a=W;break;case 536870912:a=J;break;default:a=W}a=Tp(a,mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function mp(t,i){if(Wo=-1,Xo=0,(yt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(bs()&&t.callbackNode!==a)return null;var l=It(t,t===un?mn:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=Yo(t,l);else{i=l;var f=yt;yt|=2;var h=vp();(un!==t||mn!==i)&&(Vi=null,Cs=Xt()+500,Wr(t,i));do try{k0();break}catch(D){_p(t,D)}while(!0);wu(),ko.current=h,yt=f,en!==null?i=0:(un=null,mn=0,i=sn)}if(i!==0){if(i===2&&(f=Jt(t),f!==0&&(l=f,i=lc(t,f))),i===1)throw a=La,Wr(t,0),_r(t,l),Fn(t,Xt()),a;if(i===6)_r(t,l);else{if(f=t.current.alternate,(l&30)===0&&!O0(f)&&(i=Yo(t,l),i===2&&(h=Jt(t),h!==0&&(l=h,i=lc(t,h))),i===1))throw a=La,Wr(t,0),_r(t,l),Fn(t,Xt()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:Xr(t,Un,Vi);break;case 3:if(_r(t,l),(l&130023424)===l&&(i=sc+500-Xt(),10<i)){if(It(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){Rn(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=pu(Xr.bind(null,t,Un,Vi),i);break}Xr(t,Un,Vi);break;case 4:if(_r(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-Te(l);h=1<<E,E=i[E],E>f&&(f=E),l&=~h}if(l=f,l=Xt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*F0(l/1960))-l,10<l){t.timeoutHandle=pu(Xr.bind(null,t,Un,Vi),l);break}Xr(t,Un,Vi);break;case 5:Xr(t,Un,Vi);break;default:throw Error(n(329))}}}return Fn(t,Xt()),t.callbackNode===a?mp.bind(null,t):null}function lc(t,i){var a=Da;return t.current.memoizedState.isDehydrated&&(Wr(t,i).flags|=256),t=Yo(t,i),t!==2&&(i=Un,Un=a,i!==null&&uc(i)),t}function uc(t){Un===null?Un=t:Un.push.apply(Un,t)}function O0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],h=f.getSnapshot;f=f.value;try{if(!si(h(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function _r(t,i){for(i&=~rc,i&=~zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-Te(i),l=1<<a;t[a]=-1,i&=~l}}function gp(t){if((yt&6)!==0)throw Error(n(327));bs();var i=It(t,0);if((i&1)===0)return Fn(t,Xt()),null;var a=Yo(t,i);if(t.tag!==0&&a===2){var l=Jt(t);l!==0&&(i=l,a=lc(t,l))}if(a===1)throw a=La,Wr(t,0),_r(t,i),Fn(t,Xt()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,Xr(t,Un,Vi),Fn(t,Xt()),null}function cc(t,i){var a=yt;yt|=1;try{return t(i)}finally{yt=a,yt===0&&(Cs=Xt()+500,xo&&cr())}}function Gr(t){mr!==null&&mr.tag===0&&(yt&6)===0&&bs();var i=yt;yt|=1;var a=Qn.transition,l=dt;try{if(Qn.transition=null,dt=1,t)return t()}finally{dt=l,Qn.transition=a,yt=i,(yt&6)===0&&cr()}}function fc(){Gn=Rs.current,Bt(Rs)}function Wr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,h0(a)),en!==null)for(a=en.return;a!==null;){var l=a;switch(Su(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&_o();break;case 3:Ts(),Bt(Dn),Bt(vn),Nu();break;case 5:Lu(l);break;case 4:Ts();break;case 13:Bt(Yt);break;case 19:Bt(Yt);break;case 10:Au(l.type._context);break;case 22:case 23:fc()}a=a.return}if(un=t,en=t=vr(t.current,null),mn=Gn=i,sn=0,La=null,rc=zo=Hr=0,Un=Da=null,kr!==null){for(i=0;i<kr.length;i++)if(a=kr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,h=a.pending;if(h!==null){var E=h.next;h.next=f,l.next=E}a.pending=l}kr=null}return t}function _p(t,i){do{var a=en;try{if(wu(),bo.current=No,Po){for(var l=qt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Po=!1}if(Vr=0,ln=rn=qt=null,wa=!1,Aa=0,ic.current=null,a===null||a.return===null){sn=1,La=i,en=null;break}e:{var h=t,E=a.return,D=a,B=i;if(i=mn,D.flags|=32768,B!==null&&typeof B=="object"&&typeof B.then=="function"){var ae=B,Se=D,ye=Se.tag;if((Se.mode&1)===0&&(ye===0||ye===11||ye===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Oe=Hh(E);if(Oe!==null){Oe.flags&=-257,Gh(Oe,E,D,h,i),Oe.mode&1&&Vh(h,ae,i),i=Oe,B=ae;var He=i.updateQueue;if(He===null){var Ye=new Set;Ye.add(B),i.updateQueue=Ye}else He.add(B);break e}else{if((i&1)===0){Vh(h,ae,i),dc();break e}B=Error(n(426))}}else if(Gt&&D.mode&1){var Qt=Hh(E);if(Qt!==null){(Qt.flags&65536)===0&&(Qt.flags|=256),Gh(Qt,E,D,h,i),Eu(ws(B,D));break e}}h=B=ws(B,D),sn!==4&&(sn=2),Da===null?Da=[h]:Da.push(h),h=E;do{switch(h.tag){case 3:h.flags|=65536,i&=-i,h.lanes|=i;var j=kh(h,B,i);dh(h,j);break e;case 1:D=B;var V=h.type,ee=h.stateNode;if((h.flags&128)===0&&(typeof V.getDerivedStateFromError=="function"||ee!==null&&typeof ee.componentDidCatch=="function"&&(pr===null||!pr.has(ee)))){h.flags|=65536,i&=-i,h.lanes|=i;var Ee=zh(h,D,i);dh(h,Ee);break e}}h=h.return}while(h!==null)}Sp(a)}catch(Ke){i=Ke,en===a&&a!==null&&(en=a=a.return);continue}break}while(!0)}function vp(){var t=ko.current;return ko.current=No,t===null?No:t}function dc(){(sn===0||sn===3||sn===2)&&(sn=4),un===null||(Hr&268435455)===0&&(zo&268435455)===0||_r(un,mn)}function Yo(t,i){var a=yt;yt|=2;var l=vp();(un!==t||mn!==i)&&(Vi=null,Wr(t,i));do try{B0();break}catch(f){_p(t,f)}while(!0);if(wu(),yt=a,ko.current=l,en!==null)throw Error(n(261));return un=null,mn=0,sn}function B0(){for(;en!==null;)xp(en)}function k0(){for(;en!==null&&!eo();)xp(en)}function xp(t){var i=Ep(t.alternate,t,Gn);t.memoizedProps=t.pendingProps,i===null?Sp(t):en=i,ic.current=null}function Sp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=L0(a,i,Gn),a!==null){en=a;return}}else{if(a=D0(a,i),a!==null){a.flags&=32767,en=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{sn=6,en=null;return}}if(i=i.sibling,i!==null){en=i;return}en=i=t}while(i!==null);sn===0&&(sn=5)}function Xr(t,i,a){var l=dt,f=Qn.transition;try{Qn.transition=null,dt=1,z0(t,i,a,l)}finally{Qn.transition=f,dt=l}return null}function z0(t,i,a,l){do bs();while(mr!==null);if((yt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var h=a.lanes|a.childLanes;if(Pn(t,h),t===un&&(en=un=null,mn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Ho||(Ho=!0,Tp(W,function(){return bs(),null})),h=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||h){h=Qn.transition,Qn.transition=null;var E=dt;dt=1;var D=yt;yt|=4,ic.current=null,I0(t,a),cp(a,t),a0(du),no=!!fu,du=fu=null,t.current=a,U0(a),Wl(),yt=D,dt=E,Qn.transition=h}else t.current=a;if(Ho&&(Ho=!1,mr=t,Go=f),h=t.pendingLanes,h===0&&(pr=null),Be(a.stateNode),Fn(t,Xt()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Vo)throw Vo=!1,t=ac,ac=null,t;return(Go&1)!==0&&t.tag!==0&&bs(),h=t.pendingLanes,(h&1)!==0?t===oc?Na++:(Na=0,oc=t):Na=0,cr(),null}function bs(){if(mr!==null){var t=Ni(Go),i=Qn.transition,a=dt;try{if(Qn.transition=null,dt=16>t?16:t,mr===null)var l=!1;else{if(t=mr,mr=null,Go=0,(yt&6)!==0)throw Error(n(331));var f=yt;for(yt|=4,ze=t.current;ze!==null;){var h=ze,E=h.child;if((ze.flags&16)!==0){var D=h.deletions;if(D!==null){for(var B=0;B<D.length;B++){var ae=D[B];for(ze=ae;ze!==null;){var Se=ze;switch(Se.tag){case 0:case 11:case 15:Pa(8,Se,h)}var ye=Se.child;if(ye!==null)ye.return=Se,ze=ye;else for(;ze!==null;){Se=ze;var xe=Se.sibling,Oe=Se.return;if(sp(Se),Se===ae){ze=null;break}if(xe!==null){xe.return=Oe,ze=xe;break}ze=Oe}}}var He=h.alternate;if(He!==null){var Ye=He.child;if(Ye!==null){He.child=null;do{var Qt=Ye.sibling;Ye.sibling=null,Ye=Qt}while(Ye!==null)}}ze=h}}if((h.subtreeFlags&2064)!==0&&E!==null)E.return=h,ze=E;else e:for(;ze!==null;){if(h=ze,(h.flags&2048)!==0)switch(h.tag){case 0:case 11:case 15:Pa(9,h,h.return)}var j=h.sibling;if(j!==null){j.return=h.return,ze=j;break e}ze=h.return}}var V=t.current;for(ze=V;ze!==null;){E=ze;var ee=E.child;if((E.subtreeFlags&2064)!==0&&ee!==null)ee.return=E,ze=ee;else e:for(E=V;ze!==null;){if(D=ze,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:Bo(9,D)}}catch(Ke){Zt(D,D.return,Ke)}if(D===E){ze=null;break e}var Ee=D.sibling;if(Ee!==null){Ee.return=D.return,ze=Ee;break e}ze=D.return}}if(yt=f,cr(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(Q,t)}catch{}l=!0}return l}finally{dt=a,Qn.transition=i}}return!1}function yp(t,i,a){i=ws(a,i),i=kh(t,i,1),t=dr(t,i,1),i=Rn(),t!==null&&(ft(t,1,i),Fn(t,i))}function Zt(t,i,a){if(t.tag===3)yp(t,t,a);else for(;i!==null;){if(i.tag===3){yp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(pr===null||!pr.has(l))){t=ws(a,t),t=zh(i,t,1),i=dr(i,t,1),t=Rn(),i!==null&&(ft(i,1,t),Fn(i,t));break}}i=i.return}}function V0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=Rn(),t.pingedLanes|=t.suspendedLanes&a,un===t&&(mn&a)===a&&(sn===4||sn===3&&(mn&130023424)===mn&&500>Xt()-sc?Wr(t,0):rc|=a),Fn(t,i)}function Mp(t,i){i===0&&((t.mode&1)===0?i=1:(i=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var a=Rn();t=Bi(t,i),t!==null&&(ft(t,i,a),Fn(t,a))}function H0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Mp(t,a)}function G0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Mp(t,a)}var Ep;Ep=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Dn.current)In=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return In=!1,P0(t,i,a);In=(t.flags&131072)!==0}else In=!1,Gt&&(i.flags&1048576)!==0&&nh(i,yo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;Fo(t,i),t=i.pendingProps;var f=_s(i,vn.current);Es(i,a),f=Fu(null,i,l,t,f,a);var h=Ou();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Nn(l)?(h=!0,vo(i)):h=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,bu(i),f.updater=Io,i.stateNode=f,f._reactInternals=i,Gu(i,l,t,a),i=qu(null,i,l,!0,h,a)):(i.tag=0,Gt&&h&&xu(i),An(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(Fo(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=X0(l),t=oi(l,t),f){case 0:i=Yu(null,i,l,t,a);break e;case 1:i=Kh(null,i,l,t,a);break e;case 11:i=Wh(null,i,l,t,a);break e;case 14:i=Xh(null,i,l,oi(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),Yu(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),Kh(t,i,l,f,a);case 3:e:{if(Zh(i),t===null)throw Error(n(387));l=i.pendingProps,h=i.memoizedState,f=h.element,fh(t,i),Ro(i,l,null,a);var E=i.memoizedState;if(l=E.element,h.isDehydrated)if(h={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=h,i.memoizedState=h,i.flags&256){f=ws(Error(n(423)),i),i=jh(t,i,l,a,f);break e}else if(l!==f){f=ws(Error(n(424)),i),i=jh(t,i,l,a,f);break e}else for(Hn=or(i.stateNode.containerInfo.firstChild),Vn=i,Gt=!0,ai=null,a=uh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),l===f){i=zi(t,i,a);break e}An(t,i,l,a)}i=i.child}return i;case 5:return ph(i),t===null&&Mu(i),l=i.type,f=i.pendingProps,h=t!==null?t.memoizedProps:null,E=f.children,hu(l,f)?E=null:h!==null&&hu(l,h)&&(i.flags|=32),$h(t,i),An(t,i,E,a),i.child;case 6:return t===null&&Mu(i),null;case 13:return Qh(t,i,a);case 4:return Pu(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=ys(i,null,l,a):An(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),Wh(t,i,l,f,a);case 7:return An(t,i,i.pendingProps,a),i.child;case 8:return An(t,i,i.pendingProps.children,a),i.child;case 12:return An(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,h=i.memoizedProps,E=f.value,Ut(To,l._currentValue),l._currentValue=E,h!==null)if(si(h.value,E)){if(h.children===f.children&&!Dn.current){i=zi(t,i,a);break e}}else for(h=i.child,h!==null&&(h.return=i);h!==null;){var D=h.dependencies;if(D!==null){E=h.child;for(var B=D.firstContext;B!==null;){if(B.context===l){if(h.tag===1){B=ki(-1,a&-a),B.tag=2;var ae=h.updateQueue;if(ae!==null){ae=ae.shared;var Se=ae.pending;Se===null?B.next=B:(B.next=Se.next,Se.next=B),ae.pending=B}}h.lanes|=a,B=h.alternate,B!==null&&(B.lanes|=a),Ru(h.return,a,i),D.lanes|=a;break}B=B.next}}else if(h.tag===10)E=h.type===i.type?null:h.child;else if(h.tag===18){if(E=h.return,E===null)throw Error(n(341));E.lanes|=a,D=E.alternate,D!==null&&(D.lanes|=a),Ru(E,a,i),E=h.sibling}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}An(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Es(i,a),f=Zn(f),l=l(f),i.flags|=1,An(t,i,l,a),i.child;case 14:return l=i.type,f=oi(l,i.pendingProps),f=oi(l.type,f),Xh(t,i,l,f,a);case 15:return Yh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:oi(l,f),Fo(t,i),i.tag=1,Nn(l)?(t=!0,vo(i)):t=!1,Es(i,a),Oh(i,l,f),Gu(i,l,f,a),qu(null,i,l,!0,t,a);case 19:return ep(t,i,a);case 22:return qh(t,i,a)}throw Error(n(156,i.tag))};function Tp(t,i){return Nr(t,i)}function W0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,i,a,l){return new W0(t,i,a,l)}function hc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function X0(t){if(typeof t=="function")return hc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Z)return 11;if(t===q)return 14}return 2}function vr(t,i){var a=t.alternate;return a===null?(a=Jn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function qo(t,i,a,l,f,h){var E=2;if(l=t,typeof t=="function")hc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Yr(a.children,f,h,i);case T:E=8,f|=8;break;case L:return t=Jn(12,a,i,f|2),t.elementType=L,t.lanes=h,t;case re:return t=Jn(13,a,i,f),t.elementType=re,t.lanes=h,t;case he:return t=Jn(19,a,i,f),t.elementType=he,t.lanes=h,t;case Y:return $o(a,f,h,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case X:E=10;break e;case z:E=9;break e;case Z:E=11;break e;case q:E=14;break e;case oe:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Jn(E,a,i,f),i.elementType=t,i.type=l,i.lanes=h,i}function Yr(t,i,a,l){return t=Jn(7,t,l,i),t.lanes=a,t}function $o(t,i,a,l){return t=Jn(22,t,l,i),t.elementType=Y,t.lanes=a,t.stateNode={isHidden:!1},t}function pc(t,i,a){return t=Jn(6,t,null,i),t.lanes=a,t}function mc(t,i,a){return i=Jn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Y0(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hn(0),this.expirationTimes=hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function gc(t,i,a,l,f,h,E,D,B){return t=new Y0(t,i,a,D,B),i===1?(i=1,h===!0&&(i|=8)):i=0,h=Jn(3,null,null,i),t.current=h,h.stateNode=t,h.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},bu(h),t}function q0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function wp(t){if(!t)return ur;t=t._reactInternals;e:{if(wn(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Nn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(Nn(a))return Jd(t,a,i)}return i}function Ap(t,i,a,l,f,h,E,D,B){return t=gc(a,l,!0,t,f,h,E,D,B),t.context=wp(null),a=t.current,l=Rn(),f=gr(a),h=ki(l,f),h.callback=i??null,dr(a,h,f),t.current.lanes=f,ft(t,f,l),Fn(t,l),t}function Ko(t,i,a,l){var f=i.current,h=Rn(),E=gr(f);return a=wp(a),i.context===null?i.context=a:i.pendingContext=a,i=ki(h,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=dr(f,i,E),t!==null&&(ci(t,f,E,h),Ao(t,f,E)),E}function Zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function _c(t,i){Rp(t,i),(t=t.alternate)&&Rp(t,i)}function $0(){return null}var Cp=typeof reportError=="function"?reportError:function(t){console.error(t)};function vc(t){this._internalRoot=t}jo.prototype.render=vc.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));Ko(t,i,null,null)},jo.prototype.unmount=vc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Gr(function(){Ko(null,t,null,null)}),i[Ii]=null}};function jo(t){this._internalRoot=t}jo.prototype.unstable_scheduleHydration=function(t){if(t){var i=Lt();t={blockedOn:null,target:t,priority:i};for(var a=0;a<rr.length&&i!==0&&i<rr[a].priority;a++);rr.splice(a,0,t),a===0&&pd(t)}};function xc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Qo(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function K0(t,i,a,l,f){if(f){if(typeof l=="function"){var h=l;l=function(){var ae=Zo(E);h.call(ae)}}var E=Ap(i,l,t,0,null,!1,!1,"",bp);return t._reactRootContainer=E,t[Ii]=E.current,_a(t.nodeType===8?t.parentNode:t),Gr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var D=l;l=function(){var ae=Zo(B);D.call(ae)}}var B=gc(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=B,t[Ii]=B.current,_a(t.nodeType===8?t.parentNode:t),Gr(function(){Ko(i,B,a,l)}),B}function Jo(t,i,a,l,f){var h=a._reactRootContainer;if(h){var E=h;if(typeof f=="function"){var D=f;f=function(){var B=Zo(E);D.call(B)}}Ko(i,E,t,f)}else E=K0(a,i,t,f,l);return Zo(E)}Rt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=xt(i.pendingLanes);a!==0&&(Ln(i,a|1),Fn(i,Xt()),(yt&6)===0&&(Cs=Xt()+500,cr()))}break;case 13:Gr(function(){var l=Bi(t,1);if(l!==null){var f=Rn();ci(l,t,1,f)}}),_c(t,1)}},Ft=function(t){if(t.tag===13){var i=Bi(t,134217728);if(i!==null){var a=Rn();ci(i,t,134217728,a)}_c(t,134217728)}},ii=function(t){if(t.tag===13){var i=gr(t),a=Bi(t,i);if(a!==null){var l=Rn();ci(a,t,i,l)}_c(t,i)}},Lt=function(){return dt},ri=function(t,i){var a=dt;try{return dt=t,i()}finally{dt=a}},et=function(t,i,a){switch(i){case"input":if(zt(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=go(l);if(!f)throw Error(n(90));kt(l),zt(l,f)}}}break;case"textarea":dn(t,a);break;case"select":i=a.value,i!=null&&bt(t,!!a.multiple,i,!1)}},De=cc,_e=Gr;var Z0={usingClientEntryPoint:!1,Events:[Sa,ms,go,pe,be,cc]},Ia={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},j0={bundleType:Ia.bundleType,version:Ia.version,rendererPackageName:Ia.rendererPackageName,rendererConfig:Ia.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Dr(t),t===null?null:t.stateNode},findFiberByHostInstance:Ia.findFiberByHostInstance||$0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Q=el.inject(j0),we=el}catch{}}return On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0,On.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!xc(i))throw Error(n(200));return q0(t,i,null,a)},On.createRoot=function(t,i){if(!xc(t))throw Error(n(299));var a=!1,l="",f=Cp;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=gc(t,1,!1,null,null,a,!1,l,f),t[Ii]=i.current,_a(t.nodeType===8?t.parentNode:t),new vc(i)},On.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Dr(i),t=t===null?null:t.stateNode,t},On.flushSync=function(t){return Gr(t)},On.hydrate=function(t,i,a){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!0,a)},On.hydrateRoot=function(t,i,a){if(!xc(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,h="",E=Cp;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Ap(i,null,t,1,a??null,f,!1,h,E),t[Ii]=i.current,_a(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new jo(i)},On.render=function(t,i,a){if(!Qo(i))throw Error(n(200));return Jo(null,t,i,!1,a)},On.unmountComponentAtNode=function(t){if(!Qo(t))throw Error(n(40));return t._reactRootContainer?(Gr(function(){Jo(null,null,t,!1,function(){t._reactRootContainer=null,t[Ii]=null})}),!0):!1},On.unstable_batchedUpdates=cc,On.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!Qo(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return Jo(t,i,a,!1,l)},On.version="18.3.1-next-f1338f8080-20240426",On}var Op;function o_(){if(Op)return Mc.exports;Op=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Mc.exports=a_(),Mc.exports}var Bp;function l_(){if(Bp)return tl;Bp=1;var s=o_();return tl.createRoot=s.createRoot,tl.hydrateRoot=s.hydrateRoot,tl}var u_=l_();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="185",c_=0,kp=1,f_=2,Al=1,d_=2,Ga=3,Cr=0,kn=1,qi=2,Ki=0,Ws=1,zp=2,Vp=3,Hp=4,h_=5,Qr=100,p_=101,m_=102,g_=103,__=104,v_=200,x_=201,S_=202,y_=203,sf=204,af=205,M_=206,E_=207,T_=208,w_=209,A_=210,R_=211,C_=212,b_=213,P_=214,of=0,lf=1,uf=2,qs=3,cf=4,ff=5,df=6,hf=7,Bm=0,L_=1,D_=2,Ci=0,km=1,zm=2,Vm=3,Hm=4,Gm=5,Wm=6,Xm=7,Ym=300,ns=301,$s=302,wc=303,Ac=304,kl=306,pf=1e3,$i=1001,mf=1002,gn=1003,N_=1004,nl=1005,Tn=1006,Rc=1007,es=1008,ni=1009,qm=1010,$m=1011,Xa=1012,jf=1013,Li=1014,Ai=1015,Qi=1016,Qf=1017,Jf=1018,Ya=1020,Km=35902,Zm=35899,jm=1021,Qm=1022,gi=1023,Ji=1026,ts=1027,Jm=1028,ed=1029,is=1030,td=1031,nd=1033,Rl=33776,Cl=33777,bl=33778,Pl=33779,gf=35840,_f=35841,vf=35842,xf=35843,Sf=36196,yf=37492,Mf=37496,Ef=37488,Tf=37489,Dl=37490,wf=37491,Af=37808,Rf=37809,Cf=37810,bf=37811,Pf=37812,Lf=37813,Df=37814,Nf=37815,If=37816,Uf=37817,Ff=37818,Of=37819,Bf=37820,kf=37821,zf=36492,Vf=36494,Hf=36495,Gf=36283,Wf=36284,Nl=36285,Xf=36286,I_=3200,Gp=0,U_=1,Ar="",ti="srgb",Il="srgb-linear",Ul="linear",Dt="srgb",Ps=7680,Wp=519,F_=512,O_=513,B_=514,id=515,k_=516,z_=517,rd=518,V_=519,Xp=35044,Yp="300 es",Ri=2e3,Fl=2001;function H_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function G_(){const s=Ol("canvas");return s.style.display="block",s}const qp={};function $p(...s){const e="THREE."+s.shift();console.log(e,...s)}function eg(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function st(...s){s=eg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function Mt(...s){s=eg(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function Xs(...s){const e=s.join(" ");e in qp||(qp[e]=!0,st(...s))}function W_(s,e,n){return new Promise(function(r,o){function u(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(u,n);break;default:r()}}setTimeout(u,n)})}const X_={[of]:lf,[uf]:df,[cf]:hf,[qs]:ff,[lf]:of,[df]:uf,[hf]:cf,[ff]:qs};class ss{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const u=o.indexOf(n);u!==-1&&o.splice(u,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let u=0,c=o.length;u<c;u++)o[u].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cc=Math.PI/180,Yf=180/Math.PI;function qa(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[n&63|128]+Mn[n>>8&255]+"-"+Mn[n>>16&255]+Mn[n>>24&255]+Mn[r&255]+Mn[r>>8&255]+Mn[r>>16&255]+Mn[r>>24&255]).toLowerCase()}function _t(s,e,n){return Math.max(e,Math.min(n,s))}function Y_(s,e){return(s%e+e)%e}function bc(s,e,n){return(1-n)*s+n*e}function Fa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Bn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const ld=class ld{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),u=this.x-e.x,c=this.y-e.y;return this.x=u*r-c*o+e.x,this.y=u*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ld.prototype.isVector2=!0;let St=ld;class Qs{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,u,c,d){let p=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3],g=u[c+0],M=u[c+1],w=u[c+2],C=u[c+3];if(_!==C||p!==g||m!==M||v!==w){let S=p*g+m*M+v*w+_*C;S<0&&(g=-g,M=-M,w=-w,C=-C,S=-S);let x=1-d;if(S<.9995){const I=Math.acos(S),F=Math.sin(I);x=Math.sin(x*I)/F,d=Math.sin(d*I)/F,p=p*x+g*d,m=m*x+M*d,v=v*x+w*d,_=_*x+C*d}else{p=p*x+g*d,m=m*x+M*d,v=v*x+w*d,_=_*x+C*d;const I=1/Math.sqrt(p*p+m*m+v*v+_*_);p*=I,m*=I,v*=I,_*=I}}e[n]=p,e[n+1]=m,e[n+2]=v,e[n+3]=_}static multiplyQuaternionsFlat(e,n,r,o,u,c){const d=r[o],p=r[o+1],m=r[o+2],v=r[o+3],_=u[c],g=u[c+1],M=u[c+2],w=u[c+3];return e[n]=d*w+v*_+p*M-m*g,e[n+1]=p*w+v*g+m*_-d*M,e[n+2]=m*w+v*M+d*g-p*_,e[n+3]=v*w-d*_-p*g-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,u=e._z,c=e._order,d=Math.cos,p=Math.sin,m=d(r/2),v=d(o/2),_=d(u/2),g=p(r/2),M=p(o/2),w=p(u/2);switch(c){case"XYZ":this._x=g*v*_+m*M*w,this._y=m*M*_-g*v*w,this._z=m*v*w+g*M*_,this._w=m*v*_-g*M*w;break;case"YXZ":this._x=g*v*_+m*M*w,this._y=m*M*_-g*v*w,this._z=m*v*w-g*M*_,this._w=m*v*_+g*M*w;break;case"ZXY":this._x=g*v*_-m*M*w,this._y=m*M*_+g*v*w,this._z=m*v*w+g*M*_,this._w=m*v*_-g*M*w;break;case"ZYX":this._x=g*v*_-m*M*w,this._y=m*M*_+g*v*w,this._z=m*v*w-g*M*_,this._w=m*v*_+g*M*w;break;case"YZX":this._x=g*v*_+m*M*w,this._y=m*M*_+g*v*w,this._z=m*v*w-g*M*_,this._w=m*v*_-g*M*w;break;case"XZY":this._x=g*v*_-m*M*w,this._y=m*M*_-g*v*w,this._z=m*v*w+g*M*_,this._w=m*v*_+g*M*w;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],u=n[8],c=n[1],d=n[5],p=n[9],m=n[2],v=n[6],_=n[10],g=r+d+_;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(v-p)*M,this._y=(u-m)*M,this._z=(c-o)*M}else if(r>d&&r>_){const M=2*Math.sqrt(1+r-d-_);this._w=(v-p)/M,this._x=.25*M,this._y=(o+c)/M,this._z=(u+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-r-_);this._w=(u-m)/M,this._x=(o+c)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+_-r-d);this._w=(c-o)/M,this._x=(u+m)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,u=e._z,c=e._w,d=n._x,p=n._y,m=n._z,v=n._w;return this._x=r*v+c*d+o*m-u*p,this._y=o*v+c*p+u*d-r*m,this._z=u*v+c*m+r*p-o*d,this._w=c*v-r*d-o*p-u*m,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,u=e._z,c=e._w,d=this.dot(e);d<0&&(r=-r,o=-o,u=-u,c=-c,d=-d);let p=1-n;if(d<.9995){const m=Math.acos(d),v=Math.sin(m);p=Math.sin(p*m)/v,n=Math.sin(n*m)/v,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+u*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),u*Math.sin(n),u*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ud=class ud{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Kp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Kp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[3]*r+u[6]*o,this.y=u[1]*n+u[4]*r+u[7]*o,this.z=u[2]*n+u[5]*r+u[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=e.elements,c=1/(u[3]*n+u[7]*r+u[11]*o+u[15]);return this.x=(u[0]*n+u[4]*r+u[8]*o+u[12])*c,this.y=(u[1]*n+u[5]*r+u[9]*o+u[13])*c,this.z=(u[2]*n+u[6]*r+u[10]*o+u[14])*c,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,u=e.x,c=e.y,d=e.z,p=e.w,m=2*(c*o-d*r),v=2*(d*n-u*o),_=2*(u*r-c*n);return this.x=n+p*m+c*_-d*v,this.y=r+p*v+d*m-u*_,this.z=o+p*_+u*v-c*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,u=e.elements;return this.x=u[0]*n+u[4]*r+u[8]*o,this.y=u[1]*n+u[5]*r+u[9]*o,this.z=u[2]*n+u[6]*r+u[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,u=e.z,c=n.x,d=n.y,p=n.z;return this.x=o*p-u*d,this.y=u*c-r*p,this.z=r*d-o*c,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Pc.copy(this).projectOnVector(e),this.sub(Pc)}reflect(e){return this.sub(Pc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ud.prototype.isVector3=!0;let ie=ud;const Pc=new ie,Kp=new Qs,cd=class cd{constructor(e,n,r,o,u,c,d,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,p,m)}set(e,n,r,o,u,c,d,p,m){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=n,v[4]=u,v[5]=p,v[6]=r,v[7]=c,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[3],p=r[6],m=r[1],v=r[4],_=r[7],g=r[2],M=r[5],w=r[8],C=o[0],S=o[3],x=o[6],I=o[1],F=o[4],R=o[7],U=o[2],P=o[5],O=o[8];return u[0]=c*C+d*I+p*U,u[3]=c*S+d*F+p*P,u[6]=c*x+d*R+p*O,u[1]=m*C+v*I+_*U,u[4]=m*S+v*F+_*P,u[7]=m*x+v*R+_*O,u[2]=g*C+M*I+w*U,u[5]=g*S+M*F+w*P,u[8]=g*x+M*R+w*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],v=e[8];return n*c*v-n*d*m-r*u*v+r*d*p+o*u*m-o*c*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=v*c-d*m,g=d*p-v*u,M=m*u-c*p,w=n*_+r*g+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/w;return e[0]=_*C,e[1]=(o*m-v*r)*C,e[2]=(d*r-o*c)*C,e[3]=g*C,e[4]=(v*n-o*p)*C,e[5]=(o*u-d*n)*C,e[6]=M*C,e[7]=(r*p-m*n)*C,e[8]=(c*n-r*u)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,u,c,d){const p=Math.cos(u),m=Math.sin(u);return this.set(r*p,r*m,-r*(p*c+m*d)+c+e,-o*m,o*p,-o*(-m*c+p*d)+d+n,0,0,1),this}scale(e,n){return Xs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return Xs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return Xs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};cd.prototype.isMatrix3=!0;let lt=cd;const Lc=new lt,Zp=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),jp=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q_(){const s={enabled:!0,workingColorSpace:Il,spaces:{},convert:function(o,u,c){return this.enabled===!1||u===c||!u||!c||(this.spaces[u].transfer===Dt&&(o.r=Zi(o.r),o.g=Zi(o.g),o.b=Zi(o.b)),this.spaces[u].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[u].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Dt&&(o.r=Ys(o.r),o.g=Ys(o.g),o.b=Ys(o.b))),o},workingToColorSpace:function(o,u){return this.convert(o,this.workingColorSpace,u)},colorSpaceToWorking:function(o,u){return this.convert(o,u,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ar?Ul:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,u=this.workingColorSpace){return o.fromArray(this.spaces[u].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,u,c){return o.copy(this.spaces[u].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,u){return Xs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,u)},toWorkingColorSpace:function(o,u){return Xs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,u)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Il]:{primaries:e,whitePoint:r,transfer:Ul,toXYZ:Zp,fromXYZ:jp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Zp,fromXYZ:jp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const gt=q_();function Zi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ls;class $_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ls===void 0&&(Ls=Ol("canvas")),Ls.width=e.width,Ls.height=e.height;const o=Ls.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Ls}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ol("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),u=o.data;for(let c=0;c<u.length;c++)u[c]=Zi(u[c]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(Zi(n[r]/255)*255):n[r]=Zi(n[r]);return{data:n,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let K_=0;class sd{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=qa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let u;if(Array.isArray(o)){u=[];for(let c=0,d=o.length;c<d;c++)o[c].isDataTexture?u.push(Dc(o[c].image)):u.push(Dc(o[c]))}else u=Dc(o);r.url=u}return n||(e.images[this.uuid]=r),r}}function Dc(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let Z_=0;const Nc=new ie;class bn extends ss{constructor(e=bn.DEFAULT_IMAGE,n=bn.DEFAULT_MAPPING,r=$i,o=$i,u=Tn,c=es,d=gi,p=ni,m=bn.DEFAULT_ANISOTROPY,v=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Z_++}),this.uuid=qa(),this.name="",this.source=new sd(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=u,this.minFilter=c,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Nc).x}get height(){return this.source.getSize(Nc).y}get depth(){return this.source.getSize(Nc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){st(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case pf:e.x=e.x-Math.floor(e.x);break;case $i:e.x=e.x<0?0:1;break;case mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case pf:e.y=e.y-Math.floor(e.y);break;case $i:e.y=e.y<0?0:1;break;case mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=Ym;bn.DEFAULT_ANISOTROPY=1;const fd=class fd{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,u=this.w,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o+c[12]*u,this.y=c[1]*n+c[5]*r+c[9]*o+c[13]*u,this.z=c[2]*n+c[6]*r+c[10]*o+c[14]*u,this.w=c[3]*n+c[7]*r+c[11]*o+c[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,u;const p=e.elements,m=p[0],v=p[4],_=p[8],g=p[1],M=p[5],w=p[9],C=p[2],S=p[6],x=p[10];if(Math.abs(v-g)<.01&&Math.abs(_-C)<.01&&Math.abs(w-S)<.01){if(Math.abs(v+g)<.1&&Math.abs(_+C)<.1&&Math.abs(w+S)<.1&&Math.abs(m+M+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const F=(m+1)/2,R=(M+1)/2,U=(x+1)/2,P=(v+g)/4,O=(_+C)/4,T=(w+S)/4;return F>R&&F>U?F<.01?(r=0,o=.707106781,u=.707106781):(r=Math.sqrt(F),o=P/r,u=O/r):R>U?R<.01?(r=.707106781,o=0,u=.707106781):(o=Math.sqrt(R),r=P/o,u=T/o):U<.01?(r=.707106781,o=.707106781,u=0):(u=Math.sqrt(U),r=O/u,o=T/u),this.set(r,o,u,n),this}let I=Math.sqrt((S-w)*(S-w)+(_-C)*(_-C)+(g-v)*(g-v));return Math.abs(I)<.001&&(I=1),this.x=(S-w)/I,this.y=(_-C)/I,this.z=(g-v)/I,this.w=Math.acos((m+M+x-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=_t(this.x,e.x,n.x),this.y=_t(this.y,e.y,n.y),this.z=_t(this.z,e.z,n.z),this.w=_t(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=_t(this.x,e,n),this.y=_t(this.y,e,n),this.z=_t(this.z,e,n),this.w=_t(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};fd.prototype.isVector4=!0;let jt=fd;class j_ extends ss{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new jt(0,0,e,n),this.scissorTest=!1,this.viewport=new jt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},u=new bn(o),c=r.count;for(let d=0;d<c;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,u=this.textures.length;o<u;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new sd(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class bi extends j_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class tg extends bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q_ extends bn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=gn,this.minFilter=gn,this.wrapR=$i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bl=class Bl{constructor(e,n,r,o,u,c,d,p,m,v,_,g,M,w,C,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,u,c,d,p,m,v,_,g,M,w,C,S)}set(e,n,r,o,u,c,d,p,m,v,_,g,M,w,C,S){const x=this.elements;return x[0]=e,x[4]=n,x[8]=r,x[12]=o,x[1]=u,x[5]=c,x[9]=d,x[13]=p,x[2]=m,x[6]=v,x[10]=_,x[14]=g,x[3]=M,x[7]=w,x[11]=C,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bl().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Ds.setFromMatrixColumn(e,0).length(),u=1/Ds.setFromMatrixColumn(e,1).length(),c=1/Ds.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*u,n[5]=r[5]*u,n[6]=r[6]*u,n[7]=0,n[8]=r[8]*c,n[9]=r[9]*c,n[10]=r[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,u=e.z,c=Math.cos(r),d=Math.sin(r),p=Math.cos(o),m=Math.sin(o),v=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const g=c*v,M=c*_,w=d*v,C=d*_;n[0]=p*v,n[4]=-p*_,n[8]=m,n[1]=M+w*m,n[5]=g-C*m,n[9]=-d*p,n[2]=C-g*m,n[6]=w+M*m,n[10]=c*p}else if(e.order==="YXZ"){const g=p*v,M=p*_,w=m*v,C=m*_;n[0]=g+C*d,n[4]=w*d-M,n[8]=c*m,n[1]=c*_,n[5]=c*v,n[9]=-d,n[2]=M*d-w,n[6]=C+g*d,n[10]=c*p}else if(e.order==="ZXY"){const g=p*v,M=p*_,w=m*v,C=m*_;n[0]=g-C*d,n[4]=-c*_,n[8]=w+M*d,n[1]=M+w*d,n[5]=c*v,n[9]=C-g*d,n[2]=-c*m,n[6]=d,n[10]=c*p}else if(e.order==="ZYX"){const g=c*v,M=c*_,w=d*v,C=d*_;n[0]=p*v,n[4]=w*m-M,n[8]=g*m+C,n[1]=p*_,n[5]=C*m+g,n[9]=M*m-w,n[2]=-m,n[6]=d*p,n[10]=c*p}else if(e.order==="YZX"){const g=c*p,M=c*m,w=d*p,C=d*m;n[0]=p*v,n[4]=C-g*_,n[8]=w*_+M,n[1]=_,n[5]=c*v,n[9]=-d*v,n[2]=-m*v,n[6]=M*_+w,n[10]=g-C*_}else if(e.order==="XZY"){const g=c*p,M=c*m,w=d*p,C=d*m;n[0]=p*v,n[4]=-_,n[8]=m*v,n[1]=g*_+C,n[5]=c*v,n[9]=M*_-w,n[2]=w*_-M,n[6]=d*v,n[10]=C*_+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J_,e,ev)}lookAt(e,n,r){const o=this.elements;return Wn.subVectors(e,n),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),Sr.crossVectors(r,Wn),Sr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),Sr.crossVectors(r,Wn)),Sr.normalize(),il.crossVectors(Wn,Sr),o[0]=Sr.x,o[4]=il.x,o[8]=Wn.x,o[1]=Sr.y,o[5]=il.y,o[9]=Wn.y,o[2]=Sr.z,o[6]=il.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,u=this.elements,c=r[0],d=r[4],p=r[8],m=r[12],v=r[1],_=r[5],g=r[9],M=r[13],w=r[2],C=r[6],S=r[10],x=r[14],I=r[3],F=r[7],R=r[11],U=r[15],P=o[0],O=o[4],T=o[8],L=o[12],X=o[1],z=o[5],Z=o[9],re=o[13],he=o[2],q=o[6],oe=o[10],Y=o[14],H=o[3],ue=o[7],le=o[11],N=o[15];return u[0]=c*P+d*X+p*he+m*H,u[4]=c*O+d*z+p*q+m*ue,u[8]=c*T+d*Z+p*oe+m*le,u[12]=c*L+d*re+p*Y+m*N,u[1]=v*P+_*X+g*he+M*H,u[5]=v*O+_*z+g*q+M*ue,u[9]=v*T+_*Z+g*oe+M*le,u[13]=v*L+_*re+g*Y+M*N,u[2]=w*P+C*X+S*he+x*H,u[6]=w*O+C*z+S*q+x*ue,u[10]=w*T+C*Z+S*oe+x*le,u[14]=w*L+C*re+S*Y+x*N,u[3]=I*P+F*X+R*he+U*H,u[7]=I*O+F*z+R*q+U*ue,u[11]=I*T+F*Z+R*oe+U*le,u[15]=I*L+F*re+R*Y+U*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[12],c=e[1],d=e[5],p=e[9],m=e[13],v=e[2],_=e[6],g=e[10],M=e[14],w=e[3],C=e[7],S=e[11],x=e[15],I=p*M-m*g,F=d*M-m*_,R=d*g-p*_,U=c*M-m*v,P=c*g-p*v,O=c*_-d*v;return n*(C*I-S*F+x*R)-r*(w*I-S*U+x*P)+o*(w*F-C*U+x*O)-u*(w*R-C*P+S*O)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],u=e[1],c=e[5],d=e[9],p=e[2],m=e[6],v=e[10];return n*(c*v-d*m)-r*(u*v-d*p)+o*(u*m-c*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],u=e[3],c=e[4],d=e[5],p=e[6],m=e[7],v=e[8],_=e[9],g=e[10],M=e[11],w=e[12],C=e[13],S=e[14],x=e[15],I=n*d-r*c,F=n*p-o*c,R=n*m-u*c,U=r*p-o*d,P=r*m-u*d,O=o*m-u*p,T=v*C-_*w,L=v*S-g*w,X=v*x-M*w,z=_*S-g*C,Z=_*x-M*C,re=g*x-M*S,he=I*re-F*Z+R*z+U*X-P*L+O*T;if(he===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/he;return e[0]=(d*re-p*Z+m*z)*q,e[1]=(o*Z-r*re-u*z)*q,e[2]=(C*O-S*P+x*U)*q,e[3]=(g*P-_*O-M*U)*q,e[4]=(p*X-c*re-m*L)*q,e[5]=(n*re-o*X+u*L)*q,e[6]=(S*R-w*O-x*F)*q,e[7]=(v*O-g*R+M*F)*q,e[8]=(c*Z-d*X+m*T)*q,e[9]=(r*X-n*Z-u*T)*q,e[10]=(w*P-C*R+x*I)*q,e[11]=(_*R-v*P-M*I)*q,e[12]=(d*L-c*z-p*T)*q,e[13]=(n*z-r*L+o*T)*q,e[14]=(C*F-w*U-S*I)*q,e[15]=(v*U-_*F+g*I)*q,this}scale(e){const n=this.elements,r=e.x,o=e.y,u=e.z;return n[0]*=r,n[4]*=o,n[8]*=u,n[1]*=r,n[5]*=o,n[9]*=u,n[2]*=r,n[6]*=o,n[10]*=u,n[3]*=r,n[7]*=o,n[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),u=1-r,c=e.x,d=e.y,p=e.z,m=u*c,v=u*d;return this.set(m*c+r,m*d-o*p,m*p+o*d,0,m*d+o*p,v*d+r,v*p-o*c,0,m*p-o*d,v*p+o*c,u*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,u,c){return this.set(1,r,u,0,e,1,c,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,u=n._x,c=n._y,d=n._z,p=n._w,m=u+u,v=c+c,_=d+d,g=u*m,M=u*v,w=u*_,C=c*v,S=c*_,x=d*_,I=p*m,F=p*v,R=p*_,U=r.x,P=r.y,O=r.z;return o[0]=(1-(C+x))*U,o[1]=(M+R)*U,o[2]=(w-F)*U,o[3]=0,o[4]=(M-R)*P,o[5]=(1-(g+x))*P,o[6]=(S+I)*P,o[7]=0,o[8]=(w+F)*O,o[9]=(S-I)*O,o[10]=(1-(g+C))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const u=this.determinantAffine();if(u===0)return r.set(1,1,1),n.identity(),this;let c=Ds.set(o[0],o[1],o[2]).length();const d=Ds.set(o[4],o[5],o[6]).length(),p=Ds.set(o[8],o[9],o[10]).length();u<0&&(c=-c),fi.copy(this);const m=1/c,v=1/d,_=1/p;return fi.elements[0]*=m,fi.elements[1]*=m,fi.elements[2]*=m,fi.elements[4]*=v,fi.elements[5]*=v,fi.elements[6]*=v,fi.elements[8]*=_,fi.elements[9]*=_,fi.elements[10]*=_,n.setFromRotationMatrix(fi),r.x=c,r.y=d,r.z=p,this}makePerspective(e,n,r,o,u,c,d=Ri,p=!1){const m=this.elements,v=2*u/(n-e),_=2*u/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let w,C;if(p)w=u/(c-u),C=c*u/(c-u);else if(d===Ri)w=-(c+u)/(c-u),C=-2*c*u/(c-u);else if(d===Fl)w=-c/(c-u),C=-c*u/(c-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=M,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,n,r,o,u,c,d=Ri,p=!1){const m=this.elements,v=2/(n-e),_=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let w,C;if(p)w=1/(c-u),C=c/(c-u);else if(d===Ri)w=-2/(c-u),C=-(c+u)/(c-u);else if(d===Fl)w=-1/(c-u),C=-u/(c-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=g,m[1]=0,m[5]=_,m[9]=0,m[13]=M,m[2]=0,m[6]=0,m[10]=w,m[14]=C,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};Bl.prototype.isMatrix4=!0;let nn=Bl;const Ds=new ie,fi=new nn,J_=new ie(0,0,0),ev=new ie(1,1,1),Sr=new ie,il=new ie,Wn=new ie,Qp=new nn,Jp=new Qs;class rs{constructor(e=0,n=0,r=0,o=rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,u=o[0],c=o[4],d=o[8],p=o[1],m=o[5],v=o[9],_=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-c,u)):(this._x=Math.atan2(g,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-c,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-_t(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-c,m));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-_t(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,M),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rs.DEFAULT_ORDER="XYZ";class ng{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let tv=0;const em=new ie,Ns=new Qs,Hi=new nn,rl=new ie,Oa=new ie,nv=new ie,iv=new Qs,tm=new ie(1,0,0),nm=new ie(0,1,0),im=new ie(0,0,1),rm={type:"added"},rv={type:"removed"},Is={type:"childadded",child:null},Ic={type:"childremoved",child:null};class Yn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tv++}),this.uuid=qa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Yn.DEFAULT_UP.clone();const e=new ie,n=new rs,r=new Qs,o=new ie(1,1,1);function u(){r.setFromEuler(n,!1)}function c(){n.setFromQuaternion(r,void 0,!1)}n._onChange(u),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new nn},normalMatrix:{value:new lt}}),this.matrix=new nn,this.matrixWorld=new nn,this.matrixAutoUpdate=Yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ng,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,n){return Ns.setFromAxisAngle(e,n),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,n){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Hi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?rl.copy(e):rl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hi.lookAt(Oa,rl,this.up):Hi.lookAt(rl,Oa,this.up),this.quaternion.setFromRotationMatrix(Hi),o&&(Hi.extractRotation(o.matrixWorld),Ns.setFromRotationMatrix(Hi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),Is.child=e,this.dispatchEvent(Is),Is.child=null):Mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(rv),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),Is.child=e,this.dispatchEvent(Is),Is.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,n);if(c!==void 0)return c}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,nv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,iv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,u=this.matrix.elements;u[12]+=n-u[0]*n-u[4]*r-u[8]*o,u[13]+=r-u[1]*n-u[5]*r-u[9]*o,u[14]+=o-u[2]*n-u[6]*r-u[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const u=this.children;for(let c=0,d=u.length;c<d;c++)u[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=u(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const _=p[m];u(e.shapes,_)}else u(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(e.materials,this.material[p]));o.material=d}else o.material=u(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];o.animations.push(u(e.animations,p))}}if(n){const d=c(e.geometries),p=c(e.materials),m=c(e.textures),v=c(e.images),_=c(e.shapes),g=c(e.skeletons),M=c(e.animations),w=c(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),_.length>0&&(r.shapes=_),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),w.length>0&&(r.nodes=w)}return r.object=o,r;function c(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}Yn.DEFAULT_UP=new ie(0,1,0);Yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sl extends Yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sv={type:"move"};class Uc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,u=null,c=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){c=!0;for(const C of e.hand.values()){const S=n.getJointPose(C,r),x=this._getHandJoint(m,C);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const v=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],g=v.position.distanceTo(_.position),M=.02,w=.005;m.inputState.pinching&&g>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&g<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(u=n.getPose(e.gripSpace,r),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&u!==null&&(o=u),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sv)))}return d!==null&&(d.visible=o!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=c!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new sl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const ig={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},al={h:0,s:0,l:0};function Fc(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class Ct{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=gt.workingColorSpace){return this.r=e,this.g=n,this.b=r,gt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=gt.workingColorSpace){if(e=Y_(e,1),n=_t(n,0,1),r=_t(r,0,1),n===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+n):r+n-r*n,c=2*r-u;this.r=Fc(c,u,e+1/3),this.g=Fc(c,u,e),this.b=Fc(c,u,e-1/3)}return gt.colorSpaceToWorking(this,o),this}setStyle(e,n=ti){function r(u){u!==void 0&&parseFloat(u)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const c=o[1],d=o[2];switch(c){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,n);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,n);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,n);break;default:st("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=o[1],c=u.length;if(c===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(u,16),n);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const r=ig[e.toLowerCase()];return r!==void 0?this.setHex(r,n):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return gt.workingToColorSpace(En.copy(this),e),Math.round(_t(En.r*255,0,255))*65536+Math.round(_t(En.g*255,0,255))*256+Math.round(_t(En.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.workingToColorSpace(En.copy(this),n);const r=En.r,o=En.g,u=En.b,c=Math.max(r,o,u),d=Math.min(r,o,u);let p,m;const v=(d+c)/2;if(d===c)p=0,m=0;else{const _=c-d;switch(m=v<=.5?_/(c+d):_/(2-c-d),c){case r:p=(o-u)/_+(o<u?6:0);break;case o:p=(u-r)/_+2;break;case u:p=(r-o)/_+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,n=gt.workingColorSpace){return gt.workingToColorSpace(En.copy(this),n),e.r=En.r,e.g=En.g,e.b=En.b,e}getStyle(e=ti){gt.workingToColorSpace(En.copy(this),e);const n=En.r,r=En.g,o=En.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+n,yr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(yr),e.getHSL(al);const r=bc(yr.h,al.h,n),o=bc(yr.s,al.s,n),u=bc(yr.l,al.l,n);return this.setHSL(r,o,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,u=e.elements;return this.r=u[0]*n+u[3]*r+u[6]*o,this.g=u[1]*n+u[4]*r+u[7]*o,this.b=u[2]*n+u[5]*r+u[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const En=new Ct;Ct.NAMES=ig;class av extends Yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rs,this.environmentIntensity=1,this.environmentRotation=new rs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const di=new ie,Gi=new ie,Oc=new ie,Wi=new ie,Us=new ie,Fs=new ie,sm=new ie,Bc=new ie,kc=new ie,zc=new ie,Vc=new jt,Hc=new jt,Gc=new jt;class mi{constructor(e=new ie,n=new ie,r=new ie){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),di.subVectors(e,n),o.cross(di);const u=o.lengthSq();return u>0?o.multiplyScalar(1/Math.sqrt(u)):o.set(0,0,0)}static getBarycoord(e,n,r,o,u){di.subVectors(o,n),Gi.subVectors(r,n),Oc.subVectors(e,n);const c=di.dot(di),d=di.dot(Gi),p=di.dot(Oc),m=Gi.dot(Gi),v=Gi.dot(Oc),_=c*m-d*d;if(_===0)return u.set(0,0,0),null;const g=1/_,M=(m*p-d*v)*g,w=(c*v-d*p)*g;return u.set(1-M-w,w,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,n,r,o,u,c,d,p){return this.getBarycoord(e,n,r,o,Wi)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Wi.x),p.addScaledVector(c,Wi.y),p.addScaledVector(d,Wi.z),p)}static getInterpolatedAttribute(e,n,r,o,u,c){return Vc.setScalar(0),Hc.setScalar(0),Gc.setScalar(0),Vc.fromBufferAttribute(e,n),Hc.fromBufferAttribute(e,r),Gc.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Vc,u.x),c.addScaledVector(Hc,u.y),c.addScaledVector(Gc,u.z),c}static isFrontFacing(e,n,r,o){return di.subVectors(r,n),Gi.subVectors(e,n),di.cross(Gi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),di.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return mi.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,u){return mi.getInterpolation(e,this.a,this.b,this.c,n,r,o,u)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,u=this.c;let c,d;Us.subVectors(o,r),Fs.subVectors(u,r),Bc.subVectors(e,r);const p=Us.dot(Bc),m=Fs.dot(Bc);if(p<=0&&m<=0)return n.copy(r);kc.subVectors(e,o);const v=Us.dot(kc),_=Fs.dot(kc);if(v>=0&&_<=v)return n.copy(o);const g=p*_-v*m;if(g<=0&&p>=0&&v<=0)return c=p/(p-v),n.copy(r).addScaledVector(Us,c);zc.subVectors(e,u);const M=Us.dot(zc),w=Fs.dot(zc);if(w>=0&&M<=w)return n.copy(u);const C=M*m-p*w;if(C<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(r).addScaledVector(Fs,d);const S=v*w-M*_;if(S<=0&&_-v>=0&&M-w>=0)return sm.subVectors(u,o),d=(_-v)/(_-v+(M-w)),n.copy(o).addScaledVector(sm,d);const x=1/(S+C+g);return c=C*x,d=g*x,n.copy(r).addScaledVector(Us,c).addScaledVector(Fs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class $a{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(hi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(hi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=hi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(n===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let c=0,d=u.count;c<d;c++)e.isMesh===!0?e.getVertexPosition(c,hi):hi.fromBufferAttribute(u,c),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ol.copy(r.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const o=e.children;for(let u=0,c=o.length;u<c;u++)this.expandByObject(o[u],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),ll.subVectors(this.max,Ba),Os.subVectors(e.a,Ba),Bs.subVectors(e.b,Ba),ks.subVectors(e.c,Ba),Mr.subVectors(Bs,Os),Er.subVectors(ks,Bs),qr.subVectors(Os,ks);let n=[0,-Mr.z,Mr.y,0,-Er.z,Er.y,0,-qr.z,qr.y,Mr.z,0,-Mr.x,Er.z,0,-Er.x,qr.z,0,-qr.x,-Mr.y,Mr.x,0,-Er.y,Er.x,0,-qr.y,qr.x,0];return!Wc(n,Os,Bs,ks,ll)||(n=[1,0,0,0,1,0,0,0,1],!Wc(n,Os,Bs,ks,ll))?!1:(ul.crossVectors(Mr,Er),n=[ul.x,ul.y,ul.z],Wc(n,Os,Bs,ks,ll))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Xi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],hi=new ie,ol=new $a,Os=new ie,Bs=new ie,ks=new ie,Mr=new ie,Er=new ie,qr=new ie,Ba=new ie,ll=new ie,ul=new ie,$r=new ie;function Wc(s,e,n,r,o){for(let u=0,c=s.length-3;u<=c;u+=3){$r.fromArray(s,u);const d=o.x*Math.abs($r.x)+o.y*Math.abs($r.y)+o.z*Math.abs($r.z),p=e.dot($r),m=n.dot($r),v=r.dot($r);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const tn=new ie,cl=new St;let ov=0;class Pi extends ss{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ov++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=Xp,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,u=this.itemSize;o<u;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)cl.fromBufferAttribute(this,n),cl.applyMatrix3(e),this.setXY(n,cl.x,cl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix3(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=Fa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Fa(n,this.array)),n}setX(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Fa(n,this.array)),n}setY(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Fa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Fa(n,this.array)),n}setW(e,n){return this.normalized&&(n=Bn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),o=Bn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,u){return e*=this.itemSize,this.normalized&&(n=Bn(n,this.array),r=Bn(r,this.array),o=Bn(o,this.array),u=Bn(u,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class rg extends Pi{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class sg extends Pi{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class ji extends Pi{constructor(e,n,r){super(new Float32Array(e),n,r)}}const lv=new $a,ka=new ie,Xc=new ie;class ad{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):lv.setFromPoints(e).getCenter(r);let o=0;for(let u=0,c=e.length;u<c;u++)o=Math.max(o,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ka.subVectors(e,this.center);const n=ka.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(ka,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ka.copy(e.center).add(Xc)),this.expandByPoint(ka.copy(e.center).sub(Xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let uv=0;const ei=new nn,Yc=new Yn,zs=new ie,Xn=new $a,za=new $a,fn=new ie;class er extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=qa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(H_(e)?sg:rg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new lt().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,n,r){return ei.makeTranslation(e,n,r),this.applyMatrix4(ei),this}scale(e,n,r){return ei.makeScale(e,n,r),this.applyMatrix4(ei),this}lookAt(e){return Yc.lookAt(e),Yc.updateMatrix(),this.applyMatrix4(Yc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,u=e.length;o<u;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new ji(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const u=e[o];n.setXYZ(o,u.x,u.y,u.z||0)}e.length>n.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $a);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const u=n[r];Xn.setFromBufferAttribute(u),this.morphTargetsRelative?(fn.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(fn),fn.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(fn)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ad);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),n)for(let u=0,c=n.length;u<c;u++){const d=n[u];za.setFromBufferAttribute(d),this.morphTargetsRelative?(fn.addVectors(Xn.min,za.min),Xn.expandByPoint(fn),fn.addVectors(Xn.max,za.max),Xn.expandByPoint(fn)):(Xn.expandByPoint(za.min),Xn.expandByPoint(za.max))}Xn.getCenter(r);let o=0;for(let u=0,c=e.count;u<c;u++)fn.fromBufferAttribute(e,u),o=Math.max(o,r.distanceToSquared(fn));if(n)for(let u=0,c=n.length;u<c;u++){const d=n[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)fn.fromBufferAttribute(d,m),p&&(zs.fromBufferAttribute(e,m),fn.add(zs)),o=Math.max(o,r.distanceToSquared(fn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,u=n.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new Pi(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const d=[],p=[];for(let T=0;T<r.count;T++)d[T]=new ie,p[T]=new ie;const m=new ie,v=new ie,_=new ie,g=new St,M=new St,w=new St,C=new ie,S=new ie;function x(T,L,X){m.fromBufferAttribute(r,T),v.fromBufferAttribute(r,L),_.fromBufferAttribute(r,X),g.fromBufferAttribute(u,T),M.fromBufferAttribute(u,L),w.fromBufferAttribute(u,X),v.sub(m),_.sub(m),M.sub(g),w.sub(g);const z=1/(M.x*w.y-w.x*M.y);isFinite(z)&&(C.copy(v).multiplyScalar(w.y).addScaledVector(_,-M.y).multiplyScalar(z),S.copy(_).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(z),d[T].add(C),d[L].add(C),d[X].add(C),p[T].add(S),p[L].add(S),p[X].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let T=0,L=I.length;T<L;++T){const X=I[T],z=X.start,Z=X.count;for(let re=z,he=z+Z;re<he;re+=3)x(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const F=new ie,R=new ie,U=new ie,P=new ie;function O(T){U.fromBufferAttribute(o,T),P.copy(U);const L=d[T];F.copy(L),F.sub(U.multiplyScalar(U.dot(L))).normalize(),R.crossVectors(P,L);const z=R.dot(p[T])<0?-1:1;c.setXYZW(T,F.x,F.y,F.z,z)}for(let T=0,L=I.length;T<L;++T){const X=I[T],z=X.start,Z=X.count;for(let re=z,he=z+Z;re<he;re+=3)O(e.getX(re+0)),O(e.getX(re+1)),O(e.getX(re+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new Pi(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new ie,u=new ie,c=new ie,d=new ie,p=new ie,m=new ie,v=new ie,_=new ie;if(e)for(let g=0,M=e.count;g<M;g+=3){const w=e.getX(g+0),C=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(n,w),u.fromBufferAttribute(n,C),c.fromBufferAttribute(n,S),v.subVectors(c,u),_.subVectors(o,u),v.cross(_),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,C),m.fromBufferAttribute(r,S),d.add(v),p.add(v),m.add(v),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(S,m.x,m.y,m.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),u.fromBufferAttribute(n,g+1),c.fromBufferAttribute(n,g+2),v.subVectors(c,u),_.subVectors(o,u),v.cross(_),r.setXYZ(g+0,v.x,v.y,v.z),r.setXYZ(g+1,v.x,v.y,v.z),r.setXYZ(g+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)fn.fromBufferAttribute(e,n),fn.normalize(),e.setXYZ(n,fn.x,fn.y,fn.z)}toNonIndexed(){function e(d,p){const m=d.array,v=d.itemSize,_=d.normalized,g=new m.constructor(p.length*v);let M=0,w=0;for(let C=0,S=p.length;C<S;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*v;for(let x=0;x<v;x++)g[w++]=m[M++]}return new Pi(g,v,_)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new er,r=this.index.array,o=this.attributes;for(const d in o){const p=o[d],m=e(p,r);n.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,_=m.length;v<_;v++){const g=m[v],M=e(g,r);p.push(M)}n.morphAttributes[d]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let d=0,p=c.length;d<p;d++){const m=c[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const o={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let _=0,g=m.length;_<g;_++){const M=m[_];v.push(M.toJSON(e.data))}v.length>0&&(o[p]=v,u=!0)}u&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const m in o){const v=o[m];this.setAttribute(m,v.clone(n))}const u=e.morphAttributes;for(const m in u){const v=[],_=u[m];for(let g=0,M=_.length;g<M;g++)v.push(_[g].clone(n));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let m=0,v=c.length;m<v;m++){const _=c[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let cv=0;class zl extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cv++}),this.uuid=qa(),this.name="",this.type="Material",this.blending=Ws,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sf,this.blendDst=af,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Wp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){st(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){st(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(r.blending=this.blending),this.side!==Cr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==sf&&(r.blendSrc=this.blendSrc),this.blendDst!==af&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==qs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Wp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(u){const c=[];for(const d in u){const p=u[d];delete p.metadata,c.push(p)}return c}if(n){const u=o(e.textures),c=o(e.images);u.length>0&&(r.textures=u),c.length>0&&(r.images=c)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new St().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new St().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let u=0;u!==o;++u)r[u]=n[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Yi=new ie,qc=new ie,fl=new ie,Tr=new ie,$c=new ie,dl=new ie,Kc=new ie;class fv{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Yi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,n),Yi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){qc.copy(e).add(n).multiplyScalar(.5),fl.copy(n).sub(e).normalize(),Tr.copy(this.origin).sub(qc);const u=e.distanceTo(n)*.5,c=-this.direction.dot(fl),d=Tr.dot(this.direction),p=-Tr.dot(fl),m=Tr.lengthSq(),v=Math.abs(1-c*c);let _,g,M,w;if(v>0)if(_=c*p-d,g=c*d-p,w=u*v,_>=0)if(g>=-w)if(g<=w){const C=1/v;_*=C,g*=C,M=_*(_+c*g+2*d)+g*(c*_+g+2*p)+m}else g=u,_=Math.max(0,-(c*g+d)),M=-_*_+g*(g+2*p)+m;else g=-u,_=Math.max(0,-(c*g+d)),M=-_*_+g*(g+2*p)+m;else g<=-w?(_=Math.max(0,-(-c*u+d)),g=_>0?-u:Math.min(Math.max(-u,-p),u),M=-_*_+g*(g+2*p)+m):g<=w?(_=0,g=Math.min(Math.max(-u,-p),u),M=g*(g+2*p)+m):(_=Math.max(0,-(c*u+d)),g=_>0?u:Math.min(Math.max(-u,-p),u),M=-_*_+g*(g+2*p)+m);else g=c>0?-u:u,_=Math.max(0,-(c*g+d)),M=-_*_+g*(g+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(qc).addScaledVector(fl,g),M}intersectSphere(e,n){Yi.subVectors(e.center,this.origin);const r=Yi.dot(this.direction),o=Yi.dot(Yi)-r*r,u=e.radius*e.radius;if(o>u)return null;const c=Math.sqrt(u-o),d=r-c,p=r+c;return p<0?null:d<0?this.at(p,n):this.at(d,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,u,c,d,p;const m=1/this.direction.x,v=1/this.direction.y,_=1/this.direction.z,g=this.origin;return m>=0?(r=(e.min.x-g.x)*m,o=(e.max.x-g.x)*m):(r=(e.max.x-g.x)*m,o=(e.min.x-g.x)*m),v>=0?(u=(e.min.y-g.y)*v,c=(e.max.y-g.y)*v):(u=(e.max.y-g.y)*v,c=(e.min.y-g.y)*v),r>c||u>o||((u>r||isNaN(r))&&(r=u),(c<o||isNaN(o))&&(o=c),_>=0?(d=(e.min.z-g.z)*_,p=(e.max.z-g.z)*_):(d=(e.max.z-g.z)*_,p=(e.min.z-g.z)*_),r>p||d>o)||((d>r||r!==r)&&(r=d),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,n,r,o,u){$c.subVectors(n,e),dl.subVectors(r,e),Kc.crossVectors($c,dl);let c=this.direction.dot(Kc),d;if(c>0){if(o)return null;d=1}else if(c<0)d=-1,c=-c;else return null;Tr.subVectors(this.origin,e);const p=d*this.direction.dot(dl.crossVectors(Tr,dl));if(p<0)return null;const m=d*this.direction.dot($c.cross(Tr));if(m<0||p+m>c)return null;const v=-d*Tr.dot(Kc);return v<0?null:this.at(v/c,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ag extends zl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rs,this.combine=Bm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const am=new nn,Kr=new fv,hl=new ad,om=new ie,pl=new ie,ml=new ie,gl=new ie,Zc=new ie,_l=new ie,lm=new ie,vl=new ie;class Di extends Yn{constructor(e=new er,n=new ag){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,c=o.length;u<c;u++){const d=o[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,u=r.morphAttributes.position,c=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(u&&d){_l.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],_=u[p];v!==0&&(Zc.fromBufferAttribute(_,e),c?_l.addScaledVector(Zc,v):_l.addScaledVector(Zc.sub(n),v))}n.add(_l)}return n}raycast(e,n){const r=this.geometry,o=this.material,u=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),hl.copy(r.boundingSphere),hl.applyMatrix4(u),Kr.copy(e.ray).recast(e.near),!(hl.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(hl,om)===null||Kr.origin.distanceToSquared(om)>(e.far-e.near)**2))&&(am.copy(u).invert(),Kr.copy(e.ray).applyMatrix4(am),!(r.boundingBox!==null&&Kr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Kr)))}_computeIntersections(e,n,r){let o;const u=this.geometry,c=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,_=u.attributes.normal,g=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(c))for(let w=0,C=g.length;w<C;w++){const S=g[w],x=c[S.materialIndex],I=Math.max(S.start,M.start),F=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let R=I,U=F;R<U;R+=3){const P=d.getX(R),O=d.getX(R+1),T=d.getX(R+2);o=xl(this,x,e,r,m,v,_,P,O,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let S=w,x=C;S<x;S+=3){const I=d.getX(S),F=d.getX(S+1),R=d.getX(S+2);o=xl(this,c,e,r,m,v,_,I,F,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let w=0,C=g.length;w<C;w++){const S=g[w],x=c[S.materialIndex],I=Math.max(S.start,M.start),F=Math.min(p.count,Math.min(S.start+S.count,M.start+M.count));for(let R=I,U=F;R<U;R+=3){const P=R,O=R+1,T=R+2;o=xl(this,x,e,r,m,v,_,P,O,T),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let S=w,x=C;S<x;S+=3){const I=S,F=S+1,R=S+2;o=xl(this,c,e,r,m,v,_,I,F,R),o&&(o.faceIndex=Math.floor(S/3),n.push(o))}}}}function dv(s,e,n,r,o,u,c,d){let p;if(e.side===kn?p=r.intersectTriangle(c,u,o,!0,d):p=r.intersectTriangle(o,u,c,e.side===Cr,d),p===null)return null;vl.copy(d),vl.applyMatrix4(s.matrixWorld);const m=n.ray.origin.distanceTo(vl);return m<n.near||m>n.far?null:{distance:m,point:vl.clone(),object:s}}function xl(s,e,n,r,o,u,c,d,p,m){s.getVertexPosition(d,pl),s.getVertexPosition(p,ml),s.getVertexPosition(m,gl);const v=dv(s,e,n,r,pl,ml,gl,lm);if(v){const _=new ie;mi.getBarycoord(lm,pl,ml,gl,_),o&&(v.uv=mi.getInterpolatedAttribute(o,d,p,m,_,new St)),u&&(v.uv1=mi.getInterpolatedAttribute(u,d,p,m,_,new St)),c&&(v.normal=mi.getInterpolatedAttribute(c,d,p,m,_,new ie),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const g={a:d,b:p,c:m,normal:new ie,materialIndex:0};mi.getNormal(pl,ml,gl,g.normal),v.face=g,v.barycoord=_}return v}class hv extends bn{constructor(e=null,n=1,r=1,o,u,c,d,p,m=gn,v=gn,_,g){super(null,c,d,p,m,v,o,u,_,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const jc=new ie,pv=new ie,mv=new lt;class jr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=jc.subVectors(r,n).cross(pv.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(jc),u=this.normal.dot(o);if(u===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/u;return r===!0&&(c<0||c>1)?null:n.copy(e.start).addScaledVector(o,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||mv.getNormalMatrix(e),o=this.coplanarPoint(jc).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new ad,gv=new St(.5,.5),Sl=new ie;class og{constructor(e=new jr,n=new jr,r=new jr,o=new jr,u=new jr,c=new jr){this.planes=[e,n,r,o,u,c]}set(e,n,r,o,u,c){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(r),d[3].copy(o),d[4].copy(u),d[5].copy(c),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Ri,r=!1){const o=this.planes,u=e.elements,c=u[0],d=u[1],p=u[2],m=u[3],v=u[4],_=u[5],g=u[6],M=u[7],w=u[8],C=u[9],S=u[10],x=u[11],I=u[12],F=u[13],R=u[14],U=u[15];if(o[0].setComponents(m-c,M-v,x-w,U-I).normalize(),o[1].setComponents(m+c,M+v,x+w,U+I).normalize(),o[2].setComponents(m+d,M+_,x+C,U+F).normalize(),o[3].setComponents(m-d,M-_,x-C,U-F).normalize(),r)o[4].setComponents(p,g,S,R).normalize(),o[5].setComponents(m-p,M-g,x-S,U-R).normalize();else if(o[4].setComponents(m-p,M-g,x-S,U-R).normalize(),n===Ri)o[5].setComponents(m+p,M+g,x+S,U+R).normalize();else if(n===Fl)o[5].setComponents(p,g,S,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Zr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){Zr.center.set(0,0,0);const n=gv.distanceTo(e.center);return Zr.radius=.7071067811865476+n,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let u=0;u<6;u++)if(n[u].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Sl.x=o.normal.x>0?e.max.x:e.min.x,Sl.y=o.normal.y>0?e.max.y:e.min.y,Sl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Sl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class lg extends bn{constructor(e=[],n=ns,r,o,u,c,d,p,m,v){super(e,n,r,o,u,c,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ks extends bn{constructor(e,n,r=Li,o,u,c,d=gn,p=gn,m,v=Ji,_=1){if(v!==Ji&&v!==ts)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:_};super(g,o,u,c,d,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sd(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class _v extends Ks{constructor(e,n=Li,r=ns,o,u,c=gn,d=gn,p,m=Ji){const v={width:e,height:e,depth:1},_=[v,v,v,v,v,v];super(e,e,n,r,o,u,c,d,p,m),this.image=_,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class ug extends bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ka extends er{constructor(e=1,n=1,r=1,o=1,u=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:u,depthSegments:c};const d=this;o=Math.floor(o),u=Math.floor(u),c=Math.floor(c);const p=[],m=[],v=[],_=[];let g=0,M=0;w("z","y","x",-1,-1,r,n,e,c,u,0),w("z","y","x",1,-1,r,n,-e,c,u,1),w("x","z","y",1,1,e,r,n,o,c,2),w("x","z","y",1,-1,e,r,-n,o,c,3),w("x","y","z",1,-1,e,n,r,o,u,4),w("x","y","z",-1,-1,e,n,-r,o,u,5),this.setIndex(p),this.setAttribute("position",new ji(m,3)),this.setAttribute("normal",new ji(v,3)),this.setAttribute("uv",new ji(_,2));function w(C,S,x,I,F,R,U,P,O,T,L){const X=R/O,z=U/T,Z=R/2,re=U/2,he=P/2,q=O+1,oe=T+1;let Y=0,H=0;const ue=new ie;for(let le=0;le<oe;le++){const N=le*z-re;for(let K=0;K<q;K++){const Ie=K*X-Z;ue[C]=Ie*I,ue[S]=N*F,ue[x]=he,m.push(ue.x,ue.y,ue.z),ue[C]=0,ue[S]=0,ue[x]=P>0?1:-1,v.push(ue.x,ue.y,ue.z),_.push(K/O),_.push(1-le/T),Y+=1}}for(let le=0;le<T;le++)for(let N=0;N<O;N++){const K=g+N+q*le,Ie=g+N+q*(le+1),Ge=g+(N+1)+q*(le+1),ke=g+(N+1)+q*le;p.push(K,Ie,ke),p.push(Ie,Ge,ke),H+=6}d.addGroup(M,H,L),M+=H,g+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Za extends er{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const u=e/2,c=n/2,d=Math.floor(r),p=Math.floor(o),m=d+1,v=p+1,_=e/d,g=n/p,M=[],w=[],C=[],S=[];for(let x=0;x<v;x++){const I=x*g-c;for(let F=0;F<m;F++){const R=F*_-u;w.push(R,-I,0),C.push(0,0,1),S.push(F/d),S.push(1-x/p)}}for(let x=0;x<p;x++)for(let I=0;I<d;I++){const F=I+m*x,R=I+m*(x+1),U=I+1+m*(x+1),P=I+1+m*x;M.push(F,R,P),M.push(R,U,P)}this.setIndex(M),this.setAttribute("position",new ji(w,3)),this.setAttribute("normal",new ji(C,3)),this.setAttribute("uv",new ji(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Za(e.width,e.height,e.widthSegments,e.heightSegments)}}function Zs(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(um(o))o.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(um(o[0])){const u=[];for(let c=0,d=o.length;c<d;c++)u[c]=o[c].clone();e[n][r]=u}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Cn(s){const e={};for(let n=0;n<s.length;n++){const r=Zs(s[n]);for(const o in r)e[o]=r[o]}return e}function um(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function vv(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function cg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}const xv={clone:Zs,merge:Cn};var Sv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,yv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class _i extends zl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sv,this.fragmentShader=yv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zs(e.uniforms),this.uniformsGroups=vv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new Ct().setHex(o.value);break;case"v2":this.uniforms[r].value=new St().fromArray(o.value);break;case"v3":this.uniforms[r].value=new ie().fromArray(o.value);break;case"v4":this.uniforms[r].value=new jt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new lt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new nn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Mv extends _i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ev extends zl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Tv extends zl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const yl=new ie,Ml=new Qs,Ei=new ie;class fg extends Yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new nn,this.projectionMatrix=new nn,this.projectionMatrixInverse=new nn,this.coordinateSystem=Ri,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yl,Ml,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Ml,Ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(yl,Ml,Ei),Ei.x===1&&Ei.y===1&&Ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yl,Ml,Ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const wr=new ie,cm=new St,fm=new St;class pi extends fg{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Yf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Yf*2*Math.atan(Math.tan(Cc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,n){return this.getViewBounds(e,cm,fm),n.subVectors(fm,cm)}setViewOffset(e,n,r,o,u,c){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Cc*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,u=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,m=c.fullHeight;u+=c.offsetX*o/p,n-=c.offsetY*r/m,o*=c.width/p,r*=c.height/m}const d=this.filmOffset;d!==0&&(u+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class od extends fg{constructor(e=-1,n=1,r=1,o=-1,u=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=u,this.far=c,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,u,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=u,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let u=r-e,c=r+e,d=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,c=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,c,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Vs=-90,Hs=1;class wv extends Yn{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new pi(Vs,Hs,e,n);o.layers=this.layers,this.add(o);const u=new pi(Vs,Hs,e,n);u.layers=this.layers,this.add(u);const c=new pi(Vs,Hs,e,n);c.layers=this.layers,this.add(c);const d=new pi(Vs,Hs,e,n);d.layers=this.layers,this.add(d);const p=new pi(Vs,Hs,e,n);p.layers=this.layers,this.add(p);const m=new pi(Vs,Hs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,u,c,d,p]=n;for(const m of n)this.remove(m);if(e===Ri)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Fl)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,c,d,p,m,v]=this.children,_=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,m),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(n,v),e.setRenderTarget(_,g,M),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class Av extends pi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const dd=class dd{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const u=this.elements;return u[0]=e,u[2]=n,u[1]=r,u[3]=o,this}};dd.prototype.isMatrix2=!0;let dm=dd;function hm(s,e,n,r){const o=Rv(r);switch(n){case jm:return s*e;case Jm:return s*e/o.components*o.byteLength;case ed:return s*e/o.components*o.byteLength;case is:return s*e*2/o.components*o.byteLength;case td:return s*e*2/o.components*o.byteLength;case Qm:return s*e*3/o.components*o.byteLength;case gi:return s*e*4/o.components*o.byteLength;case nd:return s*e*4/o.components*o.byteLength;case Rl:case Cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case bl:case Pl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case _f:case xf:return Math.max(s,16)*Math.max(e,8)/4;case gf:case vf:return Math.max(s,8)*Math.max(e,8)/2;case Sf:case yf:case Ef:case Tf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Mf:case Dl:case wf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Af:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Rf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case bf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Df:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Nf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case If:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Of:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Bf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case kf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case zf:case Vf:case Hf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Gf:case Wf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Nl:case Xf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Rv(s){switch(s){case ni:case qm:return{byteLength:1,components:1};case Xa:case $m:case Qi:return{byteLength:2,components:1};case Qf:case Jf:return{byteLength:2,components:4};case Li:case jf:case Ai:return{byteLength:4,components:1};case Km:case Zm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dg(){let s=null,e=!1,n=null,r=null;function o(u,c){n(u,c),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){n=u},setContext:function(u){s=u}}}function Cv(s){const e=new WeakMap;function n(d,p){const m=d.array,v=d.usage,_=m.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,m,v),d.onUploadCallback();let M;if(m instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)M=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=s.SHORT;else if(m instanceof Uint32Array)M=s.UNSIGNED_INT;else if(m instanceof Int32Array)M=s.INT;else if(m instanceof Int8Array)M=s.BYTE;else if(m instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:g,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function r(d,p,m){const v=p.array,_=p.updateRanges;if(s.bindBuffer(m,d),_.length===0)s.bufferSubData(m,0,v);else{_.sort((M,w)=>M.start-w.start);let g=0;for(let M=1;M<_.length;M++){const w=_[g],C=_[M];C.start<=w.start+w.count+1?w.count=Math.max(w.count,C.start+C.count-w.start):(++g,_[g]=C)}_.length=g+1;for(let M=0,w=_.length;M<w;M++){const C=_[M];s.bufferSubData(m,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function c(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:o,remove:u,update:c}}var bv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Nv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ov=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$v=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Kv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Zv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Qv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Jv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ex=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,tx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ix=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",ax=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ox=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,lx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,cx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,px=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,yx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ex=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ax=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Rx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Cx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Dx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ix=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Yx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$x=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,sS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_S=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ES=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,RS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,US=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,BS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,kS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$S=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ZS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ey=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ty=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ny=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ry=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ay=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,oy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ly=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ct={alphahash_fragment:bv,alphahash_pars_fragment:Pv,alphamap_fragment:Lv,alphamap_pars_fragment:Dv,alphatest_fragment:Nv,alphatest_pars_fragment:Iv,aomap_fragment:Uv,aomap_pars_fragment:Fv,batching_pars_vertex:Ov,batching_vertex:Bv,begin_vertex:kv,beginnormal_vertex:zv,bsdfs:Vv,iridescence_fragment:Hv,bumpmap_pars_fragment:Gv,clipping_planes_fragment:Wv,clipping_planes_pars_fragment:Xv,clipping_planes_pars_vertex:Yv,clipping_planes_vertex:qv,color_fragment:$v,color_pars_fragment:Kv,color_pars_vertex:Zv,color_vertex:jv,common:Qv,cube_uv_reflection_fragment:Jv,defaultnormal_vertex:ex,displacementmap_pars_vertex:tx,displacementmap_vertex:nx,emissivemap_fragment:ix,emissivemap_pars_fragment:rx,colorspace_fragment:sx,colorspace_pars_fragment:ax,envmap_fragment:ox,envmap_common_pars_fragment:lx,envmap_pars_fragment:ux,envmap_pars_vertex:cx,envmap_physical_pars_fragment:yx,envmap_vertex:fx,fog_vertex:dx,fog_pars_vertex:hx,fog_fragment:px,fog_pars_fragment:mx,gradientmap_pars_fragment:gx,lightmap_pars_fragment:_x,lights_lambert_fragment:vx,lights_lambert_pars_fragment:xx,lights_pars_begin:Sx,lights_toon_fragment:Mx,lights_toon_pars_fragment:Ex,lights_phong_fragment:Tx,lights_phong_pars_fragment:wx,lights_physical_fragment:Ax,lights_physical_pars_fragment:Rx,lights_fragment_begin:Cx,lights_fragment_maps:bx,lights_fragment_end:Px,lightprobes_pars_fragment:Lx,logdepthbuf_fragment:Dx,logdepthbuf_pars_fragment:Nx,logdepthbuf_pars_vertex:Ix,logdepthbuf_vertex:Ux,map_fragment:Fx,map_pars_fragment:Ox,map_particle_fragment:Bx,map_particle_pars_fragment:kx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Vx,morphinstance_vertex:Hx,morphcolor_vertex:Gx,morphnormal_vertex:Wx,morphtarget_pars_vertex:Xx,morphtarget_vertex:Yx,normal_fragment_begin:qx,normal_fragment_maps:$x,normal_pars_fragment:Kx,normal_pars_vertex:Zx,normal_vertex:jx,normalmap_pars_fragment:Qx,clearcoat_normal_fragment_begin:Jx,clearcoat_normal_fragment_maps:eS,clearcoat_pars_fragment:tS,iridescence_pars_fragment:nS,opaque_fragment:iS,packing:rS,premultiplied_alpha_fragment:sS,project_vertex:aS,dithering_fragment:oS,dithering_pars_fragment:lS,roughnessmap_fragment:uS,roughnessmap_pars_fragment:cS,shadowmap_pars_fragment:fS,shadowmap_pars_vertex:dS,shadowmap_vertex:hS,shadowmask_pars_fragment:pS,skinbase_vertex:mS,skinning_pars_vertex:gS,skinning_vertex:_S,skinnormal_vertex:vS,specularmap_fragment:xS,specularmap_pars_fragment:SS,tonemapping_fragment:yS,tonemapping_pars_fragment:MS,transmission_fragment:ES,transmission_pars_fragment:TS,uv_pars_fragment:wS,uv_pars_vertex:AS,uv_vertex:RS,worldpos_vertex:CS,background_vert:bS,background_frag:PS,backgroundCube_vert:LS,backgroundCube_frag:DS,cube_vert:NS,cube_frag:IS,depth_vert:US,depth_frag:FS,distance_vert:OS,distance_frag:BS,equirect_vert:kS,equirect_frag:zS,linedashed_vert:VS,linedashed_frag:HS,meshbasic_vert:GS,meshbasic_frag:WS,meshlambert_vert:XS,meshlambert_frag:YS,meshmatcap_vert:qS,meshmatcap_frag:$S,meshnormal_vert:KS,meshnormal_frag:ZS,meshphong_vert:jS,meshphong_frag:QS,meshphysical_vert:JS,meshphysical_frag:ey,meshtoon_vert:ty,meshtoon_frag:ny,points_vert:iy,points_frag:ry,shadow_vert:sy,shadow_frag:ay,sprite_vert:oy,sprite_frag:ly},Ne={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ie},probesMax:{value:new ie},probesResolution:{value:new ie}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},wi={basic:{uniforms:Cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Cn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Cn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Cn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ct(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Cn([Ne.points,Ne.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Cn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Cn([Ne.common,Ne.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Cn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Cn([Ne.sprite,Ne.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Cn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Cn([Ne.lights,Ne.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};wi.physical={uniforms:Cn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const El={r:0,b:0,g:0},uy=new nn,hg=new lt;hg.set(-1,0,0,0,1,0,0,0,1);function cy(s,e,n,r,o,u){const c=new Ct(0);let d=o===!0?0:1,p,m,v=null,_=0,g=null;function M(I){let F=I.isScene===!0?I.background:null;if(F&&F.isTexture){const R=I.backgroundBlurriness>0;F=e.get(F,R)}return F}function w(I){let F=!1;const R=M(I);R===null?S(c,d):R&&R.isColor&&(S(R,1),F=!0);const U=s.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,u):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,u),(s.autoClear||F)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(I,F){const R=M(F);R&&(R.isCubeTexture||R.mapping===kl)?(m===void 0&&(m=new Di(new Ka(1,1,1),new _i({name:"BackgroundCubeMaterial",uniforms:Zs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(U,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=R,m.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(uy.makeRotationFromEuler(F.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(hg),m.material.toneMapped=gt.getTransfer(R.colorSpace)!==Dt,(v!==R||_!==R.version||g!==s.toneMapping)&&(m.material.needsUpdate=!0,v=R,_=R.version,g=s.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new Di(new Za(2,2),new _i({name:"BackgroundMaterial",uniforms:Zs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=gt.getTransfer(R.colorSpace)!==Dt,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||_!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,v=R,_=R.version,g=s.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function S(I,F){I.getRGB(El,cg(s)),n.buffers.color.setClear(El.r,El.g,El.b,F,u)}function x(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return c},setClearColor:function(I,F=1){c.set(I),d=F,S(c,d)},getClearAlpha:function(){return d},setClearAlpha:function(I){d=I,S(c,d)},render:w,addToRenderList:C,dispose:x}}function fy(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let u=o,c=!1;function d(z,Z,re,he,q){let oe=!1;const Y=_(z,he,re,Z);u!==Y&&(u=Y,m(u.object)),oe=M(z,he,re,q),oe&&w(z,he,re,q),q!==null&&e.update(q,s.ELEMENT_ARRAY_BUFFER),(oe||c)&&(c=!1,R(z,Z,re,he),q!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function p(){return s.createVertexArray()}function m(z){return s.bindVertexArray(z)}function v(z){return s.deleteVertexArray(z)}function _(z,Z,re,he){const q=he.wireframe===!0;let oe=r[Z.id];oe===void 0&&(oe={},r[Z.id]=oe);const Y=z.isInstancedMesh===!0?z.id:0;let H=oe[Y];H===void 0&&(H={},oe[Y]=H);let ue=H[re.id];ue===void 0&&(ue={},H[re.id]=ue);let le=ue[q];return le===void 0&&(le=g(p()),ue[q]=le),le}function g(z){const Z=[],re=[],he=[];for(let q=0;q<n;q++)Z[q]=0,re[q]=0,he[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Z,enabledAttributes:re,attributeDivisors:he,object:z,attributes:{},index:null}}function M(z,Z,re,he){const q=u.attributes,oe=Z.attributes;let Y=0;const H=re.getAttributes();for(const ue in H)if(H[ue].location>=0){const N=q[ue];let K=oe[ue];if(K===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),N===void 0||N.attribute!==K||K&&N.data!==K.data)return!0;Y++}return u.attributesNum!==Y||u.index!==he}function w(z,Z,re,he){const q={},oe=Z.attributes;let Y=0;const H=re.getAttributes();for(const ue in H)if(H[ue].location>=0){let N=oe[ue];N===void 0&&(ue==="instanceMatrix"&&z.instanceMatrix&&(N=z.instanceMatrix),ue==="instanceColor"&&z.instanceColor&&(N=z.instanceColor));const K={};K.attribute=N,N&&N.data&&(K.data=N.data),q[ue]=K,Y++}u.attributes=q,u.attributesNum=Y,u.index=he}function C(){const z=u.newAttributes;for(let Z=0,re=z.length;Z<re;Z++)z[Z]=0}function S(z){x(z,0)}function x(z,Z){const re=u.newAttributes,he=u.enabledAttributes,q=u.attributeDivisors;re[z]=1,he[z]===0&&(s.enableVertexAttribArray(z),he[z]=1),q[z]!==Z&&(s.vertexAttribDivisor(z,Z),q[z]=Z)}function I(){const z=u.newAttributes,Z=u.enabledAttributes;for(let re=0,he=Z.length;re<he;re++)Z[re]!==z[re]&&(s.disableVertexAttribArray(re),Z[re]=0)}function F(z,Z,re,he,q,oe,Y){Y===!0?s.vertexAttribIPointer(z,Z,re,q,oe):s.vertexAttribPointer(z,Z,re,he,q,oe)}function R(z,Z,re,he){C();const q=he.attributes,oe=re.getAttributes(),Y=Z.defaultAttributeValues;for(const H in oe){const ue=oe[H];if(ue.location>=0){let le=q[H];if(le===void 0&&(H==="instanceMatrix"&&z.instanceMatrix&&(le=z.instanceMatrix),H==="instanceColor"&&z.instanceColor&&(le=z.instanceColor)),le!==void 0){const N=le.normalized,K=le.itemSize,Ie=e.get(le);if(Ie===void 0)continue;const Ge=Ie.buffer,ke=Ie.type,ne=Ie.bytesPerElement,ve=ke===s.INT||ke===s.UNSIGNED_INT||le.gpuType===jf;if(le.isInterleavedBufferAttribute){const me=le.data,Ue=me.stride,Qe=le.offset;if(me.isInstancedInterleavedBuffer){for(let Je=0;Je<ue.locationSize;Je++)x(ue.location+Je,me.meshPerAttribute);z.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Je=0;Je<ue.locationSize;Je++)S(ue.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let Je=0;Je<ue.locationSize;Je++)F(ue.location+Je,K/ue.locationSize,ke,N,Ue*ne,(Qe+K/ue.locationSize*Je)*ne,ve)}else{if(le.isInstancedBufferAttribute){for(let me=0;me<ue.locationSize;me++)x(ue.location+me,le.meshPerAttribute);z.isInstancedMesh!==!0&&he._maxInstanceCount===void 0&&(he._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let me=0;me<ue.locationSize;me++)S(ue.location+me);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let me=0;me<ue.locationSize;me++)F(ue.location+me,K/ue.locationSize,ke,N,K*ne,K/ue.locationSize*me*ne,ve)}}else if(Y!==void 0){const N=Y[H];if(N!==void 0)switch(N.length){case 2:s.vertexAttrib2fv(ue.location,N);break;case 3:s.vertexAttrib3fv(ue.location,N);break;case 4:s.vertexAttrib4fv(ue.location,N);break;default:s.vertexAttrib1fv(ue.location,N)}}}}I()}function U(){L();for(const z in r){const Z=r[z];for(const re in Z){const he=Z[re];for(const q in he){const oe=he[q];for(const Y in oe)v(oe[Y].object),delete oe[Y];delete he[q]}}delete r[z]}}function P(z){if(r[z.id]===void 0)return;const Z=r[z.id];for(const re in Z){const he=Z[re];for(const q in he){const oe=he[q];for(const Y in oe)v(oe[Y].object),delete oe[Y];delete he[q]}}delete r[z.id]}function O(z){for(const Z in r){const re=r[Z];for(const he in re){const q=re[he];if(q[z.id]===void 0)continue;const oe=q[z.id];for(const Y in oe)v(oe[Y].object),delete oe[Y];delete q[z.id]}}}function T(z){for(const Z in r){const re=r[Z],he=z.isInstancedMesh===!0?z.id:0,q=re[he];if(q!==void 0){for(const oe in q){const Y=q[oe];for(const H in Y)v(Y[H].object),delete Y[H];delete q[oe]}delete re[he],Object.keys(re).length===0&&delete r[Z]}}}function L(){X(),c=!0,u!==o&&(u=o,m(u.object))}function X(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:L,resetDefaultState:X,dispose:U,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:O,initAttributes:C,enableAttribute:S,disableUnusedAttributes:I}}function dy(s,e,n){let r;function o(p){r=p}function u(p,m){s.drawArrays(r,p,m),n.update(m,r,1)}function c(p,m,v){v!==0&&(s.drawArraysInstanced(r,p,m,v),n.update(m,r,v))}function d(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let g=0;for(let M=0;M<v;M++)g+=m[M];n.update(g,r,1)}this.setMode=o,this.render=u,this.renderInstances=c,this.renderMultiDraw=d}function hy(s,e,n,r){let o;function u(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(O){return!(O!==gi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const T=O===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==ni&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Ai&&!T)}function p(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const v=p(m);v!==m&&(st("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const _=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),S=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),I=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),F=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),U=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:w,maxTextureSize:C,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:I,maxVaryings:F,maxFragmentUniforms:R,maxSamples:U,samples:P}}function py(s){const e=this;let n=null,r=0,o=!1,u=!1;const c=new jr,d=new lt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(_,g){const M=_.length!==0||g||r!==0||o;return o=g,r=_.length,M},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,g){n=v(_,g,0)},this.setState=function(_,g,M){const w=_.clippingPlanes,C=_.clipIntersection,S=_.clipShadows,x=s.get(_);if(!o||w===null||w.length===0||u&&!S)u?v(null):m();else{const I=u?0:r,F=I*4;let R=x.clippingState||null;p.value=R,R=v(w,g,F,M);for(let U=0;U!==F;++U)R[U]=n[U];x.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function m(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(_,g,M,w){const C=_!==null?_.length:0;let S=null;if(C!==0){if(S=p.value,w!==!0||S===null){const x=M+C*4,I=g.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<x)&&(S=new Float32Array(x));for(let F=0,R=M;F!==C;++F,R+=4)c.copy(_[F]).applyMatrix4(I,d),c.normal.toArray(S,R),S[R+3]=c.constant}p.value=S,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,S}}const Rr=4,pm=[.125,.215,.35,.446,.526,.582],Jr=20,my=256,Va=new od,mm=new Ct;let Qc=null,Jc=0,ef=0,tf=!1;const gy=new ie;class gm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,u={}){const{size:c=256,position:d=gy}=u;Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,d),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,Jc,ef),this._renderer.xr.enabled=tf,e.scissorTest=!1,Gs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ns||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),Jc=this._renderer.getActiveCubeFace(),ef=this._renderer.getActiveMipmapLevel(),tf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:Qi,format:gi,colorSpace:Il,depthBuffer:!1},o=_m(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_m(e,n,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_y(u)),this._blurMaterial=xy(u,e,n),this._ggxMaterial=vy(u,e,n)}return o}_compileMaterial(e){const n=new Di(new er,e);this._renderer.compile(n,Va)}_sceneToCubeUV(e,n,r,o,u){const p=new pi(90,1,n,r),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,M=_.toneMapping;_.getClearColor(mm),_.toneMapping=Ci,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(o),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new Ka,new ag({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let x=!1;const I=e.background;I?I.isColor&&(S.color.copy(I),e.background=null,x=!0):(S.color.copy(mm),x=!0);for(let F=0;F<6;F++){const R=F%3;R===0?(p.up.set(0,m[F],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[F],u.y,u.z)):R===1?(p.up.set(0,0,m[F]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[F],u.z)):(p.up.set(0,m[F],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[F]));const U=this._cubeSize;Gs(o,R*U,F>2?U:0,U,U),_.setRenderTarget(o),x&&_.render(C,p),_.render(e,p)}_.toneMapping=M,_.autoClear=g,e.background=I}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===ns||e.mapping===$s;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=xm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vm());const u=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=u;const d=u.uniforms;d.envMap.value=e;const p=this._cubeSize;Gs(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(c,Va)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let u=1;u<o;u++)this._applyGGXFilter(e,u-1,u);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,u=this._pingPongRenderTarget,c=this._ggxMaterial,d=this._lodMeshes[r];d.material=c;const p=c.uniforms,m=r/(this._lodMeshes.length-1),v=n/(this._lodMeshes.length-1),_=Math.sqrt(m*m-v*v),g=0+m*1.25,M=_*g,{_lodMax:w}=this,C=this._sizeLods[r],S=3*C*(r>w-Rr?r-w+Rr:0),x=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=w-n,Gs(u,S,x,3*C,2*C),o.setRenderTarget(u),o.render(d,Va),p.envMap.value=u.texture,p.roughness.value=0,p.mipInt.value=w-r,Gs(e,S,x,3*C,2*C),o.setRenderTarget(e),o.render(d,Va)}_blur(e,n,r,o,u){const c=this._pingPongRenderTarget;this._halfBlur(e,c,n,r,o,"latitudinal",u),this._halfBlur(c,e,r,r,o,"longitudinal",u)}_halfBlur(e,n,r,o,u,c,d){const p=this._renderer,m=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Mt("blur direction must be either latitudinal or longitudinal!");const v=3,_=this._lodMeshes[o];_.material=m;const g=m.uniforms,M=this._sizeLods[r]-1,w=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*Jr-1),C=u/w,S=isFinite(u)?1+Math.floor(v*C):Jr;S>Jr&&st(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Jr}`);const x=[];let I=0;for(let O=0;O<Jr;++O){const T=O/C,L=Math.exp(-T*T/2);x.push(L),O===0?I+=L:O<S&&(I+=2*L)}for(let O=0;O<x.length;O++)x[O]=x[O]/I;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=x,g.latitudinal.value=c==="latitudinal",d&&(g.poleAxis.value=d);const{_lodMax:F}=this;g.dTheta.value=w,g.mipInt.value=F-r;const R=this._sizeLods[o],U=3*R*(o>F-Rr?o-F+Rr:0),P=4*(this._cubeSize-R);Gs(n,U,P,3*R,2*R),p.setRenderTarget(n),p.render(_,Va)}}function _y(s){const e=[],n=[],r=[];let o=s;const u=s-Rr+1+pm.length;for(let c=0;c<u;c++){const d=Math.pow(2,o);e.push(d);let p=1/d;c>s-Rr?p=pm[c-s+Rr-1]:c===0&&(p=0),n.push(p);const m=1/(d-2),v=-m,_=1+m,g=[v,v,_,v,_,_,v,v,_,_,v,_],M=6,w=6,C=3,S=2,x=1,I=new Float32Array(C*w*M),F=new Float32Array(S*w*M),R=new Float32Array(x*w*M);for(let P=0;P<M;P++){const O=P%3*2/3-1,T=P>2?0:-1,L=[O,T,0,O+2/3,T,0,O+2/3,T+1,0,O,T,0,O+2/3,T+1,0,O,T+1,0];I.set(L,C*w*P),F.set(g,S*w*P);const X=[P,P,P,P,P,P];R.set(X,x*w*P)}const U=new er;U.setAttribute("position",new Pi(I,C)),U.setAttribute("uv",new Pi(F,S)),U.setAttribute("faceIndex",new Pi(R,x)),r.push(new Di(U,null)),o>Rr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function _m(s,e,n){const r=new bi(s,e,n);return r.texture.mapping=kl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Gs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function vy(s,e,n){return new _i({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:my,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Vl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function xy(s,e,n){const r=new Float32Array(Jr),o=new ie(0,1,0);return new _i({name:"SphericalGaussianBlur",defines:{n:Jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function vm(){return new _i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function xm(){return new _i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function Vl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class pg extends bi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new lg(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Ka(5,5,5),u=new _i({name:"CubemapFromEquirect",uniforms:Zs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Ki});u.uniforms.tEquirect.value=n;const c=new Di(o,u),d=n.minFilter;return n.minFilter===es&&(n.minFilter=Tn),new wv(1,10,this).update(e,c),n.minFilter=d,c.geometry.dispose(),c.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const u=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(n,r,o);e.setRenderTarget(u)}}function Sy(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?c(g):u(g)}function u(g){if(g&&g.isTexture){const M=g.mapping;if(M===wc||M===Ac)if(e.has(g)){const w=e.get(g).texture;return d(w,g.mapping)}else{const w=g.image;if(w&&w.height>0){const C=new pg(w.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",m),d(C.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const M=g.mapping,w=M===wc||M===Ac,C=M===ns||M===$s;if(w||C){let S=n.get(g);const x=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==x)return r===null&&(r=new gm(s)),S=w?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),S.texture;if(S!==void 0)return S.texture;{const I=g.image;return w&&I&&I.height>0||C&&I&&p(I)?(r===null&&(r=new gm(s)),S=w?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,n.set(g,S),g.addEventListener("dispose",v),S.texture):null}}}return g}function d(g,M){return M===wc?g.mapping=ns:M===Ac&&(g.mapping=$s),g}function p(g){let M=0;const w=6;for(let C=0;C<w;C++)g[C]!==void 0&&M++;return M===w}function m(g){const M=g.target;M.removeEventListener("dispose",m);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(g){const M=g.target;M.removeEventListener("dispose",v);const w=n.get(M);w!==void 0&&(n.delete(M),w.dispose())}function _(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:_}}function yy(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&Xs("WebGLRenderer: "+r+" extension not supported."),o}}}function My(s,e,n,r){const o={},u=new WeakMap;function c(_){const g=_.target;g.index!==null&&e.remove(g.index);for(const w in g.attributes)e.remove(g.attributes[w]);g.removeEventListener("dispose",c),delete o[g.id];const M=u.get(g);M&&(e.remove(M),u.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function d(_,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,n.memory.geometries++),g}function p(_){const g=_.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function m(_){const g=[],M=_.index,w=_.attributes.position;let C=0;if(w===void 0)return;if(M!==null){const I=M.array;C=M.version;for(let F=0,R=I.length;F<R;F+=3){const U=I[F+0],P=I[F+1],O=I[F+2];g.push(U,P,P,O,O,U)}}else{const I=w.array;C=w.version;for(let F=0,R=I.length/3-1;F<R;F+=3){const U=F+0,P=F+1,O=F+2;g.push(U,P,P,O,O,U)}}const S=new(w.count>=65535?sg:rg)(g,1);S.version=C;const x=u.get(_);x&&e.remove(x),u.set(_,S)}function v(_){const g=u.get(_);if(g){const M=_.index;M!==null&&g.version<M.version&&m(_)}else m(_);return u.get(_)}return{get:d,update:p,getWireframeAttribute:v}}function Ey(s,e,n){let r;function o(_){r=_}let u,c;function d(_){u=_.type,c=_.bytesPerElement}function p(_,g){s.drawElements(r,g,u,_*c),n.update(g,r,1)}function m(_,g,M){M!==0&&(s.drawElementsInstanced(r,g,u,_*c,M),n.update(g,r,M))}function v(_,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,u,_,0,M);let C=0;for(let S=0;S<M;S++)C+=g[S];n.update(C,r,1)}this.setMode=o,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function Ty(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,c,d){switch(n.calls++,c){case s.TRIANGLES:n.triangles+=d*(u/3);break;case s.LINES:n.lines+=d*(u/2);break;case s.LINE_STRIP:n.lines+=d*(u-1);break;case s.LINE_LOOP:n.lines+=d*u;break;case s.POINTS:n.points+=d*u;break;default:Mt("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function wy(s,e,n){const r=new WeakMap,o=new jt;function u(c,d,p){const m=c.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=v!==void 0?v.length:0;let g=r.get(d);if(g===void 0||g.count!==_){let X=function(){T.dispose(),r.delete(d),d.removeEventListener("dispose",X)};var M=X;g!==void 0&&g.texture.dispose();const w=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],F=d.morphAttributes.color||[];let R=0;w===!0&&(R=1),C===!0&&(R=2),S===!0&&(R=3);let U=d.attributes.position.count*R,P=1;U>e.maxTextureSize&&(P=Math.ceil(U/e.maxTextureSize),U=e.maxTextureSize);const O=new Float32Array(U*P*4*_),T=new tg(O,U,P,_);T.type=Ai,T.needsUpdate=!0;const L=R*4;for(let z=0;z<_;z++){const Z=x[z],re=I[z],he=F[z],q=U*P*4*z;for(let oe=0;oe<Z.count;oe++){const Y=oe*L;w===!0&&(o.fromBufferAttribute(Z,oe),O[q+Y+0]=o.x,O[q+Y+1]=o.y,O[q+Y+2]=o.z,O[q+Y+3]=0),C===!0&&(o.fromBufferAttribute(re,oe),O[q+Y+4]=o.x,O[q+Y+5]=o.y,O[q+Y+6]=o.z,O[q+Y+7]=0),S===!0&&(o.fromBufferAttribute(he,oe),O[q+Y+8]=o.x,O[q+Y+9]=o.y,O[q+Y+10]=o.z,O[q+Y+11]=he.itemSize===4?o.w:1)}}g={count:_,texture:T,size:new St(U,P)},r.set(d,g),d.addEventListener("dispose",X)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",c.morphTexture,n);else{let w=0;for(let S=0;S<m.length;S++)w+=m[S];const C=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:u}}function Ay(s,e,n,r,o){let u=new WeakMap;function c(m){const v=o.render.frame,_=m.geometry,g=e.get(m,_);if(u.get(g)!==v&&(e.update(g),u.set(g,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),u.get(m)!==v&&(n.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&n.update(m.instanceColor,s.ARRAY_BUFFER),u.set(m,v))),m.isSkinnedMesh){const M=m.skeleton;u.get(M)!==v&&(M.update(),u.set(M,v))}return g}function d(){u=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),n.remove(v.instanceMatrix),v.instanceColor!==null&&n.remove(v.instanceColor)}return{update:c,dispose:d}}const Ry={[km]:"LINEAR_TONE_MAPPING",[zm]:"REINHARD_TONE_MAPPING",[Vm]:"CINEON_TONE_MAPPING",[Hm]:"ACES_FILMIC_TONE_MAPPING",[Wm]:"AGX_TONE_MAPPING",[Xm]:"NEUTRAL_TONE_MAPPING",[Gm]:"CUSTOM_TONE_MAPPING"};function Cy(s,e,n,r,o,u){const c=new bi(e,n,{type:s,depthBuffer:o,stencilBuffer:u,samples:r?4:0,depthTexture:o?new Ks(e,n):void 0}),d=new bi(e,n,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),p=new er;p.setAttribute("position",new ji([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new ji([0,2,0,0,2,0],2));const m=new Mv({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),v=new Di(p,m),_=new od(-1,1,1,-1,0,1);let g=null,M=null,w=!1,C,S=null,x=[],I=!1;this.setSize=function(F,R){c.setSize(F,R),d.setSize(F,R);for(let U=0;U<x.length;U++){const P=x[U];P.setSize&&P.setSize(F,R)}},this.setEffects=function(F){x=F,I=x.length>0&&x[0].isRenderPass===!0;const R=c.width,U=c.height;for(let P=0;P<x.length;P++){const O=x[P];O.setSize&&O.setSize(R,U)}},this.begin=function(F,R){if(w||F.toneMapping===Ci&&x.length===0)return!1;if(S=R,R!==null){const U=R.width,P=R.height;(c.width!==U||c.height!==P)&&this.setSize(U,P)}return I===!1&&F.setRenderTarget(c),C=F.toneMapping,F.toneMapping=Ci,!0},this.hasRenderPass=function(){return I},this.end=function(F,R){F.toneMapping=C,w=!0;let U=c,P=d;for(let O=0;O<x.length;O++){const T=x[O];if(T.enabled!==!1&&(T.render(F,P,U,R),T.needsSwap!==!1)){const L=U;U=P,P=L}}if(g!==F.outputColorSpace||M!==F.toneMapping){g=F.outputColorSpace,M=F.toneMapping,m.defines={},gt.getTransfer(g)===Dt&&(m.defines.SRGB_TRANSFER="");const O=Ry[M];O&&(m.defines[O]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,F.setRenderTarget(S),F.render(v,_),S=null,w=!1},this.isCompositing=function(){return w},this.dispose=function(){c.depthTexture&&c.depthTexture.dispose(),c.dispose(),d.dispose(),p.dispose(),m.dispose()}}const mg=new bn,qf=new Ks(1,1),gg=new tg,_g=new Q_,vg=new lg,Sm=[],ym=[],Mm=new Float32Array(16),Em=new Float32Array(9),Tm=new Float32Array(4);function Js(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let u=Sm[o];if(u===void 0&&(u=new Float32Array(o),Sm[o]=u),e!==0){r.toArray(u,0);for(let c=1,d=0;c!==e;++c)d+=n,s[c].toArray(u,d)}return u}function an(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function on(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function Hl(s,e){let n=ym[e];n===void 0&&(n=new Int32Array(e),ym[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function by(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function Py(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2fv(this.addr,e),on(n,e)}}function Ly(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(an(n,e))return;s.uniform3fv(this.addr,e),on(n,e)}}function Dy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4fv(this.addr,e),on(n,e)}}function Ny(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;Tm.set(r),s.uniformMatrix2fv(this.addr,!1,Tm),on(n,r)}}function Iy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;Em.set(r),s.uniformMatrix3fv(this.addr,!1,Em),on(n,r)}}function Uy(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(an(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),on(n,e)}else{if(an(n,r))return;Mm.set(r),s.uniformMatrix4fv(this.addr,!1,Mm),on(n,r)}}function Fy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function Oy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2iv(this.addr,e),on(n,e)}}function By(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;s.uniform3iv(this.addr,e),on(n,e)}}function ky(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4iv(this.addr,e),on(n,e)}}function zy(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function Vy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;s.uniform2uiv(this.addr,e),on(n,e)}}function Hy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;s.uniform3uiv(this.addr,e),on(n,e)}}function Gy(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;s.uniform4uiv(this.addr,e),on(n,e)}}function Wy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let u;this.type===s.SAMPLER_2D_SHADOW?(qf.compareFunction=n.isReversedDepthBuffer()?rd:id,u=qf):u=mg,n.setTexture2D(e||u,o)}function Xy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||_g,o)}function Yy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||vg,o)}function qy(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||gg,o)}function $y(s){switch(s){case 5126:return by;case 35664:return Py;case 35665:return Ly;case 35666:return Dy;case 35674:return Ny;case 35675:return Iy;case 35676:return Uy;case 5124:case 35670:return Fy;case 35667:case 35671:return Oy;case 35668:case 35672:return By;case 35669:case 35673:return ky;case 5125:return zy;case 36294:return Vy;case 36295:return Hy;case 36296:return Gy;case 35678:case 36198:case 36298:case 36306:case 35682:return Wy;case 35679:case 36299:case 36307:return Xy;case 35680:case 36300:case 36308:case 36293:return Yy;case 36289:case 36303:case 36311:case 36292:return qy}}function Ky(s,e){s.uniform1fv(this.addr,e)}function Zy(s,e){const n=Js(e,this.size,2);s.uniform2fv(this.addr,n)}function jy(s,e){const n=Js(e,this.size,3);s.uniform3fv(this.addr,n)}function Qy(s,e){const n=Js(e,this.size,4);s.uniform4fv(this.addr,n)}function Jy(s,e){const n=Js(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function eM(s,e){const n=Js(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function tM(s,e){const n=Js(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function nM(s,e){s.uniform1iv(this.addr,e)}function iM(s,e){s.uniform2iv(this.addr,e)}function rM(s,e){s.uniform3iv(this.addr,e)}function sM(s,e){s.uniform4iv(this.addr,e)}function aM(s,e){s.uniform1uiv(this.addr,e)}function oM(s,e){s.uniform2uiv(this.addr,e)}function lM(s,e){s.uniform3uiv(this.addr,e)}function uM(s,e){s.uniform4uiv(this.addr,e)}function cM(s,e,n){const r=this.cache,o=e.length,u=Hl(n,o);an(r,u)||(s.uniform1iv(this.addr,u),on(r,u));let c;this.type===s.SAMPLER_2D_SHADOW?c=qf:c=mg;for(let d=0;d!==o;++d)n.setTexture2D(e[d]||c,u[d])}function fM(s,e,n){const r=this.cache,o=e.length,u=Hl(n,o);an(r,u)||(s.uniform1iv(this.addr,u),on(r,u));for(let c=0;c!==o;++c)n.setTexture3D(e[c]||_g,u[c])}function dM(s,e,n){const r=this.cache,o=e.length,u=Hl(n,o);an(r,u)||(s.uniform1iv(this.addr,u),on(r,u));for(let c=0;c!==o;++c)n.setTextureCube(e[c]||vg,u[c])}function hM(s,e,n){const r=this.cache,o=e.length,u=Hl(n,o);an(r,u)||(s.uniform1iv(this.addr,u),on(r,u));for(let c=0;c!==o;++c)n.setTexture2DArray(e[c]||gg,u[c])}function pM(s){switch(s){case 5126:return Ky;case 35664:return Zy;case 35665:return jy;case 35666:return Qy;case 35674:return Jy;case 35675:return eM;case 35676:return tM;case 5124:case 35670:return nM;case 35667:case 35671:return iM;case 35668:case 35672:return rM;case 35669:case 35673:return sM;case 5125:return aM;case 36294:return oM;case 36295:return lM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return cM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return dM;case 36289:case 36303:case 36311:case 36292:return hM}}class mM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=$y(n.type)}}class gM{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pM(n.type)}}class _M{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let u=0,c=o.length;u!==c;++u){const d=o[u];d.setValue(e,n[d.id],r)}}}const nf=/(\w+)(\])?(\[|\.)?/g;function wm(s,e){s.seq.push(e),s.map[e.id]=e}function vM(s,e,n){const r=s.name,o=r.length;for(nf.lastIndex=0;;){const u=nf.exec(r),c=nf.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&c+2===o){wm(n,m===void 0?new mM(d,s,e):new gM(d,s,e));break}else{let _=n.map[d];_===void 0&&(_=new _M(d),wm(n,_)),n=_}}}class Ll{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const d=e.getActiveUniform(n,c),p=e.getUniformLocation(n,d.name);vM(d,p,this)}const o=[],u=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):u.push(c);o.length>0&&(this.seq=o.concat(u))}setValue(e,n,r,o){const u=this.map[n];u!==void 0&&u.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let u=0,c=n.length;u!==c;++u){const d=n[u],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,u=e.length;o!==u;++o){const c=e[o];c.id in n&&r.push(c)}return r}}function Am(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const xM=37297;let SM=0;function yM(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),u=Math.min(e+6,n.length);for(let c=o;c<u;c++){const d=c+1;r.push(`${d===e?">":" "} ${d}: ${n[c]}`)}return r.join(`
`)}const Rm=new lt;function MM(s){gt._getMatrix(Rm,gt.workingColorSpace,s);const e=`mat3( ${Rm.elements.map(n=>n.toFixed(4))} )`;switch(gt.getTransfer(s)){case Ul:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Cm(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),u=(s.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const c=/ERROR: 0:(\d+)/.exec(u);if(c){const d=parseInt(c[1]);return n.toUpperCase()+`

`+u+`

`+yM(s.getShaderSource(e),d)}else return u}function EM(s,e){const n=MM(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const TM={[km]:"Linear",[zm]:"Reinhard",[Vm]:"Cineon",[Hm]:"ACESFilmic",[Wm]:"AgX",[Xm]:"Neutral",[Gm]:"Custom"};function wM(s,e){const n=TM[e];return n===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Tl=new ie;function AM(){gt.getLuminanceCoefficients(Tl);const s=Tl.x.toFixed(4),e=Tl.y.toFixed(4),n=Tl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function RM(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wa).join(`
`)}function CM(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function bM(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const u=s.getActiveAttrib(e,o),c=u.name;let d=1;u.type===s.FLOAT_MAT2&&(d=2),u.type===s.FLOAT_MAT3&&(d=3),u.type===s.FLOAT_MAT4&&(d=4),n[c]={type:u.type,location:s.getAttribLocation(e,c),locationSize:d}}return n}function Wa(s){return s!==""}function bm(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PM=/^[ \t]*#include +<([\w\d./]+)>/gm;function $f(s){return s.replace(PM,DM)}const LM=new Map;function DM(s,e){let n=ct[e];if(n===void 0){const r=LM.get(e);if(r!==void 0)n=ct[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return $f(n)}const NM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lm(s){return s.replace(NM,IM)}function IM(s,e,n,r){let o="";for(let u=parseInt(e);u<parseInt(n);u++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return o}function Dm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const UM={[Al]:"SHADOWMAP_TYPE_PCF",[Ga]:"SHADOWMAP_TYPE_VSM"};function FM(s){return UM[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const OM={[ns]:"ENVMAP_TYPE_CUBE",[$s]:"ENVMAP_TYPE_CUBE",[kl]:"ENVMAP_TYPE_CUBE_UV"};function BM(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":OM[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const kM={[$s]:"ENVMAP_MODE_REFRACTION"};function zM(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":kM[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VM={[Bm]:"ENVMAP_BLENDING_MULTIPLY",[L_]:"ENVMAP_BLENDING_MIX",[D_]:"ENVMAP_BLENDING_ADD"};function HM(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":VM[s.combine]||"ENVMAP_BLENDING_NONE"}function GM(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function WM(s,e,n,r){const o=s.getContext(),u=n.defines;let c=n.vertexShader,d=n.fragmentShader;const p=FM(n),m=BM(n),v=zM(n),_=HM(n),g=GM(n),M=RM(n),w=CM(u),C=o.createProgram();let S,x,I=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(S=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Wa).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter(Wa).join(`
`),x.length>0&&(x+=`
`)):(S=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+v:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wa).join(`
`),x=[Dm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+v:"",n.envMap?"#define "+_:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Ci?"#define TONE_MAPPING":"",n.toneMapping!==Ci?ct.tonemapping_pars_fragment:"",n.toneMapping!==Ci?wM("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,EM("linearToOutputTexel",n.outputColorSpace),AM(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wa).join(`
`)),c=$f(c),c=bm(c,n),c=Pm(c,n),d=$f(d),d=bm(d,n),d=Pm(d,n),c=Lm(c),d=Lm(d),n.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",n.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const F=I+S+c,R=I+x+d,U=Am(o,o.VERTEX_SHADER,F),P=Am(o,o.FRAGMENT_SHADER,R);o.attachShader(C,U),o.attachShader(C,P),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function O(z){if(s.debug.checkShaderErrors){const Z=o.getProgramInfoLog(C)||"",re=o.getShaderInfoLog(U)||"",he=o.getShaderInfoLog(P)||"",q=Z.trim(),oe=re.trim(),Y=he.trim();let H=!0,ue=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(H=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,U,P);else{const le=Cm(o,U,"vertex"),N=Cm(o,P,"fragment");Mt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+q+`
`+le+`
`+N)}else q!==""?st("WebGLProgram: Program Info Log:",q):(oe===""||Y==="")&&(ue=!1);ue&&(z.diagnostics={runnable:H,programLog:q,vertexShader:{log:oe,prefix:S},fragmentShader:{log:Y,prefix:x}})}o.deleteShader(U),o.deleteShader(P),T=new Ll(o,C),L=bM(o,C)}let T;this.getUniforms=function(){return T===void 0&&O(this),T};let L;this.getAttributes=function(){return L===void 0&&O(this),L};let X=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return X===!1&&(X=o.getProgramParameter(C,xM)),X},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SM++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=U,this.fragmentShader=P,this}let XM=0;class YM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new qM(e),n.set(e,r)),r}}class qM{constructor(e){this.id=XM++,this.code=e,this.usedTimes=0}}function $M(s){return s===is||s===Dl||s===Nl}function KM(s,e,n,r,o,u){const c=new ng,d=new YM,p=new Set,m=[],v=new Map,_=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return p.add(T),T===0?"uv":`uv${T}`}function C(T,L,X,z,Z,re){const he=z.fog,q=Z.geometry,oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?z.environment:null,Y=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=e.get(T.envMap||oe,Y),ue=H&&H.mapping===kl?H.image.height:null,le=M[T.type];T.precision!==null&&(g=r.getMaxPrecision(T.precision),g!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",g,"instead."));const N=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,K=N!==void 0?N.length:0;let Ie=0;q.morphAttributes.position!==void 0&&(Ie=1),q.morphAttributes.normal!==void 0&&(Ie=2),q.morphAttributes.color!==void 0&&(Ie=3);let Ge,ke,ne,ve;if(le){const Ve=wi[le];Ge=Ve.vertexShader,ke=Ve.fragmentShader}else{Ge=T.vertexShader,ke=T.fragmentShader;const Ve=d.getVertexShaderStage(T),Nt=d.getFragmentShaderStage(T);d.update(T,Ve,Nt),ne=Ve.id,ve=Nt.id}const me=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),Qe=Z.isInstancedMesh===!0,Je=Z.isBatchedMesh===!0,kt=!!T.map,ut=!!T.matcap,wt=!!H,vt=!!T.aoMap,pt=!!T.lightMap,zt=!!T.bumpMap&&T.wireframe===!1,$t=!!T.normalMap,Kt=!!T.displacementMap,Wt=!!T.emissiveMap,bt=!!T.metalnessMap,Vt=!!T.roughnessMap,G=T.anisotropy>0,dn=T.clearcoat>0,Et=T.dispersion>0,b=T.iridescence>0,y=T.sheen>0,$=T.transmission>0,te=G&&!!T.anisotropyMap,fe=dn&&!!T.clearcoatMap,Me=dn&&!!T.clearcoatNormalMap,Ce=dn&&!!T.clearcoatRoughnessMap,de=b&&!!T.iridescenceMap,ge=b&&!!T.iridescenceThicknessMap,Pe=y&&!!T.sheenColorMap,qe=y&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Re=!!T.specularColorMap,je=!!T.specularIntensityMap,et=$&&!!T.transmissionMap,it=$&&!!T.thicknessMap,k=!!T.gradientMap,Ae=!!T.alphaMap,pe=T.alphaTest>0,be=!!T.alphaHash,De=!!T.extensions;let _e=Ci;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(_e=s.toneMapping);const We={shaderID:le,shaderType:T.type,shaderName:T.name,vertexShader:Ge,fragmentShader:ke,defines:T.defines,customVertexShaderID:ne,customFragmentShaderID:ve,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:g,batching:Je,batchingColor:Je&&Z._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&Z.instanceColor!==null,instancingMorph:Qe&&Z.morphTexture!==null,outputColorSpace:me===null?s.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:gt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:kt,matcap:ut,envMap:wt,envMapMode:wt&&H.mapping,envMapCubeUVHeight:ue,aoMap:vt,lightMap:pt,bumpMap:zt,normalMap:$t,displacementMap:Kt,emissiveMap:Wt,normalMapObjectSpace:$t&&T.normalMapType===U_,normalMapTangentSpace:$t&&T.normalMapType===Gp,packedNormalMap:$t&&T.normalMapType===Gp&&$M(T.normalMap.format),metalnessMap:bt,roughnessMap:Vt,anisotropy:G,anisotropyMap:te,clearcoat:dn,clearcoatMap:fe,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ce,dispersion:Et,iridescence:b,iridescenceMap:de,iridescenceThicknessMap:ge,sheen:y,sheenColorMap:Pe,sheenRoughnessMap:qe,specularMap:Le,specularColorMap:Re,specularIntensityMap:je,transmission:$,transmissionMap:et,thicknessMap:it,gradientMap:k,opaque:T.transparent===!1&&T.blending===Ws&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:be,combine:T.combine,mapUv:kt&&w(T.map.channel),aoMapUv:vt&&w(T.aoMap.channel),lightMapUv:pt&&w(T.lightMap.channel),bumpMapUv:zt&&w(T.bumpMap.channel),normalMapUv:$t&&w(T.normalMap.channel),displacementMapUv:Kt&&w(T.displacementMap.channel),emissiveMapUv:Wt&&w(T.emissiveMap.channel),metalnessMapUv:bt&&w(T.metalnessMap.channel),roughnessMapUv:Vt&&w(T.roughnessMap.channel),anisotropyMapUv:te&&w(T.anisotropyMap.channel),clearcoatMapUv:fe&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:de&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:qe&&w(T.sheenRoughnessMap.channel),specularMapUv:Le&&w(T.specularMap.channel),specularColorMapUv:Re&&w(T.specularColorMap.channel),specularIntensityMapUv:je&&w(T.specularIntensityMap.channel),transmissionMapUv:et&&w(T.transmissionMap.channel),thicknessMapUv:it&&w(T.thicknessMap.channel),alphaMapUv:Ae&&w(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&($t||G),vertexNormals:!!q.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!q.attributes.uv&&(kt||Ae),fog:!!he,useFog:T.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||q.attributes.normal===void 0&&$t===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ue,skinning:Z.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Ie,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&X.length>0,shadowMapType:s.shadowMap.type,toneMapping:_e,decodeVideoTexture:kt&&T.map.isVideoTexture===!0&&gt.getTransfer(T.map.colorSpace)===Dt,decodeVideoTextureEmissive:Wt&&T.emissiveMap.isVideoTexture===!0&&gt.getTransfer(T.emissiveMap.colorSpace)===Dt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===qi,flipSided:T.side===kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:De&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&T.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return We.vertexUv1s=p.has(1),We.vertexUv2s=p.has(2),We.vertexUv3s=p.has(3),p.clear(),We}function S(T){const L=[];if(T.shaderID?L.push(T.shaderID):(L.push(T.customVertexShaderID),L.push(T.customFragmentShaderID)),T.defines!==void 0)for(const X in T.defines)L.push(X),L.push(T.defines[X]);return T.isRawShaderMaterial===!1&&(x(L,T),I(L,T),L.push(s.outputColorSpace)),L.push(T.customProgramCacheKey),L.join()}function x(T,L){T.push(L.precision),T.push(L.outputColorSpace),T.push(L.envMapMode),T.push(L.envMapCubeUVHeight),T.push(L.mapUv),T.push(L.alphaMapUv),T.push(L.lightMapUv),T.push(L.aoMapUv),T.push(L.bumpMapUv),T.push(L.normalMapUv),T.push(L.displacementMapUv),T.push(L.emissiveMapUv),T.push(L.metalnessMapUv),T.push(L.roughnessMapUv),T.push(L.anisotropyMapUv),T.push(L.clearcoatMapUv),T.push(L.clearcoatNormalMapUv),T.push(L.clearcoatRoughnessMapUv),T.push(L.iridescenceMapUv),T.push(L.iridescenceThicknessMapUv),T.push(L.sheenColorMapUv),T.push(L.sheenRoughnessMapUv),T.push(L.specularMapUv),T.push(L.specularColorMapUv),T.push(L.specularIntensityMapUv),T.push(L.transmissionMapUv),T.push(L.thicknessMapUv),T.push(L.combine),T.push(L.fogExp2),T.push(L.sizeAttenuation),T.push(L.morphTargetsCount),T.push(L.morphAttributeCount),T.push(L.numDirLights),T.push(L.numPointLights),T.push(L.numSpotLights),T.push(L.numSpotLightMaps),T.push(L.numHemiLights),T.push(L.numRectAreaLights),T.push(L.numDirLightShadows),T.push(L.numPointLightShadows),T.push(L.numSpotLightShadows),T.push(L.numSpotLightShadowsWithMaps),T.push(L.numLightProbes),T.push(L.shadowMapType),T.push(L.toneMapping),T.push(L.numClippingPlanes),T.push(L.numClipIntersection),T.push(L.depthPacking)}function I(T,L){c.disableAll(),L.instancing&&c.enable(0),L.instancingColor&&c.enable(1),L.instancingMorph&&c.enable(2),L.matcap&&c.enable(3),L.envMap&&c.enable(4),L.normalMapObjectSpace&&c.enable(5),L.normalMapTangentSpace&&c.enable(6),L.clearcoat&&c.enable(7),L.iridescence&&c.enable(8),L.alphaTest&&c.enable(9),L.vertexColors&&c.enable(10),L.vertexAlphas&&c.enable(11),L.vertexUv1s&&c.enable(12),L.vertexUv2s&&c.enable(13),L.vertexUv3s&&c.enable(14),L.vertexTangents&&c.enable(15),L.anisotropy&&c.enable(16),L.alphaHash&&c.enable(17),L.batching&&c.enable(18),L.dispersion&&c.enable(19),L.batchingColor&&c.enable(20),L.gradientMap&&c.enable(21),L.packedNormalMap&&c.enable(22),L.vertexNormals&&c.enable(23),T.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.reversedDepthBuffer&&c.enable(4),L.skinning&&c.enable(5),L.morphTargets&&c.enable(6),L.morphNormals&&c.enable(7),L.morphColors&&c.enable(8),L.premultipliedAlpha&&c.enable(9),L.shadowMapEnabled&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),L.decodeVideoTexture&&c.enable(19),L.decodeVideoTextureEmissive&&c.enable(20),L.alphaToCoverage&&c.enable(21),L.numLightProbeGrids>0&&c.enable(22),L.hasPositionAttribute&&c.enable(23),T.push(c.mask)}function F(T){const L=M[T.type];let X;if(L){const z=wi[L];X=xv.clone(z.uniforms)}else X=T.uniforms;return X}function R(T,L){let X=v.get(L);return X!==void 0?++X.usedTimes:(X=new WM(s,L,T,o),m.push(X),v.set(L,X)),X}function U(T){if(--T.usedTimes===0){const L=m.indexOf(T);m[L]=m[m.length-1],m.pop(),v.delete(T.cacheKey),T.destroy()}}function P(T){d.remove(T)}function O(){d.dispose()}return{getParameters:C,getProgramCacheKey:S,getUniforms:F,acquireProgram:R,releaseProgram:U,releaseShaderCache:P,programs:m,dispose:O}}function ZM(){let s=new WeakMap;function e(c){return s.has(c)}function n(c){let d=s.get(c);return d===void 0&&(d={},s.set(c,d)),d}function r(c){s.delete(c)}function o(c,d,p){s.get(c)[d]=p}function u(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:u}}function jM(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Nm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Im(){const s=[];let e=0;const n=[],r=[],o=[];function u(){e=0,n.length=0,r.length=0,o.length=0}function c(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function d(g,M,w,C,S,x){let I=s[e];return I===void 0?(I={id:g.id,object:g,geometry:M,material:w,materialVariant:c(g),groupOrder:C,renderOrder:g.renderOrder,z:S,group:x},s[e]=I):(I.id=g.id,I.object=g,I.geometry=M,I.material=w,I.materialVariant=c(g),I.groupOrder=C,I.renderOrder=g.renderOrder,I.z=S,I.group=x),e++,I}function p(g,M,w,C,S,x){const I=d(g,M,w,C,S,x);w.transmission>0?r.push(I):w.transparent===!0?o.push(I):n.push(I)}function m(g,M,w,C,S,x){const I=d(g,M,w,C,S,x);w.transmission>0?r.unshift(I):w.transparent===!0?o.unshift(I):n.unshift(I)}function v(g,M,w){n.length>1&&n.sort(g||jM),r.length>1&&r.sort(M||Nm),o.length>1&&o.sort(M||Nm),w&&(n.reverse(),r.reverse(),o.reverse())}function _(){for(let g=e,M=s.length;g<M;g++){const w=s[g];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:n,transmissive:r,transparent:o,init:u,push:p,unshift:m,finish:_,sort:v}}function QM(){let s=new WeakMap;function e(r,o){const u=s.get(r);let c;return u===void 0?(c=new Im,s.set(r,[c])):o>=u.length?(c=new Im,u.push(c)):c=u[o],c}function n(){s=new WeakMap}return{get:e,dispose:n}}function JM(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Ct};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":n={color:new Ct,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return s[e.id]=n,n}}}function eE(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let tE=0;function nE(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function iE(s){const e=new JM,n=eE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new ie);const o=new ie,u=new nn,c=new nn;function d(m){let v=0,_=0,g=0;for(let L=0;L<9;L++)r.probe[L].set(0,0,0);let M=0,w=0,C=0,S=0,x=0,I=0,F=0,R=0,U=0,P=0,O=0;m.sort(nE);for(let L=0,X=m.length;L<X;L++){const z=m[L],Z=z.color,re=z.intensity,he=z.distance;let q=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===is?q=z.shadow.map.texture:q=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=Z.r*re,_+=Z.g*re,g+=Z.b*re;else if(z.isLightProbe){for(let oe=0;oe<9;oe++)r.probe[oe].addScaledVector(z.sh.coefficients[oe],re);O++}else if(z.isDirectionalLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Y=z.shadow,H=n.get(z);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,r.directionalShadow[M]=H,r.directionalShadowMap[M]=q,r.directionalShadowMatrix[M]=z.shadow.matrix,I++}r.directional[M]=oe,M++}else if(z.isSpotLight){const oe=e.get(z);oe.position.setFromMatrixPosition(z.matrixWorld),oe.color.copy(Z).multiplyScalar(re),oe.distance=he,oe.coneCos=Math.cos(z.angle),oe.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),oe.decay=z.decay,r.spot[C]=oe;const Y=z.shadow;if(z.map&&(r.spotLightMap[U]=z.map,U++,Y.updateMatrices(z),z.castShadow&&P++),r.spotLightMatrix[C]=Y.matrix,z.castShadow){const H=n.get(z);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,r.spotShadow[C]=H,r.spotShadowMap[C]=q,R++}C++}else if(z.isRectAreaLight){const oe=e.get(z);oe.color.copy(Z).multiplyScalar(re),oe.halfWidth.set(z.width*.5,0,0),oe.halfHeight.set(0,z.height*.5,0),r.rectArea[S]=oe,S++}else if(z.isPointLight){const oe=e.get(z);if(oe.color.copy(z.color).multiplyScalar(z.intensity),oe.distance=z.distance,oe.decay=z.decay,z.castShadow){const Y=z.shadow,H=n.get(z);H.shadowIntensity=Y.intensity,H.shadowBias=Y.bias,H.shadowNormalBias=Y.normalBias,H.shadowRadius=Y.radius,H.shadowMapSize=Y.mapSize,H.shadowCameraNear=Y.camera.near,H.shadowCameraFar=Y.camera.far,r.pointShadow[w]=H,r.pointShadowMap[w]=q,r.pointShadowMatrix[w]=z.shadow.matrix,F++}r.point[w]=oe,w++}else if(z.isHemisphereLight){const oe=e.get(z);oe.skyColor.copy(z.color).multiplyScalar(re),oe.groundColor.copy(z.groundColor).multiplyScalar(re),r.hemi[x]=oe,x++}}S>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=_,r.ambient[2]=g;const T=r.hash;(T.directionalLength!==M||T.pointLength!==w||T.spotLength!==C||T.rectAreaLength!==S||T.hemiLength!==x||T.numDirectionalShadows!==I||T.numPointShadows!==F||T.numSpotShadows!==R||T.numSpotMaps!==U||T.numLightProbes!==O)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=S,r.point.length=w,r.hemi.length=x,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.pointShadow.length=F,r.pointShadowMap.length=F,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=I,r.pointShadowMatrix.length=F,r.spotLightMatrix.length=R+U-P,r.spotLightMap.length=U,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=O,T.directionalLength=M,T.pointLength=w,T.spotLength=C,T.rectAreaLength=S,T.hemiLength=x,T.numDirectionalShadows=I,T.numPointShadows=F,T.numSpotShadows=R,T.numSpotMaps=U,T.numLightProbes=O,r.version=tE++)}function p(m,v){let _=0,g=0,M=0,w=0,C=0;const S=v.matrixWorldInverse;for(let x=0,I=m.length;x<I;x++){const F=m[x];if(F.isDirectionalLight){const R=r.directional[_];R.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),_++}else if(F.isSpotLight){const R=r.spot[M];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(F.matrixWorld),o.setFromMatrixPosition(F.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),M++}else if(F.isRectAreaLight){const R=r.rectArea[w];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(S),c.identity(),u.copy(F.matrixWorld),u.premultiply(S),c.extractRotation(u),R.halfWidth.set(F.width*.5,0,0),R.halfHeight.set(0,F.height*.5,0),R.halfWidth.applyMatrix4(c),R.halfHeight.applyMatrix4(c),w++}else if(F.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(F.matrixWorld),R.position.applyMatrix4(S),g++}else if(F.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(F.matrixWorld),R.direction.transformDirection(S),C++}}}return{setup:d,setupView:p,state:r}}function Um(s){const e=new iE(s),n=[],r=[],o=[];function u(g){_.camera=g,n.length=0,r.length=0,o.length=0}function c(g){n.push(g)}function d(g){r.push(g)}function p(g){o.push(g)}function m(){e.setup(n)}function v(g){e.setupView(n,g)}const _={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:u,state:_,setupLights:m,setupLightsView:v,pushLight:c,pushShadow:d,pushLightProbeGrid:p}}function rE(s){let e=new WeakMap;function n(o,u=0){const c=e.get(o);let d;return c===void 0?(d=new Um(s),e.set(o,[d])):u>=c.length?(d=new Um(s),c.push(d)):d=c[u],d}function r(){e=new WeakMap}return{get:n,dispose:r}}const sE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,oE=[new ie(1,0,0),new ie(-1,0,0),new ie(0,1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1)],lE=[new ie(0,-1,0),new ie(0,-1,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,-1,0),new ie(0,-1,0)],Fm=new nn,Ha=new ie,rf=new ie;function uE(s,e,n){let r=new og;const o=new St,u=new St,c=new jt,d=new Ev,p=new Tv,m={},v=n.maxTextureSize,_={[Cr]:kn,[kn]:Cr,[qi]:qi},g=new _i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:sE,fragmentShader:aE}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const w=new er;w.setAttribute("position",new Pi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Di(w,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let x=this.type;this.render=function(P,O,T){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===d_&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Al);const L=s.getRenderTarget(),X=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Z=s.state;Z.setBlending(Ki),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const re=x!==this.type;re&&O.traverse(function(he){he.material&&(Array.isArray(he.material)?he.material.forEach(q=>q.needsUpdate=!0):he.material.needsUpdate=!0)});for(let he=0,q=P.length;he<q;he++){const oe=P[he],Y=oe.shadow;if(Y===void 0){st("WebGLShadowMap:",oe,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;o.copy(Y.mapSize);const H=Y.getFrameExtents();o.multiply(H),u.copy(Y.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(u.x=Math.floor(v/H.x),o.x=u.x*H.x,Y.mapSize.x=u.x),o.y>v&&(u.y=Math.floor(v/H.y),o.y=u.y*H.y,Y.mapSize.y=u.y));const ue=s.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=ue,Y.map===null||re===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Ga){if(oe.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new bi(o.x,o.y,{format:is,type:Qi,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),Y.map.texture.name=oe.name+".shadowMap",Y.map.depthTexture=new Ks(o.x,o.y,Ai),Y.map.depthTexture.name=oe.name+".shadowMapDepth",Y.map.depthTexture.format=Ji,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn}else oe.isPointLight?(Y.map=new pg(o.x),Y.map.depthTexture=new _v(o.x,Li)):(Y.map=new bi(o.x,o.y),Y.map.depthTexture=new Ks(o.x,o.y,Li)),Y.map.depthTexture.name=oe.name+".shadowMap",Y.map.depthTexture.format=Ji,this.type===Al?(Y.map.depthTexture.compareFunction=ue?rd:id,Y.map.depthTexture.minFilter=Tn,Y.map.depthTexture.magFilter=Tn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=gn,Y.map.depthTexture.magFilter=gn);Y.camera.updateProjectionMatrix()}const le=Y.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<le;N++){if(Y.map.isWebGLCubeRenderTarget)s.setRenderTarget(Y.map,N),s.clear();else{N===0&&(s.setRenderTarget(Y.map),s.clear());const K=Y.getViewport(N);c.set(u.x*K.x,u.y*K.y,u.x*K.z,u.y*K.w),Z.viewport(c)}if(oe.isPointLight){const K=Y.camera,Ie=Y.matrix,Ge=oe.distance||K.far;Ge!==K.far&&(K.far=Ge,K.updateProjectionMatrix()),Ha.setFromMatrixPosition(oe.matrixWorld),K.position.copy(Ha),rf.copy(K.position),rf.add(oE[N]),K.up.copy(lE[N]),K.lookAt(rf),K.updateMatrixWorld(),Ie.makeTranslation(-Ha.x,-Ha.y,-Ha.z),Fm.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Fm,K.coordinateSystem,K.reversedDepth)}else Y.updateMatrices(oe);r=Y.getFrustum(),R(O,T,Y.camera,oe,this.type)}Y.isPointLightShadow!==!0&&this.type===Ga&&I(Y,T),Y.needsUpdate=!1}x=this.type,S.needsUpdate=!1,s.setRenderTarget(L,X,z)};function I(P,O){const T=e.update(C);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new bi(o.x,o.y,{format:is,type:Qi})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(O,null,T,g,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(O,null,T,M,C,null)}function F(P,O,T,L){let X=null;const z=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)X=z;else if(X=T.isPointLight===!0?p:d,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0||O.alphaToCoverage===!0){const Z=X.uuid,re=O.uuid;let he=m[Z];he===void 0&&(he={},m[Z]=he);let q=he[re];q===void 0&&(q=X.clone(),he[re]=q,O.addEventListener("dispose",U)),X=q}if(X.visible=O.visible,X.wireframe=O.wireframe,L===Ga?X.side=O.shadowSide!==null?O.shadowSide:O.side:X.side=O.shadowSide!==null?O.shadowSide:_[O.side],X.alphaMap=O.alphaMap,X.alphaTest=O.alphaToCoverage===!0?.5:O.alphaTest,X.map=O.map,X.clipShadows=O.clipShadows,X.clippingPlanes=O.clippingPlanes,X.clipIntersection=O.clipIntersection,X.displacementMap=O.displacementMap,X.displacementScale=O.displacementScale,X.displacementBias=O.displacementBias,X.wireframeLinewidth=O.wireframeLinewidth,X.linewidth=O.linewidth,T.isPointLight===!0&&X.isMeshDistanceMaterial===!0){const Z=s.properties.get(X);Z.light=T}return X}function R(P,O,T,L,X){if(P.visible===!1)return;if(P.layers.test(O.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&X===Ga)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const re=e.update(P),he=P.material;if(Array.isArray(he)){const q=re.groups;for(let oe=0,Y=q.length;oe<Y;oe++){const H=q[oe],ue=he[H.materialIndex];if(ue&&ue.visible){const le=F(P,ue,L,X);P.onBeforeShadow(s,P,O,T,re,le,H),s.renderBufferDirect(T,null,re,le,P,H),P.onAfterShadow(s,P,O,T,re,le,H)}}}else if(he.visible){const q=F(P,he,L,X);P.onBeforeShadow(s,P,O,T,re,q,null),s.renderBufferDirect(T,null,re,q,P,null),P.onAfterShadow(s,P,O,T,re,q,null)}}const Z=P.children;for(let re=0,he=Z.length;re<he;re++)R(Z[re],O,T,L,X)}function U(P){P.target.removeEventListener("dispose",U);for(const T in m){const L=m[T],X=P.target.uuid;X in L&&(L[X].dispose(),delete L[X])}}}function cE(s,e){function n(){let k=!1;const Ae=new jt;let pe=null;const be=new jt(0,0,0,0);return{setMask:function(De){pe!==De&&!k&&(s.colorMask(De,De,De,De),pe=De)},setLocked:function(De){k=De},setClear:function(De,_e,We,Ve,Nt){Nt===!0&&(De*=Ve,_e*=Ve,We*=Ve),Ae.set(De,_e,We,Ve),be.equals(Ae)===!1&&(s.clearColor(De,_e,We,Ve),be.copy(Ae))},reset:function(){k=!1,pe=null,be.set(-1,0,0,0)}}}function r(){let k=!1,Ae=!1,pe=null,be=null,De=null;return{setReversed:function(_e){if(Ae!==_e){const We=e.get("EXT_clip_control");_e?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=_e;const Ve=De;De=null,this.setClear(Ve)}},getReversed:function(){return Ae},setTest:function(_e){_e?me(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(_e){pe!==_e&&!k&&(s.depthMask(_e),pe=_e)},setFunc:function(_e){if(Ae&&(_e=X_[_e]),be!==_e){switch(_e){case of:s.depthFunc(s.NEVER);break;case lf:s.depthFunc(s.ALWAYS);break;case uf:s.depthFunc(s.LESS);break;case qs:s.depthFunc(s.LEQUAL);break;case cf:s.depthFunc(s.EQUAL);break;case ff:s.depthFunc(s.GEQUAL);break;case df:s.depthFunc(s.GREATER);break;case hf:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}be=_e}},setLocked:function(_e){k=_e},setClear:function(_e){De!==_e&&(De=_e,Ae&&(_e=1-_e),s.clearDepth(_e))},reset:function(){k=!1,pe=null,be=null,De=null,Ae=!1}}}function o(){let k=!1,Ae=null,pe=null,be=null,De=null,_e=null,We=null,Ve=null,Nt=null;return{setTest:function(At){k||(At?me(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(At){Ae!==At&&!k&&(s.stencilMask(At),Ae=At)},setFunc:function(At,_n,qn){(pe!==At||be!==_n||De!==qn)&&(s.stencilFunc(At,_n,qn),pe=At,be=_n,De=qn)},setOp:function(At,_n,qn){(_e!==At||We!==_n||Ve!==qn)&&(s.stencilOp(At,_n,qn),_e=At,We=_n,Ve=qn)},setLocked:function(At){k=At},setClear:function(At){Nt!==At&&(s.clearStencil(At),Nt=At)},reset:function(){k=!1,Ae=null,pe=null,be=null,De=null,_e=null,We=null,Ve=null,Nt=null}}}const u=new n,c=new r,d=new o,p=new WeakMap,m=new WeakMap;let v={},_={},g={},M=new WeakMap,w=[],C=null,S=!1,x=null,I=null,F=null,R=null,U=null,P=null,O=null,T=new Ct(0,0,0),L=0,X=!1,z=null,Z=null,re=null,he=null,q=null;const oe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,H=0;const ue=s.getParameter(s.VERSION);ue.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ue)[1]),Y=H>=1):ue.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),Y=H>=2);let le=null,N={};const K=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),Ge=new jt().fromArray(K),ke=new jt().fromArray(Ie);function ne(k,Ae,pe,be){const De=new Uint8Array(4),_e=s.createTexture();s.bindTexture(k,_e),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<pe;We++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,be,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ae+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return _e}const ve={};ve[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),u.setClear(0,0,0,1),c.setClear(1),d.setClear(0),me(s.DEPTH_TEST),c.setFunc(qs),zt(!1),$t(kp),me(s.CULL_FACE),vt(Ki);function me(k){v[k]!==!0&&(s.enable(k),v[k]=!0)}function Ue(k){v[k]!==!1&&(s.disable(k),v[k]=!1)}function Qe(k,Ae){return g[k]!==Ae?(s.bindFramebuffer(k,Ae),g[k]=Ae,k===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),k===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Je(k,Ae){let pe=w,be=!1;if(k){pe=M.get(Ae),pe===void 0&&(pe=[],M.set(Ae,pe));const De=k.textures;if(pe.length!==De.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,We=De.length;_e<We;_e++)pe[_e]=s.COLOR_ATTACHMENT0+_e;pe.length=De.length,be=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,be=!0);be&&s.drawBuffers(pe)}function kt(k){return C!==k?(s.useProgram(k),C=k,!0):!1}const ut={[Qr]:s.FUNC_ADD,[p_]:s.FUNC_SUBTRACT,[m_]:s.FUNC_REVERSE_SUBTRACT};ut[g_]=s.MIN,ut[__]=s.MAX;const wt={[v_]:s.ZERO,[x_]:s.ONE,[S_]:s.SRC_COLOR,[sf]:s.SRC_ALPHA,[A_]:s.SRC_ALPHA_SATURATE,[T_]:s.DST_COLOR,[M_]:s.DST_ALPHA,[y_]:s.ONE_MINUS_SRC_COLOR,[af]:s.ONE_MINUS_SRC_ALPHA,[w_]:s.ONE_MINUS_DST_COLOR,[E_]:s.ONE_MINUS_DST_ALPHA,[R_]:s.CONSTANT_COLOR,[C_]:s.ONE_MINUS_CONSTANT_COLOR,[b_]:s.CONSTANT_ALPHA,[P_]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(k,Ae,pe,be,De,_e,We,Ve,Nt,At){if(k===Ki){S===!0&&(Ue(s.BLEND),S=!1);return}if(S===!1&&(me(s.BLEND),S=!0),k!==h_){if(k!==x||At!==X){if((I!==Qr||U!==Qr)&&(s.blendEquation(s.FUNC_ADD),I=Qr,U=Qr),At)switch(k){case Ws:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zp:s.blendFunc(s.ONE,s.ONE);break;case Vp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Hp:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Mt("WebGLState: Invalid blending: ",k);break}else switch(k){case Ws:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case zp:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vp:Mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Hp:Mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Mt("WebGLState: Invalid blending: ",k);break}F=null,R=null,P=null,O=null,T.set(0,0,0),L=0,x=k,X=At}return}De=De||Ae,_e=_e||pe,We=We||be,(Ae!==I||De!==U)&&(s.blendEquationSeparate(ut[Ae],ut[De]),I=Ae,U=De),(pe!==F||be!==R||_e!==P||We!==O)&&(s.blendFuncSeparate(wt[pe],wt[be],wt[_e],wt[We]),F=pe,R=be,P=_e,O=We),(Ve.equals(T)===!1||Nt!==L)&&(s.blendColor(Ve.r,Ve.g,Ve.b,Nt),T.copy(Ve),L=Nt),x=k,X=!1}function pt(k,Ae){k.side===qi?Ue(s.CULL_FACE):me(s.CULL_FACE);let pe=k.side===kn;Ae&&(pe=!pe),zt(pe),k.blending===Ws&&k.transparent===!1?vt(Ki):vt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),u.setMask(k.colorWrite);const be=k.stencilWrite;d.setTest(be),be&&(d.setMask(k.stencilWriteMask),d.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),d.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Wt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?me(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function zt(k){z!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),z=k)}function $t(k){k!==c_?(me(s.CULL_FACE),k!==Z&&(k===kp?s.cullFace(s.BACK):k===f_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),Z=k}function Kt(k){k!==re&&(Y&&s.lineWidth(k),re=k)}function Wt(k,Ae,pe){k?(me(s.POLYGON_OFFSET_FILL),(he!==Ae||q!==pe)&&(he=Ae,q=pe,c.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,pe))):Ue(s.POLYGON_OFFSET_FILL)}function bt(k){k?me(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function Vt(k){k===void 0&&(k=s.TEXTURE0+oe-1),le!==k&&(s.activeTexture(k),le=k)}function G(k,Ae,pe){pe===void 0&&(le===null?pe=s.TEXTURE0+oe-1:pe=le);let be=N[pe];be===void 0&&(be={type:void 0,texture:void 0},N[pe]=be),(be.type!==k||be.texture!==Ae)&&(le!==pe&&(s.activeTexture(pe),le=pe),s.bindTexture(k,Ae||ve[k]),be.type=k,be.texture=Ae)}function dn(){const k=N[le];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function Et(){try{s.compressedTexImage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function b(){try{s.compressedTexImage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function y(){try{s.texSubImage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function $(){try{s.texSubImage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function te(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function fe(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function Me(){try{s.texStorage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function Ce(){try{s.texStorage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function de(){try{s.texImage2D(...arguments)}catch(k){Mt("WebGLState:",k)}}function ge(){try{s.texImage3D(...arguments)}catch(k){Mt("WebGLState:",k)}}function Pe(k){return _[k]!==void 0?_[k]:s.getParameter(k)}function qe(k,Ae){_[k]!==Ae&&(s.pixelStorei(k,Ae),_[k]=Ae)}function Le(k){Ge.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Ge.copy(k))}function Re(k){ke.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),ke.copy(k))}function je(k,Ae){let pe=m.get(Ae);pe===void 0&&(pe=new WeakMap,m.set(Ae,pe));let be=pe.get(k);be===void 0&&(be=s.getUniformBlockIndex(Ae,k.name),pe.set(k,be))}function et(k,Ae){const be=m.get(Ae).get(k);p.get(Ae)!==be&&(s.uniformBlockBinding(Ae,be,k.__bindingPointIndex),p.set(Ae,be))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),c.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},_={},le=null,N={},g={},M=new WeakMap,w=[],C=null,S=!1,x=null,I=null,F=null,R=null,U=null,P=null,O=null,T=new Ct(0,0,0),L=0,X=!1,z=null,Z=null,re=null,he=null,q=null,Ge.set(0,0,s.canvas.width,s.canvas.height),ke.set(0,0,s.canvas.width,s.canvas.height),u.reset(),c.reset(),d.reset()}return{buffers:{color:u,depth:c,stencil:d},enable:me,disable:Ue,bindFramebuffer:Qe,drawBuffers:Je,useProgram:kt,setBlending:vt,setMaterial:pt,setFlipSided:zt,setCullFace:$t,setLineWidth:Kt,setPolygonOffset:Wt,setScissorTest:bt,activeTexture:Vt,bindTexture:G,unbindTexture:dn,compressedTexImage2D:Et,compressedTexImage3D:b,texImage2D:de,texImage3D:ge,pixelStorei:qe,getParameter:Pe,updateUBOMapping:je,uniformBlockBinding:et,texStorage2D:Me,texStorage3D:Ce,texSubImage2D:y,texSubImage3D:$,compressedTexSubImage2D:te,compressedTexSubImage3D:fe,scissor:Le,viewport:Re,reset:it}}function fE(s,e,n,r,o,u,c){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new St,v=new WeakMap,_=new Set;let g;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(b,y){return w?new OffscreenCanvas(b,y):Ol("canvas")}function S(b,y,$){let te=1;const fe=Et(b);if((fe.width>$||fe.height>$)&&(te=$/Math.max(fe.width,fe.height)),te<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Me=Math.floor(te*fe.width),Ce=Math.floor(te*fe.height);g===void 0&&(g=C(Me,Ce));const de=y?C(Me,Ce):g;return de.width=Me,de.height=Ce,de.getContext("2d").drawImage(b,0,0,Me,Ce),st("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Me+"x"+Ce+")."),de}else return"data"in b&&st("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),b;return b}function x(b){return b.generateMipmaps}function I(b){s.generateMipmap(b)}function F(b){return b.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?s.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(b,y,$,te,fe,Me=!1){if(b!==null){if(s[b]!==void 0)return s[b];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let Ce;te&&(Ce=e.get("EXT_texture_norm16"),Ce||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let de=y;if(y===s.RED&&($===s.FLOAT&&(de=s.R32F),$===s.HALF_FLOAT&&(de=s.R16F),$===s.UNSIGNED_BYTE&&(de=s.R8),$===s.UNSIGNED_SHORT&&Ce&&(de=Ce.R16_EXT),$===s.SHORT&&Ce&&(de=Ce.R16_SNORM_EXT)),y===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(de=s.R8UI),$===s.UNSIGNED_SHORT&&(de=s.R16UI),$===s.UNSIGNED_INT&&(de=s.R32UI),$===s.BYTE&&(de=s.R8I),$===s.SHORT&&(de=s.R16I),$===s.INT&&(de=s.R32I)),y===s.RG&&($===s.FLOAT&&(de=s.RG32F),$===s.HALF_FLOAT&&(de=s.RG16F),$===s.UNSIGNED_BYTE&&(de=s.RG8),$===s.UNSIGNED_SHORT&&Ce&&(de=Ce.RG16_EXT),$===s.SHORT&&Ce&&(de=Ce.RG16_SNORM_EXT)),y===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(de=s.RG8UI),$===s.UNSIGNED_SHORT&&(de=s.RG16UI),$===s.UNSIGNED_INT&&(de=s.RG32UI),$===s.BYTE&&(de=s.RG8I),$===s.SHORT&&(de=s.RG16I),$===s.INT&&(de=s.RG32I)),y===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(de=s.RGB8UI),$===s.UNSIGNED_SHORT&&(de=s.RGB16UI),$===s.UNSIGNED_INT&&(de=s.RGB32UI),$===s.BYTE&&(de=s.RGB8I),$===s.SHORT&&(de=s.RGB16I),$===s.INT&&(de=s.RGB32I)),y===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(de=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(de=s.RGBA16UI),$===s.UNSIGNED_INT&&(de=s.RGBA32UI),$===s.BYTE&&(de=s.RGBA8I),$===s.SHORT&&(de=s.RGBA16I),$===s.INT&&(de=s.RGBA32I)),y===s.RGB&&($===s.UNSIGNED_SHORT&&Ce&&(de=Ce.RGB16_EXT),$===s.SHORT&&Ce&&(de=Ce.RGB16_SNORM_EXT),$===s.UNSIGNED_INT_5_9_9_9_REV&&(de=s.RGB9_E5),$===s.UNSIGNED_INT_10F_11F_11F_REV&&(de=s.R11F_G11F_B10F)),y===s.RGBA){const ge=Me?Ul:gt.getTransfer(fe);$===s.FLOAT&&(de=s.RGBA32F),$===s.HALF_FLOAT&&(de=s.RGBA16F),$===s.UNSIGNED_BYTE&&(de=ge===Dt?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT&&Ce&&(de=Ce.RGBA16_EXT),$===s.SHORT&&Ce&&(de=Ce.RGBA16_SNORM_EXT),$===s.UNSIGNED_SHORT_4_4_4_4&&(de=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(de=s.RGB5_A1)}return(de===s.R16F||de===s.R32F||de===s.RG16F||de===s.RG32F||de===s.RGBA16F||de===s.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function U(b,y){let $;return b?y===null||y===Li||y===Ya?$=s.DEPTH24_STENCIL8:y===Ai?$=s.DEPTH32F_STENCIL8:y===Xa&&($=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Li||y===Ya?$=s.DEPTH_COMPONENT24:y===Ai?$=s.DEPTH_COMPONENT32F:y===Xa&&($=s.DEPTH_COMPONENT16),$}function P(b,y){return x(b)===!0||b.isFramebufferTexture&&b.minFilter!==gn&&b.minFilter!==Tn?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function O(b){const y=b.target;y.removeEventListener("dispose",O),L(y),y.isVideoTexture&&v.delete(y),y.isHTMLTexture&&_.delete(y)}function T(b){const y=b.target;y.removeEventListener("dispose",T),z(y)}function L(b){const y=r.get(b);if(y.__webglInit===void 0)return;const $=b.source,te=M.get($);if(te){const fe=te[y.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&X(b),Object.keys(te).length===0&&M.delete($)}r.remove(b)}function X(b){const y=r.get(b);s.deleteTexture(y.__webglTexture);const $=b.source,te=M.get($);delete te[y.__cacheKey],c.memory.textures--}function z(b){const y=r.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),r.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(y.__webglFramebuffer[te]))for(let fe=0;fe<y.__webglFramebuffer[te].length;fe++)s.deleteFramebuffer(y.__webglFramebuffer[te][fe]);else s.deleteFramebuffer(y.__webglFramebuffer[te]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[te])}else{if(Array.isArray(y.__webglFramebuffer))for(let te=0;te<y.__webglFramebuffer.length;te++)s.deleteFramebuffer(y.__webglFramebuffer[te]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let te=0;te<y.__webglColorRenderbuffer.length;te++)y.__webglColorRenderbuffer[te]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[te]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const $=b.textures;for(let te=0,fe=$.length;te<fe;te++){const Me=r.get($[te]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove($[te])}r.remove(b)}let Z=0;function re(){Z=0}function he(){return Z}function q(b){Z=b}function oe(){const b=Z;return b>=o.maxTextures&&st("WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+o.maxTextures),Z+=1,b}function Y(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function H(b,y){const $=r.get(b);if(b.isVideoTexture&&G(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&$.__version!==b.version){const te=b.image;if(te===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Ue($,b,y);return}}else b.isExternalTexture&&($.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+y)}function ue(b,y){const $=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){Ue($,b,y);return}else b.isExternalTexture&&($.__webglTexture=b.sourceTexture?b.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+y)}function le(b,y){const $=r.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&$.__version!==b.version){Ue($,b,y);return}n.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+y)}function N(b,y){const $=r.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&$.__version!==b.version){Qe($,b,y);return}n.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+y)}const K={[pf]:s.REPEAT,[$i]:s.CLAMP_TO_EDGE,[mf]:s.MIRRORED_REPEAT},Ie={[gn]:s.NEAREST,[N_]:s.NEAREST_MIPMAP_NEAREST,[nl]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[Rc]:s.LINEAR_MIPMAP_NEAREST,[es]:s.LINEAR_MIPMAP_LINEAR},Ge={[F_]:s.NEVER,[V_]:s.ALWAYS,[O_]:s.LESS,[id]:s.LEQUAL,[B_]:s.EQUAL,[rd]:s.GEQUAL,[k_]:s.GREATER,[z_]:s.NOTEQUAL};function ke(b,y){if(y.type===Ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===Tn||y.magFilter===Rc||y.magFilter===nl||y.magFilter===es||y.minFilter===Tn||y.minFilter===Rc||y.minFilter===nl||y.minFilter===es)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(b,s.TEXTURE_WRAP_S,K[y.wrapS]),s.texParameteri(b,s.TEXTURE_WRAP_T,K[y.wrapT]),(b===s.TEXTURE_3D||b===s.TEXTURE_2D_ARRAY)&&s.texParameteri(b,s.TEXTURE_WRAP_R,K[y.wrapR]),s.texParameteri(b,s.TEXTURE_MAG_FILTER,Ie[y.magFilter]),s.texParameteri(b,s.TEXTURE_MIN_FILTER,Ie[y.minFilter]),y.compareFunction&&(s.texParameteri(b,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(b,s.TEXTURE_COMPARE_FUNC,Ge[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===gn||y.minFilter!==nl&&y.minFilter!==es||y.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const $=e.get("EXT_texture_filter_anisotropic");s.texParameterf(b,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,o.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function ne(b,y){let $=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",O));const te=y.source;let fe=M.get(te);fe===void 0&&(fe={},M.set(te,fe));const Me=Y(y);if(Me!==b.__cacheKey){fe[Me]===void 0&&(fe[Me]={texture:s.createTexture(),usedTimes:0},c.memory.textures++,$=!0),fe[Me].usedTimes++;const Ce=fe[b.__cacheKey];Ce!==void 0&&(fe[b.__cacheKey].usedTimes--,Ce.usedTimes===0&&X(y)),b.__cacheKey=Me,b.__webglTexture=fe[Me].texture}return $}function ve(b,y,$){return Math.floor(Math.floor(b/$)/y)}function me(b,y,$,te){const Me=b.updateRanges;if(Me.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,$,te,y.data);else{Me.sort((qe,Le)=>qe.start-Le.start);let Ce=0;for(let qe=1;qe<Me.length;qe++){const Le=Me[Ce],Re=Me[qe],je=Le.start+Le.count,et=ve(Re.start,y.width,4),it=ve(Le.start,y.width,4);Re.start<=je+1&&et===it&&ve(Re.start+Re.count-1,y.width,4)===et?Le.count=Math.max(Le.count,Re.start+Re.count-Le.start):(++Ce,Me[Ce]=Re)}Me.length=Ce+1;const de=n.getParameter(s.UNPACK_ROW_LENGTH),ge=n.getParameter(s.UNPACK_SKIP_PIXELS),Pe=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let qe=0,Le=Me.length;qe<Le;qe++){const Re=Me[qe],je=Math.floor(Re.start/4),et=Math.ceil(Re.count/4),it=je%y.width,k=Math.floor(je/y.width),Ae=et,pe=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,it),n.pixelStorei(s.UNPACK_SKIP_ROWS,k),n.texSubImage2D(s.TEXTURE_2D,0,it,k,Ae,pe,$,te,y.data)}b.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,de),n.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),n.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function Ue(b,y,$){let te=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(te=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(te=s.TEXTURE_3D);const fe=ne(b,y),Me=y.source;n.bindTexture(te,b.__webglTexture,s.TEXTURE0+$);const Ce=r.get(Me);if(Me.version!==Ce.__version||fe===!0){if(n.activeTexture(s.TEXTURE0+$),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){const pe=gt.getPrimaries(gt.workingColorSpace),be=y.colorSpace===Ar?null:gt.getPrimaries(y.colorSpace),De=y.colorSpace===Ar||pe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let ge=S(y.image,!1,o.maxTextureSize);ge=dn(y,ge);const Pe=u.convert(y.format,y.colorSpace),qe=u.convert(y.type);let Le=R(y.internalFormat,Pe,qe,y.normalized,y.colorSpace,y.isVideoTexture);ke(te,y);let Re;const je=y.mipmaps,et=y.isVideoTexture!==!0,it=Ce.__version===void 0||fe===!0,k=Me.dataReady,Ae=P(y,ge);if(y.isDepthTexture)Le=U(y.format===ts,y.type),it&&(et?n.texStorage2D(s.TEXTURE_2D,1,Le,ge.width,ge.height):n.texImage2D(s.TEXTURE_2D,0,Le,ge.width,ge.height,0,Pe,qe,null));else if(y.isDataTexture)if(je.length>0){et&&it&&n.texStorage2D(s.TEXTURE_2D,Ae,Le,je[0].width,je[0].height);for(let pe=0,be=je.length;pe<be;pe++)Re=je[pe],et?k&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Re.width,Re.height,Pe,qe,Re.data):n.texImage2D(s.TEXTURE_2D,pe,Le,Re.width,Re.height,0,Pe,qe,Re.data);y.generateMipmaps=!1}else et?(it&&n.texStorage2D(s.TEXTURE_2D,Ae,Le,ge.width,ge.height),k&&me(y,ge,Pe,qe)):n.texImage2D(s.TEXTURE_2D,0,Le,ge.width,ge.height,0,Pe,qe,ge.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){et&&it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Le,je[0].width,je[0].height,ge.depth);for(let pe=0,be=je.length;pe<be;pe++)if(Re=je[pe],y.format!==gi)if(Pe!==null)if(et){if(k)if(y.layerUpdates.size>0){const De=hm(Re.width,Re.height,y.format,y.type);for(const _e of y.layerUpdates){const We=Re.data.subarray(_e*De/Re.data.BYTES_PER_ELEMENT,(_e+1)*De/Re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,_e,Re.width,Re.height,1,Pe,We)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,ge.depth,Pe,Re.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,pe,Le,Re.width,Re.height,ge.depth,0,Re.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?k&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,ge.depth,Pe,qe,Re.data):n.texImage3D(s.TEXTURE_2D_ARRAY,pe,Le,Re.width,Re.height,ge.depth,0,Pe,qe,Re.data)}else{et&&it&&n.texStorage2D(s.TEXTURE_2D,Ae,Le,je[0].width,je[0].height);for(let pe=0,be=je.length;pe<be;pe++)Re=je[pe],y.format!==gi?Pe!==null?et?k&&n.compressedTexSubImage2D(s.TEXTURE_2D,pe,0,0,Re.width,Re.height,Pe,Re.data):n.compressedTexImage2D(s.TEXTURE_2D,pe,Le,Re.width,Re.height,0,Re.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?k&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Re.width,Re.height,Pe,qe,Re.data):n.texImage2D(s.TEXTURE_2D,pe,Le,Re.width,Re.height,0,Pe,qe,Re.data)}else if(y.isDataArrayTexture)if(et){if(it&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Le,ge.width,ge.height,ge.depth),k)if(y.layerUpdates.size>0){const pe=hm(ge.width,ge.height,y.format,y.type);for(const be of y.layerUpdates){const De=ge.data.subarray(be*pe/ge.data.BYTES_PER_ELEMENT,(be+1)*pe/ge.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,be,ge.width,ge.height,1,Pe,qe,De)}y.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Pe,qe,ge.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Le,ge.width,ge.height,ge.depth,0,Pe,qe,ge.data);else if(y.isData3DTexture)et?(it&&n.texStorage3D(s.TEXTURE_3D,Ae,Le,ge.width,ge.height,ge.depth),k&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Pe,qe,ge.data)):n.texImage3D(s.TEXTURE_3D,0,Le,ge.width,ge.height,ge.depth,0,Pe,qe,ge.data);else if(y.isFramebufferTexture){if(it)if(et)n.texStorage2D(s.TEXTURE_2D,Ae,Le,ge.width,ge.height);else{let pe=ge.width,be=ge.height;for(let De=0;De<Ae;De++)n.texImage2D(s.TEXTURE_2D,De,Le,pe,be,0,Pe,qe,null),pe>>=1,be>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){const pe=s.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),ge.parentNode!==pe){pe.appendChild(ge),_.add(y),pe.onpaint=be=>{const De=be.changedElements;for(const _e of _)De.includes(_e.image)&&(_e.needsUpdate=!0)},pe.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const De=s.RGBA,_e=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,De,_e,We,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(je.length>0){if(et&&it){const pe=Et(je[0]);n.texStorage2D(s.TEXTURE_2D,Ae,Le,pe.width,pe.height)}for(let pe=0,be=je.length;pe<be;pe++)Re=je[pe],et?k&&n.texSubImage2D(s.TEXTURE_2D,pe,0,0,Pe,qe,Re):n.texImage2D(s.TEXTURE_2D,pe,Le,Pe,qe,Re);y.generateMipmaps=!1}else if(et){if(it){const pe=Et(ge);n.texStorage2D(s.TEXTURE_2D,Ae,Le,pe.width,pe.height)}k&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,qe,ge)}else n.texImage2D(s.TEXTURE_2D,0,Le,Pe,qe,ge);x(y)&&I(te),Ce.__version=Me.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Qe(b,y,$){if(y.image.length!==6)return;const te=ne(b,y),fe=y.source;n.bindTexture(s.TEXTURE_CUBE_MAP,b.__webglTexture,s.TEXTURE0+$);const Me=r.get(fe);if(fe.version!==Me.__version||te===!0){n.activeTexture(s.TEXTURE0+$);const Ce=gt.getPrimaries(gt.workingColorSpace),de=y.colorSpace===Ar?null:gt.getPrimaries(y.colorSpace),ge=y.colorSpace===Ar||Ce===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Pe=y.isCompressedTexture||y.image[0].isCompressedTexture,qe=y.image[0]&&y.image[0].isDataTexture,Le=[];for(let _e=0;_e<6;_e++)!Pe&&!qe?Le[_e]=S(y.image[_e],!0,o.maxCubemapSize):Le[_e]=qe?y.image[_e].image:y.image[_e],Le[_e]=dn(y,Le[_e]);const Re=Le[0],je=u.convert(y.format,y.colorSpace),et=u.convert(y.type),it=R(y.internalFormat,je,et,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,Ae=Me.__version===void 0||te===!0,pe=fe.dataReady;let be=P(y,Re);ke(s.TEXTURE_CUBE_MAP,y);let De;if(Pe){k&&Ae&&n.texStorage2D(s.TEXTURE_CUBE_MAP,be,it,Re.width,Re.height);for(let _e=0;_e<6;_e++){De=Le[_e].mipmaps;for(let We=0;We<De.length;We++){const Ve=De[We];y.format!==gi?je!==null?k?pe&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,Ve.width,Ve.height,je,Ve.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,it,Ve.width,Ve.height,0,Ve.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,0,0,Ve.width,Ve.height,je,et,Ve.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We,it,Ve.width,Ve.height,0,je,et,Ve.data)}}}else{if(De=y.mipmaps,k&&Ae){De.length>0&&be++;const _e=Et(Le[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,be,it,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(qe){k?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Le[_e].width,Le[_e].height,je,et,Le[_e].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,Le[_e].width,Le[_e].height,0,je,et,Le[_e].data);for(let We=0;We<De.length;We++){const Nt=De[We].image[_e].image;k?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,Nt.width,Nt.height,je,et,Nt.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,it,Nt.width,Nt.height,0,je,et,Nt.data)}}else{k?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,je,et,Le[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,it,je,et,Le[_e]);for(let We=0;We<De.length;We++){const Ve=De[We];k?pe&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,0,0,je,et,Ve.image[_e]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,We+1,it,je,et,Ve.image[_e])}}}x(y)&&I(s.TEXTURE_CUBE_MAP),Me.__version=fe.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function Je(b,y,$,te,fe,Me){const Ce=u.convert($.format,$.colorSpace),de=u.convert($.type),ge=R($.internalFormat,Ce,de,$.normalized,$.colorSpace),Pe=r.get(y),qe=r.get($);if(qe.__renderTarget=y,!Pe.__hasExternalTextures){const Le=Math.max(1,y.width>>Me),Re=Math.max(1,y.height>>Me);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?n.texImage3D(fe,Me,ge,Le,Re,y.depth,0,Ce,de,null):n.texImage2D(fe,Me,ge,Le,Re,0,Ce,de,null)}n.bindFramebuffer(s.FRAMEBUFFER,b),Vt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,te,fe,qe.__webglTexture,0,bt(y)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,te,fe,qe.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(b,y,$){if(s.bindRenderbuffer(s.RENDERBUFFER,b),y.depthBuffer){const te=y.depthTexture,fe=te&&te.isDepthTexture?te.type:null,Me=U(y.stencilBuffer,fe),Ce=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Vt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(y),Me,y.width,y.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(y),Me,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,Me,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,b)}else{const te=y.textures;for(let fe=0;fe<te.length;fe++){const Me=te[fe],Ce=u.convert(Me.format,Me.colorSpace),de=u.convert(Me.type),ge=R(Me.internalFormat,Ce,de,Me.normalized,Me.colorSpace);Vt(y)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,bt(y),ge,y.width,y.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,bt(y),ge,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ge,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ut(b,y,$){const te=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const fe=r.get(y.depthTexture);if(fe.__renderTarget=y,(!fe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),te){if(fe.__webglInit===void 0&&(fe.__webglInit=!0,y.depthTexture.addEventListener("dispose",O)),fe.__webglTexture===void 0){fe.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,fe.__webglTexture),ke(s.TEXTURE_CUBE_MAP,y.depthTexture);const Pe=u.convert(y.depthTexture.format),qe=u.convert(y.depthTexture.type);let Le;y.depthTexture.format===Ji?Le=s.DEPTH_COMPONENT24:y.depthTexture.format===ts&&(Le=s.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Le,y.width,y.height,0,Pe,qe,null)}}else H(y.depthTexture,0);const Me=fe.__webglTexture,Ce=bt(y),de=te?s.TEXTURE_CUBE_MAP_POSITIVE_X+$:s.TEXTURE_2D,ge=y.depthTexture.format===ts?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===Ji)Vt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,de,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,ge,de,Me,0);else if(y.depthTexture.format===ts)Vt(y)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ge,de,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,ge,de,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function wt(b){const y=r.get(b),$=b.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==b.depthTexture){const te=b.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),te){const fe=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,te.removeEventListener("dispose",fe)};te.addEventListener("dispose",fe),y.__depthDisposeCallback=fe}y.__boundDepthTexture=te}if(b.depthTexture&&!y.__autoAllocateDepthBuffer)if($)for(let te=0;te<6;te++)ut(y.__webglFramebuffer[te],b,te);else{const te=b.texture.mipmaps;te&&te.length>0?ut(y.__webglFramebuffer[0],b,0):ut(y.__webglFramebuffer,b,0)}else if($){y.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[te]),y.__webglDepthbuffer[te]===void 0)y.__webglDepthbuffer[te]=s.createRenderbuffer(),kt(y.__webglDepthbuffer[te],b,!1);else{const fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer[te];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Me)}}else{const te=b.texture.mipmaps;if(te&&te.length>0?n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),kt(y.__webglDepthbuffer,b,!1);else{const fe=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,Me)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(b,y,$){const te=r.get(b);y!==void 0&&Je(te.__webglFramebuffer,b,b.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&wt(b)}function pt(b){const y=b.texture,$=r.get(b),te=r.get(y);b.addEventListener("dispose",T);const fe=b.textures,Me=b.isWebGLCubeRenderTarget===!0,Ce=fe.length>1;if(Ce||(te.__webglTexture===void 0&&(te.__webglTexture=s.createTexture()),te.__version=y.version,c.memory.textures++),Me){$.__webglFramebuffer=[];for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0){$.__webglFramebuffer[de]=[];for(let ge=0;ge<y.mipmaps.length;ge++)$.__webglFramebuffer[de][ge]=s.createFramebuffer()}else $.__webglFramebuffer[de]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){$.__webglFramebuffer=[];for(let de=0;de<y.mipmaps.length;de++)$.__webglFramebuffer[de]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let de=0,ge=fe.length;de<ge;de++){const Pe=r.get(fe[de]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),c.memory.textures++)}if(b.samples>0&&Vt(b)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let de=0;de<fe.length;de++){const ge=fe[de];$.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[de]);const Pe=u.convert(ge.format,ge.colorSpace),qe=u.convert(ge.type),Le=R(ge.internalFormat,Pe,qe,ge.normalized,ge.colorSpace,b.isXRRenderTarget===!0),Re=bt(b);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Le,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,$.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),b.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),kt($.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,te.__webglTexture),ke(s.TEXTURE_CUBE_MAP,y);for(let de=0;de<6;de++)if(y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Je($.__webglFramebuffer[de][ge],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,ge);else Je($.__webglFramebuffer[de],b,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);x(y)&&I(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let de=0,ge=fe.length;de<ge;de++){const Pe=fe[de],qe=r.get(Pe);let Le=s.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Le=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Le,qe.__webglTexture),ke(Le,Pe),Je($.__webglFramebuffer,b,Pe,s.COLOR_ATTACHMENT0+de,Le,0),x(Pe)&&I(Le)}n.unbindTexture()}else{let de=s.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(de=b.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(de,te.__webglTexture),ke(de,y),y.mipmaps&&y.mipmaps.length>0)for(let ge=0;ge<y.mipmaps.length;ge++)Je($.__webglFramebuffer[ge],b,y,s.COLOR_ATTACHMENT0,de,ge);else Je($.__webglFramebuffer,b,y,s.COLOR_ATTACHMENT0,de,0);x(y)&&I(de),n.unbindTexture()}b.depthBuffer&&wt(b)}function zt(b){const y=b.textures;for(let $=0,te=y.length;$<te;$++){const fe=y[$];if(x(fe)){const Me=F(b),Ce=r.get(fe).__webglTexture;n.bindTexture(Me,Ce),I(Me),n.unbindTexture()}}}const $t=[],Kt=[];function Wt(b){if(b.samples>0){if(Vt(b)===!1){const y=b.textures,$=b.width,te=b.height;let fe=s.COLOR_BUFFER_BIT;const Me=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(b),de=y.length>1;if(de)for(let Pe=0;Pe<y.length;Pe++)n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const ge=b.texture.mipmaps;ge&&ge.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Pe=0;Pe<y.length;Pe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const qe=r.get(y[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,$,te,0,0,$,te,fe,s.NEAREST),p===!0&&($t.length=0,Kt.length=0,$t.push(s.COLOR_ATTACHMENT0+Pe),b.depthBuffer&&b.resolveDepthBuffer===!1&&($t.push(Me),Kt.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Kt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$t))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let Pe=0;Pe<y.length;Pe++){n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const qe=r.get(y[Pe]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,qe,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&p){const y=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function bt(b){return Math.min(o.maxSamples,b.samples)}function Vt(b){const y=r.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function G(b){const y=c.render.frame;v.get(b)!==y&&(v.set(b,y),b.update())}function dn(b,y){const $=b.colorSpace,te=b.format,fe=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||$!==Il&&$!==Ar&&(gt.getTransfer($)===Dt?(te!==gi||fe!==ni)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Mt("WebGLTextures: Unsupported texture color space:",$)),y}function Et(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=oe,this.resetTextureUnits=re,this.getTextureUnits=he,this.setTextureUnits=q,this.setTexture2D=H,this.setTexture2DArray=ue,this.setTexture3D=le,this.setTextureCube=N,this.rebindTextures=vt,this.setupRenderTarget=pt,this.updateRenderTargetMipmap=zt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function dE(s,e){function n(r,o=Ar){let u;const c=gt.getTransfer(o);if(r===ni)return s.UNSIGNED_BYTE;if(r===Qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Km)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Zm)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===qm)return s.BYTE;if(r===$m)return s.SHORT;if(r===Xa)return s.UNSIGNED_SHORT;if(r===jf)return s.INT;if(r===Li)return s.UNSIGNED_INT;if(r===Ai)return s.FLOAT;if(r===Qi)return s.HALF_FLOAT;if(r===jm)return s.ALPHA;if(r===Qm)return s.RGB;if(r===gi)return s.RGBA;if(r===Ji)return s.DEPTH_COMPONENT;if(r===ts)return s.DEPTH_STENCIL;if(r===Jm)return s.RED;if(r===ed)return s.RED_INTEGER;if(r===is)return s.RG;if(r===td)return s.RG_INTEGER;if(r===nd)return s.RGBA_INTEGER;if(r===Rl||r===Cl||r===bl||r===Pl)if(c===Dt)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Rl)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Pl)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Rl)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cl)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bl)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Pl)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===gf||r===_f||r===vf||r===xf)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===gf)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===_f)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===vf)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===xf)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Sf||r===yf||r===Mf||r===Ef||r===Tf||r===Dl||r===wf)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Sf||r===yf)return c===Dt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Mf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(r===Ef)return u.COMPRESSED_R11_EAC;if(r===Tf)return u.COMPRESSED_SIGNED_R11_EAC;if(r===Dl)return u.COMPRESSED_RG11_EAC;if(r===wf)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Af||r===Rf||r===Cf||r===bf||r===Pf||r===Lf||r===Df||r===Nf||r===If||r===Uf||r===Ff||r===Of||r===Bf||r===kf)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Af)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Rf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===bf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Lf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Df)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Nf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===If)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Uf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ff)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Of)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Bf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===kf)return c===Dt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===zf||r===Vf||r===Hf)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===zf)return c===Dt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Vf)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hf)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gf||r===Wf||r===Nl||r===Xf)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===Gf)return u.COMPRESSED_RED_RGTC1_EXT;if(r===Wf)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Nl)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Xf)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ya?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const hE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new ug(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new _i({vertexShader:hE,fragmentShader:pE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new Za(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gE extends ss{constructor(e,n){super();const r=this;let o=null,u=1,c=null,d="local-floor",p=1,m=null,v=null,_=null,g=null,M=null,w=null;const C=typeof XRWebGLBinding<"u",S=new mE,x={},I=n.getContextAttributes();let F=null,R=null;const U=[],P=[],O=new St;let T=null;const L=new pi;L.viewport=new jt;const X=new pi;X.viewport=new jt;const z=[L,X],Z=new Av;let re=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ve=U[ne];return ve===void 0&&(ve=new Uc,U[ne]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ne){let ve=U[ne];return ve===void 0&&(ve=new Uc,U[ne]=ve),ve.getGripSpace()},this.getHand=function(ne){let ve=U[ne];return ve===void 0&&(ve=new Uc,U[ne]=ve),ve.getHandSpace()};function q(ne){const ve=P.indexOf(ne.inputSource);if(ve===-1)return;const me=U[ve];me!==void 0&&(me.update(ne.inputSource,ne.frame,m||c),me.dispatchEvent({type:ne.type,data:ne.inputSource}))}function oe(){o.removeEventListener("select",q),o.removeEventListener("selectstart",q),o.removeEventListener("selectend",q),o.removeEventListener("squeeze",q),o.removeEventListener("squeezestart",q),o.removeEventListener("squeezeend",q),o.removeEventListener("end",oe),o.removeEventListener("inputsourceschange",Y);for(let ne=0;ne<U.length;ne++){const ve=P[ne];ve!==null&&(P[ne]=null,U[ne].disconnect(ve))}re=null,he=null,S.reset();for(const ne in x)delete x[ne];e.setRenderTarget(F),M=null,g=null,_=null,o=null,R=null,ke.stop(),r.isPresenting=!1,e.setPixelRatio(T),e.setSize(O.width,O.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||c},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(o,n)),_},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ne){if(o=ne,o!==null){if(F=e.getRenderTarget(),o.addEventListener("select",q),o.addEventListener("selectstart",q),o.addEventListener("selectend",q),o.addEventListener("squeeze",q),o.addEventListener("squeezestart",q),o.addEventListener("squeezeend",q),o.addEventListener("end",oe),o.addEventListener("inputsourceschange",Y),I.xrCompatible!==!0&&await n.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(O),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Ue=null,Qe=null;I.depth&&(Qe=I.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,me=I.stencil?ts:Ji,Ue=I.stencil?Ya:Li);const Je={colorFormat:n.RGBA8,depthFormat:Qe,scaleFactor:u};_=this.getBinding(),g=_.createProjectionLayer(Je),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new bi(g.textureWidth,g.textureHeight,{format:gi,type:ni,depthTexture:new Ks(g.textureWidth,g.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const me={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(o,n,me),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new bi(M.framebufferWidth,M.framebufferHeight,{format:gi,type:ni,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(p),m=null,c=await o.requestReferenceSpace(d),ke.setContext(o),ke.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Y(ne){for(let ve=0;ve<ne.removed.length;ve++){const me=ne.removed[ve],Ue=P.indexOf(me);Ue>=0&&(P[Ue]=null,U[Ue].disconnect(me))}for(let ve=0;ve<ne.added.length;ve++){const me=ne.added[ve];let Ue=P.indexOf(me);if(Ue===-1){for(let Je=0;Je<U.length;Je++)if(Je>=P.length){P.push(me),Ue=Je;break}else if(P[Je]===null){P[Je]=me,Ue=Je;break}if(Ue===-1)break}const Qe=U[Ue];Qe&&Qe.connect(me)}}const H=new ie,ue=new ie;function le(ne,ve,me){H.setFromMatrixPosition(ve.matrixWorld),ue.setFromMatrixPosition(me.matrixWorld);const Ue=H.distanceTo(ue),Qe=ve.projectionMatrix.elements,Je=me.projectionMatrix.elements,kt=Qe[14]/(Qe[10]-1),ut=Qe[14]/(Qe[10]+1),wt=(Qe[9]+1)/Qe[5],vt=(Qe[9]-1)/Qe[5],pt=(Qe[8]-1)/Qe[0],zt=(Je[8]+1)/Je[0],$t=kt*pt,Kt=kt*zt,Wt=Ue/(-pt+zt),bt=Wt*-pt;if(ve.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(bt),ne.translateZ(Wt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Qe[10]===-1)ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Vt=kt+Wt,G=ut+Wt,dn=$t-bt,Et=Kt+(Ue-bt),b=wt*ut/G*Vt,y=vt*ut/G*Vt;ne.projectionMatrix.makePerspective(dn,Et,b,y,Vt,G),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function N(ne,ve){ve===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ve.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(o===null)return;let ve=ne.near,me=ne.far;S.texture!==null&&(S.depthNear>0&&(ve=S.depthNear),S.depthFar>0&&(me=S.depthFar)),Z.near=X.near=L.near=ve,Z.far=X.far=L.far=me,(re!==Z.near||he!==Z.far)&&(o.updateRenderState({depthNear:Z.near,depthFar:Z.far}),re=Z.near,he=Z.far),Z.layers.mask=ne.layers.mask|6,L.layers.mask=Z.layers.mask&-5,X.layers.mask=Z.layers.mask&-3;const Ue=ne.parent,Qe=Z.cameras;N(Z,Ue);for(let Je=0;Je<Qe.length;Je++)N(Qe[Je],Ue);Qe.length===2?le(Z,L,X):Z.projectionMatrix.copy(L.projectionMatrix),K(ne,Z,Ue)};function K(ne,ve,me){me===null?ne.matrix.copy(ve.matrixWorld):(ne.matrix.copy(me.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ve.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ve.projectionMatrix),ne.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Yf*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(ne){p=ne,g!==null&&(g.fixedFoveation=ne),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ne)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Z)},this.getCameraTexture=function(ne){return x[ne]};let Ie=null;function Ge(ne,ve){if(v=ve.getViewerPose(m||c),w=ve,v!==null){const me=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let Ue=!1;me.length!==Z.cameras.length&&(Z.cameras.length=0,Ue=!0);for(let ut=0;ut<me.length;ut++){const wt=me[ut];let vt=null;if(M!==null)vt=M.getViewport(wt);else{const zt=_.getViewSubImage(g,wt);vt=zt.viewport,ut===0&&(e.setRenderTargetTextures(R,zt.colorTexture,zt.depthStencilTexture),e.setRenderTarget(R))}let pt=z[ut];pt===void 0&&(pt=new pi,pt.layers.enable(ut),pt.viewport=new jt,z[ut]=pt),pt.matrix.fromArray(wt.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(wt.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(vt.x,vt.y,vt.width,vt.height),ut===0&&(Z.matrix.copy(pt.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ue===!0&&Z.cameras.push(pt)}const Qe=o.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const ut=_.getDepthInformation(me[0]);ut&&ut.isValid&&ut.texture&&S.init(ut,o.renderState)}if(Qe&&Qe.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let ut=0;ut<me.length;ut++){const wt=me[ut].camera;if(wt){let vt=x[wt];vt||(vt=new ug,x[wt]=vt);const pt=_.getCameraImage(wt);vt.sourceTexture=pt}}}}for(let me=0;me<U.length;me++){const Ue=P[me],Qe=U[me];Ue!==null&&Qe!==void 0&&Qe.update(Ue,ve,m||c)}Ie&&Ie(ne,ve),ve.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ve}),w=null}const ke=new dg;ke.setAnimationLoop(Ge),this.setAnimationLoop=function(ne){Ie=ne},this.dispose=function(){}}}const _E=new nn,xg=new lt;xg.set(-1,0,0,0,1,0,0,0,1);function vE(s,e){function n(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function r(S,x){x.color.getRGB(S.fogColor.value,cg(s)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,I,F,R){x.isNodeMaterial?x.uniformsNeedUpdate=!1:x.isMeshBasicMaterial?u(S,x):x.isMeshLambertMaterial?(u(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshToonMaterial?(u(S,x),_(S,x)):x.isMeshPhongMaterial?(u(S,x),v(S,x),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)):x.isMeshStandardMaterial?(u(S,x),g(S,x),x.isMeshPhysicalMaterial&&M(S,x,R)):x.isMeshMatcapMaterial?(u(S,x),w(S,x)):x.isMeshDepthMaterial?u(S,x):x.isMeshDistanceMaterial?(u(S,x),C(S,x)):x.isMeshNormalMaterial?u(S,x):x.isLineBasicMaterial?(c(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?p(S,x,I,F):x.isSpriteMaterial?m(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function u(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,n(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===kn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,n(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===kn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,n(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,n(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const I=e.get(x),F=I.envMap,R=I.envMapRotation;F&&(S.envMap.value=F,S.envMapRotation.value.setFromMatrix4(_E.makeRotationFromEuler(R)).transpose(),F.isCubeTexture&&F.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(xg),S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,S.aoMapTransform))}function c(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function p(S,x,I,F){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*I,S.scale.value=F*.5,x.map&&(S.map.value=x.map,n(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function m(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,n(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,n(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function v(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function g(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,I){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===kn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,S.specularIntensityMapTransform))}function w(S,x){x.matcap&&(S.matcap.value=x.matcap)}function C(S,x){const I=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function xE(s,e,n,r){let o={},u={},c=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,U){const P=U.program;r.uniformBlockBinding(R,P)}function m(R,U){let P=o[R.id];P===void 0&&(S(R),P=v(R),o[R.id]=P,R.addEventListener("dispose",I));const O=U.program;r.updateUBOMapping(R,O);const T=e.render.frame;u[R.id]!==T&&(g(R),u[R.id]=T)}function v(R){const U=_();R.__bindingPointIndex=U;const P=s.createBuffer(),O=R.__size,T=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,O,T),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,U,P),P}function _(){for(let R=0;R<d;R++)if(c.indexOf(R)===-1)return c.push(R),R;return Mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const U=o[R.id],P=R.uniforms,O=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let T=0,L=P.length;T<L;T++){const X=P[T];if(Array.isArray(X))for(let z=0,Z=X.length;z<Z;z++)M(X[z],T,z,O);else M(X,T,0,O)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(R,U,P,O){if(C(R,U,P,O)===!0){const T=R.__offset,L=R.value;if(Array.isArray(L)){let X=0;for(let z=0;z<L.length;z++){const Z=L[z],re=x(Z);w(Z,R.__data,X),typeof Z!="number"&&typeof Z!="boolean"&&!Z.isMatrix3&&!ArrayBuffer.isView(Z)&&(X+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(L,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,T,R.__data)}}function w(R,U,P){typeof R=="number"||typeof R=="boolean"?U[0]=R:R.isMatrix3?(U[0]=R.elements[0],U[1]=R.elements[1],U[2]=R.elements[2],U[3]=0,U[4]=R.elements[3],U[5]=R.elements[4],U[6]=R.elements[5],U[7]=0,U[8]=R.elements[6],U[9]=R.elements[7],U[10]=R.elements[8],U[11]=0):ArrayBuffer.isView(R)?U.set(new R.constructor(R.buffer,R.byteOffset,U.length)):R.toArray(U,P)}function C(R,U,P,O){const T=R.value,L=U+"_"+P;if(O[L]===void 0)return typeof T=="number"||typeof T=="boolean"?O[L]=T:ArrayBuffer.isView(T)?O[L]=T.slice():O[L]=T.clone(),!0;{const X=O[L];if(typeof T=="number"||typeof T=="boolean"){if(X!==T)return O[L]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(X.equals(T)===!1)return X.copy(T),!0}}return!1}function S(R){const U=R.uniforms;let P=0;const O=16;for(let L=0,X=U.length;L<X;L++){const z=Array.isArray(U[L])?U[L]:[U[L]];for(let Z=0,re=z.length;Z<re;Z++){const he=z[Z],q=Array.isArray(he.value)?he.value:[he.value];for(let oe=0,Y=q.length;oe<Y;oe++){const H=q[oe],ue=x(H),le=P%O,N=le%ue.boundary,K=le+N;P+=N,K!==0&&O-K<ue.storage&&(P+=O-K),he.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),he.__offset=P,P+=ue.storage}}}const T=P%O;return T>0&&(P+=O-T),R.__size=P,R.__cache={},this}function x(R){const U={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(U.boundary=4,U.storage=4):R.isVector2?(U.boundary=8,U.storage=8):R.isVector3||R.isColor?(U.boundary=16,U.storage=12):R.isVector4?(U.boundary=16,U.storage=16):R.isMatrix3?(U.boundary=48,U.storage=48):R.isMatrix4?(U.boundary=64,U.storage=64):R.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(U.boundary=16,U.storage=R.byteLength):st("WebGLRenderer: Unsupported uniform value type.",R),U}function I(R){const U=R.target;U.removeEventListener("dispose",I);const P=c.indexOf(U.__bindingPointIndex);c.splice(P,1),s.deleteBuffer(o[U.id]),delete o[U.id],delete u[U.id]}function F(){for(const R in o)s.deleteBuffer(o[R]);c=[],o={},u={}}return{bind:p,update:m,dispose:F}}const SE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ti=null;function yE(){return Ti===null&&(Ti=new hv(SE,16,16,is,Qi),Ti.name="DFG_LUT",Ti.minFilter=Tn,Ti.magFilter=Tn,Ti.wrapS=$i,Ti.wrapT=$i,Ti.generateMipmaps=!1,Ti.needsUpdate=!0),Ti}class ME{constructor(e={}){const{canvas:n=G_(),context:r=null,depth:o=!0,stencil:u=!1,alpha:c=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:g=!1,outputBufferType:M=ni}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=c;const C=M,S=new Set([nd,td,ed]),x=new Set([ni,Li,Xa,Ya,Qf,Jf]),I=new Uint32Array(4),F=new Int32Array(4),R=new ie;let U=null,P=null;const O=[],T=[];let L=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const X=this;let z=!1,Z=null,re=null,he=null,q=null;this._outputColorSpace=ti;let oe=0,Y=0,H=null,ue=-1,le=null;const N=new jt,K=new jt;let Ie=null;const Ge=new Ct(0);let ke=0,ne=n.width,ve=n.height,me=1,Ue=null,Qe=null;const Je=new jt(0,0,ne,ve),kt=new jt(0,0,ne,ve);let ut=!1;const wt=new og;let vt=!1,pt=!1;const zt=new nn,$t=new ie,Kt=new jt,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Vt(){return H===null?me:1}let G=r;function dn(A,W){return n.getContext(A,W)}try{const A={alpha:!0,depth:o,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zf}`),n.addEventListener("webglcontextlost",Nt,!1),n.addEventListener("webglcontextrestored",At,!1),n.addEventListener("webglcontextcreationerror",_n,!1),G===null){const W="webgl2";if(G=dn(W,A),G===null)throw dn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Mt("WebGLRenderer: "+A.message),A}let Et,b,y,$,te,fe,Me,Ce,de,ge,Pe,qe,Le,Re,je,et,it,k,Ae,pe,be,De,_e;function We(){Et=new yy(G),Et.init(),be=new dE(G,Et),b=new hy(G,Et,e,be),y=new cE(G,Et),b.reversedDepthBuffer&&g&&y.buffers.depth.setReversed(!0),re=G.createFramebuffer(),he=G.createFramebuffer(),q=G.createFramebuffer(),$=new Ty(G),te=new ZM,fe=new fE(G,Et,y,te,b,be,$),Me=new Sy(X),Ce=new Cv(G),De=new fy(G,Ce),de=new My(G,Ce,$,De),ge=new Ay(G,de,Ce,De,$),k=new wy(G,b,fe),je=new py(te),Pe=new KM(X,Me,Et,b,De,je),qe=new vE(X,te),Le=new QM,Re=new rE(Et),it=new cy(X,Me,y,ge,w,p),et=new uE(X,ge,b),_e=new xE(G,$,b,y),Ae=new dy(G,Et,$),pe=new Ey(G,Et,$),$.programs=Pe.programs,X.capabilities=b,X.extensions=Et,X.properties=te,X.renderLists=Le,X.shadowMap=et,X.state=y,X.info=$}We(),C!==ni&&(L=new Cy(C,n.width,n.height,d,o,u));const Ve=new gE(X,G);this.xr=Ve,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(A){A!==void 0&&(me=A,this.setSize(ne,ve,!1))},this.getSize=function(A){return A.set(ne,ve)},this.setSize=function(A,W,se=!0){if(Ve.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=A,ve=W,n.width=Math.floor(A*me),n.height=Math.floor(W*me),se===!0&&(n.style.width=A+"px",n.style.height=W+"px"),L!==null&&L.setSize(n.width,n.height),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(ne*me,ve*me).floor()},this.setDrawingBufferSize=function(A,W,se){ne=A,ve=W,me=se,n.width=Math.floor(A*se),n.height=Math.floor(W*se),this.setViewport(0,0,A,W)},this.setEffects=function(A){if(C===ni){Mt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let W=0;W<A.length;W++)if(A[W].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}L.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(N)},this.getViewport=function(A){return A.copy(Je)},this.setViewport=function(A,W,se,J){A.isVector4?Je.set(A.x,A.y,A.z,A.w):Je.set(A,W,se,J),y.viewport(N.copy(Je).multiplyScalar(me).round())},this.getScissor=function(A){return A.copy(kt)},this.setScissor=function(A,W,se,J){A.isVector4?kt.set(A.x,A.y,A.z,A.w):kt.set(A,W,se,J),y.scissor(K.copy(kt).multiplyScalar(me).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){y.setScissorTest(ut=A)},this.setOpaqueSort=function(A){Ue=A},this.setTransparentSort=function(A){Qe=A},this.getClearColor=function(A){return A.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(A=!0,W=!0,se=!0){let J=0;if(A){let Q=!1;if(H!==null){const we=H.texture.format;Q=S.has(we)}if(Q){const we=H.texture.type,Be=x.has(we),Te=it.getClearColor(),Xe=it.getClearAlpha(),Ze=Te.r,at=Te.g,ot=Te.b;Be?(I[0]=Ze,I[1]=at,I[2]=ot,I[3]=Xe,G.clearBufferuiv(G.COLOR,0,I)):(F[0]=Ze,F[1]=at,F[2]=ot,F[3]=Xe,G.clearBufferiv(G.COLOR,0,F))}else J|=G.COLOR_BUFFER_BIT}W&&(J|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(J|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),J!==0&&G.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),Z=A},this.dispose=function(){n.removeEventListener("webglcontextlost",Nt,!1),n.removeEventListener("webglcontextrestored",At,!1),n.removeEventListener("webglcontextcreationerror",_n,!1),it.dispose(),Le.dispose(),Re.dispose(),te.dispose(),Me.dispose(),ge.dispose(),De.dispose(),_e.dispose(),Pe.dispose(),Ve.dispose(),Ve.removeEventListener("sessionstart",ja),Ve.removeEventListener("sessionend",Qa),wn.stop()};function Nt(A){A.preventDefault(),$p("WebGLRenderer: Context Lost."),z=!0}function At(){$p("WebGLRenderer: Context Restored."),z=!1;const A=$.autoReset,W=et.enabled,se=et.autoUpdate,J=et.needsUpdate,Q=et.type;We(),$.autoReset=A,et.enabled=W,et.autoUpdate=se,et.needsUpdate=J,et.type=Q}function _n(A){Mt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function qn(A){const W=A.target;W.removeEventListener("dispose",qn),br(W)}function br(A){as(A),te.remove(A)}function as(A){const W=te.get(A).programs;W!==void 0&&(W.forEach(function(se){Pe.releaseProgram(se)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,se,J,Q,we){W===null&&(W=Wt);const Be=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Te=Xt(A,W,se,J,Q);y.setMaterial(J,Be);let Xe=se.index,Ze=1;if(J.wireframe===!0){if(Xe=de.getWireframeAttribute(se),Xe===void 0)return;Ze=2}const at=se.drawRange,ot=se.attributes.position;let $e=at.start*Ze,xt=(at.start+at.count)*Ze;we!==null&&($e=Math.max($e,we.start*Ze),xt=Math.min(xt,(we.start+we.count)*Ze)),Xe!==null?($e=Math.max($e,0),xt=Math.min(xt,Xe.count)):ot!=null&&($e=Math.max($e,0),xt=Math.min(xt,ot.count));const It=xt-$e;if(It<0||It===1/0)return;De.setup(Q,J,Te,se,Xe);let Ht,Pt=Ae;if(Xe!==null&&(Ht=Ce.get(Xe),Pt=pe,Pt.setIndex(Ht)),Q.isMesh)J.wireframe===!0?(y.setLineWidth(J.wireframeLinewidth*Vt()),Pt.setMode(G.LINES)):Pt.setMode(G.TRIANGLES);else if(Q.isLine){let Jt=J.linewidth;Jt===void 0&&(Jt=1),y.setLineWidth(Jt*Vt()),Q.isLineSegments?Pt.setMode(G.LINES):Q.isLineLoop?Pt.setMode(G.LINE_LOOP):Pt.setMode(G.LINE_STRIP)}else Q.isPoints?Pt.setMode(G.POINTS):Q.isSprite&&Pt.setMode(G.TRIANGLES);if(Q.isBatchedMesh)if(Et.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const Jt=Q._multiDrawStarts,Fe=Q._multiDrawCounts,hn=Q._multiDrawCount,ft=Xe?Ce.get(Xe).bytesPerElement:1,Pn=te.get(J).currentProgram.getUniforms();for(let Ln=0;Ln<hn;Ln++)Pn.setValue(G,"_gl_DrawID",Ln),Pt.render(Jt[Ln]/ft,Fe[Ln])}else if(Q.isInstancedMesh)Pt.renderInstances($e,It,Q.count);else if(se.isInstancedBufferGeometry){const Jt=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Fe=Math.min(se.instanceCount,Jt);Pt.renderInstances($e,It,Fe)}else Pt.render($e,It)};function Pr(A,W,se){A.transparent===!0&&A.side===qi&&A.forceSinglePass===!1?(A.side=kn,A.needsUpdate=!0,Nr(A,W,se),A.side=Cr,A.needsUpdate=!0,Nr(A,W,se),A.side=qi):Nr(A,W,se)}this.compile=function(A,W,se=null){se===null&&(se=A),P=Re.get(se),P.init(W),T.push(P),se.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),A!==se&&A.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights();const J=new Set;return A.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const we=Q.material;if(we)if(Array.isArray(we))for(let Be=0;Be<we.length;Be++){const Te=we[Be];Pr(Te,se,Q),J.add(Te)}else Pr(we,se,Q),J.add(we)}),P=T.pop(),J},this.compileAsync=function(A,W,se=null){const J=this.compile(A,W,se);return new Promise(Q=>{function we(){if(J.forEach(function(Be){te.get(Be).currentProgram.isReady()&&J.delete(Be)}),J.size===0){Q(A);return}setTimeout(we,10)}Et.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Lr=null;function Gl(A){Lr&&Lr(A)}function ja(){wn.stop()}function Qa(){wn.start()}const wn=new dg;wn.setAnimationLoop(Gl),typeof self<"u"&&wn.setContext(self),this.setAnimationLoop=function(A){Lr=A,Ve.setAnimationLoop(A),A===null?wn.stop():wn.start()},Ve.addEventListener("sessionstart",ja),Ve.addEventListener("sessionend",Qa),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){Mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Z!==null&&Z.renderStart(A,W);const se=Ve.enabled===!0&&Ve.isPresenting===!0,J=L!==null&&(H===null||se)&&L.begin(X,H);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ve.enabled===!0&&Ve.isPresenting===!0&&(L===null||L.isCompositing()===!1)&&(Ve.cameraAutoUpdate===!0&&Ve.updateCamera(W),W=Ve.getCamera()),A.isScene===!0&&A.onBeforeRender(X,A,W,H),P=Re.get(A,T.length),P.init(W),P.state.textureUnits=fe.getTextureUnits(),T.push(P),zt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),wt.setFromProjectionMatrix(zt,Ri,W.reversedDepth),pt=this.localClippingEnabled,vt=je.init(this.clippingPlanes,pt),U=Le.get(A,O.length),U.init(),O.push(U),Ve.enabled===!0&&Ve.isPresenting===!0){const Be=X.xr.getDepthSensingMesh();Be!==null&&os(Be,W,-1/0,X.sortObjects)}os(A,W,0,X.sortObjects),U.finish(),X.sortObjects===!0&&U.sort(Ue,Qe,W.reversedDepth),bt=Ve.enabled===!1||Ve.isPresenting===!1||Ve.hasDepthSensing()===!1,bt&&it.addToRenderList(U,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&je.beginShadows();const Q=P.state.shadowsArray;if(et.render(Q,A,W),vt===!0&&je.endShadows(),(J&&L.hasRenderPass())===!1){const Be=U.opaque,Te=U.transmissive;if(P.setupLights(),W.isArrayCamera){const Xe=W.cameras;if(Te.length>0)for(let Ze=0,at=Xe.length;Ze<at;Ze++){const ot=Xe[Ze];Ja(Be,Te,A,ot)}bt&&it.render(A);for(let Ze=0,at=Xe.length;Ze<at;Ze++){const ot=Xe[Ze];ea(U,A,ot,ot.viewport)}}else Te.length>0&&Ja(Be,Te,A,W),bt&&it.render(A),ea(U,A,W)}H!==null&&Y===0&&(fe.updateMultisampleRenderTarget(H),fe.updateRenderTargetMipmap(H)),J&&L.end(X),A.isScene===!0&&A.onAfterRender(X,A,W),De.resetDefaultState(),ue=-1,le=null,T.pop(),T.length>0?(P=T[T.length-1],fe.setTextureUnits(P.state.textureUnits),vt===!0&&je.setGlobalState(X.clippingPlanes,P.state.camera)):P=null,O.pop(),O.length>0?U=O[O.length-1]:U=null,Z!==null&&Z.renderEnd()};function os(A,W,se,J){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)se=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLightProbeGrid)P.pushLightProbeGrid(A);else if(A.isLight)P.pushLight(A),A.castShadow&&P.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||wt.intersectsSprite(A)){J&&Kt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(zt);const Be=ge.update(A),Te=A.material;Te.visible&&U.push(A,Be,Te,se,Kt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||wt.intersectsObject(A))){const Be=ge.update(A),Te=A.material;if(J&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Kt.copy(A.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Kt.copy(Be.boundingSphere.center)),Kt.applyMatrix4(A.matrixWorld).applyMatrix4(zt)),Array.isArray(Te)){const Xe=Be.groups;for(let Ze=0,at=Xe.length;Ze<at;Ze++){const ot=Xe[Ze],$e=Te[ot.materialIndex];$e&&$e.visible&&U.push(A,Be,$e,se,Kt.z,ot)}}else Te.visible&&U.push(A,Be,Te,se,Kt.z,null)}}const we=A.children;for(let Be=0,Te=we.length;Be<Te;Be++)os(we[Be],W,se,J)}function ea(A,W,se,J){const{opaque:Q,transmissive:we,transparent:Be}=A;P.setupLightsView(se),vt===!0&&je.setGlobalState(X.clippingPlanes,se),J&&y.viewport(N.copy(J)),Q.length>0&&Dr(Q,W,se),we.length>0&&Dr(we,W,se),Be.length>0&&Dr(Be,W,se),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Ja(A,W,se,J){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[J.id]===void 0){const $e=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[J.id]=new bi(1,1,{generateMipmaps:!0,type:$e?Qi:ni,minFilter:es,samples:Math.max(4,b.samples),stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace})}const we=P.state.transmissionRenderTarget[J.id],Be=J.viewport||N;we.setSize(Be.z*X.transmissionResolutionScale,Be.w*X.transmissionResolutionScale);const Te=X.getRenderTarget(),Xe=X.getActiveCubeFace(),Ze=X.getActiveMipmapLevel();X.setRenderTarget(we),X.getClearColor(Ge),ke=X.getClearAlpha(),ke<1&&X.setClearColor(16777215,.5),X.clear(),bt&&it.render(se);const at=X.toneMapping;X.toneMapping=Ci;const ot=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),P.setupLightsView(J),vt===!0&&je.setGlobalState(X.clippingPlanes,J),Dr(A,se,J),fe.updateMultisampleRenderTarget(we),fe.updateRenderTargetMipmap(we),Et.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let xt=0,It=W.length;xt<It;xt++){const Ht=W[xt],{object:Pt,geometry:Jt,material:Fe,group:hn}=Ht;if(Fe.side===qi&&Pt.layers.test(J.layers)){const ft=Fe.side;Fe.side=kn,Fe.needsUpdate=!0,ta(Pt,se,J,Jt,Fe,hn),Fe.side=ft,Fe.needsUpdate=!0,$e=!0}}$e===!0&&(fe.updateMultisampleRenderTarget(we),fe.updateRenderTargetMipmap(we))}X.setRenderTarget(Te,Xe,Ze),X.setClearColor(Ge,ke),ot!==void 0&&(J.viewport=ot),X.toneMapping=at}function Dr(A,W,se){const J=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,we=A.length;Q<we;Q++){const Be=A[Q],{object:Te,geometry:Xe,group:Ze}=Be;let at=Be.material;at.allowOverride===!0&&J!==null&&(at=J),Te.layers.test(se.layers)&&ta(Te,W,se,Xe,at,Ze)}}function ta(A,W,se,J,Q,we){A.onBeforeRender(X,W,se,J,Q,we),A.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Q.onBeforeRender(X,W,se,J,A,we),Q.transparent===!0&&Q.side===qi&&Q.forceSinglePass===!1?(Q.side=kn,Q.needsUpdate=!0,X.renderBufferDirect(se,W,J,Q,A,we),Q.side=Cr,Q.needsUpdate=!0,X.renderBufferDirect(se,W,J,Q,A,we),Q.side=qi):X.renderBufferDirect(se,W,J,Q,A,we),A.onAfterRender(X,W,se,J,Q,we)}function Nr(A,W,se){W.isScene!==!0&&(W=Wt);const J=te.get(A),Q=P.state.lights,we=P.state.shadowsArray,Be=Q.state.version,Te=Pe.getParameters(A,Q.state,we,W,se,P.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Te);let Ze=J.programs;J.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?W.environment:null,J.fog=W.fog;const at=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;J.envMap=Me.get(A.envMap||J.environment,at),J.envMapRotation=J.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,Ze===void 0&&(A.addEventListener("dispose",qn),Ze=new Map,J.programs=Ze);let ot=Ze.get(Xe);if(ot!==void 0){if(J.currentProgram===ot&&J.lightsStateVersion===Be)return eo(A,Te),ot}else Te.uniforms=Pe.getUniforms(A),Z!==null&&A.isNodeMaterial&&Z.build(A,se,Te),A.onBeforeCompile(Te,X),ot=Pe.acquireProgram(Te,Xe),Ze.set(Xe,ot),J.uniforms=Te.uniforms;const $e=J.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($e.clippingPlanes=je.uniform),eo(A,Te),J.needsLights=ia(A),J.lightsStateVersion=Be,J.needsLights&&($e.ambientLightColor.value=Q.state.ambient,$e.lightProbe.value=Q.state.probe,$e.directionalLights.value=Q.state.directional,$e.directionalLightShadows.value=Q.state.directionalShadow,$e.spotLights.value=Q.state.spot,$e.spotLightShadows.value=Q.state.spotShadow,$e.rectAreaLights.value=Q.state.rectArea,$e.ltc_1.value=Q.state.rectAreaLTC1,$e.ltc_2.value=Q.state.rectAreaLTC2,$e.pointLights.value=Q.state.point,$e.pointLightShadows.value=Q.state.pointShadow,$e.hemisphereLights.value=Q.state.hemi,$e.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,$e.spotLightMatrix.value=Q.state.spotLightMatrix,$e.spotLightMap.value=Q.state.spotLightMap,$e.pointShadowMatrix.value=Q.state.pointShadowMatrix),J.lightProbeGrid=P.state.lightProbeGridArray.length>0,J.currentProgram=ot,J.uniformsList=null,ot}function na(A){if(A.uniformsList===null){const W=A.currentProgram.getUniforms();A.uniformsList=Ll.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function eo(A,W){const se=te.get(A);se.outputColorSpace=W.outputColorSpace,se.batching=W.batching,se.batchingColor=W.batchingColor,se.instancing=W.instancing,se.instancingColor=W.instancingColor,se.instancingMorph=W.instancingMorph,se.skinning=W.skinning,se.morphTargets=W.morphTargets,se.morphNormals=W.morphNormals,se.morphColors=W.morphColors,se.morphTargetsCount=W.morphTargetsCount,se.numClippingPlanes=W.numClippingPlanes,se.numIntersection=W.numClipIntersection,se.vertexAlphas=W.vertexAlphas,se.vertexTangents=W.vertexTangents,se.toneMapping=W.toneMapping}function Wl(A,W){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(W.matrixWorld);for(let se=0,J=A.length;se<J;se++){const Q=A[se];if(Q.texture!==null&&Q.boundingBox.containsPoint(R))return Q}return null}function Xt(A,W,se,J,Q){W.isScene!==!0&&(W=Wt),fe.resetTextureUnits();const we=W.fog,Be=J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial?W.environment:null,Te=H===null?X.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:gt.workingColorSpace,Xe=J.isMeshStandardMaterial||J.isMeshLambertMaterial&&!J.envMap||J.isMeshPhongMaterial&&!J.envMap,Ze=Me.get(J.envMap||Be,Xe),at=J.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,ot=!!se.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),$e=!!se.morphAttributes.position,xt=!!se.morphAttributes.normal,It=!!se.morphAttributes.color;let Ht=Ci;J.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ht=X.toneMapping);const Pt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,Jt=Pt!==void 0?Pt.length:0,Fe=te.get(J),hn=P.state.lights;if(vt===!0&&(pt===!0||A!==le)){const Lt=A===le&&J.id===ue;je.setState(J,A,Lt)}let ft=!1;J.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==hn.state.version||Fe.outputColorSpace!==Te||Q.isBatchedMesh&&Fe.batching===!1||!Q.isBatchedMesh&&Fe.batching===!0||Q.isBatchedMesh&&Fe.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&Fe.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&Fe.instancing===!1||!Q.isInstancedMesh&&Fe.instancing===!0||Q.isSkinnedMesh&&Fe.skinning===!1||!Q.isSkinnedMesh&&Fe.skinning===!0||Q.isInstancedMesh&&Fe.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Fe.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Fe.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Fe.instancingMorph===!1&&Q.morphTexture!==null||Fe.envMap!==Ze||J.fog===!0&&Fe.fog!==we||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==je.numPlanes||Fe.numIntersection!==je.numIntersection)||Fe.vertexAlphas!==at||Fe.vertexTangents!==ot||Fe.morphTargets!==$e||Fe.morphNormals!==xt||Fe.morphColors!==It||Fe.toneMapping!==Ht||Fe.morphTargetsCount!==Jt||!!Fe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,Fe.__version=J.version);let Pn=Fe.currentProgram;ft===!0&&(Pn=Nr(J,W,Q),Z&&J.isNodeMaterial&&Z.onUpdateProgram(J,Pn,Fe));let Ln=!1,dt=!1,Ni=!1;const Rt=Pn.getUniforms(),Ft=Fe.uniforms;if(y.useProgram(Pn.program)&&(Ln=!0,dt=!0,Ni=!0),J.id!==ue&&(ue=J.id,dt=!0),Fe.needsLights){const Lt=Wl(P.state.lightProbeGridArray,Q);Fe.lightProbeGrid!==Lt&&(Fe.lightProbeGrid=Lt,dt=!0)}if(Ln||le!==A){y.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Rt.setValue(G,"projectionMatrix",A.projectionMatrix),Rt.setValue(G,"viewMatrix",A.matrixWorldInverse);const ri=Rt.map.cameraPosition;ri!==void 0&&ri.setValue(G,$t.setFromMatrixPosition(A.matrixWorld)),b.logarithmicDepthBuffer&&Rt.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Rt.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),le!==A&&(le=A,dt=!0,Ni=!0)}if(Fe.needsLights&&(hn.state.directionalShadowMap.length>0&&Rt.setValue(G,"directionalShadowMap",hn.state.directionalShadowMap,fe),hn.state.spotShadowMap.length>0&&Rt.setValue(G,"spotShadowMap",hn.state.spotShadowMap,fe),hn.state.pointShadowMap.length>0&&Rt.setValue(G,"pointShadowMap",hn.state.pointShadowMap,fe)),Q.isSkinnedMesh){Rt.setOptional(G,Q,"bindMatrix"),Rt.setOptional(G,Q,"bindMatrixInverse");const Lt=Q.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Rt.setValue(G,"boneTexture",Lt.boneTexture,fe))}Q.isBatchedMesh&&(Rt.setOptional(G,Q,"batchingTexture"),Rt.setValue(G,"batchingTexture",Q._matricesTexture,fe),Rt.setOptional(G,Q,"batchingIdTexture"),Rt.setValue(G,"batchingIdTexture",Q._indirectTexture,fe),Rt.setOptional(G,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Rt.setValue(G,"batchingColorTexture",Q._colorsTexture,fe));const ii=se.morphAttributes;if((ii.position!==void 0||ii.normal!==void 0||ii.color!==void 0)&&k.update(Q,se,Pn),(dt||Fe.receiveShadow!==Q.receiveShadow)&&(Fe.receiveShadow=Q.receiveShadow,Rt.setValue(G,"receiveShadow",Q.receiveShadow)),(J.isMeshStandardMaterial||J.isMeshLambertMaterial||J.isMeshPhongMaterial)&&J.envMap===null&&W.environment!==null&&(Ft.envMapIntensity.value=W.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=yE()),dt){if(Rt.setValue(G,"toneMappingExposure",X.toneMappingExposure),Fe.needsLights&&Xl(Ft,Ni),we&&J.fog===!0&&qe.refreshFogUniforms(Ft,we),qe.refreshMaterialUniforms(Ft,J,me,ve,P.state.transmissionRenderTarget[A.id]),Fe.needsLights&&Fe.lightProbeGrid){const Lt=Fe.lightProbeGrid;Ft.probesSH.value=Lt.texture,Ft.probesMin.value.copy(Lt.boundingBox.min),Ft.probesMax.value.copy(Lt.boundingBox.max),Ft.probesResolution.value.copy(Lt.resolution)}Ll.upload(G,na(Fe),Ft,fe)}if(J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ll.upload(G,na(Fe),Ft,fe),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Rt.setValue(G,"center",Q.center),Rt.setValue(G,"modelViewMatrix",Q.modelViewMatrix),Rt.setValue(G,"normalMatrix",Q.normalMatrix),Rt.setValue(G,"modelMatrix",Q.matrixWorld),J.uniformsGroups!==void 0){const Lt=J.uniformsGroups;for(let ri=0,vi=Lt.length;ri<vi;ri++){const Ir=Lt[ri];_e.update(Ir,Pn),_e.bind(Ir,Pn)}}return Pn}function Xl(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ia(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(A,W,se){const J=te.get(A);J.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),te.get(A.texture).__webglTexture=W,te.get(A.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:se,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,W){const se=te.get(A);se.__webglFramebuffer=W,se.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,se=0){H=A,oe=W,Y=se;let J=null,Q=!1,we=!1;if(A){const Te=te.get(A);if(Te.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(G.FRAMEBUFFER,Te.__webglFramebuffer),N.copy(A.viewport),K.copy(A.scissor),Ie=A.scissorTest,y.viewport(N),y.scissor(K),y.setScissorTest(Ie),ue=-1;return}else if(Te.__webglFramebuffer===void 0)fe.setupRenderTarget(A);else if(Te.__hasExternalTextures)fe.rebindTextures(A,te.get(A.texture).__webglTexture,te.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const at=A.depthTexture;if(Te.__boundDepthTexture!==at){if(at!==null&&te.has(at)&&(A.width!==at.image.width||A.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");fe.setupDepthRenderbuffer(A)}}const Xe=A.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const Ze=te.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ze[W])?J=Ze[W][se]:J=Ze[W],Q=!0):A.samples>0&&fe.useMultisampledRTT(A)===!1?J=te.get(A).__webglMultisampledFramebuffer:Array.isArray(Ze)?J=Ze[se]:J=Ze,N.copy(A.viewport),K.copy(A.scissor),Ie=A.scissorTest}else N.copy(Je).multiplyScalar(me).floor(),K.copy(kt).multiplyScalar(me).floor(),Ie=ut;if(se!==0&&(J=re),y.bindFramebuffer(G.FRAMEBUFFER,J)&&y.drawBuffers(A,J),y.viewport(N),y.scissor(K),y.setScissorTest(Ie),Q){const Te=te.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+W,Te.__webglTexture,se)}else if(we){const Te=W;for(let Xe=0;Xe<A.textures.length;Xe++){const Ze=te.get(A.textures[Xe]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,se,Te)}}else if(A!==null&&se!==0){const Te=te.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Te.__webglTexture,se)}ue=-1},this.readRenderTargetPixels=function(A,W,se,J,Q,we,Be,Te=0){if(!(A&&A.isWebGLRenderTarget)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){y.bindFramebuffer(G.FRAMEBUFFER,Xe);try{const Ze=A.textures[Te],at=Ze.format,ot=Ze.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),!b.textureFormatReadable(at)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!b.textureTypeReadable(ot)){Mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-J&&se>=0&&se<=A.height-Q&&G.readPixels(W,se,J,Q,be.convert(at),be.convert(ot),we)}finally{const Ze=H!==null?te.get(H).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(A,W,se,J,Q,we,Be,Te=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=te.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe)if(W>=0&&W<=A.width-J&&se>=0&&se<=A.height-Q){y.bindFramebuffer(G.FRAMEBUFFER,Xe);const Ze=A.textures[Te],at=Ze.format,ot=Ze.type;if(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Te),!b.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!b.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.bufferData(G.PIXEL_PACK_BUFFER,we.byteLength,G.STREAM_READ),G.readPixels(W,se,J,Q,be.convert(at),be.convert(ot),0);const xt=H!==null?te.get(H).__webglFramebuffer:null;y.bindFramebuffer(G.FRAMEBUFFER,xt);const It=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await W_(G,It,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,$e),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,we),G.deleteBuffer($e),G.deleteSync(It),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,W=null,se=0){const J=Math.pow(2,-se),Q=Math.floor(A.image.width*J),we=Math.floor(A.image.height*J),Be=W!==null?W.x:0,Te=W!==null?W.y:0;fe.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,se,0,0,Be,Te,Q,we),y.unbindTexture()},this.copyTextureToTexture=function(A,W,se=null,J=null,Q=0,we=0){let Be,Te,Xe,Ze,at,ot,$e,xt,It;const Ht=A.isCompressedTexture?A.mipmaps[we]:A.image;if(se!==null)Be=se.max.x-se.min.x,Te=se.max.y-se.min.y,Xe=se.isBox3?se.max.z-se.min.z:1,Ze=se.min.x,at=se.min.y,ot=se.isBox3?se.min.z:0;else{const Ft=Math.pow(2,-Q);Be=Math.floor(Ht.width*Ft),Te=Math.floor(Ht.height*Ft),A.isDataArrayTexture?Xe=Ht.depth:A.isData3DTexture?Xe=Math.floor(Ht.depth*Ft):Xe=1,Ze=0,at=0,ot=0}J!==null?($e=J.x,xt=J.y,It=J.z):($e=0,xt=0,It=0);const Pt=be.convert(W.format),Jt=be.convert(W.type);let Fe;W.isData3DTexture?(fe.setTexture3D(W,0),Fe=G.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(fe.setTexture2DArray(W,0),Fe=G.TEXTURE_2D_ARRAY):(fe.setTexture2D(W,0),Fe=G.TEXTURE_2D),y.activeTexture(G.TEXTURE0),y.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,W.flipY),y.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),y.pixelStorei(G.UNPACK_ALIGNMENT,W.unpackAlignment);const hn=y.getParameter(G.UNPACK_ROW_LENGTH),ft=y.getParameter(G.UNPACK_IMAGE_HEIGHT),Pn=y.getParameter(G.UNPACK_SKIP_PIXELS),Ln=y.getParameter(G.UNPACK_SKIP_ROWS),dt=y.getParameter(G.UNPACK_SKIP_IMAGES);y.pixelStorei(G.UNPACK_ROW_LENGTH,Ht.width),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ht.height),y.pixelStorei(G.UNPACK_SKIP_PIXELS,Ze),y.pixelStorei(G.UNPACK_SKIP_ROWS,at),y.pixelStorei(G.UNPACK_SKIP_IMAGES,ot);const Ni=A.isDataArrayTexture||A.isData3DTexture,Rt=W.isDataArrayTexture||W.isData3DTexture;if(A.isDepthTexture){const Ft=te.get(A),ii=te.get(W),Lt=te.get(Ft.__renderTarget),ri=te.get(ii.__renderTarget);y.bindFramebuffer(G.READ_FRAMEBUFFER,Lt.__webglFramebuffer),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,ri.__webglFramebuffer);for(let vi=0;vi<Xe;vi++)Ni&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,te.get(A).__webglTexture,Q,ot+vi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,te.get(W).__webglTexture,we,It+vi)),G.blitFramebuffer(Ze,at,Be,Te,$e,xt,Be,Te,G.DEPTH_BUFFER_BIT,G.NEAREST);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Q!==0||A.isRenderTargetTexture||te.has(A)){const Ft=te.get(A),ii=te.get(W);y.bindFramebuffer(G.READ_FRAMEBUFFER,he),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,q);for(let Lt=0;Lt<Xe;Lt++)Ni?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Ft.__webglTexture,Q,ot+Lt):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ft.__webglTexture,Q),Rt?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,ii.__webglTexture,we,It+Lt):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,ii.__webglTexture,we),Q!==0?G.blitFramebuffer(Ze,at,Be,Te,$e,xt,Be,Te,G.COLOR_BUFFER_BIT,G.NEAREST):Rt?G.copyTexSubImage3D(Fe,we,$e,xt,It+Lt,Ze,at,Be,Te):G.copyTexSubImage2D(Fe,we,$e,xt,Ze,at,Be,Te);y.bindFramebuffer(G.READ_FRAMEBUFFER,null),y.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Rt?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Fe,we,$e,xt,It,Be,Te,Xe,Pt,Jt,Ht.data):W.isCompressedArrayTexture?G.compressedTexSubImage3D(Fe,we,$e,xt,It,Be,Te,Xe,Pt,Ht.data):G.texSubImage3D(Fe,we,$e,xt,It,Be,Te,Xe,Pt,Jt,Ht):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,we,$e,xt,Be,Te,Pt,Jt,Ht.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,we,$e,xt,Ht.width,Ht.height,Pt,Ht.data):G.texSubImage2D(G.TEXTURE_2D,we,$e,xt,Be,Te,Pt,Jt,Ht);y.pixelStorei(G.UNPACK_ROW_LENGTH,hn),y.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ft),y.pixelStorei(G.UNPACK_SKIP_PIXELS,Pn),y.pixelStorei(G.UNPACK_SKIP_ROWS,Ln),y.pixelStorei(G.UNPACK_SKIP_IMAGES,dt),we===0&&W.generateMipmaps&&G.generateMipmap(Fe),y.unbindTexture()},this.initRenderTarget=function(A){te.get(A).__webglFramebuffer===void 0&&fe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?fe.setTextureCube(A,0):A.isData3DTexture?fe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?fe.setTexture2DArray(A,0):fe.setTexture2D(A,0),y.unbindTexture()},this.resetState=function(){oe=0,Y=0,H=null,y.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=gt._getDrawingBufferColorSpace(e),n.unpackColorSpace=gt._getUnpackColorSpace()}}const EE=(s,e)=>{const n=e.x-s.x,r=e.y-s.y;return Math.sqrt(n*n+r*r)},wl=(s,e,n,r)=>{const o=r-Math.abs(r*s/e);return Math.max(n,o+n)},TE=(s,e)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>s(...r),e)}};function Om({text:s="Compressa",fontFamily:e="Roboto Flex",fontUrl:n="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap",width:r=!0,weight:o=!0,italic:u=!1,alpha:c=!1,flex:d=!0,stroke:p=!1,scale:m=!1,textColor:v="#FFFFFF",strokeColor:_="#FFFFFF",className:g="",minFontSize:M=24}){const w=mt.useRef(null),C=mt.useRef(null),S=mt.useRef([]),x=mt.useRef({x:0,y:0}),I=mt.useRef({x:0,y:0}),[F,R]=mt.useState(M),[U,P]=mt.useState(1),[O,T]=mt.useState(1),L=mt.useMemo(()=>s.split(""),[s]);mt.useEffect(()=>{const re=q=>{I.current.x=q.clientX,I.current.y=q.clientY},he=q=>{const oe=q.touches[0];oe&&(I.current.x=oe.clientX,I.current.y=oe.clientY)};if(window.addEventListener("mousemove",re),window.addEventListener("touchmove",he,{passive:!0}),w.current){const{left:q,top:oe,width:Y,height:H}=w.current.getBoundingClientRect();x.current.x=q+Y/2,x.current.y=oe+H/2,I.current.x=x.current.x,I.current.y=x.current.y}return()=>{window.removeEventListener("mousemove",re),window.removeEventListener("touchmove",he)}},[]);const X=mt.useCallback(()=>{if(!w.current||!C.current)return;const{width:re,height:he}=w.current.getBoundingClientRect(),q=Math.max(re/Math.max(L.length/1.65,1),M);R(q),P(1),T(1),requestAnimationFrame(()=>{if(!C.current)return;const oe=C.current.getBoundingClientRect();if(m&&oe.height>0){const Y=he/oe.height;P(Y),T(Y)}})},[L.length,M,m]);mt.useEffect(()=>{const re=TE(X,100);return re(),window.addEventListener("resize",re),()=>window.removeEventListener("resize",re)},[X]),mt.useEffect(()=>{let re=0;const he=()=>{if(x.current.x+=(I.current.x-x.current.x)/14,x.current.y+=(I.current.y-x.current.y)/14,C.current){const q=C.current.getBoundingClientRect(),oe=Math.max(q.width*.42,1);S.current.forEach(Y=>{if(!Y)return;const H=Y.getBoundingClientRect(),ue={x:H.x+H.width/2,y:H.y+H.height/2},le=EE(x.current,ue),N=r?Math.floor(wl(le,oe,18,154)):100,K=o?Math.floor(wl(le,oe,180,820)):520,Ie=u?wl(le,oe,0,1).toFixed(2):0,Ge=c?wl(le,oe,.15,.85).toFixed(2):1,ke=r?Math.max(.82,Math.min(1.18,N/100)):1,ne=`'wght' ${K}, 'wdth' ${N}, 'ital' ${Ie}`;Y.style.fontVariationSettings!==ne&&(Y.style.fontVariationSettings=ne),Y.style.transform=`scaleX(${ke.toFixed(3)})`,c&&Y.style.opacity!==Ge&&(Y.style.opacity=Ge)})}re=requestAnimationFrame(he)};return he(),()=>cancelAnimationFrame(re)},[r,o,u,c]);const z=mt.useMemo(()=>ce.jsx("style",{children:`
        @import url('${n}');
        .text-pressure-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .text-pressure-stroke span {
          position: relative;
          color: ${v};
        }
        .text-pressure-stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: ${_};
        }
        .text-pressure-title {
          color: ${v};
        }
      `}),[n,_,v]),Z=[g,d?"text-pressure-flex":"",p?"text-pressure-stroke":""].filter(Boolean).join(" ");return ce.jsxs("div",{ref:w,className:"text-pressure-shell",children:[z,ce.jsx("h1",{ref:C,className:`text-pressure-title ${Z}`,style:{fontFamily:e,textTransform:"uppercase",fontSize:F,lineHeight:O,transform:`scale(1, ${U})`,transformOrigin:"center top",margin:0,textAlign:"center",userSelect:"none",whiteSpace:"nowrap",fontWeight:100,width:"100%"},children:L.map((re,he)=>ce.jsx("span",{ref:q=>{S.current[he]=q},"data-char":re,style:{display:"inline-block",color:p?void 0:v,transformOrigin:"50% 60%",transition:"color 180ms ease",willChange:"transform, font-variation-settings"},children:re===" "?" ":re},`${re}-${he}`))})]})}const Sg=window.STUDIO_DATA||{featured:[],portfolio:[]},js=(s="")=>!s||/^(https?:|data:|blob:)/i.test(s)?s:`/heangeun/${String(s).replace(/^\/+/,"")}`;function wE(){const[s,e]=mt.useState(0),[n,r]=mt.useState(!1),[o,u]=mt.useState(!0);return mt.useEffect(()=>{const c=performance.now(),d=1180;let p=0;const m=v=>{const _=v-c,g=Math.min(_/d,1),M=1-Math.pow(1-g,3),w=g<.94?Math.sin(v*.055)*2.6+Math.sin(v*.017)*1.4:0,C=Math.max(0,Math.min(100,Math.floor(M*100+w)));e(C),g<1?p=requestAnimationFrame(m):(e(100),window.setTimeout(()=>r(!0),180),window.setTimeout(()=>u(!1),820))};return p=requestAnimationFrame(m),()=>cancelAnimationFrame(p)},[]),o?ce.jsxs("div",{className:`loading-intro${n?" is-done":""}`,"aria-label":"LOADING",children:[ce.jsxs("div",{className:"loading-symbols","aria-hidden":"true",children:[ce.jsx("span",{children:"+"}),ce.jsx("span",{children:"%"}),ce.jsx("span",{children:"+"}),ce.jsx("span",{children:"/"})]}),ce.jsxs("div",{className:"loading-count",children:[ce.jsx("span",{children:String(s).padStart(2,"0")}),ce.jsx("em",{children:"%"})]}),ce.jsx("div",{className:"loading-track","aria-hidden":"true",children:ce.jsx("span",{style:{transform:`scaleX(${s/100})`}})})]}):null}function AE(){mt.useEffect(()=>{const s=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&n.target.classList.add("is-visible")})},{threshold:.16});return document.querySelectorAll(".reveal").forEach(e=>s.observe(e)),()=>s.disconnect()},[])}function RE(){mt.useEffect(()=>{let s=0;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const n=()=>{const r=window.innerHeight||1;document.querySelectorAll(".scroll-motion").forEach(o=>{const u=o.getBoundingClientRect(),c=u.top+u.height/2,d=Math.max(-1,Math.min(1,(c-r/2)/r)),p=Number(o.dataset.depth||0);o.style.setProperty("--scroll-y",`${(d*-44+p*14).toFixed(2)}px`),o.style.setProperty("--scroll-scale",`${(1.015-Math.abs(d)*.045).toFixed(3)}`)}),s=requestAnimationFrame(n)};return s=requestAnimationFrame(n),()=>cancelAnimationFrame(s)},[])}function CE(){const s=mt.useRef(null);return mt.useEffect(()=>{const e=s.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const r=e.getContext("2d",{alpha:!0}),o=[];let u=0,c=0,d=0,p=0;const m=()=>{const _=e.parentElement.getBoundingClientRect(),g=1;u=Math.max(1,_.width),c=Math.max(1,_.height),e.width=Math.floor(u*g),e.height=Math.floor(c*g),e.style.width=`${u}px`,e.style.height=`${c}px`,r.setTransform(g,0,0,g,0,0),o.length=0;const M=u<800?90:170;for(let w=0;w<M;w+=1)o.push({x:Math.random()*u,y:c*.56+Math.random()*c*.42,r:Math.random()*1.5+.25,a:Math.random()*.34+.1,s:Math.random()*.34+.08})},v=()=>{d+=.006,r.clearRect(0,0,u,c),o.forEach((_,g)=>{_.x+=Math.sin(d+g)*_.s,_.y+=Math.cos(d*.8+g)*_.s*.55,_.x<-4&&(_.x=u+4),_.x>u+4&&(_.x=-4),r.globalAlpha=_.a,r.fillStyle="#e6e5df",r.beginPath(),r.arc(_.x,_.y,_.r,0,Math.PI*2),r.fill()}),r.globalAlpha=1,p=requestAnimationFrame(v)};return m(),window.addEventListener("resize",m),p=requestAnimationFrame(v),()=>{cancelAnimationFrame(p),window.removeEventListener("resize",m)}},[]),ce.jsx("canvas",{ref:s,"aria-hidden":"true"})}function bE(){const s=mt.useRef(null);return mt.useEffect(()=>{const e=s.current,n=e==null?void 0:e.closest(".hero");if(!e||!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o=new ME({alpha:!0,antialias:!1,powerPreference:"high-performance"});o.setClearColor(0,0),o.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),e.appendChild(o.domElement);const u=new av,c=new od(-1,1,1,-1,0,1),d=new Za(2,2,1,1),p={uTime:{value:0},uResolution:{value:new St(1,1)},uMouse:{value:new St(.56,.46)},uVelocity:{value:new St(0,0)},uIntensity:{value:0}},m=new _i({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:p,vertexShader:`
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = vec4(position.xy, 0.0, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        varying vec2 vUv;
        uniform vec2 uResolution;
        uniform vec2 uMouse;
        uniform vec2 uVelocity;
        uniform float uTime;
        uniform float uIntensity;

        float wave(vec2 p, float scale, float speed, float amp) {
          return sin((p.x * scale + p.y * scale * 0.42) + uTime * speed) * amp;
        }

        void main() {
          vec2 uv = vUv;
          vec2 aspect = vec2(uResolution.x / max(uResolution.y, 1.0), 1.0);
          vec2 p = (uv - uMouse) * aspect;
          float dist = length(p);
          float mask = smoothstep(0.42, 0.03, dist);
          float soft = smoothstep(0.55, 0.0, dist);
          float speed = clamp(length(uVelocity) * 2.8, 0.0, 1.0);
          float flow =
            wave(uv + uVelocity * 0.012, 24.0, 1.9, 0.5) +
            wave(uv.yx - uVelocity * 0.008, 38.0, -1.35, 0.32) +
            wave(uv + vec2(0.18, -0.08), 58.0, 0.78, 0.16);
          float ring = sin((dist * 68.0) - uTime * 5.4 + flow * 1.2);
          float caustic = pow(max(0.0, 0.5 + 0.5 * ring), 5.0);
          float shear = dot(normalize(p + 0.0001), normalize(uVelocity + vec2(0.001)));
          float highlight = (caustic * 0.38 + abs(shear) * 0.22 + flow * 0.045) * mask * uIntensity;
          float alpha = (0.012 + speed * 0.04) * soft * uIntensity + highlight * 0.18;
          vec3 base = vec3(0.92, 0.91, 0.86) * highlight;
          vec3 rgb = vec3(0.26, 0.52, 0.72) * max(0.0, shear) * mask * speed * uIntensity * 0.08;
          rgb += vec3(0.72, 0.24, 0.28) * max(0.0, -shear) * mask * speed * uIntensity * 0.07;
          gl_FragColor = vec4(base + rgb + vec3(alpha * 0.5), clamp(alpha, 0.0, 0.16));
        }
      `}),v=new Di(d,m);u.add(v);const _={width:1,height:1,targetX:.56,targetY:.46,x:.56,y:.46,lastX:.56,lastY:.46,vx:0,vy:0,intensity:0,targetIntensity:0,lastMove:0};let g=0;const M=()=>{const S=n.getBoundingClientRect();_.width=Math.max(1,S.width),_.height=Math.max(1,S.height),o.setSize(_.width,_.height,!1),p.uResolution.value.set(_.width,_.height)},w=S=>{const x=n.getBoundingClientRect(),I=Math.max(0,Math.min(1,(S.clientX-x.left)/x.width)),F=Math.max(0,Math.min(1,1-(S.clientY-x.top)/x.height));_.vx+=(I-_.lastX)*.9,_.vy+=(F-_.lastY)*.9,_.lastX=I,_.lastY=F,_.targetX=I,_.targetY=F,_.targetIntensity=1,_.lastMove=performance.now()},C=S=>{S-_.lastMove>260&&(_.targetIntensity=0),_.x+=(_.targetX-_.x)*.055,_.y+=(_.targetY-_.y)*.055,_.vx*=.9,_.vy*=.9,_.intensity+=(_.targetIntensity-_.intensity)*.065,p.uTime.value=S*.001,p.uMouse.value.set(_.x,_.y),p.uVelocity.value.set(_.vx,_.vy),p.uIntensity.value=_.intensity,o.render(u,c),g=requestAnimationFrame(C)};return M(),window.addEventListener("resize",M),n.addEventListener("pointermove",w),g=requestAnimationFrame(C),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",M),n.removeEventListener("pointermove",w),d.dispose(),m.dispose(),o.dispose(),o.domElement.remove()}},[]),ce.jsx("div",{className:"three-fluid-layer",ref:s,"aria-hidden":"true"})}function PE({className:s="hero-meta"}){const[e,n]=mt.useState(()=>new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Shanghai",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date));return mt.useEffect(()=>{const r=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Shanghai",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),o=window.setInterval(()=>{n(r.format(new Date))},1e3);return()=>window.clearInterval(o)},[]),ce.jsxs("div",{className:s,"aria-label":"FOSHAN COORDINATES AND CURRENT TIME",children:[ce.jsx("span",{children:"FOSHAN"}),ce.jsx("span",{children:"23.0215° N / 113.1214° E"}),ce.jsx("time",{children:e})]})}function LE(){return ce.jsxs("header",{className:"site-header",children:[ce.jsxs("a",{className:"brand",href:"#home","aria-label":"STUDIO HOME",children:[ce.jsx("span",{}),ce.jsx("strong",{children:"PORTFOLIO"})]}),ce.jsxs("nav",{"aria-label":"PRIMARY NAVIGATION",children:[ce.jsx("a",{href:"#about",children:"ABOUT"}),ce.jsx("a",{href:"#portfolio",children:"PROJECT"}),ce.jsx("a",{href:"#cases",children:"SELECTED CASES"}),ce.jsx("a",{href:"#contact",children:"CONTACT"})]}),ce.jsx("span",{className:"header-balance","aria-hidden":"true"})]})}function DE(){return ce.jsxs("div",{className:"hero-pressure-title","aria-label":"HELLO THIS IS MY STUDIO",children:[ce.jsx("div",{className:"pressure-line pressure-line-hello",children:ce.jsx(Om,{text:"HELLO",flex:!0,alpha:!1,stroke:!1,width:!0,weight:!0,italic:!1,textColor:"#f4f1ea",strokeColor:"#f4f1ea",className:"hero-pressure-text",minFontSize:72})}),ce.jsx("div",{className:"pressure-line pressure-line-studio",children:ce.jsx(Om,{text:"THIS IS MY STUDIO",flex:!0,alpha:!1,stroke:!1,width:!0,weight:!0,italic:!1,textColor:"#f4f1ea",strokeColor:"#f4f1ea",className:"hero-pressure-text",minFontSize:48})})]})}function NE(){return ce.jsxs("section",{className:"hero",id:"home",children:[ce.jsx("video",{className:"hero-bg-video",src:js("/视频/网页首页鲸鱼光影视频_3.mp4"),autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-hidden":"true"}),ce.jsx("div",{className:"hero-video-shade","aria-hidden":"true"}),ce.jsx("div",{className:"hero-particles",children:ce.jsx(CE,{})}),ce.jsx(bE,{}),ce.jsx(PE,{}),ce.jsxs("div",{className:"hero-copy reveal",children:[ce.jsx("p",{className:"eyebrow",children:"CREATIVE STUDIO / BRAND SYSTEM / MOTION"}),ce.jsx(DE,{}),ce.jsx("p",{className:"hero-cn",children:"让视觉回归纯粹，用克制的设计，构建有生命力的品牌生态。"})]}),ce.jsxs("div",{className:"hero-index reveal",children:[ce.jsx("span",{children:"01"}),ce.jsx("span",{children:"LIQUID IDENTITY FIELD"})]})]})}function IE(){const s=["WE","SHAPE","QUIET","SYSTEMS","THAT","MOVE"];return ce.jsxs("section",{className:"video-statement",id:"motion",children:[ce.jsxs("div",{className:"video-copy reveal",children:[ce.jsx("p",{className:"eyebrow",children:"02 / MOTION STUDY"}),ce.jsx("h2",{"aria-label":"WE SHAPE QUIET SYSTEMS THAT MOVE",children:s.map((e,n)=>ce.jsx("span",{style:{"--i":n},children:e},e))}),ce.jsx("p",{children:"A RESTRAINED MOTION LAYER, PLACED BEHIND TYPOGRAPHY AND TUNED FOR SLOW CINEMATIC SCROLLING."})]}),ce.jsx("div",{className:"video-frame scroll-motion reveal","data-depth":"1",children:ce.jsx("video",{src:js("/视频/0.mp4"),autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":"STUDIO MOTION REEL"})})]})}function UE(){const s=mt.useMemo(()=>Sg.portfolio||[],[]),e=mt.useMemo(()=>s.slice(0,12),[s]),n=e.find(d=>d.orientation==="Portrait")||e[0],r=mt.useRef(null),o=mt.useRef(null);mt.useEffect(()=>{const d=o.current,p=r.current;if(!d||!p)return;const m=window.matchMedia("(prefers-reduced-motion: reduce)").matches,v={x:0,y:0,targetX:0,targetY:0};let _=0,g=0;const M=I=>{if(!m){const F=I*.018%360;p.style.setProperty("--orbit-spin",`${F.toFixed(2)}deg`),p.style.setProperty("--hero-spin",`${(Math.sin(I*7e-4)*1.4).toFixed(2)}deg`)}g=requestAnimationFrame(M)},w=I=>{const F=p.getBoundingClientRect();v.targetX=((I.clientX-F.left)/F.width-.5)*2,v.targetY=((I.clientY-F.top)/F.height-.5)*2},C=()=>{v.targetX=0,v.targetY=0},S=()=>{const I=d.getBoundingClientRect(),F=Math.max(d.offsetHeight-window.innerHeight,1),R=Math.min(1,Math.max(0,-I.top/F));d.style.setProperty("--gallery-progress",R.toFixed(4)),p.style.setProperty("--gallery-progress",R.toFixed(4))},x=()=>{v.x+=(v.targetX-v.x)*.08,v.y+=(v.targetY-v.y)*.08,p.style.setProperty("--pointer-x",m?"0":v.x.toFixed(4)),p.style.setProperty("--pointer-y",m?"0":v.y.toFixed(4)),_=requestAnimationFrame(x)};return p.addEventListener("pointermove",w),p.addEventListener("pointerleave",C),window.addEventListener("scroll",S,{passive:!0}),S(),_=requestAnimationFrame(x),g=requestAnimationFrame(M),()=>{cancelAnimationFrame(_),cancelAnimationFrame(g),p.removeEventListener("pointermove",w),p.removeEventListener("pointerleave",C),window.removeEventListener("scroll",S)}},[]);const u=["Brand Visual","Motion Design","IP Design","Web Experience","AI Visual System"],c=e.filter(d=>d!==n).slice(0,9);return ce.jsx("section",{className:"floating-portfolio",id:"portfolio",ref:o,children:ce.jsxs("div",{className:"floating-sticky",children:[ce.jsxs("div",{className:"floating-intro reveal",children:[ce.jsx("p",{className:"eyebrow",children:"03 / LIVING VISUAL SYSTEM"}),ce.jsxs("h2",{children:["让视觉成为",ce.jsx("br",{}),ce.jsx("em",{children:"流动的系统"})]}),ce.jsx("div",{className:"floating-labels",children:u.map(d=>ce.jsx("span",{children:d},d))})]}),ce.jsxs("div",{className:"floating-stage",ref:r,children:[ce.jsx("div",{className:"floating-letter floating-letter-one","aria-hidden":"true",children:"A"}),ce.jsx("div",{className:"floating-letter floating-letter-two","aria-hidden":"true",children:"∞"}),ce.jsx("div",{className:"floating-fragment fragment-top",children:"FORM / MOTION / IMAGE"}),ce.jsx("div",{className:"floating-fragment fragment-bottom",children:"A VISUAL SYSTEM IN MOTION"}),ce.jsx("div",{className:"floating-rule rule-one","aria-hidden":"true"}),ce.jsx("div",{className:"floating-rule rule-two","aria-hidden":"true"}),c.map((d,p)=>ce.jsxs("article",{className:`floating-card floating-card-depth-${p%3} floating-card-${p}`,style:{"--orbit-base":`${p*38-150}deg`,"--orbit-radius":`${Math.max(190,32-p*1.2)}vw`},children:[ce.jsx("img",{src:js(d.src),alt:"",loading:"lazy"}),ce.jsxs("span",{children:[String(p+1).padStart(2,"0")," / ",u[p%u.length]]})]},`${d.src}-${p}`)),n&&ce.jsxs("article",{className:"floating-card floating-card-hero",children:[ce.jsx("img",{src:js(n.src),alt:n.title||"Featured portfolio project"}),ce.jsxs("div",{className:"floating-card-meta",children:[ce.jsx("span",{children:"01 / FEATURED CASE"}),ce.jsx("span",{children:n.orientation})]})]}),ce.jsxs("div",{className:"floating-note note-left",children:["SELECTED",ce.jsx("br",{}),"WORKS 2024—26"]}),ce.jsxs("div",{className:"floating-note note-right",children:["SCROLL TO",ce.jsx("br",{}),"ENTER THE ROOM"]})]})]})})}function FE(){return ce.jsxs("section",{className:"featured section",id:"cases",children:[ce.jsxs("div",{className:"section-head reveal",children:[ce.jsxs("div",{children:[ce.jsx("p",{className:"eyebrow",children:"04 / SELECTED CASES"}),ce.jsx("h2",{children:"FEATURED CASES"})]}),ce.jsx("span",{children:"LARGE-FORMAT CAMPAIGN VISUALS SHAPED THROUGH QUIET CONTRAST AND PRECISE VISUAL HIERARCHY."})]}),ce.jsx("div",{className:"featured-grid",children:Sg.featured.map((s,e)=>ce.jsxs("article",{className:"case-card reveal scroll-motion","data-depth":e%2===0?1:-1,children:[ce.jsxs("div",{className:"case-info",children:[ce.jsxs("span",{children:[String(e+1).padStart(2,"0")," / FEATURED CASE"]}),ce.jsx("h3",{children:s.title})]}),ce.jsx("div",{className:"case-image",children:ce.jsx("img",{src:js(s.src),alt:s.title,loading:e===0?"eager":"lazy"})})]},s.src))})]})}function OE(){const s=mt.useRef(null);return mt.useEffect(()=>{const e=s.current,n=e==null?void 0:e.closest(".about");if(!e||!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o={x:50,y:50,targetX:50,targetY:50,intensity:0,targetIntensity:0};let u=0;const c=m=>{const v=n.getBoundingClientRect();o.targetX=(m.clientX-v.left)/v.width*100,o.targetY=(m.clientY-v.top)/v.height*100,o.targetIntensity=1},d=()=>{o.targetIntensity=0},p=()=>{o.x+=(o.targetX-o.x)*.16,o.y+=(o.targetY-o.y)*.16,o.intensity+=(o.targetIntensity-o.intensity)*.12,e.style.setProperty("--about-x",`${o.x.toFixed(2)}%`),e.style.setProperty("--about-y",`${o.y.toFixed(2)}%`),e.style.setProperty("--about-reveal",o.intensity.toFixed(4)),u=requestAnimationFrame(p)};return n.addEventListener("pointermove",c),n.addEventListener("pointerleave",d),u=requestAnimationFrame(p),()=>{cancelAnimationFrame(u),n.removeEventListener("pointermove",c),n.removeEventListener("pointerleave",d)}},[]),ce.jsx("div",{className:"about-color-reveal",ref:s,"aria-hidden":"true"})}function BE(){return ce.jsxs("section",{className:"about section",id:"about",children:[ce.jsx(OE,{}),ce.jsxs("div",{className:"about-copy reveal",children:[ce.jsx("p",{className:"eyebrow",children:"05 / ABOUT THE STUDIO"}),ce.jsx("h2",{children:"PURE DESIGN BEGINS WITH A CONVERSATION."}),ce.jsx("p",{className:"about-cn",children:"回归纯粹，始于对话。"})]}),ce.jsx("div",{className:"about-line","aria-hidden":"true"})]})}function kE(){const s=mt.useRef(null);return mt.useEffect(()=>{const e=s.current,n=e==null?void 0:e.closest(".contact");if(!e||!n||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const o={x:50,y:50,targetX:50,targetY:50,intensity:0,targetIntensity:0};let u=0;const c=m=>{const v=n.getBoundingClientRect();o.targetX=(m.clientX-v.left)/v.width*100,o.targetY=(m.clientY-v.top)/v.height*100,o.targetIntensity=1},d=()=>{o.targetIntensity=0},p=()=>{o.x+=(o.targetX-o.x)*.16,o.y+=(o.targetY-o.y)*.16,o.intensity+=(o.targetIntensity-o.intensity)*.12,e.style.setProperty("--contact-x",`${o.x.toFixed(2)}%`),e.style.setProperty("--contact-y",`${o.y.toFixed(2)}%`),e.style.setProperty("--contact-reveal",o.intensity.toFixed(4)),u=requestAnimationFrame(p)};return n.addEventListener("pointermove",c),n.addEventListener("pointerleave",d),u=requestAnimationFrame(p),()=>{cancelAnimationFrame(u),n.removeEventListener("pointermove",c),n.removeEventListener("pointerleave",d)}},[]),ce.jsx("div",{className:"contact-image-reveal",ref:s,"aria-hidden":"true"})}function zE(){return ce.jsxs("section",{className:"contact closing-section",id:"contact",children:[ce.jsx(kE,{}),ce.jsx("span",{className:"closing-dot reveal","aria-hidden":"true"}),ce.jsx("p",{className:"eyebrow reveal",children:"06 / CONTACT"}),ce.jsx("h2",{className:"reveal",children:"LET'S WORK TOGETHER"}),ce.jsxs("div",{className:"closing-bar reveal",children:[ce.jsx("a",{href:"mailto:hello@studio.com",children:"HELLO@STUDIO.COM"}),ce.jsx("a",{className:"wechat-link",href:"#wechat-qr","aria-label":"SHOW WECHAT QR CODE",children:"WECHAT"}),ce.jsx("a",{className:"back-top",href:"#home","aria-label":"BACK TO TOP",children:"BACK TO TOP"})]}),ce.jsxs("div",{className:"wechat-modal",id:"wechat-qr","aria-label":"WECHAT QR CODE",children:[ce.jsx("a",{className:"wechat-modal-backdrop",href:"#contact","aria-label":"CLOSE WECHAT QR CODE"}),ce.jsxs("div",{className:"wechat-modal-panel",role:"dialog","aria-modal":"true","aria-label":"WECHAT QR CODE",children:[ce.jsx("img",{src:js("/底图/wechat-qr.jpg"),alt:"WECHAT QR CODE"}),ce.jsx("span",{children:"WECHAT"}),ce.jsx("a",{href:"#contact","aria-label":"CLOSE WECHAT QR CODE",children:"CLOSE"})]})]})]})}function VE(){return AE(),RE(),ce.jsxs(ce.Fragment,{children:[ce.jsx(wE,{}),ce.jsx(LE,{}),ce.jsxs("main",{children:[ce.jsx(NE,{}),ce.jsx(IE,{}),ce.jsx(UE,{}),ce.jsx(FE,{}),ce.jsx(BE,{}),ce.jsx(zE,{})]}),ce.jsx("footer",{className:"site-footer",children:"MADE ON HEANGEUN"})]})}u_.createRoot(document.getElementById("root")).render(ce.jsx(i_.StrictMode,{children:ce.jsx(VE,{})}));
