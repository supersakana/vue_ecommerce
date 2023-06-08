<template>
  <div class="flex items-center justify-between gap-x-4 my-4">
    <div class="flex items-center gap-x-4">
      <div class="p-3 max-w-[100px] h-[100px] md:max-w-[150px] md:h-[150px] h-full flex items-center justify-center border duration-500">
          <img :src="product.img">
      </div>

      <div>
          <h6 class="font-bold">{{ product.title }}</h6>
          <h6 class="text-sm">{{ product.description }}</h6>
      </div>
    </div>

    <span class="text-lg">${{ product.price }}</span>
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