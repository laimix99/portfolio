<template>
  <div class="TermsServicesDeli">
    <div class="employees">
      <img src="images/mechanic.png" alt="">
      <div class="text">
        <h1>Сотрудники Делисервиса сделают реальностью использование автомобиля только по назначению</h1>
        <p>А вы всегда будете уверенны в точной стоимости, сроках и качестве услуг.</p>
      </div>
    </div>
    <div class="service">
      <div class="service-title">Уже сейчас у вас есть возможность освободиться от необходимости ездить в автосервисы, искать качественную мойку и терять время в очереди на заправку.</div>
      <div class="service-subtitle">
        <div class="service-subtitle-text">мы сами</div>
      </div>
      <div class="service-description">заберём,<br />обслужими<br />вернём</div>
      <div class="service-text">ваш автомобиль. </div>
      <a href="">
        <button>подробнее о сервисе для клиентов</button>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .TermsServicesDeli {
    width: 100%;
    max-width: 1255px;
    margin-top: -150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;

    .employees {
      width: 100%;
      max-width: 520px;
      padding-top: 150px;
      img {
       width: 100%; 
      }
      .text {
        padding: 80px 104px;
        h1 {
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        width: 100%;
        max-width: 280px;
        margin: 0;
        text-align: left;
        color: #152F4E;

      }
        p {
           margin: 0;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 24px;
          width: 100%;
          max-width: 280px;
          text-align: left;
          margin-top: 15px;
          color: #152F4E;

        }
      }

    }
    .service {
      width: 100%;
      padding: 210px 104px;
      background: #6CDDBB;
      border-radius: 16px 0px 0px 16px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      &-title {
        width: 100%;
        max-width: 487px;
        color: #152F4E;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        text-align: left;
      }
      &-subtitle {
        margin-top: 40px;
        background: #fff;
        max-width: 182px;
        // height: 64px;
        border-radius: 8px;
        &-text {
          color: #152F4E;
          font-style: normal;
          font-weight: 500;
          font-size: 32px;
          line-height: 32px;
          padding: 14px 24px;
        }
      }
      &-description {
        margin-top: 24px;
        color: #152F4E;
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 70px;
        text-align: left;
      }
      &-text {
        color: #152F4E;
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
        text-align: left;
        margin-top: 10px;
      }
      a {
        margin-top: 48px;
        button {
          background: #152F4E;
          border-radius: 8px;
          color: #FFFFFF;
          border: none;
          padding: 22px 32px;
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          line-height: 20px;
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