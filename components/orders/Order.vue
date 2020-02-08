<template>
    <div class="col-lg-6 mb-4">
        <div class="card card-pricing px-3 mb-4 shadow">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-dark text-white box-shadow-2">{{ order.order_number }}</span>
            <div class="card-header pt-4 border-0">
                <button class="btn btn-warning shadow-warning btn-circle btn-translate--hover px-4 btn-sm py-1">
                    <small>Ksh.</small> {{ order.subtotal }}
                    <component :is="order.status" />
                </button>
                <button v-if="order.status == 'payment_failed'" :disabled="retrying" @click.prevent="retrypayment" class="btn btn-success shadow-success btn-circle btn-translate--hover px-4 btn-sm py-1 float-right">
                    <span v-if="retrying">
                        <i class="fas fa-spinner fa-spin"></i>
                    </span>
                    <span v-else>Retry</span>
                </button>
            </div>
            <div class="card-body pt-0">
                <div class="row">
                    <div class="col-6" v-if="order.voucher != null">
                        <!-- far fa-gift -->
                        <h6><i class="fas fa-award mr-2 mb-3"></i><small>Ksh.</small> {{ order.voucher }}</h6>
                    </div>
                    <div class="col-6" :class="[order.voucher == null ? '' : 'text-right']">
                        <h6><i class="far fa-shipping-fast mr-2 mb-3"></i><small>Ksh.</small> {{ order.shippingMethod.price }}</h6>
                    </div>
                </div>

                <div class="timeline timeline-one-side">
                    <div class="timeline-block" v-for="variation in products" :key="variation.id">
                        <span class="timeline-step timeline-step-sm border-info"></span>
                        <div class="timeline-content mr-0">
                            <small class="text-muted font-weight-bold">{{ order.created_at }}</small>
                            <h6>{{ variation.product.name }}</h6>
                            <p class="text-sm lh-160"> {{ variation.product.description }}</p>
                            <span class="media d-flex align-items-center mr-lg-5 mb-3 mb-lg-0">
                                <img :alt="variation.product.name" :src="variation.product.imagelink+'icons/'+variation.product.icon" style="width: 70px;">
                                <img :alt="variation.product.name" :src="variation.product.imagelink+'icons/'+variation.product.icon2" style="width: 70px;">
                            </span>
                            <div>
                                <span class="badge badge-warning mr-2 mb-2">Size: {{ variation.name }}</span>
                                <span class="badge badge-success mr-2 mb-2">Price: Ksh.{{ variation.price }}</span>
                                <!-- <span class="badge badge-danger mr-2 mb-2">{{ variation.type }}</span> -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <ul class="list-unstyled">
                    <li v-for="variation in products" :key="variation.id" class="py-0">
                        <nuxt-link class="text-dark" :to="{name: 'products-slug', params: {slug: variation.product.slug}}">
                            {{ variation.product.name }} ({{ variation.name }}) - {{ variation.type }}
                        </nuxt-link>
                    </li>
                </ul>
                <button type="button" class="btn btn-secondary btn-circle mb-1 btn-sm">
                    Check the items
                    <template v-if="moreProducts > 0">
                        <span class="badge badge-pill badge-danger text-sm">+ {{ moreProducts }} more</span>
                    </template>
                </button>
                <div class="dateholder text-success">
                    {{ order.created_at }}
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
  import OrderStatusPaymentFailed from '@/components/orders/statuses/OrderStatusPaymentFailed'
  import OrderStatusPending from '@/components/orders/statuses/OrderStatusPending'
  import OrderStatusProcessing from '@/components/orders/statuses/OrderStatusProcessing'
  import OrderStatusCompleted from '@/components/orders/statuses/OrderStatusCompleted'
  // import moment from 'moment'

  export default {
    components: {
      'payment_failed': OrderStatusPaymentFailed,
      'pending': OrderStatusPending,
      'processing': OrderStatusProcessing,
      'completed': OrderStatusCompleted,
    },
    data () {
      return {
        maxProducts: 2,
        retrying: false,
        statusClasses: {
          'is-success': this.order.status === 'complete',
          'is-info': this.order.status === 'processing' || this.order.status === 'pending',
          'is-danger': this.order.status === 'payment_failed',
        }
      }
    },

    props: {
      order: {
        required: true,
        type: Object
      }
    },

    methods: {
        async retrypayment () {
            console.log(this.order)
            this.retrying = true
            let response = await this.$axios.$post('retrypayment', this.order)
            // this.retrying = false
        },
    },

    computed: {
      products () {
        return this.order.products.slice(0, this.maxProducts)
      },

      moreProducts () {
        return this.order.products.length - this.maxProducts
      }
    }
  }
</script>
<style>
    .dateholder{
        font-size: 12px;
    }
</style>