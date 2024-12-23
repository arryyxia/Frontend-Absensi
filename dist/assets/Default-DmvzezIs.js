import{s as E}from"./index-BzB-9cPy.js";import{s as w}from"./index-mZhnZxIp.js";import{_ as D,o as l,g as u,e as r,a as k,c as b,w as d,d as j,b as c,t as p,F as _,E as N,z as S}from"./index-QCxCtTKT.js";import{s as C}from"./index-Py64ODey.js";import{s as F}from"./index-W_yxFL_A.js";const V={name:"TableActionStandard",inject:["default"],props:{onEdit:{type:Function,required:!0},onDelete:{type:Function,required:!0},id:{type:Number,required:!0}},methods:{emitEdit(t){this.onEdit(t)},emitDelete(t){this.onDelete(t)}}},B={class:"flex gap-2 bg-white"};function T(t,e,n,h,o,i){const m=w;return l(),u("div",B,[r(m,{icon:"pi pi-pencil",severity:"info","aria-label":"Notification",onClick:e[0]||(e[0]=g=>i.emitEdit(n.id))}),r(m,{icon:"pi pi-trash",severity:"danger","aria-label":"Notification",onClick:e[1]||(e[1]=g=>i.emitDelete(n.id))})])}const I=D(V,[["render",T]]);async function $(t){try{const e=await k.get(t);return console.log(e.data.data),e.data.data}catch(e){throw console.error(e),e}}const A={name:"TableDefault",inject:["default"],props:{columns:Array,api:String,apiEdit:String,id:String},data(){return{data:[],filters:{global:{value:null,matchMode:"contains"}},loading:!0}},methods:{onCellEditComplete(t){let{data:e,newValue:n,field:h}=t;console.log({data:e,newValue:n,field:h})},async created(){try{this.data=await $(this.api),this.loading=!1}catch(t){console.error("Failed to fetch data:",t)}},handleEdit(t){console.log("Edit ID:",t)},handleDelete(t){console.log("Hapus ID:",t)},clearFilter(){this.filters={global:{value:null,matchMode:"contains"}}},calculateRowNumber(t){return(this.$refs.dt&&this.$refs.dt.first?this.$refs.dt.first:0)+this.data.indexOf(t.data)+1}},mounted(){this.created()}},q={class:"flex justify-between"};function z(t,e,n,h,o,i){const m=w,g=F,y=C,v=I,x=E;return l(),b(x,{filters:o.filters,"onUpdate:filters":e[2]||(e[2]=a=>o.filters=a),value:o.data,tableStyle:"min-width: 50rem",paginator:"",rows:5,rowsPerPageOptions:[5,10,20,50],scrollable:"",loading:o.loading,filterDisplay:"menu"},{header:d(()=>[j("div",q,[r(m,{type:"button",icon:"pi pi-filter-slash",label:"Clear",outlined:"",onClick:e[0]||(e[0]=a=>i.clearFilter())}),r(g,{modelValue:o.filters.global.value,"onUpdate:modelValue":e[1]||(e[1]=a=>o.filters.global.value=a),placeholder:"Keyword Search"},null,8,["modelValue"])])]),empty:d(()=>e[3]||(e[3]=[c(" Data tidak ditemukan. ")])),default:d(()=>[r(y,{field:"no",header:"No."},{body:d(a=>[c(p(i.calculateRowNumber(a)+"."),1)]),_:1}),(l(!0),u(_,null,N(n.columns,a=>(l(),b(y,{key:a.field,field:a.field,header:a.header},{body:d(({data:s,field:f})=>[f==="jadwal.nama_jadwal"?(l(),u(_,{key:0},[c(p(s.jadwal?s.jadwal.nama_jadwal:s[f]),1)],64)):f==="jadwal.hari"?(l(),u(_,{key:1},[c(p(s.jadwal?s.jadwal.hari:"-"),1)],64)):(l(),u(_,{key:2},[c(p(s[f]),1)],64))]),_:2},1032,["field","header"]))),128)),S(t.$slots,"default"),r(y,{header:"Action",frozen:"",alignFrozen:"right",style:{width:"100px"}},{body:d(a=>[r(v,{onEdit:i.handleEdit,onDelete:i.handleDelete,id:a.data[n.id]},null,8,["onEdit","onDelete","id"])]),_:1})]),_:3},8,["filters","value","loading"])}const H=D(A,[["render",z]]);export{H as _,$ as g};