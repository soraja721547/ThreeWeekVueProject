<template>
  <div class="basic">
    <h1 :class="highlight">Vue基礎-計數器</h1>
    <h1 v-show="is_show">Count is : {{ count }}</h1>
    <!-- <hr> -->
    <input
      type="text"
      v-model="count"
      v-if="is_show"
    ><br>
    <button @click="increment">Increment</button><br>
    <button @click="toggleShow">Toggle Show</button><br>
    <button @click="toggleTitle">Toggle Title</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const count = ref(0)
const is_show = ref(true)
const highlight = ref('title')

function increment() {
  count.value++
}

function toggleShow() {
  is_show.value = !is_show.value
}

function toggleTitle() {
  highlight.value = highlight.value === 'title' ? '' : 'title'
}
</script>

<style>
hr {
  margin: 20px 0;
}
.title {
  color: white;
}
</style>
