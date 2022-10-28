<template>
  <div class="product-list">
    <div class="product-list__content">
      <ProductItem
        v-for="product in products"
        :key="product.product_id"
        :product="product"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
defineProps({
  products: {
    type: Object as PropType<Product[]>,
    required: true
  }
})
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
}
</style>
