import Vue from "vue";
import moment from 'moment';
import 'moment/locale/pt-br';
import App from "./App.vue";
import router from "./router";
import vueMoment from "vue-moment";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.use(vueMoment,{
  moment
});

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
