<template>
    <div class="name">
        이름: <input type="text" v-model="info.name" required/>
        생년월일: <input type="text" v-model="info.birthday"/>
        전화번호: <input type="tel" placeholder="010-0000-0000" 
                    pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" v-model="info.phoneNumber" required/>
        대학교: <input type="text" v-model="info.university"/>
        자기소개: <textarea rows="6" cols="40" v-model="info.introduction"></textarea>
        <router-link v-on:click.native="modifyInfo" to="/">제출</router-link>
    </div>
</template>

<script>
export default {
  props:['propsdata'],
  data() {
    return {
      info: {
        name: "",
        birthday: "",
        phoneNumber: "",
        university: "",
        introduction: "",
      } 
    }
  },
  methods: {
    modifyInfo() {
      this.$emit('modifyInfo', this.info)
    }
  }
};
</script>

<style scoped>
</style>