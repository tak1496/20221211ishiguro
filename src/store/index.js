import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sum: 0,
    lastTeam: '',
  },
  mutations: {
    team_counter: (state,val) => {
      state.lastTeam = val.name;
      state.sum++;
    }
  },
})