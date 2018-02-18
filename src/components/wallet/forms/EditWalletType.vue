<template>
  <div class="row">
  <div class="col-sm-6 col-md-6 col-sm-offset-3 col-md-offset-3">
  <div class="card">
    <div class="header">
      <h4 class="title">Edit Wallet Type</h4>
    </div>
    <div class="content">
      <form @submit.prevent="editwalletById">
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
          <fg-input v-validate="'required|decimal'"
                    :class="{'input': true, 'is-danger': errors.has('balance') }" 
                    name="balance" 
                    label="Initial Balance"
                    placeholder="0.00"
                    v-model="walletType.initial_balance">
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
          <select v-model="walletType.fee_id" v-validate="'required'" class="selectpicker">
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
  data() {
    return {
      walletType: {
        title: "",
        actions: [],
        currency: "",
        initial_balance: null,
        feeId: 0,
        isCrypto: ""
      },
    }
  },
  computed: {
    ...mapGetters("admin", ["loading", "fieldErrors", "error", "success", "walletById"])
  },
  mounted() {
    this.getWalletTypeByID();
  },
  methods: {
    ...mapActions("admin", ["editWalletType", "getWalletById"]),
    ...mapActions("userCredentials", ["callWithToken"]),
    getWalletTypeByID() {
      let args = {
        id: this.$route.params.walletId
      }
      this.callWithToken({
        parameters: args,
        action: this.getWalletById
      }).then(() => {
        this.setWalletDetails()
      })
    },
    setWalletDetails() {
      // Updating component with data from api
      this.walletType.title = this.walletById.title
      this.walletType.actions = this.walletById.actions
      this.walletType.currency = this.walletById.currency
      this.walletType.fee_id = this.walletById.fee_id
      this.walletType.initial_balance = this.walletById.initial_balance
    },
    editwalletById() {
      let args = {
        title: this.walletType.title,
        actions: this.walletType.actions,
        currency: this.walletType.currency.toUpperCase(),
        initial_balance: this.walletType.initial_balance,
        fee_id: this.walletType.fee_id,
        // isCrypto: this.walletType.isCrypto,
        id: this.$route.params.walletId
      }
      this.callWithToken({
        parameters: args,
        action: this.editWalletType
      }).then(() => {
        if(this.success) {
          this.$router.push('/admin/wallet')          
        }
        this.platformWallets = this.platformWal
      })
    },
  }
}
</script>
<style>

</style>
