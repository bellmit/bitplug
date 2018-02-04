<template>
  <div class="row">
    <vodalModal :show="fundModal" animation="zoom" :width="400" :height="200" @hide="clearModals">
      <div>Deposit Method</div>
      <h5>Which service would you like to use to add money to your BitPlug Wallet</h5>
      <button type="button" @click="setbeneficiaryModal" class="btn btn-info btn-block btn-fill btn-wd mt-10">
        PayU Debit or Credit Card with PayU
      </button>
    </vodalModal>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    computed:{
      ...mapGetters('modals', [
        'fundModal',
      ]),
      ...mapGetters('wallet', [
        'selectedWallet'
      ])
    },
    methods:{
      ...mapActions('modals', [
        'clearModals',
        'setbeneficiaryModal'
      ])
    }
  }
</script>
