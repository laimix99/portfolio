<template>
<div class="my-botton">
<div class="bt">
  <button class="item-1">
    <slot/>
  </button>
  <!-- <div class="item-2"></div> -->
</div>
</div>
</template>

<style scoped lang="scss">
.br {
  @apply relative;
}
.item-1 {
  @apply text-32px font-400 py-10px px-60px z-50;
  // display: inline-block;
  // padding: 15px 25px;
  // font-size: 24px;
  cursor: pointer;
  text-align: center;
  // text-decoration: none;
  outline: none;
  color: #fff;
  // clip-path: polygon(12% 0, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 30%);
  background-color: #38AF59;
  // filter: drop-shadow(4px 4px 0px #073715) drop-shadow(10px 10px 12px rgba(117, 223, 184, 0.3));
  // border: none;
  // border-radius: 15px;
  box-shadow: 5px 5px 1px #073715;
}

.item-1:hover {background-color: #3e8e41}

.item-1:active {
  // background-color: #3e8e41;
  box-shadow: 2px 2px #073715;
  transform: translateY(5px) !important;
  z-index: 500;
  // transform: translateX(4px);
}
.item-2 {
  @apply absolute z-1;
  left: 5px;
  top: 5px;
  width: 169px;
  height: 52px;
  background-color: #073715;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  outline: none;
  // clip-path: polygon(12% 0, 100% 0, 100% 75%, 90% 100%, 0 100%, 0 30%);
}
</style>
