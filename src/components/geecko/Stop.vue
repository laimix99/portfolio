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
      span {
        @apply font-600;
      }
    } 
  }
}
</style>
