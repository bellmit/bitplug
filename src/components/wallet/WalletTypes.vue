<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#walletType">Wallet Types</a></li>
      <li><a data-toggle="tab" href="#platformWallet">PlatForm Wallets</a></li>
    </ul>

    <div class="tab-content">
      <div id="walletType" class="tab-pane fade in active">
        <span>
          <div class="row">
            <div class="col-lg-4 col-md-5" v-for="(wallet, index) in wallets" :key="index">
              <WalletCard :wallet="wallet" :page="'walletType'"/>
            </div>
          </div>
          <PictureModal />
        </span>
      </div>
      <div id="platformWallet" class="tab-pane fade">
        <span>
          <div class="row">
            <div class="col-lg-4 col-md-5" v-for="(wallet, index) in wallets" :key="index">
              <WalletCard :wallet="wallet" :page="'platformWallet'"/>
            </div>
          </div>
          <PictureModal />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
  import WalletCard from './adminWalletCard'
  import PictureModal from './modals/PictureModal'

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
            image: '../../../static/img/faces/face-0.jpg',
            initial_balance: '0.00',
          },
          {
            title: 'BTC Wallet',
            image: '../../../static/img/faces/face-0.jpg',
            initial_balance: '0.00',
          },
          {
            title: 'ETH Wallet',
            image: '../../../static/img/faces/face-0.jpg',
            initial_balance: '0.00',
          },
        ]
      }
    },
  }

</script>
<style>

</style>
