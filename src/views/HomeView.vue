<template>
  <div class="home">
    <h1>This is the homepage {{ name }}</h1>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { useItemStore } from '@/store/items';
import { computed } from 'vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  setup() {
    const storeItem = useItemStore()
    const name = computed(() => storeItem.name)

    return {
      storeItem,
      name
    }
  },
}
</script>
