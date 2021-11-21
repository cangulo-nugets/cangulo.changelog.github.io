"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[145],{9600:function(e,t,n){n.d(t,{ZP:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={toc:[{value:"About me",id:"about-me",children:[],level:2}]};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"about-me"},"About me"),(0,l.kt)("p",null,"I'm a Software Engineer at ",(0,l.kt)("a",{parentName:"p",href:"https://ohpen.com"},"Ohpen"),". I have strong experience with dotnet technologies, AWS and Terraform. I have also worked with Front-End languages as JavaScript, Angular and React. I'm a challenge-seeker person , I think all challenges are opportunities to grow. Feel free to contact me via LinkedIn."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png",alt:"profile image"})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,l.kt)("p",null,"LinkedIn - ",(0,l.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,l.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,l.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,l.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo")))}u.isMDXComponent=!0},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7462),r=n(7294),l=n(2389),o=n(9443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(9521),s=n(6010),c="tabItem_1uMI";function m(e){var t,n,a,l=e.lazy,o=e.block,m=e.defaultValue,p=e.values,d=e.groupId,f=e.className,h=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=p?p:h.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,u.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===m?m:null!=(t=null!=m?m:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=h[0])?void 0:a.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var E=i(),k=E.tabGroupChoices,w=E.setTabGroupChoices,N=(0,r.useState)(g),Z=N[0],y=N[1],I=[],_=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=k[d];null!=x&&x!==Z&&v.some((function(e){return e.value===x}))&&y(x)}var C=function(e){var t=e.currentTarget,n=I.indexOf(t),a=v[n].value;a!==Z&&(_(t),y(a),null!=d&&w(d,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=I.indexOf(e.currentTarget)+1;n=I[a]||I[0];break;case"ArrowLeft":var r=I.indexOf(e.currentTarget)-1;n=I[r]||I[I.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},f)},v.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,className:(0,s.Z)("tabs__item",c,{"tabs__item--active":Z===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:T,onFocus:C,onClick:C},null!=n?n:t)}))),l?(0,r.cloneElement)(h.filter((function(e){return e.props.value===Z}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Z})}))))}function p(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},1007:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(7294),r="browserWindow_25XZ",l="browserWindowHeader_KqAw",o="buttons_1hjc",i="browserWindowAddressBar_3kU8",u="dot_3vUt",s="browserWindowMenuIcon_62Vr",c="bar_1GUQ",m="browserWindowBody_2pXR";var p=function(e){var t=e.children,n=e.minHeight,p=e.url;return a.createElement("div",{className:r,style:{minHeight:n}},a.createElement("div",{className:l},a.createElement("div",{className:o},a.createElement("span",{className:u,style:{background:"#f25f58"}}),a.createElement("span",{className:u,style:{background:"#fbbe3c"}}),a.createElement("span",{className:u,style:{background:"#58cb42"}})),a.createElement("div",{className:i},p),a.createElement("div",{className:s},a.createElement("div",null,a.createElement("span",{className:c}),a.createElement("span",{className:c}),a.createElement("span",{className:c})))),a.createElement("div",{className:m},t))}},7440:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.label,n=e.linkIsRelative,r=e.link;if(r){var l="true"===n?"https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/".concat(r):r;return a.createElement("a",{href:l},a.createElement("p",{className:"text--center"},null!=t?t:"Link to the file"))}return a.createElement("p",{className:"text--center"},null!=t?t:"Link to the file")}},4888:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(5068),r=n(7294),l=n(4610),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={slug:n.props.slug},n}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement("section",{id:"post-comments"},r.createElement("h2",null,"Comments"),r.createElement(l.Z.Embed,{loadMode:"scroll",websiteId:1142,id:this.state.slug}))},t}(r.Component)},4473:function(e,t,n){var a=n(7294),r=n(3597),l=n(7332),o=n(6616),i=n(7385),u=n(8137),s=n(6339),c=n(2834),m=n(9275),p=n(8168),d=n(4276),f=n(2263);t.Z=function(e){var t=e.slug,n=e.title,h=e.tags,v=((0,f.Z)().siteConfig,"https://cangulo.github.io/"+t);return a.createElement("div",null,a.createElement("h2",null,"Did you like it? Share It!"),a.createElement(r.Z,{url:v,title:n},a.createElement(l.Z,{size:32,round:!0})),a.createElement(o.Z,{url:v,title:n,via:"AnguloMascarell",hashtags:null!=h?h:""},a.createElement(i.Z,{size:32,round:!0})),a.createElement(u.Z,{subject:"Check this post about "+n,body:"Hi there, check the next post: "+n+" \n\n",url:v},a.createElement(s.Z,{size:32,round:!0})),a.createElement(c.Z,{url:v,title:n},a.createElement(m.Z,{size:32,round:!0})),a.createElement(p.Z,{title:n,url:v},a.createElement(d.Z,{size:32,round:!0})),a.createElement("br",{style:{marginBottom:"15px"}}))}},9428:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=(n(4473),n(7440),n(4888),n(9600),n(1007),n(6396),n(8215),["components"]),i={title:"Implementation"},u=void 0,s={unversionedId:"implementation",id:"implementation",isDocsHomePage:!1,title:"Implementation",description:"How I implemented",source:"@site/docs/2-implementation.md",sourceDirName:".",slug:"/implementation",permalink:"/docs/implementation",editUrl:"https://github.com/cangulo/cangulo.changelog.github.io/blob/docs/2-implementation.md",tags:[],version:"current",lastUpdatedAt:1637521421,formattedLastUpdatedAt:"11/21/2021",sidebarPosition:2,frontMatter:{title:"Implementation"},sidebar:"tutorialSidebar",previous:{title:"Idea",permalink:"/docs/"},next:{title:"Register the services",permalink:"/docs/register-the-requires-services"}},c=[],m={toc:c};function p(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"How I implemented"))}p.isMDXComponent=!0}}]);