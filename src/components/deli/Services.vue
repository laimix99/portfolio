<script setup>
import { ref, computed, reactive } from 'vue';
const car = ref([
  {img: '/images/car1.svg', text: 'мойка'},
  {img: '/images/car2.svg', text: 'мобильная заправка'},
  {img: '/images/car3.svg', text: 'шиномонтаж и хранение'},
  {img: '/images/car4.svg', text: 'базовое ТО'},
  {img: '/images/car5.svg', text: 'вызов консьержа'},
])
</script>
<template>
  <div class="flex">
    <div class="services flex flex-col items-center w-full">
      <div class="services-header flex flex-col w-full">
        <h1 class=" flex items-start not-italicfont-500 text-64px leading-48px m-0 w-212px text-left pb-8px pl-24px">
          наши услуги
          <span class="rounded-8px not-italic font-500 text-16px leading-20px py-8px px-16px">круглосуточно</span>
        </h1>
        <p class="mt-20px ml-24px w-387px h-48px not-italic font-300 text-16px leading-24px text-left">освободим до 10% вашего времени для семьи, друзей и любимого дела</p>
      </div>
      <img class="" src="/images/bg-services.png"  alt="">
    </div>
    <div class="car max-w-384px box-border">
      <div class="items flex flex-col justify-start w-full max-w-384px box-border">
        <div class="item flex justify-start items-center box-border mt-8px w-full max-w-384px rounded-16px py-24px pr-160px pl-24px" v-for="c  in car">
          <img class="img-car mr-24px" :src="c.img" alt="">
          <div class="item-text max-w-160px not-italic font-500 text-24px leading-30px text-left">{{ c.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {

  .services {
    img {
      max-width: 150% ;
    }
    
    &-header {

      h1 {
        color: #152F4E;
        border-left: 8px solid #D52B1E;
        span {
          color: #FFFFFF;
          background-color: #d52b1e;
        }
      }
      p {
        color: #152F4E;
      }
      
    }
    
  }
  .car {
    .items {

      .item {
        border: 1px solid #D5DCE6;

        &-text {
          color: #152F4E;
        }
      }
    }
  }
}


  @media ( max-width: 991px ) {
  div {
    
    .services {
      box-sizing: border-box;
      padding: 0px 30px;
    }
    .car {
      // padding-right: 20px;
      // box-sizing: border-box;

      .items {
      width: 100%;

    
      .item {
        padding: 10px 160px 10px 10px;
        margin-top: 30px;
        max-height: 100px;
        .img-car {
          width: 1000%;
        }
        &-text {
          font-size: 15px;
        }
      }
    }
    }
    
  }
}
@media ( max-width: 768px ) {
  div {
    flex-direction: column;
    align-items: center;
    .services {
      padding: 0;
      &-header {
        h1 {
          font-size: 40px !important;
          span {
            padding: 5px;
          }
        }
        p {
          width: 300px !important;
        }
      }
      img {
        display: none;
      }
    }
    .car {
      .items {
      
        .item {
          display: flex;
          flex-direction: row;
          width: 250px;
          padding: 10px!important;

          .img-car {
            max-width: 100px;
            // margin: 0;
          }
          &-text {
            line-height: 25px;
            max-width: 100px !important;
            // padding: 0;
          }
        }        
      }
    }
  }
}
</style>