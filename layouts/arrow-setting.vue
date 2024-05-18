<template>
  <v-app class="container flex">
    <div class="container flex flex-col h-screen">
      <!-- Toolbar -->
      <project-toolbar
        v-on:navigateToMainLayout="enableMainLayout"
        :isPenSetting.value="true" />
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
            <div
              class="mx-4 my-2 px-4 py-4 flex bg-[#B9B9B9] space-x-2 flex-col">
              <div
                class="container flex justify-items-start items-center mx-4 space-x-8">
                <font-awesome-icon icon="square" class="text-4xl" />

                <div
                  class="container flex text-4xl justify-items-start space-x-3">
                  <font-awesome-icon icon="square" />
                  <font-awesome-icon icon="square" />
                  <font-awesome-icon icon="square" />
                </div>
              </div>
              <div class="flex mx-auto w-full pt-8">
                <h1 class="items-center text-center font-bold text-xl">
                  Width
                </h1>
                <v-slider
                  v-model="arrowSize"
                  step="1"
                  class="w-1/2 px-4"></v-slider>
              </div>
            </div>
            <div
              class="mx-4 my-2 px-4 py-5 flex bg-[#B9B9B9] space-x-2 flex-col">
              <div class="space-y-2">
                <h1 class="font-bold text-xl">Arrow head</h1>

                <div class="container flex space-x-2 text-black">
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                </div>
              </div>
            </div>
            <div
              class="mx-4 my-2 px-4 py-5 flex bg-[#B9B9B9] space-x-2 flex-col">
              <div class="space-y-2">
                <h1 class="font-bold text-xl">Arrow tail</h1>

                <div class="container flex space-x-2 text-black">
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                  <font-awesome-icon icon="square" class="text-4xl" />
                </div>
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

const arrowSize = ref(0);

function enableMainLayout() {
  setPageLayout("main-project-layout");
  console.log("enableMainLayout");
}

const isNumberSwitchOn = ref(true);
const isNameSwitchOn = ref(true);
const isArrowSwitchOn = ref(true);

function getSwitchLabel(value: boolean) {
  if (value) return "On";
  else return "Off";
}
</script>

<style></style>
