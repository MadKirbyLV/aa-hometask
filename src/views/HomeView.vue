<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
// import ColumnGroup from 'primevue/columngroup';   // optional
// import Row from 'primevue/row';                   // optional
import { ref, onMounted } from 'vue'
// import { ProductService } from '@/service/ProductService'

onMounted(() => {
  // ProductService.getProductsMini().then((data) => (products.value = data))
  products.value = [
    { code: '1', name: 'a', category: 'a', quantity: 1 },
    { code: '2', name: 'b', category: 'a', quantity: 2 },
    { code: '3', name: 'c', category: 'b', quantity: 5 },
    { code: '4', name: 'd', category: 'b', quantity: 2 },
    { code: '5', name: 'e', category: 'c', quantity: 1 },
    { code: '6', name: 'a', category: 'a', quantity: 1 },
    { code: '7', name: 'b', category: 'a', quantity: 2 },
    { code: '8', name: 'c', category: 'b', quantity: 5 },
    { code: '9', name: 'd', category: 'b', quantity: 2 },
    { code: '10', name: 'e', category: 'c', quantity: 1 }
  ]
})

const products = ref()
</script>

<template>
  <div class="card">
    <DataTable
      :value="products"
      paginator
      :rows="5"
      :rows-per-page-options="[5, 10, 20, 50]"
      table-style="min-width: 50rem"
    >
      <Column field="code" header="Code"></Column>
      <Column field="name" header="Name"></Column>
      <Column field="category" header="Category"></Column>
      <Column field="quantity" header="Quantity"></Column>
    </DataTable>
  </div>
</template>
