<template>
  <button class="navbar-btn" @click="handleClick">
    <slot />
  </button>
</template>

<script lang="ts" setup>
import { PropType } from 'vue'

const props = defineProps({
  onClick: {
    type: Function as PropType<(e: MouseEvent) => void>,
    default: () => {}
  }
})

const handleClick = (e: MouseEvent): void => {
  const { onClick } = props
  if (onClick) { onClick(e) }
}
</script>

<style lang="scss" scoped>
.navbar-btn {
  background: #C4C4C4;
  font-size: 24px;
  font-weight: 400;
  height: 100%;
  border: none;
  padding: 0 15px;
  cursor: pointer;
  @include breakpoint(xlpad) {
    font-size: 22px;
  }
  &:hover {
    opacity: 0.8;
  }
}
</style>
