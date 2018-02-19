<template>
<span>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="Details" name="first">
      <fund></fund>
      <beneficiary></beneficiary>
      <receive></receive>
      <withdraw></withdraw>
      <send></send>
      <WalletDetails
        :title="wallet.title"
        :image="wallet.image"
        :balance="wallet.balance"
        :available="wallet.available"
        :actions="wallet.actions"
      >
    </WalletDetails>
    </el-tab-pane>
    <el-tab-pane label="Transactions" name="second">
      <transaction ></transaction>
    </el-tab-pane>
  </el-tabs>
</span>
</template>
<script>
  import Transaction from './details/transactions.vue'
  import WalletDetails from './details/details.vue'
  import Fund from './modals/fund.vue'
  import Beneficiary from './modals/beneficiary.vue'
  import Receive from './modals/receive.vue'
  import Withdraw from './modals/withdraw.vue'
  import Send from './modals/send.vue'

  export default {
    components: {
      Transaction,
      WalletDetails,
      Beneficiary,
      Receive,
      Withdraw,
      Send,
      Fund
    },
    data () {
      return {
        activeName: 'first',
        wallet: {
          id:1,
          title: 'NGN Wallet',
          image: 'static/img/faces/face-0.jpg',
          balance: '5000.00',
          available: '5000.00',
          type:'NGN',
          actions: ['fund', 'withdraw'],
        },
        details:true

      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  }

</script>
<style>

</style>
