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
            <div class="flex items-center justify-center">
              <div
                class="mx-auto flex-col relative items-center justify-center">
                <div class="flex">
                  <button @click="toggleBackgroundColorPicker">
                    <font-awesome-icon
                      icon="square"
                      :color="currentBackgroundColorHex"
                      class="text-4xl" />
                  </button>
                  <h1 class="text-center pt-1 px-2">Nền</h1>
                </div>
                <v-color-picker
                  v-if="isBackgroundColorPickerVisible"
                  showSwatches="true"
                  v-model="currentBackgroundColorHex"
                  class="absolute z-10" />
              </div>
              <div class="mx-auto flex-col relative items-center">
                <div class="flex">
                  <button @click="toggleBorderColorPicker">
                    <font-awesome-icon
                      icon="square"
                      :color="currentBorderColorHex"
                      class="text-4xl" />
                  </button>
                  <h1 class="text-center pt-1 px-2">Viền</h1>
                </div>
                <v-color-picker
                  v-if="isBorderColorPickerVisible"
                  showSwatches="true"
                  v-model="currentBorderColorHex"
                  class="absolute z-10" />
              </div>
            </div>
            <div class="flex space-x-5 relative w-1/4 py-10">
              <h1>Viền</h1>
              <font-awesome-icon icon="square" />
              <font-awesome-icon icon="square" />
              <v-slider
                v-model="borderSize"
                step="1"
                class="absolute left-0 z-0 w-full"></v-slider>
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

const borderSize = ref(0);

const currentBackgroundColorHex = ref("#456456");
const currentBorderColorHex = ref("#456456");
const isBackgroundColorPickerVisible = ref(false);
const isBorderColorPickerVisible = ref(false);

function toggleBackgroundColorPicker() {
  isBackgroundColorPickerVisible.value = !isBackgroundColorPickerVisible.value;
}

function toggleBorderColorPicker() {
  isBorderColorPickerVisible.value = !isBorderColorPickerVisible.value;
}

function getSwitchLabel(value: boolean) {
  if (value) return "On";
  else return "Off";
}
</script>

<style></style>
