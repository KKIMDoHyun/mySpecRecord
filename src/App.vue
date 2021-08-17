<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view></router-view>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "./components/HeaderView.vue";
// import MyAwards from "./components/MyAwards.vue";
// import MyCertificate from "./components/MyCertificate.vue";
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
