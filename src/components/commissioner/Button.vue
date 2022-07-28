<script setup>
const props = defineProps({
  view: {
    tupe: String,
    
  }
})
</script>

<template>
  <a>
    <button :class="view">
      <slot/>
    </button>
  </a>
</template>

<style scoped lang="scss">
.blue {
  @apply text-24px py-20px px-20px mt-40px rounded-8px;
  background-color: #0C698F;
  color: #F2F2F4;
  &:hover {
    background-color: hwb(197 4% 62%);
  }
}
.red {
  @apply text-24px py-20px px-20px mt-40px rounded-16px;
  background-color: red;
  color: black;
  &:hover {
    background-color: rgb(37, 17, 17);
  }
}

</style>
