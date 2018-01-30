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
    <button class="vodal-cancel-btn" @click="clearModals">Done</button>
  </vodalModal>
</template>

<script>
import { mapActions, mapGetters } from "vuex"
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters("modals", ["uploadPicsModal"])
  },
  methods: {
    ...mapActions("modals", ["clearModals"])
  }
}
</script>

<style>

</style>
