<script setup>
import MySvg from './MySvg.vue'
import ButtonMy from './ButtonMy.vue'

const items = [
  {img: '/images/geecko/ninth-section/python.png', title: 'Python'},
  {img: '/images/geecko/ninth-section/ch.png', title: 'C#'},
  {img: '/images/geecko/ninth-section/js.png', title: 'JavaScript'},
  {img: '/images/geecko/ninth-section/go.png', title: 'Goland'},
  {img: '/images/geecko/ninth-section/c.png', title: 'C'},
  {img: '/images/geecko/ninth-section/c++.png', title: 'C++'},
  {img: '/images/geecko/ninth-section/ts.png', title: 'TypeScript'},
  {img: '/images/geecko/ninth-section/php.png', title: 'PHP'},
  {img: '/images/geecko/ninth-section/ruby.png', title: 'Ruby'},
  {img: '/images/geecko/ninth-section/scala.png', title: 'Scala'},
  {img: '/images/geecko/ninth-section/swift.png', title: 'Swift'},
  {img: '/images/geecko/ninth-section/java.png', title: 'Java'},
  {img: '/images/geecko/ninth-section/kotlin.png', title: 'Kotlin'},
  {img: '/images/geecko/ninth-section/dart.png', title: 'Dart'},
  // {img: '/images/geecko/ninth-section/obj.png', title: 'Objective-c'},
]
</script>

<template>
  <div class="ninth-section">
    <div class="container">
      <h1><span>Pick up skills</span> you needed</h1>
      <div class="search">
        <!-- <input type="text" placeholder="Type in skills you looking for"> -->
        <!-- <MySvg
          name="search"
          class="icon"
        /> -->
      </div>
      <div class="items">
        <div class="item" v-for="item in items">
          <img :src="item.img" alt="">
          <h2>{{ item.title }}</h2>
        </div>
      </div>
      <ButtonMy
        icon="coin"
        text_color="#000000"
        color="#FFD91D"
        class="mt-32px"
      >
        Hire Developers
      </ButtonMy>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ninth-section {
  @apply flex flex-col w-full py-100px items-center;
  background: linear-gradient(180deg, rgba(221, 217, 213, 0) 0%, rgba(221, 217, 213, 0.5) 100%);
  @media screen and (max-width: 991px) {
    @apply mt-10px py-50px;
  }
  .container {
    @apply flex flex-col w-full max-w-1100px items-center;
    h1 {
      @apply font-400 text-42px;
      // font-family: 'Proxima Nova';
      color: #231F20;
      @media screen and (max-width: 767px) {
        @apply text-left px-20px text-42px;
      }
      span {
        @apply font-600;
      }
    }
    .search {
      @apply w-full relative;
      input {
      @apply h-48px mt-32px w-full pl-49px ;
      background: #fff;
      color: #B1BBC8;
      border: 1px solid #E2E6EB;
      border-radius: 9px;
    }
    .icon {
      @apply top-48px left-20px absolute;
    }
    }
    .items {
      @apply flex flex-row flex-wrap w-full items-center;
      .item {
        @apply flex flex-row h-62px mx-12px mt-24px py-16px px-24px items-center ;
        width: calc(20% - 24px);
        background: #FFFFFF;
        box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.16);
        border-radius: 5px;
        @media screen and (max-width: 991px) {
          @apply;
          width: calc(50% - 24px);
        }
        img {
          @apply mr-16px;
          @media screen and (max-width: 767px) {
            @apply w-20px;
          }
        }
        h2 {
          @apply font-400 text-20px;
          color: #231F20;
          @media screen and (max-width: 767px) {
            @apply text-14px;
          }
        }
      }
    }
  }
}
</style>
