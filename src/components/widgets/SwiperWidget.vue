<script setup>
import Cycle from "../../assets/books/cycle.webp";
import Ewilan from "../../assets/books/ewilan.webp";
import Harry from "../../assets/books/harry.webp";
import King from "../../assets/books/king.webp";
import Locke from "../../assets/books/locke.webp";
import Seigneur from "../../assets/books/seigneur.webp";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import { EffectCards } from "swiper";
import "swiper/css/effect-cards";

// import "./style.css";
const options = {
  autoplay: {
    delay: 1000, // 5 seconds
  },
};
// import required modules
</script>
<template>
  <swiper
    :effect="'cards'"
    :options="options"
    :grabCursor="true"
    :modules="[EffectCards]"
    class="mySwiper"
  >
    <swiper-slide>
      <div class="w-full relative h-full">
        <img :src="Cycle" class="w-full h-full object-cover" alt="Image 1" />
        <div
          class="absolute bottom-4 p-4 rounded-xl text-base left-1/2 bg-white text-black w-11/12 -translate-x-1/2"
        >
          lol
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full relative h-full">
        <img :src="Ewilan" class="w-full h-full object-cover" alt="Image 1" />
        <div
          class="absolute bottom-4 p-4 rounded-xl text-base left-1/2 bg-white text-black w-11/12 -translate-x-1/2"
        >
          lol
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full relative h-full">
        <img :src="Harry" class="w-full h-full object-cover" alt="Image 1" />
        <div
          class="absolute bottom-4 p-4 rounded-xl text-base left-1/2 bg-white text-black w-11/12 -translate-x-1/2"
        >
          lol
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full relative h-full">
        <img :src="King" class="w-full h-full object-cover" alt="Image 1" />
        <div
          class="absolute bottom-4 p-4 rounded-xl text-base left-1/2 bg-white text-black w-11/12 -translate-x-1/2"
        >
          lol
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full relative h-full">
        <img :src="Locke" class="w-full h-full object-cover" alt="Image 1" />
        <div
          class="absolute bottom-4 p-4 rounded-xl text-base left-1/2 bg-white text-black w-11/12 -translate-x-1/2"
        >
          lol
        </div>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="w-full relative h-full">
        <img :src="Seigneur" class="w-full h-full object-cover" alt="Image 1" />
        <div
          class="absolute bottom-4 p-4 rounded-xl text-base left-1/2 bg-white text-black w-11/12 -translate-x-1/2"
        >
          lol
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>
<style>
.swiper {
  width: 300px;
  height: 450px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;
}

.swiper-slide:nth-child(1n) {
  background-color: #e53f3f;
}

.swiper-slide:nth-child(2n) {
  background-color: rgb(96, 184, 255);
}

.swiper-slide:nth-child(3n) {
  background-color: #32de96;
}

.swiper-slide:nth-child(4n) {
  background-color: rgb(234, 177, 103);
}

.swiper-slide:nth-child(5n) {
  background-color: #76c395;
}

.swiper-slide:nth-child(6n) {
  background-color: #3db8e0;
}

.swiper-slide:nth-child(7n) {
  background-color: hsl(235, 100%, 58%);
}

.swiper-slide:nth-child(8n) {
  background-color: #6b88d8;
}

.swiper-slide:nth-child(9n) {
  background-color: #c537c5;
}

.swiper-slide:nth-child(10n) {
  background-color: #67deaa;
}
</style>
