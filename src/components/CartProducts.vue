<template>
    <div class="max-w-[800px]">
        <!-- Temp -->
        <div>{{ storeProducts.cartTable }}</div>
        <!-- Temp -->

        <div :key="product.id" v-for="(product) in storeProducts.cartUniq">
            <CartProduct :product="product" :quantity="storeProducts.cartTable[product.id]" />
        </div>

        <hr class="my-7">

        <div class="flex items-center justify-between text-2xl font-bold">
          <span>Total:</span>

          <div class="flex items-center gap-x-3">
            <span class="text-sm text-gray-500">USD</span>
            <span>${{ this.storeProducts.cartTotal }}</span>
          </div>
        </div>

        <div class="flex justify-end">
          <button class="bg-gradient-to-r from-[#1366ea] to-[#038df8] hover:from-[#288eee] hover:to-[#38b6f9] hover:scale-[1.1] text-white font-bold px-4 py-2 mt-8 rounded-md duration-500 flex items-center gap-x-1">
            Checkout
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </button>
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