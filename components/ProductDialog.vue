<template>
  <div v-if="isOpen" class="product-dialog">
    <div class="product-dialog__content">
      <button class="close-btn" @click="closeDialog">
        X
      </button>
      <form
        class="product-form"
        @submit.prevent="emitNewProduct"
      >
        <div class="product-form__field">
          <label for="product-name">Name *</label>
          <input id="product-name" v-model="newProduct.product_name" type="text">
        </div>
        <div class="product-form__field">
          <label for="product-category">Category *</label>
          <input id="product-category" v-model="newProduct.product_category" type="text">
        </div>
        <div class="product-form__field">
          <label for="product-price">Price *</label>
          <input id="product-price" v-model="newProduct.product_price" type="number">
        </div>
        <div class="product-form__field">
          <label for="product-img">Img *</label>
          <input id="product-img" v-model="newProduct.product_img_path" type="text">
        </div>
        <div class="product-form__field product-form__field--textarea">
          <label for="product-desc">Description *</label>
          <textarea id="product-desc" v-model="newProduct.product_description" ows="4" cols="50" />
        </div>
        <div class="product-form__footer">
          <button class="save-btn" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, onMounted } from 'vue'
const defaultProduct: Product = {
  product_id: '',
  product_name: 'Default Name',
  product_price: 0,
  product_category: '',
  product_img_path: 'https://picsum.photos/800/600',
  product_description: ''
}
const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  product: {
    type: Object as PropType<Product>,
    default: () => {
      return {
        product_id: '',
        product_name: 'New Product',
        product_price: 0,
        product_category: '',
        product_img_path: 'https://picsum.photos/800/600',
        product_description: ''
      }
    }
  }
})
const emit = defineEmits(['update:isOpen', 'update:product'])

const newProduct = reactive({ ...defaultProduct })
const emitNewProduct = () => {
  emit('update:product', { ...newProduct })
}
const setupProduct = () => {
  const product = props.product
  newProduct.product_id = product.product_id
  newProduct.product_name = product.product_name
  newProduct.product_category = product.product_category
  newProduct.product_price = product.product_price
  newProduct.product_description = product.product_description
  newProduct.product_img_path = product.product_img_path
}
const closeDialog = () => {
  setupProduct()
  emit('update:isOpen', false)
}

onMounted(() => {
  setupProduct()
})
</script>

<style lang="scss" scoped>
.product-dialog {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: -webkit-fill-available;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    opacity: 0.5;
  }
  &__content {
    position: relative;
    background: #FFFFFF;
    border: 1px solid #000000;
    padding: 54px 25px 18px;
    width: fit-content;
    height: fit-content;
  }
  .close-btn {
    position: absolute;
    top: 14px;
    right: 16px;
    font-size: 26px;
    border: 0;
    background: none;
    @include breakpoint(xlpad) {
      font-size: 24px;
    }
    &:hover {
      opacity: 0.8;
      cursor: pointer;
    }
  }
  .product-form {
    &__field {
      height: 40px;
      font-size: 16px;
      @include breakpoint(xlpad) {
        display: flex;
        flex-direction: column;
        height: 59px;
      }
      &:not(:first-of-type) {
        margin-top: 10px;
      }
      label {
        display: inline-block;
        width: 105px;
        @include breakpoint(xlpad) {
          margin-bottom: 3px;
        }
      }
      input {
        background: #DDDDDD;
        border: none;
        height: 100%;
        width: 300px;
        padding: 0 10px;
        box-sizing: border-box;
      }
      &--textarea {
        height: 160px;
        display: flex;
        label {
          padding-top: 10px;
          display: flex;

        }
        textarea {
          width: 300px;
          background: #DDDDDD;
          border: none;
          box-sizing: border-box;
          padding: 10px;
          height: 100%;
        }
      }
    }
    &__footer {
      margin-top: 20px;
      .save-btn {
        width: 150px;
        height: 48px;
        background: #DDDDDD;
        border: none;
        margin-left: 105px;
        cursor: pointer;
        @include breakpoint(xlpad) {
          width: 120px;
          height: 36px;
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
</style>
