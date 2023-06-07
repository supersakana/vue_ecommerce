<template>
    <nav class="flex justify-between p-5 fixed w-screen">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" class="w-[40px] h-[40px] hover:scale-[1.1] duration-500">
      </router-link>

      <div id="nav-links" class="flex items-center justify-center gap-x-3 text-sm md:text-lg duration-500">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
      </div>

      <router-link to="/cart">
        <div class="relative">
          <ion-icon name="cart-outline" class="font-bold text-3xl hover:scale-[1.1] duration-500"></ion-icon>
          <div class="bg-red-500 text-white text-xs w-[18px] h-[18px] rounded-full text-center flex items-center justify-center absolute -top-1 left-5">
            <span>{{ this.storeProducts.cartAmount }}</span>
          </div>
        </div>
      </router-link>
    </nav>
</template>
  
<script>
import { useProductStore } from '@/store/products';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav',
  setup() {
    const storeProducts = useProductStore()

    return {
      storeProducts,
    }
  },
}
</script>