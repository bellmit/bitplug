<template>
  <div class="card">
    <div class="header">
      <h4 class="title">Change Password</h4>
    </div>
    <div class="content">
      <form @submit.prevent="validateBeforeSubmit">
        <BannerError v-if="error" :exempt="true">{{ error }}</BannerError>
        <BannerSuccess v-else-if="isSuccess" :exempt="true">{{ successMsg }}</BannerSuccess>
        <div class="row">
          <div class="col-md-12">
            <fg-input v-model="user.oldPassword"
                label="Current Password"
                type="password" 
                placeholder="Current Password">
            </fg-input>
          </div>
          <div class="col-md-12">
            <fg-input v-validate="'required|min:6'"  
                v-model="user.newPassword"
                :class="{'input': true, 'is-danger': errors.has('password') }" 
                name="password" 
                label="New Password"
                type="password" 
                placeholder="New Password">
            </fg-input>

            <FieldError>
                {{ errors.first('password') || fieldErrors.password }}
            </FieldError>
          </div>
        </div>

        <div class="row">
        </div>
        <div class="text-center">
          <button v-if="!loading" type="submit" class="btn btn-info btn-fill btn-wd">
           Change Password
          </button>
          <LoadingButton v-else buttonclass="btn btn-info btn-fill btn-wd">Changing Password...</LoadingButton>
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
          oldPassword: '',
          newPassword: '',
        },
        isSuccess: false,
        successMsg: 'Password Changed Successfully'
      }
    },
    computed: {
        ...mapGetters('userCredentials', {
          userData: 'user',
        }),
        ...mapGetters('users/updatePassword', [
            'error',
            'fieldErrors',
            'loading',
        ]),
    },
    methods: {
      ...mapActions('users/updatePassword', [
          'updatePassword',
          'resetState',
          'clearErrors',
      ]),
      ...mapActions('userCredentials', [
          'callWithToken',
      ]),

      setSuccess () {
        this.isSuccess = true
      },

      validateBeforeSubmit() {
          this.$validator.validateAll().then(result => {
              if (result) {
              // eslint-disable-next-line
              // Set arguments for endpoint
                  let args = {
                      old_password: this.user.oldPassword,
                      new_password: this.user.newPassword,
                  }

                  const self = this
                  this.callWithToken({
                    parameters: args,
                    action: this.updatePassword,
                  })
                  .then( status => {
                    if (status) {
                      this.setSuccess()
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
