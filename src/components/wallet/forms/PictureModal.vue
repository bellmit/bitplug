<template>
  <el-button type="text" @click="openModal">
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
      openModal() {
        const h = this.$createElement;
        this.$msgbox({
          title: 'Message',
          message:h('savage-dropzone', null),
          showCancelButton: true,
          confirmButtonText: 'Save',
          cancelButtonText: 'Cancel',
          beforeClose: (action, instance, done) => {
            if (action === 'confirm') {
              instance.confirmButtonLoading = true
              instance.confirmButtonText = 'Saving...'
              setTimeout(() => {
                done();
                setTimeout(() => {
                  instance.confirmButtonLoading = false
                }, 300);
              }, 3000);
            } else {
              done();
            }
          }
        }).then(action => {
          this.$message({
            type: 'success',
            message: 'Success'
          });
        });
      },
    }
  }

</script>

<style>
  
</style>
