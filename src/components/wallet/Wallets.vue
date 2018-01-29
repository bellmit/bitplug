<template>
<span>
    <div class="row">

      <vodal :show="fundModal" animation="zoom" width="500" height="300" @hide="clearModals">
          <div>A vue modal with animations.</div>
      </vodal>

      <vodal :show="receiveModal" animation="zoom" @hide="clearModals">
          <div>A vue modal with animations.</div>
      </vodal>

      <vodal :show="withdrawModal" animation="zoom" @hide="clearModals">
          <div>A vue modal with animations.</div>
      </vodal>

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
  import { mapActions, mapGetters } from 'vuex'
  import Vue from 'vue'
  import Vodal from 'vodal'

  Vue.component(Vodal.name, Vodal);

  export default {
    components: {
      WalletCard
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
            actions: ['fund', 'withdraw'],
          },
          {
            id:2,
            title: 'BTC Wallet',
            image: 'static/img/faces/face-0.jpg',
            balance: '0.00',
            available: '0.00',
            actions: ['recieve'],
          },
          {
            id:3,
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
