webpackJsonp([1],{"+eCr":function(t,e){},"6PZ+":function(t,e){},"6XdV":function(t,e){},"72a9":function(t,e){},"9DCg":function(t,e){},"9IOV":function(t,e){},BNtI:function(t,e){},Eq4R:function(t,e){},Ffu1:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i=a("U0v6"),n=a.n(i),o=a("beyq"),l=a.n(o),c={name:"App",computed:{icon:function(){return l.a}},components:{FontAwesomeIcon:n.a}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]},d=a("VU/8")(c,r,!1,null,null,null).exports,u=a("/ocq"),v={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Index")]),t._v(" "),a("router-link",{attrs:{to:"todolist"}},[t._v("week1 - todolist")]),t._v(" "),a("router-link",{attrs:{to:"filter"}},[t._v("week2 - filter")]),t._v(" "),a("router-link",{attrs:{to:"adminOrder"}},[t._v("week3 - Admin Order")]),t._v(" "),a("router-link",{attrs:{to:"productGallery"}},[t._v("week4 - Product Gallery")])],1)},staticRenderFns:[]},m=a("VU/8")({name:"home"},v,!1,null,null,null).exports,f={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tabs__wrapper"},[a("ul",{staticClass:"tabs"},t._l(t.statusList,function(e,s){return a("li",{key:s,class:{active:s==t.active},on:{click:function(e){t.changeTab(s)}}},[t._v("\n            "+t._s(e)+"\n            "),a("span",{directives:[{name:"show",rawName:"v-show",value:s==t.active,expression:"index == active"}]})])}))])},staticRenderFns:[]};var p=a("VU/8")({name:"tab",data:function(){return{active:0,statusList:["My Tasks","In Progress","Completed"]}},methods:{changeTab:function(t){this.active=t}}},f,!1,function(t){a("9IOV")},"data-v-122b759e",null).exports,h=a("woOf"),_=a.n(h),C=a("NYxO");s.default.use(C.a);var b={namespaced:!0,state:{todos:[],editId:-1},getters:{todoTotal:function(t){return t.todos.length}},actions:{addTodo:function(t,e){var a=t.commit,s=t.getters;e.id=s.todoTotal+1,a("pushNewTodo",e)},editTodo:function(t,e){(0,t.commit)("changeEditId",e)},done:function(t){(0,t.commit)("changeEditId",-1)}},mutations:{pushNewTodo:function(t,e){t.todos.push(e)},changeEditId:function(t,e){t.editId=e}}},g=a("zL8q"),k=a.n(g),w=a("PJh5");s.default.use(g.DatePicker),s.default.use(g.TimePicker);var j={components:{FontAwesomeIcon:n.a},props:{todo:{type:Object,default:null},edit:{type:Boolean,default:!1},mode:{type:String,default:null}},data:function(){return{todoData:{id:0,title:"",status:"",stared:!1,deadline:{date:null,time:null},files:[],comment:null}}},computed:{collapse:function(){return this.todoData.id===b.state.editId},deadlineFormat:function(){return w(w().format(this.todoData.deadline.time)).format("M/d")}},mounted:function(){"edit"===this.mode&&_()(this.todoData,this.todo)},methods:{handleFile:function(t){console.log(t),console.log(t.target.files[0]),this.todoData.files.push(t.target.files[0]),console.log(this.todoData)},handleFilesDate:function(t){return console.log(t),w(t).fromNow(),w(t).fromNow()},cancel:function(){b.dispatch("done")},editTodo:function(){b.dispatch("editTodo",this.todoData.id)},addTodo:function(){b.dispatch("addTodo",this.todoData),b.dispatch("done")},saveTodo:function(){}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"item__wrapper"},[a("div",{staticClass:"item__header",class:{collapse:t.collapse}},[a("div",{staticClass:"header__main"},["edit"===t.mode?a("label",{staticClass:"checkbox__wrapper",attrs:{for:"checkbox"+t.todoData.id}},[a("input",{attrs:{type:"checkbox",id:"checkbox"+t.todoData.id}}),t._v(" "),a("div",{staticClass:"checkbox__indicator"})]):t._e(),t._v(" "),t.collapse?a("input",{directives:[{name:"model",rawName:"v-model",value:t.todoData.title,expression:"todoData.title"}],staticClass:"input",attrs:{type:"text",placeholder:"Type Something Here…"},domProps:{value:t.todoData.title},on:{input:function(e){e.target.composing||t.$set(t.todoData,"title",e.target.value)}}}):t._e(),t._v(" "),t.collapse?t._e():a("span",{staticClass:"input"},[t._v(" "+t._s(t.todoData.title))]),t._v(" "),"edit"===t.mode?a("a",{staticClass:"star",attrs:{href:""}},[a("font-awesome-icon",{attrs:{icon:["far","star"]}})],1):t._e(),t._v(" "),"edit"===t.mode?a("a",{staticClass:"edit",attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.editTodo(e)}}},[a("font-awesome-icon",{attrs:{icon:"pencil-alt"}})],1):t._e()]),t._v(" "),t.collapse?t._e():a("div",{staticClass:"header__icon"},[a("font-awesome-icon",{attrs:{icon:["far","file"]}})],1)]),t._v(" "),t.collapse?a("div",[a("div",{staticClass:"item__body"},[a("ul",[a("li",{staticClass:"deadline"},[a("div",{staticClass:"body__title"},[a("font-awesome-icon",{attrs:{icon:["far","calendar-alt"]}}),t._v("\n                        Deadline\n                    ")],1),t._v(" "),a("div",{staticClass:"body__content deadline__date"},[a("el-date-picker",{attrs:{type:"date",placeholder:"yyyy/mm/dd"},model:{value:t.todoData.deadline.date,callback:function(e){t.$set(t.todoData.deadline,"date",e)},expression:"todoData.deadline.date"}}),t._v(" "),a("el-time-picker",{attrs:{"arrow-control":"","picker-options":{selectableRange:"18:30:00 - 20:30:00"},placeholder:"hh:mm"},model:{value:t.todoData.deadline.time,callback:function(e){t.$set(t.todoData.deadline,"time",e)},expression:"todoData.deadline.time"}})],1)]),t._v(" "),a("li",[a("div",{staticClass:"body__title"},[a("font-awesome-icon",{attrs:{icon:["far","file"]}}),t._v("\n                        File\n                    ")],1),t._v(" "),a("div",{staticClass:"body__content"},[a("div",{staticClass:"file-list"},[t._l(t.todoData.files,function(e,s){return a("div",{key:s,staticClass:"file-item"},[a("p",{staticClass:"file-item__name"},[t._v(t._s(e.name))]),t._v(" "),a("small",{staticClass:"file-item__date"},[t._v(t._s(t.handleFilesDate(e.lastModifiedDate)))])])}),t._v(" "),a("label",{staticClass:"btn-file file-btn",attrs:{for:"input_file"}},[t._v("\n                                ＋\n                                "),a("input",{attrs:{type:"file",name:"",id:"input_file"},on:{change:function(e){t.handleFile(e)}}})])],2)])]),t._v(" "),a("li",[a("div",{staticClass:"body__title"},[a("font-awesome-icon",{attrs:{icon:["far","comment-dots"]}}),t._v("\n                        Comment\n                    ")],1),t._v(" "),a("div",{staticClass:"body__content"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.todoData.comment,expression:"todoData.comment"}],staticClass:"comment-text",attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"Type your memo here..."},domProps:{value:t.todoData.comment},on:{input:function(e){e.target.composing||t.$set(t.todoData,"comment",e.target.value)}}})])])])]),t._v(" "),a("div",{staticClass:"item__footer"},[a("button",{staticClass:"btn-cancel",on:{click:t.cancel}},[a("span",[t._v("＋")]),t._v("Cancel")]),t._v(" "),"add"===t.mode?a("button",{staticClass:"btn-add",on:{click:t.addTodo}},[t._v("＋ Add Task")]):t._e(),t._v(" "),"edit"===t.mode?a("button",{staticClass:"btn-add",on:{click:t.cancel}},[t._v("＋ Save")]):t._e()])]):t._e()])},staticRenderFns:[]};var T=a("VU/8")(j,y,!1,function(t){a("fgK/")},"data-v-22870d25",null).exports,E={id:2,title:"",status:"",stared:!1,deadline:null,file:null,comment:null},x={components:{item:T},data:function(){return{newTodo:E}},computed:{edit:function(){return 0===b.state.editId}},methods:{showItem:function(){b.dispatch("editTodo",0)}}},F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.edit?this._e():e("input",{attrs:{type:"text",placeholder:"＋ Add Task"},on:{focus:this.showItem}}),this._v(" "),this.edit?e("item",{attrs:{collapse:"",mode:"add"}}):this._e()],1)},staticRenderFns:[]};var A={name:"todolist",data:function(){return{}},components:{tab:p,add:a("VU/8")(x,F,!1,function(t){a("6PZ+")},"data-v-6db30fd6",null).exports,item:T},computed:{todos:function(){return b.state.todos},nowEdit:function(){return b.state.editId}},mounted:function(){}},D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[e("tab"),this._v(" "),e("div",{staticClass:"content"},[e("add"),this._v(" "),this._l(this.todos,function(t,a){return e("item",{key:a,staticClass:"item",attrs:{todo:t,mode:"edit"}})})],2)],1)},staticRenderFns:[]};var S=a("VU/8")(A,D,!1,function(t){a("kz2c")},"data-v-49c37982",null).exports,N=a("mtWM"),R=a.n(N),I=a("M4fF"),O={state:{attractions:[],activeId:1,filters:{keyword:"",location:"",categories:[]},tags:[]},getters:{filterAttractions:function(t){if(t.attractions){var e=t.attractions;if(t.filters.location&&(e=e.filter(function(e){return e.Zone===t.filters.location})),t.filters.keyword){var a=["Name","Description"];e=e.filter(function(e){var s=!1;return a.forEach(function(a){-1!==e[a].indexOf(t.filters.keyword)&&(s=!0)}),s}).map(function(e){return e.Name=e.Name.replace(t.filters.keyword,"<span class=highlight>"+t.filters.keyword+"</span>"),e.Description=e.Description.replace(t.filters.keyword,"<span class=highlight>"+t.filters.keyword+"</span>"),e})}return t.filters.categories?(t.filters.categories.forEach(function(t){"免費參觀"===t&&(e=e.filter(function(t){return"免費參觀"===t.Ticketinfo})),"全天候開放"===t&&(e=e.filter(function(t){return"全天候開放"===t.Opentime}))}),e):e}},resultsTotal:function(t,e){if(t.attractions)return e.filterAttractions.length},readAttraction:function(t){if(t.attractions)return t.attractions.filter(function(e){return e._id===t.activeId})[0]},filterTags:function(t){var e=[];return I.forEach(t.filters,function(t,a){t&&"categories"!==a&&e.push({key:a,value:t})}),e},filterCategoriesTags:function(t){return t.filters.categories}},actions:{getAttractions:function(t){t.commit("GET_ATTRACTIONS");R.a.get("https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97").then(function(e){t.commit("GET_ATTRACTIONS",e.data.result.records)}).catch(function(t){console.log(t)})},setFilters:function(t,e){t.commit("SET_FILTERS",e)},setReadAttraction:function(t,e){t.commit("SET_READ_ATTRACTION",e)},removeFilter:function(t,e){t.commit("REMOVE_FILTER",e)}},mutations:{GET_ATTRACTIONS:function(t,e){t.attractions=e},SET_FILTERS:function(t,e){t.filters[e.name]=e.value},SET_READ_ATTRACTION:function(t,e){t.activeId=e},REMOVE_FILTER:function(t,e){if("categories"===e.key){var a=I.indexOf(t.filters.categories,e.value);t.filters.categories.splice(a,1)}else t.filters[e.key]=""}}};s.default.use(C.a);var V=new C.a.Store({modules:{todolist:b,filter:O}}),z={computed:{keyword:{get:function(){return V.state.filter.filters.keyword},set:function(t){V.dispatch("setFilters",{name:"keyword",value:t})}}},methods:{search:function(t){V.dispatch("setFilters",{name:"keyword",value:t})}}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",[t._m(0),a("div",{staticClass:"search-input"},[a("el-input",{attrs:{type:"text",placeholder:"Explore your own activities","prefix-icon":"el-icon-search"},on:{change:t.search},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"/#/filter"}},[e("img",{attrs:{src:"https://hexschool.github.io/THE_F2E_Design/week2-filter/assets/logo.svg",alt:""}})])])}]};var M=a("VU/8")(z,L,!1,function(t){a("tLr9"),a("zD35")},"data-v-2988b5b6",null).exports,U=a("Yd0b"),q=a.n(U),P={data:function(){return{activeTab:"",locations:"",categories:{checkedAll:!1,options:["全天候開放","免費參觀"],checkedValue:[]},options:q.a}},computed:{categoriesValue:{get:function(){return V.state.filter.filters.categories},set:function(t){V.dispatch("setFilters",{name:"categories",value:t})}},locationValue:{get:function(){return V.state.filter.filters.location},set:function(t){V.dispatch("setFilters",{name:"location",value:t})}}},methods:{showTab:function(t){return"lg"===this.$mq||"md"===this.$mq||this.activeTab===t},setLocationFilter:function(t){V.dispatch("setFilters",{name:"location",value:t})},categoriesCheckAll:function(t){this.categoriesValue=t?this.categories.options:[]},categoriesCheckOption:function(t){var e=t.length;this.categories.checkedAll=e===this.categories.options.length}}},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filters"},[a("div",{staticClass:"filters-item locations",class:{active:"locations"===t.activeTab},on:{click:function(e){t.activeTab="locations"}}},[t._m(0),a("transition",{attrs:{name:"slide-fade"}},[t.showTab("locations")?a("div",{staticClass:"bottom"},[a("el-select",{attrs:{filterable:"filterable",placeholder:"選擇區域"},on:{change:t.setLocationFilter},model:{value:t.locationValue,callback:function(e){t.locationValue=e},expression:"locationValue"}},t._l(t.options,function(t){return a("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1):t._e()])],1),a("div",{staticClass:"filters-item",class:{active:"categories"===t.activeTab},on:{click:function(e){t.activeTab="categories"}}},[t._m(1),a("transition",{attrs:{name:"slide-fade"}},[t.showTab("categories")?a("div",{staticClass:"bottom"},[a("el-checkbox",{on:{change:t.categoriesCheckAll},model:{value:t.categories.checkedAll,callback:function(e){t.$set(t.categories,"checkedAll",e)},expression:"categories.checkedAll"}},[t._v("All")]),a("el-checkbox-group",{attrs:{fill:"#9013FE"},model:{value:t.categoriesValue,callback:function(e){t.categoriesValue=e},expression:"categoriesValue"}},t._l(t.categories.options,function(e){return a("el-checkbox",{key:e,attrs:{label:e},on:{change:t.categoriesCheckOption}})}))],1):t._e()])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top"},[e("h3",[this._v("Locations")]),e("span",{staticClass:"toggle"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"top"},[e("h3",[this._v("Categories")]),e("span",{staticClass:"toggle"})])}]};var H=a("VU/8")(P,$,!1,function(t){a("+eCr"),a("ow5x")},"data-v-90793102",null).exports,B={components:{FontAwesomeIcon:n.a},created:function(){V.dispatch("getAttractions")},computed:{filterAttractions:function(){return V.getters.filterAttractions},resultsLength:function(){return V.getters.resultsTotal},filterTags:function(){return V.getters.filterTags},filterCategoriesTags:function(){return V.getters.filterCategoriesTags}},methods:{clickAttraction:function(t){V.dispatch("setReadAttraction",t),this.$router.push({path:"/filter/read/"+t})},removeFilter:function(t){V.dispatch("removeFilter",t)}}},W={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search"},[a("h2",{staticClass:"result-text"},[t._v("Showing "),a("strong",[t._v(t._s(t.resultsLength))]),t._v(" results by…")]),a("ul",{staticClass:"tags"},[t._l(t.filterTags,function(e){return a("li",[a("span",[t._v(t._s(e.value))]),a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","times-circle"]},on:{click:function(a){t.removeFilter(e)}}})],1)}),t._l(t.filterCategoriesTags,function(e){return a("li",[a("span",[t._v(t._s(e))]),a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","times-circle"]},on:{click:function(a){t.removeFilter({key:"categories",value:e})}}})],1)})],2),a("div",{staticClass:"results"},t._l(t.filterAttractions,function(e){return a("div",{staticClass:"results-item",on:{click:function(a){t.clickAttraction(e._id)}}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:e.Picture1,alt:"這是圖片"}})]),a("div",{staticClass:"results-content"},[a("h2",{domProps:{innerHTML:t._s(e.Name)}}),a("p",{domProps:{innerHTML:t._s(e.Description)}}),a("div",{staticClass:"other"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","map-marker-alt"]}}),a("span",[t._v(t._s(e.Zone))]),a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","calendar-alt"]}}),a("span",[t._v(t._s(e.Opentime))])],1)])])}))])},staticRenderFns:[]};var X=a("VU/8")(B,W,!1,function(t){a("Eq4R"),a("aHNu")},"data-v-85799730",null).exports,G={components:{FontAwesomeIcon:n.a},created:function(){},mounted:function(){V.dispatch("setReadAttraction",this.$route.params.id)},computed:{readAttraction:function(){return V.getters.readAttraction}}},K={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"read"},[a("el-breadcrumb",[a("el-breadcrumb-item",{staticClass:"back",attrs:{to:{path:"/filter"}}},[a("span",[t._v("Explore")])]),a("el-breadcrumb-item",{staticClass:"title"},[a("span",[t._v(t._s(t.readAttraction.Name||123))])])],1),a("div",{staticClass:"article"},[a("div",{staticClass:"img"},[a("img",{attrs:{src:t.readAttraction.Picture1,alt:"這是圖片"}})]),a("div",{staticClass:"article-content"},[a("h1",[t._v(t._s(t.readAttraction.Name||123))]),a("div",{staticClass:"other"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","map-marker-alt"]}}),a("span",[t._v(t._s(t.readAttraction.Zone))]),a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["far","calendar-alt"]}}),a("span",[t._v(t._s(t.readAttraction.Opentime))])],1),a("div",{staticClass:"content"},[t._v(t._s(t.readAttraction.Description))])])])],1)},staticRenderFns:[]};var Z=a("VU/8")(G,K,!1,function(t){a("gq68")},null,null).exports,Y={components:{topHeader:M,filters:H,results:X,read:Z},created:function(){V.dispatch("getAttractions")}},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"root"},[e("top-header"),e("div",{staticClass:"body"},[e("filters"),e("main",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var Q=a("VU/8")(Y,J,!1,function(t){a("qKFS")},"data-v-bbc37fb0",null).exports,tt={data:function(){return{results:[]}},created:function(){var t=this;R.a.get("https://www.thef2e.com/api/codeList").then(function(e){t.results=e.data})}},et={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"code-list"},[a("el-card",{staticClass:"box-card"},t._l(t.results,function(e){return a("div",{key:e},[a("a",{attrs:{src:e.url}},[t._v(t._s(e.url))]),a("p",[t._v(t._s(e.url))]),t._l(e.tag.split(","),function(e){return a("el-tag",{key:e},[t._v(t._s(e))])})],2)}))],1)},staticRenderFns:[]};var at=a("VU/8")(tt,et,!1,function(t){a("ifqo")},"data-v-fb6c93c0",null).exports,st={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topHeader"},[a("div",{staticClass:"container"},[a("h1",[t._v("Shoptime")]),a("el-tabs",{staticClass:"nav",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},t._l(t.tabs,function(t){return a("el-tab-pane",{key:t,attrs:{label:t,name:t}})})),a("h3",[t._v("ADMIN")])],1)])},staticRenderFns:[]};var it=a("VU/8")({data:function(){return{tabs:["home","orders","product"],activeName:"home"}},methods:{handleClick:function(t,e){this.$router.push({path:"/adminOrder/"+t.name})}}},st,!1,function(t){a("9DCg"),a("6XdV")},"data-v-428f36ef",null).exports,nt=[{name:"Daily",value:"daily"},{name:"Weekly",value:"weekly"},{name:"Monthly",value:"monthly"},{name:"Yearly",value:"yearly"},{name:"Custom",value:"custom"}],ot={components:{FontAwesomeIcon:n.a},data:function(){return{dateOptions:nt,activeDateSelect:"weekly"}}},lt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"title-bar"},[a("h1",[t._v("OVERVIEW")]),a("div",{staticClass:"right"},[a("span",{staticClass:"range"},[t._v("2018/6/6 - 2018/6/13")]),a("el-dropdown",{staticClass:"dropdown-date",on:{command:t.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[t._v("Weekly"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.dateOptions,function(e,s){return a("el-dropdown-item",{key:s,attrs:{command:e.value}},[t._v(t._s(e.name))])}))],1)],1)]),a("el-row",{staticClass:"total",attrs:{gutter:20}},[a("el-col",{staticClass:"item total-revenue",attrs:{span:8}},[a("div",{staticClass:"grid-content"},[a("div",{staticClass:"title"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","hand-holding-usd"]}}),a("span",[t._v("TOTAL REVENUE")])],1),a("div",{staticClass:"mount"},[t._v("54,540")])])]),a("el-col",{staticClass:"item total-cost",attrs:{span:8}},[a("div",{staticClass:"grid-content"},[a("div",{staticClass:"title"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","boxes"]}}),a("span",[t._v("TOTAL COST")])],1),a("div",{staticClass:"mount"},[t._v("54,540")])])]),a("el-col",{staticClass:"item net-income",attrs:{span:8}},[a("div",{staticClass:"grid-content"},[a("div",{staticClass:"title"},[a("font-awesome-icon",{staticClass:"icon",attrs:{icon:["fas","money-bill-alt"]}}),a("span",[t._v("NET INCOME")])],1),a("div",{staticClass:"mount"},[t._v("54,540")])])])],1),a("el-row",{staticClass:"activity",attrs:{gutter:20}},[a("el-col",[a("div",{staticClass:"grid-content"},[a("h1",[t._v("Activity")]),a("h1",[t._v("圖表")])])])],1),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content transaction"},[a("h1",[t._v("Transaction Website")]),t._l(4,function(e){return a("el-row",{key:e},[a("el-col",{staticClass:"icon",attrs:{span:4}},[t._v("icon")]),a("el-col",{staticClass:"sitename",attrs:{span:8}},[t._v("Facebook.com")]),a("el-col",{staticClass:"mount",attrs:{span:6}},[t._v("45,836")]),a("el-col",{staticClass:"rate",attrs:{span:6}},[t._v("箭頭 20%")])],1)})],2)]),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content latest"},[a("h1",[t._v("Latest Orders")]),t._l(4,function(e){return a("el-row",{key:e},[a("el-col",{staticClass:"left",attrs:{span:20}},[a("div",{staticClass:"img"},[a("img",{attrs:{src:"https://fakeimg.pl/100/"}})]),a("div",{staticClass:"content"},[a("h2",[t._v("Vintage T-shirt")]),a("div",[t._v("2018/6/13  13:42")]),a("div",[t._v("Belle Willis")])])]),a("el-col",{attrs:{span:4}},[t._v("Total"),a("h2",[t._v("3,200")])])],1)})],2)])],1)],1)},staticRenderFns:[]};var ct=a("VU/8")(ot,lt,!1,function(t){a("BNtI"),a("72a9")},"data-v-62c92e29",null).exports,rt={components:{tab:it,home:ct}},dt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("tab"),this._v(" "),e("div",{staticClass:"body"},[e("router-view")],1)],1)},staticRenderFns:[]};for(var ut=a("VU/8")(rt,dt,!1,function(t){a("hBxU")},"data-v-84f50812",null).exports,vt=a("M4fF"),mt=a.n(vt),ft={sections:[{key:"orderId",name:"Order Id"},{key:"customer",name:"Customer"},{key:"productList",name:"Product List"},{key:"total",name:"Total"}],status:["paid","unpaid","shipping","done"]},pt=a("FfS/"),ht=[],_t=0;_t<5;_t++)ht.push({id:Math.floor(100*Math.random()),customer:pt.fake("{{name.firstName}} {{name.lastName}}"),productList:[{name:pt.fake("{{commerce.productName}}"),price:pt.fake("{{commerce.price}}"),volumn:1},{name:pt.fake("{{commerce.productName}}"),price:pt.fake("{{commerce.price}}"),volumn:1}],total:"",addToCart:pt.fake("{{date.past}}"),checkout:pt.fake("{{date.past}}"),address:pt.fake("{{address.streetAddress}}"),status:"paid"});var Ct={data:function(){return{orderData:ht,orderConfig:ft,isChecked:!1,chosenData:[],chosenSections:["customer","status"],filter:""}},computed:{filteredData:function(){var t=this;return this.filter?this.orderData.filter(function(e){return t.filter&&e.status===t.filter}):this.orderData}},methods:{handleFilter:function(t){"selectAll"===t?this.selectAll():"unSelectAll"===t?this.unSelectAll():this.filter=t},handleColumn:function(){},selectAll:function(){this.chosenData=mt.a.map(ht,function(t){return t.id})},unSelectAll:function(){this.chosenData=[]},isSectionChosen:function(t){return this.chosenSections.includes(t)},rowClick:function(t){console.log(t)}}},bt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order-wrapper"},[a("div",{staticClass:"toolbar"},[a("div",{staticClass:"checkbox"},[a("el-dropdown",{on:{command:t.handleFilter}},[a("el-checkbox",{model:{value:t.isChecked,callback:function(e){t.isChecked=e},expression:"isChecked"}},[a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"selectAll"}},[t._v("SelectAll")]),a("el-dropdown-item",{attrs:{command:"unSelectAll"}},[t._v("UnselectAll")]),a("el-dropdown-item",{attrs:{command:"paid"}},[t._v("Paid")]),a("el-dropdown-item",{attrs:{command:"unpaid"}},[t._v("Unpaid")]),a("el-dropdown-item",{attrs:{command:"shipping"}},[t._v("Shipping")]),a("el-dropdown-item",{attrs:{command:"done"}},[t._v("Done")])],1)],1)],1),a("div",{staticClass:"editSection"},[a("el-dropdown",{attrs:{"hide-on-click":!1},on:{command:t.handleColumn}},[a("span",[t._v("EDIT SECTION")]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.orderConfig.sections,function(e,s){return a("el-dropdown-item",{key:s,attrs:{command:"section.key"}},[a("el-checkbox-group",{model:{value:t.chosenSections,callback:function(e){t.chosenSections=e},expression:"chosenSections"}},[a("el-checkbox",{attrs:{label:e.key}},[t._v(t._s(e.name))])],1)],1)}))],1)],1)]),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.filteredData,stripe:"stripe"},on:{"row-click":t.rowClick}},[t.isSectionChosen("customer")?a("el-table-column",{attrs:{prop:"customer",label:"Customer","min-width":"188"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-checkbox-group",{model:{value:t.chosenData,callback:function(e){t.chosenData=e},expression:"chosenData"}},[a("el-checkbox",{attrs:{label:e.row.id}},[t._v(t._s(e.row.customer))])],1)]}}])}):t._e(),t.isSectionChosen("productList")?a("el-table-column",{attrs:{prop:"productList",label:"ProductList","min-width":"195"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"product-item"},[a("div",{staticClass:"name"},[t._v("stibulum.")]),a("div",{staticClass:"detail"},[a("div",{staticClass:"price"},[t._v("$1,400")]),a("div",{staticClass:"volumn"},[t._v("1")])])]),a("div",{staticClass:"product-item"},[a("div",{staticClass:"name"},[t._v("stibulum.")]),a("div",{staticClass:"detail"},[a("div",{staticClass:"price"},[t._v("$1,400")]),a("div",{staticClass:"volumn"},[t._v("1")])])])]}}])}):t._e(),t.isSectionChosen("total")?a("el-table-column",{attrs:{prop:"total",label:"Total","min-width":"67"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v("$2,200")])]}}])}):t._e(),t.isSectionChosen("addToCart")?a("el-table-column",{attrs:{prop:"addToCart",label:"Add To Cart","min-width":"115"}}):t._e(),t.isSectionChosen("checkout")?a("el-table-column",{attrs:{prop:"checkout",label:"Checkout","min-width":"145"}}):t._e(),t.isSectionChosen("status")?a("el-table-column",{attrs:{prop:"status",label:"Status","min-width":"128"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("span",[t._v(t._s(e.row.status))])]}}])}):t._e()],1)],1)},staticRenderFns:[]};var gt=a("VU/8")(Ct,bt,!1,function(t){a("Nq62"),a("hFU7")},"data-v-18d1c8ad",null).exports,kt={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("product")])},staticRenderFns:[]},wt=a("VU/8")(null,kt,!1,null,null,null).exports,jt={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("header",[a("small",[t._v("CCCLOTHES")]),a("h1",[t._v("MEN’S TOPS")])]),a("div",{staticClass:"item item-1"},[a("h2",{staticClass:"title"},[t._v("LINEN BLAZER")]),a("div",{staticClass:"subtitle"},[a("p",[t._v("Men's outfit")])]),a("div",{staticClass:"border"}),a("div",{staticClass:"patten"},[a("div",{staticClass:"order"},[t._v("01")]),a("div",{staticClass:"patten-img"})]),a("div",{staticClass:"img"})]),a("div",{staticClass:"item item-2"},[a("div",{staticClass:"border"}),a("h2",{staticClass:"order"},[t._v("02")]),a("div",{staticClass:"block"}),a("div",{staticClass:"subtitle"},[a("p",[t._v("Men’s basics")])]),a("div",{staticClass:"img"}),a("h2",{staticClass:"title"},[t._v("FREELIFT")])]),a("div",{staticClass:"item item-3"},[a("div",{staticClass:"border"}),a("div",{staticClass:"block"}),a("div",{staticClass:"img"}),a("h2",{staticClass:"title"},[t._v("SUPER SKINNY")]),a("h2",{staticClass:"order"},[t._v("03")]),a("div",{staticClass:"subtitle"},[a("p",[t._v("Men’s pattern shirts")])])]),a("div",{staticClass:"item item-4"},[a("div",{staticClass:"border"}),a("div",{staticClass:"img"}),a("h2",{staticClass:"title"},[t._v("DENIM")]),a("h2",{staticClass:"order"},[t._v("04")]),a("div",{staticClass:"subtitle"},[a("p",[t._v("Men’s cadual")])])]),a("div",{staticClass:"item item-5"},[a("div",{staticClass:"border"}),a("div",{staticClass:"img"}),a("h2",{staticClass:"title"},[t._v("SWEATSHIRTS")]),a("h2",{staticClass:"order"},[t._v("05")]),a("div",{staticClass:"subtitle"},[a("p",[t._v("Men’s jacket")])])]),a("div",{staticClass:"item item-6"},[a("div",{staticClass:"border"}),a("div",{staticClass:"img"}),a("h2",{staticClass:"title"},[t._v("VINTAGE DENIM")]),a("h2",{staticClass:"order"},[t._v("06")]),a("div",{staticClass:"subtitle"},[a("p",[t._v("Men’s classic")])])]),a("div",{staticClass:"item item-7"},[a("div",{staticClass:"border"}),a("div",{staticClass:"img"}),a("h2",{staticClass:"title"},[t._v("EDITION")]),a("h2",{staticClass:"order"},[t._v("07")]),a("div",{staticClass:"subtitle"},[a("p",[t._v("Men’s shirts")])])])])}]};var yt=a("VU/8")(null,jt,!1,function(t){a("Ffu1")},null,null).exports;s.default.use(u.a);var Tt=new u.a({routes:[{path:"/",name:"home",component:m},{path:"/todolist",name:"todolist",component:S},{path:"/filter",name:"filter",component:Q,children:[{path:"/",component:X},{path:"read/:id",component:Z}]},{path:"/adminOrder",name:"adminOrder",component:ut,children:[{path:"/",name:"adminOrderHome",component:ct},{path:"home",component:ct},{path:"orders",component:gt},{path:"product",component:wt}]},{path:"/productGallery",component:yt},{path:"/codeList",name:"codeList",component:at}]}),Et=(a("uMhA"),a("tvR6"),a("QxPg")),xt=a("iNcX"),Ft=a.n(xt),At=a("9xH5"),Dt=a.n(At),St=a("nCDS"),Nt=a.n(St),Rt=a("VMFT"),It=a.n(Rt),Ot=a("6Zog"),Vt=a.n(Ot),zt=a("1qgh"),Lt=a.n(zt),Mt=a("XFHq"),Ut=a.n(Mt),qt=a("g7Da"),Pt=a.n(qt),$t=a("AIaK"),Ht=a.n($t),Bt=a("P+9g"),Wt=a.n(Bt),Xt=a("CYEC"),Gt=a.n(Xt),Kt=a("iKms");Et.default.library.add(Ft.a,Dt.a,Nt.a,It.a,Vt.a,Lt.a,Ut.a,Pt.a,Ht.a,Wt.a,Gt.a),s.default.config.productionTip=!1,s.default.use(k.a),s.default.use(Kt.a,{breakpoints:{sm:767,md:991,lg:1/0}}),new s.default({el:"#app",router:Tt,components:{App:d},template:"<App/>"})},Nq62:function(t,e){},Yd0b:function(t,e){t.exports=[{label:"新興區",value:"新興區"},{label:"前金區",value:"前金區"},{label:"苓雅區",value:"苓雅區"},{label:"前鎮區",value:"前鎮區"},{label:"楠梓區",value:"楠梓區"},{label:"鳥松區",value:"鳥松區"},{label:"鹽埕區",value:"鹽埕區"},{label:"鼓山區",value:"鼓山區"},{label:"橋頭區",value:"橋頭區"},{label:"三民區",value:"三民區"},{label:"鳳山區",value:"鳳山區"},{label:"旗津區",value:"旗津區"},{label:"小港區",value:"小港區"},{label:"林園區",value:"林園區"},{label:"美濃區",value:"美濃區"},{label:"旗山區",value:"旗山區"},{label:"左營區",value:"左營區"},{label:"大樹區",value:"大樹區"},{label:"仁武區",value:"仁武區"},{label:"大寮區",value:"大寮區"},{label:"茂林區",value:"茂林區"},{label:"六龜區",value:"六龜區"},{label:"桃源區",value:"桃源區"},{label:"阿蓮區",value:"阿蓮區"},{label:"燕巢區",value:"燕巢區"},{label:"田寮區",value:"田寮區"},{label:"大社區",value:"大社區"},{label:"岡山區",value:"岡山區"},{label:"湖內區",value:"湖內區"},{label:"路竹區",value:"路竹區"},{label:"茄萣區",value:"茄萣區"},{label:"永安區",value:"永安區"},{label:"彌陀區",value:"彌陀區"},{label:"梓官區",value:"梓官區"},{label:"那瑪夏區",value:"那瑪夏區"},{label:"甲仙區",value:"甲仙區"},{label:"杉林區",value:"杉林區"},{label:"內門區",value:"內門區"}]},aHNu:function(t,e){},"fgK/":function(t,e){},gq68:function(t,e){},hBxU:function(t,e){},hFU7:function(t,e){},ifqo:function(t,e){},kz2c:function(t,e){},ow5x:function(t,e){},qKFS:function(t,e){},tLr9:function(t,e){},tvR6:function(t,e){},uMhA:function(t,e){},uslO:function(t,e,a){var s={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function i(t){return a(n(t))}function n(t){var e=s[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(s)},i.resolve=n,t.exports=i,i.id="uslO"},zD35:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f50c823fca6ab1bf2b8f.js.map