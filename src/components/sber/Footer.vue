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
      <p>121205, Москва, территория инновационного центра «Сколково», Большой бульвар, 42, стр. 1, этаж 4, <br/> помещение № 214, рабочее место № 3</p>
    </div>
    <h1>© 2022 Права защищены</h1>
  </div>
</template>

<style scoped lang="scss">
.footer {
  @apply flex flex-row items-start w-full justify-between px-100px py-40px;
  background: #000000;
  img {

  }
  .description {
    @apply flex flex-col items-start w-full max-w-643px;
    .title {
      @apply flex flex-row w-full  justify-between;
      a {

        span {
          @apply text-16px font-400;
          font-family: 'SB Sans Interface';
          color: #AAAAAA;
        }
      }
    }
    p {
      @apply text-10px font-400 leading-16px text-white text-left mt-16px;
    }
  }
  h1 {
    @apply text-16px font-400 leading-24px text-white;
    font-family: 'SB Sans Interface';
  }
}
</style>
