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
  <div class="first-section flex flex-col items-center w-full pb-100px pt-100px">
    <h1 class="text-80px text-white font-700 leading-95px w-full max-w-730px">Next Generation Crypto Trading</h1>
    <div class="counter mt-27px">
      <span class=" text text-white text-18px leading-21px font-100 not-italic">Crypto Market Starts in</span>
      <Counter/>
      <div>
    </div>
    </div>
    <div class="buttons mt-40px flex lg:flex-row lg:space-x-2 lg:space-y-0 space-x-0 space-y-2 flex-col justify-center items-center w-full max-w-400px" >
      <button class="py-18px px-24px text-16px text-white leading-19px font-700  max-w-206px w-full  uppercase">Download APP</button>
      <button class="py-18px px-24px text-16px text-white leading-19px font-700 max-w-206px w-full  box-border uppercase">Trade crypto</button>
    </div>
    <span class="not-italic mt-40px font-500 text-18px leading-21px text-white uppercase">We accept</span>
    <div class="coins mt-40px flex justify-center items-center md:flex-row flex-col mt-27px w-full">
      <div class="coin flex flex-row justify-center items-center mr-30px" v-for="coin in coins">
        <img class="mr-12px w-24px h-24px" :src="coin.img" alt="">
        <p class=" text-white text-20px font-400 leading-24px">{{ coin.name }}</p>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.first-section {
  background: url('/images/krypto/first-section/background.png')center bottom/cover no-repeat;
  // height: 100vh;
}
button {
  border: 2px solid #EF443B;
  border-radius: 40px;
  &:hover {
    background: #EF443B;
  }
}

@media screen and (max-width: 767px) {
  .first-section {
    padding-top: 50px;
    padding-bottom: 50px;
    // height: 500px;
  }
  h1 {
    @apply text-40px;
  }
  button {
    @apply  py-10px px-5px ;
  }
  .coin {
    @apply mr-15px mb-10px;
    img {
      // @apply w-15px h-15px;
    }
    p {
      // @apply text-15px;
    }
  }

}
  @media screen and (max-width: 479px){

    .coin {
      img {
        // @apply w-12px h-12px;
      }
    }
  }
</style>
