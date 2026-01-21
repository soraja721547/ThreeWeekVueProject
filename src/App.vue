<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container">
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@/assets/logo.svg"
        width="50"
        height="50"
      />

      <div class="wrapper">
        <HelloWorld msg="Welcome My Vue Project!" />

        <nav>
          <RouterLink to="/">首頁</RouterLink>
          <RouterLink to="/dynamicrouter">動態路由</RouterLink>
          <RouterLink to="/">projectB</RouterLink>
          <RouterLink to="/">projectC</RouterLink>
          <RouterLink to="/about">關於我</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView class="routerview" />
  </div>
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  justify-content: center;
  position: unset;
  margin-bottom: 2rem;
}

.logo {
  display: block;
  margin: 2rem auto 0.6rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  /* margin-top: 2rem; */
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  .container {
    width: 68vw;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    top: 0;
    position: fixed;
    margin: unset;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding-left: 0.3rem;
    margin-top: 0.8rem;
  }

  .routerview {
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-right: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0 3rem;
  }
}
</style>
