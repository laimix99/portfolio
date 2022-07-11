<script setup>
  const items = [
    {img: '/images/krypto/features/icons-1.png', title: 'Weekly Trading Contest', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.' },
    {img: '/images/krypto/features/icons-2.png', title: 'Less Commission On Trade', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.' },
    {img: '/images/krypto/features/icons-3.png', title: 'Safe And Secure Trading platform', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.' },
    {img: '/images/krypto/features/icons-4.png', title: 'Instant Withdraw Process', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.' },
    {img: '/images/krypto/features/icons-5.png', title: 'Monthly Commition', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.' },
    {img: '/images/krypto/features/icons-6.png', title: '24/7 Support Team', description: 'Eu tellus quam id sed ultrices. Integer nunc lectus nisi, erat et ornare risus.' },
  ]
</script>

<template>
  <div class="features flex flex-col w-full items-center pt-90px pb-139px">
    <h1 class="text-64px text-white leading-76px font-700">Attractive Features</h1>
    <span class="text-24px leading-28px text-white opacity-60 font-400 mt-20px">Windaful makes playing the UK's best raffles easy and fun.</span>
    <div class="items flex flex-row w-full flex-wrap max-w-1110px mt-80px">
      <div class="item w-full w-1/3 mt-30px " v-for="item in items">
        <div class="logo flex flex-row">
          <img class="w-65px h-65px mr-30px" :src="item.img" alt="">
          <div class="title text-30px leading-36px text-white text-left w-full max-w-250px">{{ item.title }}</div>
        </div>
        <div class="description text-24px text-white opacity-60 text-left mt-24px leading-28px">{{ item.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  @media screen and (max-width: 991px) {
    .features {
      padding-bottom: 50px;
    }
    h1 {
      font-size: 40px;
    }
    span {
      font-size: 18px;
    }
    .items { 
      margin-top: 25px;
      padding: 0px 10px;
      .item {
        width: 50%;
      }
    }
  }
  @media screen and (max-width: 767px) {
    .items {
      display: flex;
      flex-direction: column;
      .item {
        width: 100%;
        .logo {
          .title {
            font-size: 25px;
          }
        }
        .description {
          font-size: 20px;
        }
      }
    }
  }
</style>
