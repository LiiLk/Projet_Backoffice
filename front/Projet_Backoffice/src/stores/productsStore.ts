// src/stores/productsStore.ts
import { defineStore } from 'pinia';

interface Product {
  id: number;
  name: string;
  price: number;
  isOnSale: boolean;
  salePrice: number;
  salePercentage: number;
  stock: number;
  sold: number;
  comments: Comment[];
}

interface Comment {
  id: number;
  text: string;
}

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Product[],
    selectedProduct: null as Product | null
  }),
  actions: {
    setProducts(products: Product[]) {
      this.products = products;
    },
    setSelectedProduct(product: Product) {
      this.selectedProduct = product;
    }
  }
});
