<template>
    <main>
         <template v-if="brandid == 3">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/backgrounds/Bata-LP.jpg" width="100%" alt="">
                </div>
            </section>
        </template>
        <template v-if="brandid == 10">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/backgrounds/Safari-Landing.jpg" width="100%" alt="">
                </div>
            </section>
        </template>
        <template v-if="brandid == 2">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/backgrounds/BATA_TOUGHEES.jpg" width="100%" alt="">
                </div>
            </section>
        </template>
         <template v-if="brandid == 18">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/backgrounds/patapata-LP.jpg" width="100%" alt="">
                </div>
            </section>
        </template>
         <template v-if="brandid == 7">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/banners/banner1.jpg" width="100%" alt="">
                </div>
            </section>
        </template>
         <template v-if="brandid == 4">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/banners/banner2.jpg" width="100%" alt="">
                </div>
            </section>
        </template>
            <template v-if="brandid == 13">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/backgrounds/Sandak-LP.jpg" width="100%" alt="">
                </div>
            </section>
        </template>
         <template v-if="brandid == 16">
            <section class="slice p-0 my-0">
                <div class="container-fluid p-0 text-center">
                    <img class="img-fluid" src="/img/backgrounds/Industrial-Lp.jpg" width="100%" alt="">
                </div>
            </section>
        </template>

        <section class="slice pb-0 delimiter-top">
            <div class="container">
                <div class="row row-grid">
                    <div class="col-lg-12">
                       <blockquote class="py-1 px-5 rounded-right" v-if="brandid == 3">
                            <h3 class="h2 font-weight-700">BATA STORY</h3>
                            <p class="lead">

                              Innovation has been the foundation of our business since 1894.
                               Our founder Tomáš Bata had a vision to shoe mankind by making high-quality, affordably priced footwear available to everyone. Tomáš dramatically changed the global shoe industry by creating hundreds of innovative advancements in shoe design, manufacturing processes and employee work conditions with his paradigm-breaking and socially conscious approach.
                              <i>Love Living In Bata Since 1894</i>

                            </p>

                        </blockquote>
                        <blockquote class="py-1 px-5 rounded-right" v-if="brandid == 10">
                            <h3 class="h2 font-weight-700">SAFARI STORY</h3>
                            <p class="lead">There is only one way to see Africa-in the comfort of your classic Bata Safari Boots, the legendary boots that say you know Africa. The basic design has remained unchanged over the years. Clean, simple lines with a timeless, functional aesthetic appeal. Hand stitched with nylon to resist moisture, and with solid rust proof brass eyelets. The leather uppers can take the beating out in the bush but still look good after just a little brushing. Supremely comfortable, offering ankle protection. The thick rubber soles make them quiet, thus ideal boots for walking in the bush. Experience the age-old African adventure in your Bata Safari Boots.</p>
                        </blockquote>

                        <blockquote class="py-1 px-5 rounded-right" v-if="brandid == 2">
                            <h3 class="h2 font-weight-700">TOUGHEES STORY</h3>
                              <p class="lead"> Toughees have been a trusted children’s school shoe brand since 1954 - a proud heritage for a company that values its high-quality products and solid history.
                            Designed with active children in mind: their limitless energy means that whether they are running, kicking a football, jumping or zestful fun-times around, their shoes - particularly their school shoes - need to be able to go the distance.
                            Made with high-quality non-polish leather, Toughees are durable, strong, reliable, easy to clean, affordable and offer breathable comfort for growing feet, who are born to live tough.</p>
                        </blockquote>
                        <blockquote class="py-1 px-5 rounded-right" v-if="brandid == 18">
                            <h3 class="h2 font-weight-700">PATA PATA STORY</h3>
                            <p class="lead">
                              Embrace the warmth of Africa with our vibrant and funky coloured PataPata.Originally registered in Kenya in 1981, PataPata is the ultimate expression of African culture, colour, rhythm and positive vibe.
This fashionable range of footwear for adults and kids provides timeless simplicity, enjoyment and comfort for many occasions.
Whether you are on vacation or puttering around the house, this fun and vibrant footwear with its distinctive designs lets you express your playful side.
                            </p>

                        </blockquote>
                         <blockquote class="py-1 px-5 rounded-right" v-if="brandid == 13">
                            <h3 class="h2 font-weight-700">SANDAK STORY</h3>
                            <p class="lead">
                              Set your feet free with an all weather, simple, and stylish shoe, made of superior quality PVC. Sandak offers comfort like no other from an easy day at home, in the garden or when you are out and about; there is a style for the entire family.

                            </p>

                        </blockquote>
                         <blockquote class="py-1 px-5 rounded-right" v-if="brandid == 16">
                            <h3 class="h2 font-weight-700">BATA INDUSTRIALS STORY</h3>
                            <p class="lead">

                              Being a professional means more than being excxellent a what you do. it also means taking responsibility for yourself and your coworkers especially in potentially dangerous environments that is why we want you to stand strong,walk with confidence and stay safe under all circumstances that starts with the safety shoe.

                            </p>

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
