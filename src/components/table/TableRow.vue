<!-- <script setup>
defineProps({
  row_data: {
    type: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="table-row">
    <div class="row row_date">{{ row_data.date }}</div>
    <div class="row row_name">{{ row_data.name }}</div>
    <div class="row row_quantity">{{ row_data.quantity }}</div>
    <div class="row row_distance">{{ row_data.distance }}</div>
  </div>
</template>

<style scoped lang="scss">
  .table-row {
    @apply flex flex-row justify-around w-900px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width:900px;
  
  } 
  .row {

    @apply flex flex-col items-center w-full text-left py-8px;
    // border: 1px solid  red;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: left;
    padding: 8px 0px;
    
  }
</style> -->
<script setup>
  defineProps({
    row_data: {
      type: Object,
      default: () => {},
    },
  });
  </script>
  
  <template>
    <div class="table-row">
      <div class="row row_date">{{ row_data.date }}</div>
      <div class="row row_name">{{ row_data.name }}</div>
      <div class="row row_quantity">{{ row_data.quantity }}</div>
      <div class="row row_distance">{{ row_data.distance }}</div>
    </div>
  </template>
  
  <style scoped>
  .table-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 900px;
  }
  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    text-align: left;
    padding: 8px 0px;
    color: white;
  }
  </style>
  