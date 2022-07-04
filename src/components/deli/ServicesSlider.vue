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
<div class="page flex flex-col justify-start items-center mt-60px w-full max-w-1280px rounded-16px py-80px px-108px">
  <div class="title">
    <h1 class=" m-0 not-italic font-500 text-64px leading-48px">
      # <span class="-ml-20px">делисервис</span>
      </h1>
  </div>
  <div class="content flex flex-col justify-center relative mt-64px w-full max-w-1014px">
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
    <a href="" class="absolute bottom-0 right-0">
      <button class="cursor-pointer py-22px px-32px rounded-8px not-italic font-700 text-16px leading-20px">полезные статьи</button>
    </a>
  </div>
</div>


  
</template>

<style lang="scss" scoped>
.page {
  background: #152F4E;
  .title {

    h1 {
      color: #d52b1e;
      span {
        color: #fff;
      }
    }
  }
  .content {
    a {
      button {
        border: none;
        background: #fff;
        color: #152F4E;
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