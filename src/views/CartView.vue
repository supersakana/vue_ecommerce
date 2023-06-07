<template>
    <div class="cart">
      <h1 class="text-2xl font-bold text-center mb-6">Your cart</h1>
      <CartProducts />
    </div>
</template>

<script>
import CartProducts from '@/components/CartProducts.vue';

export default {
  name: 'CartView',
  components: {
    CartProducts
  },
}
</script>