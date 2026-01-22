<template>
  <div class="productslist">
    <h1>產品列表 ( 串Fakestore API )</h1>

    <div v-if="loading">載入中...</div>

    <table v-else>
      <tr>
        <th>產品名稱</th>
        <th>圖片</th>
        <th>描述</th>
        <th>價錢</th>
      </tr>
      <tr v-for="product in products" :key="product.id">
          <ProductsItem :product="product" />
      </tr>
    </table>

    <button @click="fetchProducts" title="(axios.get)">刷新</button>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Fstoreapi from '@/api/axios'
import ProductsItem from '@/views/ProductsListView/ProductsItem.vue'

const products = ref(null)
const loading = ref(false)

async function fetchProducts() {

  try {
    loading.value = true
    const res = await Fstoreapi.get('products')
    products.value = res.data

  } catch (err) {
    console.error(err)
    alert('取得資料失敗')

  } finally {
    loading.value = false
  }
}

onMounted(fetchProducts)

</script>

<style scoped>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 1rem;
    background-color: #f2f2f215;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f200;
  }

  button {
    margin-top: 1rem;
    margin-left: auto;
    align-self: flex-end;
    width: 200px;
  }

  @media (min-width: 1024px) {
    .productslist{
      max-height: 70vh;
      overflow-y: scroll;
      scrollbar-color: rgba(255, 255, 255, 0.466) transparent;
    }
  }
</style>