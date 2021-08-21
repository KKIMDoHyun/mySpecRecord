<template>
  <div class="wrapper">
    <div class="content">
      <h2>내 정보</h2>
        이름: {{ user.name }} <span v-if="user.sex">({{ user.sex }})</span>
        <br>
        이메일: {{ user.email }}
        <br>
        생년월일: {{ user.birthday }}
        <br>
        전화번호: {{ user.phoneNumber }}
        <br>
        주소: {{ user.mainAddress }} {{ user.detailAddress }}
        <br>
        <router-link to="/modification">회원 정보 수정</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.userInfo;
    }
  }
};
</script>

<style scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}
</style>