<template>
  <div class="row">
    <adminWithdrawModal></adminWithdrawModal>
    <div class="col-md-12">
      <div class="card">
        <div class="header">
          <h4 class="title">Withdrawal Requests</h4>
        </div>
        <div class="content table-responsive table-full-width">
          <table class="table table-striped">
            <thead>
              <th v-for="column in table1.columns" :key="column">{{column}}</th>
            </thead>
            <tbody>
              <tr v-if="table1.data.length > 0" v-for="data in table1.data" class="point" @click.prevent="requestHandler(data)">
                <!-- <adminWithdrawModal :data="data"></adminWithdrawModal> -->
                <td>{{`${data.firstname + ' ' + data.lastname}`}}</td>
                <td>{{data.bank}}</td>
                <td>{{data.withdrawalamount}}</td>
                <td>{{data.feepercent}}</td>
                <td>{{data.feeamount}}</td>
                <td>{{data.totalamount}}</td>
                <td>{{data.date}}</td>
                <td>{{data.status}}</td>
              </tr>
            <tr>
              No withdrawal requests available
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import adminWithdrawModal from './modals/adminWithdrawal'
import { mapActions } from 'vuex'

const tableColumns = [
  'User',
  'Bank',
  'Withdrawal Amount',
  'Fee Percent',
  'Fee Amount',
  'Total Amount',
  'Date',
  'Status'
]
const tableData = [
  {
    firstname: 'Fajemi',
    lastname: 'Yemi',
    withdrawalamount: '12',
    feeamount: '0.003',
    totalamount: '12.003',
    status: 'Open',
    bank: 'Gt Bank',
    account_no: '002234555',
    id: 1
  },
  {
    firstname: 'Fajemi',
    lastname: 'Ope',
    withdrawalamount: '12',
    feeamount: '0.003',
    totalamount: '12.003',
    status: 'Open',
    bank: 'Access Bank',
    account_no: '002234555',
    id: 2
  },
  {
    firstname: 'Fajemi',
    lastname: 'Opeyemi',
    withdrawalamount: '12',
    feeamount: '0.003',
    totalamount: '12.003',
    status: 'Open',
    bank: 'Orile Bank',
    account_no: '002234555',
    id: 3
  }
]
export default {
  components: {
    adminWithdrawModal
  },
  methods: {
    ...mapActions('modals', ['setAdminWithdrawalModal', 'clearModals']),
    ...mapActions('admin', [
      'setSelectedRequest',
      'resetSeletedWallet'
    ]),
    requestHandler (data) {
      this.setAdminWithdrawalModal()
      this.setSelectedRequest(data)
    }
  },
  data () {
    return {
      table1: {
        columns: [...tableColumns],
        data: [...tableData]
      }
    }
  }
}
</script>
<style>

</style>
