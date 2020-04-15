<template>
  <main id="app">
    <Header/>
    <div class="row">
      <Multipler />
    </div>
    <div class="row">
      <Salary />
    </div>
    <div class="row">
      <Fees />
    </div>
    <div class="row">
      <Credits />
    </div>
  </main>
</template>

<script lang="ts">
import 'element-ui/lib/theme-chalk/index.css';
import { Component, Vue } from 'vue-property-decorator';
import Credits from '@/components/Credits/index.vue';
import Salary from '@/components/Salary/index.vue';
import Header from '@/components/Header/index.vue';
import Multipler from '@/components/Multipler/index.vue';
import Fees from '@/components/Fees/index.vue';

@Component({
  components: {
    Fees,
    Salary,
    Header,
    Credits,
    Multipler,
  },
})
export default class App extends Vue {}
</script>

<style lang="sass">
*
  box-sizing: border-box
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  background-color: #f7f7f7
  max-width: 768px
  margin: 0 auto
  padding: 10px
  .row
    display: flex
    flex-wrap: wrap
    margin-top: 30px
    justify-content: space-around

@media only screen and (max-width: 530px)
  .el-message-box
    width: auto
</style>
