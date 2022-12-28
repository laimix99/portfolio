<script setup>

import Footer from '../components/deli/Footer.vue'



</script>

<template>
  
<div class="layout">
  <router-link to="/" class=" bg-no-repeat cursor-pointer h-40px top-90 left-10px w-50px all-projects "/>
  <div class="flex m-auto max-w-1280px py-18px px-32px layout-header justify-between items-center">
    <div class="flex flex-row w-full layout-header-menu justify-start">
      <router-link class="link no-underline" to="/deli/services">
        <span class="cursor-pointer mr-32px opacity-30 py-24px text-20px leading-24px layout-header-menu-text relative">о сервисе</span>
      </router-link> 
      <router-link class="link" to="/deli">
        <span class="cursor-pointer mr-32px opacity-30 py-24px text-20px leading-24px layout-header-menu-text relative">для клиента</span>
      </router-link>
    </div>
    <div class="flex flex-row layout-header-contact justify-between">
      <a href="tel:88001234567" class="font-700 w-120px room no-underline not-italic">8 800 123 45 67</a>
      <div class="font-700 ml-32px text-16px lang not-italic">eng</div>
    </div>
  </div>
  <div class="m-auto min-h w-full max-w-1280px body 100vh">
    <router-view />
    <Footer></Footer>
  </div>
</div>

</template>

<style lang="scss" scoped>
.all-projects {
    background: url('https://thypix.com/wp-content/uploads/blue-arrow-79.png')center no-repeat;
    background-size: 100%;
    z-index: 555;
    position: fixed;
    // @media screen and (max-width: 991px) {
    //   display: none;
    // }
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
