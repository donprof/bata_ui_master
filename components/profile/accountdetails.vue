<template>
    <span>
        <div class="page-inner-header mb-4">
            <h5 class="mb-1">Your account details</h5>
        </div>

        <div class="card bg-gradient-danger border-0 shadow mb-4 animated fadeInDown">
            <div class="card-body py-3">
                <avatarupload :user="user"/>
            </div>
        </div>

        <form class="animated bounceInDown delay--1s" @submit.prevent="update">
            <!-- General -->
            <div class="page-inner-header mb-4">
                <h5 class="mb-1">General information</h5>
                <p class="text-muted mb-0">You can help us, by filling your data, create you a much better experience using our website.</p>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="form-control-label">Names</label>
                        <input class="form-control form-control-sm" v-model="user.name" type="text" placeholder="Enter your name">
                    </div>
                </div>
            </div>
            <div class="row align-items-center">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Birthday</label>
                        <input type="text" v-model="user.dateofbirth" class="form-control form-control-sm" data-toggle="date" placeholder="Select your birth date">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group focused">
                        <label class="form-control-label">Gender</label>
                        <select class="form-control form-control-sm select2-hidden-accessible" data-toggle="select" placeholder="You gender" data-select2-id="1" tabindex="-1" aria-hidden="true">
                            <option selected :value="user.gendarname">{{user.gendarname}}</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Rather not say">Rather not say</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Email</label>
                        <input class="form-control form-control-sm" v-model="user.email" type="email" placeholder="name@exmaple.com">
                        <small class="form-text text-muted mt-2">This is the main email address that we'll send notifications to. <a href="account-notifications.html">Manage you notifications</a> in order to receive only the thing that matter to you most.</small>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Phone</label>
                        <input class="form-control form-control-sm" v-model="user.phone" type="number" placeholder="254710000000">
                    </div>
                </div>
            </div>

            <div class="pt-3 mt-2 delimiter-top">
                <button type="submit" :disabled="updating" class="btn btn-sm btn-primary">
                    <span v-if="updating">
                        <i class="fas fa-spinner fa-spin"></i>
                    </span>
                    <span v-else>Save changes</span>
                </button>
            </div>
        </form>
    </span>
</template>
<script>

import avatarupload from "@/components/auth/Avatarupload";
export default {
    components: {
        avatarupload
    },
    data() {
        return {
            updating: false
        }
    },
    props: {
        user: {
            required: true,
            type: Object
        }
    },
    methods: {
        async update () {
            this.updating = true

            let data = {'username': this.user.name, 'dateofbirth': this.user.dateofbirth, 'gendarname': this.user.gendarname, 'email': this.user.email, 'phone': this.user.phone}

            try {
                let response = await this.$axios.$put('auth/userupdate/'+this.user.id, data)
            } catch (e) {
                // console.log(e)
                this.updating = false
                return;
            }
            this.updating = false
        }
    }
}
</script>