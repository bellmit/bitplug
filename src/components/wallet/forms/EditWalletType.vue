<template>
  <div class="row">
  <div class="col-sm-6 col-md-6 col-sm-offset-3 col-md-offset-3">
  <div class="card">
    <div class="header">
      <h4 class="title">Edit Wallet Type</h4>
    </div>
    <div class="content">
      <form @submit.prevent="validateBeforeSubmit">
        <BannerError v-if="error" :exempt="true">{{ error }}</BannerError>

        <div class="row"></div>
        <div class="col-md-6">
          <fg-input v-validate="'required|min:3|max:20'" 
                    type="text" 
                    :class="{'input': true, 'is-danger': errors.has('title') }" 
                    name="title" 
                    label="Title"
                    placeholder="NGN wallet"
                    v-model="walletType.title">
          </fg-input>

          <FieldError>
              {{ errors.first('title') || fieldErrors.title }}
          </FieldError>
        </div>

        <div class="col-md-6">
          <fg-input v-validate="'min:2|max:5|required'" 
                    type="text" 
                    :class="{'input': true, 'is-danger': errors.has('currency') }" 
                    name="currency" 
                    label="Currency"
                    placeholder="NGN"
                    v-model="walletType.currency">
          </fg-input>

          <FieldError>
              {{ errors.first('currency') || fieldErrors.currency }}
          </FieldError>
        </div>

        <div class="col-md-12">
          <fg-input v-validate="'required'" 
                    type="decimal"
                    :class="{'input': true, 'is-danger': errors.has('balance') }" 
                    name="balance" 
                    label="Initial Balance"
                    placeholder="0.00"
                    v-model="walletType.initialBalance">
          </fg-input>

          <FieldError>
              {{ errors.first('balance') || fieldErrors.balance }}
          </FieldError>
        </div>


        <div class="col-md-6">
          <select v-model="walletType.actions" v-validate="'required'" multiple class="selectpicker">
            <option disabled value="">Actions</option>
            <option value="1">Fund</option>
            <option value="2">Withdraw</option>
            <option value="3">Recieve</option>
            <option value="4">Send</option>
          </select>
          <FieldError>
              {{ errors.first('actions') || fieldErrors.actions }}
          </FieldError>
        </div>

        <div class="col-md-6">
          <select v-model="walletType.feeId" v-validate="'required'" class="selectpicker">
            <option disabled value="0">Fee</option>
            <option value="1">20</option>
            <option value="2">30</option>
            <option value="3">40</option>
            <option value="4">50</option>
          </select>
          <FieldError>
            {{ errors.first('fee') || fieldErrors.fee }}
          </FieldError>
          <br>
        </div>
        
        <div class="text-center">
          <button v-if="!loading" type="submit" class="btn btn-info btn-fill btn-wd">
          Edit
          </button>
          <LoadingButton v-else buttonclass="btn btn-info btn-fill btn-wd">Editting...</LoadingButton>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex"

export default {
  name: "edit-wallet-type",
  destroyed() {
    this.$_$destroyedHook()
  },
  components: {
  },
  data() {
    return {
      walletType: {
        title: "",
        actions: [],
        currency: "",
        initialBalance: null,
        feeId: 0,
        isCrypto: ""
      },
    }
  },
  computed: {
    ...mapGetters("register", ["error", "fieldErrors", "loading"])
  },
  methods: {
    ...mapActions("register", ["register", "resetState", "clearErrors"]),

    clearFields() {
      this.walletType = {
        title: "",
        actions: [],
        currency: "",
        initialBalance: null,
        feeId: "",
        isCrypto: ""
      }
    },

    validateBeforeSubmit() {
      console.log(this.walletType)
      this.$validator.validateAll().then(result => {
        if (result) {
          // eslint-disable-next-line
          // Set arguments for endpoint
          let args = {
            title: this.walletType.title,
            actions: this.walletType.actions,
            currency: this.walletType.currency.toUpperCase(),
            initialBalance: this.walletType.initialBalance,
            feeId: this.walletType.feeId,
            isCrypto: this.walletType.isCrypto
          }

          const self = this
          this.register(args).then(function(status) {
            if (status.state === true) {
              self.clearFields()
              self.$_$redirectLoginNoBack()
            }
          })
          return
        }
      })
    }
  }
}
</script>
<style>

</style>
