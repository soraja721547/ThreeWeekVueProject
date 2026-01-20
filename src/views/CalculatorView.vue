<template>
  <div class="calculator">

    <h1>簡易計算機</h1>

    <input type="number" v-model.number="num1" />

    <select v-model="operator">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>

    <input type="number" v-model.number="num2" /> =

    <span>{{ result }}</span>

    <p v-if="warning" class="warning">{{ warning }}</p>

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const num1 = ref(0)
const num2 = ref(0)
const operator = ref('+')
const warning = ref('')

const result = computed(() => {
  switch (operator.value) {
    case '+':
      return num1.value + num2.value
    case '-':
      return num1.value - num2.value
    case '*':
      return num1.value * num2.value
    case '/':
      return num2.value === 0 ? '無限大' : num1.value / num2.value

    default:
      return 0
  }
})

watch([operator, num2], () => {
  if (operator.value === '/' && num2.value === 0) {
    warning.value = '警告：除數不能為零！'
  } else {
    warning.value = ''
  }
})
</script>
