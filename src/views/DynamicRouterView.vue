<template>
  <div class="dynamicrouter">
    <h1>動態路由 + 嵌套路由 + function觸發路由</h1>
    <button @click="backhome">回首頁</button>
    <nav>
      <ul>
        <li
          v-for="i in 5"
          :key="i"
        >
          <RouterLink :to="`/dynamicrouter/try/${i}`"> I am page: {{ i }} </RouterLink>
        </li>
      </ul>
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
  import { RouterLink, RouterView, useRouter } from 'vue-router'

  const router = useRouter();

  const backhome = () => {
    router.push('/')
  }

</script>

<style scoped>
  
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

button {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
</style>
