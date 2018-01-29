<template>
<span>
    <div class="row">

      <vodalModal :show="fundModal" animation="zoom" width="500" height="300" @hide="clearModals">
          <div>A vue modal with animations.</div>
      </vodalModal>

      <vodalModal :show="receiveModal" animation="zoom" @hide="clearModals">
          <div>A vue modal with animations.</div>
      </vodalModal>

      <vodalModal :show="withdrawModal" animation="zoom" @hide="clearModals">
          <div>A vue modal with animations.</div>
      </vodalModal>

      <div class="col-lg-4 col-md-5" v-for="(wallet, index) in wallets" :key="index">
        <WalletCard :title="wallet.title"
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
  import { mapActions, mapGetters } from 'vuex'

  export default {
    components: {
      WalletCard
    },
    data () {
      return {
        wallets: [
          {
            title: 'NGN Wallet',
            image: 'static/img/faces/face-0.jpg',
            balance: '5000.00',
            available: '5000.00',
            actions: ['fund', 'withdraw'],
          },
          {
            title: 'BTC Wallet',
            image: 'static/img/faces/face-0.jpg',
            balance: '0.00',
            available: '0.00',
            actions: ['recieve'],
          },
          {
            title: 'ETH Wallet',
            image: 'static/img/faces/face-0.jpg',
            balance: '0.0103790',
            available: '0.0103790',
            actions: ['recieve'],
          }
        ]
      }
    },
    computed:{
      ...mapGetters('wallet', [
        'fundModal',
        'receiveModal',
        'withdrawModal'
      ])
    },
    methods:{
      ...mapActions('wallet', [
        'clearModals'
      ]),
    }
  }

</script>
<style>

</style>
