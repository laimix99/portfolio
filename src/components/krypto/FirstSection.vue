<script setup>
  import Counter from '../countdown/Counter.vue'
  const coins = [
    {name: 'Bitcoin', img: '/images/krypto/first-section/bitcoin.png'},
    {name: 'Litecoin', img: '/images/krypto/first-section/litecoin.png'},
    {name: 'Chainlink', img: '/images/krypto/first-section/chainlink.png'},
    {name: 'Siacoin', img: '/images/krypto/first-section/siacoins.png'},
  ];
  
</script>
<template>
  <div class="first-section  flex flex-col items-center w-full box-border pt-100px">
    <h1 class="text-80px text-white font-700 leading-95px w-full max-w-730px">Next Generation Crypto Trading</h1>
    <div class="counter mt-27px">
      <span class=" text text-white text-18px leading-21px font-100 not-italic">Crypto Market Starts in</span>
      <Counter/>
      <div>

      </div>
    </div>
    <div class="buttons mt-40px flex flex-row w-full max-w-400px" >
      <button class="py-18px px-24px text-16px text-white leading-19px font-700 mr-30px max-w-206px w-full  uppercase">Downloa APP</button>
      <button class="py-18px px-24px text-16px text-white leading-19px font-700 max-w-206px w-full  box-border uppercase">Trade crypto</button>
    </div>
    <div class="coins mt-40px">
      <span class="not-italic font-500 text-18px leading-21px text-white uppercase">We accept</span>
      <div class="flex flex-row mt-27px w-full">
        <div class="coin flex flex-row justify-center mr-30px" v-for="coin in coins">
          <img class="mr-12px w-24px h-24px" :src="coin.img" alt="">
          <p class=" text-white text-20px font-400 leading-24px">{{ coin.name }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
  .first-section {
    background: url('/images/krypto/first-section/background.png')center bottom/cover no-repeat;
    height: 800px;
  }
  button {
    border: 2px solid #EF443B;
    border-radius: 40px;
    &:hover {
      background: #EF443B;
    }
  }
</style>