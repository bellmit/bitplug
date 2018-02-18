<template>
  <div class="banner-error">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'autherror',
}
</script>

<style>
.banner-error {
    font-size: 16px;
    font-weight: 300;
    font-family: raleway;
    text-align: center;
    height: 60px;
    text-align: center;
    color: #f1270b;
    margin: 5px 0;
    padding: 9px;
    position: relative;
    background-color: white;
}
</style>
