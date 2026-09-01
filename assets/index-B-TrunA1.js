(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function HS(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var cd={exports:{}},Zo={},fd={exports:{}},pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function GS(){if(ag)return pt;ag=1;var a=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),u=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),g=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,M={};function x(F,K,Le){this.props=F,this.context=K,this.refs=M,this.updater=Le||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,K){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,K,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=x.prototype;function b(F,K,Le){this.props=F,this.context=K,this.refs=M,this.updater=Le||S}var N=b.prototype=new y;N.constructor=b,E(N,x.prototype),N.isPureReactComponent=!0;var R=Array.isArray,P=Object.prototype.hasOwnProperty,L={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function T(F,K,Le){var Fe,Ue={},ae=null,ve=null;if(K!=null)for(Fe in K.ref!==void 0&&(ve=K.ref),K.key!==void 0&&(ae=""+K.key),K)P.call(K,Fe)&&!I.hasOwnProperty(Fe)&&(Ue[Fe]=K[Fe]);var me=arguments.length-2;if(me===1)Ue.children=Le;else if(1<me){for(var Oe=Array(me),Qe=0;Qe<me;Qe++)Oe[Qe]=arguments[Qe+2];Ue.children=Oe}if(F&&F.defaultProps)for(Fe in me=F.defaultProps,me)Ue[Fe]===void 0&&(Ue[Fe]=me[Fe]);return{$$typeof:a,type:F,key:ae,ref:ve,props:Ue,_owner:L.current}}function D(F,K){return{$$typeof:a,type:F.type,key:K,ref:F.ref,props:F.props,_owner:F._owner}}function k(F){return typeof F=="object"&&F!==null&&F.$$typeof===a}function B(F){var K={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Le){return K[Le]})}var Y=/\/+/g;function j(F,K){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):K.toString(36)}function re(F,K,Le,Fe,Ue){var ae=typeof F;(ae==="undefined"||ae==="boolean")&&(F=null);var ve=!1;if(F===null)ve=!0;else switch(ae){case"string":case"number":ve=!0;break;case"object":switch(F.$$typeof){case a:case e:ve=!0}}if(ve)return ve=F,Ue=Ue(ve),F=Fe===""?"."+j(ve,0):Fe,R(Ue)?(Le="",F!=null&&(Le=F.replace(Y,"$&/")+"/"),re(Ue,K,Le,"",function(Qe){return Qe})):Ue!=null&&(k(Ue)&&(Ue=D(Ue,Le+(!Ue.key||ve&&ve.key===Ue.key?"":(""+Ue.key).replace(Y,"$&/")+"/")+F)),K.push(Ue)),1;if(ve=0,Fe=Fe===""?".":Fe+":",R(F))for(var me=0;me<F.length;me++){ae=F[me];var Oe=Fe+j(ae,me);ve+=re(ae,K,Le,Oe,Ue)}else if(Oe=_(F),typeof Oe=="function")for(F=Oe.call(F),me=0;!(ae=F.next()).done;)ae=ae.value,Oe=Fe+j(ae,me++),ve+=re(ae,K,Le,Oe,Ue);else if(ae==="object")throw K=String(F),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ve}function W(F,K,Le){if(F==null)return F;var Fe=[],Ue=0;return re(F,Fe,"","",function(ae){return K.call(Le,ae,Ue++)}),Fe}function Q(F){if(F._status===-1){var K=F._result;K=K(),K.then(function(Le){(F._status===0||F._status===-1)&&(F._status=1,F._result=Le)},function(Le){(F._status===0||F._status===-1)&&(F._status=2,F._result=Le)}),F._status===-1&&(F._status=0,F._result=K)}if(F._status===1)return F._result.default;throw F._result}var V={current:null},H={transition:null},oe={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:H,ReactCurrentOwner:L};function se(){throw Error("act(...) is not supported in production builds of React.")}return pt.Children={map:W,forEach:function(F,K,Le){W(F,function(){K.apply(this,arguments)},Le)},count:function(F){var K=0;return W(F,function(){K++}),K},toArray:function(F){return W(F,function(K){return K})||[]},only:function(F){if(!k(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},pt.Component=x,pt.Fragment=t,pt.Profiler=s,pt.PureComponent=b,pt.StrictMode=i,pt.Suspense=d,pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,pt.act=se,pt.cloneElement=function(F,K,Le){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Fe=E({},F.props),Ue=F.key,ae=F.ref,ve=F._owner;if(K!=null){if(K.ref!==void 0&&(ae=K.ref,ve=L.current),K.key!==void 0&&(Ue=""+K.key),F.type&&F.type.defaultProps)var me=F.type.defaultProps;for(Oe in K)P.call(K,Oe)&&!I.hasOwnProperty(Oe)&&(Fe[Oe]=K[Oe]===void 0&&me!==void 0?me[Oe]:K[Oe])}var Oe=arguments.length-2;if(Oe===1)Fe.children=Le;else if(1<Oe){me=Array(Oe);for(var Qe=0;Qe<Oe;Qe++)me[Qe]=arguments[Qe+2];Fe.children=me}return{$$typeof:a,type:F.type,key:Ue,ref:ae,props:Fe,_owner:ve}},pt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:o,_context:F},F.Consumer=F},pt.createElement=T,pt.createFactory=function(F){var K=T.bind(null,F);return K.type=F,K},pt.createRef=function(){return{current:null}},pt.forwardRef=function(F){return{$$typeof:c,render:F}},pt.isValidElement=k,pt.lazy=function(F){return{$$typeof:p,_payload:{_status:-1,_result:F},_init:Q}},pt.memo=function(F,K){return{$$typeof:h,type:F,compare:K===void 0?null:K}},pt.startTransition=function(F){var K=H.transition;H.transition={};try{F()}finally{H.transition=K}},pt.unstable_act=se,pt.useCallback=function(F,K){return V.current.useCallback(F,K)},pt.useContext=function(F){return V.current.useContext(F)},pt.useDebugValue=function(){},pt.useDeferredValue=function(F){return V.current.useDeferredValue(F)},pt.useEffect=function(F,K){return V.current.useEffect(F,K)},pt.useId=function(){return V.current.useId()},pt.useImperativeHandle=function(F,K,Le){return V.current.useImperativeHandle(F,K,Le)},pt.useInsertionEffect=function(F,K){return V.current.useInsertionEffect(F,K)},pt.useLayoutEffect=function(F,K){return V.current.useLayoutEffect(F,K)},pt.useMemo=function(F,K){return V.current.useMemo(F,K)},pt.useReducer=function(F,K,Le){return V.current.useReducer(F,K,Le)},pt.useRef=function(F){return V.current.useRef(F)},pt.useState=function(F){return V.current.useState(F)},pt.useSyncExternalStore=function(F,K,Le){return V.current.useSyncExternalStore(F,K,Le)},pt.useTransition=function(){return V.current.useTransition()},pt.version="18.3.1",pt}var og;function op(){return og||(og=1,fd.exports=GS()),fd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function WS(){if(lg)return Zo;lg=1;var a=op(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function u(c,d,h){var p,g={},_=null,S=null;h!==void 0&&(_=""+h),d.key!==void 0&&(_=""+d.key),d.ref!==void 0&&(S=d.ref);for(p in d)i.call(d,p)&&!o.hasOwnProperty(p)&&(g[p]=d[p]);if(c&&c.defaultProps)for(p in d=c.defaultProps,d)g[p]===void 0&&(g[p]=d[p]);return{$$typeof:e,type:c,key:_,ref:S,props:g,_owner:s.current}}return Zo.Fragment=t,Zo.jsx=u,Zo.jsxs=u,Zo}var ug;function XS(){return ug||(ug=1,cd.exports=WS()),cd.exports}var fe=XS(),dt=op();const YS=HS(dt);var Pu={},dd={exports:{}},jn={},hd={exports:{}},pd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function qS(){return cg||(cg=1,(function(a){function e(H,oe){var se=H.length;H.push(oe);e:for(;0<se;){var F=se-1>>>1,K=H[F];if(0<s(K,oe))H[F]=oe,H[se]=K,se=F;else break e}}function t(H){return H.length===0?null:H[0]}function i(H){if(H.length===0)return null;var oe=H[0],se=H.pop();if(se!==oe){H[0]=se;e:for(var F=0,K=H.length,Le=K>>>1;F<Le;){var Fe=2*(F+1)-1,Ue=H[Fe],ae=Fe+1,ve=H[ae];if(0>s(Ue,se))ae<K&&0>s(ve,Ue)?(H[F]=ve,H[ae]=se,F=ae):(H[F]=Ue,H[Fe]=se,F=Fe);else if(ae<K&&0>s(ve,se))H[F]=ve,H[ae]=se,F=ae;else break e}}return oe}function s(H,oe){var se=H.sortIndex-oe.sortIndex;return se!==0?se:H.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;a.unstable_now=function(){return o.now()}}else{var u=Date,c=u.now();a.unstable_now=function(){return u.now()-c}}var d=[],h=[],p=1,g=null,_=3,S=!1,E=!1,M=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(H){for(var oe=t(h);oe!==null;){if(oe.callback===null)i(h);else if(oe.startTime<=H)i(h),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(h)}}function R(H){if(M=!1,N(H),!E)if(t(d)!==null)E=!0,Q(P);else{var oe=t(h);oe!==null&&V(R,oe.startTime-H)}}function P(H,oe){E=!1,M&&(M=!1,y(T),T=-1),S=!0;var se=_;try{for(N(oe),g=t(d);g!==null&&(!(g.expirationTime>oe)||H&&!B());){var F=g.callback;if(typeof F=="function"){g.callback=null,_=g.priorityLevel;var K=F(g.expirationTime<=oe);oe=a.unstable_now(),typeof K=="function"?g.callback=K:g===t(d)&&i(d),N(oe)}else i(d);g=t(d)}if(g!==null)var Le=!0;else{var Fe=t(h);Fe!==null&&V(R,Fe.startTime-oe),Le=!1}return Le}finally{g=null,_=se,S=!1}}var L=!1,I=null,T=-1,D=5,k=-1;function B(){return!(a.unstable_now()-k<D)}function Y(){if(I!==null){var H=a.unstable_now();k=H;var oe=!0;try{oe=I(!0,H)}finally{oe?j():(L=!1,I=null)}}else L=!1}var j;if(typeof b=="function")j=function(){b(Y)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,W=re.port2;re.port1.onmessage=Y,j=function(){W.postMessage(null)}}else j=function(){x(Y,0)};function Q(H){I=H,L||(L=!0,j())}function V(H,oe){T=x(function(){H(a.unstable_now())},oe)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(H){H.callback=null},a.unstable_continueExecution=function(){E||S||(E=!0,Q(P))},a.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<H?Math.floor(1e3/H):5},a.unstable_getCurrentPriorityLevel=function(){return _},a.unstable_getFirstCallbackNode=function(){return t(d)},a.unstable_next=function(H){switch(_){case 1:case 2:case 3:var oe=3;break;default:oe=_}var se=_;_=oe;try{return H()}finally{_=se}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(H,oe){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=_;_=H;try{return oe()}finally{_=se}},a.unstable_scheduleCallback=function(H,oe,se){var F=a.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,H){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=se+K,H={id:p++,callback:oe,priorityLevel:H,startTime:se,expirationTime:K,sortIndex:-1},se>F?(H.sortIndex=se,e(h,H),t(d)===null&&H===t(h)&&(M?(y(T),T=-1):M=!0,V(R,se-F))):(H.sortIndex=K,e(d,H),E||S||(E=!0,Q(P))),H},a.unstable_shouldYield=B,a.unstable_wrapCallback=function(H){var oe=_;return function(){var se=_;_=oe;try{return H.apply(this,arguments)}finally{_=se}}}})(pd)),pd}var fg;function $S(){return fg||(fg=1,hd.exports=qS()),hd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function KS(){if(dg)return jn;dg=1;var a=op(),e=$S();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,l=1;l<arguments.length;l++)r+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,s={};function o(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)i.add(r[n])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},g={};function _(n){return d.call(g,n)?!0:d.call(p,n)?!1:h.test(n)?g[n]=!0:(p[n]=!0,!1)}function S(n,r,l,f){if(l!==null&&l.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,r,l,f){if(r===null||typeof r>"u"||S(n,r,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function M(n,r,l,f,m,v,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=n,this.type=r,this.sanitizeURL=v,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new M(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];x[r]=new M(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new M(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new M(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new M(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new M(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new M(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new M(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new M(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(y,b);x[r]=new M(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(y,b);x[r]=new M(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(y,b);x[r]=new M(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new M(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,r,l,f){var m=x.hasOwnProperty(r)?x[r]:null;(m!==null?m.type!==0:f||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(E(r,l,m,f)&&(l=null),f||m===null?_(r)&&(l===null?n.removeAttribute(r):n.setAttribute(r,""+l)):m.mustUseProperty?n[m.propertyName]=l===null?m.type===3?!1:"":l:(r=m.attributeName,f=m.attributeNamespace,l===null?n.removeAttribute(r):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?n.setAttributeNS(f,r,l):n.setAttribute(r,l))))}var R=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,P=Symbol.for("react.element"),L=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),B=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),H=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=H&&n[H]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,F;function K(n){if(F===void 0)try{throw Error()}catch(l){var r=l.stack.trim().match(/\n( *(at )?)/);F=r&&r[1]||""}return`
`+F+n}var Le=!1;function Fe(n,r){if(!n||Le)return"";Le=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(ce){var f=ce}Reflect.construct(n,[],r)}else{try{r.call()}catch(ce){f=ce}n.call(r.prototype)}else{try{throw Error()}catch(ce){f=ce}n()}}catch(ce){if(ce&&f&&typeof ce.stack=="string"){for(var m=ce.stack.split(`
`),v=f.stack.split(`
`),A=m.length-1,O=v.length-1;1<=A&&0<=O&&m[A]!==v[O];)O--;for(;1<=A&&0<=O;A--,O--)if(m[A]!==v[O]){if(A!==1||O!==1)do if(A--,O--,0>O||m[A]!==v[O]){var z=`
`+m[A].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=A&&0<=O);break}}}finally{Le=!1,Error.prepareStackTrace=l}return(n=n?n.displayName||n.name:"")?K(n):""}function Ue(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=Fe(n.type,!1),n;case 11:return n=Fe(n.type.render,!1),n;case 1:return n=Fe(n.type,!0),n;default:return""}}function ae(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case L:return"Portal";case D:return"Profiler";case T:return"StrictMode";case j:return"Suspense";case re:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case Y:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case W:return r=n.displayName||null,r!==null?r:ae(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return ae(n(r))}catch{}}return null}function ve(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ae(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function me(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Oe(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qe(n){var r=Oe(n)?"checked":"value",l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),f=""+n[r];if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,v=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return m.call(this)},set:function(A){f=""+A,v.call(this,A)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(A){f=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Je(n){n._valueTracker||(n._valueTracker=Qe(n))}function Ht(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var l=r.getValue(),f="";return n&&(f=Oe(n)?n.checked?"true":"false":n.value),n=f,n!==l?(r.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function At(n,r){var l=r.checked;return se({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??n._wrapperState.initialChecked})}function xt(n,r){var l=r.defaultValue==null?"":r.defaultValue,f=r.checked!=null?r.checked:r.defaultChecked;l=me(r.value!=null?r.value:l),n._wrapperState={initialChecked:f,initialValue:l,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function mt(n,r){r=r.checked,r!=null&&N(n,"checked",r,!1)}function Gt(n,r){mt(n,r);var l=me(r.value),f=r.type;if(l!=null)f==="number"?(l===0&&n.value===""||n.value!=l)&&(n.value=""+l):n.value!==""+l&&(n.value=""+l);else if(f==="submit"||f==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?nn(n,r.type,l):r.hasOwnProperty("defaultValue")&&nn(n,r.type,me(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function tn(n,r,l){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var f=r.type;if(!(f!=="submit"&&f!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,l||r===n.value||(n.value=r),n.defaultValue=r}l=n.name,l!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,l!==""&&(n.name=l)}function nn(n,r,l){(r!=="number"||ut(n.ownerDocument)!==n)&&(l==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+l&&(n.defaultValue=""+l))}var $t=Array.isArray;function Pt(n,r,l,f){if(n=n.options,r){r={};for(var m=0;m<l.length;m++)r["$"+l[m]]=!0;for(l=0;l<n.length;l++)m=r.hasOwnProperty("$"+n[l].value),n[l].selected!==m&&(n[l].selected=m),m&&f&&(n[l].defaultSelected=!0)}else{for(l=""+me(l),r=null,m=0;m<n.length;m++){if(n[m].value===l){n[m].selected=!0,f&&(n[m].defaultSelected=!0);return}r!==null||n[m].disabled||(r=n[m])}r!==null&&(r.selected=!0)}}function Wt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function q(n,r){var l=r.value;if(l==null){if(l=r.children,r=r.defaultValue,l!=null){if(r!=null)throw Error(t(92));if($t(l)){if(1<l.length)throw Error(t(93));l=l[0]}r=l}r==null&&(r=""),l=r}n._wrapperState={initialValue:me(l)}}function En(n,r){var l=me(r.value),f=me(r.defaultValue);l!=null&&(l=""+l,l!==n.value&&(n.value=l),r.defaultValue==null&&n.defaultValue!==l&&(n.defaultValue=l)),f!=null&&(n.defaultValue=""+f)}function Tt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function U(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function w(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?U(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Z,ie=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,l,f,m){MSApp.execUnsafeLocalFunction(function(){return n(r,l,f,m)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Z.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function de(n,r){if(r){var l=n.firstChild;if(l&&l===n.lastChild&&l.nodeType===3){l.nodeValue=r;return}}n.textContent=r}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Ce.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Me[r]=Me[n]})});function he(n,r,l){return r==null||typeof r=="boolean"||r===""?"":l||typeof r!="number"||r===0||Me.hasOwnProperty(n)&&Me[n]?(""+r).trim():r+"px"}function _e(n,r){n=n.style;for(var l in r)if(r.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=he(l,r[l],f);l==="float"&&(l="cssFloat"),f?n.setProperty(l,m):n[l]=m}}var Pe=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qe(n,r){if(r){if(Pe[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function De(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function je(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var et=null,it=null,G=null;function Ae(n){if(n=Uo(n)){if(typeof et!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Xl(r),et(n.stateNode,n.type,r))}}function pe(n){it?G?G.push(n):G=[n]:it=n}function be(){if(it){var n=it,r=G;if(G=it=null,Ae(n),r)for(n=0;n<r.length;n++)Ae(r[n])}}function Ne(n,r){return n(r)}function ge(){}var We=!1;function He(n,r,l){if(We)return n(r,l);We=!0;try{return Ne(n,r,l)}finally{We=!1,(it!==null||G!==null)&&(ge(),be())}}function It(n,r){var l=n.stateNode;if(l===null)return null;var f=Xl(l);if(f===null)return null;l=f[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(n=n.type,f=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!f;break e;default:n=!1}if(n)return null;if(l&&typeof l!="function")throw Error(t(231,r,typeof l));return l}var Rt=!1;if(c)try{var bn={};Object.defineProperty(bn,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",bn,bn),window.removeEventListener("test",bn,bn)}catch{Rt=!1}function Si(n,r,l,f,m,v,A,O,z){var ce=Array.prototype.slice.call(arguments,3);try{r.apply(l,ce)}catch(Se){this.onError(Se)}}var Es=!1,ua=null,Ts=!1,ws=null,Lc={onError:function(n){Es=!0,ua=n}};function Rl(n,r,l,f,m,v,A,O,z){Es=!1,ua=null,Si.apply(Lc,arguments)}function Cl(n,r,l,f,m,v,A,O,z){if(Rl.apply(this,arguments),Es){if(Es){var ce=ua;Es=!1,ua=null}else throw Error(t(198));Ts||(Ts=!0,ws=ce)}}function Bn(n){var r=n,l=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(l=r.return),n=r.return;while(n)}return r.tag===3?l:null}function ca(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function mo(n){if(Bn(n)!==n)throw Error(t(188))}function bl(n){var r=n.alternate;if(!r){if(r=Bn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var l=n,f=r;;){var m=l.return;if(m===null)break;var v=m.alternate;if(v===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===v.child){for(v=m.child;v;){if(v===l)return mo(m),n;if(v===f)return mo(m),r;v=v.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=v;else{for(var A=!1,O=m.child;O;){if(O===l){A=!0,l=m,f=v;break}if(O===f){A=!0,f=m,l=v;break}O=O.sibling}if(!A){for(O=v.child;O;){if(O===l){A=!0,l=v,f=m;break}if(O===f){A=!0,f=v,l=m;break}O=O.sibling}if(!A)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?n:r}function As(n){return n=bl(n),n!==null?_o(n):null}function _o(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=_o(n);if(r!==null)return r;n=n.sibling}return null}var Rs=e.unstable_scheduleCallback,go=e.unstable_cancelCallback,Pl=e.unstable_shouldYield,Nc=e.unstable_requestPaint,Kt=e.unstable_now,Ic=e.unstable_getCurrentPriorityLevel,vo=e.unstable_ImmediatePriority,C=e.unstable_UserBlockingPriority,$=e.unstable_NormalPriority,ue=e.unstable_LowPriority,te=e.unstable_IdlePriority,ee=null,we=null;function ze(n){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(ee,n,void 0,(n.current.flags&128)===128)}catch{}}var Te=Math.clz32?Math.clz32:at,Xe=Math.log,Ze=Math.LN2;function at(n){return n>>>=0,n===0?32:31-(Xe(n)/Ze|0)|0}var ot=64,$e=4194304;function St(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ot(n,r){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,v=n.pingedLanes,A=l&268435455;if(A!==0){var O=A&~m;O!==0?f=St(O):(v&=A,v!==0&&(f=St(v)))}else A=l&~m,A!==0?f=St(A):v!==0&&(f=St(v));if(f===0)return 0;if(r!==0&&r!==f&&(r&m)===0&&(m=f&-f,v=r&-r,m>=v||m===16&&(v&4194240)!==0))return r;if((f&4)!==0&&(f|=l&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=f;0<r;)l=31-Te(r),m=1<<l,f|=n[l],r&=~m;return f}function Xt(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Dt(n,r){for(var l=n.suspendedLanes,f=n.pingedLanes,m=n.expirationTimes,v=n.pendingLanes;0<v;){var A=31-Te(v),O=1<<A,z=m[A];z===-1?((O&l)===0||(O&f)!==0)&&(m[A]=Xt(O,r)):z<=r&&(n.expiredLanes|=O),v&=~O}}function un(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ke(){var n=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),n}function Tn(n){for(var r=[],l=0;31>l;l++)r.push(n);return r}function ft(n,r,l){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Te(r),n[r]=l}function Wn(n,r){var l=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var f=n.eventTimes;for(n=n.expirationTimes;0<l;){var m=31-Te(l),v=1<<m;r[m]=0,f[m]=-1,n[m]=-1,l&=~v}}function Xn(n,r){var l=n.entangledLanes|=r;for(n=n.entanglements;l;){var f=31-Te(l),m=1<<f;m&r|n[f]&r&&(n[f]|=r),l&=~m}}var ht=0;function hr(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ct,Bt,Ni,Lt,Ii,$i=!1,Cs=[],Br=null,zr=null,Vr=null,xo=new Map,So=new Map,Hr=[],cx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Gp(n,r){switch(n){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":zr=null;break;case"mouseover":case"mouseout":Vr=null;break;case"pointerover":case"pointerout":xo.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(r.pointerId)}}function yo(n,r,l,f,m,v){return n===null||n.nativeEvent!==v?(n={blockedOn:r,domEventName:l,eventSystemFlags:f,nativeEvent:v,targetContainers:[m]},r!==null&&(r=Uo(r),r!==null&&Bt(r)),n):(n.eventSystemFlags|=f,r=n.targetContainers,m!==null&&r.indexOf(m)===-1&&r.push(m),n)}function fx(n,r,l,f,m){switch(r){case"focusin":return Br=yo(Br,n,r,l,f,m),!0;case"dragenter":return zr=yo(zr,n,r,l,f,m),!0;case"mouseover":return Vr=yo(Vr,n,r,l,f,m),!0;case"pointerover":var v=m.pointerId;return xo.set(v,yo(xo.get(v)||null,n,r,l,f,m)),!0;case"gotpointercapture":return v=m.pointerId,So.set(v,yo(So.get(v)||null,n,r,l,f,m)),!0}return!1}function Wp(n){var r=bs(n.target);if(r!==null){var l=Bn(r);if(l!==null){if(r=l.tag,r===13){if(r=ca(l),r!==null){n.blockedOn=r,Ii(n.priority,function(){Ni(l)});return}}else if(r===3&&l.stateNode.current.memoizedState.isDehydrated){n.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Dl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var l=Fc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(l===null){l=n.nativeEvent;var f=new l.constructor(l.type,l);Re=f,l.target.dispatchEvent(f),Re=null}else return r=Uo(l),r!==null&&Bt(r),n.blockedOn=l,!1;r.shift()}return!0}function Xp(n,r,l){Dl(n)&&l.delete(r)}function dx(){$i=!1,Br!==null&&Dl(Br)&&(Br=null),zr!==null&&Dl(zr)&&(zr=null),Vr!==null&&Dl(Vr)&&(Vr=null),xo.forEach(Xp),So.forEach(Xp)}function Mo(n,r){n.blockedOn===r&&(n.blockedOn=null,$i||($i=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,dx)))}function Eo(n){function r(m){return Mo(m,n)}if(0<Cs.length){Mo(Cs[0],n);for(var l=1;l<Cs.length;l++){var f=Cs[l];f.blockedOn===n&&(f.blockedOn=null)}}for(Br!==null&&Mo(Br,n),zr!==null&&Mo(zr,n),Vr!==null&&Mo(Vr,n),xo.forEach(r),So.forEach(r),l=0;l<Hr.length;l++)f=Hr[l],f.blockedOn===n&&(f.blockedOn=null);for(;0<Hr.length&&(l=Hr[0],l.blockedOn===null);)Wp(l),l.blockedOn===null&&Hr.shift()}var fa=R.ReactCurrentBatchConfig,Ll=!0;function hx(n,r,l,f){var m=ht,v=fa.transition;fa.transition=null;try{ht=1,Uc(n,r,l,f)}finally{ht=m,fa.transition=v}}function px(n,r,l,f){var m=ht,v=fa.transition;fa.transition=null;try{ht=4,Uc(n,r,l,f)}finally{ht=m,fa.transition=v}}function Uc(n,r,l,f){if(Ll){var m=Fc(n,r,l,f);if(m===null)Jc(n,r,f,Nl,l),Gp(n,f);else if(fx(m,n,r,l,f))f.stopPropagation();else if(Gp(n,f),r&4&&-1<cx.indexOf(n)){for(;m!==null;){var v=Uo(m);if(v!==null&&Ct(v),v=Fc(n,r,l,f),v===null&&Jc(n,r,f,Nl,l),v===m)break;m=v}m!==null&&f.stopPropagation()}else Jc(n,r,f,null,l)}}var Nl=null;function Fc(n,r,l,f){if(Nl=null,n=je(f),n=bs(n),n!==null)if(r=Bn(n),r===null)n=null;else if(l=r.tag,l===13){if(n=ca(r),n!==null)return n;n=null}else if(l===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Nl=n,null}function Yp(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ic()){case vo:return 1;case C:return 4;case $:case ue:return 16;case te:return 536870912;default:return 16}default:return 16}}var Gr=null,Oc=null,Il=null;function qp(){if(Il)return Il;var n,r=Oc,l=r.length,f,m="value"in Gr?Gr.value:Gr.textContent,v=m.length;for(n=0;n<l&&r[n]===m[n];n++);var A=l-n;for(f=1;f<=A&&r[l-f]===m[v-f];f++);return Il=m.slice(n,1<f?1-f:void 0)}function Ul(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function Fl(){return!0}function $p(){return!1}function ai(n){function r(l,f,m,v,A){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=v,this.target=A,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(l=n[O],this[O]=l?l(v):v[O]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?Fl:$p,this.isPropagationStopped=$p,this}return se(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Fl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Fl)},persist:function(){},isPersistent:Fl}),r}var da={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=ai(da),To=se({},da,{view:0,detail:0}),mx=ai(To),Bc,zc,wo,Ol=se({},To,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wo&&(wo&&n.type==="mousemove"?(Bc=n.screenX-wo.screenX,zc=n.screenY-wo.screenY):zc=Bc=0,wo=n),Bc)},movementY:function(n){return"movementY"in n?n.movementY:zc}}),Kp=ai(Ol),_x=se({},Ol,{dataTransfer:0}),gx=ai(_x),vx=se({},To,{relatedTarget:0}),Vc=ai(vx),xx=se({},da,{animationName:0,elapsedTime:0,pseudoElement:0}),Sx=ai(xx),yx=se({},da,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Mx=ai(yx),Ex=se({},da,{data:0}),Zp=ai(Ex),Tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ax={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Rx(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Ax[n])?!!r[n]:!1}function Hc(){return Rx}var Cx=se({},To,{key:function(n){if(n.key){var r=Tx[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Ul(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?wx[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(n){return n.type==="keypress"?Ul(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ul(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),bx=ai(Cx),Px=se({},Ol,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),jp=ai(Px),Dx=se({},To,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),Lx=ai(Dx),Nx=se({},da,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=ai(Nx),Ux=se({},Ol,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=ai(Ux),Ox=[9,13,27,32],Gc=c&&"CompositionEvent"in window,Ao=null;c&&"documentMode"in document&&(Ao=document.documentMode);var kx=c&&"TextEvent"in window&&!Ao,Qp=c&&(!Gc||Ao&&8<Ao&&11>=Ao),Jp=" ",em=!1;function tm(n,r){switch(n){case"keyup":return Ox.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nm(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ha=!1;function Bx(n,r){switch(n){case"compositionend":return nm(r);case"keypress":return r.which!==32?null:(em=!0,Jp);case"textInput":return n=r.data,n===Jp&&em?null:n;default:return null}}function zx(n,r){if(ha)return n==="compositionend"||!Gc&&tm(n,r)?(n=qp(),Il=Oc=Gr=null,ha=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Qp&&r.locale!=="ko"?null:r.data;default:return null}}var Vx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function im(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!Vx[n.type]:r==="textarea"}function rm(n,r,l,f){pe(f),r=Hl(r,"onChange"),0<r.length&&(l=new kc("onChange","change",null,l,f),n.push({event:l,listeners:r}))}var Ro=null,Co=null;function Hx(n){Mm(n,0)}function kl(n){var r=va(n);if(Ht(r))return n}function Gx(n,r){if(n==="change")return r}var sm=!1;if(c){var Wc;if(c){var Xc="oninput"in document;if(!Xc){var am=document.createElement("div");am.setAttribute("oninput","return;"),Xc=typeof am.oninput=="function"}Wc=Xc}else Wc=!1;sm=Wc&&(!document.documentMode||9<document.documentMode)}function om(){Ro&&(Ro.detachEvent("onpropertychange",lm),Co=Ro=null)}function lm(n){if(n.propertyName==="value"&&kl(Co)){var r=[];rm(r,Co,n,je(n)),He(Hx,r)}}function Wx(n,r,l){n==="focusin"?(om(),Ro=r,Co=l,Ro.attachEvent("onpropertychange",lm)):n==="focusout"&&om()}function Xx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return kl(Co)}function Yx(n,r){if(n==="click")return kl(r)}function qx(n,r){if(n==="input"||n==="change")return kl(r)}function $x(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ui=typeof Object.is=="function"?Object.is:$x;function bo(n,r){if(Ui(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var l=Object.keys(n),f=Object.keys(r);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(r,m)||!Ui(n[m],r[m]))return!1}return!0}function um(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function cm(n,r){var l=um(n);n=0;for(var f;l;){if(l.nodeType===3){if(f=n+l.textContent.length,n<=r&&f>=r)return{node:l,offset:r-n};n=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=um(l)}}function fm(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?fm(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function dm(){for(var n=window,r=ut();r instanceof n.HTMLIFrameElement;){try{var l=typeof r.contentWindow.location.href=="string"}catch{l=!1}if(l)n=r.contentWindow;else break;r=ut(n.document)}return r}function Yc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function Kx(n){var r=dm(),l=n.focusedElem,f=n.selectionRange;if(r!==l&&l&&l.ownerDocument&&fm(l.ownerDocument.documentElement,l)){if(f!==null&&Yc(l)){if(r=f.start,n=f.end,n===void 0&&(n=r),"selectionStart"in l)l.selectionStart=r,l.selectionEnd=Math.min(n,l.value.length);else if(n=(r=l.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var m=l.textContent.length,v=Math.min(f.start,m);f=f.end===void 0?v:Math.min(f.end,m),!n.extend&&v>f&&(m=f,f=v,v=m),m=cm(l,v);var A=cm(l,f);m&&A&&(n.rangeCount!==1||n.anchorNode!==m.node||n.anchorOffset!==m.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(m.node,m.offset),n.removeAllRanges(),v>f?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=l;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<r.length;l++)n=r[l],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Zx=c&&"documentMode"in document&&11>=document.documentMode,pa=null,qc=null,Po=null,$c=!1;function hm(n,r,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;$c||pa==null||pa!==ut(f)||(f=pa,"selectionStart"in f&&Yc(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Po&&bo(Po,f)||(Po=f,f=Hl(qc,"onSelect"),0<f.length&&(r=new kc("onSelect","select",null,r,l),n.push({event:r,listeners:f}),r.target=pa)))}function Bl(n,r){var l={};return l[n.toLowerCase()]=r.toLowerCase(),l["Webkit"+n]="webkit"+r,l["Moz"+n]="moz"+r,l}var ma={animationend:Bl("Animation","AnimationEnd"),animationiteration:Bl("Animation","AnimationIteration"),animationstart:Bl("Animation","AnimationStart"),transitionend:Bl("Transition","TransitionEnd")},Kc={},pm={};c&&(pm=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function zl(n){if(Kc[n])return Kc[n];if(!ma[n])return n;var r=ma[n],l;for(l in r)if(r.hasOwnProperty(l)&&l in pm)return Kc[n]=r[l];return n}var mm=zl("animationend"),_m=zl("animationiteration"),gm=zl("animationstart"),vm=zl("transitionend"),xm=new Map,Sm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Wr(n,r){xm.set(n,r),o(r,[n])}for(var Zc=0;Zc<Sm.length;Zc++){var jc=Sm[Zc],jx=jc.toLowerCase(),Qx=jc[0].toUpperCase()+jc.slice(1);Wr(jx,"on"+Qx)}Wr(mm,"onAnimationEnd"),Wr(_m,"onAnimationIteration"),Wr(gm,"onAnimationStart"),Wr("dblclick","onDoubleClick"),Wr("focusin","onFocus"),Wr("focusout","onBlur"),Wr(vm,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Do="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Do));function ym(n,r,l){var f=n.type||"unknown-event";n.currentTarget=l,Cl(f,r,void 0,n),n.currentTarget=null}function Mm(n,r){r=(r&4)!==0;for(var l=0;l<n.length;l++){var f=n[l],m=f.event;f=f.listeners;e:{var v=void 0;if(r)for(var A=f.length-1;0<=A;A--){var O=f[A],z=O.instance,ce=O.currentTarget;if(O=O.listener,z!==v&&m.isPropagationStopped())break e;ym(m,O,ce),v=z}else for(A=0;A<f.length;A++){if(O=f[A],z=O.instance,ce=O.currentTarget,O=O.listener,z!==v&&m.isPropagationStopped())break e;ym(m,O,ce),v=z}}}if(Ts)throw n=ws,Ts=!1,ws=null,n}function zt(n,r){var l=r[af];l===void 0&&(l=r[af]=new Set);var f=n+"__bubble";l.has(f)||(Em(r,n,2,!1),l.add(f))}function Qc(n,r,l){var f=0;r&&(f|=4),Em(l,n,f,r)}var Vl="_reactListening"+Math.random().toString(36).slice(2);function Lo(n){if(!n[Vl]){n[Vl]=!0,i.forEach(function(l){l!=="selectionchange"&&(Jx.has(l)||Qc(l,!1,n),Qc(l,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Vl]||(r[Vl]=!0,Qc("selectionchange",!1,r))}}function Em(n,r,l,f){switch(Yp(r)){case 1:var m=hx;break;case 4:m=px;break;default:m=Uc}l=m.bind(null,r,l,n),m=void 0,!Rt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(m=!0),f?m!==void 0?n.addEventListener(r,l,{capture:!0,passive:m}):n.addEventListener(r,l,!0):m!==void 0?n.addEventListener(r,l,{passive:m}):n.addEventListener(r,l,!1)}function Jc(n,r,l,f,m){var v=f;if((r&1)===0&&(r&2)===0&&f!==null)e:for(;;){if(f===null)return;var A=f.tag;if(A===3||A===4){var O=f.stateNode.containerInfo;if(O===m||O.nodeType===8&&O.parentNode===m)break;if(A===4)for(A=f.return;A!==null;){var z=A.tag;if((z===3||z===4)&&(z=A.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;A=A.return}for(;O!==null;){if(A=bs(O),A===null)return;if(z=A.tag,z===5||z===6){f=v=A;continue e}O=O.parentNode}}f=f.return}He(function(){var ce=v,Se=je(l),ye=[];e:{var xe=xm.get(n);if(xe!==void 0){var Be=kc,Ge=n;switch(n){case"keypress":if(Ul(l)===0)break e;case"keydown":case"keyup":Be=bx;break;case"focusin":Ge="focus",Be=Vc;break;case"focusout":Ge="blur",Be=Vc;break;case"beforeblur":case"afterblur":Be=Vc;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=gx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=Lx;break;case mm:case _m:case gm:Be=Sx;break;case vm:Be=Ix;break;case"scroll":Be=mx;break;case"wheel":Be=Fx;break;case"copy":case"cut":case"paste":Be=Mx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=jp}var Ye=(r&4)!==0,on=!Ye&&n==="scroll",J=Ye?xe!==null?xe+"Capture":null:xe;Ye=[];for(var X=ce,ne;X!==null;){ne=X;var Ee=ne.stateNode;if(ne.tag===5&&Ee!==null&&(ne=Ee,J!==null&&(Ee=It(X,J),Ee!=null&&Ye.push(No(X,Ee,ne)))),on)break;X=X.return}0<Ye.length&&(xe=new Be(xe,Ge,null,l,Se),ye.push({event:xe,listeners:Ye}))}}if((r&7)===0){e:{if(xe=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",xe&&l!==Re&&(Ge=l.relatedTarget||l.fromElement)&&(bs(Ge)||Ge[pr]))break e;if((Be||xe)&&(xe=Se.window===Se?Se:(xe=Se.ownerDocument)?xe.defaultView||xe.parentWindow:window,Be?(Ge=l.relatedTarget||l.toElement,Be=ce,Ge=Ge?bs(Ge):null,Ge!==null&&(on=Bn(Ge),Ge!==on||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Be=null,Ge=ce),Be!==Ge)){if(Ye=Kp,Ee="onMouseLeave",J="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=jp,Ee="onPointerLeave",J="onPointerEnter",X="pointer"),on=Be==null?xe:va(Be),ne=Ge==null?xe:va(Ge),xe=new Ye(Ee,X+"leave",Be,l,Se),xe.target=on,xe.relatedTarget=ne,Ee=null,bs(Se)===ce&&(Ye=new Ye(J,X+"enter",Ge,l,Se),Ye.target=ne,Ye.relatedTarget=on,Ee=Ye),on=Ee,Be&&Ge)t:{for(Ye=Be,J=Ge,X=0,ne=Ye;ne;ne=_a(ne))X++;for(ne=0,Ee=J;Ee;Ee=_a(Ee))ne++;for(;0<X-ne;)Ye=_a(Ye),X--;for(;0<ne-X;)J=_a(J),ne--;for(;X--;){if(Ye===J||J!==null&&Ye===J.alternate)break t;Ye=_a(Ye),J=_a(J)}Ye=null}else Ye=null;Be!==null&&Tm(ye,xe,Be,Ye,!1),Ge!==null&&on!==null&&Tm(ye,on,Ge,Ye,!0)}}e:{if(xe=ce?va(ce):window,Be=xe.nodeName&&xe.nodeName.toLowerCase(),Be==="select"||Be==="input"&&xe.type==="file")var Ke=Gx;else if(im(xe))if(sm)Ke=qx;else{Ke=Xx;var tt=Wx}else(Be=xe.nodeName)&&Be.toLowerCase()==="input"&&(xe.type==="checkbox"||xe.type==="radio")&&(Ke=Yx);if(Ke&&(Ke=Ke(n,ce))){rm(ye,Ke,l,Se);break e}tt&&tt(n,xe,ce),n==="focusout"&&(tt=xe._wrapperState)&&tt.controlled&&xe.type==="number"&&nn(xe,"number",xe.value)}switch(tt=ce?va(ce):window,n){case"focusin":(im(tt)||tt.contentEditable==="true")&&(pa=tt,qc=ce,Po=null);break;case"focusout":Po=qc=pa=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,hm(ye,l,Se);break;case"selectionchange":if(Zx)break;case"keydown":case"keyup":hm(ye,l,Se)}var nt;if(Gc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ha?tm(n,l)&&(rt="onCompositionEnd"):n==="keydown"&&l.keyCode===229&&(rt="onCompositionStart");rt&&(Qp&&l.locale!=="ko"&&(ha||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ha&&(nt=qp()):(Gr=Se,Oc="value"in Gr?Gr.value:Gr.textContent,ha=!0)),tt=Hl(ce,rt),0<tt.length&&(rt=new Zp(rt,n,null,l,Se),ye.push({event:rt,listeners:tt}),nt?rt.data=nt:(nt=nm(l),nt!==null&&(rt.data=nt)))),(nt=kx?Bx(n,l):zx(n,l))&&(ce=Hl(ce,"onBeforeInput"),0<ce.length&&(Se=new Zp("onBeforeInput","beforeinput",null,l,Se),ye.push({event:Se,listeners:ce}),Se.data=nt))}Mm(ye,r)})}function No(n,r,l){return{instance:n,listener:r,currentTarget:l}}function Hl(n,r){for(var l=r+"Capture",f=[];n!==null;){var m=n,v=m.stateNode;m.tag===5&&v!==null&&(m=v,v=It(n,l),v!=null&&f.unshift(No(n,v,m)),v=It(n,r),v!=null&&f.push(No(n,v,m))),n=n.return}return f}function _a(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Tm(n,r,l,f,m){for(var v=r._reactName,A=[];l!==null&&l!==f;){var O=l,z=O.alternate,ce=O.stateNode;if(z!==null&&z===f)break;O.tag===5&&ce!==null&&(O=ce,m?(z=It(l,v),z!=null&&A.unshift(No(l,z,O))):m||(z=It(l,v),z!=null&&A.push(No(l,z,O)))),l=l.return}A.length!==0&&n.push({event:r,listeners:A})}var eS=/\r\n?/g,tS=/\u0000|\uFFFD/g;function wm(n){return(typeof n=="string"?n:""+n).replace(eS,`
`).replace(tS,"")}function Gl(n,r,l){if(r=wm(r),wm(n)!==r&&l)throw Error(t(425))}function Wl(){}var ef=null,tf=null;function nf(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var rf=typeof setTimeout=="function"?setTimeout:void 0,nS=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,iS=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(n){return Am.resolve(null).then(n).catch(rS)}:rf;function rS(n){setTimeout(function(){throw n})}function sf(n,r){var l=r,f=0;do{var m=l.nextSibling;if(n.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){n.removeChild(m),Eo(r);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);Eo(r)}function Xr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Rm(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="$"||l==="$!"||l==="$?"){if(r===0)return n;r--}else l==="/$"&&r++}n=n.previousSibling}return null}var ga=Math.random().toString(36).slice(2),Ki="__reactFiber$"+ga,Io="__reactProps$"+ga,pr="__reactContainer$"+ga,af="__reactEvents$"+ga,sS="__reactListeners$"+ga,aS="__reactHandles$"+ga;function bs(n){var r=n[Ki];if(r)return r;for(var l=n.parentNode;l;){if(r=l[pr]||l[Ki]){if(l=r.alternate,r.child!==null||l!==null&&l.child!==null)for(n=Rm(n);n!==null;){if(l=n[Ki])return l;n=Rm(n)}return r}n=l,l=n.parentNode}return null}function Uo(n){return n=n[Ki]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function va(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Xl(n){return n[Io]||null}var of=[],xa=-1;function Yr(n){return{current:n}}function Vt(n){0>xa||(n.current=of[xa],of[xa]=null,xa--)}function kt(n,r){xa++,of[xa]=n.current,n.current=r}var qr={},Pn=Yr(qr),Yn=Yr(!1),Ps=qr;function Sa(n,r){var l=n.type.contextTypes;if(!l)return qr;var f=n.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===r)return f.__reactInternalMemoizedMaskedChildContext;var m={},v;for(v in l)m[v]=r[v];return f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=m),m}function qn(n){return n=n.childContextTypes,n!=null}function Yl(){Vt(Yn),Vt(Pn)}function Cm(n,r,l){if(Pn.current!==qr)throw Error(t(168));kt(Pn,r),kt(Yn,l)}function bm(n,r,l){var f=n.stateNode;if(r=r.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in r))throw Error(t(108,ve(n)||"Unknown",m));return se({},l,f)}function ql(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||qr,Ps=Pn.current,kt(Pn,n),kt(Yn,Yn.current),!0}function Pm(n,r,l){var f=n.stateNode;if(!f)throw Error(t(169));l?(n=bm(n,r,Ps),f.__reactInternalMemoizedMergedChildContext=n,Vt(Yn),Vt(Pn),kt(Pn,n)):Vt(Yn),kt(Yn,l)}var mr=null,$l=!1,lf=!1;function Dm(n){mr===null?mr=[n]:mr.push(n)}function oS(n){$l=!0,Dm(n)}function $r(){if(!lf&&mr!==null){lf=!0;var n=0,r=ht;try{var l=mr;for(ht=1;n<l.length;n++){var f=l[n];do f=f(!0);while(f!==null)}mr=null,$l=!1}catch(m){throw mr!==null&&(mr=mr.slice(n+1)),Rs(vo,$r),m}finally{ht=r,lf=!1}}return null}var ya=[],Ma=0,Kl=null,Zl=0,yi=[],Mi=0,Ds=null,_r=1,gr="";function Ls(n,r){ya[Ma++]=Zl,ya[Ma++]=Kl,Kl=n,Zl=r}function Lm(n,r,l){yi[Mi++]=_r,yi[Mi++]=gr,yi[Mi++]=Ds,Ds=n;var f=_r;n=gr;var m=32-Te(f)-1;f&=~(1<<m),l+=1;var v=32-Te(r)+m;if(30<v){var A=m-m%5;v=(f&(1<<A)-1).toString(32),f>>=A,m-=A,_r=1<<32-Te(r)+m|l<<m|f,gr=v+n}else _r=1<<v|l<<m|f,gr=n}function uf(n){n.return!==null&&(Ls(n,1),Lm(n,1,0))}function cf(n){for(;n===Kl;)Kl=ya[--Ma],ya[Ma]=null,Zl=ya[--Ma],ya[Ma]=null;for(;n===Ds;)Ds=yi[--Mi],yi[Mi]=null,gr=yi[--Mi],yi[Mi]=null,_r=yi[--Mi],yi[Mi]=null}var oi=null,li=null,Yt=!1,Fi=null;function Nm(n,r){var l=Ai(5,null,null,0);l.elementType="DELETED",l.stateNode=r,l.return=n,r=n.deletions,r===null?(n.deletions=[l],n.flags|=16):r.push(l)}function Im(n,r){switch(n.tag){case 5:var l=n.type;return r=r.nodeType!==1||l.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,oi=n,li=Xr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,oi=n,li=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(l=Ds!==null?{id:_r,overflow:gr}:null,n.memoizedState={dehydrated:r,treeContext:l,retryLane:1073741824},l=Ai(18,null,null,0),l.stateNode=r,l.return=n,n.child=l,oi=n,li=null,!0):!1;default:return!1}}function ff(n){return(n.mode&1)!==0&&(n.flags&128)===0}function df(n){if(Yt){var r=li;if(r){var l=r;if(!Im(n,r)){if(ff(n))throw Error(t(418));r=Xr(l.nextSibling);var f=oi;r&&Im(n,r)?Nm(f,l):(n.flags=n.flags&-4097|2,Yt=!1,oi=n)}}else{if(ff(n))throw Error(t(418));n.flags=n.flags&-4097|2,Yt=!1,oi=n}}}function Um(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;oi=n}function jl(n){if(n!==oi)return!1;if(!Yt)return Um(n),Yt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!nf(n.type,n.memoizedProps)),r&&(r=li)){if(ff(n))throw Fm(),Error(t(418));for(;r;)Nm(n,r),r=Xr(r.nextSibling)}if(Um(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var l=n.data;if(l==="/$"){if(r===0){li=Xr(n.nextSibling);break e}r--}else l!=="$"&&l!=="$!"&&l!=="$?"||r++}n=n.nextSibling}li=null}}else li=oi?Xr(n.stateNode.nextSibling):null;return!0}function Fm(){for(var n=li;n;)n=Xr(n.nextSibling)}function Ea(){li=oi=null,Yt=!1}function hf(n){Fi===null?Fi=[n]:Fi.push(n)}var lS=R.ReactCurrentBatchConfig;function Fo(n,r,l){if(n=l.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,n));var m=f,v=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===v?r.ref:(r=function(A){var O=m.refs;A===null?delete O[v]:O[v]=A},r._stringRef=v,r)}if(typeof n!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,n))}return n}function Ql(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Om(n){var r=n._init;return r(n._payload)}function km(n){function r(J,X){if(n){var ne=J.deletions;ne===null?(J.deletions=[X],J.flags|=16):ne.push(X)}}function l(J,X){if(!n)return null;for(;X!==null;)r(J,X),X=X.sibling;return null}function f(J,X){for(J=new Map;X!==null;)X.key!==null?J.set(X.key,X):J.set(X.index,X),X=X.sibling;return J}function m(J,X){return J=ns(J,X),J.index=0,J.sibling=null,J}function v(J,X,ne){return J.index=ne,n?(ne=J.alternate,ne!==null?(ne=ne.index,ne<X?(J.flags|=2,X):ne):(J.flags|=2,X)):(J.flags|=1048576,X)}function A(J){return n&&J.alternate===null&&(J.flags|=2),J}function O(J,X,ne,Ee){return X===null||X.tag!==6?(X=rd(ne,J.mode,Ee),X.return=J,X):(X=m(X,ne),X.return=J,X)}function z(J,X,ne,Ee){var Ke=ne.type;return Ke===I?Se(J,X,ne.props.children,Ee,ne.key):X!==null&&(X.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&Om(Ke)===X.type)?(Ee=m(X,ne.props),Ee.ref=Fo(J,X,ne),Ee.return=J,Ee):(Ee=Mu(ne.type,ne.key,ne.props,null,J.mode,Ee),Ee.ref=Fo(J,X,ne),Ee.return=J,Ee)}function ce(J,X,ne,Ee){return X===null||X.tag!==4||X.stateNode.containerInfo!==ne.containerInfo||X.stateNode.implementation!==ne.implementation?(X=sd(ne,J.mode,Ee),X.return=J,X):(X=m(X,ne.children||[]),X.return=J,X)}function Se(J,X,ne,Ee,Ke){return X===null||X.tag!==7?(X=zs(ne,J.mode,Ee,Ke),X.return=J,X):(X=m(X,ne),X.return=J,X)}function ye(J,X,ne){if(typeof X=="string"&&X!==""||typeof X=="number")return X=rd(""+X,J.mode,ne),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case P:return ne=Mu(X.type,X.key,X.props,null,J.mode,ne),ne.ref=Fo(J,null,X),ne.return=J,ne;case L:return X=sd(X,J.mode,ne),X.return=J,X;case Q:var Ee=X._init;return ye(J,Ee(X._payload),ne)}if($t(X)||oe(X))return X=zs(X,J.mode,ne,null),X.return=J,X;Ql(J,X)}return null}function xe(J,X,ne,Ee){var Ke=X!==null?X.key:null;if(typeof ne=="string"&&ne!==""||typeof ne=="number")return Ke!==null?null:O(J,X,""+ne,Ee);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case P:return ne.key===Ke?z(J,X,ne,Ee):null;case L:return ne.key===Ke?ce(J,X,ne,Ee):null;case Q:return Ke=ne._init,xe(J,X,Ke(ne._payload),Ee)}if($t(ne)||oe(ne))return Ke!==null?null:Se(J,X,ne,Ee,null);Ql(J,ne)}return null}function Be(J,X,ne,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return J=J.get(ne)||null,O(X,J,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case P:return J=J.get(Ee.key===null?ne:Ee.key)||null,z(X,J,Ee,Ke);case L:return J=J.get(Ee.key===null?ne:Ee.key)||null,ce(X,J,Ee,Ke);case Q:var tt=Ee._init;return Be(J,X,ne,tt(Ee._payload),Ke)}if($t(Ee)||oe(Ee))return J=J.get(ne)||null,Se(X,J,Ee,Ke,null);Ql(X,Ee)}return null}function Ge(J,X,ne,Ee){for(var Ke=null,tt=null,nt=X,rt=X=0,Sn=null;nt!==null&&rt<ne.length;rt++){nt.index>rt?(Sn=nt,nt=null):Sn=nt.sibling;var wt=xe(J,nt,ne[rt],Ee);if(wt===null){nt===null&&(nt=Sn);break}n&&nt&&wt.alternate===null&&r(J,nt),X=v(wt,X,rt),tt===null?Ke=wt:tt.sibling=wt,tt=wt,nt=Sn}if(rt===ne.length)return l(J,nt),Yt&&Ls(J,rt),Ke;if(nt===null){for(;rt<ne.length;rt++)nt=ye(J,ne[rt],Ee),nt!==null&&(X=v(nt,X,rt),tt===null?Ke=nt:tt.sibling=nt,tt=nt);return Yt&&Ls(J,rt),Ke}for(nt=f(J,nt);rt<ne.length;rt++)Sn=Be(nt,J,rt,ne[rt],Ee),Sn!==null&&(n&&Sn.alternate!==null&&nt.delete(Sn.key===null?rt:Sn.key),X=v(Sn,X,rt),tt===null?Ke=Sn:tt.sibling=Sn,tt=Sn);return n&&nt.forEach(function(is){return r(J,is)}),Yt&&Ls(J,rt),Ke}function Ye(J,X,ne,Ee){var Ke=oe(ne);if(typeof Ke!="function")throw Error(t(150));if(ne=Ke.call(ne),ne==null)throw Error(t(151));for(var tt=Ke=null,nt=X,rt=X=0,Sn=null,wt=ne.next();nt!==null&&!wt.done;rt++,wt=ne.next()){nt.index>rt?(Sn=nt,nt=null):Sn=nt.sibling;var is=xe(J,nt,wt.value,Ee);if(is===null){nt===null&&(nt=Sn);break}n&&nt&&is.alternate===null&&r(J,nt),X=v(is,X,rt),tt===null?Ke=is:tt.sibling=is,tt=is,nt=Sn}if(wt.done)return l(J,nt),Yt&&Ls(J,rt),Ke;if(nt===null){for(;!wt.done;rt++,wt=ne.next())wt=ye(J,wt.value,Ee),wt!==null&&(X=v(wt,X,rt),tt===null?Ke=wt:tt.sibling=wt,tt=wt);return Yt&&Ls(J,rt),Ke}for(nt=f(J,nt);!wt.done;rt++,wt=ne.next())wt=Be(nt,J,rt,wt.value,Ee),wt!==null&&(n&&wt.alternate!==null&&nt.delete(wt.key===null?rt:wt.key),X=v(wt,X,rt),tt===null?Ke=wt:tt.sibling=wt,tt=wt);return n&&nt.forEach(function(VS){return r(J,VS)}),Yt&&Ls(J,rt),Ke}function on(J,X,ne,Ee){if(typeof ne=="object"&&ne!==null&&ne.type===I&&ne.key===null&&(ne=ne.props.children),typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case P:e:{for(var Ke=ne.key,tt=X;tt!==null;){if(tt.key===Ke){if(Ke=ne.type,Ke===I){if(tt.tag===7){l(J,tt.sibling),X=m(tt,ne.props.children),X.return=J,J=X;break e}}else if(tt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===Q&&Om(Ke)===tt.type){l(J,tt.sibling),X=m(tt,ne.props),X.ref=Fo(J,tt,ne),X.return=J,J=X;break e}l(J,tt);break}else r(J,tt);tt=tt.sibling}ne.type===I?(X=zs(ne.props.children,J.mode,Ee,ne.key),X.return=J,J=X):(Ee=Mu(ne.type,ne.key,ne.props,null,J.mode,Ee),Ee.ref=Fo(J,X,ne),Ee.return=J,J=Ee)}return A(J);case L:e:{for(tt=ne.key;X!==null;){if(X.key===tt)if(X.tag===4&&X.stateNode.containerInfo===ne.containerInfo&&X.stateNode.implementation===ne.implementation){l(J,X.sibling),X=m(X,ne.children||[]),X.return=J,J=X;break e}else{l(J,X);break}else r(J,X);X=X.sibling}X=sd(ne,J.mode,Ee),X.return=J,J=X}return A(J);case Q:return tt=ne._init,on(J,X,tt(ne._payload),Ee)}if($t(ne))return Ge(J,X,ne,Ee);if(oe(ne))return Ye(J,X,ne,Ee);Ql(J,ne)}return typeof ne=="string"&&ne!==""||typeof ne=="number"?(ne=""+ne,X!==null&&X.tag===6?(l(J,X.sibling),X=m(X,ne),X.return=J,J=X):(l(J,X),X=rd(ne,J.mode,Ee),X.return=J,J=X),A(J)):l(J,X)}return on}var Ta=km(!0),Bm=km(!1),Jl=Yr(null),eu=null,wa=null,pf=null;function mf(){pf=wa=eu=null}function _f(n){var r=Jl.current;Vt(Jl),n._currentValue=r}function gf(n,r,l){for(;n!==null;){var f=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,f!==null&&(f.childLanes|=r)):f!==null&&(f.childLanes&r)!==r&&(f.childLanes|=r),n===l)break;n=n.return}}function Aa(n,r){eu=n,pf=wa=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&($n=!0),n.firstContext=null)}function Ei(n){var r=n._currentValue;if(pf!==n)if(n={context:n,memoizedValue:r,next:null},wa===null){if(eu===null)throw Error(t(308));wa=n,eu.dependencies={lanes:0,firstContext:n}}else wa=wa.next=n;return r}var Ns=null;function vf(n){Ns===null?Ns=[n]:Ns.push(n)}function zm(n,r,l,f){var m=r.interleaved;return m===null?(l.next=l,vf(r)):(l.next=m.next,m.next=l),r.interleaved=l,vr(n,f)}function vr(n,r){n.lanes|=r;var l=n.alternate;for(l!==null&&(l.lanes|=r),l=n,n=n.return;n!==null;)n.childLanes|=r,l=n.alternate,l!==null&&(l.childLanes|=r),l=n,n=n.return;return l.tag===3?l.stateNode:null}var Kr=!1;function xf(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Vm(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Zr(n,r,l){var f=n.updateQueue;if(f===null)return null;if(f=f.shared,(Mt&2)!==0){var m=f.pending;return m===null?r.next=r:(r.next=m.next,m.next=r),f.pending=r,vr(n,l)}return m=f.interleaved,m===null?(r.next=r,vf(f)):(r.next=m.next,m.next=r),f.interleaved=r,vr(n,l)}function tu(n,r,l){if(r=r.updateQueue,r!==null&&(r=r.shared,(l&4194240)!==0)){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Xn(n,l)}}function Hm(n,r){var l=n.updateQueue,f=n.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,v=null;if(l=l.firstBaseUpdate,l!==null){do{var A={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};v===null?m=v=A:v=v.next=A,l=l.next}while(l!==null);v===null?m=v=r:v=v.next=r}else m=v=r;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:v,shared:f.shared,effects:f.effects},n.updateQueue=l;return}n=l.lastBaseUpdate,n===null?l.firstBaseUpdate=r:n.next=r,l.lastBaseUpdate=r}function nu(n,r,l,f){var m=n.updateQueue;Kr=!1;var v=m.firstBaseUpdate,A=m.lastBaseUpdate,O=m.shared.pending;if(O!==null){m.shared.pending=null;var z=O,ce=z.next;z.next=null,A===null?v=ce:A.next=ce,A=z;var Se=n.alternate;Se!==null&&(Se=Se.updateQueue,O=Se.lastBaseUpdate,O!==A&&(O===null?Se.firstBaseUpdate=ce:O.next=ce,Se.lastBaseUpdate=z))}if(v!==null){var ye=m.baseState;A=0,Se=ce=z=null,O=v;do{var xe=O.lane,Be=O.eventTime;if((f&xe)===xe){Se!==null&&(Se=Se.next={eventTime:Be,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ge=n,Ye=O;switch(xe=r,Be=l,Ye.tag){case 1:if(Ge=Ye.payload,typeof Ge=="function"){ye=Ge.call(Be,ye,xe);break e}ye=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Ye.payload,xe=typeof Ge=="function"?Ge.call(Be,ye,xe):Ge,xe==null)break e;ye=se({},ye,xe);break e;case 2:Kr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,xe=m.effects,xe===null?m.effects=[O]:xe.push(O))}else Be={eventTime:Be,lane:xe,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Se===null?(ce=Se=Be,z=ye):Se=Se.next=Be,A|=xe;if(O=O.next,O===null){if(O=m.shared.pending,O===null)break;xe=O,O=xe.next,xe.next=null,m.lastBaseUpdate=xe,m.shared.pending=null}}while(!0);if(Se===null&&(z=ye),m.baseState=z,m.firstBaseUpdate=ce,m.lastBaseUpdate=Se,r=m.shared.interleaved,r!==null){m=r;do A|=m.lane,m=m.next;while(m!==r)}else v===null&&(m.shared.lanes=0);Fs|=A,n.lanes=A,n.memoizedState=ye}}function Gm(n,r,l){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var f=n[r],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var Oo={},Zi=Yr(Oo),ko=Yr(Oo),Bo=Yr(Oo);function Is(n){if(n===Oo)throw Error(t(174));return n}function Sf(n,r){switch(kt(Bo,r),kt(ko,n),kt(Zi,Oo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:w(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=w(r,n)}Vt(Zi),kt(Zi,r)}function Ra(){Vt(Zi),Vt(ko),Vt(Bo)}function Wm(n){Is(Bo.current);var r=Is(Zi.current),l=w(r,n.type);r!==l&&(kt(ko,n),kt(Zi,l))}function yf(n){ko.current===n&&(Vt(Zi),Vt(ko))}var Zt=Yr(0);function iu(n){for(var r=n;r!==null;){if(r.tag===13){var l=r.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Mf=[];function Ef(){for(var n=0;n<Mf.length;n++)Mf[n]._workInProgressVersionPrimary=null;Mf.length=0}var ru=R.ReactCurrentDispatcher,Tf=R.ReactCurrentBatchConfig,Us=0,jt=null,pn=null,vn=null,su=!1,zo=!1,Vo=0,uS=0;function Dn(){throw Error(t(321))}function wf(n,r){if(r===null)return!1;for(var l=0;l<r.length&&l<n.length;l++)if(!Ui(n[l],r[l]))return!1;return!0}function Af(n,r,l,f,m,v){if(Us=v,jt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ru.current=n===null||n.memoizedState===null?hS:pS,n=l(f,m),zo){v=0;do{if(zo=!1,Vo=0,25<=v)throw Error(t(301));v+=1,vn=pn=null,r.updateQueue=null,ru.current=mS,n=l(f,m)}while(zo)}if(ru.current=lu,r=pn!==null&&pn.next!==null,Us=0,vn=pn=jt=null,su=!1,r)throw Error(t(300));return n}function Rf(){var n=Vo!==0;return Vo=0,n}function ji(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?jt.memoizedState=vn=n:vn=vn.next=n,vn}function Ti(){if(pn===null){var n=jt.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var r=vn===null?jt.memoizedState:vn.next;if(r!==null)vn=r,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},vn===null?jt.memoizedState=vn=n:vn=vn.next=n}return vn}function Ho(n,r){return typeof r=="function"?r(n):r}function Cf(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=pn,m=f.baseQueue,v=l.pending;if(v!==null){if(m!==null){var A=m.next;m.next=v.next,v.next=A}f.baseQueue=m=v,l.pending=null}if(m!==null){v=m.next,f=f.baseState;var O=A=null,z=null,ce=v;do{var Se=ce.lane;if((Us&Se)===Se)z!==null&&(z=z.next={lane:0,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null}),f=ce.hasEagerState?ce.eagerState:n(f,ce.action);else{var ye={lane:Se,action:ce.action,hasEagerState:ce.hasEagerState,eagerState:ce.eagerState,next:null};z===null?(O=z=ye,A=f):z=z.next=ye,jt.lanes|=Se,Fs|=Se}ce=ce.next}while(ce!==null&&ce!==v);z===null?A=f:z.next=O,Ui(f,r.memoizedState)||($n=!0),r.memoizedState=f,r.baseState=A,r.baseQueue=z,l.lastRenderedState=f}if(n=l.interleaved,n!==null){m=n;do v=m.lane,jt.lanes|=v,Fs|=v,m=m.next;while(m!==n)}else m===null&&(l.lanes=0);return[r.memoizedState,l.dispatch]}function bf(n){var r=Ti(),l=r.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=n;var f=l.dispatch,m=l.pending,v=r.memoizedState;if(m!==null){l.pending=null;var A=m=m.next;do v=n(v,A.action),A=A.next;while(A!==m);Ui(v,r.memoizedState)||($n=!0),r.memoizedState=v,r.baseQueue===null&&(r.baseState=v),l.lastRenderedState=v}return[v,f]}function Xm(){}function Ym(n,r){var l=jt,f=Ti(),m=r(),v=!Ui(f.memoizedState,m);if(v&&(f.memoizedState=m,$n=!0),f=f.queue,Pf(Km.bind(null,l,f,n),[n]),f.getSnapshot!==r||v||vn!==null&&vn.memoizedState.tag&1){if(l.flags|=2048,Go(9,$m.bind(null,l,f,m,r),void 0,null),xn===null)throw Error(t(349));(Us&30)!==0||qm(l,r,m)}return m}function qm(n,r,l){n.flags|=16384,n={getSnapshot:r,value:l},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.stores=[n]):(l=r.stores,l===null?r.stores=[n]:l.push(n))}function $m(n,r,l,f){r.value=l,r.getSnapshot=f,Zm(r)&&jm(n)}function Km(n,r,l){return l(function(){Zm(r)&&jm(n)})}function Zm(n){var r=n.getSnapshot;n=n.value;try{var l=r();return!Ui(n,l)}catch{return!0}}function jm(n){var r=vr(n,1);r!==null&&zi(r,n,1,-1)}function Qm(n){var r=ji();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},r.queue=n,n=n.dispatch=dS.bind(null,jt,n),[r.memoizedState,n]}function Go(n,r,l,f){return n={tag:n,create:r,destroy:l,deps:f,next:null},r=jt.updateQueue,r===null?(r={lastEffect:null,stores:null},jt.updateQueue=r,r.lastEffect=n.next=n):(l=r.lastEffect,l===null?r.lastEffect=n.next=n:(f=l.next,l.next=n,n.next=f,r.lastEffect=n)),n}function Jm(){return Ti().memoizedState}function au(n,r,l,f){var m=ji();jt.flags|=n,m.memoizedState=Go(1|r,l,void 0,f===void 0?null:f)}function ou(n,r,l,f){var m=Ti();f=f===void 0?null:f;var v=void 0;if(pn!==null){var A=pn.memoizedState;if(v=A.destroy,f!==null&&wf(f,A.deps)){m.memoizedState=Go(r,l,v,f);return}}jt.flags|=n,m.memoizedState=Go(1|r,l,v,f)}function e_(n,r){return au(8390656,8,n,r)}function Pf(n,r){return ou(2048,8,n,r)}function t_(n,r){return ou(4,2,n,r)}function n_(n,r){return ou(4,4,n,r)}function i_(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function r_(n,r,l){return l=l!=null?l.concat([n]):null,ou(4,4,i_.bind(null,r,n),l)}function Df(){}function s_(n,r){var l=Ti();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&wf(r,f[1])?f[0]:(l.memoizedState=[n,r],n)}function a_(n,r){var l=Ti();r=r===void 0?null:r;var f=l.memoizedState;return f!==null&&r!==null&&wf(r,f[1])?f[0]:(n=n(),l.memoizedState=[n,r],n)}function o_(n,r,l){return(Us&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=l):(Ui(l,r)||(l=ke(),jt.lanes|=l,Fs|=l,n.baseState=!0),r)}function cS(n,r){var l=ht;ht=l!==0&&4>l?l:4,n(!0);var f=Tf.transition;Tf.transition={};try{n(!1),r()}finally{ht=l,Tf.transition=f}}function l_(){return Ti().memoizedState}function fS(n,r,l){var f=es(n);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},u_(n))c_(r,l);else if(l=zm(n,r,l,f),l!==null){var m=Vn();zi(l,n,f,m),f_(l,r,f)}}function dS(n,r,l){var f=es(n),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(u_(n))c_(r,m);else{var v=n.alternate;if(n.lanes===0&&(v===null||v.lanes===0)&&(v=r.lastRenderedReducer,v!==null))try{var A=r.lastRenderedState,O=v(A,l);if(m.hasEagerState=!0,m.eagerState=O,Ui(O,A)){var z=r.interleaved;z===null?(m.next=m,vf(r)):(m.next=z.next,z.next=m),r.interleaved=m;return}}catch{}finally{}l=zm(n,r,m,f),l!==null&&(m=Vn(),zi(l,n,f,m),f_(l,r,f))}}function u_(n){var r=n.alternate;return n===jt||r!==null&&r===jt}function c_(n,r){zo=su=!0;var l=n.pending;l===null?r.next=r:(r.next=l.next,l.next=r),n.pending=r}function f_(n,r,l){if((l&4194240)!==0){var f=r.lanes;f&=n.pendingLanes,l|=f,r.lanes=l,Xn(n,l)}}var lu={readContext:Ei,useCallback:Dn,useContext:Dn,useEffect:Dn,useImperativeHandle:Dn,useInsertionEffect:Dn,useLayoutEffect:Dn,useMemo:Dn,useReducer:Dn,useRef:Dn,useState:Dn,useDebugValue:Dn,useDeferredValue:Dn,useTransition:Dn,useMutableSource:Dn,useSyncExternalStore:Dn,useId:Dn,unstable_isNewReconciler:!1},hS={readContext:Ei,useCallback:function(n,r){return ji().memoizedState=[n,r===void 0?null:r],n},useContext:Ei,useEffect:e_,useImperativeHandle:function(n,r,l){return l=l!=null?l.concat([n]):null,au(4194308,4,i_.bind(null,r,n),l)},useLayoutEffect:function(n,r){return au(4194308,4,n,r)},useInsertionEffect:function(n,r){return au(4,2,n,r)},useMemo:function(n,r){var l=ji();return r=r===void 0?null:r,n=n(),l.memoizedState=[n,r],n},useReducer:function(n,r,l){var f=ji();return r=l!==void 0?l(r):r,f.memoizedState=f.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},f.queue=n,n=n.dispatch=fS.bind(null,jt,n),[f.memoizedState,n]},useRef:function(n){var r=ji();return n={current:n},r.memoizedState=n},useState:Qm,useDebugValue:Df,useDeferredValue:function(n){return ji().memoizedState=n},useTransition:function(){var n=Qm(!1),r=n[0];return n=cS.bind(null,n[1]),ji().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,l){var f=jt,m=ji();if(Yt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=r(),xn===null)throw Error(t(349));(Us&30)!==0||qm(f,r,l)}m.memoizedState=l;var v={value:l,getSnapshot:r};return m.queue=v,e_(Km.bind(null,f,v,n),[n]),f.flags|=2048,Go(9,$m.bind(null,f,v,l,r),void 0,null),l},useId:function(){var n=ji(),r=xn.identifierPrefix;if(Yt){var l=gr,f=_r;l=(f&~(1<<32-Te(f)-1)).toString(32)+l,r=":"+r+"R"+l,l=Vo++,0<l&&(r+="H"+l.toString(32)),r+=":"}else l=uS++,r=":"+r+"r"+l.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},pS={readContext:Ei,useCallback:s_,useContext:Ei,useEffect:Pf,useImperativeHandle:r_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:a_,useReducer:Cf,useRef:Jm,useState:function(){return Cf(Ho)},useDebugValue:Df,useDeferredValue:function(n){var r=Ti();return o_(r,pn.memoizedState,n)},useTransition:function(){var n=Cf(Ho)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Xm,useSyncExternalStore:Ym,useId:l_,unstable_isNewReconciler:!1},mS={readContext:Ei,useCallback:s_,useContext:Ei,useEffect:Pf,useImperativeHandle:r_,useInsertionEffect:t_,useLayoutEffect:n_,useMemo:a_,useReducer:bf,useRef:Jm,useState:function(){return bf(Ho)},useDebugValue:Df,useDeferredValue:function(n){var r=Ti();return pn===null?r.memoizedState=n:o_(r,pn.memoizedState,n)},useTransition:function(){var n=bf(Ho)[0],r=Ti().memoizedState;return[n,r]},useMutableSource:Xm,useSyncExternalStore:Ym,useId:l_,unstable_isNewReconciler:!1};function Oi(n,r){if(n&&n.defaultProps){r=se({},r),n=n.defaultProps;for(var l in n)r[l]===void 0&&(r[l]=n[l]);return r}return r}function Lf(n,r,l,f){r=n.memoizedState,l=l(f,r),l=l==null?r:se({},r,l),n.memoizedState=l,n.lanes===0&&(n.updateQueue.baseState=l)}var uu={isMounted:function(n){return(n=n._reactInternals)?Bn(n)===n:!1},enqueueSetState:function(n,r,l){n=n._reactInternals;var f=Vn(),m=es(n),v=xr(f,m);v.payload=r,l!=null&&(v.callback=l),r=Zr(n,v,m),r!==null&&(zi(r,n,m,f),tu(r,n,m))},enqueueReplaceState:function(n,r,l){n=n._reactInternals;var f=Vn(),m=es(n),v=xr(f,m);v.tag=1,v.payload=r,l!=null&&(v.callback=l),r=Zr(n,v,m),r!==null&&(zi(r,n,m,f),tu(r,n,m))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var l=Vn(),f=es(n),m=xr(l,f);m.tag=2,r!=null&&(m.callback=r),r=Zr(n,m,f),r!==null&&(zi(r,n,f,l),tu(r,n,f))}};function d_(n,r,l,f,m,v,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(f,v,A):r.prototype&&r.prototype.isPureReactComponent?!bo(l,f)||!bo(m,v):!0}function h_(n,r,l){var f=!1,m=qr,v=r.contextType;return typeof v=="object"&&v!==null?v=Ei(v):(m=qn(r)?Ps:Pn.current,f=r.contextTypes,v=(f=f!=null)?Sa(n,m):qr),r=new r(l,v),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=uu,n.stateNode=r,r._reactInternals=n,f&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=m,n.__reactInternalMemoizedMaskedChildContext=v),r}function p_(n,r,l,f){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(l,f),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(l,f),r.state!==n&&uu.enqueueReplaceState(r,r.state,null)}function Nf(n,r,l,f){var m=n.stateNode;m.props=l,m.state=n.memoizedState,m.refs={},xf(n);var v=r.contextType;typeof v=="object"&&v!==null?m.context=Ei(v):(v=qn(r)?Ps:Pn.current,m.context=Sa(n,v)),m.state=n.memoizedState,v=r.getDerivedStateFromProps,typeof v=="function"&&(Lf(n,r,v,l),m.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(r=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),r!==m.state&&uu.enqueueReplaceState(m,m.state,null),nu(n,l,m,f),m.state=n.memoizedState),typeof m.componentDidMount=="function"&&(n.flags|=4194308)}function Ca(n,r){try{var l="",f=r;do l+=Ue(f),f=f.return;while(f);var m=l}catch(v){m=`
Error generating stack: `+v.message+`
`+v.stack}return{value:n,source:r,stack:m,digest:null}}function If(n,r,l){return{value:n,source:null,stack:l??null,digest:r??null}}function Uf(n,r){try{console.error(r.value)}catch(l){setTimeout(function(){throw l})}}var _S=typeof WeakMap=="function"?WeakMap:Map;function m_(n,r,l){l=xr(-1,l),l.tag=3,l.payload={element:null};var f=r.value;return l.callback=function(){_u||(_u=!0,Zf=f),Uf(n,r)},l}function __(n,r,l){l=xr(-1,l),l.tag=3;var f=n.type.getDerivedStateFromError;if(typeof f=="function"){var m=r.value;l.payload=function(){return f(m)},l.callback=function(){Uf(n,r)}}var v=n.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(l.callback=function(){Uf(n,r),typeof f!="function"&&(Qr===null?Qr=new Set([this]):Qr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),l}function g_(n,r,l){var f=n.pingCache;if(f===null){f=n.pingCache=new _S;var m=new Set;f.set(r,m)}else m=f.get(r),m===void 0&&(m=new Set,f.set(r,m));m.has(l)||(m.add(l),n=PS.bind(null,n,r,l),r.then(n,n))}function v_(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function x_(n,r,l,f,m){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(r=xr(-1,1),r.tag=2,Zr(l,r,1))),l.lanes|=1),n):(n.flags|=65536,n.lanes=m,n)}var gS=R.ReactCurrentOwner,$n=!1;function zn(n,r,l,f){r.child=n===null?Bm(r,null,l,f):Ta(r,n.child,l,f)}function S_(n,r,l,f,m){l=l.render;var v=r.ref;return Aa(r,m),f=Af(n,r,l,f,v,m),l=Rf(),n!==null&&!$n?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,Sr(n,r,m)):(Yt&&l&&uf(r),r.flags|=1,zn(n,r,f,m),r.child)}function y_(n,r,l,f,m){if(n===null){var v=l.type;return typeof v=="function"&&!id(v)&&v.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(r.tag=15,r.type=v,M_(n,r,v,f,m)):(n=Mu(l.type,null,f,r,r.mode,m),n.ref=r.ref,n.return=r,r.child=n)}if(v=n.child,(n.lanes&m)===0){var A=v.memoizedProps;if(l=l.compare,l=l!==null?l:bo,l(A,f)&&n.ref===r.ref)return Sr(n,r,m)}return r.flags|=1,n=ns(v,f),n.ref=r.ref,n.return=r,r.child=n}function M_(n,r,l,f,m){if(n!==null){var v=n.memoizedProps;if(bo(v,f)&&n.ref===r.ref)if($n=!1,r.pendingProps=f=v,(n.lanes&m)!==0)(n.flags&131072)!==0&&($n=!0);else return r.lanes=n.lanes,Sr(n,r,m)}return Ff(n,r,l,f,m)}function E_(n,r,l){var f=r.pendingProps,m=f.children,v=n!==null?n.memoizedState:null;if(f.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},kt(Pa,ui),ui|=l;else{if((l&1073741824)===0)return n=v!==null?v.baseLanes|l:l,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,kt(Pa,ui),ui|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=v!==null?v.baseLanes:l,kt(Pa,ui),ui|=f}else v!==null?(f=v.baseLanes|l,r.memoizedState=null):f=l,kt(Pa,ui),ui|=f;return zn(n,r,m,l),r.child}function T_(n,r){var l=r.ref;(n===null&&l!==null||n!==null&&n.ref!==l)&&(r.flags|=512,r.flags|=2097152)}function Ff(n,r,l,f,m){var v=qn(l)?Ps:Pn.current;return v=Sa(r,v),Aa(r,m),l=Af(n,r,l,f,v,m),f=Rf(),n!==null&&!$n?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~m,Sr(n,r,m)):(Yt&&f&&uf(r),r.flags|=1,zn(n,r,l,m),r.child)}function w_(n,r,l,f,m){if(qn(l)){var v=!0;ql(r)}else v=!1;if(Aa(r,m),r.stateNode===null)fu(n,r),h_(r,l,f),Nf(r,l,f,m),f=!0;else if(n===null){var A=r.stateNode,O=r.memoizedProps;A.props=O;var z=A.context,ce=l.contextType;typeof ce=="object"&&ce!==null?ce=Ei(ce):(ce=qn(l)?Ps:Pn.current,ce=Sa(r,ce));var Se=l.getDerivedStateFromProps,ye=typeof Se=="function"||typeof A.getSnapshotBeforeUpdate=="function";ye||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==f||z!==ce)&&p_(r,A,f,ce),Kr=!1;var xe=r.memoizedState;A.state=xe,nu(r,f,A,m),z=r.memoizedState,O!==f||xe!==z||Yn.current||Kr?(typeof Se=="function"&&(Lf(r,l,Se,f),z=r.memoizedState),(O=Kr||d_(r,l,O,f,xe,z,ce))?(ye||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=f,r.memoizedState=z),A.props=f,A.state=z,A.context=ce,f=O):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),f=!1)}else{A=r.stateNode,Vm(n,r),O=r.memoizedProps,ce=r.type===r.elementType?O:Oi(r.type,O),A.props=ce,ye=r.pendingProps,xe=A.context,z=l.contextType,typeof z=="object"&&z!==null?z=Ei(z):(z=qn(l)?Ps:Pn.current,z=Sa(r,z));var Be=l.getDerivedStateFromProps;(Se=typeof Be=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==ye||xe!==z)&&p_(r,A,f,z),Kr=!1,xe=r.memoizedState,A.state=xe,nu(r,f,A,m);var Ge=r.memoizedState;O!==ye||xe!==Ge||Yn.current||Kr?(typeof Be=="function"&&(Lf(r,l,Be,f),Ge=r.memoizedState),(ce=Kr||d_(r,l,ce,f,xe,Ge,z)||!1)?(Se||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(f,Ge,z),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(f,Ge,z)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),r.memoizedProps=f,r.memoizedState=Ge),A.props=f,A.state=Ge,A.context=z,f=ce):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&xe===n.memoizedState||(r.flags|=1024),f=!1)}return Of(n,r,l,f,v,m)}function Of(n,r,l,f,m,v){T_(n,r);var A=(r.flags&128)!==0;if(!f&&!A)return m&&Pm(r,l,!1),Sr(n,r,v);f=r.stateNode,gS.current=r;var O=A&&typeof l.getDerivedStateFromError!="function"?null:f.render();return r.flags|=1,n!==null&&A?(r.child=Ta(r,n.child,null,v),r.child=Ta(r,null,O,v)):zn(n,r,O,v),r.memoizedState=f.state,m&&Pm(r,l,!0),r.child}function A_(n){var r=n.stateNode;r.pendingContext?Cm(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Cm(n,r.context,!1),Sf(n,r.containerInfo)}function R_(n,r,l,f,m){return Ea(),hf(m),r.flags|=256,zn(n,r,l,f),r.child}var kf={dehydrated:null,treeContext:null,retryLane:0};function Bf(n){return{baseLanes:n,cachePool:null,transitions:null}}function C_(n,r,l){var f=r.pendingProps,m=Zt.current,v=!1,A=(r.flags&128)!==0,O;if((O=A)||(O=n!==null&&n.memoizedState===null?!1:(m&2)!==0),O?(v=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(m|=1),kt(Zt,m&1),n===null)return df(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=f.children,n=f.fallback,v?(f=r.mode,v=r.child,A={mode:"hidden",children:A},(f&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=A):v=Eu(A,f,0,null),n=zs(n,f,l,null),v.return=r,n.return=r,v.sibling=n,r.child=v,r.child.memoizedState=Bf(l),r.memoizedState=kf,n):zf(r,A));if(m=n.memoizedState,m!==null&&(O=m.dehydrated,O!==null))return vS(n,r,A,f,O,m,l);if(v){v=f.fallback,A=r.mode,m=n.child,O=m.sibling;var z={mode:"hidden",children:f.children};return(A&1)===0&&r.child!==m?(f=r.child,f.childLanes=0,f.pendingProps=z,r.deletions=null):(f=ns(m,z),f.subtreeFlags=m.subtreeFlags&14680064),O!==null?v=ns(O,v):(v=zs(v,A,l,null),v.flags|=2),v.return=r,f.return=r,f.sibling=v,r.child=f,f=v,v=r.child,A=n.child.memoizedState,A=A===null?Bf(l):{baseLanes:A.baseLanes|l,cachePool:null,transitions:A.transitions},v.memoizedState=A,v.childLanes=n.childLanes&~l,r.memoizedState=kf,f}return v=n.child,n=v.sibling,f=ns(v,{mode:"visible",children:f.children}),(r.mode&1)===0&&(f.lanes=l),f.return=r,f.sibling=null,n!==null&&(l=r.deletions,l===null?(r.deletions=[n],r.flags|=16):l.push(n)),r.child=f,r.memoizedState=null,f}function zf(n,r){return r=Eu({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function cu(n,r,l,f){return f!==null&&hf(f),Ta(r,n.child,null,l),n=zf(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function vS(n,r,l,f,m,v,A){if(l)return r.flags&256?(r.flags&=-257,f=If(Error(t(422))),cu(n,r,A,f)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(v=f.fallback,m=r.mode,f=Eu({mode:"visible",children:f.children},m,0,null),v=zs(v,m,A,null),v.flags|=2,f.return=r,v.return=r,f.sibling=v,r.child=f,(r.mode&1)!==0&&Ta(r,n.child,null,A),r.child.memoizedState=Bf(A),r.memoizedState=kf,v);if((r.mode&1)===0)return cu(n,r,A,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var O=f.dgst;return f=O,v=Error(t(419)),f=If(v,f,void 0),cu(n,r,A,f)}if(O=(A&n.childLanes)!==0,$n||O){if(f=xn,f!==null){switch(A&-A){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|A))!==0?0:m,m!==0&&m!==v.retryLane&&(v.retryLane=m,vr(n,m),zi(f,n,m,-1))}return nd(),f=If(Error(t(421))),cu(n,r,A,f)}return m.data==="$?"?(r.flags|=128,r.child=n.child,r=DS.bind(null,n),m._reactRetry=r,null):(n=v.treeContext,li=Xr(m.nextSibling),oi=r,Yt=!0,Fi=null,n!==null&&(yi[Mi++]=_r,yi[Mi++]=gr,yi[Mi++]=Ds,_r=n.id,gr=n.overflow,Ds=r),r=zf(r,f.children),r.flags|=4096,r)}function b_(n,r,l){n.lanes|=r;var f=n.alternate;f!==null&&(f.lanes|=r),gf(n.return,r,l)}function Vf(n,r,l,f,m){var v=n.memoizedState;v===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(v.isBackwards=r,v.rendering=null,v.renderingStartTime=0,v.last=f,v.tail=l,v.tailMode=m)}function P_(n,r,l){var f=r.pendingProps,m=f.revealOrder,v=f.tail;if(zn(n,r,f.children,l),f=Zt.current,(f&2)!==0)f=f&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&b_(n,l,r);else if(n.tag===19)b_(n,l,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}f&=1}if(kt(Zt,f),(r.mode&1)===0)r.memoizedState=null;else switch(m){case"forwards":for(l=r.child,m=null;l!==null;)n=l.alternate,n!==null&&iu(n)===null&&(m=l),l=l.sibling;l=m,l===null?(m=r.child,r.child=null):(m=l.sibling,l.sibling=null),Vf(r,!1,m,l,v);break;case"backwards":for(l=null,m=r.child,r.child=null;m!==null;){if(n=m.alternate,n!==null&&iu(n)===null){r.child=m;break}n=m.sibling,m.sibling=l,l=m,m=n}Vf(r,!0,l,null,v);break;case"together":Vf(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function fu(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,l){if(n!==null&&(r.dependencies=n.dependencies),Fs|=r.lanes,(l&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,l=ns(n,n.pendingProps),r.child=l,l.return=r;n.sibling!==null;)n=n.sibling,l=l.sibling=ns(n,n.pendingProps),l.return=r;l.sibling=null}return r.child}function xS(n,r,l){switch(r.tag){case 3:A_(r),Ea();break;case 5:Wm(r);break;case 1:qn(r.type)&&ql(r);break;case 4:Sf(r,r.stateNode.containerInfo);break;case 10:var f=r.type._context,m=r.memoizedProps.value;kt(Jl,f._currentValue),f._currentValue=m;break;case 13:if(f=r.memoizedState,f!==null)return f.dehydrated!==null?(kt(Zt,Zt.current&1),r.flags|=128,null):(l&r.child.childLanes)!==0?C_(n,r,l):(kt(Zt,Zt.current&1),n=Sr(n,r,l),n!==null?n.sibling:null);kt(Zt,Zt.current&1);break;case 19:if(f=(l&r.childLanes)!==0,(n.flags&128)!==0){if(f)return P_(n,r,l);r.flags|=128}if(m=r.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),kt(Zt,Zt.current),f)break;return null;case 22:case 23:return r.lanes=0,E_(n,r,l)}return Sr(n,r,l)}var D_,Hf,L_,N_;D_=function(n,r){for(var l=r.child;l!==null;){if(l.tag===5||l.tag===6)n.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===r)break;for(;l.sibling===null;){if(l.return===null||l.return===r)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Hf=function(){},L_=function(n,r,l,f){var m=n.memoizedProps;if(m!==f){n=r.stateNode,Is(Zi.current);var v=null;switch(l){case"input":m=At(n,m),f=At(n,f),v=[];break;case"select":m=se({},m,{value:void 0}),f=se({},f,{value:void 0}),v=[];break;case"textarea":m=Wt(n,m),f=Wt(n,f),v=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(n.onclick=Wl)}qe(l,f);var A;l=null;for(ce in m)if(!f.hasOwnProperty(ce)&&m.hasOwnProperty(ce)&&m[ce]!=null)if(ce==="style"){var O=m[ce];for(A in O)O.hasOwnProperty(A)&&(l||(l={}),l[A]="")}else ce!=="dangerouslySetInnerHTML"&&ce!=="children"&&ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&ce!=="autoFocus"&&(s.hasOwnProperty(ce)?v||(v=[]):(v=v||[]).push(ce,null));for(ce in f){var z=f[ce];if(O=m!=null?m[ce]:void 0,f.hasOwnProperty(ce)&&z!==O&&(z!=null||O!=null))if(ce==="style")if(O){for(A in O)!O.hasOwnProperty(A)||z&&z.hasOwnProperty(A)||(l||(l={}),l[A]="");for(A in z)z.hasOwnProperty(A)&&O[A]!==z[A]&&(l||(l={}),l[A]=z[A])}else l||(v||(v=[]),v.push(ce,l)),l=z;else ce==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,O=O?O.__html:void 0,z!=null&&O!==z&&(v=v||[]).push(ce,z)):ce==="children"?typeof z!="string"&&typeof z!="number"||(v=v||[]).push(ce,""+z):ce!=="suppressContentEditableWarning"&&ce!=="suppressHydrationWarning"&&(s.hasOwnProperty(ce)?(z!=null&&ce==="onScroll"&&zt("scroll",n),v||O===z||(v=[])):(v=v||[]).push(ce,z))}l&&(v=v||[]).push("style",l);var ce=v;(r.updateQueue=ce)&&(r.flags|=4)}},N_=function(n,r,l,f){l!==f&&(r.flags|=4)};function Wo(n,r){if(!Yt)switch(n.tailMode){case"hidden":r=n.tail;for(var l=null;r!==null;)r.alternate!==null&&(l=r),r=r.sibling;l===null?n.tail=null:l.sibling=null;break;case"collapsed":l=n.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:f.sibling=null}}function Ln(n){var r=n.alternate!==null&&n.alternate.child===n.child,l=0,f=0;if(r)for(var m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=n,m=m.sibling;else for(m=n.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=n,m=m.sibling;return n.subtreeFlags|=f,n.childLanes=l,r}function SS(n,r,l){var f=r.pendingProps;switch(cf(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(r),null;case 1:return qn(r.type)&&Yl(),Ln(r),null;case 3:return f=r.stateNode,Ra(),Vt(Yn),Vt(Pn),Ef(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(n===null||n.child===null)&&(jl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Fi!==null&&(Jf(Fi),Fi=null))),Hf(n,r),Ln(r),null;case 5:yf(r);var m=Is(Bo.current);if(l=r.type,n!==null&&r.stateNode!=null)L_(n,r,l,f,m),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!f){if(r.stateNode===null)throw Error(t(166));return Ln(r),null}if(n=Is(Zi.current),jl(r)){f=r.stateNode,l=r.type;var v=r.memoizedProps;switch(f[Ki]=r,f[Io]=v,n=(r.mode&1)!==0,l){case"dialog":zt("cancel",f),zt("close",f);break;case"iframe":case"object":case"embed":zt("load",f);break;case"video":case"audio":for(m=0;m<Do.length;m++)zt(Do[m],f);break;case"source":zt("error",f);break;case"img":case"image":case"link":zt("error",f),zt("load",f);break;case"details":zt("toggle",f);break;case"input":xt(f,v),zt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!v.multiple},zt("invalid",f);break;case"textarea":q(f,v),zt("invalid",f)}qe(l,v),m=null;for(var A in v)if(v.hasOwnProperty(A)){var O=v[A];A==="children"?typeof O=="string"?f.textContent!==O&&(v.suppressHydrationWarning!==!0&&Gl(f.textContent,O,n),m=["children",O]):typeof O=="number"&&f.textContent!==""+O&&(v.suppressHydrationWarning!==!0&&Gl(f.textContent,O,n),m=["children",""+O]):s.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&zt("scroll",f)}switch(l){case"input":Je(f),tn(f,v,!0);break;case"textarea":Je(f),Tt(f);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(f.onclick=Wl)}f=m,r.updateQueue=f,f!==null&&(r.flags|=4)}else{A=m.nodeType===9?m:m.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=U(l)),n==="http://www.w3.org/1999/xhtml"?l==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof f.is=="string"?n=A.createElement(l,{is:f.is}):(n=A.createElement(l),l==="select"&&(A=n,f.multiple?A.multiple=!0:f.size&&(A.size=f.size))):n=A.createElementNS(n,l),n[Ki]=r,n[Io]=f,D_(n,r,!1,!1),r.stateNode=n;e:{switch(A=De(l,f),l){case"dialog":zt("cancel",n),zt("close",n),m=f;break;case"iframe":case"object":case"embed":zt("load",n),m=f;break;case"video":case"audio":for(m=0;m<Do.length;m++)zt(Do[m],n);m=f;break;case"source":zt("error",n),m=f;break;case"img":case"image":case"link":zt("error",n),zt("load",n),m=f;break;case"details":zt("toggle",n),m=f;break;case"input":xt(n,f),m=At(n,f),zt("invalid",n);break;case"option":m=f;break;case"select":n._wrapperState={wasMultiple:!!f.multiple},m=se({},f,{value:void 0}),zt("invalid",n);break;case"textarea":q(n,f),m=Wt(n,f),zt("invalid",n);break;default:m=f}qe(l,m),O=m;for(v in O)if(O.hasOwnProperty(v)){var z=O[v];v==="style"?_e(n,z):v==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&ie(n,z)):v==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&de(n,z):typeof z=="number"&&de(n,""+z):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(s.hasOwnProperty(v)?z!=null&&v==="onScroll"&&zt("scroll",n):z!=null&&N(n,v,z,A))}switch(l){case"input":Je(n),tn(n,f,!1);break;case"textarea":Je(n),Tt(n);break;case"option":f.value!=null&&n.setAttribute("value",""+me(f.value));break;case"select":n.multiple=!!f.multiple,v=f.value,v!=null?Pt(n,!!f.multiple,v,!1):f.defaultValue!=null&&Pt(n,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(n.onclick=Wl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ln(r),null;case 6:if(n&&r.stateNode!=null)N_(n,r,n.memoizedProps,f);else{if(typeof f!="string"&&r.stateNode===null)throw Error(t(166));if(l=Is(Bo.current),Is(Zi.current),jl(r)){if(f=r.stateNode,l=r.memoizedProps,f[Ki]=r,(v=f.nodeValue!==l)&&(n=oi,n!==null))switch(n.tag){case 3:Gl(f.nodeValue,l,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Gl(f.nodeValue,l,(n.mode&1)!==0)}v&&(r.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Ki]=r,r.stateNode=f}return Ln(r),null;case 13:if(Vt(Zt),f=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Yt&&li!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Fm(),Ea(),r.flags|=98560,v=!1;else if(v=jl(r),f!==null&&f.dehydrated!==null){if(n===null){if(!v)throw Error(t(318));if(v=r.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(t(317));v[Ki]=r}else Ea(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ln(r),v=!1}else Fi!==null&&(Jf(Fi),Fi=null),v=!0;if(!v)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=l,r):(f=f!==null,f!==(n!==null&&n.memoizedState!==null)&&f&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Zt.current&1)!==0?mn===0&&(mn=3):nd())),r.updateQueue!==null&&(r.flags|=4),Ln(r),null);case 4:return Ra(),Hf(n,r),n===null&&Lo(r.stateNode.containerInfo),Ln(r),null;case 10:return _f(r.type._context),Ln(r),null;case 17:return qn(r.type)&&Yl(),Ln(r),null;case 19:if(Vt(Zt),v=r.memoizedState,v===null)return Ln(r),null;if(f=(r.flags&128)!==0,A=v.rendering,A===null)if(f)Wo(v,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=iu(n),A!==null){for(r.flags|=128,Wo(v,!1),f=A.updateQueue,f!==null&&(r.updateQueue=f,r.flags|=4),r.subtreeFlags=0,f=l,l=r.child;l!==null;)v=l,n=f,v.flags&=14680066,A=v.alternate,A===null?(v.childLanes=0,v.lanes=n,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=A.childLanes,v.lanes=A.lanes,v.child=A.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=A.memoizedProps,v.memoizedState=A.memoizedState,v.updateQueue=A.updateQueue,v.type=A.type,n=A.dependencies,v.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),l=l.sibling;return kt(Zt,Zt.current&1|2),r.child}n=n.sibling}v.tail!==null&&Kt()>Da&&(r.flags|=128,f=!0,Wo(v,!1),r.lanes=4194304)}else{if(!f)if(n=iu(A),n!==null){if(r.flags|=128,f=!0,l=n.updateQueue,l!==null&&(r.updateQueue=l,r.flags|=4),Wo(v,!0),v.tail===null&&v.tailMode==="hidden"&&!A.alternate&&!Yt)return Ln(r),null}else 2*Kt()-v.renderingStartTime>Da&&l!==1073741824&&(r.flags|=128,f=!0,Wo(v,!1),r.lanes=4194304);v.isBackwards?(A.sibling=r.child,r.child=A):(l=v.last,l!==null?l.sibling=A:r.child=A,v.last=A)}return v.tail!==null?(r=v.tail,v.rendering=r,v.tail=r.sibling,v.renderingStartTime=Kt(),r.sibling=null,l=Zt.current,kt(Zt,f?l&1|2:l&1),r):(Ln(r),null);case 22:case 23:return td(),f=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==f&&(r.flags|=8192),f&&(r.mode&1)!==0?(ui&1073741824)!==0&&(Ln(r),r.subtreeFlags&6&&(r.flags|=8192)):Ln(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function yS(n,r){switch(cf(r),r.tag){case 1:return qn(r.type)&&Yl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Ra(),Vt(Yn),Vt(Pn),Ef(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return yf(r),null;case 13:if(Vt(Zt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ea()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Vt(Zt),null;case 4:return Ra(),null;case 10:return _f(r.type._context),null;case 22:case 23:return td(),null;case 24:return null;default:return null}}var du=!1,Nn=!1,MS=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function ba(n,r){var l=n.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){rn(n,r,f)}else l.current=null}function Gf(n,r,l){try{l()}catch(f){rn(n,r,f)}}var I_=!1;function ES(n,r){if(ef=Ll,n=dm(),Yc(n)){if("selectionStart"in n)var l={start:n.selectionStart,end:n.selectionEnd};else e:{l=(l=n.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,v=f.focusNode;f=f.focusOffset;try{l.nodeType,v.nodeType}catch{l=null;break e}var A=0,O=-1,z=-1,ce=0,Se=0,ye=n,xe=null;t:for(;;){for(var Be;ye!==l||m!==0&&ye.nodeType!==3||(O=A+m),ye!==v||f!==0&&ye.nodeType!==3||(z=A+f),ye.nodeType===3&&(A+=ye.nodeValue.length),(Be=ye.firstChild)!==null;)xe=ye,ye=Be;for(;;){if(ye===n)break t;if(xe===l&&++ce===m&&(O=A),xe===v&&++Se===f&&(z=A),(Be=ye.nextSibling)!==null)break;ye=xe,xe=ye.parentNode}ye=Be}l=O===-1||z===-1?null:{start:O,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(tf={focusedElem:n,selectionRange:l},Ll=!1,Ve=r;Ve!==null;)if(r=Ve,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ve=n;else for(;Ve!==null;){r=Ve;try{var Ge=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Ye=Ge.memoizedProps,on=Ge.memoizedState,J=r.stateNode,X=J.getSnapshotBeforeUpdate(r.elementType===r.type?Ye:Oi(r.type,Ye),on);J.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ne=r.stateNode.containerInfo;ne.nodeType===1?ne.textContent="":ne.nodeType===9&&ne.documentElement&&ne.removeChild(ne.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ee){rn(r,r.return,Ee)}if(n=r.sibling,n!==null){n.return=r.return,Ve=n;break}Ve=r.return}return Ge=I_,I_=!1,Ge}function Xo(n,r,l){var f=r.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&n)===n){var v=m.destroy;m.destroy=void 0,v!==void 0&&Gf(r,l,v)}m=m.next}while(m!==f)}}function hu(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var l=r=r.next;do{if((l.tag&n)===n){var f=l.create;l.destroy=f()}l=l.next}while(l!==r)}}function Wf(n){var r=n.ref;if(r!==null){var l=n.stateNode;switch(n.tag){case 5:n=l;break;default:n=l}typeof r=="function"?r(n):r.current=n}}function U_(n){var r=n.alternate;r!==null&&(n.alternate=null,U_(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ki],delete r[Io],delete r[af],delete r[sS],delete r[aS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function F_(n){return n.tag===5||n.tag===3||n.tag===4}function O_(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||F_(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Xf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.nodeType===8?l.parentNode.insertBefore(n,r):l.insertBefore(n,r):(l.nodeType===8?(r=l.parentNode,r.insertBefore(n,l)):(r=l,r.appendChild(n)),l=l._reactRootContainer,l!=null||r.onclick!==null||(r.onclick=Wl));else if(f!==4&&(n=n.child,n!==null))for(Xf(n,r,l),n=n.sibling;n!==null;)Xf(n,r,l),n=n.sibling}function Yf(n,r,l){var f=n.tag;if(f===5||f===6)n=n.stateNode,r?l.insertBefore(n,r):l.appendChild(n);else if(f!==4&&(n=n.child,n!==null))for(Yf(n,r,l),n=n.sibling;n!==null;)Yf(n,r,l),n=n.sibling}var wn=null,ki=!1;function jr(n,r,l){for(l=l.child;l!==null;)k_(n,r,l),l=l.sibling}function k_(n,r,l){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(ee,l)}catch{}switch(l.tag){case 5:Nn||ba(l,r);case 6:var f=wn,m=ki;wn=null,jr(n,r,l),wn=f,ki=m,wn!==null&&(ki?(n=wn,l=l.stateNode,n.nodeType===8?n.parentNode.removeChild(l):n.removeChild(l)):wn.removeChild(l.stateNode));break;case 18:wn!==null&&(ki?(n=wn,l=l.stateNode,n.nodeType===8?sf(n.parentNode,l):n.nodeType===1&&sf(n,l),Eo(n)):sf(wn,l.stateNode));break;case 4:f=wn,m=ki,wn=l.stateNode.containerInfo,ki=!0,jr(n,r,l),wn=f,ki=m;break;case 0:case 11:case 14:case 15:if(!Nn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var v=m,A=v.destroy;v=v.tag,A!==void 0&&((v&2)!==0||(v&4)!==0)&&Gf(l,r,A),m=m.next}while(m!==f)}jr(n,r,l);break;case 1:if(!Nn&&(ba(l,r),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(O){rn(l,r,O)}jr(n,r,l);break;case 21:jr(n,r,l);break;case 22:l.mode&1?(Nn=(f=Nn)||l.memoizedState!==null,jr(n,r,l),Nn=f):jr(n,r,l);break;default:jr(n,r,l)}}function B_(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var l=n.stateNode;l===null&&(l=n.stateNode=new MS),r.forEach(function(f){var m=LS.bind(null,n,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Bi(n,r){var l=r.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var v=n,A=r,O=A;e:for(;O!==null;){switch(O.tag){case 5:wn=O.stateNode,ki=!1;break e;case 3:wn=O.stateNode.containerInfo,ki=!0;break e;case 4:wn=O.stateNode.containerInfo,ki=!0;break e}O=O.return}if(wn===null)throw Error(t(160));k_(v,A,m),wn=null,ki=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(ce){rn(m,r,ce)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)z_(r,n),r=r.sibling}function z_(n,r){var l=n.alternate,f=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Bi(r,n),Qi(n),f&4){try{Xo(3,n,n.return),hu(3,n)}catch(Ye){rn(n,n.return,Ye)}try{Xo(5,n,n.return)}catch(Ye){rn(n,n.return,Ye)}}break;case 1:Bi(r,n),Qi(n),f&512&&l!==null&&ba(l,l.return);break;case 5:if(Bi(r,n),Qi(n),f&512&&l!==null&&ba(l,l.return),n.flags&32){var m=n.stateNode;try{de(m,"")}catch(Ye){rn(n,n.return,Ye)}}if(f&4&&(m=n.stateNode,m!=null)){var v=n.memoizedProps,A=l!==null?l.memoizedProps:v,O=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{O==="input"&&v.type==="radio"&&v.name!=null&&mt(m,v),De(O,A);var ce=De(O,v);for(A=0;A<z.length;A+=2){var Se=z[A],ye=z[A+1];Se==="style"?_e(m,ye):Se==="dangerouslySetInnerHTML"?ie(m,ye):Se==="children"?de(m,ye):N(m,Se,ye,ce)}switch(O){case"input":Gt(m,v);break;case"textarea":En(m,v);break;case"select":var xe=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!v.multiple;var Be=v.value;Be!=null?Pt(m,!!v.multiple,Be,!1):xe!==!!v.multiple&&(v.defaultValue!=null?Pt(m,!!v.multiple,v.defaultValue,!0):Pt(m,!!v.multiple,v.multiple?[]:"",!1))}m[Io]=v}catch(Ye){rn(n,n.return,Ye)}}break;case 6:if(Bi(r,n),Qi(n),f&4){if(n.stateNode===null)throw Error(t(162));m=n.stateNode,v=n.memoizedProps;try{m.nodeValue=v}catch(Ye){rn(n,n.return,Ye)}}break;case 3:if(Bi(r,n),Qi(n),f&4&&l!==null&&l.memoizedState.isDehydrated)try{Eo(r.containerInfo)}catch(Ye){rn(n,n.return,Ye)}break;case 4:Bi(r,n),Qi(n);break;case 13:Bi(r,n),Qi(n),m=n.child,m.flags&8192&&(v=m.memoizedState!==null,m.stateNode.isHidden=v,!v||m.alternate!==null&&m.alternate.memoizedState!==null||(Kf=Kt())),f&4&&B_(n);break;case 22:if(Se=l!==null&&l.memoizedState!==null,n.mode&1?(Nn=(ce=Nn)||Se,Bi(r,n),Nn=ce):Bi(r,n),Qi(n),f&8192){if(ce=n.memoizedState!==null,(n.stateNode.isHidden=ce)&&!Se&&(n.mode&1)!==0)for(Ve=n,Se=n.child;Se!==null;){for(ye=Ve=Se;Ve!==null;){switch(xe=Ve,Be=xe.child,xe.tag){case 0:case 11:case 14:case 15:Xo(4,xe,xe.return);break;case 1:ba(xe,xe.return);var Ge=xe.stateNode;if(typeof Ge.componentWillUnmount=="function"){f=xe,l=xe.return;try{r=f,Ge.props=r.memoizedProps,Ge.state=r.memoizedState,Ge.componentWillUnmount()}catch(Ye){rn(f,l,Ye)}}break;case 5:ba(xe,xe.return);break;case 22:if(xe.memoizedState!==null){G_(ye);continue}}Be!==null?(Be.return=xe,Ve=Be):G_(ye)}Se=Se.sibling}e:for(Se=null,ye=n;;){if(ye.tag===5){if(Se===null){Se=ye;try{m=ye.stateNode,ce?(v=m.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(O=ye.stateNode,z=ye.memoizedProps.style,A=z!=null&&z.hasOwnProperty("display")?z.display:null,O.style.display=he("display",A))}catch(Ye){rn(n,n.return,Ye)}}}else if(ye.tag===6){if(Se===null)try{ye.stateNode.nodeValue=ce?"":ye.memoizedProps}catch(Ye){rn(n,n.return,Ye)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;Se===ye&&(Se=null),ye=ye.return}Se===ye&&(Se=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Bi(r,n),Qi(n),f&4&&B_(n);break;case 21:break;default:Bi(r,n),Qi(n)}}function Qi(n){var r=n.flags;if(r&2){try{e:{for(var l=n.return;l!==null;){if(F_(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(de(m,""),f.flags&=-33);var v=O_(n);Yf(n,v,m);break;case 3:case 4:var A=f.stateNode.containerInfo,O=O_(n);Xf(n,O,A);break;default:throw Error(t(161))}}catch(z){rn(n,n.return,z)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function TS(n,r,l){Ve=n,V_(n)}function V_(n,r,l){for(var f=(n.mode&1)!==0;Ve!==null;){var m=Ve,v=m.child;if(m.tag===22&&f){var A=m.memoizedState!==null||du;if(!A){var O=m.alternate,z=O!==null&&O.memoizedState!==null||Nn;O=du;var ce=Nn;if(du=A,(Nn=z)&&!ce)for(Ve=m;Ve!==null;)A=Ve,z=A.child,A.tag===22&&A.memoizedState!==null?W_(m):z!==null?(z.return=A,Ve=z):W_(m);for(;v!==null;)Ve=v,V_(v),v=v.sibling;Ve=m,du=O,Nn=ce}H_(n)}else(m.subtreeFlags&8772)!==0&&v!==null?(v.return=m,Ve=v):H_(n)}}function H_(n){for(;Ve!==null;){var r=Ve;if((r.flags&8772)!==0){var l=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Nn||hu(5,r);break;case 1:var f=r.stateNode;if(r.flags&4&&!Nn)if(l===null)f.componentDidMount();else{var m=r.elementType===r.type?l.memoizedProps:Oi(r.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var v=r.updateQueue;v!==null&&Gm(r,v,f);break;case 3:var A=r.updateQueue;if(A!==null){if(l=null,r.child!==null)switch(r.child.tag){case 5:l=r.child.stateNode;break;case 1:l=r.child.stateNode}Gm(r,A,l)}break;case 5:var O=r.stateNode;if(l===null&&r.flags&4){l=O;var z=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var ce=r.alternate;if(ce!==null){var Se=ce.memoizedState;if(Se!==null){var ye=Se.dehydrated;ye!==null&&Eo(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Nn||r.flags&512&&Wf(r)}catch(xe){rn(r,r.return,xe)}}if(r===n){Ve=null;break}if(l=r.sibling,l!==null){l.return=r.return,Ve=l;break}Ve=r.return}}function G_(n){for(;Ve!==null;){var r=Ve;if(r===n){Ve=null;break}var l=r.sibling;if(l!==null){l.return=r.return,Ve=l;break}Ve=r.return}}function W_(n){for(;Ve!==null;){var r=Ve;try{switch(r.tag){case 0:case 11:case 15:var l=r.return;try{hu(4,r)}catch(z){rn(r,l,z)}break;case 1:var f=r.stateNode;if(typeof f.componentDidMount=="function"){var m=r.return;try{f.componentDidMount()}catch(z){rn(r,m,z)}}var v=r.return;try{Wf(r)}catch(z){rn(r,v,z)}break;case 5:var A=r.return;try{Wf(r)}catch(z){rn(r,A,z)}}}catch(z){rn(r,r.return,z)}if(r===n){Ve=null;break}var O=r.sibling;if(O!==null){O.return=r.return,Ve=O;break}Ve=r.return}}var wS=Math.ceil,pu=R.ReactCurrentDispatcher,qf=R.ReactCurrentOwner,wi=R.ReactCurrentBatchConfig,Mt=0,xn=null,cn=null,An=0,ui=0,Pa=Yr(0),mn=0,Yo=null,Fs=0,mu=0,$f=0,qo=null,Kn=null,Kf=0,Da=1/0,yr=null,_u=!1,Zf=null,Qr=null,gu=!1,Jr=null,vu=0,$o=0,jf=null,xu=-1,Su=0;function Vn(){return(Mt&6)!==0?Kt():xu!==-1?xu:xu=Kt()}function es(n){return(n.mode&1)===0?1:(Mt&2)!==0&&An!==0?An&-An:lS.transition!==null?(Su===0&&(Su=ke()),Su):(n=ht,n!==0||(n=window.event,n=n===void 0?16:Yp(n.type)),n)}function zi(n,r,l,f){if(50<$o)throw $o=0,jf=null,Error(t(185));ft(n,l,f),((Mt&2)===0||n!==xn)&&(n===xn&&((Mt&2)===0&&(mu|=l),mn===4&&ts(n,An)),Zn(n,f),l===1&&Mt===0&&(r.mode&1)===0&&(Da=Kt()+500,$l&&$r()))}function Zn(n,r){var l=n.callbackNode;Dt(n,r);var f=Ot(n,n===xn?An:0);if(f===0)l!==null&&go(l),n.callbackNode=null,n.callbackPriority=0;else if(r=f&-f,n.callbackPriority!==r){if(l!=null&&go(l),r===1)n.tag===0?oS(Y_.bind(null,n)):Dm(Y_.bind(null,n)),iS(function(){(Mt&6)===0&&$r()}),l=null;else{switch(hr(f)){case 1:l=vo;break;case 4:l=C;break;case 16:l=$;break;case 536870912:l=te;break;default:l=$}l=eg(l,X_.bind(null,n))}n.callbackPriority=r,n.callbackNode=l}}function X_(n,r){if(xu=-1,Su=0,(Mt&6)!==0)throw Error(t(327));var l=n.callbackNode;if(La()&&n.callbackNode!==l)return null;var f=Ot(n,n===xn?An:0);if(f===0)return null;if((f&30)!==0||(f&n.expiredLanes)!==0||r)r=yu(n,f);else{r=f;var m=Mt;Mt|=2;var v=$_();(xn!==n||An!==r)&&(yr=null,Da=Kt()+500,ks(n,r));do try{CS();break}catch(O){q_(n,O)}while(!0);mf(),pu.current=v,Mt=m,cn!==null?r=0:(xn=null,An=0,r=mn)}if(r!==0){if(r===2&&(m=un(n),m!==0&&(f=m,r=Qf(n,m))),r===1)throw l=Yo,ks(n,0),ts(n,f),Zn(n,Kt()),l;if(r===6)ts(n,f);else{if(m=n.current.alternate,(f&30)===0&&!AS(m)&&(r=yu(n,f),r===2&&(v=un(n),v!==0&&(f=v,r=Qf(n,v))),r===1))throw l=Yo,ks(n,0),ts(n,f),Zn(n,Kt()),l;switch(n.finishedWork=m,n.finishedLanes=f,r){case 0:case 1:throw Error(t(345));case 2:Bs(n,Kn,yr);break;case 3:if(ts(n,f),(f&130023424)===f&&(r=Kf+500-Kt(),10<r)){if(Ot(n,0)!==0)break;if(m=n.suspendedLanes,(m&f)!==f){Vn(),n.pingedLanes|=n.suspendedLanes&m;break}n.timeoutHandle=rf(Bs.bind(null,n,Kn,yr),r);break}Bs(n,Kn,yr);break;case 4:if(ts(n,f),(f&4194240)===f)break;for(r=n.eventTimes,m=-1;0<f;){var A=31-Te(f);v=1<<A,A=r[A],A>m&&(m=A),f&=~v}if(f=m,f=Kt()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*wS(f/1960))-f,10<f){n.timeoutHandle=rf(Bs.bind(null,n,Kn,yr),f);break}Bs(n,Kn,yr);break;case 5:Bs(n,Kn,yr);break;default:throw Error(t(329))}}}return Zn(n,Kt()),n.callbackNode===l?X_.bind(null,n):null}function Qf(n,r){var l=qo;return n.current.memoizedState.isDehydrated&&(ks(n,r).flags|=256),n=yu(n,r),n!==2&&(r=Kn,Kn=l,r!==null&&Jf(r)),n}function Jf(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function AS(n){for(var r=n;;){if(r.flags&16384){var l=r.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],v=m.getSnapshot;m=m.value;try{if(!Ui(v(),m))return!1}catch{return!1}}}if(l=r.child,r.subtreeFlags&16384&&l!==null)l.return=r,r=l;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function ts(n,r){for(r&=~$f,r&=~mu,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var l=31-Te(r),f=1<<l;n[l]=-1,r&=~f}}function Y_(n){if((Mt&6)!==0)throw Error(t(327));La();var r=Ot(n,0);if((r&1)===0)return Zn(n,Kt()),null;var l=yu(n,r);if(n.tag!==0&&l===2){var f=un(n);f!==0&&(r=f,l=Qf(n,f))}if(l===1)throw l=Yo,ks(n,0),ts(n,r),Zn(n,Kt()),l;if(l===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Bs(n,Kn,yr),Zn(n,Kt()),null}function ed(n,r){var l=Mt;Mt|=1;try{return n(r)}finally{Mt=l,Mt===0&&(Da=Kt()+500,$l&&$r())}}function Os(n){Jr!==null&&Jr.tag===0&&(Mt&6)===0&&La();var r=Mt;Mt|=1;var l=wi.transition,f=ht;try{if(wi.transition=null,ht=1,n)return n()}finally{ht=f,wi.transition=l,Mt=r,(Mt&6)===0&&$r()}}function td(){ui=Pa.current,Vt(Pa)}function ks(n,r){n.finishedWork=null,n.finishedLanes=0;var l=n.timeoutHandle;if(l!==-1&&(n.timeoutHandle=-1,nS(l)),cn!==null)for(l=cn.return;l!==null;){var f=l;switch(cf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Yl();break;case 3:Ra(),Vt(Yn),Vt(Pn),Ef();break;case 5:yf(f);break;case 4:Ra();break;case 13:Vt(Zt);break;case 19:Vt(Zt);break;case 10:_f(f.type._context);break;case 22:case 23:td()}l=l.return}if(xn=n,cn=n=ns(n.current,null),An=ui=r,mn=0,Yo=null,$f=mu=Fs=0,Kn=qo=null,Ns!==null){for(r=0;r<Ns.length;r++)if(l=Ns[r],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,v=l.pending;if(v!==null){var A=v.next;v.next=m,f.next=A}l.pending=f}Ns=null}return n}function q_(n,r){do{var l=cn;try{if(mf(),ru.current=lu,su){for(var f=jt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}su=!1}if(Us=0,vn=pn=jt=null,zo=!1,Vo=0,qf.current=null,l===null||l.return===null){mn=1,Yo=r,cn=null;break}e:{var v=n,A=l.return,O=l,z=r;if(r=An,O.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var ce=z,Se=O,ye=Se.tag;if((Se.mode&1)===0&&(ye===0||ye===11||ye===15)){var xe=Se.alternate;xe?(Se.updateQueue=xe.updateQueue,Se.memoizedState=xe.memoizedState,Se.lanes=xe.lanes):(Se.updateQueue=null,Se.memoizedState=null)}var Be=v_(A);if(Be!==null){Be.flags&=-257,x_(Be,A,O,v,r),Be.mode&1&&g_(v,ce,r),r=Be,z=ce;var Ge=r.updateQueue;if(Ge===null){var Ye=new Set;Ye.add(z),r.updateQueue=Ye}else Ge.add(z);break e}else{if((r&1)===0){g_(v,ce,r),nd();break e}z=Error(t(426))}}else if(Yt&&O.mode&1){var on=v_(A);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),x_(on,A,O,v,r),hf(Ca(z,O));break e}}v=z=Ca(z,O),mn!==4&&(mn=2),qo===null?qo=[v]:qo.push(v),v=A;do{switch(v.tag){case 3:v.flags|=65536,r&=-r,v.lanes|=r;var J=m_(v,z,r);Hm(v,J);break e;case 1:O=z;var X=v.type,ne=v.stateNode;if((v.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ne!==null&&typeof ne.componentDidCatch=="function"&&(Qr===null||!Qr.has(ne)))){v.flags|=65536,r&=-r,v.lanes|=r;var Ee=__(v,O,r);Hm(v,Ee);break e}}v=v.return}while(v!==null)}Z_(l)}catch(Ke){r=Ke,cn===l&&l!==null&&(cn=l=l.return);continue}break}while(!0)}function $_(){var n=pu.current;return pu.current=lu,n===null?lu:n}function nd(){(mn===0||mn===3||mn===2)&&(mn=4),xn===null||(Fs&268435455)===0&&(mu&268435455)===0||ts(xn,An)}function yu(n,r){var l=Mt;Mt|=2;var f=$_();(xn!==n||An!==r)&&(yr=null,ks(n,r));do try{RS();break}catch(m){q_(n,m)}while(!0);if(mf(),Mt=l,pu.current=f,cn!==null)throw Error(t(261));return xn=null,An=0,mn}function RS(){for(;cn!==null;)K_(cn)}function CS(){for(;cn!==null&&!Pl();)K_(cn)}function K_(n){var r=J_(n.alternate,n,ui);n.memoizedProps=n.pendingProps,r===null?Z_(n):cn=r,qf.current=null}function Z_(n){var r=n;do{var l=r.alternate;if(n=r.return,(r.flags&32768)===0){if(l=SS(l,r,ui),l!==null){cn=l;return}}else{if(l=yS(l,r),l!==null){l.flags&=32767,cn=l;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,cn=null;return}}if(r=r.sibling,r!==null){cn=r;return}cn=r=n}while(r!==null);mn===0&&(mn=5)}function Bs(n,r,l){var f=ht,m=wi.transition;try{wi.transition=null,ht=1,bS(n,r,l,f)}finally{wi.transition=m,ht=f}return null}function bS(n,r,l,f){do La();while(Jr!==null);if((Mt&6)!==0)throw Error(t(327));l=n.finishedWork;var m=n.finishedLanes;if(l===null)return null;if(n.finishedWork=null,n.finishedLanes=0,l===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var v=l.lanes|l.childLanes;if(Wn(n,v),n===xn&&(cn=xn=null,An=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||gu||(gu=!0,eg($,function(){return La(),null})),v=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||v){v=wi.transition,wi.transition=null;var A=ht;ht=1;var O=Mt;Mt|=4,qf.current=null,ES(n,l),z_(l,n),Kx(tf),Ll=!!ef,tf=ef=null,n.current=l,TS(l),Nc(),Mt=O,ht=A,wi.transition=v}else n.current=l;if(gu&&(gu=!1,Jr=n,vu=m),v=n.pendingLanes,v===0&&(Qr=null),ze(l.stateNode),Zn(n,Kt()),r!==null)for(f=n.onRecoverableError,l=0;l<r.length;l++)m=r[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(_u)throw _u=!1,n=Zf,Zf=null,n;return(vu&1)!==0&&n.tag!==0&&La(),v=n.pendingLanes,(v&1)!==0?n===jf?$o++:($o=0,jf=n):$o=0,$r(),null}function La(){if(Jr!==null){var n=hr(vu),r=wi.transition,l=ht;try{if(wi.transition=null,ht=16>n?16:n,Jr===null)var f=!1;else{if(n=Jr,Jr=null,vu=0,(Mt&6)!==0)throw Error(t(331));var m=Mt;for(Mt|=4,Ve=n.current;Ve!==null;){var v=Ve,A=v.child;if((Ve.flags&16)!==0){var O=v.deletions;if(O!==null){for(var z=0;z<O.length;z++){var ce=O[z];for(Ve=ce;Ve!==null;){var Se=Ve;switch(Se.tag){case 0:case 11:case 15:Xo(8,Se,v)}var ye=Se.child;if(ye!==null)ye.return=Se,Ve=ye;else for(;Ve!==null;){Se=Ve;var xe=Se.sibling,Be=Se.return;if(U_(Se),Se===ce){Ve=null;break}if(xe!==null){xe.return=Be,Ve=xe;break}Ve=Be}}}var Ge=v.alternate;if(Ge!==null){var Ye=Ge.child;if(Ye!==null){Ge.child=null;do{var on=Ye.sibling;Ye.sibling=null,Ye=on}while(Ye!==null)}}Ve=v}}if((v.subtreeFlags&2064)!==0&&A!==null)A.return=v,Ve=A;else e:for(;Ve!==null;){if(v=Ve,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:Xo(9,v,v.return)}var J=v.sibling;if(J!==null){J.return=v.return,Ve=J;break e}Ve=v.return}}var X=n.current;for(Ve=X;Ve!==null;){A=Ve;var ne=A.child;if((A.subtreeFlags&2064)!==0&&ne!==null)ne.return=A,Ve=ne;else e:for(A=X;Ve!==null;){if(O=Ve,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:hu(9,O)}}catch(Ke){rn(O,O.return,Ke)}if(O===A){Ve=null;break e}var Ee=O.sibling;if(Ee!==null){Ee.return=O.return,Ve=Ee;break e}Ve=O.return}}if(Mt=m,$r(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(ee,n)}catch{}f=!0}return f}finally{ht=l,wi.transition=r}}return!1}function j_(n,r,l){r=Ca(l,r),r=m_(n,r,1),n=Zr(n,r,1),r=Vn(),n!==null&&(ft(n,1,r),Zn(n,r))}function rn(n,r,l){if(n.tag===3)j_(n,n,l);else for(;r!==null;){if(r.tag===3){j_(r,n,l);break}else if(r.tag===1){var f=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Qr===null||!Qr.has(f))){n=Ca(l,n),n=__(r,n,1),r=Zr(r,n,1),n=Vn(),r!==null&&(ft(r,1,n),Zn(r,n));break}}r=r.return}}function PS(n,r,l){var f=n.pingCache;f!==null&&f.delete(r),r=Vn(),n.pingedLanes|=n.suspendedLanes&l,xn===n&&(An&l)===l&&(mn===4||mn===3&&(An&130023424)===An&&500>Kt()-Kf?ks(n,0):$f|=l),Zn(n,r)}function Q_(n,r){r===0&&((n.mode&1)===0?r=1:(r=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var l=Vn();n=vr(n,r),n!==null&&(ft(n,r,l),Zn(n,l))}function DS(n){var r=n.memoizedState,l=0;r!==null&&(l=r.retryLane),Q_(n,l)}function LS(n,r){var l=0;switch(n.tag){case 13:var f=n.stateNode,m=n.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=n.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(r),Q_(n,l)}var J_;J_=function(n,r,l){if(n!==null)if(n.memoizedProps!==r.pendingProps||Yn.current)$n=!0;else{if((n.lanes&l)===0&&(r.flags&128)===0)return $n=!1,xS(n,r,l);$n=(n.flags&131072)!==0}else $n=!1,Yt&&(r.flags&1048576)!==0&&Lm(r,Zl,r.index);switch(r.lanes=0,r.tag){case 2:var f=r.type;fu(n,r),n=r.pendingProps;var m=Sa(r,Pn.current);Aa(r,l),m=Af(null,r,f,n,m,l);var v=Rf();return r.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,qn(f)?(v=!0,ql(r)):v=!1,r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,xf(r),m.updater=uu,r.stateNode=m,m._reactInternals=r,Nf(r,f,n,l),r=Of(null,r,f,!0,v,l)):(r.tag=0,Yt&&v&&uf(r),zn(null,r,m,l),r=r.child),r;case 16:f=r.elementType;e:{switch(fu(n,r),n=r.pendingProps,m=f._init,f=m(f._payload),r.type=f,m=r.tag=IS(f),n=Oi(f,n),m){case 0:r=Ff(null,r,f,n,l);break e;case 1:r=w_(null,r,f,n,l);break e;case 11:r=S_(null,r,f,n,l);break e;case 14:r=y_(null,r,f,Oi(f.type,n),l);break e}throw Error(t(306,f,""))}return r;case 0:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Oi(f,m),Ff(n,r,f,m,l);case 1:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Oi(f,m),w_(n,r,f,m,l);case 3:e:{if(A_(r),n===null)throw Error(t(387));f=r.pendingProps,v=r.memoizedState,m=v.element,Vm(n,r),nu(r,f,null,l);var A=r.memoizedState;if(f=A.element,v.isDehydrated)if(v={element:f,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=v,r.memoizedState=v,r.flags&256){m=Ca(Error(t(423)),r),r=R_(n,r,f,l,m);break e}else if(f!==m){m=Ca(Error(t(424)),r),r=R_(n,r,f,l,m);break e}else for(li=Xr(r.stateNode.containerInfo.firstChild),oi=r,Yt=!0,Fi=null,l=Bm(r,null,f,l),r.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ea(),f===m){r=Sr(n,r,l);break e}zn(n,r,f,l)}r=r.child}return r;case 5:return Wm(r),n===null&&df(r),f=r.type,m=r.pendingProps,v=n!==null?n.memoizedProps:null,A=m.children,nf(f,m)?A=null:v!==null&&nf(f,v)&&(r.flags|=32),T_(n,r),zn(n,r,A,l),r.child;case 6:return n===null&&df(r),null;case 13:return C_(n,r,l);case 4:return Sf(r,r.stateNode.containerInfo),f=r.pendingProps,n===null?r.child=Ta(r,null,f,l):zn(n,r,f,l),r.child;case 11:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Oi(f,m),S_(n,r,f,m,l);case 7:return zn(n,r,r.pendingProps,l),r.child;case 8:return zn(n,r,r.pendingProps.children,l),r.child;case 12:return zn(n,r,r.pendingProps.children,l),r.child;case 10:e:{if(f=r.type._context,m=r.pendingProps,v=r.memoizedProps,A=m.value,kt(Jl,f._currentValue),f._currentValue=A,v!==null)if(Ui(v.value,A)){if(v.children===m.children&&!Yn.current){r=Sr(n,r,l);break e}}else for(v=r.child,v!==null&&(v.return=r);v!==null;){var O=v.dependencies;if(O!==null){A=v.child;for(var z=O.firstContext;z!==null;){if(z.context===f){if(v.tag===1){z=xr(-1,l&-l),z.tag=2;var ce=v.updateQueue;if(ce!==null){ce=ce.shared;var Se=ce.pending;Se===null?z.next=z:(z.next=Se.next,Se.next=z),ce.pending=z}}v.lanes|=l,z=v.alternate,z!==null&&(z.lanes|=l),gf(v.return,l,r),O.lanes|=l;break}z=z.next}}else if(v.tag===10)A=v.type===r.type?null:v.child;else if(v.tag===18){if(A=v.return,A===null)throw Error(t(341));A.lanes|=l,O=A.alternate,O!==null&&(O.lanes|=l),gf(A,l,r),A=v.sibling}else A=v.child;if(A!==null)A.return=v;else for(A=v;A!==null;){if(A===r){A=null;break}if(v=A.sibling,v!==null){v.return=A.return,A=v;break}A=A.return}v=A}zn(n,r,m.children,l),r=r.child}return r;case 9:return m=r.type,f=r.pendingProps.children,Aa(r,l),m=Ei(m),f=f(m),r.flags|=1,zn(n,r,f,l),r.child;case 14:return f=r.type,m=Oi(f,r.pendingProps),m=Oi(f.type,m),y_(n,r,f,m,l);case 15:return M_(n,r,r.type,r.pendingProps,l);case 17:return f=r.type,m=r.pendingProps,m=r.elementType===f?m:Oi(f,m),fu(n,r),r.tag=1,qn(f)?(n=!0,ql(r)):n=!1,Aa(r,l),h_(r,f,m),Nf(r,f,m,l),Of(null,r,f,!0,n,l);case 19:return P_(n,r,l);case 22:return E_(n,r,l)}throw Error(t(156,r.tag))};function eg(n,r){return Rs(n,r)}function NS(n,r,l,f){this.tag=n,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ai(n,r,l,f){return new NS(n,r,l,f)}function id(n){return n=n.prototype,!(!n||!n.isReactComponent)}function IS(n){if(typeof n=="function")return id(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Y)return 11;if(n===W)return 14}return 2}function ns(n,r){var l=n.alternate;return l===null?(l=Ai(n.tag,r,n.key,n.mode),l.elementType=n.elementType,l.type=n.type,l.stateNode=n.stateNode,l.alternate=n,n.alternate=l):(l.pendingProps=r,l.type=n.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=n.flags&14680064,l.childLanes=n.childLanes,l.lanes=n.lanes,l.child=n.child,l.memoizedProps=n.memoizedProps,l.memoizedState=n.memoizedState,l.updateQueue=n.updateQueue,r=n.dependencies,l.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},l.sibling=n.sibling,l.index=n.index,l.ref=n.ref,l}function Mu(n,r,l,f,m,v){var A=2;if(f=n,typeof n=="function")id(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case I:return zs(l.children,m,v,r);case T:A=8,m|=8;break;case D:return n=Ai(12,l,r,m|2),n.elementType=D,n.lanes=v,n;case j:return n=Ai(13,l,r,m),n.elementType=j,n.lanes=v,n;case re:return n=Ai(19,l,r,m),n.elementType=re,n.lanes=v,n;case V:return Eu(l,m,v,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:A=10;break e;case B:A=9;break e;case Y:A=11;break e;case W:A=14;break e;case Q:A=16,f=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Ai(A,l,r,m),r.elementType=n,r.type=f,r.lanes=v,r}function zs(n,r,l,f){return n=Ai(7,n,f,r),n.lanes=l,n}function Eu(n,r,l,f){return n=Ai(22,n,f,r),n.elementType=V,n.lanes=l,n.stateNode={isHidden:!1},n}function rd(n,r,l){return n=Ai(6,n,null,r),n.lanes=l,n}function sd(n,r,l){return r=Ai(4,n.children!==null?n.children:[],n.key,r),r.lanes=l,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function US(n,r,l,f,m){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tn(0),this.expirationTimes=Tn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ad(n,r,l,f,m,v,A,O,z){return n=new US(n,r,l,O,z),r===1?(r=1,v===!0&&(r|=8)):r=0,v=Ai(3,null,null,r),n.current=v,v.stateNode=n,v.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},xf(v),n}function FS(n,r,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:L,key:f==null?null:""+f,children:n,containerInfo:r,implementation:l}}function tg(n){if(!n)return qr;n=n._reactInternals;e:{if(Bn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(qn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var l=n.type;if(qn(l))return bm(n,l,r)}return r}function ng(n,r,l,f,m,v,A,O,z){return n=ad(l,f,!0,n,m,v,A,O,z),n.context=tg(null),l=n.current,f=Vn(),m=es(l),v=xr(f,m),v.callback=r??null,Zr(l,v,m),n.current.lanes=m,ft(n,m,f),Zn(n,f),n}function Tu(n,r,l,f){var m=r.current,v=Vn(),A=es(m);return l=tg(l),r.context===null?r.context=l:r.pendingContext=l,r=xr(v,A),r.payload={element:n},f=f===void 0?null:f,f!==null&&(r.callback=f),n=Zr(m,r,A),n!==null&&(zi(n,m,A,v),tu(n,m,A)),A}function wu(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ig(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var l=n.retryLane;n.retryLane=l!==0&&l<r?l:r}}function od(n,r){ig(n,r),(n=n.alternate)&&ig(n,r)}function OS(){return null}var rg=typeof reportError=="function"?reportError:function(n){console.error(n)};function ld(n){this._internalRoot=n}Au.prototype.render=ld.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Tu(n,r,null,null)},Au.prototype.unmount=ld.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Os(function(){Tu(null,n,null,null)}),r[pr]=null}};function Au(n){this._internalRoot=n}Au.prototype.unstable_scheduleHydration=function(n){if(n){var r=Lt();n={blockedOn:null,target:n,priority:r};for(var l=0;l<Hr.length&&r!==0&&r<Hr[l].priority;l++);Hr.splice(l,0,n),l===0&&Wp(n)}};function ud(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ru(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sg(){}function kS(n,r,l,f,m){if(m){if(typeof f=="function"){var v=f;f=function(){var ce=wu(A);v.call(ce)}}var A=ng(r,f,n,0,null,!1,!1,"",sg);return n._reactRootContainer=A,n[pr]=A.current,Lo(n.nodeType===8?n.parentNode:n),Os(),A}for(;m=n.lastChild;)n.removeChild(m);if(typeof f=="function"){var O=f;f=function(){var ce=wu(z);O.call(ce)}}var z=ad(n,0,!1,null,null,!1,!1,"",sg);return n._reactRootContainer=z,n[pr]=z.current,Lo(n.nodeType===8?n.parentNode:n),Os(function(){Tu(r,z,l,f)}),z}function Cu(n,r,l,f,m){var v=l._reactRootContainer;if(v){var A=v;if(typeof m=="function"){var O=m;m=function(){var z=wu(A);O.call(z)}}Tu(r,A,n,m)}else A=kS(l,r,n,m,f);return wu(A)}Ct=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var l=St(r.pendingLanes);l!==0&&(Xn(r,l|1),Zn(r,Kt()),(Mt&6)===0&&(Da=Kt()+500,$r()))}break;case 13:Os(function(){var f=vr(n,1);if(f!==null){var m=Vn();zi(f,n,1,m)}}),od(n,1)}},Bt=function(n){if(n.tag===13){var r=vr(n,134217728);if(r!==null){var l=Vn();zi(r,n,134217728,l)}od(n,134217728)}},Ni=function(n){if(n.tag===13){var r=es(n),l=vr(n,r);if(l!==null){var f=Vn();zi(l,n,r,f)}od(n,r)}},Lt=function(){return ht},Ii=function(n,r){var l=ht;try{return ht=n,r()}finally{ht=l}},et=function(n,r,l){switch(r){case"input":if(Gt(n,l),r=l.name,l.type==="radio"&&r!=null){for(l=n;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<l.length;r++){var f=l[r];if(f!==n&&f.form===n.form){var m=Xl(f);if(!m)throw Error(t(90));Ht(f),Gt(f,m)}}}break;case"textarea":En(n,l);break;case"select":r=l.value,r!=null&&Pt(n,!!l.multiple,r,!1)}},Ne=ed,ge=Os;var BS={usingClientEntryPoint:!1,Events:[Uo,va,Xl,pe,be,ed]},Ko={findFiberByHostInstance:bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zS={bundleType:Ko.bundleType,version:Ko.version,rendererPackageName:Ko.rendererPackageName,rendererConfig:Ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=As(n),n===null?null:n.stateNode},findFiberByHostInstance:Ko.findFiberByHostInstance||OS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bu.isDisabled&&bu.supportsFiber)try{ee=bu.inject(zS),we=bu}catch{}}return jn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BS,jn.createPortal=function(n,r){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ud(r))throw Error(t(200));return FS(n,r,null,l)},jn.createRoot=function(n,r){if(!ud(n))throw Error(t(299));var l=!1,f="",m=rg;return r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(f=r.identifierPrefix),r.onRecoverableError!==void 0&&(m=r.onRecoverableError)),r=ad(n,1,!1,null,null,l,!1,f,m),n[pr]=r.current,Lo(n.nodeType===8?n.parentNode:n),new ld(r)},jn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=As(r),n=n===null?null:n.stateNode,n},jn.flushSync=function(n){return Os(n)},jn.hydrate=function(n,r,l){if(!Ru(r))throw Error(t(200));return Cu(null,n,r,!0,l)},jn.hydrateRoot=function(n,r,l){if(!ud(n))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,v="",A=rg;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(v=l.identifierPrefix),l.onRecoverableError!==void 0&&(A=l.onRecoverableError)),r=ng(r,null,n,1,l??null,m,!1,v,A),n[pr]=r.current,Lo(n),f)for(n=0;n<f.length;n++)l=f[n],m=l._getVersion,m=m(l._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[l,m]:r.mutableSourceEagerHydrationData.push(l,m);return new Au(r)},jn.render=function(n,r,l){if(!Ru(r))throw Error(t(200));return Cu(null,n,r,!1,l)},jn.unmountComponentAtNode=function(n){if(!Ru(n))throw Error(t(40));return n._reactRootContainer?(Os(function(){Cu(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},jn.unstable_batchedUpdates=ed,jn.unstable_renderSubtreeIntoContainer=function(n,r,l,f){if(!Ru(l))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cu(n,r,l,!1,f)},jn.version="18.3.1-next-f1338f8080-20240426",jn}var hg;function ZS(){if(hg)return dd.exports;hg=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(e){console.error(e)}}return a(),dd.exports=KS(),dd.exports}var pg;function jS(){if(pg)return Pu;pg=1;var a=ZS();return Pu.createRoot=a.createRoot,Pu.hydrateRoot=a.hydrateRoot,Pu}var QS=jS();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const lp="185",JS=0,mg=1,ey=2,nc=1,ty=2,sl=3,vs=0,ei=1,br=2,Dr=0,Za=1,_g=2,gg=3,vg=4,ny=5,Ks=100,iy=101,ry=102,sy=103,ay=104,oy=200,ly=201,uy=202,cy=203,nh=204,ih=205,fy=206,dy=207,hy=208,py=209,my=210,_y=211,gy=212,vy=213,xy=214,rh=0,sh=1,ah=2,no=3,oh=4,lh=5,uh=6,ch=7,L0=0,Sy=1,yy=2,or=0,N0=1,I0=2,U0=3,F0=4,O0=5,k0=6,B0=7,z0=300,ra=301,io=302,md=303,_d=304,wc=306,fh=1e3,Pr=1001,dh=1002,Rn=1003,My=1004,Du=1005,On=1006,gd=1007,js=1008,Pi=1009,V0=1010,H0=1011,dl=1012,up=1013,cr=1014,rr=1015,Ir=1016,cp=1017,fp=1018,hl=1020,G0=35902,W0=35899,X0=1021,Y0=1022,Yi=1023,Ur=1026,Qs=1027,q0=1028,dp=1029,sa=1030,hp=1031,pp=1033,ic=33776,rc=33777,sc=33778,ac=33779,hh=35840,ph=35841,mh=35842,_h=35843,gh=36196,vh=37492,xh=37496,Sh=37488,yh=37489,fc=37490,Mh=37491,Eh=37808,Th=37809,wh=37810,Ah=37811,Rh=37812,Ch=37813,bh=37814,Ph=37815,Dh=37816,Lh=37817,Nh=37818,Ih=37819,Uh=37820,Fh=37821,Oh=36492,kh=36494,Bh=36495,zh=36283,Vh=36284,dc=36285,Hh=36286,Ey=3200,xg=0,Ty=1,fs="",bi="srgb",hc="srgb-linear",pc="linear",Nt="srgb",Na=7680,Sg=519,wy=512,Ay=513,Ry=514,mp=515,Cy=516,by=517,_p=518,Py=519,yg=35044,Mg="300 es",sr=2e3,mc=2001;function Dy(a){for(let e=a.length-1;e>=0;--e)if(a[e]>=65535)return!0;return!1}function _c(a){return document.createElementNS("http://www.w3.org/1999/xhtml",a)}function Ly(){const a=_c("canvas");return a.style.display="block",a}const Eg={};function Tg(...a){const e="THREE."+a.shift();console.log(e,...a)}function $0(a){const e=a[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=a[1];t&&t.isStackTrace?a[0]+=" "+t.getLocation():a[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return a}function st(...a){a=$0(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...a)}}function Et(...a){a=$0(a);const e="THREE."+a.shift();{const t=a[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...a)}}function ja(...a){const e=a.join(" ");e in Eg||(Eg[e]=!0,st(...a))}function Ny(a,e,t){return new Promise(function(i,s){function o(){switch(a.clientWaitSync(e,a.SYNC_FLUSH_COMMANDS_BIT,0)){case a.WAIT_FAILED:s();break;case a.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:i()}}setTimeout(o,t)})}const Iy={[rh]:sh,[ah]:uh,[oh]:ch,[no]:lh,[sh]:rh,[uh]:ah,[ch]:oh,[lh]:no};class oa{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const o=s.indexOf(t);o!==-1&&s.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let o=0,u=s.length;o<u;o++)s[o].call(this,e);e.target=null}}}const In=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,Gh=180/Math.PI;function Ml(){const a=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(In[a&255]+In[a>>8&255]+In[a>>16&255]+In[a>>24&255]+"-"+In[e&255]+In[e>>8&255]+"-"+In[e>>16&15|64]+In[e>>24&255]+"-"+In[t&63|128]+In[t>>8&255]+"-"+In[t>>16&255]+In[t>>24&255]+In[i&255]+In[i>>8&255]+In[i>>16&255]+In[i>>24&255]).toLowerCase()}function gt(a,e,t){return Math.max(e,Math.min(t,a))}function Uy(a,e){return(a%e+e)%e}function xd(a,e,t){return(1-t)*a+t*e}function jo(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return a/4294967295;case Uint16Array:return a/65535;case Uint8Array:return a/255;case Int32Array:return Math.max(a/2147483647,-1);case Int16Array:return Math.max(a/32767,-1);case Int8Array:return Math.max(a/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qn(a,e){switch(e.constructor){case Float32Array:return a;case Uint32Array:return Math.round(a*4294967295);case Uint16Array:return Math.round(a*65535);case Uint8Array:return Math.round(a*255);case Int32Array:return Math.round(a*2147483647);case Int16Array:return Math.round(a*32767);case Int8Array:return Math.round(a*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const kp=class kp{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),o=this.x-e.x,u=this.y-e.y;return this.x=o*i-u*s+e.x,this.y=o*s+u*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};kp.prototype.isVector2=!0;let yt=kp;class ho{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,o,u,c){let d=i[s+0],h=i[s+1],p=i[s+2],g=i[s+3],_=o[u+0],S=o[u+1],E=o[u+2],M=o[u+3];if(g!==M||d!==_||h!==S||p!==E){let x=d*_+h*S+p*E+g*M;x<0&&(_=-_,S=-S,E=-E,M=-M,x=-x);let y=1-c;if(x<.9995){const b=Math.acos(x),N=Math.sin(b);y=Math.sin(y*b)/N,c=Math.sin(c*b)/N,d=d*y+_*c,h=h*y+S*c,p=p*y+E*c,g=g*y+M*c}else{d=d*y+_*c,h=h*y+S*c,p=p*y+E*c,g=g*y+M*c;const b=1/Math.sqrt(d*d+h*h+p*p+g*g);d*=b,h*=b,p*=b,g*=b}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=g}static multiplyQuaternionsFlat(e,t,i,s,o,u){const c=i[s],d=i[s+1],h=i[s+2],p=i[s+3],g=o[u],_=o[u+1],S=o[u+2],E=o[u+3];return e[t]=c*E+p*g+d*S-h*_,e[t+1]=d*E+p*_+h*g-c*S,e[t+2]=h*E+p*S+c*_-d*g,e[t+3]=p*E-c*g-d*_-h*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,o=e._z,u=e._order,c=Math.cos,d=Math.sin,h=c(i/2),p=c(s/2),g=c(o/2),_=d(i/2),S=d(s/2),E=d(o/2);switch(u){case"XYZ":this._x=_*p*g+h*S*E,this._y=h*S*g-_*p*E,this._z=h*p*E+_*S*g,this._w=h*p*g-_*S*E;break;case"YXZ":this._x=_*p*g+h*S*E,this._y=h*S*g-_*p*E,this._z=h*p*E-_*S*g,this._w=h*p*g+_*S*E;break;case"ZXY":this._x=_*p*g-h*S*E,this._y=h*S*g+_*p*E,this._z=h*p*E+_*S*g,this._w=h*p*g-_*S*E;break;case"ZYX":this._x=_*p*g-h*S*E,this._y=h*S*g+_*p*E,this._z=h*p*E-_*S*g,this._w=h*p*g+_*S*E;break;case"YZX":this._x=_*p*g+h*S*E,this._y=h*S*g+_*p*E,this._z=h*p*E-_*S*g,this._w=h*p*g-_*S*E;break;case"XZY":this._x=_*p*g-h*S*E,this._y=h*S*g-_*p*E,this._z=h*p*E+_*S*g,this._w=h*p*g+_*S*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],o=t[8],u=t[1],c=t[5],d=t[9],h=t[2],p=t[6],g=t[10],_=i+c+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(p-d)*S,this._y=(o-h)*S,this._z=(u-s)*S}else if(i>c&&i>g){const S=2*Math.sqrt(1+i-c-g);this._w=(p-d)/S,this._x=.25*S,this._y=(s+u)/S,this._z=(o+h)/S}else if(c>g){const S=2*Math.sqrt(1+c-i-g);this._w=(o-h)/S,this._x=(s+u)/S,this._y=.25*S,this._z=(d+p)/S}else{const S=2*Math.sqrt(1+g-i-c);this._w=(u-s)/S,this._x=(o+h)/S,this._y=(d+p)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(gt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,o=e._z,u=e._w,c=t._x,d=t._y,h=t._z,p=t._w;return this._x=i*p+u*c+s*h-o*d,this._y=s*p+u*d+o*c-i*h,this._z=o*p+u*h+i*d-s*c,this._w=u*p-i*c-s*d-o*h,this._onChangeCallback(),this}slerp(e,t){let i=e._x,s=e._y,o=e._z,u=e._w,c=this.dot(e);c<0&&(i=-i,s=-s,o=-o,u=-u,c=-c);let d=1-t;if(c<.9995){const h=Math.acos(c),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this._onChangeCallback()}else this._x=this._x*d+i*t,this._y=this._y*d+s*t,this._z=this._z*d+o*t,this._w=this._w*d+u*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Bp=class Bp{constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(wg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(wg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*s,this.y=o[1]*t+o[4]*i+o[7]*s,this.z=o[2]*t+o[5]*i+o[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=e.elements,u=1/(o[3]*t+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*s+o[12])*u,this.y=(o[1]*t+o[5]*i+o[9]*s+o[13])*u,this.z=(o[2]*t+o[6]*i+o[10]*s+o[14])*u,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,o=e.x,u=e.y,c=e.z,d=e.w,h=2*(u*s-c*i),p=2*(c*t-o*s),g=2*(o*i-u*t);return this.x=t+d*h+u*g-c*p,this.y=i+d*p+c*h-o*g,this.z=s+d*g+o*p-u*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*s,this.y=o[1]*t+o[5]*i+o[9]*s,this.z=o[2]*t+o[6]*i+o[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,o=e.z,u=t.x,c=t.y,d=t.z;return this.x=s*d-o*c,this.y=o*u-i*d,this.z=i*c-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Bp.prototype.isVector3=!0;let le=Bp;const Sd=new le,wg=new ho,zp=class zp{constructor(e,t,i,s,o,u,c,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,d,h)}set(e,t,i,s,o,u,c,d,h){const p=this.elements;return p[0]=e,p[1]=s,p[2]=c,p[3]=t,p[4]=o,p[5]=d,p[6]=i,p[7]=u,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[3],d=i[6],h=i[1],p=i[4],g=i[7],_=i[2],S=i[5],E=i[8],M=s[0],x=s[3],y=s[6],b=s[1],N=s[4],R=s[7],P=s[2],L=s[5],I=s[8];return o[0]=u*M+c*b+d*P,o[3]=u*x+c*N+d*L,o[6]=u*y+c*R+d*I,o[1]=h*M+p*b+g*P,o[4]=h*x+p*N+g*L,o[7]=h*y+p*R+g*I,o[2]=_*M+S*b+E*P,o[5]=_*x+S*N+E*L,o[8]=_*y+S*R+E*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8];return t*u*p-t*c*h-i*o*p+i*c*d+s*o*h-s*u*d}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=p*u-c*h,_=c*d-p*o,S=h*o-u*d,E=t*g+i*_+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/E;return e[0]=g*M,e[1]=(s*h-p*i)*M,e[2]=(c*i-s*u)*M,e[3]=_*M,e[4]=(p*t-s*d)*M,e[5]=(s*o-c*t)*M,e[6]=S*M,e[7]=(i*d-h*t)*M,e[8]=(u*t-i*o)*M,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,o,u,c){const d=Math.cos(o),h=Math.sin(o);return this.set(i*d,i*h,-i*(d*u+h*c)+u+e,-s*h,s*d,-s*(-h*u+d*c)+c+t,0,0,1),this}scale(e,t){return ja("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(e,t)),this}rotate(e){return ja("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return ja("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};zp.prototype.isMatrix3=!0;let lt=zp;const yd=new lt,Ag=new lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rg=new lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Fy(){const a={enabled:!0,workingColorSpace:hc,spaces:{},convert:function(s,o,u){return this.enabled===!1||o===u||!o||!u||(this.spaces[o].transfer===Nt&&(s.r=Lr(s.r),s.g=Lr(s.g),s.b=Lr(s.b)),this.spaces[o].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[o].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Nt&&(s.r=Qa(s.r),s.g=Qa(s.g),s.b=Qa(s.b))),s},workingToColorSpace:function(s,o){return this.convert(s,this.workingColorSpace,o)},colorSpaceToWorking:function(s,o){return this.convert(s,o,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fs?pc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,o=this.workingColorSpace){return s.fromArray(this.spaces[o].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,o,u){return s.copy(this.spaces[o].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,o){return ja("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),a.workingToColorSpace(s,o)},toWorkingColorSpace:function(s,o){return ja("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),a.colorSpaceToWorking(s,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return a.define({[hc]:{primaries:e,whitePoint:i,transfer:pc,toXYZ:Ag,fromXYZ:Rg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:bi},outputColorSpaceConfig:{drawingBufferColorSpace:bi}},[bi]:{primaries:e,whitePoint:i,transfer:Nt,toXYZ:Ag,fromXYZ:Rg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:bi}}}),a}const _t=Fy();function Lr(a){return a<.04045?a*.0773993808:Math.pow(a*.9478672986+.0521327014,2.4)}function Qa(a){return a<.0031308?a*12.92:1.055*Math.pow(a,.41666)-.055}let Ia;class Oy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ia===void 0&&(Ia=_c("canvas")),Ia.width=e.width,Ia.height=e.height;const s=Ia.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Ia}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=_c("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),o=s.data;for(let u=0;u<o.length;u++)o[u]=Lr(o[u]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Lr(t[i]/255)*255):t[i]=Lr(t[i]);return{data:t,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ky=0;class gp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Ml(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let u=0,c=s.length;u<c;u++)s[u].isDataTexture?o.push(Md(s[u].image)):o.push(Md(s[u]))}else o=Md(s);i.url=o}return t||(e.images[this.uuid]=i),i}}function Md(a){return typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap?Oy.getDataURL(a):a.data?{data:Array.from(a.data),width:a.width,height:a.height,type:a.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let By=0;const Ed=new le;class Gn extends oa{constructor(e=Gn.DEFAULT_IMAGE,t=Gn.DEFAULT_MAPPING,i=Pr,s=Pr,o=On,u=js,c=Yi,d=Pi,h=Gn.DEFAULT_ANISOTROPY,p=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Ml(),this.name="",this.source=new gp(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=u,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=d,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){st(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){st(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case Pr:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case Pr:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Gn.DEFAULT_IMAGE=null;Gn.DEFAULT_MAPPING=z0;Gn.DEFAULT_ANISOTROPY=1;const Vp=class Vp{constructor(e=0,t=0,i=0,s=1){this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,o=this.w,u=e.elements;return this.x=u[0]*t+u[4]*i+u[8]*s+u[12]*o,this.y=u[1]*t+u[5]*i+u[9]*s+u[13]*o,this.z=u[2]*t+u[6]*i+u[10]*s+u[14]*o,this.w=u[3]*t+u[7]*i+u[11]*s+u[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,o;const d=e.elements,h=d[0],p=d[4],g=d[8],_=d[1],S=d[5],E=d[9],M=d[2],x=d[6],y=d[10];if(Math.abs(p-_)<.01&&Math.abs(g-M)<.01&&Math.abs(E-x)<.01){if(Math.abs(p+_)<.1&&Math.abs(g+M)<.1&&Math.abs(E+x)<.1&&Math.abs(h+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(h+1)/2,R=(S+1)/2,P=(y+1)/2,L=(p+_)/4,I=(g+M)/4,T=(E+x)/4;return N>R&&N>P?N<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(N),s=L/i,o=I/i):R>P?R<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(R),i=L/s,o=T/s):P<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(P),i=I/o,s=T/o),this.set(i,s,o,t),this}let b=Math.sqrt((x-E)*(x-E)+(g-M)*(g-M)+(_-p)*(_-p));return Math.abs(b)<.001&&(b=1),this.x=(x-E)/b,this.y=(g-M)/b,this.z=(_-p)/b,this.w=Math.acos((h+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=gt(this.x,e.x,t.x),this.y=gt(this.y,e.y,t.y),this.z=gt(this.z,e.z,t.z),this.w=gt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=gt(this.x,e,t),this.y=gt(this.y,e,t),this.z=gt(this.z,e,t),this.w=gt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(gt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Vp.prototype.isVector4=!0;let sn=Vp;class zy extends oa{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:i.depth},o=new Gn(s),u=i.count;for(let c=0;c<u;c++)this.textures[c]=o.clone(),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new gp(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class lr extends zy{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class K0 extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vy extends Gn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=Rn,this.minFilter=Rn,this.wrapR=Pr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Tc=class Tc{constructor(e,t,i,s,o,u,c,d,h,p,g,_,S,E,M,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,o,u,c,d,h,p,g,_,S,E,M,x)}set(e,t,i,s,o,u,c,d,h,p,g,_,S,E,M,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=i,y[12]=s,y[1]=o,y[5]=u,y[9]=c,y[13]=d,y[2]=h,y[6]=p,y[10]=g,y[14]=_,y[3]=S,y[7]=E,y[11]=M,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,i=e.elements,s=1/Ua.setFromMatrixColumn(e,0).length(),o=1/Ua.setFromMatrixColumn(e,1).length(),u=1/Ua.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*u,t[9]=i[9]*u,t[10]=i[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,o=e.z,u=Math.cos(i),c=Math.sin(i),d=Math.cos(s),h=Math.sin(s),p=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const _=u*p,S=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=-d*g,t[8]=h,t[1]=S+E*h,t[5]=_-M*h,t[9]=-c*d,t[2]=M-_*h,t[6]=E+S*h,t[10]=u*d}else if(e.order==="YXZ"){const _=d*p,S=d*g,E=h*p,M=h*g;t[0]=_+M*c,t[4]=E*c-S,t[8]=u*h,t[1]=u*g,t[5]=u*p,t[9]=-c,t[2]=S*c-E,t[6]=M+_*c,t[10]=u*d}else if(e.order==="ZXY"){const _=d*p,S=d*g,E=h*p,M=h*g;t[0]=_-M*c,t[4]=-u*g,t[8]=E+S*c,t[1]=S+E*c,t[5]=u*p,t[9]=M-_*c,t[2]=-u*h,t[6]=c,t[10]=u*d}else if(e.order==="ZYX"){const _=u*p,S=u*g,E=c*p,M=c*g;t[0]=d*p,t[4]=E*h-S,t[8]=_*h+M,t[1]=d*g,t[5]=M*h+_,t[9]=S*h-E,t[2]=-h,t[6]=c*d,t[10]=u*d}else if(e.order==="YZX"){const _=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=M-_*g,t[8]=E*g+S,t[1]=g,t[5]=u*p,t[9]=-c*p,t[2]=-h*p,t[6]=S*g+E,t[10]=_-M*g}else if(e.order==="XZY"){const _=u*d,S=u*h,E=c*d,M=c*h;t[0]=d*p,t[4]=-g,t[8]=h*p,t[1]=_*g+M,t[5]=u*p,t[9]=S*g-E,t[2]=E*g-S,t[6]=c*p,t[10]=M*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,Gy)}lookAt(e,t,i){const s=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),rs.crossVectors(i,ci),rs.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),rs.crossVectors(i,ci)),rs.normalize(),Lu.crossVectors(ci,rs),s[0]=rs.x,s[4]=Lu.x,s[8]=ci.x,s[1]=rs.y,s[5]=Lu.y,s[9]=ci.y,s[2]=rs.z,s[6]=Lu.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,o=this.elements,u=i[0],c=i[4],d=i[8],h=i[12],p=i[1],g=i[5],_=i[9],S=i[13],E=i[2],M=i[6],x=i[10],y=i[14],b=i[3],N=i[7],R=i[11],P=i[15],L=s[0],I=s[4],T=s[8],D=s[12],k=s[1],B=s[5],Y=s[9],j=s[13],re=s[2],W=s[6],Q=s[10],V=s[14],H=s[3],oe=s[7],se=s[11],F=s[15];return o[0]=u*L+c*k+d*re+h*H,o[4]=u*I+c*B+d*W+h*oe,o[8]=u*T+c*Y+d*Q+h*se,o[12]=u*D+c*j+d*V+h*F,o[1]=p*L+g*k+_*re+S*H,o[5]=p*I+g*B+_*W+S*oe,o[9]=p*T+g*Y+_*Q+S*se,o[13]=p*D+g*j+_*V+S*F,o[2]=E*L+M*k+x*re+y*H,o[6]=E*I+M*B+x*W+y*oe,o[10]=E*T+M*Y+x*Q+y*se,o[14]=E*D+M*j+x*V+y*F,o[3]=b*L+N*k+R*re+P*H,o[7]=b*I+N*B+R*W+P*oe,o[11]=b*T+N*Y+R*Q+P*se,o[15]=b*D+N*j+R*V+P*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[12],u=e[1],c=e[5],d=e[9],h=e[13],p=e[2],g=e[6],_=e[10],S=e[14],E=e[3],M=e[7],x=e[11],y=e[15],b=d*S-h*_,N=c*S-h*g,R=c*_-d*g,P=u*S-h*p,L=u*_-d*p,I=u*g-c*p;return t*(M*b-x*N+y*R)-i*(E*b-x*P+y*L)+s*(E*N-M*P+y*I)-o*(E*R-M*L+x*I)}determinantAffine(){const e=this.elements,t=e[0],i=e[4],s=e[8],o=e[1],u=e[5],c=e[9],d=e[2],h=e[6],p=e[10];return t*(u*p-c*h)-i*(o*p-c*d)+s*(o*h-u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],o=e[3],u=e[4],c=e[5],d=e[6],h=e[7],p=e[8],g=e[9],_=e[10],S=e[11],E=e[12],M=e[13],x=e[14],y=e[15],b=t*c-i*u,N=t*d-s*u,R=t*h-o*u,P=i*d-s*c,L=i*h-o*c,I=s*h-o*d,T=p*M-g*E,D=p*x-_*E,k=p*y-S*E,B=g*x-_*M,Y=g*y-S*M,j=_*y-S*x,re=b*j-N*Y+R*B+P*k-L*D+I*T;if(re===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const W=1/re;return e[0]=(c*j-d*Y+h*B)*W,e[1]=(s*Y-i*j-o*B)*W,e[2]=(M*I-x*L+y*P)*W,e[3]=(_*L-g*I-S*P)*W,e[4]=(d*k-u*j-h*D)*W,e[5]=(t*j-s*k+o*D)*W,e[6]=(x*R-E*I-y*N)*W,e[7]=(p*I-_*R+S*N)*W,e[8]=(u*Y-c*k+h*T)*W,e[9]=(i*k-t*Y-o*T)*W,e[10]=(E*L-M*R+y*b)*W,e[11]=(g*R-p*L-S*b)*W,e[12]=(c*D-u*B-d*T)*W,e[13]=(t*B-i*D+s*T)*W,e[14]=(M*N-E*P-x*b)*W,e[15]=(p*P-g*N+_*b)*W,this}scale(e){const t=this.elements,i=e.x,s=e.y,o=e.z;return t[0]*=i,t[4]*=s,t[8]*=o,t[1]*=i,t[5]*=s,t[9]*=o,t[2]*=i,t[6]*=s,t[10]*=o,t[3]*=i,t[7]*=s,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),o=1-i,u=e.x,c=e.y,d=e.z,h=o*u,p=o*c;return this.set(h*u+i,h*c-s*d,h*d+s*c,0,h*c+s*d,p*c+i,p*d-s*u,0,h*d-s*c,p*d+s*u,o*d*d+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,o,u){return this.set(1,i,o,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,o=t._x,u=t._y,c=t._z,d=t._w,h=o+o,p=u+u,g=c+c,_=o*h,S=o*p,E=o*g,M=u*p,x=u*g,y=c*g,b=d*h,N=d*p,R=d*g,P=i.x,L=i.y,I=i.z;return s[0]=(1-(M+y))*P,s[1]=(S+R)*P,s[2]=(E-N)*P,s[3]=0,s[4]=(S-R)*L,s[5]=(1-(_+y))*L,s[6]=(x+b)*L,s[7]=0,s[8]=(E+N)*I,s[9]=(x-b)*I,s[10]=(1-(_+M))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const o=this.determinantAffine();if(o===0)return i.set(1,1,1),t.identity(),this;let u=Ua.set(s[0],s[1],s[2]).length();const c=Ua.set(s[4],s[5],s[6]).length(),d=Ua.set(s[8],s[9],s[10]).length();o<0&&(u=-u),Vi.copy(this);const h=1/u,p=1/c,g=1/d;return Vi.elements[0]*=h,Vi.elements[1]*=h,Vi.elements[2]*=h,Vi.elements[4]*=p,Vi.elements[5]*=p,Vi.elements[6]*=p,Vi.elements[8]*=g,Vi.elements[9]*=g,Vi.elements[10]*=g,t.setFromRotationMatrix(Vi),i.x=u,i.y=c,i.z=d,this}makePerspective(e,t,i,s,o,u,c=sr,d=!1){const h=this.elements,p=2*o/(t-e),g=2*o/(i-s),_=(t+e)/(t-e),S=(i+s)/(i-s);let E,M;if(d)E=o/(u-o),M=u*o/(u-o);else if(c===sr)E=-(u+o)/(u-o),M=-2*u*o/(u-o);else if(c===mc)E=-u/(u-o),M=-u*o/(u-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,i,s,o,u,c=sr,d=!1){const h=this.elements,p=2/(t-e),g=2/(i-s),_=-(t+e)/(t-e),S=-(i+s)/(i-s);let E,M;if(d)E=1/(u-o),M=u/(u-o);else if(c===sr)E=-2/(u-o),M=-(u+o)/(u-o);else if(c===mc)E=-1/(u-o),M=-o/(u-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+c);return h[0]=p,h[4]=0,h[8]=0,h[12]=_,h[1]=0,h[5]=g,h[9]=0,h[13]=S,h[2]=0,h[6]=0,h[10]=E,h[14]=M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}};Tc.prototype.isMatrix4=!0;let hn=Tc;const Ua=new le,Vi=new hn,Hy=new le(0,0,0),Gy=new le(1,1,1),rs=new le,Lu=new le,ci=new le,Cg=new hn,bg=new ho;class aa{constructor(e=0,t=0,i=0,s=aa.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,o=s[0],u=s[4],c=s[8],d=s[1],h=s[5],p=s[9],g=s[2],_=s[6],S=s[10];switch(t){case"XYZ":this._y=Math.asin(gt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-p,S),this._z=Math.atan2(-u,o)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-gt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(c,S),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(gt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-gt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-u,h));break;case"YZX":this._z=Math.asin(gt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(c,S));break;case"XZY":this._z=Math.asin(-gt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,o)):(this._x=Math.atan2(-p,S),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Cg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bg.setFromEuler(this),this.setFromQuaternion(bg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}aa.DEFAULT_ORDER="XYZ";class Z0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Wy=0;const Pg=new le,Fa=new ho,Mr=new hn,Nu=new le,Qo=new le,Xy=new le,Yy=new ho,Dg=new le(1,0,0),Lg=new le(0,1,0),Ng=new le(0,0,1),Ig={type:"added"},qy={type:"removed"},Oa={type:"childadded",child:null},Td={type:"childremoved",child:null};class _i extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wy++}),this.uuid=Ml(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_i.DEFAULT_UP.clone();const e=new le,t=new aa,i=new ho,s=new le(1,1,1);function o(){i.setFromEuler(t,!1)}function u(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new hn},normalMatrix:{value:new lt}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=_i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Z0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Fa.setFromAxisAngle(e,t),this.quaternion.multiply(Fa),this}rotateOnWorldAxis(e,t){return Fa.setFromAxisAngle(e,t),this.quaternion.premultiply(Fa),this}rotateX(e){return this.rotateOnAxis(Dg,e)}rotateY(e){return this.rotateOnAxis(Lg,e)}rotateZ(e){return this.rotateOnAxis(Ng,e)}translateOnAxis(e,t){return Pg.copy(e).applyQuaternion(this.quaternion),this.position.add(Pg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dg,e)}translateY(e){return this.translateOnAxis(Lg,e)}translateZ(e){return this.translateOnAxis(Ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Nu.copy(e):Nu.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Qo,Nu,this.up):Mr.lookAt(Nu,Qo,this.up),this.quaternion.setFromRotationMatrix(Mr),s&&(Mr.extractRotation(s.matrixWorld),Fa.setFromRotationMatrix(Mr),this.quaternion.premultiply(Fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Et("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ig),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null):Et("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qy),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ig),Oa.child=e,this.dispatchEvent(Oa),Oa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const u=this.children[i].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let o=0,u=s.length;o<u;o++)s[o].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,Xy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,Yy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,i=e.y,s=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*i-o[8]*s,o[13]+=i-o[1]*t-o[5]*i-o[9]*s,o[14]+=s-o[2]*t-o[6]*i-o[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){const o=this.children;for(let u=0,c=o.length;u<c;u++)o[u].updateWorldMatrix(!1,!0,i)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),this.static!==!1&&(s.static=this.static),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>({...c,boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>({...c})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function o(c,d){return c[d.uuid]===void 0&&(c[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const d=c.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const g=d[h];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let d=0,h=this.material.length;d<h;d++)c.push(o(e.materials,this.material[d]));s.material=c}else s.material=o(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){const d=this.animations[c];s.animations.push(o(e.animations,d))}}if(t){const c=u(e.geometries),d=u(e.materials),h=u(e.textures),p=u(e.images),g=u(e.shapes),_=u(e.skeletons),S=u(e.animations),E=u(e.nodes);c.length>0&&(i.geometries=c),d.length>0&&(i.materials=d),h.length>0&&(i.textures=h),p.length>0&&(i.images=p),g.length>0&&(i.shapes=g),_.length>0&&(i.skeletons=_),S.length>0&&(i.animations=S),E.length>0&&(i.nodes=E)}return i.object=s,i;function u(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}_i.DEFAULT_UP=new le(0,1,0);_i.DEFAULT_MATRIX_AUTO_UPDATE=!0;_i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Iu extends _i{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $y={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Iu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Iu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new le,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new le),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Iu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new le,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new le,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,o=null,u=null;const c=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){u=!0;for(const M of e.hand.values()){const x=t.getJointPose(M,i),y=this._getHandJoint(h,M);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const p=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],_=p.position.distanceTo(g.position),S=.02,E=.005;h.inputState.pinching&&_>S+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=S-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));c!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent($y)))}return c!==null&&(c.visible=s!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Iu;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const j0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ss={h:0,s:0,l:0},Uu={h:0,s:0,l:0};function Ad(a,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?a+(e-a)*6*t:t<1/2?e:t<2/3?a+(e-a)*6*(2/3-t):a}class bt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=bi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=_t.workingColorSpace){if(e=Uy(e,1),t=gt(t,0,1),i=gt(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,u=2*i-o;this.r=Ad(u,o,e+1/3),this.g=Ad(u,o,e),this.b=Ad(u,o,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=bi){function i(o){o!==void 0&&parseFloat(o)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const u=s[1],c=s[2];switch(u){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:st("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=s[1],u=o.length;if(u===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(o,16),t);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=bi){const i=j0[e.toLowerCase()];return i!==void 0?this.setHex(i,t):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Lr(e.r),this.g=Lr(e.g),this.b=Lr(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bi){return _t.workingToColorSpace(Un.copy(this),e),Math.round(gt(Un.r*255,0,255))*65536+Math.round(gt(Un.g*255,0,255))*256+Math.round(gt(Un.b*255,0,255))}getHexString(e=bi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Un.copy(this),t);const i=Un.r,s=Un.g,o=Un.b,u=Math.max(i,s,o),c=Math.min(i,s,o);let d,h;const p=(c+u)/2;if(c===u)d=0,h=0;else{const g=u-c;switch(h=p<=.5?g/(u+c):g/(2-u-c),u){case i:d=(s-o)/g+(s<o?6:0);break;case s:d=(o-i)/g+2;break;case o:d=(i-s)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=bi){_t.workingToColorSpace(Un.copy(this),e);const t=Un.r,i=Un.g,s=Un.b;return e!==bi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ss),this.setHSL(ss.h+e,ss.s+t,ss.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ss),e.getHSL(Uu);const i=xd(ss.h,Uu.h,t),s=xd(ss.s,Uu.s,t),o=xd(ss.l,Uu.l,t);return this.setHSL(i,s,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*s,this.g=o[1]*t+o[4]*i+o[7]*s,this.b=o[2]*t+o[5]*i+o[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new bt;bt.NAMES=j0;class Ky extends _i{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new aa,this.environmentIntensity=1,this.environmentRotation=new aa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Hi=new le,Er=new le,Rd=new le,Tr=new le,ka=new le,Ba=new le,Ug=new le,Cd=new le,bd=new le,Pd=new le,Dd=new sn,Ld=new sn,Nd=new sn;class Xi{constructor(e=new le,t=new le,i=new le){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hi.subVectors(e,t),s.cross(Hi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(e,t,i,s,o){Hi.subVectors(s,t),Er.subVectors(i,t),Rd.subVectors(e,t);const u=Hi.dot(Hi),c=Hi.dot(Er),d=Hi.dot(Rd),h=Er.dot(Er),p=Er.dot(Rd),g=u*h-c*c;if(g===0)return o.set(0,0,0),null;const _=1/g,S=(h*d-c*p)*_,E=(u*p-c*d)*_;return o.set(1-S-E,E,S)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,i,s,o,u,c,d){return this.getBarycoord(e,t,i,s,Tr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Tr.x),d.addScaledVector(u,Tr.y),d.addScaledVector(c,Tr.z),d)}static getInterpolatedAttribute(e,t,i,s,o,u){return Dd.setScalar(0),Ld.setScalar(0),Nd.setScalar(0),Dd.fromBufferAttribute(e,t),Ld.fromBufferAttribute(e,i),Nd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Dd,o.x),u.addScaledVector(Ld,o.y),u.addScaledVector(Nd,o.z),u}static isFrontFacing(e,t,i,s){return Hi.subVectors(i,t),Er.subVectors(e,t),Hi.cross(Er).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Hi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Xi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,o){return Xi.getInterpolation(e,this.a,this.b,this.c,t,i,s,o)}containsPoint(e){return Xi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,o=this.c;let u,c;ka.subVectors(s,i),Ba.subVectors(o,i),Cd.subVectors(e,i);const d=ka.dot(Cd),h=Ba.dot(Cd);if(d<=0&&h<=0)return t.copy(i);bd.subVectors(e,s);const p=ka.dot(bd),g=Ba.dot(bd);if(p>=0&&g<=p)return t.copy(s);const _=d*g-p*h;if(_<=0&&d>=0&&p<=0)return u=d/(d-p),t.copy(i).addScaledVector(ka,u);Pd.subVectors(e,o);const S=ka.dot(Pd),E=Ba.dot(Pd);if(E>=0&&S<=E)return t.copy(o);const M=S*h-d*E;if(M<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(i).addScaledVector(Ba,c);const x=p*E-S*g;if(x<=0&&g-p>=0&&S-E>=0)return Ug.subVectors(o,s),c=(g-p)/(g-p+(S-E)),t.copy(s).addScaledVector(Ug,c);const y=1/(x+M+_);return u=M*y,c=_*y,t.copy(i).addScaledVector(ka,u).addScaledVector(Ba,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class El{constructor(e=new le(1/0,1/0,1/0),t=new le(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let u=0,c=o.count;u<c;u++)e.isMesh===!0?e.getVertexPosition(u,Gi):Gi.fromBufferAttribute(o,u),Gi.applyMatrix4(e.matrixWorld),this.expandByPoint(Gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Fu.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Fu.copy(i.boundingBox)),Fu.applyMatrix4(e.matrixWorld),this.union(Fu)}const s=e.children;for(let o=0,u=s.length;o<u;o++)this.expandByObject(s[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Gi),Gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Ou.subVectors(this.max,Jo),za.subVectors(e.a,Jo),Va.subVectors(e.b,Jo),Ha.subVectors(e.c,Jo),as.subVectors(Va,za),os.subVectors(Ha,Va),Vs.subVectors(za,Ha);let t=[0,-as.z,as.y,0,-os.z,os.y,0,-Vs.z,Vs.y,as.z,0,-as.x,os.z,0,-os.x,Vs.z,0,-Vs.x,-as.y,as.x,0,-os.y,os.x,0,-Vs.y,Vs.x,0];return!Id(t,za,Va,Ha,Ou)||(t=[1,0,0,0,1,0,0,0,1],!Id(t,za,Va,Ha,Ou))?!1:(ku.crossVectors(as,os),t=[ku.x,ku.y,ku.z],Id(t,za,Va,Ha,Ou))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new le,new le,new le,new le,new le,new le,new le,new le],Gi=new le,Fu=new El,za=new le,Va=new le,Ha=new le,as=new le,os=new le,Vs=new le,Jo=new le,Ou=new le,ku=new le,Hs=new le;function Id(a,e,t,i,s){for(let o=0,u=a.length-3;o<=u;o+=3){Hs.fromArray(a,o);const c=s.x*Math.abs(Hs.x)+s.y*Math.abs(Hs.y)+s.z*Math.abs(Hs.z),d=e.dot(Hs),h=t.dot(Hs),p=i.dot(Hs);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>c)return!1}return!0}const fn=new le,Bu=new yt;let Zy=0;class ur extends oa{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=yg,this.updateRanges=[],this.gpuType=rr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bu.fromBufferAttribute(this,t),Bu.applyMatrix3(e),this.setXY(t,Bu.x,Bu.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix3(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyMatrix4(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.applyNormalMatrix(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fn.fromBufferAttribute(this,t),fn.transformDirection(e),this.setXYZ(t,fn.x,fn.y,fn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=jo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=jo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=jo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=jo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=jo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),s=Qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,o){return e*=this.itemSize,this.normalized&&(t=Qn(t,this.array),i=Qn(i,this.array),s=Qn(s,this.array),o=Qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yg&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class Q0 extends ur{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class J0 extends ur{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Nr extends ur{constructor(e,t,i){super(new Float32Array(e),t,i)}}const jy=new El,el=new le,Ud=new le;class vp{constructor(e=new le,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):jy.setFromPoints(e).getCenter(i);let s=0;for(let o=0,u=e.length;o<u;o++)s=Math.max(s,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const t=el.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(el,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Ud)),this.expandByPoint(el.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Qy=0;const Ri=new hn,Fd=new _i,Ga=new le,fi=new El,tl=new El,yn=new le;class kr extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Ml(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Dy(e)?J0:Q0)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new lt().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ga).negate(),this.translate(Ga.x,Ga.y,Ga.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,o=e.length;s<o;s++){const u=e[s];i.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Nr(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const o=e[s];t.setXYZ(s,o.x,o.y,o.z||0)}e.length>t.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new El);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new le(-1/0,-1/0,-1/0),new le(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const o=t[i];fi.setFromBufferAttribute(o),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,fi.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,fi.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(fi.min),this.boundingBox.expandByPoint(fi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Et('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Et("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new le,1/0);return}if(e){const i=this.boundingSphere.center;if(fi.setFromBufferAttribute(e),t)for(let o=0,u=t.length;o<u;o++){const c=t[o];tl.setFromBufferAttribute(c),this.morphTargetsRelative?(yn.addVectors(fi.min,tl.min),fi.expandByPoint(yn),yn.addVectors(fi.max,tl.max),fi.expandByPoint(yn)):(fi.expandByPoint(tl.min),fi.expandByPoint(tl.max))}fi.getCenter(i);let s=0;for(let o=0,u=e.count;o<u;o++)yn.fromBufferAttribute(e,o),s=Math.max(s,i.distanceToSquared(yn));if(t)for(let o=0,u=t.length;o<u;o++){const c=t[o],d=this.morphTargetsRelative;for(let h=0,p=c.count;h<p;h++)yn.fromBufferAttribute(c,h),d&&(Ga.fromBufferAttribute(e,h),yn.add(Ga)),s=Math.max(s,i.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Et('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Et("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,o=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==i.count)&&(u=new ur(new Float32Array(4*i.count),4),this.setAttribute("tangent",u));const c=[],d=[];for(let T=0;T<i.count;T++)c[T]=new le,d[T]=new le;const h=new le,p=new le,g=new le,_=new yt,S=new yt,E=new yt,M=new le,x=new le;function y(T,D,k){h.fromBufferAttribute(i,T),p.fromBufferAttribute(i,D),g.fromBufferAttribute(i,k),_.fromBufferAttribute(o,T),S.fromBufferAttribute(o,D),E.fromBufferAttribute(o,k),p.sub(h),g.sub(h),S.sub(_),E.sub(_);const B=1/(S.x*E.y-E.x*S.y);isFinite(B)&&(M.copy(p).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(B),x.copy(g).multiplyScalar(S.x).addScaledVector(p,-E.x).multiplyScalar(B),c[T].add(M),c[D].add(M),c[k].add(M),d[T].add(x),d[D].add(x),d[k].add(x))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let T=0,D=b.length;T<D;++T){const k=b[T],B=k.start,Y=k.count;for(let j=B,re=B+Y;j<re;j+=3)y(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const N=new le,R=new le,P=new le,L=new le;function I(T){P.fromBufferAttribute(s,T),L.copy(P);const D=c[T];N.copy(D),N.sub(P.multiplyScalar(P.dot(D))).normalize(),R.crossVectors(L,D);const B=R.dot(d[T])<0?-1:1;u.setXYZW(T,N.x,N.y,N.z,B)}for(let T=0,D=b.length;T<D;++T){const k=b[T],B=k.start,Y=k.count;for(let j=B,re=B+Y;j<re;j+=3)I(e.getX(j+0)),I(e.getX(j+1)),I(e.getX(j+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new ur(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let _=0,S=i.count;_<S;_++)i.setXYZ(_,0,0,0);const s=new le,o=new le,u=new le,c=new le,d=new le,h=new le,p=new le,g=new le;if(e)for(let _=0,S=e.count;_<S;_+=3){const E=e.getX(_+0),M=e.getX(_+1),x=e.getX(_+2);s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,M),u.fromBufferAttribute(t,x),p.subVectors(u,o),g.subVectors(s,o),p.cross(g),c.fromBufferAttribute(i,E),d.fromBufferAttribute(i,M),h.fromBufferAttribute(i,x),c.add(p),d.add(p),h.add(p),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(M,d.x,d.y,d.z),i.setXYZ(x,h.x,h.y,h.z)}else for(let _=0,S=t.count;_<S;_+=3)s.fromBufferAttribute(t,_+0),o.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),p.subVectors(u,o),g.subVectors(s,o),p.cross(g),i.setXYZ(_+0,p.x,p.y,p.z),i.setXYZ(_+1,p.x,p.y,p.z),i.setXYZ(_+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(c,d){const h=c.array,p=c.itemSize,g=c.normalized,_=new h.constructor(d.length*p);let S=0,E=0;for(let M=0,x=d.length;M<x;M++){c.isInterleavedBufferAttribute?S=d[M]*c.data.stride+c.offset:S=d[M]*p;for(let y=0;y<p;y++)_[E++]=h[S++]}return new ur(_,p,g)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new kr,i=this.index.array,s=this.attributes;for(const c in s){const d=s[c],h=e(d,i);t.setAttribute(c,h)}const o=this.morphAttributes;for(const c in o){const d=[],h=o[c];for(let p=0,g=h.length;p<g;p++){const _=h[p],S=e(_,i);d.push(S)}t.morphAttributes[c]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let c=0,d=u.length;c<d;c++){const h=u[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const d in i){const h=i[d];e.data.attributes[d]=h.toJSON(e.data)}const s={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let g=0,_=h.length;g<_;g++){const S=h[g];p.push(S.toJSON(e.data))}p.length>0&&(s[d]=p,o=!0)}o&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere=c.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const h in s){const p=s[h];this.setAttribute(h,p.clone(t))}const o=e.morphAttributes;for(const h in o){const p=[],g=o[h];for(let _=0,S=g.length;_<S;_++)p.push(g[_].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let h=0,p=u.length;h<p;h++){const g=u[h];this.addGroup(g.start,g.count,g.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Jy=0;class Ac extends oa{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=Ml(),this.name="",this.type="Material",this.blending=Za,this.side=vs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=nh,this.blendDst=ih,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=no,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Na,this.stencilZFail=Na,this.stencilZPass=Na,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){st(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){st(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Za&&(i.blending=this.blending),this.side!==vs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==nh&&(i.blendSrc=this.blendSrc),this.blendDst!==ih&&(i.blendDst=this.blendDst),this.blendEquation!==Ks&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==no&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sg&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Na&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Na&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Na&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const u=[];for(const c in o){const d=o[c];delete d.metadata,u.push(d)}return u}if(t){const o=s(e.textures),u=s(e.images);o.length>0&&(i.textures=o),u.length>0&&(i.images=u)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new yt().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new yt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ar=new le,Od=new le,zu=new le,ls=new le,kd=new le,Vu=new le,Bd=new le;class eM{constructor(e=new le,t=new le(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Od.copy(e).add(t).multiplyScalar(.5),zu.copy(t).sub(e).normalize(),ls.copy(this.origin).sub(Od);const o=e.distanceTo(t)*.5,u=-this.direction.dot(zu),c=ls.dot(this.direction),d=-ls.dot(zu),h=ls.lengthSq(),p=Math.abs(1-u*u);let g,_,S,E;if(p>0)if(g=u*d-c,_=u*c-d,E=o*p,g>=0)if(_>=-E)if(_<=E){const M=1/p;g*=M,_*=M,S=g*(g+u*_+2*c)+_*(u*g+_+2*d)+h}else _=o,g=Math.max(0,-(u*_+c)),S=-g*g+_*(_+2*d)+h;else _=-o,g=Math.max(0,-(u*_+c)),S=-g*g+_*(_+2*d)+h;else _<=-E?(g=Math.max(0,-(-u*o+c)),_=g>0?-o:Math.min(Math.max(-o,-d),o),S=-g*g+_*(_+2*d)+h):_<=E?(g=0,_=Math.min(Math.max(-o,-d),o),S=_*(_+2*d)+h):(g=Math.max(0,-(u*o+c)),_=g>0?o:Math.min(Math.max(-o,-d),o),S=-g*g+_*(_+2*d)+h);else _=u>0?-o:o,g=Math.max(0,-(u*_+c)),S=-g*g+_*(_+2*d)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Od).addScaledVector(zu,_),S}intersectSphere(e,t){Ar.subVectors(e.center,this.origin);const i=Ar.dot(this.direction),s=Ar.dot(Ar)-i*i,o=e.radius*e.radius;if(s>o)return null;const u=Math.sqrt(o-s),c=i-u,d=i+u;return d<0?null:c<0?this.at(d,t):this.at(c,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,o,u,c,d;const h=1/this.direction.x,p=1/this.direction.y,g=1/this.direction.z,_=this.origin;return h>=0?(i=(e.min.x-_.x)*h,s=(e.max.x-_.x)*h):(i=(e.max.x-_.x)*h,s=(e.min.x-_.x)*h),p>=0?(o=(e.min.y-_.y)*p,u=(e.max.y-_.y)*p):(o=(e.max.y-_.y)*p,u=(e.min.y-_.y)*p),i>u||o>s||((o>i||isNaN(i))&&(i=o),(u<s||isNaN(s))&&(s=u),g>=0?(c=(e.min.z-_.z)*g,d=(e.max.z-_.z)*g):(c=(e.max.z-_.z)*g,d=(e.min.z-_.z)*g),i>d||c>s)||((c>i||i!==i)&&(i=c),(d<s||s!==s)&&(s=d),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,i,s,o){kd.subVectors(t,e),Vu.subVectors(i,e),Bd.crossVectors(kd,Vu);let u=this.direction.dot(Bd),c;if(u>0){if(s)return null;c=1}else if(u<0)c=-1,u=-u;else return null;ls.subVectors(this.origin,e);const d=c*this.direction.dot(Vu.crossVectors(ls,Vu));if(d<0)return null;const h=c*this.direction.dot(kd.cross(ls));if(h<0||d+h>u)return null;const p=-c*ls.dot(Bd);return p<0?null:this.at(p/u,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ev extends Ac{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new aa,this.combine=L0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Fg=new hn,Gs=new eM,Hu=new vp,Og=new le,Gu=new le,Wu=new le,Xu=new le,zd=new le,Yu=new le,kg=new le,qu=new le;class fr extends _i{constructor(e=new kr,t=new ev){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,u=s.length;o<u;o++){const c=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=o}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,u=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const c=this.morphTargetInfluences;if(o&&c){Yu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const p=c[d],g=o[d];p!==0&&(zd.fromBufferAttribute(g,e),u?Yu.addScaledVector(zd,p):Yu.addScaledVector(zd.sub(t),p))}t.add(Yu)}return t}raycast(e,t){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Hu.copy(i.boundingSphere),Hu.applyMatrix4(o),Gs.copy(e.ray).recast(e.near),!(Hu.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(Hu,Og)===null||Gs.origin.distanceToSquared(Og)>(e.far-e.near)**2))&&(Fg.copy(o).invert(),Gs.copy(e.ray).applyMatrix4(Fg),!(i.boundingBox!==null&&Gs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Gs)))}_computeIntersections(e,t,i){let s;const o=this.geometry,u=this.material,c=o.index,d=o.attributes.position,h=o.attributes.uv,p=o.attributes.uv1,g=o.attributes.normal,_=o.groups,S=o.drawRange;if(c!==null)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const x=_[E],y=u[x.materialIndex],b=Math.max(x.start,S.start),N=Math.min(c.count,Math.min(x.start+x.count,S.start+S.count));for(let R=b,P=N;R<P;R+=3){const L=c.getX(R),I=c.getX(R+1),T=c.getX(R+2);s=$u(this,y,e,i,h,p,g,L,I,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(c.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const b=c.getX(x),N=c.getX(x+1),R=c.getX(x+2);s=$u(this,u,e,i,h,p,g,b,N,R),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,M=_.length;E<M;E++){const x=_[E],y=u[x.materialIndex],b=Math.max(x.start,S.start),N=Math.min(d.count,Math.min(x.start+x.count,S.start+S.count));for(let R=b,P=N;R<P;R+=3){const L=R,I=R+1,T=R+2;s=$u(this,y,e,i,h,p,g,L,I,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{const E=Math.max(0,S.start),M=Math.min(d.count,S.start+S.count);for(let x=E,y=M;x<y;x+=3){const b=x,N=x+1,R=x+2;s=$u(this,u,e,i,h,p,g,b,N,R),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}}function tM(a,e,t,i,s,o,u,c){let d;if(e.side===ei?d=i.intersectTriangle(u,o,s,!0,c):d=i.intersectTriangle(s,o,u,e.side===vs,c),d===null)return null;qu.copy(c),qu.applyMatrix4(a.matrixWorld);const h=t.ray.origin.distanceTo(qu);return h<t.near||h>t.far?null:{distance:h,point:qu.clone(),object:a}}function $u(a,e,t,i,s,o,u,c,d,h){a.getVertexPosition(c,Gu),a.getVertexPosition(d,Wu),a.getVertexPosition(h,Xu);const p=tM(a,e,t,i,Gu,Wu,Xu,kg);if(p){const g=new le;Xi.getBarycoord(kg,Gu,Wu,Xu,g),s&&(p.uv=Xi.getInterpolatedAttribute(s,c,d,h,g,new yt)),o&&(p.uv1=Xi.getInterpolatedAttribute(o,c,d,h,g,new yt)),u&&(p.normal=Xi.getInterpolatedAttribute(u,c,d,h,g,new le),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const _={a:c,b:d,c:h,normal:new le,materialIndex:0};Xi.getNormal(Gu,Wu,Xu,_.normal),p.face=_,p.barycoord=g}return p}class nM extends Gn{constructor(e=null,t=1,i=1,s,o,u,c,d,h=Rn,p=Rn,g,_){super(null,u,c,d,h,p,s,o,g,_),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vd=new le,iM=new le,rM=new lt;class qs{constructor(e=new le(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=Vd.subVectors(i,t).cross(iM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){const s=e.delta(Vd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/o;return i===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||rM.getNormalMatrix(e),s=this.coplanarPoint(Vd).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new vp,sM=new yt(.5,.5),Ku=new le;class tv{constructor(e=new qs,t=new qs,i=new qs,s=new qs,o=new qs,u=new qs){this.planes=[e,t,i,s,o,u]}set(e,t,i,s,o,u){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(i),c[3].copy(s),c[4].copy(o),c[5].copy(u),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=sr,i=!1){const s=this.planes,o=e.elements,u=o[0],c=o[1],d=o[2],h=o[3],p=o[4],g=o[5],_=o[6],S=o[7],E=o[8],M=o[9],x=o[10],y=o[11],b=o[12],N=o[13],R=o[14],P=o[15];if(s[0].setComponents(h-u,S-p,y-E,P-b).normalize(),s[1].setComponents(h+u,S+p,y+E,P+b).normalize(),s[2].setComponents(h+c,S+g,y+M,P+N).normalize(),s[3].setComponents(h-c,S-g,y-M,P-N).normalize(),i)s[4].setComponents(d,_,x,R).normalize(),s[5].setComponents(h-d,S-_,y-x,P-R).normalize();else if(s[4].setComponents(h-d,S-_,y-x,P-R).normalize(),t===sr)s[5].setComponents(h+d,S+_,y+x,P+R).normalize();else if(t===mc)s[5].setComponents(d,_,x,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ws.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(e){Ws.center.set(0,0,0);const t=sM.distanceTo(e.center);return Ws.radius=.7071067811865476+t,Ws.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(Ku.x=s.normal.x>0?e.max.x:e.min.x,Ku.y=s.normal.y>0?e.max.y:e.min.y,Ku.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ku)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class nv extends Gn{constructor(e=[],t=ra,i,s,o,u,c,d,h,p){super(e,t,i,s,o,u,c,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ro extends Gn{constructor(e,t,i=cr,s,o,u,c=Rn,d=Rn,h,p=Ur,g=1){if(p!==Ur&&p!==Qs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:g};super(_,s,o,u,c,d,p,i,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class aM extends ro{constructor(e,t=cr,i=ra,s,o,u=Rn,c=Rn,d,h=Ur){const p={width:e,height:e,depth:1},g=[p,p,p,p,p,p];super(e,e,t,i,s,o,u,c,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class iv extends Gn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tl extends kr{constructor(e=1,t=1,i=1,s=1,o=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:o,depthSegments:u};const c=this;s=Math.floor(s),o=Math.floor(o),u=Math.floor(u);const d=[],h=[],p=[],g=[];let _=0,S=0;E("z","y","x",-1,-1,i,t,e,u,o,0),E("z","y","x",1,-1,i,t,-e,u,o,1),E("x","z","y",1,1,e,i,t,s,u,2),E("x","z","y",1,-1,e,i,-t,s,u,3),E("x","y","z",1,-1,e,t,i,s,o,4),E("x","y","z",-1,-1,e,t,-i,s,o,5),this.setIndex(d),this.setAttribute("position",new Nr(h,3)),this.setAttribute("normal",new Nr(p,3)),this.setAttribute("uv",new Nr(g,2));function E(M,x,y,b,N,R,P,L,I,T,D){const k=R/I,B=P/T,Y=R/2,j=P/2,re=L/2,W=I+1,Q=T+1;let V=0,H=0;const oe=new le;for(let se=0;se<Q;se++){const F=se*B-j;for(let K=0;K<W;K++){const Le=K*k-Y;oe[M]=Le*b,oe[x]=F*N,oe[y]=re,h.push(oe.x,oe.y,oe.z),oe[M]=0,oe[x]=0,oe[y]=L>0?1:-1,p.push(oe.x,oe.y,oe.z),g.push(K/I),g.push(1-se/T),V+=1}}for(let se=0;se<T;se++)for(let F=0;F<I;F++){const K=_+F+W*se,Le=_+F+W*(se+1),Fe=_+(F+1)+W*(se+1),Ue=_+(F+1)+W*se;d.push(K,Le,Ue),d.push(Le,Fe,Ue),H+=6}c.addGroup(S,H,D),S+=H,_+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tl(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wl extends kr{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const o=e/2,u=t/2,c=Math.floor(i),d=Math.floor(s),h=c+1,p=d+1,g=e/c,_=t/d,S=[],E=[],M=[],x=[];for(let y=0;y<p;y++){const b=y*_-u;for(let N=0;N<h;N++){const R=N*g-o;E.push(R,-b,0),M.push(0,0,1),x.push(N/c),x.push(1-y/d)}}for(let y=0;y<d;y++)for(let b=0;b<c;b++){const N=b+h*y,R=b+h*(y+1),P=b+1+h*(y+1),L=b+1+h*y;S.push(N,R,L),S.push(R,P,L)}this.setIndex(S),this.setAttribute("position",new Nr(E,3)),this.setAttribute("normal",new Nr(M,3)),this.setAttribute("uv",new Nr(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wl(e.width,e.height,e.widthSegments,e.heightSegments)}}function so(a){const e={};for(const t in a){e[t]={};for(const i in a[t]){const s=a[t][i];if(Bg(s))s.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone();else if(Array.isArray(s))if(Bg(s[0])){const o=[];for(let u=0,c=s.length;u<c;u++)o[u]=s[u].clone();e[t][i]=o}else e[t][i]=s.slice();else e[t][i]=s}}return e}function Hn(a){const e={};for(let t=0;t<a.length;t++){const i=so(a[t]);for(const s in i)e[s]=i[s]}return e}function Bg(a){return a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)}function oM(a){const e=[];for(let t=0;t<a.length;t++)e.push(a[t].clone());return e}function rv(a){const e=a.getRenderTarget();return e===null?a.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const lM={clone:so,merge:Hn};var uM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Ac{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=so(e.uniforms),this.uniformsGroups=oM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const i in e.uniforms){const s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=t[s.value]||null;break;case"c":this.uniforms[i].value=new bt().setHex(s.value);break;case"v2":this.uniforms[i].value=new yt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new le().fromArray(s.value);break;case"v4":this.uniforms[i].value=new sn().fromArray(s.value);break;case"m3":this.uniforms[i].value=new lt().fromArray(s.value);break;case"m4":this.uniforms[i].value=new hn().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class fM extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dM extends Ac{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ey,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hM extends Ac{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Zu=new le,ju=new ho,Ji=new le;class sv extends _i{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Zu,ju,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zu,ju,Ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(Zu,ju,Ji),Ji.x===1&&Ji.y===1&&Ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Zu,ju,Ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const us=new le,zg=new yt,Vg=new yt;class Wi extends sv{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gh*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){us.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(us.x,us.y).multiplyScalar(-e/us.z),us.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(us.x,us.y).multiplyScalar(-e/us.z)}getViewSize(e,t){return this.getViewBounds(e,zg,Vg),t.subVectors(Vg,zg)}setViewOffset(e,t,i,s,o,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vd*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,o=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,h=u.fullHeight;o+=u.offsetX*s/d,t-=u.offsetY*i/h,s*=u.width/d,i*=u.height/h}const c=this.filmOffset;c!==0&&(o+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class xp extends sv{constructor(e=-1,t=1,i=1,s=-1,o=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=o,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,o,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-e,u=i+e,c=s+t,d=s-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,u=o+h*this.view.width,c-=p*this.view.offsetY,d=c-p*this.view.height}this.projectionMatrix.makeOrthographic(o,u,c,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Wa=-90,Xa=1;class pM extends _i{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Wi(Wa,Xa,e,t);s.layers=this.layers,this.add(s);const o=new Wi(Wa,Xa,e,t);o.layers=this.layers,this.add(o);const u=new Wi(Wa,Xa,e,t);u.layers=this.layers,this.add(u);const c=new Wi(Wa,Xa,e,t);c.layers=this.layers,this.add(c);const d=new Wi(Wa,Xa,e,t);d.layers=this.layers,this.add(d);const h=new Wi(Wa,Xa,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,o,u,c,d]=t;for(const h of t)this.remove(h);if(e===sr)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),c.up.set(0,1,0),c.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===mc)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),c.up.set(0,-1,0),c.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,u,c,d,h,p]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(i,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(i,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(g,_,S),e.xr.enabled=E,i.texture.needsPMREMUpdate=!0}}class mM extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Hp=class Hp{constructor(e,t,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,s){const o=this.elements;return o[0]=e,o[2]=t,o[1]=i,o[3]=s,this}};Hp.prototype.isMatrix2=!0;let Hg=Hp;function Gg(a,e,t,i){const s=_M(i);switch(t){case X0:return a*e;case q0:return a*e/s.components*s.byteLength;case dp:return a*e/s.components*s.byteLength;case sa:return a*e*2/s.components*s.byteLength;case hp:return a*e*2/s.components*s.byteLength;case Y0:return a*e*3/s.components*s.byteLength;case Yi:return a*e*4/s.components*s.byteLength;case pp:return a*e*4/s.components*s.byteLength;case ic:case rc:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case sc:case ac:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case ph:case _h:return Math.max(a,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(a,8)*Math.max(e,8)/2;case gh:case vh:case Sh:case yh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*8;case xh:case fc:case Mh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Eh:return Math.floor((a+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((a+4)/5)*Math.floor((e+3)/4)*16;case wh:return Math.floor((a+4)/5)*Math.floor((e+4)/5)*16;case Ah:return Math.floor((a+5)/6)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((a+5)/6)*Math.floor((e+5)/6)*16;case Ch:return Math.floor((a+7)/8)*Math.floor((e+4)/5)*16;case bh:return Math.floor((a+7)/8)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((a+7)/8)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((a+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((a+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((a+9)/10)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((a+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((a+11)/12)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((a+11)/12)*Math.floor((e+11)/12)*16;case Oh:case kh:case Bh:return Math.ceil(a/4)*Math.ceil(e/4)*16;case zh:case Vh:return Math.ceil(a/4)*Math.ceil(e/4)*8;case dc:case Hh:return Math.ceil(a/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function _M(a){switch(a){case Pi:case V0:return{byteLength:1,components:1};case dl:case H0:case Ir:return{byteLength:2,components:1};case cp:case fp:return{byteLength:2,components:4};case cr:case up:case rr:return{byteLength:4,components:1};case G0:case W0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${a}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:lp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=lp);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function av(){let a=null,e=!1,t=null,i=null;function s(o,u){t(o,u),i=a.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&a!==null&&(i=a.requestAnimationFrame(s),e=!0)},stop:function(){a!==null&&a.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){a=o}}}function gM(a){const e=new WeakMap;function t(c,d){const h=c.array,p=c.usage,g=h.byteLength,_=a.createBuffer();a.bindBuffer(d,_),a.bufferData(d,h,p),c.onUploadCallback();let S;if(h instanceof Float32Array)S=a.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)S=a.HALF_FLOAT;else if(h instanceof Uint16Array)c.isFloat16BufferAttribute?S=a.HALF_FLOAT:S=a.UNSIGNED_SHORT;else if(h instanceof Int16Array)S=a.SHORT;else if(h instanceof Uint32Array)S=a.UNSIGNED_INT;else if(h instanceof Int32Array)S=a.INT;else if(h instanceof Int8Array)S=a.BYTE;else if(h instanceof Uint8Array)S=a.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)S=a.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:S,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:g}}function i(c,d,h){const p=d.array,g=d.updateRanges;if(a.bindBuffer(h,c),g.length===0)a.bufferSubData(h,0,p);else{g.sort((S,E)=>S.start-E.start);let _=0;for(let S=1;S<g.length;S++){const E=g[_],M=g[S];M.start<=E.start+E.count+1?E.count=Math.max(E.count,M.start+M.count-E.start):(++_,g[_]=M)}g.length=_+1;for(let S=0,E=g.length;S<E;S++){const M=g[S];a.bufferSubData(h,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}d.clearUpdateRanges()}d.onUploadCallback()}function s(c){return c.isInterleavedBufferAttribute&&(c=c.data),e.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=e.get(c);d&&(a.deleteBuffer(d.buffer),e.delete(c))}function u(c,d){if(c.isInterleavedBufferAttribute&&(c=c.data),c.isGLBufferAttribute){const p=e.get(c);(!p||p.version<c.version)&&e.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}const h=e.get(c);if(h===void 0)e.set(c,t(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,c,d),h.version=c.version}}return{get:s,remove:o,update:u}}var vM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xM=`#ifdef USE_ALPHAHASH
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
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,MM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,EM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
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
#endif`,wM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM=`#ifdef USE_BATCHING
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
#endif`,RM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,CM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,PM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,DM=`#ifdef USE_IRIDESCENCE
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
#endif`,LM=`#ifdef USE_BUMPMAP
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
#endif`,NM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,FM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,OM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,kM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,BM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,zM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,VM=`#define PI 3.141592653589793
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
} // validated`,HM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,GM=`vec3 transformedNormal = objectNormal;
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
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$M="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ZM=`#ifdef USE_ENVMAP
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
#endif`,jM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
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
#endif`,JM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,eE=`#ifdef USE_ENVMAP
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
#endif`,tE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sE=`#ifdef USE_GRADIENTMAP
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
}`,aE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,cE=`#ifdef USE_ENVMAP
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
#endif`,fE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mE=`PhysicalMaterial material;
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
#endif`,_E=`uniform sampler2D dfgLUT;
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
}`,gE=`
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
#endif`,vE=`#if defined( RE_IndirectDiffuse )
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
#endif`,xE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,SE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,yE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ME=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,EE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,TE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,AE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,RE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,CE=`#if defined( USE_POINTS_UV )
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
#endif`,bE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,PE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,DE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,LE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,NE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IE=`#ifdef USE_MORPHTARGETS
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
#endif`,UE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,FE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,OE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,kE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,VE=`#ifdef USE_NORMALMAP
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
#endif`,HE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,GE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,WE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,XE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,YE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$E=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,KE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ZE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,QE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,JE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,e1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,t1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,n1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,i1=`float getShadowMask() {
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
}`,r1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,s1=`#ifdef USE_SKINNING
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
#endif`,a1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,o1=`#ifdef USE_SKINNING
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
#endif`,l1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,u1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,c1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,d1=`#ifdef USE_TRANSMISSION
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
#endif`,h1=`#ifdef USE_TRANSMISSION
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
#endif`,p1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,g1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const v1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,x1=`uniform sampler2D t2D;
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
}`,S1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,M1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,E1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,T1=`#include <common>
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
}`,w1=`#if DEPTH_PACKING == 3200
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
}`,A1=`#define DISTANCE
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
}`,R1=`#define DISTANCE
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
}`,C1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P1=`uniform float scale;
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
}`,D1=`uniform vec3 diffuse;
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
}`,L1=`#include <common>
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
}`,N1=`uniform vec3 diffuse;
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
}`,I1=`#define LAMBERT
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
}`,U1=`#define LAMBERT
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
}`,F1=`#define MATCAP
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
}`,O1=`#define MATCAP
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
}`,k1=`#define NORMAL
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
}`,B1=`#define NORMAL
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
}`,z1=`#define PHONG
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
}`,V1=`#define PHONG
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
}`,H1=`#define STANDARD
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
}`,G1=`#define STANDARD
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
}`,W1=`#define TOON
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
}`,X1=`#define TOON
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
}`,Y1=`uniform float size;
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
}`,q1=`uniform vec3 diffuse;
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
}`,$1=`#include <common>
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
}`,K1=`uniform vec3 color;
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
}`,Z1=`uniform float rotation;
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
}`,j1=`uniform vec3 diffuse;
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
}`,ct={alphahash_fragment:vM,alphahash_pars_fragment:xM,alphamap_fragment:SM,alphamap_pars_fragment:yM,alphatest_fragment:MM,alphatest_pars_fragment:EM,aomap_fragment:TM,aomap_pars_fragment:wM,batching_pars_vertex:AM,batching_vertex:RM,begin_vertex:CM,beginnormal_vertex:bM,bsdfs:PM,iridescence_fragment:DM,bumpmap_pars_fragment:LM,clipping_planes_fragment:NM,clipping_planes_pars_fragment:IM,clipping_planes_pars_vertex:UM,clipping_planes_vertex:FM,color_fragment:OM,color_pars_fragment:kM,color_pars_vertex:BM,color_vertex:zM,common:VM,cube_uv_reflection_fragment:HM,defaultnormal_vertex:GM,displacementmap_pars_vertex:WM,displacementmap_vertex:XM,emissivemap_fragment:YM,emissivemap_pars_fragment:qM,colorspace_fragment:$M,colorspace_pars_fragment:KM,envmap_fragment:ZM,envmap_common_pars_fragment:jM,envmap_pars_fragment:QM,envmap_pars_vertex:JM,envmap_physical_pars_fragment:cE,envmap_vertex:eE,fog_vertex:tE,fog_pars_vertex:nE,fog_fragment:iE,fog_pars_fragment:rE,gradientmap_pars_fragment:sE,lightmap_pars_fragment:aE,lights_lambert_fragment:oE,lights_lambert_pars_fragment:lE,lights_pars_begin:uE,lights_toon_fragment:fE,lights_toon_pars_fragment:dE,lights_phong_fragment:hE,lights_phong_pars_fragment:pE,lights_physical_fragment:mE,lights_physical_pars_fragment:_E,lights_fragment_begin:gE,lights_fragment_maps:vE,lights_fragment_end:xE,lightprobes_pars_fragment:SE,logdepthbuf_fragment:yE,logdepthbuf_pars_fragment:ME,logdepthbuf_pars_vertex:EE,logdepthbuf_vertex:TE,map_fragment:wE,map_pars_fragment:AE,map_particle_fragment:RE,map_particle_pars_fragment:CE,metalnessmap_fragment:bE,metalnessmap_pars_fragment:PE,morphinstance_vertex:DE,morphcolor_vertex:LE,morphnormal_vertex:NE,morphtarget_pars_vertex:IE,morphtarget_vertex:UE,normal_fragment_begin:FE,normal_fragment_maps:OE,normal_pars_fragment:kE,normal_pars_vertex:BE,normal_vertex:zE,normalmap_pars_fragment:VE,clearcoat_normal_fragment_begin:HE,clearcoat_normal_fragment_maps:GE,clearcoat_pars_fragment:WE,iridescence_pars_fragment:XE,opaque_fragment:YE,packing:qE,premultiplied_alpha_fragment:$E,project_vertex:KE,dithering_fragment:ZE,dithering_pars_fragment:jE,roughnessmap_fragment:QE,roughnessmap_pars_fragment:JE,shadowmap_pars_fragment:e1,shadowmap_pars_vertex:t1,shadowmap_vertex:n1,shadowmask_pars_fragment:i1,skinbase_vertex:r1,skinning_pars_vertex:s1,skinning_vertex:a1,skinnormal_vertex:o1,specularmap_fragment:l1,specularmap_pars_fragment:u1,tonemapping_fragment:c1,tonemapping_pars_fragment:f1,transmission_fragment:d1,transmission_pars_fragment:h1,uv_pars_fragment:p1,uv_pars_vertex:m1,uv_vertex:_1,worldpos_vertex:g1,background_vert:v1,background_frag:x1,backgroundCube_vert:S1,backgroundCube_frag:y1,cube_vert:M1,cube_frag:E1,depth_vert:T1,depth_frag:w1,distance_vert:A1,distance_frag:R1,equirect_vert:C1,equirect_frag:b1,linedashed_vert:P1,linedashed_frag:D1,meshbasic_vert:L1,meshbasic_frag:N1,meshlambert_vert:I1,meshlambert_frag:U1,meshmatcap_vert:F1,meshmatcap_frag:O1,meshnormal_vert:k1,meshnormal_frag:B1,meshphong_vert:z1,meshphong_frag:V1,meshphysical_vert:H1,meshphysical_frag:G1,meshtoon_vert:W1,meshtoon_frag:X1,points_vert:Y1,points_frag:q1,shadow_vert:$1,shadow_frag:K1,sprite_vert:Z1,sprite_frag:j1},Ie={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new lt}},envmap:{envMap:{value:null},envMapRotation:{value:new lt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new lt},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new le},probesMax:{value:new le},probesResolution:{value:new le}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0},uvTransform:{value:new lt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new lt},alphaMap:{value:null},alphaMapTransform:{value:new lt},alphaTest:{value:0}}},nr={basic:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Hn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Hn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Hn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new bt(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Hn([Ie.points,Ie.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Hn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Hn([Ie.common,Ie.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Hn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Hn([Ie.sprite,Ie.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new lt}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distance:{uniforms:Hn([Ie.common,Ie.displacementmap,{referencePosition:{value:new le},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distance_vert,fragmentShader:ct.distance_frag},shadow:{uniforms:Hn([Ie.lights,Ie.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};nr.physical={uniforms:Hn([nr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new lt},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new lt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new lt},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new lt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new lt},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new lt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Qu={r:0,b:0,g:0},Q1=new hn,ov=new lt;ov.set(-1,0,0,0,1,0,0,0,1);function J1(a,e,t,i,s,o){const u=new bt(0);let c=s===!0?0:1,d,h,p=null,g=0,_=null;function S(b){let N=b.isScene===!0?b.background:null;if(N&&N.isTexture){const R=b.backgroundBlurriness>0;N=e.get(N,R)}return N}function E(b){let N=!1;const R=S(b);R===null?x(u,c):R&&R.isColor&&(x(R,1),N=!0);const P=a.xr.getEnvironmentBlendMode();P==="additive"?t.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(a.autoClear||N)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),a.clear(a.autoClearColor,a.autoClearDepth,a.autoClearStencil))}function M(b,N){const R=S(N);R&&(R.isCubeTexture||R.mapping===wc)?(h===void 0&&(h=new fr(new Tl(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:so(nr.backgroundCube.uniforms),vertexShader:nr.backgroundCube.vertexShader,fragmentShader:nr.backgroundCube.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=R,h.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(N.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ov),h.material.toneMapped=_t.getTransfer(R.colorSpace)!==Nt,(p!==R||g!==R.version||_!==a.toneMapping)&&(h.material.needsUpdate=!0,p=R,g=R.version,_=a.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new fr(new wl(2,2),new qi({name:"BackgroundMaterial",uniforms:so(nr.background.uniforms),vertexShader:nr.background.vertexShader,fragmentShader:nr.background.fragmentShader,side:vs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,d.material.toneMapped=_t.getTransfer(R.colorSpace)!==Nt,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(p!==R||g!==R.version||_!==a.toneMapping)&&(d.material.needsUpdate=!0,p=R,g=R.version,_=a.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function x(b,N){b.getRGB(Qu,rv(a)),t.buffers.color.setClear(Qu.r,Qu.g,Qu.b,N,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return u},setClearColor:function(b,N=1){u.set(b),c=N,x(u,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,x(u,c)},render:E,addToRenderList:M,dispose:y}}function eT(a,e){const t=a.getParameter(a.MAX_VERTEX_ATTRIBS),i={},s=_(null);let o=s,u=!1;function c(B,Y,j,re,W){let Q=!1;const V=g(B,re,j,Y);o!==V&&(o=V,h(o.object)),Q=S(B,re,j,W),Q&&E(B,re,j,W),W!==null&&e.update(W,a.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,R(B,Y,j,re),W!==null&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function d(){return a.createVertexArray()}function h(B){return a.bindVertexArray(B)}function p(B){return a.deleteVertexArray(B)}function g(B,Y,j,re){const W=re.wireframe===!0;let Q=i[Y.id];Q===void 0&&(Q={},i[Y.id]=Q);const V=B.isInstancedMesh===!0?B.id:0;let H=Q[V];H===void 0&&(H={},Q[V]=H);let oe=H[j.id];oe===void 0&&(oe={},H[j.id]=oe);let se=oe[W];return se===void 0&&(se=_(d()),oe[W]=se),se}function _(B){const Y=[],j=[],re=[];for(let W=0;W<t;W++)Y[W]=0,j[W]=0,re[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:j,attributeDivisors:re,object:B,attributes:{},index:null}}function S(B,Y,j,re){const W=o.attributes,Q=Y.attributes;let V=0;const H=j.getAttributes();for(const oe in H)if(H[oe].location>=0){const F=W[oe];let K=Q[oe];if(K===void 0&&(oe==="instanceMatrix"&&B.instanceMatrix&&(K=B.instanceMatrix),oe==="instanceColor"&&B.instanceColor&&(K=B.instanceColor)),F===void 0||F.attribute!==K||K&&F.data!==K.data)return!0;V++}return o.attributesNum!==V||o.index!==re}function E(B,Y,j,re){const W={},Q=Y.attributes;let V=0;const H=j.getAttributes();for(const oe in H)if(H[oe].location>=0){let F=Q[oe];F===void 0&&(oe==="instanceMatrix"&&B.instanceMatrix&&(F=B.instanceMatrix),oe==="instanceColor"&&B.instanceColor&&(F=B.instanceColor));const K={};K.attribute=F,F&&F.data&&(K.data=F.data),W[oe]=K,V++}o.attributes=W,o.attributesNum=V,o.index=re}function M(){const B=o.newAttributes;for(let Y=0,j=B.length;Y<j;Y++)B[Y]=0}function x(B){y(B,0)}function y(B,Y){const j=o.newAttributes,re=o.enabledAttributes,W=o.attributeDivisors;j[B]=1,re[B]===0&&(a.enableVertexAttribArray(B),re[B]=1),W[B]!==Y&&(a.vertexAttribDivisor(B,Y),W[B]=Y)}function b(){const B=o.newAttributes,Y=o.enabledAttributes;for(let j=0,re=Y.length;j<re;j++)Y[j]!==B[j]&&(a.disableVertexAttribArray(j),Y[j]=0)}function N(B,Y,j,re,W,Q,V){V===!0?a.vertexAttribIPointer(B,Y,j,W,Q):a.vertexAttribPointer(B,Y,j,re,W,Q)}function R(B,Y,j,re){M();const W=re.attributes,Q=j.getAttributes(),V=Y.defaultAttributeValues;for(const H in Q){const oe=Q[H];if(oe.location>=0){let se=W[H];if(se===void 0&&(H==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),H==="instanceColor"&&B.instanceColor&&(se=B.instanceColor)),se!==void 0){const F=se.normalized,K=se.itemSize,Le=e.get(se);if(Le===void 0)continue;const Fe=Le.buffer,Ue=Le.type,ae=Le.bytesPerElement,ve=Ue===a.INT||Ue===a.UNSIGNED_INT||se.gpuType===up;if(se.isInterleavedBufferAttribute){const me=se.data,Oe=me.stride,Qe=se.offset;if(me.isInstancedInterleavedBuffer){for(let Je=0;Je<oe.locationSize;Je++)y(oe.location+Je,me.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Je=0;Je<oe.locationSize;Je++)x(oe.location+Je);a.bindBuffer(a.ARRAY_BUFFER,Fe);for(let Je=0;Je<oe.locationSize;Je++)N(oe.location+Je,K/oe.locationSize,Ue,F,Oe*ae,(Qe+K/oe.locationSize*Je)*ae,ve)}else{if(se.isInstancedBufferAttribute){for(let me=0;me<oe.locationSize;me++)y(oe.location+me,se.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let me=0;me<oe.locationSize;me++)x(oe.location+me);a.bindBuffer(a.ARRAY_BUFFER,Fe);for(let me=0;me<oe.locationSize;me++)N(oe.location+me,K/oe.locationSize,Ue,F,K*ae,K/oe.locationSize*me*ae,ve)}}else if(V!==void 0){const F=V[H];if(F!==void 0)switch(F.length){case 2:a.vertexAttrib2fv(oe.location,F);break;case 3:a.vertexAttrib3fv(oe.location,F);break;case 4:a.vertexAttrib4fv(oe.location,F);break;default:a.vertexAttrib1fv(oe.location,F)}}}}b()}function P(){D();for(const B in i){const Y=i[B];for(const j in Y){const re=Y[j];for(const W in re){const Q=re[W];for(const V in Q)p(Q[V].object),delete Q[V];delete re[W]}}delete i[B]}}function L(B){if(i[B.id]===void 0)return;const Y=i[B.id];for(const j in Y){const re=Y[j];for(const W in re){const Q=re[W];for(const V in Q)p(Q[V].object),delete Q[V];delete re[W]}}delete i[B.id]}function I(B){for(const Y in i){const j=i[Y];for(const re in j){const W=j[re];if(W[B.id]===void 0)continue;const Q=W[B.id];for(const V in Q)p(Q[V].object),delete Q[V];delete W[B.id]}}}function T(B){for(const Y in i){const j=i[Y],re=B.isInstancedMesh===!0?B.id:0,W=j[re];if(W!==void 0){for(const Q in W){const V=W[Q];for(const H in V)p(V[H].object),delete V[H];delete W[Q]}delete j[re],Object.keys(j).length===0&&delete i[Y]}}}function D(){k(),u=!0,o!==s&&(o=s,h(o.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:c,reset:D,resetDefaultState:k,dispose:P,releaseStatesOfGeometry:L,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:M,enableAttribute:x,disableUnusedAttributes:b}}function tT(a,e,t){let i;function s(d){i=d}function o(d,h){a.drawArrays(i,d,h),t.update(h,i,1)}function u(d,h,p){p!==0&&(a.drawArraysInstanced(i,d,h,p),t.update(h,i,p))}function c(d,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,d,0,h,0,p);let _=0;for(let S=0;S<p;S++)_+=h[S];t.update(_,i,1)}this.setMode=s,this.render=o,this.renderInstances=u,this.renderMultiDraw=c}function nT(a,e,t,i){let s;function o(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=a.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==Yi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_FORMAT))}function c(I){const T=I===Ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Pi&&i.convert(I)!==a.getParameter(a.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==rr&&!T)}function d(I){if(I==="highp"){if(a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.HIGH_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&a.getShaderPrecisionFormat(a.VERTEX_SHADER,a.MEDIUM_FLOAT).precision>0&&a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(st("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const g=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&st("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const S=a.getParameter(a.MAX_TEXTURE_IMAGE_UNITS),E=a.getParameter(a.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=a.getParameter(a.MAX_TEXTURE_SIZE),x=a.getParameter(a.MAX_CUBE_MAP_TEXTURE_SIZE),y=a.getParameter(a.MAX_VERTEX_ATTRIBS),b=a.getParameter(a.MAX_VERTEX_UNIFORM_VECTORS),N=a.getParameter(a.MAX_VARYING_VECTORS),R=a.getParameter(a.MAX_FRAGMENT_UNIFORM_VECTORS),P=a.getParameter(a.MAX_SAMPLES),L=a.getParameter(a.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:c,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:_,maxTextures:S,maxVertexTextures:E,maxTextureSize:M,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:b,maxVaryings:N,maxFragmentUniforms:R,maxSamples:P,samples:L}}function iT(a){const e=this;let t=null,i=0,s=!1,o=!1;const u=new qs,c=new lt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||i!==0||s;return s=_,i=g.length,S},this.beginShadows=function(){o=!0,p(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,_){t=p(g,_,0)},this.setState=function(g,_,S){const E=g.clippingPlanes,M=g.clipIntersection,x=g.clipShadows,y=a.get(g);if(!s||E===null||E.length===0||o&&!x)o?p(null):h();else{const b=o?0:i,N=b*4;let R=y.clippingState||null;d.value=R,R=p(E,_,N,S);for(let P=0;P!==N;++P)R[P]=t[P];y.clippingState=R,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(g,_,S,E){const M=g!==null?g.length:0;let x=null;if(M!==0){if(x=d.value,E!==!0||x===null){const y=S+M*4,b=_.matrixWorldInverse;c.getNormalMatrix(b),(x===null||x.length<y)&&(x=new Float32Array(y));for(let N=0,R=S;N!==M;++N,R+=4)u.copy(g[N]).applyMatrix4(b,c),u.normal.toArray(x,R),x[R+3]=u.constant}d.value=x,d.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,x}}const ds=4,Wg=[.125,.215,.35,.446,.526,.582],Zs=20,rT=256,nl=new xp,Xg=new bt;let Hd=null,Gd=0,Wd=0,Xd=!1;const sT=new le;class Yg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,s=100,o={}){const{size:u=256,position:c=sT}=o;Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,i,s,d,c),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Hd,Gd,Wd),this._renderer.xr.enabled=Xd,e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ra||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Wd=this._renderer.getActiveMipmapLevel(),Xd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ir,format:Yi,colorSpace:hc,depthBuffer:!1},s=qg(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qg(e,t,i);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=aT(o)),this._blurMaterial=lT(o,e,t),this._ggxMaterial=oT(o,e,t)}return s}_compileMaterial(e){const t=new fr(new kr,e);this._renderer.compile(t,nl)}_sceneToCubeUV(e,t,i,s,o){const d=new Wi(90,1,t,i),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,S=g.toneMapping;g.getClearColor(Xg),g.toneMapping=or,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fr(new Tl,new ev({name:"PMREM.Background",side:ei,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,x=M.material;let y=!1;const b=e.background;b?b.isColor&&(x.color.copy(b),e.background=null,y=!0):(x.color.copy(Xg),y=!0);for(let N=0;N<6;N++){const R=N%3;R===0?(d.up.set(0,h[N],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+p[N],o.y,o.z)):R===1?(d.up.set(0,0,h[N]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+p[N],o.z)):(d.up.set(0,h[N],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+p[N]));const P=this._cubeSize;Ya(s,R*P,N>2?P:0,P,P),g.setRenderTarget(s),y&&g.render(M,d),g.render(e,d)}g.toneMapping=S,g.autoClear=_,e.background=b}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===ra||e.mapping===io;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const o=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=o;const c=o.uniforms;c.envMap.value=e;const d=this._cubeSize;Ya(t,0,0,3*d,2*d),i.setRenderTarget(t),i.render(u,nl)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let o=1;o<s;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=i}_applyGGXFilter(e,t,i){const s=this._renderer,o=this._pingPongRenderTarget,u=this._ggxMaterial,c=this._lodMeshes[i];c.material=u;const d=u.uniforms,h=i/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-p*p),_=0+h*1.25,S=g*_,{_lodMax:E}=this,M=this._sizeLods[i],x=3*M*(i>E-ds?i-E+ds:0),y=4*(this._cubeSize-M);d.envMap.value=e.texture,d.roughness.value=S,d.mipInt.value=E-t,Ya(o,x,y,3*M,2*M),s.setRenderTarget(o),s.render(c,nl),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=E-i,Ya(e,x,y,3*M,2*M),s.setRenderTarget(e),s.render(c,nl)}_blur(e,t,i,s,o){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,i,s,"latitudinal",o),this._halfBlur(u,e,i,i,s,"longitudinal",o)}_halfBlur(e,t,i,s,o,u,c){const d=this._renderer,h=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Et("blur direction must be either latitudinal or longitudinal!");const p=3,g=this._lodMeshes[s];g.material=h;const _=h.uniforms,S=this._sizeLods[i]-1,E=isFinite(o)?Math.PI/(2*S):2*Math.PI/(2*Zs-1),M=o/E,x=isFinite(o)?1+Math.floor(p*M):Zs;x>Zs&&st(`sigmaRadians, ${o}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Zs}`);const y=[];let b=0;for(let I=0;I<Zs;++I){const T=I/M,D=Math.exp(-T*T/2);y.push(D),I===0?b+=D:I<x&&(b+=2*D)}for(let I=0;I<y.length;I++)y[I]=y[I]/b;_.envMap.value=e.texture,_.samples.value=x,_.weights.value=y,_.latitudinal.value=u==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:N}=this;_.dTheta.value=E,_.mipInt.value=N-i;const R=this._sizeLods[s],P=3*R*(s>N-ds?s-N+ds:0),L=4*(this._cubeSize-R);Ya(t,P,L,3*R,2*R),d.setRenderTarget(t),d.render(g,nl)}}function aT(a){const e=[],t=[],i=[];let s=a;const o=a-ds+1+Wg.length;for(let u=0;u<o;u++){const c=Math.pow(2,s);e.push(c);let d=1/c;u>a-ds?d=Wg[u-a+ds-1]:u===0&&(d=0),t.push(d);const h=1/(c-2),p=-h,g=1+h,_=[p,p,g,p,g,g,p,p,g,g,p,g],S=6,E=6,M=3,x=2,y=1,b=new Float32Array(M*E*S),N=new Float32Array(x*E*S),R=new Float32Array(y*E*S);for(let L=0;L<S;L++){const I=L%3*2/3-1,T=L>2?0:-1,D=[I,T,0,I+2/3,T,0,I+2/3,T+1,0,I,T,0,I+2/3,T+1,0,I,T+1,0];b.set(D,M*E*L),N.set(_,x*E*L);const k=[L,L,L,L,L,L];R.set(k,y*E*L)}const P=new kr;P.setAttribute("position",new ur(b,M)),P.setAttribute("uv",new ur(N,x)),P.setAttribute("faceIndex",new ur(R,y)),i.push(new fr(P,null)),s>ds&&s--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function qg(a,e,t){const i=new lr(a,e,t);return i.texture.mapping=wc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(a,e,t,i,s){a.viewport.set(e,t,i,s),a.scissor.set(e,t,i,s)}function oT(a,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rT,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function lT(a,e,t){const i=new Float32Array(Zs),s=new le(0,1,0);return new qi({name:"SphericalGaussianBlur",defines:{n:Zs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${a}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function $g(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rc(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Kg(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function Rc(){return`

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
	`}class lv extends lr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new nv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Tl(5,5,5),o=new qi({name:"CubemapFromEquirect",uniforms:so(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ei,blending:Dr});o.uniforms.tEquirect.value=t;const u=new fr(s,o),c=t.minFilter;return t.minFilter===js&&(t.minFilter=On),new pM(1,10,this).update(e,u),t.minFilter=c,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const o=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,i,s);e.setRenderTarget(o)}}function uT(a){let e=new WeakMap,t=new WeakMap,i=null;function s(_,S=!1){return _==null?null:S?u(_):o(_)}function o(_){if(_&&_.isTexture){const S=_.mapping;if(S===md||S===_d)if(e.has(_)){const E=e.get(_).texture;return c(E,_.mapping)}else{const E=_.image;if(E&&E.height>0){const M=new lv(E.height);return M.fromEquirectangularTexture(a,_),e.set(_,M),_.addEventListener("dispose",h),c(M.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const S=_.mapping,E=S===md||S===_d,M=S===ra||S===io;if(E||M){let x=t.get(_);const y=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return i===null&&(i=new Yg(a)),x=E?i.fromEquirectangular(_,x):i.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const b=_.image;return E&&b&&b.height>0||M&&b&&d(b)?(i===null&&(i=new Yg(a)),x=E?i.fromEquirectangular(_):i.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",p),x.texture):null}}}return _}function c(_,S){return S===md?_.mapping=ra:S===_d&&(_.mapping=io),_}function d(_){let S=0;const E=6;for(let M=0;M<E;M++)_[M]!==void 0&&S++;return S===E}function h(_){const S=_.target;S.removeEventListener("dispose",h);const E=e.get(S);E!==void 0&&(e.delete(S),E.dispose())}function p(_){const S=_.target;S.removeEventListener("dispose",p);const E=t.get(S);E!==void 0&&(t.delete(S),E.dispose())}function g(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:g}}function cT(a){const e={};function t(i){if(e[i]!==void 0)return e[i];const s=a.getExtension(i);return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&ja("WebGLRenderer: "+i+" extension not supported."),s}}}function fT(a,e,t,i){const s={},o=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",u),delete s[_.id];const S=o.get(_);S&&(e.remove(S),o.delete(_)),i.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function d(g){const _=g.attributes;for(const S in _)e.update(_[S],a.ARRAY_BUFFER)}function h(g){const _=[],S=g.index,E=g.attributes.position;let M=0;if(E===void 0)return;if(S!==null){const b=S.array;M=S.version;for(let N=0,R=b.length;N<R;N+=3){const P=b[N+0],L=b[N+1],I=b[N+2];_.push(P,L,L,I,I,P)}}else{const b=E.array;M=E.version;for(let N=0,R=b.length/3-1;N<R;N+=3){const P=N+0,L=N+1,I=N+2;_.push(P,L,L,I,I,P)}}const x=new(E.count>=65535?J0:Q0)(_,1);x.version=M;const y=o.get(g);y&&e.remove(y),o.set(g,x)}function p(g){const _=o.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&h(g)}else h(g);return o.get(g)}return{get:c,update:d,getWireframeAttribute:p}}function dT(a,e,t){let i;function s(g){i=g}let o,u;function c(g){o=g.type,u=g.bytesPerElement}function d(g,_){a.drawElements(i,_,o,g*u),t.update(_,i,1)}function h(g,_,S){S!==0&&(a.drawElementsInstanced(i,_,o,g*u,S),t.update(_,i,S))}function p(g,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,_,0,o,g,0,S);let M=0;for(let x=0;x<S;x++)M+=_[x];t.update(M,i,1)}this.setMode=s,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=p}function hT(a){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,u,c){switch(t.calls++,u){case a.TRIANGLES:t.triangles+=c*(o/3);break;case a.LINES:t.lines+=c*(o/2);break;case a.LINE_STRIP:t.lines+=c*(o-1);break;case a.LINE_LOOP:t.lines+=c*o;break;case a.POINTS:t.points+=c*o;break;default:Et("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function pT(a,e,t){const i=new WeakMap,s=new sn;function o(u,c,d){const h=u.morphTargetInfluences,p=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=p!==void 0?p.length:0;let _=i.get(c);if(_===void 0||_.count!==g){let k=function(){T.dispose(),i.delete(c),c.removeEventListener("dispose",k)};var S=k;_!==void 0&&_.texture.dispose();const E=c.morphAttributes.position!==void 0,M=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],b=c.morphAttributes.normal||[],N=c.morphAttributes.color||[];let R=0;E===!0&&(R=1),M===!0&&(R=2),x===!0&&(R=3);let P=c.attributes.position.count*R,L=1;P>e.maxTextureSize&&(L=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const I=new Float32Array(P*L*4*g),T=new K0(I,P,L,g);T.type=rr,T.needsUpdate=!0;const D=R*4;for(let B=0;B<g;B++){const Y=y[B],j=b[B],re=N[B],W=P*L*4*B;for(let Q=0;Q<Y.count;Q++){const V=Q*D;E===!0&&(s.fromBufferAttribute(Y,Q),I[W+V+0]=s.x,I[W+V+1]=s.y,I[W+V+2]=s.z,I[W+V+3]=0),M===!0&&(s.fromBufferAttribute(j,Q),I[W+V+4]=s.x,I[W+V+5]=s.y,I[W+V+6]=s.z,I[W+V+7]=0),x===!0&&(s.fromBufferAttribute(re,Q),I[W+V+8]=s.x,I[W+V+9]=s.y,I[W+V+10]=s.z,I[W+V+11]=re.itemSize===4?s.w:1)}}_={count:g,texture:T,size:new yt(P,L)},i.set(c,_),c.addEventListener("dispose",k)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(a,"morphTexture",u.morphTexture,t);else{let E=0;for(let x=0;x<h.length;x++)E+=h[x];const M=c.morphTargetsRelative?1:1-E;d.getUniforms().setValue(a,"morphTargetBaseInfluence",M),d.getUniforms().setValue(a,"morphTargetInfluences",h)}d.getUniforms().setValue(a,"morphTargetsTexture",_.texture,t),d.getUniforms().setValue(a,"morphTargetsTextureSize",_.size)}return{update:o}}function mT(a,e,t,i,s){let o=new WeakMap;function u(h){const p=s.render.frame,g=h.geometry,_=e.get(h,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==p&&(t.update(h.instanceMatrix,a.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,a.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const S=h.skeleton;o.get(S)!==p&&(S.update(),o.set(S,p))}return _}function c(){o=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),i.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:u,dispose:c}}const _T={[N0]:"LINEAR_TONE_MAPPING",[I0]:"REINHARD_TONE_MAPPING",[U0]:"CINEON_TONE_MAPPING",[F0]:"ACES_FILMIC_TONE_MAPPING",[k0]:"AGX_TONE_MAPPING",[B0]:"NEUTRAL_TONE_MAPPING",[O0]:"CUSTOM_TONE_MAPPING"};function gT(a,e,t,i,s,o){const u=new lr(e,t,{type:a,depthBuffer:s,stencilBuffer:o,samples:i?4:0,depthTexture:s?new ro(e,t):void 0}),c=new lr(e,t,{type:Ir,depthBuffer:!1,stencilBuffer:!1}),d=new kr;d.setAttribute("position",new Nr([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Nr([0,2,0,0,2,0],2));const h=new fM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),p=new fr(d,h),g=new xp(-1,1,1,-1,0,1);let _=null,S=null,E=!1,M,x=null,y=[],b=!1;this.setSize=function(N,R){u.setSize(N,R),c.setSize(N,R);for(let P=0;P<y.length;P++){const L=y[P];L.setSize&&L.setSize(N,R)}},this.setEffects=function(N){y=N,b=y.length>0&&y[0].isRenderPass===!0;const R=u.width,P=u.height;for(let L=0;L<y.length;L++){const I=y[L];I.setSize&&I.setSize(R,P)}},this.begin=function(N,R){if(E||N.toneMapping===or&&y.length===0)return!1;if(x=R,R!==null){const P=R.width,L=R.height;(u.width!==P||u.height!==L)&&this.setSize(P,L)}return b===!1&&N.setRenderTarget(u),M=N.toneMapping,N.toneMapping=or,!0},this.hasRenderPass=function(){return b},this.end=function(N,R){N.toneMapping=M,E=!0;let P=u,L=c;for(let I=0;I<y.length;I++){const T=y[I];if(T.enabled!==!1&&(T.render(N,L,P,R),T.needsSwap!==!1)){const D=P;P=L,L=D}}if(_!==N.outputColorSpace||S!==N.toneMapping){_=N.outputColorSpace,S=N.toneMapping,h.defines={},_t.getTransfer(_)===Nt&&(h.defines.SRGB_TRANSFER="");const I=_T[S];I&&(h.defines[I]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=P.texture,N.setRenderTarget(x),N.render(p,g),x=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),c.dispose(),d.dispose(),h.dispose()}}const uv=new Gn,Wh=new ro(1,1),cv=new K0,fv=new Vy,dv=new nv,Zg=[],jg=[],Qg=new Float32Array(16),Jg=new Float32Array(9),e0=new Float32Array(4);function po(a,e,t){const i=a[0];if(i<=0||i>0)return a;const s=e*t;let o=Zg[s];if(o===void 0&&(o=new Float32Array(s),Zg[s]=o),e!==0){i.toArray(o,0);for(let u=1,c=0;u!==e;++u)c+=t,a[u].toArray(o,c)}return o}function _n(a,e){if(a.length!==e.length)return!1;for(let t=0,i=a.length;t<i;t++)if(a[t]!==e[t])return!1;return!0}function gn(a,e){for(let t=0,i=e.length;t<i;t++)a[t]=e[t]}function Cc(a,e){let t=jg[e];t===void 0&&(t=new Int32Array(e),jg[e]=t);for(let i=0;i!==e;++i)t[i]=a.allocateTextureUnit();return t}function vT(a,e){const t=this.cache;t[0]!==e&&(a.uniform1f(this.addr,e),t[0]=e)}function xT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;a.uniform2fv(this.addr,e),gn(t,e)}}function ST(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(a.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;a.uniform3fv(this.addr,e),gn(t,e)}}function yT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;a.uniform4fv(this.addr,e),gn(t,e)}}function MT(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;a.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(_n(t,i))return;e0.set(i),a.uniformMatrix2fv(this.addr,!1,e0),gn(t,i)}}function ET(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;a.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(_n(t,i))return;Jg.set(i),a.uniformMatrix3fv(this.addr,!1,Jg),gn(t,i)}}function TT(a,e){const t=this.cache,i=e.elements;if(i===void 0){if(_n(t,e))return;a.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(_n(t,i))return;Qg.set(i),a.uniformMatrix4fv(this.addr,!1,Qg),gn(t,i)}}function wT(a,e){const t=this.cache;t[0]!==e&&(a.uniform1i(this.addr,e),t[0]=e)}function AT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;a.uniform2iv(this.addr,e),gn(t,e)}}function RT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;a.uniform3iv(this.addr,e),gn(t,e)}}function CT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;a.uniform4iv(this.addr,e),gn(t,e)}}function bT(a,e){const t=this.cache;t[0]!==e&&(a.uniform1ui(this.addr,e),t[0]=e)}function PT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(a.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;a.uniform2uiv(this.addr,e),gn(t,e)}}function DT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(a.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;a.uniform3uiv(this.addr,e),gn(t,e)}}function LT(a,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(a.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;a.uniform4uiv(this.addr,e),gn(t,e)}}function NT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s);let o;this.type===a.SAMPLER_2D_SHADOW?(Wh.compareFunction=t.isReversedDepthBuffer()?_p:mp,o=Wh):o=uv,t.setTexture2D(e||o,s)}function IT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fv,s)}function UT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||dv,s)}function FT(a,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(a.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||cv,s)}function OT(a){switch(a){case 5126:return vT;case 35664:return xT;case 35665:return ST;case 35666:return yT;case 35674:return MT;case 35675:return ET;case 35676:return TT;case 5124:case 35670:return wT;case 35667:case 35671:return AT;case 35668:case 35672:return RT;case 35669:case 35673:return CT;case 5125:return bT;case 36294:return PT;case 36295:return DT;case 36296:return LT;case 35678:case 36198:case 36298:case 36306:case 35682:return NT;case 35679:case 36299:case 36307:return IT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return FT}}function kT(a,e){a.uniform1fv(this.addr,e)}function BT(a,e){const t=po(e,this.size,2);a.uniform2fv(this.addr,t)}function zT(a,e){const t=po(e,this.size,3);a.uniform3fv(this.addr,t)}function VT(a,e){const t=po(e,this.size,4);a.uniform4fv(this.addr,t)}function HT(a,e){const t=po(e,this.size,4);a.uniformMatrix2fv(this.addr,!1,t)}function GT(a,e){const t=po(e,this.size,9);a.uniformMatrix3fv(this.addr,!1,t)}function WT(a,e){const t=po(e,this.size,16);a.uniformMatrix4fv(this.addr,!1,t)}function XT(a,e){a.uniform1iv(this.addr,e)}function YT(a,e){a.uniform2iv(this.addr,e)}function qT(a,e){a.uniform3iv(this.addr,e)}function $T(a,e){a.uniform4iv(this.addr,e)}function KT(a,e){a.uniform1uiv(this.addr,e)}function ZT(a,e){a.uniform2uiv(this.addr,e)}function jT(a,e){a.uniform3uiv(this.addr,e)}function QT(a,e){a.uniform4uiv(this.addr,e)}function JT(a,e,t){const i=this.cache,s=e.length,o=Cc(t,s);_n(i,o)||(a.uniform1iv(this.addr,o),gn(i,o));let u;this.type===a.SAMPLER_2D_SHADOW?u=Wh:u=uv;for(let c=0;c!==s;++c)t.setTexture2D(e[c]||u,o[c])}function ew(a,e,t){const i=this.cache,s=e.length,o=Cc(t,s);_n(i,o)||(a.uniform1iv(this.addr,o),gn(i,o));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||fv,o[u])}function tw(a,e,t){const i=this.cache,s=e.length,o=Cc(t,s);_n(i,o)||(a.uniform1iv(this.addr,o),gn(i,o));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||dv,o[u])}function nw(a,e,t){const i=this.cache,s=e.length,o=Cc(t,s);_n(i,o)||(a.uniform1iv(this.addr,o),gn(i,o));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||cv,o[u])}function iw(a){switch(a){case 5126:return kT;case 35664:return BT;case 35665:return zT;case 35666:return VT;case 35674:return HT;case 35675:return GT;case 35676:return WT;case 5124:case 35670:return XT;case 35667:case 35671:return YT;case 35668:case 35672:return qT;case 35669:case 35673:return $T;case 5125:return KT;case 36294:return ZT;case 36295:return jT;case 36296:return QT;case 35678:case 36198:case 36298:case 36306:case 35682:return JT;case 35679:case 36299:case 36307:return ew;case 35680:case 36300:case 36308:case 36293:return tw;case 36289:case 36303:case 36311:case 36292:return nw}}class rw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=OT(t.type)}}class sw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=iw(t.type)}}class aw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let o=0,u=s.length;o!==u;++o){const c=s[o];c.setValue(e,t[c.id],i)}}}const Yd=/(\w+)(\])?(\[|\.)?/g;function t0(a,e){a.seq.push(e),a.map[e.id]=e}function ow(a,e,t){const i=a.name,s=i.length;for(Yd.lastIndex=0;;){const o=Yd.exec(i),u=Yd.lastIndex;let c=o[1];const d=o[2]==="]",h=o[3];if(d&&(c=c|0),h===void 0||h==="["&&u+2===s){t0(t,h===void 0?new rw(c,a,e):new sw(c,a,e));break}else{let g=t.map[c];g===void 0&&(g=new aw(c),t0(t,g)),t=g}}}class oc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<i;++u){const c=e.getActiveUniform(t,u),d=e.getUniformLocation(t,c.name);ow(c,d,this)}const s=[],o=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):o.push(u);s.length>0&&(this.seq=s.concat(o))}setValue(e,t,i,s){const o=this.map[t];o!==void 0&&o.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let o=0,u=t.length;o!==u;++o){const c=t[o],d=i[c.id];d.needsUpdate!==!1&&c.setValue(e,d.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,o=e.length;s!==o;++s){const u=e[s];u.id in t&&i.push(u)}return i}}function n0(a,e,t){const i=a.createShader(e);return a.shaderSource(i,t),a.compileShader(i),i}const lw=37297;let uw=0;function cw(a,e){const t=a.split(`
`),i=[],s=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let u=s;u<o;u++){const c=u+1;i.push(`${c===e?">":" "} ${c}: ${t[u]}`)}return i.join(`
`)}const i0=new lt;function fw(a){_t._getMatrix(i0,_t.workingColorSpace,a);const e=`mat3( ${i0.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(a)){case pc:return[e,"LinearTransferOETF"];case Nt:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",a),[e,"LinearTransferOETF"]}}function r0(a,e,t){const i=a.getShaderParameter(e,a.COMPILE_STATUS),o=(a.getShaderInfoLog(e)||"").trim();if(i&&o==="")return"";const u=/ERROR: 0:(\d+)/.exec(o);if(u){const c=parseInt(u[1]);return t.toUpperCase()+`

`+o+`

`+cw(a.getShaderSource(e),c)}else return o}function dw(a,e){const t=fw(e);return[`vec4 ${a}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const hw={[N0]:"Linear",[I0]:"Reinhard",[U0]:"Cineon",[F0]:"ACESFilmic",[k0]:"AgX",[B0]:"Neutral",[O0]:"Custom"};function pw(a,e){const t=hw[e];return t===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+a+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+a+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ju=new le;function mw(){_t.getLuminanceCoefficients(Ju);const a=Ju.x.toFixed(4),e=Ju.y.toFixed(4),t=Ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${a}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function _w(a){return[a.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",a.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(al).join(`
`)}function gw(a){const e=[];for(const t in a){const i=a[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function vw(a,e){const t={},i=a.getProgramParameter(e,a.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=a.getActiveAttrib(e,s),u=o.name;let c=1;o.type===a.FLOAT_MAT2&&(c=2),o.type===a.FLOAT_MAT3&&(c=3),o.type===a.FLOAT_MAT4&&(c=4),t[u]={type:o.type,location:a.getAttribLocation(e,u),locationSize:c}}return t}function al(a){return a!==""}function s0(a,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return a.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a0(a,e){return a.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xh(a){return a.replace(xw,yw)}const Sw=new Map;function yw(a,e){let t=ct[e];if(t===void 0){const i=Sw.get(e);if(i!==void 0)t=ct[i],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xh(t)}const Mw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function o0(a){return a.replace(Mw,Ew)}function Ew(a,e,t,i){let s="";for(let o=parseInt(e);o<parseInt(t);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function l0(a){let e=`precision ${a.precision} float;
	precision ${a.precision} int;
	precision ${a.precision} sampler2D;
	precision ${a.precision} samplerCube;
	precision ${a.precision} sampler3D;
	precision ${a.precision} sampler2DArray;
	precision ${a.precision} sampler2DShadow;
	precision ${a.precision} samplerCubeShadow;
	precision ${a.precision} sampler2DArrayShadow;
	precision ${a.precision} isampler2D;
	precision ${a.precision} isampler3D;
	precision ${a.precision} isamplerCube;
	precision ${a.precision} isampler2DArray;
	precision ${a.precision} usampler2D;
	precision ${a.precision} usampler3D;
	precision ${a.precision} usamplerCube;
	precision ${a.precision} usampler2DArray;
	`;return a.precision==="highp"?e+=`
#define HIGH_PRECISION`:a.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:a.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Tw={[nc]:"SHADOWMAP_TYPE_PCF",[sl]:"SHADOWMAP_TYPE_VSM"};function ww(a){return Tw[a.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Aw={[ra]:"ENVMAP_TYPE_CUBE",[io]:"ENVMAP_TYPE_CUBE",[wc]:"ENVMAP_TYPE_CUBE_UV"};function Rw(a){return a.envMap===!1?"ENVMAP_TYPE_CUBE":Aw[a.envMapMode]||"ENVMAP_TYPE_CUBE"}const Cw={[io]:"ENVMAP_MODE_REFRACTION"};function bw(a){return a.envMap===!1?"ENVMAP_MODE_REFLECTION":Cw[a.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Pw={[L0]:"ENVMAP_BLENDING_MULTIPLY",[Sy]:"ENVMAP_BLENDING_MIX",[yy]:"ENVMAP_BLENDING_ADD"};function Dw(a){return a.envMap===!1?"ENVMAP_BLENDING_NONE":Pw[a.combine]||"ENVMAP_BLENDING_NONE"}function Lw(a){const e=a.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Nw(a,e,t,i){const s=a.getContext(),o=t.defines;let u=t.vertexShader,c=t.fragmentShader;const d=ww(t),h=Rw(t),p=bw(t),g=Dw(t),_=Lw(t),S=_w(t),E=gw(o),M=s.createProgram();let x,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(al).join(`
`),x.length>0&&(x+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(al).join(`
`),y.length>0&&(y+=`
`)):(x=[l0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(al).join(`
`),y=[l0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==or?"#define TONE_MAPPING":"",t.toneMapping!==or?ct.tonemapping_pars_fragment:"",t.toneMapping!==or?pw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.colorspace_pars_fragment,dw("linearToOutputTexel",t.outputColorSpace),mw(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(al).join(`
`)),u=Xh(u),u=s0(u,t),u=a0(u,t),c=Xh(c),c=s0(c,t),c=a0(c,t),u=o0(u),c=o0(c),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,x=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,y=["#define varying in",t.glslVersion===Mg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Mg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const N=b+x+u,R=b+y+c,P=n0(s,s.VERTEX_SHADER,N),L=n0(s,s.FRAGMENT_SHADER,R);s.attachShader(M,P),s.attachShader(M,L),t.index0AttributeName!==void 0?s.bindAttribLocation(M,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(M,0,"position"),s.linkProgram(M);function I(B){if(a.debug.checkShaderErrors){const Y=s.getProgramInfoLog(M)||"",j=s.getShaderInfoLog(P)||"",re=s.getShaderInfoLog(L)||"",W=Y.trim(),Q=j.trim(),V=re.trim();let H=!0,oe=!0;if(s.getProgramParameter(M,s.LINK_STATUS)===!1)if(H=!1,typeof a.debug.onShaderError=="function")a.debug.onShaderError(s,M,P,L);else{const se=r0(s,P,"vertex"),F=r0(s,L,"fragment");Et("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(M,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+W+`
`+se+`
`+F)}else W!==""?st("WebGLProgram: Program Info Log:",W):(Q===""||V==="")&&(oe=!1);oe&&(B.diagnostics={runnable:H,programLog:W,vertexShader:{log:Q,prefix:x},fragmentShader:{log:V,prefix:y}})}s.deleteShader(P),s.deleteShader(L),T=new oc(s,M),D=vw(s,M)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let D;this.getAttributes=function(){return D===void 0&&I(this),D};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(M,lw)),k},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(M),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uw++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=P,this.fragmentShader=L,this}let Iw=0;class Uw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Fw(e),t.set(e,i)),i}}class Fw{constructor(e){this.id=Iw++,this.code=e,this.usedTimes=0}}function Ow(a){return a===sa||a===fc||a===dc}function kw(a,e,t,i,s,o){const u=new Z0,c=new Uw,d=new Set,h=[],p=new Map,g=i.logarithmicDepthBuffer;let _=i.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(T){return d.add(T),T===0?"uv":`uv${T}`}function M(T,D,k,B,Y,j){const re=B.fog,W=Y.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,V=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,H=e.get(T.envMap||Q,V),oe=H&&H.mapping===wc?H.image.height:null,se=S[T.type];T.precision!==null&&(_=i.getMaxPrecision(T.precision),_!==T.precision&&st("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const F=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,K=F!==void 0?F.length:0;let Le=0;W.morphAttributes.position!==void 0&&(Le=1),W.morphAttributes.normal!==void 0&&(Le=2),W.morphAttributes.color!==void 0&&(Le=3);let Fe,Ue,ae,ve;if(se){const He=nr[se];Fe=He.vertexShader,Ue=He.fragmentShader}else{Fe=T.vertexShader,Ue=T.fragmentShader;const He=c.getVertexShaderStage(T),It=c.getFragmentShaderStage(T);c.update(T,He,It),ae=He.id,ve=It.id}const me=a.getRenderTarget(),Oe=a.state.buffers.depth.getReversed(),Qe=Y.isInstancedMesh===!0,Je=Y.isBatchedMesh===!0,Ht=!!T.map,ut=!!T.matcap,At=!!H,xt=!!T.aoMap,mt=!!T.lightMap,Gt=!!T.bumpMap&&T.wireframe===!1,tn=!!T.normalMap,nn=!!T.displacementMap,$t=!!T.emissiveMap,Pt=!!T.metalnessMap,Wt=!!T.roughnessMap,q=T.anisotropy>0,En=T.clearcoat>0,Tt=T.dispersion>0,U=T.iridescence>0,w=T.sheen>0,Z=T.transmission>0,ie=q&&!!T.anisotropyMap,de=En&&!!T.clearcoatMap,Me=En&&!!T.clearcoatNormalMap,Ce=En&&!!T.clearcoatRoughnessMap,he=U&&!!T.iridescenceMap,_e=U&&!!T.iridescenceThicknessMap,Pe=w&&!!T.sheenColorMap,qe=w&&!!T.sheenRoughnessMap,De=!!T.specularMap,Re=!!T.specularColorMap,je=!!T.specularIntensityMap,et=Z&&!!T.transmissionMap,it=Z&&!!T.thicknessMap,G=!!T.gradientMap,Ae=!!T.alphaMap,pe=T.alphaTest>0,be=!!T.alphaHash,Ne=!!T.extensions;let ge=or;T.toneMapped&&(me===null||me.isXRRenderTarget===!0)&&(ge=a.toneMapping);const We={shaderID:se,shaderType:T.type,shaderName:T.name,vertexShader:Fe,fragmentShader:Ue,defines:T.defines,customVertexShaderID:ae,customFragmentShaderID:ve,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Je,batchingColor:Je&&Y._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&Y.instanceColor!==null,instancingMorph:Qe&&Y.morphTexture!==null,outputColorSpace:me===null?a.outputColorSpace:me.isXRRenderTarget===!0?me.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:Ht,matcap:ut,envMap:At,envMapMode:At&&H.mapping,envMapCubeUVHeight:oe,aoMap:xt,lightMap:mt,bumpMap:Gt,normalMap:tn,displacementMap:nn,emissiveMap:$t,normalMapObjectSpace:tn&&T.normalMapType===Ty,normalMapTangentSpace:tn&&T.normalMapType===xg,packedNormalMap:tn&&T.normalMapType===xg&&Ow(T.normalMap.format),metalnessMap:Pt,roughnessMap:Wt,anisotropy:q,anisotropyMap:ie,clearcoat:En,clearcoatMap:de,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ce,dispersion:Tt,iridescence:U,iridescenceMap:he,iridescenceThicknessMap:_e,sheen:w,sheenColorMap:Pe,sheenRoughnessMap:qe,specularMap:De,specularColorMap:Re,specularIntensityMap:je,transmission:Z,transmissionMap:et,thicknessMap:it,gradientMap:G,opaque:T.transparent===!1&&T.blending===Za&&T.alphaToCoverage===!1,alphaMap:Ae,alphaTest:pe,alphaHash:be,combine:T.combine,mapUv:Ht&&E(T.map.channel),aoMapUv:xt&&E(T.aoMap.channel),lightMapUv:mt&&E(T.lightMap.channel),bumpMapUv:Gt&&E(T.bumpMap.channel),normalMapUv:tn&&E(T.normalMap.channel),displacementMapUv:nn&&E(T.displacementMap.channel),emissiveMapUv:$t&&E(T.emissiveMap.channel),metalnessMapUv:Pt&&E(T.metalnessMap.channel),roughnessMapUv:Wt&&E(T.roughnessMap.channel),anisotropyMapUv:ie&&E(T.anisotropyMap.channel),clearcoatMapUv:de&&E(T.clearcoatMap.channel),clearcoatNormalMapUv:Me&&E(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&E(T.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&E(T.iridescenceMap.channel),iridescenceThicknessMapUv:_e&&E(T.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&E(T.sheenColorMap.channel),sheenRoughnessMapUv:qe&&E(T.sheenRoughnessMap.channel),specularMapUv:De&&E(T.specularMap.channel),specularColorMapUv:Re&&E(T.specularColorMap.channel),specularIntensityMapUv:je&&E(T.specularIntensityMap.channel),transmissionMapUv:et&&E(T.transmissionMap.channel),thicknessMapUv:it&&E(T.thicknessMap.channel),alphaMapUv:Ae&&E(T.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(tn||q),vertexNormals:!!W.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!W.attributes.uv&&(Ht||Ae),fog:!!re,useFog:T.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||W.attributes.normal===void 0&&tn===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Oe,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:W.attributes.position!==void 0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:Le,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:j.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:a.shadowMap.enabled&&k.length>0,shadowMapType:a.shadowMap.type,toneMapping:ge,decodeVideoTexture:Ht&&T.map.isVideoTexture===!0&&_t.getTransfer(T.map.colorSpace)===Nt,decodeVideoTextureEmissive:$t&&T.emissiveMap.isVideoTexture===!0&&_t.getTransfer(T.emissiveMap.colorSpace)===Nt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===br,flipSided:T.side===ei,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||Je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return We.vertexUv1s=d.has(1),We.vertexUv2s=d.has(2),We.vertexUv3s=d.has(3),d.clear(),We}function x(T){const D=[];if(T.shaderID?D.push(T.shaderID):(D.push(T.customVertexShaderID),D.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)D.push(k),D.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(y(D,T),b(D,T),D.push(a.outputColorSpace)),D.push(T.customProgramCacheKey),D.join()}function y(T,D){T.push(D.precision),T.push(D.outputColorSpace),T.push(D.envMapMode),T.push(D.envMapCubeUVHeight),T.push(D.mapUv),T.push(D.alphaMapUv),T.push(D.lightMapUv),T.push(D.aoMapUv),T.push(D.bumpMapUv),T.push(D.normalMapUv),T.push(D.displacementMapUv),T.push(D.emissiveMapUv),T.push(D.metalnessMapUv),T.push(D.roughnessMapUv),T.push(D.anisotropyMapUv),T.push(D.clearcoatMapUv),T.push(D.clearcoatNormalMapUv),T.push(D.clearcoatRoughnessMapUv),T.push(D.iridescenceMapUv),T.push(D.iridescenceThicknessMapUv),T.push(D.sheenColorMapUv),T.push(D.sheenRoughnessMapUv),T.push(D.specularMapUv),T.push(D.specularColorMapUv),T.push(D.specularIntensityMapUv),T.push(D.transmissionMapUv),T.push(D.thicknessMapUv),T.push(D.combine),T.push(D.fogExp2),T.push(D.sizeAttenuation),T.push(D.morphTargetsCount),T.push(D.morphAttributeCount),T.push(D.numDirLights),T.push(D.numPointLights),T.push(D.numSpotLights),T.push(D.numSpotLightMaps),T.push(D.numHemiLights),T.push(D.numRectAreaLights),T.push(D.numDirLightShadows),T.push(D.numPointLightShadows),T.push(D.numSpotLightShadows),T.push(D.numSpotLightShadowsWithMaps),T.push(D.numLightProbes),T.push(D.shadowMapType),T.push(D.toneMapping),T.push(D.numClippingPlanes),T.push(D.numClipIntersection),T.push(D.depthPacking)}function b(T,D){u.disableAll(),D.instancing&&u.enable(0),D.instancingColor&&u.enable(1),D.instancingMorph&&u.enable(2),D.matcap&&u.enable(3),D.envMap&&u.enable(4),D.normalMapObjectSpace&&u.enable(5),D.normalMapTangentSpace&&u.enable(6),D.clearcoat&&u.enable(7),D.iridescence&&u.enable(8),D.alphaTest&&u.enable(9),D.vertexColors&&u.enable(10),D.vertexAlphas&&u.enable(11),D.vertexUv1s&&u.enable(12),D.vertexUv2s&&u.enable(13),D.vertexUv3s&&u.enable(14),D.vertexTangents&&u.enable(15),D.anisotropy&&u.enable(16),D.alphaHash&&u.enable(17),D.batching&&u.enable(18),D.dispersion&&u.enable(19),D.batchingColor&&u.enable(20),D.gradientMap&&u.enable(21),D.packedNormalMap&&u.enable(22),D.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),D.fog&&u.enable(0),D.useFog&&u.enable(1),D.flatShading&&u.enable(2),D.logarithmicDepthBuffer&&u.enable(3),D.reversedDepthBuffer&&u.enable(4),D.skinning&&u.enable(5),D.morphTargets&&u.enable(6),D.morphNormals&&u.enable(7),D.morphColors&&u.enable(8),D.premultipliedAlpha&&u.enable(9),D.shadowMapEnabled&&u.enable(10),D.doubleSided&&u.enable(11),D.flipSided&&u.enable(12),D.useDepthPacking&&u.enable(13),D.dithering&&u.enable(14),D.transmission&&u.enable(15),D.sheen&&u.enable(16),D.opaque&&u.enable(17),D.pointsUvs&&u.enable(18),D.decodeVideoTexture&&u.enable(19),D.decodeVideoTextureEmissive&&u.enable(20),D.alphaToCoverage&&u.enable(21),D.numLightProbeGrids>0&&u.enable(22),D.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function N(T){const D=S[T.type];let k;if(D){const B=nr[D];k=lM.clone(B.uniforms)}else k=T.uniforms;return k}function R(T,D){let k=p.get(D);return k!==void 0?++k.usedTimes:(k=new Nw(a,D,T,s),h.push(k),p.set(D,k)),k}function P(T){if(--T.usedTimes===0){const D=h.indexOf(T);h[D]=h[h.length-1],h.pop(),p.delete(T.cacheKey),T.destroy()}}function L(T){c.remove(T)}function I(){c.dispose()}return{getParameters:M,getProgramCacheKey:x,getUniforms:N,acquireProgram:R,releaseProgram:P,releaseShaderCache:L,programs:h,dispose:I}}function Bw(){let a=new WeakMap;function e(u){return a.has(u)}function t(u){let c=a.get(u);return c===void 0&&(c={},a.set(u,c)),c}function i(u){a.delete(u)}function s(u,c,d){a.get(u)[c]=d}function o(){a=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:o}}function zw(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.material.id!==e.material.id?a.material.id-e.material.id:a.materialVariant!==e.materialVariant?a.materialVariant-e.materialVariant:a.z!==e.z?a.z-e.z:a.id-e.id}function u0(a,e){return a.groupOrder!==e.groupOrder?a.groupOrder-e.groupOrder:a.renderOrder!==e.renderOrder?a.renderOrder-e.renderOrder:a.z!==e.z?e.z-a.z:a.id-e.id}function c0(){const a=[];let e=0;const t=[],i=[],s=[];function o(){e=0,t.length=0,i.length=0,s.length=0}function u(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function c(_,S,E,M,x,y){let b=a[e];return b===void 0?(b={id:_.id,object:_,geometry:S,material:E,materialVariant:u(_),groupOrder:M,renderOrder:_.renderOrder,z:x,group:y},a[e]=b):(b.id=_.id,b.object=_,b.geometry=S,b.material=E,b.materialVariant=u(_),b.groupOrder=M,b.renderOrder=_.renderOrder,b.z=x,b.group=y),e++,b}function d(_,S,E,M,x,y){const b=c(_,S,E,M,x,y);E.transmission>0?i.push(b):E.transparent===!0?s.push(b):t.push(b)}function h(_,S,E,M,x,y){const b=c(_,S,E,M,x,y);E.transmission>0?i.unshift(b):E.transparent===!0?s.unshift(b):t.unshift(b)}function p(_,S,E){t.length>1&&t.sort(_||zw),i.length>1&&i.sort(S||u0),s.length>1&&s.sort(S||u0),E&&(t.reverse(),i.reverse(),s.reverse())}function g(){for(let _=e,S=a.length;_<S;_++){const E=a[_];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:i,transparent:s,init:o,push:d,unshift:h,finish:g,sort:p}}function Vw(){let a=new WeakMap;function e(i,s){const o=a.get(i);let u;return o===void 0?(u=new c0,a.set(i,[u])):s>=o.length?(u=new c0,o.push(u)):u=o[s],u}function t(){a=new WeakMap}return{get:e,dispose:t}}function Hw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new le,color:new bt};break;case"SpotLight":t={position:new le,direction:new le,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new le,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new le,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new le,halfWidth:new le,halfHeight:new le};break}return a[e.id]=t,t}}}function Gw(){const a={};return{get:function(e){if(a[e.id]!==void 0)return a[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return a[e.id]=t,t}}}let Ww=0;function Xw(a,e){return(e.castShadow?2:0)-(a.castShadow?2:0)+(e.map?1:0)-(a.map?1:0)}function Yw(a){const e=new Hw,t=Gw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new le);const s=new le,o=new hn,u=new hn;function c(h){let p=0,g=0,_=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let S=0,E=0,M=0,x=0,y=0,b=0,N=0,R=0,P=0,L=0,I=0;h.sort(Xw);for(let D=0,k=h.length;D<k;D++){const B=h[D],Y=B.color,j=B.intensity,re=B.distance;let W=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===sa?W=B.shadow.map.texture:W=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=Y.r*j,g+=Y.g*j,_+=Y.b*j;else if(B.isLightProbe){for(let Q=0;Q<9;Q++)i.probe[Q].addScaledVector(B.sh.coefficients[Q],j);I++}else if(B.isDirectionalLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const V=B.shadow,H=t.get(B);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.directionalShadow[S]=H,i.directionalShadowMap[S]=W,i.directionalShadowMatrix[S]=B.shadow.matrix,b++}i.directional[S]=Q,S++}else if(B.isSpotLight){const Q=e.get(B);Q.position.setFromMatrixPosition(B.matrixWorld),Q.color.copy(Y).multiplyScalar(j),Q.distance=re,Q.coneCos=Math.cos(B.angle),Q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Q.decay=B.decay,i.spot[M]=Q;const V=B.shadow;if(B.map&&(i.spotLightMap[P]=B.map,P++,V.updateMatrices(B),B.castShadow&&L++),i.spotLightMatrix[M]=V.matrix,B.castShadow){const H=t.get(B);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,i.spotShadow[M]=H,i.spotShadowMap[M]=W,R++}M++}else if(B.isRectAreaLight){const Q=e.get(B);Q.color.copy(Y).multiplyScalar(j),Q.halfWidth.set(B.width*.5,0,0),Q.halfHeight.set(0,B.height*.5,0),i.rectArea[x]=Q,x++}else if(B.isPointLight){const Q=e.get(B);if(Q.color.copy(B.color).multiplyScalar(B.intensity),Q.distance=B.distance,Q.decay=B.decay,B.castShadow){const V=B.shadow,H=t.get(B);H.shadowIntensity=V.intensity,H.shadowBias=V.bias,H.shadowNormalBias=V.normalBias,H.shadowRadius=V.radius,H.shadowMapSize=V.mapSize,H.shadowCameraNear=V.camera.near,H.shadowCameraFar=V.camera.far,i.pointShadow[E]=H,i.pointShadowMap[E]=W,i.pointShadowMatrix[E]=B.shadow.matrix,N++}i.point[E]=Q,E++}else if(B.isHemisphereLight){const Q=e.get(B);Q.skyColor.copy(B.color).multiplyScalar(j),Q.groundColor.copy(B.groundColor).multiplyScalar(j),i.hemi[y]=Q,y++}}x>0&&(a.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ie.LTC_FLOAT_1,i.rectAreaLTC2=Ie.LTC_FLOAT_2):(i.rectAreaLTC1=Ie.LTC_HALF_1,i.rectAreaLTC2=Ie.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=g,i.ambient[2]=_;const T=i.hash;(T.directionalLength!==S||T.pointLength!==E||T.spotLength!==M||T.rectAreaLength!==x||T.hemiLength!==y||T.numDirectionalShadows!==b||T.numPointShadows!==N||T.numSpotShadows!==R||T.numSpotMaps!==P||T.numLightProbes!==I)&&(i.directional.length=S,i.spot.length=M,i.rectArea.length=x,i.point.length=E,i.hemi.length=y,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=N,i.pointShadowMap.length=N,i.spotShadow.length=R,i.spotShadowMap.length=R,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=N,i.spotLightMatrix.length=R+P-L,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=I,T.directionalLength=S,T.pointLength=E,T.spotLength=M,T.rectAreaLength=x,T.hemiLength=y,T.numDirectionalShadows=b,T.numPointShadows=N,T.numSpotShadows=R,T.numSpotMaps=P,T.numLightProbes=I,i.version=Ww++)}function d(h,p){let g=0,_=0,S=0,E=0,M=0;const x=p.matrixWorldInverse;for(let y=0,b=h.length;y<b;y++){const N=h[y];if(N.isDirectionalLight){const R=i.directional[g];R.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),g++}else if(N.isSpotLight){const R=i.spot[S];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(x),R.direction.setFromMatrixPosition(N.matrixWorld),s.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(x),S++}else if(N.isRectAreaLight){const R=i.rectArea[E];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(x),u.identity(),o.copy(N.matrixWorld),o.premultiply(x),u.extractRotation(o),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),E++}else if(N.isPointLight){const R=i.point[_];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(x),_++}else if(N.isHemisphereLight){const R=i.hemi[M];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(x),M++}}}return{setup:c,setupView:d,state:i}}function f0(a){const e=new Yw(a),t=[],i=[],s=[];function o(_){g.camera=_,t.length=0,i.length=0,s.length=0}function u(_){t.push(_)}function c(_){i.push(_)}function d(_){s.push(_)}function h(){e.setup(t)}function p(_){e.setupView(t,_)}const g={lightsArray:t,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:h,setupLightsView:p,pushLight:u,pushShadow:c,pushLightProbeGrid:d}}function qw(a){let e=new WeakMap;function t(s,o=0){const u=e.get(s);let c;return u===void 0?(c=new f0(a),e.set(s,[c])):o>=u.length?(c=new f0(a),u.push(c)):c=u[o],c}function i(){e=new WeakMap}return{get:t,dispose:i}}const $w=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Kw=`uniform sampler2D shadow_pass;
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
}`,Zw=[new le(1,0,0),new le(-1,0,0),new le(0,1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1)],jw=[new le(0,-1,0),new le(0,-1,0),new le(0,0,1),new le(0,0,-1),new le(0,-1,0),new le(0,-1,0)],d0=new hn,il=new le,qd=new le;function Qw(a,e,t){let i=new tv;const s=new yt,o=new yt,u=new sn,c=new dM,d=new hM,h={},p=t.maxTextureSize,g={[vs]:ei,[ei]:vs,[br]:br},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:$w,fragmentShader:Kw}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const E=new kr;E.setAttribute("position",new ur(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new fr(E,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nc;let y=this.type;this.render=function(L,I,T){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||L.length===0)return;this.type===ty&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nc);const D=a.getRenderTarget(),k=a.getActiveCubeFace(),B=a.getActiveMipmapLevel(),Y=a.state;Y.setBlending(Dr),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const j=y!==this.type;j&&I.traverse(function(re){re.material&&(Array.isArray(re.material)?re.material.forEach(W=>W.needsUpdate=!0):re.material.needsUpdate=!0)});for(let re=0,W=L.length;re<W;re++){const Q=L[re],V=Q.shadow;if(V===void 0){st("WebGLShadowMap:",Q,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const H=V.getFrameExtents();s.multiply(H),o.copy(V.mapSize),(s.x>p||s.y>p)&&(s.x>p&&(o.x=Math.floor(p/H.x),s.x=o.x*H.x,V.mapSize.x=o.x),s.y>p&&(o.y=Math.floor(p/H.y),s.y=o.y*H.y,V.mapSize.y=o.y));const oe=a.state.buffers.depth.getReversed();if(V.camera._reversedDepth=oe,V.map===null||j===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===sl){if(Q.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new lr(s.x,s.y,{format:sa,type:Ir,minFilter:On,magFilter:On,generateMipmaps:!1}),V.map.texture.name=Q.name+".shadowMap",V.map.depthTexture=new ro(s.x,s.y,rr),V.map.depthTexture.name=Q.name+".shadowMapDepth",V.map.depthTexture.format=Ur,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rn,V.map.depthTexture.magFilter=Rn}else Q.isPointLight?(V.map=new lv(s.x),V.map.depthTexture=new aM(s.x,cr)):(V.map=new lr(s.x,s.y),V.map.depthTexture=new ro(s.x,s.y,cr)),V.map.depthTexture.name=Q.name+".shadowMap",V.map.depthTexture.format=Ur,this.type===nc?(V.map.depthTexture.compareFunction=oe?_p:mp,V.map.depthTexture.minFilter=On,V.map.depthTexture.magFilter=On):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Rn,V.map.depthTexture.magFilter=Rn);V.camera.updateProjectionMatrix()}const se=V.map.isWebGLCubeRenderTarget?6:1;for(let F=0;F<se;F++){if(V.map.isWebGLCubeRenderTarget)a.setRenderTarget(V.map,F),a.clear();else{F===0&&(a.setRenderTarget(V.map),a.clear());const K=V.getViewport(F);u.set(o.x*K.x,o.y*K.y,o.x*K.z,o.y*K.w),Y.viewport(u)}if(Q.isPointLight){const K=V.camera,Le=V.matrix,Fe=Q.distance||K.far;Fe!==K.far&&(K.far=Fe,K.updateProjectionMatrix()),il.setFromMatrixPosition(Q.matrixWorld),K.position.copy(il),qd.copy(K.position),qd.add(Zw[F]),K.up.copy(jw[F]),K.lookAt(qd),K.updateMatrixWorld(),Le.makeTranslation(-il.x,-il.y,-il.z),d0.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),V._frustum.setFromProjectionMatrix(d0,K.coordinateSystem,K.reversedDepth)}else V.updateMatrices(Q);i=V.getFrustum(),R(I,T,V.camera,Q,this.type)}V.isPointLightShadow!==!0&&this.type===sl&&b(V,T),V.needsUpdate=!1}y=this.type,x.needsUpdate=!1,a.setRenderTarget(D,k,B)};function b(L,I){const T=e.update(M);_.defines.VSM_SAMPLES!==L.blurSamples&&(_.defines.VSM_SAMPLES=L.blurSamples,S.defines.VSM_SAMPLES=L.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new lr(s.x,s.y,{format:sa,type:Ir})),_.uniforms.shadow_pass.value=L.map.depthTexture,_.uniforms.resolution.value=L.mapSize,_.uniforms.radius.value=L.radius,a.setRenderTarget(L.mapPass),a.clear(),a.renderBufferDirect(I,null,T,_,M,null),S.uniforms.shadow_pass.value=L.mapPass.texture,S.uniforms.resolution.value=L.mapSize,S.uniforms.radius.value=L.radius,a.setRenderTarget(L.map),a.clear(),a.renderBufferDirect(I,null,T,S,M,null)}function N(L,I,T,D){let k=null;const B=T.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(B!==void 0)k=B;else if(k=T.isPointLight===!0?d:c,a.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Y=k.uuid,j=I.uuid;let re=h[Y];re===void 0&&(re={},h[Y]=re);let W=re[j];W===void 0&&(W=k.clone(),re[j]=W,I.addEventListener("dispose",P)),k=W}if(k.visible=I.visible,k.wireframe=I.wireframe,D===sl?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:g[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const Y=a.properties.get(k);Y.light=T}return k}function R(L,I,T,D,k){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&k===sl)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,L.matrixWorld);const j=e.update(L),re=L.material;if(Array.isArray(re)){const W=j.groups;for(let Q=0,V=W.length;Q<V;Q++){const H=W[Q],oe=re[H.materialIndex];if(oe&&oe.visible){const se=N(L,oe,D,k);L.onBeforeShadow(a,L,I,T,j,se,H),a.renderBufferDirect(T,null,j,se,L,H),L.onAfterShadow(a,L,I,T,j,se,H)}}}else if(re.visible){const W=N(L,re,D,k);L.onBeforeShadow(a,L,I,T,j,W,null),a.renderBufferDirect(T,null,j,W,L,null),L.onAfterShadow(a,L,I,T,j,W,null)}}const Y=L.children;for(let j=0,re=Y.length;j<re;j++)R(Y[j],I,T,D,k)}function P(L){L.target.removeEventListener("dispose",P);for(const T in h){const D=h[T],k=L.target.uuid;k in D&&(D[k].dispose(),delete D[k])}}}function Jw(a,e){function t(){let G=!1;const Ae=new sn;let pe=null;const be=new sn(0,0,0,0);return{setMask:function(Ne){pe!==Ne&&!G&&(a.colorMask(Ne,Ne,Ne,Ne),pe=Ne)},setLocked:function(Ne){G=Ne},setClear:function(Ne,ge,We,He,It){It===!0&&(Ne*=He,ge*=He,We*=He),Ae.set(Ne,ge,We,He),be.equals(Ae)===!1&&(a.clearColor(Ne,ge,We,He),be.copy(Ae))},reset:function(){G=!1,pe=null,be.set(-1,0,0,0)}}}function i(){let G=!1,Ae=!1,pe=null,be=null,Ne=null;return{setReversed:function(ge){if(Ae!==ge){const We=e.get("EXT_clip_control");ge?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=ge;const He=Ne;Ne=null,this.setClear(He)}},getReversed:function(){return Ae},setTest:function(ge){ge?me(a.DEPTH_TEST):Oe(a.DEPTH_TEST)},setMask:function(ge){pe!==ge&&!G&&(a.depthMask(ge),pe=ge)},setFunc:function(ge){if(Ae&&(ge=Iy[ge]),be!==ge){switch(ge){case rh:a.depthFunc(a.NEVER);break;case sh:a.depthFunc(a.ALWAYS);break;case ah:a.depthFunc(a.LESS);break;case no:a.depthFunc(a.LEQUAL);break;case oh:a.depthFunc(a.EQUAL);break;case lh:a.depthFunc(a.GEQUAL);break;case uh:a.depthFunc(a.GREATER);break;case ch:a.depthFunc(a.NOTEQUAL);break;default:a.depthFunc(a.LEQUAL)}be=ge}},setLocked:function(ge){G=ge},setClear:function(ge){Ne!==ge&&(Ne=ge,Ae&&(ge=1-ge),a.clearDepth(ge))},reset:function(){G=!1,pe=null,be=null,Ne=null,Ae=!1}}}function s(){let G=!1,Ae=null,pe=null,be=null,Ne=null,ge=null,We=null,He=null,It=null;return{setTest:function(Rt){G||(Rt?me(a.STENCIL_TEST):Oe(a.STENCIL_TEST))},setMask:function(Rt){Ae!==Rt&&!G&&(a.stencilMask(Rt),Ae=Rt)},setFunc:function(Rt,bn,Si){(pe!==Rt||be!==bn||Ne!==Si)&&(a.stencilFunc(Rt,bn,Si),pe=Rt,be=bn,Ne=Si)},setOp:function(Rt,bn,Si){(ge!==Rt||We!==bn||He!==Si)&&(a.stencilOp(Rt,bn,Si),ge=Rt,We=bn,He=Si)},setLocked:function(Rt){G=Rt},setClear:function(Rt){It!==Rt&&(a.clearStencil(Rt),It=Rt)},reset:function(){G=!1,Ae=null,pe=null,be=null,Ne=null,ge=null,We=null,He=null,It=null}}}const o=new t,u=new i,c=new s,d=new WeakMap,h=new WeakMap;let p={},g={},_={},S=new WeakMap,E=[],M=null,x=!1,y=null,b=null,N=null,R=null,P=null,L=null,I=null,T=new bt(0,0,0),D=0,k=!1,B=null,Y=null,j=null,re=null,W=null;const Q=a.getParameter(a.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,H=0;const oe=a.getParameter(a.VERSION);oe.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(oe)[1]),V=H>=1):oe.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),V=H>=2);let se=null,F={};const K=a.getParameter(a.SCISSOR_BOX),Le=a.getParameter(a.VIEWPORT),Fe=new sn().fromArray(K),Ue=new sn().fromArray(Le);function ae(G,Ae,pe,be){const Ne=new Uint8Array(4),ge=a.createTexture();a.bindTexture(G,ge),a.texParameteri(G,a.TEXTURE_MIN_FILTER,a.NEAREST),a.texParameteri(G,a.TEXTURE_MAG_FILTER,a.NEAREST);for(let We=0;We<pe;We++)G===a.TEXTURE_3D||G===a.TEXTURE_2D_ARRAY?a.texImage3D(Ae,0,a.RGBA,1,1,be,0,a.RGBA,a.UNSIGNED_BYTE,Ne):a.texImage2D(Ae+We,0,a.RGBA,1,1,0,a.RGBA,a.UNSIGNED_BYTE,Ne);return ge}const ve={};ve[a.TEXTURE_2D]=ae(a.TEXTURE_2D,a.TEXTURE_2D,1),ve[a.TEXTURE_CUBE_MAP]=ae(a.TEXTURE_CUBE_MAP,a.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[a.TEXTURE_2D_ARRAY]=ae(a.TEXTURE_2D_ARRAY,a.TEXTURE_2D_ARRAY,1,1),ve[a.TEXTURE_3D]=ae(a.TEXTURE_3D,a.TEXTURE_3D,1,1),o.setClear(0,0,0,1),u.setClear(1),c.setClear(0),me(a.DEPTH_TEST),u.setFunc(no),Gt(!1),tn(mg),me(a.CULL_FACE),xt(Dr);function me(G){p[G]!==!0&&(a.enable(G),p[G]=!0)}function Oe(G){p[G]!==!1&&(a.disable(G),p[G]=!1)}function Qe(G,Ae){return _[G]!==Ae?(a.bindFramebuffer(G,Ae),_[G]=Ae,G===a.DRAW_FRAMEBUFFER&&(_[a.FRAMEBUFFER]=Ae),G===a.FRAMEBUFFER&&(_[a.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Je(G,Ae){let pe=E,be=!1;if(G){pe=S.get(Ae),pe===void 0&&(pe=[],S.set(Ae,pe));const Ne=G.textures;if(pe.length!==Ne.length||pe[0]!==a.COLOR_ATTACHMENT0){for(let ge=0,We=Ne.length;ge<We;ge++)pe[ge]=a.COLOR_ATTACHMENT0+ge;pe.length=Ne.length,be=!0}}else pe[0]!==a.BACK&&(pe[0]=a.BACK,be=!0);be&&a.drawBuffers(pe)}function Ht(G){return M!==G?(a.useProgram(G),M=G,!0):!1}const ut={[Ks]:a.FUNC_ADD,[iy]:a.FUNC_SUBTRACT,[ry]:a.FUNC_REVERSE_SUBTRACT};ut[sy]=a.MIN,ut[ay]=a.MAX;const At={[oy]:a.ZERO,[ly]:a.ONE,[uy]:a.SRC_COLOR,[nh]:a.SRC_ALPHA,[my]:a.SRC_ALPHA_SATURATE,[hy]:a.DST_COLOR,[fy]:a.DST_ALPHA,[cy]:a.ONE_MINUS_SRC_COLOR,[ih]:a.ONE_MINUS_SRC_ALPHA,[py]:a.ONE_MINUS_DST_COLOR,[dy]:a.ONE_MINUS_DST_ALPHA,[_y]:a.CONSTANT_COLOR,[gy]:a.ONE_MINUS_CONSTANT_COLOR,[vy]:a.CONSTANT_ALPHA,[xy]:a.ONE_MINUS_CONSTANT_ALPHA};function xt(G,Ae,pe,be,Ne,ge,We,He,It,Rt){if(G===Dr){x===!0&&(Oe(a.BLEND),x=!1);return}if(x===!1&&(me(a.BLEND),x=!0),G!==ny){if(G!==y||Rt!==k){if((b!==Ks||P!==Ks)&&(a.blendEquation(a.FUNC_ADD),b=Ks,P=Ks),Rt)switch(G){case Za:a.blendFuncSeparate(a.ONE,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case _g:a.blendFunc(a.ONE,a.ONE);break;case gg:a.blendFuncSeparate(a.ZERO,a.ONE_MINUS_SRC_COLOR,a.ZERO,a.ONE);break;case vg:a.blendFuncSeparate(a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ZERO,a.ONE);break;default:Et("WebGLState: Invalid blending: ",G);break}else switch(G){case Za:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA);break;case _g:a.blendFuncSeparate(a.SRC_ALPHA,a.ONE,a.ONE,a.ONE);break;case gg:Et("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vg:Et("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Et("WebGLState: Invalid blending: ",G);break}N=null,R=null,L=null,I=null,T.set(0,0,0),D=0,y=G,k=Rt}return}Ne=Ne||Ae,ge=ge||pe,We=We||be,(Ae!==b||Ne!==P)&&(a.blendEquationSeparate(ut[Ae],ut[Ne]),b=Ae,P=Ne),(pe!==N||be!==R||ge!==L||We!==I)&&(a.blendFuncSeparate(At[pe],At[be],At[ge],At[We]),N=pe,R=be,L=ge,I=We),(He.equals(T)===!1||It!==D)&&(a.blendColor(He.r,He.g,He.b,It),T.copy(He),D=It),y=G,k=!1}function mt(G,Ae){G.side===br?Oe(a.CULL_FACE):me(a.CULL_FACE);let pe=G.side===ei;Ae&&(pe=!pe),Gt(pe),G.blending===Za&&G.transparent===!1?xt(Dr):xt(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),o.setMask(G.colorWrite);const be=G.stencilWrite;c.setTest(be),be&&(c.setMask(G.stencilWriteMask),c.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),c.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),$t(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?me(a.SAMPLE_ALPHA_TO_COVERAGE):Oe(a.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(G){B!==G&&(G?a.frontFace(a.CW):a.frontFace(a.CCW),B=G)}function tn(G){G!==JS?(me(a.CULL_FACE),G!==Y&&(G===mg?a.cullFace(a.BACK):G===ey?a.cullFace(a.FRONT):a.cullFace(a.FRONT_AND_BACK))):Oe(a.CULL_FACE),Y=G}function nn(G){G!==j&&(V&&a.lineWidth(G),j=G)}function $t(G,Ae,pe){G?(me(a.POLYGON_OFFSET_FILL),(re!==Ae||W!==pe)&&(re=Ae,W=pe,u.getReversed()&&(Ae=-Ae),a.polygonOffset(Ae,pe))):Oe(a.POLYGON_OFFSET_FILL)}function Pt(G){G?me(a.SCISSOR_TEST):Oe(a.SCISSOR_TEST)}function Wt(G){G===void 0&&(G=a.TEXTURE0+Q-1),se!==G&&(a.activeTexture(G),se=G)}function q(G,Ae,pe){pe===void 0&&(se===null?pe=a.TEXTURE0+Q-1:pe=se);let be=F[pe];be===void 0&&(be={type:void 0,texture:void 0},F[pe]=be),(be.type!==G||be.texture!==Ae)&&(se!==pe&&(a.activeTexture(pe),se=pe),a.bindTexture(G,Ae||ve[G]),be.type=G,be.texture=Ae)}function En(){const G=F[se];G!==void 0&&G.type!==void 0&&(a.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function Tt(){try{a.compressedTexImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function U(){try{a.compressedTexImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function w(){try{a.texSubImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function Z(){try{a.texSubImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function ie(){try{a.compressedTexSubImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function de(){try{a.compressedTexSubImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function Me(){try{a.texStorage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function Ce(){try{a.texStorage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function he(){try{a.texImage2D(...arguments)}catch(G){Et("WebGLState:",G)}}function _e(){try{a.texImage3D(...arguments)}catch(G){Et("WebGLState:",G)}}function Pe(G){return g[G]!==void 0?g[G]:a.getParameter(G)}function qe(G,Ae){g[G]!==Ae&&(a.pixelStorei(G,Ae),g[G]=Ae)}function De(G){Fe.equals(G)===!1&&(a.scissor(G.x,G.y,G.z,G.w),Fe.copy(G))}function Re(G){Ue.equals(G)===!1&&(a.viewport(G.x,G.y,G.z,G.w),Ue.copy(G))}function je(G,Ae){let pe=h.get(Ae);pe===void 0&&(pe=new WeakMap,h.set(Ae,pe));let be=pe.get(G);be===void 0&&(be=a.getUniformBlockIndex(Ae,G.name),pe.set(G,be))}function et(G,Ae){const be=h.get(Ae).get(G);d.get(Ae)!==be&&(a.uniformBlockBinding(Ae,be,G.__bindingPointIndex),d.set(Ae,be))}function it(){a.disable(a.BLEND),a.disable(a.CULL_FACE),a.disable(a.DEPTH_TEST),a.disable(a.POLYGON_OFFSET_FILL),a.disable(a.SCISSOR_TEST),a.disable(a.STENCIL_TEST),a.disable(a.SAMPLE_ALPHA_TO_COVERAGE),a.blendEquation(a.FUNC_ADD),a.blendFunc(a.ONE,a.ZERO),a.blendFuncSeparate(a.ONE,a.ZERO,a.ONE,a.ZERO),a.blendColor(0,0,0,0),a.colorMask(!0,!0,!0,!0),a.clearColor(0,0,0,0),a.depthMask(!0),a.depthFunc(a.LESS),u.setReversed(!1),a.clearDepth(1),a.stencilMask(4294967295),a.stencilFunc(a.ALWAYS,0,4294967295),a.stencilOp(a.KEEP,a.KEEP,a.KEEP),a.clearStencil(0),a.cullFace(a.BACK),a.frontFace(a.CCW),a.polygonOffset(0,0),a.activeTexture(a.TEXTURE0),a.bindFramebuffer(a.FRAMEBUFFER,null),a.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),a.bindFramebuffer(a.READ_FRAMEBUFFER,null),a.useProgram(null),a.lineWidth(1),a.scissor(0,0,a.canvas.width,a.canvas.height),a.viewport(0,0,a.canvas.width,a.canvas.height),a.pixelStorei(a.PACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_ALIGNMENT,4),a.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,!1),a.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),a.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,a.BROWSER_DEFAULT_WEBGL),a.pixelStorei(a.PACK_ROW_LENGTH,0),a.pixelStorei(a.PACK_SKIP_PIXELS,0),a.pixelStorei(a.PACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_ROW_LENGTH,0),a.pixelStorei(a.UNPACK_IMAGE_HEIGHT,0),a.pixelStorei(a.UNPACK_SKIP_PIXELS,0),a.pixelStorei(a.UNPACK_SKIP_ROWS,0),a.pixelStorei(a.UNPACK_SKIP_IMAGES,0),p={},g={},se=null,F={},_={},S=new WeakMap,E=[],M=null,x=!1,y=null,b=null,N=null,R=null,P=null,L=null,I=null,T=new bt(0,0,0),D=0,k=!1,B=null,Y=null,j=null,re=null,W=null,Fe.set(0,0,a.canvas.width,a.canvas.height),Ue.set(0,0,a.canvas.width,a.canvas.height),o.reset(),u.reset(),c.reset()}return{buffers:{color:o,depth:u,stencil:c},enable:me,disable:Oe,bindFramebuffer:Qe,drawBuffers:Je,useProgram:Ht,setBlending:xt,setMaterial:mt,setFlipSided:Gt,setCullFace:tn,setLineWidth:nn,setPolygonOffset:$t,setScissorTest:Pt,activeTexture:Wt,bindTexture:q,unbindTexture:En,compressedTexImage2D:Tt,compressedTexImage3D:U,texImage2D:he,texImage3D:_e,pixelStorei:qe,getParameter:Pe,updateUBOMapping:je,uniformBlockBinding:et,texStorage2D:Me,texStorage3D:Ce,texSubImage2D:w,texSubImage3D:Z,compressedTexSubImage2D:ie,compressedTexSubImage3D:de,scissor:De,viewport:Re,reset:it}}function eA(a,e,t,i,s,o,u){const c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new yt,p=new WeakMap,g=new Set;let _;const S=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(U,w){return E?new OffscreenCanvas(U,w):_c("canvas")}function x(U,w,Z){let ie=1;const de=Tt(U);if((de.width>Z||de.height>Z)&&(ie=Z/Math.max(de.width,de.height)),ie<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Me=Math.floor(ie*de.width),Ce=Math.floor(ie*de.height);_===void 0&&(_=M(Me,Ce));const he=w?M(Me,Ce):_;return he.width=Me,he.height=Ce,he.getContext("2d").drawImage(U,0,0,Me,Ce),st("WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+Me+"x"+Ce+")."),he}else return"data"in U&&st("WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),U;return U}function y(U){return U.generateMipmaps}function b(U){a.generateMipmap(U)}function N(U){return U.isWebGLCubeRenderTarget?a.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?a.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?a.TEXTURE_2D_ARRAY:a.TEXTURE_2D}function R(U,w,Z,ie,de,Me=!1){if(U!==null){if(a[U]!==void 0)return a[U];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ce;ie&&(Ce=e.get("EXT_texture_norm16"),Ce||st("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=w;if(w===a.RED&&(Z===a.FLOAT&&(he=a.R32F),Z===a.HALF_FLOAT&&(he=a.R16F),Z===a.UNSIGNED_BYTE&&(he=a.R8),Z===a.UNSIGNED_SHORT&&Ce&&(he=Ce.R16_EXT),Z===a.SHORT&&Ce&&(he=Ce.R16_SNORM_EXT)),w===a.RED_INTEGER&&(Z===a.UNSIGNED_BYTE&&(he=a.R8UI),Z===a.UNSIGNED_SHORT&&(he=a.R16UI),Z===a.UNSIGNED_INT&&(he=a.R32UI),Z===a.BYTE&&(he=a.R8I),Z===a.SHORT&&(he=a.R16I),Z===a.INT&&(he=a.R32I)),w===a.RG&&(Z===a.FLOAT&&(he=a.RG32F),Z===a.HALF_FLOAT&&(he=a.RG16F),Z===a.UNSIGNED_BYTE&&(he=a.RG8),Z===a.UNSIGNED_SHORT&&Ce&&(he=Ce.RG16_EXT),Z===a.SHORT&&Ce&&(he=Ce.RG16_SNORM_EXT)),w===a.RG_INTEGER&&(Z===a.UNSIGNED_BYTE&&(he=a.RG8UI),Z===a.UNSIGNED_SHORT&&(he=a.RG16UI),Z===a.UNSIGNED_INT&&(he=a.RG32UI),Z===a.BYTE&&(he=a.RG8I),Z===a.SHORT&&(he=a.RG16I),Z===a.INT&&(he=a.RG32I)),w===a.RGB_INTEGER&&(Z===a.UNSIGNED_BYTE&&(he=a.RGB8UI),Z===a.UNSIGNED_SHORT&&(he=a.RGB16UI),Z===a.UNSIGNED_INT&&(he=a.RGB32UI),Z===a.BYTE&&(he=a.RGB8I),Z===a.SHORT&&(he=a.RGB16I),Z===a.INT&&(he=a.RGB32I)),w===a.RGBA_INTEGER&&(Z===a.UNSIGNED_BYTE&&(he=a.RGBA8UI),Z===a.UNSIGNED_SHORT&&(he=a.RGBA16UI),Z===a.UNSIGNED_INT&&(he=a.RGBA32UI),Z===a.BYTE&&(he=a.RGBA8I),Z===a.SHORT&&(he=a.RGBA16I),Z===a.INT&&(he=a.RGBA32I)),w===a.RGB&&(Z===a.UNSIGNED_SHORT&&Ce&&(he=Ce.RGB16_EXT),Z===a.SHORT&&Ce&&(he=Ce.RGB16_SNORM_EXT),Z===a.UNSIGNED_INT_5_9_9_9_REV&&(he=a.RGB9_E5),Z===a.UNSIGNED_INT_10F_11F_11F_REV&&(he=a.R11F_G11F_B10F)),w===a.RGBA){const _e=Me?pc:_t.getTransfer(de);Z===a.FLOAT&&(he=a.RGBA32F),Z===a.HALF_FLOAT&&(he=a.RGBA16F),Z===a.UNSIGNED_BYTE&&(he=_e===Nt?a.SRGB8_ALPHA8:a.RGBA8),Z===a.UNSIGNED_SHORT&&Ce&&(he=Ce.RGBA16_EXT),Z===a.SHORT&&Ce&&(he=Ce.RGBA16_SNORM_EXT),Z===a.UNSIGNED_SHORT_4_4_4_4&&(he=a.RGBA4),Z===a.UNSIGNED_SHORT_5_5_5_1&&(he=a.RGB5_A1)}return(he===a.R16F||he===a.R32F||he===a.RG16F||he===a.RG32F||he===a.RGBA16F||he===a.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function P(U,w){let Z;return U?w===null||w===cr||w===hl?Z=a.DEPTH24_STENCIL8:w===rr?Z=a.DEPTH32F_STENCIL8:w===dl&&(Z=a.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===cr||w===hl?Z=a.DEPTH_COMPONENT24:w===rr?Z=a.DEPTH_COMPONENT32F:w===dl&&(Z=a.DEPTH_COMPONENT16),Z}function L(U,w){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Rn&&U.minFilter!==On?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function I(U){const w=U.target;w.removeEventListener("dispose",I),D(w),w.isVideoTexture&&p.delete(w),w.isHTMLTexture&&g.delete(w)}function T(U){const w=U.target;w.removeEventListener("dispose",T),B(w)}function D(U){const w=i.get(U);if(w.__webglInit===void 0)return;const Z=U.source,ie=S.get(Z);if(ie){const de=ie[w.__cacheKey];de.usedTimes--,de.usedTimes===0&&k(U),Object.keys(ie).length===0&&S.delete(Z)}i.remove(U)}function k(U){const w=i.get(U);a.deleteTexture(w.__webglTexture);const Z=U.source,ie=S.get(Z);delete ie[w.__cacheKey],u.memory.textures--}function B(U){const w=i.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),i.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let ie=0;ie<6;ie++){if(Array.isArray(w.__webglFramebuffer[ie]))for(let de=0;de<w.__webglFramebuffer[ie].length;de++)a.deleteFramebuffer(w.__webglFramebuffer[ie][de]);else a.deleteFramebuffer(w.__webglFramebuffer[ie]);w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer[ie])}else{if(Array.isArray(w.__webglFramebuffer))for(let ie=0;ie<w.__webglFramebuffer.length;ie++)a.deleteFramebuffer(w.__webglFramebuffer[ie]);else a.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&a.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&a.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ie=0;ie<w.__webglColorRenderbuffer.length;ie++)w.__webglColorRenderbuffer[ie]&&a.deleteRenderbuffer(w.__webglColorRenderbuffer[ie]);w.__webglDepthRenderbuffer&&a.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const Z=U.textures;for(let ie=0,de=Z.length;ie<de;ie++){const Me=i.get(Z[ie]);Me.__webglTexture&&(a.deleteTexture(Me.__webglTexture),u.memory.textures--),i.remove(Z[ie])}i.remove(U)}let Y=0;function j(){Y=0}function re(){return Y}function W(U){Y=U}function Q(){const U=Y;return U>=s.maxTextures&&st("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),Y+=1,U}function V(U){const w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function H(U,w){const Z=i.get(U);if(U.isVideoTexture&&q(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&Z.__version!==U.version){const ie=U.image;if(ie===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(ie.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{Oe(Z,U,w);return}}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(a.TEXTURE_2D,Z.__webglTexture,a.TEXTURE0+w)}function oe(U,w){const Z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){Oe(Z,U,w);return}else U.isExternalTexture&&(Z.__webglTexture=U.sourceTexture?U.sourceTexture:null);t.bindTexture(a.TEXTURE_2D_ARRAY,Z.__webglTexture,a.TEXTURE0+w)}function se(U,w){const Z=i.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){Oe(Z,U,w);return}t.bindTexture(a.TEXTURE_3D,Z.__webglTexture,a.TEXTURE0+w)}function F(U,w){const Z=i.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&Z.__version!==U.version){Qe(Z,U,w);return}t.bindTexture(a.TEXTURE_CUBE_MAP,Z.__webglTexture,a.TEXTURE0+w)}const K={[fh]:a.REPEAT,[Pr]:a.CLAMP_TO_EDGE,[dh]:a.MIRRORED_REPEAT},Le={[Rn]:a.NEAREST,[My]:a.NEAREST_MIPMAP_NEAREST,[Du]:a.NEAREST_MIPMAP_LINEAR,[On]:a.LINEAR,[gd]:a.LINEAR_MIPMAP_NEAREST,[js]:a.LINEAR_MIPMAP_LINEAR},Fe={[wy]:a.NEVER,[Py]:a.ALWAYS,[Ay]:a.LESS,[mp]:a.LEQUAL,[Ry]:a.EQUAL,[_p]:a.GEQUAL,[Cy]:a.GREATER,[by]:a.NOTEQUAL};function Ue(U,w){if(w.type===rr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===On||w.magFilter===gd||w.magFilter===Du||w.magFilter===js||w.minFilter===On||w.minFilter===gd||w.minFilter===Du||w.minFilter===js)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),a.texParameteri(U,a.TEXTURE_WRAP_S,K[w.wrapS]),a.texParameteri(U,a.TEXTURE_WRAP_T,K[w.wrapT]),(U===a.TEXTURE_3D||U===a.TEXTURE_2D_ARRAY)&&a.texParameteri(U,a.TEXTURE_WRAP_R,K[w.wrapR]),a.texParameteri(U,a.TEXTURE_MAG_FILTER,Le[w.magFilter]),a.texParameteri(U,a.TEXTURE_MIN_FILTER,Le[w.minFilter]),w.compareFunction&&(a.texParameteri(U,a.TEXTURE_COMPARE_MODE,a.COMPARE_REF_TO_TEXTURE),a.texParameteri(U,a.TEXTURE_COMPARE_FUNC,Fe[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Rn||w.minFilter!==Du&&w.minFilter!==js||w.type===rr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||i.get(w).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");a.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy}}}function ae(U,w){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",I));const ie=w.source;let de=S.get(ie);de===void 0&&(de={},S.set(ie,de));const Me=V(w);if(Me!==U.__cacheKey){de[Me]===void 0&&(de[Me]={texture:a.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),de[Me].usedTimes++;const Ce=de[U.__cacheKey];Ce!==void 0&&(de[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&k(w)),U.__cacheKey=Me,U.__webglTexture=de[Me].texture}return Z}function ve(U,w,Z){return Math.floor(Math.floor(U/Z)/w)}function me(U,w,Z,ie){const Me=U.updateRanges;if(Me.length===0)t.texSubImage2D(a.TEXTURE_2D,0,0,0,w.width,w.height,Z,ie,w.data);else{Me.sort((qe,De)=>qe.start-De.start);let Ce=0;for(let qe=1;qe<Me.length;qe++){const De=Me[Ce],Re=Me[qe],je=De.start+De.count,et=ve(Re.start,w.width,4),it=ve(De.start,w.width,4);Re.start<=je+1&&et===it&&ve(Re.start+Re.count-1,w.width,4)===et?De.count=Math.max(De.count,Re.start+Re.count-De.start):(++Ce,Me[Ce]=Re)}Me.length=Ce+1;const he=t.getParameter(a.UNPACK_ROW_LENGTH),_e=t.getParameter(a.UNPACK_SKIP_PIXELS),Pe=t.getParameter(a.UNPACK_SKIP_ROWS);t.pixelStorei(a.UNPACK_ROW_LENGTH,w.width);for(let qe=0,De=Me.length;qe<De;qe++){const Re=Me[qe],je=Math.floor(Re.start/4),et=Math.ceil(Re.count/4),it=je%w.width,G=Math.floor(je/w.width),Ae=et,pe=1;t.pixelStorei(a.UNPACK_SKIP_PIXELS,it),t.pixelStorei(a.UNPACK_SKIP_ROWS,G),t.texSubImage2D(a.TEXTURE_2D,0,it,G,Ae,pe,Z,ie,w.data)}U.clearUpdateRanges(),t.pixelStorei(a.UNPACK_ROW_LENGTH,he),t.pixelStorei(a.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(a.UNPACK_SKIP_ROWS,Pe)}}function Oe(U,w,Z){let ie=a.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ie=a.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ie=a.TEXTURE_3D);const de=ae(U,w),Me=w.source;t.bindTexture(ie,U.__webglTexture,a.TEXTURE0+Z);const Ce=i.get(Me);if(Me.version!==Ce.__version||de===!0){if(t.activeTexture(a.TEXTURE0+Z),(typeof ImageBitmap<"u"&&w.image instanceof ImageBitmap)===!1){const pe=_t.getPrimaries(_t.workingColorSpace),be=w.colorSpace===fs?null:_t.getPrimaries(w.colorSpace),Ne=w.colorSpace===fs||pe===be?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne)}t.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment);let _e=x(w.image,!1,s.maxTextureSize);_e=En(w,_e);const Pe=o.convert(w.format,w.colorSpace),qe=o.convert(w.type);let De=R(w.internalFormat,Pe,qe,w.normalized,w.colorSpace,w.isVideoTexture);Ue(ie,w);let Re;const je=w.mipmaps,et=w.isVideoTexture!==!0,it=Ce.__version===void 0||de===!0,G=Me.dataReady,Ae=L(w,_e);if(w.isDepthTexture)De=P(w.format===Qs,w.type),it&&(et?t.texStorage2D(a.TEXTURE_2D,1,De,_e.width,_e.height):t.texImage2D(a.TEXTURE_2D,0,De,_e.width,_e.height,0,Pe,qe,null));else if(w.isDataTexture)if(je.length>0){et&&it&&t.texStorage2D(a.TEXTURE_2D,Ae,De,je[0].width,je[0].height);for(let pe=0,be=je.length;pe<be;pe++)Re=je[pe],et?G&&t.texSubImage2D(a.TEXTURE_2D,pe,0,0,Re.width,Re.height,Pe,qe,Re.data):t.texImage2D(a.TEXTURE_2D,pe,De,Re.width,Re.height,0,Pe,qe,Re.data);w.generateMipmaps=!1}else et?(it&&t.texStorage2D(a.TEXTURE_2D,Ae,De,_e.width,_e.height),G&&me(w,_e,Pe,qe)):t.texImage2D(a.TEXTURE_2D,0,De,_e.width,_e.height,0,Pe,qe,_e.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){et&&it&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,De,je[0].width,je[0].height,_e.depth);for(let pe=0,be=je.length;pe<be;pe++)if(Re=je[pe],w.format!==Yi)if(Pe!==null)if(et){if(G)if(w.layerUpdates.size>0){const Ne=Gg(Re.width,Re.height,w.format,w.type);for(const ge of w.layerUpdates){const We=Re.data.subarray(ge*Ne/Re.data.BYTES_PER_ELEMENT,(ge+1)*Ne/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,ge,Re.width,Re.height,1,Pe,We)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,_e.depth,Pe,Re.data)}else t.compressedTexImage3D(a.TEXTURE_2D_ARRAY,pe,De,Re.width,Re.height,_e.depth,0,Re.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?G&&t.texSubImage3D(a.TEXTURE_2D_ARRAY,pe,0,0,0,Re.width,Re.height,_e.depth,Pe,qe,Re.data):t.texImage3D(a.TEXTURE_2D_ARRAY,pe,De,Re.width,Re.height,_e.depth,0,Pe,qe,Re.data)}else{et&&it&&t.texStorage2D(a.TEXTURE_2D,Ae,De,je[0].width,je[0].height);for(let pe=0,be=je.length;pe<be;pe++)Re=je[pe],w.format!==Yi?Pe!==null?et?G&&t.compressedTexSubImage2D(a.TEXTURE_2D,pe,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(a.TEXTURE_2D,pe,De,Re.width,Re.height,0,Re.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?G&&t.texSubImage2D(a.TEXTURE_2D,pe,0,0,Re.width,Re.height,Pe,qe,Re.data):t.texImage2D(a.TEXTURE_2D,pe,De,Re.width,Re.height,0,Pe,qe,Re.data)}else if(w.isDataArrayTexture)if(et){if(it&&t.texStorage3D(a.TEXTURE_2D_ARRAY,Ae,De,_e.width,_e.height,_e.depth),G)if(w.layerUpdates.size>0){const pe=Gg(_e.width,_e.height,w.format,w.type);for(const be of w.layerUpdates){const Ne=_e.data.subarray(be*pe/_e.data.BYTES_PER_ELEMENT,(be+1)*pe/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,be,_e.width,_e.height,1,Pe,qe,Ne)}w.clearLayerUpdates()}else t.texSubImage3D(a.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Pe,qe,_e.data)}else t.texImage3D(a.TEXTURE_2D_ARRAY,0,De,_e.width,_e.height,_e.depth,0,Pe,qe,_e.data);else if(w.isData3DTexture)et?(it&&t.texStorage3D(a.TEXTURE_3D,Ae,De,_e.width,_e.height,_e.depth),G&&t.texSubImage3D(a.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Pe,qe,_e.data)):t.texImage3D(a.TEXTURE_3D,0,De,_e.width,_e.height,_e.depth,0,Pe,qe,_e.data);else if(w.isFramebufferTexture){if(it)if(et)t.texStorage2D(a.TEXTURE_2D,Ae,De,_e.width,_e.height);else{let pe=_e.width,be=_e.height;for(let Ne=0;Ne<Ae;Ne++)t.texImage2D(a.TEXTURE_2D,Ne,De,pe,be,0,Pe,qe,null),pe>>=1,be>>=1}}else if(w.isHTMLTexture){if("texElementImage2D"in a){const pe=a.canvas;if(pe.hasAttribute("layoutsubtree")||pe.setAttribute("layoutsubtree","true"),_e.parentNode!==pe){pe.appendChild(_e),g.add(w),pe.onpaint=be=>{const Ne=be.changedElements;for(const ge of g)Ne.includes(ge.image)&&(ge.needsUpdate=!0)},pe.requestPaint();return}if(a.texElementImage2D.length===3)a.texElementImage2D(a.TEXTURE_2D,a.RGBA8,_e);else{const Ne=a.RGBA,ge=a.RGBA,We=a.UNSIGNED_BYTE;a.texElementImage2D(a.TEXTURE_2D,0,Ne,ge,We,_e)}a.texParameteri(a.TEXTURE_2D,a.TEXTURE_MIN_FILTER,a.LINEAR),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_S,a.CLAMP_TO_EDGE),a.texParameteri(a.TEXTURE_2D,a.TEXTURE_WRAP_T,a.CLAMP_TO_EDGE)}}else if(je.length>0){if(et&&it){const pe=Tt(je[0]);t.texStorage2D(a.TEXTURE_2D,Ae,De,pe.width,pe.height)}for(let pe=0,be=je.length;pe<be;pe++)Re=je[pe],et?G&&t.texSubImage2D(a.TEXTURE_2D,pe,0,0,Pe,qe,Re):t.texImage2D(a.TEXTURE_2D,pe,De,Pe,qe,Re);w.generateMipmaps=!1}else if(et){if(it){const pe=Tt(_e);t.texStorage2D(a.TEXTURE_2D,Ae,De,pe.width,pe.height)}G&&t.texSubImage2D(a.TEXTURE_2D,0,0,0,Pe,qe,_e)}else t.texImage2D(a.TEXTURE_2D,0,De,Pe,qe,_e);y(w)&&b(ie),Ce.__version=Me.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Qe(U,w,Z){if(w.image.length!==6)return;const ie=ae(U,w),de=w.source;t.bindTexture(a.TEXTURE_CUBE_MAP,U.__webglTexture,a.TEXTURE0+Z);const Me=i.get(de);if(de.version!==Me.__version||ie===!0){t.activeTexture(a.TEXTURE0+Z);const Ce=_t.getPrimaries(_t.workingColorSpace),he=w.colorSpace===fs?null:_t.getPrimaries(w.colorSpace),_e=w.colorSpace===fs||Ce===he?a.NONE:a.BROWSER_DEFAULT_WEBGL;t.pixelStorei(a.UNPACK_FLIP_Y_WEBGL,w.flipY),t.pixelStorei(a.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),t.pixelStorei(a.UNPACK_ALIGNMENT,w.unpackAlignment),t.pixelStorei(a.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Pe=w.isCompressedTexture||w.image[0].isCompressedTexture,qe=w.image[0]&&w.image[0].isDataTexture,De=[];for(let ge=0;ge<6;ge++)!Pe&&!qe?De[ge]=x(w.image[ge],!0,s.maxCubemapSize):De[ge]=qe?w.image[ge].image:w.image[ge],De[ge]=En(w,De[ge]);const Re=De[0],je=o.convert(w.format,w.colorSpace),et=o.convert(w.type),it=R(w.internalFormat,je,et,w.normalized,w.colorSpace),G=w.isVideoTexture!==!0,Ae=Me.__version===void 0||ie===!0,pe=de.dataReady;let be=L(w,Re);Ue(a.TEXTURE_CUBE_MAP,w);let Ne;if(Pe){G&&Ae&&t.texStorage2D(a.TEXTURE_CUBE_MAP,be,it,Re.width,Re.height);for(let ge=0;ge<6;ge++){Ne=De[ge].mipmaps;for(let We=0;We<Ne.length;We++){const He=Ne[We];w.format!==Yi?je!==null?G?pe&&t.compressedTexSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,He.width,He.height,je,He.data):t.compressedTexImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,it,He.width,He.height,0,He.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,0,0,He.width,He.height,je,et,He.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We,it,He.width,He.height,0,je,et,He.data)}}}else{if(Ne=w.mipmaps,G&&Ae){Ne.length>0&&be++;const ge=Tt(De[0]);t.texStorage2D(a.TEXTURE_CUBE_MAP,be,it,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(qe){G?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,De[ge].width,De[ge].height,je,et,De[ge].data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,it,De[ge].width,De[ge].height,0,je,et,De[ge].data);for(let We=0;We<Ne.length;We++){const It=Ne[We].image[ge].image;G?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,It.width,It.height,je,et,It.data):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,it,It.width,It.height,0,je,et,It.data)}}else{G?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,je,et,De[ge]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,it,je,et,De[ge]);for(let We=0;We<Ne.length;We++){const He=Ne[We];G?pe&&t.texSubImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,0,0,je,et,He.image[ge]):t.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+ge,We+1,it,je,et,He.image[ge])}}}y(w)&&b(a.TEXTURE_CUBE_MAP),Me.__version=de.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function Je(U,w,Z,ie,de,Me){const Ce=o.convert(Z.format,Z.colorSpace),he=o.convert(Z.type),_e=R(Z.internalFormat,Ce,he,Z.normalized,Z.colorSpace),Pe=i.get(w),qe=i.get(Z);if(qe.__renderTarget=w,!Pe.__hasExternalTextures){const De=Math.max(1,w.width>>Me),Re=Math.max(1,w.height>>Me);de===a.TEXTURE_3D||de===a.TEXTURE_2D_ARRAY?t.texImage3D(de,Me,_e,De,Re,w.depth,0,Ce,he,null):t.texImage2D(de,Me,_e,De,Re,0,Ce,he,null)}t.bindFramebuffer(a.FRAMEBUFFER,U),Wt(w)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,ie,de,qe.__webglTexture,0,Pt(w)):(de===a.TEXTURE_2D||de>=a.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=a.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&a.framebufferTexture2D(a.FRAMEBUFFER,ie,de,qe.__webglTexture,Me),t.bindFramebuffer(a.FRAMEBUFFER,null)}function Ht(U,w,Z){if(a.bindRenderbuffer(a.RENDERBUFFER,U),w.depthBuffer){const ie=w.depthTexture,de=ie&&ie.isDepthTexture?ie.type:null,Me=P(w.stencilBuffer,de),Ce=w.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;Wt(w)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Pt(w),Me,w.width,w.height):Z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Pt(w),Me,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,Me,w.width,w.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,Ce,a.RENDERBUFFER,U)}else{const ie=w.textures;for(let de=0;de<ie.length;de++){const Me=ie[de],Ce=o.convert(Me.format,Me.colorSpace),he=o.convert(Me.type),_e=R(Me.internalFormat,Ce,he,Me.normalized,Me.colorSpace);Wt(w)?c.renderbufferStorageMultisampleEXT(a.RENDERBUFFER,Pt(w),_e,w.width,w.height):Z?a.renderbufferStorageMultisample(a.RENDERBUFFER,Pt(w),_e,w.width,w.height):a.renderbufferStorage(a.RENDERBUFFER,_e,w.width,w.height)}}a.bindRenderbuffer(a.RENDERBUFFER,null)}function ut(U,w,Z){const ie=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(a.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const de=i.get(w.depthTexture);if(de.__renderTarget=w,(!de.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),ie){if(de.__webglInit===void 0&&(de.__webglInit=!0,w.depthTexture.addEventListener("dispose",I)),de.__webglTexture===void 0){de.__webglTexture=a.createTexture(),t.bindTexture(a.TEXTURE_CUBE_MAP,de.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,w.depthTexture);const Pe=o.convert(w.depthTexture.format),qe=o.convert(w.depthTexture.type);let De;w.depthTexture.format===Ur?De=a.DEPTH_COMPONENT24:w.depthTexture.format===Qs&&(De=a.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)a.texImage2D(a.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,De,w.width,w.height,0,Pe,qe,null)}}else H(w.depthTexture,0);const Me=de.__webglTexture,Ce=Pt(w),he=ie?a.TEXTURE_CUBE_MAP_POSITIVE_X+Z:a.TEXTURE_2D,_e=w.depthTexture.format===Qs?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;if(w.depthTexture.format===Ur)Wt(w)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,he,Me,0,Ce):a.framebufferTexture2D(a.FRAMEBUFFER,_e,he,Me,0);else if(w.depthTexture.format===Qs)Wt(w)?c.framebufferTexture2DMultisampleEXT(a.FRAMEBUFFER,_e,he,Me,0,Ce):a.framebufferTexture2D(a.FRAMEBUFFER,_e,he,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(U){const w=i.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){const ie=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ie){const de=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ie.removeEventListener("dispose",de)};ie.addEventListener("dispose",de),w.__depthDisposeCallback=de}w.__boundDepthTexture=ie}if(U.depthTexture&&!w.__autoAllocateDepthBuffer)if(Z)for(let ie=0;ie<6;ie++)ut(w.__webglFramebuffer[ie],U,ie);else{const ie=U.texture.mipmaps;ie&&ie.length>0?ut(w.__webglFramebuffer[0],U,0):ut(w.__webglFramebuffer,U,0)}else if(Z){w.__webglDepthbuffer=[];for(let ie=0;ie<6;ie++)if(t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[ie]),w.__webglDepthbuffer[ie]===void 0)w.__webglDepthbuffer[ie]=a.createRenderbuffer(),Ht(w.__webglDepthbuffer[ie],U,!1);else{const de=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer[ie];a.bindRenderbuffer(a.RENDERBUFFER,Me),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,Me)}}else{const ie=U.texture.mipmaps;if(ie&&ie.length>0?t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(a.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=a.createRenderbuffer(),Ht(w.__webglDepthbuffer,U,!1);else{const de=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Me=w.__webglDepthbuffer;a.bindRenderbuffer(a.RENDERBUFFER,Me),a.framebufferRenderbuffer(a.FRAMEBUFFER,de,a.RENDERBUFFER,Me)}}t.bindFramebuffer(a.FRAMEBUFFER,null)}function xt(U,w,Z){const ie=i.get(U);w!==void 0&&Je(ie.__webglFramebuffer,U,U.texture,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,0),Z!==void 0&&At(U)}function mt(U){const w=U.texture,Z=i.get(U),ie=i.get(w);U.addEventListener("dispose",T);const de=U.textures,Me=U.isWebGLCubeRenderTarget===!0,Ce=de.length>1;if(Ce||(ie.__webglTexture===void 0&&(ie.__webglTexture=a.createTexture()),ie.__version=w.version,u.memory.textures++),Me){Z.__webglFramebuffer=[];for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer[he]=[];for(let _e=0;_e<w.mipmaps.length;_e++)Z.__webglFramebuffer[he][_e]=a.createFramebuffer()}else Z.__webglFramebuffer[he]=a.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){Z.__webglFramebuffer=[];for(let he=0;he<w.mipmaps.length;he++)Z.__webglFramebuffer[he]=a.createFramebuffer()}else Z.__webglFramebuffer=a.createFramebuffer();if(Ce)for(let he=0,_e=de.length;he<_e;he++){const Pe=i.get(de[he]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=a.createTexture(),u.memory.textures++)}if(U.samples>0&&Wt(U)===!1){Z.__webglMultisampledFramebuffer=a.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(a.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let he=0;he<de.length;he++){const _e=de[he];Z.__webglColorRenderbuffer[he]=a.createRenderbuffer(),a.bindRenderbuffer(a.RENDERBUFFER,Z.__webglColorRenderbuffer[he]);const Pe=o.convert(_e.format,_e.colorSpace),qe=o.convert(_e.type),De=R(_e.internalFormat,Pe,qe,_e.normalized,_e.colorSpace,U.isXRRenderTarget===!0),Re=Pt(U);a.renderbufferStorageMultisample(a.RENDERBUFFER,Re,De,U.width,U.height),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+he,a.RENDERBUFFER,Z.__webglColorRenderbuffer[he])}a.bindRenderbuffer(a.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=a.createRenderbuffer(),Ht(Z.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(a.FRAMEBUFFER,null)}}if(Me){t.bindTexture(a.TEXTURE_CUBE_MAP,ie.__webglTexture),Ue(a.TEXTURE_CUBE_MAP,w);for(let he=0;he<6;he++)if(w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)Je(Z.__webglFramebuffer[he][_e],U,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,_e);else Je(Z.__webglFramebuffer[he],U,w,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);y(w)&&b(a.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let he=0,_e=de.length;he<_e;he++){const Pe=de[he],qe=i.get(Pe);let De=a.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(De=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(De,qe.__webglTexture),Ue(De,Pe),Je(Z.__webglFramebuffer,U,Pe,a.COLOR_ATTACHMENT0+he,De,0),y(Pe)&&b(De)}t.unbindTexture()}else{let he=a.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(he=U.isWebGL3DRenderTarget?a.TEXTURE_3D:a.TEXTURE_2D_ARRAY),t.bindTexture(he,ie.__webglTexture),Ue(he,w),w.mipmaps&&w.mipmaps.length>0)for(let _e=0;_e<w.mipmaps.length;_e++)Je(Z.__webglFramebuffer[_e],U,w,a.COLOR_ATTACHMENT0,he,_e);else Je(Z.__webglFramebuffer,U,w,a.COLOR_ATTACHMENT0,he,0);y(w)&&b(he),t.unbindTexture()}U.depthBuffer&&At(U)}function Gt(U){const w=U.textures;for(let Z=0,ie=w.length;Z<ie;Z++){const de=w[Z];if(y(de)){const Me=N(U),Ce=i.get(de).__webglTexture;t.bindTexture(Me,Ce),b(Me),t.unbindTexture()}}}const tn=[],nn=[];function $t(U){if(U.samples>0){if(Wt(U)===!1){const w=U.textures,Z=U.width,ie=U.height;let de=a.COLOR_BUFFER_BIT;const Me=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT,Ce=i.get(U),he=w.length>1;if(he)for(let Pe=0;Pe<w.length;Pe++)t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pe,a.RENDERBUFFER,null),t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pe,a.TEXTURE_2D,null,0);t.bindFramebuffer(a.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const _e=U.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Pe=0;Pe<w.length;Pe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(de|=a.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(de|=a.STENCIL_BUFFER_BIT)),he){a.framebufferRenderbuffer(a.READ_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const qe=i.get(w[Pe]).__webglTexture;a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0,a.TEXTURE_2D,qe,0)}a.blitFramebuffer(0,0,Z,ie,0,0,Z,ie,de,a.NEAREST),d===!0&&(tn.length=0,nn.length=0,tn.push(a.COLOR_ATTACHMENT0+Pe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(tn.push(Me),nn.push(Me),a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,nn)),a.invalidateFramebuffer(a.READ_FRAMEBUFFER,tn))}if(t.bindFramebuffer(a.READ_FRAMEBUFFER,null),t.bindFramebuffer(a.DRAW_FRAMEBUFFER,null),he)for(let Pe=0;Pe<w.length;Pe++){t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),a.framebufferRenderbuffer(a.FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pe,a.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const qe=i.get(w[Pe]).__webglTexture;t.bindFramebuffer(a.FRAMEBUFFER,Ce.__webglFramebuffer),a.framebufferTexture2D(a.DRAW_FRAMEBUFFER,a.COLOR_ATTACHMENT0+Pe,a.TEXTURE_2D,qe,0)}t.bindFramebuffer(a.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&d){const w=U.stencilBuffer?a.DEPTH_STENCIL_ATTACHMENT:a.DEPTH_ATTACHMENT;a.invalidateFramebuffer(a.DRAW_FRAMEBUFFER,[w])}}}function Pt(U){return Math.min(s.maxSamples,U.samples)}function Wt(U){const w=i.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function q(U){const w=u.render.frame;p.get(U)!==w&&(p.set(U,w),U.update())}function En(U,w){const Z=U.colorSpace,ie=U.format,de=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==hc&&Z!==fs&&(_t.getTransfer(Z)===Nt?(ie!==Yi||de!==Pi)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Et("WebGLTextures: Unsupported texture color space:",Z)),w}function Tt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(h.width=U.naturalWidth||U.width,h.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(h.width=U.displayWidth,h.height=U.displayHeight):(h.width=U.width,h.height=U.height),h}this.allocateTextureUnit=Q,this.resetTextureUnits=j,this.getTextureUnits=re,this.setTextureUnits=W,this.setTexture2D=H,this.setTexture2DArray=oe,this.setTexture3D=se,this.setTextureCube=F,this.rebindTextures=xt,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=Je,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function tA(a,e){function t(i,s=fs){let o;const u=_t.getTransfer(s);if(i===Pi)return a.UNSIGNED_BYTE;if(i===cp)return a.UNSIGNED_SHORT_4_4_4_4;if(i===fp)return a.UNSIGNED_SHORT_5_5_5_1;if(i===G0)return a.UNSIGNED_INT_5_9_9_9_REV;if(i===W0)return a.UNSIGNED_INT_10F_11F_11F_REV;if(i===V0)return a.BYTE;if(i===H0)return a.SHORT;if(i===dl)return a.UNSIGNED_SHORT;if(i===up)return a.INT;if(i===cr)return a.UNSIGNED_INT;if(i===rr)return a.FLOAT;if(i===Ir)return a.HALF_FLOAT;if(i===X0)return a.ALPHA;if(i===Y0)return a.RGB;if(i===Yi)return a.RGBA;if(i===Ur)return a.DEPTH_COMPONENT;if(i===Qs)return a.DEPTH_STENCIL;if(i===q0)return a.RED;if(i===dp)return a.RED_INTEGER;if(i===sa)return a.RG;if(i===hp)return a.RG_INTEGER;if(i===pp)return a.RGBA_INTEGER;if(i===ic||i===rc||i===sc||i===ac)if(u===Nt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ic)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ac)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ic)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ac)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===ph||i===mh||i===_h)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===hh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ph)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_h)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gh||i===vh||i===xh||i===Sh||i===yh||i===fc||i===Mh)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(i===gh||i===vh)return u===Nt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===xh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(i===Sh)return o.COMPRESSED_R11_EAC;if(i===yh)return o.COMPRESSED_SIGNED_R11_EAC;if(i===fc)return o.COMPRESSED_RG11_EAC;if(i===Mh)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Eh||i===Th||i===wh||i===Ah||i===Rh||i===Ch||i===bh||i===Ph||i===Dh||i===Lh||i===Nh||i===Ih||i===Uh||i===Fh)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Eh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Th)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===wh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ah)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Rh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ch)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===bh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ph)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Dh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ih)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Fh)return u===Nt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oh||i===kh||i===Bh)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(i===Oh)return u===Nt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zh||i===Vh||i===dc||i===Hh)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(i===zh)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Vh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===dc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===hl?a.UNSIGNED_INT_24_8:a[i]!==void 0?a[i]:null}return{convert:t}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
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

}`;class rA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new iv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new qi({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fr(new wl(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class sA extends oa{constructor(e,t){super();const i=this;let s=null,o=1,u=null,c="local-floor",d=1,h=null,p=null,g=null,_=null,S=null,E=null;const M=typeof XRWebGLBinding<"u",x=new rA,y={},b=t.getContextAttributes();let N=null,R=null;const P=[],L=[],I=new yt;let T=null;const D=new Wi;D.viewport=new sn;const k=new Wi;k.viewport=new sn;const B=[D,k],Y=new mM;let j=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ve=P[ae];return ve===void 0&&(ve=new wd,P[ae]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ae){let ve=P[ae];return ve===void 0&&(ve=new wd,P[ae]=ve),ve.getGripSpace()},this.getHand=function(ae){let ve=P[ae];return ve===void 0&&(ve=new wd,P[ae]=ve),ve.getHandSpace()};function W(ae){const ve=L.indexOf(ae.inputSource);if(ve===-1)return;const me=P[ve];me!==void 0&&(me.update(ae.inputSource,ae.frame,h||u),me.dispatchEvent({type:ae.type,data:ae.inputSource}))}function Q(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Q),s.removeEventListener("inputsourceschange",V);for(let ae=0;ae<P.length;ae++){const ve=L[ae];ve!==null&&(L[ae]=null,P[ae].disconnect(ve))}j=null,re=null,x.reset();for(const ae in y)delete y[ae];e.setRenderTarget(N),S=null,_=null,g=null,s=null,R=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){o=ae,i.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){c=ae,i.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||u},this.setReferenceSpace=function(ae){h=ae},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return E},this.getSession=function(){return s},this.setSession=async function(ae){if(s=ae,s!==null){if(N=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Q),s.addEventListener("inputsourceschange",V),b.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Oe=null,Qe=null;b.depth&&(Qe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=b.stencil?Qs:Ur,Oe=b.stencil?hl:cr);const Je={colorFormat:t.RGBA8,depthFormat:Qe,scaleFactor:o};g=this.getBinding(),_=g.createProjectionLayer(Je),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new lr(_.textureWidth,_.textureHeight,{format:Yi,type:Pi,depthTexture:new ro(_.textureWidth,_.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const me={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};S=new XRWebGLLayer(s,t,me),s.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),R=new lr(S.framebufferWidth,S.framebufferHeight,{format:Yi,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(d),h=null,u=await s.requestReferenceSpace(c),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function V(ae){for(let ve=0;ve<ae.removed.length;ve++){const me=ae.removed[ve],Oe=L.indexOf(me);Oe>=0&&(L[Oe]=null,P[Oe].disconnect(me))}for(let ve=0;ve<ae.added.length;ve++){const me=ae.added[ve];let Oe=L.indexOf(me);if(Oe===-1){for(let Je=0;Je<P.length;Je++)if(Je>=L.length){L.push(me),Oe=Je;break}else if(L[Je]===null){L[Je]=me,Oe=Je;break}if(Oe===-1)break}const Qe=P[Oe];Qe&&Qe.connect(me)}}const H=new le,oe=new le;function se(ae,ve,me){H.setFromMatrixPosition(ve.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);const Oe=H.distanceTo(oe),Qe=ve.projectionMatrix.elements,Je=me.projectionMatrix.elements,Ht=Qe[14]/(Qe[10]-1),ut=Qe[14]/(Qe[10]+1),At=(Qe[9]+1)/Qe[5],xt=(Qe[9]-1)/Qe[5],mt=(Qe[8]-1)/Qe[0],Gt=(Je[8]+1)/Je[0],tn=Ht*mt,nn=Ht*Gt,$t=Oe/(-mt+Gt),Pt=$t*-mt;if(ve.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Pt),ae.translateZ($t),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),Qe[10]===-1)ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const Wt=Ht+$t,q=ut+$t,En=tn-Pt,Tt=nn+(Oe-Pt),U=At*ut/q*Wt,w=xt*ut/q*Wt;ae.projectionMatrix.makePerspective(En,Tt,U,w,Wt,q),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function F(ae,ve){ve===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ve.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(s===null)return;let ve=ae.near,me=ae.far;x.texture!==null&&(x.depthNear>0&&(ve=x.depthNear),x.depthFar>0&&(me=x.depthFar)),Y.near=k.near=D.near=ve,Y.far=k.far=D.far=me,(j!==Y.near||re!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),j=Y.near,re=Y.far),Y.layers.mask=ae.layers.mask|6,D.layers.mask=Y.layers.mask&-5,k.layers.mask=Y.layers.mask&-3;const Oe=ae.parent,Qe=Y.cameras;F(Y,Oe);for(let Je=0;Je<Qe.length;Je++)F(Qe[Je],Oe);Qe.length===2?se(Y,D,k):Y.projectionMatrix.copy(D.projectionMatrix),K(ae,Y,Oe)};function K(ae,ve,me){me===null?ae.matrix.copy(ve.matrixWorld):(ae.matrix.copy(me.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ve.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ve.projectionMatrix),ae.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=Gh*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(_===null&&S===null))return d},this.setFoveation=function(ae){d=ae,_!==null&&(_.fixedFoveation=ae),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ae)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(Y)},this.getCameraTexture=function(ae){return y[ae]};let Le=null;function Fe(ae,ve){if(p=ve.getViewerPose(h||u),E=ve,p!==null){const me=p.views;S!==null&&(e.setRenderTargetFramebuffer(R,S.framebuffer),e.setRenderTarget(R));let Oe=!1;me.length!==Y.cameras.length&&(Y.cameras.length=0,Oe=!0);for(let ut=0;ut<me.length;ut++){const At=me[ut];let xt=null;if(S!==null)xt=S.getViewport(At);else{const Gt=g.getViewSubImage(_,At);xt=Gt.viewport,ut===0&&(e.setRenderTargetTextures(R,Gt.colorTexture,Gt.depthStencilTexture),e.setRenderTarget(R))}let mt=B[ut];mt===void 0&&(mt=new Wi,mt.layers.enable(ut),mt.viewport=new sn,B[ut]=mt),mt.matrix.fromArray(At.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(At.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(xt.x,xt.y,xt.width,xt.height),ut===0&&(Y.matrix.copy(mt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Oe===!0&&Y.cameras.push(mt)}const Qe=s.enabledFeatures;if(Qe&&Qe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){g=i.getBinding();const ut=g.getDepthInformation(me[0]);ut&&ut.isValid&&ut.texture&&x.init(ut,s.renderState)}if(Qe&&Qe.includes("camera-access")&&M){e.state.unbindTexture(),g=i.getBinding();for(let ut=0;ut<me.length;ut++){const At=me[ut].camera;if(At){let xt=y[At];xt||(xt=new iv,y[At]=xt);const mt=g.getCameraImage(At);xt.sourceTexture=mt}}}}for(let me=0;me<P.length;me++){const Oe=L[me],Qe=P[me];Oe!==null&&Qe!==void 0&&Qe.update(Oe,ve,h||u)}Le&&Le(ae,ve),ve.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ve}),E=null}const Ue=new av;Ue.setAnimationLoop(Fe),this.setAnimationLoop=function(ae){Le=ae},this.dispose=function(){}}}const aA=new hn,hv=new lt;hv.set(-1,0,0,0,1,0,0,0,1);function oA(a,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function i(x,y){y.color.getRGB(x.fogColor.value,rv(a)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function s(x,y,b,N,R){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(x,y):y.isMeshLambertMaterial?(o(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(x,y),g(x,y)):y.isMeshPhongMaterial?(o(x,y),p(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(x,y),_(x,y),y.isMeshPhysicalMaterial&&S(x,y,R)):y.isMeshMatcapMaterial?(o(x,y),E(x,y)):y.isMeshDepthMaterial?o(x,y):y.isMeshDistanceMaterial?(o(x,y),M(x,y)):y.isMeshNormalMaterial?o(x,y):y.isLineBasicMaterial?(u(x,y),y.isLineDashedMaterial&&c(x,y)):y.isPointsMaterial?d(x,y,b,N):y.isSpriteMaterial?h(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===ei&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===ei&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const b=e.get(y),N=b.envMap,R=b.envMapRotation;N&&(x.envMap.value=N,x.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(R)).transpose(),N.isCubeTexture&&N.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(hv),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function u(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function c(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function d(x,y,b,N){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*b,x.scale.value=N*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function h(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function p(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function g(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,b){x.ior.value=y.ior,y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===ei&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=b.texture,x.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function E(x,y){y.matcap&&(x.matcap.value=y.matcap)}function M(x,y){const b=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(b.matrixWorld),x.nearDistance.value=b.shadow.camera.near,x.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lA(a,e,t,i){let s={},o={},u=[];const c=a.getParameter(a.MAX_UNIFORM_BUFFER_BINDINGS);function d(R,P){const L=P.program;i.uniformBlockBinding(R,L)}function h(R,P){let L=s[R.id];L===void 0&&(x(R),L=p(R),s[R.id]=L,R.addEventListener("dispose",b));const I=P.program;i.updateUBOMapping(R,I);const T=e.render.frame;o[R.id]!==T&&(_(R),o[R.id]=T)}function p(R){const P=g();R.__bindingPointIndex=P;const L=a.createBuffer(),I=R.__size,T=R.usage;return a.bindBuffer(a.UNIFORM_BUFFER,L),a.bufferData(a.UNIFORM_BUFFER,I,T),a.bindBuffer(a.UNIFORM_BUFFER,null),a.bindBufferBase(a.UNIFORM_BUFFER,P,L),L}function g(){for(let R=0;R<c;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Et("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const P=s[R.id],L=R.uniforms,I=R.__cache;a.bindBuffer(a.UNIFORM_BUFFER,P);for(let T=0,D=L.length;T<D;T++){const k=L[T];if(Array.isArray(k))for(let B=0,Y=k.length;B<Y;B++)S(k[B],T,B,I);else S(k,T,0,I)}a.bindBuffer(a.UNIFORM_BUFFER,null)}function S(R,P,L,I){if(M(R,P,L,I)===!0){const T=R.__offset,D=R.value;if(Array.isArray(D)){let k=0;for(let B=0;B<D.length;B++){const Y=D[B],j=y(Y);E(Y,R.__data,k),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(k+=j.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(D,R.__data,0);a.bufferSubData(a.UNIFORM_BUFFER,T,R.__data)}}function E(R,P,L){typeof R=="number"||typeof R=="boolean"?P[0]=R:R.isMatrix3?(P[0]=R.elements[0],P[1]=R.elements[1],P[2]=R.elements[2],P[3]=0,P[4]=R.elements[3],P[5]=R.elements[4],P[6]=R.elements[5],P[7]=0,P[8]=R.elements[6],P[9]=R.elements[7],P[10]=R.elements[8],P[11]=0):ArrayBuffer.isView(R)?P.set(new R.constructor(R.buffer,R.byteOffset,P.length)):R.toArray(P,L)}function M(R,P,L,I){const T=R.value,D=P+"_"+L;if(I[D]===void 0)return typeof T=="number"||typeof T=="boolean"?I[D]=T:ArrayBuffer.isView(T)?I[D]=T.slice():I[D]=T.clone(),!0;{const k=I[D];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return I[D]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function x(R){const P=R.uniforms;let L=0;const I=16;for(let D=0,k=P.length;D<k;D++){const B=Array.isArray(P[D])?P[D]:[P[D]];for(let Y=0,j=B.length;Y<j;Y++){const re=B[Y],W=Array.isArray(re.value)?re.value:[re.value];for(let Q=0,V=W.length;Q<V;Q++){const H=W[Q],oe=y(H),se=L%I,F=se%oe.boundary,K=se+F;L+=F,K!==0&&I-K<oe.storage&&(L+=I-K),re.__data=new Float32Array(oe.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=L,L+=oe.storage}}}const T=L%I;return T>0&&(L+=I-T),R.__size=L,R.__cache={},this}function y(R){const P={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(P.boundary=4,P.storage=4):R.isVector2?(P.boundary=8,P.storage=8):R.isVector3||R.isColor?(P.boundary=16,P.storage=12):R.isVector4?(P.boundary=16,P.storage=16):R.isMatrix3?(P.boundary=48,P.storage=48):R.isMatrix4?(P.boundary=64,P.storage=64):R.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(P.boundary=16,P.storage=R.byteLength):st("WebGLRenderer: Unsupported uniform value type.",R),P}function b(R){const P=R.target;P.removeEventListener("dispose",b);const L=u.indexOf(P.__bindingPointIndex);u.splice(L,1),a.deleteBuffer(s[P.id]),delete s[P.id],delete o[P.id]}function N(){for(const R in s)a.deleteBuffer(s[R]);u=[],s={},o={}}return{bind:d,update:h,dispose:N}}const uA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let er=null;function cA(){return er===null&&(er=new nM(uA,16,16,sa,Ir),er.name="DFG_LUT",er.minFilter=On,er.magFilter=On,er.wrapS=Pr,er.wrapT=Pr,er.generateMipmaps=!1,er.needsUpdate=!0),er}class fA{constructor(e={}){const{canvas:t=Ly(),context:i=null,depth:s=!0,stencil:o=!1,alpha:u=!1,antialias:c=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:_=!1,outputBufferType:S=Pi}=e;this.isWebGLRenderer=!0;let E;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=i.getContextAttributes().alpha}else E=u;const M=S,x=new Set([pp,hp,dp]),y=new Set([Pi,cr,dl,hl,cp,fp]),b=new Uint32Array(4),N=new Int32Array(4),R=new le;let P=null,L=null;const I=[],T=[];let D=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let B=!1,Y=null,j=null,re=null,W=null;this._outputColorSpace=bi;let Q=0,V=0,H=null,oe=-1,se=null;const F=new sn,K=new sn;let Le=null;const Fe=new bt(0);let Ue=0,ae=t.width,ve=t.height,me=1,Oe=null,Qe=null;const Je=new sn(0,0,ae,ve),Ht=new sn(0,0,ae,ve);let ut=!1;const At=new tv;let xt=!1,mt=!1;const Gt=new hn,tn=new le,nn=new sn,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Wt(){return H===null?me:1}let q=i;function En(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:s,stencil:o,antialias:c,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${lp}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",Rt,!1),t.addEventListener("webglcontextcreationerror",bn,!1),q===null){const $="webgl2";if(q=En($,C),q===null)throw En($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(C){throw Et("WebGLRenderer: "+C.message),C}let Tt,U,w,Z,ie,de,Me,Ce,he,_e,Pe,qe,De,Re,je,et,it,G,Ae,pe,be,Ne,ge;function We(){Tt=new cT(q),Tt.init(),be=new tA(q,Tt),U=new nT(q,Tt,e,be),w=new Jw(q,Tt),U.reversedDepthBuffer&&_&&w.buffers.depth.setReversed(!0),j=q.createFramebuffer(),re=q.createFramebuffer(),W=q.createFramebuffer(),Z=new hT(q),ie=new Bw,de=new eA(q,Tt,w,ie,U,be,Z),Me=new uT(k),Ce=new gM(q),Ne=new eT(q,Ce),he=new fT(q,Ce,Z,Ne),_e=new mT(q,he,Ce,Ne,Z),G=new pT(q,U,de),je=new iT(ie),Pe=new kw(k,Me,Tt,U,Ne,je),qe=new oA(k,ie),De=new Vw,Re=new qw(Tt),it=new J1(k,Me,w,_e,E,d),et=new Qw(k,_e,U),ge=new lA(q,Z,U,w),Ae=new tT(q,Tt,Z),pe=new dT(q,Tt,Z),Z.programs=Pe.programs,k.capabilities=U,k.extensions=Tt,k.properties=ie,k.renderLists=De,k.shadowMap=et,k.state=w,k.info=Z}We(),M!==Pi&&(D=new gT(M,t.width,t.height,c,s,o));const He=new sA(k,q);this.xr=He,this.getContext=function(){return q},this.getContextAttributes=function(){return q.getContextAttributes()},this.forceContextLoss=function(){const C=Tt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Tt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(C){C!==void 0&&(me=C,this.setSize(ae,ve,!1))},this.getSize=function(C){return C.set(ae,ve)},this.setSize=function(C,$,ue=!0){if(He.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,ve=$,t.width=Math.floor(C*me),t.height=Math.floor($*me),ue===!0&&(t.style.width=C+"px",t.style.height=$+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(ae*me,ve*me).floor()},this.setDrawingBufferSize=function(C,$,ue){ae=C,ve=$,me=ue,t.width=Math.floor(C*ue),t.height=Math.floor($*ue),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(M===Pi){Et("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){st("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(F)},this.getViewport=function(C){return C.copy(Je)},this.setViewport=function(C,$,ue,te){C.isVector4?Je.set(C.x,C.y,C.z,C.w):Je.set(C,$,ue,te),w.viewport(F.copy(Je).multiplyScalar(me).round())},this.getScissor=function(C){return C.copy(Ht)},this.setScissor=function(C,$,ue,te){C.isVector4?Ht.set(C.x,C.y,C.z,C.w):Ht.set(C,$,ue,te),w.scissor(K.copy(Ht).multiplyScalar(me).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(C){w.setScissorTest(ut=C)},this.setOpaqueSort=function(C){Oe=C},this.setTransparentSort=function(C){Qe=C},this.getClearColor=function(C){return C.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor(...arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,ue=!0){let te=0;if(C){let ee=!1;if(H!==null){const we=H.texture.format;ee=x.has(we)}if(ee){const we=H.texture.type,ze=y.has(we),Te=it.getClearColor(),Xe=it.getClearAlpha(),Ze=Te.r,at=Te.g,ot=Te.b;ze?(b[0]=Ze,b[1]=at,b[2]=ot,b[3]=Xe,q.clearBufferuiv(q.COLOR,0,b)):(N[0]=Ze,N[1]=at,N[2]=ot,N[3]=Xe,q.clearBufferiv(q.COLOR,0,N))}else te|=q.COLOR_BUFFER_BIT}$&&(te|=q.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(te|=q.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&q.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),Y=C},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Rt,!1),t.removeEventListener("webglcontextcreationerror",bn,!1),it.dispose(),De.dispose(),Re.dispose(),ie.dispose(),Me.dispose(),_e.dispose(),Ne.dispose(),ge.dispose(),Pe.dispose(),He.dispose(),He.removeEventListener("sessionstart",Rl),He.removeEventListener("sessionend",Cl),Bn.stop()};function It(C){C.preventDefault(),Tg("WebGLRenderer: Context Lost."),B=!0}function Rt(){Tg("WebGLRenderer: Context Restored."),B=!1;const C=Z.autoReset,$=et.enabled,ue=et.autoUpdate,te=et.needsUpdate,ee=et.type;We(),Z.autoReset=C,et.enabled=$,et.autoUpdate=ue,et.needsUpdate=te,et.type=ee}function bn(C){Et("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Si(C){const $=C.target;$.removeEventListener("dispose",Si),Es($)}function Es(C){ua(C),ie.remove(C)}function ua(C){const $=ie.get(C).programs;$!==void 0&&($.forEach(function(ue){Pe.releaseProgram(ue)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,ue,te,ee,we){$===null&&($=$t);const ze=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,Te=Kt(C,$,ue,te,ee);w.setMaterial(te,ze);let Xe=ue.index,Ze=1;if(te.wireframe===!0){if(Xe=he.getWireframeAttribute(ue),Xe===void 0)return;Ze=2}const at=ue.drawRange,ot=ue.attributes.position;let $e=at.start*Ze,St=(at.start+at.count)*Ze;we!==null&&($e=Math.max($e,we.start*Ze),St=Math.min(St,(we.start+we.count)*Ze)),Xe!==null?($e=Math.max($e,0),St=Math.min(St,Xe.count)):ot!=null&&($e=Math.max($e,0),St=Math.min(St,ot.count));const Ot=St-$e;if(Ot<0||Ot===1/0)return;Ne.setup(ee,te,Te,ue,Xe);let Xt,Dt=Ae;if(Xe!==null&&(Xt=Ce.get(Xe),Dt=pe,Dt.setIndex(Xt)),ee.isMesh)te.wireframe===!0?(w.setLineWidth(te.wireframeLinewidth*Wt()),Dt.setMode(q.LINES)):Dt.setMode(q.TRIANGLES);else if(ee.isLine){let un=te.linewidth;un===void 0&&(un=1),w.setLineWidth(un*Wt()),ee.isLineSegments?Dt.setMode(q.LINES):ee.isLineLoop?Dt.setMode(q.LINE_LOOP):Dt.setMode(q.LINE_STRIP)}else ee.isPoints?Dt.setMode(q.POINTS):ee.isSprite&&Dt.setMode(q.TRIANGLES);if(ee.isBatchedMesh)if(Tt.get("WEBGL_multi_draw"))Dt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const un=ee._multiDrawStarts,ke=ee._multiDrawCounts,Tn=ee._multiDrawCount,ft=Xe?Ce.get(Xe).bytesPerElement:1,Wn=ie.get(te).currentProgram.getUniforms();for(let Xn=0;Xn<Tn;Xn++)Wn.setValue(q,"_gl_DrawID",Xn),Dt.render(un[Xn]/ft,ke[Xn])}else if(ee.isInstancedMesh)Dt.renderInstances($e,Ot,ee.count);else if(ue.isInstancedBufferGeometry){const un=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,ke=Math.min(ue.instanceCount,un);Dt.renderInstances($e,Ot,ke)}else Dt.render($e,Ot)};function Ts(C,$,ue){C.transparent===!0&&C.side===br&&C.forceSinglePass===!1?(C.side=ei,C.needsUpdate=!0,Rs(C,$,ue),C.side=vs,C.needsUpdate=!0,Rs(C,$,ue),C.side=br):Rs(C,$,ue)}this.compile=function(C,$,ue=null){ue===null&&(ue=C),L=Re.get(ue),L.init($),T.push(L),ue.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),C!==ue&&C.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(L.pushLight(ee),ee.castShadow&&L.pushShadow(ee))}),L.setupLights();const te=new Set;return C.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const we=ee.material;if(we)if(Array.isArray(we))for(let ze=0;ze<we.length;ze++){const Te=we[ze];Ts(Te,ue,ee),te.add(Te)}else Ts(we,ue,ee),te.add(we)}),L=T.pop(),te},this.compileAsync=function(C,$,ue=null){const te=this.compile(C,$,ue);return new Promise(ee=>{function we(){if(te.forEach(function(ze){ie.get(ze).currentProgram.isReady()&&te.delete(ze)}),te.size===0){ee(C);return}setTimeout(we,10)}Tt.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let ws=null;function Lc(C){ws&&ws(C)}function Rl(){Bn.stop()}function Cl(){Bn.start()}const Bn=new av;Bn.setAnimationLoop(Lc),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(C){ws=C,He.setAnimationLoop(C),C===null?Bn.stop():Bn.start()},He.addEventListener("sessionstart",Rl),He.addEventListener("sessionend",Cl),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){Et("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;Y!==null&&Y.renderStart(C,$);const ue=He.enabled===!0&&He.isPresenting===!0,te=D!==null&&(H===null||ue)&&D.begin(k,H);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera($),$=He.getCamera()),C.isScene===!0&&C.onBeforeRender(k,C,$,H),L=Re.get(C,T.length),L.init($),L.state.textureUnits=de.getTextureUnits(),T.push(L),Gt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),At.setFromProjectionMatrix(Gt,sr,$.reversedDepth),mt=this.localClippingEnabled,xt=je.init(this.clippingPlanes,mt),P=De.get(C,I.length),P.init(),I.push(P),He.enabled===!0&&He.isPresenting===!0){const ze=k.xr.getDepthSensingMesh();ze!==null&&ca(ze,$,-1/0,k.sortObjects)}ca(C,$,0,k.sortObjects),P.finish(),k.sortObjects===!0&&P.sort(Oe,Qe,$.reversedDepth),Pt=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,Pt&&it.addToRenderList(P,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),xt===!0&&je.beginShadows();const ee=L.state.shadowsArray;if(et.render(ee,C,$),xt===!0&&je.endShadows(),(te&&D.hasRenderPass())===!1){const ze=P.opaque,Te=P.transmissive;if(L.setupLights(),$.isArrayCamera){const Xe=$.cameras;if(Te.length>0)for(let Ze=0,at=Xe.length;Ze<at;Ze++){const ot=Xe[Ze];bl(ze,Te,C,ot)}Pt&&it.render(C);for(let Ze=0,at=Xe.length;Ze<at;Ze++){const ot=Xe[Ze];mo(P,C,ot,ot.viewport)}}else Te.length>0&&bl(ze,Te,C,$),Pt&&it.render(C),mo(P,C,$)}H!==null&&V===0&&(de.updateMultisampleRenderTarget(H),de.updateRenderTargetMipmap(H)),te&&D.end(k),C.isScene===!0&&C.onAfterRender(k,C,$),Ne.resetDefaultState(),oe=-1,se=null,T.pop(),T.length>0?(L=T[T.length-1],de.setTextureUnits(L.state.textureUnits),xt===!0&&je.setGlobalState(k.clippingPlanes,L.state.camera)):L=null,I.pop(),I.length>0?P=I[I.length-1]:P=null,Y!==null&&Y.renderEnd()};function ca(C,$,ue,te){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLightProbeGrid)L.pushLightProbeGrid(C);else if(C.isLight)L.pushLight(C),C.castShadow&&L.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||At.intersectsSprite(C)){te&&nn.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Gt);const ze=_e.update(C),Te=C.material;Te.visible&&P.push(C,ze,Te,ue,nn.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||At.intersectsObject(C))){const ze=_e.update(C),Te=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),nn.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),nn.copy(ze.boundingSphere.center)),nn.applyMatrix4(C.matrixWorld).applyMatrix4(Gt)),Array.isArray(Te)){const Xe=ze.groups;for(let Ze=0,at=Xe.length;Ze<at;Ze++){const ot=Xe[Ze],$e=Te[ot.materialIndex];$e&&$e.visible&&P.push(C,ze,$e,ue,nn.z,ot)}}else Te.visible&&P.push(C,ze,Te,ue,nn.z,null)}}const we=C.children;for(let ze=0,Te=we.length;ze<Te;ze++)ca(we[ze],$,ue,te)}function mo(C,$,ue,te){const{opaque:ee,transmissive:we,transparent:ze}=C;L.setupLightsView(ue),xt===!0&&je.setGlobalState(k.clippingPlanes,ue),te&&w.viewport(F.copy(te)),ee.length>0&&As(ee,$,ue),we.length>0&&As(we,$,ue),ze.length>0&&As(ze,$,ue),w.buffers.depth.setTest(!0),w.buffers.depth.setMask(!0),w.buffers.color.setMask(!0),w.setPolygonOffset(!1)}function bl(C,$,ue,te){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(L.state.transmissionRenderTarget[te.id]===void 0){const $e=Tt.has("EXT_color_buffer_half_float")||Tt.has("EXT_color_buffer_float");L.state.transmissionRenderTarget[te.id]=new lr(1,1,{generateMipmaps:!0,type:$e?Ir:Pi,minFilter:js,samples:Math.max(4,U.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace})}const we=L.state.transmissionRenderTarget[te.id],ze=te.viewport||F;we.setSize(ze.z*k.transmissionResolutionScale,ze.w*k.transmissionResolutionScale);const Te=k.getRenderTarget(),Xe=k.getActiveCubeFace(),Ze=k.getActiveMipmapLevel();k.setRenderTarget(we),k.getClearColor(Fe),Ue=k.getClearAlpha(),Ue<1&&k.setClearColor(16777215,.5),k.clear(),Pt&&it.render(ue);const at=k.toneMapping;k.toneMapping=or;const ot=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),L.setupLightsView(te),xt===!0&&je.setGlobalState(k.clippingPlanes,te),As(C,ue,te),de.updateMultisampleRenderTarget(we),de.updateRenderTargetMipmap(we),Tt.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let St=0,Ot=$.length;St<Ot;St++){const Xt=$[St],{object:Dt,geometry:un,material:ke,group:Tn}=Xt;if(ke.side===br&&Dt.layers.test(te.layers)){const ft=ke.side;ke.side=ei,ke.needsUpdate=!0,_o(Dt,ue,te,un,ke,Tn),ke.side=ft,ke.needsUpdate=!0,$e=!0}}$e===!0&&(de.updateMultisampleRenderTarget(we),de.updateRenderTargetMipmap(we))}k.setRenderTarget(Te,Xe,Ze),k.setClearColor(Fe,Ue),ot!==void 0&&(te.viewport=ot),k.toneMapping=at}function As(C,$,ue){const te=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,we=C.length;ee<we;ee++){const ze=C[ee],{object:Te,geometry:Xe,group:Ze}=ze;let at=ze.material;at.allowOverride===!0&&te!==null&&(at=te),Te.layers.test(ue.layers)&&_o(Te,$,ue,Xe,at,Ze)}}function _o(C,$,ue,te,ee,we){C.onBeforeRender(k,$,ue,te,ee,we),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ee.onBeforeRender(k,$,ue,te,C,we),ee.transparent===!0&&ee.side===br&&ee.forceSinglePass===!1?(ee.side=ei,ee.needsUpdate=!0,k.renderBufferDirect(ue,$,te,ee,C,we),ee.side=vs,ee.needsUpdate=!0,k.renderBufferDirect(ue,$,te,ee,C,we),ee.side=br):k.renderBufferDirect(ue,$,te,ee,C,we),C.onAfterRender(k,$,ue,te,ee,we)}function Rs(C,$,ue){$.isScene!==!0&&($=$t);const te=ie.get(C),ee=L.state.lights,we=L.state.shadowsArray,ze=ee.state.version,Te=Pe.getParameters(C,ee.state,we,$,ue,L.state.lightProbeGridArray),Xe=Pe.getProgramCacheKey(Te);let Ze=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,te.fog=$.fog;const at=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=Me.get(C.envMap||te.environment,at),te.envMapRotation=te.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,Ze===void 0&&(C.addEventListener("dispose",Si),Ze=new Map,te.programs=Ze);let ot=Ze.get(Xe);if(ot!==void 0){if(te.currentProgram===ot&&te.lightsStateVersion===ze)return Pl(C,Te),ot}else Te.uniforms=Pe.getUniforms(C),Y!==null&&C.isNodeMaterial&&Y.build(C,ue,Te),C.onBeforeCompile(Te,k),ot=Pe.acquireProgram(Te,Xe),Ze.set(Xe,ot),te.uniforms=Te.uniforms;const $e=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=je.uniform),Pl(C,Te),te.needsLights=vo(C),te.lightsStateVersion=ze,te.needsLights&&($e.ambientLightColor.value=ee.state.ambient,$e.lightProbe.value=ee.state.probe,$e.directionalLights.value=ee.state.directional,$e.directionalLightShadows.value=ee.state.directionalShadow,$e.spotLights.value=ee.state.spot,$e.spotLightShadows.value=ee.state.spotShadow,$e.rectAreaLights.value=ee.state.rectArea,$e.ltc_1.value=ee.state.rectAreaLTC1,$e.ltc_2.value=ee.state.rectAreaLTC2,$e.pointLights.value=ee.state.point,$e.pointLightShadows.value=ee.state.pointShadow,$e.hemisphereLights.value=ee.state.hemi,$e.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,$e.spotLightMatrix.value=ee.state.spotLightMatrix,$e.spotLightMap.value=ee.state.spotLightMap,$e.pointShadowMatrix.value=ee.state.pointShadowMatrix),te.lightProbeGrid=L.state.lightProbeGridArray.length>0,te.currentProgram=ot,te.uniformsList=null,ot}function go(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=oc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Pl(C,$){const ue=ie.get(C);ue.outputColorSpace=$.outputColorSpace,ue.batching=$.batching,ue.batchingColor=$.batchingColor,ue.instancing=$.instancing,ue.instancingColor=$.instancingColor,ue.instancingMorph=$.instancingMorph,ue.skinning=$.skinning,ue.morphTargets=$.morphTargets,ue.morphNormals=$.morphNormals,ue.morphColors=$.morphColors,ue.morphTargetsCount=$.morphTargetsCount,ue.numClippingPlanes=$.numClippingPlanes,ue.numIntersection=$.numClipIntersection,ue.vertexAlphas=$.vertexAlphas,ue.vertexTangents=$.vertexTangents,ue.toneMapping=$.toneMapping}function Nc(C,$){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition($.matrixWorld);for(let ue=0,te=C.length;ue<te;ue++){const ee=C[ue];if(ee.texture!==null&&ee.boundingBox.containsPoint(R))return ee}return null}function Kt(C,$,ue,te,ee){$.isScene!==!0&&($=$t),de.resetTextureUnits();const we=$.fog,ze=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?$.environment:null,Te=H===null?k.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:_t.workingColorSpace,Xe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Ze=Me.get(te.envMap||ze,Xe),at=te.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ot=!!ue.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),$e=!!ue.morphAttributes.position,St=!!ue.morphAttributes.normal,Ot=!!ue.morphAttributes.color;let Xt=or;te.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Xt=k.toneMapping);const Dt=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,un=Dt!==void 0?Dt.length:0,ke=ie.get(te),Tn=L.state.lights;if(xt===!0&&(mt===!0||C!==se)){const Lt=C===se&&te.id===oe;je.setState(te,C,Lt)}let ft=!1;te.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Tn.state.version||ke.outputColorSpace!==Te||ee.isBatchedMesh&&ke.batching===!1||!ee.isBatchedMesh&&ke.batching===!0||ee.isBatchedMesh&&ke.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ke.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ke.instancingMorph===!1&&ee.morphTexture!==null||ke.envMap!==Ze||te.fog===!0&&ke.fog!==we||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==je.numPlanes||ke.numIntersection!==je.numIntersection)||ke.vertexAlphas!==at||ke.vertexTangents!==ot||ke.morphTargets!==$e||ke.morphNormals!==St||ke.morphColors!==Ot||ke.toneMapping!==Xt||ke.morphTargetsCount!==un||!!ke.lightProbeGrid!=L.state.lightProbeGridArray.length>0)&&(ft=!0):(ft=!0,ke.__version=te.version);let Wn=ke.currentProgram;ft===!0&&(Wn=Rs(te,$,ee),Y&&te.isNodeMaterial&&Y.onUpdateProgram(te,Wn,ke));let Xn=!1,ht=!1,hr=!1;const Ct=Wn.getUniforms(),Bt=ke.uniforms;if(w.useProgram(Wn.program)&&(Xn=!0,ht=!0,hr=!0),te.id!==oe&&(oe=te.id,ht=!0),ke.needsLights){const Lt=Nc(L.state.lightProbeGridArray,ee);ke.lightProbeGrid!==Lt&&(ke.lightProbeGrid=Lt,ht=!0)}if(Xn||se!==C){w.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Ct.setValue(q,"projectionMatrix",C.projectionMatrix),Ct.setValue(q,"viewMatrix",C.matrixWorldInverse);const Ii=Ct.map.cameraPosition;Ii!==void 0&&Ii.setValue(q,tn.setFromMatrixPosition(C.matrixWorld)),U.logarithmicDepthBuffer&&Ct.setValue(q,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Ct.setValue(q,"isOrthographic",C.isOrthographicCamera===!0),se!==C&&(se=C,ht=!0,hr=!0)}if(ke.needsLights&&(Tn.state.directionalShadowMap.length>0&&Ct.setValue(q,"directionalShadowMap",Tn.state.directionalShadowMap,de),Tn.state.spotShadowMap.length>0&&Ct.setValue(q,"spotShadowMap",Tn.state.spotShadowMap,de),Tn.state.pointShadowMap.length>0&&Ct.setValue(q,"pointShadowMap",Tn.state.pointShadowMap,de)),ee.isSkinnedMesh){Ct.setOptional(q,ee,"bindMatrix"),Ct.setOptional(q,ee,"bindMatrixInverse");const Lt=ee.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Ct.setValue(q,"boneTexture",Lt.boneTexture,de))}ee.isBatchedMesh&&(Ct.setOptional(q,ee,"batchingTexture"),Ct.setValue(q,"batchingTexture",ee._matricesTexture,de),Ct.setOptional(q,ee,"batchingIdTexture"),Ct.setValue(q,"batchingIdTexture",ee._indirectTexture,de),Ct.setOptional(q,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Ct.setValue(q,"batchingColorTexture",ee._colorsTexture,de));const Ni=ue.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&G.update(ee,ue,Wn),(ht||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,Ct.setValue(q,"receiveShadow",ee.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&$.environment!==null&&(Bt.envMapIntensity.value=$.environmentIntensity),Bt.dfgLUT!==void 0&&(Bt.dfgLUT.value=cA()),ht){if(Ct.setValue(q,"toneMappingExposure",k.toneMappingExposure),ke.needsLights&&Ic(Bt,hr),we&&te.fog===!0&&qe.refreshFogUniforms(Bt,we),qe.refreshMaterialUniforms(Bt,te,me,ve,L.state.transmissionRenderTarget[C.id]),ke.needsLights&&ke.lightProbeGrid){const Lt=ke.lightProbeGrid;Bt.probesSH.value=Lt.texture,Bt.probesMin.value.copy(Lt.boundingBox.min),Bt.probesMax.value.copy(Lt.boundingBox.max),Bt.probesResolution.value.copy(Lt.resolution)}oc.upload(q,go(ke),Bt,de)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(oc.upload(q,go(ke),Bt,de),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Ct.setValue(q,"center",ee.center),Ct.setValue(q,"modelViewMatrix",ee.modelViewMatrix),Ct.setValue(q,"normalMatrix",ee.normalMatrix),Ct.setValue(q,"modelMatrix",ee.matrixWorld),te.uniformsGroups!==void 0){const Lt=te.uniformsGroups;for(let Ii=0,$i=Lt.length;Ii<$i;Ii++){const Cs=Lt[Ii];ge.update(Cs,Wn),ge.bind(Cs,Wn)}}return Wn}function Ic(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function vo(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return H},this.setRenderTargetTextures=function(C,$,ue){const te=ie.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ie.get(C.texture).__webglTexture=$,ie.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ue,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const ue=ie.get(C);ue.__webglFramebuffer=$,ue.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,ue=0){H=C,Q=$,V=ue;let te=null,ee=!1,we=!1;if(C){const Te=ie.get(C);if(Te.__useDefaultFramebuffer!==void 0){w.bindFramebuffer(q.FRAMEBUFFER,Te.__webglFramebuffer),F.copy(C.viewport),K.copy(C.scissor),Le=C.scissorTest,w.viewport(F),w.scissor(K),w.setScissorTest(Le),oe=-1;return}else if(Te.__webglFramebuffer===void 0)de.setupRenderTarget(C);else if(Te.__hasExternalTextures)de.rebindTextures(C,ie.get(C.texture).__webglTexture,ie.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const at=C.depthTexture;if(Te.__boundDepthTexture!==at){if(at!==null&&ie.has(at)&&(C.width!==at.image.width||C.height!==at.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");de.setupDepthRenderbuffer(C)}}const Xe=C.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const Ze=ie.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Ze[$])?te=Ze[$][ue]:te=Ze[$],ee=!0):C.samples>0&&de.useMultisampledRTT(C)===!1?te=ie.get(C).__webglMultisampledFramebuffer:Array.isArray(Ze)?te=Ze[ue]:te=Ze,F.copy(C.viewport),K.copy(C.scissor),Le=C.scissorTest}else F.copy(Je).multiplyScalar(me).floor(),K.copy(Ht).multiplyScalar(me).floor(),Le=ut;if(ue!==0&&(te=j),w.bindFramebuffer(q.FRAMEBUFFER,te)&&w.drawBuffers(C,te),w.viewport(F),w.scissor(K),w.setScissorTest(Le),ee){const Te=ie.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_CUBE_MAP_POSITIVE_X+$,Te.__webglTexture,ue)}else if(we){const Te=$;for(let Xe=0;Xe<C.textures.length;Xe++){const Ze=ie.get(C.textures[Xe]);q.framebufferTextureLayer(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0+Xe,Ze.__webglTexture,ue,Te)}}else if(C!==null&&ue!==0){const Te=ie.get(C.texture);q.framebufferTexture2D(q.FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Te.__webglTexture,ue)}oe=-1},this.readRenderTargetPixels=function(C,$,ue,te,ee,we,ze,Te=0){if(!(C&&C.isWebGLRenderTarget)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe){w.bindFramebuffer(q.FRAMEBUFFER,Xe);try{const Ze=C.textures[Te],at=Ze.format,ot=Ze.type;if(C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Te),!U.textureFormatReadable(at)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ot)){Et("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-te&&ue>=0&&ue<=C.height-ee&&q.readPixels($,ue,te,ee,be.convert(at),be.convert(ot),we)}finally{const Ze=H!==null?ie.get(H).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,Ze)}}},this.readRenderTargetPixelsAsync=async function(C,$,ue,te,ee,we,ze,Te=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=ie.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(Xe=Xe[ze]),Xe)if($>=0&&$<=C.width-te&&ue>=0&&ue<=C.height-ee){w.bindFramebuffer(q.FRAMEBUFFER,Xe);const Ze=C.textures[Te],at=Ze.format,ot=Ze.type;if(C.textures.length>1&&q.readBuffer(q.COLOR_ATTACHMENT0+Te),!U.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=q.createBuffer();q.bindBuffer(q.PIXEL_PACK_BUFFER,$e),q.bufferData(q.PIXEL_PACK_BUFFER,we.byteLength,q.STREAM_READ),q.readPixels($,ue,te,ee,be.convert(at),be.convert(ot),0);const St=H!==null?ie.get(H).__webglFramebuffer:null;w.bindFramebuffer(q.FRAMEBUFFER,St);const Ot=q.fenceSync(q.SYNC_GPU_COMMANDS_COMPLETE,0);return q.flush(),await Ny(q,Ot,4),q.bindBuffer(q.PIXEL_PACK_BUFFER,$e),q.getBufferSubData(q.PIXEL_PACK_BUFFER,0,we),q.deleteBuffer($e),q.deleteSync(Ot),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,ue=0){const te=Math.pow(2,-ue),ee=Math.floor(C.image.width*te),we=Math.floor(C.image.height*te),ze=$!==null?$.x:0,Te=$!==null?$.y:0;de.setTexture2D(C,0),q.copyTexSubImage2D(q.TEXTURE_2D,ue,0,0,ze,Te,ee,we),w.unbindTexture()},this.copyTextureToTexture=function(C,$,ue=null,te=null,ee=0,we=0){let ze,Te,Xe,Ze,at,ot,$e,St,Ot;const Xt=C.isCompressedTexture?C.mipmaps[we]:C.image;if(ue!==null)ze=ue.max.x-ue.min.x,Te=ue.max.y-ue.min.y,Xe=ue.isBox3?ue.max.z-ue.min.z:1,Ze=ue.min.x,at=ue.min.y,ot=ue.isBox3?ue.min.z:0;else{const Bt=Math.pow(2,-ee);ze=Math.floor(Xt.width*Bt),Te=Math.floor(Xt.height*Bt),C.isDataArrayTexture?Xe=Xt.depth:C.isData3DTexture?Xe=Math.floor(Xt.depth*Bt):Xe=1,Ze=0,at=0,ot=0}te!==null?($e=te.x,St=te.y,Ot=te.z):($e=0,St=0,Ot=0);const Dt=be.convert($.format),un=be.convert($.type);let ke;$.isData3DTexture?(de.setTexture3D($,0),ke=q.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(de.setTexture2DArray($,0),ke=q.TEXTURE_2D_ARRAY):(de.setTexture2D($,0),ke=q.TEXTURE_2D),w.activeTexture(q.TEXTURE0),w.pixelStorei(q.UNPACK_FLIP_Y_WEBGL,$.flipY),w.pixelStorei(q.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),w.pixelStorei(q.UNPACK_ALIGNMENT,$.unpackAlignment);const Tn=w.getParameter(q.UNPACK_ROW_LENGTH),ft=w.getParameter(q.UNPACK_IMAGE_HEIGHT),Wn=w.getParameter(q.UNPACK_SKIP_PIXELS),Xn=w.getParameter(q.UNPACK_SKIP_ROWS),ht=w.getParameter(q.UNPACK_SKIP_IMAGES);w.pixelStorei(q.UNPACK_ROW_LENGTH,Xt.width),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,Xt.height),w.pixelStorei(q.UNPACK_SKIP_PIXELS,Ze),w.pixelStorei(q.UNPACK_SKIP_ROWS,at),w.pixelStorei(q.UNPACK_SKIP_IMAGES,ot);const hr=C.isDataArrayTexture||C.isData3DTexture,Ct=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const Bt=ie.get(C),Ni=ie.get($),Lt=ie.get(Bt.__renderTarget),Ii=ie.get(Ni.__renderTarget);w.bindFramebuffer(q.READ_FRAMEBUFFER,Lt.__webglFramebuffer),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,Ii.__webglFramebuffer);for(let $i=0;$i<Xe;$i++)hr&&(q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get(C).__webglTexture,ee,ot+$i),q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,ie.get($).__webglTexture,we,Ot+$i)),q.blitFramebuffer(Ze,at,ze,Te,$e,St,ze,Te,q.DEPTH_BUFFER_BIT,q.NEAREST);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else if(ee!==0||C.isRenderTargetTexture||ie.has(C)){const Bt=ie.get(C),Ni=ie.get($);w.bindFramebuffer(q.READ_FRAMEBUFFER,re),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,W);for(let Lt=0;Lt<Xe;Lt++)hr?q.framebufferTextureLayer(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Bt.__webglTexture,ee,ot+Lt):q.framebufferTexture2D(q.READ_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Bt.__webglTexture,ee),Ct?q.framebufferTextureLayer(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,Ni.__webglTexture,we,Ot+Lt):q.framebufferTexture2D(q.DRAW_FRAMEBUFFER,q.COLOR_ATTACHMENT0,q.TEXTURE_2D,Ni.__webglTexture,we),ee!==0?q.blitFramebuffer(Ze,at,ze,Te,$e,St,ze,Te,q.COLOR_BUFFER_BIT,q.NEAREST):Ct?q.copyTexSubImage3D(ke,we,$e,St,Ot+Lt,Ze,at,ze,Te):q.copyTexSubImage2D(ke,we,$e,St,Ze,at,ze,Te);w.bindFramebuffer(q.READ_FRAMEBUFFER,null),w.bindFramebuffer(q.DRAW_FRAMEBUFFER,null)}else Ct?C.isDataTexture||C.isData3DTexture?q.texSubImage3D(ke,we,$e,St,Ot,ze,Te,Xe,Dt,un,Xt.data):$.isCompressedArrayTexture?q.compressedTexSubImage3D(ke,we,$e,St,Ot,ze,Te,Xe,Dt,Xt.data):q.texSubImage3D(ke,we,$e,St,Ot,ze,Te,Xe,Dt,un,Xt):C.isDataTexture?q.texSubImage2D(q.TEXTURE_2D,we,$e,St,ze,Te,Dt,un,Xt.data):C.isCompressedTexture?q.compressedTexSubImage2D(q.TEXTURE_2D,we,$e,St,Xt.width,Xt.height,Dt,Xt.data):q.texSubImage2D(q.TEXTURE_2D,we,$e,St,ze,Te,Dt,un,Xt);w.pixelStorei(q.UNPACK_ROW_LENGTH,Tn),w.pixelStorei(q.UNPACK_IMAGE_HEIGHT,ft),w.pixelStorei(q.UNPACK_SKIP_PIXELS,Wn),w.pixelStorei(q.UNPACK_SKIP_ROWS,Xn),w.pixelStorei(q.UNPACK_SKIP_IMAGES,ht),we===0&&$.generateMipmaps&&q.generateMipmap(ke),w.unbindTexture()},this.initRenderTarget=function(C){ie.get(C).__webglFramebuffer===void 0&&de.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?de.setTextureCube(C,0):C.isData3DTexture?de.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?de.setTexture2DArray(C,0):de.setTexture2D(C,0),w.unbindTexture()},this.resetState=function(){Q=0,V=0,H=null,w.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}function Rr(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function pv(a,e){a.prototype=Object.create(e.prototype),a.prototype.constructor=a,a.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},pl={duration:.5,overwrite:!1,delay:0},Sp,Cn,qt,Di=1e8,Ft=1/Di,Yh=Math.PI*2,dA=Yh/4,hA=0,mv=Math.sqrt,pA=Math.cos,mA=Math.sin,Mn=function(e){return typeof e=="string"},an=function(e){return typeof e=="function"},Fr=function(e){return typeof e=="number"},yp=function(e){return typeof e>"u"},dr=function(e){return typeof e=="object"},ti=function(e){return e!==!1},Mp=function(){return typeof window<"u"},ec=function(e){return an(e)||Mn(e)},_v=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},kn=Array.isArray,_A=/random\([^)]+\)/g,gA=/,\s*/g,h0=/(?:-?\.?\d|\.)+/gi,gv=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,$a=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,$d=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,vv=/[+-]=-?[.\d]+/,vA=/[^,'"\[\]\s]+/gi,xA=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Jt,tr,qh,Ep,vi={},gc={},xv,Sv=function(e){return(gc=ao(e,vi))&&si},Tp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ml=function(e,t){return!t&&console.warn(e)},yv=function(e,t){return e&&(vi[e]=t)&&gc&&(gc[e]=t)||vi},_l=function(){return 0},SA={suppressEvents:!0,isStart:!0,kill:!1},lc={suppressEvents:!0,kill:!1},yA={suppressEvents:!0},wp={},_s=[],$h={},Mv,di={},Kd={},p0=30,uc=[],Ap="",Rp=function(e){var t=e[0],i,s;if(dr(t)||an(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(s=uc.length;s--&&!uc[s].targetTest(t););i=uc[s]}for(s=e.length;s--;)e[s]&&(e[s]._gsap||(e[s]._gsap=new Wv(e[s],i)))||e.splice(s,1);return e},ea=function(e){return e._gsap||Rp(Li(e))[0]._gsap},Ev=function(e,t,i){return(i=e[t])&&an(i)?e[t]():yp(i)&&e.getAttribute&&e.getAttribute(t)||i},ni=function(e,t){return(e=e.split(",")).forEach(t)||e},ln=function(e){return Math.round(e*1e5)/1e5||0},Qt=function(e){return Math.round(e*1e7)/1e7||0},Ja=function(e,t){var i=t.charAt(0),s=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+s:i==="-"?e-s:i==="*"?e*s:e/s},MA=function(e,t){for(var i=t.length,s=0;e.indexOf(t[s])<0&&++s<i;);return s<i},vc=function(){var e=_s.length,t=_s.slice(0),i,s;for($h={},_s.length=0,i=0;i<e;i++)s=t[i],s&&s._lazy&&(s.render(s._lazy[0],s._lazy[1],!0)._lazy=0)},Cp=function(e){return!!(e._initted||e._startAt||e.add)},Tv=function(e,t,i,s){_s.length&&!Cn&&vc(),e.render(t,i,!!(Cn&&t<0&&Cp(e))),_s.length&&!Cn&&vc()},wv=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(vA).length<2?t:Mn(e)?e.trim():e},Av=function(e){return e},xi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},EA=function(e){return function(t,i){for(var s in i)s in t||s==="duration"&&e||s==="ease"||(t[s]=i[s])}},ao=function(e,t){for(var i in t)e[i]=t[i];return e},m0=function a(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=dr(t[i])?a(e[i]||(e[i]={}),t[i]):t[i]);return e},xc=function(e,t){var i={},s;for(s in e)s in t||(i[s]=e[s]);return i},ul=function(e){var t=e.parent||Jt,i=e.keyframes?EA(kn(e.keyframes)):xi;if(ti(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},TA=function(e,t){for(var i=e.length,s=i===t.length;s&&i--&&e[i]===t[i];);return i<0},Rv=function(e,t,i,s,o){var u=e[s],c;if(o)for(c=t[o];u&&u[o]>c;)u=u._prev;return u?(t._next=u._next,u._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[s]=t,t._prev=u,t.parent=t._dp=e,t},bc=function(e,t,i,s){i===void 0&&(i="_first"),s===void 0&&(s="_last");var o=t._prev,u=t._next;o?o._next=u:e[i]===t&&(e[i]=u),u?u._prev=o:e[s]===t&&(e[s]=o),t._next=t._prev=t.parent=null},xs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ta=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},wA=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Kh=function(e,t,i,s){return e._startAt&&(Cn?e._startAt.revert(lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,s))},AA=function a(e){return!e||e._ts&&a(e.parent)},_0=function(e){return e._repeat?oo(e._tTime,e=e.duration()+e._rDelay)*e:0},oo=function(e,t){var i=Math.floor(e=Qt(e/t));return e&&i===e?i-1:i},Sc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Pc=function(e){return e._end=Qt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ft)||0))},Dc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Qt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Pc(e),i._dirty||ta(i,e)),e},Cv=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=Sc(e.rawTime(),t),(!t._dur||Al(0,t.totalDuration(),i)-t._tTime>Ft)&&t.render(i,!0)),ta(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Ft}},ir=function(e,t,i,s){return t.parent&&xs(t),t._start=Qt((Fr(i)?i:i||e!==Jt?Ci(e,i,t):e._time)+t._delay),t._end=Qt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Rv(e,t,"_first","_last",e._sort?"_start":0),Zh(t)||(e._recent=t),s||Cv(e,t),e._ts<0&&Dc(e,e._tTime),e},bv=function(e,t){return(vi.ScrollTrigger||Tp("scrollTrigger",t))&&vi.ScrollTrigger.create(t,e)},Pv=function(e,t,i,s,o){if(Pp(e,t,o),!e._initted)return 1;if(!i&&e._pt&&!Cn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Mv!==hi.frame)return _s.push(e),e._lazy=[o,s],1},RA=function a(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||a(t))},Zh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},CA=function(e,t,i,s){var o=e.ratio,u=t<0||!t&&(!e._start&&RA(e)&&!(!e._initted&&Zh(e))||(e._ts<0||e._dp._ts<0)&&!Zh(e))?0:1,c=e._rDelay,d=0,h,p,g;if(c&&e._repeat&&(d=Al(0,e._tDur,t),p=oo(d,c),e._yoyo&&p&1&&(u=1-u),p!==oo(e._tTime,c)&&(o=1-u,e.vars.repeatRefresh&&e._initted&&e.invalidate())),u!==o||Cn||s||e._zTime===Ft||!t&&e._zTime){if(!e._initted&&Pv(e,t,s,i,d))return;for(g=e._zTime,e._zTime=t||(i?Ft:0),i||(i=t&&!g),e.ratio=u,e._from&&(u=1-u),e._time=0,e._tTime=d,h=e._pt;h;)h.r(u,h.d),h=h._next;t<0&&Kh(e,t,i,!0),e._onUpdate&&!i&&pi(e,"onUpdate"),d&&e._repeat&&!i&&e.parent&&pi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===u&&(u&&xs(e,1),!i&&!Cn&&(pi(e,u?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},bA=function(e,t,i){var s;if(i>t)for(s=e._first;s&&s._start<=i;){if(s.data==="isPause"&&s._start>t)return s;s=s._next}else for(s=e._last;s&&s._start>=i;){if(s.data==="isPause"&&s._start<t)return s;s=s._prev}},lo=function(e,t,i,s){var o=e._repeat,u=Qt(t)||0,c=e._tTime/e._tDur;return c&&!s&&(e._time*=u/e._dur),e._dur=u,e._tDur=o?o<0?1e10:Qt(u*(o+1)+e._rDelay*o):u,c>0&&!s&&Dc(e,e._tTime=e._tDur*c),e.parent&&Pc(e),i||ta(e.parent,e),e},g0=function(e){return e instanceof Jn?ta(e):lo(e,e._dur)},PA={_start:0,endTime:_l,totalDuration:_l},Ci=function a(e,t,i){var s=e.labels,o=e._recent||PA,u=e.duration()>=Di?o.endTime(!1):e._dur,c,d,h;return Mn(t)&&(isNaN(t)||t in s)?(d=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),d==="<"||d===">"?(c>=0&&(t=t.replace(/=/,"")),(d==="<"?o._start:o.endTime(o._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?o:i).totalDuration()/100:1)):c<0?(t in s||(s[t]=u),s[t]):(d=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&i&&(d=d/100*(kn(i)?i[0]:i).totalDuration()),c>1?a(e,t.substr(0,c-1),i)+d:u+d)):t==null?u:+t},cl=function(e,t,i){var s=Fr(t[1]),o=(s?2:1)+(e<2?0:1),u=t[o],c,d;if(s&&(u.duration=t[1]),u.parent=i,e){for(c=u,d=i;d&&!("immediateRender"in c);)c=d.vars.defaults||{},d=ti(d.vars.inherit)&&d.parent;u.immediateRender=ti(c.immediateRender),e<2?u.runBackwards=1:u.startAt=t[o-1]}return new dn(t[0],u,t[o+1])},Ms=function(e,t){return e||e===0?t(e):t},Al=function(e,t,i){return i<e?e:i>t?t:i},Fn=function(e,t){return!Mn(e)||!(t=xA.exec(e))?"":t[1]},DA=function(e,t,i){return Ms(i,function(s){return Al(e,t,s)})},jh=[].slice,Dv=function(e,t){return e&&dr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&dr(e[0]))&&!e.nodeType&&e!==tr},LA=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(s){var o;return Mn(s)&&!t||Dv(s,1)?(o=i).push.apply(o,Li(s)):i.push(s)})||i},Li=function(e,t,i){return qt&&!t&&qt.selector?qt.selector(e):Mn(e)&&!i&&(qh||!uo())?jh.call((t||Ep).querySelectorAll(e),0):kn(e)?LA(e,i):Dv(e)?jh.call(e,0):e?[e]:[]},Qh=function(e){return e=Li(e)[0]||ml("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Li(t,i.querySelectorAll?i:i===e?ml("Invalid scope")||Ep.createElement("div"):e)}},Lv=function(e){return e.sort(function(){return .5-Math.random()})},Nv=function(e){if(an(e))return e;var t=dr(e)?e:{each:e},i=na(t.ease),s=t.from||0,o=parseFloat(t.base)||0,u={},c=s>0&&s<1,d=isNaN(s)||c,h=t.axis,p=s,g=s;return Mn(s)?p=g={center:.5,edges:.5,end:1}[s]||0:!c&&d&&(p=s[0],g=s[1]),function(_,S,E){var M=(E||t).length,x=u[M],y,b,N,R,P,L,I,T,D;if(!x){if(D=t.grid==="auto"?0:(t.grid||[1,Di])[1],!D){for(I=-Di;I<(I=E[D++].getBoundingClientRect().left)&&D<M;);D<M&&D--}for(x=u[M]=[],y=d?Math.min(D,M)*p-.5:s%D,b=D===Di?0:d?M*g/D-.5:s/D|0,I=0,T=Di,L=0;L<M;L++)N=L%D-y,R=b-(L/D|0),x[L]=P=h?Math.abs(h==="y"?R:N):mv(N*N+R*R),P>I&&(I=P),P<T&&(T=P);s==="random"&&Lv(x),x.max=I-T,x.min=T,x.v=M=(parseFloat(t.amount)||parseFloat(t.each)*(D>M?M-1:h?h==="y"?M/D:D:Math.max(D,M/D))||0)*(s==="edges"?-1:1),x.b=M<0?o-M:o,x.u=Fn(t.amount||t.each)||0,i=i&&M<0?XA(i):i}return M=(x[_]-x.min)/x.max||0,Qt(x.b+(i?i(M):M)*x.v)+x.u}},Jh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var s=Qt(Math.round(parseFloat(i)/e)*e*t);return(s-s%1)/t+(Fr(i)?0:Fn(i))}},Iv=function(e,t){var i=kn(e),s,o;return!i&&dr(e)&&(s=i=e.radius||Di,e.values?(e=Li(e.values),(o=!Fr(e[0]))&&(s*=s)):e=Jh(e.increment)),Ms(t,i?an(e)?function(u){return o=e(u),Math.abs(o-u)<=s?o:u}:function(u){for(var c=parseFloat(o?u.x:u),d=parseFloat(o?u.y:0),h=Di,p=0,g=e.length,_,S;g--;)o?(_=e[g].x-c,S=e[g].y-d,_=_*_+S*S):_=Math.abs(e[g]-c),_<h&&(h=_,p=g);return p=!s||h<=s?e[p]:u,o||p===u||Fr(u)?p:p+Fn(u)}:Jh(e))},Uv=function(e,t,i,s){return Ms(kn(e)?!t:i===!0?!!(i=0):!s,function(){return kn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(s=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*s)/s})},NA=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(s){return t.reduce(function(o,u){return u(o)},s)}},IA=function(e,t){return function(i){return e(parseFloat(i))+(t||Fn(i))}},UA=function(e,t,i){return Ov(e,t,0,1,i)},Fv=function(e,t,i){return Ms(i,function(s){return e[~~t(s)]})},FA=function a(e,t,i){var s=t-e;return kn(e)?Fv(e,a(0,e.length),t):Ms(i,function(o){return(s+(o-e)%s)%s+e})},OA=function a(e,t,i){var s=t-e,o=s*2;return kn(e)?Fv(e,a(0,e.length-1),t):Ms(i,function(u){return u=(o+(u-e)%o)%o||0,e+(u>s?o-u:u)})},gl=function(e){return e.replace(_A,function(t){var i=t.indexOf("[")+1,s=t.substring(i||7,i?t.indexOf("]"):t.length-1).split(gA);return Uv(i?s:+s[0],i?0:+s[1],+s[2]||1e-5)})},Ov=function(e,t,i,s,o){var u=t-e,c=s-i;return Ms(o,function(d){return i+((d-e)/u*c||0)})},kA=function a(e,t,i,s){var o=isNaN(e+t)?0:function(S){return(1-S)*e+S*t};if(!o){var u=Mn(e),c={},d,h,p,g,_;if(i===!0&&(s=1)&&(i=null),u)e={p:e},t={p:t};else if(kn(e)&&!kn(t)){for(p=[],g=e.length,_=g-2,h=1;h<g;h++)p.push(a(e[h-1],e[h]));g--,o=function(E){E*=g;var M=Math.min(_,~~E);return p[M](E-M)},i=t}else s||(e=ao(kn(e)?[]:{},e));if(!p){for(d in t)bp.call(c,e,d,"get",t[d]);o=function(E){return Np(E,c)||(u?e.p:e)}}}return Ms(i,o)},v0=function(e,t,i){var s=e.labels,o=Di,u,c,d;for(u in s)c=s[u]-t,c<0==!!i&&c&&o>(c=Math.abs(c))&&(d=u,o=c);return d},pi=function(e,t,i){var s=e.vars,o=s[t],u=qt,c=e._ctx,d,h,p;if(o)return d=s[t+"Params"],h=s.callbackScope||e,i&&_s.length&&vc(),c&&(qt=c),p=d?o.apply(h,d):o.call(h),qt=u,p},ol=function(e){return xs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Cn),e.progress()<1&&pi(e,"onInterrupt"),e},Ka,kv=[],Bv=function(e){if(e)if(e=!e.name&&e.default||e,Mp()||e.headless){var t=e.name,i=an(e),s=t&&!i&&e.init?function(){this._props=[]}:e,o={init:_l,render:Np,add:bp,kill:tR,modifier:eR,rawVars:0},u={targetTest:0,get:0,getSetter:Lp,aliases:{},register:0};if(uo(),e!==s){if(di[t])return;xi(s,xi(xc(e,o),u)),ao(s.prototype,ao(o,xc(e,u))),di[s.prop=t]=s,e.targetTest&&(uc.push(s),wp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}yv(t,s),e.register&&e.register(si,s,ii)}else kv.push(e)},Ut=255,ll={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},Zd=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ut+.5|0},zv=function(e,t,i){var s=e?Fr(e)?[e>>16,e>>8&Ut,e&Ut]:0:ll.black,o,u,c,d,h,p,g,_,S,E;if(!s){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ll[e])s=ll[e];else if(e.charAt(0)==="#"){if(e.length<6&&(o=e.charAt(1),u=e.charAt(2),c=e.charAt(3),e="#"+o+o+u+u+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return s=parseInt(e.substr(1,6),16),[s>>16,s>>8&Ut,s&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),s=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(s=E=e.match(h0),!t)d=+s[0]%360/360,h=+s[1]/100,p=+s[2]/100,u=p<=.5?p*(h+1):p+h-p*h,o=p*2-u,s.length>3&&(s[3]*=1),s[0]=Zd(d+1/3,o,u),s[1]=Zd(d,o,u),s[2]=Zd(d-1/3,o,u);else if(~e.indexOf("="))return s=e.match(gv),i&&s.length<4&&(s[3]=1),s}else s=e.match(h0)||ll.transparent;s=s.map(Number)}return t&&!E&&(o=s[0]/Ut,u=s[1]/Ut,c=s[2]/Ut,g=Math.max(o,u,c),_=Math.min(o,u,c),p=(g+_)/2,g===_?d=h=0:(S=g-_,h=p>.5?S/(2-g-_):S/(g+_),d=g===o?(u-c)/S+(u<c?6:0):g===u?(c-o)/S+2:(o-u)/S+4,d*=60),s[0]=~~(d+.5),s[1]=~~(h*100+.5),s[2]=~~(p*100+.5)),i&&s.length<4&&(s[3]=1),s},Vv=function(e){var t=[],i=[],s=-1;return e.split(gs).forEach(function(o){var u=o.match($a)||[];t.push.apply(t,u),i.push(s+=u.length+1)}),t.c=i,t},x0=function(e,t,i){var s="",o=(e+s).match(gs),u=t?"hsla(":"rgba(",c=0,d,h,p,g;if(!o)return e;if(o=o.map(function(_){return(_=zv(_,t,1))&&u+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),i&&(p=Vv(e),d=i.c,d.join(s)!==p.c.join(s)))for(h=e.replace(gs,"1").split($a),g=h.length-1;c<g;c++)s+=h[c]+(~d.indexOf(c)?o.shift()||u+"0,0,0,0)":(p.length?p:o.length?o:i).shift());if(!h)for(h=e.split(gs),g=h.length-1;c<g;c++)s+=h[c]+o[c];return s+h[g]},gs=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ll)a+="|"+e+"\\b";return new RegExp(a+")","gi")})(),BA=/hsl[a]?\(/,Hv=function(e){var t=e.join(" "),i;if(gs.lastIndex=0,gs.test(t))return i=BA.test(t),e[1]=x0(e[1],i),e[0]=x0(e[0],i,Vv(e[1])),!0},vl,hi=(function(){var a=Date.now,e=500,t=33,i=a(),s=i,o=1e3/240,u=o,c=[],d,h,p,g,_,S,E=function M(x){var y=a()-s,b=x===!0,N,R,P,L;if((y>e||y<0)&&(i+=y-t),s+=y,P=s-i,N=P-u,(N>0||b)&&(L=++g.frame,_=P-g.time*1e3,g.time=P=P/1e3,u+=N+(N>=o?4:o-N),R=1),b||(d=h(M)),R)for(S=0;S<c.length;S++)c[S](P,_,L,x)};return g={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(x){return _/(1e3/(x||60))},wake:function(){xv&&(!qh&&Mp()&&(tr=qh=window,Ep=tr.document||{},vi.gsap=si,(tr.gsapVersions||(tr.gsapVersions=[])).push(si.version),Sv(gc||tr.GreenSockGlobals||!tr.gsap&&tr||{}),kv.forEach(Bv)),p=typeof requestAnimationFrame<"u"&&requestAnimationFrame,d&&g.sleep(),h=p||function(x){return setTimeout(x,u-g.time*1e3+1|0)},vl=1,E(2))},sleep:function(){(p?cancelAnimationFrame:clearTimeout)(d),vl=0,h=_l},lagSmoothing:function(x,y){e=x||1/0,t=Math.min(y||33,e)},fps:function(x){o=1e3/(x||240),u=g.time*1e3+o},add:function(x,y,b){var N=y?function(R,P,L,I){x(R,P,L,I),g.remove(N)}:x;return g.remove(x),c[b?"unshift":"push"](N),uo(),N},remove:function(x,y){~(y=c.indexOf(x))&&c.splice(y,1)&&S>=y&&S--},_listeners:c},g})(),uo=function(){return!vl&&hi.wake()},vt={},zA=/^[\d.\-M][\d.\-,\s]/,VA=/["']/g,HA=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),s=i[0],o=1,u=i.length,c,d,h;o<u;o++)d=i[o],c=o!==u-1?d.lastIndexOf(","):d.length,h=d.substr(0,c),t[s]=isNaN(h)?h.replace(VA,"").trim():+h,s=d.substr(c+1).trim();return t},GA=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),s=e.indexOf("(",t);return e.substring(t,~s&&s<i?e.indexOf(")",i+1):i)},WA=function(e){var t=(e+"").split("("),i=vt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[HA(t[1])]:GA(e).split(",").map(wv)):vt._CE&&zA.test(e)?vt._CE("",e):i},XA=function(e){return function(t){return 1-e(1-t)}},na=function(e,t){return e&&(an(e)?e:vt[e]||WA(e))||t},la=function(e,t,i,s){i===void 0&&(i=function(d){return 1-t(1-d)}),s===void 0&&(s=function(d){return d<.5?t(d*2)/2:1-t((1-d)*2)/2});var o={easeIn:t,easeOut:i,easeInOut:s},u;return ni(e,function(c){vt[c]=vi[c]=o,vt[u=c.toLowerCase()]=i;for(var d in o)vt[u+(d==="easeIn"?".in":d==="easeOut"?".out":".inOut")]=vt[c+"."+d]=o[d]}),o},Gv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},jd=function a(e,t,i){var s=t>=1?t:1,o=(i||(e?.3:.45))/(t<1?t:1),u=o/Yh*(Math.asin(1/s)||0),c=function(p){return p===1?1:s*Math.pow(2,-10*p)*mA((p-u)*o)+1},d=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:Gv(c);return o=Yh/o,d.config=function(h,p){return a(e,h,p)},d},Qd=function a(e,t){t===void 0&&(t=1.70158);var i=function(u){return u?--u*u*((t+1)*u+t)+1:0},s=e==="out"?i:e==="in"?function(o){return 1-i(1-o)}:Gv(i);return s.config=function(o){return a(e,o)},s};ni("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,e){var t=e<5?e+1:e;la(a+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;la("Elastic",jd("in"),jd("out"),jd());(function(a,e){var t=1/e,i=2*t,s=2.5*t,o=function(c){return c<t?a*c*c:c<i?a*Math.pow(c-1.5/e,2)+.75:c<s?a*(c-=2.25/e)*c+.9375:a*Math.pow(c-2.625/e,2)+.984375};la("Bounce",function(u){return 1-o(1-u)},o)})(7.5625,2.75);la("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});la("Circ",function(a){return-(mv(1-a*a)-1)});la("Sine",function(a){return a===1?1:-pA(a*dA)+1});la("Back",Qd("in"),Qd("out"),Qd());vt.SteppedEase=vt.steps=vi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,s=e+(t?0:1),o=t?1:0,u=1-Ft;return function(c){return((s*Al(0,u,c)|0)+o)*i}}};pl.ease=vt["quad.out"];ni("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return Ap+=a+","+a+"Params,"});var Wv=function(e,t){this.id=hA++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ev,this.set=t?t.getSetter:Lp},xl=(function(){function a(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,lo(this,+t.duration,1,1),this.data=t.data,qt&&(this._ctx=qt,qt.data.push(this)),vl||hi.wake()}var e=a.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,lo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,s){if(uo(),!arguments.length)return this._tTime;var o=this._dp;if(o&&o.smoothChildTiming&&this._ts){for(Dc(this,i),!o._dp||o.parent||Cv(o,this);o&&o.parent;)o.parent._time!==o._start+(o._ts>=0?o._tTime/o._ts:(o.totalDuration()-o._tTime)/-o._ts)&&o.totalTime(o._tTime,!0),o=o.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ir(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!s||this._initted&&Math.abs(this._zTime)===Ft||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Tv(this,i,s)),this},e.time=function(i,s){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+_0(this))%(this._dur+this._rDelay)||(i?this._dur:0),s):this._time},e.totalProgress=function(i,s){return arguments.length?this.totalTime(this.totalDuration()*i,s):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(i,s){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+_0(this),s):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,s){var o=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*o,s):this._repeat?oo(this._tTime,o)+1:1},e.timeScale=function(i,s){if(!arguments.length)return this._rts===-Ft?0:this._rts;if(this._rts===i)return this;var o=this.parent&&this._ts?Sc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Ft?0:this._rts,this.totalTime(Al(-Math.abs(this._delay),this.totalDuration(),o),s!==!1),Pc(this),wA(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(uo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ft&&(this._tTime-=Ft)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=Qt(i);var s=this.parent||this._dp;return s&&(s._sort||!this.parent)&&ir(s,this,this._start-this._delay),this}return this._start},e.endTime=function(i){return this._start+(ti(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var s=this.parent||this._dp;return s?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Sc(s.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=yA);var s=Cn;return Cn=i,Cp(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Cn=s,this},e.globalTime=function(i){for(var s=this,o=arguments.length?i:s.rawTime();s;)o=s._start+o/(Math.abs(s._ts)||1),s=s._dp;return!this.parent&&this._sat?this._sat.globalTime(i):o},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,g0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var s=this._time;return this._rDelay=i,g0(this),s?this.time(s):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,s){return this.totalTime(Ci(this,i),ti(s))},e.restart=function(i,s){return this.play().totalTime(i?-this._delay:0,ti(s)),this._dur||(this._zTime=-Ft),this},e.play=function(i,s){return i!=null&&this.seek(i,s),this.reversed(!1).paused(!1)},e.reverse=function(i,s){return i!=null&&this.seek(i||this.totalDuration(),s),this.reversed(!0).paused(!1)},e.pause=function(i,s){return i!=null&&this.seek(i,s),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Ft:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ft,this},e.isActive=function(){var i=this.parent||this._dp,s=this._start,o;return!!(!i||this._ts&&this._initted&&i.isActive()&&(o=i.rawTime(!0))>=s&&o<this.endTime(!0)-Ft)},e.eventCallback=function(i,s,o){var u=this.vars;return arguments.length>1?(s?(u[i]=s,o&&(u[i+"Params"]=o),i==="onUpdate"&&(this._onUpdate=s)):delete u[i],this):u[i]},e.then=function(i){var s=this,o=s._prom;return new Promise(function(u){var c=an(i)?i:Av,d=function(){var p=s.then;s.then=null,o&&o(),an(c)&&(c=c(s))&&(c.then||c===s)&&(s.then=p),u(c),s.then=p};s._initted&&s.totalProgress()===1&&s._ts>=0||!s._tTime&&s._ts<0?d():s._prom=d})},e.kill=function(){ol(this)},a})();xi(xl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ft,_prom:0,_ps:!1,_rts:1});var Jn=(function(a){pv(e,a);function e(i,s){var o;return i===void 0&&(i={}),o=a.call(this,i)||this,o.labels={},o.smoothChildTiming=!!i.smoothChildTiming,o.autoRemoveChildren=!!i.autoRemoveChildren,o._sort=ti(i.sortChildren),Jt&&ir(i.parent||Jt,Rr(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),i.scrollTrigger&&bv(Rr(o),i.scrollTrigger),o}var t=e.prototype;return t.to=function(s,o,u){return cl(0,arguments,this),this},t.from=function(s,o,u){return cl(1,arguments,this),this},t.fromTo=function(s,o,u,c){return cl(2,arguments,this),this},t.set=function(s,o,u){return o.duration=0,o.parent=this,ul(o).repeatDelay||(o.repeat=0),o.immediateRender=!!o.immediateRender,new dn(s,o,Ci(this,u),1),this},t.call=function(s,o,u){return ir(this,dn.delayedCall(0,s,o),u)},t.staggerTo=function(s,o,u,c,d,h,p){return u.duration=o,u.stagger=u.stagger||c,u.onComplete=h,u.onCompleteParams=p,u.parent=this,new dn(s,u,Ci(this,d)),this},t.staggerFrom=function(s,o,u,c,d,h,p){return u.runBackwards=1,ul(u).immediateRender=ti(u.immediateRender),this.staggerTo(s,o,u,c,d,h,p)},t.staggerFromTo=function(s,o,u,c,d,h,p,g){return c.startAt=u,ul(c).immediateRender=ti(c.immediateRender),this.staggerTo(s,o,c,d,h,p,g)},t.render=function(s,o,u){var c=this._time,d=this._dirty?this.totalDuration():this._tDur,h=this._dur,p=s<=0?0:Qt(s),g=this._zTime<0!=s<0&&(this._initted||!h),_,S,E,M,x,y,b,N,R,P,L,I;if(this!==Jt&&p>d&&s>=0&&(p=d),p!==this._tTime||u||g){if(c!==this._time&&h&&(p+=this._time-c,s+=this._time-c),_=p,R=this._start,N=this._ts,y=!N,g&&(h||(c=this._zTime),(s||!o)&&(this._zTime=s)),this._repeat){if(L=this._yoyo,x=h+this._rDelay,this._repeat<-1&&s<0)return this.totalTime(x*100+s,o,u);if(_=Qt(p%x),p===d?(M=this._repeat,_=h):(P=Qt(p/x),M=~~P,M&&M===P&&(_=h,M--),_>h&&(_=h)),P=oo(this._tTime,x),!c&&this._tTime&&P!==M&&this._tTime-P*x-this._dur<=0&&(P=M),L&&M&1&&(_=h-_,I=1),M!==P&&!this._lock){var T=L&&P&1,D=T===(L&&M&1);if(M<P&&(T=!T),c=T?0:p%h?h:p,this._lock=1,this.render(c||(I?0:Qt(M*x)),o,!h)._lock=0,this._tTime=p,!o&&this.parent&&pi(this,"onRepeat"),this.vars.repeatRefresh&&!I&&(this.invalidate()._lock=1,P=M),c&&c!==this._time||y!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,d=this._tDur,D&&(this._lock=2,c=T?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!I&&this.invalidate()),this._lock=0,!this._ts&&!y)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=bA(this,Qt(c),Qt(_)),b&&(p-=_-(_=b._start))),this._tTime=p,this._time=_,this._act=!!N,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=s,c=0),!c&&p&&h&&!o&&!P&&(pi(this,"onStart"),this._tTime!==p))return this;if(_>=c&&s>=0)for(S=this._first;S;){if(E=S._next,(S._act||_>=S._start)&&S._ts&&b!==S){if(S.parent!==this)return this.render(s,o,u);if(S.render(S._ts>0?(_-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(_-S._start)*S._ts,o,u),_!==this._time||!this._ts&&!y){b=0,E&&(p+=this._zTime=-Ft);break}}S=E}else{S=this._last;for(var k=s<0?s:_;S;){if(E=S._prev,(S._act||k<=S._end)&&S._ts&&b!==S){if(S.parent!==this)return this.render(s,o,u);if(S.render(S._ts>0?(k-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(k-S._start)*S._ts,o,u||Cn&&Cp(S)),_!==this._time||!this._ts&&!y){b=0,E&&(p+=this._zTime=k?-Ft:Ft);break}}S=E}}if(b&&!o&&(this.pause(),b.render(_>=c?0:-Ft)._zTime=_>=c?1:-1,this._ts))return this._start=R,Pc(this),this.render(s,o,u);this._onUpdate&&!o&&pi(this,"onUpdate",!0),(p===d&&this._tTime>=this.totalDuration()||!p&&c)&&(R===this._start||Math.abs(N)!==Math.abs(this._ts))&&(this._lock||((s||!h)&&(p===d&&this._ts>0||!p&&this._ts<0)&&xs(this,1),!o&&!(s<0&&!c)&&(p||c||!d)&&(pi(this,p===d&&s>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(p<d&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(s,o){var u=this;if(Fr(o)||(o=Ci(this,o,s)),!(s instanceof xl)){if(kn(s))return s.forEach(function(c){return u.add(c,o)}),this;if(Mn(s))return this.addLabel(s,o);if(an(s))s=dn.delayedCall(0,s);else return this}return this!==s?ir(this,s,o):this},t.getChildren=function(s,o,u,c){s===void 0&&(s=!0),o===void 0&&(o=!0),u===void 0&&(u=!0),c===void 0&&(c=-Di);for(var d=[],h=this._first;h;)h._start>=c&&(h instanceof dn?o&&d.push(h):(u&&d.push(h),s&&d.push.apply(d,h.getChildren(!0,o,u)))),h=h._next;return d},t.getById=function(s){for(var o=this.getChildren(1,1,1),u=o.length;u--;)if(o[u].vars.id===s)return o[u]},t.remove=function(s){return Mn(s)?this.removeLabel(s):an(s)?this.killTweensOf(s):(s.parent===this&&bc(this,s),s===this._recent&&(this._recent=this._last),ta(this))},t.totalTime=function(s,o){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Qt(hi.time-(this._ts>0?s/this._ts:(this.totalDuration()-s)/-this._ts))),a.prototype.totalTime.call(this,s,o),this._forcing=0,this):this._tTime},t.addLabel=function(s,o){return this.labels[s]=Ci(this,o),this},t.removeLabel=function(s){return delete this.labels[s],this},t.addPause=function(s,o,u){var c=dn.delayedCall(0,o||_l,u);return c.data="isPause",this._hasPause=1,ir(this,c,Ci(this,s))},t.removePause=function(s){var o=this._first;for(s=Ci(this,s);o;)o._start===s&&o.data==="isPause"&&xs(o),o=o._next},t.killTweensOf=function(s,o,u){for(var c=this.getTweensOf(s,u),d=c.length;d--;)hs!==c[d]&&c[d].kill(s,o);return this},t.getTweensOf=function(s,o){for(var u=[],c=Li(s),d=this._first,h=Fr(o),p;d;)d instanceof dn?MA(d._targets,c)&&(h?(!hs||d._initted&&d._ts)&&d.globalTime(0)<=o&&d.globalTime(d.totalDuration())>o:!o||d.isActive())&&u.push(d):(p=d.getTweensOf(c,o)).length&&u.push.apply(u,p),d=d._next;return u},t.tweenTo=function(s,o){o=o||{};var u=this,c=Ci(u,s),d=o,h=d.startAt,p=d.onStart,g=d.onStartParams,_=d.immediateRender,S,E=dn.to(u,xi({ease:o.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale())||Ft,onStart:function(){if(u.pause(),!S){var x=o.duration||Math.abs((c-(h&&"time"in h?h.time:u._time))/u.timeScale());E._dur!==x&&lo(E,x,0,1).render(E._time,!0,!0),S=1}p&&p.apply(E,g||[])}},o));return _?E.render(0):E},t.tweenFromTo=function(s,o,u){return this.tweenTo(o,xi({startAt:{time:Ci(this,s)}},u))},t.recent=function(){return this._recent},t.nextLabel=function(s){return s===void 0&&(s=this._time),v0(this,Ci(this,s))},t.previousLabel=function(s){return s===void 0&&(s=this._time),v0(this,Ci(this,s),1)},t.currentLabel=function(s){return arguments.length?this.seek(s,!0):this.previousLabel(this._time+Ft)},t.shiftChildren=function(s,o,u){u===void 0&&(u=0);var c=this._first,d=this.labels,h;for(s=Qt(s);c;)c._start>=u&&(c._start+=s,c._end+=s),c=c._next;if(o)for(h in d)d[h]>=u&&(d[h]+=s);return ta(this)},t.invalidate=function(s){var o=this._first;for(this._lock=0;o;)o.invalidate(s),o=o._next;return a.prototype.invalidate.call(this,s)},t.clear=function(s){s===void 0&&(s=!0);for(var o=this._first,u;o;)u=o._next,this.remove(o),o=u;return this._dp&&(this._time=this._tTime=this._pTime=0),s&&(this.labels={}),ta(this)},t.totalDuration=function(s){var o=0,u=this,c=u._last,d=Di,h,p,g;if(arguments.length)return u.timeScale((u._repeat<0?u.duration():u.totalDuration())/(u.reversed()?-s:s));if(u._dirty){for(g=u.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),p=c._start,p>d&&u._sort&&c._ts&&!u._lock?(u._lock=1,ir(u,c,p-c._delay,1)._lock=0):d=p,p<0&&c._ts&&(o-=p,(!g&&!u._dp||g&&g.smoothChildTiming)&&(u._start+=Qt(p/u._ts),u._time-=p,u._tTime-=p),u.shiftChildren(-p,!1,-1/0),d=0),c._end>o&&c._ts&&(o=c._end),c=h;lo(u,u===Jt&&u._time>o?u._time:o,1,1),u._dirty=0}return u._tDur},e.updateRoot=function(s){if(Jt._ts&&(Tv(Jt,Sc(s,Jt)),Mv=hi.frame),hi.frame>=p0){p0+=gi.autoSleep||120;var o=Jt._first;if((!o||!o._ts)&&gi.autoSleep&&hi._listeners.length<2){for(;o&&!o._ts;)o=o._next;o||hi.sleep()}}},e})(xl);xi(Jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var YA=function(e,t,i,s,o,u,c){var d=new ii(this._pt,e,t,0,1,Zv,null,o),h=0,p=0,g,_,S,E,M,x,y,b;for(d.b=i,d.e=s,i+="",s+="",(y=~s.indexOf("random("))&&(s=gl(s)),u&&(b=[i,s],u(b,e,t),i=b[0],s=b[1]),_=i.match($d)||[];g=$d.exec(s);)E=g[0],M=s.substring(h,g.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),E!==_[p++]&&(x=parseFloat(_[p-1])||0,d._pt={_next:d._pt,p:M||p===1?M:",",s:x,c:E.charAt(1)==="="?Ja(x,E)-x:parseFloat(E)-x,m:S&&S<4?Math.round:0},h=$d.lastIndex);return d.c=h<s.length?s.substring(h,s.length):"",d.fp=c,(vv.test(s)||y)&&(d.e=0),this._pt=d,d},bp=function(e,t,i,s,o,u,c,d,h,p){an(s)&&(s=s(o||0,e,u));var g=e[t],_=i!=="get"?i:an(g)?h?e[t.indexOf("set")||!an(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():g,S=an(g)?h?jA:$v:Dp,E;if(Mn(s)&&(~s.indexOf("random(")&&(s=gl(s)),s.charAt(1)==="="&&(E=Ja(_,s)+(Fn(_)||0),(E||E===0)&&(s=E))),!p||_!==s||ep)return!isNaN(_*s)&&s!==""?(E=new ii(this._pt,e,t,+_||0,s-(_||0),typeof g=="boolean"?JA:Kv,0,S),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!g&&!(t in e)&&Tp(t,s),YA.call(this,e,t,_,s,S,d||gi.stringFilter,h))},qA=function(e,t,i,s,o){if(an(e)&&(e=fl(e,o,t,i,s)),!dr(e)||e.style&&e.nodeType||kn(e)||_v(e))return Mn(e)?fl(e,o,t,i,s):e;var u={},c;for(c in e)u[c]=fl(e[c],o,t,i,s);return u},Xv=function(e,t,i,s,o,u){var c,d,h,p;if(di[e]&&(c=new di[e]).init(o,c.rawVars?t[e]:qA(t[e],s,o,u,i),i,s,u)!==!1&&(i._pt=d=new ii(i._pt,o,e,0,1,c.render,c,0,c.priority),i!==Ka))for(h=i._ptLookup[i._targets.indexOf(o)],p=c._props.length;p--;)h[c._props[p]]=d;return c},hs,ep,Pp=function a(e,t,i){var s=e.vars,o=s.ease,u=s.startAt,c=s.immediateRender,d=s.lazy,h=s.onUpdate,p=s.runBackwards,g=s.yoyoEase,_=s.keyframes,S=s.autoRevert,E=e._dur,M=e._startAt,x=e._targets,y=e.parent,b=y&&y.data==="nested"?y.vars.targets:x,N=e._overwrite==="auto"&&!Sp,R=e.timeline,P=s.easeReverse||g,L,I,T,D,k,B,Y,j,re,W,Q,V,H;if(R&&(!_||!o)&&(o="none"),e._ease=na(o,pl.ease),e._rEase=P&&(na(P)||e._ease),e._from=!R&&!!s.runBackwards,e._from&&(e.ratio=1),!R||_&&!s.stagger){if(j=x[0]?ea(x[0]).harness:0,V=j&&s[j.prop],L=xc(s,wp),M&&(M._zTime<0&&M.progress(1),t<0&&p&&c&&!S?M.render(-1,!0):M.revert(p&&E?lc:SA),M._lazy=0),u){if(xs(e._startAt=dn.set(x,xi({data:"isStart",overwrite:!1,parent:y,immediateRender:!0,lazy:!M&&ti(d),startAt:null,delay:0,onUpdate:h&&function(){return pi(e,"onUpdate")},stagger:0},u))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn||!c&&!S)&&e._startAt.revert(lc),c&&E&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&E&&!M){if(t&&(c=!1),T=xi({overwrite:!1,data:"isFromStart",lazy:c&&!M&&ti(d),immediateRender:c,stagger:0,parent:y},L),V&&(T[j.prop]=V),xs(e._startAt=dn.set(x,T)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Cn?e._startAt.revert(lc):e._startAt.render(-1,!0)),e._zTime=t,!c)a(e._startAt,Ft,Ft);else if(!t)return}for(e._pt=e._ptCache=0,d=E&&ti(d)||d&&!E,I=0;I<x.length;I++){if(k=x[I],Y=k._gsap||Rp(x)[I]._gsap,e._ptLookup[I]=W={},$h[Y.id]&&_s.length&&vc(),Q=b===x?I:b.indexOf(k),j&&(re=new j).init(k,V||L,e,Q,b)!==!1&&(e._pt=D=new ii(e._pt,k,re.name,0,1,re.render,re,0,re.priority),re._props.forEach(function(oe){W[oe]=D}),re.priority&&(B=1)),!j||V)for(T in L)di[T]&&(re=Xv(T,L,e,Q,k,b))?re.priority&&(B=1):W[T]=D=bp.call(e,k,T,"get",L[T],Q,b,0,s.stringFilter);e._op&&e._op[I]&&e.kill(k,e._op[I]),N&&e._pt&&(hs=e,Jt.killTweensOf(k,W,e.globalTime(t)),H=!e.parent,hs=0),e._pt&&d&&($h[Y.id]=1)}B&&jv(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!H,_&&t<=0&&R.render(Di,!0,!0)},$A=function(e,t,i,s,o,u,c,d){var h=(e._pt&&e._ptCache||(e._ptCache={}))[t],p,g,_,S;if(!h)for(h=e._ptCache[t]=[],_=e._ptLookup,S=e._targets.length;S--;){if(p=_[S][t],p&&p.d&&p.d._pt)for(p=p.d._pt;p&&p.p!==t&&p.fp!==t;)p=p._next;if(!p)return ep=1,e.vars[t]="+=0",Pp(e,c),ep=0,d?ml(t+" not eligible for reset. Try splitting into individual properties"):1;h.push(p)}for(S=h.length;S--;)g=h[S],p=g._pt||g,p.s=(s||s===0)&&!o?s:p.s+(s||0)+u*p.c,p.c=i-p.s,g.e&&(g.e=ln(i)+Fn(g.e)),g.b&&(g.b=p.s+Fn(g.b))},KA=function(e,t){var i=e[0]?ea(e[0]).harness:0,s=i&&i.aliases,o,u,c,d;if(!s)return t;o=ao({},t);for(u in s)if(u in o)for(d=s[u].split(","),c=d.length;c--;)o[d[c]]=o[u];return o},ZA=function(e,t,i,s){var o=t.ease||s||"power1.inOut",u,c;if(kn(t))c=i[e]||(i[e]=[]),t.forEach(function(d,h){return c.push({t:h/(t.length-1)*100,v:d,e:o})});else for(u in t)c=i[u]||(i[u]=[]),u==="ease"||c.push({t:parseFloat(e),v:t[u],e:o})},fl=function(e,t,i,s,o){return an(e)?e.call(t,i,s,o):Mn(e)&&~e.indexOf("random(")?gl(e):e},Yv=Ap+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",qv={};ni(Yv+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return qv[a]=1});var dn=(function(a){pv(e,a);function e(i,s,o,u){var c;typeof s=="number"&&(o.duration=s,s=o,o=null),c=a.call(this,u?s:ul(s))||this;var d=c.vars,h=d.duration,p=d.delay,g=d.immediateRender,_=d.stagger,S=d.overwrite,E=d.keyframes,M=d.defaults,x=d.scrollTrigger,y=s.parent||Jt,b=(kn(i)||_v(i)?Fr(i[0]):"length"in s)?[i]:Li(i),N,R,P,L,I,T,D,k;if(c._targets=b.length?Rp(b):ml("GSAP target "+i+" not found. https://gsap.com",!gi.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=S,E||_||ec(h)||ec(p)){s=c.vars;var B=s.easeReverse||s.yoyoEase;if(N=c.timeline=new Jn({data:"nested",defaults:M||{},targets:y&&y.data==="nested"?y.vars.targets:b}),N.kill(),N.parent=N._dp=Rr(c),N._start=0,_||ec(h)||ec(p)){if(L=b.length,D=_&&Nv(_),dr(_))for(I in _)~Yv.indexOf(I)&&(k||(k={}),k[I]=_[I]);for(R=0;R<L;R++)P=xc(s,qv),P.stagger=0,B&&(P.easeReverse=B),k&&ao(P,k),T=b[R],P.duration=+fl(h,Rr(c),R,T,b),P.delay=(+fl(p,Rr(c),R,T,b)||0)-c._delay,!_&&L===1&&P.delay&&(c._delay=p=P.delay,c._start+=p,P.delay=0),N.to(T,P,D?D(R,T,b):0),N._ease=vt.none;N.duration()?h=p=0:c.timeline=0}else if(E){ul(xi(N.vars.defaults,{ease:"none"})),N._ease=na(E.ease||s.ease||"none");var Y=0,j,re,W;if(kn(E))E.forEach(function(Q){return N.to(b,Q,">")}),N.duration();else{P={};for(I in E)I==="ease"||I==="easeEach"||ZA(I,E[I],P,E.easeEach);for(I in P)for(j=P[I].sort(function(Q,V){return Q.t-V.t}),Y=0,R=0;R<j.length;R++)re=j[R],W={ease:re.e,duration:(re.t-(R?j[R-1].t:0))/100*h},W[I]=re.v,N.to(b,W,Y),Y+=W.duration;N.duration()<h&&N.to({},{duration:h-N.duration()})}}h||c.duration(h=N.duration())}else c.timeline=0;return S===!0&&!Sp&&(hs=Rr(c),Jt.killTweensOf(b),hs=0),ir(y,Rr(c),o),s.reversed&&c.reverse(),s.paused&&c.paused(!0),(g||!h&&!E&&c._start===Qt(y._time)&&ti(g)&&AA(Rr(c))&&y.data!=="nested")&&(c._tTime=-Ft,c.render(Math.max(0,-p)||0)),x&&bv(Rr(c),x),c}var t=e.prototype;return t.render=function(s,o,u){var c=this._time,d=this._tDur,h=this._dur,p=s<0,g=s>d-Ft&&!p?d:s<Ft?0:s,_,S,E,M,x,y,b,N;if(!h)CA(this,s,o,u);else if(g!==this._tTime||!s||u||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==p||this._lazy){if(_=g,N=this.timeline,this._repeat){if(M=h+this._rDelay,this._repeat<-1&&p)return this.totalTime(M*100+s,o,u);if(_=Qt(g%M),g===d?(E=this._repeat,_=h):(x=Qt(g/M),E=~~x,E&&E===x?(_=h,E--):_>h&&(_=h)),y=this._yoyo&&E&1,y&&(_=h-_),x=oo(this._tTime,M),_===c&&!u&&this._initted&&E===x)return this._tTime=g,this;E!==x&&this.vars.repeatRefresh&&!y&&!this._lock&&_!==M&&this._initted&&(this._lock=u=1,this.render(Qt(M*E),!0).invalidate()._lock=0)}if(!this._initted){if(Pv(this,p?s:_,u,o,g))return this._tTime=0,this;if(c!==this._time&&!(u&&this.vars.repeatRefresh&&E!==x))return this;if(h!==this._dur)return this.render(s,o,u)}if(this._rEase){var R=_<c;if(R!==this._inv){var P=R?c:h-c;this._inv=R,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=c,this._invRecip=P?(R?-1:1)/P:0,this._invScale=R?-this.ratio:1-this.ratio,this._invEase=R?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((_-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(_/h);if(this._from&&(this.ratio=b=1-b),this._tTime=g,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),!c&&g&&!o&&!x&&(pi(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(b,S.d),S=S._next;N&&N.render(s<0?s:N._dur*N._ease(_/this._dur),o,u)||this._startAt&&(this._zTime=s),this._onUpdate&&!o&&(p&&Kh(this,s,o,u),pi(this,"onUpdate")),this._repeat&&E!==x&&this.vars.onRepeat&&!o&&this.parent&&pi(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(p&&!this._onUpdate&&Kh(this,s,!0,!0),(s||!h)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&xs(this,1),!o&&!(p&&!c)&&(g||c||y)&&(pi(this,g===d?"onComplete":"onReverseComplete",!0),this._prom&&!(g<d&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(s){return(!s||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(s),a.prototype.invalidate.call(this,s)},t.resetTo=function(s,o,u,c,d){vl||hi.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),p;return this._initted||Pp(this,h),p=this._ease(h/this._dur),$A(this,s,o,u,c,p,h,d)?this.resetTo(s,o,u,c,1):(Dc(this,0),this.parent||Rv(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(s,o){if(o===void 0&&(o="all"),!s&&(!o||o==="all"))return this._lazy=this._pt=0,this.parent?ol(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Cn),this;if(this.timeline){var u=this.timeline.totalDuration();return this.timeline.killTweensOf(s,o,hs&&hs.vars.overwrite!==!0)._first||ol(this),this.parent&&u!==this.timeline.totalDuration()&&lo(this,this._dur*this.timeline._tDur/u,0,1),this}var c=this._targets,d=s?Li(s):c,h=this._ptLookup,p=this._pt,g,_,S,E,M,x,y;if((!o||o==="all")&&TA(c,d))return o==="all"&&(this._pt=0),ol(this);for(g=this._op=this._op||[],o!=="all"&&(Mn(o)&&(M={},ni(o,function(b){return M[b]=1}),o=M),o=KA(c,o)),y=c.length;y--;)if(~d.indexOf(c[y])){_=h[y],o==="all"?(g[y]=o,E=_,S={}):(S=g[y]=g[y]||{},E=o);for(M in E)x=_&&_[M],x&&((!("kill"in x.d)||x.d.kill(M)===!0)&&bc(this,x,"_pt"),delete _[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&p&&ol(this),this},e.to=function(s,o){return new e(s,o,arguments[2])},e.from=function(s,o){return cl(1,arguments)},e.delayedCall=function(s,o,u,c){return new e(o,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:s,onComplete:o,onReverseComplete:o,onCompleteParams:u,onReverseCompleteParams:u,callbackScope:c})},e.fromTo=function(s,o,u){return cl(2,arguments)},e.set=function(s,o){return o.duration=0,o.repeatDelay||(o.repeat=0),new e(s,o)},e.killTweensOf=function(s,o,u){return Jt.killTweensOf(s,o,u)},e})(xl);xi(dn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ni("staggerTo,staggerFrom,staggerFromTo",function(a){dn[a]=function(){var e=new Jn,t=jh.call(arguments,0);return t.splice(a==="staggerFromTo"?5:4,0,0),e[a].apply(e,t)}});var Dp=function(e,t,i){return e[t]=i},$v=function(e,t,i){return e[t](i)},jA=function(e,t,i,s){return e[t](s.fp,i)},QA=function(e,t,i){return e.setAttribute(t,i)},Lp=function(e,t){return an(e[t])?$v:yp(e[t])&&e.setAttribute?QA:Dp},Kv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},JA=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Zv=function(e,t){var i=t._pt,s="";if(!e&&t.b)s=t.b;else if(e===1&&t.e)s=t.e;else{for(;i;)s=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+s,i=i._next;s+=t.c}t.set(t.t,t.p,s,t)},Np=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},eR=function(e,t,i,s){for(var o=this._pt,u;o;)u=o._next,o.p===s&&o.modifier(e,t,i),o=u},tR=function(e){for(var t=this._pt,i,s;t;)s=t._next,t.p===e&&!t.op||t.op===e?bc(this,t,"_pt"):t.dep||(i=1),t=s;return!i},nR=function(e,t,i,s){s.mSet(e,t,s.m.call(s.tween,i,s.mt),s)},jv=function(e){for(var t=e._pt,i,s,o,u;t;){for(i=t._next,s=o;s&&s.pr>t.pr;)s=s._next;(t._prev=s?s._prev:u)?t._prev._next=t:o=t,(t._next=s)?s._prev=t:u=t,t=i}e._pt=o},ii=(function(){function a(t,i,s,o,u,c,d,h,p){this.t=i,this.s=o,this.c=u,this.p=s,this.r=c||Kv,this.d=d||this,this.set=h||Dp,this.pr=p||0,this._next=t,t&&(t._prev=this)}var e=a.prototype;return e.modifier=function(i,s,o){this.mSet=this.mSet||this.set,this.set=nR,this.m=i,this.mt=o,this.tween=s},a})();ni(Ap+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(a){return wp[a]=1});vi.TweenMax=vi.TweenLite=dn;vi.TimelineLite=vi.TimelineMax=Jn;Jt=new Jn({sortChildren:!1,defaults:pl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});gi.stringFilter=Hv;var ia=[],cc={},iR=[],S0=0,rR=0,Jd=function(e){return(cc[e]||iR).map(function(t){return t()})},tp=function(){var e=Date.now(),t=[];e-S0>2&&(Jd("matchMediaInit"),ia.forEach(function(i){var s=i.queries,o=i.conditions,u,c,d,h;for(c in s)u=tr.matchMedia(s[c]).matches,u&&(d=1),u!==o[c]&&(o[c]=u,h=1);h&&(i.revert(),d&&t.push(i))}),Jd("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(s){return i.add(null,s)})}),S0=e,Jd("matchMedia"))},Qv=(function(){function a(t,i){this.selector=i&&Qh(i),this.data=[],this._r=[],this.isReverted=!1,this.id=rR++,t&&this.add(t)}var e=a.prototype;return e.add=function(i,s,o){an(i)&&(o=s,s=i,i=an);var u=this,c=function(){var h=qt,p=u.selector,g;return h&&h!==u&&h.data.push(u),o&&(u.selector=Qh(o)),qt=u,g=s.apply(u,arguments),an(g)&&u._r.push(g),qt=h,u.selector=p,u.isReverted=!1,g};return u.last=c,i===an?c(u,function(d){return u.add(null,d)}):i?u[i]=c:c},e.ignore=function(i){var s=qt;qt=null,i(this),qt=s},e.getTweens=function(){var i=[];return this.data.forEach(function(s){return s instanceof a?i.push.apply(i,s.getTweens()):s instanceof dn&&!(s.parent&&s.parent.data==="nested")&&i.push(s)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,s){var o=this;if(i?(function(){for(var c=o.getTweens(),d=o.data.length,h;d--;)h=o.data[d],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(p){return c.splice(c.indexOf(p),1)}));for(c.map(function(p){return{g:p._dur||p._delay||p._sat&&!p._sat.vars.immediateRender?p.globalTime(0):-1/0,t:p}}).sort(function(p,g){return g.g-p.g||-1/0}).forEach(function(p){return p.t.revert(i)}),d=o.data.length;d--;)h=o.data[d],h instanceof Jn?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof dn)&&h.revert&&h.revert(i);o._r.forEach(function(p){return p(i,o)}),o.isReverted=!0})():this.data.forEach(function(c){return c.kill&&c.kill()}),this.clear(),s)for(var u=ia.length;u--;)ia[u].id===this.id&&ia.splice(u,1)},e.revert=function(i){this.kill(i||{})},a})(),sR=(function(){function a(t){this.contexts=[],this.scope=t,qt&&qt.data.push(this)}var e=a.prototype;return e.add=function(i,s,o){dr(i)||(i={matches:i});var u=new Qv(0,o||this.scope),c=u.conditions={},d,h,p;qt&&!u.selector&&(u.selector=qt.selector),this.contexts.push(u),s=u.add("onMatch",s),u.queries=i;for(h in i)h==="all"?p=1:(d=tr.matchMedia(i[h]),d&&(ia.indexOf(u)<0&&ia.push(u),(c[h]=d.matches)&&(p=1),d.addListener?d.addListener(tp):d.addEventListener("change",tp)));return p&&s(u,function(g){return u.add(null,g)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(s){return s.kill(i,!0)})},a})(),yc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(s){return Bv(s)})},timeline:function(e){return new Jn(e)},getTweensOf:function(e,t){return Jt.getTweensOf(e,t)},getProperty:function(e,t,i,s){Mn(e)&&(e=Li(e)[0]);var o=ea(e||{}).get,u=i?Av:wv;return i==="native"&&(i=""),e&&(t?u((di[t]&&di[t].get||o)(e,t,i,s)):function(c,d,h){return u((di[c]&&di[c].get||o)(e,c,d,h))})},quickSetter:function(e,t,i){if(e=Li(e),e.length>1){var s=e.map(function(p){return si.quickSetter(p,t,i)}),o=s.length;return function(p){for(var g=o;g--;)s[g](p)}}e=e[0]||{};var u=di[t],c=ea(e),d=c.harness&&(c.harness.aliases||{})[t]||t,h=u?function(p){var g=new u;Ka._pt=0,g.init(e,i?p+i:p,Ka,0,[e]),g.render(1,g),Ka._pt&&Np(1,Ka)}:c.set(e,d);return u?h:function(p){return h(e,d,i?p+i:p,c,1)}},quickTo:function(e,t,i){var s,o=si.to(e,xi((s={},s[t]="+=0.1",s.paused=!0,s.stagger=0,s),i||{})),u=function(d,h,p){return o.resetTo(t,d,h,p)};return u.tween=o,u},isTweening:function(e){return Jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=na(e.ease,pl.ease)),m0(pl,e||{})},config:function(e){return m0(gi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,s=e.plugins,o=e.defaults,u=e.extendTimeline;(s||"").split(",").forEach(function(c){return c&&!di[c]&&!vi[c]&&ml(t+" effect requires "+c+" plugin.")}),Kd[t]=function(c,d,h){return i(Li(c),xi(d||{},o),h)},u&&(Jn.prototype[t]=function(c,d,h){return this.add(Kd[t](c,dr(d)?d:(h=d)&&{},this),h)})},registerEase:function(e,t){vt[e]=na(t)},parseEase:function(e,t){return arguments.length?na(e,t):vt},getById:function(e){return Jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Jn(e),s,o;for(i.smoothChildTiming=ti(e.smoothChildTiming),Jt.remove(i),i._dp=0,i._time=i._tTime=Jt._time,s=Jt._first;s;)o=s._next,(t||!(!s._dur&&s instanceof dn&&s.vars.onComplete===s._targets[0]))&&ir(i,s,s._start-s._delay),s=o;return ir(Jt,i,0),i},context:function(e,t){return e?new Qv(e,t):qt},matchMedia:function(e){return new sR(e)},matchMediaRefresh:function(){return ia.forEach(function(e){var t=e.conditions,i,s;for(s in t)t[s]&&(t[s]=!1,i=1);i&&e.revert()})||tp()},addEventListener:function(e,t){var i=cc[e]||(cc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=cc[e],s=i&&i.indexOf(t);s>=0&&i.splice(s,1)},utils:{wrap:FA,wrapYoyo:OA,distribute:Nv,random:Uv,snap:Iv,normalize:UA,getUnit:Fn,clamp:DA,splitColor:zv,toArray:Li,selector:Qh,mapRange:Ov,pipe:NA,unitize:IA,interpolate:kA,shuffle:Lv},install:Sv,effects:Kd,ticker:hi,updateRoot:Jn.updateRoot,plugins:di,globalTimeline:Jt,core:{PropTween:ii,globals:yv,Tween:dn,Timeline:Jn,Animation:xl,getCache:ea,_removeLinkedListItem:bc,reverting:function(){return Cn},context:function(e){return e&&qt&&(qt.data.push(e),e._ctx=qt),qt},suppressOverwrites:function(e){return Sp=e}}};ni("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return yc[a]=dn[a]});hi.add(Jn.updateRoot);Ka=yc.to({},{duration:0});var aR=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},oR=function(e,t){var i=e._targets,s,o,u;for(s in t)for(o=i.length;o--;)u=e._ptLookup[o][s],u&&(u=u.d)&&(u._pt&&(u=aR(u,s)),u&&u.modifier&&u.modifier(t[s],e,i[o],s))},eh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(s,o,u){u._onInit=function(c){var d,h;if(Mn(o)&&(d={},ni(o,function(p){return d[p]=1}),o=d),t){d={};for(h in o)d[h]=t(o[h]);o=d}oR(c,o)}}}},si=yc.registerPlugin({name:"attr",init:function(e,t,i,s,o){var u,c,d;this.tween=i;for(u in t)d=e.getAttribute(u)||"",c=this.add(e,"setAttribute",(d||0)+"",t[u],s,o,0,0,u),c.op=u,c.b=d,this._props.push(u)},render:function(e,t){for(var i=t._pt;i;)Cn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",headless:1,init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},eh("roundProps",Jh),eh("modifiers"),eh("snap",Iv))||yc;dn.version=Jn.version=si.version="3.15.0";xv=1;Mp()&&uo();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var y0,ps,eo,Ip,Js,M0,Up,lR=function(){return typeof window<"u"},Or={},$s=180/Math.PI,to=Math.PI/180,qa=Math.atan2,E0=1e8,Fp=/([A-Z])/g,uR=/(left|right|width|margin|padding|x)/i,cR=/[\s,\(]\S/,ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},np=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fR=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dR=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hR=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pR=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Jv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},ex=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},mR=function(e,t,i){return e.style[t]=i},_R=function(e,t,i){return e.style.setProperty(t,i)},gR=function(e,t,i){return e._gsap[t]=i},vR=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},xR=function(e,t,i,s,o){var u=e._gsap;u.scaleX=u.scaleY=i,u.renderTransform(o,u)},SR=function(e,t,i,s,o){var u=e._gsap;u[t]=i,u.renderTransform(o,u)},en="transform",ri=en+"Origin",yR=function a(e,t){var i=this,s=this.target,o=s.style,u=s._gsap;if(e in Or&&o){if(this.tfm=this.tfm||{},e!=="transform")e=ar[e]||e,~e.indexOf(",")?e.split(",").forEach(function(c){return i.tfm[c]=Cr(s,c)}):this.tfm[e]=u.x?u[e]:Cr(s,e),e===ri&&(this.tfm.zOrigin=u.zOrigin);else return ar.transform.split(",").forEach(function(c){return a.call(i,c,t)});if(this.props.indexOf(en)>=0)return;u.svg&&(this.svgo=s.getAttribute("data-svg-origin"),this.props.push(ri,t,"")),e=en}(o||t)&&this.props.push(e,t,o[e])},tx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},MR=function(){var e=this.props,t=this.target,i=t.style,s=t._gsap,o,u;for(o=0;o<e.length;o+=3)e[o+1]?e[o+1]===2?t[e[o]](e[o+2]):t[e[o]]=e[o+2]:e[o+2]?i[e[o]]=e[o+2]:i.removeProperty(e[o].substr(0,2)==="--"?e[o]:e[o].replace(Fp,"-$1").toLowerCase());if(this.tfm){for(u in this.tfm)s[u]=this.tfm[u];s.svg&&(s.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),o=Up(),(!o||!o.isStart)&&!i[en]&&(tx(i),s.zOrigin&&i[ri]&&(i[ri]+=" "+s.zOrigin+"px",s.zOrigin=0,s.renderTransform()),s.uncache=1)}},nx=function(e,t){var i={target:e,props:[],revert:MR,save:yR};return e._gsap||si.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(s){return i.save(s)}),i},ix,ip=function(e,t){var i=ps.createElementNS?ps.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ps.createElement(e);return i&&i.style?i:ps.createElement(e)},mi=function a(e,t,i){var s=getComputedStyle(e);return s[t]||s.getPropertyValue(t.replace(Fp,"-$1").toLowerCase())||s.getPropertyValue(t)||!i&&a(e,co(t)||t,1)||""},T0="O,Moz,ms,Ms,Webkit".split(","),co=function(e,t,i){var s=t||Js,o=s.style,u=5;if(e in o&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);u--&&!(T0[u]+e in o););return u<0?null:(u===3?"ms":u>=0?T0[u]:"")+e},rp=function(){lR()&&window.document&&(y0=window,ps=y0.document,eo=ps.documentElement,Js=ip("div")||{style:{}},ip("div"),en=co(en),ri=en+"Origin",Js.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ix=!!co("perspective"),Up=si.core.reverting,Ip=1)},w0=function(e){var t=e.ownerSVGElement,i=ip("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),s=e.cloneNode(!0),o;s.style.display="block",i.appendChild(s),eo.appendChild(i);try{o=s.getBBox()}catch{}return i.removeChild(s),eo.removeChild(i),o},A0=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},rx=function(e){var t,i;try{t=e.getBBox()}catch{t=w0(e),i=1}return t&&(t.width||t.height)||i||(t=w0(e)),t&&!t.width&&!t.x&&!t.y?{x:+A0(e,["x","cx","x1"])||0,y:+A0(e,["y","cy","y1"])||0,width:0,height:0}:t},sx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&rx(e))},Ss=function(e,t){if(t){var i=e.style,s;t in Or&&t!==ri&&(t=en),i.removeProperty?(s=t.substr(0,2),(s==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(s==="--"?t:t.replace(Fp,"-$1").toLowerCase())):i.removeAttribute(t)}},ms=function(e,t,i,s,o,u){var c=new ii(e._pt,t,i,0,1,u?ex:Jv);return e._pt=c,c.b=s,c.e=o,e._props.push(i),c},R0={deg:1,rad:1,turn:1},ER={grid:1,flex:1},ys=function a(e,t,i,s){var o=parseFloat(i)||0,u=(i+"").trim().substr((o+"").length)||"px",c=Js.style,d=uR.test(t),h=e.tagName.toLowerCase()==="svg",p=(h?"client":"offset")+(d?"Width":"Height"),g=100,_=s==="px",S=s==="%",E,M,x,y;if(s===u||!o||R0[s]||R0[u])return o;if(u!=="px"&&!_&&(o=a(e,t,i,"px")),y=e.getCTM&&sx(e),(S||u==="%")&&(Or[t]||~t.indexOf("adius")))return E=y?e.getBBox()[d?"width":"height"]:e[p],ln(S?o/E*g:o/100*E);if(c[d?"width":"height"]=g+(_?u:s),M=s!=="rem"&&~t.indexOf("adius")||s==="em"&&e.appendChild&&!h?e:e.parentNode,y&&(M=(e.ownerSVGElement||{}).parentNode),(!M||M===ps||!M.appendChild)&&(M=ps.body),x=M._gsap,x&&S&&x.width&&d&&x.time===hi.time&&!x.uncache)return ln(o/x.width*g);if(S&&(t==="height"||t==="width")){var b=e.style[t];e.style[t]=g+s,E=e[p],b?e.style[t]=b:Ss(e,t)}else(S||u==="%")&&!ER[mi(M,"display")]&&(c.position=mi(e,"position")),M===e&&(c.position="static"),M.appendChild(Js),E=Js[p],M.removeChild(Js),c.position="absolute";return d&&S&&(x=ea(M),x.time=hi.time,x.width=M[p]),ln(_?E*o/g:E&&o?g/E*o:0)},Cr=function(e,t,i,s){var o;return Ip||rp(),t in ar&&t!=="transform"&&(t=ar[t],~t.indexOf(",")&&(t=t.split(",")[0])),Or[t]&&t!=="transform"?(o=yl(e,s),o=t!=="transformOrigin"?o[t]:o.svg?o.origin:Ec(mi(e,ri))+" "+o.zOrigin+"px"):(o=e.style[t],(!o||o==="auto"||s||~(o+"").indexOf("calc("))&&(o=Mc[t]&&Mc[t](e,t,i)||mi(e,t)||Ev(e,t)||(t==="opacity"?1:0))),i&&!~(o+"").trim().indexOf(" ")?ys(e,t,o,i)+i:o},TR=function(e,t,i,s){if(!i||i==="none"){var o=co(t,e,1),u=o&&mi(e,o,1);u&&u!==i?(t=o,i=u):t==="borderColor"&&(i=mi(e,"borderTopColor"))}var c=new ii(this._pt,e.style,t,0,1,Zv),d=0,h=0,p,g,_,S,E,M,x,y,b,N,R,P;if(c.b=i,c.e=s,i+="",s+="",s.substring(0,6)==="var(--"&&(s=mi(e,s.substring(4,s.indexOf(")")))),s==="auto"&&(M=e.style[t],e.style[t]=s,s=mi(e,t)||s,M?e.style[t]=M:Ss(e,t)),p=[i,s],Hv(p),i=p[0],s=p[1],_=i.match($a)||[],P=s.match($a)||[],P.length){for(;g=$a.exec(s);)x=g[0],b=s.substring(d,g.index),E?E=(E+1)%5:(b.substr(-5)==="rgba("||b.substr(-5)==="hsla(")&&(E=1),x!==(M=_[h++]||"")&&(S=parseFloat(M)||0,R=M.substr((S+"").length),x.charAt(1)==="="&&(x=Ja(S,x)+R),y=parseFloat(x),N=x.substr((y+"").length),d=$a.lastIndex-N.length,N||(N=N||gi.units[t]||R,d===s.length&&(s+=N,c.e+=N)),R!==N&&(S=ys(e,t,M,N)||0),c._pt={_next:c._pt,p:b||h===1?b:",",s:S,c:y-S,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=d<s.length?s.substring(d,s.length):""}else c.r=t==="display"&&s==="none"?ex:Jv;return vv.test(s)&&(c.e=0),this._pt=c,c},C0={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},wR=function(e){var t=e.split(" "),i=t[0],s=t[1]||"50%";return(i==="top"||i==="bottom"||s==="left"||s==="right")&&(e=i,i=s,s=e),t[0]=C0[i]||i,t[1]=C0[s]||s,t.join(" ")},AR=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,s=i.style,o=t.u,u=i._gsap,c,d,h;if(o==="all"||o===!0)s.cssText="",d=1;else for(o=o.split(","),h=o.length;--h>-1;)c=o[h],Or[c]&&(d=1,c=c==="transformOrigin"?ri:en),Ss(i,c);d&&(Ss(i,en),u&&(u.svg&&i.removeAttribute("transform"),s.scale=s.rotate=s.translate="none",yl(i,1),u.uncache=1,tx(s)))}},Mc={clearProps:function(e,t,i,s,o){if(o.data!=="isFromStart"){var u=e._pt=new ii(e._pt,t,i,0,0,AR);return u.u=s,u.pr=-10,u.tween=o,e._props.push(i),1}}},Sl=[1,0,0,1,0,0],ax={},ox=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},b0=function(e){var t=mi(e,en);return ox(t)?Sl:t.substr(7).match(gv).map(ln)},Op=function(e,t){var i=e._gsap||ea(e),s=e.style,o=b0(e),u,c,d,h;return i.svg&&e.getAttribute("transform")?(d=e.transform.baseVal.consolidate().matrix,o=[d.a,d.b,d.c,d.d,d.e,d.f],o.join(",")==="1,0,0,1,0,0"?Sl:o):(o===Sl&&!e.offsetParent&&e!==eo&&!i.svg&&(d=s.display,s.display="block",u=e.parentNode,(!u||!e.offsetParent&&!e.getBoundingClientRect().width)&&(h=1,c=e.nextElementSibling,eo.appendChild(e)),o=b0(e),d?s.display=d:Ss(e,"display"),h&&(c?u.insertBefore(e,c):u?u.appendChild(e):eo.removeChild(e))),t&&o.length>6?[o[0],o[1],o[4],o[5],o[12],o[13]]:o)},sp=function(e,t,i,s,o,u){var c=e._gsap,d=o||Op(e,!0),h=c.xOrigin||0,p=c.yOrigin||0,g=c.xOffset||0,_=c.yOffset||0,S=d[0],E=d[1],M=d[2],x=d[3],y=d[4],b=d[5],N=t.split(" "),R=parseFloat(N[0])||0,P=parseFloat(N[1])||0,L,I,T,D;i?d!==Sl&&(I=S*x-E*M)&&(T=R*(x/I)+P*(-M/I)+(M*b-x*y)/I,D=R*(-E/I)+P*(S/I)-(S*b-E*y)/I,R=T,P=D):(L=rx(e),R=L.x+(~N[0].indexOf("%")?R/100*L.width:R),P=L.y+(~(N[1]||N[0]).indexOf("%")?P/100*L.height:P)),s||s!==!1&&c.smooth?(y=R-h,b=P-p,c.xOffset=g+(y*S+b*M)-y,c.yOffset=_+(y*E+b*x)-b):c.xOffset=c.yOffset=0,c.xOrigin=R,c.yOrigin=P,c.smooth=!!s,c.origin=t,c.originIsAbsolute=!!i,e.style[ri]="0px 0px",u&&(ms(u,c,"xOrigin",h,R),ms(u,c,"yOrigin",p,P),ms(u,c,"xOffset",g,c.xOffset),ms(u,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",R+" "+P)},yl=function(e,t){var i=e._gsap||new Wv(e);if("x"in i&&!t&&!i.uncache)return i;var s=e.style,o=i.scaleX<0,u="px",c="deg",d=getComputedStyle(e),h=mi(e,ri)||"0",p,g,_,S,E,M,x,y,b,N,R,P,L,I,T,D,k,B,Y,j,re,W,Q,V,H,oe,se,F,K,Le,Fe,Ue;return p=g=_=M=x=y=b=N=R=0,S=E=1,i.svg=!!(e.getCTM&&sx(e)),d.translate&&((d.translate!=="none"||d.scale!=="none"||d.rotate!=="none")&&(s[en]=(d.translate!=="none"?"translate3d("+(d.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(d.rotate!=="none"?"rotate("+d.rotate+") ":"")+(d.scale!=="none"?"scale("+d.scale.split(" ").join(",")+") ":"")+(d[en]!=="none"?d[en]:"")),s.scale=s.rotate=s.translate="none"),I=Op(e,i.svg),i.svg&&(i.uncache?(H=e.getBBox(),h=i.xOrigin-H.x+"px "+(i.yOrigin-H.y)+"px",V=""):V=!t&&e.getAttribute("data-svg-origin"),sp(e,V||h,!!V||i.originIsAbsolute,i.smooth!==!1,I)),P=i.xOrigin||0,L=i.yOrigin||0,I!==Sl&&(B=I[0],Y=I[1],j=I[2],re=I[3],p=W=I[4],g=Q=I[5],I.length===6?(S=Math.sqrt(B*B+Y*Y),E=Math.sqrt(re*re+j*j),M=B||Y?qa(Y,B)*$s:0,b=j||re?qa(j,re)*$s+M:0,b&&(E*=Math.abs(Math.cos(b*to))),i.svg&&(p-=P-(P*B+L*j),g-=L-(P*Y+L*re))):(Ue=I[6],Le=I[7],se=I[8],F=I[9],K=I[10],Fe=I[11],p=I[12],g=I[13],_=I[14],T=qa(Ue,K),x=T*$s,T&&(D=Math.cos(-T),k=Math.sin(-T),V=W*D+se*k,H=Q*D+F*k,oe=Ue*D+K*k,se=W*-k+se*D,F=Q*-k+F*D,K=Ue*-k+K*D,Fe=Le*-k+Fe*D,W=V,Q=H,Ue=oe),T=qa(-j,K),y=T*$s,T&&(D=Math.cos(-T),k=Math.sin(-T),V=B*D-se*k,H=Y*D-F*k,oe=j*D-K*k,Fe=re*k+Fe*D,B=V,Y=H,j=oe),T=qa(Y,B),M=T*$s,T&&(D=Math.cos(T),k=Math.sin(T),V=B*D+Y*k,H=W*D+Q*k,Y=Y*D-B*k,Q=Q*D-W*k,B=V,W=H),x&&Math.abs(x)+Math.abs(M)>359.9&&(x=M=0,y=180-y),S=ln(Math.sqrt(B*B+Y*Y+j*j)),E=ln(Math.sqrt(Q*Q+Ue*Ue)),T=qa(W,Q),b=Math.abs(T)>2e-4?T*$s:0,R=Fe?1/(Fe<0?-Fe:Fe):0),i.svg&&(V=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!ox(mi(e,en)),V&&e.setAttribute("transform",V))),Math.abs(b)>90&&Math.abs(b)<270&&(o?(S*=-1,b+=M<=0?180:-180,M+=M<=0?180:-180):(E*=-1,b+=b<=0?180:-180)),t=t||i.uncache,i.x=p-((i.xPercent=p&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-p)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+u,i.y=g-((i.yPercent=g&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-g)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+u,i.z=_+u,i.scaleX=ln(S),i.scaleY=ln(E),i.rotation=ln(M)+c,i.rotationX=ln(x)+c,i.rotationY=ln(y)+c,i.skewX=b+c,i.skewY=N+c,i.transformPerspective=R+u,(i.zOrigin=parseFloat(h.split(" ")[2])||!t&&i.zOrigin||0)&&(s[ri]=Ec(h)),i.xOffset=i.yOffset=0,i.force3D=gi.force3D,i.renderTransform=i.svg?CR:ix?lx:RR,i.uncache=0,i},Ec=function(e){return(e=e.split(" "))[0]+" "+e[1]},th=function(e,t,i){var s=Fn(t);return ln(parseFloat(t)+parseFloat(ys(e,"x",i+"px",s)))+s},RR=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,lx(e,t)},Xs="0deg",rl="0px",Ys=") ",lx=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.z,h=i.rotation,p=i.rotationY,g=i.rotationX,_=i.skewX,S=i.skewY,E=i.scaleX,M=i.scaleY,x=i.transformPerspective,y=i.force3D,b=i.target,N=i.zOrigin,R="",P=y==="auto"&&e&&e!==1||y===!0;if(N&&(g!==Xs||p!==Xs)){var L=parseFloat(p)*to,I=Math.sin(L),T=Math.cos(L),D;L=parseFloat(g)*to,D=Math.cos(L),u=th(b,u,I*D*-N),c=th(b,c,-Math.sin(L)*-N),d=th(b,d,T*D*-N+N)}x!==rl&&(R+="perspective("+x+Ys),(s||o)&&(R+="translate("+s+"%, "+o+"%) "),(P||u!==rl||c!==rl||d!==rl)&&(R+=d!==rl||P?"translate3d("+u+", "+c+", "+d+") ":"translate("+u+", "+c+Ys),h!==Xs&&(R+="rotate("+h+Ys),p!==Xs&&(R+="rotateY("+p+Ys),g!==Xs&&(R+="rotateX("+g+Ys),(_!==Xs||S!==Xs)&&(R+="skew("+_+", "+S+Ys),(E!==1||M!==1)&&(R+="scale("+E+", "+M+Ys),b.style[en]=R||"translate(0, 0)"},CR=function(e,t){var i=t||this,s=i.xPercent,o=i.yPercent,u=i.x,c=i.y,d=i.rotation,h=i.skewX,p=i.skewY,g=i.scaleX,_=i.scaleY,S=i.target,E=i.xOrigin,M=i.yOrigin,x=i.xOffset,y=i.yOffset,b=i.forceCSS,N=parseFloat(u),R=parseFloat(c),P,L,I,T,D;d=parseFloat(d),h=parseFloat(h),p=parseFloat(p),p&&(p=parseFloat(p),h+=p,d+=p),d||h?(d*=to,h*=to,P=Math.cos(d)*g,L=Math.sin(d)*g,I=Math.sin(d-h)*-_,T=Math.cos(d-h)*_,h&&(p*=to,D=Math.tan(h-p),D=Math.sqrt(1+D*D),I*=D,T*=D,p&&(D=Math.tan(p),D=Math.sqrt(1+D*D),P*=D,L*=D)),P=ln(P),L=ln(L),I=ln(I),T=ln(T)):(P=g,T=_,L=I=0),(N&&!~(u+"").indexOf("px")||R&&!~(c+"").indexOf("px"))&&(N=ys(S,"x",u,"px"),R=ys(S,"y",c,"px")),(E||M||x||y)&&(N=ln(N+E-(E*P+M*I)+x),R=ln(R+M-(E*L+M*T)+y)),(s||o)&&(D=S.getBBox(),N=ln(N+s/100*D.width),R=ln(R+o/100*D.height)),D="matrix("+P+","+L+","+I+","+T+","+N+","+R+")",S.setAttribute("transform",D),b&&(S.style[en]=D)},bR=function(e,t,i,s,o){var u=360,c=Mn(o),d=parseFloat(o)*(c&&~o.indexOf("rad")?$s:1),h=d-s,p=s+h+"deg",g,_;return c&&(g=o.split("_")[1],g==="short"&&(h%=u,h!==h%(u/2)&&(h+=h<0?u:-u)),g==="cw"&&h<0?h=(h+u*E0)%u-~~(h/u)*u:g==="ccw"&&h>0&&(h=(h-u*E0)%u-~~(h/u)*u)),e._pt=_=new ii(e._pt,t,i,s,h,fR),_.e=p,_.u="deg",e._props.push(i),_},P0=function(e,t){for(var i in t)e[i]=t[i];return e},PR=function(e,t,i){var s=P0({},i._gsap),o="perspective,force3D,transformOrigin,svgOrigin",u=i.style,c,d,h,p,g,_,S,E;s.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),u[en]=t,c=yl(i,1),Ss(i,en),i.setAttribute("transform",h)):(h=getComputedStyle(i)[en],u[en]=t,c=yl(i,1),u[en]=h);for(d in Or)h=s[d],p=c[d],h!==p&&o.indexOf(d)<0&&(S=Fn(h),E=Fn(p),g=S!==E?ys(i,d,h,E):parseFloat(h),_=parseFloat(p),e._pt=new ii(e._pt,c,d,g,_-g,np),e._pt.u=E||0,e._props.push(d));P0(c,s)};ni("padding,margin,Width,Radius",function(a,e){var t="Top",i="Right",s="Bottom",o="Left",u=(e<3?[t,i,s,o]:[t+o,t+i,s+i,s+o]).map(function(c){return e<2?a+c:"border"+c+a});Mc[e>1?"border"+a:a]=function(c,d,h,p,g){var _,S;if(arguments.length<4)return _=u.map(function(E){return Cr(c,E,h)}),S=_.join(" "),S.split(_[0]).length===5?_[0]:S;_=(p+"").split(" "),S={},u.forEach(function(E,M){return S[E]=_[M]=_[M]||_[(M-1)/2|0]}),c.init(d,S,g)}});var ux={name:"css",register:rp,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,s,o){var u=this._props,c=e.style,d=i.vars.startAt,h,p,g,_,S,E,M,x,y,b,N,R,P,L,I,T,D;Ip||rp(),this.styles=this.styles||nx(e),T=this.styles.props,this.tween=i;for(M in t)if(M!=="autoRound"&&(p=t[M],!(di[M]&&Xv(M,t,i,s,e,o)))){if(S=typeof p,E=Mc[M],S==="function"&&(p=p.call(i,s,e,o),S=typeof p),S==="string"&&~p.indexOf("random(")&&(p=gl(p)),E)E(this,e,M,p,i)&&(I=1);else if(M.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(M)+"").trim(),p+="",gs.lastIndex=0,gs.test(h)||(x=Fn(h),y=Fn(p),y?x!==y&&(h=ys(e,M,h,y)+y):x&&(p+=x)),this.add(c,"setProperty",h,p,s,o,0,0,M),u.push(M),T.push(M,0,c[M]);else if(S!=="undefined"){if(d&&M in d?(h=typeof d[M]=="function"?d[M].call(i,s,e,o):d[M],Mn(h)&&~h.indexOf("random(")&&(h=gl(h)),Fn(h+"")||h==="auto"||(h+=gi.units[M]||Fn(Cr(e,M))||""),(h+"").charAt(1)==="="&&(h=Cr(e,M))):h=Cr(e,M),_=parseFloat(h),b=S==="string"&&p.charAt(1)==="="&&p.substr(0,2),b&&(p=p.substr(2)),g=parseFloat(p),M in ar&&(M==="autoAlpha"&&(_===1&&Cr(e,"visibility")==="hidden"&&g&&(_=0),T.push("visibility",0,c.visibility),ms(this,c,"visibility",_?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=ar[M],~M.indexOf(",")&&(M=M.split(",")[0]))),N=M in Or,N){if(this.styles.save(M),D=p,S==="string"&&p.substring(0,6)==="var(--"){if(p=mi(e,p.substring(4,p.indexOf(")"))),p.substring(0,5)==="calc("){var k=e.style.perspective;e.style.perspective=p,p=mi(e,"perspective"),k?e.style.perspective=k:Ss(e,"perspective")}g=parseFloat(p)}if(R||(P=e._gsap,P.renderTransform&&!t.parseTransform||yl(e,t.parseTransform),L=t.smoothOrigin!==!1&&P.smooth,R=this._pt=new ii(this._pt,c,en,0,1,P.renderTransform,P,0,-1),R.dep=1),M==="scale")this._pt=new ii(this._pt,P,"scaleY",P.scaleY,(b?Ja(P.scaleY,b+g):g)-P.scaleY||0,np),this._pt.u=0,u.push("scaleY",M),M+="X";else if(M==="transformOrigin"){T.push(ri,0,c[ri]),p=wR(p),P.svg?sp(e,p,0,L,0,this):(y=parseFloat(p.split(" ")[2])||0,y!==P.zOrigin&&ms(this,P,"zOrigin",P.zOrigin,y),ms(this,c,M,Ec(h),Ec(p)));continue}else if(M==="svgOrigin"){sp(e,p,1,L,0,this);continue}else if(M in ax){bR(this,P,M,_,b?Ja(_,b+p):p);continue}else if(M==="smoothOrigin"){ms(this,P,"smooth",P.smooth,p);continue}else if(M==="force3D"){P[M]=p;continue}else if(M==="transform"){PR(this,p,e);continue}}else M in c||(M=co(M)||M);if(N||(g||g===0)&&(_||_===0)&&!cR.test(p)&&M in c)x=(h+"").substr((_+"").length),g||(g=0),y=Fn(p)||(M in gi.units?gi.units[M]:x),x!==y&&(_=ys(e,M,h,y)),this._pt=new ii(this._pt,N?P:c,M,_,(b?Ja(_,b+g):g)-_,!N&&(y==="px"||M==="zIndex")&&t.autoRound!==!1?pR:np),this._pt.u=y||0,N&&D!==p?(this._pt.b=h,this._pt.e=D,this._pt.r=hR):x!==y&&y!=="%"&&(this._pt.b=h,this._pt.r=dR);else if(M in c)TR.call(this,e,M,h,b?b+p:p);else if(M in e)this.add(e,M,h||e[M],b?b+p:p,s,o);else if(M!=="parseTransform"){Tp(M,p);continue}N||(M in c?T.push(M,0,c[M]):typeof e[M]=="function"?T.push(M,2,e[M]()):T.push(M,1,h||e[M])),u.push(M)}}I&&jv(this)},render:function(e,t){if(t.tween._time||!Up())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Cr,aliases:ar,getSetter:function(e,t,i){var s=ar[t];return s&&s.indexOf(",")<0&&(t=s),t in Or&&t!==ri&&(e._gsap.x||Cr(e,"x"))?i&&M0===i?t==="scale"?vR:gR:(M0=i||{})&&(t==="scale"?xR:SR):e.style&&!yp(e.style[t])?mR:~t.indexOf("-")?_R:Lp(e,t)},core:{_removeProperty:Ss,_getMatrix:Op}};si.utils.checkPrefix=co;si.core.getStyleSaver=nx;(function(a,e,t,i){var s=ni(a+","+e+","+t,function(o){Or[o]=1});ni(e,function(o){gi.units[o]="deg",ax[o]=1}),ar[s[13]]=a+","+e,ni(i,function(o){var u=o.split(":");ar[u[1]]=s[u[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ni("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){gi.units[a]="px"});si.registerPlugin(ux);var cs=si.registerPlugin(ux)||si;cs.core.Tween;const DR=(a,e)=>{const t=e.x-a.x,i=e.y-a.y;return Math.sqrt(t*t+i*i)},tc=(a,e,t,i)=>{const s=i-Math.abs(i*a/e);return Math.max(t,s+t)},LR=(a,e)=>{let t;return(...i)=>{clearTimeout(t),t=setTimeout(()=>a(...i),e)}};function D0({text:a="Compressa",fontFamily:e="Roboto Flex",fontUrl:t="https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wdth,wght@8..144,25..151,100..1000&display=swap",width:i=!0,weight:s=!0,italic:o=!1,alpha:u=!1,flex:c=!0,stroke:d=!1,scale:h=!1,textColor:p="#FFFFFF",strokeColor:g="#FFFFFF",className:_="",minFontSize:S=24}){const E=dt.useRef(null),M=dt.useRef(null),x=dt.useRef([]),y=dt.useRef({x:0,y:0}),b=dt.useRef({x:0,y:0}),[N,R]=dt.useState(S),[P,L]=dt.useState(1),[I,T]=dt.useState(1),D=dt.useMemo(()=>a.split(""),[a]);dt.useEffect(()=>{const j=W=>{b.current.x=W.clientX,b.current.y=W.clientY},re=W=>{const Q=W.touches[0];Q&&(b.current.x=Q.clientX,b.current.y=Q.clientY)};if(window.addEventListener("mousemove",j),window.addEventListener("touchmove",re,{passive:!0}),E.current){const{left:W,top:Q,width:V,height:H}=E.current.getBoundingClientRect();y.current.x=W+V/2,y.current.y=Q+H/2,b.current.x=y.current.x,b.current.y=y.current.y}return()=>{window.removeEventListener("mousemove",j),window.removeEventListener("touchmove",re)}},[]);const k=dt.useCallback(()=>{if(!E.current||!M.current)return;const{width:j,height:re}=E.current.getBoundingClientRect(),W=Math.max(j/Math.max(D.length/1.65,1),S);R(W),L(1),T(1),requestAnimationFrame(()=>{if(!M.current)return;const Q=M.current.getBoundingClientRect();if(h&&Q.height>0){const V=re/Q.height;L(V),T(V)}})},[D.length,S,h]);dt.useEffect(()=>{const j=LR(k,100);return j(),window.addEventListener("resize",j),()=>window.removeEventListener("resize",j)},[k]),dt.useEffect(()=>{let j=0;const re=()=>{if(y.current.x+=(b.current.x-y.current.x)/14,y.current.y+=(b.current.y-y.current.y)/14,M.current){const W=M.current.getBoundingClientRect(),Q=Math.max(W.width*.42,1);x.current.forEach(V=>{if(!V)return;const H=V.getBoundingClientRect(),oe={x:H.x+H.width/2,y:H.y+H.height/2},se=DR(y.current,oe),F=i?Math.floor(tc(se,Q,18,154)):100,K=s?Math.floor(tc(se,Q,180,820)):520,Le=o?tc(se,Q,0,1).toFixed(2):0,Fe=u?tc(se,Q,.15,.85).toFixed(2):1,Ue=i?Math.max(.82,Math.min(1.18,F/100)):1,ae=`'wght' ${K}, 'wdth' ${F}, 'ital' ${Le}`;V.style.fontVariationSettings!==ae&&(V.style.fontVariationSettings=ae),V.style.transform=`scaleX(${Ue.toFixed(3)})`,u&&V.style.opacity!==Fe&&(V.style.opacity=Fe)})}j=requestAnimationFrame(re)};return re(),()=>cancelAnimationFrame(j)},[i,s,o,u]);const B=dt.useMemo(()=>fe.jsx("style",{children:`
        @import url('${t}');
        .text-pressure-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .text-pressure-stroke span {
          position: relative;
          color: ${p};
        }
        .text-pressure-stroke span::after {
          content: attr(data-char);
          position: absolute;
          left: 0;
          top: 0;
          color: transparent;
          z-index: -1;
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: ${g};
        }
        .text-pressure-title {
          color: ${p};
        }
      `}),[t,g,p]),Y=[_,c?"text-pressure-flex":"",d?"text-pressure-stroke":""].filter(Boolean).join(" ");return fe.jsxs("div",{ref:E,className:"text-pressure-shell",children:[B,fe.jsx("h1",{ref:M,className:`text-pressure-title ${Y}`,style:{fontFamily:e,textTransform:"uppercase",fontSize:N,lineHeight:I,transform:`scale(1, ${P})`,transformOrigin:"center top",margin:0,textAlign:"center",userSelect:"none",whiteSpace:"nowrap",fontWeight:100,width:"100%"},children:D.map((j,re)=>fe.jsx("span",{ref:W=>{x.current[re]=W},"data-char":j,style:{display:"inline-block",color:d?void 0:p,transformOrigin:"50% 60%",transition:"color 180ms ease",willChange:"transform, font-variation-settings"},children:j===" "?" ":j},`${j}-${re}`))})]})}const ap=window.STUDIO_DATA||{featured:[],portfolio:[]},fo=(a="")=>!a||/^(https?:|data:|blob:)/i.test(a)?a:`/heangeun/${String(a).replace(/^\/+/,"")}`;function NR(){const[a,e]=dt.useState(0),[t,i]=dt.useState(!1),[s,o]=dt.useState(!0);return dt.useEffect(()=>{const u=performance.now(),c=1180;let d=0;const h=p=>{const g=p-u,_=Math.min(g/c,1),S=1-Math.pow(1-_,3),E=_<.94?Math.sin(p*.055)*2.6+Math.sin(p*.017)*1.4:0,M=Math.max(0,Math.min(100,Math.floor(S*100+E)));e(M),_<1?d=requestAnimationFrame(h):(e(100),window.setTimeout(()=>i(!0),180),window.setTimeout(()=>o(!1),820))};return d=requestAnimationFrame(h),()=>cancelAnimationFrame(d)},[]),s?fe.jsxs("div",{className:`loading-intro${t?" is-done":""}`,"aria-label":"LOADING",children:[fe.jsxs("div",{className:"loading-symbols","aria-hidden":"true",children:[fe.jsx("span",{children:"+"}),fe.jsx("span",{children:"%"}),fe.jsx("span",{children:"+"}),fe.jsx("span",{children:"/"})]}),fe.jsxs("div",{className:"loading-count",children:[fe.jsx("span",{children:String(a).padStart(2,"0")}),fe.jsx("em",{children:"%"})]}),fe.jsx("div",{className:"loading-track","aria-hidden":"true",children:fe.jsx("span",{style:{transform:`scaleX(${a/100})`}})})]}):null}function IR(){dt.useEffect(()=>{const a=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting&&t.target.classList.add("is-visible")})},{threshold:.16});return document.querySelectorAll(".reveal").forEach(e=>a.observe(e)),()=>a.disconnect()},[])}function UR(){dt.useEffect(()=>{let a=0;if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const t=()=>{const i=window.innerHeight||1;document.querySelectorAll(".scroll-motion").forEach(s=>{const o=s.getBoundingClientRect(),u=o.top+o.height/2,c=Math.max(-1,Math.min(1,(u-i/2)/i)),d=Number(s.dataset.depth||0);s.style.setProperty("--scroll-y",`${(c*-44+d*14).toFixed(2)}px`),s.style.setProperty("--scroll-scale",`${(1.015-Math.abs(c)*.045).toFixed(3)}`)}),a=requestAnimationFrame(t)};return a=requestAnimationFrame(t),()=>cancelAnimationFrame(a)},[])}function FR(){const a=dt.useRef(null);return dt.useEffect(()=>{const e=a.current;if(!e||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const i=e.getContext("2d",{alpha:!0}),s=[];let o=0,u=0,c=0,d=0;const h=()=>{const g=e.parentElement.getBoundingClientRect(),_=1;o=Math.max(1,g.width),u=Math.max(1,g.height),e.width=Math.floor(o*_),e.height=Math.floor(u*_),e.style.width=`${o}px`,e.style.height=`${u}px`,i.setTransform(_,0,0,_,0,0),s.length=0;const S=o<800?90:170;for(let E=0;E<S;E+=1)s.push({x:Math.random()*o,y:u*.56+Math.random()*u*.42,r:Math.random()*1.5+.25,a:Math.random()*.34+.1,s:Math.random()*.34+.08})},p=()=>{c+=.006,i.clearRect(0,0,o,u),s.forEach((g,_)=>{g.x+=Math.sin(c+_)*g.s,g.y+=Math.cos(c*.8+_)*g.s*.55,g.x<-4&&(g.x=o+4),g.x>o+4&&(g.x=-4),i.globalAlpha=g.a,i.fillStyle="#e6e5df",i.beginPath(),i.arc(g.x,g.y,g.r,0,Math.PI*2),i.fill()}),i.globalAlpha=1,d=requestAnimationFrame(p)};return h(),window.addEventListener("resize",h),d=requestAnimationFrame(p),()=>{cancelAnimationFrame(d),window.removeEventListener("resize",h)}},[]),fe.jsx("canvas",{ref:a,"aria-hidden":"true"})}function OR(){const a=dt.useRef(null);return dt.useEffect(()=>{const e=a.current,t=e==null?void 0:e.closest(".hero");if(!e||!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s=new fA({alpha:!0,antialias:!1,powerPreference:"high-performance"});s.setClearColor(0,0),s.setPixelRatio(Math.min(window.devicePixelRatio||1,1.25)),e.appendChild(s.domElement);const o=new Ky,u=new xp(-1,1,1,-1,0,1),c=new wl(2,2,1,1),d={uTime:{value:0},uResolution:{value:new yt(1,1)},uMouse:{value:new yt(.56,.46)},uVelocity:{value:new yt(0,0)},uIntensity:{value:0}},h=new qi({transparent:!0,depthTest:!1,depthWrite:!1,uniforms:d,vertexShader:`
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
      `}),p=new fr(c,h);o.add(p);const g={width:1,height:1,targetX:.56,targetY:.46,x:.56,y:.46,lastX:.56,lastY:.46,vx:0,vy:0,intensity:0,targetIntensity:0,lastMove:0};let _=0;const S=()=>{const x=t.getBoundingClientRect();g.width=Math.max(1,x.width),g.height=Math.max(1,x.height),s.setSize(g.width,g.height,!1),d.uResolution.value.set(g.width,g.height)},E=x=>{const y=t.getBoundingClientRect(),b=Math.max(0,Math.min(1,(x.clientX-y.left)/y.width)),N=Math.max(0,Math.min(1,1-(x.clientY-y.top)/y.height));g.vx+=(b-g.lastX)*.9,g.vy+=(N-g.lastY)*.9,g.lastX=b,g.lastY=N,g.targetX=b,g.targetY=N,g.targetIntensity=1,g.lastMove=performance.now()},M=x=>{x-g.lastMove>260&&(g.targetIntensity=0),g.x+=(g.targetX-g.x)*.055,g.y+=(g.targetY-g.y)*.055,g.vx*=.9,g.vy*=.9,g.intensity+=(g.targetIntensity-g.intensity)*.065,d.uTime.value=x*.001,d.uMouse.value.set(g.x,g.y),d.uVelocity.value.set(g.vx,g.vy),d.uIntensity.value=g.intensity,s.render(o,u),_=requestAnimationFrame(M)};return S(),window.addEventListener("resize",S),t.addEventListener("pointermove",E),_=requestAnimationFrame(M),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",S),t.removeEventListener("pointermove",E),c.dispose(),h.dispose(),s.dispose(),s.domElement.remove()}},[]),fe.jsx("div",{className:"three-fluid-layer",ref:a,"aria-hidden":"true"})}function kR({className:a="hero-meta"}){const[e,t]=dt.useState(()=>new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Shanghai",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}).format(new Date));return dt.useEffect(()=>{const i=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Shanghai",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:!1}),s=window.setInterval(()=>{t(i.format(new Date))},1e3);return()=>window.clearInterval(s)},[]),fe.jsxs("div",{className:a,"aria-label":"FOSHAN COORDINATES AND CURRENT TIME",children:[fe.jsx("span",{children:"FOSHAN"}),fe.jsx("span",{children:"23.0215° N / 113.1214° E"}),fe.jsx("time",{children:e})]})}function BR(){return fe.jsxs("header",{className:"site-header",children:[fe.jsxs("a",{className:"brand",href:"#home","aria-label":"STUDIO HOME",children:[fe.jsx("span",{}),fe.jsx("strong",{children:"PORTFOLIO"})]}),fe.jsxs("nav",{"aria-label":"PRIMARY NAVIGATION",children:[fe.jsx("a",{href:"#about",children:"ABOUT"}),fe.jsx("a",{href:"#portfolio",children:"PROJECT"}),fe.jsx("a",{href:"#cases",children:"SELECTED CASES"}),fe.jsx("a",{href:"#contact",children:"CONTACT"})]}),fe.jsx("span",{className:"header-balance","aria-hidden":"true"})]})}function zR(){return fe.jsxs("div",{className:"hero-pressure-title","aria-label":"HELLO THIS IS MY STUDIO",children:[fe.jsx("div",{className:"pressure-line pressure-line-hello",children:fe.jsx(D0,{text:"HELLO",flex:!0,alpha:!1,stroke:!1,width:!0,weight:!0,italic:!1,textColor:"#f4f1ea",strokeColor:"#f4f1ea",className:"hero-pressure-text",minFontSize:72})}),fe.jsx("div",{className:"pressure-line pressure-line-studio",children:fe.jsx(D0,{text:"THIS IS MY STUDIO",flex:!0,alpha:!1,stroke:!1,width:!0,weight:!0,italic:!1,textColor:"#f4f1ea",strokeColor:"#f4f1ea",className:"hero-pressure-text",minFontSize:48})})]})}function VR(){return fe.jsxs("section",{className:"hero",id:"home",children:[fe.jsx("video",{className:"hero-bg-video",src:fo("/视频/网页首页鲸鱼光影视频_3.mp4"),autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-hidden":"true"}),fe.jsx("div",{className:"hero-video-shade","aria-hidden":"true"}),fe.jsx("div",{className:"hero-particles",children:fe.jsx(FR,{})}),fe.jsx(OR,{}),fe.jsx(kR,{}),fe.jsxs("div",{className:"hero-copy reveal",children:[fe.jsx("p",{className:"eyebrow",children:"CREATIVE STUDIO / BRAND SYSTEM / MOTION"}),fe.jsx(zR,{}),fe.jsx("p",{className:"hero-cn",children:"让视觉回归纯粹，用克制的设计，构建有生命力的品牌生态。"})]}),fe.jsxs("div",{className:"hero-index reveal",children:[fe.jsx("span",{children:"01"}),fe.jsx("span",{children:"LIQUID IDENTITY FIELD"})]})]})}function HR(){const a=["WE","SHAPE","QUIET","SYSTEMS","THAT","MOVE"];return fe.jsxs("section",{className:"video-statement",id:"motion",children:[fe.jsxs("div",{className:"video-copy reveal",children:[fe.jsx("p",{className:"eyebrow",children:"02 / MOTION STUDY"}),fe.jsx("h2",{"aria-label":"WE SHAPE QUIET SYSTEMS THAT MOVE",children:a.map((e,t)=>fe.jsx("span",{style:{"--i":t},children:e},e))}),fe.jsx("p",{children:"A RESTRAINED MOTION LAYER, PLACED BEHIND TYPOGRAPHY AND TUNED FOR SLOW CINEMATIC SCROLLING."})]}),fe.jsx("div",{className:"video-frame scroll-motion reveal","data-depth":"1",children:fe.jsx("video",{src:fo("/视频/0.mp4"),autoPlay:!0,muted:!0,loop:!0,playsInline:!0,preload:"metadata","aria-label":"STUDIO MOTION REEL"})})]})}function GR(){const a=dt.useMemo(()=>ap.portfolio||[],[]),e=dt.useMemo(()=>{const i=Math.ceil(a.length/2);return[{label:"TOP PORTFOLIO PROJECTS",items:a.slice(0,i),direction:"left"},{label:"BOTTOM PORTFOLIO PROJECTS",items:a.slice(i),direction:"right"}]},[a]),t=(i,s,o,u)=>{const c=i.width&&i.height?i.width/i.height:1;return fe.jsx("article",{className:`project-card project-${i.orientation.toLowerCase()}`,style:{"--project-ratio":c},children:fe.jsx("img",{src:fo(i.src),alt:i.title||"Portfolio project",loading:u<4?"eager":"lazy"})},`${s}-${o}-${i.src}-${u}`)};return fe.jsxs("section",{className:"portfolio-slider",id:"portfolio",children:[fe.jsxs("div",{className:"section-head reveal",children:[fe.jsxs("div",{children:[fe.jsx("p",{className:"eyebrow",children:"03 / PROJECT CARDS"}),fe.jsx("h2",{children:"PORTFOLIO"})]}),fe.jsx("span",{children:"CONTINUOUSLY LOOPING PROJECT CARDS. TWO ROWS DRIFT IN OPPOSITE DIRECTIONS AND PAUSE ON HOVER."})]}),fe.jsx("div",{className:"slider-shell reveal",children:e.map(i=>fe.jsxs("div",{className:`project-track project-track-${i.direction}`,"aria-label":i.label,children:[fe.jsx("div",{className:"project-track-group",children:i.items.map((s,o)=>t(s,i.direction,0,o))}),fe.jsx("div",{className:"project-track-group","aria-hidden":"true",children:i.items.map((s,o)=>t(s,i.direction,1,o))})]},i.direction))})]})}function WR(){const a=dt.useRef([]),e=dt.useMemo(()=>[...ap.featured||[],...ap.portfolio||[]],[]),[t,i]=dt.useState(null),s=dt.useMemo(()=>Object.fromEntries(Object.entries({key:/KV|主视觉|盛典|年会|开工季|元旦|年货节|MALL|机场|工商银行|烟草|益城/i,poster:/海报|小红书|随舞|音乐会|南宁|划得来|六一|青流计划|抢券|晒出/i,ip:/IP|PONO|MI MEWO|CHAO/i,collateral:/包装|包枕|抱枕|餐券|工作证|瓶子|行李箱|手办/i,event:/活动|会议|展会|园区|路演|年会|私享会|阅读/i,brand:/品牌|品牌视觉|供应链|京东/i}).map(([c,d])=>[c,e.filter(h=>d.test(h.file||h.title||""))])),[e]),o=dt.useMemo(()=>[{name:"主视觉",en:"KEY VISUAL",description:"品牌KV、活动KV、Campaign主视觉、节日主视觉、产品主视觉",code:"01",tone:"light",category:"key"},{name:"海报",en:"DIGITAL DESIGN",description:"海报、详情页、Banner、公众号视觉、社交媒体、电商视觉",code:"02",tone:"dark",category:"poster"},{name:"IP设计",en:"IP DESIGN",description:"IP形象、三视图、表情、动作、角色延展、IP海报",code:"03",tone:"mid",category:"ip"},{name:"物料延展",en:"COLLATERAL",description:"宣传册、折页、单张、礼盒、卡券、手提袋、周边、印刷品",code:"04",tone:"light",category:"collateral"},{name:"空间活动",en:"EVENT & SPACE",description:"活动、会议、展会、美陈、路演、门店活动、空间视觉应用",code:"05",tone:"dark",category:"event"},{name:"品牌视觉",en:"BRAND IDENTITY",description:"Logo、VI、品牌色彩、字体规范、品牌视觉系统、SI视觉、品牌升级",code:"06",tone:"mid",category:"brand"}].map(u=>({...u,images:(s[u.category]||[]).slice(0,12)})),[s]);return dt.useEffect(()=>{const u=a.current.filter(Boolean),c=u.map(d=>{const h=d.querySelectorAll(".archive-preview"),p=()=>{u.forEach(_=>cs.to(_,{opacity:_===d?1:.15,duration:.62,ease:"power4.out",overwrite:!0})),cs.to(d,{zIndex:50,duration:.01,overwrite:!0}),cs.fromTo(h,{y:30,x:0,rotation:0,scale:.96,opacity:0},{y:_=>-58-_*28,x:_=>[-42,18,62][_%3],rotation:_=>[-7,4,8][_%3],scale:1,opacity:1,duration:.62,stagger:.055,ease:"expo.out",overwrite:!0})},g=()=>{cs.to(u,{opacity:1,duration:.62,ease:"power4.out",overwrite:!0}),cs.to(d,{zIndex:"",duration:.01,overwrite:!0}),cs.to(h,{y:16,x:0,rotation:0,scale:.96,opacity:0,duration:.55,stagger:.04,ease:"power4.out",overwrite:!0})};return d.addEventListener("mouseenter",p),d.addEventListener("mouseleave",g),cs.set(h,{y:16,opacity:0,scale:.96}),()=>{d.removeEventListener("mouseenter",p),d.removeEventListener("mouseleave",g)}});return()=>c.forEach(d=>d())},[o]),fe.jsxs("section",{className:"archive-cases section",id:"cases",children:[fe.jsxs("div",{className:"archive-heading reveal",children:[fe.jsx("p",{className:"eyebrow",children:"04 / WORKS"}),fe.jsx("h2",{children:"WORKS"}),fe.jsx("span",{className:"archive-word",children:"Archive"})]}),fe.jsx("div",{className:"archive-stack",children:o.map((u,c)=>fe.jsxs("article",{className:"archive-case archive-case-"+(c+1),ref:d=>{a.current[c]=d},role:"button",tabIndex:"0",onClick:()=>i(u),onKeyDown:d=>{(d.key==="Enter"||d.key===" ")&&i(u)},children:[fe.jsx("div",{className:"archive-previews","aria-hidden":"true",children:u.images.slice(0,3).map((d,h)=>fe.jsx("img",{className:"archive-preview",src:fo(d.src),alt:""},d.src+"-"+h))}),fe.jsxs("div",{className:"archive-folder archive-folder-"+u.tone,children:[fe.jsx("div",{className:"archive-tab"}),fe.jsx("span",{className:"archive-code",children:u.code}),fe.jsxs("h3",{children:[fe.jsx("strong",{children:u.name}),fe.jsx("small",{children:u.en})]}),fe.jsx("p",{className:"archive-description",children:u.description}),fe.jsxs("span",{className:"archive-count",children:[String(u.images.length).padStart(2,"0")," PROJECTS"]})]})]},u.code))}),t&&fe.jsx("div",{className:"archive-modal",role:"dialog","aria-modal":"true","aria-label":t.name+" works",onClick:()=>i(null),children:fe.jsxs("div",{className:"archive-modal-panel",onClick:u=>u.stopPropagation(),children:[fe.jsx("button",{className:"archive-modal-close",type:"button",onClick:()=>i(null),"aria-label":"Close",children:"×"}),fe.jsxs("div",{className:"archive-modal-head",children:[fe.jsxs("span",{children:[t.code," / ",t.en]}),fe.jsx("h3",{children:t.name}),fe.jsx("p",{children:t.description})]}),fe.jsx("div",{className:"archive-modal-grid",children:t.images.map(u=>fe.jsxs("figure",{children:[fe.jsx("img",{src:fo(u.src),alt:u.title||t.name}),fe.jsx("figcaption",{children:u.title||t.en})]},u.src))})]})})]})}function XR(){const a=dt.useRef(null);return dt.useEffect(()=>{const e=a.current,t=e==null?void 0:e.closest(".about");if(!e||!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s={x:50,y:50,targetX:50,targetY:50,intensity:0,targetIntensity:0};let o=0;const u=h=>{const p=t.getBoundingClientRect();s.targetX=(h.clientX-p.left)/p.width*100,s.targetY=(h.clientY-p.top)/p.height*100,s.targetIntensity=1},c=()=>{s.targetIntensity=0},d=()=>{s.x+=(s.targetX-s.x)*.16,s.y+=(s.targetY-s.y)*.16,s.intensity+=(s.targetIntensity-s.intensity)*.12,e.style.setProperty("--about-x",`${s.x.toFixed(2)}%`),e.style.setProperty("--about-y",`${s.y.toFixed(2)}%`),e.style.setProperty("--about-reveal",s.intensity.toFixed(4)),o=requestAnimationFrame(d)};return t.addEventListener("pointermove",u),t.addEventListener("pointerleave",c),o=requestAnimationFrame(d),()=>{cancelAnimationFrame(o),t.removeEventListener("pointermove",u),t.removeEventListener("pointerleave",c)}},[]),fe.jsx("div",{className:"about-color-reveal",ref:a,"aria-hidden":"true"})}function YR(){return fe.jsxs("section",{className:"about section",id:"about",children:[fe.jsx(XR,{}),fe.jsxs("div",{className:"about-copy reveal",children:[fe.jsx("p",{className:"eyebrow",children:"05 / ABOUT THE STUDIO"}),fe.jsx("h2",{children:"PURE DESIGN BEGINS WITH A CONVERSATION."}),fe.jsx("p",{className:"about-cn",children:"回归纯粹，始于对话。"})]}),fe.jsx("div",{className:"about-line","aria-hidden":"true"})]})}function qR(){const a=dt.useRef(null);return dt.useEffect(()=>{const e=a.current,t=e==null?void 0:e.closest(".contact");if(!e||!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const s={x:50,y:50,targetX:50,targetY:50,intensity:0,targetIntensity:0};let o=0;const u=h=>{const p=t.getBoundingClientRect();s.targetX=(h.clientX-p.left)/p.width*100,s.targetY=(h.clientY-p.top)/p.height*100,s.targetIntensity=1},c=()=>{s.targetIntensity=0},d=()=>{s.x+=(s.targetX-s.x)*.16,s.y+=(s.targetY-s.y)*.16,s.intensity+=(s.targetIntensity-s.intensity)*.12,e.style.setProperty("--contact-x",`${s.x.toFixed(2)}%`),e.style.setProperty("--contact-y",`${s.y.toFixed(2)}%`),e.style.setProperty("--contact-reveal",s.intensity.toFixed(4)),o=requestAnimationFrame(d)};return t.addEventListener("pointermove",u),t.addEventListener("pointerleave",c),o=requestAnimationFrame(d),()=>{cancelAnimationFrame(o),t.removeEventListener("pointermove",u),t.removeEventListener("pointerleave",c)}},[]),fe.jsx("div",{className:"contact-image-reveal",ref:a,"aria-hidden":"true"})}function $R(){return fe.jsxs("section",{className:"contact closing-section",id:"contact",children:[fe.jsx(qR,{}),fe.jsx("span",{className:"closing-dot reveal","aria-hidden":"true"}),fe.jsx("p",{className:"eyebrow reveal",children:"06 / CONTACT"}),fe.jsx("h2",{className:"reveal",children:"LET'S WORK TOGETHER"}),fe.jsxs("div",{className:"closing-bar reveal",children:[fe.jsx("a",{href:"mailto:hello@studio.com",children:"HELLO@STUDIO.COM"}),fe.jsx("a",{className:"wechat-link",href:"#wechat-qr","aria-label":"SHOW WECHAT QR CODE",children:"WECHAT"}),fe.jsx("a",{className:"back-top",href:"#home","aria-label":"BACK TO TOP",children:"BACK TO TOP"})]}),fe.jsxs("div",{className:"wechat-modal",id:"wechat-qr","aria-label":"WECHAT QR CODE",children:[fe.jsx("a",{className:"wechat-modal-backdrop",href:"#contact","aria-label":"CLOSE WECHAT QR CODE"}),fe.jsxs("div",{className:"wechat-modal-panel",role:"dialog","aria-modal":"true","aria-label":"WECHAT QR CODE",children:[fe.jsx("img",{src:fo("/底图/wechat-qr.jpg"),alt:"WECHAT QR CODE"}),fe.jsx("span",{children:"WECHAT"}),fe.jsx("a",{href:"#contact","aria-label":"CLOSE WECHAT QR CODE",children:"CLOSE"})]})]})]})}function KR(){return IR(),UR(),fe.jsxs(fe.Fragment,{children:[fe.jsx(NR,{}),fe.jsx(BR,{}),fe.jsxs("main",{children:[fe.jsx(VR,{}),fe.jsx(HR,{}),fe.jsx(GR,{}),fe.jsx(WR,{}),fe.jsx(YR,{}),fe.jsx($R,{})]}),fe.jsx("footer",{className:"site-footer",children:"MADE ON HEANGEUN"})]})}QS.createRoot(document.getElementById("root")).render(fe.jsx(YS.StrictMode,{children:fe.jsx(KR,{})}));
