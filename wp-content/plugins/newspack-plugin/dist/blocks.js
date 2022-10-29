!function(){"use strict";var e,t={930:function(e,t,n){n.r(t),n.d(t,{blocks:function(){return b}});var a={};n.r(a),n.d(a,{icon:function(){return g},metadata:function(){return m},name:function(){return w},settings:function(){return h}});var l=window.wp.blocks,r=n(9307),s=window.wp.blockEditor,i=n(5609),c=n(2819),o=n(6989),p=n.n(o);const u=n(5736).__,d=[{label:u("Initial","newspack"),value:"initial"},{label:u("Registration Success","newspack"),value:"registration"},{label:u("Login Success","newspack"),value:"login"}];var m=JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"newspack/reader-registration","title":"Reader Registration","category":"newspack","description":"Register a reader with their email.","textdomain":"newspack","attributes":{"title":{"type":"string"},"description":{"type":"string"},"placeholder":{"type":"string","default":"Email Address"},"label":{"type":"string","default":"Sign up","required":true},"privacyLabel":{"type":"string","default":"By signing up, you agree to our Terms and Conditions."},"newsletterSubscription":{"type":"boolean","default":false},"displayListDescription":{"type":"boolean","default":true},"hideSubscriptionInput":{"type":"boolean","default":false},"newsletterTitle":{"type":"string","default":"Newsletters"},"newsletterLabel":{"type":"string","default":"Subscribe to our newsletter"},"lists":{"type":"array","default":[],"items":{"type":"string"}},"haveAccountLabel":{"type":"string","default":"Already have an account?"},"signInLabel":{"type":"string","default":"Sign in"},"signedInLabel":{"type":"string","default":"An account was already registered with this email. Please check your inbox for an authentication link."}},"supports":{"html":false,"align":true,"multiple":false}}');const g=(0,r.createElement)(i.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,r.createElement)(i.Path,{d:"M18.5 8V5.5H16V4h2.5V1.5H20V4h2.5v1.5H20V8h-1.5ZM16.75 17v-2A2.75 2.75 0 0 0 14 12.25h-4A2.75 2.75 0 0 0 7.25 15v2h1.5v-2c0-.69.56-1.25 1.25-1.25h4c.69 0 1.25.56 1.25 1.25v2h1.5Z"}),(0,r.createElement)(i.Path,{fillRule:"evenodd",clipRule:"evenodd",d:"M14.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.5 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"})),{name:w}=m,h={icon:{src:g,foreground:"#36f"},edit:function(e){let{setAttributes:t,attributes:{title:n,description:a,placeholder:l,label:o,privacyLabel:m,newsletterSubscription:g,displayListDescription:w,hideSubscriptionInput:h,newsletterTitle:b,newsletterLabel:v,haveAccountLabel:k,signInLabel:f,signedInLabel:E,lists:_,className:y}}=e;const N=(0,s.useBlockProps)(),[S,x]=(0,r.useState)(d[0].value),T=(0,s.useInnerBlocksProps)({},{renderAppender:s.InnerBlocks.ButtonBlockAppender,template:[["core/paragraph",{align:"center",content:u("Thank you for registering!","newspack")}]]}),[C,L]=(0,r.useState)(!1),[O,I]=(0,r.useState)({}),j=()=>{newspack_blocks.has_newsletters&&g&&(L(!0),p()({path:"/newspack-newsletters/v1/lists_config"}).then(I).finally((()=>L(!1))))};return(0,r.useEffect)(j,[]),(0,r.useEffect)(j,[g]),(0,r.useEffect)((()=>{const e=Object.keys(O);!e.length||_.length&&(0,c.intersection)(_,e).length||t({lists:[Object.keys(O)[0]]})}),[O]),(0,r.createElement)(r.Fragment,null,(0,r.createElement)(s.InspectorControls,null,(0,r.createElement)(i.PanelBody,{title:u("Form settings","newspack")},(0,r.createElement)(i.TextControl,{label:u("Input placeholder","newspack"),value:l,disabled:C,onChange:e=>t({placeholder:e})})),newspack_blocks.has_newsletters&&(0,r.createElement)(i.PanelBody,{title:u("Newsletter Subscription","newspack")},(0,r.createElement)(i.ToggleControl,{label:u("Enable newsletter subscription","newspack"),checked:!!g,disabled:C,onChange:()=>t({newsletterSubscription:!g})}),g&&(0,r.createElement)(r.Fragment,null,C&&(0,r.createElement)(i.Spinner,null),!C&&!Object.keys(O).length&&(0,r.createElement)("div",{style:{marginBottom:"1.5rem"}},(0,r.createElement)(i.Notice,{isDismissible:!1,status:"error"},u("You must enable lists for subscription.","newspack-newsletters"))),(0,r.createElement)(i.ToggleControl,{label:u("Display list description","newspack-newsletters"),checked:w,disabled:C,onChange:()=>t({displayListDescription:!w})}),(0,r.createElement)(i.ToggleControl,{label:u("Hide newsletter selection and always subscribe","newspack"),checked:h,disabled:C||1!==_.length,onChange:()=>t({hideSubscriptionInput:!h})}),_.length<1&&(0,r.createElement)("div",{style:{marginBottom:"1.5rem"}},(0,r.createElement)(i.Notice,{isDismissible:!1,status:"error"},u("You must select at least one list.","newspack-newsletters"))),Object.keys(O).length>0&&(0,r.createElement)("p",null,u("Lists","newspack"),":"),Object.keys(O).map((e=>(0,r.createElement)(i.ToggleControl,{key:e,label:O[e].title,checked:_.includes(e),disabled:C,onChange:()=>{_.includes(e)?t({lists:_.filter((t=>t!==e))}):t({lists:_.concat(e)})}}))),(0,r.createElement)("p",null,(0,r.createElement)("a",{href:newspack_blocks.newsletters_url},u("Manage your subscription lists","newspack-newsletters")))))),(0,r.createElement)("div",N,(0,r.createElement)("div",{className:"newspack-registration__state-bar"},(0,r.createElement)("span",null,u("Edited State","newspack")),(0,r.createElement)("div",null,d.map((e=>(0,r.createElement)(i.Button,{key:e.value,"data-is-active":S===e.value,onClick:()=>x(e.value)},e.label))))),"initial"===S&&(0,r.createElement)("div",{className:`newspack-registration ${y}`},(0,r.createElement)("form",{onSubmit:e=>e.preventDefault()},(0,r.createElement)("div",{className:"newspack-registration__have-account"},(0,r.createElement)(s.RichText,{onChange:e=>t({haveAccountLabel:e}),placeholder:u("Already have an account?","newspack"),value:k,tagName:"span"})," ",(0,r.createElement)("a",{href:"/my-account",onClick:e=>e.preventDefault()},(0,r.createElement)(s.RichText,{onChange:e=>t({signInLabel:e}),placeholder:u("Sign In","newspack"),value:f,tagName:"span"}))),(0,r.createElement)("div",{className:"newspack-registration__header"},(0,r.createElement)(s.RichText,{onChange:e=>t({title:e}),placeholder:u("Add title","newspack"),value:n,tagName:"h2"})),(0,r.createElement)(s.RichText,{onChange:e=>t({description:e}),placeholder:u("Add description","newspack"),value:a,tagName:"p"}),(0,r.createElement)("div",{className:"newspack-registration__form-content"},1===_.length&&h||!g||!_.length?null:(0,r.createElement)("div",{className:"newspack-reader__lists"},(null==_?void 0:_.length)>1&&(0,r.createElement)(s.RichText,{onChange:e=>t({newsletterTitle:e}),placeholder:u("Newsletters title…","newspack"),value:b,tagName:"h3"}),(0,r.createElement)("ul",null,_.map((e=>{var n,a;return(0,r.createElement)("li",{key:e},(0,r.createElement)("span",{className:"newspack-reader__lists__checkbox"},(0,r.createElement)("input",{type:"checkbox",checked:!0,readOnly:!0})),(0,r.createElement)("span",{className:"newspack-reader__lists__details"},(0,r.createElement)("span",{className:"newspack-reader__lists__label"},(0,r.createElement)("span",{className:"newspack-reader__lists__title"},1===_.length?(0,r.createElement)(s.RichText,{onChange:e=>t({newsletterLabel:e}),placeholder:u("Subscribe to our newsletter","newspack"),value:v,tagName:"span"}):null===(n=O[e])||void 0===n?void 0:n.title),w&&(0,r.createElement)("span",{className:"newspack-reader__lists__description"},null===(a=O[e])||void 0===a?void 0:a.description))))})))),(0,r.createElement)("div",{className:"newspack-registration__main"},(0,r.createElement)("div",null,(0,r.createElement)("div",{className:"newspack-registration__inputs"},(0,r.createElement)("input",{type:"email",placeholder:l}),(0,r.createElement)("button",{type:"submit"},(0,r.createElement)(s.RichText,{onChange:e=>t({label:e}),placeholder:u("Sign up","newspack"),value:o,tagName:"span"}))),newspack_blocks.has_google_oauth&&(0,r.createElement)("div",{className:"newspack-reader__logins"},(0,r.createElement)("div",{className:"newspack-reader__logins__separator"},(0,r.createElement)("div",null),(0,r.createElement)("div",null,u("OR","newspack")),(0,r.createElement)("div",null)),(0,r.createElement)("button",{className:"newspack-reader__logins__google"},(0,r.createElement)("span",{dangerouslySetInnerHTML:{__html:newspack_blocks.google_logo_svg}}),(0,r.createElement)("span",null,u("Sign in with Google","newspack")))),(0,r.createElement)("div",{className:"newspack-registration__response"})),(0,r.createElement)("div",{className:"newspack-registration__help-text"},(0,r.createElement)(s.RichText,{onChange:e=>t({privacyLabel:e}),placeholder:u("Terms & Conditions statement…","newspack"),value:m,tagName:"p"})))))),"registration"===S&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{className:"newspack-registration__icon"}),(0,r.createElement)("div",T)),"login"===S&&(0,r.createElement)(r.Fragment,null,(0,r.createElement)("div",{className:"newspack-registration__icon"}),(0,r.createElement)(s.RichText,{align:"center",onChange:e=>t({signedInLabel:e}),placeholder:u("Logged in message…","newspack"),value:E,tagName:"p"}))))},save:()=>(0,r.createElement)("div",s.useInnerBlocksProps.save(s.useBlockProps.save()))},b=[a],v=["newspack/reader-registration"],k=e=>{if(!e)return;const{metadata:t,settings:n,name:a}=e;v.includes(a)&&!newspack_blocks.has_reader_activation||(0,l.registerBlockType)({name:a,...t},n)};for(const e of b)k(e)},2819:function(e){e.exports=window.lodash},6989:function(e){e.exports=window.wp.apiFetch},5609:function(e){e.exports=window.wp.components},9307:function(e){e.exports=window.wp.element},5736:function(e){e.exports=window.wp.i18n}},n={};function a(e){var l=n[e];if(void 0!==l)return l.exports;var r=n[e]={exports:{}};return t[e].call(r.exports,r,r.exports,a),r.exports}a.m=t,e=[],a.O=function(t,n,l,r){if(!n){var s=1/0;for(p=0;p<e.length;p++){n=e[p][0],l=e[p][1],r=e[p][2];for(var i=!0,c=0;c<n.length;c++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[c])}))?n.splice(c--,1):(i=!1,r<s&&(s=r));if(i){e.splice(p--,1);var o=l();void 0!==o&&(t=o)}}return t}r=r||0;for(var p=e.length;p>0&&e[p-1][2]>r;p--)e[p]=e[p-1];e[p]=[n,l,r]},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,{a:t}),t},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=346,function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e}(),function(){var e={346:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var l,r,s=n[0],i=n[1],c=n[2],o=0;if(s.some((function(t){return 0!==e[t]}))){for(l in i)a.o(i,l)&&(a.m[l]=i[l]);if(c)var p=c(a)}for(t&&t(n);o<s.length;o++)r=s[o],a.o(e,r)&&e[r]&&e[r][0](),e[s[o]]=0;return a.O(p)},n=self.webpackChunkwebpack=self.webpackChunkwebpack||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var l=a.O(void 0,[351],(function(){return a(930)}));l=a.O(l);var r=window;for(var s in l)r[s]=l[s];l.__esModule&&Object.defineProperty(r,"__esModule",{value:!0})}();