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
  <div class="todo-page">
    <!-- App menu [v1, v2] -->
    <!-- router-view/ -->
    <!-- <AppV1 v-if="pageId === v1"/> -->
    <!-- <AppV2 v-if="pageId === v2"/> -->
    <h1>i am todo page</h1>
    <input
      type="text"
      v-model="state.title"
      placeholder="Title"
      @keyup.enter="todoAdd()"
    />
    <div
      v-for="t in state.todos"
      :key="t.id"
      style="
        width: 100%;
        display: flex;
        flex-direction: row;
        padding: 10px;
        background: #eee;
        margin-bottom: 10px;
      "
    >
      <span style="">{{ t.title }}</span>
      <div style="display: flex; flex-grow: 1"></div>
      <span @click="t.isDone ? todoUndone(t.id) : todoDone(t.id)">{{
        t.isDone ? 'Undone' : 'Done'
      }}</span>
      <span style="margin-left: 10px" @click="todoDelete(t.id)">Delete</span>
    </div>
  </div>
</template>

<style>
.todo-page {
  padding: 10px;
}
</style>
