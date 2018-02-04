<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table
          title="Platform Bank Accounts"
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
    "Bank Name", 'Account Name', 'Account No', 'Account Type'
  ];
  const tableData = [
    {
      'bank name': "Gt Bank",
      'account name': 'Dont',
      'account no': '00993344',
      'account type': 'Savings',
    },
    {
      'bank name': "First Bank",
      'account name': 'Dont know',
      'account no': '4448373772',
      'account type': 'Current',  
    },
    {
      'bank name': "Access Bank",
      'account name': 'Dont know yet',
      'account no': '494947774',
      'account type': 'Visa',     
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
