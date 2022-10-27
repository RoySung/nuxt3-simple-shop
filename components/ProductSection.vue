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
const product = reactive({
  product_id: 'P{id}', // string
  product_name: '企鵝嘟嘟玩偶', // string
  product_price: 55023.0, // number
  product_category: '玩偶', // string
  product_img_path: 'https://picsum.photos/800/600', // 請一律使用此路徑
  product_description: '此玩偶乃用純天然企鵝毛所製而成，親近肌膚不會引發幼童過敏，內容物填充採用美國原裝進口的棉花，絕對沒有使用黑奴採集，完全100%純棉！'
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
