<script setup>
  const services = [
    {img: '/images/breew/third-section/item.png', title: 'Lowest rates in the market'},
    {img: '/images/breew/third-section/item.png', title: 'Safe and speedy transactions'},
    {img: '/images/breew/third-section/item.png', title: '256-bit secure encryption '},
  ]
</script>

<template>
  <div class="third-section">
    <div class="container">
      <div class="left-col">
        <div class="title">
          <h1>02</h1>
          <span>08</span>
        </div>
        <div class="text">A crypto wallet from the future</div>
        <div class="description">Get the latest updates and functionalities using Breew wallet as your primary source of holding crypto.</div>
        <div class="services">
          <div class="service" v-for="service in services">
            <img :src="service.img" alt="">
            <span>{{ service.title }}</span>
          </div> 
        </div>
      </div>
      <div class="right-col">
        <img src="/images/breew/third-section/bg.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .third-section {
    @apply w-full flex flex-col items-center pt-145px pb-100px;
    .container {
      @apply w-full max-w-1500px flex justify-between items-center;
      @media screen and (max-width: 1500px) {
        @apply max-w-1100px px-10px;
      }
      @media screen and (max-width: 991px) {
        @apply flex-col items-center;
      }
      .left-col {
        @apply flex flex-col items-start w-full max-w-750px;
        @media screen and (max-width: 1500px) {
          @apply max-w-400px;
        }
        @media screen and (max-width: 991px) {
          @apply items-center max-w-full;
        }
        .title {
          @apply w-full max-w-198px flex justify-between relative;
          h1 {
            @apply text-35px font-700;
            color: #0582CA;
            &::after {
              content: '';
              height: 2px;
              width: 50px;
              background: rgba(0, 0, 0, 0.5);
              position: absolute;
              right: 38%;
              top: 50%; 
            }
          }
          span {
            @apply text-35px font-700;
            color: #0582CA;
          }
        }
        .text {
          @apply text-75px leading-89px font-700 not-italic text-left mt-50px w-full max-w-553px;
          color: #1A1A1A;
          @media screen and (max-width: 1500px) {
            @apply text-50px; 
          }
          @media screen and (max-width: 991px) {
            @apply text-center ;
          }
          @media screen and (max-width: 767px) {
            @apply text-40px;
          }
        }
        .description {
          @apply text-22px leading-33px text-black text-left w-full max-w-600px mt-50px;
          @media screen and (max-width: 991px) {
            @apply text-center;
          }
          @media screen and (max-width: 767px) {
            @apply text-18px leading-25px;
          }
        }
        .services {
          @apply flex flex-col mt-50px;
          .service {
            @apply flex items-center mt-24px;
            img {
              @apply w-37px h-37px mr-24px;
            }
            span {
              @apply text-22px leading-33px font-700;
              color: #1A1A1A;
              @media screen and (max-width: 767px) {
                @apply text-left;
              }
            }
          }
        }
      }
      .right-col {
        img {
          @media screen and (max-width: 1500px) {
            width: 100%;
            max-width: 700px;
          }
          @media screen and (max-width: 991px) {
            @apply -ml-50px mt-30px;
          }
          @media screen and (max-width: 767px) {
            @apply -ml-10px;
          }
        }
      }
    }
  }
</style>
