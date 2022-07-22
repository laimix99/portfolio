<script setup>
  const items = [
    {
      title: 'Вызвать аварийного комиссара', 
      img: '/images/commissioner/price/item-1.jpg',
      price: '2500', 
      descripton: 'Аварийный комиссар прибудет на место ДТП в течение 15-20 минут. Он составит полный пакет документов для оформления вашего ДТП, и полного возмещения убытка от страховой компании, проведёт полную консультацию по факту ДТП, и по возмещению вашего убытка.'
    },
    {
      title: 'Вызов эвакуатора на место ДТП', 
      img: '/images/commissioner/price/item-2.jpg',
      price: '3000', 
      descripton: 'Довольно часто, после ДТП, характер повреждений не позволяет самостоятельно, своим ходом передвигаться на автомобиле.Так же после ДТП у машины могут быть скрытые дефекты. «Элементы подвески и т.д.» Для того что бы не усугубить ущерб автомобиля, вы можете вызвать эвакуатор на место ДТП, для последующей безопасной транспортировки т/с.'
    }, 
    {
      title: 'Юридическое сопровождение-Независимая экспертиза', 
      img: 'http://9202430.ru/wp-content/uploads/2019/07/93.jpg',
      price: '15 000', 
      descripton: 'После ДТП у пострадавшего лица есть право на независимую экспертизу.Проводим полный осмотр вашего т/с на СТО, делаем полный разбор автомобиля (если это необходимо), учитываем все скрытые дефекты после ДТП. Предоставляем независимого эксперта.Добьёмся для вас полного страхового возмещения от страховой компании.'
    },
  ]
  const emit = defineEmits(['action'])
</script>

<template>
  <div class="price-card">
    <!-- <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 4:Вариант 1 нужен текст и цена</h3> -->
    <h1>Цены на услуги</h1>
    <div class="items">
      <div class="item" v-for="item in items">
        <img :src="item.img" alt="">
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
    background-color: #21283F;
    h1 {
      @apply text-46px font-700;
      // color: rgb(29, 28, 28);
      color: #F2F2F4;
      @media screen and (max-width: 767px) {
        @apply text-30px;
      }
    }
    .items {
      @apply flex flex-wrap items-start justify-center w-full h-full max-w-1100px mt-50px;
      @media screen and (max-width: 991px) {
        @apply flex-col items-center;
      }
      @media screen and (max-width: 767px) {
        @apply mt-20px;
      }
      .item {
        @apply flex flex-col items-center justify-between h-680px p-10px mx-10px mt-40px rounded-8px ;
        width: calc(33.33% - 40px);
        background-color: #fff;
        // height: 100%;
        box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
        @media screen and (max-width: 991px) {
          @apply mx-0 max-w-350px;
          width: 100%;
        }
        @media screen and (max-width: 767px) {
          @apply h-630px;
        }
        img {
          @apply w-full max-w-350px h-full max-h-200px ;
        }
        .text {
          @apply flex flex-col items-start h-full mt-10px;
          h2 {
            @apply w-full text-20px font-700 text-left;
            line-height: 120%;
            color: rgb(29, 28, 28);

          }
          p {
            @apply w-full text-16px text-left mt-10px;
            line-height: 140%;
            color: rgb(29, 28, 28);
            @media screen and (max-width: 767px) {
              @apply leading-20px;
            }
          }
        }
        
        .price {
          @apply flex flex-row w-full items-end justify-start mb-5px;
          span {
            @apply text-42px text-left mt-10px font-700;
            color: #0C698F;
            @media screen and (max-width: 767px) {
              @apply text-30px;
            }
          }
          p {
            font-size: 32px;
            margin-right: 10px;
            color: #0C698F;
            @media screen and (max-width: 767px) {
              @apply text-30px;
            }
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
