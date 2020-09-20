import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import titleMixin from "./components/mixins/titleMixin";
import axios from "axios";
import VueFullpage from "vue-fullpage.js";
import Vuelidate from "vuelidate";

Vue.use(Vuelidate);

// To change page titles:
Vue.mixin(titleMixin);

Vue.use(VueFullpage);

Vue.prototype.$http = axios;

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
