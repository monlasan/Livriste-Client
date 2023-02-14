<script setup>
import { useUserStore } from "@/stores/user-store";
import axios from "axios";

const userStore = useUserStore();

const errors = ref("");

// const email = ref(null);
// const password = ref(null);
const email = ref("moriartypatr@gmail.com");
const password = ref("123456");

/**
 * TODO: ADD VALIDATION
 */

const login = async () => {
  errors.value = "";
  try {
    let res = await axios.post("api/login", {
      email: email.value,
      password: password.value,
    });
    axios.defaults.headers.common["Authorization"] = "Bearer " + res.data.token;
    userStore.setUserDetails(res);
    console.log(res);
  } catch (err) {
    errors.value = err.response.data.error;
    // console.log(err.response.data);
  }
};
</script>
<template>
  <main class="bg-slate-200 w-full min-h-screen pt-20 px-8">
    <form
      @submit.prevent="login"
      class="p-6 relative bg-slate-50 shadow pb-10 max-w-sm rounded-md mx-auto"
    >
      <Logo class="mx-auto my-2" />
      <div class="flex flex-col">
        <div class="flex flex-col">
          <p
            class="text-center my-3 uppercase text-sm font-medium text-slate-500"
          >
            Connexion
          </p>
          <ul
            v-if="errors"
            class="list-disc list-inside mb-3 text-sm text-red-800"
          >
            <li>{{ errors }}</li>
          </ul>
          <div class="flex flex-col gap-4">
            <BaseInput
              v-model="email"
              class="input-large"
              type="email"
              placeholder="Adresse email"
            />
            <BaseInput
              v-model="password"
              type="password"
              class="input-large"
              placeholder="Mot de passe"
            />

            <button type="submit" class="btn w-full">Se connecter</button>
          </div>
        </div>
      </div>

      <p class="text-xs text-center mt-4 text-zinc-600">
        Pas encore de compte ?
        <router-link to="register" class="text-task-5 underline"
          >Créez en un</router-link
        >
      </p>
      <!-- <div
        class="text-sm flex flex-col justify-between gap-y-2 md:flex-row text-zinc-700 items-center mt-6 accent-indigo-600"
      >
        <div class="flex items-center">
          <input type="checkbox" name="rememberMe" id="rememberMe" />
          <label for="rememberMe" class="ml-1">Se souvenir de moi</label>
        </div>
        <router-link to="forgotpassword" class="text-indigo-600 underline"
          >Mot de passe oublié ?</router-link
        >
      </div> -->
    </form>
  </main>
</template>
