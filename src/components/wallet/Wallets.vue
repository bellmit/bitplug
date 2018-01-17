<template>
<span>
      <!-- <form class="navbar-form navbar-right" role="search">
          <div class="form-group  is-empty">
            <input type="text" class="form-control" placeholder="Search">
            <span class="material-input"></span>
          </div>
          <button type="submit" class="btn btn-white btn-round btn-just-icon">
            <i class="material-icons">search</i><div class="ripple-container"></div>
          </button>
        </form> -->
    <div class="row">

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
          },
        ]
      }
    },
  }

</script>
<style>

</style>
