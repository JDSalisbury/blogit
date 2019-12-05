const actions = {
  fetchBlogs({ commit }) {
    // eslint-disable-next-line global-require
    const jsonResponse = require('../../public/blogs.json');
    commit('BLOGS_SUCCESS', jsonResponse);
  },
};

const mutations = {
  // eslint-disable-next-line no-return-assign
  BLOGS_SUCCESS: (state, data) => (state.blogs = data),
};

const getters = {
  getBlogs: state => state.blogs,
};

const state = {
  blogs: '',
};

export default {
  state,
  getters,
  actions,
  mutations,
};
