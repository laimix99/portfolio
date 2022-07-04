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
  <div class="page flex flex-col w-full max-w-1008px">
    <div class="services flex justify-between items-center pt-70px pb-80px">
      <div class="services-header flex flex-col items-start w-full max-w-401px">
        <h1 class="m-0 not-italic font-500 text-64px leading-48px text-left pl-24px">цены на услуги</h1>
        <p class="pl-24px text-left not-italic font-300 text-16px leading-24px pt-20px">вы можете заказать любую услугу без оформления пакетного предложения</p>
      </div>
      <div class="services-price flex flex-col items-stretch w-full max-w-471px h-297px rounded-16px p-32px box-border">
        <div class="service flex flex-row justify-between items-start pt-11px" v-for="service in services">
          <h2 class="m-0 not-italic font-500 text-16px leading-20px">{{ service.title }}</h2>
          <span class="not-italic font-300 text-16px leading-24px">{{ service.price }}</span>
        </div>
      </div>
    </div>
    <div class="servants rounded-16px">
      <div class="servants-items flex flex-row justify-center items-center box-border py-49px px-90px">
        <div class="servants-items-text mr-64px not-italic font-500 text-24px leading-30px w-full max-w-164px text-left">обслуживаем автомобилей: </div>
        <div class="servants-items-amount mr-64px not-italic font-500 text-64px leading-48px">12234</div>
        <img class="w-full max-w-170px mr-24px" src="/images/google2.png" alt="">
        <img class="w-full max-w-170px mr-24px" src="/images/apple2.png" alt="">
      </div>
    </div> 
  </div>
</template>

<style lang="scss" scoped>
.page {

  .services {

    &-header {

      h1 {
        color: #152F4E;
        border-left:  8px solid red;
      }
      p {
        color: #152F4E;

      }
    }
    &-price {
      background: #fff;

      .service {
        border-bottom : 1px solid #D5DCE6;

        h2 {
          color: #152F4E;
        }
        span {
          color: #9DA8B5;
        }
      }
    }
  }
  .servants {
    background: #152F4E;
    box-shadow: 0px 32px 24px -16px rgba(21, 47, 78, 0.3);

    &-items {
      
      &-text {
        color: #FFFFFF;
      }
      &-amount {
        color: #6CDDBB;
      }
      img {

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
            text-align: left;
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