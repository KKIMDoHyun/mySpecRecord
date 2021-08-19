<template>
  <div>
    <b-card bg-variant="light">
      <h2>수료증 / 자격증</h2>
      <Modal v-on:pass="addCertification"></Modal>
      <b-table class="table" head-variant="light" sticky-header striped hover :fixed="true" :items="this.$store.state.certifications" :fields="fields">
        
        <!-- 수상명 -->      
        <template #cell(name)="data">
          <b-col sm="8">
            <p v-b-popover.hover.top="data.value" title="수상명" v-if="modify == false" class="name">{{data.value}}</p>
            <b-input v-else v-model="data.value"></b-input>
          </b-col>
        </template>

        <!-- 수여기관 -->
        <template #cell(agency)="data">
          <b-col sm="8">
            <p v-b-popover.hover.top="data.value" title="수여기관" v-if="modify == false" class="name">{{data.value}}</p>
            <b-input v-else v-model="data.value"></b-input>
          </b-col>
        </template>

        <!-- 수상/공모일 -->
        <template #cell(date)="data">
          <b-col sm="8">
            <p v-if="modify == false">{{data.value}}</p>
            <b-input type="month" v-else v-model="data.value"></b-input>
          </b-col>
        </template>

        <!-- 관련 URL -->
        <template #cell(link)="data">
            <a class="link" :href="data.value">{{data.value}}</a>
        </template>

        <template #cell(index)="data">
          <span class="remove" @click="removeCertification(data, data.index)">
              <i class="fas fa-trash-alt"></i>
          </span>
        </template>
      </b-table>
    </b-card>
  </div>
</template>

<script>
import Modal from '../components/CertificationModal.vue';
export default {
  data() {
    return {
      fields: [
        {key: 'name', label: '이름'}, 
        {key: 'agency', label: '발행 기관'},
        {key: 'date', label: '발행 날짜'},
        {key: 'link', label: '관련 URL'},
        {key: 'index', label: ''}],
      certificateInfo: {
        name: "",
        agency: "",
        date: "",
        link: ""
      },
      modify: false,
      complete: true,
    }
  },
  components: {
    Modal,
  },
  methods: {
    addCertification(certificationInfo) {
      this.$store.commit('addOneCertificate', JSON.stringify(certificationInfo));
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
.link {
  white-space: nowrap;
  width: 18vw;
  text-overflow: ellipsis; 
  overflow: hidden;
  display: inline-block;
}
.remove {
  text-align: center;
  font-size: 1rem;
  margin-left: 10vw;
  cursor: pointer;
}
h2 {
  margin-bottom: 3vh;
}
.remove {
  text-align: center;
  font-size: 1rem;
  margin-left: 10vw;
  cursor: pointer;
}
i:hover {
  color:red;
  font-size: 1.5rem;
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