<template>
    <div>
        <h6 class="font-bold">{{ product.title }}</h6>
        <h6 class="text-sm">{{ product.description }}</h6>
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
