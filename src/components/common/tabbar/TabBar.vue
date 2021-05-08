<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
    export default {
        name: "TabBar"
    }
</script>

<style scoped>
  #tab-bar{
    /* 注意这个，添加弹性布局*/
    display: flex;

    background-color: #f6f6f6;

    /* 固定在底下*/
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
  }

</style>
