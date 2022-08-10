<template>
  <div class="stop">
    <div class="item">
      <img src="/images/geecko/fourth-section/alarm.png" alt="">
      <h1><span>Stop wasting your time</span> with the classic <br/> 3 step interview and internal scoring</h1>
    </div>
  </div>
</template>

<style scoped lang="scss">
.stop {
  @apply flex flex-col items-center absolute -top-65px right-70px;
  @media screen and (max-width: 991px) {
    @apply right-20px;
  }
  @media screen and (max-width: 767px) {
    @apply left-0 text-12px -top-50px;
  }
  @media screen and (max-width: 430px) {
    @apply -top-60px;
  }
  @media screen and (max-width: 403px) {
    @apply -top-73px left-10px;
  }
  .item {
    @apply flex flex-row items-center py-12px px-40px;
    border-radius: 16px 16px 0px 0px;
    background: #FFD91D;
    
    img {
      @apply mr-22px;
    }
    h1 {
      @apply text-14px font-400 text-left;
      line-height: 140%;
      color: #263238;
      @media screen and (max-width: 767px) {
        @apply text-12px;
      }
      span {
        @apply font-600;
      }
    } 
  }
}
</style>
