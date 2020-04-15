<template>
  <div class="CreditsCurrentCredit">
    <div @click="confirmUnassignCredit">
      <i class="el-icon-remove CreditsCurrentCredit__remove"></i>
    </div>
    <div class="CreditsCurrentCredit__wrapper">
      <h4>{{credit.name}}</h4>
      <span class="CreditsCurrentCredit__text">
        Początkowa wartość: {{credit.firstValue}}
      </span>
      <span class="CreditsCurrentCredit__text CreditsCurrentCredit__text--right">
        Pozostało do spłaty: {{credit.currentValue}}
      </span>
      <div style="margin-top: 10px;">
        <InputNumber
          :min="credit.minInstallment < credit.currentValue - credit.minInstallment
          ? credit.minInstallment : 0"
          :max="credit.currentValue"
          v-model="installment"
          :step="credit.currentValue > 1000 ? 1000 : credit.currentValue"
          class="CreditsCurrentCredit__input"
        />
        <Button @click="setCurrentValue" class="CreditsCurrentCredit__button">Wpłać</Button>
      </div>
    </div>
  </div>
</template>

<script src="./component.ts" lang="ts" />
<style src="./style.sass" scoped lang="sass"></style>
