<script setup>
import { ref, computed, reactive } from 'vue';
</script>

<template>
  <router-view />
  <div class="body">
    <div class="layout">
      <div class="layout-header">
        <div class="layout-header-menu">
          <span class="layout-header-menu-text">о сервисе</span>
          <span class="layout-header-menu-text">для клиенто</span>
          <span class="layout-header-menu-text">для бизнеса</span>
          <span class="layout-header-menu-text">контакты</span>
        </div>
        <div class="layout-header-contact">
          <a href="tel:88001234567" class="room">8 800 123 45 67</a>
          <div class="lang">eng</div>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="header"></div> -->
</template>

<style lang="scss" scoped>
.body {
  // background-color: #f4f7f9;
  width: 1280px;
  margin: 0 auto;
  // background-color: red;
  min-height: 100vh;
  .layout {
    // width: 1280px;
    // margin: 0 auto;
    &-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0px 32px;
      &-menu {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: start;

        &-text {
          // color: red;
          padding: 24px 0px;
          position: relative;
          margin-right: 32px;
          font-size: 20px;
          line-height: 24px;
          color: #152f4e;
          opacity: 0.3;
          cursor: pointer;
          &:hover {
            // margin-top: -4px;
            color: #152f4e;
            opacity: 1;
            // border-top: 4px solid #152f4e;
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
      &-contact {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        .room {
          text-decoration: none;
          width: 120px;
          // margin-top: 24px;
          font-style: normal;
          font-weight: 700;
          color: #152f4e;
        }
        .lang {
          font-style: normal;
          font-weight: 700;
          font-size: 16px;
          // line-height: 20px;
          color: #152f4e;
          margin-left: 32px;
        }
      }
    }
  }
}
</style>
