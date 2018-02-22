<template>
    <vue-dropzone ref="myVueDropzone" id="dropzone" :options="dropzoneOptions"></vue-dropzone>
</template>

<script>

import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.css'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'savage-dropzone',
  props: {
    token: { 
        type: String,
        default: '',
    },
    uploadPicsModalId: { 
      type: Number,
      default: 0,
    },
  },
  data: function () {
    return {
      id: this.uploadPicsModalId,
      dropzoneOptions: {
        url: `http://139.162.247.100:8080/admin/wallet_types/upload_icon/${this.uploadPicsModalId}`,
        thumbnailWidth: 150,
        maxFilesize: 0.5,
        headers: { 'Authorization': 'Bearer ' + 'this.token' }
      }
    }
  },
  components: {
    vueDropzone: vue2Dropzone
  },
  mounted() {
    console.log('yyyyyyyy', this.uploadPicsModalId)
  },

  watch: {
    '$props':{
      handler: function (val, oldVal) { 
        console.log('watch', val.uploadPicsModalId)
        this.dropzoneOptions.url = `http://139.162.247.100:8080/admin/wallet_types/upload_icon/${val.uploadPicsModalId}`
      },
      deep: true
    }
  },
  // computed: {
  //   ...mapGetters('modals', ['uploadPicsModal', 'uploadPicsModalId']),
  // },
  methods: {
    ...mapActions('userCredentials', ['setAdminWithdrawalModal', 'clearModals']),
    ...mapActions('admin', [
      'setSelectedRequest',
      'resetSeletedWallet',
      'getWithdrawalRequests'
    ]),
    ...mapActions("userCredentials", ["callWithToken"]),
    requestHandler (data) {
      this.setAdminWithdrawalModal()
      this.setSelectedRequest(data)
    },
    },
}
</script>

<style>
</style>
