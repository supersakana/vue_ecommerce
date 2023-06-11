<template>
    <div id="dialoge" class="w-screen h-screen glass fixed top-0 left-0 z-1 grid grid-cols-[2fr,375px] shadow-lg">
      <div></div>

      <div class="bg-white">
        <div class="flex justify-between items-center p-3">
          <div class="font-bold text-2xl">
            Added to cart
          </div>
          <ion-icon name="close" class="text-3xl cursor-pointer hover:scale-[1.2] hover:text-red-500 duration-500"></ion-icon>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'AddCartModal',
}
</script>