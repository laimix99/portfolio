<script setup>
const links = [
  {title: 'Home', path: ''},
  {title: 'About', path: ''},
  {title: 'Service', path: ''},
  {title: 'Contact', path: ''},
]
</script>

<template>
  <div class="header">
    <div class="menu">
      <div class="logo">Uamesha Ramanay</div>
      <div class="links">
        <div class="link" v-for="link in links">{{ link.title }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  @apply flex flex-col items-center w-full;
  background: rgba(183, 76, 76, 0.42);
  .menu {
    @apply flex flex-row justify-between items-center w-full max-w-1110px px-10px py-20px;
    .logo {
      @apply text-48px text-black font-400 cursor-pointer;
      font-family: 'Pattaya', sans-serif;
    }
    .links {
      @apply flex flex-row;
      .link {
        @apply text-24px font-400 mr-30px text-white not-italic cursor-pointer;
        font-family: 'Poppins', sans-serif;
        &:hover {
          color: rgb(233, 231, 231);
        }
      }
    }
  }
}
</style>
