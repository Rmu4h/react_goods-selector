(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(4),r=n.n(c),o=n(3),s=n(5),l=n(6),i=n(8),a=n(7),d=n(1),u=n.n(d),j=(n(13),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(e){Object(i.a)(n,e);var t=Object(a.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,r=new Array(c),l=0;l<c;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={selectedGood:[b[8]]},e.addStyleSelect=function(t){e.setState((function(e){return{selectedGood:[].concat(Object(o.a)(e.selectedGood),[t])}}))},e.resetSelected=function(){e.setState((function(){return{selectedGood:[]}}))},e.myTitle=function(e){var t=Object(o.a)(e);if(0===e.length)return"No goods selected";if(e.length>=3){var n=t[t.length-1];return t.pop(),"".concat(t.join(", ")," and ").concat(n," are selected")}return"".concat(t.join(" and ")," is selected")},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:this.myTitle(t)}),Object(j.jsxs)("div",{children:["Reset your selections",Object(j.jsx)("button",{type:"button",onClick:function(){return e.resetSelected()},children:"x"})]}),Object(j.jsx)("ul",{children:b.map((function(n){return t.includes(n)?Object(j.jsxs)("li",{className:"active",children:[n,Object(j.jsx)("button",{type:"button",onClick:function(){return e.addStyleSelect(n)},children:"selected"})]},n):Object(j.jsxs)("li",{children:[n,Object(j.jsx)("button",{type:"button",onClick:function(){return e.addStyleSelect(n)},children:"selected"})]},n)}))})]})}}]),n}(u.a.Component),p=h;r.a.render(Object(j.jsx)(p,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0882f235.chunk.js.map