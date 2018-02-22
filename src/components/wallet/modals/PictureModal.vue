<template>
  <vodalModal :show="uploadPicsModal"
    animation="zoom"
    :width="500"
    :height="300"
    @hide="clearModals">
    Upload Icon
    <br>
    <div class="vodal-body">
      <savage-dropzone
        :token="token"
        :uploadPicsModalId="uploadPicsModalId"
      />
    </div>
    <button class="vodal-cancel-btn" @click="mayor">Done</button>
  </vodalModal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      walletId: null,
    }
  },
  mounted () {
    this.mayor()
  },
  computed: {
    ...mapGetters('modals', ['uploadPicsModal', 'uploadPicsModalId']),
    ...mapGetters('userCredentials', ['token'])
  },
  methods: {
    ...mapActions('modals', ['clearModals']),
    mayor () {
      // this.clearModals()
      console.log('myId',this.uploadPicsModalId)
    },
    // test() {
    //   console.log('token mann', this.token)
    // }
  }
}
</script>

<style>

</style>
