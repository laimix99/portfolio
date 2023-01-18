<script setup>
import Table from '../components/table/Table.vue'
import Filtration from '../components/table/Filtration.vue'

import { onMounted, ref, computed } from 'vue';

const tables = [
    { date: '21.02', name: 'Книга', quantity: '45', distance: '150' },
    { date: '22.03', name: 'Рука', quantity: '66', distance: '660' },
    { date: '01.09', name: 'Голова', quantity: '20', distance: '9906' },
    { date: '05.12', name: 'Стол', quantity: '1', distance: '235' },
    { date: '20.06', name: 'Мышка', quantity: '6', distance: '465464' },
    { date: '21.02', name: 'Книга', quantity: '45', distance: '454885' },
    { date: '22.03', name: 'Рука', quantity: '66', distance: '7896' },
    { date: '01.09', name: 'Голова', quantity: '20', distance: '906' },
    { date: '05.12', name: 'Стол', quantity: '1', distance: '2355' },
    { date: '20.06', name: 'Мышка', quantity: '6', distance: '29999' },
    { date: '21.02', name: 'hhhhh', quantity: '45', distance: '89150' },
    { date: '22.03', name: 'Рука', quantity: '66', distance: '66003' },
    { date: '01.09', name: 'Голова', quantity: '20', distance: '995566' },
    { date: '05.12', name: 'Стол', quantity: '1', distance: '2356565' },
    { date: '20.06', name: 'Мышка', quantity: '6', distance: '998779' },
    { date: '21.02', name: 'Книга', quantity: '45', distance: '155244' },
    { date: '22.03', name: 'Рука', quantity: '66', distance: '9006301' },
    { date: '01.09', name: 'Голова', quantity: '20', distance: '245654' },
    { date: '05.12', name: 'Стол', quantity: '1', distance: '454621' },
    { date: '20.06', name: 'Мышка', quantity: '6', distance: '5421' },
    { date: '21.02', name: 'Книга', quantity: '45', distance: '5441' },
    { date: '22.03', name: 'Рука', quantity: '66', distance: '545212' },
    { date: '01.09', name: 'Голова', quantity: '20', distance: '9544536' },
    { date: '05.12', name: 'Стол', quantity: '1', distance: '235' },
    { date: '20.06', name: 'Мышка', quantity: '6', distance: '999999' },
    { date: '21.02', name: 'Книга', quantity: '45', distance: '150' },
    { date: '22.03', name: 'Рука', quantity: '66', distance: '660' },
    { date: '01.09', name: 'Голова', quantity: '20', distance: '9906' },
    { date: '05.12', name: 'Стол', quantity: '1', distance: '235' },
    { date: '20.06', name: 'Мышка', quantity: '6', distance: '999999' },
  ]
</script>

<template>
  <div class="third-task">
    <div class="container br">
      <Filtration/>
      <Table
        :rows="tables"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .third-task {
    @apply flex flex-col items-center w-full py-40px h-100vh;
    background-color: #242424;
    .container {
      @apply flex flex-col justify-between items-center w-full max-w-1200px;
    }
  }
</style>
