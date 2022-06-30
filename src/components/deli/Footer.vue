<script setup>
import { ref, computed, reactive } from 'vue';
const services  = ref([
  {name: 'договор'},
  {name: 'политика конфиденциальности'},
  {name: 'пользовательское соглашение'},
  {name: 'политика обработки персональных данных'},
])
const info = ref([
  {name: 'клиентская служба:'},
  {name: 'Москва и Московская область: 8 495 664-87-87'},
  {name: 'Санкт-Петербург: 8 812 448-87-87'},
  {name: 'Регионы: 8 800 600-87-87'},
  {name: 'info@delimobil.ru'},
])
</script>


<template>
<div class="DeliFooter ">
  <div class="header">
    <div class="services" >
      <a href="" v-for="service in services">{{ service.name }}</a>
      
    </div>
    <div class="info" >
      <span v-for="i in info">{{i.name}}</span>
    </div>
    <div class="communities">
      <a href=""><img src="/images/apple.svg" alt=""></a>
      <a href=""><img src="/images/google.svg" alt=""></a>
      <div class="messager">
        <a href=""><img class="cub" src="/images/icons-messanger1.svg" alt=""></a>
        <a href=""><img class="cub" src="/images/icons-messanger2.svg" alt=""></a>
        <a href=""><img class="cub" src="/images/icons-messanger3.svg" alt=""></a>
        <a href=""><img class="cub" src="/images/icons-messanger4.svg" alt=""></a>
      </div>
    </div>
  </div>
  <div class="contact">
    <div class="band"></div>
    <img class="chat" src="/images/chat.png" alt="">
  </div>
  <div class="address">ООО "Делисервис" ОГРН 1177746569120 125009, г. Москва, ул. Тверская, д. 6, стр. 5. Помощь на дороге — круглосуточно.</div>
</div>
</template>

<style lang="scss" scoped>
.DeliFooter {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background: #FFFFFF;
  border-radius: 16px;

  .header {
    padding: 32px 32px 0px 32px;
    max-width: 1280px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    
    .services {
      display: flex;
      flex-direction: column;

      a {
        margin: 0;
        text-decoration: none;
        padding-bottom: 24px;
        text-align: left;
        color: #9DA8B5;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
      }
    }
    .info {
      display: flex;
      flex-direction: column;
      
      span {
        padding-bottom: 13px;
        text-align: left;
        color: #9DA8B5;
        font-style: normal;
        font-weight: 700;
        line-height: 20px;
      }
    }
    .communities {
      display: flex;
      flex-direction: column;
      img {
        // width: 100%;
        // max-width: 2500px;
        padding-bottom: 8px;
      }
      .messager {
        display: flex;
        justify-content: space-between;
        .cub {
          width: 15px;
          height: 15px;
          padding: 6px;
          background: #152F4E;
          border-radius: 8px;
          
        }
      }
    }
  }
  .contact {
    padding: 0px 32px 0px 32px ;
    display: flex;
    align-items: center;

    .band {
      height: 1px;
      width: 100%;
      background: #D5DCE6;
      z-index: 5;
    }
    .chat {
      padding: 12px;
      background: #D52B1E;
      box-shadow: 4px 8px 16px rgba(216, 47, 34, 0.5);
      border-radius: 16px;
      z-index: 10;
    }
  }
  .address {
    color: #9DA8B5;
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 16px;

  }
}
@media ( max-width: 991px ) {
  .DeliFooter {

    .header {

      .services {
        a {
          font-size: 12px;
          padding-bottom: 18px;
        }
      }
      .info {
        span {
          font-size: 12px;
          padding-bottom: 8px;
        }
      }
      .communities {
         img {
            width: 80%;
         }
      }
      .messager {
        justify-content: center !important;
        .cub {
          margin-right: 2px;
        }
      }
    }
  }
}
@media ( max-width: 768px ) {
  .header {
    padding: 10px 32px 0px 32px !important;
    .services {
      display: none !important;
    }
    .info {
      display: none !important;
    }
    .communities {
      flex-direction: row !important;
    }
  }
  .contact {
    .chat {
      padding: 5px !important;
    }
  }
  .address {
    font-size: 8px;
    margin-top: 4px;
    text-align: left;
  }
}
</style>