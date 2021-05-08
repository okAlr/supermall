<template>
  <div id="app">
    <router-view/>
    <main-bar></main-bar>
  </div>
</template>

<script>
  import MainBar from "./components/content/MainBar";
export default {
  name: 'App',
  components: {MainBar}
}
</script>

<style>
  @import "assets/css/base.css";
</style>
