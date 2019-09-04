'use strict'

export default {
  namespaced: true,
  state: {
    shown: false
  },
  getters: {},
  mutations: {
    shownChange: (state, shownState) => { state.shown = shownState }
  },
  actions: {
    open({ commit }) {
      console.log(commit,"HelloWorld1");
      commit('shownChange', true);
    },
    close({ commit }) {console.log(commit,"HelloWorld");commit('shownChange', false) }
  }
}
