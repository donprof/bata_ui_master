<template>
    <div class="row mt-3 pb-3 delimiter-bottom">
        <div :class="[state == 1 ? 'col-8' : 'col-8']">
            <div class="media align-items-center">
                <img :alt="product.product.name" class="mr-2" :src="product.product.imagelink+'icons/'+product.product.icon" style="width: 42px;">
                <div class="media-body">
                    <template v-if="state == 1">
                        <div class="text-limit lh-100">
                            <small class="text-dark font-weight-bold mb-0">{{ product.product.name }}</small>
                        </div>
                        <small class="text-muted">{{ product.quantity }} x {{ product.price }}</small>
                    </template>
                    <template v-else>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="text-limit lh-100">
                                    <small class="text-dark font-weight-bold mb-0">{{ product.product.name }} / {{ product.type }}</small>
                                </div>
                                <small class="text-muted">{{ product.quantity }} x {{ product.price }}</small>
                            </div>
                            <div class="col-md-4">

                                <select class="form-control form-control-sm text-center" v-model="quantity">
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
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="text-right lh-100" :class="[state == 1 ? 'col-4' : 'col-4']">
            <small class="text-dark">Ksh {{ product.total }}</small>
            <span @click.prevent="destroy(product.id)" class="badge badge-pill badge-danger text-sm deleteIcon pointer">
                <span v-if="submitting">
                    <i class="fas fa-spinner fa-spin"></i>
                </span>
                <span v-else>
                    <i class="far fa-trash-alt"></i>
                </span>
            </span>
        </div>


        <!-- <div class="col-9">
            <div class="media align-items-center">
                <img alt="Image placeholder" class="mr-2" src="/img/prv/product-1.png" style="width: 42px;">
                <div class="media-body">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="text-limit lh-100">
                                <small class="text-dark font-weight-bold mb-0">{{ product.product.name }} / {{ product.type }}</small>
                            </div>
                            <small class="text-muted">Size: {{ product.name }} @ ({{ product.price }}/=)</small>
                        </div>
                        <div class="col-md-4">
                            <select class="form-control form-control-sm text-center" v-model="quantity">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col-3 text-right lh-100">
            <small class="text-dark">{{ product.total }}</small>
        </div>
        <span @click.prevent="destroy(product.id)" class="badge badge-pill badge-danger text-sm deleteIcon">
            <i class="far fa-trash-alt"></i>
        </span> -->
    </div>


  <!-- <tr>
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
</tr> -->

</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    data() {
        return {
            submitting: false
        }
    },
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
        },
        state:{
            required: true,
            type: String
        }
    },

    methods: {
        ...mapActions({
            destroyShoe: 'cart/destroy',
            update: 'cart/update'
        }),
        destroy(productId){
            this.submitting = true;
            // console.log(id)
            this.destroyShoe(productId)
            // .then(() => {
            //     this.submitting = false;
            // })
        },
    }
  }
</script>
