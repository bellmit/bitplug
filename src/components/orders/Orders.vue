<template>
    <div class="row">
      <div class="col-md-12">
        <div class="order-filter">
          <h5 class="block-inline text-primary">Open</h5>
          <input type="checkbox" class="block-inline"/>
        </div>
        <div class="order-filter">
          <h5 class="block-inline text-primary">Closed</h5>
          <input type="checkbox" class="block-inline"/>
        </div>
        <div class="order-filter">
          <h5 class="block-inline text-primary">Hide Canceled</h5>
          <input type="checkbox" class="block-inline"/>
        </div>
      
        <drop-down title="Action" icon="" class="order-filter form-control border-input col-md-2">
          <li><a href="#">All</a></li>
          <li><a href="#">Buy</a></li>
          <li><a href="#">Sell</a></li>
        </drop-down>
      

        <div class="order-filter">
          <h5 class="block-inline text-primary">Pair:</h5>
          <drop-down title="Market" icon="" class="order-filter form-control border-input col-md-2">
            <li><a href="#">BTC</a></li>
            <li><a href="#">NGN</a></li>
          </drop-down>
          <!-- <h5 class="block-inline text-primary">/</h5> -->
          <drop-down title="Coin" icon="" class="order-filter form-control border-input col-md-2">
            <li><a href="#">All</a></li>
            <li><a href="#">BTC</a></li>
            <li><a href="#">ETH</a></li>
          </drop-down>
        </div>
      </div>
      <div class="col-md-12">
        <div class="card">
          <paper-table title="Order History" sub-title="" :data="table1.data" :columns="table1.columns">

          </paper-table>
        </div>
      </div>
      </div>
</template>

<script>
  const tableColumns = ['Date', 'Pair', 'Type', 'Action', 'Price', 'Amount', 'Total', 'Status']
  const tableData = [{
    date: '7th January 2018 13:30',
    pair: 'BTC/ETH',
    type: 'Limit',
    action: 'Buy',
    price: '0.002384',
    amount: '8',
    total: '0.020384',
    status: 'Open',
  },
  {
    date: '7th January 2018 13:30',
    pair: 'BTC/NGN',
    type: 'Limit',
    action: 'Buy',
    price: '0.002384',
    amount: '8',
    total: '0.020384',
    status: 'Closed',
  },
  ]

  export default {
    data () {
      return {
        table1: {
          title: 'O',
          subTitle: 'Here is a subtitle for this table',
          columns: [...tableColumns],
          data: [...tableData]
        },
      }
    },
    methods: {
    }
  }

</script>

<style>
  
</style>
