<script setup>
const items = [
  '/images/trello/third-section/coinbase.svg',
  '/images/trello/third-section/john-deere.svg',
  '/images/trello/third-section/grand-hyatt.svg',
  '/images/trello/third-section/google.svg',
  '/images/trello/third-section/visa.svg',
  '/images/trello/third-section/zoom.webp',
]
</script>

<template>
  <div class="third-section">
    <div class="container">
      <h1>Join over 2,000,000 teams worldwide that are using Trello to get more done.</h1>
      <div class="items">
        <img :src="i" alt="" v-for="i in items">
      </div>
    </div>
  </div>
</template>

<style scoped>
  .third-section {
    @apply  flex flex-col items-center py-40px;
  }
  .container {
    @apply flex flex-col items-center w-full max-w-1100px px-0px;
  }
  h1 {
    @apply text-20px ;
    color: rgb(9, 30, 66);
  }
  .items {
    @apply flex flex-wrap w-full max-w-750px justify-center;
  }
  img {
    @apply mr-40px mt-40px;
    width: calc(25% - 40px);
  }
  @media screen and (max-width: 991px) {
    .container {
      @apply px-50px items-center;
    }
    h1 {
      @apply text-center text-2rem;
    }
    .items {
      @apply max-w-450px ;
    }
    img {
      @apply mr-40px mt-40px;
      width: calc(50% - 40px);
    }
  }
  @media screen and (max-width: 767px) {
    .container {
      @apply px-20px;
    }
  }
  @media screen and (max-width: 467px) {
    img {
      @apply w-200px mr-0;
    }
  }
</style>
