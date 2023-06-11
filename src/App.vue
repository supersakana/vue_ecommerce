<template>
  <div class="min-h-screen bg-main bg-cover bg-center z-0">
    <Nav />
    <div class="px-10 py-[80px]">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>

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

nav{
  background-color: rgba(255, 255, 255, 0.62);  
  backdrop-filter: blur(5px);
}

.glass{
  background-color: rgba(172, 172, 172, 0.62);  
  backdrop-filter: blur(5px);
}

</style>
