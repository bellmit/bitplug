<template>
  <vodalModal :show="uploadPicsModal"
    animation="zoom"
    :width="500"
    :height="300"
    @hide="clearModals">
    Upload Icon
    <br>
    <div class="vodal-body">
      <savage-dropzone />
    </div>
    <button class="vodal-cancel-btn" @click="mayor">Done</button>
  </vodalModal>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      walletId: null
    }
  },
  computed: {
    ...mapGetters('modals', ['uploadPicsModal', 'uploadPicsModalId'])
  },
  methods: {
    ...mapActions('modals', ['clearModals']),
    mayor () {
      this.walletId = this.uploadPicsModalId
      this.clearModals()
    }
  }
}
</script>

<style>

</style>
