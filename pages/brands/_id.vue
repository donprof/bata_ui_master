<template>
    <main>
        <template v-if="brandid == 10">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/backgrounds/Safari-Landing.jpg" alt="">
                </div>
            </section>
        </template>
        <template v-if="brandid == 2">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/backgrounds/BATA_TOUGHEES.jpg" alt="">
                </div>
            </section>
        </template>
        <section class="slice pb-0 delimiter-top">
            <div class="container">
                <div class="row row-grid">
                    <div class="col-lg-12">
                        <blockquote class="py-1 px-5 rounded-right" v-if="brandid == 10">
                            <h3 class="h2 font-weight-700">Safari story</h3>
                            <p class="lead">There is only one way to see Africa-in the comfort of your classic Bata Safari Boots, the legendary boots that say you know Africa. The basic design has remained unchanged over the years. Clean, simple lines with a timeless, functional aesthetic appeal. Hand stitched with nylon to resist moisture, and with solid rust proof brass eyelets. The leather uppers can take the beating out in the bush but still look good after just a little brushing. Supremely comfortable, offering ankle protection. The thick rubber soles make them quiet, thus ideal boots for walking in the bush. Experience the age-old African adventure in your Bata Safari Boots.</p>
                        </blockquote>

                        <blockquote class="py-1 px-5 rounded-right" v-if="brandid == 2">
                            <h3 class="h2 font-weight-700">Toughees story</h3>
                            <p class="lead">Toughees have been a trusted children’s school shoe brand since 1954 - a proud heritage for a company that values its high-quality products and solid history.</p>
                            <p class="lead">Designed with active children in mind: their limitless energy means that whether they are running, kicking a football, jumping or zestful fun-times around, their shoes - particularly their school shoes - need to be able to go the distance.</p>
                            <p class="lead">Made with high-quality non-polish leather, Toughees are durable, strong, reliable, easy to clean, affordable and offer breathable comfort for growing feet, who are born to live tough.</p>
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
        <section class="slice slice-lg" id="sct-products">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6 mb-5" v-for="product in products" :key="product.slug">
                        <Brandproduct :product="product"/>
                    </div>
                </div>
            </div>
        </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import Brandproduct from "@/components/products/Brandproduct";
export default {
    data() {
        return {
            products: [],
            banner: null,
            brandid: null,
            brand: this.$route.params.brand
        };
    },
    components: {
        Brandproduct
    },
    methods: {
        ...mapActions({
            footherstyle: "navstyle/changestyle"
        })
    },
    mounted() {
        this.footherstyle({
        classes: "footer-light bg-gradient-light",
        imagemode: false,
        navclasses: "navbar-dark bg-dark"
        });
    },
    async asyncData({ params, app }) {
        let response = await app.$axios.$get(`getbrans/${params.id}`);
        return {
            brandid: params.id,
            products: response.data,
            banner: response.banner,
        };
    }
}
</script>

<style>
    .img-fluid {
        max-width: 100%;
        height: auto;
    }
</style>