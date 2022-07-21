<script setup>
const titles = [
  'Вызов по Екатеринбургу круглосуточно', 
  'Приедем в течении 15 минут', 
  'Составим все необходимые документы для страхового случая', 
  'Поможем получить полное страховое возмещение', 
]
  const emit = defineEmits(['action'])
</script>

<template>
  <div class="first-section">
    <!-- <h3 class="relative z-4" style="color: red; font-size:42px;">Секция 1: нужен текст</h3> -->
    <div class="container">
      <h1>Служба аварийных комиссаров</h1>
      <div class="items">
        <div class="item" v-for="title in titles">
          <div class="doc"></div>
          <p >{{ title }}</p>
        </div>  
      </div>
      <a @click="emit('action')">
        <button>Заказать звонок</button>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .first-section {
    @apply  w-full  relative z-1 py-50px flex flex-col items-center;
    background: url('https://оценка174.рф/images/img/avariynyy-komissar.jpg')center center/cover no-repeat;
    &::before {
      content: '';
      // border-radius: 16px;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background: rgba(0,0,0,.5);
      z-index: 2;
    }
    .container {
      @apply flex flex-col items-center w-full max-w-1100px;
      @media screen and (max-width: 991px) {
        @apply px-10px;
      }
      h1 {
        @apply text-75px z-3 relative font-700;
        color: #F2F2F4;
        @media screen and (max-width: 767px) {
          @apply text-30px;
        }
      }
      .items {
        @apply flex flex-col items-start z-3 mt-50px pl-100px;
        @media screen and (max-width: 991px) {
          @apply pl-20px;
        }
        @media screen and (max-width: 767px) {
          @apply mt-20px;
        }
        .item {
          @apply flex items-center mt-20px;
          .doc {
            @apply w-10px h-10px rounded-1/2 z-3 pr-10px mr-10px;
            background-color: #F2F2F4;
          }
          p {
            @apply z-3 text-30px text-30px;
            color: #F2F2F4;
            @media screen and (max-width: 991px) {
              @apply text-25px text-left;
            }
            @media screen and (max-width: 767px) {
              @apply text-20px leading-20px;
            }
          }
        }
      }
      a {
        @apply z-3;

        button {
          @apply text-24px py-20px px-20px mt-40px rounded-8px;
          background-color: #0C698F;
          color: #F2F2F4;
          &:hover {
            background-color: hwb(197 4% 62%);
          }
          @media screen and (max-width: 767px) {
            @apply text-18px;
          }
        }
      }
    }
  }
</style>
