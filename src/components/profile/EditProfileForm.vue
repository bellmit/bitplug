<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Edit Profile</h4>
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
          </div>

        <div class="row">
        </div>
        <div class="text-center">
          <button v-if="!loading" type="submit" class="btn btn-info btn-fill btn-wd">
           Update Profile
          </button>
          <LoadingButton v-else buttonclass="btn btn-info btn-fill btn-wd">Updating Profile...</LoadingButton>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
</template>
<script>
  import { mapActions, mapGetters } from 'vuex'
  export default {
    data () {
      return {
        user: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
        }
      }
    },
    mounted () {
      this.setUserDetails()
    },
    computed: {
        ...mapGetters('userCredentials', {
          userData: 'user',
        }),
        ...mapGetters('users/updateProfile', [
            'error',
            'fieldErrors',
            'loading',
        ]),
    },
    methods: {
      ...mapActions('users/updateProfile', [
          'updateProfile',
          'resetState',
          'clearErrors',
      ]),
      ...mapActions('userCredentials', [
          'callWithToken',
      ]),

      setUserDetails() {
        // Updating component with data from api
        this.user.firstName = this.userData.first_name
        this.user.lastName = this.userData.last_name
        this.user.email = this.userData.email
        this.user.phone = this.userData.phone
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
                  }

                  const self = this
                  this.callWithToken({
                    parameters: args,
                    action: this.updateProfile,
                  })
                  .then( status => {
                    if (status) {
                      // Got user
                      this.setUserDetails()
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
