<template>
<span>
      <!-- Fab icon -->
    <div class="row">

      <!-- <router-link :to="{'name': 'create-wallet-type'}">
        <div class="btn btn-price btn-wallet btn-md">
          <i class="ti-plus icon"></i>
        </div>
      </router-link> -->
    </div>
    <div class="row">

      <div class="col-lg-4 col-md-5" v-for="(wallet, index) in wallets" :key="index">
        <WalletCard :wallet="wallet">

        </WalletCard>
      </div>
    </div>
    <PictureModal/>
</span>
</template>
<script>
  import WalletCard from './adminWalletCard'
  import PictureModal from './forms/PictureModal'

  export default {
    components: {
      WalletCard,
      PictureModal
    },
    data () {
      return {
        wallets: [
          {
            title: 'NGN Wallet',
            image: 'static/img/faces/face-0.jpg',
            initial_balance: '0.00',
          },
          {
            title: 'BTC Wallet',
            image: 'static/img/faces/face-0.jpg',
            initial_balance: '0.00',
          },
          {
            title: 'ETH Wallet',
            image: 'static/img/faces/face-0.jpg',
            initial_balance: '0.00',
          },
        ]
      }
    },
  }

</script>
<style>

</style>
