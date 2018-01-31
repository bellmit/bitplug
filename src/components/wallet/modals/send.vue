<template>
  <div>
    <vodalModal :show="sendModal" animation="zoom" :width="400" :height="600" @hide="clearModals">
      <div><i class="fa fa-arrow-up"></i> Send {{selectedWallet.title}}.</div>
      <div class="text-center mt-10">
        <div class="col-md-12">
          <qrcode value="Hello, World!" :options="{ size: 150 }"></qrcode>
        </div>
        <div class="col-md-6 mt-10">
          <span v-if="selectedWallet.type == 'BTC'">BTC</span>
          <span v-else>ETH</span>
          <input type="text" name="" class="form-control" :value="0 ">
        </div>
        <div class="col-md-6 mt-10">
          <span>USD</span>
          <input type="text" class="form-control" :value="0">
        </div>
        <div class="col-md-12 mt-10">
          <div class="mt-10">
            <span>Address</span>
            <input type="text" class="form-control " :value="0">
          </div>
          <div class="mt-10">
            <span>Description</span>
            <textarea class="form-control mt-10" name="" id="" cols="30" rows="3"></textarea>
          </div>

          <p>
            <strong>Transaction Fee</strong><br>
            <span v-if="selectedWallet.type == 'BTC'">0.0000483 BTC (0.56 USD)</span>
            <span v-else>0.000483 ETH (0.56 USD)</span>
          </p>
          <button type="submit" class="btn btn-info btn-block btn-fill btn-wd mt-10">
            Copy Address
          </button>
        </div>
      </div>
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
        'sendModal',
      ]),
      ...mapGetters('wallet', [
        'selectedWallet'
      ])
    },
    methods:{
      ...mapActions('modals', [
        'clearModals',
      ])
    }
  }

</script>
