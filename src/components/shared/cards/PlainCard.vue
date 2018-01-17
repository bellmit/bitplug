<template>
  <div class="card">
    <div class="header">
      <h4 class="title">
          <slot name="title"></slot>
      </h4>
      <p class="category">
        <slot name="subTitle"></slot>
      </p>
    </div>
    <div class="content">
        <slot name="content"></slot>
      <div class="footer">
        <slot name="footer"></slot>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'chart-card',
    props: {
      footerText: {
        type: String,
        default: ''
      },
      headerTitle: {
        type: String,
        default: ''
      },
    },
    data () {
      return {
      }
    },
    methods: {
    },
  }

</script>
<style>

</style>
