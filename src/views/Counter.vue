<template>
  <div>
    <h1>Contador</h1>
    <div>
      <button v-on:click="decrement">-</button>
      {{ formatedCounter }}
      <button v-on:click="increment">+</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class Counter extends Vue {
  count = 0;

  //Isso é uma variável computada
  get formatedCounter(): string {
    return `Soma: ${this.count}`;
  }

  increment(): void {
    this.count++;
  }

  decrement(): void {
    this.count--;
  }

  mounted(): void {
    console.log("Counter");
  }
}
</script>

<style></style>
