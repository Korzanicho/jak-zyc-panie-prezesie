<template>
  <div class="Fees">
    <h3 class="Fees__title">Opłaty za dobra:</h3>
    <InputNumber class="Fees__input" v-model="feesValue" :min="0" :step="1000" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { InputNumber } from 'element-ui';

@Component({
  components: {
    InputNumber,
  },
})
export default class Fees extends Vue {
  private feesValue = 0;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .Fees
    flex-basis: 100%
    height: auto
    background-color: white
    box-shadow: 0 0 6px #9992c6
    display: flex
    align-items: center
    justify-content: space-around
    padding: 5px 10px
    color: #9992c6
    &__title
      flex-basis: 50%
    &__input
      flex-basis: 50%
</style>
