<script setup>
import MyImg from './MyImg.vue'
import Card from './Card.vue'
</script>

<template>
  <div class="third-section">
    <div class="container">
      <h1> <span>Why</span> over 156K developers <span>have chosen</span> Geecko?</h1>
      <div class="content">
        <div class="blocks">
          <div class="block-left">
            <div class="block-left-title">Designed <strong>by and for</strong> Engineers</div>
            <div class="block-left-description"><strong>Since 2018</strong>, Geecko has targeted competent developers, challenging them with...</div>
            <div class="block-left-text">Award winning <br/> programming tools </div>
            <p>games</p>
          </div>
          <div class="block-right">
            <div class="block-right-title"><strong>100k+</strong> <br/>hours of games</div>
            <div class="block-right-description">which guarantees increasing the interest of the best developers around the world, improving your IT HR branding</div>
          </div>
        </div>
        <MyImg/>
        <Card/>
      </div>
    </div>
    <img class="human" src="/images/geecko/third-section/human.png" alt="">
  </div>
</template>

<style scoped lang="scss">
.third-section {
  @apply flex flex-col items-center w-full pt-100px pb-150px relative;
  .container {
    @apply flex flex-col items-start w-full max-w-1110px px-10px ;
    h1 {
      @apply text-52px font-400 w-full max-w-611px text-left;
      font-family: "Proxima Nova";
      color: #231F20;
      span {
        @apply font-600;
      }
    }
    .content {
      @apply flex flex-col items-center w-full relative pb-260px;
      .blocks {
        @apply flex flex-row items-center ;
        .block-left {
          @apply flex flex-col items-start pt-35px pb-30px pl-54px pr-120px box-border w-full max-w-540px z-1;
          background: #F2F2F0;
          border: 0.5px solid #FFFFFF;
          border-radius: 15px;
          &-title {
            @apply text-32px font-400 text-left;
            line-height: 140%;
            color: #263238;
            font-family: "Proxima Nova";
          }
          &-description {
            @apply text-18px font-400 text-left mt-10px w-full  w-full;
            font-family: "Proxima Nova";
            line-height: 140%;
            color: #4D4E57;
          }
          &-text {
            @apply text-20px font-400 text-left mt-20px relative pl-38px;
            font-family: "Proxima Nova";
            line-height: 120%;
            color: #263238;
            &::after {
              @apply absolute left-0 top-0;
              content: url('/images/geecko/third-section/jlstick.png');
            }
            &::before {
              @apply absolute top-22px left-25px;
              content: url('/images/geecko/third-section/line.png');
            }
          }
          p {
            @apply pl-38px text-32px font-400;
            @import url('https://fonts.googleapis.com/css2?family=Cedarville+Cursive&display=swap');
            font-family: 'Cedarville Cursive', cursive;
            color: #F53B3B;
          }
        }
        .block-right {
          @apply flex flex-col items-start pl-250px pr-46px py-44px  w-full max-w-570px mt-200px -ml-50px z-1;
          background: #F2F2F0;
          border: 0.5px solid #FFFFFF;
          border-radius: 15px;
          &-title {
            @apply text-32px font-400 text-left;
            font-family: "Proxima Nova";
            line-height: 120%;
            color: #263238;
          }
          &-description {
            @apply text-18px font-400 text-left;
            line-height: 140%;
            font-family: "Proxima Nova";
            color: #4D4E57;
          }
        }
      }
    }
  }
}
      .human {
        @apply absolute z-11 top-260px;
            // display: block;
    height: 787px;
    width: 1422px;
    // bottom: -121px;
    // top: ;
    // left: 50%;
    // transform: translate(-50%);
    // pointer-events: none;
      }
</style>
