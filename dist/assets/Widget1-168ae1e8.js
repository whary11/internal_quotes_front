import{g as f}from"./assets-fbb44cfd.js";import{d as u,z as b,J as g,L as y,ac as _,ad as w,af as n,_ as v,r as l,o as C,f as x,k as t,p as c,n as k}from"./index-6eab465e.js";import{D as S}from"./Dropdown1-2be8c243.js";const z=u({name:"widget-1",props:{widgetClasses:String,height:Number},components:{Dropdown1:S},setup(){const e=b(null);let s={};const o=g(),a=[{name:"Net Profit",data:[44,55,57,56,61,58]},{name:"Revenue",data:[76,85,101,98,87,105]}],r=y(()=>o.mode);_(()=>{Object.assign(s,d())});const i=()=>{e.value&&(Object.assign(s,d()),e.value.refresh())};return w(r,()=>{i()}),{chart:s,series:a,chartRef:e,getAssetPath:f}}}),d=()=>{const e=n("--bs-gray-500"),s=n("--bs-gray-200"),o=n("--bs-primary"),a=n("--bs-gray-300");return{chart:{fontFamily:"inherit",type:"bar",toolbar:{show:!1}},plotOptions:{bar:{horizontal:!1,columnWidth:"30%",borderRadius:5}},legend:{show:!1},dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},xaxis:{categories:["Feb","Mar","Apr","May","Jun","Jul"],axisBorder:{show:!1},axisTicks:{show:!1},labels:{style:{colors:e,fontSize:"12px"}}},yaxis:{labels:{style:{colors:e,fontSize:"12px"}}},fill:{opacity:1},states:{normal:{filter:{type:"none",value:0}},hover:{filter:{type:"none",value:0}},active:{allowMultipleDataPointsSelection:!1,filter:{type:"none",value:0}}},tooltip:{style:{fontSize:"12px"},y:{formatter:function(r){return"$"+r+" thousands"}}},colors:[o,a],grid:{borderColor:s,strokeDashArray:4,yaxis:{lines:{show:!0}}}}},D={class:"card-header border-0 pt-5"},M=t("h3",{class:"card-title align-items-start flex-column"},[t("span",{class:"card-label fw-bold fs-3 mb-1"},"Recent Statistics"),t("span",{class:"text-muted fw-semobold fs-7"},"More than 400 new members")],-1),B={class:"card-toolbar"},R={type:"button",class:"btn btn-sm btn-icon btn-color-primary btn-active-light-primary","data-kt-menu-trigger":"click","data-kt-menu-placement":"bottom-end","data-kt-menu-flip":"top-end"},$={class:"card-body"};function N(e,s,o,a,r,i){const p=l("KTIcon"),h=l("Dropdown1"),m=l("apexchart");return C(),x("div",{class:k(["card",e.widgetClasses])},[t("div",D,[M,t("div",B,[t("button",R,[c(p,{"icon-name":"category","icon-class":"fs-2"})]),c(h)])]),t("div",$,[c(m,{ref:"chartRef",type:"bar",options:e.chart,series:e.series,height:e.height},null,8,["options","series","height"])])],2)}const A=v(z,[["render",N]]);export{A as C};
