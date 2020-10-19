<template>
  <v-app>
    <v-card max-width="550" class="text-center mx-auto elevation-5">
      <template>
        <form @submit.prevent="submit" class="my-10 mx-10 px-2 py-2">
          <p class="text-h3 font-weight-light" color="primary">
            Login
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
            label="Senha"
            v-model="password"
            counter="30"
            @input="v.password.touch()"
            @blur="v.password.touch()"
            required
          ></v-text-field>
          
          <v-btn block class="btnLogin" color="primary" @click="login"
            >Entrar</v-btn
          >
          <v-btn block class="btnCadastro"  depressed flat to="Signup"  > Não possue conta?</v-btn>
          <v-btn block class="btnLembrarSenha" depressed flat to=""  > Esqueci a senha</v-btn>
        </form>
      </template>
    </v-card>
  </v-app>
</template>

<script>
import { required, minLength} from "vuelidate/lib/validators";

export default {
  name: "Login",
  title: "One Destiny - Login",
  data() {
    return {
      name: "",
      password: "",
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
.btnLogin {
  margin-top: 10px;
}

.btnCadastro {
  margin-top: 10px;
}

.btnLembrarSenha {
  margin-top: 10px;
}
</style>
