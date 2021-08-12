<template>
  <div>
    <h2>Certificate</h2>
    <span class="addContainer">
      <i class="fas fa-plus" v-on:click="modal"></i>
    </span>
    <div class="modal" v-if="modalStatus">
      <div class="modal-overlay"></div>
      <div class="modal-content">
          <h1>수료증 등록</h1>
          <span>이름:</span> <input type="text" v-model="name">
          <br>
          <span>발행기관:</span> <input type="text" v-model="agency">
          <br>
          <span>발행일:</span> <input type="month" v-model="date">
          <br>
          <span>링크:</span> <input type="text" v-model="link">
          <br>
          <button v-on:click="modal">추가</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalStatus: false,
      name: "",
      agency: "",
      date: "",
      link: ""
    }
  },
  methods: {
    modal() {
      this.modalStatus = !this.modalStatus;
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 0;
}
.addContainer {
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