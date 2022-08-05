<style lang="scss" scoped>
.checkbox-slider {
  display: flex;
  align-items: center;
  .slider {
    position: relative;
    width: 38px;
    height: 22px;
    background: #858A9C;
    transition: .4s;
    border-radius: 47px;
    cursor: pointer;
    &:before {
      content: '';
      position: absolute;
      height: 20px;
      width: 20px;
      left: 2px;
      top: 1px;
      background: white;
      transition: .4s;
      border-radius: 50%;
      box-shadow: 0 0 1px rgba(0,0,0,0.15);
    }
  }
  input {
    display: none;
  }
  input:checked + .slider {
    background: #77FF49;
  }
  input:checked + .slider:before {
    transform: translateX(15px);
  }
}
</style>

<!-- <template lang="pug">
.checkbox-slider
  label(:for="id").mr-2
    slot()
  input(
    type="checkbox"
    v-model="modelValue"
    @change="onChange($event)"
    :id="id")
  label(:for="id").slider
</template> -->
<template>
  <div class="checkbox-slider">
    <label :for="id"></label>
    <input 
      type="checkbox"
      v-model="modelValue"
      @change="onChange($event)"
      :id="id"
    />
    <label class="slider" :for="id"></label>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['update:modelValue'])
defineProps({
  id: { type: String, default: '' },
  modelValue: { type: Boolean },
})
// const checked = ref(true)
const onChange = (e: any) => {
  // console.log('onChange', e.)
  emit('update:modelValue', e.target.checked)
}
</script>