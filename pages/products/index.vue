<template>
  <div class="products-page">
    <NavbarBar title="Product Shelf">
      <template #right>
        <NavbarBtn :on-click="openCreateProductDialog">
          Create
        </NavbarBtn>
      </template>
    </NavbarBar>
    <div class="products-content">
      <ProductList :products="products" />
      <div class="products-content__footer">
        <button v-if="hasMoreProducts" class="load-more-btn" @click="loadMore">
          Load More
        </button>
      </div>
    </div>
    <!-- eslint-disable-next-line vue/no-v-model-argument -->
    <ProductDialog v-model:isOpen="isDialogOpen" @update:product="onCreateProduct" />
  </div>
</template>
<script lang="ts" setup>
import { onActivated } from 'vue'
definePageMeta({
  layout: 'default',
  keepalive: true
})
const { getProducts, createProduct } = useProductAPI()
const pageSize = 6
const hasMoreProducts = ref(true)
const data = await getProducts(null, pageSize)
const products = reactive(data)

const loadMore = async () => {
  const lastProduct = products[products.length - 1]
  const newProducts = await getProducts(lastProduct.product_id, pageSize)
  if (newProducts.length) {
    products.push(...newProducts)
  } else {
    hasMoreProducts.value = false
  }
}
const isDialogOpen = ref(false)
const openCreateProductDialog = () => {
  isDialogOpen.value = true
}
const onCreateProduct = async (product: Product) => {
  // TODO: add action about creating product
  const newProduct = await createProduct(product)
  products.push(newProduct)
  isDialogOpen.value = false
}

onActivated(() => {
  const router = useRouter()
  const scroll = router.options.history.state.scroll

  nextTick(() => {
    setTimeout(() => {
      // @ts-ignore-next-line
      window.scrollTo({ behavior: 'smooth', top: scroll?.top })
    }, 500)
  })
})
</script>
<style lang="scss" scoped>
.products-content {
  padding: 18px 25px;
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    @include breakpoint(xlpad) {
      margin-top: 25px;
    }
  }
  .load-more-btn{
    width: 180px;
    height: 60px;
    background-color: #DDDDDD;
    font-size: 18px;
    border: none;
    cursor: pointer;
    @include breakpoint(xlpad) {
      width: 150px;
      height: 48px;
    }
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
