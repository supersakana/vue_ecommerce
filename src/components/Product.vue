<template>
    <div class="p-3 max-w-[260px] h-full flex items-center justify-center">
        <img :src="product.img">
    </div>

    <div class="self-end">
        <div class="flex items-center justify-between">
            <h6 class="font-bold">{{ product.title }}</h6>
            <span class="text-2xl font-bold">${{ product.price }}</span>
        </div>

        <h6 class="text-sm">{{ product.description }}</h6>

        <button class="bg-blue-500 hover:bg-blue-400 text-white p-2 text-sm font-bold rounded-md duration-500">
            Add to Cart
        </button>
    </div>
</template>
  
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Product',
  props: {
    product: { type: Object }
  },
}
</script>
