<template>
  <div class="flex items-center justify-between">
    <div class="flex items-center">
      <div class="p-3 max-w-[150px] h-full flex items-center justify-center">
          <img :src="product.img">
      </div>

      <div>
          <h6 class="font-bold">{{ product.title }}</h6>
          <h6 class="text-sm">{{ product.description }}</h6>
      </div>
    </div>

    <span class="text-xl">${{ product.price }}</span>
  </div>
</template>
  
<script>
import { useProductStore } from '@/store/products';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CartProduct',
  props: {
    product: { type: Object }
  },
  setup() {
    const storeProducts = useProductStore()

    return storeProducts
  },
}
</script>