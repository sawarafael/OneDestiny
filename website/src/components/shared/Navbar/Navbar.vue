<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon
        @click="drawer = !drawer"
        v-click-outside="onClickOutside"
      ></v-app-bar-nav-icon>
      <v-app-title class="text-uppercase text-h6">
        <span class="font-weight-light">One</span>
        <span>Destiny</span>
      </v-app-title>
      <v-spacer></v-spacer>
      <v-btn text>
        <span class="text-uppercase">Login</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list dark>
        <v-subheader class="font-weight-light text-uppercase"
          >Navegação</v-subheader
        >
        <v-list-item-group>
          <v-list-item to="Home">
            <v-list-item-icon><v-icon>mdi-home</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium text-uppercase"
                >Home</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="Blog">
            <v-list-item-icon><v-icon>mdi-blogger</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium text-uppercase"
                >Blog</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="News">
            <v-list-item-icon><v-icon>mdi-newspaper</v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium text-uppercase"
                >News</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="AboutUs">
            <v-list-item-icon
              ><v-icon>mdi-account-group</v-icon></v-list-item-icon
            >
            <v-list-item-content>
              <v-list-item-title class="font-weight-medium text-uppercase"
                >About Us</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
  methods: {
    onClickOutside() {
      this.drawer = false;
    },
  },
};
</script>

<style></style>
