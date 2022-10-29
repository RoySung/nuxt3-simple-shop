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
definePageMeta({
  layout: 'default',
  keepalive: true
})
const { getProduct, updateProduct } = useProductAPI()

const { params } = useRoute()

const data = await getProduct(params.id as string)
const product = ref(data)
const isDialogOpen = ref(false)
const openEditProductDialog = () => {
  isDialogOpen.value = true
}
const editProduct = async (editedProduct: Product) => {
  const newProduct = await updateProduct(editedProduct)
  product.value = newProduct
  isDialogOpen.value = false
}
</script>
<style lang="scss" scoped>
.product-content {
  padding: 30px;
}
</style>
