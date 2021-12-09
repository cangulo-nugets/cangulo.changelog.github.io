"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[57],{3040:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return r},contentTitle:function(){return u},metadata:function(){return h},toc:function(){return s},default:function(){return p}});var a=o(7462),n=o(3366),l=(o(7294),o(3905)),g=o(2093),i=o(1147),c=(o(996),o(1007),o(6396),o(8215),["components"]),r={title:"How to update the changelog"},u=void 0,h={unversionedId:"4a-how-to-update-the-changelog",id:"4a-how-to-update-the-changelog",isDocsHomePage:!1,title:"How to update the changelog",description:"Call the Build method  from the IChangelogBuilder interface to update your changelog:",source:"@site/docs/4a-how-to-update-the-changelog.md",sourceDirName:".",slug:"/4a-how-to-update-the-changelog",permalink:"/cangulo.changelog.github.io/docs/4a-how-to-update-the-changelog",editUrl:"https://github.com/cangulo/cangulo.changelog.github.io/blob/docs/4a-how-to-update-the-changelog.md",tags:[],version:"current",lastUpdatedAt:1639011775,formattedLastUpdatedAt:"12/9/2021",frontMatter:{title:"How to update the changelog"},sidebar:"tutorialSidebar",previous:{title:"Registering the services",permalink:"/cangulo.changelog.github.io/docs/registering-the-services"},next:{title:"How to create release notes",permalink:"/cangulo.changelog.github.io/docs/4b-how-to-create-release-notes"}},s=[],d={toc:s};function p(e){var t=e.components,o=(0,n.Z)(e,c);return(0,l.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Call the ",(0,l.kt)("inlineCode",{parentName:"p"},"Build")," method  from the ",(0,l.kt)("inlineCode",{parentName:"p"},"IChangelogBuilder")," interface to update your changelog:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"var changelogBuilder = serviceProvider.GetRequiredService<IChangelogBuilder>();\nchangelogBuilder.Build(nextVersion, commitMsgs, changelogPath);\n")),(0,l.kt)(i.Z,{label:"Example at cangulo.nuke.releasecreator",linkIsRelative:!1,link:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/v0.0.1/src/cangulo.nuke.releasecreator/build.changelog.cs#L33",mdxType:"Caption"}),(0,l.kt)("details",null,(0,l.kt)("summary",null,"IChangelogBuilder Definition"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},"public interface IChangelogBuilder\n{\n  void Build(string version, string[] changes, string path);\n}\n")),(0,l.kt)(i.Z,{label:"Definition at cangulo.changelog",linkIsRelative:!1,link:"https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/src/cangulo.changelog/Builders/ChangelogBuilder.cs",mdxType:"Caption"})),(0,l.kt)(g.Z,{slug:"docs/4a-how-to-update-the-changelog",title:"cangulo.changelog - How to update the changelog",tags:["nuke","cicd","cangulo.changelog","conventional_commits","changelog"],mdxType:"ShareCard"}))}p.isMDXComponent=!0}}]);