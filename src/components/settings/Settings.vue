<template>
<span>
  <PlainCard>
    <div slot="title">Security Settings</div>
    
    <div slot="content">
      <div class="row">
        <div class="col-md-6 settings-block">
          <h5 class="block-inline">Two factor authentication</h5>
          <input type="checkbox" class="block-inline"/>
        </div>
      </div>
    </div>

  </PlainCard>

  <PlainCard>
    <div slot="title">Exchange Settings</div>
    
    <div slot="content">
      <div class="row">
        <div class="col-md-6 settings-block">
          <h5 class="block-inline">Show Cancelled Orders</h5>
          <input type="checkbox" class="block-inline"/>
        </div>
      </div>
    </div>

  </PlainCard>
</span>
</template>

<script>
  export default {
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
