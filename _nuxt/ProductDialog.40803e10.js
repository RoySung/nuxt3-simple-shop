import{a as l,o as m,b as f,j as u,i as v,f as t,t as y,k as x,l as C,m as k,p as n,v as a,q as S,s as $,x as N}from"./entry.6b9026ee.js";const D=l({__name:"NavbarBtn",props:{onClick:{type:Function,default:()=>{}}},setup(e){const r=e,i=_=>{const{onClick:o}=r;o&&o(_)};return(_,o)=>(m(),f("button",{class:"navbar-btn",onClick:i},[u(_.$slots,"default",{},void 0,!0)]))}}),Q=v(D,[["__scopeId","data-v-57faec63"]]),I={class:"navbar"},P={class:"navbar__btn-section"},V=["textContent"],w={class:"navbar__btn-section"},B=l({__name:"NavbarBar",props:{title:{type:String,default:""}},setup(e){return(r,i)=>(m(),f("div",I,[t("div",P,[u(r.$slots,"left",{},void 0,!0)]),t("h1",{class:"navbar__title",textContent:y(e.title)},null,8,V),t("div",w,[u(r.$slots,"right",{},void 0,!0)])]))}}),R=v(B,[["__scopeId","data-v-88d5e2c9"]]),p=e=>($("data-v-c25df393"),e=e(),N(),e),O={key:0,class:"product-dialog"},U={class:"product-dialog__content"},M=["onSubmit"],j={class:"product-form__field"},q=p(()=>t("label",{for:"product-name"},"Name",-1)),E={class:"product-form__field"},F=p(()=>t("label",{for:"product-category"},"Category",-1)),T={class:"product-form__field"},X=p(()=>t("label",{for:"product-price"},"Price",-1)),z={class:"product-form__field"},A=p(()=>t("label",{for:"product-img"},"Img",-1)),G={class:"product-form__field product-form__field--textarea"},H=p(()=>t("label",{for:"product-desc"},"Description",-1)),J=p(()=>t("div",{class:"product-form__footer"},[t("button",{class:"save-btn",type:"submit"}," Save ")],-1)),K=l({__name:"ProductDialog",props:{isOpen:{type:Boolean,required:!0},product:{type:Object,default:()=>({product_id:"",product_name:"Default Name",product_price:0,product_category:"",product_img_path:"",product_description:""})}},emits:["update:isOpen","update:product"],setup(e,{emit:r}){const i=e,o=x({...{product_id:"",product_name:"Default Name",product_price:0,product_category:"",product_img_path:"",product_description:""}}),g=()=>{r("update:product",o)},b=()=>{const s=i.product;o.product_id=s.product_id,o.product_name=s.product_name,o.product_category=s.product_category,o.product_price=s.product_price,o.product_description=s.product_description,o.product_img_path=s.product_img_path},h=()=>{b(),r("update:isOpen",!1)};return C(()=>{b()}),(s,c)=>e.isOpen?(m(),f("div",O,[t("div",U,[t("button",{class:"close-btn",onClick:h}," X "),t("form",{class:"product-form",onSubmit:k(g,["prevent"])},[t("div",j,[q,n(t("input",{id:"product-name","onUpdate:modelValue":c[0]||(c[0]=d=>o.product_name=d),type:"text"},null,512),[[a,o.product_name]])]),t("div",E,[F,n(t("input",{id:"product-category","onUpdate:modelValue":c[1]||(c[1]=d=>o.product_category=d),type:"text"},null,512),[[a,o.product_category]])]),t("div",T,[X,n(t("input",{id:"product-price","onUpdate:modelValue":c[2]||(c[2]=d=>o.product_price=d),type:"number"},null,512),[[a,o.product_price]])]),t("div",z,[A,n(t("input",{id:"product-img","onUpdate:modelValue":c[3]||(c[3]=d=>o.product_img_path=d),type:"text"},null,512),[[a,o.product_img_path]])]),t("div",G,[H,n(t("textarea",{id:"product-desc","onUpdate:modelValue":c[4]||(c[4]=d=>o.product_description=d),ows:"4",cols:"50"},null,512),[[a,o.product_description]])]),J],40,M)])])):S("",!0)}}),W=v(K,[["__scopeId","data-v-c25df393"]]);export{R as _,W as a,Q as b};