(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a,o=n(0),i=n.n(o),r=n(9),l=n.n(r),c=(n(16),n(2)),s=n(3),p=n(5),u=n(4),y=n(6),d=n(1);function m(e,t,n){var a=n.value;if("function"!==typeof a)throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(typeof a));var o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(t)||"function"!==typeof a)return a;var n=a.bind(this);return o=!0,Object.defineProperty(this,t,{configurable:!0,get:function(){return n},set:function(e){a=e,delete this[t]}}),o=!1,n},set:function(e){a=e}}}function h(){return 1===arguments.length?function(e){var t;return"undefined"!==typeof Reflect&&"function"===typeof Reflect.ownKeys?t=Reflect.ownKeys(e.prototype):(t=Object.getOwnPropertyNames(e.prototype),"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(e.prototype)))),t.forEach(function(t){if("constructor"!==t){var n=Object.getOwnPropertyDescriptor(e.prototype,t);"function"===typeof n.value&&Object.defineProperty(e.prototype,t,m(e,t,n))}}),e}.apply(void 0,arguments):m.apply(void 0,arguments)}var g,f=(a=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(p.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).props=void 0,n}return Object(y.a)(t,e),Object(s.a)(t,[{key:"handleDelete",value:function(){this.props.handleDelete(this.props.index)}},{key:"render",value:function(){var e=this.props.content;return i.a.createElement("div",{className:"item-container"},i.a.createElement("li",null,i.a.createElement("span",{className:"item-title"},"[\u7b2c ",this.props.index," \u9879]:"),i.a.createElement("span",{className:"item-content"},e)),i.a.createElement("li",null,i.a.createElement("button",{onClick:this.handleDelete,className:"btn btn-danger"},"\u5220\u9664")))}}]),t}(o.Component),Object(d.a)(a.prototype,"handleDelete",[h],Object.getOwnPropertyDescriptor(a.prototype,"handleDelete"),a.prototype),a),b=n(7),I=(n(17),{list:window.localStorage.getItem("list")||""}),v=(g=function(e){function t(e){var n;Object(c.a)(this,t),(n=Object(p.a)(this,Object(u.a)(t).call(this,e))).state=void 0,n.keypress=function(e){return 13===e.which?n.updateView():""};var a=0===I.list.length?[]:I.list.split(",");return n.state={list:a,inputValue:""},n}return Object(y.a)(t,e),Object(s.a)(t,[{key:"updateView",value:function(){var e=this;this.state.inputValue&&this.setState({list:[].concat(Object(b.a)(this.state.list),[this.state.inputValue]),inputValue:""},function(){return localStorage.setItem("list",e.state.list)})}},{key:"handleChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"deleteItem",value:function(e){var t=Object(b.a)(this.state.list);t.splice(e,1),this.setState({list:t},function(){return localStorage.setItem("list",t.join(","))})}},{key:"getAllItems",value:function(){var e=this;return this.state.list.map(function(t,n){return i.a.createElement(f,{handleDelete:e.deleteItem,key:n,index:n,content:t})})}},{key:"render",value:function(){return i.a.createElement(o.Fragment,null,i.a.createElement("div",{className:"App"},i.a.createElement("img",{className:"image",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",alt:"logo"}),i.a.createElement("h4",{className:"red"},"TodoList \u70b9\u51fb\u4e8b\u9879\u5373\u53ef\u5220\u9664"),i.a.createElement("h5",null,"\u4f7f\u7528localStorage\u8fdb\u884c\u6570\u636e\u7f13\u5b58"),i.a.createElement("ul",{className:"flex-container"},i.a.createElement("input",{type:"text",value:this.state.inputValue,onKeyPress:this.keypress.bind(this),onChange:this.handleChange}),i.a.createElement("button",{className:"btn btn-default",onClick:this.updateView},"\u6dfb\u52a0")),i.a.createElement("ul",null," ",this.getAllItems()," ")))}}]),t}(o.Component),Object(d.a)(g.prototype,"updateView",[h],Object.getOwnPropertyDescriptor(g.prototype,"updateView"),g.prototype),Object(d.a)(g.prototype,"handleChange",[h],Object.getOwnPropertyDescriptor(g.prototype,"handleChange"),g.prototype),Object(d.a)(g.prototype,"deleteItem",[h],Object.getOwnPropertyDescriptor(g.prototype,"deleteItem"),g.prototype),Object(d.a)(g.prototype,"getAllItems",[h],Object.getOwnPropertyDescriptor(g.prototype,"getAllItems"),g.prototype),g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.cb7b2c84.chunk.js.map