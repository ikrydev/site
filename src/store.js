import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    authorized: false,
    theme: '',
  },
  mutations: {
    currentTheme(state, theme) {
      !theme ? state.theme = 'light' : state.theme = 'dark'; // eslint-disable-line
    },
    setAuthorization(state, value) {
      state.authorized = value;
    },
  },
  getter: {
    theme: state => state.theme,
  },
  actions: {

  },
  plugins: [
    createPersistedState(),
  ],
});
