<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: [String, Object],
    default: 'robot',
  },
  w: {
    type: Number,
    default: 24,
  },
  h: {
    type: Number,
  },
})
const height = computed(() => {
  return props.h || props.w
})
</script>

<template>
  <svg
    class="base-icon"
    :width="`${w}px`"
    :height="`${height}px`"
    :style="{
      minWidth: `${w}px`,
    }"
    @click="($event) => $emit('click', $event)"
  >
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<style scoped>
.base-icon {
  display: block;
}
</style>
