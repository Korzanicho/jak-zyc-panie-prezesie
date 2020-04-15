<template>
  <section class="Multipler">
    <h3 class="Multipler__title">Mnożnik:</h3>
    <InputNumber class="Multipler__input" v-model="multiplerValue" :min="0"/>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { InputNumber } from 'element-ui';

@Component({
  components: {
    InputNumber,
  },
})
export default class Multipler extends Vue {
  private multiplerValue = 0;
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  .Multipler
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
