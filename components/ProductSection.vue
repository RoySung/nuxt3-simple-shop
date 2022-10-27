<template>
  <div class="product-section">
    <div
      class="product-section__img-wrap"
      :style="{
        backgroundImage: `url(${product.product_img_path})`
      }"
    />
    <div class="product-section__content">
      <h3 class="product-section__content__title" v-text="product.product_name" />
      <div class="product-section__content__desc" v-text="product.product_description" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'
defineProps({
  product: {
    type: Object as PropType<Product>,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.product-section {
  display: flex;
  justify-content: center;
  @include breakpoint(xlpad) {
    flex-direction: column;
    align-items: center;
  }
  &__img-wrap {
    width: 160px;
    aspect-ratio: 1;
    background-color: #C4C4C4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @include breakpoint(xlpad) {
      width: 250px;
    }
    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }
  &__content {
    width: 280px;
    height: 100%;
    padding: 0 22px;
    box-sizing: border-box;
    &__title {
      font-size: 24px;
      @include breakpoint(xlpad) {
        margin-top: 25px;
      }
    }
    &__desc {
      margin-top: 14px;
      font-size: 16px;
      color: #000000;
      @include breakpoint(xlpad) {
        font-size: 16px;
        margin-top: 25px;
      }
    }
  }
}
</style>
