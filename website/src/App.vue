<template>
  <v-app>
    <Navbar />
    <v-main class="pa-5 ma-2">
      <v-content>
        <router-view></router-view>
      </v-content>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import { router } from "./router/index.js";
import Navbar from "./components/shared/Navbar/Navbar";
import Footer from "./components/shared/Footer/Footer";

export default {
  name: "App",

  components: {
    Navbar,
    Footer,
  },

  data: () => ({
    router,
  }),
};
</script>

<style>
.corpo {
  font-family: Helvetica, sans-serif;
}
</style>
