<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table
          title="Fees"
          sub-title=""
          :data="table.data"
          :columns="table.columns"
        />
      </div>
    </div>
  </div>
</template>
<script>
  import { mapActions } from "vuex";

  const tableColumns = [
    "Name",
    "Description",
    "Fee Percent",
    "Fixed Fee",
    "Is Crypto",
    "Withdrawal Bank Acc No",
    "Withdrawal Wallet Name",
  ];
  const tableData = [
    {
      'name': "Ope",
      'description': "Yemi",
      'fee percent': "12",
      'fixed fee': "12",
      'is crypto': "0.003",
      'withdrawal bank acc no': "12.003",
      'withdrawal wallet name': "BTC",
    },
    {
      'name': "2pac",
      'description': "Yemi",
      'fee percent': "12",
      'fixed fee': "12",
      'is crypto': "0.003",
      'withdrawal bank acc no': "12.003",
      'withdrawal wallet name': "ETH",
    },
    {
      'name': "Jeremy",
      'description': "Yemi",
      'fee percent': "12",
      'fixed fee': "12",
      'is crypto': "0.003",
      'withdrawal bank acc no': "12.003",
      'withdrawal wallet name': "USD",
    }
  ];
  export default {
    data () {
      return {
        table: {
          columns: [...tableColumns],
          data: [...tableData]
        }
      }
    },
  }

</script>
<style>

</style>
