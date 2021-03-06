export const state = () => ({
  navstyle: null
})

export const getters = {
  navstyle (state) {
    return state.navstyle
  }
}

export const mutations = {
  SET_NAVSTYLE (state, navstyle) {
    state.navstyle = navstyle
  }
}

export const actions = {
  changestyle ({ commit }, navstyle) {
    commit('SET_NAVSTYLE', navstyle)
  }
}
