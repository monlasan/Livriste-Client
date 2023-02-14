<script setup>
import axios from "axios";
import { useUserStore } from "@/stores/user-store";

const ax = ref(axios.defaults.headers.common["Authorization"]);
console.log(axios.defaults.headers.common["Authorization"]);
</script>
<template>
  <HeaderSection />
  <main>About page</main>
  <span>{{ useUserStore().token }}</span>
  <p>{{ ax ? "is" : "none" }}</p>
</template>
