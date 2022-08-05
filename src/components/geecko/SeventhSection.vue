<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination} from 'swiper';

import 'swiper/css';
import MySvg from './MySvg.vue'

const cards = [
  {
    img: '/images/geecko/seventh-section/item-1.png', 
    title: 'Accelerator Alchemist', 
    description: 'Geecko is a platform that automatizes developers relations, helping companies hire IT professionals using employer Brand marketing. 53x more effective than hackathons'
  },
  {
    img: '/images/geecko/seventh-section/item-2.png', 
    title: 'Moziila builders award', 
    description: '"We target top developers and challenge them with high-quality coding tests and quiz, reducing time-to-hire and ensuring companies find the perfect match"'
  },
  {
    img: '/images/geecko/seventh-section/item-3.png', 
    title: 'Crunchbase', 
    description: '"Geecko targets competent developers and challenges them with high-quality programming games. HR marketing targeted for software engineers"'
  },
  {
    img: '/images/geecko/seventh-section/item-4.png', 
    title: 'Angelsdeck', 
    description: '"We reserved the entire round for the whole club, and we got an exclusive offer for club members. Second, the round was collected almost immediately and even with oversubscription"'
  },
  {
    img: '/images/geecko/seventh-section/item-5.png', 
    title: 'Habr', 
    description: '"Geecko helps build relationships between IT companies and developers, but does so in an unusual way: it creates games, designs coding battles, organizes meetups, and uses other online formats"'
  },
  {
    img: '/images/geecko/seventh-section/item-6.png', 
    title: 'Pitchbook', 
    description: '"Geecko  platform encourages team building and uses artificial intelligence to match software engineers and tech vacancies using game mechanics for interviews"'
  },
]
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
const pagination = {
  clickable: true,
  type: 'bullets',
  bulletActiveClass: 'swiper--bullet--active',
  bulletClass: 'swiper--bullet',
  renderBullet(index, className: 'swiper--bullet') {
    return `<div class="${className}"></div>`
  }
}
</script>

<template>
  <div class="seventh-section">
    <div class="container">
      <h1>What <span>others</span> are <br/> saying <span>about us</span></h1>
      <div class="content">
        <button class="next ">
          <MySvg
            name="next"
            width="50"
            height="50"
          />
        </button>
        <button class="prev">
          <MySvg
            name="prev"
            width="50"
            height="50"
          />
        </button>
        <swiper
          :modules="[Pagination, Navigation]"
          :pagination="pagination"
          :navigation="navigation"
          :slides-per-view="3"
          :space-between="24"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          class="my-swiper"
        >
          <swiper-slide class="slider" v-for="card in cards">
            <div class="card">
              <div class="logo">
                <img :src="card.img" alt="">
              </div>
              <h2>{{ card.title }}</h2>
              <p>{{ card.description }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<style  lang="scss">
.seventh-section {
  @apply flex flex-col items-center w-full py-100px;
  .container {
    @apply flex flex-col items-start w-full max-w-1100px;
    h1 {
      @apply text-52px;
      line-height: 120%;
      color: #231F20;
      span {
        @apply font-600;
      }
    }
    .content {
      @apply flex flex-col items-center w-full relative;
      .my-swiper {
        @apply w-full max-w-850px mt-71px;
        .slider {
          cursor: grab;
          .card {
            @apply flex flex-col items-start py-32px px-24px min-h-381px;
            background: #FFFFFF;
            border: 0.5px solid #DDD9D5;
            border-radius: 15px;
            .logo {
              @apply h-91px;
              img {
                @apply w-full ;
              }
            }
            h2 {
              @apply text-20px font-600;
              color: #101014;
            }
            p {
              @apply text-16px font-400 text-left mt-19px;
              line-height: 140%;
              color: #4D4E57;
            }
          }
        }
      }
      .next {
        @apply absolute right-0 top-1/2;
      }
      .prev {
        @apply absolute left-0 top-1/2;
      }
    }
  }
}
.swiper--bullet {
  @apply ;
  background: #e5e5e5;
  width: 100%;
  height: 3px;
  
  opacity: 0.5;
  position: relative;
}
.swiper--bullet--active {
  opacity: 1;
  background-color: #91b0c4;
}
.swiper-pagination {
  @apply flex flex-row items-center justify-center mt-70px;
}
</style>
