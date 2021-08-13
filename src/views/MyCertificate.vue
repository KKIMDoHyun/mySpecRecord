<template>
  <div>
    <h2>Certificate</h2>
    <span class="addContainer">
      <i class="fas fa-plus" v-on:click="modalStatus = true"></i>
    </span>
    <div class="modal" v-if="modalStatus">
      <div class="modal-overlay"></div>
      <div class="modal-content">
          <i class="fas fa-times close" v-on:click="closeModal"></i>
          <h1>수료증 등록</h1>
          <span>이름:</span> <input type="text" v-model="certificateInfo.name">
          <br>
          <span>발행기관:</span> <input type="text" v-model="certificateInfo.agency">
          <br>
          <span>발행일:</span> <input type="month" v-model="certificateInfo.date">
          <br>
          <span>링크:</span> <input type="text" v-model="certificateInfo.link">
          <br>
          <button v-on:click="addCertificate">추가</button>
      </div>
    </div>
    <transition-group name="list" tag="ul">
      <li v-for="(certification, index) in this.$store.state.certifications" v-bind:key="certification">
        <span>{{ index }} </span>
        <span> 이름: {{ certification.name }} </span>
        <span> 발행기관: {{ certification.agency }} </span>
        <span> 발행날짜: {{ certification.date }} </span>
        <span> 관련 URL: <a v-bind:href="certification.link">{{ certification.link }}</a> </span>
      </li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalStatus: false,
      certificateInfo: {
        name: "",
        agency: "",
        date: "",
        link: ""
      }
    }
  },
  methods: {
    addCertificate() {
      this.$store.commit('addOneCertificate', this.certificateInfo)
      this.modalStatus = !this.modalStatus;
    },
    closeModal() {
      this.modalStatus = !this.modalStatus;
    },
    // clearInput() {
    //   this.certificateInfo.name = '';
    //   this.certificateInfo.agency = '';
    //   this.certificateInfo.date = '';
    //   this.certificateInfo.link = '';
    // }
  }
};
</script>

<style scoped>
h1 {
  margin: 0;
}
.close {
  cursor: pointer;
}
.addContainer{
  cursor: pointer;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-overlay {
  background-color: rgba(0,0,0,0.6);
  width: 100%;
  height: 100%;
  position: absolute;

}
.modal-content {
  background-color: white;
  padding: 50px 100px;
  text-align: center;
  position: relative;
  border-radius: 10px;
  width: 50%;
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

input {
  margin: 0;
  width: 200px;
  border-style: groove;
}
</style>