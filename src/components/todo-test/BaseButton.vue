<template>
  <button class="bg-hex-26a59a py-1 px-4">
    <span class="text-white">
      <slot/>
    </span>
  </button>
</template>

<style scoped>
button {
  box-shadow: 0 2px 2px #00000024, 0 3px 1px -2px #0000001f, 0 1px 5px #0003;
}
</style>
