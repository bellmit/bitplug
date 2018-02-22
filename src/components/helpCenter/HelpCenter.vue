<template>
<div class="help-center">
  <div class="help-center-nav-container">
    <div class="help-center-nav-content">
     <h2>
      Help Centre        
     </h2>
     <h4>
       What can we help you with?
     </h4>
    <div id="custom-search-input">
      <div class="input-group col-md-12">
        <input type="text" class="search-query form-control" placeholder="Search" />
        <span class="input-group-btn">
          <button class="btn btn-danger" type="button">
            <span class=" glyphicon glyphicon-search"></span>
          </button>
        </span>
      </div>
    </div>
    </div>
  </div>
  <div class="popular-topic-container">
    <div>
      <h4 class="help-center-subheader">Popular Topics</h4>      
    </div>
    <div class="row popular-topic-button-container">
      <div class="col-md-4">
        <div class="popular-topic-button">
          2-factor authentication          
        </div>
      </div>
      <div class="col-md-4">
        <div class="popular-topic-button">
           How do I buy coins?   
        </div>
      </div>
      <div class="col-md-4">
        <div class="popular-topic-button">
           How do I create a new ...
        </div>
      </div>
    </div>
  </div>

  <div class="knowledge-base-container">
    <div>
      <h4 class="help-center-subheader">Knowledge Base</h4>      
    </div>
    <div class="row knowledge-base-list-container">
      <div class="col-md-3">
        <div class="knowledge-base-list">
          <div class="knowledge-base-list-content">
            <div class="knowledge-base-image-container gettingStarted">
            </div>
            <p class="knowledge-base-text">Getting Started</p>
            <div class="knowledge-base-subtext">Information on getting started and getting your account up and running</div>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="knowledge-base-list">
          <div class="knowledge-base-list-content">
            <div class="knowledge-base-image-container secureAccount">
            </div>
            <p class="knowledge-base-text">Securing your account</p>
            <div class="knowledge-base-subtext">Information on getting started and getting your account up and running</div>            
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="knowledge-base-list">
          <div class="knowledge-base-list-content">
            <div class="knowledge-base-image-container buyAndSell">
            </div>
            <p class="knowledge-base-text">Buying and Selling</p>
            <div class="knowledge-base-subtext">Information on getting started and getting your account up and running</div>            
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="knowledge-base-list">
          <div class="knowledge-base-list-content">
            <div class="knowledge-base-image-container community">
            </div>
            <p class="knowledge-base-text">Community</p>
            <div class="knowledge-base-subtext">Information on getting started and getting your account up and running</div>
            
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="knowledge-base-list">
          <div class="knowledge-base-list-content">
            <div class="knowledge-base-image-container verify">
            </div>
            <p class="knowledge-base-text">Identity Verification</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  export default {
    name: 'help-center',
    data () {
      return {
       table: {
          columns:  [ 'Currency', 'Method', 'Feature'],
          rows: [{
            currency: 'BTC',
            method: 'Send to bitcoin address',
            feature: 'Free'
          },
          {
            currency: 'BTC',
            method: 'Send to bitcoin address',
            feature: 'Free'
          },
          {
            currency: 'BTC',
            method: 'Send to bitcoin address',
            feature: 'Free'
          }],
        },
        bankError: ''
      }
    },
    methods: {
    }
  }
</script>

<style>
  
</style>
