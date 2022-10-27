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
  line-height: 28px;
  border: none;
  padding: 16px 15px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
}
</style>
