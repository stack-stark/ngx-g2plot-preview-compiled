(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{HdBo:function(n,t,e){"use strict";e.r(t);var o=e("ofXK"),s=e("fXoL"),p=e("Ybvb"),a=e("n9MN");let c=(()=>{class n{constructor(){this.data=[{type:"\u5206\u7c7b\u4e00",value:27},{type:"\u5206\u7c7b\u4e8c",value:25},{type:"\u5206\u7c7b\u4e09",value:18},{type:"\u5206\u7c7b\u56db",value:15},{type:"\u5206\u7c7b\u4e94",value:10},{type:"\u5176\u5b83",value:5}],this.options={forceFit:!0,radius:.8,data:this.data,angleField:"value",colorField:"type"},this.codes={codeTs:{title:"donut.component.ts",code:"import { Component, OnInit } from '@angular/core';\n\n      @Component({\n        selector: 'app-donut',\n        templateUrl: './donut.component.html',\n        styleUrls: ['./donut.component.less']\n      })\n      export class DonutComponent implements OnInit {\n      \n        constructor() { }\n      \n        data = [\n          {\n            type: '\u5206\u7c7b\u4e00',\n            value: 27,\n          },\n          {\n            type: '\u5206\u7c7b\u4e8c',\n            value: 25,\n          },\n          {\n            type: '\u5206\u7c7b\u4e09',\n            value: 18,\n          },\n          {\n            type: '\u5206\u7c7b\u56db',\n            value: 15,\n          },\n          {\n            type: '\u5206\u7c7b\u4e94',\n            value: 10,\n          },\n          {\n            type: '\u5176\u5b83',\n            value: 5,\n          },\n        ];\n      \n        options = {\n          forceFit: true,\n          radius: 0.8,\n          data: this.data,\n          angleField: 'value',\n          colorField: 'type',\n        }\n      }\n      "},codeHtml:{title:"donut.component.html",code:'<div starkG2plotDonut [options]="options" style="width: 500px;"></div>'}}}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=s.Hb({type:n,selectors:[["app-donut"]],decls:6,vars:2,consts:[["starkG2plotDonut","",2,"width","500px",3,"options"],[3,"codes"]],template:function(n,t){1&n&&(s.Sb(0,"h2"),s.wc(1,"preview"),s.Rb(),s.Ob(2,"div",0),s.Sb(3,"h2"),s.wc(4,"code"),s.Rb(),s.Ob(5,"stark-code-show",1)),2&n&&(s.Cb(2),s.jc("options",t.options),s.Cb(3),s.jc("codes",t.codes))},directives:[p.e,a.a],styles:[""]}),n})();var l=e("PCNd"),i=e("tyNb");e.d(t,"DonutModule",(function(){return r}));const d=[{path:"",component:c}];let r=(()=>{class n{}return n.\u0275mod=s.Lb({type:n}),n.\u0275inj=s.Kb({factory:function(t){return new(t||n)},imports:[[o.c,l.a,i.e.forChild(d)]]}),n})()}}]);