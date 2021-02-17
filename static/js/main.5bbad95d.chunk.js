(this["webpackJsonpreact-min-calc"]=this["webpackJsonpreact-min-calc"]||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r,o,c,i,u,a,s=n(0),l=n(10),d=n.n(l),g=(n(19),n(20),n(8)),b=n(2),h=n.n(b),f=n(3),x=n(4),p=n(14),v=x.a.div(r||(r=Object(f.a)(["\n  width: 380px;\n  height: 620px;\n  background-color: lightblue;\n  border: 1px solid black;\n  margin: 0 auto;\n"]))),j=x.a.div(o||(o=Object(f.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 120px;\n  background-color: #fff;\n  border: 1px solid black;\n  margin: 20px;\n"]))),F=x.a.div(c||(c=Object(f.a)(["\n  margin-top: 20px;\n"]))),O=Object(x.a)(p.a)(i||(i=Object(f.a)(["\n  color: grey;\n"]))),k=x.a.button(u||(u=Object(f.a)(["\n  width: ",";\n  height: 70px;\n  background-color: ",";\n  font-size: 20px;\n  border-color: ",";\n  border-radius: 5px;\n  cursor: pointer;\n  margin: 10px;\n\n  &:active, &:focus {\n      outline: none;\n  }\n"])),(function(e){return e.width?e.width:"70px"}),(function(e){return e.backgroundColor?e.backgroundColor:"#fff"}),(function(e){return e.borderColor&&e.borderColor})),C=x.a.input.attrs((function(e){return{value:e.value,type:"text",readOnly:!0}}))(a||(a=Object(f.a)(["\n  width: 95%;\n  height:",";\n  border: 0;\n  font-size:",";\n  color:",";\n  font-weight: 500;\n  text-align: right; \n  letter-spacing: 5px;\n\n  &:active, &:focus {\n    outline: none;\n}\n"])),(function(e){return e.height&&e.height}),(function(e){return e.fontSize&&e.fontSize}),(function(e){return e.color&&e.color})),m=n(1),N=function(){var e=Object(s.useState)(""),t=Object(g.a)(e,2),n=t[0],r=t[1],o=Object(s.useState)(""),c=Object(g.a)(o,2),i=c[0],u=c[1],a=[{value:"AC",code:46,backgroundColor:"lightgrey"},{value:Object(m.jsx)(O,{}),code:8},{value:"%",code:48},{value:"/",code:111,borderColor:"orange"},{value:"7",code:103},{value:"8",code:104},{value:"9",code:105},{value:"*",code:106,borderColor:"orange"},{value:"4",code:100},{value:"5",code:101},{value:"6",code:102},{value:"-",code:109,borderColor:"orange"},{value:"1",code:97},{value:"2",code:98},{value:"3",code:99},{value:"+",code:107,borderColor:"orange"},{value:".",code:110},{value:"0",code:96},{value:"=",code:187,backgroundColor:"orange",borderColor:"black",width:"160px"}],l=function(e,t){var o="",c=n+t;if((/\+\+/.test(c)||/\-\-/.test(c)||/\*\*/.test(c)||/\/\//.test(c)||/\%\%/.test(c)||/\.\./.test(c)||"00"===c.slice(0,2))&&(c=c.substring(0,n.toString().length)),"."===c.slice(0,1)&&(c=c.replace(/\./,"0.")),"="!==t&&8!==e)switch(r(c),!0){case/\+/.test(c.substring(0,c.length-1)):var a=c.split("+").reduce((function(e,t){return+e+ +t}),0);/\./.test(a)?u(a.toFixed(2)):u(a),Number.isNaN(a)&&(o=c.charAt(c.length-1),a=c.substring(0,c.length-1).split("+").reduce((function(e,t){return+e+ +t}),0),/\./.test(a)?(r(a.toFixed(2)+o),u(a.toFixed(2))):(r(a+o),u(a)));break;case/\-/.test(c.substring(0,c.length-1)):var s=h.a.reduce(c.split("-"),(function(e,t){return e-t}));/\./.test(s)?u(s.toFixed(2)):u(s),Number.isNaN(s)&&(o=c.charAt(c.length-1),s=h.a.reduce(c.substring(0,c.length-1).split("-"),(function(e,t){return e-t})),/\./.test(s)?(r(s.toFixed(2)+o),u(s.toFixed(2))):(r(s+o),u(s)));break;case/\*/.test(c.substring(0,c.length-1)):var l=c.split("*").filter((function(e){return 0!==e.length})).reduce((function(e,t){return e*t}),1);/\./.test(l)?u(l.toFixed(2)):u(l),Number.isNaN(l)&&(o=c.charAt(c.length-1),l=c.substring(0,c.length-1).split("*").reduce((function(e,t){return e*t}),1),/\./.test(l)?(r(l.toFixed(2)+o),u(l.toFixed(2))):(r(l+o),u(l)));break;case/\//.test(c.substring(0,c.length-1)):var d=h.a.reduce(c.split("/").filter((function(e){return 0!==e.length})),(function(e,t){return e/t}));/\./.test(d)?u(d.toFixed(2)):u(d),Number.isNaN(d)&&(o=c.charAt(c.length-1),d=h.a.reduce(c.substring(0,c.length-1).split("/"),(function(e,t){return e/t})),/\./.test(d)?(r(d.toFixed(2)+o),u(d.toFixed(2))):(r(d+o),u(d)));break;case/\%/.test(c.substring(0,c.length-1)):var g=h.a.reduce(c.split("%"),(function(e,t){return e*(t/100)}));/\./.test(g)?u(g.toFixed(2)):u(g),Number.isNaN(g)&&(o=c.charAt(c.length-1),g=h.a.reduce(c.substring(0,c.length-1).split("%"),(function(e,t){return e*(t/100)})),/\./.test(g)?(r(g.toFixed(2)+o),u(g.toFixed(2))):(r(g+o),u(g)))}else 0!==n.length&&0===i.length?(r(n),u("")):(r(i),u(""));if("AC"===t&&(r(""),u("")),8===e){r(n.toString().substring(0,n.toString().length-1));var b=n.toString().substring(0,n.toString().length-1);switch(u(b),!0){case/\+/.test(b):var f=b.split("+").reduce((function(e,t){return+e+ +t}),0);/\./.test(f)?u(f.toFixed(2)):(u(f),console.log(b,"newInputValue-after-1"));break;case/\-/.test(b):var x=h.a.reduce(b.split("-"),(function(e,t){return e-t}));/\./.test(x)?u(x.toFixed(2)):u(x);break;case/\*/.test(b):var p=b.split("*").filter((function(e){return 0!==e.length})).reduce((function(e,t){return e*t}),1);/\./.test(p)?u(p.toFixed(2)):u(p);break;case/\//.test(b):var v=h.a.reduce(b.split("/").filter((function(e){return 0!==e.length})),(function(e,t){return e/t}));/\./.test(v)?u(v.toFixed(2)):u(v);break;case/\%/.test(b):var j=h.a.reduce(b.split("%"),(function(e,t){return e*(t/100)}));/\./.test(j)?u(j.toFixed(2)):u(j)}}},d=function(e){a.forEach((function(t){e.keyCode===t.code&&l(t.code,t.value)}))};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"Calculator"}),Object(m.jsxs)(v,{children:[Object(m.jsx)(j,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)(C,{height:"40px",fontSize:"25px",value:n}),Object(m.jsx)(C,{height:"30px",fontSize:"18px",color:"grey",value:i})]})}),Object(m.jsx)(F,{children:a.map((function(e){return Object(m.jsx)(k,{onClick:function(){return l(e.code,e.value)},onKeyDown:d,width:e.width,backgroundColor:e.backgroundColor,borderColor:e.borderColor,children:e.value},e.code)}))})]})]})};var w=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(N,{})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),r(e),o(e),c(e),i(e)}))};d.a.render(Object(m.jsx)(w,{}),document.getElementById("root")),S()}},[[26,1,2]]]);
//# sourceMappingURL=main.5bbad95d.chunk.js.map