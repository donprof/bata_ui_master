<template>
    <main>
        <!-- <BlobalBanner :user="$auth.user.name" :totalcost="total" bannerimage="checkout.svg" bgclass="bg-gradient-danger"/> -->

        <section class="slice pt-sm pb-4 d-flex align-items-end bg-cover bg-size--cover" style="background-image: url('/img/backgrounds/smallbanner.jpg');">
            <span class="mask bg-danger opacity-8"></span>
            <div class="container pt-lg">
                <div class="row">
                <div class="col-lg-12">
                    <div class="row align-items-center mb-4">
                    <div class="col-lg-5 mb-4 mb-lg-0">
                        <span
                        class="h2 mb-0 text-white d-block"
                        style="text-transform: capitalize;"
                        >Payment information</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>

        <!-- <header class="header-account-page bg-gradient-danger d-flex align-items-end">
                <div class="container">
                    <div class="row">
                        <div class=" col-lg-12">
                            <div class="row align-items-center mb-4">
                                <div class="col-md-5 mb-4 mb-md-0">
                                    <span class="h2 mb-0 text-white d-block">Checkout</span>
                                    <span class="text-light">Payment information</span>
                                </div>
                            </div>
                            <div class="d-flex">
                                <div class="btn-group btn-group-nav shadow" role="group" aria-label="Basic example">
                                    <div class="btn-group" role="group">
                                        <a href="#" class="btn btn-secondary btn-icon">
                                            <span class="btn-inner--icon"><i class="far fa-truck"></i></span>
                                            <span class="btn-inner--text d-none d-md-inline-block">Shipping</span>
                                        </a>
                                        <a href="#" class="btn btn-secondary btn-icon active">
                                            <span class="btn-inner--icon"><i class="far fa-credit-card"></i></span>
                                            <span class="btn-inner--text d-none d-md-inline-block">Payment</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </header>-->

        <section class="slice">
            <div class="container">
                <div class="row row-grid">
                    <div class="col-lg-8">
                        <PaymentMethods
                            :payment-methods="paymentMethods"
                            @selectedmethode="paymentMethodIdNew"
                            @payningwithcard="paywithcardSelect"
                            @card_number="card_number"
                            @expiry_date="expiry_date"
                            @card_security_code="card_security_code"
                            v-model="form.payment_method_id"
                        />
                        <ShippingAddress
                            :addresses="addresses"
                            v-model="form.address_id"
                            state="2"
                        />
                    </div>

                    <div class="col-lg-4">
                        <div data-toggle="sticky" data-sticky-offset="100">
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
                                <CartOverview state="1"></CartOverview>

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
                                            <span class="text-sm font-weight-bold">Ksh {{ shipping.price }}</span>
                                        </div>
                                    </div>
                                    <div class="row mt-3 pt-3 border-top" v-if="voucher != 0">
                                        <div class="col-8 text-right">
                                            <small class="text-success font-weight-bold">Voucher:</small>
                                        </div>
                                        <div class="col-4 text-right">
                                            <span class="text-sm text-success font-weight-bold">Ksh {{voucher}}</span>
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
                <!-- <div class="mt-4">
                    <div class="row justify-content-center">
                        <div class="col-md-5 col-lg-4 text-center">
                            <p class="small mb-0">Have a voucher? Add the code in the form below</p>
                            <form class="mt-4" @submit.prevent="checkvoucher">
                                <div class="input-group">
                                <input type="text" v-model="voucherCode" class="form-control form-control-sm" placeholder="Type your voucher code ...">
                                <span class="input-group-append">
                                    <button type="submit" :disabled="checking" class="btn btn-sm btn-primary">
                                        <span v-if="checking">
                                            <i class="fas fa-spinner fa-spin"></i>
                                        </span>
                                        <span v-else>Apply code</span>
                                    </button>
                                </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div> -->
                
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
        </section>-->

        <section class="slice slice-md bg-gradient-danger">
            <a href="#footer-data" class="tongue tongue-up tongue-secondary scroll-me">
                <i class="far fa-angle-up"></i>
            </a>
            <span class="tongue tongue-top">
                <i class="far fa-angle-up"></i>
            </span>
            <div class="container">
                <div class="row justify-content-center align-items-center">
                <div class="col-lg-8 text-center">
                    <button
                        class="btn btn-primary btn-circle btn-translate--hover px-4"
                        :disabled="empty || submitting"
                        @click.prevent="order"
                    >
                        <span v-if="submitting">
                            <i class="fas fa-spinner fa-spin"></i>
                        </span>
                        <span v-else>
                            Complete order
                        </span>
                        <span class="badge badge-pill badge-soft-success badge-floating border-">Ksh {{total}}</span>
                    </button>
                    <!-- <span :class="[payingmethod == 'M-Pesa' ? 'd-block' : 'd-none']">
                    </span>
                    <span :class="[payingmethod != 'M-Pesa' ? 'd-block' : 'd-none']">
                        <div id="paypal-button"></div>
                    </span> -->
                </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

