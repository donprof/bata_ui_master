<template>
    <main>
        <section class="slice pt-sm pb-4 d-flex align-items-end bg-cover bg-size--cover bg-gradient-danger">
            <!-- <span class="mask bg-danger opacity-8"></span> header-account-page bg-gradient-danger d-flex align-items-end -->
            <div class="container pt-0">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="row align-items-center mb-4">
                            <div class="col-md-6 mb-4 mb-md-0">
                                <span class="h2 mb-0 text-white d-block">Good {{ timeOfDay }}, {{user.name}}.</span>
                            </div>
                            <div class="col-auto flex-fill">
                                <ul class="list-inline row justify-content-lg-end mb-0">
                                    <li class="list-inline-item col-sm-4 col-md-auto px-3 my-2 mx-0">
                                        <span class="badge badge-dot text-white">
                                            <i class="bg-green"></i>Cart
                                        </span>
                                        <a class="d-sm-block h5 text-white font-weight-bold pl-2" href="#">
                                            Ksh {{total}}
                                        </a>
                                    </li>
                                    <!-- <li class="list-inline-item col-sm-4 col-md-auto px-3 my-2 mx-0">
                                        <span class="badge badge-dot text-white">
                                            <i class="bg-orange"></i>Wishlist
                                        </span>
                                        <a class="d-sm-block h5 text-white font-weight-bold pl-2" href="#">
                                            Ksh 0
                                        </a>
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                        <!-- Account navigation -->
                    </div>
                </div>
            </div>
        </section>

        


        <section class="slice bg-secondary">
            <div class="container">
                <!-- Today's meetings -->
                <div class="row">
                    <div class="col-md-3">
                        <div class="card" id="card-summary">
                            <div class="card-header py-3">
                                <div class="row align-items-center">
                                    <div class="col-6">
                                        <span class="badge badge-md badge-pill badge-info">Your Profile details</span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body pt-1">
                                <div class="row pt-2">
                                    <div class="col-2 text-right">
                                        <span class="text-sm font-weight-bold"><i class="fas fa-sort-amount-up"></i></span>
                                    </div>
                                    <div class="col-10 text-left pointer rounded" :class="[showing == 1 ? 'bg-gradient-danger' : '']" @click="showtemplate(1)">
                                        <small class="text-dark font-weight-bold">My orders</small>
                                    </div>
                                </div>
                                <div class="row mt-2 pt-2 border-top">
                                    <div class="col-2 text-right">
                                        <span class="text-sm font-weight-bold"><i class="fas fa-key"></i></span>
                                    </div>
                                    <div class="col-10 text-left pointer rounded" :class="[showing == 2 ? 'bg-gradient-danger' : '']" @click="showtemplate(2)">
                                        <small class="text-dark font-weight-bold">Manage password</small>
                                    </div>
                                </div>
                                <div class="row mt-2 pt-2 border-top">
                                    <div class="col-2 text-right">
                                        <span class="text-sm font-weight-bold"><i class="far fa-address-card"></i></span>
                                    </div>
                                    <div class="col-10 text-left pointer rounded" :class="[showing == 3 ? 'bg-gradient-danger' : '']" @click="showtemplate(3)">
                                        <small class="text-dark font-weight-bold">My address book</small>
                                    </div>
                                </div>
                                <div class="row mt-2 pt-2 border-top">
                                    <div class="col-2 text-right">
                                        <span class="text-sm font-weight-bold"><i class="far fa-credit-card"></i></span>
                                    </div>
                                    <div class="col-10 text-left pointer rounded" :class="[showing == 4 ? 'bg-gradient-danger' : '']" @click="showtemplate(4)">
                                        <small class="text-dark font-weight-bold">My payment cards</small>
                                    </div>
                                </div>
                                <div class="row mt-2 pt-2 border-top">
                                    <div class="col-2 text-right">
                                        <span class="text-sm font-weight-bold"><i class="far fa-user"></i></span>
                                    </div>
                                    <div class="col-10 text-left pointer rounded" :class="[showing == 5 ? 'bg-gradient-danger' : '']" @click="showtemplate(5)">
                                        <small class="text-dark font-weight-bold">My details</small>
                                    </div>
                                </div>
                                <!-- <div class="row mt-2 pt-2 border-top">
                                    <div class="col-2 text-right">
                                        <span class="text-sm font-weight-bold"><i class="far fa-heart"></i></span>
                                    </div>
                                    <div class="col-10 text-left pointer rounded" :class="[showing == 6 ? 'bg-gradient-danger' : '']" @click="showtemplate(6)">
                                        <small class="text-dark font-weight-bold">My wishlist</small>
                                    </div>
                                </div> -->
                                <div class="row mt-2 pt-2 border-top">
                                    <div class="col-2 text-right">
                                        <span class="text-sm font-weight-bold"><i class="fas fa-award"></i></span>
                                    </div>
                                    <div class="col-10 text-left pointer rounded" :class="[showing == 7 ? 'bg-gradient-danger' : '']" @click="showtemplate(7)">
                                        <small class="text-dark font-weight-bold">My loyalty points</small>
                                    </div>
                                </div>

                                <div class="row mt-2 pt-2 border-top">
                                    <div class="col-2 text-right">
                                        <span class="text-sm font-weight-bold"><i class="far fa-bell"></i></span>
                                    </div>
                                    <div class="col-10 text-left pointer rounded" :class="[showing == 8 ? 'bg-gradient-danger' : '']" @click="showtemplate(8)">
                                        <small class="text-dark font-weight-bold"> Notifications</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <AccountDetails :user="user" v-if="showing == 5"/>
                        <Password :user="user" :currentuser="currentuser" v-if="showing == 2"/>
                        <Address :user="user" v-if="showing == 3"/>
                        <Paymentcards :user="user" v-if="showing == 4"/>
                        <Orders :user="user" :orders="orders" v-if="showing == 1"/>
                        <Loyaltypoints :user="user" :points="points" :orders="orders" v-if="showing == 7"/>
                        <Wishlist :user="user" :orders="orders" :wishlist="wishlist" v-if="showing == 6"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountDetails from '@/components/profile/accountdetails'
