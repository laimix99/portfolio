<script lang="ts" setup>
import TodoItem from './TodoItem.vue'
import { computed } from 'vue'
import { useTodo } from '../../composables/useTodo'
const props = defineProps({
  status: { type: String, default: 'new' },
});

const { todos } = useTodo();

const todosLocal = computed(() => {
  return todos.value.filter((t: any) => t.status === props.status);
});
</script>

<template>
  <div class="flex flex-col items-start" style="width: 500px">
    <!-- header -->
    <span style="font-size: 20px">{{ props.status }}</span>
    <!-- items -->
    <TodoItem
      v-for="t in todosLocal"
      :key="t.id"
      :item="t"
      :style="{ marginBottom: '8px' }"
    ></TodoItem>
  </div>
</template>