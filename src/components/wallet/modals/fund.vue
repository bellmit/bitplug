<template>
  <div class="row">
    <vodalModal :show="fundModal" animation="zoom" :width="400" :height="200" @hide="clearModals">
      <div>Deposit Method</div>
      <h5>Which service would you like to use to add money to your BitPlug Wallet</h5>
      <input @click="setbeneficiaryModal" class="form-control btn btn-primary mt-10" value="PayU Debit or Credit Card with PayU">
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
