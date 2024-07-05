import { defineStore } from 'pinia'
import { fetchProducts } from '@/services/productService'
import { type Product } from '@/types/Product'

interface ProductState {
  products: Product[]
  loading: boolean
  error: string | null
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: [],
    loading: false,
    error: null
  }),
  actions: {
    async loadProducts() {
      this.loading = true
      this.error = null
      try {
        const products = await fetchProducts()
        this.products = products
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message || 'Failed to load products'
        } else {
          this.error = 'Failed to load products'
        }
      } finally {
        this.loading = false
      }
    }
  }
})
