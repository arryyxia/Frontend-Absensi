import{s as p}from"./index-Cb1qzt2o.js";import{s as f}from"./index-mZhnZxIp.js";import{_,g as k,e,w as n,o as h,d as o,b as l,i as d,v as c,f as g}from"./index-QCxCtTKT.js";const v={name:"NotFound",inject:["default"],data(){return{token:localStorage.getItem("token")}},methods:{hasHistory(){return window.history.length>2}},mounted(){}},x={class:"flex w-full h-dvh items-center justify-center"},w={class:"flex flex-col gap-2"},y={class:"flex justify-center"};function N(s,t,b,B,a,u){const r=f,i=g("RouterLink"),m=p;return h(),k("div",x,[e(m,{class:"col-span-12 shadow-md"},{title:n(()=>t[1]||(t[1]=[o("h1",{class:"text-3xl"}," Error 404 - Page Not Found :( ",-1)])),content:n(()=>[o("div",w,[t[2]||(t[2]=o("p",null,[l("Halaman yang kamu cari tidak ditemukan "),o("br"),l("atau telah di pindah kan ke route lain")],-1)),o("div",y,[d(e(i,{to:""},{default:n(()=>[e(r,{type:"button",onClick:t[0]||(t[0]=$=>u.hasHistory()?s.$router.go(-1):s.$router.push("/")),label:"Back"})]),_:1},512),[[c,a.token]]),d(e(i,{to:"/login"},{default:n(()=>[e(r,{label:"Login"})]),_:1},512),[[c,!a.token]])])])]),_:1})])}const H=_(v,[["render",N]]);export{H as default};