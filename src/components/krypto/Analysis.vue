<script setup>
  const items = [
    {img: '/images/krypto/аnalysis/icons-1.png', title: 'How to trade Bitcoin', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.', text: 'Learn more'},
    {img: '/images/krypto/аnalysis/icons-2.png', title: 'Gain the best exchange', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.', text: 'Learn more'},
    {img: '/images/krypto/аnalysis/icons-3.png', title: 'Reduce your loosing', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.', text: 'Learn more'},
    {img: '/images/krypto/аnalysis/icons-4.png', title: 'Win 50-50 trading strategy', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.', text: 'Learn more'},
  ]
</script>

<template>
  <div class="analysis">
    <h1 class="">Crypto Market Analysis</h1>
    <span>Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</span>
    <div class="items">
      <div class="item" v-for="item in items">
        <img :src="item.img" alt="">
        <div class="information">
          <div class="title">{{ item.title }}</div>
          <div class="description">{{ item.description }}</div>
          <div class="text">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <button class="">Enroll crypto University</button>
  </div>
</template>

<style scoped lang="scss">
  .analysis {
    @apply  flex flex-col items-center w-full pb-54px;
    h1 {
      @apply text-64px text-white leading-76px font-700;
      @media screen and (max-width: 767px) {
        @apply text-40px;
      }
    }
    span {
      @apply text-24px text-white opacity-60 leading-28px mt-20px;
      @media screen and (max-width: 767px) {
        @apply text-18px;
      }
    }
    .items {
      @apply  flex flex-row flex-wrap mt-80px w-full max-w-1110px pl-100px;
      @media screen and (max-width: 991px) {
        @apply flex-col max-w-600px;
      }
      @media screen and (max-width: 479px) {
        @apply items-start pl-20px;
      }
      .item {
        @apply  w-full w-1/2 flex flex-row mt-30px px-10px;
        @media screen and (max-width: 991px) {
          @apply w-full ;
        }
        img {
          @apply mr-30px;
          @media screen and (max-width: 767px) {
            @apply w-100px h-100px;
          }
        }
        .information {
          @apply  flex flex-col items-start;
          .title {
            @apply  text-24px leading-28px text-white text-left;
            @media screen and (max-width: 767px) {
              @apply text-18px;
            }
          }
          .description {
            @apply  text-18px text-white opacity-60 w-full max-w-250px leading-25px mt-18px text-left;
            @media screen and (max-width: 767px) {
              @apply text-14px; 
            }
          }
          .text {
            @apply  text-18px mt-24px;
            color: #EF443B;
            @media screen and (max-width: 767px) {
              @apply text-14px mt-10px;
            }
          }
        }
      }
    }
    button {
      @apply py-18px px-24px text-16px uppercase mt-46px;
      color: #fff;
      background: rgba(22, 14, 51, 0.5);
      border: 2px solid #EF443B;
      border-radius: 40px;
      &:hover {
        box-shadow: 0px 0px 40px rgba(239, 68, 59, 0.4);
      }
      @media screen and (max-width: 767px) {
        @apply py-12px px-16px text-12px;
      }
    }
  }
  // .text {
  //   color: #EF443B;
  // }
  // button {

  // }
</style>
