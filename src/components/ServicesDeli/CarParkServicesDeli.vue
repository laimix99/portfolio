<script setup>
import { ref, computed, reactive } from 'vue';

</script>

<template>
  <div class="CarParkServicesDeli">
    <div class="header">
      <div class="title">A если в вашем бизнесе есть собственный автопарк...</div>
      <div class="subtitle">то задумывались ли вы о том, насколько сильно вас отвлекает обслуживание машин от основных задач? Пришло время задуматься и передать эту функцию нам, пока вы занимаетесь тем, что по-настоящему важно для ведения и развития вашего бизнеса!</div>
      <a class="link" href="">
        <button>подробнее о сервисе для бизнеса </button>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.CarParkServicesDeli {
  background: url('images/bg-car.png')center center/cover no-repeat;
  width: 100%;
  max-width: 1008px;
  max-height: 519px;
  margin-top: 80px;
  
  .header {
    padding: 80px 0px 80px 104px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .title {
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 30px;
      width: 100%;
      max-width: 408px;
      text-align: left;
    }
    .subtitle {
      width: 100%;
      max-width: 408px;
      color: #FFFFFF;
      text-align: left;
      padding-top: 20px;
      line-height: 30px;
    }
    .link {
      padding-top: 71px;

      button {
        background: #6CDDBB;
        border-radius: 8px;
        padding: 22px 32px;
        border: none;
        color: #152F4E;
        cursor: pointer;

      }
    }
  }
}
.cubs {
  display: flex;
  width: 100%;
  
  .cub {
    width: 200px;
    margin-right: 10px;
    height: 200px;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .title {
      color: black;
    }
    .text {
      color: purple;
    }
  }
}

@media ( max-width: 768px )  {
  .header {
    padding: 20px !important;
    align-items: center;

    .title {
      font-size: 15px !important;
    }
    .subtitle  {
      font-size: 11px !important;
    }
    .link {

      button {
        // display: block;
        font-size: 11px;
        padding: 10px 12px !important;
      }
    }
  }
}

</style>