"use strict";(self.webpackChunkcangulo_changelog_github_io=self.webpackChunkcangulo_changelog_github_io||[]).push([[477],{3238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return h},default:function(){return g}});var a=n(7462),l=n(3366),o=(n(7294),n(3905)),i=n(6785),r=n(1007),s=n(6396),m=n(8215),u=["components"],c={title:"Idea",slug:"/",date:new Date("2021-11-26T00:00:00.000Z"),authors:"cangulo"},p=void 0,d={unversionedId:"idea",id:"idea",isDocsHomePage:!1,title:"Idea",description:"The problem I want to solve",source:"@site/docs/1-idea.md",sourceDirName:".",slug:"/",permalink:"/cangulo.changelog.github.io/docs/",editUrl:"https://github.com/cangulo/cangulo.changelog.github.io/blob/docs/1-idea.md",tags:[],version:"current",lastUpdatedBy:"Carlos Angulo",lastUpdatedAt:1639059641,formattedLastUpdatedAt:"12/9/2021",sidebarPosition:1,frontMatter:{title:"Idea",slug:"/",date:"2021-11-26T00:00:00.000Z",authors:"cangulo"},sidebar:"tutorialSidebar",next:{title:"Implementation",permalink:"/cangulo.changelog.github.io/docs/implementation"}},h=[{value:"The problem I want to solve",id:"the-problem-i-want-to-solve",children:[],level:2},{value:"Definitions",id:"definitions",children:[],level:2},{value:"Approach",id:"approach",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Input: Commits from a merged PR",id:"input-commits-from-a-merged-pr",children:[],level:3},{value:"Output: Changelog Updated",id:"output-changelog-updated",children:[{value:"Non Conventional Commits",id:"non-conventional-commits",children:[],level:4}],level:3}],level:2}],k={toc:h};function g(e){var t=e.components,n=(0,l.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem-i-want-to-solve"},"The problem I want to solve"),(0,o.kt)("p",null,"Let me introduce a few conventions I follow on my GH projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"My Dotnet project ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator"},"cangulo.nuke.releasecreator")," releases a new version every time I merge a PR to the main branch. It is called from specific GH Actions per project."),(0,o.kt)("li",{parentName:"ul"},"My projects follow ",(0,o.kt)("a",{parentName:"li",href:"https://semver.org"},"Semantic Versioning.")),(0,o.kt)("li",{parentName:"ul"},"All PR contain ",(0,o.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),", they set the release type (",(0,o.kt)("em",{parentName:"li"},"major"),", ",(0,o.kt)("em",{parentName:"li"},"minor")," or ",(0,o.kt)("em",{parentName:"li"},"fix"),").")),(0,o.kt)("p",null,"At this point, the problem I have is ",(0,o.kt)("em",{parentName:"p"},"cangulo.nuke.releasecreator")," doesn't document the changes."),(0,o.kt)("h2",{id:"definitions"},"Definitions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The changes are simply the commit messages, excluding any commit type as ",(0,o.kt)("em",{parentName:"li"},"major, fix, docs"),". See ",(0,o.kt)("a",{parentName:"li",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),". "),(0,o.kt)("li",{parentName:"ul"},"The changes will be stored here:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"The GH release notes. Those are written in markdown (MD)."),(0,o.kt)("li",{parentName:"ol"},"The changelog, is a MD file named: ",(0,o.kt)("inlineCode",{parentName:"li"},"changelog.md")," (simple, right?)")))),(0,o.kt)("h2",{id:"approach"},"Approach"),(0,o.kt)("p",null,"I decided to implement a NuGet package to be consumed by ",(0,o.kt)("em",{parentName:"p"},"cangulo.nuke.releasecreator"),". Here are the main reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Although MD is easy to write, it requires some formatting when creating elements (",(0,o.kt)("inlineCode",{parentName:"li"},"#")," for headers,  ",(0,o.kt)("inlineCode",{parentName:"li"},"* ")," for lists, etc). "),(0,o.kt)("li",{parentName:"ul"},"To code a solution based on shell scripts seems to be an option, but the release notes should be defined in ",(0,o.kt)("em",{parentName:"li"},"cangulo.nuke.releasecreator"),". This is because the release is created through the GH API there."),(0,o.kt)("li",{parentName:"ul"},"Implementing a solution directly in ",(0,o.kt)("em",{parentName:"li"},"cangulo.nuke.releasecreator")," would mix domains. Changes in the changelog format should not affect the release process. ")),(0,o.kt)("p",null,"The nuget package is: ",(0,o.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/cangulo.changelog/"},"cangulo.changelog")),(0,o.kt)("p",null,"I have the following features in mind:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Group changes per commit type"),(0,o.kt)("li",{parentName:"ul"},"Every change should be listed with a bullet point"),(0,o.kt)("li",{parentName:"ul"},"Every Release will be written as an MD Header (",(0,o.kt)("inlineCode",{parentName:"li"},"#"),")"),(0,o.kt)("li",{parentName:"ul"},"Every release should have its date"),(0,o.kt)("li",{parentName:"ul"},"Future elements as contributors, PR link, Link to the tests reports executed. Yes, I'm going too far, I will keep this for future versions \ud83d\ude04")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"Let me give an example of the input and output expected."),(0,o.kt)("h3",{id:"input-commits-from-a-merged-pr"},"Input: Commits from a merged PR"),(0,o.kt)("p",null,"The release 0.0.2 is created after merging a PR with the next commits list:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fix: Solved bug in the TransactionsController that makes transactions fail"),(0,o.kt)("li",{parentName:"ul"},"refactor: Simplified Transactions Repository"),(0,o.kt)("li",{parentName:"ul"},"docs: Updated docs/examples"),(0,o.kt)("li",{parentName:"ul"},"feat: Implemented new DocumentsController"),(0,o.kt)("li",{parentName:"ul"},"refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how -> Please never write a commit message like this \ud83d\ude1c, you can find more funny messages ",(0,o.kt)("a",{parentName:"li",href:"http://whatthecommit.com/85835a6ce3edb747ec06e42f6313d0a2"},"here"),".")),(0,o.kt)("h3",{id:"output-changelog-updated"},"Output: Changelog Updated"),(0,o.kt)("p",null,"Next is the changelog section I would like to have for version 0.0.2:"),(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"markdown",label:"Markdown Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"# 0.0.2\n\n2021-11-20\n\nfix:\n-   Solved bug in the TransactionsController that makes transactions fail\n\nrefactor:\n-   Simplified Transactions Repository\n-   It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how\n\ndocs:\n-   Updated docs/examples\n\nfeatures:\n-   Implemented new DocumentsController\n"))),(0,o.kt)(m.Z,{value:"html",label:"Changelog Visualization",default:!0,mdxType:"TabItem"},(0,o.kt)("h1",{id:"002"},"0.0.2"),(0,o.kt)("p",null,"2021-11-20"),(0,o.kt)("p",null,"fix:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Solved bug in the TransactionsController that makes transactions fail")),(0,o.kt)("p",null,"refactor:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Simplified Transactions Repository"),(0,o.kt)("li",{parentName:"ul"},"It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how")),(0,o.kt)("p",null,"docs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Updated docs/examples")),(0,o.kt)("p",null,"features:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implemented new DocumentsController"))))),(0,o.kt)("br",null),(0,o.kt)("p",null,"Please note the commits are grouped by type: ",(0,o.kt)("em",{parentName:"p"},"fix, refactor, docs")),(0,o.kt)("h4",{id:"non-conventional-commits"},"Non Conventional Commits"),(0,o.kt)("p",null,"I also would like to accept non conventional commits. The only difference would be commits won't be grouped."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output for non conventional commits"),(0,o.kt)(r.Z,{mdxType:"BrowserWindow"},(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(m.Z,{value:"markdown",label:"Markdown Code",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-markdown"},"# 0.0.2\n\n2021-11-20\n\n* fix: Solved bug in the TransactionsController that makes transactions fail\n* refactor: Simplified Transactions Repository\n* docs: Updated docs/examples\n* feat: Implemented new DocumentsController\n* refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how\n")),"  "),(0,o.kt)(m.Z,{value:"html",label:"Changelog Visualization",default:!0,mdxType:"TabItem"},(0,o.kt)("h1",{parentName:"div",id:"002-1"},"0.0.2"),(0,o.kt)("p",{parentName:"div"},"2021-11-20"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"fix: Solved bug in the TransactionsController that makes transactions fail"),(0,o.kt)("li",{parentName:"ul"},"refactor: Simplified Transactions Repository"),(0,o.kt)("li",{parentName:"ul"},"docs: Updated docs/examples"),(0,o.kt)("li",{parentName:"ul"},"feat: Implemented new DocumentsController"),(0,o.kt)("li",{parentName:"ul"},"refactor: It's possible! You can turn a 50-line code chunk into just 3 lines. Here's how")),"  ")))))),(0,o.kt)("hr",null),(0,o.kt)(i.ShareDocusaurus,{slug:"docs",title:"cangulo.changelog - Idea and how I use it",tags:["nuke","cicd","cangulo.changelog","conventional_commits","changelog"],mdxType:"ShareDocusaurus"}))}g.isMDXComponent=!0}}]);