"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[8283],{1133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var r=n(4848),s=n(8453);const i={title:"JSON API"},a=void 0,o={id:"development/json-api",title:"JSON API",description:"If you're looking for the methods available to write test procedures using the COSMOS scripting API, refer to the Scripting API Guide page. If you're trying to interface to a COSMOS Command and Telemetry Server from an external application using any language then this is the right place.",source:"@site/docs/development/json-api.md",sourceDirName:"development",slug:"/development/json-api",permalink:"/docs/development/json-api",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/development/json-api.md",tags:[],version:"current",frontMatter:{title:"JSON API"},sidebar:"defaultSidebar",previous:{title:"Host Install",permalink:"/docs/development/host-install"},next:{title:"Log Structure",permalink:"/docs/development/log-structure"}},d={},h=[{value:"Authorization",id:"authorization",level:2},{value:"JSON-RPC 2.0",id:"json-rpc-20",level:2},{value:"Socket Connections",id:"socket-connections",level:2},{value:"Supported Methods",id:"supported-methods",level:2},{value:"Existing Implementations",id:"existing-implementations",level:2},{value:"Example Usage",id:"example-usage",level:2},{value:"Sending Commands",id:"sending-commands",level:3},{value:"Getting Telemetry",id:"getting-telemetry",level:3},{value:"Further Debugging",id:"further-debugging",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.admonition,{title:"This documentation is for COSMOS Developers",type:"note",children:(0,r.jsxs)(t.p,{children:["If you're looking for the methods available to write test procedures using the COSMOS scripting API, refer to the ",(0,r.jsx)(t.a,{href:"/docs/guides/scripting-api",children:"Scripting API Guide"})," page. If you're trying to interface to a COSMOS Command and Telemetry Server from an external application using any language then this is the right place."]})}),"\n",(0,r.jsx)(t.p,{children:"This document provides the information necessary for external applications to interact with the COSMOS Command and Telemetry Server using the COSMOS API. External applications written in any language can send commands and retrieve individual telemetry points using this API. External applications also have the option of connecting to the COSMOS Command and Telemetry server to interact with raw tcp/ip streams of commands/telemetry. However, the COSMOS JSON API removes the requirement that external applications have knowledge of the binary formats of packets."}),"\n",(0,r.jsx)(t.h2,{id:"authorization",children:"Authorization"}),"\n",(0,r.jsx)(t.p,{children:"The HTTP Authorization request header contains the credentials to authenticate a user agent with a server, usually, but not necessarily, after the server has responded with a 401 Unauthorized status and the WWW-Authenticate header."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"Authorization: <token/password>\n"})}),"\n",(0,r.jsx)(t.h2,{id:"json-rpc-20",children:"JSON-RPC 2.0"}),"\n",(0,r.jsxs)(t.p,{children:["The COSMOS API implements a relaxed version of the ",(0,r.jsx)(t.a,{href:"http://www.jsonrpc.org/specification",children:"JSON-RPC 2.0 Specification"}),'. Requests with an "id" of NULL are not supported. Numbers can contain special non-string literal\'s such as NaN, and +/-inf. Request params must be specified by-position, by-name is not supported. Section 6 of the spec, Batch Operations, is not supported. The COSMOS scope must be specified in a ',(0,r.jsx)(t.code,{children:'"keyword_params"'})," object."]}),"\n",(0,r.jsx)(t.h2,{id:"socket-connections",children:"Socket Connections"}),"\n",(0,r.jsx)(t.p,{children:"The COSMOS Command and Telemetry Server listens for connections to the COSMOS API on an HTTP server (default port of 7777)."}),"\n",(0,r.jsxs)(t.p,{children:["COSMOS listens for HTTP API requests at the default 2900 port at the ",(0,r.jsx)(t.code,{children:"/openc3-api/api"})," endpoint."]}),"\n",(0,r.jsx)(t.h2,{id:"supported-methods",children:"Supported Methods"}),"\n",(0,r.jsxs)(t.p,{children:["The list of methods supported by the COSMOS API may be found in the ",(0,r.jsx)(t.a,{href:"https://github.com/openc3/cosmos/tree/main/openc3/lib/openc3/api",children:"api"})," source code on Github. The @api_whitelist variable is initialized with an array of all methods accepted by the CTS. This page will not show the full argument list for every method in the API, but it should be noted that the JSON API methods correspond to the COSMOS scripting API methods documented in the ",(0,r.jsx)(t.a,{href:"/docs/guides/script-writing",children:"Scripting Writing Guide"}),". This page will show a few example JSON requests and responses, and the scripting guide can be used as a reference to extrapolate how to build requests and parse responses for methods not explicitly documented here."]}),"\n",(0,r.jsx)(t.h2,{id:"existing-implementations",children:"Existing Implementations"}),"\n",(0,r.jsx)(t.p,{children:"The COSMOS JSON API has been implemented in the following languages: Ruby, Python and Javascript."}),"\n",(0,r.jsx)(t.h2,{id:"example-usage",children:"Example Usage"}),"\n",(0,r.jsx)(t.h3,{id:"sending-commands",children:"Sending Commands"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are used to send commands: cmd, cmd_no_range_check, cmd_no_hazardous_check, cmd_no_checks"}),"\n",(0,r.jsx)(t.p,{children:"The cmd method sends a command to a COSMOS target in the system. The cmd_no_range_check method does the same but ignores parameter range errors. The cmd_no_hazardous_check method does the same, but allows hazardous commands to be sent. The cmd_no_checks method does the same but allows hazardous commands to be sent, and ignores range errors."}),"\n",(0,r.jsx)(t.p,{children:"Two parameter syntaxes are supported."}),"\n",(0,r.jsx)(t.p,{children:'The first is a single string of the form "TARGET_NAME COMMAND_NAME with PARAMETER_NAME_1 PARAMETER_VALUE_1, PARAMETER_NAME_2 PARAMETER_VALUE_2, ..." The "with ..." portion of the string is optional. Any unspecified parameters will be given default values.'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"command_string"}),(0,r.jsx)(t.td,{children:"string"}),(0,r.jsx)(t.td,{children:"A single string containing all required information for the command"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"The second is two or three parameters with the first parameter being a string denoting the target name, the second being a string with the command name, and an optional third being a hash of parameter names/values. This format should be used if the command contains parameters that take binary data that is not capable of being expressed as ASCII text. The cmd and cmd_no_range_check methods will fail on all attempts to send a command that has been marked hazardous. To send hazardous commands, the cmd_no_hazardous_check, or cmd_no_checks methods must be used."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target_name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Name of the target to send the command to"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"command_name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"The name of the command"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"command_params"}),(0,r.jsx)(t.td,{children:"Hash"}),(0,r.jsx)(t.td,{children:"Optional hash of command parameters"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Example Usage:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'--\x3e {"jsonrpc": "2.0", "method": "cmd", "params": ["INST COLLECT with DURATION 1.0, TEMP 0.0, TYPE \'NORMAL\'"], "id": 1, "keyword_params":{"scope":"DEFAULT"}}\n<-- {"jsonrpc": "2.0", "result": ["INST", "COLLECT", {"DURATION": 1.0, "TEMP": 0.0, "TYPE": "NORMAL"}], "id": 1}\n\n--\x3e {"jsonrpc": "2.0", "method": "cmd", "params": ["INST", "COLLECT", {"DURATION": 1.0, "TEMP": 0.0, "TYPE": "NORMAL"}], "id": 1, "keyword_params":{"scope":"DEFAULT"}}\n<-- {"jsonrpc": "2.0", "result": ["INST", "COLLECT", {"DURATION": 1.0, "TEMP": 0.0, "TYPE": "NORMAL"}], "id": 1}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"getting-telemetry",children:"Getting Telemetry"}),"\n",(0,r.jsx)(t.p,{children:"The following methods are used to get telemetry: tlm, tlm_raw, tlm_formatted, tlm_with_units"}),"\n",(0,r.jsx)(t.p,{children:"The tlm method returns the current converted value of a telemetry point. The tlm_raw method returns the current raw value of a telemetry point. The tlm_formatted method returns the current formatted value of a telemetry point. The tlm_with_units method returns the current formatted value of a telemetry point with its units appended to the end."}),"\n",(0,r.jsx)(t.p,{children:"Two parameter syntaxes are supported."}),"\n",(0,r.jsx)(t.p,{children:'The first is a single string of the form "TARGET_NAME PACKET_NAME ITEM_NAME"'}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"tlm_string"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"A single string containing all required information for the telemetry item"})]})})]}),"\n",(0,r.jsx)(t.p,{children:"The second is three parameters with the first parameter being a string denoting the target name, the second being a string with the packet name, and the third being a string with the item name."}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Data Type"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"target_name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Name of the target to get the telemetry value from"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"packet_name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Name of the packet to get the telemetry value from"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"item_name"}),(0,r.jsx)(t.td,{children:"String"}),(0,r.jsx)(t.td,{children:"Name of the telemetry item"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Example Usage:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'--\x3e {"jsonrpc": "2.0", "method": "tlm", "params": ["INST HEALTH_STATUS TEMP1"], "id": 2, "keyword_params":{"scope":"DEFAULT"}}\n<-- {"jsonrpc": "2.0", "result": 94.9438, "id": 2}\n\n--\x3e {"jsonrpc": "2.0", "method": "tlm", "params": ["INST", "HEALTH_STATUS", "TEMP1"], "id": 2, "keyword_params":{"scope":"DEFAULT"}}\n<-- {"jsonrpc": "2.0", "result": 94.9438, "id": 2}\n'})}),"\n",(0,r.jsx)(t.h2,{id:"further-debugging",children:"Further Debugging"}),"\n",(0,r.jsx)(t.p,{children:"If developing an interface for the JSON API from another language, the best way to debug is to send the same messages from the supported Ruby interface first, like the following. By enabling the debug mode, you can see the exact request and response sent from the Ruby Implementation."}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Launch COSMOS"}),"\n",(0,r.jsx)(t.li,{children:"Open Command Sender"}),"\n",(0,r.jsx)(t.li,{children:"Open browser developer tools (right-click->Inspect in Chrome)"}),"\n",(0,r.jsxs)(t.li,{children:['Click "Network" tab (may need to add it with ',(0,r.jsx)(t.code,{children:"+"})," button)"]}),"\n",(0,r.jsx)(t.li,{children:"Send a command with the GUI"}),"\n",(0,r.jsx)(t.li,{children:'View the request in the developer tool. Click the "Payload" sub-tab to view the JSON'}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You can also try sending these raw commands from the terminal with a program like ",(0,r.jsx)(t.code,{children:"curl"}),":"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'curl -d \'{"jsonrpc": "2.0", "method": "tlm", "params": ["INST HEALTH_STATUS TEMP1"], "id": 2, "keyword_params":{"type":"WITH_UNITS","scope":"DEFAULT"}}\' http://localhost:2900/openc3-api/api  -H "Authorization: password"\n'})})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a});var r=n(6540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}}}]);