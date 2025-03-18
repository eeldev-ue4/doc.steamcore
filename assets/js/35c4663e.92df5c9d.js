"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[210],{5636:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"docfiles/multiplayer/friends/joining_friends","title":"Joining Friends","description":"There is no default Invite handling using the Steam OSS in Unreal Engine 4 but with SteamCore you can","source":"@site/docs/docfiles/multiplayer/friends/joining_friends.md","sourceDirName":"docfiles/multiplayer/friends","slug":"/docfiles/multiplayer/friends/joining_friends","permalink":"/docfiles/multiplayer/friends/joining_friends","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"steamCoreSidebar","previous":{"title":"Inviting Friends","permalink":"/docfiles/multiplayer/friends/inviting_friends"},"next":{"title":"Join Multiplayer Game via Steam Client","permalink":"/docfiles/multiplayer/friends/joining_via_steam_client"}}');var r=t(4848),s=t(8453);const o={},a="Joining Friends",c={},l=[{value:"Steamworks Settings",id:"steamworks-settings",level:2},{value:"Connecting to the Server",id:"connecting-to-the-server",level:2},{value:"Dedicated Servers",id:"dedicated-servers",level:2}];function d(e){const n={admonition:"admonition",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"joining-friends",children:"Joining Friends"})}),"\n",(0,r.jsx)(n.p,{children:"There is no default Invite handling using the Steam OSS in Unreal Engine 4 but with SteamCore you can\r\nimplement this functionality using only Blueprints!"}),"\n",(0,r.jsx)(n.h2,{id:"steamworks-settings",children:"Steamworks Settings"}),"\n",(0,r.jsxs)(n.p,{children:["In order for rich presence joins to go through this and not be placed on the OS command line, you must enable \u201cUse launch command line\u201d from the Installation > General page on your app.\r\n",(0,r.jsx)(n.img,{src:"https://eeldev.com/wp-content/uploads/2022/03/Screenshot-2022-03-25-153928.png",alt:"Steamworks"})]}),"\n",(0,r.jsx)(n.h2,{id:"connecting-to-the-server",children:"Connecting to the Server"}),"\n",(0,r.jsxs)(n.p,{children:["After receiving and accepting the invite, the client will receive the \u201c123.123.123.123\u201d value from the \u201cGetLaunchCommandLine\u201d function, now all we have to do is get that command line and connect to the server\r\n",(0,r.jsx)(n.img,{src:"https://eeldev.com/wp-content/uploads/2021/01/afa237e5070f19b3f32c51bc2cb8cc49.png",alt:"Connecting"})]}),"\n",(0,r.jsx)(n.h2,{id:"dedicated-servers",children:"Dedicated Servers"}),"\n",(0,r.jsx)(n.admonition,{title:"DEDICATED SERVERS",type:"tip",children:(0,r.jsx)(n.p,{children:"If you are using Dedicated Servers, you have to set your Rich Presence key so that your friends know where to connect. Replace 123.123.123.123 with the Servers IP address."})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://eeldev.com/wp-content/uploads/2021/01/4134af009533684e8e9a20199ae9242f.png",alt:"Server"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);