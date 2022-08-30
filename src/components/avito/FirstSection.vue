<script setup>
import MyButtons from './MyButtons.vue'
</script>

<template>
  <div class="first-section">
    <div class="container">
      <div class="items">
        <h1>Крупнейший <span>карнавал</span> для кодеров</h1>
        <p>Заходи на карнавал и ощути атмосферу безудержного веселья! Что тебе ближе - код гольф или фикс колеса обозрения? Выбор только за тобой!</p>
        <MyButtons class="button">
          начать
        </MyButtons>
        <h2>avito.tech</h2>
      </div>
      <div class="messages">
        <h2>проверим <br/> кто лучший в код гольфе?</h2>
      </div>
    </div>
    <img src="/images/avito-layout/first-section/cat.png" alt="">
  </div>
</template>

<style scoped lang="scss">
.first-section {
  @apply flex flex-col items-center h-673px w-full;
  background: url('/images/avito-layout/first-section/bg.png')center center/cover no-repeat;
  .container {
    @apply flex flex-col items-center w-full max-w-1150px relative px-5px;
    .items {
      @apply flex flex-col items-start w-full pl-97px pt-77px pb-87px mt-50px relative;
      background: radial-gradient(85.41% 129.58% at 14.8% 3.8%, rgba(13, 15, 21, 0.86) 55.21%, rgba(0, 0, 0, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
      border: 2px solid rgba(241, 239, 229, 0.2);
      border-radius: 20px;
      h1 {
        @apply text-42px font-800 uppercase text-white w-full max-w-350px text-left leading-56px;
        font-family: 'Jost', sans-serif;
        span {
          color: #FFD465;

        }
      }
      p {
        @apply text-20px font-400 leading-26px w-full max-w-540px text-left mt-24px;
        color: #ACACC1;
        font-family: 'Jost', sans-serif;
      }
      .button {
        @apply mt-70px;
      }
      h2 {
        @apply text-25px text-white py-10px px-15px absolute;
        top: -25px;
        left: 50%;
        transform: translate(-50%);
        background: #1B1A29;
        box-shadow: 3px 3px 0px #000000;
        border-radius: 40px;
        &::before {
          content: url('/images/avito-layout/first-section/comet.png');
          // width: 20px;
          // height: 14px;
          // margin-top: 10px
        }
      }
    }
    .messages {
      @apply w-192px h-117px absolute bottom-220px;
      background: url('/images/avito-layout/first-section/messages.png')center center/contain no-repeat;
      left: 65%;
      h2 {
        @apply text-13px font-700 uppercase text-center ml-40px mt-30px w-full max-w-110px;
        font-family: 'Jost', sans-serif;
        color: #01002A;
      }
    }
  }
  img {
    @apply w-232px h-347px absolute;
    bottom: 0;
    left: 75%;
  };
}
</style>
