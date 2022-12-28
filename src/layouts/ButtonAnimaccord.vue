<script setup>
import BaseButton from '../components/button-animaccord/BaseButton.vue'
import Baseicons from '../components/button-animaccord/BaseIcons.vue'
</script>

<template>
  <Baseicons/>
  <div class="flex flex-row bg-hex-242424 min-h-100vh p-4 gap-6 items-start">
    <div class="flex flex-col gap-6 items-center">
      <BaseButton
        label="отправить письмо"
        type="violet"
        rectangle
        :showTimer="true"
        :timerOptions="{type: 'minutes', amount: 1}"
      />
      <BaseButton
        label="отправить письмо"
        type="pink"
        rectangle
        :showTimer="true"
        :timerOptions="{type: 'minutes', amount: 2}"
      />
      <BaseButton
        label="отправить письмо"
        type="yellow"
        :showTimer="true"
        rectangle
        :timerOptions="{type: 'minutes', amount: 3}"
      />
        <BaseButton
        label="отправить письмо"
        type="disabled"
        rectangle
        :showTimer="true"
        :timerOptions="{type: 'minutes', amount: 4}"
      />
      <BaseButton
        label="отправить письмо"
        rectangle
        type="blue"
        :showTimer="true"
        :timerOptions="{type: 'seconds', amount: 50}"
      />
      <BaseButton
        label="отправить письмо"
        rectangle
        type="red"
        :showTimer="true"
        :timerOptions="{type: 'seconds', amount: 30}"
      />
      <BaseButton
        label="отправить письмо"
        type="orange"
        rectangle
        :showTimer="true"
        :timerOptions="{type: 'seconds', amount: 10}"
      />
    </div>
    <div class="flex flex-col gap-6 items-center">
      <BaseButton
        icon="prev"
        rounded
        type="violet"
      />
      <BaseButton
        type="red"
        rounded
        icon="close"
      />
      <BaseButton
        type="green"
        icon="ques"
        rounded
      />
      <BaseButton
        icon="next"
        rounded
        type="violet"
      />
      <BaseButton
        type="red"
        icon="google"
        rounded
      />
      <BaseButton
        type="blue"
        icon="vk"
        rounded
      />
      <BaseButton
        type="orange"
        rounded
        icon="od"
      />
      <BaseButton
        icon="pen"
        rounded
        type="violet"
      />
    </div>
    <div class="flex flex-col gap-6 items-center">
      <BaseButton
        icon="prev"
      />
      <BaseButton
        icon="close"
      />
      <BaseButton
        icon="ques"
      />
      <BaseButton
        icon="next"
      />
      <BaseButton
        icon="google"
      />
      <BaseButton
        icon="vk"
      />
      <BaseButton
        icon="od"
      />
      <BaseButton
        icon="pen"
      />
    </div>
    <BaseButton
      type="disabled"
      label="повторное письмо"
      rectangle
      :showTimer="true"
      :timerOptions="{type: 'minutes', amount: 3}"
    />
    <BaseButton
      link
      label="Напомнить PIN-код"
    />
  </div>
</template>

<style lang="scss">
@import url('https://fonts.cdnfonts.com/css/phosphorus-family');
@font-face {
  font-family: "Phosphate";
  src: url("/fonts/PhosphateSolid.ttf") format("truetype"),     
}
// // @font-face {
// //   font-family: "PhosphateSolid";
// //   src: url("/fonts/PhosphateRR Solid.ttf") format("truetype"),     
// // }
// @font-face {
//   font-family: "PhosphateSolid";
//   src: url("/fonts/PhosphateSolid.ttf") format("truetype"),     
// }
span{
  font-family: "Phosphate";
  // font-family: 'Phosphorus', sans-serif;
    // font-weight: 500;
  // font-style: normal;
}
// PhosphateSolid
</style>
