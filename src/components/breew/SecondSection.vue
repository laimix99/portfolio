<script setup>
  const items = [
    { img: '/images/breew/second-section/item-1.png', text: 'Buy 100+ crypto assets', description: 'Pick from a variety of crypto assets to buy, hold, stake and sell.'  },
    { img: '/images/breew/second-section/item-2.png', text: 'Secure wallet', description: 'Your crypto assets are protected by the latest security measures.'  },
    { img: '/images/breew/second-section/item-3.png', text: 'Send & receive easily', description: 'Send and receive crpto assets efficently with Breew app.'  },
    { img: '/images/breew/second-section/item-4.png', text: 'Invest in real time', description: 'Invest live without disruption and interruption from 3rd parties.'  },
    { img: '/images/breew/second-section/item-5.png', text: 'Watch & analyze charts', description: 'Simple and accessible layout for monitoring your trading.'  },
  ]
</script>

<template>
  <div class="second-section">
    <div class="title">
      <h1>01</h1>
      <span>08</span>
    </div>
    <p>Full featured to buy, trade and invest in crypto</p>
    <div class="items">
      <div class="item" v-for="item in items">
        <img :src="item.img" alt="">
        <div class="text">{{ item.text }}</div>
        <div class="description">{{ item.description }}</div>
      </div>
    </div>
    <div class="buttons">
      <button>Download app</button>
      <button>View pricing</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .second-section {
    @apply w-full flex flex-col items-center pt-102px pb-250px;
    background: #B9B9B9;
    @media screen and (max-width: 767px) {
      @apply pb-50px;
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
      @apply text-75px leading-89px font-700 w-full max-w-920px pt-50px;
      color: #1A1A1A;
      @media screen and (max-width: 1500px) {
        @apply text-50px; 
      }
      @media screen and (max-width: 767px) {
        @apply text-40px;
      }
    }
    .items {
      @apply w-full max-w-1500px flex flex-wrap mt-80px;
      @media screen and (max-width: 1500px) {
        @apply max-w-1100px;
      }
      @media screen and (max-width: 767px) {
        @apply mt-30px;
      }
      .item {
        @apply w-full flex relative flex-col pt-157px pb-117px pl-43px rounded-40px items-start mr-20px ml-20px mt-62px;
        max-width: calc(33.33% - 40px);
        background: #FFFFFF;
        @media screen and (max-width: 1500px) {
          @apply py-30px px-20px;
        }
        @media screen and (max-width: 991px) {
        @apply mx-10px;
        max-width: calc(50% - 20px);
        }
        @media screen and (max-width: 767px) {
          @apply ;
          max-width: 100%;
        }
        &:first-child {
          max-width: calc(66.66% - 45px);
          position: relative;
           @media screen and (max-width: 991px) {
            max-width: calc(100% - 20px);
           }
          &::after {
            content: '';
            background: url('/images/breew/second-section/phone.png')center bottom/contain no-repeat;
            position: absolute;
            bottom: 0;
            right: 10px;
            height: 80%;
            width: 470px;
            @media screen and (max-width: 1500px) {
              width: 300px;
              right: 5px; 
            }
            @media screen and (max-width: 767px) {
              @apply hidden;
            }
          }
        }
        img {
          @apply w-92px h-97px; 
        }
        .text {
          @apply text-30px font-700 leading-36px mt-38px;
          color: #1A1A1A;
          @media screen and (max-width: 1500px) {
            @apply text-left;
          }
        }
        .description {
          @apply text-left text-22px leading-33px w-full max-w-360px mt-16px;
        }
      }
    }
    .buttons {
      @apply mt-99px flex;
      @media screen and (max-width: 767px) {
        @apply flex-col items-center mt-50px;
      }
      button {
        @apply text-24px leading-36px font-700 mr-40px text-white rounded-31px py-34px px-51px;
        background: #0582CA;
        white-space: nowrap;
        @media screen and (max-width: 1500px) {
          @apply text-20px px-30px py-30px mr-20px;
        }
        @media screen and (max-width: 767px) {
          @apply mt-10px mr-0 w-300px;
        }
        &:hover {
          color: #0582CA;
          background: #FFFFFF;
          outline: 1px solid rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
</style>
