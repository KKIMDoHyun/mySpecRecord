<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view></router-view>
    <hr>
    <MyAwards></MyAwards>
    <hr>
    <MyCertificate></MyCertificate>
    <FooterView></FooterView>
  </div>
</template>

<script>
import HeaderView from "./views/HeaderView.vue";
import MyAwards from "./views/MyAwards.vue";
import MyCertificate from "./views/MyCertificate.vue";
import FooterView from "./views/FooterView.vue";

export default {
  components: {
    HeaderView,
    MyAwards,
    MyCertificate,
    FooterView,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  overflow: auto;
}
</style>
