<script setup>
import Myslider from './Myslider.vue'
import ReviewsCard from './ReviewsCard.vue';

const cards = [
  {
    img: '/images/commissioner/reviews/item-1.jpg', 
    description: 'Хочу выразить огромною благодарность Аварийному комиссару Сергею Николаевичу, как профессионалу своего дела. Стоял на перекрестке, не кого не трогал, как вдруг услышал громкий вой тормозов, и сильный хлопок. Человек позади меня засмотрелся в телефон, и не смог вовремя затормозить..... Сначала пытались дозвониться до гибдд, после примерно 10 попыток, мы оставили это дело, я начал смотреть информацию в интернете, как оформить дтп, хотя бы как вызвать гибдд))), в итоге наткнулся на эту компанию, вызвал комиссара, приехал минут за 10 (видимо был где то не далеко). Оформил все документы на месте, полностью объяснил мне какие у меня есть дальнейшие варианты, весь процесс занял минут 20).', 
    name: 'Егор'
  },
  {
    img: '/images/commissioner/reviews/item-2.jpg',
    description: ' Обратился за помощью в ДТП, со страховой компанией возникли сложности. Провели консультацию, помогли с экспертизой. Эксперты грамотные. Помогли, разъяснили, что к чему. Ребята подсказали пути решения. Благодарю за помощь.', 
    name: 'Армен'
  },
  {
    img: '/images/commissioner/reviews/item-3.jpg', 
    description: 'Рано утром ехала на работу и потеряла управление - в результате машина осталась без переда, простояли на дороге со вторым участником около 2-3 часов в ожидании гибдд, в итоге мой знакомый мне скинул номер аварийного комиссара, который ранее пользовался его услугами. Ждали комиссара минут 25 (из за нас образовалась огромная пробка), приехал, нарисовал схему, и вызвал мне эвакуатор, так как моя машина оказалась не на ходу. Если бы я знала, что можно было не ждать в ожидании почти 3 часа гибдд.........', 
    name: 'Маргарита'
  },
  // {
  //   img: '/images/commissioner/reviews/item-1.jpg', 
  //   description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias officiis illo recusandae maxime unde ratione enim vero mollitia debitis! Iusto necessitatibus neque quae animi voluptatum dolores distinctio delectus. Dicta, modi.', 
  //   name: 'Вадим'
  // },
]
</script>

<template>
  <div class="reviews ">
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
    @media screen and (max-width: 991px) {
      @apply h-1000px;  
    }
    @media screen and (max-width: 479px) {
      @apply mb-10px;
    }
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
