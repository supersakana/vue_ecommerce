<template>
  <div class="h-screen bg-main bg-cover bg-center">
    <nav class="flex justify-between bg-white p-5">
      <router-link to="/">
        <img src="./assets/logo.png" alt="logo" class="w-[40px] h-[40px]">
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
  <router-view/>

  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #1366ea;
}
</style>
