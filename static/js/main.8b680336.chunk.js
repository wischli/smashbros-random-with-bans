(this.webpackJsonpsmash=this.webpackJsonpsmash||[]).push([[0],{10:function(e,a,n){e.exports=n(16)},15:function(e,a,n){},16:function(e,a,n){"use strict";n.r(a);var t,i=n(0),o=n.n(i),r=n(9),c=n.n(r),d=(n(15),n(1)),l=n(3),h=n(4),s="#486471",u="#486471",m="#ffb3b3",p="#99f9ae",b="#26353c",y="#aacdde",f="#466370",g="#ddddddb3",k="#26353c",C="#383838",w="black",v={height:"50px",fontSize:"15px",fontWeight:700,textAlign:"center",justifyContent:"center",borderRadius:"5px",textTransform:"uppercase",letterSpacing:"1px",border:"2px solid"},x=n(2),j=function(e){var a=window.location.href,n="".concat(a.includes("local")?"".concat(a,"public/"):"https://wischli.github.io/smashbros-random-with-bans/").concat("images/character_icons"),t=e.split(/[. \-&]/g).map((function(e){return e.toLowerCase()})).join("");return"".concat(n,"/").concat(t,".png")},E=function(e){for(var a=Object(x.a)(e),n=a.length,t=0;0!==n;){t=Math.floor(Math.random()*n);var i=[a[n-=1],a[t]];a[t]=i[0],a[n]=i[1]}return a},O=Object(d.a)(Object(d.a)({},v),{},{width:"100%",backgroundColor:g}),S={width:"calc(100% - 20px)",padding:"10px",display:"flex",flexWrap:"nowrap",justifyContent:"space-between",backgroundColor:f,position:"fixed",height:50,top:0,alignItems:"center"},R=function(e){var a,n=e.state,t=e.displayCard,i=e.handleRandomizeClick,r=e.handleDisplayClick,c=e.handleEchoClick,l=e.displayRandomize,s=e.options;return a=t?{action:function(){return r(t)},msg:"Close Popup"}:l?{action:function(){return r(!t)},msg:"Show Popup"}:{action:function(){return i()},msg:"Randomize"},o.a.createElement("div",{className:"nav",style:S},o.a.createElement("button",{type:"button",style:O,onClick:function(){return c()}},s.echo?"Hide Echoes":"Show Echoes"),o.a.createElement("button",{type:"button",style:Object(d.a)(Object(d.a)({},v),{},{width:"100%"}),"data-test":"centerBtn",onClick:function(){return a.action()}},a.msg),o.a.createElement("button",{type:"button",style:O,onClick:function(){return function(e){var a=new h.a,n=Object.keys(e).reduce((function(a,n){var t=n;return Object(d.a)(Object(d.a)({},a),{},{[n]:e[t].map((function(e){return e}))})}),{enabled:[],played:[],disabled:[],hidden:[],date:(new Date).toJSON()});a.set("characters",JSON.stringify(n),{path:"/"})}(n)}},"Save Chars"))},L=[{id:1,name:"Mario",echo:[]},{id:43,name:"Dr. Mario",echo:[]},{id:2,name:"Luigi",echo:[]},{id:3,name:"Peach",echo:[3.5]},{id:3.5,name:"Daisy",echo:[3]},{id:4,name:"Bowser",echo:[]},{id:5,name:"Yoshi",echo:[]},{id:6,name:"Rosalina & Luma",echo:[]},{id:7,name:"Donkey Kong",echo:[]},{id:8,name:"Diddy Kong",echo:[]},{id:9,name:"Link",echo:[]},{id:10,name:"Zelda",echo:[]},{id:11,name:"Sheik",echo:[]},{id:45,name:"Ganondorf",echo:[]},{id:12,name:"Toon Link",echo:[]},{id:12.9,name:"Young Link",echo:[]},{id:13,name:"Samus",echo:[13.5]},{id:13.5,name:"Dark Samus",echo:[13]},{id:14,name:"Zero Suit Samus",echo:[]},{id:15,name:"Pit",echo:[15]},{id:15.5,name:"Dark Pit",echo:[15.5]},{id:16,name:"Palutena",echo:[]},{id:17,name:"Marth",echo:[17.5]},{id:17.5,name:"Lucina",echo:[17]},{id:18,name:"Ike",echo:[]},{id:19,name:"Robin",echo:[]},{id:20,name:"Kirby",echo:[]},{id:21,name:"King Dedede",echo:[]},{id:22,name:"Meta Knight",echo:[]},{id:23,name:"Little Mac",echo:[]},{id:24,name:"Fox",echo:[]},{id:25,name:"Pikachu",echo:[]},{id:25.9,name:"Pichu",echo:[]},{id:26,name:"Pokemon Trainer",echo:[]},{id:27,name:"Lucario",echo:[]},{id:28,name:"Greninja",echo:[]},{id:29,name:"Captain Falcon",echo:[]},{id:30,name:"Villager",echo:[]},{id:31,name:"Olimar",echo:[]},{id:32,name:"Wii Fit Trainer",echo:[]},{id:33,name:"Shulk",echo:[]},{id:34,name:"Pac-Man",echo:[]},{id:35,name:"Mega Man",echo:[]},{id:36,name:"Sonic",echo:[]},{id:38,name:"Ness",echo:[]},{id:39,name:"Falco",echo:[]},{id:40,name:"Wario",echo:[]},{id:41,name:"Snake",echo:[]},{id:42,name:"Ice Climbers",echo:[]},{id:44,name:"R.O.B.",echo:[]},{id:46,name:"Mr. Game & Watch",echo:[]},{id:47,name:"Bowser Jr.",echo:[]},{id:48,name:"Duck Hunt",echo:[]},{id:49,name:"Jigglypuff",echo:[]},{id:50,name:"Mewtwo",echo:[]},{id:51,name:"Lucas",echo:[]},{id:52,name:"Roy",echo:[52.5]},{id:52.5,name:"Chrom",echo:[52]},{id:53,name:"Ryu",echo:[53.5]},{id:53.5,name:"Ken",echo:[53]},{id:54,name:"Cloud",echo:[]},{id:55,name:"Corrin",echo:[]},{id:56,name:"Bayonetta",echo:[]},{id:57,name:"Mii Fighter Brawler",echo:[]},{id:58,name:"Mii Fighter Shooter",echo:[]},{id:59,name:"Mii Fighter Sword",echo:[]},{id:60,name:"Inkling",echo:[]},{id:61,name:"Ridley",echo:[]},{id:62,name:"Simon",echo:[62.5]},{id:62.5,name:"Richter",echo:[62]},{id:63,name:"King K. Rool",echo:[]},{id:64,name:"Isabelle",echo:[]},{id:65,name:"Incineroar",echo:[]},{id:66,name:"Piranha Plant",echo:[]},{id:67,name:"Joker",echo:[]},{id:68,name:"Banjo Kazooie",echo:[]},{id:69,name:"Hero",echo:[]},{id:70,name:"Wolf",echo:[]}].map((function(e){return Object(d.a)(Object(d.a)({},e),{},{media:j(e.name),enabled:!0,played:!1,display:!0})})),I={enabled:L.map((function(e,a){return a})),played:[],disabled:[],hidden:[]},M=function(e){return Object(d.a)(Object(d.a)({},v),{},{width:"49%",color:e?C:w,borderColor:e?C:w,backgroundColor:e?m:p})},D={display:"flex",justifyContent:"space-around"},P={position:"absolute",top:"-15px",background:"#bb5555",height:"30px",width:"30px",right:"-15px",borderColor:"transparent",borderRadius:"100%"},N={color:y,textAlign:"center",margin:0,fontSize:"1.75rem"},W={marginLeft:"auto",marginRight:"auto",display:"block",marginBottom:20,marginTop:20},z={color:y,textAlign:"center"},K=function(e){var a=e.cookies,n=e.state,t=e.handleNextClick,i=e.handlePrevClick,r=e.displayCard,c=e.displayLoad,d=e.disableLoad,l=e.handleDisplayClick,h=e.handleCookieLoad,s=o.a.createElement("div",null);if(a.characters){var u=new Date(a.characters.date).toUTCString();s=o.a.createElement("p",{style:z},"from ",u)}var m,p=L[n.enabled[0]];return o.a.createElement("div",{className:"card",style:(m=r||c,{display:m?"block":"none",border:"1px solid rgba(0, 0, 0, 0.125)",borderRadius:"0.25rem",width:250,backgroundColor:b,position:"absolute",top:100,left:0,right:0,marginLeft:"auto",marginRight:"auto",zIndex:1e3,padding:10})},o.a.createElement("button",{type:"button",style:P,onClick:function(){return c?d(!1):l(r)},className:"close"}),o.a.createElement("h2",{style:N},c?"Discovered Save":p.name),c?s:o.a.createElement("img",{src:j(p.name),style:W,alt:p.name}),o.a.createElement("div",{style:D},o.a.createElement("button",{type:"button",style:M(!0),onClick:function(){return c?d(!1):i()}},c?"Dismiss":"Prev"),o.a.createElement("button",{type:"button",style:M(!1),onClick:function(){return c?h(a.characters):t()}},c?"Load":"Next")))},B={enabled:"white",disabled:"#ff6767b8",played:"#70f78e",hidden:"grey"},T=function(e){return{opacity:"enabled"===e?1:.6,margin:"auto",display:"block",maxWidth:window.innerWidth<1e3?55:80,padding:1}},F=function(e){var a,n,t,i=e.character,r=e.charIndex,c=e.stateKey,d=e.handleCharClick;return o.a.createElement("div",{className:"character",role:"button",tabIndex:0,id:"".concat(i.id),onClick:function(){return d(r,c)},onKeyPress:function(){return d(r,c)},style:(t=c,{maxWidth:window.innerWidth<1e3?60:85,maxHeight:window.innerWidth<1e3?60:85,backgroundColor:B[t],borderRadius:"100%",display:"block,"})},o.a.createElement("img",{src:i.media,style:T(c),alt:i.name,className:(a=i.played,n=i.enabled,a?"played":n?"enabled":"disabled")}))},J={backgroundColor:"#486471",padding:window.innerWidth<1e3?5:30,display:"flex",alignItems:"center",justifyContent:"center",flexFlow:"row wrap",alignContent:"flex-end"},A={paddingBottom:10,paddingTop:5,borderBottom:"1px solid white"},H={textAlign:"center",textTransform:"uppercase",color:"white",margin:5},G={backgroundColor:s},U=function(e){var a=e.state,n=e.handleCharClick;return o.a.createElement("div",{style:G},Object.keys(a).map((function(e){return o.a.createElement("div",{key:"".concat(e,"-wrapper"),style:A},o.a.createElement("h2",{style:H},e),o.a.createElement("div",{className:"characters ".concat(e),style:J,key:e},a[e].map((function(a){var t=L[a];return o.a.createElement(F,{key:t.id,character:t,stateKey:e,charIndex:a,handleCharClick:n})}))))})))},Y=Object(d.a)(Object(d.a)({},v),{},{minWidth:100}),Z=function(e){var a,n=e.cookies,t=Object(i.useState)(n.notice),r=Object(l.a)(t,2),c=r[0],d=r[1],s=function(){return o.a.createElement("div",{style:(e=!c,{padding:10,display:e?"flex":"none",alignItems:"center",maxWidth:"100%",justifyContent:window.innerWidth<800?"center":"space-evenly"})},o.a.createElement("div",null,"This website uses cookies to store your current state of characters. For more information, see",o.a.createElement("a",{style:{color:"#9eef8b"},href:"https://github.com/wischli/smashbros-random-with-bans"},"here"),"."),o.a.createElement("button",{type:"button",style:Y,onClick:function(){return(new h.a).set("notice",JSON.stringify(!0),{path:"/"}),void d(!0)}},"Accept"));var e};return o.a.createElement("div",{style:(a=n.notice,{bottom:0,backgroundColor:k,color:"white",width:"100%",display:a?"block":"none",zIndex:1,position:"fixed"})},o.a.createElement(s,null))};!function(e){e.randomize="randomize",e.next="next",e.previous="previous",e.restore="restore",e.echo="echo",e.save="save",e.reset="reset",e.toggleChar="toggleChar"}(t||(t={}));var V=function(e,a){var n={enabled:Object(x.a)(e.enabled),played:Object(x.a)(e.played),hidden:Object(x.a)(e.hidden),disabled:Object(x.a)(e.disabled)};switch(a.type){case t.next:if(n.enabled.length>1){var i=n.enabled.shift();return n.played.push(i),n}return function(e){var a=Object(d.a)({},e);return a.enabled=E([].concat(Object(x.a)(e.enabled),Object(x.a)(e.played)).map((function(e,a){return a}))),a.played=[],a}(n);case t.previous:if(n.played.length>0){var o=n.played.pop();n.enabled.unshift(o)}return n;case t.randomize:var r=n.played,c=n.disabled,l=n.hidden,h=n.enabled.reduce((function(e,a){var n=L[a];return n.enabled?n.display?n.played?e.played.push(a):e.enabled.push(a):e.hidden.push(a):e.disabled.push(a),e}),{enabled:[],played:r,disabled:c,hidden:l});return h.enabled=E(h.enabled),h;case t.echo:switch(n.hidden.length){case 0:var s=n.played,u=n.disabled;return n.enabled.reduce((function(e,a){var n=L[a];return n.echo.length&&n.echo[0]%1===0?e.hidden.push(a):e.enabled.push(a),e}),{enabled:[],played:s,disabled:u,hidden:[]});default:var m=n.enabled,p=n.played,b=n.disabled;return n.hidden.reduce((function(e,a){return e.enabled.push(a),e}),{enabled:m,played:p,disabled:b,hidden:[]})}case t.toggleChar:if(!a.charIndex&&0!==a.charIndex)throw new Error('Missing character index input for "toggleChar" reducer action');if(!a.charState)throw new Error('Missing character state key input for "toggleChar" reducer action');var y=a.charIndex,f=a.charState;if("played"===f)return n;if("hidden"!==f){var g="disabled"===f?"enabled":"disabled",k=n[f].indexOf(y);n[f].splice(k,1),n[g].push(y)}return n;case t.restore:if(!a.cookieState)throw new Error("Unable to restore state for missing cookieState");var C=a.cookieState,w=C.enabled,v=C.played,j=C.disabled,O=C.hidden;return w.length+v.length+j.length+O.length===L.length?{enabled:w,played:v,disabled:j,hidden:O}:n;case t.reset:return I;default:throw new Error('Unhandled Reducer action "'.concat(a,'"'))}},_={echo:!0},q=function(){var e,a=new h.a,n=a.get("characters"),r=void 0!==n&&"object"===typeof n&&Object.keys(n).length>0,c={characters:!!r&&n,notice:void 0===a.get("notice")},s=Object(i.useReducer)(V,I),m=Object(l.a)(s,2),p=m[0],b=m[1],y=Object(i.useState)(_),f=Object(l.a)(y,2),g=f[0],k=f[1],C=Object(i.useState)(!1),w=Object(l.a)(C,2),v=w[0],x=w[1],j=Object(i.useState)(r),E=Object(l.a)(j,2),O=E[0],S=E[1],L=Object(i.useState)(!1),M=Object(l.a)(L,2),D=M[0],P=M[1],N=function(){return x(!v)};return o.a.createElement("div",{className:"wrapper"},o.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=11.0, maximum-scale=1.0 shrink-to-fit=no"}),o.a.createElement("div",{className:"content",style:(e=v||O,{marginTop:70,height:"100vh",backgroundColor:u,opacity:e?.5:1})},o.a.createElement(Z,{cookies:c}),o.a.createElement(U,{state:p,handleCharClick:function(e,a){return b({charIndex:e,charState:a,type:t.toggleChar})}})),o.a.createElement(R,{state:p,displayCard:v,handleRandomizeClick:function(){return b({type:t.randomize}),P(!0),N()},handleDisplayClick:N,handleEchoClick:function(){return k(Object(d.a)(Object(d.a)({},g),{},{echo:!g.echo})),b({type:t.echo})},displayRandomize:D,options:g}),o.a.createElement(K,{cookies:c,state:p,handleNextClick:function(){return b({type:t.next})},handlePrevClick:function(){return b({type:t.previous})},displayCard:v,displayLoad:O,disableLoad:S,handleDisplayClick:N,handleCookieLoad:function(e){return S(!1),b({cookieState:e,type:t.restore}),P(!0),x(!0)}}))};c.a.render(o.a.createElement(q,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8b680336.chunk.js.map