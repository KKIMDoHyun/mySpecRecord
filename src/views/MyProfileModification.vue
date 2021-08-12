<template>
    <div class="name">
        이름: <input type="text" v-model="name" required/>
        생년월일: <input type="text" v-model="birthday"/>
        전화번호: <input type="tel" placeholder="010-0000-0000" 
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" v-model="phoneNumber" required/>
        대학교: <input type="text" v-model="university"/>
        자기소개: <textarea rows="6" cols="40" v-model="introduction"></textarea>
        <router-link v-on:click="modifyUser()" to="/">제출</router-link>
    </div>
</template>

<script>
export default {
  data() {
    return {
        name: "",
        birthday: "",
        phoneNumber: "",
        university: "",
        introduction: "",
    }
  },
  methods: {
    modifyUser() {
      console.log(this.name, this.birthday, this.phoneNumber, this.university, this.introduction);
    }
  }
};
</script>

<style scoped>
</style>