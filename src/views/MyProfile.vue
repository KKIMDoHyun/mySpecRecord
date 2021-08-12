<template>
  <div>
    <h2>My Profile</h2>
    <div class="name">
        이름: {{propsdata.name}}
        <br>
        생년월일: {{propsdata.birthday}}
        <br>
        전화번호:{{propsdata.phoneNumber}}
        <br>
        대학교: {{propsdata.university}}
        <br>
        자기소개: {{propsdata.introduction}}
        <br>
        <router-link to="modification">회원 정보 수정</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  data() {
    return {
      
    }
  },
};
</script>

<style scoped>
textarea {
  resize: none;
}

</style>