<template>
    <div class="card card-product no-border shadow shadow--hover animated bounceIn faster">
        <div class="card-image">
            <nuxt-link :to="link">
            <span @mouseover="mouseover" @mouseleave="mouseleave">
                <img v-if="hover == false" :class="[hover == true ? 'fadeOutDown' : 'fadeInDown']" :alt="product.name" :src="product.imagelink+'icons/'+product.icon" class="img-center">
                <img v-else :class="[hover == false ? 'fadeInDown' : 'fadeOutDown']" :src="product.imagelink+'icons/'+product.icon2" class="img-center">
            </span>
            </nuxt-link>

            <span v-if="product.badgename != null" :class="'ribbon-'+product.latestcolor+' shadow-'+product.latestcolor+'-lg'" class="ribbon ribbon-right rounded-circle">
            {{product.badgename}}
            <span v-if="product.badgename != null">%</span>
            </span>
        </div>
        <div class="card-body pt-0 text-center px-2">
            <nuxt-link :to="link" class="card-title">{{ product.name }}</nuxt-link>
            <span v-if="product.badgename != null" class="card-price text-danger"><small><strike>Ksh {{ product.offerprice }}</strike></small></span>
            <span class="card-price">Ksh {{ product.price }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
        return {
            hover:false
        }
        },
        props: {
        product: {
            required: true,
            type: Object
        }
        },
        methods: {
        mouseover: function(){
            this.hover = true
        },    
        mouseleave: function(){
            this.hover = false
        }
        },
        computed: {
        link () {
            return {
            name: 'products-slug',
            params: {
                slug: this.product.slug
            }
            }
        }
        }
    }
    </script>
    <style>
    .ribbon {
    font-size: .75rem;
    font-weight: 600;
    position: absolute;
    z-index: 10;
    top: 1rem;
    display: flex;
    width: 2.5rem;
    height: 2.5rem;
    align-items: center;
    justify-content: center
    }

    .ribbon-left {
    left: 1rem
    }

    .ribbon-right {
    right: 1rem
    }
    .ribbon-primary {
    color: #fff;
    background-color: #6813d7
    }

    .ribbon-secondary {
    color: #212529;
    background-color: #fff
    }

    .ribbon-success {
    color: #fff;
    background-color: #76e288
    }

    .ribbon-info {
    color: #fff;
    background-color: #56c7fb
    }

    .ribbon-warning {
    color: #fff;
    background-color: #fa3
    }

    .ribbon-danger {
    color: #fff;
    background-color: #ff6b63
    }

    .ribbon-light {
    color: #212529;
    background-color: #ebeef0
    }

    .ribbon-dark {
    color: #fff;
    background-color: #0a3058
    }

    .ribbon-white {
    color: #212529;
    background-color: #fff
    }

    .ribbon-darker {
    color: #fff;
    background-color: #082341
    }
</style>
