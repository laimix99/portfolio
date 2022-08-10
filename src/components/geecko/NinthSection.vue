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
  @apply flex flex-col items-center w-full py-100px;
  background: linear-gradient(180deg, rgba(221, 217, 213, 0) 0%, rgba(221, 217, 213, 0.5) 100%);
  @media screen and (max-width: 991px) {
    @apply mt-200px;
  }
  .container {
    @apply flex flex-col items-center w-full max-w-1100px;
    h1 {
      @apply text-42px font-400;
      // font-family: 'Proxima Nova';
      color: #231F20;
      @media screen and (max-width: 767px) {
        @apply text-42px text-left px-20px;
      }
      span {
        @apply font-600;
      }
    }
    .search {
      @apply w-full relative;
      input {
      @apply w-full h-48px mt-32px pl-49px ;
      background: #fff;
      color: #B1BBC8;
      border: 1px solid #E2E6EB;
      border-radius: 9px;
    }
    .icon {
      @apply absolute top-48px left-20px;
    }
    }
    .items {
      @apply flex flex-row flex-wrap items-center w-full;
      .item {
        @apply mx-12px mt-24px flex flex-row items-center py-16px px-24px h-62px ;
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
          @apply text-20px font-400;
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
