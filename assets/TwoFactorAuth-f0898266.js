import{g as A,a as S}from"./assets-fbb44cfd.js";import{K as T}from"./Card-41ddd1af.js";import{c as _,a as v}from"./index.esm-456acaa3.js";import{d as x,aj as $,ak as B,al as K,z as u,_ as M,r as d,o as C,f as F,k as t,p as s,n as h,A as g,ab as w,H as l,w as k,F as V}from"./index-6eab465e.js";import{S as y}from"./sweetalert2-446d02c0.js";const P=x({name:"two-factor-auth-modal",components:{ErrorMessage:$,Field:B,VForm:K},setup(){const o=u("apps"),e=u(""),c=u(null),a=u(null),b=_().shape({mobile:v().required().label("Mobile")}),p=_().shape({code:v().required().label("Code")});return{value:o,state:e,schema1:b,schema2:p,submitAuthCodeForm:()=>{c.value&&(c.value.setAttribute("data-kt-indicator","on"),setTimeout(()=>{var n;(n=c.value)==null||n.removeAttribute("data-kt-indicator"),y.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{e.value=""})},2e3))},submitMobileForm:()=>{a.value&&(a.value.disabled=!0,a.value.setAttribute("data-kt-indicator","on"),setTimeout(()=>{var n;a.value&&(a.value.disabled=!1,(n=a.value)==null||n.removeAttribute("data-kt-indicator")),y.fire({text:"Form has been successfully submitted!",icon:"success",buttonsStyling:!1,confirmButtonText:"Ok, got it!",heightAuto:!1,customClass:{confirmButton:"btn btn-primary"}}).then(()=>{e.value=""})},2e3))},submitAuthCodeButtonRef:c,submitMobileButtonRef:a,getAssetPath:A}}}),I={class:"modal fade",id:"kt_modal_two_factor_authentication",tabindex:"-1","aria-hidden":"true"},E={class:"modal-dialog modal-dialog-centered mw-650px"},R={class:"modal-content"},N={class:"modal-header flex-stack"},U=t("h2",null,"Choose An Authentication Method",-1),q={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},G={class:"modal-body scroll-y pt-10 pb-15 px-lg-17"},Q=t("p",{class:"text-gray-400 fs-5 fw-semobold mb-10"}," In addition to your username and password, you’ll have to enter a code (delivered via app or SMS) to log into your account. ",-1),Y={class:"pb-10"},z={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-5",for:"kt_modal_two_factor_authentication_option_1"},D=t("span",{class:"d-block fw-semobold text-start"},[t("span",{class:"text-dark fw-bold d-block fs-3"},"Authenticator Apps"),t("span",{class:"text-gray-400 fw-semobold fs-6"}," Get codes from an app like Google Authenticator, Microsoft Authenticator, Authy or 1Password. ")],-1),O={class:"btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center",for:"kt_modal_two_factor_authentication_option_2"},W=t("span",{class:"d-block fw-semobold text-start"},[t("span",{class:"text-dark fw-bold d-block fs-3"},"SMS"),t("span",{class:"text-gray-400 fw-semobold fs-6"},"We will send a code via SMS if you need to use your backup login method.")],-1),j=t("h3",{class:"text-dark fw-bold mb-7"},"Authenticator Apps",-1),H={class:"text-gray-500 fw-semobold fs-6 mb-10"},J=t("a",{href:"https://support.google.com/accounts/answer/1066447?hl=en",target:"_blank"},"Google Authenticator",-1),L=t("a",{href:"https://www.microsoft.com/en-us/account/authenticator",target:"_blank"},"Microsoft Authenticator",-1),X=t("a",{href:"https://authy.com/download/",target:"_blank"},"Authy",-1),Z=t("a",{href:"https://support.1password.com/one-time-passwords/",target:"_blank"},"1Password",-1),tt={class:"pt-5 text-center"},ot=["src"],et={class:"notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6"},st=t("div",{class:"d-flex flex-stack flex-grow-1"},[t("div",{class:"fw-semobold"},[t("div",{class:"fs-6 text-gray-600"},[l(" If you having trouble using the QR code, select manual entry on your app, and enter your username and the code: "),t("div",{class:"fw-bold text-dark pt-2"}," KBSS3QDAAFUMCBY63YCKI5WSSVACUMPN ")])])],-1),at={class:"mb-10 fv-row"},nt={class:"fv-plugins-message-container"},it={class:"fv-help-block"},lt={class:"d-flex flex-center"},rt={ref:"submitAuthCodeButtonRef",type:"submit","data-kt-element":"apps-submit",class:"btn btn-primary"},ct=t("span",{class:"indicator-label"}," Submit ",-1),dt=t("span",{class:"indicator-progress"},[l(" Please wait... "),t("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),mt=[ct,dt],ut=t("h3",{class:"text-dark fw-bold fs-3 mb-5"}," SMS: Verify Your Mobile Number ",-1),bt=t("div",{class:"text-gray-400 fw-semobold mb-10"}," Enter your mobile phone number with country code and we will send you a verification code upon request. ",-1),pt={class:"mb-10 fv-row"},ht={class:"fv-plugins-message-container"},ft={class:"fv-help-block"},_t={class:"d-flex flex-center"},vt={ref:"submitMobileButtonRef",type:"submit","data-kt-element":"sms-submit",class:"btn btn-primary"},gt=t("span",{class:"indicator-label"}," Submit ",-1),wt=t("span",{class:"indicator-progress"},[l(" Please wait... "),t("span",{class:"spinner-border spinner-border-sm align-middle ms-2"})],-1),kt=[gt,wt];function yt(o,e,c,a,b,p){const r=d("KTIcon"),m=d("Field"),n=d("ErrorMessage"),f=d("VForm");return C(),F("div",I,[t("div",E,[t("div",R,[t("div",N,[U,t("div",q,[s(r,{"icon-name":"cross","icon-class":"fs-1"})])]),t("div",G,[t("div",{class:h([o.state!==""&&"d-none"])},[Q,t("div",Y,[g(t("input",{type:"radio",class:"btn-check",name:"auth_option",value:"apps",checked:"",id:"kt_modal_two_factor_authentication_option_1","onUpdate:modelValue":e[0]||(e[0]=i=>o.value=i)},null,512),[[w,o.value]]),t("label",z,[s(r,{"icon-name":"setting-2","icon-class":"fs-4x me-4"}),D]),g(t("input",{type:"radio",class:"btn-check",name:"auth_option",value:"sms",id:"kt_modal_two_factor_authentication_option_2","onUpdate:modelValue":e[1]||(e[1]=i=>o.value=i)},null,512),[[w,o.value]]),t("label",O,[s(r,{"icon-name":"message-text-2","icon-class":"fs-4x me-4"}),W])]),t("button",{onClick:e[2]||(e[2]=i=>o.state=o.value),class:"btn btn-primary w-100"}," Continue ")],2),t("div",{class:h([o.state!=="apps"&&"d-none"]),"data-kt-element":"apps"},[j,t("div",H,[l(" Using an authenticator app like "),J,l(", "),L,l(", "),X,l(", or "),Z,l(", scan the QR code. It will generate a 6 digit code for you to enter below. "),t("div",tt,[t("img",{src:o.getAssetPath("media/misc/qr.png"),alt:"",class:"mw-150px"},null,8,ot)])]),t("div",et,[s(r,{"icon-name":"formation-5","icon-class":"fs-2tx text-warning me-4"}),st]),s(f,{class:"form",onSubmit:e[4]||(e[4]=i=>o.submitAuthCodeForm()),"validation-schema":o.schema2},{default:k(()=>[t("div",at,[s(m,{type:"text",class:"form-control form-control-lg form-control-solid",placeholder:"Enter authentication code",name:"code"}),t("div",nt,[t("div",it,[s(n,{name:"code"})])])]),t("div",lt,[t("button",{type:"reset",onClick:e[3]||(e[3]=i=>o.state=""),class:"btn btn-light me-3"}," Cancel "),t("button",rt,mt,512)])]),_:1},8,["validation-schema"])],2),t("div",{class:h([o.state!=="sms"&&"d-none"]),"data-kt-element":"sms"},[ut,bt,s(f,{class:"form",onSubmit:e[6]||(e[6]=i=>o.submitMobileForm()),"validation-schema":o.schema1},{default:k(()=>[t("div",pt,[s(m,{type:"text",class:"form-control form-control-lg form-control-solid",placeholder:"Mobile number with country code...",name:"mobile"}),t("div",ht,[t("div",ft,[s(n,{name:"mobile"})])])]),t("div",_t,[t("button",{onClick:e[5]||(e[5]=i=>o.state=""),class:"btn btn-light me-3"}," Cancel "),t("button",vt,kt,512)])]),_:1},8,["validation-schema"])],2)])])])])}const At=M(P,[["render",yt]]),xt=x({name:"two-factor-auth",components:{KTModalCard:T,KTTwoFactorAuthModal:At},setup(){return{getIllustrationsPath:S,getAssetPath:A}}});function Mt(o,e,c,a,b,p){const r=d("KTModalCard"),m=d("KTTwoFactorAuthModal");return C(),F(V,null,[s(r,{title:"Two-factor Authentication",description:"Click on the below buttons to launch <br/>two-factor authentication setup example.",image:o.getIllustrationsPath("4.png"),"button-text":"Enable Two-factor Authentication","modal-id":"kt_modal_two_factor_authentication"},null,8,["image"]),s(m)],64)}const Bt=M(xt,[["render",Mt]]);export{Bt as default};
