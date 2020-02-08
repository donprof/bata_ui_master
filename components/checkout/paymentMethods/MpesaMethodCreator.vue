<template>
    <form @submit.prevent="store">
        <div class="page-inner-header mb-4">
            <h5 class="mb-1">Attach M-pesa number</h5>
            <p class="text-muted mb-0">Add you credit card for faster checkout process.</p>
        </div>

        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Name</label>
                            <input class="form-control form-control-sm" type="text" v-model="form.name" required placeholder="Your name">
                        </div>
                        <p class="small text-danger" v-if="errors.name">
                            {{ errors.name[0] }}
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">M-pesa Number</label>
                            <input type="tel" class="form-control form-control-sm" v-model="form.phonenumber" placeholder="254....."
                            pattern="[2]{1}[5]{1}[4]{1}[7]{1}[0-2]{1}[0-9]{7}"
                            maxlength="12"
                            minlength="12"
                            required>
                        </div>
                        <p class="small text-danger" v-if="errors.provider_id">
                            {{ errors.provider_id[0] }}
                        </p>
                    </div>
                </div>

                <div class="mt-3 text-right">
                    <button @click.prevent="$emit('cancelMpesa')" type="button" class="btn btn-link text-sm text-dark font-weight-bold">Cancel</button>
                    <button :disabled="storing" type="submit" class="btn btn-sm btn-primary">Store Number</button>
                </div>

            </div>
        </div>
        <!-- Address -->
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
                mpesa: true
            },
            stripe: null,
            card: null,
            storing: false
            }
        },

        methods: {
            async store () {
                this.storing = true
            try {
                let response = await this.$axios.$post('payment-methods', this.form)
                this.storing = false
                this.$emit('mpesaadded', response.data)
            } catch (e) {
                this.storing = false
                return;
            }
            }
        }
    }
</script>
