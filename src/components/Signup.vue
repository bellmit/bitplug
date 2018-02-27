<template>
  <div class="row light-bg">
  <div class="col-sm-6 col-md-6 col-sm-offset-3 col-md-offset-3">
  <div class="card">
    <div class="header">
      <div class="social_loginSignup">
        <h3 class="title text-center">Sign Up</h3>
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
        <BannerError v-if="error" :exempt="true">{{ error }}</BannerError>

        <div class="row">
          <!-- <div class="col-md-6">
            <fg-input type="text"
                      v-validate="'min:2'"
                      :class="{'input': true, 'is-danger': errors.has('first_name') }"
                      name="first_name"
                      label="First Name"
                      placeholder="First Name"
                      v-model="user.firstName">
            </fg-input>

            <FieldError>
                {{ errors.first('first_name') || fieldErrors.last_name }}
            </FieldError>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      v-validate="'min:2'"
                      :class="{'input': true, 'is-danger': errors.has('last_name') }"
                      name="last_name"
                      label="Last Name"
                      placeholder="Last Name"
                      v-model="user.lastName">
            </fg-input>

            <FieldError>
                {{ errors.first('last_name') || fieldErrors.last_name }}
            </FieldError>
          </div> -->
        </div>
          <div class="col-md-12">
            <fg-input v-validate="'required|email'"
                      type="email"
                      :class="{'input': true, 'is-danger': errors.has('email') }"
                      name="email"
                      label="Email"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>

            <FieldError>
                {{ errors.first('email') || fieldErrors.email }}
            </FieldError>
          </div>
          <!-- <div class="col-md-6">
            <fg-input type="number"
                      v-validate="'required|min:11|max:11'"
                      :class="{'input': true, 'is-danger': errors.has('phone') }"
                      name="phone"
                      label="Phone Number"
                      placeholder="Phone Number"
                      v-model="user.phone">
            </fg-input>

            <FieldError>
                {{ errors.first('phone') || fieldErrors.phone }}
            </FieldError>
          </div> -->
          <div class="col-md-12">
            <fg-input v-validate="'required|min:6'"
                v-model="user.password"
                :class="{'input': true, 'is-danger': errors.has('password') }"
                name="password"
                label="Password"
                type="password"
                placeholder="Password">
            </fg-input>

            <FieldError>
                {{ errors.first('password') || fieldErrors.password }}
            </FieldError>
          </div>

        <div class="row">
        </div>
        <div class="text-center">
          <button v-if="!loading" type="submit" class="btn btn-info btn-fill btn-wd">
          Sign Up
          </button>
          <LoadingButton v-else buttonclass="btn btn-info btn-fill btn-wd">Signing Up...</LoadingButton>
        </div>
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
    name: 'signup',
    destroyed () {
        this.$_$destroyedHook()
    },
    data () {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          phone: null,
          password: '',
        }
      }
    },
    computed: {
        ...mapGetters('register', [
            'error',
            'fieldErrors',
            'loading',
        ]),

        // isUserClient() {
        //     const clientType = this.$_$userTypesObject.client.id
        //     return this.user.userType === clientType
        // },
    },
    methods: {
        ...mapActions('register', [
            'register',
            'resetState',
            'clearErrors',
        ]),

        clearFields () {
            this.user = {
              firstName: null,
              lastName: null,
              email: '',
              phone: '',
              password: '',
            }
        },

        validateBeforeSubmit() {
            this.$validator.validateAll().then(result => {
                if (result) {
                // eslint-disable-next-line
                // Set arguments for endpoint
                    let args = {
                        first_name: this.user.firstName,
                        last_name: this.user.lastName,
                        email: this.user.email,
                        phone: this.user.phone,
                        password: this.user.password,
                        type: this.user.userType,
                    }

                    const self = this
                    this.register(args)
                    .then(function (status) {
                        if (status.state === true) {
                            self.clearFields()
                            self.$_$redirectLoginNoBack()
                        }
                    })
                    return
                }
            })
        },
    },
  }

</script>
<style>

</style>
