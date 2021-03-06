export const state = () => ({
    submitting: null
})

export const mutations = {
    SET_SUBMITTING (state, url) {
        state.submitting = url
    }
}

export const getters = {
    submitting (state) {
        return url => {
            return state.submitting === url
        }
    }
}
