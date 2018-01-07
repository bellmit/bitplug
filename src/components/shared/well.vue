<template>
    <div>
        <div class="well custom-well opened" @click="toggleWell">
            <p class="title">{{ title }}</p>
            <i class="icon ti-angle-right" v-if="!open"></i>
            <i class="icon ti-angle-down" v-else></i>
        </div>

        <div v-show="open" class="well custom-well well-content opened">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    props: {
        title: {
            type: String,
            default: ''
        }
    },
    data () {
      return {
          open: false,
      }
    },
    methods: {
        toggleWell () {
            this.open = !this.open
        }
    }
  }

</script>

<style>
  
</style>
