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
  <div class="shell">
    <div class="grid">
      <input
        tape="text"
        @keypress.enter="calc()"
        v-model="result"
        placeholder="0"
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

<style scoped>
.shell {
  margin: 0 auto;
  margin-top: 40px;
  width: 200px;
  box-shadow: 0 3px 15px grey;
}

input {
  width: 200px;
  border: 0;
  color: #243849;
  font-size: 18px;
  padding: 5px 5px;
  text-align: right;
}
/* flex flex-wrap justify-around w-full */
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}
/* flex flex-1 h-50px font-sm border-none */
.cell {
  flex: 33%;
  height: 50px;
  font-size: 18px;
  border: none;
}
.num {
  background-color: #243849;
  color: #fff;
  font-weight: 400;
}
.cell:hover {
  background-color: #182530;
}
.op {
  background-color: #ff9900;
  color: #243849;
}
.op:hover {
  background-color: red;
}
</style>
