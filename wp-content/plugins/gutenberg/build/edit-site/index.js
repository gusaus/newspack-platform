this.wp=this.wp||{},this.wp.editSite=function(e){var t={};function n(r){if(t[r])return t[r].exports;var c=t[r]={i:r,l:!1,exports:{}};return e[r].call(c.exports,c,c.exports,n),c.l=!0,c.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)n.d(r,c,function(t){return e[t]}.bind(null,c));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=377)}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},12:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return r}))},18:function(e,t,n){"use strict";var r=n(33);var c=n(34);function o(e,t){return Object(r.a)(e)||function(e,t){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var n=[],r=!0,c=!1,o=void 0;try{for(var a,i=e[Symbol.iterator]();!(r=(a=i.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){c=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(c)throw o}}return n}}(e,t)||Object(c.a)()}n.d(t,"a",(function(){return o}))},19:function(e,t,n){"use strict";var r=n(32);function c(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||Object(r.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"a",(function(){return c}))},2:function(e,t){!function(){e.exports=this.lodash}()},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(37);function c(e,t){if(null==e)return{};var n,c,o=Object(r.a)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},23:function(e,t){!function(){e.exports=this.regeneratorRuntime}()},27:function(e,t){!function(){e.exports=this.wp.url}()},29:function(e,t){!function(){e.exports=this.wp.editor}()},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t){!function(){e.exports=this.wp.hooks}()},32:function(e,t,n){"use strict";function r(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}n.d(t,"a",(function(){return r}))},33:function(e,t,n){"use strict";function r(e){if(Array.isArray(e))return e}n.d(t,"a",(function(){return r}))},34:function(e,t,n){"use strict";function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}n.d(t,"a",(function(){return r}))},37:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}n.d(t,"a",(function(){return r}))},377:function(e,t,n){"use strict";n.r(t);var r=n(0),c=(n(90),n(66)),o=n(30),a=n(60);Object(o.addFilter)("editor.MediaUpload","core/edit-site/components/media-upload",(function(){return a.MediaUpload}));var i=n(18),l=n(4),u=n(3),s=n(41),p=n(5),b=n(9);function d(){var e=Object(l.useSelect)((function(e){return e("core/notices").getNotices().filter((function(e){return"snackbar"===e.type}))}),[]),t=Object(l.useDispatch)("core/notices").removeNotice;return Object(r.createElement)(u.SnackbarList,{className:"edit-site-notices",notices:e,onRemove:t})}var m=n(19),f=n(6),O=n(1),j=n(23),v=n.n(j),y=n(44),g=n(29);function E(e){var t=e.ids,n=e.onAddTemplateId,c=e.onRequestClose,o=e.isOpen,a=Object(l.useSelect)((function(e){var n=e("core").getEntityRecord;return t.reduce((function(e,t){var r=n("postType","wp_template",t);return e[r?r.slug:"loading"]=!0,e}),{})}),[t]),s=Object(l.useDispatch)("core").saveEntityRecord,p=Object(r.useState)(),b=Object(i.a)(p,2),d=b[0],m=b[1],f=Object(r.useState)(),j=Object(i.a)(f,2),E=j[0],h=j[1],_=Object(r.useCallback)((function(e){m(e);var t=Object(g.cleanForSlug)(e);h(a[t]?Object(O.__)("Template already exists, edit it instead."):t)}),[a]),w=Object(r.useCallback)(Object(y.a)(v.a.mark((function e(){var t,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(""),t=Object(g.cleanForSlug)(d),e.prev=2,e.next=5,s("postType","wp_template",{title:t,status:"publish",slug:t});case 5:r=e.sent,n(r.id),c(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),h(Object(O.__)("Error adding template."));case 13:case"end":return e.stop()}}),e,null,[[2,10]])}))),[d,c]);return!a.loading&&o&&Object(r.createElement)(u.Modal,{title:Object(O.__)("Add Template"),onRequestClose:c},Object(r.createElement)(u.TextControl,{label:Object(O.__)("Add Template"),placeholder:Object(O.__)("template-slug"),value:d,onChange:_,help:E}),Object(r.createElement)(u.Button,{isPrimary:!0,disabled:!d||a[Object(g.cleanForSlug)(d)],onClick:w},Object(O.__)("Add")))}function h(e){var t=e.template;return Object(r.createElement)("div",{className:"edit-site-template-switcher__label"},t.slug," ","auto-draft"!==t.status&&Object(r.createElement)(u.Tooltip,{text:Object(O.__)("Customized")},Object(r.createElement)("div",{className:"edit-site-template-switcher__label-customized-icon-container"},Object(r.createElement)(u.Icon,{icon:"marker",className:"edit-site-template-switcher__label-customized-icon-icon"}))))}function _(e){var t=e.ids,n=e.templatePartIds,c=e.activeId,o=e.isTemplatePart,a=e.onActiveIdChange,s=e.onActiveTemplatePartIdChange,p=e.onAddTemplateId,b=Object(l.useSelect)((function(e){var c=e("core").getEntityRecord;return{templates:t.map((function(e){var t=c("postType","wp_template",e);return{label:t?Object(r.createElement)(h,{template:t}):Object(O.__)("loading…"),value:e,slug:t?t.slug:Object(O.__)("loading…")}})),templateParts:n.map((function(e){var t=c("postType","wp_template_part",e);return{label:t?Object(r.createElement)(h,{template:t}):Object(O.__)("loading…"),value:e,slug:t?t.slug:Object(O.__)("loading…")}}))}}),[t,n]),d=b.templates,m=b.templateParts,f=Object(r.useState)(!1),j=Object(i.a)(f,2),v=j[0],y=j[1];return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(u.DropdownMenu,{icon:"layout",label:Object(O.__)("Switch Template"),toggleProps:{children:(o?m:d).find((function(e){return e.value===c})).slug}},(function(e){var t=e.onClose;return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(u.MenuGroup,{label:Object(O.__)("Templates")},Object(r.createElement)(u.MenuItemsChoice,{choices:d,value:o?void 0:c,onSelect:a}),Object(r.createElement)(u.MenuItem,{icon:"plus",onClick:function(){t(),y(!0)}},Object(O.__)("New"))),Object(r.createElement)(u.MenuGroup,{label:Object(O.__)("Template Parts")},Object(r.createElement)(u.MenuItemsChoice,{choices:m,value:o?c:void 0,onSelect:s})))})),Object(r.createElement)(E,{ids:t,onAddTemplateId:p,onRequestClose:Object(r.useCallback)((function(){return y(!1)}),[]),isOpen:v}))}var w=n(2);function S(){var e=G().settings,t=Object(s.useEntityProp)("postType",e.templateType,"status"),n=Object(i.a)(t,2)[1],c=Object(s.useEntityProp)("postType",e.templateType,"title"),o=Object(i.a)(c,2)[1],a=Object(s.useEntityProp)("postType",e.templateType,"slug"),p=Object(i.a)(a,1)[0];Object(r.useEffect)((function(){n("publish"),o(p)}),[p]);var b=Object(l.useSelect)((function(e){var t=e("core"),n=t.__experimentalGetDirtyEntityRecords,r=t.isSavingEntityRecord,c=n();return{isDirty:c.length>0,isSaving:Object(w.some)(c,(function(e){return r(e.kind,e.name,e.key)}))}})),d=b.isDirty,m=b.isSaving,f=!d||m,j=Object(r.useState)(!1),v=Object(i.a)(j,2),y=v[0],E=v[1],h=Object(r.useCallback)(E.bind(null,!0),[]),_=Object(r.useCallback)(E.bind(null,!1),[]);return Object(r.createElement)(r.Fragment,null,Object(r.createElement)(u.Button,{isPrimary:!0,"aria-disabled":f,disabled:f,isBusy:m,onClick:f?void 0:h},Object(O.__)("Update Design")),Object(r.createElement)(g.EntitiesSavedStates,{isOpen:y,onRequestClose:_}))}function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(){var e=G(),t=e.settings,n=e.setSettings,c=Object(r.useCallback)((function(e){return n((function(t){return I({},t,{templateId:e,templateType:"wp_template"})}))}),[]),o=Object(r.useCallback)((function(e){return n((function(t){return I({},t,{templateId:e,templateType:"wp_template_part"})}))}),[]),a=Object(r.useCallback)((function(e){return n((function(t){return I({},t,{templateId:e,templateIds:[].concat(Object(m.a)(t.templateIds),[e])})}))}),[]);return Object(r.createElement)("div",{className:"edit-site-header"},Object(r.createElement)("div",{className:"edit-site-header__toolbar"},Object(r.createElement)(_,{ids:t.templateIds,templatePartIds:t.templatePartIds,activeId:t.templateId,isTemplatePart:"wp_template_part"===t.templateType,onActiveIdChange:c,onActiveTemplatePartIdChange:o,onAddTemplateId:a}),Object(r.createElement)(p.BlockNavigationDropdown,null),Object(r.createElement)(p.ToolSelector,null)),Object(r.createElement)("div",{className:"edit-site-header__actions"},Object(r.createElement)(S,null)))}var T=Object(u.createSlotFill)("EditSiteSidebarInspector"),x=T.Slot,C=T.Fill;function A(){return Object(r.createElement)("div",{className:"edit-site-sidebar"},Object(r.createElement)(u.Panel,{header:Object(O.__)("Inspector")},Object(r.createElement)(x,{bubblesVirtually:!0})))}A.InspectorFill=C;var M=A,D=n(12),F=n(20),R=n(27),B=window.fetch;function N(e){var t=e.url,n=e.templateIds,c=e.activeId,o=e.onActiveIdChange,a=Object(r.useState)(),s=Object(i.a)(a,2),p=s[0],b=s[1];Object(r.useEffect)((function(){(function(){var e=Object(y.a)(v.a.mark((function e(){var r,c,o,a,i,u;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B(Object(R.addQueryArgs)(t,{"_wp-find-template":!0})).then((function(e){return e.json()}));case 3:if(r=e.sent,c=r.success,o=r.data,!c){e.next=12;break}null===(a=o.ID)&&(i=Object(l.select)("core"),u=i.getEntityRecord,a=n.map((function(e){return u("postType","wp_template",e)})).find((function(e){return e.slug===o.post_name})).id),b(a),e.next=13;break;case 12:throw new Error;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),b(null);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[t,n]);var d=Object(r.useMemo)((function(){return p&&p!==c?function(){return o(p)}:null}),[p,c,o]);return d&&Object(r.createElement)(u.Button,{icon:"welcome-write-blog",label:Object(O.__)("Edit Page Template"),onClick:d})}function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){Object(f.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function z(){var e=G(),t=e.settings,n=e.setSettings,c=Object(l.useSelect)((function(e){var t=e("core").canUser("create","media");return t||!1!==t}),[]),o=Object(r.useMemo)((function(){return c?q({},t,{mediaUpload:function(e){var n=e.onError,r=Object(F.a)(e,["onError"]);Object(a.uploadMedia)(q({wpAllowedMimeTypes:t.allowedMimeTypes,onError:function(e){var t=e.message;return n(t)}},r))}}):t}),[c,t]),u=Object(s.useEntityBlockEditor)("postType",o.templateType),b=Object(i.a)(u,3),d=b[0],m=b[1],f=b[2],O=Object(r.useCallback)((function(e){return n((function(t){return q({},t,{templateId:e,templateType:"wp_template"})}))}),[]);return Object(r.createElement)(p.BlockEditorProvider,{settings:o,value:d,onInput:m,onChange:f,useSubRegistry:!1},Object(r.createElement)(p.BlockEditorKeyboardShortcuts,null),Object(r.createElement)(p.__experimentalLinkControl.ViewerFill,null,Object(r.useCallback)((function(e){return Object(r.createElement)(N,Object(D.a)({},e,{templateIds:o.templateIds,activeId:o.templateId,onActiveIdChange:O}))}),[o.templateIds,o.templateId,O])),Object(r.createElement)(M.InspectorFill,null,Object(r.createElement)(p.BlockInspector,null)),Object(r.createElement)("div",{className:"editor-styles-wrapper edit-site-block-editor__editor-styles-wrapper"},Object(r.createElement)(p.WritingFlow,null,Object(r.createElement)(p.ObserveTyping,null,Object(r.createElement)(p.BlockList,{className:"edit-site-block-editor__block-list",renderAppender:p.ButtonBlockerAppender})))))}var L=Object(r.createContext)();function G(){return Object(r.useContext)(L)}var V=function(e){var t=e.settings,n=Object(b.useViewportMatch)("medium","<"),c=Object(r.useState)(t),o=Object(i.a)(c,2),a=o[0],m=o[1],f=Object(l.useSelect)((function(e){return e("core").getEntityRecord("postType",a.templateType,a.templateId)}),[a.templateType,a.templateId]),O=Object(r.useMemo)((function(){return{settings:a,setSettings:m}}),[a,m]);return f?Object(r.createElement)(u.SlotFillProvider,null,Object(r.createElement)(u.DropZoneProvider,null,Object(r.createElement)(s.EntityProvider,{kind:"root",type:"site"},Object(r.createElement)(s.EntityProvider,{kind:"postType",type:a.templateType,id:a.templateId},Object(r.createElement)(L.Provider,{value:O},Object(r.createElement)(u.FocusReturnProvider,null,Object(r.createElement)(p.__experimentalEditorSkeleton,{sidebar:!n&&Object(r.createElement)(M,null),header:Object(r.createElement)(k,null),content:Object(r.createElement)(r.Fragment,null,Object(r.createElement)(d,null),Object(r.createElement)(u.Popover.Slot,{name:"block-toolbar"}),Object(r.createElement)(z,null))}),Object(r.createElement)(u.Popover.Slot,null))))))):null};function K(e,t){Object(c.registerCoreBlocks)(),Object(c.__experimentalRegisterExperimentalCoreBlocks)(t),Object(r.render)(Object(r.createElement)(V,{settings:t}),document.getElementById(e))}n.d(t,"initialize",(function(){return K}))},4:function(e,t){!function(){e.exports=this.wp.data}()},41:function(e,t){!function(){e.exports=this.wp.coreData}()},44:function(e,t,n){"use strict";function r(e,t,n,r,c,o,a){try{var i=e[o](a),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(r,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,o){var a=e.apply(t,n);function i(e){r(a,c,o,i,l,"next",e)}function l(e){r(a,c,o,i,l,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return c}))},5:function(e,t){!function(){e.exports=this.wp.blockEditor}()},6:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},60:function(e,t){!function(){e.exports=this.wp.mediaUtils}()},66:function(e,t){!function(){e.exports=this.wp.blockLibrary}()},9:function(e,t){!function(){e.exports=this.wp.compose}()},90:function(e,t){!function(){e.exports=this.wp.notices}()}});