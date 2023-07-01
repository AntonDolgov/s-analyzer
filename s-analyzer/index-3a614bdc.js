(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var U,d,se,w,J,ue,B,M={},ae=[],Se=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,K=Array.isArray;function S(e,t){for(var n in t)e[n]=t[n];return e}function fe(e){var t=e.parentNode;t&&t.removeChild(e)}function Ce(e,t,n){var r,i,o,u={};for(o in t)o=="key"?r=t[o]:o=="ref"?i=t[o]:u[o]=t[o];if(arguments.length>2&&(u.children=arguments.length>3?U.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)u[o]===void 0&&(u[o]=e.defaultProps[o]);return D(e,u,r,i,null)}function D(e,t,n,r,i){var o={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:i??++se};return i==null&&d.vnode!=null&&d.vnode(o),o}function I(e){return e.children}function P(e,t){this.props=e,this.context=t}function E(e,t){if(t==null)return e.__?E(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?E(e):null}function de(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return de(e)}}function Q(e){(!e.__d&&(e.__d=!0)&&w.push(e)&&!O.__r++||J!==d.debounceRendering)&&((J=d.debounceRendering)||ue)(O)}function O(){var e,t,n,r,i,o,u,c;for(w.sort(B);e=w.shift();)e.__d&&(t=w.length,r=void 0,i=void 0,u=(o=(n=e).__v).__e,(c=n.__P)&&(r=[],(i=S({},o)).__v=o.__v+1,z(c,o,i,n.__n,c.ownerSVGElement!==void 0,o.__h!=null?[u]:null,r,u??E(o),o.__h),me(r,o),o.__e!=u&&de(o)),w.length>t&&w.sort(B));O.__r=0}function pe(e,t,n,r,i,o,u,c,a,f){var _,h,s,l,p,N,v,m=r&&r.__k||ae,b=m.length;for(n.__k=[],_=0;_<t.length;_++)if((l=n.__k[_]=(l=t[_])==null||typeof l=="boolean"||typeof l=="function"?null:typeof l=="string"||typeof l=="number"||typeof l=="bigint"?D(null,l,null,null,l):K(l)?D(I,{children:l},null,null,null):l.__b>0?D(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):l)!=null){if(l.__=n,l.__b=n.__b+1,(s=m[_])===null||s&&l.key==s.key&&l.type===s.type)m[_]=void 0;else for(h=0;h<b;h++){if((s=m[h])&&l.key==s.key&&l.type===s.type){m[h]=void 0;break}s=null}z(e,l,s=s||M,i,o,u,c,a,f),p=l.__e,(h=l.ref)&&s.ref!=h&&(v||(v=[]),s.ref&&v.push(s.ref,null,l),v.push(h,l.__c||p,l)),p!=null?(N==null&&(N=p),typeof l.type=="function"&&l.__k===s.__k?l.__d=a=he(l,a,e):a=ve(e,l,s,m,p,a),typeof n.type=="function"&&(n.__d=a)):a&&s.__e==a&&a.parentNode!=e&&(a=E(s))}for(n.__e=N,_=b;_--;)m[_]!=null&&(typeof n.type=="function"&&m[_].__e!=null&&m[_].__e==n.__d&&(n.__d=ye(r).nextSibling),be(m[_],m[_]));if(v)for(_=0;_<v.length;_++)ge(v[_],v[++_],v[++_])}function he(e,t,n){for(var r,i=e.__k,o=0;i&&o<i.length;o++)(r=i[o])&&(r.__=e,t=typeof r.type=="function"?he(r,t,n):ve(n,r,r,i,r.__e,t));return t}function ve(e,t,n,r,i,o){var u,c,a;if(t.__d!==void 0)u=t.__d,t.__d=void 0;else if(n==null||i!=o||i.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(i),u=null;else{for(c=o,a=0;(c=c.nextSibling)&&a<r.length;a+=1)if(c==i)break e;e.insertBefore(i,o),u=o}return u!==void 0?u:i.nextSibling}function ye(e){var t,n,r;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(r=ye(n)))return r}return null}function we(e,t,n,r,i){var o;for(o in n)o==="children"||o==="key"||o in t||A(e,o,null,n[o],r);for(o in t)i&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||A(e,o,t[o],n[o],r)}function X(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Se.test(t)?n:n+"px"}function A(e,t,n,r,i){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof r=="string"&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||X(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||X(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?r||e.addEventListener(t,o?Z:Y,o):e.removeEventListener(t,o?Z:Y,o);else if(t!=="dangerouslySetInnerHTML"){if(i)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t!=="rowSpan"&&t!=="colSpan"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t[4]!=="-"?e.removeAttribute(t):e.setAttribute(t,n))}}function Y(e){return this.l[e.type+!1](d.event?d.event(e):e)}function Z(e){return this.l[e.type+!0](d.event?d.event(e):e)}function z(e,t,n,r,i,o,u,c,a){var f,_,h,s,l,p,N,v,m,b,x,C,G,H,L,k=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(a=n.__h,c=t.__e=n.__e,t.__h=null,o=[c]),(f=d.__b)&&f(t);try{e:if(typeof k=="function"){if(v=t.props,m=(f=k.contextType)&&r[f.__c],b=f?m?m.props.value:f.__:r,n.__c?N=(_=t.__c=n.__c).__=_.__E:("prototype"in k&&k.prototype.render?t.__c=_=new k(v,b):(t.__c=_=new P(v,b),_.constructor=k,_.render=Ee),m&&m.sub(_),_.props=v,_.state||(_.state={}),_.context=b,_.__n=r,h=_.__d=!0,_.__h=[],_._sb=[]),_.__s==null&&(_.__s=_.state),k.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=S({},_.__s)),S(_.__s,k.getDerivedStateFromProps(v,_.__s))),s=_.props,l=_.state,_.__v=t,h)k.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(k.getDerivedStateFromProps==null&&v!==s&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(v,b),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(v,_.__s,b)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(_.props=v,_.state=_.__s,_.__d=!1),_.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function($){$&&($.__=t)}),x=0;x<_._sb.length;x++)_.__h.push(_._sb[x]);_._sb=[],_.__h.length&&u.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(v,_.__s,b),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(s,l,p)})}if(_.context=b,_.props=v,_.__P=e,C=d.__r,G=0,"prototype"in k&&k.prototype.render){for(_.state=_.__s,_.__d=!1,C&&C(t),f=_.render(_.props,_.state,_.context),H=0;H<_._sb.length;H++)_.__h.push(_._sb[H]);_._sb=[]}else do _.__d=!1,C&&C(t),f=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++G<25);_.state=_.__s,_.getChildContext!=null&&(r=S(S({},r),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(p=_.getSnapshotBeforeUpdate(s,l)),pe(e,K(L=f!=null&&f.type===I&&f.key==null?f.props.children:f)?L:[L],t,n,r,i,o,u,c,a),_.base=t.__e,t.__h=null,_.__h.length&&u.push(_),N&&(_.__E=_.__=null),_.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=xe(n.__e,t,n,r,i,o,u,a);(f=d.diffed)&&f(t)}catch($){t.__v=null,(a||o!=null)&&(t.__e=c,t.__h=!!a,o[o.indexOf(c)]=null),d.__e($,t,n)}}function me(e,t){d.__c&&d.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(r){r.call(n)})}catch(r){d.__e(r,n.__v)}})}function xe(e,t,n,r,i,o,u,c){var a,f,_,h=n.props,s=t.props,l=t.type,p=0;if(l==="svg"&&(i=!0),o!=null){for(;p<o.length;p++)if((a=o[p])&&"setAttribute"in a==!!l&&(l?a.localName===l:a.nodeType===3)){e=a,o[p]=null;break}}if(e==null){if(l===null)return document.createTextNode(s);e=i?document.createElementNS("http://www.w3.org/2000/svg",l):document.createElement(l,s.is&&s),o=null,c=!1}if(l===null)h===s||c&&e.data===s||(e.data=s);else{if(o=o&&U.call(e.childNodes),f=(h=n.props||M).dangerouslySetInnerHTML,_=s.dangerouslySetInnerHTML,!c){if(o!=null)for(h={},p=0;p<e.attributes.length;p++)h[e.attributes[p].name]=e.attributes[p].value;(_||f)&&(_&&(f&&_.__html==f.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(we(e,s,h,i,c),_)t.__k=[];else if(pe(e,K(p=t.props.children)?p:[p],t,n,r,i&&l!=="foreignObject",o,u,o?o[0]:n.__k&&E(n,0),c),o!=null)for(p=o.length;p--;)o[p]!=null&&fe(o[p]);c||("value"in s&&(p=s.value)!==void 0&&(p!==e.value||l==="progress"&&!p||l==="option"&&p!==h.value)&&A(e,"value",p,h.value,!1),"checked"in s&&(p=s.checked)!==void 0&&p!==e.checked&&A(e,"checked",p,h.checked,!1))}return e}function ge(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(r){d.__e(r,n)}}function be(e,t,n){var r,i;if(d.unmount&&d.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||ge(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(o){d.__e(o,t)}r.base=r.__P=null,e.__c=void 0}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&be(r[i],t,n||typeof e.type!="function");n||e.__e==null||fe(e.__e),e.__=e.__e=e.__d=void 0}function Ee(e,t,n){return this.constructor(e,n)}function He(e,t,n){var r,i,o;d.__&&d.__(e,t),i=(r=typeof n=="function")?null:n&&n.__k||t.__k,o=[],z(t,e=(!r&&n||t).__k=Ce(I,null,[e]),i||M,M,t.ownerSVGElement!==void 0,!r&&n?[n]:i?null:t.firstChild?U.call(t.childNodes):null,o,!r&&n?n:i?i.__e:t.firstChild,r),me(o,e)}U=ae.slice,d={__e:function(e,t,n,r){for(var i,o,u;t=t.__;)if((i=t.__c)&&!i.__)try{if((o=i.constructor)&&o.getDerivedStateFromError!=null&&(i.setState(o.getDerivedStateFromError(e)),u=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),u=i.__d),u)return i.__E=i}catch(c){e=c}throw e}},se=0,P.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=S({},this.state),typeof e=="function"&&(e=e(S({},n),this.props)),e&&S(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),Q(this))},P.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),Q(this))},P.prototype.render=I,w=[],ue=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,B=function(e,t){return e.__v.__b-t.__v.__b},O.__r=0;function ee(e,t){return e.reduce((n,r)=>{const i=typeof t=="function"?t(r):r[t];return n[i]||(n[i]=[]),n[i].push(r),n},{})}const $e=e=>{if(typeof e=="number")return e;const t=e.replace(",",".");return parseFloat(t)};function te(e,t=2){const n=Math.pow(10,t),r=Math.round(e*n)/n;return Number(r.toFixed(t))}function De(e){const[t,n,r]=e.split(".");return new Date(Number(r),Number(n)-1,Number(t))}function Pe(e){if(e<1||e>12)throw new Error("Invalid month number. Month number should be between 1 and 12.");const t=new Date(Date.UTC(2e3,e-1,1));return new Intl.DateTimeFormat("en-US",{month:"long"}).format(t)}const Te=e=>{if(!e)return{};const t=ee(e.filter(({Summa:n})=>n!=null),n=>Pe(De(n.Maksupäivä).getMonth()+1));return Object.entries(t).reduce((n,[r,i])=>{const o=ee(i,"Saajan nimi"),u=Object.entries(o).reduce((a,[f,_])=>{const h=_.reduce((s,l)=>{const p=l.Summa;return p?s+$e(p):s},0);return h===0?a:{...a,[f]:te(h)}},{}),c=te(Object.values(u).reduce((a,f)=>f>0?a:a+f));return{...n,[r]:{tableInfo:u,total:c}}},{})};var V,y,j,ne,W=0,ke=[],T=[],_e=d.__b,oe=d.__r,re=d.diffed,ie=d.__c,le=d.unmount;function Fe(e,t){d.__h&&d.__h(y,e,W||t),W=0;var n=y.__H||(y.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:T}),n.__[e]}function q(e){return W=1,Me(Ne,e)}function Me(e,t,n){var r=Fe(V++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Ne(void 0,t),function(c){var a=r.__N?r.__N[0]:r.__[0],f=r.t(a,c);a!==f&&(r.__N=[f,r.__[1]],r.__c.setState({}))}],r.__c=y,!y.u)){var i=function(c,a,f){if(!r.__c.__H)return!0;var _=r.__c.__H.__.filter(function(s){return s.__c});if(_.every(function(s){return!s.__N}))return!o||o.call(this,c,a,f);var h=!1;return _.forEach(function(s){if(s.__N){var l=s.__[0];s.__=s.__N,s.__N=void 0,l!==s.__[0]&&(h=!0)}}),!(!h&&r.__c.props===c)&&(!o||o.call(this,c,a,f))};y.u=!0;var o=y.shouldComponentUpdate,u=y.componentWillUpdate;y.componentWillUpdate=function(c,a,f){if(this.__e){var _=o;o=void 0,i(c,a,f),o=_}u&&u.call(this,c,a,f)},y.shouldComponentUpdate=i}return r.__N||r.__}function Oe(){for(var e;e=ke.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(F),e.__H.__h.forEach(R),e.__H.__h=[]}catch(t){e.__H.__h=[],d.__e(t,e.__v)}}d.__b=function(e){y=null,_e&&_e(e)},d.__r=function(e){oe&&oe(e),V=0;var t=(y=e.__c).__H;t&&(j===y?(t.__h=[],y.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=T,n.__N=n.i=void 0})):(t.__h.forEach(F),t.__h.forEach(R),t.__h=[],V=0)),j=y},d.diffed=function(e){re&&re(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(ke.push(t)!==1&&ne===d.requestAnimationFrame||((ne=d.requestAnimationFrame)||Ae)(Oe)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==T&&(n.__=n.__V),n.i=void 0,n.__V=T})),j=y=null},d.__c=function(e,t){t.some(function(n){try{n.__h.forEach(F),n.__h=n.__h.filter(function(r){return!r.__||R(r)})}catch(r){t.some(function(i){i.__h&&(i.__h=[])}),t=[],d.__e(r,n.__v)}}),ie&&ie(e,t)},d.unmount=function(e){le&&le(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(r){try{F(r)}catch(i){t=i}}),n.__H=void 0,t&&d.__e(t,n.__v))};var ce=typeof requestAnimationFrame=="function";function Ae(e){var t,n=function(){clearTimeout(r),ce&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,100);ce&&(t=requestAnimationFrame(n))}function F(e){var t=y,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),y=t}function R(e){var t=y;e.__c=e.__(),y=t}function Ne(e,t){return typeof t=="function"?t(e):t}var Ue=0;function g(e,t,n,r,i,o){var u,c,a={};for(c in t)c=="ref"?u=t[c]:a[c]=t[c];var f={type:e,props:a,key:n,ref:u,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Ue,__source:i,__self:o};if(typeof e=="function"&&(u=e.defaultProps))for(c in u)a[c]===void 0&&(a[c]=u[c]);return d.vnode&&d.vnode(f),f}const Ie=({data:e})=>{const[t,n]=q(null),[r,i]=q("asc"),o=c=>Object.entries(c).sort((a,f)=>{const[_,h]=a,[s,l]=f;return t==="value"?r==="asc"?h-l:l-h:r==="asc"?_.localeCompare(s):s.localeCompare(_)}),u=c=>{t===c?i(r==="asc"?"desc":"asc"):(n(c),i("asc"))};return Object.entries(e).map(([c,{tableInfo:a,total:f}])=>g("div",{className:"table-box",children:g("table",{className:"table",children:[g("thead",{children:g("tr",{children:[g("th",{onClick:()=>u("key"),children:["Получатель (",c,")"]}),g("th",{onClick:()=>u("value"),children:"Сумма"})]})}),g("tbody",{children:o(a).map(([_,h])=>g("tr",{children:[g("td",{children:_}),g("td",{children:[h," евро"]})]},_))}),g("tfoot",{children:g("tr",{children:[g("td",{children:"Total:"}),g("td",{children:f})]})})]})}))},Le=()=>{const[e,t]=q(null);return{jsonData:e,handleFileInputChange:async r=>{var u;if(!(r.target instanceof HTMLInputElement)||!r.target.files)return;const i=(u=r.target)==null?void 0:u.files[0],o=new FileReader;o.onload=function(c){var f;const a=(f=c.target)==null?void 0:f.result;if(typeof a=="string"){const[_,...h]=a.split(`
`),s=_.split(";"),l=h.reduce((p,N)=>{const v=N.split(";"),m=s.reduce((b,x,C)=>({...b,[x]:v[C]}),{});return[...p,m]},[]);t(l)}},o.readAsText(i)}}};function je(){const{jsonData:e,handleFileInputChange:t}=Le(),n=Te(e);return g("div",{className:"table-info",children:!e||!n?g("input",{type:"file",accept:".csv",onChange:t}):g(Ie,{data:n})})}He(g(je,{}),document.getElementById("app"));
