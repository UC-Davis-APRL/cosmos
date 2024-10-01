"use strict";(self.webpackChunkdocs_openc3_com=self.webpackChunkdocs_openc3_com||[]).push([[2327],{5221:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=n(4848),r=n(8453);const s={title:"Script Runner"},o=void 0,a={id:"tools/script-runner",title:"Script Runner",description:"Introduction",source:"@site/docs/tools/script-runner.md",sourceDirName:"tools",slug:"/tools/script-runner",permalink:"/docs/tools/script-runner",draft:!1,unlisted:!1,editUrl:"https://github.com/OpenC3/cosmos/tree/main/docs.openc3.com/docs/tools/script-runner.md",tags:[],version:"current",frontMatter:{title:"Script Runner"},sidebar:"defaultSidebar",previous:{title:"Packet Viewer",permalink:"/docs/tools/packet-viewer"},next:{title:"Table Manager",permalink:"/docs/tools/table-manager"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Script Runner Menus",id:"script-runner-menus",level:2},{value:"File Menu Items",id:"file-menu-items",level:3},{value:"File Open",id:"file-open",level:4},{value:"File Save As",id:"file-save-as",level:4},{value:"Script Menu Items",id:"script-menu-items",level:3},{value:"Running Scripts",id:"running-scripts",level:2},{value:"Running Script Suites",id:"running-script-suites",level:2},{value:"Group",id:"group",level:3},{value:"Suite",id:"suite",level:3},{value:"Script Suite Options",id:"script-suite-options",level:3},{value:"Pause on Error",id:"pause-on-error",level:4},{value:"Continue after Error",id:"continue-after-error",level:4},{value:"Abort after Error",id:"abort-after-error",level:4},{value:"Manual",id:"manual",level:4},{value:"Loop",id:"loop",level:4},{value:"Break Loop on Error",id:"break-loop-on-error",level:4},{value:"Debugging Scripts",id:"debugging-scripts",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Script Runner is both an editor of COSMOS scripts as well as executes scripts. Script files are stored within a COSMOS target and Script Runner provides the ability to open, save, download and delete these files. When a suite of scripts is opened, Script Runner provides additional options to run individual scripts, groups of scripts, or entire suites."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Script Runner",src:n(9056).A+"",width:"1273",height:"929"})}),"\n",(0,i.jsx)(t.h2,{id:"script-runner-menus",children:"Script Runner Menus"}),"\n",(0,i.jsx)(t.h3,{id:"file-menu-items",children:"File Menu Items"}),"\n",(0,i.jsx)("img",{src:n(2549).A,alt:"File Menu",style:{float:"left","margin-right":"50px",height:"250px"}}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Clears the editor and filename"}),"\n",(0,i.jsx)(t.li,{children:"Creates a new test suite in Ruby or Python"}),"\n",(0,i.jsx)(t.li,{children:"Opens a dialog to select a file to open"}),"\n",(0,i.jsx)(t.li,{children:"Opens a recently used file"}),"\n",(0,i.jsx)(t.li,{children:"Saves the currently opened file to disk"}),"\n",(0,i.jsx)(t.li,{children:"Rename the current file"}),"\n",(0,i.jsx)(t.li,{children:"Downloads the current file to the browser"}),"\n",(0,i.jsxs)(t.li,{children:["Deletes the current file (Permanently!)","\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"file-open",children:"File Open"}),"\n",(0,i.jsx)(t.p,{children:"The File Open Dialog displays a tree view of the installed targets. You can manually open the folders and browse for the file you want. You can also use the search box at the top and start typing part of the filename to filter the results."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"File Open",src:n(1011).A+"",width:"597",height:"599"})}),"\n",(0,i.jsx)(t.h4,{id:"file-save-as",children:"File Save As"}),"\n",(0,i.jsx)(t.p,{children:"When saving a file for the first time, or using File Save As, the File Save As Dialog appears. It works similar to the File Open Dialog displaying the tree view of the installed targets. You must select a folder by clicking the folder name and then filling out the Filename field with a filename before clicking Ok. You will be prompted before over-writing an existing file."}),"\n",(0,i.jsx)(t.h3,{id:"script-menu-items",children:"Script Menu Items"}),"\n",(0,i.jsx)("img",{src:n(2232).A,alt:"Script Menu",style:{float:"left","margin-right":"50px",height:"330px"}}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Display started and finished scripts"}),"\n",(0,i.jsx)(t.li,{children:"Show environment variables"}),"\n",(0,i.jsx)(t.li,{children:"Show defined metadata"}),"\n",(0,i.jsx)(t.li,{children:"Show overridden telemetry values"}),"\n",(0,i.jsx)(t.li,{children:"Perform a syntax check"}),"\n",(0,i.jsx)(t.li,{children:"Perform a script mnemonic check"}),"\n",(0,i.jsx)(t.li,{children:"View the instrumented script"}),"\n",(0,i.jsx)(t.li,{children:"Shows the script call stack"}),"\n",(0,i.jsxs)(t.li,{children:["Display the ",(0,i.jsx)(t.a,{href:"/docs/tools/script-runner#debugging-scripts",children:"debug"})," prompt"]}),"\n",(0,i.jsx)(t.li,{children:"Disconnect from real interfaces"}),"\n",(0,i.jsx)(t.li,{children:"Delete all script breakpoints"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The Execution Status popup lists the currently running scripts. This allows other users to connect to running scripts and follow along with the currently executing script. It also lists previously executed scripts so you can download the script log."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Running Scripts",src:n(1010).A+"",width:"1508",height:"505"})}),"\n",(0,i.jsx)(t.h2,{id:"running-scripts",children:"Running Scripts"}),"\n",(0,i.jsx)(t.p,{children:"Running a regular script is simply a matter of opening it and clicking the Start button. By default when you open a script the Filename is updated and the editor loads the script."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"checks.rb",src:n(9828).A+"",width:"1273",height:"533"})}),"\n",(0,i.jsx)(t.p,{children:"Once you click Start the script is spawned in the Server and the Script State becomes Connecting."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"connecting",src:n(1882).A+"",width:"1273",height:"68"})}),"\n",(0,i.jsx)(t.p,{children:"At that point the currently executing line is marked with green. If an error is encountered the line turns red and and the Pause button changes to Retry to allow the line to be re-tried."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"error",src:n(5842).A+"",width:"1273",height:"527"})}),"\n",(0,i.jsx)(t.p,{children:"This allows checks that depend on telemetry changing to potentially be retried as telemetry is being updated live in the background. You can also click Go to continue pass the error or Stop to end the script execution."}),"\n",(0,i.jsx)(t.h2,{id:"running-script-suites",children:"Running Script Suites"}),"\n",(0,i.jsx)(t.p,{children:"If a script is structured as a Suite it automatically causes Script Runner to parse the file to populate the Suite, Group, and Script drop down menus."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Suite Script",src:n(7580).A+"",width:"1273",height:"624"})}),"\n",(0,i.jsx)(t.p,{children:"To generate a new Suite use the File -> New Suite and then choose either Ruby or Python to create a Suite in that language."}),"\n",(0,i.jsx)(t.h3,{id:"group",children:"Group"}),"\n",(0,i.jsx)(t.p,{children:"The Group class contains the methods used to run the test or operations. Any methods starting with 'script', 'op', or 'test' which are implemented inside a Group class are automatically included as scripts to run. For example, in the above image, you'll notice the 'script_power_on' is in the Script drop down menu. Here's another simple Ruby example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:'require \'openc3/script/suite.rb\'\nclass ExampleGroup < OpenC3::Group\n  def setup\n    puts "setup"\n  end\n  def script_1\n    puts "script 1"\n  end\n  def teardown\n    puts "teardown"\n  end\nend\n'})}),"\n",(0,i.jsx)(t.p,{children:"Equivalent Python example:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from openc3.script.suite import Suite, Group\nclass ExampleGroup(Group):\n    def setup(self):\n        print("setup")\n    def script_1(self):\n        print("script 1")\n    def teardown(self)\n        print("teardown")\n'})}),"\n",(0,i.jsx)(t.p,{children:"The setup and teardown methods are special methods which enable the Setup and Teardown buttons next to the Group drop down menu. Clicking these buttons runs the associated method."}),"\n",(0,i.jsx)(t.h3,{id:"suite",children:"Suite"}),"\n",(0,i.jsx)(t.p,{children:"Groups are added to Suites by creating a class inheriting from Suite and then calling the add_group method. For example in Ruby:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ruby",children:'class MySuite < OpenC3::Suite\n  def initialize\n    add_group(\'ExampleGroup\')\n  end\n  def setup\n    puts "Suite setup"\n  end\n  def teardown\n    puts "Suite teardown"\n  end\nend\n'})}),"\n",(0,i.jsx)(t.p,{children:"In Python:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:'from openc3.script.suite import Suite, Group\nclass MySuite(Suite):\n    def __init__(self):\n        self.add_group(\'ExampleGroup\')\n    def setup(self):\n        print("Suite setup")\n    def teardown(self):\n        print("Suite teardown")\n'})}),"\n",(0,i.jsx)(t.p,{children:"Again there are setup and teardown methods which enable the Setup and Teardown buttons next to the Suite drop down menu."}),"\n",(0,i.jsx)(t.p,{children:"Multiple Suites and Groups can be created in the same file and will be parsed and added to the drop down menus. Clicking Start at the Suite level will run ALL Groups and ALL Scripts within each Group. Similarly, clicking Start at the Group level will run all Scripts in the Group. Clicking Start next to the Script will run just the single Script."}),"\n",(0,i.jsx)(t.h3,{id:"script-suite-options",children:"Script Suite Options"}),"\n",(0,i.jsx)(t.p,{children:"Opening a Script Suite creates six checkboxes which provide options to the running script."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Suite Checkboxes",src:n(4376).A+"",width:"464",height:"145"})}),"\n",(0,i.jsx)(t.h4,{id:"pause-on-error",children:"Pause on Error"}),"\n",(0,i.jsx)(t.p,{children:"Pauses the script if an error is encountered. This is the default and identical to how normal scripts are executed. Unchecking this box allows the script to continue past errors without user intervention. Similar to the User clicking Go upon encountering an error."}),"\n",(0,i.jsx)(t.h4,{id:"continue-after-error",children:"Continue after Error"}),"\n",(0,i.jsx)(t.p,{children:"Continue the script if an error is encountered. This is the default and identical to how normal scripts are executed. Unchecking this box means that the script will end after the first encountered error and execution will continue with any other scripts in the Suite/Group."}),"\n",(0,i.jsx)(t.h4,{id:"abort-after-error",children:"Abort after Error"}),"\n",(0,i.jsx)(t.p,{children:"Abort the entire execution upon encountering an error. If the first Script in a Suite's Group encounters an error the entire Suite will stop execution. Note, if Continue after Error is set, the current script is allowed to continue and complete."}),"\n",(0,i.jsx)(t.h4,{id:"manual",children:"Manual"}),"\n",(0,i.jsxs)(t.p,{children:["In Ruby, sets the global variable called ",(0,i.jsx)(t.code,{children:"$manual"})," to true. In Python, sets ",(0,i.jsx)(t.code,{children:"RunningScript.manual"})," to True. Setting this box only allows the script author to determine if the operator wants to execute manual steps or not. It is up the script author to use the variable in their scripts."]}),"\n",(0,i.jsx)(t.h4,{id:"loop",children:"Loop"}),"\n",(0,i.jsx)(t.p,{children:"Loop whatever the user started continuously. If the user clicks Start next to the Group then the entire Group will be looped. This is useful to catch and debug those tricky timing errors that only sometimes happen."}),"\n",(0,i.jsx)(t.h4,{id:"break-loop-on-error",children:"Break Loop on Error"}),"\n",(0,i.jsx)(t.p,{children:"Break the loop if an Error occurs. Only available if the Loop option is set."}),"\n",(0,i.jsx)(t.h2,{id:"debugging-scripts",children:"Debugging Scripts"}),"\n",(0,i.jsxs)(t.p,{children:["When you enable the Debug prompt an additional line appears between the script and the Log Messages. You can type local variables to cause them to be output in the Log Messages. You can also set local variables by typing ",(0,i.jsx)(t.code,{children:"var = 10"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Debug",src:n(5015).A+"",width:"1273",height:"748"})}),"\n",(0,i.jsx)(t.p,{children:"The Step button allows you to step line by line through the script. Clicking Go continues regular execution."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2549:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/file_menu-470589e527d9e82ce40e0c7d4a865e33d19b42350c2429dba97186d168137b6d.png"},2232:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/script_menu-5a10df89d9806a59b41ef990fc1181c46c7ffa00496021efceb22c0f31dcc9cc.png"},9828:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/checks_rb-89f400098ff47774008ea420860c665c15ebf06819c3ee7050bed301ea0a9f46.png"},1882:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/connecting-0f804651a891ef6112a51ba8b2e4d8dcb46e3462dcbc94e7b3c75bff20fc04e7.png"},5015:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/debug-3103972d64395b50fff5808661fb846ae2de7d5934548ca5b88032f1ae12c541.png"},1011:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/file_open-a5bc9e5ef73c12913ea4882498ceb52f93c73afaf5bb0c1083c4c1ee402f571d.png"},1010:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/running_scripts-694a1b310d42791acf64cf76ea370bb273084954107d5e6e2caf15f4fb50e634.png"},5842:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/script_error-2061222e00f5e5190a4407be1f8999200badca9b3137659de007e27cf1708dc0.png"},9056:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/script_runner-31f6bfcb631b788ff0bf792ac21da30aaa503ca926b10a22d4337114effc28f0.png"},7580:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/script_suite-16647c3b3de01a8749f1b5c4ab2f8b452630df8c0470e5be38652acacfc98b5d.png"},4376:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/suite_checkboxes-af8452153dbc2143718fefcfc7d441e05f42c241b3c10d4f41200ae576f68063.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);