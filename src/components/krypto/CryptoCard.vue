<script setup>
  defineProps({
    info: {
      type: Object,
      default: () => {}
    }
  })
</script>

<template>
<div class="card flex flex-col h-full bg-white rounded-16px ">
  <img class="images w-2/1" :src="info.img" alt="">
  <div class="flex flex-col items-start ">
    <div class="pt-24px pl-24px pr-24px">
      <div class="title text-left text-24px font-500 leading-28px ">{{ info.name }}</div>
      <div class="description text-left text-18px font-400 opacity-60 leading-25px mt-12px">{{info.description}}</div>
    </div>
    <div class="flex flex-row px-24px pt-90px pb-20px w-full justify-between items-center">
      <div class="price text-36px font-700 leading-43px">{{info.price}}</div>
      <button class="py-18px px-24px uppercase text-16px text-white">Trade now</button>
    </div>
  </div>
</div>
</template>

<style scoped lang="scss">
  button {
    background: #EF443B;
    border-radius: 40px;
  }
  .images {
    border-top-right-radius: 16px ;
    border-top-left-radius: 16px ;
    height: 50%;
  }
</style>