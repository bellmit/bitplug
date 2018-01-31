<template>
<span>
    <div class="col-md-12" v-for="(transaction, index) in transactions" :key="index">
        <SavageWell :title="transaction.month" :defaultState="true">
            <div slot="content" class="row">
                <div class="col-md-12" v-for="(trans, index) in transaction.transactions" :key="index">
                    <Transaction :description="trans.description"
                                 :amount="trans.amount"
                                 :currency="trans.currency"
                                 :type="trans.type"
                                 :date="trans.date">

                    </Transaction>
                </div>
            </div>
        </SavageWell>
    </div>
</span>
</template>

<script>
  import Transaction from '../../transactions/transaction'

  export default {
    components: {
      Transaction
    },
    data () {
      return {
        transactions: [
          {
            month: 'December 2017',
            transactions: [
              {
                type: 'subtract',
                description: 'Bought BTC 0.00900 for NGN 20,000.00',
                amount: '-20,000.00',
                currency: 'NGN',
                date: '9th December 2017',
              },
              {
                type: 'add',
                description: 'Bought BTC 0.00900 for NGN 20,000.00',
                amount: '+0.00900',
                currency: 'BTC',
                date: '9th December 2017',
              }
            ]
          },
          {
            month: 'January 2018',
            transactions: [
              {
                type: 'subtract',
                description: 'Transaction Fee',
                amount: '-0.0001',
                currency: 'BTC',
                date: '1st January 2018',
              },
              {
                type: 'add',
                description: 'Sold BTC 0.0172090 for NGN 200,000.00',
                amount: '+200,000.00',
                currency: 'NGN',
                date: '1st January 2018',
              },
              {
                type: 'subtract',
                description: 'Sold BTC 0.0172090 for NGN 200,000.00',
                amount: '-0.0172090',
                currency: 'BTC',
                date: '1st January 2018',
              },
            ]
          },
        ]
      }
    },
    methods: {
    }
  }

</script>

<style>

</style>
