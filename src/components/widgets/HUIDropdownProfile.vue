<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { ChevronDownIcon, UserIcon } from "vue-tabler-icons";
import { useUserStore } from "@/stores/user-store";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const userStore = useUserStore();

const logout = async () => {
  try {
    let res = await axios.post(`api/logout/${userStore.id}`);
    console.log(res);
    userStore.clearUser();
    // router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="hover:bg-slate-100 hover:border border-slate-200 rounded-full w-10 h-10 grid place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <user-icon size="20" />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute z-10 right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <div class="px-1 py-1">
          <MenuItem v-slot="{ active }">
            <router-link
              to="/profile"
              :class="[
                active ? 'bg-primary text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
            >
              Profile
            </router-link>
          </MenuItem>
          <MenuItem v-slot="{ active }">
            <button
              @click="logout"
              :class="[
                active ? 'bg-primary text-white' : 'text-gray-900',
                'group flex w-full items-center rounded-md px-2 py-2 text-sm',
              ]"
            >
              D??connexion
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
