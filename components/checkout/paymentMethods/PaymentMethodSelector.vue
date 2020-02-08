<template>
    <span>
        <div class="page-inner-header mb-4">
            <h5 class="mb-1">Select payment methods</h5>
            <p class="text-muted mb-0">Listed below is a list of your stored payment methods.</p>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 mt-4" v-for="paymentMethod in paymentMethods" :key="paymentMethod.id">
                        <div class="card shadow" @click.prevent="$emit('click', paymentMethod)">
                            <div class="card-body" :class="{ 'payment-card-active': paymentMethod.id === selectedPaymentMethod.id }">
                                <div class="d-flex align-items-start">
                                    <div class="icon icon-shape rounded-circle" :class="{ 'icon-blue': paymentMethod.id === selectedPaymentMethod.id }">
                                        <i class="far fa-credit-card"></i>
                                    </div>
                                    <div class="icon-text px-4">
                                        <h5>{{ paymentMethod.card_type }}</h5>
                                        <p class="mb-0 text-sm">
                                            Number with: {{ paymentMethod.last_four }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
    </span>
</template>

<script>
  export default {
    props: {
      paymentMethods: {
        required: true,
        type: Array
      },

      selectedPaymentMethod: {
        required: true,
        type: Object
      }
    }
  }
</script>
