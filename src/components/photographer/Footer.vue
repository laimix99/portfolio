<script setup>
import MyScg from './MySvg.vue'
const images = [
  '/images/photographer/footer/item-1.png',
  '/images/photographer/footer/item-2.png',
  '/images/photographer/footer/item-3.png',
  '/images/photographer/footer/item-4.png',
  '/images/photographer/footer/item-5.png',
]
</script>

<template>
  <div class="footer">  
    <div class="container">
      <h1>Follow me @BELLAADNDRV</h1>
      <div class="items">
        <img :src="image" alt="" v-for="image in images">
      </div>
      <div class="massengers">
        <MyScg
          width="30"
          fill="rgba(0, 0, 0, 0.6)"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  @apply flex flex-col items-center w-full relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    height: 50%;
    width: 100%;
    background: rgba(183, 76, 76, 0.35);
  }
  .container {
    @apply flex flex-col items-center w-full max-w-1110px px-10px;
    h1 {
      @apply text-36px font-700 text-white z-3 pt-50px pb-200px; 
      font-family: 'Poppins', sans-serif;
      @media screen and (max-width: 767px) {
        @apply pb-100px text-25px;
      }

    }
    .items {
      @apply flex flex-row w-full ;
      @media screen and (max-width: 991px) {
        @apply flex-wrap justify-center;
      }
      img {
        @apply w-full z-3 mx-10px ;
        max-width: 200px ;
        max-height: 280px;
        &:nth-child(1) {
          margin-top: -180px
        }
        &:nth-child(2) {
          margin-top: -100px
        }
        &:nth-child(3) {
          margin-top: -80px
        }
        &:nth-child(4) {
          margin-top: -140px
        }
        &:nth-child(5) {
          margin-top: -180px
        }
        @media screen and (max-width: 1117px) {
          @apply ;
          width: calc(33.33% - 20px);
          &:nth-child(1n) {
            margin-top: 0px
          }

        }
      }
    }
    .massengers {
      @apply pb-50px pt-80px;
      @media screen and (max-width: 767px) {
        @apply pt-30px;
      }
    }
  }
}
</style>
