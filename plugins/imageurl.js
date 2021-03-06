import Vue from 'vue'
import { mapGetters } from 'vuex'

const url = {
  install (Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
            url: 'url',
        })
      }
    })
  }
}

Vue.use(url)