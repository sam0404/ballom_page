System.register("chunks:///_virtual/BalloonBackgroundComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,n,o,r,i,a,s,p,l,c,u;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,s=t.Animation,p=t.Sprite,l=t.SpriteFrame,c=t.math,u=t.Component}],execute:function(){var m,h,d,g,f,y,B;i._RF.push({},"d985ch8lIJI9K66uoE7ywzu","BalloonBackgroundComponent",void 0);var C=a.ccclass,v=a.property,k=a.requireComponent;t("BalloonBackgroundComponent",(m=C("BalloonBackgroundComponent"),h=k(s),d=k(p),g=v([l]),m(f=h(f=d((B=e((y=function(t){function e(){for(var e,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return(e=t.call.apply(t,[this].concat(i))||this).speedAnimation=.5,o(e,"sprites",B,r(e)),e}return n(e,t),e.prototype.start=function(){this.speedAnimation=c.clamp(1.5*Math.random(),.1,1.5);var t=this.node.getComponent(p);this.sprites.length>0&&(t.spriteFrame=this.sprites[Math.ceil(10*c.random())%this.sprites.length]);var e=this.node.getComponent(s);e.getState(e.defaultClip.name).speed=this.speedAnimation},e}(u)).prototype,"sprites",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),f=y))||f)||f)||f));i._RF.pop()}}}));

System.register("chunks:///_virtual/BalloonComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GlobalEvent.ts"],(function(o){"use strict";var t,i,n,e,s,l,h,r,a;return{setters:[function(o){t=o.inheritsLoose,i=o.createClass},function(o){n=o.cclegacy,e=o._decorator,s=o.UITransform,l=o.math,h=o.Node,r=o.Component},function(o){a=o.GlobalEvent}],execute:function(){var d;n._RF.push({},"e179aJfl+BLJJGFQl1NXISv","BalloonComponent",void 0);var c=e.ccclass,p=(e.property,e.requireComponent);o("BalloonComponent",c("BalloonComponent")(d=p(s)(d=function(o){function n(){for(var t,i=arguments.length,n=new Array(i),e=0;e<i;e++)n[e]=arguments[e];return(t=o.call.apply(o,[this].concat(n))||this)._speed=void 0,t._halfHeight=void 0,t._worldPosition=void 0,t._isInited=!1,t._position=void 0,t}t(n,o);var e=n.prototype;return e.init=function(o){var t=this.node.getComponent(s);this._halfHeight=t.height/2,this.node.worldPosition=o,this._worldPosition=this.node.worldPosition.y-this._halfHeight,this._speed=l.clamp(300*Math.random(),100,300),this.node.once(h.EventType.TOUCH_START,this.onBoomBallon,this),a.on("GAME_OVER",this.offBoomBallon,this),this.node.active=!0,this._isInited=!0},e.update=function(o){if(this._isInited){var t=this.node.position.clone();t.y+=this._speed*o,this.node.position=t,this._worldPosition=this.node.worldPosition.y-this._halfHeight,this._position=this.node.worldPosition.clone()}},e.onBoomBallon=function(){a.emit("BALLOON_PUT",this),a.emit("SCORE_CHANGED")},e.offBoomBallon=function(){a.emit("BALLOON_PUT",this,!1),this.node.off(h.EventType.TOUCH_START,this.onBoomBallon,this)},e.onDisable=function(){this._isInited=!1},i(n,[{key:"bottomWorldPosition",get:function(){return this._worldPosition}},{key:"worldPosition",get:function(){return this._position}}]),n}(r))||d)||d);n._RF.pop()}}}));

