<script setup>
import KeyBenefits from '../components/commissioner/KeyBenefits.vue'
</script>

<template>
  <div class="commissioner-layout">
    <div class="header">
      <div class="menu">
        <div class="logo">ЦЕНТР УРЕГУЛИРОВАНИЯ УБЫТКОВ</div>
        <div class="links">
          <div class="link">цены</div>
          <div class="link">услуги</div>
          <div class="link">о компании</div>
          <div class="link">контакты</div>
          <div class="link">статьи</div>
        </div>
        <a href="tel:89655325020">8-965-532-50-20</a>
      </div>
    </div>
    <div class="container">
      <KeyBenefits/>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .commissioner-layout {
    @apply h-100vh flex flex-col items-center w-full ;
    background: #FAFAFA;
    .header {
      @apply w-full flex flex-col items-center;
      background-color: #CE253D;
      .menu {
        @apply flex items-center justify-between w-full max-w-1100px py-5px;
        .logo {
          @apply w-full max-w-100px text-left font-700;
          color: #F2F2F4;
        }
        .links {
          @apply flex;
          .link {
            @apply mr-40px text-16px uppercase; 
            color: #F2F2F4;
          }
        }
        a {
          @apply text-20px font-700;
          color: #F2F2F4;
        }
      }
    }
    .container {
      @apply flex flex-col items-center w-full max-w-1100px;
    } 
  }
</style>
