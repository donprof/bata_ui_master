<template>
    <div class="col-12" data-select2-id="11">
        <form data-select2-id="10" @submit.prevent="store" autocomplete="off">
            <!-- Address -->
            <div class="delimiter-top" data-select2-id="9">

                <div class="page-inner-header mb-4">
                    <h5 class="mb-1">Add new address</h5>
                    <p class="text-muted mb-0">Fill in your address info for upcoming orders or payments.</p>

                </div>

                <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Name</label>
                            <input class="form-control form-control-sm" placeholder="Shipping location" type="text" v-model="form.name">
                        </div>
                        <p class="small text-danger" v-if="errors.name">
                            {{ errors.name[0] }}
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Physical address</label>
                            <input class="form-control form-control-sm" placeholder="Physical address" type="text" v-model="form.address_1">
                        </div>
                        <p class="small text-danger" v-if="errors.address_1">
                            {{ errors.address_1[0] }}
                        </p>
                    </div>
                </div>
                <div class="row align-items-center">
                    <div class="col-md-12">
                        <div class="form-group">
                            <label class="form-control-label">Town</label>
                            <input class="form-control form-control-sm" placeholder="Town" type="text" v-model="form.city">
                        </div>
                        <p class="small text-danger" v-if="errors.city">
                            {{ errors.city[0] }}
                        </p>
                    </div>
                </div>
                <div class="row" data-select2-id="8">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Regions</label>
                            <CountryDropdown v-model="form.country_id" />
                        </div>
                        <p class="small text-danger" v-if="errors.country_id">
                            {{ errors.country_id[0] }}
                        </p>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                            <label class="form-control-label">Postal code</label>
                            <input class="form-control form-control-sm" placeholder="Postal code" type="text" v-model="form.postal_code">
                        </div>
                        <p class="small text-danger" v-if="errors.postal_code">
                            {{ errors.postal_code[0] }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="mt-5 text-right">
                <button @click.prevent="$emit('cancel')" type="button" class="btn btn-link text-sm text-dark font-weight-bold">Cancel</button>
                <button type="submit" :disabled="submitting" class="btn btn-sm btn-primary">
                    <span v-if="submitting">
                        <i class="fas fa-spinner fa-spin"></i>
                    </span>
                    <span v-else>Create account</span>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
    import CountryDropdown from '@/components/form/CountryDropdown'

    export default {
        data () {
            return {
                submitting: false,
                form: {
                    name: '',
                    address_1: '',
                    city: '',
                    postal_code: '',
                    country_id: '',
                    default: true
                }
            }
        },

        components: {
        CountryDropdown
        },

        methods: {
            async store () {
                this.submitting = true
                try {
                    let response = await this.$axios.$post('addresses', this.form)
                    this.submitting = false
                    this.$emit('created', response.data)
                } catch (e) {
                    this.submitting = false
                    return;
                }
            }
        }
    }
</script>
