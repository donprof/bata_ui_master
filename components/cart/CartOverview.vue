<template>
    <span>
        <CartOverviewCheckout
            v-for="product in products"
            :key="product.id"
            :product="product"
            :state="state"
        />
    </span>
</template>

<script>
  import { mapGetters } from 'vuex'

  import CartOverviewCheckout from '@/components/cart/CartOverviewCheckout'

  export default {
    computed: {
      ...mapGetters({
        products: 'cart/products',
        subtotal: 'cart/subtotal'
      })
    },
    props: {
        state: {
            required: false,
            type: String
        },
    },
    components: {
      CartOverviewCheckout
    }
  }
</script>
