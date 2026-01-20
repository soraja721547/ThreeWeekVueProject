<template>
  <li @click="toggle">

    <input
      type="checkbox"
      :checked="todo.done"
      @click.stop="toggle"
    />
    <span :style="{ textDecoration: todo.done ? 'line-through' : 'none' }">
      {{ todo.text }}
    </span>

    <button @click.stop="remove">X</button>
  </li>
</template>

<script setup>

defineProps({
  todo: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['toggle', 'remove'])

function toggle() {
  emit('toggle')
}

function remove() {
  emit('remove')
}
</script>



<style scoped>
li {
  margin-top: 5px;
}

li:hover {
  background-color: #f0f0f01a;
}

span {
  margin: 0 10px;
}

button {
  background-color: rgba(255, 255, 255, 0);
  color: rgb(255, 255, 255);
  border: 2px solid rgba(255, 255, 255, 0);
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s;
}

button:hover {
  background-color: rgba(255, 0, 0, 0);
  color: rgb(255, 0, 0);
}
</style>
