(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{267:function(t,e,n){var content=n(271);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("2aecea28",content,!0,{sourceMap:!1})},268:function(t,e,n){var content=n(273);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("5fbc8167",content,!0,{sourceMap:!1})},269:function(t,e,n){"use strict";n(57);var o=n(21),r={name:"VueLazyYoutubeVideo",props:{url:{type:String,required:!0,validator:function(t){return 1!==t.indexOf("https://www.youtube.com/watch?")}},alt:{type:String,default:"Video alternative image"},buttonLabel:{type:String,default:"Play video"},aspectRatio:{type:String,default:"16:9",validator:function(t){return/^\d+:\d+$/.test(t)}},previewImageSize:{type:String,default:"maxresdefault",validator:function(t){return-1!==["default","mqdefault","sddefault","hqdefault","maxresdefault"].indexOf(t)}}},data:function(){return{isVideoLoaded:!1}},computed:{id:function(){return/^https:\/\/www\.youtube\.com\/watch\?v=(.+)$/.exec(this.url)[1]},styleObj:function(){return{paddingBottom:this.getPaddingBottom()}}},methods:{generateURL:function(){return"https://www.youtube.com/embed/".concat(this.id).concat("?rel=0&showinfo=0&autoplay=1")},clickHandler:function(){this.isVideoLoaded=!0,this.$emit("videoLoaded")},getPaddingBottom:function(){var t=this.aspectRatio.split(":"),e=Object(o.a)(t,2),a=e[0],b=e[1];return"".concat(b/a*100,"%")}}},c=(n(270),n(28)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"y-video",on:{click:t.clickHandler}},[n("div",{staticClass:"y-video__inner",style:t.styleObj},[t.isVideoLoaded?n("iframe",{staticClass:"y-video__media",attrs:{src:t.generateURL(),allowfullscreen:"",allow:"autoplay"}}):[n("picture",[n("source",{attrs:{srcset:"https://i.ytimg.com/vi_webp/"+t.id+"/"+t.previewImageSize+".webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"y-video__media y-video__media--type--img",attrs:{src:"https://i.ytimg.com/vi/"+t.id+"/"+t.previewImageSize+".jpg",alt:t.alt}})]),t._v(" "),n("button",{staticClass:"y-video__button",attrs:{type:"button","aria-label":t.buttonLabel}},[n("svg",{attrs:{viewBox:"0 0 68 48",version:"1.1",width:"100%",height:"100%"}},[n("path",{staticClass:"y-video__button-shape",attrs:{d:"M66.5 7.7c-.8-2.9-2.5-5.4-5.4-6.2C55.8.1 34 0 34 0S12.2.1 6.9 1.6c-3 .7-4.6 3.2-5.4 6.1a89.6 89.6 0 0 0 0 32.5c.8 3 2.5 5.5 5.4 6.3C12.2 47.9 34 48 34 48s21.8-.1 27.1-1.6c3-.7 4.6-3.2 5.4-6.1C68 35 68 24 68 24s0-11-1.5-16.3z"}}),t._v(" "),n("path",{staticClass:"y-video__button-icon",attrs:{d:"M45 24L27 14v20"}})])])]],2)])}),[],!1,null,null,null);e.a=component.exports},270:function(t,e,n){"use strict";var o=n(267);n.n(o).a},271:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".y-video{background-color:#000;cursor:pointer}.y-video__inner{position:relative}.y-video__embed,.y-video__media{position:absolute;top:0;left:0;width:100%;height:100%;border-width:0}.y-video__media--type--img{-o-object-fit:cover;object-fit:cover}.y-video__button{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);border-width:0;background-color:transparent;width:68px;height:48px;padding:0;cursor:pointer}.y-video__button-shape{fill:#212121;fill-opacity:.8}.y-video__button-icon{fill:#fff}.y-video__button:focus{outline:0}.y-video:hover .y-video__button-shape,.y-video__button:focus .y-video__button-shape{fill:red;fill-opacity:1}",""])},272:function(t,e,n){"use strict";var o=n(268);n.n(o).a},273:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".menuBVmain[data-v-7df5acbb]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}.menuBVmain>a>span[data-v-7df5acbb]{margin:10px;padding:10px;border-radius:2px}.dt[data-v-7df5acbb]{display:inline}.mt[data-v-7df5acbb]{display:none}@media only screen and (max-width:768px){.dt[data-v-7df5acbb]{display:none}.mt[data-v-7df5acbb]{display:inline}}.v-tab--active[data-v-7df5acbb]{background:#216d01;color:#fff!important;font-weight:700}",""])},274:function(t,e,n){"use strict";t.exports=function(t,e){return"string"!=typeof(t=t.__esModule?t.default:t)?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)||e?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},275:function(t,e,n){t.exports=n.p+"img/eb0c6a5.png"},276:function(t,e,n){"use strict";var o={name:"menuBVmain"},r=(n(272),n(28)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("div",{staticClass:"menuBVmain container"},[n("nuxt-link",{attrs:{to:"/preschool-in-kolkata"}},[n("span",{staticClass:"nav-item v-tab"},[t._v(" Self Operated ILCs ")])]),t._v(" "),n("nuxt-link",{attrs:{to:"/franchise-operations"}},[n("span",{staticClass:"nav-item v-tab"},[t._v(" Franchise Operations ")])]),t._v(" "),n("nuxt-link",{attrs:{to:"/non-franchise-preschool"}},[n("span",{staticClass:"nav-item v-tab"},[t._v(" Non-Franchise Solutions ")])]),t._v(" "),n("nuxt-link",{attrs:{to:"/teacher-training"}},[n("span",{staticClass:"nav-item v-tab"},[t._v(" Online Education ")])]),t._v(" "),n("nuxt-link",{attrs:{to:"/jobs-for-teachers"}},[n("span",{staticClass:"nav-item v-tab"},[t._v(" Career Services ")])])],1)])}),[],!1,null,"7df5acbb",null);e.a=component.exports},298:function(t,e,n){var content=n(374);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("14e281c0",content,!0,{sourceMap:!1})},299:function(t,e,n){var content=n(376);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("489a1c15",content,!0,{sourceMap:!1})},373:function(t,e,n){"use strict";var o=n(298);n.n(o).a},374:function(t,e,n){e=t.exports=n(8)(!1);var o=n(274)(n(275));e.push([t.i,"section[data-v-901169dc]{padding:1em 0 0}.btn-beanstalk[data-v-901169dc]{background:#216d01;color:#fff}.title[data-v-901169dc]{font-size:2em;border-left:7px solid green;padding-left:.5em;margin:2em 0;font-weight:700;text-transform:uppercase}.content[data-v-901169dc]{padding:1em}.description[data-v-901169dc]{font-size:large;line-height:1.3}.row[data-v-901169dc]{-webkit-box-align:center;align-items:center}.divider[data-v-901169dc]{margin:8em 0}.videoBg[data-v-901169dc]{background-image:url("+o+");background-repeat:no-repeat;background-size:cover;padding:3em}",""])},375:function(t,e,n){"use strict";var o=n(299);n.n(o).a},376:function(t,e,n){(t.exports=n(8)(!1)).push([t.i,".v-tab--active[data-v-42e34bec]{background:#216d01;color:#fff!important;font-weight:700}",""])},464:function(t,e,n){"use strict";n.r(e);var o=n(276),r={name:"AppCareerService",components:{LazyYoutubeVideo:n(269).a}},c=(n(373),n(28)),d=n(52),l=n.n(d),v=n(257),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("section",{staticClass:"sectionBG1"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"mainTitle"},[this._v("Jobs For Teacher")]),this._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"content"},[e("p",{staticClass:"description"},[this._v("\n                        JFT is India’s first & the only dedicated job portal for school teachers and also a platform to connect them with\n                        schools, institutes & parents. The Beanstalk’s deep seated understanding of the world of early childhood education\n                        and the vast network of preschools and high schools that’s connected with The Beanstalk helps schools and potential\n                        job seekers join the dots.\n                    ")]),this._v(" "),e("a",{attrs:{href:"https://jobsforteachers.in/"}},[e("v-btn",{staticClass:"btnbeanGreen",attrs:{"x-large":""}},[this._v("Learn More ")])],1)])]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"videoBg"},[e("LazyYoutubeVideo",{attrs:{url:"https://www.youtube.com/watch?v=GQKJyclnPsA"}})],1)]),this._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"videoBg"},[e("LazyYoutubeVideo",{attrs:{url:"https://www.youtube.com/watch?v=4J_dt4BaEjU"}})],1)])])])])])}),[],!1,null,"901169dc",null),f=component.exports;l()(component,{VBtn:v.a});var h={components:{menuBVmain:o.a,AppCareerService:f},head:function(){return{title:"Assured Teacher Jobs in India | The Beanstalk",meta:[{hid:"description",name:"description",content:"Get Preschool Teacher Jobs with The Beanstalk. Get assured teacher jobs in our centers all over India."},{hid:"keywords",name:"keywords",content:"teacher jobs, preschool teacher jobs, kindergarten teacher jobs, play school teacher jobs, in Kolkata, Hyderabad, Pune, Bangalore"}],link:[{rel:"canonical",href:"https://beanstalkedu.com/jobs-for-teachers"}]}}},m=(n(375),Object(c.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"mtheader"},[e("h1",{staticClass:"mainTitle"},[this._v("Our Business Verticals")]),this._v(" "),e("menuBVmain"),this._v(" "),e("AppCareerService")],1)}),[],!1,null,"42e34bec",null));e.default=m.exports}}]);