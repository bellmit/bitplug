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
            <div class="col-lg-4 col-md-5" v-for="(wallet) in wallets" :key="wallet.id">
              <WalletCard :wallet="wallet" :page="'walletType'"/>
            </div>
          </div>
          <PictureModal />
        </span>
      </div>
      <div id="platformWallet" class="tab-pane fade">
        <span>
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
import { mapActions, mapGetters } from "vuex"
import WalletCard from "./adminWalletCard"
import PictureModal from "./modals/PictureModal"

export default {
  components: {
    WalletCard,
    PictureModal
  },
  data() {
    return {
      wallets: [],
      platformWallets: []
    };
  },
  mounted() {
    this.getWalletTypes();
    this.getPlatformWallets();
  },
  computed: {
    ...mapGetters("admin", {
      walletTypes: "walletType",
      platformWal: "platformWallet"
    })
  },
  methods: {
    ...mapActions("admin", ["getWalletType", "getPlatformWallet"]),
    ...mapActions("userCredentials", ["callWithToken"]),
    getWalletTypes() {
      this.callWithToken({
        parameters: {},
        action: this.getWalletType
      }).then(() => {
        this.wallets = this.walletTypes
      })
      return
    },
    getPlatformWallets() {
      this.callWithToken({
        parameters: {},
        action: this.getPlatformWallet
      }).then(() => {
        this.platformWallets = this.platformWal
      })
      return
    }
  }
};
</script>
<style>

</style>
