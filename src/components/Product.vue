<template>
    <div class="p-3 max-w-[230px] h-full flex items-center justify-center">
        <img :src="product.img">
    </div>

    <div class="self-end">
        <div class="flex items-center justify-between">
            <h6 class="font-bold">{{ product.title }}</h6>
            <span class="text-2xl font-bold">${{ product.price }}</span>
        </div>

        <h6 class="text-sm">{{ product.description }}</h6>

        <button class="bg-blue-500 hover:bg-blue-400 text-white py-2 px-3 text-sm font-bold rounded-md duration-500 my-3 shadow-md w-[110px]"
                @click="addToCart($event, product.id)">
          Add to Cart
          <ion-icon :id="`check-${product.id}`" class="hidden" name="checkmark"></ion-icon>
        </button>
    </div>
</template>
  
<script>
import { useProductStore } from '@/store/products';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Product',
  props: {
    product: { type: Object }
  },
  setup() {
    const storeProducts = useProductStore()

    return {
      storeProducts,
    }
  },
  methods: {
    addToCart(e, id){
      this.storeProducts.addToCart(id)
      e.target.innerHTML = '<p>Added &#9989;<p>'
      e.target.classList.remove('bg-blue-500', 'hover:bg-blue-400', 'duration-500')
      e.target.classList.add('bg-[#8b8b8b]')
      e.target.disabled = true

      setTimeout(() => {
        // console.log('Foo bar')
        e.target.innerText = 'Add to cart'
        e.target.classList.add('bg-blue-500', 'hover:bg-blue-400', 'duration-500')
        e.target.classList.remove('bg-[#8b8b8b]')
        e.target.disabled = false
      }, 1500)
    },
  },
}
</script>
