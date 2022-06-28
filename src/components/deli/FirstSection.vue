<script setup>
  import { ref, computed, reactive } from 'vue';
  const socialNetworks = ref([
    {img: '/images/icons-messanger3.svg', link: 'https://xn--80affa3aj0al.xn--80asehdb/'},
    {img: '/images/icons-messanger2.svg', link: 'https://www.instagram.com/'},
    {img: '/images/icons-messanger4.svg', link: 'https://www.youtube.com/'},
    {img: '/images/icons-messanger1.svg', link: 'https://ru-ru.facebook.com/'}
  ])
</script>

<template>
  <div class="page ">
    <div class="header ">
      <div class="logo">
        <img class="logo-img" src="/images/logo.svg" alt="">
        <div class="logo-text">сосредоточьтесь на главном, заботу о вашем автомобиле мы возьмем на себя</div>
        <div class="logo-store">
          <img src="/images/apple.svg" alt="" class="logo-store-img">
          <img src="/images/google.svg" alt="" class="logo-store-img">
        </div>
      </div>
      <div class="messangers" >
        <div class="messanger" v-for="n in socialNetworks">
          <a :href="n.link">
            <img :src="n.img" alt="">
          </a>
        </div>
      </div>
    </div>
  </div>


</template>

<style lang="scss" scoped>
.page {
  width: 100%;
  max-width: 1216;
  // box-sizing: border-box;
  background: url('/images/main-banner.png') center center/cover no-repeat;
  height: 640px;
  
  border-radius: 16px;
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 224px 60px 221px 104px;
    // max-height: 500px;
    box-sizing: border-box;
      
    .messangers {
      filter: drop-shadow(4px 8px 8px #3DBD96);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 56px;
      height: 152px;
      background: #6CDDBB;
      box-shadow: 8px 16px 24px rgba(185, 194, 205, 0.5);
      border-radius: 16px;

      .messanger {
        width: 24px;
        height: 24px;
        background: #152F4E;
        border-radius: 8px;
        margin-top: 8px; 
        a {
          // margin-top: 8px;
          img {
            margin-top: 6px;
          }
        }
      }
    }
    .logo {
      // position: absolute;
      left: 141px;
      top: 230px;
      display: flex;
      width: 432px;
      height: 198px;
      flex-direction: column;
      &-text {
        margin-top: 5px;
        text-align: left;
        font-family: 'Euclid Circular A';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #152F4E;
      }
      &-store {
        display: flex;
        justify-content: start;

        &-img {
          margin-top: 40px;
          margin-right: 6px;
        }
      }
    }
  }
}



@media ( max-width: 768px ) {
  .header {
    flex-direction: column;
    padding: 250px 20px 0px 20px !important;
    height: 200px;
    .logo {
      // padding: 20px;
      width: 300px !important;
      &-img {
        width: 100%;
        
      }
      &-text {
        font-size: 15px !important;
        width: 250px;
      }
      &-store {
        // flex-direction: column;
        &-img {
          width: 20%;
          margin-top: 270px !important;
        }
      }
    }
  }
  .messangers {
    display: none !important;
  }
  // .logo-text {
  //   font-size: 15px;
  // }
}

</style>