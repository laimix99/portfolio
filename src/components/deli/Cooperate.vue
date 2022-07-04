<template>
  <div class="page mt-80px flex flex-col justify-start items-center">
    <h1 class="m-0 p-0 text-64px font-500 not-italic leading-48px">с нами сотрудничают</h1>
    <p class="mt-40px w-full not-italic font-300 text-16px leading-24px text-center">мойки, шиномонтаж, выездная заправка, техническое обслуживание, онлайн оформление ОСАГО и КАСКО</p>
    <div class="icons flex justify-between w-full max-w-552px mt-48px">
      <img src="/images/беру.png" alt="" class="icon object-contain w-120px">
      <img src="/images/аптека.png" alt="" class="icon object-contain w-120px">
      <img src="/images/leroy.png" alt="" class="icon object-contain w-120px">
      <img src="/images/ozon.png" alt="" class="icon object-contain w-120px">
    </div>
    <button class="mt-48px rounded-8px not-italic font-700 text-16px leading-20px py-20px px-32px cursor-pointer">подробнее о сервисе для бизнеса </button>
  </div>
</template>

<style lang="scss" scoped>
.page {
  background: #F2F5F8;

  h1 {
    color: #152F4E;
  }
  p {
    color: #152F4E;

  }
  .icons {

    .icon {

    }
  }
  button {
    background: #6CDDBB;
    color: #152F4E;
    &:active {
      opacity: 0.5;
    }
  }
}

@media ( max-width: 768px ) {
  .page {
    h1 {
      padding: 0px 30px;
      font-size: 40px;
      text-align: left;
    }
    p {
      font-size: 12px;
      max-width: 500px;
    }
    .icons {
      flex-direction: column;
      align-items: center;
      margin-top: 20px;

      img {
        margin-top: 20px;
      }
    }
    button {
      font-size: 10px;
    }
  }
}
</style>