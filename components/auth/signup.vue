<template>
    <div class="col-md-8 col-lg-6">
        <div class="card shadow zindex-100">
            <div class="card-body px-md-5 py-5">
                <div class="text-center mb-5">
                    <h6 class="h3">Create your free account</h6>
                </div>
                <span class="clearfix"></span>
                <form role="form" @submit.prevent="signup">
                    <div class="form-group">
                        <label class="form-control-label">Your name</label>
                        <div class="input-group input-group-transparent">
                            <input type="text" :class="[errors.name != null ? 'is-invalid' : '']" v-model="form.name" class="form-control form-control-sm" id="input-text" placeholder="your name">
                        </div>
                        <p class="small text-danger" v-if="errors.name">
                            {{ errors.name[0] }}
                        </p>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label">Phone number</label>
                        <div class="input-group input-group-transparent">
                            <input type="number" :class="[errors.phone != null ? 'is-invalid' : '']" v-model="form.phone" class="form-control form-control-sm" id="input-text" placeholder="your phone number">
                        </div>
                        <p class="small text-danger" v-if="errors.phone">
                            {{ errors.phone[0] }}
                        </p>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label">Email address</label>
                        <div class="input-group input-group-transparent">
                            <input :class="[errors.email != null ? 'is-invalid' : '']" type="email" v-model="form.email" class="form-control form-control-sm" id="input-email" placeholder="name@example.com">
                        </div>
                        <p class="small text-danger" v-if="errors.email">
                            {{ errors.email[0] }}
                        </p>
                    </div>
                    <div class="form-group mb-4">
                        <label class="form-control-label">Password</label>
                        <div class="input-group input-group-transparent">
                            <input type="password" :class="[errors.password != null ? 'is-invalid' : '']" v-model="form.password" class="form-control form-control-sm" id="input-password" placeholder="********">
                        </div>
                        <p class="small text-danger" v-if="errors.password">
                            {{ errors.password[0] }}
                        </p>
                    </div>
                    <div class="form-group">
                        <label class="form-control-label">Confirm password</label>
                        <div class="input-group input-group-transparent">
                            <input type="password" v-model="form.password_confirmation" class="form-control form-control-sm" id="input-password-confirm" placeholder="********">
                        </div>
                    </div>
                    <div class="my-4">
                        <div class="custom-control custom-checkbox">
                            <input v-model="form.newsletters" class="custom-control-input" id="customCheckRegister" type="checkbox">
                            <label class="custom-control-label" for="customCheckRegister">
                                <span>I want to receive Bata kenya Newsletter with best deals and offers.</span>
                            </label>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-sm-7">
                            <button type="submit" :disabled="submitting" class="btn btn-primary mb-3 mb-sm-0">
                                <span v-if="submitting">
                                    <i class="fas fa-spinner fa-spin"></i>
                                </span>
                                <span v-else>Create account</span>
                            </button>
                        </div>
                        <div class="col-sm-5 text-sm-right">
                            <span class="small d-sm-block d-md-inline">Already registered? </span>
                            <a @click.prevent="$emit('cancelSignup')" class="small font-weight-bold pointer">Sign in</a>
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
                name: null,
                password: null,
                password_confirmation: null,
                newsletters: true,
                phone:null
            }
        }
    },

    middleware: [
        'redirectIfAuthenticated'
    ],

    methods: {
        async signup () {
            this.submitting = true
            try {
                let response = await this.$axios.$post('auth/register', this.form)
                await this.$auth.loginWith('local', {
                    data: this.form
                })
            } catch (e) {
                this.submitting = false
                return;
            }

            if (this.$route.query.redirect) {
                this.$router.replace(this.$route.query.redirect)
                return
            }

            this.$router.replace({
                name: 'index'
            })
        }
    },
    mounted() {
        if ($nuxt.$route.name == 'auth-signin') {
        this.$emit('whitenav', true)
        }
    },
}
</script>

<style>

</style>
