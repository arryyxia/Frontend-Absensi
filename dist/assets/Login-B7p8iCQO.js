import{s as h}from"./index-Cb1qzt2o.js";import{s as w}from"./index-mZhnZxIp.js";import{s as x}from"./index-CkLDNPMj.js";import{s as v,a as b}from"./index-D5TWwLeq.js";import{s as k}from"./index-W_yxFL_A.js";import{_ as V,u as y,g as i,e as o,w as l,o as r,d as t,t as I,h as L}from"./index-QCxCtTKT.js";import{u as q,r as p,e as B}from"./index-Ddfw1dfi.js";import"./index-C8vJup7Q.js";import"./index-cCG5cFl5.js";const S={data(){return{authStore:y(),v$:q(),hasValidated:!1,email:"",password:"",btnIsLoading:!1}},validation(){return{email:{required:p,email:B},password:{required:p}}},methods:{async login(){this.v$.$validate(),this.btnIsLoading=!0;const n={email:this.email,password:this.password};await this.authStore.login(n),this.btnIsLoading=!1}},mounted(){}},$={class:"w-full h-dvh flex justify-center items-center bg-[#F1F5F9]"},E={key:0,class:"text-red-500"},C={key:1,class:"invisible"},F={key:2,class:"text-red-500"},M={key:3,class:"invisible"};function P(n,s,j,A,e,d){const m=v,c=k,u=b,f=x,_=w,g=h;return r(),i("div",$,[o(g,{class:"shadow-md w-96 h-80 flex flex-col justify-center"},{title:l(()=>s[3]||(s[3]=[t("div",{class:"flex flex-col gap-2"},[t("h1",{class:"text-3xl"},"Login"),t("p",{class:"font-normal text-sm"},"Masuk kedalam aplikasi absensi")],-1)])),content:l(()=>[t("form",{id:"login",onSubmit:s[2]||(s[2]=L((...a)=>d.login&&d.login(...a),["prevent"])),class:"flex flex-col gap-2"},[o(u,null,{default:l(()=>[o(m,null,{default:l(()=>s[4]||(s[4]=[t("i",{class:"pi pi-user"},null,-1)])),_:1}),o(c,{modelValue:e.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.email=a),placeholder:"Email",required:"",autofocus:""},null,8,["modelValue"])]),_:1}),e.hasValidated&&e.v$.email.$error?(r(),i("small",E,I(e.v$.email.email?"Invalid email format":"Email is required"),1)):(r(),i("small",C,"...")),o(u,null,{default:l(()=>[o(m,null,{default:l(()=>s[5]||(s[5]=[t("i",{class:"pi pi-lock"},null,-1)])),_:1}),o(f,{class:"border border-[#CBD5E1]",modelValue:e.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.password=a),toggleMask:"",placeholder:"Password",feedback:!1,required:""},null,8,["modelValue"])]),_:1}),e.hasValidated&&e.v$.password.$error?(r(),i("small",F," Password is required ")):(r(),i("small",M,"...")),o(_,{label:"Login",loading:e.btnIsLoading,type:"submit"},null,8,["loading"])],32)]),_:1})])}const O=V(S,[["render",P],["__scopeId","data-v-65467a1e"]]);export{O as default};