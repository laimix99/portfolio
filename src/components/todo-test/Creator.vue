<script setup> 
import InputText from './InputText.vue'

import { useTodo } from '../../composables/useTodo'
import { onMounted, ref, reactive } from 'vue'

const { newTodo, addTodo, addTodoCancel } = useTodo();
function create() {
  addTodo();
}
</script>

<template>
  <div class="flex flex-row py-10 gap-4 creator">
    <InputText
      v-model="newTodo.name"
      :input-props="{ placeholder: 'Enter todo name', type: 'text' }"
      @keyup.enter="create()"
      class="w-425px"
    />
    <button
      class="btn waves-effect waves-light"
      style="margin-right: 10px"
      @click="create()"
    >
      Create
    </button>
  </div>
</template>

<style>
.creator {
  max-width: 600px;
  /* min-height: 210px; */
  background: #f5f5f5;
}
</style>