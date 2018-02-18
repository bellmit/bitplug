<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="content table-responsive table-full-width">
          <span v-if="loading">
            <div class="row">
              <br />
              <div class="col-xs-4 text-center">
                <LoadingBar />
              </div>
            </div>
          </span>
          <span v-else-if="table.rows.length === 0 && !feeError">
            <NoContentError>No Fee found</NoContentError>
          </span>
          <table v-else-if="table.rows.length > 0 && !feeError" class="table table-striped">
            <thead>
              <th v-for="column in table.columns" :key="column">{{column}}</th>
            </thead>
            <tbody>
              <tr v-for="data in table.rows" :key="data.id">
                <td>{{data.name}}</td>
                <td>{{data.description}}</td>                
                <td v-if="data.withdrawal_bank_account">{{data.withdrawal_bank_account.account_number}}</td>
                <td v-else>{{'not provided'}}</td>
                <td>{{data.percent_fee}}</td>
                <td>{{data.fixed_fee}}</td>
                <td>{{data.is_crypto}}</td>
                <td>{{data.withdrawal_wallet}}</td>
              </tr>
            </tbody>
          </table>
          <span v-else-if="feeError">
            <AuthError>{{feeError}}</AuthError>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        table: {
          columns: ['Name',
            'Description',
            'Withdrawal Bank Acc No',
            'Percent Fee',
            'Fixed Fee',
            'Is Crypto',
            'Withdrawal Wallet Name'
          ],
          rows: [],
        },
        feeError: ''
      }
    },
    mounted () {
      this.getfee()
    },
    computed: {
      ...mapGetters('admin', {
        response: 'fees',
        error: 'error',
        loading: 'loading'
      })
    },
    methods: {
      ...mapActions('admin', ['getFees']),
      ...mapActions('userCredentials', ['callWithToken']),
      getfee () {
        this.callWithToken({
          parameters: {},
          action: this.getFees
        }).then(() => {
          this.feeError = this.error
          this.table.rows = this.response
        })
        return
      }
    }
  }

</script>
<style>

</style>
