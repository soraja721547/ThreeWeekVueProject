<template>

    <td>{{ product.title }}</td>
    <td><img
            :src="product.image"
            :alt="product.title"
            width="100"
        ></td>
    <td>{{ product.description }}</td>
    <td>{{ product.price }}</td>

</template>

<script setup>
defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}
</style>
