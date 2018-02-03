<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table
          title="Bank"
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
    "Bank Name", "Location"
  ];
  const tableData = [
    {
      'bank name': "Gt Bank",
      'location': "Yaba",
    },
    {
      'bank name': "Wema Bank",
      'location': "Office",      
    },
    {
      'bank name': "First Bank",
      'location': "Oyingbo",      
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
