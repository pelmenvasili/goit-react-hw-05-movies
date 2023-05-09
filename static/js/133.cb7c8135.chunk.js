"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[133],{133:function(e,t,r){r.r(t),r.d(t,{default:function(){return k}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),o=r(689),u=r(87),p="MovieDetails_movieDetailsItem__5wTbw",l="MovieDetails_detailsHeading__v1c8v",v="MovieDetails_castLink__s+MYh",h="MovieDetails_reviewsLink__epHcZ",d="MovieDetails_backLink__+2RHd",m="MovieDetails_detailsValue__cJHg6",f="MovieDetails_infoContainer__mpbBo",_="MovieDetails_movieDetailsList__gk9kL",x="MovieDetails_moviePoster__euBLG",g=r(204),b=r(636),w=r(394),j=r(184),k=function(){var e,t=(0,i.useState)([]),r=(0,a.Z)(t,2),s=r[0],k=r[1],N=(0,o.UO)().movieId,Z=(0,o.TH)(),y=(0,i.useRef)((null===(e=Z.state)||void 0===e?void 0:e.from)||"/"),D=(0,i.useState)(!1),M=(0,a.Z)(D,2),L=M[0],U=M[1],S=(0,i.useState)(!1),R=(0,a.Z)(S,2),H=R[0],P=R[1];return(0,i.useEffect)((function(){P(!0);var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,b.Mc)(N);case 3:(t=e.sent)&&k(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&404===e.t0.response.status&&U(!0);case 10:return e.prev=10,P(!1),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[N]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(u.rU,{to:y.current,className:d,children:"Go back"}),H&&(0,j.jsx)(g.Z,{}),!H&&L&&(0,j.jsx)("p",{children:"There is no information about movie."}),s&&(0,j.jsx)("ul",{className:_,children:(0,j.jsxs)("li",{className:p,children:[(0,j.jsx)("img",{src:s.backdrop_path?"https://image.tmdb.org/t/p/w500".concat(s.backdrop_path):s.poster_path?"https://image.tmdb.org/t/p/w500".concat(s.poster_path):w,alt:"movie poster",className:x,width:"450",height:"300"}),(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)("p",{className:l,children:(0,j.jsx)("b",{children:"Title:"})}),(0,j.jsx)("p",{className:m,children:s.title||s.original_title||s.name}),s.release_date?(0,j.jsxs)("p",{children:["(",s.release_date.substring(0,4),")"]}):(0,j.jsx)("p",{children:"Date not specified"}),(0,j.jsx)("p",{className:l,children:(0,j.jsx)("b",{children:"User score:"})}),(0,j.jsx)("p",{className:m,children:s.vote_average&&!isNaN(s.vote_average)?Math.round(s.vote_average):"-"}),(0,j.jsx)("p",{className:l,children:(0,j.jsx)("b",{children:"Description:"})}),(0,j.jsx)("p",{className:m,children:s.overview}),(0,j.jsx)("p",{className:l,children:(0,j.jsx)("b",{children:"Genres:"})}),(0,j.jsx)("p",{className:m,children:s.genres&&s.genres.map((function(e){return e.name.toLowerCase()})).join(", ")})]})]},s.id)}),(0,j.jsx)(u.rU,{to:"cast",className:v,children:"Cast"}),(0,j.jsx)(u.rU,{to:"reviews",className:h,children:"Reviews"}),(0,j.jsx)(i.Suspense,{fallback:(0,j.jsx)(g.Z,{}),children:(0,j.jsx)(o.j3,{})})]})}},636:function(e,t,r){r.d(t,{Hx:function(){return l},Mc:function(){return u},bI:function(){return v},uV:function(){return p},wr:function(){return o}});var n=r(861),a=r(757),s=r.n(a),c=r(243),i="85aded699850148534e98bbdd6991e7d",o=function(){var e=(0,n.Z)(s().mark((function e(){var t,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/trending/all/day",t=new URLSearchParams({api_key:i}),e.prev=2,e.next=5,c.Z.get("".concat("https://api.themoviedb.org/3/trending/all/day","?").concat(t));case 5:return r=e.sent,e.abrupt("return",r.data.results);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t),n=new URLSearchParams({api_key:i}),e.prev=2,e.next=5,c.Z.get("".concat(r,"?").concat(n));case 5:return a=e.sent,e.abrupt("return",a);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/credits"),n=new URLSearchParams({api_key:i}),e.prev=2,e.next=5,c.Z.get("".concat(r,"?").concat(n));case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="https://api.themoviedb.org/3/movie/".concat(t,"/reviews"),n=new URLSearchParams({api_key:i}),e.prev=2,e.next=5,c.Z.get("".concat(r,"?").concat(n));case 5:return a=e.sent,e.abrupt("return",a.data);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.themoviedb.org/3/search/movie",r=new URLSearchParams({api_key:i,query:t}),e.prev=2,e.next=5,c.Z.get("".concat("https://api.themoviedb.org/3/search/movie","?").concat(r));case 5:return n=e.sent,e.abrupt("return",n.data.results);case 9:e.prev=9,e.t0=e.catch(2),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},394:function(e,t,r){e.exports=r.p+"static/media/noimage.40fa56f524f6cd85da8b.png"}}]);
//# sourceMappingURL=133.cb7c8135.chunk.js.map