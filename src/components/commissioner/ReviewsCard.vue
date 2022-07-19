<script setup>
  defineProps({
  info: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="card">
    <img :src="info.img" alt="">
    <div class="text">
      <h1>{{ info.description }}</h1>
      <span>{{ info.name }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    @apply flex items-center h-full max-h-400px rounded-16px;
    background-color: #EEEEEE;
    img {
      @apply w-400px h-300px ;
      background: red;
      border-radius: 16px 0px 0px 16px;
    }
    .text {
      @apply flex flex-col items-start pl-20px;
      h1 {
        @apply text-left text-20px leading-30px;
        color: rgb(29, 28, 28);
      }
      span {
        @apply text-16px font-700 mt-30px;
      }
    }
  }
</style>

