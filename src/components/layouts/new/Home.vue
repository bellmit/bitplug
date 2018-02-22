<template>
  <div data-spy="scroll" data-target="#navbar" data-offset="30">
    <bit-header></bit-header>
    <bit-body></bit-body>
    <bit-footer></bit-footer>
  </div>
</template>
<script>
import BitBody from './Body.vue'
import BitHeader from './Header.vue'
import BitFooter from './Footer.vue'
export default {
  name: 'Bitplug-Home',
  components: {
    BitHeader,
    BitFooter,
    BitBody,
  }
}
</script>

<style lang="scss">
  @import '../../../assets/sass/bootstrap.scss';
  @import '../../../assets/sass/newstyle.scss';
</style>
