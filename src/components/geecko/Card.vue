<script setup>
const items = [
  {img: '/images/geecko/third-section/cup.png', title: 'won ', description: '3 games '},
  {img: '/images/geecko/third-section/check-mark.png', title: 'solved ', description: '177 tasks'},
  {img: '/images/geecko/third-section/hand.png', title: 'hired within', description: '4 days'},
]
</script>

<template>
  <div class="card">
    <div class="items">
      <div class="item" v-for="item in items">
        <img :src="item.img" alt="">
        <div class="statistics">
          <h1>{{ item.title }}</h1>
          <span>{{ item.description }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card {
  @apply flex flex-col items-center w-full max-w-144px absolute bottom-120px left-240px z-22;
  .items {
    @apply flex flex-col items-center w-full;
    .item {
      @apply flex flex-row items-center w-full mt-4px pt-8px pb-10px pl-13px;
      background: rgba(69, 90, 100, 0.8);
      border: 0.5px solid #455A64;
      border-radius: 11.46px;
      img {
        @apply mr-5px;
      }
      .statistics {
        @apply flex flex-col items-start;
              h1 {
        @apply text-12px text-left leading-12px;
        color: #FFFFFF;
      }
      span {
        @apply text-16px leading-16px text-left mt-1px;
        color: #FFFFFF;
      }
      }
    }
  }
}
</style>
