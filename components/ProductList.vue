<template>
  <div class="product-list">
    <div class="product-list__content">
      <ClientOnly>
        <Grid
          :page-provider="pageProvider"
          :page-size="6"
          :length="products.length"
          class="grid"
        >
          <!-- ...slots -->
          <template #default="{ item, style }">
            <ProductItem
              :product="item"
              :style="style"
            />
          </template>
        </Grid>
      </ClientOnly>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Grid from 'vue-virtual-scroll-grid'
import { PropType } from 'vue'
const props = defineProps({
  products: {
    type: Object as PropType<Product[]>,
    required: true
  }
})
const pageProvider = async (pageNumber: number, pageSize: number) => {
  // TODO: refactor this, maybe can auto load more when scrolling to the section bottom
  await Promise.resolve()
  const startIndex = pageNumber * pageSize
  return props.products.slice(pageNumber * pageSize, startIndex + pageSize)
}
</script>

<style lang="scss" scoped>
.product-list {
  &__content {
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // gap: 23px 35px;
    // @include breakpoint(xlpad) {
    //   grid-template-columns: repeat(2, 1fr);
    //   gap: 12px;
    // }
  }
  .grid {
    display: grid;
    grid-gap: 23px 35px;;
    grid-template-columns: repeat(3, 1fr);
    @include breakpoint(xlpad) {
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
    }
  }
}
</style>
