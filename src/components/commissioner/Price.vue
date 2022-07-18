<script setup>
  const items = [
    {
      title: 'Вызвать аварийного комиссара', 
      price: '2000 руб', 
      descripton: 'Аварийный комиссар приедет на место ДТП, окажет квалифицированную помощь, заполнит все необходимые документы для ГИБДД, возьмет на себя все общение с участниками ДТП'
    },
    {
      title: 'Экспертиза качества ремонта автомобилей', 
      price: 'от 15 000 рублей', 
      descripton: 'Проведем оценку качества ремонта автомобиля по направлению страховой компании'
    },
    {
      title: 'Судебное представительство', 
      price: 'от 10 000 рублей', 
      descripton: 'Защита нарушенных прав в суде. Установление/оспаривание вины участников ДТП в судебном порядке'
    },
    {
      title: 'Независимая автоэкспертиза при ДТП', 
      price: 'от 5 000 рублей', 
      descripton: 'Проведем непредвзятое исследование состояния автомобиля. Имеем право проводить экспертизу по Осаго.'
    },
    {
      title: 'Юрист. Сопровождение ДТП', 
      price: 'от 10 000 рублей', 
      descripton: 'Помощь в решении споров со страховой и участниками ДТП. Экспресс оценка ущерба на месте ДТП'
    },
    
  ]
</script>

<template>
  <div class="price">
    <h1>Цены на услуги аварийных комиссаров</h1>
    <div class="items">
      <div class="item" v-for="item in items">
        <h2>{{ item.title }}</h2>
        <span>{{ item.price }}</span>
        <p>{{ item.descripton }}</p>
      </div> 
    </div>
  </div>
</template>

<style scoped lang="scss">
  .price {
    @apply flex flex-col items-center w-full py-100px;
    h1 {
      @apply text-46px font-700;
      color: rgb(29, 28, 28);
    }
    .items {
      @apply flex flex-col items-center w-full mt-50px;
      .item {
        @apply flex items-center justify-between rounded-16px py-10px px-10px w-full mt-40px min-h-120px;
        background-color: #D6D6D6;
        h2 {
          @apply w-full text-16px max-w-250px text-left;
          color: rgb(29, 28, 28);
        }
        span {
          @apply text-16px ;
          color: #CE253D;
        }
        p {
          @apply w-full text-16px max-w-450px leading-20px;
          color: rgb(29, 28, 28);
        }
      }
    }
  }
</style>
