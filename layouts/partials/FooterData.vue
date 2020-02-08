<template>
    <span>
        <span v-if="navstyle">
            <footer id="footer-data" class="footer mt-0" :class="navstyle.classes">
                <div class="container">
                    <div class="row pt-0">
                        <div class="col-lg-4 mb-5 mb-lg-0">
                            <nuxt-link :to="{ name: 'index' }">
                                <template v-if="navstyle.imagemode == true">
                                    <img alt="Image placeholder" src="/img/brand/white.png" style="height: 70px;">
                                </template>
                                <template v-else>
                                    <img alt="Image placeholder" src="/img/brand/dark.png" style="height: 70px;">
                                </template>
                            </nuxt-link>
                            <p class="text-sm">Bata Shoe Kenya PLC is based in Limuru, We have been operating since 1939 and is a leading company in the footwear sector in Kenya. It is present throughout the country with a widespread network of over 150 stores and a Bata world class factory</p>
                        </div>
                        <div class="col-lg-3 col-6 col-sm-6 ml-lg-auto mb-5 mb-lg-0">
                            <h6 class="heading mb-3">LET US HELP YOU</h6>
                            <ul class="list-unstyled text-sm">
                                <li><nuxt-link :to="{ name: 'let_us_help_you' }">Customer Care</nuxt-link></li>
                                <li><nuxt-link :to="{ name: 'buying_guide' }">Buying Guide</nuxt-link></li>
                                <li><nuxt-link :to="{ name: 'terms_and_conditions' }">Terms & Conditions</nuxt-link></li>
                                <li><nuxt-link :to="{ name: 'shipping_and_delivery' }">Shipping and Delivery</nuxt-link></li>
                                <li><nuxt-link :to="{ name: 'privacy' }">Privacy</nuxt-link></li>
                                <li><nuxt-link :to="{ name: 'bata_club' }">Bata Club</nuxt-link></li>
                            </ul>
                        </div>
                        <div class="col-lg-3 col-6 col-sm-6 mb-5 mb-lg-0">
                            <h6 class="heading mb-3">GET TO KNOW US</h6>
                            <ul class="list-unstyled text-sm">
                                <li><a href="#!">Email: bata.kenya@bata.com</a></li>
                                <li><a href="#!">Phone: +254 726 668 941</a></li>
                                <li><a href="#!">Address: 23 Limuru</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="row align-items-center justify-content-md-between py-4 mt-4 delimiter-top">
                        <div class="col-md-6">
                            <div class="copyright text-sm font-weight-bold text-center text-md-left">
                                © 2019 <a href="http://tdfgroup.co.ke/" class="font-weight-bold" target="_blank">TDF Group</a>. All rights reserved.
                            </div>
                        </div>
                        <div class="col-md-6">
                            
                            <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                <li class="nav-item pt-1">
                                    Follow us on:
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://www.facebook.com/batakenyafans/" target="_blank">
                                        <i class="fab fa-facebook text-danger"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="https://twitter.com/Batakenya" target="_blank">
                                        <i class="fab fa-twitter text-danger"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" href="https://www.instagram.com/batakenya/" target="_blank">
                                        <i class="fab fa-instagram text-danger"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </span>
        <span v-else></span>
        <div class="customizer"></div>
    </span>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            navstyle: 'navstyle/navstyle',
        })
    }
}
</script>

<style>
    .customizer {
        position: fixed;
        bottom: .1rem;
        left: 1rem;
        width: 300px;
        height: 60px;
        z-index: 100;
    }
</style>
