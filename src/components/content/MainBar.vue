<template>
  <tab-bar>
    <tab-bar-item path="/home">
<!--      别名： webpack.base.conf.js 文件 里面 28-32 行
                使用 别名之后，路径前要添加 ~ ，这样再次拷贝代码
                形成新的组件的时候，就不用再去改图片路径了
-->
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/cate.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shoppingcar-active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="~assets/img/tabbar/RocketMQ Producer_small.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </tab-bar>
</template>

<script>
  // import TabBar from "./components/tabbar/TabBar";
  // import TabBarItem from "./components/tabbar/TabBarItem";

  import TabBar from "../common/tabbar/TabBar";
  import TabBarItem from "../common/tabbar/TabBarItem";

  export default {
    name: "MainBar",
    components: {TabBarItem, TabBar}
  }
</script>

<style scoped>

</style>
