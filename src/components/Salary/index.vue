<template>
  <div class="Salary">
    <h3 class="Salary__title">Wypłaty pracowników:</h3>
    <InputNumber class="Salary__input" v-model="salaryValue" :min="0" :step="1000" />
  </div>
</template>

<style src="./style.sass" lang="sass"></style>
<script src="./component.ts" lang="ts" />
