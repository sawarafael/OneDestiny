<template>
  <v-app>
    <v-card max-width="550" class="text-center mx-auto elevation-5">
      <template>
        <form @submit.prevent="submit" class="my-10 mx-10 px-2 py-2">
          <p class="text-h3 font-weight-light" color="primary">

            <v-img class="imgLogin"
                lazy-src=""     
            ></v-img>
            Login
          </p>
          
          <v-divider></v-divider>
          <v-text-field
            label="Nome de usuário"
            v-model="name"
            :rules="[
              () => !!name || 'Esse campo é obrigatório',
              () => !!name && name.length <= 20 || 'Precisa ter menos de 20 caracteres',
              nameCheck
            ]"
            maxlength="21"
            :counter="20"
            @input="v.name.touch()"
            @blur="v.name.touch()"
            required

          ></v-text-field>
          
          <v-text-field
            label="Senha"
            v-model="password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[ 
              () => !!password || 'Esse campo é obrigatório',
              () => !!password && password.length <= 30 || 'Precisa ter menos de 30 caracteres',
              passwordCheck
            ]"
            :type="show1 ? 'text' : 'password'"
            name="input-10-1"
            
            counter="30"
            maxlength="31"
            @input="v.password.touch()"
            @blur="v.password.touch()"
            @click:append="show1 = !show1"
            required
          ></v-text-field>
          
          <v-btn block class="btnLogin" color="primary" @click="login">
            Entrar
          </v-btn>

          <v-breadcrumbs class="hidden-sm-and-down">
              <v-breadcrumbs-item  to="Signup">Não possue conta?</v-breadcrumbs-item>
              <v-breadcrumbs-item to="">Esqueci a senha</v-breadcrumbs-item>
          </v-breadcrumbs>

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
      
      show1: false,
      show2: true,
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
.imgLogin{
    height: 20%;
    width:20%;    
    margin-left: 40%;
}

.btnLogin {
  margin-top: 10px;
}

.v-breadcrumbs {
  margin-top: 10px;
}
</style>
