<template>
  <div class="products-page">
    <NavbarBar title="Product Shelf">
      <template #left>
        <NavbarBtn>Button</NavbarBtn>
      </template>
      <template #right>
        <NavbarBtn>Button</NavbarBtn>
      </template>
    </NavbarBar>
    <div class="products-content">
      <ProductList />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.products-content {
  padding: 18px 25px;
}
</style>
