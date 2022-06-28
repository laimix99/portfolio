<template>
<div class="BgServicesSeli">
  <div class="bg-services">
   <img src="images/logo-services.png" alt="">
  </div>
  <div class="new-format">
    <h1>новый формат свободы и заботы о том, что вам действительно дорого </h1>
    <p>Делисервис возник из нашего собственного желания проводить больше времени с семьей, друзьями и за любимым делом, а не тратить его на обслуживание автомобиля.</p>
  </div>
</div>

</template>




<style lang="scss" scoped>
.BgServicesSeli {
  .bg-services {
    z-index: 1;
    width: 100%;
    max-width: 1258px;
    border-radius: 16px;
    height: 680px;
    background: url('images/bg-services-deli.png') center center/cover no-repeat;
    display: flex;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .new-format {
    box-sizing: border-box;
    margin-top: -250px;
    z-index: 2;
    box-sizing: border-box;
    border-radius: 0px 16px 16px 0px;
    background: #fff;
    width: 100%;
    max-width: 592px;
    padding: 80px 108px;
    h1 {
      margin: 0;
      width: 100%;
      max-width: 384px;
      text-align: left;
      color: #152F4E;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 32px;
    }
    p {
      margin: 0;
      margin-top: 32px;
      width: 100%;
      max-width: 384px;
      text-align: left;
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 24px;
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