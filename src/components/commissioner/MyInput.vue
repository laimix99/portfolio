<script setup>
import { watch, ref } from 'vue'
const props = defineProps({
  placeholder: {
    type: String,
  },
  icon: {
    type: String,
  },
  modelValue: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text'
  }
})
const emit = defineEmits(['update:modelValue'])
const innerValue = ref('')
const onChange = (value) => {
  emit('update:modelValue', value)
}
watch(() => innerValue, (val) => {
  onChange(val)
}, { deep: true, immediate: true})
</script>

<template>
  <div class="my-input">
    <input
      :type="type"
      :placeholder="props.placeholder"
      v-model="innerValue"
    />
    <svg v-if="icon === 'phone'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M39.75 42q-6.1 0-12.125-3T16.8 31.2Q12 26.4 9 20.375 6 14.35 6 8.25q0-.95.65-1.6Q7.3 6 8.25 6h7q.7 0 1.225.475.525.475.675 1.275l1.35 6.3q.1.7-.025 1.275t-.525.975l-5 5.05q2.8 4.65 6.275 8.1Q22.7 32.9 27.1 35.3l4.75-4.9q.5-.55 1.15-.775.65-.225 1.3-.075l5.95 1.3q.75.15 1.25.75T42 33v6.75q0 .95-.65 1.6-.65.65-1.6.65Zm-28.3-23.4 4.05-4.1L14.35 9H9q0 1.95.6 4.275t1.85 5.325ZM29.9 36.75q2.05.95 4.45 1.55 2.4.6 4.65.7v-5.35l-5.15-1.05ZM11.45 18.6ZM29.9 36.75Z"/></svg>  
    <svg v-if="icon === 'name'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M24 23.95q-3.3 0-5.4-2.1-2.1-2.1-2.1-5.4 0-3.3 2.1-5.4 2.1-2.1 5.4-2.1 3.3 0 5.4 2.1 2.1 2.1 2.1 5.4 0 3.3-2.1 5.4-2.1 2.1-5.4 2.1ZM8 40v-4.7q0-1.9.95-3.25T11.4 30q3.35-1.5 6.425-2.25Q20.9 27 24 27q3.1 0 6.15.775 3.05.775 6.4 2.225 1.55.7 2.5 2.05.95 1.35.95 3.25V40Zm3-3h26v-1.7q0-.8-.475-1.525-.475-.725-1.175-1.075-3.2-1.55-5.85-2.125Q26.85 30 24 30t-5.55.575q-2.7.575-5.85 2.125-.7.35-1.15 1.075Q11 34.5 11 35.3Zm13-16.05q1.95 0 3.225-1.275Q28.5 18.4 28.5 16.45q0-1.95-1.275-3.225Q25.95 11.95 24 11.95q-1.95 0-3.225 1.275Q19.5 14.5 19.5 16.45q0 1.95 1.275 3.225Q22.05 20.95 24 20.95Zm0-4.5ZM24 37Z"/></svg>
    <svg v-if="icon === 'email'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path d="M7 40q-1.2 0-2.1-.9Q4 38.2 4 37V11q0-1.2.9-2.1Q5.8 8 7 8h34q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm17-15.1L7 13.75V37h34V13.75Zm0-3L40.8 11H7.25ZM7 13.75V11v26Z"/></svg>
  </div>
</template>

<style scoped lang="scss">
.my-input {
  @apply flex w-full relative max-w-400px mt-30px;
  input {
  @apply  w-full py-10px rounded-32px pl-30px relative;
    outline: none;
    background-color: #2C3146;
    color: #eeee;
    // -moz-border-radius: 32px;  
    // -webkit-border-radius: 32px;
    // background-image: url("https://cdn-icons-png.flaticon.com/512/751/751463.png");
    // background-position: 10px; /*Позиционируем*/
    // background-size: 5%;
    // background-repeat: no-repeat;
  }
  svg {
    @apply absolute;
    // max-width: 20px;
    // max-height: 20px;
    height: 20px;
    width: 20px;
    right: 20px;
    top: calc(50% - 10px);
    fill: #fff;
    // border: 1px solid red;
  }
}


</style>
