import Vue from 'vue';
import Vuex from 'vuex';
import Blogs from './modules/blogs';
import Tags from './modules/tags';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { Blogs, Tags },
});
