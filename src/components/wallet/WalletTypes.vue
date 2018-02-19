<template>
  <div>
    <ul class="nav nav-tabs">
      <li class="active"><a data-toggle="tab" href="#walletType">Wallet Types</a></li>
      <li><a data-toggle="tab" href="#platformWallet">PlatForm Wallets</a></li>
    </ul>

    <div class="tab-content">
      <div id="walletType" class="tab-pane fade in active">
        <span v-if="loading">
          <div class="row">
            <br />
            <div class="text-center">
              <LoadingBar />
            </div>
          </div>
        </span>
        <span v-else-if="wallets.length === 0 && !walletError">
          <NoContentError>No wallet found</NoContentError>
        </span>
        <span v-else-if="wallets.length > 0 && !walletError">
          <div class="row">
            <div class="col-lg-4 col-md-5" v-for="(wallet) in wallets" :key="wallet.id">
              <WalletCard :wallet="wallet" :page="'walletType'"/>
            </div>
          </div>
          <PictureModal />
        </span>
        <span v-else-if="walletError">
          <FetchError>{{walletError}}</FetchError>
        </span>
      </div>
      <div id="platformWallet" class="tab-pane fade">
        <span v-if="platformError">
          <FetchError>{{platformError}}</FetchError>
        </span>
        <span v-else-if="loading">
          <div class="row">
            <br />
            <div class="text-center">
              <LoadingBar />
            </div>
          </div>
        </span>
        <span v-else-if="platformWallets.length === 0 && !platformError">
          <NoContentError>No Platform wallet found</NoContentError>
        </span>
        <span v-else-if="platformWallets.length > 0 && !platformError">
          <div class="row">
            <div class="col-lg-4 col-md-5" v-for="(platformWallet, index) in platformWallets" :key="index">
              <WalletCard :wallet="platformWallet" :page="'platformWallet'"/>
            </div>
          </div>
          <PictureModal />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import WalletCard from './adminWalletCard'
import PictureModal from './modals/PictureModal'

export default {
  components: {
    WalletCard,
    PictureModal
  },
  data () {
    return {
      walletError: '',
      platformError: ''
    }
  },
  mounted () {
    this.getWalletTypes()
    this.getPlatformWallets()
  },
  computed: {
    ...mapGetters('admin', {
      wallets: 'walletType',
      platformWallets: 'platformWallet',
      error: 'error',
      loading: 'loading'
    })
  },
  methods: {
    ...mapActions('admin', ['getWalletType', 'getPlatformWallet']),
    ...mapActions('userCredentials', ['callWithToken']),
    getWalletTypes () {
      this.callWithToken({
        parameters: {},
        action: this.getWalletType
      }).then(() => {
        this.walletError = this.error                
      })
      return
    },
    getPlatformWallets () {
      this.callWithToken({
        parameters: {},
        action: this.getPlatformWallet
      }).then(() => {
        this.platformError = this.error
      })
      return
    }
  }
}
</script>
<style>

</style>
