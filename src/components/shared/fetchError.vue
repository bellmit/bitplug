<template>
  <h3 class="text-center fetch-err">
    <slot></slot>
  </h3>
</template>

<script>
export default {
  name: 'fetch-error',
};
</script>

<style>
  .fetch-err {
    text-align: center;
    font-size: 16px;
    font-family: "Whitney SSm A", "Whitney SSm B", "Avenir", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 10px 0;
    background: transparent;
    color: #f1270b;
    margin: 5px 0;
    position: relative;
}
</style>
