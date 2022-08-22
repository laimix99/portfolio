<script setup>
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue';

const { width, height } = useWindowSize()
const showBg = computed(() => {
  if (width.value <= 767) {
    return 'bg-2.svg';
  } else {
    return 'bg.png';
  }
})
</script>

<template>
  <div class="second-section">
    <div class="container">
      <div 
        class="top-container"
        :style="{ background: `url('/images/sber/second-section/${showBg}')center center/contain no-repeat` }"
      >
        <h1>Год 3022. Миру всё ещё остро нужны крутые разработчики. В поисках лучших возможностей ты приходишь в Сбер. Но HR и тимлиды уже прокачались настолько, что окончательно перестали носить человеческие обличия...Сможешь пройти их всех и показать, чего ты стоишь?</h1>
      </div>
      <div class="bottom-container">
        <div class="content">
          <img src="/images/sber/second-section/hero.png" alt="">
          <div class="cub-1"></div>
          <div class="cub-2"></div>
          <div class="cub-3"></div>
          <div class="cub-4"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.second-section {
  @apply flex flex-col items-center w-full pt-41px pb-30px;
  background: url('/images/sber/second-section/grid.svg')center center/contain repeat;
  .container {
    @apply max-w-1143px px-10px flex flex-col items-center;
    .top-container {
      @apply w-full h-320px relative;
      
      h1 {
        @apply font-400 text-27px leading-48px text-left w-full max-w-1026px pl-61px pt-31px;
        color: #E7E7F0;
        @media screen and (max-width: 991px) {
          @apply text-20px pt-100px max-w-800px pl-20px;
        }
        @media screen and (max-width: 767px) {
          @apply text-16px max-w-208px pt-40px absolute top-40px p-0;
          left: 50%;
          transform: translate(-50%) ;
        }
      }
    }
    .bottom-container {
      @apply w-full max-w-877px h-500px flex flex-col items-center mt-80px;
      background: #020804;
      @media screen and (max-width: 991px) {
        @apply mt-10px;
      }
      .content {
        @apply w-full max-w-844px h-433px  relative z-50 mt-33px relative;
        background: url('/images/sber/second-section/bg-2.png')center center/cover no-repeat;
        img {
          @apply absolute bottom-10px ;
          left: 15%;
        }
        .cub-1 {
          @apply w-65px h-65px absolute left-0 top-0;
          // background: red;
          border-left: #2B9A4A 4px solid;
          border-top: #2B9A4A 4px solid;
        }
        .cub-2 {
          @apply w-65px h-65px absolute right-0 top-0;
          // background: red;
          border-right: #2B9A4A 4px solid;
          border-top: #2B9A4A 4px solid;
        }
        .cub-3 {
          @apply w-65px h-65px absolute bottom-0 left-0;
          // background: red;
          border-left: #2B9A4A 4px solid;
          border-bottom: #2B9A4A 4px solid;
        }
        .cub-4 {
          @apply w-65px h-65px absolute right-0 bottom-0;
          // background: red;
          border-right: #2B9A4A 4px solid;
          border-bottom: #2B9A4A 4px solid;
        }
      }
    }
  }
}
</style>
