<template>
  <div>
    <b-card bg-variant="light">
      <!-- 이름 -->
      <b-form-group
        label-cols-lg="3"
        content-cols-lg="10"
        label="기본 정보"
        label-size="lg"
        label-class="font-weight-bold pt-3"
        class="mb-1"
      >
        <b-form-group
          label="이름 (필수)"
          label-for="name"
          label-cols-sm="3"
          label-align-sm="right"
        >
          <b-form-input 
            id="name"
            placeholder="홍길동"
            type="text"
            v-model="user.name"
            required
          ></b-form-input>
        </b-form-group>
        
      <b-form-group
        label="성별 (필수)"
        v-slot="{ ariaDescribedby }"
      >
        <b-form-radio-group
          v-model="user.sex"
          :options="options"
          :aria-describedby="ariaDescribedby"
          button-variant="outline-primary"
          size="lg"
          name="radio-btn-outline"
          buttons
        ></b-form-radio-group>
      </b-form-group>

      <b-form-group
        label="이메일 (필수)"
        label-for="email"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input 
          id="email"
          placeholder="aaa@aaaa.com"
          type="email"
          v-model="user.email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="생년월일 (필수)"
        label-for="nested-state"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input 
          id="nested-state"
          type="date"
          v-model="user.birthday"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="휴대폰 (필수)"
        label-for="phoneNumber"
        label-cols-sm="3"
        label-align-sm="right"
      >
        <b-form-input 
          id="phoneNumber"
          type="text"
          v-model="user.phoneNumber"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="주소 (필수)"
        label-for="address"
        label-cols-sm="3"
        label-align-sm="right"
      >
      <b-button variant="outline-primary" id="addressBtn" @click="searchAddress">우편번호 찾기</b-button>
        <b-form-input 
          id="zonecode"
          class="address"
          content-cols-lg="10"
          v-model="user.address.zonecode"
          readonly
          required
        ></b-form-input>
        <b-form-input 
          id="mainAddress"
          class="address"
          content-cols-lg="10"
          v-model="user.address.mainAddress"
          readonly
          required
        ></b-form-input>
        <b-form-input
          id="detailAddress"
          class="address"
          content-cols-lg="10"
          placeholder="상세주소"
          v-model="user.address.detailAddress"
          required
        ></b-form-input>
      </b-form-group>
    </b-form-group>
  </b-card>
  <b-button v-on:click="modifyInfo" href="/">수정 완료</b-button>
</div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: this.$store.state.userInfo.name,
        sex: this.$store.state.userInfo.sex,
        email: this.$store.state.userInfo.email,
        birthday: this.$store.state.userInfo.birthday,
        phoneNumber: this.$store.state.userInfo.phoneNumber,
        address: {
          zonecode: this.$store.state.userInfo.zonecode,
          mainAddress: this.$store.state.userInfo.mainAddress,
          detailAddress: this.$store.state.userInfo.detailAddress,
        }
      },
      options: [
        { text: '남', value: '남'},
        { text: '여', value: '여'}
      ]
    }  
  },
  methods: {
    modifyInfo(){
        this.$store.commit('modifyInfo', this.user);  
    },
    searchAddress() {
      const vm = this;
      new window.daum.Postcode({
            oncomplete: function(data) {
                var addr = ''; // 주소 변수
                var extraAddr = ''; // 참고항목 변수

                if (data.userSelectedType === 'R') { 
                    addr = data.roadAddress;
                } else {
                    addr = data.jibunAddress;
                }

                if(data.userSelectedType === 'R'){
                    if(data.bname !== '' && /[동|로|가]$/g.test(data.bname)){
                        extraAddr += data.bname;
                    }
                    if(data.buildingName !== '' && data.apartment === 'Y'){
                        extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                    }
                    if(extraAddr !== ''){
                        extraAddr = ' (' + extraAddr + ')';
                    }
                    document.getElementById("detailAddress").value = extraAddr;
                } else {
                    document.getElementById("detailAddress").value = '';
                }

                document.getElementById('zonecode').value = data.zonecode;
                vm.user.address.zonecode = data.zonecode;
                document.getElementById("mainAddress").value = addr;
                vm.user.address.mainAddress = addr;

                document.getElementById("detailAddress").focus();
            }
        }).open();
    },
    submitInfo() {
      console.log(this.user)
    }
  },
};
</script>

<style scoped>
#addressBtn, .address {
  margin-bottom: 10px;
}
</style>