import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { init } from "emailjs-com";
init("user_383RopYsJLX7MExUMlYWW");

Vue.config.productionTip = false;

new Vue({
  vuetify,

  render: (h) => h(App),
}).$mount("#app");
