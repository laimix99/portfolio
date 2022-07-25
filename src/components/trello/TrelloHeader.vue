<script setup>
import { onMounted, ref } from "vue";
const props = defineProps({
  menuItems: {
    type: Array,
    default: () => [
      { label: 'Features', link: '' },
      { label: 'Solutions', link: '' },
      { label: 'Plans', link: '' },
      { label: 'Pricing', link: '' },
      { label: 'Resources', link: '' },
    ]
  }, 
  activeLink: {
    type: String,
    default: '',
  }
});

const isSticky = ref(true);
const isTogglerActive = ref(false);

const togglToggler = () => {
  isTogglerActive.value = !isTogglerActive.value;
  console.log('togle', isTogglerActive.value)
};

const headerNavbar = ref(null);
const onScroll = () => {
  console.log('scroll')
  if (headerNavbar.value) {
    const sticky = headerNavbar.value.offsetTop;
    isSticky.value = window.scrollY > sticky;
  }
};
onMounted(() => {
  onScroll();
  window.document.addEventListener("scroll", onScroll, { passive: true });
  return () => window.document.removeEventListener("scroll", onScroll);
});

</script>

<template>
  <header class="header">
    <div class="navbar-area" ref="headerNavbar" :class="{ sticky: isSticky }">
      <div class="container">
        <div class="menu">
          <h1>Trello</h1>
          <div class="links">
            <div class="link" v-for="item in menuItems">{{ item.label }}</div>
          </div>
        </div>
        <div class="registration bg">
          <a href="">
            <span>Log in</span>
          </a>
          <a href="">
            <button>Get Trello for free</button>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped >
.container {
  @apply flex justify-between w-full max-w-2000px pl-10px pr-0px;
}
.menu {
  @apply flex flex-row items-center;
}
h1 {
  color: rgb(0, 82, 204);
  cursor: pointer;
  font-size: 40px ;
  margin-right: 40px;
}
.links {
  display: flex;
}
.link {
  margin-right: 30px;
  color: black;
}
.link:hover {
  color: rgb(0, 82, 204);
  cursor: pointer;
}
.registration {
  @apply flex items-center;
}
span {
  @apply text-20px mr-15px;
  color: rgb(23, 43, 77);
}
button {
  @apply text-white h-full py-20px px-20px text-1.25rem;
  background-color: #0065ff;
}
button:hover {
  background-color: rgb(5, 71, 172);
}
</style>
