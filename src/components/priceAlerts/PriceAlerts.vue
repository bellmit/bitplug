<template>
<span>

  <PlainCard>
    <div slot="title">Price Alerts

      <!-- Fab icon -->
      <div class="btn btn-price btn-md">
        <i class="ti-plus icon"></i>
      </div>
    </div>
    
    <div slot="content">
      <div class="row">
        <div class="col-md-12" v-for="(alert, index) in alerts" :key="index">
          <div class="price-alert">
              <i class="icon" 
              :class="{'less ti-stats-down': isAlertType(alert, 'less'),'more ti-stats-up': isAlertType(alert, 'more')}"></i>
              <div class="content">
                  <p class="title">{{ alert.pair }} {{ alert.amount }}</p>
                  <p class="text-muted description">{{ getTypeText(alert) }} • {{ alert.frequency }}</p>
              </div>
                
            <el-switch v-model="alert.active" class="action">
            </el-switch>
              <!-- <hr> -->
          </div>
        </div>
      </div>
    </div>

  </PlainCard>


    <CreateAlertModal :show.sync="showAddAlert" 
      @close="closeAddAlert" 
      @reloadStore="reloadStore">
    </CreateAlertModal>
</span>
</template>

<script>
  import CreateAlertModal from './CreateAlertModal'

  export default {
    components: {
      CreateAlertModal
    },
    data () {
      return {
        showAddAlert: false,
        alerts: [
          {
            pair: 'BTC/NGN',
            amount: '850,000',
            frequency: 'Every Time',
            type: 'less',
            active: false,
          },
          {
            pair: 'BTC/NGN',
            amount: '1050,000',
            frequency: 'Once',
            type: 'more',
            active: true,
          },
        ]
      }
    },
    methods: {
      isAlertType (alert, type) {
        return alert.type == type
      },
      getTypeText (alert) {
        return alert.type == 'less' ? 'Less Than' : 'More Than'
      },
      openAddAlert() {
        this.showAddAlert = true;
      },
      closeAddAlert() {
        this.showAddAlert = false;
      },
      reloadStore (alert) {
        this.alerts.push(alert)
      }
    }
  }

</script>

<style>
  
</style>
