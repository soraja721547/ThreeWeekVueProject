<template>
  <div class="tryparams">
    <!-- <h1>This is an tryparams page</h1> -->
    <div>Here is page {{ route.params.id }}</div>
  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(() => route.params, (newParams, oldParams) => {
  console.log(`id changed from ${oldParams.id} to ${newParams.id}`);
});
</script>
