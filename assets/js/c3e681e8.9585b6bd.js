"use strict";(self.webpackChunkfinclip_ops_docs=self.webpackChunkfinclip_ops_docs||[]).push([[782],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return N}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=r.createContext({}),o=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=o(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=o(n),N=a,s=u["".concat(d,".").concat(N)]||u[N]||k[N]||l;return n?r.createElement(s,i(i({ref:e},m),{},{components:n})):r.createElement(s,i({ref:e},m))}));function N(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=u;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5468:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return o},toc:function(){return m},default:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),i=["components"],p={title:"\u6570\u636e\u7f13\u5b58",author:"xulishan@finogeeks.com"},d="\u6570\u636e\u7f13\u5b58",o={unversionedId:"infrastructure/redis",id:"infrastructure/redis",isDocsHomePage:!1,title:"\u6570\u636e\u7f13\u5b58",description:"FinClip\u91c7\u7528Redis\u5b9e\u73b0\u6570\u636e\u7f13\u5b58\u529f\u80fd\uff0cRedis \u662f\u4e00\u79cd\u5f00\u6e90(BSD \u8bb8\u53ef)\u3001\u5185\u5b58\u4e2d\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u7684\u5f00\u6e90\u8f6f\u4ef6\uff0c\u901a\u5e38 \u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4ee3\u7406\u3002 Redis \u63d0\u4f9b\u4e86\u8bf8\u5982\u5b57\u7b26\u4e32\u3001\u6563\u5217\u3001\u5217\u8868\u3001\u96c6\u5408\u3001\u5e26\u8303\u56f4\u67e5\u8be2\u7684\u6392\u5e8f\u96c6\u5408\u3001\u4f4d\u56fe\u3001 \u8d85\u7ea7\u65e5\u5fd7\u3001\u5730\u7406\u7a7a\u95f4\u7d22\u5f15\u548c\u6d41\u7b49\u6570\u636e\u7ed3\u6784\u3002 Redis \u5185\u7f6e\u590d\u5236\u3001Lua \u811a\u672c\u3001LRU \u9a71\u9010\u3001\u4e8b\u52a1\u548c\u4e0d\u540c\u7ea7\u522b\u7684\u78c1\u76d8\u6301\u4e45 \u5316\uff0c\u5e76\u901a\u8fc7 Redis Sentinel \u548c\u81ea\u52a8\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\uff0c\u5728\u5b9e\u9645\u90e8\u7f72\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u5ba2\u6237\u91c7\u7528Redis\u7684\u96c6\u7fa4\u6a21\u5f0f\uff0c\u4ee5\u5b9e\u73b0\u9ad8 \u53ef\u7528\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002",source:"@site/docs/infrastructure/02-redis.md",sourceDirName:"infrastructure",slug:"/infrastructure/redis",permalink:"/docs/infrastructure/redis",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\u6570\u636e\u7f13\u5b58",author:"xulishan@finogeeks.com"},sidebar:"tutorialSidebar",previous:{title:"\u6982\u8ff0",permalink:"/docs/infrastructure/intro"},next:{title:"\u670d\u52a1\u6cbb\u7406",permalink:"/docs/infrastructure/consul"}},m=[{value:"\u90e8\u7f72\u67b6\u6784",id:"\u90e8\u7f72\u67b6\u6784",children:[{value:"\u670d\u52a1\u914d\u7f6e",id:"\u670d\u52a1\u914d\u7f6e",children:[]},{value:"\u6570\u636e\u76ee\u5f55",id:"\u6570\u636e\u76ee\u5f55",children:[]},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",children:[]}]},{value:"\u72b6\u6001\u68c0\u67e5",id:"\u72b6\u6001\u68c0\u67e5",children:[]},{value:"\u8282\u70b9\u589e\u3001\u5220",id:"\u8282\u70b9\u589e\u5220",children:[]},{value:"\u6570\u636e\u5bfc\u51fa\u3001\u6062\u590d",id:"\u6570\u636e\u5bfc\u51fa\u6062\u590d",children:[]}],k={toc:m};function u(t){var e=t.components,p=(0,a.Z)(t,i);return(0,l.kt)("wrapper",(0,r.Z)({},k,p,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6570\u636e\u7f13\u5b58"},"\u6570\u636e\u7f13\u5b58"),(0,l.kt)("p",null,"FinClip\u91c7\u7528Redis\u5b9e\u73b0\u6570\u636e\u7f13\u5b58\u529f\u80fd\uff0cRedis \u662f\u4e00\u79cd\u5f00\u6e90(BSD \u8bb8\u53ef)\u3001\u5185\u5b58\u4e2d\u6570\u636e\u7ed3\u6784\u5b58\u50a8\u7684\u5f00\u6e90\u8f6f\u4ef6\uff0c\u901a\u5e38 \u7528\u4f5c\u6570\u636e\u5e93\u3001\u7f13\u5b58\u548c\u6d88\u606f\u4ee3\u7406\u3002 Redis \u63d0\u4f9b\u4e86\u8bf8\u5982\u5b57\u7b26\u4e32\u3001\u6563\u5217\u3001\u5217\u8868\u3001\u96c6\u5408\u3001\u5e26\u8303\u56f4\u67e5\u8be2\u7684\u6392\u5e8f\u96c6\u5408\u3001\u4f4d\u56fe\u3001 \u8d85\u7ea7\u65e5\u5fd7\u3001\u5730\u7406\u7a7a\u95f4\u7d22\u5f15\u548c\u6d41\u7b49\u6570\u636e\u7ed3\u6784\u3002 Redis \u5185\u7f6e\u590d\u5236\u3001Lua \u811a\u672c\u3001LRU \u9a71\u9010\u3001\u4e8b\u52a1\u548c\u4e0d\u540c\u7ea7\u522b\u7684\u78c1\u76d8\u6301\u4e45 \u5316\uff0c\u5e76\u901a\u8fc7 Redis Sentinel \u548c\u81ea\u52a8\u63d0\u4f9b\u9ad8\u53ef\u7528\u6027\uff0c\u5728\u5b9e\u9645\u90e8\u7f72\u4e2d\uff0c\u6211\u4eec\u63a8\u8350\u5ba2\u6237\u91c7\u7528Redis\u7684\u96c6\u7fa4\u6a21\u5f0f\uff0c\u4ee5\u5b9e\u73b0\u9ad8 \u53ef\u7528\u6027\u548c\u53ef\u6269\u5c55\u6027\u3002"),(0,l.kt)("h2",{id:"\u90e8\u7f72\u67b6\u6784"},"\u90e8\u7f72\u67b6\u6784"),(0,l.kt)("p",null,"Redis \u7684\u62d3\u6251\u56fe\u5982\u4e0b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"redis",src:n(4235).Z})),(0,l.kt)("h3",{id:"\u670d\u52a1\u914d\u7f6e"},"\u670d\u52a1\u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5b9e\u4f8b\uff08Instance\uff09"),"\uff1a\u6b64\u4e2d\u95f4\u4ef6\u9ed8\u8ba4\uff08\u6700\u4f4e\uff09\u4ea4\u4ed8\u72b6\u6001\u4e0b\u4e3a",(0,l.kt)("strong",{parentName:"p"},"\u516d\u5b9e\u4f8b"),"\u90e8\u7f72\uff0c\u4e92\u4e3a\u4e3b\u4ece\uff0c\u4e14\u4ece\u8282\u70b9\u5b95\u673a\u4e0d\u5f71\u54cd\u4e3b\u8282\u70b9\u4f7f\u7528"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Slot"),"\uff1a16384"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u82e5 REDIS \u53d1\u751f\u4e3b\u4ece\u5207\u6362\uff0c\u4f1a\u5b58\u5728\u79d2\u7ea7\u7684\u5f71\u54cd")),(0,l.kt)("h3",{id:"\u6570\u636e\u76ee\u5f55"},"\u6570\u636e\u76ee\u5f55"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u8ba1\u7528\u9014"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8def\u5f84"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 1"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5316\u6570\u636e\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/var/lib/container/redis")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"docker-compose \u6587\u4ef6\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/opt/docker-compose/redis")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5316\u6570\u636e\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/var/lib/container/redis")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"docker-compose \u6587\u4ef6\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/opt/docker-compose/redis")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6301\u4e45\u5316\u6570\u636e\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/var/lib/container/redis")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"docker-compose \u6587\u4ef6\u76ee\u5f55"),(0,l.kt)("td",{parentName:"tr",align:null},"/mnt/opt/docker-compose/redis")))),(0,l.kt)("h3",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5e95\u5c42"),"\uff1a\u6b64\u4e2d\u95f4\u4ef6\u57fa\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u542f\u52a8\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose")," \u57fa\u4e8e docker0 \u865a\u62df\u7f51\u5361\u8fdb\u884c\u901a\u4fe1\uff0c\u56e0\u6b64\u672c\u4e2d\u95f4\u4ef6\u5728\u6240\u6709\u670d\u52a1\u5668\u4e0a\u7684\u6240\u6709\u7ec4\u4ef6\uff0c\u5747\u901a\u8fc7 docker0 \u7f51\u5361\u5212\u5206\u51fa\u7684\u5b50\u7f51\u8fdb\u884c\u901a\u4fe1\uff0c\u5e76\u4e14\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"--network=host"),"  \u914d\u7f6e\u8fd0\u884c\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5b50\u7f51\u7f51\u6bb5\u53ef\u4ee5\u901a\u8fc7 ",(0,l.kt)("inlineCode",{parentName:"p"},"ifconfig docker0")," \u8fdb\u884c\u786e\u8ba4\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u4e1a\u52a1\u5c42"),"\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u670d\u52a1\u5668"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bbe\u8ba1\u7528\u9014"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7aef\u53e3"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 1 \u5bf9\u5916\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"7000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 2 \u5bf9\u5916\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"7001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 1 \u96c6\u7fa4 BUS"),(0,l.kt)("td",{parentName:"tr",align:null},"17000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 2 \u96c6\u7fa4 BUS"),(0,l.kt)("td",{parentName:"tr",align:null},"17001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 1 Prometheus Metrics \u4fe1\u606f\u63d0\u4f9b"),(0,l.kt)("td",{parentName:"tr",align:null},"7200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 2 Prometheus Metrics \u4fe1\u606f\u63d0\u4f9b"),(0,l.kt)("td",{parentName:"tr",align:null},"7201")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 2"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 1 \u5bf9\u5916\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"7000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 2 \u5bf9\u5916\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"7001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 1 \u96c6\u7fa4 BUS"),(0,l.kt)("td",{parentName:"tr",align:null},"17000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 2 \u96c6\u7fa4 BUS"),(0,l.kt)("td",{parentName:"tr",align:null},"17001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 1 Prometheus Metrics \u4fe1\u606f\u63d0\u4f9b"),(0,l.kt)("td",{parentName:"tr",align:null},"7200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 2 Prometheus Metrics \u4fe1\u606f\u63d0\u4f9b"),(0,l.kt)("td",{parentName:"tr",align:null},"7201")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"\u8282\u70b9 3"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 1 \u5bf9\u5916\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"7000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 2 \u5bf9\u5916\u670d\u52a1"),(0,l.kt)("td",{parentName:"tr",align:null},"7001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 1 \u96c6\u7fa4 BUS"),(0,l.kt)("td",{parentName:"tr",align:null},"17000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 2 \u96c6\u7fa4 BUS"),(0,l.kt)("td",{parentName:"tr",align:null},"17001")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 1 Prometheus Metrics \u4fe1\u606f\u63d0\u4f9b"),(0,l.kt)("td",{parentName:"tr",align:null},"7200")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"[\u5360\u7528\u5bbf\u4e3b\u673a\u56fa\u5b9a\u7aef\u53e3]")," Redis \u5b9e\u4f8b 2 Prometheus Metrics \u4fe1\u606f\u63d0\u4f9b"),(0,l.kt)("td",{parentName:"tr",align:null},"7201")))),(0,l.kt)("h2",{id:"\u72b6\u6001\u68c0\u67e5"},"\u72b6\u6001\u68c0\u67e5"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u767b\u5f55\u5230 REDIS \u6240\u5728\u7684\u670d\u52a1\u5668\u4e0a\uff0c\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"p"},"docker exec -it redis-7000 bash")," \u8fdb\u5165\u5bb9\u5668")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"redis-cli -h 127.0.0.1 -p 7000"),"\uff0c\u5e76\u901a\u8fc7\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"p"},"auth <\u5bc6\u7801>")," \u767b\u5f55\u540e\uff0c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"p"},"CLUSTER NODES"),"\uff0c\u786e\u8ba4 6 \u4e2a\u8282\u70b9\u5747\u5df2\u88ab\u52a0\u5165\u5230\u96c6\u7fa4\u4e2d\uff0c\u5e76\u4e14\u4e3b\u8282\u70b9\uff08Master\uff09\u3001\u4ece\u8282\u70b9\uff08Slave\uff09\u5e94\u8be5\u4e3a\u540c\u7b49\u6570\u91cf"),(0,l.kt)("blockquote",{parentName:"li"},(0,l.kt)("p",{parentName:"blockquote"},"\u5982\u6709\u5fc5\u8981\uff0c\u53ef\u4ee5\u68c0\u67e5\u6240\u6709 3 \u53f0\u670d\u52a1\u5668\u4e0a\u7684 6 \u4e2a\u5bb9\u5668\u786e\u4fdd\u96c6\u7fa4\u6b63\u5e38")))),(0,l.kt)("h2",{id:"\u8282\u70b9\u589e\u5220"},"\u8282\u70b9\u589e\u3001\u5220"),(0,l.kt)("p",null,"\u200b\t",(0,l.kt)("strong",{parentName:"p"},"\u65b0\u589e\u8282\u70b9"),"\uff1a\u82e5\u9700\u8981\u65b0\u589e\u8282\u70b9\uff0c\u8bf7\u4f9d\u7167\u4e0b\u5217\u6b65\u9aa4\u64cd\u4f5c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u786e\u8ba4\u65b0\u8282\u70b9\u5df2\u7ecf\u5b89\u88c5\u597d Docker 19.03 \u6216\u66f4\u9ad8\u7248\u672c\u3001\u5df2\u7ecf\u5b89\u88c5\u597d docker-compose 1.27 \u6216\u66f4\u9ad8\u7248\u672c"),(0,l.kt)("li",{parentName:"ol"},"\u786e\u8ba4\u65b0\u8282\u70b9\u5bf9\u4e8e\u5f53\u524d REDIS \u6240\u5728\u7684",(0,l.kt)("strong",{parentName:"li"},"\u6240\u6709\u670d\u52a1\u5668"),"\u7684 7000\u30017001\u300117000\u300117001\u30017200\u30017201 \u5747\u4e3a\u4e92\u76f8\u53ef\u8fbe\u72b6\u6001"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u65e7\u670d\u52a1\u5668\u7684 \u201c\u6301\u4e45\u5316\u6570\u636e\u76ee\u5f55\u201d \u4e2d\u590d\u5236 conf \u6587\u4ef6\u5939\u7684 redis.conf \u6587\u4ef6\u5230\u65b0\u670d\u52a1\u5668\u7684\u540c\u540d\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ol"},"\u4ece\u65e7\u670d\u52a1\u5668\u7684 \u201cdocker-compose \u6587\u4ef6\u76ee\u5f55\u201c \u590d\u5236 docker-compose.yaml \u5230\u65b0\u670d\u52a1\u5668\u7684\u540c\u540d\u76ee\u5f55"),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"docker-compose up -d")," \u542f\u52a8\u65b0 REDIS \u5b9e\u4f8b 1 \u4e0e\u5b9e\u4f8b 2"),(0,l.kt)("li",{parentName:"ol"},"\u8fdb\u5165 REDIS \u4efb\u4e00\u5b9e\u4f8b\u5bb9\u5668\uff0c\u6267\u884c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},"redis-cli -p 7000 -a '<\u5bc6\u7801>' --cluster add-node <\u65b0\u8282\u70b9IP>:<\u7aef\u53e3> <\u65b0\u8282\u70b9IP>:<\u7aef\u53e3>")),(0,l.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 REDIS \u547d\u4ee4\u884c\u5e76\u4f7f\u7528\u5bc6\u7801\u9274\u6743\u540e\uff0c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"CLUSTER NODES"),"\uff0c\u786e\u8ba4\u65b0\u8282\u70b9\u5747\u5df2\u88ab\u52a0\u5165\u5230\u96c6\u7fa4\u4e2d\uff0c\u5e76\u4e14\u4e3b\u8282\u70b9\uff08Master\uff09\u3001\u4ece\u8282\u70b9\uff08Slave\uff09\u5e94\u8be5\u4e3a\u540c\u7b49\u6570\u91cf")),(0,l.kt)("p",null,"\u200b\t",(0,l.kt)("strong",{parentName:"p"},"\u5220\u9664\u8282\u70b9"),"\uff1a\u82e5\u8981\u5220\u9664\u8282\u70b9\uff0c\u8bf7\u4f9d\u7167\u4e0b\u5217\u6b65\u9aa4\u64cd\u4f5c"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u4e3b\u4ece\u8282\u70b9\u9700\u8981\u5206\u522b\u64cd\u4f5c\u3002\u8fdb\u5165 REDIS \u4efb\u4e00\u5b9e\u4f8b\u5bb9\u5668\uff0c\u6267\u884c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},"redis-cli -p 7000 -a '<\u5bc6\u7801>' --cluster del-node <\u4ece\u8282\u70b9IP>:<\u7aef\u53e3>")),(0,l.kt)("li",{parentName:"ol"},"\u6267\u884c\u547d\u4ee4 ",(0,l.kt)("inlineCode",{parentName:"li"},"redis-cli -p 7000 -a '<\u5bc6\u7801>' --cluster reshard <\u4e3b\u8282\u70b9IP>:<\u7aef\u53e3>"),"\uff0c\u518d\u6267\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"redis-cli -p 7000 -a '<\u5bc6\u7801>' --cluster del-node <\u4e3b\u8282\u70b9IP>:<\u7aef\u53e3>")),(0,l.kt)("li",{parentName:"ol"},"\u767b\u5f55\u5230 REDIS \u547d\u4ee4\u884c\u5e76\u4f7f\u7528\u5bc6\u7801\u9274\u6743\u540e\uff0c\u6267\u884c",(0,l.kt)("inlineCode",{parentName:"li"},"CLUSTER NODES"),"\uff0c\u786e\u8ba4\u9700\u8981\u79fb\u9664\u7684\u8282\u70b9\u5df2\u88ab\u8e22\u51fa\u96c6\u7fa4\uff0c\u5e76\u4e14\u4e3b\u8282\u70b9\uff08Master\uff09\u3001\u4ece\u8282\u70b9\uff08Slave\uff09\u5e94\u8be5\u4e3a\u540c\u7b49\u6570\u91cf")),(0,l.kt)("h2",{id:"\u6570\u636e\u5bfc\u51fa\u6062\u590d"},"\u6570\u636e\u5bfc\u51fa\u3001\u6062\u590d"),(0,l.kt)("p",null,"REDIS \u7528\u4e8e\u505a\u6570\u636e\u7f13\u5b58\uff0c\u65e0\u9700\u5907\u4efd"))}u.isMDXComponent=!0},4235:function(t,e,n){e.Z=n.p+"assets/images/redis-5de0cbb961e8d114c33620ebb0c2cb1d.png"}}]);