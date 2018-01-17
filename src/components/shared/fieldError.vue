<template>
  <span class="error-text help is-danger">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'field-error',
  // props: ['classn', 'err'],
};
</script>

<style scoped>
  .error-text {
    font-size: 13px;
    font-weight: 300;
    font-family: raleway;
    text-align: center;
    display: block;
  }
</style>
