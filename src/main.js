import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './index.css'
import toastr from 'toastr'
import 'toastr/build/toastr.css'
// import VuetifulBoard from 'vuetiful-board'

const app = createApp(App);

toastr.options = {
  'closeButton': true,
  'timeOut': '5000',
  "positionClass": "toast-top-center"
}

app.use(router);
app.use(store);
app.use(vuetify);
// app.use(VuetifulBoard);

app.mount('#app');

