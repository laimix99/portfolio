<script setup>
const links = [
  { path: '/', name: 'My app' },
  { path: '/todo', name: 'TODO' },
  // { path: '/spinner', name: 'Spinner' },
  { path: '/calculator', name: 'Calculator' },
  { path: '/stock', name: 'Stock' },
  { path: '/movies', name: 'Movies' },
  { path: '/login', name: 'Login' },
  { path: '/deli', name: 'Deli' },
];
</script>

<template>
  <div
    class="flex flex-col w-full relative bg-red-900"
    sm="bg-green-100"
    md="bg-green-200"
    lg="bg-green-300"
  >
    <div class="flex flex-row justify-center items-center flex-wrap py-20px w-full">
      <router-link
        v-for="(link, linkIndex) in links"
        :key="linkIndex"
        class="p-10px no-underline hover:opacity-50"
        :to="link.path"
      >
        <span>{{ link.name }}</span>
      </router-link>
    </div>
    <div class="flex justify-center w-full">
      <router-view/>
    </div>
  </div>
</template>
