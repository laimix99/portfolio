<script setup>
  const items = [
    {img: '/images/breew/eighth-section/item-1.png', date: 'Mar 5, 2022', title: 'Best platform to trade BTC on your phone', },
    {img: '/images/breew/eighth-section/item-2.png', date: 'Apr 20, 2022', title: 'What is the best and most secure wallet?', },
    {img: '/images/breew/eighth-section/item-3.png', date: 'May 9, 2022', title: '5 great crypto apps you should know', }
  ]
</script>

<template>
  <div class="eighth-section">
    <div class="container">
      <div class="title">
        <h1>06</h1>
        <span>08</span>
      </div>
      <p>Latest resources</p>
      <div class="items">
        <div class="item" v-for="item in items">
          <img :src="item.img" alt="">
          <div class="item-date">
            <h2>Apps</h2>
            <h3>{{ item.date }}</h3>
          </div>
          <div class="item-title">{{ item.title }}</div>
          <h4>Read more</h4>
        </div>
      </div>
      <div class="buttons">
        <button>Browse more posts</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .eighth-section {
    @apply flex flex-col items-center w-full pt-200px pb-200px;
    .container {
      @apply w-full max-w-1500px flex flex-col items-start;
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
        @apply text-75px leading-89px mt-42px font-700;
        color: #1A1A1A; 
      }
      .items {
        @apply w-full flex mt-160px;
        .item {
          @apply flex flex-col items-start bg-white py-37px px-33px mr-29px;
          border: 1px solid rgba(0, 0, 0, 0.2);
          border-radius: 40px;
          width: calc(33.33% - 29px);
          &-date {
            @apply flex w-full justify-between max-w-291px relative mt-40px;
            h2 {
              @apply text-25px leading-29px ;
              color: #626262;
              &::after {
                content: '';
                border: 2px solid rgba(0, 0, 0, 0.5);
                border-radius: 8px;
                position: absolute;
                width: 50px;
                top: 50%;
                right: 57%;
              }
            }
            h3 {
              @apply text-25px leading-29px ;
              color: #626262;
            }
          }
          &-title {
            @apply text-35px leading-41px font-700 text-left mt-23px;
            color: #1A1A1A;
          }
          h4 {
            @apply text-25px leading-30px font-700 mt-26px;
            color: #0582CA;
          }
        }
      }
      .buttons {
        @apply w-full mt-90px;
        button {
          @apply bg-white rounded-31px py-35px px-58px text-24px font-700;
          border: 1px solid rgba(0, 0, 0, 0.2);
          color: #0582CA;
          &:hover {
            color: #fff;
            background-color: #0582CA;
          }
        }
      }
    }
  }
</style>