System.register("chunks:///_virtual/BalloonManagerComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GlobalEvent.ts","./BalloonComponent.ts"],(function(o){"use strict";var t,n,e,i,a,l,s,r,c,h,u,p,f,P,m;return{setters:[function(o){t=o.applyDecoratedDescriptor,n=o.inheritsLoose,e=o.initializerDefineProperty,i=o.assertThisInitialized},function(o){a=o.cclegacy,l=o._decorator,s=o.Prefab,r=o.Node,c=o.NodePool,h=o.instantiate,u=o.math,p=o.Vec3,f=o.Component},function(o){P=o.GlobalEvent},function(o){m=o.BalloonComponent}],execute:function(){var v,b,B,d,g,y,T;a._RF.push({},"b0cf1veXEpGJ5I+q3BsS04+","BalloonManagerComponent",void 0);var E=l.ccclass,M=l.property;o("BalloonManagerComponent",(v=E("BalloonManagerComponent"),b=M(s),B=M([r]),v((y=t((g=function(o){function t(){for(var t,n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return t=o.call.apply(o,[this].concat(a))||this,e(t,"balloonPrefab",y,i(t)),e(t,"generatePoints",T,i(t)),t.balloonPool=void 0,t.intervalTime=void 0,t.activeBalloons=[],t.isPlay=!1,t}n(t,o);var a=t.prototype;return a.start=function(){this.initPool(),this.setTimeInterval(),P.on("BALLOON_PUT",this.onBoom,this),P.on("GAME_STARTED",this.onPlay,this),P.on("GAME_RESTARTED",this.onRestart,this)},a.update=function(o){var t=this;this.isPlay&&(this.intervalTime-=o,this.intervalTime<=0&&(this.setTimeInterval(),this.createBallon()),this.activeBalloons.forEach((function(o,n){t.node.worldPosition.y<o.bottomWorldPosition&&(t.isPlay=!1,t.putBalloon(o),t.activeBalloons.splice(n,1),P.emit("GAME_OVER"))})))},a.createBallon=function(){var o=this.getBalloonComponent();o.node.setParent(this.node),o.init(this.generatePoints[Math.ceil(4*Math.random())%this.generatePoints.length].worldPosition),this.activeBalloons.push(o)},a.initPool=function(){this.balloonPool=new c;for(var o=0;o<10;o++)this.balloonPool.put(h(this.balloonPrefab))},a.setTimeInterval=function(){this.intervalTime=u.clamp(4*Math.random(),1,4)},a.onRestart=function(){this.setTimeInterval()},a.getBalloonComponent=function(){var o=this.balloonPool.get();return o||(o=h(this.balloonPrefab)),o.getComponent(m)},a.onPlay=function(){this.isPlay=!0},a.onBoom=function(o,t){void 0===t&&(t=!0),t&&this.createBallon(),this.putBalloon(o)},a.putBalloon=function(o){o&&(o.node.scale=p.ONE,o.node.position=p.ZERO,o.node.active=!1,this.balloonPool.put(o.node))},a.onDisable=function(){P.off("BALLOON_PUT",this.onBoom,this),P.off("GAME_STARTED",this.onPlay,this),this.isPlay=!1},t}(f)).prototype,"balloonPrefab",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=t(g.prototype,"generatePoints",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),d=g))||d));a._RF.pop()}}}));

System.register("chunks:///_virtual/CommonData.ts",["cc"],(function(t){"use strict";var c,o;return{setters:[function(t){c=t.cclegacy,o=t._decorator}],execute:function(){var n,e;c._RF.push({},"0797ag3sM9FiYXNW4DAwO6Y","CommonData",void 0);var r=o.ccclass;t("CommonData",r("CommonData")(((e=function(){function t(){}return t.resetScore=function(){this.score=0},t}()).score=0,n=e))||n);c._RF.pop()}}}));

System.register("chunks:///_virtual/EffectPoolComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GlobalEvent.ts"],(function(t){"use strict";var e,o,n,i,r,f,c,a,s,l,u,p;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,f=t._decorator,c=t.Prefab,a=t.NodePool,s=t.instantiate,l=t.ParticleSystem2D,u=t.Component},function(t){p=t.GlobalEvent}],execute:function(){var P,h,v,d,b;r._RF.push({},"5fde5DBRQBDpJaqga/l5s4v","EffectPoolComponent",void 0);var g=f.ccclass,y=f.property;t("EffectPoolComponent",(P=g("EffectPoolComponent"),h=y(c),P((b=e((d=function(t){function e(){for(var e,o=arguments.length,r=new Array(o),f=0;f<o;f++)r[f]=arguments[f];return e=t.call.apply(t,[this].concat(r))||this,n(e,"effectPrefab",b,i(e)),e.effectPool=void 0,e}o(e,t);var r=e.prototype;return r.start=function(){this.initPool(),p.on("BALLOON_PUT",this.show,this)},r.initPool=function(){this.effectPool=new a;for(var t=0;t<5;t++)this.effectPool.put(s(this.effectPrefab))},r.show=function(t){var e=this.getEffect();e.node.active=!0,e.node.setParent(this.node),e.node.worldPosition=t.worldPosition},r.getEffect=function(){var t=this.effectPool.get();return t||(t=s(this.effectPrefab)),t.getComponent(l)},e}(u)).prototype,"effectPrefab",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=d))||v));r._RF.pop()}}}));

