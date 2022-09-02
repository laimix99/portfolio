<script setup>
import MyButtons from './MyButtons.vue'
</script>

<template>
  <div class="sixth-section">
    <div class="container">
      <div class="content">
        <h1>Оторвись на карнавале <br/> и стань лучшим игроком</h1>
        <MyButtons>
          начать игру
        </MyButtons>
      </div>
      <div class="message">
        <h2>Тебя все <br/> заждались, <br/> Скорее!</h2>
      </div>
      <img class="hare" src="/images/avito-layout/sixth-section/hare.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.sixth-section {
  @apply flex flex-col items-center w-full pb-60px pt-30px;
  @media screen and (max-width: 767px) {
    @apply pt-0 pb-0;
  }
  .container {
    @apply flex flex-col items-center w-full max-w-1150px px-5px relative;
    @media screen and (max-width: 767px) {
      @apply px-0;
    }
    .content {
      @apply flex flex-col items-center w-full h-340px rounded-20px pt-60px;
      background: url('/images/avito-layout/sixth-section/bg.png')center center/cover no-repeat;
      box-shadow: 4px 4px 0px rgba(134, 126, 118, 0.62);
      @media screen and (max-width: 767px) {
        @apply h-683px;
        border-radius: 0;
        box-shadow: none;
        // background-size: 200%;
      }
      h1 {
        @apply text-40px font-800 text-white uppercase leading-46px italic mb-48px;
        font-family: 'Jost', sans-serif;
        @media screen and (max-width: 767px) {
          @apply text-32px;
        }
      }
    }
    .message {
      @apply w-290px h-200px flex flex-col items-center justify-center absolute;
      background: url('/images/avito-layout/sixth-section/message.png')center center/contain no-repeat;
      top: -100px;
      right: 5%;
      @media screen and (max-width: 767px) {
        @apply top-290px;
        right: 0;
        left: 0;
      }
      h2 {
        @apply text-18px font-700 leading-24px uppercase;
        font-family: 'Jost', sans-serif;
        color: #01002A;
      }
    }
    .hare {
      @apply absolute;
      right: 0;
      bottom: -60px;
      @media screen and (max-width: 991px) {
        @apply w-187px h-228px;
      }
      @media screen and (max-width: 767px) {
        @apply bottom-0;
      }
    }
  }
}
</style>
