<template>
  <div class="container flex flex-col h-screen">
    <!-- Toolbar -->
    <ProjectToolbar
      v-on:navigateToPenSetting="enableCustomLayout"
      v-on:navigateToMainLayout="enableMainLayout" />
    <!-- Body -->
    <div class="flex-grow w-screen flex">
      <!-- Left panel -->
      <ProjectDefaultPanel />
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProjectDefaultPanel from "~/components/ProjectDefaultPanel.vue";
import ProjectToolbar from "~/components/ProjectToolbar.vue";

function enableCustomLayout() {
  setPageLayout("pen-setting");
  console.log("enableCustomLayout");
}
function enableMainLayout() {
  setPageLayout("main-project-layout");
  console.log("enableMainLayout");
}
</script>

<style></style>
