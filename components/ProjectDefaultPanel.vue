<template>
  <div class="container h-full w-1/4 flex">
    <div class="container h-full bg-[#909090]">
      <div class="container mx-auto grid grid-rows-2 px-4 py-5">
        <h1>Label</h1>
        <input
          type="text"
          class="bg-transparent border-2 border-black border-opacity-20 rounded-lg px-2" />
      </div>
    </div>
    <div
      class="container h-full w-1/6 bg-[#B6B6B6] flex-col text-2xl justify-between text-center py-5 divide-y-2 divide-black text-[#494747]">
      <div class="space-y-4 py-5">
        <div
          v-for="count in playerCount"
          :key="count"
          class="flex justify-around">
          <font-awesome-icon icon="square-xmark" />
        </div>
      </div>
      <div class="py-5">
        <font-awesome-icon icon="square-xmark" />
      </div>
      <div class="py-5">
        <font-awesome-icon icon="square-xmark" />
      </div>
    </div>
  </div>
</template>

<script setup>
const playerCount = ref(11);
</script>

<style></style>
