(self.webpackChunkcangulo_changelog_github_io=self.webpackChunkcangulo_changelog_github_io||[]).push([[145],{5220:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return g},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(7462),i=t(3366),l=(t(7294),t(3905)),o=t(3456),r=t(6785),s=(t(1007),t(6396),t(8215),["components"]),g={title:"Implementation",authors:"cangulo"},u=void 0,c={unversionedId:"implementation",id:"implementation",isDocsHomePage:!1,title:"Implementation",description:"First of all, let me refresh the main goals we have:",source:"@site/docs/2-implementation.md",sourceDirName:".",slug:"/implementation",permalink:"/cangulo.changelog.github.io/docs/implementation",tags:[],version:"current",lastUpdatedBy:"Carlos Angulo Mascarell",lastUpdatedAt:1677621502,formattedLastUpdatedAt:"2/28/2023",sidebarPosition:2,frontMatter:{title:"Implementation",authors:"cangulo"},sidebar:"tutorialSidebar",previous:{title:"Idea",permalink:"/cangulo.changelog.github.io/docs/"},next:{title:"Registering the services",permalink:"/cangulo.changelog.github.io/docs/registering-the-services"}},d=[],h={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"First of all, let me refresh the main goals we have: "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Update the Changelog "),(0,l.kt)("li",{parentName:"ul"},"Create the release notes. ")),(0,l.kt)("p",null,"I have defined an interface for each goal:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IReleaseNotesBuilder"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Create the release notes using the ",(0,l.kt)("inlineCode",{parentName:"li"},"IChangesListAreaBuilder")," interface."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IChangelogBuilder"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If there is a changelog, it adds the changes provided at first."),(0,l.kt)("li",{parentName:"ul"},"If there is not, it is created.")))),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Interactive Diagram \ud83d\ude01")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"All diagrams have links to the classes and interfaces code, just click on them!"))),(0,l.kt)(o.Mermaid,{chart:'\n classDiagram\n      IChangelogBuilder <|-- ChangelogBuilder\n      IReleaseNotesBuilder <|-- ReleaseNotesBuilder\n\n      class IChangelogBuilder {\n        <<interface>>\n        +Build(string version, string[] changes, string path) void\n      }\n      \n      class ChangelogBuilder{\n        -readonly IChangelogVersionNotesBuilder _changelogVersionNotesBuilder\n        +Build(string version, string[] changes, string path) void\n        -GetCurrentContent(string path) string\n        -AppendContent(string path, string content) void\n        -OverwriteContent(string path, string content) void\n      }\n\n      class IReleaseNotesBuilder {\n        <<interface>>\n        +Build(string[] changes) string \n      }\n\n\n      class ReleaseNotesBuilder {\n        -readonly IChangesListAreaBuilder _changesListAreaBuilder\n        +Build(string[] changes) string \n      }\n\n      %% Links\n      click IChangelogBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ChangelogBuilder.cs"\n      click ChangelogBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ChangelogBuilder.cs"\n      click IReleaseNotesBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ReleaseNotesBuilder.cs"\n      click ReleaseNotesBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ReleaseNotesBuilder.cs"\n',mdxType:"Mermaid"}),(0,l.kt)("i",null,(0,l.kt)(r.CaptionDocusaurus,{label:"Main interfaces",mdxType:"CaptionDocusaurus"})),(0,l.kt)("p",null,"Then, in order to have reusable classes between both processes. I implemented the following classes:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IChangelogVersionNotesBuilder"),": ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Class that builds a Changelog Section with the changes provided.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Add two placeholder to divide sections: ",(0,l.kt)("inlineCode",{parentName:"li"},"START-VERSION:")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"END-VERSION:")),(0,l.kt)("li",{parentName:"ul"},"Add the version number as a Header"),(0,l.kt)("li",{parentName:"ul"},"Add the current date"),(0,l.kt)("li",{parentName:"ul"},"Append the changes formatted by ",(0,l.kt)("inlineCode",{parentName:"li"},"IChangesListAreaBuilder")))),(0,l.kt)("li",{parentName:"ul"},"Called by the ",(0,l.kt)("inlineCode",{parentName:"li"},"IChangelogBuilder"),". ")))),(0,l.kt)(o.Mermaid,{chart:'\n classDiagram\n      IChangelogVersionNotesBuilder <|-- ChangelogVersionNotesBuilder\n\n      class IChangelogVersionNotesBuilder {\n        <<interface>>\n        +Build(string version, string[] changes) string\n      }\n      \n      class ChangelogVersionNotesBuilder{\n        -readonly IChangesListAreaBuilder _changesListAreaBuilder\n        +Build(string version, string[] changes) string \n      }\n\n\n      %% Links\n      click IChangelogVersionNotesBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ChangelogVersionNotesBuilder.cs"\n      click ChangelogVersionNotesBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ChangelogVersionNotesBuilder.cs"\n',mdxType:"Mermaid"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"IChangesListAreaBuilder"),": ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Receives a list of changes (commit messages) and creates a list in MD format. "),(0,l.kt)("li",{parentName:"ul"},"Called directly by ",(0,l.kt)("inlineCode",{parentName:"li"},"IReleaseNotesBuilder"),". Also used by ",(0,l.kt)("inlineCode",{parentName:"li"},"IChangelogVersionNotesBuilder"),".")))),(0,l.kt)("p",null,"As I want to be able to support both commits types (Conventional and Non-Conventional), I have two implementations for the IChangesListAreaBuilder:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ChangesAreaBuilderForConventionalCommits"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"It groups the commits received by type."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ChangesAreaBuilderForNonConventionalCommits"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"It simply lists the commits received")))),(0,l.kt)(o.Mermaid,{chart:'\n classDiagram\n      IChangesListAreaBuilder <|-- ChangesAreaBuilderForConventionalCommits\n      IChangesListAreaBuilder <|-- ChangesAreaBuilderForNonConventionalCommits\n\n      class IChangesListAreaBuilder {\n        <<interface>>\n        +Build(string[] changes) string\n      }\n\n\n      class ChangesAreaBuilderForConventionalCommits {\n        -readonly ICoventionalCommitParser _conventionalCommitParser\n        -ChangelogSettings _changelogSettings\n        +Build(string[] changes) string\n      }\n\n      class ChangesAreaBuilderForNonConventionalCommits {\n        +Build(string[] changes) string\n      }\n\n      %% Links\n      click IChangesListAreaBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/IChangesListAreaBuilder.cs"\n      click ChangesAreaBuilderForConventionalCommits href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/ConventionalCommits/ChangesAreaBuilderForConventionalCommits.cs"\n      click ChangesAreaBuilderForNonConventionalCommits href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/Builders/NonConventionalCommits/ChangesAreaBuilderForNonConventionalCommits.cs"\n',mdxType:"Mermaid"}),(0,l.kt)("p",null,"It is worth mentioning that I have created the static class ",(0,l.kt)("inlineCode",{parentName:"p"},"MarkdownBuilder")," for formatting text into MD:"),(0,l.kt)(o.Mermaid,{chart:'\n classDiagram\n      class MarkdownBuilder {\n        <<static>>\n        +Comment(string content)$ string \n        +Title(string title, TitleLevel titleLevel)$ string \n        +ListItem(string item, ListItemLevel listItemLevel)$ string \n      }\n\n      %% Links\n      click MarkdownBuilder href "https://github.com/cangulo-nugets/cangulo.changelog/blob/main/src/cangulo.changelog/markdown/MarkdownBuilder.cs"\n',mdxType:"Mermaid"}),(0,l.kt)("hr",null),(0,l.kt)(r.ShareDocusaurus,{slug:"docs/implementation",title:"cangulo.changelog - Idea and how I use it",tags:["nuke","cicd","cangulo.changelog","conventional_commits","changelog"],mdxType:"ShareDocusaurus"}))}m.isMDXComponent=!0},1748:function(e,n,t){var a={"./locale":9234,"./locale.js":9234};function i(e){var n=l(e);return t(n)}function l(e){if(!t.o(a,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return a[e]}i.keys=function(){return Object.keys(a)},i.resolve=l,e.exports=i,i.id=1748}}]);