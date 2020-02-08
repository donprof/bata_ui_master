<template>
<div class="col-12 mt-0">
    <div class="page-inner-header mb-4">
        <h5 class="mb-1">My saved addresses</h5>
        <p class="text-muted mb-0">Use one of your saved addresses for fast checkout.</p>
    </div>
    <div class="row">
        <div class="col-lg-6 mt-3" v-for="address in addresses" :key="address.id">
            <div class="card shadow" @click.prevent="$emit('click', address)">
                <div class="card-body" :class="{ 'card-active': address.id === selectedAddress.id }">
                    <div class="d-flex align-items-start">
                        <div class="icon icon-shape rounded-circle" :class="{ 'icon-green': address.id === selectedAddress.id }">
                            <i class="far fa-shipping-fast"></i>
                        </div>
                        <div class="icon-text px-4">
                            <h5>{{ address.name }}</h5>
                            <p class="mb-0 text-sm">
                                {{ address.address_1 }}<br>
                                {{ address.city }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
  export default {
    props: {
      addresses: {
        required: true,
        type: Array
      },
      selectedAddress: {
        required: true,
        type: Object
      }
    }
  }
</script>
