import{f as V,g as b,j as E}from"./request-3b809520.js";import{E as L,a as y}from"./el-form-item-711f284c.js";import{E as F}from"./el-input-d306da18.js";import{y as P,r as f,L as R,d as S,I as k,G as N,A as B,i as C,l as n,w as s,o as I,e as d,f as o,t as q,E as U,k as A,M,N as T}from"./index-e0a4a1cf.js";import{d as h}from"./admin-7bfe4b8d.js";import{f as j}from"./favicon-de9023fc.js";import{_ as D}from"./_plugin-vue_export-helper-c27b6911.js";const G=P("LoginPannel",()=>{const m=f({prefix:R(),username:"",password:"",pending:!1}),t=f(null);return{loginForm:m,loginFormRef:t}}),$={class:"container"},z=["src"],H=S({__name:"LoginPannel",setup(m){const t=k();N()==="1"&&t.push("/admin");const g=G(),{loginForm:e,loginFormRef:p}=B(g),_={prefix:[{required:!0,message:"请输入路由前缀",trigger:"blur"}],username:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]},c=async i=>{if(!i||!await i.validate(()=>{}))return;M(e.value.prefix),e.value.pending=!0;const a=await h({username:e.value.username,password:e.value.password})??"failed";e.value.pending=!1,a.toString()!=="failed"&&(e.value.username="",e.value.password="",b.success("登陆成功"),T("1"),t.push("/admin"))};return(i,a)=>{const u=F,l=L,v=E,x=y,w=V;return I(),C("div",$,[n(w,null,{default:s(()=>[d("h1",null,[d("img",{src:o(j),alt:"logo"},null,8,z)]),d("h2",null,q(o(U)()),1),n(x,{ref_key:"loginFormRef",ref:p,model:o(e),rules:_,"label-width":"auto"},{default:s(()=>[n(l,{label:"路由前缀",prop:"prefix"},{default:s(()=>[n(u,{modelValue:o(e).prefix,"onUpdate:modelValue":a[0]||(a[0]=r=>o(e).prefix=r)},null,8,["modelValue"])]),_:1}),n(l,{label:"用户名",prop:"username"},{default:s(()=>[n(u,{modelValue:o(e).username,"onUpdate:modelValue":a[1]||(a[1]=r=>o(e).username=r)},null,8,["modelValue"])]),_:1}),n(l,{label:"密码",prop:"password"},{default:s(()=>[n(u,{modelValue:o(e).password,"onUpdate:modelValue":a[2]||(a[2]=r=>o(e).password=r)},null,8,["modelValue"])]),_:1}),n(l,{class:"center"},{default:s(()=>[n(v,{type:"primary",onClick:a[3]||(a[3]=r=>c(o(p))),disabled:o(e).pending,loading:o(e).pending},{default:s(()=>[A(" 登陆 ")]),_:1},8,["disabled","loading"])]),_:1})]),_:1},8,["model"])]),_:1})])}}});const Z=D(H,[["__scopeId","data-v-7d3c2ad4"]]);export{Z as default};