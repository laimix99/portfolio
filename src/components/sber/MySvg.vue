<script setup>
defineProps({
  color: {
    type: String,
  },
  name: {
    type: String,
  },
    width: {
    type: String
  },
  height: {
    type: String
  }
})
</script>

<template>
  <div class="my-svg">
    <svg v-if="name === 'prev'" :style="{ 'fill': color,  }" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M20.7 44.7 0 24 20.7 3.3l3.45 3.55L7 24l17.15 17.15Z"/></svg>
    <svg v-if="name === 'next'" :style="{ 'fill': color,  }"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="48" width="48"><path d="m15.2 45.1-4-4.05L28.35 23.9 11.2 6.75l4-4.05 21.2 21.2Z"/></svg>
    <svg v-if="name === 'down'" :style="{ 'fill': color,width: width, height: height }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" height="30" width="30"><path d="m24 30.75-12-12 2.15-2.15L24 26.5l9.85-9.85L36 18.8Z"/></svg>
  </div>
</template>

<style scoped lang="scss">
.my-svg {
  @apply flex flex-col items-center w-full;
}
</style>
