<script setup>
  const items = [
    { img: '/images/breew/fifth-section/apple.png', title: 'Download for IOS' },
    { img: '/images/breew/fifth-section/google.png', title: 'Download for Android' },
    
  ]
</script>

<template>
  <div class="fifth-section">
    <div class="container">
      <div class="contetnt pl-20px">
        <h1>Try the crypto wallet of the future, today</h1>
        <div class="items">
          <div class="item" v-for="item in items">
            <img :src="item.img" alt="">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .fifth-section {
    @apply w-full flex flex-col items-center pt-250px; 
    .container {
      @apply w-full max-w-1500px h-1000px flex flex-col items-start justify-center;
      background: url('/images/breew/fifth-section/bg.png')center bottom/cover no-repeat;
      background-size: 100%;
      h1 {
        @apply text-75px leading-89px text-white font-700 w-full max-w-750px text-left;
      }
      .items {
        @apply flex mt-69px;
        .item {
          @apply bg-white rounded-23px flex py-34px px-54px mr-30px flex items-center ;
          img {
            @apply w-40px h-40px py-5px px-5px rounded-1/2 mr-30px;
            background-color: #0582CA;;
          }
          span {
            @apply text-25px leading-30px;
            color: #0582CA;
          }
        }
      }
    }
  }
</style>
