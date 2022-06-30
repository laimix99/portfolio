<template>
<div class="flex flex-row w-full content-center">
  <div class="flex flex-col">
    <router-link to="/todo">
      <span class=" link text-green-900 cursor-pointer hover:opacity-50 text-20px m-20px w-full text-left">Version 1</span>
    </router-link>
    <span class="text-blue-500 cursor-pointer hover:opacity-50 text-20px m-20px w-full text-left">Version 2</span>
  </div>
  <div class="m-auto">
    <!-- <h1 class="br h-220px w-500px" >

    </h1> -->
    <router-view/>
  </div>
</div>
  
</template>