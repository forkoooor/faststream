"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[5623],{3905:(a,e,t)=>{t.d(e,{Zo:()=>f,kt:()=>d});var n=t(7294);function i(a,e,t){return e in a?Object.defineProperty(a,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):a[e]=t,a}function s(a,e){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(a);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),t.push.apply(t,n)}return t}function o(a){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){i(a,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(t,e))}))}return a}function r(a,e){if(null==a)return{};var t,n,i=function(a,e){if(null==a)return{};var t,n,i={},s=Object.keys(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||(i[t]=a[t]);return i}(a,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);for(n=0;n<s.length;n++)t=s[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(a,t)&&(i[t]=a[t])}return i}var p=n.createContext({}),l=function(a){var e=n.useContext(p),t=e;return a&&(t="function"==typeof a?a(e):o(o({},e),a)),t},f=function(a){var e=l(a.components);return n.createElement(p.Provider,{value:e},a.children)},c="mdxType",u={inlineCode:"code",wrapper:function(a){var e=a.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(a,e){var t=a.components,i=a.mdxType,s=a.originalType,p=a.parentName,f=r(a,["components","mdxType","originalType","parentName"]),c=l(t),k=i,d=c["".concat(p,".").concat(k)]||c[k]||u[k]||s;return t?n.createElement(d,o(o({ref:e},f),{},{components:t})):n.createElement(d,o({ref:e},f))}));function d(a,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var s=t.length,o=new Array(s);o[0]=k;var r={};for(var p in e)hasOwnProperty.call(e,p)&&(r[p]=e[p]);r.originalType=a,r[c]="string"==typeof a?a:i,o[1]=r;for(var l=2;l<s;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},7868:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const s={},o="Using FastAPI to Run FastKafka Application",r={unversionedId:"guides/Guide_32_Using_fastapi_to_run_fastkafka_application",id:"version-0.7.0/guides/Guide_32_Using_fastapi_to_run_fastkafka_application",title:"Using FastAPI to Run FastKafka Application",description:"When deploying a FastKafka application, the default approach is to",source:"@site/versioned_docs/version-0.7.0/guides/Guide_32_Using_fastapi_to_run_fastkafka_application.md",sourceDirName:"guides",slug:"/guides/Guide_32_Using_fastapi_to_run_fastkafka_application",permalink:"/docs/0.7.0/guides/Guide_32_Using_fastapi_to_run_fastkafka_application",draft:!1,tags:[],version:"0.7.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Deploying FastKafka using Docker",permalink:"/docs/0.7.0/guides/Guide_30_Using_docker_to_deploy_fastkafka"},next:{title:"Benchmarking FastKafka app",permalink:"/docs/0.7.0/guides/Guide_06_Benchmarking_FastKafka"}},p={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Basic FastKafka app",id:"1-basic-fastkafka-app",level:2},{value:"2. Using fastapi_lifespan method",id:"2-using-fastapi_lifespan-method",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2}],f={toc:l},c="wrapper";function u(a){let{components:e,...t}=a;return(0,i.kt)(c,(0,n.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-fastapi-to-run-fastkafka-application"},"Using FastAPI to Run FastKafka Application"),(0,i.kt)("p",null,"When deploying a FastKafka application, the default approach is to\nutilize the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli/fastkafka#fastkafka-run"},(0,i.kt)("inlineCode",{parentName:"a"},"fastkafka run"))," CLI\ncommand. This command allows you to launch your FastKafka application as\na standalone service. However, if you already have a FastAPI application\nin place and wish to run FastKafka application alongside it, you have an\nalternative option."),(0,i.kt)("p",null,"FastKafka provides a method called ",(0,i.kt)("inlineCode",{parentName:"p"},"FastKafka.fastapi_lifespan")," that\nleverages ",(0,i.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/advanced/events/#lifespan-events"},"FastAPI\u2019s\nlifespan"),"\nfeature. This method allows you to run your FastKafka application\ntogether with your existing FastAPI app, seamlessly integrating their\nfunctionalities. By using the ",(0,i.kt)("inlineCode",{parentName:"p"},"FastKafka.fastapi_lifespan")," method, you\ncan start the FastKafka application within the same process as the\nFastAPI app."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FastKafka.fastapi_lifespan")," method ensures that both FastAPI and\nFastKafka are initialized and start working simultaneously. This\napproach enables the execution of Kafka-related tasks, such as producing\nand consuming messages, while also handling HTTP requests through\nFastAPI\u2019s routes."),(0,i.kt)("p",null,"By combining FastAPI and FastKafka in this manner, you can build a\ncomprehensive application that harnesses the power of both frameworks.\nWhether you require real-time messaging capabilities or traditional HTTP\nendpoints, this approach allows you to leverage the strengths of FastAPI\nand FastKafka within a single deployment setup."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A basic knowledge of ",(0,i.kt)("inlineCode",{parentName:"li"},"FastKafka")," is needed to proceed with this\nguide. If you are not familiar with ",(0,i.kt)("inlineCode",{parentName:"li"},"FastKafka"),", please go through\nthe ",(0,i.kt)("a",{parentName:"li",href:"/docs#tutorial"},"tutorial")," first."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"FastKafka")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"FastAPI")," libraries needs to be installed.")),(0,i.kt)("p",null,"This guide will provide a step-by-step explanation, taking you through\neach stage individually, before combining all the components in the\nfinal section for a comprehensive understanding of the process."),(0,i.kt)("h2",{id:"1-basic-fastkafka-app"},"1. Basic FastKafka app"),(0,i.kt)("p",null,"In this step, we will begin by creating a simple FastKafka application."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pydantic import BaseModel, Field, NonNegativeFloat\nfrom typing import *\n\nfrom fastkafka import FastKafka\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Greetings",\n    kafka_brokers=kafka_brokers,\n)\n\n\nclass TestMsg(BaseModel):\n    msg: str = Field(...)\n\n\n@kafka_app.consumes()\nasync def on_names(msg: TestMsg):\n    await to_greetings(TestMsg(msg=f"Hello {msg.msg}"))\n\n\n@kafka_app.produces()\nasync def to_greetings(greeting: TestMsg) -> TestMsg:\n    return greeting\n')),(0,i.kt)("p",null,"In the above example, we consume messages from a topic called ",(0,i.kt)("inlineCode",{parentName:"p"},"names"),',\nwe prepend \u201cHello" to the message, and send it back to another topic\ncalled ',(0,i.kt)("inlineCode",{parentName:"p"},"greetings"),"."),(0,i.kt)("p",null,"We now have a simple ",(0,i.kt)("inlineCode",{parentName:"p"},"FastKafka")," app to produce and consume from two\ntopics."),(0,i.kt)("h2",{id:"2-using-fastapi_lifespan-method"},"2. Using fastapi_lifespan method"),(0,i.kt)("p",null,"In this step of the guide, we will explore the integration of a\nFastKafka application with a FastAPI application using the\n",(0,i.kt)("inlineCode",{parentName:"p"},"FastKafka.fastapi_lifespan")," method. The ",(0,i.kt)("inlineCode",{parentName:"p"},"FastKafka.fastapi_lifespan"),"\nmethod is a feature provided by FastKafka, which allows you to\nseamlessly integrate a FastKafka application with a FastAPI application\nby leveraging FastAPI\u2019s lifespan feature."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from fastapi import FastAPI\n\nfastapi_app = FastAPI(lifespan=kafka_app.fastapi_lifespan(kafka_broker_name="localhost"))\n\n\n@fastapi_app.get("/hello")\nasync def hello():\n    return {"msg": "hello there"}\n')),(0,i.kt)("p",null,"In the above example, a new instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FastAPI")," app is created,\nand when the app is started using uvicorn, it also runs the ",(0,i.kt)("inlineCode",{parentName:"p"},"FastKafka"),"\napplication concurrently."),(0,i.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,i.kt)("p",null,"Let\u2019s put the above code together and write it in a file called\n",(0,i.kt)("inlineCode",{parentName:"p"},"fast_apps.py"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# content of the "fast_apps.py" file\n\nfrom pydantic import BaseModel, Field, NonNegativeFloat\nfrom typing import *\n\nfrom fastkafka import FastKafka\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Greetings",\n    kafka_brokers=kafka_brokers,\n)\n\n\nclass TestMsg(BaseModel):\n    msg: str = Field(...)\n\n\n@kafka_app.consumes()\nasync def on_names(msg: TestMsg):\n    await to_greetings(TestMsg(msg=f"Hello {msg.msg}"))\n\n\n@kafka_app.produces()\nasync def to_greetings(greeting: TestMsg) -> TestMsg:\n    return greeting\n\n\nfrom fastapi import FastAPI\n\nfastapi_app = FastAPI(lifespan=kafka_app.fastapi_lifespan("localhost"))\n\n@fastapi_app.get("/hello")\nasync def hello():\n    return {"msg": "hello there"}\n')),(0,i.kt)("p",null,"Finally, you can run the FastAPI application using a web server of your\nchoice, such as Uvicorn or Hypercorn by running the below command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"uvicorn fast_apps:fastapi_app --host=0.0.0.0 --port=8080\n")))}u.isMDXComponent=!0}}]);