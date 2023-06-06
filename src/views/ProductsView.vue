<template>
  <div class="about">
    <h1 class="text-xl font-bold">This is the products page</h1>
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