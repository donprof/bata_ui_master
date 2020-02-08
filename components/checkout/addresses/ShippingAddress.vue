<template>
    <div class="container pt-0">
        <!-- <span class="h2 mb-0 text-black d-block">Ship to:</span> -->
        
        <div class="row row-grid mt-3 d-lg-flex">
            <template v-if="selecting">
                <ShippingAddressSelector
                    :addresses="addresses"
                    :selectedAddress="selectedAddress"
                    @click="addressSelected"
                />
            </template>
            <template v-else-if="creating">
                <ShippingAddressCreator @cancel="creating = false" @created="created"/>
            </template>
            <template v-else>
                <template v-if="state == 1">
                    <template v-if="selectedAddress">
                        <div class="col-md-12">
                            <div class="page-inner-header mb-4">
                                <h5 class="mb-1">My primary addresses</h5>
                                <p class="text-muted mb-0">This is the current shipping address.</p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="card shadow">
                                <div class="card-body card-active">
                                    <div class="d-flex align-items-start">
                                        <div class="icon icon-shape icon-green rounded-circle">
                                            <i class="far fa-shipping-fast"></i>
                                        </div>
                                        <div class="icon-text px-4">
                                            <h5>{{ selectedAddress.name }}</h5>
                                            <p class="mb-0 text-sm">
                                                {{ selectedAddress.address_1 }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                    <div class="col-12 mt-2">
                        <div class="row mt-4">
                            <div class="col-6" v-if="selectedAddress != null">
                                <a href @click.prevent="selecting = true" class="btn btn-danger btn-sm btn-translate--hover px-4">Change address</a>
                            </div>
                            <div class="col-6 text-right">
                                <a href @click.prevent="creating = true" class="btn btn-sm btn-white btn-translate--hover">Add an address</a>
                            </div>
                        </div>
                    </div>
                </template>
            </template>
        </div>
    </div>
  <!-- <article class="message">
    <div class="message-body">
      <h1 class="title is-5">Ship to</h1>
      <template v-if="selecting">
        <ShippingAddressSelector
          :addresses="addresses"
          :selectedAddress="selectedAddress"
          @click="addressSelected"
        />
      </template>
      <template v-else-if="creating">
        <ShippingAddressCreator @cancel="creating = false" @created="created"/>
      </template>
      <template v-else>
        <template v-if="selectedAddress">
          <p>
            {{ selectedAddress.name }}
            <br>
            {{ selectedAddress.address_1 }}
            <br>
            {{ selectedAddress.city }}
            <br>
            {{ selectedAddress.postal_code }}
            <br>
            {{ selectedAddress.country.name }}
          </p>
          <br>
        </template>

        <div class="field is-grouped">
          <p class="control" v-if="selectedAddress != null">
            <a href class="button is-info" @click.prevent="selecting = true">Change shipping address</a>
          </p>
          <p class="control">
            <a href class="button is-info" @click.prevent="creating = true">Add an address</a>
          </p>
        </div>
      </template>
    </div>
  </article> -->
</template>

<script>
import ShippingAddressSelector from "./ShippingAddressSelector";
import ShippingAddressCreator from "./ShippingAddressCreator";

export default {
  data() {
    return {
      selecting: false,
      creating: false,
      localAddresses: this.addresses,
      selectedAddress: null
    };
  },

  watch: {
    selectedAddress(address) {
        this.$emit("input", address.id);
    }
  },

  components: {
    ShippingAddressSelector,
    ShippingAddressCreator
  },

  props: {
    addresses: {
      required: true,
      type: Array
    },
    state: {
      required: true,
      type: String
    },
  },

  computed: {
    defaultAddress() {
      return this.localAddresses.find(a => a.default === 1);
    }
  },

  methods: {
    addressSelected(address) {
      this.switchAddress(address);
      this.selecting = false;
    },

    switchAddress(address) {
      this.selectedAddress = address;
    },

    created(address) {
      this.localAddresses.push(address);
      this.creating = false;

      this.switchAddress(address);
    }
  },

  created() {
    if (this.addresses.length) {
      this.switchAddress(this.defaultAddress);
    }
  }
};
</script>
