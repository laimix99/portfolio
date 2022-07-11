<script setup>
  import MySlider from './MySlider.vue'
  import CryptoCard from './CryptoCard.vue'
  const cards = [
    {img: '/images/krypto/cryptocurrency/bitcoin.png', name: 'Bitcoin', description: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.', price: '$43.7k'},
    {img: '/images/krypto/cryptocurrency/litecoin.png', name: 'Litecoin', description: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.', price: '$158'},
    {img: '/images/krypto/cryptocurrency/ethereum.png', name: 'Ethereum', description: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.', price: '$3k'},
    {img: '/images/krypto/cryptocurrency/dogicoin.jpg', name: 'Dogicoin', description: 'Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.', price: '$0,067'},
  ]
</script>

<template>
  <div class="cryptocurrency flex flex-col items-center pt-86px pb-160px relative">
    <h1 class="text-64px text-white leading-76px font-700">Available Creyptos</h1>
    <span class="text-24px text-white opacity-60 leading-28px mt-20px">Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</span>
    <div class="content h-650px relative">
      <MySlider 
        :slides="cards"
        class="mt-80px"
      >
        <template v-slot:default="{slide}">
          <CryptoCard :info="slide" />
        </template>
      </MySlider>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .title {
    color: #160E33;
  }
  .description {
    color: #160E33;
  }
  .price {
    color: #EF443B;
  }
  @media screen and (max-width: 1300px) {
    .content {
      height: 400px;
    }
  }
  @media screen and (max-width: 1000px) {
    .content {
      height: 250px;
    }
  }
  @media screen and (max-width: 767px) {
    h1 {
      font-size: 40px;
    }
    span {
      font-size: 18px;
    }
    .content {
    //   height: 100px;
    }
  }
</style>