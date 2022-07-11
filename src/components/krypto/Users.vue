<script setup>
  import MySlider from './MySlider.vue'
  import UsersCard from './UsersCard.vue'

  const cards = [
    { img: '/images/krypto/users/user-icons-1.png', name: 'Cameron Williamson', jobTitle: 'FX Trader', },
    { img: '/images/krypto/users/user-icons-2.png', name: 'Bessie Cooper', jobTitle: 'Stock Manager', },
    { img: '/images/krypto/users/user-icons-3.png', name: 'Albert Flores', jobTitle: 'Crypto Analyst', },
    { img: '/images/krypto/users/user-icons-4.jpg', name: 'Olivia Adamson', jobTitle: 'Crypto Analyst', },
    { img: '/images/krypto/users/user-icons-5.jpg', name: 'Taylor Lewis', jobTitle: 'Stock Manager', },
    { img: '/images/krypto/users/user-icons-6.png', name: 'Isla Young', jobTitle: 'FX Trader', },
  ]

</script>

<template>
  <div class="users w-full flex flex-col items-center pt-91px pb-155px">
    <h1 class="text-64px font-700 text-white leading-76px">30 Million Users Worldwide</h1>
    <span class="text-24px text-white fony-400 opacity-60 leading-28px">Tincidunt id nibh orci nibh justo. Purus et turpis nulla elementum, sed vel.</span>
    <div class="content w-full w-full max-w-1110px mt-80px">
      <MySlider
        :slides="cards"
        class="h-450px"
        
      >
        <template v-slot:default="{slide}">
          <UsersCard :info="slide"/>
        </template>
      </MySlider>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @media screen and (max-width: 1300px) {
    .content {
      max-width: 850px;
    }
  }
  @media screen and (max-width: 1000px) {
    .content {
      max-width: 650px;
    }
  }
  @media screen and (max-width: 767px) {
    .users {
      padding-bottom: 10px;
    }
    h1 {
      font-size: 40px;
    }
    span {
      font-size: 18px;
    }
    .content {
      max-width: 300px;
    }
  }
  @media screen and (max-width: 476px) {
    .content {
      max-width: 250px;
    }
  }
</style>
