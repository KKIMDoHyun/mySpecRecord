<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "./components/TopBar.vue";
// import MyAwards from "./views/MyAwards.vue";
// import MyCertificate from "./views/MyCertificate.vue";
import FooterView from "./components/FooterView.vue";

export default {
  components: {
    HeaderView,
    FooterView,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  overflow: auto;
}

</style>
