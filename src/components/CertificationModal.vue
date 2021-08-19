<template>
  <div>
    <b-button v-b-modal.modal-prevent-closing>추가하기</b-button>

    <b-modal
      id="modal-prevent-closing"
      ref="modal"
      size="lg"
      title="수료증 / 자격증 정보 입력"
      @show="resetModal"
      @ok="handleOk"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="이름"
          class="container"
          label-for="name-input"
          :state="nameState"
        >
          <b-form-input
            id="name-input"
            class="input"
            v-model="certificationInfo.name"
            :state="nameState"
            placeholder="이름"
            required
          ></b-form-input>
        <b-form-invalid-feedback id="name-input-feedback">
            이름을 입력해주세요.
        </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          label="발행기관"
          class="container"
          label-for="agency-input"
          :state="agencyState"
        >
          <b-form-input
            id="agency-input"
            class="input"
            v-model="certificationInfo.agency"
            :state="agencyState"
            placeholder="발행기관"
            required
          ></b-form-input>
            <b-form-invalid-feedback id="agency-input-feedback">
                발행기관을 입력해주세요.
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          label="발행날짜"
          label-for="date-input"
          class="container"
          :state="dateState"
        >
          <b-form-input
            id="date-input"
            class="input"
            v-model="certificationInfo.date"
            type="month"
            :state="dateState"
            required
          ></b-form-input>
            <b-form-invalid-feedback id="date-input-feedback">
                날짜를 입력해주세요.
            </b-form-invalid-feedback>
        </b-form-group>

        <b-form-group
          label="관련 URL"
          label-for="url-input"
          class="container"
        >
          <b-form-input
            id="url-input"
            class="input"
            v-model="certificationInfo.link"
            placeholder="관련 링크"
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
        certificationInfo: {
            name: "",
            agency: "",
            date: "",
            link: ""
        }
      }
    },
    methods: {
      resetModal() {
        this.certificationInfo.name = ''
        this.certificationInfo.agency = ''
        this.certificationInfo.date = ''
        this.certificationInfo.link = ''
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
        this.$emit('pass', this.certificationInfo);
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      }
    },
    computed: {
      nameState() {
        return this.certificationInfo.name.length > 0 ? true : false
      },
      agencyState() {
        return this.certificationInfo.agency.length > 0 ? true : false
      },
      dateState() {
        return this.certificationInfo.date.length ? true : false
      }
    },
}
</script>

<style scoped>
.container {
    margin-bottom: 10px;
}
</style>