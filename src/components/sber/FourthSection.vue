<script setup>
import MyBotton from './MyBotton.vue' 
import Table from './Table.vue'


</script>

<template>
<div class="fourth-section">
  <div class="container">
    <div class="content">
      <h1>Топ-10</h1>
      <Table/>
      <MyBotton
        name="1"
        class="botton-2"
      >
        <span>Поделиться</span>
      </MyBotton>
    </div>
    <MyBotton
      name="1"
      class="botton-1"
    >
      <span>Позвать друзей</span>
    </MyBotton>
  </div>
</div>
</template>

<style scoped lang="scss">
.fourth-section {
  @apply flex flex-col items-center w-full py-100px;
  background: url('/images/sber/second-section/grid.svg')center center/contain repeat;
  .container {
    @apply flex flex-col items-center w-full max-w-1143px px-10px relative;
    .content {
      @apply flex flex-col items-center w-full max-w-560px mb-44px;
      border: 2px solid #2B9A4A;
      box-shadow: inset 0px 0px 20px rgba(117, 223, 184, 0.2);
      filter: drop-shadow(0px 0px 5px rgba(117, 223, 184, 0.6));
      background: url('/images/sber/fourth-section/bg.png')center center/cover no-repeat;
      @media screen and (max-width: 767px) {
        @apply mb-0;
      }
      h1 {
        @apply text-32px font-600 text-white py-15px w-full; 
        font-family: 'SB Sans Interface';
        border-bottom: 1.5px solid #2B9A4A ;
      }
      .botton-2 {
        display: none;
        @media screen and (max-width: 767px) {
          display: inherit;
          padding-bottom: 15px;
        }
      }
    }
  }
  .botton-1 {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
}
</style>
