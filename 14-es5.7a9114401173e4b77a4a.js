function _classCallCheck(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function _createClass(n,e,t){return e&&_defineProperties(n.prototype,e),t&&_defineProperties(n,t),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{HdBo:function(n,e,t){"use strict";t.r(e);var o,a=t("ofXK"),i=t("fXoL"),s=t("Ybvb"),l=t("n9MN"),c=((o=function(){function n(){_classCallCheck(this,n),this.data=[{type:"\u5206\u7c7b\u4e00",value:27},{type:"\u5206\u7c7b\u4e8c",value:25},{type:"\u5206\u7c7b\u4e09",value:18},{type:"\u5206\u7c7b\u56db",value:15},{type:"\u5206\u7c7b\u4e94",value:10},{type:"\u5176\u5b83",value:5}],this.options={forceFit:!0,radius:.8,data:this.data,angleField:"value",colorField:"type"},this.codes={codeTs:{title:"donut.component.ts",code:"import { Component, OnInit } from '@angular/core';\n\n      @Component({\n        selector: 'app-donut',\n        templateUrl: './donut.component.html',\n        styleUrls: ['./donut.component.less']\n      })\n      export class DonutComponent implements OnInit {\n      \n        constructor() { }\n      \n        data = [\n          {\n            type: '\u5206\u7c7b\u4e00',\n            value: 27,\n          },\n          {\n            type: '\u5206\u7c7b\u4e8c',\n            value: 25,\n          },\n          {\n            type: '\u5206\u7c7b\u4e09',\n            value: 18,\n          },\n          {\n            type: '\u5206\u7c7b\u56db',\n            value: 15,\n          },\n          {\n            type: '\u5206\u7c7b\u4e94',\n            value: 10,\n          },\n          {\n            type: '\u5176\u5b83',\n            value: 5,\n          },\n        ];\n      \n        options = {\n          forceFit: true,\n          radius: 0.8,\n          data: this.data,\n          angleField: 'value',\n          colorField: 'type',\n        }\n      }\n      "},codeHtml:{title:"donut.component.html",code:'<div starkG2plotDonut [options]="options" style="width: 500px;"></div>'}}}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||o)},o.\u0275cmp=i.Fb({type:o,selectors:[["app-donut"]],decls:6,vars:2,consts:[["starkG2plotDonut","",2,"width","500px",3,"options"],[3,"codes"]],template:function(n,e){1&n&&(i.Qb(0,"h2"),i.qc(1,"preview"),i.Pb(),i.Mb(2,"div",0),i.Qb(3,"h2"),i.qc(4,"code"),i.Pb(),i.Mb(5,"stark-code-show",1)),2&n&&(i.Bb(2),i.fc("options",e.options),i.Bb(3),i.fc("codes",e.codes))},directives:[s.e,l.a],styles:[""]}),o),r=t("PCNd"),p=t("tyNb");t.d(e,"DonutModule",(function(){return f}));var u,d=[{path:"",component:c}],f=((u=function n(){_classCallCheck(this,n)}).\u0275mod=i.Jb({type:u}),u.\u0275inj=i.Ib({factory:function(n){return new(n||u)},imports:[[a.b,r.a,p.e.forChild(d)]]}),u)}}]);