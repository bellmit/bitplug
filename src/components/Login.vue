<template>
  <div class="row light-bg">
  <div class="col-sm-6 col-md-6 col-sm-offset-3 col-md-offset-3">
    <div class="card">
        <div class="header">
					<div class="social_loginSignup">
						<h3 class="title text-center">Login</h3>
						<br>
						<div class="row omb_socialButtons">
							<div class="col-lg-6 col-xs-6 col-sm-6">
								<a href="#" class="btn btn-lg btn-block omb_btn-facebook">
									<i class="fa fa-facebook visible-xs"></i>
									<span class="hidden-xs">Facebook</span>
								</a>
							</div>
							<div class="col-lg-6 col-xs-6 col-sm-6">
								<a href="#" class="btn btn-lg btn-block omb_btn-google">
									<i class="fa fa-google visible-xs"></i>
									<span class="hidden-xs">Google</span>
								</a>
							</div>	
						</div>
						<div class="row omb_row-sm-offset-3 omb_loginOr">
							<div class="col-lg-12 col-xs-12 col-sm-12">
								<hr class="omb_hrOr">
								<span class="omb_spanOr">or</span>
							</div>
						</div>
					</div>
        </div>
        <div class="content">
        <form @submit.prevent="validateBeforeSubmit">

            <BannerError v-if="(redirectError || error) && !autherror" :exempt="true">
              {{ redirectError || error }}
            </BannerError>
            <BannerError v-if="autherror" :exempt="true">{{ autherrorMsg }}</BannerError>

            <div class="col-md-12">
                <fg-input type="email"
                        label="Email"
                        v-validate="'required|email'"
                        :class="{'input': true, 'is-danger': errors.has('email') }"
                        name="email"
                        placeholder="Email"
                        v-model="user.email">
                </fg-input>

                <FieldError>
                    {{ errors.first('email') }}
                </FieldError>
            </div>
            <div class="col-md-12">
                <fg-input type="password"
                        label="Password"
                        v-validate="'required|min:1'"
                        :class="{'input': true, 'is-danger': errors.has('password') }"
                        name="password"
                        placeholder="Password"
                        v-model="user.password">
                </fg-input>

                <FieldError>
                    {{ errors.first('password') }}
                </FieldError>
            </div>

            <div class="row">
            </div>
            <div class="text-center">
              <button v-if="!loading" type="submit" class="btn btn-info btn-fill btn-wd">
              Login
              </button>
              <LoadingButton v-else buttonclass="btn btn-info btn-fill btn-wd">Logging you in...</LoadingButton>
            </div>
            <div class="row text-center">
							<div class="col-xs-12 col-xs-12 col-sm-12">
								<p class="omb_forgotPwd">
									<a href="#">Forgot password?</a>
								</p>
							</div>
		    		</div>	 
            <!-- <div class="social-login-container">
                <h6 class="">Login with</h6>
                <a href="#"><i id="social-fb" class="fa fa-facebook-square fa-3x social-login"></i></a>
                <a href="#"><i id="social-gp" class="fa fa-google-plus-square fa-3x social-login"></i></a>
            </div> -->
            <div class="clearfix"></div>
        </form>
        </div>
    </div>
</div>
</div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'login',
    props: ['redirectUrl'],
    destroyed () {
      this.clearErrors()
    },
    data () {
      return {
        user: {
          email: '',
          password: '',
        }
      }
    },
  computed: {
    ...mapGetters('auth', [
        'error',
        'autherrorMsg',
        'autherror',
        'redirectError',
        'loading',
    ]),
  },
  methods: {
      ...mapActions('auth', [
          'login',
          'clearErrors',
      ]),

      redirectBack () {
          this.$router.replace(this.redirectUrl)
      },

      checkBack () {
          let url = this.redirectUrl
          if (url !== undefined) {
              return true
          } else {
              return false
          }
      },

      clearFields () {
          this.user = {
              email: '',
              password: '',
          }
      },

      validateBeforeSubmit() {
          this.$validator.validateAll().then(result => {
              if (result) {
              // eslint-disable-next-line
              // Set arguments for endpoint
                  let args = {
                      email: this.user.email,
                      password: this.user.password,
                  }

                  const self = this
                  this.login(args)
                  .then(function (status) {
                      if (status.state === true) {
                          self.clearFields()
                          if (self.checkBack()) {
                              self.redirectBack()
                          } else {
                              self.$_$redirectHome(status.userType)
                          }
                      } else if (status.state === false) {
                        // BannerError will handle error
                      }
                  })
                  return
              }
          })
      },
    }
  }

</script>
<style>

</style>
