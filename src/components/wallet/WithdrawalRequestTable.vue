<template>
  <div class="row">
    <adminWithdrawModal></adminWithdrawModal>
    <div class="col-md-12">
      <div class="card">
        <!--<div class="header">-->
          <!--<h4 class="title">Withdrawal Requests</h4>-->
        <!--</div>-->
        <div class="content table-responsive table-full-width">
          <span v-if="loading">
            <div class="row">
              <br />
              <div class="col-xs-4 text-center">
                <LoadingBar />
              </div>
            </div>
          </span>
          <span v-else-if="table.data.length <= 0 && !requestsError">
            <NoContentError>No Withdrawal Requests found</NoContentError>
          </span>
          <table v-else-if="table.data.length > 0 && !requestsError" class="table table-striped">
            <thead>
              <th v-for="column in table.columns" :key="column">{{column}}</th>
            </thead>
            <tbody>
              <tr v-for="data in table.data" class="point" @click.prevent="requestHandler(data)">
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
            </tbody>
          </table>
          <span v-else-if="requestsError">
            <FetchError>{{requestsError}}</FetchError>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import adminWithdrawModal from './modals/adminWithdrawal'
import { mapActions, mapGetters } from 'vuex'
export default {
  components: {
    adminWithdrawModal
  },
  mounted () {
    this.allRequests()
  },
  computed: {
    ...mapGetters('admin', {
      response: 'fees',
      error: 'error',
      loading: 'loading'
    })
  },
  methods: {
    ...mapActions('modals', ['setAdminWithdrawalModal', 'clearModals']),
    ...mapActions('admin', [
      'setSelectedRequest',
      'resetSeletedWallet',
      'getWithdrawalRequests'
    ]),
    ...mapActions("userCredentials", ["callWithToken"]),
    requestHandler (data) {
      this.setAdminWithdrawalModal()
      this.setSelectedRequest(data)
    },
    allRequests() {
      this.callWithToken({
        parameters: {},
        action: this.getWithdrawalRequests
      }).then(() => {
        this.table.data = this.response
        this.requestsError = this.error
        console.log("withdrawal reqs")
        console.log(this.response)
      })
      return
    },
  },
  data () {
    return {
      table: {
        columns: [
          'User',
          'Bank',
          'Withdrawal Amount',
          'Fee Percent',
          'Fee Amount',
          'Total Amount',
          'Date',
          'Status'
        ],
        data: []
      },
      requestsError: ''
    }
  }
}
</script>
<style>

</style>
