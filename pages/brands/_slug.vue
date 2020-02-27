<template>
    <main>
        <template v-if="product.brand_id == 10">
            <section class="slice pt-sm pb-4 d-flex align-items-end  bg-cover bg-size--cover" style="background-image: url('/img/backgrounds/Safari-BG.jpg');">
                <span class="mask bg-danger opacity-0"></span>
                <div class="container pt-lg">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row align-items-center mb-4">
                                <div class="col-lg-5 mb-4 mb-lg-0">
                                <span class="h2 mb-0 text-white d-block" style="text-transform: capitalize;">{{ product.name }}</span>
                                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li class="breadcrumb-item">
                                    <nuxt-link :to="{ name: 'index' }" class="text-normal">
                                        Home
                                    </nuxt-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light">Category</span>
                                    <!-- <nuxt-link :to="{ name: 'products' }" class="text-normal">
                                        Products
                                    </nuxt-link> -->
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light" style="text-transform: capitalize;">{{path}}</span>
                                    <!-- <nuxt-link :to="{ name: path }" class="text-normal" style="text-transform: capitalize;">
                                        {{path}}
                                    </nuxt-link> -->
                                    </li>
                                </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>

        <template v-if="product.brand_id == 2">
            <section class="slice pt-sm pb-4 d-flex align-items-end  bg-cover bg-size--cover" style="background-image: url('/img/backgrounds/Toughees-BG.jpg');">
                <span class="mask bg-danger opacity-0"></span>
                <div class="container pt-lg">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row align-items-center mb-4">
                                <div class="col-lg-5 mb-4 mb-lg-0">
                                <span class="h2 mb-0 text-white d-block" style="text-transform: capitalize;">{{ product.name }}</span>
                                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li class="breadcrumb-item">
                                    <nuxt-link :to="{ name: 'index' }" class="text-normal">
                                        Home
                                    </nuxt-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light">Category</span>
                                    <!-- <nuxt-link :to="{ name: 'products' }" class="text-normal">
                                        Products
                                    </nuxt-link> -->
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light" style="text-transform: capitalize;">{{path}}</span>
                                    <!-- <nuxt-link :to="{ name: path }" class="text-normal" style="text-transform: capitalize;">
                                        {{path}}
                                    </nuxt-link> -->
                                    </li>
                                </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="product.brand_id == 18">
            <section class="slice pt-sm pb-4 d-flex align-items-end  bg-cover bg-size--cover" style="background-image: url('/img/backgrounds/Pata-Pata-BG.jpg');">
                <span class="mask bg-danger opacity-0"></span>
                <div class="container pt-lg">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row align-items-center mb-4">
                                <div class="col-lg-5 mb-4 mb-lg-0">
                                <span class="h2 mb-0 text-white d-block" style="text-transform: capitalize;">{{ product.name }}</span>
                                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li class="breadcrumb-item">
                                    <nuxt-link :to="{ name: 'index' }" class="text-normal">
                                        Home
                                    </nuxt-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light">Category</span>
                                    <!-- <nuxt-link :to="{ name: 'products' }" class="text-normal">
                                        Products
                                    </nuxt-link> -->
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light" style="text-transform: capitalize;">{{path}}</span>
                                    <!-- <nuxt-link :to="{ name: path }" class="text-normal" style="text-transform: capitalize;">
                                        {{path}}
                                    </nuxt-link> -->
                                    </li>
                                </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>


        <template v-if="product.brand_id == 13">
            <section class="slice pt-sm pb-4 d-flex align-items-end  bg-cover bg-size--cover" style="background-image: url('/img/backgrounds/Sandak-BG.jpg');">
                <span class="mask bg-danger opacity-0"></span>
                <div class="container pt-lg">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row align-items-center mb-4">
                                <div class="col-lg-5 mb-4 mb-lg-0">
                                <span class="h2 mb-0 text-white d-block" style="text-transform: capitalize;">{{ product.name }}</span>
                                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li class="breadcrumb-item">
                                    <nuxt-link :to="{ name: 'index' }" class="text-normal">
                                        Home
                                    </nuxt-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light">Category</span>
                                    <!-- <nuxt-link :to="{ name: 'products' }" class="text-normal">
                                        Products
                                    </nuxt-link> -->
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light" style="text-transform: capitalize;">{{path}}</span>
                                    <!-- <nuxt-link :to="{ name: path }" class="text-normal" style="text-transform: capitalize;">
                                        {{path}}
                                    </nuxt-link> -->
                                    </li>
                                </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>


        <template v-if="product.brand_id == 3">
            <section class="slice pt-sm pb-4 d-flex align-items-end  bg-cover bg-size--cover" style="background-image: url('/img/backgrounds/Bata-BG.jpg');">
                <span class="mask bg-danger opacity-0"></span>
                <div class="container pt-lg">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row align-items-center mb-4">
                                <div class="col-lg-5 mb-4 mb-lg-0">
                                <span class="h2 mb-0 text-white d-block" style="text-transform: capitalize;">{{ product.name }}</span>
                                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li class="breadcrumb-item">
                                    <nuxt-link :to="{ name: 'index' }" class="text-normal">
                                        Home
                                    </nuxt-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light">Category</span>
                                    <!-- <nuxt-link :to="{ name: 'products' }" class="text-normal">
                                        Products
                                    </nuxt-link> -->
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light" style="text-transform: capitalize;">{{path}}</span>
                                    <!-- <nuxt-link :to="{ name: path }" class="text-normal" style="text-transform: capitalize;">
                                        {{path}}
                                    </nuxt-link> -->
                                    </li>
                                </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>
        <template v-if="product.brand_id == 16">
            <section class="slice pt-sm pb-4 d-flex align-items-end  bg-cover bg-size--cover" style="background-image: url('/img/backgrounds/Industrial-BG.jpg');">
                <span class="mask bg-danger opacity-0"></span>
                <div class="container pt-lg">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="row align-items-center mb-4">
                                <div class="col-lg-5 mb-4 mb-lg-0">
                                <span class="h2 mb-0 text-white d-block" style="text-transform: capitalize;">{{ product.name }}</span>
                                <ol class="breadcrumb breadcrumb-links breadcrumb-dark">
                                    <li class="breadcrumb-item">
                                    <nuxt-link :to="{ name: 'index' }" class="text-normal">
                                        Home
                                    </nuxt-link>
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light">Category</span>
                                    <!-- <nuxt-link :to="{ name: 'products' }" class="text-normal">
                                        Products
                                    </nuxt-link> -->
                                    </li>
                                    <li class="breadcrumb-item">
                                    <span class="text-light" style="text-transform: capitalize;">{{path}}</span>
                                    <!-- <nuxt-link :to="{ name: path }" class="text-normal" style="text-transform: capitalize;">
                                        {{path}}
                                    </nuxt-link> -->
                                    </li>
                                </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </template>

        <section class="slice slice-lg" id="sct-products">
            <div class="container">
                <div class="row">
                    <div class="col-md-10 mx-auto">
                        <div class="row">
                            <div class="col-lg-6">
                                <span v-for="(variations, type) in product.variations" :key="type">
                                    <template v-if="type == showingproduct">
                                        <no-ssr>
                                            <ProductZoomer
                                                :base-images="images"
                                                :base-zoomer-options="zoomerOptions"
                                                v-if="showImg"
                                            />
                                        </no-ssr>
                                    </template>
                                </span>
                            </div>

                            <!-- <div class="col-lg-6" v-for="(variations, type) in product.variations" :key="type">
                                <template v-if="type == showingproduct">
                                    <no-ssr>
                                        <ProductZoomer
                                            :base-images="images"
                                            :base-zoomer-options="zoomerOptions"
                                            v-if="showImg"
                                        />
                                    </no-ssr>
                                </template>
                            </div> -->

                            <div class="col-lg-6">
                                <form class="pl-lg-4">

                                    <!-- Product name -->
                                    <h2 class="h5 text-capitalize">{{ product.name }}</h2>

                                    <!-- Rating stars -->
                                    <span class="static-rating static-rating-sm">
                                        <i class="star far fa-star voted"></i>
                                        <i class="star far fa-star voted"></i>
                                        <i class="star far fa-star voted"></i>
                                        <i class="star far fa-star voted"></i>
                                        <i class="star far fa-star"></i>
                                    </span>

                                    <!-- Product description -->
                                    <div class="pt-2 mt-3 delimiter-top">
                                        <small class="text-dark font-weight-bold d-block mb-2" v-if="product.description">Description:</small>
                                        <p class="text-sm lh-150" v-if="product.description">{{ product.description }}</p>
                                    </div>

                                    <!-- Product Price -->
                                    <div class="pt-2 mt-3 delimiter-top">
                                        <small class="text-dark font-weight-bold d-block mb-2">Unit price:</small>
                                        <template v-if="unitcost != null">Ksh. {{unitcost}}</template>
                                        <template v-else><p class="text-sm lh-150">Ksh. {{ product.price }}</p></template>
                                    </div>

                                    <!-- Product Colors -->
                                    <div class="pt-2 mt-3 delimiter-top">
                                        <small class="d-block font-weight-bold text-dark mb-2">Color:</small>
                                        <div class="d-flex">
                                            <div class="custom-color" v-for="(vr, index) in product.variations" :key="index" >
                                                <el-tooltip :content="vr[0].type+' @ '+vr[0].price+'/='" placement="top">
                                                    <input :id="'color-'+vr[0].id" name="size" type="radio">
                                                    <label :for="'color-'+vr[0].id" class="rounded-circle border-danger" :style="'background-color:'+vr[0].colorcode" @click="showshoe(vr, vr[0].type, vr[0].price)"></label>
                                                </el-tooltip>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Product Sizes availability -->
                                    <div class="section pt-2 mt-3 delimiter-top">
                                        <!-- <form @submit.prevent="add"> -->
                                        <small class="d-block font-weight-bold text-dark mb-2">Sizes:</small>
                                        <ProductVariation
                                            v-for="(variations, type) in product.variations"
                                            :type="type"
                                            :showingproduct="showingproduct"
                                            :variations="variations"
                                            :key="type"
                                            v-model="form.variation"
                                        />

                                        <div v-if="form.variation">
                                            <div class="mt-4">
                                                <small class="d-block font-weight-bold text-dark mb-2">Quantity:</small>
                                                <el-input-number v-model="form.quantity" :min="1" :max="form.variation.stock_count"></el-input-number>
                                            </div>

                                            <div class="row mt-4">
                                                <div class="col-8">
                                                    <button @click.prevent="add" type="button" class="btn btn-success btn-sm">Add to cart</button>
                                                </div>
                                                <div class="col-4">
                                                    <button @click.prevent="postWishlist" type="button" class="btn btn-info btn-sm">Add to wishlist</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div v-if="addedtocart" class="animated bounceInDown card card-stats bg-gradient-success shadow-success border-0 mt-4">
                                            <div class="card-body p-3">
                                                <div class="d-flex">
                                                    <div>
                                                        <span class="icon icon-sm text-white">
                                                            <i class="far fa-thumbs-up"></i>
                                                        </span>
                                                    </div>
                                                    <div class="pl-4">
                                                        <h5 class="mb-1 text-white">{{successmessage}}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- </form> -->
                                    </div>






                                    <!-- <div v-if='errors' class="card card-stats bg-gradient-warning shadow-warning border-0 mb-4">
                                        <div class="card-body">
                                            <div class="d-flex">
                                                <div>
                                                    <span class="icon icon-sm text-white">
                                                        <i class="far fa-bug"></i>
                                                    </span>
                                                </div>
                                                <div class="pl-4">
                                                    <h5 class="mb-1 text-white">Quantity error</h5>
                                                    <p v-text="errors['0']"></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->




                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice slice-md delimiter-top">

            <!-- <div class="pt-5 position-absolute middle right-0 col-lg-7 col-xl-7 d-none d-lg-block">
                <img alt="" src="/img/svg/ladyshopping.svg" class="img-fluid" style="opacity: .1;">
            </div> -->
            <!-- SVG shapes background -->
            <div class="bg-absolute-cover bg-size--contain d-flex align-items-center opacity-1">
                <figure class="w-100">

                    <svg preserveAspectRatio="none" x="0px" y="0px" viewBox="0 0 1506.3 578.7" xmlns="http://www.w3.org/2000/svg">
                        <path class="shape-fill-purple" d="M 147.269 295.566 C 147.914 293.9 149.399 292.705 151.164 292.431 L 167.694 289.863 C 169.459 289.588 171.236 290.277 172.356 291.668 L 182.845 304.699 C 183.965 306.091 184.258 307.974 183.613 309.64 L 177.572 325.239 C 176.927 326.905 175.442 328.1 173.677 328.375 L 157.147 330.943 C 155.382 331.217 153.605 330.529 152.485 329.137 L 141.996 316.106 C 140.876 314.714 140.583 312.831 141.228 311.165 L 147.269 295.566 Z"
                        />
                        <path class="shape-fill-green" d="M 92.927 474.881 C 93.309 473.896 94.187 473.19 95.23 473.028 L 105.002 471.51 C 106.045 471.347 107.096 471.754 107.758 472.577 L 113.959 480.28 C 114.621 481.103 114.794 482.216 114.413 483.201 L 110.841 492.423 C 110.46 493.408 109.582 494.114 108.539 494.277 L 98.767 495.795 C 97.723 495.957 96.673 495.55 96.011 494.727 L 89.81 487.024 C 89.148 486.201 88.975 485.088 89.356 484.103 L 92.927 474.881 Z"
                        />
                        <path class="shape-fill-teal" d="M 34.176 36.897 C 34.821 35.231 36.306 34.036 38.071 33.762 L 54.601 31.194 C 56.366 30.919 58.143 31.608 59.263 32.999 L 69.752 46.03 C 70.872 47.422 71.165 49.305 70.52 50.971 L 64.479 66.57 C 63.834 68.236 62.349 69.431 60.584 69.706 L 44.054 72.274 C 42.289 72.548 40.512 71.86 39.392 70.468 L 28.903 57.437 C 27.783 56.045 27.49 54.162 28.135 52.496 L 34.176 36.897 Z"
                        />
                        <path class="shape-fill-blue" d="M 975.636 9.762 C 976.101 8.561 977.171 7.7 978.443 7.502 L 990.354 5.652 C 991.626 5.454 992.907 5.95 993.714 6.953 L 1001.272 16.343 C 1002.079 17.346 1002.29 18.703 1001.826 19.903 L 997.472 31.144 C 997.008 32.344 995.938 33.205 994.666 33.403 L 982.754 35.254 C 981.483 35.451 980.202 34.956 979.395 33.953 L 971.837 24.563 C 971.03 23.559 970.818 22.203 971.283 21.002 L 975.636 9.762 Z"
                        />
                        <path class="shape-fill-gray-dark" d="M 1417.759 409.863 C 1418.404 408.197 1419.889 407.002 1421.654 406.728 L 1438.184 404.16 C 1439.949 403.885 1441.726 404.574 1442.846 405.965 L 1453.335 418.996 C 1454.455 420.388 1454.748 422.271 1454.103 423.937 L 1448.062 439.536 C 1447.417 441.202 1445.932 442.397 1444.167 442.672 L 1427.637 445.24 C 1425.872 445.514 1424.095 444.826 1422.975 443.434 L 1412.486 430.403 C 1411.366 429.011 1411.073 427.128 1411.718 425.462 L 1417.759 409.863 Z"
                        />
                        <path class="shape-fill-orange" d="M 1313.903 202.809 C 1314.266 201.873 1315.1 201.201 1316.092 201.047 L 1325.381 199.604 C 1326.373 199.449 1327.372 199.837 1328.001 200.618 L 1333.895 207.941 C 1334.525 208.723 1334.689 209.782 1334.327 210.718 L 1330.932 219.484 C 1330.57 220.42 1329.735 221.092 1328.743 221.246 L 1319.454 222.689 C 1318.462 222.843 1317.464 222.457 1316.834 221.674 L 1310.94 214.351 C 1310.31 213.569 1310.146 212.511 1310.508 211.575 L 1313.903 202.809 Z"
                        />
                        <path class="shape-fill-red" d="M 1084.395 506.137 C 1084.908 504.812 1086.09 503.861 1087.494 503.643 L 1100.645 501.6 C 1102.049 501.381 1103.463 501.929 1104.354 503.036 L 1112.699 513.403 C 1113.59 514.51 1113.823 516.009 1113.31 517.334 L 1108.504 529.744 C 1107.99 531.07 1106.809 532.02 1105.405 532.239 L 1092.254 534.282 C 1090.85 534.5 1089.436 533.953 1088.545 532.845 L 1080.2 522.478 C 1079.309 521.371 1079.076 519.873 1079.589 518.547 L 1084.395 506.137 Z"
                        />
                    </svg>

                </figure>
            </div>

            <div class="container position-relative zindex-100">
                <div class="mb-md text-center">
                    <h5>Suggested products</h5>
                    <div class="fluid-paragraph text-center mt-2">
                        <p class="lead lh-180">Check out these special products that we think you might like</p>
                    </div>
                </div>

                <section class="slice slice-sm bg-transparent" id="sct-products">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 col-sm-6 mb-5" v-for="product in ralated" :key="product.slug">
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
import { mapActions } from "vuex";
import Product from '@/components/products/Product'
import ProductVariation from "@/components/products/ProductVariation";

    export default {
        data() {
            return {
                successmessage: null,
                unitcost: null,
                path: this.$route.params.slug,
                product: null,
                user: null,
                comment: null,
                ralated: null,
                images: null,
                showImg: false,
                submitting: false,
                banner: null,
                showcomments: false,
                showingproduct: null,
                addedtocart: false,
                form: {
                    variation: "",
                    quantity: 1
                },
                zoomerOptions: {
                    'zoomFactor': 2,
                    'pane': 'container-round',
                    'hoverDelay': 300,
                    'namespace': 'container-zoomer',
                    'move_by_click':true,
                    'scroll_items': 5,
                    'choosed_thumb_border_color': "#ff3d00",
                    'scroller_button_style': "line",
                    'scroller_position': "left",
                    'zoomer_pane_position': "right"
                }
            };
        },

        computed: {
            approvecomments: function(){
                var filtered = [];
                filtered = this.product.comments.filter((rpt) => {
                    return rpt.status == 1
                })
                return filtered;
            },
        },
        watch: {
            "form.variation"() {
                this.form.quantity = 1;
            },
        },
        components: {
            ProductVariation, Product
        },
        methods: {
            ...mapActions({
                store: "cart/store",
                setredirecturl: 'setredirecturl',
                footherstyle: 'navstyle/changestyle'
            }),
            imagegtouping(array, name){
                var newimg = [];
                for (let i = 0; i < array.length; i++) {
                    if (array[i].colorname == name) {
                        array[i].id = [i][0]
                        newimg.push(array[i]);
                    }
                }
                return newimg;
            },
            showaction(){
                if (this.showcomments == false) {
                    this.showcomments = true
                }else{
                    this.showcomments = false
                }
            },
            // async add () {
            //     this.submitting = true
            //     try {
            //         let response = await this.$axios.$post('cart', {"products":[{"id":this.form.variation.id,"quantity":this.form.quantity}]})
            //     } catch (e) {
            //         this.submitting = false
            //         return;
            //     }
            // },
            add() {
                if (!this.$auth.loggedIn) {
                    // console.log($nuxt.$route.params.slug)
                    // console.log($nuxt.$route.path)
                    // console.log($nuxt.$route.name)

                    // this.$localForage.setItem('redirect', $nuxt.$route.params)
                    this.setredirecturl($nuxt.$route.params)
                    this.$router.push({
                        name: "auth-signin"
                    });
                    return;
                }

                this.store([
                    {
                        id: this.form.variation.id,
                        quantity: this.form.quantity
                    }
                ])

                this.form = {
                    variation: "",
                    quantity: 1
                };
                this.successmessage = 'Added to cart !';
                this.show()
            },
            show () {
                this.addedtocart = true;
                setTimeout(() => {
                    this.addedtocart = false;
                    this.successmessage = '';
                }, 3000);
            },
            showshoe(shoe, type, unitprice){
                this.unitcost = unitprice
                this.showingproduct = type
                this.images = null
                this.images = {
                    'thumbs': this.imagegtouping(this.product.thumbs, this.showingproduct),
                    'normal_size': this.imagegtouping(this.product.normal_size, this.showingproduct),
                    'large_size': this.imagegtouping(this.product.large_size, this.showingproduct)
                }
            },
            async postWishlist(){
                await this.$axios.$post('wishlist', {'product': this.product.id})
                this.successmessage = 'Added to wishlist !';
                this.show()
            },
            async postComment(){
                try {
                    let response = await this.$axios.$post('comments', {'comment': this.comment, 'product': this.product.id})
                    if (response.data) {
                        this.comment = null
                    }
                } catch (e) {
                    this.submitting = false
                    return;
                }
            }
        },
        mounted() {
            this.footherstyle({'classes':'footer-light bg-gradient-light', 'imagemode': false, 'navclasses': 'navbar-dark bg-dark'});
            this.showImg = true
        },

        async asyncData({ params, app }) {
            let response = await app.$axios.$get(`products/${params.slug}`);
            // let res = await app.$axios.$get(`auth/me`);
            function idrearrange(array) {
                for (let i = 0; i < array.length; i++) {
                    array[i].id = [i][0]+1
                }
                return array;
            }
            return {
                showingproduct: Object.keys(response.data.variations)[0],
                product: response.data,
                // user: res.data,
                ralated: response.ralated,
                banner: response.banner,
                images: {
                    'thumbs': idrearrange(response.data.thumbs),
                    'normal_size': idrearrange(response.data.normal_size),
                    'large_size': idrearrange(response.data.large_size)
                }

            };
        }
    };
</script>
<style>
    .responsive-image{
        border-radius: 5px;
        box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.4);
    }
    .choosed-thumb{
        border-radius: 5px;
    }
</style>
