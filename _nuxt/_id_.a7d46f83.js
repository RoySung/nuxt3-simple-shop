import{_ as B,a as g,b as E}from"./ProductDialog.40803e10.js";import{a as p,o as i,b as l,f as o,y as A,t as a,i as m,k as y,r as k,e as t,w as u,h as r,z as P}from"./entry.6b9026ee.js";const b={class:"product-section"},N={class:"product-section__content"},$=["textContent"],O=["textContent"],S=p({__name:"ProductSection",props:{product:{type:Object,required:!0}},setup(e){return(n,c)=>(i(),l("div",b,[o("div",{class:"product-section__img-wrap",style:A({backgroundImage:`url(${e.product.product_img_path})`})},null,4),o("div",N,[o("h3",{class:"product-section__content__title",textContent:a(e.product.product_name)},null,8,$),o("div",{class:"product-section__content__desc",textContent:a(e.product.product_description)},null,8,O)])]))}}),w=m(S,[["__scopeId","data-v-6c15400f"]]),I={class:"product-page"},V={class:"product-content"},z=p({__name:"[id]",setup(e){const n=y({product_id:"P{id}",product_name:"\u4F01\u9D5D\u561F\u561F\u73A9\u5076",product_price:55023,product_category:"\u73A9\u5076",product_img_path:"https://picsum.photos/800/600",product_description:"\u6B64\u73A9\u5076\u4E43\u7528\u7D14\u5929\u7136\u4F01\u9D5D\u6BDB\u6240\u88FD\u800C\u6210\uFF0C\u89AA\u8FD1\u808C\u819A\u4E0D\u6703\u5F15\u767C\u5E7C\u7AE5\u904E\u654F\uFF0C\u5167\u5BB9\u7269\u586B\u5145\u63A1\u7528\u7F8E\u570B\u539F\u88DD\u9032\u53E3\u7684\u68C9\u82B1\uFF0C\u7D55\u5C0D\u6C92\u6709\u4F7F\u7528\u9ED1\u5974\u63A1\u96C6\uFF0C\u5B8C\u5168100%\u7D14\u68C9\uFF01"}),c=k(!1),F=()=>{c.value=!0},C=_=>{console.log("product: ",_)};return(_,s)=>{const d=E,D=P,f=B,x=w,v=g;return i(),l("div",I,[t(f,{title:"Product Shelf"},{left:u(()=>[t(D,{to:{name:"products"}},{default:u(()=>[t(d,null,{default:u(()=>[r("Back")]),_:1})]),_:1})]),right:u(()=>[t(d,{"on-click":F},{default:u(()=>[r(" Edit ")]),_:1})]),_:1}),o("div",V,[t(x,{product:n},null,8,["product"])]),t(v,{isOpen:c.value,"onUpdate:isOpen":s[0]||(s[0]=h=>c.value=h),product:n,"onUpdate:product":C},null,8,["isOpen","product"])])}}});const q=m(z,[["__scopeId","data-v-771fee52"]]);export{q as default};