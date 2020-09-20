<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <p class="text-h4">Noticias Especiais</p>
          <v-list>
            <v-list-item v-for="titler in postOne" :key="titler">
              <v-list-title>
                <p>
                  {{titler.title}}
                  <span>{{date}}</span>
                </p>
              </v-list-title>
            </v-list-item>
            <v-list-item v-for="titler in postTwo" :key="titler">
              <v-list-title>
                <p>
                  {{titler.title}}
                  <span>{{date}}</span>
                </p>
              </v-list-title>
            </v-list-item>
            <v-list-item v-for="titler in postThree" :key="titler">
              <v-list-title>
                <p>
                  {{titler.title}}
                  <span>{{date}}</span>
                </p>
              </v-list-title>
            </v-list-item>
          </v-list>
          <p class="text-h4">Noticias</p>
          <v-list>
            <v-list-item v-for="titler in postOne" :key="titler">
              <v-list-title>
                <p>
                  {{titler.title}}
                  <span>{{date}}</span>
                </p>
              </v-list-title>
            </v-list-item>
            <v-list-item v-for="titler in postTwo" :key="titler">
              <v-list-title>
                <p>
                  {{titler.title}}
                  <span>{{date}}</span>
                </p>
              </v-list-title>
            </v-list-item>
            <v-list-item v-for="titler in postThree" :key="titler">
              <v-list-title>
                <p>
                  {{titler.title}}
                  <span>{{date}}</span>
                </p>
              </v-list-title>
            </v-list-item>
          </v-list>
          <p class="text-h4">Tópicos</p>
          <v-list>
            <v-list-item v-for="titler in postOne" :key="titler">
              <v-list-title>
                <p>
                  {{titler.title}}
                  <span>{{date}}</span>
                </p>
              </v-list-title>
            </v-list-item>
            <v-list-item v-for="titler in postTwo" :key="titler">
              <v-list-title>
                <p>
                  {{titler.title}}
                  <span>{{date}}</span>
                </p>
              </v-list-title>
            </v-list-item>
            <v-list-item v-for="titler in postThree" :key="titler">
              <v-list-title>
                <p>
                  {{titler.title}}
                  <span>{{date}}</span>
                </p>
              </v-list-title>
            </v-list-item>
          </v-list>
        </v-col>
        <v-col>
          <p class="text-h4">Status dos Servidores</p>
          <v-list>
            <v-list-item></v-list-item>
            <v-list-item></v-list-item>
            <v-list-item></v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  name: "Noticias",
  title: "One Destiny - Notícias"
};
</script>

<style scoped></style>
