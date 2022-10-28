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
      <button class="load-more-btn" @click="loadMore">
        Load More
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const config = useRuntimeConfig()
const publicApiBase = config.public.apiBase
const { data: products } = await useFetch(publicApiBase + '/products.json')

const loadMore = () => {
  // TODO: add action about load more products
}

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
