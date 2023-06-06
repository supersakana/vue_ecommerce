<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div :key="product.id" v-for="(product) in products">
            <div>
                <h6 class="font-bold">{{ product.title }}</h6>
                <h6>{{ product.description }}</h6>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useProductStore } from '@/store/products';
import { computed } from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Product',
  components: {
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
