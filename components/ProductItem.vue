<template>
  <NuxtLink :to="{ name: 'products-id', params: { id: product.product_id }}">
    <div class="product-item">
      <div
        class="product-item__img-wrap"
        :style="{
          backgroundImage: `url(${product.product_img_path})`
        }"
      />
      <div class="product-item__content">
        <h3 class="product-item__content__title" v-text="product.product_name" />
        <div class="product-item__content__desc" v-text="product.product_description" />
      </div>
    </div>
  </NuxtLink>
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
.product-item {
  display: flex;
  flex-direction: row;
  position: relative;
  height: 160px;
  @include breakpoint(xlpad) {
    flex-direction: column;
    height: auto;
  }
  &:hover {
    opacity: 0.8;
  }
  &__img-wrap {
    width: 160px;
    background-color: #C4C4C4;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @include breakpoint(xlpad) {
      width: 100%;
    }
    &:before {
      content: "";
      display: block;
      padding-top: 100%;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #DDDDDD;
    flex: 1;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    @include breakpoint(xlpad) {
      padding: 10px;
    }
    &__title {
      font-size: 24px;
      @include breakpoint(xlpad) {
        font-size: 20px;
      }
    }
    &__desc {
      margin-top: 5px;
      font-size: 18px;
      color: #6B6B6B;
      text-overflow:ellipsis;
      overflow:hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      white-space: normal;
      @include breakpoint(xlpad) {
        font-size: 16px;
      }
    }
  }
}
</style>
