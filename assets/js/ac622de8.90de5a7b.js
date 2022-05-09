"use strict";(self.webpackChunkfinclip_ops_docs=self.webpackChunkfinclip_ops_docs||[]).push([[850],{3905:function(e,r,n){n.d(r,{Zo:function(){return l},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=t.createContext({}),u=function(e){var r=t.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(p.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),f=u(n),m=o,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return n?t.createElement(d,c(c({ref:r},l),{},{components:n})):t.createElement(d,c({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=f;var a={};for(var p in r)hasOwnProperty.call(r,p)&&(a[p]=r[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1508:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var t=n(7462),o=n(3366),i=(n(7294),n(3905)),c=["components"],a={id:"performance",title:"\u6027\u80fd\u6307\u6807",author:"xulishan@finogeeks.com"},p=void 0,u={unversionedId:"ops/performance",id:"ops/performance",isDocsHomePage:!1,title:"\u6027\u80fd\u6307\u6807",description:"&emsp;FinClip\u540e\u7aef\u670d\u52a1\u4e3b\u8981\u91c7\u7528Golang\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\uff0c\u501f\u52a9Golang\u8bed\u8a00\u7a0b\u5e8f\u7279\u6027\uff0cFinClip\u540e\u7aef\u670d\u52a1\u5b9e\u73b0\u4e86\u9ad8\u6027\u80fd\u3001 \u9ad8\u5e76\u53d1\u548c\u8d44\u6e90\u8981\u6c42\u4f4e\u7b49\u4f18\u70b9\u3002\u4ee5\u4e0b\u662f\u5728 14 \u53f0 16\u683832G \u670d\u52a1\u5668\u4e0b\u7684\u538b\u6d4b\u6570\u636e\uff0c\u6392\u9664\u7f51\u7edc\u635f\u8017\u548c\u57fa\u7840\u8bbe\u65bd\u5f71\u54cd\uff0c\u6211 \u4eec\u652f\u6301\u66f4\u5c11\u7684\u8d44\u6e90\u8fd0\u884c\u3002",source:"@site/docs/ops/08-performance.md",sourceDirName:"ops",slug:"/ops/performance",permalink:"/docs/ops/performance",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"performance",title:"\u6027\u80fd\u6307\u6807",author:"xulishan@finogeeks.com"},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u5168\u6027",permalink:"/docs/ops/security"}},l=[],s={toc:l};function f(e){var r=e.components,a=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,t.Z)({},s,a,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u2003","FinClip\u540e\u7aef\u670d\u52a1\u4e3b\u8981\u91c7\u7528Golang\u7f16\u7a0b\u8bed\u8a00\u7f16\u5199\uff0c\u501f\u52a9Golang\u8bed\u8a00\u7a0b\u5e8f\u7279\u6027\uff0cFinClip\u540e\u7aef\u670d\u52a1\u5b9e\u73b0\u4e86\u9ad8\u6027\u80fd\u3001 \u9ad8\u5e76\u53d1\u548c\u8d44\u6e90\u8981\u6c42\u4f4e\u7b49\u4f18\u70b9\u3002\u4ee5\u4e0b\u662f\u5728 14 \u53f0 16\u683832G \u670d\u52a1\u5668\u4e0b\u7684\u538b\u6d4b\u6570\u636e\uff0c\u6392\u9664\u7f51\u7edc\u635f\u8017\u548c\u57fa\u7840\u8bbe\u65bd\u5f71\u54cd\uff0c\u6211 \u4eec\u652f\u6301\u66f4\u5c11\u7684\u8d44\u6e90\u8fd0\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"qps",src:n(8553).Z})))}f.isMDXComponent=!0},8553:function(e,r,n){r.Z=n.p+"assets/images/qps-5d39b060f00c1794e64d4e92817b63f6.png"}}]);