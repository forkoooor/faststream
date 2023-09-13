"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[5805],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>m});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},k=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),f=p(a),d=l,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||r;return a?n.createElement(m,s(s({ref:t},k),{},{components:a})):n.createElement(m,s({ref:t},k))}));function m(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,s=new Array(r);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[f]="string"==typeof e?e:l,s[1]=o;for(var p=2;p<r;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905));const r={},s="fastkafka",o={unversionedId:"cli/fastkafka",id:"version-0.7.0/cli/fastkafka",title:"fastkafka",description:"Usage:",source:"@site/versioned_docs/version-0.7.0/cli/fastkafka.md",sourceDirName:"cli",slug:"/cli/fastkafka",permalink:"/docs/0.7.0/cli/fastkafka",draft:!1,tags:[],version:"0.7.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tester",permalink:"/docs/0.7.0/api/fastkafka/testing/Tester"},next:{title:"run_fastkafka_server_process",permalink:"/docs/0.7.0/cli/run_fastkafka_server_process"}},i={},p=[{value:"<code>fastkafka docs</code>",id:"fastkafka-docs",level:2},{value:"<code>fastkafka docs generate</code>",id:"fastkafka-docs-generate",level:3},{value:"<code>fastkafka docs install_deps</code>",id:"fastkafka-docs-install_deps",level:3},{value:"<code>fastkafka docs serve</code>",id:"fastkafka-docs-serve",level:3},{value:"<code>fastkafka run</code>",id:"fastkafka-run",level:2},{value:"<code>fastkafka testing</code>",id:"fastkafka-testing",level:2},{value:"<code>fastkafka testing install_deps</code>",id:"fastkafka-testing-install_deps",level:3}],k={toc:p},f="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"fastkafka"},(0,l.kt)("inlineCode",{parentName:"h1"},"fastkafka")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ fastkafka [OPTIONS] COMMAND [ARGS]...\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--install-completion"),": Install completion for the current shell."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--show-completion"),": Show completion for the current shell, to copy it or customize the installation."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help"),": Show this message and exit.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Commands"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"docs"),": Commands for managing fastkafka app..."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"run"),": Runs Fast Kafka API application"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"testing"),": Commands for managing fastkafka testing")),(0,l.kt)("h2",{id:"fastkafka-docs"},(0,l.kt)("inlineCode",{parentName:"h2"},"fastkafka docs")),(0,l.kt)("p",null,"Commands for managing fastkafka app documentation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ fastkafka docs [OPTIONS] COMMAND [ARGS]...\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help"),": Show this message and exit.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Commands"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"generate"),": Generates documentation for a FastKafka..."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install_deps"),": Installs dependencies for FastKafka..."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"serve"),": Generates and serves documentation for a...")),(0,l.kt)("h3",{id:"fastkafka-docs-generate"},(0,l.kt)("inlineCode",{parentName:"h3"},"fastkafka docs generate")),(0,l.kt)("p",null,"Generates documentation for a FastKafka application"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ fastkafka docs generate [OPTIONS] APP\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"APP"),": input in the form of 'path:app', where ",(0,l.kt)("strong",{parentName:"li"},"path")," is the path to a python file and ",(0,l.kt)("strong",{parentName:"li"},"app")," is an object of type ",(0,l.kt)("strong",{parentName:"li"},"FastKafka"),".  ","[required]")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--root-path TEXT"),": root path under which documentation will be created; default is current directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help"),": Show this message and exit.")),(0,l.kt)("h3",{id:"fastkafka-docs-install_deps"},(0,l.kt)("inlineCode",{parentName:"h3"},"fastkafka docs install_deps")),(0,l.kt)("p",null,"Installs dependencies for FastKafka documentation generation"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ fastkafka docs install_deps [OPTIONS]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help"),": Show this message and exit.")),(0,l.kt)("h3",{id:"fastkafka-docs-serve"},(0,l.kt)("inlineCode",{parentName:"h3"},"fastkafka docs serve")),(0,l.kt)("p",null,"Generates and serves documentation for a FastKafka application"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ fastkafka docs serve [OPTIONS] APP\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"APP"),": input in the form of 'path:app', where ",(0,l.kt)("strong",{parentName:"li"},"path")," is the path to a python file and ",(0,l.kt)("strong",{parentName:"li"},"app")," is an object of type ",(0,l.kt)("strong",{parentName:"li"},"FastKafka"),".  ","[required]")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--root-path TEXT"),": root path under which documentation will be created; default is current directory"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--bind TEXT"),": Some info  ","[default: 127.0.0.1]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--port INTEGER"),": Some info  ","[default: 8000]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help"),": Show this message and exit.")),(0,l.kt)("h2",{id:"fastkafka-run"},(0,l.kt)("inlineCode",{parentName:"h2"},"fastkafka run")),(0,l.kt)("p",null,"Runs Fast Kafka API application"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ fastkafka run [OPTIONS] APP\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Arguments"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"APP"),": input in the form of 'path:app', where ",(0,l.kt)("strong",{parentName:"li"},"path")," is the path to a python file and ",(0,l.kt)("strong",{parentName:"li"},"app")," is an object of type ",(0,l.kt)("strong",{parentName:"li"},"FastKafka"),".  ","[required]")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--num-workers INTEGER"),": Number of FastKafka instances to run, defaults to number of CPU cores.  ","[default: 4]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--kafka-broker TEXT"),": kafka_broker, one of the keys of the kafka_brokers dictionary passed in the constructor of FastaKafka class.  ","[default: localhost]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help"),": Show this message and exit.")),(0,l.kt)("h2",{id:"fastkafka-testing"},(0,l.kt)("inlineCode",{parentName:"h2"},"fastkafka testing")),(0,l.kt)("p",null,"Commands for managing fastkafka testing"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ fastkafka testing [OPTIONS] COMMAND [ARGS]...\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help"),": Show this message and exit.")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Commands"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"install_deps"),": Installs dependencies for FastKafka app...")),(0,l.kt)("h3",{id:"fastkafka-testing-install_deps"},(0,l.kt)("inlineCode",{parentName:"h3"},"fastkafka testing install_deps")),(0,l.kt)("p",null,"Installs dependencies for FastKafka app testing"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Usage"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"$ fastkafka testing install_deps [OPTIONS]\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Options"),":"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"--help"),": Show this message and exit.")))}u.isMDXComponent=!0}}]);