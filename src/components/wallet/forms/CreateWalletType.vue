<template>
  <div class="row">
  <div class="col-sm-6 col-md-6 col-sm-offset-3 col-md-offset-3">
  <div class="card">
    <div class="header">
      <h4 class="title">Create Wallet Type</h4>
    </div>
    <div class="content">
      <form @submit.prevent="validateBeforeSubmit">
        <BannerError v-if="error" :exempt="true">{{ error }}</BannerError>

        <div class="row">
        </div>
          <div class="col-md-6">
            <fg-input v-validate="'required|min:2'" 
                      type="text" 
                      :class="{'input': true, 'is-danger': errors.has('title') }" 
                      name="title" 
                      label="Title"
                      placeholder="NGN Wallet"
                      v-model="walletType.title">
            </fg-input>

            <FieldError>
                {{ errors.first('title') || fieldErrors.title }}
            </FieldError>
          </div>
          <div class="col-md-6">
            <fg-input v-validate="'required'" 
                      type="text" 
                      :class="{'input': true, 'is-danger': errors.has('currency') }" 
                      name="currency" 
                      label="Currency"
                      placeholder="NGN"
                      v-model="walletType.currency">
            </fg-input>

            <FieldError>
                {{ errors.first('currency') || fieldErrors.currency }}
            </FieldError>
          </div>
          <div class="col-md-6">
            <fg-input type="decimal"
                      v-validate="'required|decimal'"
                      :class="{'input': true, 'is-danger': errors.has('balance') }" 
                      name="balance" 
                      label="Initial Balance"
                      placeholder="0.00"
                      v-model="walletType.initialBalance">
            </fg-input>

            <FieldError>
                {{ errors.first('balance') || fieldErrors.initial_balance }}
            </FieldError>
          </div>
          <div class="col-md-12">
            <!-- <fg-input type="decimal"
                      v-validate="'required|decimal'"
                      :class="{'input': true, 'is-danger': errors.has('balance') }" 
                      name="balance" 
                      label="Initial Balance"
                      placeholder="0.00"
                      v-model="walletType.initialBalance">
            </fg-input> -->

            <drop-down title="Actions" icon="" 
                class="form-control"
                name="actions" 
                v-model="walletType.actions"
                v-validate="'required'">
              <li><a href="#">Fund</a></li>
              <li><a href="#">Withdraw</a></li>
              <li><a href="#">Recieve</a></li>
              <li><a href="#">Send</a></li>
            </drop-down>

            <FieldError>
                {{ errors.first('actions') || fieldErrors.actions }}
            </FieldError>
          </div>
          <!-- <div class="col-md-12">
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
          </div> -->

        <div class="row">
        </div>
        <div class="text-center">
          <button v-if="!loading" type="submit" class="btn btn-info btn-fill btn-wd">
          Create
          </button>
          <LoadingButton v-else buttonclass="btn btn-info btn-fill btn-wd">Creating...</LoadingButton>
        </div>
        <div class="clearfix"></div>
      </form>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "signup",
  destroyed() {
    this.$_$destroyedHook();
  },
  data() {
    return {
      walletType: {
        title: "",
        actions: [],
        currency: "",
        initialBalance: null,
        feeId: "",
        isCrypto: ""
      }
    };
  },
  computed: {
    ...mapGetters("register", ["error", "fieldErrors", "loading"])

    // isUserClient() {
    //     const clientType = this.$_$userTypesObject.client.id
    //     return this.user.userType === clientType
    // },
  },
  methods: {
    ...mapActions("register", ["register", "resetState", "clearErrors"]),

    clearFields() {
      this.walletType = {
        title: "",
        actions: [],
        currency: "",
        initialBalance: null,
        feeId: "",
        isCrypto: ""
      };
    },

    redirectBack() {
      this.$router.push({ name: "admin-wallet-types" });
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
            type: this.user.userType
          };

          const self = this;
          this.register(args).then(function(status) {
            if (status.state === true) {
              self.clearFields();
              self.redirectBack();
            }
          });
          return;
        }
      });
    }
  }
};
</script>
<style>

</style>
