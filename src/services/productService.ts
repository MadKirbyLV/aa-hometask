// import axios from 'axios';
import { type Product } from '@/types/Product'
import { useProductStore } from '@/stores/products'

// mock data
const mockData = [
  { id: 1, name: 'Apple', price: 1.99 },
  { id: 2, name: 'Banana', price: 0.99 },
  { id: 3, name: 'Orange', price: 1.49 },
  { id: 4, name: 'Grapes', price: 2.99 },
  { id: 5, name: 'Strawberry', price: 3.49 },
  { id: 6, name: 'Blueberry', price: 4.99 },
  { id: 7, name: 'Mango', price: 1.99 },
  { id: 8, name: 'Pineapple', price: 2.49 },
  { id: 9, name: 'Watermelon', price: 5.99 },
  { id: 10, name: 'Peach', price: 1.79 },
  { id: 11, name: 'Plum', price: 1.99 },
  { id: 12, name: 'Kiwi', price: 0.99 },
  { id: 13, name: 'Cherry', price: 3.99 },
  { id: 14, name: 'Pear', price: 1.49 },
  { id: 15, name: 'Papaya', price: 2.99 },
  { id: 16, name: 'Apple', price: 1.99 }, // repeated
  { id: 17, name: 'Banana', price: 0.99 }, // repeated
  { id: 18, name: 'Orange', price: 1.49 }, // repeated
  { id: 19, name: 'Grapes', price: 2.99 }, // repeated
  { id: 20, name: 'Strawberry', price: 3.49 } // repeated
]

// mock requests
const mockLoad = async (): Promise<Product[]> => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 1000)
  })
}
export const mockCreateProduct = async (newProduct: Omit<Product, 'id'>): Promise<Product> => {
  return new Promise<Product>((resolve) => {
    setTimeout(() => {
      const productStore = useProductStore()
      const products = productStore.products
      const newId = products.length ? Math.max(...products.map((p) => p.id)) + 1 : 1
      const productWithId = { id: newId, ...newProduct }
      resolve(productWithId)
    }, 500)
  })
}

export const mockDeleteProduct = async (productId: Number): Promise<Number> => {
  return new Promise<Number>((resolve, reject) => {
    setTimeout(() => {
      const productStore = useProductStore()
      const products = productStore.products
      const index = products.findIndex((p) => p.id === productId)
      if (index !== -1) {
        resolve(productId)
      } else {
        reject(new Error(`Product with ID ${productId} not found.`))
      }
    }, 500)
  })
}

export const fetchProducts = async (): Promise<Product[]> => {
  // const response = await axios.get(API_URL)
  const response = await mockLoad() // returns mocked data
  return response
}
export const createProduct = async (product: Omit<Product, 'id'>): Promise<Product> => {
  // const response = await axios.post(API_URL, product)
  const response = await mockCreateProduct(product) // returns mocked data
  return response
}

export const removeProduct = async (productId: Number): Promise<Number> => {
  // const response = await axios.delete(API_URL, productId)
  const response = await mockDeleteProduct(productId) // returns mocked data
  return response
}
