<script setup>
import { useUserStore } from "@/stores/user-store";
import axios from "axios";

const userStore = useUserStore();

const errors = ref("");

// const firstName = ref(null);
// const lastName = ref(null);
// const username = ref(null);
// const email = ref(null);
// const password = ref(null);
// const confirmPassword = ref(null);

const firstName = ref("Patriot");
const lastName = ref("Moriarty");
const username = ref("moriartypatr");
const email = ref("moriartypatr@gmail.com");
const password = ref("123456");
const confirmPassword = ref("123456");

/**
 * TODO: ADD VALIDATION
 */

const register = async () => {
  errors.value = "";
  try {
    let res = await axios.post("api/register", {
      first_name: firstName.value,
      last_name: lastName.value,
      username: username.value,
      email: email.value,
      password: password.value,
      password_confirmation: confirmPassword.value,
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
      @submit.prevent="register"
      class="p-6 relative bg-slate-50 shadow pb-10 max-w-sm rounded-md mx-auto"
    >
      <Logo class="mx-auto my-2" />
      <div class="flex flex-col">
        <div class="flex flex-col">
          <p
            class="text-center my-3 uppercase text-sm font-medium text-slate-500"
          >
            Inscription
          </p>
          <ul
            v-if="errors"
            class="list-disc list-inside mb-3 text-sm text-red-800"
          >
            <li>{{ errors }}</li>
          </ul>
          <div class="flex flex-col gap-4">
            <BaseInput
              class="input-large"
              v-model="firstName"
              placeholder="Nom"
            />
            <BaseInput
              class="input-large"
              v-model="lastName"
              placeholder="Prénom"
            />
            <BaseInput
              class="input-large"
              v-model="username"
              placeholder="Pseudo"
            />
            <BaseInput
              class="input-large"
              v-model="email"
              type="email"
              placeholder="Adresse email"
            />
            <BaseInput
              class="input-large"
              v-model="password"
              type="password"
              placeholder="Mot de passe"
            />
            <BaseInput
              v-model="confirmPassword"
              placeholder="Confirmer mot de passe"
              class="input-large"
              type="password"
            />
            <button type="submit" class="btn w-full">S'inscrire</button>
          </div>
        </div>
      </div>

      <p class="text-xs text-center mt-4 text-zinc-600">
        Vous avez déjà un compte ?
        <router-link to="login" class="text-task-5 underline"
          >Connectez vous</router-link
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
