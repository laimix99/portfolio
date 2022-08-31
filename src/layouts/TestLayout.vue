<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation,} from 'swiper';

import 'swiper/css';

const onSwiper = (swiper) => {
  console.log(swiper);
};
const onSlideChange = () => {
  console.log('slide change');
};

const navigation = {
  nextEl: '.next',
  prevEl: '.prev',
}

const slides_img = [
  '/images/test/human.png', 
  '/images/test/human.png', 
  '/images/test/human.png', 
  '/images/test/human.png', 
  '/images/test/human.png', 
  '/images/test/human.png', 
  '/images/test/human.png', 
  '/images/test/human.png'
]
const slides_text = [
  'Для примера мы показали вам его лицо.  В первой серии он прячется в подвале <br/> за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — <br/> ему не терпится отдать вам промокод.',
  'Для примера мы показали вам его лицо.  В первой серии он прячется в подвале <br/> за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — <br/> ему не терпится отдать вам промокод.',
  'Для примера мы показали вам его лицо.  В первой серии он прячется в подвале <br/> за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — <br/> ему не терпится отдать вам промокод.',
  'Для примера мы показали вам его лицо.  В первой серии он прячется в подвале <br/> за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — <br/> ему не терпится отдать вам промокод.',
  'Для примера мы показали вам его лицо.  В первой серии он прячется в подвале <br/> за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — <br/> ему не терпится отдать вам промокод.',
  'Для примера мы показали вам его лицо.  В первой серии он прячется в подвале <br/> за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — <br/> ему не терпится отдать вам промокод.',
  'Для примера мы показали вам его лицо.  В первой серии он прячется в подвале <br/> за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — <br/> ему не терпится отдать вам промокод.',
  'Для примера мы показали вам его лицо.  В первой серии он прячется в подвале <br/> за мониторами, и пусть борода не собьёт вас с толку. Найдите героя и нажмите  на паузу — <br/> ему не терпится отдать вам промокод.',
]
</script>

<template>
  <div class="page">
    <div class="page-hints">
      <div class="page-hints-line"></div>
      <div class="page-hints-line"></div>
      <div class="page-hints-third-clue">
        <span class="page-hints-third-clue-number">03</span>
        <p class="page-hints-third-clue-text">Подсказки</p>
      </div>
      <div class="page-hints-line"></div>
    </div> 
    <div class="page-scroll">
      <p class="page-scroll-text">Скрольте вниз</p>
      <img class="page-scroll-down" src="/images/test/down.svg" alt="">
    </div>
    <p class="page-text">hd.kinopoisk.ru</p>
    <div class="page-burger">
      <button class="page-burger-btn">
        <div class="page-burger-btn-line"></div>
        <div class="page-burger-btn-line"></div>
        <div class="page-burger-btn-line"></div>
      </button>
    </div>
    <div class="page-container">
      <img class="page-container-logo" src="/images/test/logo.svg" alt="">
      <h1 class="page-container-title">ОНИ ДОЛЖНЫ ЧТО-ТО ЗНАТЬ</h1>
      <button class="next">
        <img src="/images/test/arrow-btn.svg" alt="">
      </button>
      <button class="prev">
        <img src="/images/test/arrow-btn.svg" alt="">
      </button>
      <swiper
        class="page-container-swiper"
        :modules="[Navigation]"
        :navigation="navigation"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide 
          v-for="slide in slides_img"
          class="page-container-swiper-slide"
        >
          <img :src="slide" alt="">
        </swiper-slide>
        <!-- <img class="absolute z-20" src="/images/test/cloud-2.png" alt=""> -->
      </swiper>
      <swiper
        class="page-container-swiper-2 "
        :modules="[Navigation]"
        :navigation="navigation"
        :slides-per-view="1"
        :space-between="50"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide 
          v-for="t in slides_text"
          class="page-container-swiper-2-slide"
        >
          <span 
            v-html="t" 
            class="page-container-swiper-2-slide-text"
          />
        </swiper-slide>
      </swiper>
      <a class="page-container-promo" href="">
        <button >
          <span>Искать промокод</span>
        </button>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@font-face {
  font-family: "Futura";
  src: url("/fonts/FuturaPT-Bold.ttf") format("truetype"),     
}
@font-face {
  font-family: "GraphikKinopoiskLCApp";
  src: url("/fonts/kinopoisk-lite.woff2") format("truetype"),     
}

