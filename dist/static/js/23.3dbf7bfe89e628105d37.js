webpackJsonp([23],{1e3:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"result-holder"},[e("div",{staticClass:"container-fluid"},[e("h6",[t._v("API: Test Results")]),t._v(" "),e("div",{staticClass:"container-fluid row"},[e("div",{staticClass:"col-4"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.filter,expression:"filter"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Module"},domProps:{value:t.filter},on:{input:function(a){a.target.composing||(t.filter=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-4"},[e("button",{staticClass:"btn btn-primary",on:{click:function(a){t.getTestResults()}}},[e("i",{staticClass:"fa fa-search"})])]),t._v(" "),t._m(0)])]),t._v(" "),e("div",{staticClass:"container-fluid",staticStyle:{"margin-top":"50px"}},[e("table",{staticClass:"table table-stripe container-fluid"},[t._m(1),t._v(" "),e("tbody",[t._l(t.currentResult,function(a){return 0!==t.currentResult.length?e("tr",[e("td",[t._v(t._s(a.path))]),t._v(" "),e("td",[t._v(t._s(a.test_data))]),t._v(" "),e("td",[t._v(t._s(a.result))]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.saveTest()}}},[e("i",{staticClass:"fa fa-save"}),t._v(" Save")])])]):t._e()}),t._v(" "),t._l(t.testsResult,function(a){return e("tr",[e("td",{staticClass:"col-xs-2"},[t._v(t._s(a.path))]),t._v(" "),e("td",{staticClass:"col-xs-6"},[t._v(t._s(a.parameter))]),t._v(" "),e("td",{staticClass:"col-xs-2"},[t._v(t._s(a.result))]),t._v(" "),e("td",{staticClass:"col-xs-2"},[e("button",{staticClass:"btn btn-danger-hallow",attrs:{type:"button"},on:{click:function(e){t.deleteTest(a.id)}}},[e("i",{staticClass:"fa fa-ban"}),t._v(" Delete")])])])})],2)])]),t._v(" "),e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"modal fade",attrs:{id:"addTestModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),t._v(" "),e("div",{staticClass:"modal-body"},[e("label",{class:t.textColor},[t._v(t._s(t.message))]),t._v(" "),e("form",[e("div",{staticClass:"form-group row"},[e("label",{staticClass:"col-2 col-form-label",attrs:{for:"path"}},[t._v("Path:")]),t._v(" "),e("div",{staticClass:"col-8"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.path,expression:"path"}],staticClass:"form-control",attrs:{type:"text",id:"path",placeholder:"Path"},domProps:{value:t.path},on:{input:function(a){a.target.composing||(t.path=a.target.value)}}})]),t._v(" "),e("div",{staticClass:"col-2 pull-right"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.addRow()}}},[e("i",{staticClass:"fa fa-plus"})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.addFile()}}},[e("i",{staticClass:"fa fa-file"})])])]),t._v(" "),0!==t.tempPostData.length?e("table",{staticClass:"table"},[t._m(3),t._v(" "),e("tbody",t._l(t.tempPostData,function(a,s){return e("tr",[e("td",[e("select",{directives:[{name:"model",rawName:"v-model",value:a.dataType,expression:"j.dataType"}],staticClass:"form-control",on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.$set(a,"dataType",e.target.multiple?s:s[0])}}},[e("option",[t._v("Array")]),t._v(" "),e("option",[t._v("Single")])])]),t._v(" "),e("td",["Array"===a.dataType?e("input",{directives:[{name:"model",rawName:"v-model",value:a.arrayName,expression:"j.arrayName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Array Name"},domProps:{value:a.arrayName},on:{input:function(e){e.target.composing||t.$set(a,"arrayName",e.target.value)}}}):t._e()]),t._v(" "),e("td",["Array"===a.dataType||"Single"===a.dataType?e("input",{directives:[{name:"model",rawName:"v-model",value:a.columnName,expression:"j.columnName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Column Name"},domProps:{value:a.columnName},on:{input:function(e){e.target.composing||t.$set(a,"columnName",e.target.value)}}}):t._e()]),t._v(" "),e("td",["Array"===a.dataType||"Single"===a.dataType?e("input",{directives:[{name:"model",rawName:"v-model",value:a.value,expression:"j.value"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Value"},domProps:{value:a.value},on:{input:function(e){e.target.composing||t.$set(a,"value",e.target.value)}}}):t._e()]),t._v(" "),e("td",[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(a){t.remove(s)}}},[e("i",{staticClass:"fa fa-times"})])])])}))]):t._e(),t._v(" "),!0===t.fileFlag?e("div",{staticClass:"row container-fluid form-group"},[e("input",{staticClass:"form-control-file col-xs-11",attrs:{type:"file"},on:{change:t.file}}),t._v(" "),e("button",{staticClass:"btn btn-default col-xs-1",attrs:{type:"button"},on:{click:function(a){t.removeFile(t.index)}}},[e("i",{staticClass:"fa fa-times"})])]):t._e()])]),t._v(" "),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.validate()}}},[e("i",{staticClass:"fa fa-cog"}),t._v(" Validate")]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){t.send()}}},[e("i",{staticClass:"fa fa-sign-in"}),t._v(" Send")])])])])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-4"},[e("button",{staticClass:"btn btn-primary pull-right",attrs:{id:"submit","data-toggle":"modal","data-target":"#addTestModal"}},[e("i",{staticClass:"fa fa-plus"}),t._v(" Add")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"table-default"},[e("tr",[e("th",{staticClass:"col-xs-2"},[t._v("API Path")]),t._v(" "),e("th",{staticClass:"col-xs-6"},[t._v("Test Data")]),t._v(" "),e("th",{staticClass:"col-xs-2"},[t._v("Results")]),t._v(" "),e("th",{staticClass:"col-xs-2"},[t._v("Actions")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("Test API")]),t._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",{staticClass:"table-default"},[e("td",{staticClass:"col-xs-2"},[t._v("Type")]),t._v(" "),e("td",{staticClass:"col-xs-3"},[t._v("Array Name")]),t._v(" "),e("td",{staticClass:"col-xs-3"},[t._v("Column Name")]),t._v(" "),e("td",{staticClass:"col-xs-3"},[t._v("Value")]),t._v(" "),e("td",{staticClass:"col-xs-1"},[t._v("Action")])])}]}},337:function(t,a,e){e(896);var s=e(113)(e(774),e(1e3),null,null);t.exports=s.exports},579:function(t,a,e){t.exports={default:e(580),__esModule:!0}},580:function(t,a,e){var s=e(7),l=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return l.stringify.apply(l,arguments)}},774:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=e(579),l=e.n(s);a.default={mounted:function(){this.getTestResults()},data:function(){return{testsResult:[],currentResult:[],path:"",result:"",message:"",flag:!1,textColor:"text-danger",tempPostData:[],postData:{},dataType:"",arrayName:"",columnName:"",value:"",file:[],fileFlag:!1,filter:"company"}},methods:{getTestResults:function(){var t=this,a=[{condition:{column:"path",clause:"like",value:this.filter+"%"}}];this.APIRequest("api_test_results/retrieve",a).then(function(a){t.testsResult=a.data})},requestHandler:function(t,a){var e=this;this.APIRequest(t,a).then(function(t){e.getTestResults()})},validate:function(){var t={},a=void 0;for(a=0;a<this.tempPostData.length;a++)"Single"===this.tempPostData[a].dataType?("{}"!==l()(t)&&(this.postData[this.tempPostData[a-1].arrayName]=t,t={}),this.postData[this.tempPostData[a].columnName]=this.tempPostData[a].value):(a>0&&this.tempPostData[a-1].arrayName!==this.tempPostData[a].arrayName&&"{}"!==l()(t)&&(this.postData[this.tempPostData[a-1].arrayName]=t,t={}),t[this.tempPostData[a].columnName]=this.tempPostData[a].value);a===this.tempPostData.length&&"{}"!==l()(t)&&(this.postData[this.tempPostData[a-1].arrayName]=t),console.log(l()(this.postData))},send:function(){var t=this;this.validate(),this.APIRequest(this.path,this.postData).then(function(a){t.result="[]"!==a.data?"Success":"Failed";var e={path:t.path,test_data:t.postData,result:t.result};t.currentResult.push(e)})},saveTest:function(){var t={path:this.path,parameter:l()(this.postData),result:this.result};this.requestHandler("api_test_results/create",t),this.clearFields()},deleteTest:function(t){var a={id:t};this.requestHandler("api_test_results/delete",a)},addRow:function(){var t={dataType:this.type,arrayName:this.arrayName,columnName:this.columnName,value:this.value};this.tempPostData.push(t)},addFile:function(){this.fileFlag=!0},remove:function(t){this.tempPostData.splice(t,1)},removeFile:function(){this.fileFlag=!1,this.file=null},getArrayIndex:function(t,a){for(var e=0;e<t.length;)t[e].columnName,e++},clearFields:function(){this.path="",this.currentResult=""}}}},824:function(t,a,e){a=t.exports=e(300)(),a.push([t.i,"body{font-size:12px}.result-holder{margin-top:20px}.table .table-default{background:#eaeaea}.btn-primary{background:#060;border:0}.btn-primary:hover{background:#090}.btn:hover{cursor:pointer}","",{version:3,sources:["C:/xampp/htdocs/projectabc/src/modules/testForDeveloper/Canales.vue"],names:[],mappings:"AACA,KACE,cAAgB,CACjB,AACD,eACE,eAAiB,CAClB,AACD,sBACE,kBAAoB,CACrB,AACD,aACE,gBAAoB,AACpB,QAAS,CACV,AACD,mBACE,eAAoB,CACrB,AACD,WACE,cAAgB,CACjB",file:"Canales.vue",sourcesContent:["\nbody{\n  font-size: 12px;\n}\n.result-holder{\n  margin-top: 20px;\n}\n.table .table-default{\n  background: #eaeaea;\n}/*-- table .table-inverse --*/\n.btn-primary{\n  background: #006600;\n  border:0;\n}\n.btn-primary:hover{\n  background: #009900;\n}\n.btn:hover{\n  cursor: pointer;\n}\n"],sourceRoot:""}])},896:function(t,a,e){var s=e(824);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);e(301)("7b83570c",s,!0)}});
//# sourceMappingURL=23.3dbf7bfe89e628105d37.js.map