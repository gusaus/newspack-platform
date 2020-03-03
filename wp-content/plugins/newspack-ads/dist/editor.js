/*! For license information please see editor.js.LICENSE */
!function(t,e){for(var n in e)t[n]=e[n]}(window,function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=15)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.blocks}()},function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,n){var r=n(17),o=n(18),i=n(19);t.exports=function(t){return r(t)||o(t)||i()}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&t.push(c)}else if("object"===i)for(var a in r)n.call(r,a)&&r[a]&&t.push(a)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},function(t,e,n){var r=n(20),o=n(21),i=n(22);t.exports=function(t,e){return r(t)||o(t,e)||i()}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){var r=n(23),o=n(4);t.exports=function(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?o(t):e}},function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},n(e)}t.exports=n},function(t,e,n){var r=n(24);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&r(t,e)}},function(t,e){!function(){t.exports=this.wp.apiFetch}()},function(t,e,n){n(26),t.exports=n(27)},function(t,e,n){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(n.p=window.Jetpack_Block_Assets_Base_Url)},function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}},function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var c,a=t[Symbol.iterator]();!(r=(c=a.next()).done)&&(n.push(c.value),!e||n.length!==e);r=!0);}catch(u){o=!0,i=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(e){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(t){return n(t)}:t.exports=r=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":n(t)},r(e)}t.exports=r},function(t,e){function n(e,r){return t.exports=n=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},n(e,r)}t.exports=n},function(t,e,n){},function(t,e,n){"use strict";n.r(e);n(16);var r=n(5),o=n.n(r),i=n(0),c=n(3),a=n(1),u=n(7),s=n.n(u);Object(c.setCategories)([].concat(o()(Object(c.getCategories)().filter((function(t){return"newspack"!==t.slug}))),[{slug:"newspack",title:"Newspack",icon:Object(i.createElement)((function(t){var e=t.size,n=void 0===e?24:e,r=t.className;return Object(i.createElement)(a.SVG,{className:s()("jetpack-logo",r),width:n,height:n,viewBox:"0 0 32 32"},Object(i.createElement)(a.G,{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},Object(i.createElement)(a.G,{fill:"#2A7DE1",fillRule:"nonzero"},Object(i.createElement)(a.Path,{d:"M16,0 C24.8365823,0 32,7.16345853 32,16.0000911 C32,24.8367237 24.8365823,32 16,32 C7.16341774,32 0,24.8367237 0,16.0000911 C0,7.16345853 7.16341774,0 16,0 Z M9.00970874,8.85436893 L9.00970874,13.6011058 L9.076,13.669 L9.00970874,13.6699029 L9.00970874,23.0938511 L12.4789644,23.0938511 L12.478,17.134 L18.3297326,23.0938511 L22.9902913,23.0938511 L9.00970874,8.85436893 Z M22.9902913,15.4822006 L20.1423948,15.4822006 L21.2545041,16.6213592 L22.9902913,16.6213592 L22.9902913,15.4822006 Z M22.9902913,12.1682848 L16.9320388,12.1682848 L18.0321512,13.3074434 L22.9902913,13.3074434 L22.9902913,12.1682848 Z M22.9902913,8.85436893 L13.6699029,8.85436893 L14.7723242,9.99352751 L22.9902913,9.99352751 L22.9902913,8.85436893 Z",id:"Combined-Shape-Copy",fill:"#2A7DE1"}))))}),null)}]))},function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(0),i=n(1),c=n(2),a=n(8),u=n.n(a),s=n(5),l=n.n(s),f=n(9),p=n.n(f),d=n(10),b=n.n(d),y=n(11),v=n.n(y),h=n(12),m=n.n(h),w=n(4),g=n.n(w),j=n(13),O=n.n(j),x=n(6),_=n.n(x),A=n(14),k=n.n(A),S=function(t){function e(){var t;return p()(this,e),t=v()(this,m()(e).apply(this,arguments)),_()(g()(t),"adUnitsForSelect",(function(t){return[{label:Object(c.__)("Select an ad unit"),value:null}].concat(l()(Object.values(t).map((function(t){return{label:t.name,value:t.id}}))))})),_()(g()(t),"activeAdDataForActiveAd",(function(e){var n=t.state.adUnits,r=n&&n.find((function(t){return parseInt(t.id)===parseInt(e)}));return t.dimensionsFromAd(r)})),_()(g()(t),"dimensionsFromAd",(function(t){var e=(t||{}).sizes,n=e&&e.length?e[0]:[320,240],r=u()(n,2);return{width:r[0],height:r[1]}})),t.state={adUnits:null},t}return O()(e,t),b()(e,[{key:"componentDidMount",value:function(){var t=this;k()({path:"/newspack/v1/wizard/advertising"}).then((function(e){return t.setState({adUnits:e.ad_units,initialUpdate:!0})}))}},{key:"componentDidUpdate",value:function(t){var e=this.props,n=e.attributes,r=e.noticeOperations,o=n.activeAd;if(o!==t.attributes.activeAd){var i=this.activeAdDataForActiveAd(o),a=i.code,u=i.width,s=i.height;!a||u||s?r.removeAllNotices():r.createErrorNotice(Object(c.__)("Invalid ad unit code. No dimensions available"))}}},{key:"render",value:function(){var t=this.props,e=t.attributes,n=t.setAttributes,r=t.noticeUI,a=e.activeAd,u=this.state.adUnits,s=this.activeAdDataForActiveAd(a),l=s.width,f=s.height,p=l&&f?{width:"".concat(l||400,"px"),height:"".concat(f||100,"px")}:{};return Object(o.createElement)(o.Fragment,null,r,Object(o.createElement)("div",{className:"wp-block-newspack-ads-blocks-ad-unit"},Object(o.createElement)("div",{className:"newspack-ads-ad-unit",style:p},Object(o.createElement)(i.Placeholder,null,u&&!!u.length&&Object(o.createElement)(i.SelectControl,{label:Object(c.__)("Ad Unit"),value:a,options:this.adUnitsForSelect(u),onChange:function(t){return n({activeAd:t})}}),u&&!u.length&&Object(o.createElement)(o.Fragment,null,Object(c.__)("No ad units have been created yet."),Object(o.createElement)(i.ExternalLink,{href:"/wp-admin/admin.php?page=newspack-google-ad-manager-wizard#/"},Object(c.__)("You can create ad units in the Ads wizard"))," ")))))}}]),e}(o.Component),E=Object(i.withNotices)(S),L=(n(25),{title:Object(c.__)("Ad Unit"),icon:Object(o.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(o.createElement)(i.Path,{d:"M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 9H3V5h9v7z"})),category:Object(r.getCategories)().some((function(t){return"newspack"===t.slug}))?"newspack":"common",keywords:[Object(c.__)("ad"),Object(c.__)("advert"),Object(c.__)("ads")],description:Object(c.__)("A block for displaying ad inventory."),attributes:{activeAd:{type:"string"}},supports:{html:!1,align:!0},edit:E,save:function(){return null}});Object(r.registerBlockType)("newspack-ads/".concat("ad-unit"),L)}]));