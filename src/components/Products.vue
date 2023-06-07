<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-9">
        <div class="flex flex-col justify-between items-center" :key="product.id" v-for="(product) in products">
            <Product :product="product" />
        </div>
    </div>
</template>
  
<script>
import { useProductStore } from '@/store/products';
import { computed } from 'vue'
import Product from '../components/Product.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Products',
  components: {
    Product
  },
  setup() {
    const storeProducts = useProductStore()
    const products = computed(() => storeProducts.products)

    return {
      storeProducts,
      products
    }
  },
}
</script>
