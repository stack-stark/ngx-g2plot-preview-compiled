(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{TL9t:function(t,o,e){"use strict";e.r(o),e.d(o,"WordCloudModule",function(){return w});var n=e("ofXK"),d=e("fXoL"),s=e("Ybvb"),c=e("oyxB"),i=e("lR5k"),l=e("qAZ0");const a=["divG2plotWordCloud"];function r(t,o){1&t&&(d.Ob(0,"div",8),d.Kb(1,"nz-spin",9),d.Nb()),2&t&&(d.zb(1),d.ec("nzSize","large"))}const b=function(t){return{display:t}};let u=(()=>{class t{constructor(){this.data=[],this.options={data:this.data,wordField:"name",weightField:"value",colorField:"name",wordStyle:{fontFamily:"Verdana",fontSize:[8,32],rotation:0},random:()=>.5}}ngOnInit(){fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json").then(t=>t.json()).then(t=>{this.data=t,this.divG2plotWordCloud.changeData(t)})}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d.Db({type:t,selectors:[["app-word-cloud"]],viewQuery:function(t,o){if(1&t&&d.xc(a,!0),2&t){let t;d.jc(t=d.Wb())&&(o.divG2plotWordCloud=t.first)}},decls:15,vars:8,consts:[["nz-row",""],["starkG2plotWordCloud","",2,"width","800px",3,"options","ngStyle"],["divG2plotWordCloud","g2plotWordCloud"],["style","width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;",4,"ngIf"],["nzTitle","html"],[3,"src"],["nzTitle","ts"],["nzTitle","module"],[2,"width","100%","height","100%","display","flex","align-items","center","justify-content","center"],["nzSimple","",3,"nzSize"]],template:function(t,o){1&t&&(d.Ob(0,"div",0),d.Ob(1,"h2"),d.uc(2,"\u8bcd\u4e91\u56fe-\u6bcf\u6b21\u6e32\u67d3\u4fdd\u6301\u4f4d\u7f6e\u4e0d\u53d8"),d.Nb(),d.Kb(3,"div",1,2),d.sc(5,r,2,1,"div",3),d.Nb(),d.Ob(6,"h2"),d.uc(7,"code"),d.Nb(),d.Ob(8,"nz-tabset"),d.Ob(9,"nz-tab",4),d.Kb(10,"markdown",5),d.Nb(),d.Ob(11,"nz-tab",6),d.Kb(12,"markdown",5),d.Nb(),d.Ob(13,"nz-tab",7),d.Kb(14,"markdown",5),d.Nb(),d.Nb()),2&t&&(d.zb(3),d.ec("options",o.options)("ngStyle",d.hc(6,b,o.data.length?"block":"none")),d.zb(2),d.ec("ngIf",!o.data.length),d.zb(5),d.ec("src","assets/code/word-cloud/word-cloud.html.md"),d.zb(2),d.ec("src","assets/code/word-cloud/word-cloud.ts.md"),d.zb(2),d.ec("src","assets/code/word-cloud/word-cloud.module.md"))},directives:[s.M,n.m,n.l,c.b,c.a,i.a,l.a],styles:[""]}),t})();var p=e("tyNb");const h=[{path:"",component:u}];let w=(()=>{class t{}return t.\u0275mod=d.Hb({type:t}),t.\u0275inj=d.Gb({factory:function(o){return new(o||t)},imports:[[n.c,i.b.forRoot(),p.f.forChild(h),c.c,s.N,l.b]]}),t})()}}]);