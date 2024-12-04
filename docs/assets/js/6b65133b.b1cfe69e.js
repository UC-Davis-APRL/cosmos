"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([["1417"],{1624:function(e,n,i){i.r(n),i.d(n,{metadata:()=>t,contentTitle:()=>c,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"tools/tlm-viewer","title":"Telemetry Viewer","description":"Build custom screens using built-in widgets","source":"@site/docs/tools/tlm-viewer.md","sourceDirName":"tools","slug":"/tools/tlm-viewer","permalink":"/docs/tools/tlm-viewer","draft":false,"unlisted":false,"editUrl":"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/tlm-viewer.md","tags":[],"version":"current","frontMatter":{"title":"Telemetry Viewer","description":"Build custom screens using built-in widgets","sidebar_custom_props":{"myEmoji":"\uD83D\uDEE0\uFE0F"}},"sidebar":"defaultSidebar","previous":{"title":"Telemetry Grapher","permalink":"/docs/tools/tlm-grapher"},"next":{"title":"Guides","permalink":"/docs/guides"}}'),s=i("5893"),r=i("65");let o={title:"Telemetry Viewer",description:"Build custom screens using built-in widgets",sidebar_custom_props:{myEmoji:"\uD83D\uDEE0\uFE0F"}},c=void 0,l={},a=[{value:"Introduction",id:"introduction",level:2},{value:"File Menu Items",id:"file-menu-items",level:3},{value:"Open Configuration",id:"open-configuration",level:4},{value:"Save Configuration",id:"save-configuration",level:4},{value:"Selecting Screens",id:"selecting-screens",level:2},{value:"New Screen",id:"new-screen",level:2},{value:"Edit Screen",id:"edit-screen",level:2},{value:"Screen Window Management",id:"screen-window-management",level:2},{value:"Building Screens",id:"building-screens",level:2}];function d(e){let n={a:"a",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"Telemetry Viewer is a live telemetry viewer which displays custom built screens. Screens are configured through simple text files which utilize numerous built-in widgets."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Telemetry Viewer",src:i(7498).Z+"",width:"1274",height:"895"})}),"\n",(0,s.jsx)(n.h3,{id:"file-menu-items",children:"File Menu Items"}),"\n",(0,s.jsx)("img",{src:i(6739).Z,alt:"File Menu",style:{float:"left","margin-right":"50px",height:"90px"}}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open a saved configuration"}),"\n",(0,s.jsx)(n.li,{children:"Save the current configuration"}),"\n",(0,s.jsx)(n.li,{children:"Reset the configuration (default settings)"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"open-configuration",children:"Open Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The Open Configuration dialog displays a list of all saved configurations. You select a configuration and then click Ok to load it. You can delete existing configurations by clicking the Trash icon next to a configuration name."}),"\n",(0,s.jsx)(n.h4,{id:"save-configuration",children:"Save Configuration"}),"\n",(0,s.jsx)(n.p,{children:"The Save Configuration dialog also displays a list of all saved configurations. You click the Configuration Name text field, enter the name of your new configuration, and click Ok to save. You can delete existing configurations by clicking the Trash icon next to a configuration name."}),"\n",(0,s.jsx)(n.h2,{id:"selecting-screens",children:"Selecting Screens"}),"\n",(0,s.jsx)(n.p,{children:"Selecting a target from the Select Target drop down automatically updates the available screens for that target in the Select Screen drop down. Clicking Show Screen causes that screen to display."}),"\n",(0,s.jsx)(n.h2,{id:"new-screen",children:"New Screen"}),"\n",(0,s.jsx)(n.p,{children:"Clicking New Screen brings up the new screen dialog."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Telemetry Viewer",src:i(7118).Z+"",width:"595",height:"424"})}),"\n",(0,s.jsx)(n.p,{children:"Screens are owned by Targets so Select Target chooses where the screen will be created. Screens can be based on a Packet such that all the items in that particular packet will be generated in a simple vertical screen similar to Packet Viewer. This is a good starting point for customizing a screen. Note that screen names must be unique so the screen name is set to 'adcs2' since an 'ADCS' screen already exists."}),"\n",(0,s.jsx)(n.h2,{id:"edit-screen",children:"Edit Screen"}),"\n",(0,s.jsx)(n.p,{children:"Clicking the pencil icon in the title bar of the screen brings up the edit dialog."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Telemetry Viewer",src:i(5644).Z+"",width:"1149",height:"698"})}),"\n",(0,s.jsx)(n.p,{children:"The screen source is displayed in an editor with syntax highlighting and auto-completion. You can download the screen source using the download button in the upper right or delete the screen using the trash icon in the upper left. Click Save to save the screen edits at which point Telemetry Viewer will re-render the screen."}),"\n",(0,s.jsx)(n.h2,{id:"screen-window-management",children:"Screen Window Management"}),"\n",(0,s.jsx)(n.p,{children:"All screens can be moved around the browser window by clicking their title bar and moving them. Other screens will move around intelligently to fill the space. This allows you to order the screens no matter which order they were created in."}),"\n",(0,s.jsx)(n.p,{children:"You can also float the screens by clicking the grid icon in the upper left of the title bar. It will change to a balloon icon and allow you to click up and down to change the relative Z index of the window. The image screen is floated in the following screen shot."}),"\n",(0,s.jsx)(n.p,{children:"The dash button in the upper right of the title bar minimizes the screen to effectively hide it. This allows you to focus on a single screen without closing existing screens. In the screen shot below there are two minimized windows at the very bottom."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Float Minimized",src:i(4158).Z+"",width:"1275",height:"928"})}),"\n",(0,s.jsx)(n.p,{children:"The X button closes the screen."}),"\n",(0,s.jsx)(n.h2,{id:"building-screens",children:"Building Screens"}),"\n",(0,s.jsxs)(n.p,{children:["For documentation on how to build Telemetry Screens and how to configure the\nscreen widgets please see the ",(0,s.jsx)(n.a,{href:"/docs/configuration/telemetry-screens",children:"Telemetry Screens"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},6739:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/file_menu-8a0c6243e35822617229a729a598ace78e401b6c29f66eb5e07035d77d9be1aa.png"},5644:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/edit_screen-c655c75fe90429c0425b61cccf23835b6882975abaa56de21d58c9a4b19a4773.png"},4158:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/float_minimize-a27fc649e517b279db5d2435fbd4f1de81418b9ef5f47fc83a9443bba0b1a7e0.png"},7118:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/new_screen-0d9bea0538e91fa2332346f1ff73b1dda2e418d295dcd7d6a13ba240cf32187e.png"},7498:function(e,n,i){i.d(n,{Z:function(){return t}});let t=i.p+"assets/images/telemetry_viewer-e4ac466930993a640f95aea4b01bb9a415eec77dfbfaa184f767cb59940ba943.png"},65:function(e,n,i){i.d(n,{Z:function(){return c},a:function(){return o}});var t=i(7294);let s={},r=t.createContext(s);function o(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);