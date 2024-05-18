<template>
  <div>
    <div class="container py-5 h-screen flex space-x-5 min-w-full">
      <div
        class="container relative border-4 border-black h-full border-b-0 w-1/2 border-opacity-20"
      >
        <div
          class="w-8 h-8 md:w-16 md:h-16 border-black border-t-0 border-r-0 border-2 rounded-bl-full absolute right-0 opacity-5"
        ></div>
        <div
          class="w-1/2 h-1/4 absolute border-2 border-black border-l-0 border-t-0 opacity-20"
        ></div>
        <div
          class="w-1/2 absolute border-2 border-black border-l-0 border-t-0 border-b-0 h-full opacity-5"
        ></div>
        <div
          class="w-3/4 h-1/2 absolute border-2 border-black border-l-0 border-t-0 opacity-20"
        ></div>
        <div
          class="w-3/4 h-full absolute border-2 border-black border-l-0 border-t-0 border-b-0 opacity-5"
        ></div>
      </div>

      <div class="container mx-auto w-full" @submit.prevent="submit">
        <div class="container mx-auto w-1/2 h-1/3 py-48 space-y-5">
          <div class="font-beni font-bold text-5xl">Sign up</div>
          <div>
            <div class="text-lg">Email</div>
            <input
              v-model="email"
              type="email"
              class="border border-black border-opacity-20 w-2/3 py-2 px-2"
              required
            />
          </div>
          <div>
            <div class="text-lg">Username</div>
            <input
              v-model="name"
              type="text"
              class="border border-black border-opacity-20 w-2/3 py-2 px-2"
              required
            />
          </div>
          <div>
            <div class="text-lg">Password</div>
            <input
              v-model="password"
              type="password"
              class="border border-black border-opacity-20 w-2/3 py-2 px-2"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              @click="submit"
              class="text-black font-beni font-bold bg-[#D2D2D2] w-2/3 border-2 border-black text-3xl py-1 hover:bg-black hover:text-white transition-all ease-in duration-[50ms]"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "blank",
});

const name = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();

const submit = async () => {
  await fetch("http://localhost:8000/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      name,
      password,
    }),
  });
  await router.push({ path: "/login" });
};
</script>

<style></style>
