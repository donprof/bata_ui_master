import queryString from 'query-string'

export const state = () => ({
  wishlist: null
})

export const getters = {
    wishlist (state) {
        return state.wishlist
    }
}

export const mutations = {
    SET_WISHLIST (state, wishlist) {
        state.wishlist = wishlist
    },
}

export const actions = {
  async getWishlist ({ commit }) {
    let response = await this.$axios.$get(`auth/wishlist`)
    commit('SET_WISHLIST', response)
    return response
  },
}
