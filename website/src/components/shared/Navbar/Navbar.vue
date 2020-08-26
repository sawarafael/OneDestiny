<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-title class="text-uppercase"
        ><span class="font-weight-light">One</span>
        <span>Destiny</span></v-app-title
      >
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="text-uppercase">Login</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    };
  },
};
</script>

<style></style>
