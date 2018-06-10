webpackJsonp([1],{"6PZ+":function(t,e){},"9IOV":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n=s("U0v6"),o=s.n(n),i=s("beyq"),d=s.n(i),l={name:"App",computed:{icon:function(){return d.a}},components:{FontAwesomeIcon:o.a}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},r=s("VU/8")(l,c,!1,null,null,null).exports,u=s("/ocq"),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v("Index")]),this._v(" "),e("router-link",{attrs:{to:"todolist"}},[this._v("week1 - todolist")])],1)},staticRenderFns:[]},f=s("VU/8")({name:"home"},m,!1,null,null,null).exports,j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"tabs__wrapper"},[s("ul",{staticClass:"tabs"},t._l(t.statusList,function(e,a){return s("li",{key:a,class:{active:a==t.active},on:{click:function(e){t.changeTab(a)}}},[t._v("\n            "+t._s(e)+"\n            "),s("span",{directives:[{name:"show",rawName:"v-show",value:a==t.active,expression:"index == active"}]})])}))])},staticRenderFns:[]};var v=s("VU/8")({name:"tab",data:function(){return{active:0,statusList:["My Tasks","In Progress","Completed"]}},methods:{changeTab:function(t){this.active=t}}},j,!1,function(t){s("9IOV")},"data-v-122b759e",null).exports,h=s("woOf"),p=s.n(h),_=s("NYxO");a.default.use(_.a);var b=new _.a.Store({state:{todos:[],editId:-1},getters:{todoTotal:function(t){return t.todos.length}},actions:{addTodo:function(t,e){var s=t.commit,a=t.getters;e.id=a.todoTotal+1,s("pushNewTodo",e)},editTodo:function(t,e){(0,t.commit)("changeEditId",e)},done:function(t){(0,t.commit)("changeEditId",-1)}},mutations:{pushNewTodo:function(t,e){t.todos.push(e)},changeEditId:function(t,e){t.editId=e}}}),g=s("zL8q"),k=s("PJh5");a.default.use(g.DatePicker),a.default.use(g.TimePicker);var y={components:{FontAwesomeIcon:o.a},props:{todo:{type:Object,default:null},edit:{type:Boolean,default:!1},mode:{type:String,default:null}},data:function(){return{todoData:{id:0,title:"",status:"",stared:!1,deadline:{date:null,time:null},files:[],comment:null}}},computed:{collapse:function(){return this.todoData.id===b.state.editId},deadlineFormat:function(){return k(k().format(this.todoData.deadline.time)).format("M/d")}},mounted:function(){"edit"===this.mode&&p()(this.todoData,this.todo)},methods:{handleFile:function(t){console.log(t),console.log(t.target.files[0]),this.todoData.files.push(t.target.files[0]),console.log(this.todoData)},handleFilesDate:function(t){return console.log(t),k(t).fromNow(),k(t).fromNow()},cancel:function(){b.dispatch("done")},editTodo:function(){b.dispatch("editTodo",this.todoData.id)},addTodo:function(){b.dispatch("addTodo",this.todoData),b.dispatch("done")},saveTodo:function(){}}},w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"item__wrapper"},[s("div",{staticClass:"item__header",class:{collapse:t.collapse}},[s("div",{staticClass:"header__main"},["edit"===t.mode?s("label",{staticClass:"checkbox__wrapper",attrs:{for:"checkbox"+t.todoData.id}},[s("input",{attrs:{type:"checkbox",id:"checkbox"+t.todoData.id}}),t._v(" "),s("div",{staticClass:"checkbox__indicator"})]):t._e(),t._v(" "),t.collapse?s("input",{directives:[{name:"model",rawName:"v-model",value:t.todoData.title,expression:"todoData.title"}],staticClass:"input",attrs:{type:"text",placeholder:"Type Something Here…"},domProps:{value:t.todoData.title},on:{input:function(e){e.target.composing||t.$set(t.todoData,"title",e.target.value)}}}):t._e(),t._v(" "),t.collapse?t._e():s("span",{staticClass:"input"},[t._v(" "+t._s(t.todoData.title))]),t._v(" "),"edit"===t.mode?s("a",{staticClass:"star",attrs:{href:""}},[s("font-awesome-icon",{attrs:{icon:["far","star"]}})],1):t._e(),t._v(" "),"edit"===t.mode?s("a",{staticClass:"edit",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.editTodo(e)}}},[s("font-awesome-icon",{attrs:{icon:"pencil-alt"}})],1):t._e()]),t._v(" "),t.collapse?t._e():s("div",{staticClass:"header__icon"},[s("font-awesome-icon",{attrs:{icon:["far","file"]}})],1)]),t._v(" "),t.collapse?s("div",[s("div",{staticClass:"item__body"},[s("ul",[s("li",{staticClass:"deadline"},[s("div",{staticClass:"body__title"},[s("font-awesome-icon",{attrs:{icon:["far","calendar-alt"]}}),t._v("\n                        Deadline\n                    ")],1),t._v(" "),s("div",{staticClass:"body__content deadline__date"},[s("el-date-picker",{attrs:{type:"date",placeholder:"yyyy/mm/dd"},model:{value:t.todoData.deadline.date,callback:function(e){t.$set(t.todoData.deadline,"date",e)},expression:"todoData.deadline.date"}}),t._v(" "),s("el-time-picker",{attrs:{"arrow-control":"","picker-options":{selectableRange:"18:30:00 - 20:30:00"},placeholder:"hh:mm"},model:{value:t.todoData.deadline.time,callback:function(e){t.$set(t.todoData.deadline,"time",e)},expression:"todoData.deadline.time"}})],1)]),t._v(" "),s("li",[s("div",{staticClass:"body__title"},[s("font-awesome-icon",{attrs:{icon:["far","file"]}}),t._v("\n                        File\n                    ")],1),t._v(" "),s("div",{staticClass:"body__content"},[s("div",{staticClass:"file-list"},[t._l(t.todoData.files,function(e,a){return s("div",{key:a,staticClass:"file-item"},[s("p",{staticClass:"file-item__name"},[t._v(t._s(e.name))]),t._v(" "),s("small",{staticClass:"file-item__date"},[t._v(t._s(t.handleFilesDate(e.lastModifiedDate)))])])}),t._v(" "),s("label",{staticClass:"btn-file file-btn",attrs:{for:"input_file"}},[t._v("\n                                ＋\n                                "),s("input",{attrs:{type:"file",name:"",id:"input_file"},on:{change:function(e){t.handleFile(e)}}})])],2)])]),t._v(" "),s("li",[s("div",{staticClass:"body__title"},[s("font-awesome-icon",{attrs:{icon:["far","comment-dots"]}}),t._v("\n                        Comment\n                    ")],1),t._v(" "),s("div",{staticClass:"body__content"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todoData.comment,expression:"todoData.comment"}],staticClass:"comment-text",attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"Type your memo here..."},domProps:{value:t.todoData.comment},on:{input:function(e){e.target.composing||t.$set(t.todoData,"comment",e.target.value)}}})])])])]),t._v(" "),s("div",{staticClass:"item__footer"},[s("button",{staticClass:"btn-cancel",on:{click:t.cancel}},[s("span",[t._v("＋")]),t._v("Cancel")]),t._v(" "),"add"===t.mode?s("button",{staticClass:"btn-add",on:{click:t.addTodo}},[t._v("＋ Add Task")]):t._e(),t._v(" "),"edit"===t.mode?s("button",{staticClass:"btn-add",on:{click:t.cancel}},[t._v("＋ Save")]):t._e()])]):t._e()])},staticRenderFns:[]};var C=s("VU/8")(y,w,!1,function(t){s("fgK/")},"data-v-22870d25",null).exports,x={id:2,title:"",status:"",stared:!1,deadline:null,file:null,comment:null},z={components:{item:C},data:function(){return{newTodo:x}},computed:{edit:function(){return 0===b.state.editId}},methods:{showItem:function(){b.dispatch("editTodo",0)}}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.edit?this._e():e("input",{attrs:{type:"text",placeholder:"＋ Add Task"},on:{focus:this.showItem}}),this._v(" "),this.edit?e("item",{attrs:{collapse:"",mode:"add"}}):this._e()],1)},staticRenderFns:[]};var F={name:"todolist",data:function(){return{}},components:{tab:v,add:s("VU/8")(z,D,!1,function(t){s("6PZ+")},"data-v-6db30fd6",null).exports,item:C},computed:{todos:function(){return b.state.todos},nowEdit:function(){return b.state.editId}},mounted:function(){}},T={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("tab"),this._v(" "),e("div",{staticClass:"content"},[e("add"),this._v(" "),this._l(this.todos,function(t,s){return e("item",{key:s,staticClass:"item",attrs:{todo:t,mode:"edit"}})})],2)],1)},staticRenderFns:[]};var E=s("VU/8")(F,T,!1,function(t){s("kz2c")},"data-v-49c37982",null).exports;a.default.use(u.a);var N=new u.a({mode:"history",routes:[{path:"/",name:"home",component:f},{path:"/todolist",name:"todolist",component:E}]}),P=(s("uMhA"),s("tvR6"),s("QxPg")),q=s("iNcX"),I=s.n(q),O=s("9xH5"),R=s.n(O),V=s("nCDS"),U=s.n(V),H=s("VMFT"),M=s.n(H),S=s("6Zog"),L=s.n(S),X=s("1qgh"),A=s.n(X);P.default.library.add(I.a,R.a,U.a,M.a,L.a,A.a),a.default.config.productionTip=!1,new a.default({el:"#app",router:N,components:{App:r},template:"<App/>"})},"fgK/":function(t,e){},kz2c:function(t,e){},tvR6:function(t,e){},uMhA:function(t,e){},uslO:function(t,e,s){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function n(t){return s(o(t))}function o(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="uslO"}},["NHnr"]);
//# sourceMappingURL=app.623d47cf665d0b551585.js.map