<template>
  <main>
    <template v-if="banner != null">
        <header
        class="slice slice-sm pb-0 bg-cover bg-size--cover"
        :style="'background-image: url('+banner.imagelink+'banners/'+banner.banner+');'"
        >
            <span class="mask bg-danger opacity-5"></span>
            <div class="container pt-lg">
                <div class="row">
                <div class="col-lg-12">
                    <div class="row align-items-center mb-4">
                    <div class="col-lg-5 mb-4 mb-lg-0">
                        <span
                        class="h2 mb-0 text-white d-block"
                        style="text-transform: capitalize;"
                        >{{path}}</span>
                        <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                        <li class="breadcrumb-item">
                            <span class="text-light">Categories</span>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="text-light" style="text-transform: capitalize;">{{path}}</span>
                        </li>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    </template>
    <template v-else>
        <header
        class="slice slice-sm pb-0 bg-cover bg-size--cover"
        style="background-image: url('/img/backgrounds/general.png');"
        >
            <span class="mask bg-danger opacity-5"></span>
            <div class="container pt-lg">
                <div class="row">
                <div class="col-lg-12">
                    <div class="row align-items-center mb-4">
                    <div class="col-lg-5 mb-4 mb-lg-0">
                        <span
                        class="h2 mb-0 text-white d-block"
                        style="text-transform: capitalize;"
                        >{{path}}</span>
                        <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                        <li class="breadcrumb-item">
                            <span class="text-light">Categories</span>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="text-light" style="text-transform: capitalize;">{{path}}</span>
                        </li>
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </header>
    </template>
    <!-- <header
      class="slice slice-sm pb-0 bg-cover bg-size--cover"
      style="background-image: url('/img/backgrounds/general.png');"
    > -->

    <section class="slice slice-lg" id="sct-products">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-sm-6 mb-5" v-for="product in products" :key="product.slug">
            <Product :product="product"/>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions } from "vuex";
import Product from "@/components/products/Product";

export default {
  data() {
    return {
      products: [],
      banner: null,
      path: this.$route.params.slug
    };
  },

  methods: {
    ...mapActions({
      footherstyle: "navstyle/changestyle"
    })
  },

  components: {
    Product
  },
  mounted() {
    this.footherstyle({
      classes: "footer-light bg-gradient-light",
      imagemode: false,
      navclasses: "navbar-dark bg-dark"
    });
  },

  async asyncData({ params, app }) {
    let response = await app.$axios.$get(`products?category=${params.slug}`);

    if (response.meta != null) {
        return {
            products: response.meta.data,
            banner: response.banner,
        };
    }else{
        return {
            products: null,
            banner: null,
        };
    }

  }
};
</script>
