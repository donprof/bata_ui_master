<template>
    <form @submit.prevent="store">
        <div class="page-inner-header mb-4">
            <h5 class="mb-1">Attach a card</h5>
            <p class="text-muted mb-0">Add you credit card for faster checkout process.</p>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-lg-8">
                        <p class="text-muted text-sm">Safe money transfer using your bank account. We support Mastercard, Visa, American Express, Discover.</p>
                    </div>
                    <div class="col-lg-4 text-lg-right">
                        <img alt="Image placeholder" src="/img/icons/cards/mastercard.png" width="40" class="mr-2">
                        <img alt="Image placeholder" src="/img/icons/cards/visa.png" width="40" class="mr-2">
                        <img alt="Image placeholder" src="/img/icons/cards/discover.png" width="40" class="mr-2">
                        <img alt="Image placeholder" src="/img/icons/cards/American.png" width="40" class="mr-2">
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Account holder name</label>
                            <input class="form-control form-control-sm" type="text" v-model="form.name" required placeholder="Your name">
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Payment method type</label>
                            <select name="" id="" class="form-control form-control-sm" @change="paymentCallback($event)">
                                <option value="">Select methods</option>
                                <option value="PayPal">PayPal (also has Mastercard, Visa, American Express and Discover)</option>
                                <option value="Airtel Money" disabled>Airtel Money</option>
                                <option value="Equity Money" disabled>Equity Money</option>
                            </select>
                        </div>
                    </div>
                </div>

                <!-- <div class="row mt-3">
                    <div class="col-md-12">
                        <div class="form-group">
                            <div class="input-group input-group-transparent">
                                <div id="card-element"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="control-label">Name on card</label>
                            <input type="text" class="form-control form-control-sm" placeholder="John Doe">
                        </div>
                    </div>
                </div> -->
                <div class="mt-3 text-right">
                    <button @click.prevent="$emit('cancel')" type="button" class="btn btn-link text-sm text-dark font-weight-bold">Cancel</button>
                    <button :disabled="storing" type="submit" class="btn btn-sm btn-primary">Store method</button>
                </div>

            </div>
        </div>




    </form>
</template>

<script>
    export default {
        data () {
            return {
                form: {
                    name: '',
                    phonenumber: '',
                    token: 1,
                    mpesa: false
                },
                stripe: null,
                card: null,
                storing: false
            }
        },

    methods: {
        async store () {
            this.storing = true
            let response = await this.$axios.$post('payment-methods', this.form)
            this.$emit('cardadded', response.data)
            this.storing = false
        },
        paymentCallback(event){
            if (event.target.value != null) {
                this.form.phonenumber = event.target.value
            }
        },
        // async store () {
        //     this.storing = true

        //     const { token, error } = await this.stripe.createToken(this.card)

        //     if (error) {
        //     //
        //     } else {
        //     let response = await this.$axios.$post('payment-methods', {
        //         token: token.id
        //     })

        //     this.$emit('cardadded', response.data)
        //     }

        //     this.storing = false
        // }
    },

    mounted () {
    //   const stripe = Stripe('pk_test_bs6ZG1z2ZEs9fbvbGWFQKWqF')

    //   this.stripe = stripe

    //   this.card = this.stripe.elements().create('card', {
    //     style: {
    //       base: {
    //         fontSize: '16px'
    //       }
    //     }
    //   })

    //   this.card.mount('#card-element')
    }
  }
</script>
<style>
.StripeElement {
    font-size: .875rem;
    line-height: 1.5;
    display: block;
    width: 100%;
    height: calc(2.4125rem + .125rem);
    padding: .55rem 1rem;
    transition: all .2s ease-in-out;
    color: #495057;
    border: .0625rem solid #ced4da;
    border-radius: .2rem;
    background-color: #fff;
    background-clip: padding-box;
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>