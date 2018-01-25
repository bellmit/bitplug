<template>
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
