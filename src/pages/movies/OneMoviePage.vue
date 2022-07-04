<script setup>
import { ref, computed, reactive, onBeforeMount } from 'vue';
import env from '../../env.js';
import { useRoute } from 'vue-router';
const movie = ref({});
const route = useRoute();
onBeforeMount(() => {
  fetch(
    `https://omdbapi.com?apikey=${env.apikey}&i=${route.params.id}&plut=full`
  )
    .then((response) => response.json())
    .then((data) => {
      movie.value = data;
    });
});
</script>

<template>
  <div class="movie-detail p-16px text-left">
    <h2 class="text-28px font-600 mb-16px">{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <img :src="movie.Poster" alt="" class="featured-img block max-w-200px mb-16px" />
    <p class="text-18px">{{ movie.Plot }}</p>
  </div>
</template>

<style lang="scss" scoped>
.movie-detail {

  h2 {
    color: #fff;
  }
  .featured-img {

  }
  p {
    color: #fff;

  }
}
</style>