.page {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: url('/images/test/bg.png')center center/cover no-repeat;
  &::after {
    content: url('/images/test/2.png');
    background-size: 120%;
    // background-repeat: repeat;
    position: absolute;
    top: 20px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  &-hints {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    position: absolute;
    top: 22%;
    left: 34px;
    width: 150px;
    height: 250px;
    &-line {
      width: 8px;
      height: 2px;
      background:  #333333;
    }
    &-third-clue {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding-bottom: 5px;
      border-bottom: #333333 1px solid;
      &-number {
        font-family: 'GraphikKinopoiskLCApp';
        font-weight: bold;
        font-size: 16px;
        line-height: 15px;
        color: #333333;
        margin-right: 20px;
      }
      &-text {
        font-family: 'GraphikKinopoiskLCApp';
        font-size: 14px;
        line-height: 15px;
        color: #333333;
      }
    }
  }
  &-text {
    position: absolute;
    z-index: 10;
    right: 0;
    top: 50%;
    font-family: 'GraphikKinopoiskLCApp';
    font-size: 14px;
    line-height: 15px;
    text-align: center;
    color: #333333;
    transform: rotate(90deg);
  }
  &-burger {
    position: absolute;
    left: 34px;
    top: 40px;
    &-btn{ 
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 20px;
      height: 16px;
      // background: red;
      &-line {
        width: 19px;
        height: 3px;
        border: 1px solid black;
      }
    }
  }
  &-scroll {
    position: absolute;
    left: 0px;
    bottom: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-text {
      font-family: 'GraphikKinopoiskLCApp';
      font-size: 14px;
      // line-height: 15px;
      color: #333333;
      transform: rotate(-90deg);
      margin-bottom: 50px;
    }
  }
  &-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    max-width: 950px;
    height: 100%;
    &-logo {
      margin-top: 10px;
      z-index: 50;
    }
    &-title {
      z-index: 50;
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 72px;
      color: #FFCC64;
      margin-top: 23px;
      font-family: "Futura";
    }
    .next {
      position: absolute;
      top: 350px;
      z-index: 10;
      right: 0;
      border: 1px solid #333333;
      border-radius: 50%;
      padding: 18px 12px;
    }
    .prev {
      position: absolute;
      top: 350px;
      z-index: 10;
      left: 0;
      border: 1px solid #333333;
      border-radius: 50%;
      padding: 18px 12px;
      transform: rotate(180deg)
    }
    &-swiper {
      // position: relative;
      // z-index: 1;
      width: 100%;
      margin-bottom: 30px;
      margin-top: 107px;
      &-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 900px;
        img {

        }
        &-text {
          position: absolute;
          top: 50%;
          font-weight: 100;
          font-size: 20px;
          line-height: 32px;
          text-align: center;
          color: black;
          font-family: "GraphikKinopoiskLCApp";
          z-index: 50;
        }
      }
    }
    &-swiper-2 {
      width: 100%;
      z-index: 20;
      position: absolute;
      bottom: 170px;
      &-slide {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        height: 100%;
        width: 900px;
        &-text {
          font-size: 20px;
          line-height: 32px;
          text-align: center;
          color: black;
          font-family: "GraphikKinopoiskLCApp";
          z-index: 50;
        }
      }
    }
    &-promo {
      position: absolute;
      bottom: 70px;
      z-index: 10;
      button {
        background: #FFFFFF;
        box-shadow: 0px 5px 26px rgba(11, 75, 92, 0.0975713);
        border-radius: 8px;
        padding: 19px 32px 19px 26px;
        span {
          font-size: 15px;
          line-height: 18px;
          color: #333333;
          font-family: "GraphikKinopoiskLCApp";
          &::after {
            content: url('/images/test/next_promo.svg');
            margin-left: 15px;
          }
        }
      }
    }
  }
}

</style>
