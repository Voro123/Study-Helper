webpackJsonp([1],{"4NbS":function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("kV13"),s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var o=i("C7Lr")({name:"App"},s,!1,function(t){i("4NbS")},null,null).exports,r=i("4WWC"),a={name:"HomeHeader",props:["objProps","arrFileFolders","spread"],data:function(){return{inserting:null,tbtext:null,confirming:!1}},mounted:function(){window.onresize=this.resizeLi},watch:{arrFileFolders:function(){this.resizeLi()},spread:function(){this.resizeLi()}},methods:{resizeLi:function(){this.$nextTick(function(){for(var t=document.getElementsByClassName("h1_li"),e=!1,i=t.length-1;i>-1;i--)if(t[i].offsetTop>30)if(this.spread)if(44===t[i].offsetTop||45===t[i].offsetTop){if(t[i].classList.remove("spread-margin"),!1===e){var n=t[i].parentElement,s=document.getElementsByClassName("more")[0];s.style.right=n.offsetLeft+n.clientWidth-(t[i].offsetLeft+t[i].clientWidth)-10+"px",s.style.top="",e=!0}}else t[i].classList.remove("hidden"),t[i].classList.add("spread-margin");else t[i].classList.add("hidden"),t[i].classList.remove("spread-margin");else if(t[i].classList.remove("spread-margin"),t[i].classList.remove("hidden"),!1===e){var o=t[i].parentElement,r=document.getElementsByClassName("more")[0];r.style.right=o.offsetLeft+o.clientWidth-(t[i].offsetLeft+t[i].clientWidth)-10+"px",r.style.top="",e=!0}})},h1_inserting:function(){this.objProps.setActioning(null);var t=prompt("请输入要添加的一级目录");null!==t&&(""!==(t=t.trim())?t.length>20?alert("一级目录的名称长度不能超过20"):this.objProps.axiosGetData("insert/h1",{name:t},function(t){t.data?(this.objProps.getFileFolders(),this.resizeLi()):alert("添加数据失败了,请检查当前一级目录是否已存在")}.bind(this)):alert("目录名不能为空"))},h1_delete:function(t){confirm("确定要删除目录【"+t+"】吗?(该操作无法撤回！)")&&this.objProps.axiosGetData("delete/h1",{name:t},function(t){t.data?(this.objProps.getFileFolders(),location.hash="",this.objProps.getFiles(),this.resizeLi()):alert("因未知的原因,删除目录失败了")}.bind(this))},h2_inserting:function(t){this.objProps.setActioning(null),this.inserting=t},h2_inserted:function(t,e){var i=this;if(!0!==this.confirming)if(this.confirming=!0,!0===confirm("是否确定添加目录?")){if(this.tbtext=this.tbtext&&this.tbtext.trim(),null===this.tbtext||""===this.tbtext)return alert("目录名不能为空"),this.confirming=!1,void t.target.focus();if(this.tbtext.length>20)return alert("二级目录的名称长度不能超过20"),this.confirming=!1,void t.target.focus();this.objProps.axiosGetData("insert/h2",{name:this.tbtext,parents:e},function(t){if(this.inserting=null,!t.data)return alert("添加数据失败了,请检查当前目录下是否有同名二级目录"),void(this.confirming=!1);this.objProps.getFileFolders(function(){this.confirming=!1}.bind(this)),location.hash="#/"+e+"/"+this.tbtext,this.objProps.getFiles(),this.tbtext=null}.bind(this))}else this.inserting=null,this.tbtext=null,setTimeout(function(){i.confirming=!1},0)},h2_canselInsert:function(t){var e=this;!0!==this.confirming&&(this.confirming=!0,!0===confirm("确定放弃当前添加操作吗?")&&(this.inserting=null,this.tbtext=null),t.target.focus(),setTimeout(function(){e.confirming=!1},0))},h2_delete:function(t,e){confirm("确定要删除二级目录【"+e+"】吗")&&this.objProps.axiosGetData("delete/h2",{parents:t,name:e},function(t){t.data?(this.objProps.getFileFolders(),location.hash="",this.objProps.getFiles()):alert("删除数据失败了,请检查数据是否真实存在")}.bind(this))}}},c={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-header"},[i("router-link",{attrs:{to:"#",tag:"span"},nativeOn:{click:function(e){return t.objProps.getFiles(null,null)}}},[t._v("\n    Study-Helper\n  ")]),t._v(" "),i("ul",{},[t._l(t.arrFileFolders,function(e,n){return i("li",{key:"header-"+e.id,staticClass:"h1_li",class:{display_block:t.inserting===e.id}},[i("span",[t._v(t._s(n))]),t._v(" "),i("div",[i("ul",[t._l(e.childs,function(s){return i("li",{key:"header2-"+e.id+"-"+s},[i("router-link",{attrs:{to:"#/"+n+"/"+s,tag:"div"},nativeOn:{click:function(e){return t.objProps.getFiles(e)}}},[i("span",[t._v(t._s(s))]),t._v(" "),i("span",{staticClass:"h2_delete",on:{click:function(e){return e.stopPropagation(),t.h2_delete(n,s)}}},[t._v("×")])])],1)}),t._v(" "),i("li",{staticClass:"addnew"},[i("div",[t.inserting!==e.id?i("span",{on:{click:function(i){return t.h2_inserting(e.id)}}},[t._v("添加子目录")]):i("input",{directives:[{name:"model",rawName:"v-model",value:t.tbtext,expression:"tbtext"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},domProps:{value:t.tbtext},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.h2_inserted(e,n)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.h2_canselInsert(e)}],blur:function(e){return t.h2_inserted(e,n)},input:function(e){e.target.composing||(t.tbtext=e.target.value)}}})])]),t._v(" "),i("li",{staticClass:"h1_delete"},[i("div",[i("span",{on:{click:function(e){return t.h1_delete(n)}}},[t._v("删除该目录")])])])],2)])])}),t._v(" "),i("li",{staticClass:"h1_li"},[i("span",{staticClass:"addnew",on:{click:t.h1_inserting}},[t._v("\n        Add-NewFolder\n      ")])])],2),t._v(" "),i("div",{class:{more:!0,shouqi:t.spread},on:{click:function(e){return t.objProps.spreadChange()}}},[t._v("\n    "+t._s(t.spread?"收起":"展开")+"\n  ")])],1)},staticRenderFns:[]};var l=i("C7Lr")(a,c,!1,function(t){i("sstR")},"data-v-35275871",null).exports,d={name:"HomeBody",props:["objProps","words","checkingword"],methods:{getarr:function(t){var e=1;return 1===t&&(e=0),this.words&&this.words.length>20*(t-1)-e?this.words.slice(20*(t-1)-e,20*t-1):null},h3_delete:function(t){confirm("确定要删除词条【"+t.name+"】吗")&&this.objProps.axiosGetData("delete/h3",{id:t.id},function(t){t.data||console.log("词条删除失败了"),this.objProps.getFiles()}.bind(this))}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-body"},t._l(6,function(e){return i("div",{key:"home-container-"+e,staticClass:"container"},[1===e&&t.words?i("div",[i("span",{on:{click:function(e){return t.objProps.setActioning(1)}}},[t._v("添加新词条")])]):t._e(),t._v(" "),t._l(t.getarr(e),function(e){return i("div",{key:"home-n-"+e.id,class:{checkingword:t.checkingword===e},on:{click:function(i){return t.objProps.setCheckingword(e)}}},[i("span",[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"delete",on:{click:function(i){return i.stopPropagation(),t.h3_delete(e)}}},[t._v("×")])])})],2)}),0)},staticRenderFns:[]};var u=i("C7Lr")(d,h,!1,function(t){i("fG5F")},"data-v-5e6d9230",null).exports,g={props:["objProps","checkingword","h1","h2","actioning"],name:"ShowWords",data:function(){return{name:"",introduce:""}},methods:{close:function(){this.objProps.setActioning(null)},insert_h3:function(){0!==this.name.trim().length?this.objProps.axiosGetData("insert/h3",{name:this.name,introduce:this.introduce,parents:this.h2,graparents:this.h1},function(t){t.data||alert("添加词条失败了,请检查是否已存在同名录下的同名词条"),this.objProps.getFiles()}.bind(this)):alert("词条名不能为空")},toUpdate:function(){this.objProps.setActioning(2)},update_h3:function(){0!==this.name.trim().length?this.name.length>25?alert("词条名不能超过25"):this.objProps.axiosGetData("update/h3",{id:this.checkingword.id,new_name:this.name,new_introduce:this.introduce},function(t){t.data?this.objProps.getFiles():alert("编辑词条失败了,请检查是否已存在同名录下的同名词条")}.bind(this)):alert("词条名不能为空")}},watch:{actioning:function(t){if(2===t)return this.name=this.checkingword.name,void(this.introduce=this.checkingword.introduce);this.name="",this.introduce=""}}},f={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"showwords"},[i("button",{staticClass:"close-btn",on:{click:t.close}}),t._v(" "),i("div",{staticClass:"word-name"},[0===t.actioning?i("h2",{on:{dblclick:t.toUpdate}},[t._v(t._s(t.checkingword.name||""))]):i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{placeholder:"词条名"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"word-introduce"},[0===t.actioning?i("textarea",{attrs:{readonly:"",placeholder:"该词条暂时还没有介绍哦~"},domProps:{value:t.checkingword.introduce||""},on:{dblclick:t.toUpdate}}):1===t.actioning?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.introduce,expression:"introduce"}],staticClass:"inserting",attrs:{placeholder:"具体描述.."},domProps:{value:t.introduce},on:{input:function(e){e.target.composing||(t.introduce=e.target.value)}}}):2===t.actioning?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.introduce,expression:"introduce"}],attrs:{placeholder:"该词条暂时还没有介绍哦~"},domProps:{value:t.introduce},on:{input:function(e){e.target.composing||(t.introduce=e.target.value)}}}):t._e()]),t._v(" "),0===t.actioning?i("span",{staticStyle:{"font-size":"12px",display:"block","padding-top":"10px",color:"#404040"}},[t._v("*双击文本框以编辑*")]):1===t.actioning?i("button",{staticClass:"confirm",on:{click:t.insert_h3}},[i("span",[t._v("添加")])]):2===t.actioning?i("button",{staticClass:"confirm",on:{click:t.update_h3}},[i("span",[t._v("编辑")])]):t._e()])},staticRenderFns:[]};var p=i("C7Lr")(g,f,!1,function(t){i("iwqW")},"data-v-6771911f",null).exports,m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{staticClass:"container"},[e("div",{staticClass:"img"},this._l(12,function(t){return e("div",{key:"loading-"+t,style:{transform:"rotate("+30*t+"deg)"}},[e("div")])}),0),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font"},[e("span",[this._v("L")]),e("span",[this._v("o")]),e("span",[this._v("a")]),e("span",[this._v("d")]),e("span",[this._v("i")]),e("span",[this._v("n")]),e("span",[this._v("g")])])}]};var v=i("C7Lr")({name:"Loading"},m,!1,function(t){i("gHBT")},"data-v-77d3cf1c",null).exports,_=i("I29D"),b=i.n(_);var w=function(t){switch(console.log(t),t.request&&t.request.status){case 0:alert("请求超时了,请稍后重试");break;case 504:alert("后台服务器没有响应,请稍后重试");break;default:alert("发生了预料之外的错误,"+t)}};var k={name:"Home",components:{HomeHeader:l,HomeBody:u,ShowWords:p,Loading:v},data:function(){return{loading:!1,words:null,checkingword:null,actioning:null,h1:null,h2:null,arrFileFolders:null,spread:!1,to_HomeHeader:{getFiles:this.getFiles,setActioning:this.setActioning,axiosGetData:this.axiosGetData,getFileFolders:this.getFileFolders,spreadChange:this.spreadChange},to_HomeBody:{getFiles:this.getFiles,setCheckingword:this.setCheckingword,axiosGetData:this.axiosGetData,setActioning:this.setActioning},to_ShowWords:{getFiles:this.getFiles,setCheckingword:this.setCheckingword,axiosGetData:this.axiosGetData,setActioning:this.setActioning}}},mounted:function(){this.getFileFolders(),this.getFiles()},methods:{axiosGetData:function(t,e,i){t="api/"+t,this.loading=!0,b.a.get(t,{params:e,timeout:1e4}).then(function(t){i(t)}).catch(function(t){w(t)}).finally(function(){this.loading=!1}.bind(this))},getLoading:function(t){this.loading=t},getFileFolders:function(t){t=t||function(){},this.axiosGetData("getFileFolders",{},function(e){this.arrFileFolders=e.data,t()}.bind(this))},getFiles:function(){this.actioning=null,this.checkingword=null;var t=decodeURI(location.hash).split("/");t.shift(),this.h1=t[0],this.h2=t[1],this.axiosGetData("getFiles",{h1:t[0]||"",h2:t[1]||""},function(t){this.words=t.data,location.hash||(this.words=null),this.spread&&this.spreadChange()}.bind(this))},setCheckingword:function(t){this.setActioning(0),this.checkingword=t},setActioning:function(t){if(1===this.actioning){if(!confirm("确定取消添加当前词条吗？"))return}else if(2===this.actioning&&!confirm("确定取消编辑当前词条吗？"))return;1!==t&&null!==t||(this.checkingword=null),this.actioning=t},spreadChange:function(){this.spread=!this.spread}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[t.loading?i("loading"):t._e(),t._v(" "),i("home-header",{attrs:{objProps:t.to_HomeHeader,arrFileFolders:t.arrFileFolders,spread:t.spread},on:{loading:t.getLoading}}),t._v(" "),i("home-body",{attrs:{objProps:t.to_HomeBody,words:t.words,checkingword:this.checkingword},on:{loading:t.getLoading}}),t._v(" "),i("transition",{attrs:{name:"fade"}},[null!==t.actioning?i("show-words",{attrs:{objProps:t.to_ShowWords,checkingword:t.checkingword,h1:t.h1,h2:t.h2,actioning:this.actioning}}):t._e()],1)],1)},staticRenderFns:[]};var x=i("C7Lr")(k,F,!1,function(t){i("mJZO")},"data-v-5892806c",null).exports;n.a.use(r.a);var C=new r.a({mode:"history",routes:[{path:"/",name:"Home",components:{default:x}}]});n.a.directive("focus",{inserted:function(t){t.focus()}}),new n.a({el:"#app",router:C,components:{App:o},template:"<App/>"})},fG5F:function(t,e){},gHBT:function(t,e){},iwqW:function(t,e){},mJZO:function(t,e){},sstR:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.420dba88d435f0b260cc.js.map