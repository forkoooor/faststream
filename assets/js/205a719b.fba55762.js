"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[5414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,f=c["".concat(s,".").concat(u)]||c[u]||k[u]||o;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},593:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},i=void 0,l={unversionedId:"api/fastkafka/testing/LocalRedpandaBroker",id:"version-0.7.1/api/fastkafka/testing/LocalRedpandaBroker",title:"LocalRedpandaBroker",description:"fastkafka.testing.LocalRedpandaBroker {fastkafka.testing.LocalRedpandaBroker}",source:"@site/versioned_docs/version-0.7.1/api/fastkafka/testing/LocalRedpandaBroker.md",sourceDirName:"api/fastkafka/testing",slug:"/api/fastkafka/testing/LocalRedpandaBroker",permalink:"/docs/0.7.1/api/fastkafka/testing/LocalRedpandaBroker",draft:!1,tags:[],version:"0.7.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ApacheKafkaBroker",permalink:"/docs/0.7.1/api/fastkafka/testing/ApacheKafkaBroker"},next:{title:"Tester",permalink:"/docs/0.7.1/api/fastkafka/testing/Tester"}},s={},p=[{value:"<code>fastkafka.testing.LocalRedpandaBroker</code>",id:"fastkafka.testing.LocalRedpandaBroker",level:2},{value:"<code>__init__</code>",id:"init",level:3},{value:"<code>get_service_config_string</code>",id:"get_service_config_string",level:3},{value:"<code>start</code>",id:"start",level:3},{value:"<code>stop</code>",id:"stop",level:3}],d={toc:p},c="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"fastkafka.testing.LocalRedpandaBroker"},(0,r.kt)("inlineCode",{parentName:"h2"},"fastkafka.testing.LocalRedpandaBroker")),(0,r.kt)("p",null,"LocalRedpandaBroker class, used for running unique redpanda brokers in tests to prevent topic clashing."),(0,r.kt)("h3",{id:"init"},(0,r.kt)("inlineCode",{parentName:"h3"},"__init__")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def __init__(self, topics: Iterable[str] = [], retries: int = 3, apply_nest_asyncio: bool = False, listener_port: int = 9092, tag: str = 'v23.1.2', seastar_core: int = 1, memory: str = '1G', mode: str = 'dev-container', default_log_level: str = 'debug', **kwargs: Dict[str, Any]) -> None")),(0,r.kt)("p",null,"Initialises the LocalRedpandaBroker object"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"listener_port"),": Port on which the clients (producers and consumers) can connect"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tag"),": Tag of Redpanda image to use to start container"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"seastar_core"),": Core(s) to use byt Seastar (the framework Redpanda uses under the hood)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"memory"),": The amount of memory to make available to Redpanda"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"mode"),": Mode to use to load configuration properties in container"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"default_log_level"),": Log levels to use for Redpanda")),(0,r.kt)("h3",{id:"get_service_config_string"},(0,r.kt)("inlineCode",{parentName:"h3"},"get_service_config_string")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def get_service_config_string(self, service: str, data_dir: pathlib.Path) -> str")),(0,r.kt)("p",null,"Generates a configuration for a service"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"data_dir"),": Path to the directory where the zookeepeer instance will save data"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"service"),': "redpanda", defines which service to get config string for')),(0,r.kt)("h3",{id:"start"},(0,r.kt)("inlineCode",{parentName:"h3"},"start")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def start(self: fastkafka.testing.LocalRedpandaBroker) -> str")),(0,r.kt)("p",null,"Starts a local redpanda broker instance synchronously"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redpanda broker bootstrap server address in string format: add:port")),(0,r.kt)("h3",{id:"stop"},(0,r.kt)("inlineCode",{parentName:"h3"},"stop")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"def stop(self: fastkafka.testing.LocalRedpandaBroker) -> None")),(0,r.kt)("p",null,"Stops a local redpanda broker instance synchronously"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Returns"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")))}k.isMDXComponent=!0}}]);