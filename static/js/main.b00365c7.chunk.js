(this["webpackJsonpmy-portfolio"]=this["webpackJsonpmy-portfolio"]||[]).push([[0],[,,,function(e,t,n){e.exports={container:"container_container__OajUb"}},,,function(e,t,n){e.exports={projectItemCard:"ProjectCard_projectItemCard__1bG7-",photo:"ProjectCard_photo__3S7Gk",circle:"ProjectCard_circle__2mdIt",descWrapper:"ProjectCard_descWrapper__KrQAq",description:"ProjectCard_description__3_28S",name:"ProjectCard_name__sLgaV",text:"ProjectCard_text__3Uxoy"}},function(e,t,n){e.exports={nav:"Navi_nav__bi95i",links:"Navi_links__1xpBv",hidden:"Navi_hidden__k21jh",openBtn:"Navi_openBtn__10T9a",menuIcon:"Navi_menuIcon__3s5Lk",activeBtn:"Navi_activeBtn__Ni9Y4"}},function(e,t,n){e.exports={footer:"Footer_footer__3XAZ9",info:"Footer_info__3svtN",links:"Footer_links__3gHjZ"}},function(e,t,n){e.exports={header:"Header_header__HWklb",withBackground:"Header_withBackground__DG79T",open:"Header_open__3iBvP",container:"Header_container__27ydF"}},function(e,t,n){e.exports={main:"Main_main__3FtUM",container:"Main_container__jpCfk",info:"Main_info__1q8bz",mainTitle:"Main_mainTitle__LR243"}},function(e,t,n){e.exports={sectionSkills:"Skills_sectionSkills__ICPag",container:"Skills_container__wIShZ",skillsItems:"Skills_skillsItems__1PTd0",columns:"Skills_columns__2T3D8"}},function(e,t,n){e.exports={skillsItemCard:"SkillCard_skillsItemCard__2qZ8I",icon:"SkillCard_icon__OZXe4",name:"SkillCard_name__3ljym",text:"SkillCard_text__15Cgp"}},function(e,t,n){e.exports={sectionProjects:"Projects_sectionProjects__31OjI",container:"Projects_container__38mgt",title:"Projects_title__1k4hA",projectsItems:"Projects_projectsItems__3GtY-",columns:"Projects_columns__T5Yio"}},function(e,t,n){e.exports={contacts:"Contacts_contacts__1F5Zm",container:"Contacts_container__2C8I-",title:"Contacts_title__2GMtA",formWrapper:"Contacts_formWrapper__1p9Jp",messageForm:"Contacts_messageForm__3_uIP"}},,,,,,,function(e,t,n){e.exports={link:"Link_link__2TJOY",active:"Link_active__3vkc_",linkMask:"Link_linkMask__1VXvx"}},function(e,t,n){e.exports={btn:"AnimatedButton_btn__2l-4a",text:"AnimatedButton_text__y3uI8",circle:"AnimatedButton_circle__2k55g"}},,,,,,,,,,,function(e,t,n){e.exports={title:"SubHeader_title__11oTP"}},,,,,function(e,t,n){},function(e,t,n){},,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(19),s=n.n(i),r=(n(38),n(39),n(5)),o=n(9),l=n.n(o),d=n(3),j=n.n(d),m=n(7),u=n.n(m),_=n(21),b=n.n(_),p=n(4),h=n(0),f=function(e){var t=e.name,n=e.url,a=e.callback;return Object(h.jsx)("div",{className:b.a.link,children:Object(h.jsxs)(p.Link,{activeClass:b.a.active,to:n,spy:!0,smooth:!0,duration:100,children:[Object(h.jsx)("span",{className:b.a.linkMask,onClick:a,children:t}),Object(h.jsx)("span",{children:t})]})})},x=function(e){var t=e.callback,n=e.isOpen,a="".concat(u.a.links," ").concat(n?"":u.a.hidden),c="".concat(u.a.menuIcon," ").concat(n?u.a.activeBtn:"");return Object(h.jsxs)("div",{className:u.a.nav,onClick:t,children:[Object(h.jsx)("div",{className:c,children:Object(h.jsx)("span",{})}),Object(h.jsx)("div",{className:a,onClick:t,children:["Main","Skills","Projects","Contacts"].map((function(e){return Object(h.jsx)(f,{url:e,name:e,callback:t},e)}))})]})},O=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],i=Object(a.useState)(!1),s=Object(r.a)(i,2),o=s[0],d=s[1],m=function(){d(!o)};Object(a.useEffect)((function(){var e=function(){!n&&window.pageYOffset>window.innerHeight&&c(!0),n&&window.pageYOffset<window.innerHeight&&c(!1)};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[n]);var u="".concat(l.a.header," ").concat(n&&l.a.withBackground," ").concat(o?l.a.open:"");return Object(h.jsx)("header",{className:u,onClick:m,children:Object(h.jsx)("div",{className:j.a.container+" "+l.a.container,children:Object(h.jsx)(x,{callback:m,isOpen:o})})})},k=n(10),v=n.n(k),g=n.p+"static/media/mainBackground.df7b669f.jpg",N=function(){var e={backgroundImage:"url(".concat(g,")")};return Object(h.jsx)(p.Element,{name:"Main",className:v.a.main,style:e,children:Object(h.jsx)("div",{className:j.a.container+" "+v.a.container,children:Object(h.jsx)("div",{className:v.a.info,children:Object(h.jsx)("div",{className:v.a.mainTitle,children:Object(h.jsxs)("h1",{children:["Hello! I\u2019m",Object(h.jsx)("br",{})," ",Object(h.jsx)("span",{children:"Aleksey Filippov"}),",",Object(h.jsx)("br",{})," Frontend Developer."]})})})})})},y=n(11),w=n.n(y),C=n(12),S=n.n(C),I=function(e){try{var t=e.touches?e.touches[0].pageX:e.pageX,n=e.touches?e.touches[0].pageY:e.pageY;return{left:t-e.currentTarget.offsetLeft+"px",top:n-e.currentTarget.offsetTop+"px"}}catch(a){console.warn(a)}},P=function(e,t){var n=Object(a.useState)(!1),c=Object(r.a)(n,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){var t=function(){e.current&&!i&&(e.current.offsetTop<window.pageYOffset+window.innerHeight&&s(!0))};return window.addEventListener("scroll",t),t(),function(){window.removeEventListener("scroll",t)}}),[i,e]),{transition:t||"1000ms ease 200ms",opacity:i?1:0}},M=function(e){var t=e.title,n=e.description,c=e.icon,i=Object(a.useRef)(null),s=P(i);return Object(h.jsxs)("div",{ref:i,className:S.a.skillsItemCard,style:s,children:[Object(h.jsx)("div",{className:S.a.icon,children:c?Object(h.jsx)("img",{src:c,alt:"icon"}):"icon"}),Object(h.jsx)("h3",{className:S.a.name,children:t}),Object(h.jsx)("span",{className:S.a.text,children:n})]})},T=n.p+"static/media/TypeScript.e42b1fbb.svg",L=n.p+"static/media/js-brands.75a0189e.svg",F=n.p+"static/media/react-brands.e1f53a91.svg",B=n.p+"static/media/redux.60d04c8a.svg",E=n.p+"static/media/material-ui.92ef5ddf.svg",H=n(20),Y=n(33),A=n.n(Y),W=function(e){var t=e.title;return Object(h.jsx)("h2",{className:A.a.title,children:t})},J=[{title:"JS",description:"JavaScript development",icon:L},{title:"Typescript",description:"Loremghgyukgjhkjlkj",icon:T},{title:"React",description:"Modern and mobile-ready website that will help you reach all of your\n                marketing.Modern and mobile-ready website that will help you reach all of your\n                marketing.Modern and mobile-ready website that will help you reach all of your\n                marketing.Modern and mobile-ready website that will help you reach all of your\n                marketing.Modern and mobile-ready website that will help you reach all of your\n                marketing.",icon:F},{title:"Redux",description:"Modern and mobile-ready website that will help you reach all of your\n                marketing.",icon:B},{title:"Material UI",description:"Modern and mobile-ready website that will help you reach all of your\n                marketing.",icon:E}],Z=function(){return Object(h.jsx)(p.Element,{name:"Skills",className:w.a.sectionSkills,children:Object(h.jsxs)("div",{className:j.a.container+" "+w.a.container,children:[Object(h.jsx)(W,{title:"Skills"}),Object(h.jsx)(H.a,{className:w.a.skillsItems,breakpointCols:{default:2,700:1},columnClassName:w.a.columns,children:J.map((function(e){return Object(h.jsx)(M,{title:e.title,description:e.description,icon:e.icon},e.title)}))})]})})},G=n(13),R=n.n(G),X=n.p+"static/media/photo1.ed3629f5.jfif",D=n.p+"static/media/photo2.e1e936ed.jpeg",U=n(6),q=n.n(U),V=function(e){var t=Object(a.useState)({}),n=Object(r.a)(t,2),c=n[0],i=n[1],s=function(e){i(I(e))},o=Object(a.useRef)(null),l=P(o);return Object(h.jsx)("div",{className:q.a.projectItemCard,ref:o,style:l,children:Object(h.jsxs)("div",{className:q.a.photo,style:e.style,onMouseEnter:s,onMouseLeave:s,onTouchStart:function(e){i(I(e))},children:[Object(h.jsx)("span",{className:q.a.circle,style:c}),Object(h.jsx)("div",{className:q.a.descWrapper,children:Object(h.jsxs)("div",{className:q.a.description,children:[Object(h.jsx)("span",{className:q.a.name,children:e.title}),Object(h.jsx)("span",{className:q.a.text,children:e.description})]})})]})})},z=[{style:{backgroundImage:"url(".concat(X,")")},title:"TodoList",description:"\u0431\u043b\u0430 \u0431\u043b\u0430 \u043f\u0440\u043e TodoList"},{style:{backgroundImage:"url(".concat(D,")"),minHeight:600},title:"Social Network",description:"\u0431\u043b\u0430 \u0431\u043b\u0430 \u043f\u0440\u043e Social Network"},{style:{backgroundImage:"url(".concat(D,")"),minHeight:500},title:"Social Network2",description:"\u0431\u043b\u0430 \u0431\u043b\u0430 \u043f\u0440\u043e Social Network"},{style:{backgroundImage:"url(".concat(D,")")},title:"Social Network3",description:"\u0431\u043b\u0430 \u0431\u043b\u0430 \u043f\u0440\u043e Social Network"}],K=function(){return Object(h.jsx)(p.Element,{name:"Projects",className:R.a.sectionProjects,children:Object(h.jsxs)("div",{className:j.a.container+" "+R.a.container,children:[Object(h.jsx)(W,{title:"Projects"}),Object(h.jsx)(H.a,{className:R.a.projectsItems,breakpointCols:{default:2,700:1},columnClassName:R.a.columns,children:z.map((function(e){return Object(h.jsx)(V,{style:e.style,title:e.title,description:e.description},e.title)}))})]})})},Q=n(14),$=n.n(Q),ee=n(22),te=n.n(ee),ne=function(e){var t=e.text,n=void 0===t?"hover me":t,c=e.callback,i=Object(a.useState)({}),s=Object(r.a)(i,2),o=s[0],l=s[1],d=function(e){var t=I(e);l(t)};return Object(h.jsxs)("button",{className:te.a.btn,onMouseEnter:d,onMouseLeave:d,onTouchStart:function(e){var t=I(e);l(t)},onClick:c,children:[Object(h.jsx)("span",{className:te.a.circle,style:o}),Object(h.jsx)("span",{className:te.a.text,children:n})]})},ae=function(){return Object(h.jsx)(p.Element,{name:"Contacts",className:$.a.contacts,children:Object(h.jsxs)("div",{className:j.a.container+" "+$.a.container,children:[Object(h.jsx)(W,{title:"Contacts"}),Object(h.jsx)("div",{className:$.a.formWrapper,children:Object(h.jsxs)("form",{className:$.a.messageForm,action:"",children:[Object(h.jsx)("input",{type:"text",placeholder:"Your name"}),Object(h.jsx)("input",{type:"text",placeholder:"Your contacts"}),Object(h.jsx)("textarea",{placeholder:"Your message"}),Object(h.jsx)("div",{children:Object(h.jsx)(ne,{text:"Send message"})})]})})]})})},ce=n(8),ie=n.n(ce),se=n(23),re=n(24),oe=function(){return Object(h.jsxs)("footer",{className:ie.a.footer,children:[Object(h.jsxs)("div",{className:ie.a.info,children:[Object(h.jsx)("div",{className:ie.a.email,children:Object(h.jsx)("a",{href:"mailto:t9371100211@gmail.com",children:"t9371100211@gmail.com"})}),Object(h.jsx)("div",{className:ie.a.phone,children:Object(h.jsx)("a",{href:"tel:+79600901100",children:"+7 (960) 090 11 00"})})]}),Object(h.jsxs)("div",{className:ie.a.links,children:[Object(h.jsx)("a",{href:"https://t.me/AlekseyNikolaevichF",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(se.a,{icon:re.c})}),Object(h.jsx)("a",{href:"https://github.com/AlFilip",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(se.a,{icon:re.a})}),Object(h.jsx)("a",{href:"https://www.linkedin.com/in/aleksey-filippov-465218226/",target:"_blank",rel:"noreferrer",children:Object(h.jsx)(se.a,{icon:re.b})})]})]})},le=function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(O,{}),Object(h.jsx)(N,{}),Object(h.jsx)(Z,{}),Object(h.jsx)(K,{}),Object(h.jsx)(ae,{}),Object(h.jsx)(oe,{})]})},de=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(h.jsx)(c.a.Fragment,{children:Object(h.jsx)(le,{})}),document.getElementById("root")),de()}],[[53,1,2]]]);
//# sourceMappingURL=main.b00365c7.chunk.js.map