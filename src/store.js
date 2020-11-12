import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from 'vuex-persist';
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    user: {
      loggedIn: false,
      username: null,
      uid: null,
    }
  },
  getters: {
    user(state){
      return state.user
    }
  },
  mutations: {
    SET_LOGGED_IN(state, value) {
      state.user.loggedIn = value;
    },
    SET_USER(state, data) {
      if (data) {
        state.user.username = data.username;
        state.user.uid = data.id;
      } else {
        state.user.username = null;
        state.user.uid = null;
      }
      
    }
  },
  actions: {
    login({ commit }, user) {
      commit("SET_LOGGED_IN", true);
      
      commit("SET_USER", user);
      
    },
    logout({ commit }){
      commit("SET_LOGGED_IN", false);
      commit("SET_USER", null);
    }
  },
  plugins: [vuexLocal.plugin]
});

// export default store;