import Address from '@/components/profile/address'
import Password from '@/components/profile/password'
import Paymentcards from '@/components/profile/paymentcards'
import Payments from '@/components/profile/payments'
import Orders from '@/components/profile/orders'
import Loyaltypoints from '@/components/profile/loyaltypoints'
import Wishlist from '@/components/profile/wishlist'

export default {
    components: {
      AccountDetails,Address,Password,Paymentcards,Payments,Orders,Loyaltypoints,Wishlist
    },
    data() {
        return {
            user: null,
            showing: 1,
            orders: [],
            points: null,
            wishlist: []
        }
    },
    computed: {
        ...mapGetters({
            currentuser: "currentuser",
            total: 'cart/total',
        }),
        timeOfDay () {
            const hour = new Date().getHours()

            if (hour < 12) {
                return 'morning'
            }
            
            if (hour >= 12 && hour <= 17) {
                return 'afternoon'
            }
            
            if (hour > 17) {
                return 'evening'
            }

            return 'day'
        },
    },
    methods: {
        ...mapActions({
            footherstyle: 'navstyle/changestyle',
            setcurrentuser: 'setcurrentuser',
            sercurrentlocation: 'sercurrentlocation',
            getCart: "cart/getCart",
        }),
        selected(val){
            this.sercurrentlocation(val)
        },
        showtemplate(val){
            this.showing = val
        }
    },
    middleware: [
        'redirectIfGuest'
    ],
    mounted() {
        this.footherstyle({'classes':'footer-light bg-gradient-light', 'imagemode': false, 'navclasses': 'navbar-light bg-white'})
        this.getCart();
    },
    async asyncData({ params, app }) {
        let response = await app.$axios.$get(`auth/me`);
        let points = await app.$axios.$get(`auth/points`);
        let data = await app.$axios.$get('orders')
        let res = await app.$axios.$get(`auth/allwishlist`)
        
        return {
            user: response.data,
            points: points.response,
            orders: data.data,
            wishlist: res.data,
        }
    }
}
</script>

<style>

</style>
