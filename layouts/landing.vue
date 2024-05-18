<template>
  <div>
    <div class="container mx-auto h-screen pt-8">
      <div
        class="container mx-auto h-full w-5/6 border-2 border-black border-b-0 flex-col relative"
      >
        <div
          class="w-8 h-8 md:w-16 md:h-16 lg:h-24 lg:w-24 border-black border-t-0 border-l-0 border-2 rounded-br-full absolute"
        ></div>

        <div
          class="w-8 h-8 md:w-16 md:h-16 lg:h-24 lg:w-24 border-black border-t-0 border-r-0 border-2 rounded-bl-full absolute right-0"
        ></div>
        <div
          class="absolute top-32 bottom-0 my-auto w-64 h-32 border border-black left-0 right-0 mx-auto rounded-br-full rounded-bl-full border-t-0 border-opacity-10"
        ></div>
        <div
          class="container absolute mx-auto inset-0 h-full w-2/3 border-2 border-black border-t-0 border-b-0 border-dashed opacity-5 z-50 pointer-events-none"
        ></div>
        <div
          class="container absolute mx-auto inset-0 h-full w-1/3 border-2 border-black border-t-0 border-b-0 border-dashed opacity-5 z-50 pointer-events-none"
        ></div>

        <div
          class="container mx-auto h-1/2 w-2/3 border-2 border-black border-t-0 flex-col"
        >
          <div
            class="container mx-auto h-1/4 w-1/2 border-2 border-black border-t-0"
          ></div>

          <div class="text-center w-full font-bold font-beni">
            <h1
              class="mr-[-0.2em] mt-8 text-6xl md:text-8xl xl:tracking-[0.2em] lg:text-9xl lg:tracking-widest tracking-wide"
            >
              HLV ONLINE
            </h1>
            <h2 class="mt-8 text-2xl md:text-3xl lg:text-4xl">
              Wise men think alike
            </h2>
          </div>
        </div>

        <slot />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style></style>
