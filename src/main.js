import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/index.css";
import VueSimpleAccordion from "vue-simple-accordion";
import "vue-simple-accordion/dist/vue-simple-accordion.css";
import VCalendar from "v-calendar";

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: "vc", // Use <vc-calendar /> instead of <v-calendar />
});

// Introduced in vue file
//calendar
Vue.use(VueSimpleAccordion, {
  // ... Options go here
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
