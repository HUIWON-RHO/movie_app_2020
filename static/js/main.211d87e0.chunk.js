(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{22:function(e,t,a){e.exports=a(55)},45:function(e,t,a){},46:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(13),i=a.n(s),c=a(3),o=a.n(c),m=a(14),l=a(15),u=a(16),v=a(20),p=a(17),d=a(21),_=a(18),g=a.n(_);a(45);var y=function(e){var t=e.year,a=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{class:"movies__movie"},r.a.createElement("img",{src:s,alt:a,title:a}),r.a.createElement("div",{class:"movie__date"},r.a.createElement("h3",{class:"movie__title"},a),r.a.createElement("h5",{class:"movie__year"},t),r.a.createElement("ul",{className:"movie__genres"},i.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{class:"movie__summary"},n.slice(0,200),"...")))},E=(a(46),a(19)),h=a.n(E),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))),r.a.createElement(h.a,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"My Title123"),r.a.createElement("meta",{name:"description",content:"Nested component"}),r.a.createElement("meta",{property:"og:image",content:"https://huiwon-rho.github.io/kakao-clone-2.0/images/preview1.JPG"})))}}]),t}(r.a.Component);i.a.render(r.a.createElement(f,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.211d87e0.chunk.js.map