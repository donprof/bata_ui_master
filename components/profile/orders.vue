<template>
    <span>
        <div class="page-inner-header mb-4">
            <h5 class="mb-1">My orders</h5>
        </div>

        <div class="row">
            <Order
                v-for="order in orders"
                :key="order.id"
                :order="order"
            />
        </div>
        
    </span>
</template>
<script>
import Order from '@/components/orders/Order'
export default {
    components: {
        Order
	},
    props: {
        user: {
            required: true,
            type: Object
        },
        orders: {
            required: true,
            type: Array
        },
    },
}
</script>