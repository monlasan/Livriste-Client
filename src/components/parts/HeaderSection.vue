<script setup>
import { SearchIcon } from "vue-tabler-icons";
import { useUserStore } from "@/stores/user-store";
</script>
<template>
  <header
    class="border relative grid grid-cols-2 h-12 px-8 shadow-xl shadow-gray-400/10"
  >
    <div class="flex overflow-hidden items-center">
      <label
        for="search"
        class="text-gray-600 w-7 h-7 mx-1 grid place-items-center"
        ><search-icon size="18"
      /></label>
      <input
        type="search"
        id="search"
        class="p-1 px-2 outline-none"
        placeholder="Rechercher des livres..."
      />
    </div>
    <Logo
      class="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 absolute"
    />
    <!-- <img
      src="../../assets/logo.svg"
      alt="logo"
      class="left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 absolute"
    /> -->
    <nav class="flex justify-end relative">
      <ul class="flex items-center gap-2 text-slate-600">
        <li v-if="!useUserStore().id">
          <router-link to="/login" class="px-4 py-1">Se connecter</router-link>
        </li>
        <li v-if="!useUserStore().id">
          <router-link to="/register" class="btn-ring">S'inscrire</router-link>
        </li>
        <HUIDropdownProfile v-if="useUserStore().id" />
      </ul>
    </nav>
  </header>
</template>
