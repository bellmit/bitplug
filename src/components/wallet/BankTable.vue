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
          <span v-else-if="table.rows.length === 0 && !bankError">
            <NoContentError>No Bank Account found</NoContentError>
          </span>
          <table v-else-if="table.rows.length > 0 && !bankError" class="table table-striped">
            <thead>
              <th v-for="column in table.columns" :key="column">{{column}}</th>
            </thead>
            <tbody>
              <tr v-for="data in table.rows" :key="data.id">
                <td>{{data.name}}</td>
                <td>{{data.nibss_id}}</td>
                <td>{{data.id}}</td>
              </tr>
            </tbody>
          </table>
          <span v-else-if="bankError">
            <AuthError>{{bankError}}</AuthError>
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
          columns:  [ 'Name', 'Nibss Id', 'Bank id' ],
          rows: [],
        },
        bankError: ''
        
      }
    },
    mounted() {
      this.getbank();
    },
    computed: {
      ...mapGetters("admin", {
        response: "allBanks",
        error: 'error',
        loading: 'loading'
      })
    },
    methods: {
      ...mapActions("admin", ["getAllBanks"]),
      ...mapActions("userCredentials", ["callWithToken"]),
      getbank() {
        this.callWithToken({
          parameters: {},
          action: this.getAllBanks
        }).then(() => {
          this.bankError = this.error
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
