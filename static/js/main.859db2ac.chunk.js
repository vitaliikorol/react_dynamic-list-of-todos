(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{10:function(t,e,n){t.exports=n(17)},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(5),s=n.n(r),c=(n(15),n(3)),u=n(6),i=n(7),l=n(9),d=n(8),m=n(1),p=n.n(m),f=n(2),b=function(){var t=Object(f.a)(p.a.mark((function t(e){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch(e).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),y=function(){var t=Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b("https://mate-academy.github.io/react_dynamic-list-of-todos/api/todos.json"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),h=function(){var t=Object(f.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",b("https://mate-academy.github.io/react_dynamic-list-of-todos/api/users.json"));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),_=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(u.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={todos:[],users:[],dataLoaded:!1},t.sortByTitle=function(){t.setState((function(t){return{todos:Object(c.a)(t.todos.sort((function(t,e){return t.title.localeCompare(e.title)})))}}))},t.sortByName=function(){t.setState((function(t){return{todos:Object(c.a)(t.todos.sort((function(t,e){return t.userId-e.userId})))}}))},t.sortByCompletion=function(){t.setState((function(t){return{todos:Object(c.a)(t.todos.sort((function(t,e){return Number(t.completed)-Number(e.completed)})).reverse())}}))},t.loadTodosFromSrver=function(){h().then((function(e){t.setState({users:e})})),y().then((function(e){t.setState({todos:e})})),t.setState({dataLoaded:!0})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"button__wrapper"},o.a.createElement("button",{type:"button",className:"button button__load",style:{display:this.state.dataLoaded?"none":"initial"},onClick:this.loadTodosFromSrver},"Load Todos from Server"),o.a.createElement("button",{type:"button",style:{display:this.state.dataLoaded?"initial":"none"},className:"button button__sort",onClick:this.sortByTitle},"Sort by title"),o.a.createElement("button",{type:"button",style:{display:this.state.dataLoaded?"initial":"none"},className:"button button__sort",onClick:this.sortByName},"Sort by name"),o.a.createElement("button",{type:"button",style:{display:this.state.dataLoaded?"initial":"none"},className:"button button__sort",onClick:this.sortByCompletion},"Sort by completion")),o.a.createElement("div",{className:"todo__list"},this.state.todos.map((function(e){return o.a.createElement("div",{className:"todo"},o.a.createElement("span",{className:"todo__user"},"Executor:"," ","".concat(t.state.users.filter((function(t){return t.id===e.userId}))[0].name)),o.a.createElement("span",{className:"todo__title"},e.title),o.a.createElement("span",{className:e.completed?"todo__completed":"todo__not-completed"},"Completed:"," ","".concat(e.completed)))}))))}}]),n}(o.a.PureComponent),v=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Dynamic list of TODOs"),o.a.createElement(_,null))};s.a.render(o.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.859db2ac.chunk.js.map