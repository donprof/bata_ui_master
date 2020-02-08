<template>
  <tr>
    <td>
        <div class="media align-items-center">
            <img alt="Image placeholder" class="mr-3" src="/img/prv/product-1.png" style="width: 80px;">
            <div class="media-body">
                <div class="lh-100">
                    <span class="text-dark font-weight-bold mb-0">{{ product.product.name }} / {{ product.type }}</span>
                </div>
                <span class="font-weight-bold text-muted">Size: {{ product.name }}</span>
            </div>
        </div>
    </td>
    <td>
        <span class="font-weight-bold">{{ product.product.price }}</span>
    </td>
    <td>
      <select class="form-control form-control-sm text-center" style="width: 80px;" v-model="quantity">
        <option value="0" v-if="product.quantity == 0">0</option>
        <option
          :value="x"
          v-for="x in product.stock_count"
          :key="x"
          :selected="x == product.quantity"
        >
          {{ x }}
        </option>
      </select>
    </td>
    <td>
        <span class="font-weight-bold text-dark">{{ product.total }}</span>
    </td>
    <td class="text-right">
        <a href="#" class="text-light" @click.prevent="destroy(product.id)" data-toggle="tooltip" data-original-title="Remove item">
            <i class="far fa-trash-alt"></i>
        </a>
    </td>
</tr>

</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    computed: {
      quantity: {
        get () {
          return this.product.quantity
        },

        set (quantity) {
          this.update({ productId: this.product.id, quantity })
        }
      }
    },

    props: {
      product: {
        required: true,
        type: Object
      }
    },

    methods: {
      ...mapActions({
        destroy: 'cart/destroy',
        update: 'cart/update'
      })
    }
  }
</script>
