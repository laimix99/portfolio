<!-- <template>
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
</style> -->

<script setup>
  import { ref } from 'vue';
  const showCol = ref(false);
  const showSelectCol = () => {
    showCol.value = !showCol.value;
  };
  const showCondition = ref(false);
  const showSelectCondition = () => {
    showCondition.value = !showCondition.value;
  };
  </script>
  
  <template>
    <div
      class="
        filtration
        flex flex-row
        w-full
        justify-between
        items-start
        relative
        br
        h-50px
      "
    >
      <h1 class="text-15px font-700 text-white">Фильтр</h1>
      <div class="flex flex-col items-senter w-1/4 ">
        <button @click="showSelectCol()" class="text-15px text-white font-700">
        Выбор колонки
        </button>
        <div
          v-show="showCol"
          class="flex justify-center left-190px mt-10px"
        >
          <select class="select w-150px">
            <option>Название</option>
            <option>Количество</option>
            <option>Растояние</option>
          </select>
        </div>
      </div>
      <div class="w-1/4 flex flex-col items-center">
        <button @click="showSelectCondition()" class="text-white text-15px font-700">
        Выбор условий
        </button>
        <div
          v-show="showCondition"
          class="flex justify-start mt-10px"
        >
          <select class="w-150px">
            <option>Равно</option>
            <option>Содержит</option>
            <option>Больше</option>
            <option>Меньше</option>
          </select>
        </div>
      </div>
      <input type="text" placeholder="Поле для ввода значения для фильтрации" />
    </div>
  </template>
  
  <style scoped>
  .filtration {
    /* border: 1px solid red; */
  }
  input {
    border: 1px solid grey;
  }
  .select__list {
    border-radius: 0;
    background: red;
  }
  .select {
    /* background: red; */
    /* border-radius: 19px; */
  }
  </style>
  
