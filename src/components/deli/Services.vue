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
  <div>
    <div class="services ">
      <div class="services-header ">
        <h1>
          наши услуги
          <span>кругnлосуточно</span>
        </h1>
        <p>освободим до 10% вашего времени для семьи, друзей и любимого дела</p>
      </div>
      <img src="/images/bg-services.png"  alt="">
    </div>
    <div class="car">
      <div class="items">
        <div class="item" v-for="c  in car">
          <img class="img-car" :src="c.img" alt="">
          <div class="item-text">{{ c.text }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: row;

  .services {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    img {
      width: 150%;
    }
    
    &-header {
      display: flex;
      width: 100%;
      flex-direction: column;
      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 64px;
        line-height: 48px;
        color: #152F4E;
        margin: 0px;
        width:212px ;
        text-align: left;
        display: flex;
        align-items: flex-start;
        padding-bottom: 8px;
        padding-left: 24px;
        border-left: 8px solid #D52B1E;
        span {
          width: 148px;
          background-color: #d52b1e;
          border-radius: 8px;
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          line-height: 20px;
          color: #FFFFFF;
          margin: 8px 16px 8px 16px;
          padding: 8px 16px;
        }
      }
      p {
        margin-top: 20px;
        margin-left: 24px;
        margin-right: 0px;
        width: 387px;
        height: 48px;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #152F4E;
        text-align: left;
      }
      
    }
    
  }
  .car {
    max-width: 384px;
    box-sizing: border-box;
    .items {
    width: 100%;
    max-width: 384px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .item {
      box-sizing: border-box;
      margin-top: 8px;
      display: flex;
      justify-content: start;
      align-items: center;
      width: 100%;
      max-width: 384px;
      // max-height: 258px;
      border: 1px solid #D5DCE6;
      border-radius: 16px;
      padding: 24px 160px 24px 24px;

      .img-car{
        margin-right: 26px;
      }
      &-text {
        max-width: 160px;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 30px;
        color: #152F4E;
        text-align: left;
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
          // width: 350px;
           padding:10px!important;
          // padding: 0;

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