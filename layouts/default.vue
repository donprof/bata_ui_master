<template>
  <span>
    <TheAlert />
    <Navigation />
    <nuxt/>
    <FooterData/>
  </span>
</template>

<script>
  import Navigation from '@/layouts/partials/Navigation'
  import TheAlert from '@/components/globals/TheAlert'
  import FooterData from '@/layouts/partials/FooterData'
  import { mapActions } from 'vuex'
  export default {
    components: {
      Navigation,
      TheAlert,
      FooterData
    },
    methods: {
      ...mapActions({
        changestyle: 'navstyle/changestyle'
      }),
    },
    watch: {
      $route () {
        if (this.$route.name == "auth-signin") {
          this.changestyle(true)
        }else{
          this.changestyle(false)
        }
      }
    },
  }
</script>
