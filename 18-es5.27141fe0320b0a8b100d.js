function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var a=0;a<n.length;a++){var t=n[a];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,a){return n&&_defineProperties(e.prototype,n),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{Z1pf:function(e,n,a){"use strict";a.r(n);var t,l=a("ofXK"),o=a("fXoL"),u=a("n9MN"),s=((t=function(){function e(){_classCallCheck(this,e),this.data=[{value:1.2},{value:3.4},{value:3.7},{value:4.3},{value:5.2},{value:5.8},{value:6.1},{value:6.5},{value:6.8},{value:7.1},{value:7.3},{value:7.7},{value:8.3},{value:8.6},{value:8.8},{value:9.1},{value:9.2},{value:9.4},{value:9.5},{value:9.7},{value:10.5},{value:10.7},{value:10.8},{value:11},{value:11}],this.options={data:this.data,binField:"value",binNumber:6},this.codes={codeTs:{title:"histogram.component.ts",code:"import { Component, OnInit } from '@angular/core';\n\n      @Component({\n        selector: 'app-histogram',\n        templateUrl: './histogram.component.html',\n        styleUrls: ['./histogram.component.less']\n      })\n      export class HistogramComponent implements OnInit {\n      \n        constructor() { }\n      \n        data = [\n          { value: 1.2 },\n          { value: 3.4 },\n          { value: 3.7 },\n          { value: 4.3 },\n          { value: 5.2 },\n          { value: 5.8 },\n          { value: 6.1 },\n          { value: 6.5 },\n          { value: 6.8 },\n          { value: 7.1 },\n          { value: 7.3 },\n          { value: 7.7 },\n          { value: 8.3 },\n          { value: 8.6 },\n          { value: 8.8 },\n          { value: 9.1 },\n          { value: 9.2 },\n          { value: 9.4 },\n          { value: 9.5 },\n          { value: 9.7 },\n          { value: 10.5 },\n          { value: 10.7 },\n          { value: 10.8 },\n          { value: 11.0 },\n          { value: 11.0 },\n        ];\n      \n        options = {\n          data: this.data,\n          binField: 'value',\n          binNumber: 6,\n        };\n      }\n      "},codeHtml:{title:"histogram.component.html",code:'<div starkG2plotHistogram [options]="options" style="width: 500px;"></div>'}}}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Fb({type:t,selectors:[["app-histogram"]],decls:5,vars:1,consts:[[3,"codes"]],template:function(e,n){1&e&&(o.Qb(0,"h2"),o.qc(1,"preview"),o.Pb(),o.Qb(2,"h2"),o.qc(3,"code"),o.Pb(),o.Mb(4,"stark-code-show",0)),2&e&&(o.Bb(4),o.fc("codes",n.codes))},directives:[u.a],styles:[""]}),t),i=a("PCNd"),r=a("tyNb");a.d(n,"HistogramModule",(function(){return p}));var v,c=[{path:"",component:s}],p=((v=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:v}),v.\u0275inj=o.Ib({factory:function(e){return new(e||v)},imports:[[l.b,i.a,r.e.forChild(c)]]}),v)}}]);