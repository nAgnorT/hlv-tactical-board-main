<template>
  <v-app>
    <div>
      <div class="container py-5 h-screen flex space-x-5 min-w-full">
        <div
          class="container relative border-4 border-black h-full border-b-0 w-1/2 border-opacity-20">
          <div
            class="w-8 h-8 md:w-16 md:h-16 border-black border-t-0 border-r-0 border-2 rounded-bl-full absolute right-0 opacity-5"></div>
          <div
            class="w-1/2 h-1/4 absolute border-2 border-black border-l-0 border-t-0 opacity-20"></div>
          <div
            class="w-1/2 absolute border-2 border-black border-l-0 border-t-0 border-b-0 h-full opacity-5"></div>
          <div
            class="w-3/4 h-1/2 absolute border-2 border-black border-l-0 border-t-0 opacity-20"></div>
          <div
            class="w-3/4 h-full absolute border-2 border-black border-l-0 border-t-0 border-b-0 opacity-5"></div>
        </div>
        <div class="container mx-auto w-full">
          <div
            class="container mx-auto w-1/2 h-1/3 py-48 space-y-5"
            @submit.prevent="submit">
            <div class="font-beni font-bold text-5xl">Sign in</div>
            <div>
              <div class="text-lg">Username</div>
              <input
                type="text"
                v-model="form.username"
                class="border border-black border-opacity-20 w-2/3 py-2 px-2"
                required="true" />
            </div>
            <div>
              <div class="text-lg">Password</div>
              <input
                v-model="form.password"
                type="password"
                class="border border-black border-opacity-20 w-2/3 py-2 px-2"
                required="true" />
            </div>
            <div class="text-xl">
              Quên mật khẩu?
              <button class="hover:underline font-bold">
                Đặt lại mật khẩu?
              </button>
            </div>
            <div>
              <button
                type="submit"
                @click="submit"
                class="text-black font-beni font-bold bg-[#D2D2D2] w-2/3 border-2 border-black text-3xl py-1 hover:bg-black hover:text-white transition-all ease-in duration-[50ms]">
                Sign in
              </button>
            </div>
            <v-snackbar
              v-model="snackbarText"
              v-if="snackbar"
              location="top"
              close-delay="300">
              <div class="text-center font-bold">
                {{ snackbarText }}
              </div>
            </v-snackbar>
          </div>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script setup>
definePageMeta({
  layout: "blank",
});

const form = ref({
  username: "",
  password: "",
});

const snackbarText = ref("Login failed");

const snackbar = ref(false);

const router = useRouter();

const submit = async () => {
  try {
    const result = await useLogin(form.value);
    console.log(result);
    if (result.success) {
      router.push("/");
    } else if (result.error) {
      snackbar.value = true;
      snackbarText.value = result.error;
    } else if (result.username) {
      if (result.password) {
        snackbar.value = true;
        snackbarText.value = result.username[0] + " " + result.password[0];
      } else {
        snackbar.value = true;
        snackbarText.value = result.username[0];
      }
    } else if (result.password) {
      snackbar.value = true;
      snackbarText.value = result.password[0];
    } else {
      snackbar.value = true;
      snackbarText.value = "Login failed";
    }
  } catch (error) {
    console.log(error);
  }
};
</script>

<style></style>
