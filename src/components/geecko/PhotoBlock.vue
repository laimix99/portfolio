<template>
  <div class="photo-block bg">
    <img class="item-1" src="/images/geecko/sixth-section/item-1.png" alt="">
    <img class="item-2" src="/images/geecko/sixth-section/item-2.png" alt="">
    <img class="item-3" src="/images/geecko/sixth-section/item-3.png" alt="">
    <img class="item-4" src="/images/geecko/sixth-section/item-4.png" alt="">
    <img class="item-5" src="/images/geecko/sixth-section/item-5.png" alt="">
    <img class="item-6" src="/images/geecko/sixth-section/item-6.png" alt="">
    <img class="item-7" src="/images/geecko/sixth-section/item-7.png" alt="">
    <img class="item-8" src="/images/geecko/sixth-section/item-8.png" alt="">
    <img class="item-9" src="/images/geecko/sixth-section/item-9.png" alt="">
    <img class="item-10" src="/images/geecko/sixth-section/item-10.png" alt="">
  </div>
</template>

<style scoped lang="scss">
.photo-block {
  @apply w-full max-w-950px relative h-290px ;
  .item-1 {
    @apply absolute left-0 bottom-50px;
  }
  .item-2 {
    @apply absolute left-170px bottom-80px;
  }
  .item-3 {
    @apply absolute left-230px bottom-20px;
  }
  .item-4 {
    @apply absolute left-350px top-80px;
  }
  .item-5 {
    @apply absolute left-500px top-30px;
  }
  .item-6 {
    @apply absolute right-250px bottom-20px z-2;
  }
  .item-7 {
    @apply absolute right-200px bottom-100px;
  }
  .item-8 {
    @apply absolute right-120px bottom-0px;
  }
  .item-9 {
    @apply absolute right-60px top-0px;
  }
  .item-10 {
    @apply absolute right-0 top-50px;
  }

}
</style>
