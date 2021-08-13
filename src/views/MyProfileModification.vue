<template>
    <div class="name">
        이름: <input type="text" v-model="user.name" required/>
        생년월일: <input type="date" v-model="user.birthday"/>
        전화번호: <input type="tel" placeholder="010-0000-0000" 
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" v-model="user.phoneNumber" required/>
        대학교: <input type="text" v-model="user.university"/>
        자기소개: <textarea rows="6" cols="40" v-model="user.introduction"></textarea>
        <router-link v-on:click.native="modifyInfo" to="/">제출</router-link>
    </div>
</template>

<script>
export default {
  props:['propsdata'],
  data() {
    return {
      user: {
        name: this.$store.state.userInfo.name,
        birthday: this.$store.state.userInfo.birthday,
        phoneNumber: this.$store.state.userInfo.phoneNumber,
        university: this.$store.state.userInfo.university,
        introduction: this.$store.state.userInfo.introduction
      }
    }  
  },
  methods: {
    modifyInfo(){
      this.$store.commit('modifyInfo', this.user)
    }
  }
};
</script>

<style scoped>
</style>