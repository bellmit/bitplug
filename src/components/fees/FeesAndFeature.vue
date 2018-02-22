<template>
<div class="fees-and-feature">
  <div class="features">
    <h1 class="fees-and-feature-header">Features</h1>
    <div>
      <div class="row fees-and-feature-list-container">
        <div class="col-md-3 count">
          <div class="fees-and-feature-list">
            <div class="fees-and-feature-list-content">
              <div>
                <img class="fees-and-feature-image buy" src="../../assets/img/flash.png" alt="">
              </div>
              <p class="fees-and-feature-text">Instant Buy/Sell</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 count">
          <div class="fees-and-feature-list">
            <div class="fees-and-feature-list-content">
              <div>
                <img class="fees-and-feature-image" src="../../assets/img/bitcoin.png" alt="">
              </div>
              <p class="fees-and-feature-text">Wallet</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 count">
          <div class="fees-and-feature-list">
            <div class="fees-and-feature-list-content">
              <div>
                <img class="fees-and-feature-image" src="../../assets/img/group.png" alt="">
              </div>
              <p class="fees-and-feature-text">Exchange</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 count">
          <div class="fees-and-feature-list">
            <div class="fees-and-feature-list-content">
              <div>
                <img class="fees-and-feature-image api" src="../../assets/img/noun.png" alt="">
              </div>
              <p class="fees-and-feature-text">API</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="fees">
    <div>
      <h1 class="fees-and-feature-header">Fees</h1>
    </div>
    <div>
      <h4 class="fees-and-feature-sub-header">Sending Fees</h4>
      <div class="fees-content row">
        <div class="col-md-12">
          <div class="card">
            <div class="content table-responsive table-full-width">
              <table class="table table-striped">
                <thead>
                  <th v-for="column in table.columns" :key="column">{{column}}</th>
                </thead>
                <tbody>
                  <tr v-for="data in table.rows" :key="data.id">
                    <td>{{data.currency}}</td>
                    <td>{{data.method}}</td>
                    <td>{{data.feature}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h4 class="fees-and-feature-sub-header">Receiving Fees</h4>
      <div class="fees-content row">
        <div class="col-md-12">
          <div class="card">
            <div class="content table-responsive table-full-width">
              <table class="table table-striped">
                <thead>
                  <th v-for="column in table.columns" :key="column">{{column}}</th>
                </thead>
                <tbody>
                  <tr v-for="data in table.rows" :key="data.id">
                    <td>{{data.currency}}</td>
                    <td>{{data.method}}</td>
                    <td>{{data.feature}}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'fees-and-features',
    data () {
      return {
       table: {
          columns:  [ 'Currency', 'Method', 'Feature'],
          rows: [{
            currency: 'BTC',
            method: 'Send to bitcoin address',
            feature: 'Free'
          },
          {
            currency: 'BTC',
            method: 'Send to bitcoin address',
            feature: 'Free'
          },
          {
            currency: 'BTC',
            method: 'Send to bitcoin address',
            feature: 'Free'
          }],
        },
        bankError: ''
      }
    },
    methods: {
    }
  }

</script>

<style>
  
</style>
