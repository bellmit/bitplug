<template>
<span>
    <div class="row">

      <fund></fund>
      <beneficiary></beneficiary>
      <receive></receive>
      <withdraw></withdraw>
      <send></send>

      <div class="col-lg-4 col-md-5" v-for="(wallet, index) in wallets" :key="index">
        <WalletCard
          :wallet="wallet"
          :title="wallet.title"
          :image="wallet.image"
          :balance="wallet.balance"
          :available="wallet.available"
          :actions="wallet.actions">
        </WalletCard>
      </div>
    </div>
</span>
</template>
<script>
  import WalletCard from './walletCard'
  import Fund from './modals/fund.vue'
  import Beneficiary from './modals/beneficiary.vue'
  import Receive from './modals/receive.vue'
  import Withdraw from './modals/withdraw.vue'
  import Send from './modals/send.vue'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    components: {
      WalletCard,
      Beneficiary,
      Receive,
      Withdraw,
      Send,
      Fund
    },
    data () {
      return {
        wallets: [
          {
              id:1,
            title: 'NGN Wallet',
            image: 'static/img/faces/face-0.jpg',
            balance: '5000.00',
            available: '5000.00',
            type:'NGN',
            actions: ['fund', 'withdraw'],
          },
          {
            id:2,
            title: 'BTC Wallet',
            image: 'static/img/faces/face-0.jpg',
            balance: '0.00',
            available: '0.00',
            type:'BTC',
            actions: ['send','recieve'],
          },
          {
            id:3,
            title: 'ETH Wallet',
            image: 'static/img/faces/face-0.jpg',
            balance: '0.0103790',
            available: '0.0103790',
            type:'ETH',
            actions: ['send','recieve'],
          }
        ]
      }
    }
  }

</script>
<style>

</style>
