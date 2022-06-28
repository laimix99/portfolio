<script setup>

import Footer from '../components/deli/Footer.vue'



</script>

<template>
  
<div class="layout">
  <div class="layout-header">
    <div class="layout-header-menu">
      <router-link class="link" to="/services">
        <span class="layout-header-menu-text">о сервисе</span>
      </router-link> 
      <router-link class="link" to="/deli">
        <span class="layout-header-menu-text">для клиента</span>
      </router-link>
    </div>
    <div class="layout-header-contact">
      <a href="tel:88001234567" class="room">8 800 123 45 67</a>
      <div class="lang">eng</div>
    </div>
  </div>
  <div class="body">
    <router-view />
    <Footer></Footer>
  </div>
</div>

</template>

<style lang="scss" scoped>

.layout {
  background: #F2F5F8;

  .body {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    min-height: 100vh;
  }

  &-header {
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 32px;
    &-menu {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: start;

      .link {
        text-decoration: none;
        .layout-header-menu-text {
          padding: 24px 0px;
          position: relative;
          margin-right: 32px;
          font-size: 20px;
          line-height: 24px;
          color: #152f4e;
          opacity: 0.3;
          cursor: pointer;
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
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      .room {
        text-decoration: none;
        width: 120px;
        font-style: normal;
        font-weight: 700;
        color: #152f4e;
      }
      .lang {
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        color: #152f4e;
        margin-left: 32px;
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
