<template>
<span>
    <div class="col-md-12" v-for="(transaction, index) in transactions" :key="index">
        <SavageWell :title="transaction.month">
            <div slot="content">
                <p>Open</p>
            </div>
        </SavageWell>
    </div>
</span>
</template>

<script>
  export default {
    data () {
      return {
          transactions: [
              {
                  month: 'December 2017'
              },
              {
                  month: 'January 2018'
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
