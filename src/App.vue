<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view v-bind:propsdata="userInfo"></router-view>
    <MyAwards></MyAwards>
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
  data() {
    return {
      userInfo:{
        name: "",
        birthday: "",
        phoneNumber: "",
        university: "",
        introduction: "",
      }
    }
  },
  components: {
    HeaderView,
    MyAwards,
    MyCertificate,
    FooterView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
input {
  width: 200px;
  border-style: groove;
}
</style>
