<template>
  <div>
    <!--<span v-if="loading">-->
    <!--<div class="row">-->
      <!--<br />-->
      <!--<div class="col-xs-4 text-center">-->
        <!--<img src="../../../assets/img/loading.gif" alt="">-->
      <!--</div>-->
    <!--</div>-->
  <!--</span>-->
    <vodalModal :show="adminWithdrawModal" animation="zoom" :width="700" :height="400" @hide="clearModals">
      <div class="card-wallet">
        <h3 class="header text-center text-muted">
          Withdrawal Request
        </h3>

        <div class="content">
          <h3 class="text-center text-muted withdraw-text">
            NGN {{selectedRequest.withdrawalamount}}
          </h3>
          <ul class="list-unstyled withdraw-list">
            <li>
              <div class="row">
                <div class="col-xs-12 withdraw-content">
                  <h5>{{selectedRequest.bank}}</h5>
                </div>
                <div class="col-xs-12 withdraw-content">
                  <h5>{{`${selectedRequest.firstname + ' ' + selectedRequest.lastname}`}}</h5>
                </div>
                <div class="col-xs-12 withdraw-content">
                  <h5>{{selectedRequest.account_no}}</h5>
                </div>
              </div>
            </li>
          </ul>
          <br>
          <div class="text-danger text-center">
            NGN {{selectedRequest.withdrawalamount}} fee to {{selectedRequest.account_no}} - {{selectedRequest.bank}}
          </div>
          <br>
          <div class="footer withdraw-footer">
            <hr>
            <div class="row">
              <h6 class="wallet-action btn btn-danger withdraw-btn" @click="rejectRequest"> Reject </h6>
              <h6 class="wallet-action btn btn-info withdraw-btn" @click="holdRequest"> On hold </h6>
              <h6 class="wallet-action btn btn-success withdraw-btn" @click="confirmRequest"> Confirm </h6>
            </div>
          </div>
        </div>

      </div>
    </vodalModal>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    // props: ['data'],
    computed:{
      ...mapGetters('modals', [
        'adminWithdrawModal',
      ]),
      ...mapGetters('admin', [
        'selectedRequest',
        'loading'
      ])
    },
    data() {
      return {
        data:
        {
          requestsError: ''
        },
      }
    },
    methods:{
      ...mapActions('modals', [
        'clearModals',
      ]),
      ...mapActions('admin', [
        'setSelectedRequest',
        'resetSeletedWallet',
        'rejectWithdrawalRequests',
        'holdWithdrawalRequests',
        'confirmWithdrawalRequests'
      ]),
      ...mapActions("userCredentials", ["callWithToken"]),
      holdRequest() {
        this.callWithToken({
          parameters: {id:this.selectedRequest.id},
          action: this.holdWithdrawalRequests
        }).then(() => {
          this.loading
          this.requestsError = this.error
          console.log(this.requestsError)
        })
        return
      },
      confirmRequest() {
        this.callWithToken({
          parameters: {id:this.selectedRequest.id},
          action: this.confirmWithdrawalRequests
        }).then(() => {
          this.loading
          this.requestsError = this.error
          console.log(this.requestsError)
        })
        return
      },
      rejectRequest() {
        this.callWithToken({
          parameters: {id:this.selectedRequest.id},
          action: this.rejectWithdrawalRequests
        }).then(() => {
          this.loading
          this.requestsError = this.error
          console.log(this.requestsError)
        })
        return
      },
    }
  }
</script>
