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
}
.fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-out;
}

.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
</style>
