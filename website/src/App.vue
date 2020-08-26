<template>
  <v-app>
    <Navbar />
    <v-content class="grey lighten-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import { router } from "./router/index.js";
import Navbar from "./components/shared/Navbar/Navbar";

export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    router
  })
};
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
  margin: 0 auto;
}
</style>
