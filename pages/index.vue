<template>
  <div class="container mx-auto p-2">
    <!-- Toolbar -->
    <div
      class="container mx-auto py-5 flex content-center px-16 justify-between">
      <div class="container mx-auto flex space-x-4">
        <button
          class="border border-black bg-[#696969] text-[#F2F2F2] px-12 py-2 text-xl hover:bg-slate-600">
          + ADD
        </button>
        <div class="content-center space-x-2 text-3xl">
          <button>
            <font-awesome-icon icon="magnifying-glass" />
          </button>
          <input
            type="text"
            class="border-b border-black border-opacity-100 focus:outline-none px-2" />
          <button>
            <font-awesome-icon icon="filter" />
          </button>
        </div>
      </div>
      <div class="flex space-x-4 text-3xl py-2 items-center justify-around">
        <button
          @click="changeGridMode(`grid`)"
          class="group border border-transparent p-1 hover:border-gray-200 hover:bg-gray-50 hover:bg-opacity-25 focus:border focus:shadow-md">
          <div
            class="bg-stone-200 p-1 hover:bg-opacity-40 group-focus:bg-white">
            <font-awesome-icon icon="grip" />
          </div>
        </button>
        <button
          @click="changeGridMode(`list`)"
          class="group border border-transparent p-1 hover:border-gray-200 hover:bg-gray-50 hover:bg-opacity-25 focus:border focus:shadow-md">
          <div
            class="bg-stone-200 p-1 hover:bg-opacity-40 group-focus:bg-white">
            <font-awesome-icon icon="list" />
          </div>
        </button>
      </div>
    </div>
    <div class="overflow-y-scroll h-[70vh]">
      <div
        :key="gridMode"
        :class="`grid grid-flow-row place-content-center ${
          gridMode ? 'grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 '
        }`">
        <div v-for="item in itemQuantity" :key="item.id">
          <div class="hover:border-black hover:border p-1">
            <NuxtLink :to="getProjectID(item)">
              <button
                :class="`text-[#F2F2F2] px-12 py-2 text-xl w-full ${
                  gridMode || 'flex justify-start items-center space-x-5'
                }`">
                <div>
                  <img
                    src="\public\images.jpg"
                    alt="Item picture"
                    :class="gridMode ? 'w-full scale-105' : ''" />
                </div>

                <div
                  :class="`flex text-[#3A3A3C] line-clamp-1 py-2 ${
                    gridMode
                      ? 'justify-between'
                      : 'justify-start space-x-4 items-center'
                  }`">
                  <div>
                    <h1 class="font-bold line-clamp-1 text-xl">
                      NAME NAME NAME
                    </h1>
                  </div>
                  <div>
                    <p class="text-sm">14:30</p>
                    <p class="text-sm">01/01/2000</p>
                  </div>
                </div>
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const itemQuantity = ref(20);

const gridMode = ref(true);

const changeGridMode = (mode) => {
  if (mode === "grid") {
    gridMode.value = true;
  } else {
    gridMode.value = false;
  }
};

const message = ref("Hello, User");
onMounted(async () => {
  const response = await fetch("http://localhost:8000/api/user", {
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
  const content = await response.json();
  console.log(content);
});

const getProjectID = (id) => {
  return `/projects/${id}`;
};
</script>

<style scoped>
/* width */
::-webkit-scrollbar {
  width: 10px;
  padding: 2px;
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  padding: 2px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #696969;
  border-radius: 10px;
  padding: 2px;
}
</style>
