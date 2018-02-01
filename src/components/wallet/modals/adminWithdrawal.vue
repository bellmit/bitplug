<template>
  <vodalModal :show="adminWithdrawModal" animation="zoom" :width="700" :height="400" @hide="clearModals">
    <div class="card-wallet">
      <h3 class="header text-center text-muted">
        Withdrawal Request
      </h3>

      <div class="content">
        <h3 class="text-center text-muted withdraw-text">
          NGN {{data.withdrawalamount}}
        </h3>
        <ul class="list-unstyled withdraw-list">
          <li>
            <div class="row">
              <div class="col-xs-12 withdraw-content">
                <h5>{{data.bank}}</h5>
              </div>
              <div class="col-xs-12 withdraw-content">
                <h5>{{`${data.firstname + ' ' + data.lastname}`}}</h5>
              </div>
              <div class="col-xs-12 withdraw-content">
                <h5>{{data.account_no}}</h5>
              </div>
            </div>
          </li>
        </ul>
        <br>
        <div class="text-danger text-center">
          NGN {{data.withdrawalamount}} fee to {{data.account_no}} - {{data.bank}}
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
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    props: ['data'],
    computed:{
      ...mapGetters('modals', [
        'adminWithdrawModal',
      ])
    },
    methods:{
      ...mapActions('modals', [
        'clearModals',
      ])
    }
  }
</script>
