<script setup>
import InputText from './InputText.vue'
import BaseButton from './BaseButton.vue'

import { useTodo } from '../../composables/useTodo'

const props = defineProps({
  item: { type: Object },
});

const { removeTodo, editTodo, completeTodo, undoTodo } = useTodo();
</script>

<template>
  <div class="bg-hex-f5f5f5 w-full todo-item grey lighten-4">
    <InputText v-model="item.name" :status="item.status" />
    <!-- <InputTags v-model="item.tags" /> -->
    <div class="flex flex-row mt-20px w-full justify-between">
      <BaseButton
        v-if="item.status === 'new'"
        class="btn waves-effect waves-light"
        @click="completeTodo(item.id)"
      >
        Complete
      </BaseButton>
      <BaseButton
        v-if="item.status === 'completed'"
        class="btn waves-effect waves-light"
        @click="undoTodo(item.id)"
      >
        Undo
      </BaseButton>
      <BaseButton class="btn waves-effect waves-light" @click="removeTodo(item.id)">
        Remove
      </BaseButton>
    </div>
  </div>
</template>

<style>
.todo-item {
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* border: 1px solid #333; */
  padding: 8px;
  border-radius: 8px;
}
</style>