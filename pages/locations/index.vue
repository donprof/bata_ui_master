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
                        >Store Locations</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section class="slice slice-lg pt-lg-5">
            <div class="container">
                <div class="row row-grid">

                    <div v-for="lcs in locations" :key="lcs" class="col-md-4 mb-4">
                        <div class="card bg-dark opacity-container text-white overflow-hidden shadow border-0">
                            <a href="#" data-fancybox data-type="iframe" data-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.565017836055!2d-122.41879278507707!3d37.77679637975909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sTwitter+HQ!5e0!3m2!1sen!2sro!4v1524131359924">
                                <div class="card-img-bg" style="background-image: url('/img/prv/city-1.jpg');"></div>
                                <span class="mask opacity-5 opacity-8--hover" :class="'bg-gradient-'+lcs.gradient"></span>
                                <div class="card-body px-3 py-5">
                                    <div>
                                        <h3 class="h3 text-white font-weight-bold mb-4 text-capitalize">{{lcs.name}}</h3>
                                        <h6 class="text-white">{{lcs.description}}</h6>
                                    </div>
                                    <span class="text-white text-uppercase font-weight-bold">
                                        See on map <i class="far fa-angle-right ml-2"></i>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        head() {
            return {
                script: [
                    {src: '/libs/jqueryplugin/jquery.min.js',body: true},
                    {src: '/libs/bootstrap/dist/js/bootstrap.bundle.min.js',body: true},
                    {src: '/libs/in-view/dist/in-view.min.js',body: true},
                    
                    {src: '/libs/sticky-kit/dist/sticky-kit.min.js',body: true},
                    {src: '/libs/select2/dist/js/select2.min.js',body: true},

                    {src: '/libs/swiper/js/swiper.min.js',body: true},

                    {src: '/libs/tweenmax/tweenmax.min.js',body: true},
                    {src: '/libs/wavify/wavify.min.js',body: true},
                    {src: '/js/theme.min.js',body: true},
                ]
            };
        },
        data() {
            return {
                locations: []
            }
        },
        methods: {
            ...mapActions({
                footherstyle: 'navstyle/changestyle'
            }),
        },
        mounted() {
            this.footherstyle({'classes':'footer-light bg-gradient-light', 'imagemode': false, 'navclasses': 'navbar-dark bg-dark'});
        },
        async asyncData({ params, app }) {
            let response = await app.$axios.$get(`locations`);
            return {
                locations: response
            };
        }
    };
</script>