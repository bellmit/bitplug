<template>
  <div class="card card-wallet">
    <div class="header">
    <div class="col-xs-3">
        <div class="avatar">
            <img :src="wallet.image" alt="..." class="img-circle img-no-padding img-responsive">
        </div>
    </div>
      <h4 class="title">{{ wallet.title }}</h4>
    </div>
    <div class="content">
      <ul v-if="page==='walletType'" class="list-unstyled team-members">
        <li>
          <div class="row">
            <div class="col-xs-12">
              <h6>Initial Balance</h6>
              <!-- <br> -->
              <span>
                <h5>{{ wallet.initial_balance }}</h5>
              </span>
            </div>
          </div>
        </li>
      </ul>
      <ul v-if="page==='platformWallet'" class="list-unstyled team-members">
        <li>
          <div class="row">
            <div class="col-xs-6">
              <h6>Balance</h6>
              <!-- <br> -->
              <span>
                <h5>{{ wallet.initial_balance }}</h5>
              </span>
            </div>
            <div class="col-xs-6">
              <h6>Address</h6>
              <!-- <br> -->
              <span>
                <h5>{{ wallet.title }}</h5>
              </span>
            </div>
          </div>
          <div class="row">
            <div class="col-xs-12">
              <h6>Incoming Fee</h6>
              <!-- <br> -->
              <span>
                <h5>{{ wallet.initial_balance }}</h5>
              </span>
            </div>
          </div>
        </li>
      </ul>

    <div class="footer">
        <hr>
        <div class="row">
            <h6 class="text-primary wallet-action wallet-icon ti-camera"  @click="upload"></h6>
            <router-link :to="{name: 'edit-wallet-type', params: { walletId: wallet.id }}">
              <h6 class="text-primary wallet-action wallet-icon ti-pencil"></h6>
            </router-link>
        </div>
    </div>
    </div>

  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    props: {
        wallet: {  
            type: Object,
            default: () => {},
        },
        page: {  
            type: String,
            default: '',
        },
    },
    components: {
    },
    data () {
      return {
        walletId: this.wallet.id,
      }
    },
    computed: {
      ...mapGetters("modals", ["uploadPicsModalId"])
    },
    methods: {
       ...mapActions('modals', [
        'setuploadPicsModal',
      ]),
      upload() {
        this.setuploadPicsModal(this.walletId)
        console.log('uploadPicsModalId', this.uploadPicsModalId)
      },
      getStatusClass (status) {
        switch (status) {
          case 'Offline':
            return 'text-muted'
          case 'Available':
            return 'text-success'
          case 'Busy':
            return 'text-danger'
          default:
            return 'text-success'
        }
      }
    }
  }

</script>
<style>
  
</style>
