export const state = () => ({
    searchresults: null,
    searchedquery: null
  })
  
  export const getters = {
    searchresults (state) {
      return state.searchresults
    },
    searchedquery (state) {
        return state.searchedquery
    }
  }
  
  export const mutations = {
    SET_SEARCH_RESULTS (state, searchresults) {
      state.searchresults = searchresults
    },
    SET_SEARCH_QUERY (state, data) {
        state.searchedquery = data
    }
  }
  
  export const actions = {
    storeresults ({ commit }, searchresults) {
      commit('SET_SEARCH_RESULTS', searchresults)
    },
    storequeryname ({ commit }, data) {
        commit('SET_SEARCH_QUERY', data)
    }
    
  }
  