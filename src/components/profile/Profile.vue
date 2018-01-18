<template>
    <div class="row">
      <div class="col-lg-12 col-md-12">
        <user-card>

        </user-card>
      </div>
      <div class="col-lg-6 col-sm-10 col-sm-offset-1 col-lg-offset-0">
        <edit-profile-form>

        </edit-profile-form>
      </div>
      <div class="col-lg-6 col-sm-10 col-sm-offset-1 col-lg-offset-0">
        <edit-password-form>

        </edit-password-form>
      </div>
    </div>
</template>
<script>
  import EditProfileForm from './EditProfileForm.vue'
  import EditPasswordForm from './EditPasswordForm.vue'
  import UserCard from './UserCard.vue'
  import MembersCard from './MembersCard.vue'
  export default {
    components: {
      EditProfileForm,
      EditPasswordForm,
      UserCard,
      MembersCard
    }
  }

</script>
<style>

</style>
