webpackJsonp([1],{"5uZr":function(t,e){},"8pJm":function(t,e){},CF2L:function(t,e){},CPTC:function(t,e){},HvsC:function(t,e){},KGsn:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("kV13"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var s=i("C7Lr")({name:"App"},a,!1,function(t){i("f367")},null,null).exports,o=i("4WWC"),r=i("MgeX"),c=i.n(r),l=i("HzJ8"),d=i.n(l),h=i("IHPB"),u=i.n(h),p=function(t,e,i,n){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"dragover-top",s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"dragover-bottom";document.querySelectorAll(e).forEach(function(e){e.arrDatas=t,e.disstr=i,e.callback=n,e.dragoverTopClass=a,e.dragoverBottomClass=s,e.addEventListener("dragstart",v),e.addEventListener("dragend",g),e.addEventListener("dragover",m,!0),e.addEventListener("dragleave",f,!0),e.addEventListener("drop",_)})};function v(t){(t=t||window.event).dataTransfer.setData("text/plain",t.currentTarget.id),t.dataTransfer.dropEffect="move"}function g(t){(t=t||window.event).dataTransfer.clearData("text/plain"),t.preventDefault()}function m(t){var e=(t=t||window.event).currentTarget;e.id.slice(0,e.id.lastIndexOf("-")+1)===this.disstr+"-"&&(t.offsetY<e.offsetHeight/2?(e.classList.contains(this.dragoverTopClass)||e.classList.add(this.dragoverTopClass),e.classList.contains(this.dragoverBottomClass)&&e.classList.remove(this.dragoverBottomClass)):(e.classList.contains(this.dragoverBottomClass)||e.classList.add(this.dragoverBottomClass),e.classList.contains(this.dragoverTopClass)&&e.classList.remove(this.dragoverTopClass))),t.stopPropagation(),t.preventDefault()}function f(t){var e=(t=t||window.event).currentTarget;e.id.slice(0,e.id.lastIndexOf("-")+1)===this.disstr+"-"&&(e.classList.remove(this.dragoverTopClass),e.classList.remove(this.dragoverBottomClass)),t.stopPropagation(),t.preventDefault()}function _(t){var e=(t=t||window.event).currentTarget;if(e.id.slice(0,e.id.lastIndexOf("-")+1)===this.disstr+"-"){var i=t.dataTransfer.getData("text/plain");if(document.getElementById(i)!==e){var n=null;if(e.classList.contains(this.dragoverTopClass)){for(var a in this.arrDatas)if(this.arrDatas[a].id===Number(e.id.slice(e.id.lastIndexOf("-")+1))){this.arrDatas[a-1]&&this.arrDatas[a-1].id&&(n=this.arrDatas[a-1].id);break}}else n=e.id.slice(e.id.lastIndexOf("-")+1);this.callback(i.slice(i.lastIndexOf("-")+1),n)}e.classList.remove(this.dragoverTopClass),e.classList.remove(this.dragoverBottomClass)}t.preventDefault()}var w={name:"HomeHeader",props:["arrFileFolders","spread"],data:function(){return{inserting:null,tbtext:null,confirming:!1}},mounted:function(){window.onresize=this.resizeLi},watch:{arrFileFolders:function(){this.resizeLi(),this.h2_addDropEvent()},spread:function(){this.resizeLi()},inserting:function(){this.resizeLi()}},methods:{emitData:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.$emit.apply(this,[t].concat(u()(i)))},h2_addDropEvent:function(){this.$nextTick(function(){var t=!0,e=!1,i=void 0;try{for(var n,a=d()(c()(this.arrFileFolders));!(t=(n=a.next()).done);t=!0){var s=n.value,o=s.childs;p.call(this,o,"[id^=h2-"+s.id+"-]","h2-"+s.id,function(t,e){this.emitData("axiosGetData","get","resort/h2",{dragger_id:t,dropper_id:e},function(t){t.data||alert("目录移动失败了,请联系后台人员修复bug"),this.emitData("getFileFolders")}.bind(this))}.bind(this))}}catch(t){e=!0,i=t}finally{try{!t&&a.return&&a.return()}finally{if(e)throw i}}})},resizeLi:function(){this.$nextTick(function(){for(var t=document.getElementsByClassName("h1_li"),e=!1,i=t[0].offsetTop,n=t.length-1;n>-1;n--)if(t[n].offsetTop>i)if(this.spread)if(t[n].offsetTop===i+14||t[n].offsetTop===i+15){if(t[n].classList.remove("spread-margin"),!1===e){var a=t[n].parentElement,s=document.getElementsByClassName("more")[0];s.style="",s.style.right=a.offsetLeft+a.clientWidth-(t[n].offsetLeft+t[n].clientWidth)-10+"px",s.style.top="",e=!0}}else t[n].classList.remove("hidden"),t[n].classList.add("spread-margin");else t[n].classList.add("hidden"),t[n].classList.remove("spread-margin");else if(t[n].classList.remove("spread-margin"),t[n].classList.remove("hidden"),!1===e){var o=t[n].parentElement,r=document.getElementsByClassName("more")[0];r.style="",r.style.right=o.offsetLeft+o.clientWidth-(t[n].offsetLeft+t[n].clientWidth)-10+"px",r.style.top="",e=!0}})},h1_inserting:function(){this.emitData("setActioning",null);var t=prompt("请输入要添加的一级目录");null!==t&&(""!==(t=t.trim())?t.length>20?alert("一级目录的名称长度不能超过20"):t.match(/\//g)?alert('目录名不能包含"/"符号'):this.emitData("axiosGetData","get","insert/h1",{name:t},function(t){t.data?(this.emitData("getFileFolders"),this.resizeLi()):alert("添加数据失败了,请检查当前一级目录是否已存在")}.bind(this)):alert("目录名不能为空"))},h1_delete:function(t){confirm("确定要删除目录【"+t+"】吗?(该操作无法撤回！)")&&this.emitData("axiosGetData","get","delete/h1",{name:t},function(t){t.data?(this.emitData("getFileFolders"),location.hash="",this.emitData("getFiles"),this.resizeLi()):alert("因未知的原因,删除目录失败了")}.bind(this))},h2_inserting:function(t){this.emitData("setActioning",null),this.inserting=t},h2_inserted:function(t,e){var i=this;if(!0!==this.confirming)if(this.confirming=!0,!0===confirm("是否确定添加目录?")){this.tbtext=this.tbtext&&this.tbtext.trim();var n=!1;if(null===this.tbtext||""===this.tbtext?(alert("目录名不能为空"),n=!0):this.tbtext.length>20?(alert("二级目录的名称长度不能超过20"),n=!0):this.tbtext.match(/\//g)&&(alert('目录名不能包含"/"符号'),n=!0),n)return setTimeout(function(){i.confirming=!1},0),void t.target.focus();this.emitData("axiosGetData","get","insert/h2",{name:this.tbtext,parents:e},function(t){var i=this;if(this.inserting=null,!t.data)return alert("添加数据失败了,请检查当前目录下是否有同名二级目录"),this.inserting=null,this.tbtext=null,void setTimeout(function(){i.confirming=!1},0);this.emitData("getFileFolders",function(){this.confirming=!1}.bind(this)),location.hash="#detail/"+e+"/"+this.tbtext,this.emitData("getFiles"),this.tbtext=null}.bind(this))}else this.inserting=null,this.tbtext=null,setTimeout(function(){i.confirming=!1},0)},h2_canselInsert:function(t){var e=this;!0!==this.confirming&&(this.confirming=!0,!0===confirm("确定放弃当前添加操作吗?")&&(this.inserting=null,this.tbtext=null),t.target.focus(),setTimeout(function(){e.confirming=!1},0))},h2_delete:function(t,e){confirm("确定要删除二级目录【"+e+"】吗")&&this.emitData("axiosGetData","get","delete/h2",{parents:t,name:e},function(t){t.data?(this.emitData("getFileFolders"),location.hash="",this.emitData("getFiles")):alert("删除数据失败了,请检查数据是否真实存在")}.bind(this))}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("header",[i("router-link",{attrs:{to:"",tag:"span"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[t._v("\n    Study-Helper\n  ")]),t._v(" "),i("ul",{},[t._l(t.arrFileFolders,function(e){return i("li",{key:"header-"+e.id,staticClass:"h1_li",class:{display_block:t.inserting===e.id}},[i("span",[t._v(t._s(e.name))]),t._v(" "),i("div",[i("ul",[t._l(e.childs,function(n){return i("li",{key:"header2-"+e.id+"-"+n.id,attrs:{id:"h2-"+e.id+"-"+n.id,draggable:"true"}},[i("router-link",{attrs:{to:"#detail/"+e.name+"/"+n.name,tag:"div"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[i("span",[t._v(t._s(n.name))]),t._v(" "),i("span",{staticClass:"h2_delete",on:{click:function(i){return i.stopPropagation(),t.h2_delete(e.name,n.name)}}},[t._v("×")])])],1)}),t._v(" "),i("li",{staticClass:"addnew"},[i("div",[t.inserting!==e.id?i("span",{on:{click:function(i){return t.h2_inserting(e.id)}}},[t._v("添加子目录")]):i("input",{directives:[{name:"model",rawName:"v-model",value:t.tbtext,expression:"tbtext"},{name:"focus",rawName:"v-focus"}],attrs:{type:"text"},domProps:{value:t.tbtext},on:{keyup:[function(i){return!i.type.indexOf("key")&&t._k(i.keyCode,"enter",13,i.key,"Enter")?null:t.h2_inserted(i,e.name)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.h2_canselInsert(e)}],blur:function(i){return t.h2_inserted(i,e.name)},input:function(e){e.target.composing||(t.tbtext=e.target.value)}}})])]),t._v(" "),i("li",{staticClass:"h1_delete"},[i("div",[i("span",{on:{click:function(i){return t.h1_delete(e.name)}}},[t._v("删除该目录")])])])],2)])])}),t._v(" "),i("li",{staticClass:"h1_li"},[i("span",{staticClass:"addnew",on:{click:t.h1_inserting}},[t._v("Add-NewFolder")])])],2),t._v(" "),i("div",{class:{more:!0,shouqi:t.spread},staticStyle:{display:"none"},on:{click:function(e){return t.emitData("spreadChange")}}},[t._v("\n    "+t._s(t.spread?"收起":"展开"))])],1)},staticRenderFns:[]};var b=i("C7Lr")(w,y,!1,function(t){i("xaxW")},"data-v-99a5d5ce",null).exports,k={name:"BodyHome",methods:{emitData:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.$emit.apply(this,[t].concat(u()(i)))}}},C={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("caption",[i("div",{staticClass:"bg"},[i("div",{staticClass:"tools"},[i("router-link",{attrs:{to:"#search",tag:"button"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[t._v("\n        搜索词条")]),t._v(" "),i("router-link",{attrs:{to:"#history/今天",tag:"button"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[t._v("\n        词条添加记录")]),t._v(" "),i("router-link",{attrs:{to:"#memoryTrain",tag:"button"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[t._v("\n        加深记忆")])],1)])])},staticRenderFns:[]};var x=i("C7Lr")(k,C,!1,function(t){i("8pJm")},"data-v-09537e3e",null).exports,D={name:"BodyDetail",props:["words","checkingword","h3_page","h1"],data:function(){return{canprev:!1,cannext:!1}},mounted:function(){this.pageChange()},watch:{words:function(){this.pageChange()},h3_page:function(){this.pageChange()}},methods:{emitData:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.$emit.apply(this,[t].concat(u()(i)))},getarr:function(t){var e=1;1===t&&(e=0);var i=119*this.h3_page;return this.words&&this.words.length>i+20*(t-1)-e?this.words.slice(i+20*(t-1)-e,i+20*t-1):null},h3_delete:function(t){confirm("确定要删除词条【"+t.name+"】吗")&&this.emitData("axiosGetData","get","delete/h3",{id:t.id},function(t){t.data||console.log("词条删除失败了"),this.emitData("getFiles",function(){this.h3_page>0&&this.words.length>119*this.h3_page&&this.$emit("update:h3_page",this.h3_page-1)}.bind(this))}.bind(this))},to_prevpage:function(){this.canprev&&this.$emit("update:h3_page",this.h3_page-1)},to_nextpage:function(){this.cannext&&this.$emit("update:h3_page",this.h3_page+1)},pageChange:function(){0!==this.h3_page?this.canprev=!0:this.canprev=!1,this.words&&this.words.length>119*(this.h3_page+1)?this.cannext=!0:this.cannext=!1,this.$nextTick(function(){p.call(this,this.words,"[id^=word-]","word",function(t,e){this.emitData("axiosGetData","get","resort/h3",{dragger_id:t,dropper_id:e},function(t){t.data||alert("词条移动失败了,请联系后台人员修复bug"),this.emitData("getFiles")}.bind(this))}.bind(this))})}}},F={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("caption",[i("div",{staticClass:"jiantou-div prevpage",class:{active:t.canprev},on:{click:t.to_prevpage}},[i("span",{staticClass:"iconfont iconjiantou"})]),t._v(" "),i("div",{staticClass:"container"},t._l(6,function(e){return i("div",{key:"home-container-"+e},[1===e&&t.words?i("div",[i("span",{on:{click:function(e){return t.emitData("setActioning",1)}}},[t._v("添加新词条")])]):t._e(),t._v(" "),t._l(t.getarr(e),function(e){return i("div",{key:"home-n-"+e.id,class:{checkingword:t.checkingword===e},attrs:{id:"word-"+e.id,draggable:"true"},on:{click:function(i){return t.emitData("setCheckingword",e)}}},[i("span",[t._v(t._s(e.name))]),t._v(" "),i("div",{staticClass:"delete",on:{click:function(i){return i.stopPropagation(),t.h3_delete(e)}}},[t._v("×")])])})],2)}),0),t._v(" "),i("div",{staticClass:"jiantou-div nextpage",class:{active:t.cannext},on:{click:t.to_nextpage}},[i("span",{staticClass:"iconfont iconjiantou"})])])},staticRenderFns:[]};var N=i("C7Lr")(D,F,!1,function(t){i("HvsC")},"data-v-3d4b694a",null).exports;var L=function(t,e){if(t.setSelectionRange)t.focus(),t.setSelectionRange(e,e);else if(t.createTextRange){var i=t.createTextRange();i.collapse(!0),i.moveEnd("character",e),i.moveStart("character",e),i.select()}},A=!1,T=!1;window.addEventListener("keyup",function(t){switch(t.keyCode){case 16:A=!1;break;case 17:T=!1}}),window.addEventListener("keydown",function(t){switch(t.keyCode){case 16:A=!0;break;case 17:T=!0}});var E=[["(",")"],["[","]"],["{","}"],['"','"'],["'","'"],["‘","’"],["“","”"],["【","】"]],$={environment:null,keydown:function(t,e){var i=this,n=(t=t||window.event).target,a=n.value,s=n.selectionStart,o=n.scrollHeight,r=function(r,c){t.preventDefault();var l=n.selectionEnd;n.value=a.slice(0,s)+a.slice(l),a=n.value,n.value=a.slice(0,s)+r+a.slice(s),i.environment[e]=n.value,L(n,s+c+r.length),o!==n.scrollHeight&&(n.scrollTop+=16)};switch(t.keyCode){case 8:var c=!0,l=!1,h=void 0;try{for(var u,p=d()(E.values());!(c=(u=p.next()).done);c=!0){var v=u.value;if(a[s-1]===v[0]&&a[s]===v[1]){n.value=a.slice(0,s)+a.slice(s+1),L(n,s);break}}}catch(t){l=!0,h=t}finally{try{!c&&p.return&&p.return()}finally{if(l)throw h}}break;case 13:var g=a.lastIndexOf("\n",s-1)+1;1===g&&(g=0);for(var m=0;" "===a[g];)m++,g++;for(var f="";m>0;)f+=" ",m--;r("\n"+f,0);break;case 57:A&&r("()",-1);break;case 48:A&&")"===a[s]&&a.lastIndexOf("(",s-1)>a.lastIndexOf(")",s-1)&&r("",1);break;case 83:T&&void 0!==this.environment.actioning&&(1===this.environment.actioning?this.environment.insert_h3():2===this.actioning&&this.environment.update_h3(),t.preventDefault());break;case 219:r(A?"{}":"[]",-1);break;case 221:A?"}"===a[s]&&a.lastIndexOf("{",s-1)>a.lastIndexOf("}",s-1)&&r("",1):"]"===a[s]&&a.lastIndexOf("[",s-1)>a.lastIndexOf("]",s-1)&&r("",1);break;case 222:r(A?'""':"''",-1)}}},W={name:"BodySearch",props:["words","checkingword"],data:function(){return{selContent:""}},mounted:function(){$.environment=this},methods:{emitData:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.$emit.apply(this,[t].concat(u()(i)))},textareaKeydown:function(t,e){$.keydown(t,e)},selectWords:function(){""!==this.selContent.trim()?-1===this.selContent.indexOf("_")?-1===this.selContent.indexOf("%")?-1===this.selContent.indexOf("/")?(location.hash="#search/"+this.selContent,this.emitData("getFiles")):alert('搜索内容中禁止使用"/"符号'):alert('搜索内容中禁止使用"%"符号'):alert('搜索内容中禁止使用"_"符号'):alert("文本框不能为空")}}},G={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("caption",[n("div",{staticClass:"bg"},[n("div",{staticClass:"select-container"},[n("img",{attrs:{src:i("lIGK")}}),t._v(" "),n("div",{staticClass:"input-bg"},[n("input",{directives:[{name:"focus",rawName:"v-focus"},{name:"model",rawName:"v-model",value:t.selContent,expression:"selContent"}],attrs:{type:"text",placeholder:"请输入想要搜索词条的名字或详细信息.."},domProps:{value:t.selContent},on:{keydown:function(e){return t.textareaKeydown(e,"selContent")},keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.selectWords()},input:function(e){e.target.composing||(t.selContent=e.target.value)}}}),t._v(" "),n("button",{on:{click:function(e){return t.selectWords()}}},[t._v("搜索词条")])])]),t._v(" "),t.words?n("div",{staticClass:"result-container"},[t._v("\n      共搜寻到"+t._s(t.words.length)+"条记录:\n      "),n("table",[t._m(0),t._v(" "),t._l(t.words,function(e){return n("tr",{key:e.id,class:{active:t.checkingword===e},on:{click:function(i){return t.emitData("setCheckingword",e)}}},[n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(""===e.introduce?"该词条没有详细介绍内容..":e.introduce))])])})],2)]):t._e()])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("词条名")]),this._v(" "),e("th",[this._v("词条解释")])])}]};var P=i("C7Lr")(W,G,!1,function(t){i("bhN+")},"data-v-fbbac4a4",null).exports,R={name:"BodyHistory",props:["words","checkingword","hashPara"],methods:{emitData:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.$emit.apply(this,[t].concat(u()(i)))}}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("caption",[i("div",{staticClass:"container"},[i("nav",[i("ul",[i("router-link",{class:{active:"今天"===t.hashPara},attrs:{to:"#history/今天",tag:"li"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[t._v("\n          今天\n        ")]),t._v(" "),i("router-link",{class:{active:"昨天"===t.hashPara},attrs:{to:"#history/昨天",tag:"li"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[t._v("\n          昨天\n        ")]),t._v(" "),i("router-link",{class:{active:"前天"===t.hashPara},attrs:{to:"#history/前天",tag:"li"},nativeOn:{click:function(e){return t.emitData("getFiles")}}},[t._v("\n          前天\n        ")])],1)]),t._v(" "),i("caption",[i("table",[t._m(0),t._v(" "),t._l(t.words,function(e){return i("tr",{key:e.id,class:{active:t.checkingword===e},on:{click:function(i){return t.emitData("setCheckingword",e)}}},[i("td",[t._v(t._s(e.name))]),t._v(" "),i("td",[t._v(t._s(""===e.introduce?"该词条没有详细介绍内容..":e.introduce))])])}),t._v(" "),0===t.words.length?i("tr",[i("td",{attrs:{colspan:"2"}},[t._v(t._s(t.hashPara)+"似乎没有添加或修改过词条")])]):t._e()],2)])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("th",[this._v("词条名")]),this._v(" "),e("th",[this._v("词条解释")])])}]};var B=i("C7Lr")(R,O,!1,function(t){i("CPTC")},"data-v-25115210",null).exports,M={name:"BodyMemoryTrain",props:["words"],data:function(){return{state:0,range:"$history(0)",way:"给词条名，答词条内容",count:100,topics:[],topicNo:0,tbAnswer:"",tbRightWrong:null}},mounted:function(){$.environment=this},watch:{state:function(t){0===t&&this.$emit("getFiles")}},methods:{removeNoAppear:function(t){confirm("确定要移除该过滤词条吗?该词条将有可能作为题目给出")&&this.$emit("axiosGetData","post","h3_changeAppear",{id:t,toval:0},function(t){t?this.$emit("getFiles"):alert("移除过滤词条失败,请检查网络连接")}.bind(this))},saveStates:function(t){2===this.state&&null===this.tbRightWrong&&t===this.topicNo+1||(this.topics[this.topicNo].answer=this.tbAnswer,this.topics[this.topicNo].rightwrong=this.tbRightWrong,this.topicNo=t,this.tbAnswer=this.topics[this.topicNo].answer||"","boolean"==typeof this.topics[this.topicNo].rightwrong?this.tbRightWrong=this.topics[this.topicNo].rightwrong:this.tbRightWrong=null)},prevTopic:function(){this.topicNo>0&&this.saveStates(this.topicNo-1)},nextTopic:function(){this.topicNo<this.topics.length-1&&this.saveStates(this.topicNo+1)},submit:function(){this.state=2,this.saveStates(0)},passWord:function(){confirm("你确定要过滤该词条吗?过滤的词条不会再出现在题目中")&&this.$emit("axiosGetData","post","h3_changeAppear",{id:this.topics[this.topicNo].id,toval:1},function(t){if(t)if(1===this.topics.length)this.tbRightWrong=null,this.tbAnswer="",this.state=0;else{var e=this.topicNo;this.topicNo===this.topics.length-1&&this.topicNo--,this.topics.splice(e,1),this.tbAnswer=this.topics[this.topicNo].answer,this.tbRightWrong=this.topics[this.topicNo].rightwrong}else alert("过滤词条失败了,请检查网络连接")}.bind(this))},checkover:function(){this.topics[this.topicNo].rightwrong=this.tbRightWrong;var t=0;for(var e in this.topics)!0===this.topics[e].rightwrong&&t++;alert("你答对了"+t+"/"+this.topics.length+"道题~"),this.tbRightWrong=null,this.tbAnswer="",this.state=0},startAnswer:function(){this.count?this.count<=0?alert("出题数量格式有误(不能<1)"):(this.count%1!=0&&alert("出题数量格式有误(应为整数)"),this.$emit("axiosGetData","post","selectWords",{content:this.range},function(t){var e=t.data;this.topics=[],this.topicNo=0;for(var i=0;i<e.length;i++)""!==e[i].introduce.trim()&&1!==e[i].noappear||(e[i]=e[e.length-1],e.length-=1,i--);if(e.length<1)alert("没有匹配到任何可用词条,请检查出题范围");else{for(var n=0,a=e.length;n<a&&n<this.count;n++){var s=Math.floor(Math.random()*e.length);if("综合"===this.way?e[s].way=Math.floor(2*Math.random()):"给词条内容，答词条名"===this.way?e[s].way=0:"给词条名，答词条内容"===this.way&&(e[s].way=1),0===e[s].way){var o=new RegExp(e[s].name,"g");e[s].introduce=e[s].introduce.replace(o,"■")}this.topics.push(e[s]),e[s]=e[e.length-1],e.length-=1}this.state=1}}.bind(this))):alert("出题数量格式有误(为0或未填写)")},textareaKeydown:function(t,e){$.keydown(t,e)}}},I={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("caption",[i("div",{staticClass:"container"},[i("div",{staticClass:"page-left"},[0===t.state?[i("p",[i("span",{staticClass:"title"},[t._v("出题范围:")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.range,expression:"range"}],staticClass:"topic-range",attrs:{type:"text",placeholder:"使用搜索规则进行查询"},domProps:{value:t.range},on:{keydown:function(e){return t.textareaKeydown(e,"range")},input:function(e){e.target.composing||(t.range=e.target.value)}}})]),t._v(" "),i("p",[i("span",{staticClass:"title"},[t._v("出题方式:")]),t._v(" "),i("select",{directives:[{name:"model",rawName:"v-model",value:t.way,expression:"way"}],staticClass:"topic-way",on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.way=e.target.multiple?i:i[0]}}},[i("option",[t._v("给词条名，答词条内容")]),t._v(" "),i("option",[t._v("给词条内容，答词条名")]),t._v(" "),i("option",[t._v("综合")])])]),t._v(" "),i("p",[i("span",{staticClass:"title"},[t._v("题目上限:")]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.count,expression:"count"}],staticClass:"topic-count",attrs:{type:"number",placeholder:"0",min:"1"},domProps:{value:t.count},on:{input:function(e){e.target.composing||(t.count=e.target.value)}}})]),t._v(" "),i("button",{staticClass:"topic-start",on:{click:t.startAnswer}},[t._v("开始回忆")]),t._v(" "),i("p",[i("span",{staticClass:"title"},[t._v("过滤词条:")]),i("br"),t._v(" "),i("ul",{staticClass:"topic-blacklist"},[t.words&&t.words.length?t._e():i("li",[t._v("无")]),t._v(" "),t._l(t.words,function(e){return i("li",{key:e.id},[t._v("\n              "+t._s(e.name)+"\n              "),i("span",{staticClass:"removeNoAppear",on:{click:function(i){return t.removeNoAppear(e.id)}}},[t._v("×")])])})],2)])]:t._e(),t._v(" "),1===t.state?[i("p",[i("span",{staticClass:"title"},[t._v("词条名:")]),t._v(" "),0===t.topics[t.topicNo].way?i("input",{directives:[{name:"model",rawName:"v-model",value:t.tbAnswer,expression:"tbAnswer"}],attrs:{type:"text",placeholder:"在此处写下答案"},domProps:{value:t.tbAnswer},on:{keydown:function(e){return t.textareaKeydown(e,"tbAnswer")},input:function(e){e.target.composing||(t.tbAnswer=e.target.value)}}}):i("span",{staticClass:"words-span"},[t._v(t._s(t.topics[t.topicNo].name))])]),t._v(" "),i("p",[i("span",{staticClass:"title"},[t._v("词条解释:")]),i("br"),t._v(" "),1===t.topics[t.topicNo].way?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tbAnswer,expression:"tbAnswer"}],attrs:{placeholder:"在此处写下答案"},domProps:{value:t.tbAnswer},on:{keydown:function(e){return t.textareaKeydown(e,"tbAnswer")},input:function(e){e.target.composing||(t.tbAnswer=e.target.value)}}}):i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.topics[t.topicNo].introduce,expression:"topics[topicNo].introduce"}],attrs:{readonly:""},domProps:{value:t.topics[t.topicNo].introduce},on:{input:function(e){e.target.composing||t.$set(t.topics[t.topicNo],"introduce",e.target.value)}}})]),t._v(" "),i("p",{staticClass:"footer"},[t.topics.length&&t.topicNo===t.topics.length-1?i("button",{on:{click:t.submit}},[t._v("提交,开始对照答案")]):i("span",[t._v("-"+t._s(t.topicNo+1)+"/"+t._s(t.topics.length)+"-")])])]:t._e(),t._v(" "),2===t.state?[i("p",[i("span",{staticClass:"title"},[t._v("词条名:")]),t._v(" "),i("span",{staticClass:"words-span"},[t._v(t._s(t.topics[t.topicNo].name))])]),t._v(" "),i("p",[i("span",{staticClass:"title"},[t._v("词条解释:")]),i("br"),t._v(" "),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.topics[t.topicNo].introduce,expression:"topics[topicNo].introduce"}],attrs:{readonly:""},domProps:{value:t.topics[t.topicNo].introduce},on:{input:function(e){e.target.composing||t.$set(t.topics[t.topicNo],"introduce",e.target.value)}}})]),t._v(" "),i("p",{staticClass:"footer"},[i("span",[t._v("-"+t._s(t.topicNo+1)+"/"+t._s(t.topics.length)+"-")])])]:t._e(),t._v(" "),0!==t.state?i("div",{staticClass:"jiantou-div prevpage",class:{active:t.topicNo>0},on:{click:t.prevTopic}},[i("span",{staticClass:"iconfont iconjiantou"})]):t._e(),t._v(" "),1===t.state?i("div",{staticClass:"jiantou-div nextpage",class:{active:t.topicNo<t.topics.length-1},on:{click:t.nextTopic}},[i("span",{staticClass:"iconfont iconjiantou"})]):t._e()],2),t._v(" "),2===t.state?i("div",{staticClass:"page-between"},[i("button",{staticClass:"iconfont icondagou",class:{active:!0===t.tbRightWrong},on:{click:function(e){t.tbRightWrong=!0}}}),t._v(" "),i("button",{staticClass:"iconwrong",class:{active:!1===t.tbRightWrong},on:{click:function(e){t.tbRightWrong=!1}}}),t._v(" "),i("button",{staticClass:"iconpass",on:{click:t.passWord}})]):t._e(),t._v(" "),2===t.state?i("div",{staticClass:"page-right"},[i("div",{staticClass:"jiantou-div nextpage",class:{active:t.topicNo<t.topics.length-1&&null!==t.tbRightWrong},on:{click:t.nextTopic}},[i("span",{staticClass:"iconfont iconjiantou"})]),t._v(" "),i("p",[i("span",{staticClass:"title"},[t._v("词条名:")]),t._v(" "),0===t.topics[t.topicNo].way?i("input",{directives:[{name:"model",rawName:"v-model",value:t.tbAnswer,expression:"tbAnswer"}],attrs:{type:"text",readonly:""},domProps:{value:t.tbAnswer},on:{input:function(e){e.target.composing||(t.tbAnswer=e.target.value)}}}):i("span",[t._v(t._s(t.topics[t.topicNo].name))])]),t._v(" "),i("p",[i("span",{staticClass:"title"},[t._v("词条解释:")]),i("br"),t._v(" "),1===t.topics[t.topicNo].way?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.topics[t.topicNo].answer,expression:"topics[topicNo].answer"}],attrs:{readonly:""},domProps:{value:t.topics[t.topicNo].answer},on:{input:function(e){e.target.composing||t.$set(t.topics[t.topicNo],"answer",e.target.value)}}}):i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.topics[t.topicNo].introduce,expression:"topics[topicNo].introduce"}],attrs:{readonly:""},domProps:{value:t.topics[t.topicNo].introduce},on:{input:function(e){e.target.composing||t.$set(t.topics[t.topicNo],"introduce",e.target.value)}}})]),t._v(" "),i("p",{staticClass:"footer"},[i("span",[t._v("-"+t._s(t.topicNo+1)+"/"+t._s(t.topics.length)+"-")])])]):t._e(),t._v(" "),t.topics.length&&t.topicNo===t.topics.length-1&&null!==t.tbRightWrong?i("button",{staticClass:"checkover",on:{click:t.checkover}},[t._v("检查完毕~")]):t._e()])])},staticRenderFns:[]};var H=i("C7Lr")(M,I,!1,function(t){i("tsVj")},"data-v-47c56b03",null).exports,S={props:["checkingword","h1","h2","actioning"],name:"ShowWords",data:function(){return{name:"",introduce:""}},mounted:function(){$.environment=this},watch:{actioning:function(t){if(2===t)return this.name=this.checkingword.name,void(this.introduce=this.checkingword.introduce);this.name="",this.introduce=""}},methods:{emitData:function(t){for(var e=arguments.length,i=Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];this.$emit.apply(this,[t].concat(u()(i)))},close:function(){this.emitData("setActioning",null)},textareaKeydown:function(t,e){$.keydown(t,e)},insert_h3:function(){0!==this.name.trim().length?this.name.length>80?alert("词条名不能超过80"):this.emitData("axiosGetData","post","insert/h3",{name:this.name,introduce:this.introduce,parents:this.h2,graparents:this.h1},function(t){t.data?this.emitData("getFiles"):alert("添加词条失败了,请检查是否已存在同名录下的同名词条")}.bind(this)):alert("词条名不能为空")},toUpdate:function(){this.emitData("setActioning",2)},update_h3:function(){0!==this.name.trim().length?this.name.length>80?alert("词条名不能超过80"):this.introduce!==this.checkingword.introduce||this.name!==this.checkingword.name?this.emitData("axiosGetData","post","update/h3",{id:this.checkingword.id,new_name:this.name,new_introduce:this.introduce},function(t){t.data?this.emitData("getFiles"):alert("编辑词条失败了,请检查是否已存在同名录下的同名词条")}.bind(this)):this.emitData("getFiles"):alert("词条名不能为空")}}},K={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("article",{staticClass:"showwords"},[i("button",{staticClass:"close-btn",on:{click:t.close}}),t._v(" "),i("div",{staticClass:"word-name"},[0===t.actioning?i("h2",{on:{dblclick:t.toUpdate}},[t._v(t._s(t.checkingword.name||"")+"\n    ")]):i("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"},{name:"focus",rawName:"v-focus"}],attrs:{placeholder:"词条名"},domProps:{value:t.name},on:{keydown:function(e){return t.textareaKeydown(e,"name")},input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),i("div",{staticClass:"word-introduce"},[0===t.actioning?i("textarea",{attrs:{readonly:"",placeholder:"该词条暂时还没有介绍哦~"},domProps:{value:t.checkingword.introduce||""},on:{dblclick:t.toUpdate}}):t._e(),t._v(" "),1===t.actioning?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.introduce,expression:"introduce"}],staticClass:"inserting",attrs:{placeholder:"具体描述.."},domProps:{value:t.introduce},on:{keydown:function(e){return t.textareaKeydown(e,"introduce")},input:function(e){e.target.composing||(t.introduce=e.target.value)}}}):2===t.actioning?i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.introduce,expression:"introduce"}],attrs:{placeholder:"该词条暂时还没有介绍哦~"},domProps:{value:t.introduce},on:{keydown:function(e){return t.textareaKeydown(e,"introduce")},input:function(e){e.target.composing||(t.introduce=e.target.value)}}}):t._e()]),t._v(" "),0===t.actioning?i("span",{staticStyle:{"font-size":"12px",display:"block","padding-top":"10px",color:"#404040"}},[t._v("*双击文本框以编辑*")]):1===t.actioning?i("button",{staticClass:"confirm",on:{click:t.insert_h3}},[i("span",[t._v("添加")])]):2===t.actioning?i("button",{staticClass:"confirm",on:{click:t.update_h3}},[i("span",[t._v("编辑")])]):t._e()])},staticRenderFns:[]};var j=i("C7Lr")(S,K,!1,function(t){i("KGsn")},"data-v-6ea102f6",null).exports,z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"loading"},[e("div",{staticClass:"container"},[e("div",{staticClass:"img"},this._l(12,function(t){return e("div",{key:"loading-"+t,style:{transform:"rotate("+30*t+"deg)"}},[e("div")])}),0),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"font"},[e("span",[this._v("L")]),e("span",[this._v("o")]),e("span",[this._v("a")]),e("span",[this._v("d")]),e("span",[this._v("i")]),e("span",[this._v("n")]),e("span",[this._v("g")])])}]};var q=i("C7Lr")({name:"Loading"},z,!1,function(t){i("5uZr")},"data-v-cc3c09fe",null).exports,J=i("a3Yh"),U=i.n(J),V=i("I29D"),Q=i.n(V);var Y=function(t){switch(console.log(t),t.request&&t.request.status){case 0:alert("请求超时了,请稍后重试");break;case 504:alert("后台服务器没有响应,请稍后重试");break;default:alert("发生了预料之外的错误,"+t),console.log(t)}};var Z={name:"Main",components:{MainHeader:b,BodyHome:x,BodyDetail:N,BodySearch:P,BodyHistory:B,BodyMemoryTrain:H,ShowWords:j,Loading:q},data:function(){return{loading:!1,words:null,checkingword:null,actioning:null,h1:null,h2:null,h3_page:0,arrFileFolders:null,spread:!1,bodyModule:null,hashPara:""}},mounted:function(){this.getFileFolders(),this.getFiles(),window.addEventListener("hashchange",function(){this.getFiles()}.bind(this),!1),window.test=this},watch:{h3_page:function(){this.setActioning(null)}},methods:{axiosGetData:function(t,e,i,n){var a;e="api/"+e,this.loading=!0;var s=null;switch(t){case"get":s="params";break;case"post":s="data"}Q()((a={method:t,url:e},U()(a,s,i),U()(a,"timeout",1e4),a)).then(function(t){n(t)}).catch(function(t){Y(t)}).finally(function(){this.loading=!1}.bind(this))},getLoading:function(t){this.loading=t},getFileFolders:function(t){t=t||function(){},this.axiosGetData("get","getFileFolders",{},function(e){this.arrFileFolders=e.data,t()}.bind(this))},getFiles:function(t){t=t||function(){},this.actioning=null,this.checkingword=null;var e=decodeURI(location.hash).split("/");switch(this.hashPara=e[1],e[0]){case"":this.words=null,this.bodyModule="home",this.h1=null,this.h2=null;break;case"#detail":this.h1===e[1]&&this.h2===e[2]||(this.h3_page=0),this.h1=e[1],this.h2=e[2],this.axiosGetData("get","getFiles",{h1:e[1]||"",h2:e[2]||""},function(e){this.words=e.data,this.bodyModule="detail",this.spread&&this.spreadChange(),t()}.bind(this));break;case"#search":this.bodyModule="search",2===e.length&&""!==e[1]&&this.axiosGetData("post","selectWords",{content:e[1]},function(t){this.words=t.data}.bind(this));break;case"#history":this.bodyModule="history",2===e.length&&""!==e[1]&&this.axiosGetData("post","getHistory",{date:e[1]},function(t){this.words=t.data}.bind(this));break;case"#memoryTrain":this.bodyModule="memory-train",this.axiosGetData("post","h3_getAppearWords",{},function(t){this.words=t.data}.bind(this))}},setCheckingword:function(t){this.setActioning(0)&&(this.checkingword=t)},setActioning:function(t){if(1===this.actioning){if(!confirm("确定取消添加当前词条吗？"))return!1}else if(2===this.actioning&&!confirm("确定取消编辑当前词条吗？"))return!1;return 1!==t&&null!==t||(this.checkingword=null),this.actioning=t,!0},spreadChange:function(){this.spread=!this.spread}}},X={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"main"},[t.loading?i("loading"):t._e(),t._v(" "),i("main-header",{staticClass:"main-header",attrs:{arrFileFolders:t.arrFileFolders,spread:t.spread},on:{loading:t.getLoading,getFiles:t.getFiles,setActioning:t.setActioning,axiosGetData:t.axiosGetData,getFileFolders:t.getFileFolders,spreadChange:t.spreadChange}}),t._v(" "),"detail"===t.bodyModule?i("body-detail",{staticClass:"main-body",attrs:{words:t.words,checkingword:t.checkingword,h3_page:t.h3_page,h1:t.h1},on:{loading:t.getLoading,getFiles:t.getFiles,setActioning:t.setActioning,axiosGetData:t.axiosGetData,setCheckingword:t.setCheckingword,"update:h3_page":function(e){t.h3_page=e}}}):"home"===t.bodyModule?i("body-home",{staticClass:"main-body",on:{getFiles:t.getFiles}}):"search"===t.bodyModule?i("body-search",{staticClass:"main-body",attrs:{words:t.words,checkingword:t.checkingword},on:{axiosGetData:t.axiosGetData,setCheckingword:t.setCheckingword}}):"history"===t.bodyModule?i("body-history",{staticClass:"main-body",attrs:{words:t.words,hashPara:t.hashPara,checkingword:t.checkingword},on:{getFiles:t.getFiles,setCheckingword:t.setCheckingword}}):"memory-train"===t.bodyModule?i("body-memory-train",{staticClass:"main-body",attrs:{words:t.words},on:{getFiles:t.getFiles,axiosGetData:t.axiosGetData}}):t._e(),t._v(" "),i("transition",{attrs:{name:"fade"}},[null!==t.actioning?i("show-words",{attrs:{checkingword:t.checkingword,h1:t.h1,h2:t.h2,actioning:t.actioning},on:{getFiles:t.getFiles,setActioning:t.setActioning,axiosGetData:t.axiosGetData,setCheckingword:t.setCheckingword}}):t._e()],1)],1)},staticRenderFns:[]};var tt=i("C7Lr")(Z,X,!1,function(t){i("CF2L")},"data-v-1843ab61",null).exports;n.a.use(o.a);var et=new o.a({mode:"history",routes:[{path:"/",name:"Main",components:{default:tt}}]});i("muQq");n.a.directive("focus",{inserted:function(t){t.focus()}}),new n.a({el:"#app",router:et,components:{App:s},template:"<App/>"})},"bhN+":function(t,e){},f367:function(t,e){},lIGK:function(t,e,i){t.exports=i.p+"static/img/表情包.654a7d5.png"},muQq:function(t,e){},tsVj:function(t,e){},xaxW:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.86770b910a2987d0ac8c.js.map