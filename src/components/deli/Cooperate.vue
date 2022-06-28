<template>
  <div class="page">
    <h1>с нами сотрудничают</h1>
    <p>мойки, шиномонтаж, выездная заправка, техническое обслуживание, онлайн оформление ОСАГО и КАСКО</p>
    <div class="icons">
      <img src="/images/беру.png" alt="" class="icon">
      <img src="/images/аптека.png" alt="" class="icon">
      <img src="/images/leroy.png" alt="" class="icon">
      <img src="/images/ozon.png" alt="" class="icon">
    </div>
    <button>подробнее о сервисе для бизнеса </button>
  </div>
</template>

<style lang="scss" scoped>
.page {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #F2F5F8;

  h1 {
    color: #152F4E;
    margin: 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 48px;
    
  }
  p {
    margin-top: 40px;
    color: #152F4E;
    width: 100%;
    max-width: 630px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
  }
  .icons {
    
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 552px;
    margin-top: 48px;
    .icon {
      object-fit: contain;
      width: 120px;
    }
  }
  button {
    margin-top: 48px;
    background: #6CDDBB;
    border-radius: 8px;
    color: #152F4E;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    padding: 20px 32px;
    border: none;
    cursor: pointer;
    &:active {
      opacity: 0.5;
    }
  }
}

@media ( max-width: 768px ) {
  .page {
    h1 {
      padding: 0px 50px;
      font-size: 40px;
      text-align: left;
    }
    p {
      font-size: 12px;
      max-width: 500px;
    }
    .icons {
      flex-direction: column;
      // justify-content: center;
      align-items: center;
      margin-top: 20px;

      img {
        margin-top: 20px;
      }
    }
    button {
      font-size: 10px;
    }
  }
}
</style>