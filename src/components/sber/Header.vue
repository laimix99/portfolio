<script setup>
import MySvg from './MySvg.vue'

// const items = [
//   {bg: 'item-1.png', title: 'Пройди квиз'},
//   {bg: 'item-2.png', title: 'Войди в ТОП-3'},
//   {bg: 'item-2.png', title: 'Получи приз'},
// ]
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
            width="30"
            height="30"
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
        @media screen and (max-width: 767px) {
          @apply max-w-150px;
        }
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
            @media screen and (max-width: 991px) {
              display: none;
            }
          }
          &-icon {
            @apply w-136px relative;
            @media screen and (max-width: 767px) {
              @apply w-87px;
            }
          }
        }
        .icon {

          @media screen and (max-width: 767px) {
            @apply w-41px;
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
          position: absolute;
          @media screen and (max-width: 1100px) {
            width: 300px;
            left: -500px;
          }
          @media screen and (max-width: 991px) {
            display: none;
          }
        }
        h1 {
          @apply text-20px font-400 leading-32px not-italic;
          color: #75DFB8;
          font-family: 'SB Sans Display';
          @media screen and (max-width: 767px) {
            @apply text-16px;
          }
        }
      }
    }
  }
}
</style>
