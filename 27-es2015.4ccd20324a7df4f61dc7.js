(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{Gr2o:function(n,t,e){"use strict";e.r(t);var o=e("ofXK"),s=e("fXoL"),a=e("Ybvb"),c=e("n9MN");let r=(()=>{class n{constructor(){this.data=[{"\u5730\u533a":"\u534e\u4e1c","\u7ec6\u5206":"\u516c\u53f8","\u9500\u552e\u989d":1454715.807999998},{"\u5730\u533a":"\u534e\u4e1c","\u7ec6\u5206":"\u6d88\u8d39\u8005","\u9500\u552e\u989d":2287358.261999998},{"\u5730\u533a":"\u4e2d\u5357","\u7ec6\u5206":"\u516c\u53f8","\u9500\u552e\u989d":1335665.3239999984},{"\u5730\u533a":"\u4e2d\u5357","\u7ec6\u5206":"\u6d88\u8d39\u8005","\u9500\u552e\u989d":2057936.7620000008},{"\u5730\u533a":"\u4e1c\u5317","\u7ec6\u5206":"\u516c\u53f8","\u9500\u552e\u989d":834842.827},{"\u5730\u533a":"\u4e1c\u5317","\u7ec6\u5206":"\u6d88\u8d39\u8005","\u9500\u552e\u989d":1323985.6069999991},{"\u5730\u533a":"\u534e\u5317","\u7ec6\u5206":"\u516c\u53f8","\u9500\u552e\u989d":804769.4689999995},{"\u5730\u533a":"\u534e\u5317","\u7ec6\u5206":"\u6d88\u8d39\u8005","\u9500\u552e\u989d":1220430.5610000012},{"\u5730\u533a":"\u897f\u5357","\u7ec6\u5206":"\u516c\u53f8","\u9500\u552e\u989d":469341.684},{"\u5730\u533a":"\u897f\u5357","\u7ec6\u5206":"\u6d88\u8d39\u8005","\u9500\u552e\u989d":677302.8919999995},{"\u5730\u533a":"\u897f\u5317","\u7ec6\u5206":"\u516c\u53f8","\u9500\u552e\u989d":253458.1840000001},{"\u5730\u533a":"\u897f\u5317","\u7ec6\u5206":"\u6d88\u8d39\u8005","\u9500\u552e\u989d":458058.1039999998}],this.options={forceFit:!0,title:{visible:!0,text:"\u767e\u5206\u6bd4\u5806\u53e0\u6761\u5f62\u56fe"},data:this.data,yField:"\u5730\u533a",xField:"\u9500\u552e\u989d",xAxis:{formatter:n=>Math.round(n/1e4)+"\u4e07"},stackField:"\u7ec6\u5206"},this.codes={codeTs:{title:"stacked-bar.component.ts",code:"import { Component, OnInit } from '@angular/core';\n\n      @Component({\n        selector: 'app-stacked-bar',\n        templateUrl: './stacked-bar.component.html',\n        styleUrls: ['./stacked-bar.component.less']\n      })\n      export class StackedBarComponent implements OnInit {\n      \n        constructor() { }\n      \n        data = [\n          {\n            \u5730\u533a: '\u534e\u4e1c',\n            \u7ec6\u5206: '\u516c\u53f8',\n            \u9500\u552e\u989d: 1454715.807999998,\n          },\n          {\n            \u5730\u533a: '\u534e\u4e1c',\n            \u7ec6\u5206: '\u6d88\u8d39\u8005',\n            \u9500\u552e\u989d: 2287358.261999998,\n          },\n          {\n            \u5730\u533a: '\u4e2d\u5357',\n            \u7ec6\u5206: '\u516c\u53f8',\n            \u9500\u552e\u989d: 1335665.3239999984,\n          },\n          {\n            \u5730\u533a: '\u4e2d\u5357',\n            \u7ec6\u5206: '\u6d88\u8d39\u8005',\n            \u9500\u552e\u989d: 2057936.7620000008,\n          },\n          {\n            \u5730\u533a: '\u4e1c\u5317',\n            \u7ec6\u5206: '\u516c\u53f8',\n            \u9500\u552e\u989d: 834842.827,\n          },\n          {\n            \u5730\u533a: '\u4e1c\u5317',\n            \u7ec6\u5206: '\u6d88\u8d39\u8005',\n            \u9500\u552e\u989d: 1323985.6069999991,\n          },\n          {\n            \u5730\u533a: '\u534e\u5317',\n            \u7ec6\u5206: '\u516c\u53f8',\n            \u9500\u552e\u989d: 804769.4689999995,\n          },\n          {\n            \u5730\u533a: '\u534e\u5317',\n            \u7ec6\u5206: '\u6d88\u8d39\u8005',\n            \u9500\u552e\u989d: 1220430.5610000012,\n          },\n          {\n            \u5730\u533a: '\u897f\u5357',\n            \u7ec6\u5206: '\u516c\u53f8',\n            \u9500\u552e\u989d: 469341.684,\n          },\n          {\n            \u5730\u533a: '\u897f\u5357',\n            \u7ec6\u5206: '\u6d88\u8d39\u8005',\n            \u9500\u552e\u989d: 677302.8919999995,\n          },\n          {\n            \u5730\u533a: '\u897f\u5317',\n            \u7ec6\u5206: '\u516c\u53f8',\n            \u9500\u552e\u989d: 253458.1840000001,\n          },\n          {\n            \u5730\u533a: '\u897f\u5317',\n            \u7ec6\u5206: '\u6d88\u8d39\u8005',\n            \u9500\u552e\u989d: 458058.1039999998,\n          },\n        ];\n      \n        options = {\n          forceFit: true,\n          title: {\n            visible: true,\n            text: '\u767e\u5206\u6bd4\u5806\u53e0\u6761\u5f62\u56fe',\n          },\n          data: this.data,\n          yField: '\u5730\u533a',\n          xField: '\u9500\u552e\u989d',\n          xAxis: {\n            formatter: (v) => Math.round(v / 10000) + '\u4e07',\n          },\n          stackField: '\u7ec6\u5206',\n        }\n      }\n      "},codeHtml:{title:"stacked-bar.component.html",code:'<div starkG2plotStackedBar [options]="options" style="width: 500px;"></div>'}}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Fb({type:n,selectors:[["app-stacked-bar"]],decls:6,vars:2,consts:[["starkG2plotStackedBar","",2,"width","800px",3,"options"],[3,"codes"]],template:function(n,t){1&n&&(s.Qb(0,"h2"),s.qc(1,"preview"),s.Pb(),s.Mb(2,"div",0),s.Qb(3,"h2"),s.qc(4,"code"),s.Pb(),s.Mb(5,"stark-code-show",1)),2&n&&(s.Bb(2),s.fc("options",t.options),s.Bb(3),s.fc("codes",t.codes))},directives:[a.q,c.a],styles:[""]}),n})();var i=e("PCNd"),d=e("tyNb");e.d(t,"StackedBarModule",(function(){return l}));const p=[{path:"",component:r}];let l=(()=>{class n{}return n.\u0275mod=s.Jb({type:n}),n.\u0275inj=s.Ib({factory:function(t){return new(t||n)},imports:[[o.b,i.a,d.e.forChild(p)]]}),n})()}}]);