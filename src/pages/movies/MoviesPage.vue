<script setup>
import { ref, computed, reactive } from 'vue';
import env from '../../env.js';
const search = ref('');
const movies = ref([]);
const searchMovies = () => {
  if (search.value != '') {
    fetch(`https://omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
      .then((data) => data.json())
      .then((data) => {
        movies.value = data.Search;
        search.value = '';
      });
  }
};
</script>

<template>
  <div class="home">
    <div class="feature-card relative">
      <router-link to="/movies/tt">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
          alt="Naruto Poster"
          class="object-cover h-300px w-full z-0 faetured-img block relative"
        />
        <div class="text-left p-16px right-0 bottom-0 left-0 z-1 detail absolute">
          <h3 class="mb-16px">Naruto</h3>
          <p>
            Naruto Uzumaki, a mischievous adolescent ninja, struggles as he
            searches for rocognition and dreams of becoming the Hokage, the
            village's leader and strongest ninja.
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="searchMovies()" class="flex flex-col py-16px px-32px search-box justify-center relative items-center">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>
    <div class="flex flex-wrap h-full px-8px movie-list justify-start items-start">
      <div class="w-full p-8px movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movies/' + movie.imdbID" class="flex flex-col h-full movie-link">
          <div class="product-image block relative">
            <img class="object-cover h-275px w-full block" :src="movie.Poster" alt="" />
            <div class="py-8px px-16px top-220px left-0 type absolute capitalize">{{ movie.Type }}</div>
            <div class="flex flex-col text-left min-h-75px py-16px px-8px detail justify-start">
              <p class="m-0 text-14px year">{{ movie.Year }}</p>
              <h3 class="font-600 mt-5px text-16px">{{ movie.Title }}</h3>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.home {
  .feature-card {

    .detail {
      background-color: rgba(0, 0, 0, 0.6);

      h3 {
        color: #fff;

      }
      p {
        color: #fff;
      }
    }
  }
  .search-box {
    input {
      display: block;
      appearance: none;
      border: none;
      outline: none;
      background: none;

      &[type='text'] {
        max-width: 100%;
        width: 100%;
        color: #fff;
        background-color: #496583;
        font-size: 20px;
        border-radius: 8px;
        margin-bottom: 16px;
        transition: 0.4s;
        text-align: left;
        padding: 10px 16px;
        &::placeholder {
          color: #f3f3f3;
        }
        // когда находишься в input
        &:focus {
          box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
        }
      }
      &[type='submit'] {
        width: 100%;
        max-width: 300px;
        background-color: #42b883;
        padding: 16px;
        color: #fff;
        font-size: 20px;
        border-radius: 8px;
        text-transform: uppercase;
        transition: 0.4s;
        &:active {
          background-color: #3b8070;
        }
      }
    }
  }
  .movie-list {

    .movie {
      max-width: calc(50% - 16px);

      .movie-link {

        .product-image {


          .type {
            background-color: #42b883;
            color: #fff;
          }
        }
        .detail {
          border-radius: 0px 0px 8px 8px;
          background-color: #496583;
          .year {
            color: #aaa;
          }
          h3 {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
