<template>
  <div class="product-page">
    <NavbarBar :title="product.product_name">
      <template #left>
        <NuxtLink :to="{ name: 'products'}">
          <NavbarBtn>Back</NavbarBtn>
        </NuxtLink>
      </template>
      <template #right>
        <NavbarBtn :on-click="openEditProductDialog">
          Edit
        </NavbarBtn>
      </template>
    </NavbarBar>
    <div class="product-content">
      <ProductSection :product="product" />
    </div>
    <!-- eslint-disable-next-line vue/no-v-model-argument -->
    <ProductDialog v-model:isOpen="isDialogOpen" :product="product" @update:product="editProduct" />
  </div>
</template>
<script lang="ts" setup>
const product = reactive({
  product_id: 'P{id}', // string
  product_name: '企鵝嘟嘟玩偶', // string
  product_price: 55023.0, // number
  product_category: '玩偶', // string
  product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
  product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
})
const isDialogOpen = ref(false)
const openEditProductDialog = () => {
  isDialogOpen.value = true
}
const editProduct = (product: Product) => {
  // TODO: add action about editing product
  console.log('product: ', product)
}
</script>
<style lang="scss" scoped>
.product-content {
  padding: 30px;
}
</style>
