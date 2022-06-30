<!-- here v1 + windicss -->
<script setup>
import { onMounted, reactive } from 'vue';

const state = reactive({
  todos: [],
  title: '',
});

const todoAdd = () => {
  let todo = {
    id: Date.now(),
    title: state.title,
    isDone: false,
  };
  state.todos.push(todo);
  state.title = '';
};
const todoDelete = (id) => {
  console.log(':todoDelete', id);
  if (confirm('Delete todo?')) {
    state.todos = state.todos.filter((t) => t.id !== id);
  }
};
const todoDone = (id) => {
  console.log('todoDone', id);
  const t = state.todos.find((t) => t.id === id);
  t.isDone = true;
};
const todoUndone = (id) => {
  console.log(':todoUndone', id);
  const t = state.todos.find((t) => t.id === id);
  t.isDone = false;
};

onMounted(() => {
  console.log(':onMounted');
});
</script>

<template>
  <div class="p-10px">
    <h1>I am todo page</h1>
    <input
     
      class="placeholder-amber-500"
      type="text"
      v-model="state.title"
      placeholder="Title"
      @keyup.enter="todoAdd()"
    />
    <div
      v-for="t in state.todos"
      :key="t.id"
      class="w-full flex flex-row p-10px m-5px bg-gray-200 opacity-50 rounded-8px"
      
    >
      <span>{{ t.title }}</span>
      <div style="display: flex; flex-grow: 1"></div>
      <span class="cursor-pointer hover:opacity-50 text-green-500" @click="t.isDone ? todoUndone(t.id) : todoDone(t.id)">{{
        t.isDone ? 'Undone' : 'Done'
      }}</span>
      <span class="ml-10px cursor-pointer hover:opacity-50 text-red-500" @click="todoDelete(t.id)">Delete</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  input {
    border: solid grey 1px;
    border-radius: 8px;
    padding: 6px 12px;
    &:focus {
      outline: none;
      border: 1px solid red;
    }
  }
</style>