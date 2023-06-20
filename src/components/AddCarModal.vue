<template>
    <div class="w-screen h-screen glass fixed top-0 left-0 z-1 grid grid-cols-[2fr,375px] shadow-lg">
      <div></div>

      <div class="bg-white flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center p-3">
            <div class="flex items-center gap-x-1">
              <ion-icon name="checkmark" class="text-3xl text-emerald-500"></ion-icon>
              <div class="font-bold text-2xl">
                Added to cart
              </div>
            </div>
            <ion-icon @click="closeModal" name="close" class="text-3xl cursor-pointer hover:scale-[1.1] hover:text-red-500 duration-400"></ion-icon>
          </div>

          <div class="flex items-center justify-between my-4 px-4">
            <div class="flex items-center gap-x-4">
              <div class="p-3 max-w-[100px] h-[100px] md:max-w-[150px] md:h-[150px] h-full flex items-center justify-center duration-500">
                  <img :src="product.img">
              </div>

              <div>
                  <h6 class="font-bold">{{ product.title }}</h6>
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-y-2 text-center px-5 my-4">
          <button class="bg-gradient-to-r from-[#1366ea] to-[#038df8] hover:from-[#288eee] hover:to-[#38b6f9] hover:scale-[1.03] text-white font-bold px-4 py-2 rounded-md duration-400">Continue Shopping</button>
          <button class="border-2 hover:scale-[1.03] hover:bg-gray-100 font-bold px-4 py-2 rounded-md duration-400">View cart & checkout</button>
        </div>

      </div>
    </div>
</template>

<script>

export default {
  name: 'AddCartModal',
  props: {
    product: { type: Object }
  },
  methods: {
    closeModal(){
      this.$emit('close-modal')
    }
  },
}
</script>
