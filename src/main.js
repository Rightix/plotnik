import Vue from 'vue';
import App from './App.vue';
import './styles/main.sass';
import './styles/bootstrap-reboot.css';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
