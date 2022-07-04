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
  <div class="page w-full max-w-1216px h-640px rounded-16px">
    <div class="header w-full flex justify-between box-border pt-224px pr-60px pb-221px pl-104px">
      <div class="logo flex w-432px h-198px flex-col">
        <img class="logo-img" src="/images/logo.svg" alt="">
        <div class="logo-text mt-5px text-left not-italic font-500 text-18px leading-24px">сосредоточьтесь на главном, заботу о вашем автомобиле мы возьмем на себя</div>
        <div class="logo-store flex justify-start">
          <img src="/images/apple.svg" alt="" class="logo-store-img mt-40px mr-5px">
          <img src="/images/google.svg" alt="" class="logo-store-img mt-40px mr-5px">
        </div>
      </div>
      <div class="messangers flex flex-col justify-center items-center w-56px h-152px rounded-16px w-full" >
        <div class="messanger w-30px h-30px rounded-8px mt-5px" v-for="n in socialNetworks">
            <a :href="n.link">
            <img :src="n.img" alt="" class="p-10px w-full">
          </a>
        </div>
      </div>

    </div>
  </div>


</template>

<style lang="scss" scoped>
.page {
  background: url('/images/main-banner.png') center center/cover no-repeat;

  .header {     
    .messangers {
      filter: drop-shadow(4px 8px 8px #3DBD96);
      background: #6CDDBB;
      box-shadow: 8px 16px 24px rgba(185, 194, 205, 0.5);
      .messanger {
        
        background-color: #152F4E;
        a {
          
          img {
            
          }
        }
      }
    }
    .logo {
      &-text {
        color: #152F4E;
        font-family: 'Euclid Circular A';
      }
      &-store {
        &-img {

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

      width: 300px !important;
      &-img {
        width: 100%;
        
      }
      &-text {
        font-size: 15px !important;
        width: 250px;
      }
      &-store {

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

}

</style>