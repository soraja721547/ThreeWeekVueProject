<template>
    <main class="error-code">
        <h1>Error 404</h1>

        <div class="error-info">
            <h3>Page is not found</h3>
        </div>

        <div class="back-button">
            <router-link to="/">回首頁</router-link>
        </div>
    </main>
</template>

<script>

</script>

<style scoped>
.error-code {
    max-width: 600px;
    margin: 2rem auto;
    padding: 2rem;
    background: #ffffff;
    color: red;
    border-radius: 8px;
    border: 2px solid #ff0000;
    text-align: center;
}

.error-info {
    /* margin: 2rem 0; */
    padding: 0 0.1rem;
    /* background: rgb(255, 0, 0); */
    color: rgb(10, 10, 10);
    border-radius: 4px;
}

.back-button {
    margin-top: 2rem;
}

.back-button a {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: #42b983;
    color: white;
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.3s;
}

.back-button a:hover {
    background: #369970;
}
</style>
