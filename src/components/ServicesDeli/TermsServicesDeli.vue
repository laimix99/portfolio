<template>
  <div class="TermsServicesDeli f-wull max-w-1255px -mt-150px flex flex-row justify-between items-start">
    <div class="employees w-full max-w-520px pt-150px">
      <img class="w-full" src="/images/mechanic.png" alt="">
      <div class="text py-80px px-104px">
        <h1 class="not-italic font-300 text-16px leading-24px w-full max-w-280px m-0 text-left">Сотрудники Делисервиса сделают реальностью использование автомобиля только по назначению</h1>
        <p class="not-italic font-300 text-16px leading-24px w-full max-w-280px m-0 text-left mt-15px">А вы всегда будете уверенны в точной стоимости, сроках и качестве услуг.</p>
      </div>
    </div>
    <div class="service flex flex-col items-start w-full py-210px px-104px">
      <div class="service-title w-full max-w-487px not-italic font-500 text-24px leading-30px text-left">Уже сейчас у вас есть возможность освободиться от необходимости ездить в автосервисы, искать качественную мойку и терять время в очереди на заправку.</div>
      <div class="service-subtitle mt-40px max-w-182px rounded-8px">
        <div class="service-subtitle-text not-italic font-500 text-32px leading-32px py-14px px-24px">мы сами</div>
      </div>
      <div class="service-description mt-24px not-italic font-500 text-64px leading-70px text-left">заберём,<br />обслужими<br />вернём</div>
      <div class="service-text not-italic font-500 text-32px leading-32px text-left mt-10px">ваш автомобиль. </div>
      <a class="mt-48px" href="">
        <button class="rounded-8px py-22px px-32px not-italic font-700 text-16px leading-20px">подробнее о сервисе для клиентов</button>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .TermsServicesDeli {

    .employees {

      .text {
        h1 {
        color: #152F4E;

      }
        p {
          color: #152F4E;

        }
      }

    }
    .service {
      border-radius: 16px 0px 0px 16px;
      background: #6CDDBB;

      &-title {
        color: #152F4E;
      }
      &-subtitle {
        background: #fff;

        &-text {
          color: #152F4E;
        }
      }
      &-description {
        color: #152F4E;
      }
      &-text {
        color: #152F4E;
      }
      a {

        button {
          background: #152F4E;
          color: #FFFFFF;
          border: none;
        }
      }
    }
  }
  
@media ( max-width: 991px ) {
  .TermsServicesDeli {
    .employees {

      .text {
        padding: 20px 50px;
        h1 {
          font-size: 12px;
        }
        p {
          font-size: 12px;
        }
      }
    }
    .service {
      padding: 190px 104px 30px 104px;

      &-title {
        font-size: 15px;
      }
      &-subtitle {

        &-text {
          font-size: 16px;
          padding: 8px 8px;
        }
      }
      &-description {
        font-size: 32px;
        line-height: 1.5;
      }
      &-text {
        font-size: 32px;
      }
      a {
        button {
          font-size: 12px;
        }
      }
    }
  }
}
@media ( max-width: 768px ) {
  .TermsServicesDeli {
    flex-direction: column;
    align-items: center;

    .employees {

      .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        h1 {
          font-size: 18px;
          margin: 0;
        }
        p {
          margin: 0;
          font-size: 18px;
        }
      }
    }
    .service {
      box-sizing: border-box;
      border-radius: 16px;
      padding: 20px 40px !important;
      align-items: center;
    }
  }
}
</style>