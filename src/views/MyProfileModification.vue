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
            :state="nameState"
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
          :state="sexState"
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
          :state="emailState"
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
          :state="birthdayState"
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
          :state="phoneNumberState"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        label="주소"
        label-for="address"
        label-cols-sm="3"
        label-align-sm="right"
      >
      <b-button variant="outline-primary" id="addressBtn" @click="searchAddress">우편번호 찾기</b-button>
        <b-form-input 
          id="zonecode"
          class="address"
          content-cols-lg="10"
          v-model="user.zonecode"
          readonly
        ></b-form-input>
        <b-form-input 
          id="mainAddress"
          class="address"
          content-cols-lg="10"
          v-model="user.mainAddress"
          readonly
        ></b-form-input>
        <b-form-input
          id="detailAddress"
          class="address"
          content-cols-lg="10"
          placeholder="상세주소"
          v-model="user.detailAddress"
        ></b-form-input>
      </b-form-group>
    </b-form-group>
  </b-card>
  <div class="text-center" style="margin-top: 3vh">
    <b-button v-on:click="submitInfo">수정 완료</b-button>
  </div>
</div>
</template>

<script>
import { router } from '../routes';
export default {
  data() {
    return {
      user: {
        name: this.$store.state.userInfo.name,
        sex: this.$store.state.userInfo.sex,
        email: this.$store.state.userInfo.email,
        birthday: this.$store.state.userInfo.birthday,
        phoneNumber: this.$store.state.userInfo.phoneNumber,
        
        zonecode: this.$store.state.userInfo.zonecode,
        mainAddress: this.$store.state.userInfo.mainAddress,
        detailAddress: this.$store.state.userInfo.detailAddress,
      },
      options: [
        { text: '남', value: '남'},
        { text: '여', value: '여'}
      ],
      errors: []
    }  
  },
  methods: {
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
                vm.user.zonecode = data.zonecode;
                document.getElementById("mainAddress").value = addr;
                vm.user.mainAddress = addr;

                document.getElementById("detailAddress").focus();
            }
        }).open();
    },
    submitInfo() {
      if (this.nameState &&
          this.sexState &&
          this.emailState &&
          this.birthdayState &&
          this.phoneNumberState) {
        router.push('/')
        this.$store.commit('modifyInfo', this.user);
      } else {
        this.$bvModal.msgBoxOk('필수 항목을 채워주세요!!', {
          title: '경고',
          size: 'md',
          centered: true,
        })
          .then(() => {
            console.log(this.user);
          })
          .catch(err => {
            console.log(err);
            // An error occurred
          })
      }
    },
    // checkForm(e) {
    //   e.preventDefault();
    //   this.errors = [];
    //   if(!this.nameState) {
    //     this.errors.push("이름은 필수입니다!")
    //   }
    //   if(!this.sexState) {
    //     this.errors.push("성별 선택은 필수입니다!")
    //   }
    //   if(!this.emailState) {
    //     this.errors.push("이메일은 필수입니다!")
    //   } else if (!this.validEmail(this.user.email)) {
    //     this.errors.push("이메일 형식을 확인하세요.")
    //   }
    //   if(!this.birthdayState) {
    //     this.errors.push("생일은 필수입니다!")
    //   }
    //   if(!this.phoneNumberState) {
    //     this.errors.push("휴대폰은 필수입니다!")
    //   }
    // },
    validEmail(email) {
      var re = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      return re.test(email)
    },
    validBirthday(birthday) {
      var re = /^(19[0-9][0-9]|20\d{2})-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
      return re.test(birthday);
    },
  },
  computed: {
    nameState() {
      return this.user.name.length > 0 ? true : false;
    },
    sexState() {
      if (this.user.sex == "남" || this.user.sex == "여") {
        return true;
      } else {
        return false;
      }
    },
    emailState() {
      if (this.validEmail(this.user.email)){
        return true;
      } else {
        return false;
      }
    },
    birthdayState() {
      if (this.validBirthday(this.user.birthday)){
        return true;
      } else {
        return false;
      }
    },
    phoneNumberState() {
      return this.user.phoneNumber > 0 ? true : false;
    }
  }
}
</script>

<style scoped>
#addressBtn, .address {
  margin-bottom: 10px;
}
</style>