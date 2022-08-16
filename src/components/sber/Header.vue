<script setup>
import MySvg from './MySvg.vue'

const items = [
  {bg: 'item-1.png', title: 'Пройди квиз'},
  {bg: 'item-2.png', title: 'Войди в ТОП-3'},
  {bg: 'item-2.png', title: 'Получи приз'},
]
</script>

<template>
  <div class="header">
    <div class="container">
      <div class="menu">
        <div class="logo">
          <div class="logo-sber">
            <img class="logo-sber-icon" src="/images/sber/header/logo.png" alt="">
          </div>
          <img class="icon" src="/images/sber/header/icon.png" alt="">
        </div>
        <div class="vacancies">
          <h1>Вакансии</h1>
          <MySvg
            color="#75DFB8"
            name="down"
          />
        </div>
      </div>
      <div class="bottom-menu">
        <div class="items">
          <div 
            class="item"
            :style="{ background: `url('/images/sber/header/${item.bg}')center bottom/cover no-repeat`, }"
            v-for="item in items"
          >
            <h2>{{ item.title }}</h2>
          </div>
          <MySvg
            color="#2B9A4A"
            name="next"
            class="next-1"
          />
          <MySvg
            color="#2B9A4A"
            name="next"
            class="next-2"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply flex flex-col items-center w-full pt-32px;
  .container {
    @apply flex flex-col items-center w-full max-w-1143px px-10px;
    .menu {
      @apply flex flex-row items-start justify-between w-full ;
      .logo {
        @apply flex flex-row w-full max-w-280px items-start justify-between relative;
        &-sber {
          @apply ;
          &::after {
            content: '';
            width: 56px;
            height: 3px;
            position: absolute;
            background: #2B9A4A;
            opacity: 0.3;
            top: 50%;
            left: 49%;
          }
          &-icon {
            @apply w-136px relative;
          }
        }
      }
      .vacancies {
        @apply flex flex-col items-center relative;
        &::after {
          content: '';
          width: 687px;
          height: 3px;
          background: #2B9A4A;
          opacity: 0.3;
          top: 29%;
          left: -720px;
          position: absolute
        }
        h1 {
          @apply text-20px font-400 leading-32px not-italic;
          color: #75DFB8;
          font-family: 'SB Sans Display';
        }
      }
    }
    .bottom-menu {
      @apply flex flex-col items-start w-full mt-40px;
      .items {
        @apply flex flex-row py-19px items-start relative;
        .item {
          @apply w-183px h-47px mr-80px relative;
          background-size: cover;
          &:nth-child(1) {
            width: 216px;
            height: 50px;
          }
          h2 {
            @apply text-20px leading-28px ;
            color: #E7E7F0;
            opacity: 0.8;
            font-family: 'SB Sans Interface';
            position: absolute;
            right: 32px;
            top: 10px;
          }
        }
        .next-1 {
          @apply absolute;
          // bottom: 0;
          left: -150px;
        }
        .next-2 {
          @apply absolute;
          // bottom: 0;
          left: 110px;
        }
      } 
    }
  }
}
</style>
