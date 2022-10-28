<template>
  <div class="navbar">
    <div class="navbar__btn-section left">
      <slot name="left" />
    </div>

    <h1 class="navbar__title" v-text="title" />
    <div class="navbar__btn-section right">
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
  position: relative;
  display: flex;
  width: 100%;
  height: 60px;
  background: #DDDDDD;
  @include breakpoint(xlpad) {
    height: 48px;
  }
  &__btn-section {
    height: 100%;
    position: absolute;
    top: 0;
    &.left {
      left: 0;
    }
    &.right {
      right: 0;
    }
  }
  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    width: 100%;
    @include breakpoint(xlpad) {
      font-size: 22px;
    }
  }
}
</style>
