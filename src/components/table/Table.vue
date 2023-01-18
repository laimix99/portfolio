<!-- <script setup>
import { ref, computed } from 'vue';

import TableRow from './TableRow.vue'
const props = defineProps({
  table: {
    tupe: Array
  }
})
const usersPerPage = 10
const pageNumber = ref(1)

const pageClick = (page) => {
  pageNumber.value = page
}

const pages = computed(() => {
  return Math.ceil(props.table.length / 10)
})
const paginatedUsers = computed(() => {
  let from = (pageNumber.value - 1) * usersPerPage
  let to = from + usersPerPage
  return props.table.slice(from, to)
})
// console.log(paginatedUsers)
</script>

<template>
  <div class="table">
    <div class="table_header">
      <p>Дата</p>
      <p>Название</p>
      <p>Количество</p>
      <p>Расстояние</p>
    </div>
    <div class="table_body">
      <TableRow
        v-for="row in paginatedUsers"
        :row_data="row"
      />
    </div>
    <div class="table_pagination">
      <div 
        v-for="page in pages"
        @click="pageClick(page)"
        class="page"
        :class="{'page_active' : page === pageNumber}"
      >
        {{page}}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .table {
    @apply flex flex-col items-center w-900px;
    &_header {
      @apply flex flex-row w-full pb-10px mb-10px;
      border-bottom: 2px solid grey;
      p {
        @apply flex flex-row justify-around w-full;
      }
    }
    &_pagination {
      @apply flex flex-row justify-center mt-20px;
      .page {
        @apply text-20px mx-5px py-5px px-8px ;
        border: 1px solid grey ;
        cursor: pointer;
        &:hover {
          background-color: grey;
          color: white;
        }
      }
      .page_active {
        background-color: grey;
        color: white;
      }
    }
  }
</style> -->
<script setup>
  import { onMounted, ref, computed, reactive } from 'vue';
  
  import TableRow from './TableRow.vue';
  import MySvg from './MySvg.vue';
  
  const props = defineProps({
    rows: {
      tupe: Array,
    },
  });
  const usersPerPage = 10;
  const pageNumber = ref(1);
  
  const pageClick = (page) => {
    pageNumber.value = page;
  };
  
  const pages = computed(() => {
    return Math.ceil(props.rows.length / 10);
  });
  const paginatedUsers = computed(() => {
    let from = (pageNumber.value - 1) * usersPerPage;
    let to = from + usersPerPage;
    return props.rows.slice(from, to);
  });

  const sorByName = () => {
    props.rows.sort((a, b) => a.name.localeCompare(b.name))
  }
  const sortByQuantity = () => {
    props.rows.sort((a, b) => a.quantity - b.quantity)
  }
  const sortByDistance = () => {
    props.rows.sort((a, b) => a.distance - b.distance)
  }
  </script>
  
  <template>
    <div class="table flex flex-col items-center w-900px pt-30px">
      <div class="table_header flex flex-row w-full pb-10px mb-10px">
        <p class="flex flex-row justify-around w-full text-white">Дата</p>
        <div
          class="flex flex-row justify-center items-center w-full cursor-pointer"
          @click="sorByName()"
        >
          <p class="text-white">Название</p>
          <MySvg name="down" color="red" width="30" />
        </div>
        <div
          class="flex flex-row justify-center items-center w-full cursor-pointer"
          @click="sortByQuantity()"
        >
          <p class="text-white">Количество</p>
          <MySvg name="down" color="red" width="30" />
        </div>
        <div
          class="flex flex-row justify-center items-center w-full cursor-pointer"
          @click="sortByDistance()"
        >
          <p class="text-white">Расстояние</p>
          <MySvg name="down" color="red" width="30" />
        </div>
      </div>
      <div class="table_body h-450px">
        <TableRow v-for="row in paginatedUsers" :row_data="row" />
      </div>
      <div class="table_pagination flex flex-row justify-center mt-20px">
        <div
          v-for="page in pages"
          @click="pageClick(page)"
          class="page text-20px w-30px mx-5px py-5px px-8px"
          :class="{ page_active: page === pageNumber }"
        >
          {{ page }}
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .page {
    border: 1px solid grey;
    cursor: pointer;
  }
  .page:hover {
    background-color: grey;
    color: white;
  }
  .page_active {
    background-color: grey;
    color: white;
  }
  </style>
  