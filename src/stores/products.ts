import { defineStore } from 'pinia'
import { removeProduct, createProduct, fetchProducts } from '@/services/productService'
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
    },
    async addProduct(newProduct: Omit<Product, 'id'>) {
      try {
        const product = await createProduct(newProduct)
        this.products.push(product)
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message || 'Failed to create product'
        } else {
          this.error = 'Failed to create product'
        }
      }
    },
    async deleteProduct(productId: Number) {
      try {
        await removeProduct(productId)
        this.products = this.products.filter((p) => p.id !== productId)
      } catch (error) {
        if (error instanceof Error) {
          this.error = error.message || 'Failed to create product'
        } else {
          this.error = 'Failed to create product'
        }
      }
    }
  }
})
