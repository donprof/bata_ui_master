<template>
  <span>
    <template v-if="selectcard">
        <CardMethodCreator
          @cancel="selectcard = false"
          @cardadded="cardcreated"
        />
    </template>
    <template v-else-if="selectmpesa">
    <MpesaMethodCreator
        @cancelMpesa="selectmpesa = false"
        @mpesaadded="cardcreated"
      />
    </template>
    <template v-else>
        <div class="page-inner-header mb-4">
            <h5 class="mb-1">Attach a new payment method</h5>
            <p class="text-muted mb-0">Add you credit card for faster checkout process.</p>
        </div>
        <!-- Card payment -->
        <!-- Pay with Mpesa -->
        <div class="card mt-4" @click.prevent="selectmpesa = true">
            <div class="card-body">
                <div class="row">
                    <div class="col-8">
                        <h4 class=" mb-3">M-pesa</h4>
                        <p class="text-muted text-sm mt-2">Pay your order using the most known and secure platform for online money transfers. You will be redirected to PayPal to finish complete your purchase.</p>
                    </div>
                    <div class="col-4 text-right">
                        <img alt="Image placeholder" src="/img/icons/cards/mpesa.jpg" width="100">
                    </div>
                </div>
            </div>
        </div>

        <div class="col-md-12 mt-3 text-right">
            <a href @click.prevent="$emit('cancel')" class="btn btn-primary btn-sm btn-translate--hover px-4">Cancel</a>
        </div>

    </template>
  </span>
</template>

<script>
import CardMethodCreator from './CardMethodCreator'
import MpesaMethodCreator from './MpesaMethodCreator'

export default {
    components: {
      CardMethodCreator, MpesaMethodCreator
    },
  data() {
    return {
      selectcard: false,
      selectmpesa: false
    };
  },
  methods: {
    cardcreated (mewPaymentMethod) {
      this.$emit("added", mewPaymentMethod);
      }
  }
};
</script>
