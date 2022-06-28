<script setup>
import { ref, computed, reactive } from 'vue';
const services = ref([
  {title: "мойка", price: " от 390 ₽"},
  {title: "мобильная заправка", price: " от 390 ₽"},
  {title: "шиномонтаж + хранение", price: " от 390 ₽"},
  {title: "базовое ТО", price: " от 390 ₽"},
  {title: "вызов консьержа", price: " от 390 ₽"},
])
</script>


<template>
  <div class="page">
    <div class="services">
      <div class="services-header">
        <h1>цены на услуги</h1>
        <p>вы можете заказать любую услугу без оформления пакетного предложения</p>
      </div>
      <div class="services-price">
        <div class="service" v-for="service in services">
          <h2>{{ service.title }}</h2>
          <span>{{ service.price }}</span>
        </div>
      </div>
    </div>
    <div class="servants">
      <div class="servants-items">
        <div class="servants-items-text">обслуживаем автомобилей: </div>
        <div class="servants-items-amount">12234</div>
        <img src="/images/google2.png" alt="">
        <img src="/images/apple2.png" alt="">
      </div>
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  max-width: 1008px;
  display: flex;
  flex-direction: column;
  
  .services {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 70px 0px 80px 0px;

    &-header {
      
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      max-width: 401px;
      // height: 297px;

      h1 {
        margin: 0px;
        color: #152F4E;
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 48px;
        border-left:  8px solid red;
        text-align: left;
        padding-left: 24px;
      }
      p {
        padding-left: 24px;
        text-align: left;
        color: #152F4E;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;

      }
    }
    &-price {
      display: flex;
      flex-direction: column;
      align-items: stretch;
      width: 100%;
      max-width: 471px;
      background: #fff;
      border-radius: 16px;
      padding: 32px;
      height: 297px;
      box-sizing: border-box;


      .service {
        padding-top: 11px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        border-bottom : 1px solid #D5DCE6;

        h2 {
          margin: 0px;
          color: #152F4E;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
        }
        span {
          color: #9DA8B5;
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 24px;
        }
      }
    }
  }
  .servants {
    background: #152F4E;
    box-shadow: 0px 32px 24px -16px rgba(21, 47, 78, 0.3);
    border-radius: 16px;

    &-items {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 49px 90px;
      
      &-text {
        margin-right: 64px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: #FFFFFF;
        widows: 100%;
        max-width: 164px;
        text-align: left;
      }
      &-amount {
        margin-right: 64px;
        color: #6CDDBB;
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 48px;
      }
      img {
        margin-right: 24px;
        width: 100%;
        max-width: 170px;
      }
    }
  }
}

  @media ( max-width: 991px ) {
    .page {
      
      .services {
        padding: 50px 30px;
      }
      .servants {

        &-items {

          &-text {


          }
          &-amount {

          }
          img {
            max-width: 100px;
            margin-right: 10px
          }
        }
      }
    }
  }
  @media ( max-width: 768px ) {
    .page {

      .services {
        flex-direction: column;

        .service {
          h2 {
            font-size: 15px;
          }
          span {
            font-size: 15px;
          }

        }
      }
      &-price {
        box-sizing: border-box;
      }
      .servants {
        display: none;
      }
      
    }
  }
</style>