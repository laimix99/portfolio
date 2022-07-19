<script setup>
import Myslider from './Myslider.vue'
import ReviewsCard from './ReviewsCard.vue';

const cards = [
  {
    img: 'https://s15.stc.yc.kpcdn.net/share/i/12/12270457/wr-960.webp', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Алена'
  },
  {
    img: 'http://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2022-07/2022-07-17%2020.19.40.jpg?itok=F9aQXre5',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Марина'
  },
  {
    img: 'https://kubnews.ru/upload/resize_cache/webp/iblock/47a/608_410_2/35okcw0n7yhcfuducwkih83khth6qgyi.webp', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Анна'
  },
  {
    img: 'https://icdn.lenta.ru/images/2022/07/18/13/20220718130340997/square_320_4660087e88c749cfc6d6d457e9294204.jpg', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Вадим'
  },
]
</script>

<template>
  <div class="reviews">
    <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 7: нужен текст и фото</h3>
    <h1>Отзывы наших клиентов</h1>
    <div class="content">
      <Myslider
        :slides="cards"
      >
        <template v-slot:default="{slide}">
          <ReviewsCard :info="slide"/>
        </template>
      </Myslider>
    </div>
  </div>
  
</template>

<style scoped lang="scss">
  .reviews {
    @apply flex flex-col items-center py-10px  w-full;
    h1 {
      @apply text-46px font-700;
      color: rgb(29, 28, 28);
    }
    .content {
      @apply h-400px w-full  mt-50px;
    }
  }
</style>
