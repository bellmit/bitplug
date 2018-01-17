<template>
  <div class="row">
  <div class="col-sm-6 col-md-6 col-sm-offset-3 col-md-offset-3">
  <div class="card">
    <div class="header">
      <h4 class="title">Sign Up</h4>
    </div>
    <div class="content">
      <form @submit.prevent="validateBeforeSubmit">
        <BannerError v-if="error" :exempt="true">{{ error }}</BannerError>

        <div class="row">
          <div class="col-md-6">
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
          </div>
        </div>
          <div class="col-md-6">
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
          <div class="col-md-6">
            <fg-input type="number"
                      v-validate="'min:11|max:11'"
                      :class="{'input': true, 'is-danger': errors.has('phone') }" 
                      name="phone" 
                      label="Phone Number"
                      placeholder="Phone Number"
                      v-model="user.phone">

            <FieldError>
                {{ errors.first('phone') || fieldErrors.phone }}
            </FieldError>
            </fg-input>
          </div>
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
          phone: '',
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
              firstName: '',
              lastName: '',
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
