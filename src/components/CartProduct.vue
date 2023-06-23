<template>
  <div class="flex items-center justify-between gap-x-4 my-4">
    <div class="flex items-center gap-x-4">

      <CartQntToggler :product="product" />

      <div class="p-3 max-w-[100px] h-[100px] md:max-w-[150px] md:h-[150px] h-full flex items-center justify-center border duration-500">
          <img :src="product.img">
      </div>

      <div class="flex flex-col justify-center">
        <div>
          <h6 class="font-bold">{{ product.title }}</h6>
          <h6 class="text-sm">{{ product.description }}</h6>
        </div>

        <div class="mt-4">
          <span class="text-sm text-gray-400 hover:text-red-500 hover:underline duration-500 cursor-pointer"
                @click="removeAll(product.id)">
            {{ removeItemText() }}
          </span>
        </div>
      </div>
    </div>

    <span class="text-lg">${{ product.price * product.quantity }}</span>
  </div>
</template>
  
<script>
import { useProductStore } from '@/store/products';
import CartQntToggler from '../components/CartQntToggler.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'CartProduct',
  components: {
    CartQntToggler
  },
  props: {
    product: { type: Object }
  },
  setup() {
    const storeProducts = useProductStore()

    return storeProducts
  },
  methods: {
    removeItemText() {
      if(this.product.quantity < 2){
        return 'Remove'
      } else {
        return 'Remove All'
      }
    },
  },
}
</script>