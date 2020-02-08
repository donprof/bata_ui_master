<template>
    <main>
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
                        >Let us help you</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <!-- Customer care -->
        <section class="slice pb-md delimiter-top">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="heading h2 mb-4">Customer Care</h2>
                        <p class="lead lh-180">We are here to serve you and ensure that you receive the best service. Please contact us:</p>
                    </div>
                </div>
                <div class="row row-grid">
                    <div class="col-lg-4">
                        <blockquote class="blockquote blockquote-card bg-secondary py-5 px-5 rounded-right">
                            <h3 class="h2 font-weight-700">Phone number</h3>
                            <p class="lead">+254 726 668 941</p>
                        </blockquote>
                    </div>
                    <div class="col-lg-4">
                        <blockquote class="blockquote blockquote-card bg-secondary py-5 px-5 rounded-right">
                            <h3 class="h2 font-weight-700">Working hours</h3>
                            <p class="lead">From 8:00AM To 5:00PM .</p>
                        </blockquote>
                    </div>
                    <div class="col-lg-4">
                        <blockquote class="blockquote blockquote-card bg-secondary py-5 px-5 rounded-right">
                            <h3 class="h2 font-weight-700">Email</h3>
                            <p class="lead">customer.service.kenya@bata.com</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
        <!-- Terms of payment -->
        <section class="slice pb-md delimiter-top">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="heading h2 mb-4">TERMS OF PAYMENT</h2>
                        <p class="lead lh-180">WHAT ARE THE PAYMENT METHODS?</p>
                    </div>
                </div>
                <div class="row row-grid">
                    <div class="col-lg-12">
                        <blockquote class="blockquote blockquote-card bg-secondary py-5 px-5 rounded-right">
                            <h4 class="h3 font-weight-700">On the Bata Kenya website it is possible to pay with:</h4>
                            <p class="lead">Mobile Money i.e. (MPESA, Airtel Money etc.)</p>
                            <p class="lead">Credit / debit card for the Visa</p>
                            <p class="lead">Cash on delivery (This is not available at the moment).</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    methods: {
        ...mapActions({
            footherstyle: 'navstyle/changestyle'
        }),
    },
    mounted() {
        this.footherstyle({'classes':'footer-light bg-gradient-light', 'imagemode': false, 'navclasses': 'navbar-dark bg-dark'});
    },
}
</script>

<style>

</style>