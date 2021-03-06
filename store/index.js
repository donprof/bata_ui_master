export const state = () => ({
  categories: [],
  currentuser: [],
  redirecturl:null,
  sliders: [],
  latest: [],
  adverts: [],
  salesbanner: [],
  brands: []
})

export const getters = {
  url (){
      return 'https://bataapi.fleetwise.co.ke/storage/'
  },
  categories (state) {
    return state.categories
  },
  redirecturl (state) {
    return state.redirecturl
  },
  currentuser (state) {
    return state.currentuser
  },
  sliders (state) {
    return state.sliders
  },
  latest(state){
    return state.latest
  },
  adverts(state){
    return state.adverts
  },
  salesbanner(state){
    return state.salesbanner
  },
  brands(state){
    return state.brands
  },
}

export const mutations = {
  SET_CATEGORIES (state, categories) {
    state.categories = categories
  },
  SET_CURRENT_USER (state, currentuser) {
    state.currentuser = currentuser
  },
  SET_SLIDERS (state, sliders) {
    state.sliders = sliders
  },
  SET_LATEST_SHOES (state, latest) {
    state.latest = latest
  },
  SET_ADVERTS (state, adverts) {
    state.adverts = adverts
  },
  SET_SALES_BANNER (state, salesbanner) {
    state.salesbanner = salesbanner
  },
  SET_REDIRECT_URL (state, redirecturl) {
    state.redirecturl = redirecturl
  },
  SET_BRANDS (state, brands) {
    state.brands = brands
  },
}

export const actions = {
  async nuxtServerInit({ commit, dispatch }) {
    let response = await this.$axios.$get('categories')
    commit('SET_CATEGORIES', response.data)

    let res = await this.$axios.$get('brands')
    commit('SET_BRANDS', res)

    if (this.$auth.loggedIn) {
      await dispatch('cart/getCart')
      await dispatch('wishlist/getWishlist')
    }

    let data = await this.$axios.$get('slider')
    commit('SET_SLIDERS', data)

    let latest = await this.$axios.$get('latest')
    commit('SET_LATEST_SHOES', latest.data)

    let adverts = await this.$axios.$get('adverts')
    commit('SET_ADVERTS', adverts)

    let salesbanner = await this.$axios.$get('wavesection')
    commit('SET_SALES_BANNER', salesbanner)
  },
  async setredirecturl({ commit}, data ) {
    commit('SET_REDIRECT_URL', data)
  },
  async sercurrentlocation({ commit}, data ) {
      commit('SET_CURRENT_USER', data)
  },
}
