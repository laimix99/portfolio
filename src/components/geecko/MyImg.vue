<template>
  <div class="my-img">
    <!-- <img class="human" src="/images/geecko/third-section/human.png" alt=""> -->
    <img class="cloud" src="/images/geecko/third-section/cloud.png" alt="">
    <img class="life" src="/images/geecko/third-section/life.png" alt="">
    <img class="wood" src="/images/geecko/third-section/wood.png" alt="">
    <img class="stone" src="/images/geecko/third-section/stone.png" alt="">
    <img class="diamond" src="/images/geecko/third-section/diamond.png" alt="">
    <img class="characters" src="/images/geecko/third-section/characters.png" alt="">
    <img class="coin" src="/images/geecko/third-section/coin.png" alt="">
  </div>
</template>

<style scoped lang="scss">
      .human {
        @apply absolute z-10 top-110px left-0;
        // width: 120% !important;
        // background-size: contain;
      }
      .cloud {
        @apply absolute top-50px right-70px;
      }
      .life {
        @apply absolute top-100px right-350px;
      }
      .wood {
        @apply absolute top-200px right-390px z-5;
      }
      .stone {
        @apply absolute bottom-0 left-220px  w-128px;
      }
      .diamond {
        @apply absolute bottom-20px left-130px;
      }
      .characters {
        @apply absolute right-30px bottom-0 z-5;
      }
      .coin {
        @apply absolute right-250px top-140px;
      }
</style>
