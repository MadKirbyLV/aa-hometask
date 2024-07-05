<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { FilterMatchMode } from 'primevue/api'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import Card from 'primevue/card'
import Dialog from 'primevue/dialog'
import { ref, onMounted } from 'vue'
import { useProductStore } from '@/stores/products'
import { type Product } from '../types/Product'

const productStore = useProductStore()
let visible = ref(false)

onMounted(() => {
  productStore.loadProducts()
})

const newProduct = ref<Omit<Product, 'id'>>({
  name: '',
  price: 0
})

const handleOpenDialog = () => {
  newProduct.value = { name: '', price: 0.0 }
  visible.value = true
}
const handleAddProduct = () => {
  productStore.addProduct(newProduct.value)
  visible.value = false
}
const handleDeleteProduct = (productId: number) => {
  productStore.deleteProduct(productId)
}

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  id: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
})
</script>

<template>
  <Card>
    <template #content>
      <Dialog v-model:visible="visible" modal header="Add New Product">
        <form @submit.prevent="handleAddProduct">
          <div class="grid grid-cols-2 gap-2 m-1">
            <label for="name">Name</label>
            <InputText id="name" v-model="newProduct.name" placeholder="Product name" required />
            <label for="price">Price</label>
            <InputNumber
              id="price"
              v-model.number="newProduct.price"
              :min="0"
              :min-fraction-digits="2"
              :max-fraction-digits="5"
              required
            />
          </div>
          <Button type="submit" class="text-white">Add Product</Button>
        </form>
      </Dialog>
      <DataTable
        v-model:filters="filters"
        class=""
        :value="productStore.products"
        :loading="productStore.loading"
        filter-display="row"
        :global-filter-fields="['id', 'name']"
        paginator
        :rows="5"
        :rows-per-page-options="[5, 10, 20, 50]"
        table-style="min-width: 50rem; min-height: 300px;"
      >
        <template #header>
          <div class="flex justify-between">
            <Button label="Add product" class="mr-2 text-white" @click="handleOpenDialog" />
            <span class="relative">
              <i
                class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600"
              />
              <InputText
                v-model="filters['global'].value"
                placeholder="Search by id or name"
                class="pl-10 font-normal"
              />
            </span>
          </div>
        </template>
        <template #empty> No products found. </template>
        <template #loading> Loading product data. Please wait. </template>
        <Column field="id" header="Id" style="min-width: 12rem">
          <template #body="{ data }">
            {{ data.id }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              class="p-column-filter"
              placeholder="Search by id"
              @input="filterCallback()"
            />
          </template>
        </Column>
        <Column field="name" header="Name" style="min-width: 12rem">
          <template #body="{ data }">
            <InputText
              v-model="data.name"
              type="text"
              class="border-0"
              placeholder="Name value"
              required
            />
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <InputText
              v-model="filterModel.value"
              type="text"
              class="p-column-filter"
              placeholder="Search by name"
              @input="filterCallback()"
            />
          </template>
        </Column>
        <Column field="price" header="Price" style="min-width: 12rem">
          <template #body="{ data }">
            <InputText
              v-model="data.price"
              type="text"
              class="border-0 w-32"
              :min="0"
              :min-fraction-digits="2"
              :max-fraction-digits="5"
              placeholder="Price value"
            />
          </template>
        </Column>
        <Column field="actions" header="Actions">
          <template #body="{ data: { id } }">
            <Button class="text-white" @click="handleDeleteProduct(id)">Delete</Button>
          </template>
        </Column>
      </DataTable>
    </template>
  </Card>
</template>
