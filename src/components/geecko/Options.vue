<script setup>
import {ref} from 'vue'
import Toggle from './Toggle.vue'
import MuSvg from './MySvg.vue'
const toggle = ref(true)

const props = defineProps({
  options: {
    tupe: Object,
    default: () => {}
  }
})
</script>

<template>
  <div class="options">
    <div class="position">
      <div class="name">
        <MuSvg
          :name="options.position.icon"
        />
        <div class="name-title">{{ options.position.title }}</div>
      </div>
      <div class="percent">{{ options.position.percent }}</div>
    </div>
    <div class="experience">
      <div class="years">
        <h1>Years of experience</h1>
        <p>{{ options.experience.number }}</p>
      </div>
      <div class="exp-container">
        <div class="exp-value" :style="{width: options.experience.exp_value + '%' }"></div>
      </div>
    </div>
    <div class="techs">
      <div class="tech" v-for="tech in options.techs" :style="{background: tech.color}">
        <div class="tech-title">{{ tech.title }}</div>
        <svg v-if="tech.img === '1'" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="12px" height="12px"><path d="M 26.980469 5.9902344 A 1.0001 1.0001 0 0 0 26.292969 6.2929688 L 11 21.585938 L 4.7070312 15.292969 A 1.0001 1.0001 0 1 0 3.2929688 16.707031 L 10.292969 23.707031 A 1.0001 1.0001 0 0 0 11.707031 23.707031 L 27.707031 7.7070312 A 1.0001 1.0001 0 0 0 26.980469 5.9902344 z"/></svg>
        <svg v-if="tech.img === '2'" fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" width="12px" height="12px"><path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 28.159946 7 31.91445 8.5434723 34.865234 11.013672 L 11.013672 34.863281 C 8.544055 31.912656 7 28.1594 7 24 C 7 14.593391 14.593385 7 24 7 z M 36.986328 13.134766 C 39.456525 16.085553 41 19.840056 41 24 C 41 33.406609 33.406615 41 24 41 C 19.840597 41 16.087341 39.455948 13.136719 36.986328 L 36.986328 13.134766 z"/></svg>
      </div>
    </div>
    <div class="interviews">
      <div class="interviews-block">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" height="15" width="17"><path d="M16.4 42H9q-1.2 0-2.1-.9Q6 40.2 6 39V24q0-3.75 1.425-7.025 1.425-3.275 3.85-5.7 2.425-2.425 5.7-3.85Q20.25 6 24 6q3.75 0 7.025 1.425 3.275 1.425 5.7 3.85 2.425 2.425 3.85 5.7Q42 20.25 42 24v15q0 1.2-.9 2.1-.9.9-2.1.9h-7.4V27.2H39V24q0-6.25-4.375-10.625T24 9q-6.25 0-10.625 4.375T9 24v3.2h7.4Zm-3-11.8H9V39h4.4Zm21.2 0V39H39v-8.8Zm0 0H39h-4.4Zm-21.2 0H9Z"/></svg>
        <div class="interviews-block-title">Interviews scheduled</div>
      </div>
      <div class="interviews-number" v-for="i in options.interviews">{{ i }}</div>
    </div>
    <div class="unlock">
      <div class="unlock-title">Unlock CV</div>
      <Toggle
        v-model="toggle"
        id="toggle"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.options {
  @apply flex flex-col items-center w-full max-w-188px;

  .position {
    @apply flex flex-row items-center w-full justify-between py-10px px-8px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 11.4576px;
    .name {
      @apply flex flex-row items-center font-700;
      &-title {
        @apply text-14px;
      }
    }
    .percent {
      @apply text-15px font-700;
    }
  }
  .experience {
    @apply flex flex-col w-full mt-4px  py-10px px-8px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 11.4576px;
    .years {
      @apply flex flex-row items-center w-full justify-between;
      h1 {
        @apply text-14px;
        color: #1A1B35;
      }
      p {
        @apply text-15px ;
        color: #1A1B35;
      }
    }
    .exp-container {
      @apply h-9px w-full rounded-45px mt-5px;
      background: #ECECEC;
      .exp-value {
        @apply h-full;
        // width:40%;
        background: #6B56ED;
        border-radius: 45.8306px;
      }
    }
  }
  .techs {
    @apply flex flex-row flex-wrap w-full mt-4px py-10px px-8px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 11.4576px;
    .tech {
      @apply flex flex-row items-center py-3px px-4px rounded-5px mt-4px mr-3px;
      &-title {
        @apply text-12px font-700 mr-3px;
        color: #1A1B35;
      }
    }
  }
  .interviews {
    @apply flex flex-row w-full mt-4px py-10px px-8px justify-between;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 11.4576px;
    &-block {
      @apply flex flex-row items-center;
      &-title {
        @apply text-14px;
        color: #1A1B35;
      }
      svg {
        @apply mr-4px;
        fill: #7460EE;
      }
    }
    &-number {
      @apply text-15px font-700;
    }
  }
  .unlock {
    @apply flex flex-row items-center w-full mt-4px py-10px px-8px justify-between;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 11.4576px;
    &-title {
      @apply text-14px font-700;
    }
  }
}
</style>
