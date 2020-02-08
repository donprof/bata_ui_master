let getRequestPath = (url, baseURL) => {
    return url.replace(`${baseURL}`, '')
}

export default function ({ $axios, store }) {
    $axios.onRequest((request) => {
        store.commit('validation/CLEAR_ERRORS')        

        // if (request.method === 'post' || request.method === 'patch' || request.method === 'delete') {    
        //     store.commit('form/SET_SUBMITTING', getRequestPath(request.url, request.baseURL))
        // }
    })

    $axios.onResponse(() => {
        store.commit('form/SET_SUBMITTING', null)
    })

    $axios.onResponseError(error => {
        if (error.response.status === 422) {
            store.dispatch('validation/setErrors', error.response.data.errors)
        }
        return Promise.reject(error)
        // if (error.response) {
        //     if (error.response.status === 422) {
        //         store.commit('validation/SET_ERRORS', error.response.data.errors)
        //     }
        //     store.commit('form/SET_SUBMITTING', null)
        // }
    })
}
