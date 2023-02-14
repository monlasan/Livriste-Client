<script setup>
import { StarIcon } from "vue-tabler-icons";
import Image1 from "../assets/azza.png";
</script>
<template>
  <main>
    <HeaderSection />

    <section class="bg-slate-900">
      <div class="max-w-4xl flex items-center gap-20 py-16 mx-auto">
        <div>
          <h1 class="text-3xl text-white leading-normal font-medium">
            <!-- Parce que la réalité ne nous suffit pas. <br /> -->
            Partageons et découvrons de nouvelles lectures et histoires qui
            nourissent notre imaginaire.
          </h1>
          <button class="btn-lg mt-6">Something</button>
        </div>
        <SwiperWidget />
      </div>
    </section>
    <div class="flex justify-center gap-20">
      <section class="max-w-5xl flex flex-col gap-5 pb-16">
        <div v-for="col in 2">
          <div class="flex justify-between items-center py-8">
            <h3 class="text-2xl font-bold">Parcourir</h3>

            <button class="btn">Something</button>
          </div>
          <div class="grid grid-cols-3 gap-10">
            <div v-for="i in 6" class="grid grid-cols-2 gap-4">
              <div
                class="aspect-[9/12] rounded-xl overflow-hidden bg-primary-600"
              >
                <!-- <img
                  :src="Image1"
                  class="h-full object-cover "
                  alt="Image 1"
                /> -->
              </div>
              <div>
                <p class="font-semibold mt-2">
                  The King Killer Chronicles Apophyse
                </p>
                <span class="text-zinc-500 my-1 inline-block text-sm"
                  >Francis Carpet</span
                >
                <!-- <div class="flex items-center gap-1 mt-2">
                  <star-icon size="18" v-for="star in 5" />
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-1">
        <h3 class="text-2xl font-bold my-8 px-6">Auteurs</h3>
        <ul class="flex flex-col">
          <router-link
            to="/"
            v-for="li in 5"
            class="flex items-center hover:bg-slate-100 p-2 rounded-xl px-6 gap-4"
          >
            <img
              :src="Image1"
              class="w-10 h-10 rounded-full object-cover"
              alt="Image 157"
            />
            <span>John Week Ca.</span>
          </router-link>
        </ul>
      </section>
    </div>
    <FooterSection />
  </main>
</template>
