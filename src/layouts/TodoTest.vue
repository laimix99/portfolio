<script lang="ts" setup>
import Creator from '../components/todo-test/Creator.vue'
import TodosList from '../components/todo-test/TodosList.vue'
</script>

<template>
  <div class="flex flex-col p-8px gap-5 items-start">
    <h4 class="font-700 text-32px">NOVA-TODO</h4>
    <Creator />
    <TodosList status="new" />
    <TodosList status="completed" />
  </div>
</template>