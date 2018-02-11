<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="content table-responsive table-full-width">
          <table class="table table-striped">
            <thead>
              <th v-for="column in table.columns">{{column}}</th>
            </thead>
            <tbody>
              <tr v-for="data in table.rows">
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
          'Withdrawal bank acc Id',
          'Percent fee',
          'Fixed fee',
          'Is crypto',
          'Withdrawal wallet Id'
          ],
          rows: []
        }
      }
    },
    mounted() {
      this.getfee();
    },
    computed: {
      ...mapGetters("admin", {
        response: "fees",
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
          this.table.rows = this.response
        })
        return
      },
    }
  }

</script>
<style>

</style>
