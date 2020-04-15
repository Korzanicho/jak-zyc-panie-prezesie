<template>
  <header class="Header">
    <img alt="Vue logo" src="./../../assets/logo.jpg">
  </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Header extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .Header
    display: flex
    justify-content: center
</style>
