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
                <td>{{data.nibss_id}}</td>
                <td>{{data.id}}</td>
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
          columns:  [ 'Name', 'Nibss_id', 'Bank id' ],
          rows: []
        }
      }
    },
    mounted() {
      this.getbank();
    },
    computed: {
      ...mapGetters("admin", {
        response: "allBanks",
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
          this.table.rows = this.response
        })
        return
      },
    }
  }

</script>
<style>

</style>
