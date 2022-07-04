<script setup>
    import { ref, computed, reactive } from 'vue';
  const qualities = ref([
   { title: 'ответственность', text: 'застрахуем автомобиль на 10.000.000 ₽ пока он у нас'  },
   { title: 'надежность', text: 'дадим гарантию до 12 месяцев на нашу работу'},
   { title: 'безопасность', text: 'продезинфицируем все поверхности после себя'}
  ])
</script>

<template>
    <div class="items flex box-border justify-center w-full">
        <div class="item flex flex-col items-start mr-9px p-32px  rounded-16px" v-for="n in qualities" >
            <div class="item-title not-italic font-500px text-32px leading-32px">{{ n.title }}</div>
            <div class="item-text w-full max-w-267px not-italic font-300 text-16px leading-24px mt-16px text-left">{{ n.text }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
  .items {

    .item {
      background: #FFFFFF;
      box-shadow: 8px 16px 24px rgba(185, 194, 205, 0.5);

      &-title {
        color: #152F4E;
        font-family: 'Euclid Circular A';
      }
      &-text {
        font-family: 'Euclid Circular A';
        color: #152F4E;
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