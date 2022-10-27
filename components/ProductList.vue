<template>
  <div class="product-list">
    <div class="product-list__content">
      <ProductItem
        v-for="product in products"
        :key="product.product_id"
        :product="product"
      />
    </div>
    <div class="product-list__footer">
      <button class="load-more-btn">
        Load More
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const fakeProduct: Product = {
  product_id: 'P{id}', // string
  product_name: '企鵝嘟嘟玩偶', // string
  product_price: 55023.0, // number
  product_category: '玩偶', // string
  product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
  product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
}
const products = reactive(Array.from(Array(9)).map((_, index) => {
  const product = { ...fakeProduct }
  product.product_id = product.product_id.replace('{id}', index.toString())
  return product
}))

</script>

<style lang="scss" scoped>
.product-list {
  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 23px 35px;
    @include breakpoint(xlpad) {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }
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
    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
