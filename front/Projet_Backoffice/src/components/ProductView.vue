<template>
  <div>
    <select v-model="selectedProductId" @change="fetchProductDetails">
      <option disabled value="">Sélectionnez un produit</option>
      <option v-for="product in products" :key="product.id" :value="product.id">
        {{ product.name }}
      </option>
    </select>
    <div v-if="selectedProduct">
      <h2>{{ selectedProduct.name }}</h2>
      <p>Prix : {{ selectedProduct.price }}</p>
      <p v-if="selectedProduct.isOnSale">
        Prix promotionnel : {{ selectedProduct.salePrice }}
        Pourcentage de promotion : {{ selectedProduct.salePercentage }}%
      </p>
      <p>Quantité en stock : {{ selectedProduct.stock }}</p>
      <p>Nombre d'articles vendus : {{ selectedProduct.sold }}</p>
      <p>Commentaires :</p>
      <ul>
        <li v-for="comment in selectedProduct.comments" :key="comment.id">
          {{ comment.text }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { useProductsStore } from '@/stores/productsStore';

export default defineComponent({
  name: 'ProductDetails',
  setup() {
    const productsStore = useProductsStore();

    const fetchProducts = async () => {
      // Effectuez la requête pour obtenir tous les produits et les stocker dans le store
    };

    const fetchProductDetails = async () => {
      // Effectuez la requête pour obtenir les détails du produit sélectionné et les stocker dans le store
      if (selectedProductId.value) {
        const productId = selectedProductId.value;
        // Remplacez cette partie par la logique de récupération des données
        const response = await fetch(`https://example.com/api/products/${productId}`);
        const product = await response.json();
        productsStore.setSelectedProduct(product);
      }
    };

    const selectedProductId = ref<string | null>(null);

    return {
      products: computed(() => productsStore.products),
      selectedProduct: computed(() => productsStore.selectedProduct),
      selectedProductId,
      fetchProducts,
      fetchProductDetails
    };
  },
  mounted() {
    this.fetchProducts();
  }
});

</script>