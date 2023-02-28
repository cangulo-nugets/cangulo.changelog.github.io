"use strict";(self.webpackChunkcangulo_changelog_github_io=self.webpackChunkcangulo_changelog_github_io||[]).push([[337],{1343:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return g},default:function(){return p}});var o=t(7462),a=t(3366),i=(t(7294),t(3905)),s=t(6785),l=(t(1007),t(6396),t(8215),["components"]),r={title:"Registering the services",authors:"cangulo"},c=void 0,u={unversionedId:"registering-the-services",id:"registering-the-services",isDocsHomePage:!1,title:"Registering the services",description:"The services required should be setup in your startup.cs by calling the AddChangelogServices method:",source:"@site/docs/3-registering-the-services.md",sourceDirName:".",slug:"/registering-the-services",permalink:"/cangulo.changelog.github.io/docs/registering-the-services",tags:[],version:"current",lastUpdatedBy:"Carlos Angulo Mascarell",lastUpdatedAt:1677621502,formattedLastUpdatedAt:"2/28/2023",sidebarPosition:3,frontMatter:{title:"Registering the services",authors:"cangulo"},sidebar:"tutorialSidebar",previous:{title:"Implementation",permalink:"/cangulo.changelog.github.io/docs/implementation"},next:{title:"How to update the changelog",permalink:"/cangulo.changelog.github.io/docs/4a-how-to-update-the-changelog"}},g=[],m={toc:g};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The services required should be setup in your ",(0,i.kt)("inlineCode",{parentName:"p"},"startup.cs")," by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"AddChangelogServices")," method:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:"{8}","{8}":!0},"using cangulo.changelog.Extensions;\n//...\npublic class Startup\n{\n    public void ConfigureServices(IServiceCollection services)\n    {\n      //...\n      services.AddChangelogServices(settings);\n      //...\n    }\n}\n")),(0,i.kt)(s.CaptionDocusaurus,{label:"Example at cangulo.nuke.releasecreator",linkIsRelative:!1,link:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/v0.0.1/src/cangulo.nuke.releasecreator/build.startup.cs#L27",mdxType:"CaptionDocusaurus"}),(0,i.kt)("p",null,"The object passed is a ",(0,i.kt)("inlineCode",{parentName:"p"},"ChangelogSettings")," instance. It sets the working mode (Conventional or Non-Conventional Commits) in the ",(0,i.kt)("inlineCode",{parentName:"p"},"CommitsMode")," attribute. In case you want to go with the conventional ones, you have to provide the types in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConventionalCommitsSettings"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},"public class ChangelogSettings\n{\n  public CommitsMode CommitsMode { get; set; }\n  public ConventionalCommitsSettings ConventionalCommitsSettings { get; set; }\n}\n\npublic class ConventionalCommitsSettings\n{\n  public string[] Types { get; set; }\n}\npublic enum CommitsMode\n{\n  NonConventionalCommits, // Yes, I also allow non conventional commits\n  ConventionalCommits\n}\n")),(0,i.kt)(s.CaptionDocusaurus,{label:"Definition at cangulo.changelog",linkIsRelative:!1,link:"https://github.com/cangulo-nugets/cangulo.changelog/blob/v0.0.8/src/cangulo.changelog/Models/ChangelogSettings.cs",mdxType:"CaptionDocusaurus"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Idea!")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("details",null,(0,i.kt)("summary",null,"Define those settings in a json file, maybe your appsettings, and parse them. Click Here to check an example"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "commitsMode": "conventionalCommits",\n    "conventionalCommitsSettings": {\n        "types": [\n            "fix",\n            "patch",\n            "refactor",\n            "feat",\n            "major",\n            "break",\n            "docs"\n        ]\n    }\n}\n')),(0,i.kt)(s.CaptionDocusaurus,{label:"Example at cangulo.nuke.releasecreator",linkIsRelative:!1,link:"https://github.com/cangulo-nuke/cangulo.nuke.releasecreator/blob/v0.0.1/cicd/releaseSettings.json#L38",mdxType:"CaptionDocusaurus"})))),(0,i.kt)("hr",null),(0,i.kt)(s.ShareDocusaurus,{slug:"docs/registering-the-services",title:"cangulo.changelog - Registering the services",tags:["nuke","cicd","cangulo.changelog","conventional_commits","changelog"],mdxType:"ShareDocusaurus"}))}p.isMDXComponent=!0}}]);