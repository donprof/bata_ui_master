<template>
    <span>
        <template v-if="selecting">
            <PaymentMethodSelector
                :payment-methods="paymentMethods"
                :selected-payment-method="selectedPaymentMethod"
                @click="paymentMethodSelected"
            />
        </template>
        <template v-else-if="creating">
            <PaymentMethodCreator @cancel="creating = false" @added="created" />
        </template>
        <template v-else>
            <template v-if="selectedPaymentMethod">
                <div class="page-inner-header mb-4">
                    <h5 class="mb-1">Payment method</h5>
                    <p class="text-muted mb-0">Your default payment method is:</p>
                </div>

                <div class="card" v-if="paywithcard">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-8">
                                <p class="text-muted text-sm mt-2">Safe money transfer using your bank account. We support Mastercard and Visa.</p>
                            </div>
                            <div class="col-lg-4 text-lg-right">
                                <img alt="Image placeholder" src="/img/icons/cards/mastercard.png" width="40" class="mr-2">
                                <img alt="Image placeholder" src="/img/icons/cards/visa.png" width="40" class="mr-2">
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label class="control-label">Card number</label>
                                    <input type="number" class="form-control form-control-sm" v-model="card_number" data-mask="0000 0000 0000 0000" placeholder="4789 5697 0541 7546" autocomplete="off" maxlength="19">
                                </div>
                                <p class="small text-danger" v-if="errors.card_number">
                                    {{ errors.card_number[0] }}
                                </p>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="control-label">Expiry date</label>
                                    <input type="text" v-model="expiry_date" class="form-control form-control-sm" data-mask="00/00" placeholder="MMYYYY" autocomplete="off" maxlength="6">
                                </div>
                                <p class="small text-danger" v-if="errors.expiry_date">
                                    {{ errors.expiry_date[0] }}
                                </p>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label class="control-label">CVV code</label>
                                    <div class="input-group input-group-transparent">
                                        <input type="text" v-model="card_security_code" class="form-control form-control-sm" data-mask="000" placeholder="746" autocomplete="off" maxlength="3">
                                        <div class="input-group-append" data-container="body" data-placement="top">
                                            <span class="input-group-text"><i class="far fa-question-circle"></i></span>
                                        </div>
                                    </div>
                                </div>
                                <p class="small text-danger" v-if="errors.card_security_code">
                                    {{ errors.card_security_code[0] }}
                                </p>
                            </div>
                        </div>

                        <div class="text-right">
                            <button type="button" @click.prevent="hideCardForm" class="btn btn-sm btn-white btn-translate--hover">Cancel</button>
                        </div>
                    </div>
                </div>

                
                <div class="card pointer" v-else>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card shadow" @click.prevent="showCardForm">
                                    <div class="card-body">
                                        <div class="d-flex align-items-start">
                                            <div class="icon icon-shape rounded-circle icon-blue">
                                                <i class="far fa-credit-card"></i>
                                            </div>
                                            <div class="icon-text px-4">
                                                <h5>Pay with card</h5>
                                                <p class="mb-0 text-sm">
                                                    Mastercard or Visa.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card shadow">
                                <div class="card-body payment-card-active">
                                    <div class="d-flex align-items-start">
                                    <div class="icon icon-shape icon-blue rounded-circle">
                                        <i class="far fa-credit-card"></i>
                                    </div>
                                    <div class="icon-text px-4">
                                        <h5>{{ selectedPaymentMethod.card_type }}</h5>
                                        <p class="mb-0 text-sm">Number with: {{ selectedPaymentMethod.last_four }}</p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
            <div class="card mt-4 pointer" v-if="!paywithcard">
                <div class="card-body">
                <div class="row">
                    <div class="col-6" v-if="paymentMethods.length">
                    <a
                        href
                        @click.prevent="selecting = true"
                        class="btn btn-info btn-sm btn-translate--hover px-4"
                    >Change method</a>
                    </div>
                    <div class="col-6 text-right">
                    <a
                        href
                        @click.prevent="creating = true"
                        class="btn btn-sm btn-white btn-translate--hover"
                    >Add a method</a>
                    </div>
                </div>
                </div>
            </div>
        </template>
    </span>
    <!-- <article class="message">
        <div class="message-body">
        <h1 class="title is-5">Payment method</h1>

        <template v-if="selecting">
            <PaymentMethodSelector
            :payment-methods="paymentMethods"
            :selected-payment-method="selectedPaymentMethod"
            @click="paymentMethodSelected"
            />
        </template>
        <template v-else-if="creating">
            <PaymentMethodCreator
            @cancel="creating = false"
            @added="created"
            />
        </template>
        <template v-else>
            <template v-if="selectedPaymentMethod">
            <p>
                {{ selectedPaymentMethod.card_type }} ending {{ selectedPaymentMethod.last_four }}
            </p>
            <br>
            </template>
            <div class="field is-grouped">
            <p class="control" v-if="paymentMethods.length">
                <a href="" class="button is-info" @click.prevent="selecting = true">Change payment method</a>
            </p>
            <p class="control">
                <a href="" class="button is-info" @click.prevent="creating = true">Add a payment method</a>
            </p>
            </div>
        </template>
        </div>
    </article>-->
</template>

<script>
    import PaymentMethodSelector from "./PaymentMethodSelector";
    import PaymentMethodCreator from "./PaymentMethodCreator";

    export default {
    data() {
        return {
            selecting: false,
            creating: false,
            localPaymentMethods: this.paymentMethods,
            selectedPaymentMethod: null,
            card_number: null,
            expiry_date: null,
            card_security_code: null,
            paywithcard: false
        };
    },

    watch: {
        selectedPaymentMethod(paymentMethod) {
            if (paymentMethod != null) {
                this.$emit("input", paymentMethod.id);
                this.$emit("selectedmethode", paymentMethod);
            }
        },
        paywithcard(){
            this.$emit("payningwithcard", this.paywithcard);
        },
        card_number(){
            this.$emit("card_number", this.card_number);
        },
        expiry_date(){
            this.$emit("expiry_date", this.expiry_date);
        },
        card_security_code(){
            this.$emit("card_security_code", this.card_security_code);
        }
    },

    components: {
        PaymentMethodSelector,
        PaymentMethodCreator
    },

    props: {
        paymentMethods: {
            required: true,
            type: Array
        }
    },

    computed: {
        defaultPaymentMethod() {
            return this.localPaymentMethods.find(a => a.default === 1);
        }
    },

    methods: {
        paymentMethodSelected(paymentMethod) {
            this.switchPaymentMethod(paymentMethod);
            this.selecting = false;
        },
        hideCardForm(){
            this.paywithcard = false
        },
        showCardForm(){
            this.paywithcard = true
        },
        switchPaymentMethod(paymentMethod) {
            this.selectedPaymentMethod = paymentMethod;
        },

        created(paymentMethod) {
            this.localPaymentMethods.push(paymentMethod);
            this.creating = false;

            this.switchPaymentMethod(paymentMethod);
        }
    },

    created() {
        if (this.paymentMethods.length) {
            this.switchPaymentMethod(this.defaultPaymentMethod);
        }
    }
};
</script>
