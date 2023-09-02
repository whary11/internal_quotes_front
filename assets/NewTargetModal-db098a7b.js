import{g as T}from"./assets-fbb44cfd.js";import{h as x}from"./dom-e989470c.js";import{S as v}from"./sweetalert2-446d02c0.js";import{d as V,z as c,_ as S,r,o as f,f as g,k as e,p as t,w as l,H as i,m as w,am as A}from"./index-6eab465e.js";const N=V({name:"new-target-modal",components:{},setup(){const a=c(null),s=c(null),m=c(!1),p=c({targetTitle:"",assign:"",dueDate:"",targetDetails:"",tags:["important","urgent"]}),b=c({targetTitle:[{required:!0,message:"Please input Activity name",trigger:"blur"}],assign:[{required:!0,message:"Please select Activity zone",trigger:"change"}],dueDate:[{required:!0,message:"Please select Activity zone",trigger:"change"}],tags:[{required:!0,message:"Please select Activity zone",trigger:"change"}]});return{targetData:p,submit:()=>{a.value&&a.value.validate(u=>{if(u)m.value=!0,setTimeout(()=>{m.value=!1,v.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{x(s.value)})},2e3);else return v.fire({text:"Sorry, looks like there are some errors detected, please try again.",icon:"error",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}),!1})},loading:m,formRef:a,rules:b,newTargetModalRef:s,getAssetPath:T}}});const C={class:"modal fade",id:"kt_modal_new_target",ref:"newTargetModalRef",tabindex:"-1","aria-hidden":"true"},M={class:"modal-dialog modal-dialog-centered mw-650px"},B={class:"modal-content rounded"},P={class:"modal-header pb-0 border-0 justify-content-end"},q={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},U={class:"modal-body scroll-y px-10 px-lg-15 pt-0 pb-15"},K=e("div",{class:"mb-13 text-center"},[e("h1",{class:"mb-3"},"Set First Target"),e("div",{class:"text-gray-400 fw-semobold fs-5"},[i(" If you need more info, please check "),e("a",{href:"#",class:"fw-bold link-primary"},"Project Guidelines"),i(". ")])],-1),O={class:"d-flex flex-column mb-8 fv-row"},R=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"Target Title"),e("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Specify a target name for future usage and reference"})],-1),I={class:"row g-9 mb-8"},$={class:"col-md-6 fv-row"},z=e("label",{class:"required fs-6 fw-semobold mb-2"},"Assign",-1),E={class:"col-md-6 fv-row"},j=e("label",{class:"required fs-6 fw-semobold mb-2"},"Due Date",-1),F={class:"position-relative align-items-center"},H={class:"d-flex flex-column mb-8"},W=e("label",{class:"fs-6 fw-semobold mb-2"},"Target Details",-1),G={class:"d-flex flex-column mb-8 fv-row"},L=e("label",{class:"d-flex align-items-center fs-6 fw-semobold mb-2"},[e("span",{class:"required"},"Tags"),e("i",{class:"fas fa-exclamation-circle ms-2 fs-7","data-bs-toggle":"tooltip",title:"Specify a target priorty"})],-1),J=e("div",{class:"d-flex flex-stack mb-8"},[e("div",{class:"me-5"},[e("label",{class:"fs-6 fw-semobold"},"Adding Users by Team Members"),e("div",{class:"fs-7 fw-semobold text-gray-400"}," If you need more info, please check budget planning ")]),e("label",{class:"form-check form-switch form-check-custom form-check-solid"},[e("input",{class:"form-check-input",type:"checkbox",value:"1",checked:""}),e("span",{class:"form-check-label fw-semobold text-gray-400"}," Allowed ")])],-1),Q=e("div",{class:"mb-15 fv-row"},[e("div",{class:"d-flex flex-stack"},[e("div",{class:"fw-semobold me-5"},[e("label",{class:"fs-6"},"Notifications"),e("div",{class:"fs-7 text-gray-400"}," Allow Notifications by Phone or Email ")]),e("div",{class:"d-flex align-items-center"},[e("label",{class:"form-check form-check-custom form-check-solid me-10"},[e("input",{class:"form-check-input h-20px w-20px",type:"checkbox",name:"communication[]",value:"email",checked:""}),e("span",{class:"form-check-label fw-semobold"}," Email ")]),e("label",{class:"form-check form-check-custom form-check-solid"},[e("input",{class:"form-check-input h-20px w-20px",type:"checkbox",name:"communication[]",value:"phone"}),e("span",{class:"form-check-label fw-semobold"}," Phone ")])])])],-1),X={class:"text-center"},Y=e("button",{type:"reset",id:"kt_modal_new_target_cancel",class:"btn btn-light me-3"}," Cancel ",-1),Z=["data-kt-indicator"],ee={key:0,class:"indicator-label"},te={key:1,class:"indicator-progress"},ae=e("span",{class:"spinner-border spinner-border-sm align-middle ms-2"},null,-1);function se(a,s,m,p,b,y){const u=r("KTIcon"),_=r("el-input"),d=r("el-form-item"),o=r("el-option"),h=r("el-select"),k=r("el-date-picker"),D=r("el-form");return f(),g("div",C,[e("div",M,[e("div",B,[e("div",P,[e("div",q,[t(u,{"icon-name":"cross","icon-class":"fs-1"})])]),e("div",U,[t(D,{id:"kt_modal_new_target_form",onSubmit:s[5]||(s[5]=A(n=>a.submit(),["prevent"])),model:a.targetData,rules:a.rules,ref:"formRef",class:"form"},{default:l(()=>[K,e("div",O,[R,t(d,{prop:"targetTitle"},{default:l(()=>[t(_,{modelValue:a.targetData.targetTitle,"onUpdate:modelValue":s[0]||(s[0]=n=>a.targetData.targetTitle=n),placeholder:"Enter Target Title",name:"targetTitle"},null,8,["modelValue"])]),_:1})]),e("div",I,[e("div",$,[z,t(d,{prop:"assign"},{default:l(()=>[t(h,{modelValue:a.targetData.assign,"onUpdate:modelValue":s[1]||(s[1]=n=>a.targetData.assign=n),placeholder:"Select a Team Member",name:"assign",as:"select"},{default:l(()=>[t(o,{value:""},{default:l(()=>[i("Select user...")]),_:1}),t(o,{label:"Karina Clark",value:"1"},{default:l(()=>[i("Karina Clark")]),_:1}),t(o,{label:"Robert Doe",value:"2"},{default:l(()=>[i("Robert Doe")]),_:1}),t(o,{label:"Niel Owen",value:"3"},{default:l(()=>[i("Niel Owen")]),_:1}),t(o,{label:"Olivia Wild",value:"4"},{default:l(()=>[i("Olivia Wild")]),_:1}),t(o,{label:"Sean Bean",value:"5"},{default:l(()=>[i("Sean Bean")]),_:1})]),_:1},8,["modelValue"])]),_:1})]),e("div",E,[j,e("div",F,[t(d,{prop:"dueDate"},{default:l(()=>[t(k,{modelValue:a.targetData.dueDate,"onUpdate:modelValue":s[2]||(s[2]=n=>a.targetData.dueDate=n),type:"date",placeholder:"Select a date",teleported:!1,"popper-class":"override-styles",name:"dueDate"},null,8,["modelValue"])]),_:1})])])]),e("div",H,[W,t(d,{prop:"targetDetails"},{default:l(()=>[t(_,{modelValue:a.targetData.targetDetails,"onUpdate:modelValue":s[3]||(s[3]=n=>a.targetData.targetDetails=n),type:"textarea",rows:"3",name:"targetDetails",placeholder:"Type Target Details"},null,8,["modelValue"])]),_:1})]),e("div",G,[L,t(d,{prop:"tags"},{default:l(()=>[t(h,{modelValue:a.targetData.tags,"onUpdate:modelValue":s[4]||(s[4]=n=>a.targetData.tags=n),multiple:"",filterable:"","allow-create":"","default-first-option":"",placeholder:"Choose tags for your target"},{default:l(()=>[t(o,{label:"Important",value:"important"}),t(o,{label:"Urgent",value:"urgent"}),t(o,{label:"High",value:"high"}),t(o,{label:"Low",value:"low"}),t(o,{label:"Medium",value:"medium"})]),_:1},8,["modelValue"])]),_:1})]),J,Q,e("div",X,[Y,e("button",{"data-kt-indicator":a.loading?"on":null,class:"btn btn-lg btn-primary",type:"submit"},[a.loading?w("",!0):(f(),g("span",ee,[i(" Submit "),t(u,{"icon-name":"arrow-right","icon-class":"fs-3 ms-2 me-0"})])),a.loading?(f(),g("span",te,[i(" Please wait... "),ae])):w("",!0)],8,Z)])]),_:1},8,["model","rules"])])])])],512)}const re=S(N,[["render",se]]);export{re as K};