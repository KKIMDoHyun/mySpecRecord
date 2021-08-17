<template>
  <div>
    <h2>수료증 / 자격증</h2>
    <span class="addContainer">
      <i class="fas fa-plus btn" v-on:click="modalStatus = true"></i>
    </span>
    <transition name="fade" appear>
      <div class="modal-overlay" v-if="modalStatus"></div>
    </transition>
    <form @submit="addCertificate">
      <transition name="fade" appear>
        <div class="modal" v-if="modalStatus">
          <i class="fas fa-times btn" v-on:click="closeModal"></i>
            <h1>수료증 등록</h1>
            <div>
              <label for="certificationName">이름: </label>
              <input id="certificationName" type="text" v-model="certificateInfo.name" required>
              <span class="validity"></span>
            </div>
            <div>
              <label for="agency">발행기관: </label>
              <input id="agency" type="text" v-model="certificateInfo.agency" required>
              <span class="validity"></span>
            </div>
            <div>
              <label for="date">발행날짜: </label>
              <input id="date" type="month" max="2021-12" min="1990-01" v-model="certificateInfo.date" required>
              <span class="validity"></span>
            </div>
            <div>
              <label for="link">링크: </label>
              <input id="link" type="text" v-model="certificateInfo.link">
            </div>
            <button type="submit" class="addBtn">추가</button>
        </div>
      </transition>
    </form>

    <transition-group name="list" tag="ul">
      <li v-for="(certification, index) in this.$store.state.certifications" v-bind:key="index">
        <span>{{ index+1 }} |</span>
        <span> 이름: {{ certification.name }} </span>
        <span> 발행기관: {{ certification.agency }} </span>
        <span> 발행날짜: {{ certification.date }} </span>
        <span> 관련 URL: <a v-bind:href="certification.link">{{ certification.link }}</a> </span>
        <span>
          <i class="fas fa-times btn" v-on:click="removeCertification(certification, index)"></i>
        </span>
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
      },
      maxDate: new Date()
    }
  },
  methods: {
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
.addContainer {
    display: inline-block;
    /* background: linear-gradient(to right, #6478FB, #8763FB); */
    border-radius: 5px 5px 5px 5px;
    transition: 0.5s ease-out;
}
.btn {
  cursor: pointer;
  display: inline-block;
  padding: 15px 25px;
  vertical-align: middle;
  font-size: 30px;
  color: black;
  /* font-weight: 500; */
}
.modal-overlay {
  position: fixed;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 98;
  background-color: rgba(0, 0, 0, 0.4);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;

  width: 100%;
  max-width: 50%;
  background-color: white;
  border-radius: 16px;

  padding: 30px;
}
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 20px;
    text-align: center;
}
li {
    /* display: flex; */
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
input {
  width: 200px;
  border-style: groove;
  margin-top: 15px;
}
.addBtn {
  margin-top: 20px;
}

i:hover {
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

input:invalid+span:after {
  content: '✖';
  
  padding-left: 5px;
}

input:valid+span:after {
  content: '✓';
  padding-left: 5px;
}
</style>