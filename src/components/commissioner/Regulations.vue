<script setup>
const items = [
  {img: '/images/commissioner/regulations/item-1.png', title: 'Включить «аварийку» и выйти из машины, предварительно убедившись в своей безопасности'},
  {img: '/images/commissioner/regulations/item-2.png', title: 'Установить знак «Аварийной остановки» и обеспечить личную безопасность и безопасный проезд другим транспортным средствам'},
  {img: '/images/commissioner/regulations/item-3.png', title: 'Позвонить аварийному комиссару по номеру телефона 8-965-532-50-20'},
]
</script>

<template>
  <div class="regulations">
    <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 3: нужен текст</h3>
    <h1>Что нужно делать если попали в ДТП?</h1>
    <div class="items">
      <div class="item" v-for="item in items">
        <img :src="item.img" alt="">
        <span>{{ item.title }}</span>
      </div>
    </div>
    <a href="tel:89655325020">
      <button>Вызвать коммисара</button>
    </a>
  </div>
</template>

<style scoped lang="scss">
  .regulations {
    @apply flex flex-col w-full items-center py-50px;
    background-color: #21283F;
    color: #fff !important;
    h1 {
      @apply text-46px font-700;
      // color: rgb(29, 28, 28);
    }
    .items {
      @apply flex flex-col items-start mt-50px w-full max-w-850px;
      .item {
        @apply flex items-center mt-30px;
        img {
          @apply w-70px mr-20px;
        }
        span {
          @apply text-22px text-left leading-30px;
          // color: rgba(29, 28, 28, 0.6);
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

