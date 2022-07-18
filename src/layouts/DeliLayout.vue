<script setup>

import Footer from '../components/deli/Footer.vue'



</script>

<template>
  
<div class="layout">
  <router-link to="/" class="all-projects bg-no-repeat w-40px h-40px cursor-pointer top-10px left-10px absolute"/>
  <div class="layout-header max-w-1280px m-auto flex justify-between items-center py-18px px-32px">
    <div class="layout-header-menu w-full flex flex-row justify-start">
      <router-link class="link no-underline" to="/deli/services">
        <span class="layout-header-menu-text py-24px relative mr-32px leading-24px opacity-30 cursor-pointer text-20px">о сервисе</span>
      </router-link> 
      <router-link class="link" to="/deli">
        <span class="layout-header-menu-text py-24px relative mr-32px leading-24px opacity-30 cursor-pointer text-20px">для клиента</span>
      </router-link>
    </div>
    <div class="layout-header-contact flex flex-row justify-between">
      <a href="tel:88001234567" class="room no-underline w-120px font-700 not-italic">8 800 123 45 67</a>
      <div class="lang font-700 not-italic text-16px ml-32px">eng</div>
    </div>
  </div>
  <div class="body w-full max-w-1280px m-auto min-h 100vh">
    <router-view />
    <Footer></Footer>
  </div>
</div>

</template>

<style lang="scss" scoped>
.all-projects {
  background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
  background-size: 100%;
  }

.layout {
  background: #F2F5F8;

  .body {

  }

  &-header {

    &-menu {

      .link {

        .layout-header-menu-text {
          color: #152f4e;
          &:hover {
            color: #152f4e;
            opacity: 1;
            &:after {
              height: 10px;
            }
          }
          &:after {
            content: '';
            position: absolute;
            height: 0px;
            width: 100%;
            top: 0;
            left: 0;
            background: #152f4e;
          }
        }
      }
    }
    &-contact {


      .room {
        color: #152f4e;
      }
      .lang {
        color: #152f4e;
      }
    }
  }
}

@media ( max-width: 768px ) {
  .layout {

    &-header {
      align-items: flex-start !important;
      padding: 18px 12px 0px 12px !important;
      &-menu {
        
        .link {

          .layout-header-menu-text {
            font-size: 15px;
            // line-height: 1;
            &:after {
              content: '';
              position: absolute;
              height: 0px;
              // width: 350%;
              top: 0;
              left: 0;
              background: #152f4e;
            }
          }
        }
      }
      &-contact {
        margin-top: 5px;
        a {
          font-size: 15px;
        }
        .lang {
          margin-left: 0px;
          font-size: 15px;

        }
      }
    }
  }
}
</style>
