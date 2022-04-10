<template>
  <div class="container">
    <h1>Contador</h1>
    <div class="display-container">
      <div class="display">
        {{ formatedCounter }}
      </div>
    </div>
    <div class="buttons-container">
      <button class="buttons" @click="decrement">-</button>
      <button class="buttons" @click="increment">+</button>
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
    return `Resultado: ${this.count}`;
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

<style scoped>
.display-container {
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.display {
  border: solid 2px #000;
  padding: 10px 20px 10px 20px;
  border-radius: 10px;
}

.buttons {
  margin: 10px;
  font-size: 50px;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
}

.buttons-container {
  display: flex;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
}
</style>
