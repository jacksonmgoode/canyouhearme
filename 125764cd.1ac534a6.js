(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),l=(n(0),n(169)),o=n(174),s={id:"obs",title:"OBS",sidebar_label:"OBS",hide_title:!0},c={id:"video/obs",isDocsHomePage:!1,title:"OBS",description:"<WikiEntry",source:"@site/docs/video/obs.mdx",permalink:"/canyouhearme/docs/video/obs",editUrl:"https://github.com/jacksonmgoode/canyouhearme/edit/master/website/docs/video/obs.mdx",sidebar_label:"OBS",sidebar:"wiki",previous:{title:"Zoom",permalink:"/canyouhearme/docs/video/zoom"},next:{title:"Zoom",permalink:"/canyouhearme/docs/tools/iperf"}},i=[],u={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("div",null,Object(l.b)(o.a,{title:"OBS Studio",pic_url:"https://obsproject.com/assets/images/new_icon_small-r.png",description:'OBS is a free and open-source software "designed for capturing, compositing, encoding, recording, and streaming video content, efficiently". OBS is cross platform and incredibly popular which leads it to be well documented.',developer:"Jim and OBS Studio Contributors",website:"https://obsproject.com/",support:"https://obsproject.com/wiki/Home",protocol:"Hosts audio/video streaming",os_support:"Cross-platform",pricing:"Free",sign_up:"No",hosting:"Yes",rec_speed:"Varies by use-case",req_speed:"Varies by use-case",max_qual:"Varies by use-case",latency:"Varies by use-case",last_update:"Recently updated",open_source:"Yes",repo:"https://github.com/obsproject/obs-studio",ease:"OBS is the gold standard of open-source software and likely the most popular utility for hosting audio/video streams online. It is quite easy to use but is also incredibly extendible for advanced usage.",issues:"",info:"",caution:"",mdxType:"WikiEntry"})))}p.isMDXComponent=!0},165:function(e,t,n){"use strict";var a=n(0),r=n(53);t.a=function(){return Object(a.useContext)(r.a)}},166:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(76);var a=n(165),r=n(167);function l(e,t){var n=void 0===t?{}:t,l=n.forcePrependBaseUrl,o=void 0!==l&&l,s=n.absolute,c=void 0!==s&&s,i=Object(a.a)().siteConfig,u=(i=void 0===i?{}:i).baseUrl,p=void 0===u?"/":u,m=i.url;if(!e)return e;if(o)return p+e;if(!Object(r.a)(e))return e;var d=p+e.replace(/^\//,"");return c?m+d:d}},167:function(e,t,n){"use strict";function a(e){return!1===/^(https?:|\/\/|mailto:|tel:)/.test(e)}n.d(t,"a",(function(){return a}))},168:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},169:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(o,".").concat(d)]||p[d]||m[d]||l;return n?r.a.createElement(f,s(s({ref:t},i),{},{components:n})):r.a.createElement(f,s({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},170:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){},isAnnouncementBarClosed:!1,closeAnnouncementBar:function(){}});t.a=r},171:function(e,t,n){"use strict";var a=n(0),r=n(170);t.a=function(){return Object(a.useContext)(r.a)}},172:function(e,t,n){"use strict";n(24),n(19),n(20);var a=n(0),r=n.n(a),l=n(171),o=n(168),s=n(130),c=n.n(s),i=37,u=39;t.a=function(e){var t=e.block,n=e.children,s=e.defaultValue,p=e.values,m=e.groupId,d=Object(l.a)(),f=d.tabGroupChoices,E=d.setTabGroupChoices,h=Object(a.useState)(s),v=h[0],b=h[1];if(null!=m){var g=f[m];null!=g&&g!==v&&p.some((function(e){return e.value===g}))&&b(g)}var y=function(e){b(e),null!=m&&E(m,e)},O=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":v===t,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case i:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(O,e.target,e)},onFocus:function(){return y(t)},onClick:function(){return y(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===v}))[0]))}},173:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},174:function(e,t,n){"use strict";var a=n(4),r=n(0),l=n.n(r),o=(n(166),n(172)),s=n(173),c=function(e){function t(){return e.apply(this,arguments)||this}return Object(a.a)(t,e),t.prototype.render=function(){return l.a.createElement("div",null,l.a.createElement("div",{class:"avatar avatar--vertical"},this.props.pic_url.length>0&&l.a.createElement("img",{class:"avatar__photo avatar__photo--xl",src:this.props.pic_url}),l.a.createElement("div",{class:"avatar__intro"},l.a.createElement("h1",{class:"avatar__name"},this.props.title),l.a.createElement("h4",{class:"avatar_links"},l.a.createElement("a",{href:this.props.website},"Official website"),this.props.support.length>0&&l.a.createElement("span",null," - ",l.a.createElement("a",{href:this.props.support},"Support link"))),l.a.createElement("medium",{class:"avatar__subtitle"},this.props.description))),l.a.createElement("hr",null),l.a.createElement(o.a,{defaultValue:"column",values:[{label:"Column",value:"column"},{label:"Table",value:"table"}]},l.a.createElement(s.a,{value:"column"},l.a.createElement("div",{class:"container"},l.a.createElement("div",{class:"row"},l.a.createElement("div",{class:"col"},l.a.createElement("h2",null,"Basic information"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Developer: "),this.props.developer),l.a.createElement("p",null,l.a.createElement("strong",null,"Protocol: "),this.props.protocol),l.a.createElement("p",null,l.a.createElement("strong",null,"OS Supported: ")," ",this.props.os_support),l.a.createElement("p",null,l.a.createElement("strong",null,"Pricing: "),this.props.pricing),l.a.createElement("p",null,l.a.createElement("strong",null,"Requires sign-up?: "),this.props.sign_up),l.a.createElement("p",null,l.a.createElement("strong",null,"Website: "),l.a.createElement("a",{href:this.props.website},this.props.website))),l.a.createElement("div",{class:"col"},l.a.createElement("h2",null,"Detailed information"),l.a.createElement("br",null),l.a.createElement("p",null,l.a.createElement("strong",null,"Self-hosted?: "),this.props.hosting),l.a.createElement("p",null,l.a.createElement("strong",null,"Recommended net-speed: "),this.props.rec_speed),l.a.createElement("p",null,l.a.createElement("strong",null,"Required net-speed: "),this.props.req_speed),l.a.createElement("p",null,l.a.createElement("strong",null,"Max quality: "),this.props.max_qual),l.a.createElement("p",null,l.a.createElement("strong",null,"Latency (estimate): "),this.props.latency),l.a.createElement("p",null,l.a.createElement("strong",null,"Last update: "),this.props.last_update),l.a.createElement("p",null,l.a.createElement("strong",null,"Open source?: "),this.props.open_source),this.props.repo.length>0&&l.a.createElement("p",null,l.a.createElement("strong",null,"Repo: "),l.a.createElement("a",{href:this.props.repo},this.props.repo)))))),l.a.createElement(s.a,{value:"table"},l.a.createElement("div",{class:"spec-table"},l.a.createElement("h2",null,"Overview of technical specifications"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Detail"),l.a.createElement("th",null,"Value")),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Developer:")),l.a.createElement("td",null,this.props.developer)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Protocol:")),l.a.createElement("td",null,this.props.protocol)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"OS Supported:")),l.a.createElement("td",null,this.props.os_support)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Self-hosted?:")),l.a.createElement("td",null,this.props.hosting)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Recommended net-speed:")),l.a.createElement("td",null,this.props.rec_speed)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Required net-speed:")),l.a.createElement("td",null,this.props.req_speed)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Max quality:")),l.a.createElement("td",null,this.props.max_qual)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Latency (estimate):")),l.a.createElement("td",null,this.props.latency)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("strong",null,"Last update:")),l.a.createElement("td",null,this.props.last_update)))))),l.a.createElement("hr",null),l.a.createElement("div",{class:"card-demo"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("h3",null,"Ease of use")),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,this.props.ease)))),l.a.createElement("br",null),this.props.issues.length>0&&l.a.createElement("div",{class:"card-demo"},l.a.createElement("div",{class:"card"},l.a.createElement("div",{class:"card__header"},l.a.createElement("h3",null,"Issues")),l.a.createElement("div",{class:"card__body"},l.a.createElement("p",null,this.props.issues)))),l.a.createElement("br",null),this.props.info.length>0&&l.a.createElement("div",{class:"admonition admonition-info alert alert--info"},l.a.createElement("div",{class:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement("span",{class:"admonition-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),l.a.createElement("div",{class:"admonition-content"},l.a.createElement("p",null,this.props.info))),this.props.caution.length>0&&l.a.createElement("div",{class:"admonition admonition-caution alert alert--warning"},l.a.createElement("div",{class:"admonition-heading"},l.a.createElement("h5",null,l.a.createElement("span",{class:"admonition-icon"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),l.a.createElement("div",{class:"admonition-content"},l.a.createElement("p",null,this.props.caution))))},t}(l.a.Component);c.defaultProps={title:"",pic_url:"",description:"",developer:"",website:"",support:"",protocol:"",os_support:"",pricing:"",sign_up:"",hosting:"",rec_speed:"Flexible",req_speed:"Unknown",max_qual:"Unknown",latency:"Unknown",last_update:"Unknown",open_source:"",repo:"",ease:"",issues:"",info:"",caution:""},t.a=c}}]);