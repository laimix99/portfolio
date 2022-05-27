<script setup>
import { ref, computed, reactive } from 'vue';
import SpinnerLetter from '../components/SpinnerLetter.vue';
import SpinnerGif from '../components/SpinnerGif.vue';

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ ';
const qAngle = 160;
// const lAngle = 13.84;
const lAngle = 13;
// 360 / 26 ~ 13.84
// const lAngle = 360 /

const encode = (msg) => {};
const decode = (msg) => {};

const arr = ALPHABET.split('');
console.log('arr', arr);

const qIndex = ref();
qIndex.value = arr.findIndex((l) => l === 'Q');

console.log('qIndex', qIndex);
const qIndexDouble = computed(() => {
  return qIndex.value * 2;
});

const lMap = arr.reduce((acc, val, valIndex) => {
  let i = qIndex.value - valIndex;
  let a = qAngle - i * lAngle;
  acc[val] = { a: a, i: i };
  return acc;
}, {});

console.log(lMap);
const spaceAngle = lMap[' '].a;

const state = reactive({
  msg: 'hello world',
  msgEncoded: computed(() => {
    return (
      state.msg
        // .replace(/\s/g, '')
        .split('')
        .map((l) => {
          let lKey = l.toUpperCase();
          let lMeta = lMap[lKey];
          if (lMeta) {
            return lMeta.a.toFixed();
          } else {
            return '*';
          }
        })
      // .join('')
    );
  }),
  msgEncodedWords: computed(() => {
    return state.msgEncoded.reduce(
      (acc, l) => {
        let lastWord = acc[acc.length - 1];
        if (!lastWord) {
          acc[0] = [];
          lastWord = acc[0];
        }
        if (l === `${spaceAngle}`) {
          acc.push([]);
        } else {
          lastWord.push(l);
        }
        // acc.push(l);
        return acc;
      },
      [[]]
    );
  }),
});
</script>

<template>
  <div
    class="spinner-page"
    style="display: flex; flex-direction: column; width: 100%"
  >
    <h1>BQ spinner ALPHABET</h1>
    <!-- <small style="width: 100%">{{ lMap }}</small> -->
    <textarea v-model="state.msg"></textarea>
    <!-- <div>{{ state.msgEncodedWords }}</div> -->
    <!-- absolute -->
    <div
      style="
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px 0;
        position: relative;
        height: 40px;
      "
    >
      <SpinnerLetter
        v-for="(l, li) in state.msgEncoded"
        :key="li"
        :angle="l"
        :style="{
          position: 'absolute',
          zIndex: 1 + li,
        }"
        :no-bg="li !== 0"
      ></SpinnerLetter>
    </div>
    <!-- by word -->
    <div
      style="
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px 0;
        position: relative;
      "
    >
      <div
        v-for="(w, wi) in state.msgEncodedWords"
        style="
          display: flex;
          position: relative;
          margin-right: 10px;
          margin-bottom: 10px;
          width: 40px;
          height: 40px;
        "
      >
        <SpinnerLetter
          v-for="(l, li) in w"
          :key="`${wi}-${li}`"
          :angle="l"
          :no-bg="li !== 0"
          :style="{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1 + li,
          }"
        ></SpinnerLetter>
      </div>
    </div>
    <!-- inline -->
    <div
      style="
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        padding: 10px 0;
      "
    >
      <SpinnerLetter
        v-for="(l, li) in state.msgEncoded"
        :key="li"
        :angle="l"
        :no-bg="false"
        :style="{
          marginRight: '10px',
          marginBottom: '10px',
        }"
      ></SpinnerLetter>
    </div>
    <SpinnerGif :code="state.msgEncoded"></SpinnerGif>
    <div></div>
  </div>
</template>

<style>
.spinner-page {
  position: relative;
  width: 100%;
}
</style>
