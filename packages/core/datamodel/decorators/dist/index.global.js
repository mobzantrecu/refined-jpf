(()=>{var I=Object.create;var h=Object.defineProperty;var j=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var v=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var l=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(o,n)=>(typeof require<"u"?require:o)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw new Error('Dynamic require of "'+e+'" is not supported')});var P=(e,o,n,r)=>{if(o&&typeof o=="object"||typeof o=="function")for(let d of N(o))!D.call(e,d)&&d!==n&&h(e,d,{get:()=>o[d],enumerable:!(r=j(o,d))||r.enumerable});return e};var k=(e,o,n)=>(n=e!=null?I(v(e)):{},P(o||!e||!e.__esModule?h(n,"default",{value:e,enumerable:!0}):n,e));var Z=l("reflect-metadata"),c=Symbol("dataIndex"),C="dataIndex";function _(e){return Reflect.metadata(c,e)}var te=l("reflect-metadata"),s=k(l("react")),T=l("@refinedev/core"),u=Symbol("JoinColumn"),x="render";function L(e,o,n,r){let d=r?B:J,t=a=>{let i=!!a[o],R=!!a.length&&!i?a:a[o];return s.default.createElement(d,{resource:e,id:R,fieldToShow:n})};return Reflect.metadata(u,t)}function B({resource:e,id:o,fieldToShow:n}){let{data:r,isLoading:d}=(0,T.useMany)({resource:e,ids:o}),t=r==null?void 0:r.data,a=t==null?void 0:t.map(i=>i[n]);return d?s.default.createElement(s.default.Fragment,null,"loading..."):s.default.createElement(s.default.Fragment,null,a==null?void 0:a.join(", "))}function J({resource:e,id:o,fieldToShow:n}){let{data:r,isLoading:d}=(0,T.useOne)({resource:e,id:o}),t=r==null?void 0:r.data;return d?s.default.createElement(s.default.Fragment,null,"loading..."):s.default.createElement(s.default.Fragment,null,t[n])}var de=l("reflect-metadata"),y=Symbol("key"),M="key";function V(e){return Reflect.metadata(y,e)}var le=l("reflect-metadata"),m=Symbol("renderTag"),g="renderTag";function G(e){return Reflect.metadata(m,e)}var ce=l("reflect-metadata"),w=Symbol("renderCell");function U(e){return Reflect.metadata(w,e)}var me=l("reflect-metadata"),p=Symbol("title"),b="title";function H(e){return Reflect.metadata(p,e)}var fe=l("reflect-metadata");var K=l("antd");var E=l("@refinedev/antd"),O=(e,o)=>{var r,d,t,a;let n=(d=(r=e.record)==null?void 0:r.metadata)==null?void 0:d.renderTag;return React.createElement("div",{key:e.record.key},React.createElement("div",{style:{backgroundColor:"red"}},React.createElement(E.TextField,{value:`${e.index} `+(((a=(t=e.record)==null?void 0:t.metadata)==null?void 0:a.title)&&e.record.metadata.title.toString())})),React.createElement("br",null),React.createElement(n,null,(e.value&&e.value.toString())??null))};function W(e={showComponent:O}){return function(o){let n=new o,r=Reflect.ownKeys(n),d={};for(let t of r)d[t]={};for(let t of r){let a;Reflect.hasMetadata(u,n,t)&&(a=Reflect.getMetadata(u,n,t));let i=d[t];i[x]=a}for(let t of r){let a;Reflect.hasMetadata(c,n,t)?a=Reflect.getMetadata(c,n,t):(Reflect.defineMetadata(c,t,n,t),a=t.toString());let i=d[t];i[C]=a}for(let t of r){let a;Reflect.hasMetadata(y,n,t)?a=Reflect.getMetadata(y,n,t):(Reflect.defineMetadata(y,t,n,t),a=t.toString());let i=d[t];i[M]=a}for(let t of r){let a=Q(n,t),i=d[t];i[b]=a}for(let t of r){let a=K.Typography.Paragraph;Reflect.hasMetadata(m,n,t)?a=Reflect.getMetadata(m,n,t):Reflect.defineMetadata(m,a,n,t);let i=d[t];i[g]=a}return Reflect.defineMetadata("AntdTable:columns",d,o),Reflect.defineMetadata("Show:component",{component:e.showComponent},o),o}}function S(e,o){return Object.assign({},Reflect.getMetadata(e,o))}function X(e){return Object.values(S("AntdTable:columns",e))}function A(e){return S("AntdTable:columns",e)}function $(e){return Object.values(e)}function q(e,o){let n={},r=A(e),d=z(e,o),t=Reflect.ownKeys(r);for(let[a,i]of t.entries()){let f={value:d[i],metadata:Object.assign({},{renderTag:K.Typography.Paragraph},i in r?r[i]:{})},F=S("Show:component",e).component;f.render=()=>F({value:d[i],record:f,index:a}),n[i]=f}return n}function z(e,o){let n=new e;return Object.assign(n,o)}function Q(e,o){let n;return Reflect.hasMetadata(p,e,o)?n=Reflect.getMetadata(p,e,o):(Reflect.defineMetadata(p,o,e,o),n=o.toString()),n}})();
//# sourceMappingURL=index.global.js.map