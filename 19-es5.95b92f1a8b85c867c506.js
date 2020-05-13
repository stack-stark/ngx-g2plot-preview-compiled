function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"L/XT":function(e,n,t){"use strict";t.r(n);var i,a=t("ofXK"),o=t("fXoL"),r=t("Ybvb"),l=t("OzZK"),c=t("RwU8"),s=t("C2AL"),u=t("n9MN"),p=["divG2plotLine"],v=((i=function(){function e(){_classCallCheck(this,e),this.data=[{year:"1991",value:3},{year:"1992",value:4},{year:"1993",value:3.5},{year:"1994",value:5},{year:"1995",value:4.9},{year:"1996",value:6},{year:"1997",value:7},{year:"1998",value:9},{year:"1999",value:13}],this.options={title:{visible:!0,text:"\u6298\u7ebf\u56fe"},description:{visible:!0,text:"\u7528\u5e73\u6ed1\u7684\u66f2\u7ebf\u4ee3\u66ff\u6298\u7ebf\u3002"},data:this.data,xField:"year",yField:"value"},this.codes={codeTs:{title:"line.component.ts",code:"import { Component, ViewChild } from '@angular/core';\n      import { G2plotLineDirective } from 'ngx-g2plot';\n\n      @Component({\n        selector: 'app-line',\n        templateUrl: './line.component.html',\n        styleUrls: ['./line.component.less']\n      })\n      export class LineComponent {\n\n        constructor() { }\n        @ViewChild('divG2plotLine') divG2plotLine: G2plotLineDirective;\n\n        data = [\n          { year: '1991', value: 3 },\n          { year: '1992', value: 4 },\n          { year: '1993', value: 3.5 },\n          { year: '1994', value: 5 },\n          { year: '1995', value: 4.9 },\n          { year: '1996', value: 6 },\n          { year: '1997', value: 7 },\n          { year: '1998', value: 9 },\n          { year: '1999', value: 13 },\n        ];\n\n        options = {\n          title: {\n            visible: true,\n            text: '\u6298\u7ebf\u56fe',\n          },\n          description: {\n            visible: true,\n            text: '\u7528\u5e73\u6ed1\u7684\u66f2\u7ebf\u4ee3\u66ff\u6298\u7ebf\u3002',\n          },\n          data: this.data,\n          xField: 'year',\n          yField: 'value',\n        };\n\n        updateConfig(): void {\n         const options = {\n            title: {\n              visible: true,\n              text: 'The line chart',\n            },\n            description: {\n              visible: true,\n              text: 'Replace broken lines with smooth curves.',\n            },\n            xField: 'year',\n            yField: 'value',\n          };\n         this.divG2plotLine.instance.updateConfig(options); // \u4f7f\u7528\u5f53\u524d\u5b9e\u4f8b\u65b9\u6cd5 Use the current instance method\n         this.divG2plotLine.instance.render(); // \u4f7f\u7528\u5f53\u524d\u5b9e\u4f8b\u65b9\u6cd5 Use the current instance method\n        }\n\n        changeData(): void {\n          const data = [\n            { year: '1991', value: 13 },\n            { year: '1992', value: 14 },\n            { year: '1993', value: 13.5 },\n            { year: '1994', value: 15 },\n            { year: '1995', value: 14.9 },\n            { year: '1996', value: 16 },\n            { year: '1997', value: 17 },\n            { year: '1998', value: 19 },\n            { year: '1999', value: 23 },\n          ];\n          this.divG2plotLine.changeData(data);\n        }\n\n        repaint(): void {\n          this.divG2plotLine.repaint();\n        }\n\n        destroy(): void {\n          this.divG2plotLine.destroy();\n        }\n\n      }\n      "},codeHtml:{title:"line.component.html",code:'<div starkG2plotLine #divG2plotLine="g2plotLine" [options]="options" style="width: 500px;"></div>'}}}return _createClass(e,[{key:"updateConfig",value:function(){this.divG2plotLine.instance.updateConfig({title:{visible:!0,text:"The line chart"},description:{visible:!0,text:"Replace broken lines with smooth curves."},xField:"year",yField:"value"}),this.divG2plotLine.instance.render()}},{key:"changeData",value:function(){this.divG2plotLine.changeData([{year:"1991",value:13},{year:"1992",value:14},{year:"1993",value:13.5},{year:"1994",value:15},{year:"1995",value:14.9},{year:"1996",value:16},{year:"1997",value:17},{year:"1998",value:19},{year:"1999",value:23}])}},{key:"repaint",value:function(){this.divG2plotLine.repaint()}},{key:"destroy",value:function(){this.divG2plotLine.destroy()}}]),e}()).\u0275fac=function(e){return new(e||i)},i.\u0275cmp=o.Fb({type:i,selectors:[["app-line"]],viewQuery:function(e,n){var t;1&e&&o.tc(p,!0),2&e&&o.hc(t=o.Zb())&&(n.divG2plotLine=t.first)},decls:15,vars:2,consts:[["starkG2plotLine","",2,"width","500px",3,"options"],["divG2plotLine","g2plotLine"],["nz-button","","nzType","primary",3,"click"],["nz-button","","nzType","primary",2,"margin-left","20px",3,"click"],["nz-button","","nzType","default","nzDanger","",2,"margin-left","20px",3,"click"],["nz-button","","nzType","primary","nzDanger","",2,"margin-left","20px",3,"click"],[3,"codes"]],template:function(e,n){1&e&&(o.Qb(0,"h2"),o.qc(1,"preview"),o.Pb(),o.Mb(2,"div",0,1),o.Qb(4,"button",2),o.Yb("click",(function(){return n.updateConfig()})),o.qc(5,"updateConfig"),o.Pb(),o.Qb(6,"button",3),o.Yb("click",(function(){return n.changeData()})),o.qc(7,"changeData"),o.Pb(),o.Qb(8,"button",4),o.Yb("click",(function(){return n.repaint()})),o.qc(9,"repaint"),o.Pb(),o.Qb(10,"button",5),o.Yb("click",(function(){return n.destroy()})),o.qc(11,"destroy"),o.Pb(),o.Qb(12,"h2"),o.qc(13,"code"),o.Pb(),o.Mb(14,"stark-code-show",6)),2&e&&(o.Bb(2),o.fc("options",n.options),o.Bb(12),o.fc("codes",n.codes))},directives:[r.j,l.a,c.a,s.a,u.a],styles:[""]}),i),d=t("PCNd"),y=t("tyNb");t.d(n,"LineModule",(function(){return f}));var b,h=[{path:"",component:v}],f=((b=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:b}),b.\u0275inj=o.Ib({factory:function(e){return new(e||b)},imports:[[a.b,d.a,y.e.forChild(h),l.b]]}),b)}}]);