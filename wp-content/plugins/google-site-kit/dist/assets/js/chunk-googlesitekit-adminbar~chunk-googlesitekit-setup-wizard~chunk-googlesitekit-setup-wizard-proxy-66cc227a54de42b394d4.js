(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{140:function(e,t,n){"use strict";(function(e){var a=n(5),i=n.n(a),l=n(6),o=n.n(l),c=n(7),r=n.n(c),s=n(8),u=n.n(s),d=n(9),m=n.n(d),g=n(2),h=n.n(g),p=n(32),f=n(17),_=n(26),v=n(180),k=n.n(v),y=n(1),b=n(0),E=function(t){function n(){var e;return i()(this,n),(e=r()(this,u()(n).call(this))).state={attributes:[Object(b.__)("Audience overview","google-site-kit"),Object(b.__)("Top pages","google-site-kit"),Object(b.__)("Top acquisition sources","google-site-kit"),Object(b.__)("AdSense & Analytics metrics for top pages","google-site-kit")]},e.dialogRef=Object(y.createRef)(),e}return m()(n,t),o()(n,[{key:"componentDidMount",value:function(){new _.d(this.dialogRef.current)}},{key:"render",value:function(){var t=this.props,n=t.dialogActive,a=t.handleDialog,i=t.title,l=t.provides,o=t.handleConfirm,c=t.subtitle,r=t.confirmButton,s=t.dependentModules;return e.createElement("div",{ref:this.dialogRef,className:"mdc-dialog ".concat(n?"mdc-dialog--open":""),role:"alertdialog","aria-modal":"true","aria-labelledby":"remove-module-dialog","aria-describedby":"remove-module-dialog-description","aria-hidden":n?"false":"true",tabIndex:"-1"},e.createElement("div",{className:"mdc-dialog__scrim"}," "),e.createElement(k.a,{active:n},e.createElement("div",null,e.createElement("div",{className:"mdc-dialog__container"},e.createElement("div",{className:"mdc-dialog__surface"},i&&e.createElement("h2",{id:"remove-module-dialog",className:"mdc-dialog__title"},i),c&&e.createElement("p",{className:"mdc-dialog__lead"},c),e.createElement("section",{id:"remove-module-dialog-description",className:"mdc-dialog__content"},e.createElement("ul",{className:"mdc-list mdc-list--underlined mdc-list--non-interactive"},l&&l.map((function(t){return e.createElement("li",{className:"mdc-list-item",key:t},e.createElement("span",{className:"mdc-list-item__text"},t))})))),s&&e.createElement("p",{className:"mdc-dialog__dependecies"},e.createElement("strong",null,Object(b.__)("Note: ","google-site-kit")),s),e.createElement("footer",{className:"mdc-dialog__actions"},e.createElement(p.a,{onClick:o,danger:!0},r||Object(b.__)("Disconnect","google-site-kit")),e.createElement(f.a,{className:"mdc-dialog__cancel-button",onClick:function(){return a()},inherit:!0},Object(b.__)("Cancel","google-site-kit"))))))))}}]),n}(y.Component);E.propTypes={dialogActive:h.a.bool,handleDialog:h.a.func,handleConfirm:h.a.func.isRequired,title:h.a.string,description:h.a.string,confirmButton:h.a.string},E.defaultProps={dialogActive:!1,handleDialog:null,title:null,description:null,confirmButton:null},t.a=E}).call(this,n(1))},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(5),i=n.n(a),l=n(6),o=n.n(l),c=n(7),r=n.n(c),s=n(8),u=n.n(s),d=n(9),m=n.n(d),g=n(78),h=n(1),p=function(e){function t(e){var n;return i()(this,t),(n=r()(this,u()(t).call(this,e))).el=document.createElement("div"),n.root=document.querySelector(".googlesitekit-plugin")||document.body,n}return m()(t,e),o()(t,[{key:"componentDidMount",value:function(){this.root.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.root.removeChild(this.el)}},{key:"render",value:function(){return Object(g.createPortal)(this.props.children,this.el)}}]),t}(h.Component)},181:function(e,t,n){"use strict";var a=n(5),i=n.n(a),l=n(6),o=n.n(l),c=n(7),r=n.n(c),s=n(8),u=n.n(s),d=n(9),m=n.n(d),g=n(59),h=n(1),p=function(e){function t(){return i()(this,t),r()(this,u()(t).apply(this,arguments))}return m()(t,e),o()(t,[{key:"render",value:function(){return null}}]),t}(h.Component);t.a=Object(g.a)("googlesitekit.ErrorNotification")(p)},182:function(e,t,n){"use strict";(function(e,a){var i=n(11),l=n.n(i),o=n(5),c=n.n(o),r=n(6),s=n.n(r),u=n(7),d=n.n(u),m=n(8),g=n.n(m),h=n(15),p=n.n(h),f=n(9),_=n.n(f),v=n(140),k=n(32),y=n(183),b=n(150),E=n(3),C=n(1),N=n(0),L=function(t){function n(e){var t;return c()(this,n),(t=d()(this,g()(n).call(this,e))).state={dialogActive:!1,menuOpen:!1},t.handleMenu=t.handleMenu.bind(p()(t)),t.handleMenuClose=t.handleMenuClose.bind(p()(t)),t.handleMenuItemSelect=t.handleMenuItemSelect.bind(p()(t)),t.handleDialog=t.handleDialog.bind(p()(t)),t.handleDialogClose=t.handleDialogClose.bind(p()(t)),t.handleUnlinkConfirm=t.handleUnlinkConfirm.bind(p()(t)),t.menuButtonRef=Object(C.createRef)(),t.menuRef=Object(C.createRef)(),t}return _()(n,t),s()(n,[{key:"componentDidMount",value:function(){e.addEventListener("mouseup",this.handleMenuClose),e.addEventListener("keyup",this.handleMenuClose),e.addEventListener("keyup",this.handleDialogClose)}},{key:"componentWillUnmount",value:function(){e.removeEventListener("mouseup",this.handleMenuClose),e.removeEventListener("keyup",this.handleMenuClose),e.removeEventListener("keyup",this.handleDialogClose)}},{key:"handleMenu",value:function(){var e=this.state.menuOpen;this.setState({menuOpen:!e})}},{key:"handleMenuClose",value:function(e){("keyup"!==e.type||27!==e.keyCode)&&"mouseup"!==e.type||this.menuButtonRef.current.buttonRef.current.contains(e.target)||this.menuRef.current.menuRef.current.contains(e.target)||this.setState({menuOpen:!1})}},{key:"handleMenuItemSelect",value:function(t,n){var a=e.googlesitekit.admin.proxyPermissionsURL;if("keydown"===n.type&&(13===n.keyCode||32===n.keyCode)||"click"===n.type)switch(t){case 0:this.handleDialog();break;case 1:e.location.assign(a);break;default:this.handleMenu()}}},{key:"handleDialog",value:function(){this.setState((function(e){return{dialogActive:!e.dialogActive,menuOpen:!1}}))}},{key:"handleDialogClose",value:function(e){27===e.keyCode&&this.setState({dialogActive:!1,menuOpen:!1})}},{key:"handleUnlinkConfirm",value:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({dialogActive:!1}),Object(E.c)(),document.location=Object(E.n)("googlesitekit-splash",{googlesitekit_context:"revoked"});case 3:case"end":return e.stop()}}),null,this)}},{key:"render",value:function(){var t=e.googlesitekit.admin,n=t.userData,i=n.email,l=void 0===i?"":i,o=n.picture,c=void 0===o?"":o,r=t.proxyPermissionsURL,s=this.state,u=s.dialogActive,d=s.menuOpen;return a.createElement(C.Fragment,null,a.createElement("div",{className:"googlesitekit-dropdown-menu mdc-menu-surface--anchor"},a.createElement(k.a,{ref:this.menuButtonRef,className:"googlesitekit-header__dropdown mdc-button--dropdown",text:!0,onClick:this.handleMenu,icon:c?a.createElement("i",{className:"mdc-button__icon","aria-hidden":"true"},a.createElement("img",{className:"mdc-button__icon--image",src:c,alt:Object(N.__)("User Avatar","google-site-kit")})):void 0,ariaHaspopup:"menu",ariaExpanded:d,ariaControls:"user-menu"},l),a.createElement(y.a,{ref:this.menuRef,menuOpen:d,menuItems:[Object(N.__)("Disconnect","google-site-kit")].concat(r?[Object(N.__)("Manage sites...","google-site-kit")]:[]),onSelected:this.handleMenuItemSelect,id:"user-menu"})),a.createElement(b.a,null,a.createElement(v.a,{dialogActive:u,handleConfirm:this.handleUnlinkConfirm,handleDialog:this.handleDialog,title:Object(N.__)("Disconnect","google-site-kit"),subtitle:Object(N.__)("Disconnecting Site Kit by Google will remove your access to all services. After disconnecting, you will need to re-authorize to restore service.","google-site-kit"),confirmButton:Object(N.__)("Disconnect","google-site-kit"),provides:[]})))}}]),n}(C.Component);t.a=L}).call(this,n(14),n(1))},183:function(e,t,n){"use strict";(function(e){var a=n(5),i=n.n(a),l=n(6),o=n.n(l),c=n(7),r=n.n(c),s=n(8),u=n.n(s),d=n(9),m=n.n(d),g=n(26),h=n(2),p=n.n(h),f=n(1),_=function(t){function n(e){var t;return i()(this,n),(t=r()(this,u()(n).call(this,e))).menuRef=Object(f.createRef)(),t}return m()(n,t),o()(n,[{key:"componentDidMount",value:function(){var e=this.props.menuOpen;this.menu=new g.f(this.menuRef.current),this.menu.open=e,this.menu.setDefaultFocusState(1)}},{key:"componentDidUpdate",value:function(e){var t=this.props.menuOpen;t!==e.menuOpen&&(this.menu.open=t)}},{key:"render",value:function(){var t=this.props,n=t.menuOpen,a=t.menuItems,i=t.onSelected,l=t.id;return e.createElement("div",{className:"mdc-menu mdc-menu-surface",ref:this.menuRef},e.createElement("ul",{id:l,className:"mdc-list",role:"menu","aria-hidden":!n,"aria-orientation":"vertical",tabIndex:"-1"},a.map((function(t,n){return e.createElement("li",{key:n,className:"mdc-list-item",role:"menuitem",onClick:i.bind(null,n),onKeyDown:i.bind(null,n)},e.createElement("span",{className:"mdc-list-item__text"},t))}))))}}]),n}(f.Component);_.propTypes={menuOpen:p.a.bool.isRequired,menuItems:p.a.array.isRequired,id:p.a.string.isRequired},t.a=_}).call(this,n(1))},184:function(e,t,n){"use strict";(function(e){var a=n(5),i=n.n(a),l=n(6),o=n.n(l),c=n(7),r=n.n(c),s=n(8),u=n.n(s),d=n(9),m=n.n(d),g=n(2),h=n.n(g),p=n(17),f=n(1),_=function(t){function n(){return i()(this,n),r()(this,u()(n).apply(this,arguments))}return m()(n,t),o()(n,[{key:"render",value:function(){var t=this.props,n=t.title,a=t.ctaLabel,i=t.ctaLink;return e.createElement("header",{className:"googlesitekit-layout__header"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},n&&e.createElement("div",{className:"\n\t\t\t\t\t\t\t\t\tmdc-layout-grid__cell\n\t\t\t\t\t\t\t\t\t".concat(i?"mdc-layout-grid__cell--span-6-desktop":"mdc-layout-grid__cell--span-12-desktop","\n\t\t\t\t\t\t\t\t\tmdc-layout-grid__cell--align-middle\n\t\t\t\t\t\t\t\t\t").concat(i?"":"mdc-layout-grid__cell--span-8-tablet","\n\t\t\t\t\t\t\t\t\tmdc-layout-grid__cell--span-4-phone\n\t\t\t\t\t\t\t\t")},e.createElement("h3",{className:"googlesitekit-subheading-1 googlesitekit-layout__header-title"},n)),i&&e.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--span-6-desktop mdc-layout-grid__cell--span-4-phone mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--align-right-tablet "},e.createElement(p.a,{href:i,external:!0,inherit:!0},a)))))}}]),n}(f.Component);_.propTypes={title:h.a.string,ctaLabel:h.a.string,ctaLink:h.a.string},_.defaultProps={title:"",ctaLabel:"",ctaLink:""},t.a=_}).call(this,n(1))},185:function(e,t,n){"use strict";(function(e){var a=n(5),i=n.n(a),l=n(6),o=n.n(l),c=n(7),r=n.n(c),s=n(8),u=n.n(s),d=n(9),m=n.n(d),g=n(2),h=n.n(g),p=n(57),f=n(1),_=function(t){function n(){return i()(this,n),r()(this,u()(n).apply(this,arguments))}return m()(n,t),o()(n,[{key:"render",value:function(){var t=this.props,n=t.ctaLabel,a=t.ctaLink,i=t.footerContent;return e.createElement("footer",{className:"googlesitekit-layout__footer"},e.createElement("div",{className:"mdc-layout-grid"},e.createElement("div",{className:"mdc-layout-grid__inner"},e.createElement("div",{className:"mdc-layout-grid__cell mdc-layout-grid__cell--span-12"},a&&n&&e.createElement(p.a,{className:"googlesitekit-data-block__source",name:n,href:a,external:!0}),i))))}}]),n}(f.Component);_.propTypes={ctaLabel:h.a.string,ctaLink:h.a.string},t.a=_}).call(this,n(1))},20:function(e,t,n){"use strict";(function(e){var a=n(5),i=n.n(a),l=n(6),o=n.n(l),c=n(7),r=n.n(c),s=n(8),u=n.n(s),d=n(9),m=n.n(d),g=n(2),h=n.n(g),p=n(184),f=n(185),_=n(1),v=function(t){function n(){return i()(this,n),r()(this,u()(n).apply(this,arguments))}return m()(n,t),o()(n,[{key:"render",value:function(){var t=this.props,n=t.header,a=t.footer,i=t.children,l=t.title,o=t.headerCtaLabel,c=t.headerCtaLink,r=t.footerCtaLabel,s=t.footerCtaLink,u=t.footerContent,d=t.className,m=t.fill,g=t.relative;return e.createElement("div",{className:"\n\t\t\t\tgooglesitekit-layout\n\t\t\t\t".concat(d&&d,"\n\t\t\t\t").concat(m?"googlesitekit-layout--fill":"","\n\t\t\t\t").concat(g?"googlesitekit-layout--relative":"","\n\t\t\t")},n&&e.createElement(p.a,{title:l,ctaLabel:o,ctaLink:c}),i,a&&e.createElement(f.a,{ctaLabel:r,ctaLink:s,footerContent:u}))}}]),n}(_.Component);v.propTypes={header:h.a.bool,footer:h.a.bool,children:h.a.node.isRequired,title:h.a.string,headerCtaLabel:h.a.string,headerCtaLink:h.a.string,footerCtaLabel:h.a.string,footerCtaLink:h.a.string,footerContent:h.a.node,className:h.a.string,fill:h.a.bool,relative:h.a.bool},v.defaultProps={header:!1,footer:!1,title:"",headerCtaLabel:"",headerCtaLink:"",footerCtaLabel:"",footerCtaLink:"",footerContent:null,className:"",fill:!1,relative:!1},t.a=v}).call(this,n(1))},66:function(e,t,n){"use strict";(function(e,a){var i=n(5),l=n.n(i),o=n(6),c=n.n(o),r=n(7),s=n.n(r),u=n(8),d=n.n(u),m=n(9),g=n.n(m),h=n(181),p=n(130),f=n(182),_=n(1),v=function(t){function n(){return l()(this,n),s()(this,d()(n).apply(this,arguments))}return g()(n,t),c()(n,[{key:"render",value:function(){var t=e.googlesitekit.setup.isAuthenticated;return a.createElement(_.Fragment,null,a.createElement("header",{className:"googlesitekit-header"},a.createElement("section",{className:"mdc-layout-grid"},a.createElement("div",{className:"mdc-layout-grid__inner"},a.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--span-3-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop "},a.createElement(p.a,null)),a.createElement("div",{className:" mdc-layout-grid__cell mdc-layout-grid__cell--align-middle mdc-layout-grid__cell--align-right-phone mdc-layout-grid__cell--span-1-phone mdc-layout-grid__cell--span-4-tablet mdc-layout-grid__cell--span-6-desktop "},t&&a.createElement(f.a,null))))),a.createElement(h.a,null))}}]),n}(_.Component);t.a=v}).call(this,n(14),n(1))}}]);