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
    @media screen and (max-width: 991px) {
      @apply flex-col items-center max-w-400px max-h-500px;
    }
    @media screen and (max-width: 767px) {
      @apply max-w-250px;
    }
     @media screen and (max-width: 479px) {
      @apply max-w-300px;
    }
    img {
      @apply w-full h-full max-w-400px;
      background: red;
      border-radius: 16px 0px 0px 16px;
      @media screen and (max-width: 991px) {
        @apply ;
        border-radius: 16px 16px 0px 0px;
      }
    }
    .text {
      @apply flex flex-col items-start pl-20px;
      @media screen and (max-width: 991px) {
        @apply py-20px;
      }
      h1 {
        @apply text-left text-20px leading-30px;
        color: rgb(29, 28, 28);
        @media screen and (max-width: 991px) {
          @apply leading-20px;
        }
      }
      span {
        @apply text-16px font-700 mt-30px;
      }
    }
  }
</style>

