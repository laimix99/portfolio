<script setup>
const items = [
  {
    img: '',
    title: 'Экспертиза качества ремонта',
    description: 'Проведем непредвзятое исследование качества ремонта автомобиля в автосервисе.'  
  },
  {
    img: '',
    title: 'Экспертиза качества ремонта',
    description: 'Проведем непредвзятое исследование качества ремонта автомобиля в автосервисе.'  
  },
  {
    img: '',
    title: 'Экспертиза качества ремонта',
    description: 'Проведем непредвзятое исследование качества ремонта автомобиля в автосервисе.'  
  },
]
const emit = defineEmits(['action'])
</script>

<template>
  <div class="services">
    <!-- <h3 class="relative z-4" style="color: red; font-size:42px">Секция 4:Вариант: 2 нужен текст и картинки (если нету картинок я поищу в интернете )</h3> -->
    <h1>Наши услуги</h1>
    <span>Независимые оценщики при подсчете суммы ущерба используют только реальные рыночные цены, и они не отчитываются перед страховой компанией</span>
    <div class="content">
      <div class="items">
        <div class="item" v-for="item in items">
          <img src="data:image/jpeg;base64,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" alt="">
          <div class="text">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
           <a  @click="emit('action')">
            <button>Заказать</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .services {
    @apply flex flex-col items-center w-full py-50px ;
    h1 {
      @apply text-46px font-700;
      color: rgb(29, 28, 28);
    }
    span {
      @apply text-24px leading-30px max-w-900px mt-30px;
    }
    .content {
      @apply w-full flex flex-col items-center;
      .items {
        @apply flex flex-wrap;
        .item {
          @apply flex flex-col items-center mx-20px mt-40px p-10px rounded-16px;
          width: calc(33.33% - 40px);
          background-color: #fff;
          box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
          img {
            @apply rounded-16px w-450px;
          }
          .text {
            @apply flex flex-col items-start mt-10px;
            h2 {
              @apply text-20px text-left font-700;
              color: rgb(29, 28, 28);
            }
            p {
              @apply text-left text-16px mt-15px leading-25px;
              color: rgb(29, 28, 28);
            }
          }
          a {
            @apply w-full mt-20px;
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
  }
</style>
