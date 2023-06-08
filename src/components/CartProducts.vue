<template>
    <div class="max-w-[800px]">
        <div :key="product.id" v-for="(product) in cart">
            <CartProduct :product="product" />
        </div>

        <hr class="my-7">

        <div class="flex items-center justify-between text-2xl font-bold">
          <span>Total</span>

          <div class="flex items-center gap-x-3">
            <span class="text-sm text-gray-500">USD</span>
            <span>${{ this.storeProducts.cartTotal }}</span>
          </div>
        </div>
    </div>
</template>
  
<script>
import { useProductStore } from '@/store/products';
import { computed } from 'vue'
import CartProduct from '../components/CartProduct.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CartProducts',
  components: {
    CartProduct
  },
  setup() {
    const storeProducts = useProductStore()
    const cart = computed(() => storeProducts.cart)

    return {
      storeProducts,
      cart
    }
  },
}
</script>