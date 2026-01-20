<template>
  <div class="basic">
    <h1>Vue基礎-計數器</h1>
    <h1 v-show="is_show">Count is : {{ count }}</h1>
    <hr>
    <input
      type="text"
      v-model="count"
    ><br>
    <button @click="increment">Increment</button><br>
    <button @click="toggleShow">Toggle Show</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const is_show = ref(true)

function increment() {
  count.value++
}

function toggleShow() {
  is_show.value = !is_show.value
}
</script>

<style>
hr {
  margin: 20px 0;
}
</style>
