<script setup>
import { onMounted, computed, ref } from "vue";
import KeyBenefits from '../components/commissioner/KeyBenefits.vue'
import Regulations from '../components/commissioner/Regulations.vue'
import FirstSection from '../components/commissioner/FirstSection.vue'
import Contacts from '../components/commissioner/Contacts.vue'
import Price from '../components/commissioner/Price.vue'
import Reviews from '../components/commissioner/Reviews.vue'
import Company from '../components/commissioner/Сompany.vue'
import Services from '../components/commissioner/Services.vue'
import Footer from '../components/commissioner/Footer.vue'
const price = ref()
const contacts = ref()
const company = ref()
const services = ref()
const links = ref([
  {title: 'цены', pos: null },
  {title: 'услуги', pos: null},
  {title: 'о компании', pos: null},
  {title: 'контакты', pos: null},
])
const menuLink = (pos) => {
  console.log("menuLink pos:", pos, window)
  window.scrollTo(0, pos)  
}
onMounted(() => {
  links.value[0].pos = price.value?.$el.offsetTop
  links.value[1].pos = services.value?.$el.offsetTop
  links.value[2].pos = company.value?.$el.offsetTop
  links.value[3].pos = contacts.value?.$el.offsetTop
  console.log("onMounted", price.value)
})
</script>

<template>
  <div class="commissioner-layout">
    <div class="header">
      <div class="menu">
        <div class="logo">ЦЕНТР УРЕГУЛИРОВАНИЯ УБЫТКОВ</div>
        <div class="links">
          <div v-for="link in links" @click="menuLink(link.pos)" class="link">
            {{ link.title }}
          </div>
        </div>
        <div class="phone">
          <a href="tel:89655325020">Тел: 8-965-532-50-20</a>
          <a href="tel:89655325020">Тел: 8-965-532-50-20</a>
        </div>
      </div>
    </div>
    <FirstSection @action="menuLink(links[3].pos)" />
    <div class="container" >
      <KeyBenefits/>
    </div>
    <Regulations/>
    <div class="container" >
      <Price ref="price" @action="menuLink(links[3].pos)" />
      <Services ref="services" @action="menuLink(links[3].pos)"/>
    </div>
    <Company ref="company" />
    <div class="container">
      <Reviews/>
    </div>
    <Contacts ref="contacts" />
    <Footer :menu="links" @menu-link="menuLink" />
  </div>
</template>

<style scoped lang="scss">
  .commissioner-layout {
    @apply h-full flex flex-col items-center w-full ;
    background: #FAFAFA;
    .header {
      @apply w-full flex flex-col items-center;
      background-color: #140E36;
      .menu {
        @apply flex items-center justify-between w-full max-w-1100px py-5px;
        .logo {
          @apply w-full max-w-100px text-left font-700;
          color: #F2F2F4;
        }
        .links {
          @apply flex;
          .link {
            @apply mr-40px text-16px uppercase cursor-pointer; 
            color: #F2F2F4;
            &:hover {
              color: rgba(242, 242, 244, 0.5);
            }
          }
        }
        .phone {
          @apply flex flex-col;
          a {
            @apply text-18px font-700 mb-10px;
            color: #F2F2F4;
            &:hover {
                color: rgba(242, 242, 244, 0.5);
            }
          }
        }
      }
    }
    .container {
      @apply flex flex-col items-center w-full max-w-1100px;
    } 
  }
  // .sticky {
  //   position: fixed;
  //   z-index: 99;
  //   /* background-color: red; */
  //   box-shadow: rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px;
  //   -webkit-box-shadow: rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px;
  //   -moz-box-shadow: rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px;
  //   /* box-shadow: 0px 20px 50px 0px rgba(0, 0, 0, 0.05); */
  //   -webkit-transition: all 0.3s ease-out 0s;
  //   -moz-transition: all 0.3s ease-out 0s;
  //   -ms-transition: all 0.3s ease-out 0s;
  //   -o-transition: all 0.3s ease-out 0s;
  //   transition: all 0.3s ease-out 0s;
  // }
</style>
