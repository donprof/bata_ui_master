<template>
    <main>
        <section class="slice pt-sm pb-4 d-flex align-items-end  bg-cover bg-size--cover" style="background-image: url('/img/backgrounds/smallbanner.jpg');">
        <span class="mask bg-danger opacity-8"></span>
            <div class="container pt-lg">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row align-items-center mb-4">
                            <div class="col-lg-5 mb-4 mb-lg-0">
                                <span class="h2 mb-0 text-white d-block" style="text-transform: capitalize;">Shipping information</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice">
            <div class="container">
                <div class="row row-grid">
                    <div class="col-lg-8">
                        <ShippingAddress
                            :addresses="addresses"
                            v-model="form.address_id"
                            state="1"
                        />
                        <form>
                            <div class="mt-5 pt-5 delimiter-top">

                                <div class="page-inner-header mb-4">
                                    <h5 class="mb-1">Shipping method</h5>
                                    <p class="text-muted mb-0">Shipping methods and charges available for the selected address.</p>
                                </div>

                                <div class="row row-grid mt-4" v-if="shippingMethodId">
                                    <div class="col-md-6 mb-3" v-for="shipping in shippingMethods" :key="shipping.id">
                                        <div class="card">
                                            <div class="card-body">
                                                <div class="row align-items-center">
                                                    <div class="col-8">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" v-model="shippingMethodId" :value="shipping.id" name="shipping-method" class="custom-control-input" :id="shipping.id+'shipping-standard'">
                                                            <label class="custom-control-label text-dark font-weight-bold" :for="shipping.id+'shipping-standard'">{{ shipping.name }}</label>
                                                        </div>
                                                    </div>
                                                    <div class="col-4 text-right">
                                                        <span class="h6">Ksh {{ shipping.price }}</span>
                                                    </div>
                                                </div>
                                                <p class="text-muted text-sm mt-3 mb-0">{{shipping.description}}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div data-toggle="sticky" data-sticky-offset="100" class="" style="">
                            <div class="card" id="card-summary" v-if="products.length">
                                <div class="card-header py-3">
                                    <div class="row align-items-center">
                                        <div class="col-6">
                                            <span class="h6">Summary</span>
                                        </div>
                                        <div class="col-6 text-right">
                                            <span class="badge badge-md badge-pill badge-info">{{ cartCount }} items</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <CartOverview state=1></CartOverview>
                                    <!-- Shipping and total Cost -->

                                    <template v-if="shippingMethodId">
                                        <div class="row mt-3 pt-3 border-top">
                                            <div class="col-8 text-right">
                                                <div class="media align-items-center">
                                                    <i class="far fa-shipping-fast"></i>
                                                    <div class="media-body">
                                                        <div class="text-limit lh-100">
                                                            <small class="text-dark font-weight-bold mb-0">Shipping</small>
                                                        </div>
                                                        <small class="text-muted">{{shipping.name}}</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 text-right">
                                                <template v-if="shipcost">
                                                    <span class="text-sm font-weight-bold">Ksh {{ shipping.price }}</span>
                                                </template>
                                                <template v-else>
                                                    <span class="text-sm font-weight-bold">Ksh 0</span>
                                                </template>
                                            </div>
                                        </div>
                                        <div class="row mt-3 pt-3 border-top">
                                            <div class="col-8 text-right">
                                                <small class="text-uppercase text-dark font-weight-bold">Total:</small>
                                            </div>
                                            <div class="col-4 text-right">
                                                <span class="text-sm text-dark font-weight-bold">Ksh {{ total }}</span>
                                            </div>
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div class="row mt-3 pt-3 border-top">
                                            <div class="col-8 text-right">
                                                <div class="media align-items-center">
                                                    <i class="far fa-shipping-fast"></i>
                                                    <div class="media-body">
                                                        <div class="text-limit lh-100">
                                                            <small class="text-dark font-weight-bold mb-0">Shipping</small>
                                                        </div>
                                                        <small class="text-muted">Free</small>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-4 text-right">
                                                <span class="text-sm font-weight-bold">Ksh 0</span>
                                            </div>
                                        </div>
                                        <div class="row mt-3 pt-3 border-top">
                                            <div class="col-8 text-right">
                                                <small class="text-uppercase text-dark font-weight-bold">Total:</small>
                                            </div>
                                            <div class="col-4 text-right">
                                                <span class="text-sm text-dark font-weight-bold">Ksh {{ total }}</span>
                                            </div>
                                        </div>
                                    </template>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- <section class="slice">
            <div class="container">
                <div class="row row-grid">
                    <div class="col-md-7">
                        <section>
                            <PaymentMethods
                                :payment-methods="paymentMethods"
                                v-model="form.payment_method_id"
                            />
                        </section>
                        <section v-if="shippingMethodId">
                            <div class="container pt-4">
                                <span class="h2 mb-0 text-black d-block">Shipping method:</span>
                                <div class="row row-grid mt-3 d-none d-lg-flex">
                                    <div class="col-md-12">
                                        <select class="form-control form-control-sm" v-model="shippingMethodId">
                                            <option v-for="shipping in shippingMethods" :key="shipping.id" :value="shipping.id">
                                                {{ shipping.name }} ({{ shipping.price }})
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    
                </div>
            </div>
        </section> -->

        <section class="slice slice-md bg-gradient-danger">
          <a href="#footer-data" class="tongue tongue-up tongue-secondary scroll-me"><i class="far fa-angle-up"></i></a>
            <span class="tongue tongue-top"><i class="far fa-angle-up"></i></span>
            <div class="container">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-8 text-center">
                        <button type="button" class="btn btn-link text-sm text-white font-weight-bold">Return to shop</button>
                        <nuxt-link
                            :to="{ name: 'payment' }"
                            v-if="!empty"
                            class="btn btn-primary btn-circle btn-translate--hover px-4"
                            >
                            Next step
                            <span class="badge badge-pill badge-soft-success badge-floating border-">Ksh {{total}}</span>
                        </nuxt-link>

                        <!-- <button
                            class="btn btn-primary btn-circle btn-translate--hover px-4"
                            :disabled="empty || submitting"
                            @click.prevent="order"
                        >
                        Place order
                        <span class="badge badge-pill badge-success text-sm">{{total}}</span>
                        </button> -->
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import CartOverview from '@/components/cart/CartOverview'
  import ShippingAddress from '@/components/checkout/addresses/ShippingAddress'
  import PaymentMethods from '@/components/checkout/paymentMethods/PaymentMethods'
  import BlobalBanner from '@/components/globals/Banner'

  export default {
    data () {
      return {
        submitting: false,
        addresses: [],
        shippingMethods: [],
        paymentMethods: [],
        form: {
          address_id: null,
          payment_method_id: null,
        }
      }
    },

    middleware: [
      'redirectIfGuest'
    ],

    watch: {
      'form.address_id' (addressId) {
        this.getShippingMethodsForAddress(addressId).then(() => {
          this.setShipping(this.shippingMethods[0])
        })
      },

      shippingMethodId () {
        //   console.log('changed')
        this.getCart()
      }
    },

    components: {
      CartOverview,
      ShippingAddress,
      PaymentMethods,
      BlobalBanner
    },

    computed: {
      ...mapGetters({
        total: 'cart/total',
        shipcost: 'cart/shipcost',
        products: 'cart/products',
        empty: 'cart/empty',
        cartCount: 'cart/count',
        shipping: 'cart/shipping'
      }),

      shippingMethodId: {
        get () {
          return this.shipping ? this.shipping.id : ''
        },
        set (shippingMethodId) {
          this.setShipping(
            this.shippingMethods.find(s => s.id === shippingMethodId)
          )
        }
      }
    },

    methods: {
      ...mapActions({
        setShipping: 'cart/setShipping',
        getCart: 'cart/getCart',
        flash: 'alert/flash',
        footherstyle: 'navstyle/changestyle'
      }),

      async order () {
        this.submitting = true

        try {
          await this.$axios.$post('orders', {
            ...this.form,
            shipping_method_id: this.shippingMethodId
          })

          await this.getCart()

          this.$router.replace({
            name: 'profile'
          })
        } catch (e) {
          this.flash(e.response.data.message)

          this.getCart()
        }

        this.submitting = false
      },

      async getShippingMethodsForAddress (addressId) {
        let response = await this.$axios.$get(`addresses/${addressId}/shipping`)

        this.shippingMethods = response.data

        return response
      }
    },
    mounted() {
        this.footherstyle({'classes':'footer-light mt-0 bg-gradient-light', 'imagemode': false, 'navclasses': 'navbar-light bg-white'});
    },
    async asyncData ({ app }) {
      let addresses = await app.$axios.$get('addresses')
      let paymentMethods = await app.$axios.$get('payment-methods')

    //   console.log(addresses.data)

      return {
        addresses: addresses.data,
        paymentMethods: paymentMethods.data
      }
    }
  }
</script>
