this.wp=this.wp||{},this.wp.blockDirectory=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=367)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},10:function(e,t){!function(){e.exports=this.wp.blocks}()},18:function(e,t,n){"use strict";var r=n(35);function o(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return o}))},19:function(e,t,n){"use strict";var r=n(32);var o=n(33);function c(e,t){return Object(r.a)(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){o=!0,c=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw c}}return n}}(e,t)||Object(o.a)()}n.d(t,"a",(function(){return c}))},2:function(e,t){!function(){e.exports=this.lodash}()},23:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},254:function(e,t,n){"use strict";var r=n(0),o=n(9),c=Object(r.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24"},Object(r.createElement)(o.Path,{d:"M10.2 3.28c3.53 0 6.43 2.61 6.92 6h2.08l-3.5 4-3.5-4h2.32c-.45-1.97-2.21-3.45-4.32-3.45-1.45 0-2.73.71-3.54 1.78L4.95 5.66C6.23 4.2 8.11 3.28 10.2 3.28zm-.4 13.44c-3.52 0-6.43-2.61-6.92-6H.8l3.5-4c1.17 1.33 2.33 2.67 3.5 4H5.48c.45 1.97 2.21 3.45 4.32 3.45 1.45 0 2.73-.71 3.54-1.78l1.71 1.95c-1.28 1.46-3.15 2.38-5.25 2.38z"}));t.a=c},3:function(e,t){!function(){e.exports=this.wp.components}()},32:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},33:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",(function(){return r}))},35:function(e,t,n){"use strict";function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},367:function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"isRequestingDownloadableBlocks",(function(){return b})),n.d(r,"getDownloadableBlocks",(function(){return d})),n.d(r,"hasInstallBlocksPermission",(function(){return f})),n.d(r,"getInstalledBlockTypes",(function(){return p}));var o={};n.r(o),n.d(o,"fetchDownloadableBlocks",(function(){return D})),n.d(o,"receiveDownloadableBlocks",(function(){return C})),n.d(o,"setInstallBlocksPermission",(function(){return L})),n.d(o,"downloadBlock",(function(){return T})),n.d(o,"installBlock",(function(){return I})),n.d(o,"uninstallBlock",(function(){return A})),n.d(o,"addInstalledBlockType",(function(){return R})),n.d(o,"removeInstalledBlockType",(function(){return M}));var c=n(4),a=n(18),l=n(6);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Object(c.combineReducers)({downloadableBlocks:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{results:{},filterValue:void 0,isRequestingDownloadableBlocks:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_DOWNLOADABLE_BLOCKS":return s({},e,{isRequestingDownloadableBlocks:!0});case"RECEIVE_DOWNLOADABLE_BLOCKS":return s({},e,{results:Object.assign({},e.results,Object(l.a)({},t.filterValue,t.downloadableBlocks)),isRequestingDownloadableBlocks:!1})}return e},blockManagement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{installedBlockTypes:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INSTALLED_BLOCK_TYPE":return s({},e,{installedBlockTypes:[].concat(Object(a.a)(e.installedBlockTypes),[t.item])});case"REMOVE_INSTALLED_BLOCK_TYPE":return s({},e,{installedBlockTypes:e.installedBlockTypes.filter((function(e){return e.name!==t.item.name}))})}return e},hasPermission:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"SET_INSTALL_BLOCKS_PERMISSION"===t.type?t.hasPermission:e}});function b(e){return e.downloadableBlocks.isRequestingDownloadableBlocks}function d(e,t){return e.downloadableBlocks.results[t]?e.downloadableBlocks.results[t]:[]}function f(e){return e.hasPermission}function p(e){return e.blockManagement.installedBlockTypes}var m=n(23),O=n.n(m),k=n(10),j=n(2),y=n(40),h=n.n(y);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var _=O.a.mark(B);function w(e){return{type:"API_FETCH",request:e}}var g=function(e,t,n){if(e){var r=document.querySelector('script[src="'.concat(e.src,'"]'));r&&r.parentNode.removeChild(r);var o=document.createElement("script");o.src="string"==typeof e?e:e.src,o.onload=t,o.onerror=n,document.body.appendChild(o)}},E=function(e){if(e){var t=document.createElement("link");t.rel="stylesheet",t.href="string"==typeof e?e:e.src,document.body.appendChild(t)}};function B(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",{type:"LOAD_ASSETS",assets:e});case 1:case"end":return t.stop()}}),_)}var x={SELECT:Object(c.createRegistryControl)((function(e){return function(t){var n,r=t.storeName,o=t.selectorName,c=t.args;return(n=e.select(r))[o].apply(n,Object(a.a)(c))}})),DISPATCH:Object(c.createRegistryControl)((function(e){return function(t){var n,r=t.storeName,o=t.dispatcherName,c=t.args;return(n=e.dispatch(r))[o].apply(n,Object(a.a)(c))}})),API_FETCH:function(e){var t=e.request;return h()(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t))},LOAD_ASSETS:function(e){var t=e.assets;return new Promise((function(e,n){if(Array.isArray(t)){var r=0;Object(j.forEach)(t,(function(t){null!==t.match(/\.js$/)?(r++,g(t,(function(){if(0===--r)return e(r)}),n)):E(t)}))}else g(t.editor_script,(function(){return e(0)}),n),E(t.style)}))}},S=O.a.mark(T),N=O.a.mark(I),P=O.a.mark(A);function D(){return{type:"FETCH_DOWNLOADABLE_BLOCKS"}}function C(e,t){return{type:"RECEIVE_DOWNLOADABLE_BLOCKS",downloadableBlocks:e,filterValue:t}}function L(e){return{type:"SET_INSTALL_BLOCKS_PERMISSION",hasPermission:e}}function T(e,t,n){return O.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(r.prev=0,e.assets.length){r.next=3;break}throw new Error("Block has no assets");case 3:return r.next=5,B(e.assets);case 5:if(!Object(k.getBlockTypes)().length){r.next=10;break}t(e),r.next=11;break;case 10:throw new Error("Unable to get block types");case 11:r.next=17;break;case 13:return r.prev=13,r.t0=r.catch(0),r.next=17,n(r.t0);case 17:case"end":return r.stop()}}),S,null,[[0,13]])}function I(e,t,n){var r,o,c;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.id,o=e.name,a.prev=1,a.next=4,w({path:"__experimental/block-directory/install",data:{slug:r},method:"POST"});case 4:if(!1!==(c=a.sent).success){a.next=7;break}throw new Error(c.errorMessage);case 7:return a.next=9,R({id:r,name:o});case 9:t(),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),n(a.t0);case 15:case"end":return a.stop()}}),N,null,[[1,12]])}function A(e,t,n){var r,o,c;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return r=e.id,o=e.name,a.prev=1,a.next=4,w({path:"__experimental/block-directory/uninstall",data:{slug:r},method:"DELETE"});case 4:if(!1!==(c=a.sent).success){a.next=7;break}throw new Error(c.errorMessage);case 7:return a.next=9,M({id:r,name:o});case 9:t(),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(1),n(a.t0);case 15:case"end":return a.stop()}}),P,null,[[1,12]])}function R(e){return{type:"ADD_INSTALLED_BLOCK_TYPE",item:e}}function M(e){return{type:"REMOVE_INSTALLED_BLOCK_TYPE",item:e}}var H={reducer:u,selectors:r,actions:o,controls:x,resolvers:{getDownloadableBlocks:O.a.mark((function e(t){var n,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,{type:"FETCH_DOWNLOADABLE_BLOCKS"};case 5:return e.next=7,w({path:"__experimental/block-directory/search?term=".concat(t)});case 7:return n=e.sent,r=n.map((function(e){return Object(j.mapKeys)(e,(function(e,t){return Object(j.camelCase)(t)}))})),e.next=11,C(r,t);case 11:e.next=18;break;case 13:if(e.prev=13,e.t0=e.catch(2),"rest_user_cannot_view"!==e.t0.code){e.next=18;break}return e.next=18,L(!1);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})),hasInstallBlocksPermission:O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w({path:"__experimental/block-directory/search?term="});case 3:return e.next=5,L(!0);case 5:e.next=12;break;case 7:if(e.prev=7,e.t0=e.catch(0),"rest_user_cannot_view"!==e.t0.code){e.next=12;break}return e.next=12,L(!1);case 12:case"end":return e.stop()}}),e,null,[[0,7]])}))}},K=(Object(c.registerStore)("core/block-directory",H),n(0)),V=n(53),F=n(19),q=n(5),W=n(8),z=n(1),U=n(3);var Y=function(e){var t=e.rating,n=.5*Math.round(t/.5),r=Math.floor(t),o=Math.ceil(t-r),c=5-(r+o);return Object(K.createElement)("div",{"aria-label":Object(z.sprintf)(Object(z.__)("%s out of 5 stars"),n)},Object(j.times)(r,(function(e){return Object(K.createElement)(U.Icon,{key:"full_stars_".concat(e),icon:"star-filled",size:16})})),Object(j.times)(o,(function(e){return Object(K.createElement)(U.Icon,{key:"half_stars_".concat(e),icon:"star-half",size:16})})),Object(j.times)(c,(function(e){return Object(K.createElement)(U.Icon,{key:"empty_stars_".concat(e),icon:"star-empty",size:16})})))},$=function(e){var t=e.rating,n=e.ratingCount;return Object(K.createElement)("div",{className:"block-directory-block-ratings"},Object(K.createElement)(Y,{rating:t}),Object(K.createElement)("span",{className:"block-directory-block-ratings__rating-count","aria-label":Object(z.sprintf)(Object(z._n)("%d total rating","%d total ratings",n),n)},"(",n,")"))};var G=function(e){var t=e.icon,n=e.title,r=e.rating,o=e.ratingCount,c=e.onClick;return Object(K.createElement)("div",{className:"block-directory-downloadable-block-header__row"},null!==t.match(/\.(jpeg|jpg|gif|png)(?:\?.*)?$/)?Object(K.createElement)("img",{src:t,alt:Object(z.sprintf)(Object(z.__)("%s block icon"),n)}):Object(K.createElement)("span",null,Object(K.createElement)(q.BlockIcon,{icon:t,showColors:!0})),Object(K.createElement)("div",{className:"block-directory-downloadable-block-header__column"},Object(K.createElement)("span",{role:"heading",className:"block-directory-downloadable-block-header__title"},n),Object(K.createElement)($,{rating:r,ratingCount:o})),Object(K.createElement)(U.Button,{isDefault:!0,onClick:function(e){e.preventDefault(),c()}},Object(z.__)("Add block")))};var J=function(e){var t=e.author,n=e.authorBlockCount,r=e.authorBlockRating;return Object(K.createElement)(K.Fragment,null,Object(K.createElement)("span",{className:"block-directory-downloadable-block-author-info__content-author"},Object(z.sprintf)(Object(z.__)("Authored by %s"),t)),Object(K.createElement)("span",{className:"block-directory-downloadable-block-author-info__content"},Object(z.sprintf)(Object(z._n)("This author has %d block, with an average rating of %d.","This author has %d blocks, with an average rating of %d.",n),n,r)))},Q=n(254);var X=function(e){var t=e.description,n=e.activeInstalls,r=e.humanizedUpdated;return Object(K.createElement)(K.Fragment,null,Object(K.createElement)("p",{className:"block-directory-downloadable-block-info__content"},t),Object(K.createElement)("div",{className:"block-directory-downloadable-block-info__row"},Object(K.createElement)("div",{className:"block-directory-downloadable-block-info__column"},Object(K.createElement)(U.Icon,{icon:"chart-line"}),Object(z.sprintf)(Object(z._n)("%d active installation","%d active installations",n),n)),Object(K.createElement)("div",{className:"block-directory-downloadable-block-info__column"},Object(K.createElement)(U.Icon,{icon:Q.a}),Object(z.sprintf)(Object(z.__)("Updated %s"),r))))};var Z=function(e){var t=e.item,n=e.onClick,r=t.icon,o=t.title,c=t.description,a=t.rating,l=t.activeInstalls,i=t.ratingCount,s=t.author,u=t.humanizedUpdated,b=t.authorBlockCount,d=t.authorBlockRating;return Object(K.createElement)("li",{className:"block-directory-downloadable-block-list-item"},Object(K.createElement)("article",{className:"block-directory-downloadable-block-list-item__panel"},Object(K.createElement)("header",{className:"block-directory-downloadable-block-list-item__header"},Object(K.createElement)(G,{icon:r,onClick:n,title:o,rating:a,ratingCount:i})),Object(K.createElement)("section",{className:"block-directory-downloadable-block-list-item__body"},Object(K.createElement)(X,{activeInstalls:l,description:c,humanizedUpdated:u})),Object(K.createElement)("footer",{className:"block-directory-downloadable-block-list-item__footer"},Object(K.createElement)(J,{author:s,authorBlockCount:b,authorBlockRating:d}))))};var ee=Object(W.compose)(Object(c.withDispatch)((function(e,t){var n=e("core/block-directory"),r=n.installBlock,o=n.downloadBlock,c=e("core/notices"),a=c.createErrorNotice,l=c.removeNotice,i=e("core/block-editor").removeBlocks,s=t.onSelect;return{downloadAndInstallBlock:function(e){var t=function(){var t=s(e);r(e,j.noop,(function n(){a(Object(z.__)("Block previews can't install."),{id:"block-install-error",actions:[{label:Object(z.__)("Retry"),onClick:function(){l("block-install-error"),r(e,j.noop,n)}},{label:Object(z.__)("Remove"),onClick:function(){l("block-install-error"),i(t.clientId),Object(k.unregisterBlockType)(e.name)}}]})}))};o(e,t,(function n(){a(Object(z.__)("Block previews can’t load."),{id:"block-download-error",actions:[{label:Object(z.__)("Retry"),onClick:function(){l("block-download-error"),o(e,t,n)}}]})}))}}})))((function(e){var t=e.items,n=e.onHover,r=void 0===n?j.noop:n,o=e.children,c=e.downloadAndInstallBlock;return(Object(K.createElement)("ul",{role:"list",className:"block-directory-downloadable-blocks-list"},t&&t.map((function(e){return Object(K.createElement)(Z,{key:e.id,className:Object(k.getBlockMenuDefaultClassName)(e.id),icons:e.icons,onClick:function(){c(e),r(null)},onFocus:function(){return r(e)},onMouseEnter:function(){return r(e)},onMouseLeave:function(){return r(null)},onBlur:function(){return r(null)},item:e})})),o))}));var te=Object(W.compose)([U.withSpokenMessages,Object(c.withSelect)((function(e,t){var n=t.filterValue,r=e("core/block-directory"),o=r.getDownloadableBlocks,c=r.hasInstallBlocksPermission,a=r.isRequestingDownloadableBlocks,l=c();return{downloadableItems:l?o(n):[],hasPermission:l,isLoading:a()}}))])((function(e){var t=e.downloadableItems,n=e.onSelect,r=e.onHover,o=e.hasPermission,c=e.isLoading,a=e.isWaiting,l=e.debouncedSpeak;return o?c||a?Object(K.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description has-no-results"},Object(K.createElement)(U.Spinner,null)):t.length?(l(Object(z.sprintf)(Object(z._n)("No blocks found in your library. We did find %d block available for download.","No blocks found in your library. We did find %d blocks available for download.",t.length),t.length)),Object(K.createElement)(K.Fragment,null,Object(K.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description"},Object(z.__)("No blocks found in your library. These blocks can be downloaded and installed:")),Object(K.createElement)(ee,{items:t,onSelect:n,onHover:r}))):Object(K.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description has-no-results"},Object(z.__)("No blocks found in your library.")):(l(Object(z.__)("No blocks found in your library. Please contact your site administrator to install new blocks.")),Object(K.createElement)("p",{className:"block-directory-downloadable-blocks-panel__description has-no-results"},Object(z.__)("No blocks found in your library."),Object(K.createElement)("br",null),Object(z.__)("Please contact your site administrator to install new blocks.")))}));var ne=function(){var e=Object(K.useState)(""),t=Object(F.a)(e,2),n=t[0],r=t[1],o=Object(j.debounce)(r,400);return Object(K.createElement)(q.__experimentalInserterMenuExtension,null,(function(e){var t=e.onSelect,r=e.onHover,c=e.filterValue;return e.hasItems||!c?null:(n!==c&&o(c),Object(K.createElement)(te,{onSelect:t,onHover:r,filterValue:n,isWaiting:c!==n}))}))};Object(V.registerPlugin)("block-directory",{render:function(){return Object(K.createElement)(ne,null)}})},4:function(e,t){!function(){e.exports=this.wp.data}()},40:function(e,t){!function(){e.exports=this.wp.apiFetch}()},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},53:function(e,t){!function(){e.exports=this.wp.plugins}()},6:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},8:function(e,t){!function(){e.exports=this.wp.compose}()},9:function(e,t){!function(){e.exports=this.wp.primitives}()}});