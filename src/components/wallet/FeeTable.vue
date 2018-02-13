<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="content table-responsive table-full-width">
          <span v-if="loading">
            <div class="row">
              <br />
              <div class="col-xs-4 text-center">
                <img src="../../assets/img/loading.gif" alt="">
              </div>
            </div>
          </span>
          <span v-else-if="table.rows.length === 0 && !feeError">
            <div class="row">
              <br />
              <div class="col-lg-4 col-md-5 text-danger">
                No Fee found
              </div>
            </div>
          </span>
          <table v-else-if="table.rows.length > 0 && !feeError" class="table table-striped">
            <thead>
              <th v-for="column in table.columns" :key="column">{{column}}</th>
            </thead>
            <tbody>
              <tr v-for="data in table.rows" :key="data.id">
                <td>{{data.name}}</td>
                <td>{{data.description}}</td>                
                <td>{{data.withdrawal_bank_account_id}}</td>
                <td>{{data.percent_fee}}</td>
                <td>{{data.fixed_fee}}</td>
                <td>{{data.is_crypto}}</td>
                <td>{{data.withdrawal_wallet_id}}</td>
              </tr>
            </tbody>
          </table>
          <span v-else-if="feeError">
            <div class="row">
              <br />
              <div class="col-lg-4 col-md-5 text-danger">
                {{feeError}}
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from "vuex"
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
          rows: []
        },
        feeError: ''
      }
    },
    mounted() {
      this.getfee();
    },
    computed: {
      ...mapGetters("admin", {
        response: "fees",
        error: 'error',
        loading: 'loading'
      })
    },
    methods: {
      ...mapActions("admin", ["getFees"]),
      ...mapActions("userCredentials", ["callWithToken"]),
      getfee() {
        this.callWithToken({
          parameters: {},
          action: this.getFees
        }).then(() => {
          this.feeError = this.error
          this.loading
          this.table.rows = this.response
        })
        return
      },
    }
  }

</script>
<style>

</style>
