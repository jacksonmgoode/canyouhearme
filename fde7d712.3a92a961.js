(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),l=(n(0),n(90)),o=n(95),i=n(87),c={id:"zoom",title:"Zoom",sidebar_label:"Zoom",hide_title:!0},s={unversionedId:"video/zoom",id:"video/zoom",isDocsHomePage:!1,title:"Zoom",description:"<WikiEntry",source:"@site/docs/video/zoom.mdx",slug:"/video/zoom",permalink:"/canyouhearme/docs/video/zoom",editUrl:"https://github.com/jacksonmgoode/canyouhearme/edit/master/docs/video/zoom.mdx",version:"current",sidebar_label:"Zoom",sidebar:"wiki",previous:{title:"Jitsi Meet",permalink:"/canyouhearme/docs/video/jitsi"},next:{title:"OBS",permalink:"/canyouhearme/docs/video/obs"}},u=[],p={rightToc:u};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",null,Object(l.b)(o.a,{title:"Zoom",pic_url:Object(i.a)("img/zoom-icon.jpg"),description:"Zoom is a widely used confrencing application for casual and commerical use. It is well supported and compatible with most platforms.",developer:"Zoom US",website:"https://zoom.us/",support:"https://support.zoom.us/",protocol:"Audio-video",os_support:"Cross-platform",pricing:"Free (45 meeting host limit), Pro (available for students) or subscription",sign_up:"Yes for hosting, no for joining",hosting:"Server-based",rec_speed:"Flexible",req_speed:"None",max_qual:"",latency:"~150ms",last_update:"Regular updates",open_source:"No",repo:"None",ease:"Well developed by a large corp, quite easy to use, install and connect. A Pro account (available for students) can host meetings at infinite time, 45 minutes for free users.",issues:"",info:"There are some important settings that can be optimized for higher quality audio. In settings, 'HD video' in the Video tab and 'Enable original audio', 'High fidelity music mode', 'Stereo audio' in 'Audio'.",caution:"",mdxType:"WikiEntry"})))}m.isMDXComponent=!0},86:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},87:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return o}));var a=n(86),r=n(89);function l(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var l=void 0===a?{}:a,o=l.forcePrependBaseUrl,i=void 0!==o&&o,c=l.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+u:u}(l,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},88:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},89:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},90:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.a.createElement(f,i(i({ref:t},s),{},{components:n})):r.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},92:function(e,t,n){"use strict";var a=n(0),r=n(91);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},93:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(92),o=n(88),i=n(47),c=n.n(i),s=37,u=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,p=e.values,m=e.groupId,d=Object(l.a)(),f=d.tabGroupChoices,E=d.setTabGroupChoices,h=Object(a.useState)(i),v=h[0],b=h[1],g=Object(a.useState)(!1),y=g[0],w=g[1];if(null!=m){var _=f[m];null!=_&&_!==v&&p.some((function(e){return e.value===_}))&&b(_)}var O=function(e){b(e),null!=m&&E(m,e)},j=[],x=function(e){e.metaKey||e.altKey||e.ctrlKey||w(!0)},k=function(){w(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",x),window.addEventListener("mousedown",k)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),style:y?{}:{outline:"none"},key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e),x(e)},onFocus:function(){return O(t)},onClick:function(){O(t),w(!1)},onPointerDown:function(){return w(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},94:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},95:function(e,t,n){"use strict";var a=n(3),r=n(0),l=n.n(r),o=(n(87),n(93)),i=n(94),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",{class:"rendered"},l.a.createElement("div",{class:"avatar avatar--vertical"},this.props.pic_url.length>0&&l.a.createElement("img",{class:"avatar__photo avatar__photo--xl",src:this.props.pic_url}),l.a.createElement("div",{class:"avatar__intro"},l.a.createElement("h1",{class:"avatar__name"},this.props.title),l.a.createElement("h4",{class:"avatar_links"},l.a.createElement("a",{href:this.props.website},"Official website"),this.props.support.length>0&&l.a.createElement("span",null," - ",l.a.createElement("a",{href:this.props.support},"Support link"))),l.a.createElement("medium",{class:"avatar__subtitle"},this.props.description))),l.a.createElement("hr",null),l.a.createElement(o.a,{defaultValue:"column",values:[{label:"Column",value:"column"},{label:"Table",value:"table"}]},l.a.createElement(i.a,{value:"column"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col"},l.a.createElement("h2",null,"Basic information"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Developer: "),this.props.developer),l.a.createElement("p",null,l.a.createElement("strong",null,"Protocol: "),this.props.protocol),l.a.createElement("p",null,l.a.createElement("strong",null,"OS Supported: ")," ",this.props.os_support),l.a.createElement("p",null,l.a.createElement("strong",null,"Pricing: "),this.props.pricing),l.a.createElement("p",null,l.a.createElement("strong",null,"Requires sign-up?: "),this.props.sign_up),l.a.createElement("p",null,l.a.createElement("strong",null,"Website: "),l.a.createElement("a",{href:this.props.website},this.props.website))),l.a.createElement("div",{class:"col"},l.a.createElement("h2",null,"Detailed information"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Self-hosted?: "),this.props.hosting),l.a.createElement("p",null,l.a.createElement("strong",null,"Recommended net-speed: "),this.props.rec_speed),l.a.createElement("p",null,l.a.createElement("strong",null,"Required net-speed: "),this.props.req_speed),l.a.createElement("p",null,l.a.createElement("strong",null,"Max quality: "),this.props.max_qual),l.a.createElement("p",null,l.a.createElement("strong",null,"Latency (estimate): "),this.props.latency),l.a.createElement("p",null,l.a.createElement("strong",null,"Last update: "),this.props.last_update),l.a.createElement("p",null,l.a.createElement("strong",null,"Open source?: "),this.props.open_source),this.props.repo.length>0&&l.a.createElement("p",null,l.a.createElement("strong",null,"Repo: "),l.a.createElement("a",{href:this.props.repo},this.props.repo)))))),l.a.createElement(i.a,{value:"table"},l.a.createElement("div",{class:"spec-table"},l.a.createElement("h2",null,"Overview of technical specifications"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Detail"),l.a.createElement("th",null,"Value")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Developer:")),l.a.createElement("td",null,this.props.developer)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Protocol:")),l.a.createElement("td",null,this.props.protocol)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"OS Supported:")),l.a.createElement("td",null,this.props.os_support)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Self-hosted?:")),l.a.createElement("td",null,this.props.hosting)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Recommended net-speed:")),l.a.createElement("td",null,this.props.rec_speed)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Required net-speed:")),l.a.createElement("td",null,this.props.req_speed)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Max quality:")),l.a.createElement("td",null,this.props.max_qual)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Latency (estimate):")),l.a.createElement("td",null,this.props.latency)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Last update:")),l.a.createElement("td",null,this.props.last_update)))))),l.a.createElement("hr",null),l.a.createElement("div",{class:"card-demo"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("h3",null,"Ease of use")),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,this.props.ease)))),l.a.createElement("br",null),this.props.issues.length>0&&l.a.createElement("div",{class:"card-demo"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("h3",null,"Issues")),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,this.props.issues)))),l.a.createElement("br",null),this.props.info.length>0&&l.a.createElement("div",{class:"admonition admonition-info alert alert--info"},l.a.createElement("div",{class:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement("span",{class:"admonition-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),l.a.createElement("div",{class:"admonition-content"},l.a.createElement("p",null,this.props.info))),this.props.caution.length>0&&l.a.createElement("div",{class:"admonition admonition-caution alert alert--warning"},l.a.createElement("div",{class:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement("span",{class:"admonition-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),l.a.createElement("div",{class:"admonition-content"},l.a.createElement("p",null,this.props.caution))))},t}(l.a.Component);c.defaultProps={title:"",pic_url:"",description:"",developer:"",website:"",support:"",protocol:"Unknown",os_support:"",pricing:"",sign_up:"",hosting:"",rec_speed:"Flexible",req_speed:"Unknown",max_qual:"Unknown",latency:"Unknown",last_update:"Unknown",open_source:"",repo:"",ease:["This service has not been documented by the CYHM community - yet \ud83e\udd13"],issues:"",info:"",caution:""},t.a=c}}]);