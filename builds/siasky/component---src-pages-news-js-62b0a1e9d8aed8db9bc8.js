(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3],{3165:function(e,t,a){"use strict";a.d(t,{X:function(){return l}});var r=a(7294),n=a(2407);function l(e){var t=e.avatar,a=e.author,l=e.date;return r.createElement("div",{className:"flex space-x-4"},t&&r.createElement(n.G,{image:(0,n.d)(t),alt:a||"Skynet Labs",className:"rounded-full"}),r.createElement("div",{className:"flex flex-col text-xs justify-around h-10"},r.createElement("div",{className:"text-palette-600"},a||"Skynet Labs"),l&&r.createElement("div",{className:"text-palette-400"},l)))}},3834:function(e,t,a){"use strict";a.r(t);var r=a(7294),n=a(2407),l=a(5096),s=a(3165),c=a(8352),m=a(3751),i=function(e){var t=Object.assign({},e),a={to:!t.frontmatter.external&&t.fields.slug,href:t.frontmatter.external};return r.createElement("div",{className:"flex flex-col"},r.createElement(c.Z,Object.assign({},a,{className:"flex items-center"}),r.createElement(n.G,{image:(0,n.d)(t.frontmatter.thumbnail),alt:t.frontmatter.title})),t.frontmatter.categories&&r.createElement("div",{className:"mt-6"},t.frontmatter.categories.map((function(e){return r.createElement(l.__,{key:e},e)}))),r.createElement(c.Z,Object.assign({},a,{className:"text-xl mt-6"}),t.frontmatter.title),t.frontmatter.description&&r.createElement(c.Z,Object.assign({},a,{className:"font-content text-palette-400 mt-4"}),t.frontmatter.description),r.createElement("div",{className:"mt-6"},r.createElement(s.X,{avatar:t.frontmatter.avatar,author:t.frontmatter.author,date:t.frontmatter.date})))};t.default=function(e){var t=e.data;return r.createElement(r.Fragment,null,r.createElement(m.Z,{title:"News"}),r.createElement(l.$0,{className:"bg-white",first:!0},r.createElement("div",{className:"hidden desktop:block bg-white bg-column absolute top-0 left-0 right-0",style:{height:"400px"}}),r.createElement("div",{className:"grid grid-cols-1 desktop:grid-cols-3 gap-x-8 gap-y-24"},t.allMarkdownRemark.edges.map((function(e){var t=e.node;return r.createElement(i,Object.assign({key:t.id},t))})))))}}}]);
//# sourceMappingURL=component---src-pages-news-js-62b0a1e9d8aed8db9bc8.js.map