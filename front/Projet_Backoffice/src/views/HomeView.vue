<template>
  <div>
    <!-- Utilisez le composant ProductView ici -->
    <ProductView />
    <!-- ... -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import productView from '@/components/productView.vue';
export default defineComponent({
  name: 'HomeView',
  components: {
    productView
  },
  // ...
});
</script>
