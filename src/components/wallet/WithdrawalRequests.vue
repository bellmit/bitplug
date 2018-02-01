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
          <tr>
            <td>{{data.firstname}}</td>
            <td>{{data.lastname}}</td>
            <td>{{data.withdrawalamount}}</td>
            <td>{{data.feeamount}}</td>
            <td>{{data.totalamount}}</td>
            <td>{{data.status}}</td>
            <td><a class="point text-primary" @click="setAdminWithdrawalModal"> Details </a></td>
          </tr>  
        </tbody>
      </table>
    </div>
  </div>

  <vodalModal :show="adminWithdrawModal" animation="zoom" :width="700" :height="400"  @hide="clearModals">
    <div class="card withdrawal-card card-wallet">
      <h3 class="header text-center text-muted">
        Withdrawal Request
      </h3>

      <div class="content">
        <h3 class="text-center text-muted withdraw-text">
          NGN 20,000
        </h3>
        <ul class="list-unstyled withdraw-list">
          <li>
            <div class="row">
              <div class="col-xs-12 withdraw-content">
                <h5>GT Bank</h5>
              </div>
              <div class="col-xs-12 withdraw-content">
                <h5>John Doe</h5>
              </div>
              <div class="col-xs-12 withdraw-content">
                <h5>0230222222</h5>
              </div>
            </div>
          </li>
        </ul>
        <br>
        <div class="text-danger text-center">
          NGN 200 fee to 0230222222 - GT Bank
        </div>
        <br>
        <div class="footer withdraw-footer">
          <hr>
          <div class="row">
            <h6 class="wallet-action btn btn-danger withdraw-btn" @click="clearModals"> Reject </h6>
            <h6 class="wallet-action btn btn-info withdraw-btn"> On hold </h6>
            <h6 class="wallet-action btn btn-success withdraw-btn"> Confirm </h6>
          </div>
        </div>
      </div>

    </div>
  </vodalModal>
</div>
</template>
<script>
import WalletCard from "./walletCard"
import { mapActions, mapGetters } from 'vuex'

const tableColumns = ['First name', 'Last Name', 'Withdrawal Amount', 'Fee Amount', 'Total Amount', 'Status', 'Action']
const tableData = [{
    'firstname': 'Fajemi',
    'lastname': 'Opeyemi',
    'withdrawalamount': '12',
    'feeamount': '0.003',
    'totalamount': '12.003',
    'status': 'Open',
  },
  {
    'firstname': 'Fajemi',
    'lastname': 'Opeyemi',
    'withdrawalamount': '12',
    'feeamount': '0.003',
    'totalamount': '12.003',
    'status': 'Open',
  },
  {
    'firstname': 'Fajemi',
    'lastname': 'Opeyemi',
    'withdrawalamount': '12',
    'feeamount': '0.003',
    'totalamount': '12.003',
    'status': 'Open',
  },
  ]

export default {
  components: {
    WalletCard
  },
  methods: {
    ...mapActions('modals', [
      'setAdminWithdrawalModal', "clearModals"
    ]),
  },
  computed: {
    ...mapGetters("modals", ["adminWithdrawModal"])
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
