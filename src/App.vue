<script setup></script>

<template>
  <router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Splash&display=swap');
/* @import url('https://fonts.googleapis.com/css2?family=Heebo&display=swap'); */
/* @import url('https://fonts.googleapis.com/css2?family=Vampiro+One&display=swap'); */
@import url('https://fonts.googleapis.com/css2?family=Nosifer&display=swap');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* font-family: 'Splash'; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0px;
  margin: 0px;
}
body {
  padding: 0px;
  margin: 0px;
}
.br {
  outline: 1px solid red;
}
.bg {
  outline: 1px solid green;
}
@font-face {
 font-family: "Euclid";
 src: url("/fonts/Euclid-Circular-Regular.ttf") format("truetype");
}
</style>
