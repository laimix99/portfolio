<script setup>
import { ref, computed, reactive } from 'vue';
import env from '../../env.js';
const search = ref('superman');
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
          class="faetured-img block w-full h-300px z-0 relative object-cover"
        />
        <div class="detail absolute left-0 right-0 bottom-0 z-1 p-16px text-left">
          <h3 class="mb-16px">Naruto</h3>
          <p>
            Naruto Uzumaki, a mischievous adolescent ninja, struggles as he
            searches for rocognition and dreams of becoming the Hokage, the
            village's leader and strongest ninja.
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="searchMovies()" class="search-box flex flex-col justify-center relative items-center py-16px px-32px">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>
    <div class="movie-list flex justify-start items-start flex-wrap px-8px h-full">
      <div class="movie w-full p-8px" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movies/' + movie.imdbID" class="movie-link flex flex-col h-full">
          <div class="product-image block relative">
            <img class="block w-full h-275px object-cover" :src="movie.Poster" alt="" />
            <div class="type absolute py-8px px-16px top-220px left-0 capitalize">{{ movie.Type }}</div>
            <div class="detail flex flex-col justify-start min-h-75px py-16px px-8px text-left">
              <p class="year text-14px m-0">{{ movie.Year }}</p>
              <h3 class="font-600 text-16px mt-5px">{{ movie.Title }}</h3>
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
