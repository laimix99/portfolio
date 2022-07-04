<template>
<div class="BgServicesSeli">
  <div class="bg-services flex items-center z-1 w-full max-w-1258px rounded-16px h-680px">
   <img class="w-full" src="/images/logo-services.png" alt="">
  </div>
  <div class="new-format box-border -mt-250px z-2 w-full max-w-593px py-80px px-108px">
    <h1 class="m-0 w-full max-w-384 text-left not-italic font-500 text-32px leading-32px">новый формат свободы и заботы о том, что вам действительно дорого </h1>
    <p class="m-0 mt-32px w-full max-w-384px text-left not-italic font-300 text-16px leading-24px">Делисервис возник из нашего собственного желания проводить больше времени с семьей, друзьями и за любимым делом, а не тратить его на обслуживание автомобиля.</p>
  </div>
</div>

</template>




<style lang="scss" scoped>
.BgServicesSeli {
  .bg-services {
    background: url('/images/bg-services-deli.png') center center/cover no-repeat;
    img {

    }
  }
  .new-format {
    border-radius: 0px 16px 16px 0px;
    background: #fff;
    h1 {
      color: #152F4E;
    }
    p {
      color: #152F4E;
    }
  }
}

@media ( max-width: 991px ) {
  .BgServicesSeli {

    .new-format {
      padding: 50px 75px;
      max-width: 500px;
      h1 {
        font-size: 16;
      }
      p {
        font-size: 12px;
      }
    }
  }
}
@media ( max-width: 768px ) {
  .new-format {
    border-radius: 0px !important;
    margin-top: -50px !important;
    width: 100%;
    max-width: 1258px !important;
    display: flex;
    flex-direction: column;
    align-items: center;
    
  }
}
</style>