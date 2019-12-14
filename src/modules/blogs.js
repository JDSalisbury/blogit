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
  fetchBlogsByTags({ commit }, id) {
    // eslint-disable-next-line global-require
    const jsonResponse = require('../../public/blogs.json');
    // eslint-disable-next-line eqeqeq
    const data = jsonResponse.filter(i => i.tags.some(tag => tag.id === id));
    console.log(data);
    commit('GET_BLOGS_BY_TAG', data);
  },
};

const mutations = {
  // eslint-disable-next-line no-return-assign
  BLOGS_SUCCESS: (state, data) => (state.blogs = data),
  // eslint-disable-next-line no-return-assign
  GET_BLOG: (state, data) => (state.detail = data),
  // eslint-disable-next-line no-return-assign
  GET_BLOGS_BY_TAG: (state, data) => (state.blogs = data),
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
  tagfilter: '',
};

export default {
  state,
  getters,
  actions,
  mutations,
};
