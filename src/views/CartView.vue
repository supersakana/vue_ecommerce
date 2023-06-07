<template>
    <div class="cart">
      <h2 v-if="cart.length < 1" class="text-2xl font-bold text-center mb-6">Your cart is empty!</h2>
      <h2 v-else class="text-2xl font-bold text-center mb-6">Your cart</h2>
      <CartProducts />
    </div>
</template>

<script>
import CartProducts from '@/components/CartProducts.vue';
import { computed } from 'vue'
import { useProductStore } from '@/store/products';

export default {
  name: 'CartView',
  components: {
    CartProducts
  },
  setup() {
    const storeProducts = useProductStore()
     const cart = computed(() => storeProducts.cart)

    return{
      storeProducts,
      cart
    }
  },
}
</script>