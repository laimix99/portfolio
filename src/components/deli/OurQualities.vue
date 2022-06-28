<script setup>
    import { ref, computed, reactive } from 'vue';
  const qualities = ref([
   { title: 'ответственность', text: 'застрахуем автомобиль на 10.000.000 ₽ пока он у нас'  },
   { title: 'надежность', text: 'дадим гарантию до 12 месяцев на нашу работу'},
   { title: 'безопасность', text: 'продезинфицируем все поверхности после себя'}
  ])
</script>

<template>
    <div class="items ">
        <div class="item " v-for="n in qualities" >
            <div class="item-title">{{ n.title }}</div>
            <div class="item-text">{{ n.text }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .items {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    width: 100%;
    .item {
      margin-right: 9px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      align-items: start;
      width: 267px;
      height: 110px;
      background: #FFFFFF;
      box-shadow: 8px 16px 24px rgba(185, 194, 205, 0.5);
      border-radius: 16px;

      &-title {
        color: #152F4E;
        font-family: 'Euclid Circular A';
        font-style: normal;
        font-weight: 500;
        font-size: 32px;
        line-height: 32px;
      }
      &-text {
        font-family: 'Euclid Circular A';
        width: 100%;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #152F4E;
        margin-top: 16px;
        text-align: left;
      }
    }
  }

  @media ( max-width: 991px ) {
  .items {
    widows: 100%;

    .item {
      width: 200px;
      height: 90;
      
      &-title {
        font-size: 28px;
      }
      &-text {
        font-size: 16px;
      }
    }
  }
}
@media ( max-width: 768px ) {
  .items {
    flex-direction: column ;
    align-items: center;
    .item {
      margin-top: 10px;
    }
  }
}

</style>