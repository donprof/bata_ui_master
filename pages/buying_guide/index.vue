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
                        >Buying guide</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <!-- Buying guide -->
        <section class="slice pb-md delimiter-top bg-secondary">
            <div class="container">
                <div class="row row-grid justify-content-center">
                    <div class="col-lg-8 text-center">
                        <h2 class="heading h2 mb-4">BUYING GUIDE</h2>
                    </div>
                </div>
                <div class="row row-grid">
                    <div class="col-lg-12">
                        <blockquote class="blockquote blockquote-card bg-secondary py-5 px-5 rounded-right">
                            <h3 class="h2 font-weight-700">HOW CAN I MAKE AN ORDER?</h3>
                            <p class="lead">You can browse our website and discover the Bata collection. When you have found what you are looking for you can proceed to the "checkout" section and complete the purchase. Remember to provide a Kenyan residence address for shipping and billing. After sending the order, you will receive a confirmation e-mail.</p>
                        </blockquote>
                    </div>
                    <div class="col-lg-12">
                        <blockquote class="blockquote blockquote-card bg-secondary py-5 px-5 rounded-right">
                            <h3 class="h2 font-weight-700">CAN I PICK UP THE PRODUCTS ORDERED AT A BATA STORE?</h3>
                            <p class="lead">Of course, with the Click & Collect service you can order your favorite items online and collect them at one of the Bata direct stores of your choice in Kenya. For more information on the Click & Collect service, contact us via the customer care e-mail or call phone</p>
                            <footer class="blockquote-footer">
                                Email <cite class="font-weight-600 text-danger" title="customer.service.kenya@bata.com">customer.service.kenya@bata.com </cite>
                                Phone <cite class="font-weight-600 text-danger" title="+254 726 668 941">+254 726 668 941</cite>
                            </footer>
                        </blockquote>
                    </div>
                    <div class="col-lg-12">
                        <blockquote class="blockquote blockquote-card bg-secondary py-5 px-5 rounded-right">
                            <h3 class="h2 font-weight-700">HOW CAN I FIND A SITE PRODUCT?</h3>
                            <p class="lead">You can search for the product you need in our catalog or by writing a text in the search box at the top right of the Home page. The products are divided into Women, Men and Children as well as product categories (such as sneakers, formal, casual, etc.). You can refine your search using the filters on all the pages of the catalog. At any time you can delete the chosen filter and return to the extended list of results. The products searched will be shown to you with the detail of the price and the colors available. If you do not find the product you are looking for on our site you can contact us on e-mail or call phone</p>
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