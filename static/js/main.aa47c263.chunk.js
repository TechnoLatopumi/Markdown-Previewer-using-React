(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{26:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),s=n(14),c=n.n(s),r=n(6),o=n(7),l=n(3),h=n(10),u=n(9),d=n(13),b=n(4),j=n(15),p=n(8),m=n(1);function f(e){return Object(m.jsxs)("header",{children:[Object(m.jsx)(b.a,{icon:p.a,className:"icon"}),Object(m.jsx)("h1",{className:"section-title",children:e.title}),Object(m.jsx)(b.a,{icon:j.a,className:"icon icon-action",onClick:e.handleResize})]})}var O=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={fullScreen:!1},i.handleResize=i.handleResize.bind(Object(l.a)(i)),i}return Object(o.a)(n,[{key:"handleResize",value:function(){this.setState({fullScreen:!this.state.fullScreen})}},{key:"render",value:function(){var e=this.props.title.toLowerCase();return Object(m.jsxs)("section",{className:this.state.fullScreen?"".concat(e," ").concat(e,"--fullscreen"):e,children:[Object(m.jsx)(f,{title:this.props.title,handleResize:this.handleResize}),this.props.component]})}}]),n}(a.a.Component),v=(n(26),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={input:""},i.handleChange=i.handleChange.bind(Object(l.a)(i)),i.createMarkup=i.createMarkup.bind(Object(l.a)(i)),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.setState({input:'# Welcome to my React Markdown Previewer!\n## This is a subheading!\n### This is my Project for Front End Libraries Certification\n\nTesting a line break\nhere is the second line\n\nHere\'s an example of a [link](https://github.com/TechnoLatopumi)\n\nThis is some _inline_ sample code `<div>Hello World!</div>`\n\n```\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == "```" && lastLine == "```") {\n    return multiLineCode;\n  }\n}\n```\n\nHow about some **list items** next:\n\n- List item 1\n-- Sub list item\n- List item 2\n\n> Look, a block quote!\n\n### Last _but not least_:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)'})}},{key:"handleChange",value:function(e){this.setState({input:e.target.value})}},{key:"createMarkup",value:function(){return console.log(Object(d.marked)(this.state.input)),{__html:Object(d.marked)(this.state.input,{breaks:!0})}}},{key:"render",value:function(){return Object(m.jsxs)(a.a.Fragment,{children:[Object(m.jsx)(O,{component:Object(m.jsx)("textarea",{id:"editor",value:this.state.input,onChange:this.handleChange}),title:"Editor"}),Object(m.jsx)(O,{component:Object(m.jsx)("div",{id:"preview",dangerouslySetInnerHTML:this.createMarkup()}),title:"Previewer"}),Object(m.jsxs)("footer",{id:"footer",children:[Object(m.jsx)("a",{href:"https://github.com/TechnoLatopumi",children:Object(m.jsx)(b.a,{icon:p.b})}),"Made by Tegar D Pradana"]})]})}}]),n}(a.a.Component));c.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(v,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.aa47c263.chunk.js.map