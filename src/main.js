import Vue from 'vue';
import VueMq from 'vue-mq';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
// https://alligator.io/vuejs/vue-media-queries/
Vue.use(VueMq, {
  breakpoints: {
    // default breakpoints - customize this
    sm: 540,
    md: 950,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm', // customize this for SSR
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
