<template>
<span>
    <div class="row">

      <vodalModal :show="fundModal" animation="zoom" :width="400" :height="300" @hide="clearModals">
          <div>A vue modal with animations.</div>
      </vodalModal>

      <vodalModal :show="receiveModal" animation="zoom" :width="400" :height="300" @hide="clearModals">
          <div><i class="fa fa-arrow-down"></i> Receive {{selectedWallet.title}}.</div>
          <div class="text-center mt-10">
            <qrcode value="Hello, World!" :options="{ size: 150 }"></qrcode>
            <input type="text" class="form-control" :value="selectedWallet.title">
            <button type="submit" class="btn btn-info btn-block btn-fill btn-wd mt-10">
              Copy Address
            </button>
          </div>

      </vodalModal>

      <vodalModal :show="sendModal" animation="zoom" :width="400" :height="600" @hide="clearModals">
          <div><i class="fa fa-arrow-up"></i> Send {{selectedWallet.title}}.</div>
          <div class="text-center mt-10">
            <div class="col-md-12">
              <qrcode value="Hello, World!" :options="{ size: 150 }"></qrcode>
            </div>
            <div class="col-md-6 mt-10">
              <span v-if="selectedWallet.type == 'BTC'">BTC</span>
              <span v-else>ETH</span>
              <input type="text" name="" class="form-control" :value="0 ">
            </div>
            <div class="col-md-6 mt-10">
              <span>USD</span>
              <input type="text" class="form-control" :value="0">
            </div>
            <div class="col-md-12 mt-10">
              <div class="mt-10">
                <span>Address</span>
                <input type="text" class="form-control " :value="0">
              </div>
              <div class="mt-10">
                <span>Description</span>
                <textarea class="form-control mt-10" name="" id="" cols="30" rows="3"></textarea>
              </div>

              <p>
                <strong>Transaction Fee</strong><br>
                <span v-if="selectedWallet.type == 'BTC'">0.0000483 BTC (0.56 USD)</span>
                <span v-else>0.000483 ETH (0.56 USD)</span>
              </p>
              <button type="submit" class="btn btn-info btn-block btn-fill btn-wd mt-10">
                Copy Address
              </button>
            </div>
          </div>

      </vodalModal>

      <vodalModal :show="withdrawModal" animation="zoom" :width="400" :height="300" @hide="clearModals">
          <div>A vue modal with animations.</div>
      </vodalModal>

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
    },
    computed:{
      ...mapGetters('modals', [
        'fundModal',
        'sendModal',
        'receiveModal',
        'withdrawModal'
      ]),
      ...mapGetters('wallet', [
        'selectedWallet'
      ])
    },
    methods:{
      ...mapActions('modals', [
        'clearModals'
      ]),
      ...mapActions('wallet', [
        'setSeletedWallet',
        'resetSeletedWallet'
      ]),
    }
  }

</script>
<style>

</style>
