webpackJsonp([47],{1001:function(n,e,i){var r=i(895);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);i(350)("eb5bae18",r,!0)},1164:function(n,e){n.exports={render:function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"system-body"},[i("div",{staticClass:"main-sidebar sidebar-collapse navbar-collapse collapse",class:n.hide,attrs:{id:"idfactory"}},[i("div",{staticClass:"sidebar"},[i("ul",{staticClass:"sidebar-menu"},[i("li",{staticClass:"header"},[!0===n.menuFlag?i("span",{staticClass:"profile-photo"},[null!==n.user.profile?i("span",{staticClass:"profile-image-holder"},[i("img",{attrs:{src:n.config.BACKEND_URL+n.user.profile.url}})]):i("i",{staticClass:"fa fa-user-circle-o profile-icon"}),n._v(" "),"VERIFIED"===n.user.status?i("i",{staticClass:"fas fa-check text-primary profile-status"}):n._e(),n._v("\n                Hi "+n._s(n.user.username)+"!\n              ")]):n._e(),n._v(" "),i("i",{class:n.toggleSidebar+" pull-right",attrs:{"aria-hidden":"true",id:"toggleIcon"},on:{click:function(e){return n.changeToggleSidebarIcon()}}})]),n._v(" "),n._l(n.menu,function(e,r){return(e.users!==n.user.type&&"ALL"!==e.users||"ADMIN"===n.user.type)&&"ADMIN"!==n.user.type||!0!==n.menuFlag?n._e():i("li",{staticClass:"menu-holder",class:{"active-menu":!0===e.flag},on:{click:function(e){return n.setActive(r)}}},[i("i",{staticClass:" visible",class:e.icon}),n._v(" "),i("label",[n._v(n._s(e.description))]),n._v(" "),null!==e.subMenu?i("ul",{staticClass:"sub-menu"},n._l(e.subMenu,function(e,t){return(e.users===n.user.type||"ALL"===e.users)&&"ADMIN"!==e.type||"ADMIN"===e.type?i("li",{class:{"active-menu":!0===e.flag},on:{click:function(e){return n.setActiveSubMenu(r,t)}}},[i("i",{staticClass:" visible",class:e.icon}),n._v(" "),i("label",[n._v(n._s(e.description))])]):n._e()}),0):n._e()])}),n._v(" "),n._l(n.menuOff,function(e,r){return(e.users!==n.user.type&&"ALL"!==e.users||"ADMIN"===n.user.type)&&"ADMIN"!==n.user.type||!1!==n.menuFlag?n._e():i("li",{staticClass:"menu-holder-hidden",class:{"active-menu":!0===e.flag},on:{click:function(e){return n.setActiveOff(r)}}},[i("i",{class:e.icon})])})],2)])]),n._v(" "),null!==n.confirmation.message?i("div",{staticClass:"modal",attrs:{id:"timerModal"}},[i("div",{staticClass:"modal-dialog"},[i("div",{staticClass:"modal-content"},[n._m(0),n._v(" "),i("div",{staticClass:"modal-body"},[n._v("\n            "+n._s(n.confirmation.message)+"\n          ")]),n._v(" "),n._m(1)])])]):n._e(),n._v(" "),i("div",{staticClass:"content-holder",class:n.hide},[i("transition",[i("router-view")],1)],1)])},staticRenderFns:[function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"modal-header"},[i("h4",{staticClass:"modal-title"},[i("i",{staticClass:"fa fa-warning text-danger"}),n._v(" Confirmation!")]),n._v(" "),i("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[n._v("×")])])},function(){var n=this,e=n.$createElement,i=n._self._c||e;return i("div",{staticClass:"modal-footer"},[i("button",{staticClass:"btn btn-primary",attrs:{type:"button","data-dismiss":"modal"}},[n._v("Ok")])])}]}},386:function(n,e,i){i(1001);var r=i(139)(i(845),i(1164),null,null);n.exports=r.exports},845:function(n,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=i(37),t=i(26),A=i(25);e.default={mounted:function(){},data:function(){return{user:r.a.user,config:t.default,menu:[{users:"ALL",description:"Templates",icon:"fas fa-file",path:"templates",flag:!0,subMenu:null},{users:"ALL",description:"Profiles",icon:"fas fa-users",path:"profiles",flag:!1,subMenu:null},{users:"ALL",description:"Images",icon:"fas fa-image",path:"images",flag:!1,subMenu:null},{users:"USER",description:"Find Printing",icon:"fas fa-print",path:"printings",flag:!1,subMenu:null},{users:"USER",description:"Marketplace",icon:"fas fa-store",path:"marketplace",flag:!1,subMenu:null},{users:"PARTNER",description:"My Store",icon:"fas fa-store",path:"marketplace",flag:!1,subMenu:[{users:"PARTNER",description:"Marketplace",icon:"fas fa-store",path:"marketplace",flag:!1},{users:"PARTNER",description:"Products",icon:"fa fa-shopping-cart",path:"products",flag:!1},{users:"PARTNER",description:"Orders",icon:"fa fa-file",path:"orders",flag:!1},{users:"PARTNER",description:"Coupons",icon:"fa fa-tags",path:"coupons",flag:!1}]}],menuOff:[{users:"ALL",description:"Templates",icon:"fas fa-file",path:"templates",flag:!1,subMenu:null},{users:"ALL",description:"Profiles",icon:"fas fa-users",path:"profiles",flag:!1,subMenu:null},{users:"ALL",description:"Images",icon:"fas fa-image",path:"images",flag:!1,subMenu:null},{users:"USER",description:"Find Printing",icon:"fas fa-print",path:"printings",flag:!1,subMenu:null},{users:"ALL",description:"Marketplace",icon:"fas fa-store",path:"marketplace",flag:!1,subMenu:null},{users:"PARTNER",description:"Products",icon:"fa fa-shopping-cart",path:"products",flag:!1,subMenu:null},{users:"PARTNER",description:"Orders",icon:"fa fa-file",path:"orders",flag:!1,subMenu:null},{users:"PARTNER",description:"Coupons",icon:"fa fa-tags",path:"coupons",flag:!1,subMenu:null}],toggleSidebar:"fa fa-toggle-on",hide:"",flag:!1,confirmation:{message:null,action:null},prevMenu:0,subPrevMenu:0,menuFlag:!0}},methods:{setActive:function(n){this.prevMenu!==n&&(this.menu[this.prevMenu].flag=!1,this.menu[n].flag=!0,null!==this.menu[this.prevMenu].subMenu&&(this.menu[this.prevMenu].subMenu[this.subPrevMenu].flag=!1),this.prevMenu=n),null===this.menu[n].subMenu&&(A.a.push("/"+this.menu[this.prevMenu].path),$(".navbar-collapse").collapse("hide"))},setActiveOff:function(n){this.prevMenu!==n&&(this.menuOff[this.prevMenu].flag=!1,this.menuOff[n].flag=!0,this.prevMenu=n),null===this.menuOff[n].subMenu&&(A.a.push("/"+this.menuOff[this.prevMenu].path),$(".navbar-collapse").collapse("hide"))},setActiveSubMenu:function(n,e){this.prevMenu!==n?(this.menu[this.prevMenu].flag=!1,this.menu[n].flag=!0,null!==this.menu[n].subMenu&&(this.menu[n].subMenu[e].flag=!0),null!==this.menu[this.prevMenu].subMenu&&(this.menu[this.prevMenu].subMenu[this.subPrevMenu].flag=!1),this.prevMenu=n,this.subPrevMenu=e):this.subPrevMenu!==e?(this.menu[this.prevMenu].subMenu[this.subPrevMenu].flag=!1,this.menu[n].subMenu[e].flag=!0,this.subPrevMenu=e):this.subPrevMenu=e,A.a.push("/"+this.menu[this.prevMenu].subMenu[this.subPrevMenu].path),$(".navbar-collapse").collapse("hide")},changeToggleSidebarIcon:function(){!1===this.menuFlag?(this.menuOff[this.prevMenu].flag=!1,this.prevMenu=0):(this.menu[this.prevMenu].flag=!1,null!==this.menu[this.prevMenu].subMenu&&(this.menu[this.prevMenu].subMenu[this.subPrevMenu].flag=!1),this.prevMenu=0,this.subPrevMenu=0),this.menuFlag=!this.menuFlag,this.toggleSidebar=!1===this.menuFlag?"fa fa-toggle-off":"fa fa-toggle-on",this.hide=!1===this.menuFlag?"hidden":""}}}},895:function(n,e,i){e=n.exports=i(349)(),e.push([n.i,".content-holder,.main-sidebar{min-height:200px;overflow:hidden;transition:all 1s ease 0s;z-index:1;margin-top:50px}.main-sidebar{overflow-y:hidden;z-index:10000}.sidebar-menu{list-style:none;padding:0;margin:0}.sidebar-menu .header{font-weight:700;padding:15px 2%;color:#000;text-align:center}.header .switch{float:left;width:20%}.header i{font-size:24px;color:#22b173}.header i:hover{cursor:pointer;color:#028170}.profile-photo{float:left;width:100%;height:100px;margin-top:20px}.profile-image-holder{width:100%;float:left;height:80px;text-align:center}.profile-image-holder img{width:80px;height:80px;border-radius:5px}.profile-photo .profile-icon{float:left;font-size:80px;width:100%;height:80px;margin-bottom:10px}.profile-photo .profile-status{font-size:12px!important;padding-left:0!important;padding-right:0!important}.menu-holder{width:100%;float:left;min-height:40px;line-height:40px;overflow:hidden}.menu-holder .visible{width:10%;float:left;text-align:right;line-height:40px}.menu-holder label{float:left;width:86%;margin-left:4%;line-height:40px}.menu-holder-hidden i:hover,.menu-holder:hover,.menu-holder i:hover,.menu-holder label:hover{cursor:pointer;color:#22b173}.sub-menu{list-style:none;padding:0;margin:0;z-index:1}.sub-menu li{width:95%;float:left;height:35px;line-height:35px;margin-left:5%;color:#212529}.active-menu{color:#22b173!important}.menu-holder-hidden{width:100%;float:left;min-height:50px;line-height:50px;overflow:hidden;text-align:right}.menu-holder-hidden i{font-size:20px;padding-right:5px}@media (min-width:1200px){.main-sidebar{width:18%;float:left}.sidebar-collapse,.sidebar-menu .header span{display:block}.content-holder{width:81%;margin:60px 0 0;float:left}.main-sidebar.hidden{width:5%}.content-holder.hidden{width:94%;margin:60px 0 0 1%;float:left}}@media screen (min-width:992px),screen and (max-width:1199px){.main-sidebar{width:23%;float:left}.content-holder{width:72%;margin:60px 0 0;float:left}.main-sidebar.active{padding-left:15%}.sidebar-collapse,.sidebar-menu .header span{display:block}.main-sidebar.hidden{width:5%}.content-holder.hidden{width:94%;margin:60px 0 0 1%;float:left}}@media (max-width:991px){.main-sidebar{width:100%;position:absolute;top:0;left:0;z-index:30;background-color:rgba(0,0,0,.5);margin-top:50px}.content-holder{min-height:10px;width:96%;overflow-y:hidden;margin:60px 2% 0;float:left}.main-sidebar ul{background:#fff;width:90%;min-height:400px}.sm-title{text-align:center}.sidebar-menu .header span{display:none}.header .input-group{width:90%;margin:0 5%}#toggleIcon,.force-collapse{display:none}.collapse{display:none!important}.collapse.show{display:block!important}}@media (max-width:239px){.collapse{display:none!important}.collapse.show{display:block!important}.main-sidebar{width:90%;position:absolute;top:0;left:0;z-index:10;background:#fff;margin-top:100px}.content-holder{width:96%;margin:60px 2% 0;float:left}.header,.sm-title{display:none}.sidebar-menu li>a{padding:15px 20px 15px 15px;display:block}.sidebar-menu ul li>a{padding:10px 15px 10px 25px;display:block}.sidebar-menu .header span{display:none}.header .input-group{width:90%;margin:0 5%}#toggleIcon,.force-collapse{display:none}}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/frame/Sidebar.vue"],names:[],mappings:"AACA,8BACE,iBAAkB,AAClB,gBAAiB,AACjB,0BAA2B,AAC3B,UAAW,AACX,eAAiB,CAClB,AACD,cACE,kBAAmB,AACnB,aAAe,CAChB,AACD,cACE,gBAAiB,AACjB,UAAa,AACb,QAAY,CACb,AACD,sBACE,gBAAiB,AACjB,gBAAyB,AACzB,WAAY,AACZ,iBAAmB,CACpB,AACD,gBACE,WAAY,AACZ,SAAW,CACZ,AACD,UACE,eAAgB,AAChB,aAAe,CAChB,AACD,gBACE,eAAgB,AAChB,aAAe,CAChB,AACD,eACE,WAAY,AACZ,WAAY,AACZ,aAAc,AACd,eAAiB,CAClB,AACD,sBACE,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,0BACE,WAAY,AACZ,YAAa,AACb,iBAAmB,CACpB,AACD,6BACE,WAAY,AACZ,eAAgB,AAChB,WAAY,AACZ,YAAa,AACb,kBAAoB,CACrB,AACD,+BACE,yBAA2B,AAC3B,yBAA6B,AAC7B,yBAA8B,CAC/B,AACD,aACE,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,iBAAkB,AAClB,eAAiB,CAClB,AACD,sBACE,UAAW,AACX,WAAY,AACZ,iBAAkB,AAClB,gBAAkB,CACnB,AACD,mBACE,WAAY,AACZ,UAAW,AACX,eAAgB,AAChB,gBAAkB,CACnB,AACD,6FACE,eAAgB,AAChB,aAAe,CAChB,AACD,UACE,gBAAiB,AACjB,UAAa,AACb,SAAY,AACZ,SAAW,CACZ,AACD,aACE,UAAW,AACX,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,eAAgB,AAChB,aAAe,CAChB,AACD,aACE,uBAA0B,CAC3B,AACD,oBACE,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,iBAAkB,AAClB,gBAAiB,AACjB,gBAAkB,CACnB,AACD,sBACE,eAAgB,AAChB,iBAAmB,CACpB,AAQD,0BACA,cACI,UAAU,AACV,UAAY,CACf,AAID,6CACI,aAAe,CAClB,AACD,gBACI,UAAW,AACX,gBAAyB,AACzB,UAAY,CACf,AAED,qBACI,QAAU,CACb,AACD,uBACI,UAAW,AACX,mBAAwB,AACxB,UAAY,CACf,CACA,AAGD,8DACA,cACI,UAAW,AACX,UAAY,CACf,AACD,gBACI,UAAW,AACX,gBAAyB,AACzB,UAAY,CACf,AACD,qBACI,gBAAiB,CACpB,AAID,6CACI,aAAe,CAClB,AAGD,qBACI,QAAU,CACb,AACD,uBACI,UAAW,AACX,mBAAwB,AACxB,UAAY,CACf,CACA,AAqCD,yBACA,cACI,WAAY,AACZ,kBAAmB,AACnB,MAAM,AACN,OAAQ,AACR,WAAY,AACZ,gCAAkC,AAClC,eAAiB,CACpB,AACD,gBACI,gBAAiB,AACjB,UAAW,AACX,kBAAmB,AACnB,iBAAqB,AACrB,UAAY,CACf,AACD,iBACI,gBAAiB,AACjB,UAAW,AACX,gBAAkB,CACrB,AACD,UACI,iBAAmB,CACtB,AACD,2BACI,YAAc,CACjB,AAGD,qBACI,UAAW,AACX,WAAkB,CACrB,AAID,4BACI,YAAc,CACjB,AACD,UACI,sBAAyB,CAC5B,AACD,eACI,uBAA0B,CAC7B,CACA,AACD,yBACA,UACI,sBAAyB,CAC5B,AACD,eACI,uBAA0B,CAC7B,AACD,cACI,UAAW,AACX,kBAAmB,AACnB,MAAM,AACN,OAAQ,AACR,WAAY,AACZ,gBAAiB,AACjB,gBAAkB,CACrB,AACD,gBACI,UAAW,AACX,iBAAqB,AACrB,UAAY,CACf,AACD,kBACI,YAAc,CACjB,AACD,mBACE,4BAA6B,AAC7B,aAAe,CAChB,AACD,sBACE,4BAA6B,AAC7B,aAAe,CAChB,AACD,2BACI,YAAc,CACjB,AAGD,qBACI,UAAW,AACX,WAAkB,CACrB,AAID,4BACI,YAAc,CACjB,CACA",file:"Sidebar.vue",sourcesContent:["\n.main-sidebar, .content-holder{  \r\n  min-height: 200px;\r\n  overflow: hidden;\r\n  transition: all 1s ease 0s;\r\n  z-index: 1;\r\n  margin-top: 50px;\n}\n.main-sidebar{\r\n  overflow-y: hidden;\r\n  z-index: 10000;\n}\n.sidebar-menu{\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin: 0px;\n}\n.sidebar-menu .header{\r\n  font-weight: 700; \r\n  padding: 15px 2% 15px 2%;\r\n  color: #000;\r\n  text-align: center;\n}\n.header .switch{\r\n  float: left;\r\n  width: 20%;\n}\n.header i{\r\n  font-size: 24px;\r\n  color: #22b173;\n}/*-- toggle-sidebar i --*/\n.header i:hover{\r\n  cursor: pointer;\r\n  color: #028170;\n}\n.profile-photo{\r\n  float: left;\r\n  width: 100%;\r\n  height: 100px;\r\n  margin-top: 20px;\n}\n.profile-image-holder{\r\n  width: 100%;\r\n  float: left;\r\n  height: 80px;\r\n  text-align: center;\n}\n.profile-image-holder img{\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 5px;\n}\n.profile-photo .profile-icon{\r\n  float: left;\r\n  font-size: 80px;\r\n  width: 100%;\r\n  height: 80px;\r\n  margin-bottom: 10px;\n}\n.profile-photo .profile-status{\r\n  font-size: 12px !important;\r\n  padding-left: 0px !important;\r\n  padding-right: 0px !important;\n}\n.menu-holder{\r\n  width: 100%;\r\n  float: left;\r\n  min-height: 40px;\r\n  line-height: 40px;\r\n  overflow: hidden;\n}\n.menu-holder .visible{\r\n  width: 10%;\r\n  float: left;\r\n  text-align: right;\r\n  line-height: 40px;\n}\n.menu-holder label{\r\n  float: left;\r\n  width: 86%;\r\n  margin-left: 4%;\r\n  line-height: 40px;\n}\n.menu-holder:hover, .menu-holder i:hover, .menu-holder label:hover, .menu-holder-hidden i:hover{\r\n  cursor: pointer;\r\n  color: #22b173;\n}\n.sub-menu{\r\n  list-style: none;\r\n  padding: 0px;\r\n  margin: 0px;\r\n  z-index: 1;\n}\n.sub-menu li{\r\n  width: 95%;\r\n  float: left;\r\n  height: 35px;\r\n  line-height: 35px;\r\n  margin-left: 5%;\r\n  color: #212529;\n}\n.active-menu{\r\n  color: #22b173 !important;\n}\n.menu-holder-hidden{\r\n  width: 100%;\r\n  float: left;\r\n  min-height: 50px;\r\n  line-height: 50px;\r\n  overflow: hidden;\r\n  text-align: right;\n}\n.menu-holder-hidden i{\r\n  font-size: 20px;\r\n  padding-right: 5px;\n}\r\n\r\n/*---------------------------------------------------------          \r\n\r\n                  RESPONSIVE HANDLER\r\n\r\n-----------------------------------------------------------*/\r\n/*-------------- Large Screens for Desktop --------------*/\n@media (min-width: 1200px){\n.main-sidebar{\r\n    width:18%;\r\n    float: left;\n}\n.sidebar-collapse{\r\n    display: block;\n}\n.sidebar-menu .header span{\r\n    display: block;\n}\n.content-holder{\r\n    width: 81%;\r\n    margin: 60px 0px 0px 0px;\r\n    float: left;\n}\r\n  /*  Change with Menu Toggled */\n.main-sidebar.hidden{\r\n    width: 5%;\n}\n.content-holder.hidden{\r\n    width: 94%;\r\n    margin: 60px 0px 0px 1%;\r\n    float: left;\n}\n}\r\n\r\n/*-------------- Medium Screen for Tablets  --------------*/\n@media screen (min-width: 992px), screen and (max-width: 1199px){\n.main-sidebar{\r\n    width: 23%;\r\n    float: left;\n}\n.content-holder{\r\n    width: 72%;\r\n    margin: 60px 0px 0px 0px;\r\n    float: left;\n}\n.main-sidebar.active{\r\n    padding-left:15%;\n}\n.sidebar-collapse{\r\n    display: block;\n}\n.sidebar-menu .header span{\r\n    display: block;\n}\r\n\r\n  /*  Change with Menu Toggled */\n.main-sidebar.hidden{\r\n    width: 5%;\n}\n.content-holder.hidden{\r\n    width: 94%;\r\n    margin: 60px 0px 0px 1%;\r\n    float: left;\n}\n}\r\n/*-------------- Small Screen for Mobile Phones  --------------*/\r\n/*@media screen (min-width: 768px), screen and (max-width: 991px){\r\n  .main-sidebar{\r\n    width: 90%;\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    z-index: 10;\r\n    background: #fff;\r\n  }\r\n  .content-holder{\r\n    width: 96%;\r\n    margin: 60px 2% 0 2%;\r\n  }\r\n  .sm-title{\r\n    text-align: center;\r\n  }\r\n   .sidebar-collapse{\r\n    display: none;\r\n  }\r\n  .sidebar-menu .header span{\r\n    display: none;\r\n  }\r\n  \r\n  .main-sidebar.hidden{\r\n     margin-left: 0;\r\n  }\r\n  #toggleIcon{\r\n    display: none;\r\n  }\r\n  .force-collapse{\r\n    display: none;\r\n  }\r\n}*/\r\n\r\n/*-------------- Extra Small Screen for Mobile Phones --------------*/\n@media (max-width: 991px){\n.main-sidebar{\r\n    width: 100%;\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    z-index: 30;\r\n    background-color: rgba(0,0,0,0.5);\r\n    margin-top: 50px;\n}\n.content-holder{\r\n    min-height: 10px;\r\n    width: 96%;\r\n    overflow-y: hidden;\r\n    margin: 60px 2% 0 2%;\r\n    float: left;\n}\n.main-sidebar ul{\r\n    background: #fff;\r\n    width: 90%;\r\n    min-height: 400px;\n}\n.sm-title{\r\n    text-align: center;\n}\n.sidebar-menu .header span{\r\n    display: none;\n}\n.main-sidebar.hidden{\n}\n.header .input-group{\r\n    width: 90%;\r\n    margin: 0 5% 0 5%;\n}\n#toggleIcon{\r\n    display: none;\n}\n.force-collapse{\r\n    display: none;\n}\n.collapse{\r\n    display: none !important;\n}\n.collapse.show{\r\n    display: block !important;\n}\n}\n@media (max-width: 239px){\n.collapse{\r\n    display: none !important;\n}\n.collapse.show{\r\n    display: block !important;\n}\n.main-sidebar{\r\n    width: 90%;\r\n    position: absolute;\r\n    top:0;\r\n    left: 0;\r\n    z-index: 10;\r\n    background: #fff;\r\n    margin-top: 100px;\n}\n.content-holder{\r\n    width: 96%;\r\n    margin: 60px 2% 0 2%;\r\n    float: left;\n}\n.sm-title,.header{\r\n    display: none;\n}\n.sidebar-menu  li > a{\r\n  padding: 15px 20px 15px 15px;\r\n  display: block;\n}\n.sidebar-menu  ul li > a{\r\n  padding: 10px 15px 10px 25px;\r\n  display: block;\n}\n.sidebar-menu .header span{\r\n    display: none;\n}\n.main-sidebar.hidden{\n}\n.header .input-group{\r\n    width: 90%;\r\n    margin: 0 5% 0 5%;\n}\n#toggleIcon{\r\n    display: none;\n}\n.force-collapse{\r\n    display: none;\n}\n}\r\n"],sourceRoot:""}])}});
//# sourceMappingURL=47.75968779604ac3082122.js.map