<script setup>
  const items = [
    {img: '', title: 'Оформим документы на месте ДТП'},
    {img: '', title: 'Проведем независимую экспертизу'},
    {img: '', title: 'Урегулируем споры со страховой'},
    {img: '', title: 'Проведем фото-фиксацию места ДТП'},
    {img: '', title: 'Подготовим претензию в страховую'},
    {img: '', title: '	Проведем оценку качества ремонта'},
  ]
</script>

<template>
  <div class="key-benefits">
    <h1>Ключевые достоинства аварийного комиссара Центрет урегулирования убытков</h1>
    <span>Экономим Ваше время и берем всю головную боль на себя!</span>
    <div class="items">
      <div class="item" v-for="item in items">
        <img :src="item.img" alt="">
        <div class="item-title">{{ item.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .key-benefits {
    @apply flex flex-col items-center w-full pt-50px;
    h1 {
      @apply text-46px font-700;
      color: rgb(29, 28, 28);
    }
    span {
      @apply text-24px mt-30px;
      color: rgb(29, 28, 28);
    }
    .items {
      @apply flex flex-wrap w-full mt-50px;
      .item {
        @apply mr-40px mt-20px flex flex-col items-center rounded-16px py-10px;
        background-color: #fff;
        width: calc(33.33% - 40px);
        img {
          @apply w-100px h-100px bg-black;
        }
        &-title {
          @apply text-22px mt-10px leading-30px;
          color: rgba(29, 28, 28, 0.5);
        }
      }
    }
  }
</style>
