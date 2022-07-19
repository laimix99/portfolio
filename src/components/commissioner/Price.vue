<script setup>
  const items = [
    {
      title: 'Вызвать аварийного комиссара', 
      price: '2000', 
      descripton: 'Аварийный комиссар приедет на место ДТП, окажет квалифицированную помощь, заполнит все необходимые документы для ГИБДД, возьмет на себя все общение с участниками ДТП'
    },
    {
      title: 'Экспертиза качества ремонта автомобилей', 
      price: '15 000', 
      descripton: 'Проведем оценку качества ремонта автомобиля по направлению страховой компании'
    },
    {
      title: 'Судебное представительство', 
      price: '10 000', 
      descripton: 'Защита нарушенных прав в суде. Установление/оспаривание вины участников ДТП в судебном порядке'
    },
    {
      title: 'Независимая автоэкспертиза при ДТП', 
      price: '5 000', 
      descripton: 'Проведем непредвзятое исследование состояния автомобиля. Имеем право проводить экспертизу по Осаго.'
    },
    {
      title: 'Юрист. Сопровождение ДТП', 
      price: '10 000', 
      descripton: 'Помощь в решении споров со страховой и участниками ДТП. Экспресс оценка ущерба на месте ДТП'
    },

    
  ]
  const emit = defineEmits(['action'])
</script>

<template>
  <div class="price-card">
    <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 4:Вариант 1 нужен текст и цена</h3>
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
      <div class="plug-item justify-center items-center" style="height: 410px">
        <p class="mb-20px">Возможные услуги</p>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M22.65 34h3v-8.3H34v-3h-8.35V14h-3v8.7H14v3h8.65ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm.05-3q7.05 0 12-4.975T41 23.95q0-7.05-4.95-12T24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24.05 41ZM24 24Z"/></svg>
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
            background-color: #d44157;
            color: #F2F2F4;
            &:hover {
              background-color: rgb(127, 26, 41);
            }
          }
        }
      }
    }
  }
</style>
