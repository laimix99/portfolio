<script setup>
import { ref, computed, reactive, onMounted } from 'vue';


  const props = defineProps({
    arrayLength: {
      type: Number,
      required: true,
    },
    interval: {
      type: Number,
      default: 0
    },
    navPosition: {
      type: String,

    },
    widthSlider: {
      type: String,
    },
    maxSwipeSlides: {
      type: Number,
    },
    maxViewSlides: {
      type: Number
    }
  })

    onMounted(() => {
    if (props.interval > 0) {
      setInterval(function() {
        nextSlide()
      }, props.interval)
    }
  })

  const currentSlideIndex = ref(0)
  const prevSlide = function() {
    if ( currentSlideIndex.value > 0) {
      currentSlideIndex.value--
      console.log(currentSlideIndex.value)
    }
    
  }

  const nextSlide = function() {
    if (currentSlideIndex.value >= props.arrayLength - 3) {
        currentSlideIndex.value = 0
      } else {
        currentSlideIndex.value++
      }
  }
</script>
 <template>
  <div class="slider br" :class="`${navPosition}`">
    <div class="wrapper">
      <div class="carusel" :style="{'margin-left': '-' + (100 / maxViewSlides * props.maxSwipeSlides * currentSlideIndex) + '%'}">
        <slot></slot>
      </div> 
      
    </div>
    <div class="btn" >
      <button class="prev" @click="prevSlide"><img src="images/prev.svg" alt=""></button>
      <button class="next" @click="nextSlide"><img src="images/next.svg" alt=""></button>  
    </div>
  </div>
 </template>

<style lang="scss" scoped>
.slider-services {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  .btn {
    margin-top: 64px;
    border: 1px solid red;
    button {
      background: #FFFFFF;
      margin-right: 8px;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      opacity: 0.2;
      &:hover {
        opacity: 1;
      }

      img {
        padding: 22px 16px;
      }
    } 
  }  
}

.slider-team {
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  .btn {
    margin-left: 8px;
    margin-top: 75px;
    display: flex;
    flex-flow: wrap;
    .next {
      order:1;
      margin-top: 10px;
      border: none;
      box-shadow: 8px 16px 24px rgba(185, 194, 205, 0.5);
      border-radius: 16px;
      background: #FFFFFF;
      opacity: 0.2;
      &:hover {
        opacity: 1;
      }
      img {
        padding: 20px;
      }
    }
    .prev {
      order:2;
      margin-top: 10px;
      border: none;
      box-shadow: 8px 16px 24px rgba(185, 194, 205, 0.5);
      border-radius: 16px;
      background: #FFFFFF;
      opacity: 0.2;
      &:hover {
        opacity: 1;
      }
      img {
        padding: 20px;
      }
    }
  }
}



  .wrapper {
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 100%;

    .carusel {
      display: flex;
      width: 100%;
      // position: absolute;
      transition: all ease .5s;
      justify-content: flex-start;
      border: 1px solid red;
    }
  }

  @media screen and (max-width: 991px)  {
    .slider-services {
      align-items: center;
    }
  }
</style>

