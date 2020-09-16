<template>
  <v-app>
    <v-content class="corpo py-1 px-3 mx-5 my-5">
      <v-row>
        <v-col>
          <v-card class="header mb-4 mt-1">
            <v-img
              src="../assets/img/background1.jpg"
              height="250"
              aspect-ratio="2"
            >
            </v-img>
          </v-card>
          <p class="text-center text-h2 font-weight-thin">Quem somos nós?</p>
          <p class="text-h3 font-weight-thin text-light">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum
            maiores modi quidem veniam, expedita quis laboriosam, ullam facere
            adipisci, iusto, voluptate sapiente corrupti asperiores rem nemo
            numquam fuga ab at.
          </p>
          <v-row>
            <v-col v-for="n in 3" :key="n" cols="12" sm="4">
              <v-card class="cartoes"
                ><v-card-title class="text-center">VIPER SYSTEMS</v-card-title>
                <v-card-subtitle>Something</v-card-subtitle>
                <v-card-text
                  ><p class="descricao text-justify font-weight-medium ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                    porro iste officia nihil possimus nobis neque fugit odit
                    hic. Voluptatibus reprehenderit aut laborum amet ducimus
                    facere ex tempore eligendi veritatis!
                  </p>
                </v-card-text></v-card
              >
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-content>
  </v-app>
</template>

<script>
export default {
  title: "One Destiny - Sobre Nós",
  components: {},
};
</script>

<style scoped></style>
