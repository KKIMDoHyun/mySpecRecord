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
  data() {
    return {
      
    }
  },
  components: {
    HeaderView,
    MyAwards,
    MyCertificate,
    FooterView,
  },
  methods: {
    console() {
      console.log("DDDD");
    },
    modifyInfo(name, birthday, phoneNumber, university, introduction) {
      console.log("after" +name, birthday, phoneNumber, university, introduction);
    }
  },
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
