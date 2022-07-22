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
    @apply flex items-center h-full max-h-400px rounded-16px px-10px;
    background-color: #EEEEEE;
    @media screen and (max-width: 991px) {
      @apply flex-col items-center max-w-400px max-h-650px px-0;
    }
    @media screen and (max-width: 767px) {
      @apply max-w-400px;
    }
     @media screen and (max-width: 479px) {
      @apply max-w-350px;
    }
    img {
      @apply w-full h-full max-h-300px max-w-400px rounded-16px;
      // background: red;
      // border-radius: 16px 0px 0px 16px;
      @media screen and (max-width: 991px) {
        @apply ;
        border-radius: 16px 16px 0px 0px;
      }
    }
    .text {
      @apply flex flex-col items-start pl-20px;
      @media screen and (max-width: 991px) {
        @apply p-5px;
      }
      // @media screen and (max-width: 767px) {
      //   @apply pr-10px;
      // }
      h1 {
        @apply text-left text-18px leading-20px;
        color: rgb(29, 28, 28);
        @media screen and (max-width: 991px) {
          @apply leading-20px leading-16px;
        }
        @media screen and (max-width: 479px) {
          @apply text-15px;
        }
      }
      span {
        @apply text-16px font-700 mt-10px;
        @media screen and (max-width: 991px) {
          @apply mt-10px;
        }
      }
    }
  }
</style>

