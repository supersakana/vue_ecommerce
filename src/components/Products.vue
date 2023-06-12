<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-9">
        <div class="flex flex-col justify-between items-center" :key="product.id" v-for="(product) in products">
            <Product :product="product" />
        </div>
    </div>
    <button @click="toggleModal">Test</button>
    
    <Transition  name="fade">
      <div id="modal" v-if="this.display_modal" class="">
        <AddCartModal @close-modal="toggleModal" />
      </div>
    </Transition>
</template>
  
<script>
import { useProductStore } from '@/store/products';
import { computed } from 'vue'
import Product from '../components/Product.vue'
import AddCartModal from './AddCarModal.vue';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Products',
  components: {
    Product,
    AddCartModal
  },
  setup() {
    const storeProducts = useProductStore()
    const products = computed(() => storeProducts.products)

    return {
      storeProducts,
      products
    }
  },
  data(){
    return {
      display_modal: false
    }
  },
  methods: {
    toggleModal(){
      this.display_modal = !this.display_modal
    },
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
