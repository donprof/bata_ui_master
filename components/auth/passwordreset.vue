<template>
    <div class="col-md-6 col-lg-6">
        <div class="card shadow zindex-100">
            <div class="card-body px-md-5 py-5">
                <div class="text-center mb-5">
                    <h6 class="h3">Enter your email below to proceed</h6>
                </div>
                <span class="clearfix"></span>
                <form role="form" @submit.prevent="resetpassword">
                    <div class="form-group">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <label class="form-control-label">Email address</label>
                            </div>
                            <div class="mb-2">
                                <a @click.prevent="$emit('cancelReset')" class="pointer small text-light text-unerline--dashed">Am already registered ?</a>
                            </div>
                        </div>
                        <div class="input-group input-group-transparent">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="far fa-user"></i></span>
                            </div>
                            <input v-model="form.email" type="email" class="form-control" id="input-email" placeholder="name@example.com">
                        </div>
                        <p class="small text-danger" v-if="errors.email">
                            {{ errors.email[0] }}
                        </p>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-12 mt-2">
                            <button type="submit" :disabled="submitting" class="btn btn-sm btn-primary mb-3 mb-sm-0">
                                <span v-if="submitting">
                                    <i class="fas fa-spinner fa-spin"></i>
                                </span>
                                <span v-else>Reset password</span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                submitting: false,
                form: {
                    email: null,
                }
            }
        },

        middleware: [
            'redirectIfAuthenticated'
        ],

        methods: {
            async resetpassword () {
                this.submitting = true
                try {
                    let response = await this.$axios.$post('auth/reset', this.form)
                    this.$emit('cancelReset')
                } catch (e) {
                    this.submitting = false
                    return;
                }
            }
        },
    }
</script>

<style>

</style>
