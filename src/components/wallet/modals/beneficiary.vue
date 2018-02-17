<template>
  <div class="row">
    <vodalModal :show="beneficiaryModal" animation="zoom" :width="400" :height="300" @hide="clearModals">
      <div>Card Details</div>

      <div class="row">
        <div class="col-md-12 mt-100">
          <input type="text" class="form-control" placeholder="Card Number" v-model="card_number">
        </div>


        <div class="col-md-6 mt-100">
          <input type="text" class="form-control" placeholder="MM/YY" v-model="month_Year">
        </div>

        <div class="col-md-6 mt-100">
          <input type="text" class="form-control" placeholder="CVV" v-model="cvv">
        </div>
        <div class="col-md-12 mt-100">
          <button type="submit" class="btn btn-info btn-block btn-fill">
            Copy Address
          </button>
        </div>
      </div>
    </vodalModal>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        month_Year:'',
        cvv:'',
        card_number:''
      }
    },
    computed:{
      ...mapGetters('modals', [
        'beneficiaryModal',
      ])
    },
    methods:{
      ...mapActions('modals', [
        'clearModals',
      ])
    }
  }
</script>
