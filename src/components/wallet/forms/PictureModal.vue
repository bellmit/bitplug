<template>
  <el-button type="text" @click="open4">
    <slot>content</slot>
  </el-button>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      open4() {
        const h = this.$createElement;
        this.$msgbox({
          title: 'Message',
          message:h('vue-dropzone', null, 'Got it'),
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true;
              instance.confirmButtonText = 'Loading...';
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false;
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'info',
            message: 'action: ' + action
          });
        });
      },
    }
  }

</script>

<style>
  
</style>
