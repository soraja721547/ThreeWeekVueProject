<template>
  <div class="tryaxios">
    <h1>Try to axios</h1>
    <div>
      <button @click="fetchTodo">重新取得(axios.get)</button>

      <div v-if="loading">載入中...</div>

      <pre v-else>{{ todo }}</pre>
    </div>
    <div>
      <button @click="addTodo">新增 Todo(axios.post)</button>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

const todo = ref(null)
const loading = ref(false)

async function fetchTodo() {

  try {
    loading.value = true
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    todo.value = res.data

  } catch (err) {
    console.error(err)
    alert('取得資料失敗')

  } finally {
    loading.value = false
  }
}

onMounted(fetchTodo)

async function addTodo() {
  const res = await axios.post(
    'https://jsonplaceholder.typicode.com/todos',
    {
      title: 'Learn Vue Axios',
      completed: false
    }
  )

  console.log('新增成功', res.data.title)
  alert(`新增成功 ${res.data.title}`)
}
</script>

<style scoped>
  button {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
</style>