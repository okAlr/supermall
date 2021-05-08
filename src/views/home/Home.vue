<template>
  <div id="home">
    <!--      首页里面只有中间部分有内容，所以就只替换 name 为 center的那个插槽-->
    <nav-bar>
      <div slot="center">
        购物街
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";

  export default {
    name: "Home",
    components: {NavBar}
  }
</script>

<style scoped>

</style>
