<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-9">
        <div class="flex flex-col justify-between items-center" :key="product.id" v-for="(product) in products">
            <Product :product="product" />
        </div>
    </div>
    <button @click="toggleModal">Test</button>
    <div id="modal" v-if="this.display_modal" class="">
      <AddCartModal @close-modal="toggleModal" />
    </div>
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
