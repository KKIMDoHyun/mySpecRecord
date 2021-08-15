<template>
  <div>
    <h2>수상 내역</h2>
    <button v-on:click="addAward">+ 추가</button>
    <div v-if="showAddAward == true">
      날짜 : <input type="month" v-model="award.date">
      활동명: <input type="text" v-model="award.awardName">
      세부사항: <textarea cols="30" rows="10" v-model="award.detail"></textarea>
      <button v-on:click="completeAward">완료</button>
      <button v-on:click="cancelAward">X</button>
    </div>
    <transition-group name="list" tag="ul">
      <li v-for="(award) in this.$store.state.awardList" v-bind:key="award.awardName">
        <span> 발행날짜: {{ award.date }} </span>
        <span> 이름: {{ award.awardName }} </span>
        <span> 발행기관: {{ award.detail }} </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAddAward: false,
      award: {
        date: "",
        awardName: "",
        detail: ""
      }
    }
  },
  methods: {
    addAward() {
      this.showAddAward = true
    },
    cancelAward() {
      this.showAddAward = false
    },
    completeAward() {
      this.$store.commit('addOneAward', JSON.stringify(this.award))
      // this.clearInput();
    },
    clearInput() {
      this.award.date = "";
      this.award.awardName = "";
      this.award.detail = "";
    }
  }
};
</script>

<style scoped>
</style>