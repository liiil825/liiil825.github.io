(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{199:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(18);var r=a(0),i=a.n(r),n=a(204),o=a(210),s=a(209),l=a(207),d=a(202);var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,c=a.next;return i.a.createElement(s.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement(o.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,c&&i.a.createElement(n.a,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →"))))},r}(i.a.Component);t.default=c;var u="3654438753"},202:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return d});var r=a(214),i=a.n(r),n=a(215),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,d=s.scale},203:function(e,t,a){var r;e.exports=(r=a(205))&&r.default||r},204:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(66),o=a.n(n);a.d(t,"a",function(){return o.a});a(203),a(9).default.enqueue,i.a.createContext({})},205:function(e,t,a){"use strict";a.r(t);a(18);var r=a(0),i=a.n(r),n=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?i.a.createElement(n.a,Object.assign({location:t,pageResources:a},a.json)):null}},206:function(e,t,a){"use strict";a(211)("fixed",function(e){return function(){return e(this,"tt","","")}})},207:function(e,t,a){"use strict";var r=a(208),i=a(0),n=a.n(i),o=a(216),s=a.n(o);function l(e){var t=e.description,a=e.lang,i=e.meta,o=e.title,l=r.data.site,d=t||l.siteMetadata.description;return n.a.createElement(s.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:d}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},208:function(e){e.exports={data:{site:{siteMetadata:{title:"Blog",description:"hello world",author:"lizhi"}}}}},209:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(202),o=(a(18),a(204));function s(e){var t,a=e.location,r=e.title;return t="/"===a.pathname?i.a.createElement("h1",{style:Object.assign({},Object(n.b)(1.5),{marginBottom:Object(n.a)(1.5),marginTop:0})},i.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):i.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},i.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),i.a.createElement("header",null,t)}var l=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return i.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(n.a)(24),padding:Object(n.a)(1.5)+" "+Object(n.a)(.75)}},i.a.createElement(s,this.props),i.a.createElement("main",null,this.props.children))},r}(i.a.Component);t.a=l},210:function(e,t,a){"use strict";a(206);var r=a(212),i=a(0),n=a.n(i),o=a(213),s=a.n(o),l=a(202);t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(s.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,"Written by ",n.a.createElement("strong",null,a)," who lives and works in San Francisco building useful things."," ",n.a.createElement("a",{href:"https://twitter.com/"+i.twitter},"You should follow him on Twitter")))}},211:function(e,t,a){var r=a(1),i=a(7),n=a(32),o=/"/g,s=function(e,t,a,r){var i=String(n(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},212:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGQABAQADAQAAAAAAAAAAAAAAAAUBAgME/8QAFwEBAQEBAAAAAAAAAAAAAAAAAgEAA//aAAwDAQACEAMQAAABtTuWpVlGTeDJ0HAG/wD/xAAbEAACAgMBAAAAAAAAAAAAAAABAgMTABEjJP/aAAgBAQABBQJzpYGe3LyGZxGLsY+mY8Yzof/EABgRAAIDAAAAAAAAAAAAAAAAAAABEBIh/9oACAEDAQE/AcKjj//EABkRAAEFAAAAAAAAAAAAAAAAAAABEBIhMf/aAAgBAgEBPwGyQmN//8QAIBAAAQIFBQAAAAAAAAAAAAAAAQARAgMQEiExQWGBkf/aAAgBAQAGPwItqmMdwNLT4n2JbCwQU/Kl90//xAAaEAEAAwEBAQAAAAAAAAAAAAABABEhMUFR/9oACAEBAAE/IUVXGRfSl5yZEWkVrGwnd6EDTA+sdXqEbIVcO+k//9oADAMBAAIAAwAAABD76AH/xAAZEQACAwEAAAAAAAAAAAAAAAAAAREhMVH/2gAIAQMBAT8QhKbI9NMWH//EABkRAAIDAQAAAAAAAAAAAAAAAAABEBEhUf/aAAgBAgEBPxBNtovyBrT/xAAeEAEBAQACAQUAAAAAAAAAAAABEQAhMUFRYXGBkf/aAAgBAQABPxClwdnV04hQo4lO/wAzyyjjEGw+cZbkILxecbfXBH7zaeBntAmta2n5uEBbXZ4N/9k=",width:50,height:50,src:"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg",srcSet:"/static/4f27694bd7811d13157e5e488ad64f43/9b664/profile-pic.jpg 1x,\n/static/4f27694bd7811d13157e5e488ad64f43/06a10/profile-pic.jpg 1.5x,\n/static/4f27694bd7811d13157e5e488ad64f43/f1b5a/profile-pic.jpg 2x"}}},site:{siteMetadata:{author:"lizhi",social:{twitter:"kylemathews"}}}}}},213:function(e,t,a){"use strict";a(29),a(30),a(13),a(93),a(135),a(206);var r=a(14);t.__esModule=!0,t.default=void 0;var i,n=r(a(68)),o=r(a(71)),s=r(a(139)),l=r(a(140)),d=r(a(0)),c=r(a(52)),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,m="undefined"!=typeof window,h=m&&window.IntersectionObserver,b=new WeakMap;function y(e){return e.map(function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))})}function E(e){var t=[],a=[];return e.forEach(function(e){return(e.media?t:a).push(e)}),t.concat(a)}function v(e){return e.map(function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function w(e){return e.map(function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})})}function S(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var B=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}})},{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map(function(e){return(e.srcSetWebp?S(e,!0):"")+S(e)}).join("")+"<img "+d+o+s+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(O,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},O=d.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});O.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var R=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=m&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&h&&!t.critical&&!a.seenBefore;var r=t.critical||m&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=B(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,g=e.fixed,m=e.backgroundColor,h=e.durationFadeIn,b=e.Tag,E=e.itemProp,S=e.loading,B=e.draggable,R=!1===this.state.fadeIn||this.state.imgLoaded,I=!0===this.state.fadeIn&&!this.state.imgCached,L=(0,l.default)({opacity:R?1:0,transition:I?"opacity "+h+"ms":"none"},s),Q="boolean"==typeof m?"lightgray":m,N={transitionDelay:h+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},I&&N,s,f),C={title:t,alt:this.state.isVisible?"":a,style:M,className:A};if(p){var k=p,T=k[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},I&&N)}),T.base64&&d.default.createElement(x,{src:T.base64,spreadProps:C,imageVariants:k,generateSources:w}),T.tracedSVG&&d.default.createElement(x,{src:T.tracedSVG,spreadProps:C,imageVariants:k,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,y(k),d.default.createElement(O,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:B})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:S},T,{imageVariants:k}))}}))}if(g){var V=g,z=V[0],G=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:z.width,height:z.height},n);return"inherit"===n.display&&delete G.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:G,ref:this.handleRef,key:"fixed-"+JSON.stringify(z.srcSet)},Q&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:Q,width:z.width,opacity:this.state.imgLoaded?0:1,height:z.height},I&&N)}),z.base64&&d.default.createElement(x,{src:z.base64,spreadProps:C,imageVariants:V,generateSources:w}),z.tracedSVG&&d.default.createElement(x,{src:z.tracedSVG,spreadProps:C,imageVariants:V,generateSources:v}),this.state.isVisible&&d.default.createElement("picture",null,y(V),d.default.createElement(O,{alt:a,title:t,width:z.width,height:z.height,sizes:z.sizes,src:z.src,crossOrigin:this.props.crossOrigin,srcSet:z.srcSet,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:B})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:S},z,{imageVariants:V}))}}))}return null},t}(d.default.Component);R.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var I=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),L=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});R.propTypes={resolutions:I,sizes:L,fixed:c.default.oneOfType([I,c.default.arrayOf(I)]),fluid:c.default.oneOfType([L,c.default.arrayOf(L)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=R;t.default=Q}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-912b1c3345747a2d6cc0.js.map