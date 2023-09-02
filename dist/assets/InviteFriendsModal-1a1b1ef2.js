import{g as e}from"./assets-fbb44cfd.js";import{d as r,_ as p,r as h,o as t,f as o,k as a,p as _,H as l,F as v,i as b,n as f,l as i,A as g,at as x,I as y}from"./index-6eab465e.js";const u=r({name:"invite-friends-modal",components:{},setup(){return{users:[{avatar:e("media/avatars/300-6.jpg"),name:"Emma Smith",email:"e.smith@kpmg.com.au",access:"1"},{state:"danger",name:"Melody Macy",email:"melody@altbox.com",access:"1"},{avatar:e("media/avatars/300-1.jpg"),name:"Max Smith",email:"max@kt.com",access:"3"},{avatar:e("media/avatars/300-1.jpg"),name:"Sean Bean",email:"sean@dellito.com",access:"2"},{avatar:e("media/avatars/300-25.jpg"),name:"Brian Cox",email:"brian@exchange.com",access:"3"},{state:"warning",name:"Mikaela Collins",email:"mikaela@pexcom.com",access:"2"},{avatar:e("media/avatars/300-9.jpg"),name:"Francis Mitcham",email:"f.mitcham@kpmg.com.au",access:"3"},{state:"danger",name:"Olivia Wild",email:"olivia@corpmail.com",access:"2"},{state:"info",name:"Neil Owen",email:"owen.neil@gmail.com",access:"1"},{avatar:e("media/avatars/300-23.jpg"),name:"Dan Wilson",email:"dam@consilting.com",access:"3"},{state:"danger",name:"Emma Bold",email:"emma@intenso.com",access:"2"},{avatar:e("media/avatars/300-12.jpg"),name:"Ana Crown",email:"ana.cf@limtel.com",access:"1"},{state:"primary",name:"Robert Doe",email:"robert@benko.com",access:"3"},{avatar:e("media/avatars/300-13.jpg"),name:"John Miller",email:"miller@mapple.com",access:"3"},{state:"success",name:"Lucy Kunic",email:"lucy.m@fentech.com",access:"2"},{state:e("media/avatars/300-21.jpg"),name:"Ethan Wilder",email:"ethan@loop.com.au",access:"1"},{state:e("media/avatars/300-12.jpg"),name:"Ana Crown",email:"ana.cf@limtel.com",access:"3"}],getAssetPath:e}}}),k={class:"modal fade",id:"kt_modal_invite_friends",tabindex:"-1","aria-hidden":"true"},w={class:"modal-dialog mw-650px"},j={class:"modal-content"},A={class:"modal-header pb-0 border-0 justify-content-end"},C={class:"btn btn-sm btn-icon btn-active-color-primary","data-bs-dismiss":"modal"},I={class:"modal-body scroll-y mx-5 mx-xl-18 pt-0 pb-15"},M=a("div",{class:"text-center mb-13"},[a("h1",{class:"mb-3"},"Invite a Friend"),a("div",{class:"text-gray-400 fw-semobold fs-5"},[l(" If you need more info, please check out "),a("a",{href:"#",class:"link-primary fw-bold"},"FAQ Page"),l(". ")])],-1),B={class:"btn btn-light-primary fw-bold w-100 mb-8"},F=["src"],S=a("div",{class:"separator d-flex flex-center mb-8"},[a("span",{class:"text-uppercase bg-body fs-7 fw-semobold text-gray-400 px-3"},"or")],-1),T=a("textarea",{class:"form-control form-control-solid mb-8",rows:"3",placeholder:"Type or paste emails here"},`
          `,-1),V={class:"mb-10"},$=a("div",{class:"fs-6 fw-semobold mb-2"},"Your Invitations",-1),E={class:"mh-300px scroll-y me-n7 pe-7"},K={class:"d-flex align-items-center"},N={class:"symbol symbol-35px symbol-circle"},D=["src"],P={class:"ms-5"},L={href:"#",class:"fs-5 fw-bold text-gray-900 text-hover-primary mb-2"},O={class:"fw-semobold text-gray-400"},U={class:"ms-2 w-100px"},W=["onUpdate:modelValue"],G=a("option",{value:"1"},"Guest",-1),z=a("option",{value:"2"},"Owner",-1),H=a("option",{value:"3"},"Can Edit",-1),J=[G,z,H],Q=y('<div class="d-flex flex-stack"><div class="me-5 fw-semobold"><label class="fs-6">Adding Users by Team Members</label><div class="fs-7 text-gray-400"> If you need more info, please check budget planning </div></div><label class="form-check form-switch form-check-custom form-check-solid"><input class="form-check-input" type="checkbox" value="1" checked><span class="form-check-label fw-semobold text-gray-400"> Allowed </span></label></div>',1);function R(c,Y,q,X,Z,aa){const n=h("KTIcon");return t(),o("div",k,[a("div",w,[a("div",j,[a("div",A,[a("div",C,[_(n,{"icon-name":"cross","icon-class":"fs-1"})])]),a("div",I,[M,a("div",B,[a("img",{alt:"Logo",src:c.getAssetPath("media/svg/brand-logos/google-icon.svg"),class:"h-20px me-3"},null,8,F),l(" Invite Gmail Contacts ")]),S,T,a("div",V,[$,a("div",E,[(t(!0),o(v,null,b(c.users,(s,m)=>(t(),o("div",{key:m,class:"d-flex flex-stack py-4 border-bottom border-gray-300 border-bottom-dashed"},[a("div",K,[a("div",N,[s.avatar?(t(),o("img",{key:0,alt:"Pic",src:s.avatar},null,8,D)):(t(),o("span",{key:1,class:f([`bg-light-${s.state} text-${s.state}`,"symbol-label fw-semobold"])},i(s.name.charAt(0)),3))]),a("div",P,[a("a",L,i(s.name),1),a("div",O,i(s.email),1)])]),a("div",U,[g(a("select",{"onUpdate:modelValue":d=>s.access=d,class:"form-select form-select-solid form-select-sm","data-control":"select2","data-hide-search":"true"},J,8,W),[[x,s.access]])])]))),128))])]),Q])])])])}const ta=p(u,[["render",R]]);export{ta as K};
