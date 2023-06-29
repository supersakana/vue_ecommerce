<template>
    <div class="flex items-center justify-between gap-x-3 py-2 px-3 shadow-sm rounded-md border border-[#efeef1] text-sm">
        <ion-icon name="add" class="text-[#2c3e50] cursor-pointer hover:text-gray-500 duration-500"></ion-icon>
        <div>0</div>
        <ion-icon name="remove" class="text-[#2c3e50] cursor-pointer hover:text-gray-500 duration-500"></ion-icon>
    </div>
</template>
    
  <script>
  import { useProductStore } from '@/store/products';
  
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'QntToggler',
    setup() {
      const storeProducts = useProductStore()
  
      return storeProducts
    },
  }
  </script>