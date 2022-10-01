<template>
  <div class="filtration br">
    <h1>Фильтр</h1>
    <div class="col">
      <h2>Выбор колонки </h2>
      <div class="row">
        <label>Название</label>
        <input type="checkbox">
      </div>
      <div class="row">
        <label>Количество</label>
        <input type="checkbox">
      </div>
      <div class="row">
        <label>Расстояние</label>
        <input type="checkbox">
      </div>
    </div>
    <div class="condition">
      <h2>Выбор условий</h2>
      <div class="row">
        <label>Равно</label>
        <input type="checkbox">
      </div>
      <div class="row">
        <label>Больше</label>
        <input type="checkbox">
      </div>
      <div class="row">
        <label>Меньше</label>
        <input type="checkbox">
      </div>
    </div>
    <input type="text" placeholder="Поле для ввода значения для фильтрации">
  </div>
</template>

<style scoped lang="scss">
  .filtration {
    @apply flex flex-col items-start;
    h1 {
      @apply text-22px font-900;
    }
    .col {
      @apply flex flex-col items-start mt-15px;
      h2 {
        @apply text-16px font-700;
      }
      .row {
        @apply flex flex-row justify-between w-full mt-5px;
      }
    }
    .condition {
      @apply flex flex-col items-start mt-15px;
      h2 {
        @apply text-16px font-700;
      }
      .row {
        @apply flex flex-row justify-between w-full mt-5px;
      }
    }
    input {
      border: 1px solid grey;
    }
  }
</style>
