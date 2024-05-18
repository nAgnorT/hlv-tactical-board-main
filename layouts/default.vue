<template>
  <div>
    <div class="container mx-auto px-5 flex flex-col h-screen">
      <!-- Header -->
      <div class="flex-none">
        <div class="container mx-auto flex space-x-2 py-2">
          <h1
            class="bg-[#909090] w-fit py-2 rounded-lg font-beni text-6xl font-normal px-6">
            HOME
          </h1>
          <div
            class="space-x-2 w-full flex justify-end content-center border-b-2 border-black divide-x-2 divide-black">
            <div
              class="font-beni text-4xl font-normal text-center content-center">
              PREMIUM
            </div>
            <div class="content-center">
              <button class="bg-[#909090] rounded-full p-2 m-2">Setting</button>

              <button class="bg-[#909090] rounded-full p-2 m-2">Exit</button>
            </div>
          </div>
        </div>
      </div>
      <!-- Body -->
      <div class="flex-grow flex relative space-x-2 justify-between">
        <!-- Navigation bar -->
        <div
          class="container sticky top-12 w-48 flex flex-col h-fill bg-[#909090] rounded-xl space-y-6 text-[#3A3A3C] divide-y-2 divide-black md:min-w-48 md:max-w-48 lg:min-w-72 lg:max-w-72 transition-transform ease-in duration-75">
          <div class="container mx-auto flex flex-col">
            <button
              class="py-5 hover:bg-slate-600 rounded-xl transition duration-30">
              Recent
            </button>

            <button
              class="py-5 hover:bg-slate-600 rounded-xl transition duration-30">
              Project
            </button>
          </div>
          <div class="container mx-auto">
            <div class="container mx-auto flex flex-col">
              <p class="text-3xl font-bold p-4">Favorite</p>

              <button
                class="py-5 hover:bg-slate-600 rounded-xl transition duration-30">
                Name name
              </button>
              <button
                class="py-5 hover:bg-slate-600 rounded-xl transition duration-30">
                Name name
              </button>
              <button
                class="py-5 hover:bg-slate-600 rounded-xl transition duration-30">
                Name name
              </button>
              <button
                class="py-5 hover:bg-slate-600 rounded-xl transition duration-30">
                Name name
              </button>
            </div>
          </div>
        </div>

        <slot />
      </div>
      <div class="flex-none h-fit"><br /></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
html {
  overflow-y: none;
}
</style>
