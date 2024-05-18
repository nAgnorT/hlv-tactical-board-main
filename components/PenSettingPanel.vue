<template>
  <v-app class="container flex">
    <div class="container flex flex-col h-screen">
      <!-- Toolbar -->
      <project-toolbar />
      <!-- Body -->
      <div class="flex-grow w-screen flex">
        <!-- Left panel -->
        <div class="container h-full w-1/4 flex">
          <div class="container h-full bg-[#909090] flex-col">
            <div
              class="mx-4 my-2 px-4 py-5 flex items-center justify-start bg-[#B9B9B9] space-x-2">
              <font-awesome-icon icon="square-xmark" />
              <h1 class="font-bold text-xl">Tool name</h1>
            </div>
            <div>
              <div class="flex-col justify-between space-x-2 px-4 my-5">
                <div class="font-bold font-beni text-3xl tracking-wider">
                  Size: {{ penSize }}
                </div>
                <v-slider
                  v-model="penSize"
                  @update:model-value="penSizeChanged"
                  step="1"
                  class="px-4"></v-slider>
              </div>
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
        <slot />
      </div>
    </div>
  </v-app>
</template>

<script lang="ts" setup>
const playerCount = ref(11);
const penSize = ref(0);
function penSizeChanged() {}
</script>

<style></style>
