<template>
  <!--
    div 的 class 是为了布局，占位
    slot 的 name 属性是具名插槽，用来具体的替换
  -->
  <div class="nav-bar">
    <div class="left">
      <slot></slot>
    </div>
    <div class="center">
      <slot></slot>
    </div>
    <div class="right">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  /*<!-- 采用弹性布局-->*/
  .nav-bar {
    display: flex;
    /*一般导航栏的高度为 44px */
    height: 44px;
    line-height: 44px;
    color: black;
  }

  .left, .right{
    width: 60px;
    background-color: #ff5777;
  }

  .center{
    flex: 1;
    background-color: #666666;
  }
</style>
