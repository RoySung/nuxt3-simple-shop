<template>
  <div class="product-page">
    <NavbarBar title="Product Shelf">
      <template #left>
        <NavbarBtn>Button</NavbarBtn>
      </template>
      <template #right>
        <NavbarBtn>Button</NavbarBtn>
      </template>
    </NavbarBar>
    <div class="product-content">
      <ProductSection />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.product-content {
  padding: 30px;
}
</style>
