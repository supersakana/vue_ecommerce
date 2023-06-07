<template>
    <div class="p-3 max-w-[300px] h-full flex items-center justify-center">
        <img :src="product.img">
    </div>

    <div class="self-end">
        <div class="flex items-center justify-between">
            <h6 class="font-bold">{{ product.title }}</h6>
            <span class="text-2xl font-bold">${{ product.price }}</span>
        </div>

        <h6 class="text-sm">{{ product.description }}</h6>
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