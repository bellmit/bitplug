<template>
    <el-dialog
    title="Create Alert"
    :visible.sync="show"
    width="40%"
    :before-close="beforeClose">
        <span>This is a message</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
        </span>
    </el-dialog>
</template>

<script>
  export default {
    props: {
        show: {
            type: Boolean,
            default: false
        }
    },
    data () {
      return {
      }
    },
    methods: {
        beforeClose(done) {
            this.closeModal()
            // done()
        },
        closeModal() {
            this.$emit('close')
        },
    }
  }

</script>

<style>
  
</style>
