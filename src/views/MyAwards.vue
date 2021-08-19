<template>
  <div>
    <b-card bg-variant="light">
      <h2>수상 내역</h2>
      <Modal v-on:pass="addAward"></Modal>
      <b-table class="table" 
        head-variant="light" 
        sticky-header 
        striped
        hover 
        :fixed="true" 
        :items="this.$store.state.awardList" 
        :fields="fields"
        :select-mode="selectMode"
        ref="selectableTable"
        selectable
        @row-selected="onRowSelected"
        >
        <!-- 수상명 -->      
        <template #cell(awardName)="data">
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

        <!-- 상세 내용 -->
        <template #cell(detail)="data">
            <p v-b-popover.hover.top="data.value" title="상세 내용" v-if="modify == false" class="detail" >{{data.value}}</p>
            <b-form-textarea v-else
              v-model="data.value"
              rows="4"
              max-rows="5"></b-form-textarea>
        </template>
        
        <!-- selected -->
        <template #cell(selected)="{ rowSelected }">
          <template v-if="rowSelected">
            <span class="sr-only" >Selected</span>
          </template>
          <template v-else>
            <span class="sr-only">Not selected</span>
          </template>
        </template>

        <template #cell(index)="data">
          <span class="remove" @click="removeAward(data, data.index)">
              <i class="fas fa-trash-alt"></i>
          </span>
        </template>
      </b-table>
      
    </b-card>
    <div class="text-center">
      <template v-if="complete==true">
        <b-button @click="modifyAward()">수정하기</b-button>
      </template>
      <template v-else>
        <b-button @click="submitAward()">완료</b-button>
      </template>
    </div>
  </div>
</template>

<script>
import Modal from '../components/AwardModal.vue';

export default {
  data() {
    return {
      selected: [],
      selectMode: 'single',
      fields: [
        {key: 'awardName', label: '수상명'},
        {key: 'agency', label: '수여기관'}, 
        {key: 'date', label: '수상/공모일'},
        {key: 'detail', label: '상세 내용'},
        {key: 'selected', label: ''},
        {key: 'index', label: ''}],
      awardInfo: {
        awardName: "",
        agency: "",
        date: "",
        detail: "",
      },
      modify: false,
      complete: true,
    }
  },
  components: {
    Modal,
  },
  methods: {
    onRowSelected(items) {
        this.selected = items
        console.log(JSON.parse(JSON.stringify(this.$store.state.awardList)))
        if(this.selected.length != 0){
          console.log(JSON.parse(JSON.stringify(this.selected[0])))
        }
    },
    addAward(awardInfo) {
      this.$store.commit('addOneAward', JSON.stringify(awardInfo));
    },
    removeAward(award, index) {
      this.$store.commit('removeOneAward', {award, index});
    },
    modifyAward() {
      this.modify = true;
      this.complete = false;
    },
    submitAward() {
      this.modify = false;
      this.complete = true;
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
.name {
  white-space: nowrap;
  width: 10vw;
  text-overflow: ellipsis; 
  overflow: hidden;
  display: inline-block;
}
.detail {
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
</style>