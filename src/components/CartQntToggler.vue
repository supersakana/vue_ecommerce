<template>
    <div class="flex flex-col items-center justify-between gap-y-3">
        <ion-icon @click="addToCart(product.id)" name="caret-up" class="text-xl text-gray-400 cursor-pointer hover:text-gray-300 duration-500"></ion-icon>
        <div>{{ quantity }}</div>
        <ion-icon name="caret-down" class="text-xl text-gray-400 cursor-pointer hover:text-gray-300 duration-500"></ion-icon>
    </div>
  </template>
    
  <script>
  import { useProductStore } from '@/store/products';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'CartQntToggler',
    props: {
      product: { type: Object },
      quantity: { type: Number }
    },
    setup() {
      const storeProducts = useProductStore()
  
      return storeProducts
    },
  }
  </script>