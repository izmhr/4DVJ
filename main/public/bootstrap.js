!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n=window.webpackJsonp;window.webpackJsonp=function(r,a){for(var s,i,l=0,u=[];l<r.length;l++)i=r[l],o[i]&&u.push.apply(u,o[i]),o[i]=0;for(s in a)e[s]=a[s];for(n&&n(r,a);u.length;)u.shift().call(null,t)};var r={},o={0:0};return t.e=function(e,n){if(0===o[e])return n.call(null,t);if(void 0!==o[e])o[e].push(n);else{o[e]=[n];var r=document.getElementsByTagName("head")[0],a=document.createElement("script");a.type="text/javascript",a.charset="utf-8",a.async=!0,a.src=t.p+""+e+"."+({1:"app"}[e]||e)+".js",r.appendChild(a)}},t.m=e,t.c=r,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}var a=n(1),s=o(a),i=n(3),l=r(i),u=n(5),d=r(u);window.LoadingBar=l["default"],d["default"].canvas&&d["default"].webgl&&!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(console.time("load assets"),$.when(s.loadJSON("graphs","./data/graphs.json"),s.loadVideo("overlay_flash","./texture/overlay_flash.mp4"),s.loadVideo("overlay_flicker","./texture/overlay_flicker.mp4"),s.loadObj("dandruff_small_obj","./data/dandruff_small.obj"),s.loadObj("dandruff_large_obj","./data/dandruff_large.obj"),s.loadTexture("dandruff_small_tex","./texture/dandruff_small.png")).then(function(){console.timeEnd("load assets"),n(6)})):$("body").attr("data-state","unsupported")},function(e,t,n){"use strict";function r(e,t){i+=1;var n=new $.Deferred;return $.getJSON(t,function(t){window.assets[e]=t,l+=1,LoadingBar.update(l/i*u),n.resolve()}),n.promise()}function o(e,t){i+=1;var n=new $.Deferred,r=document.createElement("video");r.src=t+"?.jpg";var o=function a(){4==r.readyState?(window.assets[e]=r,l+=1,LoadingBar.update(l/i*u),n.resolve()):setTimeout(a,100)};return setTimeout(o,100),n.promise()}function a(e,t){i+=1;var n=new $.Deferred,r=new THREE.OBJLoader;return r.load(t,function(t){window.assets[e]=t,l+=1,LoadingBar.update(l/i*u),n.resolve()}),n.promise()}function s(e,t){i+=1;var n=$.Deferred(),r=new THREE.TextureLoader;return r.load(t,function(t){window.assets[e]=t,l+=1,LoadingBar.update(l/i*u),n.resolve()}),n.promise()}Object.defineProperty(t,"__esModule",{value:!0}),t.loadJSON=r,t.loadVideo=o,t.loadObj=a,t.loadTexture=s,n(2),window.assets={};var i=0,l=0,u=.2},function(e,t){THREE.OBJLoader=function(e){this.manager=void 0!==e?e:THREE.DefaultLoadingManager},THREE.OBJLoader.prototype={constructor:THREE.OBJLoader,load:function(e,t,n,r){var o=this,a=new THREE.XHRLoader(o.manager);a.setCrossOrigin(this.crossOrigin),a.load(e,function(e){t(o.parse(e))},n,r)},setCrossOrigin:function(e){this.crossOrigin=e},parse:function(e){function t(e){var t=parseInt(e);return 3*(t>=0?t-1:t+f.length/3)}function n(e){var t=parseInt(e);return 3*(t>=0?t-1:t+p.length/3)}function r(e){var t=parseInt(e);return 2*(t>=0?t-1:t+v.length/2)}function o(e,t,n){u.vertices.push(f[e],f[e+1],f[e+2],f[t],f[t+1],f[t+2],f[n],f[n+1],f[n+2])}function a(e,t,n){u.normals.push(p[e],p[e+1],p[e+2],p[t],p[t+1],p[t+2],p[n],p[n+1],p[n+2])}function s(e,t,n){u.uvs.push(v[e],v[e+1],v[t],v[t+1],v[n],v[n+1])}function i(e,i,l,u,d,c,f,p,v,h,g,m){var w,b=t(e),y=t(i),_=t(l);void 0===u?o(b,y,_):(w=t(u),o(b,y,w),o(y,_,w)),void 0!==d&&(b=r(d),y=r(c),_=r(f),void 0===u?s(b,y,_):(w=r(p),s(b,y,w),s(y,_,w))),void 0!==v&&(b=n(v),y=n(h),_=n(g),void 0===u?a(b,y,_):(w=n(m),a(b,y,w),a(y,_,w)))}var l,u,d,c=[];/^o /gm.test(e)===!1&&(u={vertices:[],normals:[],uvs:[]},d={name:""},l={name:"",geometry:u,material:d},c.push(l));for(var f=[],p=[],v=[],h=/v( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,g=/vn( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,m=/vt( +[\d|\.|\+|\-|e|E]+)( +[\d|\.|\+|\-|e|E]+)/,w=/f( +-?\d+)( +-?\d+)( +-?\d+)( +-?\d+)?/,b=/f( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+))?/,y=/f( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))( +(-?\d+)\/(-?\d+)\/(-?\d+))?/,_=/f( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))( +(-?\d+)\/\/(-?\d+))?/,x=e.split("\n"),E=0;E<x.length;E++){var O=x[E];O=O.trim();var L;0!==O.length&&"#"!==O.charAt(0)&&(null!==(L=h.exec(O))?f.push(parseFloat(L[1]),parseFloat(L[2]),parseFloat(L[3])):null!==(L=g.exec(O))?p.push(parseFloat(L[1]),parseFloat(L[2]),parseFloat(L[3])):null!==(L=m.exec(O))?v.push(parseFloat(L[1]),parseFloat(L[2])):null!==(L=w.exec(O))?i(L[1],L[2],L[3],L[4]):null!==(L=b.exec(O))?i(L[2],L[5],L[8],L[11],L[3],L[6],L[9],L[12]):null!==(L=y.exec(O))?i(L[2],L[6],L[10],L[14],L[3],L[7],L[11],L[15],L[4],L[8],L[12],L[16]):null!==(L=_.exec(O))?i(L[2],L[5],L[8],L[11],void 0,void 0,void 0,void 0,L[3],L[6],L[9],L[12]):/^o /.test(O)?(u={vertices:[],normals:[],uvs:[]},d={name:""},l={name:O.substring(2).trim(),geometry:u,material:d},c.push(l)):/^g /.test(O)||(/^usemtl /.test(O)?d.name=O.substring(7).trim():/^mtllib /.test(O)||/^s /.test(O)))}for(var j=new THREE.Object3D,E=0,T=c.length;T>E;E++){l=c[E],u=l.geometry;var R=new THREE.BufferGeometry;R.addAttribute("position",new THREE.BufferAttribute(new Float32Array(u.vertices),3)),u.normals.length>0&&R.addAttribute("normal",new THREE.BufferAttribute(new Float32Array(u.normals),3)),u.uvs.length>0&&R.addAttribute("uv",new THREE.BufferAttribute(new Float32Array(u.uvs),2)),d=new THREE.MeshLambertMaterial,d.name=l.material.name;var k=new THREE.Mesh(R,d);k.name=l.name,j.add(k)}return j}}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var l=n(4),u=r(l),d=function(e){function t(){o(this,t);var e=a(this,Object.getPrototypeOf(t).call(this));return e.$root=$(".loading"),e.$bar=$(".loading__bar"),e.$dot=$(".loading__dot"),e}return s(t,e),i(t,[{key:"update",value:function(e){var t=this,n=e;this.$bar.css("transform","scaleX("+n+")"),e>=1&&setTimeout(function(){t.emit("complete")},1e3)}},{key:"animate",value:function(){}}]),t}(u["default"]);t["default"]=new d},function(e,t,n){"use strict";function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function o(){}var a="function"!=typeof Object.create?"~":!1;o.prototype._events=void 0,o.prototype.listeners=function(e,t){var n=a?a+e:e,r=this._events&&this._events[n];if(t)return!!r;if(!r)return[];if(r.fn)return[r.fn];for(var o=0,s=r.length,i=new Array(s);s>o;o++)i[o]=r[o].fn;return i},o.prototype.emit=function(e,t,n,r,o,s){var i=a?a+e:e;if(!this._events||!this._events[i])return!1;var l,u,d=this._events[i],c=arguments.length;if("function"==typeof d.fn){switch(d.once&&this.removeListener(e,d.fn,void 0,!0),c){case 1:return d.fn.call(d.context),!0;case 2:return d.fn.call(d.context,t),!0;case 3:return d.fn.call(d.context,t,n),!0;case 4:return d.fn.call(d.context,t,n,r),!0;case 5:return d.fn.call(d.context,t,n,r,o),!0;case 6:return d.fn.call(d.context,t,n,r,o,s),!0}for(u=1,l=new Array(c-1);c>u;u++)l[u-1]=arguments[u];d.fn.apply(d.context,l)}else{var f,p=d.length;for(u=0;p>u;u++)switch(d[u].once&&this.removeListener(e,d[u].fn,void 0,!0),c){case 1:d[u].fn.call(d[u].context);break;case 2:d[u].fn.call(d[u].context,t);break;case 3:d[u].fn.call(d[u].context,t,n);break;default:if(!l)for(f=1,l=new Array(c-1);c>f;f++)l[f-1]=arguments[f];d[u].fn.apply(d[u].context,l)}}return!0},o.prototype.on=function(e,t,n){var o=new r(t,n||this),s=a?a+e:e;return this._events||(this._events=a?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],o]:this._events[s].push(o):this._events[s]=o,this},o.prototype.once=function(e,t,n){var o=new r(t,n||this,!0),s=a?a+e:e;return this._events||(this._events=a?{}:Object.create(null)),this._events[s]?this._events[s].fn?this._events[s]=[this._events[s],o]:this._events[s].push(o):this._events[s]=o,this},o.prototype.removeListener=function(e,t,n,r){var o=a?a+e:e;if(!this._events||!this._events[o])return this;var s=this._events[o],i=[];if(t)if(s.fn)(s.fn!==t||r&&!s.once||n&&s.context!==n)&&i.push(s);else for(var l=0,u=s.length;u>l;l++)(s[l].fn!==t||r&&!s[l].once||n&&s[l].context!==n)&&i.push(s[l]);return i.length?this._events[o]=1===i.length?i[0]:i:delete this._events[o],this},o.prototype.removeAllListeners=function(e){return this._events?(e?delete this._events[a?a+e:e]:this._events=a?{}:Object.create(null),this):this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prototype.setMaxListeners=function(){return this},o.prefixed=a,e.exports=o},function(e,t,n){var r={canvas:!!window.CanvasRenderingContext2D,webgl:function(){try{var e=document.createElement("canvas");return!(!window.WebGLRenderingContext||!e.getContext("webgl")&&!e.getContext("experimental-webgl"))}catch(t){return!1}}(),workers:!!window.Worker,fileapi:window.File&&window.FileReader&&window.FileList&&window.Blob,getWebGLErrorMessage:function(){var e=document.createElement("div");return e.id="webgl-error-message",e.style.fontFamily="monospace",e.style.fontSize="13px",e.style.fontWeight="normal",e.style.textAlign="center",e.style.background="#fff",e.style.color="#000",e.style.padding="1.5em",e.style.width="400px",e.style.margin="5em auto 0",this.webgl||(e.innerHTML=window.WebGLRenderingContext?['Your graphics card does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br />','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n"):['Your browser does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">WebGL</a>.<br/>','Find out how to get it <a href="http://get.webgl.org/" style="color:#000">here</a>.'].join("\n")),e},addGetWebGLMessage:function(e){var t,n,o;e=e||{},t=void 0!==e.parent?e.parent:document.body,n=void 0!==e.id?e.id:"oldie",o=r.getWebGLErrorMessage(),o.id=n,t.appendChild(o)}};e.exports=r},function(e,t,n){var r,o=[];e.exports=function(e){o?o.push(e):e(r)},n.e(1,function(e){r=n(7);var t=o;o=null;for(var a=0,s=t.length;s>a;a++)t[a](r)})}]);