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
        @media screen and (max-width: 1100px) {
          @apply top-180px left-0;
        }
      }
      .life {
        @apply absolute top-30px right-200px;
        @media screen and (max-width: 767px) {
          @apply right-30px top-130px;
        }
      }
      .wood {
        @apply absolute top-200px right-390px z-5;
        @media screen and (max-width: 1100px) {
          @apply right-170px w-130px;
        }
        @media screen and (max-width: 767px) {
          @apply right-40px top-270px;
        }
      }
      .stone {
        @apply absolute bottom-0 left-220px  w-128px;
        @media screen and (max-width: 1100px) {
          @apply top-650px left-0;
        }
      }
      .diamond {
        @apply absolute bottom-20px left-130px;
        @media screen and (max-width: 1100px) {
          @apply top-270px left-40px;
        }
      }
      .characters {
        @apply absolute right-30px bottom-0 z-5;
        @media screen and (max-width: 767px) {
          @apply w-150px;
        }
      }
      .coin {
        @apply absolute right-200px top-110px;
        @media screen and (max-width: 767px) {
          @apply right-70px top-200px;
        }
      }
</style>
