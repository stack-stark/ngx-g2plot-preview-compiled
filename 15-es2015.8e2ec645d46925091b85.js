(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"/gA8":function(n,e,t){"use strict";t.r(e);var a=t("FhQf"),o=t("Kt9u"),r=t("PdDm"),l=t("n9MN");let y=(()=>{class n{constructor(){this.data=[{year:"1991",value:3,type:"Lon"},{year:"1992",value:4,type:"Lon"},{year:"1993",value:3.5,type:"Lon"},{year:"1994",value:5,type:"Lon"},{year:"1995",value:4.9,type:"Lon"},{year:"1996",value:6,type:"Lon"},{year:"1997",value:7,type:"Lon"},{year:"1998",value:9,type:"Lon"},{year:"1999",value:13,type:"Lon"},{year:"1991",value:3,type:"Bor"},{year:"1992",value:4,type:"Bor"},{year:"1993",value:3.5,type:"Bor"},{year:"1994",value:5,type:"Bor"},{year:"1995",value:4.9,type:"Bor"},{year:"1996",value:6,type:"Bor"},{year:"1997",value:7,type:"Bor"},{year:"1998",value:9,type:"Bor"},{year:"1999",value:13,type:"Bor"}],this.options={title:{visible:!0,text:"\u5806\u53e0\u67f1\u72b6\u56fe"},forceFit:!0,data:this.data,padding:"auto",xField:"year",yField:"sales",yAxis:{min:0},stackField:"type"},this.codes={codeTs:{title:"stacked-column.component.ts",code:"import { Component, OnInit } from '@angular/core';\n\n      @Component({\n        selector: 'app-stacked-column',\n        templateUrl: './stacked-column.component.html',\n        styleUrls: ['./stacked-column.component.less']\n      })\n      export class StackedColumnComponent implements OnInit {\n      \n        constructor() { }\n      \n        data = [\n          {\n            year: '1991',\n            value: 3,\n            type: 'Lon',\n          },\n          {\n            year: '1992',\n            value: 4,\n            type: 'Lon',\n          },\n          {\n            year: '1993',\n            value: 3.5,\n            type: 'Lon',\n          },\n          {\n            year: '1994',\n            value: 5,\n            type: 'Lon',\n          },\n          {\n            year: '1995',\n            value: 4.9,\n            type: 'Lon',\n          },\n          {\n            year: '1996',\n            value: 6,\n            type: 'Lon',\n          },\n          {\n            year: '1997',\n            value: 7,\n            type: 'Lon',\n          },\n          {\n            year: '1998',\n            value: 9,\n            type: 'Lon',\n          },\n          {\n            year: '1999',\n            value: 13,\n            type: 'Lon',\n          },\n          {\n            year: '1991',\n            value: 3,\n            type: 'Bor',\n          },\n          {\n            year: '1992',\n            value: 4,\n            type: 'Bor',\n          },\n          {\n            year: '1993',\n            value: 3.5,\n            type: 'Bor',\n          },\n          {\n            year: '1994',\n            value: 5,\n            type: 'Bor',\n          },\n          {\n            year: '1995',\n            value: 4.9,\n            type: 'Bor',\n          },\n          {\n            year: '1996',\n            value: 6,\n            type: 'Bor',\n          },\n          {\n            year: '1997',\n            value: 7,\n            type: 'Bor',\n          },\n          {\n            year: '1998',\n            value: 9,\n            type: 'Bor',\n          },\n          {\n            year: '1999',\n            value: 13,\n            type: 'Bor',\n          },\n        ];\n      \n        options = {\n          title: {\n            visible: true,\n            text: '\u5806\u53e0\u67f1\u72b6\u56fe',\n          },\n          forceFit: true,\n          data: this.data,\n          padding: 'auto',\n          data: this.data,\n          xField: 'year',\n          yField: 'sales',\n          data: this.data,\n          xField: 'year',\n          yField: 'value',\n          yAxis: {\n            min: 0,\n          },\n          stackField: 'type',\n        };\n      \n      }\n      "},codeHtml:{title:"stacked-column.component.html",code:'<div starkG2plotStackedColumn [options]="options" style="width: 500px;"></div>'}}}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=o.Fb({type:n,selectors:[["app-stacked-column"]],decls:6,vars:2,consts:[["starkG2plotStackedColumn","",2,"width","500px",3,"options"],[3,"codes"]],template:function(n,e){1&n&&(o.Qb(0,"h2"),o.qc(1,"preview"),o.Pb(),o.Mb(2,"div",0),o.Qb(3,"h2"),o.qc(4,"code"),o.Pb(),o.Mb(5,"stark-code-show",1)),2&n&&(o.Bb(2),o.fc("options",e.options),o.Bb(3),o.fc("codes",e.codes))},directives:[r.h,l.a],styles:[""]}),n})();var p=t("PCNd"),s=t("nYCu");t.d(e,"StackedColumnModule",(function(){return c}));const u=[{path:"",component:y}];let c=(()=>{class n{}return n.\u0275mod=o.Jb({type:n}),n.\u0275inj=o.Ib({factory:function(e){return new(e||n)},imports:[[a.b,p.a,s.e.forChild(u)]]}),n})()}}]);