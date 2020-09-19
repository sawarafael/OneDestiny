<template>
  <v-app>
    <v-card max-width="550" class="text-center mx-auto elevation-5">
      <template>
        <form @submit.prevent="submit" class="my-10 mx-10 px-2 py-2">
          <p class="text-h3 font-weight-light" color="primary">
            Seja bem vindo!
          </p>
          <p class="text-h4 font-weight-thin">
            Se cadastre e conheça a mais nova plataforma de RPG de mesa online.
          </p>
          <v-divider></v-divider>
          <v-text-field
            label="Nome de usuário"
            v-model="name"
            :counter="20"
            @input="v.name.touch()"
            @blur="v.name.touch()"
            required
          ></v-text-field>
          <v-text-field
            label="E-mail"
            v-model="email"
            @input="v.email.touch()"
            @blur="v.email.touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Senha"
            v-model="password"
            counter="30"
            @input="v.password.touch()"
            @blur="v.password.touch()"
            required
          ></v-text-field>
          <v-text-field
            label="Confirme sua senha"
            v-model="passwordConfirm"
            counter="30"
            @input="v.password.touch()"
            @blur="v.password.touch()"
            required
          ></v-text-field>
          <v-btn block class="btnCadastro" color="primary" @click="submit"
            >Confirmar</v-btn
          >
        </form>
      </template>
    </v-card>
  </v-app>
</template>

<script>
import { required, minLength, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Cadastro",
  title: "One Destiny - Cadastro",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(4),
    },
    password: {
      required,
      minLength: minLength(6),
    },
    passwordConfirm: {
      sameAsPassword: sameAs("password"),
    },
  },
  methods: {
    submit() {
      console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    },
  },
};
</script>

<style>
.btnCadastro {
  margin-top: 10px;
}
</style>
