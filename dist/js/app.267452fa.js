(function(){var t={3671:function(t,e,n){"use strict";n.d(e,{Z:function(){return l}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control attribute"},[n("h3",{staticClass:"control-content__title"},[t._v(t._s(t.title))]),t._t("default")],2)},i=[],a={props:{title:{type:String,default:"搜索框设置"}}},c=a,r=n(1001),s=(0,r.Z)(c,o,i,!1,null,"e8a5301c",null),l=s.exports},1439:function(t,e,n){"use strict";var o=n(8935),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"left-area",style:t.scrollHeight},[n("div",{staticClass:"comp-buttons"},[n("control",{attrs:{title:"按钮组"}},[n("div",{staticStyle:{width:"270px"},style:t.scrollHeight},[n("el-collapse",{attrs:{value:["basics","advanced","sales","other","marketing"]}},t._l(t.panels,(function(e,o){return n("el-collapse-item",{key:o,attrs:{name:o}},[n("template",{slot:"title"},[n("i",{staticClass:"le-icon le-icon-arrow"}),n("span",[t._v(t._s(e.title))])]),n("ul",{staticClass:"fm-collapse-tool"},[n("draggable",{staticClass:"dragArea list-group",attrs:{list:e.children,clone:t.cloneItem,group:{name:"pageEdit",pull:"clone",put:!0},options:{sort:!1}}},[t._l(e.children,(function(e,o){return[n("li",{key:o,staticClass:"widget left-widget",attrs:{"data-type":"module"}},[n("img",{staticClass:"widget-icon",attrs:{src:e.icon}}),n("span",{staticClass:"widget-title"},[t._v(t._s(e.title))]),n("div",{key:o,staticClass:"covermask"},[n("span",[t._v("释放鼠标将组建添加到此处")])])])]}))],2)],1)],2)})),1)],1)])],1)]),n("div",{staticClass:"content-area"},[n("div",{staticClass:"layout-phone"},[t._m(0),n("draggable",{staticClass:"dragArea list-group",attrs:{list:t.componentsData,group:{name:"pageEdit",pull:!0,put:!0},animation:"300"},on:{change:t.pageChange}},[n("transition-group",{staticStyle:{"min-height":"200px",display:"block"}},t._l(t.componentsData,(function(e,o){return n("div",{key:o,class:["widget"],on:{click:function(n){return t.checkedComponent(e,o)}}},[n(t.ContentPanel.get(e.type),{tag:"component",attrs:{information:e}}),o===t.activeIndex?n("div",{staticClass:"widget-mask"},[n("div",{staticClass:"widget-handle",attrs:{id:"widget"}},[n("div",{staticClass:"widget-handle-item",on:{click:function(n){return t.delComponent(e,o)}}},[n("i",{staticClass:"le-icon le-icon-trash"})]),n("div",{staticClass:"widget-handle-item",on:{click:function(n){return t.copyComponent(e)}}},[n("i",{staticClass:"le-icon le-icon-copy"})])])]):t._e()],1)})),0)],1)],1)]),n("div",{staticClass:"right-area",style:t.scrollHeight},[n(t.EditPanel.get(t.activeComponent.type),{tag:"component",attrs:{information:t.activeComponent}})],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-phone-header"},[n("div",{staticClass:"layout-phone-title"},[t._v("新建微页面")])])}],c=n(3671),r=n(4665);const s=new Map([["searchInput",()=>n.e(732).then(n.bind(n,8732))],["notice",()=>n.e(899).then(n.bind(n,899))],["blank",()=>n.e(902).then(n.bind(n,3902))]]);var l=s;const u=new Map([["searchInput",()=>n.e(307).then(n.bind(n,8307))],["notice",()=>n.e(994).then(n.bind(n,5994))],["blank",()=>n.e(461).then(n.bind(n,9461))]]);var d=u,p=n(6662),f=n.n(p);const g={basics:{title:"基础类",children:[{title:"搜索框",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/search-icon.png",type:"searchInput",data:{backgroundColor:"#f5f5f5",inputBackgroundColor:"#ffffff",wordColor:"#999999",iconColor:"#b4b4b4",tipsWord:"请输入关键字进行搜索",inputStyleRadio:"square",wordAlignRadio:"left",topBottomPx:5,leftRightPx:5}},{title:"公告",type:"notice",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/notice-icon.png",data:{title:"",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/notice-img.png",titleColor:"#f58e20",speed:80,backgroundColor:"#fff5e1"}},{type:"title",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/title-icon.png",title:"标题栏",content:{style:1,title:"主标题",subtitle:"子标题",is_more:!0,moretitle:"查看更多",morelink:{}},facade:{title_color:"#333333",title_font_size:14,subtitle_color:"#999999",subtitle_font_size:12,more_color:"#999999",margin:20,backgroundColor:"#F5F5F5"}},{type:"banner",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/banner-icon.png",title:"轮播图",content:[],facade:{chamfer_style:1,indicator_style:1,indicator_align:"left",indicator_color:"#f5212d"}},{type:"navigation",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/navigation-icon.png",title:"图文导航",content:{style:1,data:[{url:"",title:"导航一",link:{}},{url:"",title:"导航二",link:{}},{url:"",title:"导航三",link:{}},{url:"",title:"导航四",link:{}}]},facade:{nav_style:1,nav_line:2,nav_line_mun:4,active_color:"#f5212d",indicator_style:1,backgroundColor:"#FFFFFF",text_color:"#333333"}},{type:"rubik",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/rubik-icon.png",title:"图片魔方",content:{style:1,density:4,data:[{url:"",link:""}]},facade:{}},{type:"video",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/video-icon.png",title:"视频",content:{video:{},cover:"",autoplay:!1,loop:!0,source:0,address:""},facade:{}},{type:"tabs",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/tabs-icon.png",title:"选项卡",content:{data:[{title:"名称",type:1,goods:[],group:{}}],is_title:!0,is_price:!0,is_button:!0},facade:{list_style:2,card_style:1,chamfer_style:0,margin:10,padding:10,backgroundColor:"#F5F5F5"}}]},advanced:{title:"商品类",children:[{type:"goods",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/goods-icon.png",title:"商品",content:{type:1,goods:[],group:{id:0,type:"",limit:20},is_title:!0,is_price:!0,is_button:!0},facade:{list_style:3,card_style:1,chamfer_style:0,margin:30,padding:20},backgroundColor:"#F5F5F5"}]},marketing:{title:"营销类",children:[{type:"coupon",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/coupon-icon.png",title:"优惠券",content:{style:1,switch:1,autoplay:0,number:"",data:[]},facade:{list_style:1,backgroundColor:"#fff5e1",title_color:"#ff830b"}},{type:"task",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/task-icon.png",title:"任务中心",content:{task:{},icon:"",title:"去攒积分",type:1,goods:[],auto:20,is_title:!0,is_price:!0,is_button:!0},facade:{title_background:"#ffb525",title_color:"#ffffff",content_background:"#ffffff",content_color:"#666666",button_background:"#ffb525",button_color:"#ffffff",list_style:3,card_style:1,chamfer_style:0,margin:12,padding:12}},{type:"wechatLive",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/wechat-live-icon.png",title:"微信直播",content:{number:1,isShowGoods:!0,more:{isShow:!0,text:"更多直播",color:"#999999"}},facade:{list_style:1,backgroundColor:"#f5f5f5",title_color:"#ff830b",cardSpacing:12,leftRightMargins:12}}]},sales:{title:"辅助类",children:[{title:"辅助空白",type:"blank",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/blank-icon.png",content:{},data:{height:10,backgroundColor:"#FFFFFF"}},{type:"separate",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/separate-icon.png",title:"辅助线",content:{style:"solid"},facade:{margin:10,fill_color:"#bebebe"}}]},other:{title:"其他",children:[{type:"wechat",icon:"http://qmxq.oss-cn-hangzhou.aliyuncs.com/pageicon/wechat-icon.png",title:"微信公众号",content:{},facade:{line_style:"",line_color:"",high_style:20}}]}};var h=g,m={name:"App",components:{control:c.Z,Draggable:f()},data(){return{ContentPanel:l,EditPanel:d,panels:h,compButtons:[{name:"搜索框",type:"searchInput",data:{backgroundColor:"#f1f1f2",inputBackgroundColor:"#ffffff",wordColor:"#999999",iconColor:"#b4b4b4",tipsWord:"请输入关键字进行搜索",inputStyleRadio:"0",wordAlignRadio:"0",topBottomPx:5,leftRightPx:5}}],fullHeight:document.documentElement.clientHeight,activeIndex:-1}},computed:{...(0,r.Se)(["componentsData","activeComponent"]),scrollHeight(){return{height:parseInt(this.fullHeight)+"px"}}},methods:{...(0,r.OI)(["setActiveComponent"]),addBasicBlock(t){t={...t,index:this.componentsData.length+1};let e=JSON.stringify(t);this.$store.dispatch("changeComponentsData",JSON.parse(e))},checkedComponent(t,e){this.activeIndex=e,t.index=e,this.setActiveComponent(t)},delComponent(t,e){this.$confirm("确定删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((()=>{this.componentsData.splice(e,1)})).catch((()=>{}))},copyComponent(t){t={...t,index:this.$store.state.activePage.componentsData.length+1};let e=JSON.stringify(t);this.$store.dispatch("changeComponentsData",JSON.parse(e))},cloneItem(t){return JSON.parse(JSON.stringify(t))},pageChange(t){console.log(t),t.moved&&(this.activeIndex=t.moved.newIndex,t.moved.element.index=t.moved.newIndex,console.log(t.moved.element),this.setActiveComponent(t.moved.element)),t.added&&(this.activeIndex=t.added.newIndex,t.added.element.index=t.added.newIndex,this.setActiveComponent(t.added.element))}}},v=m,y=n(1001),b=(0,y.Z)(v,i,a,!1,null,null,null),_=b.exports;const C={componentsData:t=>t.activePage.componentsData,activeComponent:t=>t.activePage.activeComponent};var k=C;o["default"].use(r.ZP);const w=n(2645),x=w.keys().reduce(((t,e)=>{const n=e.replace(/^\.\/(.*)\.\w+$/,"$1"),o=w(e);return t[n]=o.default,t}),{}),q=new r.ZP.Store({modules:x,getters:k});var F=q,O=n(2809);o["default"].use(O.Z);const S=[],E=new O.Z({mode:"hash",routes:S});var P=E,D=n(4549),A=n.n(D);o["default"].config.productionTip=!1,o["default"].use(A()),new o["default"]({router:P,store:F,render:t=>t(_)}).$mount("#app")},4787:function(t,e,n){"use strict";n.r(e);const o={state:{activeComponent:{},componentsData:[],currentGoodsId:""},mutations:{setActiveComponent:(t,e)=>{t.activeComponent=e},setComponentsData:(t,e)=>{t.componentsData.push(e)}},actions:{changeComponentsData(t,e){t.commit("setComponentsData",e)}}};e["default"]=o},2645:function(t,e,n){var o={"./activePage.js":4787};function i(t){var e=a(t);return n(e)}function a(t){if(!n.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}i.keys=function(){return Object.keys(o)},i.resolve=a,t.exports=i,i.id=2645}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var a=e[o]={exports:{}};return t[o].call(a.exports,a,a.exports,n),a.exports}n.m=t,function(){var t=[];n.O=function(e,o,i,a){if(!o){var c=1/0;for(u=0;u<t.length;u++){o=t[u][0],i=t[u][1],a=t[u][2];for(var r=!0,s=0;s<o.length;s++)(!1&a||c>=a)&&Object.keys(n.O).every((function(t){return n.O[t](o[s])}))?o.splice(s--,1):(r=!1,a<c&&(c=a));if(r){t.splice(u--,1);var l=i();void 0!==l&&(e=l)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[o,i,a]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,o){return n.f[o](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"."+{307:"5a34089b",461:"d183fc01",732:"5ef62c7f",899:"a041300f",902:"47c73193",994:"452a8d2e"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{307:"ea0376d8",461:"3ee77284",732:"9bd6214a",899:"65954220",902:"4f034e44",994:"95e6fcce"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="decoration:";n.l=function(o,i,a,c){if(t[o])t[o].push(i);else{var r,s;if(void 0!==a)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==e+a){r=d;break}}r||(s=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,n.nc&&r.setAttribute("nonce",n.nc),r.setAttribute("data-webpack",e+a),r.src=o),t[o]=[i];var p=function(e,n){r.onerror=r.onload=null,clearTimeout(f);var i=t[o];if(delete t[o],r.parentNode&&r.parentNode.removeChild(r),i&&i.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=p.bind(null,r.onerror),r.onload=p.bind(null,r.onload),s&&document.head.appendChild(r)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t=function(t,e,n,o){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(a){if(i.onerror=i.onload=null,"load"===a.type)n();else{var c=a&&("load"===a.type?"missing":a.type),r=a&&a.target&&a.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=c,s.request=r,i.parentNode.removeChild(i),o(s)}};return i.onerror=i.onload=a,i.href=e,document.head.appendChild(i),i},e=function(t,e){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var i=n[o],a=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===t||a===e))return i}var c=document.getElementsByTagName("style");for(o=0;o<c.length;o++){i=c[o],a=i.getAttribute("data-href");if(a===t||a===e)return i}},o=function(o){return new Promise((function(i,a){var c=n.miniCssF(o),r=n.p+c;if(e(c,r))return i();t(o,r,i,a)}))},i={143:0};n.f.miniCss=function(t,e){var n={307:1,461:1,732:1,899:1,902:1,994:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=o(t).then((function(){i[t]=0}),(function(e){throw delete i[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,o){var i=n.o(t,e)?t[e]:void 0;if(0!==i)if(i)o.push(i[2]);else{var a=new Promise((function(n,o){i=t[e]=[n,o]}));o.push(i[2]=a);var c=n.p+n.u(e),r=new Error,s=function(o){if(n.o(t,e)&&(i=t[e],0!==i&&(t[e]=void 0),i)){var a=o&&("load"===o.type?"missing":o.type),c=o&&o.target&&o.target.src;r.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",r.name="ChunkLoadError",r.type=a,r.request=c,i[1](r)}};n.l(c,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,o){var i,a,c=o[0],r=o[1],s=o[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(i in r)n.o(r,i)&&(n.m[i]=r[i]);if(s)var u=s(n)}for(e&&e(o);l<c.length;l++)a=c[l],n.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return n.O(u)},o=self["webpackChunkdecoration"]=self["webpackChunkdecoration"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(1439)}));o=n.O(o)})();
//# sourceMappingURL=app.267452fa.js.map