<script setup>
import MyButton from './MyBotton.vue'
</script>

<template>
  <div class="first-section">
    <div class="container">
      <h1>Узнай, насколько ты крутой эксперт!</h1>
      <h2>Ответь на вопросы и проверь, чего ты стоишь!</h2>
      <MyButton
        name="1"
      >
        GO
      </MyButton>

      <img src="/images/sber/first-section/persi.png" alt="">
    </div>
  </div>
</template>

<style scoped lang="scss">
.first-section {
  @apply flex flex-col items-center h-361px  w-full;
  background: url('/images/sber/first-section/bg.png')center center/cover no-repeat;
  .container {
    @apply flex flex-col items-start w-full max-w-1143px px-10px relative pb-30px; 
    h1 {
      @apply text-42px font-600 w-full max-w-550px text-left uppercase pt-40px;
      // font-family: 'SB Sans Interface';
      color: #FFFFFF;
      text-shadow: 0px 0px 5px rgba(117, 223, 184, 0.6);
      line-height: 140%;
    }
    h2 {
      @apply text-20px font-400 leading-28px mt-8px mb-32px;
      color: #FFFFFF;
      text-shadow: 0px 0px 5px rgba(117, 223, 184, 0.6);
    }
    img {
      @apply absolute ;
      left: 55%;
      bottom: -53px;
    }
  }
}
</style>
