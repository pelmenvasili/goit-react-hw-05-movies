"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),o=n(636),u=n(87),p=n(689),h={searchInput:"Movies_searchInput__t20IP",searchBtn:"Movies_searchBtn__tjXEL"},l=n(395),v=n(204),f=n(184),m=function(){var t,e=(0,i.useState)([]),n=(0,a.Z)(e,2),c=n[0],m=n[1],d=(0,i.useState)(!1),_=(0,a.Z)(d,2),g=_[0],x=_[1],w=(0,i.useState)(!1),b=(0,a.Z)(w,2),Z=b[0],k=b[1],y=(0,u.lr)(),j=(0,a.Z)(y,2),L=j[0],S=j[1],M=null!==(t=L.get("query"))&&void 0!==t?t:"",N=(0,i.useState)(""),I=(0,a.Z)(N,2),P=I[0],U=I[1],R=(0,p.TH)();(0,i.useEffect)((function(){if(M){var t=function(){var t=(0,r.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,x(!0),t.next=4,(0,o.bI)(M);case 4:e=t.sent,m(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),t.t0.response&&404===t.t0.response.status&&k(!0);case 11:return t.prev=11,x(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();t()}}),[M]);return(0,f.jsxs)("div",{className:h.container,children:[(0,f.jsxs)("form",{onSubmit:function(t){t.preventDefault(),""!==P&&S({query:P})},children:[(0,f.jsx)("input",{placeholder:"Search movies...",value:P,onChange:function(t){U(t.target.value.trim())},className:h.searchInput}),(0,f.jsx)("button",{type:"submit",className:h.searchBtn,children:"Search"})]}),g&&(0,f.jsx)(v.Z,{}),Z&&(0,f.jsx)("h2",{children:"Data not available"}),c.length>0&&(0,f.jsx)(l.Z,{movies:c,state:{from:R}}),0===c.length&&""!==M&&(0,f.jsxs)("p",{children:['No movies found with the title "',M,'"']})]})}},395:function(t,e,n){n.d(e,{Z:function(){return h}});var r=n(87),a="MoviesList_movieTitle__4c-8q",c="MoviesList_moviePoster__01Lhg",s="MoviesList_movieList__IROBh",i="MoviesList_movieItem__MQ1mj",o="MoviesList_movieLink__UE1Jg",u=n(394),p=n(184),h=function(t){var e=t.movies,n=t.state;return(0,p.jsx)("ul",{className:s,children:e.map((function(t){return(0,p.jsx)("li",{className:i,children:(0,p.jsxs)(r.rU,{to:"/movies/".concat(t.id),state:{from:n.from},className:o,children:[(0,p.jsx)("img",{src:t.poster_path?"https://image.tmdb.org/t/p/w200".concat(t.poster_path):u,alt:"".concat(t.title," poster"),className:c,width:"250",height:"350"}),(0,p.jsx)("p",{className:a,children:t.title||t.title_original||t.name})]})},t.id)}))})}},636:function(t,e,n){n.d(e,{Hx:function(){return h},Mc:function(){return u},bI:function(){return l},uV:function(){return p},wr:function(){return o}});var r=n(861),a=n(757),c=n.n(a),s=n(243),i="85aded699850148534e98bbdd6991e7d",o=function(){var t=(0,r.Z)(c().mark((function t(){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/trending/all/day",e=new URLSearchParams({api_key:i}),t.prev=2,t.next=5,s.Z.get("".concat("https://api.themoviedb.org/3/trending/all/day","?").concat(e));case 5:return n=t.sent,t.abrupt("return",n.data.results);case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}(),u=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e),r=new URLSearchParams({api_key:i}),t.prev=2,t.next=5,s.Z.get("".concat(n,"?").concat(r));case 5:return a=t.sent,t.abrupt("return",a);case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/credits"),r=new URLSearchParams({api_key:i}),t.prev=2,t.next=5,s.Z.get("".concat(n,"?").concat(r));case 5:return a=t.sent,t.abrupt("return",a.data);case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r,a;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),r=new URLSearchParams({api_key:i}),t.prev=2,t.next=5,s.Z.get("".concat(n,"?").concat(r));case 5:return a=t.sent,t.abrupt("return",a.data);case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://api.themoviedb.org/3/search/movie",n=new URLSearchParams({api_key:i,query:e}),t.prev=2,t.next=5,s.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(n));case 5:return r=t.sent,t.abrupt("return",r.data.results);case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[2,9]])})));return function(e){return t.apply(this,arguments)}}()},394:function(t,e,n){t.exports=n.p+"static/media/noimage.40fa56f524f6cd85da8b.png"}}]);
//# sourceMappingURL=736.b99e9b79.chunk.js.map