System.register("chunks:///_virtual/EffectSoundPoolComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GlobalEvent.ts"],(function(o){"use strict";var t,n,e,i,r,l,u,a,c,s,p,f,d;return{setters:[function(o){t=o.applyDecoratedDescriptor,n=o.inheritsLoose,e=o.initializerDefineProperty,i=o.assertThisInitialized},function(o){r=o.cclegacy,l=o._decorator,u=o.AudioClip,a=o.Prefab,c=o.NodePool,s=o.instantiate,p=o.AudioSource,f=o.Component},function(o){d=o.GlobalEvent}],execute:function(){var h,P,b,v,m,y,C,g,S;r._RF.push({},"aa2dakjPohEnoezw0LpTlcz","EffectSoundPoolComponent",void 0);var A=l.ccclass,z=l.property;o("EffectSoundPoolComponent",(h=A("EffectSoundPoolComponent"),P=z(u),b=z(u),v=z(a),h((C=t((y=function(o){function t(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=o.call.apply(o,[this].concat(r))||this,e(t,"boomClip",C,i(t)),e(t,"pfClip",g,i(t)),e(t,"soundPrefab",S,i(t)),t.soundPool=void 0,t}n(t,o);var r=t.prototype;return r.start=function(){this.initPool(),d.on("BALLOON_PUT",this.onPlaySound,this)},r.initPool=function(){this.soundPool=new c;for(var o=0;o<8;o++)this.soundPool.put(s(this.soundPrefab))},r.onPlaySound=function(o,t){var n=this;void 0===t&&(t=!0);var e=this.getAudioSource();e.clip=Math.ceil(1993*Math.random())%2==0?this.boomClip:this.pfClip,t&&e.play(),this.scheduleOnce((function(){n.putAudioSource(e)}),e.clip.getDuration())},r.getAudioSource=function(){var o=this.soundPool.get();return o||(o=s(this.soundPrefab)),o.getComponent(p)},r.putAudioSource=function(o){o&&(o.clip=null,this.soundPool.put(o.node))},t}(f)).prototype,"boomClip",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=t(y.prototype,"pfClip",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=t(y.prototype,"soundPrefab",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=y))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/EventName.ts",["cc"],(function(E){"use strict";var e;return{setters:[function(E){e=E.cclegacy}],execute:function(){var t;E("EventName",void 0),e._RF.push({},"883f1ymzHJAyZdlQJ75bR+S","EventName",void 0),function(E){E[E.BALLOON_PUT=0]="BALLOON_PUT",E[E.SCORE_CHANGED=1]="SCORE_CHANGED",E[E.GAME_STARTED=2]="GAME_STARTED",E[E.GAME_RESTARTED=3]="GAME_RESTARTED",E[E.GAME_OVER=4]="GAME_OVER"}(t||(t=E("EventName",{}))),e._RF.pop()}}}));

System.register("chunks:///_virtual/GlobalEvent.ts",["cc"],(function(t){"use strict";var n,e,c;return{setters:[function(t){n=t.cclegacy,e=t._decorator,c=t.EventTarget}],execute:function(){var o,i;n._RF.push({},"1f1e8Vb6RxO5JSwliXcrkWG","GlobalEvent",void 0);var r=e.ccclass;t("GlobalEvent",r("GlobalEvent")(((i=function(){function t(){}return t.on=function(t,n,e,c){this._event.on(t,n,e,c)},t.once=function(t,n,e){this._event.once(t,n,e)},t.off=function(t,n,e){this._event.off(t,n,e)},t.emit=function(t,n,e){this._event.emit(t,n,e)},t}())._event=new c,o=i))||o);n._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./ResizeScreenComponent.ts","./BalloonBackgroundComponent.ts","./BalloonComponent.ts","./BalloonManagerComponent.ts","./CommonData.ts","./EffectPoolComponent.ts","./EffectSoundPoolComponent.ts","./UIPlayComponent.ts","./UIRecordComponent.ts","./UIScoreComponent.ts","./UIScrlollComponent.ts","./EventName.ts","./GlobalEvent.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null,null,null,null,null,null,null,null],execute:function(){}}}));

System.register("chunks:///_virtual/ResizeScreenComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var n,r,i,t,o,s,c,a,u,l;return{setters:[function(e){n=e.applyDecoratedDescriptor,r=e.inheritsLoose,i=e.initializerDefineProperty,t=e.assertThisInitialized},function(e){o=e.cclegacy,s=e._decorator,c=e.UITransform,a=e.screen,u=e.Size,l=e.Component}],execute:function(){var p,f,h,m,z;o._RF.push({},"974e0Zm14hA5KMqiF0tzwAo","ResizeScreenComponent",void 0);var d=s.ccclass,w=s.property;e("ResizeScreenComponent",(p=d("ResizeScreenComponent"),f=w(c),p((z=n((m=function(e){function n(){for(var n,r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];return n=e.call.apply(e,[this].concat(o))||this,i(n,"uiTransform",z,t(n)),n}r(n,e);var o=n.prototype;return o.start=function(){a.on("window-resize",this.resize,this)},o.resize=function(e,n){var r=this.node.worldPosition.clone();this.uiTransform.contentSize=new u(this.uiTransform.width,n<=200?180:.9*n),this.node.worldPosition=r},n}(l)).prototype,"uiTransform",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=m))||h));o._RF.pop()}}}));

System.register("chunks:///_virtual/UIPlayComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./GlobalEvent.ts"],(function(t){"use strict";var n,o,e,i,c;return{setters:[function(t){n=t.inheritsLoose},function(t){o=t.cclegacy,e=t._decorator,i=t.Component},function(t){c=t.GlobalEvent}],execute:function(){var r;o._RF.push({},"468f1PaTkBExbGTsfwSDpy0","UIPlayComponent",void 0);var s=e.ccclass;t("UIPlayComponent",s("UIPlayComponent")(r=function(t){function o(){return t.apply(this,arguments)||this}n(o,t);var e=o.prototype;return e.start=function(){var t=this;c.on("GAME_RESTARTED",(function(){t.node.active=!0}),this)},e.onPlay=function(){c.emit("GAME_STARTED"),this.node.active=!1},o}(i))||r);o._RF.pop()}}}));

System.register("chunks:///_virtual/UIRecordComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var r,t,o,n,i,a,c,l;return{setters:[function(e){r=e.applyDecoratedDescriptor,t=e.inheritsLoose,o=e.initializerDefineProperty,n=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,c=e.Label,l=e.Component}],execute:function(){var s,p,u,y,f,m,h;i._RF.push({},"14f2cRqExRBHZX7H8hMEYOo","UIRecordComponent",void 0);var d=a.ccclass,b=a.property;e("UIRecordComponent",(s=d("UIRecordComponent"),p=b(c),u=b(c),s((m=r((f=function(e){function r(){for(var r,t=arguments.length,i=new Array(t),a=0;a<t;a++)i[a]=arguments[a];return r=e.call.apply(e,[this].concat(i))||this,o(r,"playerName",m,n(r)),o(r,"score",h,n(r)),r}return t(r,e),r.prototype.setData=function(e,r){this.playerName.string=e,this.score.string=""+r},r}(l)).prototype,"playerName",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=r(f.prototype,"score",[u],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=f))||y));i._RF.pop()}}}));

System.register("chunks:///_virtual/UIScoreComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CommonData.ts","./GlobalEvent.ts"],(function(e){"use strict";var o,t,n,r,c,s,a;return{setters:[function(e){o=e.inheritsLoose},function(e){t=e.cclegacy,n=e._decorator,r=e.Label,c=e.Component},function(e){s=e.CommonData},function(e){a=e.GlobalEvent}],execute:function(){var i;t._RF.push({},"1f9c62cX9VAloFVS9F9aSsY","UIScoreComponent",void 0);var u=n.ccclass,l=(n.property,n.requireComponent);e("UIScoreComponent",u("UIScoreComponent")(i=l(r)(i=function(e){function t(){for(var o,t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(o=e.call.apply(e,[this].concat(n))||this)._scoreLabel=void 0,o}o(t,e);var n=t.prototype;return n.start=function(){this._scoreLabel=this.node.getComponent(r),this.updateLabel(),a.on("SCORE_CHANGED",this.scoreChanged,this),a.on("GAME_RESTARTED",this.resetScore,this)},n.changeScore=function(){s.score++},n.updateLabel=function(){this._scoreLabel.string=""+s.score},n.scoreChanged=function(){this.changeScore(),this.updateLabel()},n.resetScore=function(){s.score=0,this.updateLabel()},t}(c))||i)||i);t._RF.pop()}}}));

System.register("chunks:///_virtual/UIScrlollComponent.ts",["./rollupPluginModLoBabelHelpers.js","cc","./CommonData.ts","./GlobalEvent.ts","./UIRecordComponent.ts"],(function(t){"use strict";var e,n,o,i,r,a,s,c,l,d,h,u,p,f,m,b;return{setters:[function(t){e=t.applyDecoratedDescriptor,n=t.inheritsLoose,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){r=t.cclegacy,a=t._decorator,s=t.Prefab,c=t.EditBox,l=t.Layout,d=t.Node,h=t.sys,u=t.instantiate,p=t.Component},function(t){f=t.CommonData},function(t){m=t.GlobalEvent},function(t){b=t.UIRecordComponent}],execute:function(){var v,g,R,y,E,B,P,S,w,C,I,x,D;r._RF.push({},"c1ec1s3OFhPr6il6suZpYgP","UIScrlollComponent",void 0);var L=a.ccclass,T=a.property;t("UIScrlollComponent",(v=L("UIScrlollComponent"),g=T(s),R=T(c),y=T(l),E=T(d),B=T(d),v((w=e((S=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return e=t.call.apply(t,[this].concat(r))||this,o(e,"recordPrefab",w,i(e)),o(e,"nameBox",C,i(e)),o(e,"container",I,i(e)),o(e,"addButton",x,i(e)),o(e,"resetButton",D,i(e)),e.records=[],e}n(e,t);var r=e.prototype;return r.onLoad=function(){h.localStorage.clear(),this.hideRestart(),this.hideEditPanel(),this.node.active=!1,m.on("GAME_OVER",this.show,this)},r.show=function(){var t=this;this.node.active=!0;for(var e=this.container.node.children.length-1;e>=0;e--)this.container.node.children[e].destroy();var n=JSON.parse(h.localStorage.getItem("records"));n||(n=[]),this.records=[].concat(n),this.records=Object.values(this.records).sort((function(t,e){return e.score-t.score})),this.records.forEach((function(e){t.addRecordToList(e)})),this.showEditPanel(),this.hideRestart()},r.updateRecordList=function(){var t={name:this.nameBox.string,score:f.score};this.records.push(t),this.addRecordToList(t);for(var e=this.container.node.children[this.container.node.children.length-1],n=0,o=0;o<this.container.node.children.length;o++)if(+e.name>=+this.container.node.children[o].name){n=o;break}e.setSiblingIndex(n),h.localStorage.setItem("records",JSON.stringify(this.records)),this.showRestart(),this.hideEditPanel(),m.emit("GAME_RESTARTED")},r.onRestart=function(){this.node.active=!1,m.emit("GAME_RESTARTED")},r.showEditPanel=function(){this.addButton.active=!0,this.nameBox.node.active=!0,this.nameBox.string=""},r.hideEditPanel=function(){this.addButton.active=!1,this.nameBox.node.active=!1},r.showRestart=function(){this.resetButton.active=!0},r.hideRestart=function(){this.resetButton.active=!1},r.addRecordToList=function(t){var e=u(this.recordPrefab);e.name=""+t.score,e.setParent(this.container.node),e.getComponent(b).setData(t.name,t.score)},e}(p)).prototype,"recordPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),C=e(S.prototype,"nameBox",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=e(S.prototype,"container",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=e(S.prototype,"addButton",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=e(S.prototype,"resetButton",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=S))||P));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});