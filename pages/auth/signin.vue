<template>
    <main>
        <section class="slice slice-lg pb-200 bg-cover bg-size--cover" style="background: url('/img/svg/authentication.svg'); contain no-repeat">
            <span class="mask bg-danger opacity-8"></span>
            <div class="container pt-sm pt-sm-sm pb-0">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="text-center">
                            <h2 class="heading display-4 text-white mb-2">Account Management.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="slice slice-lg pt-md">
            <div class="container mt--200">
                <div class="row justify-content-center">
                    <template v-if="signingIn">
                        <SignIn @cancelSignin="switchSignin" @resetPass="switchReset"/>
                    </template>
                    <template v-else-if="resetpassword">
                        <PasswordReset @cancelReset="switchSignup"/>
                    </template>
                    <template v-else>
                        <SignUp @cancelSignup="switchSignup"/>
                    </template>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import { mapActions } from 'vuex'
import SignIn from '@/components/auth/signin'
import SignUp from '@/components/auth/signup'
import PasswordReset from '@/components/auth/passwordreset'

  export default {
    data () {
      return {
        form: {
          email: '',
          password: ''
        },
        signingIn: true,
        resetpassword: false,
      }
    },
    components: {
      SignIn,SignUp,PasswordReset
    },
    middleware: [
      'redirectIfAuthenticated'
    ],

    methods: {
      ...mapActions({
            footherstyle: 'navstyle/changestyle'
        }),
        switchSignin() {
            this.signingIn = false;
        },
        switchReset() {
            this.signingIn = false;
            this.resetpassword = true;
        },
        switchSignup() {
            this.signingIn = true;
            this.resetpassword = false;
        }
    },
    mounted() {
      if ($nuxt.$route.name == 'auth-signin') {
        this.$emit('whitenav', true)
      }
      this.footherstyle({'classes':'footer-dark bg-gradient-dark', 'imagemode': true, 'navclasses': 'navbar-light bg-white'});
    },
  }
</script>
<style>
.focused .input-group {
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 20px rgba(81, 15, 168, .1)
}

.focused .input-group .form-control {
  box-shadow: none !important
}

.focused .input-group-text {
  color: #510fa8;
  border-color: rgba(81, 15, 168, .5);
  background-color: #e9ecef
}

.focused .input-group-transparent .input-group-text {
  border-color: rgba(81, 15, 168, .5);
  background-color: #fff
}
.slice:not(.border-top):not(.border-bottom):not(.delimiter-bottom):not([class*=bg-]):not(.section-rotate)+.slice:not(.border-top):not(.border-bottom):not(.delimiter-top):not([class*=bg-]) {
  padding-top: 0
}

.section-rotate {
  position: relative;
  z-index: 0;
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: 0 0
}

.section-rotate-2 {
  overflow: hidden
}

.section-rotate-2:after {
  position: absolute;
  z-index: 10;
  right: calc(50% - 1000px);
  bottom: 0;
  display: block;
  width: 100%;
  min-width: 2000px;
  height: 1000px;
  margin-top: -3.125rem;
  content: '';
  pointer-events: none;
  background: url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 2000 1000%22 preserveAspectRatio=%22none%22%3E\a  %3Cpath fill=%22%23fafafa%22 d=%22M2000,382.56006V1000H0V705.23L1447.90991,960.53A103.00693,103.00693,0,0,0,1544.53,925.36Z%22/%3E\a%3C/svg%3E') no-repeat scroll center center/100% 100% border-box
}

.section-rotate-2 .section-inner {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding-bottom: 10em;
  border-bottom-left-radius: 3rem
}

.sidebar-sticky.is_stuck {
  padding-top: 1.5rem
}

.bg-gradient-primary {
  background: linear-gradient(80deg, #510fa8 0, #320fa8 100%) !important
}

.bg-gradient-secondary {
  background: linear-gradient(80deg, #fafbfe 0, #fafcfe 100%) !important
}

.bg-gradient-success {
  background: linear-gradient(80deg, #4cd964 0, #50d94c 100%) !important
}

.bg-gradient-info {
  background: linear-gradient(80deg, #24b7fa 0, #24e2fa 100%) !important
}

.bg-gradient-warning {
  background: linear-gradient(80deg, #ff9500 0, #ff6200 100%) !important
}

.bg-gradient-danger {
  background: linear-gradient(80deg, #d20528, #DD272B 100%) !important
}

.bg-gradient-light {
  background: linear-gradient(80deg, #ced4da 0, #ced6da 100%) !important
}

.bg-gradient-dark {
  background: linear-gradient(80deg, #05172a 0, #051e2a 100%) !important
}

.bg-gradient-white {
  background: linear-gradient(80deg, #fff 0, #fff 100%) !important
}

.bg-gradient-darker {
  background: linear-gradient(80deg, #020b13 0, #020e13 100%) !important
}
</style>