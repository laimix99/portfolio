<script setup>
import Myslider from './Myslider.vue'
import ReviewsCard from './ReviewsCard.vue';

const cards = [
  {
    img: '', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Алена'
  },
  {
    img: '',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Марина'
  },
  {
    img: '', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Анна'
  },
  {
    img: '', 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
    name: 'Вадим'
  },
]
</script>

<template>
  <div class="reviews">
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
    @apply flex flex-col items-center py-100px mt-100px w-full;
    h1 {
      @apply text-46px font-700;
      color: rgb(29, 28, 28);
    }
    .content {
      @apply h-400px w-full  mt-50px;
    }
  }
</style>
