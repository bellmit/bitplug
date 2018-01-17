<template>
    <button :disabled="true" :class="buttonclass || 'loading-btn'" class="gray-btn">
        <i class="fa fa-spinner fa-spin" aria-hidden="true"></i>
        <slot/>
    </button>
</template>

<style scoped>
    .loading-btn {
        background-color: rgba(0, 0, 0, .3);
        border: none;
        padding: 10px 0;
        width: auto;
    }

    .gray-btn {
        background-color: rgba(0, 0, 0, .3) !important;
    }
</style>

<script>

export default {
  name: 'formbtn',
  props: ['buttonclass'],
  components: {
  },
  mounted () {
  },
}
</script>

<style>
</style>
