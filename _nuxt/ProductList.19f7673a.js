import{a as i,o as c,c as p,w as F,f as t,y as C,t as d,z as D,i as l,k as h,b as a,F as x,A as B}from"./entry.6b9026ee.js";const A={class:"product-item"},f={class:"product-item__content"},v=["textContent"],g=["textContent"],k=i({__name:"ProductItem",props:{product:{type:Object,required:!0}},setup(u){return(n,r)=>{const e=D;return c(),p(e,{to:{name:"products-id",params:{id:u.product.product_id}}},{default:F(()=>[t("div",A,[t("div",{class:"product-item__img-wrap",style:C({backgroundImage:`url(${u.product.product_img_path})`})},null,4),t("div",f,[t("h3",{class:"product-item__content__title",textContent:d(u.product.product_name)},null,8,v),t("div",{class:"product-item__content__desc",textContent:d(u.product.product_description)},null,8,g)])])]),_:1},8,["to"])}}}),y=l(k,[["__scopeId","data-v-bb5a7558"]]),E={class:"product-list"},b={class:"product-list__content"},I=i({__name:"ProductList",setup(u){const n={product_id:"P{id}",product_name:"\u4F01\u9D5D\u561F\u561F\u73A9\u5076",product_price:55023,product_category:"\u73A9\u5076",product_img_path:"https://picsum.photos/800/600",product_description:"\u6B64\u73A9\u5076\u4E43\u7528\u7D14\u5929\u7136\u4F01\u9D5D\u6BDB\u6240\u88FD\u800C\u6210\uFF0C\u89AA\u8FD1\u808C\u819A\u4E0D\u6703\u5F15\u767C\u5E7C\u7AE5\u904E\u654F\uFF0C\u5167\u5BB9\u7269\u586B\u5145\u63A1\u7528\u7F8E\u570B\u539F\u88DD\u9032\u53E3\u7684\u68C9\u82B1\uFF0C\u7D55\u5C0D\u6C92\u6709\u4F7F\u7528\u9ED1\u5974\u63A1\u96C6\uFF0C\u5B8C\u5168100%\u7D14\u68C9\uFF01"},r=h(Array.from(Array(9)).map((m,s)=>{const o={...n};return o.product_id=o.product_id.replace("{id}",s.toString()),o})),e=()=>{};return(m,s)=>{const o=y;return c(),a("div",E,[t("div",b,[(c(!0),a(x,null,B(r,_=>(c(),p(o,{key:_.product_id,product:_},null,8,["product"]))),128))]),t("div",{class:"product-list__footer"},[t("button",{class:"load-more-btn",onClick:e}," Load More ")])])}}}),$=l(I,[["__scopeId","data-v-b190a448"]]);export{$ as _};