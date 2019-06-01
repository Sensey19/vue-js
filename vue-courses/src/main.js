import '@babel/polyfill';
import 'mutationobserver-shim';

import Vue from 'vue';
import axios from 'axios';
import './plugins/bootstrap-vue'
import App from './App.vue';
import router from './router';
import store from './store';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import MainBanner from '@/components/main_banner/MainBanner.vue';

Vue.config.productionTip = false;

Vue.component('HeaderComponent', Header);
Vue.component('FooterComponent', Footer);
Vue.component('MainBanner', MainBanner);

new Vue({
    router,
    store,
    axios,
    render: h => h(App)
}).$mount('#app')
