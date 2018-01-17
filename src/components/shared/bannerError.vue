<template>
  <div  id="bannerError" class="banner-err">
    <p v-if="hasClose" @click.stop="$emit('close')"><span class="x">&times;</span></p>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'bannererror',
  props: ['hasClose']
}
</script>

<style>
.banner-err {
    text-align: center;
    border-radius: 5px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-family: "Whitney SSm A", "Whitney SSm B", "Avenir", "Segoe UI", "Ubuntu", "Helvetica Neue", Helvetica, Arial, sans-serif;
    padding: 10px 0;
    -webkit-box-shadow: 0 1px 3px rgba(57,66,78,0.1);
    box-shadow: 0 1px 3px rgba(57,66,78,0.1);
    background: transparent;
    color: #f1270b;
    margin: 5px 0;
    padding: 9px;
    position: relative;
}

  .x {
    position: absolute;
    right: 10px;
    top: 5px;
    cursor: pointer;
  }
</style>
