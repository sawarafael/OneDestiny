import Vue from "vue";
import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi",
  },
  theme: {
    themes: {
      light: {
        primary: "#1F2250",
        success: "#4DF74D",
        info: "#1E2328",
        error: "#A73939",
      },
      dark: {
        primary: "#5C6BC0",
      },
    },
  },
});
