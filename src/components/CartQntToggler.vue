<template>
    <div class="flex flex-col items-center justify-between gap-y-3">
        <ion-icon @click="addToCart(product.id)" name="caret-up" class="text-xl text-gray-400 cursor-pointer hover:text-gray-300 duration-500"></ion-icon>
        <div>{{ product.quantity }}</div>
        <ion-icon v-if="product.quantity > 1" @click="removeFromCart(product.id)" name="caret-down" class="text-xl text-gray-400 cursor-pointer hover:text-gray-300 duration-500"></ion-icon>
        <ion-icon v-else name="caret-down" class="text-xl text-gray-300"></ion-icon>
    </div>
  </template>
    
  <script>
  import { useProductStore } from '@/store/products';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'CartQntToggler',
    props: {
      product: { type: Object },
    },
    setup() {
      const storeProducts = useProductStore()
  
      return storeProducts
    },
  }
  </script>