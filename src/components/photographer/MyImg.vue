<template>
  <div class="my-img">
    <div class="container">
      <img class="item-1" src="" alt="">
      <img class="item-2" src="/images/photographer/footer/item-2.png" alt="">
      <img class="item-3" src="/images/photographer/footer/item-3.png" alt="">
      <img class="item-4" src="/images/photographer/footer/item-4.png" alt="">
      <img class="item-5" src="/images/photographer/footer/item-5.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.my-img {
  @apply flex flex-col items-center;
  .container {
    @apply flex flex-row w-full max-w-1110px px-10px;
  }
  img {
    width: 100%;
    height: 100%;
    max-width: 200px;
    max-height: 280px;
    margin-right: 40px;
    // .item-1 {
    //   @apply -mt-130px;
    // }
    .item-2 {
      margin-bottom: -40px !important;
    }
  }
}
</style>
