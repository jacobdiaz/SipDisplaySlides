/*! For license information please see main.19e4f8d1.chunk.js.LICENSE.txt */
(this.webpackJsonpreact_test_imageslide=this.webpackJsonpreact_test_imageslide||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(9),i=n.n(a),s=n(16),r=n.n(s),c=(n(24),n(25),n(17)),o=n(10),u=n(11),d=n(8),l=n(19),h=n(18),m=n(13);n(31),n(26);m.a.initializeApp({apiKey:"AIzaSyCdhdVYsMBjF2ZQYK9i97v4xZCqBRhDob4",authDomain:"slidecreator-748a5.firebaseapp.com",databaseURL:"https://slidecreator-748a5.firebaseio.com",projectId:"slidecreator-748a5",storageBucket:"slidecreator-748a5.appspot.com",messagingSenderId:"500523622209",appId:"1:500523622209:web:f19e14cb84530e4904cbc0",measurementId:"G-C4JDKZ8Z1B"});var f=m.a,g=function(){function e(){Object(o.a)(this,e)}return Object(u.a)(e,[{key:"parse_query_string",value:function(e){for(var t=e.split("&"),n={},a=0;a<t.length;a++){var i=t[a].split("="),s=decodeURIComponent(i[0]),r=decodeURIComponent(i[1]);if("undefined"===typeof n[s])n[s]=decodeURIComponent(r);else if("string"===typeof n[s]){var c=[n[s],decodeURIComponent(r)];n[s]=c}else n[s].push(decodeURIComponent(r))}return n}},{key:"getModuleFromUrl",value:function(){var e=window.location.search.substring(1);return this.parse_query_string(e).module}}]),e}(),b=n(6),p=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={timer:null,slides:{},imageUrls:{},currentImageIndex:0},a.fetchFirebaseData=a.fetchFirebaseData.bind(Object(d.a)(a)),a.fetchtimer=a.fetchtimer.bind(Object(d.a)(a)),a.fetchSlides=a.fetchSlides.bind(Object(d.a)(a)),a.setImageUrls=a.setImageUrls.bind(Object(d.a)(a)),a.changeImage=a.changeImage.bind(Object(d.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.fetchFirebaseData()}},{key:"fetchFirebaseData",value:function(){var e=(new g).getModuleFromUrl();this.fetchtimer(e),this.fetchSlides(e)}},{key:"fetchtimer",value:function(e){var t=this;f.database().ref("Modules/Module".concat(e,"/Counter/")).once("value").then((function(e){if(e.exists()){var n=e.val().Counter;t.setState({timer:n})}else console.log("Snapshot not found")}))}},{key:"fetchSlides",value:function(e){var t=this;f.database().ref("Modules/Module"+e+"/Slides").orderByChild("position").once("value").then((function(e){e.exists()?(t.setState({slides:e.val()}),t.setImageUrls(),t.changeImage()):console.log("Snapshot not found")}))}},{key:"setImageUrls",value:function(){var e=[];Object.entries(this.state.slides).map((function(t){var n=Object(c.a)(t,2),a=(n[0],n[1]);return e.push(a.image)})),this.setState({imageUrls:e})}},{key:"changeImage",value:function(){var e=this.state,t=e.timer,n=e.currentImageIndex,a=e.imageUrls;document.slide.src=a[n],n<a.length-1?this.setState((function(e){return{currentImageIndex:e.currentImageIndex+1}})):this.setState({currentImageIndex:0}),setTimeout(function(){this.changeImage()}.bind(this),1e3*t)}},{key:"render",value:function(){return Object(b.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(b.jsx)("img",{name:"slide",height:"100%",alt:"slide"})})}}]),n}(a.Component);var v=function(){return Object(b.jsx)("div",{className:"App",style:{background:"black"},children:Object(b.jsx)(p,{})})},I=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),s(e),r(e)}))};r.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),I()}},[[30,1,2]]]);
//# sourceMappingURL=main.19e4f8d1.chunk.js.map