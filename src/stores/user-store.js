import axios from "axios";
import { defineStore } from "pinia";

export const useUserStore = defineStore("livriste_user", {
  state: () => ({
    id: null,
    firstName: null,
    lastName: null,
    username: null,
    email: null,
    photo_url: null,
    token: null,
  }),
  actions: {
    setUserDetails(res) {
      console.log("setUserDetails", res.data);
      this.$state.id = res.data.user.id;
      this.$state.firstName = res.data.user.first_name;
      this.$state.lastName = res.data.user.last_name;
      this.$state.username = res.data.user.username;
      this.$state.email = res.data.user.email;
      this.$state.token = res.data.token;
    },

    async fetchUser() {
      let res = await axios.get("api/users/" + this.$state.id);

      this.$state.id = res.data.user.id;
      this.$state.firstName = res.data.user.first_name;
      this.$state.lastName = res.data.user.last_name;
      this.$state.location = res.data.user.location;
      this.$state.description = res.data.user.description;
      if (res.data.user.image) {
        this.$state.photo_url =
          process.env.VUE_APP_API_URL + "images/users/" + res.data.user.image;
      } else {
        this.$state.photo_url =
          process.env.VUE_APP_URL + "DefaultUserAvatar.png";
      }
    },

    userImage(image) {
      return process.env.VUE_APP_API_URL + "images/users/" + image;
    },

    clearUser() {
      this.$state.id = null;
      this.$state.firstName = null;
      this.$state.lastName = null;
      this.$state.username = null;
      this.$state.email = null;
      this.$state.photo_url = null;
      this.$state.token = null;
    },
  },
  persist: true,
});
