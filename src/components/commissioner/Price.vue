<script setup>
  const items = [
    {
      title: 'Вызвать аварийного комиссара', 
      price: '2000', 
      descripton: 'Аварийный комиссар приедет на место ДТП, окажет квалифицированную помощь, заполнит все необходимые документы для ГИБДД, возьмет на себя все общение с участниками ДТП'
    },
    {
      title: 'Судебное представительство', 
      price: '10 000', 
      descripton: 'Защита нарушенных прав в суде. Установление/оспаривание вины участников ДТП в судебном порядке'
    }, 
    {
      title: 'Экспертиза качества ремонта автомобилей', 
      price: '15 000', 
      descripton: 'Проведем оценку качества ремонта автомобиля по направлению страховой компании'
    },
  ]
  const emit = defineEmits(['action'])
</script>

<template>
  <div class="price-card">
    <!-- <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 4:Вариант 1 нужен текст и цена</h3> -->
    <h1>Цены на услуги аварийных комиссаров</h1>
    <div class="items">
      <div class="item" v-for="item in items">
        <div class="text">
          <h2>{{ item.title }}</h2>
          <p>{{ item.descripton }}</p>
        </div>
        <div class="price">
          <p>от</p>
          <span>₽{{ item.price }}</span>
        </div>
        <a @click="emit('action')">
          <button>Заказать</button>
        </a>
      </div> 
    </div>
  </div>
</template>

<style scoped lang="scss">
  .price-card {
    @apply flex flex-col items-center w-full py-100px;
    h1 {
      @apply text-46px font-700;
      color: rgb(29, 28, 28);
    }
    .items {
      @apply flex flex-wrap items-start justify-center w-full h-full max-w-1100px mt-50px;
      .price {
        @apply flex flex-row w-full items-end justify-start mb-20px;
        span {
          @apply text-42px text-left mt-20px font-700;
          color: #57000d;
          
        }
        p {
          font-size: 32px;
          margin-right: 10px;
          color: #660917;
        }
      }
      .plug-item {
        @apply flex flex-col items-center justify-center p-20px mx-20px mt-40px rounded-8px ;
        width: calc(33.33% - 40px);
        background-color: #fff;
        // height: 100%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
      }
      .item {
        @apply flex flex-col items-center justify-between p-20px mx-20px mt-40px rounded-8px ;
        width: calc(33.33% - 40px);
        background-color: #fff;
        // height: 100%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
        .text {
          @apply flex flex-col items-start h-full;
          // height: 280px;
          height: 230px;
          h2 {
            @apply w-full text-20px font-700 text-left;
            line-height: 120%;
            color: rgb(29, 28, 28);
          }
          p {
            @apply w-full text-16px text-left mt-10px;
            line-height: 140%;
            color: rgb(29, 28, 28);
          }
        }
        a {
          @apply w-full;
          button {
            @apply text-20px uppercase py-20px w-full px-10px rounded-4px;
            background-color: #0C698F;
            color: #F2F2F4;
            &:hover {
              background-color: hwb(197 4% 62%);
            }
          }
        }
      }
    }
  }
</style>
