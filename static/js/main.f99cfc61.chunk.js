(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var d=n(0),r=n.n(d),i=n(6),o=n.n(i),t=(n(15),n(1)),l=n(3),m=r.a.createContext(null),c=function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n="",d=1;e.played?(n="#00cc51",d=.6):e.enabled?(n="white",d=1):e.enabled||(n="#ff0000b8",d=.6);var r={character:{maxWidth:window.innerWidth<1e3?60:85,maxHeight:window.innerWidth<1e3?60:85,backgroundColor:n,borderRadius:"100%",display:"block,"},image:{margin:"auto",display:"block",maxWidth:window.innerWidth<1e3?55:80,padding:(e.enabled,1),opacity:d},characters:{backgroundColor:"#486471",padding:window.innerWidth<1e3?5:30,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",flexFlow:"row wrap",alignContent:"flex-end"}};return a in r?r[a]:""},s=function(e){var a=e.character,n=Object(d.useContext)(m).handleCharClick;return r.a.createElement("div",{className:"character",role:"button",tabIndex:0,id:a.id,onClick:function(){return n(a)},onKeyPress:function(){return n(a)},style:c(a,"character")},r.a.createElement("img",{src:a.media,style:c(a,"image"),alt:a.name}))},p=function(){var e=Object(d.useContext)(m),a=e.state,n=e.themeStyle;return r.a.createElement("div",{className:"characters",style:{backgroundColor:n.backgroundColor}},Object.keys(a).map(function(e){return r.a.createElement("div",{key:e+"-wrapper",style:n.characterRow},r.a.createElement("h2",{style:n.characterRowTitle},e),r.a.createElement("div",{className:"characters",style:Object(t.a)({},c(a.enabled[0],"characters")),key:e},a[e].map(function(e){return r.a.createElement(s,{key:e.id,character:e})})))}))},y=window.location.href.includes("local")?"".concat(window.location.href,"images/character_icons/"):"https://wischli.github.io/smashbros-random-with-bans/images/character_icons";function h(e){var a=e.split(/[. \-&]/g).map(function(e){return e.toLowerCase()}).join("");return"".concat(y,"/").concat(a,".png")}var b,u=[{id:1,name:"Mario",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:43,name:"Dr. Mario",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:2,name:"Luigi",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:3,name:"Peach",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[3.5],display:!0,moves:[]},{id:3.5,name:"Daisy",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[3],display:!0,moves:[]},{id:4,name:"Bowser",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:5,name:"Yoshi",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:6,name:"Rosalina & Luma",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:7,name:"Donkey Kong",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:8,name:"Diddy Kong",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:9,name:"Link",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:10,name:"Zelda",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:11,name:"Sheik",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:45,name:"Ganondorf",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:12,name:"Toon Link",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:12.9,name:"Young Link",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:13,name:"Samus",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[13.5],display:!0,moves:[]},{id:13.5,name:"Dark Samus",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[13],display:!0,moves:[]},{id:14,name:"Zero Suit Samus",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:15,name:"Pit",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[15],display:!0,moves:[]},{id:15.5,name:"Dark Pit",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[15.5],display:!0,moves:[]},{id:16,name:"Palutena",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:17,name:"Marth",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[17.5],display:!0,moves:[]},{id:17.5,name:"Lucina",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[17],display:!0,moves:[]},{id:18,name:"Ike",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:19,name:"Robin",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:20,name:"Kirby",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:21,name:"King Dedede",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:22,name:"Meta Knight",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:23,name:"Little Mac",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:24,name:"Fox",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:25,name:"Pikachu",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:25.9,name:"Pichu",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:26,name:"Pokemon Trainer",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:27,name:"Lucario",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:28,name:"Greninja",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:29,name:"Captain Falcon",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:30,name:"Villager",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:31,name:"Olimar",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:32,name:"Wii Fit Trainer",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:33,name:"Shulk",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:34,name:"Pac-Man",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:35,name:"Mega Man",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:36,name:"Sonic",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:38,name:"Ness",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:39,name:"Falco",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:40,name:"Wario",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:41,name:"Snake",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:42,name:"Ice Climbers",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:44,name:"R.O.B.",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:46,name:"Mr. Game & Watch",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:47,name:"Bowser Jr.",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:48,name:"Duck Hunt",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:49,name:"Jigglypuff",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:50,name:"Mewtwo",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:51,name:"Lucas",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:52,name:"Roy",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[52.5],display:!0,moves:[]},{id:52.5,name:"Chrom",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[52],display:!0,moves:[]},{id:53,name:"Ryu",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[53.5],display:!0,moves:[]},{id:53.5,name:"Ken",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[53],display:!0,moves:[]},{id:54,name:"Cloud",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:55,name:"Corrin",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:56,name:"Bayonetta",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:57,name:"Mii Fighter Brawler",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:58,name:"Mii Fighter Shooter",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:59,name:"Mii Fighter Sword",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:60,name:"Inkling",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:61,name:"Ridley",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:62,name:"Simon",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[62.5],display:!0,moves:[]},{id:62.5,name:"Richter",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[62],display:!0,moves:[]},{id:63,name:"King K. Rool",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:64,name:"Isabelle",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:65,name:"Incineroar",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]},{id:66,name:"Piranha Plant",media:"",nicknames:[],enabled:!0,played:!1,randomOrder:-1,echo:[],display:!0,moves:[]}].map(function(e){return e.media=h(e.name),e}),k={enabled:u,played:[],disabled:[],hidden:[]},v=function(){var e=Object(d.useContext)(m),a=e.state,n=e.themeStyle,i=e.handleNextClick,o=e.handlePrevClick,l=e.displayCard,c=e.handleDisplayClick,s=a.enabled[0];return r.a.createElement("div",{className:"card",style:Object(t.a)({},n.card,{display:l?"block":"none"})},r.a.createElement("button",{type:"button",style:Object(t.a)({},n.cardClose),onClick:function(){return c(l)},className:"close"}),r.a.createElement("h2",{style:n.cardTitle},s.name),r.a.createElement("img",{src:h(s.name),style:Object(t.a)({},n.cardImg),alt:s.name}),r.a.createElement("div",{style:Object(t.a)({},n.buttonRow)},r.a.createElement("button",{type:"button",style:Object(t.a)({},n.button,n.buttonLeft),onClick:function(){return o()}},"Prev"),r.a.createElement("button",{type:"button",style:Object(t.a)({},n.button,n.buttonRight),onClick:function(){return i()}},"Next")))},f=n(4),g=n(8),O=function(e){var a=!0,n=!1,d=void 0;try{for(var r,i=u[Symbol.iterator]();!(a=(r=i.next()).done);a=!0){var o=r.value;if(o.id===e)return o}}catch(t){n=!0,d=t}finally{try{a||null==i.return||i.return()}finally{if(n)throw d}}throw new Error("Cannot find character with id ".concat(e))},w=function(){var e=Object(d.useState)(!1),a=Object(l.a)(e,2),n=a[0],i=a[1],o=Object(d.useContext)(m),c=o.state,s=o.themeStyle,p=o.displayCard,y=o.handleRandomizeClick,h=o.handleCookieLoad,b=o.handleDisplayClick,k=o.handleEchoClick,v=o.options,w=new g.a,C=function(){var e=w.get("characters");if(e){var a=e.enabled,n=e.played,d=e.disabled,r=e.hidden;a.length+n.length+d.length+r.length===u.length&&h(function(e){return{enabled:e.enabled.map(function(e){return O(e)}),played:e.played.map(function(e){return O(e)}),disabled:e.disabled.map(function(e){return O(e)}),hidden:e.hidden.map(function(e){return O(e)})}}(e))}else console.log("No character save (cookie) found.")};return r.a.createElement("div",{className:"nav",style:s.nav},r.a.createElement("button",{type:"button",style:Object(t.a)({},s.button,{width:"100%",backgroundColor:s.bgNavSecondaryBtn}),onClick:function(){return k()}},v.echo?"Hide Echoes":"Show Echoes"),r.a.createElement("button",{type:"button",style:Object(t.a)({},s.button,{width:"100%"}),onClick:function(){return p?b(p):void(n?b(!p):(i(!0),y()))}},p?"Close Popup":n?"Show Popup":"Randomize"),r.a.createElement("button",{type:"button",style:Object(t.a)({},s.button,{width:"100%",backgroundColor:s.bgNavSecondaryBtn}),onClick:function(){return p?function(e){var a=Object.keys(e).reduce(function(a,n){var d=n;return Object(t.a)({},a,Object(f.a)({},n,e[d].map(function(e){return e.id})))},{enabled:[],played:[],disabled:[],hidden:[]});w.set("characters",JSON.stringify(a),{path:"/"})}(c):C()}},p?"Save Chars":"Load Chars"))};!function(e){e.randomize="randomize",e.next="next",e.previous="previous",e.restore="restore",e.echo="echo",e.save="save",e.reset="reset",e.toggleChar="toggleChar"}(b||(b={}));var C="#ffb3b3",x="#99f9ae",j="#002f46",E="#aacdde",S="#466370",R={bgRed:C,bgGreen:x,bgCard:j,bgNav:S,bgNavSecondaryBtn:"#ddddddb3",colorCardTitle:E,backgroundColor:"#486471",button:{height:"50px",fontSize:"15px",fontWeight:"700",textAlign:"center",justifyContent:"center",flexDirection:"row",borderRadius:"5px",textTransform:"uppercase",letterSpacing:"1px",border:"2px solid"},buttonLeft:{width:"49%",backgroundColor:C,color:"#383838",borderColor:"#383838"},buttonRight:{width:"49%",backgroundColor:x,color:"black",borderColor:"black"},card:{border:"1px solid rgba(0, 0, 0, 0.125)",borderRadius:"0.25rem",width:250,backgroundColor:j,position:"absolute",top:100,left:0,right:0,marginLeft:"auto",marginRight:"auto",zIndex:1e3,padding:10},buttonRow:{display:"flex",justifyContent:"space-around"},cardImg:{marginLeft:"auto",marginRight:"auto",display:"block",marginBottom:20,marginTop:20},cardClose:{position:"absolute",top:"-5px",background:"#ff000000",height:"50px",width:"50px",right:"-3px",borderColor:"transparent"},cardTitle:{color:E,textAlign:"center",margin:0,fontSize:"1.75rem"},characterRow:{paddingBottom:10,paddingTop:5,borderBottom:"1px solid white"},characterRowTitle:{textAlign:"center",textTransform:"uppercase",color:"white",margin:5},nav:{width:"calc(100% - 20px)",padding:"10px",display:"flex",flexWrap:"nowrap",justifyContent:"space-between",backgroundColor:S,position:"fixed",height:50,top:0,alignItems:"center"}},N=n(7),L=function(e){for(var a=Object(N.a)(e),n=a.length,d=0;0!==n;){d=Math.floor(Math.random()*n);var r=[a[n-=1],a[d]];a[d]=r[0],a[n]=r[1]}return a},P=function(e,a){var n=Object(t.a)({},e);switch(a.type){case b.next:if(n.enabled.length>2){var d=n.enabled.shift();return d.played=!0,n.played.push(d),n}return function(e){var a=Object(t.a)({},e);return a.enabled=L(a.played.map(function(e){return e.played=!1,e})),a.played=[],a}(n);case b.previous:if(n.played.length){var r=n.played.pop();r.played=!1,n.enabled.unshift(r)}return n;case b.randomize:var i=n.played,o=n.disabled,l=n.hidden,m=n.enabled.reduce(function(e,a){return a.enabled?a.display?a.played?e.played.push(a):e.enabled.push(a):e.hidden.push(a):e.disabled.push(a),e},{enabled:[],played:i,disabled:o,hidden:l});return m.enabled=L(m.enabled),m;case b.echo:switch(n.hidden.length){case 0:var c=n.played,s=n.disabled;return n.enabled.reduce(function(e,a){return a.echo.length&&a.echo[0]%1===0?(a.display=!1,e.hidden.push(a)):e.enabled.push(a),e},{enabled:[],played:c,disabled:s,hidden:[]});default:var p=n.enabled,y=n.played,h=n.disabled;return n.hidden.reduce(function(e,a){return a.display=!0,e.enabled.push(a),e},{enabled:p,played:y,disabled:h,hidden:[]})}case b.toggleChar:if(!a.character)throw new Error('Missing character input for "toggleChar" reducer action');var u=a.character,v=function(e,a){var n="disabled";a.enabled&&a.display?n="enabled":a.display?a.played&&(n="played"):n="hidden";var d=e[n].indexOf(a);if(-1===d)throw new Error('Unable to find character "'.concat(a.name,'" in state "').concat(n,'"'));return{index:d,stateKey:n}}(n,u),f=v.index,g=v.stateKey;if(u.enabled=!u.enabled,"hidden"!==g){var O="disabled"===g?"enabled":"disabled";n[g].splice(f,1),n[O].push(u)}return n;case b.restore:if(!a.cookieState)throw new Error("Unable to restore state for missing cookieState");return a.cookieState;case b.reset:return k;default:throw new Error('Unhandled myReducer action "'.concat(a,'"'))}},M={echo:!0},D=function(){var e=Object(d.useReducer)(P,k),a=Object(l.a)(e,2),n=a[0],i=a[1],o=Object(d.useState)(M),c=Object(l.a)(o,2),s=c[0],y=c[1],h=Object(d.useState)(!1),u=Object(l.a)(h,2),f=u[0],g=u[1],O=function(){return g(!f)},C={state:n,handleCharClick:function(e){return i({type:b.toggleChar,character:e})},themeStyle:R,handleEchoClick:function(){return y(Object(t.a)({},s,{echo:!s.echo})),i({type:b.echo})},handleCookieLoad:function(e){return i({cookieState:e,type:b.restore})},handleNextClick:function(){return i({type:b.next})},handlePrevClick:function(){return i({type:b.previous})},handleDisplayClick:O,handleRandomizeClick:function(){return i({type:b.randomize}),O()},displayCard:f,options:s};return r.a.createElement(m.Provider,{value:C},r.a.createElement("div",{className:"wrapper"},r.a.createElement("meta",{name:"viewport",content:"width=device-width, user-scalable=no"}),r.a.createElement("div",{className:"content",style:{marginTop:70,height:"100vh",backgroundColor:"rgb(72, 100, 113)",opacity:f?.5:1}},r.a.createElement(p,null)),r.a.createElement(w,null),r.a.createElement(v,null)))};o.a.render(r.a.createElement(D,null),document.getElementById("root"))},9:function(e,a,n){e.exports=n(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.f99cfc61.chunk.js.map