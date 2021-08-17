<template>
  <div>
    <h2>내 정보</h2>
    <div class="name">
        {{ this.$store.state.userInfo.name }} ({{ this.$store.state.userInfo.sex }})
        <br>
        이메일: {{ this.$store.state.userInfo.email }}
        <br>
        생년월일: {{ this.$store.state.userInfo.birthday }}
        <br>
        전화번호: {{ this.$store.state.userInfo.phoneNumber }}
        <br>
        주소: {{ this.$store.state.userInfo.address.mainAddress }} {{ this.$store.state.userInfo.address.detailAddress }}
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

</style>