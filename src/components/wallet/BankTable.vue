<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <paper-table
          title="Banks"
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

  const tableColumns = [ 'Name', 'Fee Name' ];
  const tableData = [
    {
      'name': 'Dont know',
      'fee name': 'Access card'
    },
    {
      'name': 'Dont know',
      'fee name': 'Access card'      
    },
    {
      'name': 'Dont know',
      'fee name': 'Access card'      
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
