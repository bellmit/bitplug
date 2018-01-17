<template>
  <div class="card card-user">
    <div class="image">
      <!-- <img :src="require('@/assets/img/background.jpg')" alt="..."> -->
    </div>
    <div class="content">
      <div class="author">
        <!-- <img class="avatar border-white" :src="require('@/assets/img/faces/face-2.jpg')" alt="..."> -->
        <h4 class="title">{{ user.first_name }} {{ user.last_name }}
          <br>
          <a href="#">
            <small>{{ user.email }}</small>
          </a>
          <br>
          <a href="#">
            <small>{{ user.phone }}</small>
          </a>
        </h4>
      </div>
      <!-- <p class="description text-center">
      </p> -->
    </div>
    <hr>
    <!-- <div class="text-center">
      <div class="row">
        <div v-for="(info,index) in details" :key="index" :class="getClasses(index)">
          <h5>{{info.title}}
            <br>
            <small>{{info.subTitle}}</small>
          </h5>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    name: 'user-card',
    data () {
      return {
      }
    },
    computed: {
        ...mapGetters('userCredentials', [
          'user',
        ]),
    },
    methods: {
      getClasses (index) {
        var remainder = index % 3
        if (remainder === 0) {
          return 'col-md-3 col-md-offset-1'
        } else if (remainder === 2) {
          return 'col-md-4'
        } else {
          return 'col-md-3'
        }
      }
    }
  }

</script>
<style>
  
</style>
