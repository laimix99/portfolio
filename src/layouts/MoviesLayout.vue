<script setup></script>

<template>
  <div class="max-w-full m-0 w-full min-h-100vh p-0 layout-movies">
    <div class="flex w-full layout-movies-header justify-center items-center">
      <router-link to="/movies">
        <h1 class="py-5px text-28px"><span>Vue</span>Movies</h1>
      </router-link>
      <router-link to="/" class=" bg-no-repeat cursor-pointer h-40px top-120 left-10px w-50px all-projects "/>

    </div>
    <div class="flex flex-col body justify-start">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-projects {
    background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
    background-size: 100%;
    z-index: 555;
    position: fixed;
    // @media screen and (max-width: 991px) {
    //   display: none;
    // }
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
