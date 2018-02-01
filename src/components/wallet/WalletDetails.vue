<template>
<span>
      <fund></fund>
      <beneficiary></beneficiary>
      <receive></receive>
      <withdraw></withdraw>
      <send></send>
  <div class="col-md-6 col-md-offset-3">
    <div class="col-md-6"><h4 @click="details = true">Details</h4></div>
    <div class="col-md-6"><h4 @click="details = false">Transactions</h4></div>
  </div>
  <div v-if="details"  class="col-md-12">
    <WalletDetails
      :title="wallet.title"
      :image="wallet.image"
      :balance="wallet.balance"
      :available="wallet.available"
      :actions="wallet.actions"
    >
    </WalletDetails>
  </div>
  <div v-else class="col-md-12">
    <transaction ></transaction>
  </div>

</span>
</template>
<script>
  import Transaction from './details/transactions.vue'
  import WalletDetails from './details/details.vue'
  import Fund from './modals/fund.vue'
  import Beneficiary from './modals/beneficiary.vue'
  import Receive from './modals/receive.vue'
  import Withdraw from './modals/withdraw.vue'
  import Send from './modals/send.vue'

  export default {
    components: {
      Transaction,
      WalletDetails,
      Beneficiary,
      Receive,
      Withdraw,
      Send,
      Fund
    },
    data () {
      return {
        wallet: {
          id:1,
          title: 'NGN Wallet',
          image: 'static/img/faces/face-0.jpg',
          balance: '5000.00',
          available: '5000.00',
          type:'NGN',
          actions: ['fund', 'withdraw'],
        },
        details:true

      }
    },
    methods: {
    }
  }

</script>
<style>

</style>
