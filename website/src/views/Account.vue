<template>
  <v-app>
    <v-card d-flex justify-center mb-6>
      <v-img src="../assets/img/stock-img4.jpg" height="250px">
        <v-app-bar flat color="rgba(0, 0, 0, 0)">
          <v-toolbar-title class="title white--text"
            >Perfil de Usuário</v-toolbar-title
          >
          <v-spacer></v-spacer>
          <v-btn color="white" icon
            ><v-icon color="white">mdi-pencil</v-icon></v-btn
          >
        </v-app-bar>
        <v-card-title class="white--text mt-16">
          <v-avatar size="60" color="primary"></v-avatar>
          <p class="text-subtitle-1 ma-1">Nome de Usuario</p>
          <p class="text-subtitle-2 ma-1">STATUS</p>
        </v-card-title>
      </v-img>

      <v-tabs centered>
        <v-tab>Dados</v-tab>
        <v-tab>Mesas</v-tab>
        <v-tab>Configurações da Conta</v-tab>
        <v-tab-item class="dadosTab">
          <v-container fluid class="ma-1">
            <p class="text-h6">Informações da Conta:</p>
            <v-card elevation="0">
              <v-form disabled>
                <v-row>
                  <v-col>
                    <p>ID:</p>
                    <v-text-field
                      value="ID number"
                      label="Solo"
                      solo
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col>
                    <p>Nome de Usuario:</p>
                    <v-text-field
                      value="John Doe"
                      label="Solo"
                      solo
                      disabled
                    ></v-text-field
                  ></v-col>
                  <v-col>
                    <p>Level:</p>
                    <v-text-field
                      value="150"
                      label="Solo"
                      solo
                      disabled
                    ></v-text-field
                  ></v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <p>Descrição:</p>
                    <v-textarea
                      solo
                      name="input-7-4"
                      label="Solo textarea"
                    ></v-textarea
                  ></v-col>
                </v-row>
              </v-form>
            </v-card>
            <v-divider></v-divider>
            <v-row>
              <v-col>
                <p class="text-h6">Tags Favoritas:</p>
                <v-chip-group>
                  <v-chip v-for="tag in tags" :key="tag">
                    {{ tag }}
                  </v-chip>
                </v-chip-group>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
        <v-tab-item class="mesasTab">
          <v-container fluid>
            <v-sheet class="mx-auto" max-width="800">
              <v-slide-group
                v-model="model"
                class="pa-6"
                center-active
                show-arrows
              >
                <v-slide-item
                  v-for="n in 15"
                  :key="n"
                  v-slot:default="{ active, toggle }"
                >
                  <v-card
                    :color="active ? 'primary' : 'grey lighten-1'"
                    class="ma-4"
                    height="200"
                    width="400"
                    @click="toggle"
                  >
                    <v-row class="fill-height" align="center" justify="center">
                      <v-scale-transition>
                        <v-icon
                          v-if="active"
                          color="white"
                          size="48"
                          v-text="'mdi-close-circle-outline'"
                        ></v-icon>
                      </v-scale-transition>
                    </v-row> </v-card
                ></v-slide-item>
              </v-slide-group>
            </v-sheet>
          </v-container>
        </v-tab-item>
        <v-tab-item class="configTab">
          <v-container fluid>
            <p>Options</p>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    tags: [
      "Work",
      "Home Improvement",
      "Vacation",
      "Food",
      "Drawers",
      "Shopping",
      "Art",
      "Tech",
      "Creative Writing",
    ],
  }),
};
</script>

<style></style>
