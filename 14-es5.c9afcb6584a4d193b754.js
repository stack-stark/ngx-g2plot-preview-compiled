function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var s=e[t];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(n,s.key,s)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{j7AZ:function(n,e,t){"use strict";t.r(e);var s,o=t("ofXK"),a=t("fXoL"),l=t("Ybvb"),i=t("n9MN"),c=((s=function(){function n(){_classCallCheck(this,n),this.data=[{type:"\u5bb6\u5177\u5bb6\u7535",sales:38},{type:"\u7cae\u6cb9\u526f\u98df",sales:52},{type:"\u751f\u9c9c\u6c34\u679c",sales:61},{type:"\u7f8e\u5bb9\u6d17\u62a4",sales:145},{type:"\u6bcd\u5a74\u7528\u54c1",sales:48},{type:"\u8fdb\u53e3\u98df\u54c1",sales:38},{type:"\u98df\u54c1\u996e\u6599",sales:38},{type:"\u5bb6\u5ead\u6e05\u6d01",sales:38}],this.options={title:{visible:!0,text:"\u57fa\u7840\u67f1\u72b6\u56fe"},forceFit:!0,data:this.data,padding:"auto",xField:"type",yField:"sales",meta:{type:{alias:"\u7c7b\u522b"},sales:{alias:"\u9500\u552e\u989d(\u4e07)"}}},this.codes={codeTs:{title:"column.component.ts",code:"import { Component, OnInit } from '@angular/core';\n\n      @Component({\n        selector: 'app-column',\n        templateUrl: './column.component.html',\n        styleUrls: ['./column.component.less']\n      })\n      export class ColumnComponent implements OnInit {\n      \n        constructor() { }\n      \n        data = [\n          {\n            type: '\u5bb6\u5177\u5bb6\u7535',\n            sales: 38,\n          },\n          {\n            type: '\u7cae\u6cb9\u526f\u98df',\n            sales: 52,\n          },\n          {\n            type: '\u751f\u9c9c\u6c34\u679c',\n            sales: 61,\n          },\n          {\n            type: '\u7f8e\u5bb9\u6d17\u62a4',\n            sales: 145,\n          },\n          {\n            type: '\u6bcd\u5a74\u7528\u54c1',\n            sales: 48,\n          },\n          {\n            type: '\u8fdb\u53e3\u98df\u54c1',\n            sales: 38,\n          },\n          {\n            type: '\u98df\u54c1\u996e\u6599',\n            sales: 38,\n          },\n          {\n            type: '\u5bb6\u5ead\u6e05\u6d01',\n            sales: 38,\n          },\n        ];\n      \n        options = {\n          title: {\n            visible: true,\n            text: '\u57fa\u7840\u67f1\u72b6\u56fe',\n          },\n          forceFit: true,\n          data: this.data,\n          padding: 'auto',\n          xField: 'type',\n          yField: 'sales',\n          meta: {\n            type: {\n              alias: '\u7c7b\u522b',\n            },\n            sales: {\n              alias: '\u9500\u552e\u989d(\u4e07)',\n            },\n          },\n        };\n      }"},codeHtml:{title:"column.component.html",code:'<div starkG2plotColumn [options]="options" style="width: 800px;"></div>'}}}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||s)},s.\u0275cmp=a.Hb({type:s,selectors:[["app-column"]],decls:6,vars:2,consts:[["starkG2plotColumn","",2,"width","800px",3,"options"],[3,"codes"]],template:function(n,e){1&n&&(a.Sb(0,"h2"),a.wc(1,"preview"),a.Rb(),a.Ob(2,"div",0),a.Sb(3,"h2"),a.wc(4,"code"),a.Rb(),a.Ob(5,"stark-code-show",1)),2&n&&(a.Cb(2),a.jc("options",e.options),a.Cb(3),a.jc("codes",e.codes))},directives:[l.d,i.a],styles:[""]}),s),p=t("PCNd"),r=t("tyNb");t.d(e,"ColumnModule",(function(){return m}));var d,u=[{path:"",component:c}],m=((d=function n(){_classCallCheck(this,n)}).\u0275mod=a.Lb({type:d}),d.\u0275inj=a.Kb({factory:function(n){return new(n||d)},imports:[[o.c,p.a,r.e.forChild(u)]]}),d)}}]);