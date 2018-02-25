<template>
  <div class="landing">
    <header class="landing-header" id="home">
      <div class="container top-20">
        <h2 class="text-white text-center">Trade Cruptocurrencies Securely</h2>

        <h5 class="text-white text-center"><strong class="strong">Bitplug</strong> is the <strong class="strong">easiest</strong> and <strong class="strong">safest</strong> way to buy, sell and manage your crypto-assets </h5>

        <form class="form-inline text-center mt-10">
          <input type="text" class="form-control landing-form-input input-icon-user"  placeholder="Jane Doe">
          <input type="text" class="form-control landing-form-input input-icon-password"  placeholder="Jane Doe">
          <button type="submit" class="btn btn-primary landing-form-input">Submit</button>
        </form>
      </div>
    </header>
    <div class="landing-section white-bg" id="landing-card-features">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-4">
            <div class="card landing-card-features">
              <div class="card-body">
                <div class="text-center">
                  <img src="/static/img/front/strongbox.svg" alt="Strong">
                </div>

                <div class="media text-center mt-4">
                  <div class="media-body">
                    <h4 class="card-title">Safe</h4>
                    <p class="landing-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card landing-card-features">
              <div class="card-body">
                <div class="text-center">
                  <img src="/static/img/front/flash.svg" alt="">
                </div>

                <div class="media text-center mt-4">
                  <div class="media-body">
                    <h4 class="card-title">Fast Transportation</h4>
                    <p class="landing-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-4">
            <div class="card landing-card-features">
              <div class="card-body">
                <div class="text-center">
                  <img src="/static/img/front/coins.svg" alt="">
                </div>

                <div class="media text-center mt-4">
                  <div class="media-body">
                    <h4 class="card-title">Lowest Fees</h4>
                    <p class="landing-card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- // end .landing-section -->
    <div class="landing-section light-bg">
      <div class="container">
        <div class="landing-wrapper w-70">
          <div class="line"></div>
          <h4 class="h4 text-muted text-center">Trade on our Platform</h4>
          <div class="line"></div>
        </div>
        <div class="row">
          <div class="card-layout-wrapper w-70">
            <div class="card landing-card-features" style="border-radius: 1%">
              <div class="landing-card-inner">
                Buy Coins
              </div>
              <div class="landing-card-inner">
                <div class="row">
                  <div class="col-md-4 col-sm-4 layout-inline">Coin</div>
                  <div class="col-md-4 col-sm-4 layout-inline">Selling Rate</div>
                </div>
              </div>
              <div class="landing-card-inner light-bg">
                <div class="row">
                  <div class="col-md-4 col-sm-4 layout-inline">ETH</div>
                  <div class="col-md-4 col-sm-4 layout-inline">3,500,000</div>
                  <div class="col-md-4 col-sm-4 layout-inline"><button type="submit" class="btn btn-primary">BUY</button></div>
                </div>
              </div>
              <div class="landing-card-inner light-bg">
                <div class="row">
                  <div class="col-md-4 layout-inline">BTC</div>
                  <div class="col-md-4 layout-inline">3,500,000</div>
                  <div class="col-md-4 layout-inline"><button type="submit" class="btn btn-primary">BUY</button></div>
                </div>
              </div>
              <div class="text-center landing-card-inner-big">
                <h4 class="text-dark ">Buy Some Coins</h4>
                <p class="text-dark text-center">Find out how much other traders are selling for on the exchange </p>
                <button type="button" class="btn btn-primary-big">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <!-- // end .landing-section -->
    <div class="landing-section white-bg">
      <div class="container">
        <div class="landing-wrapper w-70 mb-lg-5">
          <div class="line"></div>
          <h4 class="text-muted text-center">Start in 3 Easy Steps</h4>
          <div class="line"></div>
        </div>
        <div class="landing-wrapper w-70">
          <div class="circle-line-pair text-center">
            <h4 class="circle mb-lg-3 text-blue">1</h4>
            <small>Sign Up</small>
          </div>
          <div class="line-dot mb-lg-3"></div>
          <div class="circle-line-pair text-center">
            <h4 class="circle mb-lg-3 text-blue">2</h4>
            <small>Connect a Card</small>
          </div>
          <div class="line-dot mb-lg-3"></div>
          <div class="circle-line-pair text-center">
            <h4 class="circle mb-lg-3 text-blue">3</h4>
            <small>Start Trading</small>
          </div>
        </div>
      </div>
    </div>
    <!-- // end .landing-section -->

    <div class="landing-section bg-gradient">
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
