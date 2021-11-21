"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[477],{9600:function(e,t,n){n.d(t,{ZP:function(){return s}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=["components"],i={toc:[{value:"About me",id:"about-me",children:[],level:2}]};function s(e){var t=e.components,n=(0,o.Z)(e,r);return(0,l.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"about-me"},"About me"),(0,l.kt)("p",null,"I'm a Software Engineer at ",(0,l.kt)("a",{parentName:"p",href:"https://ohpen.com"},"Ohpen"),". I have strong experience with dotnet technologies, AWS and Terraform. I have also worked with Front-End languages as JavaScript, Angular and React. I'm a challenge-seeker person , I think all challenges are opportunities to grow. Feel free to contact me via LinkedIn."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/cangulo/cangulo/raw/main/profile_picture_aboutme_post_area.png",alt:"profile image"})),(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"Per aspera ad astra.")),(0,l.kt)("p",null,"LinkedIn - ",(0,l.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/angulomascarell"},"Carlos Angulo Mascarell"),(0,l.kt)("br",{parentName:"p"}),"\n","Twitter - ",(0,l.kt)("a",{parentName:"p",href:"https://twitter.com/angulomascarell"},"@AnguloMascarell"),(0,l.kt)("br",{parentName:"p"}),"\n","GitHub - ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cangulo"},"Carlos Angulo Mascarell - cangulo")))}s.isMDXComponent=!0},8215:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},6396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7462),o=n(7294),l=n(2389),r=n(9443);var i=function(){var e=(0,o.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(9521),u=n(6010),c="tabItem_1uMI";function m(e){var t,n,a,l=e.lazy,r=e.block,m=e.defaultValue,d=e.values,p=e.groupId,h=e.className,g=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:g.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),f=(0,s.lx)(k,(function(e,t){return e.value===t.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(t=null!=m?m:null==(n=g.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=g[0])?void 0:a.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=i(),w=b.tabGroupChoices,N=b.setTabGroupChoices,y=(0,o.useState)(v),I=y[0],T=y[1],x=[],E=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=p){var C=w[p];null!=C&&C!==I&&k.some((function(e){return e.value===C}))&&T(C)}var Z=function(e){var t=e.currentTarget,n=x.indexOf(t),a=k[n].value;a!==I&&(E(t),T(a),null!=p&&N(p,a))},A=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=x.indexOf(e.currentTarget)+1;n=x[a]||x[0];break;case"ArrowLeft":var o=x.indexOf(e.currentTarget)-1;n=x[o]||x[x.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:"tabs-container"},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":r},h)},k.map((function(e){var t=e.value,n=e.label;return o.createElement("li",{role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,className:(0,u.Z)("tabs__item",c,{"tabs__item--active":I===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:A,onFocus:Z,onClick:Z},null!=n?n:t)}))),l?(0,o.cloneElement)(g.filter((function(e){return e.props.value===I}))[0],{className:"margin-vert--md"}):o.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==I})}))))}function d(e){var t=(0,l.Z)();return o.createElement(m,(0,a.Z)({key:String(t)},e))}},1007:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(7294),o="browserWindow_25XZ",l="browserWindowHeader_KqAw",r="buttons_1hjc",i="browserWindowAddressBar_3kU8",s="dot_3vUt",u="browserWindowMenuIcon_62Vr",c="bar_1GUQ",m="browserWindowBody_2pXR";var d=function(e){var t=e.children,n=e.minHeight,d=e.url;return a.createElement("div",{className:o,style:{minHeight:n}},a.createElement("div",{className:l},a.createElement("div",{className:r},a.createElement("span",{className:s,style:{background:"#f25f58"}}),a.createElement("span",{className:s,style:{background:"#fbbe3c"}}),a.createElement("span",{className:s,style:{background:"#58cb42"}})),a.createElement("div",{className:i},d),a.createElement("div",{className:u},a.createElement("div",null,a.createElement("span",{className:c}),a.createElement("span",{className:c}),a.createElement("span",{className:c})))),a.createElement("div",{className:m},t))}},7440:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.label,n=e.linkIsRelative,o=e.link;if(o){var l="true"===n?"https://raw.githubusercontent.com/cangulo/cangulo.github.io/main/blog/".concat(o):o;return a.createElement("a",{href:l},a.createElement("p",{className:"text--center"},null!=t?t:"Link to the file"))}return a.createElement("p",{className:"text--center"},null!=t?t:"Link to the file")}},4888:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(5068),o=n(7294),l=n(4610),r=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={slug:n.props.slug},n}return(0,a.Z)(t,e),t.prototype.render=function(){return o.createElement("section",{id:"post-comments"},o.createElement("h2",null,"Comments"),o.createElement(l.Z.Embed,{loadMode:"scroll",websiteId:1142,id:this.state.slug}))},t}(o.Component)},4473:function(e,t,n){var a=n(7294),o=n(3597),l=n(7332),r=n(6616),i=n(7385),s=n(8137),u=n(6339),c=n(2834),m=n(9275),d=n(8168),p=n(4276),h=n(2263);t.Z=function(e){var t=e.slug,n=e.title,g=e.tags,k=((0,h.Z)().siteConfig,"https://cangulo.github.io/"+t);return a.createElement("div",null,a.createElement("h2",null,"Did you like it? Share It!"),a.createElement(o.Z,{url:k,title:n},a.createElement(l.Z,{size:32,round:!0})),a.createElement(r.Z,{url:k,title:n,via:"AnguloMascarell",hashtags:null!=g?g:""},a.createElement(i.Z,{size:32,round:!0})),a.createElement(s.Z,{subject:"Check this post about "+n,body:"Hi there, check the next post: "+n+" \n\n",url:k},a.createElement(u.Z,{size:32,round:!0})),a.createElement(c.Z,{url:k,title:n},a.createElement(m.Z,{size:32,round:!0})),a.createElement(d.Z,{title:n,url:k},a.createElement(p.Z,{size:32,round:!0})),a.createElement("br",{style:{marginBottom:"15px"}}))}},4218:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return h},metadata:function(){return g},toc:function(){return k},default:function(){return v}});var a=n(7462),o=n(3366),l=(n(7294),n(3905)),r=n(4473),i=(n(7440),n(4888)),s=n(9600),u=n(1007),c=n(6396),m=n(8215),d=["components"],p={title:"Idea",slug:"/",date:new Date("2021-11-26T00:00:00.000Z"),authors:"cangulo"},h=void 0,g={unversionedId:"idea",id:"idea",isDocsHomePage:!1,title:"Idea",description:"The problem I want to solve",source:"@site/docs/1-idea.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/cangulo/cangulo.changelog.github.io/blob/docs/1-idea.md",tags:[],version:"current",lastUpdatedAt:1637521421,formattedLastUpdatedAt:"11/21/2021",sidebarPosition:1,frontMatter:{title:"Idea",slug:"/",date:"2021-11-26T00:00:00.000Z",authors:"cangulo"},sidebar:"tutorialSidebar",next:{title:"Implementation",permalink:"/docs/implementation"}},k=[{value:"The problem I want to solve",id:"the-problem-i-want-to-solve",children:[{value:"Input: Commits from a merged PR",id:"input-commits-from-a-merged-pr",children:[],level:3},{value:"Output: Changelog Updated",id:"output-changelog-updated",children:[{value:"Non Conventional Commits",id:"non-conventional-commits",children:[],level:4}],level:3}],level:2}],f={toc:k};function v(e){var t=e.components,n=(0,o.Z)(e,d);return(0,l.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"the-problem-i-want-to-solve"},"The problem I want to solve"),(0,l.kt)("p",null,"In my GitHub repos I am using the dotnet project ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator"},"cangulo.nuke.releasecreator")," for releasing a new version every time I merge a PR to the main branch. For that, I have to follow the next conventions:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The App follows ",(0,l.kt)("a",{parentName:"li",href:"https://semver.org"},"Semantic Versioning.")),(0,l.kt)("li",{parentName:"ul"},"All PR contain ",(0,l.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," which set the release to be created (",(0,l.kt)("em",{parentName:"li"},"major"),", ",(0,l.kt)("em",{parentName:"li"},"minor")," or ",(0,l.kt)("em",{parentName:"li"},"fix"),").")),(0,l.kt)("p",null,"At this point, I have a release process but I'm not documenting the changes. There are two places where I should post them:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"The release notes"),(0,l.kt)("li",{parentName:"ol"},"The changelog")),(0,l.kt)("p",null,"As cangulo.nuke.releasecreator is already using the commit messages for calculating the next version, I created ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"cangulo.changelog"))," solution to list them in the two places mentioned before."),(0,l.kt)("p",null,"Maybe you would say, okay, why do you need a custom solution? Why don't you do it in the GH Action itself or in the ",(0,l.kt)("em",{parentName:"p"},"cangulo.nuke.releasecreator")," project? Well, when I started working on this I realize it was not so simple, here is what I took into account:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The Changelog is a Markdown (MD) file, so adding the changes is not directly appending text, we should format."),(0,l.kt)("li",{parentName:"ul"},"To make the Changelog more formal we should add other elements as:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Header containing the version number"),(0,l.kt)("li",{parentName:"ul"},"A Date to know when that release was created (okay, this is a ",(0,l.kt)("em",{parentName:"li"},"nice to have")," \ud83d\ude01)"),(0,l.kt)("li",{parentName:"ul"},"Future elements as contributors, PR link, Link to the tests reports executed. Yes, I'm going too far, I will keep this for future versions \ud83d\ude04")))),(0,l.kt)("p",null,"Although MD is easy to write, it requires to format the text when creating elements (",(0,l.kt)("inlineCode",{parentName:"p"},"#")," for headers ",(0,l.kt)("inlineCode",{parentName:"p"},"* ")," for list item, etc). So, to avoid doing that logic in shell scripts or mixing domains (release process and changelog update), I decided to implement this in a separate repository, the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/cangulo-nugets/cangulo.changelog"},"cangulo.changelog repository"),". Let me give an example of the input and output expected."),(0,l.kt)("h3",{id:"input-commits-from-a-merged-pr"},"Input: Commits from a merged PR"),(0,l.kt)("p",null,"The release 0.0.2 is created after merging a PR with the next commits list:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"fix: Solved bug in the TransactionsController that makes transactions fail"),(0,l.kt)("li",{parentName:"ul"},"refactor: Simplified Transactions Repository"),(0,l.kt)("li",{parentName:"ul"},"docs: Updated docs/examples"),(0,l.kt)("li",{parentName:"ul"},"feat: Implemented new DocumentsController"),(0,l.kt)("li",{parentName:"ul"},"refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how -> Please never write a commit message like this \ud83d\ude1c, you can find more funny messages ",(0,l.kt)("a",{parentName:"li",href:"http://whatthecommit.com/85835a6ce3edb747ec06e42f6313d0a2"},"here"),".")),(0,l.kt)("h3",{id:"output-changelog-updated"},"Output: Changelog Updated"),(0,l.kt)("p",null,"Next is the changelog section I would like to have for version 0.0.2:"),(0,l.kt)(u.Z,{mdxType:"BrowserWindow"},(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(m.Z,{value:"markdown",label:"Markdown Code",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"# 0.0.2\n\n2021-11-20\n\nfix:\n-   Solved bug in the TransactionsController that makes transactions fail\n\nrefactor:\n-   Simplified Transactions Repository\n-   It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how\n\ndocs:\n-   Updated docs/examples\n\nfeatures:\n-   Implemented new DocumentsController\n"))),(0,l.kt)(m.Z,{value:"html",label:"Changelog Visualization",default:!0,mdxType:"TabItem"},(0,l.kt)("h1",{id:"002"},"0.0.2"),(0,l.kt)("p",null,"2021-11-20"),(0,l.kt)("p",null,"fix:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Solved bug in the TransactionsController that makes transactions fail")),(0,l.kt)("p",null,"refactor:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Simplified Transactions Repository"),(0,l.kt)("li",{parentName:"ul"},"It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how")),(0,l.kt)("p",null,"docs:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Updated docs/examples")),(0,l.kt)("p",null,"features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Implemented new DocumentsController"))))),(0,l.kt)("br",null),(0,l.kt)("p",null,"Please note the commits are grouped by type: ",(0,l.kt)("em",{parentName:"p"},"fix, refactor, docs")),(0,l.kt)("h4",{id:"non-conventional-commits"},"Non Conventional Commits"),(0,l.kt)("p",null,"I also would like to accept non conventional commits. The only difference would be commits won't be grouped."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("details",null,(0,l.kt)("summary",null,"Output for non conventional commits"),(0,l.kt)(u.Z,{mdxType:"BrowserWindow"},(0,l.kt)(c.Z,{mdxType:"Tabs"},(0,l.kt)(m.Z,{value:"markdown",label:"Markdown Code",default:!0,mdxType:"TabItem"},(0,l.kt)("pre",{parentName:"div"},(0,l.kt)("code",{parentName:"pre",className:"language-markdown"},"# 0.0.2\n\n2021-11-20\n\n* fix: Solved bug in the TransactionsController that makes transactions fail\n* refactor: Simplified Transactions Repository\n* docs: Updated docs/examples\n* feat: Implemented new DocumentsController\n* refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how\n")),"  "),(0,l.kt)(m.Z,{value:"html",label:"Changelog Visualization",default:!0,mdxType:"TabItem"},(0,l.kt)("h1",{parentName:"div",id:"002-1"},"0.0.2"),(0,l.kt)("p",{parentName:"div"},"2021-11-20"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"fix: Solved bug in the TransactionsController that makes transactions fail"),(0,l.kt)("li",{parentName:"ul"},"refactor: Simplified Transactions Repository"),(0,l.kt)("li",{parentName:"ul"},"docs: Updated docs/examples"),(0,l.kt)("li",{parentName:"ul"},"feat: Implemented new DocumentsController"),(0,l.kt)("li",{parentName:"ul"},"refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how")),"  ")))))),(0,l.kt)(s.ZP,{mdxType:"AboutMePostArea"}),(0,l.kt)(r.Z,{slug:"projects/1-cangulo.changelog-idea-and-how-to-use",title:"cangulo.changelog - Idea and how I use it",tags:["nuke","cicd","cangulo.changelog","conventional_commits","changelog"],mdxType:"ShareCard"}),(0,l.kt)(i.Z,{slug:"projects/1-cangulo.changelog-idea-and-how-to-use",mdxType:"Comments"}))}v.isMDXComponent=!0}}]);