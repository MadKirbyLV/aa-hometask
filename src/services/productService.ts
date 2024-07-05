import { type Product } from '@/types/Product'

// import axios from 'axios';
// const API_URL = 'product api url'; // Replace with your API URL

const mockData = [
  { id: 1, name: 'Product 1', price: 45.12 },
  { id: 2, name: 'Product 2', price: 78.34 },
  { id: 3, name: 'Product 3', price: 12.23 },
  { id: 4, name: 'Product 4', price: 55.67 },
  { id: 5, name: 'Product 5', price: 43.21 },
  { id: 6, name: 'Product 6', price: 22.33 },
  { id: 7, name: 'Product 7', price: 11.45 },
  { id: 8, name: 'Product 8', price: 66.78 },
  { id: 9, name: 'Product 9', price: 29.99 },
  { id: 10, name: 'Product 10', price: 77.56 },
  { id: 11, name: 'Product 11', price: 88.45 },
  { id: 12, name: 'Product 12', price: 23.89 },
  { id: 13, name: 'Product 13', price: 35.12 },
  { id: 14, name: 'Product 14', price: 47.77 },
  { id: 15, name: 'Product 15', price: 56.78 },
  { id: 16, name: 'Product 16', price: 31.22 },
  { id: 17, name: 'Product 17', price: 15.67 },
  { id: 18, name: 'Product 18', price: 24.55 },
  { id: 19, name: 'Product 19', price: 46.89 },
  { id: 20, name: 'Product 20', price: 18.76 },
  { id: 21, name: 'Product 21', price: 52.33 },
  { id: 22, name: 'Product 22', price: 66.99 },
  { id: 23, name: 'Product 23', price: 33.33 },
  { id: 24, name: 'Product 24', price: 25.67 },
  { id: 25, name: 'Product 25', price: 78.45 },
  { id: 26, name: 'Product 26', price: 54.23 },
  { id: 27, name: 'Product 27', price: 11.99 },
  { id: 28, name: 'Product 28', price: 45.0 },
  { id: 29, name: 'Product 29', price: 39.12 },
  { id: 30, name: 'Product 30', price: 62.34 }
]
const mockRequest = async (): Promise<Product[]> => {
  return new Promise<Product[]>((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, 1000)
  })
}

export const fetchProducts = async (): Promise<Product[]> => {
  // const response = await axios.get<Product[]>(API_URL)
  const response = await mockRequest() // returns mocked data
  return response
}
