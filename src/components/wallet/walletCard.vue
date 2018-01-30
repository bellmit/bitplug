<template>
  <div class="card card-wallet">
    <div class="header">
    <div class="col-xs-3">
        <div class="avatar">
            <img :src="image" alt="..." class="img-circle img-no-padding img-responsive">
        </div>
    </div>
      <router-link :to="{ name: 'walletDetails', params: {id: wallet.id } }">
        <a><h4 class="title">{{ title }}</h4></a>
      </router-link>

    </div>
    <div class="content">
      <ul class="list-unstyled team-members">
        <li>
          <div class="row">
            <div class="col-xs-12">
              <h6>Balance</h6>
              <!-- <br> -->
              <span>
                <h5>{{ balance }}</h5>
              </span>
            </div>
            <div class="col-xs-12">
              <h6>Available</h6>
              <!-- <br> -->
              <span class="">
                <h5>{{ available }}</h5>
              </span>
            </div>
          </div>
        </li>
      </ul>

    <div class="footer">
        <hr>
        <div class="row">
            <h6 class="point text-primary wallet-action" @click="setfundModal" v-show="hasAction('fund')"> Fund </h6>
            <h6 class="point text-primary wallet-action" @click="setwithdrawModal" v-show="hasAction('withdraw')"> Withdraw </h6>
            <h6 class="point text-primary wallet-action" @click="setreceiveModal" v-show="hasAction('recieve')"> Recieve </h6>
        </div>
    </div>
    </div>

  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    props: {
        title: {
            type: String,
            default: ''
        },
        balance: {
            type: String,
            default: ''
        },
        available: {
            type: String,
            default: ''
        },
        image: {
            type: String,
            default: ''
        },
        actions: {
            type: Array,
            default: []
        },
        wallet: {
            type: Object
        }

    },
    data () {
      return {
        members: [
          {
            image: 'static/img/faces/face-0.jpg',
            name: 'Dj Khaled',
            status: 'Offline'
          },
          {
            image: 'static/img/faces/face-1.jpg',
            name: 'Creative Tim',
            status: 'Available'
          }
        ]
      }
    },
    methods: {
      ...mapActions('modals', [
        'setfundModal',
        'setwithdrawModal',
        'setreceiveModal'
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
      },

      hasAction(type) {
        switch (type) {
          case 'fund':
            return this.actions.includes('fund')
          case 'withdraw':
            return this.actions.includes('withdraw')
          case 'recieve':
            return this.actions.includes('recieve')
          default:
            return false
        }
      }
    }
  }

</script>
<style>

</style>
