<template>
    <div>
        <div :key="product.id" v-for="(product) in cart">
            <CartProduct :product="product" />
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