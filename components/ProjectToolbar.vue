<template>
  <div
    class="flex justify-between bg-[#1E1E1E57] py-2 px-4 text-[#3A3A3C] text-3xl w-screen border border-b-4 border-black items-center">
    <div>
      <button
        @click="
          () => {
            $emit('navigateToMainLayout');
            isPenSetting = false;
            console.log(isPenSetting);
          }
        ">
        <font-awesome-icon icon="arrow-left" />
      </button>
    </div>
    <div class="space-x-8">
      <button
        @click="
          () => {
            $emit('navigateToPenSetting');
            isPenSetting = true;
            console.log(isPenSetting);
          }
        "
        :class="` bg-black ${isPenSetting ? 'text-blue-600' : ' text-white'}`">
        <font-awesome-icon icon="pen" />
      </button>
      <font-awesome-icon icon="square-xmark" />
      <font-awesome-icon icon="square-xmark" />
      <font-awesome-icon icon="square-xmark" />
      <font-awesome-icon icon="square-xmark" />
      <font-awesome-icon icon="square-xmark" />
    </div>
    <div>
      <font-awesome-icon icon="bars" />
    </div>
  </div>
</template>

<script>
function navigateToPenSetting() {
  isPenSetting.value = true;
  this.$emit("navigateToPenSetting");
}

function navigateToMainLayout() {
  isPenSetting.value = false;
  this.$emit("navigateToMainLayout");
}

const isPenSetting = ref(true);

function changePenSetting(value) {
  if (value == "pen-setting") {
    isPenSetting.value = true;
  } else {
    isPenSetting.value = false;
  }
}

function enableCustomLayout() {
  setPageLayout("pen-setting");
  console.log("enableCustomLayout");
}
function enableMainLayout() {
  setPageLayout("main-project-layout");
  console.log("enableMainLayout");
}
</script>

<style scoped></style>
