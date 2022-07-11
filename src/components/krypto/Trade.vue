<script setup>
  const items = [
    {number: '01', description: 'Create an account'},
    {number: '02', description: 'Download platfrom'},
    {number: '03', description: 'Select crypto'},
    {number: '04', description: 'Start trading'},
  ];
</script>

<template>
  <div class="trade flex flex-col justify-start items-center pt-90px pb-27px">
    <h1 class="text-64px text-white leading-76px font-700 not-italic">How to Trade With Krypto</h1>
    <span class="text-24px leading-28px text-white opacity-60 font-400 not-italic mt-20px">Tincidunt id nibh orci nibh just nulla elementum, sed vel.</span>
    <div class="content flex flex-row mt-80px items-center w-full max-w-1110px ">
      <img class="w-1/2" src="/images/krypto/trade/phone.png" alt="">
      <div class="list w-full pl-120px flex flex-col ">
        <p class="text-36px leading-43px font-700 not-italic text-left">Steps to trade</p>
        <div class="items max-w-285px ">
          <div class="item flex flex-row rounded-80px py-12px pl-12px justify-start items-center mt-24px" v-for="item in items">
            <div class="number text-16px leading-19px not-italic font-700 p-6px rounded-20px mr-16px">{{ item.number }}</div>
            <div class="text text-18px leading-21px font-500">{{ item.description }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
  p {
    color: #EF443B;
  }
  .items {
    @apply flex flex-col;
  }
  .item {
    box-shadow: 0px 0px 4px rgba(239, 68, 59, 0.4);

    &:hover {
      box-shadow: 0px 0px 40px rgba(239, 68, 59, 0.4);
    }
    .number {
      background-color: #EF443B;
    }
    .text {
      color: #EF443B;

    }
  }
  @media screen and (max-width: 991px) {
    .content {
      padding: 0px 20px;
    }
  }
  @media screen and (max-width: 767px) {
    h1 {
      font-size: 40px;
    }
    span {
      font-size: 18px;
      max-width: 400px;
    }
    .content {
      .list {
        padding-left: 50px;
        p {
          font-size: 25px;
        }
        .items {
          .item {
            .number {
              font-size: 10px;
              padding: 2px 6px;
            }
            .text {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 479px) {
    .trade {
      padding-top: 20px;
      width: 100%;
      h1 {
        line-height: 40px;
      }
      .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 20px;
        img {
          display: none;
        }
        .list {

          align-items: center;
          padding: 0;
        }
      }
    .item {
      width: 200px;

    }
    }
    
  }
</style>