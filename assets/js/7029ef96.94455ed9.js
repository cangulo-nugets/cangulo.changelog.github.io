"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[57],{9600:function(e,t,n){n.d(t,{ZP:function(){return i}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],u={toc:[{value:"About me",id:"about-me",children:[],level:2}]};function i(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"about-me"},"About me"),(0,l.kt)("p",null,"I'm a Software Engineer at ",(0,l.kt)("a",{parentName:"p",href:"https://ohpen.com"},"Ohpen"),". I have strong experience with dotnet technologies, AWS and Terraform. I have also worked with Front-End languages as JavaScript, Angular and React. I'm a challenge-seeker person , I think all challenges are opportunities to grow. Feel free to contact me via LinkedIn."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png",alt:"profile image"})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,l.kt)("p",null,"LinkedIn - ",(0,l.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,l.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,l.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,l.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo")))}i.isMDXComponent=!0},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),r=n(7294),l=n(2389),o=n(9443);var u=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(9521),c=n(6010),s="tabItem_1uMI";function m(e){var t,n,a,l=e.lazy,o=e.block,m=e.defaultValue,d=e.values,p=e.groupId,h=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),v=(0,i.lx)(f,(function(e,t){return e.value===t.value}));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==b&&!f.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=u(),w=k.tabGroupChoices,E=k.setTabGroupChoices,N=(0,r.useState)(b),y=N[0],Z=N[1],C=[],I=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var _=w[p];null!=_&&_!==y&&f.some((function(e){return e.value===_}))&&Z(_)}var x=function(e){var t=e.currentTarget,n=C.indexOf(t),a=f[n].value;a!==y&&(I(t),Z(a),null!=p&&E(p,a))},T=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=C.indexOf(e.currentTarget)+1;n=C[a]||C[0];break;case"ArrowLeft":var r=C.indexOf(e.currentTarget)-1;n=C[r]||C[C.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},h)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",s,{"tabs__item--active":y===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:T,onFocus:x,onClick:x},null!=n?n:t)}))),l?(0,r.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}function d(e){var t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},1007:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),r="browserWindow_25XZ",l="browserWindowHeader_KqAw",o="buttons_1hjc",u="browserWindowAddressBar_3kU8",i="dot_3vUt",c="browserWindowMenuIcon_62Vr",s="bar_1GUQ",m="browserWindowBody_2pXR";var d=function(e){var t=e.children,n=e.minHeight,d=e.url;return a.createElement("div",{className:r,style:{minHeight:n}},a.createElement("div",{className:l},a.createElement("div",{className:o},a.createElement("span",{className:i,style:{background:"#f25f58"}}),a.createElement("span",{className:i,style:{background:"#fbbe3c"}}),a.createElement("span",{className:i,style:{background:"#58cb42"}})),a.createElement("div",{className:u},d),a.createElement("div",{className:c},a.createElement("div",null,a.createElement("span",{className:s}),a.createElement("span",{className:s}),a.createElement("span",{className:s})))),a.createElement("div",{className:m},t))}},7440:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.label,n=e.linkIsRelative,r=e.link;if(r){var l="true"===n?"https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/".concat(r):r;return a.createElement("a",{href:l},a.createElement("p",{className:"text--center"},null!=t?t:"Link to the file"))}return a.createElement("p",{className:"text--center"},null!=t?t:"Link to the file")}},4888:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(5068),r=n(7294),l=n(4610),o=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={slug:n.props.slug},n}return(0,a.Z)(t,e),t.prototype.render=function(){return r.createElement("section",{id:"post-comments"},r.createElement("h2",null,"Comments"),r.createElement(l.Z.Embed,{loadMode:"scroll",websiteId:1142,id:this.state.slug}))},t}(r.Component)},4473:function(e,t,n){var a=n(7294),r=n(3597),l=n(7332),o=n(6616),u=n(7385),i=n(8137),c=n(6339),s=n(2834),m=n(9275),d=n(8168),p=n(4276),h=n(2263);t.Z=function(e){var t=e.slug,n=e.title,g=e.tags,f=((0,h.Z)().siteConfig,"https://cangulo.github.io/"+t);return a.createElement("div",null,a.createElement("h2",null,"Did you like it? Share It!"),a.createElement(r.Z,{url:f,title:n},a.createElement(l.Z,{size:32,round:!0})),a.createElement(o.Z,{url:f,title:n,via:"AnguloMascarell",hashtags:null!=g?g:""},a.createElement(u.Z,{size:32,round:!0})),a.createElement(i.Z,{subject:"Check this post about "+n,body:"Hi there, check the next post: "+n+" \n\n",url:f},a.createElement(c.Z,{size:32,round:!0})),a.createElement(s.Z,{url:f,title:n},a.createElement(m.Z,{size:32,round:!0})),a.createElement(d.Z,{title:n,url:f},a.createElement(p.Z,{size:32,round:!0})),a.createElement("br",{style:{marginBottom:"15px"}}))}},3553:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=(n(4473),n(7440)),u=(n(4888),n(9600),n(1007),n(6396),n(8215),["components"]),i={title:"How to update the changelog"},c=void 0,s={unversionedId:"4a-how-to-update-the-changelog",id:"4a-how-to-update-the-changelog",isDocsHomePage:!1,title:"How to update the changelog",description:"Call the Build method  from the IChangelogBuilder interface to update your changelog:",source:"@site/docs/4a-how-to-update-the-changelog.md",sourceDirName:".",slug:"/4a-how-to-update-the-changelog",permalink:"/docs/4a-how-to-update-the-changelog",editUrl:"https://github.com/cangulo/cangulo.changelog.github.io/blob/docs/4a-how-to-update-the-changelog.md",tags:[],version:"current",lastUpdatedAt:1637521421,formattedLastUpdatedAt:"11/21/2021",frontMatter:{title:"How to update the changelog"},sidebar:"tutorialSidebar",previous:{title:"Register the services",permalink:"/docs/register-the-requires-services"},next:{title:"How to create release notes",permalink:"/docs/4b-how-to-create-release-notes"}},m=[],d={toc:m};function p(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Call the ",(0,l.kt)("inlineCode",{parentName:"p"},"Build")," method  from the ",(0,l.kt)("inlineCode",{parentName:"p"},"IChangelogBuilder")," interface to update your changelog:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"var changelogBuilder = serviceProvider.GetRequiredService<IChangelogBuilder>();\nchangelogBuilder.Build(nextVersion, commitMsgs, changelogPath);\n")),(0,l.kt)(o.Z,{label:"Example at cangulo.nuke.releasecreator",linkIsRelative:"false",link:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/v0.0.1/src/cangulo.nuke.releasecreator/build.changelog.cs#L33",mdxType:"Caption"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"IChangelogBuilder Definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"}," public interface IChangelogBuilder\n {\n     void Build(string version, string[] changes, string path);\n }\n")),(0,l.kt)(o.Z,{label:"Definition at cangulo.changelog",linkIsRelative:"false",link:"https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/src/cangulo.changelog/Builders/ChangelogBuilder.cs",mdxType:"Caption"})))}p.isMDXComponent=!0}}]);