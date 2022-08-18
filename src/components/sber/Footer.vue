<template>
  <div class="footer">
    <img src="/images/sber/footer/logo.png" alt="">
    <div class="description">
      <div class="title">
        <a href="">
          <span>Правила проведения</span>
        </a>
        <a href="">
          <span>Пользовательское соглашение</span>
        </a>
        <a href="">
          <span>Согласие на обработку ПД</span>
        </a>
      </div>
      <p>121205, Москва, территория инновационного центра «Сколково», Большой бульвар, 42, стр. 1, этаж 4, помещение № 214, рабочее место № 3</p>
    </div>
    <h1>© 2022 Права защищены</h1>
  </div>
</template>

<style scoped lang="scss">
.footer {
  @apply flex flex-row items-start w-full justify-between px-100px py-40px;
  background: #000000;
  @media screen and (max-width: 991px) {
    @apply flex-col items-start;
  }
  @media screen and (max-width: 767px) {
    @apply px-10px;
  }
  img {

  }
  .description {
    @apply flex flex-col items-start w-full max-w-643px;
    .title {
      @apply flex flex-row w-full  justify-between;
      @media screen and (max-width: 991px) {
        @apply flex-col items-start;
      }
      @media screen and (max-width: 767px) {
        @apply mt-24px;
      }
      a {

        span {
          @apply text-16px font-400;
          font-family: 'SB Sans Interface';
          color: #AAAAAA;
        }
      }
    }
    p {
      @apply text-10px font-400 leading-16px text-white text-left mt-16px w-full max-w-513px;
      @media screen and (max-width: 767px) {
        @apply text-16px mt-24px;
        color: #AAAAAA;
        opacity: 0.7;
      }
    }
  }
  h1 {
    @apply text-16px font-400 leading-24px text-white;
    font-family: 'SB Sans Interface';
  }
}
</style>
