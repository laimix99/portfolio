<script setup>
  import { ref, computed, reactive } from 'vue';
  const emit = defineEmits(['selected'])
  defineProps({
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true
    },
    classId: {
      type: String,
      default: '',
    }
  })
  const setTab = (tab) => {
    emit('selected', tab);
  }

  
</script>


<template>
  <div>
    <div class="title">
      <div v-for="tab in tabs" >
        <a :class="[ tab.name === selected ? `${classId}-active` : '', classId ]" @click="setTab(tab.name)">
        {{ tab.name }}
        </a>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.tab-black {
  box-sizing: border-box;
  color: #000;
  &-active {
    color: red;
    border-bottom: 4px solid red;
    padding-bottom: 16px;
    opacity: 1 !important;
    
  }
}
.tab-white {
  color: #fff;
  &-active {
    color: #fff;
    opacity: 1 !important;
    border-bottom: 4px solid #fff;
    padding-bottom: 16px;
  }
}
.tab-blue {
  color: #152F4E;
    &-active {
    color: #152F4E;
    opacity: 1 !important;
    border-bottom: 4px solid #152F4E;
    padding-bottom: 16px;
  }
}
  .title {
    display: flex;
    padding: 52px 50px;
    box-sizing: border-box;

    a {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      // line-height: 20px;
      margin-right: 32px;
      opacity: 0.3;
      cursor: pointer;
    }
  }
  @media ( max-width: 768px ) {

  div {

    .title {
      justify-content: center;
      padding: 0px;
      a {
        margin-right: 15px !important;
        padding-bottom: 5px;
      }
    }
  }
  .tab-white {
    font-size: 10px !important;
    
    div {
      width: 100%;
      margin: 0;
      
    }
  }
}
</style>