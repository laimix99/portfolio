<script setup>
import MySlider from '../MySlider.vue';
import PersonalCardService from './PersonalCardService.vue'
import { ref, computed, reactive } from 'vue';
const items = ref([
  {name: 'Witailich', img: '/images/human.png', service: 'замена масла фильтров'},
  {name: 'Maksim', img: '/images/human.png', service: 'шиномонтаж'},
  {name: 'Roman', img: '/images/human.png', service: 'диагностика подвески'},
  {name: 'Vladislav', img: '/images/human.png', service: 'кузовная работа'},
  {name: 'Ivan', img: '/images/human.png', service: 'мойка'},
  {name: 'Anton', img: '/images/human.png', service: 'диагностика мотора'},
])


</script>

<template>
<div class="page">
  <div class="title">
    <h1>
      # <span>делисервис</span>
      </h1>
  </div>
  <div class="content">
    <MySlider
      class=""
      :arrayLength="items.length"
      :maxSwipeSlides="1"
      :maxViewSlides="3"
      :widthSlider="'100%'"
      :navPosition="'slider-services'"
      :interval="2000"
    >
      <PersonalCardService 
        v-for="item in items"
        :item_data="item"
        :slide="33.33"
        :margin="1"
        :viewSlides="3"
      />
    </MySlider>
    <a href="">
      <button>полезные статьи</button>
    </a>
  </div>
</div>


  
</template>

<style lang="scss" scoped>
.page {
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-width: 1280px;
  background: #152F4E;
  border-radius: 16px;
  padding: 80px 108px 80px 108px;
  box-sizing: border-box;
  .title {

    h1 {
      color: #d52b1e;
      margin: 0px;
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 48px;
      span {
        color: #fff;
        margin-left: -20px;
      }
    }
  }
  .content {
    // overflow: hidden;
    position: relative;
    margin-top: 64px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    // align-items: flex-end;
    max-width: 1014px;
    a {
      z-index: 10;
      // margin-top: -65px;
      position: absolute;
      bottom: 0;
      right: 0;
      
      button {
        cursor: pointer;
        background: #fff;
        padding: 22px 32px;
        border-radius: 8px;
        border: none;
        color: #152F4E;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
      }
    }
    

  }
}

 @media ( max-width: 991px ){
   .page {
    max-width: 770px;
      
    .content {
      align-items:flex-start;

      a {

        button {
          display: none;
        }
      }
    }
  }
}
</style>