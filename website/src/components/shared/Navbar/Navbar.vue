<template>
  <nav>
    <v-app-bar app flat>
      <v-app-bar-nav-icon @click="drawer = !drawer" v-click-outside="onClickOutside"></v-app-bar-nav-icon>
      <v-app-title class="text-uppercase text-h6">
        <span class="font-weight-light">One</span>
        <span>Destiny</span>
      </v-app-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template #activator="{on: menu, attrs}">
          <v-tooltip bottom>
            <template #activator="{on: tooltip}">
              <v-btn color="primary" fab small dark v-bind="attrs" v-on="{...tooltip, ...menu}">
                <v-icon>mdi-account-circle</v-icon>
              </v-btn>
            </template>
            <span>Conta</span>
          </v-tooltip>
        </template>
        <v-list v-model="item">
          <v-list-item>
            <v-list-title class="text-center font-weight-medium">Username</v-list-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item to="Account">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase font-weight-light">Conta</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="logout">
            <v-list-item-icon>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="text-uppercase font-weight-light">Sair</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-switch color="indigo lighten-1" @change="goDarkMode()"></v-switch>
            <v-list-item-title class="text-uppercase font-weight-light">Dark Mode</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app class="primary">
      <v-list dark>
        <v-subheader class="font-weight-medium text-uppercase">Navegação</v-subheader>
        <v-list-item-group>
          <v-list-item to="/">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-light text-uppercase">Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="Blog">
            <v-list-item-icon>
              <v-icon>mdi-blogger</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-light text-uppercase">Blog</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="News">
            <v-list-item-icon>
              <v-icon>mdi-newspaper</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-light text-uppercase">News</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item to="AboutUs">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="font-weight-light text-uppercase">About Us</v-list-item-title>
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
      goDark: false
    };
  },
  methods: {
    onClickOutside() {
      this.drawer = false;
    },
    goDarkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }
  }
};
</script>

<style></style>
