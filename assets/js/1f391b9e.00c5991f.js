"use strict";(self.webpackChunkcangulo_github_io=self.webpackChunkcangulo_github_io||[]).push([[85],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return d}});var t=n(7294),l=n(6010),i=n(1022),c=n(3905),s=n(7707),r=n(1575),m=n(9521),o="mdxPageWrapper_3qD3";var d=function(e){var a=e.content,n=a.frontMatter,d=a.metadata,u=n.title,v=n.description,f=n.wrapperClassName,g=n.hide_table_of_contents,N=d.permalink;return t.createElement(i.Z,{title:u,description:v,permalink:N,wrapperClassName:null!=f?f:m.kM.wrapper.mdxPages,pageClassName:m.kM.page.mdxPage},t.createElement("main",{className:"container container--fluid margin-vert--lg"},t.createElement("div",{className:(0,l.Z)("row",o)},t.createElement("div",{className:(0,l.Z)("col",!g&&"col--8")},t.createElement(c.Zo,{components:s.Z},t.createElement(a,null))),!g&&a.toc&&t.createElement("div",{className:"col col--2"},t.createElement(r.Z,{toc:a.toc,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level})))))}},1575:function(e,a,n){n.d(a,{Z:function(){return o}});var t=n(7462),l=n(3366),i=n(7294),c=n(6010),s=n(5002),r="tableOfContents_35-E",m=["className"];var o=function(e){var a=e.className,n=(0,l.Z)(e,m);return i.createElement("div",{className:(0,c.Z)(r,"thin-scrollbar",a)},i.createElement(s.Z,(0,t.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},5002:function(e,a,n){n.d(a,{Z:function(){return m}});var t=n(7462),l=n(3366),i=n(7294),c=n(9521),s=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function r(e){var a=e.toc,n=e.className,t=e.linkClassName,l=e.isChild;return a.length?i.createElement("ul",{className:l?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=t?t:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(r,{isChild:!0,toc:e.children,className:n,linkClassName:t}))}))):null}function m(e){var a=e.toc,n=e.className,m=void 0===n?"table-of-contents table-of-contents__left-border":n,o=e.linkClassName,d=void 0===o?"table-of-contents__link":o,u=e.linkActiveClassName,v=void 0===u?void 0:u,f=e.minHeadingLevel,g=e.maxHeadingLevel,N=(0,l.Z)(e,s),_=(0,c.LU)(),k=null!=f?f:_.tableOfContents.minHeadingLevel,C=null!=g?g:_.tableOfContents.maxHeadingLevel,p=(0,c.DA)({toc:a,minHeadingLevel:k,maxHeadingLevel:C}),h=(0,i.useMemo)((function(){if(d&&v)return{linkClassName:d,linkActiveClassName:v,minHeadingLevel:k,maxHeadingLevel:C}}),[d,v,k,C]);return(0,c.Si)(h),i.createElement(r,(0,t.Z)({toc:p,className:m,linkClassName:d},N))}}}]);