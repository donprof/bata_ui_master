<template>
    <div>
        <div class="page-inner-header mb-4 animated fadeInDown">
            <h5 class="mb-1">Address details</h5>
        </div>
        <div class="row mb-5 animated fadeInDown">
            <div class="col-lg-6 mb-3" v-for="add in user.addresses" :key="add.id">
                <div class="card shadow pointer" @click="selected(add)">
                    <div class="card-body">
                        <div class="d-flex align-items-start">
                            <div class="icon icon-shape rounded-circle" :class="[add.default == 1 ? 'icon-green':'']"><i class="far fa-shipping-fast"></i></div>
                            <div class="icon-text px-4">
                                <h5>{{add.city}}</h5>
                                <p class="mb-0 text-sm">
                                    {{add.name}}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <form autocomplete="off" @submit.prevent="update">
            <div class="row animated bounceInDown delay--1s" v-if="selectlocation">
                <div class="col-6">
                    <div class="form-group">
                        <label class="form-control-label">Name</label>
                        <input v-model="selectlocation.name" class="form-control form-control-sm" type="text" placeholder="Enter location name">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Physical address</label>
                        <input v-model="selectlocation.address_1" class="form-control form-control-sm" type="text" placeholder="City">
                    </div>
                </div>
                <div class="col-md-12">
                    <div class="form-group">
                        <label class="form-control-label">Town</label>
                        <input v-model="selectlocation.city" class="form-control form-control-sm" type="text" placeholder="town">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group focused">
                        <label class="form-control-label">Regions</label>
                        <select class="form-control form-control-sm select2-hidden-accessible" data-toggle="select" title="Regions" data-live-search="true" data-live-search-placeholder="Regions" data-select2-id="4" tabindex="-1" aria-hidden="true">
                            <option data-select2-id="6">Romania</option>
                            <option>United Stated</option>
                            <option>France</option>
                            <option>Greece</option>
                            <option>Italy</option>
                            <option>Norway</option>
                        </select>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label class="form-control-label">Postal code</label>
                        <input v-model="selectlocation.postal_code" class="form-control form-control-sm" type="text" placeholder="Postal code">
                    </div>
                </div>
                
                <div class="col-12">
                    <div class="pt-3 mt-2 delimiter-top">
                        <button type="submit" class="btn btn-sm btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    data() {
        return {
            selectlocation: null
        }
    },
    props: {
        user: {
            required: true,
            type: Object
        }
    },
    methods: {
        selected(val){
            this.selectlocation = val
        },
        async update () {
            this.updating = true

            let data = {'name': this.selectlocation.name, 'physicaAddress': this.selectlocation.address_1, 'city': this.selectlocation.city, 'postal_code': this.selectlocation.postal_code,}

            try {
                let response = await this.$axios.$put('addresses/'+this.selectlocation.id, data)
            } catch (e) {
                this.updating = false
                return;
            }
            this.updating = false
        }
    },
}
</script>