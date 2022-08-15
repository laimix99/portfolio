<template>
  <div class="second-section">
    <div class="container">
      <div class="top-container">
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
  background: url('/images/sber/second-section/grid.png')center center/cover no-repeat;
  .container {
    @apply max-w-1143px px-10px flex flex-col items-center;
    .top-container {
      @apply w-full h-320px;
      background: url('/images/sber/second-section/bg.png')center center/contain no-repeat;
      h1 {
        @apply font-400 text-27px leading-48px text-left w-full max-w-1026px pl-61px pt-31px;
        color: #E7E7F0;
       
      }
    }
    .bottom-container {
      @apply w-full max-w-877px h-500px flex flex-col items-center mt-80px;
      background: #020804;
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
