<script setup>
  const items = [
    { img: '/images/breew/fifth-section/apple.png', title: 'Download for IOS' },
    { img: '/images/breew/fifth-section/google.png', title: 'Download for Android' },
    
  ]
</script>

<template>
  <div class="ninth-section">
    <div class="container">
      <div class="title">
        <h1>07</h1>
        <span>08</span>
      </div>
      <p>Download the crypto wallet of the future, today.</p>
       <div class="items">
          <div class="item" v-for="item in items">
            <img :src="item.img" alt="">
            <span>{{ item.title }}</span>
          </div>
        </div>
        <div class="phone">
          <img src="/images/breew/ninth-section/bg-2.png" alt="">
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .ninth-section {
    @apply w-full flex flex-col items-center pt-190px h-full max-h-1548px;
    overflow-y: hidden;
    background: #EAEAEA;
    @media screen and (max-width: 1500px) {
      @apply max-h-1000px;
    }
    @media screen and (max-width: 767px) {
      @apply pt-50px max-h-900px;
    }
    .container {
      @apply flex flex-col items-center w-full max-w-1500px;
      @media screen and (max-width: 1500px) {
        @apply max-w-1100px px-10px;
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
      p {
        @apply text-75px leading-89px font-700 w-full max-w-960px mt-50px;
        color: #1A1A1A;
        @media screen and (max-width: 1500px) {
          @apply text-50px;
        }
        @media screen and (max-width: 767px) {
          @apply text-40px;
        }
      }
      .items {
        @apply flex mt-69px;
        @media screen and (max-width: 767px) {
          @apply flex-col items-center;
        }
        .item {
          @apply bg-white rounded-23px py-34px px-54px mr-30px flex items-center ;
          @media screen and (max-width: 767px) {
            @apply mr-0 w-350px mt-20px px-10;
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
      .phone {
        @apply flex flex-col items-center;
        img {
          @apply h-full mt-100px;
          @media screen and (max-width: 1500px) {
            width: 50%;
          }
          @media screen and (max-width: 767px) {
            width: 70%;
          }
        }
      }
    }
  }
</style>
