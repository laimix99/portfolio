<script setup>
import { computed, onMounted, ref } from 'vue';
import BaseIcon from './BaseIcon.vue';
import Timer from './Timer.vue'
const props = defineProps({
  type: {
    type: String,
    // default: 'primary'
  },
  rounded: {
    type: Boolean,
    default: false
  },
  label: {
    type: String
  },
  icon: {
    type: String
  },
  showTimer: {
    type: Boolean,
    default: false,
  },
  rectangle: {
    type: Boolean,
    default: false
  },
  link: {
    type: Boolean,
    default: false,
  },
  timerOptions: {
    type: Object,
    default: () => {
      return {
        type: 'minutes',
        amount:0.1,
      }
    }
  }
})

const getButtonClasses = computed(() => {
  const result = ['']
  if (props.rectangle) {
    result.push('base-button')
  }
  // if (props.type === 'primary') {
  //   result.push('primary')
  // }
  if (props.type === 'orange') {
    result.push('orange')
  }
  if (props.type === 'pink') {
    result.push('pink')
  }
  if (props.type === 'yellow') {
    result.push('yellow')
  }
  if (props.type === 'disabled') {
    result.push('disabled')
  }
  if (props.type === 'blue') {
    result.push('blue')
  }
  if (props.type === 'red') {
    result.push('red')
  }
  if (props.type === 'green') {
    result.push('green')
  }
  if (props.type === 'violet') {
    result.push('violet')
  }
  if (props.rounded) {
    result.push('rounded')
  }
  if (loadingTimer.value == true) {
    result.push('disabled')
  }
  return result
})

function countDistance() {
  let distanceAdd = 0
  switch(props.timerOptions.type) {
    case 'seconds':
      distanceAdd = 1000 * props.timerOptions.amount
      break
    case 'minutes':
      distanceAdd = 1000 * 60 * props.timerOptions.amount
      break
    case 'hours':
      distanceAdd = 1000 * 60 * 60 * props.timerOptions.amount
      break
    case 'days':
      distanceAdd = 1000 * 60 * 60 * 24 * props.timerOptions.amount
      break
  }
  console.log(distanceAdd)
  return distanceAdd
}
const timer = ref('')
const loadingTimer = ref(false)

function getCorrectTime(distance) {
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
  const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
  const seconds = Math.floor(distance % (1000 * 60) / 1000)
  timer.value = `${minutes > 9 ? minutes : `0${minutes}`}:${seconds > 9 ? seconds : `0${seconds}`}`
}

function timerDone() {
  // alert('timer done')
  loadingTimer.value = false
}

function startTimer() {
  let distance = countDistance()
  getCorrectTime(distance)
  loadingTimer.value = true
  const interval = setInterval(function(){
    distance -= 1000
    getCorrectTime(distance)
    if (distance <= 0) {
      clearInterval(interval)
      timerDone()
    }
  }, 1000)
}

function buttonClick() {
  if (props.showTimer && !loadingTimer.value) {
    startTimer()
  }
}
onMounted(() => {
  // console.log(loadingTimer.value)
})
</script>

