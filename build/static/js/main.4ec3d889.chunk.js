(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],[,,,,,,,,,,,function(e,t){function c(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}c.keys=function(){return[]},c.resolve=c,e.exports=c,c.id=11},function(e,t){},,,,,,,,,,,function(e,t,c){},,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(13),s=c.n(n),r=(c(23),c.p+"static/media/logo.e0236261.svg"),i=c(1),l=function(){return Object(i.jsx)("nav",{className:"navbar navbar-light bg-dark shadow",children:Object(i.jsxs)("div",{className:"container-fluid",children:[Object(i.jsx)("img",{className:"navbar-brand",src:r,alt:"Tweet2Img"}),Object(i.jsx)("div",{className:"d-flex",children:Object(i.jsx)("a",{className:"text-white",target:"_blank",rel:"noreferrer",href:"https://github.com/virensuthar/tweet2img",children:"Github"})})]})})},o=c(3),j=c.p+"static/media/verified.a42bdedd.svg",b=c(10),d=c(14),u=c(15),m=c(18),h=c(17),O=Object(a.createContext)(),f=function(e){Object(m.a)(c,e);var t=Object(h.a)(c);function c(){var e;Object(d.a)(this,c);for(var a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={isLightTheme:!1,light:{fill:"#1DA1F2",text:"#0F1419",bg:"#ffffff"},dark:{fill:"#D9D9D9",text:"#D9D9D9",bg:"#000000"}},e.tweetThemeToggle=function(){e.setState({isLightTheme:!e.state.isLightTheme})},e}return Object(u.a)(c,[{key:"render",value:function(){return Object(i.jsx)(O.Provider,{value:Object(b.a)(Object(b.a)({},this.state),{},{tweetThemeToggle:this.tweetThemeToggle}),children:this.props.children})}}]),c}(a.Component),p=Object(a.createContext)(),x=function(e){var t=Object(a.useState)({bgOpacity:"1",borderRadius:"5"}),c=Object(o.a)(t,2),n=c[0],s=c[1],r=Object(a.useState)({file:"",link:"",color:"",search:""}),l=Object(o.a)(r,2),j=l[0],b=l[1];return Object(i.jsx)(p.Provider,{value:[n,s,j,b],children:e.children})},g=c(16),v=c.n(g),N=(c(25),c(7));var w=function(){var e=Object(a.useContext)(O),t=e.isLightTheme,c=e.light,n=e.dark,s=t?c:n,r=Object(a.useState)([]),l=Object(o.a)(r,2),b=l[0],d=l[1],u=Object(a.useContext)(p),m=Object(o.a)(u,2),h=m[0],f=(m[1],window.location.search),x=new URLSearchParams(f).get("url");console.log(x);var g=Object(N.b)(),w=Object(o.a)(g,2),y=(w[0],w[1],function(){var e=document.getElementById("tweetpost-download");v()(e,{useCORS:!0}).then((function(e){var t=document.createElement("a");t.href=e.toDataURL("image/png"),console.log(t.href),t.download="tweet-image.png",t.click(),setTimeout((function(){window.close()}),5e3)}))});return Object(a.useEffect)((function(){setTimeout((function(){y()}),6e3)}),[]),Object(a.useEffect)((function(){var e=new URL(x).pathname.split("/")[3];fetch("https://twitter.skyex.me/api/tweets",{method:"POST",body:JSON.stringify({tweetId:e}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){d([e])})).catch((function(e){return console.log(e)}))}),[]),Object(i.jsxs)("div",{className:"tweet_image",children:[Object(i.jsx)("div",{className:"main_post",style:{background:"#010405".concat(" no-repeat center/cover")},id:"tweetpost-download",children:b.map((function(e){return Object(i.jsxs)("div",{className:"tweet_post",style:{color:s.text,borderRadius:"".concat(h.borderRadius,"px"),background:"#ffffff"===s.bg?"rgba(255, 255,255, ".concat(h.bgOpacity,")"):"rgba(0, 0, 0, ".concat(h.bgOpacity,")")},children:[Object(i.jsxs)("div",{className:"profile",children:[Object(i.jsx)("img",{src:e.includes.users[0].profile_image_url,alt:"Pofile pic"}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("p",{className:"name mb-0",children:[e.includes.users[0].name,Object(i.jsx)("span",{children:e.includes.users[0].verified?Object(i.jsx)("img",{className:"verified",src:j,alt:"verified symbol",style:{fill:s.fill}}):""})]}),Object(i.jsxs)("p",{className:"username mb-0 mt-1",children:["@",e.includes.users[0].username]})]})]}),Object(i.jsx)("p",{className:"tweet_text mb-0",children:e.data.text})]},e.data.id)}))}),Object(i.jsx)("button",{className:"btn btn-primary btn-md my-4",onClick:y,children:"Download"})]})},y=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(o.a)(s,2),l=r[0],j=r[1];return Object(i.jsxs)("div",{className:"tweet_input",children:[Object(i.jsx)("form",{onSubmit:function(e){e.preventDefault();var t=new URL(c).pathname.split("/")[3];fetch("/api/tweets",{method:"POST",body:JSON.stringify({tweetId:t}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){j([e])})).catch((function(e){return console.log(e)})),n("")},className:"my-5",children:Object(i.jsxs)("div",{className:"input-group tweet-link-input",children:[Object(i.jsx)("input",{type:"text",id:"tweeturl",required:!0,value:c,className:"form-control",placeholder:"Paste a link of your tweet here",onChange:function(e){return n(e.target.value)}}),Object(i.jsx)("button",{className:"btn btn-outline-primary ml-2",type:"submit",children:"Create"})]})}),Object(i.jsx)(w,{tweets:l})]})},S=function(){return Object(i.jsx)("footer",{className:"container-fluid bg-light p-3 mb-0 shadow border-top"})},C=c(5),T=function(){var e=Object(a.useContext)(p),t=Object(o.a)(e,2),c=(t[0],t[1]),n=Object(a.useState)(""),s=Object(o.a)(n,2),r=s[0],l=s[1],j=Object(a.useState)(""),b=Object(o.a)(j,2),d=b[0],u=b[1],m=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_UNSPLASH_KEY,h=Object(a.useState)([]),O=Object(o.a)(h,2),f=O[0],x=O[1],g=Object(a.useState)([]),v=Object(o.a)(g,2),N=v[0],w=v[1];Object(a.useEffect)((function(){setTimeout((function(){u("#030f13"),c({color:"#030f13"})}),5e3)}),[]);return Object(i.jsx)("div",{children:Object(i.jsxs)(C.d,{className:"tabs",children:[Object(i.jsxs)(C.b,{className:"tablist d-flex justify-content-between p-3 mb-0",children:[Object(i.jsx)(C.a,{className:"tab",children:"Upload files"}),Object(i.jsx)(C.a,{className:"tab",children:"URL"}),Object(i.jsx)(C.a,{className:"tab",children:"Color"}),Object(i.jsx)(C.a,{className:"tab",children:"Search"})]}),Object(i.jsx)("hr",{className:"m-0"}),Object(i.jsx)(C.c,{className:"tabpanel",children:Object(i.jsx)("input",{type:"file",accept:"image/*",className:"form-control-sm m-3",onChange:function(e){var t=e.target.files[0],a=new FileReader;a.readAsDataURL(t),a.onload=function(){c({file:a.result})},a.onerror=function(e){console.log("Error: ",e)}}})}),Object(i.jsx)(C.c,{className:"tabpanel px-3",children:Object(i.jsxs)("div",{className:"input-group my-3 d-flex flex-cloumn",children:[Object(i.jsx)("input",{type:"text",className:"form-control w-75",placeholder:"Image URL",value:r,onChange:function(e){return l(e.target.value)}}),Object(i.jsx)("button",{className:"btn btn-primary w-100 mt-3 mx-auto",onClick:function(){return c({link:r})},children:"Submit"})]})}),Object(i.jsx)(C.c,{className:"tabpanel",children:Object(i.jsxs)("div",{className:"m-3",children:[Object(i.jsx)("label",{htmlFor:"color",className:"mb-0",children:"Select color"}),Object(i.jsx)("input",{type:"color",className:"ml-2",id:"color",value:d,onChange:function(e){u(e.target.value),c({color:d})}})]})}),Object(i.jsxs)(C.c,{className:"tabpanel ",children:[Object(i.jsxs)("form",{className:"d-flex m-3",children:[Object(i.jsx)("input",{className:"form-control",type:"search",placeholder:"i.e. Dog","aria-label":"Search",onChange:function(e){x(e.target.value)}}),Object(i.jsx)("button",{className:"btn btn-outline-primary ml-2",type:"submit",onClick:function(e){e.preventDefault(),fetch("https://api.unsplash.com/search/photos?page=1&query="+f+"&client_id="+m).then((function(e){return e.json()})).then((function(e){w(e.results)})).catch((function(e){return console.log(e)}))},children:"Search"})]}),Object(i.jsx)("hr",{className:"m-0"}),Object(i.jsx)("div",{className:"search_section",children:N.map((function(e){return Object(i.jsx)("img",{src:e.urls.thumb,alt:"unsplash images",className:"search_img",onClick:function(){return c({search:e.urls.raw})}},e.id)}))})]})]})})};var _=function(){var e=Object(a.useContext)(O).tweetThemeToggle,t=Object(a.useContext)(p),c=Object(o.a)(t,2),n=(c[0],c[1]),s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],j=r[1],b=Object(a.useState)("17"),d=Object(o.a)(b,2),u=d[0],m=d[1];return Object(i.jsxs)("div",{className:"config_bar my-4 border border-1 rounded-lg p-4",children:[Object(i.jsxs)("div",{className:"text-secondary text-center mt-2",children:[Object(i.jsx)("h2",{children:"Tweet2img"}),Object(i.jsx)("p",{className:"mt-3",children:"Create beautiful posts from your tweets easily."})]}),Object(i.jsxs)("div",{className:"border rounded mt-4 shadow-sm",children:[Object(i.jsx)("p",{className:"p-2 mb-0",children:"Tweet Background"}),Object(i.jsx)("hr",{className:"m-0"}),Object(i.jsx)("div",{className:"p-3",children:Object(i.jsx)("button",{className:"btn btn-sm btn-primary",onClick:e,children:"Toggle theme"})})]}),Object(i.jsx)("div",{className:"border rounded mt-3 shadow-sm",children:Object(i.jsxs)("details",{className:" outline-none",children:[Object(i.jsx)("summary",{className:"m-2",children:"Background Image"}),Object(i.jsx)("hr",{className:"mt-2 mb-0"}),Object(i.jsx)("div",{children:Object(i.jsx)(T,{})})]})}),Object(i.jsxs)("div",{className:"border rounded mt-3 shadow-sm",children:[Object(i.jsxs)("div",{className:"p-3",children:[Object(i.jsx)("label",{htmlFor:"opacity",className:"form-label d-block",children:"Opacity"}),Object(i.jsx)("input",{type:"range",className:"form-range w-100",min:"0",max:"1",step:"0.1",id:"opacity",value:l,onChange:function(e){j(e.target.value),n({bgOpacity:l})}})]}),Object(i.jsx)("hr",{className:"m-0"}),Object(i.jsxs)("div",{className:"p-3",children:[Object(i.jsx)("label",{htmlFor:"radius",className:"form-label d-block",children:"Border Radius"}),Object(i.jsx)("input",{type:"range",className:"form-range w-100",min:"0",max:"15",step:"1",id:"radius",value:u,onChange:function(e){m(e.target.value),n({borderRadius:u})}})]})]})]})},k=c(2);var D=function(){return Object(i.jsx)(k.c,{children:Object(i.jsx)(k.a,{path:"/:url",exact:!0,element:Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"grid-compo container-fluid",children:Object(i.jsx)(f,{children:Object(i.jsxs)(x,{children:[Object(i.jsx)(y,{}),Object(i.jsx)(_,{})]})})}),Object(i.jsx)(S,{})]})})})})};s.a.render(Object(i.jsx)(N.a,{children:Object(i.jsx)(D,{})}),document.getElementById("root"))}],[[36,1,2]]]);
//# sourceMappingURL=main.4ec3d889.chunk.js.map