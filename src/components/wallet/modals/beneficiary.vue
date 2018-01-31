<template>
  <div class="row">
    <vodalModal :show="beneficiaryModal" animation="zoom" :width="400" :height="500" @hide="clearModals">
      <div>New Beneficiary</div>

      <div class="row col-md-6 mt-10">
        <small>Beneficiary Type</small>
        <select v-model="depositType" id="depositType" class="form-control">
          <option value="bank">Bank Account</option>
          <option value="card">Card</option>
        </select>
      </div>

      <div v-if="depositType == 'bank'" class="row col-md-12 mt-10">
        <small>Bank Region</small>
        <select id="regions" class="form-control">
          <option v-for="region in bankRegions">{{region}}</option>
        </select>
      </div>

      <div class="row col-md-12 mt-10">
        <small>Bank Account Holder's Full Name</small>
        <input type="text" class="form-control" placeholder=" e.g. Danny Blaze" v-model="account_name">
        <small>To protect your security you can only withdraw money to an account in your own name. Please use the full name shown on your bank statements otherwise the withdrawal may be cancelled</small>
      </div>

      <div v-if="depositType == 'bank'" class="row col-md-12 mt-10">
        <small>Bank Account Number</small>
        <input type="text" class="form-control" placeholder=" e.g. 3088467899" v-model="account_number">
      </div>

      <div v-if="depositType == 'card'" class="row col-md-12 mt-10">
        <small>Card Number</small>
        <input type="text" class="form-control" placeholder=" e.g. 3088467899" v-model="card_number">
      </div>


      <input type="submit" class="form-control btn btn-primary mt-10" value="Add Bank Account">
    </vodalModal>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        withdraw_amount:0,
        card_number:'',
        withdraw_fee:200,
        min_withdrawal:400,
        available_balance:0.123,
        depositType: "bank",
        account_number:"",
        account_name:"",
        bankRegions: ['Nigeria', 'Abroad']
      }
    },
    computed:{
      ...mapGetters('modals', [
        'beneficiaryModal',
      ])
    },
    methods:{
      ...mapActions('modals', [
        'clearModals',
      ])
    }
  }
</script>
