<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import { FilterMatchMode } from 'primevue/api'
import InputText from 'primevue/inputtext'
// import Row from 'primevue/row';                   // optional
import { ref, onMounted } from 'vue'
// import { ProductService } from '@/service/ProductService'
import { useProductStore } from '@/stores/products'
const productStore = useProductStore()

onMounted(() => {
  productStore.loadProducts()
})

const filters = ref({
  global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  id: { value: null, matchMode: FilterMatchMode.CONTAINS },
  name: { value: null, matchMode: FilterMatchMode.STARTS_WITH }
})
</script>

<template>
  <div class="card">
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
        <div class="flex justify-end">
          <span class="relative">
            <i
              class="pi pi-search absolute top-2/4 -mt-2 left-3 text-surface-400 dark:text-surface-600"
            />
            <InputText
              v-model="filters['global'].value"
              placeholder="Keyword Search"
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
            placeholder="Search by name"
            @input="filterCallback()"
          />
        </template>
      </Column>
      <Column field="name" header="Name" style="min-width: 12rem">
        <template #body="{ data }">
          {{ data.name }}
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
          {{ data.price }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>
