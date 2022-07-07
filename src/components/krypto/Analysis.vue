<script setup>
  const items = [
    {img: '/images/krypto/аnalysis/icons-1.png', title: 'How to trade Bitcoin', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.', text: 'Learn more'},
    {img: '/images/krypto/аnalysis/icons-2.png', title: 'Gain the best exchange', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.', text: 'Learn more'},
    {img: '/images/krypto/аnalysis/icons-3.png', title: 'Reduce your loosing', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.', text: 'Learn more'},
    {img: '/images/krypto/аnalysis/icons-4.png', title: 'Win 50-50 trading strategy', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.', text: 'Learn more'},
  ]
</script>

<template>
  <div class="analysis flex flex-col items-center w-full pb-54px">
    <h1 class="text-64px text-white leading-76px font-700">Crypto Market Analysis</h1>
    <span class="text-24px text-white opacity-60 leading-28px mt-20px">Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</span>
    <div class="items flex flex-row flex-wrap mt-80px w-full max-w-1110px ml-100px">
      <div class="item w-full max-w-1/2 flex flex-row mt-30px" v-for="item in items">
        <img class="mr-30px" :src="item.img" alt="">
        <div class="information flex flex-col items-start">
          <div class="title text-24px leading-28px text-white ">{{ item.title }}</div>
          <div class="description text-18px text-white opacity-60 w-full max-w-250px leading-25px mt-18px text-left">{{ item.description }}</div>
          <div class="text text-18px mt-24px">{{ item.text }}</div>
        </div>
      </div>
    </div>
    <button class="py-18px px-24px text-16px uppercase mt-46px">Enroll crypto University</button>
  </div>
</template>

<style scoped lang="scss">
  .text {
    color: #EF443B;
  }
  button {
    color: #fff;
    background: rgba(22, 14, 51, 0.5);
    border: 2px solid #EF443B;
    border-radius: 40px;
    &:hover {
    box-shadow: 0px 0px 40px rgba(239, 68, 59, 0.4);
  }
  }
</style>
