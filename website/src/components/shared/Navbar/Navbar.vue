<template>
  <div>
    <v-toolbar dark densed>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>{{ titulo }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" icon fab v-bind="attrs" v-on="on">
            <v-icon>mdi-home</v-icon>
          </v-btn>
        </template>
        <span>Home</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" fab icon v-bind="attrs" v-on="on"
            ><v-icon>mdi-blogger</v-icon>
          </v-btn>
        </template>
        <span>Blog</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" icon fab v-bind="attrs" v-on="on">
            <v-icon>mdi-newspaper</v-icon>
          </v-btn>
        </template>
        <span>Notícias</span>
      </v-tooltip>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titulo: "One Destiny",
    };
  },
};
</script>

<style></style>
