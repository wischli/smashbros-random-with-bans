(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var d=n(0),r=n.n(d),i=n(7),o=n.n(i),t=(n(15),n(1)),l=n(2),c=r.a.createContext(null),m=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="",d=1;e.played?(n="#70f78e",d=.6):e.display?e.enabled?(n="white",d=1):e.enabled||(n="#ff6767b8",d=.6):(n="grey",d=.6);var r={character:{maxWidth:window.innerWidth<1e3?60:85,maxHeight:window.innerWidth<1e3?60:85,backgroundColor:n,borderRadius:"100%",display:"block,"},image:{margin:"auto",display:"block",maxWidth:window.innerWidth<1e3?55:80,padding:(e.enabled,1),opacity:d},characters:{backgroundColor:"#486471",padding:window.innerWidth<1e3?5:30,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",flexFlow:"row wrap",alignContent:"flex-end"}};return a in r?r[a]:""},s=function(e){var a=e.character,n=Object(d.useContext)(c).handleCharClick;return r.a.createElement("div",{className:"character",role:"button",tabIndex:0,id:a.id,onClick:function(){return n(a)},onKeyPress:function(){return n(a)},style:m(a,"character")},r.a.createElement("img",{src:a.media,style:m(a,"image"),alt:a.name,className:a.played?"played":a.enabled?"enabled":"disabled"}))},p=function(){var e=Object(d.useContext)(c),a=e.state,n=e.themeStyle;return r.a.createElement("div",{className:"characters",style:{backgroundColor:n.backgroundColor}},Object.keys(a).map(function(e){var d="characters ".concat(e);return r.a.createElement("div",{key:"".concat(e,"-wrapper"),style:n.characterRow},r.a.createElement("h2",{style:n.characterRowTitle},e),r.a.createElement("div",{className:d,style:Object(t.a)({},m(a.enabled[0],"characters")),key:e},a[e].map(function(e){return r.a.createElement(s,{key:e.id,character:e})})))}))},y=window.location.href.includes("local")?"".concat(window.location.href,"images/character_icons/"):"https://wischli.github.io/smashbros-random-with-bans/images/character_icons";function h(e){var a=e.split(/[. \-&]/g).map(function(e){return e.toLowerCase()}).join("");return"".concat(y,"/").concat(a,".png")}var b,u=[{id:1,name:"Mario",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:43,name:"Dr. Mario",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:2,name:"Luigi",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:3,name:"Peach",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[3.5],display:!0,moves:[]},{id:3.5,name:"Daisy",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[3],display:!0,moves:[]},{id:4,name:"Bowser",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:5,name:"Yoshi",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:6,name:"Rosalina & Luma",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:7,name:"Donkey Kong",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:8,name:"Diddy Kong",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:9,name:"Link",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:10,name:"Zelda",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:11,name:"Sheik",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:45,name:"Ganondorf",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:12,name:"Toon Link",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:12.9,name:"Young Link",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:13,name:"Samus",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[13.5],display:!0,moves:[]},{id:13.5,name:"Dark Samus",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[13],display:!0,moves:[]},{id:14,name:"Zero Suit Samus",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:15,name:"Pit",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[15],display:!0,moves:[]},{id:15.5,name:"Dark Pit",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[15.5],display:!0,moves:[]},{id:16,name:"Palutena",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:17,name:"Marth",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[17.5],display:!0,moves:[]},{id:17.5,name:"Lucina",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[17],display:!0,moves:[]},{id:18,name:"Ike",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:19,name:"Robin",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:20,name:"Kirby",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:21,name:"King Dedede",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:22,name:"Meta Knight",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:23,name:"Little Mac",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:24,name:"Fox",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:25,name:"Pikachu",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:25.9,name:"Pichu",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:26,name:"Pokemon Trainer",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:27,name:"Lucario",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:28,name:"Greninja",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:29,name:"Captain Falcon",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:30,name:"Villager",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:31,name:"Olimar",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:32,name:"Wii Fit Trainer",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:33,name:"Shulk",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:34,name:"Pac-Man",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:35,name:"Mega Man",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:36,name:"Sonic",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:38,name:"Ness",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:39,name:"Falco",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:40,name:"Wario",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:41,name:"Snake",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:42,name:"Ice Climbers",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:44,name:"R.O.B.",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:46,name:"Mr. Game & Watch",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:47,name:"Bowser Jr.",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:48,name:"Duck Hunt",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:49,name:"Jigglypuff",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:50,name:"Mewtwo",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:51,name:"Lucas",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:52,name:"Roy",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[52.5],display:!0,moves:[]},{id:52.5,name:"Chrom",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[52],display:!0,moves:[]},{id:53,name:"Ryu",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[53.5],display:!0,moves:[]},{id:53.5,name:"Ken",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[53],display:!0,moves:[]},{id:54,name:"Cloud",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:55,name:"Corrin",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:56,name:"Bayonetta",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:57,name:"Mii Fighter Brawler",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:58,name:"Mii Fighter Shooter",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:59,name:"Mii Fighter Sword",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:60,name:"Inkling",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:61,name:"Ridley",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:62,name:"Simon",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[62.5],display:!0,moves:[]},{id:62.5,name:"Richter",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[62],display:!0,moves:[]},{id:63,name:"King K. Rool",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:64,name:"Isabelle",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:65,name:"Incineroar",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:66,name:"Piranha Plant",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]}].map(function(e){return e.media=h(e.name),e}),k={enabled:u,played:[],disabled:[],hidden:[]},v=n(3),g=function(){var e=Object(d.useContext)(c),a=e.themeStyle,n=e.cookies,i=Object(d.useState)(n.notice),o=Object(l.a)(i,2),m=o[0],s=o[1],p={cookieNotice:{bottom:0,backgroundColor:a.bgCookieNotice,color:"white",width:"100%",display:n.notice?"block":"none",zIndex:1},cookieMessage:{padding:10,display:m?"none":"flex",alignItems:"center",maxWidth:"100%",justifyContent:window.innerWidth<800?"center":"space-evenly"}};return r.a.createElement("div",{style:Object(t.a)({},p.cookieNotice,{position:"fixed"})},r.a.createElement(function(){return r.a.createElement("div",{style:p.cookieMessage},r.a.createElement("div",null,"This website uses cookies to store your current state of characters. For more information, see",r.a.createElement("a",{style:{color:"#9eef8b"},href:"https://github.com/wischli/smashbros-random-with-bans"},"here"),"."),r.a.createElement("button",{type:"button",style:Object(t.a)({},a.button,{minWidth:100}),onClick:function(){return(new v.a).set("notice",JSON.stringify(!0),{path:"/"}),void s(!0)}},"Accept"))},null))},O=function(){var e=Object(d.useContext)(c),a=e.cookies,n=e.state,i=e.themeStyle,o=e.handleNextClick,l=e.handlePrevClick,m=e.displayCard,s=e.displayLoad,p=e.disableLoad,y=e.handleDisplayClick,b=e.handleCookieLoad,u=r.a.createElement("div",null);if(a.characters){var k=new Date(a.characters.date).toUTCString();u=r.a.createElement("p",{style:{color:i.colorCardTitle,textAlign:"center"}},"from ",k)}var v=n.enabled[0];return r.a.createElement("div",{className:"card",style:Object(t.a)({},i.card,{display:m||s?"block":"none"})},r.a.createElement("button",{type:"button",style:Object(t.a)({},i.cardClose),onClick:function(){return s?p():y(m)},className:"close"}),r.a.createElement("h2",{style:i.cardTitle},s?"Discovered Save":v.name),s?u:r.a.createElement("img",{src:h(v.name),style:Object(t.a)({},i.cardImg),alt:v.name}),r.a.createElement("div",{style:Object(t.a)({},i.buttonRow)},r.a.createElement("button",{type:"button",style:Object(t.a)({},i.button,i.buttonLeft),onClick:function(){return s?p():l()}},s?"Dismiss":"Prev"),r.a.createElement("button",{type:"button",style:Object(t.a)({},i.button,i.buttonRight),onClick:function(){return s?b(a.characters):o()}},s?"Load":"Next")))},f=n(5),w=function(){var e=Object(d.useContext)(c),a=e.state,n=e.themeStyle,i=e.displayCard,o=e.handleRandomizeClick,l=e.handleDisplayClick,m=e.handleEchoClick,s=e.displayRandomize,p=e.options,y=new v.a;return r.a.createElement("div",{className:"nav",style:n.nav},r.a.createElement("button",{type:"button",style:Object(t.a)({},n.button,{width:"100%",backgroundColor:n.bgNavSecondaryBtn}),onClick:function(){return m()}},p.echo?"Hide Echoes":"Show Echoes"),r.a.createElement("button",{type:"button",style:Object(t.a)({},n.button,{width:"100%"}),onClick:function(){return i?l(i):s?l(!i):o()}},i?"Close Popup":s?"Show Popup":"Randomize"),r.a.createElement("button",{type:"button",style:Object(t.a)({},n.button,{width:"100%",backgroundColor:n.bgNavSecondaryBtn}),onClick:function(){return function(e){var a=Object.keys(e).reduce(function(a,n){var d=n;return Object(t.a)({},a,Object(f.a)({},n,e[d].map(function(e){return e.id})))},{enabled:[],played:[],disabled:[],hidden:[],date:(new Date).toJSON()});y.set("characters",JSON.stringify(a),{path:"/"})}(a)}},"Save Chars"))};!function(e){e.randomize="randomize",e.next="next",e.previous="previous",e.restore="restore",e.echo="echo",e.save="save",e.reset="reset",e.toggleChar="toggleChar"}(b||(b={}));var C="#ffb3b3",x="#99f9ae",j="#26353c",E="#aacdde",S="#466370",R={bgRed:C,bgGreen:x,bgCard:j,bgNav:S,bgNavSecondaryBtn:"#ddddddb3",colorCardTitle:E,backgroundColor:"#486471",bgCookieNotice:"#26353c",bgContent:"#486471",button:{height:"50px",fontSize:"15px",fontWeight:"700",textAlign:"center",justifyContent:"center",flexDirection:"row",borderRadius:"5px",textTransform:"uppercase",letterSpacing:"1px",border:"2px solid"},buttonLeft:{width:"49%",backgroundColor:C,color:"#383838",borderColor:"#383838"},buttonRight:{width:"49%",backgroundColor:x,color:"black",borderColor:"black"},card:{border:"1px solid rgba(0, 0, 0, 0.125)",borderRadius:"0.25rem",width:250,backgroundColor:j,position:"absolute",top:100,left:0,right:0,marginLeft:"auto",marginRight:"auto",zIndex:1e3,padding:10},buttonRow:{display:"flex",justifyContent:"space-around"},cardImg:{marginLeft:"auto",marginRight:"auto",display:"block",marginBottom:20,marginTop:20},cardClose:{position:"absolute",top:"-15px",background:"#bb5555",height:"30px",width:"30px",right:"-15px",borderColor:"transparent",borderRadius:"100%"},cardTitle:{color:E,textAlign:"center",margin:0,fontSize:"1.75rem"},characterRow:{paddingBottom:10,paddingTop:5,borderBottom:"1px solid white"},characterRowTitle:{textAlign:"center",textTransform:"uppercase",color:"white",margin:5},nav:{width:"calc(100% - 20px)",padding:"10px",display:"flex",flexWrap:"nowrap",justifyContent:"space-between",backgroundColor:S,position:"fixed",height:50,top:0,alignItems:"center"}},N=n(8),L=function(e){for(var a=Object(N.a)(e),n=a.length,d=0;0!==n;){d=Math.floor(Math.random()*n);var r=[a[n-=1],a[d]];a[d]=r[0],a[n]=r[1]}return a},M=function(e,a){var n=Object(t.a)({},e);switch(a.type){case b.next:if(n.enabled.length>2){var d=n.enabled.shift();return d.played=!0,n.played.push(d),n}return function(e){var a=Object(t.a)({},e);return a.enabled=L(a.played.map(function(e){return e.played=!1,e})),a.played=[],a}(n);case b.previous:if(n.played.length>0){var r=n.played.pop();r.played=!1,n.enabled.unshift(r)}return n;case b.randomize:var i=n.played,o=n.disabled,l=n.hidden,c=n.enabled.reduce(function(e,a){return a.enabled?a.display?a.played?e.played.push(a):e.enabled.push(a):e.hidden.push(a):e.disabled.push(a),e},{enabled:[],played:i,disabled:o,hidden:l});return c.enabled=L(c.enabled),c;case b.echo:switch(n.hidden.length){case 0:var m=n.played,s=n.disabled;return n.enabled.reduce(function(e,a){return a.echo.length&&a.echo[0]%1===0?(a.display=!1,e.hidden.push(a)):e.enabled.push(a),e},{enabled:[],played:m,disabled:s,hidden:[]});default:var p=n.enabled,y=n.played,h=n.disabled;return n.hidden.reduce(function(e,a){return a.display=!0,e.enabled.push(a),e},{enabled:p,played:y,disabled:h,hidden:[]})}case b.toggleChar:if(!a.character)throw new Error('Missing character input for "toggleChar" reducer action');if(a.character.played)return n;var v=a.character,g=function(e,a){var n="disabled";a.enabled&&a.display?n="enabled":a.display?a.played&&(n="played"):n="hidden";var d=e[n].indexOf(a);if(-1===d)throw new Error('Unable to find character "'.concat(a.name,'" in state "').concat(n,'"'));return{index:d,stateKey:n}}(n,v),O=g.index,f=g.stateKey;if(v.enabled=!v.enabled,"hidden"!==f){var w="disabled"===f?"enabled":"disabled";n[f].splice(O,1),n[w].push(v)}return n;case b.restore:if(!a.cookieState)throw new Error("Unable to restore state for missing cookieState");var C=a.cookieState,x=C.enabled,j=C.played,E=C.disabled,S=C.hidden;return x.length+j.length+E.length+S.length===u.length?function(e){var a=function(e,a){var n=!0,d=!1,r=void 0;try{for(var i,o=u[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;if(l.id===e){switch(a){case"enabled":return Object(t.a)({},l);case"played":return Object(t.a)({},l,{played:!0});case"disabled":return Object(t.a)({},l,{enabled:!1});case"hidden":return Object(t.a)({},l,{display:!1})}return l}}}catch(c){d=!0,r=c}finally{try{n||null==o.return||o.return()}finally{if(d)throw r}}throw new Error("Cannot find character with id ".concat(e))};return{enabled:e.enabled.map(function(e){return a(e,"enabled")}),played:e.played.map(function(e){return a(e,"played")}),disabled:e.disabled.map(function(e){return a(e,"disabled")}),hidden:e.hidden.map(function(e){return a(e,"hidden")})}}(a.cookieState):n;case b.reset:return k;default:throw new Error('Unhandled myReducer action "'.concat(a,'"'))}},D={echo:!0},P=function(){var e=new v.a,a=e.get("characters"),n=void 0!==a&&"object"===typeof a&&Object.keys(a).length>0,i={characters:!!n&&a,notice:void 0===e.get("notice")},o=Object(d.useReducer)(M,k),m=Object(l.a)(o,2),s=m[0],y=m[1],h=Object(d.useState)(D),u=Object(l.a)(h,2),f=u[0],C=u[1],x=Object(d.useState)(!1),j=Object(l.a)(x,2),E=j[0],S=j[1],N=Object(d.useState)(n),L=Object(l.a)(N,2),P=L[0],T=L[1],W=Object(d.useState)(!1),I=Object(l.a)(W,2),z=I[0],B=I[1],K=function(){return S(!E)},F={cookies:i,state:s,handleCharClick:function(e){return y({type:b.toggleChar,character:e})},themeStyle:R,handleEchoClick:function(){return C(Object(t.a)({},f,{echo:!f.echo})),y({type:b.echo})},handleCookieLoad:function(e){return T(!1),y({cookieState:e,type:b.restore}),B(!0),S(!0)},handleNextClick:function(){return y({type:b.next})},handlePrevClick:function(){return y({type:b.previous})},handleDisplayClick:K,handleRandomizeClick:function(){return y({type:b.randomize}),B(!0),K()},displayCard:E,displayLoad:P,disableLoad:T,displayRandomize:z,options:f};return r.a.createElement(c.Provider,{value:F},r.a.createElement("div",{className:"wrapper"},r.a.createElement("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),r.a.createElement("div",{className:"content",style:{marginTop:70,height:"100vh",backgroundColor:R.bgContent,opacity:E||P?.5:1}},r.a.createElement(g,null),r.a.createElement(p,null)),r.a.createElement(w,null),r.a.createElement(O,null)))};o.a.render(r.a.createElement(P,null),document.getElementById("root"))},9:function(e,a,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.979644ad.chunk.js.map