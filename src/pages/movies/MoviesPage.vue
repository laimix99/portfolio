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
    <div class="feature-card">
      <router-link to="/movies/tt">
        <img
          src="https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
          alt="Naruto Poster"
          class="faetured-img"
        />
        <div class="detail">
          <h3>Naruto</h3>
          <p>
            Naruto Uzumaki, a mischievous adolescent ninja, struggles as he
            searches for rocognition and dreams of becoming the Hokage, the
            village's leader and strongest ninja.
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="searchMovies()" class="search-box">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>
    <div class="movie-list">
      <div class="movie" v-for="movie in movies" :key="movie.imdbID">
        <router-link :to="'/movies/' + movie.imdbID" class="movie-link">
          <div class="product-image">
            <img :src="movie.Poster" alt="" />
            <div class="type">{{ movie.Type }}</div>
            <div class="detail">
              <p class="year">{{ movie.Year }}</p>
              <h3>{{ movie.Title }}</h3>
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
    position: relative;

    .faetured-img {
      display: block;
      width: 100%;
      height: 300px;
      object-fit: cover;
      position: relative;
      z-index: 0;
    }
    .detail {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.6);
      padding: 16px;
      text-align: left;

      h3 {
        color: #fff;
        margin-bottom: 16px;
      }
      p {
        color: #fff;
      }
    }
  }
  .search-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    align-items: center;
    padding: 16px 32px;
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
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: 0 8px;
    height: 100%;

    .movie {
      max-width: calc(50% - 16px);
      width: 100%;
      padding: 8px;

      .movie-link {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        height: 100%;

        .product-image {
          position: relative;
          display: block;

          img {
            display: block;
            width: 100%;
            height: 275px;
            object-fit: cover;
          }
          .type {
            position: absolute;
            padding: 8px 16px;
            background-color: #42b883;
            color: #fff;
            top: 220px;
            left: 0;
            text-transform: capitalize;
          }
        }
        .detail {
          min-height: 75px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          background-color: #496583;
          padding: 16px 8px;
          border-radius: 0px 0px 8px 8px;
          text-align: left;
          .year {
            color: #aaa;
            font-size: 14px;
            margin: 0px;
          }
          h3 {
            color: #fff;
            font-weight: 600;
            font-size: 16px;
            margin: 0px;
          }
        }
      }
    }
  }
}
</style>
