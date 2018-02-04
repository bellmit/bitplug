<template>
  <div>
    <vodalModal :show="withdrawModal" animation="zoom" :width="400" :height="400" @hide="clearModals">
      <div>Withdraw</div>

      <div class="row col-md-6 mt-10">
        <small>To</small>
        <select v-model="bank" id="bank" class="form-control">
          <option :value="bank">Bank Account</option>
        </select>
      </div>

      <div class="row col-md-12 mt-10">
        <small>NGN amount (including fee)</small>
        <input type="text" class="form-control" placeholder=" e.g. Danny Blaze" v-model="withdraw_amount">
      </div>
      <hr>
      <div class="row col-md-12 mt-10">
        <div class="row col-md-9">
          <span>Your Available Balance</span>
        </div>
        <div class="row col-md-3">
          <span>{{available_balance}}</span>
        </div>
      </div>

      <div class="row col-md-12 mt-10">
        <div class="row col-md-9">
          <span>Withdrawal Fee</span>
        </div>
        <div class="row col-md-3">
          <span>{{withdraw_fee}}</span>
        </div>
      </div>

      <div class="row col-md-12 mt-10">
        <div class="row col-md-9">
          <span>Minimum Withdrawal (Including Fee)</span>
        </div>
        <div class="row col-md-3">
          <span>{{min_withdrawal}}</span>
        </div>
      </div>

      <button type="submit" class="btn btn-info btn-block btn-fill btn-wd mt-10">
        Withdraw
      </button>
    </vodalModal>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        bank:"",
        withdraw_amount:0,
        withdraw_fee:200,
        min_withdrawal:400,
        available_balance:0.123,
        depositType: "bank",
        account_number:"",
        account_name:"",
        bankRegions: ['Nigeria', 'Abroad'],
      }
    },
    computed:{
      ...mapGetters('modals', [
        'withdrawModal'
      ])
    },
    methods:{
      ...mapActions('modals', [
        'clearModals',
      ])
    }
  }

</script>
