<script setup>
  defineProps({
    isSelected: {
      type: Boolean,
      
    }
  })
</script>

<template>
  <div v-if="isSelected" class="tab ">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .tab {
    display: flex;
    box-sizing: border-box;

    // justify-content: center;
  }

  @media ( max-width: 768px ) {
    .tab {
      flex-wrap: wrap;
      width: 100%;
    }
  }
</style>