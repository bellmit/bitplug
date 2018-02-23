<template>
  <div class="landing-page">
    <header class="layout-header" id="home">
      <div class="container top-20">
        <h2 class="h2 text-white text-center">Trade Cruptocurrencies Securely</h2>

        <h5 class="h5 text-white text-center"><strong class="strong">Bitplug</strong> is the <strong class="strong">easiest</strong> and <strong class="strong">safest</strong> way to buy, sell and manage your crypto-assets </h5>

        <form class="form-inline text-center mt-10">
          <input type="text" class="form-control top-form input-icon-user"  placeholder="Jane Doe">
          <input type="text" class="form-control top-form input-icon-password"  placeholder="Jane Doe">
          <button type="submit" class="btn btn-primary top-form">Submit</button>
        </form>
      </div>
    </header>
    <div class="layout-section white-bg" id="features">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="card features">
              <div class="card-body">
                <div class="text-center">
                  <img src="/static/img/front/strongbox.svg" alt="Strong">
                </div>

                <div class="media text-center mt-4">
                  <div class="media-body">
                    <h4 class="h4 card-title">Safe</h4>
                    <p class="p card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card features">
              <div class="card-body">
                <div class="text-center">
                  <img src="/static/img/front/flash.svg" alt="">
                </div>

                <div class="media text-center mt-4">
                  <div class="media-body">
                    <h4 class="h4 card-title">Fast Transportation</h4>
                    <p class="p card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card features">
              <div class="card-body">
                <div class="text-center">
                  <img src="/static/img/front/coins.svg" alt="">
                </div>

                <div class="media text-center mt-4">
                  <div class="media-body">
                    <h4 class="h4 card-title">Lowest Fees</h4>
                    <p class="p card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- // end .layout-section -->
    <div class="layout-section light-bg">
      <div class="container">
        <div class="layout-wrapper w-70">
          <div class="line"></div>
          <h4 class="h4 text-muted text-center">Trade on our Platform</h4>
          <div class="line"></div>
        </div>
        <div class="row">
          <div class="card-layout-wrapper">
            <div class="card features" style="border-radius: 1%">
              <div class="inner">
                Buy Coins
              </div>
              <div class="inner">
                <div class="row">
                  <div class="col-md-4 col-sm-4">Coin</div>
                  <div class="col-md-4 col-sm-4">Selling Rate</div>
                </div>
              </div>
              <div class="inner light-bg">
                <div class="row">
                  <div class="col-md-4 col-sm-4">ETH</div>
                  <div class="col-md-4 col-sm-4">3,500,000</div>
                  <div class="col-md-4 col-sm-4"><button type="submit" class="btn btn-primary">BUY</button></div>
                </div>
              </div>
              <div class="inner light-bg">
                <div class="row">
                  <div class="col-md-4">BTC</div>
                  <div class="col-md-4">3,500,000</div>
                  <div class="col-md-4"><button type="submit" class="btn btn-primary">BUY</button></div>
                </div>
              </div>
              <div class="text-center inner-big">
                <h4 class="text-dark ">Buy Some Coins</h4>
                <p class="text-dark text-center" style=" ">Find out how much other traders are selling for on the exchange </p>
                <button type="button" class="btn btn-primary-big">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- // end .layout-section -->
    <div class="layout-section white-bg">
      <div class="container">
        <div class="layout-wrapper w-70 mb-lg-5">
          <div class="line"></div>
          <h4 class="text-muted text-center">Start in 3 Easy Steps</h4>
          <div class="line"></div>
        </div>
        <div class="layout-wrapper w-70">
          <div class="pair text-center">
            <h4 class="circle mb-lg-3 text-blue">1</h4>
            <small>Sign Up</small>
          </div>
          <div class="line-dot mb-lg-3"></div>
          <div class="pair text-center">
            <h4 class="circle mb-lg-3 text-blue">2</h4>
            <small>Connect a Card</small>
          </div>
          <div class="line-dot mb-lg-3"></div>
          <div class="pair text-center">
            <h4 class="circle mb-lg-3 text-blue">3</h4>
            <small>Start Trading</small>
          </div>
        </div>
      </div>
    </div>
    <!-- // end .layout-section -->

    <div class="layout-section bg-gradient">
      <div class="container text-center">
        <h3 class="text-white">Start Trading with Bitplug Today</h3>
        <h5 class="text-white">Securely store and trade your crypto-assets</h5>
        <router-link :to="{ name: 'signup'}">
          <!-- <i class="ti-help-alt"></i> -->
          <a class="btn btn-white-big">Sign Up</a>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  }
};

</script>
<style>

</style>
