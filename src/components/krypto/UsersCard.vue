<script setup>
  defineProps({
  info: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="card w-full max-w-350px h-450px flex flex-col items-center pt-67px">
    <img src="/images/krypto/users/icons.png" alt="">
    <h1 class="text-18px text-white opacity-60 mt-50px w-full max-w-277px leading-30px ">Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</h1>
    <div class="user flex flex-col items-center mt-24px">
      <img class="img w-48px h-48px rounded-1/2" :src="info.img" alt="">
      <div class="name text-24px leading-24px text-white mt-12px">{{ info.name }}</div>
      <div class="job-title text-16px leading-19px mt-4px">{{ info.jobTitle }}</div>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
  .card {
    border: 2px solid #EF443B;
    border-radius: 12px;
    &:hover {
      box-shadow: 0px 0px 40px rgba(239, 68, 59, 0.4);
    }
  }
  .job-title {
    color: #EF443B;
  }
</style>
