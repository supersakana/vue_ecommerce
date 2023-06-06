<template>
    <nav class="flex justify-between bg-white p-5">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" class="w-[40px] h-[40px]">
      </router-link>

      <div id="nav-links" class="flex items-center justify-center gap-x-3 text-sm md:text-lg duration-500">
        <router-link to="/">Home</router-link>
        <router-link to="/products">Products</router-link>
        <router-link to="/services">Services</router-link>
      </div>

      <router-link to="/cart">
        <ion-icon name="cart-outline" class="font-bold text-3xl"></ion-icon>
      </router-link>
    </nav>
</template>
  
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Nav',
}
</script>