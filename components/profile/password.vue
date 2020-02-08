<template>
    <span>
        <div class="page-inner-header mb-4 animated fadeInDown">
            <h5 class="mb-1">Change password</h5>
        </div>
        <form class="animated fadeInDown" autocomplete="off" @submit.prevent="update">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Old password</label>
                        <input v-model="oldPassword" class="form-control form-control-sm" type="password">
                    </div>
                    <p class="small text-danger" v-if="errors.oldPassword">
                        {{ errors.oldPassword[0] }}
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">New password</label>
                        <input v-model="password" class="form-control form-control-sm" type="password">
                    </div>
                    <p class="small text-danger" v-if="errors.password">
                        {{ errors.password[0] }}
                    </p>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Confirm password</label>
                        <input v-model="password_confirmation" class="form-control form-control-sm" type="password">
                    </div>
                    <p class="small text-danger" v-if="errors.password_confirmation">
                        {{ errors.password_confirmation[0] }}
                    </p>
                </div>
            </div>
            <div class="mt-4">
                <button type="submit" class="btn btn-sm btn-primary">Update password</button>
                <!-- <a href="recover.html" class="btn btn-sm btn-secondary">I forgot my password</a> -->
            </div>
        </form>

        <!-- Delete -->
        <div class="mt-5 pt-5 delimiter-top animated bounceInDown delay--1s">

            <div class="page-inner-header mb-4">
                <h5 class="mb-1 text-danger">Deactivate account</h5>

                <p class="text-muted mb-0">Changing your username is ireversible and can affect past activites.</p>
            </div>

            <!-- Button trigger modal -->
            <button type="button" class="btn btn-sm btn-danger" data-toggle="modal" data-target="#modal-delete-account">Deactivate</button>

        </div>
    </span>
</template>
<script>
export default {
    data() {
        return {
            updating: false,
            oldPassword: null,
            password: null,
            password_confirmation: null,
        }
    },
    props: {
        user: {
            required: true,
            type: Object
        },
        currentuser: {
            required: true,
            type: Array
        }
    },
    methods: {
        async update () {
            this.updating = true

            let data = {'oldPassword': this.oldPassword, 'password': this.password, 'password_confirmation': this.password_confirmation}

            try {
                let response = await this.$axios.$put('auth/passwordreset/'+this.user.id, data)
            } catch (e) {
                this.updating = false
                return;
            }
            this.updating = false
        }
    }
}
</script>