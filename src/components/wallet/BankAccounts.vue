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
                <td>{{data.bank_id}}</td>                
                <td>{{data.account_name}}</td>
                <td>{{data.account_number}}</td>
                <td>{{data.account_type}}</td>
              </tr>
            </tbody>
          </table>
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
          rows: []
        }
      }
    },
    mounted() {
      this.getbank();
    },
    computed: {
      ...mapGetters("admin", {
        response: "platformBanks",
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
        })
        return
      },
    }
  }
</script>
<style>

</style>