import CartOverview from "@/components/cart/CartOverview";
import ShippingAddress from "@/components/checkout/addresses/ShippingAddress";
import PaymentMethods from "@/components/checkout/paymentMethods/PaymentMethods";
import BlobalBanner from "@/components/globals/Banner";
//   import Paypal from '@/components/paypal/Paypal'

export default {
    data() {
        return {
            voucherCode: null,
            checking: false,
            submitting: false,
            voucher:0,
            voucherPost: null,
            addresses: [],
            payingmethod: null,
            shippingMethods: [],
            paymentMethods: [],
            amount: 20,
            form: {
                address_id: null,
                payment_method_id: null,
                paywithcard: null,
                card_number: null,
                expiry_date: null,
                card_security_code: null,
            }
        };
    },

    middleware: ["redirectIfGuest"],

    watch: {
        'form.address_id' (addressId) {
            this.getShippingMethodsForAddress(addressId).then(() => {
                this.setShipping(this.shippingMethods[0]);
            });
        },

        shippingMethodId() {
            this.getCart();
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
            total: "cart/total",
            products: "cart/products",
            empty: "cart/empty",
            cartCount: "cart/count",
            shipping: "cart/shipping"
        }),

        shippingMethodId: {
            get() {
                return this.shipping ? this.shipping.id : "";
            },
            set(shippingMethodId) {
                this.setShipping(
                    this.shippingMethods.find(s => s.id === shippingMethodId)
                );
            }
        }
    },

    methods: {
        ...mapActions({
        setShipping: "cart/setShipping",
        getCart: "cart/getCart",
        flash: "alert/flash",
        footherstyle: "navstyle/changestyle"
        }),

        paymentMethodIdNew(data) {
        this.payingmethod = data.card_type;
        },
        paywithcardSelect(data) {
            this.form.paywithcard = data;
        },


        card_number(data) {
            this.form.card_number = data;
        },
        expiry_date(data) {
            this.form.expiry_date = data;
        },
        card_security_code(data) {
            this.form.card_security_code = data;
        },


        async checkvoucher () {
            this.checking = true

            let data = {'voucherCode': this.voucherCode}

            try {
                let response = await this.$axios.$get('auth/promocode?voucherCode='+this.voucherCode)
                if (response.status == 1) {
                    this.voucher = response.voucheprice
                    this.voucherPost = response.promocode
                }
            } catch (e) {
                this.checking = false
                return;
            }
            this.checking = false
        },
        async order() {
            this.submitting = true;
            try {
                await this.$axios.$post("orders", {
                    ...this.form,
                    shipping_method_id: this.shippingMethodId,
                    voucher: this.voucherPost
                });
                // await this.getCart();
                this.$router.replace({
                    name: "profile"
                });
            } catch (e) {
                // this.flash(e.response.data.message);
                this.getCart();
            }
            this.submitting = false;
        },
        
        async getShippingMethodsForAddress(addressId) {
            let response = await this.$axios.$get(`addresses/${addressId}/shipping`);
            this.shippingMethods = response.data;
            return response;
        },
    },
    mounted() {
        this.footherstyle({
            classes: "footer-light mt-0 bg-gradient-light",
            imagemode: false,
            navclasses: "navbar-light bg-white"
        });

        // let payment = (data, actions) => {
        //     const options = {
        //         headers: {'Authorization': window.localStorage.getItem('auth._token.local')}
        //     };
        //     return actions.request.post('http://bataadmin.io:8888/api/orders', {...this.form, shipping_method_id: this.shippingMethodId}, options)
        //     .then(function(res) {
        //         // console.log('data from first response.')
        //         // console.log(res)
        //         return res.id;
        //     });
        // };

        // let onAuthorize = (data, actions) => {
        //     const options = {
        //         headers: {'Authorization': window.localStorage.getItem('auth._token.local')}
        //     };
        //     // console.log('data from second response')
        //     // console.log(data)
        //     return actions.request.post('http://bataadmin.io:8888/api/execute_payment', {paymentID: data.paymentID, payerID: data.payerID, ...this.form, shipping_method_id: this.shippingMethodId}, options)
        //     .then(function(res) {
        //         console.log('success data')
        //         console.log(res);
        //         window.location.pathname = '/profile'
        //         // this.$router.replace({
        //         //     name: "profile"
        //         // });
        //         // alert('PAYMENT WENT THROUGH!!');
        //     });
        // };

        // paypal.Button.render({
        //     env: 'sandbox',
        //     style: {
        //         size: 'large',
        //         color: 'gold',
        //         shape: 'pill',
        //     },
        //     payment,
        //     onAuthorize,
        // }, '#paypal-button');
    },
    async asyncData({ app }) {
        let addresses = await app.$axios.$get("addresses");
        let paymentMethods = await app.$axios.$get("payment-methods");

        // console.log(addresses.data)

        return {
            addresses: addresses.data,
            paymentMethods: paymentMethods.data
        };
    },
};
</script>