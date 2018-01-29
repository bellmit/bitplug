<template>
  <vodalModal :show="uploadPicsModal" animation="zoom" @hide="clearModals">
          <vue-dropzone>
          </vue-dropzone>
      </vodalModal>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {}
  },
  computed: {
    ...mapGetters("wallet", ["uploadPicsModal"])
  },
  methods: {
    ...mapActions('wallet', [
        'clearModals'
      ]),
    open4() {
      const h = this.$createElement;
      this.$msgbox({
        title: "Message",
        message: h("vue-dropzone", null, "Got it"),
        beforeClose: (action, instance, done) => {
          if (action === "confirm") {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = "Loading...";
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
          type: "info",
          message: "action: " + action
        });
      });
    }
  }
};
</script>

<style>

</style>
