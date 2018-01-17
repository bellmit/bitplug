<template>
    <div class="transaction">
        <i class="icon ti-receipt"></i>
        <div class="content">
            <p class="title">{{ description }}</p>
            <p class="text-muted description">{{ date }}</p>
        </div>
        <p class="action" 
            :class="{ 'text-danger': type == 'subtract', 'text-primary': type == 'add'}"> 
            {{ currency }} {{ amount }}
        </p>
        <!-- <hr> -->
    </div>
</template>

<script>
  export default {
    props: {
        description: {
            type: String,
            default: ''
        },
        date: {
            type: String,
            default: ''
        },
        amount: {
            type: String,
            default: ''
        },
        currency: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: ''
        },
    },
    data () {
      return {
      }
    },
    methods: {
    }
  }

</script>

<style>
  
</style>
