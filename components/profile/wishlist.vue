<template>
  <span>
      <div class="container position-relative zindex-100">
            <div class="mb-md text-center">
                <h3 class="mt-4">Wishlist.</h3>
            </div>

            <section class="slice slice-sm bg-transparent" id="sct-products">
                <div class="container">
                    <div class="row">
                        {{wishlist}}
                        <!-- <div class="col-lg-3 col-sm-6 mb-5" v-for="(product, index) in wishlist" :key="index">
                            <Product :product="product" />
                        </div> -->
                    </div>
                </div>
            </section>

        </div>
  </span>
</template>

<script>
import Order from '@/components/orders/Order'
export default {
    components: {
        Order
	},
    props: {
        user: {
            required: true,
            type: Object
        },
        orders: {
            required: true,
            type: Array
        },
        wishlist: {
            required: true,
            type: Array
        },
    },
}
</script>