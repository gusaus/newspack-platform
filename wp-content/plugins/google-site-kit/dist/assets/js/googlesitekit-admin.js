!function(e){var t={};function __webpack_require__(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,__webpack_require__),r.l=!0,r.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,n){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(__webpack_require__.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)__webpack_require__.d(n,r,function(t){return e[t]}.bind(null,r));return n},__webpack_require__.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=347)}({0:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(Object(n));"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t);var o=n(88),a=n(84),u=n.n(a),s=n(74),c=n.n(s);n.d(t,"setLocaleData",(function(){return d})),n.d(t,"__",(function(){return __})),n.d(t,"_x",(function(){return _x})),n.d(t,"_n",(function(){return _n})),n.d(t,"_nx",(function(){return _nx})),n.d(t,"sprintf",(function(){return build_module_sprintf}));var l={"":{plural_forms:function(e){return 1===e?0:1}}},p=u()(console.error),f=new o.a({});function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default";f.data[t]=i({},l,f.data[t],e),f.data[t][""]=i({},l[""],f.data[t][""])}function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"default",t=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;return f.data[e]||d(void 0,e),f.dcnpgettext(e,t,n,r,i)}function __(e,t){return _(t,void 0,e)}function _x(e,t,n){return _(n,t,e)}function _n(e,t,n,r){return _(r,void 0,e,t,n)}function _nx(e,t,n,r,i){return _(i,r,e,t,n)}function build_module_sprintf(e){try{for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return c.a.sprintf.apply(c.a,[e].concat(n))}catch(t){return p("sprintf error: \n\n"+t.toString()),e}}},137:function(e,t){e.exports=function(e){if(Array.isArray(e))return e}},138:function(e,t){e.exports=function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,u=e[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{r||null==u.return||u.return()}finally{if(i)throw o}}return n}},139:function(e,t){e.exports=function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}},14:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},347:function(e,t,n){"use strict";n.r(t),function(e){var t=n(86);if("toplevel_page_googlesitekit-dashboard"!==e.pagenow&&"site-kit_page_googlesitekit-splash"!==e.pagenow&&"admin_page_googlesitekit-splash"!==e.pagenow&&e.localStorage){var r=e.localStorage.getItem("googlesitekit::total-notifications")||0;Object(t.a)(r)}var i=document.querySelector("#wp-admin-bar-logout a");i||(i=document.querySelector(".sidebar__me-signout button")),i&&i.addEventListener("click",(function(){Object(t.b)()}))}.call(this,n(14))},53:function(e,t,n){var r=n(137),i=n(138),o=n(139);e.exports=function(e,t){return r(e)||i(e,t)||o()}},74:function(e,t,n){!function(){"use strict";var e={not_string:/[^s]/,not_bool:/[^t]/,not_type:/[^T]/,not_primitive:/[^v]/,number:/[diefg]/,numeric_arg:/[bcdiefguxX]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[+-]/};function sprintf(t){return function sprintf_format(t,n){var r,i,o,a,u,s,c,l,p,f=1,d=t.length,_="";for(i=0;i<d;i++)if("string"==typeof t[i])_+=t[i];else if("object"==typeof t[i]){if((a=t[i]).keys)for(r=n[f],o=0;o<a.keys.length;o++){if(null==r)throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"',a.keys[o],a.keys[o-1]));r=r[a.keys[o]]}else r=a.param_no?n[a.param_no]:n[f++];if(e.not_type.test(a.type)&&e.not_primitive.test(a.type)&&r instanceof Function&&(r=r()),e.numeric_arg.test(a.type)&&"number"!=typeof r&&isNaN(r))throw new TypeError(sprintf("[sprintf] expecting number but found %T",r));switch(e.number.test(a.type)&&(l=r>=0),a.type){case"b":r=parseInt(r,10).toString(2);break;case"c":r=String.fromCharCode(parseInt(r,10));break;case"d":case"i":r=parseInt(r,10);break;case"j":r=JSON.stringify(r,null,a.width?parseInt(a.width):0);break;case"e":r=a.precision?parseFloat(r).toExponential(a.precision):parseFloat(r).toExponential();break;case"f":r=a.precision?parseFloat(r).toFixed(a.precision):parseFloat(r);break;case"g":r=a.precision?String(Number(r.toPrecision(a.precision))):parseFloat(r);break;case"o":r=(parseInt(r,10)>>>0).toString(8);break;case"s":r=String(r),r=a.precision?r.substring(0,a.precision):r;break;case"t":r=String(!!r),r=a.precision?r.substring(0,a.precision):r;break;case"T":r=Object.prototype.toString.call(r).slice(8,-1).toLowerCase(),r=a.precision?r.substring(0,a.precision):r;break;case"u":r=parseInt(r,10)>>>0;break;case"v":r=r.valueOf(),r=a.precision?r.substring(0,a.precision):r;break;case"x":r=(parseInt(r,10)>>>0).toString(16);break;case"X":r=(parseInt(r,10)>>>0).toString(16).toUpperCase()}e.json.test(a.type)?_+=r:(!e.number.test(a.type)||l&&!a.sign?p="":(p=l?"+":"-",r=r.toString().replace(e.sign,"")),s=a.pad_char?"0"===a.pad_char?"0":a.pad_char.charAt(1):" ",c=a.width-(p+r).length,u=a.width&&c>0?s.repeat(c):"",_+=a.align?p+r+u:"0"===s?p+u+r:u+p+r)}return _}(function sprintf_parse(t){if(n[t])return n[t];var r,i=t,o=[],a=0;for(;i;){if(null!==(r=e.text.exec(i)))o.push(r[0]);else if(null!==(r=e.modulo.exec(i)))o.push("%");else{if(null===(r=e.placeholder.exec(i)))throw new SyntaxError("[sprintf] unexpected placeholder");if(r[2]){a|=1;var u=[],s=r[2],c=[];if(null===(c=e.key.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(u.push(c[1]);""!==(s=s.substring(c[0].length));)if(null!==(c=e.key_access.exec(s)))u.push(c[1]);else{if(null===(c=e.index_access.exec(s)))throw new SyntaxError("[sprintf] failed to parse named argument key");u.push(c[1])}r[2]=u}else a|=2;if(3===a)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");o.push({placeholder:r[0],param_no:r[1],keys:r[2],sign:r[3],pad_char:r[4],align:r[5],width:r[6],precision:r[7],type:r[8]})}i=i.substring(r[0].length)}return n[t]=o}(t),arguments)}function vsprintf(e,t){return sprintf.apply(null,[e].concat(t||[]))}var n=Object.create(null);t.sprintf=sprintf,t.vsprintf=vsprintf,"undefined"!=typeof window&&(window.sprintf=sprintf,window.vsprintf=vsprintf,"function"==typeof define&&define.amd&&define((function(){return{sprintf:sprintf,vsprintf:vsprintf}})))}()},84:function(e,t,n){e.exports=function(e,t){var n,r,i,o=0;function a(){var t,a,u=r,s=arguments.length;e:for(;u;){if(u.args.length===arguments.length){for(a=0;a<s;a++)if(u.args[a]!==arguments[a]){u=u.next;continue e}return u!==r&&(u===i&&(i=u.prev),u.prev.next=u.next,u.next&&(u.next.prev=u.prev),u.next=r,u.prev=null,r.prev=u,r=u),u.val}u=u.next}for(t=new Array(s),a=0;a<s;a++)t[a]=arguments[a];return u={args:t,val:e.apply(null,t)},r?(r.prev=u,u.next=r):i=u,o===n?(i=i.prev).next=null:o++,r=u,u.val}return t&&t.maxSize&&(n=t.maxSize),a.clear=function(){r=null,i=null,o=0},a}},86:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return c}));var r=n(53),i=n.n(r),o=n(0),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=null,n=null,r=document.querySelector("#toplevel_page_googlesitekit-dashboard .googlesitekit-notifications-counter"),i=document.querySelector("#wp-admin-bar-google-site-kit .googlesitekit-notifications-counter");if(r&&i)return!1;if(t=document.querySelector("#toplevel_page_googlesitekit-dashboard .wp-menu-name"),n=document.querySelector("#wp-admin-bar-google-site-kit .ab-item"),null===t&&null===n)return!1;var a=document.createElement("span");a.setAttribute("class","googlesitekit-notifications-counter update-plugins count-".concat(e));var u=document.createElement("span");u.setAttribute("class","plugin-count"),u.setAttribute("aria-hidden","true"),u.textContent=e;var s=document.createElement("span");return s.setAttribute("class","screen-reader-text"),s.textContent=Object(o.sprintf)(Object(o._n)("%d notification","%d notifications",e,"google-site-kit"),e),a.appendChild(u),a.appendChild(s),t&&null===r&&t.appendChild(a),n&&null===i&&n.appendChild(a),a},u=function(){e.localStorage&&e.localStorage.clear(),e.sessionStorage&&e.sessionStorage.clear()},s=function(e){for(var t=location.search.substr(1).split("&"),n={},r=0;r<t.length;r++)n[t[r].split("=")[0]]=decodeURIComponent(t[r].split("=")[1]);return e?n.hasOwnProperty(e)?decodeURIComponent(n[e].replace(/\+/g," ")):"":n},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:location,n=new URL(t.href);if(e)return n.searchParams&&n.searchParams.get?n.searchParams.get(e):s(e);var r={},o=!0,a=!1,u=void 0;try{for(var c,l=n.searchParams.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var p=i()(c.value,2),f=p[0],d=p[1];r[f]=d}}catch(e){a=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(a)throw u}}return r}}).call(this,n(14))},88:function(e,t,n){"use strict";var r,i,o,a;r={"(":9,"!":8,"*":7,"/":7,"%":7,"+":6,"-":6,"<":5,"<=":5,">":5,">=":5,"==":4,"!=":4,"&&":3,"||":2,"?":1,"?:":1},i=["(","?"],o={")":["("],":":["?","?:"]},a=/<=|>=|==|!=|&&|\|\||\?:|\(|!|\*|\/|%|\+|-|<|>|\?|\)|:/;var u={"!":function(e){return!e},"*":function(e,t){return e*t},"/":function(e,t){return e/t},"%":function(e,t){return e%t},"+":function(e,t){return e+t},"-":function(e,t){return e-t},"<":function(e,t){return e<t},"<=":function(e,t){return e<=t},">":function(e,t){return e>t},">=":function(e,t){return e>=t},"==":function(e,t){return e===t},"!=":function(e,t){return e!==t},"&&":function(e,t){return e&&t},"||":function(e,t){return e||t},"?:":function(e,t,n){if(e)throw t;return n}};function s(e){var t=function(e){for(var t,n,u,s,c=[],l=[];t=e.match(a);){for(n=t[0],(u=e.substr(0,t.index).trim())&&c.push(u);s=l.pop();){if(o[n]){if(o[n][0]===s){n=o[n][1]||n;break}}else if(i.indexOf(s)>=0||r[s]<r[n]){l.push(s);break}c.push(s)}o[n]||l.push(n),e=e.substr(t.index+n.length)}return(e=e.trim())&&c.push(e),c.concat(l.reverse())}(e);return function(e){return function(e,t){var n,r,i,o,a,s,c=[];for(n=0;n<e.length;n++){if(a=e[n],o=u[a]){for(r=o.length,i=Array(r);r--;)i[r]=c.pop();try{s=o.apply(null,i)}catch(e){return e}}else s=t.hasOwnProperty(a)?t[a]:+a;c.push(s)}return c[0]}(t,e)}}n.d(t,"a",(function(){return Tannin}));var c={contextDelimiter:"",onMissingKey:null};function Tannin(e,t){var n;for(n in this.data=e,this.pluralForms={},this.options={},c)this.options[n]=void 0!==t&&n in t?t[n]:c[n]}Tannin.prototype.getPluralForm=function(e,t){var n,r,i,o,a=this.pluralForms[e];return a||("function"!=typeof(i=(n=this.data[e][""])["Plural-Forms"]||n["plural-forms"]||n.plural_forms)&&(r=function(e){var t,n,r;for(t=e.split(";"),n=0;n<t.length;n++)if(0===(r=t[n].trim()).indexOf("plural="))return r.substr(7)}(n["Plural-Forms"]||n["plural-forms"]||n.plural_forms),o=s(r),i=function(e){return+o({n:e})}),a=this.pluralForms[e]=i),a(t)},Tannin.prototype.dcnpgettext=function(e,t,n,r,i){var o,a,u;return o=void 0===i?0:this.getPluralForm(e,i),a=n,t&&(a=t+this.options.contextDelimiter+n),(u=this.data[e][a])&&u[o]?u[o]:(this.options.onMissingKey&&this.options.onMissingKey(n,e),0===o?n:r)}}});