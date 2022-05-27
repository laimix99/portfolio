<template>
  <div class="login-header">
    <div class="login-header-title">Login</div>
    <router-link to="/" class="all-projects" />
  </div>
  <div class="body">
    <router-view />
  </div>
</template>
<style lang="scss" scoped>
.login-header {
  margin: 0;
  display: flex;
  // flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  background: green;
  &-title {
    font-size: 20px;
    color: #fff;
  }
  .all-projects {
    color: #fff;
    background: url('https://e7.pngegg.com/pngimages/246/887/png-clipart-power-on-off-logo-computer-icons-shutdown-internet-computer-software-quit-miscellaneous-web-design.png')
      center;
    background-size: 160%;
    background-repeat: no-repeat;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    cursor: pointer;
    position: absolute;
    left: 10px;
  }
}
.body {
}
</style>
