<script setup></script>

<template>
  <div class="layout-movies">
    <div class="layout-movies-header">
      <router-link to="/movies">
        <h1><span>Vue</span>Movies</h1>
      </router-link>
      <router-link to="/" class="all-projects" />
    </div>
    <div class="body">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.all-projects {
  color: #fff;
  background: url('https://e7.pngegg.com/pngimages/246/887/png-clipart-power-on-off-logo-computer-icons-shutdown-internet-computer-software-quit-miscellaneous-web-design.png')
    center;
  background-size: 160%;
  background-repeat: no-repeat;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  cursor: pointer;
  position: absolute;
  left: 10px;
}
.layout-movies {
  width: 100%;
  max-width: 100%;
  min-height: 100vh;
  margin: 0px;
  padding: 0px;
  // box-sizing: border-box;
  // outline: 1px solid red;
  background: #35495e;
  &::selection {
    background: #fff;
    color: green;
  }
  &-header {
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 10px 16px;
    width: 100%;
    background-color: #2c3d4e;
    box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.1);
    h1 {
      color: #fff;
      font-size: 28px;
      span {
        color: #42b883;
      }
    }
  }
  &-body {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  a {
    text-decoration: none;
  }
}
</style>
