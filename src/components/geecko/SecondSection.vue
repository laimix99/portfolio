<script setup>
const items = [
  {img: '/images/geecko/second-section/next.png', title: 'Identify the skills necessary <strong>for the role</strong>'},
  {img: '/images/geecko/second-section/next.png', title: 'We match potential candidates within one week to bring you the PERFECT MATCH'},
  {img: '/images/geecko/second-section/next.png', title: 'View their one-minute pitch and start on the day or schedule an interview '},
  {img: '/images/geecko/second-section/flask.png', title: 'Start your 100% <strong>free one-week trial</strong>'},
]
</script>

<template>
  <div class="second-section">
    <div class="container">
      <h1>How it works</h1>
      <div class="items">
        <div class="item" v-for="item in items">
          <img :src="item.img" alt="">
          <span v-html="item.title" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.second-section {
  @apply flex flex-col items-center w-full py-50px;
  .container {
    @apply flex flex-col items-start w-full max-w-1110px ;
    @media screen and (max-width: 991px) {
      @apply px-26px;
    }
    h1 {
      @apply text-52px font-700;
      color: #231F20;
    }
    .items {
      @apply flex flex-row items-center w-full mt-50px;
      @media screen and (max-width: 767px) {
        @apply flex-col items-start;
      }
      .item {
        @apply flex flex-row items-center mr-20px;
        @media screen and (max-width: 767px) {
          @apply mt-20px;
        }
        &:nth-child(1) {
          width: 360px;
          @media screen and (max-width: 767px) {
            @apply w-300px;
          }
        }
        &:nth-child(4) {
          width: 310px;
        }
        img {
          @apply w-30px h-30px mr-16px;
        }
        span {
          @apply text-16px text-left;
          font-family: "Proxima Nova";
          line-height: 140%;
          color: #4D4E57;
          @media screen and (max-width: 767px) {
            @apply w-full max-w-230px;
          }
        }
      }
    }
  }
}
</style>
