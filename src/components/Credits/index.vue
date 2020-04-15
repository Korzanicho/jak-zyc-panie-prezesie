<template>
  <section class="Credits">
    <h3 class="Credits__title">Kredyty:</h3>
    <Select
      class="Credits__input"
      v-model="selectedCredit"
      v-if="credits.length<2"
      placeholder="Wybierz kredyt"
      value-key="creditName"
    >
      <Option
        v-for="option in availableCredits"
        :key="option.creditName"
        :label="option.creditName"
        :value="option"
        />
    </Select>
    <Button
      @click="assignNewCredit"
      class="Credits__input"
      :disabled="credits.length>=2"
      v-if="credits.length<2"
    >
      Dodaj
    </Button>
    <span v-if="credits.length>=2">Osiągnięto maksymalną ilość kredytów dla gracza</span>
    <div class="Credits__list">
      <CreditsCurrentCredit
        v-for="credit in credits"
        :key="credit.uuid"
        :credit="credit"
        @handleUnassignCurrentCredit="handleUnassignCurrentCredit"
      />
    </div>
  </section>
</template>

<script src="./component.ts" lang="ts" />
<style src="./style.sass" scoped lang="sass"></style>
