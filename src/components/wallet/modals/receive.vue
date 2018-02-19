<template>
  <div class="row">
    <vodalModal :show="receiveModal" animation="zoom" :width="400" :height="300" @hide="clearModals">
      <div><i class="fa fa-arrow-down"></i> Receive {{selectedWallet.title}}.</div>
      <div class="text-center mt-10">
        <qrcode value="Hello, World!" :options="{ size: 150 }"></qrcode>
        <label class="form-control">1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2</label>
        <button type="submit" class="btn btn-info btn-block btn-fill btn-wd mt-10">
          Copy Address
        </button>
      </div>
    </vodalModal>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
      }
    },
    computed:{
      ...mapGetters('modals', [,
        'receiveModal',
      ]),
      ...mapGetters('wallet', [
        'selectedWallet'
      ])
    },
    methods:{
      ...mapActions('modals', [
        'clearModals',
      ])
    }
  }

</script>
