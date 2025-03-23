import{r as u,R as ue}from"./react-CaWBk0BP.js";/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(this,arguments)}var S;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(S||(S={}));const K="popstate";function ce(e){e===void 0&&(e={});function t(a,l){let{pathname:i="/",search:s="",hash:o=""}=U(a.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),k("",{pathname:i,search:s,hash:o},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function r(a,l){let i=a.document.querySelector("base"),s="";if(i&&i.getAttribute("href")){let o=a.location.href,c=o.indexOf("#");s=c===-1?o:o.slice(0,c)}return s+"#"+(typeof l=="string"?l:T(l))}function n(a,l){A(a.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return fe(t,r,n,e)}function v(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function A(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function he(){return Math.random().toString(36).substr(2,8)}function q(e,t){return{usr:e.state,key:e.key,idx:t}}function k(e,t,r,n){return r===void 0&&(r=null),I({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?U(t):t,{state:r,key:t&&t.key||n||he()})}function T(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&r!=="?"&&(t+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(t+=n.charAt(0)==="#"?n:"#"+n),t}function U(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function fe(e,t,r,n){n===void 0&&(n={});let{window:a=document.defaultView,v5Compat:l=!1}=n,i=a.history,s=S.Pop,o=null,c=f();c==null&&(c=0,i.replaceState(I({},i.state,{idx:c}),""));function f(){return(i.state||{idx:null}).idx}function h(){s=S.Pop;let d=f(),x=d==null?null:d-c;c=d,o&&o({action:s,location:m.location,delta:x})}function p(d,x){s=S.Push;let E=k(m.location,d,x);r&&r(E,d),c=f()+1;let C=q(E,c),P=m.createHref(E);try{i.pushState(C,"",P)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;a.location.assign(P)}l&&o&&o({action:s,location:m.location,delta:1})}function y(d,x){s=S.Replace;let E=k(m.location,d,x);r&&r(E,d),c=f();let C=q(E,c),P=m.createHref(E);i.replaceState(C,"",P),l&&o&&o({action:s,location:m.location,delta:0})}function g(d){let x=a.location.origin!=="null"?a.location.origin:a.location.href,E=typeof d=="string"?d:T(d);return E=E.replace(/ $/,"%20"),v(x,"No window.location.(origin|href) available to create URL for href: "+E),new URL(E,x)}let m={get action(){return s},get location(){return e(a,i)},listen(d){if(o)throw new Error("A history only accepts one active listener");return a.addEventListener(K,h),o=d,()=>{a.removeEventListener(K,h),o=null}},createHref(d){return t(a,d)},createURL:g,encodeLocation(d){let x=g(d);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:p,replace:y,go(d){return i.go(d)}};return m}var G;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(G||(G={}));function de(e,t,r){return r===void 0&&(r="/"),pe(e,t,r,!1)}function pe(e,t,r,n){let a=typeof t=="string"?U(t):t,l=J(a.pathname||"/",r);if(l==null)return null;let i=te(e);me(i);let s=null;for(let o=0;s==null&&o<i.length;++o){let c=we(l);s=Se(i[o],c,n)}return s}function te(e,t,r,n){t===void 0&&(t=[]),r===void 0&&(r=[]),n===void 0&&(n="");let a=(l,i,s)=>{let o={relativePath:s===void 0?l.path||"":s,caseSensitive:l.caseSensitive===!0,childrenIndex:i,route:l};o.relativePath.startsWith("/")&&(v(o.relativePath.startsWith(n),'Absolute route path "'+o.relativePath+'" nested under path '+('"'+n+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),o.relativePath=o.relativePath.slice(n.length));let c=b([n,o.relativePath]),f=r.concat(o);l.children&&l.children.length>0&&(v(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+c+'".')),te(l.children,t,f,c)),!(l.path==null&&!l.index)&&t.push({path:c,score:Pe(c,l.index),routesMeta:f})};return e.forEach((l,i)=>{var s;if(l.path===""||!((s=l.path)!=null&&s.includes("?")))a(l,i);else for(let o of re(l.path))a(l,i,o)}),t}function re(e){let t=e.split("/");if(t.length===0)return[];let[r,...n]=t,a=r.endsWith("?"),l=r.replace(/\?$/,"");if(n.length===0)return a?[l,""]:[l];let i=re(n.join("/")),s=[];return s.push(...i.map(o=>o===""?l:[l,o].join("/"))),a&&s.push(...i),s.map(o=>e.startsWith("/")&&o===""?"/":o)}function me(e){e.sort((t,r)=>t.score!==r.score?r.score-t.score:Re(t.routesMeta.map(n=>n.childrenIndex),r.routesMeta.map(n=>n.childrenIndex)))}const ve=/^:[\w-]+$/,ge=3,ye=2,xe=1,Ce=10,Ee=-2,X=e=>e==="*";function Pe(e,t){let r=e.split("/"),n=r.length;return r.some(X)&&(n+=Ee),t&&(n+=ye),r.filter(a=>!X(a)).reduce((a,l)=>a+(ve.test(l)?ge:l===""?xe:Ce),n)}function Re(e,t){return e.length===t.length&&e.slice(0,-1).every((n,a)=>n===t[a])?e[e.length-1]-t[t.length-1]:0}function Se(e,t,r){let{routesMeta:n}=e,a={},l="/",i=[];for(let s=0;s<n.length;++s){let o=n[s],c=s===n.length-1,f=l==="/"?t:t.slice(l.length)||"/",h=Q({path:o.relativePath,caseSensitive:o.caseSensitive,end:c},f),p=o.route;if(!h&&c&&r&&!n[n.length-1].route.index&&(h=Q({path:o.relativePath,caseSensitive:o.caseSensitive,end:!1},f)),!h)return null;Object.assign(a,h.params),i.push({params:a,pathname:b([l,h.pathname]),pathnameBase:Ne(b([l,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(l=b([l,h.pathnameBase]))}return i}function Q(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=be(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let l=a[0],i=l.replace(/(.)\/+$/,"$1"),s=a.slice(1);return{params:n.reduce((c,f,h)=>{let{paramName:p,isOptional:y}=f;if(p==="*"){let m=s[h]||"";i=l.slice(0,l.length-m.length).replace(/(.)\/+$/,"$1")}const g=s[h];return y&&!g?c[p]=void 0:c[p]=(g||"").replace(/%2F/g,"/"),c},{}),pathname:l,pathnameBase:i,pattern:e}}function be(e,t,r){t===void 0&&(t=!1),r===void 0&&(r=!0),A(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,s,o)=>(n.push({paramName:s,isOptional:o!=null}),o?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(n.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),n]}function we(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return A(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function J(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&n!=="/"?null:e.slice(r)||"/"}function Ue(e,t){t===void 0&&(t="/");let{pathname:r,search:n="",hash:a=""}=typeof e=="string"?U(e):e;return{pathname:r?r.startsWith("/")?r:Le(r,t):t,search:Ie(n),hash:Be(a)}}function Le(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?r.length>1&&r.pop():a!=="."&&r.push(a)}),r.length>1?r.join("/"):"/"}function $(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Oe(e){return e.filter((t,r)=>r===0||t.route.path&&t.route.path.length>0)}function V(e,t){let r=Oe(e);return t?r.map((n,a)=>a===r.length-1?n.pathname:n.pathnameBase):r.map(n=>n.pathnameBase)}function z(e,t,r,n){n===void 0&&(n=!1);let a;typeof e=="string"?a=U(e):(a=I({},e),v(!a.pathname||!a.pathname.includes("?"),$("?","pathname","search",a)),v(!a.pathname||!a.pathname.includes("#"),$("#","pathname","hash",a)),v(!a.search||!a.search.includes("#"),$("#","search","hash",a)));let l=e===""||a.pathname==="",i=l?"/":a.pathname,s;if(i==null)s=r;else{let h=t.length-1;if(!n&&i.startsWith("..")){let p=i.split("/");for(;p[0]==="..";)p.shift(),h-=1;a.pathname=p.join("/")}s=h>=0?t[h]:"/"}let o=Ue(a,s),c=i&&i!=="/"&&i.endsWith("/"),f=(l||i===".")&&r.endsWith("/");return!o.pathname.endsWith("/")&&(c||f)&&(o.pathname+="/"),o}const b=e=>e.join("/").replace(/\/\/+/g,"/"),Ne=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ie=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Be=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Te(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const ne=["post","put","patch","delete"];new Set(ne);const je=["get",...ne];new Set(je);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B.apply(this,arguments)}const D=u.createContext(null),Fe=u.createContext(null),w=u.createContext(null),F=u.createContext(null),R=u.createContext({outlet:null,matches:[],isDataRoute:!1}),ae=u.createContext(null);function $e(e,t){let{relative:r}=t===void 0?{}:t;O()||v(!1);let{basename:n,navigator:a}=u.useContext(w),{hash:l,pathname:i,search:s}=ie(e,{relative:r}),o=i;return n!=="/"&&(o=i==="/"?n:b([n,i])),a.createHref({pathname:o,search:s,hash:l})}function O(){return u.useContext(F)!=null}function N(){return O()||v(!1),u.useContext(F).location}function le(e){u.useContext(w).static||u.useLayoutEffect(e)}function H(){let{isDataRoute:e}=u.useContext(R);return e?Ge():ke()}function ke(){O()||v(!1);let e=u.useContext(D),{basename:t,future:r,navigator:n}=u.useContext(w),{matches:a}=u.useContext(R),{pathname:l}=N(),i=JSON.stringify(V(a,r.v7_relativeSplatPath)),s=u.useRef(!1);return le(()=>{s.current=!0}),u.useCallback(function(c,f){if(f===void 0&&(f={}),!s.current)return;if(typeof c=="number"){n.go(c);return}let h=z(c,JSON.parse(i),l,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:b([t,h.pathname])),(f.replace?n.replace:n.push)(h,f.state,f)},[t,n,i,l,e])}function ut(){let{matches:e}=u.useContext(R),t=e[e.length-1];return t?t.params:{}}function ie(e,t){let{relative:r}=t===void 0?{}:t,{future:n}=u.useContext(w),{matches:a}=u.useContext(R),{pathname:l}=N(),i=JSON.stringify(V(a,n.v7_relativeSplatPath));return u.useMemo(()=>z(e,JSON.parse(i),l,r==="path"),[e,i,l,r])}function We(e,t){return _e(e,t)}function _e(e,t,r,n){O()||v(!1);let{navigator:a}=u.useContext(w),{matches:l}=u.useContext(R),i=l[l.length-1],s=i?i.params:{};i&&i.pathname;let o=i?i.pathnameBase:"/";i&&i.route;let c=N(),f;if(t){var h;let d=typeof t=="string"?U(t):t;o==="/"||(h=d.pathname)!=null&&h.startsWith(o)||v(!1),f=d}else f=c;let p=f.pathname||"/",y=p;if(o!=="/"){let d=o.replace(/^\//,"").split("/");y="/"+p.replace(/^\//,"").split("/").slice(d.length).join("/")}let g=de(e,{pathname:y}),m=ze(g&&g.map(d=>Object.assign({},d,{params:Object.assign({},s,d.params),pathname:b([o,a.encodeLocation?a.encodeLocation(d.pathname).pathname:d.pathname]),pathnameBase:d.pathnameBase==="/"?o:b([o,a.encodeLocation?a.encodeLocation(d.pathnameBase).pathname:d.pathnameBase])})),l,r,n);return t&&m?u.createElement(F.Provider,{value:{location:B({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:S.Pop}},m):m}function Me(){let e=qe(),t=Te(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),r?u.createElement("pre",{style:a},r):null,null)}const Ae=u.createElement(Me,null);class Je extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location||r.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:r.error,location:r.location,revalidation:t.revalidation||r.revalidation}}componentDidCatch(t,r){console.error("React Router caught the following error during render",t,r)}render(){return this.state.error!==void 0?u.createElement(R.Provider,{value:this.props.routeContext},u.createElement(ae.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ve(e){let{routeContext:t,match:r,children:n}=e,a=u.useContext(D);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),u.createElement(R.Provider,{value:t},n)}function ze(e,t,r,n){var a;if(t===void 0&&(t=[]),r===void 0&&(r=null),n===void 0&&(n=null),e==null){var l;if(!r)return null;if(r.errors)e=r.matches;else if((l=n)!=null&&l.v7_partialHydration&&t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,s=(a=r)==null?void 0:a.errors;if(s!=null){let f=i.findIndex(h=>h.route.id&&(s==null?void 0:s[h.route.id])!==void 0);f>=0||v(!1),i=i.slice(0,Math.min(i.length,f+1))}let o=!1,c=-1;if(r&&n&&n.v7_partialHydration)for(let f=0;f<i.length;f++){let h=i[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(c=f),h.route.id){let{loaderData:p,errors:y}=r,g=h.route.loader&&p[h.route.id]===void 0&&(!y||y[h.route.id]===void 0);if(h.route.lazy||g){o=!0,c>=0?i=i.slice(0,c+1):i=[i[0]];break}}}return i.reduceRight((f,h,p)=>{let y,g=!1,m=null,d=null;r&&(y=s&&h.route.id?s[h.route.id]:void 0,m=h.route.errorElement||Ae,o&&(c<0&&p===0?(g=!0,d=null):c===p&&(g=!0,d=h.route.hydrateFallbackElement||null)));let x=t.concat(i.slice(0,p+1)),E=()=>{let C;return y?C=m:g?C=d:h.route.Component?C=u.createElement(h.route.Component,null):h.route.element?C=h.route.element:C=f,u.createElement(Ve,{match:h,routeContext:{outlet:f,matches:x,isDataRoute:r!=null},children:C})};return r&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?u.createElement(Je,{location:r.location,revalidation:r.revalidation,component:m,error:y,children:E(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):E()},null)}var oe=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(oe||{}),j=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(j||{});function De(e){let t=u.useContext(D);return t||v(!1),t}function He(e){let t=u.useContext(Fe);return t||v(!1),t}function Ke(e){let t=u.useContext(R);return t||v(!1),t}function se(e){let t=Ke(),r=t.matches[t.matches.length-1];return r.route.id||v(!1),r.route.id}function qe(){var e;let t=u.useContext(ae),r=He(j.UseRouteError),n=se(j.UseRouteError);return t!==void 0?t:(e=r.errors)==null?void 0:e[n]}function Ge(){let{router:e}=De(oe.UseNavigateStable),t=se(j.UseNavigateStable),r=u.useRef(!1);return le(()=>{r.current=!0}),u.useCallback(function(a,l){l===void 0&&(l={}),r.current&&(typeof a=="number"?e.navigate(a):e.navigate(a,B({fromRouteId:t},l)))},[e,t])}function ct(e){let{to:t,replace:r,state:n,relative:a}=e;O()||v(!1);let{future:l,static:i}=u.useContext(w),{matches:s}=u.useContext(R),{pathname:o}=N(),c=H(),f=z(t,V(s,l.v7_relativeSplatPath),o,a==="path"),h=JSON.stringify(f);return u.useEffect(()=>c(JSON.parse(h),{replace:r,state:n,relative:a}),[c,h,a,r,n]),null}function Xe(e){v(!1)}function Qe(e){let{basename:t="/",children:r=null,location:n,navigationType:a=S.Pop,navigator:l,static:i=!1,future:s}=e;O()&&v(!1);let o=t.replace(/^\/*/,"/"),c=u.useMemo(()=>({basename:o,navigator:l,static:i,future:B({v7_relativeSplatPath:!1},s)}),[o,s,l,i]);typeof n=="string"&&(n=U(n));let{pathname:f="/",search:h="",hash:p="",state:y=null,key:g="default"}=n,m=u.useMemo(()=>{let d=J(f,o);return d==null?null:{location:{pathname:d,search:h,hash:p,state:y,key:g},navigationType:a}},[o,f,h,p,y,g,a]);return m==null?null:u.createElement(w.Provider,{value:c},u.createElement(F.Provider,{children:r,value:m}))}function ht(e){let{children:t,location:r}=e;return We(W(t),r)}new Promise(()=>{});function W(e,t){t===void 0&&(t=[]);let r=[];return u.Children.forEach(e,(n,a)=>{if(!u.isValidElement(n))return;let l=[...t,a];if(n.type===u.Fragment){r.push.apply(r,W(n.props.children,l));return}n.type!==Xe&&v(!1),!n.props.index||!n.props.children||v(!1);let i={id:n.props.id||l.join("-"),caseSensitive:n.props.caseSensitive,element:n.props.element,Component:n.props.Component,index:n.props.index,path:n.props.path,loader:n.props.loader,action:n.props.action,errorElement:n.props.errorElement,ErrorBoundary:n.props.ErrorBoundary,hasErrorBoundary:n.props.ErrorBoundary!=null||n.props.errorElement!=null,shouldRevalidate:n.props.shouldRevalidate,handle:n.props.handle,lazy:n.props.lazy};n.props.children&&(i.children=W(n.props.children,l)),r.push(i)}),r}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_.apply(this,arguments)}function Ye(e,t){if(e==null)return{};var r={},n=Object.keys(e),a,l;for(l=0;l<n.length;l++)a=n[l],!(t.indexOf(a)>=0)&&(r[a]=e[a]);return r}function Ze(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function et(e,t){return e.button===0&&(!t||t==="_self")&&!Ze(e)}function M(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((t,r)=>{let n=e[r];return t.concat(Array.isArray(n)?n.map(a=>[r,a]):[[r,n]])},[]))}function tt(e,t){let r=M(e);return t&&t.forEach((n,a)=>{r.has(a)||t.getAll(a).forEach(l=>{r.append(a,l)})}),r}const rt=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nt="6";try{window.__reactRouterVersion=nt}catch{}const at="startTransition",Y=ue[at];function ft(e){let{basename:t,children:r,future:n,window:a}=e,l=u.useRef();l.current==null&&(l.current=ce({window:a,v5Compat:!0}));let i=l.current,[s,o]=u.useState({action:i.action,location:i.location}),{v7_startTransition:c}=n||{},f=u.useCallback(h=>{c&&Y?Y(()=>o(h)):o(h)},[o,c]);return u.useLayoutEffect(()=>i.listen(f),[i,f]),u.createElement(Qe,{basename:t,children:r,location:s.location,navigationType:s.action,navigator:i,future:n})}const lt=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",it=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dt=u.forwardRef(function(t,r){let{onClick:n,relative:a,reloadDocument:l,replace:i,state:s,target:o,to:c,preventScrollReset:f,viewTransition:h}=t,p=Ye(t,rt),{basename:y}=u.useContext(w),g,m=!1;if(typeof c=="string"&&it.test(c)&&(g=c,lt))try{let C=new URL(window.location.href),P=c.startsWith("//")?new URL(C.protocol+c):new URL(c),L=J(P.pathname,y);P.origin===C.origin&&L!=null?c=L+P.search+P.hash:m=!0}catch{}let d=$e(c,{relative:a}),x=ot(c,{replace:i,state:s,target:o,preventScrollReset:f,relative:a,viewTransition:h});function E(C){n&&n(C),C.defaultPrevented||x(C)}return u.createElement("a",_({},p,{href:g||d,onClick:m||l?n:E,ref:r,target:o}))});var Z;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Z||(Z={}));var ee;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(ee||(ee={}));function ot(e,t){let{target:r,replace:n,state:a,preventScrollReset:l,relative:i,viewTransition:s}=t===void 0?{}:t,o=H(),c=N(),f=ie(e,{relative:i});return u.useCallback(h=>{if(et(h,r)){h.preventDefault();let p=n!==void 0?n:T(c)===T(f);o(e,{replace:p,state:a,preventScrollReset:l,relative:i,viewTransition:s})}},[c,o,f,n,a,r,e,l,i,s])}function pt(e){let t=u.useRef(M(e)),r=u.useRef(!1),n=N(),a=u.useMemo(()=>tt(n.search,r.current?null:t.current),[n.search]),l=H(),i=u.useCallback((s,o)=>{const c=M(typeof s=="function"?s(a):s);r.current=!0,l("?"+c,o)},[l,a]);return[a,i]}export{ft as H,dt as L,ct as N,ht as R,H as a,pt as b,ut as c,Xe as d,N as u};
