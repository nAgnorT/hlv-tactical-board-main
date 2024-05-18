<template>
    <div class="flex justify-center w-full h-full " id="svg-container">

    </div>

  </template>
  
  <script>
import * as d3 from "d3";
import { onMounted } from "vue";
import d3Utils from "~/utils/d3Utils";
import interactDrag from "~/utils/d3Utils/drawing/interactDrag";
import interact from "interactjs"  
import axios from "axios";
import { saveAwayPlayerData, saveLineData,saveHomePlayerData } from "~/utils/d3Utils/controller/data.controller";
  export default {
    name: 'Boards',
    setup() {
    onMounted(() => {
      const menu = {
        drawingLine: false,
        drawingHomePlayer: false,
        drawingAwayPlayer: true
      }

      const svg = d3.select("#svg-container").append('svg')
 
      interactDrag('home-player')
      interactDrag('away-player')

      function resize () {
        svg.selectAll("*").remove()
        const inputContainer = document.getElementById('svg-container')
        const inputWidth = inputContainer.offsetWidth
        const inputHeight = inputContainer.offsetHeight
        d3Utils(svg, inputWidth,inputHeight, menu)
      }

      window.addEventListener("resize", resize);
      resize()
    })
  },
  }
  </script>
  <style>
    rect{
      fill: none;
        stroke: black;
        stroke-width: "2px";
    }
    line, circle{
      stroke: black;
      stroke-width: "2px";
    }
    .svg-button{
      @apply py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700
    }
</style>