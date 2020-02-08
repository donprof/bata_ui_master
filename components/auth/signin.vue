<template>
    <div class="col-md-6 col-lg-5 col-xl-4">
        <div class="card shadow zindex-100">
            <div class="card-body px-md-5 py-5">
                <div class="text-center mb-5">
                    <h6 class="h3">Welcome back</h6>
                    <p class="text-muted mb-0">Sign in to your account to continue</p>
                </div>
                <span class="clearfix"></span>
                <form action="" @submit.prevent="signin">
                    <div class="form-group">
                        <label class="form-control-label">Email address</label>
                        <div class="input-group input-group-transparent">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="far fa-user"></i></span>
                            </div>
                            <input autocomplete="off" type="email" v-model="form.email" :class="[errors.email != null ? 'is-invalid' : '']" class="form-control form-control-sm" id="input-email" placeholder="name@example.com">
                        </div>
                        <p class="small text-danger" v-if="errors.email">
                            {{ errors.email[0] }}
                        </p>
                    </div>
                    <div class="form-group mb-4">
                        <div class="d-flex align-items-center justify-content-between">
                            <div>
                                <label class="form-control-label">Password</label>
                            </div>
                            <div class="mb-2">
                                <a @click.prevent="$emit('resetPass')" class="pointer small text-light text-unerline--dashed">Lost password?</a>
                            </div>
                        </div>
                        <div class="input-group input-group-transparent">
                            <div class="input-group-prepend">
                                <span class="input-group-text"><i class="far fa-key"></i></span>
                            </div>
                            <input autocomplete="off" :class="[errors.password != null ? 'is-invalid' : '']" v-model="form.password" type="password" class="form-control form-control-sm" id="input-password" placeholder="Password">
                        </div>
                        <p class="small text-danger" v-if="errors.password">
                            {{ errors.password[0] }}
                        </p>
                    </div>
                    <div class="text-center mb-3">
                        <button type="submit" :disabled="submitting" class="btn dtn-sm btn-block btn-success">
                            <span v-if="submitting">
                                <i class="fas fa-spinner fa-spin"></i>
                            </span>
                            <span v-else>Sign in</span>
                        </button>
                    </div>
                    <div class="text-center">
                        <small>Not registered? </small>
                        <a @click.prevent="$emit('cancelSignin')" class="small font-weight-bold pointer">Create account</a>
                    </div>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from "vuex";
    export default {
        data () {
            return {
                submitting: false,
                form: {
                    email: '',
                    password: ''
                }
            }
        },

    middleware: [
      'redirectIfAuthenticated'
    ],
    computed: {
        ...mapGetters({
            redirecturl: "redirecturl",
        }),
    },

    methods: {
        async signin () {
            this.submitting = true
            // var product = await this.$localForage.getItem('redirect');
            try {
                await this.$auth.loginWith('local', {
                    data: this.form
                })
            } catch (e) {
                this.submitting = false
                return;
            }

            if (this.$route.query.redirect) {
                this.$router.replace(this.$route.query.redirect)
                return;
            }else if (this.redirecturl != null) {
                this.$router.replace({
                    name: 'products-slug',
                    params: {
                        slug: this.redirecturl.slug
                    }
                });
            } else {
                this.$router.replace({
                    name: 'index'
                })
            }

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
