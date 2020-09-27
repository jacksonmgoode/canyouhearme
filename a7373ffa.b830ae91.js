(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(2),o=n(6),i=(n(0),n(90)),a=(n(87),{id:"overview",title:"An Overview of the Guides Section",sidebar_label:"Overview",slug:"/"}),c={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"An Overview of the Guides Section",description:"Guides galore!",source:"@site/guides/overview.mdx",slug:"/",permalink:"/canyouhearme/guides/",editUrl:"https://github.com/jacksonmgoode/canyouhearme/edit/master/guides/overview.mdx",version:"current",sidebar_label:"Overview",sidebar:"guides",next:{title:"A Livestream Tutorial",permalink:"/canyouhearme/guides/video/livestream"}},u=[{value:"Guides galore!",id:"guides-galore",children:[{value:"Some notes on compatibility:",id:"some-notes-on-compatibility",children:[]}]}],s={rightToc:u};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"guides-galore"},"Guides galore!"),Object(i.b)("p",null,"Here you can find installation tutorials and guides for common softwares that aim to be simple, concise, and accessible to users of any technical skill. These guides include references to software and tools that can be found in our wiki for much more detailed documentation."),Object(i.b)("p",null,"Each guide contains steps which you can navigate through using the arrows at the bottom of the page. In addition, some steps might include descriptions that can be scrolled down within the page's window. Images and other media can be found on the right hand side (both animated and static). Hovering over these will magnify them, allowing you to get a closer look."),Object(i.b)("h3",{id:"some-notes-on-compatibility"},"Some notes on compatibility:"),Object(i.b)("p",null,"Most of the animated media posted here will be in the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.google.com/speed/webp"}),"webp")," format - which is not currently supported by Safari (but will be soon!). In addition, the layout for mobile devices is not yet supported. If viewing on mobile, these guides will be incredibly compact."))}l.isMDXComponent=!0},86:function(e,t,n){"use strict";var r=n(0),o=n(20);t.a=function(){var e=Object(r.useContext)(o.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},87:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return a}));var r=n(86),o=n(89);function i(){var e=Object(r.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,a=i.forcePrependBaseUrl,c=void 0!==a&&a,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(i,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},89:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}))},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),p=r,b=d["".concat(a,".").concat(p)]||d[p]||f[p]||i;return n?o.a.createElement(b,c(c({ref:t},s),{},{components:n})):o.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);