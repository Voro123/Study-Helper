webpackJsonp([1],{"3Vq7":function(t,e){},"4flp":function(t,e){},LIQS:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("kV13"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("C7Lr")({name:"App"},a,!1,function(t){i("syFG")},null,null).exports,o=i("4WWC"),r=i("IHPB"),c=i.n(r),l={name:"HomeHeader",props:["arrFileFolders","spread"],data:function(){return{inserting:null,tbtext:null,confirming:!1}},mounted:function(){window.onresize=this.resizeLi},watch:{arrFileFolders:function(){this.resizeLi()},spread:function(){this.resizeLi()}},methods:{emitData:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.$emit.apply(this,[t].concat(c()(i)))},resizeLi:function(){this.$nextTick(function(){for(var t=document.getElementsByClassName("h1_li"),e=!1,i=t.length-1;i>-1;i--)if(t[i].offsetTop>30)if(this.spread)if(44===t[i].offsetTop||45===t[i].offsetTop){if(t[i].classList.remove("spread-margin"),!1===e){var n=t[i].parentElement,a=document.getElementsByClassName("more")[0];a.style="",a.style.right=n.offsetLeft+n.clientWidth-(t[i].offsetLeft+t[i].clientWidth)-10+"px",a.style.top="",e=!0}}else t[i].classList.remove("hidden"),t[i].classList.add("spread-margin");else t[i].classList.add("hidden"),t[i].classList.remove("spread-margin");else if(t[i].classList.remove("spread-margin"),t[i].classList.remove("hidden"),!1===e){var s=t[i].parentElement,o=document.getElementsByClassName("more")[0];o.style="",o.style.right=s.offsetLeft+s.clientWidth-(t[i].offsetLeft+t[i].clientWidth)-10+"px",o.style.top="",e=!0}})},h1_inserting:function(){this.emitData("setActioning",null);var t=prompt("请输入要添加的一级目录");null!==t&&(""!==(t=t.trim())?t.length>20?alert("一级目录的名称长度不能超过20"):this.emitData("axiosGetData","insert/h1",{name:t},function(t){t.data?(this.emitData("getFileFolders"),this.resizeLi()):alert("添加数据失败了,请检查当前一级目录是否已存在")}.bind(this)):alert("目录名不能为空"))},h1_delete:function(t){confirm("确定要删除目录【"+t+"】吗?(该操作无法撤回！)")&&this.emitData("axiosGetData","delete/h1",{name:t},function(t){t.data?(this.emitData("getFileFolders"),location.hash="",this.emitData("getFiles"),this.resizeLi()):alert("因未知的原因,删除目录失败了")}.bind(this))},h2_inserting:function(t){this.emitData("setActioning",null),this.inserting=t},h2_inserted:function(t,e){var i=this;if(!0!==this.confirming)if(this.confirming=!0,!0===confirm("是否确定添加目录?")){if(this.tbtext=this.tbtext&&this.tbtext.trim(),null===this.tbtext||""===this.tbtext)return alert("目录名不能为空"),this.confirming=!1,void t.target.focus();if(this.tbtext.length>20)return alert("二级目录的名称长度不能超过20"),this.confirming=!1,void t.target.focus();this.emitData("axiosGetData","insert/h2",{name:this.tbtext,parents:e},function(t){if(this.inserting=null,!t.data)return alert("添加数据失败了,请检查当前目录下是否有同名二级目录"),void(this.confirming=!1);this.emitData("getFileFolders",function(){this.confirming=!1}.bind(this)),location.hash="#/"+e+"/"+this.tbtext,this.emitData("getFiles"),this.tbtext=null}.bind(this))}else this.inserting=null,this.tbtext=null,setTimeout(function(){i.confirming=!1},0)},h2_canselInsert:function(t){var e=this;!0!==this.confirming&&(this.confirming=!0,!0===confirm("确定放弃当前添加操作吗?")&&(this.inserting=null,this.tbtext=null),t.target.focus(),setTimeout(function(){e.confirming=!1},0))},h2_delete:function(t,e){confirm("确定要删除二级目录【"+e+"】吗")&&this.emitData("axiosGetData","delete/h2",{parents:t,name:e},function(t){t.data?(this.emitData("getFileFolders"),location.hash="",this.emitData("getFiles")):alert("删除数据失败了,请检查数据是否真实存在")}.bind(this))}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",{staticClass:"home-header"},[i("router-link",{attrs:{to:"#",tag:"span"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[t._v("\n    Study-Helper\n  ")]),t._v(" "),i("ul",{},[t._l(t.arrFileFolders,function(e,n){return i("li",{key:"header-"+e.id,staticClass:"h1_li",class:{display_block:t.inserting===e.id}},[i("span",[t._v(t._s(n))]),t._v(" "),i("div",[i("ul",[t._l(e.childs,function(a){return i("li",{key:"header2-"+e.id+"-"+a},[i("router-link",{attrs:{to:"#/"+n+"/"+a,tag:"div"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[i("span",[t._v(t._s(a))]),t._v(" "),i("span",{staticClass:"h2_delete",on:{click:function(e){return e.stopPropagation(),t.h2_delete(n,a)}}},[t._v("×")])])],1)}),t._v(" "),i("li",{staticClass:"addnew"},[i("div",[t.inserting!==e.id?i("span",{on:{click:function(i){return t.h2_inserting(e.id)}}},[t._v("添加子目录")]):i("input",{directives:[{name:"model",rawName:"v-model",value:t.tbtext,expression:"tbtext"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},domProps:{value:t.tbtext},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.h2_inserted(e,n)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.h2_canselInsert(e)}],blur:function(e){return t.h2_inserted(e,n)},input:function(e){e.target.composing||(t.tbtext=e.target.value)}}})])]),t._v(" "),i("li",{staticClass:"h1_delete"},[i("div",[i("span",{on:{click:function(e){return t.h1_delete(n)}}},[t._v("删除该目录")])])])],2)])])}),t._v(" "),i("li",{staticClass:"h1_li"},[i("span",{staticClass:"addnew",on:{click:t.h1_inserting}},[t._v("Add-NewFolder")])])],2),t._v(" "),i("div",{class:{more:!0,shouqi:t.spread},staticStyle:{display:"none"},on:{click:function(e){return t.emitData("spreadChange")}}},[t._v("\n    "+t._s(t.spread?"收起":"展开"))])],1)},staticRenderFns:[]};var d=i("C7Lr")(l,h,!1,function(t){i("gLh8")},"data-v-5233c33a",null).exports,u={name:"HomeBody",props:["words","checkingword","h3_page","h1"],data:function(){return{canprev:!1,cannext:!1}},watch:{words:function(){this.$nextTick(function(){this.pageChange()})},h3_page:function(){this.pageChange()}},methods:{emitData:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.$emit.apply(this,[t].concat(c()(i)))},getarr:function(t){var e=1;1===t&&(e=0);var i=119*this.h3_page;return this.words&&this.words.length>i+20*(t-1)-e?this.words.slice(i+20*(t-1)-e,i+20*t-1):null},h3_delete:function(t){confirm("确定要删除词条【"+t.name+"】吗")&&this.emitData("axiosGetData","delete/h3",{id:t.id},function(t){t.data||console.log("词条删除失败了"),this.emitData("getFiles",function(){this.h3_page>0&&this.words.length>119*this.h3_page&&this.$emit("update:h3_page",this.h3_page-1)}.bind(this))}.bind(this))},to_prevpage:function(){this.canprev&&this.$emit("update:h3_page",this.h3_page-1)},to_nextpage:function(){this.cannext&&this.$emit("update:h3_page",this.h3_page+1)},pageChange:function(){0!==this.h3_page?this.canprev=!0:this.canprev=!1,this.words&&this.words.length>119*(this.h3_page+1)?this.cannext=!0:this.cannext=!1}}},g={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("caption",{staticClass:"home-body"},[t.h1?[i("div",{staticClass:"jiantou-div",class:{active:t.canprev},on:{click:t.to_prevpage}},[i("span",{staticClass:"iconfont iconjiantou prevpage"})]),t._v(" "),i("div",{staticClass:"container"},t._l(6,function(e){return i("div",{key:"home-container-"+e},[1===e&&t.words?i("div",[i("span",{on:{click:function(e){return t.emitData("setActioning",1)}}},[t._v("添加新词条")])]):t._e(),t._v(" "),t._l(t.getarr(e),function(e){return i("div",{key:"home-n-"+e.id,class:{checkingword:t.checkingword===e},on:{click:function(i){return t.emitData("setCheckingword",e)}}},[i("span",[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"delete",on:{click:function(i){return i.stopPropagation(),t.h3_delete(e)}}},[t._v("×")])])})],2)}),0),t._v(" "),i("div",{staticClass:"jiantou-div",class:{active:t.cannext},on:{click:t.to_nextpage}},[i("span",{staticClass:"iconfont iconjiantou nextpage"})])]:i("div",{staticClass:"bg"})],2)},staticRenderFns:[]};var f=i("C7Lr")(u,g,!1,function(t){i("3Vq7")},"data-v-1fe2676c",null).exports,p={props:["checkingword","h1","h2","actioning"],name:"ShowWords",data:function(){return{name:"",introduce:""}},methods:{emitData:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.$emit.apply(this,[t].concat(c()(i)))},close:function(){this.emitData("setActioning",null)},insert_h3:function(){0!==this.name.trim().length?this.name.length>80?alert("词条名不能超过80"):this.emitData("axiosGetData","insert/h3",{name:this.name,introduce:this.introduce,parents:this.h2,graparents:this.h1},function(t){t.data||alert("添加词条失败了,请检查是否已存在同名录下的同名词条"),this.emitData("getFiles")}.bind(this)):alert("词条名不能为空")},toUpdate:function(){this.emitData("setActioning",2)},update_h3:function(){0!==this.name.trim().length?this.name.length>80?alert("词条名不能超过80"):this.emitData("axiosGetData","update/h3",{id:this.checkingword.id,new_name:this.name,new_introduce:this.introduce},function(t){t.data?this.emitData("getFiles"):alert("编辑词条失败了,请检查是否已存在同名录下的同名词条")}.bind(this)):alert("词条名不能为空")}},watch:{actioning:function(t){if(2===t)return this.name=this.checkingword.name,void(this.introduce=this.checkingword.introduce);this.name="",this.introduce=""}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"showwords"},[i("button",{staticClass:"close-btn",on:{click:t.close}}),t._v(" "),i("div",{staticClass:"word-name"},[0===t.actioning?i("h2",{on:{dblclick:t.toUpdate}},[t._v(t._s(t.checkingword.name||"")+"\n    ")]):i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"focus",rawName:"v-focus"}],attrs:{placeholder:"词条名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"word-introduce"},[0===t.actioning?i("textarea",{attrs:{readonly:"",placeholder:"该词条暂时还没有介绍哦~"},domProps:{value:t.checkingword.introduce||""},on:{dblclick:t.toUpdate}}):1===t.actioning?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.introduce,expression:"introduce"}],staticClass:"inserting",attrs:{placeholder:"具体描述.."},domProps:{value:t.introduce},on:{input:function(e){e.target.composing||(t.introduce=e.target.value)}}}):2===t.actioning?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.introduce,expression:"introduce"}],attrs:{placeholder:"该词条暂时还没有介绍哦~"},domProps:{value:t.introduce},on:{input:function(e){e.target.composing||(t.introduce=e.target.value)}}}):t._e()]),t._v(" "),0===t.actioning?i("span",{staticStyle:{"font-size":"12px",display:"block","padding-top":"10px",color:"#404040"}},[t._v("*双击文本框以编辑*")]):1===t.actioning?i("button",{staticClass:"confirm",on:{click:t.insert_h3}},[i("span",[t._v("添加")])]):2===t.actioning?i("button",{staticClass:"confirm",on:{click:t.update_h3}},[i("span",[t._v("编辑")])]):t._e()])},staticRenderFns:[]};var v=i("C7Lr")(p,m,!1,function(t){i("4flp")},"data-v-4702b880",null).exports,_={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{staticClass:"container"},[e("div",{staticClass:"img"},this._l(12,function(t){return e("div",{key:"loading-"+t,style:{transform:"rotate("+30*t+"deg)"}},[e("div")])}),0),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font"},[e("span",[this._v("L")]),e("span",[this._v("o")]),e("span",[this._v("a")]),e("span",[this._v("d")]),e("span",[this._v("i")]),e("span",[this._v("n")]),e("span",[this._v("g")])])}]};var w=i("C7Lr")({name:"Loading"},_,!1,function(t){i("LIQS")},"data-v-2ca98dfe",null).exports,k=i("I29D"),x=i.n(k);var F=function(t){switch(console.log(t),t.request&&t.request.status){case 0:alert("请求超时了,请稍后重试");break;case 504:alert("后台服务器没有响应,请稍后重试");break;default:alert("发生了预料之外的错误,"+t),console.log(t)}};var C={name:"Home",components:{HomeHeader:d,HomeBody:f,ShowWords:v,Loading:w},data:function(){return{loading:!1,words:null,checkingword:null,actioning:null,h1:null,h2:null,h3_page:0,arrFileFolders:null,spread:!1}},mounted:function(){this.getFileFolders(),this.getFiles(),window.addEventListener("hashchange",function(){this.getFiles()}.bind(this),!1)},watch:{h3_page:function(){this.setActioning(null)}},methods:{axiosGetData:function(t,e,i){t="api/"+t,this.loading=!0,x.a.get(t,{params:e,timeout:1e4}).then(function(t){i(t)}).catch(function(t){F(t)}).finally(function(){this.loading=!1}.bind(this))},getLoading:function(t){this.loading=t},getFileFolders:function(t){t=t||function(){},this.axiosGetData("getFileFolders",{},function(e){this.arrFileFolders=e.data,t()}.bind(this))},getFiles:function(t){t=t||function(){},this.actioning=null,this.checkingword=null;var e=decodeURI(location.hash).split("/");e.shift(),this.h1===e[0]&&this.h2===e[1]||(this.h3_page=0),this.h1=e[0],this.h2=e[1],this.axiosGetData("getFiles",{h1:e[0]||"",h2:e[1]||""},function(e){this.words=e.data,location.hash||(this.words=null),this.spread&&this.spreadChange(),t()}.bind(this))},setCheckingword:function(t){this.setActioning(0)&&(this.checkingword=t)},setActioning:function(t){if(1===this.actioning){if(!confirm("确定取消添加当前词条吗？"))return!1}else if(2===this.actioning&&!confirm("确定取消编辑当前词条吗？"))return!1;return 1!==t&&null!==t||(this.checkingword=null),this.actioning=t,!0},spreadChange:function(){this.spread=!this.spread}}},b={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t.loading?i("loading"):t._e(),t._v(" "),i("home-header",{attrs:{arrFileFolders:t.arrFileFolders,spread:t.spread},on:{loading:t.getLoading,getFiles:t.getFiles,setActioning:t.setActioning,axiosGetData:t.axiosGetData,getFileFolders:t.getFileFolders,spreadChange:t.spreadChange}}),t._v(" "),i("home-body",{attrs:{words:t.words,checkingword:t.checkingword,h3_page:t.h3_page,h1:t.h1},on:{loading:t.getLoading,getFiles:t.getFiles,setActioning:t.setActioning,axiosGetData:t.axiosGetData,setCheckingword:t.setCheckingword,"update:h3_page":function(e){t.h3_page=e}}}),t._v(" "),i("transition",{attrs:{name:"fade"}},[null!==t.actioning?i("show-words",{attrs:{checkingword:t.checkingword,h1:t.h1,h2:t.h2,actioning:t.actioning},on:{getFiles:t.getFiles,setActioning:t.setActioning,axiosGetData:t.axiosGetData,setCheckingword:t.setCheckingword}}):t._e()],1)],1)},staticRenderFns:[]};var y=i("C7Lr")(C,b,!1,function(t){i("s+cz")},"data-v-00b82e7b",null).exports;n.a.use(o.a);var D=new o.a({mode:"history",routes:[{path:"/",name:"Home",components:{default:y}}]});i("muQq");n.a.directive("focus",{inserted:function(t){t.focus()}}),new n.a({el:"#app",router:D,components:{App:s},template:"<App/>"})},gLh8:function(t,e){},muQq:function(t,e){},"s+cz":function(t,e){},syFG:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.bd350d6cf0ef4899cda3.js.map