<script setup>
const items = [
  {img: '/images/avito-layout/second-section/item-1.png', title: '5 квестов', description: 'Тир, предсказания оракула, танцевальная площадка - попробуй всё!'},
  {img: '/images/avito-layout/second-section/item-2.png', title: '15 кодинговых задач', description: 'на любом из 16 доступных <br/> языков'},
  {img: '/images/avito-layout/second-section/item-3.png', title: 'Крутые призы', description: 'Мерч каждую неделю и <br/> главные призы в апреле'},
]
</script>

<template>
  <div class="second-section">
    <div class="container">
      <h1>сегодня в программе</h1>
      <div class="items">
        <div 
          v-for="item in items"
          class="item"
        >
          <img :src="item.img" alt="">
          <h2>{{ item.title }}</h2>
          <span v-html="item.description" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.second-section {
  @apply flex flex-col items-center w-full;
  .container {
    @apply flex flex-col items-center w-full max-w-1150px px-5px;
    h1 {
      @apply text-40px font-800 uppercase mt-52px;
      color: #01002A;
      font-family: 'Jost', sans-serif;
    }
    .items {
      @apply flex flex-row items-start w-full mt-40px;
      .item {
        @apply flex flex-col items-center mx-17.5px;
        width: calc(33.33% - 35px);
        img {
          @apply ;
          // border: 1px solid red;
          filter: drop-shadow(4px 4px 0px rgba(134, 126, 118, 0.62));
        }
        h2 {
          @apply text-32px font-500 mt-27px;
          color: #01002A;
          font-family: 'Jost', sans-serif;
        }
        span {
          @apply text-18px font-400 text-center mt-10px;
          color: #01002A;
          font-family: 'Jost', sans-serif;
          line-height: 120%;
        }
      }
    }
  }
}
</style>
