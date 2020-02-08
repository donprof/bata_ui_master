<template>
    <form class="navbar-search-form" @submit.prevent="searchdata" role="form">
        <div class="form-group">
            <div class="input-group input-group-transparent">
                <div class="input-group-prepend">
                    <span class="input-group-text"><i class="far fa-search"></i></span>
                </div>
                <input v-model="searched" type="text" class="form-control" autofocus placeholder="Search for producs ...">
            </div>
        </div>
    </form>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data () {
        return {
            searched: null
        }
    },
    methods: {
        ...mapActions({
            storedata: 'search/storeresults',
            storequeryname: 'search/storequeryname',
        }),
        async searchdata(){
          let response = await this.$axios.$post('products-search', {'search': this.searched})

          this.storedata(response.data)
          this.storequeryname(this.searched)
          this.$emit("closemodal")

          this.$router.replace({
            name: 'search'
          })
        }
    },
  }
</script>
