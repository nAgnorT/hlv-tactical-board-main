<template>
  <div class="container mx-auto flex justify-center pt-36">
    <NuxtLink to="/login">
      <button
        class="text-black font-beni font-bold bg-[#D2D2D2] border-4 border-black px-24 py-2 text-4xl hover:bg-black hover:text-white transition-all ease-in duration-[50ms]"
      >
        Sign in
      </button>
    </NuxtLink>
  </div>
  <div class="flex justify-center py-5">
    Don't have account?
    <NuxtLink to="/signup"
      ><button class="mx-1 font-bold hover:underline">Sign up</button></NuxtLink
    >
  </div>
</template>

<script setup>
definePageMeta({
  layout: "landing",
});
</script>

<style></style>
