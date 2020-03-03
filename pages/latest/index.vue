<template>
  <main>
  <div class="container-fluid p-0 text-center">
 <a href="#">
   <img class="img-fluid" src="/img/backgrounds/newarrivals.JPG" alt />
   </a>
      </div>
        <section class="slice overflow-hidden">

            <div class="container position-relative zindex-100">
                <div class="mb-md text-center">
                    <h3 class="mt-4"> <strong class="font-weight-700">NEW ARRIVALS</strong></h3>
                </div>

                <section class="slice slice-sm bg-transparent" id="sct-products">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-3 col-sm-6 mb-5" v-for="product in latest" :key="product.slug">
                                <Product :product="product" />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </section>
  </main>
    </template>

<script>
import { mapActions, mapGetters } from "vuex";
import Product from "@/components/products/Product";
import Sliders from "@/components/sliders/slider";
export default {
  components: {
    Product,
    Sliders
  },
  head() {
    return {
      script: [
        { src: "/libs/jqueryplugin/jquery.min.js", body: true },
        { src: "/libs/bootstrap/bootstrap.bundle.min.js", body: true },
        { src: "/libs/in-view/in-view.min.js", body: true },

        { src: "/libs/sticky-kit/sticky-kit.min.js", body: true },
        { src: "/libs/select2/select2.min.js", body: true },

        { src: "/libs/swiper/js/swiper.min.js", body: true },

        { src: "/libs/tweenmax/tweenmax.min.js", body: true },
        { src: "/libs/wavify/wavify.min.js", body: true },
        { src: "/js/theme.min.js", body: true }
      ]
    };
  },
  data() {
    return {
      slidescount: 3,
      slickOptions: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
      },
      slides: [
        {
          image: "language.jpg",
          animation: "fadeIn"
        },
        {
          image: "img-20.jpg",
          animation: "zoomIn"
        }
      ],
      startnow: null,
      currentSlide: null,
      showingSlide: null,
      slideanimation: null
    };
  },
  watch: {
    startnow: function() {
      var count = this.slides.length - 1;
      this.slideanimation = null;
      if (this.currentSlide < count) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
      }
      this.showingSlide = this.slides[this.currentSlide].image;
      this.slideanimation = this.slides[this.currentSlide].animation;
      // console.log(this.slides[this.currentSlide]+' '+this.currentSlide)
    }
  },
  computed: {
    ...mapGetters({
      sliders: "sliders",
      latest: "latest",
      adverts: "adverts",
      salesbanner: "salesbanner"
    })
  },
  methods: {
    ...mapActions({
      footherstyle: "navstyle/changestyle"
    }),
    myTimer() {
      setInterval(() => {
        this.startnow = new Date().getTime() / 1000;
      }, 5000);
    },

    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      // Helpful if you have to deal with v-for to update dynamic lists
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  },
  mounted() {
    this.footherstyle({
      classes: "footer-light bg-gradient-light",
      imagemode: false,
      navclasses: "navbar-dark bg-dark"
    });
    this.myTimer();
    this.showingSlide = this.slides[0].image;
    this.slideanimation = this.slides[0].animation;
  }
};
</script>
<style>
/* .card {
        background-color: rgba(255, 255, 255, 0.7);
    } */
.carousel-3d-container[data-v-c06c963c] {
  margin: 3px auto;
}
.ribbon {
  font-size: 0.75rem;
  font-weight: 600;
  position: absolute;
  z-index: 10;
  top: 1rem;
  display: flex;
  width: 2.5rem;
  height: 2.5rem;
  align-items: center;
  justify-content: center;
}

.ribbon-left {
  left: 1rem;
}

.ribbon-right {
  right: 1rem;
}
.ribbon-primary {
  color: #fff;
  background-color: #6813d7;
}

.ribbon-secondary {
  color: #212529;
  background-color: #fff;
}

.ribbon-success {
  color: #fff;
  background-color: #76e288;
}

.ribbon-info {
  color: #fff;
  background-color: #56c7fb;
}

.ribbon-warning {
  color: #fff;
  background-color: #fa3;
}

.ribbon-danger {
  color: #fff;
  background-color: #ff6b63;
}

.ribbon-light {
  color: #212529;
  background-color: #ebeef0;
}

.ribbon-dark {
  color: #fff;
  background-color: #0a3058;
}

.ribbon-white {
  color: #212529;
  background-color: #fff;
}

.ribbon-darker {
  color: #fff;
  background-color: #082341;
}
@media screen and (max-width: 990px) {
  .mobile-margin {
    margin-top: 65px;
  }
}
.slick-next {
  right: 25px;
}
.slick-prev {
  left: 25px;
  z-index: 1;
}
</style>
