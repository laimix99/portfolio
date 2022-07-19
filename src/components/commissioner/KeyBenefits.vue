<script setup>
  const items = [
    {img: '/images/commissioner/key-benefits/item-1.png', title: 'Оформим документы на месте ДТП'},
    {img: '/images/commissioner/key-benefits/item-2.png', title: 'Проведем независимую экспертизу'},
    {img: '/images/commissioner/key-benefits/item-3.png', title: 'Урегулируем споры со страховой'},
    {img: '/images/commissioner/key-benefits/item-4.png', title: 'Проведем фото-фиксацию места ДТП'},
    {img: '/images/commissioner/key-benefits/item-5.png', title: 'Подготовим претензию в страховую'},
    {img: '/images/commissioner/key-benefits/item-6.png', title: '	Проведем оценку качества ремонта'},
  ]
</script>

<template>
  <div class="key-benefits">
    <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 2: нужен текст</h3>
    <h1>Ключевые достоинства аварийного комиссара Центрет урегулирования убытков</h1>
    <span>Экономим Ваше время и берем всю головную боль на себя!</span>
    <div class="items">
      <div class="item" v-for="item in items">
        <img :src="item.img" alt="">
        <div class="item-title">{{ item.title }}</div>
      </div>
    </div>
    <!-- <a href="tel:89655325020">
      <button>Вызвать коммисара</button>
    </a> -->
  </div>
</template>

<style scoped lang="scss">
  .key-benefits {
    @apply flex flex-col items-center w-full py-50px;
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
        @apply mx-20px  mt-40px flex flex-col items-start rounded-8px py-20px px-20px;
        background-color: #fff;
        width: calc(33.33% - 40px);
        // box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.5);
        border: 1px solid gray;
        img {
          @apply w-50px ;
        }
        &-title {
          @apply text-18px text-left font-700 leading-26px mt-30px;
          color: rgb(29, 28, 28,);
        }
      }
    }
    a {

      button {
        @apply text-24px py-20px px-20px mt-40px rounded-8px;
        background-color: #CE253D;
        color: #F2F2F4;
        &:hover {
          background-color: rgb(127, 26, 41);
        }
      }
    }
  }
</style>
