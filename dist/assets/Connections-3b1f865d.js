import{g as d}from"./assets-fbb44cfd.js";import{d as m,_ as p,r as g,o,f as n,k as s,m as r,n as l,l as i,p as t,H as c,F as _,I as $}from"./index-6eab465e.js";const y=m({name:"card-3",components:{},props:{cardClasses:String,avatar:String,online:Boolean,initials:String,color:String,name:String,position:String,avgEarnings:String,totalSales:String,connected:Boolean},setup(){return{getAssetPath:d}}}),A={class:"col-md-6 col-xxl-4"},w={class:"card-body d-flex flex-center flex-column p-9"},x={key:0,class:"symbol symbol-65px symbol-circle mb-5"},C=["src"],S={key:0,class:"bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3"},P={key:1,class:"symbol symbol-65px symbol-circle mb-5"},N={key:0,class:"bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3"},k={href:"#",class:"fs-4 text-gray-800 text-hover-primary fw-bold mb-0"},D={class:"fw-semobold text-gray-400 mb-6"},j={class:"d-flex flex-center flex-wrap mb-5"},I={class:"border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"},L={class:"fs-6 fw-bold text-gray-700"},T=s("div",{class:"fw-semobold text-gray-400"},"Avg. Earnings",-1),B={class:"border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"},V={class:"fs-6 fw-bold text-gray-700"},W=s("div",{class:"fw-semobold text-gray-400"},"Total Sales",-1),E={key:2,href:"#",class:"btn btn-sm btn-light-primary"},K={key:3,href:"#",class:"btn btn-sm btn-light"};function O(e,v,f,u,b,h){const a=g("KTIcon");return o(),n("div",A,[s("div",{class:l(["card",e.cardClasses])},[s("div",w,[e.avatar?(o(),n("div",x,[s("img",{src:e.avatar,alt:"image"},null,8,C),e.online?(o(),n("div",S)):r("",!0)])):(o(),n("div",P,[s("span",{class:l([`text-${e.color} bg-light-${e.color}`,"symbol-label fs-2x fw-semobold"])},i(e.initials),3),e.online?(o(),n("div",N)):r("",!0)])),s("a",k,i(e.name),1),s("div",D,i(e.position),1),s("div",j,[s("div",I,[s("div",L,i(e.avgEarnings),1),T]),s("div",B,[s("div",V,i(e.totalSales),1),W])]),e.connected?(o(),n("a",E,[t(a,{"icon-name":"check","icon-class":"fs-3"}),c(" Connected ")])):(o(),n("a",K,[t(a,{"icon-name":"plus","icon-class":"fs-3"}),c(" Connect ")]))])],2)])}const M=p(y,[["render",O]]),F=m({name:"profile-connections",components:{Card3:M},setup(){return{getAssetPath:d}}}),J=$('<div class="d-flex flex-wrap flex-stack mb-6"><h3 class="fw-bold my-2"> My Connections <span class="fs-6 text-gray-400 fw-semobold ms-1">(29)</span></h3><div class="d-flex my-2"><select name="status" data-control="select2" data-hide-search="true" class="form-select form-select-white form-select-sm w-125px"><option value="Active" selected>Active</option><option value="Approved">In Progress</option><option value="Declined">To Do</option><option value="In Progress">Completed</option></select></div></div>',1),z={class:"row g-6 mb-6 g-xl-9 mb-xl-9"};function H(e,v,f,u,b,h){const a=g("Card3");return o(),n(_,null,[J,s("div",z,[t(a,{name:"Patric Watson",position:"Art Director at Novica Co.",online:!0,avatar:e.getAssetPath("media/avatars/300-11.jpg"),connected:!0,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(a,{name:"Olivia Larson",position:"Art Director at Seal Inc.",online:!1,avatar:e.getAssetPath("media/avatars/300-6.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(a,{name:"Adam Williams",position:"System Arcitect at Wolto Co.",online:!0,initials:"A",color:"warning",connected:!0,"avg-earnings":"$14,560","total-sales":"$236,400"}),t(a,{name:"Paul Marcus",position:"Art Director at Novica Co.",online:!0,initials:"P",color:"primary",connected:!0,"avg-earnings":"$14,560","total-sales":"$236,400"}),t(a,{name:"Neil Owen",position:"Accountant at Numbers Co.",online:!1,initials:"N",color:"success",connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"}),t(a,{name:"Sean Paul",position:"Developer at Loop Inc",online:!0,initials:"S",color:"info",connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"}),t(a,{name:"Kitona Johnson",position:"Web Designer at Nextop Ltd.",online:!1,avatar:e.getAssetPath("media/avatars/300-1.jpg"),connected:!0,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(a,{name:"Robert Doe",position:"Marketing Analytic at Avito Ltd.",online:!1,avatar:e.getAssetPath("media/avatars/300-14.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(a,{name:"Soul Jacob",position:"Art Director at Novica Co.",online:!1,avatar:e.getAssetPath("media/avatars/300-12.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(a,{name:"Nina Strong",position:"CTO at Kilp Ltd.",online:!0,avatar:e.getAssetPath("media/avatars/300-7.jpg"),connected:!0,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(a,{name:"Patric Watson",position:"Art Director at Novica Co.",online:!0,avatar:e.getAssetPath("media/avatars/300-11.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"]),t(a,{name:"Olivia Larson",position:"Art Director at Seal Inc.",online:!1,avatar:e.getAssetPath("media/avatars/300-6.jpg"),connected:!1,"avg-earnings":"$14,560","total-sales":"$236,400"},null,8,["avatar"])])],64)}const G=p(F,[["render",H]]);export{G as default};
