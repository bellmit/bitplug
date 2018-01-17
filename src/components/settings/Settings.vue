<template>
<span>
  <PlainCard>
    <div slot="title">Security Settings</div>
    
    <div slot="content">
      <div class="row">
        <div class="col-md-6 settings-block">
          <h5 class="block-inline">Two factor authentication</h5>
          <el-switch v-model="settings.tfa" class="action">
          </el-switch>
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
          <el-switch v-model="settings.showCancel" class="action">
          </el-switch>
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
        settings: {
          tfa: null,
          showCancel: true,
        }
      }
    },
    methods: {
    }
  }

</script>

<style>
  
</style>
