<template>
  <div class="row">
  <div class="col-sm-6 col-md-6 col-sm-offset-3 col-md-offset-3">
  <div class="card">
    <div class="header">
      <h4 class="title">Sign Up</h4>
    </div>
    <div class="content">
      <form>
        <div class="row">
          <div class="col-md-6">
            <fg-input type="text"
                      label="First Name"
                      placeholder="First Name"
                      v-model="user.firstName">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="text"
                      label="Last Name"
                      placeholder="Last Name"
                      v-model="user.lastName">
            </fg-input>
          </div>
        </div>
          <div class="col-md-6">
            <fg-input type="email"
                      label="Email"
                      placeholder="Email"
                      v-model="user.email">
            </fg-input>
          </div>
          <div class="col-md-6">
            <fg-input type="number"
                      label="Phone Number"
                      placeholder="Phone Number"
                      v-model="user.phone">
            </fg-input>
          </div>
          <div class="col-md-12">
            <fg-input type="password"
                      label="Password"
                      placeholder="Password"
                      v-model="user.password">
            </fg-input>
          </div>

        <div class="row">
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-info btn-fill btn-wd" @click.prevent="updateProfile">
            Sign Up
          </button>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
  export default {
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
    methods: {
      updateProfile () {
        alert('Your data: ' + JSON.stringify(this.user))
      }
    }
  }

</script>
<style>

</style>
