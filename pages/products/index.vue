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
      <ProductList />
    </div>
    <!-- eslint-disable-next-line vue/no-v-model-argument -->
    <ProductDialog v-model:isOpen="isDialogOpen" @update:product="createProduct" />
  </div>
</template>
<script lang="ts" setup>
const isDialogOpen = ref(false)
const openCreateProductDialog = () => {
  isDialogOpen.value = true
}
const createProduct = (product: Product) => {
  // TODO: add action about creating product
  console.log('product: ', product)
}
</script>
<style lang="scss" scoped>
.products-content {
  padding: 18px 25px;
}
</style>
