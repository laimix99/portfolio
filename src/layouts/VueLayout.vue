<script setup>
import { ref } from 'vue';
// const seen = true
// const app = ref()
// const message = 'Вы загрузили страницу' + new Date().toLocaleDateString()
const message = 'привет vue'

</script>

<template>
  <!-- <span 
    ref="app"
    :title="message"
  >
    Наведи на меня курсор на пару секунд, чтобы увидеть динамически связанное значение title!
  </span> -->
<!-- 
  <span v-if="seen">меня видно</span>
  <span v-else>ffff</span> -->

  <p>{{ message }}</p>
  <input >
</template>

<style scoped lang="scss">
  button {
    border: 1px solid ;
  }
</style>
