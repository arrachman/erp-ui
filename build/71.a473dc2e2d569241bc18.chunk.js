(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{d6661bfc647c78ed7360:function(t,e,o){"use strict";o.r(e);var n,r=o("8af190b70a6bc55c6f1b"),c=o.n(r),a=(o("8a2d1b95e05b6a321e74"),o("6938d226fd372a75cbf9")),i=o("ab4cb61bcb2dc161defb"),f=o("d7dd51e1bf6bfc2c9c3d"),l=o("41dbdc0b587d468aa65c"),d=o("0d7f0986bcd2f33d8a2a"),s=o("1037a6e0d5914309f74c"),b=o.n(s),u=o("bf98e136023688c7a106"),p=o("4dd2a92e69dcbe1bab10"),y=o("eebbc9f977e6e78f5b57");function m(t){return(m="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e,o,r){n||(n="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var c=t&&t.defaultProps,a=arguments.length-3;if(e||0===a||(e={children:void 0}),e&&c)for(var i in c)void 0===e[i]&&(e[i]=c[i]);else e||(e=c||{});if(1===a)e.children=r;else if(a>1){for(var f=new Array(a),l=0;l<a;l++)f[l]=arguments[l+3];e.children=f}return{$$typeof:n,type:t,key:void 0===o?null:""+o,ref:null,props:e,_owner:null}}function v(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function w(t){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function O(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var j=function(t){function e(){var t,o,n,r,c,a,i;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);for(var f=arguments.length,l=new Array(f),d=0;d<f;d++)l[d]=arguments[d];return n=this,r=(t=w(e)).call.apply(t,[this].concat(l)),o=!r||"object"!==m(r)&&"function"!==typeof r?O(n):r,c=O(O(o)),i=function(t,e){(0,o.props.submit)(t,e)},(a="submitContact")in c?Object.defineProperty(c,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):c[a]=i,o}var o,n,r;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(e,c.a.Component),o=e,(n=[{key:"componentDidMount",value:function(){(0,this.props.fetchData)(l.a)}},{key:"render",value:function(){var t=b.a.name+" - Contact",e=b.a.desc,o=this.props,n=o.classes,r=o.dataContact,c=o.itemSelected,a=o.showDetail,i=o.hideDetail,f=o.avatarInit,l=o.open,s=o.showMobileDetail,u=o.add,y=o.edit,m=o.close,v=o.remove,w=o.favorite,g=o.keyword,O=o.search,j=o.closeNotif,C=o.messageNotif;return h("div",{},void 0,h(d.Helmet,{},void 0,h("title",{},void 0,t),h("meta",{name:"description",content:e}),h("meta",{property:"og:title",content:t}),h("meta",{property:"og:description",content:e}),h("meta",{property:"twitter:title",content:t}),h("meta",{property:"twitter:description",content:e})),h(p.jb,{close:function(){return j()},message:C}),h("div",{className:n.root},void 0,h(p.s,{addFn:!0,total:r.size,addContact:u,clippedRight:!0,itemSelected:c,dataContact:r,showDetail:a,search:O,keyword:g}),h(p.r,{showMobileDetail:s,hideDetail:i,dataContact:r,itemSelected:c,edit:y,remove:v,favorite:w})),h(p.c,{addContact:u,openForm:l,closeForm:m,submit:this.submitContact,avatarInit:f}))}}])&&v(o.prototype,n),r&&v(o,r),e}(),C=Object(f.connect)(function(t){return{force:t,avatarInit:t.getIn(["contact","avatarInit"]),dataContact:t.getIn(["contact","contactList"]),itemSelected:t.getIn(["contact","selectedIndex"]),keyword:t.getIn(["contact","keywordValue"]),open:t.getIn(["contact","openFrm"]),showMobileDetail:t.getIn(["contact","showMobileDetail"]),messageNotif:t.getIn(["contact","notifMsg"])}},function(t){return{fetchData:Object(i.bindActionCreators)(u.f,t),showDetail:Object(i.bindActionCreators)(u.j,t),hideDetail:function(){return t(u.g)},submit:Object(i.bindActionCreators)(u.k,t),edit:Object(i.bindActionCreators)(u.e,t),add:function(){return t(u.a)},close:function(){return t(u.c)},remove:Object(i.bindActionCreators)(u.h,t),favorite:Object(i.bindActionCreators)(u.b,t),search:Object(i.bindActionCreators)(u.i,t),closeNotif:function(){return t(u.d)}}})(j);e.default=Object(a.withStyles)(y.a)(C)}}]);