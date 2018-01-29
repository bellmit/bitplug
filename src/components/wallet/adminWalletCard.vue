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
      <ul class="list-unstyled team-members">
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

    <div class="footer">
        <hr>
        <div class="row">
            <button class="text-primary wallet-action wallet-icon ti-camera"  @click="setuploadPicsModal"></button>
            <PictureModal>
            </PictureModal>
            <router-link :to="{'name': 'edit-wallet-type'}">
              <h6 class="text-primary wallet-action wallet-icon ti-pencil"></h6>
            </router-link>
        </div>
    </div>
    </div>

  </div>
</template>
<script>
  import PictureModal from './forms/PictureModal'
  import { mapActions, mapGetters } from 'vuex'
  export default {
    props: {
        wallet: {  
            type: Object,
            default: () => {},
        },
    },
    components: {
      PictureModal: PictureModal
    },
    data () {
      return {
      }
    },
    methods: {
       ...mapActions('wallet', [
        'setuploadPicsModal',
      ]),
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
