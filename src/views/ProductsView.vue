<template>
  <div class="about">
    <h2 class="text-2xl font-bold text-center mb-6">Welcome to my room!</h2>
    <Products />
  </div>
</template>

<script>
import Products from '@/components/Products.vue';

export default {
  name: 'ProductsView',
  components: {
    Products
  },
}
</script>