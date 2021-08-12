<template>
  <div id="app">
    <HeaderView></HeaderView>
    <router-view v-bind:propsdata="userInfo" 
                 v-on:modifyInfo="modifyInfo"></router-view>
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
  methods: {
    modifyInfo(info) {
      console.log("after" + info)
    }
  },
  watch: {
    userInfo(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
/* input {
  width: 200px;
  border-style: groove;
} */
</style>
