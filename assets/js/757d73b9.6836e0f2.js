(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{100:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},101:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},102:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),u=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(o,".").concat(h)]||d[h]||p[h]||i;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},103:function(e,t,n){"use strict";var r=n(0),a=n(104);t.a=function(){var e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},104:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)(void 0);t.a=a},105:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(103),o=n(100),s=n(55),l=n.n(s),c=37,u=39;t.a=function(e){var t=e.lazy,n=e.block,s=e.defaultValue,d=e.values,p=e.groupId,h=e.className,m=Object(i.a)(),f=m.tabGroupChoices,y=m.setTabGroupChoices,b=Object(r.useState)(s),g=b[0],v=b[1],w=r.Children.toArray(e.children);if(null!=p){var k=f[p];null!=k&&k!==g&&d.some((function(e){return e.value===k}))&&v(k)}var O=function(e){v(e),null!=p&&y(p,e)},j=[];return a.a.createElement("div",{className:"tabs-container"},a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},h)},d.map((function(e){var t=e.value,n=e.label;return a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(j,e.target,e)},onFocus:function(){return O(t)},onClick:function(){O(t)}},n)}))),t?Object(r.cloneElement)(w.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},106:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return a.a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},113:function(e,t,n){"use strict";function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var a=n(4),i=n(0),o=n.n(i),s=(n(99),n(105),n(106),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={current:0,step_num:n.props.steps.length},n.handleNext=n.handleNext.bind(r(n)),n.handlePrev=n.handlePrev.bind(r(n)),n}Object(a.a)(t,e);var n=t.prototype;return n.handleNext=function(){var e=this.state.current;e<this.state.step_num-1&&(e+=1,this.setState({current:e}))},n.handlePrev=function(){var e=this.state.current;this.state.step_num;e>0&&(e-=1,this.setState({current:e}))},n.render=function(){var e=this.state.current,t=this.state.step_num,n=this.props.steps[e].title,r=this.props.steps[e].points,a=this.props.steps[e].media,i=this.props.steps[e].descs;return o.a.createElement("div",{class:"rendered"},o.a.createElement("div",{class:"guide_header"},o.a.createElement("h1",{id:"guide_title"}," ",this.props.title," "),o.a.createElement("p",null," By: ",o.a.createElement("span",{id:"guide_author"}," ",this.props.author," ")," ")),o.a.createElement("div",{class:"step_container"},o.a.createElement("div",{class:"row_step step_title"},o.a.createElement("h2",null," ",Array.isArray(n)?n[0]:n," "),o.a.createElement("span",{class:"step_subtitle"},n[1]&&n[1].length>0&&o.a.createElement("em",null," \u2022 ",n[1]," "))),o.a.createElement("div",{class:"row_step scrollbox"},o.a.createElement("section",{class:"column_text"},r.length>1&&o.a.createElement("div",{class:"step_points"},o.a.createElement("ol",null,r.map((function(e,t){return Array.isArray(e)?o.a.createElement("ol",null," ",e.map((function(e){return o.a.createElement("li",null," ",e," ")}))," "):o.a.createElement("li",{class:"step_point"}," ",e," ")})))),r.length>1&&i[0].length>2&&o.a.createElement("hr",null),i[0].length>2&&o.a.createElement("div",{class:"step_desc"},i.map((function(e){return o.a.createElement("p",null," ",e," ")})))),a[0].length>2&&o.a.createElement("section",{class:"column_media"},o.a.createElement("div",{class:"step_image"},o.a.createElement("figure",null,0===a[2]?o.a.createElement("img",{class:"no-shadow",src:a[0]}):o.a.createElement("img",{src:a[0]}),o.a.createElement("figcaption",null,o.a.createElement("em",null," ",a[1]," "))))))),o.a.createElement("div",{class:"button_bar"},e>0?o.a.createElement("button",{class:"button_guide",type:"button",id:"prevBtn",onClick:this.handlePrev}," \u2190 "):o.a.createElement("button",{class:"button_guide",type:"button",id:"prevBtn",style:{opacity:.15}}," \u2190 "),e<t-1?o.a.createElement("button",{class:"button_guide",type:"button",id:"nextBtn",onClick:this.handleNext}," \u2192 "):o.a.createElement("button",{class:"button_guide",type:"button",id:"nextBtn",style:{opacity:.15}}," \u2192 ")))},t}(o.a.Component));s.defaultProps={title:"",description:"",developer:"",website:"",support:"",os_support:"",pricing:"",repo:"",ease:"",issues:"",caution:""};t.a=s},86:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),i=(n(0),n(102)),o=n(113),s=n(99),l={id:"wiki-entry",title:"Creating your first wiki entry",hide_title:!0,hide_table_of_contents:!0,sidebar_label:"Your First Wiki Entry"},c={unversionedId:"tools/wiki-entry",id:"tools/wiki-entry",isDocsHomePage:!1,title:"Creating your first wiki entry",description:"<GuideEntry",source:"@site/guides/tools/wiki-entry.mdx",slug:"/tools/wiki-entry",permalink:"/canyouhearme/guides/tools/wiki-entry",editUrl:"https://github.com/jacksongoode/canyouhearme/edit/master/guides/tools/wiki-entry.mdx",version:"current",lastUpdatedBy:"Jackson Goode",lastUpdatedAt:1605373788,sidebar_label:"Your First Wiki Entry",sidebar:"guides",previous:{title:"A Livestream Tutorial",permalink:"/canyouhearme/guides/video/livestream"}},u=[],d={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(o.a,{title:"Creating your first wiki entry",author:"Jackson Goode",description:"A simple how-to guide for making a wiki post on CYHM",steps:[{title:["Start with Git","Git going"],points:[Object(i.b)("code",null,"cd <directory>"),["Replace <directory> with some location you want to clone the repo into."],Object(i.b)("code",null,"git clone https://github.com/jacksongoode/canyouhearme.git"),["The url has no breaks"],Object(i.b)("code",null,"cd canyouhearme"),["This simply moves your current directory inside the repository folder you just cloned."],Object(i.b)("code",null,"git pull"),["This is only needed to check for updates to the repo since you've cloned it. Good to do before you make any changes or additions."]],media:[Object(s.a)("img/wiki-entry-step-1.webp"),"Terminal input for these steps (animated)"],descs:[["Let's start just by cloning the repo into a folder! If you're having trouble cloning, pulling or generally git-ing, check out ",Object(i.b)("a",{href:"https://github.com/MCT-master/Guides/wiki/How-to-use-the-MCT-Blog-%E2%80%90-Creating-a-Blog-Post"},"Aleksander's great guide")," made for the MCT Blog."]]},{title:["Yarn","Not the kind you sow with"],points:["Install yarn",[["Yarn is a lot like 'bundle', its a package manager and can be installed ",Object(i.b)("a",{href:"https://classic.yarnpkg.com/en/docs/install/"},"here")]],Object(i.b)("code",null,"yarn"),["Typing 'yarn' will trigger a process to fetch and install all the necessary packages.","These are needed to host and deploy the site."],Object(i.b)("code",null,"yarn build"),["Next we will build the site. This is likely where any issues may appear.","If you find a problem please message me on Discord!"],Object(i.b)("code",null,"yarn start"),["This step is optional, but it will deploy the site locally (just like in Jekyll).","Useful for checking out the entry you make"]],media:[Object(s.a)("img/wiki-entry-step-2.webp"),"More terminal input!"],descs:["Now we will install and build the site's resources locally. If you would like you can also deploy the site to see it (on localhost:3000)."]},{title:["Adding a wiki entry!","How to use the template to create a new entry"],points:["Copy 'wiki-template.mdx'",["The file can be found in the 'docs' folder"],"Rename and move it to a category",["You should rename it to the software/service you're adding, ie. 'jacktrip'","Move/drag the file to the category folder the service falls within (in this case, the 'audio' folder)"],"Fill in info for the service",["There are comments above to describe what each parameter stands for and some default values to use","There is no standard for each parameter, but looking at the comments as well as other entries in the 'docs' folder might provide some suggestions."],"Editing front-matter (the stuff at the top)",["Fill in the 'id', 'title', and 'sidebar_label' with your softwares name","'id' is lowercased, and 'title' and 'sidebar_label' are typically the same and can be started with uppercase"]],media:[Object(s.a)("img/wiki-entry-step-3.png"),"Here's what the template looks like"],descs:['Make sure that everything you write falls within the quotes ("") otherwise there will be issues. Links for the website and support links are automatically created, all you have to do is paste the url - no need to mess with any html.',["When filling out the details and descriptions of the software, there might be times where you want to link to something. There are examples of putting a link into the parameter and bolding, italicizing in other entries. Checking out ",Object(i.b)("a",{href:"https://github.com/jacksongoode/canyouhearme/edit/master/docs/audio/jacktrip.mdx"},"jacktrip.mdx")," is a nice example of a wiki entry!"]]},{title:["Creating a link to your page","Editing the sidebar"],points:["Open 'sidebarsWiki.js'",["You can find the file in the root of the 'canyouhearme' folder.","Find the category that you added your services falls under"],"Add your entry to the list",["Add a string to the list in the format [category]/[id], where id is the id you specified in the front-matter (the stuff at the top of the page)"]],media:[Object(s.a)("img/wiki-entry-step-4.png"),"The new entry is shown highlighted"],descs:["This allows your new entry to be visible on the sidebar categories."]},{title:["Pushing to the repository","Finally!"],points:[Object(i.b)("code",null,"git push"),["Just push as you would to any other repo - add a message saying what you added","Making a push will also build and deploy your post to the live site"]],media:["",""],descs:[["If there are issues, try and testing out the site with",Object(i.b)("code",null,"yarn start"),". This will allow you to see the page and the changes you made to the site."],["Checking ",Object(i.b)("a",{href:"https://github.com/MCT-master/Guides/wiki/How-to-use-the-MCT-Blog-%E2%80%90-Creating-a-Blog-Post"},"Aleksander's guide")," is also helpful at this step. And if issues persist, just shoot me an email on Discord!"]]}],ease:"",issues:"",info:"",caution:"",mdxType:"GuideEntry"}))}p.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}));var r=n(17),a=n(101);function i(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}}}]);