<template>
    <form @submit.prevent="submit">
        <input
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
        />
        <button type="submit">新增</button>
    </form>
</template>

<script setup>
defineProps({
    modelValue: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['update:modelValue', 'add'])

function submit() {
    emit('add')
}
</script>

<style scoped></style>
