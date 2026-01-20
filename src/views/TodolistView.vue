<template>
  <div class="todolist">
    <h1>Todo List</h1>
    <div>
      <TodoInput
        v-model="newTodo"
        @add="addTodo"
      />

      <TodoList
        :todos="todos"
        @toggle="toggleTodo"
        @remove="removeTodo"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoInput from '../components/TodoInput.vue'
import TodoList from '../components/TodoList.vue'

const newTodo = ref('')
const todos = ref([])

function addTodo() {
  if (!newTodo.value.trim()) return

  todos.value.push({
    id: Date.now(),
    text: newTodo.value,
    done: false
  })

  newTodo.value = ''
}

function toggleTodo(id) {
  const todo = todos.value.find(t => t.id === id)
  if (todo) todo.done = !todo.done
}

function removeTodo(id) {
  todos.value = todos.value.filter(t => t.id !== id)
}
</script>