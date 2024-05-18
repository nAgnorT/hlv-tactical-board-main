<template>
  <div class="container h-full">Project number: {{ projectid }}</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "main-project-layout",
});

const { projectid } = useRoute().params;
</script>

<style></style>
