<template>
<main>
  <BlobalBanner :user="$auth.user.name" :totalcost="total" :cartCount="cartCount" bannerimage="ladyshopping1.svg" bgclass="bg-gradient-danger"/>

  <section class="slice slice-sm">
      <div class="container">
          <div class="row">
            <div class="col-md-10 mr-auto ml-auto">
                <div v-if="products.length">
                    <CartOverview state=2></CartOverview>
                </div>

                <div class="row" v-else>
                    <div class="col-md-6 mr-auto ml-auto">
                        <div class="card card-pricing popular box-shadow-3 text-center px-3 mb-4">
                            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white box-shadow-2">Oops</span>
                            <div class="card-header py-5">
                                <h1 class="h1 font-weight-700 text-primary text-center mb-0" data-pricing-value="30"><span class="price">Your cart is empty.</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </div>
          

        <!-- Cart information -->
        <div class="mt-5 pt-5">
            <div class="row justify-content-center align-items-center mt-5">
                <div class="col-lg-8 text-center">
                    <div>
                      <nuxt-link
                        :to="{ name: 'shipping' }"
                        v-if="!empty"
                        class="btn btn-primary btn-circle btn-translate--hover px-4"
                      >
                        Checkout Now
                        <span class="badge badge-pill badge-soft-success badge-floating border-">Ksh {{total}}</span>
                      </nuxt-link>
                    </div>
                </div>
            </div>

        </div>
      </div>
  </section>


</main>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CartOverview from '@/components/cart/CartOverview'
  import BlobalBanner from '@/components/globals/Banner'

  export default {
    components: {
      CartOverview,BlobalBanner
    },
    methods: {
        ...mapActions({
            footherstyle: 'navstyle/changestyle'
        }),
    },

    middleware: [
      'redirectIfGuest'
    ],

    computed: {
      ...mapGetters({
        empty: 'cart/empty',
        cartCount: "cart/count",
        total: 'cart/total',
        products: 'cart/products',
      })
    },
    mounted() {
        this.footherstyle({'classes':'footer-light mt-0 bg-gradient-light', 'imagemode': false, 'navclasses': 'navbar-light bg-white'});
    },
  }
</script>