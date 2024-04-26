import{i as L,m as N}from"./chunk-DGZGTC4U.js";import{Da as _,Fa as H,Ga as R,Ha as a,Ia as c,Ja as y,Ka as h,L as j,La as E,M as D,O as p,Pa as u,Qa as F,Ra as q,S as k,Sa as B,T as I,W as U,X as O,aa as M,g as d,ga as T,ma as P,r as C,ra as b,sa as o,x as S,y as v,ya as g}from"./chunk-J3QMUDUY.js";var f=(()=>{let e=class e{constructor(r){this.http=r,this.url="https://randomuser.me/api",this.randomUser=g(void 0)}fetchUser(){this.randomUser.set(void 0),this.http.get(this.url,{params:{inc:["picture, name"],results:1}}).subscribe(r=>{this.randomUser.set(r.results&&r.results[0])})}};e.\u0275fac=function(i){return new(i||e)(k(N))},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"any"});let t=e;return t})();function w(t){t||(M(w),t=I(T));let e=new d(n=>t.onDestroy(n.next.bind(n)));return n=>n.pipe(j(e))}var l=(()=>{let e=class e{constructor(){this.interval=5e3,this.tick=100,this.currentTime=0,this.timer=new d,this.paused=!1}start(){return this.currentTime=0,this.paused=!1,this.timer=this.createTimer(),this.timer}pause(){this.paused=!0}resume(){this.paused=!1}reset(){this.currentTime=0}createTimer(){return S(this.tick).pipe(v(()=>!this.paused),D(()=>this.currentTime+=this.tick),C(()=>this.currentTime),v(r=>!(r%this.interval)),w())}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=p({token:e,factory:e.\u0275fac,providedIn:"any"});let t=e;return t})();var A=(()=>{let e=class e{onMouseEnter(){this.timer.pause()}onMouseLeave(){this.timer.resume()}constructor(r){this.timer=r}};e.\u0275fac=function(i){return new(i||e)(o(l))},e.\u0275dir=O({type:e,selectors:[["","app-pause-on-hover",""]],hostBindings:function(i,s){i&1&&h("mouseenter",function(){return s.onMouseEnter()})("mouseleave",function(){return s.onMouseLeave()})},standalone:!0});let t=e;return t})();function $(t,e){if(t&1&&(y(0,"img",1),a(1,"div",2)(2,"span",3),u(3,"Hi, my name is"),c(),a(4,"span",4),u(5),c()()),t&2){let n=e;E("srcset",`
      `,n.picture.medium,` 72w, 
      `,n.picture.large," 128w"),b(5),F("",n.name.first," ",n.name.last,"")}}function G(t,e){t&1&&(y(0,"div",5),a(1,"div",2)(2,"span",3),u(3,"Hi, my name is"),c(),a(4,"span",6),u(5,"Loading..."),c()())}var ye=(()=>{let e=class e{constructor(r,i,s){this.randomUserService=r,this.timer=i,this.randomUser=this.randomUserService.randomUser,L(s)&&(this.fetchUser(),i.start().subscribe(()=>this.fetchUser()))}fetchUser(){this.randomUserService.fetchUser()}resetTimer(){this.timer.reset(),this.fetchUser()}};e.\u0275fac=function(i){return new(i||e)(o(f),o(l),o(P))},e.\u0275cmp=U({type:e,selectors:[["app-people"]],standalone:!0,features:[q([l,f]),B],decls:4,vars:2,consts:[["app-pause-on-hover","",3,"click","disabled"],["app-pause-on-hover","","sizes",`
      (max-width: 400px) 72px, 
      128px`,"alt","User picture",3,"srcset"],[1,"text-block"],[1,"text-secondary"],["app-pause-on-hover","",1,"text-primary"],[1,"img-placeholder"],[1,"text-primary"]],template:function(i,s){if(i&1&&(_(0,$,6,5)(1,G,6,0),a(2,"button",0),h("click",function(){return s.resetTimer()}),u(3,"New"),c()),i&2){let m;R(0,(m=s.randomUser())?0:1,m),b(2),H("disabled",!s.randomUser())}},dependencies:[A],styles:["[_nghost-%COMP%]{flex-grow:1;display:flex;flex-flow:column;align-items:center;justify-content:center;gap:2rem}.text-block[_ngcontent-%COMP%]{display:flex;flex-flow:column;align-items:center;gap:.5rem}img[_ngcontent-%COMP%], .img-placeholder[_ngcontent-%COMP%]{width:128px;height:128px;border-radius:8px}@media (max-width: 400px){img[_ngcontent-%COMP%], .img-placeholder[_ngcontent-%COMP%]{width:72px;height:72px;border-radius:4px}}.img-placeholder[_ngcontent-%COMP%]{background-color:var(--disabled)}"],changeDetection:0});let t=e;return t})();export{ye as PeopleComponent};