import Vue from 'vue';
import Vuex from 'vuex';
import Blogs from './modules/blogs';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Blogs },
});
