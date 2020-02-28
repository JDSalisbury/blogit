const actions = {
  fetchTags({ commit }) {
    // eslint-disable-next-line global-require
    const jsonResponse = require('../../public/tags.json');
    commit('TAGS_SUCCESS', jsonResponse);
  },
  fetchTag({ commit }, id) {
    // eslint-disable-next-line global-require
    const jsonResponse = require('../../public/tags.json');
    // eslint-disable-next-line eqeqeq
    const data = jsonResponse.filter(i => i.id == id);
    commit('GET_TAG', data[0]);
  },
};

const mutations = {
  // eslint-disable-next-line no-return-assign
  TAGS_SUCCESS: (state, data) => (state.tags = data),
  // eslint-disable-next-line no-return-assign
  GET_TAG: (state, data) => (state.detail = data),
};

const getters = {
  tagState: state => state,
  getTags: state => state.tags,
};

const state = {
  tags: '',
  detail: '',
};

export default {
  state,
  getters,
  actions,
  mutations,
};
