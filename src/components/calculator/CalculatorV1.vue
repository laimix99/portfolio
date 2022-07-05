<script setup>
import { ref, computed, reactive } from 'vue';
const result = ref('');
const numbers = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
const operations = ref(['+', '-', '*', '/']);
const input = (char) => {
  // result.value = resalt.value.toString();
  result.value += char;
};
const reset = () => {
  result.value = '';
};
const calc = () => {
  result.value = eval(result.value);
};
</script>

<template>
  <div class="shell m-0 m-auto mt-40px w-200px ">
    <div class="grid flex flex-wrap justify-around w-full">
      <input
        tape="text"
        @keypress.enter="calc()"
        v-model="result"
        placeholder="0"
        class="w-200px border-0 text-18px py-5px px-5px text-right"
      />
      <button @click="input(num)" class="cell" v-for="num in numbers">
        {{ num }}
      </button>
      <button @click="input(op)" class="cell op" v-for="op in operations">
        {{ op }}
      </button>
      <button class="cell op" @click="reset()">R</button>
      <button class="cell op" @click="calc()">=</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%; 
  background-color: #fff;
}
.cell {
  flex: 33%;
  height: 50px;
  font-size: 18px;
  border: none;
}

</style>
