<template>
  <vodalModal :show="uploadPicsModal" animation="zoom" :width="500" :height="300" @hide="clearModals">
    <br>
    <div class="vodal-body"><savage-dropzone /></div>
    <button class="vodal-confirm-btn" @click="clearModals">Save</button>
    <button class="vodal-cancel-btn" @click="clearModals">close</button>
  </vodalModal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters("wallet", ["uploadPicsModal"])
  },
  methods: {
    ...mapActions("wallet", ["clearModals"])
  }
};
</script>

<style>

</style>
