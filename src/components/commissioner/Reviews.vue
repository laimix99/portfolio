<script setup>
import Myslider from './Myslider.vue'
import ReviewsCard from './ReviewsCard.vue';

const cards = [
  {
    img: '/images/commissioner/reviews/item-1.jpg', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Алена'
  },
  {
    img: '/images/commissioner/reviews/item-2.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Марина'
  },
  {
    img: '/images/commissioner/reviews/item-3.jpg', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Анна'
  },
  // {
  //   img: '/images/commissioner/reviews/item-1.jpg', 
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
  //   name: 'Вадим'
  // },
]
</script>

<template>
  <div class="reviews">
    <!-- <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 6: нужен текст и фото</h3> -->
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
    @apply flex flex-col items-center py-100px h-full w-full mb-50px;
    h1 {
      @apply text-46px font-700;
      color: rgb(29, 28, 28);
      @media screen and (max-width: 767px) {
        @apply text-30px;
      }
    }
    .content {
      @apply  h-400px w-full  mt-50px;
      // @media screen and (max-width: 991px) {
      //   @apply max-w-400px max-h-650px ;
      // }
      // @media screen and (max-width: 767px) {
      //   @apply max-w-300px;
      // }
    }
  }
</style>