<template>
<div class="flex flex-col items-center relative justify-center">
  <a 
    v-if="link" 
    href=""
    class="text-16px text-hex-C4296C underline hover:text-hex-767679"
  >
    {{ props.label }}
  </a>
  <button 
    v-if="props.rounded || props.rectangle || props.icon"
    :class="getButtonClasses"
    class="flex flex-row w-full relative items-center box-border"
    @click="buttonClick()"
    :disabled="loadingTimer"
  >
    <svg v-if="rectangle" width="46" height="52" class="right-0 z-0 pointer-events-none absolute"  viewBox="0 0 46 52" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.000595093 51.9694V0.0467095C7.62185 -0.0384196 14.975 -0.00900615 19.9106 0.149932C32.3112 0.549263 39.1029 0.919741 42.8606 9.3057C45.4939 15.1822 45.9989 23.7337 46.0006 29.0811C46.0006 29.0997 46.0006 29.1183 46.0006 29.1368C45.9999 31.3922 45.9099 33.0692 45.8541 33.7211C45.8429 33.8518 45.8321 34.0019 45.82 34.1697C45.6284 36.8224 45.1165 43.9105 37.8715 48.9807C34.1522 51.5835 17.2818 52.1493 0.000595093 51.9694Z" fill=""/>
    </svg>
    
    <svg v-if="rectangle" width="46" height="52" class="top-0 left-0 z-0 pointer-events-none absolute" viewBox="0 0 46 52" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M46 0.0305786L46 51.9533C38.3787 52.0384 31.0256 52.009 26.09 51.8501C13.6894 51.4507 6.89773 51.0803 3.13997 42.6943C-0.61779 34.3083 -0.041397 20.4752 0.146492 18.2789C0.157673 18.1482 0.168511 17.9981 0.18063 17.8303C0.3722 15.1776 0.884083 8.08949 8.1291 3.01931C11.8484 0.416504 28.7188 -0.149338 46 0.0305786Z" fill=""/>
    </svg>


    
    <svg v-if="rounded" width="100%" height="100%" class="inset-0 z-0 pointer-events-none absolute" viewBox="0 0 60 60"  xmlns="http://www.w3.org/2000/svg">
      <path d="M21.1309 0.205876C3.16965 0.756644 -6.87835e-05 15.352 3.05176e-05 24.9904C0.000129823 34.6289 3.18885e-05 32.5635 0.660323 41.5135C1.32061 50.4635 9.24468 57.3481 15.1878 58.725C21.1309 60.1019 41.8655 61.2034 48.2047 57.3481C56.1288 52.5288 58.7701 44.2673 59.4305 36.6943C60.0908 29.1212 61.4115 15.352 54.8081 7.77894C48.2047 0.205876 43.5824 -0.482584 21.1309 0.205876Z" fill=""/>
    </svg>
    <div
      v-if="props.label"
      class="flex flex-row h-full w-full gap-3 content justify-center items-center"
      :class="{ '!transparent': props.icon }"  
    >
      <span v-if="props.label && !props.rounded" class="font-500 text-18px leading-24px z-3">{{ props.label }}</span>
      
      <Timer
        v-if="props.showTimer && loadingTimer"
        :time="timer"
      />
    </div>
    <BaseIcon
      class="z-3"
      v-else-if="props.icon"
      :name="props.icon"
      :w="30"
    />
  </button>
</div>

</template>

<style scoped lang="scss">
  .base-button {
    height: 52px;
    padding: 0px 46px;
    .content {
      min-width: 168px;
    }
  }
  .rounded {
    padding: 15px;
  }
  .orange {
    .content {
      background: #ED732E;
    }
    fill:  #ED732E;
    color: white;
  }

  .pink {
    .content {
      background: #C4296C !important;
    }
    fill: #C4296C;
    color: white;
  }
  .yellow {
    .content {
      background: #F4BA46 !important;
    }
    fill: #F4BA46;
    color: white;
  }
  .disabled{
    .content {
      background: #EFEFEF !important;
    }
    color: #767679 !important ;
    fill: #EFEFEF !important ;
  }
  .blue {
    .content {
      background: #0083B6 ;
    }
    fill: #0083B6;
    color: white;
  }
  .red{
    .content {
      background: #DF3F3E;
    }
    fill: #DF3F3E;
    color: white;
  }
  .green {
    .content {
      background: #6DD1B0;
    }
    fill: #6DD1B0;
  }
  .violet {
    .content {
      background: #702C7E;
    }
    fill: #702C7E;
    color: white;
  } 
  span {
    white-space: nowrap;
  }
  @media screen and (max-width: 640px) {
    .base-button {
      .base-icon {
        transform: scale(0.8);
      }
    }
    .rounded {
      padding: 11px;
    }

  }
</style>
