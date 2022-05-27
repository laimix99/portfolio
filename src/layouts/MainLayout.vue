<script setup>
import { ref, computed, reactive } from 'vue';
const links = ref([
  { path: '/', name: 'My app' },
  { path: '/todo', name: 'TODO' },
  { path: '/spinner', name: 'Spinner' },
  { path: '/calculator', name: 'Calculator' },
  { path: '/stock', name: 'Stock' },
  { path: '/movies', name: 'Movies' },
  { path: '/login', name: 'Login' },
  { path: '/deli', name: 'Deli' },
]);
</script>
<template>
  <div class="layout">
    <div class="layout-header">
      <router-link
        v-for="(link, linkIndex) in links"
        :key="linkIndex"
        class="link"
        :to="link.path"
      >
        <span>{{ link.name }}</span>
      </router-link>
    </div>

    <!-- <router-link class="link" to="/todo">TODO</router-link>
      <router-link class="link" to="/spinner">Spinner</router-link>
      <router-link class="link" to="/calculator">Calculator</router-link> -->
    <div class="layout-body">
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.layout {
  position: relative;
  max-width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  &-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 0;
    width: 100%;
    .link {
      text-decoration: none;
      padding: 10px;
      color: black;
      opacity: 1;
      &:hover {
        opacity: 0.5;
      }
    }
  }
  &-body {
    width: 100vw;
  }
}
</style>
