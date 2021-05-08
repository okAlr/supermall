<template>
  <div class="tab-bar-item" @click="itemClick">

    <!--    slot 外面都用一个 div 套上,避免替换的时候把其他属性替换掉-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>

    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>

    <!--    如果一个式子过于复杂，可以将它整个放在一个methods里面或者是一个计算属性里面-->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    data() {
      return {
        // isActive: true
      }
    },
    computed: {
      isActive() {
        // 这个东西好神奇，有点没懂
        return this.$route.path.indexOf(this.path) !== -1;
      },

      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path)
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    /* 分为均等分，这是新特性，我没学过的*/
    flex: 1;
    text-align: center;

    /*一般 tab-bar 的高度都是 49px*/
    height: 49px;

    box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
    font-size: 14px;
    margin-top: 3px;

    /* 解决图片本身下方就有 3px的距离 */
    vertical-align: middle;
    margin-bottom: 2px;

  }

  .tab-bar-item img {
    width: 19px;
    height: 19px;
  }


</style>
