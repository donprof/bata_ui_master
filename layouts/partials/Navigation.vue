<template>
    <header id="header-main" class="header-danger">

        <!-- Search -->
        <div id="search-main" class="navbar-search">
            <div class="container">
                <!-- Search form -->
                <!-- <form class="navbar-search-form" role="form">
                    <div class="form-group">
                        <div class="input-group input-group-transparent">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="far fa-search"></i></span>
                            </div>
                            <input type="text" class="form-control" placeholder="Type and hit enter ...">
                        </div>
                    </div>
                </form> -->
                <searchDataComponent @closemodal="hide"/>
                <div class="navbar-search-suggestions">
                    <h6>Search Suggestions</h6>
                    <div class="row">
                        <div class="col-sm-6">
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a class="list-link" href="#">
                                        <i class="far fa-search"></i>
                                        <span>New Arrivals</span> for Men
                                    </a>
                                </li>
                                <li>
                                    <a class="list-link" href="#">
                                        <i class="far fa-search"></i>
                                        <span>New Arrivals</span> for Women
                                    </a>
                                </li>
                                <li>
                                    <a class="list-link" href="#">
                                        <i class="far fa-search"></i>
                                        <span>Deals for</span> Women
                                    </a>
                                </li>
                                <li>
                                    <a class="list-link" href="#">
                                        <i class="far fa-search"></i>
                                        <span>Deals for</span> Men
                                    </a>
                                </li>
                                <li>
                                    <a class="list-link" href="#">
                                        <i class="far fa-search"></i>
                                        <span>Deals for</span> Kids
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Topbar -->
        <div id="navbar-top-main" class="navbar-top navbar-dark bg-danger p-0">
            <div class="container">



                <div class="navbar-nav align-items-center">
                   <nuxt-link :to="{ name: 'index' }" class="navbar-brand mr-lg-5">
                    <template v-if="navstyle == true">
                        <img alt="Image placeholder" src="/img/brand/red.png" style="height: 50px;">
                    </template>
                    <template v-else>
                        <img alt="Image placeholder" src="/img/brand/white.png" style="height: 50px;">
                    </template>
                </nuxt-link>
                    <div class="d-none d-lg-inline-block">
                        <span class="navbar-text mr-3 text-uppercase"><a href="https://api.whatsapp.com/send?phone=254726668941&text=Hi%20Bata,%20please%20help%20me%20out.%20My%20query%20is" target="_blank">Contact us</a></span>
                        <span class="navbar-text mr-3 text-uppercase"> <a class="nav-link text-uppercase" target="_blank" href="https://www.giift.com/offer2/card/prepare/bata-kenya">Gift card</a></span>
                         <span class="navbar-text mr-3 text-uppercase">  <a class="nav-link text-uppercase" target="_blank" href="http://eu.sharingan.capillarytech.com/app/Bata_Microsite#!/authlogin">Bata club</a></span>
                    </div>

                    <div class="ml-auto">
                        <ul class="nav">
                           <li class="nav-item">
                                <nuxt-link :to="{ name: 'search' }" class="nav-link"><i class="far fa-search"></i></nuxt-link>

                            </li>
                            <li class="nav-item" v-if="$auth.loggedIn">
                                <a href="#" @click.prevent="logout" class="nav-link"><i class="far fa-power-off"></i> Logout</a>
                            </li>
                            <li class="nav-item">
                                <nuxt-link :to="{ name: 'locations' }" class="nav-link"><i class="fas fa-map-marked-alt"></i></nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main navbar -->
        <nav class="navbar navbar-main navbar-expand-lg navbar-sticky navbar-transparent navbar-dark bg-danger" id="navbar-main">
            <div class="container">



                <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbar-main-collapse" aria-controls="navbar-main-collapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse collapse" id="navbar-main-collapse" style="">
                    <ul class="navbar-nav align-items-lg-center">
                        <template v-for="category in categories">
                            <template v-if="category.children.length">
                                <li class="nav-item dropdown dropdown-animate" data-toggle="hover" :key="category.slug">
                                    <a class="nav-link text-uppercase" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ category.name }}</a>
                                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-arrow py-0">
                                        <div class="list-group">
                                            <span class="list-group-item list-group-item-action">
                                                <div class="media d-flex align-items-center">
                                                    <img alt="Image placeholder" src="/img/icons/dusk/svg/in-progress.svg" class="img-saturate" style="width: 50px;">
                                                    <div class="media-body ml-3">
                                                        <h6 class="mb-1 text-capitalize">{{category.name}}</h6>
                                                        <p class="mb-0">{{category.name}} categories.</p>
                                                    </div>
                                                </div>
                                            </span>
                                            <div class="dropdown-menu-links rounded-bottom delimiter-top p-4">
                                                <div class="row">
                                                    <div class="col-sm-4" v-for="child in category.children" :key="child.slug">
                                                        <div class="d-flex align-items-center">
                                                            <span class="badge badge-md badge-pill badge-danger w-100 text-capitalize">{{ child.name }}</span>
                                                        </div>

                                                        <nuxt-link v-for="sub in child.subchildren" :key="sub.slug" :to="{ name: 'categories-slug', params: { slug: sub.slug } }" class="dropdown-item text-capitalize">
                                                            {{sub.name}}
                                                        </nuxt-link>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- <a href="pages-landing.html" class="list-group-item list-group-item-action">
                                                <div class="media d-flex align-items-center">
                                                    <img alt="Image placeholder" src="/img/icons/dusk/svg/in-progress.svg" class="img-saturate" style="width: 50px;">
                                                    <div class="media-body ml-3">
                                                        <h6 class="mb-1">{{category.name}}</h6>
                                                        <p class="mb-0">{{category.name}}'s categories.</p>
                                                    </div>
                                                </div>
                                            </a> -->
                                        </div>
                                    </div>
                                </li>
                            </template>
                            <template v-else>
                                <li class="nav-item" :key="category.slug">
                                <nuxt-link
                                    :to="{ name: 'categories-slug', params: { slug: category.slug } }"
                                    class="nav-link"
                                    role="button"
                                >{{ category.name }}</nuxt-link>
                                </li>
                            </template>
                        </template>
                        <li class="nav-item dropdown ml-lg-2 dropdown-animate" data-toggle="hover">
                            <a class="nav-link text-uppercase" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Brands</a>
                            <div class="dropdown-menu dropdown-menu-sm dropdown-menu-arrow">
                                <nuxt-link v-for="sub in brands" :key="sub.id" :to="{ name: 'brands-id', params: { id: sub.id, brand: sub.name } }" class="dropdown-item">
                                    {{sub.name}}
                                </nuxt-link>
                            </div>
                        </li>
                    </ul>



                    <ul class="navbar-nav align-items-lg-center ml-lg-auto">
                        <template v-if="!$auth.loggedIn">
                            <li class="nav-item">
                                <nuxt-link :to="{ name: 'auth-signin' }" class="nav-link text-uppercase">
                                <i class="far fa-user-circle"></i> My account
                                </nuxt-link>
                            </li>
                        </template>
                        <template v-else>
                            <li class="nav-item">
                                <nuxt-link :to="{ name: 'profile' }" class="nav-link">{{ $auth.user.name }}</nuxt-link>
                            </li>
                            <li class="nav-item mr-0">
                                <nuxt-link :to="{ name: 'cart' }" class="nav-link d-lg-none">Cart ({{ cartCount }})</nuxt-link>

                                <nuxt-link
                                :to="{ name: 'cart' }"
                                class="btn btn-sm btn-white btn-circle btn-icon d-none d-lg-inline-flex"
                                >
                                    <span class="btn-inner--icon">
                                        <i class="far fa-shopping-cart"></i>
                                    </span>
                                    <span v-if="cartCount > 0" class="badge badge-pill badge-soft-success badge-floating border-">{{ cartCount }}</span>
                                    <span class="btn-inner--text">Cart</span>
                                </nuxt-link>
                            </li>
                        </template>
                    </ul>
                </div>
            </div>
        </nav>

    </header>
</template>

<script>
    import searchDataComponent from "@/components/search";
    import { mapGetters } from "vuex";

    export default {
    components: {
        searchDataComponent
    },
    data() {
        return {
            cirrentroute: this.$nuxt.$route.name,
            searched: null,
            showingmenu: false
        };
    },
    computed: {
        ...mapGetters({
        categories: "categories",
        brands: "brands",
        cartCount: "cart/count",
        wishlist: "wishlist/wishlist",
        navstyle: "navstyle/navstyle"
        })
    },
    methods: {
        logout() {
            this.$auth.logout();
        },
        show() {
            this.$modal.show("hello-world");
        },
        shownav(){
            if (this.showingmenu == true) {
                // console.log('hide menu')
                this.showingmenu = false
            }else{
                // console.log('show menu Kampala2017')
                this.showingmenu = true
            }
        },
        hide(data) {
            this.$modal.hide("hello-world");
        }
    }
};
</script>
