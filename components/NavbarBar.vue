<template>
  <div class="navbar">
    <div class="navbar__btn-section">
      <slot name="left" />
    </div>

    <h1 class="navbar__title" v-text="title" />
    <div class="navbar__btn-section">
      <slot name="right" />
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: ''
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  width: 100%;
  height: 60px;
  background: #DDDDDD;
  &__btn-section {
    // display: flex;
  }
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 100%;
  }
}
</style>
