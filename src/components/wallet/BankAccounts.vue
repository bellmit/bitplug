<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="content table-responsive table-full-width">
          <span v-if="loading">
            <div class="row">
              <br />
              <div class="text-center">
                <LoadingBar />
              </div>
            </div>
          </span>
          <span v-else-if="table.rows.length === 0 && !bankAccountError">
            <NoContentError>No Bank Account found</NoContentError>
          </span>
          <table v-else-if="table.rows.length > 0 && !bankAccountError" class="table table-striped">
            <thead>
              <th v-for="column in table.columns" :key="column">{{column}}</th>
            </thead>
            <tbody>
              <tr v-for="data in table.rows" :key="data.bank_id">
                <td>{{data.bank_id}}</td>                
                <td>{{data.account_name}}</td>
                <td>{{data.account_number}}</td>
                <td>{{data.account_type}}</td>
              </tr>
            </tbody>
          </table>
          <span v-else-if="bankAccountError">
            <FetchError>{{bankAccountError}}</FetchError>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from "vuex";

  export default {
    data () {
      return {
        table: {
          columns:  [  "Bank Id", 'Account Name', 'Account No', 'Account Type' ],
          rows: [],
        },
        bankAccountError: ''
      }
    },
    mounted() {
      this.getbank();
    },
    computed: {
      ...mapGetters("admin", {
        response: "platformBanks",
        error: 'error',
        loading: 'loading'
      })
    },
    methods: {
      ...mapActions("admin", ["getPlatformBanks"]),
      ...mapActions("userCredentials", ["callWithToken"]),
      getbank() {
        this.callWithToken({
          parameters: {},
          action: this.getPlatformBanks
        }).then(() => {
          this.table.rows = this.response
          this.bankAccountError = this.error
        })
        return
      },
    }
  }
</script>
<style>

</style>
