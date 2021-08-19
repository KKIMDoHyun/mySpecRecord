<template>
  <div>
    <b-card bg-variant="light">
      <h2>수료증 / 자격증</h2>
      <Modal v-on:pass="addCertification"></Modal>
      <b-table class="table" head-variant="light" sticky-header striped hover :fixed="true" :items="this.$store.state.certifications" :fields="fields">
        <template #cell(link)="data">
            <a :href="data.value">{{data.value}}</a>
          <span class="remove btn" @click="removeCertification(data, data.index)">X</span>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue';
export default {
  data() {
    return {
      fields: [
        {key: 'name', label: '이름'}, 
        {key: 'agency', label: '발행 기관'},
        {key: 'date', label: '발행 날짜'},
        {key: 'link', label: '관련 URL'}],
      modalStatus: false,
      certificateInfo: {
        name: "",
        agency: "",
        date: "",
        link: ""
      },
      maxDate: new Date()
    }
  },
  components: {
    Modal,
  },
  methods: {
    addCertification(certificationInfo) {
      this.$store.commit('addOneCertificate', JSON.stringify(certificationInfo));
    },
    addCertificate() {
      this.$store.commit('addOneCertificate', JSON.stringify(this.certificateInfo));
      this.closeModal();
    },
    closeModal() {
      this.modalStatus = !this.modalStatus;
      this.clearInput();
    },
    clearInput() {
      this.certificateInfo.name = '';
      this.certificateInfo.agency = '';
      this.certificateInfo.date = '';
      this.certificateInfo.link = '';
    },
    removeCertification(certification, index) {
      this.$store.commit('removeOneCertification', {certification, index});
    }
  }
};
</script>

<style scoped>
.table {
  margin-top: 1vw;
}
h2 {
  margin-bottom: 3vh;
}
.remove {
  float:right;
  width: 3vw;
  height: 3vh;
  text-align: center;
  cursor: pointer;
}
span:hover {
  color:red;
  -webkit-animation: shake 0.4s ease-in-out .1s infinite alternate;
}
@-webkit-keyframes shake {
  from{
    -webkit-transform: rotate(10deg);
  }
  to{
    -webkit-transform: rotate(-10deg);
    -webkit-transform-origin: center center;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}


</style>