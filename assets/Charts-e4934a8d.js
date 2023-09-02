import{C as j}from"./Widget1-168ae1e8.js";import{d as p,z as u,J as _,L as g,ac as y,ad as v,af as s,_ as b,r as c,o as m,f,k as i,p as d,n as w,I as x,F as D}from"./index-6eab465e.js";import"./assets-fbb44cfd.js";import"./Dropdown1-2be8c243.js";const P=p({name:"widget-1",props:{widgetClasses:String,height:Number},components:{},setup(){const t=u(null);let e={};const o=_(),a=[{name:"Net Profit",data:[44,55,57,56,61,58]},{name:"Revenue",data:[76,85,101,98,87,105]}],r=g(()=>o.mode);y(()=>{Object.assign(e,$())});const n=()=>{t.value&&(Object.assign(e,$()),t.value.refresh())};return v(r,()=>{n()}),{chart:e,series:a,chartRef:t}}}),$=()=>{const t=s("--bs-gray-500"),e=s("--bs-gray-200"),o=s("--bs-warning"),a=s("--bs-gray-300");return{chart:{fontFamily:"inherit",type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",borderRadius:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t,fontSize:"12px"}}},yaxis:{labels:{style:{colors:t,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(r){return"$"+r+" thousands"}}},colors:[o,a],grid:{borderColor:e,strokeDashArray:4,yaxis:{lines:{show:!0}}}}},B=x('<div class="card-header border-0 pt-5"><h3 class="card-title align-items-start flex-column"><span class="card-label fw-bold fs-3 mb-1">Recent Orders</span><span class="text-muted fw-semobold fs-7">More than 500 new orders</span></h3><div class="card-toolbar" data-kt-buttons="true"><a class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1" id="kt_charts_widget_2_year_btn">Year</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1" id="kt_charts_widget_2_month_btn">Month</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4" id="kt_charts_widget_2_week_btn">Week</a></div></div>',1),N={class:"card-body"};function T(t,e,o,a,r,n){const l=c("apexchart");return m(),f("div",{class:w([t.widgetClasses,"card"])},[B,i("div",N,[d(l,{ref:"chartRef",type:"bar",options:t.chart,series:t.series,height:t.height},null,8,["options","series","height"])])],2)}const Y=b(P,[["render",T]]),E=p({name:"widget-1",props:{widgetClasses:String},components:{},setup(){const t=u(null);let e={};const o=_(),a=[{name:"Net Profit",data:[30,40,40,90,90,70,70]}],r=g(()=>o.mode);y(()=>{Object.assign(e,M())});const n=()=>{t.value&&(Object.assign(e,M()),t.value.refresh())};return v(r,()=>{n()}),{chart:e,series:a,chartRef:t}}}),M=()=>{const t=s("--bs-gray-500"),e=s("--bs-gray-200"),o=s("--bs-info"),a=s("--bs-info-light");return{chart:{fontFamily:"inherit",type:"area",height:350,toolbar:{show:!1}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:3,colors:[o]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul","Aug"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t,fontSize:"12px"}},crosshairs:{position:"front",stroke:{color:o,width:1,dashArray:3}},tooltip:{enabled:!1}},yaxis:{labels:{style:{colors:t,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(r){return"$"+r+" thousands"}}},colors:[a],grid:{borderColor:e,strokeDashArray:4,yaxis:{lines:{show:!0}}},markers:{strokeColors:o,strokeWidth:3}}},V=x('<div class="card-header border-0 pt-5"><h3 class="card-title align-items-start flex-column"><span class="card-label fw-bold fs-3 mb-1">Recent Transactions</span><span class="text-muted fw-semobold fs-7">More than 1000 new records</span></h3><div class="card-toolbar" data-kt-buttons="true"><a class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1" id="kt_charts_widget_3_year_btn">Year</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1" id="kt_charts_widget_3_month_btn">Month</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4" id="kt_charts_widget_3_week_btn">Week</a></div></div>',1),I={class:"card-body"};function U(t,e,o,a,r,n){const l=c("apexchart");return m(),f("div",{class:w([t.widgetClasses,"card"])},[V,i("div",I,[d(l,{ref:"chartRef",type:"area",options:t.chart,series:t.series},null,8,["options","series"])])],2)}const q=b(E,[["render",U]]),G=p({name:"widget-1",props:{widgetClasses:String},components:{},setup(){const t=u(null);let e={};const o=_(),a=[{name:"Net Profit",data:[60,50,80,40,100,60]},{name:"Revenue",data:[70,60,110,40,50,70]}],r=g(()=>o.mode);y(()=>{Object.assign(e,S())});const n=()=>{t.value&&(Object.assign(e,S()),t.value.refresh())};return v(r,()=>{n()}),{chart:e,series:a,chartRef:t}}}),S=()=>{const t=s("--bs-gray-500"),e=s("--bs-gray-200"),o=s("--bs-success"),a=s("--bs-success-light"),r=s("--bs-warning"),n=s("--bs-warning-light");return{chart:{fontFamily:"inherit",type:"area",height:350,toolbar:{show:!1}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth"},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t,fontSize:"12px"}},crosshairs:{position:"front",stroke:{color:t,width:1,dashArray:3}},tooltip:{enabled:!1}},yaxis:{labels:{style:{colors:t,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(l){return"$"+l+" thousands"}}},colors:[o,r],grid:{borderColor:e,strokeDashArray:4,yaxis:{lines:{show:!0}}},markers:{colors:[a,n],strokeColors:[a,n],strokeWidth:3}}},H=x('<div class="card-header border-0 pt-5"><h3 class="card-title align-items-start flex-column"><span class="card-label fw-bold fs-3 mb-1">Recent Customers</span><span class="text-muted fw-semobold fs-7">More than 500 new customers</span></h3><div class="card-toolbar" data-kt-buttons="true"><a class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1" id="kt_charts_widget_4_year_btn">Year</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1" id="kt_charts_widget_4_month_btn">Month</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4" id="kt_charts_widget_4_week_btn">Week</a></div></div>',1),K={class:"card-body"};function Q(t,e,o,a,r,n){const l=c("apexchart");return m(),f("div",{class:w([t.widgetClasses,"card"])},[H,i("div",K,[d(l,{ref:"chartRef",type:"area",options:t.chart,series:t.series},null,8,["options","series"])])],2)}const X=b(G,[["render",Q]]),Z=p({name:"widget-1",props:{widgetClasses:String},components:{},setup(){const t=u(null);let e={};const o=_(),a=[{name:"Net Profit",data:[40,50,65,70,50,30]},{name:"Revenue",data:[-30,-40,-55,-60,-40,-20]}],r=g(()=>o.mode);y(()=>{Object.assign(e,W())});const n=()=>{t.value&&(Object.assign(e,W()),t.value.refresh())};return v(r,()=>{n()}),{chart:e,series:a,chartRef:t}}}),W=()=>{const t=s("--bs-gray-500"),e=s("--bs-gray-200"),o=s("--bs-primary"),a=s("--bs-info");return{chart:{fontFamily:"inherit",type:"bar",stacked:!0,height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"12%",borderRadius:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t,fontSize:"12px"}}},yaxis:{min:-80,max:80,labels:{style:{colors:t,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(r){return"$"+r+" thousands"}}},colors:[o,a],grid:{borderColor:e,strokeDashArray:4,yaxis:{lines:{show:!0}}}}},tt=x('<div class="card-header border-0 pt-5"><h3 class="card-title align-items-start flex-column"><span class="card-label fw-bold fs-3 mb-1">Recent Customers</span><span class="text-muted fw-semobold fs-7">More than 500 new customers</span></h3><div class="card-toolbar" data-kt-buttons="true"><a class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1" id="kt_charts_widget_5_year_btn">Year</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1" id="kt_charts_widget_5_month_btn">Month</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4" id="kt_charts_widget_5_week_btn">Week</a></div></div>',1),et={class:"card-body"};function st(t,e,o,a,r,n){const l=c("apexchart");return m(),f("div",{class:w([t.widgetClasses,"card"])},[tt,i("div",et,[d(l,{ref:"chartRef",type:"bar",options:t.chart,series:t.series},null,8,["options","series"])])],2)}const at=b(Z,[["render",st]]),ot=p({name:"widget-1",props:{widgetClasses:String},components:{},setup(){const t=u(null);let e={};const o=_(),a=[{name:"Net Profit",type:"bar",stacked:!0,data:[40,50,65,70,50,30]},{name:"Revenue",type:"bar",stacked:!0,data:[20,20,25,30,30,20]},{name:"Expenses",type:"area",data:[50,80,60,90,50,70]}],r=g(()=>o.mode);y(()=>{Object.assign(e,O())});const n=()=>{t.value&&(Object.assign(e,O()),t.value.refresh())};return v(r,()=>{n()}),{chart:e,series:a,chartRef:t}}}),O=()=>{const t=s("--bs-gray-500"),e=s("--bs-gray-200"),o=s("--bs-primary"),a=s("--bs-primary-light"),r=s("--bs-info");return{chart:{fontFamily:"inherit",stacked:!0,height:350,toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,borderRadius:5,columnWidth:"12%"}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{curve:"smooth",show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:t,fontSize:"12px"}}},yaxis:{max:120,labels:{style:{colors:t,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(n){return"$"+n+" thousands"}}},colors:[o,r,a],grid:{borderColor:e,strokeDashArray:4,yaxis:{lines:{show:!0}},padding:{top:0,right:0,bottom:0,left:0}}}},rt=x('<div class="card-header border-0 pt-5"><h3 class="card-title align-items-start flex-column"><span class="card-label fw-bold fs-3 mb-1">Recent Orders</span><span class="text-muted fw-semobold fs-7">More than 500+ new orders</span></h3><div class="card-toolbar" data-kt-buttons="true"><a class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1" id="kt_charts_widget_6_sales_btn">Sales</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1" id="kt_charts_widget_6_expenses_btn">Expenses</a></div></div>',1),nt={class:"card-body"};function lt(t,e,o,a,r,n){const l=c("apexchart");return m(),f("div",{class:w([t.widgetClasses,"card"])},[rt,i("div",nt,[d(l,{ref:"chartRef",type:"bar",options:t.chart,series:t.series},null,8,["options","series"])])],2)}const it=b(ot,[["render",lt]]),ct=p({name:"widget-1",props:{widgetClasses:String},components:{},setup(){const t=u(null);let e={};const o=_(),a=[{name:"Net Profit",data:[30,30,50,50,35,35]},{name:"Revenue",data:[55,20,20,20,70,70]},{name:"Expenses",data:[60,60,40,40,30,30]}],r=g(()=>o.mode);y(()=>{Object.assign(e,R())});const n=()=>{t.value&&(Object.assign(e,R()),t.value.refresh())};return v(r,()=>{n()}),{chart:e,series:a,chartRef:t}}}),R=()=>{const t=s("--bs-gray-500"),e=s("--bs-gray-200"),o=s("--bs-gray-300"),a=s("--bs-warning"),r=s("--bs-warning-light"),n=s("--bs-success"),l=s("--bs-success-light"),h=s("--bs-primary"),k=s("--bs-primary-light");return{chart:{fontFamily:"inherit",type:"area",toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:2,colors:[a,"transparent","transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:t,fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:o,width:1,dashArray:3}},tooltip:{enabled:!1}},yaxis:{labels:{show:!1,style:{colors:t,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(C){return"$"+C+" thousands"}}},colors:[a,n,h],grid:{borderColor:e,strokeDashArray:4,yaxis:{lines:{show:!0}}},markers:{colors:[r,l,k],strokeColors:[a,n,h],strokeWidth:3}}},dt=x('<div class="card-header border-0 pt-5"><h3 class="card-title align-items-start flex-column"><span class="card-label fw-bold fs-3 mb-1">Recent Users</span><span class="text-muted fw-semobold fs-7">More than 500 new users</span></h3><div class="card-toolbar" data-kt-buttons="true"><a class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1" id="kt_charts_widget_7_year_btn">Year</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1" id="kt_charts_widget_7_month_btn">Month</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4" id="kt_charts_widget_7_week_btn">Week</a></div></div>',1),ht={class:"card-body"};function pt(t,e,o,a,r,n){const l=c("apexchart");return m(),f("div",{class:w([t.widgetClasses,"card"])},[dt,i("div",ht,[d(l,{ref:"chartRef",type:"area",options:t.chart,series:t.series},null,8,["options","series"])])],2)}const bt=b(ct,[["render",pt]]),mt=p({name:"widget-1",props:{widgetClasses:String},components:{},setup(){const t=u(null);let e={};const o=_(),a=[{name:"Net Profit",data:[30,30,50,50,35,35]},{name:"Revenue",data:[55,20,20,20,70,70]},{name:"Expenses",data:[60,60,40,40,30,30]}],r=g(()=>o.mode);y(()=>{Object.assign(e,z())});const n=()=>{t.value&&(Object.assign(e,z()),t.value.refresh())};return v(r,()=>{n()}),{chart:e,series:a,chartRef:t}}}),z=()=>{const t=s("--bs-gray-500"),e=s("--bs-gray-200"),o=s("--bs-gray-300"),a=s("--bs-warning"),r=s("--bs-warning-light"),n=s("--bs-success"),l=s("--bs-success-light"),h=s("--bs-primary"),k=s("--bs-primary-light");return{chart:{fontFamily:"inherit",type:"area",toolbar:{show:!1},zoom:{enabled:!1},sparkline:{enabled:!0}},plotOptions:{},legend:{show:!1},dataLabels:{enabled:!1},fill:{type:"solid",opacity:1},stroke:{curve:"smooth",show:!0,width:2,colors:[a,n,h]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{show:!1,style:{colors:t,fontSize:"12px"}},crosshairs:{show:!1,position:"front",stroke:{color:o,width:1,dashArray:3}},tooltip:{enabled:!1}},yaxis:{labels:{show:!1,style:{colors:t,fontSize:"12px"}}},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(C){return"$"+C+" thousands"}}},colors:[r,l,k],grid:{borderColor:e,strokeDashArray:4,padding:{top:0,bottom:0,left:0,right:0}},markers:{colors:[a,n,h],strokeColors:[a,n,h],strokeWidth:3}}},ft=x('<div class="card-header border-0 pt-5"><h3 class="card-title align-items-start flex-column"><span class="card-label fw-bold fs-3 mb-1">Recent Orders</span><span class="text-muted fw-semobold fs-7">More than 500 new orders</span></h3><div class="card-toolbar" data-kt-buttons="true"><a class="btn btn-sm btn-color-muted btn-active btn-active-primary active px-4 me-1" id="kt_charts_widget_8_year_btn">Year</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4 me-1" id="kt_charts_widget_8_month_btn">Month</a><a class="btn btn-sm btn-color-muted btn-active btn-active-primary px-4" id="kt_charts_widget_8_week_btn">Week</a></div></div>',1),ut={class:"card-body"};function _t(t,e,o,a,r,n){const l=c("apexchart");return m(),f("div",{class:w([t.widgetClasses,"card"])},[ft,i("div",ut,[d(l,{ref:"chartRef",type:"area",options:t.chart,series:t.series},null,8,["options","series"])])],2)}const gt=b(mt,[["render",_t]]),yt=p({name:"widgets-chart",components:{ChartsWidget1:j,ChartsWidget2:Y,ChartsWidget3:q,ChartsWidget4:X,ChartsWidget5:at,ChartsWidget6:it,ChartsWidget7:bt,ChartsWidget8:gt}}),vt={class:"row g-5 g-xl-8"},wt={class:"col-xl-6"},xt={class:"col-xl-6"},kt={class:"row g-5 g-xl-8"},Ct={class:"col-xl-6"},$t={class:"col-xl-6"},Mt={class:"row g-5 g-xl-8"},St={class:"col-xl-6"},Wt={class:"col-xl-6"},Ot={class:"row g-5 g-xl-8"},Rt={class:"col-xl-6"},zt={class:"col-xl-6"};function At(t,e,o,a,r,n){const l=c("ChartsWidget1"),h=c("ChartsWidget2"),k=c("ChartsWidget3"),C=c("ChartsWidget4"),A=c("ChartsWidget5"),L=c("ChartsWidget6"),F=c("ChartsWidget7"),J=c("ChartsWidget8");return m(),f(D,null,[i("div",vt,[i("div",wt,[d(l,{"widget-classes":"card-xl-stretch mb-xl-8",height:400})]),i("div",xt,[d(h,{"widget-classes":"card-xl-stretch mb-xl-8",height:400})])]),i("div",kt,[i("div",Ct,[d(k,{"widget-classes":"card-xl-stretch mb-xl-8"})]),i("div",$t,[d(C,{"widget-classes":"card-xl-stretch mb-xl-8"})])]),i("div",Mt,[i("div",St,[d(A,{"widget-classes":"card-xl-stretch mb-xl-8"})]),i("div",Wt,[d(L,{"widget-classes":"card-xl-stretch mb-xl-8"})])]),i("div",Ot,[i("div",Rt,[d(F,{"widget-classes":"card-xl-stretch mb-xl-8"})]),i("div",zt,[d(J,{"widget-classes":"card-xl-stretch mb-xl-8"})])])],64)}const Dt=b(yt,[["render",At]]);export{Dt as default};
