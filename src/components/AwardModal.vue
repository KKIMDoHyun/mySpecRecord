<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>추가하기</b-button>
    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      size="lg"
      title="수상 내용 입력"
      @show="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="수상명"
          class="container"
          label-for="name-input"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            class="input"
            v-model="awardInfo.awardName"
            :state="nameState"
            placeholder="수상명 입력"
            required
          ></b-form-input>
        <b-form-invalid-feedback id="name-input-feedback">
            수상명을 입력해주세요.
        </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          label="수여기관"
          class="container"
          label-for="agency-input"
          :state="agencyState"
        >
          <b-form-input
            id="agency-input"
            class="input"
            v-model="awardInfo.agency"
            :state="agencyState"
            placeholder="수여기관 입력"
            required
          ></b-form-input>
            <b-form-invalid-feedback id="agency-input-feedback">
                수여기관을 입력해주세요.
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          label="수상/공모일"
          label-for="date-input"
          class="container"
          :state="dateState"
        >
          <b-form-input
            id="date-input"
            class="input"
            v-model="awardInfo.date"
            type="month"
            :state="dateState"
            required
          ></b-form-input>
            <b-form-invalid-feedback id="date-input-feedback">
                날짜를 기록해주세요.
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          label="상세 내용"
          label-for="detail-input"
          class="container"
        >
          <b-form-input
            id="detail-input"
            class="input"
            v-model="awardInfo.detail"
            placeholder="상세 내용 입력"
          ></b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
data() {
      return {
        awardInfo: {
            awardName: "",
            agency: "",
            date: "",
            detail: ""
        }
      }
    },
    methods: {
      resetModal() {
        this.awardInfo.awardName = ''
        this.awardInfo.agency = ''
        this.awardInfo.date = ''
        this.awardInfo.detail = ''
      },
      checkFormValidity() {
        const valid = this.$refs.form.checkValidity()
        return valid
      },
      handleOk(bvModalEvt) {
        // Prevent modal from closing
        bvModalEvt.preventDefault()
        // Trigger submit handler
        this.handleSubmit()
      },
      handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        this.$emit('pass', this.awardInfo);
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    },
    computed: {
      nameState() {
        return this.awardInfo.awardName.length > 0 ? true : false
      },
      agencyState() {
        return this.awardInfo.agency.length > 0 ? true : false
      },
      dateState() {
        return this.awardInfo.date.length ? true : false
      }
    },
}
</script>

<style scoped>
.container {
    margin-bottom: 10px;
}
</style>