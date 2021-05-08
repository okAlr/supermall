<template>
  <div id="app">
    <main-bar></main-bar>
    <router-view/>
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
