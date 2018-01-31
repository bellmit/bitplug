<template>
<span>
    <transaction :show="details"></transaction>
</span>
</template>
<script>
  import Transaction from './details/transactions.vue'

  export default {
    components: {
      Transaction
    },
    data () {
      return {
        details:true
      }
    },
    methods: {
    }
  }

</script>
<style>

</style>
