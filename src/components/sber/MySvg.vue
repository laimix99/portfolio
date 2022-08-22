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
    <svg v-if="name === 'down'" :style="{ 'fill': color,width: width + 'px', height: height + 'px' }"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 31.9 10.8 18.7l3.35-3.35 9.85 9.9 9.85-9.85 3.35 3.35Z"/></svg>
    <svg v-if="name === 'up'" :style="{ 'fill': color,width: width + 'px', height: height + 'px' }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="m14.15 31.9-3.35-3.35L24 15.35 37.2 28.5l-3.35 3.35L24 22Z"/></svg>
  </div>
</template>

<style scoped lang="scss">
.my-svg {
  @apply flex flex-col items-center w-full;
}
</style>
