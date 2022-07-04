<script setup></script>

<template>
  <div class="layout-movies w-full max-w-full min-h-100vh m-0 p-0">
    <div class="layout-movies-header flex justify-center items-center w-full">
      <router-link to="/movies">
        <h1 class="text-28px py-5px"><span>Vue</span>Movies</h1>
      </router-link>
      <router-link to="/" class="all-projects w-50px h-50px cursor-pointer absolute left-10px" />
    </div>
    <div class="body flex flex-col justify-start">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-projects {
  color: #fff;
  background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png') center;
  background-size: 100%;
  background-repeat: no-repeat;
}
.layout-movies {
  background: #35495e;
  &::selection {
    background: #fff;
    color: green;
  }
  &-header {

    background-color: #2c3d4e;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    h1 {
      color: #fff;
      span {
        color: #42b883;
      }
    }
  }
  &-body {

  }
  a {
    // text-decoration: none;
  }
}
</style>
