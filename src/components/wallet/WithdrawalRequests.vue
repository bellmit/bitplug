<template>
  <div>
  <div>
    <div class="header">
      <h4 class="title">My Table</h4>
    </div>
    <div class="content table-responsive table-full-width">
      <table class="table table-striped">
        <thead>
          <th v-for="column in table1.columns">{{column}}</th>
        </thead>
        <tbody v-for="data in table1.data">
          <adminWithdrawModal :data="data"></adminWithdrawModal>          
          <tr class="point" v-on:click.prevent="setAdminWithdrawalModal">
            <td>{{`${data.firstname + ' ' + data.lastname}`}}</td>
            <td>{{data.withdrawalamount}}</td>
            <td>{{data.feeamount}}</td>
            <td>{{data.totalamount}}</td>
            <td>{{data.status}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
</template>
<script>
import WalletCard from "./walletCard"
import adminWithdrawModal from "./modals/adminWithdrawal"
import { mapActions } from 'vuex'

const tableColumns = ['User', 'Withdrawal Amount', 'Fee Amount', 'Total Amount', 'Status']
const tableData = [{
    'firstname': 'Fajemi',
    'lastname': 'Yemi',
    'withdrawalamount': '12',
    'feeamount': '0.003',
    'totalamount': '12.003',
    'status': 'Open',
    'bank': 'Gt Bank',
    'account_no': '002234555',
    'id': 1
  },
  {
    'firstname': 'Fajemi',
    'lastname': 'Ope',
    'withdrawalamount': '12',
    'feeamount': '0.003',
    'totalamount': '12.003',
    'status': 'Open',
    'bank': 'Access Bank',
    'account_no': '002234555',
    'id': 2
  },
  {
    'firstname': 'Fajemi',
    'lastname': 'Opeyemi',
    'withdrawalamount': '12',
    'feeamount': '0.003',
    'totalamount': '12.003',
    'status': 'Open',
    'bank': 'Orile Bank',
    'account_no': '002234555',
    'id': 3
  },
  ]

export default {
  components: {
    WalletCard, adminWithdrawModal
  },
  methods: {
    ...mapActions('modals', [
      'setAdminWithdrawalModal', "clearModals"
    ]),
  },
  data() {
    return {
      wallets: [
        {
          title: "NGN Wallet",
          image: "static/img/faces/face-0.jpg",
          balance: "5000.00",
          available: "5000.00",
          actions: ["fund", "withdraw"]
        },
        {
          title: "BTC Wallet",
          image: "static/img/faces/face-0.jpg",
          balance: "0.00",
          available: "0.00",
          actions: ["recieve"]
        },
        {
          title: "ETH Wallet",
          image: "static/img/faces/face-0.jpg",
          balance: "0.0103790",
          available: "0.0103790",
          actions: ["recieve"]
        }
      ],
       table1: {
        columns: [...tableColumns],
        data: [...tableData]
      },
    };
  }
};
</script>
<style>

</style>
