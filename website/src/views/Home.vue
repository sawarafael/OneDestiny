<template>
  <v-app>
    <v-main>
      <v-container class="ma-auto">
        <full-page ref="fullpage" :options="options" id="fullpage">
          <div class="section">
            <v-card class="header mb-4 mt-1">
              <v-img
                src="../assets/img/stock-img2.jpg"
                height="250"
                aspect-ratio="2"
                class="rounded-sm"
              ></v-img>
            </v-card>
            <p class="text-h2 indigo--text font-weight-bold text-center">Escolha seu Destino!</p>
            <p class="text-h6 font-weight-light">
              Escolha seu estilo e seja quem você quiser, desafiando impérios
              galácticos, enfrentando monstros ou sendo parte de um épico
              medieval com muita fantasia! De forma gratuita, mas também com o
              premium que oferece vários beneficios para ter o melhor que a
              nossa plataforma pode oferecer para você desfrutar de uma boa
              campanha de RPG.
            </p>
            <v-col class="text-center">
              <v-btn to="Signin" outlined class="text small" color="indigo">Cadastre-se agora</v-btn>
            </v-col>
          </div>
          <div class="section">
            <v-card class="header mb-4 mt-1">
              <v-img src="../assets/img/stock-img2.jpg" height="250" aspect-ratio="2"></v-img>
            </v-card>
            <p class="text-h2 indigo--text font-weight-bold text-center">Inovador e Moderno.</p>
            <p class="text-h6 font-weight-light">
              O One Destiny irá trazer o clássico RPG de mesa online com um novo
              poder secreto que prioriza a maior qualidade na narrativa e com
              aspecto muito mais avançado. Esta plataforma estará sendo forjado
              pelos próprios deuses para que você também tenha o poder da
              modernidade.
            </p>
          </div>
          <div class="section">
            <v-card class="header mb-4 mt-1">
              <v-img src="../assets/img/stock-img2.jpg" height="250" aspect-ratio="2"></v-img>
            </v-card>
            <p class="text-h2 indigo--text font-weight-bold text-center">Fácil de Usar.</p>
            <p class="text-h6 font-weight-light">
              One Destiny trará para a plataforma uma simplicidade ao seu uso
              que será fácil e gratificante de se jogar, sendo você jogador ou
              um mestre novato, as boas ferramentas estarão em suas mãos para
              narrar em boa qualidade. Vai ser tão simples que nem as piores
              criaturas do vazio saberão usar, afinal, elas só sabem brincar na
              escuridão. E aqui nós temos a luz..
            </p>
          </div>
          <div class="section">
            <v-card class="header mb-4 mt-1">
              <v-img src="../assets/img/stock-img2.jpg" height="250" aspect-ratio="2"></v-img>
            </v-card>
            <p class="text-h2 indigo--text font-weight-bold text-center">Totalmente Customizável.</p>
            <p class="text-h6 font-weight-light">
              Escolha como quer jogar e deixe a sua partida do seu jeito e
              estilo que bem gostar. As lendas antigas dizem que a taverna
              poderá ser bem trocada por uma maior ou uma menor, depende de se
              você vai gostar ou não.
            </p>
          </div>
        </full-page>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  title: "One Destiny",
  name: "Home",
  components: {},
  data() {
    return {
      options: {
        navigation: true
      }
    };
  }
};
</script>

<style scoped>
</style>
