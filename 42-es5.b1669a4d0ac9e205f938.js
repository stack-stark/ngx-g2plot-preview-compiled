!function(){function t(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function n(t,n){for(var o=0;o<n.length;o++){var e=n[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{TL9t:function(o,e,i){"use strict";i.r(e),i.d(e,"WordCloudModule",function(){return y});var d=i("ofXK"),r=i("fXoL"),a=i("Ybvb"),c=i("oyxB"),l=i("lR5k"),s=i("qAZ0"),u=["divG2plotWordCloud"];function b(t,n){1&t&&(r.Ob(0,"div",8),r.Kb(1,"nz-spin",9),r.Nb()),2&t&&(r.zb(1),r.ec("nzSize","large"))}var f,p,h=function(t){return{display:t}},w=((f=function(){function o(){t(this,o),this.data=[],this.options={data:this.data,wordField:"name",weightField:"value",colorField:"name",wordStyle:{fontFamily:"Verdana",fontSize:[8,32],rotation:0},random:function(){return.5}}}var e,i,d;return e=o,(i=[{key:"ngOnInit",value:function(){var t=this;fetch("https://gw.alipayobjects.com/os/antvdemo/assets/data/antv-keywords.json").then(function(t){return t.json()}).then(function(n){t.data=n,t.divG2plotWordCloud.changeData(n)})}}])&&n(e.prototype,i),d&&n(e,d),o}()).\u0275fac=function(t){return new(t||f)},f.\u0275cmp=r.Db({type:f,selectors:[["app-word-cloud"]],viewQuery:function(t,n){var o;1&t&&r.xc(u,!0),2&t&&r.jc(o=r.Wb())&&(n.divG2plotWordCloud=o.first)},decls:15,vars:8,consts:[["nz-row",""],["starkG2plotWordCloud","",2,"width","800px",3,"options","ngStyle"],["divG2plotWordCloud","g2plotWordCloud"],["style","width: 100%;height: 100%;display: flex;align-items: center;justify-content: center;",4,"ngIf"],["nzTitle","html"],[3,"src"],["nzTitle","ts"],["nzTitle","module"],[2,"width","100%","height","100%","display","flex","align-items","center","justify-content","center"],["nzSimple","",3,"nzSize"]],template:function(t,n){1&t&&(r.Ob(0,"div",0),r.Ob(1,"h2"),r.uc(2,"\u8bcd\u4e91\u56fe-\u6bcf\u6b21\u6e32\u67d3\u4fdd\u6301\u4f4d\u7f6e\u4e0d\u53d8"),r.Nb(),r.Kb(3,"div",1,2),r.sc(5,b,2,1,"div",3),r.Nb(),r.Ob(6,"h2"),r.uc(7,"code"),r.Nb(),r.Ob(8,"nz-tabset"),r.Ob(9,"nz-tab",4),r.Kb(10,"markdown",5),r.Nb(),r.Ob(11,"nz-tab",6),r.Kb(12,"markdown",5),r.Nb(),r.Ob(13,"nz-tab",7),r.Kb(14,"markdown",5),r.Nb(),r.Nb()),2&t&&(r.zb(3),r.ec("options",n.options)("ngStyle",r.hc(6,h,n.data.length?"block":"none")),r.zb(2),r.ec("ngIf",!n.data.length),r.zb(5),r.ec("src","assets/code/word-cloud/word-cloud.html.md"),r.zb(2),r.ec("src","assets/code/word-cloud/word-cloud.ts.md"),r.zb(2),r.ec("src","assets/code/word-cloud/word-cloud.module.md"))},directives:[a.M,d.m,d.l,c.b,c.a,l.a,s.a],styles:[""]}),f),m=i("tyNb"),v=[{path:"",component:w}],y=((p=function n(){t(this,n)}).\u0275mod=r.Hb({type:p}),p.\u0275inj=r.Gb({factory:function(t){return new(t||p)},imports:[[d.c,l.b.forRoot(),m.f.forChild(v),c.c,a.N,s.b]]}),p)}}])}();