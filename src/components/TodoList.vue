<template>
    <ul>
        <TodoItem
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @toggle="$emit('toggle', todo.id)"
            @remove="$emit('remove', todo.id)"
        />
    </ul>
</template>

<script setup>
import TodoItem from '../components/TodoItem.vue'

defineProps({
    todos: {
        type: Array,
        required: true
    }
})

defineEmits(['toggle', 'remove'])

</script>

<style scoped></style>
