(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},15:function(e,a,n){"use strict";n.r(a);var d=n(0),i=n.n(d),r=n(6),o=n.n(r),l=(n(14),n(1)),t=n(2),m=n(4),c=i.a.createContext({testContext:function(){return arguments.length>0&&void 0!==arguments[0]?arguments[0]:"TEST"},handleCharClick2:function(e){return e}}),s="https://wischli.github.io/smashbros-random-with-bans/images/character_icons",p=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="",d=1;e.played?(n="#00cc51",d=.6):e.enabled?(n="white",d=1):e.enabled||(n="#ff0000b8",d=.6);var i={character:{maxWidth:window.innerWidth<1e3?60:85,maxHeight:window.innerWidth<1e3?60:85,backgroundColor:n,borderRadius:"100%",display:e.display?"block":"none"},image:{margin:"auto",display:"block",maxWidth:window.innerWidth<1e3?55:80,padding:(e.enabled,1),opacity:d},characters:{backgroundColor:"#486471",padding:window.innerWidth<1e3?5:30,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",flexFlow:"row wrap",alignContent:"flex-end"}};return a in i?i[a]:""};function y(e){var a=e.split(/[. \-&]/g).map(function(e){return e.toLowerCase()}).join("");return"".concat(s,"/").concat(a,".png")}var h=function(e){var a=e.character,n=Object(d.useContext)(c).handleCharClick;return i.a.createElement("div",{className:"character",role:"button",tabIndex:0,id:a.id,onClick:function(){return n(a.id)},onKeyPress:function(){return n(a.id)},style:p(a,"character")},i.a.createElement("img",{src:y(a.name),style:p(a,"image"),alt:a.name}))},b=function(){var e=Object(d.useContext)(c),a=e.characters,n=e.themeStyle;return i.a.createElement("div",{className:"characters",style:Object(l.a)({},p(a,"characters"),{backgroundColor:n.backgroundColor})},a.map(function(e){return i.a.createElement(h,{key:e.id,character:e})}))},u=[{id:1,name:"Mario",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:43,name:"Dr. Mario",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:2,name:"Luigi",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:3,name:"Peach",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[3.5],display:!0,moves:[]},{id:3.5,name:"Daisy",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[3],display:!0,moves:[]},{id:4,name:"Bowser",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:5,name:"Yoshi",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:6,name:"Rosalina & Luma",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:7,name:"Donkey Kong",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:8,name:"Diddy Kong",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:9,name:"Link",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:10,name:"Zelda",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:11,name:"Sheik",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:45,name:"Ganondorf",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:12,name:"Toon Link",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:12.9,name:"Young Link",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:13,name:"Samus",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[13.5],display:!0,moves:[]},{id:13.5,name:"Dark Samus",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[13],display:!0,moves:[]},{id:14,name:"Zero Suit Samus",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:15,name:"Pit",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[15],display:!0,moves:[]},{id:15.5,name:"Dark Pit",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[15.5],display:!0,moves:[]},{id:16,name:"Palutena",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:17,name:"Marth",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[17.5],display:!0,moves:[]},{id:17.5,name:"Lucina",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[17],display:!0,moves:[]},{id:18,name:"Ike",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:19,name:"Robin",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:20,name:"Kirby",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:21,name:"King Dedede",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:22,name:"Meta Knight",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:23,name:"Little Mac",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:24,name:"Fox",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:25,name:"Pikachu",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:25.9,name:"Pichu",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:26,name:"Pokemon Trainer",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:27,name:"Lucario",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:28,name:"Greninja",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:29,name:"Captain Falcon",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:30,name:"Villager",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:31,name:"Olimar",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:32,name:"Wii Fit Trainer",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:33,name:"Shulk",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:34,name:"Pac-Man",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:35,name:"Mega Man",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:36,name:"Sonic",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:38,name:"Ness",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:39,name:"Falco",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:40,name:"Wario",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:41,name:"Snake",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:42,name:"Ice Climbers",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:44,name:"R.O.B.",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:46,name:"Mr. Game & Watch",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:47,name:"Bowser Jr.",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:48,name:"Duck Hunt",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:49,name:"Jigglypuff",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:50,name:"Mewtwo",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:51,name:"Lucas",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:52,name:"Roy",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[52.5],display:!0,moves:[]},{id:52.5,name:"Chrom",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[52],display:!0,moves:[]},{id:53,name:"Ryu",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[53.5],display:!0,moves:[]},{id:53.5,name:"Ken",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[53],display:!0,moves:[]},{id:54,name:"Cloud",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:55,name:"Corrin",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:56,name:"Bayonetta",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:57,name:"Mii Fighter Brawler",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:58,name:"Mii Fighter Shooter",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:59,name:"Mii Fighter Sword",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:60,name:"Inkling",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:61,name:"Ridley",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:62,name:"Simon",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[62.5],display:!0,moves:[]},{id:62.5,name:"Richter",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[62],display:!0,moves:[]},{id:63,name:"King K. Rool",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:64,name:"Isabelle",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:65,name:"Incineroar",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:66,name:"Piranha Plant",media:[],nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]}],k=function(){var e=Object(d.useContext)(c),a=e.characters,n=e.themeStyle,r=e.handleNextClick,o=e.handlePrevClick,t=e.displayCard,m=e.handleDisplayClick,s=a[0];return i.a.createElement("div",{className:"card",style:Object(l.a)({},n.card,{display:t?"block":"none"})},i.a.createElement("button",{type:"button",style:Object(l.a)({},n.cardClose),onClick:function(){return m(t)},className:"close"}),i.a.createElement("h2",{style:n.cardTitle},s.name),i.a.createElement("img",{src:y(s.name),style:Object(l.a)({},n.cardImg),alt:s.name}),i.a.createElement("div",{style:Object(l.a)({},n.buttonRow)},i.a.createElement("button",{type:"button",style:Object(l.a)({},n.button,n.buttonLeft),onClick:function(){return o(a)}},"Prev"),i.a.createElement("button",{type:"button",style:Object(l.a)({},n.button,n.buttonRight),onClick:function(){return r(a)}},"Next")))},v=n(7),O=function(e){for(var a=e.characters,n=e.id,d=0;d<a.length;d+=1)if(a[d].id===n)return a[d];throw new Error("Cannot find character with id ".concat(n))},f=function(e){var a=[],n=[];return{enabled:e.filter(function(e){return e.played?a.push(e):e.enabled||n.push(e),!e.played&&e.display&&e.enabled}),played:a,disabled:n,hidden:[]}},g=function(e){var a=[];return Object.values(e).map(function(e){return a=[].concat(Object(t.a)(a),Object(t.a)(e)),""}),a},C={width:"calc(100% - 20px)",padding:"10px",display:"flex",flexWrap:"nowrap",justifyContent:"space-between",backgroundColor:"#466370",position:"fixed",height:50,top:0,alignItems:"center"},w=function(){var e=Object(d.useState)(!1),a=Object(m.a)(e,2),n=a[0],r=a[1],o=Object(d.useContext)(c),s=o.characters,p=o.themeStyle,y=o.displayCard,h=o.handleRandomizeClick,b=o.handleCookieLoad,k=o.handleDisplayClick,f=o.handleEchoClick,g=o.options,w=new v.a,j=function(){var e=w.get("characters");if(e){var a=e.enabled,n=e.played,d=e.disabled;a.length+n.length+d.length===u.length&&b(function(e){var a=e.characters,n=e.enabled,d=e.played,i=e.disabled,r=n.map(function(e){return O({characters:a,id:e})});return r.push.apply(r,Object(t.a)(d.map(function(e){return Object(l.a)({},O({characters:a,id:e}),{played:!0})}))),r.push.apply(r,Object(t.a)(i.map(function(e){return Object(l.a)({},O({characters:a,id:e}),{enabled:!1})}))),r}({characters:u,enabled:a,played:n,disabled:d}))}else console.log("No character save (cookie) found.")},x=g.echo?"Hide Echoes":"Show Echoes";return i.a.createElement("div",{className:"nav",style:C},i.a.createElement("button",{type:"button",style:Object(l.a)({},p.button,{width:"100%"}),onClick:function(){return y?f():j()}},y?x:"Load Chars"),i.a.createElement("button",{type:"button",style:Object(l.a)({},p.button,{width:"100%"}),onClick:function(){return y?k(y):void(n?k(!y):(r(!0),h(s)))}},y?"To Selection":n?"Show Card":"Randomize"),i.a.createElement("button",{type:"button",style:Object(l.a)({},p.button,{width:"100%"}),onClick:function(){return function(e){var a=e.reduce(function(e,a){return a.played?e.played.push(a.id):a.enabled?e.enabled.push(a.id):e.disabled.push(a.id),e},{enabled:[],played:[],disabled:[]});w.set("characters",JSON.stringify(a),{path:"/"})}(s)}},"Save Chars"))},j={backgroundColor:"#486471",button:{height:"50px",fontSize:"15px",fontWeight:"700",textAlign:"center",justifyContent:"center",flexDirection:"row",borderRadius:"5px",textTransform:"uppercase",letterSpacing:"1px",border:"2px solid"},buttonLeft:{width:"49%",backgroundColor:"#ffb3b3",color:"#383838",borderColor:"#383838"},buttonRight:{width:"49%",backgroundColor:"#99f9ae",color:"black",borderColor:"black"},card:{border:"1px solid rgba(0, 0, 0, 0.125)",borderRadius:"0.25rem",width:250,backgroundColor:"#002f46",position:"absolute",top:100,left:0,right:0,marginLeft:"auto",marginRight:"auto",zIndex:1e3,padding:10},buttonRow:{display:"flex",justifyContent:"space-around"},cardImg:{marginLeft:"auto",marginRight:"auto",display:"block",marginBottom:20,marginTop:20},cardClose:{position:"absolute",top:"-5px",background:"#ff000000",height:"50px",width:"50px",right:"-3px",borderColor:"transparent"},cardTitle:{color:"#aacdde",textAlign:"center",margin:0,fontSize:"1.75rem"}},x={echo:!0},E=function(){var e=Object(d.useState)(Object(t.a)(u)),a=Object(m.a)(e,2),n=a[0],r=a[1],o=Object(d.useState)(x),s=Object(m.a)(o,2),p=s[0],y=s[1],h=Object(d.useState)(!1),v=Object(m.a)(h,2),O=v[0],C=v[1],E=function(){return C(!O)},S=function(e){return e.echo.length&&e.echo[0]%1!==0?!e.display:e.display};return i.a.createElement(c.Provider,{value:{characters:n,handleCharClick:function(e){return r(function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1;return e.map(function(e){return e.id===a?Object(l.a)({},e,{enabled:!e.enabled}):Object(l.a)({},e)})}(n,e))},themeStyle:j,handleEchoClick:function(){r(n.map(function(e){return Object(l.a)({},e,{display:S(e)})})),y(Object(l.a)({},p,{echo:!p.echo}))},handleCookieLoad:function(e){return r(e)},handleNextClick:function(e){var a=e.filter(function(e){return e.display});r(function(e){e.filter(function(e){return e.played||!e.enabled}).length===e.length-1&&setTimeout(function(){console.log("Done Bro, resetting..."),r(u.map(function(e){return Object(l.a)({},e,{enabled:!0,played:!1})}))},1e3);var a=Object(t.a)(e),n=Object(l.a)({},a.shift(),{played:!0});return a.push(n),g(f(a))}(a))},handlePrevClick:function(e){var a=Object(t.a)(e),n=function(e){if(!e.length)throw new Error("Chars empty");for(var a=e.length-1;a>-1;a-=1)if(e[a].played)return a;return 0}(e),d=e[n];return d.played?(d.played=!1,r([d].concat(Object(t.a)(e.slice(0,n-1)),Object(t.a)(e.slice(n-1,-1))))):a},handleDisplayClick:E,handleRandomizeClick:function(e){r(function(e){for(var a,n=f(e),d=n.enabled,i=n.played,r=n.disabled,o=d.length;0!==o;){a=Math.floor(Math.random()*o);var l=[d[o-=1],d[a]];d[a]=l[0],d[o]=l[1]}return g({enabled:d,played:i,disabled:r})}(e)),E()},displayCard:O,options:p}},i.a.createElement("div",{className:"wrapper"},i.a.createElement("meta",{meta:!0,name:"viewport",content:"width=device-width, user-scalable=no"}),i.a.createElement("div",{className:"content",style:{marginTop:70,height:"100vh",backgroundColor:"rgb(72, 100, 113)",opacity:O?.5:1}},i.a.createElement(b,null)),i.a.createElement(w,null),i.a.createElement(k,null)))};o.a.render(i.a.createElement(E,null),document.getElementById("root"))},8:function(e,a,n){e.exports=n(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.a61d694a.chunk.js.map