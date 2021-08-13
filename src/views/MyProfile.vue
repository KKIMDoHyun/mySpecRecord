<template>
  <div>
    <h2>My Profile</h2>
    <div class="name">
        이름: {{ this.$store.state.userInfo.name }}
        <br>
        생년월일: {{ this.$store.state.userInfo.birthday }}
        <br>
        전화번호: {{ this.$store.state.userInfo.phoneNumber }}
        <br>
        대학교: {{ this.$store.state.userInfo.university }}
        <br>
        자기소개: {{ this.$store.state.userInfo.introduction }}
        <br>
        <router-link to="/modification">회원 정보 수정</router-link>
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
textarea {
  resize: none;
}

</style>