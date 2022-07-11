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
    <img src="/images/krypto/users/icons.png" alt="">
    <h1>Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</h1>
    <div class="card-user">
      <img :src="info.img" alt="">
      <div class="card-user-name ">{{ info.name }}</div>
      <div class="card-user-job">{{ info.jobTitle }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .card {
    @apply w-full max-w-350px h-450px flex flex-col items-center pt-67px;
    border: 2px solid #EF443B;
    border-radius: 12px;
    &:hover {
      box-shadow: 0px 0px 40px rgba(239, 68, 59, 0.4);
    }
    @media screen and (max-width: 1000px) {
      height: 400px;
      padding-top: 20px;
    }
    img {
      @media screen and (max-width: 1000px) {
        width: 30px;
      }
    }
    h1 {
      @apply text-18px text-white opacity-60 mt-50px w-full max-w-277px leading-30px ;
    }
    &-user {
      @apply flex flex-col items-center mt-24px;
      img {
        @apply w-48px h-48px rounded-1/2;
      }
      &-name {
        @apply text-24px leading-24px text-white mt-12px;
      }
      &-job {
        @apply text-16px leading-19px mt-4px;
      }
    }
  }
</style>
