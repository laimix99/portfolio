<script setup>
  const items = [
    { img: '/images/breew/fifth-section/apple.png', title: 'Download for IOS' },
    { img: '/images/breew/fifth-section/google.png', title: 'Download for Android' },
    
  ]
</script>

<template>
  <div class="tenth-section">
    <div class="container">
      <div class="title">
        <h1>Breew</h1>
        <span>Breew gives you the opportunity to buy rapidly growing crypto currencies from your phone.</span>
      </div>
      <div class="items">
          <div class="item" v-for="item in items">
            <img :src="item.img" alt="">
            <span>{{ item.title }}</span>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .tenth-section {
    @apply w-full flex flex-col items-center pt-150px pb-200px;
    @media screen and (max-width: 991px) {
      @apply pb-100px;
    }
    .container {
      @apply flex flex-row justify-between items-end w-full max-w-1500px;
      @media screen and (max-width: 1500px) {
        @apply max-w-1100px px-10px flex-col items-center;
      }
      .title {
        @apply flex flex-col items-start;
        @media screen and (max-width: 1500px) {
          @apply items-center;
        }
        h1 {
          @apply text-75px leading-89px font-700; 
          color: #1A1A1A;
          @media screen and (max-width: 1500px) {
            @apply text-50px;
          }
        }
        span {
          @apply text-22px leading-33px w-full max-w-555px text-left mt-5px;
          color: #1A1A1A;
          @media screen and (max-width: 1500px) {
            @apply text-center;
          }
        }
      }
      .items {
        @apply flex mt-69px cursor-pointer;
        @media screen and (max-width: 991px) {
          @apply flex-col mt-30px;
        }
        .item {
          @apply bg-white rounded-23px py-34px px-54px mr-30px flex items-center ;
          border: 1px solid rgba(0, 0, 0, 0.2);
          @media screen and (max-width: 991px) {
            @apply mr-0 mt-20px;
          }
          img {
            @apply w-40px h-40px py-5px px-5px rounded-1/2 mr-30px;
            background-color: #0582CA;;
          }
          span {
            @apply text-25px leading-30px;
            color: #0582CA;
            @media screen and (max-width: 767px) {
              @apply text-18px;
            }
          }
        }
      }
    }
  }
</style>
