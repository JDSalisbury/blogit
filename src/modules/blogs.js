const actions = {
  fetchBlogs({ commit }) {
    // eslint-disable-next-line global-require
    const jsonResponse = require('../../public/blogs.json');
    commit('BLOGS_SUCCESS', jsonResponse);
  },
  fetchBlog({ commit }, id) {
    // eslint-disable-next-line global-require
    const jsonResponse = require('../../public/blogs.json');
    // eslint-disable-next-line eqeqeq
    const data = jsonResponse.filter(i => i.id == id);
    commit('GET_BLOG', data[0]);
  },
};

const mutations = {
  // eslint-disable-next-line no-return-assign
  BLOGS_SUCCESS: (state, data) => (state.blogs = data),
  // eslint-disable-next-line no-return-assign
  GET_BLOG: (state, data) => (state.detail = data),
};

const getters = {
  blogState: state => state,
  getBlogs: state => state.blogs,
  getDetail: state => state.detail,
};

const state = {
  blogs: '',
  tacos: 'They are good',
  detail: '',
};

export default {
  state,
  getters,
  actions,
  mutations,
};
