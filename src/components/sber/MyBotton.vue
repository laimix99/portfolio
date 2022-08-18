<script setup>
defineProps({
  name: {
    type: String,
  }
})
</script>

<template>
  <div class="my-botton">
    <div class="bt">
      <button :class="'item-' + name">
        <slot/>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.br {
  @apply relative;
}
.item-1 {
  @apply text-32px font-400 py-10px px-60px z-50;
  cursor: pointer;
  text-align: center;
  outline: none;
  color: #fff;
  background-color: #38AF59;
  box-shadow: 5px 5px 1px #073715;
  white-space: nowrap;
  @media screen and (max-width: 767px) {
    @apply text-20px;
  }
}

.item-1:hover {background-color: #3e8e41}

.item-1:active {
  box-shadow: 2px 2px #073715;
  transform: translateY(5px) !important;
  z-index: 500;
  
}

.item-green {
  @apply text-20px font-400 py-11px px-16px mr-16px;
  border: 1px solid #2B9A4A;
  box-shadow: inset 0px 0px 20px rgba(117, 223, 184, 0.2);
  // filter: drop-shadow(0px 0px 5px rgba(117, 223, 184, 0.6));
  color: #2B9A4A;
  // color: white;
  font-family: 'SB Sans Interface';
  @media screen and (max-width: 991px) {
    @apply text-15px;
  }
}
.item-white {
  @apply text-20px font-400 py-11px px-16px;
  border: 1px solid #B9B9C0;
  box-shadow: inset 0px 0px 20px rgba(117, 223, 184, 0.2);
  color: #B9B9C0;
  @media screen and (max-width: 991px) {
    @apply text-15px;
    white-space: nowrap;
  }
}

.item-white {
  @apply text-20px font-400 py-11px px-16px;
  border: 1px solid #B9B9C0;
  box-shadow: inset 0px 0px 20px rgba(117, 223, 184, 0.2);
  color: #B9B9C0;
}
.item-down {
  @apply;
  border: 1px solid #B9B9C0;
  box-shadow: inset 0px 0px 20px rgba(117, 223, 184, 0.2);
  color: #B9B9C0;
}

</style>
