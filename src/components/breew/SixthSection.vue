<script setup>
  const items = [
    {img: '/images/breew/sixth-section/item-1.png', title: '1. Download the app', description: 'The Breew app is available on apple store and playstore for easy downloads.'},
    {img: '/images/breew/sixth-section/item-2.png', title: '2. Create your wallet', description: 'Create your Breew wallet with the fastest flow and the most simple layouts.'},
    {img: '/images/breew/sixth-section/item-3.png', title: '3. Buy and trade crypto', description: 'Conduct speedy crypto transactions using the Breew app today. '},
  ]
</script>

<template>
  <div class="sixth-section">
    <div class="title">
      <h1>05</h1>
      <span>08</span>
    </div>
    <p>Get started with Breew in 3 easy steps</p>
    <div class="content">
      <div class="left-col">
        <img src="/images/breew/sixth-section/bg.png" alt="">
      </div>
      <div class="right-col">
        <div class="items">
          <div class="item" v-for="item in items">
            <img :src="item.img" alt="">
            <div class="item-text">
              <div class="item-text-title">{{ item.title }}</div>
              <div class="item-text-description">{{ item.description }}</div>
            </div>
          </div>
        </div>
        <div class="buttons">
          <button>Download app</button>
          <button>View pricing</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .sixth-section {
    @apply w-full flex flex-col items-center pb-178px;
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
      @apply text-75px leading-89px font-700 w-full max-w-850px mt-50px;
      color: #1A1A1A;
    }
    .content {
      @apply w-full max-w-1500px mt-200px flex justify-between;
      .left-col {}
      .right-col {
        @apply flex flex-col items-center w-full max-w-1/2;
        .items {
          @apply flex flex-col items-start w-full mt-10px;
          .item {
            @apply flex items-center items-start mb-100px;
            img {
              @apply mr-26px;
            }
            &-text {
              @apply flex flex-col items-start;
              &-title {
                @apply text-25px leading-41px font-700;
                color: #1A1A1A;
              }
              &-description {
                @apply text-22px leading-33px text-left mt-32px;
                color: #1A1A1A;
              }
            }
          }
        }
        .buttons {
          @apply mt-34px flex;
          button {
            @apply text-24px leading-36px font-700 mr-40px text-white rounded-31px py-34px px-51px w-300px;
            background: #0582CA;
            white-space: nowrap;
            &:hover {
              color: #0582CA;
              background: #FFFFFF;
              outline: 1px solid rgba(0, 0, 0, 0.2);
            }
          }
        }
      }
    }
  }
</style>
