<template>
    <div class="p-3 max-w-[230px] h-full flex items-center justify-center">
        <img :src="product.img">
    </div>

    <div class="self-end">
        <div class="flex items-center justify-between">
            <h6 class="font-bold">{{ product.title }}</h6>
            <span class="text-2xl font-bold">${{ product.price }}</span>
        </div>

        <h6 class="text-sm">{{ product.description }}</h6>

        <div class="flex justify-between items-center gap-x-3">
          <button class="bg-blue-500 hover:bg-blue-400 text-white py-2 px-3 text-sm font-bold rounded-md duration-500 my-3 shadow-md w-[110px] flex-1"
                  @click="addToCart(product.id)">
            Add to Cart
            <ion-icon :id="`check-${product.id}`" class="hidden" name="checkmark"></ion-icon>
          </button>

          <QntToggler />
        </div>
        
    </div>
</template>
  
<script>
import { useProductStore } from '@/store/products';
import QntToggler from './QntToggler.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Product',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    QntToggler
  },
  props: {
    product: { type: Object }
  },
  setup() {
    const storeProducts = useProductStore()

    return {
      storeProducts,
    }
  },
  methods: {
    addToCart(id){
      this.storeProducts.addToCart(id)
      this.$emit('popup-cart-modal', id)
    },
  },
}
</script>
